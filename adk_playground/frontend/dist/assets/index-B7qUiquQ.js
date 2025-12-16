function q1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Va(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qm={exports:{}},Wa={},Xm={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),J1=Symbol.for("react.portal"),K1=Symbol.for("react.fragment"),G1=Symbol.for("react.strict_mode"),Y1=Symbol.for("react.profiler"),Q1=Symbol.for("react.provider"),X1=Symbol.for("react.context"),Z1=Symbol.for("react.forward_ref"),e0=Symbol.for("react.suspense"),t0=Symbol.for("react.memo"),n0=Symbol.for("react.lazy"),Xp=Symbol.iterator;function r0(e){return e===null||typeof e!="object"?null:(e=Xp&&e[Xp]||e["@@iterator"],typeof e=="function"?e:null)}var Zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eg=Object.assign,tg={};function Ci(e,t,n){this.props=e,this.context=t,this.refs=tg,this.updater=n||Zm}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ng(){}ng.prototype=Ci.prototype;function Bu(e,t,n){this.props=e,this.context=t,this.refs=tg,this.updater=n||Zm}var Uu=Bu.prototype=new ng;Uu.constructor=Bu;eg(Uu,Ci.prototype);Uu.isPureReactComponent=!0;var Zp=Array.isArray,rg=Object.prototype.hasOwnProperty,Vu={current:null},ig={key:!0,ref:!0,__self:!0,__source:!0};function og(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)rg.call(t,r)&&!ig.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ho,type:e,key:s,ref:a,props:i,_owner:Vu.current}}function i0(e,t){return{$$typeof:Ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ho}function o0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ef=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?o0(""+e.key):t.toString(36)}function $s(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ho:case J1:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+kl(a,0):r,Zp(i)?(n="",e!=null&&(n=e.replace(ef,"$&/")+"/"),$s(i,t,n,"",function(u){return u})):i!=null&&(Wu(i)&&(i=i0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ef,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Zp(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+kl(s,l);a+=$s(s,t,n,c,i)}else if(c=r0(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+kl(s,l++),a+=$s(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ds(e,t,n){if(e==null)return e;var r=[],i=0;return $s(e,r,"","",function(s){return t.call(n,s,i++)}),r}function s0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xt={current:null},Ds={transition:null},a0={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:Ds,ReactCurrentOwner:Vu};function sg(){throw Error("act(...) is not supported in production builds of React.")}Ce.Children={map:ds,forEach:function(e,t,n){ds(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ds(e,function(){t++}),t},toArray:function(e){return ds(e,function(t){return t})||[]},only:function(e){if(!Wu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ce.Component=Ci;Ce.Fragment=K1;Ce.Profiler=Y1;Ce.PureComponent=Bu;Ce.StrictMode=G1;Ce.Suspense=e0;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0;Ce.act=sg;Ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=eg({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Vu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)rg.call(t,c)&&!ig.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ho,type:e.type,key:i,ref:s,props:r,_owner:a}};Ce.createContext=function(e){return e={$$typeof:X1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Q1,_context:e},e.Consumer=e};Ce.createElement=og;Ce.createFactory=function(e){var t=og.bind(null,e);return t.type=e,t};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(e){return{$$typeof:Z1,render:e}};Ce.isValidElement=Wu;Ce.lazy=function(e){return{$$typeof:n0,_payload:{_status:-1,_result:e},_init:s0}};Ce.memo=function(e,t){return{$$typeof:t0,type:e,compare:t===void 0?null:t}};Ce.startTransition=function(e){var t=Ds.transition;Ds.transition={};try{e()}finally{Ds.transition=t}};Ce.unstable_act=sg;Ce.useCallback=function(e,t){return xt.current.useCallback(e,t)};Ce.useContext=function(e){return xt.current.useContext(e)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(e){return xt.current.useDeferredValue(e)};Ce.useEffect=function(e,t){return xt.current.useEffect(e,t)};Ce.useId=function(){return xt.current.useId()};Ce.useImperativeHandle=function(e,t,n){return xt.current.useImperativeHandle(e,t,n)};Ce.useInsertionEffect=function(e,t){return xt.current.useInsertionEffect(e,t)};Ce.useLayoutEffect=function(e,t){return xt.current.useLayoutEffect(e,t)};Ce.useMemo=function(e,t){return xt.current.useMemo(e,t)};Ce.useReducer=function(e,t,n){return xt.current.useReducer(e,t,n)};Ce.useRef=function(e){return xt.current.useRef(e)};Ce.useState=function(e){return xt.current.useState(e)};Ce.useSyncExternalStore=function(e,t,n){return xt.current.useSyncExternalStore(e,t,n)};Ce.useTransition=function(){return xt.current.useTransition()};Ce.version="18.3.1";Xm.exports=Ce;var j=Xm.exports;const Ot=Va(j),l0=q1({__proto__:null,default:Ot},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0=j,u0=Symbol.for("react.element"),d0=Symbol.for("react.fragment"),p0=Object.prototype.hasOwnProperty,f0=c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h0={key:!0,ref:!0,__self:!0,__source:!0};function ag(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)p0.call(t,r)&&!h0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:u0,type:e,key:s,ref:a,props:i,_owner:f0.current}}Wa.Fragment=d0;Wa.jsx=ag;Wa.jsxs=ag;Qm.exports=Wa;var o=Qm.exports,bc={},lg={exports:{}},Bt={},cg={exports:{}},ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,I){var w=O.length;O.push(I);e:for(;0<w;){var H=w-1>>>1,K=O[H];if(0<i(K,I))O[H]=I,O[w]=K,w=H;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],w=O.pop();if(w!==I){O[0]=w;e:for(var H=0,K=O.length,v=K>>>1;H<v;){var V=2*(H+1)-1,S=O[V],W=V+1,ie=O[W];if(0>i(S,w))W<K&&0>i(ie,S)?(O[H]=ie,O[W]=w,H=W):(O[H]=S,O[V]=w,H=V);else if(W<K&&0>i(ie,w))O[H]=ie,O[W]=w,H=W;else break e}}return I}function i(O,I){var w=O.sortIndex-I.sortIndex;return w!==0?w:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=O)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function _(O){if(b=!1,y(O),!m)if(n(c)!==null)m=!0,$(A);else{var I=n(u);I!==null&&z(_,I.startTime-O)}}function A(O,I){m=!1,b&&(b=!1,x(N),N=-1),h=!0;var w=f;try{for(y(I),p=n(c);p!==null&&(!(p.expirationTime>I)||O&&!M());){var H=p.callback;if(typeof H=="function"){p.callback=null,f=p.priorityLevel;var K=H(p.expirationTime<=I);I=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(c)&&r(c),y(I)}else r(c);p=n(c)}if(p!==null)var v=!0;else{var V=n(u);V!==null&&z(_,V.startTime-I),v=!1}return v}finally{p=null,f=w,h=!1}}var C=!1,P=null,N=-1,D=5,E=-1;function M(){return!(e.unstable_now()-E<D)}function L(){if(P!==null){var O=e.unstable_now();E=O;var I=!0;try{I=P(!0,O)}finally{I?U():(C=!1,P=null)}}else C=!1}var U;if(typeof g=="function")U=function(){g(L)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,R=T.port2;T.port1.onmessage=L,U=function(){R.postMessage(null)}}else U=function(){k(L,0)};function $(O){P=O,C||(C=!0,U())}function z(O,I){N=k(function(){O(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,$(A))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var w=f;f=I;try{return O()}finally{f=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var w=f;f=O;try{return I()}finally{f=w}},e.unstable_scheduleCallback=function(O,I,w){var H=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?H+w:H):w=H,O){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=w+K,O={id:d++,callback:I,priorityLevel:O,startTime:w,expirationTime:K,sortIndex:-1},w>H?(O.sortIndex=w,t(u,O),n(c)===null&&O===n(u)&&(b?(x(N),N=-1):b=!0,z(_,w-H))):(O.sortIndex=K,t(c,O),m||h||(m=!0,$(A))),O},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(O){var I=f;return function(){var w=f;f=I;try{return O.apply(this,arguments)}finally{f=w}}}})(ug);cg.exports=ug;var m0=cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=j,Dt=m0;function re(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dg=new Set,xo={};function $r(e,t){fi(e,t),fi(e+"Capture",t)}function fi(e,t){for(xo[e]=t,e=0;e<t.length;e++)dg.add(t[e])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=Object.prototype.hasOwnProperty,x0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tf={},nf={};function y0(e){return wc.call(nf,e)?!0:wc.call(tf,e)?!1:x0.test(e)?nf[e]=!0:(tf[e]=!0,!1)}function v0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function b0(e,t,n,r){if(t===null||typeof t>"u"||v0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hu=/[\-:]([a-z])/g;function qu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hu,qu);it[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hu,qu);it[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hu,qu);it[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ju(e,t,n,r){var i=it.hasOwnProperty(t)?it[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(b0(t,n,i,r)&&(n=null),r||i===null?y0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bn=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ps=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),Ku=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),pg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),Gu=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),_c=Symbol.for("react.suspense_list"),Yu=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),hg=Symbol.for("react.offscreen"),rf=Symbol.iterator;function Ri(e){return e===null||typeof e!="object"?null:(e=rf&&e[rf]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,jl;function Yi(e){if(jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jl=t&&t[1]||""}return`
`+jl+e}var _l=!1;function Sl(e,t){if(!e||_l)return"";_l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{_l=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yi(e):""}function w0(e){switch(e.tag){case 5:return Yi(e.type);case 16:return Yi("Lazy");case 13:return Yi("Suspense");case 19:return Yi("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Sc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case Wr:return"Portal";case kc:return"Profiler";case Ku:return"StrictMode";case jc:return"Suspense";case _c:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fg:return(e.displayName||"Context")+".Consumer";case pg:return(e._context.displayName||"Context")+".Provider";case Gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yu:return t=e.displayName||null,t!==null?t:Sc(e.type)||"Memo";case Hn:t=e._payload,e=e._init;try{return Sc(e(t))}catch{}}return null}function k0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sc(t);case 8:return t===Ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function j0(e){var t=mg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fs(e){e._valueTracker||(e._valueTracker=j0(e))}function gg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cc(e,t){var n=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function of(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ur(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xg(e,t){t=t.checked,t!=null&&Ju(e,"checked",t,!1)}function Nc(e,t){xg(e,t);var n=ur(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ec(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ec(e,t.type,ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ec(e,t,n){(t!=="number"||ia(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qi=Array.isArray;function ri(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ur(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function zc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(re(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function af(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(re(92));if(Qi(n)){if(1<n.length)throw Error(re(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ur(n)}}function yg(e,t){var n=ur(t.value),r=ur(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hs,bg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(hs=hs||document.createElement("div"),hs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=hs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_0=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){_0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function wg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function kg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var S0=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(e,t){if(t){if(S0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(re(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(re(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(re(61))}if(t.style!=null&&typeof t.style!="object")throw Error(re(62))}}function Pc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lc=null;function Qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mc=null,ii=null,oi=null;function cf(e){if(e=Ko(e)){if(typeof Mc!="function")throw Error(re(280));var t=e.stateNode;t&&(t=Ga(t),Mc(e.stateNode,e.type,t))}}function jg(e){ii?oi?oi.push(e):oi=[e]:ii=e}function _g(){if(ii){var e=ii,t=oi;if(oi=ii=null,cf(e),t)for(e=0;e<t.length;e++)cf(t[e])}}function Sg(e,t){return e(t)}function Cg(){}var Cl=!1;function Ng(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return Sg(e,t,n)}finally{Cl=!1,(ii!==null||oi!==null)&&(Cg(),_g())}}function vo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ga(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(re(231,t,typeof n));return n}var Rc=!1;if(In)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Rc=!1}function C0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var io=!1,oa=null,sa=!1,Ic=null,N0={onError:function(e){io=!0,oa=e}};function E0(e,t,n,r,i,s,a,l,c){io=!1,oa=null,C0.apply(N0,arguments)}function z0(e,t,n,r,i,s,a,l,c){if(E0.apply(this,arguments),io){if(io){var u=oa;io=!1,oa=null}else throw Error(re(198));sa||(sa=!0,Ic=u)}}function Dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Eg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uf(e){if(Dr(e)!==e)throw Error(re(188))}function T0(e){var t=e.alternate;if(!t){if(t=Dr(e),t===null)throw Error(re(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return uf(i),e;if(s===r)return uf(i),t;s=s.sibling}throw Error(re(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==r)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?e:t}function zg(e){return e=T0(e),e!==null?Tg(e):null}function Tg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tg(e);if(t!==null)return t;e=e.sibling}return null}var Ag=Dt.unstable_scheduleCallback,df=Dt.unstable_cancelCallback,A0=Dt.unstable_shouldYield,P0=Dt.unstable_requestPaint,He=Dt.unstable_now,L0=Dt.unstable_getCurrentPriorityLevel,Xu=Dt.unstable_ImmediatePriority,Pg=Dt.unstable_UserBlockingPriority,aa=Dt.unstable_NormalPriority,M0=Dt.unstable_LowPriority,Lg=Dt.unstable_IdlePriority,Ha=null,yn=null;function R0(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Ha,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:$0,I0=Math.log,O0=Math.LN2;function $0(e){return e>>>=0,e===0?32:31-(I0(e)/O0|0)|0}var ms=64,gs=4194304;function Xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function la(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Xi(l):(s&=a,s!==0&&(r=Xi(s)))}else a=n&~i,a!==0?r=Xi(a):s!==0&&(r=Xi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-on(t),i=1<<n,r|=e[n],t&=~i;return r}function D0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-on(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=D0(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Oc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mg(){var e=ms;return ms<<=1,!(ms&4194240)&&(ms=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=n}function B0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Zu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Te=0;function Rg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ig,ed,Og,$g,Dg,$c=!1,xs=[],tr=null,nr=null,rr=null,bo=new Map,wo=new Map,Kn=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pf(e,t){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(t.pointerId)}}function Oi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ko(t),t!==null&&ed(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function V0(e,t,n,r,i){switch(t){case"focusin":return tr=Oi(tr,e,t,n,r,i),!0;case"dragenter":return nr=Oi(nr,e,t,n,r,i),!0;case"mouseover":return rr=Oi(rr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,Oi(bo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wo.set(s,Oi(wo.get(s)||null,e,t,n,r,i)),!0}return!1}function Fg(e){var t=wr(e.target);if(t!==null){var n=Dr(t);if(n!==null){if(t=n.tag,t===13){if(t=Eg(n),t!==null){e.blockedOn=t,Dg(e.priority,function(){Og(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Dc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Lc=r,n.target.dispatchEvent(r),Lc=null}else return t=Ko(n),t!==null&&ed(t),e.blockedOn=n,!1;t.shift()}return!0}function ff(e,t,n){Fs(e)&&n.delete(t)}function W0(){$c=!1,tr!==null&&Fs(tr)&&(tr=null),nr!==null&&Fs(nr)&&(nr=null),rr!==null&&Fs(rr)&&(rr=null),bo.forEach(ff),wo.forEach(ff)}function $i(e,t){e.blockedOn===t&&(e.blockedOn=null,$c||($c=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,W0)))}function ko(e){function t(i){return $i(i,e)}if(0<xs.length){$i(xs[0],e);for(var n=1;n<xs.length;n++){var r=xs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tr!==null&&$i(tr,e),nr!==null&&$i(nr,e),rr!==null&&$i(rr,e),bo.forEach(t),wo.forEach(t),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Fg(n),n.blockedOn===null&&Kn.shift()}var si=Bn.ReactCurrentBatchConfig,ca=!0;function H0(e,t,n,r){var i=Te,s=si.transition;si.transition=null;try{Te=1,td(e,t,n,r)}finally{Te=i,si.transition=s}}function q0(e,t,n,r){var i=Te,s=si.transition;si.transition=null;try{Te=4,td(e,t,n,r)}finally{Te=i,si.transition=s}}function td(e,t,n,r){if(ca){var i=Dc(e,t,n,r);if(i===null)Ol(e,t,r,ua,n),pf(e,r);else if(V0(i,e,t,n,r))r.stopPropagation();else if(pf(e,r),t&4&&-1<U0.indexOf(e)){for(;i!==null;){var s=Ko(i);if(s!==null&&Ig(s),s=Dc(e,t,n,r),s===null&&Ol(e,t,r,ua,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ol(e,t,r,null,n)}}var ua=null;function Dc(e,t,n,r){if(ua=null,e=Qu(r),e=wr(e),e!==null)if(t=Dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Eg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ua=e,null}function Bg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(L0()){case Xu:return 1;case Pg:return 4;case aa:case M0:return 16;case Lg:return 536870912;default:return 16}default:return 16}}var Yn=null,nd=null,Bs=null;function Ug(){if(Bs)return Bs;var e,t=nd,n=t.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Bs=i.slice(e,1<r?1-r:void 0)}function Us(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ys(){return!0}function hf(){return!1}function Ut(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ys:hf,this.isPropagationStopped=hf,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ys)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ys)},persist:function(){},isPersistent:ys}),t}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=Ut(Ni),Jo=Ve({},Ni,{view:0,detail:0}),J0=Ut(Jo),El,zl,Di,qa=Ve({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Di&&(Di&&e.type==="mousemove"?(El=e.screenX-Di.screenX,zl=e.screenY-Di.screenY):zl=El=0,Di=e),El)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),mf=Ut(qa),K0=Ve({},qa,{dataTransfer:0}),G0=Ut(K0),Y0=Ve({},Jo,{relatedTarget:0}),Tl=Ut(Y0),Q0=Ve({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=Ut(Q0),Z0=Ve({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eb=Ut(Z0),tb=Ve({},Ni,{data:0}),gf=Ut(tb),nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ib={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ob(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ib[e])?!!t[e]:!1}function id(){return ob}var sb=Ve({},Jo,{key:function(e){if(e.key){var t=nb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(e){return e.type==="keypress"?Us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ab=Ut(sb),lb=Ve({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xf=Ut(lb),cb=Ve({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),ub=Ut(cb),db=Ve({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),pb=Ut(db),fb=Ve({},qa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hb=Ut(fb),mb=[9,13,27,32],od=In&&"CompositionEvent"in window,oo=null;In&&"documentMode"in document&&(oo=document.documentMode);var gb=In&&"TextEvent"in window&&!oo,Vg=In&&(!od||oo&&8<oo&&11>=oo),yf=" ",vf=!1;function Wg(e,t){switch(e){case"keyup":return mb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function xb(e,t){switch(e){case"compositionend":return Hg(t);case"keypress":return t.which!==32?null:(vf=!0,yf);case"textInput":return e=t.data,e===yf&&vf?null:e;default:return null}}function yb(e,t){if(qr)return e==="compositionend"||!od&&Wg(e,t)?(e=Ug(),Bs=nd=Yn=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vg&&t.locale!=="ko"?null:t.data;default:return null}}var vb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vb[e.type]:t==="textarea"}function qg(e,t,n,r){jg(r),t=da(t,"onChange"),0<t.length&&(n=new rd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var so=null,jo=null;function bb(e){rx(e,0)}function Ja(e){var t=Gr(e);if(gg(t))return e}function wb(e,t){if(e==="change")return t}var Jg=!1;if(In){var Al;if(In){var Pl="oninput"in document;if(!Pl){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),Pl=typeof wf.oninput=="function"}Al=Pl}else Al=!1;Jg=Al&&(!document.documentMode||9<document.documentMode)}function kf(){so&&(so.detachEvent("onpropertychange",Kg),jo=so=null)}function Kg(e){if(e.propertyName==="value"&&Ja(jo)){var t=[];qg(t,jo,e,Qu(e)),Ng(bb,t)}}function kb(e,t,n){e==="focusin"?(kf(),so=t,jo=n,so.attachEvent("onpropertychange",Kg)):e==="focusout"&&kf()}function jb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ja(jo)}function _b(e,t){if(e==="click")return Ja(t)}function Sb(e,t){if(e==="input"||e==="change")return Ja(t)}function Cb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ln=typeof Object.is=="function"?Object.is:Cb;function _o(e,t){if(ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wc.call(t,i)||!ln(e[i],t[i]))return!1}return!0}function jf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _f(e,t){var n=jf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jf(n)}}function Gg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yg(){for(var e=window,t=ia();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ia(e.document)}return t}function sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nb(e){var t=Yg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gg(n.ownerDocument.documentElement,n)){if(r!==null&&sd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=_f(n,s);var a=_f(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Eb=In&&"documentMode"in document&&11>=document.documentMode,Jr=null,Fc=null,ao=null,Bc=!1;function Sf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bc||Jr==null||Jr!==ia(r)||(r=Jr,"selectionStart"in r&&sd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&_o(ao,r)||(ao=r,r=da(Fc,"onSelect"),0<r.length&&(t=new rd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jr)))}function vs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionend:vs("Transition","TransitionEnd")},Ll={},Qg={};In&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Ka(e){if(Ll[e])return Ll[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qg)return Ll[e]=t[n];return e}var Xg=Ka("animationend"),Zg=Ka("animationiteration"),ex=Ka("animationstart"),tx=Ka("transitionend"),nx=new Map,Cf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(e,t){nx.set(e,t),$r(t,[e])}for(var Ml=0;Ml<Cf.length;Ml++){var Rl=Cf[Ml],zb=Rl.toLowerCase(),Tb=Rl[0].toUpperCase()+Rl.slice(1);fr(zb,"on"+Tb)}fr(Xg,"onAnimationEnd");fr(Zg,"onAnimationIteration");fr(ex,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(tx,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ab=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function Nf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,z0(r,t,void 0,e),e.currentTarget=null}function rx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Nf(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Nf(i,l,u),s=c}}}if(sa)throw e=Ic,sa=!1,Ic=null,e}function Oe(e,t){var n=t[qc];n===void 0&&(n=t[qc]=new Set);var r=e+"__bubble";n.has(r)||(ix(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),ix(n,e,r,t)}var bs="_reactListening"+Math.random().toString(36).slice(2);function So(e){if(!e[bs]){e[bs]=!0,dg.forEach(function(n){n!=="selectionchange"&&(Ab.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bs]||(t[bs]=!0,Il("selectionchange",!1,t))}}function ix(e,t,n,r){switch(Bg(t)){case 1:var i=H0;break;case 4:i=q0;break;default:i=td}n=i.bind(null,t,n,e),i=void 0,!Rc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ol(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=wr(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Ng(function(){var u=s,d=Qu(n),p=[];e:{var f=nx.get(e);if(f!==void 0){var h=rd,m=e;switch(e){case"keypress":if(Us(n)===0)break e;case"keydown":case"keyup":h=ab;break;case"focusin":m="focus",h=Tl;break;case"focusout":m="blur",h=Tl;break;case"beforeblur":case"afterblur":h=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ub;break;case Xg:case Zg:case ex:h=X0;break;case tx:h=pb;break;case"scroll":h=J0;break;case"wheel":h=hb;break;case"copy":case"cut":case"paste":h=eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=xf}var b=(t&4)!==0,k=!b&&e==="scroll",x=b?f!==null?f+"Capture":null:f;b=[];for(var g=u,y;g!==null;){y=g;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,x!==null&&(_=vo(g,x),_!=null&&b.push(Co(g,_,y)))),k)break;g=g.return}0<b.length&&(f=new h(f,m,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Lc&&(m=n.relatedTarget||n.fromElement)&&(wr(m)||m[On]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?wr(m):null,m!==null&&(k=Dr(m),m!==k||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(b=mf,_="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=xf,_="onPointerLeave",x="onPointerEnter",g="pointer"),k=h==null?f:Gr(h),y=m==null?f:Gr(m),f=new b(_,g+"leave",h,n,d),f.target=k,f.relatedTarget=y,_=null,wr(d)===u&&(b=new b(x,g+"enter",m,n,d),b.target=y,b.relatedTarget=k,_=b),k=_,h&&m)t:{for(b=h,x=m,g=0,y=b;y;y=Br(y))g++;for(y=0,_=x;_;_=Br(_))y++;for(;0<g-y;)b=Br(b),g--;for(;0<y-g;)x=Br(x),y--;for(;g--;){if(b===x||x!==null&&b===x.alternate)break t;b=Br(b),x=Br(x)}b=null}else b=null;h!==null&&Ef(p,f,h,b,!1),m!==null&&k!==null&&Ef(p,k,m,b,!0)}}e:{if(f=u?Gr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var A=wb;else if(bf(f))if(Jg)A=Sb;else{A=jb;var C=kb}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=_b);if(A&&(A=A(e,u))){qg(p,A,n,d);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Ec(f,"number",f.value)}switch(C=u?Gr(u):window,e){case"focusin":(bf(C)||C.contentEditable==="true")&&(Jr=C,Fc=u,ao=null);break;case"focusout":ao=Fc=Jr=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,Sf(p,n,d);break;case"selectionchange":if(Eb)break;case"keydown":case"keyup":Sf(p,n,d)}var P;if(od)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else qr?Wg(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Vg&&n.locale!=="ko"&&(qr||N!=="onCompositionStart"?N==="onCompositionEnd"&&qr&&(P=Ug()):(Yn=d,nd="value"in Yn?Yn.value:Yn.textContent,qr=!0)),C=da(u,N),0<C.length&&(N=new gf(N,e,null,n,d),p.push({event:N,listeners:C}),P?N.data=P:(P=Hg(n),P!==null&&(N.data=P)))),(P=gb?xb(e,n):yb(e,n))&&(u=da(u,"onBeforeInput"),0<u.length&&(d=new gf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=P))}rx(p,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function da(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vo(e,n),s!=null&&r.unshift(Co(e,s,i)),s=vo(e,t),s!=null&&r.push(Co(e,s,i))),e=e.return}return r}function Br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ef(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=vo(n,s),c!=null&&a.unshift(Co(n,c,l))):i||(c=vo(n,s),c!=null&&a.push(Co(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Pb=/\r\n?/g,Lb=/\u0000|\uFFFD/g;function zf(e){return(typeof e=="string"?e:""+e).replace(Pb,`
`).replace(Lb,"")}function ws(e,t,n){if(t=zf(t),zf(e)!==t&&n)throw Error(re(425))}function pa(){}var Uc=null,Vc=null;function Wc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,Mb=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,Rb=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(e){return Tf.resolve(null).then(e).catch(Ib)}:Hc;function Ib(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ko(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ko(t)}function ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Af(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),mn="__reactFiber$"+Ei,No="__reactProps$"+Ei,On="__reactContainer$"+Ei,qc="__reactEvents$"+Ei,Ob="__reactListeners$"+Ei,$b="__reactHandles$"+Ei;function wr(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[On]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Af(e);e!==null;){if(n=e[mn])return n;e=Af(e)}return t}e=n,n=e.parentNode}return null}function Ko(e){return e=e[mn]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(re(33))}function Ga(e){return e[No]||null}var Jc=[],Yr=-1;function hr(e){return{current:e}}function $e(e){0>Yr||(e.current=Jc[Yr],Jc[Yr]=null,Yr--)}function Re(e,t){Yr++,Jc[Yr]=e.current,e.current=t}var dr={},ut=hr(dr),St=hr(!1),Ar=dr;function hi(e,t){var n=e.type.contextTypes;if(!n)return dr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(e){return e=e.childContextTypes,e!=null}function fa(){$e(St),$e(ut)}function Pf(e,t,n){if(ut.current!==dr)throw Error(re(168));Re(ut,t),Re(St,n)}function ox(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(re(108,k0(e)||"Unknown",i));return Ve({},n,r)}function ha(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dr,Ar=ut.current,Re(ut,e),Re(St,St.current),!0}function Lf(e,t,n){var r=e.stateNode;if(!r)throw Error(re(169));n?(e=ox(e,t,Ar),r.__reactInternalMemoizedMergedChildContext=e,$e(St),$e(ut),Re(ut,e)):$e(St),Re(St,n)}var Tn=null,Ya=!1,Dl=!1;function sx(e){Tn===null?Tn=[e]:Tn.push(e)}function Db(e){Ya=!0,sx(e)}function mr(){if(!Dl&&Tn!==null){Dl=!0;var e=0,t=Te;try{var n=Tn;for(Te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tn=null,Ya=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(e+1)),Ag(Xu,mr),i}finally{Te=t,Dl=!1}}return null}var Qr=[],Xr=0,ma=null,ga=0,Vt=[],Wt=0,Pr=null,An=1,Pn="";function yr(e,t){Qr[Xr++]=ga,Qr[Xr++]=ma,ma=e,ga=t}function ax(e,t,n){Vt[Wt++]=An,Vt[Wt++]=Pn,Vt[Wt++]=Pr,Pr=e;var r=An;e=Pn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,An=1<<32-on(t)+i|n<<i|r,Pn=s+e}else An=1<<s|n<<i|r,Pn=e}function ad(e){e.return!==null&&(yr(e,1),ax(e,1,0))}function ld(e){for(;e===ma;)ma=Qr[--Xr],Qr[Xr]=null,ga=Qr[--Xr],Qr[Xr]=null;for(;e===Pr;)Pr=Vt[--Wt],Vt[Wt]=null,Pn=Vt[--Wt],Vt[Wt]=null,An=Vt[--Wt],Vt[Wt]=null}var $t=null,Rt=null,De=!1,tn=null;function lx(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$t=e,Rt=ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$t=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pr!==null?{id:An,overflow:Pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$t=e,Rt=null,!0):!1;default:return!1}}function Kc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gc(e){if(De){var t=Rt;if(t){var n=t;if(!Mf(e,t)){if(Kc(e))throw Error(re(418));t=ir(n.nextSibling);var r=$t;t&&Mf(e,t)?lx(r,n):(e.flags=e.flags&-4097|2,De=!1,$t=e)}}else{if(Kc(e))throw Error(re(418));e.flags=e.flags&-4097|2,De=!1,$t=e}}}function Rf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$t=e}function ks(e){if(e!==$t)return!1;if(!De)return Rf(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wc(e.type,e.memoizedProps)),t&&(t=Rt)){if(Kc(e))throw cx(),Error(re(418));for(;t;)lx(e,t),t=ir(t.nextSibling)}if(Rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(re(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=ir(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=$t?ir(e.stateNode.nextSibling):null;return!0}function cx(){for(var e=Rt;e;)e=ir(e.nextSibling)}function mi(){Rt=$t=null,De=!1}function cd(e){tn===null?tn=[e]:tn.push(e)}var Fb=Bn.ReactCurrentBatchConfig;function Fi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var r=n.stateNode}if(!r)throw Error(re(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,e))}return e}function js(e,t){throw e=Object.prototype.toString.call(t),Error(re(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function If(e){var t=e._init;return t(e._payload)}function ux(e){function t(x,g){if(e){var y=x.deletions;y===null?(x.deletions=[g],x.flags|=16):y.push(g)}}function n(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function r(x,g){for(x=new Map;g!==null;)g.key!==null?x.set(g.key,g):x.set(g.index,g),g=g.sibling;return x}function i(x,g){return x=lr(x,g),x.index=0,x.sibling=null,x}function s(x,g,y){return x.index=y,e?(y=x.alternate,y!==null?(y=y.index,y<g?(x.flags|=2,g):y):(x.flags|=2,g)):(x.flags|=1048576,g)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,g,y,_){return g===null||g.tag!==6?(g=ql(y,x.mode,_),g.return=x,g):(g=i(g,y),g.return=x,g)}function c(x,g,y,_){var A=y.type;return A===Hr?d(x,g,y.props.children,_,y.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Hn&&If(A)===g.type)?(_=i(g,y.props),_.ref=Fi(x,g,y),_.return=x,_):(_=Gs(y.type,y.key,y.props,null,x.mode,_),_.ref=Fi(x,g,y),_.return=x,_)}function u(x,g,y,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Jl(y,x.mode,_),g.return=x,g):(g=i(g,y.children||[]),g.return=x,g)}function d(x,g,y,_,A){return g===null||g.tag!==7?(g=Cr(y,x.mode,_,A),g.return=x,g):(g=i(g,y),g.return=x,g)}function p(x,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ql(""+g,x.mode,y),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ps:return y=Gs(g.type,g.key,g.props,null,x.mode,y),y.ref=Fi(x,null,g),y.return=x,y;case Wr:return g=Jl(g,x.mode,y),g.return=x,g;case Hn:var _=g._init;return p(x,_(g._payload),y)}if(Qi(g)||Ri(g))return g=Cr(g,x.mode,y,null),g.return=x,g;js(x,g)}return null}function f(x,g,y,_){var A=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:l(x,g,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ps:return y.key===A?c(x,g,y,_):null;case Wr:return y.key===A?u(x,g,y,_):null;case Hn:return A=y._init,f(x,g,A(y._payload),_)}if(Qi(y)||Ri(y))return A!==null?null:d(x,g,y,_,null);js(x,y)}return null}function h(x,g,y,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return x=x.get(y)||null,l(g,x,""+_,A);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ps:return x=x.get(_.key===null?y:_.key)||null,c(g,x,_,A);case Wr:return x=x.get(_.key===null?y:_.key)||null,u(g,x,_,A);case Hn:var C=_._init;return h(x,g,y,C(_._payload),A)}if(Qi(_)||Ri(_))return x=x.get(y)||null,d(g,x,_,A,null);js(g,_)}return null}function m(x,g,y,_){for(var A=null,C=null,P=g,N=g=0,D=null;P!==null&&N<y.length;N++){P.index>N?(D=P,P=null):D=P.sibling;var E=f(x,P,y[N],_);if(E===null){P===null&&(P=D);break}e&&P&&E.alternate===null&&t(x,P),g=s(E,g,N),C===null?A=E:C.sibling=E,C=E,P=D}if(N===y.length)return n(x,P),De&&yr(x,N),A;if(P===null){for(;N<y.length;N++)P=p(x,y[N],_),P!==null&&(g=s(P,g,N),C===null?A=P:C.sibling=P,C=P);return De&&yr(x,N),A}for(P=r(x,P);N<y.length;N++)D=h(P,x,N,y[N],_),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?N:D.key),g=s(D,g,N),C===null?A=D:C.sibling=D,C=D);return e&&P.forEach(function(M){return t(x,M)}),De&&yr(x,N),A}function b(x,g,y,_){var A=Ri(y);if(typeof A!="function")throw Error(re(150));if(y=A.call(y),y==null)throw Error(re(151));for(var C=A=null,P=g,N=g=0,D=null,E=y.next();P!==null&&!E.done;N++,E=y.next()){P.index>N?(D=P,P=null):D=P.sibling;var M=f(x,P,E.value,_);if(M===null){P===null&&(P=D);break}e&&P&&M.alternate===null&&t(x,P),g=s(M,g,N),C===null?A=M:C.sibling=M,C=M,P=D}if(E.done)return n(x,P),De&&yr(x,N),A;if(P===null){for(;!E.done;N++,E=y.next())E=p(x,E.value,_),E!==null&&(g=s(E,g,N),C===null?A=E:C.sibling=E,C=E);return De&&yr(x,N),A}for(P=r(x,P);!E.done;N++,E=y.next())E=h(P,x,N,E.value,_),E!==null&&(e&&E.alternate!==null&&P.delete(E.key===null?N:E.key),g=s(E,g,N),C===null?A=E:C.sibling=E,C=E);return e&&P.forEach(function(L){return t(x,L)}),De&&yr(x,N),A}function k(x,g,y,_){if(typeof y=="object"&&y!==null&&y.type===Hr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ps:e:{for(var A=y.key,C=g;C!==null;){if(C.key===A){if(A=y.type,A===Hr){if(C.tag===7){n(x,C.sibling),g=i(C,y.props.children),g.return=x,x=g;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Hn&&If(A)===C.type){n(x,C.sibling),g=i(C,y.props),g.ref=Fi(x,C,y),g.return=x,x=g;break e}n(x,C);break}else t(x,C);C=C.sibling}y.type===Hr?(g=Cr(y.props.children,x.mode,_,y.key),g.return=x,x=g):(_=Gs(y.type,y.key,y.props,null,x.mode,_),_.ref=Fi(x,g,y),_.return=x,x=_)}return a(x);case Wr:e:{for(C=y.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(x,g.sibling),g=i(g,y.children||[]),g.return=x,x=g;break e}else{n(x,g);break}else t(x,g);g=g.sibling}g=Jl(y,x.mode,_),g.return=x,x=g}return a(x);case Hn:return C=y._init,k(x,g,C(y._payload),_)}if(Qi(y))return m(x,g,y,_);if(Ri(y))return b(x,g,y,_);js(x,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(x,g.sibling),g=i(g,y),g.return=x,x=g):(n(x,g),g=ql(y,x.mode,_),g.return=x,x=g),a(x)):n(x,g)}return k}var gi=ux(!0),dx=ux(!1),xa=hr(null),ya=null,Zr=null,ud=null;function dd(){ud=Zr=ya=null}function pd(e){var t=xa.current;$e(xa),e._currentValue=t}function Yc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ai(e,t){ya=e,ud=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(ud!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(ya===null)throw Error(re(308));Zr=e,ya.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var kr=null;function fd(e){kr===null?kr=[e]:kr.push(e)}function px(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fd(t)):(n.next=i.next,i.next=n),t.interleaved=n,$n(e,r)}function $n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qn=!1;function hd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function or(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$n(e,n)}return i=r.interleaved,i===null?(t.next=t,fd(r)):(t.next=i.next,i.next=t),r.interleaved=t,$n(e,n)}function Vs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zu(e,n)}}function Of(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function va(e,t,n,r){var i=e.updateQueue;qn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,b=l;switch(f=t,h=n,b.tag){case 1:if(m=b.payload,typeof m=="function"){p=m.call(h,p,f);break e}p=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=b.payload,f=typeof m=="function"?m.call(h,p,f):m,f==null)break e;p=Ve({},p,f);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=p):d=d.next=h,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Mr|=a,e.lanes=a,e.memoizedState=p}}function $f(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(re(191,i));i.call(r)}}}var Go={},vn=hr(Go),Eo=hr(Go),zo=hr(Go);function jr(e){if(e===Go)throw Error(re(174));return e}function md(e,t){switch(Re(zo,t),Re(Eo,e),Re(vn,Go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tc(t,e)}$e(vn),Re(vn,t)}function xi(){$e(vn),$e(Eo),$e(zo)}function hx(e){jr(zo.current);var t=jr(vn.current),n=Tc(t,e.type);t!==n&&(Re(Eo,e),Re(vn,n))}function gd(e){Eo.current===e&&($e(vn),$e(Eo))}var Be=hr(0);function ba(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fl=[];function xd(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Ws=Bn.ReactCurrentDispatcher,Bl=Bn.ReactCurrentBatchConfig,Lr=0,Ue=null,Xe=null,et=null,wa=!1,lo=!1,To=0,Bb=0;function at(){throw Error(re(321))}function yd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}function vd(e,t,n,r,i,s){if(Lr=s,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ws.current=e===null||e.memoizedState===null?Hb:qb,e=n(r,i),lo){s=0;do{if(lo=!1,To=0,25<=s)throw Error(re(301));s+=1,et=Xe=null,t.updateQueue=null,Ws.current=Jb,e=n(r,i)}while(lo)}if(Ws.current=ka,t=Xe!==null&&Xe.next!==null,Lr=0,et=Xe=Ue=null,wa=!1,t)throw Error(re(300));return e}function bd(){var e=To!==0;return To=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ue.memoizedState=et=e:et=et.next=e,et}function Qt(){if(Xe===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=et===null?Ue.memoizedState:et.next;if(t!==null)et=t,Xe=e;else{if(e===null)throw Error(re(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},et===null?Ue.memoizedState=et=e:et=et.next=e}return et}function Ao(e,t){return typeof t=="function"?t(e):t}function Ul(e){var t=Qt(),n=t.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=e;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Lr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ue.lanes|=d,Mr|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,ln(r,t.memoizedState)||(jt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ue.lanes|=s,Mr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vl(e){var t=Qt(),n=t.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);ln(s,t.memoizedState)||(jt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function mx(){}function gx(e,t){var n=Ue,r=Qt(),i=t(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,wd(vx.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Po(9,yx.bind(null,n,r,i,t),void 0,null),tt===null)throw Error(re(349));Lr&30||xx(n,t,i)}return i}function xx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yx(e,t,n,r){t.value=n,t.getSnapshot=r,bx(t)&&wx(e)}function vx(e,t,n){return n(function(){bx(t)&&wx(e)})}function bx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ln(e,n)}catch{return!0}}function wx(e){var t=$n(e,1);t!==null&&sn(t,e,1,-1)}function Df(e){var t=fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:e},t.queue=e,e=e.dispatch=Wb.bind(null,Ue,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kx(){return Qt().memoizedState}function Hs(e,t,n,r){var i=fn();Ue.flags|=e,i.memoizedState=Po(1|t,n,void 0,r===void 0?null:r)}function Qa(e,t,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var a=Xe.memoizedState;if(s=a.destroy,r!==null&&yd(r,a.deps)){i.memoizedState=Po(t,n,s,r);return}}Ue.flags|=e,i.memoizedState=Po(1|t,n,s,r)}function Ff(e,t){return Hs(8390656,8,e,t)}function wd(e,t){return Qa(2048,8,e,t)}function jx(e,t){return Qa(4,2,e,t)}function _x(e,t){return Qa(4,4,e,t)}function Sx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cx(e,t,n){return n=n!=null?n.concat([e]):null,Qa(4,4,Sx.bind(null,t,e),n)}function kd(){}function Nx(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ex(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zx(e,t,n){return Lr&21?(ln(n,t)||(n=Mg(),Ue.lanes|=n,Mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=n)}function Ub(e,t){var n=Te;Te=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{Te=n,Bl.transition=r}}function Tx(){return Qt().memoizedState}function Vb(e,t,n){var r=ar(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ax(e))Px(t,n);else if(n=px(e,t,n,r),n!==null){var i=gt();sn(n,e,r,i),Lx(n,t,r)}}function Wb(e,t,n){var r=ar(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ax(e))Px(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,a)){var c=t.interleaved;c===null?(i.next=i,fd(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=px(e,t,i,r),n!==null&&(i=gt(),sn(n,e,r,i),Lx(n,t,r))}}function Ax(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function Px(e,t){lo=wa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zu(e,n)}}var ka={readContext:Yt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},Hb={readContext:Yt,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:Ff,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hs(4194308,4,Sx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hs(4,2,e,t)},useMemo:function(e,t){var n=fn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=fn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vb.bind(null,Ue,e),[r.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:Df,useDebugValue:kd,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Df(!1),t=e[0];return e=Ub.bind(null,e[1]),fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ue,i=fn();if(De){if(n===void 0)throw Error(re(407));n=n()}else{if(n=t(),tt===null)throw Error(re(349));Lr&30||xx(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ff(vx.bind(null,r,s,e),[e]),r.flags|=2048,Po(9,yx.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=fn(),t=tt.identifierPrefix;if(De){var n=Pn,r=An;n=(r&~(1<<32-on(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=To++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qb={readContext:Yt,useCallback:Nx,useContext:Yt,useEffect:wd,useImperativeHandle:Cx,useInsertionEffect:jx,useLayoutEffect:_x,useMemo:Ex,useReducer:Ul,useRef:kx,useState:function(){return Ul(Ao)},useDebugValue:kd,useDeferredValue:function(e){var t=Qt();return zx(t,Xe.memoizedState,e)},useTransition:function(){var e=Ul(Ao)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:mx,useSyncExternalStore:gx,useId:Tx,unstable_isNewReconciler:!1},Jb={readContext:Yt,useCallback:Nx,useContext:Yt,useEffect:wd,useImperativeHandle:Cx,useInsertionEffect:jx,useLayoutEffect:_x,useMemo:Ex,useReducer:Vl,useRef:kx,useState:function(){return Vl(Ao)},useDebugValue:kd,useDeferredValue:function(e){var t=Qt();return Xe===null?t.memoizedState=e:zx(t,Xe.memoizedState,e)},useTransition:function(){var e=Vl(Ao)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:mx,useSyncExternalStore:gx,useId:Tx,unstable_isNewReconciler:!1};function Zt(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xa={isMounted:function(e){return(e=e._reactInternals)?Dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=ar(e),s=Mn(r,i);s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(sn(t,e,i,r),Vs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=ar(e),s=Mn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(sn(t,e,i,r),Vs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=ar(e),i=Mn(n,r);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,r),t!==null&&(sn(t,e,r,n),Vs(t,e,r))}};function Bf(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!_o(n,r)||!_o(i,s):!0}function Mx(e,t,n){var r=!1,i=dr,s=t.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Ct(t)?Ar:ut.current,r=t.contextTypes,s=(r=r!=null)?hi(e,i):dr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Uf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xa.enqueueReplaceState(t,t.state,null)}function Xc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},hd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Ct(t)?Ar:ut.current,i.context=hi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Qc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xa.enqueueReplaceState(i,i.state,null),va(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yi(e,t){try{var n="",r=t;do n+=w0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kb=typeof WeakMap=="function"?WeakMap:Map;function Rx(e,t,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_a||(_a=!0,cu=r),Zc(e,t)},n}function Ix(e,t,n){n=Mn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Zc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zc(e,t),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Vf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=lw.bind(null,e,t,n),t.then(e,e))}function Wf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mn(-1,1),t.tag=2,or(n,t,1))),n.lanes|=1),e)}var Gb=Bn.ReactCurrentOwner,jt=!1;function ht(e,t,n,r){t.child=e===null?dx(t,null,n,r):gi(t,e.child,n,r)}function qf(e,t,n,r,i){n=n.render;var s=t.ref;return ai(t,i),r=vd(e,t,n,r,s,i),n=bd(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dn(e,t,i)):(De&&n&&ad(t),t.flags|=1,ht(e,t,r,i),t.child)}function Jf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Td(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ox(e,t,s,r,i)):(e=Gs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(a,r)&&e.ref===t.ref)return Dn(e,t,i)}return t.flags|=1,e=lr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ox(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(_o(s,r)&&e.ref===t.ref)if(jt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,Dn(e,t,i)}return eu(e,t,n,r,i)}function $x(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(ti,Pt),Pt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(ti,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Re(ti,Pt),Pt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Re(ti,Pt),Pt|=r;return ht(e,t,i,n),t.child}function Dx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function eu(e,t,n,r,i){var s=Ct(n)?Ar:ut.current;return s=hi(t,s),ai(t,i),n=vd(e,t,n,r,s,i),r=bd(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dn(e,t,i)):(De&&r&&ad(t),t.flags|=1,ht(e,t,n,i),t.child)}function Kf(e,t,n,r,i){if(Ct(n)){var s=!0;ha(t)}else s=!1;if(ai(t,i),t.stateNode===null)qs(e,t),Mx(t,n,r),Xc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Ct(n)?Ar:ut.current,u=hi(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Uf(t,a,r,u),qn=!1;var f=t.memoizedState;a.state=f,va(t,r,a,i),c=t.memoizedState,l!==r||f!==c||St.current||qn?(typeof d=="function"&&(Qc(t,n,d,r),c=t.memoizedState),(l=qn||Bf(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,fx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Zt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Yt(c):(c=Ct(n)?Ar:ut.current,c=hi(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Uf(t,a,r,c),qn=!1,f=t.memoizedState,a.state=f,va(t,r,a,i);var m=t.memoizedState;l!==p||f!==m||St.current||qn?(typeof h=="function"&&(Qc(t,n,h,r),m=t.memoizedState),(u=qn||Bf(t,n,u,r,f,m,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return tu(e,t,n,r,s,i)}function tu(e,t,n,r,i,s){Dx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Lf(t,n,!1),Dn(e,t,s);r=t.stateNode,Gb.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=gi(t,e.child,null,s),t.child=gi(t,null,l,s)):ht(e,t,l,s),t.memoizedState=r.state,i&&Lf(t,n,!0),t.child}function Fx(e){var t=e.stateNode;t.pendingContext?Pf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pf(e,t.context,!1),md(e,t.containerInfo)}function Gf(e,t,n,r,i){return mi(),cd(i),t.flags|=256,ht(e,t,n,r),t.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function ru(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bx(e,t,n){var r=t.pendingProps,i=Be.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Re(Be,i&1),e===null)return Gc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=tl(a,r,0,null),e=Cr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ru(n),t.memoizedState=nu,e):jd(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Yb(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=lr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=lr(l,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?ru(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=nu,r}return s=e.child,e=s.sibling,r=lr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jd(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _s(e,t,n,r){return r!==null&&cd(r),gi(t,e.child,null,n),e=jd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yb(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(re(422))),_s(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=tl({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&gi(t,e.child,null,a),t.child.memoizedState=ru(a),t.memoizedState=nu,s);if(!(t.mode&1))return _s(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(re(419)),r=Wl(s,r,void 0),_s(e,t,a,r)}if(l=(a&e.childLanes)!==0,jt||l){if(r=tt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(e,i),sn(r,e,i,-1))}return zd(),r=Wl(Error(re(421))),_s(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=cw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Rt=ir(i.nextSibling),$t=t,De=!0,tn=null,e!==null&&(Vt[Wt++]=An,Vt[Wt++]=Pn,Vt[Wt++]=Pr,An=e.id,Pn=e.overflow,Pr=t),t=jd(t,r.children),t.flags|=4096,t)}function Yf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yc(e.return,t,n)}function Hl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ux(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ht(e,t,r.children,n),r=Be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yf(e,n,t);else if(e.tag===19)Yf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Re(Be,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ba(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Hl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ba(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Hl(t,!0,n,null,s);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(re(153));if(t.child!==null){for(e=t.child,n=lr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=lr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qb(e,t,n){switch(t.tag){case 3:Fx(t),mi();break;case 5:hx(t);break;case 1:Ct(t.type)&&ha(t);break;case 4:md(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Re(xa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Re(Be,Be.current&1),t.flags|=128,null):n&t.child.childLanes?Bx(e,t,n):(Re(Be,Be.current&1),e=Dn(e,t,n),e!==null?e.sibling:null);Re(Be,Be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ux(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Be,Be.current),r)break;return null;case 22:case 23:return t.lanes=0,$x(e,t,n)}return Dn(e,t,n)}var Vx,iu,Wx,Hx;Vx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};iu=function(){};Wx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jr(vn.current);var s=null;switch(n){case"input":i=Cc(e,i),r=Cc(e,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=zc(e,i),r=zc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pa)}Ac(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Oe("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Hx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bi(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xb(e,t,n){var r=t.pendingProps;switch(ld(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return Ct(t.type)&&fa(),lt(t),null;case 3:return r=t.stateNode,xi(),$e(St),$e(ut),xd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ks(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(pu(tn),tn=null))),iu(e,t),lt(t),null;case 5:gd(t);var i=jr(zo.current);if(n=t.type,e!==null&&t.stateNode!=null)Wx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(re(166));return lt(t),null}if(e=jr(vn.current),ks(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[mn]=t,r[No]=s,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<Zi.length;i++)Oe(Zi[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":of(r,s),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Oe("invalid",r);break;case"textarea":af(r,s),Oe("invalid",r)}Ac(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ws(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ws(r.textContent,l,e),i=["children",""+l]):xo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Oe("scroll",r)}switch(n){case"input":fs(r),sf(r,s,!0);break;case"textarea":fs(r),lf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[mn]=t,e[No]=r,Vx(e,t,!1,!1),t.stateNode=e;e:{switch(a=Pc(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),i=r;break;case"iframe":case"object":case"embed":Oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zi.length;i++)Oe(Zi[i],e);i=r;break;case"source":Oe("error",e),i=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=r;break;case"details":Oe("toggle",e),i=r;break;case"input":of(e,r),i=Cc(e,r),Oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":af(e,r),i=zc(e,r),Oe("invalid",e);break;default:i=r}Ac(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?kg(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bg(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&yo(e,c):typeof c=="number"&&yo(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Oe("scroll",e):c!=null&&Ju(e,s,c,a))}switch(n){case"input":fs(e),sf(e,r,!1);break;case"textarea":fs(e),lf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ur(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ri(e,!!r.multiple,s,!1):r.defaultValue!=null&&ri(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)Hx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(re(166));if(n=jr(zo.current),jr(vn.current),ks(t)){if(r=t.stateNode,n=t.memoizedProps,r[mn]=t,(s=r.nodeValue!==n)&&(e=$t,e!==null))switch(e.tag){case 3:ws(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ws(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=t,t.stateNode=r}return lt(t),null;case 13:if($e(Be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Rt!==null&&t.mode&1&&!(t.flags&128))cx(),mi(),t.flags|=98560,s=!1;else if(s=ks(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(re(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[mn]=t}else mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),s=!1}else tn!==null&&(pu(tn),tn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?Ze===0&&(Ze=3):zd())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return xi(),iu(e,t),e===null&&So(t.stateNode.containerInfo),lt(t),null;case 10:return pd(t.type._context),lt(t),null;case 17:return Ct(t.type)&&fa(),lt(t),null;case 19:if($e(Be),s=t.memoizedState,s===null)return lt(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Bi(s,!1);else{if(Ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ba(e),a!==null){for(t.flags|=128,Bi(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Re(Be,Be.current&1|2),t.child}e=e.sibling}s.tail!==null&&He()>vi&&(t.flags|=128,r=!0,Bi(s,!1),t.lanes=4194304)}else{if(!r)if(e=ba(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!De)return lt(t),null}else 2*He()-s.renderingStartTime>vi&&n!==1073741824&&(t.flags|=128,r=!0,Bi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=He(),t.sibling=null,n=Be.current,Re(Be,r?n&1|2:n&1),t):(lt(t),null);case 22:case 23:return Ed(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pt&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(re(156,t.tag))}function Zb(e,t){switch(ld(t),t.tag){case 1:return Ct(t.type)&&fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xi(),$e(St),$e(ut),xd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gd(t),null;case 13:if($e(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(re(340));mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Be),null;case 4:return xi(),null;case 10:return pd(t.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var Ss=!1,ct=!1,ew=typeof WeakSet=="function"?WeakSet:Set,fe=null;function ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function ou(e,t,n){try{n()}catch(r){We(e,t,r)}}var Qf=!1;function tw(e,t){if(Uc=ca,e=Yg(),sd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vc={focusedElem:e,selectionRange:n},ca=!1,fe=t;fe!==null;)if(t=fe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,fe=e;else for(;fe!==null;){t=fe;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var b=m.memoizedProps,k=m.memoizedState,x=t.stateNode,g=x.getSnapshotBeforeUpdate(t.elementType===t.type?b:Zt(t.type,b),k);x.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(_){We(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,fe=e;break}fe=t.return}return m=Qf,Qf=!1,m}function co(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ou(t,n,s)}i=i.next}while(i!==r)}}function Za(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function su(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qx(e){var t=e.alternate;t!==null&&(e.alternate=null,qx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[No],delete t[qc],delete t[Ob],delete t[$b])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jx(e){return e.tag===5||e.tag===3||e.tag===4}function Xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function au(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pa));else if(r!==4&&(e=e.child,e!==null))for(au(e,t,n),e=e.sibling;e!==null;)au(e,t,n),e=e.sibling}function lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}var nt=null,en=!1;function Vn(e,t,n){for(n=n.child;n!==null;)Kx(e,t,n),n=n.sibling}function Kx(e,t,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Ha,n)}catch{}switch(n.tag){case 5:ct||ei(n,t);case 6:var r=nt,i=en;nt=null,Vn(e,t,n),nt=r,en=i,nt!==null&&(en?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(en?(e=nt,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),ko(e)):$l(nt,n.stateNode));break;case 4:r=nt,i=en,nt=n.stateNode.containerInfo,en=!0,Vn(e,t,n),nt=r,en=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ou(n,t,a),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!ct&&(ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){We(n,t,l)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,Vn(e,t,n),ct=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function Zf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ew),t.forEach(function(r){var i=uw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,en=!1;break e;case 3:nt=l.stateNode.containerInfo,en=!0;break e;case 4:nt=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(nt===null)throw Error(re(160));Kx(s,a,i),nt=null,en=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){We(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gx(t,e),t=t.sibling}function Gx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),pn(e),r&4){try{co(3,e,e.return),Za(3,e)}catch(b){We(e,e.return,b)}try{co(5,e,e.return)}catch(b){We(e,e.return,b)}}break;case 1:Xt(t,e),pn(e),r&512&&n!==null&&ei(n,n.return);break;case 5:if(Xt(t,e),pn(e),r&512&&n!==null&&ei(n,n.return),e.flags&32){var i=e.stateNode;try{yo(i,"")}catch(b){We(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&xg(i,s),Pc(l,a);var u=Pc(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?kg(i,p):d==="dangerouslySetInnerHTML"?bg(i,p):d==="children"?yo(i,p):Ju(i,d,p,u)}switch(l){case"input":Nc(i,s);break;case"textarea":yg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?ri(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?ri(i,!!s.multiple,s.defaultValue,!0):ri(i,!!s.multiple,s.multiple?[]:"",!1))}i[No]=s}catch(b){We(e,e.return,b)}}break;case 6:if(Xt(t,e),pn(e),r&4){if(e.stateNode===null)throw Error(re(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){We(e,e.return,b)}}break;case 3:if(Xt(t,e),pn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(t.containerInfo)}catch(b){We(e,e.return,b)}break;case 4:Xt(t,e),pn(e);break;case 13:Xt(t,e),pn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cd=He())),r&4&&Zf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(u=ct)||d,Xt(t,e),ct=u):Xt(t,e),pn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(fe=e,d=e.child;d!==null;){for(p=fe=d;fe!==null;){switch(f=fe,h=f.child,f.tag){case 0:case 11:case 14:case 15:co(4,f,f.return);break;case 1:ei(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(b){We(r,n,b)}}break;case 5:ei(f,f.return);break;case 22:if(f.memoizedState!==null){th(p);continue}}h!==null?(h.return=f,fe=h):th(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=wg("display",a))}catch(b){We(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){We(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Xt(t,e),pn(e),r&4&&Zf(e);break;case 21:break;default:Xt(t,e),pn(e)}}function pn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jx(n)){var r=n;break e}n=n.return}throw Error(re(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yo(i,""),r.flags&=-33);var s=Xf(e);lu(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Xf(e);au(e,l,a);break;default:throw Error(re(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nw(e,t,n){fe=e,Yx(e)}function Yx(e,t,n){for(var r=(e.mode&1)!==0;fe!==null;){var i=fe,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ss;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||ct;l=Ss;var u=ct;if(Ss=a,(ct=c)&&!u)for(fe=i;fe!==null;)a=fe,c=a.child,a.tag===22&&a.memoizedState!==null?nh(i):c!==null?(c.return=a,fe=c):nh(i);for(;s!==null;)fe=s,Yx(s),s=s.sibling;fe=i,Ss=l,ct=u}eh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,fe=s):eh(e)}}function eh(e){for(;fe!==null;){var t=fe;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ct||Za(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&$f(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$f(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ko(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}ct||t.flags&512&&su(t)}catch(f){We(t,t.return,f)}}if(t===e){fe=null;break}if(n=t.sibling,n!==null){n.return=t.return,fe=n;break}fe=t.return}}function th(e){for(;fe!==null;){var t=fe;if(t===e){fe=null;break}var n=t.sibling;if(n!==null){n.return=t.return,fe=n;break}fe=t.return}}function nh(e){for(;fe!==null;){var t=fe;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Za(4,t)}catch(c){We(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){We(t,i,c)}}var s=t.return;try{su(t)}catch(c){We(t,s,c)}break;case 5:var a=t.return;try{su(t)}catch(c){We(t,a,c)}}}catch(c){We(t,t.return,c)}if(t===e){fe=null;break}var l=t.sibling;if(l!==null){l.return=t.return,fe=l;break}fe=t.return}}var rw=Math.ceil,ja=Bn.ReactCurrentDispatcher,_d=Bn.ReactCurrentOwner,Gt=Bn.ReactCurrentBatchConfig,Ne=0,tt=null,Ye=null,rt=0,Pt=0,ti=hr(0),Ze=0,Lo=null,Mr=0,el=0,Sd=0,uo=null,kt=null,Cd=0,vi=1/0,En=null,_a=!1,cu=null,sr=null,Cs=!1,Qn=null,Sa=0,po=0,uu=null,Js=-1,Ks=0;function gt(){return Ne&6?He():Js!==-1?Js:Js=He()}function ar(e){return e.mode&1?Ne&2&&rt!==0?rt&-rt:Fb.transition!==null?(Ks===0&&(Ks=Mg()),Ks):(e=Te,e!==0||(e=window.event,e=e===void 0?16:Bg(e.type)),e):1}function sn(e,t,n,r){if(50<po)throw po=0,uu=null,Error(re(185));qo(e,n,r),(!(Ne&2)||e!==tt)&&(e===tt&&(!(Ne&2)&&(el|=n),Ze===4&&Gn(e,rt)),Nt(e,r),n===1&&Ne===0&&!(t.mode&1)&&(vi=He()+500,Ya&&mr()))}function Nt(e,t){var n=e.callbackNode;F0(e,t);var r=la(e,e===tt?rt:0);if(r===0)n!==null&&df(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&df(n),t===1)e.tag===0?Db(rh.bind(null,e)):sx(rh.bind(null,e)),Rb(function(){!(Ne&6)&&mr()}),n=null;else{switch(Rg(r)){case 1:n=Xu;break;case 4:n=Pg;break;case 16:n=aa;break;case 536870912:n=Lg;break;default:n=aa}n=iy(n,Qx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qx(e,t){if(Js=-1,Ks=0,Ne&6)throw Error(re(327));var n=e.callbackNode;if(li()&&e.callbackNode!==n)return null;var r=la(e,e===tt?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ca(e,r);else{t=r;var i=Ne;Ne|=2;var s=Zx();(tt!==e||rt!==t)&&(En=null,vi=He()+500,Sr(e,t));do try{sw();break}catch(l){Xx(e,l)}while(!0);dd(),ja.current=s,Ne=i,Ye!==null?t=0:(tt=null,rt=0,t=Ze)}if(t!==0){if(t===2&&(i=Oc(e),i!==0&&(r=i,t=du(e,i))),t===1)throw n=Lo,Sr(e,0),Gn(e,r),Nt(e,He()),n;if(t===6)Gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!iw(i)&&(t=Ca(e,r),t===2&&(s=Oc(e),s!==0&&(r=s,t=du(e,s))),t===1))throw n=Lo,Sr(e,0),Gn(e,r),Nt(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(re(345));case 2:vr(e,kt,En);break;case 3:if(Gn(e,r),(r&130023424)===r&&(t=Cd+500-He(),10<t)){if(la(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Hc(vr.bind(null,e,kt,En),t);break}vr(e,kt,En);break;case 4:if(Gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-on(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rw(r/1960))-r,10<r){e.timeoutHandle=Hc(vr.bind(null,e,kt,En),r);break}vr(e,kt,En);break;case 5:vr(e,kt,En);break;default:throw Error(re(329))}}}return Nt(e,He()),e.callbackNode===n?Qx.bind(null,e):null}function du(e,t){var n=uo;return e.current.memoizedState.isDehydrated&&(Sr(e,t).flags|=256),e=Ca(e,t),e!==2&&(t=kt,kt=n,t!==null&&pu(t)),e}function pu(e){kt===null?kt=e:kt.push.apply(kt,e)}function iw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gn(e,t){for(t&=~Sd,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function rh(e){if(Ne&6)throw Error(re(327));li();var t=la(e,0);if(!(t&1))return Nt(e,He()),null;var n=Ca(e,t);if(e.tag!==0&&n===2){var r=Oc(e);r!==0&&(t=r,n=du(e,r))}if(n===1)throw n=Lo,Sr(e,0),Gn(e,t),Nt(e,He()),n;if(n===6)throw Error(re(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vr(e,kt,En),Nt(e,He()),null}function Nd(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(vi=He()+500,Ya&&mr())}}function Rr(e){Qn!==null&&Qn.tag===0&&!(Ne&6)&&li();var t=Ne;Ne|=1;var n=Gt.transition,r=Te;try{if(Gt.transition=null,Te=1,e)return e()}finally{Te=r,Gt.transition=n,Ne=t,!(Ne&6)&&mr()}}function Ed(){Pt=ti.current,$e(ti)}function Sr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mb(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fa();break;case 3:xi(),$e(St),$e(ut),xd();break;case 5:gd(r);break;case 4:xi();break;case 13:$e(Be);break;case 19:$e(Be);break;case 10:pd(r.type._context);break;case 22:case 23:Ed()}n=n.return}if(tt=e,Ye=e=lr(e.current,null),rt=Pt=t,Ze=0,Lo=null,Sd=el=Mr=0,kt=uo=null,kr!==null){for(t=0;t<kr.length;t++)if(n=kr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}kr=null}return e}function Xx(e,t){do{var n=Ye;try{if(dd(),Ws.current=ka,wa){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wa=!1}if(Lr=0,et=Xe=Ue=null,lo=!1,To=0,_d.current=null,n===null||n.return===null){Ze=1,Lo=t,Ye=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=rt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Wf(a);if(h!==null){h.flags&=-257,Hf(h,a,l,s,t),h.mode&1&&Vf(s,u,t),t=h,c=u;var m=t.updateQueue;if(m===null){var b=new Set;b.add(c),t.updateQueue=b}else m.add(c);break e}else{if(!(t&1)){Vf(s,u,t),zd();break e}c=Error(re(426))}}else if(De&&l.mode&1){var k=Wf(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Hf(k,a,l,s,t),cd(yi(c,l));break e}}s=c=yi(c,l),Ze!==4&&(Ze=2),uo===null?uo=[s]:uo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var x=Rx(s,c,t);Of(s,x);break e;case 1:l=c;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(sr===null||!sr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=Ix(s,l,t);Of(s,_);break e}}s=s.return}while(s!==null)}ty(n)}catch(A){t=A,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function Zx(){var e=ja.current;return ja.current=ka,e===null?ka:e}function zd(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),tt===null||!(Mr&268435455)&&!(el&268435455)||Gn(tt,rt)}function Ca(e,t){var n=Ne;Ne|=2;var r=Zx();(tt!==e||rt!==t)&&(En=null,Sr(e,t));do try{ow();break}catch(i){Xx(e,i)}while(!0);if(dd(),Ne=n,ja.current=r,Ye!==null)throw Error(re(261));return tt=null,rt=0,Ze}function ow(){for(;Ye!==null;)ey(Ye)}function sw(){for(;Ye!==null&&!A0();)ey(Ye)}function ey(e){var t=ry(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?ty(e):Ye=t,_d.current=null}function ty(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zb(n,t),n!==null){n.flags&=32767,Ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,Ye=null;return}}else if(n=Xb(n,t,Pt),n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Ze===0&&(Ze=5)}function vr(e,t,n){var r=Te,i=Gt.transition;try{Gt.transition=null,Te=1,aw(e,t,n,r)}finally{Gt.transition=i,Te=r}return null}function aw(e,t,n,r){do li();while(Qn!==null);if(Ne&6)throw Error(re(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(re(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(B0(e,s),e===tt&&(Ye=tt=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cs||(Cs=!0,iy(aa,function(){return li(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gt.transition,Gt.transition=null;var a=Te;Te=1;var l=Ne;Ne|=4,_d.current=null,tw(e,n),Gx(n,e),Nb(Vc),ca=!!Uc,Vc=Uc=null,e.current=n,nw(n),P0(),Ne=l,Te=a,Gt.transition=s}else e.current=n;if(Cs&&(Cs=!1,Qn=e,Sa=i),s=e.pendingLanes,s===0&&(sr=null),R0(n.stateNode),Nt(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_a)throw _a=!1,e=cu,cu=null,e;return Sa&1&&e.tag!==0&&li(),s=e.pendingLanes,s&1?e===uu?po++:(po=0,uu=e):po=0,mr(),null}function li(){if(Qn!==null){var e=Rg(Sa),t=Gt.transition,n=Te;try{if(Gt.transition=null,Te=16>e?16:e,Qn===null)var r=!1;else{if(e=Qn,Qn=null,Sa=0,Ne&6)throw Error(re(331));var i=Ne;for(Ne|=4,fe=e.current;fe!==null;){var s=fe,a=s.child;if(fe.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(fe=u;fe!==null;){var d=fe;switch(d.tag){case 0:case 11:case 15:co(8,d,s)}var p=d.child;if(p!==null)p.return=d,fe=p;else for(;fe!==null;){d=fe;var f=d.sibling,h=d.return;if(qx(d),d===u){fe=null;break}if(f!==null){f.return=h,fe=f;break}fe=h}}}var m=s.alternate;if(m!==null){var b=m.child;if(b!==null){m.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}fe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,fe=a;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,fe=x;break e}fe=s.return}}var g=e.current;for(fe=g;fe!==null;){a=fe;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,fe=y;else e:for(a=g;fe!==null;){if(l=fe,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Za(9,l)}}catch(A){We(l,l.return,A)}if(l===a){fe=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,fe=_;break e}fe=l.return}}if(Ne=i,mr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Ha,e)}catch{}r=!0}return r}finally{Te=n,Gt.transition=t}}return!1}function ih(e,t,n){t=yi(n,t),t=Rx(e,t,1),e=or(e,t,1),t=gt(),e!==null&&(qo(e,1,t),Nt(e,t))}function We(e,t,n){if(e.tag===3)ih(e,e,n);else for(;t!==null;){if(t.tag===3){ih(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){e=yi(n,e),e=Ix(t,e,1),t=or(t,e,1),e=gt(),t!==null&&(qo(t,1,e),Nt(t,e));break}}t=t.return}}function lw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,tt===e&&(rt&n)===n&&(Ze===4||Ze===3&&(rt&130023424)===rt&&500>He()-Cd?Sr(e,0):Sd|=n),Nt(e,t)}function ny(e,t){t===0&&(e.mode&1?(t=gs,gs<<=1,!(gs&130023424)&&(gs=4194304)):t=1);var n=gt();e=$n(e,t),e!==null&&(qo(e,t,n),Nt(e,n))}function cw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ny(e,n)}function uw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(re(314))}r!==null&&r.delete(t),ny(e,n)}var ry;ry=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return jt=!1,Qb(e,t,n);jt=!!(e.flags&131072)}else jt=!1,De&&t.flags&1048576&&ax(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qs(e,t),e=t.pendingProps;var i=hi(t,ut.current);ai(t,n),i=vd(null,t,r,e,i,n);var s=bd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ct(r)?(s=!0,ha(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hd(t),i.updater=Xa,t.stateNode=i,i._reactInternals=t,Xc(t,r,e,n),t=tu(null,t,r,!0,s,n)):(t.tag=0,De&&s&&ad(t),ht(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=pw(r),e=Zt(r,e),i){case 0:t=eu(null,t,r,e,n);break e;case 1:t=Kf(null,t,r,e,n);break e;case 11:t=qf(null,t,r,e,n);break e;case 14:t=Jf(null,t,r,Zt(r.type,e),n);break e}throw Error(re(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),eu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),Kf(e,t,r,i,n);case 3:e:{if(Fx(t),e===null)throw Error(re(387));r=t.pendingProps,s=t.memoizedState,i=s.element,fx(e,t),va(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=yi(Error(re(423)),t),t=Gf(e,t,r,n,i);break e}else if(r!==i){i=yi(Error(re(424)),t),t=Gf(e,t,r,n,i);break e}else for(Rt=ir(t.stateNode.containerInfo.firstChild),$t=t,De=!0,tn=null,n=dx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){t=Dn(e,t,n);break e}ht(e,t,r,n)}t=t.child}return t;case 5:return hx(t),e===null&&Gc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Wc(r,i)?a=null:s!==null&&Wc(r,s)&&(t.flags|=32),Dx(e,t),ht(e,t,a,n),t.child;case 6:return e===null&&Gc(t),null;case 13:return Bx(e,t,n);case 4:return md(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gi(t,null,r,n):ht(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),qf(e,t,r,i,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Re(xa,r._currentValue),r._currentValue=a,s!==null)if(ln(s.value,a)){if(s.children===i.children&&!St.current){t=Dn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Mn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Yc(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Yc(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ht(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ai(t,n),i=Yt(i),r=r(i),t.flags|=1,ht(e,t,r,n),t.child;case 14:return r=t.type,i=Zt(r,t.pendingProps),i=Zt(r.type,i),Jf(e,t,r,i,n);case 15:return Ox(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),qs(e,t),t.tag=1,Ct(r)?(e=!0,ha(t)):e=!1,ai(t,n),Mx(t,r,i),Xc(t,r,i,n),tu(null,t,r,!0,e,n);case 19:return Ux(e,t,n);case 22:return $x(e,t,n)}throw Error(re(156,t.tag))};function iy(e,t){return Ag(e,t)}function dw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new dw(e,t,n,r)}function Td(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pw(e){if(typeof e=="function")return Td(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gu)return 11;if(e===Yu)return 14}return 2}function lr(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gs(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Td(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Hr:return Cr(n.children,i,s,t);case Ku:a=8,i|=8;break;case kc:return e=Jt(12,n,t,i|2),e.elementType=kc,e.lanes=s,e;case jc:return e=Jt(13,n,t,i),e.elementType=jc,e.lanes=s,e;case _c:return e=Jt(19,n,t,i),e.elementType=_c,e.lanes=s,e;case hg:return tl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pg:a=10;break e;case fg:a=9;break e;case Gu:a=11;break e;case Yu:a=14;break e;case Hn:a=16,r=null;break e}throw Error(re(130,e==null?e:typeof e,""))}return t=Jt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Cr(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function tl(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=hg,e.lanes=n,e.stateNode={isHidden:!1},e}function ql(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ad(e,t,n,r,i,s,a,l,c){return e=new fw(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Jt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(s),e}function hw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function oy(e){if(!e)return dr;e=e._reactInternals;e:{if(Dr(e)!==e||e.tag!==1)throw Error(re(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(re(171))}if(e.tag===1){var n=e.type;if(Ct(n))return ox(e,n,t)}return t}function sy(e,t,n,r,i,s,a,l,c){return e=Ad(n,r,!0,e,i,s,a,l,c),e.context=oy(null),n=e.current,r=gt(),i=ar(n),s=Mn(r,i),s.callback=t??null,or(n,s,i),e.current.lanes=i,qo(e,i,r),Nt(e,r),e}function nl(e,t,n,r){var i=t.current,s=gt(),a=ar(i);return n=oy(n),t.context===null?t.context=n:t.pendingContext=n,t=Mn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=or(i,t,a),e!==null&&(sn(e,i,a,s),Vs(e,i,a)),a}function Na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pd(e,t){oh(e,t),(e=e.alternate)&&oh(e,t)}function mw(){return null}var ay=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ld(e){this._internalRoot=e}rl.prototype.render=Ld.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(re(409));nl(e,t,null,null)};rl.prototype.unmount=Ld.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rr(function(){nl(null,e,null,null)}),t[On]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=$g();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kn.length&&t!==0&&t<Kn[n].priority;n++);Kn.splice(n,0,e),n===0&&Fg(e)}};function Md(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sh(){}function gw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Na(a);s.call(u)}}var a=sy(t,r,e,0,null,!1,!1,"",sh);return e._reactRootContainer=a,e[On]=a.current,So(e.nodeType===8?e.parentNode:e),Rr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Na(c);l.call(u)}}var c=Ad(e,0,!1,null,null,!1,!1,"",sh);return e._reactRootContainer=c,e[On]=c.current,So(e.nodeType===8?e.parentNode:e),Rr(function(){nl(t,c,n,r)}),c}function ol(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Na(a);l.call(c)}}nl(t,a,e,i)}else a=gw(n,t,e,i,r);return Na(a)}Ig=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xi(t.pendingLanes);n!==0&&(Zu(t,n|1),Nt(t,He()),!(Ne&6)&&(vi=He()+500,mr()))}break;case 13:Rr(function(){var r=$n(e,1);if(r!==null){var i=gt();sn(r,e,1,i)}}),Pd(e,1)}};ed=function(e){if(e.tag===13){var t=$n(e,134217728);if(t!==null){var n=gt();sn(t,e,134217728,n)}Pd(e,134217728)}};Og=function(e){if(e.tag===13){var t=ar(e),n=$n(e,t);if(n!==null){var r=gt();sn(n,e,t,r)}Pd(e,t)}};$g=function(){return Te};Dg=function(e,t){var n=Te;try{return Te=e,t()}finally{Te=n}};Mc=function(e,t,n){switch(t){case"input":if(Nc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ga(r);if(!i)throw Error(re(90));gg(r),Nc(r,i)}}}break;case"textarea":yg(e,n);break;case"select":t=n.value,t!=null&&ri(e,!!n.multiple,t,!1)}};Sg=Nd;Cg=Rr;var xw={usingClientEntryPoint:!1,Events:[Ko,Gr,Ga,jg,_g,Nd]},Ui={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yw={bundleType:Ui.bundleType,version:Ui.version,rendererPackageName:Ui.rendererPackageName,rendererConfig:Ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ui.findFiberByHostInstance||mw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ns.isDisabled&&Ns.supportsFiber)try{Ha=Ns.inject(yw),yn=Ns}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xw;Bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Md(t))throw Error(re(200));return hw(e,t,null,n)};Bt.createRoot=function(e,t){if(!Md(e))throw Error(re(299));var n=!1,r="",i=ay;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ad(e,1,!1,null,null,n,!1,r,i),e[On]=t.current,So(e.nodeType===8?e.parentNode:e),new Ld(t)};Bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(re(188)):(e=Object.keys(e).join(","),Error(re(268,e)));return e=zg(t),e=e===null?null:e.stateNode,e};Bt.flushSync=function(e){return Rr(e)};Bt.hydrate=function(e,t,n){if(!il(t))throw Error(re(200));return ol(null,e,t,!0,n)};Bt.hydrateRoot=function(e,t,n){if(!Md(e))throw Error(re(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=ay;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=sy(t,null,e,1,n??null,i,!1,s,a),e[On]=t.current,So(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new rl(t)};Bt.render=function(e,t,n){if(!il(t))throw Error(re(200));return ol(null,e,t,!1,n)};Bt.unmountComponentAtNode=function(e){if(!il(e))throw Error(re(40));return e._reactRootContainer?(Rr(function(){ol(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1};Bt.unstable_batchedUpdates=Nd;Bt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!il(n))throw Error(re(200));if(e==null||e._reactInternals===void 0)throw Error(re(38));return ol(e,t,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function ly(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ly)}catch(e){console.error(e)}}ly(),lg.exports=Bt;var cy=lg.exports,ah=cy;bc.createRoot=ah.createRoot,bc.hydrateRoot=ah.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mo.apply(this,arguments)}var Xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xn||(Xn={}));const lh="popstate";function vw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return fu("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:uy(i)}return ww(t,n,null,e)}function Qe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bw(){return Math.random().toString(36).substr(2,8)}function ch(e,t){return{usr:e.state,key:e.key,idx:t}}function fu(e,t,n,r){return n===void 0&&(n=null),Mo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zi(t):t,{state:n,key:t&&t.key||r||bw()})}function uy(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ww(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Xn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Mo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=Xn.Pop;let k=d(),x=k==null?null:k-u;u=k,c&&c({action:l,location:b.location,delta:x})}function f(k,x){l=Xn.Push;let g=fu(b.location,k,x);u=d()+1;let y=ch(g,u),_=b.createHref(g);try{a.pushState(y,"",_)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(_)}s&&c&&c({action:l,location:b.location,delta:1})}function h(k,x){l=Xn.Replace;let g=fu(b.location,k,x);u=d();let y=ch(g,u),_=b.createHref(g);a.replaceState(y,"",_),s&&c&&c({action:l,location:b.location,delta:0})}function m(k){let x=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof k=="string"?k:uy(k);return g=g.replace(/ $/,"%20"),Qe(x,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,x)}let b={get action(){return l},get location(){return e(i,a)},listen(k){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(lh,p),c=k,()=>{i.removeEventListener(lh,p),c=null}},createHref(k){return t(i,k)},createURL:m,encodeLocation(k){let x=m(k);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:h,go(k){return a.go(k)}};return b}var uh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(uh||(uh={}));function kw(e,t,n){return n===void 0&&(n="/"),jw(e,t,n)}function jw(e,t,n,r){let i=typeof t=="string"?zi(t):t,s=fy(i.pathname||"/",n);if(s==null)return null;let a=dy(e);_w(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Iw(s);l=Lw(a[c],u)}return l}function dy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(Qe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Nr([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dy(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Aw(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of py(s.path))i(s,a,c)}),t}function py(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=py(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function _w(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Pw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Sw=/^:[\w-]+$/,Cw=3,Nw=2,Ew=1,zw=10,Tw=-2,dh=e=>e==="*";function Aw(e,t){let n=e.split("/"),r=n.length;return n.some(dh)&&(r+=Tw),t&&(r+=Nw),n.filter(i=>!dh(i)).reduce((i,s)=>i+(Sw.test(s)?Cw:s===""?Ew:zw),r)}function Pw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Lw(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=Mw({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Nr([s,p.pathname]),pathnameBase:Bw(Nr([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=Nr([s,p.pathnameBase]))}return a}function Mw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Rw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let b=l[p]||"";a=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const m=l[p];return h&&!m?u[f]=void 0:u[f]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Rw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Rd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Iw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Rd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function fy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Ow=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$w=e=>Ow.test(e);function Dw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zi(e):e,s;if(n)if($w(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Rd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=ph(n.substring(1),"/"):s=ph(n,t)}else s=t;return{pathname:s,search:Uw(r),hash:Vw(i)}}function ph(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function hy(e,t){let n=Fw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function my(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zi(e):(i=Mo({},e),Qe(!i.pathname||!i.pathname.includes("?"),Kl("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),Kl("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),Kl("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=Dw(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Nr=e=>e.join("/").replace(/\/\/+/g,"/"),Bw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ww(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gy=["post","put","patch","delete"];new Set(gy);const Hw=["get",...gy];new Set(Hw);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}const Id=j.createContext(null),qw=j.createContext(null),Yo=j.createContext(null),sl=j.createContext(null),gr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),xy=j.createContext(null);function Qo(){return j.useContext(sl)!=null}function Od(){return Qo()||Qe(!1),j.useContext(sl).location}function yy(e){j.useContext(Yo).static||j.useLayoutEffect(e)}function $d(){let{isDataRoute:e}=j.useContext(gr);return e?sk():Jw()}function Jw(){Qo()||Qe(!1);let e=j.useContext(Id),{basename:t,future:n,navigator:r}=j.useContext(Yo),{matches:i}=j.useContext(gr),{pathname:s}=Od(),a=JSON.stringify(hy(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return yy(()=>{l.current=!0}),j.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=my(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Nr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function Kw(){let{matches:e}=j.useContext(gr),t=e[e.length-1];return t?t.params:{}}function Gw(e,t){return Yw(e,t)}function Yw(e,t,n,r){Qo()||Qe(!1);let{navigator:i}=j.useContext(Yo),{matches:s}=j.useContext(gr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Od(),d;if(t){var p;let k=typeof t=="string"?zi(t):t;c==="/"||(p=k.pathname)!=null&&p.startsWith(c)||Qe(!1),d=k}else d=u;let f=d.pathname||"/",h=f;if(c!=="/"){let k=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let m=kw(e,{pathname:h}),b=tk(m&&m.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Nr([c,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?c:Nr([c,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return t&&b?j.createElement(sl.Provider,{value:{location:Ro({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Xn.Pop}},b):b}function Qw(){let e=ok(),t=Ww(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:i},n):null,null)}const Xw=j.createElement(Qw,null);class Zw extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(gr.Provider,{value:this.props.routeContext},j.createElement(xy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ek(e){let{routeContext:t,match:n,children:r}=e,i=j.useContext(Id);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(gr.Provider,{value:t},r)}function tk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Qe(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:h}=n,m=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||m){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let h,m=!1,b=null,k=null;n&&(h=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||Xw,c&&(u<0&&f===0?(ak("route-fallback"),m=!0,k=null):u===f&&(m=!0,k=p.route.hydrateFallbackElement||null)));let x=t.concat(a.slice(0,f+1)),g=()=>{let y;return h?y=b:m?y=k:p.route.Component?y=j.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,j.createElement(ek,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?j.createElement(Zw,{location:n.location,revalidation:n.revalidation,component:b,error:h,children:g(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):g()},null)}var vy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vy||{}),by=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(by||{});function nk(e){let t=j.useContext(Id);return t||Qe(!1),t}function rk(e){let t=j.useContext(qw);return t||Qe(!1),t}function ik(e){let t=j.useContext(gr);return t||Qe(!1),t}function wy(e){let t=ik(),n=t.matches[t.matches.length-1];return n.route.id||Qe(!1),n.route.id}function ok(){var e;let t=j.useContext(xy),n=rk(),r=wy();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function sk(){let{router:e}=nk(vy.UseNavigateStable),t=wy(by.UseNavigateStable),n=j.useRef(!1);return yy(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ro({fromRouteId:t},s)))},[e,t])}const fh={};function ak(e,t,n){fh[e]||(fh[e]=!0)}function lk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ck(e){let{to:t,replace:n,state:r,relative:i}=e;Qo()||Qe(!1);let{future:s,static:a}=j.useContext(Yo),{matches:l}=j.useContext(gr),{pathname:c}=Od(),u=$d(),d=my(t,hy(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return j.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function Vr(e){Qe(!1)}function uk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:a=!1,future:l}=e;Qo()&&Qe(!1);let c=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:c,navigator:s,static:a,future:Ro({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=zi(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:m="default"}=r,b=j.useMemo(()=>{let k=fy(d,c);return k==null?null:{location:{pathname:k,search:p,hash:f,state:h,key:m},navigationType:i}},[c,d,p,f,h,m,i]);return b==null?null:j.createElement(Yo.Provider,{value:u},j.createElement(sl.Provider,{children:n,value:b}))}function dk(e){let{children:t,location:n}=e;return Gw(hu(t),n)}new Promise(()=>{});function hu(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,i)=>{if(!j.isValidElement(r))return;let s=[...t,i];if(r.type===j.Fragment){n.push.apply(n,hu(r.props.children,s));return}r.type!==Vr&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=hu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const pk="6";try{window.__reactRouterVersion=pk}catch{}const fk="startTransition",hh=l0[fk];function hk(e){let{basename:t,children:n,future:r,window:i}=e,s=j.useRef();s.current==null&&(s.current=vw({window:i,v5Compat:!0}));let a=s.current,[l,c]=j.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=j.useCallback(p=>{u&&hh?hh(()=>c(p)):c(p)},[c,u]);return j.useLayoutEffect(()=>a.listen(d),[a,d]),j.useEffect(()=>lk(r),[r]),j.createElement(uk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var mh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mh||(mh={}));var gh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gh||(gh={}));const mk={},xh=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const h=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(m=>m(t,h))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(mk?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},gk=e=>e?xh(e):xh;var ky={exports:{}},jy={},_y={exports:{}},Sy={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=j;function xk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yk=typeof Object.is=="function"?Object.is:xk,vk=bi.useState,bk=bi.useEffect,wk=bi.useLayoutEffect,kk=bi.useDebugValue;function jk(e,t){var n=t(),r=vk({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return wk(function(){i.value=n,i.getSnapshot=t,Gl(i)&&s({inst:i})},[e,n,t]),bk(function(){return Gl(i)&&s({inst:i}),e(function(){Gl(i)&&s({inst:i})})},[e]),kk(n),n}function Gl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yk(e,n)}catch{return!0}}function _k(e,t){return t()}var Sk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?_k:jk;Sy.useSyncExternalStore=bi.useSyncExternalStore!==void 0?bi.useSyncExternalStore:Sk;_y.exports=Sy;var Ck=_y.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=j,Nk=Ck;function Ek(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zk=typeof Object.is=="function"?Object.is:Ek,Tk=Nk.useSyncExternalStore,Ak=al.useRef,Pk=al.useEffect,Lk=al.useMemo,Mk=al.useDebugValue;jy.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=Ak(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=Lk(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var m=a.value;if(i(m,h))return p=m}return p=h}if(m=p,zk(d,h))return m;var b=r(h);return i!==void 0&&i(m,b)?(d=h,m):(d=h,p=b)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=Tk(e,s[0],s[1]);return Pk(function(){a.hasValue=!0,a.value=l},[l]),Mk(l),l};ky.exports=jy;var Rk=ky.exports;const Ik=Va(Rk),Cy={},{useDebugValue:Ok}=Ot,{useSyncExternalStoreWithSelector:$k}=Ik;let yh=!1;const Dk=e=>e;function Fk(e,t=Dk,n){(Cy?"production":void 0)!=="production"&&n&&!yh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),yh=!0);const r=$k(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Ok(r),r}const vh=e=>{(Cy?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?gk(e):e,n=(r,i)=>Fk(t,r,i);return Object.assign(n,t),n},Bk=e=>e?vh(e):vh,dt=Bk((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=s.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:s,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let i=r.app;if(n.type==="LlmAgent"&&n.output_key){const s=n.output_key;r.app.state_keys.find(l=>l.name===s)||(i={...r.app,state_keys:[...r.app.state_keys,{name:s,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:i,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:i}=t();if(i){const s=i.agents.find(l=>l.id===n);let a=i.app;if(s&&s.type==="LlmAgent"&&r.output_key){const l=s.output_key,c=r.output_key;if(l!==c){const u=i.app.state_keys.filter(p=>p.name!==l);u.find(p=>p.name===c)?a={...i.app,state_keys:u}:a={...i.app,state_keys:[...u,{name:c,description:`Output from ${r.name||s.name} agent`,type:"string",scope:"session"}]}}}e({project:{...i,app:a,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Ny="/api";async function Se(e,t){const n=await fetch(`${Ny}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Ey(){return(await Se("/projects")).projects}async function zy(e){return(await Se(`/projects/${e}`)).project}async function Ty(e,t=""){return(await Se("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function mu(e,t){return(await Se(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Ay(e){await Se(`/projects/${e}`,{method:"DELETE"})}async function Py(e){return Se(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function gu(e){return(await Se(`/projects/${e}/sessions`)).sessions}async function Ly(e,t){return(await Se(`/projects/${e}/sessions/${t}/load`)).session}async function My(e){return(await Se(`/projects/${e}/yaml`)).yaml}async function Ry(e,t){return(await Se(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Dd(){return(await Se("/mcp-servers")).servers}async function Iy(){return(await Se("/builtin-tools")).tools}function Oy(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Ys(e,t,n,r){return await Se(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function $y(e,t){return await Se(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Dy(e,t,n,r=[],i){return await Se(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Fy(e,t,n,r,i=[],s){return await Se(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function xu(e){return await Se("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function By(e,t){return Se(`/projects/${e}/skillsets/${t}/stats`)}async function Uy(e,t,n,r,i=500,s=50){return Se(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function Vy(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const a=await fetch(`${Ny}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Wy(e,t,n,r=10,i=0){return Se(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Hy(e,t){return Se(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function qy(){return Se("/skillsets/embeddings-available")}const Je={async get(e){return Se(e)},async post(e,t){return Se(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Se(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Se(e,{method:"DELETE"})}},Uk=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Uy,api:Je,checkEmbeddingsAvailable:qy,clearSkillSet:Hy,createProject:Ty,createRunWebSocket:Oy,deleteProject:Ay,fetchJSON:Se,generateAgentConfig:$y,generateCallbackCode:Fy,generatePrompt:Ys,generateToolCode:Dy,getBuiltinTools:Iy,getMcpServers:Dd,getProject:zy,getProjectYaml:My,getSkillSetStats:By,listProjectSessions:gu,listProjects:Ey,loadSession:Ly,saveSessionToMemory:Py,searchSkillSet:Wy,testMcpServer:xu,updateProject:mu,updateProjectFromYaml:Ry,uploadSkillSetFile:Vy},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ge=(e,t)=>{const n=j.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>j.createElement("svg",{ref:d,...Vk,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Wk(e)}`,l].join(" "),...u},[...t.map(([p,f])=>j.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=ge("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=ge("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=ge("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=ge("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=ge("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=ge("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=ge("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=ge("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=ge("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=ge("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=ge("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=ge("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=ge("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=ge("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=ge("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=ge("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=ge("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=ge("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=ge("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=ge("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=ge("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=ge("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=ge("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=ge("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ge("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=ge("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=ge("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=ge("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=ge("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=ge("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=ge("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=ge("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=ge("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=ge("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=ge("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=ge("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=ge("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=ge("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=ge("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=ge("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ij=ge("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=ge("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=ge("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=ge("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oj=ge("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=ge("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=ge("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=ge("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sj=ge("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=ge("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=ge("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=ge("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=ge("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=ge("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=ge("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=ge("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aj=ge("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=ge("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=ge("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=ge("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function lj(){const e=$d(),[t,n]=j.useState([]),[r,i]=j.useState(!0),[s,a]=j.useState(!1),[l,c]=j.useState("");j.useEffect(()=>{u()},[]);async function u(){try{const f=await Ey();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Ty(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await Ay(f),n(t.filter(m=>m.id!==f))}catch(m){console.error("Failed to delete project:",m)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
        .project-list {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, var(--bg-primary) 0%, #0f0f18 100%);
        }
        
        .header {
          text-align: center;
          margin-bottom: 48px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        
        .logo-icon {
          color: var(--accent-primary);
          filter: drop-shadow(0 0 10px var(--accent-primary));
        }
        
        .title {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .subtitle {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }
        
        .content {
          width: 100%;
          max-width: 800px;
        }
        
        .create-form {
          display: flex;
          gap: 12px;
          margin-bottom: 32px;
        }
        
        .create-form input {
          flex: 1;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px;
        }
        
        .project-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }
        
        .project-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        
        .project-card h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        
        .project-card p {
          color: var(--text-muted);
          font-size: 13px;
        }
        
        .delete-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 6px;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          opacity: 0;
          transition: all 0.2s ease;
        }
        
        .project-card:hover .delete-btn {
          opacity: 1;
        }
        
        .delete-btn:hover {
          color: var(--error);
          background: rgba(255, 107, 107, 0.1);
        }
        
        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: var(--text-muted);
        }
        
        .loading {
          text-align: center;
          padding: 40px;
          color: var(--text-muted);
        }
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(Hd,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(Ge,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[o.jsx(Ge,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(bh,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(f=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[o.jsxs("h3",{children:[o.jsx(bh,{size:18}),f.name]}),o.jsx("p",{children:f.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:h=>p(f.id,h),children:o.jsx(Fe,{size:16})})]},f.id))})]})]})}const wh={},cj=5*60*1e3;function uj({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:s="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=j.useState(t||""),[u,d]=j.useState(!1),[p,f]=j.useState([]),[h,m]=j.useState(!1),[b,k]=j.useState(null),[x,g]=j.useState(-1),[y,_]=j.useState({top:0,left:0,width:0}),A=j.useRef(null),C=j.useRef(null);j.useEffect(()=>{if(u&&A.current){const T=A.current.getBoundingClientRect();_({top:T.bottom+window.scrollY+4,left:T.left+window.scrollX,width:T.width})}},[u]);const P=j.useCallback(async()=>{const T=wh[a];if(T&&Date.now()-T.timestamp<cj){const R=[];Object.values(T.providers).forEach($=>{R.push(...$.models)}),f(R);return}m(!0),k(null);try{const R=new URLSearchParams;n&&R.append("provider",n),r&&R.append("api_base",r);const $=`/models/${e}${R.toString()?"?"+R.toString():""}`,z=await Je.get($);wh[a]={providers:z.providers,timestamp:Date.now()};const O=[];Object.values(z.providers).forEach(I=>{I.models&&I.models.length>0&&O.push(...I.models)}),f(O)}catch(R){k(R.message||"Failed to fetch models")}finally{m(!1)}},[e,a,r,n]);j.useEffect(()=>{P()},[P]),j.useEffect(()=>{c(t||"")},[t]);const N=p.filter(T=>{const R=l.toLowerCase();return T.id.toLowerCase().includes(R)||T.name.toLowerCase().includes(R)||T.provider.toLowerCase().includes(R)});j.useEffect(()=>{const T=R=>{C.current&&!C.current.contains(R.target)&&A.current&&!A.current.contains(R.target)&&d(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const D=T=>{if(!u){(T.key==="ArrowDown"||T.key==="Enter")&&(d(!0),T.preventDefault());return}switch(T.key){case"ArrowDown":g(R=>Math.min(R+1,N.length-1)),T.preventDefault();break;case"ArrowUp":g(R=>Math.max(R-1,0)),T.preventDefault();break;case"Enter":x>=0&&x<N.length&&E(N[x]),T.preventDefault();break;case"Escape":d(!1);break}},E=T=>{c(T.id),i(T.id,T.provider),d(!1)},M=T=>{c(T.target.value),d(!0),g(-1),i(T.target.value,n||"gemini")},L=T=>{switch(T.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"ollama":return"provider-ollama";default:return"provider-other"}},U=u?o.jsxs("div",{ref:C,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:y.top,left:y.left,width:y.width},children:[h&&o.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),b&&o.jsx("div",{className:"model-autocomplete-error",children:b}),!h&&!b&&N.length===0&&o.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!h&&N.length>0&&o.jsxs("div",{className:"model-autocomplete-list",children:[N.slice(0,50).map((T,R)=>o.jsxs("div",{className:`model-autocomplete-item ${R===x?"highlighted":""}`,onClick:()=>E(T),onMouseEnter:()=>g(R),children:[o.jsx("span",{className:`provider-badge ${L(T.provider)}`,children:T.provider}),o.jsx("span",{className:"model-id",children:T.id}),T.context_window&&o.jsxs("span",{className:"model-context",title:`${T.context_window.toLocaleString()} token context`,children:[Math.round(T.context_window/1e3),"K"]}),T.supports_tools&&o.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),T.supports_vision&&o.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),T.supports_json_mode&&o.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${T.provider}-${T.id}`)),N.length>50&&o.jsxs("div",{className:"model-autocomplete-more",children:["+",N.length-50," more..."]})]})]}):null;return o.jsxs("div",{className:"model-autocomplete",children:[o.jsx("input",{ref:A,type:"text",value:l,onChange:M,onFocus:()=>d(!0),onKeyDown:D,placeholder:s,className:"model-autocomplete-input"}),U&&cy.createPortal(U,document.body)]})}const dj=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"litellm",label:"LiteLLM / Other"}];function pj(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function iv({projectId:e,values:t,onChange:n,className:r=""}){return o.jsxs("div",{className:`model-config-form ${r}`,children:[o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",style:{flex:1},children:[o.jsx("label",{children:"Provider"}),o.jsx("select",{value:t.provider||"gemini",onChange:i=>n({provider:i.target.value}),children:dj.map(i=>o.jsx("option",{value:i.value,children:i.label},i.value))})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:"Model"}),o.jsx(uj,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(i,s)=>{const a=pj(i,s);n({model_name:i,provider:a})},placeholder:"Search models..."})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{children:"API Base (optional)"}),o.jsx("input",{type:"text",value:t.api_base||"",onChange:i=>n({api_base:i.target.value||void 0}),placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":"http://localhost:11434"})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:i=>n({temperature:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:i=>n({max_output_tokens:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:i=>n({top_p:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:i=>n({top_k:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]})]})]})}const fj=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function hj(e){return/^[a-zA-Z0-9_]+$/.test(e)}function mj(){var K;const{project:e,updateProject:t}=dt(),[n,r]=j.useState(null);if(!e)return null;const{app:i}=e;function s(v){t({app:{...i,...v}})}function a(v){if(v===""){r(null),s({name:v});return}hj(v)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:v})}function l(){const v={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({state_keys:[...i.state_keys,v]})}function c(v,V){const S=[...i.state_keys];S[v]={...S[v],...V},s({state_keys:S})}function u(v){s({state_keys:i.state_keys.filter((V,S)=>S!==v)})}function d(v="ReflectAndRetryToolPlugin"){let V;switch(v){case"ReflectAndRetryToolPlugin":V={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":V={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":V={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":V={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":V={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":V={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:V={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,V]})}function p(v,V){const S=[...i.plugins];S[v]={...S[v],...V},s({plugins:S})}function f(v){s({plugins:i.plugins.filter((V,S)=>S!==v)})}const h=i.sandbox||{enabled:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:300,volume_mounts:[]},m=((K=h.allowlist)==null?void 0:K.user)||[],b=h.volume_mounts||[];function k(v){s({sandbox:{...h,...v}})}async function x(v){const V=i.id;try{await fetch(`/api/sandbox/${V}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:v.map(S=>({pattern:S.pattern,pattern_type:S.pattern_type})).filter(S=>S.pattern)})})}catch(S){console.debug("Could not sync allowlist to gateway:",S)}}function g(){const v={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},V={...h.allowlist,user:[...m,v]};k({allowlist:V})}function y(v,V){const S=[...m];S[v]={...S[v],...V};const W=S;k({allowlist:{...h.allowlist,user:W}}),V.pattern&&x(W)}function _(v){const V=m.filter((S,W)=>W!==v);k({allowlist:{...h.allowlist,user:V}})}function A(){const v={host_path:"",container_path:"/mnt/data",mode:"ro"};k({volume_mounts:[...b,v]})}function C(v,V){const S=[...b];S[v]={...S[v],...V},k({volume_mounts:S})}function P(v){const V=b.filter((S,W)=>W!==v);k({volume_mounts:V})}const N=i.models||[];function D(){const v=`model_${Date.now().toString(36)}`,V={id:v,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:N.length===0};s({models:[...N,V],default_model_id:N.length===0?v:i.default_model_id})}function E(v,V){const S=N.map(W=>W.id===v?{...W,...V}:W);s({models:S})}function M(v){var W;const V=N.filter(ie=>ie.id!==v),S=i.default_model_id===v?((W=V[0])==null?void 0:W.id)||void 0:i.default_model_id;s({models:V,default_model_id:S})}function L(v){s({default_model_id:v})}const U=i.env_vars||{},[T,R]=j.useState({}),[$,z]=j.useState("");function O(v=""){const V=v||$.trim();!V||U[V]!==void 0||(s({env_vars:{...U,[V]:""}}),z(""))}function I(v,V){s({env_vars:{...U,[v]:V}})}function w(v){const V={...U};delete V[v],s({env_vars:V})}function H(v){R(V=>({...V,[v]:!V[v]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
        .app-config {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 1000px;
        }
        
        .section {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 20px;
        }
        
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        
        .section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          font-weight: 600;
        }
        
        .section-title svg {
          color: var(--accent-primary);
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .form-group.full-width {
          grid-column: 1 / -1;
        }
        
        .toggle-group {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
        }
        
        .toggle {
          position: relative;
          width: 44px;
          height: 24px;
          background: var(--bg-hover);
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        
        .toggle.active {
          background: var(--accent-primary);
        }
        
        .toggle::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: transform 0.2s ease;
        }
        
        .toggle.active::after {
          transform: translateX(20px);
        }
        
        .toggle-label {
          flex: 1;
        }
        
        .toggle-label strong {
          display: block;
          margin-bottom: 2px;
        }
        
        .toggle-label span {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          margin-bottom: 8px;
        }
        
        .list-item-content {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
        }
        
        .list-item input, .list-item select {
          padding: 6px 10px;
          font-size: 13px;
        }
        
        .delete-item {
          padding: 6px;
          color: var(--text-muted);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }
        
        .delete-item:hover {
          color: var(--error);
          background: rgba(255, 107, 107, 0.1);
        }
        
        .empty-message {
          text-align: center;
          padding: 20px;
          color: var(--text-muted);
          font-size: 13px;
        }
        
        .default-model-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-size: 12px;
          color: var(--text-muted);
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          transition: all 0.15s ease;
        }
        
        .default-model-btn:hover {
          color: var(--accent-secondary);
          background: var(--bg-hover);
        }
        
        .default-model-btn.is-default {
          color: var(--accent-secondary);
          background: rgba(255, 217, 61, 0.15);
        }
        
        .model-card {
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          margin-bottom: 12px;
          overflow: hidden;
        }
        
        .model-card-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }
        
        .model-name-input {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          background: transparent;
          border: none;
          padding: 4px 8px;
        }
        
        .model-name-input:focus {
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .model-card-body {
          padding: 16px;
        }
        
        .model-row {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .model-row:last-child {
          margin-bottom: 0;
        }
        
        .model-row .form-group {
          flex: 1;
        }
        
        .model-row input, .model-row select {
          padding: 8px 10px;
          font-size: 13px;
        }
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(oj,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:v=>a(v.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:v=>s({root_agent_id:v.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(v=>o.jsx("option",{value:v.id,children:v.name},v.id))]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Rn,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:v=>{const V=v.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[V]||V+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:v=>s({session_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:v=>s({session_service_uri:"sqlite://"+v.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:v=>s({session_service_uri:v.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:v=>{const V=i.session_service_uri.split("/");V[2]=v.target.value,s({session_service_uri:V.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:v=>{const V=i.session_service_uri.split("/");V[3]=v.target.value,s({session_service_uri:V.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:v=>{const V=i.session_service_uri.split("/");V[4]=v.target.value,s({session_service_uri:V.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:v=>{const V=v.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[V]||V+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:v=>s({memory_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:v=>s({memory_service_uri:"rag://"+v.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:v=>{const V=i.memory_service_uri.split("/");V[2]=v.target.value,s({memory_service_uri:V.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:v=>{const V=i.memory_service_uri.split("/");V[3]=v.target.value,s({memory_service_uri:V.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:v=>{const V=i.memory_service_uri.split("/");V[4]=v.target.value,s({memory_service_uri:V.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:v=>{const V=v.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[V]||V+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:v=>s({artifact_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:v=>s({artifact_service_uri:"gs://"+v.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(vu,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:fj.filter(v=>U[v.key]===void 0).map(v=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>O(v.key),title:v.description,children:[o.jsx(Ge,{size:12}),v.key]},v.key))}),Object.keys(U).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(U).map(([v,V])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:v}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:T[v]?"text":"password",value:V,onChange:S=>I(v,S.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>H(v),title:T[v]?"Hide value":"Show value",children:T[v]?o.jsx(Kk,{size:16}):o.jsx(ki,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>w(v),children:o.jsx(Fe,{size:16})})]},v)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:$,onChange:v=>z(v.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:v=>v.key==="Enter"&&O()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>O(),disabled:!$.trim(),children:[o.jsx(Ge,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Bd,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:D,children:[o.jsx(Ge,{size:14}),"Add Model"]})]}),N.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):N.map(v=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:v.name,onChange:V=>E(v.id,{name:V.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===v.id?"is-default":""}`,onClick:()=>L(v.id),title:i.default_model_id===v.id?"Default model":"Set as default",children:o.jsx(tv,{size:14,fill:i.default_model_id===v.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>M(v.id),children:o.jsx(Fe,{size:16})})]}),o.jsx("div",{className:"model-card-body",children:o.jsx(iv,{projectId:e.id,values:v,onChange:V=>E(v.id,V)})})]},v.id))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Vd,{size:20}),"State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[o.jsx(Ge,{size:14}),"Add"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys. Auto-created when you add LlmAgents."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:i.state_keys.map((v,V)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx("input",{type:"text",value:v.name,onChange:S=>c(V,{name:S.target.value}),placeholder:"Key name",style:{flex:1,padding:"4px 8px",fontSize:12}}),o.jsxs("select",{value:v.type,onChange:S=>c(V,{type:S.target.value}),style:{padding:"4px 6px",fontSize:11},children:[o.jsx("option",{value:"string",children:"str"}),o.jsx("option",{value:"number",children:"num"}),o.jsx("option",{value:"boolean",children:"bool"}),o.jsx("option",{value:"object",children:"obj"}),o.jsx("option",{value:"array",children:"arr"})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(V),style:{padding:4},children:o.jsx(Fe,{size:12})})]},V))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(rv,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Summarize old events"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:v=>s({compaction:{...i.compaction,max_events:parseInt(v.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:v=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(v.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Pause/resume execution"})]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(rn,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:v=>{v.target.value&&(d(v.target.value),v.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((v,V)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:v.type,onChange:S=>p(V,{type:S.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>f(V),children:o.jsx(Fe,{size:16})})]}),v.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:v.max_retries??3,onChange:S=>p(V,{max_retries:parseInt(S.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:v.throw_exception_if_retry_exceeded??!1,onChange:S=>p(V,{throw_exception_if_retry_exceeded:S.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),v.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:v.num_invocations_to_keep??5,onChange:S=>p(V,{num_invocations_to_keep:parseInt(S.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),v.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),v.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:v.global_instruction??"",onChange:S=>p(V,{global_instruction:S.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),v.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),v.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},V))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(ev,{size:20}),"Network Allowlist"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:g,children:[o.jsx(Ge,{size:14}),"Add"]})]}),m.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:m.map((v,V)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(Ud,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:v.pattern,onChange:S=>y(V,{pattern:S.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),o.jsxs("select",{value:v.pattern_type,onChange:S=>y(V,{pattern_type:S.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[o.jsx("option",{value:"exact",children:"exact"}),o.jsx("option",{value:"wildcard",children:"wild"}),o.jsx("option",{value:"regex",children:"regex"})]}),o.jsx("button",{className:"delete-item",onClick:()=>_(V),style:{padding:4},children:o.jsx(Fe,{size:12})})]},v.id||V))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Xk,{size:20}),"Volume Mounts"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:A,children:[o.jsx(Ge,{size:14}),"Add"]})]}),b.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No mounts. Add to give sandbox file access."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:b.map((v,V)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(Gy,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:v.host_path,onChange:S=>C(V,{host_path:S.target.value}),placeholder:"~/path",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path"}),o.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),o.jsx("input",{type:"text",value:v.container_path,onChange:S=>C(V,{container_path:S.target.value}),placeholder:"/mnt",style:{width:70,padding:"4px 6px",fontSize:11},title:"Container path"}),o.jsxs("select",{value:v.mode,onChange:S=>C(V,{mode:S.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[o.jsx("option",{value:"ro",children:"ro"}),o.jsx("option",{value:"rw",children:"rw"})]}),o.jsx("button",{className:"delete-item",onClick:()=>P(V),style:{padding:4},children:o.jsx(Fe,{size:12})})]},V))})]})]})]})}const gj="modulepreload",xj=function(e){return"/"+e},kh={},yj=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=xj(c),c in kh)return;kh[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":gj,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function jh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function vj(e){if(Array.isArray(e))return e}function bj(e,t,n){return(t=Nj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wj(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,l=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function kj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_h(Object(n),!0).forEach(function(r){bj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_h(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jj(e,t){if(e==null)return{};var n,r,i=_j(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function _j(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Sj(e,t){return vj(e)||wj(e,t)||Ej(e,t)||kj()}function Cj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nj(e){var t=Cj(e,"string");return typeof t=="symbol"?t:t+""}function Ej(e,t){if(e){if(typeof e=="string")return jh(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?jh(e,t):void 0}}function zj(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ch(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Nh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ch(Object(n),!0).forEach(function(r){zj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ch(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Tj(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function eo(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Aa(e){return{}.toString.call(e).includes("Object")}function Aj(e){return!Object.keys(e).length}function Oo(e){return typeof e=="function"}function Pj(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Lj(e,t){return Aa(t)||cr("changeType"),Object.keys(t).some(function(n){return!Pj(e,n)})&&cr("changeField"),t}function Mj(e){Oo(e)||cr("selectorType")}function Rj(e){Oo(e)||Aa(e)||cr("handlerType"),Aa(e)&&Object.values(e).some(function(t){return!Oo(t)})&&cr("handlersType")}function Ij(e){e||cr("initialIsRequired"),Aa(e)||cr("initialType"),Aj(e)&&cr("initialContent")}function Oj(e,t){throw new Error(e[t]||e.default)}var $j={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},cr=eo(Oj)($j),Es={changes:Lj,selector:Mj,handler:Rj,initial:Ij};function Dj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Es.initial(e),Es.handler(t);var n={current:e},r=eo(Uj)(n,t),i=eo(Bj)(n),s=eo(Es.changes)(e),a=eo(Fj)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Es.selector(u),u(n.current)}function c(u){Tj(r,i,s,a)(u)}return[l,c]}function Fj(e,t){return Oo(t)?t(e.current):t}function Bj(e,t){return e.current=Nh(Nh({},e.current),t),t}function Uj(e,t,n){return Oo(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Vj={create:Dj},Wj={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Hj(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function qj(e){return{}.toString.call(e).includes("Object")}function Jj(e){return e||Eh("configIsRequired"),qj(e)||Eh("configType"),e.urls?(Kj(),{paths:{vs:e.urls.monacoBase}}):e}function Kj(){console.warn(ov.deprecation)}function Gj(e,t){throw new Error(e[t]||e.default)}var ov={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Eh=Hj(Gj)(ov),Yj={config:Jj},Qj=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,a){return a(s)},i)}};function sv(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],sv(e[n],t[n]))}),Sh(Sh({},e),t)}var Xj={type:"cancelation",msg:"operation is manually canceled"};function Xl(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(Xj):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var Zj=["monaco"],e_=Vj.create({config:Wj,isInitialized:!1,resolve:null,reject:null,monaco:null}),av=Sj(e_,2),ts=av[0],cl=av[1];function t_(e){var t=Yj.config(e),n=t.monaco,r=jj(t,Zj);cl(function(i){return{config:sv(i.config,r),monaco:n}})}function n_(){var e=ts(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(cl({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Xl(Zl);if(window.monaco&&window.monaco.editor)return lv(window.monaco),e.resolve(window.monaco),Xl(Zl);Qj(r_,o_)(s_)}return Xl(Zl)}function r_(e){return document.body.appendChild(e)}function i_(e){var t=document.createElement("script");return e&&(t.src=e),t}function o_(e){var t=ts(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=i_("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function s_(){var e=ts(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;lv(r),e.resolve(r)},function(n){e.reject(n)})}function lv(e){ts().monaco||cl({monaco:e})}function a_(){return ts(function(e){var t=e.monaco;return t})}var Zl=new Promise(function(e,t){return cl({resolve:e,reject:t})}),cv={config:t_,init:n_,__getMonacoInstance:a_},l_={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ec=l_,c_={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},u_=c_;function d_({children:e}){return Ot.createElement("div",{style:u_.container},e)}var p_=d_,f_=p_;function h_({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:a}){return Ot.createElement("section",{style:{...ec.wrapper,width:e,height:t},...a},!n&&Ot.createElement(f_,null,r),Ot.createElement("div",{ref:i,style:{...ec.fullWidth,...!n&&ec.hide},className:s}))}var m_=h_,uv=j.memo(m_);function g_(e){j.useEffect(e,[])}var dv=g_;function x_(e,t,n=!0){let r=j.useRef(!0);j.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Mt=x_;function fo(){}function ni(e,t,n,r){return y_(e,r)||v_(e,t,n,r)}function y_(e,t){return e.editor.getModel(pv(e,t))}function v_(e,t,n,r){return e.editor.createModel(t,n,r?pv(e,r):void 0)}function pv(e,t){return e.Uri.parse(t)}function b_({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:m,wrapperProps:b={},beforeMount:k=fo,onMount:x=fo}){let[g,y]=j.useState(!1),[_,A]=j.useState(!0),C=j.useRef(null),P=j.useRef(null),N=j.useRef(null),D=j.useRef(x),E=j.useRef(k),M=j.useRef(!1);dv(()=>{let R=cv.init();return R.then($=>(P.current=$)&&A(!1)).catch($=>($==null?void 0:$.type)!=="cancelation"&&console.error("Monaco initialization: error:",$)),()=>C.current?T():R.cancel()}),Mt(()=>{if(C.current&&P.current){let R=C.current.getOriginalEditor(),$=ni(P.current,e||"",r||n||"text",s||"");$!==R.getModel()&&R.setModel($)}},[s],g),Mt(()=>{if(C.current&&P.current){let R=C.current.getModifiedEditor(),$=ni(P.current,t||"",i||n||"text",a||"");$!==R.getModel()&&R.setModel($)}},[a],g),Mt(()=>{let R=C.current.getModifiedEditor();R.getOption(P.current.editor.EditorOption.readOnly)?R.setValue(t||""):t!==R.getValue()&&(R.executeEdits("",[{range:R.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),R.pushUndoStop())},[t],g),Mt(()=>{var R,$;($=(R=C.current)==null?void 0:R.getModel())==null||$.original.setValue(e||"")},[e],g),Mt(()=>{let{original:R,modified:$}=C.current.getModel();P.current.editor.setModelLanguage(R,r||n||"text"),P.current.editor.setModelLanguage($,i||n||"text")},[n,r,i],g),Mt(()=>{var R;(R=P.current)==null||R.editor.setTheme(u)},[u],g),Mt(()=>{var R;(R=C.current)==null||R.updateOptions(p)},[p],g);let L=j.useCallback(()=>{var z;if(!P.current)return;E.current(P.current);let R=ni(P.current,e||"",r||n||"text",s||""),$=ni(P.current,t||"",i||n||"text",a||"");(z=C.current)==null||z.setModel({original:R,modified:$})},[n,t,i,e,r,s,a]),U=j.useCallback(()=>{var R;!M.current&&N.current&&(C.current=P.current.editor.createDiffEditor(N.current,{automaticLayout:!0,...p}),L(),(R=P.current)==null||R.editor.setTheme(u),y(!0),M.current=!0)},[p,u,L]);j.useEffect(()=>{g&&D.current(C.current,P.current)},[g]),j.useEffect(()=>{!_&&!g&&U()},[_,g,U]);function T(){var $,z,O,I;let R=($=C.current)==null?void 0:$.getModel();l||((z=R==null?void 0:R.original)==null||z.dispose()),c||((O=R==null?void 0:R.modified)==null||O.dispose()),(I=C.current)==null||I.dispose()}return Ot.createElement(uv,{width:h,height:f,isEditorReady:g,loading:d,_ref:N,className:m,wrapperProps:b})}var w_=b_;j.memo(w_);function k_(e){let t=j.useRef();return j.useEffect(()=>{t.current=e},[e]),t.current}var j_=k_,zs=new Map;function __({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:m="100%",className:b,wrapperProps:k={},beforeMount:x=fo,onMount:g=fo,onChange:y,onValidate:_=fo}){let[A,C]=j.useState(!1),[P,N]=j.useState(!0),D=j.useRef(null),E=j.useRef(null),M=j.useRef(null),L=j.useRef(g),U=j.useRef(x),T=j.useRef(),R=j.useRef(r),$=j_(s),z=j.useRef(!1),O=j.useRef(!1);dv(()=>{let H=cv.init();return H.then(K=>(D.current=K)&&N(!1)).catch(K=>(K==null?void 0:K.type)!=="cancelation"&&console.error("Monaco initialization: error:",K)),()=>E.current?w():H.cancel()}),Mt(()=>{var K,v,V,S;let H=ni(D.current,e||r||"",t||i||"",s||n||"");H!==((K=E.current)==null?void 0:K.getModel())&&(p&&zs.set($,(v=E.current)==null?void 0:v.saveViewState()),(V=E.current)==null||V.setModel(H),p&&((S=E.current)==null||S.restoreViewState(zs.get(s))))},[s],A),Mt(()=>{var H;(H=E.current)==null||H.updateOptions(u)},[u],A),Mt(()=>{!E.current||r===void 0||(E.current.getOption(D.current.editor.EditorOption.readOnly)?E.current.setValue(r):r!==E.current.getValue()&&(O.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop(),O.current=!1))},[r],A),Mt(()=>{var K,v;let H=(K=E.current)==null?void 0:K.getModel();H&&i&&((v=D.current)==null||v.editor.setModelLanguage(H,i))},[i],A),Mt(()=>{var H;l!==void 0&&((H=E.current)==null||H.revealLine(l))},[l],A),Mt(()=>{var H;(H=D.current)==null||H.editor.setTheme(a)},[a],A);let I=j.useCallback(()=>{var H;if(!(!M.current||!D.current)&&!z.current){U.current(D.current);let K=s||n,v=ni(D.current,r||e||"",t||i||"",K||"");E.current=(H=D.current)==null?void 0:H.editor.create(M.current,{model:v,automaticLayout:!0,...u},d),p&&E.current.restoreViewState(zs.get(K)),D.current.editor.setTheme(a),l!==void 0&&E.current.revealLine(l),C(!0),z.current=!0}},[e,t,n,r,i,s,u,d,p,a,l]);j.useEffect(()=>{A&&L.current(E.current,D.current)},[A]),j.useEffect(()=>{!P&&!A&&I()},[P,A,I]),R.current=r,j.useEffect(()=>{var H,K;A&&y&&((H=T.current)==null||H.dispose(),T.current=(K=E.current)==null?void 0:K.onDidChangeModelContent(v=>{O.current||y(E.current.getValue(),v)}))},[A,y]),j.useEffect(()=>{if(A){let H=D.current.editor.onDidChangeMarkers(K=>{var V;let v=(V=E.current.getModel())==null?void 0:V.uri;if(v&&K.find(S=>S.path===v.path)){let S=D.current.editor.getModelMarkers({resource:v});_==null||_(S)}});return()=>{H==null||H.dispose()}}return()=>{}},[A,_]);function w(){var H,K;(H=T.current)==null||H.dispose(),f?p&&zs.set(s,E.current.saveViewState()):(K=E.current.getModel())==null||K.dispose(),E.current.dispose()}return Ot.createElement(uv,{width:h,height:m,isEditorReady:A,loading:c,_ref:M,className:b,wrapperProps:k})}var S_=__,C_=j.memo(S_),Kt=C_;function N_(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const E_=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,z_=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,T_={};function zh(e,t){return(T_.jsx?z_:E_).test(e)}const A_=/[ \t\n\f\r]/g;function P_(e){return typeof e=="object"?e.type==="text"?Th(e.value):!1:Th(e)}function Th(e){return e.replace(A_,"")===""}class ns{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ns.prototype.normal={};ns.prototype.property={};ns.prototype.space=void 0;function fv(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ns(n,r,t)}function wu(e){return e.toLowerCase()}class zt{constructor(t,n){this.attribute=n,this.property=t}}zt.prototype.attribute="";zt.prototype.booleanish=!1;zt.prototype.boolean=!1;zt.prototype.commaOrSpaceSeparated=!1;zt.prototype.commaSeparated=!1;zt.prototype.defined=!1;zt.prototype.mustUseProperty=!1;zt.prototype.number=!1;zt.prototype.overloadedBoolean=!1;zt.prototype.property="";zt.prototype.spaceSeparated=!1;zt.prototype.space=void 0;let L_=0;const we=Fr(),Ke=Fr(),ku=Fr(),se=Fr(),Me=Fr(),ci=Fr(),At=Fr();function Fr(){return 2**++L_}const ju=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:Ke,commaOrSpaceSeparated:At,commaSeparated:ci,number:se,overloadedBoolean:ku,spaceSeparated:Me},Symbol.toStringTag,{value:"Module"})),tc=Object.keys(ju);class Jd extends zt{constructor(t,n,r,i){let s=-1;if(super(t,n),Ah(this,"space",i),typeof r=="number")for(;++s<tc.length;){const a=tc[s];Ah(this,tc[s],(r&ju[a])===ju[a])}}}Jd.prototype.defined=!0;function Ah(e,t,n){n&&(e[t]=n)}function Ti(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new Jd(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[wu(r)]=r,n[wu(s.attribute)]=r}return new ns(t,n,e.space)}const hv=Ti({properties:{ariaActiveDescendant:null,ariaAtomic:Ke,ariaAutoComplete:null,ariaBusy:Ke,ariaChecked:Ke,ariaColCount:se,ariaColIndex:se,ariaColSpan:se,ariaControls:Me,ariaCurrent:null,ariaDescribedBy:Me,ariaDetails:null,ariaDisabled:Ke,ariaDropEffect:Me,ariaErrorMessage:null,ariaExpanded:Ke,ariaFlowTo:Me,ariaGrabbed:Ke,ariaHasPopup:null,ariaHidden:Ke,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Me,ariaLevel:se,ariaLive:null,ariaModal:Ke,ariaMultiLine:Ke,ariaMultiSelectable:Ke,ariaOrientation:null,ariaOwns:Me,ariaPlaceholder:null,ariaPosInSet:se,ariaPressed:Ke,ariaReadOnly:Ke,ariaRelevant:null,ariaRequired:Ke,ariaRoleDescription:Me,ariaRowCount:se,ariaRowIndex:se,ariaRowSpan:se,ariaSelected:Ke,ariaSetSize:se,ariaSort:null,ariaValueMax:se,ariaValueMin:se,ariaValueNow:se,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function mv(e,t){return t in e?e[t]:t}function gv(e,t){return mv(e,t.toLowerCase())}const M_=Ti({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ci,acceptCharset:Me,accessKey:Me,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Me,autoFocus:we,autoPlay:we,blocking:Me,capture:null,charSet:null,checked:we,cite:null,className:Me,cols:se,colSpan:null,content:null,contentEditable:Ke,controls:we,controlsList:Me,coords:se|ci,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:ku,draggable:Ke,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Me,height:se,hidden:ku,high:se,href:null,hrefLang:null,htmlFor:Me,httpEquiv:Me,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Me,itemRef:Me,itemScope:we,itemType:Me,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:se,manifest:null,max:null,maxLength:se,media:null,method:null,min:null,minLength:se,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:se,pattern:null,ping:Me,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Me,required:we,reversed:we,rows:se,rowSpan:se,sandbox:Me,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shape:null,size:se,sizes:null,slot:null,span:se,spellCheck:Ke,src:null,srcDoc:null,srcLang:null,srcSet:null,start:se,step:null,style:null,tabIndex:se,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:Ke,width:se,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Me,axis:null,background:null,bgColor:null,border:se,borderColor:null,bottomMargin:se,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:se,leftMargin:se,link:null,longDesc:null,lowSrc:null,marginHeight:se,marginWidth:se,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:se,rules:null,scheme:null,scrolling:Ke,standby:null,summary:null,text:null,topMargin:se,valueType:null,version:null,vAlign:null,vLink:null,vSpace:se,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:se,security:null,unselectable:null},space:"html",transform:gv}),R_=Ti({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:At,accentHeight:se,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:se,amplitude:se,arabicForm:null,ascent:se,attributeName:null,attributeType:null,azimuth:se,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:se,by:null,calcMode:null,capHeight:se,className:Me,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:se,diffuseConstant:se,direction:null,display:null,dur:null,divisor:se,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:se,enableBackground:null,end:null,event:null,exponent:se,externalResourcesRequired:null,fill:null,fillOpacity:se,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ci,g2:ci,glyphName:ci,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:se,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:se,horizOriginX:se,horizOriginY:se,id:null,ideographic:se,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:se,k:se,k1:se,k2:se,k3:se,k4:se,kernelMatrix:At,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:se,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:se,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:se,overlineThickness:se,paintOrder:null,panose1:null,path:null,pathLength:se,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Me,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:se,pointsAtY:se,pointsAtZ:se,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:At,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:At,rev:At,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:At,requiredFeatures:At,requiredFonts:At,requiredFormats:At,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:se,specularExponent:se,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:se,strikethroughThickness:se,string:null,stroke:null,strokeDashArray:At,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:se,strokeOpacity:se,strokeWidth:null,style:null,surfaceScale:se,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:At,tabIndex:se,tableValues:null,target:null,targetX:se,targetY:se,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:At,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:se,underlineThickness:se,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:se,values:null,vAlphabetic:se,vMathematical:se,vectorEffect:null,vHanging:se,vIdeographic:se,version:null,vertAdvY:se,vertOriginX:se,vertOriginY:se,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:se,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:mv}),xv=Ti({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),yv=Ti({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:gv}),vv=Ti({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),I_={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},O_=/[A-Z]/g,Ph=/-[a-z]/g,$_=/^data[-\w.:]+$/i;function D_(e,t){const n=wu(t);let r=t,i=zt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&$_.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Ph,B_);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Ph.test(s)){let a=s.replace(O_,F_);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Jd}return new i(r,t)}function F_(e){return"-"+e.toLowerCase()}function B_(e){return e.charAt(1).toUpperCase()}const U_=fv([hv,M_,xv,yv,vv],"html"),Kd=fv([hv,R_,xv,yv,vv],"svg");function V_(e){return e.join(" ").trim()}var Gd={},Lh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,W_=/\n/g,H_=/^\s*/,q_=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,J_=/^:\s*/,K_=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,G_=/^[;\s]*/,Y_=/^\s+|\s+$/g,Q_=`
`,Mh="/",Rh="*",br="",X_="comment",Z_="declaration";function e2(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(m){var b=m.match(W_);b&&(n+=b.length);var k=m.lastIndexOf(Q_);r=~k?m.length-k:r+m.length}function s(){var m={line:n,column:r};return function(b){return b.position=new a(m),u(),b}}function a(m){this.start=m,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(m){var b=new Error(t.source+":"+n+":"+r+": "+m);if(b.reason=m,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function c(m){var b=m.exec(e);if(b){var k=b[0];return i(k),e=e.slice(k.length),b}}function u(){c(H_)}function d(m){var b;for(m=m||[];b=p();)b!==!1&&m.push(b);return m}function p(){var m=s();if(!(Mh!=e.charAt(0)||Rh!=e.charAt(1))){for(var b=2;br!=e.charAt(b)&&(Rh!=e.charAt(b)||Mh!=e.charAt(b+1));)++b;if(b+=2,br===e.charAt(b-1))return l("End of comment missing");var k=e.slice(2,b-2);return r+=2,i(k),e=e.slice(b),r+=2,m({type:X_,comment:k})}}function f(){var m=s(),b=c(q_);if(b){if(p(),!c(J_))return l("property missing ':'");var k=c(K_),x=m({type:Z_,property:Ih(b[0].replace(Lh,br)),value:k?Ih(k[0].replace(Lh,br)):br});return c(G_),x}}function h(){var m=[];d(m);for(var b;b=f();)b!==!1&&(m.push(b),d(m));return m}return u(),h()}function Ih(e){return e?e.replace(Y_,br):br}var t2=e2,n2=ra&&ra.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Gd,"__esModule",{value:!0});Gd.default=i2;const r2=n2(t2);function i2(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,r2.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:l}=s;i?t(a,l,s):l&&(n=n||{},n[a]=l)}),n}var ul={};Object.defineProperty(ul,"__esModule",{value:!0});ul.camelCase=void 0;var o2=/^--[a-zA-Z0-9_-]+$/,s2=/-([a-z])/g,a2=/^[^-]+$/,l2=/^-(webkit|moz|ms|o|khtml)-/,c2=/^-(ms)-/,u2=function(e){return!e||a2.test(e)||o2.test(e)},d2=function(e,t){return t.toUpperCase()},Oh=function(e,t){return"".concat(t,"-")},p2=function(e,t){return t===void 0&&(t={}),u2(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(c2,Oh):e=e.replace(l2,Oh),e.replace(s2,d2))};ul.camelCase=p2;var f2=ra&&ra.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},h2=f2(Gd),m2=ul;function _u(e,t){var n={};return!e||typeof e!="string"||(0,h2.default)(e,function(r,i){r&&i&&(n[(0,m2.camelCase)(r,t)]=i)}),n}_u.default=_u;var g2=_u;const x2=Va(g2),bv=wv("end"),Yd=wv("start");function wv(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function y2(e){const t=Yd(e),n=bv(e);if(t&&n)return{start:t,end:n}}function ho(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?$h(e.position):"start"in e||"end"in e?$h(e):"line"in e||"column"in e?Su(e):""}function Su(e){return Dh(e&&e.line)+":"+Dh(e&&e.column)}function $h(e){return Su(e&&e.start)+"-"+Su(e&&e.end)}function Dh(e){return e&&typeof e=="number"?e:1}class pt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=ho(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}pt.prototype.file="";pt.prototype.name="";pt.prototype.reason="";pt.prototype.message="";pt.prototype.stack="";pt.prototype.column=void 0;pt.prototype.line=void 0;pt.prototype.ancestors=void 0;pt.prototype.cause=void 0;pt.prototype.fatal=void 0;pt.prototype.place=void 0;pt.prototype.ruleId=void 0;pt.prototype.source=void 0;const Qd={}.hasOwnProperty,v2=new Map,b2=/[A-Z]/g,w2=new Set(["table","tbody","thead","tfoot","tr"]),k2=new Set(["td","th"]),kv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function j2(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=A2(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=T2(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Kd:U_,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=jv(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function jv(e,t,n){if(t.type==="element")return _2(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return S2(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return N2(e,t,n);if(t.type==="mdxjsEsm")return C2(e,t);if(t.type==="root")return E2(e,t,n);if(t.type==="text")return z2(e,t)}function _2(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Kd,e.schema=i),e.ancestors.push(t);const s=Sv(e,t.tagName,!1),a=P2(e,t);let l=Zd(e,t);return w2.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!P_(c):!0})),_v(e,a,s,t),Xd(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function S2(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}$o(e,t.position)}function C2(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);$o(e,t.position)}function N2(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Kd,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Sv(e,t.name,!0),a=L2(e,t),l=Zd(e,t);return _v(e,a,s,t),Xd(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function E2(e,t,n){const r={};return Xd(r,Zd(e,t)),e.create(t,e.Fragment,r,n)}function z2(e,t){return t.value}function _v(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Xd(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function T2(e,t,n){return r;function r(i,s,a,l){const u=Array.isArray(a.children)?n:t;return l?u(s,a,l):u(s,a)}}function A2(e,t){return n;function n(r,i,s,a){const l=Array.isArray(s.children),c=Yd(r);return t(i,s,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function P2(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Qd.call(t.properties,i)){const s=M2(e,i,t.properties[i]);if(s){const[a,l]=s;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&k2.has(t.tagName)?r=l:n[a]=l}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function L2(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else $o(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else $o(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function Zd(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:v2;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=jv(e,s,a);l!==void 0&&n.push(l)}return n}function M2(e,t,n){const r=D_(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?N_(n):V_(n)),r.property==="style"){let i=typeof n=="object"?n:R2(e,String(n));return e.stylePropertyNameCase==="css"&&(i=I2(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?I_[r.property]||r.property:r.attribute,n]}}function R2(e,t){try{return x2(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new pt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=kv+"#cannot-parse-style-attribute",i}}function Sv(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const l=zh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=a}else r=zh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Qd.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);$o(e)}function $o(e,t){const n=new pt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=kv+"#cannot-handle-mdx-estrees-without-createevaluater",n}function I2(e){const t={};let n;for(n in e)Qd.call(e,n)&&(t[O2(n)]=e[n]);return t}function O2(e){let t=e.replace(b2,$2);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function $2(e){return"-"+e.toLowerCase()}const nc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},D2={};function F2(e,t){const n=D2,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Cv(e,r,i)}function Cv(e,t,n){if(B2(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Fh(e.children,t,n)}return Array.isArray(e)?Fh(e,t,n):""}function Fh(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Cv(e[i],t,n);return r.join("")}function B2(e){return!!(e&&typeof e=="object")}const Bh=document.createElement("i");function ep(e){const t="&"+e+";";Bh.innerHTML=t;const n=Bh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function kn(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function Ht(e,t){return e.length>0?(kn(e,e.length,0,t),e):t}const Uh={}.hasOwnProperty;function U2(e){const t={};let n=-1;for(;++n<e.length;)V2(t,e[n]);return t}function V2(e,t){let n;for(n in t){const i=(Uh.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){Uh.call(i,a)||(i[a]=[]);const l=s[a];W2(i[a],Array.isArray(l)?l:l?[l]:[])}}}function W2(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);kn(e,0,0,r)}function Nv(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ui(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const gn=xr(/[A-Za-z]/),It=xr(/[\dA-Za-z]/),H2=xr(/[#-'*+\--9=?A-Z^-~]/);function Cu(e){return e!==null&&(e<32||e===127)}const Nu=xr(/\d/),q2=xr(/[\dA-Fa-f]/),J2=xr(/[!-/:-@[-`{-~]/);function be(e){return e!==null&&e<-2}function Et(e){return e!==null&&(e<0||e===32)}function Ee(e){return e===-2||e===-1||e===32}const K2=xr(new RegExp("\\p{P}|\\p{S}","u")),G2=xr(/\s/);function xr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Ai(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&It(e.charCodeAt(n+1))&&It(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(n+1);s<56320&&l>56319&&l<57344?(a=String.fromCharCode(s,l),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Ie(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(c){return Ee(c)?(e.enter(n),l(c)):t(c)}function l(c){return Ee(c)&&s++<i?(e.consume(c),l):(e.exit(n),t(c))}}const Y2={tokenize:Q2};function Q2(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Ie(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return be(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),a)}}const X2={tokenize:Z2},Vh={tokenize:eS};function Z2(e){const t=this,n=[];let r=0,i,s,a;return l;function l(y){if(r<n.length){const _=n[r];return t.containerState=_[1],e.attempt(_[0].continuation,c,u)(y)}return u(y)}function c(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&g();const _=t.events.length;let A=_,C;for(;A--;)if(t.events[A][0]==="exit"&&t.events[A][1].type==="chunkFlow"){C=t.events[A][1].end;break}x(r);let P=_;for(;P<t.events.length;)t.events[P][1].end={...C},P++;return kn(t.events,A+1,0,t.events.slice(_)),t.events.length=P,u(y)}return l(y)}function u(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return m(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Vh,d,p)(y)}function d(y){return i&&g(),x(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,m(y)}function f(y){return t.containerState={},e.attempt(Vh,h,m)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function m(y){if(y===null){i&&g(),x(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),b(y)}function b(y){if(y===null){k(e.exit("chunkFlow"),!0),x(0),e.consume(y);return}return be(y)?(e.consume(y),k(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(y),b)}function k(y,_){const A=t.sliceStream(y);if(_&&A.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(A),t.parser.lazy[y.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<a&&(!i.events[C][1].end||i.events[C][1].end.offset>a))return;const P=t.events.length;let N=P,D,E;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){if(D){E=t.events[N][1].end;break}D=!0}for(x(r),C=P;C<t.events.length;)t.events[C][1].end={...E},C++;kn(t.events,N+1,0,t.events.slice(P)),t.events.length=C}}function x(y){let _=n.length;for(;_-- >y;){const A=n[_];t.containerState=A[1],A[0].exit.call(t,e)}n.length=y}function g(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function eS(e,t,n){return Ie(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Wh(e){if(e===null||Et(e)||G2(e))return 1;if(K2(e))return 2}function tp(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const Eu={name:"attention",resolveAll:tS,tokenize:nS};function tS(e,t){let n=-1,r,i,s,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};Hh(p,-c),Hh(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Ht(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Ht(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=Ht(u,tp(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Ht(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Ht(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,kn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function nS(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Wh(r);let s;return a;function a(c){return s=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===s)return e.consume(c),l;const u=e.exit("attentionSequence"),d=Wh(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?p:p&&(i||!f)),u._close=!!(s===42?f:f&&(d||!p)),t(c)}}function Hh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const rS={name:"autolink",tokenize:iS};function iS(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return gn(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||It(h)?(r=1,l(h)):u(h)}function l(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||It(h))&&r++<32?(e.consume(h),l):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Cu(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),d):H2(h)?(e.consume(h),u):n(h)}function d(h){return It(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||It(h))&&r++<63){const m=h===45?f:p;return e.consume(h),m}return n(h)}}const dl={partial:!0,tokenize:oS};function oS(e,t,n){return r;function r(s){return Ee(s)?Ie(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||be(s)?t(s):n(s)}}const Ev={continuation:{tokenize:aS},exit:lS,name:"blockQuote",tokenize:sS};function sS(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return Ee(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function aS(e,t,n){const r=this;return i;function i(a){return Ee(a)?Ie(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(Ev,t,n)(a)}}function lS(e){e.exit("blockQuote")}const zv={name:"characterEscape",tokenize:cS};function cS(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return J2(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const Tv={name:"characterReference",tokenize:uS};function uS(e,t,n){const r=this;let i=0,s,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=It,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=q2,d):(e.enter("characterReferenceValue"),s=7,a=Nu,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===It&&!ep(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<s?(e.consume(p),d):n(p)}}const qh={partial:!0,tokenize:pS},Jh={concrete:!0,name:"codeFenced",tokenize:dS};function dS(e,t,n){const r=this,i={partial:!0,tokenize:A};let s=0,a=0,l;return c;function c(C){return u(C)}function u(C){const P=r.events[r.events.length-1];return s=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,l=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===l?(a++,e.consume(C),d):a<3?n(C):(e.exit("codeFencedFenceSequence"),Ee(C)?Ie(e,p,"whitespace")(C):p(C))}function p(C){return C===null||be(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(qh,b,_)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(C))}function f(C){return C===null||be(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(C)):Ee(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Ie(e,h,"whitespace")(C)):C===96&&C===l?n(C):(e.consume(C),f)}function h(C){return C===null||be(C)?p(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(C))}function m(C){return C===null||be(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(C)):C===96&&C===l?n(C):(e.consume(C),m)}function b(C){return e.attempt(i,_,k)(C)}function k(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),x}function x(C){return s>0&&Ee(C)?Ie(e,g,"linePrefix",s+1)(C):g(C)}function g(C){return C===null||be(C)?e.check(qh,b,_)(C):(e.enter("codeFlowValue"),y(C))}function y(C){return C===null||be(C)?(e.exit("codeFlowValue"),g(C)):(e.consume(C),y)}function _(C){return e.exit("codeFenced"),t(C)}function A(C,P,N){let D=0;return E;function E(R){return C.enter("lineEnding"),C.consume(R),C.exit("lineEnding"),M}function M(R){return C.enter("codeFencedFence"),Ee(R)?Ie(C,L,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(R):L(R)}function L(R){return R===l?(C.enter("codeFencedFenceSequence"),U(R)):N(R)}function U(R){return R===l?(D++,C.consume(R),U):D>=a?(C.exit("codeFencedFenceSequence"),Ee(R)?Ie(C,T,"whitespace")(R):T(R)):N(R)}function T(R){return R===null||be(R)?(C.exit("codeFencedFence"),P(R)):N(R)}}}function pS(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const rc={name:"codeIndented",tokenize:hS},fS={partial:!0,tokenize:mS};function hS(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Ie(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):be(u)?e.attempt(fS,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||be(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function mS(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):be(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Ie(e,s,"linePrefix",5)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):be(a)?i(a):n(a)}}const gS={name:"codeText",previous:yS,resolve:xS,tokenize:vS};function xS(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function yS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function vS(e,t,n){let r=0,i,s;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(s=e.enter("codeTextSequence"),i=0,d(p)):be(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||be(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(s.type="codeTextData",u(p))}}class bS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Wi(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Wi(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Wi(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Wi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Wi(this.left,n.reverse())}}}function Wi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Av(e){const t={};let n=-1,r,i,s,a,l,c,u;const d=new bS(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,wS(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return kn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function wS(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,h=n,m=0,b=0;const k=[b];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(b=f+1,k.push(b),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):k.pop(),f=k.length;f--;){const x=l.slice(k[f],k[f+1]),g=s.pop();c.push([g,g+x.length-1]),e.splice(g,2,x)}for(c.reverse(),f=-1;++f<c.length;)u[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return u}const kS={resolve:_S,tokenize:SS},jS={partial:!0,tokenize:CS};function _S(e){return Av(e),e}function SS(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):be(l)?e.check(jS,a,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function CS(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Ie(e,s,"linePrefix")}function s(a){if(a===null||be(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Pv(e,t,n,r,i,s,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(x){return x===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(x),e.exit(s),f):x===null||x===32||x===41||Cu(x)?n(x):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(x))}function f(x){return x===62?(e.enter(s),e.consume(x),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(x))}function h(x){return x===62?(e.exit("chunkString"),e.exit(l),f(x)):x===null||x===60||be(x)?n(x):(e.consume(x),x===92?m:h)}function m(x){return x===60||x===62||x===92?(e.consume(x),h):h(x)}function b(x){return!d&&(x===null||x===41||Et(x))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(x)):d<u&&x===40?(e.consume(x),d++,b):x===41?(e.consume(x),d--,b):x===null||x===32||x===40||Cu(x)?n(x):(e.consume(x),x===92?k:b)}function k(x){return x===40||x===41||x===92?(e.consume(x),b):b(x)}}function Lv(e,t,n,r,i,s){const a=this;let l=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return l>999||h===null||h===91||h===93&&!c||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):be(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||be(h)||l++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!Ee(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),l++,p):p(h)}}function Mv(e,t,n,r,i,s){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(s),u(f))}function u(f){return f===a?(e.exit(s),c(a)):f===null?n(f):be(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Ie(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||be(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function mo(e,t){let n;return r;function r(i){return be(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Ee(i)?Ie(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const NS={name:"definition",tokenize:zS},ES={partial:!0,tokenize:TS};function zS(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return Lv.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=ui(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return Et(h)?mo(e,u)(h):u(h)}function u(h){return Pv(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(ES,p,p)(h)}function p(h){return Ee(h)?Ie(e,f,"whitespace")(h):f(h)}function f(h){return h===null||be(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function TS(e,t,n){return r;function r(l){return Et(l)?mo(e,i)(l):n(l)}function i(l){return Mv(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return Ee(l)?Ie(e,a,"whitespace")(l):a(l)}function a(l){return l===null||be(l)?t(l):n(l)}}const AS={name:"hardBreakEscape",tokenize:PS};function PS(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return be(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const LS={name:"headingAtx",resolve:MS,tokenize:RS};function MS(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},kn(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function RS(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||Et(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||be(d)?(e.exit("atxHeading"),t(d)):Ee(d)?Ie(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||Et(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const IS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Kh=["pre","script","style","textarea"],OS={concrete:!0,name:"htmlFlow",resolveTo:FS,tokenize:BS},$S={partial:!0,tokenize:VS},DS={partial:!0,tokenize:US};function FS(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function BS(e,t,n){const r=this;let i,s,a,l,c;return u;function u(v){return d(v)}function d(v){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(v),p}function p(v){return v===33?(e.consume(v),f):v===47?(e.consume(v),s=!0,b):v===63?(e.consume(v),i=3,r.interrupt?t:w):gn(v)?(e.consume(v),a=String.fromCharCode(v),k):n(v)}function f(v){return v===45?(e.consume(v),i=2,h):v===91?(e.consume(v),i=5,l=0,m):gn(v)?(e.consume(v),i=4,r.interrupt?t:w):n(v)}function h(v){return v===45?(e.consume(v),r.interrupt?t:w):n(v)}function m(v){const V="CDATA[";return v===V.charCodeAt(l++)?(e.consume(v),l===V.length?r.interrupt?t:L:m):n(v)}function b(v){return gn(v)?(e.consume(v),a=String.fromCharCode(v),k):n(v)}function k(v){if(v===null||v===47||v===62||Et(v)){const V=v===47,S=a.toLowerCase();return!V&&!s&&Kh.includes(S)?(i=1,r.interrupt?t(v):L(v)):IS.includes(a.toLowerCase())?(i=6,V?(e.consume(v),x):r.interrupt?t(v):L(v)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(v):s?g(v):y(v))}return v===45||It(v)?(e.consume(v),a+=String.fromCharCode(v),k):n(v)}function x(v){return v===62?(e.consume(v),r.interrupt?t:L):n(v)}function g(v){return Ee(v)?(e.consume(v),g):E(v)}function y(v){return v===47?(e.consume(v),E):v===58||v===95||gn(v)?(e.consume(v),_):Ee(v)?(e.consume(v),y):E(v)}function _(v){return v===45||v===46||v===58||v===95||It(v)?(e.consume(v),_):A(v)}function A(v){return v===61?(e.consume(v),C):Ee(v)?(e.consume(v),A):y(v)}function C(v){return v===null||v===60||v===61||v===62||v===96?n(v):v===34||v===39?(e.consume(v),c=v,P):Ee(v)?(e.consume(v),C):N(v)}function P(v){return v===c?(e.consume(v),c=null,D):v===null||be(v)?n(v):(e.consume(v),P)}function N(v){return v===null||v===34||v===39||v===47||v===60||v===61||v===62||v===96||Et(v)?A(v):(e.consume(v),N)}function D(v){return v===47||v===62||Ee(v)?y(v):n(v)}function E(v){return v===62?(e.consume(v),M):n(v)}function M(v){return v===null||be(v)?L(v):Ee(v)?(e.consume(v),M):n(v)}function L(v){return v===45&&i===2?(e.consume(v),$):v===60&&i===1?(e.consume(v),z):v===62&&i===4?(e.consume(v),H):v===63&&i===3?(e.consume(v),w):v===93&&i===5?(e.consume(v),I):be(v)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check($S,K,U)(v)):v===null||be(v)?(e.exit("htmlFlowData"),U(v)):(e.consume(v),L)}function U(v){return e.check(DS,T,K)(v)}function T(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),R}function R(v){return v===null||be(v)?U(v):(e.enter("htmlFlowData"),L(v))}function $(v){return v===45?(e.consume(v),w):L(v)}function z(v){return v===47?(e.consume(v),a="",O):L(v)}function O(v){if(v===62){const V=a.toLowerCase();return Kh.includes(V)?(e.consume(v),H):L(v)}return gn(v)&&a.length<8?(e.consume(v),a+=String.fromCharCode(v),O):L(v)}function I(v){return v===93?(e.consume(v),w):L(v)}function w(v){return v===62?(e.consume(v),H):v===45&&i===2?(e.consume(v),w):L(v)}function H(v){return v===null||be(v)?(e.exit("htmlFlowData"),K(v)):(e.consume(v),H)}function K(v){return e.exit("htmlFlow"),t(v)}}function US(e,t,n){const r=this;return i;function i(a){return be(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):n(a)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function VS(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(dl,t,n)}}const WS={name:"htmlText",tokenize:HS};function HS(e,t,n){const r=this;let i,s,a;return l;function l(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),c}function c(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),A):w===63?(e.consume(w),y):gn(w)?(e.consume(w),N):n(w)}function u(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),s=0,m):gn(w)?(e.consume(w),g):n(w)}function d(w){return w===45?(e.consume(w),h):n(w)}function p(w){return w===null?n(w):w===45?(e.consume(w),f):be(w)?(a=p,z(w)):(e.consume(w),p)}function f(w){return w===45?(e.consume(w),h):p(w)}function h(w){return w===62?$(w):w===45?f(w):p(w)}function m(w){const H="CDATA[";return w===H.charCodeAt(s++)?(e.consume(w),s===H.length?b:m):n(w)}function b(w){return w===null?n(w):w===93?(e.consume(w),k):be(w)?(a=b,z(w)):(e.consume(w),b)}function k(w){return w===93?(e.consume(w),x):b(w)}function x(w){return w===62?$(w):w===93?(e.consume(w),x):b(w)}function g(w){return w===null||w===62?$(w):be(w)?(a=g,z(w)):(e.consume(w),g)}function y(w){return w===null?n(w):w===63?(e.consume(w),_):be(w)?(a=y,z(w)):(e.consume(w),y)}function _(w){return w===62?$(w):y(w)}function A(w){return gn(w)?(e.consume(w),C):n(w)}function C(w){return w===45||It(w)?(e.consume(w),C):P(w)}function P(w){return be(w)?(a=P,z(w)):Ee(w)?(e.consume(w),P):$(w)}function N(w){return w===45||It(w)?(e.consume(w),N):w===47||w===62||Et(w)?D(w):n(w)}function D(w){return w===47?(e.consume(w),$):w===58||w===95||gn(w)?(e.consume(w),E):be(w)?(a=D,z(w)):Ee(w)?(e.consume(w),D):$(w)}function E(w){return w===45||w===46||w===58||w===95||It(w)?(e.consume(w),E):M(w)}function M(w){return w===61?(e.consume(w),L):be(w)?(a=M,z(w)):Ee(w)?(e.consume(w),M):D(w)}function L(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,U):be(w)?(a=L,z(w)):Ee(w)?(e.consume(w),L):(e.consume(w),T)}function U(w){return w===i?(e.consume(w),i=void 0,R):w===null?n(w):be(w)?(a=U,z(w)):(e.consume(w),U)}function T(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||Et(w)?D(w):(e.consume(w),T)}function R(w){return w===47||w===62||Et(w)?D(w):n(w)}function $(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function z(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),O}function O(w){return Ee(w)?Ie(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):I(w)}function I(w){return e.enter("htmlTextData"),a(w)}}const np={name:"labelEnd",resolveAll:GS,resolveTo:YS,tokenize:QS},qS={tokenize:XS},JS={tokenize:ZS},KS={tokenize:eC};function GS(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&kn(e,0,e.length,n),e}function YS(e,t){let n=e.length,r=0,i,s,a,l;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Ht(l,e.slice(s+1,s+r+3)),l=Ht(l,[["enter",d,t]]),l=Ht(l,tp(t.parser.constructs.insideSpan.null,e.slice(s+r+4,a-3),t)),l=Ht(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Ht(l,e.slice(a+1)),l=Ht(l,[["exit",c,t]]),kn(e,s,e.length,l),e}function QS(e,t,n){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(f){return s?s._inactive?p(f):(a=r.parser.defined.includes(ui(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(qS,d,a?d:p)(f):f===91?e.attempt(JS,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(KS,d,p)(f)}function d(f){return t(f)}function p(f){return s._balanced=!0,n(f)}}function XS(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return Et(p)?mo(e,s)(p):s(p)}function s(p){return p===41?d(p):Pv(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return Et(p)?mo(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Mv(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return Et(p)?mo(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function ZS(e,t,n){const r=this;return i;function i(l){return Lv.call(r,e,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(ui(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function eC(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const tC={name:"labelStartImage",resolveAll:np.resolveAll,tokenize:nC};function nC(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const rC={name:"labelStartLink",resolveAll:np.resolveAll,tokenize:iC};function iC(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const ic={name:"lineEnding",tokenize:oC};function oC(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Ie(e,t,"linePrefix")}}const Qs={name:"thematicBreak",tokenize:sC};function sC(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||be(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Ee(u)?Ie(e,l,"whitespace")(u):l(u))}}const bt={continuation:{tokenize:uC},exit:pC,name:"list",tokenize:cC},aC={partial:!0,tokenize:fC},lC={partial:!0,tokenize:dC};function cC(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(h){const m=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Nu(h)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Qs,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return Nu(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(dl,r.interrupt?n:d,e.attempt(aC,f,p))}function d(h){return r.containerState.initialBlankLine=!0,s++,f(h)}function p(h){return Ee(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function uC(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(dl,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Ie(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!Ee(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(lC,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Ie(e,e.attempt(bt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function dC(e,t,n){const r=this;return Ie(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function pC(e){e.exit(this.containerState.type)}function fC(e,t,n){const r=this;return Ie(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!Ee(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Gh={name:"setextUnderline",resolveTo:hC,tokenize:mC};function hC(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",a,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function mC(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Ee(u)?Ie(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||be(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const gC={tokenize:xC};function xC(e){const t=this,n=e.attempt(dl,r,e.attempt(this.parser.constructs.flowInitial,i,Ie(e,e.attempt(this.parser.constructs.flow,i,e.attempt(kS,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const yC={resolveAll:Iv()},vC=Rv("string"),bC=Rv("text");function Rv(e){return{resolveAll:Iv(e==="text"?wC:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,l);return a;function a(d){return u(d)?s(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Iv(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function wC(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const kC={42:bt,43:bt,45:bt,48:bt,49:bt,50:bt,51:bt,52:bt,53:bt,54:bt,55:bt,56:bt,57:bt,62:Ev},jC={91:NS},_C={[-2]:rc,[-1]:rc,32:rc},SC={35:LS,42:Qs,45:[Gh,Qs],60:OS,61:Gh,95:Qs,96:Jh,126:Jh},CC={38:Tv,92:zv},NC={[-5]:ic,[-4]:ic,[-3]:ic,33:tC,38:Tv,42:Eu,60:[rS,WS],91:rC,92:[AS,zv],93:np,95:Eu,96:gS},EC={null:[Eu,yC]},zC={null:[42,95]},TC={null:[]},AC=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:zC,contentInitial:jC,disable:TC,document:kC,flow:SC,flowInitial:_C,insideSpan:EC,string:CC,text:NC},Symbol.toStringTag,{value:"Module"}));function PC(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],l=[];const c={attempt:P(A),check:P(C),consume:g,enter:y,exit:_,interrupt:P(C,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function p(M){return a=Ht(a,M),k(),a[a.length-1]!==null?[]:(N(t,0),u.events=tp(s,u.events,u),u.events)}function f(M,L){return MC(h(M),L)}function h(M){return LC(a,M)}function m(){const{_bufferIndex:M,_index:L,line:U,column:T,offset:R}=r;return{_bufferIndex:M,_index:L,line:U,column:T,offset:R}}function b(M){i[M.line]=M.column,E()}function k(){let M;for(;r._index<a.length;){const L=a[r._index];if(typeof L=="string")for(M=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===M&&r._bufferIndex<L.length;)x(L.charCodeAt(r._bufferIndex));else x(L)}}function x(M){d=d(M)}function g(M){be(M)?(r.line++,r.column=1,r.offset+=M===-3?2:1,E()):M!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=M}function y(M,L){const U=L||{};return U.type=M,U.start=m(),u.events.push(["enter",U,u]),l.push(U),U}function _(M){const L=l.pop();return L.end=m(),u.events.push(["exit",L,u]),L}function A(M,L){N(M,L.from)}function C(M,L){L.restore()}function P(M,L){return U;function U(T,R,$){let z,O,I,w;return Array.isArray(T)?K(T):"tokenize"in T?K([T]):H(T);function H(W){return ie;function ie(ce){const q=ce!==null&&W[ce],F=ce!==null&&W.null,G=[...Array.isArray(q)?q:q?[q]:[],...Array.isArray(F)?F:F?[F]:[]];return K(G)(ce)}}function K(W){return z=W,O=0,W.length===0?$:v(W[O])}function v(W){return ie;function ie(ce){return w=D(),I=W,W.partial||(u.currentConstruct=W),W.name&&u.parser.constructs.disable.null.includes(W.name)?S():W.tokenize.call(L?Object.assign(Object.create(u),L):u,c,V,S)(ce)}}function V(W){return M(I,w),R}function S(W){return w.restore(),++O<z.length?v(z[O]):$}}}function N(M,L){M.resolveAll&&!s.includes(M)&&s.push(M),M.resolve&&kn(u.events,L,u.events.length-L,M.resolve(u.events.slice(L),u)),M.resolveTo&&(u.events=M.resolveTo(u.events,u))}function D(){const M=m(),L=u.previous,U=u.currentConstruct,T=u.events.length,R=Array.from(l);return{from:T,restore:$};function $(){r=M,u.previous=L,u.currentConstruct=U,u.events.length=T,l=R,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function LC(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function MC(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function RC(e){const r={constructs:U2([AC,...(e||{}).extensions||[]]),content:i(Y2),defined:[],document:i(X2),flow:i(gC),lazy:{},string:i(vC),text:i(bC)};return r;function i(s){return a;function a(l){return PC(r,s,l)}}}function IC(e){for(;!Av(e););return e}const Yh=/[\0\t\n\r]/g;function OC(){let e=1,t="",n=!0,r;return i;function i(s,a,l){const c=[];let u,d,p,f,h;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),p=0,t="",n&&(s.charCodeAt(0)===65279&&p++,n=void 0);p<s.length;){if(Yh.lastIndex=p,u=Yh.exec(s),f=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(f),!u){t=s.slice(p);break}if(h===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(s.slice(p,f)),e+=f-p),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const $C=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function DC(e){return e.replace($C,FC)}function FC(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return Nv(n.slice(s?2:1),s?16:10)}return ep(n)||e}const Ov={}.hasOwnProperty;function BC(e,t,n){return typeof t!="string"&&(n=t,t=void 0),UC(n)(IC(RC(n).document().write(OC()(e,t,!0))))}function UC(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(_e),autolinkProtocol:D,autolinkEmail:D,atxHeading:s(Q),blockQuote:s(F),characterEscape:D,characterReference:D,codeFenced:s(G),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(G,a),codeText:s(ee,a),codeTextData:D,data:D,codeFlowValue:D,definition:s(X),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(le),hardBreakEscape:s(Z),hardBreakTrailing:s(Z),htmlFlow:s(oe,a),htmlFlowData:D,htmlText:s(oe,a),htmlTextData:D,image:s(ve),label:a,link:s(_e),listItem:s(je),listItemValue:f,listOrdered:s(Ae,p),listUnordered:s(Ae),paragraph:s(J),reference:v,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(Q),strong:s(ae),thematicBreak:s(ye)},exit:{atxHeading:c(),atxHeadingSequence:A,autolink:c(),autolinkEmail:q,autolinkProtocol:ce,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:S,characterReferenceMarkerNumeric:S,characterReferenceValue:W,characterReference:ie,codeFenced:c(k),codeFencedFence:b,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(x),codeText:c(R),codeTextData:E,data:E,definition:c(),definitionDestinationString:_,definitionLabelString:g,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(L),hardBreakTrailing:c(L),htmlFlow:c(U),htmlFlowData:E,htmlText:c(T),htmlTextData:E,image:c(z),label:I,labelText:O,lineEnding:M,link:c($),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:V,resourceDestinationString:w,resourceTitleString:H,resource:K,setextHeading:c(N),setextHeadingLineSequence:P,setextHeadingText:C,strong:c(),thematicBreak:c()}};$v(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(Y){let te={type:"root",children:[]};const xe={stack:[te],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},ue=[];let ke=-1;for(;++ke<Y.length;)if(Y[ke][1].type==="listOrdered"||Y[ke][1].type==="listUnordered")if(Y[ke][0]==="enter")ue.push(ke);else{const qe=ue.pop();ke=i(Y,qe,ke)}for(ke=-1;++ke<Y.length;){const qe=t[Y[ke][0]];Ov.call(qe,Y[ke][1].type)&&qe[Y[ke][1].type].call(Object.assign({sliceSerialize:Y[ke][2].sliceSerialize},xe),Y[ke][1])}if(xe.tokenStack.length>0){const qe=xe.tokenStack[xe.tokenStack.length-1];(qe[1]||Qh).call(xe,void 0,qe[0])}for(te.position={start:Wn(Y.length>0?Y[0][1].start:{line:1,column:1,offset:0}),end:Wn(Y.length>0?Y[Y.length-2][1].end:{line:1,column:1,offset:0})},ke=-1;++ke<t.transforms.length;)te=t.transforms[ke](te)||te;return te}function i(Y,te,xe){let ue=te-1,ke=-1,qe=!1,_n,ot,un,Un;for(;++ue<=xe;){const st=Y[ue];switch(st[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{st[0]==="enter"?ke++:ke--,Un=void 0;break}case"lineEndingBlank":{st[0]==="enter"&&(_n&&!Un&&!ke&&!un&&(un=ue),Un=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Un=void 0}if(!ke&&st[0]==="enter"&&st[1].type==="listItemPrefix"||ke===-1&&st[0]==="exit"&&(st[1].type==="listUnordered"||st[1].type==="listOrdered")){if(_n){let Sn=ue;for(ot=void 0;Sn--;){const ft=Y[Sn];if(ft[1].type==="lineEnding"||ft[1].type==="lineEndingBlank"){if(ft[0]==="exit")continue;ot&&(Y[ot][1].type="lineEndingBlank",qe=!0),ft[1].type="lineEnding",ot=Sn}else if(!(ft[1].type==="linePrefix"||ft[1].type==="blockQuotePrefix"||ft[1].type==="blockQuotePrefixWhitespace"||ft[1].type==="blockQuoteMarker"||ft[1].type==="listItemIndent"))break}un&&(!ot||un<ot)&&(_n._spread=!0),_n.end=Object.assign({},ot?Y[ot][1].start:st[1].end),Y.splice(ot||ue,0,["exit",_n,st[2]]),ue++,xe++}if(st[1].type==="listItemPrefix"){const Sn={type:"listItem",_spread:!1,start:Object.assign({},st[1].start),end:void 0};_n=Sn,Y.splice(ue,0,["enter",Sn,st[2]]),ue++,xe++,un=void 0,Un=!0}}}return Y[te][1]._spread=qe,xe}function s(Y,te){return xe;function xe(ue){l.call(this,Y(ue),ue),te&&te.call(this,ue)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(Y,te,xe){this.stack[this.stack.length-1].children.push(Y),this.stack.push(Y),this.tokenStack.push([te,xe||void 0]),Y.position={start:Wn(te.start),end:void 0}}function c(Y){return te;function te(xe){Y&&Y.call(this,xe),u.call(this,xe)}}function u(Y,te){const xe=this.stack.pop(),ue=this.tokenStack.pop();if(ue)ue[0].type!==Y.type&&(te?te.call(this,Y,ue[0]):(ue[1]||Qh).call(this,Y,ue[0]));else throw new Error("Cannot close `"+Y.type+"` ("+ho({start:Y.start,end:Y.end})+"): it’s not open");xe.position.end=Wn(Y.end)}function d(){return F2(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(Y){if(this.data.expectingFirstListItemValue){const te=this.stack[this.stack.length-2];te.start=Number.parseInt(this.sliceSerialize(Y),10),this.data.expectingFirstListItemValue=void 0}}function h(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.lang=Y}function m(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.meta=Y}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function k(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y.replace(/(\r?\n|\r)$/g,"")}function g(Y){const te=this.resume(),xe=this.stack[this.stack.length-1];xe.label=te,xe.identifier=ui(this.sliceSerialize(Y)).toLowerCase()}function y(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.title=Y}function _(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.url=Y}function A(Y){const te=this.stack[this.stack.length-1];if(!te.depth){const xe=this.sliceSerialize(Y).length;te.depth=xe}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function P(Y){const te=this.stack[this.stack.length-1];te.depth=this.sliceSerialize(Y).codePointAt(0)===61?1:2}function N(){this.data.setextHeadingSlurpLineEnding=void 0}function D(Y){const xe=this.stack[this.stack.length-1].children;let ue=xe[xe.length-1];(!ue||ue.type!=="text")&&(ue=he(),ue.position={start:Wn(Y.start),end:void 0},xe.push(ue)),this.stack.push(ue)}function E(Y){const te=this.stack.pop();te.value+=this.sliceSerialize(Y),te.position.end=Wn(Y.end)}function M(Y){const te=this.stack[this.stack.length-1];if(this.data.atHardBreak){const xe=te.children[te.children.length-1];xe.position.end=Wn(Y.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(te.type)&&(D.call(this,Y),E.call(this,Y))}function L(){this.data.atHardBreak=!0}function U(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function T(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function R(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.value=Y}function $(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=te,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function z(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=te,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function O(Y){const te=this.sliceSerialize(Y),xe=this.stack[this.stack.length-2];xe.label=DC(te),xe.identifier=ui(te).toLowerCase()}function I(){const Y=this.stack[this.stack.length-1],te=this.resume(),xe=this.stack[this.stack.length-1];if(this.data.inReference=!0,xe.type==="link"){const ue=Y.children;xe.children=ue}else xe.alt=te}function w(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.url=Y}function H(){const Y=this.resume(),te=this.stack[this.stack.length-1];te.title=Y}function K(){this.data.inReference=void 0}function v(){this.data.referenceType="collapsed"}function V(Y){const te=this.resume(),xe=this.stack[this.stack.length-1];xe.label=te,xe.identifier=ui(this.sliceSerialize(Y)).toLowerCase(),this.data.referenceType="full"}function S(Y){this.data.characterReferenceType=Y.type}function W(Y){const te=this.sliceSerialize(Y),xe=this.data.characterReferenceType;let ue;xe?(ue=Nv(te,xe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ue=ep(te);const ke=this.stack[this.stack.length-1];ke.value+=ue}function ie(Y){const te=this.stack.pop();te.position.end=Wn(Y.end)}function ce(Y){E.call(this,Y);const te=this.stack[this.stack.length-1];te.url=this.sliceSerialize(Y)}function q(Y){E.call(this,Y);const te=this.stack[this.stack.length-1];te.url="mailto:"+this.sliceSerialize(Y)}function F(){return{type:"blockquote",children:[]}}function G(){return{type:"code",lang:null,meta:null,value:""}}function ee(){return{type:"inlineCode",value:""}}function X(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function le(){return{type:"emphasis",children:[]}}function Q(){return{type:"heading",depth:0,children:[]}}function Z(){return{type:"break"}}function oe(){return{type:"html",value:""}}function ve(){return{type:"image",title:null,url:"",alt:null}}function _e(){return{type:"link",title:null,url:"",children:[]}}function Ae(Y){return{type:"list",ordered:Y.type==="listOrdered",start:null,spread:Y._spread,children:[]}}function je(Y){return{type:"listItem",spread:Y._spread,checked:null,children:[]}}function J(){return{type:"paragraph",children:[]}}function ae(){return{type:"strong",children:[]}}function he(){return{type:"text",value:""}}function ye(){return{type:"thematicBreak"}}}function Wn(e){return{line:e.line,column:e.column,offset:e.offset}}function $v(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?$v(e,r):VC(e,r)}}function VC(e,t){let n;for(n in t)if(Ov.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Qh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ho({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ho({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ho({start:t.start,end:t.end})+") is still open")}function WC(e){const t=this;t.parser=n;function n(r){return BC(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function HC(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function qC(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function JC(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function KC(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function GC(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function YC(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Ai(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function QC(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function XC(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Dv(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function ZC(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Dv(e,t);const i={src:Ai(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function eN(e,t){const n={src:Ai(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function tN(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function nN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Dv(e,t);const i={href:Ai(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function rN(e,t){const n={href:Ai(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function iN(e,t,n){const r=e.all(t),i=n?oN(n):Fv(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function oN(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Fv(n[r])}return t}function Fv(e){const t=e.spread;return t??e.children.length>1}function sN(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function aN(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function lN(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function cN(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function uN(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=Yd(t.children[1]),c=bv(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function dN(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},h=a?a[c]:void 0;h&&(f.align=h);let m={type:"element",tagName:s,properties:f,children:[]};p&&(m.children=e.all(p),e.patch(p,m),m=e.applyData(p,m)),u.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function pN(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Xh=9,Zh=32;function fN(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(em(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(em(t.slice(i),i>0,!1)),s.join("")}function em(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===Xh||s===Zh;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===Xh||s===Zh;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function hN(e,t){const n={type:"text",value:fN(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function mN(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const gN={blockquote:HC,break:qC,code:JC,delete:KC,emphasis:GC,footnoteReference:YC,heading:QC,html:XC,imageReference:ZC,image:eN,inlineCode:tN,linkReference:nN,link:rN,listItem:iN,list:sN,paragraph:aN,root:lN,strong:cN,table:uN,tableCell:pN,tableRow:dN,text:hN,thematicBreak:mN,toml:Ts,yaml:Ts,definition:Ts,footnoteDefinition:Ts};function Ts(){}const Bv=-1,pl=0,go=1,Pa=2,rp=3,ip=4,op=5,sp=6,Uv=7,Vv=8,tm=typeof self=="object"?self:globalThis,xN=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case pl:case Bv:return n(a,i);case go:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Pa:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case rp:return n(new Date(a),i);case ip:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case op:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case sp:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case Uv:{const{name:l,message:c}=a;return n(new tm[l](c),i)}case Vv:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new tm[s](a),i)};return r},nm=e=>xN(new Map,e)(0),Ur="",{toString:yN}={},{keys:vN}=Object,Hi=e=>{const t=typeof e;if(t!=="object"||!e)return[pl,t];const n=yN.call(e).slice(8,-1);switch(n){case"Array":return[go,Ur];case"Object":return[Pa,Ur];case"Date":return[rp,Ur];case"RegExp":return[ip,Ur];case"Map":return[op,Ur];case"Set":return[sp,Ur];case"DataView":return[go,n]}return n.includes("Array")?[go,n]:n.includes("Error")?[Uv,n]:[Pa,n]},As=([e,t])=>e===pl&&(t==="function"||t==="symbol"),bN=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},s=a=>{if(n.has(a))return n.get(a);let[l,c]=Hi(a);switch(l){case pl:{let d=a;switch(c){case"bigint":l=Vv,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Bv],a)}return i([l,d],a)}case go:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(s(f));return p}case Pa:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],p=i([l,d],a);for(const f of vN(a))(e||!As(Hi(a[f])))&&d.push([s(f),s(a[f])]);return p}case rp:return i([l,a.toISOString()],a);case ip:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case op:{const d=[],p=i([l,d],a);for(const[f,h]of a)(e||!(As(Hi(f))||As(Hi(h))))&&d.push([s(f),s(h)]);return p}case sp:{const d=[],p=i([l,d],a);for(const f of a)(e||!As(Hi(f)))&&d.push(s(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return s},rm=(e,{json:t,lossy:n}={})=>{const r=[];return bN(!(t||n),!!t,new Map,r)(e),r},La=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?nm(rm(e,t)):structuredClone(e):(e,t)=>nm(rm(e,t));function wN(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function kN(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function jN(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||wN,r=e.options.footnoteBackLabel||kN,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Ai(p.toLowerCase());let h=0;const m=[],b=e.footnoteCounts.get(p);for(;b!==void 0&&++h<=b;){m.length>0&&m.push({type:"text",value:" "});let g=typeof n=="string"?n:n(c,h);typeof g=="string"&&(g={type:"text",value:g}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const k=d[d.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const g=k.children[k.children.length-1];g&&g.type==="text"?g.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...m)}else d.push(...m);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,x),l.push(x)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...La(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Wv=function(e){if(e==null)return NN;if(typeof e=="function")return fl(e);if(typeof e=="object")return Array.isArray(e)?_N(e):SN(e);if(typeof e=="string")return CN(e);throw new Error("Expected function, string, or object as test")};function _N(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Wv(e[n]);return fl(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function SN(e){const t=e;return fl(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function CN(e){return fl(t);function t(n){return n&&n.type===e}}function fl(e){return t;function t(n,r,i){return!!(EN(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function NN(){return!0}function EN(e){return e!==null&&typeof e=="object"&&"type"in e}const Hv=[],zN=!0,im=!1,TN="skip";function AN(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=Wv(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=Hv,m,b,k;if((!t||s(c,u,d[d.length-1]||void 0))&&(h=PN(n(c,d)),h[0]===im))return h;if("children"in c&&c.children){const x=c;if(x.children&&h[0]!==TN)for(b=(r?x.children.length:-1)+a,k=d.concat(x);b>-1&&b<x.children.length;){const g=x.children[b];if(m=l(g,b,k)(),m[0]===im)return m;b=typeof m[1]=="number"?m[1]:b+a}}return h}}}function PN(e){return Array.isArray(e)?e:typeof e=="number"?[zN,e]:e==null?Hv:[e]}function qv(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),AN(e,s,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const zu={}.hasOwnProperty,LN={};function MN(e,t){const n=t||LN,r=new Map,i=new Map,s=new Map,a={...gN,...n.handlers},l={all:u,applyData:IN,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:c,options:n,patch:RN,wrap:$N};return qv(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,h=l.handlers[f];if(zu.call(l.handlers,f)&&h)return h(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:b,...k}=d,x=La(k);return x.children=l.all(d),x}return La(d)}return(l.options.unknownHandler||ON)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const m=l.one(f[h],d);if(m){if(h&&f[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=om(m.value)),!Array.isArray(m)&&m.type==="element")){const b=m.children[0];b&&b.type==="text"&&(b.value=om(b.value))}Array.isArray(m)?p.push(...m):p.push(m)}}}return p}}function RN(e,t){e.position&&(t.position=y2(e))}function IN(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,La(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function ON(e,t){const n=t.data||{},r="value"in t&&!(zu.call(n,"hProperties")||zu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function $N(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function om(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function sm(e,t){const n=MN(e,t),r=n.one(e,void 0),i=jN(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function DN(e,t){return e&&"run"in e?async function(n,r){const i=sm(n,{file:r,...t});await e.run(i,r)}:function(n,r){return sm(n,{file:r,...e||t})}}function am(e){if(e)throw e}var Xs=Object.prototype.hasOwnProperty,Jv=Object.prototype.toString,lm=Object.defineProperty,cm=Object.getOwnPropertyDescriptor,um=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Jv.call(t)==="[object Array]"},dm=function(t){if(!t||Jv.call(t)!=="[object Object]")return!1;var n=Xs.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Xs.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Xs.call(t,i)},pm=function(t,n){lm&&n.name==="__proto__"?lm(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},fm=function(t,n){if(n==="__proto__")if(Xs.call(t,n)){if(cm)return cm(t,n).value}else return;return t[n]},FN=function e(){var t,n,r,i,s,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=fm(l,n),i=fm(t,n),l!==i&&(d&&i&&(dm(i)||(s=um(i)))?(s?(s=!1,a=r&&um(r)?r:[]):a=r&&dm(r)?r:{},pm(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&pm(l,{name:n,newValue:i}));return l};const oc=Va(FN);function Tu(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function BN(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++s];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?UN(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function UN(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(a,...l){n||(n=!0,t(a,...l))}function s(a){i(null,a)}}const hn={basename:VN,dirname:WN,extname:HN,join:qN,sep:"/"};function VN(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');rs(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function WN(e){if(rs(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function HN(e){rs(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function qN(...e){let t=-1,n;for(;++t<e.length;)rs(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":JN(n)}function JN(e){rs(e);const t=e.codePointAt(0)===47;let n=KN(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function KN(e,t){let n="",r=0,i=-1,s=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else l===46&&s>-1?s++:s=-1}return n}function rs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const GN={cwd:YN};function YN(){return"/"}function Au(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function QN(e){if(typeof e=="string")e=new URL(e);else if(!Au(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return XN(e)}function XN(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const sc=["history","path","basename","stem","extname","dirname"];class Kv{constructor(t){let n;t?Au(t)?n={path:t}:typeof t=="string"||ZN(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":GN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<sc.length;){const s=sc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)sc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?hn.basename(this.path):void 0}set basename(t){lc(t,"basename"),ac(t,"basename"),this.path=hn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?hn.dirname(this.path):void 0}set dirname(t){hm(this.basename,"dirname"),this.path=hn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?hn.extname(this.path):void 0}set extname(t){if(ac(t,"extname"),hm(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=hn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Au(t)&&(t=QN(t)),lc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?hn.basename(this.path,this.extname):void 0}set stem(t){lc(t,"stem"),ac(t,"stem"),this.path=hn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new pt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function ac(e,t){if(e&&e.includes(hn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+hn.sep+"`")}function lc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function hm(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function ZN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const e4=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},t4={}.hasOwnProperty;class ap extends e4{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=BN()}copy(){const t=new ap;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(oc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(dc("data",this.frozen),this.namespace[t]=n,this):t4.call(this.namespace,t)&&this.namespace[t]||void 0:t?(dc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ps(t),r=this.parser||this.Parser;return cc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),cc("process",this.parser||this.Parser),uc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const l=Ps(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const h=p,m=r.stringify(h,f);i4(m)?f.value=m:f.result=m,u(d,f)});function u(d,p){d||!p?a(d):s?s(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),cc("processSync",this.parser||this.Parser),uc("processSync",this.compiler||this.Compiler),this.process(t,i),gm("processSync","process",n),r;function i(s,a){n=!0,am(s),r=a}}run(t,n,r){mm(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,l){const c=Ps(n);i.run(t,c,u);function u(d,p,f){const h=p||t;d?l(d):a?a(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),gm("runSync","run",r),i;function s(a,l){am(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Ps(n),i=this.compiler||this.Compiler;return uc("stringify",i),mm(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(dc("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=oc(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[h,...m]=d;const b=r[f][1];Tu(b)&&Tu(h)&&(h=oc(!0,b,h)),r[f]=[u,h,...m]}}}}const n4=new ap().freeze();function cc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function uc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function dc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function mm(e){if(!Tu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function gm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ps(e){return r4(e)?e:new Kv(e)}function r4(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function i4(e){return typeof e=="string"||o4(e)}function o4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const s4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",xm=[],ym={allowDangerousHtml:!0},a4=/^(https?|ircs?|mailto|xmpp)$/i,l4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Gv(e){const t=c4(e),n=u4(e);return d4(t.runSync(t.parse(n),n),e)}function c4(e){const t=e.rehypePlugins||xm,n=e.remarkPlugins||xm,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...ym}:ym;return n4().use(WC).use(n).use(DN,r).use(t)}function u4(e){const t=e.children||"",n=new Kv;return typeof t=="string"&&(n.value=t),n}function d4(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||p4;for(const d of l4)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+s4+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),qv(e,u),j2(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in nc)if(Object.hasOwn(nc,h)&&Object.hasOwn(d.properties,h)){const m=d.properties[h],b=nc[h];(b===null||b.includes(d.tagName))&&(d.properties[h]=c(String(m||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function p4(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||a4.test(e.slice(0,t))?e:""}function f4({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=j.useState(!1),[a,l]=j.useState(r),c=j.useRef(null),u=j.useRef(null);j.useEffect(()=>{if(e){const f=e.split(`
`).length,h=Math.max(r,Math.min(f*20+40,500));l(h)}},[e,r]),j.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&s(!1)}return j.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),o.jsxs("div",{ref:c,className:"markdown-editor",children:[o.jsx("style",{children:`
        .markdown-editor {
          position: relative;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: var(--bg-primary);
        }
        
        .markdown-preview {
          padding: 16px;
          min-height: ${r}px;
          max-height: 500px;
          overflow-y: auto;
          cursor: text;
          position: relative;
        }
        
        .markdown-preview:hover {
          background: var(--bg-tertiary);
        }
        
        .markdown-preview:hover .edit-hint {
          opacity: 1;
        }
        
        .edit-hint {
          position: absolute;
          top: 8px;
          right: 8px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--text-muted);
          opacity: 0;
          transition: opacity 0.15s;
          background: var(--bg-secondary);
          padding: 4px 8px;
          border-radius: var(--radius-sm);
        }
        
        .markdown-placeholder {
          color: var(--text-muted);
          font-style: italic;
        }
        
        .markdown-content {
          font-size: 14px;
          line-height: 1.6;
        }
        
        .markdown-content h1 {
          font-size: 1.5em;
          font-weight: 600;
          margin: 0.5em 0;
          padding-bottom: 0.3em;
          border-bottom: 1px solid var(--border-color);
        }
        
        .markdown-content h2 {
          font-size: 1.3em;
          font-weight: 600;
          margin: 0.5em 0;
        }
        
        .markdown-content h3 {
          font-size: 1.1em;
          font-weight: 600;
          margin: 0.4em 0;
        }
        
        .markdown-content p {
          margin: 0.5em 0;
        }
        
        .markdown-content ul, .markdown-content ol {
          margin: 0.5em 0;
          padding-left: 1.5em;
        }
        
        .markdown-content li {
          margin: 0.25em 0;
        }
        
        .markdown-content code {
          background: var(--bg-tertiary);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.9em;
        }
        
        .markdown-content pre {
          background: var(--bg-tertiary);
          padding: 12px;
          border-radius: var(--radius-sm);
          overflow-x: auto;
          margin: 0.5em 0;
        }
        
        .markdown-content pre code {
          background: none;
          padding: 0;
        }
        
        .markdown-content blockquote {
          border-left: 3px solid var(--accent-primary);
          margin: 0.5em 0;
          padding-left: 1em;
          color: var(--text-secondary);
        }
        
        .markdown-content strong {
          font-weight: 600;
          color: var(--text-primary);
        }
        
        .markdown-content em {
          font-style: italic;
        }
        
        .markdown-content hr {
          border: none;
          border-top: 1px solid var(--border-color);
          margin: 1em 0;
        }
        
        .monaco-wrapper {
          height: ${a}px;
        }
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(Kt,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(nj,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(Gv,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function h4(e){return/^[a-zA-Z0-9_]+$/.test(e)}function m4({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:a}=dt(),[l,c]=j.useState(new Set(["basic","model","tools","subagents"])),[u,d]=j.useState(!1),[p,f]=j.useState(!1),[h,m]=j.useState(!1),[b,k]=j.useState(""),[x,g]=j.useState(null);if(!t)return null;function y(z){n(e.id,z)}function _(z){if(z===""){g(null),y({name:z});return}h4(z)?g(null):g("Name can only contain letters, numbers, and underscores"),e.type==="LlmAgent"?y({name:z,output_key:z}):y({name:z})}function A(z){const O=new Set(l);O.has(z)?O.delete(z):O.add(z),c(O)}const C=e.type==="LlmAgent",P=e;function N(z){C&&y({tools:[...P.tools,z]})}function D(z){C&&y({tools:P.tools.filter((O,I)=>I!==z)})}function E(z,O){if(!C)return;const I=[...P.tools];I[z]=O,y({tools:I})}function M(z){"sub_agents"in e&&y({sub_agents:[...e.sub_agents,z]})}function L(z){"sub_agents"in e&&y({sub_agents:e.sub_agents.filter(O=>O!==z)})}const U=t.agents.filter(z=>z.id!==e.id);async function T(){if(!(!t||!C)){d(!0);try{const z=P.instruction||"",O=z?`Current instruction to improve:

${z}

Please improve and expand this instruction while preserving its core intent.`:void 0,w=t.agents.some(K=>K.id===e.id)?void 0:e,H=await Ys(t.id,e.id,O,w);H.success&&H.prompt?y({instruction:H.prompt}):alert("Failed to generate prompt: "+(H.error||"Unknown error"))}catch(z){alert("Error generating prompt: "+z.message)}finally{d(!1)}}}async function R(){if(!(!t||!C||!b.trim())){d(!0);try{const O=`Current instruction:

${P.instruction||""}

---

Requested changes:
${b}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,w=t.agents.some(K=>K.id===e.id)?void 0:e,H=await Ys(t.id,e.id,O,w);H.success&&H.prompt?(y({instruction:H.prompt}),m(!1),k("")):alert("Failed to apply changes: "+(H.error||"Unknown error"))}catch(z){alert("Error applying changes: "+z.message)}finally{d(!1)}}}async function $(){if(!t||!C)return;const z=P.instruction;if(!z){alert("Please write an instruction first");return}f(!0);try{const O=`Write a 5-10 word description of what this agent does.

STRICT RULES:
- Maximum 10 words
- Third person (NOT "You are...")
- Start with a verb (Writes, Reviews, Searches, Generates, etc.)
- Single phrase, no periods

GOOD EXAMPLES:
- "Writes creative stories"
- "Reviews code for bugs"
- "Searches the web for information"
- "Generates unit tests"

BAD (too long):
- "This agent is designed to help users write creative stories based on their prompts"

Agent instruction to summarize:
${z.slice(0,500)}

Your response (5-10 words only):`,I=await Ys(t.id,e.id,O);if(I.success&&I.prompt){let w=I.prompt.trim();w=w.replace(/^["']|["']$/g,"").trim();const H=w.split(/[.!?\n]/)[0].trim(),K=H.length>80?H.slice(0,77)+"...":H;y({description:K})}else alert("Failed to generate description: "+(I.error||"Unknown error"))}catch(O){alert("Error generating description: "+O.message)}finally{f(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
        .agent-editor {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .editor-header {
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .editor-header input {
          font-size: 1.25rem;
          font-weight: 600;
          background: transparent;
          border: none;
          padding: 4px;
          flex: 1;
        }
        
        .editor-header input:focus {
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .editor-header .run-agent-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          font-size: 12px;
          white-space: nowrap;
        }
        
        .editor-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }
        
        .section {
          margin-bottom: 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          cursor: pointer;
          user-select: none;
        }
        
        .section-header:hover {
          background: var(--bg-hover);
        }
        
        .section-header h4 {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .section-header h4 svg {
          color: var(--accent-primary);
        }
        
        .section-content {
          padding: 16px;
          border-top: 1px solid var(--border-color);
          overflow: visible;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .form-row:last-child {
          margin-bottom: 0;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .form-group.full-width {
          grid-column: 1 / -1;
        }
        
        .form-group textarea {
          min-height: 120px;
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.5;
        }
        
        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
        }
        
        .checkbox-group label {
          margin: 0;
          cursor: pointer;
        }
        
        .tool-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .tool-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
        }
        
        .tool-item-info {
          flex: 1;
        }
        
        .tool-item-name {
          font-weight: 500;
          font-size: 13px;
        }
        
        .tool-item-type {
          font-size: 11px;
          color: var(--text-muted);
        }
        
        .tool-item .delete-btn {
          padding: 6px;
          color: var(--text-muted);
          background: transparent;
          border-radius: var(--radius-sm);
          opacity: 0.6;
          transition: all 0.15s ease;
        }
        
        .tool-item:hover .delete-btn {
          opacity: 1;
        }
        
        .tool-item .delete-btn:hover {
          color: var(--error);
          background: rgba(255, 107, 107, 0.1);
        }
        
        .add-tool-dropdown {
          position: relative;
        }
        
        .dropdown-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999;
        }
        
        .dropdown-search {
          padding: 4px 4px 8px;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 8px;
          position: sticky;
          top: 0;
          background: var(--bg-secondary);
          z-index: 1;
        }
        
        .dropdown-search input {
          width: 100%;
          padding: 8px 12px;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 13px;
        }
        
        .dropdown-search input:focus {
          outline: none;
          border-color: var(--accent-primary);
        }
        
        .dropdown-search input::placeholder {
          color: var(--text-muted);
        }
        
        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 280px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 8px;
          z-index: 1000;
          max-height: 400px;
          overflow-y: auto;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        }
        
        .dropdown-content.dropdown-fixed {
          position: fixed;
        }
        
        .dropdown-section {
          margin-bottom: 12px;
        }
        
        .dropdown-section:last-child {
          margin-bottom: 0;
        }
        
        .dropdown-section h5 {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 4px 8px;
          margin-bottom: 4px;
        }
        
        .dropdown-item {
          display: block;
          width: 100%;
          padding: 8px 12px;
          text-align: left;
          border-radius: var(--radius-sm);
          transition: background 0.15s ease;
        }
        
        .dropdown-item:hover {
          background: var(--bg-hover);
        }
        
        .dropdown-item-name {
          font-weight: 500;
          font-size: 13px;
        }
        
        .dropdown-item-desc {
          font-size: 11px;
          color: var(--text-muted);
        }
        
        .sub-agent-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .sub-agent-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          font-size: 13px;
        }
        
        .sub-agent-chip button {
          padding: 2px;
          color: var(--text-muted);
        }
        
        .sub-agent-chip button:hover {
          color: var(--error);
        }
        
        .label-with-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }
        
        .label-with-action label {
          margin-bottom: 0;
        }
        
        .generate-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          font-size: 12px;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .action-buttons {
          display: flex;
          gap: 8px;
        }
        
        .request-changes-box {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
          padding: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .request-changes-box input {
          flex: 1;
          font-size: 13px;
        }
        
        .request-changes-box .btn {
          white-space: nowrap;
        }
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Er,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:e.name,onChange:z=>_(z.target.value),placeholder:"Agent name",style:{borderColor:x?"var(--error)":void 0}}),x&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:x})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),s("run")},title:"Test this agent",children:[o.jsx(pr,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(qi,{id:"basic",title:"Basic Info",icon:o.jsx(Er,{size:16}),expanded:l.has("basic"),onToggle:()=>A("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),C&&P.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:$,disabled:p,title:"Generate description from instruction",children:p?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:z=>y({description:z.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),C&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Instruction"}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!h),disabled:u||!P.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:T,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),h&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:b,onChange:z=>k(z.target.value),placeholder:"Describe what changes you want...",onKeyDown:z=>{z.key==="Enter"&&b.trim()?R():z.key==="Escape"&&(m(!1),k(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:R,disabled:u||!b.trim(),children:"Apply"})]}),o.jsx(f4,{value:P.instruction,onChange:z=>y({instruction:z}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:P.output_key||"",onChange:z=>y({output_key:z.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(z=>o.jsx("option",{value:z.name,children:z.name},z.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:P.include_contents,onChange:z=>y({include_contents:z.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:P.disallow_transfer_to_parent,onChange:z=>y({disallow_transfer_to_parent:z.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:P.disallow_transfer_to_peers,onChange:z=>y({disallow_transfer_to_peers:z.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:z=>y({max_iterations:parseInt(z.target.value)||void 0}),placeholder:"No limit"})]})})]}),C&&o.jsx(qi,{id:"model",title:"Model",icon:o.jsx(Bd,{size:16}),expanded:l.has("model"),onToggle:()=>A("model"),children:o.jsx(x4,{agent:P,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:z=>y({model:z})})}),C&&o.jsx(qi,{id:"tools",title:`Tools (${P.tools.length})`,icon:o.jsx(an,{size:16}),expanded:l.has("tools"),onToggle:()=>A("tools"),children:o.jsx(g4,{tools:P.tools,onAdd:N,onRemove:D,onUpdate:E,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:U,skillsets:t.skillsets||[]})}),"sub_agents"in e&&o.jsx(qi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(nv,{size:16}),expanded:l.has("subagents"),onToggle:()=>A("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(z=>{const O=t.agents.find(I=>I.id===z);return O?o.jsxs("div",{className:"sub-agent-chip",children:[O.name,o.jsx("button",{onClick:()=>L(z),children:o.jsx(Fe,{size:12})})]},z):null}),o.jsxs("select",{value:"",onChange:z=>{z.target.value&&M(z.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),U.filter(z=>!e.sub_agents.includes(z.id)).map(z=>o.jsx("option",{value:z.id,children:z.name},z.id))]})]})}),o.jsx(qi,{id:"callbacks",title:"Callbacks",icon:o.jsx(wn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>A("callbacks"),children:o.jsx(y4,{agent:e,onUpdate:y,customCallbacks:t.custom_callbacks||[],isLlmAgent:C})})]})]})}function qi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(Lt,{size:16}):o.jsx(wt,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function g4({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=j.useState(!1),[f,h]=j.useState({}),[m,b]=j.useState(""),k=Ot.useRef(null),x=Ot.useRef(null),[g,y]=j.useState(null),[_,A]=j.useState(new Set),C=(S,W)=>{if(!m.trim())return!0;const ie=m.toLowerCase();return S.toLowerCase().includes(ie)||((W==null?void 0:W.toLowerCase().includes(ie))??!1)},P=i.filter(S=>C(S.name,S.description)),N=s.filter(S=>C(S.name,S.description)),D=a.filter(S=>C(S.name,S.description)),E=l.filter(S=>C(S.name,S.description)),M=c.filter(S=>C(S.name,S.description)),L=u.filter(S=>C(S.name,S.description));function U(){if(k.current){const S=k.current.getBoundingClientRect(),W=window.innerHeight,ie=350,ce=W-S.bottom-16,q=S.top-16;if(ce>=200||ce>=q){const F=Math.min(ie,ce);h({top:S.bottom+4,left:S.left,maxHeight:F})}else{const F=Math.min(ie,q);h({top:S.top-F-4,left:S.left,maxHeight:F})}}p(!0),b(""),setTimeout(()=>{var S;return(S=x.current)==null?void 0:S.focus()},50)}function T(){p(!1),b("")}function R(S){t({type:"builtin",name:S}),T()}async function $(S){T();const W=S.tool_filter||[];if(y({server:S,enabledTools:new Set(W),availableTools:W.map(ie=>({name:ie,description:""})),isLoading:W.length===0,error:void 0}),W.length===0)try{const{testMcpServer:ie}=await yj(async()=>{const{testMcpServer:q}=await Promise.resolve().then(()=>Uk);return{testMcpServer:q}},void 0),ce=await ie({connection_type:S.connection_type,command:S.command,args:S.args,env:S.env,url:S.url,headers:S.headers,timeout:S.timeout||30});ce.success?y(q=>q?{...q,availableTools:ce.tools,enabledTools:new Set(ce.tools.map(F=>F.name)),isLoading:!1}:null):y(q=>q?{...q,isLoading:!1,error:ce.error||"Failed to connect to MCP server"}:null)}catch(ie){y(ce=>ce?{...ce,isLoading:!1,error:ie.message}:null)}}function z(S){if(!g)return;const W=new Set(g.enabledTools);W.has(S)?W.delete(S):W.add(S),y({...g,enabledTools:W})}function O(){if(!g)return;const S=Array.from(g.enabledTools);t({type:"mcp",server:{...g.server,tool_filter:S}}),y(null)}function I(S){const W=new Set(_);W.has(S)?W.delete(S):W.add(S),A(W)}function w(S,W){const ie=e[S];if(ie.type!=="mcp"||!ie.server)return;const ce=ie.server.tool_filter||[];let q;ce.includes(W)?q=ce.filter(F=>F!==W):q=[...ce,W],r(S,{...ie,server:{...ie.server,tool_filter:q}})}function H(S){t({type:"function",name:S.name,module_path:S.module_path}),T()}function K(S){const W=c.find(ie=>ie.id===S);t({type:"agent",agent_id:S,name:W==null?void 0:W.name}),T()}function v(S){const W=u.find(ie=>ie.id===S);t({type:"skillset",skillset_id:S,name:W==null?void 0:W.name}),T()}function V(S){return s.find(W=>W.name===S)}return o.jsxs("div",{children:[o.jsx("style",{children:`
        .mcp-tool-item {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 8px;
        }
        
        .mcp-tool-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          cursor: pointer;
          transition: background 0.15s;
        }
        
        .mcp-tool-header:hover {
          background: var(--bg-tertiary);
        }
        
        .mcp-tool-header .delete-btn {
          padding: 6px;
          color: var(--text-muted);
          background: transparent;
          border: none;
          border-radius: var(--radius-sm);
          opacity: 0.6;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .mcp-tool-header:hover .delete-btn {
          opacity: 1;
        }
        
        .mcp-tool-header .delete-btn:hover {
          color: var(--error);
          background: rgba(255, 107, 107, 0.1);
        }
        
        .mcp-tool-info {
          flex: 1;
        }
        
        .mcp-tool-name {
          font-weight: 500;
        }
        
        .mcp-tool-count {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .mcp-tool-body {
          padding: 12px;
          background: var(--bg-tertiary);
          border-top: 1px solid var(--border-color);
        }
        
        .mcp-tool-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .mcp-tool-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 999px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .mcp-tool-chip.enabled {
          background: rgba(0, 245, 212, 0.1);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }
        
        .mcp-tool-chip.disabled {
          opacity: 0.5;
          text-decoration: line-through;
        }
        
        .mcp-config-dialog {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1001;
        }
        
        .mcp-config-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px;
          max-width: 500px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
        }
        
        .mcp-config-content h3 {
          margin-bottom: 8px;
        }
        
        .mcp-config-content > p {
          color: var(--text-muted);
          margin-bottom: 16px;
          font-size: 14px;
        }
        
        .mcp-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 16px;
          gap: 16px;
        }
        
        .mcp-loading .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--border-color);
          border-top-color: var(--accent-primary);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .mcp-loading p {
          color: var(--text-muted);
          font-size: 14px;
        }
        
        .mcp-error {
          background: rgba(255, 107, 107, 0.1);
          border: 1px solid var(--error);
          border-radius: var(--radius-md);
          padding: 16px;
          margin-bottom: 16px;
        }
        
        .mcp-error p {
          color: var(--error);
          margin: 0;
        }
        
        .mcp-error .hint {
          color: var(--text-muted);
          font-size: 12px;
          margin-top: 8px;
        }
        
        .mcp-tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .mcp-tool-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-size: 13px;
          transition: all 0.15s;
        }
        
        .mcp-tool-toggle:hover {
          border-color: var(--text-muted);
        }
        
        .mcp-tool-toggle.enabled {
          background: rgba(0, 245, 212, 0.1);
          border-color: var(--accent-primary);
        }
        
        .mcp-tool-toggle input {
          margin: 0;
        }
        
        .mcp-select-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .mcp-select-actions button {
          font-size: 12px;
          padding: 4px 8px;
        }
      `}),o.jsx("div",{className:"tool-list",children:e.map((S,W)=>{var ie;return S.type==="mcp"&&S.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>I(W),children:[_.has(W)?o.jsx(Lt,{size:14}):o.jsx(wt,{size:14}),o.jsx(an,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:S.server.name}),o.jsx("div",{className:"mcp-tool-count",children:S.server.tool_filter===null||S.server.tool_filter===void 0?"all tools":`${S.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:ce=>{ce.stopPropagation(),n(W)},children:o.jsx(Fe,{size:14})})]}),_.has(W)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const ce=V(S.server.name),q=(ce==null?void 0:ce.tool_filter)||S.server.tool_filter||[],F=new Set(S.server.tool_filter||[]);return q.map(G=>o.jsxs("label",{className:`mcp-tool-chip ${F.has(G)?"enabled":"disabled"}`,onClick:()=>w(W,G),children:[o.jsx("input",{type:"checkbox",checked:F.has(G),onChange:()=>{},style:{display:"none"}}),G]},G))})()})})]},W):S.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(Rn,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:S.name||((ie=u.find(ce=>ce.id===S.skillset_id))==null?void 0:ie.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(W),children:o.jsx(Fe,{size:14})})]},W):o.jsxs("div",{className:"tool-item",children:[o.jsx(an,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:S.name||S.agent_id}),o.jsx("div",{className:"tool-item-type",children:S.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(W),children:o.jsx(Fe,{size:14})})]},W)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:k,className:"btn btn-secondary btn-sm",onClick:()=>d?T():U(),children:[o.jsx(Ge,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:T}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:x,type:"text",placeholder:"Search tools...",value:m,onChange:S=>b(S.target.value),onKeyDown:S=>S.key==="Escape"&&T()})}),P.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),P.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>R(S.name),children:[o.jsx("div",{className:"dropdown-item-name",children:S.name}),o.jsx("div",{className:"dropdown-item-desc",children:S.description})]},S.name))]}),N.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Known MCP Servers (",N.length,")"]}),N.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>$(S),children:[o.jsxs("div",{className:"dropdown-item-name",children:[S.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:S.tool_filter===null||S.tool_filter===void 0?"all tools":`${S.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:S.description})]},`known-${S.name}`))]}),D.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",D.length,")"]}),D.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>$(S),children:[o.jsxs("div",{className:"dropdown-item-name",children:[S.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:S.tool_filter===null||S.tool_filter===void 0?"all tools":`${S.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:S.description||"Custom MCP server"})]},`project-${S.id||S.name}`))]}),E.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),E.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>H(S),children:[o.jsx("div",{className:"dropdown-item-name",children:S.name}),o.jsx("div",{className:"dropdown-item-desc",children:S.description})]},S.id))]}),M.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),M.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>K(S.id),children:[o.jsx("div",{className:"dropdown-item-name",children:S.name}),o.jsx("div",{className:"dropdown-item-desc",children:S.type})]},S.id))]}),L.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",L.length,")"]}),L.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>v(S.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[S.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[S.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:S.description||"Vector knowledge base"})]},S.id))]}),m.trim()&&P.length===0&&N.length===0&&D.length===0&&E.length===0&&M.length===0&&L.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',m,'"']})]})]})]}),g&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",g.server.name]}),o.jsx("p",{children:g.server.description}),g.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):g.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",g.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...g,enabledTools:new Set(g.availableTools.map(S=>S.name))}),children:["Select All (",g.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...g,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:g.availableTools.map(S=>o.jsxs("div",{className:"mcp-tool-row",title:S.description||S.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:g.enabledTools.has(S.name),onChange:()=>z(S.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:g.enabledTools.has(S.name)?1:.5,cursor:"pointer"},onClick:()=>z(S.name),children:S.name})]},S.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>y(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:O,disabled:g.enabledTools.size===0,children:["Add ",g.enabledTools.size," Tools"]})]})]})})]})}function x4({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,h;const s=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!s,c=s||(()=>{if(!e.model)return n;const m=t.find(b=>{var k,x,g;return b.provider===((k=e.model)==null?void 0:k.provider)&&b.model_name===((x=e.model)==null?void 0:x.model_name)&&b.api_base===((g=e.model)==null?void 0:g.api_base)});return m==null?void 0:m.id})()||n||((h=t[0])==null?void 0:h.id);Ot.useEffect(()=>{var m,b,k,x,g;if(s){const y=t.find(_=>_.id===s);y&&(((m=e.model)==null?void 0:m.provider)!==y.provider||((b=e.model)==null?void 0:b.model_name)!==y.model_name||((k=e.model)==null?void 0:k.api_base)!==y.api_base||((x=e.model)==null?void 0:x.temperature)!==y.temperature||((g=e.model)==null?void 0:g.max_output_tokens)!==y.max_output_tokens)&&i({provider:y.provider,model_name:y.model_name,api_base:y.api_base,temperature:y.temperature,max_output_tokens:y.max_output_tokens,top_p:y.top_p,top_k:y.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,i]);function u(m){const b=t.find(k=>k.id===m);b&&i({provider:b.provider,model_name:b.model_name,api_base:b.api_base,temperature:b.temperature,max_output_tokens:b.max_output_tokens,top_p:b.top_p,top_k:b.top_k,fallbacks:[],_appModelId:m})}function d(){var m;if(a){const b=n||((m=t[0])==null?void 0:m.id);b&&u(b)}else{const b=e.model;if(b){const{_appModelId:k,...x}=b;i(x)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(m){const{_appModelId:b,...k}=e.model||{};i({...k,...m})}return t.find(m=>m.id===c),t.find(m=>m.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
        .model-selector {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .model-choice {
          display: flex;
          gap: 12px;
        }
        
        .model-option {
          flex: 1;
          padding: 12px 16px;
          border: 2px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
          text-align: center;
        }
        
        .model-option:hover {
          border-color: var(--text-muted);
        }
        
        .model-option.selected {
          border-color: var(--accent-primary);
          background: rgba(0, 245, 212, 0.05);
        }
        
        .model-option-label {
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .model-option-desc {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .app-model-select {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .app-model-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--bg-tertiary);
          border: 2px solid transparent;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .app-model-item:hover {
          background: var(--bg-hover);
        }
        
        .app-model-item.selected {
          border-color: var(--accent-primary);
          background: rgba(0, 245, 212, 0.05);
        }
        
        .app-model-item-info {
          flex: 1;
        }
        
        .app-model-item-name {
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .app-model-item-details {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 4px;
        }
        
        .default-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          padding: 2px 6px;
          background: rgba(255, 217, 61, 0.15);
          color: var(--accent-secondary);
          border-radius: 999px;
          font-weight: normal;
        }
        
        .no-models-message {
          padding: 20px;
          text-align: center;
          color: var(--text-muted);
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
        }
        
        .custom-model-form .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .custom-model-form .form-row:last-child {
          margin-bottom: 0;
        }
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(m=>o.jsx("div",{className:`app-model-item ${c===m.id?"selected":""}`,onClick:()=>u(m.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[m.name,m.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(tv,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[m.provider," / ",m.model_name,m.api_base&&` • ${m.api_base}`]})]})},m.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&o.jsx("div",{className:"custom-model-form",children:o.jsx(iv,{projectId:r,values:e.model||{},onChange:p})})]})}const pc=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function y4({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[...pc,...n],s=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...s,...a]:s;function c(d,p){const f=e[d]||[],h=i.find(m=>m.id===p);h&&t({[d]:[...f,{module_path:h.module_path}]})}function u(d,p){const f=e[d]||[];t({[d]:f.filter((h,m)=>m!==p)})}return o.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:p})=>{const f=e[d]||[],h=i;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:p}),h.length>0&&o.jsxs("select",{value:"",onChange:m=>{m.target.value&&(c(d,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),o.jsx("optgroup",{label:"Built-in",children:pc.filter(m=>!f.some(b=>b.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))}),o.jsx("optgroup",{label:"Custom",children:n.filter(m=>!f.some(b=>b.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))})]})]}),f.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:f.map((m,b)=>{const k=i.find(g=>g.module_path===m.module_path),x=pc.some(g=>g.module_path===m.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:x?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(k==null?void 0:k.description)||"",children:[o.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[x&&o.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(k==null?void 0:k.name)||m.module_path]}),o.jsx("button",{onClick:()=>u(d,b),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Fe,{size:12})})]},b)})})]},d)})})}const fc=[{type:"LlmAgent",label:"LLM Agent",icon:Er,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:aj,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:ij,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:yu,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function v4(){return`agent_${Date.now().toString(36)}`}function b4(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function w4(e,t){const n=v4(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},i={id:n,name:r[e]||"new_agent",description:""},s=t?b4(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...i,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...i,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...i,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...i,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function k4({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:s,setSelectedAgentId:a,mcpServers:l}=dt(),[c,u]=j.useState(new Set),[d,p]=j.useState(!1),[f,h]=j.useState(""),[m,b]=j.useState(new Map),[k,x]=j.useState(380),[g,y]=j.useState(!1),_=j.useRef(null),[A,C]=j.useState(null),P=j.useRef(null),[N,D]=j.useState(null),[E,M]=j.useState(null),L=j.useRef(null),U=j.useRef(null),T=j.useCallback(Q=>{Q.preventDefault(),y(!0)},[]);if(j.useEffect(()=>{const Q=oe=>{if(!g)return;const ve=Math.min(Math.max(200,oe.clientX),600);x(ve)},Z=()=>{y(!1)};return g&&(document.addEventListener("mousemove",Q),document.addEventListener("mouseup",Z),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",Q),document.removeEventListener("mouseup",Z),document.body.style.cursor="",document.body.style.userSelect=""}},[g]),j.useEffect(()=>{if(t){const Q=t.agents.filter(Z=>"sub_agents"in Z&&Z.sub_agents.length>0).map(Z=>Z.id);u(new Set(Q))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;function R(){if(!f.trim()||!t)return;const Q=`generating_${Date.now()}`,Z=f;b(oe=>new Map(oe).set(Q,Z)),p(!1),h(""),$y(t.id,Z).then(oe=>{var ve,_e,Ae,je;if(oe.success&&oe.config){const J=oe.config,ae=[];if((ve=J.tools)!=null&&ve.builtin)for(const te of J.tools.builtin)ae.push({type:"builtin",name:te});if((_e=J.tools)!=null&&_e.mcp)for(const te of J.tools.mcp){const xe=l.find(ue=>ue.name===te.server);xe&&ae.push({type:"mcp",server:{...xe,tool_filter:te.tools}})}if((Ae=J.tools)!=null&&Ae.custom)for(const te of J.tools.custom){const xe=t.custom_tools.find(ue=>ue.name===te);xe&&ae.push({type:"function",name:te,module_path:xe.module_path})}if((je=J.tools)!=null&&je.agents)for(const te of J.tools.agents){const xe=t.agents.find(ue=>ue.id===te);xe&&ae.push({type:"agent",agent_id:te,name:xe.name})}const he=t.app.models||[],ye=he.find(te=>te.id===t.app.default_model_id)||he[0],Y={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:J.name||"new_agent",description:J.description||"",instruction:J.instruction||"",model:ye?{provider:ye.provider,model_name:ye.model_name,api_base:ye.api_base,temperature:ye.temperature,max_output_tokens:ye.max_output_tokens,top_p:ye.top_p,top_k:ye.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:ae,sub_agents:J.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(Y),a(Y.id),e==null||e(Y.id)}else console.error("Failed to generate agent:",oe.error)}).catch(oe=>{console.error("Error generating agent:",oe)}).finally(()=>{b(oe=>{const ve=new Map(oe);return ve.delete(Q),ve})})}const $=t.agents.find(Q=>Q.id===s);function z(Q){a(Q),e==null||e(Q)}function O(Q){if(!t)return;const Z=t.app.models||[],oe=Z.find(_e=>_e.id===t.app.default_model_id)||Z[0],ve=w4(Q,oe);n(ve),z(ve.id)}function I(Q,Z){Z.stopPropagation(),confirm("Delete this agent?")&&(r(Q),s===Q&&(e==null||e(null)))}function w(Q){const Z=new Set(c);Z.has(Q)?Z.delete(Q):Z.add(Q),u(Z)}function H(Q){if(!L.current||!P.current)return;const Z=L.current.getBoundingClientRect(),oe=Q.clientY-Z.top,ve=60,_e=8;if(oe<ve){const Ae=Math.max(1,_e*(1-oe/ve));L.current.scrollTop-=Ae}else if(oe>Z.height-ve){const Ae=Math.max(1,_e*(1-(Z.height-oe)/ve));L.current.scrollTop+=Ae}}function K(Q,Z){Q.dataTransfer.setData("text/plain",Z),Q.dataTransfer.effectAllowed="move",P.current=Z,requestAnimationFrame(()=>C(Z))}function v(){P.current=null,C(null),D(null),M(null),U.current&&(cancelAnimationFrame(U.current),U.current=null)}function V(Q,Z,oe){if(!t||(Q.preventDefault(),Q.stopPropagation(),!P.current))return;const _e=t.agents.find(Ae=>Ae.id===Z);!_e||!("sub_agents"in _e)||(Q.dataTransfer.dropEffect="move",M({parentId:Z,index:oe}),D(null))}function S(Q,Z,oe){if(!t)return;Q.preventDefault(),Q.stopPropagation();const ve=Q.dataTransfer.getData("text/plain");if(!ve)return;const _e=t.agents.find(je=>je.id===Z);if(!_e||!("sub_agents"in _e))return;t.agents.forEach(je=>{"sub_agents"in je&&je.sub_agents.includes(ve)&&i(je.id,{sub_agents:je.sub_agents.filter(J=>J!==ve)})});const Ae=[..._e.sub_agents.filter(je=>je!==ve)];Ae.splice(oe,0,ve),i(Z,{sub_agents:Ae}),u(je=>new Set([...je,Z])),C(null),M(null)}function W(Q,Z,oe){if(!t)return;const ve=P.current;if(Q.preventDefault(),Q.stopPropagation(),ve===Z)return;const _e=t.agents.find(Ae=>Ae.id===ve);_e&&"sub_agents"in _e&&q(_e,Z)||(Q.dataTransfer.dropEffect="move",D({agentId:Z,type:oe}),M(null))}function ie(Q){const Z=Q.relatedTarget;(!Z||!Q.currentTarget.contains(Z))&&D(null)}function ce(Q,Z,oe){if(!t)return;Q.preventDefault(),Q.stopPropagation();const ve=Q.dataTransfer.getData("text/plain");if(!ve||ve===Z)return;const _e=t.agents.find(je=>je.id===Z),Ae=t.agents.find(je=>je.id===ve);if(!(!_e||!Ae)){if(oe==="sub_agent")"sub_agents"in _e&&(t.agents.forEach(je=>{"sub_agents"in je&&je.sub_agents.includes(ve)&&i(je.id,{sub_agents:je.sub_agents.filter(J=>J!==ve)})}),_e.sub_agents.includes(ve)||(i(Z,{sub_agents:[..._e.sub_agents,ve]}),u(je=>new Set([...je,Z]))));else if(oe==="tool"&&"tools"in _e){const je=_e;je.tools.some(ae=>ae.type==="agent"&&ae.agent_id===ve)||i(Z,{tools:[...je.tools,{type:"agent",agent_id:ve,name:Ae.name}]})}C(null),D(null)}}function q(Q,Z){if(!t||!("sub_agents"in Q))return!1;if(Q.sub_agents.includes(Z))return!0;for(const oe of Q.sub_agents){const ve=t.agents.find(_e=>_e.id===oe);if(ve&&q(ve,Z))return!0}return!1}function F(Q){const Z=fc.find(oe=>oe.type===Q);return Z?Z.icon:Er}function G(Q){const Z=fc.find(oe=>oe.type===Q);return Z?Z.color:"#888"}function ee(Q,Z=0){return Q.map(oe=>{const ve=F(oe.type),_e=G(oe.type),Ae="sub_agents"in oe&&oe.sub_agents.length>0,je="sub_agents"in oe,J=oe.type==="LlmAgent",ae=c.has(oe.id),he=A===oe.id,ye=(N==null?void 0:N.agentId)===oe.id&&(N==null?void 0:N.type)==="sub_agent",Y=(N==null?void 0:N.agentId)===oe.id&&(N==null?void 0:N.type)==="tool",te=Ae&&t?oe.sub_agents.map(ue=>t.agents.find(ke=>ke.id===ue)).filter(ue=>ue!==void 0):[],xe=A&&A!==oe.id&&(je||J);return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${s===oe.id?"selected":""} ${he?"dragging":""} ${xe?"drop-target":""}`,onClick:()=>z(oe.id),style:{paddingLeft:12+Z*20},draggable:!0,onDragStart:ue=>K(ue,oe.id),onDragEnd:v,onDragOver:ue=>{xe&&(ue.preventDefault(),ue.stopPropagation())},children:[o.jsx("div",{className:"drag-handle",children:o.jsx(Qk,{size:12})}),Ae?o.jsx("button",{className:"expand-btn",onClick:ue=>{ue.stopPropagation(),w(oe.id)},children:ae?o.jsx(Lt,{size:16}):o.jsx(wt,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:_e},children:o.jsx(ve,{size:14})}),o.jsx("span",{className:"agent-name",children:oe.name}),o.jsx("button",{className:"delete-btn",onClick:ue=>I(oe.id,ue),children:o.jsx(Fe,{size:14})}),xe&&o.jsxs("div",{className:"drop-overlay",children:[je&&o.jsxs("div",{className:`drop-zone-overlay ${ye?"active":""}`,onDragOver:ue=>W(ue,oe.id,"sub_agent"),onDragLeave:ie,onDrop:ue=>ce(ue,oe.id,"sub_agent"),children:[o.jsx(nv,{size:12}),o.jsx("span",{children:"Sub-agent"})]}),J&&o.jsxs("div",{className:`drop-zone-overlay ${Y?"active":""}`,onDragOver:ue=>W(ue,oe.id,"tool"),onDragLeave:ie,onDrop:ue=>ce(ue,oe.id,"tool"),children:[o.jsx(an,{size:12}),o.jsx("span",{children:"Tool"})]})]})]}),Ae&&ae&&o.jsxs("div",{className:"sub-agents",children:[A&&A!==oe.id&&o.jsx("div",{className:`insert-indicator ${(E==null?void 0:E.parentId)===oe.id&&(E==null?void 0:E.index)===0?"active":""}`,style:{marginLeft:12+(Z+1)*20},onDragOver:ue=>V(ue,oe.id,0),onDragLeave:()=>M(null),onDrop:ue=>S(ue,oe.id,0)}),te.map((ue,ke)=>o.jsxs(Ot.Fragment,{children:[ee([ue],Z+1),A&&A!==oe.id&&A!==ue.id&&o.jsx("div",{className:`insert-indicator ${(E==null?void 0:E.parentId)===oe.id&&(E==null?void 0:E.index)===ke+1?"active":""}`,style:{marginLeft:12+(Z+1)*20},onDragOver:qe=>V(qe,oe.id,ke+1),onDragLeave:()=>M(null),onDrop:qe=>S(qe,oe.id,ke+1)})]},ue.id))]})]},oe.id)})}const X=new Set(t.agents.flatMap(Q=>"sub_agents"in Q?Q.sub_agents:[])),le=t.agents.filter(Q=>!X.has(Q.id));return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
        .agents-panel {
          display: flex;
          gap: 20px;
          height: calc(100vh - 180px);
        }
        
        .agents-sidebar {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .sidebar-resizer {
          width: 6px;
          flex-shrink: 0;
          cursor: col-resize;
          background: transparent;
          transition: background 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .sidebar-resizer:hover,
        .sidebar-resizer.resizing {
          background: var(--accent-primary);
        }
        
        .sidebar-resizer::after {
          content: '';
          width: 2px;
          height: 40px;
          background: var(--border-color);
          border-radius: 1px;
          opacity: 0.5;
          transition: opacity 0.15s ease;
        }
        
        .sidebar-resizer:hover::after,
        .sidebar-resizer.resizing::after {
          opacity: 0;
        }
        
        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .sidebar-header h3 {
          font-size: 14px;
          font-weight: 600;
        }
        
        .agents-list {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .agent-item {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .agent-item:hover {
          background: var(--bg-tertiary);
        }
        
        .agent-item.selected {
          background: var(--bg-hover);
          border: 1px solid var(--accent-primary);
        }
        
        .expand-btn {
          padding: 2px;
          color: var(--text-muted);
        }
        
        .agent-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 25px;
          border-radius: var(--radius-sm);
          color: white;
        }
        
        .agent-name {
          flex: 1;
          font-weight: 500;
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .agent-type {
          font-size: 11px;
          color: var(--text-muted);
          padding: 2px 6px;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
        }
        
        .delete-btn {
          padding: 4px;
          color: var(--text-muted);
          opacity: 0;
          transition: all 0.15s ease;
        }
        
        .agent-item:hover .delete-btn {
          opacity: 1;
        }
        
        .delete-btn:hover {
          color: var(--error);
        }
        
        .drag-handle {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          opacity: 0.4;
          cursor: grab;
          padding: 4px;
          margin-left: -10px;
          margin-right: 4px;
          border-radius: var(--radius-sm);
          transition: all 0.15s ease;
        }
        
        .agent-item:hover .drag-handle {
          opacity: 0.8;
          background: var(--bg-tertiary);
        }
        
        .agent-item:active .drag-handle {
          cursor: grabbing;
        }
        
        .agent-item.dragging {
          opacity: 0.5;
          background: var(--bg-tertiary);
          border: 1px dashed var(--accent-primary);
        }
        
        .agent-item.drop-target {
          position: relative;
        }
        
        .drop-overlay {
          position: absolute;
          top: 0;
          right: 8px;
          bottom: 0;
          display: flex;
          align-items: center;
          gap: 4px;
          opacity: 1;
          pointer-events: auto;
          z-index: 10;
        }
        
        .drop-zone-overlay {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .drop-zone-overlay:hover,
        .drop-zone-overlay.active {
          border-color: var(--accent-primary);
          background: var(--accent-primary);
          color: white;
        }
        
        .insert-indicator {
          position: relative;
          height: 0;
          margin: 0;
        }
        
        /* Invisible drop target that extends above/below */
        .insert-indicator::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: -8px;
          bottom: -8px;
          z-index: 10;
        }
        
        /* Visual indicator line - only shows when active */
        .insert-indicator::after {
          content: '';
          position: absolute;
          left: 0;
          right: 12px;
          top: -1px;
          height: 2px;
          border-radius: 1px;
          background: transparent;
          transition: background 0.15s ease, box-shadow 0.15s ease;
          pointer-events: none;
        }
        
        .insert-indicator:hover::after,
        .insert-indicator.active::after {
          background: var(--accent-primary);
          box-shadow: 0 0 8px rgba(124, 58, 237, 0.5);
        }
        
        .sub-agents {
          position: relative;
        }

        .agent-editor-area {
          flex: 1;
          min-width: 0;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--text-muted);
          text-align: center;
          padding: 40px;
        }
        
        .empty-state svg {
          margin-bottom: 16px;
          opacity: 0.3;
        }
        
        .type-selector {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }
        
        .type-selector-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px;
          max-width: 500px;
          width: 100%;
        }
        
        .type-selector h2 {
          margin-bottom: 20px;
        }
        
        .header-buttons {
          display: flex;
          gap: 4px;
        }
        
        .quick-add-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: var(--radius-sm);
          color: white;
          border: none;
          cursor: pointer;
          transition: all 0.15s ease;
          opacity: 0.85;
        }
        
        .quick-add-btn:hover {
          opacity: 1;
          transform: scale(1.05);
        }
        
        .generating-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-left: 8px;
          padding: 2px 6px;
          background: var(--accent-primary);
          color: white;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 500;
        }
        
        .quick-setup-content {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 24px;
          max-width: 600px;
          width: 100%;
        }
        
        .quick-setup-content h2 {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        
        .quick-setup-content h2 svg {
          color: var(--accent-primary);
        }
        
        .quick-setup-desc {
          color: var(--text-secondary);
          margin-bottom: 16px;
          font-size: 14px;
        }
        
        .quick-setup-form textarea {
          width: 100%;
          min-height: 100px;
          margin-bottom: 16px;
          font-size: 14px;
          line-height: 1.5;
        }
        
        .quick-setup-info {
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin-bottom: 16px;
          font-size: 13px;
        }
        
        .quick-setup-info strong {
          display: block;
          margin-bottom: 8px;
          color: var(--text-primary);
        }
        
        .quick-setup-info ul {
          margin: 0;
          padding-left: 20px;
          color: var(--text-muted);
        }
        
        .quick-setup-info li {
          margin-bottom: 4px;
        }
        
        .quick-setup-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .type-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        
        .type-option {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
          text-align: left;
        }
        
        .type-option:hover {
          border-color: var(--accent-primary);
          background: var(--bg-hover);
        }
        
        .type-option-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          color: white;
          flex-shrink: 0;
        }
        
        .type-option-info h4 {
          margin-bottom: 4px;
        }
        
        .type-option-info p {
          font-size: 12px;
          color: var(--text-muted);
        }
      `}),o.jsxs("aside",{className:"agents-sidebar",style:{width:k},children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")",m.size>0&&o.jsxs("span",{className:"generating-badge",children:[o.jsx(Zn,{size:12,className:"spin"})," ",m.size]})]}),o.jsxs("div",{className:"header-buttons",children:[fc.map(({type:Q,icon:Z,color:oe})=>o.jsx("button",{className:"quick-add-btn",style:{background:oe},onClick:()=>O(Q),title:`Add ${Q}`,children:o.jsx(Z,{size:14})},Q)),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:o.jsx(Ql,{size:14})})]})]}),o.jsx("div",{className:"agents-list",ref:L,onDragOver:H,children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Er,{size:32}),o.jsx("p",{children:"No agents yet"})]}):ee(le)})]}),o.jsx("div",{ref:_,className:`sidebar-resizer ${g?"resizing":""}`,onMouseDown:T}),o.jsx("div",{className:"agent-editor-area",children:$?o.jsx(m4,{agent:$}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Er,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),d&&o.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:Q=>Q.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(Ql,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:f,onChange:Q=>h(Q.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:Q=>{Q.key==="Enter"&&(Q.metaKey||Q.ctrlKey)&&f.trim()&&R()}}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[l.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:R,disabled:!f.trim(),children:[o.jsx(Ql,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var lp="\x1B[0m",cp="\x1B[1m",Yv=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",j4=e=>{let t=Yv(e),n=`${cp}[MONACOPILOT ERROR] ${t}${lp}`;return console.error(n),{message:t}},_4=(e,t)=>{console.warn(`${cp}[MONACOPILOT WARN] ${e}${t?`
${Yv(t)}`:""}${lp}`)},S4=(e,t,n)=>console.warn(`${cp}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${lp}`),Ma={report:j4,warn:_4,warnDeprecated:S4},vm=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let s=r.slice(0,t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)},C4=100,N4=!0,Qv="onIdle",E4=!0,z4=120,T4=400,A4=0,up=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),P4=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),L4=e=>e.getValue(),M4=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Xv=class Zv{constructor(){this.cache=new M4(Zv.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=up(n,r),a=s,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${s}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=s-1&&u<=l+1:c===i?u>=s-1:c===a?u<=l+1:!0}};Xv.MAX_CACHE_SIZE=20;var R4=Xv,I4=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],a=s.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},O4=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let h=e.substring(0,f),m=t.slice(-f);h===m&&(c=f)}let d=Math.min(r,s);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},$4=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new O4}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,s),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,a=n+s,l=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},D4=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},F4=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:a,maxContextLines:l=C4}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(b,k,x)=>{let g=b(e,t);return k?vm(g,k,x):g},p=(b,k)=>!b||!k?b:b.map(({content:x,...g})=>({...g,content:vm(x,k)})),f=d(up,u,{truncateDirection:"keepEnd"}),h=d(P4,u,{truncateDirection:"keepStart"}),m=p(a,u);return{filename:r,language:i,technologies:s,relatedFiles:m,textBeforeCursor:f,textAfterCursor:h,cursorPosition:e}},B4=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:s,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},U4=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,Ji=e=>({items:e,enableForwardStability:!0}),Pu=new R4,V4=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:a=Qv,enableCaching:l=N4,allowFollowUpCompletions:c=E4,onError:u,requestHandler:d}=s;if(l&&!i){let p=Pu.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return Ji(p)}if(r.isCancellationRequested||!c&&i)return Ji([]);try{let p=B4(async m=>{var k,x;(k=s.onCompletionRequested)==null||k.call(s,m);let b;if(d)b=await d(m);else if(s.endpoint)b=await D4({endpoint:s.endpoint,...m});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(b.error)throw new Error(b.error);return(x=s.onCompletionRequestFinished)==null||x.call(s,m,b),b},{onTyping:z4,onIdle:T4,onDemand:A4}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=F4({pos:n,mdl:t,options:s}),{completion:h}=await p({body:{completionMetadata:f}});if(h){let m=new I4(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),b=new $4(e);return l&&Pu.add({completion:m,range:b.computeCacheRange(n,m),textBeforeCursor:up(n,t)}),Ji([{insertText:m,range:b.computeInsertionRange(n,m,t)}])}}catch(p){if(U4(p))return Ji([]);u?u(p):Ma.warn("Cannot provide completion",p)}return Ji([])},dp=new WeakMap,hl=e=>dp.get(e),W4=(e,t)=>{dp.set(e,t)},bm=e=>{dp.delete(e)},H4=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),q4=(e,t)=>{let n=hl(e);!n||!n.options||(n.options={...n.options,...t})},J4=(e,t,n)=>{let r=hl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:L4(t),position:s,triggerType:c.trigger??Qv})))return V4({monaco:e,mdl:i,pos:s,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,s.range))},freeInlineCompletions:()=>{}}):null},K4={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},G4=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(K4).some(t=>t(this.monaco,e))}},Y4=(e,t,n,r)=>{let i=new G4(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},e1=(e,t,n)=>{let r=[];W4(t,H4(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=hl(t);if(!i)return Ma.warn("Completion is not registered properly. State not found."),X4();let s=J4(e,t,n);s&&r.push(s);let a=Y4(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();Pu.clear(),bm(t)},trigger:()=>Q4(t),updateOptions:l=>{q4(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Ma.report(i),{deregister:()=>{for(let s of r)s.dispose();bm(t)},trigger:()=>{},updateOptions:()=>{}}}},Q4=e=>{let t=hl(e);if(!t){Ma.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},X4=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function Z4(){return`tool_${Date.now().toString(36)}`}function eE(e){return/^[a-zA-Z0-9_]+$/.test(e)}const tE=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
    """Description of what this tool does.
    
    This description is shown to the LLM to help it understand when and how to use this tool.
    Be clear and specific about what the tool does and when it should be used.
    
    Args:
        tool_context: The tool context (MUST be the first parameter, named 'tool_context').
            Provides access to state, actions, memory, artifacts, and more.
        param1: Description of this parameter. The LLM uses this to understand what to pass.
            Use type hints (str, int, bool, dict, list, etc.) - the LLM uses these!
    
    Returns:
        A dictionary with the result. This will be converted to JSON and sent to the LLM.
        Always return a dict, even for errors: {"success": False, "error": "message"}
    """
    # ============================================================
    # State Management
    # ============================================================
    # Read state: value = tool_context.state.get('key', default_value)
    # Read state: value = tool_context.state['key']
    # Write state: tool_context.state['key'] = value
    # State changes are automatically tracked in state_delta
    
    # ============================================================
    # Control Flow Actions
    # ============================================================
    # Escalate to parent agent (exit loops):
    #   tool_context.actions.escalate = True
    #   tool_context.actions.skip_summarization = True
    
    # Skip LLM summarization of tool result:
    #   tool_context.actions.skip_summarization = True
    
    # Access state delta (changes made in this tool):
    #   delta = tool_context.actions.state_delta
    
    # ============================================================
    # Context Information
    # ============================================================
    # Agent info: tool_context.agent_name
    # Invocation info: tool_context.invocation_id
    # Function call ID: tool_context.function_call_id
    
    # ============================================================
    # Memory Service (async)
    # ============================================================
    # Search memory: results = await tool_context.search_memory(query)
    #   Returns: SearchMemoryResponse with .memories list
    
    # ============================================================
    # Artifacts (async)
    # ============================================================
    # List artifacts: artifacts = await tool_context.list_artifacts()
    # Load artifact: artifact = await tool_context.load_artifact(filename, version=None)
    # Save artifact: version = await tool_context.save_artifact(filename, artifact, custom_metadata=None)
    # Example:
    #   from google.genai import types
    #   artifact = types.Part.from_text(text="some content")
    #   version = await tool_context.save_artifact("report.txt", artifact)
    
    # ============================================================
    # Authentication
    # ============================================================
    # Request credentials: tool_context.request_credential(auth_config)
    # Get auth response: credential = tool_context.get_auth_response(auth_config)
    
    # ============================================================
    # User Confirmation
    # ============================================================
    # Request user confirmation before proceeding:
    #   tool_context.request_confirmation(hint="Are you sure?", payload={"action": "delete"})
    
    # ============================================================
    # Error Handling
    # ============================================================
    # Always handle errors gracefully and return informative messages:
    #   try:
    #       result = process(param1)
    #       return {"success": True, "result": result}
    #   except ValueError as e:
    #       return {"success": False, "error": f"Invalid input: {e}"}
    #   except Exception as e:
    #       return {"success": False, "error": f"Unexpected error: {e}"}
    
    # ============================================================
    # Async Tools
    # ============================================================
    # If you need async operations, make the function async:
    #   async def my_async_tool(tool_context: ToolContext, query: str) -> dict:
    #       results = await tool_context.search_memory(query)
    #       return {"memories": [m.text for m in results.memories]}
    
    return {"result": "success"}
`;function nE({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=dt(),[d,p]=j.useState(""),[f,h]=j.useState(null),[m,b]=j.useState("tools"),[k,x]=j.useState(null),[g,y]=j.useState(""),[_,A]=j.useState(!1),[C,P]=j.useState(!1),[N,D]=j.useState(!1),[E,M]=j.useState(null),[L,U]=j.useState(null),[T,R]=j.useState({}),[$,z]=j.useState({}),[O,I]=j.useState("");if(!t)return null;const w=t.mcp_servers||[],H=t.custom_tools.find(J=>J.id===a),K=w.find(J=>J.name===k);function v(J){l(J),e==null||e(J)}j.useEffect(()=>{H&&(p(H.code),U(null))},[a]),j.useEffect(()=>{K&&(y(JSON.stringify(K,null,2)),A(!1))},[k]),j.useEffect(()=>{if(!t)return;const J=V(t.mcp_servers||[]);I(JSON.stringify(J,null,2))},[t==null?void 0:t.mcp_servers]),j.useEffect(()=>{if(m==="mcp"&&w.length>0){const J=w.filter(ae=>!T[ae.name]||T[ae.name]==="unknown");J.length>0&&J.forEach(ae=>{ce(ae.name)})}},[m,w.length]);function V(J){const ae={};for(const he of J){const ye={};he.connection_type==="stdio"?(ye.command=he.command||"",ye.args=he.args||[],Object.keys(he.env||{}).length>0&&(ye.env=he.env)):he.connection_type==="sse"&&(ye.url=he.url||"",Object.keys(he.headers||{}).length>0&&(ye.headers=he.headers)),he.timeout&&he.timeout!==30&&(ye.timeout=he.timeout),he.tool_filter&&(ye.tool_filter=he.tool_filter),he.tool_name_prefix&&(ye.tool_name_prefix=he.tool_name_prefix),ae[he.name]=ye}return{mcpServers:ae}}function S(J){const ae=[];for(const[he,ye]of Object.entries(J.mcpServers||{})){const Y={name:he,description:ye.description||"",connection_type:ye.url?"sse":"stdio",command:ye.command,args:ye.args||[],env:ye.env||{},url:ye.url,headers:ye.headers||{},timeout:ye.timeout||30,tool_filter:ye.tool_filter||null,tool_name_prefix:ye.tool_name_prefix};ae.push(Y)}return ae}function W(J){J!==void 0&&I(J)}function ie(){try{const J=JSON.parse(O),ae=S(J);n({mcp_servers:ae})}catch(J){alert("Invalid JSON: "+J.message)}}async function ce(J){const ae=w.find(he=>he.name===J);if(ae){R(he=>({...he,[J]:"testing"})),z(he=>({...he,[J]:""}));try{const he=await xu({connection_type:ae.connection_type,command:ae.command,args:ae.args,env:ae.env,url:ae.url,headers:ae.headers,timeout:ae.timeout});R(ye=>({...ye,[J]:he.success?"connected":"error"})),!he.success&&he.error&&z(ye=>({...ye,[J]:he.error||"Unknown error"}))}catch(he){R(ye=>({...ye,[J]:"error"})),z(ye=>({...ye,[J]:he.message}))}}}function q(J){const ae=u.find(ye=>ye.name===J);if(!ae)return;if(w.some(ye=>ye.name===J)){alert(`Server "${J}" is already configured`);return}const he={name:ae.name,description:ae.description||"",connection_type:ae.connection_type,command:ae.command,args:ae.args||[],env:ae.env||{},url:ae.url,headers:ae.headers||{},timeout:ae.timeout||30,tool_filter:ae.tool_filter||null,tool_name_prefix:ae.tool_name_prefix};n({mcp_servers:[...w,he]})}async function F(){for(const J of w)await ce(J.name)}function G(){const J=Z4();r({id:J,name:"new_tool",description:"",module_path:"tools.custom",code:tE,state_keys_used:[]}),v(J)}function ee(J,ae){ae.stopPropagation(),confirm("Delete this tool?")&&(s(J),a===J&&(e==null||e(null)))}function X(J){H&&(J.name!==void 0&&(J.name===""||eE(J.name)?U(null):U("Name can only contain letters, numbers, and underscores")),i(H.id,J))}function le(J){J!==void 0&&H&&(p(J),X({code:J}))}async function Q(){if(H){P(!0);try{const J=await Dy(t.id,H.name,H.description,H.state_keys_used);J.success&&J.code?(p(J.code),X({code:J.code})):(console.error("Failed to generate tool code:",J.error),alert("Failed to generate tool code: "+(J.error||"Unknown error")))}catch(J){console.error("Error generating tool code:",J),alert("Error generating tool code: "+J.message)}finally{P(!1)}}}const Z=j.useRef(null),oe=j.useCallback((J,ae)=>{if(Z.current&&typeof Z.current=="function")try{Z.current()}catch{}try{const he=e1(ae,J,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof he=="function"?Z.current=he:Z.current=null}catch{Z.current=null}},[]);j.useEffect(()=>()=>{if(Z.current&&typeof Z.current=="function")try{Z.current()}catch{}},[]);function ve(J){J!==void 0&&(y(J),A(J!==JSON.stringify(K,null,2)))}function _e(){if(K)try{const J=JSON.parse(g),ae=K.name,he=w.map(ye=>ye.name===ae?J:ye);n({mcp_servers:he}),x(J.name),A(!1)}catch(J){alert("Invalid JSON: "+J.message)}}async function Ae(){D(!0),M(null);try{const J=JSON.parse(g),ae=await xu({connection_type:J.connection_type,command:J.command,args:J.args,env:J.env,url:J.url,headers:J.headers,timeout:J.timeout||30});if(M(ae),ae.success&&ae.tools.length>0){const he={...J,tool_filter:ae.tools.map(ye=>ye.name)};y(JSON.stringify(he,null,2)),A(!0)}}catch(J){M({success:!1,tools:[],error:J.message})}finally{D(!1)}}const je={};return t.custom_tools.forEach(J=>{const ae=J.module_path||"tools";je[ae]||(je[ae]=[]),je[ae].push(J)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
        .tools-panel {
          display: flex;
          gap: 20px;
          height: calc(100vh - 180px);
        }
        
        .tools-sidebar {
          width: 280px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .sidebar-header h3 {
          font-size: 14px;
          font-weight: 600;
        }
        
        .tools-tree {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .module-group {
          margin-bottom: 8px;
        }
        
        .module-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .module-header svg {
          color: var(--accent-secondary);
        }
        
        .tool-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          margin-left: 20px;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .tool-item:hover {
          background: var(--bg-tertiary);
        }
        
        .tool-item.selected {
          background: var(--bg-hover);
          border: 1px solid var(--accent-primary);
        }
        
        .tool-item svg {
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        
        .tool-name {
          flex: 1;
          font-size: 13px;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .delete-btn {
          padding: 4px;
          color: var(--text-muted);
          opacity: 0;
          transition: all 0.15s ease;
        }
        
        .tool-item:hover .delete-btn {
          opacity: 1;
        }
        
        .delete-btn:hover {
          color: var(--error);
        }
        
        .tool-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .editor-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .editor-header input {
          flex: 1;
          font-size: 1.1rem;
          font-weight: 600;
          background: transparent;
          border: none;
          padding: 4px 8px;
        }
        
        .editor-header input:focus {
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .editor-meta {
          display: flex;
          gap: 16px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
          background: var(--bg-tertiary);
        }
        
        .meta-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .meta-field label {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        
        .meta-field input, .meta-field textarea {
          padding: 6px 10px;
          font-size: 13px;
        }
        
        .meta-field.grow {
          flex: 1;
        }
        
        .code-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 16px;
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-color);
        }
        
        .code-actions .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        
        .code-actions .action-hint {
          font-size: 11px;
          color: var(--text-muted);
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .code-editor {
          flex: 1;
          min-height: 0;
        }
        
        .state-keys-panel {
          padding: 12px 16px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-tertiary);
        }
        
        .state-keys-panel h4 {
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .state-keys-panel h4 svg {
          color: var(--accent-primary);
        }
        
        .state-key-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .state-key-chip {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          font-size: 12px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .state-key-chip:hover {
          background: var(--bg-hover);
        }
        
        .state-key-chip.selected {
          background: var(--accent-primary);
          color: var(--bg-primary);
        }
        
        .state-key-chip input {
          width: 12px;
          height: 12px;
          margin: 0;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--text-muted);
          text-align: center;
          padding: 40px;
        }
        
        .empty-state svg {
          margin-bottom: 16px;
          opacity: 0.3;
        }
        
        .unsaved-badge {
          font-size: 11px;
          padding: 2px 8px;
          background: rgba(255, 217, 61, 0.15);
          color: var(--warning);
          border-radius: 999px;
        }
        
        .tool-item.builtin svg {
          color: var(--accent-secondary);
        }
        
        .tool-item.builtin .tool-name {
          color: var(--text-secondary);
        }
        
        .builtin-tool-info {
          padding: 24px;
          flex: 1;
          overflow-y: auto;
        }
        
        .info-section {
          margin-bottom: 24px;
        }
        
        .info-section h4 {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 8px;
        }
        
        .info-section p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }
        
        .info-section code {
          display: block;
          padding: 12px 16px;
          background: var(--bg-primary);
          border-radius: var(--radius-md);
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent-primary);
        }
        
        .badge-muted {
          background: var(--bg-tertiary);
          color: var(--text-muted);
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 999px;
        }
        
        .sidebar-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
        }
        
        .sidebar-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .sidebar-tab:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }
        
        .sidebar-tab.active {
          color: var(--accent-primary);
          background: var(--bg-tertiary);
          border-bottom: 2px solid var(--accent-primary);
        }
        
        .tool-type-badge {
          font-size: 10px;
          padding: 2px 6px;
          background: var(--bg-primary);
          color: var(--text-muted);
          border-radius: 4px;
          text-transform: uppercase;
        }
        
        .mcp-info {
          padding: 12px 16px;
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-color);
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .mcp-test-result {
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
          font-size: 13px;
        }
        
        .mcp-test-result.success {
          background: rgba(0, 245, 212, 0.1);
          border-left: 3px solid var(--accent-primary);
        }
        
        .mcp-test-result.error {
          background: rgba(255, 107, 107, 0.1);
          border-left: 3px solid var(--error);
        }
        
        .mcp-test-result .test-result-header {
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .mcp-test-result.success .test-result-header {
          color: var(--accent-primary);
        }
        
        .mcp-test-result.error .test-result-header {
          color: var(--error);
        }
        
        .mcp-test-result .test-result-error {
          color: var(--error);
          font-family: var(--font-mono);
          font-size: 12px;
          white-space: pre-wrap;
          word-break: break-word;
        }
        
        .mcp-test-result .test-result-tools ul {
          margin: 8px 0;
          padding-left: 20px;
          max-height: 200px;
          overflow-y: auto;
        }
        
        .mcp-test-result .test-result-tools li {
          margin: 4px 0;
          line-height: 1.4;
        }
        
        .mcp-test-result .test-result-tools code {
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
        }
        
        .mcp-test-result .hint {
          margin-top: 8px;
          font-size: 12px;
          color: var(--text-muted);
          font-style: italic;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .mcp-servers-list {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .mcp-server-item-wrapper {
          margin-bottom: 6px;
        }
        
        .mcp-server-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          transition: all 0.15s ease;
        }
        
        .mcp-server-item:hover {
          background: var(--bg-primary);
        }
        
        .mcp-server-error {
          padding: 6px 12px;
          margin-top: 2px;
          background: rgba(var(--error-rgb, 239, 68, 68), 0.1);
          border-radius: 0 0 var(--radius-md) var(--radius-md);
          font-size: 11px;
          color: var(--text-secondary);
          word-break: break-word;
          max-height: 60px;
          overflow-y: auto;
        }
        
        .mcp-server-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .mcp-server-name {
          font-weight: 500;
        }
        
        .mcp-status-badge {
          width: 8px;
          height: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
        }
        
        .mcp-status-badge.unknown {
          color: var(--text-muted);
        }
        
        .mcp-status-badge.connected {
          color: var(--accent-primary);
        }
        
        .mcp-status-badge.error {
          color: var(--error);
        }
        
        .mcp-status-badge.testing {
          color: var(--accent-secondary);
        }
        
        .mcp-server-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .mcp-server-type {
          font-size: 11px;
          color: var(--text-muted);
          text-transform: uppercase;
        }
        
        .mcp-json-editor {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .mcp-json-info {
          padding: 12px 16px;
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-color);
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .mcp-json-info code {
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: var(--font-mono);
        }
        
        .mcp-help {
          padding: 16px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-tertiary);
        }
        
        .mcp-help h4 {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        
        .schema-fields {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .schema-field {
          display: flex;
          align-items: baseline;
          gap: 12px;
          font-size: 12px;
        }
        
        .schema-field code {
          font-family: var(--font-mono);
          color: var(--accent-primary);
          background: var(--bg-secondary);
          padding: 2px 6px;
          border-radius: 4px;
          min-width: 120px;
        }
        
        .schema-field span {
          color: var(--text-muted);
        }
        
        .tool-item.known-server svg {
          color: var(--accent-secondary);
        }
        
        .known-server-preview {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
        }
        
        .preview-section {
          margin-bottom: 20px;
        }
        
        .preview-section h4 {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 8px;
        }
        
        .preview-section p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        
        .preview-section > code {
          display: block;
          padding: 12px;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent-primary);
          word-break: break-all;
        }
        
        .env-vars {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .env-var {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .env-var code {
          font-family: var(--font-mono);
          color: var(--accent-primary);
          font-size: 12px;
        }
        
        .env-value {
          font-size: 12px;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }
        
        .env-required {
          font-size: 11px;
          padding: 2px 8px;
          background: rgba(255, 107, 107, 0.15);
          color: var(--error);
          border-radius: 999px;
        }
        
        .tool-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .tool-badge {
          padding: 4px 10px;
          background: rgba(0, 245, 212, 0.1);
          color: var(--accent-primary);
          border-radius: 999px;
          font-size: 12px;
          font-family: var(--font-mono);
        }
        
        .config-preview {
          padding: 12px;
          background: var(--bg-primary);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 12px;
          overflow-x: auto;
          max-height: 200px;
          overflow-y: auto;
        }
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${m==="tools"?"active":""}`,onClick:()=>{b("tools"),x(null)},children:[o.jsx(an,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${m==="mcp"?"active":""}`,onClick:()=>{b("mcp"),l(null),h(null),x(null)},children:[o.jsx(Vi,{size:14}),"MCP"]})]}),m==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:G,children:[o.jsx(Ge,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(tj,{size:14}),"Built-in Tools"]}),c.map(J=>o.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===J.name?"selected":""}`,onClick:()=>{h(J),v(null),x(null)},children:[o.jsx(vu,{size:14}),o.jsx("span",{className:"tool-name",children:J.name})]},J.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(wn,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(je).map(([J,ae])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Gy,{size:14}),J]}),ae.map(he=>o.jsxs("div",{className:`tool-item ${a===he.id?"selected":""}`,onClick:()=>{v(he.id),h(null),x(null)},children:[o.jsx(an,{size:14}),o.jsx("span",{className:"tool-name",children:he.name}),o.jsx("button",{className:"delete-btn",onClick:ye=>ee(he.id,ye),children:o.jsx(Fe,{size:14})})]},he.id))]},J))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",w.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:F,title:"Test all server connections",children:o.jsx(rn,{size:14})})]}),o.jsx("div",{className:"mcp-servers-list",children:w.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Vi,{size:32}),o.jsx("p",{children:"No MCP servers configured"}),o.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):w.map(J=>{const ae=T[J.name]||"unknown",he=$[J.name];return o.jsxs("div",{className:"mcp-server-item-wrapper",children:[o.jsxs("div",{className:"mcp-server-item",children:[o.jsxs("div",{className:"mcp-server-info",children:[o.jsx(Vi,{size:14}),o.jsx("span",{className:"mcp-server-name",children:J.name}),o.jsxs("span",{className:`mcp-status-badge ${ae}`,children:[ae==="testing"?o.jsx(Zn,{size:10,className:"spin"}):null,ae==="unknown"&&"●",ae==="connected"&&"●",ae==="error"&&"●"]})]}),o.jsxs("div",{className:"mcp-server-actions",children:[o.jsx("span",{className:"mcp-server-type",children:J.connection_type}),o.jsxs("button",{className:"btn btn-sm",onClick:()=>ce(J.name),disabled:ae==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[ae==="testing"?o.jsx(Zn,{size:12,className:"spin"}):o.jsx(rn,{size:12}),o.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),ae==="error"&&he&&o.jsxs("div",{className:"mcp-server-error",children:[o.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",he]})]},J.name)})})]})]}),o.jsx("div",{className:"tool-editor",children:f?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(vu,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:f.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):H?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(an,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:H.name,onChange:J=>X({name:J.target.value}),placeholder:"Tool name",style:{borderColor:L?"var(--error)":void 0}}),L&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:L})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:H.description,onChange:J=>X({description:J.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:H.module_path,onChange:J=>X({module_path:J.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Q,disabled:C||!H.name||!H.description,title:!H.name||!H.description?"Add a name and description first":"Generate code using AI",children:C?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Hd,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(Kt,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:le,onMount:oe,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(Vd,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(J=>{const ae=H.state_keys_used.includes(J.name);return o.jsxs("label",{className:`state-key-chip ${ae?"selected":""}`,title:J.description,children:[o.jsx("input",{type:"checkbox",checked:ae,onChange:he=>{const ye=he.target.checked?[...H.state_keys_used,J.name]:H.state_keys_used.filter(Y=>Y!==J.name);X({state_keys_used:ye})}}),J.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",J.type,")"]})]},J.name)})})]})]}):K?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Vi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:K.name}),o.jsx("span",{className:"badge badge-info",children:K.connection_type}),_&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:Ae,disabled:N,title:"Test connection and discover available tools",children:[N?o.jsx(Zn,{size:14,className:"spin"}):o.jsx(Ud,{size:14}),N?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:_e,disabled:!_,children:[o.jsx(Ta,{size:14}),"Save"]})]}),E&&o.jsx("div",{className:`mcp-test-result ${E.success?"success":"error"}`,children:E.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",E.tools.length," tools"]}),E.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:E.tools.map(J=>o.jsxs("li",{children:[o.jsx("code",{children:J.name}),J.description&&o.jsxs("span",{children:[" — ",J.description]})]},J.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:E.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(Kt,{height:"100%",language:"json",theme:"vs-dark",value:g,onChange:ve,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):m==="mcp"?o.jsxs("div",{className:"mcp-json-editor",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Vi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),o.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),o.jsxs("select",{value:"",onChange:J=>{J.target.value&&q(J.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[o.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(J=>!w.some(ae=>ae.name===J.name)).map(J=>o.jsxs("option",{value:J.name,children:[J.name," - ",J.description||"No description"]},J.name))]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ie,children:[o.jsx(Ta,{size:14}),"Apply Changes"]})]}),o.jsx("div",{className:"mcp-json-info",children:o.jsxs("p",{children:["Configure your MCP servers using the standard ",o.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),o.jsx("div",{className:"editor-content",style:{flex:1},children:o.jsx(Kt,{height:"100%",defaultLanguage:"json",value:O,onChange:W,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(wn,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function rE(){return`callback_${Date.now().toString(36)}`}function wm(e){return/^[a-zA-Z0-9_]+$/.test(e)}function t1(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
from typing import Optional
from google.genai import types

def my_callback(callback_context: CallbackContext) -> Optional[types.Content]:
    """Description of what this callback does.
    
    Args:
        callback_context: The callback context containing agent and state information.
            MUST be named 'callback_context' (enforced by ADK).
    
    Returns:
        Optional[types.Content]: Return a Content object to short-circuit (before_*) or add response (after_*), or None to proceed normally.
    """
    # ============================================================
    # State Management
    # ============================================================
    # Read state: callback_context.state.get('key', default_value)
    # Write state: callback_context.state['key'] = value
    # State changes are automatically tracked in state_delta
    
    # ============================================================
    # Short-circuiting Execution (before_agent only)
    # ============================================================
    # Return Content to skip agent execution:
    #   return types.Content(
    #       role="assistant",
    #       parts=[types.Part.from_text(text="Custom response")]
    #   )
    
    return None
`;case"before_model":return`from google.adk.agents.callback_context import CallbackContext
from google.adk.models.llm_request import LlmRequest, LlmResponse
from typing import Optional

def my_callback(*, callback_context: CallbackContext, llm_request: LlmRequest) -> Optional[LlmResponse]:
    """Description of what this callback does.
    
    Args:
        callback_context: The callback context (MUST be named 'callback_context').
        llm_request: The LLM request about to be made.
    
    Returns:
        Optional[LlmResponse]: Return LlmResponse to short-circuit, or None to proceed.
    """
    # ============================================================
    # State Management
    # ============================================================
    # Read state: callback_context.state.get('key', default_value)
    # Write state: callback_context.state['key'] = value
    
    # ============================================================
    # Short-circuiting Execution
    # ============================================================
    # Return LlmResponse to skip model call:
    #   from google.genai import types
    #   return LlmResponse(
    #       contents=[types.Content(role="assistant", parts=[types.Part.from_text(text="Custom response")])]
    #   )
    
    return None
`;case"after_model":return`from google.adk.agents.callback_context import CallbackContext
from google.adk.models.llm_request import LlmResponse
from typing import Optional

def my_callback(*, callback_context: CallbackContext, llm_response: LlmResponse) -> Optional[LlmResponse]:
    """Description of what this callback does.
    
    Args:
        callback_context: The callback context (MUST be named 'callback_context').
        llm_response: The LLM response that was received.
    
    Returns:
        Optional[LlmResponse]: Return modified LlmResponse or None to keep original.
    """
    # ============================================================
    # State Management
    # ============================================================
    # Read state: callback_context.state.get('key', default_value)
    # Write state: callback_context.state['key'] = value
    
    # ============================================================
    # Accessing Response
    # ============================================================
    # Access response content: llm_response.content
    # Access usage metadata: llm_response.usage_metadata
    
    return None
`;case"before_tool":return`from google.adk.tools.base_tool import BaseTool
from google.adk.tools.tool_context import ToolContext
from typing import Dict, Any, Optional

def my_callback(tool: BaseTool, tool_args: Dict[str, Any], tool_context: ToolContext) -> Optional[Dict]:
    """Description of what this callback does.
    
    Args:
        tool: The tool about to be called.
        tool_args: The arguments passed to the tool.
        tool_context: The tool context.
    
    Returns:
        Optional[Dict]: Return modified args or None to use original.
    """
    # ============================================================
    # State Management
    # ============================================================
    # Access state via tool_context: tool_context.state.get('key')
    # Modify tool_args to change what gets passed to the tool
    
    return None
`;case"after_tool":return`from google.adk.tools.base_tool import BaseTool
from google.adk.tools.tool_context import ToolContext
from typing import Dict, Any, Optional

def my_callback(tool: BaseTool, tool_args: Dict[str, Any], tool_context: ToolContext, result: Dict) -> Optional[Dict]:
    """Description of what this callback does.
    
    Args:
        tool: The tool that was called.
        tool_args: The arguments that were passed.
        tool_context: The tool context.
        result: The result from the tool.
    
    Returns:
        Optional[Dict]: Return modified result or None to keep original.
    """
    # ============================================================
    # State Management
    # ============================================================
    # Access state via tool_context: tool_context.state.get('key')
    # Modify result to change what gets returned
    
    return None
`;default:return t1("before_agent")}}function iE({onSelectCallback:e}){var N,D;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=dt(),[a,l]=j.useState(""),[c,u]=j.useState(null),[d,p]=j.useState(null),[f,h]=j.useState(!1),m=j.useRef(null);if(!t)return null;const b=t.custom_callbacks||[],k=b.find(E=>E.id===c);function x(E){u(E),e==null||e(E)}j.useEffect(()=>{k?(l(k.code),p(null)):l("")},[c,k]);function g(){const E=rE(),M="new_callback",L={id:E,name:M,description:"",module_path:`callbacks.${M}`,code:t1("before_agent"),state_keys_used:[]};r(L),x(E)}function y(E,M){M.stopPropagation(),confirm("Delete this callback?")&&(s(E),c===E&&(e==null||e(null),u(null),l("")))}function _(){if(!c)return;const E=b.find(U=>U.id===c);if(!E)return;const M=E.name.trim();if(!M){alert("Please enter a name");return}if(!wm(M)){p("Name must contain only alphanumeric characters and underscores");return}if(b.find(U=>U.name===M&&U.id!==E.id)){p("A callback with this name already exists");return}i(E.id,{code:a,name:M,description:E.description,module_path:`callbacks.${M}`,state_keys_used:E.state_keys_used}),p(null)}function A(E,M){m.current=M;try{e1(M,{endpoint:"/api/code-completion",language:"python"})}catch(L){console.warn("Failed to register Monacopilot completion:",L)}}async function C(){if(k){h(!0);try{let E="before_agent";const M=k.name.toLowerCase(),L=k.description.toLowerCase();M.includes("after_agent")||L.includes("after agent")?E="after_agent":M.includes("before_model")||L.includes("before model")?E="before_model":M.includes("after_model")||L.includes("after model")?E="after_model":M.includes("before_tool")||L.includes("before tool")?E="before_tool":M.includes("after_tool")||L.includes("after tool")?E="after_tool":(M.includes("before_agent")||L.includes("before agent"))&&(E="before_agent");const U=await Fy(t.id,k.name,k.description,E,k.state_keys_used);U.success&&U.code?(l(U.code),i(k.id,{code:U.code})):(console.error("Failed to generate callback code:",U.error),alert("Failed to generate callback code: "+(U.error||"Unknown error")))}catch(E){console.error("Error generating callback code:",E),alert("Error generating callback code: "+E.message)}finally{h(!1)}}}const P=((D=(N=t.app)==null?void 0:N.state_keys)==null?void 0:D.map(E=>E.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
        .tools-panel {
          display: flex;
          height: 100%;
          background: var(--bg-primary);
        }
        
        .tools-sidebar {
          width: 250px;
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
        }
        
        .tools-sidebar-header {
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .tools-list {
          flex: 1;
          overflow-y: auto;
        }
        
        .tool-item {
          padding: 12px 16px;
          cursor: pointer;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.15s;
        }
        
        .tool-item:hover {
          background: var(--bg-hover);
        }
        
        .tool-item.selected {
          background: var(--bg-active);
        }
        
        .tool-item-name {
          font-weight: 500;
          color: var(--text-primary);
        }
        
        .tool-item-type {
          font-size: 11px;
          color: var(--text-secondary);
          margin-top: 2px;
        }
        
        .tool-item-actions {
          display: flex;
          gap: 4px;
        }
        
        .tools-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .tools-editor-header {
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .tools-editor-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-height: 0;
        }
        
        .form-group {
          margin-bottom: 16px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: var(--text-primary);
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          background: var(--bg-primary);
          color: var(--text-primary);
          font-family: inherit;
        }
        
        .form-group input.error {
          border-color: #ef4444;
        }
        
        .error-message {
          color: #ef4444;
          font-size: 12px;
          margin-top: 4px;
        }
        
        .code-editor-container {
          flex: 1;
          min-height: 400px;
          height: 400px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,title:"Add Callback",children:o.jsx(Ge,{size:16})})]}),o.jsx("div",{className:"tools-list",children:b.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):b.map(E=>o.jsxs("div",{className:`tool-item ${c===E.id?"selected":""}`,onClick:()=>x(E.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:E.name}),E.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:E.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:M=>y(E.id,M),title:"Delete",children:o.jsx(Fe,{size:14})})})]},E.id))})]}),o.jsx("div",{className:"tools-editor",children:k?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:_,children:[o.jsx(Ta,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:k.name,onChange:E=>{const M=E.target.value;i(k.id,{name:M,module_path:`callbacks.${M.trim()||"callback"}`}),d&&wm(M)&&p(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:k.description,onChange:E=>i(k.id,{description:E.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:k.module_path,onChange:E=>i(k.id,{module_path:E.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:P.map(E=>{const M=k.state_keys_used.includes(E);return o.jsxs("button",{type:"button",className:`btn btn-sm ${M?"btn-primary":"btn-secondary"}`,onClick:()=>{const L=M?k.state_keys_used.filter(U=>U!==E):[...k.state_keys_used,E];i(k.id,{state_keys_used:L})},children:[o.jsx(Vd,{size:12,style:{marginRight:"4px"}}),E]},E)})}),P.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:C,disabled:f||!k.name,title:k.name?"Generate code using AI":"Add a name first",children:f?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Hd,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(Kt,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:E=>l(E||""),onMount:A,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function oE(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],s=n.split(".");if(s.length>2){const a=s.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Le={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function sE({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[s,a]=j.useState(""),[l,c]=j.useState("exact"),[u,d]=j.useState(!1),[p,f]=j.useState(""),[h,m]=j.useState(!1),[b,k]=j.useState(t),x=oE(e.url);j.useEffect(()=>{x.length>0&&!s&&a(x[0].pattern)},[x,s]),j.useEffect(()=>{const P=setInterval(()=>{k(N=>N<=1?(r(),0):N-1)},1e3);return()=>clearInterval(P)},[r]);const g=j.useCallback(()=>{n()},[n]),y=j.useCallback(()=>{n(h?p:s,l,u)},[n,h,p,s,l,u]),_=b/t*100,A=e.source.startsWith("mcp:"),C=A?e.source.substring(4):"agent";return o.jsx("div",{style:Le.overlay,children:o.jsxs("div",{style:Le.dialog,children:[o.jsxs("div",{style:Le.header,children:[o.jsx(Jy,{size:18,style:Le.headerIcon}),o.jsx("span",{style:Le.headerTitle,children:"Network Request Approval"}),o.jsx("button",{style:Le.closeButton,onClick:i,children:o.jsx(es,{size:16})})]}),o.jsxs("div",{style:Le.content,children:[o.jsx("div",{style:Le.sourceText,children:A?o.jsxs(o.Fragment,{children:['MCP server "',o.jsx("span",{style:{color:"#22d3ee"},children:C}),'" wants to connect to:']}):o.jsx(o.Fragment,{children:"Agent wants to connect to:"})}),o.jsxs("div",{style:Le.requestBox,children:[o.jsxs("div",{children:[o.jsx("span",{style:Le.methodBadge(e.method),children:e.method}),o.jsx("span",{style:Le.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&o.jsxs("div",{style:Le.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),o.jsxs("div",{children:[o.jsx("div",{style:Le.label,children:"Allow pattern:"}),h?o.jsxs("div",{children:[o.jsx("input",{type:"text",value:p,onChange:P=>f(P.target.value),placeholder:"e.g., *.example.com/*",style:Le.customInput}),o.jsxs("div",{style:Le.radioGroup,children:[o.jsxs("label",{style:Le.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),o.jsxs("label",{style:Le.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),o.jsx("button",{onClick:()=>m(!1),style:Le.backLink,children:"← Back to suggestions"})]})]}):o.jsxs("select",{value:s,onChange:P=>{P.target.value==="__custom__"?(m(!0),f(s)):a(P.target.value)},style:Le.select,children:[x.map(P=>o.jsx("option",{value:P.pattern,children:P.label},P.pattern)),o.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),o.jsxs("label",{style:Le.checkboxLabel,children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:u,onChange:P=>d(P.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),o.jsxs("div",{style:Le.footer,children:[o.jsxs("button",{onClick:r,style:Le.button("deny"),children:[o.jsx(qk,{size:14}),"Deny"]}),o.jsxs("button",{onClick:g,style:Le.button("once"),children:[o.jsx(Fd,{size:14}),"Allow Once"]}),o.jsxs("button",{onClick:y,style:Le.button("pattern"),children:[o.jsx(ev,{size:14}),"Allow Pattern"]}),o.jsxs("div",{style:Le.timerContainer,children:[o.jsx(Io,{size:14}),o.jsxs("span",{children:[b,"s"]})]})]}),o.jsx("div",{style:Le.progressBar,children:o.jsx("div",{style:Le.progressFill(_)})})]})})}var aE={value:()=>{}};function is(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Zs(n)}function Zs(e){this._=e}function lE(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Zs.prototype=is.prototype={constructor:Zs,on:function(e,t){var n=this._,r=lE(e+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(e=r[s]).type)&&(i=cE(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(i=(e=r[s]).type)n[i]=km(n[i],e.name,t);else if(t==null)for(i in n)n[i]=km(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Zs(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};function cE(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function km(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=aE,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Lu="http://www.w3.org/1999/xhtml";const jm={svg:"http://www.w3.org/2000/svg",xhtml:Lu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ml(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),jm.hasOwnProperty(t)?{space:jm[t],local:e}:e}function uE(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Lu&&t.documentElement.namespaceURI===Lu?t.createElement(e):t.createElementNS(n,e)}}function dE(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function n1(e){var t=ml(e);return(t.local?dE:uE)(t)}function pE(){}function pp(e){return e==null?pE:function(){return this.querySelector(e)}}function fE(e){typeof e!="function"&&(e=pp(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=new Array(a),c,u,d=0;d<a;++d)(c=s[d])&&(u=e.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u);return new Ft(r,this._parents)}function hE(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function mE(){return[]}function r1(e){return e==null?mE:function(){return this.querySelectorAll(e)}}function gE(e){return function(){return hE(e.apply(this,arguments))}}function xE(e){typeof e=="function"?e=gE(e):e=r1(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var a=t[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&(r.push(e.call(c,c.__data__,u,a)),i.push(c));return new Ft(r,i)}function i1(e){return function(){return this.matches(e)}}function o1(e){return function(t){return t.matches(e)}}var yE=Array.prototype.find;function vE(e){return function(){return yE.call(this.children,e)}}function bE(){return this.firstElementChild}function wE(e){return this.select(e==null?bE:vE(typeof e=="function"?e:o1(e)))}var kE=Array.prototype.filter;function jE(){return Array.from(this.children)}function _E(e){return function(){return kE.call(this.children,e)}}function SE(e){return this.selectAll(e==null?jE:_E(typeof e=="function"?e:o1(e)))}function CE(e){typeof e!="function"&&(e=i1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Ft(r,this._parents)}function s1(e){return new Array(e.length)}function NE(){return new Ft(this._enter||this._groups.map(s1),this._parents)}function Ra(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Ra.prototype={constructor:Ra,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function EE(e){return function(){return e}}function zE(e,t,n,r,i,s){for(var a=0,l,c=t.length,u=s.length;a<u;++a)(l=t[a])?(l.__data__=s[a],r[a]=l):n[a]=new Ra(e,s[a]);for(;a<c;++a)(l=t[a])&&(i[a]=l)}function TE(e,t,n,r,i,s,a){var l,c,u=new Map,d=t.length,p=s.length,f=new Array(d),h;for(l=0;l<d;++l)(c=t[l])&&(f[l]=h=a.call(c,c.__data__,l,t)+"",u.has(h)?i[l]=c:u.set(h,c));for(l=0;l<p;++l)h=a.call(e,s[l],l,s)+"",(c=u.get(h))?(r[l]=c,c.__data__=s[l],u.delete(h)):n[l]=new Ra(e,s[l]);for(l=0;l<d;++l)(c=t[l])&&u.get(f[l])===c&&(i[l]=c)}function AE(e){return e.__data__}function PE(e,t){if(!arguments.length)return Array.from(this,AE);var n=t?TE:zE,r=this._parents,i=this._groups;typeof e!="function"&&(e=EE(e));for(var s=i.length,a=new Array(s),l=new Array(s),c=new Array(s),u=0;u<s;++u){var d=r[u],p=i[u],f=p.length,h=LE(e.call(d,d&&d.__data__,u,r)),m=h.length,b=l[u]=new Array(m),k=a[u]=new Array(m),x=c[u]=new Array(f);n(d,p,b,k,x,h,t);for(var g=0,y=0,_,A;g<m;++g)if(_=b[g]){for(g>=y&&(y=g+1);!(A=k[y])&&++y<m;);_._next=A||null}}return a=new Ft(a,r),a._enter=l,a._exit=c,a}function LE(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function ME(){return new Ft(this._exit||this._groups.map(s1),this._parents)}function RE(e,t,n){var r=this.enter(),i=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function IE(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,a=Math.min(i,s),l=new Array(i),c=0;c<a;++c)for(var u=n[c],d=r[c],p=u.length,f=l[c]=new Array(p),h,m=0;m<p;++m)(h=u[m]||d[m])&&(f[m]=h);for(;c<i;++c)l[c]=n[c];return new Ft(l,this._parents)}function OE(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function $E(e){e||(e=DE);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],l=a.length,c=i[s]=new Array(l),u,d=0;d<l;++d)(u=a[d])&&(c[d]=u);c.sort(t)}return new Ft(i,this._parents).order()}function DE(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function FE(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function BE(){return Array.from(this)}function UE(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function VE(){let e=0;for(const t of this)++e;return e}function WE(){return!this.node()}function HE(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],s=0,a=i.length,l;s<a;++s)(l=i[s])&&e.call(l,l.__data__,s,i);return this}function qE(e){return function(){this.removeAttribute(e)}}function JE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function KE(e,t){return function(){this.setAttribute(e,t)}}function GE(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function YE(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function QE(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function XE(e,t){var n=ml(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?JE:qE:typeof t=="function"?n.local?QE:YE:n.local?GE:KE)(n,t))}function a1(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ZE(e){return function(){this.style.removeProperty(e)}}function ez(e,t,n){return function(){this.style.setProperty(e,t,n)}}function tz(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function nz(e,t,n){return arguments.length>1?this.each((t==null?ZE:typeof t=="function"?tz:ez)(e,t,n??"")):_i(this.node(),e)}function _i(e,t){return e.style.getPropertyValue(t)||a1(e).getComputedStyle(e,null).getPropertyValue(t)}function rz(e){return function(){delete this[e]}}function iz(e,t){return function(){this[e]=t}}function oz(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function sz(e,t){return arguments.length>1?this.each((t==null?rz:typeof t=="function"?oz:iz)(e,t)):this.node()[e]}function l1(e){return e.trim().split(/^|\s+/)}function fp(e){return e.classList||new c1(e)}function c1(e){this._node=e,this._names=l1(e.getAttribute("class")||"")}c1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function u1(e,t){for(var n=fp(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function d1(e,t){for(var n=fp(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function az(e){return function(){u1(this,e)}}function lz(e){return function(){d1(this,e)}}function cz(e,t){return function(){(t.apply(this,arguments)?u1:d1)(this,e)}}function uz(e,t){var n=l1(e+"");if(arguments.length<2){for(var r=fp(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?cz:t?az:lz)(n,t))}function dz(){this.textContent=""}function pz(e){return function(){this.textContent=e}}function fz(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function hz(e){return arguments.length?this.each(e==null?dz:(typeof e=="function"?fz:pz)(e)):this.node().textContent}function mz(){this.innerHTML=""}function gz(e){return function(){this.innerHTML=e}}function xz(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function yz(e){return arguments.length?this.each(e==null?mz:(typeof e=="function"?xz:gz)(e)):this.node().innerHTML}function vz(){this.nextSibling&&this.parentNode.appendChild(this)}function bz(){return this.each(vz)}function wz(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function kz(){return this.each(wz)}function jz(e){var t=typeof e=="function"?e:n1(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function _z(){return null}function Sz(e,t){var n=typeof e=="function"?e:n1(e),r=t==null?_z:typeof t=="function"?t:pp(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Cz(){var e=this.parentNode;e&&e.removeChild(this)}function Nz(){return this.each(Cz)}function Ez(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function zz(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Tz(e){return this.select(e?zz:Ez)}function Az(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Pz(e){return function(t){e.call(this,t,this.__data__)}}function Lz(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Mz(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,s;n<i;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function Rz(e,t,n){return function(){var r=this.__on,i,s=Pz(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=t;return}}this.addEventListener(e.type,s,n),i={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(i):this.__on=[i]}}function Iz(e,t,n){var r=Lz(e+""),i,s=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,u=l.length,d;c<u;++c)for(i=0,d=l[c];i<s;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?Rz:Mz,i=0;i<s;++i)this.each(l(r[i],t,n));return this}function p1(e,t,n){var r=a1(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function Oz(e,t){return function(){return p1(this,e,t)}}function $z(e,t){return function(){return p1(this,e,t.apply(this,arguments))}}function Dz(e,t){return this.each((typeof t=="function"?$z:Oz)(e,t))}function*Fz(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var f1=[null];function Ft(e,t){this._groups=e,this._parents=t}function os(){return new Ft([[document.documentElement]],f1)}function Bz(){return this}Ft.prototype=os.prototype={constructor:Ft,select:fE,selectAll:xE,selectChild:wE,selectChildren:SE,filter:CE,data:PE,enter:NE,exit:ME,join:RE,merge:IE,selection:Bz,order:OE,sort:$E,call:FE,nodes:BE,node:UE,size:VE,empty:WE,each:HE,attr:XE,style:nz,property:sz,classed:uz,text:hz,html:yz,raise:bz,lower:kz,append:jz,insert:Sz,remove:Nz,clone:Tz,datum:Az,on:Iz,dispatch:Dz,[Symbol.iterator]:Fz};function qt(e){return typeof e=="string"?new Ft([[document.querySelector(e)]],[document.documentElement]):new Ft([[e]],f1)}function Uz(e){let t;for(;t=e.sourceEvent;)e=t;return e}function zn(e,t){if(e=Uz(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const Vz={passive:!1},Do={capture:!0,passive:!1};function hc(e){e.stopImmediatePropagation()}function di(e){e.preventDefault(),e.stopImmediatePropagation()}function h1(e){var t=e.document.documentElement,n=qt(e).on("dragstart.drag",di,Do);"onselectstart"in t?n.on("selectstart.drag",di,Do):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function m1(e,t){var n=e.document.documentElement,r=qt(e).on("dragstart.drag",null);t&&(r.on("click.drag",di,Do),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Ls=e=>()=>e;function Mu(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:s,x:a,y:l,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Mu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Wz(e){return!e.ctrlKey&&!e.button}function Hz(){return this.parentNode}function qz(e,t){return t??{x:e.x,y:e.y}}function Jz(){return navigator.maxTouchPoints||"ontouchstart"in this}function Kz(){var e=Wz,t=Hz,n=qz,r=Jz,i={},s=is("start","drag","end"),a=0,l,c,u,d,p=0;function f(_){_.on("mousedown.drag",h).filter(r).on("touchstart.drag",k).on("touchmove.drag",x,Vz).on("touchend.drag touchcancel.drag",g).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(_,A){if(!(d||!e.call(this,_,A))){var C=y(this,t.call(this,_,A),_,A,"mouse");C&&(qt(_.view).on("mousemove.drag",m,Do).on("mouseup.drag",b,Do),h1(_.view),hc(_),u=!1,l=_.clientX,c=_.clientY,C("start",_))}}function m(_){if(di(_),!u){var A=_.clientX-l,C=_.clientY-c;u=A*A+C*C>p}i.mouse("drag",_)}function b(_){qt(_.view).on("mousemove.drag mouseup.drag",null),m1(_.view,u),di(_),i.mouse("end",_)}function k(_,A){if(e.call(this,_,A)){var C=_.changedTouches,P=t.call(this,_,A),N=C.length,D,E;for(D=0;D<N;++D)(E=y(this,P,_,A,C[D].identifier,C[D]))&&(hc(_),E("start",_,C[D]))}}function x(_){var A=_.changedTouches,C=A.length,P,N;for(P=0;P<C;++P)(N=i[A[P].identifier])&&(di(_),N("drag",_,A[P]))}function g(_){var A=_.changedTouches,C=A.length,P,N;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),P=0;P<C;++P)(N=i[A[P].identifier])&&(hc(_),N("end",_,A[P]))}function y(_,A,C,P,N,D){var E=s.copy(),M=zn(D||C,A),L,U,T;if((T=n.call(_,new Mu("beforestart",{sourceEvent:C,target:f,identifier:N,active:a,x:M[0],y:M[1],dx:0,dy:0,dispatch:E}),P))!=null)return L=T.x-M[0]||0,U=T.y-M[1]||0,function R($,z,O){var I=M,w;switch($){case"start":i[N]=R,w=a++;break;case"end":delete i[N],--a;case"drag":M=zn(O||z,A),w=a;break}E.call($,_,new Mu($,{sourceEvent:z,subject:T,target:f,identifier:N,active:w,x:M[0]+L,y:M[1]+U,dx:M[0]-I[0],dy:M[1]-I[1],dispatch:E}),P)}}return f.filter=function(_){return arguments.length?(e=typeof _=="function"?_:Ls(!!_),f):e},f.container=function(_){return arguments.length?(t=typeof _=="function"?_:Ls(_),f):t},f.subject=function(_){return arguments.length?(n=typeof _=="function"?_:Ls(_),f):n},f.touchable=function(_){return arguments.length?(r=typeof _=="function"?_:Ls(!!_),f):r},f.on=function(){var _=s.on.apply(s,arguments);return _===s?f:_},f.clickDistance=function(_){return arguments.length?(p=(_=+_)*_,f):Math.sqrt(p)},f}function hp(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function g1(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ss(){}var Fo=.7,Ia=1/Fo,pi="\\s*([+-]?\\d+)\\s*",Bo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",bn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Gz=/^#([0-9a-f]{3,8})$/,Yz=new RegExp(`^rgb\\(${pi},${pi},${pi}\\)$`),Qz=new RegExp(`^rgb\\(${bn},${bn},${bn}\\)$`),Xz=new RegExp(`^rgba\\(${pi},${pi},${pi},${Bo}\\)$`),Zz=new RegExp(`^rgba\\(${bn},${bn},${bn},${Bo}\\)$`),eT=new RegExp(`^hsl\\(${Bo},${bn},${bn}\\)$`),tT=new RegExp(`^hsla\\(${Bo},${bn},${bn},${Bo}\\)$`),_m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};hp(ss,Uo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Sm,formatHex:Sm,formatHex8:nT,formatHsl:rT,formatRgb:Cm,toString:Cm});function Sm(){return this.rgb().formatHex()}function nT(){return this.rgb().formatHex8()}function rT(){return x1(this).formatHsl()}function Cm(){return this.rgb().formatRgb()}function Uo(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Gz.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Nm(t):n===3?new _t(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ms(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ms(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Yz.exec(e))?new _t(t[1],t[2],t[3],1):(t=Qz.exec(e))?new _t(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Xz.exec(e))?Ms(t[1],t[2],t[3],t[4]):(t=Zz.exec(e))?Ms(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=eT.exec(e))?Tm(t[1],t[2]/100,t[3]/100,1):(t=tT.exec(e))?Tm(t[1],t[2]/100,t[3]/100,t[4]):_m.hasOwnProperty(e)?Nm(_m[e]):e==="transparent"?new _t(NaN,NaN,NaN,0):null}function Nm(e){return new _t(e>>16&255,e>>8&255,e&255,1)}function Ms(e,t,n,r){return r<=0&&(e=t=n=NaN),new _t(e,t,n,r)}function iT(e){return e instanceof ss||(e=Uo(e)),e?(e=e.rgb(),new _t(e.r,e.g,e.b,e.opacity)):new _t}function Ru(e,t,n,r){return arguments.length===1?iT(e):new _t(e,t,n,r??1)}function _t(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}hp(_t,Ru,g1(ss,{brighter(e){return e=e==null?Ia:Math.pow(Ia,e),new _t(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Fo:Math.pow(Fo,e),new _t(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new _t(zr(this.r),zr(this.g),zr(this.b),Oa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Em,formatHex:Em,formatHex8:oT,formatRgb:zm,toString:zm}));function Em(){return`#${_r(this.r)}${_r(this.g)}${_r(this.b)}`}function oT(){return`#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r((isNaN(this.opacity)?1:this.opacity)*255)}`}function zm(){const e=Oa(this.opacity);return`${e===1?"rgb(":"rgba("}${zr(this.r)}, ${zr(this.g)}, ${zr(this.b)}${e===1?")":`, ${e})`}`}function Oa(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function zr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function _r(e){return e=zr(e),(e<16?"0":"")+e.toString(16)}function Tm(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new nn(e,t,n,r)}function x1(e){if(e instanceof nn)return new nn(e.h,e.s,e.l,e.opacity);if(e instanceof ss||(e=Uo(e)),!e)return new nn;if(e instanceof nn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),a=NaN,l=s-i,c=(s+i)/2;return l?(t===s?a=(n-r)/l+(n<r)*6:n===s?a=(r-t)/l+2:a=(t-n)/l+4,l/=c<.5?s+i:2-s-i,a*=60):l=c>0&&c<1?0:a,new nn(a,l,c,e.opacity)}function sT(e,t,n,r){return arguments.length===1?x1(e):new nn(e,t,n,r??1)}function nn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}hp(nn,sT,g1(ss,{brighter(e){return e=e==null?Ia:Math.pow(Ia,e),new nn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Fo:Math.pow(Fo,e),new nn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new _t(mc(e>=240?e-240:e+120,i,r),mc(e,i,r),mc(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new nn(Am(this.h),Rs(this.s),Rs(this.l),Oa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Oa(this.opacity);return`${e===1?"hsl(":"hsla("}${Am(this.h)}, ${Rs(this.s)*100}%, ${Rs(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Am(e){return e=(e||0)%360,e<0?e+360:e}function Rs(e){return Math.max(0,Math.min(1,e||0))}function mc(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const y1=e=>()=>e;function aT(e,t){return function(n){return e+n*t}}function lT(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function cT(e){return(e=+e)==1?v1:function(t,n){return n-t?lT(t,n,e):y1(isNaN(t)?n:t)}}function v1(e,t){var n=t-e;return n?aT(e,n):y1(isNaN(e)?t:e)}const Pm=function e(t){var n=cT(t);function r(i,s){var a=n((i=Ru(i)).r,(s=Ru(s)).r),l=n(i.g,s.g),c=n(i.b,s.b),u=v1(i.opacity,s.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=c(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function Jn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Iu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,gc=new RegExp(Iu.source,"g");function uT(e){return function(){return e}}function dT(e){return function(t){return e(t)+""}}function pT(e,t){var n=Iu.lastIndex=gc.lastIndex=0,r,i,s,a=-1,l=[],c=[];for(e=e+"",t=t+"";(r=Iu.exec(e))&&(i=gc.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),l[a]?l[a]+=s:l[++a]=s),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,c.push({i:a,x:Jn(r,i)})),n=gc.lastIndex;return n<t.length&&(s=t.slice(n),l[a]?l[a]+=s:l[++a]=s),l.length<2?c[0]?dT(c[0].x):uT(t):(t=c.length,function(u){for(var d=0,p;d<t;++d)l[(p=c[d]).i]=p.x(u);return l.join("")})}var Lm=180/Math.PI,Ou={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function b1(e,t,n,r,i,s){var a,l,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,c/=l),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*Lm,skewX:Math.atan(c)*Lm,scaleX:a,scaleY:l}}var Is;function fT(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Ou:b1(t.a,t.b,t.c,t.d,t.e,t.f)}function hT(e){return e==null||(Is||(Is=document.createElementNS("http://www.w3.org/2000/svg","g")),Is.setAttribute("transform",e),!(e=Is.transform.baseVal.consolidate()))?Ou:(e=e.matrix,b1(e.a,e.b,e.c,e.d,e.e,e.f))}function w1(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function s(u,d,p,f,h,m){if(u!==p||d!==f){var b=h.push("translate(",null,t,null,n);m.push({i:b-4,x:Jn(u,p)},{i:b-2,x:Jn(d,f)})}else(p||f)&&h.push("translate("+p+t+f+n)}function a(u,d,p,f){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),f.push({i:p.push(i(p)+"rotate(",null,r)-2,x:Jn(u,d)})):d&&p.push(i(p)+"rotate("+d+r)}function l(u,d,p,f){u!==d?f.push({i:p.push(i(p)+"skewX(",null,r)-2,x:Jn(u,d)}):d&&p.push(i(p)+"skewX("+d+r)}function c(u,d,p,f,h,m){if(u!==p||d!==f){var b=h.push(i(h)+"scale(",null,",",null,")");m.push({i:b-4,x:Jn(u,p)},{i:b-2,x:Jn(d,f)})}else(p!==1||f!==1)&&h.push(i(h)+"scale("+p+","+f+")")}return function(u,d){var p=[],f=[];return u=e(u),d=e(d),s(u.translateX,u.translateY,d.translateX,d.translateY,p,f),a(u.rotate,d.rotate,p,f),l(u.skewX,d.skewX,p,f),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,p,f),u=d=null,function(h){for(var m=-1,b=f.length,k;++m<b;)p[(k=f[m]).i]=k.x(h);return p.join("")}}}var mT=w1(fT,"px, ","px)","deg)"),gT=w1(hT,", ",")",")"),xT=1e-12;function Mm(e){return((e=Math.exp(e))+1/e)/2}function yT(e){return((e=Math.exp(e))-1/e)/2}function vT(e){return((e=Math.exp(2*e))-1)/(e+1)}const bT=function e(t,n,r){function i(s,a){var l=s[0],c=s[1],u=s[2],d=a[0],p=a[1],f=a[2],h=d-l,m=p-c,b=h*h+m*m,k,x;if(b<xT)x=Math.log(f/u)/t,k=function(P){return[l+P*h,c+P*m,u*Math.exp(t*P*x)]};else{var g=Math.sqrt(b),y=(f*f-u*u+r*b)/(2*u*n*g),_=(f*f-u*u-r*b)/(2*f*n*g),A=Math.log(Math.sqrt(y*y+1)-y),C=Math.log(Math.sqrt(_*_+1)-_);x=(C-A)/t,k=function(P){var N=P*x,D=Mm(A),E=u/(n*g)*(D*vT(t*N+A)-yT(A));return[l+E*h,c+E*m,u*D/Mm(t*N+A)]}}return k.duration=x*1e3*t/Math.SQRT2,k}return i.rho=function(s){var a=Math.max(.001,+s),l=a*a,c=l*l;return e(a,l,c)},i}(Math.SQRT2,2,4);var Si=0,to=0,Ki=0,k1=1e3,$a,no,Da=0,Or=0,gl=0,Vo=typeof performance=="object"&&performance.now?performance:Date,j1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function mp(){return Or||(j1(wT),Or=Vo.now()+gl)}function wT(){Or=0}function Fa(){this._call=this._time=this._next=null}Fa.prototype=gp.prototype={constructor:Fa,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?mp():+n)+(t==null?0:+t),!this._next&&no!==this&&(no?no._next=this:$a=this,no=this),this._call=e,this._time=n,$u()},stop:function(){this._call&&(this._call=null,this._time=1/0,$u())}};function gp(e,t,n){var r=new Fa;return r.restart(e,t,n),r}function kT(){mp(),++Si;for(var e=$a,t;e;)(t=Or-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Si}function Rm(){Or=(Da=Vo.now())+gl,Si=to=0;try{kT()}finally{Si=0,_T(),Or=0}}function jT(){var e=Vo.now(),t=e-Da;t>k1&&(gl-=t,Da=e)}function _T(){for(var e,t=$a,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:$a=n);no=e,$u(r)}function $u(e){if(!Si){to&&(to=clearTimeout(to));var t=e-Or;t>24?(e<1/0&&(to=setTimeout(Rm,e-Vo.now()-gl)),Ki&&(Ki=clearInterval(Ki))):(Ki||(Da=Vo.now(),Ki=setInterval(jT,k1)),Si=1,j1(Rm))}}function Im(e,t,n){var r=new Fa;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var ST=is("start","end","cancel","interrupt"),CT=[],_1=0,Om=1,Du=2,ea=3,$m=4,Fu=5,ta=6;function xl(e,t,n,r,i,s){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;NT(e,n,{name:t,index:r,group:i,on:ST,tween:CT,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:_1})}function xp(e,t){var n=cn(e,t);if(n.state>_1)throw new Error("too late; already scheduled");return n}function jn(e,t){var n=cn(e,t);if(n.state>ea)throw new Error("too late; already running");return n}function cn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function NT(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=gp(s,0,n.time);function s(u){n.state=Om,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var d,p,f,h;if(n.state!==Om)return c();for(d in r)if(h=r[d],h.name===n.name){if(h.state===ea)return Im(a);h.state===$m?(h.state=ta,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=ta,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(Im(function(){n.state===ea&&(n.state=$m,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=Du,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Du){for(n.state=ea,i=new Array(f=n.tween.length),d=0,p=-1;d<f;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++p]=h);i.length=p+1}}function l(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Fu,1),p=-1,f=i.length;++p<f;)i[p].call(e,d);n.state===Fu&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=ta,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function na(e,t){var n=e.__transition,r,i,s=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){s=!1;continue}i=r.state>Du&&r.state<Fu,r.state=ta,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}s&&delete e.__transition}}function ET(e){return this.each(function(){na(this,e)})}function zT(e,t){var n,r;return function(){var i=jn(this,e),s=i.tween;if(s!==n){r=n=s;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function TT(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=jn(this,e),a=s.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=l;break}c===u&&i.push(l)}s.tween=i}}function AT(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=cn(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?zT:TT)(n,e,t))}function yp(e,t,n){var r=e._id;return e.each(function(){var i=jn(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return cn(i,r).value[t]}}function S1(e,t){var n;return(typeof t=="number"?Jn:t instanceof Uo?Pm:(n=Uo(t))?(t=n,Pm):pT)(e,t)}function PT(e){return function(){this.removeAttribute(e)}}function LT(e){return function(){this.removeAttributeNS(e.space,e.local)}}function MT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttribute(e);return a===i?null:a===r?s:s=t(r=a,n)}}function RT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?s:s=t(r=a,n)}}function IT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function OT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function $T(e,t){var n=ml(e),r=n==="transform"?gT:S1;return this.attrTween(e,typeof t=="function"?(n.local?OT:IT)(n,r,yp(this,"attr."+e,t)):t==null?(n.local?LT:PT)(n):(n.local?RT:MT)(n,r,t))}function DT(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function FT(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function BT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&FT(e,s)),n}return i._value=t,i}function UT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&DT(e,s)),n}return i._value=t,i}function VT(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=ml(e);return this.tween(n,(r.local?BT:UT)(r,t))}function WT(e,t){return function(){xp(this,e).delay=+t.apply(this,arguments)}}function HT(e,t){return t=+t,function(){xp(this,e).delay=t}}function qT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?WT:HT)(t,e)):cn(this.node(),t).delay}function JT(e,t){return function(){jn(this,e).duration=+t.apply(this,arguments)}}function KT(e,t){return t=+t,function(){jn(this,e).duration=t}}function GT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?JT:KT)(t,e)):cn(this.node(),t).duration}function YT(e,t){if(typeof t!="function")throw new Error;return function(){jn(this,e).ease=t}}function QT(e){var t=this._id;return arguments.length?this.each(YT(t,e)):cn(this.node(),t).ease}function XT(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;jn(this,e).ease=n}}function ZT(e){if(typeof e!="function")throw new Error;return this.each(XT(this._id,e))}function e3(e){typeof e!="function"&&(e=i1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Fn(r,this._parents,this._name,this._id)}function t3(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),a=new Array(r),l=0;l<s;++l)for(var c=t[l],u=n[l],d=c.length,p=a[l]=new Array(d),f,h=0;h<d;++h)(f=c[h]||u[h])&&(p[h]=f);for(;l<r;++l)a[l]=t[l];return new Fn(a,this._parents,this._name,this._id)}function n3(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function r3(e,t,n){var r,i,s=n3(t)?xp:jn;return function(){var a=s(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function i3(e,t){var n=this._id;return arguments.length<2?cn(this.node(),n).on.on(e):this.each(r3(n,e,t))}function o3(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function s3(){return this.on("end.remove",o3(this._id))}function a3(e){var t=this._name,n=this._id;typeof e!="function"&&(e=pp(e));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var l=r[a],c=l.length,u=s[a]=new Array(c),d,p,f=0;f<c;++f)(d=l[f])&&(p=e.call(d,d.__data__,f,l))&&("__data__"in d&&(p.__data__=d.__data__),u[f]=p,xl(u[f],t,n,f,u,cn(d,n)));return new Fn(s,this._parents,t,n)}function l3(e){var t=this._name,n=this._id;typeof e!="function"&&(e=r1(e));for(var r=this._groups,i=r.length,s=[],a=[],l=0;l<i;++l)for(var c=r[l],u=c.length,d,p=0;p<u;++p)if(d=c[p]){for(var f=e.call(d,d.__data__,p,c),h,m=cn(d,n),b=0,k=f.length;b<k;++b)(h=f[b])&&xl(h,t,n,b,f,m);s.push(f),a.push(d)}return new Fn(s,a,t,n)}var c3=os.prototype.constructor;function u3(){return new c3(this._groups,this._parents)}function d3(e,t){var n,r,i;return function(){var s=_i(this,e),a=(this.style.removeProperty(e),_i(this,e));return s===a?null:s===n&&a===r?i:i=t(n=s,r=a)}}function C1(e){return function(){this.style.removeProperty(e)}}function p3(e,t,n){var r,i=n+"",s;return function(){var a=_i(this,e);return a===i?null:a===r?s:s=t(r=a,n)}}function f3(e,t,n){var r,i,s;return function(){var a=_i(this,e),l=n(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(e),_i(this,e))),a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l))}}function h3(e,t){var n,r,i,s="style."+t,a="end."+s,l;return function(){var c=jn(this,e),u=c.on,d=c.value[s]==null?l||(l=C1(t)):void 0;(u!==n||i!==d)&&(r=(n=u).copy()).on(a,i=d),c.on=r}}function m3(e,t,n){var r=(e+="")=="transform"?mT:S1;return t==null?this.styleTween(e,d3(e,r)).on("end.style."+e,C1(e)):typeof t=="function"?this.styleTween(e,f3(e,r,yp(this,"style."+e,t))).each(h3(this._id,e)):this.styleTween(e,p3(e,r,t),n).on("end.style."+e,null)}function g3(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function x3(e,t,n){var r,i;function s(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&g3(e,a,n)),r}return s._value=t,s}function y3(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,x3(e,t,n??""))}function v3(e){return function(){this.textContent=e}}function b3(e){return function(){var t=e(this);this.textContent=t??""}}function w3(e){return this.tween("text",typeof e=="function"?b3(yp(this,"text",e)):v3(e==null?"":e+""))}function k3(e){return function(t){this.textContent=e.call(this,t)}}function j3(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&k3(i)),t}return r._value=e,r}function _3(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,j3(e))}function S3(){for(var e=this._name,t=this._id,n=N1(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)if(c=a[u]){var d=cn(c,t);xl(c,e,n,u,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Fn(r,this._parents,e,n)}function C3(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var l={value:a},c={value:function(){--i===0&&s()}};n.each(function(){var u=jn(this,r),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),u.on=t}),i===0&&s()})}var N3=0;function Fn(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function N1(){return++N3}var Nn=os.prototype;Fn.prototype={constructor:Fn,select:a3,selectAll:l3,selectChild:Nn.selectChild,selectChildren:Nn.selectChildren,filter:e3,merge:t3,selection:u3,transition:S3,call:Nn.call,nodes:Nn.nodes,node:Nn.node,size:Nn.size,empty:Nn.empty,each:Nn.each,on:i3,attr:$T,attrTween:VT,style:m3,styleTween:y3,text:w3,textTween:_3,remove:s3,tween:AT,delay:qT,duration:GT,ease:QT,easeVarying:ZT,end:C3,[Symbol.iterator]:Nn[Symbol.iterator]};function E3(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var z3={time:null,delay:0,duration:250,ease:E3};function T3(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function A3(e){var t,n;e instanceof Fn?(t=e._id,e=e._name):(t=N1(),(n=z3).time=mp(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&xl(c,e,t,u,a,n||T3(c,t));return new Fn(r,this._parents,e,t)}os.prototype.interrupt=ET;os.prototype.transition=A3;function P3(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var s,a=n.length,l,c=0,u=0;for(s=0;s<a;++s)l=n[s],c+=l.x,u+=l.y;for(c=(c/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)l=n[s],l.x-=c,l.y-=u}return i.initialize=function(s){n=s},i.x=function(s){return arguments.length?(e=+s,i):e},i.y=function(s){return arguments.length?(t=+s,i):t},i.strength=function(s){return arguments.length?(r=+s,i):r},i}function L3(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return E1(this.cover(t,n),t,n,e)}function E1(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,s=e._root,a={data:r},l=e._x0,c=e._y0,u=e._x1,d=e._y1,p,f,h,m,b,k,x,g;if(!s)return e._root=a,e;for(;s.length;)if((b=t>=(p=(l+u)/2))?l=p:u=p,(k=n>=(f=(c+d)/2))?c=f:d=f,i=s,!(s=s[x=k<<1|b]))return i[x]=a,e;if(h=+e._x.call(null,s.data),m=+e._y.call(null,s.data),t===h&&n===m)return a.next=s,i?i[x]=a:e._root=a,e;do i=i?i[x]=new Array(4):e._root=new Array(4),(b=t>=(p=(l+u)/2))?l=p:u=p,(k=n>=(f=(c+d)/2))?c=f:d=f;while((x=k<<1|b)===(g=(m>=f)<<1|h>=p));return i[g]=s,i[x]=a,e}function M3(e){var t,n,r=e.length,i,s,a=new Array(r),l=new Array(r),c=1/0,u=1/0,d=-1/0,p=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(s=+this._y.call(null,t))||(a[n]=i,l[n]=s,i<c&&(c=i),i>d&&(d=i),s<u&&(u=s),s>p&&(p=s));if(c>d||u>p)return this;for(this.cover(c,u).cover(d,p),n=0;n<r;++n)E1(this,a[n],l[n],e[n]);return this}function R3(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,s=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var a=i-n||1,l=this._root,c,u;n>e||e>=i||r>t||t>=s;)switch(u=(t<r)<<1|e<n,c=new Array(4),c[u]=l,l=c,a*=2,u){case 0:i=n+a,s=r+a;break;case 1:n=i-a,s=r+a;break;case 2:i=n+a,r=s-a;break;case 3:n=i-a,r=s-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=s,this}function I3(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function O3(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function mt(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function $3(e,t,n){var r,i=this._x0,s=this._y0,a,l,c,u,d=this._x1,p=this._y1,f=[],h=this._root,m,b;for(h&&f.push(new mt(h,i,s,d,p)),n==null?n=1/0:(i=e-n,s=t-n,d=e+n,p=t+n,n*=n);m=f.pop();)if(!(!(h=m.node)||(a=m.x0)>d||(l=m.y0)>p||(c=m.x1)<i||(u=m.y1)<s))if(h.length){var k=(a+c)/2,x=(l+u)/2;f.push(new mt(h[3],k,x,c,u),new mt(h[2],a,x,k,u),new mt(h[1],k,l,c,x),new mt(h[0],a,l,k,x)),(b=(t>=x)<<1|e>=k)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-b],f[f.length-1-b]=m)}else{var g=e-+this._x.call(null,h.data),y=t-+this._y.call(null,h.data),_=g*g+y*y;if(_<n){var A=Math.sqrt(n=_);i=e-A,s=t-A,d=e+A,p=t+A,r=h.data}}return r}function D3(e){if(isNaN(d=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,n=this._root,r,i,s,a=this._x0,l=this._y0,c=this._x1,u=this._y1,d,p,f,h,m,b,k,x;if(!n)return this;if(n.length)for(;;){if((m=d>=(f=(a+c)/2))?a=f:c=f,(b=p>=(h=(l+u)/2))?l=h:u=h,t=n,!(n=n[k=b<<1|m]))return this;if(!n.length)break;(t[k+1&3]||t[k+2&3]||t[k+3&3])&&(r=t,x=k)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,i?(s?i.next=s:delete i.next,this):t?(s?t[k]=s:delete t[k],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[x]=n:this._root=n),this):(this._root=s,this)}function F3(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function B3(){return this._root}function U3(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function V3(e){var t=[],n,r=this._root,i,s,a,l,c;for(r&&t.push(new mt(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,s=n.x0,a=n.y0,l=n.x1,c=n.y1)&&r.length){var u=(s+l)/2,d=(a+c)/2;(i=r[3])&&t.push(new mt(i,u,d,l,c)),(i=r[2])&&t.push(new mt(i,s,d,u,c)),(i=r[1])&&t.push(new mt(i,u,a,l,d)),(i=r[0])&&t.push(new mt(i,s,a,u,d))}return this}function W3(e){var t=[],n=[],r;for(this._root&&t.push(new mt(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var s,a=r.x0,l=r.y0,c=r.x1,u=r.y1,d=(a+c)/2,p=(l+u)/2;(s=i[0])&&t.push(new mt(s,a,l,d,p)),(s=i[1])&&t.push(new mt(s,d,l,c,p)),(s=i[2])&&t.push(new mt(s,a,p,d,u)),(s=i[3])&&t.push(new mt(s,d,p,c,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function H3(e){return e[0]}function q3(e){return arguments.length?(this._x=e,this):this._x}function J3(e){return e[1]}function K3(e){return arguments.length?(this._y=e,this):this._y}function vp(e,t,n){var r=new bp(t??H3,n??J3,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function bp(e,t,n,r,i,s){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=s,this._root=void 0}function Dm(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var vt=vp.prototype=bp.prototype;vt.copy=function(){var e=new bp(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=Dm(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=Dm(r));return e};vt.add=L3;vt.addAll=M3;vt.cover=R3;vt.data=I3;vt.extent=O3;vt.find=$3;vt.remove=D3;vt.removeAll=F3;vt.root=B3;vt.size=U3;vt.visit=V3;vt.visitAfter=W3;vt.x=q3;vt.y=K3;function Tr(e){return function(){return e}}function er(e){return(e()-.5)*1e-6}function G3(e){return e.x+e.vx}function Y3(e){return e.y+e.vy}function Q3(e){var t,n,r,i=1,s=1;typeof e!="function"&&(e=Tr(e==null?1:+e));function a(){for(var u,d=t.length,p,f,h,m,b,k,x=0;x<s;++x)for(p=vp(t,G3,Y3).visitAfter(l),u=0;u<d;++u)f=t[u],b=n[f.index],k=b*b,h=f.x+f.vx,m=f.y+f.vy,p.visit(g);function g(y,_,A,C,P){var N=y.data,D=y.r,E=b+D;if(N){if(N.index>f.index){var M=h-N.x-N.vx,L=m-N.y-N.vy,U=M*M+L*L;U<E*E&&(M===0&&(M=er(r),U+=M*M),L===0&&(L=er(r),U+=L*L),U=(E-(U=Math.sqrt(U)))/U*i,f.vx+=(M*=U)*(E=(D*=D)/(k+D)),f.vy+=(L*=U)*E,N.vx-=M*(E=1-E),N.vy-=L*E)}return}return _>h+E||C<h-E||A>m+E||P<m-E}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<4;++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,p;for(n=new Array(d),u=0;u<d;++u)p=t[u],n[p.index]=+e(p,u,t)}}return a.initialize=function(u,d){t=u,r=d,c()},a.iterations=function(u){return arguments.length?(s=+u,a):s},a.strength=function(u){return arguments.length?(i=+u,a):i},a.radius=function(u){return arguments.length?(e=typeof u=="function"?u:Tr(+u),c(),a):e},a}function X3(e){return e.index}function Fm(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function Z3(e){var t=X3,n=p,r,i=Tr(30),s,a,l,c,u,d=1;e==null&&(e=[]);function p(k){return 1/Math.min(l[k.source.index],l[k.target.index])}function f(k){for(var x=0,g=e.length;x<d;++x)for(var y=0,_,A,C,P,N,D,E;y<g;++y)_=e[y],A=_.source,C=_.target,P=C.x+C.vx-A.x-A.vx||er(u),N=C.y+C.vy-A.y-A.vy||er(u),D=Math.sqrt(P*P+N*N),D=(D-s[y])/D*k*r[y],P*=D,N*=D,C.vx-=P*(E=c[y]),C.vy-=N*E,A.vx+=P*(E=1-E),A.vy+=N*E}function h(){if(a){var k,x=a.length,g=e.length,y=new Map(a.map((A,C)=>[t(A,C,a),A])),_;for(k=0,l=new Array(x);k<g;++k)_=e[k],_.index=k,typeof _.source!="object"&&(_.source=Fm(y,_.source)),typeof _.target!="object"&&(_.target=Fm(y,_.target)),l[_.source.index]=(l[_.source.index]||0)+1,l[_.target.index]=(l[_.target.index]||0)+1;for(k=0,c=new Array(g);k<g;++k)_=e[k],c[k]=l[_.source.index]/(l[_.source.index]+l[_.target.index]);r=new Array(g),m(),s=new Array(g),b()}}function m(){if(a)for(var k=0,x=e.length;k<x;++k)r[k]=+n(e[k],k,e)}function b(){if(a)for(var k=0,x=e.length;k<x;++k)s[k]=+i(e[k],k,e)}return f.initialize=function(k,x){a=k,u=x,h()},f.links=function(k){return arguments.length?(e=k,h(),f):e},f.id=function(k){return arguments.length?(t=k,f):t},f.iterations=function(k){return arguments.length?(d=+k,f):d},f.strength=function(k){return arguments.length?(n=typeof k=="function"?k:Tr(+k),m(),f):n},f.distance=function(k){return arguments.length?(i=typeof k=="function"?k:Tr(+k),b(),f):i},f}const e5=1664525,t5=1013904223,Bm=4294967296;function n5(){let e=1;return()=>(e=(e5*e+t5)%Bm)/Bm}function r5(e){return e.x}function i5(e){return e.y}var o5=10,s5=Math.PI*(3-Math.sqrt(5));function a5(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),s=0,a=.6,l=new Map,c=gp(p),u=is("tick","end"),d=n5();e==null&&(e=[]);function p(){f(),u.call("tick",t),n<r&&(c.stop(),u.call("end",t))}function f(b){var k,x=e.length,g;b===void 0&&(b=1);for(var y=0;y<b;++y)for(n+=(s-n)*i,l.forEach(function(_){_(n)}),k=0;k<x;++k)g=e[k],g.fx==null?g.x+=g.vx*=a:(g.x=g.fx,g.vx=0),g.fy==null?g.y+=g.vy*=a:(g.y=g.fy,g.vy=0);return t}function h(){for(var b=0,k=e.length,x;b<k;++b){if(x=e[b],x.index=b,x.fx!=null&&(x.x=x.fx),x.fy!=null&&(x.y=x.fy),isNaN(x.x)||isNaN(x.y)){var g=o5*Math.sqrt(.5+b),y=b*s5;x.x=g*Math.cos(y),x.y=g*Math.sin(y)}(isNaN(x.vx)||isNaN(x.vy))&&(x.vx=x.vy=0)}}function m(b){return b.initialize&&b.initialize(e,d),b}return h(),t={tick:f,restart:function(){return c.restart(p),t},stop:function(){return c.stop(),t},nodes:function(b){return arguments.length?(e=b,h(),l.forEach(m),t):e},alpha:function(b){return arguments.length?(n=+b,t):n},alphaMin:function(b){return arguments.length?(r=+b,t):r},alphaDecay:function(b){return arguments.length?(i=+b,t):+i},alphaTarget:function(b){return arguments.length?(s=+b,t):s},velocityDecay:function(b){return arguments.length?(a=1-b,t):1-a},randomSource:function(b){return arguments.length?(d=b,l.forEach(m),t):d},force:function(b,k){return arguments.length>1?(k==null?l.delete(b):l.set(b,m(k)),t):l.get(b)},find:function(b,k,x){var g=0,y=e.length,_,A,C,P,N;for(x==null?x=1/0:x*=x,g=0;g<y;++g)P=e[g],_=b-P.x,A=k-P.y,C=_*_+A*A,C<x&&(N=P,x=C);return N},on:function(b,k){return arguments.length>1?(u.on(b,k),t):u.on(b)}}}function l5(){var e,t,n,r,i=Tr(-30),s,a=1,l=1/0,c=.81;function u(h){var m,b=e.length,k=vp(e,r5,i5).visitAfter(p);for(r=h,m=0;m<b;++m)t=e[m],k.visit(f)}function d(){if(e){var h,m=e.length,b;for(s=new Array(m),h=0;h<m;++h)b=e[h],s[b.index]=+i(b,h,e)}}function p(h){var m=0,b,k,x=0,g,y,_;if(h.length){for(g=y=_=0;_<4;++_)(b=h[_])&&(k=Math.abs(b.value))&&(m+=b.value,x+=k,g+=k*b.x,y+=k*b.y);h.x=g/x,h.y=y/x}else{b=h,b.x=b.data.x,b.y=b.data.y;do m+=s[b.data.index];while(b=b.next)}h.value=m}function f(h,m,b,k){if(!h.value)return!0;var x=h.x-t.x,g=h.y-t.y,y=k-m,_=x*x+g*g;if(y*y/c<_)return _<l&&(x===0&&(x=er(n),_+=x*x),g===0&&(g=er(n),_+=g*g),_<a&&(_=Math.sqrt(a*_)),t.vx+=x*h.value*r/_,t.vy+=g*h.value*r/_),!0;if(h.length||_>=l)return;(h.data!==t||h.next)&&(x===0&&(x=er(n),_+=x*x),g===0&&(g=er(n),_+=g*g),_<a&&(_=Math.sqrt(a*_)));do h.data!==t&&(y=s[h.data.index]*r/_,t.vx+=x*y,t.vy+=g*y);while(h=h.next)}return u.initialize=function(h,m){e=h,n=m,d()},u.strength=function(h){return arguments.length?(i=typeof h=="function"?h:Tr(+h),d(),u):i},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}const Os=e=>()=>e;function c5(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Ln(e,t,n){this.k=e,this.x=t,this.y=n}Ln.prototype={constructor:Ln,scale:function(e){return e===1?this:new Ln(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ln(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ba=new Ln(1,0,0);Ln.prototype;function xc(e){e.stopImmediatePropagation()}function Gi(e){e.preventDefault(),e.stopImmediatePropagation()}function u5(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function d5(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Um(){return this.__zoom||Ba}function p5(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function f5(){return navigator.maxTouchPoints||"ontouchstart"in this}function h5(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>s?(s+a)/2:Math.min(0,s)||Math.max(0,a))}function m5(){var e=u5,t=d5,n=h5,r=p5,i=f5,s=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,c=bT,u=is("start","zoom","end"),d,p,f,h=500,m=150,b=0,k=10;function x(T){T.property("__zoom",Um).on("wheel.zoom",N,{passive:!1}).on("mousedown.zoom",D).on("dblclick.zoom",E).filter(i).on("touchstart.zoom",M).on("touchmove.zoom",L).on("touchend.zoom touchcancel.zoom",U).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}x.transform=function(T,R,$,z){var O=T.selection?T.selection():T;O.property("__zoom",Um),T!==O?A(T,R,$,z):O.interrupt().each(function(){C(this,arguments).event(z).start().zoom(null,typeof R=="function"?R.apply(this,arguments):R).end()})},x.scaleBy=function(T,R,$,z){x.scaleTo(T,function(){var O=this.__zoom.k,I=typeof R=="function"?R.apply(this,arguments):R;return O*I},$,z)},x.scaleTo=function(T,R,$,z){x.transform(T,function(){var O=t.apply(this,arguments),I=this.__zoom,w=$==null?_(O):typeof $=="function"?$.apply(this,arguments):$,H=I.invert(w),K=typeof R=="function"?R.apply(this,arguments):R;return n(y(g(I,K),w,H),O,a)},$,z)},x.translateBy=function(T,R,$,z){x.transform(T,function(){return n(this.__zoom.translate(typeof R=="function"?R.apply(this,arguments):R,typeof $=="function"?$.apply(this,arguments):$),t.apply(this,arguments),a)},null,z)},x.translateTo=function(T,R,$,z,O){x.transform(T,function(){var I=t.apply(this,arguments),w=this.__zoom,H=z==null?_(I):typeof z=="function"?z.apply(this,arguments):z;return n(Ba.translate(H[0],H[1]).scale(w.k).translate(typeof R=="function"?-R.apply(this,arguments):-R,typeof $=="function"?-$.apply(this,arguments):-$),I,a)},z,O)};function g(T,R){return R=Math.max(s[0],Math.min(s[1],R)),R===T.k?T:new Ln(R,T.x,T.y)}function y(T,R,$){var z=R[0]-$[0]*T.k,O=R[1]-$[1]*T.k;return z===T.x&&O===T.y?T:new Ln(T.k,z,O)}function _(T){return[(+T[0][0]+ +T[1][0])/2,(+T[0][1]+ +T[1][1])/2]}function A(T,R,$,z){T.on("start.zoom",function(){C(this,arguments).event(z).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(z).end()}).tween("zoom",function(){var O=this,I=arguments,w=C(O,I).event(z),H=t.apply(O,I),K=$==null?_(H):typeof $=="function"?$.apply(O,I):$,v=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),V=O.__zoom,S=typeof R=="function"?R.apply(O,I):R,W=c(V.invert(K).concat(v/V.k),S.invert(K).concat(v/S.k));return function(ie){if(ie===1)ie=S;else{var ce=W(ie),q=v/ce[2];ie=new Ln(q,K[0]-ce[0]*q,K[1]-ce[1]*q)}w.zoom(null,ie)}})}function C(T,R,$){return!$&&T.__zooming||new P(T,R)}function P(T,R){this.that=T,this.args=R,this.active=0,this.sourceEvent=null,this.extent=t.apply(T,R),this.taps=0}P.prototype={event:function(T){return T&&(this.sourceEvent=T),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(T,R){return this.mouse&&T!=="mouse"&&(this.mouse[1]=R.invert(this.mouse[0])),this.touch0&&T!=="touch"&&(this.touch0[1]=R.invert(this.touch0[0])),this.touch1&&T!=="touch"&&(this.touch1[1]=R.invert(this.touch1[0])),this.that.__zoom=R,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(T){var R=qt(this.that).datum();u.call(T,this.that,new c5(T,{sourceEvent:this.sourceEvent,target:x,transform:this.that.__zoom,dispatch:u}),R)}};function N(T,...R){if(!e.apply(this,arguments))return;var $=C(this,R).event(T),z=this.__zoom,O=Math.max(s[0],Math.min(s[1],z.k*Math.pow(2,r.apply(this,arguments)))),I=zn(T);if($.wheel)($.mouse[0][0]!==I[0]||$.mouse[0][1]!==I[1])&&($.mouse[1]=z.invert($.mouse[0]=I)),clearTimeout($.wheel);else{if(z.k===O)return;$.mouse=[I,z.invert(I)],na(this),$.start()}Gi(T),$.wheel=setTimeout(w,m),$.zoom("mouse",n(y(g(z,O),$.mouse[0],$.mouse[1]),$.extent,a));function w(){$.wheel=null,$.end()}}function D(T,...R){if(f||!e.apply(this,arguments))return;var $=T.currentTarget,z=C(this,R,!0).event(T),O=qt(T.view).on("mousemove.zoom",K,!0).on("mouseup.zoom",v,!0),I=zn(T,$),w=T.clientX,H=T.clientY;h1(T.view),xc(T),z.mouse=[I,this.__zoom.invert(I)],na(this),z.start();function K(V){if(Gi(V),!z.moved){var S=V.clientX-w,W=V.clientY-H;z.moved=S*S+W*W>b}z.event(V).zoom("mouse",n(y(z.that.__zoom,z.mouse[0]=zn(V,$),z.mouse[1]),z.extent,a))}function v(V){O.on("mousemove.zoom mouseup.zoom",null),m1(V.view,z.moved),Gi(V),z.event(V).end()}}function E(T,...R){if(e.apply(this,arguments)){var $=this.__zoom,z=zn(T.changedTouches?T.changedTouches[0]:T,this),O=$.invert(z),I=$.k*(T.shiftKey?.5:2),w=n(y(g($,I),z,O),t.apply(this,R),a);Gi(T),l>0?qt(this).transition().duration(l).call(A,w,z,T):qt(this).call(x.transform,w,z,T)}}function M(T,...R){if(e.apply(this,arguments)){var $=T.touches,z=$.length,O=C(this,R,T.changedTouches.length===z).event(T),I,w,H,K;for(xc(T),w=0;w<z;++w)H=$[w],K=zn(H,this),K=[K,this.__zoom.invert(K),H.identifier],O.touch0?!O.touch1&&O.touch0[2]!==K[2]&&(O.touch1=K,O.taps=0):(O.touch0=K,I=!0,O.taps=1+!!d);d&&(d=clearTimeout(d)),I&&(O.taps<2&&(p=K[0],d=setTimeout(function(){d=null},h)),na(this),O.start())}}function L(T,...R){if(this.__zooming){var $=C(this,R).event(T),z=T.changedTouches,O=z.length,I,w,H,K;for(Gi(T),I=0;I<O;++I)w=z[I],H=zn(w,this),$.touch0&&$.touch0[2]===w.identifier?$.touch0[0]=H:$.touch1&&$.touch1[2]===w.identifier&&($.touch1[0]=H);if(w=$.that.__zoom,$.touch1){var v=$.touch0[0],V=$.touch0[1],S=$.touch1[0],W=$.touch1[1],ie=(ie=S[0]-v[0])*ie+(ie=S[1]-v[1])*ie,ce=(ce=W[0]-V[0])*ce+(ce=W[1]-V[1])*ce;w=g(w,Math.sqrt(ie/ce)),H=[(v[0]+S[0])/2,(v[1]+S[1])/2],K=[(V[0]+W[0])/2,(V[1]+W[1])/2]}else if($.touch0)H=$.touch0[0],K=$.touch0[1];else return;$.zoom("touch",n(y(w,H,K),$.extent,a))}}function U(T,...R){if(this.__zooming){var $=C(this,R).event(T),z=T.changedTouches,O=z.length,I,w;for(xc(T),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),I=0;I<O;++I)w=z[I],$.touch0&&$.touch0[2]===w.identifier?delete $.touch0:$.touch1&&$.touch1[2]===w.identifier&&delete $.touch1;if($.touch1&&!$.touch0&&($.touch0=$.touch1,delete $.touch1),$.touch0)$.touch0[1]=this.__zoom.invert($.touch0[0]);else if($.end(),$.taps===2&&(w=zn(w,this),Math.hypot(p[0]-w[0],p[1]-w[1])<k)){var H=qt(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return x.wheelDelta=function(T){return arguments.length?(r=typeof T=="function"?T:Os(+T),x):r},x.filter=function(T){return arguments.length?(e=typeof T=="function"?T:Os(!!T),x):e},x.touchable=function(T){return arguments.length?(i=typeof T=="function"?T:Os(!!T),x):i},x.extent=function(T){return arguments.length?(t=typeof T=="function"?T:Os([[+T[0][0],+T[0][1]],[+T[1][0],+T[1][1]]]),x):t},x.scaleExtent=function(T){return arguments.length?(s[0]=+T[0],s[1]=+T[1],x):[s[0],s[1]]},x.translateExtent=function(T){return arguments.length?(a[0][0]=+T[0][0],a[1][0]=+T[1][0],a[0][1]=+T[0][1],a[1][1]=+T[1][1],x):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},x.constrain=function(T){return arguments.length?(n=T,x):n},x.duration=function(T){return arguments.length?(l=+T,x):l},x.interpolate=function(T){return arguments.length?(c=T,x):c},x.on=function(){var T=u.on.apply(u,arguments);return T===u?x:T},x.clickDistance=function(T){return arguments.length?(b=(T=+T)*T,x):Math.sqrt(b)},x.tapDistance=function(T){return arguments.length?(k=+T,x):k},x}const Vm=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],Wm=new Map;function Hm(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};const t=Wm.get(e);if(t)return t;let n=0;for(let s=0;s<e.length;s++)n=(n<<5)-n+e.charCodeAt(s),n=n&n;const r=Math.abs(n)%Vm.length,i=Vm[r];return Wm.set(e,i),i}const qm={bg:"#14b8a6"};function g5({agents:e,events:t,selectedEventIndex:n,isOpen:r,onOpenChange:i}){const[s,a]=j.useState(!1),l=r!==void 0?r:s,c=C=>{i?i(C):a(C)},[u,d]=j.useState(null),p=j.useRef(null),f=j.useRef(null),h=j.useRef(null),m=j.useRef(new Map),b=j.useRef(null),{activeAgent:k,activeTool:x,transitions:g,visitedAgents:y,toolCalls:_}=j.useMemo(()=>{var R;const C=n!==null?n:t.length-1;if(C<0||t.length===0)return{activeAgent:null,activeTool:null,transitions:new Map,visitedAgents:new Set,toolCalls:new Map};const P=t.slice(0,C+1),N=new Map,D=new Map,E=new Set,M=new Set;E.add("system");const L=["system"];let U=null;for(const $ of P)if($.event_type==="agent_start"){const z=$.agent_name;if(E.add(z),L.length>0){const O=L[L.length-1];if(O!==z){const I=`${O}->${z}`;N.set(I,(N.get(I)||0)+1)}}L.push(z)}else if($.event_type==="agent_end")L.length>1&&L.pop();else if($.event_type==="tool_call"){const z=(R=$.data)==null?void 0:R.tool_name;if(z&&L.length>0){const O=L[L.length-1];M.add(z);const I=`${O}->tool:${z}`;D.set(I,(D.get(I)||0)+1),U=z}}else $.event_type==="tool_result"&&(U=null);return M.forEach($=>E.add(`tool:${$}`)),{activeAgent:L.length>1?L[L.length-1]:null,activeTool:U,transitions:N,visitedAgents:E,toolCalls:D}},[t,n]),A=j.useMemo(()=>{const C=new Map(e.map(M=>[M.name,M])),P=[],N=new Map;for(const M of y){if(M.startsWith("tool:"))continue;const L=C.get(M),U=(L==null?void 0:L.id)||M,T=m.current.get(U);P.push({id:U,name:M,type:M==="system"?"System":(L==null?void 0:L.type)||"LlmAgent",isActive:M===k,wasActive:!0,x:T==null?void 0:T.x,y:T==null?void 0:T.y}),N.set(M,U)}for(const M of y){if(!M.startsWith("tool:"))continue;const L=M.slice(5),U=`tool:${L}`,T=m.current.get(U);P.push({id:U,name:L,type:"Tool",isActive:L===x,wasActive:!0,x:T==null?void 0:T.x,y:T==null?void 0:T.y}),N.set(M,U)}const D=new Set(P.map(M=>M.id)),E=[];for(const[M,L]of g){const[U,T]=M.split("->"),R=N.get(U),$=N.get(T);R&&$&&D.has(R)&&D.has($)&&E.push({source:R,target:$,type:"transition",count:L})}for(const[M,L]of _){const[U,T]=M.split("->"),R=N.get(U),$=N.get(T);R&&$&&D.has(R)&&D.has($)&&E.push({source:R,target:$,type:"tool",count:L})}return{nodes:P,links:E}},[e,k,x,y,g,_]);return j.useEffect(()=>{var V;if(!p.current||!l)return;const C=qt(p.current),P=300,N=400;C.selectAll("*").remove();const D=C.append("g"),E={current:((V=b.current)==null?void 0:V.k)||1},M=m5().scaleExtent([.3,3]).on("zoom",S=>{D.attr("transform",S.transform),b.current=S.transform,E.current=S.transform.k});C.call(M),b.current&&(C.call(M.transform,b.current),E.current=b.current.k);const L=()=>{if(A.nodes.length===0)return null;let S=1/0,W=-1/0,ie=1/0,ce=-1/0;if(A.nodes.forEach(Q=>{Q.x!==void 0&&Q.y!==void 0&&(S=Math.min(S,Q.x),W=Math.max(W,Q.x),ie=Math.min(ie,Q.y),ce=Math.max(ce,Q.y))}),S===1/0)return null;const q=60,F=W-S+q*2,G=ce-ie+q*2,ee=Math.min(P/F,N/G,1.5)*.85,X=(S+W)/2,le=(ie+ce)/2;return Ba.translate(P/2,N/2).scale(ee).translate(-X,-le)},U=(S,W,ie)=>S+(W-S)*ie,T=S=>{const W=b.current;if(!W){b.current=S,E.current=S.k,C.call(M.transform,S);return}const ie=.15,ce=U(W.x,S.x,ie),q=U(W.y,S.y,ie),F=U(W.k,S.k,ie),G=Ba.translate(ce,q).scale(F);b.current=G,E.current=G.k,C.call(M.transform,G)},R=A.nodes.every(S=>S.x!==void 0&&S.y!==void 0),$=140,z=()=>{const S=$/E.current;for(const W of A.nodes){if(W.x===void 0||W.y===void 0)continue;const ie=Math.sqrt(W.x*W.x+W.y*W.y);if(ie>S){const ce=S/ie;W.x*=ce,W.y*=ce}}},O=()=>{for(const S of A.nodes)if(S.name==="system"&&S.x!==void 0&&S.y!==void 0){const ie=$/E.current*.75,ce=225*Math.PI/180,q=ie*Math.cos(ce),F=-ie*Math.sin(ce),G=.3;S.vx=(S.vx||0)+(q-S.x)*G,S.vy=(S.vy||0)+(F-S.y)*G}},I=a5(A.nodes).force("link",Z3(A.links).id(S=>S.id).distance(100)).force("charge",l5().strength(-400)).force("center",P3(0,0)).force("collision",Q3().radius(40)).force("boundary",z).force("systemPull",O).alphaDecay(.01);R?I.alpha(.3):I.alpha(1),h.current=I;const w=D.append("g").selectAll("path").data(A.links).join("path").attr("stroke",S=>S.type==="transition"?"#22c55e":S.type==="sub_agent"?"#6366f1":"#f59e0b").attr("stroke-width",S=>S.type==="transition"?Math.min(S.count+2,20):1.5).attr("stroke-opacity",S=>S.type==="transition"?.8:.4).attr("stroke-dasharray",S=>S.type==="tool"?"4,2":"none").attr("fill","none"),H=D.append("g").selectAll("g").data(A.nodes).join("g").call(Kz().on("start",(S,W)=>{S.active||I.alphaTarget(.3).restart(),W.fx=W.x,W.fy=W.y}).on("drag",(S,W)=>{W.fx=S.x,W.fy=S.y}).on("end",(S,W)=>{S.active||I.alphaTarget(0),W.fx=null,W.fy=null})),K=S=>S.type==="System"?14:S.type==="Tool"?12:18;H.append("circle").attr("r",S=>K(S)).attr("fill",S=>S.type==="Tool"?qm.bg:Hm(S.name).bg).attr("stroke",S=>S.isActive?"#fff":S.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",S=>S.isActive?3:1.5).attr("opacity",S=>S.wasActive?1:.5).attr("class",S=>S.isActive?"active-node":"").style("cursor","pointer").on("mouseenter",function(S,W){var F;const ie=(F=f.current)==null?void 0:F.getBoundingClientRect();if(!ie)return;const ce=S.clientX-ie.left,q=S.clientY-ie.top;d({x:ce,y:q,node:W}),qt(this).transition().duration(150).attr("r",K(W)+6)}).on("mouseleave",function(S,W){d(null),qt(this).transition().duration(150).attr("r",K(W))}),H.append("text").text(S=>S.name.length>10?S.name.slice(0,8)+"…":S.name).attr("text-anchor","middle").attr("dy",32).attr("font-size",10).attr("fill","#e4e4e7").attr("font-weight",S=>S.isActive?600:400),I.on("tick",()=>{w.attr("d",W=>{const ie=W.target.x-W.source.x,ce=W.target.y-W.source.y,q=Math.sqrt(ie*ie+ce*ce)*(W.type==="transition"?1.5:2);return`M${W.source.x},${W.source.y}A${q},${q} 0 0,1 ${W.target.x},${W.target.y}`}),H.attr("transform",W=>`translate(${W.x},${W.y})`),A.nodes.forEach(W=>{W.x!==void 0&&W.y!==void 0&&m.current.set(W.id,{x:W.x,y:W.y})});const S=L();S&&T(S)});const v=L();return v&&T(v),()=>{I.stop()}},[A,l]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .agent-graph-container {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          transition: transform 0.3s ease;
        }
        
        .agent-graph-container.closed {
          transform: translateY(-50%) translateX(-300px);
        }
        
        .agent-graph-panel {
          display: flex;
          align-items: stretch;
        }
        
        .agent-graph-content {
          width: 300px;
          height: 400px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-radius: 0 200px 200px 0;
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-left: none;
          box-shadow: 4px 0 20px rgba(0,0,0,0.4);
          overflow: hidden;
          position: relative;
        }
        
        .agent-graph-toggle {
          width: 32px;
          height: 64px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-left: none;
          border-radius: 0 8px 8px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #a5b4fc;
          transition: all 0.2s ease;
          align-self: center;
        }
        
        .agent-graph-toggle:hover {
          background: rgba(99, 102, 241, 0.2);
          color: #c7d2fe;
        }
        
        .agent-graph-toggle svg {
          transition: transform 0.3s ease;
        }
        
        .agent-graph-container.closed .agent-graph-toggle svg {
          transform: rotate(0deg);
        }
        
        .agent-graph-container:not(.closed) .agent-graph-toggle svg {
          transform: rotate(180deg);
        }
        
        .agent-graph-svg {
          width: 100%;
          height: 100%;
        }
        
        .agent-graph-legend {
          position: absolute;
          bottom: 8px;
          left: 8px;
          font-size: 9px;
          color: #a1a1aa;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        
        .legend-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .legend-line {
          width: 16px;
          height: 2px;
        }
        
        .active-node {
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { 
            filter: drop-shadow(0 0 4px rgba(255,255,255,0.5));
            transform: scale(1);
          }
          50% { 
            filter: drop-shadow(0 0 12px rgba(255,255,255,0.8));
            transform: scale(1.08);
          }
        }
        
        .agent-graph-tooltip {
          position: absolute;
          pointer-events: none;
          background: rgba(15, 15, 25, 0.95);
          border: 1px solid rgba(99, 102, 241, 0.4);
          border-radius: 8px;
          padding: 8px 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          z-index: 1001;
          min-width: 100px;
          animation: tooltipFadeIn 0.15s ease;
        }
        
        @keyframes tooltipFadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .agent-graph-tooltip-name {
          font-size: 13px;
          font-weight: 600;
          color: #f4f4f5;
          margin-bottom: 4px;
        }
        
        .agent-graph-tooltip-type {
          font-size: 11px;
          color: #a1a1aa;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .agent-graph-tooltip-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .agent-graph-tooltip-active {
          font-size: 10px;
          color: #22c55e;
          margin-top: 4px;
          font-weight: 500;
        }
      `}),o.jsx("div",{className:`agent-graph-container ${l?"":"closed"}`,children:o.jsxs("div",{className:"agent-graph-panel",children:[o.jsxs("div",{className:"agent-graph-content",ref:f,children:[o.jsx("svg",{ref:p,className:"agent-graph-svg"}),o.jsxs("div",{className:"agent-graph-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#22c55e"}}),o.jsx("span",{children:"agent flow"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#f59e0b",borderStyle:"dashed"}}),o.jsx("span",{children:"tool call"})]})]}),u&&o.jsxs("div",{className:"agent-graph-tooltip",style:{left:Math.min(u.x+15,180),top:Math.max(u.y-20,10)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:u.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:u.node.type==="Tool"?qm.bg:Hm(u.node.name).bg}}),u.node.type]}),u.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"})]})]}),o.jsx("button",{className:"agent-graph-toggle",onClick:()=>c(!l),children:o.jsx(wt,{size:20})})]})})]})}const Jm={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},x5={agent_start:yu,agent_end:yu,tool_call:an,tool_result:an,model_call:Bd,model_response:za,state_change:Rn,transfer:rv,callback_start:wn,callback_end:wn,callback_error:Jy},Km=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],Gm=new Map;function Ua(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=Gm.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%Km.length,Gm.set(e,t)}return Km[t]}function y5(e){var t,n,r,i,s,a,l,c,u,d,p,f,h,m,b,k,x,g,y,_,A,C,P,N,D,E,M,L,U;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const R=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([q,F])=>{const G=F!=null?JSON.stringify(F):"null";return`${q}=${G.slice(0,500)}${G.length>500?"...":""}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${R.slice(0,1e3)}${R.length>1e3?"...":""})`;case"tool_result":const $=(i=e.data)==null?void 0:i.result;let z="";if((a=(s=$==null?void 0:$.content)==null?void 0:s[0])!=null&&a.text)z=String($.content[0].text).slice(0,500);else if(typeof $=="string")z=$.slice(0,500);else if($!=null){const q=JSON.stringify($);z=q?q.slice(0,500):""}else z="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${z}${z.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const O=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((h=e.data)==null?void 0:h.parts)||[],I=O.find(q=>(q==null?void 0:q.type)==="function_call");if(I)return`LLM_RSP → ${I.name||"unknown"}()`;const w=O.find(q=>(q==null?void 0:q.type)==="text");if(w!=null&&w.text){const q=String(w.text);return`LLM_RSP "${q.slice(0,50)}${q.length>50?"...":""}"`}return`LLM_RSP (${((m=e.data)==null?void 0:m.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((b=e.data)==null?void 0:b.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((k=e.data)==null?void 0:k.target)||"unknown"}`;case"callback_start":const K=((x=e.data)==null?void 0:x.callback_name)||"unknown",v=((g=e.data)==null?void 0:g.callback_type)||"";return K==="network_approval"?`⏳ AWAITING APPROVAL ${((y=e.data)==null?void 0:y.host)||((_=e.data)==null?void 0:_.url)||""}`:`CALLBACK START ${v?`[${v}]`:""} ${K}`;case"callback_end":const V=((A=e.data)==null?void 0:A.callback_name)||"unknown",S=((C=e.data)==null?void 0:C.callback_type)||"",W=(P=e.data)!=null&&P.error?" [ERROR]":"";return V==="network_approval"?((N=e.data)==null?void 0:N.action)==="deny"?`🚫 DENIED ${((D=e.data)==null?void 0:D.host)||""}`:`✅ APPROVED ${((E=e.data)==null?void 0:E.pattern)||((M=e.data)==null?void 0:M.host)||""}`:`CALLBACK END ${S?`[${S}]`:""} ${V}${W}`;case"callback_error":const ie=((L=e.data)==null?void 0:L.source)||"unknown",ce=((U=e.data)==null?void 0:U.error)||"Unknown error";return`⚠️ ERROR in ${ie}: ${ce.slice(0,50)}${ce.length>50?"...":""}`;default:return e.event_type.toUpperCase()}}function v5(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function b5(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,i=0;const s=(l,c)=>{l&&n.push(c?o.jsx("span",{style:{color:c},children:l},i++):o.jsx("span",{children:l},i++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const p=r.match(c);if(p&&p.index!==void 0){const f=d?r.indexOf(p[d],p.index):p.index,h=d?p[d]:p[0];(!l||f<l.index)&&(l={index:f,length:h.length,text:h,color:u})}}if(l)l.index>0&&s(r.slice(0,l.index)),s(l.text,l.color),r=r.slice(l.index+l.length);else{s(r);break}}return o.jsx(o.Fragment,{children:n})}function w5({content:e}){const t=e.split(`
`);return o.jsx(o.Fragment,{children:t.map((n,r)=>o.jsx("div",{children:b5(n)},r))})}function k5({event:e}){var l,c,u,d,p,f,h,m,b,k,x,g,y,_,A,C,P,N,D,E,M;const[t,n]=j.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,i]=j.useState(null),s=L=>{const U=new Set(t);U.has(L)?U.delete(L):U.add(L),n(U)},a=(L,U=0,T=!1)=>{const R="  ".repeat(U),$="  ".repeat(U+1);if(L===null)return o.jsx("span",{className:"json-null",children:"null"});if(L===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof L=="boolean")return o.jsx("span",{className:"json-boolean",children:L.toString()});if(typeof L=="number")return o.jsx("span",{className:"json-number",children:L});if(typeof L=="string"){const z=L.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),O=()=>i(L);return z.length>300&&U>0?o.jsxs("span",{className:"json-string json-string-clickable",onClick:O,title:"Click to view as Markdown",children:['"',z.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",L.length," chars)"]})]}):o.jsxs("span",{className:"json-string json-string-clickable",onClick:O,title:"Click to view as Markdown",children:['"',z,'"']})}if(Array.isArray(L))return L.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):L.every(O=>O===null||typeof O!="object")&&L.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),L.map((O,I)=>o.jsxs("span",{children:[a(O,U+1,!0),I<L.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},I)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),L.map((O,I)=>o.jsxs("span",{children:[`
`+$,a(O,U+1),I<L.length-1&&o.jsx("span",{className:"json-comma",children:","})]},I)),`
`+R,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof L=="object"){const z=Object.entries(L);return z.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):z.length<=2&&z.every(([,I])=>I===null||typeof I!="object")&&T?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),z.map(([I,w],H)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',I,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(w,U+1,!0),H<z.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},I)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),z.map(([I,w],H)=>o.jsxs("span",{children:[`
`+$,o.jsxs("span",{className:"json-key",children:['"',I,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(w,U+1),H<z.length-1&&o.jsx("span",{className:"json-comma",children:","})]},I)),`
`+R,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(L)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",style:{backgroundColor:Ua(e.agent_name).bg,color:Ua(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("data"),children:[t.has("data")?o.jsx(Lt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((l=e.data)==null?void 0:l.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("instruction"),children:[t.has("instruction")?o.jsx(Lt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((c=e.data)==null?void 0:c.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("messages"),children:[t.has("messages")?o.jsx(Lt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((L,U)=>{var T;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${L.role}`,children:L.role}),o.jsx("div",{className:"message-parts",children:(T=L.parts)==null?void 0:T.map((R,$)=>o.jsxs("div",{className:"message-part",children:[R.text&&o.jsx("pre",{children:R.text}),R.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:R.function_call.name}),o.jsx("pre",{children:JSON.stringify(R.function_call.args,null,2)})]}),R.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:R.function_response.name}),o.jsx("pre",{children:JSON.stringify(R.function_response.response,null,2)})]})]},$))})]},U)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("result"),children:[t.has("result")?o.jsx(Lt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((f=(p=(d=(u=e.data)==null?void 0:u.result)==null?void 0:d.content)==null?void 0:p[0])==null?void 0:f.text)||(typeof((h=e.data)==null?void 0:h.result)=="string"?e.data.result:JSON.stringify((m=e.data)==null?void 0:m.result,null,2))})})]}),e.event_type==="model_response"&&((b=e.data)==null?void 0:b.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("response"),children:[t.has("response")?o.jsx(Lt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((L,U)=>o.jsxs("div",{className:"response-part",children:[L.type==="text"&&L.text&&o.jsx("pre",{className:"response-text",children:L.text}),L.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",L.name,"()"]}),L.args&&Object.keys(L.args).length>0&&o.jsx("pre",{children:JSON.stringify(L.args,null,2)})]}),L.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},U))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("callback_info"),children:[t.has("callback_info")?o.jsx(Lt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((k=e.data)==null?void 0:k.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((x=e.data)==null?void 0:x.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((g=e.data)==null?void 0:g.module_path)||"unknown"]}),((y=e.data)==null?void 0:y.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((_=e.data)==null?void 0:_.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((A=e.data)==null?void 0:A.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",onClick:()=>s("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?o.jsx(Lt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Source:"})," ",((C=e.data)==null?void 0:C.source)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error Type:"})," ",((P=e.data)==null?void 0:P.error_type)||"unknown"]}),o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",((N=e.data)==null?void 0:N.error)||"No error message"]}),((D=e.data)==null?void 0:D.context)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Context:"})," ",e.data.context]}),((E=e.data)==null?void 0:E.traceback)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&((M=e.data)==null?void 0:M.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("state_delta"),children:[t.has("state_delta")?o.jsx(Lt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([L,U])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:L}),o.jsx("pre",{className:"state-delta-value",children:typeof U=="string"?U:JSON.stringify(U,null,2)})]},L))})]}),r&&o.jsx(j5,{content:r,onClose:()=>i(null)})]})}function j5({content:e,onClose:t}){return o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:o.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(ki,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"String Content"}),o.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:o.jsx(es,{size:18})})]}),o.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:o.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:o.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(Xo,{size:12}),"Copy"]})})]})})}function _5({content:e,title:t,onClose:n}){return o.jsxs("div",{className:"modal-overlay",onClick:n,children:[o.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:t}),o.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(Gv,{children:e})})]}),o.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }
        .modal-content {
          background: var(--bg-primary);
          border-radius: var(--radius-lg);
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-color);
        }
        .modal-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }
        .modal-close {
          background: none;
          border: none;
          font-size: 24px;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
        }
        .modal-close:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
        .modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }
        .markdown-content {
          line-height: 1.6;
          font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
        }
        .markdown-content h1,
        .markdown-content h2,
        .markdown-content h3,
        .markdown-content h4 {
          margin-top: 1em;
          margin-bottom: 0.5em;
          font-weight: 600;
        }
        .markdown-content h1 { font-size: 1.5em; }
        .markdown-content h2 { font-size: 1.3em; }
        .markdown-content h3 { font-size: 1.1em; }
        .markdown-content p {
          margin: 0.5em 0;
        }
        .markdown-content code {
          background: var(--bg-tertiary);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.9em;
        }
        .markdown-content pre {
          background: var(--bg-tertiary);
          padding: 12px;
          border-radius: var(--radius-md);
          overflow-x: auto;
          margin: 1em 0;
        }
        .markdown-content pre code {
          background: none;
          padding: 0;
        }
        .markdown-content ul,
        .markdown-content ol {
          margin: 0.5em 0;
          padding-left: 1.5em;
        }
        .markdown-content blockquote {
          border-left: 3px solid var(--accent-primary);
          padding-left: 1em;
          margin: 1em 0;
          color: var(--text-secondary);
        }
        .markdown-content strong {
          font-weight: 700;
          color: var(--text-primary);
        }
        .markdown-content em {
          font-style: italic;
          color: var(--text-secondary);
        }
        .markdown-content a {
          color: var(--accent-primary);
          text-decoration: underline;
        }
        .markdown-content a:hover {
          opacity: 0.8;
        }
        .markdown-content li {
          margin: 0.25em 0;
        }
        .markdown-content hr {
          border: none;
          border-top: 1px solid var(--border-color);
          margin: 1em 0;
        }
        .markdown-content table {
          border-collapse: collapse;
          width: 100%;
          margin: 1em 0;
        }
        .markdown-content th,
        .markdown-content td {
          border: 1px solid var(--border-color);
          padding: 8px 12px;
          text-align: left;
        }
        .markdown-content th {
          background: var(--bg-tertiary);
          font-weight: 600;
        }
        .markdown-content img {
          max-width: 100%;
          height: auto;
        }
      `})]})}function S5({events:e,selectedEventIndex:t,project:n}){const[r,i]=j.useState(null),s=j.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,h])=>{var m;l[f]={...l[f],value:h,timestamp:d.timestamp,defined:((m=l[f])==null?void 0:m.defined)??!1}})}),l},[e,t,n]),a=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(_5,{content:r.content,title:r.title,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
        .state-entry.unset {
          opacity: 0.6;
        }
        .state-entry.unset .state-value {
          font-style: italic;
          color: #888;
        }
        .state-type {
          font-size: 10px;
          color: #888;
          margin-left: 8px;
        }
        .state-desc {
          font-size: 11px;
          color: #666;
          margin-top: 2px;
        }
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>o.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[l,f&&o.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),o.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const h=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:h,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&o.jsx("div",{className:"state-desc",children:p}),u&&o.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function yc(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Ym(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(s){return`[JS error: ${s}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(s=s[l[1]]),s=s[parseInt(l[2])]):s=s[a]}return s==null?"[No match]":typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function C5({project:e,selectedEventIndex:t,sandboxMode:n}){var ie,ce;const{watches:r,updateWatch:i,addWatch:s,removeWatch:a,runEvents:l}=dt(),[c,u]=j.useState(!1),[d,p]=j.useState(null),[f,h]=j.useState({}),[m,b]=j.useState(new Set),[k,x]=j.useState(""),[g,y]=j.useState(""),[_,A]=j.useState({}),[C,P]=j.useState(""),[N,D]=j.useState([]),[E,M]=j.useState(null),[L,U]=j.useState(null),[T,R]=j.useState(!1);j.useEffect(()=>{Dd().then(D).catch(console.error)},[]);const $=j.useMemo(()=>{const q=e.mcp_servers||[],F=new Set(q.map(ee=>ee.name)),G=N.filter(ee=>!F.has(ee.name));return[...q,...G]},[e.mcp_servers,N]),z=j.useCallback(async q=>{if(!(f[q]||m.has(q))){b(F=>new Set([...F,q]));try{const F=await Se(`/projects/${e.id}/mcp-servers/${encodeURIComponent(q)}/test-connection`,{method:"POST"});F.success&&h(G=>({...G,[q]:F.tools}))}catch(F){console.error("Failed to load tools:",F)}finally{b(F=>{const G=new Set(F);return G.delete(q),G})}}},[e.id,f,m]);j.useEffect(()=>{var ee;if(d)return;if(!k||!g){A({});return}const F=(f[k]||[]).find(X=>X.name===g);if(!((ee=F==null?void 0:F.parameters)!=null&&ee.properties)){A({});return}const G={};Object.entries(F.parameters.properties).forEach(([X,le])=>{le.type==="string"?G[X]=le.default||"":le.type==="number"||le.type==="integer"?G[X]=le.default||0:le.type==="boolean"?G[X]=le.default||!1:G[X]=le.default||null}),A(G)},[k,g,f,d]);const O=()=>{p(null),x(""),y(""),A({}),P(""),M(null),U(null),u(!0)},I=q=>{if(p(q.id),x(q.serverName),y(q.toolName),A({...q.args}),P(q.transform||""),q.result){const{text:F}=yc(q.result);M(F),U(null)}else M(null),U(null);f[q.serverName]||z(q.serverName),u(!0)},w=async()=>{var F;if(!k||!g)return;R(!0),U(null);const q=((F=e.app)==null?void 0:F.id)||`app_${e.id}`;try{const G=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:k,tool_name:g,arguments:_,sandbox_mode:n,app_id:n?q:void 0})}),{text:ee,isError:X}=yc(G);X?(U(ee),M(null)):(M(ee),U(null))}catch(G){U(String(G)),M(null)}finally{R(!1)}},H=j.useMemo(()=>E?!C||!C.trim()?E:Ym(E,C):null,[E,C]),K=()=>{if(!(!k||!g)){if(d){i(d,{serverName:k,toolName:g,args:{..._},transform:C||void 0});const q=r.find(F=>F.id===d);q&&V({...q,serverName:k,toolName:g,args:_,transform:C||void 0,history:q.history||[]})}else{const q={id:`watch-${Date.now()}`,serverName:k,toolName:g,args:{..._},transform:C||void 0,history:[]};s(q),V(q)}u(!1)}},v=q=>{a(q)},V=j.useCallback(async(q,F)=>{var le;i(q.id,{isLoading:!0,error:void 0});const G=F??l.length-1,ee=Date.now(),X=((le=e.app)==null?void 0:le.id)||`app_${e.id}`;try{const Q=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:q.serverName,tool_name:q.toolName,arguments:q.args,sandbox_mode:n,app_id:n?X:void 0})}),Z={eventIndex:G,timestamp:ee,result:Q},oe=[...q.history||[],Z];i(q.id,{result:Q,isLoading:!1,lastRun:ee,history:oe})}catch(Q){const Z={eventIndex:G,timestamp:ee,error:String(Q)},oe=[...q.history||[],Z];i(q.id,{error:String(Q),isLoading:!1,lastRun:ee,history:oe})}},[e.id,(ie=e.app)==null?void 0:ie.id,i,l.length,n]),S=()=>{r.forEach(q=>V(q))},W=j.useMemo(()=>!k||!g?null:(f[k]||[]).find(F=>F.name===g),[k,g,f]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(ki,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:S,title:"Refresh all",children:o.jsx(rn,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:O,title:"Add watch",children:o.jsx(Ge,{size:12})})]})]}),r.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(ki,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:O,children:[o.jsx(Ge,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:r.map(q=>{let F=q.result,G=q.error;if(t!==null&&q.history&&q.history.length>0){const Z=q.history.filter(oe=>oe.eventIndex<=t);if(Z.length>0){const oe=Z[Z.length-1];F=oe.result,G=oe.error}else F=void 0,G=void 0}const{text:ee,isError:X}=F?yc(F):{text:"",isError:!1},le=F?Ym(ee,q.transform):"",Q=G||X;return o.jsxs("div",{className:`watch-item ${Q?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:q.serverName}),o.jsx("span",{className:"watch-tool",children:q.toolName}),Object.keys(q.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(q.args).map(([Z,oe])=>`${Z}=${JSON.stringify(oe)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>I(q),title:"Edit watch",children:o.jsx(an,{size:10})}),o.jsx("button",{onClick:()=>V(q),title:"Refresh",children:q.isLoading?o.jsx(rn,{size:10,className:"spin"}):o.jsx(rn,{size:10})}),o.jsx("button",{onClick:()=>v(q.id),title:"Remove",children:o.jsx(Fe,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:q.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):G?o.jsx("span",{className:"error",children:G}):F?o.jsx("pre",{className:X?"error-text":"",children:le}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},q.id)})}),c&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:q=>q.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>u(!1),children:o.jsx(es,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:k,onChange:q=>{x(q.target.value),d||y(""),q.target.value&&z(q.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),$.map(q=>o.jsx("option",{value:q.name,children:q.name},q.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:g,onChange:q=>y(q.target.value),disabled:!k||m.has(k),children:[o.jsx("option",{value:"",children:m.has(k)?"Loading tools...":"Select tool..."}),(f[k]||[]).map(q=>o.jsx("option",{value:q.name,children:q.name},q.name))]})]}),(W==null?void 0:W.description)&&o.jsx("div",{className:"tool-desc",children:W.description}),((ce=W==null?void 0:W.parameters)==null?void 0:ce.properties)&&Object.keys(W.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(W.parameters.properties).map(([q,F])=>{var G,ee;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[q,((G=W.parameters.required)==null?void 0:G.includes(q))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:F.type==="number"||F.type==="integer"?"number":"text",value:typeof _[q]=="object"?JSON.stringify(_[q]):_[q]??"",onChange:X=>A(le=>({...le,[q]:X.target.value})),placeholder:((ee=F.description)==null?void 0:ee.slice(0,40))||q})]},q)})]}),k&&g&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:w,disabled:T,children:[T?o.jsx(rn,{size:12,className:"spin"}):o.jsx(pr,{size:12}),T?"Running...":"Test Run"]})]}),L&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:L})]}),E&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:E})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:C,onChange:q=>P(q.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"Path:"}),o.jsx("code",{onClick:()=>P(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>P(".content[0].text"),children:".content[0].text"}),o.jsx("code",{onClick:()=>P(".result.data"),children:".result.data"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>P("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>P("js:data.items?.length"),children:"js:data.items?.length"})]})]}),E&&C&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:H!=null&&H.startsWith("[Transform error")?"error":"",children:H})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:K,disabled:!k||!g,children:d?"Save Changes":"Add Watch"})]})]})})]})}function N5(){var Np,Ep;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:s,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:h}=dt(),[m,b]=j.useState(""),[k,x]=j.useState(null),[g,y]=j.useState(null),[_,A]=j.useState(null),[C,P]=j.useState(""),[N,D]=j.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[E,M]=j.useState(()=>{const B=localStorage.getItem("sandboxMode");return B!==null?B==="true":!0});j.useEffect(()=>{localStorage.setItem("sandboxMode",String(E))},[E]);const[L,U]=j.useState(null),[T,R]=j.useState(!1),[$,z]=j.useState({}),[O,I]=j.useState(!1),[w,H]=j.useState("agent"),K=j.useRef(null),v=j.useRef(!0),V=j.useRef(0),[S,W]=j.useState(!0),[ie,ce]=j.useState(!0),[q,F]=j.useState(!1),[G,ee]=j.useState(360),[X,le]=j.useState(!1),[Q,Z]=j.useState(!1),[oe,ve]=j.useState(!1),[_e,Ae]=j.useState([]),je=j.useRef(null);j.useEffect(()=>{const B=localStorage.getItem("promptHistory");if(B)try{const ne=JSON.parse(B),de=Object.entries(ne).map(([me,pe])=>({prompt:me,count:pe})).sort((me,pe)=>pe.count-me.count);Ae(de)}catch(ne){console.error("Failed to parse prompt history:",ne)}},[]);const J=j.useCallback(B=>{const ne=B.trim();if(!ne)return;const de=localStorage.getItem("promptHistory"),me=de?JSON.parse(de):{};me[ne]=(me[ne]||0)+1,localStorage.setItem("promptHistory",JSON.stringify(me));const pe=Object.entries(me).map(([ze,Pe])=>({prompt:ze,count:Pe})).sort((ze,Pe)=>Pe.count-ze.count);Ae(pe)},[]),ae=j.useMemo(()=>{const B=m.toLowerCase().trim();return _e.filter(ne=>!B||ne.prompt.toLowerCase().includes(B)).slice(0,10)},[_e,m]),[he,ye]=j.useState([60,80,100,80,1]),[Y,te]=j.useState(null),xe=j.useRef(0),ue=j.useRef(0),[ke,qe]=j.useState([]),[_n,ot]=j.useState(null),[un,Un]=j.useState(!1),st=j.useRef(0),Sn=j.useCallback(async(B,ne)=>{var ze;if(!e)return;p(B.id,{isLoading:!0,error:void 0});const de=ne??i.length-1,me=Date.now(),pe=((ze=e.app)==null?void 0:ze.id)||`app_${e.id}`;try{const Pe=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:B.serverName,tool_name:B.toolName,arguments:B.args,sandbox_mode:E,app_id:E?pe:void 0})}),Cn={eventIndex:de,timestamp:me,result:Pe},dn=[...B.history||[],Cn];p(B.id,{result:Pe,isLoading:!1,lastRun:me,history:dn})}catch(Pe){const Cn={eventIndex:de,timestamp:me,error:String(Pe)},dn=[...B.history||[],Cn];p(B.id,{error:String(Pe),isLoading:!1,lastRun:me,history:dn})}},[e==null?void 0:e.id,(Np=e==null?void 0:e.app)==null?void 0:Np.id,p,i.length,E]);j.useEffect(()=>{if(i.length>st.current&&d.length>0){const B=i.length-1;d.forEach(ne=>{ne.isLoading||Sn(ne,B)})}st.current=i.length},[i.length,d,Sn]),j.useEffect(()=>{c!==null&&(wp(c),u(null))},[c,u]);const[ft,wp]=j.useState(null),as=j.useRef(null),yl=j.useRef(null);j.useEffect(()=>{if(!X)return;const B=de=>{if(!yl.current)return;const pe=yl.current.getBoundingClientRect().right-de.clientX;ee(Math.min(600,Math.max(200,pe)))},ne=()=>{le(!1)};return document.addEventListener("mousemove",B),document.addEventListener("mouseup",ne),()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",ne)}},[X]),j.useEffect(()=>{if(Y===null)return;const B=de=>{const me=de.clientX-xe.current,pe=Math.max(40,ue.current+me);ye(ze=>{const Pe=[...ze];return Pe[Y]=pe,Pe})},ne=()=>{te(null)};return document.addEventListener("mousemove",B),document.addEventListener("mouseup",ne),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",ne),document.body.style.cursor="",document.body.style.userSelect=""}},[Y]);const ls=(B,ne)=>{ne.preventDefault(),xe.current=ne.clientX,ue.current=he[B],te(B)},kp=he.map((B,ne)=>ne===he.length-1?`minmax(${B}px, 1fr)`:`${B}px`).join(" "),T1=j.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),Tt=j.useMemo(()=>i.filter((B,ne)=>{var de,me,pe;if(_&&(B.timestamp<_[0]||B.timestamp>_[1])||N.size>0&&!N.has(B.event_type))return!1;if(S&&B.event_type==="model_response"){const ze=((me=(de=B.data)==null?void 0:de.response_content)==null?void 0:me.parts)||((pe=B.data)==null?void 0:pe.parts)||[],Pe=ze.some(dn=>dn.type==="function_call"),Cn=ze.some(dn=>dn.type==="text");if(!Pe&&!Cn)return!1}return!(C&&!JSON.stringify(B).toLowerCase().includes(C.toLowerCase()))}),[i,_,N,C,S]),cs=j.useMemo(()=>{var me;let B=0,ne=0;const de=g!==null?g+1:i.length;for(let pe=0;pe<de;pe++){const ze=i[pe];ze.event_type==="model_response"&&((me=ze.data)!=null&&me.token_counts)&&(B+=ze.data.token_counts.input||0,ne+=ze.data.token_counts.output||0)}return{input:B,output:ne,total:B+ne}},[i,g]),jp=g!==null?i[g]:null;j.useEffect(()=>{if(!e){qe([]);return}(async()=>{Un(!0);try{const ne=await gu(e.id);qe(ne)}catch(ne){console.error("Failed to load sessions:",ne),qe([])}finally{Un(!1)}})()},[e]);const vl=j.useCallback(async B=>{if(!e){ot(null);return}if(!B){a(),l(),h(null),ot(null),y(null),A(null);return}try{const ne=await Ly(e.id,B);a(),l(),h(ne.id),ot(B),y(null),A(null);for(const de of ne.events)s(de)}catch(ne){alert(`Failed to load session: ${ne.message||"Unknown error"}`)}},[e,a,l,h,s]);j.useEffect(()=>{if(!e||ke.length===0||un)return;const ne=new URLSearchParams(window.location.search).get("session");if(ne)if(ke.some(me=>me.id===ne)){vl(ne);const me=window.location.pathname;window.history.replaceState({},"",me)}else console.warn(`Session ${ne} not found in available sessions`)},[e,ke,un,vl]),j.useEffect(()=>{n&&as.current&&(as.current.scrollTop=as.current.scrollHeight)},[i.length,n]);const Pi=j.useCallback(B=>{const ne=B??m;if(!e||!ne.trim()||n)return;Z(!0),J(ne),ve(!1),b(ne),k&&(k.close(),x(null)),f||(a(),l(),ot(null)),r(!0),y(null),A(null);const de=Oy(e.id);x(de),de.onopen=()=>{de.send(JSON.stringify({message:ne,agent_id:ft||void 0,session_id:f||void 0,sandbox_mode:E}))},de.onmessage=me=>{var ze;const pe=JSON.parse(me.data);if(pe.event_type==="agent_start"&&((ze=pe.data)!=null&&ze.session_id)){const Pe=pe.data.session_id;pe.data.session_reused,h(Pe),Pe&&ke.some(Cn=>Cn.id===Pe)&&ot(Pe)}else if(pe.type==="session_started")h(pe.session_id),pe.session_id&&ke.some(Pe=>Pe.id===pe.session_id)&&ot(pe.session_id);else if(pe.type==="sandbox_starting")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(pe.type==="sandbox_started")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${pe.sandbox_id})`}});else if(pe.type==="sandbox_response")s({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:pe.data});else if(pe.event_type==="approval_required"||pe.type==="network_request"&&pe.event_type==="approval_required"){const Pe={id:pe.id,method:pe.method||"GET",url:pe.url,host:pe.host,source:pe.source||"agent",headers:pe.headers||{},timeout:pe.timeout||30};U(Pe),s({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${pe.host} requires approval`,host:pe.host,url:pe.url}})}else pe.type==="completed"?(r(!1),de.close()):pe.type==="error"?(r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:pe.error}})):s(pe)},de.onerror=()=>{r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},de.onclose=()=>{r(!1)}},[e,m,n,k,a,r,s,ft,f,E,J]),A1=j.useCallback(()=>{k==null||k.close(),r(!1)},[k,r]),P1=j.useCallback(async(B,ne,de)=>{var dn,zp,Tp,Ap,Pp,Lp,Mp,Rp,Ip,Op,$p,Dp,Fp,Bp,Up,Vp,Wp,Hp,qp,Jp,Kp,Gp,Yp,Qp;if(!L||!e)return;const me=((dn=e.app)==null?void 0:dn.id)||e.id,pe=B?"allow_pattern":"allow_once",ze=B||L.host,Pe=ne||"exact",Cn=de?`/sandbox/${me}/approval?project_id=${e.id}`:`/sandbox/${me}/approval`;try{if(await Se(Cn,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:L.id,action:pe,pattern:ze,pattern_type:Pe,persist:de||!1})}),de&&pe==="allow_pattern"){const wl=((Ap=(Tp=(zp=e.app)==null?void 0:zp.sandbox)==null?void 0:Tp.allowlist)==null?void 0:Ap.user)||[],H1={id:`pattern_${Date.now().toString(36)}`,pattern:ze,pattern_type:Pe,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(Pp=e.app)==null?void 0:Pp.sandbox,enabled:((Mp=(Lp=e.app)==null?void 0:Lp.sandbox)==null?void 0:Mp.enabled)??!1,allowlist:{auto:((Op=(Ip=(Rp=e.app)==null?void 0:Rp.sandbox)==null?void 0:Ip.allowlist)==null?void 0:Op.auto)||[],user:[...wl,H1]},unknown_action:((Dp=($p=e.app)==null?void 0:$p.sandbox)==null?void 0:Dp.unknown_action)??"ask",approval_timeout:((Bp=(Fp=e.app)==null?void 0:Fp.sandbox)==null?void 0:Bp.approval_timeout)??30,agent_memory_limit_mb:((Vp=(Up=e.app)==null?void 0:Up.sandbox)==null?void 0:Vp.agent_memory_limit_mb)??512,agent_cpu_limit:((Hp=(Wp=e.app)==null?void 0:Wp.sandbox)==null?void 0:Hp.agent_cpu_limit)??1,mcp_memory_limit_mb:((Jp=(qp=e.app)==null?void 0:qp.sandbox)==null?void 0:Jp.mcp_memory_limit_mb)??256,mcp_cpu_limit:((Gp=(Kp=e.app)==null?void 0:Kp.sandbox)==null?void 0:Gp.mcp_cpu_limit)??.5,run_timeout:((Qp=(Yp=e.app)==null?void 0:Yp.sandbox)==null?void 0:Qp.run_timeout)??300}}})}s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${ze}`,pattern:ze,action:pe}})}catch(wl){console.error("Failed to approve:",wl)}U(null)},[L,e,s,t]),L1=j.useCallback(async()=>{var ne;if(!L||!e)return;const B=((ne=e.app)==null?void 0:ne.id)||e.id;try{await Se(`/sandbox/${B}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:L.id,action:"deny"})}),s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${L.host}`,host:L.host,action:"deny"}})}catch(de){console.error("Failed to deny:",de)}U(null)},[L,e,s]),Li=j.useCallback(async(B=!0)=>{var de;if(!e)return;const ne=((de=e.app)==null?void 0:de.id)||`app_${e.id}`;B&&I(!0);try{const[me,pe]=await Promise.all([Se(`/sandbox/${ne}/logs?container=agent&tail=500`).catch(()=>null),Se(`/sandbox/${ne}/logs?container=gateway&tail=500`).catch(()=>null)]);z({agent:(me==null?void 0:me.logs)||(me==null?void 0:me.error)||"No logs available",gateway:(pe==null?void 0:pe.logs)||(pe==null?void 0:pe.error)||"No logs available"})}catch(me){console.error("Failed to fetch logs:",me),z({agent:`Error fetching logs: ${me}`,gateway:`Error fetching logs: ${me}`})}finally{B&&I(!1)}},[e]),M1=j.useCallback(()=>{R(!0),Li()},[Li]);j.useEffect(()=>{if(!T||!K.current||O)return;const B=K.current,ne=V.current,de=B.scrollHeight;setTimeout(()=>{if(K.current){if(v.current)K.current.scrollTop=K.current.scrollHeight;else if(ne>0&&de>ne){const me=de-ne;K.current.scrollTop+=me}V.current=K.current.scrollHeight}},50)},[T,w,$,O]),j.useEffect(()=>{T&&(v.current=!0,V.current=0)},[T,w]);const R1=j.useCallback(()=>{if(!K.current)return;const B=K.current,de=B.scrollHeight-B.scrollTop-B.clientHeight<50;v.current=de},[]);j.useEffect(()=>{if(!T)return;const B=setInterval(()=>{Li(!1)},3e3);return()=>clearInterval(B)},[T,Li]),j.useEffect(()=>{const B=ne=>{if((ne.metaKey||ne.ctrlKey)&&ne.key==="Enter"){ne.preventDefault(),Pi();return}if(ne.key==="ArrowDown"||ne.key==="ArrowUp"){if(ne.target instanceof HTMLInputElement||ne.target instanceof HTMLTextAreaElement||(ne.preventDefault(),Tt.length===0))return;if(ne.key==="ArrowDown")if(g===null){const de=i.indexOf(Tt[0]);y(de)}else{const de=Tt.findIndex(me=>i.indexOf(me)===g);if(de<Tt.length-1){const me=i.indexOf(Tt[de+1]);y(me)}}else if(ne.key==="ArrowUp")if(g===null){const de=i.indexOf(Tt[Tt.length-1]);y(de)}else{const de=Tt.findIndex(me=>i.indexOf(me)===g);if(de>0){const me=i.indexOf(Tt[de-1]);y(me)}}}};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[Pi,Tt,g,i]);const I1=j.useCallback(()=>{var pe;if(i.length===0)return;const B={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:ft||((pe=e==null?void 0:e.app)==null?void 0:pe.root_agent_id),events:i},ne=new Blob([JSON.stringify(B,null,2)],{type:"application/json"}),de=URL.createObjectURL(ne),me=document.createElement("a");me.href=de,me.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(me),me.click(),document.body.removeChild(me),URL.revokeObjectURL(de)},[i,e,ft]),O1=j.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const B=await Py(f);if(B.success){alert(B.message||"Session saved to memory successfully");try{const ne=await gu(e.id);qe(ne)}catch{}}else alert(`Failed to save to memory: ${B.error||"Unknown error"}`)}catch(B){alert(`Error saving to memory: ${B.message||"Unknown error"}`)}},[f,e]),[$1,us]=j.useState(!1),[D1,F1]=j.useState([]),[Mi,_p]=j.useState(""),[bl,B1]=j.useState("Test Case from Session"),[Sp,Cp]=j.useState(!1),U1=j.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const B=await Se(`/projects/${e.id}/eval-sets`);if(F1(B.eval_sets||[]),!B.eval_sets||B.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}_p(B.eval_sets[0].id),us(!0)}catch(B){alert(`Error loading eval sets: ${B.message||"Unknown error"}`)}},[f,e]),V1=j.useCallback(async()=>{if(!f||!e||!Mi){alert("Please select an evaluation set");return}Cp(!0);try{const B=await Se(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:Mi,case_name:bl})});us(!1),alert(`Test case "${B.eval_case.name}" created successfully!

Token count: ${B.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(B){alert(`Error creating test case: ${B.message||"Unknown error"}`)}finally{Cp(!1)}},[f,e,Mi,bl]),W1=j.useCallback(()=>{const B=document.createElement("input");B.type="file",B.accept=".json",B.onchange=async ne=>{var me;const de=(me=ne.target.files)==null?void 0:me[0];if(de)try{const pe=await de.text(),ze=JSON.parse(pe);if(!ze.events||!Array.isArray(ze.events)){alert("Invalid run file: missing events array");return}a(),l(),y(null),A(null),ze.events.forEach(Pe=>{s(Pe)})}catch(pe){alert(`Failed to load run file: ${pe}`)}},B.click()},[a,l,s]);return j.useEffect(()=>{if(g!==null){const B=document.querySelector(".event-row.selected");B==null||B.scrollIntoView({behavior:"smooth",block:"nearest"})}},[g]),e?o.jsxs("div",{className:`run-panel ${X?"resizing":""}`,children:[o.jsx("style",{children:`
        .run-panel {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          background: #0a0a0f;
          color: #e4e4e7;
          font-family: 'SF Mono', 'Consolas', 'Monaco', monospace;
          font-size: 12px;
        }
        
        .run-panel.resizing {
          cursor: col-resize;
          user-select: none;
        }
        
        .run-panel.resizing * {
          cursor: col-resize;
        }
        
        .run-panel.empty {
          align-items: center;
          justify-content: center;
          color: #71717a;
        }
        
        /* Input Area */
        .input-area {
          display: flex;
          gap: 8px;
          padding: 8px;
          background: #18181b;
          border-bottom: 1px solid #27272a;
        }
        
        .input-area .agent-selector {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 8px 12px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 11px;
          min-width: 140px;
          max-width: 200px;
          cursor: pointer;
        }
        
        .input-area .agent-selector:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .input-area .agent-selector:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .input-area input {
          flex: 1;
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 8px 12px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 12px;
        }
        
        .input-area input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .input-area button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: #3b82f6;
          border: none;
          border-radius: 4px;
          color: white;
          font-family: inherit;
          font-size: 12px;
          cursor: pointer;
        }
        
        .input-area button:hover {
          background: #2563eb;
        }
        
        .input-area button.stop {
          background: #ef4444;
        }
        
        .input-area button.stop:hover {
          background: #dc2626;
        }
        
        .input-area button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Toolbar */
        .toolbar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          background: #18181b;
          border-bottom: 1px solid #27272a;
        }
        
        .toolbar-section {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .toolbar-divider {
          width: 1px;
          height: 20px;
          background: #27272a;
          margin: 0 8px;
        }
        
        .toolbar input {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 4px 8px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 11px;
          width: 200px;
        }
        
        .toolbar input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .filter-chip {
          padding: 3px 8px;
          background: #27272a;
          border: 1px solid #3f3f46;
          border-radius: 4px;
          color: #a1a1aa;
          font-size: 10px;
          cursor: pointer;
        }
        
        .filter-chip:hover {
          background: #3f3f46;
        }
        
        .filter-chip.active {
          background: #3b82f6;
          border-color: #3b82f6;
          color: white;
        }
        
        .toolbar-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: transparent;
          border: 1px solid #3f3f46;
          border-radius: 4px;
          color: #a1a1aa;
          font-size: 10px;
          cursor: pointer;
        }
        
        .toolbar-btn:hover {
          background: #27272a;
          color: #e4e4e7;
        }
        
        .toolbar-btn.active {
          background: #27272a;
          border-color: #3b82f6;
          color: #3b82f6;
        }
        
        /* Main Content */
        .main-content {
          display: flex;
          flex: 1;
          min-height: 0;
        }
        
        /* Event List (Packet List) */
        .event-list-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #27272a;
        }
        
        .event-list-header {
          display: grid;
          gap: 0;
          background: #18181b;
          border-bottom: 1px solid #27272a;
          font-size: 10px;
          font-weight: 600;
          color: #71717a;
          text-transform: uppercase;
        }
        
        .event-list-header .header-cell {
          padding: 6px 8px;
          background: #18181b;
          position: relative;
          display: flex;
          align-items: center;
          min-width: 0;
          overflow: hidden;
        }
        
        .event-list-header .header-cell span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .column-resize-handle {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          cursor: col-resize;
          background: transparent;
          z-index: 1;
        }
        
        .column-resize-handle:hover,
        .column-resize-handle.active {
          background: #3b82f6;
        }
        
        .event-list {
          flex: 1;
          overflow-y: auto;
          background: #09090b;
        }
        
        .event-row {
          display: grid;
          gap: 0;
          border-bottom: 1px solid #18181b;
          cursor: pointer;
          transition: background 0.1s;
        }
        
        .event-row:hover {
          filter: brightness(1.2);
        }
        
        .event-row.selected {
          outline: 1px solid #3b82f6;
          outline-offset: -1px;
        }
        
        .event-row > div {
          padding: 3px 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .event-row .index { color: #71717a; font-size: 10px; }
        .event-row .time { font-size: 10px; }
        .event-row .agent { 
          font-weight: 500;
          display: flex;
          align-items: center;
        }
        .event-row .agent-badge {
          display: inline-block;
          padding: 1px 6px;
          border-radius: 3px;
          font-size: 10px;
          font-weight: 600;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .event-row .type { 
          font-size: 10px; 
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .event-row .summary { font-size: 11px; }
        
        /* Time Range Selector */
        .time-range {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          background: #18181b;
          border-bottom: 1px solid #27272a;
        }
        
        .time-range label {
          font-size: 10px;
          color: #71717a;
        }
        
        .time-range input[type="datetime-local"] {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 2px 6px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 10px;
        }
        
        .time-range button {
          padding: 2px 8px;
          background: #27272a;
          border: 1px solid #3f3f46;
          border-radius: 4px;
          color: #a1a1aa;
          font-size: 10px;
          cursor: pointer;
        }
        
        .time-range button:hover {
          background: #3f3f46;
        }
        
        /* Side Panel */
        .side-panel-container {
          display: flex;
          flex-shrink: 0;
        }
        
        .resize-handle {
          width: 4px;
          background: #27272a;
          cursor: col-resize;
          transition: background 0.15s;
        }
        
        .resize-handle:hover,
        .resize-handle.active {
          background: #3b82f6;
        }
        
        .side-panel {
          display: flex;
          flex-direction: column;
          background: #0f0f14;
          min-width: 0;
        }
        
        .side-panel-tabs {
          display: flex;
          background: #18181b;
          border-bottom: 1px solid #27272a;
        }
        
        .side-panel-tab {
          flex: 1;
          padding: 8px;
          background: transparent;
          border: none;
          color: #71717a;
          font-size: 11px;
          cursor: pointer;
          border-bottom: 2px solid transparent;
        }
        
        .side-panel-tab:hover {
          color: #a1a1aa;
        }
        
        .side-panel-tab.active {
          color: #e4e4e7;
          border-bottom-color: #3b82f6;
        }
        
        .side-panel-content {
          flex: 1;
          overflow-y: auto;
        }
        
        /* Event Detail */
        .event-detail {
          padding: 8px;
        }
        
        .detail-header {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        
        .detail-type {
          padding: 2px 8px;
          background: #3b82f6;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
        }
        
        .detail-agent {
          color: #a1a1aa;
          font-size: 11px;
        }
        
        .detail-time {
          color: #71717a;
          font-size: 10px;
          margin-left: auto;
        }
        
        .detail-section {
          margin-bottom: 8px;
          background: #18181b;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          background: #27272a;
          cursor: pointer;
          font-size: 11px;
          font-weight: 500;
        }
        
        .section-header:hover {
          background: #3f3f46;
        }
        
        .section-content {
          padding: 8px;
          font-size: 11px;
          line-height: 1.5;
        }
        
        /* JSON Viewer */
        .json-viewer {
          font-family: 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          line-height: 1.4;
          white-space: pre;
          overflow-x: auto;
        }

        .json-key { color: #93c5fd; }
        .json-string { color: #86efac; }
        .json-string-clickable { 
          cursor: pointer; 
          text-decoration-style: dotted;
          text-underline-offset: 2px;
        }
        .json-string-clickable:hover { 
          color: #4ade80;
          text-decoration-style: solid;
        }
        .json-number { color: #fde047; }
        .json-boolean { color: #f472b6; }
        .json-null { color: #71717a; }
        .json-undefined { color: #71717a; font-style: italic; }
        .json-truncated { color: #71717a; font-size: 10px; }
        .json-bracket { color: #a1a1aa; }
        .json-colon { color: #a1a1aa; }
        .json-comma { color: #a1a1aa; }
        .json-block { display: inline; }
        .json-inline { display: inline; }
        
        /* Message Items */
        .message-item {
          margin-bottom: 8px;
          padding: 8px;
          background: #09090b;
          border-radius: 4px;
        }
        
        .message-role {
          display: inline-block;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        
        .message-role.user { background: #3b82f6; }
        .message-role.model { background: #22c55e; }
        .message-role.assistant { background: #22c55e; }
        .message-role.system { background: #a855f7; }
        
        .message-parts pre {
          margin: 4px 0;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          white-space: pre-wrap;
          word-break: break-all;
          font-size: 11px;
        }
        
        .function-call, .function-response {
          margin: 4px 0;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          border-left: 3px solid #3b82f6;
        }
        
        .function-response {
          border-left-color: #22c55e;
        }
        
        .result-content {
          white-space: pre-wrap;
          word-break: break-all;
          background: #18181b;
          padding: 8px;
          border-radius: 4px;
          max-height: 300px;
          overflow-y: auto;
        }
        
        .token-badge, .char-count {
          margin-left: auto;
          font-size: 10px;
          color: #71717a;
          background: #27272a;
          padding: 2px 6px;
          border-radius: 4px;
        }
        
        .instruction-text {
          white-space: pre-wrap;
          word-break: break-word;
          background: #18181b;
          padding: 8px;
          border-radius: 4px;
          margin: 0;
          font-size: 11px;
          max-height: 400px;
          overflow-y: auto;
          border-left: 3px solid #a855f7;
        }
        
        .response-part {
          margin-bottom: 8px;
        }
        
        .response-part:last-child {
          margin-bottom: 0;
        }
        
        .response-text {
          white-space: pre-wrap;
          word-break: break-word;
          background: #18181b;
          padding: 8px;
          border-radius: 4px;
          margin: 0;
          font-size: 11px;
          max-height: 400px;
          overflow-y: auto;
        }
        
        .thought-indicator {
          font-size: 10px;
          color: #a855f7;
          margin-top: 4px;
        }
        
        .state-delta-item {
          margin-bottom: 8px;
          background: #18181b;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .state-delta-item:last-child {
          margin-bottom: 0;
        }
        
        .state-delta-key {
          padding: 6px 8px;
          background: #27272a;
          font-size: 11px;
          font-weight: 600;
          color: #22c55e;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }
        
        .state-delta-value {
          padding: 8px;
          margin: 0;
          font-size: 11px;
          white-space: pre-wrap;
          word-break: break-word;
          max-height: 300px;
          overflow-y: auto;
        }
        
        /* State Snapshot */
        .state-snapshot {
          padding: 8px;
        }
        
        .state-header {
          padding: 8px;
          margin-bottom: 8px;
          background: #18181b;
          border-radius: 4px;
          font-size: 11px;
          color: #a1a1aa;
          text-align: center;
        }
        
        .state-header {
          padding: 6px 8px;
          font-size: 10px;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #27272a;
          margin-bottom: 8px;
        }
        
        .state-empty {
          padding: 16px;
          text-align: center;
          color: #71717a;
        }
        
        .state-entry {
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          margin-bottom: 6px;
        }
        
        .state-key {
          font-weight: 600;
          color: #93c5fd;
          font-size: 11px;
          margin-bottom: 4px;
        }
        
        .state-value {
          font-family: 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          color: #86efac;
          white-space: pre-wrap;
          word-break: break-all;
          max-height: 100px;
          overflow-y: auto;
          transition: background 0.15s ease;
        }
        .state-value:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .state-time {
          font-size: 10px;
          color: #71717a;
          margin-top: 4px;
        }
        
        /* MCP Runner */
        .mcp-runner {
          padding: 8px;
        }
        
        .runner-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          margin-bottom: 8px;
          font-weight: 600;
        }
        
        .runner-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .form-row label {
          font-size: 10px;
          color: #71717a;
          text-transform: uppercase;
        }
        
        .form-row select, .form-row input {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 6px 8px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 11px;
        }
        
        .form-row select:focus, .form-row input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .tool-description {
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          font-size: 11px;
          color: #a1a1aa;
        }
        
        .tool-params {
          background: #18181b;
          border-radius: 4px;
          padding: 8px;
        }
        
        .params-header {
          font-size: 10px;
          color: #71717a;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        
        .param-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 8px;
        }
        
        .param-row label {
          font-size: 10px;
          color: #a1a1aa;
        }
        
        .param-row .required {
          color: #ef4444;
          margin-left: 2px;
        }
        
        .run-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 16px;
          background: #22c55e;
          border: none;
          border-radius: 4px;
          color: white;
          font-family: inherit;
          font-size: 11px;
          cursor: pointer;
        }
        
        .run-btn:hover {
          background: #16a34a;
        }
        
        .run-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Tool Watch Panel */
        .tool-watch-panel {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .watch-header {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          font-weight: 600;
          font-size: 12px;
        }
        
        .watch-auto-badge {
          font-size: 9px;
          color: #10b981;
          background: rgba(16, 185, 129, 0.15);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 500;
        }
        
        .watch-header .watch-actions {
          margin-left: auto;
          display: flex;
          gap: 4px;
        }
        
        .watch-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          background: transparent;
          border: none;
          border-radius: 3px;
          color: #a1a1aa;
          cursor: pointer;
        }
        
        .watch-btn:hover {
          background: #27272a;
          color: #e4e4e7;
        }
        
        .watch-btn.active {
          background: #22c55e30;
          color: #22c55e;
        }
        
        .watch-btn.active:hover {
          background: #22c55e50;
        }
        
        .watch-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 24px;
          color: #71717a;
          font-size: 11px;
        }
        
        .add-watch-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: #27272a;
          border: none;
          border-radius: 4px;
          color: #e4e4e7;
          font-size: 11px;
          cursor: pointer;
        }
        
        .add-watch-btn:hover {
          background: #3f3f46;
        }
        
        .watch-list {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .watch-item {
          background: #18181b;
          border: 1px solid #27272a;
          border-radius: 4px;
          margin-bottom: 6px;
        }
        
        .watch-item.error {
          border-color: #7f1d1d;
        }
        
        .watch-item-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 8px;
          background: #0c0c0d;
          border-radius: 4px 4px 0 0;
          border-bottom: 1px solid #27272a;
        }
        
        .watch-expr {
          font-family: 'SF Mono', 'Consolas', monospace;
          font-size: 10px;
          display: flex;
          align-items: center;
          gap: 4px;
          overflow: hidden;
        }
        
        .watch-server {
          color: #71717a;
        }
        
        .watch-server::after {
          content: '/';
          margin: 0 2px;
          color: #3f3f46;
        }
        
        .watch-tool {
          color: #fbbf24;
        }
        
        .watch-args {
          color: #71717a;
          font-size: 9px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .watch-time-indicator {
          color: #3b82f6;
          font-size: 9px;
          font-weight: 500;
          margin-left: 4px;
          background: #3b82f620;
          padding: 1px 4px;
          border-radius: 3px;
          flex-shrink: 0;
        }
        
        .watch-item-actions {
          display: flex;
          gap: 4px;
          flex-shrink: 0;
        }
        
        .watch-item-actions button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3px;
          background: transparent;
          border: none;
          border-radius: 3px;
          color: #71717a;
          cursor: pointer;
        }
        
        .watch-item-actions button:hover {
          background: #27272a;
          color: #e4e4e7;
        }
        
        .watch-result {
          padding: 8px 10px;
          font-family: 'SF Mono', 'Consolas', monospace;
          font-size: 11px;
          max-height: 200px;
          overflow-y: auto;
          background: #0c0c0d;
          border-radius: 0 0 4px 4px;
        }
        
        .watch-result .loading {
          color: #71717a;
          font-style: italic;
        }
        
        .watch-result .error {
          color: #ef4444;
        }
        
        .watch-result .no-result {
          color: #52525b;
          font-style: italic;
        }
        
        .watch-result pre {
          margin: 0;
          white-space: pre-wrap;
          word-break: break-word;
          color: #86efac;
          line-height: 1.4;
        }
        
        .watch-result pre.error-text {
          color: #fca5a5;
        }
        
        .form-hint {
          font-size: 10px;
          color: #71717a;
          margin-top: 4px;
        }
        
        .transform-hints {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 8px;
          margin-top: 6px;
          font-size: 10px;
          align-items: center;
        }
        
        .transform-hints .hint-title {
          color: #71717a;
          font-weight: 500;
        }
        
        .transform-hints code {
          background: #27272a;
          color: #a1a1aa;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 9px;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .transform-hints code:hover {
          background: #3f3f46;
          color: #e4e4e7;
        }
        
        /* Test Section in Dialog */
        .test-section {
          background: #0c0c0d;
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 12px;
        }
        
        .test-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        
        .test-header label {
          font-size: 10px;
          color: #71717a;
          text-transform: uppercase;
        }
        
        .test-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: #27272a;
          border: none;
          border-radius: 4px;
          color: #e4e4e7;
          font-size: 11px;
          cursor: pointer;
        }
        
        .test-btn:hover:not(:disabled) {
          background: #3f3f46;
        }
        
        .test-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .test-result {
          margin-bottom: 8px;
        }
        
        .test-result.error pre {
          color: #fca5a5;
        }
        
        .test-label {
          display: block;
          font-size: 10px;
          color: #71717a;
          margin-bottom: 4px;
        }
        
        .test-result pre {
          margin: 0;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          font-size: 10px;
          color: #86efac;
          white-space: pre-wrap;
          word-break: break-word;
          max-height: 120px;
          overflow-y: auto;
        }
        
        .transform-preview {
          background: #0c0c0d;
          border-radius: 4px;
          padding: 10px;
          margin-top: 8px;
        }
        
        .transform-preview pre {
          margin: 0;
          padding: 8px;
          background: #18181b;
          border-radius: 4px;
          font-size: 10px;
          color: #93c5fd;
          white-space: pre-wrap;
          word-break: break-word;
          max-height: 100px;
          overflow-y: auto;
        }
        
        .transform-preview pre.error {
          color: #fca5a5;
        }
        
        /* Watch Dialog */
        .watch-dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }
        
        .watch-dialog {
          background: #18181b;
          border: 1px solid #27272a;
          border-radius: 8px;
          width: 500px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
        }
        
        .dialog-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid #27272a;
          font-weight: 600;
        }
        
        .dialog-header button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          background: transparent;
          border: none;
          border-radius: 4px;
          color: #71717a;
          cursor: pointer;
        }
        
        .dialog-header button:hover {
          background: #27272a;
          color: #e4e4e7;
        }
        
        .dialog-body {
          padding: 16px;
          overflow-y: auto;
        }
        
        .dialog-body .form-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }
        
        .dialog-body .form-row label {
          font-size: 11px;
          color: #a1a1aa;
          font-weight: 500;
        }
        
        .dialog-body .form-row select,
        .dialog-body .form-row input {
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 8px 10px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 12px;
        }
        
        .dialog-body .form-row select:focus,
        .dialog-body .form-row input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .tool-desc {
          padding: 8px 10px;
          background: #0c0c0d;
          border-radius: 4px;
          font-size: 11px;
          color: #a1a1aa;
          margin-bottom: 12px;
        }
        
        .tool-args {
          background: #0c0c0d;
          border-radius: 4px;
          padding: 10px;
        }
        
        .tool-args > label {
          font-size: 10px;
          color: #71717a;
          text-transform: uppercase;
          display: block;
          margin-bottom: 8px;
        }
        
        .arg-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        
        .arg-row .arg-name {
          font-size: 11px;
          color: #a1a1aa;
          min-width: 80px;
        }
        
        .arg-row .required {
          color: #ef4444;
          margin-left: 2px;
        }
        
        .arg-row input {
          flex: 1;
          background: #09090b;
          border: 1px solid #27272a;
          border-radius: 4px;
          padding: 6px 8px;
          color: #e4e4e7;
          font-family: inherit;
          font-size: 11px;
        }
        
        .arg-row input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .dialog-footer {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          padding: 12px 16px;
          border-top: 1px solid #27272a;
        }
        
        .cancel-btn {
          padding: 8px 16px;
          background: transparent;
          border: 1px solid #27272a;
          border-radius: 4px;
          color: #a1a1aa;
          font-size: 12px;
          cursor: pointer;
        }
        
        .cancel-btn:hover {
          background: #27272a;
          color: #e4e4e7;
        }
        
        .add-btn {
          padding: 8px 16px;
          background: #3b82f6;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 12px;
          cursor: pointer;
        }
        
        .add-btn:hover:not(:disabled) {
          background: #2563eb;
        }
        
        .add-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Empty State */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 200px;
          color: #71717a;
          gap: 8px;
        }
        
        /* Stats Bar */
        .stats-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 4px 8px;
          background: #18181b;
        }
        
        .stats-bar-spacer {
          flex: 1;
        }
        
        .stats-bar-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          background: #27272a;
          border: 1px solid #3f3f46;
          border-radius: 4px;
          color: #a1a1aa;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .stats-bar-btn:hover:not(:disabled) {
          background: #3f3f46;
          color: #e4e4e7;
        }
        
        .stats-bar-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          border-top: 1px solid #27272a;
          font-size: 10px;
          color: #71717a;
        }
        
        .stat-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .stat-value {
          color: #e4e4e7;
          font-weight: 600;
        }
        
        .token-stats {
          padding: 4px 10px;
        }
        
        .token-value {
          display: flex;
          gap: 8px;
          font-family: var(--font-mono);
        }
        
        .token-in {
          color: #34d399;
        }
        
        .token-out {
          color: #f472b6;
        }
        
        .token-total {
          color: #a78bfa;
          font-weight: 700;
        }
      `}),o.jsx(g5,{agents:e.agents,events:i,selectedEventIndex:g,isOpen:Q,onOpenChange:Z}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:ft||"",onChange:B=>wp(B.target.value||null),disabled:n,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Ep=e.agents.find(B=>B.id===e.app.root_agent_id))==null?void 0:Ep.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(B=>B.id!==e.app.root_agent_id).map(B=>o.jsxs("option",{value:B.id,children:[B.name," (",B.type.replace("Agent",""),")"]},B.id))]}),o.jsxs("select",{className:"agent-selector",value:_n||"",onChange:B=>vl(B.target.value||null),disabled:n||un,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:un?"Loading...":"Load Session..."}),ke.map(B=>{const ne=new Date(B.started_at*1e3),de=B.duration?`${B.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:B.id,children:[ne.toLocaleString()," (",B.event_count," events, ",de,")"]},B.id)})]}),o.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[o.jsx("input",{ref:je,type:"text",placeholder:"Enter your query...",value:m,onChange:B=>b(B.target.value),onFocus:()=>ve(!0),onBlur:()=>setTimeout(()=>ve(!1),150),onKeyDown:B=>{B.key==="Enter"&&!B.shiftKey?Pi():B.key==="Escape"&&ve(!1)},disabled:n,style:{flex:1}}),oe&&ae.length>0&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:ae.map((B,ne)=>o.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:ne<ae.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:de=>{de.preventDefault(),Pi(B.prompt)},onMouseEnter:de=>{de.currentTarget.style.background="#27272a"},onMouseLeave:de=>{de.currentTarget.style.background="transparent"},children:[o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:B.prompt}),o.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",B.count]})]},ne))})]}),n?o.jsxs("button",{className:"stop",onClick:A1,children:[o.jsx(sj,{size:14}),"Stop"]}):o.jsxs("button",{onClick:()=>Pi(),disabled:!m.trim(),children:[o.jsx(pr,{size:14}),"Run"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:E?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[o.jsx("input",{type:"checkbox",checked:E,onChange:B=>M(B.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),E&&o.jsx("button",{onClick:M1,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(Xy,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:C,onChange:B=>P(B.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(B=>o.jsx("button",{className:`filter-chip ${N.has(B)?"active":""}`,onClick:()=>{const ne=new Set(N);ne.has(B)?ne.delete(B):ne.add(B),D(ne)},children:B.replace("_"," ")},B)),o.jsx("button",{className:`filter-chip ${N.has("callback_start")&&N.has("callback_end")?"active":""}`,onClick:()=>{const B=new Set(N);B.has("callback_start")&&B.has("callback_end")?(B.delete("callback_start"),B.delete("callback_end")):(B.add("callback_start"),B.add("callback_end")),D(B)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${S?"active":""}`,onClick:()=>W(!S),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${ie?"active":""}`,onClick:()=>ce(!ie),children:[o.jsx(Rn,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${q?"active":""}`,onClick:()=>F(!q),children:[o.jsx(Yl,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[Tt.length," / ",i.length," events"]}),_&&o.jsx("button",{className:"toolbar-btn",onClick:()=>A(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:yl,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:kp},children:[o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"#"}),o.jsx("div",{className:`column-resize-handle ${Y===0?"active":""}`,onMouseDown:B=>ls(0,B)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Time"}),o.jsx("div",{className:`column-resize-handle ${Y===1?"active":""}`,onMouseDown:B=>ls(1,B)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Agent"}),o.jsx("div",{className:`column-resize-handle ${Y===2?"active":""}`,onMouseDown:B=>ls(2,B)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Type"}),o.jsx("div",{className:`column-resize-handle ${Y===3?"active":""}`,onMouseDown:B=>ls(3,B)})]}),o.jsx("div",{className:"header-cell",children:o.jsx("span",{children:"Info"})})]}),o.jsx("div",{className:"event-list",ref:as,children:Tt.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Qy,{size:24}),o.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):Tt.map((B,ne)=>{const de=i.indexOf(B),me=Jm[B.event_type]||Jm.error,pe=x5[B.event_type]||za;return o.jsxs("div",{className:`event-row ${g===de?"selected":""}`,style:{background:me.bg,gridTemplateColumns:kp},onClick:()=>y(de),onDoubleClick:()=>{ce(!1),F(!1)},children:[o.jsx("div",{className:"index",children:de}),o.jsx("div",{className:"time",style:{color:me.fg},children:v5(B.timestamp,T1.min)}),o.jsx("div",{className:"agent",children:o.jsx("span",{className:"agent-badge",style:{backgroundColor:Ua(B.agent_name).bg,color:Ua(B.agent_name).fg},children:B.agent_name})}),o.jsxs("div",{className:"type",style:{color:me.fg},children:[o.jsx(pe,{size:10}),B.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:y5(B)})]},de)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:G},children:[o.jsx("div",{className:`resize-handle ${X?"active":""}`,onMouseDown:()=>le(!0)}),o.jsxs("div",{className:"side-panel",style:{width:G-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!ie&&!q?"active":""}`,onClick:()=>{ce(!1),F(!1)},children:[o.jsx(ki,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${ie?"active":""}`,onClick:()=>{ce(!0),F(!1)},children:[o.jsx(Rn,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${q?"active":""}`,onClick:()=>{F(!0),ce(!1)},children:[o.jsx(Yl,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:q?o.jsx(C5,{project:e,selectedEventIndex:g,sandboxMode:E}):ie?o.jsx(S5,{events:i,selectedEventIndex:g,project:e}):jp?o.jsx(k5,{event:jp}):o.jsxs("div",{className:"empty-state",children:[o.jsx(ki,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:i.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(B=>B.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(B=>B.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:i.filter(B=>B.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:i.filter(B=>B.event_type==="state_change").length})]}),i.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),cs.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[cs.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[cs.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:cs.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:W1,title:"Load a saved run",children:[o.jsx(ll,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:I1,disabled:i.length===0,title:"Save current run to file",children:[o.jsx(Zo,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:O1,disabled:!f||i.length===0,title:"Save current session to memory",children:[o.jsx(Rn,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:U1,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(bu,{size:12}),"Create Test Case"]})]}),$1&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>us(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:B=>B.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(bu,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:bl,onChange:B=>B1(B.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:Mi,onChange:B=>_p(B.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:D1.map(B=>o.jsx("option",{value:B.id,children:B.name},B.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>us(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:V1,disabled:Sp||!Mi,children:Sp?"Creating...":"Create Test Case"})]})]})}),L&&o.jsx(sE,{request:L,timeout:L.timeout||30,onApprove:P1,onDeny:L1,onClose:()=>U(null)}),T&&o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>R(!1),children:o.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:B=>B.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Yl,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs("button",{onClick:Li,disabled:O,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:O?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(rn,{size:12,className:O?"animate-spin":""}),"Refresh"]}),o.jsx("button",{onClick:()=>R(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:o.jsx(es,{size:16})})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsx("button",{onClick:()=>H("agent"),style:{padding:"8px 16px",background:w==="agent"?"#18181b":"transparent",border:"none",borderBottom:w==="agent"?"2px solid #22d3ee":"2px solid transparent",color:w==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),o.jsx("button",{onClick:()=>H("gateway"),style:{padding:"8px 16px",background:w==="gateway"?"#18181b":"transparent",border:"none",borderBottom:w==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:w==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),o.jsx("div",{ref:K,onScroll:R1,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:O?o.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):$[w]?o.jsx(w5,{content:$[w]}):o.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const E5=()=>Math.random().toString(36).substring(2,10),z5=()=>({id:E5(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function T5(){const{project:e,setProject:t}=dt(),[n,r]=j.useState(null),[i,s]=j.useState(null),[a,l]=j.useState(""),[c,u]=j.useState([]),[d,p]=j.useState(!1),[f,h]=j.useState(!1),[m,b]=j.useState(""),[k,x]=j.useState(!1),[g,y]=j.useState(null),[_,A]=j.useState(null),C=j.useRef(null),P=(e==null?void 0:e.skillsets)||[],N=P.find(I=>I.id===n);j.useEffect(()=>{qy().then(I=>A(I.available)).catch(()=>A(!1))},[]),j.useEffect(()=>{P.length>0&&!n&&r(P[0].id)},[P,n]),j.useEffect(()=>{!e||!n||D()},[e==null?void 0:e.id,n]);const D=j.useCallback(async()=>{if(!(!e||!n))try{const I=await By(e.id,n);s(I),M(n,{entry_count:I.entry_count})}catch(I){console.error("Failed to load stats:",I)}},[e==null?void 0:e.id,n]),E=I=>{e&&t({...e,...I})},M=(I,w)=>{e&&t({...e,skillsets:e.skillsets.map(H=>H.id===I?{...H,...w}:H)})},L=()=>{if(!e)return;const I=z5();E({skillsets:[...P,I]}),r(I.id)},U=I=>{e&&confirm("Delete this SkillSet and all its data?")&&(E({skillsets:P.filter(w=>w.id!==I)}),n===I&&r(P.length>1?P[0].id:null),s(null),u([]))},T=async()=>{if(!(!e||!n||!a.trim())){p(!0),y(null);try{const I=await Wy(e.id,n,a.trim(),10,0);u(I.results)}catch(I){y("Search failed"),console.error(I)}finally{p(!1)}}},R=async()=>{if(!(!e||!n||!m.trim())){x(!0),y(null);try{const I=await Uy(e.id,n,m.trim());b(""),await D(),alert(`Added ${I.chunks_added} chunks from ${I.source_name}`)}catch(I){y(I.message||"Failed to fetch URL")}finally{x(!1)}}},$=async I=>{var H;const w=(H=I.target.files)==null?void 0:H[0];if(!(!w||!e||!n)){y(null);try{const K=await Vy(e.id,n,w);await D(),alert(`Added ${K.chunks_added} chunks from ${K.source_name}`)}catch(K){y(K.message||"Upload failed")}C.current&&(C.current.value="")}},z=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Hy(e.id,n),await D(),u([])}catch{y("Clear failed")}},O=I=>{const w=Math.round(I*100),H=160,K=70,v=20+(1-I)*15,V=.15+I*.25;return`linear-gradient(90deg, hsla(${H}, ${K}%, ${v}%, ${V}) 0%, transparent ${w}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
        .skillsets-panel {
          display: flex;
          height: 100%;
          gap: 16px;
        }
        
        .skillset-list {
          width: 240px;
          min-width: 240px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .skillset-list-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
        }
        
        .skillset-list-header h3 {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          margin: 0;
        }
        
        .skillset-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          background: var(--bg-secondary);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .skillset-item:hover {
          background: var(--bg-tertiary);
        }
        
        .skillset-item.selected {
          background: var(--accent-muted);
          border: 1px solid var(--accent);
        }
        
        .skillset-item-info {
          flex: 1;
          min-width: 0;
        }
        
        .skillset-item-name {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .skillset-item-count {
          font-size: 11px;
          color: var(--text-tertiary);
        }
        
        .skillset-item-delete {
          opacity: 0;
          padding: 4px;
          border-radius: 4px;
          color: var(--text-tertiary);
          transition: all 0.15s;
        }
        
        .skillset-item:hover .skillset-item-delete {
          opacity: 1;
        }
        
        .skillset-item-delete:hover {
          background: var(--error-muted);
          color: var(--error);
        }
        
        .skillset-detail {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
        }
        
        .skillset-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        
        .skillset-header-info {
          flex: 1;
        }
        
        .skillset-name-input {
          font-size: 18px;
          font-weight: 600;
          background: transparent;
          border: none;
          color: var(--text-primary);
          width: 100%;
          padding: 0;
        }
        
        .skillset-name-input:focus {
          outline: none;
          border-bottom: 1px solid var(--accent);
        }
        
        .skillset-desc-input {
          font-size: 13px;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          width: 100%;
          padding: 4px 0;
          resize: none;
        }
        
        .skillset-desc-input:focus {
          outline: none;
          border-bottom: 1px solid var(--border);
        }
        
        .skillset-stats {
          display: flex;
          gap: 16px;
          font-size: 12px;
          color: var(--text-tertiary);
        }
        
        .skillset-stat {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .skillset-stat strong {
          color: var(--text-secondary);
        }
        
        .search-section {
          display: flex;
          gap: 8px;
        }
        
        .search-input-wrapper {
          flex: 1;
          position: relative;
        }
        
        .search-input {
          width: 100%;
          padding: 10px 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 13px;
        }
        
        .search-input:focus {
          outline: none;
          border-color: var(--accent);
        }
        
        .search-results {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .search-result {
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 13px;
          line-height: 1.4;
          color: var(--text-secondary);
          position: relative;
        }
        
        .search-result-score {
          position: absolute;
          right: 8px;
          top: 8px;
          font-size: 11px;
          font-weight: 500;
          color: var(--accent);
          background: var(--bg-primary);
          padding: 2px 6px;
          border-radius: 4px;
        }
        
        .search-result-text {
          padding-right: 50px;
          max-height: 60px;
          overflow: hidden;
        }
        
        .search-result-source {
          font-size: 11px;
          color: var(--text-tertiary);
          margin-top: 4px;
        }
        
        .add-sources-section {
          background: var(--bg-secondary);
          border-radius: 8px;
          overflow: hidden;
        }
        
        .add-sources-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          cursor: pointer;
          user-select: none;
        }
        
        .add-sources-header:hover {
          background: var(--bg-tertiary);
        }
        
        .add-sources-header h4 {
          flex: 1;
          font-size: 13px;
          font-weight: 500;
          margin: 0;
          color: var(--text-secondary);
        }
        
        .add-sources-content {
          padding: 12px;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .source-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .source-input {
          flex: 1;
          padding: 8px 10px;
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--text-primary);
          font-size: 13px;
        }
        
        .source-input:focus {
          outline: none;
          border-color: var(--accent);
        }
        
        .clear-button {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 10px;
          background: var(--error-muted);
          border: none;
          border-radius: 6px;
          color: var(--error);
          font-size: 12px;
          cursor: pointer;
        }
        
        .clear-button:hover {
          background: var(--error);
          color: white;
        }
        
        .empty-state {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: var(--text-tertiary);
        }
        
        .empty-state svg {
          opacity: 0.3;
        }
        
        .btn-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          border-radius: 6px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .btn-icon:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        
        .error-banner {
          padding: 8px 12px;
          background: var(--error-muted);
          border-radius: 6px;
          color: var(--error);
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .error-banner button {
          margin-left: auto;
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
        
        input[type="file"] {
          display: none;
        }
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:L,title:"Add SkillSet",children:o.jsx(Ge,{size:16})})]}),P.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(Rn,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:L,children:[o.jsx(Ge,{size:14})," Create SkillSet"]})]}):P.map(I=>o.jsxs("div",{className:`skillset-item ${n===I.id?"selected":""}`,onClick:()=>r(I.id),children:[o.jsx(Rn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:I.name}),o.jsxs("div",{className:"skillset-item-count",children:[I.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:w=>{w.stopPropagation(),U(I.id)},children:o.jsx(Fe,{size:14})})]},I.id))]}),N?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:N.name,onChange:I=>M(N.id,{name:I.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:N.description,onChange:I=>M(N.id,{description:I.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:N.embedding_model||"text-embedding-004",onChange:I=>M(N.id,{embedding_model:I.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),_===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:D,title:"Refresh",children:o.jsx(rn,{size:16})})]}),g&&o.jsxs("div",{className:"error-banner",children:[g,o.jsx("button",{onClick:()=>y(null),children:o.jsx(es,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:a,onChange:I=>l(I.target.value),onKeyDown:I=>I.key==="Enter"&&T(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:T,disabled:d||!a.trim(),children:[o.jsx(Xy,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(I=>o.jsxs("div",{className:"search-result",style:{background:O(I.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(I.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:I.text}),o.jsx("div",{className:"search-result-source",children:I.source_name})]},I.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>h(!f),children:[f?o.jsx(Lt,{size:16}):o.jsx(wt,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),f&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(Ud,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:m,onChange:I=>b(I.target.value),onKeyDown:I=>I.key==="Enter"&&R(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:R,disabled:k||!m.trim(),children:[o.jsx(Zk,{size:14}),k?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(Yk,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:C,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:$}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var I;return(I=C.current)==null?void 0:I.click()},children:[o.jsx(ll,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:z,children:[o.jsx(Fe,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):P.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Rn,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const xn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Wo=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=xn[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const s=n??3.5;return{value:t.toFixed(1),comparison:`${s.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const s=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(s*100)}% min`}}},A5={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function z1(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function P5(){const{project:e}=dt(),[t,n]=j.useState([]),[r,i]=j.useState(null),[s,a]=j.useState(null),[l,c]=j.useState(new Set),[u,d]=j.useState(new Map),[p,f]=j.useState(new Map),[h,m]=j.useState(new Set),[b,k]=j.useState(!1),[x,g]=j.useState(null),[y,_]=j.useState([]),[A,C]=j.useState(null),P=async()=>{if(e)try{const F=await Je.get(`/projects/${e.id}/eval-history`);_(F.runs||[])}catch(F){console.warn("Failed to load eval history:",F)}},N=async(F,G=!0)=>{if(e)try{const X=(await Je.get(`/projects/${e.id}/eval-history/${F}`)).run;if(C(X),X!=null&&X.case_results){const le=new Map;for(const Q of X.case_results)le.set(Q.eval_case_id,Q);d(le)}if((X==null?void 0:X.eval_set_id)==="batch")c(new Set(t.map(le=>le.id))),i(null);else if(X!=null&&X.eval_set_id){const le=new Map;le.set(X.eval_set_id,X),f(le),i(X.eval_set_id),c(Q=>new Set([...Q,X.eval_set_id]))}a(null),G&&window.history.pushState({run:F},"",`?run=${F}`)}catch(ee){console.warn("Failed to load history run:",ee)}},D=(F,G=!0)=>{i(F),a(null),C(null),G&&F?window.history.pushState({set:F},"",`?set=${F}`):G&&window.history.pushState({},"",window.location.pathname)},E=(F,G,ee=!0)=>{i(F),a(G),C(null),ee&&G?window.history.pushState({set:F,case:G},"",`?set=${F}&case=${G}`):ee&&F&&window.history.pushState({set:F},"",`?set=${F}`)},M=()=>{C(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},L=async F=>{if(e)try{await Je.delete(`/projects/${e.id}/eval-history/${F}`),_(G=>G.filter(ee=>ee.id!==F)),(A==null?void 0:A.id)===F&&C(null)}catch(G){console.warn("Failed to delete history run:",G)}};j.useEffect(()=>{e!=null&&e.id&&(U(),P())},[e==null?void 0:e.id]),j.useEffect(()=>{const F=()=>{m(new Set(t.map(ee=>ee.id)))},G=()=>{m(new Set),P()};return window.addEventListener("eval-tests-started",F),window.addEventListener("eval-tests-completed",G),()=>{window.removeEventListener("eval-tests-started",F),window.removeEventListener("eval-tests-completed",G)}},[t]),j.useEffect(()=>{if(!(e!=null&&e.id)||b)return;const F=()=>{const ee=new URLSearchParams(window.location.search),X=ee.get("set"),le=ee.get("case"),Q=ee.get("run");if(Q){N(Q,!1);return}if(X)i(X),a(le),C(null),c(Z=>new Set([...Z,X]));else{if(!r&&!s&&!A)return;i(null),a(null),C(null)}};F();const G=()=>{F()};return window.addEventListener("popstate",G),()=>window.removeEventListener("popstate",G)},[e==null?void 0:e.id,b,t.length]);const U=async()=>{var F,G;if(e!=null&&e.id){k(!0),g(null);try{const ee=await Je.get(`/projects/${e.id}/eval-sets`);if(n(ee.eval_sets||[]),((F=ee.eval_sets)==null?void 0:F.length)>0){const X=new URLSearchParams(window.location.search),le=X.get("set"),Q=X.get("case"),Z=le||(Q?(G=ee.eval_sets.find(oe=>oe.eval_cases.some(ve=>ve.id===Q)))==null?void 0:G.id:null)||ee.eval_sets[0].id;c(new Set([Z]))}}catch(ee){g(ee.message||"Failed to load eval sets")}finally{k(!1)}}},T=t.find(F=>F.id===r),R=T==null?void 0:T.eval_cases.find(F=>F.id===s),$=async()=>{if(e!=null&&e.id)try{const F=await Je.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:A5});n(G=>[...G,F.eval_set]),i(F.eval_set.id),c(G=>new Set([...G,F.eval_set.id]))}catch(F){g(F.message||"Failed to create eval set")}},z=async F=>{if(e!=null&&e.id)try{const G=await Je.post(`/projects/${e.id}/eval-sets/${F}/cases`,{name:"New Test Case",description:"",invocations:[{id:z1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(ee=>ee.map(X=>X.id===F?{...X,eval_cases:[...X.eval_cases,G.eval_case]}:X)),i(F),a(G.eval_case.id)}catch(G){g(G.message||"Failed to create eval case")}},O=async(F,G,ee)=>{if(e!=null&&e.id)try{const X=await Je.put(`/projects/${e.id}/eval-sets/${F}/cases/${G}`,ee);n(le=>le.map(Q=>Q.id===F?{...Q,eval_cases:Q.eval_cases.map(Z=>Z.id===G?X.eval_case:Z)}:Q))}catch(X){g(X.message||"Failed to update eval case")}},I=async(F,G)=>{if(e!=null&&e.id)try{await Je.delete(`/projects/${e.id}/eval-sets/${F}/cases/${G}`),n(ee=>ee.map(X=>X.id===F?{...X,eval_cases:X.eval_cases.filter(le=>le.id!==G)}:X)),s===G&&a(null)}catch(ee){g(ee.message||"Failed to delete eval case")}},w=async F=>{if(e!=null&&e.id)try{await Je.delete(`/projects/${e.id}/eval-sets/${F}`),n(G=>G.filter(ee=>ee.id!==F)),r===F&&(i(null),a(null))}catch(G){g(G.message||"Failed to delete eval set")}},H=async F=>{if(e!=null&&e.id)try{const G=await Je.get(`/projects/${e.id}/eval-sets/${F}/export`),ee=new Blob([JSON.stringify(G,null,2)],{type:"application/json"}),X=URL.createObjectURL(ee),le=document.createElement("a");le.href=X;const Q=t.find(Z=>Z.id===F);le.download=`${(Q==null?void 0:Q.name)||"eval-set"}.json`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(X)}catch(G){g(G.message||"Failed to export eval set")}},K=async F=>{if(e!=null&&e.id)try{const G=await F.text(),ee=JSON.parse(G),X=await Je.post(`/projects/${e.id}/eval-sets/import`,ee);n(le=>[...le,X.eval_set]),i(X.eval_set.id),c(le=>new Set([...le,X.eval_set.id]))}catch(G){g(G.message||"Failed to import eval set")}},v=j.useRef(null),V=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const F=await Promise.all(t.map(async le=>{try{return await Je.get(`/projects/${e.id}/eval-sets/${le.id}/export`)}catch{return le}})),G=new Blob([JSON.stringify(F,null,2)],{type:"application/json"}),ee=URL.createObjectURL(G),X=document.createElement("a");X.href=ee,X.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(ee)}catch(F){g(F.message||"Failed to export all eval sets")}},S=async(F,G)=>{if(e!=null&&e.id){m(ee=>new Set([...ee,G]));try{const ee=await Je.post(`/projects/${e.id}/eval-sets/${F}/cases/${G}/run`,{});d(X=>new Map(X).set(G,ee.result))}catch(ee){g(ee.message||"Failed to run eval case")}finally{m(ee=>{const X=new Set(ee);return X.delete(G),X})}}},W=async F=>{if(!(e!=null&&e.id))return;const G=t.find(X=>X.id===F);if(!G)return;const ee=G.eval_cases.map(X=>X.id);m(X=>new Set([...X,F,...ee]));try{const X=await Je.post(`/projects/${e.id}/eval-sets/${F}/run`,{});f(le=>new Map(le).set(F,X.result));for(const le of X.result.case_results)d(Q=>new Map(Q).set(le.eval_case_id,le));try{await Je.post(`/projects/${e.id}/eval-history`,X.result),P()}catch(le){console.warn("Failed to save eval run to history:",le)}}catch(X){g(X.message||"Failed to run eval set")}finally{m(X=>{const le=new Set(X);return le.delete(F),ee.forEach(Q=>le.delete(Q)),le})}},ie=F=>{c(G=>{const ee=new Set(G);return ee.has(F)?ee.delete(F):ee.add(F),ee})},ce=F=>{let G=F.eval_cases.length,ee=0,X=0,le=0;for(const Q of F.eval_cases){const Z=u.get(Q.id);Z?Z.passed?ee++:X++:le++}return{total:G,passed:ee,failed:X,pending:le}},q=F=>F==null?"-":`${Math.round(F*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
        .eval-panel {
          display: flex;
          gap: 20px;
          height: calc(100vh - 180px);
        }
        
        .eval-sidebar {
          width: 360px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .sidebar-header h3 {
          font-size: 14px;
          font-weight: 600;
        }
        
        .header-actions {
          display: flex;
          gap: 4px;
        }
        
        .eval-tree {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .tree-set, .tree-case {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background 0.15s ease;
        }
        
        .tree-set:hover, .tree-case:hover {
          background: var(--bg-tertiary);
        }
        
        .tree-set.selected, .tree-case.selected {
          background: var(--bg-hover);
        }
        
        .expand-btn {
          padding: 2px;
          color: var(--text-muted);
        }
        
        .set-name, .case-name {
          flex: 1;
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .set-stats {
          display: flex;
          gap: 4px;
        }
        
        .set-stats span {
          font-size: 11px;
          padding: 1px 5px;
          border-radius: var(--radius-sm);
        }
        
        .stat-passed { background: rgba(0, 245, 212, 0.2); color: var(--success); }
        .stat-failed { background: rgba(255, 107, 107, 0.2); color: var(--error); }
        .stat-pending { background: var(--bg-tertiary); color: var(--text-muted); }
        
        .run-btn {
          padding: 4px;
          color: var(--text-muted);
          opacity: 0;
          transition: all 0.15s ease;
        }
        
        .tree-set:hover .run-btn, .tree-case:hover .run-btn {
          opacity: 1;
        }
        
        .run-btn:hover {
          color: var(--accent-primary);
        }
        
        .spinning {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .eval-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .editor-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .editor-header input {
          flex: 1;
          font-size: 1.1rem;
          font-weight: 600;
          background: transparent;
          border: none;
          padding: 4px 8px;
        }
        
        .editor-header input:focus {
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        
        .editor-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }
        
        .form-section {
          margin-bottom: 12px;
        }
        
        .form-section h4 {
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 6px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        
        .form-section textarea {
          width: 100%;
          min-height: 80px;
          font-family: var(--font-mono);
          font-size: 13px;
        }
        
        .form-row {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .form-field {
          flex: 1;
        }
        
        .form-field label {
          display: block;
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 4px;
        }
        
        .form-field input, .form-field select {
          width: 100%;
        }
        
        .invocation-card {
          display: flex;
          gap: 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          padding: 12px;
          margin-bottom: 12px;
        }
        
        .invocation-number {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding-top: 4px;
        }
        
        .invocation-number span {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-muted);
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-secondary);
          border-radius: 50%;
        }
        
        .invocation-content {
          flex: 1;
          min-width: 0;
        }
        
        .invocation-row {
          display: flex;
          gap: 12px;
          margin-bottom: 8px;
        }
        
        .invocation-row > .form-section {
          flex: 1;
          margin-bottom: 0;
        }
        
        .invocation-row textarea {
          min-height: 60px;
        }
        
        .tool-call-compact {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          margin-bottom: 4px;
        }
        
        .tool-name-input {
          width: 120px;
          font-family: var(--font-mono);
          font-size: 12px;
          padding: 4px 8px;
        }
        
        .tool-args-editor {
          flex: 1;
          min-width: 100px;
          height: 22px;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        
        .tool-args-editor .monaco-editor {
          padding: 0 !important;
        }
        
        .tool-args-editor .monaco-editor .margin {
          display: none !important;
        }
        
        .pillbox-toggle {
          display: flex;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        
        .pillbox-toggle .pill {
          padding: 3px 8px;
          font-size: 10px;
          border: none;
          background: var(--bg-tertiary);
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .pillbox-toggle .pill:first-child {
          border-right: 1px solid var(--border-color);
        }
        
        .pillbox-toggle .pill.active {
          background: var(--accent-primary);
          color: var(--bg-primary);
          font-weight: 600;
        }
        
        .pillbox-toggle .pill:hover:not(.active) {
          background: var(--bg-secondary);
        }
        
        .tool-call-row {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
          padding: 8px;
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
        }
        
        .result-panel {
          padding: 16px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-tertiary);
        }
        
        .result-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .result-header.passed {
          color: var(--success);
        }
        
        .result-header.failed {
          color: var(--error);
        }
        
        .result-scores {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          margin-bottom: 12px;
        }
        
        .score-card {
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          padding: 12px;
          text-align: center;
        }
        
        .score-value {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        .score-value.passed { color: var(--success); }
        .score-value.failed { color: var(--error); }
        
        .score-label {
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 4px;
        }
        
        .result-details {
          margin-top: 16px;
        }
        
        .result-details h5 {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 8px;
        }
        
        .detail-box {
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          font-family: var(--font-mono);
          font-size: 12px;
          white-space: pre-wrap;
          max-height: 150px;
          overflow-y: auto;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: var(--text-muted);
          text-align: center;
          padding: 40px;
        }
        
        .empty-state svg {
          margin-bottom: 16px;
          opacity: 0.3;
        }
        
        .quick-eval {
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          padding: 16px;
          margin-bottom: 20px;
        }
        
        .quick-eval h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .coverage-bar {
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 4px;
        }
        
        .coverage-fill {
          height: 100%;
          transition: width 0.3s ease;
        }
        
        .coverage-fill.passed { background: var(--success); }
        .coverage-fill.failed { background: var(--error); }
        
        .tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 16px;
        }
        
        .tab {
          padding: 8px 16px;
          font-size: 13px;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          transition: all 0.15s ease;
        }
        
        .tab:hover {
          color: var(--accent-primary);
        }
        
        .tab.active {
          color: var(--bg-primary);
          background: var(--accent-primary);
          border-radius: var(--radius-sm) var(--radius-sm) 0 0;
          border-bottom-color: var(--accent-primary);
        }
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:v,accept:".json",style:{display:"none"},onChange:F=>{var ee;const G=(ee=F.target.files)==null?void 0:ee[0];G&&(K(G),F.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var F;return(F=v.current)==null?void 0:F.click()},title:"Import eval set from JSON",children:o.jsx(ll,{size:14})}),t.length>0&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:V,title:"Download all eval sets as JSON",children:o.jsx(Zo,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,title:"Refresh",children:o.jsx(rn,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:$,title:"New eval set",children:[o.jsx(Ge,{size:14}),"Set"]})]})]}),o.jsxs("div",{className:"eval-tree",children:[b&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),x&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:x}),!b&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(qd,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one to get started."]})]}),t.map(F=>{const G=l.has(F.id),ee=ce(F),X=h.has(F.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===F.id&&!s?"selected":""}`,onClick:()=>D(F.id),children:[o.jsx("button",{className:"expand-btn",onClick:le=>{le.stopPropagation(),ie(F.id)},children:F.eval_cases.length>0?G?o.jsx(Lt,{size:14}):o.jsx(wt,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(Yy,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:F.name}),o.jsx("button",{className:"add-case-btn",onClick:le=>{le.stopPropagation(),z(F.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:o.jsx(Ge,{size:12})}),ee.total>0&&o.jsxs("span",{className:"set-stats",children:[ee.passed>0&&o.jsx("span",{className:"stat-passed",children:ee.passed}),ee.failed>0&&o.jsx("span",{className:"stat-failed",children:ee.failed}),ee.pending>0&&o.jsx("span",{className:"stat-pending",children:ee.pending})]}),o.jsx("button",{className:"run-btn",onClick:le=>{le.stopPropagation(),W(F.id)},title:"Run all tests in this set",disabled:X,children:X?o.jsx(Io,{size:12,className:"spinning"}):o.jsx(pr,{size:12})})]}),G&&o.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:F.eval_cases.map(le=>{var oe;const Q=u.get(le.id),Z=h.has(le.id);return o.jsxs("div",{className:`tree-case ${s===le.id?"selected":""}`,onClick:()=>E(F.id,le.id),children:[Z?o.jsx(Io,{size:14,className:"spinning",style:{color:"var(--warning)"}}):Q?Q.passed?o.jsx(Ir,{size:14,style:{color:"var(--success)"}}):o.jsx(ji,{size:14,style:{color:"var(--error)"}}):o.jsx(Ea,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:le.name}),Q&&Q.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:Q.passed?"var(--success)":"var(--error)"},children:q((oe=Q.metric_results[0])==null?void 0:oe.score)}),o.jsx("button",{className:"run-btn",onClick:ve=>{ve.stopPropagation(),S(F.id,le.id)},disabled:Z,children:o.jsx(pr,{size:12})})]},le.id)})})]},F.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",y.length,")"]})}),o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:y.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...y].sort((F,G)=>(G.started_at||0)-(F.started_at||0)).map(F=>{const G=F.passed_cases===F.total_cases;return o.jsx("div",{className:`history-item ${(A==null?void 0:A.id)===F.id?"selected":""}`,onClick:()=>N(F.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(A==null?void 0:A.id)===F.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[G?o.jsx(Ir,{size:14,style:{color:"var(--success)",flexShrink:0}}):o.jsx(ji,{size:14,style:{color:"var(--error)",flexShrink:0}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:F.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(F.started_at*1e3).toLocaleString()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:G?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[F.passed_cases,"/",F.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:ee=>{ee.stopPropagation(),L(F.id)},title:"Delete run",style:{padding:2},children:o.jsx(Fe,{size:12})})]})]})},F.id)})})]})]}),o.jsx("div",{className:"eval-editor",children:A?o.jsx(M5,{run:A,onClose:M}):R?o.jsx(R5,{evalCase:R,evalSetId:r,projectId:e.id,result:u.get(R.id),isRunning:h.has(R.id),onUpdate:F=>O(r,R.id,F),onDelete:()=>I(r,R.id),onRun:()=>S(r,R.id),onClearResult:()=>d(F=>{const G=new Map(F);return G.delete(R.id),G})}):T?o.jsx(I5,{evalSet:T,projectId:e.id,result:p.get(T.id),isRunning:h.has(T.id),caseResults:u,onUpdate:async F=>{try{const G=await Je.put(`/projects/${e.id}/eval-sets/${T.id}`,F);n(ee=>ee.map(X=>X.id===T.id?G.eval_set:X))}catch(G){g(G.message)}},onDelete:()=>w(T.id),onRun:()=>W(T.id),onExport:()=>H(T.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Ea,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})})]}):null}function L5({value:e,onChange:t}){var a,l;const{project:n}=dt(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function M5({run:e,onClose:t}){var h;const{project:n}=dt(),[r,i]=j.useState(!0),[s,a]=j.useState(new Set),l=e.case_results||[],c=l.filter(m=>m.passed).length,u=l.filter(m=>!m.passed).length,d=r?l.filter(m=>!m.passed):l,p=m=>{a(b=>{const k=new Set(b);return k.has(m)?k.delete(m):k.add(m),k})},f=m=>{m&&n&&(window.location.href=`/project/${n.id}/run?session=${m}`)};return o.jsxs("div",{className:"test-result-viewer",children:[o.jsx("style",{children:`
        .test-result-viewer {
          height: 100%;
          display: flex;
          flex-direction: column;
          background: var(--bg-secondary);
        }
        .result-header {
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .result-header h2 {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }
        .result-summary {
          padding: 16px 20px;
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        .summary-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .summary-stat .label {
          font-size: 11px;
          color: var(--text-secondary);
          text-transform: uppercase;
        }
        .summary-stat .value {
          font-size: 18px;
          font-weight: 600;
        }
        .summary-stat .value.passed { color: var(--success); }
        .summary-stat .value.failed { color: var(--error); }
        .result-cases {
          flex: 1;
          overflow-y: auto;
          padding: 16px 20px;
        }
        .result-case {
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          margin-bottom: 12px;
          background: var(--bg-primary);
        }
        .result-case-header {
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
        }
        .result-case-header:hover {
          background: var(--bg-hover);
        }
        .result-case-name {
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .result-case-details {
          padding: 12px 16px;
        }
        .metric-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6px 0;
          border-bottom: 1px solid var(--border-color);
          font-size: 13px;
        }
        .metric-row:last-child {
          border-bottom: none;
        }
        .metric-name {
          color: var(--text-secondary);
        }
        .metric-value {
          font-weight: 500;
        }
        .metric-value.passed { color: var(--success); }
        .metric-value.failed { color: var(--error); }
        .metric-error {
          color: var(--error);
          font-size: 12px;
          opacity: 0.8;
        }
        .invocation-summary {
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid var(--border-color);
        }
        .invocation-item {
          padding: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          margin-bottom: 8px;
          font-size: 12px;
        }
        .invocation-query {
          color: var(--accent-primary);
          font-weight: 500;
        }
        .invocation-response {
          color: var(--text-secondary);
          margin-top: 4px;
        }
      `}),o.jsxs("div",{className:"result-header",children:[o.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const m=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(m)}},title:"Copy link to this run",children:o.jsx(Wd,{size:14})})})]}),o.jsxs("div",{className:"result-summary",children:[o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Status"}),o.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Passed"}),o.jsx("span",{className:"value passed",children:c})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Failed"}),o.jsx("span",{className:"value failed",children:u})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Total Cases"}),o.jsx("span",{className:"value",children:l.length})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Duration"}),o.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Tokens"}),o.jsx("span",{className:"value",children:((h=e.total_tokens)==null?void 0:h.toLocaleString())||"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Run Time"}),o.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),o.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[o.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[o.jsx("input",{type:"checkbox",checked:r,onChange:m=>i(m.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),o.jsxs("div",{className:"result-cases",children:[d.map((m,b)=>{var M,L,U,T,R,$;const k=m.case_id||`case-${b}`,x=s.has(k),g=((M=m.metric_results)==null?void 0:M.filter(z=>!z.passed||z.error))||[],y=((L=m.metric_results)==null?void 0:L.filter(z=>z.passed&&!z.error))||[],_=((U=m.rubric_results)==null?void 0:U.filter(z=>!z.passed||z.error))||[],A=((T=m.rubric_results)==null?void 0:T.filter(z=>z.passed&&!z.error))||[],C=x?m.metric_results:g,P=x?m.rubric_results:_,N=x?m.invocation_results:(R=m.invocation_results)==null?void 0:R.filter(z=>{var O;return((O=z.metric_results)==null?void 0:O.some(I=>!I.passed))||z.error}),D=y.length+A.length,E=g.length+_.length;return o.jsxs("div",{className:"result-case",children:[o.jsxs("div",{className:"result-case-header",onClick:()=>p(k),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"result-case-name",children:[o.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:x?"▼":"▶"}),m.passed?o.jsx(Ir,{size:16,style:{color:"var(--success)"}}):o.jsx(ji,{size:16,style:{color:"var(--error)"}}),m.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&o.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:m.eval_set_name}),m.case_name||`Case ${b+1}`,o.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[E>0&&o.jsxs("span",{style:{color:"var(--error)"},children:[E," failed"]}),E>0&&D>0&&" · ",D>0&&o.jsxs("span",{style:{color:"var(--success)"},children:[D," passed"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[m.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:z=>{z.stopPropagation(),f(m.session_id)},title:"View session in Run panel",children:[o.jsx(Ky,{size:12})," View Session"]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:m.duration_ms?`${(m.duration_ms/1e3).toFixed(2)}s`:""})]})]}),o.jsxs("div",{className:"result-case-details",children:[(C==null?void 0:C.length)>0&&o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[C.map((z,O)=>{const I=Wo(z.metric,z.score,z.threshold);return o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:z.error?"rgba(255, 193, 7, 0.1)":z.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${z.error?"var(--warning)":z.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[o.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:z.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),z.error?o.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:z.passed?"var(--success)":"var(--error)"},children:I.value}),o.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:I.comparison})]})]},O)}),!x&&y.length>0&&o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",y.length," passed"]})]}),C==null?void 0:C.filter(z=>!z.passed&&z.rationale).map((z,O)=>o.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[o.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[z.metric.replace(/_/g," ")," - Why it failed:"]}),o.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:z.rationale})]},`rationale-${O}`)),(P==null?void 0:P.length)>0&&o.jsxs("div",{style:{marginTop:8},children:[o.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),P.map((z,O)=>o.jsxs("div",{style:{marginBottom:z.rationale&&!z.passed?8:4},children:[o.jsxs("div",{className:"metric-row",children:[o.jsx("span",{className:"metric-name",style:{flex:1},children:z.rubric}),o.jsx("span",{className:`metric-value ${z.passed?"passed":"failed"}`,children:z.passed?"✓ Pass":"✗ Fail"})]}),!z.passed&&z.rationale&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[o.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",z.rationale]}),z.error&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",z.error]})]},O)),!x&&A.length>0&&o.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",A.length," passed rubric",A.length>1?"s":""]})]}),(N==null?void 0:N.length)>0&&o.jsxs("div",{className:"invocation-summary",children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",N.length,!x&&(($=m.invocation_results)==null?void 0:$.length)>N.length?` of ${m.invocation_results.length}`:"",")"]}),N.map((z,O)=>o.jsxs("div",{className:"invocation-item",children:[o.jsxs("div",{className:"invocation-query",children:["Turn ",z.invocation_id||O+1,": ",z.user_message||"(no message)"]}),z.actual_response&&o.jsxs("div",{className:"invocation-response",children:["Response: ",z.actual_response.substring(0,200),z.actual_response.length>200?"...":""]})]},O))]}),m.error&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:m.error})]})]},k)}),l.length===0&&o.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function R5({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:a,onRun:l,onClearResult:c}){var A,C,P;const{project:u}=dt(),[d,p]=j.useState(e),[f,h]=j.useState("assertions");j.useEffect(()=>{p(e)},[e.id]);const m=j.useCallback(N=>{p(D=>({...D,...N})),s(N)},[s]),b=()=>{const N={id:z1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};m({invocations:[...d.invocations,N]})},k=(N,D)=>{const E=[...d.invocations];E[N]={...E[N],...D},m({invocations:E})},x=N=>{m({invocations:d.invocations.filter((D,E)=>E!==N)})},g=N=>{const D=[...d.invocations];D[N]={...D[N],expected_tool_calls:[...D[N].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},m({invocations:D})},y=(N,D,E)=>{const M=[...d.invocations],L=[...M[N].expected_tool_calls];L[D]={...L[D],...E},M[N]={...M[N],expected_tool_calls:L},m({invocations:M})},_=(N,D)=>{const E=[...d.invocations];E[N]={...E[N],expected_tool_calls:E[N].expected_tool_calls.filter((M,L)=>L!==D)},m({invocations:E})};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Ea,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:d.name,onChange:N=>m({name:N.target.value}),placeholder:"Test case name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const N=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(N)},title:"Copy link to this test case",children:o.jsx(Wd,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?o.jsx(Io,{size:14,className:"spinning"}):o.jsx(pr,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Fe,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>h("assertions"),children:[o.jsx(za,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),o.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>h("rubrics"),children:[o.jsx(qd,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>h("docs"),children:[o.jsx(wi,{size:14,style:{marginRight:6}}),"Docs"]}),o.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>h("json"),children:[o.jsx(wn,{size:14,style:{marginRight:6}}),"JSON"]})]}),o.jsxs("div",{className:"editor-content",children:[f==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:d.target_agent||"",onChange:N=>m({target_agent:N.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(A=u==null?void 0:u.agents)==null?void 0:A.map(N=>o.jsx("option",{value:N.name,children:N.name},N.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:d.tags.join(", "),onChange:N=>m({tags:N.target.value.split(",").map(D=>D.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:d.description,onChange:N=>m({description:N.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(Kt,{height:"100%",defaultLanguage:"json",value:(()=>{var D;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((D=u==null?void 0:u.app)!=null&&D.state_keys)&&u.app.state_keys.length>0){const E={};return u.app.state_keys.forEach(M=>{M.default_value!==void 0?E[M.name]=M.default_value:E[M.name]=M.type==="string"?"":M.type==="number"?0:M.type==="boolean"?!1:M.type==="array"?[]:{}}),JSON.stringify(E,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:N=>{try{N&&m({initial_state:JSON.parse(N)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(za,{size:14}),"Conversation Turns"]}),d.invocations.map((N,D)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:D+1}),d.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>x(D),style:{padding:4},children:o.jsx(Fe,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:N.user_message,onChange:E=>k(D,{user_message:E.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:N.expected_response||"",onChange:E=>k(D,{expected_response:E.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),N.expected_tool_calls.map((E,M)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:E.name,onChange:L=>y(D,M,{name:L.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${E.args_match_mode==="subset"?"active":""}`,onClick:()=>y(D,M,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${E.args_match_mode==="exact"?"active":""}`,onClick:()=>y(D,M,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(Kt,{height:"22px",defaultLanguage:"json",value:JSON.stringify(E.args||{}),onChange:L=>{try{L&&y(D,M,{args:JSON.parse(L)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>_(D,M),style:{padding:"4px 6px"},children:o.jsx(Fe,{size:10})})]},M)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(D),style:{marginTop:4},children:[o.jsx(Ge,{size:12})," Assert Tool Call"]})]})]},N.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:b,children:[o.jsx(Ge,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Ir,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(Kt,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:N=>{if(!N||N==="{}")m({expected_final_state:void 0});else try{m({expected_final_state:JSON.parse(N)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:N,label:D,default:E,max:M})=>{const L=(d.enabled_metrics||[]).find(T=>T.metric===N),U=(L==null?void 0:L.threshold)??E;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!L,onChange:T=>{const R=[...d.enabled_metrics||[]];if(T.target.checked)R.push({metric:N,threshold:E});else{const $=R.findIndex(z=>z.metric===N);$!==-1&&R.splice($,1)}m({enabled_metrics:R})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:L?1:.5,minWidth:100},children:D}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:L?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:M===5?1:0,max:M,step:.1,value:U,disabled:!L,onChange:T=>{const R=[...d.enabled_metrics||[]],$=R.findIndex(z=>z.metric===N);$!==-1&&(R[$]={...R[$],threshold:parseFloat(T.target.value)||0},m({enabled_metrics:R}))},style:{width:60,textAlign:"center",opacity:L?1:.3,padding:"2px 4px",fontSize:11}})]},N)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((N,D)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:N.rubric,onChange:E=>{const M=[...d.rubrics];M[D]={rubric:E.target.value},m({rubrics:M})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>m({rubrics:d.rubrics.filter((E,M)=>M!==D)}),children:o.jsx(Fe,{size:12})})]},D)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m({rubrics:[...d.rubrics,{rubric:""}]}),children:[o.jsx(Ge,{size:12})," Add Rubric"]})]})]}),f==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(xn).map(N=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:N}),o.jsx("td",{style:{padding:"8px 4px"},children:xn[N].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:xn[N].description})]},N))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),o.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(Kt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(C=d.tags)!=null&&C.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(N=>{var D;return{user_message:N.user_message,expected_response:N.expected_response||void 0,expected_tool_calls:(D=N.expected_tool_calls)!=null&&D.length?N.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(P=d.rubrics)!=null&&P.length?d.rubrics.map(N=>N.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var D,E;const N=JSON.stringify({name:d.name,description:d.description||void 0,tags:(D=d.tags)!=null&&D.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(M=>{var L;return{user_message:M.user_message,expected_response:M.expected_response||void 0,expected_tool_calls:(L=M.expected_tool_calls)!=null&&L.length?M.expected_tool_calls.map(U=>({tool_name:U.tool_name,args:U.match_type!=="name_only"&&Object.keys(U.args||{}).length?U.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(E=d.rubrics)!=null&&E.length?d.rubrics.map(M=>M.rubric):void 0},null,2);navigator.clipboard.writeText(N)},children:[o.jsx(Xo,{size:14})," Copy JSON"]})})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(Ir,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(ji,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(Ky,{size:12}),"View Session"]}),c&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((N,D)=>{var M;const E=Wo(N.metric,N.score,N.threshold);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${N.passed?"passed":"failed"}`,children:E.value}),o.jsx("div",{className:"score-label",children:((M=xn[N.metric])==null?void 0:M.name)||N.metric}),o.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:E.comparison}),N.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:N.error})]},D)})}),r.rubric_results&&r.rubric_results.length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((N,D)=>o.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:N.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${N.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:16,color:N.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:N.passed?"✓":"✗"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:N.rubric}),N.error&&o.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",N.error]})]})]},D))})]}),r.invocation_results.map((N,D)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",D+1,": ",N.user_message.length>50?N.user_message.slice(0,50)+"…":N.user_message]}),N.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:N.metric_results.map((E,M)=>{var U;const L=Wo(E.metric,E.score,E.threshold);return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:E.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:E.passed?"var(--success)":"var(--error)"},children:[((U=xn[E.metric])==null?void 0:U.name)||E.metric,": ",L.value]},M)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,N.actual_response||"(no response)",`

`,N.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,N.actual_tool_calls.map((E,M)=>`  ${M+1}. ${E.name}(${JSON.stringify(E.args)})
`).join("")]})]})]},D)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function I5({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:a,onRun:l,onExport:c}){var b,k,x,g;const[u,d]=j.useState(e.name),[p,f]=j.useState(!1);j.useEffect(()=>{d(e.name)},[e.id]);const h=j.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),m=y=>y==null?"-":`${Math.round(y*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Yy,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:y=>d(y.target.value),onBlur:h,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const y=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(y)},title:"Copy link to this eval set",children:o.jsx(Wd,{size:14})}),o.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[o.jsx(wn,{size:14}),"JSON"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx(Zo,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?o.jsx(Io,{size:14,className:"spinning"}):o.jsx(pr,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Fe,{size:14})})]}),o.jsx("div",{className:"editor-content",children:p?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),o.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(Kt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(y=>{var _,A;return{name:y.name,description:y.description||void 0,tags:(_=y.tags)!=null&&_.length?y.tags:void 0,target_agent:y.target_agent!=="root_agent"?y.target_agent:void 0,invocations:y.invocations.map(C=>{var P;return{user_message:C.user_message,expected_response:C.expected_response||void 0,expected_tool_calls:(P=C.expected_tool_calls)!=null&&P.length?C.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(y.session_input||{}).length?{state:y.session_input}:void 0,final_session_state:Object.keys(y.final_session_state||{}).length?y.final_session_state:void 0,rubrics:(A=y.rubrics)!=null&&A.length?y.rubrics.map(C=>C.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((b=e.eval_config.metrics)==null?void 0:b.filter(y=>y.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var _;const y=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(A=>{var C,P;return{name:A.name,description:A.description||void 0,tags:(C=A.tags)!=null&&C.length?A.tags:void 0,target_agent:A.target_agent!=="root_agent"?A.target_agent:void 0,invocations:A.invocations.map(N=>{var D;return{user_message:N.user_message,expected_response:N.expected_response||void 0,expected_tool_calls:(D=N.expected_tool_calls)!=null&&D.length?N.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(A.session_input||{}).length?{state:A.session_input}:void 0,final_session_state:Object.keys(A.final_session_state||{}).length?A.final_session_state:void 0,rubrics:(P=A.rubrics)!=null&&P.length?A.rubrics.map(N=>N.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((_=e.eval_config.metrics)==null?void 0:_.filter(A=>A.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(y)},children:[o.jsx(Xo,{size:14})," Copy JSON"]})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:y=>s({description:y.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(L5,{value:((k=e.eval_config)==null?void 0:k.judge_model)||"",onChange:y=>s({eval_config:{...e.eval_config,judge_model:y}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Zy,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(xn).map(y=>{var N,D,E;const _=xn[y],A=(D=(N=e.eval_config)==null?void 0:N.metrics)==null?void 0:D.find(M=>M.metric===y),C=(A==null?void 0:A.enabled)??!1,P=((E=A==null?void 0:A.criterion)==null?void 0:E.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:C,onChange:M=>{var T;const L=[...((T=e.eval_config)==null?void 0:T.metrics)||[]],U=L.findIndex(R=>R.metric===y);M.target.checked?U===-1?L.push({metric:y,enabled:!0,criterion:{threshold:.7}}):L[U]={...L[U],enabled:!0}:U!==-1&&(L[U]={...L[U],enabled:!1}),s({eval_config:{...e.eval_config,metrics:L}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:C?1:.5,minWidth:140,fontWeight:C?500:400},children:[_.name,_.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:C?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:P,disabled:!C,onChange:M=>{var T;const L=[...((T=e.eval_config)==null?void 0:T.metrics)||[]],U=L.findIndex(R=>R.metric===y);U!==-1&&(L[U]={...L[U],criterion:{...L[U].criterion,threshold:parseFloat(M.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:L}}))},style:{width:60,textAlign:"center",opacity:C?1:.3,padding:"2px 4px",fontSize:11}})]},y)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((x=e.eval_config)==null?void 0:x.default_trajectory_match_type)||"in_order",onChange:y=>s({eval_config:{...e.eval_config,default_trajectory_match_type:y.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((g=e.eval_config)==null?void 0:g.num_runs)||1,onChange:y=>s({eval_config:{...e.eval_config,num_runs:parseInt(y.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(rj,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:m(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([y,_])=>{var C;const A=Wo(y,_);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:A.value}),o.jsxs("div",{className:"score-label",children:["Avg ",((C=xn[y])==null?void 0:C.name)||y]})]},y)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([y,_])=>{var A;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((A=xn[y])==null?void 0:A.name)||y}),o.jsx("span",{children:m(_)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${_>=.8?"passed":"failed"}`,style:{width:`${_*100}%`}})})]},y)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(y=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:y.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:y.metric_results.map((_,A)=>{const C=Wo(_.metric,_.score,_.threshold);return o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:_.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:_.passed?"var(--success)":"var(--error)"},children:C.value},A)})}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:y.passed?o.jsx(Ir,{size:14,style:{color:"var(--success)"}}):y.error?o.jsx(wi,{size:14,style:{color:"var(--warning)"}}):o.jsx(ji,{size:14,style:{color:"var(--error)"}})})]},y.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(qd,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(y=>{const _=i.get(y.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[_?_.passed?o.jsx(Ir,{size:14,style:{color:"var(--success)"}}):o.jsx(ji,{size:14,style:{color:"var(--error)"}}):o.jsx(Ea,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:y.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[y.invocations.length," turn(s)"]})]},y.id)})})]})]})})]})}function O5(){const{project:e,setProject:t}=dt(),[n,r]=j.useState(""),[i,s]=j.useState(!0),[a,l]=j.useState(!1),[c,u]=j.useState(null),[d,p]=j.useState(!1);if(!e)return null;j.useEffect(()=>{f()},[e.id]);async function f(){s(!0),u(null);try{const g=await My(e.id);r(g),l(!1)}catch(g){u(g.message)}finally{s(!1)}}function h(g){g!==void 0&&(r(g),l(!0),u(null))}async function m(){s(!0),u(null);try{const g=await Ry(e.id,n);t(g),l(!1)}catch(g){u(g.message)}finally{s(!1)}}function b(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function k(){const g=new Blob([n],{type:"text/yaml"}),y=URL.createObjectURL(g),_=document.createElement("a");_.href=y,_.download=`${e.name}.yaml`,_.click(),URL.revokeObjectURL(y)}function x(){const g=document.createElement("input");g.type="file",g.accept=".yaml,.yml",g.onchange=async y=>{var C;const _=(C=y.target.files)==null?void 0:C[0];if(!_)return;const A=await _.text();r(A),l(!0)},g.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
        .yaml-panel {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 180px);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .yaml-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .yaml-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .yaml-title h3 {
          font-size: 14px;
          font-weight: 600;
        }
        
        .status-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          font-size: 11px;
          border-radius: 999px;
        }
        
        .status-badge.warning {
          background: rgba(255, 217, 61, 0.15);
          color: var(--warning);
        }
        
        .status-badge.error {
          background: rgba(255, 107, 107, 0.15);
          color: var(--error);
        }
        
        .status-badge.success {
          background: rgba(0, 245, 212, 0.15);
          color: var(--success);
        }
        
        .yaml-actions {
          display: flex;
          gap: 8px;
        }
        
        .yaml-editor {
          flex: 1;
          min-height: 0;
        }
        
        .yaml-info {
          padding: 12px 16px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-tertiary);
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .yaml-info p {
          margin-bottom: 8px;
        }
        
        .yaml-info code {
          background: var(--bg-secondary);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
        }
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),a&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(wi,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(wi,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Fd,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,title:"Copy to clipboard",children:[o.jsx(Xo,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:k,title:"Download YAML",children:[o.jsx(Zo,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,title:"Upload YAML",children:[o.jsx(ll,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[o.jsx(rn,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:m,disabled:!a||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(Kt,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function $5(){const{project:e}=dt(),[t,n]=j.useState(!1),[r,i]=j.useState(""),[s,a]=j.useState(!1),[l,c]=j.useState(null);if(j.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(p=>{if(!p.ok)throw new Error("Failed to fetch code");return p.json()}).then(p=>{let f=p.code||"";f=f.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),f=f.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),i(f),a(!1)}).catch(p=>{c(p.message),a(!1),i("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const p=new Blob([r],{type:"text/x-python"}),f=URL.createObjectURL(p),h=document.createElement("a");h.href=f,h.download=`${e.name}_agent.py`,h.click(),URL.revokeObjectURL(f)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
        .code-panel {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 180px);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        
        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-color);
        }
        
        .code-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .code-title h3 {
          font-size: 14px;
          font-weight: 600;
        }
        
        .code-title .badge {
          font-size: 11px;
          padding: 2px 6px;
          background: var(--bg-tertiary);
          border-radius: 4px;
          color: var(--text-muted);
        }
        
        .code-title .status-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 4px;
        }
        
        .code-title .status-badge.success {
          background: rgba(34, 197, 94, 0.15);
          color: #22c55e;
        }
        
        .code-title .status-badge.error {
          background: rgba(239, 68, 68, 0.15);
          color: #ef4444;
        }
        
        .code-actions {
          display: flex;
          gap: 8px;
        }
        
        .code-editor {
          flex: 1;
          min-height: 0;
        }
        
        .code-info {
          padding: 12px 16px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-tertiary);
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .code-info p {
          margin-bottom: 8px;
        }
        
        .code-info code {
          background: var(--bg-secondary);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
        }
        
        .code-loading, .code-error {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 12px;
          color: #71717a;
        }
        
        .code-error {
          color: #ef4444;
        }
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(wn,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:s?"Loading...":"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Fd,{size:12}),"Copied!"]}),l&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(wi,{size:12}),"Error"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:s||!!l,children:[o.jsx(Xo,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:s||!!l,children:[o.jsx(Zo,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:s?o.jsx("div",{className:"code-loading",children:o.jsx("div",{children:"Loading generated code..."})}):l?o.jsxs("div",{className:"code-error",children:[o.jsx(wi,{size:24}),o.jsx("div",{children:l})]}):o.jsx(Kt,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const D5=[{id:"app",label:"App",icon:Zy},{id:"agents",label:"Agents",icon:Er},{id:"tools",label:"Tools",icon:an},{id:"callbacks",label:"Callbacks",icon:wn},{id:"run",label:"Run",icon:Qy},{id:"skillsets",label:"SkillSets",icon:Jk},{id:"eval",label:"Evaluate",icon:bu},{id:"yaml",label:"YAML",icon:Gk},{id:"code",label:"Code",icon:wn}],F5=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function vc(){var R,$;const{projectId:e,tab:t,itemId:n}=Kw(),r=$d(),{project:i,setProject:s,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:h}=dt(),[m,b]=j.useState(!0),[k,x]=j.useState(!1),[g,y]=j.useState(!1),[_,A]=j.useState(null),C=j.useRef(!0),P=j.useRef(null);j.useEffect(()=>{t&&F5.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),j.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&h(n)},[t,n]);function N(z){l(z),z==="agents"&&d?r(`/project/${e}/${z}/${d}`,{replace:!0}):z==="tools"&&f?r(`/project/${e}/${z}/${f}`,{replace:!0}):r(`/project/${e}/${z}`,{replace:!0})}function D(z){z?r(`/project/${e}/${a}/${z}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}j.useEffect(()=>(e&&E(e),()=>{s(null),u(!1)}),[e]);async function E(z){C.current=!0;try{const O=await zy(z);s(O),P.current=JSON.stringify(O),u(!1)}catch(O){console.error("Failed to load project:",O),r("/")}finally{b(!1),setTimeout(()=>{C.current=!1},100)}}async function M(){if(i){x(!0);try{const{eval_sets:z,...O}=i;await mu(i.id,O),P.current=JSON.stringify(i),u(!1)}catch(z){console.error("Failed to save project:",z)}finally{x(!1)}}}async function L(){if(i){y(!0),A(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let z=0,O=0;const I=[],w=[];for(const H of i.eval_sets||[]){if(H.eval_cases.length===0)continue;const K=await Je.post(`/projects/${i.id}/eval-sets/${H.id}/run`,{});K.result&&(z+=K.result.passed_cases||0,O+=K.result.total_cases||0,K.result.case_results&&I.push(...K.result.case_results),w.push(K.result.eval_set_name||H.name||H.id))}if(I.length>0){const H={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:w.length>1?`All Tests (${w.length} sets)`:w[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:O,passed_cases:z,failed_cases:O-z,case_results:I};try{await Je.post(`/projects/${i.id}/eval-history`,H)}catch(K){console.warn("Failed to save batch eval run to history:",K)}}A({passed:z,total:O}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>A(null),5e3)}catch(z){console.error("Failed to run tests:",z),A({passed:0,total:-1}),setTimeout(()=>A(null),5e3)}finally{y(!1)}}}const U=j.useRef(null);j.useEffect(()=>{if(i&&!C.current&&U.current){const z=i.app.models||[],O=U.current||[];if(z.some((w,H)=>{const K=O.find(v=>v.id===w.id);return K?K.provider!==w.provider||K.model_name!==w.model_name||K.api_base!==w.api_base||K.temperature!==w.temperature||K.max_output_tokens!==w.max_output_tokens||K.top_p!==w.top_p||K.top_k!==w.top_k:!1})){const w=i.app.default_model_id,H=i.agents.map(v=>{if(v.type==="LlmAgent"&&v.model){const V=v.model._appModelId;if(V){const S=z.find(W=>W.id===V);if(S)return{...v,model:{provider:S.provider,model_name:S.model_name,api_base:S.api_base,temperature:S.temperature,max_output_tokens:S.max_output_tokens,top_p:S.top_p,top_k:S.top_k,fallbacks:[],_appModelId:V}}}else if(w){const S=z.find(W=>W.id===w);if(S&&v.model.provider===S.provider&&v.model.model_name===S.model_name&&v.model.api_base===S.api_base)return{...v,model:{provider:S.provider,model_name:S.model_name,api_base:S.api_base,temperature:S.temperature,max_output_tokens:S.max_output_tokens,top_p:S.top_p,top_k:S.top_k,fallbacks:[],_appModelId:w}}}}return v});H.some((v,V)=>JSON.stringify(v)!==JSON.stringify(i.agents[V]))&&s({...i,agents:H})}}i&&(U.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const T=j.useRef(null);return j.useEffect(()=>(i&&!C.current&&P.current&&JSON.stringify(i)!==P.current&&(u(!0),T.current&&clearTimeout(T.current),T.current=setTimeout(async()=>{try{const{eval_sets:O,...I}=i;await mu(i.id,I),P.current=JSON.stringify(i),u(!1)}catch(O){console.error("Auto-save failed:",O)}},500)),()=>{T.current&&clearTimeout(T.current)}),[i]),m?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
          .loading-screen {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-muted);
          }
        `}),"Loading project..."]}):i?o.jsxs("div",{className:"project-editor",children:[o.jsx("style",{children:`
        .project-editor {
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .top-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 8px 16px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
        }
        
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        
        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          padding: 6px 12px;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }
        
        .back-btn:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }
        
        .project-name {
          font-size: 1.25rem;
          font-weight: 600;
        }
        
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          margin-left: auto;
        }
        
        .save-indicator {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .tabs-bar {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 13px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        
        .tab-btn svg {
          width: 14px;
          height: 14px;
        }
        
        .tab-btn:hover {
          color: var(--text-primary);
          background: var(--bg-secondary);
        }
        
        .tab-btn.active {
          color: var(--bg-primary);
          background: var(--accent-primary);
        }
        
        .tab-btn.active svg {
          color: var(--bg-primary);
        }
        
        .main-content {
          flex: 1;
          overflow: auto;
          padding: 20px;
        }
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(Hk,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:D5.map(z=>o.jsxs("button",{className:`tab-btn ${a===z.id?"active":""}`,onClick:()=>N(z.id),children:[o.jsx(z.icon,{size:14}),z.label]},z.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${_?_.total===-1?"btn-error":_.passed===_.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:L,disabled:g||!((R=i==null?void 0:i.eval_sets)!=null&&R.some(z=>z.eval_cases.length>0)),title:($=i==null?void 0:i.eval_sets)!=null&&$.some(z=>z.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[g?o.jsx(ej,{size:16,className:"spin"}):o.jsx(pr,{size:16}),g?"Testing...":_?_.total===-1?"Error":`${_.passed}/${_.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:M,disabled:k,children:[o.jsx(Ta,{size:16}),k?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[a==="app"&&o.jsx(mj,{}),a==="agents"&&o.jsx(k4,{onSelectAgent:D}),a==="tools"&&o.jsx(nE,{onSelectTool:D}),a==="callbacks"&&o.jsx(iE,{onSelectCallback:D}),a==="run"&&o.jsx(N5,{}),a==="skillsets"&&o.jsx(T5,{}),a==="eval"&&o.jsx(P5,{}),a==="yaml"&&o.jsx(O5,{}),a==="code"&&o.jsx($5,{})]})]}):null}function B5(){const{setMcpServers:e,setBuiltinTools:t}=dt();return j.useEffect(()=>{Dd().then(e).catch(console.error),Iy().then(t).catch(console.error)},[e,t]),o.jsxs(dk,{children:[o.jsx(Vr,{path:"/",element:o.jsx(lj,{})}),o.jsx(Vr,{path:"/project/:projectId",element:o.jsx(vc,{})}),o.jsx(Vr,{path:"/project/:projectId/:tab",element:o.jsx(vc,{})}),o.jsx(Vr,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(vc,{})}),o.jsx(Vr,{path:"*",element:o.jsx(ck,{to:"/",replace:!0})})]})}bc.createRoot(document.getElementById("root")).render(o.jsx(Ot.StrictMode,{children:o.jsx(hk,{children:o.jsx(B5,{})})}));
