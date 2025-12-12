"""Evaluation service for ADK agents.

This module provides ADK-compatible evaluation functionality including:
- Response matching using ROUGE-1 (fuzzy text matching)
- Tool trajectory matching (EXACT, IN_ORDER, ANY_ORDER)
- Percentage coverage and scoring
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
    EvalSetResult, EvalCaseResult, InvocationResult,
    ToolTrajectoryMatchType,
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
    ) -> Tuple[float, bool]:
        """Evaluate a single response.
        
        Args:
            actual_response: The agent's actual response
            expected_response: The expected/golden response
            
        Returns:
            Tuple of (score, passed) where:
            - score is ROUGE-1 F1 between 0.0 and 1.0
            - passed is True if score >= threshold
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
    
    Score is 1.0 for match, 0.0 for mismatch.
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
    ) -> Tuple[float, bool]:
        """Evaluate tool trajectory.
        
        Args:
            actual_tool_calls: List of actual tool calls [{"name": ..., "args": ...}]
            expected_tool_calls: List of expected tool calls
            
        Returns:
            Tuple of (score, passed) where:
            - score is 1.0 if matched, 0.0 if not
            - passed is True if matched
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
        # Check name
        if actual.get("name") != expected.name:
            return False
        
        # Check args based on match mode
        if expected.args_match_mode == "ignore":
            return True
        
        actual_args = actual.get("args", {})
        expected_args = expected.args or {}
        
        if expected.args_match_mode == "exact":
            return actual_args == expected_args
        elif expected.args_match_mode == "subset":
            # Expected args must be subset of actual args
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
            # All expected tools found
            return True
        
        # Not all expected tools were found
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
    
    async def run_eval_set(
        self,
        project: Project,
        eval_set: EvalSet,
        agent_id: Optional[str] = None,
    ) -> EvalSetResult:
        """Run all evaluation cases in an eval set.
        
        Args:
            project: The project containing the agent
            eval_set: The evaluation set to run
            agent_id: Optional specific agent to test (defaults to root_agent_id)
            
        Returns:
            EvalSetResult with all case results and coverage metrics
        """
        result = EvalSetResult(
            id=str(uuid.uuid4())[:8],
            eval_set_id=eval_set.id,
            eval_set_name=eval_set.name,
            project_id=project.id,
            started_at=time.time(),
            total_cases=len(eval_set.eval_cases),
        )
        
        response_scores = []
        trajectory_scores = []
        
        for eval_case in eval_set.eval_cases:
            case_result = await self.run_eval_case(
                project=project,
                eval_case=eval_case,
                agent_id=agent_id,
                default_response_threshold=eval_set.default_response_threshold,
                default_trajectory_match_type=eval_set.default_trajectory_match_type,
            )
            result.case_results.append(case_result)
            
            # Aggregate statistics
            if case_result.error:
                result.error_cases += 1
            elif case_result.overall_passed:
                result.passed_cases += 1
            else:
                result.failed_cases += 1
            
            # Collect scores for averages
            if case_result.overall_response_score is not None:
                response_scores.append(case_result.overall_response_score)
            if case_result.overall_trajectory_score is not None:
                trajectory_scores.append(case_result.overall_trajectory_score)
        
        result.ended_at = time.time()
        result.duration_ms = (result.ended_at - result.started_at) * 1000
        
        # Calculate coverage metrics
        if result.total_cases > 0:
            result.overall_pass_rate = result.passed_cases / result.total_cases
            
            # Calculate pass rates for response and trajectory separately
            response_passed = sum(1 for r in result.case_results if r.response_passed)
            trajectory_passed = sum(1 for r in result.case_results if r.trajectory_passed)
            
            result.response_pass_rate = response_passed / result.total_cases
            result.trajectory_pass_rate = trajectory_passed / result.total_cases
        
        # Calculate average scores
        if response_scores:
            result.avg_response_score = sum(response_scores) / len(response_scores)
        if trajectory_scores:
            result.avg_trajectory_score = sum(trajectory_scores) / len(trajectory_scores)
        
        return result
    
    async def run_eval_case(
        self,
        project: Project,
        eval_case: EvalCase,
        agent_id: Optional[str] = None,
        default_response_threshold: float = 0.7,
        default_trajectory_match_type: ToolTrajectoryMatchType = ToolTrajectoryMatchType.IN_ORDER,
    ) -> EvalCaseResult:
        """Run a single evaluation case.
        
        Args:
            project: The project containing the agent
            eval_case: The evaluation case to run
            agent_id: Optional specific agent to test
            default_response_threshold: Default threshold if not set in case
            default_trajectory_match_type: Default match type if not set in case
            
        Returns:
            EvalCaseResult with all invocation results and scores
        """
        # Use case-specific thresholds or defaults
        response_threshold = eval_case.response_match_threshold or default_response_threshold
        trajectory_match_type = eval_case.trajectory_match_type or default_trajectory_match_type
        
        # Initialize evaluators
        response_evaluator = ResponseEvaluator(threshold=response_threshold)
        trajectory_evaluator = TrajectoryEvaluator(match_type=trajectory_match_type)
        
        result = EvalCaseResult(
            eval_case_id=eval_case.id,
            eval_case_name=eval_case.name,
            session_id="",  # Will be set when running
            response_threshold=response_threshold,
            trajectory_match_type=trajectory_match_type,
            started_at=time.time(),
        )
        
        try:
            # Run each invocation in sequence
            session_id = None
            all_response_passed = True
            all_trajectory_passed = True
            response_scores = []
            trajectory_scores = []
            
            for invocation in eval_case.invocations:
                inv_result = await self._run_invocation(
                    project=project,
                    invocation=invocation,
                    agent_id=agent_id,
                    session_id=session_id,  # Reuse session for multi-turn
                    response_evaluator=response_evaluator,
                    trajectory_evaluator=trajectory_evaluator,
                )
                
                result.invocation_results.append(inv_result)
                
                # Update session_id for next invocation (multi-turn)
                if not session_id and inv_result.invocation_id:
                    session_id = inv_result.invocation_id.split('_')[0] if '_' in inv_result.invocation_id else inv_result.invocation_id
                
                # Aggregate scores
                if inv_result.response_passed is not None:
                    all_response_passed = all_response_passed and inv_result.response_passed
                    if inv_result.response_score is not None:
                        response_scores.append(inv_result.response_score)
                
                if inv_result.trajectory_passed is not None:
                    all_trajectory_passed = all_trajectory_passed and inv_result.trajectory_passed
                    if inv_result.trajectory_score is not None:
                        trajectory_scores.append(inv_result.trajectory_score)
            
            result.session_id = session_id or ""
            result.response_passed = all_response_passed
            result.trajectory_passed = all_trajectory_passed
            result.overall_passed = all_response_passed and all_trajectory_passed
            
            # Calculate overall scores
            if response_scores:
                result.overall_response_score = sum(response_scores) / len(response_scores)
            if trajectory_scores:
                result.overall_trajectory_score = sum(trajectory_scores) / len(trajectory_scores)
            
        except Exception as e:
            import traceback
            result.error = f"{str(e)}\n{traceback.format_exc()}"
            result.overall_passed = False
        
        result.ended_at = time.time()
        result.duration_ms = (result.ended_at - result.started_at) * 1000
        
        return result
    
    async def _run_invocation(
        self,
        project: Project,
        invocation: EvalInvocation,
        agent_id: Optional[str],
        session_id: Optional[str],
        response_evaluator: ResponseEvaluator,
        trajectory_evaluator: TrajectoryEvaluator,
    ) -> InvocationResult:
        """Run a single invocation and evaluate it.
        
        Args:
            project: The project containing the agent
            invocation: The invocation to run
            agent_id: Optional specific agent to test
            session_id: Optional session ID to reuse (for multi-turn)
            response_evaluator: The response evaluator
            trajectory_evaluator: The trajectory evaluator
            
        Returns:
            InvocationResult with scores
        """
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
            
            for event in collected_events:
                event_data = event.data if hasattr(event, 'data') else {}
                event_type = event.event_type if hasattr(event, 'event_type') else ""
                
                # Extract response text
                if event_type == "model_response":
                    text = event_data.get("text", "")
                    if text:
                        actual_response += text
                    # Also check for structured parts
                    parts = event_data.get("parts", [])
                    for part in parts:
                        if part.get("type") == "text" and not part.get("thought"):
                            actual_response += part.get("text", "")
                
                # Extract tool calls
                if event_type == "tool_call":
                    tool_name = event_data.get("tool_name", "")
                    tool_args = event_data.get("args", {})
                    if tool_name:
                        actual_tool_calls.append({"name": tool_name, "args": tool_args})
            
            result.actual_response = actual_response.strip()
            result.actual_tool_calls = actual_tool_calls
            
            # Evaluate response
            if invocation.expected_response:
                score, passed = response_evaluator.evaluate(
                    actual_response=result.actual_response,
                    expected_response=invocation.expected_response,
                )
                result.response_score = score
                result.response_passed = passed
            
            # Evaluate trajectory
            if invocation.expected_tool_calls:
                score, passed = trajectory_evaluator.evaluate(
                    actual_tool_calls=actual_tool_calls,
                    expected_tool_calls=invocation.expected_tool_calls,
                )
                result.trajectory_score = score
                result.trajectory_passed = passed
            
        except Exception as e:
            import traceback
            result.error = f"{str(e)}\n{traceback.format_exc()}"
        
        return result


def create_evaluation_service(runtime_manager) -> EvaluationService:
    """Factory function to create an EvaluationService."""
    return EvaluationService(runtime_manager)
