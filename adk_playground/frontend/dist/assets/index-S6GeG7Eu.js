function Z1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ig={exports:{}},Ja={},og={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ko=Symbol.for("react.element"),e0=Symbol.for("react.portal"),t0=Symbol.for("react.fragment"),n0=Symbol.for("react.strict_mode"),r0=Symbol.for("react.profiler"),i0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),s0=Symbol.for("react.forward_ref"),a0=Symbol.for("react.suspense"),l0=Symbol.for("react.memo"),c0=Symbol.for("react.lazy"),sf=Symbol.iterator;function u0(e){return e===null||typeof e!="object"?null:(e=sf&&e[sf]||e["@@iterator"],typeof e=="function"?e:null)}var sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,lg={};function Ci(e,t,n){this.props=e,this.context=t,this.refs=lg,this.updater=n||sg}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cg(){}cg.prototype=Ci.prototype;function Wu(e,t,n){this.props=e,this.context=t,this.refs=lg,this.updater=n||sg}var Hu=Wu.prototype=new cg;Hu.constructor=Wu;ag(Hu,Ci.prototype);Hu.isPureReactComponent=!0;var af=Array.isArray,ug=Object.prototype.hasOwnProperty,qu={current:null},dg={key:!0,ref:!0,__self:!0,__source:!0};function pg(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)ug.call(t,r)&&!dg.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ko,type:e,key:s,ref:a,props:i,_owner:qu.current}}function d0(e,t){return{$$typeof:Ko,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ju(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ko}function p0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var lf=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p0(""+e.key):t.toString(36)}function Ds(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ko:case e0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Sl(a,0):r,af(i)?(n="",e!=null&&(n=e.replace(lf,"$&/")+"/"),Ds(i,t,n,"",function(u){return u})):i!=null&&(Ju(i)&&(i=d0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(lf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",af(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Sl(s,l);a+=Ds(s,t,n,c,i)}else if(c=u0(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Sl(s,l++),a+=Ds(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ps(e,t,n){if(e==null)return e;var r=[],i=0;return Ds(e,r,"","",function(s){return t.call(n,s,i++)}),r}function f0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},Fs={transition:null},h0={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Fs,ReactCurrentOwner:qu};function fg(){throw Error("act(...) is not supported in production builds of React.")}Ne.Children={map:ps,forEach:function(e,t,n){ps(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ps(e,function(){t++}),t},toArray:function(e){return ps(e,function(t){return t})||[]},only:function(e){if(!Ju(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ne.Component=Ci;Ne.Fragment=t0;Ne.Profiler=r0;Ne.PureComponent=Wu;Ne.StrictMode=n0;Ne.Suspense=a0;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0;Ne.act=fg;Ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ag({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=qu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)ug.call(t,c)&&!dg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ko,type:e.type,key:i,ref:s,props:r,_owner:a}};Ne.createContext=function(e){return e={$$typeof:o0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:i0,_context:e},e.Consumer=e};Ne.createElement=pg;Ne.createFactory=function(e){var t=pg.bind(null,e);return t.type=e,t};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(e){return{$$typeof:s0,render:e}};Ne.isValidElement=Ju;Ne.lazy=function(e){return{$$typeof:c0,_payload:{_status:-1,_result:e},_init:f0}};Ne.memo=function(e,t){return{$$typeof:l0,type:e,compare:t===void 0?null:t}};Ne.startTransition=function(e){var t=Fs.transition;Fs.transition={};try{e()}finally{Fs.transition=t}};Ne.unstable_act=fg;Ne.useCallback=function(e,t){return vt.current.useCallback(e,t)};Ne.useContext=function(e){return vt.current.useContext(e)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};Ne.useEffect=function(e,t){return vt.current.useEffect(e,t)};Ne.useId=function(){return vt.current.useId()};Ne.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};Ne.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};Ne.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};Ne.useMemo=function(e,t){return vt.current.useMemo(e,t)};Ne.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};Ne.useRef=function(e){return vt.current.useRef(e)};Ne.useState=function(e){return vt.current.useState(e)};Ne.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};Ne.useTransition=function(){return vt.current.useTransition()};Ne.version="18.3.1";og.exports=Ne;var k=og.exports;const Dt=qa(k),m0=Z1({__proto__:null,default:Dt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=k,x0=Symbol.for("react.element"),y0=Symbol.for("react.fragment"),v0=Object.prototype.hasOwnProperty,b0=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w0={key:!0,ref:!0,__self:!0,__source:!0};function hg(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)v0.call(t,r)&&!w0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:x0,type:e,key:s,ref:a,props:i,_owner:b0.current}}Ja.Fragment=y0;Ja.jsx=hg;Ja.jsxs=hg;ig.exports=Ja;var o=ig.exports,_c={},mg={exports:{}},Vt={},gg={exports:{}},xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,R){var _=O.length;O.push(R);e:for(;0<_;){var H=_-1>>>1,K=O[H];if(0<i(K,R))O[H]=R,O[_]=K,_=H;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var R=O[0],_=O.pop();if(_!==R){O[0]=_;e:for(var H=0,K=O.length,b=K>>>1;H<b;){var W=2*(H+1)-1,S=O[W],V=W+1,ie=O[V];if(0>i(S,_))V<K&&0>i(ie,S)?(O[H]=ie,O[V]=_,H=V):(O[H]=S,O[W]=_,H=W);else if(V<K&&0>i(ie,_))O[H]=ie,O[V]=_,H=V;else break e}}return R}function i(O,R){var _=O.sortIndex-R.sortIndex;return _!==0?_:O.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=O)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function j(O){if(v=!1,y(O),!g)if(n(c)!==null)g=!0,$(A);else{var R=n(u);R!==null&&z(j,R.startTime-O)}}function A(O,R){g=!1,v&&(v=!1,m(N),N=-1),h=!0;var _=f;try{for(y(R),p=n(c);p!==null&&(!(p.expirationTime>R)||O&&!M());){var H=p.callback;if(typeof H=="function"){p.callback=null,f=p.priorityLevel;var K=H(p.expirationTime<=R);R=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(c)&&r(c),y(R)}else r(c);p=n(c)}if(p!==null)var b=!0;else{var W=n(u);W!==null&&z(j,W.startTime-R),b=!1}return b}finally{p=null,f=_,h=!1}}var C=!1,P=null,N=-1,D=5,E=-1;function M(){return!(e.unstable_now()-E<D)}function L(){if(P!==null){var O=e.unstable_now();E=O;var R=!0;try{R=P(!0,O)}finally{R?U():(C=!1,P=null)}}else C=!1}var U;if(typeof x=="function")U=function(){x(L)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,I=T.port2;T.port1.onmessage=L,U=function(){I.postMessage(null)}}else U=function(){w(L,0)};function $(O){P=O,C||(C=!0,U())}function z(O,R){N=w(function(){O(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,$(A))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var _=f;f=R;try{return O()}finally{f=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,R){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var _=f;f=O;try{return R()}finally{f=_}},e.unstable_scheduleCallback=function(O,R,_){var H=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?H+_:H):_=H,O){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=_+K,O={id:d++,callback:R,priorityLevel:O,startTime:_,expirationTime:K,sortIndex:-1},_>H?(O.sortIndex=_,t(u,O),n(c)===null&&O===n(u)&&(v?(m(N),N=-1):v=!0,z(j,_-H))):(O.sortIndex=K,t(c,O),g||h||(g=!0,$(A))),O},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(O){var R=f;return function(){var _=f;f=R;try{return O.apply(this,arguments)}finally{f=_}}}})(xg);gg.exports=xg;var k0=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0=k,Bt=k0;function ne(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yg=new Set,bo={};function Dr(e,t){hi(e,t),hi(e+"Capture",t)}function hi(e,t){for(bo[e]=t,e=0;e<t.length;e++)yg.add(t[e])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=Object.prototype.hasOwnProperty,j0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cf={},uf={};function S0(e){return jc.call(uf,e)?!0:jc.call(cf,e)?!1:j0.test(e)?uf[e]=!0:(cf[e]=!0,!1)}function C0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N0(e,t,n,r){if(t===null||typeof t>"u"||C0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){lt[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];lt[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){lt[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){lt[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){lt[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){lt[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){lt[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){lt[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){lt[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ku=/[\-:]([a-z])/g;function Gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ku,Gu);lt[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ku,Gu);lt[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ku,Gu);lt[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){lt[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});lt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){lt[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yu(e,t,n,r){var i=lt.hasOwnProperty(t)?lt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N0(t,n,i,r)&&(n=null),r||i===null?S0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Un=_0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fs=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),Xu=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Nc=Symbol.for("react.suspense_list"),Zu=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),wg=Symbol.for("react.offscreen"),df=Symbol.iterator;function $i(e){return e===null||typeof e!="object"?null:(e=df&&e[df]||e["@@iterator"],typeof e=="function"?e:null)}var He=Object.assign,Cl;function Zi(e){if(Cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||""}return`
`+Cl+e}var Nl=!1;function El(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zi(e):""}function E0(e){switch(e.tag){case 5:return Zi(e.type);case 16:return Zi("Lazy");case 13:return Zi("Suspense");case 19:return Zi("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function Ec(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qr:return"Fragment";case Hr:return"Portal";case Sc:return"Profiler";case Qu:return"StrictMode";case Cc:return"Suspense";case Nc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bg:return(e.displayName||"Context")+".Consumer";case vg:return(e._context.displayName||"Context")+".Provider";case Xu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zu:return t=e.displayName||null,t!==null?t:Ec(e.type)||"Memo";case Hn:t=e._payload,e=e._init;try{return Ec(e(t))}catch{}}return null}function z0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ec(t);case 8:return t===Qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function T0(e){var t=kg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hs(e){e._valueTracker||(e._valueTracker=T0(e))}function _g(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zc(e,t){var n=t.checked;return He({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function pf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ur(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jg(e,t){t=t.checked,t!=null&&Yu(e,"checked",t,!1)}function Tc(e,t){jg(e,t);var n=ur(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ac(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ac(e,t.type,ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ff(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ac(e,t,n){(t!=="number"||sa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eo=Array.isArray;function ii(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ur(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ne(91));return He({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ne(92));if(eo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ur(n)}}function Sg(e,t){var n=ur(t.value),r=ur(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function mf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ms,Ng=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ms=ms||document.createElement("div"),ms.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},A0=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(e){A0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),so[t]=so[e]})});function Eg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||so.hasOwnProperty(e)&&so[e]?(""+t).trim():t+"px"}function zg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Eg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var P0=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mc(e,t){if(t){if(P0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ne(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ne(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ne(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ne(62))}}function Rc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ic=null;function ed(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oc=null,oi=null,si=null;function gf(e){if(e=Qo(e)){if(typeof Oc!="function")throw Error(ne(280));var t=e.stateNode;t&&(t=Xa(t),Oc(e.stateNode,e.type,t))}}function Tg(e){oi?si?si.push(e):si=[e]:oi=e}function Ag(){if(oi){var e=oi,t=si;if(si=oi=null,gf(e),t)for(e=0;e<t.length;e++)gf(t[e])}}function Pg(e,t){return e(t)}function Lg(){}var zl=!1;function Mg(e,t,n){if(zl)return e(t,n);zl=!0;try{return Pg(e,t,n)}finally{zl=!1,(oi!==null||si!==null)&&(Lg(),Ag())}}function ko(e,t){var n=e.stateNode;if(n===null)return null;var r=Xa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ne(231,t,typeof n));return n}var $c=!1;if(On)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{$c=!1}function L0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ao=!1,aa=null,la=!1,Dc=null,M0={onError:function(e){ao=!0,aa=e}};function R0(e,t,n,r,i,s,a,l,c){ao=!1,aa=null,L0.apply(M0,arguments)}function I0(e,t,n,r,i,s,a,l,c){if(R0.apply(this,arguments),ao){if(ao){var u=aa;ao=!1,aa=null}else throw Error(ne(198));la||(la=!0,Dc=u)}}function Fr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function xf(e){if(Fr(e)!==e)throw Error(ne(188))}function O0(e){var t=e.alternate;if(!t){if(t=Fr(e),t===null)throw Error(ne(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xf(i),e;if(s===r)return xf(i),t;s=s.sibling}throw Error(ne(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==r)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?e:t}function Ig(e){return e=O0(e),e!==null?Og(e):null}function Og(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Og(e);if(t!==null)return t;e=e.sibling}return null}var $g=Bt.unstable_scheduleCallback,yf=Bt.unstable_cancelCallback,$0=Bt.unstable_shouldYield,D0=Bt.unstable_requestPaint,Ke=Bt.unstable_now,F0=Bt.unstable_getCurrentPriorityLevel,td=Bt.unstable_ImmediatePriority,Dg=Bt.unstable_UserBlockingPriority,ca=Bt.unstable_NormalPriority,B0=Bt.unstable_LowPriority,Fg=Bt.unstable_IdlePriority,Ka=null,bn=null;function U0(e){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Ka,e,void 0,(e.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:H0,V0=Math.log,W0=Math.LN2;function H0(e){return e>>>=0,e===0?32:31-(V0(e)/W0|0)|0}var gs=64,xs=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ua(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=to(l):(s&=a,s!==0&&(r=to(s)))}else a=n&~i,a!==0?r=to(a):s!==0&&(r=to(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ln(t),i=1<<n,r|=e[n],t&=~i;return r}function q0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function J0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-ln(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=q0(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Fc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bg(){var e=gs;return gs<<=1,!(gs&4194240)&&(gs=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Go(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ln(t),e[t]=n}function K0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ln(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function nd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ln(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Pe=0;function Ug(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vg,rd,Wg,Hg,qg,Bc=!1,ys=[],tr=null,nr=null,rr=null,_o=new Map,jo=new Map,Kn=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vf(e,t){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":_o.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(t.pointerId)}}function Fi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Qo(t),t!==null&&rd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Y0(e,t,n,r,i){switch(t){case"focusin":return tr=Fi(tr,e,t,n,r,i),!0;case"dragenter":return nr=Fi(nr,e,t,n,r,i),!0;case"mouseover":return rr=Fi(rr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return _o.set(s,Fi(_o.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jo.set(s,Fi(jo.get(s)||null,e,t,n,r,i)),!0}return!1}function Jg(e){var t=wr(e.target);if(t!==null){var n=Fr(t);if(n!==null){if(t=n.tag,t===13){if(t=Rg(n),t!==null){e.blockedOn=t,qg(e.priority,function(){Wg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Uc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ic=r,n.target.dispatchEvent(r),Ic=null}else return t=Qo(n),t!==null&&rd(t),e.blockedOn=n,!1;t.shift()}return!0}function bf(e,t,n){Bs(e)&&n.delete(t)}function Q0(){Bc=!1,tr!==null&&Bs(tr)&&(tr=null),nr!==null&&Bs(nr)&&(nr=null),rr!==null&&Bs(rr)&&(rr=null),_o.forEach(bf),jo.forEach(bf)}function Bi(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,Q0)))}function So(e){function t(i){return Bi(i,e)}if(0<ys.length){Bi(ys[0],e);for(var n=1;n<ys.length;n++){var r=ys[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tr!==null&&Bi(tr,e),nr!==null&&Bi(nr,e),rr!==null&&Bi(rr,e),_o.forEach(t),jo.forEach(t),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Jg(n),n.blockedOn===null&&Kn.shift()}var ai=Un.ReactCurrentBatchConfig,da=!0;function X0(e,t,n,r){var i=Pe,s=ai.transition;ai.transition=null;try{Pe=1,id(e,t,n,r)}finally{Pe=i,ai.transition=s}}function Z0(e,t,n,r){var i=Pe,s=ai.transition;ai.transition=null;try{Pe=4,id(e,t,n,r)}finally{Pe=i,ai.transition=s}}function id(e,t,n,r){if(da){var i=Uc(e,t,n,r);if(i===null)Fl(e,t,r,pa,n),vf(e,r);else if(Y0(i,e,t,n,r))r.stopPropagation();else if(vf(e,r),t&4&&-1<G0.indexOf(e)){for(;i!==null;){var s=Qo(i);if(s!==null&&Vg(s),s=Uc(e,t,n,r),s===null&&Fl(e,t,r,pa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fl(e,t,r,null,n)}}var pa=null;function Uc(e,t,n,r){if(pa=null,e=ed(r),e=wr(e),e!==null)if(t=Fr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pa=e,null}function Kg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F0()){case td:return 1;case Dg:return 4;case ca:case B0:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var Yn=null,od=null,Us=null;function Gg(){if(Us)return Us;var e,t=od,n=t.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Us=i.slice(e,1<r?1-r:void 0)}function Vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vs(){return!0}function wf(){return!1}function Wt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vs:wf,this.isPropagationStopped=wf,this}return He(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vs)},persist:function(){},isPersistent:vs}),t}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=Wt(Ni),Yo=He({},Ni,{view:0,detail:0}),eb=Wt(Yo),Al,Pl,Ui,Ga=He({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ui&&(Ui&&e.type==="mousemove"?(Al=e.screenX-Ui.screenX,Pl=e.screenY-Ui.screenY):Pl=Al=0,Ui=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),kf=Wt(Ga),tb=He({},Ga,{dataTransfer:0}),nb=Wt(tb),rb=He({},Yo,{relatedTarget:0}),Ll=Wt(rb),ib=He({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),ob=Wt(ib),sb=He({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ab=Wt(sb),lb=He({},Ni,{data:0}),_f=Wt(lb),cb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},db={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=db[e])?!!t[e]:!1}function ad(){return pb}var fb=He({},Yo,{key:function(e){if(e.key){var t=cb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ub[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(e){return e.type==="keypress"?Vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hb=Wt(fb),mb=He({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=Wt(mb),gb=He({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),xb=Wt(gb),yb=He({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),vb=Wt(yb),bb=He({},Ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wb=Wt(bb),kb=[9,13,27,32],ld=On&&"CompositionEvent"in window,lo=null;On&&"documentMode"in document&&(lo=document.documentMode);var _b=On&&"TextEvent"in window&&!lo,Yg=On&&(!ld||lo&&8<lo&&11>=lo),Sf=" ",Cf=!1;function Qg(e,t){switch(e){case"keyup":return kb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function jb(e,t){switch(e){case"compositionend":return Xg(t);case"keypress":return t.which!==32?null:(Cf=!0,Sf);case"textInput":return e=t.data,e===Sf&&Cf?null:e;default:return null}}function Sb(e,t){if(Jr)return e==="compositionend"||!ld&&Qg(e,t)?(e=Gg(),Us=od=Yn=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yg&&t.locale!=="ko"?null:t.data;default:return null}}var Cb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cb[e.type]:t==="textarea"}function Zg(e,t,n,r){Tg(r),t=fa(t,"onChange"),0<t.length&&(n=new sd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var co=null,Co=null;function Nb(e){ux(e,0)}function Ya(e){var t=Yr(e);if(_g(t))return e}function Eb(e,t){if(e==="change")return t}var ex=!1;if(On){var Ml;if(On){var Rl="oninput"in document;if(!Rl){var Ef=document.createElement("div");Ef.setAttribute("oninput","return;"),Rl=typeof Ef.oninput=="function"}Ml=Rl}else Ml=!1;ex=Ml&&(!document.documentMode||9<document.documentMode)}function zf(){co&&(co.detachEvent("onpropertychange",tx),Co=co=null)}function tx(e){if(e.propertyName==="value"&&Ya(Co)){var t=[];Zg(t,Co,e,ed(e)),Mg(Nb,t)}}function zb(e,t,n){e==="focusin"?(zf(),co=t,Co=n,co.attachEvent("onpropertychange",tx)):e==="focusout"&&zf()}function Tb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(Co)}function Ab(e,t){if(e==="click")return Ya(t)}function Pb(e,t){if(e==="input"||e==="change")return Ya(t)}function Lb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dn=typeof Object.is=="function"?Object.is:Lb;function No(e,t){if(dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jc.call(t,i)||!dn(e[i],t[i]))return!1}return!0}function Tf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Af(e,t){var n=Tf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tf(n)}}function nx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rx(){for(var e=window,t=sa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sa(e.document)}return t}function cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mb(e){var t=rx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nx(n.ownerDocument.documentElement,n)){if(r!==null&&cd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Af(n,s);var a=Af(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rb=On&&"documentMode"in document&&11>=document.documentMode,Kr=null,Vc=null,uo=null,Wc=!1;function Pf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wc||Kr==null||Kr!==sa(r)||(r=Kr,"selectionStart"in r&&cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&No(uo,r)||(uo=r,r=fa(Vc,"onSelect"),0<r.length&&(t=new sd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function bs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gr={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionend:bs("Transition","TransitionEnd")},Il={},ix={};On&&(ix=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function Qa(e){if(Il[e])return Il[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ix)return Il[e]=t[n];return e}var ox=Qa("animationend"),sx=Qa("animationiteration"),ax=Qa("animationstart"),lx=Qa("transitionend"),cx=new Map,Lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(e,t){cx.set(e,t),Dr(t,[e])}for(var Ol=0;Ol<Lf.length;Ol++){var $l=Lf[Ol],Ib=$l.toLowerCase(),Ob=$l[0].toUpperCase()+$l.slice(1);fr(Ib,"on"+Ob)}fr(ox,"onAnimationEnd");fr(sx,"onAnimationIteration");fr(ax,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(lx,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$b=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function Mf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I0(r,t,void 0,e),e.currentTarget=null}function ux(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Mf(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Mf(i,l,u),s=c}}}if(la)throw e=Dc,la=!1,Dc=null,e}function $e(e,t){var n=t[Gc];n===void 0&&(n=t[Gc]=new Set);var r=e+"__bubble";n.has(r)||(dx(t,e,2,!1),n.add(r))}function Dl(e,t,n){var r=0;t&&(r|=4),dx(n,e,r,t)}var ws="_reactListening"+Math.random().toString(36).slice(2);function Eo(e){if(!e[ws]){e[ws]=!0,yg.forEach(function(n){n!=="selectionchange"&&($b.has(n)||Dl(n,!1,e),Dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ws]||(t[ws]=!0,Dl("selectionchange",!1,t))}}function dx(e,t,n,r){switch(Kg(t)){case 1:var i=X0;break;case 4:i=Z0;break;default:i=id}n=i.bind(null,t,n,e),i=void 0,!$c||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Fl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=wr(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Mg(function(){var u=s,d=ed(n),p=[];e:{var f=cx.get(e);if(f!==void 0){var h=sd,g=e;switch(e){case"keypress":if(Vs(n)===0)break e;case"keydown":case"keyup":h=hb;break;case"focusin":g="focus",h=Ll;break;case"focusout":g="blur",h=Ll;break;case"beforeblur":case"afterblur":h=Ll;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=nb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=xb;break;case ox:case sx:case ax:h=ob;break;case lx:h=vb;break;case"scroll":h=eb;break;case"wheel":h=wb;break;case"copy":case"cut":case"paste":h=ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=jf}var v=(t&4)!==0,w=!v&&e==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var x=u,y;x!==null;){y=x;var j=y.stateNode;if(y.tag===5&&j!==null&&(y=j,m!==null&&(j=ko(x,m),j!=null&&v.push(zo(x,j,y)))),w)break;x=x.return}0<v.length&&(f=new h(f,g,null,n,d),p.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Ic&&(g=n.relatedTarget||n.fromElement)&&(wr(g)||g[$n]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?wr(g):null,g!==null&&(w=Fr(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(v=kf,j="onMouseLeave",m="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(v=jf,j="onPointerLeave",m="onPointerEnter",x="pointer"),w=h==null?f:Yr(h),y=g==null?f:Yr(g),f=new v(j,x+"leave",h,n,d),f.target=w,f.relatedTarget=y,j=null,wr(d)===u&&(v=new v(m,x+"enter",g,n,d),v.target=y,v.relatedTarget=w,j=v),w=j,h&&g)t:{for(v=h,m=g,x=0,y=v;y;y=Ur(y))x++;for(y=0,j=m;j;j=Ur(j))y++;for(;0<x-y;)v=Ur(v),x--;for(;0<y-x;)m=Ur(m),y--;for(;x--;){if(v===m||m!==null&&v===m.alternate)break t;v=Ur(v),m=Ur(m)}v=null}else v=null;h!==null&&Rf(p,f,h,v,!1),g!==null&&w!==null&&Rf(p,w,g,v,!0)}}e:{if(f=u?Yr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var A=Eb;else if(Nf(f))if(ex)A=Pb;else{A=Tb;var C=zb}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(A=Ab);if(A&&(A=A(e,u))){Zg(p,A,n,d);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Ac(f,"number",f.value)}switch(C=u?Yr(u):window,e){case"focusin":(Nf(C)||C.contentEditable==="true")&&(Kr=C,Vc=u,uo=null);break;case"focusout":uo=Vc=Kr=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,Pf(p,n,d);break;case"selectionchange":if(Rb)break;case"keydown":case"keyup":Pf(p,n,d)}var P;if(ld)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Jr?Qg(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Yg&&n.locale!=="ko"&&(Jr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Jr&&(P=Gg()):(Yn=d,od="value"in Yn?Yn.value:Yn.textContent,Jr=!0)),C=fa(u,N),0<C.length&&(N=new _f(N,e,null,n,d),p.push({event:N,listeners:C}),P?N.data=P:(P=Xg(n),P!==null&&(N.data=P)))),(P=_b?jb(e,n):Sb(e,n))&&(u=fa(u,"onBeforeInput"),0<u.length&&(d=new _f("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=P))}ux(p,t)})}function zo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function fa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ko(e,n),s!=null&&r.unshift(zo(e,s,i)),s=ko(e,t),s!=null&&r.push(zo(e,s,i))),e=e.return}return r}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rf(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=ko(n,s),c!=null&&a.unshift(zo(n,c,l))):i||(c=ko(n,s),c!=null&&a.push(zo(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Db=/\r\n?/g,Fb=/\u0000|\uFFFD/g;function If(e){return(typeof e=="string"?e:""+e).replace(Db,`
`).replace(Fb,"")}function ks(e,t,n){if(t=If(t),If(e)!==t&&n)throw Error(ne(425))}function ha(){}var Hc=null,qc=null;function Jc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,Bb=typeof clearTimeout=="function"?clearTimeout:void 0,Of=typeof Promise=="function"?Promise:void 0,Ub=typeof queueMicrotask=="function"?queueMicrotask:typeof Of<"u"?function(e){return Of.resolve(null).then(e).catch(Vb)}:Kc;function Vb(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),So(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);So(t)}function ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),xn="__reactFiber$"+Ei,To="__reactProps$"+Ei,$n="__reactContainer$"+Ei,Gc="__reactEvents$"+Ei,Wb="__reactListeners$"+Ei,Hb="__reactHandles$"+Ei;function wr(e){var t=e[xn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$n]||n[xn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$f(e);e!==null;){if(n=e[xn])return n;e=$f(e)}return t}e=n,n=e.parentNode}return null}function Qo(e){return e=e[xn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ne(33))}function Xa(e){return e[To]||null}var Yc=[],Qr=-1;function hr(e){return{current:e}}function De(e){0>Qr||(e.current=Yc[Qr],Yc[Qr]=null,Qr--)}function Ie(e,t){Qr++,Yc[Qr]=e.current,e.current=t}var dr={},ft=hr(dr),Nt=hr(!1),Ar=dr;function mi(e,t){var n=e.type.contextTypes;if(!n)return dr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Et(e){return e=e.childContextTypes,e!=null}function ma(){De(Nt),De(ft)}function Df(e,t,n){if(ft.current!==dr)throw Error(ne(168));Ie(ft,t),Ie(Nt,n)}function px(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(ne(108,z0(e)||"Unknown",i));return He({},n,r)}function ga(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dr,Ar=ft.current,Ie(ft,e),Ie(Nt,Nt.current),!0}function Ff(e,t,n){var r=e.stateNode;if(!r)throw Error(ne(169));n?(e=px(e,t,Ar),r.__reactInternalMemoizedMergedChildContext=e,De(Nt),De(ft),Ie(ft,e)):De(Nt),Ie(Nt,n)}var An=null,Za=!1,Ul=!1;function fx(e){An===null?An=[e]:An.push(e)}function qb(e){Za=!0,fx(e)}function mr(){if(!Ul&&An!==null){Ul=!0;var e=0,t=Pe;try{var n=An;for(Pe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}An=null,Za=!1}catch(i){throw An!==null&&(An=An.slice(e+1)),$g(td,mr),i}finally{Pe=t,Ul=!1}}return null}var Xr=[],Zr=0,xa=null,ya=0,qt=[],Jt=0,Pr=null,Pn=1,Ln="";function yr(e,t){Xr[Zr++]=ya,Xr[Zr++]=xa,xa=e,ya=t}function hx(e,t,n){qt[Jt++]=Pn,qt[Jt++]=Ln,qt[Jt++]=Pr,Pr=e;var r=Pn;e=Ln;var i=32-ln(r)-1;r&=~(1<<i),n+=1;var s=32-ln(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Pn=1<<32-ln(t)+i|n<<i|r,Ln=s+e}else Pn=1<<s|n<<i|r,Ln=e}function ud(e){e.return!==null&&(yr(e,1),hx(e,1,0))}function dd(e){for(;e===xa;)xa=Xr[--Zr],Xr[Zr]=null,ya=Xr[--Zr],Xr[Zr]=null;for(;e===Pr;)Pr=qt[--Jt],qt[Jt]=null,Ln=qt[--Jt],qt[Jt]=null,Pn=qt[--Jt],qt[Jt]=null}var Ft=null,Ot=null,Fe=!1,sn=null;function mx(e,t){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ft=e,Ot=ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ft=e,Ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pr!==null?{id:Pn,overflow:Ln}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ft=e,Ot=null,!0):!1;default:return!1}}function Qc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xc(e){if(Fe){var t=Ot;if(t){var n=t;if(!Bf(e,t)){if(Qc(e))throw Error(ne(418));t=ir(n.nextSibling);var r=Ft;t&&Bf(e,t)?mx(r,n):(e.flags=e.flags&-4097|2,Fe=!1,Ft=e)}}else{if(Qc(e))throw Error(ne(418));e.flags=e.flags&-4097|2,Fe=!1,Ft=e}}}function Uf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ft=e}function _s(e){if(e!==Ft)return!1;if(!Fe)return Uf(e),Fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jc(e.type,e.memoizedProps)),t&&(t=Ot)){if(Qc(e))throw gx(),Error(ne(418));for(;t;)mx(e,t),t=ir(t.nextSibling)}if(Uf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ne(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ot=ir(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ot=null}}else Ot=Ft?ir(e.stateNode.nextSibling):null;return!0}function gx(){for(var e=Ot;e;)e=ir(e.nextSibling)}function gi(){Ot=Ft=null,Fe=!1}function pd(e){sn===null?sn=[e]:sn.push(e)}var Jb=Un.ReactCurrentBatchConfig;function Vi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var r=n.stateNode}if(!r)throw Error(ne(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,e))}return e}function js(e,t){throw e=Object.prototype.toString.call(t),Error(ne(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vf(e){var t=e._init;return t(e._payload)}function xx(e){function t(m,x){if(e){var y=m.deletions;y===null?(m.deletions=[x],m.flags|=16):y.push(x)}}function n(m,x){if(!e)return null;for(;x!==null;)t(m,x),x=x.sibling;return null}function r(m,x){for(m=new Map;x!==null;)x.key!==null?m.set(x.key,x):m.set(x.index,x),x=x.sibling;return m}function i(m,x){return m=lr(m,x),m.index=0,m.sibling=null,m}function s(m,x,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<x?(m.flags|=2,x):y):(m.flags|=2,x)):(m.flags|=1048576,x)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,x,y,j){return x===null||x.tag!==6?(x=Gl(y,m.mode,j),x.return=m,x):(x=i(x,y),x.return=m,x)}function c(m,x,y,j){var A=y.type;return A===qr?d(m,x,y.props.children,j,y.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Hn&&Vf(A)===x.type)?(j=i(x,y.props),j.ref=Vi(m,x,y),j.return=m,j):(j=Ys(y.type,y.key,y.props,null,m.mode,j),j.ref=Vi(m,x,y),j.return=m,j)}function u(m,x,y,j){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Yl(y,m.mode,j),x.return=m,x):(x=i(x,y.children||[]),x.return=m,x)}function d(m,x,y,j,A){return x===null||x.tag!==7?(x=Cr(y,m.mode,j,A),x.return=m,x):(x=i(x,y),x.return=m,x)}function p(m,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Gl(""+x,m.mode,y),x.return=m,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fs:return y=Ys(x.type,x.key,x.props,null,m.mode,y),y.ref=Vi(m,null,x),y.return=m,y;case Hr:return x=Yl(x,m.mode,y),x.return=m,x;case Hn:var j=x._init;return p(m,j(x._payload),y)}if(eo(x)||$i(x))return x=Cr(x,m.mode,y,null),x.return=m,x;js(m,x)}return null}function f(m,x,y,j){var A=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:l(m,x,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fs:return y.key===A?c(m,x,y,j):null;case Hr:return y.key===A?u(m,x,y,j):null;case Hn:return A=y._init,f(m,x,A(y._payload),j)}if(eo(y)||$i(y))return A!==null?null:d(m,x,y,j,null);js(m,y)}return null}function h(m,x,y,j,A){if(typeof j=="string"&&j!==""||typeof j=="number")return m=m.get(y)||null,l(x,m,""+j,A);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case fs:return m=m.get(j.key===null?y:j.key)||null,c(x,m,j,A);case Hr:return m=m.get(j.key===null?y:j.key)||null,u(x,m,j,A);case Hn:var C=j._init;return h(m,x,y,C(j._payload),A)}if(eo(j)||$i(j))return m=m.get(y)||null,d(x,m,j,A,null);js(x,j)}return null}function g(m,x,y,j){for(var A=null,C=null,P=x,N=x=0,D=null;P!==null&&N<y.length;N++){P.index>N?(D=P,P=null):D=P.sibling;var E=f(m,P,y[N],j);if(E===null){P===null&&(P=D);break}e&&P&&E.alternate===null&&t(m,P),x=s(E,x,N),C===null?A=E:C.sibling=E,C=E,P=D}if(N===y.length)return n(m,P),Fe&&yr(m,N),A;if(P===null){for(;N<y.length;N++)P=p(m,y[N],j),P!==null&&(x=s(P,x,N),C===null?A=P:C.sibling=P,C=P);return Fe&&yr(m,N),A}for(P=r(m,P);N<y.length;N++)D=h(P,m,N,y[N],j),D!==null&&(e&&D.alternate!==null&&P.delete(D.key===null?N:D.key),x=s(D,x,N),C===null?A=D:C.sibling=D,C=D);return e&&P.forEach(function(M){return t(m,M)}),Fe&&yr(m,N),A}function v(m,x,y,j){var A=$i(y);if(typeof A!="function")throw Error(ne(150));if(y=A.call(y),y==null)throw Error(ne(151));for(var C=A=null,P=x,N=x=0,D=null,E=y.next();P!==null&&!E.done;N++,E=y.next()){P.index>N?(D=P,P=null):D=P.sibling;var M=f(m,P,E.value,j);if(M===null){P===null&&(P=D);break}e&&P&&M.alternate===null&&t(m,P),x=s(M,x,N),C===null?A=M:C.sibling=M,C=M,P=D}if(E.done)return n(m,P),Fe&&yr(m,N),A;if(P===null){for(;!E.done;N++,E=y.next())E=p(m,E.value,j),E!==null&&(x=s(E,x,N),C===null?A=E:C.sibling=E,C=E);return Fe&&yr(m,N),A}for(P=r(m,P);!E.done;N++,E=y.next())E=h(P,m,N,E.value,j),E!==null&&(e&&E.alternate!==null&&P.delete(E.key===null?N:E.key),x=s(E,x,N),C===null?A=E:C.sibling=E,C=E);return e&&P.forEach(function(L){return t(m,L)}),Fe&&yr(m,N),A}function w(m,x,y,j){if(typeof y=="object"&&y!==null&&y.type===qr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case fs:e:{for(var A=y.key,C=x;C!==null;){if(C.key===A){if(A=y.type,A===qr){if(C.tag===7){n(m,C.sibling),x=i(C,y.props.children),x.return=m,m=x;break e}}else if(C.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Hn&&Vf(A)===C.type){n(m,C.sibling),x=i(C,y.props),x.ref=Vi(m,C,y),x.return=m,m=x;break e}n(m,C);break}else t(m,C);C=C.sibling}y.type===qr?(x=Cr(y.props.children,m.mode,j,y.key),x.return=m,m=x):(j=Ys(y.type,y.key,y.props,null,m.mode,j),j.ref=Vi(m,x,y),j.return=m,m=j)}return a(m);case Hr:e:{for(C=y.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){n(m,x.sibling),x=i(x,y.children||[]),x.return=m,m=x;break e}else{n(m,x);break}else t(m,x);x=x.sibling}x=Yl(y,m.mode,j),x.return=m,m=x}return a(m);case Hn:return C=y._init,w(m,x,C(y._payload),j)}if(eo(y))return g(m,x,y,j);if($i(y))return v(m,x,y,j);js(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(n(m,x.sibling),x=i(x,y),x.return=m,m=x):(n(m,x),x=Gl(y,m.mode,j),x.return=m,m=x),a(m)):n(m,x)}return w}var xi=xx(!0),yx=xx(!1),va=hr(null),ba=null,ei=null,fd=null;function hd(){fd=ei=ba=null}function md(e){var t=va.current;De(va),e._currentValue=t}function Zc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function li(e,t){ba=e,fd=ei=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function en(e){var t=e._currentValue;if(fd!==e)if(e={context:e,memoizedValue:t,next:null},ei===null){if(ba===null)throw Error(ne(308));ei=e,ba.dependencies={lanes:0,firstContext:e}}else ei=ei.next=e;return t}var kr=null;function gd(e){kr===null?kr=[e]:kr.push(e)}function vx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dn(e,r)}function Dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qn=!1;function xd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function or(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ze&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dn(e,n)}return i=r.interleaved,i===null?(t.next=t,gd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dn(e,n)}function Ws(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nd(e,n)}}function Wf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wa(e,t,n,r){var i=e.updateQueue;qn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(f=t,h=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){p=g.call(h,p,f);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(h,p,f):g,f==null)break e;p=He({},p,f);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=p):d=d.next=h,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Mr|=a,e.lanes=a,e.memoizedState=p}}function Hf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ne(191,i));i.call(r)}}}var Xo={},wn=hr(Xo),Ao=hr(Xo),Po=hr(Xo);function _r(e){if(e===Xo)throw Error(ne(174));return e}function yd(e,t){switch(Ie(Po,t),Ie(Ao,e),Ie(wn,Xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Lc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Lc(t,e)}De(wn),Ie(wn,t)}function yi(){De(wn),De(Ao),De(Po)}function wx(e){_r(Po.current);var t=_r(wn.current),n=Lc(t,e.type);t!==n&&(Ie(Ao,e),Ie(wn,n))}function vd(e){Ao.current===e&&(De(wn),De(Ao))}var Ve=hr(0);function ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vl=[];function bd(){for(var e=0;e<Vl.length;e++)Vl[e]._workInProgressVersionPrimary=null;Vl.length=0}var Hs=Un.ReactCurrentDispatcher,Wl=Un.ReactCurrentBatchConfig,Lr=0,We=null,et=null,it=null,_a=!1,po=!1,Lo=0,Kb=0;function ut(){throw Error(ne(321))}function wd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dn(e[n],t[n]))return!1;return!0}function kd(e,t,n,r,i,s){if(Lr=s,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hs.current=e===null||e.memoizedState===null?Xb:Zb,e=n(r,i),po){s=0;do{if(po=!1,Lo=0,25<=s)throw Error(ne(301));s+=1,it=et=null,t.updateQueue=null,Hs.current=ew,e=n(r,i)}while(po)}if(Hs.current=ja,t=et!==null&&et.next!==null,Lr=0,it=et=We=null,_a=!1,t)throw Error(ne(300));return e}function _d(){var e=Lo!==0;return Lo=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?We.memoizedState=it=e:it=it.next=e,it}function tn(){if(et===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=it===null?We.memoizedState:it.next;if(t!==null)it=t,et=e;else{if(e===null)throw Error(ne(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},it===null?We.memoizedState=it=e:it=it.next=e}return it}function Mo(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=tn(),n=t.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=e;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Lr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,We.lanes|=d,Mr|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,dn(r,t.memoizedState)||(St=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,We.lanes|=s,Mr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=tn(),n=t.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);dn(s,t.memoizedState)||(St=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function kx(){}function _x(e,t){var n=We,r=tn(),i=t(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,jd(Cx.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Ro(9,Sx.bind(null,n,r,i,t),void 0,null),ot===null)throw Error(ne(349));Lr&30||jx(n,t,i)}return i}function jx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sx(e,t,n,r){t.value=n,t.getSnapshot=r,Nx(t)&&Ex(e)}function Cx(e,t,n){return n(function(){Nx(t)&&Ex(e)})}function Nx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dn(e,n)}catch{return!0}}function Ex(e){var t=Dn(e,1);t!==null&&cn(t,e,1,-1)}function qf(e){var t=mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:e},t.queue=e,e=e.dispatch=Qb.bind(null,We,e),[t.memoizedState,e]}function Ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zx(){return tn().memoizedState}function qs(e,t,n,r){var i=mn();We.flags|=e,i.memoizedState=Ro(1|t,n,void 0,r===void 0?null:r)}function el(e,t,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(et!==null){var a=et.memoizedState;if(s=a.destroy,r!==null&&wd(r,a.deps)){i.memoizedState=Ro(t,n,s,r);return}}We.flags|=e,i.memoizedState=Ro(1|t,n,s,r)}function Jf(e,t){return qs(8390656,8,e,t)}function jd(e,t){return el(2048,8,e,t)}function Tx(e,t){return el(4,2,e,t)}function Ax(e,t){return el(4,4,e,t)}function Px(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lx(e,t,n){return n=n!=null?n.concat([e]):null,el(4,4,Px.bind(null,t,e),n)}function Sd(){}function Mx(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rx(e,t){var n=tn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ix(e,t,n){return Lr&21?(dn(n,t)||(n=Bg(),We.lanes|=n,Mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=n)}function Gb(e,t){var n=Pe;Pe=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{Pe=n,Wl.transition=r}}function Ox(){return tn().memoizedState}function Yb(e,t,n){var r=ar(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$x(e))Dx(t,n);else if(n=vx(e,t,n,r),n!==null){var i=yt();cn(n,e,r,i),Fx(n,t,r)}}function Qb(e,t,n){var r=ar(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($x(e))Dx(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,dn(l,a)){var c=t.interleaved;c===null?(i.next=i,gd(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=vx(e,t,i,r),n!==null&&(i=yt(),cn(n,e,r,i),Fx(n,t,r))}}function $x(e){var t=e.alternate;return e===We||t!==null&&t===We}function Dx(e,t){po=_a=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nd(e,n)}}var ja={readContext:en,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},Xb={readContext:en,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:en,useEffect:Jf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,qs(4194308,4,Px.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qs(4194308,4,e,t)},useInsertionEffect:function(e,t){return qs(4,2,e,t)},useMemo:function(e,t){var n=mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yb.bind(null,We,e),[r.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:qf,useDebugValue:Sd,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=qf(!1),t=e[0];return e=Gb.bind(null,e[1]),mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=We,i=mn();if(Fe){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=t(),ot===null)throw Error(ne(349));Lr&30||jx(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Jf(Cx.bind(null,r,s,e),[e]),r.flags|=2048,Ro(9,Sx.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=mn(),t=ot.identifierPrefix;if(Fe){var n=Ln,r=Pn;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zb={readContext:en,useCallback:Mx,useContext:en,useEffect:jd,useImperativeHandle:Lx,useInsertionEffect:Tx,useLayoutEffect:Ax,useMemo:Rx,useReducer:Hl,useRef:zx,useState:function(){return Hl(Mo)},useDebugValue:Sd,useDeferredValue:function(e){var t=tn();return Ix(t,et.memoizedState,e)},useTransition:function(){var e=Hl(Mo)[0],t=tn().memoizedState;return[e,t]},useMutableSource:kx,useSyncExternalStore:_x,useId:Ox,unstable_isNewReconciler:!1},ew={readContext:en,useCallback:Mx,useContext:en,useEffect:jd,useImperativeHandle:Lx,useInsertionEffect:Tx,useLayoutEffect:Ax,useMemo:Rx,useReducer:ql,useRef:zx,useState:function(){return ql(Mo)},useDebugValue:Sd,useDeferredValue:function(e){var t=tn();return et===null?t.memoizedState=e:Ix(t,et.memoizedState,e)},useTransition:function(){var e=ql(Mo)[0],t=tn().memoizedState;return[e,t]},useMutableSource:kx,useSyncExternalStore:_x,useId:Ox,unstable_isNewReconciler:!1};function rn(e,t){if(e&&e.defaultProps){t=He({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function eu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:He({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var tl={isMounted:function(e){return(e=e._reactInternals)?Fr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=yt(),i=ar(e),s=Rn(r,i);s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(cn(t,e,i,r),Ws(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=yt(),i=ar(e),s=Rn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(cn(t,e,i,r),Ws(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=yt(),r=ar(e),i=Rn(n,r);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,r),t!==null&&(cn(t,e,r,n),Ws(t,e,r))}};function Kf(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!No(n,r)||!No(i,s):!0}function Bx(e,t,n){var r=!1,i=dr,s=t.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=Et(t)?Ar:ft.current,r=t.contextTypes,s=(r=r!=null)?mi(e,i):dr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Gf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&tl.enqueueReplaceState(t,t.state,null)}function tu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=Et(t)?Ar:ft.current,i.context=mi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(eu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&tl.enqueueReplaceState(i,i.state,null),wa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vi(e,t){try{var n="",r=t;do n+=E0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tw=typeof WeakMap=="function"?WeakMap:Map;function Ux(e,t,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ca||(Ca=!0,pu=r),nu(e,t)},n}function Vx(e,t,n){n=Rn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){nu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nu(e,t),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Yf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=mw.bind(null,e,t,n),t.then(e,e))}function Qf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rn(-1,1),t.tag=2,or(n,t,1))),n.lanes|=1),e)}var nw=Un.ReactCurrentOwner,St=!1;function gt(e,t,n,r){t.child=e===null?yx(t,null,n,r):xi(t,e.child,n,r)}function Zf(e,t,n,r,i){n=n.render;var s=t.ref;return li(t,i),r=kd(e,t,n,r,s,i),n=_d(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Fe&&n&&ud(t),t.flags|=1,gt(e,t,r,i),t.child)}function eh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Ld(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Wx(e,t,s,r,i)):(e=Ys(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(a,r)&&e.ref===t.ref)return Fn(e,t,i)}return t.flags|=1,e=lr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Wx(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(No(s,r)&&e.ref===t.ref)if(St=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,Fn(e,t,i)}return ru(e,t,n,r,i)}function Hx(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(ni,Mt),Mt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(ni,Mt),Mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(ni,Mt),Mt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ie(ni,Mt),Mt|=r;return gt(e,t,i,n),t.child}function qx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ru(e,t,n,r,i){var s=Et(n)?Ar:ft.current;return s=mi(t,s),li(t,i),n=kd(e,t,n,r,s,i),r=_d(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Fn(e,t,i)):(Fe&&r&&ud(t),t.flags|=1,gt(e,t,n,i),t.child)}function th(e,t,n,r,i){if(Et(n)){var s=!0;ga(t)}else s=!1;if(li(t,i),t.stateNode===null)Js(e,t),Bx(t,n,r),tu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=en(u):(u=Et(n)?Ar:ft.current,u=mi(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Gf(t,a,r,u),qn=!1;var f=t.memoizedState;a.state=f,wa(t,r,a,i),c=t.memoizedState,l!==r||f!==c||Nt.current||qn?(typeof d=="function"&&(eu(t,n,d,r),c=t.memoizedState),(l=qn||Kf(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:rn(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=en(c):(c=Et(n)?Ar:ft.current,c=mi(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Gf(t,a,r,c),qn=!1,f=t.memoizedState,a.state=f,wa(t,r,a,i);var g=t.memoizedState;l!==p||f!==g||Nt.current||qn?(typeof h=="function"&&(eu(t,n,h,r),g=t.memoizedState),(u=qn||Kf(t,n,u,r,f,g,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return iu(e,t,n,r,s,i)}function iu(e,t,n,r,i,s){qx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ff(t,n,!1),Fn(e,t,s);r=t.stateNode,nw.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=xi(t,e.child,null,s),t.child=xi(t,null,l,s)):gt(e,t,l,s),t.memoizedState=r.state,i&&Ff(t,n,!0),t.child}function Jx(e){var t=e.stateNode;t.pendingContext?Df(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Df(e,t.context,!1),yd(e,t.containerInfo)}function nh(e,t,n,r,i){return gi(),pd(i),t.flags|=256,gt(e,t,n,r),t.child}var ou={dehydrated:null,treeContext:null,retryLane:0};function su(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kx(e,t,n){var r=t.pendingProps,i=Ve.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ie(Ve,i&1),e===null)return Xc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=il(a,r,0,null),e=Cr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=su(n),t.memoizedState=ou,e):Cd(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rw(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=lr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=lr(l,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?su(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=ou,r}return s=e.child,e=s.sibling,r=lr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cd(e,t){return t=il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ss(e,t,n,r){return r!==null&&pd(r),xi(t,e.child,null,n),e=Cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rw(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(ne(422))),Ss(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=il({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&xi(t,e.child,null,a),t.child.memoizedState=su(a),t.memoizedState=ou,s);if(!(t.mode&1))return Ss(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(ne(419)),r=Jl(s,r,void 0),Ss(e,t,a,r)}if(l=(a&e.childLanes)!==0,St||l){if(r=ot,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Dn(e,i),cn(r,e,i,-1))}return Pd(),r=Jl(Error(ne(421))),Ss(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=gw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ot=ir(i.nextSibling),Ft=t,Fe=!0,sn=null,e!==null&&(qt[Jt++]=Pn,qt[Jt++]=Ln,qt[Jt++]=Pr,Pn=e.id,Ln=e.overflow,Pr=t),t=Cd(t,r.children),t.flags|=4096,t)}function rh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Zc(e.return,t,n)}function Kl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gx(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(gt(e,t,r.children,n),r=Ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rh(e,n,t);else if(e.tag===19)rh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ie(Ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ka(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Kl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ka(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Kl(t,!0,n,null,s);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Js(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ne(153));if(t.child!==null){for(e=t.child,n=lr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=lr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function iw(e,t,n){switch(t.tag){case 3:Jx(t),gi();break;case 5:wx(t);break;case 1:Et(t.type)&&ga(t);break;case 4:yd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ie(va,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Ve,Ve.current&1),t.flags|=128,null):n&t.child.childLanes?Kx(e,t,n):(Ie(Ve,Ve.current&1),e=Fn(e,t,n),e!==null?e.sibling:null);Ie(Ve,Ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Ve,Ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Hx(e,t,n)}return Fn(e,t,n)}var Yx,au,Qx,Xx;Yx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};au=function(){};Qx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_r(wn.current);var s=null;switch(n){case"input":i=zc(e,i),r=zc(e,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=Pc(e,i),r=Pc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ha)}Mc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&$e("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Xx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wi(e,t){if(!Fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ow(e,t,n){var r=t.pendingProps;switch(dd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return Et(t.type)&&ma(),dt(t),null;case 3:return r=t.stateNode,yi(),De(Nt),De(ft),bd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_s(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,sn!==null&&(mu(sn),sn=null))),au(e,t),dt(t),null;case 5:vd(t);var i=_r(Po.current);if(n=t.type,e!==null&&t.stateNode!=null)Qx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ne(166));return dt(t),null}if(e=_r(wn.current),_s(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[xn]=t,r[To]=s,e=(t.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(i=0;i<no.length;i++)$e(no[i],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":pf(r,s),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},$e("invalid",r);break;case"textarea":hf(r,s),$e("invalid",r)}Mc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ks(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ks(r.textContent,l,e),i=["children",""+l]):bo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&$e("scroll",r)}switch(n){case"input":hs(r),ff(r,s,!0);break;case"textarea":hs(r),mf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ha)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[xn]=t,e[To]=r,Yx(e,t,!1,!1),t.stateNode=e;e:{switch(a=Rc(n,r),n){case"dialog":$e("cancel",e),$e("close",e),i=r;break;case"iframe":case"object":case"embed":$e("load",e),i=r;break;case"video":case"audio":for(i=0;i<no.length;i++)$e(no[i],e);i=r;break;case"source":$e("error",e),i=r;break;case"img":case"image":case"link":$e("error",e),$e("load",e),i=r;break;case"details":$e("toggle",e),i=r;break;case"input":pf(e,r),i=zc(e,r),$e("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),$e("invalid",e);break;case"textarea":hf(e,r),i=Pc(e,r),$e("invalid",e);break;default:i=r}Mc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?zg(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Ng(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&wo(e,c):typeof c=="number"&&wo(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&$e("scroll",e):c!=null&&Yu(e,s,c,a))}switch(n){case"input":hs(e),ff(e,r,!1);break;case"textarea":hs(e),mf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ur(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ii(e,!!r.multiple,s,!1):r.defaultValue!=null&&ii(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ha)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)Xx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ne(166));if(n=_r(Po.current),_r(wn.current),_s(t)){if(r=t.stateNode,n=t.memoizedProps,r[xn]=t,(s=r.nodeValue!==n)&&(e=Ft,e!==null))switch(e.tag){case 3:ks(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ks(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=t,t.stateNode=r}return dt(t),null;case 13:if(De(Ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Fe&&Ot!==null&&t.mode&1&&!(t.flags&128))gx(),gi(),t.flags|=98560,s=!1;else if(s=_s(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(ne(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[xn]=t}else gi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),s=!1}else sn!==null&&(mu(sn),sn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ve.current&1?tt===0&&(tt=3):Pd())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return yi(),au(e,t),e===null&&Eo(t.stateNode.containerInfo),dt(t),null;case 10:return md(t.type._context),dt(t),null;case 17:return Et(t.type)&&ma(),dt(t),null;case 19:if(De(Ve),s=t.memoizedState,s===null)return dt(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Wi(s,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ka(e),a!==null){for(t.flags|=128,Wi(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ie(Ve,Ve.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ke()>bi&&(t.flags|=128,r=!0,Wi(s,!1),t.lanes=4194304)}else{if(!r)if(e=ka(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Fe)return dt(t),null}else 2*Ke()-s.renderingStartTime>bi&&n!==1073741824&&(t.flags|=128,r=!0,Wi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ke(),t.sibling=null,n=Ve.current,Ie(Ve,r?n&1|2:n&1),t):(dt(t),null);case 22:case 23:return Ad(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Mt&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(ne(156,t.tag))}function sw(e,t){switch(dd(t),t.tag){case 1:return Et(t.type)&&ma(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yi(),De(Nt),De(ft),bd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vd(t),null;case 13:if(De(Ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ne(340));gi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(Ve),null;case 4:return yi(),null;case 10:return md(t.type._context),null;case 22:case 23:return Ad(),null;case 24:return null;default:return null}}var Cs=!1,pt=!1,aw=typeof WeakSet=="function"?WeakSet:Set,he=null;function ti(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Je(e,t,r)}else n.current=null}function lu(e,t,n){try{n()}catch(r){Je(e,t,r)}}var ih=!1;function lw(e,t){if(Hc=da,e=rx(),cd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(qc={focusedElem:e,selectionRange:n},da=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,m=t.stateNode,x=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:rn(t.type,v),w);m.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(j){Je(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return g=ih,ih=!1,g}function fo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&lu(t,n,s)}i=i.next}while(i!==r)}}function nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function cu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zx(e){var t=e.alternate;t!==null&&(e.alternate=null,Zx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xn],delete t[To],delete t[Gc],delete t[Wb],delete t[Hb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ey(e){return e.tag===5||e.tag===3||e.tag===4}function oh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ey(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ha));else if(r!==4&&(e=e.child,e!==null))for(uu(e,t,n),e=e.sibling;e!==null;)uu(e,t,n),e=e.sibling}function du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(du(e,t,n),e=e.sibling;e!==null;)du(e,t,n),e=e.sibling}var st=null,on=!1;function Vn(e,t,n){for(n=n.child;n!==null;)ty(e,t,n),n=n.sibling}function ty(e,t,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Ka,n)}catch{}switch(n.tag){case 5:pt||ti(n,t);case 6:var r=st,i=on;st=null,Vn(e,t,n),st=r,on=i,st!==null&&(on?(e=st,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(on?(e=st,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),So(e)):Bl(st,n.stateNode));break;case 4:r=st,i=on,st=n.stateNode.containerInfo,on=!0,Vn(e,t,n),st=r,on=i;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&lu(n,t,a),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!pt&&(ti(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Je(n,t,l)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,Vn(e,t,n),pt=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function sh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new aw),t.forEach(function(r){var i=xw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function nn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:st=l.stateNode,on=!1;break e;case 3:st=l.stateNode.containerInfo,on=!0;break e;case 4:st=l.stateNode.containerInfo,on=!0;break e}l=l.return}if(st===null)throw Error(ne(160));ty(s,a,i),st=null,on=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Je(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ny(t,e),t=t.sibling}function ny(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(t,e),hn(e),r&4){try{fo(3,e,e.return),nl(3,e)}catch(v){Je(e,e.return,v)}try{fo(5,e,e.return)}catch(v){Je(e,e.return,v)}}break;case 1:nn(t,e),hn(e),r&512&&n!==null&&ti(n,n.return);break;case 5:if(nn(t,e),hn(e),r&512&&n!==null&&ti(n,n.return),e.flags&32){var i=e.stateNode;try{wo(i,"")}catch(v){Je(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&jg(i,s),Rc(l,a);var u=Rc(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?zg(i,p):d==="dangerouslySetInnerHTML"?Ng(i,p):d==="children"?wo(i,p):Yu(i,d,p,u)}switch(l){case"input":Tc(i,s);break;case"textarea":Sg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?ii(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?ii(i,!!s.multiple,s.defaultValue,!0):ii(i,!!s.multiple,s.multiple?[]:"",!1))}i[To]=s}catch(v){Je(e,e.return,v)}}break;case 6:if(nn(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(ne(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Je(e,e.return,v)}}break;case 3:if(nn(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(t.containerInfo)}catch(v){Je(e,e.return,v)}break;case 4:nn(t,e),hn(e);break;case 13:nn(t,e),hn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zd=Ke())),r&4&&sh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(pt=(u=pt)||d,nn(t,e),pt=u):nn(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(he=e,d=e.child;d!==null;){for(p=he=d;he!==null;){switch(f=he,h=f.child,f.tag){case 0:case 11:case 14:case 15:fo(4,f,f.return);break;case 1:ti(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){Je(r,n,v)}}break;case 5:ti(f,f.return);break;case 22:if(f.memoizedState!==null){lh(p);continue}}h!==null?(h.return=f,he=h):lh(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Eg("display",a))}catch(v){Je(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){Je(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(t,e),hn(e),r&4&&sh(e);break;case 21:break;default:nn(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ey(n)){var r=n;break e}n=n.return}throw Error(ne(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wo(i,""),r.flags&=-33);var s=oh(e);du(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=oh(e);uu(e,l,a);break;default:throw Error(ne(161))}}catch(c){Je(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cw(e,t,n){he=e,ry(e)}function ry(e,t,n){for(var r=(e.mode&1)!==0;he!==null;){var i=he,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Cs;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||pt;l=Cs;var u=pt;if(Cs=a,(pt=c)&&!u)for(he=i;he!==null;)a=he,c=a.child,a.tag===22&&a.memoizedState!==null?ch(i):c!==null?(c.return=a,he=c):ch(i);for(;s!==null;)he=s,ry(s),s=s.sibling;he=i,Cs=l,pt=u}ah(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,he=s):ah(e)}}function ah(e){for(;he!==null;){var t=he;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pt||nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:rn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Hf(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&So(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}pt||t.flags&512&&cu(t)}catch(f){Je(t,t.return,f)}}if(t===e){he=null;break}if(n=t.sibling,n!==null){n.return=t.return,he=n;break}he=t.return}}function lh(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var n=t.sibling;if(n!==null){n.return=t.return,he=n;break}he=t.return}}function ch(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{nl(4,t)}catch(c){Je(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Je(t,i,c)}}var s=t.return;try{cu(t)}catch(c){Je(t,s,c)}break;case 5:var a=t.return;try{cu(t)}catch(c){Je(t,a,c)}}}catch(c){Je(t,t.return,c)}if(t===e){he=null;break}var l=t.sibling;if(l!==null){l.return=t.return,he=l;break}he=t.return}}var uw=Math.ceil,Sa=Un.ReactCurrentDispatcher,Nd=Un.ReactCurrentOwner,Zt=Un.ReactCurrentBatchConfig,ze=0,ot=null,Xe=null,at=0,Mt=0,ni=hr(0),tt=0,Io=null,Mr=0,rl=0,Ed=0,ho=null,jt=null,zd=0,bi=1/0,zn=null,Ca=!1,pu=null,sr=null,Ns=!1,Qn=null,Na=0,mo=0,fu=null,Ks=-1,Gs=0;function yt(){return ze&6?Ke():Ks!==-1?Ks:Ks=Ke()}function ar(e){return e.mode&1?ze&2&&at!==0?at&-at:Jb.transition!==null?(Gs===0&&(Gs=Bg()),Gs):(e=Pe,e!==0||(e=window.event,e=e===void 0?16:Kg(e.type)),e):1}function cn(e,t,n,r){if(50<mo)throw mo=0,fu=null,Error(ne(185));Go(e,n,r),(!(ze&2)||e!==ot)&&(e===ot&&(!(ze&2)&&(rl|=n),tt===4&&Gn(e,at)),zt(e,r),n===1&&ze===0&&!(t.mode&1)&&(bi=Ke()+500,Za&&mr()))}function zt(e,t){var n=e.callbackNode;J0(e,t);var r=ua(e,e===ot?at:0);if(r===0)n!==null&&yf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&yf(n),t===1)e.tag===0?qb(uh.bind(null,e)):fx(uh.bind(null,e)),Ub(function(){!(ze&6)&&mr()}),n=null;else{switch(Ug(r)){case 1:n=td;break;case 4:n=Dg;break;case 16:n=ca;break;case 536870912:n=Fg;break;default:n=ca}n=dy(n,iy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iy(e,t){if(Ks=-1,Gs=0,ze&6)throw Error(ne(327));var n=e.callbackNode;if(ci()&&e.callbackNode!==n)return null;var r=ua(e,e===ot?at:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ea(e,r);else{t=r;var i=ze;ze|=2;var s=sy();(ot!==e||at!==t)&&(zn=null,bi=Ke()+500,Sr(e,t));do try{fw();break}catch(l){oy(e,l)}while(!0);hd(),Sa.current=s,ze=i,Xe!==null?t=0:(ot=null,at=0,t=tt)}if(t!==0){if(t===2&&(i=Fc(e),i!==0&&(r=i,t=hu(e,i))),t===1)throw n=Io,Sr(e,0),Gn(e,r),zt(e,Ke()),n;if(t===6)Gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!dw(i)&&(t=Ea(e,r),t===2&&(s=Fc(e),s!==0&&(r=s,t=hu(e,s))),t===1))throw n=Io,Sr(e,0),Gn(e,r),zt(e,Ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ne(345));case 2:vr(e,jt,zn);break;case 3:if(Gn(e,r),(r&130023424)===r&&(t=zd+500-Ke(),10<t)){if(ua(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){yt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kc(vr.bind(null,e,jt,zn),t);break}vr(e,jt,zn);break;case 4:if(Gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ln(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uw(r/1960))-r,10<r){e.timeoutHandle=Kc(vr.bind(null,e,jt,zn),r);break}vr(e,jt,zn);break;case 5:vr(e,jt,zn);break;default:throw Error(ne(329))}}}return zt(e,Ke()),e.callbackNode===n?iy.bind(null,e):null}function hu(e,t){var n=ho;return e.current.memoizedState.isDehydrated&&(Sr(e,t).flags|=256),e=Ea(e,t),e!==2&&(t=jt,jt=n,t!==null&&mu(t)),e}function mu(e){jt===null?jt=e:jt.push.apply(jt,e)}function dw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gn(e,t){for(t&=~Ed,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ln(t),r=1<<n;e[n]=-1,t&=~r}}function uh(e){if(ze&6)throw Error(ne(327));ci();var t=ua(e,0);if(!(t&1))return zt(e,Ke()),null;var n=Ea(e,t);if(e.tag!==0&&n===2){var r=Fc(e);r!==0&&(t=r,n=hu(e,r))}if(n===1)throw n=Io,Sr(e,0),Gn(e,t),zt(e,Ke()),n;if(n===6)throw Error(ne(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vr(e,jt,zn),zt(e,Ke()),null}function Td(e,t){var n=ze;ze|=1;try{return e(t)}finally{ze=n,ze===0&&(bi=Ke()+500,Za&&mr())}}function Rr(e){Qn!==null&&Qn.tag===0&&!(ze&6)&&ci();var t=ze;ze|=1;var n=Zt.transition,r=Pe;try{if(Zt.transition=null,Pe=1,e)return e()}finally{Pe=r,Zt.transition=n,ze=t,!(ze&6)&&mr()}}function Ad(){Mt=ni.current,De(ni)}function Sr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bb(n)),Xe!==null)for(n=Xe.return;n!==null;){var r=n;switch(dd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ma();break;case 3:yi(),De(Nt),De(ft),bd();break;case 5:vd(r);break;case 4:yi();break;case 13:De(Ve);break;case 19:De(Ve);break;case 10:md(r.type._context);break;case 22:case 23:Ad()}n=n.return}if(ot=e,Xe=e=lr(e.current,null),at=Mt=t,tt=0,Io=null,Ed=rl=Mr=0,jt=ho=null,kr!==null){for(t=0;t<kr.length;t++)if(n=kr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}kr=null}return e}function oy(e,t){do{var n=Xe;try{if(hd(),Hs.current=ja,_a){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_a=!1}if(Lr=0,it=et=We=null,po=!1,Lo=0,Nd.current=null,n===null||n.return===null){tt=1,Io=t,Xe=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=at,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Qf(a);if(h!==null){h.flags&=-257,Xf(h,a,l,s,t),h.mode&1&&Yf(s,u,t),t=h,c=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(c),t.updateQueue=v}else g.add(c);break e}else{if(!(t&1)){Yf(s,u,t),Pd();break e}c=Error(ne(426))}}else if(Fe&&l.mode&1){var w=Qf(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Xf(w,a,l,s,t),pd(vi(c,l));break e}}s=c=vi(c,l),tt!==4&&(tt=2),ho===null?ho=[s]:ho.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Ux(s,c,t);Wf(s,m);break e;case 1:l=c;var x=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(sr===null||!sr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=Vx(s,l,t);Wf(s,j);break e}}s=s.return}while(s!==null)}ly(n)}catch(A){t=A,Xe===n&&n!==null&&(Xe=n=n.return);continue}break}while(!0)}function sy(){var e=Sa.current;return Sa.current=ja,e===null?ja:e}function Pd(){(tt===0||tt===3||tt===2)&&(tt=4),ot===null||!(Mr&268435455)&&!(rl&268435455)||Gn(ot,at)}function Ea(e,t){var n=ze;ze|=2;var r=sy();(ot!==e||at!==t)&&(zn=null,Sr(e,t));do try{pw();break}catch(i){oy(e,i)}while(!0);if(hd(),ze=n,Sa.current=r,Xe!==null)throw Error(ne(261));return ot=null,at=0,tt}function pw(){for(;Xe!==null;)ay(Xe)}function fw(){for(;Xe!==null&&!$0();)ay(Xe)}function ay(e){var t=uy(e.alternate,e,Mt);e.memoizedProps=e.pendingProps,t===null?ly(e):Xe=t,Nd.current=null}function ly(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=sw(n,t),n!==null){n.flags&=32767,Xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Xe=null;return}}else if(n=ow(n,t,Mt),n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);tt===0&&(tt=5)}function vr(e,t,n){var r=Pe,i=Zt.transition;try{Zt.transition=null,Pe=1,hw(e,t,n,r)}finally{Zt.transition=i,Pe=r}return null}function hw(e,t,n,r){do ci();while(Qn!==null);if(ze&6)throw Error(ne(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ne(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(K0(e,s),e===ot&&(Xe=ot=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ns||(Ns=!0,dy(ca,function(){return ci(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var a=Pe;Pe=1;var l=ze;ze|=4,Nd.current=null,lw(e,n),ny(n,e),Mb(qc),da=!!Hc,qc=Hc=null,e.current=n,cw(n),D0(),ze=l,Pe=a,Zt.transition=s}else e.current=n;if(Ns&&(Ns=!1,Qn=e,Na=i),s=e.pendingLanes,s===0&&(sr=null),U0(n.stateNode),zt(e,Ke()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ca)throw Ca=!1,e=pu,pu=null,e;return Na&1&&e.tag!==0&&ci(),s=e.pendingLanes,s&1?e===fu?mo++:(mo=0,fu=e):mo=0,mr(),null}function ci(){if(Qn!==null){var e=Ug(Na),t=Zt.transition,n=Pe;try{if(Zt.transition=null,Pe=16>e?16:e,Qn===null)var r=!1;else{if(e=Qn,Qn=null,Na=0,ze&6)throw Error(ne(331));var i=ze;for(ze|=4,he=e.current;he!==null;){var s=he,a=s.child;if(he.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(he=u;he!==null;){var d=he;switch(d.tag){case 0:case 11:case 15:fo(8,d,s)}var p=d.child;if(p!==null)p.return=d,he=p;else for(;he!==null;){d=he;var f=d.sibling,h=d.return;if(Zx(d),d===u){he=null;break}if(f!==null){f.return=h,he=f;break}he=h}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}he=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,he=a;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,he=m;break e}he=s.return}}var x=e.current;for(he=x;he!==null;){a=he;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,he=y;else e:for(a=x;he!==null;){if(l=he,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nl(9,l)}}catch(A){Je(l,l.return,A)}if(l===a){he=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,he=j;break e}he=l.return}}if(ze=i,mr(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Ka,e)}catch{}r=!0}return r}finally{Pe=n,Zt.transition=t}}return!1}function dh(e,t,n){t=vi(n,t),t=Ux(e,t,1),e=or(e,t,1),t=yt(),e!==null&&(Go(e,1,t),zt(e,t))}function Je(e,t,n){if(e.tag===3)dh(e,e,n);else for(;t!==null;){if(t.tag===3){dh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){e=vi(n,e),e=Vx(t,e,1),t=or(t,e,1),e=yt(),t!==null&&(Go(t,1,e),zt(t,e));break}}t=t.return}}function mw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&n,ot===e&&(at&n)===n&&(tt===4||tt===3&&(at&130023424)===at&&500>Ke()-zd?Sr(e,0):Ed|=n),zt(e,t)}function cy(e,t){t===0&&(e.mode&1?(t=xs,xs<<=1,!(xs&130023424)&&(xs=4194304)):t=1);var n=yt();e=Dn(e,t),e!==null&&(Go(e,t,n),zt(e,n))}function gw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cy(e,n)}function xw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ne(314))}r!==null&&r.delete(t),cy(e,n)}var uy;uy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Nt.current)St=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return St=!1,iw(e,t,n);St=!!(e.flags&131072)}else St=!1,Fe&&t.flags&1048576&&hx(t,ya,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Js(e,t),e=t.pendingProps;var i=mi(t,ft.current);li(t,n),i=kd(null,t,r,e,i,n);var s=_d();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(r)?(s=!0,ga(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xd(t),i.updater=tl,t.stateNode=i,i._reactInternals=t,tu(t,r,e,n),t=iu(null,t,r,!0,s,n)):(t.tag=0,Fe&&s&&ud(t),gt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Js(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=vw(r),e=rn(r,e),i){case 0:t=ru(null,t,r,e,n);break e;case 1:t=th(null,t,r,e,n);break e;case 11:t=Zf(null,t,r,e,n);break e;case 14:t=eh(null,t,r,rn(r.type,e),n);break e}throw Error(ne(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rn(r,i),ru(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rn(r,i),th(e,t,r,i,n);case 3:e:{if(Jx(t),e===null)throw Error(ne(387));r=t.pendingProps,s=t.memoizedState,i=s.element,bx(e,t),wa(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=vi(Error(ne(423)),t),t=nh(e,t,r,n,i);break e}else if(r!==i){i=vi(Error(ne(424)),t),t=nh(e,t,r,n,i);break e}else for(Ot=ir(t.stateNode.containerInfo.firstChild),Ft=t,Fe=!0,sn=null,n=yx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gi(),r===i){t=Fn(e,t,n);break e}gt(e,t,r,n)}t=t.child}return t;case 5:return wx(t),e===null&&Xc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Jc(r,i)?a=null:s!==null&&Jc(r,s)&&(t.flags|=32),qx(e,t),gt(e,t,a,n),t.child;case 6:return e===null&&Xc(t),null;case 13:return Kx(e,t,n);case 4:return yd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xi(t,null,r,n):gt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rn(r,i),Zf(e,t,r,i,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Ie(va,r._currentValue),r._currentValue=a,s!==null)if(dn(s.value,a)){if(s.children===i.children&&!Nt.current){t=Fn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Rn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Zc(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Zc(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}gt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,li(t,n),i=en(i),r=r(i),t.flags|=1,gt(e,t,r,n),t.child;case 14:return r=t.type,i=rn(r,t.pendingProps),i=rn(r.type,i),eh(e,t,r,i,n);case 15:return Wx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:rn(r,i),Js(e,t),t.tag=1,Et(r)?(e=!0,ga(t)):e=!1,li(t,n),Bx(t,r,i),tu(t,r,i,n),iu(null,t,r,!0,e,n);case 19:return Gx(e,t,n);case 22:return Hx(e,t,n)}throw Error(ne(156,t.tag))};function dy(e,t){return $g(e,t)}function yw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(e,t,n,r){return new yw(e,t,n,r)}function Ld(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vw(e){if(typeof e=="function")return Ld(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xu)return 11;if(e===Zu)return 14}return 2}function lr(e,t){var n=e.alternate;return n===null?(n=Yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ys(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Ld(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case qr:return Cr(n.children,i,s,t);case Qu:a=8,i|=8;break;case Sc:return e=Yt(12,n,t,i|2),e.elementType=Sc,e.lanes=s,e;case Cc:return e=Yt(13,n,t,i),e.elementType=Cc,e.lanes=s,e;case Nc:return e=Yt(19,n,t,i),e.elementType=Nc,e.lanes=s,e;case wg:return il(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vg:a=10;break e;case bg:a=9;break e;case Xu:a=11;break e;case Zu:a=14;break e;case Hn:a=16,r=null;break e}throw Error(ne(130,e==null?e:typeof e,""))}return t=Yt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Cr(e,t,n,r){return e=Yt(7,e,r,t),e.lanes=n,e}function il(e,t,n,r){return e=Yt(22,e,r,t),e.elementType=wg,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=Yt(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=Yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Md(e,t,n,r,i,s,a,l,c){return e=new bw(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Yt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xd(s),e}function ww(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function py(e){if(!e)return dr;e=e._reactInternals;e:{if(Fr(e)!==e||e.tag!==1)throw Error(ne(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ne(171))}if(e.tag===1){var n=e.type;if(Et(n))return px(e,n,t)}return t}function fy(e,t,n,r,i,s,a,l,c){return e=Md(n,r,!0,e,i,s,a,l,c),e.context=py(null),n=e.current,r=yt(),i=ar(n),s=Rn(r,i),s.callback=t??null,or(n,s,i),e.current.lanes=i,Go(e,i,r),zt(e,r),e}function ol(e,t,n,r){var i=t.current,s=yt(),a=ar(i);return n=py(n),t.context===null?t.context=n:t.pendingContext=n,t=Rn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=or(i,t,a),e!==null&&(cn(e,i,a,s),Ws(e,i,a)),a}function za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ph(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rd(e,t){ph(e,t),(e=e.alternate)&&ph(e,t)}function kw(){return null}var hy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Id(e){this._internalRoot=e}sl.prototype.render=Id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ne(409));ol(e,t,null,null)};sl.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rr(function(){ol(null,e,null,null)}),t[$n]=null}};function sl(e){this._internalRoot=e}sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kn.length&&t!==0&&t<Kn[n].priority;n++);Kn.splice(n,0,e),n===0&&Jg(e)}};function Od(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fh(){}function _w(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=za(a);s.call(u)}}var a=fy(t,r,e,0,null,!1,!1,"",fh);return e._reactRootContainer=a,e[$n]=a.current,Eo(e.nodeType===8?e.parentNode:e),Rr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=za(c);l.call(u)}}var c=Md(e,0,!1,null,null,!1,!1,"",fh);return e._reactRootContainer=c,e[$n]=c.current,Eo(e.nodeType===8?e.parentNode:e),Rr(function(){ol(t,c,n,r)}),c}function ll(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=za(a);l.call(c)}}ol(t,a,e,i)}else a=_w(n,t,e,i,r);return za(a)}Vg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=to(t.pendingLanes);n!==0&&(nd(t,n|1),zt(t,Ke()),!(ze&6)&&(bi=Ke()+500,mr()))}break;case 13:Rr(function(){var r=Dn(e,1);if(r!==null){var i=yt();cn(r,e,1,i)}}),Rd(e,1)}};rd=function(e){if(e.tag===13){var t=Dn(e,134217728);if(t!==null){var n=yt();cn(t,e,134217728,n)}Rd(e,134217728)}};Wg=function(e){if(e.tag===13){var t=ar(e),n=Dn(e,t);if(n!==null){var r=yt();cn(n,e,t,r)}Rd(e,t)}};Hg=function(){return Pe};qg=function(e,t){var n=Pe;try{return Pe=e,t()}finally{Pe=n}};Oc=function(e,t,n){switch(t){case"input":if(Tc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Xa(r);if(!i)throw Error(ne(90));_g(r),Tc(r,i)}}}break;case"textarea":Sg(e,n);break;case"select":t=n.value,t!=null&&ii(e,!!n.multiple,t,!1)}};Pg=Td;Lg=Rr;var jw={usingClientEntryPoint:!1,Events:[Qo,Yr,Xa,Tg,Ag,Td]},Hi={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sw={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ig(e),e===null?null:e.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||kw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{Ka=Es.inject(Sw),bn=Es}catch{}}Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jw;Vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Od(t))throw Error(ne(200));return ww(e,t,null,n)};Vt.createRoot=function(e,t){if(!Od(e))throw Error(ne(299));var n=!1,r="",i=hy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Md(e,1,!1,null,null,n,!1,r,i),e[$n]=t.current,Eo(e.nodeType===8?e.parentNode:e),new Id(t)};Vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ne(188)):(e=Object.keys(e).join(","),Error(ne(268,e)));return e=Ig(t),e=e===null?null:e.stateNode,e};Vt.flushSync=function(e){return Rr(e)};Vt.hydrate=function(e,t,n){if(!al(t))throw Error(ne(200));return ll(null,e,t,!0,n)};Vt.hydrateRoot=function(e,t,n){if(!Od(e))throw Error(ne(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=hy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=fy(t,null,e,1,n??null,i,!1,s,a),e[$n]=t.current,Eo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new sl(t)};Vt.render=function(e,t,n){if(!al(t))throw Error(ne(200));return ll(null,e,t,!1,n)};Vt.unmountComponentAtNode=function(e){if(!al(e))throw Error(ne(40));return e._reactRootContainer?(Rr(function(){ll(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1};Vt.unstable_batchedUpdates=Td;Vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!al(n))throw Error(ne(200));if(e==null||e._reactInternals===void 0)throw Error(ne(38));return ll(e,t,n,!1,r)};Vt.version="18.3.1-next-f1338f8080-20240426";function my(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(my)}catch(e){console.error(e)}}my(),mg.exports=Vt;var gy=mg.exports,hh=gy;_c.createRoot=hh.createRoot,_c.hydrateRoot=hh.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oo.apply(this,arguments)}var Xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xn||(Xn={}));const mh="popstate";function Cw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return gu("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xy(i)}return Ew(t,n,null,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $d(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Nw(){return Math.random().toString(36).substr(2,8)}function gh(e,t){return{usr:e.state,key:e.key,idx:t}}function gu(e,t,n,r){return n===void 0&&(n=null),Oo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zi(t):t,{state:n,key:t&&t.key||r||Nw()})}function xy(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ew(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Xn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Oo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=Xn.Pop;let w=d(),m=w==null?null:w-u;u=w,c&&c({action:l,location:v.location,delta:m})}function f(w,m){l=Xn.Push;let x=gu(v.location,w,m);u=d()+1;let y=gh(x,u),j=v.createHref(x);try{a.pushState(y,"",j)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(j)}s&&c&&c({action:l,location:v.location,delta:1})}function h(w,m){l=Xn.Replace;let x=gu(v.location,w,m);u=d();let y=gh(x,u),j=v.createHref(x);a.replaceState(y,"",j),s&&c&&c({action:l,location:v.location,delta:0})}function g(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof w=="string"?w:xy(w);return x=x.replace(/ $/,"%20"),Ze(m,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,m)}let v={get action(){return l},get location(){return e(i,a)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(mh,p),c=w,()=>{i.removeEventListener(mh,p),c=null}},createHref(w){return t(i,w)},createURL:g,encodeLocation(w){let m=g(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:h,go(w){return a.go(w)}};return v}var xh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xh||(xh={}));function zw(e,t,n){return n===void 0&&(n="/"),Tw(e,t,n)}function Tw(e,t,n,r){let i=typeof t=="string"?zi(t):t,s=by(i.pathname||"/",n);if(s==null)return null;let a=yy(e);Aw(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Vw(s);l=Fw(a[c],u)}return l}function yy(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(Ze(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Nr([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Ze(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),yy(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:$w(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of vy(s.path))i(s,a,c)}),t}function vy(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=vy(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Aw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Pw=/^:[\w-]+$/,Lw=3,Mw=2,Rw=1,Iw=10,Ow=-2,yh=e=>e==="*";function $w(e,t){let n=e.split("/"),r=n.length;return n.some(yh)&&(r+=Ow),t&&(r+=Mw),n.filter(i=>!yh(i)).reduce((i,s)=>i+(Pw.test(s)?Lw:s===""?Rw:Iw),r)}function Dw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Fw(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=Bw({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Nr([s,p.pathname]),pathnameBase:Kw(Nr([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=Nr([s,p.pathnameBase]))}return a}function Bw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Uw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let v=l[p]||"";a=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const g=l[p];return h&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Uw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$d(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Vw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function by(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Ww=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hw=e=>Ww.test(e);function qw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zi(e):e,s;if(n)if(Hw(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),$d(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=vh(n.substring(1),"/"):s=vh(n,t)}else s=t;return{pathname:s,search:Gw(r),hash:Yw(i)}}function vh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ql(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wy(e,t){let n=Jw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ky(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zi(e):(i=Oo({},e),Ze(!i.pathname||!i.pathname.includes("?"),Ql("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),Ql("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),Ql("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=qw(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Nr=e=>e.join("/").replace(/\/\/+/g,"/"),Kw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _y=["post","put","patch","delete"];new Set(_y);const Xw=["get",..._y];new Set(Xw);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$o.apply(this,arguments)}const Dd=k.createContext(null),Zw=k.createContext(null),Zo=k.createContext(null),cl=k.createContext(null),gr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),jy=k.createContext(null);function es(){return k.useContext(cl)!=null}function Fd(){return es()||Ze(!1),k.useContext(cl).location}function Sy(e){k.useContext(Zo).static||k.useLayoutEffect(e)}function Bd(){let{isDataRoute:e}=k.useContext(gr);return e?fk():ek()}function ek(){es()||Ze(!1);let e=k.useContext(Dd),{basename:t,future:n,navigator:r}=k.useContext(Zo),{matches:i}=k.useContext(gr),{pathname:s}=Fd(),a=JSON.stringify(wy(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return Sy(()=>{l.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=ky(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Nr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function tk(){let{matches:e}=k.useContext(gr),t=e[e.length-1];return t?t.params:{}}function nk(e,t){return rk(e,t)}function rk(e,t,n,r){es()||Ze(!1);let{navigator:i}=k.useContext(Zo),{matches:s}=k.useContext(gr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Fd(),d;if(t){var p;let w=typeof t=="string"?zi(t):t;c==="/"||(p=w.pathname)!=null&&p.startsWith(c)||Ze(!1),d=w}else d=u;let f=d.pathname||"/",h=f;if(c!=="/"){let w=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=zw(e,{pathname:h}),v=lk(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Nr([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:Nr([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&v?k.createElement(cl.Provider,{value:{location:$o({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Xn.Pop}},v):v}function ik(){let e=pk(),t=Qw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const ok=k.createElement(ik,null);class sk extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(gr.Provider,{value:this.props.routeContext},k.createElement(jy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ak(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Dd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(gr.Provider,{value:t},r)}function lk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ze(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:h}=n,g=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||g){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let h,g=!1,v=null,w=null;n&&(h=l&&p.route.id?l[p.route.id]:void 0,v=p.route.errorElement||ok,c&&(u<0&&f===0?(hk("route-fallback"),g=!0,w=null):u===f&&(g=!0,w=p.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,f+1)),x=()=>{let y;return h?y=v:g?y=w:p.route.Component?y=k.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,k.createElement(ak,{match:p,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?k.createElement(sk,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:x(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):x()},null)}var Cy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Cy||{}),Ny=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ny||{});function ck(e){let t=k.useContext(Dd);return t||Ze(!1),t}function uk(e){let t=k.useContext(Zw);return t||Ze(!1),t}function dk(e){let t=k.useContext(gr);return t||Ze(!1),t}function Ey(e){let t=dk(),n=t.matches[t.matches.length-1];return n.route.id||Ze(!1),n.route.id}function pk(){var e;let t=k.useContext(jy),n=uk(),r=Ey();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function fk(){let{router:e}=ck(Cy.UseNavigateStable),t=Ey(Ny.UseNavigateStable),n=k.useRef(!1);return Sy(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,$o({fromRouteId:t},s)))},[e,t])}const bh={};function hk(e,t,n){bh[e]||(bh[e]=!0)}function mk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function gk(e){let{to:t,replace:n,state:r,relative:i}=e;es()||Ze(!1);let{future:s,static:a}=k.useContext(Zo),{matches:l}=k.useContext(gr),{pathname:c}=Fd(),u=Bd(),d=ky(t,wy(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function Wr(e){Ze(!1)}function xk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:a=!1,future:l}=e;es()&&Ze(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:s,static:a,future:$o({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=zi(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:g="default"}=r,v=k.useMemo(()=>{let w=by(d,c);return w==null?null:{location:{pathname:w,search:p,hash:f,state:h,key:g},navigationType:i}},[c,d,p,f,h,g,i]);return v==null?null:k.createElement(Zo.Provider,{value:u},k.createElement(cl.Provider,{children:n,value:v}))}function yk(e){let{children:t,location:n}=e;return nk(xu(t),n)}new Promise(()=>{});function xu(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,xu(r.props.children,s));return}r.type!==Wr&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=xu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const vk="6";try{window.__reactRouterVersion=vk}catch{}const bk="startTransition",wh=m0[bk];function wk(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=Cw({window:i,v5Compat:!0}));let a=s.current,[l,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(p=>{u&&wh?wh(()=>c(p)):c(p)},[c,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.useEffect(()=>mk(r),[r]),k.createElement(xk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var kh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kh||(kh={}));var _h;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(_h||(_h={}));const kk={},jh=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const h=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(g=>g(t,h))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(kk?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},_k=e=>e?jh(e):jh;var zy={exports:{}},Ty={},Ay={exports:{}},Py={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wi=k;function jk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Sk=typeof Object.is=="function"?Object.is:jk,Ck=wi.useState,Nk=wi.useEffect,Ek=wi.useLayoutEffect,zk=wi.useDebugValue;function Tk(e,t){var n=t(),r=Ck({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return Ek(function(){i.value=n,i.getSnapshot=t,Xl(i)&&s({inst:i})},[e,n,t]),Nk(function(){return Xl(i)&&s({inst:i}),e(function(){Xl(i)&&s({inst:i})})},[e]),zk(n),n}function Xl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Sk(e,n)}catch{return!0}}function Ak(e,t){return t()}var Pk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ak:Tk;Py.useSyncExternalStore=wi.useSyncExternalStore!==void 0?wi.useSyncExternalStore:Pk;Ay.exports=Py;var Lk=Ay.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=k,Mk=Lk;function Rk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ik=typeof Object.is=="function"?Object.is:Rk,Ok=Mk.useSyncExternalStore,$k=ul.useRef,Dk=ul.useEffect,Fk=ul.useMemo,Bk=ul.useDebugValue;Ty.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=$k(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=Fk(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var g=a.value;if(i(g,h))return p=g}return p=h}if(g=p,Ik(d,h))return g;var v=r(h);return i!==void 0&&i(g,v)?(d=h,g):(d=h,p=v)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=Ok(e,s[0],s[1]);return Dk(function(){a.hasValue=!0,a.value=l},[l]),Bk(l),l};zy.exports=Ty;var Uk=zy.exports;const Vk=qa(Uk),Ly={},{useDebugValue:Wk}=Dt,{useSyncExternalStoreWithSelector:Hk}=Vk;let Sh=!1;const qk=e=>e;function Jk(e,t=qk,n){(Ly?"production":void 0)!=="production"&&n&&!Sh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Sh=!0);const r=Hk(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Wk(r),r}const Ch=e=>{(Ly?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?_k(e):e,n=(r,i)=>Jk(t,r,i);return Object.assign(n,t),n},Kk=e=>e?Ch(e):Ch,ht=Kk((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=s.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:s,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let i=r.app;if(n.type==="LlmAgent"&&n.output_key){const s=n.output_key;r.app.state_keys.find(l=>l.name===s)||(i={...r.app,state_keys:[...r.app.state_keys,{name:s,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:i,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:i}=t();if(i){const s=i.agents.find(l=>l.id===n);let a=i.app;if(s&&s.type==="LlmAgent"&&r.output_key){const l=s.output_key,c=r.output_key;if(l!==c){const u=i.app.state_keys.filter(p=>p.name!==l);u.find(p=>p.name===c)?a={...i.app,state_keys:u}:a={...i.app,state_keys:[...u,{name:c,description:`Output from ${r.name||s.name} agent`,type:"string",scope:"session"}]}}}e({project:{...i,app:a,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Ud="/api";async function Se(e,t){const n=await fetch(`${Ud}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function My(){return(await Se("/projects")).projects}async function Ry(e){return(await Se(`/projects/${e}`)).project}async function Iy(e,t=""){return(await Se("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function yu(e,t){return(await Se(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Oy(e){await Se(`/projects/${e}`,{method:"DELETE"})}async function $y(e){return Se(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function vu(e){return(await Se(`/projects/${e}/sessions`)).sessions}async function Dy(e,t){return(await Se(`/projects/${e}/sessions/${t}/load`)).session}async function Fy(e,t){return(await Se(`/projects/${e}/sessions/${t}/artifacts`)).artifacts||[]}function Qs(e,t,n){return`${Ud}/projects/${e}/sessions/${t}/artifacts/${encodeURIComponent(n)}`}async function By(e){return(await Se(`/projects/${e}/yaml`)).yaml}async function Uy(e,t){return(await Se(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Vd(){return(await Se("/mcp-servers")).servers}async function Vy(){return(await Se("/builtin-tools")).tools}function Wy(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Xs(e,t,n,r){return await Se(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Hy(e,t){return await Se(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function qy(e,t,n,r=[],i){return await Se(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Jy(e,t,n,r,i=[],s){return await Se(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function bu(e){return await Se("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Ky(e,t){return Se(`/projects/${e}/skillsets/${t}/stats`)}async function Gy(e,t,n,r,i=500,s=50){return Se(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function Yy(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const a=await fetch(`${Ud}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Qy(e,t,n,r=10,i=0){return Se(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Xy(e,t){return Se(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Zy(){return Se("/skillsets/embeddings-available")}const Ge={async get(e){return Se(e)},async post(e,t){return Se(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Se(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Se(e,{method:"DELETE"})}},Gk=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Gy,api:Ge,checkEmbeddingsAvailable:Zy,clearSkillSet:Xy,createProject:Iy,createRunWebSocket:Wy,deleteProject:Oy,fetchJSON:Se,generateAgentConfig:Hy,generateCallbackCode:Jy,generatePrompt:Xs,generateToolCode:qy,getArtifactUrl:Qs,getBuiltinTools:Vy,getMcpServers:Vd,getProject:Ry,getProjectYaml:By,getSkillSetStats:Ky,listArtifacts:Fy,listProjectSessions:vu,listProjects:My,loadSession:Dy,saveSessionToMemory:$y,searchSkillSet:Qy,testMcpServer:bu,updateProject:yu,updateProjectFromYaml:Uy,uploadSkillSetFile:Yy},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),fe=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>k.createElement("svg",{ref:d,...Yk,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Qk(e)}`,l].join(" "),...u},[...t.map(([p,f])=>k.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=fe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=fe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=fe("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=fe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=fe("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=fe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=fe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=fe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=fe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=fe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=fe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=fe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=fe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=fe("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=fe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=fe("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"h7jej2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",key:"f4a3oc"}],["path",{d:"m7 17-4.74-2.85",key:"etm6su"}],["path",{d:"m7 17 4.74-2.85",key:"5xuooz"}],["path",{d:"M7 17v5",key:"1yj1jh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=fe("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=fe("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=fe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=fe("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=fe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=fe("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=fe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=fe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=fe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=fe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=fe("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=fe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=fe("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=fe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=fe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=fe("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=fe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=fe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=fe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=fe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=fe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=fe("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=fe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=fe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=fe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=fe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=fe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=fe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=fe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=fe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=fe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=fe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=fe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=fe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=fe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=fe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=fe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=fe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=fe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=fe("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=fe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=fe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=fe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function x_(){const e=Bd(),[t,n]=k.useState([]),[r,i]=k.useState(!0),[s,a]=k.useState(!1),[l,c]=k.useState("");k.useEffect(()=>{u()},[]);async function u(){try{const f=await My();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Iy(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await Oy(f),n(t.filter(g=>g.id!==f))}catch(g){console.error("Failed to delete project:",g)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(Gd,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(Qe,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[o.jsx(Qe,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Nh,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(f=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[o.jsxs("h3",{children:[o.jsx(Nh,{size:18}),f.name]}),o.jsx("p",{children:f.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:h=>p(f.id,h),children:o.jsx(Be,{size:16})})]},f.id))})]})]})}const Eh={},y_=5*60*1e3;function v_({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:s="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=k.useState(t||""),[u,d]=k.useState(!1),[p,f]=k.useState([]),[h,g]=k.useState(!1),[v,w]=k.useState(null),[m,x]=k.useState(-1),[y,j]=k.useState({top:0,left:0,width:0}),A=k.useRef(null),C=k.useRef(null);k.useEffect(()=>{if(u&&A.current){const T=A.current.getBoundingClientRect();j({top:T.bottom+window.scrollY+4,left:T.left+window.scrollX,width:T.width})}},[u]);const P=k.useCallback(async()=>{const T=Eh[a];if(T&&Date.now()-T.timestamp<y_){const I=[];Object.values(T.providers).forEach($=>{I.push(...$.models)}),f(I);return}g(!0),w(null);try{const I=new URLSearchParams;n&&I.append("provider",n),r&&I.append("api_base",r);const $=`/models/${e}${I.toString()?"?"+I.toString():""}`,z=await Ge.get($);Eh[a]={providers:z.providers,timestamp:Date.now()};const O=[];Object.values(z.providers).forEach(R=>{R.models&&R.models.length>0&&O.push(...R.models)}),f(O)}catch(I){w(I.message||"Failed to fetch models")}finally{g(!1)}},[e,a,r,n]);k.useEffect(()=>{P()},[P]),k.useEffect(()=>{c(t||"")},[t]);const N=p.filter(T=>{const I=l.toLowerCase();return T.id.toLowerCase().includes(I)||T.name.toLowerCase().includes(I)||T.provider.toLowerCase().includes(I)});k.useEffect(()=>{const T=I=>{C.current&&!C.current.contains(I.target)&&A.current&&!A.current.contains(I.target)&&d(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const D=T=>{if(!u){(T.key==="ArrowDown"||T.key==="Enter")&&(d(!0),T.preventDefault());return}switch(T.key){case"ArrowDown":x(I=>Math.min(I+1,N.length-1)),T.preventDefault();break;case"ArrowUp":x(I=>Math.max(I-1,0)),T.preventDefault();break;case"Enter":m>=0&&m<N.length&&E(N[m]),T.preventDefault();break;case"Escape":d(!1);break}},E=T=>{c(T.id),i(T.id,T.provider),d(!1)},M=T=>{c(T.target.value),d(!0),x(-1),i(T.target.value,n||"gemini")},L=T=>{switch(T.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"together":return"provider-together";case"ollama":return"provider-ollama";default:return"provider-other"}},U=u?o.jsxs("div",{ref:C,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:y.top,left:y.left,width:y.width},children:[h&&o.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),v&&o.jsx("div",{className:"model-autocomplete-error",children:v}),!h&&!v&&N.length===0&&o.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!h&&N.length>0&&o.jsxs("div",{className:"model-autocomplete-list",children:[N.slice(0,50).map((T,I)=>o.jsxs("div",{className:`model-autocomplete-item ${I===m?"highlighted":""}`,onClick:()=>E(T),onMouseEnter:()=>x(I),children:[o.jsx("span",{className:`provider-badge ${L(T.provider)}`,children:T.provider}),o.jsx("span",{className:"model-id",children:T.id}),T.context_window&&o.jsxs("span",{className:"model-context",title:`${T.context_window.toLocaleString()} token context`,children:[Math.round(T.context_window/1e3),"K"]}),T.supports_tools&&o.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),T.supports_vision&&o.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),T.supports_json_mode&&o.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${T.provider}-${T.id}`)),N.length>50&&o.jsxs("div",{className:"model-autocomplete-more",children:["+",N.length-50," more..."]})]})]}):null;return o.jsxs("div",{className:"model-autocomplete",children:[o.jsx("input",{ref:A,type:"text",value:l,onChange:M,onFocus:()=>d(!0),onKeyDown:D,placeholder:s,className:"model-autocomplete-input"}),U&&gy.createPortal(U,document.body)]})}const b_=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"together",label:"Together (via LiteLLM)"},{value:"litellm",label:"LiteLLM / Other"}];function w_(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("together_ai/")||e.startsWith("together/")?"together":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function dv({projectId:e,values:t,onChange:n,className:r=""}){return o.jsxs("div",{className:`model-config-form ${r}`,children:[o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",style:{flex:1},children:[o.jsx("label",{children:"Provider"}),o.jsx("select",{value:t.provider||"gemini",onChange:i=>n({provider:i.target.value}),children:b_.map(i=>o.jsx("option",{value:i.value,children:i.label},i.value))})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:"Model"}),o.jsx(v_,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(i,s)=>{const a=w_(i,s);n({model_name:i,provider:a})},placeholder:"Search models..."})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{children:"API Base (optional)"}),o.jsx("input",{type:"text",value:t.api_base||"",onChange:i=>n({api_base:i.target.value||void 0}),placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":t.provider==="together"?"https://api.together.xyz/v1":"http://localhost:11434"})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:i=>n({temperature:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:i=>n({max_output_tokens:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:i=>n({top_p:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:i=>n({top_k:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]})]})]})}const k_=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"GROQ_API_KEY",description:"API key for Groq models"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"TOGETHER_API_KEY",description:"API key for Together (via LiteLLM, e.g. together_ai/* models)"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function __(e){return/^[a-zA-Z0-9_]+$/.test(e)}function j_(){var K;const{project:e,updateProject:t}=ht(),[n,r]=k.useState(null);if(!e)return null;const{app:i}=e;function s(b){t({app:{...i,...b}})}function a(b){if(b===""){r(null),s({name:b});return}__(b)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:b})}function l(){const b={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({state_keys:[...i.state_keys,b]})}function c(b,W){const S=[...i.state_keys];S[b]={...S[b],...W},s({state_keys:S})}function u(b){s({state_keys:i.state_keys.filter((W,S)=>S!==b)})}function d(b="ReflectAndRetryToolPlugin"){let W;switch(b){case"ReflectAndRetryToolPlugin":W={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":W={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":W={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":W={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":W={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":W={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:W={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,W]})}function p(b,W){const S=[...i.plugins];S[b]={...S[b],...W},s({plugins:S})}function f(b){s({plugins:i.plugins.filter((W,S)=>S!==b)})}const h=i.sandbox||{enabled:!1,allow_all_network:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:300,volume_mounts:[]},g=((K=h.allowlist)==null?void 0:K.user)||[],v=h.volume_mounts||[];function w(b){s({sandbox:{...h,...b}})}async function m(b){const W=i.id;try{await fetch(`/api/sandbox/${W}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:b.map(S=>({pattern:S.pattern,pattern_type:S.pattern_type})).filter(S=>S.pattern)})})}catch(S){console.debug("Could not sync allowlist to gateway:",S)}}function x(){const b={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},W={...h.allowlist,user:[...g,b]};w({allowlist:W})}function y(b,W){const S=[...g];S[b]={...S[b],...W};const V=S;w({allowlist:{...h.allowlist,user:V}}),W.pattern&&m(V)}function j(b){const W=g.filter((S,V)=>V!==b);w({allowlist:{...h.allowlist,user:W}})}function A(){const b={host_path:"",container_path:"/mnt/data",mode:"ro"};w({volume_mounts:[...v,b]})}function C(b,W){const S=[...v];S[b]={...S[b],...W},w({volume_mounts:S})}function P(b){const W=v.filter((S,V)=>V!==b);w({volume_mounts:W})}const N=i.models||[];function D(){const b=`model_${Date.now().toString(36)}`,W={id:b,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:N.length===0};s({models:[...N,W],default_model_id:N.length===0?b:i.default_model_id})}function E(b,W){const S=N.map(V=>V.id===b?{...V,...W}:V);s({models:S})}function M(b){var V;const W=N.filter(ie=>ie.id!==b),S=i.default_model_id===b?((V=W[0])==null?void 0:V.id)||void 0:i.default_model_id;s({models:W,default_model_id:S})}function L(b){s({default_model_id:b})}const U=i.env_vars||{},[T,I]=k.useState({}),[$,z]=k.useState("");function O(b=""){const W=b||$.trim();!W||U[W]!==void 0||(s({env_vars:{...U,[W]:""}}),z(""))}function R(b,W){s({env_vars:{...U,[b]:W}})}function _(b){const W={...U};delete W[b],s({env_vars:W})}function H(b){I(W=>({...W,[b]:!W[b]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(h_,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:b=>a(b.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:b=>s({root_agent_id:b.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(b=>o.jsx("option",{value:b.id,children:b.name},b.id))]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(In,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:b=>{const W=b.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[W]||W+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:b=>s({session_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:b=>s({session_service_uri:"sqlite://"+b.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:b=>s({session_service_uri:b.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:b=>{const W=i.session_service_uri.split("/");W[2]=b.target.value,s({session_service_uri:W.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:b=>{const W=i.session_service_uri.split("/");W[3]=b.target.value,s({session_service_uri:W.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:b=>{const W=i.session_service_uri.split("/");W[4]=b.target.value,s({session_service_uri:W.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:b=>{const W=b.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[W]||W+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:b=>s({memory_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:b=>s({memory_service_uri:"rag://"+b.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:b=>{const W=i.memory_service_uri.split("/");W[2]=b.target.value,s({memory_service_uri:W.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:b=>{const W=i.memory_service_uri.split("/");W[3]=b.target.value,s({memory_service_uri:W.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:b=>{const W=i.memory_service_uri.split("/");W[4]=b.target.value,s({memory_service_uri:W.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:b=>{const W=b.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[W]||W+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:b=>s({artifact_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:b=>s({artifact_service_uri:"gs://"+b.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(ku,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:k_.filter(b=>U[b.key]===void 0).map(b=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>O(b.key),title:b.description,children:[o.jsx(Qe,{size:12}),b.key]},b.key))}),Object.keys(U).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(U).map(([b,W])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:b}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:T[b]?"text":"password",value:W,onChange:S=>R(b,S.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>H(b),title:T[b]?"Hide value":"Show value",children:T[b]?o.jsx(t_,{size:16}):o.jsx(Or,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>_(b),children:o.jsx(Be,{size:16})})]},b)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:$,onChange:b=>z(b.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:b=>b.key==="Enter"&&O()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>O(),disabled:!$.trim(),children:[o.jsx(Qe,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Hd,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:D,children:[o.jsx(Qe,{size:14}),"Add Model"]})]}),N.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):N.map(b=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:b.name,onChange:W=>E(b.id,{name:W.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===b.id?"is-default":""}`,onClick:()=>L(b.id),title:i.default_model_id===b.id?"Default model":"Set as default",children:o.jsx(lv,{size:14,fill:i.default_model_id===b.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>M(b.id),children:o.jsx(Be,{size:16})})]}),o.jsx("div",{className:"model-card-body",children:o.jsx(dv,{projectId:e.id,values:b,onChange:W=>E(b.id,W)})})]},b.id))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Jd,{size:20}),"State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[o.jsx(Qe,{size:14}),"Add"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys. Auto-created when you add LlmAgents."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:i.state_keys.map((b,W)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx("input",{type:"text",value:b.name,onChange:S=>c(W,{name:S.target.value}),placeholder:"Key name",style:{flex:1,padding:"4px 8px",fontSize:12}}),o.jsxs("select",{value:b.type,onChange:S=>c(W,{type:S.target.value}),style:{padding:"4px 6px",fontSize:11},children:[o.jsx("option",{value:"string",children:"str"}),o.jsx("option",{value:"number",children:"num"}),o.jsx("option",{value:"boolean",children:"bool"}),o.jsx("option",{value:"object",children:"obj"}),o.jsx("option",{value:"array",children:"arr"})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(W),style:{padding:4},children:o.jsx(Be,{size:12})})]},W))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(uv,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Summarize old events"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:b=>s({compaction:{...i.compaction,max_events:parseInt(b.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:b=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(b.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Pause/resume execution"})]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Qt,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:b=>{b.target.value&&(d(b.target.value),b.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((b,W)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:b.type,onChange:S=>p(W,{type:S.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>f(W),children:o.jsx(Be,{size:16})})]}),b.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:b.max_retries??3,onChange:S=>p(W,{max_retries:parseInt(S.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:b.throw_exception_if_retry_exceeded??!1,onChange:S=>p(W,{throw_exception_if_retry_exceeded:S.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),b.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:b.num_invocations_to_keep??5,onChange:S=>p(W,{num_invocations_to_keep:parseInt(S.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),b.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),b.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:b.global_instruction??"",onChange:S=>p(W,{global_instruction:S.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),b.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),b.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},W))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(av,{size:20}),"Network Allowlist"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[o.jsx(Qe,{size:14}),"Add"]})]}),o.jsxs("div",{className:"toggle-group",style:{marginBottom:10},children:[o.jsx("div",{className:`toggle ${h.allow_all_network?"active":""}`,onClick:()=>w({allow_all_network:!h.allow_all_network,unknown_action:h.allow_all_network?h.unknown_action:"allow"})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Allow all network connections"}),o.jsx("span",{children:"Disables approval/deny; still routes through the sandbox proxy"})]})]}),g.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:g.map((b,W)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(qd,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:b.pattern,onChange:S=>y(W,{pattern:S.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),o.jsxs("select",{value:b.pattern_type,onChange:S=>y(W,{pattern_type:S.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[o.jsx("option",{value:"exact",children:"exact"}),o.jsx("option",{value:"wildcard",children:"wild"}),o.jsx("option",{value:"regex",children:"regex"})]}),o.jsx("button",{className:"delete-item",onClick:()=>j(W),style:{padding:4},children:o.jsx(Be,{size:12})})]},b.id||W))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(s_,{size:20}),"Volume Mounts"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:A,children:[o.jsx(Qe,{size:14}),"Add"]})]}),v.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No mounts. Add to give sandbox file access."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:v.map((b,W)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(nv,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:b.host_path,onChange:S=>C(W,{host_path:S.target.value}),placeholder:"~/path",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path"}),o.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),o.jsx("input",{type:"text",value:b.container_path,onChange:S=>C(W,{container_path:S.target.value}),placeholder:"/mnt",style:{width:70,padding:"4px 6px",fontSize:11},title:"Container path"}),o.jsxs("select",{value:b.mode,onChange:S=>C(W,{mode:S.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[o.jsx("option",{value:"ro",children:"ro"}),o.jsx("option",{value:"rw",children:"rw"})]}),o.jsx("button",{className:"delete-item",onClick:()=>P(W),style:{padding:4},children:o.jsx(Be,{size:12})})]},W))})]})]})]})}const S_="modulepreload",C_=function(e){return"/"+e},zh={},N_=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=C_(c),c in zh)return;zh[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":S_,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function Th(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function E_(e){if(Array.isArray(e))return e}function z_(e,t,n){return(t=I_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,l=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function A_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ah(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ph(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ah(Object(n),!0).forEach(function(r){z_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ah(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function P_(e,t){if(e==null)return{};var n,r,i=L_(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function L_(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function M_(e,t){return E_(e)||T_(e,t)||O_(e,t)||A_()}function R_(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function I_(e){var t=R_(e,"string");return typeof t=="symbol"?t:t+""}function O_(e,t){if(e){if(typeof e=="string")return Th(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Th(e,t):void 0}}function $_(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Mh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lh(Object(n),!0).forEach(function(r){$_(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function D_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function ro(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Ma(e){return{}.toString.call(e).includes("Object")}function F_(e){return!Object.keys(e).length}function Fo(e){return typeof e=="function"}function B_(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function U_(e,t){return Ma(t)||cr("changeType"),Object.keys(t).some(function(n){return!B_(e,n)})&&cr("changeField"),t}function V_(e){Fo(e)||cr("selectorType")}function W_(e){Fo(e)||Ma(e)||cr("handlerType"),Ma(e)&&Object.values(e).some(function(t){return!Fo(t)})&&cr("handlersType")}function H_(e){e||cr("initialIsRequired"),Ma(e)||cr("initialType"),F_(e)&&cr("initialContent")}function q_(e,t){throw new Error(e[t]||e.default)}var J_={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},cr=ro(q_)(J_),zs={changes:U_,selector:V_,handler:W_,initial:H_};function K_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};zs.initial(e),zs.handler(t);var n={current:e},r=ro(Q_)(n,t),i=ro(Y_)(n),s=ro(zs.changes)(e),a=ro(G_)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return zs.selector(u),u(n.current)}function c(u){D_(r,i,s,a)(u)}return[l,c]}function G_(e,t){return Fo(t)?t(e.current):t}function Y_(e,t){return e.current=Mh(Mh({},e.current),t),t}function Q_(e,t,n){return Fo(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var X_={create:K_},Z_={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function ej(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function tj(e){return{}.toString.call(e).includes("Object")}function nj(e){return e||Rh("configIsRequired"),tj(e)||Rh("configType"),e.urls?(rj(),{paths:{vs:e.urls.monacoBase}}):e}function rj(){console.warn(pv.deprecation)}function ij(e,t){throw new Error(e[t]||e.default)}var pv={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Rh=ej(ij)(pv),oj={config:nj},sj=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,a){return a(s)},i)}};function fv(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],fv(e[n],t[n]))}),Ph(Ph({},e),t)}var aj={type:"cancelation",msg:"operation is manually canceled"};function tc(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(aj):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var lj=["monaco"],cj=X_.create({config:Z_,isInitialized:!1,resolve:null,reject:null,monaco:null}),hv=M_(cj,2),ns=hv[0],pl=hv[1];function uj(e){var t=oj.config(e),n=t.monaco,r=P_(t,lj);pl(function(i){return{config:fv(i.config,r),monaco:n}})}function dj(){var e=ns(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(pl({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),tc(nc);if(window.monaco&&window.monaco.editor)return mv(window.monaco),e.resolve(window.monaco),tc(nc);sj(pj,hj)(mj)}return tc(nc)}function pj(e){return document.body.appendChild(e)}function fj(e){var t=document.createElement("script");return e&&(t.src=e),t}function hj(e){var t=ns(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=fj("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function mj(){var e=ns(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;mv(r),e.resolve(r)},function(n){e.reject(n)})}function mv(e){ns().monaco||pl({monaco:e})}function gj(){return ns(function(e){var t=e.monaco;return t})}var nc=new Promise(function(e,t){return pl({resolve:e,reject:t})}),gv={config:uj,init:dj,__getMonacoInstance:gj},xj={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},rc=xj,yj={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},vj=yj;function bj({children:e}){return Dt.createElement("div",{style:vj.container},e)}var wj=bj,kj=wj;function _j({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:a}){return Dt.createElement("section",{style:{...rc.wrapper,width:e,height:t},...a},!n&&Dt.createElement(kj,null,r),Dt.createElement("div",{ref:i,style:{...rc.fullWidth,...!n&&rc.hide},className:s}))}var jj=_j,xv=k.memo(jj);function Sj(e){k.useEffect(e,[])}var yv=Sj;function Cj(e,t,n=!0){let r=k.useRef(!0);k.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var It=Cj;function go(){}function ri(e,t,n,r){return Nj(e,r)||Ej(e,t,n,r)}function Nj(e,t){return e.editor.getModel(vv(e,t))}function Ej(e,t,n,r){return e.editor.createModel(t,n,r?vv(e,r):void 0)}function vv(e,t){return e.Uri.parse(t)}function zj({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:g,wrapperProps:v={},beforeMount:w=go,onMount:m=go}){let[x,y]=k.useState(!1),[j,A]=k.useState(!0),C=k.useRef(null),P=k.useRef(null),N=k.useRef(null),D=k.useRef(m),E=k.useRef(w),M=k.useRef(!1);yv(()=>{let I=gv.init();return I.then($=>(P.current=$)&&A(!1)).catch($=>($==null?void 0:$.type)!=="cancelation"&&console.error("Monaco initialization: error:",$)),()=>C.current?T():I.cancel()}),It(()=>{if(C.current&&P.current){let I=C.current.getOriginalEditor(),$=ri(P.current,e||"",r||n||"text",s||"");$!==I.getModel()&&I.setModel($)}},[s],x),It(()=>{if(C.current&&P.current){let I=C.current.getModifiedEditor(),$=ri(P.current,t||"",i||n||"text",a||"");$!==I.getModel()&&I.setModel($)}},[a],x),It(()=>{let I=C.current.getModifiedEditor();I.getOption(P.current.editor.EditorOption.readOnly)?I.setValue(t||""):t!==I.getValue()&&(I.executeEdits("",[{range:I.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),I.pushUndoStop())},[t],x),It(()=>{var I,$;($=(I=C.current)==null?void 0:I.getModel())==null||$.original.setValue(e||"")},[e],x),It(()=>{let{original:I,modified:$}=C.current.getModel();P.current.editor.setModelLanguage(I,r||n||"text"),P.current.editor.setModelLanguage($,i||n||"text")},[n,r,i],x),It(()=>{var I;(I=P.current)==null||I.editor.setTheme(u)},[u],x),It(()=>{var I;(I=C.current)==null||I.updateOptions(p)},[p],x);let L=k.useCallback(()=>{var z;if(!P.current)return;E.current(P.current);let I=ri(P.current,e||"",r||n||"text",s||""),$=ri(P.current,t||"",i||n||"text",a||"");(z=C.current)==null||z.setModel({original:I,modified:$})},[n,t,i,e,r,s,a]),U=k.useCallback(()=>{var I;!M.current&&N.current&&(C.current=P.current.editor.createDiffEditor(N.current,{automaticLayout:!0,...p}),L(),(I=P.current)==null||I.editor.setTheme(u),y(!0),M.current=!0)},[p,u,L]);k.useEffect(()=>{x&&D.current(C.current,P.current)},[x]),k.useEffect(()=>{!j&&!x&&U()},[j,x,U]);function T(){var $,z,O,R;let I=($=C.current)==null?void 0:$.getModel();l||((z=I==null?void 0:I.original)==null||z.dispose()),c||((O=I==null?void 0:I.modified)==null||O.dispose()),(R=C.current)==null||R.dispose()}return Dt.createElement(xv,{width:h,height:f,isEditorReady:x,loading:d,_ref:N,className:g,wrapperProps:v})}var Tj=zj;k.memo(Tj);function Aj(e){let t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}var Pj=Aj,Ts=new Map;function Lj({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:g="100%",className:v,wrapperProps:w={},beforeMount:m=go,onMount:x=go,onChange:y,onValidate:j=go}){let[A,C]=k.useState(!1),[P,N]=k.useState(!0),D=k.useRef(null),E=k.useRef(null),M=k.useRef(null),L=k.useRef(x),U=k.useRef(m),T=k.useRef(),I=k.useRef(r),$=Pj(s),z=k.useRef(!1),O=k.useRef(!1);yv(()=>{let H=gv.init();return H.then(K=>(D.current=K)&&N(!1)).catch(K=>(K==null?void 0:K.type)!=="cancelation"&&console.error("Monaco initialization: error:",K)),()=>E.current?_():H.cancel()}),It(()=>{var K,b,W,S;let H=ri(D.current,e||r||"",t||i||"",s||n||"");H!==((K=E.current)==null?void 0:K.getModel())&&(p&&Ts.set($,(b=E.current)==null?void 0:b.saveViewState()),(W=E.current)==null||W.setModel(H),p&&((S=E.current)==null||S.restoreViewState(Ts.get(s))))},[s],A),It(()=>{var H;(H=E.current)==null||H.updateOptions(u)},[u],A),It(()=>{!E.current||r===void 0||(E.current.getOption(D.current.editor.EditorOption.readOnly)?E.current.setValue(r):r!==E.current.getValue()&&(O.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop(),O.current=!1))},[r],A),It(()=>{var K,b;let H=(K=E.current)==null?void 0:K.getModel();H&&i&&((b=D.current)==null||b.editor.setModelLanguage(H,i))},[i],A),It(()=>{var H;l!==void 0&&((H=E.current)==null||H.revealLine(l))},[l],A),It(()=>{var H;(H=D.current)==null||H.editor.setTheme(a)},[a],A);let R=k.useCallback(()=>{var H;if(!(!M.current||!D.current)&&!z.current){U.current(D.current);let K=s||n,b=ri(D.current,r||e||"",t||i||"",K||"");E.current=(H=D.current)==null?void 0:H.editor.create(M.current,{model:b,automaticLayout:!0,...u},d),p&&E.current.restoreViewState(Ts.get(K)),D.current.editor.setTheme(a),l!==void 0&&E.current.revealLine(l),C(!0),z.current=!0}},[e,t,n,r,i,s,u,d,p,a,l]);k.useEffect(()=>{A&&L.current(E.current,D.current)},[A]),k.useEffect(()=>{!P&&!A&&R()},[P,A,R]),I.current=r,k.useEffect(()=>{var H,K;A&&y&&((H=T.current)==null||H.dispose(),T.current=(K=E.current)==null?void 0:K.onDidChangeModelContent(b=>{O.current||y(E.current.getValue(),b)}))},[A,y]),k.useEffect(()=>{if(A){let H=D.current.editor.onDidChangeMarkers(K=>{var W;let b=(W=E.current.getModel())==null?void 0:W.uri;if(b&&K.find(S=>S.path===b.path)){let S=D.current.editor.getModelMarkers({resource:b});j==null||j(S)}});return()=>{H==null||H.dispose()}}return()=>{}},[A,j]);function _(){var H,K;(H=T.current)==null||H.dispose(),f?p&&Ts.set(s,E.current.saveViewState()):(K=E.current.getModel())==null||K.dispose(),E.current.dispose()}return Dt.createElement(xv,{width:h,height:g,isEditorReady:A,loading:c,_ref:M,className:v,wrapperProps:w})}var Mj=Lj,Rj=k.memo(Mj),Xt=Rj;function Ij(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Oj=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,$j=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Dj={};function Ih(e,t){return(Dj.jsx?$j:Oj).test(e)}const Fj=/[ \t\n\f\r]/g;function Bj(e){return typeof e=="object"?e.type==="text"?Oh(e.value):!1:Oh(e)}function Oh(e){return e.replace(Fj,"")===""}class rs{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}rs.prototype.normal={};rs.prototype.property={};rs.prototype.space=void 0;function bv(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new rs(n,r,t)}function ju(e){return e.toLowerCase()}class At{constructor(t,n){this.attribute=n,this.property=t}}At.prototype.attribute="";At.prototype.booleanish=!1;At.prototype.boolean=!1;At.prototype.commaOrSpaceSeparated=!1;At.prototype.commaSeparated=!1;At.prototype.defined=!1;At.prototype.mustUseProperty=!1;At.prototype.number=!1;At.prototype.overloadedBoolean=!1;At.prototype.property="";At.prototype.spaceSeparated=!1;At.prototype.space=void 0;let Uj=0;const je=Br(),Ye=Br(),Su=Br(),oe=Br(),Re=Br(),ui=Br(),Lt=Br();function Br(){return 2**++Uj}const Cu=Object.freeze(Object.defineProperty({__proto__:null,boolean:je,booleanish:Ye,commaOrSpaceSeparated:Lt,commaSeparated:ui,number:oe,overloadedBoolean:Su,spaceSeparated:Re},Symbol.toStringTag,{value:"Module"})),ic=Object.keys(Cu);class Qd extends At{constructor(t,n,r,i){let s=-1;if(super(t,n),$h(this,"space",i),typeof r=="number")for(;++s<ic.length;){const a=ic[s];$h(this,ic[s],(r&Cu[a])===Cu[a])}}}Qd.prototype.defined=!0;function $h(e,t,n){n&&(e[t]=n)}function Pi(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new Qd(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[ju(r)]=r,n[ju(s.attribute)]=r}return new rs(t,n,e.space)}const wv=Pi({properties:{ariaActiveDescendant:null,ariaAtomic:Ye,ariaAutoComplete:null,ariaBusy:Ye,ariaChecked:Ye,ariaColCount:oe,ariaColIndex:oe,ariaColSpan:oe,ariaControls:Re,ariaCurrent:null,ariaDescribedBy:Re,ariaDetails:null,ariaDisabled:Ye,ariaDropEffect:Re,ariaErrorMessage:null,ariaExpanded:Ye,ariaFlowTo:Re,ariaGrabbed:Ye,ariaHasPopup:null,ariaHidden:Ye,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Re,ariaLevel:oe,ariaLive:null,ariaModal:Ye,ariaMultiLine:Ye,ariaMultiSelectable:Ye,ariaOrientation:null,ariaOwns:Re,ariaPlaceholder:null,ariaPosInSet:oe,ariaPressed:Ye,ariaReadOnly:Ye,ariaRelevant:null,ariaRequired:Ye,ariaRoleDescription:Re,ariaRowCount:oe,ariaRowIndex:oe,ariaRowSpan:oe,ariaSelected:Ye,ariaSetSize:oe,ariaSort:null,ariaValueMax:oe,ariaValueMin:oe,ariaValueNow:oe,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function kv(e,t){return t in e?e[t]:t}function _v(e,t){return kv(e,t.toLowerCase())}const Vj=Pi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ui,acceptCharset:Re,accessKey:Re,action:null,allow:null,allowFullScreen:je,allowPaymentRequest:je,allowUserMedia:je,alt:null,as:null,async:je,autoCapitalize:null,autoComplete:Re,autoFocus:je,autoPlay:je,blocking:Re,capture:null,charSet:null,checked:je,cite:null,className:Re,cols:oe,colSpan:null,content:null,contentEditable:Ye,controls:je,controlsList:Re,coords:oe|ui,crossOrigin:null,data:null,dateTime:null,decoding:null,default:je,defer:je,dir:null,dirName:null,disabled:je,download:Su,draggable:Ye,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:je,formTarget:null,headers:Re,height:oe,hidden:Su,high:oe,href:null,hrefLang:null,htmlFor:Re,httpEquiv:Re,id:null,imageSizes:null,imageSrcSet:null,inert:je,inputMode:null,integrity:null,is:null,isMap:je,itemId:null,itemProp:Re,itemRef:Re,itemScope:je,itemType:Re,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:je,low:oe,manifest:null,max:null,maxLength:oe,media:null,method:null,min:null,minLength:oe,multiple:je,muted:je,name:null,nonce:null,noModule:je,noValidate:je,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:je,optimum:oe,pattern:null,ping:Re,placeholder:null,playsInline:je,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:je,referrerPolicy:null,rel:Re,required:je,reversed:je,rows:oe,rowSpan:oe,sandbox:Re,scope:null,scoped:je,seamless:je,selected:je,shadowRootClonable:je,shadowRootDelegatesFocus:je,shadowRootMode:null,shape:null,size:oe,sizes:null,slot:null,span:oe,spellCheck:Ye,src:null,srcDoc:null,srcLang:null,srcSet:null,start:oe,step:null,style:null,tabIndex:oe,target:null,title:null,translate:null,type:null,typeMustMatch:je,useMap:null,value:Ye,width:oe,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Re,axis:null,background:null,bgColor:null,border:oe,borderColor:null,bottomMargin:oe,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:je,declare:je,event:null,face:null,frame:null,frameBorder:null,hSpace:oe,leftMargin:oe,link:null,longDesc:null,lowSrc:null,marginHeight:oe,marginWidth:oe,noResize:je,noHref:je,noShade:je,noWrap:je,object:null,profile:null,prompt:null,rev:null,rightMargin:oe,rules:null,scheme:null,scrolling:Ye,standby:null,summary:null,text:null,topMargin:oe,valueType:null,version:null,vAlign:null,vLink:null,vSpace:oe,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:je,disableRemotePlayback:je,prefix:null,property:null,results:oe,security:null,unselectable:null},space:"html",transform:_v}),Wj=Pi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Lt,accentHeight:oe,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:oe,amplitude:oe,arabicForm:null,ascent:oe,attributeName:null,attributeType:null,azimuth:oe,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:oe,by:null,calcMode:null,capHeight:oe,className:Re,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:oe,diffuseConstant:oe,direction:null,display:null,dur:null,divisor:oe,dominantBaseline:null,download:je,dx:null,dy:null,edgeMode:null,editable:null,elevation:oe,enableBackground:null,end:null,event:null,exponent:oe,externalResourcesRequired:null,fill:null,fillOpacity:oe,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ui,g2:ui,glyphName:ui,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:oe,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:oe,horizOriginX:oe,horizOriginY:oe,id:null,ideographic:oe,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:oe,k:oe,k1:oe,k2:oe,k3:oe,k4:oe,kernelMatrix:Lt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:oe,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:oe,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:oe,overlineThickness:oe,paintOrder:null,panose1:null,path:null,pathLength:oe,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Re,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:oe,pointsAtY:oe,pointsAtZ:oe,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Lt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Lt,rev:Lt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Lt,requiredFeatures:Lt,requiredFonts:Lt,requiredFormats:Lt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:oe,specularExponent:oe,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:oe,strikethroughThickness:oe,string:null,stroke:null,strokeDashArray:Lt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:oe,strokeOpacity:oe,strokeWidth:null,style:null,surfaceScale:oe,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Lt,tabIndex:oe,tableValues:null,target:null,targetX:oe,targetY:oe,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Lt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:oe,underlineThickness:oe,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:oe,values:null,vAlphabetic:oe,vMathematical:oe,vectorEffect:null,vHanging:oe,vIdeographic:oe,version:null,vertAdvY:oe,vertOriginX:oe,vertOriginY:oe,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:oe,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:kv}),jv=Pi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Sv=Pi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:_v}),Cv=Pi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Hj={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},qj=/[A-Z]/g,Dh=/-[a-z]/g,Jj=/^data[-\w.:]+$/i;function Kj(e,t){const n=ju(t);let r=t,i=At;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Jj.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Dh,Yj);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Dh.test(s)){let a=s.replace(qj,Gj);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Qd}return new i(r,t)}function Gj(e){return"-"+e.toLowerCase()}function Yj(e){return e.charAt(1).toUpperCase()}const Qj=bv([wv,Vj,jv,Sv,Cv],"html"),Xd=bv([wv,Wj,jv,Sv,Cv],"svg");function Xj(e){return e.join(" ").trim()}var Zd={},Fh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Zj=/\n/g,e2=/^\s*/,t2=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,n2=/^:\s*/,r2=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,i2=/^[;\s]*/,o2=/^\s+|\s+$/g,s2=`
`,Bh="/",Uh="*",br="",a2="comment",l2="declaration";function c2(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var v=g.match(Zj);v&&(n+=v.length);var w=g.lastIndexOf(s2);r=~w?g.length-w:r+g.length}function s(){var g={line:n,column:r};return function(v){return v.position=new a(g),u(),v}}function a(g){this.start=g,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(g){var v=new Error(t.source+":"+n+":"+r+": "+g);if(v.reason=g,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function c(g){var v=g.exec(e);if(v){var w=v[0];return i(w),e=e.slice(w.length),v}}function u(){c(e2)}function d(g){var v;for(g=g||[];v=p();)v!==!1&&g.push(v);return g}function p(){var g=s();if(!(Bh!=e.charAt(0)||Uh!=e.charAt(1))){for(var v=2;br!=e.charAt(v)&&(Uh!=e.charAt(v)||Bh!=e.charAt(v+1));)++v;if(v+=2,br===e.charAt(v-1))return l("End of comment missing");var w=e.slice(2,v-2);return r+=2,i(w),e=e.slice(v),r+=2,g({type:a2,comment:w})}}function f(){var g=s(),v=c(t2);if(v){if(p(),!c(n2))return l("property missing ':'");var w=c(r2),m=g({type:l2,property:Vh(v[0].replace(Fh,br)),value:w?Vh(w[0].replace(Fh,br)):br});return c(i2),m}}function h(){var g=[];d(g);for(var v;v=f();)v!==!1&&(g.push(v),d(g));return g}return u(),h()}function Vh(e){return e?e.replace(o2,br):br}var u2=c2,d2=oa&&oa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zd,"__esModule",{value:!0});Zd.default=f2;const p2=d2(u2);function f2(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,p2.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:l}=s;i?t(a,l,s):l&&(n=n||{},n[a]=l)}),n}var fl={};Object.defineProperty(fl,"__esModule",{value:!0});fl.camelCase=void 0;var h2=/^--[a-zA-Z0-9_-]+$/,m2=/-([a-z])/g,g2=/^[^-]+$/,x2=/^-(webkit|moz|ms|o|khtml)-/,y2=/^-(ms)-/,v2=function(e){return!e||g2.test(e)||h2.test(e)},b2=function(e,t){return t.toUpperCase()},Wh=function(e,t){return"".concat(t,"-")},w2=function(e,t){return t===void 0&&(t={}),v2(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(y2,Wh):e=e.replace(x2,Wh),e.replace(m2,b2))};fl.camelCase=w2;var k2=oa&&oa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},_2=k2(Zd),j2=fl;function Nu(e,t){var n={};return!e||typeof e!="string"||(0,_2.default)(e,function(r,i){r&&i&&(n[(0,j2.camelCase)(r,t)]=i)}),n}Nu.default=Nu;var S2=Nu;const C2=qa(S2),Nv=Ev("end"),ep=Ev("start");function Ev(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function N2(e){const t=ep(e),n=Nv(e);if(t&&n)return{start:t,end:n}}function xo(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Hh(e.position):"start"in e||"end"in e?Hh(e):"line"in e||"column"in e?Eu(e):""}function Eu(e){return qh(e&&e.line)+":"+qh(e&&e.column)}function Hh(e){return Eu(e&&e.start)+"-"+Eu(e&&e.end)}function qh(e){return e&&typeof e=="number"?e:1}class mt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=xo(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}mt.prototype.file="";mt.prototype.name="";mt.prototype.reason="";mt.prototype.message="";mt.prototype.stack="";mt.prototype.column=void 0;mt.prototype.line=void 0;mt.prototype.ancestors=void 0;mt.prototype.cause=void 0;mt.prototype.fatal=void 0;mt.prototype.place=void 0;mt.prototype.ruleId=void 0;mt.prototype.source=void 0;const tp={}.hasOwnProperty,E2=new Map,z2=/[A-Z]/g,T2=new Set(["table","tbody","thead","tfoot","tr"]),A2=new Set(["td","th"]),zv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function P2(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=F2(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=D2(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Xd:Qj,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Tv(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Tv(e,t,n){if(t.type==="element")return L2(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return M2(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return I2(e,t,n);if(t.type==="mdxjsEsm")return R2(e,t);if(t.type==="root")return O2(e,t,n);if(t.type==="text")return $2(e,t)}function L2(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Xd,e.schema=i),e.ancestors.push(t);const s=Pv(e,t.tagName,!1),a=B2(e,t);let l=rp(e,t);return T2.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Bj(c):!0})),Av(e,a,s,t),np(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function M2(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Bo(e,t.position)}function R2(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Bo(e,t.position)}function I2(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Xd,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Pv(e,t.name,!0),a=U2(e,t),l=rp(e,t);return Av(e,a,s,t),np(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function O2(e,t,n){const r={};return np(r,rp(e,t)),e.create(t,e.Fragment,r,n)}function $2(e,t){return t.value}function Av(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function np(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function D2(e,t,n){return r;function r(i,s,a,l){const u=Array.isArray(a.children)?n:t;return l?u(s,a,l):u(s,a)}}function F2(e,t){return n;function n(r,i,s,a){const l=Array.isArray(s.children),c=ep(r);return t(i,s,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function B2(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&tp.call(t.properties,i)){const s=V2(e,i,t.properties[i]);if(s){const[a,l]=s;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&A2.has(t.tagName)?r=l:n[a]=l}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function U2(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Bo(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else Bo(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function rp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:E2;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=Tv(e,s,a);l!==void 0&&n.push(l)}return n}function V2(e,t,n){const r=Kj(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ij(n):Xj(n)),r.property==="style"){let i=typeof n=="object"?n:W2(e,String(n));return e.stylePropertyNameCase==="css"&&(i=H2(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Hj[r.property]||r.property:r.attribute,n]}}function W2(e,t){try{return C2(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new mt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=zv+"#cannot-parse-style-attribute",i}}function Pv(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const l=Ih(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=a}else r=Ih(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return tp.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Bo(e)}function Bo(e,t){const n=new mt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=zv+"#cannot-handle-mdx-estrees-without-createevaluater",n}function H2(e){const t={};let n;for(n in e)tp.call(e,n)&&(t[q2(n)]=e[n]);return t}function q2(e){let t=e.replace(z2,J2);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function J2(e){return"-"+e.toLowerCase()}const oc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},K2={};function G2(e,t){const n=K2,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Lv(e,r,i)}function Lv(e,t,n){if(Y2(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Jh(e.children,t,n)}return Array.isArray(e)?Jh(e,t,n):""}function Jh(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Lv(e[i],t,n);return r.join("")}function Y2(e){return!!(e&&typeof e=="object")}const Kh=document.createElement("i");function ip(e){const t="&"+e+";";Kh.innerHTML=t;const n=Kh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function jn(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function Kt(e,t){return e.length>0?(jn(e,e.length,0,t),e):t}const Gh={}.hasOwnProperty;function Q2(e){const t={};let n=-1;for(;++n<e.length;)X2(t,e[n]);return t}function X2(e,t){let n;for(n in t){const i=(Gh.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){Gh.call(i,a)||(i[a]=[]);const l=s[a];Z2(i[a],Array.isArray(l)?l:l?[l]:[])}}}function Z2(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);jn(e,0,0,r)}function Mv(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function di(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const yn=xr(/[A-Za-z]/),$t=xr(/[\dA-Za-z]/),eS=xr(/[#-'*+\--9=?A-Z^-~]/);function zu(e){return e!==null&&(e<32||e===127)}const Tu=xr(/\d/),tS=xr(/[\dA-Fa-f]/),nS=xr(/[!-/:-@[-`{-~]/);function we(e){return e!==null&&e<-2}function Tt(e){return e!==null&&(e<0||e===32)}function Te(e){return e===-2||e===-1||e===32}const rS=xr(new RegExp("\\p{P}|\\p{S}","u")),iS=xr(/\s/);function xr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Li(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&$t(e.charCodeAt(n+1))&&$t(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(n+1);s<56320&&l>56319&&l<57344?(a=String.fromCharCode(s,l),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Oe(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(c){return Te(c)?(e.enter(n),l(c)):t(c)}function l(c){return Te(c)&&s++<i?(e.consume(c),l):(e.exit(n),t(c))}}const oS={tokenize:sS};function sS(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Oe(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return we(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),a)}}const aS={tokenize:lS},Yh={tokenize:cS};function lS(e){const t=this,n=[];let r=0,i,s,a;return l;function l(y){if(r<n.length){const j=n[r];return t.containerState=j[1],e.attempt(j[0].continuation,c,u)(y)}return u(y)}function c(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const j=t.events.length;let A=j,C;for(;A--;)if(t.events[A][0]==="exit"&&t.events[A][1].type==="chunkFlow"){C=t.events[A][1].end;break}m(r);let P=j;for(;P<t.events.length;)t.events[P][1].end={...C},P++;return jn(t.events,A+1,0,t.events.slice(j)),t.events.length=P,u(y)}return l(y)}function u(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return g(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Yh,d,p)(y)}function d(y){return i&&x(),m(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,g(y)}function f(y){return t.containerState={},e.attempt(Yh,h,g)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function g(y){if(y===null){i&&x(),m(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),v(y)}function v(y){if(y===null){w(e.exit("chunkFlow"),!0),m(0),e.consume(y);return}return we(y)?(e.consume(y),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(y),v)}function w(y,j){const A=t.sliceStream(y);if(j&&A.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(A),t.parser.lazy[y.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<a&&(!i.events[C][1].end||i.events[C][1].end.offset>a))return;const P=t.events.length;let N=P,D,E;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){if(D){E=t.events[N][1].end;break}D=!0}for(m(r),C=P;C<t.events.length;)t.events[C][1].end={...E},C++;jn(t.events,N+1,0,t.events.slice(P)),t.events.length=C}}function m(y){let j=n.length;for(;j-- >y;){const A=n[j];t.containerState=A[1],A[0].exit.call(t,e)}n.length=y}function x(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function cS(e,t,n){return Oe(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Qh(e){if(e===null||Tt(e)||iS(e))return 1;if(rS(e))return 2}function op(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const Au={name:"attention",resolveAll:uS,tokenize:dS};function uS(e,t){let n=-1,r,i,s,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};Xh(p,-c),Xh(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Kt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Kt(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=Kt(u,op(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Kt(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Kt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,jn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function dS(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Qh(r);let s;return a;function a(c){return s=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===s)return e.consume(c),l;const u=e.exit("attentionSequence"),d=Qh(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?p:p&&(i||!f)),u._close=!!(s===42?f:f&&(d||!p)),t(c)}}function Xh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const pS={name:"autolink",tokenize:fS};function fS(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return yn(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||$t(h)?(r=1,l(h)):u(h)}function l(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||$t(h))&&r++<32?(e.consume(h),l):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||zu(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),d):eS(h)?(e.consume(h),u):n(h)}function d(h){return $t(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||$t(h))&&r++<63){const g=h===45?f:p;return e.consume(h),g}return n(h)}}const hl={partial:!0,tokenize:hS};function hS(e,t,n){return r;function r(s){return Te(s)?Oe(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||we(s)?t(s):n(s)}}const Rv={continuation:{tokenize:gS},exit:xS,name:"blockQuote",tokenize:mS};function mS(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return Te(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function gS(e,t,n){const r=this;return i;function i(a){return Te(a)?Oe(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(Rv,t,n)(a)}}function xS(e){e.exit("blockQuote")}const Iv={name:"characterEscape",tokenize:yS};function yS(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return nS(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const Ov={name:"characterReference",tokenize:vS};function vS(e,t,n){const r=this;let i=0,s,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=$t,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=tS,d):(e.enter("characterReferenceValue"),s=7,a=Tu,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===$t&&!ip(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<s?(e.consume(p),d):n(p)}}const Zh={partial:!0,tokenize:wS},em={concrete:!0,name:"codeFenced",tokenize:bS};function bS(e,t,n){const r=this,i={partial:!0,tokenize:A};let s=0,a=0,l;return c;function c(C){return u(C)}function u(C){const P=r.events[r.events.length-1];return s=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,l=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===l?(a++,e.consume(C),d):a<3?n(C):(e.exit("codeFencedFenceSequence"),Te(C)?Oe(e,p,"whitespace")(C):p(C))}function p(C){return C===null||we(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(Zh,v,j)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(C))}function f(C){return C===null||we(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(C)):Te(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Oe(e,h,"whitespace")(C)):C===96&&C===l?n(C):(e.consume(C),f)}function h(C){return C===null||we(C)?p(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(C))}function g(C){return C===null||we(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(C)):C===96&&C===l?n(C):(e.consume(C),g)}function v(C){return e.attempt(i,j,w)(C)}function w(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),m}function m(C){return s>0&&Te(C)?Oe(e,x,"linePrefix",s+1)(C):x(C)}function x(C){return C===null||we(C)?e.check(Zh,v,j)(C):(e.enter("codeFlowValue"),y(C))}function y(C){return C===null||we(C)?(e.exit("codeFlowValue"),x(C)):(e.consume(C),y)}function j(C){return e.exit("codeFenced"),t(C)}function A(C,P,N){let D=0;return E;function E(I){return C.enter("lineEnding"),C.consume(I),C.exit("lineEnding"),M}function M(I){return C.enter("codeFencedFence"),Te(I)?Oe(C,L,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):L(I)}function L(I){return I===l?(C.enter("codeFencedFenceSequence"),U(I)):N(I)}function U(I){return I===l?(D++,C.consume(I),U):D>=a?(C.exit("codeFencedFenceSequence"),Te(I)?Oe(C,T,"whitespace")(I):T(I)):N(I)}function T(I){return I===null||we(I)?(C.exit("codeFencedFence"),P(I)):N(I)}}}function wS(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const sc={name:"codeIndented",tokenize:_S},kS={partial:!0,tokenize:jS};function _S(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Oe(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):we(u)?e.attempt(kS,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||we(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function jS(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):we(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Oe(e,s,"linePrefix",5)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):we(a)?i(a):n(a)}}const SS={name:"codeText",previous:NS,resolve:CS,tokenize:ES};function CS(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function NS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ES(e,t,n){let r=0,i,s;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(s=e.enter("codeTextSequence"),i=0,d(p)):we(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||we(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(s.type="codeTextData",u(p))}}class zS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Ji(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Ji(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Ji(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Ji(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Ji(this.left,n.reverse())}}}function Ji(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function $v(e){const t={};let n=-1,r,i,s,a,l,c,u;const d=new zS(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,TS(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return jn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function TS(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,h=n,g=0,v=0;const w=[v];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(v=f+1,w.push(v),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):w.pop(),f=w.length;f--;){const m=l.slice(w[f],w[f+1]),x=s.pop();c.push([x,x+m.length-1]),e.splice(x,2,m)}for(c.reverse(),f=-1;++f<c.length;)u[g+c[f][0]]=g+c[f][1],g+=c[f][1]-c[f][0]-1;return u}const AS={resolve:LS,tokenize:MS},PS={partial:!0,tokenize:RS};function LS(e){return $v(e),e}function MS(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):we(l)?e.check(PS,a,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function RS(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Oe(e,s,"linePrefix")}function s(a){if(a===null||we(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Dv(e,t,n,r,i,s,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(m){return m===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(m),e.exit(s),f):m===null||m===32||m===41||zu(m)?n(m):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),v(m))}function f(m){return m===62?(e.enter(s),e.consume(m),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(m))}function h(m){return m===62?(e.exit("chunkString"),e.exit(l),f(m)):m===null||m===60||we(m)?n(m):(e.consume(m),m===92?g:h)}function g(m){return m===60||m===62||m===92?(e.consume(m),h):h(m)}function v(m){return!d&&(m===null||m===41||Tt(m))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(m)):d<u&&m===40?(e.consume(m),d++,v):m===41?(e.consume(m),d--,v):m===null||m===32||m===40||zu(m)?n(m):(e.consume(m),m===92?w:v)}function w(m){return m===40||m===41||m===92?(e.consume(m),v):v(m)}}function Fv(e,t,n,r,i,s){const a=this;let l=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return l>999||h===null||h===91||h===93&&!c||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):we(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||we(h)||l++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!Te(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),l++,p):p(h)}}function Bv(e,t,n,r,i,s){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(s),u(f))}function u(f){return f===a?(e.exit(s),c(a)):f===null?n(f):we(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Oe(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||we(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function yo(e,t){let n;return r;function r(i){return we(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Te(i)?Oe(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const IS={name:"definition",tokenize:$S},OS={partial:!0,tokenize:DS};function $S(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return Fv.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=di(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return Tt(h)?yo(e,u)(h):u(h)}function u(h){return Dv(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(OS,p,p)(h)}function p(h){return Te(h)?Oe(e,f,"whitespace")(h):f(h)}function f(h){return h===null||we(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function DS(e,t,n){return r;function r(l){return Tt(l)?yo(e,i)(l):n(l)}function i(l){return Bv(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return Te(l)?Oe(e,a,"whitespace")(l):a(l)}function a(l){return l===null||we(l)?t(l):n(l)}}const FS={name:"hardBreakEscape",tokenize:BS};function BS(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return we(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const US={name:"headingAtx",resolve:VS,tokenize:WS};function VS(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},jn(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function WS(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||Tt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||we(d)?(e.exit("atxHeading"),t(d)):Te(d)?Oe(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||Tt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const HS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],tm=["pre","script","style","textarea"],qS={concrete:!0,name:"htmlFlow",resolveTo:GS,tokenize:YS},JS={partial:!0,tokenize:XS},KS={partial:!0,tokenize:QS};function GS(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function YS(e,t,n){const r=this;let i,s,a,l,c;return u;function u(b){return d(b)}function d(b){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(b),p}function p(b){return b===33?(e.consume(b),f):b===47?(e.consume(b),s=!0,v):b===63?(e.consume(b),i=3,r.interrupt?t:_):yn(b)?(e.consume(b),a=String.fromCharCode(b),w):n(b)}function f(b){return b===45?(e.consume(b),i=2,h):b===91?(e.consume(b),i=5,l=0,g):yn(b)?(e.consume(b),i=4,r.interrupt?t:_):n(b)}function h(b){return b===45?(e.consume(b),r.interrupt?t:_):n(b)}function g(b){const W="CDATA[";return b===W.charCodeAt(l++)?(e.consume(b),l===W.length?r.interrupt?t:L:g):n(b)}function v(b){return yn(b)?(e.consume(b),a=String.fromCharCode(b),w):n(b)}function w(b){if(b===null||b===47||b===62||Tt(b)){const W=b===47,S=a.toLowerCase();return!W&&!s&&tm.includes(S)?(i=1,r.interrupt?t(b):L(b)):HS.includes(a.toLowerCase())?(i=6,W?(e.consume(b),m):r.interrupt?t(b):L(b)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(b):s?x(b):y(b))}return b===45||$t(b)?(e.consume(b),a+=String.fromCharCode(b),w):n(b)}function m(b){return b===62?(e.consume(b),r.interrupt?t:L):n(b)}function x(b){return Te(b)?(e.consume(b),x):E(b)}function y(b){return b===47?(e.consume(b),E):b===58||b===95||yn(b)?(e.consume(b),j):Te(b)?(e.consume(b),y):E(b)}function j(b){return b===45||b===46||b===58||b===95||$t(b)?(e.consume(b),j):A(b)}function A(b){return b===61?(e.consume(b),C):Te(b)?(e.consume(b),A):y(b)}function C(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),c=b,P):Te(b)?(e.consume(b),C):N(b)}function P(b){return b===c?(e.consume(b),c=null,D):b===null||we(b)?n(b):(e.consume(b),P)}function N(b){return b===null||b===34||b===39||b===47||b===60||b===61||b===62||b===96||Tt(b)?A(b):(e.consume(b),N)}function D(b){return b===47||b===62||Te(b)?y(b):n(b)}function E(b){return b===62?(e.consume(b),M):n(b)}function M(b){return b===null||we(b)?L(b):Te(b)?(e.consume(b),M):n(b)}function L(b){return b===45&&i===2?(e.consume(b),$):b===60&&i===1?(e.consume(b),z):b===62&&i===4?(e.consume(b),H):b===63&&i===3?(e.consume(b),_):b===93&&i===5?(e.consume(b),R):we(b)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(JS,K,U)(b)):b===null||we(b)?(e.exit("htmlFlowData"),U(b)):(e.consume(b),L)}function U(b){return e.check(KS,T,K)(b)}function T(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),I}function I(b){return b===null||we(b)?U(b):(e.enter("htmlFlowData"),L(b))}function $(b){return b===45?(e.consume(b),_):L(b)}function z(b){return b===47?(e.consume(b),a="",O):L(b)}function O(b){if(b===62){const W=a.toLowerCase();return tm.includes(W)?(e.consume(b),H):L(b)}return yn(b)&&a.length<8?(e.consume(b),a+=String.fromCharCode(b),O):L(b)}function R(b){return b===93?(e.consume(b),_):L(b)}function _(b){return b===62?(e.consume(b),H):b===45&&i===2?(e.consume(b),_):L(b)}function H(b){return b===null||we(b)?(e.exit("htmlFlowData"),K(b)):(e.consume(b),H)}function K(b){return e.exit("htmlFlow"),t(b)}}function QS(e,t,n){const r=this;return i;function i(a){return we(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):n(a)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function XS(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(hl,t,n)}}const ZS={name:"htmlText",tokenize:eC};function eC(e,t,n){const r=this;let i,s,a;return l;function l(_){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(_),c}function c(_){return _===33?(e.consume(_),u):_===47?(e.consume(_),A):_===63?(e.consume(_),y):yn(_)?(e.consume(_),N):n(_)}function u(_){return _===45?(e.consume(_),d):_===91?(e.consume(_),s=0,g):yn(_)?(e.consume(_),x):n(_)}function d(_){return _===45?(e.consume(_),h):n(_)}function p(_){return _===null?n(_):_===45?(e.consume(_),f):we(_)?(a=p,z(_)):(e.consume(_),p)}function f(_){return _===45?(e.consume(_),h):p(_)}function h(_){return _===62?$(_):_===45?f(_):p(_)}function g(_){const H="CDATA[";return _===H.charCodeAt(s++)?(e.consume(_),s===H.length?v:g):n(_)}function v(_){return _===null?n(_):_===93?(e.consume(_),w):we(_)?(a=v,z(_)):(e.consume(_),v)}function w(_){return _===93?(e.consume(_),m):v(_)}function m(_){return _===62?$(_):_===93?(e.consume(_),m):v(_)}function x(_){return _===null||_===62?$(_):we(_)?(a=x,z(_)):(e.consume(_),x)}function y(_){return _===null?n(_):_===63?(e.consume(_),j):we(_)?(a=y,z(_)):(e.consume(_),y)}function j(_){return _===62?$(_):y(_)}function A(_){return yn(_)?(e.consume(_),C):n(_)}function C(_){return _===45||$t(_)?(e.consume(_),C):P(_)}function P(_){return we(_)?(a=P,z(_)):Te(_)?(e.consume(_),P):$(_)}function N(_){return _===45||$t(_)?(e.consume(_),N):_===47||_===62||Tt(_)?D(_):n(_)}function D(_){return _===47?(e.consume(_),$):_===58||_===95||yn(_)?(e.consume(_),E):we(_)?(a=D,z(_)):Te(_)?(e.consume(_),D):$(_)}function E(_){return _===45||_===46||_===58||_===95||$t(_)?(e.consume(_),E):M(_)}function M(_){return _===61?(e.consume(_),L):we(_)?(a=M,z(_)):Te(_)?(e.consume(_),M):D(_)}function L(_){return _===null||_===60||_===61||_===62||_===96?n(_):_===34||_===39?(e.consume(_),i=_,U):we(_)?(a=L,z(_)):Te(_)?(e.consume(_),L):(e.consume(_),T)}function U(_){return _===i?(e.consume(_),i=void 0,I):_===null?n(_):we(_)?(a=U,z(_)):(e.consume(_),U)}function T(_){return _===null||_===34||_===39||_===60||_===61||_===96?n(_):_===47||_===62||Tt(_)?D(_):(e.consume(_),T)}function I(_){return _===47||_===62||Tt(_)?D(_):n(_)}function $(_){return _===62?(e.consume(_),e.exit("htmlTextData"),e.exit("htmlText"),t):n(_)}function z(_){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),O}function O(_){return Te(_)?Oe(e,R,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):R(_)}function R(_){return e.enter("htmlTextData"),a(_)}}const sp={name:"labelEnd",resolveAll:iC,resolveTo:oC,tokenize:sC},tC={tokenize:aC},nC={tokenize:lC},rC={tokenize:cC};function iC(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&jn(e,0,e.length,n),e}function oC(e,t){let n=e.length,r=0,i,s,a,l;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Kt(l,e.slice(s+1,s+r+3)),l=Kt(l,[["enter",d,t]]),l=Kt(l,op(t.parser.constructs.insideSpan.null,e.slice(s+r+4,a-3),t)),l=Kt(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Kt(l,e.slice(a+1)),l=Kt(l,[["exit",c,t]]),jn(e,s,e.length,l),e}function sC(e,t,n){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(f){return s?s._inactive?p(f):(a=r.parser.defined.includes(di(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(tC,d,a?d:p)(f):f===91?e.attempt(nC,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(rC,d,p)(f)}function d(f){return t(f)}function p(f){return s._balanced=!0,n(f)}}function aC(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return Tt(p)?yo(e,s)(p):s(p)}function s(p){return p===41?d(p):Dv(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return Tt(p)?yo(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Bv(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return Tt(p)?yo(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function lC(e,t,n){const r=this;return i;function i(l){return Fv.call(r,e,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(di(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function cC(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const uC={name:"labelStartImage",resolveAll:sp.resolveAll,tokenize:dC};function dC(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const pC={name:"labelStartLink",resolveAll:sp.resolveAll,tokenize:fC};function fC(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const ac={name:"lineEnding",tokenize:hC};function hC(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Oe(e,t,"linePrefix")}}const Zs={name:"thematicBreak",tokenize:mC};function mC(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||we(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Te(u)?Oe(e,l,"whitespace")(u):l(u))}}const kt={continuation:{tokenize:vC},exit:wC,name:"list",tokenize:yC},gC={partial:!0,tokenize:kC},xC={partial:!0,tokenize:bC};function yC(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(h){const g=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Tu(h)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Zs,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return Tu(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(hl,r.interrupt?n:d,e.attempt(gC,f,p))}function d(h){return r.containerState.initialBlankLine=!0,s++,f(h)}function p(h){return Te(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function vC(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(hl,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Oe(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!Te(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(xC,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Oe(e,e.attempt(kt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function bC(e,t,n){const r=this;return Oe(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function wC(e){e.exit(this.containerState.type)}function kC(e,t,n){const r=this;return Oe(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!Te(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const nm={name:"setextUnderline",resolveTo:_C,tokenize:jC};function _C(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",a,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function jC(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Te(u)?Oe(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||we(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const SC={tokenize:CC};function CC(e){const t=this,n=e.attempt(hl,r,e.attempt(this.parser.constructs.flowInitial,i,Oe(e,e.attempt(this.parser.constructs.flow,i,e.attempt(AS,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const NC={resolveAll:Vv()},EC=Uv("string"),zC=Uv("text");function Uv(e){return{resolveAll:Vv(e==="text"?TC:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,l);return a;function a(d){return u(d)?s(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Vv(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function TC(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const AC={42:kt,43:kt,45:kt,48:kt,49:kt,50:kt,51:kt,52:kt,53:kt,54:kt,55:kt,56:kt,57:kt,62:Rv},PC={91:IS},LC={[-2]:sc,[-1]:sc,32:sc},MC={35:US,42:Zs,45:[nm,Zs],60:qS,61:nm,95:Zs,96:em,126:em},RC={38:Ov,92:Iv},IC={[-5]:ac,[-4]:ac,[-3]:ac,33:uC,38:Ov,42:Au,60:[pS,ZS],91:pC,92:[FS,Iv],93:sp,95:Au,96:SS},OC={null:[Au,NC]},$C={null:[42,95]},DC={null:[]},FC=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:$C,contentInitial:PC,disable:DC,document:AC,flow:MC,flowInitial:LC,insideSpan:OC,string:RC,text:IC},Symbol.toStringTag,{value:"Module"}));function BC(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],l=[];const c={attempt:P(A),check:P(C),consume:x,enter:y,exit:j,interrupt:P(C,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:g,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function p(M){return a=Kt(a,M),w(),a[a.length-1]!==null?[]:(N(t,0),u.events=op(s,u.events,u),u.events)}function f(M,L){return VC(h(M),L)}function h(M){return UC(a,M)}function g(){const{_bufferIndex:M,_index:L,line:U,column:T,offset:I}=r;return{_bufferIndex:M,_index:L,line:U,column:T,offset:I}}function v(M){i[M.line]=M.column,E()}function w(){let M;for(;r._index<a.length;){const L=a[r._index];if(typeof L=="string")for(M=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===M&&r._bufferIndex<L.length;)m(L.charCodeAt(r._bufferIndex));else m(L)}}function m(M){d=d(M)}function x(M){we(M)?(r.line++,r.column=1,r.offset+=M===-3?2:1,E()):M!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=M}function y(M,L){const U=L||{};return U.type=M,U.start=g(),u.events.push(["enter",U,u]),l.push(U),U}function j(M){const L=l.pop();return L.end=g(),u.events.push(["exit",L,u]),L}function A(M,L){N(M,L.from)}function C(M,L){L.restore()}function P(M,L){return U;function U(T,I,$){let z,O,R,_;return Array.isArray(T)?K(T):"tokenize"in T?K([T]):H(T);function H(V){return ie;function ie(ae){const q=ae!==null&&V[ae],F=ae!==null&&V.null,G=[...Array.isArray(q)?q:q?[q]:[],...Array.isArray(F)?F:F?[F]:[]];return K(G)(ae)}}function K(V){return z=V,O=0,V.length===0?$:b(V[O])}function b(V){return ie;function ie(ae){return _=D(),R=V,V.partial||(u.currentConstruct=V),V.name&&u.parser.constructs.disable.null.includes(V.name)?S():V.tokenize.call(L?Object.assign(Object.create(u),L):u,c,W,S)(ae)}}function W(V){return M(R,_),I}function S(V){return _.restore(),++O<z.length?b(z[O]):$}}}function N(M,L){M.resolveAll&&!s.includes(M)&&s.push(M),M.resolve&&jn(u.events,L,u.events.length-L,M.resolve(u.events.slice(L),u)),M.resolveTo&&(u.events=M.resolveTo(u.events,u))}function D(){const M=g(),L=u.previous,U=u.currentConstruct,T=u.events.length,I=Array.from(l);return{from:T,restore:$};function $(){r=M,u.previous=L,u.currentConstruct=U,u.events.length=T,l=I,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function UC(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function VC(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function WC(e){const r={constructs:Q2([FC,...(e||{}).extensions||[]]),content:i(oS),defined:[],document:i(aS),flow:i(SC),lazy:{},string:i(EC),text:i(zC)};return r;function i(s){return a;function a(l){return BC(r,s,l)}}}function HC(e){for(;!$v(e););return e}const rm=/[\0\t\n\r]/g;function qC(){let e=1,t="",n=!0,r;return i;function i(s,a,l){const c=[];let u,d,p,f,h;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),p=0,t="",n&&(s.charCodeAt(0)===65279&&p++,n=void 0);p<s.length;){if(rm.lastIndex=p,u=rm.exec(s),f=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(f),!u){t=s.slice(p);break}if(h===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(s.slice(p,f)),e+=f-p),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const JC=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function KC(e){return e.replace(JC,GC)}function GC(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return Mv(n.slice(s?2:1),s?16:10)}return ip(n)||e}const Wv={}.hasOwnProperty;function YC(e,t,n){return typeof t!="string"&&(n=t,t=void 0),QC(n)(HC(WC(n).document().write(qC()(e,t,!0))))}function QC(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(be),autolinkProtocol:D,autolinkEmail:D,atxHeading:s(ge),blockQuote:s(F),characterEscape:D,characterReference:D,codeFenced:s(G),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(G,a),codeText:s(X,a),codeTextData:D,data:D,codeFlowValue:D,definition:s(Q),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(le),hardBreakEscape:s(ke),hardBreakTrailing:s(ke),htmlFlow:s(ee,a),htmlFlowData:D,htmlText:s(ee,a),htmlTextData:D,image:s(ue),label:a,link:s(be),listItem:s(Ce),listItemValue:f,listOrdered:s(se,p),listUnordered:s(se),paragraph:s(J),reference:b,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(ge),strong:s(Z),thematicBreak:s(xe)},exit:{atxHeading:c(),atxHeadingSequence:A,autolink:c(),autolinkEmail:q,autolinkProtocol:ae,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:S,characterReferenceMarkerNumeric:S,characterReferenceValue:V,characterReference:ie,codeFenced:c(w),codeFencedFence:v,codeFencedFenceInfo:h,codeFencedFenceMeta:g,codeFlowValue:E,codeIndented:c(m),codeText:c(I),codeTextData:E,data:E,definition:c(),definitionDestinationString:j,definitionLabelString:x,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(L),hardBreakTrailing:c(L),htmlFlow:c(U),htmlFlowData:E,htmlText:c(T),htmlTextData:E,image:c(z),label:R,labelText:O,lineEnding:M,link:c($),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:W,resourceDestinationString:_,resourceTitleString:H,resource:K,setextHeading:c(N),setextHeadingLineSequence:P,setextHeadingText:C,strong:c(),thematicBreak:c()}};Hv(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(Y){let re={type:"root",children:[]};const ye={stack:[re],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},ve=[];let _e=-1;for(;++_e<Y.length;)if(Y[_e][1].type==="listOrdered"||Y[_e][1].type==="listUnordered")if(Y[_e][0]==="enter")ve.push(_e);else{const Ue=ve.pop();_e=i(Y,Ue,_e)}for(_e=-1;++_e<Y.length;){const Ue=t[Y[_e][0]];Wv.call(Ue,Y[_e][1].type)&&Ue[Y[_e][1].type].call(Object.assign({sliceSerialize:Y[_e][2].sliceSerialize},ye),Y[_e][1])}if(ye.tokenStack.length>0){const Ue=ye.tokenStack[ye.tokenStack.length-1];(Ue[1]||im).call(ye,void 0,Ue[0])}for(re.position={start:Wn(Y.length>0?Y[0][1].start:{line:1,column:1,offset:0}),end:Wn(Y.length>0?Y[Y.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<t.transforms.length;)re=t.transforms[_e](re)||re;return re}function i(Y,re,ye){let ve=re-1,_e=-1,Ue=!1,ct,nt,Ee,rt;for(;++ve<=ye;){const qe=Y[ve];switch(qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{qe[0]==="enter"?_e++:_e--,rt=void 0;break}case"lineEndingBlank":{qe[0]==="enter"&&(ct&&!rt&&!_e&&!Ee&&(Ee=ve),rt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:rt=void 0}if(!_e&&qe[0]==="enter"&&qe[1].type==="listItemPrefix"||_e===-1&&qe[0]==="exit"&&(qe[1].type==="listUnordered"||qe[1].type==="listOrdered")){if(ct){let Cn=ve;for(nt=void 0;Cn--;){const Ht=Y[Cn];if(Ht[1].type==="lineEnding"||Ht[1].type==="lineEndingBlank"){if(Ht[0]==="exit")continue;nt&&(Y[nt][1].type="lineEndingBlank",Ue=!0),Ht[1].type="lineEnding",nt=Cn}else if(!(Ht[1].type==="linePrefix"||Ht[1].type==="blockQuotePrefix"||Ht[1].type==="blockQuotePrefixWhitespace"||Ht[1].type==="blockQuoteMarker"||Ht[1].type==="listItemIndent"))break}Ee&&(!nt||Ee<nt)&&(ct._spread=!0),ct.end=Object.assign({},nt?Y[nt][1].start:qe[1].end),Y.splice(nt||ve,0,["exit",ct,qe[2]]),ve++,ye++}if(qe[1].type==="listItemPrefix"){const Cn={type:"listItem",_spread:!1,start:Object.assign({},qe[1].start),end:void 0};ct=Cn,Y.splice(ve,0,["enter",Cn,qe[2]]),ve++,ye++,Ee=void 0,rt=!0}}}return Y[re][1]._spread=Ue,ye}function s(Y,re){return ye;function ye(ve){l.call(this,Y(ve),ve),re&&re.call(this,ve)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(Y,re,ye){this.stack[this.stack.length-1].children.push(Y),this.stack.push(Y),this.tokenStack.push([re,ye||void 0]),Y.position={start:Wn(re.start),end:void 0}}function c(Y){return re;function re(ye){Y&&Y.call(this,ye),u.call(this,ye)}}function u(Y,re){const ye=this.stack.pop(),ve=this.tokenStack.pop();if(ve)ve[0].type!==Y.type&&(re?re.call(this,Y,ve[0]):(ve[1]||im).call(this,Y,ve[0]));else throw new Error("Cannot close `"+Y.type+"` ("+xo({start:Y.start,end:Y.end})+"): it’s not open");ye.position.end=Wn(Y.end)}function d(){return G2(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(Y){if(this.data.expectingFirstListItemValue){const re=this.stack[this.stack.length-2];re.start=Number.parseInt(this.sliceSerialize(Y),10),this.data.expectingFirstListItemValue=void 0}}function h(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.lang=Y}function g(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.meta=Y}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.value=Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.value=Y.replace(/(\r?\n|\r)$/g,"")}function x(Y){const re=this.resume(),ye=this.stack[this.stack.length-1];ye.label=re,ye.identifier=di(this.sliceSerialize(Y)).toLowerCase()}function y(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.title=Y}function j(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.url=Y}function A(Y){const re=this.stack[this.stack.length-1];if(!re.depth){const ye=this.sliceSerialize(Y).length;re.depth=ye}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function P(Y){const re=this.stack[this.stack.length-1];re.depth=this.sliceSerialize(Y).codePointAt(0)===61?1:2}function N(){this.data.setextHeadingSlurpLineEnding=void 0}function D(Y){const ye=this.stack[this.stack.length-1].children;let ve=ye[ye.length-1];(!ve||ve.type!=="text")&&(ve=ce(),ve.position={start:Wn(Y.start),end:void 0},ye.push(ve)),this.stack.push(ve)}function E(Y){const re=this.stack.pop();re.value+=this.sliceSerialize(Y),re.position.end=Wn(Y.end)}function M(Y){const re=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ye=re.children[re.children.length-1];ye.position.end=Wn(Y.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(re.type)&&(D.call(this,Y),E.call(this,Y))}function L(){this.data.atHardBreak=!0}function U(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.value=Y}function T(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.value=Y}function I(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.value=Y}function $(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const re=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=re,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function z(){const Y=this.stack[this.stack.length-1];if(this.data.inReference){const re=this.data.referenceType||"shortcut";Y.type+="Reference",Y.referenceType=re,delete Y.url,delete Y.title}else delete Y.identifier,delete Y.label;this.data.referenceType=void 0}function O(Y){const re=this.sliceSerialize(Y),ye=this.stack[this.stack.length-2];ye.label=KC(re),ye.identifier=di(re).toLowerCase()}function R(){const Y=this.stack[this.stack.length-1],re=this.resume(),ye=this.stack[this.stack.length-1];if(this.data.inReference=!0,ye.type==="link"){const ve=Y.children;ye.children=ve}else ye.alt=re}function _(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.url=Y}function H(){const Y=this.resume(),re=this.stack[this.stack.length-1];re.title=Y}function K(){this.data.inReference=void 0}function b(){this.data.referenceType="collapsed"}function W(Y){const re=this.resume(),ye=this.stack[this.stack.length-1];ye.label=re,ye.identifier=di(this.sliceSerialize(Y)).toLowerCase(),this.data.referenceType="full"}function S(Y){this.data.characterReferenceType=Y.type}function V(Y){const re=this.sliceSerialize(Y),ye=this.data.characterReferenceType;let ve;ye?(ve=Mv(re,ye==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ve=ip(re);const _e=this.stack[this.stack.length-1];_e.value+=ve}function ie(Y){const re=this.stack.pop();re.position.end=Wn(Y.end)}function ae(Y){E.call(this,Y);const re=this.stack[this.stack.length-1];re.url=this.sliceSerialize(Y)}function q(Y){E.call(this,Y);const re=this.stack[this.stack.length-1];re.url="mailto:"+this.sliceSerialize(Y)}function F(){return{type:"blockquote",children:[]}}function G(){return{type:"code",lang:null,meta:null,value:""}}function X(){return{type:"inlineCode",value:""}}function Q(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function le(){return{type:"emphasis",children:[]}}function ge(){return{type:"heading",depth:0,children:[]}}function ke(){return{type:"break"}}function ee(){return{type:"html",value:""}}function ue(){return{type:"image",title:null,url:"",alt:null}}function be(){return{type:"link",title:null,url:"",children:[]}}function se(Y){return{type:"list",ordered:Y.type==="listOrdered",start:null,spread:Y._spread,children:[]}}function Ce(Y){return{type:"listItem",spread:Y._spread,checked:null,children:[]}}function J(){return{type:"paragraph",children:[]}}function Z(){return{type:"strong",children:[]}}function ce(){return{type:"text",value:""}}function xe(){return{type:"thematicBreak"}}}function Wn(e){return{line:e.line,column:e.column,offset:e.offset}}function Hv(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Hv(e,r):XC(e,r)}}function XC(e,t){let n;for(n in t)if(Wv.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function im(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+xo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+xo({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+xo({start:t.start,end:t.end})+") is still open")}function ZC(e){const t=this;t.parser=n;function n(r){return YC(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function eN(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function tN(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function nN(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function rN(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function iN(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function oN(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Li(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function sN(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function aN(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function qv(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function lN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return qv(e,t);const i={src:Li(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function cN(e,t){const n={src:Li(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function uN(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function dN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return qv(e,t);const i={href:Li(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function pN(e,t){const n={href:Li(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function fN(e,t,n){const r=e.all(t),i=n?hN(n):Jv(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function hN(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Jv(n[r])}return t}function Jv(e){const t=e.spread;return t??e.children.length>1}function mN(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function gN(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function xN(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function yN(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function vN(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=ep(t.children[1]),c=Nv(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function bN(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},h=a?a[c]:void 0;h&&(f.align=h);let g={type:"element",tagName:s,properties:f,children:[]};p&&(g.children=e.all(p),e.patch(p,g),g=e.applyData(p,g)),u.push(g)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function wN(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const om=9,sm=32;function kN(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(am(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(am(t.slice(i),i>0,!1)),s.join("")}function am(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===om||s===sm;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===om||s===sm;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function _N(e,t){const n={type:"text",value:kN(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function jN(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const SN={blockquote:eN,break:tN,code:nN,delete:rN,emphasis:iN,footnoteReference:oN,heading:sN,html:aN,imageReference:lN,image:cN,inlineCode:uN,linkReference:dN,link:pN,listItem:fN,list:mN,paragraph:gN,root:xN,strong:yN,table:vN,tableCell:wN,tableRow:bN,text:_N,thematicBreak:jN,toml:As,yaml:As,definition:As,footnoteDefinition:As};function As(){}const Kv=-1,ml=0,vo=1,Ra=2,ap=3,lp=4,cp=5,up=6,Gv=7,Yv=8,lm=typeof self=="object"?self:globalThis,CN=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case ml:case Kv:return n(a,i);case vo:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Ra:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case ap:return n(new Date(a),i);case lp:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case cp:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case up:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case Gv:{const{name:l,message:c}=a;return n(new lm[l](c),i)}case Yv:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new lm[s](a),i)};return r},cm=e=>CN(new Map,e)(0),Vr="",{toString:NN}={},{keys:EN}=Object,Ki=e=>{const t=typeof e;if(t!=="object"||!e)return[ml,t];const n=NN.call(e).slice(8,-1);switch(n){case"Array":return[vo,Vr];case"Object":return[Ra,Vr];case"Date":return[ap,Vr];case"RegExp":return[lp,Vr];case"Map":return[cp,Vr];case"Set":return[up,Vr];case"DataView":return[vo,n]}return n.includes("Array")?[vo,n]:n.includes("Error")?[Gv,n]:[Ra,n]},Ps=([e,t])=>e===ml&&(t==="function"||t==="symbol"),zN=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},s=a=>{if(n.has(a))return n.get(a);let[l,c]=Ki(a);switch(l){case ml:{let d=a;switch(c){case"bigint":l=Yv,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Kv],a)}return i([l,d],a)}case vo:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(s(f));return p}case Ra:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],p=i([l,d],a);for(const f of EN(a))(e||!Ps(Ki(a[f])))&&d.push([s(f),s(a[f])]);return p}case ap:return i([l,a.toISOString()],a);case lp:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case cp:{const d=[],p=i([l,d],a);for(const[f,h]of a)(e||!(Ps(Ki(f))||Ps(Ki(h))))&&d.push([s(f),s(h)]);return p}case up:{const d=[],p=i([l,d],a);for(const f of a)(e||!Ps(Ki(f)))&&d.push(s(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return s},um=(e,{json:t,lossy:n}={})=>{const r=[];return zN(!(t||n),!!t,new Map,r)(e),r},Ia=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?cm(um(e,t)):structuredClone(e):(e,t)=>cm(um(e,t));function TN(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function AN(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function PN(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||TN,r=e.options.footnoteBackLabel||AN,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Li(p.toLowerCase());let h=0;const g=[],v=e.footnoteCounts.get(p);for(;v!==void 0&&++h<=v;){g.length>0&&g.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,h);typeof x=="string"&&(x={type:"text",value:x}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const w=d[d.length-1];if(w&&w.type==="element"&&w.tagName==="p"){const x=w.children[w.children.length-1];x&&x.type==="text"?x.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...g)}else d.push(...g);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,m),l.push(m)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ia(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Qv=function(e){if(e==null)return IN;if(typeof e=="function")return gl(e);if(typeof e=="object")return Array.isArray(e)?LN(e):MN(e);if(typeof e=="string")return RN(e);throw new Error("Expected function, string, or object as test")};function LN(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Qv(e[n]);return gl(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function MN(e){const t=e;return gl(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function RN(e){return gl(t);function t(n){return n&&n.type===e}}function gl(e){return t;function t(n,r,i){return!!(ON(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function IN(){return!0}function ON(e){return e!==null&&typeof e=="object"&&"type"in e}const Xv=[],$N=!0,dm=!1,DN="skip";function FN(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=Qv(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=Xv,g,v,w;if((!t||s(c,u,d[d.length-1]||void 0))&&(h=BN(n(c,d)),h[0]===dm))return h;if("children"in c&&c.children){const m=c;if(m.children&&h[0]!==DN)for(v=(r?m.children.length:-1)+a,w=d.concat(m);v>-1&&v<m.children.length;){const x=m.children[v];if(g=l(x,v,w)(),g[0]===dm)return g;v=typeof g[1]=="number"?g[1]:v+a}}return h}}}function BN(e){return Array.isArray(e)?e:typeof e=="number"?[$N,e]:e==null?Xv:[e]}function Zv(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),FN(e,s,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const Pu={}.hasOwnProperty,UN={};function VN(e,t){const n=t||UN,r=new Map,i=new Map,s=new Map,a={...SN,...n.handlers},l={all:u,applyData:HN,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:c,options:n,patch:WN,wrap:JN};return Zv(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,h=l.handlers[f];if(Pu.call(l.handlers,f)&&h)return h(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:v,...w}=d,m=Ia(w);return m.children=l.all(d),m}return Ia(d)}return(l.options.unknownHandler||qN)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const g=l.one(f[h],d);if(g){if(h&&f[h-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=pm(g.value)),!Array.isArray(g)&&g.type==="element")){const v=g.children[0];v&&v.type==="text"&&(v.value=pm(v.value))}Array.isArray(g)?p.push(...g):p.push(g)}}}return p}}function WN(e,t){e.position&&(t.position=N2(e))}function HN(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Ia(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function qN(e,t){const n=t.data||{},r="value"in t&&!(Pu.call(n,"hProperties")||Pu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function JN(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function pm(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function fm(e,t){const n=VN(e,t),r=n.one(e,void 0),i=PN(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function KN(e,t){return e&&"run"in e?async function(n,r){const i=fm(n,{file:r,...t});await e.run(i,r)}:function(n,r){return fm(n,{file:r,...e||t})}}function hm(e){if(e)throw e}var ea=Object.prototype.hasOwnProperty,e1=Object.prototype.toString,mm=Object.defineProperty,gm=Object.getOwnPropertyDescriptor,xm=function(t){return typeof Array.isArray=="function"?Array.isArray(t):e1.call(t)==="[object Array]"},ym=function(t){if(!t||e1.call(t)!=="[object Object]")return!1;var n=ea.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&ea.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||ea.call(t,i)},vm=function(t,n){mm&&n.name==="__proto__"?mm(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},bm=function(t,n){if(n==="__proto__")if(ea.call(t,n)){if(gm)return gm(t,n).value}else return;return t[n]},GN=function e(){var t,n,r,i,s,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=bm(l,n),i=bm(t,n),l!==i&&(d&&i&&(ym(i)||(s=xm(i)))?(s?(s=!1,a=r&&xm(r)?r:[]):a=r&&ym(r)?r:{},vm(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&vm(l,{name:n,newValue:i}));return l};const lc=qa(GN);function Lu(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function YN(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++s];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?QN(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function QN(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(a,...l){n||(n=!0,t(a,...l))}function s(a){i(null,a)}}const gn={basename:XN,dirname:ZN,extname:e4,join:t4,sep:"/"};function XN(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');is(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function ZN(e){if(is(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function e4(e){is(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function t4(...e){let t=-1,n;for(;++t<e.length;)is(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":n4(n)}function n4(e){is(e);const t=e.codePointAt(0)===47;let n=r4(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function r4(e,t){let n="",r=0,i=-1,s=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else l===46&&s>-1?s++:s=-1}return n}function is(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const i4={cwd:o4};function o4(){return"/"}function Mu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function s4(e){if(typeof e=="string")e=new URL(e);else if(!Mu(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return a4(e)}function a4(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const cc=["history","path","basename","stem","extname","dirname"];class t1{constructor(t){let n;t?Mu(t)?n={path:t}:typeof t=="string"||l4(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":i4.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<cc.length;){const s=cc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)cc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?gn.basename(this.path):void 0}set basename(t){dc(t,"basename"),uc(t,"basename"),this.path=gn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?gn.dirname(this.path):void 0}set dirname(t){wm(this.basename,"dirname"),this.path=gn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?gn.extname(this.path):void 0}set extname(t){if(uc(t,"extname"),wm(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=gn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Mu(t)&&(t=s4(t)),dc(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?gn.basename(this.path,this.extname):void 0}set stem(t){dc(t,"stem"),uc(t,"stem"),this.path=gn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new mt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function uc(e,t){if(e&&e.includes(gn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+gn.sep+"`")}function dc(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function wm(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function l4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const c4=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},u4={}.hasOwnProperty;class dp extends c4{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=YN()}copy(){const t=new dp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(lc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(hc("data",this.frozen),this.namespace[t]=n,this):u4.call(this.namespace,t)&&this.namespace[t]||void 0:t?(hc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ls(t),r=this.parser||this.Parser;return pc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),pc("process",this.parser||this.Parser),fc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const l=Ls(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const h=p,g=r.stringify(h,f);f4(g)?f.value=g:f.result=g,u(d,f)});function u(d,p){d||!p?a(d):s?s(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),pc("processSync",this.parser||this.Parser),fc("processSync",this.compiler||this.Compiler),this.process(t,i),_m("processSync","process",n),r;function i(s,a){n=!0,hm(s),r=a}}run(t,n,r){km(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,l){const c=Ls(n);i.run(t,c,u);function u(d,p,f){const h=p||t;d?l(d):a?a(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),_m("runSync","run",r),i;function s(a,l){hm(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Ls(n),i=this.compiler||this.Compiler;return fc("stringify",i),km(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(hc("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=lc(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[h,...g]=d;const v=r[f][1];Lu(v)&&Lu(h)&&(h=lc(!0,v,h)),r[f]=[u,h,...g]}}}}const d4=new dp().freeze();function pc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function fc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function hc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function km(e){if(!Lu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function _m(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ls(e){return p4(e)?e:new t1(e)}function p4(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function f4(e){return typeof e=="string"||h4(e)}function h4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const m4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",jm=[],Sm={allowDangerousHtml:!0},g4=/^(https?|ircs?|mailto|xmpp)$/i,x4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function n1(e){const t=y4(e),n=v4(e);return b4(t.runSync(t.parse(n),n),e)}function y4(e){const t=e.rehypePlugins||jm,n=e.remarkPlugins||jm,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Sm}:Sm;return d4().use(ZC).use(n).use(KN,r).use(t)}function v4(e){const t=e.children||"",n=new t1;return typeof t=="string"&&(n.value=t),n}function b4(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||w4;for(const d of x4)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+m4+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Zv(e,u),P2(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in oc)if(Object.hasOwn(oc,h)&&Object.hasOwn(d.properties,h)){const g=d.properties[h],v=oc[h];(v===null||v.includes(d.tagName))&&(d.properties[h]=c(String(g||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function w4(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||g4.test(e.slice(0,t))?e:""}function k4({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=k.useState(!1),[a,l]=k.useState(r),c=k.useRef(null),u=k.useRef(null);k.useEffect(()=>{if(e){const f=e.split(`
`).length,h=Math.max(r,Math.min(f*20+40,500));l(h)}},[e,r]),k.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&s(!1)}return k.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),o.jsxs("div",{ref:c,className:"markdown-editor",children:[o.jsx("style",{children:`
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
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(Xt,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(d_,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(n1,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function _4(e){return/^[a-zA-Z0-9_]+$/.test(e)}function j4({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:a}=ht(),[l,c]=k.useState(new Set(["basic","model","tools","subagents"])),[u,d]=k.useState(!1),[p,f]=k.useState(!1),[h,g]=k.useState(!1),[v,w]=k.useState(""),[m,x]=k.useState(null);if(!t)return null;function y(z){n(e.id,z)}function j(z){if(z===""){x(null),y({name:z});return}_4(z)?x(null):x("Name can only contain letters, numbers, and underscores"),e.type==="LlmAgent"?y({name:z,output_key:z}):y({name:z})}function A(z){const O=new Set(l);O.has(z)?O.delete(z):O.add(z),c(O)}const C=e.type==="LlmAgent",P=e;function N(z){C&&y({tools:[...P.tools,z]})}function D(z){C&&y({tools:P.tools.filter((O,R)=>R!==z)})}function E(z,O){if(!C)return;const R=[...P.tools];R[z]=O,y({tools:R})}function M(z){"sub_agents"in e&&y({sub_agents:[...e.sub_agents,z]})}function L(z){"sub_agents"in e&&y({sub_agents:e.sub_agents.filter(O=>O!==z)})}const U=t.agents.filter(z=>z.id!==e.id);async function T(){if(!(!t||!C)){d(!0);try{const z=P.instruction||"",O=z?`Current instruction to improve:

${z}

Please improve and expand this instruction while preserving its core intent.`:void 0,_=t.agents.some(K=>K.id===e.id)?void 0:e,H=await Xs(t.id,e.id,O,_);H.success&&H.prompt?y({instruction:H.prompt}):alert("Failed to generate prompt: "+(H.error||"Unknown error"))}catch(z){alert("Error generating prompt: "+z.message)}finally{d(!1)}}}async function I(){if(!(!t||!C||!v.trim())){d(!0);try{const O=`Current instruction:

${P.instruction||""}

---

Requested changes:
${v}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,_=t.agents.some(K=>K.id===e.id)?void 0:e,H=await Xs(t.id,e.id,O,_);H.success&&H.prompt?(y({instruction:H.prompt}),g(!1),w("")):alert("Failed to apply changes: "+(H.error||"Unknown error"))}catch(z){alert("Error applying changes: "+z.message)}finally{d(!1)}}}async function $(){if(!t||!C)return;const z=P.instruction;if(!z){alert("Please write an instruction first");return}f(!0);try{const O=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,R=await Xs(t.id,e.id,O);if(R.success&&R.prompt){let _=R.prompt.trim();_=_.replace(/^["']|["']$/g,"").trim();const H=_.split(/[.!?\n]/)[0].trim(),K=H.length>80?H.slice(0,77)+"...":H;y({description:K})}else alert("Failed to generate description: "+(R.error||"Unknown error"))}catch(O){alert("Error generating description: "+O.message)}finally{f(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Er,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:e.name,onChange:z=>j(z.target.value),placeholder:"Agent name",style:{borderColor:m?"var(--error)":void 0}}),m&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:m})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),s("run")},title:"Test this agent",children:[o.jsx(pr,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(Gi,{id:"basic",title:"Basic Info",icon:o.jsx(Er,{size:16}),expanded:l.has("basic"),onToggle:()=>A("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),C&&P.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:$,disabled:p,title:"Generate description from instruction",children:p?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:z=>y({description:z.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),C&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Instruction"}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(!h),disabled:u||!P.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:T,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),h&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:v,onChange:z=>w(z.target.value),placeholder:"Describe what changes you want...",onKeyDown:z=>{z.key==="Enter"&&v.trim()?I():z.key==="Escape"&&(g(!1),w(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:I,disabled:u||!v.trim(),children:"Apply"})]}),o.jsx(k4,{value:P.instruction,onChange:z=>y({instruction:z}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:P.output_key||"",onChange:z=>y({output_key:z.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(z=>o.jsx("option",{value:z.name,children:z.name},z.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:P.include_contents,onChange:z=>y({include_contents:z.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:P.disallow_transfer_to_parent,onChange:z=>y({disallow_transfer_to_parent:z.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:P.disallow_transfer_to_peers,onChange:z=>y({disallow_transfer_to_peers:z.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:z=>y({max_iterations:parseInt(z.target.value)||void 0}),placeholder:"No limit"})]})})]}),C&&o.jsx(Gi,{id:"model",title:"Model",icon:o.jsx(Hd,{size:16}),expanded:l.has("model"),onToggle:()=>A("model"),children:o.jsx(C4,{agent:P,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:z=>y({model:z})})}),C&&o.jsx(Gi,{id:"tools",title:`Tools (${P.tools.length})`,icon:o.jsx(un,{size:16}),expanded:l.has("tools"),onToggle:()=>A("tools"),children:o.jsx(S4,{tools:P.tools,onAdd:N,onRemove:D,onUpdate:E,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:U,skillsets:t.skillsets||[]})}),"sub_agents"in e&&o.jsx(Gi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(cv,{size:16}),expanded:l.has("subagents"),onToggle:()=>A("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(z=>{const O=t.agents.find(R=>R.id===z);return O?o.jsxs("div",{className:"sub-agent-chip",children:[O.name,o.jsx("button",{onClick:()=>L(z),children:o.jsx(Be,{size:12})})]},z):null}),o.jsxs("select",{value:"",onChange:z=>{z.target.value&&M(z.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),U.filter(z=>!e.sub_agents.includes(z.id)).map(z=>o.jsx("option",{value:z.id,children:z.name},z.id))]})]})}),o.jsx(Gi,{id:"callbacks",title:"Callbacks",icon:o.jsx(_n,{size:16}),expanded:l.has("callbacks"),onToggle:()=>A("callbacks"),children:o.jsx(N4,{agent:e,onUpdate:y,customCallbacks:t.custom_callbacks||[],isLlmAgent:C})})]})]})}function Gi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(Rt,{size:16}):o.jsx(_t,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function S4({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=k.useState(!1),[f,h]=k.useState({}),[g,v]=k.useState(""),w=Dt.useRef(null),m=Dt.useRef(null),[x,y]=k.useState(null),[j,A]=k.useState(new Set),C=(S,V)=>{if(!g.trim())return!0;const ie=g.toLowerCase();return S.toLowerCase().includes(ie)||((V==null?void 0:V.toLowerCase().includes(ie))??!1)},P=i.filter(S=>C(S.name,S.description)),N=s.filter(S=>C(S.name,S.description)),D=a.filter(S=>C(S.name,S.description)),E=l.filter(S=>C(S.name,S.description)),M=c.filter(S=>C(S.name,S.description)),L=u.filter(S=>C(S.name,S.description));function U(){if(w.current){const S=w.current.getBoundingClientRect(),V=window.innerHeight,ie=350,ae=V-S.bottom-16,q=S.top-16;if(ae>=200||ae>=q){const F=Math.min(ie,ae);h({top:S.bottom+4,left:S.left,maxHeight:F})}else{const F=Math.min(ie,q);h({top:S.top-F-4,left:S.left,maxHeight:F})}}p(!0),v(""),setTimeout(()=>{var S;return(S=m.current)==null?void 0:S.focus()},50)}function T(){p(!1),v("")}function I(S){t({type:"builtin",name:S}),T()}async function $(S){T();const V=S.tool_filter||[];if(y({server:S,enabledTools:new Set(V),availableTools:V.map(ie=>({name:ie,description:""})),isLoading:V.length===0,error:void 0}),V.length===0)try{const{testMcpServer:ie}=await N_(async()=>{const{testMcpServer:q}=await Promise.resolve().then(()=>Gk);return{testMcpServer:q}},void 0),ae=await ie({connection_type:S.connection_type,command:S.command,args:S.args,env:S.env,url:S.url,headers:S.headers,timeout:S.timeout||30});ae.success?y(q=>q?{...q,availableTools:ae.tools,enabledTools:new Set(ae.tools.map(F=>F.name)),isLoading:!1}:null):y(q=>q?{...q,isLoading:!1,error:ae.error||"Failed to connect to MCP server"}:null)}catch(ie){y(ae=>ae?{...ae,isLoading:!1,error:ie.message}:null)}}function z(S){if(!x)return;const V=new Set(x.enabledTools);V.has(S)?V.delete(S):V.add(S),y({...x,enabledTools:V})}function O(){if(!x)return;const S=Array.from(x.enabledTools);t({type:"mcp",server:{...x.server,tool_filter:S}}),y(null)}function R(S){const V=new Set(j);V.has(S)?V.delete(S):V.add(S),A(V)}function _(S,V){const ie=e[S];if(ie.type!=="mcp"||!ie.server)return;const ae=ie.server.tool_filter||[];let q;ae.includes(V)?q=ae.filter(F=>F!==V):q=[...ae,V],r(S,{...ie,server:{...ie.server,tool_filter:q}})}function H(S){t({type:"function",name:S.name,module_path:S.module_path}),T()}function K(S){const V=c.find(ie=>ie.id===S);t({type:"agent",agent_id:S,name:V==null?void 0:V.name}),T()}function b(S){const V=u.find(ie=>ie.id===S);t({type:"skillset",skillset_id:S,name:V==null?void 0:V.name}),T()}function W(S){return s.find(V=>V.name===S)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((S,V)=>{var ie;return S.type==="mcp"&&S.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>R(V),children:[j.has(V)?o.jsx(Rt,{size:14}):o.jsx(_t,{size:14}),o.jsx(un,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:S.server.name}),o.jsx("div",{className:"mcp-tool-count",children:S.server.tool_filter===null||S.server.tool_filter===void 0?"all tools":`${S.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:ae=>{ae.stopPropagation(),n(V)},children:o.jsx(Be,{size:14})})]}),j.has(V)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const ae=W(S.server.name),q=(ae==null?void 0:ae.tool_filter)||S.server.tool_filter||[],F=new Set(S.server.tool_filter||[]);return q.map(G=>o.jsxs("label",{className:`mcp-tool-chip ${F.has(G)?"enabled":"disabled"}`,onClick:()=>_(V,G),children:[o.jsx("input",{type:"checkbox",checked:F.has(G),onChange:()=>{},style:{display:"none"}}),G]},G))})()})})]},V):S.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(In,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:S.name||((ie=u.find(ae=>ae.id===S.skillset_id))==null?void 0:ie.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(V),children:o.jsx(Be,{size:14})})]},V):o.jsxs("div",{className:"tool-item",children:[o.jsx(un,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:S.name||S.agent_id}),o.jsx("div",{className:"tool-item-type",children:S.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(V),children:o.jsx(Be,{size:14})})]},V)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:w,className:"btn btn-secondary btn-sm",onClick:()=>d?T():U(),children:[o.jsx(Qe,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:T}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:m,type:"text",placeholder:"Search tools...",value:g,onChange:S=>v(S.target.value),onKeyDown:S=>S.key==="Escape"&&T()})}),P.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),P.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>I(S.name),children:[o.jsx("div",{className:"dropdown-item-name",children:S.name}),o.jsx("div",{className:"dropdown-item-desc",children:S.description})]},S.name))]}),N.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Known MCP Servers (",N.length,")"]}),N.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>$(S),children:[o.jsxs("div",{className:"dropdown-item-name",children:[S.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:S.tool_filter===null||S.tool_filter===void 0?"all tools":`${S.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:S.description})]},`known-${S.name}`))]}),D.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",D.length,")"]}),D.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>$(S),children:[o.jsxs("div",{className:"dropdown-item-name",children:[S.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:S.tool_filter===null||S.tool_filter===void 0?"all tools":`${S.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:S.description||"Custom MCP server"})]},`project-${S.id||S.name}`))]}),E.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),E.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>H(S),children:[o.jsx("div",{className:"dropdown-item-name",children:S.name}),o.jsx("div",{className:"dropdown-item-desc",children:S.description})]},S.id))]}),M.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),M.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>K(S.id),children:[o.jsx("div",{className:"dropdown-item-name",children:S.name}),o.jsx("div",{className:"dropdown-item-desc",children:S.type})]},S.id))]}),L.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",L.length,")"]}),L.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>b(S.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[S.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[S.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:S.description||"Vector knowledge base"})]},S.id))]}),g.trim()&&P.length===0&&N.length===0&&D.length===0&&E.length===0&&M.length===0&&L.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',g,'"']})]})]})]}),x&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",x.server.name]}),o.jsx("p",{children:x.server.description}),x.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):x.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",x.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...x,enabledTools:new Set(x.availableTools.map(S=>S.name))}),children:["Select All (",x.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...x,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:x.availableTools.map(S=>o.jsxs("div",{className:"mcp-tool-row",title:S.description||S.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:x.enabledTools.has(S.name),onChange:()=>z(S.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:x.enabledTools.has(S.name)?1:.5,cursor:"pointer"},onClick:()=>z(S.name),children:S.name})]},S.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>y(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:O,disabled:x.enabledTools.size===0,children:["Add ",x.enabledTools.size," Tools"]})]})]})})]})}function C4({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,h;const s=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!s,c=s||(()=>{if(!e.model)return n;const g=t.find(v=>{var w,m,x;return v.provider===((w=e.model)==null?void 0:w.provider)&&v.model_name===((m=e.model)==null?void 0:m.model_name)&&v.api_base===((x=e.model)==null?void 0:x.api_base)});return g==null?void 0:g.id})()||n||((h=t[0])==null?void 0:h.id);Dt.useEffect(()=>{var g,v,w,m,x;if(s){const y=t.find(j=>j.id===s);y&&(((g=e.model)==null?void 0:g.provider)!==y.provider||((v=e.model)==null?void 0:v.model_name)!==y.model_name||((w=e.model)==null?void 0:w.api_base)!==y.api_base||((m=e.model)==null?void 0:m.temperature)!==y.temperature||((x=e.model)==null?void 0:x.max_output_tokens)!==y.max_output_tokens)&&i({provider:y.provider,model_name:y.model_name,api_base:y.api_base,temperature:y.temperature,max_output_tokens:y.max_output_tokens,top_p:y.top_p,top_k:y.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,i]);function u(g){const v=t.find(w=>w.id===g);v&&i({provider:v.provider,model_name:v.model_name,api_base:v.api_base,temperature:v.temperature,max_output_tokens:v.max_output_tokens,top_p:v.top_p,top_k:v.top_k,fallbacks:[],_appModelId:g})}function d(){var g;if(a){const v=n||((g=t[0])==null?void 0:g.id);v&&u(v)}else{const v=e.model;if(v){const{_appModelId:w,...m}=v;i(m)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(g){const{_appModelId:v,...w}=e.model||{};i({...w,...g})}return t.find(g=>g.id===c),t.find(g=>g.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(g=>o.jsx("div",{className:`app-model-item ${c===g.id?"selected":""}`,onClick:()=>u(g.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[g.name,g.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(lv,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[g.provider," / ",g.model_name,g.api_base&&` • ${g.api_base}`]})]})},g.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&o.jsx("div",{className:"custom-model-form",children:o.jsx(dv,{projectId:r,values:e.model||{},onChange:p})})]})}const mc=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function N4({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[...mc,...n],s=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...s,...a]:s;function c(d,p){const f=e[d]||[],h=i.find(g=>g.id===p);h&&t({[d]:[...f,{module_path:h.module_path}]})}function u(d,p){const f=e[d]||[];t({[d]:f.filter((h,g)=>g!==p)})}return o.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:p})=>{const f=e[d]||[],h=i;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:p}),h.length>0&&o.jsxs("select",{value:"",onChange:g=>{g.target.value&&(c(d,g.target.value),g.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),o.jsx("optgroup",{label:"Built-in",children:mc.filter(g=>!f.some(v=>v.module_path===g.module_path)).map(g=>o.jsx("option",{value:g.id,children:g.name},g.id))}),o.jsx("optgroup",{label:"Custom",children:n.filter(g=>!f.some(v=>v.module_path===g.module_path)).map(g=>o.jsx("option",{value:g.id,children:g.name},g.id))})]})]}),f.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:f.map((g,v)=>{const w=i.find(x=>x.module_path===g.module_path),m=mc.some(x=>x.module_path===g.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:m?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(w==null?void 0:w.description)||"",children:[o.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[m&&o.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(w==null?void 0:w.name)||g.module_path]}),o.jsx("button",{onClick:()=>u(d,v),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Be,{size:12})})]},v)})})]},d)})})}const gc=[{type:"LlmAgent",label:"LLM Agent",icon:Er,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:g_,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:f_,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:wu,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function E4(){return`agent_${Date.now().toString(36)}`}function z4(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function T4(e,t){const n=E4(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},i={id:n,name:r[e]||"new_agent",description:""},s=t?z4(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...i,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...i,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...i,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...i,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function A4({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:s,setSelectedAgentId:a,mcpServers:l}=ht(),[c,u]=k.useState(new Set),[d,p]=k.useState(!1),[f,h]=k.useState(""),[g,v]=k.useState(new Map),[w,m]=k.useState(380),[x,y]=k.useState(!1),j=k.useRef(null),[A,C]=k.useState(null),P=k.useRef(null),[N,D]=k.useState(null),[E,M]=k.useState(null),L=k.useRef(null),U=k.useRef(null),T=k.useCallback(ee=>{ee.preventDefault(),y(!0)},[]);if(k.useEffect(()=>{const ee=be=>{if(!x)return;const se=Math.min(Math.max(200,be.clientX),600);m(se)},ue=()=>{y(!1)};return x&&(document.addEventListener("mousemove",ee),document.addEventListener("mouseup",ue),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",ee),document.removeEventListener("mouseup",ue),document.body.style.cursor="",document.body.style.userSelect=""}},[x]),k.useEffect(()=>{if(t){const ee=t.agents.filter(ue=>"sub_agents"in ue&&ue.sub_agents.length>0).map(ue=>ue.id);u(new Set(ee))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;const I=k.useMemo(()=>new Map(t.agents.map(ee=>[ee.id,ee])),[t.agents]);function $(){if(!f.trim()||!t)return;const ee=`generating_${Date.now()}`,ue=f;v(be=>new Map(be).set(ee,ue)),p(!1),h(""),Hy(t.id,ue).then(be=>{var se,Ce,J,Z;if(be.success&&be.config){const ce=be.config,xe=[];if((se=ce.tools)!=null&&se.builtin)for(const ve of ce.tools.builtin)xe.push({type:"builtin",name:ve});if((Ce=ce.tools)!=null&&Ce.mcp)for(const ve of ce.tools.mcp){const _e=l.find(Ue=>Ue.name===ve.server);_e&&xe.push({type:"mcp",server:{..._e,tool_filter:ve.tools}})}if((J=ce.tools)!=null&&J.custom)for(const ve of ce.tools.custom){const _e=t.custom_tools.find(Ue=>Ue.name===ve);_e&&xe.push({type:"function",name:ve,module_path:_e.module_path})}if((Z=ce.tools)!=null&&Z.agents)for(const ve of ce.tools.agents){const _e=t.agents.find(Ue=>Ue.id===ve);_e&&xe.push({type:"agent",agent_id:ve,name:_e.name})}const Y=t.app.models||[],re=Y.find(ve=>ve.id===t.app.default_model_id)||Y[0],ye={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:ce.name||"new_agent",description:ce.description||"",instruction:ce.instruction||"",model:re?{provider:re.provider,model_name:re.model_name,api_base:re.api_base,temperature:re.temperature,max_output_tokens:re.max_output_tokens,top_p:re.top_p,top_k:re.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:xe,sub_agents:ce.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(ye),a(ye.id),e==null||e(ye.id)}else console.error("Failed to generate agent:",be.error)}).catch(be=>{console.error("Error generating agent:",be)}).finally(()=>{v(be=>{const se=new Map(be);return se.delete(ee),se})})}const z=t.agents.find(ee=>ee.id===s);function O(ee){a(ee),e==null||e(ee)}function R(ee){if(!t)return;const ue=t.app.models||[],be=ue.find(Ce=>Ce.id===t.app.default_model_id)||ue[0],se=T4(ee,be);n(se),O(se.id)}function _(ee,ue){ue.stopPropagation(),confirm("Delete this agent?")&&(r(ee),s===ee&&(e==null||e(null)))}function H(ee){const ue=new Set(c);ue.has(ee)?ue.delete(ee):ue.add(ee),u(ue)}function K(ee){if(!L.current||!P.current)return;const ue=L.current.getBoundingClientRect(),be=ee.clientY-ue.top,se=60,Ce=8;if(be<se){const J=Math.max(1,Ce*(1-be/se));L.current.scrollTop-=J}else if(be>ue.height-se){const J=Math.max(1,Ce*(1-(ue.height-be)/se));L.current.scrollTop+=J}}function b(ee,ue){ee.dataTransfer.setData("text/plain",ue),ee.dataTransfer.effectAllowed="move",P.current=ue,requestAnimationFrame(()=>C(ue))}function W(){P.current=null,C(null),D(null),M(null),U.current&&(cancelAnimationFrame(U.current),U.current=null)}function S(ee,ue,be){if(!t)return;ee.preventDefault(),ee.stopPropagation();const se=P.current;if(!se)return;const Ce=t.agents.find(J=>J.id===ue);!Ce||!("sub_agents"in Ce)||F(se,ue)||(ee.dataTransfer.dropEffect="move",M({parentId:ue,index:be}),D(null))}function V(ee,ue,be){if(!t)return;ee.preventDefault(),ee.stopPropagation();const se=ee.dataTransfer.getData("text/plain");if(!se)return;if(se===ue||F(se,ue)){M(null);return}const Ce=t.agents.find(Z=>Z.id===ue);if(!Ce||!("sub_agents"in Ce))return;t.agents.forEach(Z=>{"sub_agents"in Z&&Z.sub_agents.includes(se)&&i(Z.id,{sub_agents:Z.sub_agents.filter(ce=>ce!==se)})});const J=[...Ce.sub_agents.filter(Z=>Z!==se)];J.splice(be,0,se),i(ue,{sub_agents:J}),u(Z=>new Set([...Z,ue])),C(null),M(null)}function ie(ee,ue,be){if(!t)return;const se=P.current;ee.preventDefault(),ee.stopPropagation(),se!==ue&&(se&&F(se,ue)||(ee.dataTransfer.dropEffect="move",D({agentId:ue,type:be}),M(null)))}function ae(ee){const ue=ee.relatedTarget;(!ue||!ee.currentTarget.contains(ue))&&D(null)}function q(ee,ue,be){if(!t)return;ee.preventDefault(),ee.stopPropagation();const se=ee.dataTransfer.getData("text/plain");if(!se||se===ue)return;if(be==="sub_agent"&&F(se,ue)){C(null),D(null),M(null);return}const Ce=t.agents.find(Z=>Z.id===ue),J=t.agents.find(Z=>Z.id===se);if(!(!Ce||!J)){if(be==="sub_agent")"sub_agents"in Ce&&(t.agents.forEach(Z=>{"sub_agents"in Z&&Z.sub_agents.includes(se)&&i(Z.id,{sub_agents:Z.sub_agents.filter(ce=>ce!==se)})}),Ce.sub_agents.includes(se)||(i(ue,{sub_agents:[...Ce.sub_agents,se]}),u(Z=>new Set([...Z,ue]))));else if(be==="tool"&&"tools"in Ce){const Z=Ce;Z.tools.some(xe=>xe.type==="agent"&&xe.agent_id===se)||i(ue,{tools:[...Z.tools,{type:"agent",agent_id:se,name:J.name}]})}C(null),D(null)}}function F(ee,ue){if(ee===ue)return!0;const be=[ee],se=new Set;for(;be.length;){const Ce=be.pop();if(se.has(Ce))continue;se.add(Ce);const J=I.get(Ce);if(!(!J||!("sub_agents"in J)))for(const Z of J.sub_agents){if(Z===ue)return!0;be.push(Z)}}return!1}function G(ee){const ue=gc.find(be=>be.type===ee);return ue?ue.icon:Er}function X(ee){const ue=gc.find(be=>be.type===ee);return ue?ue.color:"#888"}function Q(ee,ue=0,be=new Set){return ee.map(se=>{const Ce=G(se.type),J=X(se.type),Z="sub_agents"in se&&se.sub_agents.length>0,ce="sub_agents"in se,xe=se.type==="LlmAgent",Y=c.has(se.id),re=A===se.id,ye=(N==null?void 0:N.agentId)===se.id&&(N==null?void 0:N.type)==="sub_agent",ve=(N==null?void 0:N.agentId)===se.id&&(N==null?void 0:N.type)==="tool",_e=be.has(se.id),Ue=Z&&Y&&!_e,ct=Ue&&t?se.sub_agents.map(Ee=>t.agents.find(rt=>rt.id===Ee)).filter(Ee=>Ee!==void 0):[],nt=A&&A!==se.id&&(ce||xe);return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${s===se.id?"selected":""} ${re?"dragging":""} ${nt?"drop-target":""}`,onClick:()=>O(se.id),style:{paddingLeft:12+ue*20},draggable:!0,onDragStart:Ee=>b(Ee,se.id),onDragEnd:W,onDragOver:Ee=>{nt&&(Ee.preventDefault(),Ee.stopPropagation())},children:[o.jsx("div",{className:"drag-handle",children:o.jsx(o_,{size:12})}),Z?o.jsx("button",{className:"expand-btn",onClick:Ee=>{Ee.stopPropagation(),H(se.id)},children:Y?o.jsx(Rt,{size:16}):o.jsx(_t,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:J},children:o.jsx(Ce,{size:14})}),o.jsx("span",{className:"agent-name",children:se.name}),o.jsx("button",{className:"delete-btn",onClick:Ee=>_(se.id,Ee),children:o.jsx(Be,{size:14})}),nt&&o.jsxs("div",{className:"drop-overlay",children:[ce&&o.jsxs("div",{className:`drop-zone-overlay ${ye?"active":""}`,onDragOver:Ee=>ie(Ee,se.id,"sub_agent"),onDragLeave:ae,onDrop:Ee=>q(Ee,se.id,"sub_agent"),children:[o.jsx(cv,{size:12}),o.jsx("span",{children:"Sub-agent"})]}),xe&&o.jsxs("div",{className:`drop-zone-overlay ${ve?"active":""}`,onDragOver:Ee=>ie(Ee,se.id,"tool"),onDragLeave:ae,onDrop:Ee=>q(Ee,se.id,"tool"),children:[o.jsx(un,{size:12}),o.jsx("span",{children:"Tool"})]})]})]}),Ue&&o.jsxs("div",{className:"sub-agents",children:[A&&A!==se.id&&o.jsx("div",{className:`insert-indicator ${(E==null?void 0:E.parentId)===se.id&&(E==null?void 0:E.index)===0?"active":""}`,style:{marginLeft:12+(ue+1)*20},onDragOver:Ee=>S(Ee,se.id,0),onDragLeave:()=>M(null),onDrop:Ee=>V(Ee,se.id,0)}),ct.map((Ee,rt)=>o.jsxs(Dt.Fragment,{children:[Q([Ee],ue+1,new Set([...be,se.id])),A&&A!==se.id&&A!==Ee.id&&o.jsx("div",{className:`insert-indicator ${(E==null?void 0:E.parentId)===se.id&&(E==null?void 0:E.index)===rt+1?"active":""}`,style:{marginLeft:12+(ue+1)*20},onDragOver:qe=>S(qe,se.id,rt+1),onDragLeave:()=>M(null),onDrop:qe=>V(qe,se.id,rt+1)})]},Ee.id))]})]},se.id)})}const le=new Set(t.agents.flatMap(ee=>"sub_agents"in ee?ee.sub_agents:[])),ge=t.agents.filter(ee=>!le.has(ee.id)),ke=ge.length>0?ge:t.agents;return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"agents-sidebar",style:{width:w},children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")",g.size>0&&o.jsxs("span",{className:"generating-badge",children:[o.jsx(Zn,{size:12,className:"spin"})," ",g.size]})]}),o.jsxs("div",{className:"header-buttons",children:[gc.map(({type:ee,icon:ue,color:be})=>o.jsx("button",{className:"quick-add-btn",style:{background:be},onClick:()=>R(ee),title:`Add ${ee}`,children:o.jsx(ue,{size:14})},ee)),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:o.jsx(ec,{size:14})})]})]}),o.jsx("div",{className:"agents-list",ref:L,onDragOver:K,children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Er,{size:32}),o.jsx("p",{children:"No agents yet"})]}):Q(ke)})]}),o.jsx("div",{ref:j,className:`sidebar-resizer ${x?"resizing":""}`,onMouseDown:T}),o.jsx("div",{className:"agent-editor-area",children:z?o.jsx(j4,{agent:z}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Er,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),d&&o.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:ee=>ee.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(ec,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:f,onChange:ee=>h(ee.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:ee=>{ee.key==="Enter"&&(ee.metaKey||ee.ctrlKey)&&f.trim()&&$()}}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[l.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:!f.trim(),children:[o.jsx(ec,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var pp="\x1B[0m",fp="\x1B[1m",r1=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",P4=e=>{let t=r1(e),n=`${fp}[MONACOPILOT ERROR] ${t}${pp}`;return console.error(n),{message:t}},L4=(e,t)=>{console.warn(`${fp}[MONACOPILOT WARN] ${e}${t?`
${r1(t)}`:""}${pp}`)},M4=(e,t,n)=>console.warn(`${fp}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${pp}`),Oa={report:P4,warn:L4,warnDeprecated:M4},Cm=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let s=r.slice(0,t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)},R4=100,I4=!0,i1="onIdle",O4=!0,$4=120,D4=400,F4=0,hp=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),B4=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),U4=e=>e.getValue(),V4=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},o1=class s1{constructor(){this.cache=new V4(s1.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=hp(n,r),a=s,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${s}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=s-1&&u<=l+1:c===i?u>=s-1:c===a?u<=l+1:!0}};o1.MAX_CACHE_SIZE=20;var W4=o1,H4=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],a=s.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},q4=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let h=e.substring(0,f),g=t.slice(-f);h===g&&(c=f)}let d=Math.min(r,s);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},J4=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new q4}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,s),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,a=n+s,l=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},K4=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},G4=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:a,maxContextLines:l=R4}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(v,w,m)=>{let x=v(e,t);return w?Cm(x,w,m):x},p=(v,w)=>!v||!w?v:v.map(({content:m,...x})=>({...x,content:Cm(m,w)})),f=d(hp,u,{truncateDirection:"keepEnd"}),h=d(B4,u,{truncateDirection:"keepStart"}),g=p(a,u);return{filename:r,language:i,technologies:s,relatedFiles:g,textBeforeCursor:f,textAfterCursor:h,cursorPosition:e}},Y4=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:s,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},Q4=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,Yi=e=>({items:e,enableForwardStability:!0}),Ru=new W4,X4=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:a=i1,enableCaching:l=I4,allowFollowUpCompletions:c=O4,onError:u,requestHandler:d}=s;if(l&&!i){let p=Ru.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return Yi(p)}if(r.isCancellationRequested||!c&&i)return Yi([]);try{let p=Y4(async g=>{var w,m;(w=s.onCompletionRequested)==null||w.call(s,g);let v;if(d)v=await d(g);else if(s.endpoint)v=await K4({endpoint:s.endpoint,...g});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(v.error)throw new Error(v.error);return(m=s.onCompletionRequestFinished)==null||m.call(s,g,v),v},{onTyping:$4,onIdle:D4,onDemand:F4}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=G4({pos:n,mdl:t,options:s}),{completion:h}=await p({body:{completionMetadata:f}});if(h){let g=new H4(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),v=new J4(e);return l&&Ru.add({completion:g,range:v.computeCacheRange(n,g),textBeforeCursor:hp(n,t)}),Yi([{insertText:g,range:v.computeInsertionRange(n,g,t)}])}}catch(p){if(Q4(p))return Yi([]);u?u(p):Oa.warn("Cannot provide completion",p)}return Yi([])},mp=new WeakMap,xl=e=>mp.get(e),Z4=(e,t)=>{mp.set(e,t)},Nm=e=>{mp.delete(e)},eE=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),tE=(e,t)=>{let n=xl(e);!n||!n.options||(n.options={...n.options,...t})},nE=(e,t,n)=>{let r=xl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:U4(t),position:s,triggerType:c.trigger??i1})))return X4({monaco:e,mdl:i,pos:s,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,s.range))},freeInlineCompletions:()=>{}}):null},rE={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},iE=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(rE).some(t=>t(this.monaco,e))}},oE=(e,t,n,r)=>{let i=new iE(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},a1=(e,t,n)=>{let r=[];Z4(t,eE(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=xl(t);if(!i)return Oa.warn("Completion is not registered properly. State not found."),aE();let s=nE(e,t,n);s&&r.push(s);let a=oE(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();Ru.clear(),Nm(t)},trigger:()=>sE(t),updateOptions:l=>{tE(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Oa.report(i),{deregister:()=>{for(let s of r)s.dispose();Nm(t)},trigger:()=>{},updateOptions:()=>{}}}},sE=e=>{let t=xl(e);if(!t){Oa.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},aE=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function lE(){return`tool_${Date.now().toString(36)}`}function cE(e){return/^[a-zA-Z0-9_]+$/.test(e)}const uE=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function dE({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=ht(),[d,p]=k.useState(""),[f,h]=k.useState(null),[g,v]=k.useState("tools"),[w,m]=k.useState(null),[x,y]=k.useState(""),[j,A]=k.useState(!1),[C,P]=k.useState(!1),[N,D]=k.useState(!1),[E,M]=k.useState(null),[L,U]=k.useState(null),[T,I]=k.useState({}),[$,z]=k.useState({}),[O,R]=k.useState("");if(!t)return null;const _=t.mcp_servers||[],H=t.custom_tools.find(J=>J.id===a),K=_.find(J=>J.name===w);function b(J){l(J),e==null||e(J)}k.useEffect(()=>{H&&(p(H.code),U(null))},[a]),k.useEffect(()=>{K&&(y(JSON.stringify(K,null,2)),A(!1))},[w]),k.useEffect(()=>{if(!t)return;const J=W(t.mcp_servers||[]);R(JSON.stringify(J,null,2))},[t==null?void 0:t.mcp_servers]),k.useEffect(()=>{if(g==="mcp"&&_.length>0){const J=_.filter(Z=>!T[Z.name]||T[Z.name]==="unknown");J.length>0&&J.forEach(Z=>{ae(Z.name)})}},[g,_.length]);function W(J){const Z={};for(const ce of J){const xe={};ce.connection_type==="stdio"?(xe.command=ce.command||"",xe.args=ce.args||[],Object.keys(ce.env||{}).length>0&&(xe.env=ce.env)):ce.connection_type==="sse"&&(xe.url=ce.url||"",Object.keys(ce.headers||{}).length>0&&(xe.headers=ce.headers)),ce.timeout&&ce.timeout!==30&&(xe.timeout=ce.timeout),ce.tool_filter&&(xe.tool_filter=ce.tool_filter),ce.tool_name_prefix&&(xe.tool_name_prefix=ce.tool_name_prefix),Z[ce.name]=xe}return{mcpServers:Z}}function S(J){const Z=[];for(const[ce,xe]of Object.entries(J.mcpServers||{})){const Y={name:ce,description:xe.description||"",connection_type:xe.url?"sse":"stdio",command:xe.command,args:xe.args||[],env:xe.env||{},url:xe.url,headers:xe.headers||{},timeout:xe.timeout||30,tool_filter:xe.tool_filter||null,tool_name_prefix:xe.tool_name_prefix};Z.push(Y)}return Z}function V(J){J!==void 0&&R(J)}function ie(){try{const J=JSON.parse(O),Z=S(J);n({mcp_servers:Z})}catch(J){alert("Invalid JSON: "+J.message)}}async function ae(J){const Z=_.find(ce=>ce.name===J);if(Z){I(ce=>({...ce,[J]:"testing"})),z(ce=>({...ce,[J]:""}));try{const ce=await bu({connection_type:Z.connection_type,command:Z.command,args:Z.args,env:Z.env,url:Z.url,headers:Z.headers,timeout:Z.timeout});I(xe=>({...xe,[J]:ce.success?"connected":"error"})),!ce.success&&ce.error&&z(xe=>({...xe,[J]:ce.error||"Unknown error"}))}catch(ce){I(xe=>({...xe,[J]:"error"})),z(xe=>({...xe,[J]:ce.message}))}}}function q(J){const Z=u.find(xe=>xe.name===J);if(!Z)return;if(_.some(xe=>xe.name===J)){alert(`Server "${J}" is already configured`);return}const ce={name:Z.name,description:Z.description||"",connection_type:Z.connection_type,command:Z.command,args:Z.args||[],env:Z.env||{},url:Z.url,headers:Z.headers||{},timeout:Z.timeout||30,tool_filter:Z.tool_filter||null,tool_name_prefix:Z.tool_name_prefix};n({mcp_servers:[..._,ce]})}async function F(){for(const J of _)await ae(J.name)}function G(){const J=lE();r({id:J,name:"new_tool",description:"",module_path:"tools.custom",code:uE,state_keys_used:[]}),b(J)}function X(J,Z){Z.stopPropagation(),confirm("Delete this tool?")&&(s(J),a===J&&(e==null||e(null)))}function Q(J){H&&(J.name!==void 0&&(J.name===""||cE(J.name)?U(null):U("Name can only contain letters, numbers, and underscores")),i(H.id,J))}function le(J){J!==void 0&&H&&(p(J),Q({code:J}))}async function ge(){if(H){P(!0);try{const J=await qy(t.id,H.name,H.description,H.state_keys_used);J.success&&J.code?(p(J.code),Q({code:J.code})):(console.error("Failed to generate tool code:",J.error),alert("Failed to generate tool code: "+(J.error||"Unknown error")))}catch(J){console.error("Error generating tool code:",J),alert("Error generating tool code: "+J.message)}finally{P(!1)}}}const ke=k.useRef(null),ee=k.useCallback((J,Z)=>{if(ke.current&&typeof ke.current=="function")try{ke.current()}catch{}try{const ce=a1(Z,J,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof ce=="function"?ke.current=ce:ke.current=null}catch{ke.current=null}},[]);k.useEffect(()=>()=>{if(ke.current&&typeof ke.current=="function")try{ke.current()}catch{}},[]);function ue(J){J!==void 0&&(y(J),A(J!==JSON.stringify(K,null,2)))}function be(){if(K)try{const J=JSON.parse(x),Z=K.name,ce=_.map(xe=>xe.name===Z?J:xe);n({mcp_servers:ce}),m(J.name),A(!1)}catch(J){alert("Invalid JSON: "+J.message)}}async function se(){D(!0),M(null);try{const J=JSON.parse(x),Z=await bu({connection_type:J.connection_type,command:J.command,args:J.args,env:J.env,url:J.url,headers:J.headers,timeout:J.timeout||30});if(M(Z),Z.success&&Z.tools.length>0){const ce={...J,tool_filter:Z.tools.map(xe=>xe.name)};y(JSON.stringify(ce,null,2)),A(!0)}}catch(J){M({success:!1,tools:[],error:J.message})}finally{D(!1)}}const Ce={};return t.custom_tools.forEach(J=>{const Z=J.module_path||"tools";Ce[Z]||(Ce[Z]=[]),Ce[Z].push(J)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${g==="tools"?"active":""}`,onClick:()=>{v("tools"),m(null)},children:[o.jsx(un,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${g==="mcp"?"active":""}`,onClick:()=>{v("mcp"),l(null),h(null),m(null)},children:[o.jsx(qi,{size:14}),"MCP"]})]}),g==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:G,children:[o.jsx(Qe,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(u_,{size:14}),"Built-in Tools"]}),c.map(J=>o.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===J.name?"selected":""}`,onClick:()=>{h(J),b(null),m(null)},children:[o.jsx(ku,{size:14}),o.jsx("span",{className:"tool-name",children:J.name})]},J.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(_n,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(Ce).map(([J,Z])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(nv,{size:14}),J]}),Z.map(ce=>o.jsxs("div",{className:`tool-item ${a===ce.id?"selected":""}`,onClick:()=>{b(ce.id),h(null),m(null)},children:[o.jsx(un,{size:14}),o.jsx("span",{className:"tool-name",children:ce.name}),o.jsx("button",{className:"delete-btn",onClick:xe=>X(ce.id,xe),children:o.jsx(Be,{size:14})})]},ce.id))]},J))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",_.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:F,title:"Test all server connections",children:o.jsx(Qt,{size:14})})]}),o.jsx("div",{className:"mcp-servers-list",children:_.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(qi,{size:32}),o.jsx("p",{children:"No MCP servers configured"}),o.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):_.map(J=>{const Z=T[J.name]||"unknown",ce=$[J.name];return o.jsxs("div",{className:"mcp-server-item-wrapper",children:[o.jsxs("div",{className:"mcp-server-item",children:[o.jsxs("div",{className:"mcp-server-info",children:[o.jsx(qi,{size:14}),o.jsx("span",{className:"mcp-server-name",children:J.name}),o.jsxs("span",{className:`mcp-status-badge ${Z}`,children:[Z==="testing"?o.jsx(Zn,{size:10,className:"spin"}):null,Z==="unknown"&&"●",Z==="connected"&&"●",Z==="error"&&"●"]})]}),o.jsxs("div",{className:"mcp-server-actions",children:[o.jsx("span",{className:"mcp-server-type",children:J.connection_type}),o.jsxs("button",{className:"btn btn-sm",onClick:()=>ae(J.name),disabled:Z==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[Z==="testing"?o.jsx(Zn,{size:12,className:"spin"}):o.jsx(Qt,{size:12}),o.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),Z==="error"&&ce&&o.jsxs("div",{className:"mcp-server-error",children:[o.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",ce]})]},J.name)})})]})]}),o.jsx("div",{className:"tool-editor",children:f?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(ku,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:f.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):H?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(un,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:H.name,onChange:J=>Q({name:J.target.value}),placeholder:"Tool name",style:{borderColor:L?"var(--error)":void 0}}),L&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:L})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:H.description,onChange:J=>Q({description:J.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:H.module_path,onChange:J=>Q({module_path:J.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:ge,disabled:C||!H.name||!H.description,title:!H.name||!H.description?"Add a name and description first":"Generate code using AI",children:C?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Gd,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(Xt,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:le,onMount:ee,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(Jd,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(J=>{const Z=H.state_keys_used.includes(J.name);return o.jsxs("label",{className:`state-key-chip ${Z?"selected":""}`,title:J.description,children:[o.jsx("input",{type:"checkbox",checked:Z,onChange:ce=>{const xe=ce.target.checked?[...H.state_keys_used,J.name]:H.state_keys_used.filter(Y=>Y!==J.name);Q({state_keys_used:xe})}}),J.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",J.type,")"]})]},J.name)})})]})]}):K?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(qi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:K.name}),o.jsx("span",{className:"badge badge-info",children:K.connection_type}),j&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:se,disabled:N,title:"Test connection and discover available tools",children:[N?o.jsx(Zn,{size:14,className:"spin"}):o.jsx(qd,{size:14}),N?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:be,disabled:!j,children:[o.jsx(La,{size:14}),"Save"]})]}),E&&o.jsx("div",{className:`mcp-test-result ${E.success?"success":"error"}`,children:E.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",E.tools.length," tools"]}),E.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:E.tools.map(J=>o.jsxs("li",{children:[o.jsx("code",{children:J.name}),J.description&&o.jsxs("span",{children:[" — ",J.description]})]},J.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:E.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(Xt,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:ue,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):g==="mcp"?o.jsxs("div",{className:"mcp-json-editor",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(qi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),o.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),o.jsxs("select",{value:"",onChange:J=>{J.target.value&&q(J.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[o.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(J=>!_.some(Z=>Z.name===J.name)).map(J=>o.jsxs("option",{value:J.name,children:[J.name," - ",J.description||"No description"]},J.name))]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ie,children:[o.jsx(La,{size:14}),"Apply Changes"]})]}),o.jsx("div",{className:"mcp-json-info",children:o.jsxs("p",{children:["Configure your MCP servers using the standard ",o.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),o.jsx("div",{className:"editor-content",style:{flex:1},children:o.jsx(Xt,{height:"100%",defaultLanguage:"json",value:O,onChange:V,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(_n,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function pE(){return`callback_${Date.now().toString(36)}`}function Em(e){return/^[a-zA-Z0-9_]+$/.test(e)}function l1(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return l1("before_agent")}}function fE({onSelectCallback:e}){var N,D;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=ht(),[a,l]=k.useState(""),[c,u]=k.useState(null),[d,p]=k.useState(null),[f,h]=k.useState(!1),g=k.useRef(null);if(!t)return null;const v=t.custom_callbacks||[],w=v.find(E=>E.id===c);function m(E){u(E),e==null||e(E)}k.useEffect(()=>{w?(l(w.code),p(null)):l("")},[c,w]);function x(){const E=pE(),M="new_callback",L={id:E,name:M,description:"",module_path:`callbacks.${M}`,code:l1("before_agent"),state_keys_used:[]};r(L),m(E)}function y(E,M){M.stopPropagation(),confirm("Delete this callback?")&&(s(E),c===E&&(e==null||e(null),u(null),l("")))}function j(){if(!c)return;const E=v.find(U=>U.id===c);if(!E)return;const M=E.name.trim();if(!M){alert("Please enter a name");return}if(!Em(M)){p("Name must contain only alphanumeric characters and underscores");return}if(v.find(U=>U.name===M&&U.id!==E.id)){p("A callback with this name already exists");return}i(E.id,{code:a,name:M,description:E.description,module_path:`callbacks.${M}`,state_keys_used:E.state_keys_used}),p(null)}function A(E,M){g.current=M;try{a1(M,{endpoint:"/api/code-completion",language:"python"})}catch(L){console.warn("Failed to register Monacopilot completion:",L)}}async function C(){if(w){h(!0);try{let E="before_agent";const M=w.name.toLowerCase(),L=w.description.toLowerCase();M.includes("after_agent")||L.includes("after agent")?E="after_agent":M.includes("before_model")||L.includes("before model")?E="before_model":M.includes("after_model")||L.includes("after model")?E="after_model":M.includes("before_tool")||L.includes("before tool")?E="before_tool":M.includes("after_tool")||L.includes("after tool")?E="after_tool":(M.includes("before_agent")||L.includes("before agent"))&&(E="before_agent");const U=await Jy(t.id,w.name,w.description,E,w.state_keys_used);U.success&&U.code?(l(U.code),i(w.id,{code:U.code})):(console.error("Failed to generate callback code:",U.error),alert("Failed to generate callback code: "+(U.error||"Unknown error")))}catch(E){console.error("Error generating callback code:",E),alert("Error generating callback code: "+E.message)}finally{h(!1)}}}const P=((D=(N=t.app)==null?void 0:N.state_keys)==null?void 0:D.map(E=>E.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:o.jsx(Qe,{size:16})})]}),o.jsx("div",{className:"tools-list",children:v.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):v.map(E=>o.jsxs("div",{className:`tool-item ${c===E.id?"selected":""}`,onClick:()=>m(E.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:E.name}),E.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:E.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:M=>y(E.id,M),title:"Delete",children:o.jsx(Be,{size:14})})})]},E.id))})]}),o.jsx("div",{className:"tools-editor",children:w?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:j,children:[o.jsx(La,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:w.name,onChange:E=>{const M=E.target.value;i(w.id,{name:M,module_path:`callbacks.${M.trim()||"callback"}`}),d&&Em(M)&&p(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:w.description,onChange:E=>i(w.id,{description:E.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:w.module_path,onChange:E=>i(w.id,{module_path:E.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:P.map(E=>{const M=w.state_keys_used.includes(E);return o.jsxs("button",{type:"button",className:`btn btn-sm ${M?"btn-primary":"btn-secondary"}`,onClick:()=>{const L=M?w.state_keys_used.filter(U=>U!==E):[...w.state_keys_used,E];i(w.id,{state_keys_used:L})},children:[o.jsx(Jd,{size:12,style:{marginRight:"4px"}}),E]},E)})}),P.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:C,disabled:f||!w.name,title:w.name?"Generate code using AI":"Add a name first",children:f?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Gd,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(Xt,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:E=>l(E||""),onMount:A,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function hE(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],s=n.split(".");if(s.length>2){const a=s.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Me={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function mE({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[s,a]=k.useState(""),[l,c]=k.useState("exact"),[u,d]=k.useState(!1),[p,f]=k.useState(""),[h,g]=k.useState(!1),[v,w]=k.useState(t),m=hE(e.url);k.useEffect(()=>{m.length>0&&!s&&a(m[0].pattern)},[m,s]),k.useEffect(()=>{const P=setInterval(()=>{w(N=>N<=1?(r(),0):N-1)},1e3);return()=>clearInterval(P)},[r]);const x=k.useCallback(()=>{n()},[n]),y=k.useCallback(()=>{n(h?p:s,l,u)},[n,h,p,s,l,u]),j=v/t*100,A=e.source.startsWith("mcp:"),C=A?e.source.substring(4):"agent";return o.jsx("div",{style:Me.overlay,children:o.jsxs("div",{style:Me.dialog,children:[o.jsxs("div",{style:Me.header,children:[o.jsx(ev,{size:18,style:Me.headerIcon}),o.jsx("span",{style:Me.headerTitle,children:"Network Request Approval"}),o.jsx("button",{style:Me.closeButton,onClick:i,children:o.jsx(Ai,{size:16})})]}),o.jsxs("div",{style:Me.content,children:[o.jsx("div",{style:Me.sourceText,children:A?o.jsxs(o.Fragment,{children:['MCP server "',o.jsx("span",{style:{color:"#22d3ee"},children:C}),'" wants to connect to:']}):o.jsx(o.Fragment,{children:"Agent wants to connect to:"})}),o.jsxs("div",{style:Me.requestBox,children:[o.jsxs("div",{children:[o.jsx("span",{style:Me.methodBadge(e.method),children:e.method}),o.jsx("span",{style:Me.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&o.jsxs("div",{style:Me.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),o.jsxs("div",{children:[o.jsx("div",{style:Me.label,children:"Allow pattern:"}),h?o.jsxs("div",{children:[o.jsx("input",{type:"text",value:p,onChange:P=>f(P.target.value),placeholder:"e.g., *.example.com/*",style:Me.customInput}),o.jsxs("div",{style:Me.radioGroup,children:[o.jsxs("label",{style:Me.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),o.jsxs("label",{style:Me.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),o.jsx("button",{onClick:()=>g(!1),style:Me.backLink,children:"← Back to suggestions"})]})]}):o.jsxs("select",{value:s,onChange:P=>{P.target.value==="__custom__"?(g(!0),f(s)):a(P.target.value)},style:Me.select,children:[m.map(P=>o.jsx("option",{value:P.pattern,children:P.label},P.pattern)),o.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),o.jsxs("label",{style:Me.checkboxLabel,children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:u,onChange:P=>d(P.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),o.jsxs("div",{style:Me.footer,children:[o.jsxs("button",{onClick:r,style:Me.button("deny"),children:[o.jsx(Zk,{size:14}),"Deny"]}),o.jsxs("button",{onClick:x,style:Me.button("once"),children:[o.jsx(Wd,{size:14}),"Allow Once"]}),o.jsxs("button",{onClick:y,style:Me.button("pattern"),children:[o.jsx(av,{size:14}),"Allow Pattern"]}),o.jsxs("div",{style:Me.timerContainer,children:[o.jsx(Do,{size:14}),o.jsxs("span",{children:[v,"s"]})]})]}),o.jsx("div",{style:Me.progressBar,children:o.jsx("div",{style:Me.progressFill(j)})})]})})}var gE={value:()=>{}};function os(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new ta(n)}function ta(e){this._=e}function xE(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}ta.prototype=os.prototype={constructor:ta,on:function(e,t){var n=this._,r=xE(e+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(e=r[s]).type)&&(i=yE(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(i=(e=r[s]).type)n[i]=zm(n[i],e.name,t);else if(t==null)for(i in n)n[i]=zm(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new ta(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};function yE(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function zm(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=gE,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Iu="http://www.w3.org/1999/xhtml";const Tm={svg:"http://www.w3.org/2000/svg",xhtml:Iu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function yl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Tm.hasOwnProperty(t)?{space:Tm[t],local:e}:e}function vE(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Iu&&t.documentElement.namespaceURI===Iu?t.createElement(e):t.createElementNS(n,e)}}function bE(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function c1(e){var t=yl(e);return(t.local?bE:vE)(t)}function wE(){}function gp(e){return e==null?wE:function(){return this.querySelector(e)}}function kE(e){typeof e!="function"&&(e=gp(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=new Array(a),c,u,d=0;d<a;++d)(c=s[d])&&(u=e.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u);return new Ut(r,this._parents)}function _E(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function jE(){return[]}function u1(e){return e==null?jE:function(){return this.querySelectorAll(e)}}function SE(e){return function(){return _E(e.apply(this,arguments))}}function CE(e){typeof e=="function"?e=SE(e):e=u1(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var a=t[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&(r.push(e.call(c,c.__data__,u,a)),i.push(c));return new Ut(r,i)}function d1(e){return function(){return this.matches(e)}}function p1(e){return function(t){return t.matches(e)}}var NE=Array.prototype.find;function EE(e){return function(){return NE.call(this.children,e)}}function zE(){return this.firstElementChild}function TE(e){return this.select(e==null?zE:EE(typeof e=="function"?e:p1(e)))}var AE=Array.prototype.filter;function PE(){return Array.from(this.children)}function LE(e){return function(){return AE.call(this.children,e)}}function ME(e){return this.selectAll(e==null?PE:LE(typeof e=="function"?e:p1(e)))}function RE(e){typeof e!="function"&&(e=d1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Ut(r,this._parents)}function f1(e){return new Array(e.length)}function IE(){return new Ut(this._enter||this._groups.map(f1),this._parents)}function $a(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}$a.prototype={constructor:$a,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function OE(e){return function(){return e}}function $E(e,t,n,r,i,s){for(var a=0,l,c=t.length,u=s.length;a<u;++a)(l=t[a])?(l.__data__=s[a],r[a]=l):n[a]=new $a(e,s[a]);for(;a<c;++a)(l=t[a])&&(i[a]=l)}function DE(e,t,n,r,i,s,a){var l,c,u=new Map,d=t.length,p=s.length,f=new Array(d),h;for(l=0;l<d;++l)(c=t[l])&&(f[l]=h=a.call(c,c.__data__,l,t)+"",u.has(h)?i[l]=c:u.set(h,c));for(l=0;l<p;++l)h=a.call(e,s[l],l,s)+"",(c=u.get(h))?(r[l]=c,c.__data__=s[l],u.delete(h)):n[l]=new $a(e,s[l]);for(l=0;l<d;++l)(c=t[l])&&u.get(f[l])===c&&(i[l]=c)}function FE(e){return e.__data__}function BE(e,t){if(!arguments.length)return Array.from(this,FE);var n=t?DE:$E,r=this._parents,i=this._groups;typeof e!="function"&&(e=OE(e));for(var s=i.length,a=new Array(s),l=new Array(s),c=new Array(s),u=0;u<s;++u){var d=r[u],p=i[u],f=p.length,h=UE(e.call(d,d&&d.__data__,u,r)),g=h.length,v=l[u]=new Array(g),w=a[u]=new Array(g),m=c[u]=new Array(f);n(d,p,v,w,m,h,t);for(var x=0,y=0,j,A;x<g;++x)if(j=v[x]){for(x>=y&&(y=x+1);!(A=w[y])&&++y<g;);j._next=A||null}}return a=new Ut(a,r),a._enter=l,a._exit=c,a}function UE(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function VE(){return new Ut(this._exit||this._groups.map(f1),this._parents)}function WE(e,t,n){var r=this.enter(),i=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function HE(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,a=Math.min(i,s),l=new Array(i),c=0;c<a;++c)for(var u=n[c],d=r[c],p=u.length,f=l[c]=new Array(p),h,g=0;g<p;++g)(h=u[g]||d[g])&&(f[g]=h);for(;c<i;++c)l[c]=n[c];return new Ut(l,this._parents)}function qE(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function JE(e){e||(e=KE);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],l=a.length,c=i[s]=new Array(l),u,d=0;d<l;++d)(u=a[d])&&(c[d]=u);c.sort(t)}return new Ut(i,this._parents).order()}function KE(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function GE(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function YE(){return Array.from(this)}function QE(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function XE(){let e=0;for(const t of this)++e;return e}function ZE(){return!this.node()}function ez(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],s=0,a=i.length,l;s<a;++s)(l=i[s])&&e.call(l,l.__data__,s,i);return this}function tz(e){return function(){this.removeAttribute(e)}}function nz(e){return function(){this.removeAttributeNS(e.space,e.local)}}function rz(e,t){return function(){this.setAttribute(e,t)}}function iz(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function oz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function sz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function az(e,t){var n=yl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?nz:tz:typeof t=="function"?n.local?sz:oz:n.local?iz:rz)(n,t))}function h1(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function lz(e){return function(){this.style.removeProperty(e)}}function cz(e,t,n){return function(){this.style.setProperty(e,t,n)}}function uz(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function dz(e,t,n){return arguments.length>1?this.each((t==null?lz:typeof t=="function"?uz:cz)(e,t,n??"")):ji(this.node(),e)}function ji(e,t){return e.style.getPropertyValue(t)||h1(e).getComputedStyle(e,null).getPropertyValue(t)}function pz(e){return function(){delete this[e]}}function fz(e,t){return function(){this[e]=t}}function hz(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function mz(e,t){return arguments.length>1?this.each((t==null?pz:typeof t=="function"?hz:fz)(e,t)):this.node()[e]}function m1(e){return e.trim().split(/^|\s+/)}function xp(e){return e.classList||new g1(e)}function g1(e){this._node=e,this._names=m1(e.getAttribute("class")||"")}g1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function x1(e,t){for(var n=xp(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function y1(e,t){for(var n=xp(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function gz(e){return function(){x1(this,e)}}function xz(e){return function(){y1(this,e)}}function yz(e,t){return function(){(t.apply(this,arguments)?x1:y1)(this,e)}}function vz(e,t){var n=m1(e+"");if(arguments.length<2){for(var r=xp(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?yz:t?gz:xz)(n,t))}function bz(){this.textContent=""}function wz(e){return function(){this.textContent=e}}function kz(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function _z(e){return arguments.length?this.each(e==null?bz:(typeof e=="function"?kz:wz)(e)):this.node().textContent}function jz(){this.innerHTML=""}function Sz(e){return function(){this.innerHTML=e}}function Cz(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Nz(e){return arguments.length?this.each(e==null?jz:(typeof e=="function"?Cz:Sz)(e)):this.node().innerHTML}function Ez(){this.nextSibling&&this.parentNode.appendChild(this)}function zz(){return this.each(Ez)}function Tz(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Az(){return this.each(Tz)}function Pz(e){var t=typeof e=="function"?e:c1(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Lz(){return null}function Mz(e,t){var n=typeof e=="function"?e:c1(e),r=t==null?Lz:typeof t=="function"?t:gp(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Rz(){var e=this.parentNode;e&&e.removeChild(this)}function Iz(){return this.each(Rz)}function Oz(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function $z(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Dz(e){return this.select(e?$z:Oz)}function Fz(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Bz(e){return function(t){e.call(this,t,this.__data__)}}function Uz(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function Vz(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,s;n<i;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function Wz(e,t,n){return function(){var r=this.__on,i,s=Bz(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=t;return}}this.addEventListener(e.type,s,n),i={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(i):this.__on=[i]}}function Hz(e,t,n){var r=Uz(e+""),i,s=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,u=l.length,d;c<u;++c)for(i=0,d=l[c];i<s;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?Wz:Vz,i=0;i<s;++i)this.each(l(r[i],t,n));return this}function v1(e,t,n){var r=h1(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function qz(e,t){return function(){return v1(this,e,t)}}function Jz(e,t){return function(){return v1(this,e,t.apply(this,arguments))}}function Kz(e,t){return this.each((typeof t=="function"?Jz:qz)(e,t))}function*Gz(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var b1=[null];function Ut(e,t){this._groups=e,this._parents=t}function ss(){return new Ut([[document.documentElement]],b1)}function Yz(){return this}Ut.prototype=ss.prototype={constructor:Ut,select:kE,selectAll:CE,selectChild:TE,selectChildren:ME,filter:RE,data:BE,enter:IE,exit:VE,join:WE,merge:HE,selection:Yz,order:qE,sort:JE,call:GE,nodes:YE,node:QE,size:XE,empty:ZE,each:ez,attr:az,style:dz,property:mz,classed:vz,text:_z,html:Nz,raise:zz,lower:Az,append:Pz,insert:Mz,remove:Iz,clone:Dz,datum:Fz,on:Hz,dispatch:Kz,[Symbol.iterator]:Gz};function Gt(e){return typeof e=="string"?new Ut([[document.querySelector(e)]],[document.documentElement]):new Ut([[e]],b1)}function Qz(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Tn(e,t){if(e=Qz(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const Xz={passive:!1},Uo={capture:!0,passive:!1};function xc(e){e.stopImmediatePropagation()}function pi(e){e.preventDefault(),e.stopImmediatePropagation()}function w1(e){var t=e.document.documentElement,n=Gt(e).on("dragstart.drag",pi,Uo);"onselectstart"in t?n.on("selectstart.drag",pi,Uo):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function k1(e,t){var n=e.document.documentElement,r=Gt(e).on("dragstart.drag",null);t&&(r.on("click.drag",pi,Uo),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Ms=e=>()=>e;function Ou(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:s,x:a,y:l,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Ou.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Zz(e){return!e.ctrlKey&&!e.button}function e3(){return this.parentNode}function t3(e,t){return t??{x:e.x,y:e.y}}function n3(){return navigator.maxTouchPoints||"ontouchstart"in this}function r3(){var e=Zz,t=e3,n=t3,r=n3,i={},s=os("start","drag","end"),a=0,l,c,u,d,p=0;function f(j){j.on("mousedown.drag",h).filter(r).on("touchstart.drag",w).on("touchmove.drag",m,Xz).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(j,A){if(!(d||!e.call(this,j,A))){var C=y(this,t.call(this,j,A),j,A,"mouse");C&&(Gt(j.view).on("mousemove.drag",g,Uo).on("mouseup.drag",v,Uo),w1(j.view),xc(j),u=!1,l=j.clientX,c=j.clientY,C("start",j))}}function g(j){if(pi(j),!u){var A=j.clientX-l,C=j.clientY-c;u=A*A+C*C>p}i.mouse("drag",j)}function v(j){Gt(j.view).on("mousemove.drag mouseup.drag",null),k1(j.view,u),pi(j),i.mouse("end",j)}function w(j,A){if(e.call(this,j,A)){var C=j.changedTouches,P=t.call(this,j,A),N=C.length,D,E;for(D=0;D<N;++D)(E=y(this,P,j,A,C[D].identifier,C[D]))&&(xc(j),E("start",j,C[D]))}}function m(j){var A=j.changedTouches,C=A.length,P,N;for(P=0;P<C;++P)(N=i[A[P].identifier])&&(pi(j),N("drag",j,A[P]))}function x(j){var A=j.changedTouches,C=A.length,P,N;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),P=0;P<C;++P)(N=i[A[P].identifier])&&(xc(j),N("end",j,A[P]))}function y(j,A,C,P,N,D){var E=s.copy(),M=Tn(D||C,A),L,U,T;if((T=n.call(j,new Ou("beforestart",{sourceEvent:C,target:f,identifier:N,active:a,x:M[0],y:M[1],dx:0,dy:0,dispatch:E}),P))!=null)return L=T.x-M[0]||0,U=T.y-M[1]||0,function I($,z,O){var R=M,_;switch($){case"start":i[N]=I,_=a++;break;case"end":delete i[N],--a;case"drag":M=Tn(O||z,A),_=a;break}E.call($,j,new Ou($,{sourceEvent:z,subject:T,target:f,identifier:N,active:_,x:M[0]+L,y:M[1]+U,dx:M[0]-R[0],dy:M[1]-R[1],dispatch:E}),P)}}return f.filter=function(j){return arguments.length?(e=typeof j=="function"?j:Ms(!!j),f):e},f.container=function(j){return arguments.length?(t=typeof j=="function"?j:Ms(j),f):t},f.subject=function(j){return arguments.length?(n=typeof j=="function"?j:Ms(j),f):n},f.touchable=function(j){return arguments.length?(r=typeof j=="function"?j:Ms(!!j),f):r},f.on=function(){var j=s.on.apply(s,arguments);return j===s?f:j},f.clickDistance=function(j){return arguments.length?(p=(j=+j)*j,f):Math.sqrt(p)},f}function yp(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function _1(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function as(){}var Vo=.7,Da=1/Vo,fi="\\s*([+-]?\\d+)\\s*",Wo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",kn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",i3=/^#([0-9a-f]{3,8})$/,o3=new RegExp(`^rgb\\(${fi},${fi},${fi}\\)$`),s3=new RegExp(`^rgb\\(${kn},${kn},${kn}\\)$`),a3=new RegExp(`^rgba\\(${fi},${fi},${fi},${Wo}\\)$`),l3=new RegExp(`^rgba\\(${kn},${kn},${kn},${Wo}\\)$`),c3=new RegExp(`^hsl\\(${Wo},${kn},${kn}\\)$`),u3=new RegExp(`^hsla\\(${Wo},${kn},${kn},${Wo}\\)$`),Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};yp(as,Ho,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Pm,formatHex:Pm,formatHex8:d3,formatHsl:p3,formatRgb:Lm,toString:Lm});function Pm(){return this.rgb().formatHex()}function d3(){return this.rgb().formatHex8()}function p3(){return j1(this).formatHsl()}function Lm(){return this.rgb().formatRgb()}function Ho(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=i3.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?Mm(t):n===3?new Ct(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Rs(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Rs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=o3.exec(e))?new Ct(t[1],t[2],t[3],1):(t=s3.exec(e))?new Ct(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=a3.exec(e))?Rs(t[1],t[2],t[3],t[4]):(t=l3.exec(e))?Rs(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=c3.exec(e))?Om(t[1],t[2]/100,t[3]/100,1):(t=u3.exec(e))?Om(t[1],t[2]/100,t[3]/100,t[4]):Am.hasOwnProperty(e)?Mm(Am[e]):e==="transparent"?new Ct(NaN,NaN,NaN,0):null}function Mm(e){return new Ct(e>>16&255,e>>8&255,e&255,1)}function Rs(e,t,n,r){return r<=0&&(e=t=n=NaN),new Ct(e,t,n,r)}function f3(e){return e instanceof as||(e=Ho(e)),e?(e=e.rgb(),new Ct(e.r,e.g,e.b,e.opacity)):new Ct}function $u(e,t,n,r){return arguments.length===1?f3(e):new Ct(e,t,n,r??1)}function Ct(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}yp(Ct,$u,_1(as,{brighter(e){return e=e==null?Da:Math.pow(Da,e),new Ct(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Vo:Math.pow(Vo,e),new Ct(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Ct(zr(this.r),zr(this.g),zr(this.b),Fa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Rm,formatHex:Rm,formatHex8:h3,formatRgb:Im,toString:Im}));function Rm(){return`#${jr(this.r)}${jr(this.g)}${jr(this.b)}`}function h3(){return`#${jr(this.r)}${jr(this.g)}${jr(this.b)}${jr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Im(){const e=Fa(this.opacity);return`${e===1?"rgb(":"rgba("}${zr(this.r)}, ${zr(this.g)}, ${zr(this.b)}${e===1?")":`, ${e})`}`}function Fa(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function zr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function jr(e){return e=zr(e),(e<16?"0":"")+e.toString(16)}function Om(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new an(e,t,n,r)}function j1(e){if(e instanceof an)return new an(e.h,e.s,e.l,e.opacity);if(e instanceof as||(e=Ho(e)),!e)return new an;if(e instanceof an)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),a=NaN,l=s-i,c=(s+i)/2;return l?(t===s?a=(n-r)/l+(n<r)*6:n===s?a=(r-t)/l+2:a=(t-n)/l+4,l/=c<.5?s+i:2-s-i,a*=60):l=c>0&&c<1?0:a,new an(a,l,c,e.opacity)}function m3(e,t,n,r){return arguments.length===1?j1(e):new an(e,t,n,r??1)}function an(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}yp(an,m3,_1(as,{brighter(e){return e=e==null?Da:Math.pow(Da,e),new an(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Vo:Math.pow(Vo,e),new an(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Ct(yc(e>=240?e-240:e+120,i,r),yc(e,i,r),yc(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new an($m(this.h),Is(this.s),Is(this.l),Fa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Fa(this.opacity);return`${e===1?"hsl(":"hsla("}${$m(this.h)}, ${Is(this.s)*100}%, ${Is(this.l)*100}%${e===1?")":`, ${e})`}`}}));function $m(e){return e=(e||0)%360,e<0?e+360:e}function Is(e){return Math.max(0,Math.min(1,e||0))}function yc(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const S1=e=>()=>e;function g3(e,t){return function(n){return e+n*t}}function x3(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function y3(e){return(e=+e)==1?C1:function(t,n){return n-t?x3(t,n,e):S1(isNaN(t)?n:t)}}function C1(e,t){var n=t-e;return n?g3(e,n):S1(isNaN(e)?t:e)}const Dm=function e(t){var n=y3(t);function r(i,s){var a=n((i=$u(i)).r,(s=$u(s)).r),l=n(i.g,s.g),c=n(i.b,s.b),u=C1(i.opacity,s.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=c(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function Jn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Du=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,vc=new RegExp(Du.source,"g");function v3(e){return function(){return e}}function b3(e){return function(t){return e(t)+""}}function w3(e,t){var n=Du.lastIndex=vc.lastIndex=0,r,i,s,a=-1,l=[],c=[];for(e=e+"",t=t+"";(r=Du.exec(e))&&(i=vc.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),l[a]?l[a]+=s:l[++a]=s),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,c.push({i:a,x:Jn(r,i)})),n=vc.lastIndex;return n<t.length&&(s=t.slice(n),l[a]?l[a]+=s:l[++a]=s),l.length<2?c[0]?b3(c[0].x):v3(t):(t=c.length,function(u){for(var d=0,p;d<t;++d)l[(p=c[d]).i]=p.x(u);return l.join("")})}var Fm=180/Math.PI,Fu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function N1(e,t,n,r,i,s){var a,l,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,c/=l),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*Fm,skewX:Math.atan(c)*Fm,scaleX:a,scaleY:l}}var Os;function k3(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Fu:N1(t.a,t.b,t.c,t.d,t.e,t.f)}function _3(e){return e==null||(Os||(Os=document.createElementNS("http://www.w3.org/2000/svg","g")),Os.setAttribute("transform",e),!(e=Os.transform.baseVal.consolidate()))?Fu:(e=e.matrix,N1(e.a,e.b,e.c,e.d,e.e,e.f))}function E1(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function s(u,d,p,f,h,g){if(u!==p||d!==f){var v=h.push("translate(",null,t,null,n);g.push({i:v-4,x:Jn(u,p)},{i:v-2,x:Jn(d,f)})}else(p||f)&&h.push("translate("+p+t+f+n)}function a(u,d,p,f){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),f.push({i:p.push(i(p)+"rotate(",null,r)-2,x:Jn(u,d)})):d&&p.push(i(p)+"rotate("+d+r)}function l(u,d,p,f){u!==d?f.push({i:p.push(i(p)+"skewX(",null,r)-2,x:Jn(u,d)}):d&&p.push(i(p)+"skewX("+d+r)}function c(u,d,p,f,h,g){if(u!==p||d!==f){var v=h.push(i(h)+"scale(",null,",",null,")");g.push({i:v-4,x:Jn(u,p)},{i:v-2,x:Jn(d,f)})}else(p!==1||f!==1)&&h.push(i(h)+"scale("+p+","+f+")")}return function(u,d){var p=[],f=[];return u=e(u),d=e(d),s(u.translateX,u.translateY,d.translateX,d.translateY,p,f),a(u.rotate,d.rotate,p,f),l(u.skewX,d.skewX,p,f),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,p,f),u=d=null,function(h){for(var g=-1,v=f.length,w;++g<v;)p[(w=f[g]).i]=w.x(h);return p.join("")}}}var j3=E1(k3,"px, ","px)","deg)"),S3=E1(_3,", ",")",")"),C3=1e-12;function Bm(e){return((e=Math.exp(e))+1/e)/2}function N3(e){return((e=Math.exp(e))-1/e)/2}function E3(e){return((e=Math.exp(2*e))-1)/(e+1)}const z3=function e(t,n,r){function i(s,a){var l=s[0],c=s[1],u=s[2],d=a[0],p=a[1],f=a[2],h=d-l,g=p-c,v=h*h+g*g,w,m;if(v<C3)m=Math.log(f/u)/t,w=function(P){return[l+P*h,c+P*g,u*Math.exp(t*P*m)]};else{var x=Math.sqrt(v),y=(f*f-u*u+r*v)/(2*u*n*x),j=(f*f-u*u-r*v)/(2*f*n*x),A=Math.log(Math.sqrt(y*y+1)-y),C=Math.log(Math.sqrt(j*j+1)-j);m=(C-A)/t,w=function(P){var N=P*m,D=Bm(A),E=u/(n*x)*(D*E3(t*N+A)-N3(A));return[l+E*h,c+E*g,u*D/Bm(t*N+A)]}}return w.duration=m*1e3*t/Math.SQRT2,w}return i.rho=function(s){var a=Math.max(.001,+s),l=a*a,c=l*l;return e(a,l,c)},i}(Math.SQRT2,2,4);var Si=0,io=0,Qi=0,z1=1e3,Ba,oo,Ua=0,$r=0,vl=0,qo=typeof performance=="object"&&performance.now?performance:Date,T1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function vp(){return $r||(T1(T3),$r=qo.now()+vl)}function T3(){$r=0}function Va(){this._call=this._time=this._next=null}Va.prototype=bp.prototype={constructor:Va,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?vp():+n)+(t==null?0:+t),!this._next&&oo!==this&&(oo?oo._next=this:Ba=this,oo=this),this._call=e,this._time=n,Bu()},stop:function(){this._call&&(this._call=null,this._time=1/0,Bu())}};function bp(e,t,n){var r=new Va;return r.restart(e,t,n),r}function A3(){vp(),++Si;for(var e=Ba,t;e;)(t=$r-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Si}function Um(){$r=(Ua=qo.now())+vl,Si=io=0;try{A3()}finally{Si=0,L3(),$r=0}}function P3(){var e=qo.now(),t=e-Ua;t>z1&&(vl-=t,Ua=e)}function L3(){for(var e,t=Ba,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ba=n);oo=e,Bu(r)}function Bu(e){if(!Si){io&&(io=clearTimeout(io));var t=e-$r;t>24?(e<1/0&&(io=setTimeout(Um,e-qo.now()-vl)),Qi&&(Qi=clearInterval(Qi))):(Qi||(Ua=qo.now(),Qi=setInterval(P3,z1)),Si=1,T1(Um))}}function Vm(e,t,n){var r=new Va;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var M3=os("start","end","cancel","interrupt"),R3=[],A1=0,Wm=1,Uu=2,na=3,Hm=4,Vu=5,ra=6;function bl(e,t,n,r,i,s){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;I3(e,n,{name:t,index:r,group:i,on:M3,tween:R3,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:A1})}function wp(e,t){var n=pn(e,t);if(n.state>A1)throw new Error("too late; already scheduled");return n}function Sn(e,t){var n=pn(e,t);if(n.state>na)throw new Error("too late; already running");return n}function pn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function I3(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=bp(s,0,n.time);function s(u){n.state=Wm,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var d,p,f,h;if(n.state!==Wm)return c();for(d in r)if(h=r[d],h.name===n.name){if(h.state===na)return Vm(a);h.state===Hm?(h.state=ra,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=ra,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(Vm(function(){n.state===na&&(n.state=Hm,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=Uu,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Uu){for(n.state=na,i=new Array(f=n.tween.length),d=0,p=-1;d<f;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++p]=h);i.length=p+1}}function l(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Vu,1),p=-1,f=i.length;++p<f;)i[p].call(e,d);n.state===Vu&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=ra,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function ia(e,t){var n=e.__transition,r,i,s=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){s=!1;continue}i=r.state>Uu&&r.state<Vu,r.state=ra,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}s&&delete e.__transition}}function O3(e){return this.each(function(){ia(this,e)})}function $3(e,t){var n,r;return function(){var i=Sn(this,e),s=i.tween;if(s!==n){r=n=s;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function D3(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=Sn(this,e),a=s.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=l;break}c===u&&i.push(l)}s.tween=i}}function F3(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=pn(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?$3:D3)(n,e,t))}function kp(e,t,n){var r=e._id;return e.each(function(){var i=Sn(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return pn(i,r).value[t]}}function P1(e,t){var n;return(typeof t=="number"?Jn:t instanceof Ho?Dm:(n=Ho(t))?(t=n,Dm):w3)(e,t)}function B3(e){return function(){this.removeAttribute(e)}}function U3(e){return function(){this.removeAttributeNS(e.space,e.local)}}function V3(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttribute(e);return a===i?null:a===r?s:s=t(r=a,n)}}function W3(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?s:s=t(r=a,n)}}function H3(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function q3(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function J3(e,t){var n=yl(e),r=n==="transform"?S3:P1;return this.attrTween(e,typeof t=="function"?(n.local?q3:H3)(n,r,kp(this,"attr."+e,t)):t==null?(n.local?U3:B3)(n):(n.local?W3:V3)(n,r,t))}function K3(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function G3(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function Y3(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&G3(e,s)),n}return i._value=t,i}function Q3(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&K3(e,s)),n}return i._value=t,i}function X3(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=yl(e);return this.tween(n,(r.local?Y3:Q3)(r,t))}function Z3(e,t){return function(){wp(this,e).delay=+t.apply(this,arguments)}}function eT(e,t){return t=+t,function(){wp(this,e).delay=t}}function tT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?Z3:eT)(t,e)):pn(this.node(),t).delay}function nT(e,t){return function(){Sn(this,e).duration=+t.apply(this,arguments)}}function rT(e,t){return t=+t,function(){Sn(this,e).duration=t}}function iT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?nT:rT)(t,e)):pn(this.node(),t).duration}function oT(e,t){if(typeof t!="function")throw new Error;return function(){Sn(this,e).ease=t}}function sT(e){var t=this._id;return arguments.length?this.each(oT(t,e)):pn(this.node(),t).ease}function aT(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Sn(this,e).ease=n}}function lT(e){if(typeof e!="function")throw new Error;return this.each(aT(this._id,e))}function cT(e){typeof e!="function"&&(e=d1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Bn(r,this._parents,this._name,this._id)}function uT(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),a=new Array(r),l=0;l<s;++l)for(var c=t[l],u=n[l],d=c.length,p=a[l]=new Array(d),f,h=0;h<d;++h)(f=c[h]||u[h])&&(p[h]=f);for(;l<r;++l)a[l]=t[l];return new Bn(a,this._parents,this._name,this._id)}function dT(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function pT(e,t,n){var r,i,s=dT(t)?wp:Sn;return function(){var a=s(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function fT(e,t){var n=this._id;return arguments.length<2?pn(this.node(),n).on.on(e):this.each(pT(n,e,t))}function hT(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function mT(){return this.on("end.remove",hT(this._id))}function gT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=gp(e));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var l=r[a],c=l.length,u=s[a]=new Array(c),d,p,f=0;f<c;++f)(d=l[f])&&(p=e.call(d,d.__data__,f,l))&&("__data__"in d&&(p.__data__=d.__data__),u[f]=p,bl(u[f],t,n,f,u,pn(d,n)));return new Bn(s,this._parents,t,n)}function xT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=u1(e));for(var r=this._groups,i=r.length,s=[],a=[],l=0;l<i;++l)for(var c=r[l],u=c.length,d,p=0;p<u;++p)if(d=c[p]){for(var f=e.call(d,d.__data__,p,c),h,g=pn(d,n),v=0,w=f.length;v<w;++v)(h=f[v])&&bl(h,t,n,v,f,g);s.push(f),a.push(d)}return new Bn(s,a,t,n)}var yT=ss.prototype.constructor;function vT(){return new yT(this._groups,this._parents)}function bT(e,t){var n,r,i;return function(){var s=ji(this,e),a=(this.style.removeProperty(e),ji(this,e));return s===a?null:s===n&&a===r?i:i=t(n=s,r=a)}}function L1(e){return function(){this.style.removeProperty(e)}}function wT(e,t,n){var r,i=n+"",s;return function(){var a=ji(this,e);return a===i?null:a===r?s:s=t(r=a,n)}}function kT(e,t,n){var r,i,s;return function(){var a=ji(this,e),l=n(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(e),ji(this,e))),a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l))}}function _T(e,t){var n,r,i,s="style."+t,a="end."+s,l;return function(){var c=Sn(this,e),u=c.on,d=c.value[s]==null?l||(l=L1(t)):void 0;(u!==n||i!==d)&&(r=(n=u).copy()).on(a,i=d),c.on=r}}function jT(e,t,n){var r=(e+="")=="transform"?j3:P1;return t==null?this.styleTween(e,bT(e,r)).on("end.style."+e,L1(e)):typeof t=="function"?this.styleTween(e,kT(e,r,kp(this,"style."+e,t))).each(_T(this._id,e)):this.styleTween(e,wT(e,r,t),n).on("end.style."+e,null)}function ST(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function CT(e,t,n){var r,i;function s(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&ST(e,a,n)),r}return s._value=t,s}function NT(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,CT(e,t,n??""))}function ET(e){return function(){this.textContent=e}}function zT(e){return function(){var t=e(this);this.textContent=t??""}}function TT(e){return this.tween("text",typeof e=="function"?zT(kp(this,"text",e)):ET(e==null?"":e+""))}function AT(e){return function(t){this.textContent=e.call(this,t)}}function PT(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&AT(i)),t}return r._value=e,r}function LT(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,PT(e))}function MT(){for(var e=this._name,t=this._id,n=M1(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)if(c=a[u]){var d=pn(c,t);bl(c,e,n,u,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Bn(r,this._parents,e,n)}function RT(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var l={value:a},c={value:function(){--i===0&&s()}};n.each(function(){var u=Sn(this,r),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),u.on=t}),i===0&&s()})}var IT=0;function Bn(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function M1(){return++IT}var En=ss.prototype;Bn.prototype={constructor:Bn,select:gT,selectAll:xT,selectChild:En.selectChild,selectChildren:En.selectChildren,filter:cT,merge:uT,selection:vT,transition:MT,call:En.call,nodes:En.nodes,node:En.node,size:En.size,empty:En.empty,each:En.each,on:fT,attr:J3,attrTween:X3,style:jT,styleTween:NT,text:TT,textTween:LT,remove:mT,tween:F3,delay:tT,duration:iT,ease:sT,easeVarying:lT,end:RT,[Symbol.iterator]:En[Symbol.iterator]};function OT(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var $T={time:null,delay:0,duration:250,ease:OT};function DT(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function FT(e){var t,n;e instanceof Bn?(t=e._id,e=e._name):(t=M1(),(n=$T).time=vp(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&bl(c,e,t,u,a,n||DT(c,t));return new Bn(r,this._parents,e,t)}ss.prototype.interrupt=O3;ss.prototype.transition=FT;function BT(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var s,a=n.length,l,c=0,u=0;for(s=0;s<a;++s)l=n[s],c+=l.x,u+=l.y;for(c=(c/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)l=n[s],l.x-=c,l.y-=u}return i.initialize=function(s){n=s},i.x=function(s){return arguments.length?(e=+s,i):e},i.y=function(s){return arguments.length?(t=+s,i):t},i.strength=function(s){return arguments.length?(r=+s,i):r},i}function UT(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return R1(this.cover(t,n),t,n,e)}function R1(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,s=e._root,a={data:r},l=e._x0,c=e._y0,u=e._x1,d=e._y1,p,f,h,g,v,w,m,x;if(!s)return e._root=a,e;for(;s.length;)if((v=t>=(p=(l+u)/2))?l=p:u=p,(w=n>=(f=(c+d)/2))?c=f:d=f,i=s,!(s=s[m=w<<1|v]))return i[m]=a,e;if(h=+e._x.call(null,s.data),g=+e._y.call(null,s.data),t===h&&n===g)return a.next=s,i?i[m]=a:e._root=a,e;do i=i?i[m]=new Array(4):e._root=new Array(4),(v=t>=(p=(l+u)/2))?l=p:u=p,(w=n>=(f=(c+d)/2))?c=f:d=f;while((m=w<<1|v)===(x=(g>=f)<<1|h>=p));return i[x]=s,i[m]=a,e}function VT(e){var t,n,r=e.length,i,s,a=new Array(r),l=new Array(r),c=1/0,u=1/0,d=-1/0,p=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(s=+this._y.call(null,t))||(a[n]=i,l[n]=s,i<c&&(c=i),i>d&&(d=i),s<u&&(u=s),s>p&&(p=s));if(c>d||u>p)return this;for(this.cover(c,u).cover(d,p),n=0;n<r;++n)R1(this,a[n],l[n],e[n]);return this}function WT(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,s=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var a=i-n||1,l=this._root,c,u;n>e||e>=i||r>t||t>=s;)switch(u=(t<r)<<1|e<n,c=new Array(4),c[u]=l,l=c,a*=2,u){case 0:i=n+a,s=r+a;break;case 1:n=i-a,s=r+a;break;case 2:i=n+a,r=s-a;break;case 3:n=i-a,r=s-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=s,this}function HT(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function qT(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function xt(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function JT(e,t,n){var r,i=this._x0,s=this._y0,a,l,c,u,d=this._x1,p=this._y1,f=[],h=this._root,g,v;for(h&&f.push(new xt(h,i,s,d,p)),n==null?n=1/0:(i=e-n,s=t-n,d=e+n,p=t+n,n*=n);g=f.pop();)if(!(!(h=g.node)||(a=g.x0)>d||(l=g.y0)>p||(c=g.x1)<i||(u=g.y1)<s))if(h.length){var w=(a+c)/2,m=(l+u)/2;f.push(new xt(h[3],w,m,c,u),new xt(h[2],a,m,w,u),new xt(h[1],w,l,c,m),new xt(h[0],a,l,w,m)),(v=(t>=m)<<1|e>=w)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-v],f[f.length-1-v]=g)}else{var x=e-+this._x.call(null,h.data),y=t-+this._y.call(null,h.data),j=x*x+y*y;if(j<n){var A=Math.sqrt(n=j);i=e-A,s=t-A,d=e+A,p=t+A,r=h.data}}return r}function KT(e){if(isNaN(d=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,n=this._root,r,i,s,a=this._x0,l=this._y0,c=this._x1,u=this._y1,d,p,f,h,g,v,w,m;if(!n)return this;if(n.length)for(;;){if((g=d>=(f=(a+c)/2))?a=f:c=f,(v=p>=(h=(l+u)/2))?l=h:u=h,t=n,!(n=n[w=v<<1|g]))return this;if(!n.length)break;(t[w+1&3]||t[w+2&3]||t[w+3&3])&&(r=t,m=w)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,i?(s?i.next=s:delete i.next,this):t?(s?t[w]=s:delete t[w],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[m]=n:this._root=n),this):(this._root=s,this)}function GT(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function YT(){return this._root}function QT(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function XT(e){var t=[],n,r=this._root,i,s,a,l,c;for(r&&t.push(new xt(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,s=n.x0,a=n.y0,l=n.x1,c=n.y1)&&r.length){var u=(s+l)/2,d=(a+c)/2;(i=r[3])&&t.push(new xt(i,u,d,l,c)),(i=r[2])&&t.push(new xt(i,s,d,u,c)),(i=r[1])&&t.push(new xt(i,u,a,l,d)),(i=r[0])&&t.push(new xt(i,s,a,u,d))}return this}function ZT(e){var t=[],n=[],r;for(this._root&&t.push(new xt(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var s,a=r.x0,l=r.y0,c=r.x1,u=r.y1,d=(a+c)/2,p=(l+u)/2;(s=i[0])&&t.push(new xt(s,a,l,d,p)),(s=i[1])&&t.push(new xt(s,d,l,c,p)),(s=i[2])&&t.push(new xt(s,a,p,d,u)),(s=i[3])&&t.push(new xt(s,d,p,c,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function e8(e){return e[0]}function t8(e){return arguments.length?(this._x=e,this):this._x}function n8(e){return e[1]}function r8(e){return arguments.length?(this._y=e,this):this._y}function _p(e,t,n){var r=new jp(t??e8,n??n8,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function jp(e,t,n,r,i,s){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=s,this._root=void 0}function qm(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var wt=_p.prototype=jp.prototype;wt.copy=function(){var e=new jp(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=qm(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=qm(r));return e};wt.add=UT;wt.addAll=VT;wt.cover=WT;wt.data=HT;wt.extent=qT;wt.find=JT;wt.remove=KT;wt.removeAll=GT;wt.root=YT;wt.size=QT;wt.visit=XT;wt.visitAfter=ZT;wt.x=t8;wt.y=r8;function Tr(e){return function(){return e}}function er(e){return(e()-.5)*1e-6}function i8(e){return e.x+e.vx}function o8(e){return e.y+e.vy}function s8(e){var t,n,r,i=1,s=1;typeof e!="function"&&(e=Tr(e==null?1:+e));function a(){for(var u,d=t.length,p,f,h,g,v,w,m=0;m<s;++m)for(p=_p(t,i8,o8).visitAfter(l),u=0;u<d;++u)f=t[u],v=n[f.index],w=v*v,h=f.x+f.vx,g=f.y+f.vy,p.visit(x);function x(y,j,A,C,P){var N=y.data,D=y.r,E=v+D;if(N){if(N.index>f.index){var M=h-N.x-N.vx,L=g-N.y-N.vy,U=M*M+L*L;U<E*E&&(M===0&&(M=er(r),U+=M*M),L===0&&(L=er(r),U+=L*L),U=(E-(U=Math.sqrt(U)))/U*i,f.vx+=(M*=U)*(E=(D*=D)/(w+D)),f.vy+=(L*=U)*E,N.vx-=M*(E=1-E),N.vy-=L*E)}return}return j>h+E||C<h-E||A>g+E||P<g-E}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<4;++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,p;for(n=new Array(d),u=0;u<d;++u)p=t[u],n[p.index]=+e(p,u,t)}}return a.initialize=function(u,d){t=u,r=d,c()},a.iterations=function(u){return arguments.length?(s=+u,a):s},a.strength=function(u){return arguments.length?(i=+u,a):i},a.radius=function(u){return arguments.length?(e=typeof u=="function"?u:Tr(+u),c(),a):e},a}function a8(e){return e.index}function Jm(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function l8(e){var t=a8,n=p,r,i=Tr(30),s,a,l,c,u,d=1;e==null&&(e=[]);function p(w){return 1/Math.min(l[w.source.index],l[w.target.index])}function f(w){for(var m=0,x=e.length;m<d;++m)for(var y=0,j,A,C,P,N,D,E;y<x;++y)j=e[y],A=j.source,C=j.target,P=C.x+C.vx-A.x-A.vx||er(u),N=C.y+C.vy-A.y-A.vy||er(u),D=Math.sqrt(P*P+N*N),D=(D-s[y])/D*w*r[y],P*=D,N*=D,C.vx-=P*(E=c[y]),C.vy-=N*E,A.vx+=P*(E=1-E),A.vy+=N*E}function h(){if(a){var w,m=a.length,x=e.length,y=new Map(a.map((A,C)=>[t(A,C,a),A])),j;for(w=0,l=new Array(m);w<x;++w)j=e[w],j.index=w,typeof j.source!="object"&&(j.source=Jm(y,j.source)),typeof j.target!="object"&&(j.target=Jm(y,j.target)),l[j.source.index]=(l[j.source.index]||0)+1,l[j.target.index]=(l[j.target.index]||0)+1;for(w=0,c=new Array(x);w<x;++w)j=e[w],c[w]=l[j.source.index]/(l[j.source.index]+l[j.target.index]);r=new Array(x),g(),s=new Array(x),v()}}function g(){if(a)for(var w=0,m=e.length;w<m;++w)r[w]=+n(e[w],w,e)}function v(){if(a)for(var w=0,m=e.length;w<m;++w)s[w]=+i(e[w],w,e)}return f.initialize=function(w,m){a=w,u=m,h()},f.links=function(w){return arguments.length?(e=w,h(),f):e},f.id=function(w){return arguments.length?(t=w,f):t},f.iterations=function(w){return arguments.length?(d=+w,f):d},f.strength=function(w){return arguments.length?(n=typeof w=="function"?w:Tr(+w),g(),f):n},f.distance=function(w){return arguments.length?(i=typeof w=="function"?w:Tr(+w),v(),f):i},f}const c8=1664525,u8=1013904223,Km=4294967296;function d8(){let e=1;return()=>(e=(c8*e+u8)%Km)/Km}function p8(e){return e.x}function f8(e){return e.y}var h8=10,m8=Math.PI*(3-Math.sqrt(5));function g8(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),s=0,a=.6,l=new Map,c=bp(p),u=os("tick","end"),d=d8();e==null&&(e=[]);function p(){f(),u.call("tick",t),n<r&&(c.stop(),u.call("end",t))}function f(v){var w,m=e.length,x;v===void 0&&(v=1);for(var y=0;y<v;++y)for(n+=(s-n)*i,l.forEach(function(j){j(n)}),w=0;w<m;++w)x=e[w],x.fx==null?x.x+=x.vx*=a:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=a:(x.y=x.fy,x.vy=0);return t}function h(){for(var v=0,w=e.length,m;v<w;++v){if(m=e[v],m.index=v,m.fx!=null&&(m.x=m.fx),m.fy!=null&&(m.y=m.fy),isNaN(m.x)||isNaN(m.y)){var x=h8*Math.sqrt(.5+v),y=v*m8;m.x=x*Math.cos(y),m.y=x*Math.sin(y)}(isNaN(m.vx)||isNaN(m.vy))&&(m.vx=m.vy=0)}}function g(v){return v.initialize&&v.initialize(e,d),v}return h(),t={tick:f,restart:function(){return c.restart(p),t},stop:function(){return c.stop(),t},nodes:function(v){return arguments.length?(e=v,h(),l.forEach(g),t):e},alpha:function(v){return arguments.length?(n=+v,t):n},alphaMin:function(v){return arguments.length?(r=+v,t):r},alphaDecay:function(v){return arguments.length?(i=+v,t):+i},alphaTarget:function(v){return arguments.length?(s=+v,t):s},velocityDecay:function(v){return arguments.length?(a=1-v,t):1-a},randomSource:function(v){return arguments.length?(d=v,l.forEach(g),t):d},force:function(v,w){return arguments.length>1?(w==null?l.delete(v):l.set(v,g(w)),t):l.get(v)},find:function(v,w,m){var x=0,y=e.length,j,A,C,P,N;for(m==null?m=1/0:m*=m,x=0;x<y;++x)P=e[x],j=v-P.x,A=w-P.y,C=j*j+A*A,C<m&&(N=P,m=C);return N},on:function(v,w){return arguments.length>1?(u.on(v,w),t):u.on(v)}}}function x8(){var e,t,n,r,i=Tr(-30),s,a=1,l=1/0,c=.81;function u(h){var g,v=e.length,w=_p(e,p8,f8).visitAfter(p);for(r=h,g=0;g<v;++g)t=e[g],w.visit(f)}function d(){if(e){var h,g=e.length,v;for(s=new Array(g),h=0;h<g;++h)v=e[h],s[v.index]=+i(v,h,e)}}function p(h){var g=0,v,w,m=0,x,y,j;if(h.length){for(x=y=j=0;j<4;++j)(v=h[j])&&(w=Math.abs(v.value))&&(g+=v.value,m+=w,x+=w*v.x,y+=w*v.y);h.x=x/m,h.y=y/m}else{v=h,v.x=v.data.x,v.y=v.data.y;do g+=s[v.data.index];while(v=v.next)}h.value=g}function f(h,g,v,w){if(!h.value)return!0;var m=h.x-t.x,x=h.y-t.y,y=w-g,j=m*m+x*x;if(y*y/c<j)return j<l&&(m===0&&(m=er(n),j+=m*m),x===0&&(x=er(n),j+=x*x),j<a&&(j=Math.sqrt(a*j)),t.vx+=m*h.value*r/j,t.vy+=x*h.value*r/j),!0;if(h.length||j>=l)return;(h.data!==t||h.next)&&(m===0&&(m=er(n),j+=m*m),x===0&&(x=er(n),j+=x*x),j<a&&(j=Math.sqrt(a*j)));do h.data!==t&&(y=s[h.data.index]*r/j,t.vx+=m*y,t.vy+=x*y);while(h=h.next)}return u.initialize=function(h,g){e=h,n=g,d()},u.strength=function(h){return arguments.length?(i=typeof h=="function"?h:Tr(+h),d(),u):i},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}const $s=e=>()=>e;function y8(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Mn(e,t,n){this.k=e,this.x=t,this.y=n}Mn.prototype={constructor:Mn,scale:function(e){return e===1?this:new Mn(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Mn(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Wa=new Mn(1,0,0);Mn.prototype;function bc(e){e.stopImmediatePropagation()}function Xi(e){e.preventDefault(),e.stopImmediatePropagation()}function v8(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function b8(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Gm(){return this.__zoom||Wa}function w8(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function k8(){return navigator.maxTouchPoints||"ontouchstart"in this}function _8(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>s?(s+a)/2:Math.min(0,s)||Math.max(0,a))}function j8(){var e=v8,t=b8,n=_8,r=w8,i=k8,s=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,c=z3,u=os("start","zoom","end"),d,p,f,h=500,g=150,v=0,w=10;function m(T){T.property("__zoom",Gm).on("wheel.zoom",N,{passive:!1}).on("mousedown.zoom",D).on("dblclick.zoom",E).filter(i).on("touchstart.zoom",M).on("touchmove.zoom",L).on("touchend.zoom touchcancel.zoom",U).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}m.transform=function(T,I,$,z){var O=T.selection?T.selection():T;O.property("__zoom",Gm),T!==O?A(T,I,$,z):O.interrupt().each(function(){C(this,arguments).event(z).start().zoom(null,typeof I=="function"?I.apply(this,arguments):I).end()})},m.scaleBy=function(T,I,$,z){m.scaleTo(T,function(){var O=this.__zoom.k,R=typeof I=="function"?I.apply(this,arguments):I;return O*R},$,z)},m.scaleTo=function(T,I,$,z){m.transform(T,function(){var O=t.apply(this,arguments),R=this.__zoom,_=$==null?j(O):typeof $=="function"?$.apply(this,arguments):$,H=R.invert(_),K=typeof I=="function"?I.apply(this,arguments):I;return n(y(x(R,K),_,H),O,a)},$,z)},m.translateBy=function(T,I,$,z){m.transform(T,function(){return n(this.__zoom.translate(typeof I=="function"?I.apply(this,arguments):I,typeof $=="function"?$.apply(this,arguments):$),t.apply(this,arguments),a)},null,z)},m.translateTo=function(T,I,$,z,O){m.transform(T,function(){var R=t.apply(this,arguments),_=this.__zoom,H=z==null?j(R):typeof z=="function"?z.apply(this,arguments):z;return n(Wa.translate(H[0],H[1]).scale(_.k).translate(typeof I=="function"?-I.apply(this,arguments):-I,typeof $=="function"?-$.apply(this,arguments):-$),R,a)},z,O)};function x(T,I){return I=Math.max(s[0],Math.min(s[1],I)),I===T.k?T:new Mn(I,T.x,T.y)}function y(T,I,$){var z=I[0]-$[0]*T.k,O=I[1]-$[1]*T.k;return z===T.x&&O===T.y?T:new Mn(T.k,z,O)}function j(T){return[(+T[0][0]+ +T[1][0])/2,(+T[0][1]+ +T[1][1])/2]}function A(T,I,$,z){T.on("start.zoom",function(){C(this,arguments).event(z).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(z).end()}).tween("zoom",function(){var O=this,R=arguments,_=C(O,R).event(z),H=t.apply(O,R),K=$==null?j(H):typeof $=="function"?$.apply(O,R):$,b=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),W=O.__zoom,S=typeof I=="function"?I.apply(O,R):I,V=c(W.invert(K).concat(b/W.k),S.invert(K).concat(b/S.k));return function(ie){if(ie===1)ie=S;else{var ae=V(ie),q=b/ae[2];ie=new Mn(q,K[0]-ae[0]*q,K[1]-ae[1]*q)}_.zoom(null,ie)}})}function C(T,I,$){return!$&&T.__zooming||new P(T,I)}function P(T,I){this.that=T,this.args=I,this.active=0,this.sourceEvent=null,this.extent=t.apply(T,I),this.taps=0}P.prototype={event:function(T){return T&&(this.sourceEvent=T),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(T,I){return this.mouse&&T!=="mouse"&&(this.mouse[1]=I.invert(this.mouse[0])),this.touch0&&T!=="touch"&&(this.touch0[1]=I.invert(this.touch0[0])),this.touch1&&T!=="touch"&&(this.touch1[1]=I.invert(this.touch1[0])),this.that.__zoom=I,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(T){var I=Gt(this.that).datum();u.call(T,this.that,new y8(T,{sourceEvent:this.sourceEvent,target:m,transform:this.that.__zoom,dispatch:u}),I)}};function N(T,...I){if(!e.apply(this,arguments))return;var $=C(this,I).event(T),z=this.__zoom,O=Math.max(s[0],Math.min(s[1],z.k*Math.pow(2,r.apply(this,arguments)))),R=Tn(T);if($.wheel)($.mouse[0][0]!==R[0]||$.mouse[0][1]!==R[1])&&($.mouse[1]=z.invert($.mouse[0]=R)),clearTimeout($.wheel);else{if(z.k===O)return;$.mouse=[R,z.invert(R)],ia(this),$.start()}Xi(T),$.wheel=setTimeout(_,g),$.zoom("mouse",n(y(x(z,O),$.mouse[0],$.mouse[1]),$.extent,a));function _(){$.wheel=null,$.end()}}function D(T,...I){if(f||!e.apply(this,arguments))return;var $=T.currentTarget,z=C(this,I,!0).event(T),O=Gt(T.view).on("mousemove.zoom",K,!0).on("mouseup.zoom",b,!0),R=Tn(T,$),_=T.clientX,H=T.clientY;w1(T.view),bc(T),z.mouse=[R,this.__zoom.invert(R)],ia(this),z.start();function K(W){if(Xi(W),!z.moved){var S=W.clientX-_,V=W.clientY-H;z.moved=S*S+V*V>v}z.event(W).zoom("mouse",n(y(z.that.__zoom,z.mouse[0]=Tn(W,$),z.mouse[1]),z.extent,a))}function b(W){O.on("mousemove.zoom mouseup.zoom",null),k1(W.view,z.moved),Xi(W),z.event(W).end()}}function E(T,...I){if(e.apply(this,arguments)){var $=this.__zoom,z=Tn(T.changedTouches?T.changedTouches[0]:T,this),O=$.invert(z),R=$.k*(T.shiftKey?.5:2),_=n(y(x($,R),z,O),t.apply(this,I),a);Xi(T),l>0?Gt(this).transition().duration(l).call(A,_,z,T):Gt(this).call(m.transform,_,z,T)}}function M(T,...I){if(e.apply(this,arguments)){var $=T.touches,z=$.length,O=C(this,I,T.changedTouches.length===z).event(T),R,_,H,K;for(bc(T),_=0;_<z;++_)H=$[_],K=Tn(H,this),K=[K,this.__zoom.invert(K),H.identifier],O.touch0?!O.touch1&&O.touch0[2]!==K[2]&&(O.touch1=K,O.taps=0):(O.touch0=K,R=!0,O.taps=1+!!d);d&&(d=clearTimeout(d)),R&&(O.taps<2&&(p=K[0],d=setTimeout(function(){d=null},h)),ia(this),O.start())}}function L(T,...I){if(this.__zooming){var $=C(this,I).event(T),z=T.changedTouches,O=z.length,R,_,H,K;for(Xi(T),R=0;R<O;++R)_=z[R],H=Tn(_,this),$.touch0&&$.touch0[2]===_.identifier?$.touch0[0]=H:$.touch1&&$.touch1[2]===_.identifier&&($.touch1[0]=H);if(_=$.that.__zoom,$.touch1){var b=$.touch0[0],W=$.touch0[1],S=$.touch1[0],V=$.touch1[1],ie=(ie=S[0]-b[0])*ie+(ie=S[1]-b[1])*ie,ae=(ae=V[0]-W[0])*ae+(ae=V[1]-W[1])*ae;_=x(_,Math.sqrt(ie/ae)),H=[(b[0]+S[0])/2,(b[1]+S[1])/2],K=[(W[0]+V[0])/2,(W[1]+V[1])/2]}else if($.touch0)H=$.touch0[0],K=$.touch0[1];else return;$.zoom("touch",n(y(_,H,K),$.extent,a))}}function U(T,...I){if(this.__zooming){var $=C(this,I).event(T),z=T.changedTouches,O=z.length,R,_;for(bc(T),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),R=0;R<O;++R)_=z[R],$.touch0&&$.touch0[2]===_.identifier?delete $.touch0:$.touch1&&$.touch1[2]===_.identifier&&delete $.touch1;if($.touch1&&!$.touch0&&($.touch0=$.touch1,delete $.touch1),$.touch0)$.touch0[1]=this.__zoom.invert($.touch0[0]);else if($.end(),$.taps===2&&(_=Tn(_,this),Math.hypot(p[0]-_[0],p[1]-_[1])<w)){var H=Gt(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return m.wheelDelta=function(T){return arguments.length?(r=typeof T=="function"?T:$s(+T),m):r},m.filter=function(T){return arguments.length?(e=typeof T=="function"?T:$s(!!T),m):e},m.touchable=function(T){return arguments.length?(i=typeof T=="function"?T:$s(!!T),m):i},m.extent=function(T){return arguments.length?(t=typeof T=="function"?T:$s([[+T[0][0],+T[0][1]],[+T[1][0],+T[1][1]]]),m):t},m.scaleExtent=function(T){return arguments.length?(s[0]=+T[0],s[1]=+T[1],m):[s[0],s[1]]},m.translateExtent=function(T){return arguments.length?(a[0][0]=+T[0][0],a[1][0]=+T[1][0],a[0][1]=+T[0][1],a[1][1]=+T[1][1],m):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},m.constrain=function(T){return arguments.length?(n=T,m):n},m.duration=function(T){return arguments.length?(l=+T,m):l},m.interpolate=function(T){return arguments.length?(c=T,m):c},m.on=function(){var T=u.on.apply(u,arguments);return T===u?m:T},m.clickDistance=function(T){return arguments.length?(v=(T=+T)*T,m):Math.sqrt(v)},m.tapDistance=function(T){return arguments.length?(w=+T,m):w},m}const Ym=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],Qm=new Map;function Xm(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};const t=Qm.get(e);if(t)return t;let n=0;for(let s=0;s<e.length;s++)n=(n<<5)-n+e.charCodeAt(s),n=n&n;const r=Math.abs(n)%Ym.length,i=Ym[r];return Qm.set(e,i),i}const Zm={bg:"#14b8a6"};function S8({agents:e,events:t,selectedEventIndex:n,isOpen:r,onOpenChange:i}){const[s,a]=k.useState(!1),l=r!==void 0?r:s,c=C=>{i?i(C):a(C)},[u,d]=k.useState(null),p=k.useRef(null),f=k.useRef(null),h=k.useRef(null),g=k.useRef(new Map),v=k.useRef(null),{activeAgent:w,activeTool:m,transitions:x,visitedAgents:y,toolCalls:j}=k.useMemo(()=>{var I;const C=n!==null?n:t.length-1;if(C<0||t.length===0)return{activeAgent:null,activeTool:null,transitions:new Map,visitedAgents:new Set,toolCalls:new Map};const P=t.slice(0,C+1),N=new Map,D=new Map,E=new Set,M=new Set;E.add("system");const L=["system"];let U=null;for(const $ of P)if($.event_type==="agent_start"){const z=$.agent_name;if(E.add(z),L.length>0){const O=L[L.length-1];if(O!==z){const R=`${O}->${z}`;N.set(R,(N.get(R)||0)+1)}}L.push(z)}else if($.event_type==="agent_end")L.length>1&&L.pop();else if($.event_type==="tool_call"){const z=(I=$.data)==null?void 0:I.tool_name;if(z&&L.length>0){const O=L[L.length-1];M.add(z);const R=`${O}->tool:${z}`;D.set(R,(D.get(R)||0)+1),U=z}}else $.event_type==="tool_result"&&(U=null);return M.forEach($=>E.add(`tool:${$}`)),{activeAgent:L.length>1?L[L.length-1]:null,activeTool:U,transitions:N,visitedAgents:E,toolCalls:D}},[t,n]),A=k.useMemo(()=>{const C=new Map(e.map(M=>[M.name,M])),P=[],N=new Map;for(const M of y){if(M.startsWith("tool:"))continue;const L=C.get(M),U=(L==null?void 0:L.id)||M,T=g.current.get(U);P.push({id:U,name:M,type:M==="system"?"System":(L==null?void 0:L.type)||"LlmAgent",isActive:M===w,wasActive:!0,x:T==null?void 0:T.x,y:T==null?void 0:T.y}),N.set(M,U)}for(const M of y){if(!M.startsWith("tool:"))continue;const L=M.slice(5),U=`tool:${L}`,T=g.current.get(U);P.push({id:U,name:L,type:"Tool",isActive:L===m,wasActive:!0,x:T==null?void 0:T.x,y:T==null?void 0:T.y}),N.set(M,U)}const D=new Set(P.map(M=>M.id)),E=[];for(const[M,L]of x){const[U,T]=M.split("->"),I=N.get(U),$=N.get(T);I&&$&&D.has(I)&&D.has($)&&E.push({source:I,target:$,type:"transition",count:L})}for(const[M,L]of j){const[U,T]=M.split("->"),I=N.get(U),$=N.get(T);I&&$&&D.has(I)&&D.has($)&&E.push({source:I,target:$,type:"tool",count:L})}return{nodes:P,links:E}},[e,w,m,y,x,j]);return k.useEffect(()=>{var W;if(!p.current||!l)return;const C=Gt(p.current),P=300,N=400;C.selectAll("*").remove();const D=C.append("g"),E={current:((W=v.current)==null?void 0:W.k)||1},M=j8().scaleExtent([.3,3]).on("zoom",S=>{D.attr("transform",S.transform),v.current=S.transform,E.current=S.transform.k});C.call(M),v.current&&(C.call(M.transform,v.current),E.current=v.current.k);const L=()=>{if(A.nodes.length===0)return null;let S=1/0,V=-1/0,ie=1/0,ae=-1/0;if(A.nodes.forEach(ge=>{ge.x!==void 0&&ge.y!==void 0&&(S=Math.min(S,ge.x),V=Math.max(V,ge.x),ie=Math.min(ie,ge.y),ae=Math.max(ae,ge.y))}),S===1/0)return null;const q=60,F=V-S+q*2,G=ae-ie+q*2,X=Math.min(P/F,N/G,1.5)*.85,Q=(S+V)/2,le=(ie+ae)/2;return Wa.translate(P/2,N/2).scale(X).translate(-Q,-le)},U=(S,V,ie)=>S+(V-S)*ie,T=S=>{const V=v.current;if(!V){v.current=S,E.current=S.k,C.call(M.transform,S);return}const ie=.15,ae=U(V.x,S.x,ie),q=U(V.y,S.y,ie),F=U(V.k,S.k,ie),G=Wa.translate(ae,q).scale(F);v.current=G,E.current=G.k,C.call(M.transform,G)},I=A.nodes.every(S=>S.x!==void 0&&S.y!==void 0),$=140,z=()=>{const S=$/E.current;for(const V of A.nodes){if(V.x===void 0||V.y===void 0)continue;const ie=Math.sqrt(V.x*V.x+V.y*V.y);if(ie>S){const ae=S/ie;V.x*=ae,V.y*=ae}}},O=()=>{for(const S of A.nodes)if(S.name==="system"&&S.x!==void 0&&S.y!==void 0){const ie=$/E.current*.75,ae=225*Math.PI/180,q=ie*Math.cos(ae),F=-ie*Math.sin(ae),G=.3;S.vx=(S.vx||0)+(q-S.x)*G,S.vy=(S.vy||0)+(F-S.y)*G}},R=g8(A.nodes).force("link",l8(A.links).id(S=>S.id).distance(100)).force("charge",x8().strength(-400)).force("center",BT(0,0)).force("collision",s8().radius(40)).force("boundary",z).force("systemPull",O).alphaDecay(.01);I?R.alpha(.3):R.alpha(1),h.current=R;const _=D.append("g").selectAll("path").data(A.links).join("path").attr("stroke",S=>S.type==="transition"?"#22c55e":S.type==="sub_agent"?"#6366f1":"#f59e0b").attr("stroke-width",S=>S.type==="transition"?Math.min(S.count+2,20):1.5).attr("stroke-opacity",S=>S.type==="transition"?.8:.4).attr("stroke-dasharray",S=>S.type==="tool"?"4,2":"none").attr("fill","none"),H=D.append("g").selectAll("g").data(A.nodes).join("g").call(r3().on("start",(S,V)=>{S.active||R.alphaTarget(.3).restart(),V.fx=V.x,V.fy=V.y}).on("drag",(S,V)=>{V.fx=S.x,V.fy=S.y}).on("end",(S,V)=>{S.active||R.alphaTarget(0),V.fx=null,V.fy=null})),K=S=>S.type==="System"?14:S.type==="Tool"?12:18;H.append("circle").attr("r",S=>K(S)).attr("fill",S=>S.type==="Tool"?Zm.bg:Xm(S.name).bg).attr("stroke",S=>S.isActive?"#fff":S.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",S=>S.isActive?3:1.5).attr("opacity",S=>S.wasActive?1:.5).attr("class",S=>S.isActive?"active-node":"").style("cursor","pointer").on("mouseenter",function(S,V){var F;const ie=(F=f.current)==null?void 0:F.getBoundingClientRect();if(!ie)return;const ae=S.clientX-ie.left,q=S.clientY-ie.top;d({x:ae,y:q,node:V}),Gt(this).transition().duration(150).attr("r",K(V)+6)}).on("mouseleave",function(S,V){d(null),Gt(this).transition().duration(150).attr("r",K(V))}),H.append("text").text(S=>S.name.length>10?S.name.slice(0,8)+"…":S.name).attr("text-anchor","middle").attr("dy",32).attr("font-size",10).attr("fill","#e4e4e7").attr("font-weight",S=>S.isActive?600:400),R.on("tick",()=>{_.attr("d",V=>{const ie=V.target.x-V.source.x,ae=V.target.y-V.source.y,q=Math.sqrt(ie*ie+ae*ae)*(V.type==="transition"?1.5:2);return`M${V.source.x},${V.source.y}A${q},${q} 0 0,1 ${V.target.x},${V.target.y}`}),H.attr("transform",V=>`translate(${V.x},${V.y})`),A.nodes.forEach(V=>{V.x!==void 0&&V.y!==void 0&&g.current.set(V.id,{x:V.x,y:V.y})});const S=L();S&&T(S)});const b=L();return b&&T(b),()=>{R.stop()}},[A,l]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:`agent-graph-container ${l?"":"closed"}`,children:o.jsxs("div",{className:"agent-graph-panel",children:[o.jsxs("div",{className:"agent-graph-content",ref:f,children:[o.jsx("svg",{ref:p,className:"agent-graph-svg"}),o.jsxs("div",{className:"agent-graph-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#22c55e"}}),o.jsx("span",{children:"agent flow"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#f59e0b",borderStyle:"dashed"}}),o.jsx("span",{children:"tool call"})]})]}),u&&o.jsxs("div",{className:"agent-graph-tooltip",style:{left:Math.min(u.x+15,180),top:Math.max(u.y-20,10)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:u.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:u.node.type==="Tool"?Zm.bg:Xm(u.node.name).bg}}),u.node.type]}),u.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"})]})]}),o.jsx("button",{className:"agent-graph-toggle",onClick:()=>c(!l),children:o.jsx(_t,{size:20})})]})})]})}const eg={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},C8={agent_start:wu,agent_end:wu,tool_call:un,tool_result:un,model_call:Hd,model_response:Pa,state_change:In,transfer:uv,callback_start:_n,callback_end:_n,callback_error:ev},tg=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],ng=new Map;function Ha(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=ng.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%tg.length,ng.set(e,t)}return tg[t]}function N8(e){var t,n,r,i,s,a,l,c,u,d,p,f,h,g,v,w,m,x,y,j,A,C,P,N,D,E,M,L,U;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const I=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([q,F])=>{const G=F!=null?JSON.stringify(F):"null";return`${q}=${G.slice(0,500)}${G.length>500?"...":""}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${I.slice(0,1e3)}${I.length>1e3?"...":""})`;case"tool_result":const $=(i=e.data)==null?void 0:i.result;let z="";if((a=(s=$==null?void 0:$.content)==null?void 0:s[0])!=null&&a.text)z=String($.content[0].text).slice(0,500);else if(typeof $=="string")z=$.slice(0,500);else if($!=null){const q=JSON.stringify($);z=q?q.slice(0,500):""}else z="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${z}${z.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const O=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((h=e.data)==null?void 0:h.parts)||[],R=O.find(q=>(q==null?void 0:q.type)==="function_call");if(R)return`LLM_RSP → ${R.name||"unknown"}()`;const _=O.find(q=>(q==null?void 0:q.type)==="text");if(_!=null&&_.text){const q=String(_.text);return`LLM_RSP "${q.slice(0,50)}${q.length>50?"...":""}"`}return`LLM_RSP (${((g=e.data)==null?void 0:g.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((v=e.data)==null?void 0:v.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((w=e.data)==null?void 0:w.target)||"unknown"}`;case"callback_start":const K=((m=e.data)==null?void 0:m.callback_name)||"unknown",b=((x=e.data)==null?void 0:x.callback_type)||"";return K==="network_approval"?`⏳ AWAITING APPROVAL ${((y=e.data)==null?void 0:y.host)||((j=e.data)==null?void 0:j.url)||""}`:`CALLBACK START ${b?`[${b}]`:""} ${K}`;case"callback_end":const W=((A=e.data)==null?void 0:A.callback_name)||"unknown",S=((C=e.data)==null?void 0:C.callback_type)||"",V=(P=e.data)!=null&&P.error?" [ERROR]":"";return W==="network_approval"?((N=e.data)==null?void 0:N.action)==="deny"?`🚫 DENIED ${((D=e.data)==null?void 0:D.host)||""}`:`✅ APPROVED ${((E=e.data)==null?void 0:E.pattern)||((M=e.data)==null?void 0:M.host)||""}`:`CALLBACK END ${S?`[${S}]`:""} ${W}${V}`;case"callback_error":const ie=((L=e.data)==null?void 0:L.source)||"unknown",ae=((U=e.data)==null?void 0:U.error)||"Unknown error";return`⚠️ ERROR in ${ie}: ${ae.slice(0,50)}${ae.length>50?"...":""}`;default:return e.event_type.toUpperCase()}}function E8(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function z8(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,i=0;const s=(l,c)=>{l&&n.push(c?o.jsx("span",{style:{color:c},children:l},i++):o.jsx("span",{children:l},i++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const p=r.match(c);if(p&&p.index!==void 0){const f=d?r.indexOf(p[d],p.index):p.index,h=d?p[d]:p[0];(!l||f<l.index)&&(l={index:f,length:h.length,text:h,color:u})}}if(l)l.index>0&&s(r.slice(0,l.index)),s(l.text,l.color),r=r.slice(l.index+l.length);else{s(r);break}}return o.jsx(o.Fragment,{children:n})}function T8({content:e}){const t=e.split(`
`);return o.jsx(o.Fragment,{children:t.map((n,r)=>o.jsx("div",{children:z8(n)},r))})}function A8({event:e}){var l,c,u,d,p,f,h,g,v,w,m,x,y,j,A,C,P,N,D,E,M;const[t,n]=k.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,i]=k.useState(null),s=L=>{const U=new Set(t);U.has(L)?U.delete(L):U.add(L),n(U)},a=(L,U=0,T=!1)=>{const I="  ".repeat(U),$="  ".repeat(U+1);if(L===null)return o.jsx("span",{className:"json-null",children:"null"});if(L===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof L=="boolean")return o.jsx("span",{className:"json-boolean",children:L.toString()});if(typeof L=="number")return o.jsx("span",{className:"json-number",children:L});if(typeof L=="string"){const z=L.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),O=()=>i(L);return z.length>300&&U>0?o.jsxs("span",{className:"json-string json-string-clickable",onClick:O,title:"Click to view as Markdown",children:['"',z.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",L.length," chars)"]})]}):o.jsxs("span",{className:"json-string json-string-clickable",onClick:O,title:"Click to view as Markdown",children:['"',z,'"']})}if(Array.isArray(L))return L.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):L.every(O=>O===null||typeof O!="object")&&L.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),L.map((O,R)=>o.jsxs("span",{children:[a(O,U+1,!0),R<L.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},R)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),L.map((O,R)=>o.jsxs("span",{children:[`
`+$,a(O,U+1),R<L.length-1&&o.jsx("span",{className:"json-comma",children:","})]},R)),`
`+I,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof L=="object"){const z=Object.entries(L);return z.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):z.length<=2&&z.every(([,R])=>R===null||typeof R!="object")&&T?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),z.map(([R,_],H)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',R,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(_,U+1,!0),H<z.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},R)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),z.map(([R,_],H)=>o.jsxs("span",{children:[`
`+$,o.jsxs("span",{className:"json-key",children:['"',R,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(_,U+1),H<z.length-1&&o.jsx("span",{className:"json-comma",children:","})]},R)),`
`+I,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(L)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",style:{backgroundColor:Ha(e.agent_name).bg,color:Ha(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("data"),children:[t.has("data")?o.jsx(Rt,{size:12}):o.jsx(_t,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((l=e.data)==null?void 0:l.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("instruction"),children:[t.has("instruction")?o.jsx(Rt,{size:12}):o.jsx(_t,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((c=e.data)==null?void 0:c.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("messages"),children:[t.has("messages")?o.jsx(Rt,{size:12}):o.jsx(_t,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((L,U)=>{var T;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${L.role}`,children:L.role}),o.jsx("div",{className:"message-parts",children:(T=L.parts)==null?void 0:T.map((I,$)=>o.jsxs("div",{className:"message-part",children:[I.text&&o.jsx("pre",{children:I.text}),I.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:I.function_call.name}),o.jsx("pre",{children:JSON.stringify(I.function_call.args,null,2)})]}),I.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:I.function_response.name}),o.jsx("pre",{children:JSON.stringify(I.function_response.response,null,2)})]})]},$))})]},U)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("result"),children:[t.has("result")?o.jsx(Rt,{size:12}):o.jsx(_t,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((f=(p=(d=(u=e.data)==null?void 0:u.result)==null?void 0:d.content)==null?void 0:p[0])==null?void 0:f.text)||(typeof((h=e.data)==null?void 0:h.result)=="string"?e.data.result:JSON.stringify((g=e.data)==null?void 0:g.result,null,2))})})]}),e.event_type==="model_response"&&((v=e.data)==null?void 0:v.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("response"),children:[t.has("response")?o.jsx(Rt,{size:12}):o.jsx(_t,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((L,U)=>o.jsxs("div",{className:"response-part",children:[L.type==="text"&&L.text&&o.jsx("pre",{className:"response-text",children:L.text}),L.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",L.name,"()"]}),L.args&&Object.keys(L.args).length>0&&o.jsx("pre",{children:JSON.stringify(L.args,null,2)})]}),L.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},U))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("callback_info"),children:[t.has("callback_info")?o.jsx(Rt,{size:12}):o.jsx(_t,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((w=e.data)==null?void 0:w.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((m=e.data)==null?void 0:m.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((x=e.data)==null?void 0:x.module_path)||"unknown"]}),((y=e.data)==null?void 0:y.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((j=e.data)==null?void 0:j.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((A=e.data)==null?void 0:A.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",onClick:()=>s("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?o.jsx(Rt,{size:12}):o.jsx(_t,{size:12}),o.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Source:"})," ",((C=e.data)==null?void 0:C.source)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error Type:"})," ",((P=e.data)==null?void 0:P.error_type)||"unknown"]}),o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",((N=e.data)==null?void 0:N.error)||"No error message"]}),((D=e.data)==null?void 0:D.context)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Context:"})," ",e.data.context]}),((E=e.data)==null?void 0:E.traceback)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&((M=e.data)==null?void 0:M.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("state_delta"),children:[t.has("state_delta")?o.jsx(Rt,{size:12}):o.jsx(_t,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([L,U])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:L}),o.jsx("pre",{className:"state-delta-value",children:typeof U=="string"?U:JSON.stringify(U,null,2)})]},L))})]}),r&&o.jsx(P8,{content:r,onClose:()=>i(null)})]})}function P8({content:e,onClose:t}){return o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:o.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Or,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"String Content"}),o.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:o.jsx(Ai,{size:18})})]}),o.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:o.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:o.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(ts,{size:12}),"Copy"]})})]})})}function L8({content:e,title:t,onClose:n}){return o.jsxs("div",{className:"modal-overlay",onClick:n,children:[o.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:t}),o.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(n1,{children:e})})]}),o.jsx("style",{children:`
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
      `})]})}function M8({events:e,selectedEventIndex:t,project:n}){const[r,i]=k.useState(null),s=k.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,h])=>{var g;l[f]={...l[f],value:h,timestamp:d.timestamp,defined:((g=l[f])==null?void 0:g.defined)??!1}})}),l},[e,t,n]),a=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(L8,{content:r.content,title:r.title,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>o.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[l,f&&o.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),o.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const h=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:h,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&o.jsx("div",{className:"state-desc",children:p}),u&&o.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function R8({project:e,sessionId:t}){const[n,r]=k.useState([]),[i,s]=k.useState(!1),[a,l]=k.useState(null),[c,u]=k.useState(null),[d,p]=k.useState(null);k.useEffect(()=>{if(!(e!=null&&e.id)||!t){r([]);return}(async()=>{s(!0),l(null);try{const w=await Fy(e.id,t);r(w)}catch(w){l(w.message||"Failed to load artifacts"),r([])}finally{s(!1)}})()},[e==null?void 0:e.id,t]);const f=v=>v===null?"":v<1024?`${v} B`:v<1024*1024?`${(v/1024).toFixed(1)} KB`:`${(v/(1024*1024)).toFixed(1)} MB`,h=v=>{if(!(e!=null&&e.id)||!t)return;const w=Qs(e.id,t,v),m=document.createElement("a");m.href=w,m.download=v,document.body.appendChild(m),m.click(),document.body.removeChild(m)},g=v=>{if(!(!(e!=null&&e.id)||!t)&&v.is_image){const w=Qs(e.id,t,v.filename);p(w)}};return o.jsxs(o.Fragment,{children:[d&&o.jsx("div",{className:"artifact-image-modal",onClick:()=>p(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,cursor:"pointer"},children:o.jsxs("div",{onClick:v=>v.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",position:"relative"},children:[o.jsx("button",{onClick:()=>p(null),style:{position:"absolute",top:-40,right:0,background:"transparent",border:"none",color:"#fff",cursor:"pointer",padding:8},children:o.jsx(Ai,{size:24})}),o.jsx("img",{src:d,alt:"Artifact preview",style:{maxWidth:"90vw",maxHeight:"85vh",objectFit:"contain",borderRadius:8}})]})}),o.jsxs("div",{className:"artifacts-panel",children:[o.jsx("style",{children:`
          .artifacts-panel {
            padding: 8px;
          }
          .artifacts-header {
            font-size: 11px;
            font-weight: 600;
            color: #a1a1aa;
            padding: 8px;
            background: #18181b;
            border-radius: 4px;
            margin-bottom: 8px;
          }
          .artifacts-empty {
            padding: 16px;
            text-align: center;
            color: #71717a;
            font-size: 12px;
          }
          .artifacts-loading {
            padding: 16px;
            text-align: center;
            color: #71717a;
            font-size: 12px;
          }
          .artifacts-error {
            padding: 12px;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 4px;
            color: #fca5a5;
            font-size: 11px;
          }
          .artifact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            background: #18181b;
            border-radius: 4px;
            margin-bottom: 4px;
            cursor: pointer;
            transition: background 0.15s;
          }
          .artifact-item:hover {
            background: #27272a;
          }
          .artifact-icon {
            flex-shrink: 0;
            color: #71717a;
          }
          .artifact-icon.image {
            color: #60a5fa;
          }
          .artifact-info {
            flex: 1;
            min-width: 0;
          }
          .artifact-name {
            font-size: 12px;
            color: #e4e4e7;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .artifact-meta {
            font-size: 10px;
            color: #71717a;
            margin-top: 2px;
          }
          .artifact-actions {
            display: flex;
            gap: 4px;
            flex-shrink: 0;
          }
          .artifact-btn {
            background: transparent;
            border: none;
            color: #71717a;
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .artifact-btn:hover {
            background: #3f3f46;
            color: #e4e4e7;
          }
          .artifact-preview {
            width: 100%;
            margin-top: 8px;
            border-radius: 4px;
            overflow: hidden;
            background: #09090b;
          }
          .artifact-preview img {
            width: 100%;
            height: auto;
            display: block;
          }
        `}),o.jsx("div",{className:"artifacts-header",children:t?"Session Artifacts":"No Session Selected"}),i?o.jsxs("div",{className:"artifacts-loading",children:[o.jsx(Qt,{size:16,className:"spin",style:{marginBottom:8}}),o.jsx("div",{children:"Loading artifacts..."})]}):a?o.jsx("div",{className:"artifacts-error",children:a}):t?n.length===0?o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(Ta,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"No artifacts in this session"}),o.jsx("div",{style:{fontSize:10,marginTop:4,color:"#52525b"},children:"Use tool_context.save_artifact() to save artifacts"})]}):n.map(v=>o.jsxs("div",{className:"artifact-item",children:[o.jsx("div",{className:`artifact-icon ${v.is_image?"image":""}`,children:v.is_image?o.jsx(a_,{size:16}):o.jsx(i_,{size:16})}),o.jsxs("div",{className:"artifact-info",children:[o.jsx("div",{className:"artifact-name",title:v.filename,children:v.filename}),o.jsxs("div",{className:"artifact-meta",children:[v.mime_type||"unknown type",v.size!==null&&` • ${f(v.size)}`]})]}),o.jsxs("div",{className:"artifact-actions",children:[v.is_image&&o.jsx("button",{className:"artifact-btn",title:"Preview",onClick:()=>g(v),children:o.jsx(Or,{size:14})}),o.jsx("button",{className:"artifact-btn",title:"Download",onClick:()=>h(v.filename),children:o.jsx(Ti,{size:14})})]}),v.is_image&&c===v.filename&&(e==null?void 0:e.id)&&t&&o.jsx("div",{className:"artifact-preview",children:o.jsx("img",{src:Qs(e.id,t,v.filename),alt:v.filename})})]},v.filename)):o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(Ta,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"Start a session to see artifacts"})]})]})]})}function wc(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function rg(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(s){return`[JS error: ${s}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(s=s[l[1]]),s=s[parseInt(l[2])]):s=s[a]}return s==null?"[No match]":typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function I8({project:e,selectedEventIndex:t,sandboxMode:n}){var ie,ae;const{watches:r,updateWatch:i,addWatch:s,removeWatch:a,runEvents:l}=ht(),[c,u]=k.useState(!1),[d,p]=k.useState(null),[f,h]=k.useState({}),[g,v]=k.useState(new Set),[w,m]=k.useState(""),[x,y]=k.useState(""),[j,A]=k.useState({}),[C,P]=k.useState(""),[N,D]=k.useState([]),[E,M]=k.useState(null),[L,U]=k.useState(null),[T,I]=k.useState(!1);k.useEffect(()=>{Vd().then(D).catch(console.error)},[]);const $=k.useMemo(()=>{const q=e.mcp_servers||[],F=new Set(q.map(X=>X.name)),G=N.filter(X=>!F.has(X.name));return[...q,...G]},[e.mcp_servers,N]),z=k.useCallback(async q=>{if(!(f[q]||g.has(q))){v(F=>new Set([...F,q]));try{const F=await Se(`/projects/${e.id}/mcp-servers/${encodeURIComponent(q)}/test-connection`,{method:"POST"});F.success&&h(G=>({...G,[q]:F.tools}))}catch(F){console.error("Failed to load tools:",F)}finally{v(F=>{const G=new Set(F);return G.delete(q),G})}}},[e.id,f,g]);k.useEffect(()=>{var X;if(d)return;if(!w||!x){A({});return}const F=(f[w]||[]).find(Q=>Q.name===x);if(!((X=F==null?void 0:F.parameters)!=null&&X.properties)){A({});return}const G={};Object.entries(F.parameters.properties).forEach(([Q,le])=>{le.type==="string"?G[Q]=le.default||"":le.type==="number"||le.type==="integer"?G[Q]=le.default||0:le.type==="boolean"?G[Q]=le.default||!1:G[Q]=le.default||null}),A(G)},[w,x,f,d]);const O=()=>{p(null),m(""),y(""),A({}),P(""),M(null),U(null),u(!0)},R=q=>{if(p(q.id),m(q.serverName),y(q.toolName),A({...q.args}),P(q.transform||""),q.result){const{text:F}=wc(q.result);M(F),U(null)}else M(null),U(null);f[q.serverName]||z(q.serverName),u(!0)},_=async()=>{var F;if(!w||!x)return;I(!0),U(null);const q=((F=e.app)==null?void 0:F.id)||`app_${e.id}`;try{const G=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:w,tool_name:x,arguments:j,sandbox_mode:n,app_id:n?q:void 0})}),{text:X,isError:Q}=wc(G);Q?(U(X),M(null)):(M(X),U(null))}catch(G){U(String(G)),M(null)}finally{I(!1)}},H=k.useMemo(()=>E?!C||!C.trim()?E:rg(E,C):null,[E,C]),K=()=>{if(!(!w||!x)){if(d){i(d,{serverName:w,toolName:x,args:{...j},transform:C||void 0});const q=r.find(F=>F.id===d);q&&W({...q,serverName:w,toolName:x,args:j,transform:C||void 0,history:q.history||[]})}else{const q={id:`watch-${Date.now()}`,serverName:w,toolName:x,args:{...j},transform:C||void 0,history:[]};s(q),W(q)}u(!1)}},b=q=>{a(q)},W=k.useCallback(async(q,F)=>{var le;i(q.id,{isLoading:!0,error:void 0});const G=F??l.length-1,X=Date.now(),Q=((le=e.app)==null?void 0:le.id)||`app_${e.id}`;try{const ge=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:q.serverName,tool_name:q.toolName,arguments:q.args,sandbox_mode:n,app_id:n?Q:void 0})}),ke={eventIndex:G,timestamp:X,result:ge},ee=[...q.history||[],ke];i(q.id,{result:ge,isLoading:!1,lastRun:X,history:ee})}catch(ge){const ke={eventIndex:G,timestamp:X,error:String(ge)},ee=[...q.history||[],ke];i(q.id,{error:String(ge),isLoading:!1,lastRun:X,history:ee})}},[e.id,(ie=e.app)==null?void 0:ie.id,i,l.length,n]),S=()=>{r.forEach(q=>W(q))},V=k.useMemo(()=>!w||!x?null:(f[w]||[]).find(F=>F.name===x),[w,x,f]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(Or,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:S,title:"Refresh all",children:o.jsx(Qt,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:O,title:"Add watch",children:o.jsx(Qe,{size:12})})]})]}),r.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(Or,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:O,children:[o.jsx(Qe,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:r.map(q=>{let F=q.result,G=q.error;if(t!==null&&q.history&&q.history.length>0){const ke=q.history.filter(ee=>ee.eventIndex<=t);if(ke.length>0){const ee=ke[ke.length-1];F=ee.result,G=ee.error}else F=void 0,G=void 0}const{text:X,isError:Q}=F?wc(F):{text:"",isError:!1},le=F?rg(X,q.transform):"",ge=G||Q;return o.jsxs("div",{className:`watch-item ${ge?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:q.serverName}),o.jsx("span",{className:"watch-tool",children:q.toolName}),Object.keys(q.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(q.args).map(([ke,ee])=>`${ke}=${JSON.stringify(ee)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>R(q),title:"Edit watch",children:o.jsx(un,{size:10})}),o.jsx("button",{onClick:()=>W(q),title:"Refresh",children:q.isLoading?o.jsx(Qt,{size:10,className:"spin"}):o.jsx(Qt,{size:10})}),o.jsx("button",{onClick:()=>b(q.id),title:"Remove",children:o.jsx(Be,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:q.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):G?o.jsx("span",{className:"error",children:G}):F?o.jsx("pre",{className:Q?"error-text":"",children:le}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},q.id)})}),c&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:q=>q.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>u(!1),children:o.jsx(Ai,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:w,onChange:q=>{m(q.target.value),d||y(""),q.target.value&&z(q.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),$.map(q=>o.jsx("option",{value:q.name,children:q.name},q.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:x,onChange:q=>y(q.target.value),disabled:!w||g.has(w),children:[o.jsx("option",{value:"",children:g.has(w)?"Loading tools...":"Select tool..."}),(f[w]||[]).map(q=>o.jsx("option",{value:q.name,children:q.name},q.name))]})]}),(V==null?void 0:V.description)&&o.jsx("div",{className:"tool-desc",children:V.description}),((ae=V==null?void 0:V.parameters)==null?void 0:ae.properties)&&Object.keys(V.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(V.parameters.properties).map(([q,F])=>{var G,X;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[q,((G=V.parameters.required)==null?void 0:G.includes(q))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:F.type==="number"||F.type==="integer"?"number":"text",value:typeof j[q]=="object"?JSON.stringify(j[q]):j[q]??"",onChange:Q=>A(le=>({...le,[q]:Q.target.value})),placeholder:((X=F.description)==null?void 0:X.slice(0,40))||q})]},q)})]}),w&&x&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:_,disabled:T,children:[T?o.jsx(Qt,{size:12,className:"spin"}):o.jsx(pr,{size:12}),T?"Running...":"Test Run"]})]}),L&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:L})]}),E&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:E})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:C,onChange:q=>P(q.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"Path:"}),o.jsx("code",{onClick:()=>P(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>P(".content[0].text"),children:".content[0].text"}),o.jsx("code",{onClick:()=>P(".result.data"),children:".result.data"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>P("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>P("js:data.items?.length"),children:"js:data.items?.length"})]})]}),E&&C&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:H!=null&&H.startsWith("[Transform error")?"error":"",children:H})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:K,disabled:!w||!x,children:d?"Save Changes":"Add Watch"})]})]})})]})}function O8(){var Pp,Lp;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:s,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:h}=ht(),[g,v]=k.useState(""),[w,m]=k.useState(null),[x,y]=k.useState(null),[j,A]=k.useState(null),[C,P]=k.useState(""),[N,D]=k.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[E,M]=k.useState(()=>{const B=localStorage.getItem("sandboxMode");return B!==null?B==="true":!0});k.useEffect(()=>{localStorage.setItem("sandboxMode",String(E))},[E]);const[L,U]=k.useState(null),[T,I]=k.useState(!1),[$,z]=k.useState({}),[O,R]=k.useState(!1),[_,H]=k.useState("agent"),K=k.useRef(null),b=k.useRef(!0),W=k.useRef(0),[S,V]=k.useState(!0),[ie,ae]=k.useState(!0),[q,F]=k.useState(!1),[G,X]=k.useState(!1),[Q,le]=k.useState(360),[ge,ke]=k.useState(!1),[ee,ue]=k.useState(!1),[be,se]=k.useState(!1),[Ce,J]=k.useState([]),Z=k.useRef(null);k.useEffect(()=>{const B=localStorage.getItem("promptHistory");if(B)try{const te=JSON.parse(B),de=Object.entries(te).map(([me,pe])=>({prompt:me,count:pe})).sort((me,pe)=>pe.count-me.count);J(de)}catch(te){console.error("Failed to parse prompt history:",te)}},[]);const ce=k.useCallback(B=>{const te=B.trim();if(!te)return;const de=localStorage.getItem("promptHistory"),me=de?JSON.parse(de):{};me[te]=(me[te]||0)+1,localStorage.setItem("promptHistory",JSON.stringify(me));const pe=Object.entries(me).map(([Ae,Le])=>({prompt:Ae,count:Le})).sort((Ae,Le)=>Le.count-Ae.count);J(pe)},[]),xe=k.useMemo(()=>{const B=g.toLowerCase().trim();return Ce.filter(te=>!B||te.prompt.toLowerCase().includes(B)).slice(0,10)},[Ce,g]),[Y,re]=k.useState([60,80,100,80,1]),[ye,ve]=k.useState(null),_e=k.useRef(0),Ue=k.useRef(0),[ct,nt]=k.useState([]),[Ee,rt]=k.useState(null),[qe,Cn]=k.useState(!1),Ht=k.useRef(0),Sp=k.useCallback(async(B,te)=>{var Ae;if(!e)return;p(B.id,{isLoading:!0,error:void 0});const de=te??i.length-1,me=Date.now(),pe=((Ae=e.app)==null?void 0:Ae.id)||`app_${e.id}`;try{const Le=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:B.serverName,tool_name:B.toolName,arguments:B.args,sandbox_mode:E,app_id:E?pe:void 0})}),Nn={eventIndex:de,timestamp:me,result:Le},fn=[...B.history||[],Nn];p(B.id,{result:Le,isLoading:!1,lastRun:me,history:fn})}catch(Le){const Nn={eventIndex:de,timestamp:me,error:String(Le)},fn=[...B.history||[],Nn];p(B.id,{error:String(Le),isLoading:!1,lastRun:me,history:fn})}},[e==null?void 0:e.id,(Pp=e==null?void 0:e.app)==null?void 0:Pp.id,p,i.length,E]);k.useEffect(()=>{if(i.length>Ht.current&&d.length>0){const B=i.length-1;d.forEach(te=>{te.isLoading||Sp(te,B)})}Ht.current=i.length},[i.length,d,Sp]),k.useEffect(()=>{c!==null&&(Cp(c),u(null))},[c,u]);const[Mi,Cp]=k.useState(null),ls=k.useRef(null),wl=k.useRef(null);k.useEffect(()=>{if(!ge)return;const B=de=>{if(!wl.current)return;const pe=wl.current.getBoundingClientRect().right-de.clientX;le(Math.min(600,Math.max(200,pe)))},te=()=>{ke(!1)};return document.addEventListener("mousemove",B),document.addEventListener("mouseup",te),()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",te)}},[ge]),k.useEffect(()=>{if(ye===null)return;const B=de=>{const me=de.clientX-_e.current,pe=Math.max(40,Ue.current+me);re(Ae=>{const Le=[...Ae];return Le[ye]=pe,Le})},te=()=>{ve(null)};return document.addEventListener("mousemove",B),document.addEventListener("mouseup",te),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",te),document.body.style.cursor="",document.body.style.userSelect=""}},[ye]);const cs=(B,te)=>{te.preventDefault(),_e.current=te.clientX,Ue.current=Y[B],ve(B)},Np=Y.map((B,te)=>te===Y.length-1?`minmax(${B}px, 1fr)`:`${B}px`).join(" "),O1=k.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),Pt=k.useMemo(()=>i.filter((B,te)=>{var de,me,pe;if(j&&(B.timestamp<j[0]||B.timestamp>j[1])||N.size>0&&!N.has(B.event_type))return!1;if(S&&B.event_type==="model_response"){const Ae=((me=(de=B.data)==null?void 0:de.response_content)==null?void 0:me.parts)||((pe=B.data)==null?void 0:pe.parts)||[],Le=Ae.some(fn=>fn.type==="function_call"),Nn=Ae.some(fn=>fn.type==="text");if(!Le&&!Nn)return!1}return!(C&&!JSON.stringify(B).toLowerCase().includes(C.toLowerCase()))}),[i,j,N,C,S]),us=k.useMemo(()=>{var me;let B=0,te=0;const de=x!==null?x+1:i.length;for(let pe=0;pe<de;pe++){const Ae=i[pe];Ae.event_type==="model_response"&&((me=Ae.data)!=null&&me.token_counts)&&(B+=Ae.data.token_counts.input||0,te+=Ae.data.token_counts.output||0)}return{input:B,output:te,total:B+te}},[i,x]),Ep=x!==null?i[x]:null;k.useEffect(()=>{if(!e){nt([]);return}(async()=>{Cn(!0);try{const te=await vu(e.id);nt(te)}catch(te){console.error("Failed to load sessions:",te),nt([])}finally{Cn(!1)}})()},[e]);const kl=k.useCallback(async B=>{if(!e){rt(null);return}if(!B){a(),l(),h(null),rt(null),y(null),A(null);return}try{const te=await Dy(e.id,B);a(),l(),h(te.id),rt(B),y(null),A(null);for(const de of te.events)s(de)}catch(te){alert(`Failed to load session: ${te.message||"Unknown error"}`)}},[e,a,l,h,s]);k.useEffect(()=>{if(!e||ct.length===0||qe)return;const te=new URLSearchParams(window.location.search).get("session");if(te)if(ct.some(me=>me.id===te)){kl(te);const me=window.location.pathname;window.history.replaceState({},"",me)}else console.warn(`Session ${te} not found in available sessions`)},[e,ct,qe,kl]),k.useEffect(()=>{n&&ls.current&&(ls.current.scrollTop=ls.current.scrollHeight)},[i.length,n]);const Ri=k.useCallback(B=>{const te=B??g;if(!e||!te.trim()||n)return;ue(!0),ce(te),se(!1),v(te),w&&(w.close(),m(null)),f||(a(),l(),rt(null)),r(!0),y(null),A(null);const de=Wy(e.id);m(de),de.onopen=()=>{de.send(JSON.stringify({message:te,agent_id:Mi||void 0,session_id:f||void 0,sandbox_mode:E}))},de.onmessage=me=>{var Ae;const pe=JSON.parse(me.data);if(pe.event_type==="agent_start"&&((Ae=pe.data)!=null&&Ae.session_id)){const Le=pe.data.session_id;pe.data.session_reused,h(Le),Le&&ct.some(Nn=>Nn.id===Le)&&rt(Le)}else if(pe.type==="session_started")h(pe.session_id),pe.session_id&&ct.some(Le=>Le.id===pe.session_id)&&rt(pe.session_id);else if(pe.type==="sandbox_starting")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(pe.type==="sandbox_started")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${pe.sandbox_id})`}});else if(pe.type==="sandbox_response")s({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:pe.data});else if(pe.event_type==="approval_required"||pe.type==="network_request"&&pe.event_type==="approval_required"){const Le={id:pe.id,method:pe.method||"GET",url:pe.url,host:pe.host,source:pe.source||"agent",headers:pe.headers||{},timeout:pe.timeout||30};U(Le),s({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${pe.host} requires approval`,host:pe.host,url:pe.url}})}else pe.type==="completed"?(r(!1),de.close()):pe.type==="error"?(r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:pe.error}})):s(pe)},de.onerror=()=>{r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},de.onclose=()=>{r(!1)}},[e,g,n,w,a,r,s,Mi,f,E,ce]),$1=k.useCallback(()=>{w==null||w.close(),r(!1)},[w,r]),D1=k.useCallback(async(B,te,de)=>{var fn,Mp,Rp,Ip,Op,$p,Dp,Fp,Bp,Up,Vp,Wp,Hp,qp,Jp,Kp,Gp,Yp,Qp,Xp,Zp,ef,tf,nf,rf,of;if(!L||!e)return;const me=((fn=e.app)==null?void 0:fn.id)||e.id,pe=B?"allow_pattern":"allow_once",Ae=B||L.host,Le=te||"exact",Nn=de?`/sandbox/${me}/approval?project_id=${e.id}`:`/sandbox/${me}/approval`;try{if(await Se(Nn,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:L.id,action:pe,pattern:Ae,pattern_type:Le,persist:de||!1})}),de&&pe==="allow_pattern"){const jl=((Ip=(Rp=(Mp=e.app)==null?void 0:Mp.sandbox)==null?void 0:Rp.allowlist)==null?void 0:Ip.user)||[],X1={id:`pattern_${Date.now().toString(36)}`,pattern:Ae,pattern_type:Le,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(Op=e.app)==null?void 0:Op.sandbox,enabled:((Dp=($p=e.app)==null?void 0:$p.sandbox)==null?void 0:Dp.enabled)??!1,allow_all_network:((Bp=(Fp=e.app)==null?void 0:Fp.sandbox)==null?void 0:Bp.allow_all_network)??!1,allowlist:{auto:((Wp=(Vp=(Up=e.app)==null?void 0:Up.sandbox)==null?void 0:Vp.allowlist)==null?void 0:Wp.auto)||[],user:[...jl,X1]},unknown_action:((qp=(Hp=e.app)==null?void 0:Hp.sandbox)==null?void 0:qp.unknown_action)??"ask",approval_timeout:((Kp=(Jp=e.app)==null?void 0:Jp.sandbox)==null?void 0:Kp.approval_timeout)??30,agent_memory_limit_mb:((Yp=(Gp=e.app)==null?void 0:Gp.sandbox)==null?void 0:Yp.agent_memory_limit_mb)??512,agent_cpu_limit:((Xp=(Qp=e.app)==null?void 0:Qp.sandbox)==null?void 0:Xp.agent_cpu_limit)??1,mcp_memory_limit_mb:((ef=(Zp=e.app)==null?void 0:Zp.sandbox)==null?void 0:ef.mcp_memory_limit_mb)??256,mcp_cpu_limit:((nf=(tf=e.app)==null?void 0:tf.sandbox)==null?void 0:nf.mcp_cpu_limit)??.5,run_timeout:((of=(rf=e.app)==null?void 0:rf.sandbox)==null?void 0:of.run_timeout)??300}}})}s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${Ae}`,pattern:Ae,action:pe}})}catch(jl){console.error("Failed to approve:",jl)}U(null)},[L,e,s,t]),F1=k.useCallback(async()=>{var te;if(!L||!e)return;const B=((te=e.app)==null?void 0:te.id)||e.id;try{await Se(`/sandbox/${B}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:L.id,action:"deny"})}),s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${L.host}`,host:L.host,action:"deny"}})}catch(de){console.error("Failed to deny:",de)}U(null)},[L,e,s]),Ii=k.useCallback(async(B=!0)=>{var de;if(!e)return;const te=((de=e.app)==null?void 0:de.id)||`app_${e.id}`;B&&R(!0);try{const[me,pe]=await Promise.all([Se(`/sandbox/${te}/logs?container=agent&tail=500`).catch(()=>null),Se(`/sandbox/${te}/logs?container=gateway&tail=500`).catch(()=>null)]);z({agent:(me==null?void 0:me.logs)||(me==null?void 0:me.error)||"No logs available",gateway:(pe==null?void 0:pe.logs)||(pe==null?void 0:pe.error)||"No logs available"})}catch(me){console.error("Failed to fetch logs:",me),z({agent:`Error fetching logs: ${me}`,gateway:`Error fetching logs: ${me}`})}finally{B&&R(!1)}},[e]),B1=k.useCallback(()=>{I(!0),Ii()},[Ii]);k.useEffect(()=>{if(!T||!K.current||O)return;const B=K.current,te=W.current,de=B.scrollHeight;setTimeout(()=>{if(K.current){if(b.current)K.current.scrollTop=K.current.scrollHeight;else if(te>0&&de>te){const me=de-te;K.current.scrollTop+=me}W.current=K.current.scrollHeight}},50)},[T,_,$,O]),k.useEffect(()=>{T&&(b.current=!0,W.current=0)},[T,_]);const U1=k.useCallback(()=>{if(!K.current)return;const B=K.current,de=B.scrollHeight-B.scrollTop-B.clientHeight<50;b.current=de},[]);k.useEffect(()=>{if(!T)return;const B=setInterval(()=>{Ii(!1)},3e3);return()=>clearInterval(B)},[T,Ii]),k.useEffect(()=>{const B=te=>{if((te.metaKey||te.ctrlKey)&&te.key==="Enter"){te.preventDefault(),Ri();return}if(te.key==="ArrowDown"||te.key==="ArrowUp"){if(te.target instanceof HTMLInputElement||te.target instanceof HTMLTextAreaElement||(te.preventDefault(),Pt.length===0))return;if(te.key==="ArrowDown")if(x===null){const de=i.indexOf(Pt[0]);y(de)}else{const de=Pt.findIndex(me=>i.indexOf(me)===x);if(de<Pt.length-1){const me=i.indexOf(Pt[de+1]);y(me)}}else if(te.key==="ArrowUp")if(x===null){const de=i.indexOf(Pt[Pt.length-1]);y(de)}else{const de=Pt.findIndex(me=>i.indexOf(me)===x);if(de>0){const me=i.indexOf(Pt[de-1]);y(me)}}}};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[Ri,Pt,x,i]);const V1=k.useCallback(()=>{var pe;if(i.length===0)return;const B={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:Mi||((pe=e==null?void 0:e.app)==null?void 0:pe.root_agent_id),events:i},te=new Blob([JSON.stringify(B,null,2)],{type:"application/json"}),de=URL.createObjectURL(te),me=document.createElement("a");me.href=de,me.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(me),me.click(),document.body.removeChild(me),URL.revokeObjectURL(de)},[i,e,Mi]),W1=k.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const B=await $y(f);if(B.success){alert(B.message||"Session saved to memory successfully");try{const te=await vu(e.id);nt(te)}catch{}}else alert(`Failed to save to memory: ${B.error||"Unknown error"}`)}catch(B){alert(`Error saving to memory: ${B.message||"Unknown error"}`)}},[f,e]),[H1,ds]=k.useState(!1),[q1,J1]=k.useState([]),[Oi,zp]=k.useState(""),[_l,K1]=k.useState("Test Case from Session"),[Tp,Ap]=k.useState(!1),G1=k.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const B=await Se(`/projects/${e.id}/eval-sets`);if(J1(B.eval_sets||[]),!B.eval_sets||B.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}zp(B.eval_sets[0].id),ds(!0)}catch(B){alert(`Error loading eval sets: ${B.message||"Unknown error"}`)}},[f,e]),Y1=k.useCallback(async()=>{if(!f||!e||!Oi){alert("Please select an evaluation set");return}Ap(!0);try{const B=await Se(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:Oi,case_name:_l})});ds(!1),alert(`Test case "${B.eval_case.name}" created successfully!

Token count: ${B.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(B){alert(`Error creating test case: ${B.message||"Unknown error"}`)}finally{Ap(!1)}},[f,e,Oi,_l]),Q1=k.useCallback(()=>{const B=document.createElement("input");B.type="file",B.accept=".json",B.onchange=async te=>{var me;const de=(me=te.target.files)==null?void 0:me[0];if(de)try{const pe=await de.text(),Ae=JSON.parse(pe);if(!Ae.events||!Array.isArray(Ae.events)){alert("Invalid run file: missing events array");return}a(),l(),y(null),A(null),Ae.events.forEach(Le=>{s(Le)})}catch(pe){alert(`Failed to load run file: ${pe}`)}},B.click()},[a,l,s]);return k.useEffect(()=>{if(x!==null){const B=document.querySelector(".event-row.selected");B==null||B.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?o.jsxs("div",{className:`run-panel ${ge?"resizing":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsx(S8,{agents:e.agents,events:i,selectedEventIndex:x,isOpen:ee,onOpenChange:ue}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:Mi||"",onChange:B=>Cp(B.target.value||null),disabled:n,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Lp=e.agents.find(B=>B.id===e.app.root_agent_id))==null?void 0:Lp.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(B=>B.id!==e.app.root_agent_id).map(B=>o.jsxs("option",{value:B.id,children:[B.name," (",B.type.replace("Agent",""),")"]},B.id))]}),o.jsxs("select",{className:"agent-selector",value:Ee||"",onChange:B=>kl(B.target.value||null),disabled:n||qe,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:qe?"Loading...":"Load Session..."}),ct.map(B=>{const te=new Date(B.started_at*1e3),de=B.duration?`${B.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:B.id,children:[te.toLocaleString()," (",B.event_count," events, ",de,")"]},B.id)})]}),o.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[o.jsx("input",{ref:Z,type:"text",placeholder:"Enter your query...",value:g,onChange:B=>v(B.target.value),onFocus:()=>se(!0),onBlur:()=>setTimeout(()=>se(!1),150),onKeyDown:B=>{B.key==="Enter"&&!B.shiftKey?Ri():B.key==="Escape"&&se(!1)},disabled:n,style:{flex:1}}),be&&xe.length>0&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:xe.map((B,te)=>o.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:te<xe.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:de=>{de.preventDefault(),Ri(B.prompt)},onMouseEnter:de=>{de.currentTarget.style.background="#27272a"},onMouseLeave:de=>{de.currentTarget.style.background="transparent"},children:[o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:B.prompt}),o.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",B.count]})]},te))})]}),n?o.jsxs("button",{className:"stop",onClick:$1,children:[o.jsx(m_,{size:14}),"Stop"]}):o.jsxs("button",{onClick:()=>Ri(),disabled:!g.trim(),children:[o.jsx(pr,{size:14}),"Run"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:E?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[o.jsx("input",{type:"checkbox",checked:E,onChange:B=>M(B.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),E&&o.jsx("button",{onClick:B1,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(ov,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:C,onChange:B=>P(B.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(B=>o.jsx("button",{className:`filter-chip ${N.has(B)?"active":""}`,onClick:()=>{const te=new Set(N);te.has(B)?te.delete(B):te.add(B),D(te)},children:B.replace("_"," ")},B)),o.jsx("button",{className:`filter-chip ${N.has("callback_start")&&N.has("callback_end")?"active":""}`,onClick:()=>{const B=new Set(N);B.has("callback_start")&&B.has("callback_end")?(B.delete("callback_start"),B.delete("callback_end")):(B.add("callback_start"),B.add("callback_end")),D(B)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${S?"active":""}`,onClick:()=>V(!S),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${ie?"active":""}`,onClick:()=>{ae(!ie),F(!1),X(!1)},children:[o.jsx(In,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${G?"active":""}`,onClick:()=>{X(!G),ae(!1),F(!1)},children:[o.jsx(Ta,{size:12}),"Artifacts"]}),o.jsxs("button",{className:`toolbar-btn ${q?"active":""}`,onClick:()=>{F(!q),ae(!1),X(!1)},children:[o.jsx(Zl,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[Pt.length," / ",i.length," events"]}),j&&o.jsx("button",{className:"toolbar-btn",onClick:()=>A(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:wl,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:Np},children:[o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"#"}),o.jsx("div",{className:`column-resize-handle ${ye===0?"active":""}`,onMouseDown:B=>cs(0,B)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Time"}),o.jsx("div",{className:`column-resize-handle ${ye===1?"active":""}`,onMouseDown:B=>cs(1,B)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Agent"}),o.jsx("div",{className:`column-resize-handle ${ye===2?"active":""}`,onMouseDown:B=>cs(2,B)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Type"}),o.jsx("div",{className:`column-resize-handle ${ye===3?"active":""}`,onMouseDown:B=>cs(3,B)})]}),o.jsx("div",{className:"header-cell",children:o.jsx("span",{children:"Info"})})]}),o.jsx("div",{className:"event-list",ref:ls,children:Pt.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(iv,{size:24}),o.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):Pt.map((B,te)=>{const de=i.indexOf(B),me=eg[B.event_type]||eg.error,pe=C8[B.event_type]||Pa;return o.jsxs("div",{className:`event-row ${x===de?"selected":""}`,style:{background:me.bg,gridTemplateColumns:Np},onClick:()=>y(de),onDoubleClick:()=>{ae(!1),F(!1),X(!1)},children:[o.jsx("div",{className:"index",children:de}),o.jsx("div",{className:"time",style:{color:me.fg},children:E8(B.timestamp,O1.min)}),o.jsx("div",{className:"agent",children:o.jsx("span",{className:"agent-badge",style:{backgroundColor:Ha(B.agent_name).bg,color:Ha(B.agent_name).fg},children:B.agent_name})}),o.jsxs("div",{className:"type",style:{color:me.fg},children:[o.jsx(pe,{size:10}),B.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:N8(B)})]},de)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:Q},children:[o.jsx("div",{className:`resize-handle ${ge?"active":""}`,onMouseDown:()=>ke(!0)}),o.jsxs("div",{className:"side-panel",style:{width:Q-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!ie&&!q&&!G?"active":""}`,onClick:()=>{ae(!1),F(!1),X(!1)},children:[o.jsx(Or,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${ie?"active":""}`,onClick:()=>{ae(!0),F(!1),X(!1)},children:[o.jsx(In,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${G?"active":""}`,onClick:()=>{X(!0),ae(!1),F(!1)},children:[o.jsx(Ta,{size:12,style:{marginRight:4}}),"Artifacts"]}),o.jsxs("button",{className:`side-panel-tab ${q?"active":""}`,onClick:()=>{F(!0),ae(!1),X(!1)},children:[o.jsx(Zl,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:q?o.jsx(I8,{project:e,selectedEventIndex:x,sandboxMode:E}):G?o.jsx(R8,{project:e,sessionId:f}):ie?o.jsx(M8,{events:i,selectedEventIndex:x,project:e}):Ep?o.jsx(A8,{event:Ep}):o.jsxs("div",{className:"empty-state",children:[o.jsx(Or,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:i.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(B=>B.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(B=>B.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:i.filter(B=>B.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:i.filter(B=>B.event_type==="state_change").length})]}),i.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),us.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[us.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[us.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:us.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:Q1,title:"Load a saved run",children:[o.jsx(dl,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:V1,disabled:i.length===0,title:"Save current run to file",children:[o.jsx(Ti,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:W1,disabled:!f||i.length===0,title:"Save current session to memory",children:[o.jsx(In,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:G1,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(_u,{size:12}),"Create Test Case"]})]}),H1&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>ds(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:B=>B.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(_u,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:_l,onChange:B=>K1(B.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:Oi,onChange:B=>zp(B.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:q1.map(B=>o.jsx("option",{value:B.id,children:B.name},B.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>ds(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:Y1,disabled:Tp||!Oi,children:Tp?"Creating...":"Create Test Case"})]})]})}),L&&o.jsx(mE,{request:L,timeout:L.timeout||30,onApprove:D1,onDeny:F1,onClose:()=>U(null)}),T&&o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>I(!1),children:o.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:B=>B.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Zl,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs("button",{onClick:Ii,disabled:O,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:O?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(Qt,{size:12,className:O?"animate-spin":""}),"Refresh"]}),o.jsx("button",{onClick:()=>I(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:o.jsx(Ai,{size:16})})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsx("button",{onClick:()=>H("agent"),style:{padding:"8px 16px",background:_==="agent"?"#18181b":"transparent",border:"none",borderBottom:_==="agent"?"2px solid #22d3ee":"2px solid transparent",color:_==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),o.jsx("button",{onClick:()=>H("gateway"),style:{padding:"8px 16px",background:_==="gateway"?"#18181b":"transparent",border:"none",borderBottom:_==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:_==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),o.jsx("div",{ref:K,onScroll:U1,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:O?o.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):$[_]?o.jsx(T8,{content:$[_]}):o.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const $8=()=>Math.random().toString(36).substring(2,10),D8=()=>({id:$8(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function F8(){const{project:e,setProject:t}=ht(),[n,r]=k.useState(null),[i,s]=k.useState(null),[a,l]=k.useState(""),[c,u]=k.useState([]),[d,p]=k.useState(!1),[f,h]=k.useState(!1),[g,v]=k.useState(""),[w,m]=k.useState(!1),[x,y]=k.useState(null),[j,A]=k.useState(null),C=k.useRef(null),P=(e==null?void 0:e.skillsets)||[],N=P.find(R=>R.id===n);k.useEffect(()=>{Zy().then(R=>A(R.available)).catch(()=>A(!1))},[]),k.useEffect(()=>{P.length>0&&!n&&r(P[0].id)},[P,n]),k.useEffect(()=>{!e||!n||D()},[e==null?void 0:e.id,n]);const D=k.useCallback(async()=>{if(!(!e||!n))try{const R=await Ky(e.id,n);s(R),M(n,{entry_count:R.entry_count})}catch(R){console.error("Failed to load stats:",R)}},[e==null?void 0:e.id,n]),E=R=>{e&&t({...e,...R})},M=(R,_)=>{e&&t({...e,skillsets:e.skillsets.map(H=>H.id===R?{...H,..._}:H)})},L=()=>{if(!e)return;const R=D8();E({skillsets:[...P,R]}),r(R.id)},U=R=>{e&&confirm("Delete this SkillSet and all its data?")&&(E({skillsets:P.filter(_=>_.id!==R)}),n===R&&r(P.length>1?P[0].id:null),s(null),u([]))},T=async()=>{if(!(!e||!n||!a.trim())){p(!0),y(null);try{const R=await Qy(e.id,n,a.trim(),10,0);u(R.results)}catch(R){y("Search failed"),console.error(R)}finally{p(!1)}}},I=async()=>{if(!(!e||!n||!g.trim())){m(!0),y(null);try{const R=await Gy(e.id,n,g.trim());v(""),await D(),alert(`Added ${R.chunks_added} chunks from ${R.source_name}`)}catch(R){y(R.message||"Failed to fetch URL")}finally{m(!1)}}},$=async R=>{var H;const _=(H=R.target.files)==null?void 0:H[0];if(!(!_||!e||!n)){y(null);try{const K=await Yy(e.id,n,_);await D(),alert(`Added ${K.chunks_added} chunks from ${K.source_name}`)}catch(K){y(K.message||"Upload failed")}C.current&&(C.current.value="")}},z=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Xy(e.id,n),await D(),u([])}catch{y("Clear failed")}},O=R=>{const _=Math.round(R*100),H=160,K=70,b=20+(1-R)*15,W=.15+R*.25;return`linear-gradient(90deg, hsla(${H}, ${K}%, ${b}%, ${W}) 0%, transparent ${_}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:L,title:"Add SkillSet",children:o.jsx(Qe,{size:16})})]}),P.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(In,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:L,children:[o.jsx(Qe,{size:14})," Create SkillSet"]})]}):P.map(R=>o.jsxs("div",{className:`skillset-item ${n===R.id?"selected":""}`,onClick:()=>r(R.id),children:[o.jsx(In,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:R.name}),o.jsxs("div",{className:"skillset-item-count",children:[R.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:_=>{_.stopPropagation(),U(R.id)},children:o.jsx(Be,{size:14})})]},R.id))]}),N?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:N.name,onChange:R=>M(N.id,{name:R.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:N.description,onChange:R=>M(N.id,{description:R.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:N.embedding_model||"text-embedding-004",onChange:R=>M(N.id,{embedding_model:R.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),j===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:D,title:"Refresh",children:o.jsx(Qt,{size:16})})]}),x&&o.jsxs("div",{className:"error-banner",children:[x,o.jsx("button",{onClick:()=>y(null),children:o.jsx(Ai,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:a,onChange:R=>l(R.target.value),onKeyDown:R=>R.key==="Enter"&&T(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:T,disabled:d||!a.trim(),children:[o.jsx(ov,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(R=>o.jsxs("div",{className:"search-result",style:{background:O(R.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(R.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:R.text}),o.jsx("div",{className:"search-result-source",children:R.source_name})]},R.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>h(!f),children:[f?o.jsx(Rt,{size:16}):o.jsx(_t,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),f&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(qd,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:g,onChange:R=>v(R.target.value),onKeyDown:R=>R.key==="Enter"&&I(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:I,disabled:w||!g.trim(),children:[o.jsx(l_,{size:14}),w?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(r_,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:C,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:$}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var R;return(R=C.current)==null?void 0:R.click()},children:[o.jsx(dl,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:z,children:[o.jsx(Be,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):P.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(In,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const vn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Jo=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=vn[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const s=n??3.5;return{value:t.toFixed(1),comparison:`${s.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const s=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(s*100)}% min`}}},B8={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function I1(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function U8(){const{project:e}=ht(),[t,n]=k.useState([]),[r,i]=k.useState(null),[s,a]=k.useState(null),[l,c]=k.useState(new Set),[u,d]=k.useState(new Map),[p,f]=k.useState(new Map),[h,g]=k.useState(new Set),[v,w]=k.useState(!1),[m,x]=k.useState(null),[y,j]=k.useState([]),[A,C]=k.useState(null),P=async()=>{if(e)try{const F=await Ge.get(`/projects/${e.id}/eval-history`);j(F.runs||[])}catch(F){console.warn("Failed to load eval history:",F)}},N=async(F,G=!0)=>{if(e)try{const Q=(await Ge.get(`/projects/${e.id}/eval-history/${F}`)).run;if(C(Q),Q!=null&&Q.case_results){const le=new Map;for(const ge of Q.case_results)le.set(ge.eval_case_id,ge);d(le)}if((Q==null?void 0:Q.eval_set_id)==="batch")c(new Set(t.map(le=>le.id))),i(null);else if(Q!=null&&Q.eval_set_id){const le=new Map;le.set(Q.eval_set_id,Q),f(le),i(Q.eval_set_id),c(ge=>new Set([...ge,Q.eval_set_id]))}a(null),G&&window.history.pushState({run:F},"",`?run=${F}`)}catch(X){console.warn("Failed to load history run:",X)}},D=(F,G=!0)=>{i(F),a(null),C(null),G&&F?window.history.pushState({set:F},"",`?set=${F}`):G&&window.history.pushState({},"",window.location.pathname)},E=(F,G,X=!0)=>{i(F),a(G),C(null),X&&G?window.history.pushState({set:F,case:G},"",`?set=${F}&case=${G}`):X&&F&&window.history.pushState({set:F},"",`?set=${F}`)},M=()=>{C(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},L=async F=>{if(e)try{await Ge.delete(`/projects/${e.id}/eval-history/${F}`),j(G=>G.filter(X=>X.id!==F)),(A==null?void 0:A.id)===F&&C(null)}catch(G){console.warn("Failed to delete history run:",G)}};k.useEffect(()=>{e!=null&&e.id&&(U(),P())},[e==null?void 0:e.id]),k.useEffect(()=>{const F=()=>{g(new Set(t.map(X=>X.id)))},G=()=>{g(new Set),P()};return window.addEventListener("eval-tests-started",F),window.addEventListener("eval-tests-completed",G),()=>{window.removeEventListener("eval-tests-started",F),window.removeEventListener("eval-tests-completed",G)}},[t]),k.useEffect(()=>{if(!(e!=null&&e.id)||v)return;const F=()=>{const X=new URLSearchParams(window.location.search),Q=X.get("set"),le=X.get("case"),ge=X.get("run");if(ge){N(ge,!1);return}if(Q)i(Q),a(le),C(null),c(ke=>new Set([...ke,Q]));else{if(!r&&!s&&!A)return;i(null),a(null),C(null)}};F();const G=()=>{F()};return window.addEventListener("popstate",G),()=>window.removeEventListener("popstate",G)},[e==null?void 0:e.id,v,t.length]);const U=async()=>{var F,G;if(e!=null&&e.id){w(!0),x(null);try{const X=await Ge.get(`/projects/${e.id}/eval-sets`);if(n(X.eval_sets||[]),((F=X.eval_sets)==null?void 0:F.length)>0){const Q=new URLSearchParams(window.location.search),le=Q.get("set"),ge=Q.get("case"),ke=le||(ge?(G=X.eval_sets.find(ee=>ee.eval_cases.some(ue=>ue.id===ge)))==null?void 0:G.id:null)||X.eval_sets[0].id;c(new Set([ke]))}}catch(X){x(X.message||"Failed to load eval sets")}finally{w(!1)}}},T=t.find(F=>F.id===r),I=T==null?void 0:T.eval_cases.find(F=>F.id===s),$=async()=>{if(e!=null&&e.id)try{const F=await Ge.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:B8});n(G=>[...G,F.eval_set]),i(F.eval_set.id),c(G=>new Set([...G,F.eval_set.id]))}catch(F){x(F.message||"Failed to create eval set")}},z=async F=>{if(e!=null&&e.id)try{const G=await Ge.post(`/projects/${e.id}/eval-sets/${F}/cases`,{name:"New Test Case",description:"",invocations:[{id:I1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(X=>X.map(Q=>Q.id===F?{...Q,eval_cases:[...Q.eval_cases,G.eval_case]}:Q)),i(F),a(G.eval_case.id)}catch(G){x(G.message||"Failed to create eval case")}},O=async(F,G,X)=>{if(e!=null&&e.id)try{const Q=await Ge.put(`/projects/${e.id}/eval-sets/${F}/cases/${G}`,X);n(le=>le.map(ge=>ge.id===F?{...ge,eval_cases:ge.eval_cases.map(ke=>ke.id===G?Q.eval_case:ke)}:ge))}catch(Q){x(Q.message||"Failed to update eval case")}},R=async(F,G)=>{if(e!=null&&e.id)try{await Ge.delete(`/projects/${e.id}/eval-sets/${F}/cases/${G}`),n(X=>X.map(Q=>Q.id===F?{...Q,eval_cases:Q.eval_cases.filter(le=>le.id!==G)}:Q)),s===G&&a(null)}catch(X){x(X.message||"Failed to delete eval case")}},_=async F=>{if(e!=null&&e.id)try{await Ge.delete(`/projects/${e.id}/eval-sets/${F}`),n(G=>G.filter(X=>X.id!==F)),r===F&&(i(null),a(null))}catch(G){x(G.message||"Failed to delete eval set")}},H=async F=>{if(e!=null&&e.id)try{const G=await Ge.get(`/projects/${e.id}/eval-sets/${F}/export`),X=new Blob([JSON.stringify(G,null,2)],{type:"application/json"}),Q=URL.createObjectURL(X),le=document.createElement("a");le.href=Q;const ge=t.find(ke=>ke.id===F);le.download=`${(ge==null?void 0:ge.name)||"eval-set"}.json`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(Q)}catch(G){x(G.message||"Failed to export eval set")}},K=async F=>{if(e!=null&&e.id)try{const G=await F.text(),X=JSON.parse(G),Q=await Ge.post(`/projects/${e.id}/eval-sets/import`,X);n(le=>[...le,Q.eval_set]),i(Q.eval_set.id),c(le=>new Set([...le,Q.eval_set.id]))}catch(G){x(G.message||"Failed to import eval set")}},b=k.useRef(null),W=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const F=await Promise.all(t.map(async le=>{try{return await Ge.get(`/projects/${e.id}/eval-sets/${le.id}/export`)}catch{return le}})),G=new Blob([JSON.stringify(F,null,2)],{type:"application/json"}),X=URL.createObjectURL(G),Q=document.createElement("a");Q.href=X,Q.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(X)}catch(F){x(F.message||"Failed to export all eval sets")}},S=async(F,G)=>{if(e!=null&&e.id){g(X=>new Set([...X,G]));try{const X=await Ge.post(`/projects/${e.id}/eval-sets/${F}/cases/${G}/run`,{});d(Q=>new Map(Q).set(G,X.result))}catch(X){x(X.message||"Failed to run eval case")}finally{g(X=>{const Q=new Set(X);return Q.delete(G),Q})}}},V=async F=>{if(!(e!=null&&e.id))return;const G=t.find(Q=>Q.id===F);if(!G)return;const X=G.eval_cases.map(Q=>Q.id);g(Q=>new Set([...Q,F,...X]));try{const Q=await Ge.post(`/projects/${e.id}/eval-sets/${F}/run`,{});f(le=>new Map(le).set(F,Q.result));for(const le of Q.result.case_results)d(ge=>new Map(ge).set(le.eval_case_id,le));try{await Ge.post(`/projects/${e.id}/eval-history`,Q.result),P()}catch(le){console.warn("Failed to save eval run to history:",le)}}catch(Q){x(Q.message||"Failed to run eval set")}finally{g(Q=>{const le=new Set(Q);return le.delete(F),X.forEach(ge=>le.delete(ge)),le})}},ie=F=>{c(G=>{const X=new Set(G);return X.has(F)?X.delete(F):X.add(F),X})},ae=F=>{let G=F.eval_cases.length,X=0,Q=0,le=0;for(const ge of F.eval_cases){const ke=u.get(ge.id);ke?ke.passed?X++:Q++:le++}return{total:G,passed:X,failed:Q,pending:le}},q=F=>F==null?"-":`${Math.round(F*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:b,accept:".json",style:{display:"none"},onChange:F=>{var X;const G=(X=F.target.files)==null?void 0:X[0];G&&(K(G),F.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var F;return(F=b.current)==null?void 0:F.click()},title:"Import eval set from JSON",children:o.jsx(dl,{size:14})}),t.length>0&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:W,title:"Download all eval sets as JSON",children:o.jsx(Ti,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,title:"Refresh",children:o.jsx(Qt,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:$,title:"New eval set",children:[o.jsx(Qe,{size:14}),"Set"]})]})]}),o.jsxs("div",{className:"eval-tree",children:[v&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),m&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:m}),!v&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(Yd,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one to get started."]})]}),t.map(F=>{const G=l.has(F.id),X=ae(F),Q=h.has(F.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===F.id&&!s?"selected":""}`,onClick:()=>D(F.id),children:[o.jsx("button",{className:"expand-btn",onClick:le=>{le.stopPropagation(),ie(F.id)},children:F.eval_cases.length>0?G?o.jsx(Rt,{size:14}):o.jsx(_t,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(rv,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:F.name}),o.jsx("button",{className:"add-case-btn",onClick:le=>{le.stopPropagation(),z(F.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:o.jsx(Qe,{size:12})}),X.total>0&&o.jsxs("span",{className:"set-stats",children:[X.passed>0&&o.jsx("span",{className:"stat-passed",children:X.passed}),X.failed>0&&o.jsx("span",{className:"stat-failed",children:X.failed}),X.pending>0&&o.jsx("span",{className:"stat-pending",children:X.pending})]}),o.jsx("button",{className:"run-btn",onClick:le=>{le.stopPropagation(),V(F.id)},title:"Run all tests in this set",disabled:Q,children:Q?o.jsx(Do,{size:12,className:"spinning"}):o.jsx(pr,{size:12})})]}),G&&o.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:F.eval_cases.map(le=>{var ee;const ge=u.get(le.id),ke=h.has(le.id);return o.jsxs("div",{className:`tree-case ${s===le.id?"selected":""}`,onClick:()=>E(F.id,le.id),children:[ke?o.jsx(Do,{size:14,className:"spinning",style:{color:"var(--warning)"}}):ge?ge.passed?o.jsx(Ir,{size:14,style:{color:"var(--success)"}}):o.jsx(_i,{size:14,style:{color:"var(--error)"}}):o.jsx(Aa,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:le.name}),ge&&ge.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:ge.passed?"var(--success)":"var(--error)"},children:q((ee=ge.metric_results[0])==null?void 0:ee.score)}),o.jsx("button",{className:"run-btn",onClick:ue=>{ue.stopPropagation(),S(F.id,le.id)},disabled:ke,children:o.jsx(pr,{size:12})})]},le.id)})})]},F.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",y.length,")"]})}),o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:y.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...y].sort((F,G)=>(G.started_at||0)-(F.started_at||0)).map(F=>{const G=F.passed_cases===F.total_cases;return o.jsx("div",{className:`history-item ${(A==null?void 0:A.id)===F.id?"selected":""}`,onClick:()=>N(F.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(A==null?void 0:A.id)===F.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[G?o.jsx(Ir,{size:14,style:{color:"var(--success)",flexShrink:0}}):o.jsx(_i,{size:14,style:{color:"var(--error)",flexShrink:0}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:F.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(F.started_at*1e3).toLocaleString()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:G?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[F.passed_cases,"/",F.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:X=>{X.stopPropagation(),L(F.id)},title:"Delete run",style:{padding:2},children:o.jsx(Be,{size:12})})]})]})},F.id)})})]})]}),o.jsx("div",{className:"eval-editor",children:A?o.jsx(W8,{run:A,onClose:M}):I?o.jsx(H8,{evalCase:I,evalSetId:r,projectId:e.id,result:u.get(I.id),isRunning:h.has(I.id),onUpdate:F=>O(r,I.id,F),onDelete:()=>R(r,I.id),onRun:()=>S(r,I.id),onClearResult:()=>d(F=>{const G=new Map(F);return G.delete(I.id),G})}):T?o.jsx(q8,{evalSet:T,projectId:e.id,result:p.get(T.id),isRunning:h.has(T.id),caseResults:u,onUpdate:async F=>{try{const G=await Ge.put(`/projects/${e.id}/eval-sets/${T.id}`,F);n(X=>X.map(Q=>Q.id===T.id?G.eval_set:Q))}catch(G){x(G.message)}},onDelete:()=>_(T.id),onRun:()=>V(T.id),onExport:()=>H(T.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Aa,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})})]}):null}function V8({value:e,onChange:t}){var a,l;const{project:n}=ht(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function W8({run:e,onClose:t}){var h;const{project:n}=ht(),[r,i]=k.useState(!0),[s,a]=k.useState(new Set),l=e.case_results||[],c=l.filter(g=>g.passed).length,u=l.filter(g=>!g.passed).length,d=r?l.filter(g=>!g.passed):l,p=g=>{a(v=>{const w=new Set(v);return w.has(g)?w.delete(g):w.add(g),w})},f=g=>{g&&n&&(window.location.href=`/project/${n.id}/run?session=${g}`)};return o.jsxs("div",{className:"test-result-viewer",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"result-header",children:[o.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const g=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(g)}},title:"Copy link to this run",children:o.jsx(Kd,{size:14})})})]}),o.jsxs("div",{className:"result-summary",children:[o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Status"}),o.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Passed"}),o.jsx("span",{className:"value passed",children:c})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Failed"}),o.jsx("span",{className:"value failed",children:u})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Total Cases"}),o.jsx("span",{className:"value",children:l.length})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Duration"}),o.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Tokens"}),o.jsx("span",{className:"value",children:((h=e.total_tokens)==null?void 0:h.toLocaleString())||"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Run Time"}),o.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),o.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[o.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[o.jsx("input",{type:"checkbox",checked:r,onChange:g=>i(g.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),o.jsxs("div",{className:"result-cases",children:[d.map((g,v)=>{var M,L,U,T,I,$;const w=g.case_id||`case-${v}`,m=s.has(w),x=((M=g.metric_results)==null?void 0:M.filter(z=>!z.passed||z.error))||[],y=((L=g.metric_results)==null?void 0:L.filter(z=>z.passed&&!z.error))||[],j=((U=g.rubric_results)==null?void 0:U.filter(z=>!z.passed||z.error))||[],A=((T=g.rubric_results)==null?void 0:T.filter(z=>z.passed&&!z.error))||[],C=m?g.metric_results:x,P=m?g.rubric_results:j,N=m?g.invocation_results:(I=g.invocation_results)==null?void 0:I.filter(z=>{var O;return((O=z.metric_results)==null?void 0:O.some(R=>!R.passed))||z.error}),D=y.length+A.length,E=x.length+j.length;return o.jsxs("div",{className:"result-case",children:[o.jsxs("div",{className:"result-case-header",onClick:()=>p(w),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"result-case-name",children:[o.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:m?"▼":"▶"}),g.passed?o.jsx(Ir,{size:16,style:{color:"var(--success)"}}):o.jsx(_i,{size:16,style:{color:"var(--error)"}}),g.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&o.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:g.eval_set_name}),g.case_name||`Case ${v+1}`,o.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[E>0&&o.jsxs("span",{style:{color:"var(--error)"},children:[E," failed"]}),E>0&&D>0&&" · ",D>0&&o.jsxs("span",{style:{color:"var(--success)"},children:[D," passed"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[g.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:z=>{z.stopPropagation(),f(g.session_id)},title:"View session in Run panel",children:[o.jsx(tv,{size:12})," View Session"]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:g.duration_ms?`${(g.duration_ms/1e3).toFixed(2)}s`:""})]})]}),o.jsxs("div",{className:"result-case-details",children:[(C==null?void 0:C.length)>0&&o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[C.map((z,O)=>{const R=Jo(z.metric,z.score,z.threshold);return o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:z.error?"rgba(255, 193, 7, 0.1)":z.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${z.error?"var(--warning)":z.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[o.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:z.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),z.error?o.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:z.passed?"var(--success)":"var(--error)"},children:R.value}),o.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:R.comparison})]})]},O)}),!m&&y.length>0&&o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",y.length," passed"]})]}),C==null?void 0:C.filter(z=>!z.passed&&z.rationale).map((z,O)=>o.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[o.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[z.metric.replace(/_/g," ")," - Why it failed:"]}),o.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:z.rationale})]},`rationale-${O}`)),(P==null?void 0:P.length)>0&&o.jsxs("div",{style:{marginTop:8},children:[o.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),P.map((z,O)=>o.jsxs("div",{style:{marginBottom:z.rationale&&!z.passed?8:4},children:[o.jsxs("div",{className:"metric-row",children:[o.jsx("span",{className:"metric-name",style:{flex:1},children:z.rubric}),o.jsx("span",{className:`metric-value ${z.passed?"passed":"failed"}`,children:z.passed?"✓ Pass":"✗ Fail"})]}),!z.passed&&z.rationale&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[o.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",z.rationale]}),z.error&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",z.error]})]},O)),!m&&A.length>0&&o.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",A.length," passed rubric",A.length>1?"s":""]})]}),(N==null?void 0:N.length)>0&&o.jsxs("div",{className:"invocation-summary",children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",N.length,!m&&(($=g.invocation_results)==null?void 0:$.length)>N.length?` of ${g.invocation_results.length}`:"",")"]}),N.map((z,O)=>o.jsxs("div",{className:"invocation-item",children:[o.jsxs("div",{className:"invocation-query",children:["Turn ",z.invocation_id||O+1,": ",z.user_message||"(no message)"]}),z.actual_response&&o.jsxs("div",{className:"invocation-response",children:["Response: ",z.actual_response.substring(0,200),z.actual_response.length>200?"...":""]})]},O))]}),g.error&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:g.error})]})]},w)}),l.length===0&&o.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function H8({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:a,onRun:l,onClearResult:c}){var A,C,P;const{project:u}=ht(),[d,p]=k.useState(e),[f,h]=k.useState("assertions");k.useEffect(()=>{p(e)},[e.id]);const g=k.useCallback(N=>{p(D=>({...D,...N})),s(N)},[s]),v=()=>{const N={id:I1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};g({invocations:[...d.invocations,N]})},w=(N,D)=>{const E=[...d.invocations];E[N]={...E[N],...D},g({invocations:E})},m=N=>{g({invocations:d.invocations.filter((D,E)=>E!==N)})},x=N=>{const D=[...d.invocations];D[N]={...D[N],expected_tool_calls:[...D[N].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},g({invocations:D})},y=(N,D,E)=>{const M=[...d.invocations],L=[...M[N].expected_tool_calls];L[D]={...L[D],...E},M[N]={...M[N],expected_tool_calls:L},g({invocations:M})},j=(N,D)=>{const E=[...d.invocations];E[N]={...E[N],expected_tool_calls:E[N].expected_tool_calls.filter((M,L)=>L!==D)},g({invocations:E})};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Aa,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:d.name,onChange:N=>g({name:N.target.value}),placeholder:"Test case name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const N=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(N)},title:"Copy link to this test case",children:o.jsx(Kd,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?o.jsx(Do,{size:14,className:"spinning"}):o.jsx(pr,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Be,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>h("assertions"),children:[o.jsx(Pa,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),o.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>h("rubrics"),children:[o.jsx(Yd,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>h("docs"),children:[o.jsx(ki,{size:14,style:{marginRight:6}}),"Docs"]}),o.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>h("json"),children:[o.jsx(_n,{size:14,style:{marginRight:6}}),"JSON"]})]}),o.jsxs("div",{className:"editor-content",children:[f==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:d.target_agent||"",onChange:N=>g({target_agent:N.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(A=u==null?void 0:u.agents)==null?void 0:A.map(N=>o.jsx("option",{value:N.name,children:N.name},N.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:d.tags.join(", "),onChange:N=>g({tags:N.target.value.split(",").map(D=>D.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:d.description,onChange:N=>g({description:N.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(Xt,{height:"100%",defaultLanguage:"json",value:(()=>{var D;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((D=u==null?void 0:u.app)!=null&&D.state_keys)&&u.app.state_keys.length>0){const E={};return u.app.state_keys.forEach(M=>{M.default_value!==void 0?E[M.name]=M.default_value:E[M.name]=M.type==="string"?"":M.type==="number"?0:M.type==="boolean"?!1:M.type==="array"?[]:{}}),JSON.stringify(E,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:N=>{try{N&&g({initial_state:JSON.parse(N)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Pa,{size:14}),"Conversation Turns"]}),d.invocations.map((N,D)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:D+1}),d.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>m(D),style:{padding:4},children:o.jsx(Be,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:N.user_message,onChange:E=>w(D,{user_message:E.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:N.expected_response||"",onChange:E=>w(D,{expected_response:E.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),N.expected_tool_calls.map((E,M)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:E.name,onChange:L=>y(D,M,{name:L.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${E.args_match_mode==="subset"?"active":""}`,onClick:()=>y(D,M,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${E.args_match_mode==="exact"?"active":""}`,onClick:()=>y(D,M,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(Xt,{height:"22px",defaultLanguage:"json",value:JSON.stringify(E.args||{}),onChange:L=>{try{L&&y(D,M,{args:JSON.parse(L)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>j(D,M),style:{padding:"4px 6px"},children:o.jsx(Be,{size:10})})]},M)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(D),style:{marginTop:4},children:[o.jsx(Qe,{size:12})," Assert Tool Call"]})]})]},N.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:v,children:[o.jsx(Qe,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Ir,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(Xt,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:N=>{if(!N||N==="{}")g({expected_final_state:void 0});else try{g({expected_final_state:JSON.parse(N)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:N,label:D,default:E,max:M})=>{const L=(d.enabled_metrics||[]).find(T=>T.metric===N),U=(L==null?void 0:L.threshold)??E;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!L,onChange:T=>{const I=[...d.enabled_metrics||[]];if(T.target.checked)I.push({metric:N,threshold:E});else{const $=I.findIndex(z=>z.metric===N);$!==-1&&I.splice($,1)}g({enabled_metrics:I})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:L?1:.5,minWidth:100},children:D}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:L?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:M===5?1:0,max:M,step:.1,value:U,disabled:!L,onChange:T=>{const I=[...d.enabled_metrics||[]],$=I.findIndex(z=>z.metric===N);$!==-1&&(I[$]={...I[$],threshold:parseFloat(T.target.value)||0},g({enabled_metrics:I}))},style:{width:60,textAlign:"center",opacity:L?1:.3,padding:"2px 4px",fontSize:11}})]},N)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((N,D)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:N.rubric,onChange:E=>{const M=[...d.rubrics];M[D]={rubric:E.target.value},g({rubrics:M})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>g({rubrics:d.rubrics.filter((E,M)=>M!==D)}),children:o.jsx(Be,{size:12})})]},D)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g({rubrics:[...d.rubrics,{rubric:""}]}),children:[o.jsx(Qe,{size:12})," Add Rubric"]})]})]}),f==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(vn).map(N=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:N}),o.jsx("td",{style:{padding:"8px 4px"},children:vn[N].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:vn[N].description})]},N))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),o.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(Xt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(C=d.tags)!=null&&C.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(N=>{var D;return{user_message:N.user_message,expected_response:N.expected_response||void 0,expected_tool_calls:(D=N.expected_tool_calls)!=null&&D.length?N.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(P=d.rubrics)!=null&&P.length?d.rubrics.map(N=>N.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var D,E;const N=JSON.stringify({name:d.name,description:d.description||void 0,tags:(D=d.tags)!=null&&D.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(M=>{var L;return{user_message:M.user_message,expected_response:M.expected_response||void 0,expected_tool_calls:(L=M.expected_tool_calls)!=null&&L.length?M.expected_tool_calls.map(U=>({tool_name:U.tool_name,args:U.match_type!=="name_only"&&Object.keys(U.args||{}).length?U.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(E=d.rubrics)!=null&&E.length?d.rubrics.map(M=>M.rubric):void 0},null,2);navigator.clipboard.writeText(N)},children:[o.jsx(ts,{size:14})," Copy JSON"]})})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(Ir,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(_i,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(tv,{size:12}),"View Session"]}),c&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((N,D)=>{var M;const E=Jo(N.metric,N.score,N.threshold);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${N.passed?"passed":"failed"}`,children:E.value}),o.jsx("div",{className:"score-label",children:((M=vn[N.metric])==null?void 0:M.name)||N.metric}),o.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:E.comparison}),N.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:N.error})]},D)})}),r.rubric_results&&r.rubric_results.length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((N,D)=>o.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:N.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${N.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:16,color:N.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:N.passed?"✓":"✗"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:N.rubric}),N.error&&o.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",N.error]})]})]},D))})]}),r.invocation_results.map((N,D)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",D+1,": ",N.user_message.length>50?N.user_message.slice(0,50)+"…":N.user_message]}),N.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:N.metric_results.map((E,M)=>{var U;const L=Jo(E.metric,E.score,E.threshold);return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:E.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:E.passed?"var(--success)":"var(--error)"},children:[((U=vn[E.metric])==null?void 0:U.name)||E.metric,": ",L.value]},M)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,N.actual_response||"(no response)",`

`,N.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,N.actual_tool_calls.map((E,M)=>`  ${M+1}. ${E.name}(${JSON.stringify(E.args)})
`).join("")]})]})]},D)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function q8({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:a,onRun:l,onExport:c}){var v,w,m,x;const[u,d]=k.useState(e.name),[p,f]=k.useState(!1);k.useEffect(()=>{d(e.name)},[e.id]);const h=k.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),g=y=>y==null?"-":`${Math.round(y*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(rv,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:y=>d(y.target.value),onBlur:h,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const y=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(y)},title:"Copy link to this eval set",children:o.jsx(Kd,{size:14})}),o.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[o.jsx(_n,{size:14}),"JSON"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx(Ti,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?o.jsx(Do,{size:14,className:"spinning"}):o.jsx(pr,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Be,{size:14})})]}),o.jsx("div",{className:"editor-content",children:p?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),o.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(Xt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(y=>{var j,A;return{name:y.name,description:y.description||void 0,tags:(j=y.tags)!=null&&j.length?y.tags:void 0,target_agent:y.target_agent!=="root_agent"?y.target_agent:void 0,invocations:y.invocations.map(C=>{var P;return{user_message:C.user_message,expected_response:C.expected_response||void 0,expected_tool_calls:(P=C.expected_tool_calls)!=null&&P.length?C.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(y.session_input||{}).length?{state:y.session_input}:void 0,final_session_state:Object.keys(y.final_session_state||{}).length?y.final_session_state:void 0,rubrics:(A=y.rubrics)!=null&&A.length?y.rubrics.map(C=>C.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((v=e.eval_config.metrics)==null?void 0:v.filter(y=>y.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var j;const y=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(A=>{var C,P;return{name:A.name,description:A.description||void 0,tags:(C=A.tags)!=null&&C.length?A.tags:void 0,target_agent:A.target_agent!=="root_agent"?A.target_agent:void 0,invocations:A.invocations.map(N=>{var D;return{user_message:N.user_message,expected_response:N.expected_response||void 0,expected_tool_calls:(D=N.expected_tool_calls)!=null&&D.length?N.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(A.session_input||{}).length?{state:A.session_input}:void 0,final_session_state:Object.keys(A.final_session_state||{}).length?A.final_session_state:void 0,rubrics:(P=A.rubrics)!=null&&P.length?A.rubrics.map(N=>N.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((j=e.eval_config.metrics)==null?void 0:j.filter(A=>A.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(y)},children:[o.jsx(ts,{size:14})," Copy JSON"]})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:y=>s({description:y.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(V8,{value:((w=e.eval_config)==null?void 0:w.judge_model)||"",onChange:y=>s({eval_config:{...e.eval_config,judge_model:y}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(sv,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(vn).map(y=>{var N,D,E;const j=vn[y],A=(D=(N=e.eval_config)==null?void 0:N.metrics)==null?void 0:D.find(M=>M.metric===y),C=(A==null?void 0:A.enabled)??!1,P=((E=A==null?void 0:A.criterion)==null?void 0:E.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:C,onChange:M=>{var T;const L=[...((T=e.eval_config)==null?void 0:T.metrics)||[]],U=L.findIndex(I=>I.metric===y);M.target.checked?U===-1?L.push({metric:y,enabled:!0,criterion:{threshold:.7}}):L[U]={...L[U],enabled:!0}:U!==-1&&(L[U]={...L[U],enabled:!1}),s({eval_config:{...e.eval_config,metrics:L}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:C?1:.5,minWidth:140,fontWeight:C?500:400},children:[j.name,j.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:C?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:P,disabled:!C,onChange:M=>{var T;const L=[...((T=e.eval_config)==null?void 0:T.metrics)||[]],U=L.findIndex(I=>I.metric===y);U!==-1&&(L[U]={...L[U],criterion:{...L[U].criterion,threshold:parseFloat(M.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:L}}))},style:{width:60,textAlign:"center",opacity:C?1:.3,padding:"2px 4px",fontSize:11}})]},y)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((m=e.eval_config)==null?void 0:m.default_trajectory_match_type)||"in_order",onChange:y=>s({eval_config:{...e.eval_config,default_trajectory_match_type:y.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((x=e.eval_config)==null?void 0:x.num_runs)||1,onChange:y=>s({eval_config:{...e.eval_config,num_runs:parseInt(y.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(p_,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:g(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([y,j])=>{var C;const A=Jo(y,j);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:A.value}),o.jsxs("div",{className:"score-label",children:["Avg ",((C=vn[y])==null?void 0:C.name)||y]})]},y)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([y,j])=>{var A;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((A=vn[y])==null?void 0:A.name)||y}),o.jsx("span",{children:g(j)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${j>=.8?"passed":"failed"}`,style:{width:`${j*100}%`}})})]},y)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(y=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:y.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:y.metric_results.map((j,A)=>{const C=Jo(j.metric,j.score,j.threshold);return o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:j.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:j.passed?"var(--success)":"var(--error)"},children:C.value},A)})}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:y.passed?o.jsx(Ir,{size:14,style:{color:"var(--success)"}}):y.error?o.jsx(ki,{size:14,style:{color:"var(--warning)"}}):o.jsx(_i,{size:14,style:{color:"var(--error)"}})})]},y.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(Yd,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(y=>{const j=i.get(y.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[j?j.passed?o.jsx(Ir,{size:14,style:{color:"var(--success)"}}):o.jsx(_i,{size:14,style:{color:"var(--error)"}}):o.jsx(Aa,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:y.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[y.invocations.length," turn(s)"]})]},y.id)})})]})]})})]})}function J8(){const{project:e,setProject:t}=ht(),[n,r]=k.useState(""),[i,s]=k.useState(!0),[a,l]=k.useState(!1),[c,u]=k.useState(null),[d,p]=k.useState(!1);if(!e)return null;k.useEffect(()=>{f()},[e.id]);async function f(){s(!0),u(null);try{const x=await By(e.id);r(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function h(x){x!==void 0&&(r(x),l(!0),u(null))}async function g(){s(!0),u(null);try{const x=await Uy(e.id,n);t(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function v(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function w(){const x=new Blob([n],{type:"text/yaml"}),y=URL.createObjectURL(x),j=document.createElement("a");j.href=y,j.download=`${e.name}.yaml`,j.click(),URL.revokeObjectURL(y)}function m(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async y=>{var C;const j=(C=y.target.files)==null?void 0:C[0];if(!j)return;const A=await j.text();r(A),l(!0)},x.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),a&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(ki,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(ki,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Wd,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:v,title:"Copy to clipboard",children:[o.jsx(ts,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,title:"Download YAML",children:[o.jsx(Ti,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:m,title:"Upload YAML",children:[o.jsx(dl,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[o.jsx(Qt,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,disabled:!a||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(Xt,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function K8(){const{project:e}=ht(),[t,n]=k.useState(!1),[r,i]=k.useState(""),[s,a]=k.useState(!1),[l,c]=k.useState(null);if(k.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(p=>{if(!p.ok)throw new Error("Failed to fetch code");return p.json()}).then(p=>{let f=p.code||"";f=f.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),f=f.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),i(f),a(!1)}).catch(p=>{c(p.message),a(!1),i("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const p=new Blob([r],{type:"text/x-python"}),f=URL.createObjectURL(p),h=document.createElement("a");h.href=f,h.download=`${e.name}_agent.py`,h.click(),URL.revokeObjectURL(f)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(_n,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:s?"Loading...":"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Wd,{size:12}),"Copied!"]}),l&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(ki,{size:12}),"Error"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:s||!!l,children:[o.jsx(ts,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:s||!!l,children:[o.jsx(Ti,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:s?o.jsx("div",{className:"code-loading",children:o.jsx("div",{children:"Loading generated code..."})}):l?o.jsxs("div",{className:"code-error",children:[o.jsx(ki,{size:24}),o.jsx("div",{children:l})]}):o.jsx(Xt,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const G8=[{id:"app",label:"App",icon:sv},{id:"agents",label:"Agents",icon:Er},{id:"tools",label:"Tools",icon:un},{id:"callbacks",label:"Callbacks",icon:_n},{id:"run",label:"Run",icon:iv},{id:"skillsets",label:"SkillSets",icon:e_},{id:"eval",label:"Evaluate",icon:_u},{id:"yaml",label:"YAML",icon:n_},{id:"code",label:"Code",icon:_n}],Y8=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function kc(){var I,$;const{projectId:e,tab:t,itemId:n}=tk(),r=Bd(),{project:i,setProject:s,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:h}=ht(),[g,v]=k.useState(!0),[w,m]=k.useState(!1),[x,y]=k.useState(!1),[j,A]=k.useState(null),C=k.useRef(!0),P=k.useRef(null);k.useEffect(()=>{t&&Y8.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),k.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&h(n)},[t,n]);function N(z){l(z),z==="agents"&&d?r(`/project/${e}/${z}/${d}`,{replace:!0}):z==="tools"&&f?r(`/project/${e}/${z}/${f}`,{replace:!0}):r(`/project/${e}/${z}`,{replace:!0})}function D(z){z?r(`/project/${e}/${a}/${z}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}k.useEffect(()=>(e&&E(e),()=>{s(null),u(!1)}),[e]);async function E(z){C.current=!0;try{const O=await Ry(z);s(O),P.current=JSON.stringify(O),u(!1)}catch(O){console.error("Failed to load project:",O),r("/")}finally{v(!1),setTimeout(()=>{C.current=!1},100)}}async function M(){if(i){m(!0);try{const{eval_sets:z,...O}=i;await yu(i.id,O),P.current=JSON.stringify(i),u(!1)}catch(z){console.error("Failed to save project:",z)}finally{m(!1)}}}async function L(){if(i){y(!0),A(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let z=0,O=0;const R=[],_=[];for(const H of i.eval_sets||[]){if(H.eval_cases.length===0)continue;const K=await Ge.post(`/projects/${i.id}/eval-sets/${H.id}/run`,{});K.result&&(z+=K.result.passed_cases||0,O+=K.result.total_cases||0,K.result.case_results&&R.push(...K.result.case_results),_.push(K.result.eval_set_name||H.name||H.id))}if(R.length>0){const H={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:_.length>1?`All Tests (${_.length} sets)`:_[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:O,passed_cases:z,failed_cases:O-z,case_results:R};try{await Ge.post(`/projects/${i.id}/eval-history`,H)}catch(K){console.warn("Failed to save batch eval run to history:",K)}}A({passed:z,total:O}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>A(null),5e3)}catch(z){console.error("Failed to run tests:",z),A({passed:0,total:-1}),setTimeout(()=>A(null),5e3)}finally{y(!1)}}}const U=k.useRef(null);k.useEffect(()=>{if(i&&!C.current&&U.current){const z=i.app.models||[],O=U.current||[];if(z.some((_,H)=>{const K=O.find(b=>b.id===_.id);return K?K.provider!==_.provider||K.model_name!==_.model_name||K.api_base!==_.api_base||K.temperature!==_.temperature||K.max_output_tokens!==_.max_output_tokens||K.top_p!==_.top_p||K.top_k!==_.top_k:!1})){const _=i.app.default_model_id,H=i.agents.map(b=>{if(b.type==="LlmAgent"&&b.model){const W=b.model._appModelId;if(W){const S=z.find(V=>V.id===W);if(S)return{...b,model:{provider:S.provider,model_name:S.model_name,api_base:S.api_base,temperature:S.temperature,max_output_tokens:S.max_output_tokens,top_p:S.top_p,top_k:S.top_k,fallbacks:[],_appModelId:W}}}else if(_){const S=z.find(V=>V.id===_);if(S&&b.model.provider===S.provider&&b.model.model_name===S.model_name&&b.model.api_base===S.api_base)return{...b,model:{provider:S.provider,model_name:S.model_name,api_base:S.api_base,temperature:S.temperature,max_output_tokens:S.max_output_tokens,top_p:S.top_p,top_k:S.top_k,fallbacks:[],_appModelId:_}}}}return b});H.some((b,W)=>JSON.stringify(b)!==JSON.stringify(i.agents[W]))&&s({...i,agents:H})}}i&&(U.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const T=k.useRef(null);return k.useEffect(()=>(i&&!C.current&&P.current&&JSON.stringify(i)!==P.current&&(u(!0),T.current&&clearTimeout(T.current),T.current=setTimeout(async()=>{try{const{eval_sets:O,...R}=i;await yu(i.id,R),P.current=JSON.stringify(i),u(!1)}catch(O){console.error("Auto-save failed:",O)}},500)),()=>{T.current&&clearTimeout(T.current)}),[i]),g?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(Xk,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:G8.map(z=>o.jsxs("button",{className:`tab-btn ${a===z.id?"active":""}`,onClick:()=>N(z.id),children:[o.jsx(z.icon,{size:14}),z.label]},z.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${j?j.total===-1?"btn-error":j.passed===j.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:L,disabled:x||!((I=i==null?void 0:i.eval_sets)!=null&&I.some(z=>z.eval_cases.length>0)),title:($=i==null?void 0:i.eval_sets)!=null&&$.some(z=>z.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[x?o.jsx(c_,{size:16,className:"spin"}):o.jsx(pr,{size:16}),x?"Testing...":j?j.total===-1?"Error":`${j.passed}/${j.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:M,disabled:w,children:[o.jsx(La,{size:16}),w?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[a==="app"&&o.jsx(j_,{}),a==="agents"&&o.jsx(A4,{onSelectAgent:D}),a==="tools"&&o.jsx(dE,{onSelectTool:D}),a==="callbacks"&&o.jsx(fE,{onSelectCallback:D}),a==="run"&&o.jsx(O8,{}),a==="skillsets"&&o.jsx(F8,{}),a==="eval"&&o.jsx(U8,{}),a==="yaml"&&o.jsx(J8,{}),a==="code"&&o.jsx(K8,{})]})]}):null}function Q8(){const{setMcpServers:e,setBuiltinTools:t}=ht();return k.useEffect(()=>{Vd().then(e).catch(console.error),Vy().then(t).catch(console.error)},[e,t]),o.jsxs(yk,{children:[o.jsx(Wr,{path:"/",element:o.jsx(x_,{})}),o.jsx(Wr,{path:"/project/:projectId",element:o.jsx(kc,{})}),o.jsx(Wr,{path:"/project/:projectId/:tab",element:o.jsx(kc,{})}),o.jsx(Wr,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(kc,{})}),o.jsx(Wr,{path:"*",element:o.jsx(gk,{to:"/",replace:!0})})]})}_c.createRoot(document.getElementById("root")).render(o.jsx(Dt.StrictMode,{children:o.jsx(wk,{children:o.jsx(Q8,{})})}));
