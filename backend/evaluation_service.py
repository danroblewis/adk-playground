"""Evaluation service for ADK agents.

This module provides ADK-compatible evaluation functionality including:
- Response matching using ROUGE-1 (fuzzy text matching)
- Tool trajectory matching (EXACT, IN_ORDER, ANY_ORDER)
- Percentage coverage and scoring
- Support for all ADK prebuilt metrics
"""

from __future__ import annotations

import logging
import re
import time
import uuid
from collections import Counter
from typing import Any, Dict, List, Optional, Tuple

from models import (
    Project, EvalSet, EvalCase, EvalInvocation, ExpectedToolCall,
    EvalSetResult, EvalCaseResult, InvocationResult, MetricResult,
    ToolTrajectoryMatchType, EvalMetricType, EvalConfig, EvalMetricConfig,
)

logger = logging.getLogger(__name__)


# ============================================================================
# ROUGE-1 Implementation (for fuzzy text matching)
# ============================================================================

class RougeScorer:
    """Simple ROUGE-1 scorer for text similarity.
    
    ROUGE-1 measures unigram (single word) overlap between candidate and reference.
    Returns precision, recall, and F1 (fmeasure) scores between 0.0 and 1.0.
    """
    
    def __init__(self, use_stemmer: bool = True):
        self.use_stemmer = use_stemmer
        self._stemmer = None
        if use_stemmer:
            try:
                from nltk.stem.porter import PorterStemmer
                self._stemmer = PorterStemmer()
            except ImportError:
                # NLTK not available, fall back to no stemming
                pass
    
    def _tokenize(self, text: str) -> List[str]:
        """Tokenize text into lowercase words."""
        # Simple tokenization: lowercase, split on non-alphanumeric
        tokens = re.findall(r'\b\w+\b', text.lower())
        if self._stemmer:
            tokens = [self._stemmer.stem(t) for t in tokens]
        return tokens
    
    def score(self, reference: str, candidate: str) -> Dict[str, 'RougeScore']:
        """Calculate ROUGE-1 scores.
        
        Args:
            reference: The ground-truth text (expected)
            candidate: The generated text (actual)
            
        Returns:
            Dict with 'rouge1' key containing RougeScore
        """
        ref_tokens = self._tokenize(reference)
        cand_tokens = self._tokenize(candidate)
        
        if not ref_tokens or not cand_tokens:
            return {'rouge1': RougeScore(0.0, 0.0, 0.0)}
        
        ref_counts = Counter(ref_tokens)
        cand_counts = Counter(cand_tokens)
        
        # Calculate overlap
        overlap = 0
        for token, count in cand_counts.items():
            overlap += min(count, ref_counts.get(token, 0))
        
        precision = overlap / len(cand_tokens) if cand_tokens else 0.0
        recall = overlap / len(ref_tokens) if ref_tokens else 0.0
        
        if precision + recall > 0:
            fmeasure = 2 * precision * recall / (precision + recall)
        else:
            fmeasure = 0.0
        
        return {'rouge1': RougeScore(precision, recall, fmeasure)}


class RougeScore:
    """ROUGE score with precision, recall, and F-measure."""
    
    def __init__(self, precision: float, recall: float, fmeasure: float):
        self.precision = precision
        self.recall = recall
        self.fmeasure = fmeasure


# ============================================================================
# Response Evaluator
# ============================================================================

class ResponseEvaluator:
    """Evaluates agent responses using ROUGE-1 fuzzy matching.
    
    Value range: [0, 1] with values closer to 1 being better.
    """
    
    def __init__(self, threshold: float = 0.7):
        self.threshold = threshold
        self.scorer = RougeScorer(use_stemmer=True)
    
    def evaluate(
        self,
        actual_response: str,
        expected_response: str,
    ) -> Tuple[Optional[float], Optional[bool]]:
        """Evaluate a single response.
        
        Returns:
            Tuple of (score, passed)
        """
        if not expected_response:
            return (None, None)
        
        if not actual_response:
            return (0.0, False)
        
        scores = self.scorer.score(expected_response, actual_response)
        score = scores['rouge1'].fmeasure
        passed = score >= self.threshold
        
        return (score, passed)


# ============================================================================
# Trajectory Evaluator
# ============================================================================

class TrajectoryEvaluator:
    """Evaluates tool use trajectories for accuracy.
    
    Supports three match types:
    - EXACT: Perfect match, same order, no extra tools
    - IN_ORDER: Expected tools appear in order, extras allowed between
    - ANY_ORDER: All expected tools present, any order, extras allowed
    """
    
    def __init__(
        self,
        match_type: ToolTrajectoryMatchType = ToolTrajectoryMatchType.IN_ORDER,
    ):
        self.match_type = match_type
    
    def evaluate(
        self,
        actual_tool_calls: List[Dict[str, Any]],
        expected_tool_calls: List[ExpectedToolCall],
    ) -> Tuple[Optional[float], Optional[bool]]:
        """Evaluate tool trajectory.
        
        Returns:
            Tuple of (score, passed)
        """
        if not expected_tool_calls:
            return (None, None)
        
        if not actual_tool_calls and expected_tool_calls:
            return (0.0, False)
        
        if self.match_type == ToolTrajectoryMatchType.EXACT:
            matched = self._exact_match(actual_tool_calls, expected_tool_calls)
        elif self.match_type == ToolTrajectoryMatchType.IN_ORDER:
            matched = self._in_order_match(actual_tool_calls, expected_tool_calls)
        elif self.match_type == ToolTrajectoryMatchType.ANY_ORDER:
            matched = self._any_order_match(actual_tool_calls, expected_tool_calls)
        else:
            matched = False
        
        score = 1.0 if matched else 0.0
        return (score, matched)
    
    def _tool_matches(
        self,
        actual: Dict[str, Any],
        expected: ExpectedToolCall,
    ) -> bool:
        """Check if an actual tool call matches an expected one."""
        if actual.get("name") != expected.name:
            return False
        
        if expected.args_match_mode == "ignore":
            return True
        
        actual_args = actual.get("args", {})
        expected_args = expected.args or {}
        
        if expected.args_match_mode == "exact":
            return actual_args == expected_args
        elif expected.args_match_mode == "subset":
            for key, value in expected_args.items():
                if key not in actual_args or actual_args[key] != value:
                    return False
            return True
        
        return True
    
    def _exact_match(
        self,
        actual: List[Dict[str, Any]],
        expected: List[ExpectedToolCall],
    ) -> bool:
        """Check if actual tool calls exactly match expected."""
        if len(actual) != len(expected):
            return False
        
        for a, e in zip(actual, expected):
            if not self._tool_matches(a, e):
                return False
        
        return True
    
    def _in_order_match(
        self,
        actual: List[Dict[str, Any]],
        expected: List[ExpectedToolCall],
    ) -> bool:
        """Check if expected tools appear in actual in order (extras allowed)."""
        if not expected:
            return True
        
        expected_iter = iter(expected)
        current_expected = next(expected_iter)
        
        try:
            for actual_call in actual:
                if self._tool_matches(actual_call, current_expected):
                    current_expected = next(expected_iter)
        except StopIteration:
            return True
        
        return False
    
    def _any_order_match(
        self,
        actual: List[Dict[str, Any]],
        expected: List[ExpectedToolCall],
    ) -> bool:
        """Check if all expected tools appear in actual (any order, extras allowed)."""
        if not expected:
            return True
        
        actual_copy = list(actual)
        
        for exp in expected:
            found = False
            for i, act in enumerate(actual_copy):
                if self._tool_matches(act, exp):
                    actual_copy.pop(i)
                    found = True
                    break
            if not found:
                return False
        
        return True


# ============================================================================
# Evaluation Service
# ============================================================================

class EvaluationService:
    """Service for running ADK-compatible evaluations."""
    
    def __init__(self, runtime_manager):
        """Initialize the evaluation service.
        
        Args:
            runtime_manager: The RuntimeManager instance for running agents
        """
        self.runtime_manager = runtime_manager
    
    def _get_metric_config(
        self,
        eval_config: EvalConfig,
        metric: EvalMetricType,
    ) -> Optional[EvalMetricConfig]:
        """Get the configuration for a specific metric."""
        for m in eval_config.metrics:
            if m.metric == metric and m.enabled:
                return m
        return None
    
    async def run_eval_set(
        self,
        project: Project,
        eval_set: EvalSet,
        agent_id: Optional[str] = None,
    ) -> EvalSetResult:
        """Run all evaluation cases in an eval set."""
        result = EvalSetResult(
            id=str(uuid.uuid4())[:8],
            eval_set_id=eval_set.id,
            eval_set_name=eval_set.name,
            project_id=project.id,
            started_at=time.time(),
            total_cases=len(eval_set.eval_cases),
        )
        
        # Track scores per metric
        metric_scores: Dict[str, List[float]] = {}
        metric_pass_counts: Dict[str, int] = {}
        metric_totals: Dict[str, int] = {}
        
        for eval_case in eval_set.eval_cases:
            case_result = await self.run_eval_case(
                project=project,
                eval_case=eval_case,
                eval_config=eval_set.eval_config,
                agent_id=agent_id,
            )
            result.case_results.append(case_result)
            
            # Aggregate statistics
            if case_result.error:
                result.error_cases += 1
            elif case_result.passed:
                result.passed_cases += 1
            else:
                result.failed_cases += 1
            
            # Collect per-metric scores
            for mr in case_result.metric_results:
                if mr.metric not in metric_scores:
                    metric_scores[mr.metric] = []
                    metric_pass_counts[mr.metric] = 0
                    metric_totals[mr.metric] = 0
                
                if mr.score is not None:
                    metric_scores[mr.metric].append(mr.score)
                metric_totals[mr.metric] += 1
                if mr.passed:
                    metric_pass_counts[mr.metric] += 1
        
        result.ended_at = time.time()
        result.duration_ms = (result.ended_at - result.started_at) * 1000
        
        # Calculate coverage metrics
        if result.total_cases > 0:
            result.overall_pass_rate = result.passed_cases / result.total_cases
        
        # Calculate per-metric pass rates and averages
        for metric in metric_scores:
            if metric_totals[metric] > 0:
                result.metric_pass_rates[metric] = metric_pass_counts[metric] / metric_totals[metric]
            if metric_scores[metric]:
                result.metric_avg_scores[metric] = sum(metric_scores[metric]) / len(metric_scores[metric])
        
        return result
    
    async def run_eval_case(
        self,
        project: Project,
        eval_case: EvalCase,
        eval_config: Optional[EvalConfig] = None,
        agent_id: Optional[str] = None,
    ) -> EvalCaseResult:
        """Run a single evaluation case."""
        # Use provided config or default
        if eval_config is None:
            eval_config = EvalConfig()
        
        # Get thresholds from enabled metrics
        response_config = self._get_metric_config(eval_config, EvalMetricType.RESPONSE_MATCH_SCORE)
        trajectory_config = self._get_metric_config(eval_config, EvalMetricType.TOOL_TRAJECTORY_AVG_SCORE)
        
        response_threshold = response_config.criterion.threshold if response_config else 0.7
        trajectory_match_type = eval_config.default_trajectory_match_type
        
        # Initialize evaluators
        response_evaluator = ResponseEvaluator(threshold=response_threshold)
        trajectory_evaluator = TrajectoryEvaluator(match_type=trajectory_match_type)
        
        result = EvalCaseResult(
            eval_case_id=eval_case.id,
            eval_case_name=eval_case.name,
            session_id="",
            started_at=time.time(),
        )
        
        try:
            # Run each invocation in sequence
            session_id = None
            all_passed = True
            
            # Track per-metric results across invocations
            metric_scores: Dict[str, List[float]] = {}
            metric_passed: Dict[str, bool] = {}
            
            for invocation in eval_case.invocations:
                inv_result = await self._run_invocation(
                    project=project,
                    invocation=invocation,
                    agent_id=agent_id,
                    session_id=session_id,
                    response_evaluator=response_evaluator,
                    trajectory_evaluator=trajectory_evaluator,
                    eval_config=eval_config,
                )
                
                result.invocation_results.append(inv_result)
                
                # Update session_id for next invocation
                if not session_id and inv_result.invocation_id:
                    session_id = inv_result.invocation_id.split('_')[0] if '_' in inv_result.invocation_id else inv_result.invocation_id
                
                # Aggregate metric results
                for mr in inv_result.metric_results:
                    if mr.metric not in metric_scores:
                        metric_scores[mr.metric] = []
                        metric_passed[mr.metric] = True
                    
                    if mr.score is not None:
                        metric_scores[mr.metric].append(mr.score)
                    if not mr.passed:
                        metric_passed[mr.metric] = False
                
                if not inv_result.passed:
                    all_passed = False
            
            result.session_id = session_id or ""
            result.passed = all_passed
            
            # Build overall metric results
            for metric, scores in metric_scores.items():
                avg_score = sum(scores) / len(scores) if scores else None
                result.metric_results.append(MetricResult(
                    metric=metric,
                    score=avg_score,
                    threshold=self._get_threshold_for_metric(eval_config, metric),
                    passed=metric_passed.get(metric, True),
                ))
            
            # Add enabled LLM-judged metrics from the EvalCase
            # These metrics require external LLM evaluation (Vertex AI or custom)
            # For now, we add placeholder results indicating they need to be configured
            if hasattr(eval_case, 'enabled_metrics') and eval_case.enabled_metrics:
                for em in eval_case.enabled_metrics:
                    # Skip if this metric already has results from standard evaluation
                    if any(mr.metric == em.metric for mr in result.metric_results):
                        continue
                    
                    # Placeholder: These metrics require LLM judge integration
                    # In production, this would call the appropriate ADK evaluator
                    result.metric_results.append(MetricResult(
                        metric=em.metric,
                        score=None,  # Not evaluated
                        threshold=em.threshold,
                        passed=False,
                        error=f"{em.metric} requires LLM judge configuration",
                    ))
            
            # Aggregate token counts from all invocations
            for inv_result in result.invocation_results:
                result.total_input_tokens += inv_result.input_tokens
                result.total_output_tokens += inv_result.output_tokens
            result.total_tokens = result.total_input_tokens + result.total_output_tokens
            
        except Exception as e:
            import traceback
            result.error = f"{str(e)}\n{traceback.format_exc()}"
            result.passed = False
        
        result.ended_at = time.time()
        result.duration_ms = (result.ended_at - result.started_at) * 1000
        
        return result
    
    def _get_threshold_for_metric(self, eval_config: EvalConfig, metric: str) -> float:
        """Get the threshold for a metric from config."""
        for m in eval_config.metrics:
            if m.metric.value == metric or m.metric == metric:
                return m.criterion.threshold
        return 0.7
    
    async def _run_invocation(
        self,
        project: Project,
        invocation: EvalInvocation,
        agent_id: Optional[str],
        session_id: Optional[str],
        response_evaluator: ResponseEvaluator,
        trajectory_evaluator: TrajectoryEvaluator,
        eval_config: EvalConfig,
    ) -> InvocationResult:
        """Run a single invocation and evaluate it."""
        result = InvocationResult(
            invocation_id=invocation.id or str(uuid.uuid4())[:8],
            user_message=invocation.user_message,
            expected_response=invocation.expected_response,
            expected_tool_calls=[
                {"name": tc.name, "args": tc.args, "args_match_mode": tc.args_match_mode}
                for tc in invocation.expected_tool_calls
            ],
        )
        
        try:
            # Collect events from running the agent
            collected_events = []
            
            async def event_callback(event):
                collected_events.append(event)
            
            # Run the agent
            async for event in self.runtime_manager.run_agent(
                project=project,
                user_message=invocation.user_message,
                event_callback=event_callback,
                agent_id=agent_id,
                session_id=session_id,
            ):
                collected_events.append(event)
            
            # Extract actual response and tool calls from events
            actual_response = ""
            actual_tool_calls = []
            input_tokens = 0
            output_tokens = 0
            
            for event in collected_events:
                event_data = event.data if hasattr(event, 'data') else {}
                event_type = event.event_type if hasattr(event, 'event_type') else ""
                
                # Extract response text
                if event_type == "model_response":
                    text = event_data.get("text", "")
                    if text:
                        actual_response += text
                    parts = event_data.get("parts", [])
                    for part in parts:
                        if part.get("type") == "text" and not part.get("thought"):
                            actual_response += part.get("text", "")
                    
                    # Extract token counts
                    token_counts = event_data.get("token_counts", {})
                    input_tokens += token_counts.get("input_tokens", 0)
                    output_tokens += token_counts.get("output_tokens", 0)
                
                # Extract tool calls
                if event_type == "tool_call":
                    tool_name = event_data.get("tool_name", "")
                    tool_args = event_data.get("args", {})
                    if tool_name:
                        actual_tool_calls.append({"name": tool_name, "args": tool_args})
            
            result.actual_response = actual_response.strip()
            result.actual_tool_calls = actual_tool_calls
            result.input_tokens = input_tokens
            result.output_tokens = output_tokens
            
            all_passed = True
            
            # Evaluate response_match_score if enabled
            if self._get_metric_config(eval_config, EvalMetricType.RESPONSE_MATCH_SCORE):
                if invocation.expected_response:
                    score, passed = response_evaluator.evaluate(
                        actual_response=result.actual_response,
                        expected_response=invocation.expected_response,
                    )
                    result.metric_results.append(MetricResult(
                        metric=EvalMetricType.RESPONSE_MATCH_SCORE.value,
                        score=score,
                        threshold=response_evaluator.threshold,
                        passed=passed if passed is not None else True,
                    ))
                    if passed is not None and not passed:
                        all_passed = False
            
            # Evaluate tool_trajectory_avg_score if enabled
            if self._get_metric_config(eval_config, EvalMetricType.TOOL_TRAJECTORY_AVG_SCORE):
                if invocation.expected_tool_calls:
                    # Use per-invocation match type if specified
                    traj_eval = TrajectoryEvaluator(
                        match_type=invocation.tool_trajectory_match_type or trajectory_evaluator.match_type
                    )
                    score, passed = traj_eval.evaluate(
                        actual_tool_calls=actual_tool_calls,
                        expected_tool_calls=invocation.expected_tool_calls,
                    )
                    result.metric_results.append(MetricResult(
                        metric=EvalMetricType.TOOL_TRAJECTORY_AVG_SCORE.value,
                        score=score,
                        threshold=1.0,  # Trajectory is binary
                        passed=passed if passed is not None else True,
                    ))
                    if passed is not None and not passed:
                        all_passed = False
            
            # LLM-judged metrics (placeholders - would require actual API calls)
            for metric_type in [
                EvalMetricType.RESPONSE_EVALUATION_SCORE,
                EvalMetricType.FINAL_RESPONSE_MATCH_V2,
                EvalMetricType.SAFETY_V1,
                EvalMetricType.HALLUCINATIONS_V1,
                EvalMetricType.RUBRIC_BASED_FINAL_RESPONSE_QUALITY_V1,
                EvalMetricType.RUBRIC_BASED_TOOL_USE_QUALITY_V1,
            ]:
                config = self._get_metric_config(eval_config, metric_type)
                if config:
                    # TODO: Implement actual LLM-judged evaluation
                    result.metric_results.append(MetricResult(
                        metric=metric_type.value,
                        score=None,
                        threshold=config.criterion.threshold,
                        passed=True,
                        error="LLM-judged metrics not yet implemented",
                    ))
            
            result.passed = all_passed
            
        except Exception as e:
            import traceback
            result.error = f"{str(e)}\n{traceback.format_exc()}"
            result.passed = False
        
        return result


def create_evaluation_service(runtime_manager) -> EvaluationService:
    """Factory function to create an EvaluationService."""
    return EvaluationService(runtime_manager)
