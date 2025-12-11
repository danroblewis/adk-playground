function Bg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var $o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ml(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function h_(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Kp={exports:{}},hl={},Qp={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),Ug=Symbol.for("react.portal"),Vg=Symbol.for("react.fragment"),Wg=Symbol.for("react.strict_mode"),Hg=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),Qg=Symbol.for("react.forward_ref"),Gg=Symbol.for("react.suspense"),Jg=Symbol.for("react.memo"),Yg=Symbol.for("react.lazy"),mc=Symbol.iterator;function Xg(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var Gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jp=Object.assign,Yp={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||Gp}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xp(){}Xp.prototype=Dr.prototype;function Hs(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||Gp}var qs=Hs.prototype=new Xp;qs.constructor=Hs;Jp(qs,Dr.prototype);qs.isPureReactComponent=!0;var hc=Array.isArray,Zp=Object.prototype.hasOwnProperty,Ks={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Zp.call(t,r)&&!ef.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Hi,type:e,key:o,ref:a,props:i,_owner:Ks.current}}function Zg(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function ex(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gc=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ex(""+e.key):t.toString(36)}function So(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Hi:case Ug:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+$l(a,0):r,hc(i)?(n="",e!=null&&(n=e.replace(gc,"$&/")+"/"),So(i,t,n,"",function(c){return c})):i!=null&&(Qs(i)&&(i=Zg(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(gc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",hc(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+$l(o,s);a+=So(o,t,n,u,i)}else if(u=Xg(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+$l(o,s++),a+=So(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function to(e,t,n){if(e==null)return e;var r=[],i=0;return So(e,r,"","",function(o){return t.call(n,o,i++)}),r}function tx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},_o={transition:null},nx={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:_o,ReactCurrentOwner:Ks};function nf(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Dr;ae.Fragment=Vg;ae.Profiler=Hg;ae.PureComponent=Hs;ae.StrictMode=Wg;ae.Suspense=Gg;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nx;ae.act=nf;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ks.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Zp.call(t,u)&&!ef.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Hi,type:e.type,key:i,ref:o,props:r,_owner:a}};ae.createContext=function(e){return e={$$typeof:Kg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qg,_context:e},e.Consumer=e};ae.createElement=tf;ae.createFactory=function(e){var t=tf.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:Qg,render:e}};ae.isValidElement=Qs;ae.lazy=function(e){return{$$typeof:Yg,_payload:{_status:-1,_result:e},_init:tx}};ae.memo=function(e,t){return{$$typeof:Jg,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=_o.transition;_o.transition={};try{e()}finally{_o.transition=t}};ae.unstable_act=nf;ae.useCallback=function(e,t){return Xe.current.useCallback(e,t)};ae.useContext=function(e){return Xe.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};ae.useEffect=function(e,t){return Xe.current.useEffect(e,t)};ae.useId=function(){return Xe.current.useId()};ae.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return Xe.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};ae.useRef=function(e){return Xe.current.useRef(e)};ae.useState=function(e){return Xe.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return Xe.current.useTransition()};ae.version="18.3.1";Qp.exports=ae;var N=Qp.exports;const Rt=ml(N),rx=Bg({__proto__:null,default:Rt},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix=N,ox=Symbol.for("react.element"),lx=Symbol.for("react.fragment"),ax=Object.prototype.hasOwnProperty,sx=ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ux={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)ax.call(t,r)&&!ux.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ox,type:e,key:o,ref:a,props:i,_owner:sx.current}}hl.Fragment=lx;hl.jsx=rf;hl.jsxs=rf;Kp.exports=hl;var l=Kp.exports,La={},of={exports:{}},xt={},lf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,U){var j=A.length;A.push(U);e:for(;0<j;){var V=j-1>>>1,Q=A[V];if(0<i(Q,U))A[V]=U,A[j]=Q,j=V;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var U=A[0],j=A.pop();if(j!==U){A[0]=j;e:for(var V=0,Q=A.length,C=Q>>>1;V<C;){var te=2*(V+1)-1,ie=A[te],de=te+1,B=A[de];if(0>i(ie,j))de<Q&&0>i(B,ie)?(A[V]=B,A[de]=j,V=de):(A[V]=ie,A[te]=j,V=te);else if(de<Q&&0>i(B,j))A[V]=B,A[de]=j,V=de;else break e}}return U}function i(A,U){var j=A.sortIndex-U.sortIndex;return j!==0?j:A.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],d=1,p=null,f=3,m=!1,w=!1,b=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=A)r(c),U.sortIndex=U.expirationTime,t(u,U);else break;U=n(c)}}function T(A){if(b=!1,g(A),!w)if(n(u)!==null)w=!0,D(_);else{var U=n(c);U!==null&&L(T,U.startTime-A)}}function _(A,U){w=!1,b&&(b=!1,h(M),M=-1),m=!0;var j=f;try{for(g(U),p=n(u);p!==null&&(!(p.expirationTime>U)||A&&!v());){var V=p.callback;if(typeof V=="function"){p.callback=null,f=p.priorityLevel;var Q=V(p.expirationTime<=U);U=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(u)&&r(u),g(U)}else r(u);p=n(u)}if(p!==null)var C=!0;else{var te=n(c);te!==null&&L(T,te.startTime-U),C=!1}return C}finally{p=null,f=j,m=!1}}var k=!1,P=null,M=-1,$=5,S=-1;function v(){return!(e.unstable_now()-S<$)}function y(){if(P!==null){var A=e.unstable_now();S=A;var U=!0;try{U=P(!0,A)}finally{U?z():(k=!1,P=null)}}else k=!1}var z;if(typeof x=="function")z=function(){x(y)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,I=R.port2;R.port1.onmessage=y,z=function(){I.postMessage(null)}}else z=function(){E(y,0)};function D(A){P=A,k||(k=!0,z())}function L(A,U){M=E(function(){A(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,D(_))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var j=f;f=U;try{return A()}finally{f=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,U){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var j=f;f=A;try{return U()}finally{f=j}},e.unstable_scheduleCallback=function(A,U,j){var V=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?V+j:V):j=V,A){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=j+Q,A={id:d++,callback:U,priorityLevel:A,startTime:j,expirationTime:Q,sortIndex:-1},j>V?(A.sortIndex=j,t(c,A),n(u)===null&&A===n(c)&&(b?(h(M),M=-1):b=!0,L(T,j-V))):(A.sortIndex=Q,t(u,A),w||m||(w=!0,D(_))),A},e.unstable_shouldYield=v,e.unstable_wrapCallback=function(A){var U=f;return function(){var j=f;f=U;try{return A.apply(this,arguments)}finally{f=j}}}})(af);lf.exports=af;var cx=lf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx=N,gt=cx;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sf=new Set,ji={};function Xn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(ji[e]=t,e=0;e<t.length;e++)sf.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,px=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},yc={};function fx(e){return Aa.call(yc,e)?!0:Aa.call(xc,e)?!1:px.test(e)?yc[e]=!0:(xc[e]=!0,!1)}function mx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hx(e,t,n,r){if(t===null||typeof t>"u"||mx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gs=/[\-:]([a-z])/g;function Js(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gs,Js);Ue[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gs,Js);Ue[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gs,Js);Ue[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ys(e,t,n,r){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hx(t,n,i,r)&&(n=null),r||i===null?fx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),lr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Xs=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),Zs=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),Ra=Symbol.for("react.suspense_list"),eu=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),df=Symbol.for("react.offscreen"),vc=Symbol.iterator;function qr(e){return e===null||typeof e!="object"?null:(e=vc&&e[vc]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,Fl;function ii(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Bl=!1;function Ul(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ii(e):""}function gx(e){switch(e.tag){case 5:return ii(e.type);case 16:return ii("Lazy");case 13:return ii("Suspense");case 19:return ii("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function Oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case lr:return"Portal";case Ia:return"Profiler";case Xs:return"StrictMode";case Ma:return"Suspense";case Ra:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cf:return(e.displayName||"Context")+".Consumer";case uf:return(e._context.displayName||"Context")+".Provider";case Zs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eu:return t=e.displayName||null,t!==null?t:Oa(e.type)||"Memo";case cn:t=e._payload,e=e._init;try{return Oa(e(t))}catch{}}return null}function xx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oa(t);case 8:return t===Xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yx(e){var t=pf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=yx(e))}function ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mf(e,t){t=t.checked,t!=null&&Ys(e,"checked",t,!1)}function $a(e,t){mf(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fa(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fa(e,t,n){(t!=="number"||Fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oi=Array.isArray;function br(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ba(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(oi(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function hf(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,xf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vx=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(e){vx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ui[t]=ui[e]})});function yf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ui.hasOwnProperty(e)&&ui[e]?(""+t).trim():t+"px"}function vf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var bx=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(e,t){if(t){if(bx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function Wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,kr=null,wr=null;function Sc(e){if(e=Qi(e)){if(typeof qa!="function")throw Error(H(280));var t=e.stateNode;t&&(t=bl(t),qa(e.stateNode,e.type,t))}}function bf(e){kr?wr?wr.push(e):wr=[e]:kr=e}function kf(){if(kr){var e=kr,t=wr;if(wr=kr=null,Sc(e),t)for(e=0;e<t.length;e++)Sc(t[e])}}function wf(e,t){return e(t)}function jf(){}var Vl=!1;function Sf(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return wf(e,t,n)}finally{Vl=!1,(kr!==null||wr!==null)&&(jf(),kf())}}function _i(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var Ka=!1;if(nn)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){Ka=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{Ka=!1}function kx(e,t,n,r,i,o,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ci=!1,Bo=null,Uo=!1,Qa=null,wx={onError:function(e){ci=!0,Bo=e}};function jx(e,t,n,r,i,o,a,s,u){ci=!1,Bo=null,kx.apply(wx,arguments)}function Sx(e,t,n,r,i,o,a,s,u){if(jx.apply(this,arguments),ci){if(ci){var c=Bo;ci=!1,Bo=null}else throw Error(H(198));Uo||(Uo=!0,Qa=c)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _c(e){if(Zn(e)!==e)throw Error(H(188))}function _x(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _c(i),e;if(o===r)return _c(i),t;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function Cf(e){return e=_x(e),e!==null?Nf(e):null}function Nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nf(e);if(t!==null)return t;e=e.sibling}return null}var Ef=gt.unstable_scheduleCallback,Cc=gt.unstable_cancelCallback,Cx=gt.unstable_shouldYield,Nx=gt.unstable_requestPaint,Pe=gt.unstable_now,Ex=gt.unstable_getCurrentPriorityLevel,nu=gt.unstable_ImmediatePriority,zf=gt.unstable_UserBlockingPriority,Vo=gt.unstable_NormalPriority,zx=gt.unstable_LowPriority,Tf=gt.unstable_IdlePriority,gl=null,Ht=null;function Tx(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(gl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Ax,Px=Math.log,Lx=Math.LN2;function Ax(e){return e>>>=0,e===0?32:31-(Px(e)/Lx|0)|0}var oo=64,lo=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=li(s):(o&=a,o!==0&&(r=li(o)))}else a=n&~i,a!==0?r=li(a):o!==0&&(r=li(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),i=1<<n,r|=e[n],t&=~i;return r}function Ix(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ot(o),s=1<<a,u=i[a];u===-1?(!(s&n)||s&r)&&(i[a]=Ix(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pf(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function Rx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ot(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var he=0;function Lf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Af,iu,If,Mf,Rf,Ja=!1,ao=[],xn=null,yn=null,vn=null,Ci=new Map,Ni=new Map,pn=[],Ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nc(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function Qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Qi(t),t!==null&&iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dx(e,t,n,r,i){switch(t){case"focusin":return xn=Qr(xn,e,t,n,r,i),!0;case"dragenter":return yn=Qr(yn,e,t,n,r,i),!0;case"mouseover":return vn=Qr(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ci.set(o,Qr(Ci.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ni.set(o,Qr(Ni.get(o)||null,e,t,n,r,i)),!0}return!1}function Of(e){var t=$n(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=_f(n),t!==null){e.blockedOn=t,Rf(e.priority,function(){If(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ha=r,n.target.dispatchEvent(r),Ha=null}else return t=Qi(n),t!==null&&iu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ec(e,t,n){Co(e)&&n.delete(t)}function $x(){Ja=!1,xn!==null&&Co(xn)&&(xn=null),yn!==null&&Co(yn)&&(yn=null),vn!==null&&Co(vn)&&(vn=null),Ci.forEach(Ec),Ni.forEach(Ec)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ja||(Ja=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,$x)))}function Ei(e){function t(i){return Gr(i,e)}if(0<ao.length){Gr(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&Gr(xn,e),yn!==null&&Gr(yn,e),vn!==null&&Gr(vn,e),Ci.forEach(t),Ni.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)Of(n),n.blockedOn===null&&pn.shift()}var jr=an.ReactCurrentBatchConfig,Ho=!0;function Fx(e,t,n,r){var i=he,o=jr.transition;jr.transition=null;try{he=1,ou(e,t,n,r)}finally{he=i,jr.transition=o}}function Bx(e,t,n,r){var i=he,o=jr.transition;jr.transition=null;try{he=4,ou(e,t,n,r)}finally{he=i,jr.transition=o}}function ou(e,t,n,r){if(Ho){var i=Ya(e,t,n,r);if(i===null)ea(e,t,r,qo,n),Nc(e,r);else if(Dx(i,e,t,n,r))r.stopPropagation();else if(Nc(e,r),t&4&&-1<Ox.indexOf(e)){for(;i!==null;){var o=Qi(i);if(o!==null&&Af(o),o=Ya(e,t,n,r),o===null&&ea(e,t,r,qo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ea(e,t,r,null,n)}}var qo=null;function Ya(e,t,n,r){if(qo=null,e=tu(r),e=$n(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qo=e,null}function Df(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ex()){case nu:return 1;case zf:return 4;case Vo:case zx:return 16;case Tf:return 536870912;default:return 16}default:return 16}}var mn=null,lu=null,No=null;function $f(){if(No)return No;var e,t=lu,n=t.length,r,i="value"in mn?mn.value:mn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return No=i.slice(e,1<r?1-r:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function zc(){return!1}function yt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?so:zc,this.isPropagationStopped=zc,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=yt($r),Ki=Ee({},$r,{view:0,detail:0}),Ux=yt(Ki),Hl,ql,Jr,xl=Ee({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Hl=e.screenX-Jr.screenX,ql=e.screenY-Jr.screenY):ql=Hl=0,Jr=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),Tc=yt(xl),Vx=Ee({},xl,{dataTransfer:0}),Wx=yt(Vx),Hx=Ee({},Ki,{relatedTarget:0}),Kl=yt(Hx),qx=Ee({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Kx=yt(qx),Qx=Ee({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gx=yt(Qx),Jx=Ee({},$r,{data:0}),Pc=yt(Jx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zx[e])?!!t[e]:!1}function su(){return ey}var ty=Ee({},Ki,{key:function(e){if(e.key){var t=Yx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ny=yt(ty),ry=Ee({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lc=yt(ry),iy=Ee({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),oy=yt(iy),ly=Ee({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),ay=yt(ly),sy=Ee({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=yt(sy),cy=[9,13,27,32],uu=nn&&"CompositionEvent"in window,di=null;nn&&"documentMode"in document&&(di=document.documentMode);var dy=nn&&"TextEvent"in window&&!di,Ff=nn&&(!uu||di&&8<di&&11>=di),Ac=" ",Ic=!1;function Bf(e,t){switch(e){case"keyup":return cy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function py(e,t){switch(e){case"compositionend":return Uf(t);case"keypress":return t.which!==32?null:(Ic=!0,Ac);case"textInput":return e=t.data,e===Ac&&Ic?null:e;default:return null}}function fy(e,t){if(sr)return e==="compositionend"||!uu&&Bf(e,t)?(e=$f(),No=lu=mn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ff&&t.locale!=="ko"?null:t.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!my[e.type]:t==="textarea"}function Vf(e,t,n,r){bf(r),t=Ko(t,"onChange"),0<t.length&&(n=new au("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pi=null,zi=null;function hy(e){em(e,0)}function yl(e){var t=dr(e);if(ff(t))return e}function gy(e,t){if(e==="change")return t}var Wf=!1;if(nn){var Ql;if(nn){var Gl="oninput"in document;if(!Gl){var Rc=document.createElement("div");Rc.setAttribute("oninput","return;"),Gl=typeof Rc.oninput=="function"}Ql=Gl}else Ql=!1;Wf=Ql&&(!document.documentMode||9<document.documentMode)}function Oc(){pi&&(pi.detachEvent("onpropertychange",Hf),zi=pi=null)}function Hf(e){if(e.propertyName==="value"&&yl(zi)){var t=[];Vf(t,zi,e,tu(e)),Sf(hy,t)}}function xy(e,t,n){e==="focusin"?(Oc(),pi=t,zi=n,pi.attachEvent("onpropertychange",Hf)):e==="focusout"&&Oc()}function yy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(zi)}function vy(e,t){if(e==="click")return yl(t)}function by(e,t){if(e==="input"||e==="change")return yl(t)}function ky(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $t=typeof Object.is=="function"?Object.is:ky;function Ti(e,t){if($t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Aa.call(t,i)||!$t(e[i],t[i]))return!1}return!0}function Dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $c(e,t){var n=Dc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dc(n)}}function qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kf(){for(var e=window,t=Fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fo(e.document)}return t}function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wy(e){var t=Kf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qf(n.ownerDocument.documentElement,n)){if(r!==null&&cu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$c(n,o);var a=$c(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jy=nn&&"documentMode"in document&&11>=document.documentMode,ur=null,Xa=null,fi=null,Za=!1;function Fc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Za||ur==null||ur!==Fo(r)||(r=ur,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&Ti(fi,r)||(fi=r,r=Ko(Xa,"onSelect"),0<r.length&&(t=new au("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Jl={},Qf={};nn&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function vl(e){if(Jl[e])return Jl[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qf)return Jl[e]=t[n];return e}var Gf=vl("animationend"),Jf=vl("animationiteration"),Yf=vl("animationstart"),Xf=vl("transitionend"),Zf=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){Zf.set(e,t),Xn(t,[e])}for(var Yl=0;Yl<Bc.length;Yl++){var Xl=Bc[Yl],Sy=Xl.toLowerCase(),_y=Xl[0].toUpperCase()+Xl.slice(1);zn(Sy,"on"+_y)}zn(Gf,"onAnimationEnd");zn(Jf,"onAnimationIteration");zn(Yf,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Xf,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));function Uc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sx(r,t,void 0,e),e.currentTarget=null}function em(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Uc(i,s,c),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Uc(i,s,c),o=u}}}if(Uo)throw e=Qa,Uo=!1,Qa=null,e}function we(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var r=e+"__bubble";n.has(r)||(tm(t,e,2,!1),n.add(r))}function Zl(e,t,n){var r=0;t&&(r|=4),tm(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[co]){e[co]=!0,sf.forEach(function(n){n!=="selectionchange"&&(Cy.has(n)||Zl(n,!1,e),Zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Zl("selectionchange",!1,t))}}function tm(e,t,n,r){switch(Df(t)){case 1:var i=Fx;break;case 4:i=Bx;break;default:i=ou}n=i.bind(null,t,n,e),i=void 0,!Ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ea(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;s!==null;){if(a=$n(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Sf(function(){var c=o,d=tu(n),p=[];e:{var f=Zf.get(e);if(f!==void 0){var m=au,w=e;switch(e){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":m=ny;break;case"focusin":w="focus",m=Kl;break;case"focusout":w="blur",m=Kl;break;case"beforeblur":case"afterblur":m=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=oy;break;case Gf:case Jf:case Yf:m=Kx;break;case Xf:m=ay;break;case"scroll":m=Ux;break;case"wheel":m=uy;break;case"copy":case"cut":case"paste":m=Gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Lc}var b=(t&4)!==0,E=!b&&e==="scroll",h=b?f!==null?f+"Capture":null:f;b=[];for(var x=c,g;x!==null;){g=x;var T=g.stateNode;if(g.tag===5&&T!==null&&(g=T,h!==null&&(T=_i(x,h),T!=null&&b.push(Li(x,T,g)))),E)break;x=x.return}0<b.length&&(f=new m(f,w,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Ha&&(w=n.relatedTarget||n.fromElement)&&($n(w)||w[rn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=c,w=w?$n(w):null,w!==null&&(E=Zn(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=c),m!==w)){if(b=Tc,T="onMouseLeave",h="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=Lc,T="onPointerLeave",h="onPointerEnter",x="pointer"),E=m==null?f:dr(m),g=w==null?f:dr(w),f=new b(T,x+"leave",m,n,d),f.target=E,f.relatedTarget=g,T=null,$n(d)===c&&(b=new b(h,x+"enter",w,n,d),b.target=g,b.relatedTarget=E,T=b),E=T,m&&w)t:{for(b=m,h=w,x=0,g=b;g;g=nr(g))x++;for(g=0,T=h;T;T=nr(T))g++;for(;0<x-g;)b=nr(b),x--;for(;0<g-x;)h=nr(h),g--;for(;x--;){if(b===h||h!==null&&b===h.alternate)break t;b=nr(b),h=nr(h)}b=null}else b=null;m!==null&&Vc(p,f,m,b,!1),w!==null&&E!==null&&Vc(p,E,w,b,!0)}}e:{if(f=c?dr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var _=gy;else if(Mc(f))if(Wf)_=by;else{_=yy;var k=xy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=vy);if(_&&(_=_(e,c))){Vf(p,_,n,d);break e}k&&k(e,f,c),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Fa(f,"number",f.value)}switch(k=c?dr(c):window,e){case"focusin":(Mc(k)||k.contentEditable==="true")&&(ur=k,Xa=c,fi=null);break;case"focusout":fi=Xa=ur=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,Fc(p,n,d);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":Fc(p,n,d)}var P;if(uu)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else sr?Bf(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(Ff&&n.locale!=="ko"&&(sr||M!=="onCompositionStart"?M==="onCompositionEnd"&&sr&&(P=$f()):(mn=d,lu="value"in mn?mn.value:mn.textContent,sr=!0)),k=Ko(c,M),0<k.length&&(M=new Pc(M,e,null,n,d),p.push({event:M,listeners:k}),P?M.data=P:(P=Uf(n),P!==null&&(M.data=P)))),(P=dy?py(e,n):fy(e,n))&&(c=Ko(c,"onBeforeInput"),0<c.length&&(d=new Pc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=P))}em(p,t)})}function Li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_i(e,n),o!=null&&r.unshift(Li(e,o,i)),o=_i(e,t),o!=null&&r.push(Li(e,o,i))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=_i(n,o),u!=null&&a.unshift(Li(n,u,s))):i||(u=_i(n,o),u!=null&&a.push(Li(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ny=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function Wc(e){return(typeof e=="string"?e:""+e).replace(Ny,`
`).replace(Ey,"")}function po(e,t,n){if(t=Wc(t),Wc(e)!==t&&n)throw Error(H(425))}function Qo(){}var es=null,ts=null;function ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rs=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,Hc=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Hc<"u"?function(e){return Hc.resolve(null).then(e).catch(Py)}:rs;function Py(e){setTimeout(function(){throw e})}function ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ei(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Fr,Ai="__reactProps$"+Fr,rn="__reactContainer$"+Fr,is="__reactEvents$"+Fr,Ly="__reactListeners$"+Fr,Ay="__reactHandles$"+Fr;function $n(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qc(e);e!==null;){if(n=e[Vt])return n;e=qc(e)}return t}e=n,n=e.parentNode}return null}function Qi(e){return e=e[Vt]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function bl(e){return e[Ai]||null}var os=[],pr=-1;function Tn(e){return{current:e}}function je(e){0>pr||(e.current=os[pr],os[pr]=null,pr--)}function be(e,t){pr++,os[pr]=e.current,e.current=t}var Nn={},Ke=Tn(Nn),it=Tn(!1),Kn=Nn;function zr(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function Go(){je(it),je(Ke)}function Kc(e,t,n){if(Ke.current!==Nn)throw Error(H(168));be(Ke,t),be(it,n)}function nm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(H(108,xx(e)||"Unknown",i));return Ee({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Kn=Ke.current,be(Ke,e),be(it,it.current),!0}function Qc(e,t,n){var r=e.stateNode;if(!r)throw Error(H(169));n?(e=nm(e,t,Kn),r.__reactInternalMemoizedMergedChildContext=e,je(it),je(Ke),be(Ke,e)):je(it),be(it,n)}var Xt=null,kl=!1,na=!1;function rm(e){Xt===null?Xt=[e]:Xt.push(e)}function Iy(e){kl=!0,rm(e)}function Pn(){if(!na&&Xt!==null){na=!0;var e=0,t=he;try{var n=Xt;for(he=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xt=null,kl=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(e+1)),Ef(nu,Pn),i}finally{he=t,na=!1}}return null}var fr=[],mr=0,Yo=null,Xo=0,bt=[],kt=0,Qn=null,Zt=1,en="";function Rn(e,t){fr[mr++]=Xo,fr[mr++]=Yo,Yo=e,Xo=t}function im(e,t,n){bt[kt++]=Zt,bt[kt++]=en,bt[kt++]=Qn,Qn=e;var r=Zt;e=en;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var o=32-Ot(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Zt=1<<32-Ot(t)+i|n<<i|r,en=o+e}else Zt=1<<o|n<<i|r,en=e}function du(e){e.return!==null&&(Rn(e,1),im(e,1,0))}function pu(e){for(;e===Yo;)Yo=fr[--mr],fr[mr]=null,Xo=fr[--mr],fr[mr]=null;for(;e===Qn;)Qn=bt[--kt],bt[kt]=null,en=bt[--kt],bt[kt]=null,Zt=bt[--kt],bt[kt]=null}var ht=null,ft=null,Se=!1,Mt=null;function om(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qn!==null?{id:Zt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(Se){var t=ft;if(t){var n=t;if(!Gc(e,t)){if(ls(e))throw Error(H(418));t=bn(n.nextSibling);var r=ht;t&&Gc(e,t)?om(r,n):(e.flags=e.flags&-4097|2,Se=!1,ht=e)}}else{if(ls(e))throw Error(H(418));e.flags=e.flags&-4097|2,Se=!1,ht=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function fo(e){if(e!==ht)return!1;if(!Se)return Jc(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ns(e.type,e.memoizedProps)),t&&(t=ft)){if(ls(e))throw lm(),Error(H(418));for(;t;)om(e,t),t=bn(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?bn(e.stateNode.nextSibling):null;return!0}function lm(){for(var e=ft;e;)e=bn(e.nextSibling)}function Tr(){ft=ht=null,Se=!1}function fu(e){Mt===null?Mt=[e]:Mt.push(e)}var My=an.ReactCurrentBatchConfig;function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function mo(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yc(e){var t=e._init;return t(e._payload)}function am(e){function t(h,x){if(e){var g=h.deletions;g===null?(h.deletions=[x],h.flags|=16):g.push(x)}}function n(h,x){if(!e)return null;for(;x!==null;)t(h,x),x=x.sibling;return null}function r(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function i(h,x){return h=Sn(h,x),h.index=0,h.sibling=null,h}function o(h,x,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<x?(h.flags|=2,x):g):(h.flags|=2,x)):(h.flags|=1048576,x)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,x,g,T){return x===null||x.tag!==6?(x=ua(g,h.mode,T),x.return=h,x):(x=i(x,g),x.return=h,x)}function u(h,x,g,T){var _=g.type;return _===ar?d(h,x,g.props.children,T,g.key):x!==null&&(x.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===cn&&Yc(_)===x.type)?(T=i(x,g.props),T.ref=Yr(h,x,g),T.return=h,T):(T=Mo(g.type,g.key,g.props,null,h.mode,T),T.ref=Yr(h,x,g),T.return=h,T)}function c(h,x,g,T){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=ca(g,h.mode,T),x.return=h,x):(x=i(x,g.children||[]),x.return=h,x)}function d(h,x,g,T,_){return x===null||x.tag!==7?(x=Wn(g,h.mode,T,_),x.return=h,x):(x=i(x,g),x.return=h,x)}function p(h,x,g){if(typeof x=="string"&&x!==""||typeof x=="number")return x=ua(""+x,h.mode,g),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case no:return g=Mo(x.type,x.key,x.props,null,h.mode,g),g.ref=Yr(h,null,x),g.return=h,g;case lr:return x=ca(x,h.mode,g),x.return=h,x;case cn:var T=x._init;return p(h,T(x._payload),g)}if(oi(x)||qr(x))return x=Wn(x,h.mode,g,null),x.return=h,x;mo(h,x)}return null}function f(h,x,g,T){var _=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:s(h,x,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case no:return g.key===_?u(h,x,g,T):null;case lr:return g.key===_?c(h,x,g,T):null;case cn:return _=g._init,f(h,x,_(g._payload),T)}if(oi(g)||qr(g))return _!==null?null:d(h,x,g,T,null);mo(h,g)}return null}function m(h,x,g,T,_){if(typeof T=="string"&&T!==""||typeof T=="number")return h=h.get(g)||null,s(x,h,""+T,_);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case no:return h=h.get(T.key===null?g:T.key)||null,u(x,h,T,_);case lr:return h=h.get(T.key===null?g:T.key)||null,c(x,h,T,_);case cn:var k=T._init;return m(h,x,g,k(T._payload),_)}if(oi(T)||qr(T))return h=h.get(g)||null,d(x,h,T,_,null);mo(x,T)}return null}function w(h,x,g,T){for(var _=null,k=null,P=x,M=x=0,$=null;P!==null&&M<g.length;M++){P.index>M?($=P,P=null):$=P.sibling;var S=f(h,P,g[M],T);if(S===null){P===null&&(P=$);break}e&&P&&S.alternate===null&&t(h,P),x=o(S,x,M),k===null?_=S:k.sibling=S,k=S,P=$}if(M===g.length)return n(h,P),Se&&Rn(h,M),_;if(P===null){for(;M<g.length;M++)P=p(h,g[M],T),P!==null&&(x=o(P,x,M),k===null?_=P:k.sibling=P,k=P);return Se&&Rn(h,M),_}for(P=r(h,P);M<g.length;M++)$=m(P,h,M,g[M],T),$!==null&&(e&&$.alternate!==null&&P.delete($.key===null?M:$.key),x=o($,x,M),k===null?_=$:k.sibling=$,k=$);return e&&P.forEach(function(v){return t(h,v)}),Se&&Rn(h,M),_}function b(h,x,g,T){var _=qr(g);if(typeof _!="function")throw Error(H(150));if(g=_.call(g),g==null)throw Error(H(151));for(var k=_=null,P=x,M=x=0,$=null,S=g.next();P!==null&&!S.done;M++,S=g.next()){P.index>M?($=P,P=null):$=P.sibling;var v=f(h,P,S.value,T);if(v===null){P===null&&(P=$);break}e&&P&&v.alternate===null&&t(h,P),x=o(v,x,M),k===null?_=v:k.sibling=v,k=v,P=$}if(S.done)return n(h,P),Se&&Rn(h,M),_;if(P===null){for(;!S.done;M++,S=g.next())S=p(h,S.value,T),S!==null&&(x=o(S,x,M),k===null?_=S:k.sibling=S,k=S);return Se&&Rn(h,M),_}for(P=r(h,P);!S.done;M++,S=g.next())S=m(P,h,M,S.value,T),S!==null&&(e&&S.alternate!==null&&P.delete(S.key===null?M:S.key),x=o(S,x,M),k===null?_=S:k.sibling=S,k=S);return e&&P.forEach(function(y){return t(h,y)}),Se&&Rn(h,M),_}function E(h,x,g,T){if(typeof g=="object"&&g!==null&&g.type===ar&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case no:e:{for(var _=g.key,k=x;k!==null;){if(k.key===_){if(_=g.type,_===ar){if(k.tag===7){n(h,k.sibling),x=i(k,g.props.children),x.return=h,h=x;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===cn&&Yc(_)===k.type){n(h,k.sibling),x=i(k,g.props),x.ref=Yr(h,k,g),x.return=h,h=x;break e}n(h,k);break}else t(h,k);k=k.sibling}g.type===ar?(x=Wn(g.props.children,h.mode,T,g.key),x.return=h,h=x):(T=Mo(g.type,g.key,g.props,null,h.mode,T),T.ref=Yr(h,x,g),T.return=h,h=T)}return a(h);case lr:e:{for(k=g.key;x!==null;){if(x.key===k)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){n(h,x.sibling),x=i(x,g.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else t(h,x);x=x.sibling}x=ca(g,h.mode,T),x.return=h,h=x}return a(h);case cn:return k=g._init,E(h,x,k(g._payload),T)}if(oi(g))return w(h,x,g,T);if(qr(g))return b(h,x,g,T);mo(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,x!==null&&x.tag===6?(n(h,x.sibling),x=i(x,g),x.return=h,h=x):(n(h,x),x=ua(g,h.mode,T),x.return=h,h=x),a(h)):n(h,x)}return E}var Pr=am(!0),sm=am(!1),Zo=Tn(null),el=null,hr=null,mu=null;function hu(){mu=hr=el=null}function gu(e){var t=Zo.current;je(Zo),e._currentValue=t}function ss(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){el=e,mu=hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(mu!==e)if(e={context:e,memoizedValue:t,next:null},hr===null){if(el===null)throw Error(H(308));hr=e,el.dependencies={lanes:0,firstContext:e}}else hr=hr.next=e;return t}var Fn=null;function xu(e){Fn===null?Fn=[e]:Fn.push(e)}function um(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xu(t)):(n.next=i.next,i.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,on(e,n)}return i=r.interleaved,i===null?(t.next=t,xu(r)):(t.next=i.next,i.next=t),r.interleaved=t,on(e,n)}function zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ru(e,n)}}function Xc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var i=e.updateQueue;dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?o=c:a.next=c,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;a=0,d=c=u=null,s=o;do{var f=s.lane,m=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,b=s;switch(f=t,m=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){p=w.call(m,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,f=typeof w=="function"?w.call(m,p,f):w,f==null)break e;p=Ee({},p,f);break e;case 2:dn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else m={eventTime:m,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=m,u=p):d=d.next=m,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jn|=a,e.lanes=a,e.memoizedState=p}}function Zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Gi={},qt=Tn(Gi),Ii=Tn(Gi),Mi=Tn(Gi);function Bn(e){if(e===Gi)throw Error(H(174));return e}function vu(e,t){switch(be(Mi,t),be(Ii,e),be(qt,Gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ua(t,e)}je(qt),be(qt,t)}function Lr(){je(qt),je(Ii),je(Mi)}function dm(e){Bn(Mi.current);var t=Bn(qt.current),n=Ua(t,e.type);t!==n&&(be(Ii,e),be(qt,n))}function bu(e){Ii.current===e&&(je(qt),je(Ii))}var Ce=Tn(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function ku(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var To=an.ReactCurrentDispatcher,ia=an.ReactCurrentBatchConfig,Gn=0,Ne=null,Re=null,De=null,rl=!1,mi=!1,Ri=0,Ry=0;function Ve(){throw Error(H(321))}function wu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$t(e[n],t[n]))return!1;return!0}function ju(e,t,n,r,i,o){if(Gn=o,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?Fy:By,e=n(r,i),mi){o=0;do{if(mi=!1,Ri=0,25<=o)throw Error(H(301));o+=1,De=Re=null,t.updateQueue=null,To.current=Uy,e=n(r,i)}while(mi)}if(To.current=il,t=Re!==null&&Re.next!==null,Gn=0,De=Re=Ne=null,rl=!1,t)throw Error(H(300));return e}function Su(){var e=Ri!==0;return Ri=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?Ne.memoizedState=De=e:De=De.next=e,De}function Ct(){if(Re===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=De===null?Ne.memoizedState:De.next;if(t!==null)De=t,Re=e;else{if(e===null)throw Error(H(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},De===null?Ne.memoizedState=De=e:De=De.next=e}return De}function Oi(e,t){return typeof t=="function"?t(e):t}function oa(e){var t=Ct(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=Re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,u=null,c=o;do{var d=c.lane;if((Gn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,a=r):u=u.next=p,Ne.lanes|=d,Jn|=d}c=c.next}while(c!==null&&c!==o);u===null?a=r:u.next=s,$t(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ne.lanes|=o,Jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function la(e){var t=Ct(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);$t(o,t.memoizedState)||(rt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pm(){}function fm(e,t){var n=Ne,r=Ct(),i=t(),o=!$t(r.memoizedState,i);if(o&&(r.memoizedState=i,rt=!0),r=r.queue,_u(gm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Di(9,hm.bind(null,n,r,i,t),void 0,null),$e===null)throw Error(H(349));Gn&30||mm(n,t,i)}return i}function mm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hm(e,t,n,r){t.value=n,t.getSnapshot=r,xm(t)&&ym(e)}function gm(e,t,n){return n(function(){xm(t)&&ym(e)})}function xm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$t(e,n)}catch{return!0}}function ym(e){var t=on(e,1);t!==null&&Dt(t,e,1,-1)}function ed(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=$y.bind(null,Ne,e),[t.memoizedState,e]}function Di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vm(){return Ct().memoizedState}function Po(e,t,n,r){var i=Bt();Ne.flags|=e,i.memoizedState=Di(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(Re!==null){var a=Re.memoizedState;if(o=a.destroy,r!==null&&wu(r,a.deps)){i.memoizedState=Di(t,n,o,r);return}}Ne.flags|=e,i.memoizedState=Di(1|t,n,o,r)}function td(e,t){return Po(8390656,8,e,t)}function _u(e,t){return wl(2048,8,e,t)}function bm(e,t){return wl(4,2,e,t)}function km(e,t){return wl(4,4,e,t)}function wm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jm(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,wm.bind(null,t,e),n)}function Cu(){}function Sm(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _m(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cm(e,t,n){return Gn&21?($t(n,t)||(n=Pf(),Ne.lanes|=n,Jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function Oy(e,t){var n=he;he=n!==0&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{he=n,ia.transition=r}}function Nm(){return Ct().memoizedState}function Dy(e,t,n){var r=jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Em(e))zm(t,n);else if(n=um(e,t,n,r),n!==null){var i=Ye();Dt(n,e,r,i),Tm(n,t,r)}}function $y(e,t,n){var r=jn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Em(e))zm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,$t(s,a)){var u=t.interleaved;u===null?(i.next=i,xu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=um(e,t,i,r),n!==null&&(i=Ye(),Dt(n,e,r,i),Tm(n,t,r))}}function Em(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function zm(e,t){mi=rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ru(e,n)}}var il={readContext:_t,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Fy={readContext:_t,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:td,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,wm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Dy.bind(null,Ne,e),[r.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:ed,useDebugValue:Cu,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=ed(!1),t=e[0];return e=Oy.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ne,i=Bt();if(Se){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),$e===null)throw Error(H(349));Gn&30||mm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,td(gm.bind(null,r,o,e),[e]),r.flags|=2048,Di(9,hm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Bt(),t=$e.identifierPrefix;if(Se){var n=en,r=Zt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ry++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},By={readContext:_t,useCallback:Sm,useContext:_t,useEffect:_u,useImperativeHandle:jm,useInsertionEffect:bm,useLayoutEffect:km,useMemo:_m,useReducer:oa,useRef:vm,useState:function(){return oa(Oi)},useDebugValue:Cu,useDeferredValue:function(e){var t=Ct();return Cm(t,Re.memoizedState,e)},useTransition:function(){var e=oa(Oi)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:pm,useSyncExternalStore:fm,useId:Nm,unstable_isNewReconciler:!1},Uy={readContext:_t,useCallback:Sm,useContext:_t,useEffect:_u,useImperativeHandle:jm,useInsertionEffect:bm,useLayoutEffect:km,useMemo:_m,useReducer:la,useRef:vm,useState:function(){return la(Oi)},useDebugValue:Cu,useDeferredValue:function(e){var t=Ct();return Re===null?t.memoizedState=e:Cm(t,Re.memoizedState,e)},useTransition:function(){var e=la(Oi)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:pm,useSyncExternalStore:fm,useId:Nm,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=jn(e),o=tn(r,i);o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(Dt(t,e,i,r),zo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=jn(e),o=tn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(Dt(t,e,i,r),zo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=jn(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=kn(e,i,r),t!==null&&(Dt(t,e,r,n),zo(t,e,r))}};function nd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,r)||!Ti(i,o):!0}function Pm(e,t,n){var r=!1,i=Nn,o=t.contextType;return typeof o=="object"&&o!==null?o=_t(o):(i=ot(t)?Kn:Ke.current,r=t.contextTypes,o=(r=r!=null)?zr(e,i):Nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function rd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function cs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=_t(o):(o=ot(t)?Kn:Ke.current,i.context=zr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(us(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&jl.enqueueReplaceState(i,i.state,null),tl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var n="",r=t;do n+=gx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vy=typeof WeakMap=="function"?WeakMap:Map;function Lm(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ll||(ll=!0,ks=r),ds(e,t)},n}function Am(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ds(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=rv.bind(null,e,t,n),t.then(e,e))}function od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ld(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e)}var Wy=an.ReactCurrentOwner,rt=!1;function Ge(e,t,n,r){t.child=e===null?sm(t,null,n,r):Pr(t,e.child,n,r)}function ad(e,t,n,r,i){n=n.render;var o=t.ref;return Sr(t,i),r=ju(e,t,n,r,o,i),n=Su(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ln(e,t,i)):(Se&&n&&du(t),t.flags|=1,Ge(e,t,r,i),t.child)}function sd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Iu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Im(e,t,o,r,i)):(e=Mo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(a,r)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=Sn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Im(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ti(o,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,ln(e,t,i)}return ps(e,t,n,r,i)}function Mm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(xr,dt),dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(xr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,be(xr,dt),dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,be(xr,dt),dt|=r;return Ge(e,t,i,n),t.child}function Rm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ps(e,t,n,r,i){var o=ot(n)?Kn:Ke.current;return o=zr(t,o),Sr(t,i),n=ju(e,t,n,r,o,i),r=Su(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ln(e,t,i)):(Se&&r&&du(t),t.flags|=1,Ge(e,t,n,i),t.child)}function ud(e,t,n,r,i){if(ot(n)){var o=!0;Jo(t)}else o=!1;if(Sr(t,i),t.stateNode===null)Lo(e,t),Pm(t,n,r),cs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=_t(c):(c=ot(n)?Kn:Ke.current,c=zr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&rd(t,a,r,c),dn=!1;var f=t.memoizedState;a.state=f,tl(t,r,a,i),u=t.memoizedState,s!==r||f!==u||it.current||dn?(typeof d=="function"&&(us(t,n,d,r),u=t.memoizedState),(s=dn||nd(t,n,s,r,f,u,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,cm(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Pt(t.type,s),a.props=c,p=t.pendingProps,f=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=_t(u):(u=ot(n)?Kn:Ke.current,u=zr(t,u));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==u)&&rd(t,a,r,u),dn=!1,f=t.memoizedState,a.state=f,tl(t,r,a,i);var w=t.memoizedState;s!==p||f!==w||it.current||dn?(typeof m=="function"&&(us(t,n,m,r),w=t.memoizedState),(c=dn||nd(t,n,c,r,f,w,u)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return fs(e,t,n,r,o,i)}function fs(e,t,n,r,i,o){Rm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Qc(t,n,!1),ln(e,t,o);r=t.stateNode,Wy.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Pr(t,e.child,null,o),t.child=Pr(t,null,s,o)):Ge(e,t,s,o),t.memoizedState=r.state,i&&Qc(t,n,!0),t.child}function Om(e){var t=e.stateNode;t.pendingContext?Kc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kc(e,t.context,!1),vu(e,t.containerInfo)}function cd(e,t,n,r,i){return Tr(),fu(i),t.flags|=256,Ge(e,t,n,r),t.child}var ms={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dm(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Ce,i&1),e===null)return as(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Cl(a,r,0,null),e=Wn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hs(n),t.memoizedState=ms,e):Nu(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Hy(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Sn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Sn(s,o):(o=Wn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?hs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ms,r}return o=e.child,e=o.sibling,r=Sn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nu(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&fu(r),Pr(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=aa(Error(H(422))),ho(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Cl({mode:"visible",children:r.children},i,0,null),o=Wn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Pr(t,e.child,null,a),t.child.memoizedState=hs(a),t.memoizedState=ms,o);if(!(t.mode&1))return ho(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(H(419)),r=aa(o,r,void 0),ho(e,t,a,r)}if(s=(a&e.childLanes)!==0,rt||s){if(r=$e,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,on(e,i),Dt(r,e,i,-1))}return Au(),r=aa(Error(H(421))),ho(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=iv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=bn(i.nextSibling),ht=t,Se=!0,Mt=null,e!==null&&(bt[kt++]=Zt,bt[kt++]=en,bt[kt++]=Qn,Zt=e.id,en=e.overflow,Qn=t),t=Nu(t,r.children),t.flags|=4096,t)}function dd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ss(e.return,t,n)}function sa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $m(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ge(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,n,t);else if(e.tag===19)dd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&nl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sa(t,!0,n,null,o);break;case"together":sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qy(e,t,n){switch(t.tag){case 3:Om(t),Tr();break;case 5:dm(t);break;case 1:ot(t.type)&&Jo(t);break;case 4:vu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;be(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Dm(e,t,n):(be(Ce,Ce.current&1),e=ln(e,t,n),e!==null?e.sibling:null);be(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $m(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Mm(e,t,n)}return ln(e,t,n)}var Fm,gs,Bm,Um;Fm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gs=function(){};Bm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Bn(qt.current);var o=null;switch(n){case"input":i=Da(e,i),r=Da(e,r),o=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),o=[];break;case"textarea":i=Ba(e,i),r=Ba(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Va(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ji.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ji.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&we("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Um=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ky(e,t,n){var r=t.pendingProps;switch(pu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return ot(t.type)&&Go(),We(t),null;case 3:return r=t.stateNode,Lr(),je(it),je(Ke),ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&(Ss(Mt),Mt=null))),gs(e,t),We(t),null;case 5:bu(t);var i=Bn(Mi.current);if(n=t.type,e!==null&&t.stateNode!=null)Bm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(H(166));return We(t),null}if(e=Bn(qt.current),fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Vt]=t,r[Ai]=o,e=(t.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<ai.length;i++)we(ai[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":bc(r,o),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},we("invalid",r);break;case"textarea":wc(r,o),we("invalid",r)}Va(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&po(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&po(r.textContent,s,e),i=["children",""+s]):ji.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&we("scroll",r)}switch(n){case"input":ro(r),kc(r,o,!0);break;case"textarea":ro(r),jc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Vt]=t,e[Ai]=r,Fm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Wa(n,r),n){case"dialog":we("cancel",e),we("close",e),i=r;break;case"iframe":case"object":case"embed":we("load",e),i=r;break;case"video":case"audio":for(i=0;i<ai.length;i++)we(ai[i],e);i=r;break;case"source":we("error",e),i=r;break;case"img":case"image":case"link":we("error",e),we("load",e),i=r;break;case"details":we("toggle",e),i=r;break;case"input":bc(e,r),i=Da(e,r),we("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),we("invalid",e);break;case"textarea":wc(e,r),i=Ba(e,r),we("invalid",e);break;default:i=r}Va(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?vf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Si(e,u):typeof u=="number"&&Si(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ji.hasOwnProperty(o)?u!=null&&o==="onScroll"&&we("scroll",e):u!=null&&Ys(e,o,u,a))}switch(n){case"input":ro(e),kc(e,r,!1);break;case"textarea":ro(e),jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?br(e,!!r.multiple,o,!1):r.defaultValue!=null&&br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Um(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(H(166));if(n=Bn(Mi.current),Bn(qt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return We(t),null;case 13:if(je(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&ft!==null&&t.mode&1&&!(t.flags&128))lm(),Tr(),t.flags|=98560,o=!1;else if(o=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(H(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[Vt]=t}else Tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else Mt!==null&&(Ss(Mt),Mt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Oe===0&&(Oe=3):Au())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Lr(),gs(e,t),e===null&&Pi(t.stateNode.containerInfo),We(t),null;case 10:return gu(t.type._context),We(t),null;case 17:return ot(t.type)&&Go(),We(t),null;case 19:if(je(Ce),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Xr(o,!1);else{if(Oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=nl(e),a!==null){for(t.flags|=128,Xr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pe()>Ir&&(t.flags|=128,r=!0,Xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=nl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Se)return We(t),null}else 2*Pe()-o.renderingStartTime>Ir&&n!==1073741824&&(t.flags|=128,r=!0,Xr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pe(),t.sibling=null,n=Ce.current,be(Ce,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Lu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function Qy(e,t){switch(pu(t),t.tag){case 1:return ot(t.type)&&Go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),je(it),je(Ke),ku(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bu(t),null;case 13:if(je(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ce),null;case 4:return Lr(),null;case 10:return gu(t.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var go=!1,He=!1,Gy=typeof WeakSet=="function"?WeakSet:Set,G=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function xs(e,t,n){try{n()}catch(r){ze(e,t,r)}}var pd=!1;function Jy(e,t){if(es=Ho,e=Kf(),cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++c===i&&(s=a),f===o&&++d===r&&(u=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ts={focusedElem:e,selectionRange:n},Ho=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,E=w.memoizedState,h=t.stateNode,x=h.getSnapshotBeforeUpdate(t.elementType===t.type?b:Pt(t.type,b),E);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(T){ze(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return w=pd,pd=!1,w}function hi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xs(t,n,o)}i=i.next}while(i!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ys(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vm(e){var t=e.alternate;t!==null&&(e.alternate=null,Vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[Ai],delete t[is],delete t[Ly],delete t[Ay])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wm(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}var Fe=null,Lt=!1;function sn(e,t,n){for(n=n.child;n!==null;)Hm(e,t,n),n=n.sibling}function Hm(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:He||gr(n,t);case 6:var r=Fe,i=Lt;Fe=null,sn(e,t,n),Fe=r,Lt=i,Fe!==null&&(Lt?(e=Fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Lt?(e=Fe,n=n.stateNode,e.nodeType===8?ta(e.parentNode,n):e.nodeType===1&&ta(e,n),Ei(e)):ta(Fe,n.stateNode));break;case 4:r=Fe,i=Lt,Fe=n.stateNode.containerInfo,Lt=!0,sn(e,t,n),Fe=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&xs(n,t,a),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!He&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ze(n,t,s)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,sn(e,t,n),He=r):sn(e,t,n);break;default:sn(e,t,n)}}function md(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gy),t.forEach(function(r){var i=ov.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Fe=s.stateNode,Lt=!1;break e;case 3:Fe=s.stateNode.containerInfo,Lt=!0;break e;case 4:Fe=s.stateNode.containerInfo,Lt=!0;break e}s=s.return}if(Fe===null)throw Error(H(160));Hm(o,a,i),Fe=null,Lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ze(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qm(t,e),t=t.sibling}function qm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tt(t,e),Ft(e),r&4){try{hi(3,e,e.return),Sl(3,e)}catch(b){ze(e,e.return,b)}try{hi(5,e,e.return)}catch(b){ze(e,e.return,b)}}break;case 1:Tt(t,e),Ft(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(Tt(t,e),Ft(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(b){ze(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&mf(i,o),Wa(s,a);var c=Wa(s,o);for(a=0;a<u.length;a+=2){var d=u[a],p=u[a+1];d==="style"?vf(i,p):d==="dangerouslySetInnerHTML"?xf(i,p):d==="children"?Si(i,p):Ys(i,d,p,c)}switch(s){case"input":$a(i,o);break;case"textarea":hf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?br(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?br(i,!!o.multiple,o.defaultValue,!0):br(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ai]=o}catch(b){ze(e,e.return,b)}}break;case 6:if(Tt(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(H(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){ze(e,e.return,b)}}break;case 3:if(Tt(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(b){ze(e,e.return,b)}break;case 4:Tt(t,e),Ft(e);break;case 13:Tt(t,e),Ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tu=Pe())),r&4&&md(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(He=(c=He)||d,Tt(t,e),He=c):Tt(t,e),Ft(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(p=G=d;G!==null;){switch(f=G,m=f.child,f.tag){case 0:case 11:case 14:case 15:hi(4,f,f.return);break;case 1:gr(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){ze(r,n,b)}}break;case 5:gr(f,f.return);break;case 22:if(f.memoizedState!==null){gd(p);continue}}m!==null?(m.return=f,G=m):gd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=yf("display",a))}catch(b){ze(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(b){ze(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Tt(t,e),Ft(e),r&4&&md(e);break;case 21:break;default:Tt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wm(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var o=fd(e);bs(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=fd(e);vs(e,s,a);break;default:throw Error(H(161))}}catch(u){ze(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Yy(e,t,n){G=e,Km(e)}function Km(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||go;if(!a){var s=i.alternate,u=s!==null&&s.memoizedState!==null||He;s=go;var c=He;if(go=a,(He=u)&&!c)for(G=i;G!==null;)a=G,u=a.child,a.tag===22&&a.memoizedState!==null?xd(i):u!==null?(u.return=a,G=u):xd(i);for(;o!==null;)G=o,Km(o),o=o.sibling;G=i,go=s,He=c}hd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):hd(e)}}function hd(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zc(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ei(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}He||t.flags&512&&ys(t)}catch(f){ze(t,t.return,f)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function gd(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function xd(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(u){ze(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ze(t,i,u)}}var o=t.return;try{ys(t)}catch(u){ze(t,o,u)}break;case 5:var a=t.return;try{ys(t)}catch(u){ze(t,a,u)}}}catch(u){ze(t,t.return,u)}if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}var Xy=Math.ceil,ol=an.ReactCurrentDispatcher,Eu=an.ReactCurrentOwner,St=an.ReactCurrentBatchConfig,pe=0,$e=null,Ae=null,Be=0,dt=0,xr=Tn(0),Oe=0,$i=null,Jn=0,_l=0,zu=0,gi=null,nt=null,Tu=0,Ir=1/0,Yt=null,ll=!1,ks=null,wn=null,xo=!1,hn=null,al=0,xi=0,ws=null,Ao=-1,Io=0;function Ye(){return pe&6?Pe():Ao!==-1?Ao:Ao=Pe()}function jn(e){return e.mode&1?pe&2&&Be!==0?Be&-Be:My.transition!==null?(Io===0&&(Io=Pf()),Io):(e=he,e!==0||(e=window.event,e=e===void 0?16:Df(e.type)),e):1}function Dt(e,t,n,r){if(50<xi)throw xi=0,ws=null,Error(H(185));qi(e,n,r),(!(pe&2)||e!==$e)&&(e===$e&&(!(pe&2)&&(_l|=n),Oe===4&&fn(e,Be)),lt(e,r),n===1&&pe===0&&!(t.mode&1)&&(Ir=Pe()+500,kl&&Pn()))}function lt(e,t){var n=e.callbackNode;Mx(e,t);var r=Wo(e,e===$e?Be:0);if(r===0)n!==null&&Cc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cc(n),t===1)e.tag===0?Iy(yd.bind(null,e)):rm(yd.bind(null,e)),Ty(function(){!(pe&6)&&Pn()}),n=null;else{switch(Lf(r)){case 1:n=nu;break;case 4:n=zf;break;case 16:n=Vo;break;case 536870912:n=Tf;break;default:n=Vo}n=th(n,Qm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qm(e,t){if(Ao=-1,Io=0,pe&6)throw Error(H(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=Wo(e,e===$e?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var i=pe;pe|=2;var o=Jm();($e!==e||Be!==t)&&(Yt=null,Ir=Pe()+500,Vn(e,t));do try{tv();break}catch(s){Gm(e,s)}while(!0);hu(),ol.current=o,pe=i,Ae!==null?t=0:($e=null,Be=0,t=Oe)}if(t!==0){if(t===2&&(i=Ga(e),i!==0&&(r=i,t=js(e,i))),t===1)throw n=$i,Vn(e,0),fn(e,r),lt(e,Pe()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Zy(i)&&(t=sl(e,r),t===2&&(o=Ga(e),o!==0&&(r=o,t=js(e,o))),t===1))throw n=$i,Vn(e,0),fn(e,r),lt(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(H(345));case 2:On(e,nt,Yt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=Tu+500-Pe(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rs(On.bind(null,e,nt,Yt),t);break}On(e,nt,Yt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ot(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xy(r/1960))-r,10<r){e.timeoutHandle=rs(On.bind(null,e,nt,Yt),r);break}On(e,nt,Yt);break;case 5:On(e,nt,Yt);break;default:throw Error(H(329))}}}return lt(e,Pe()),e.callbackNode===n?Qm.bind(null,e):null}function js(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=sl(e,t),e!==2&&(t=nt,nt=n,t!==null&&Ss(t)),e}function Ss(e){nt===null?nt=e:nt.push.apply(nt,e)}function Zy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!$t(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~zu,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function yd(e){if(pe&6)throw Error(H(327));_r();var t=Wo(e,0);if(!(t&1))return lt(e,Pe()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=Ga(e);r!==0&&(t=r,n=js(e,r))}if(n===1)throw n=$i,Vn(e,0),fn(e,t),lt(e,Pe()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,nt,Yt),lt(e,Pe()),null}function Pu(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Ir=Pe()+500,kl&&Pn())}}function Yn(e){hn!==null&&hn.tag===0&&!(pe&6)&&_r();var t=pe;pe|=1;var n=St.transition,r=he;try{if(St.transition=null,he=1,e)return e()}finally{he=r,St.transition=n,pe=t,!(pe&6)&&Pn()}}function Lu(){dt=xr.current,je(xr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zy(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(pu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:Lr(),je(it),je(Ke),ku();break;case 5:bu(r);break;case 4:Lr();break;case 13:je(Ce);break;case 19:je(Ce);break;case 10:gu(r.type._context);break;case 22:case 23:Lu()}n=n.return}if($e=e,Ae=e=Sn(e.current,null),Be=dt=t,Oe=0,$i=null,zu=_l=Jn=0,nt=gi=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Fn=null}return e}function Gm(e,t){do{var n=Ae;try{if(hu(),To.current=il,rl){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(Gn=0,De=Re=Ne=null,mi=!1,Ri=0,Eu.current=null,n===null||n.return===null){Oe=1,$i=t,Ae=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=Be,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=od(a);if(m!==null){m.flags&=-257,ld(m,a,s,o,t),m.mode&1&&id(o,c,t),t=m,u=c;var w=t.updateQueue;if(w===null){var b=new Set;b.add(u),t.updateQueue=b}else w.add(u);break e}else{if(!(t&1)){id(o,c,t),Au();break e}u=Error(H(426))}}else if(Se&&s.mode&1){var E=od(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ld(E,a,s,o,t),fu(Ar(u,s));break e}}o=u=Ar(u,s),Oe!==4&&(Oe=2),gi===null?gi=[o]:gi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Lm(o,u,t);Xc(o,h);break e;case 1:s=u;var x=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wn===null||!wn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var T=Am(o,s,t);Xc(o,T);break e}}o=o.return}while(o!==null)}Xm(n)}catch(_){t=_,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function Jm(){var e=ol.current;return ol.current=il,e===null?il:e}function Au(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),$e===null||!(Jn&268435455)&&!(_l&268435455)||fn($e,Be)}function sl(e,t){var n=pe;pe|=2;var r=Jm();($e!==e||Be!==t)&&(Yt=null,Vn(e,t));do try{ev();break}catch(i){Gm(e,i)}while(!0);if(hu(),pe=n,ol.current=r,Ae!==null)throw Error(H(261));return $e=null,Be=0,Oe}function ev(){for(;Ae!==null;)Ym(Ae)}function tv(){for(;Ae!==null&&!Cx();)Ym(Ae)}function Ym(e){var t=eh(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Xm(e):Ae=t,Eu.current=null}function Xm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Qy(n,t),n!==null){n.flags&=32767,Ae=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Ae=null;return}}else if(n=Ky(n,t,dt),n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Oe===0&&(Oe=5)}function On(e,t,n){var r=he,i=St.transition;try{St.transition=null,he=1,nv(e,t,n,r)}finally{St.transition=i,he=r}return null}function nv(e,t,n,r){do _r();while(hn!==null);if(pe&6)throw Error(H(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Rx(e,o),e===$e&&(Ae=$e=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,th(Vo,function(){return _r(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=St.transition,St.transition=null;var a=he;he=1;var s=pe;pe|=4,Eu.current=null,Jy(e,n),qm(n,e),wy(ts),Ho=!!es,ts=es=null,e.current=n,Yy(n),Nx(),pe=s,he=a,St.transition=o}else e.current=n;if(xo&&(xo=!1,hn=e,al=i),o=e.pendingLanes,o===0&&(wn=null),Tx(n.stateNode),lt(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ll)throw ll=!1,e=ks,ks=null,e;return al&1&&e.tag!==0&&_r(),o=e.pendingLanes,o&1?e===ws?xi++:(xi=0,ws=e):xi=0,Pn(),null}function _r(){if(hn!==null){var e=Lf(al),t=St.transition,n=he;try{if(St.transition=null,he=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,al=0,pe&6)throw Error(H(331));var i=pe;for(pe|=4,G=e.current;G!==null;){var o=G,a=o.child;if(G.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:hi(8,d,o)}var p=d.child;if(p!==null)p.return=d,G=p;else for(;G!==null;){d=G;var f=d.sibling,m=d.return;if(Vm(d),d===c){G=null;break}if(f!==null){f.return=m,G=f;break}G=m}}}var w=o.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var E=b.sibling;b.sibling=null,b=E}while(b!==null)}}G=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,G=a;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,G=h;break e}G=o.return}}var x=e.current;for(G=x;G!==null;){a=G;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,G=g;else e:for(a=x;G!==null;){if(s=G,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(_){ze(s,s.return,_)}if(s===a){G=null;break e}var T=s.sibling;if(T!==null){T.return=s.return,G=T;break e}G=s.return}}if(pe=i,Pn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(gl,e)}catch{}r=!0}return r}finally{he=n,St.transition=t}}return!1}function vd(e,t,n){t=Ar(n,t),t=Lm(e,t,1),e=kn(e,t,1),t=Ye(),e!==null&&(qi(e,1,t),lt(e,t))}function ze(e,t,n){if(e.tag===3)vd(e,e,n);else for(;t!==null;){if(t.tag===3){vd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=Ar(n,e),e=Am(t,e,1),t=kn(t,e,1),e=Ye(),t!==null&&(qi(t,1,e),lt(t,e));break}}t=t.return}}function rv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Be&n)===n&&(Oe===4||Oe===3&&(Be&130023424)===Be&&500>Pe()-Tu?Vn(e,0):zu|=n),lt(e,t)}function Zm(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=Ye();e=on(e,t),e!==null&&(qi(e,t,n),lt(e,n))}function iv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zm(e,n)}function ov(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(t),Zm(e,n)}var eh;eh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,qy(e,t,n);rt=!!(e.flags&131072)}else rt=!1,Se&&t.flags&1048576&&im(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lo(e,t),e=t.pendingProps;var i=zr(t,Ke.current);Sr(t,n),i=ju(null,t,r,e,i,n);var o=Su();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(o=!0,Jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yu(t),i.updater=jl,t.stateNode=i,i._reactInternals=t,cs(t,r,e,n),t=fs(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&du(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=av(r),e=Pt(r,e),i){case 0:t=ps(null,t,r,e,n);break e;case 1:t=ud(null,t,r,e,n);break e;case 11:t=ad(null,t,r,e,n);break e;case 14:t=sd(null,t,r,Pt(r.type,e),n);break e}throw Error(H(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),ps(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),ud(e,t,r,i,n);case 3:e:{if(Om(t),e===null)throw Error(H(387));r=t.pendingProps,o=t.memoizedState,i=o.element,cm(e,t),tl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ar(Error(H(423)),t),t=cd(e,t,r,n,i);break e}else if(r!==i){i=Ar(Error(H(424)),t),t=cd(e,t,r,n,i);break e}else for(ft=bn(t.stateNode.containerInfo.firstChild),ht=t,Se=!0,Mt=null,n=sm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===i){t=ln(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return dm(t),e===null&&as(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ns(r,i)?a=null:o!==null&&ns(r,o)&&(t.flags|=32),Rm(e,t),Ge(e,t,a,n),t.child;case 6:return e===null&&as(t),null;case 13:return Dm(e,t,n);case 4:return vu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),ad(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,be(Zo,r._currentValue),r._currentValue=a,o!==null)if($t(o.value,a)){if(o.children===i.children&&!it.current){t=ln(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=tn(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ss(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(H(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ss(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sr(t,n),i=_t(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=Pt(r,t.pendingProps),i=Pt(r.type,i),sd(e,t,r,i,n);case 15:return Im(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Lo(e,t),t.tag=1,ot(r)?(e=!0,Jo(t)):e=!1,Sr(t,n),Pm(t,r,i),cs(t,r,i,n),fs(null,t,r,!0,e,n);case 19:return $m(e,t,n);case 22:return Mm(e,t,n)}throw Error(H(156,t.tag))};function th(e,t){return Ef(e,t)}function lv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new lv(e,t,n,r)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function av(e){if(typeof e=="function")return Iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zs)return 11;if(e===eu)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Iu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ar:return Wn(n.children,i,o,t);case Xs:a=8,i|=8;break;case Ia:return e=jt(12,n,t,i|2),e.elementType=Ia,e.lanes=o,e;case Ma:return e=jt(13,n,t,i),e.elementType=Ma,e.lanes=o,e;case Ra:return e=jt(19,n,t,i),e.elementType=Ra,e.lanes=o,e;case df:return Cl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uf:a=10;break e;case cf:a=9;break e;case Zs:a=11;break e;case eu:a=14;break e;case cn:a=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=jt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Wn(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=jt(22,e,r,t),e.elementType=df,e.lanes=n,e.stateNode={isHidden:!1},e}function ua(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function ca(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mu(e,t,n,r,i,o,a,s,u){return e=new sv(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(o),e}function uv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nh(e){if(!e)return Nn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(ot(n))return nm(e,n,t)}return t}function rh(e,t,n,r,i,o,a,s,u){return e=Mu(n,r,!0,e,i,o,a,s,u),e.context=nh(null),n=e.current,r=Ye(),i=jn(n),o=tn(r,i),o.callback=t??null,kn(n,o,i),e.current.lanes=i,qi(e,i,r),lt(e,r),e}function Nl(e,t,n,r){var i=t.current,o=Ye(),a=jn(i);return n=nh(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(i,t,a),e!==null&&(Dt(e,i,a,o),zo(e,i,a)),a}function ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ru(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function cv(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}El.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));Nl(e,t,null,null)};El.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yn(function(){Nl(null,e,null,null)}),t[rn]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&Of(e)}};function Du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kd(){}function dv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ul(a);o.call(c)}}var a=rh(t,r,e,0,null,!1,!1,"",kd);return e._reactRootContainer=a,e[rn]=a.current,Pi(e.nodeType===8?e.parentNode:e),Yn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ul(u);s.call(c)}}var u=Mu(e,0,!1,null,null,!1,!1,"",kd);return e._reactRootContainer=u,e[rn]=u.current,Pi(e.nodeType===8?e.parentNode:e),Yn(function(){Nl(t,u,n,r)}),u}function Tl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var u=ul(a);s.call(u)}}Nl(t,a,e,i)}else a=dv(n,t,e,i,r);return ul(a)}Af=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=li(t.pendingLanes);n!==0&&(ru(t,n|1),lt(t,Pe()),!(pe&6)&&(Ir=Pe()+500,Pn()))}break;case 13:Yn(function(){var r=on(e,1);if(r!==null){var i=Ye();Dt(r,e,1,i)}}),Ru(e,1)}};iu=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=Ye();Dt(t,e,134217728,n)}Ru(e,134217728)}};If=function(e){if(e.tag===13){var t=jn(e),n=on(e,t);if(n!==null){var r=Ye();Dt(n,e,t,r)}Ru(e,t)}};Mf=function(){return he};Rf=function(e,t){var n=he;try{return he=e,t()}finally{he=n}};qa=function(e,t,n){switch(t){case"input":if($a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bl(r);if(!i)throw Error(H(90));ff(r),$a(r,i)}}}break;case"textarea":hf(e,n);break;case"select":t=n.value,t!=null&&br(e,!!n.multiple,t,!1)}};wf=Pu;jf=Yn;var pv={usingClientEntryPoint:!1,Events:[Qi,dr,bl,bf,kf,Pu]},Zr={findFiberByHostInstance:$n,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fv={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cf(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{gl=yo.inject(fv),Ht=yo}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pv;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(t))throw Error(H(200));return uv(e,t,null,n)};xt.createRoot=function(e,t){if(!Du(e))throw Error(H(299));var n=!1,r="",i=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mu(e,1,!1,null,null,n,!1,r,i),e[rn]=t.current,Pi(e.nodeType===8?e.parentNode:e),new Ou(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=Cf(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return Yn(e)};xt.hydrate=function(e,t,n){if(!zl(t))throw Error(H(200));return Tl(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!Du(e))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rh(t,null,e,1,n??null,i,!1,o,a),e[rn]=t.current,Pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new El(t)};xt.render=function(e,t,n){if(!zl(t))throw Error(H(200));return Tl(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!zl(e))throw Error(H(40));return e._reactRootContainer?(Yn(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};xt.unstable_batchedUpdates=Pu;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Tl(e,t,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function oh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oh)}catch(e){console.error(e)}}oh(),of.exports=xt;var mv=of.exports,wd=mv;La.createRoot=wd.createRoot,La.hydrateRoot=wd.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(this,arguments)}var gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gn||(gn={}));const jd="popstate";function hv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return _s("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:lh(i)}return xv(t,n,null,e)}function Ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $u(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gv(){return Math.random().toString(36).substr(2,8)}function Sd(e,t){return{usr:e.state,key:e.key,idx:t}}function _s(e,t,n,r){return n===void 0&&(n=null),Fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||r||gv()})}function lh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function xv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=gn.Pop,u=null,c=d();c==null&&(c=0,a.replaceState(Fi({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=gn.Pop;let E=d(),h=E==null?null:E-c;c=E,u&&u({action:s,location:b.location,delta:h})}function f(E,h){s=gn.Push;let x=_s(b.location,E,h);c=d()+1;let g=Sd(x,c),T=b.createHref(x);try{a.pushState(g,"",T)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;i.location.assign(T)}o&&u&&u({action:s,location:b.location,delta:1})}function m(E,h){s=gn.Replace;let x=_s(b.location,E,h);c=d();let g=Sd(x,c),T=b.createHref(x);a.replaceState(g,"",T),o&&u&&u({action:s,location:b.location,delta:0})}function w(E){let h=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof E=="string"?E:lh(E);return x=x.replace(/ $/,"%20"),Ie(h,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,h)}let b={get action(){return s},get location(){return e(i,a)},listen(E){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(jd,p),u=E,()=>{i.removeEventListener(jd,p),u=null}},createHref(E){return t(i,E)},createURL:w,encodeLocation(E){let h=w(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:m,go(E){return a.go(E)}};return b}var _d;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_d||(_d={}));function yv(e,t,n){return n===void 0&&(n="/"),vv(e,t,n)}function vv(e,t,n,r){let i=typeof t=="string"?Br(t):t,o=uh(i.pathname||"/",n);if(o==null)return null;let a=ah(e);bv(a);let s=null;for(let u=0;s==null&&u<a.length;++u){let c=Lv(o);s=zv(a[u],c)}return s}function ah(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(Ie(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Hn([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(Ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ah(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Nv(c,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let u of sh(o.path))i(o,a,u)}),t}function sh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=sh(r.join("/")),s=[];return s.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function bv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ev(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kv=/^:[\w-]+$/,wv=3,jv=2,Sv=1,_v=10,Cv=-2,Cd=e=>e==="*";function Nv(e,t){let n=e.split("/"),r=n.length;return n.some(Cd)&&(r+=Cv),t&&(r+=jv),n.filter(i=>!Cd(i)).reduce((i,o)=>i+(kv.test(o)?wv:o===""?Sv:_v),r)}function Ev(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function zv(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Tv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),f=u.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Hn([o,p.pathname]),pathnameBase:Ov(Hn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=Hn([o,p.pathnameBase]))}return a}function Tv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Pv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let b=s[p]||"";a=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const w=s[p];return m&&!w?c[f]=void 0:c[f]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:e}}function Pv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$u(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Lv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function uh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Av=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Iv=e=>Av.test(e);function Mv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Br(e):e,o;if(n)if(Iv(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),$u(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Nd(n.substring(1),"/"):o=Nd(n,t)}else o=t;return{pathname:o,search:Dv(r),hash:$v(i)}}function Nd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function da(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ch(e,t){let n=Rv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function dh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Br(e):(i=Fi({},e),Ie(!i.pathname||!i.pathname.includes("?"),da("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),da("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),da("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?t[p]:"/"}let u=Mv(i,s),c=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Hn=e=>e.join("/").replace(/\/\/+/g,"/"),Ov=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$v=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ph=["post","put","patch","delete"];new Set(ph);const Bv=["get",...ph];new Set(Bv);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}const Fu=N.createContext(null),Uv=N.createContext(null),Ji=N.createContext(null),Pl=N.createContext(null),Ln=N.createContext({outlet:null,matches:[],isDataRoute:!1}),fh=N.createContext(null);function Yi(){return N.useContext(Pl)!=null}function Bu(){return Yi()||Ie(!1),N.useContext(Pl).location}function mh(e){N.useContext(Ji).static||N.useLayoutEffect(e)}function Uu(){let{isDataRoute:e}=N.useContext(Ln);return e?n1():Vv()}function Vv(){Yi()||Ie(!1);let e=N.useContext(Fu),{basename:t,future:n,navigator:r}=N.useContext(Ji),{matches:i}=N.useContext(Ln),{pathname:o}=Bu(),a=JSON.stringify(ch(i,n.v7_relativeSplatPath)),s=N.useRef(!1);return mh(()=>{s.current=!0}),N.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let p=dh(c,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Hn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function Wv(){let{matches:e}=N.useContext(Ln),t=e[e.length-1];return t?t.params:{}}function Hv(e,t){return qv(e,t)}function qv(e,t,n,r){Yi()||Ie(!1);let{navigator:i}=N.useContext(Ji),{matches:o}=N.useContext(Ln),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=Bu(),d;if(t){var p;let E=typeof t=="string"?Br(t):t;u==="/"||(p=E.pathname)!=null&&p.startsWith(u)||Ie(!1),d=E}else d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let E=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let w=yv(e,{pathname:m}),b=Yv(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},s,E.params),pathname:Hn([u,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?u:Hn([u,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&b?N.createElement(Pl.Provider,{value:{location:Bi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gn.Pop}},b):b}function Kv(){let e=t1(),t=Fv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,null)}const Qv=N.createElement(Kv,null);class Gv extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(Ln.Provider,{value:this.props.routeContext},N.createElement(fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jv(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(Fu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Ln.Provider,{value:t},r)}function Yv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||Ie(!1),a=a.slice(0,Math.min(a.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:f,errors:m}=n,w=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||w){u=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,w=!1,b=null,E=null;n&&(m=s&&p.route.id?s[p.route.id]:void 0,b=p.route.errorElement||Qv,u&&(c<0&&f===0?(r1("route-fallback"),w=!0,E=null):c===f&&(w=!0,E=p.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,f+1)),x=()=>{let g;return m?g=b:w?g=E:p.route.Component?g=N.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,N.createElement(Jv,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?N.createElement(Gv,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var hh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hh||{}),gh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gh||{});function Xv(e){let t=N.useContext(Fu);return t||Ie(!1),t}function Zv(e){let t=N.useContext(Uv);return t||Ie(!1),t}function e1(e){let t=N.useContext(Ln);return t||Ie(!1),t}function xh(e){let t=e1(),n=t.matches[t.matches.length-1];return n.route.id||Ie(!1),n.route.id}function t1(){var e;let t=N.useContext(fh),n=Zv(),r=xh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function n1(){let{router:e}=Xv(hh.UseNavigateStable),t=xh(gh.UseNavigateStable),n=N.useRef(!1);return mh(()=>{n.current=!0}),N.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Bi({fromRouteId:t},o)))},[e,t])}const Ed={};function r1(e,t,n){Ed[e]||(Ed[e]=!0)}function i1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function o1(e){let{to:t,replace:n,state:r,relative:i}=e;Yi()||Ie(!1);let{future:o,static:a}=N.useContext(Ji),{matches:s}=N.useContext(Ln),{pathname:u}=Bu(),c=Uu(),d=dh(t,ch(s,o.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return N.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function or(e){Ie(!1)}function l1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=gn.Pop,navigator:o,static:a=!1,future:s}=e;Yi()&&Ie(!1);let u=t.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:u,navigator:o,static:a,future:Bi({v7_relativeSplatPath:!1},s)}),[u,s,o,a]);typeof r=="string"&&(r=Br(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:w="default"}=r,b=N.useMemo(()=>{let E=uh(d,u);return E==null?null:{location:{pathname:E,search:p,hash:f,state:m,key:w},navigationType:i}},[u,d,p,f,m,w,i]);return b==null?null:N.createElement(Ji.Provider,{value:c},N.createElement(Pl.Provider,{children:n,value:b}))}function a1(e){let{children:t,location:n}=e;return Hv(Cs(t),n)}new Promise(()=>{});function Cs(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let o=[...t,i];if(r.type===N.Fragment){n.push.apply(n,Cs(r.props.children,o));return}r.type!==or&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Cs(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const s1="6";try{window.__reactRouterVersion=s1}catch{}const u1="startTransition",zd=rx[u1];function c1(e){let{basename:t,children:n,future:r,window:i}=e,o=N.useRef();o.current==null&&(o.current=hv({window:i,v5Compat:!0}));let a=o.current,[s,u]=N.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},d=N.useCallback(p=>{c&&zd?zd(()=>u(p)):u(p)},[u,c]);return N.useLayoutEffect(()=>a.listen(d),[a,d]),N.useEffect(()=>i1(r),[r]),N.createElement(l1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}var Td;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Td||(Td={}));var Pd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pd||(Pd={}));const d1={},Ld=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(w=>w(t,m))}},i=()=>t,u={setState:r,getState:i,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(d1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,i,u);return u},p1=e=>e?Ld(e):Ld;var yh={exports:{}},vh={},bh={exports:{}},kh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=N;function f1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var m1=typeof Object.is=="function"?Object.is:f1,h1=Mr.useState,g1=Mr.useEffect,x1=Mr.useLayoutEffect,y1=Mr.useDebugValue;function v1(e,t){var n=t(),r=h1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return x1(function(){i.value=n,i.getSnapshot=t,pa(i)&&o({inst:i})},[e,n,t]),g1(function(){return pa(i)&&o({inst:i}),e(function(){pa(i)&&o({inst:i})})},[e]),y1(n),n}function pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!m1(e,n)}catch{return!0}}function b1(e,t){return t()}var k1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?b1:v1;kh.useSyncExternalStore=Mr.useSyncExternalStore!==void 0?Mr.useSyncExternalStore:k1;bh.exports=kh;var w1=bh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=N,j1=w1;function S1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _1=typeof Object.is=="function"?Object.is:S1,C1=j1.useSyncExternalStore,N1=Ll.useRef,E1=Ll.useEffect,z1=Ll.useMemo,T1=Ll.useDebugValue;vh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=N1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=z1(function(){function u(m){if(!c){if(c=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var w=a.value;if(i(w,m))return p=w}return p=m}if(w=p,_1(d,m))return w;var b=r(m);return i!==void 0&&i(w,b)?(d=m,w):(d=m,p=b)}var c=!1,d,p,f=n===void 0?null:n;return[function(){return u(t())},f===null?void 0:function(){return u(f())}]},[t,n,r,i]);var s=C1(e,o[0],o[1]);return E1(function(){a.hasValue=!0,a.value=s},[s]),T1(s),s};yh.exports=vh;var P1=yh.exports;const L1=ml(P1),wh={},{useDebugValue:A1}=Rt,{useSyncExternalStoreWithSelector:I1}=L1;let Ad=!1;const M1=e=>e;function R1(e,t=M1,n){(wh?"production":void 0)!=="production"&&n&&!Ad&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ad=!0);const r=I1(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return A1(r),r}const Id=e=>{(wh?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?p1(e):e,n=(r,i)=>R1(t,r,i);return Object.assign(n,t),n},O1=e=>e?Id(e):Id,Nt=O1((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(s=>s.id===n?{...s,...r}:s);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const s=o.map(({id:u,serverName:c,toolName:d,args:p,transform:f})=>({id:u,serverName:c,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:s},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:s,serverName:u,toolName:c,args:d,transform:p})=>({id:s,serverName:u,toolName:c,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:s,serverName:u,toolName:c,args:d,transform:p})=>({id:s,serverName:u,toolName:c,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),D1="/api";async function Te(e,t){const n=await fetch(`${D1}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function jh(){return(await Te("/projects")).projects}async function Sh(e){return(await Te(`/projects/${e}`)).project}async function _h(e,t=""){return(await Te("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Ns(e,t){return(await Te(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Ch(e){await Te(`/projects/${e}`,{method:"DELETE"})}async function Nh(e){return Te(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Es(e){return(await Te(`/projects/${e}/sessions`)).sessions}async function Eh(e,t){return(await Te(`/projects/${e}/sessions/${t}/load`)).session}async function zh(e){return(await Te(`/projects/${e}/yaml`)).yaml}async function Th(e,t){return(await Te(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Vu(){return(await Te("/mcp-servers")).servers}async function Ph(){return(await Te("/builtin-tools")).tools}function Lh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Ro(e,t,n,r){return await Te(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Ah(e,t){return await Te(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Ih(e,t,n,r=[],i){return await Te(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Mh(e,t,n,r,i=[],o){return await Te(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function Rh(e){return await Te("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}const $1=Object.freeze(Object.defineProperty({__proto__:null,createProject:_h,createRunWebSocket:Lh,deleteProject:Ch,fetchJSON:Te,generateAgentConfig:Ah,generateCallbackCode:Mh,generatePrompt:Ro,generateToolCode:Ih,getBuiltinTools:Ph,getMcpServers:Vu,getProject:Sh,getProjectYaml:zh,listProjectSessions:Es,listProjects:jh,loadSession:Eh,saveSessionToMemory:Nh,testMcpServer:Rh,updateProject:Ns,updateProjectFromYaml:Th},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),J=(e,t)=>{const n=N.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:s="",children:u,...c},d)=>N.createElement("svg",{ref:d,...F1,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${B1(e)}`,s].join(" "),...c},[...t.map(([p,f])=>N.createElement(p,f)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=J("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=J("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=J("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=J("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=J("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=J("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=J("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=J("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=J("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=J("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=J("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=J("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=J("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=J("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=J("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=J("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=J("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=J("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=J("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=J("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=J("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=J("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=J("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=J("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=J("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=J("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=J("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=J("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=J("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=J("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=J("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=J("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=J("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=J("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=J("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=J("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=J("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=J("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=J("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=J("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=J("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=J("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=J("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=J("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=J("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=J("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=J("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=J("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=J("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=J("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=J("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function r0(){const e=Uu(),[t,n]=N.useState([]),[r,i]=N.useState(!0),[o,a]=N.useState(!1),[s,u]=N.useState("");N.useEffect(()=>{c()},[]);async function c(){try{const f=await jh();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(s.trim())try{const f=await _h(s.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Ch(f),n(t.filter(w=>w.id!==f))}catch(w){console.error("Failed to delete project:",w)}}return l.jsxs("div",{className:"project-list",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("header",{className:"header",children:[l.jsxs("div",{className:"logo",children:[l.jsx(Qu,{size:40,className:"logo-icon"}),l.jsx("h1",{className:"title",children:"ADK Playground"})]}),l.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),l.jsxs("div",{className:"content",children:[o?l.jsxs("div",{className:"create-form",children:[l.jsx("input",{type:"text",placeholder:"Project name...",value:s,onChange:f=>u(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),l.jsxs("button",{className:"btn btn-primary",onClick:d,children:[l.jsx(qe,{size:18}),"Create"]}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):l.jsx("div",{className:"create-form",children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[l.jsx(qe,{size:18}),"New Project"]})}),r?l.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Dd,{size:48,style:{marginBottom:16,opacity:.3}}),l.jsx("p",{children:"No projects yet. Create one to get started!"})]}):l.jsx("div",{className:"projects-grid",children:t.map(f=>l.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[l.jsxs("h3",{children:[l.jsx(Dd,{size:18}),f.name]}),l.jsx("p",{children:f.description||"No description"}),l.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:l.jsx(Je,{size:16})})]},f.id))})]})]})}const i0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function o0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function l0(){const{project:e,updateProject:t}=Nt(),[n,r]=N.useState(null);if(!e)return null;const{app:i}=e;function o(v){t({app:{...i,...v}})}function a(v){if(v===""){r(null),o({name:v});return}o0(v)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:v})}function s(){const v={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,v]})}function u(v,y){const z=[...i.state_keys];z[v]={...z[v],...y},o({state_keys:z})}function c(v){o({state_keys:i.state_keys.filter((y,z)=>z!==v)})}function d(){const v={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};o({plugins:[...i.plugins,v]})}function p(v,y){const z=[...i.plugins];z[v]={...z[v],...y},o({plugins:z})}function f(v){o({plugins:i.plugins.filter((y,z)=>z!==v)})}const m=i.models||[];function w(){const v=`model_${Date.now().toString(36)}`,y={id:v,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};o({models:[...m,y],default_model_id:m.length===0?v:i.default_model_id})}function b(v,y){const z=m.map(R=>R.id===v?{...R,...y}:R);o({models:z})}function E(v){var R;const y=m.filter(I=>I.id!==v),z=i.default_model_id===v?((R=y[0])==null?void 0:R.id)||void 0:i.default_model_id;o({models:y,default_model_id:z})}function h(v){o({default_model_id:v})}const x=i.env_vars||{},[g,T]=N.useState({}),[_,k]=N.useState("");function P(v=""){const y=v||_.trim();!y||x[y]!==void 0||(o({env_vars:{...x,[y]:""}}),k(""))}function M(v,y){o({env_vars:{...x,[v]:y}})}function $(v){const y={...x};delete y[v],o({env_vars:y})}function S(v){T(y=>({...y,[v]:!y[v]}))}return l.jsxs("div",{className:"app-config",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(J1,{size:20}),"Basic Information"]})}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"App Name"}),l.jsx("input",{type:"text",value:i.name,onChange:v=>a(v.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Root Agent"}),l.jsxs("select",{value:i.root_agent_id||"",onChange:v=>o({root_agent_id:v.target.value||void 0}),children:[l.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(v=>l.jsx("option",{value:v.id,children:v.name},v.id))]})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{value:i.description,onChange:v=>o({description:v.target.value}),rows:2})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(yi,{size:20}),"Services"]})}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Session Service"}),l.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:v=>{const y=v.target.value;o(y==="memory"?{session_service_uri:"memory://"}:y==="file"?{session_service_uri:"file://./sessions"}:y==="sqlite"?{session_service_uri:"sqlite://./sessions.db"}:{session_service_uri:y+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System (JSON)"}),l.jsx("option",{value:"sqlite",children:"SQLite"}),l.jsx("option",{value:"postgresql",children:"PostgreSQL"})]}),i.session_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:v=>o({session_service_uri:"file://"+v.target.value}),placeholder:"./sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&l.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:v=>o({session_service_uri:"sqlite://"+v.target.value}),placeholder:"./sessions.db",style:{marginTop:8}})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Memory Service"}),l.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:v=>{const y=v.target.value;o(y==="memory"?{memory_service_uri:"memory://"}:y==="file"?{memory_service_uri:"file://./memory"}:{memory_service_uri:y+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System (JSON)"})]}),i.memory_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:v=>o({memory_service_uri:"file://"+v.target.value}),placeholder:"./memory",style:{marginTop:8}})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Artifact Service"}),l.jsxs("select",{value:i.artifact_service_uri.split("://")[0],onChange:v=>{const y=v.target.value;o(y==="memory"?{artifact_service_uri:"memory://"}:y==="file"?{artifact_service_uri:"file://./artifacts"}:y==="gcs"?{artifact_service_uri:"gcs://your-bucket-name"}:{artifact_service_uri:y+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System"}),l.jsx("option",{value:"gcs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:v=>o({artifact_service_uri:"file://"+v.target.value}),placeholder:"./artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gcs://")&&l.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gcs://",""),onChange:v=>o({artifact_service_uri:"gcs://"+v.target.value}),placeholder:"your-bucket-name",style:{marginTop:8}})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Ts,{size:20}),"Environment Variables"]})}),l.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:i0.filter(v=>x[v.key]===void 0).map(v=>l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>P(v.key),title:v.description,children:[l.jsx(qe,{size:12}),v.key]},v.key))}),Object.keys(x).length===0?l.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(x).map(([v,y])=>l.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[l.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:v}),l.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[l.jsx("input",{type:g[v]?"text":"password",value:y,onChange:z=>M(v,z.target.value),placeholder:"Enter value...",style:{flex:1}}),l.jsx("button",{className:"delete-item",onClick:()=>S(v),title:g[v]?"Hide value":"Show value",children:g[v]?l.jsx(W1,{size:16}):l.jsx(Ui,{size:16})})]})]}),l.jsx("button",{className:"delete-item",onClick:()=>$(v),children:l.jsx(Je,{size:16})})]},v)),l.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[l.jsx("input",{type:"text",value:_,onChange:v=>k(v.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:v=>v.key==="Enter"&&P()}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>P(),disabled:!_.trim(),children:[l.jsx(qe,{size:14}),"Add Variable"]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(Wu,{size:20}),"Models"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,children:[l.jsx(qe,{size:14}),"Add Model"]})]}),m.length===0?l.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(v=>l.jsxs("div",{className:"model-card",children:[l.jsxs("div",{className:"model-card-header",children:[l.jsx("input",{type:"text",value:v.name,onChange:y=>b(v.id,{name:y.target.value}),placeholder:"Model name",className:"model-name-input"}),l.jsx("button",{className:`default-model-btn ${i.default_model_id===v.id?"is-default":""}`,onClick:()=>h(v.id),title:i.default_model_id===v.id?"Default model":"Set as default",children:l.jsx(Bh,{size:14,fill:i.default_model_id===v.id?"currentColor":"none"})}),l.jsx("button",{className:"delete-item",onClick:()=>E(v.id),children:l.jsx(Je,{size:16})})]}),l.jsxs("div",{className:"model-card-body",children:[l.jsxs("div",{className:"model-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Provider"}),l.jsxs("select",{value:v.provider,onChange:y=>b(v.id,{provider:y.target.value}),children:[l.jsx("option",{value:"gemini",children:"Gemini"}),l.jsx("option",{value:"litellm",children:"LiteLLM"}),l.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"Model Name"}),l.jsx("input",{type:"text",value:v.model_name,onChange:y=>b(v.id,{model_name:y.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),v.provider==="litellm"&&l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"API Base URL"}),l.jsx("input",{type:"text",value:v.api_base||"",onChange:y=>b(v.id,{api_base:y.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),l.jsxs("div",{className:"model-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Temperature"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:v.temperature??"",onChange:y=>b(v.id,{temperature:y.target.value?parseFloat(y.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Tokens"}),l.jsx("input",{type:"number",min:"1",value:v.max_output_tokens??"",onChange:y=>b(v.id,{max_output_tokens:y.target.value?parseInt(y.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top P"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:v.top_p??"",onChange:y=>b(v.id,{top_p:y.target.value?parseFloat(y.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top K"}),l.jsx("input",{type:"number",min:"1",value:v.top_k??"",onChange:y=>b(v.id,{top_k:y.target.value?parseInt(y.target.value):void 0}),placeholder:"Default"})]})]})]})]},v.id))]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Vh,{size:20}),"Advanced Options"]})}),l.jsxs("div",{className:"toggle-group",children:[l.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Event Compaction"}),l.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&l.jsx("input",{type:"number",value:i.compaction.max_events,onChange:v=>o({compaction:{...i.compaction,max_events:parseInt(v.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),l.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[l.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Context Caching"}),l.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&l.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:v=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(v.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),l.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[l.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Resumability"}),l.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(qu,{size:20}),"Session State Keys"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:s,children:[l.jsx(qe,{size:14}),"Add Key"]})]}),i.state_keys.length===0?l.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((v,y)=>l.jsxs("div",{className:"list-item",children:[l.jsxs("div",{className:"list-item-content",children:[l.jsx("input",{type:"text",value:v.name,onChange:z=>u(y,{name:z.target.value}),placeholder:"Key name"}),l.jsxs("select",{value:v.type,onChange:z=>u(y,{type:z.target.value}),children:[l.jsx("option",{value:"string",children:"String"}),l.jsx("option",{value:"number",children:"Number"}),l.jsx("option",{value:"boolean",children:"Boolean"}),l.jsx("option",{value:"object",children:"Object"}),l.jsx("option",{value:"array",children:"Array"})]}),l.jsxs("select",{value:v.scope,onChange:z=>u(y,{scope:z.target.value}),children:[l.jsx("option",{value:"session",children:"Session"}),l.jsx("option",{value:"user",children:"User"}),l.jsx("option",{value:"app",children:"App"}),l.jsx("option",{value:"temp",children:"Temporary"})]}),l.jsx("input",{type:"text",value:v.description,onChange:z=>u(y,{description:z.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),l.jsx("button",{className:"delete-item",onClick:()=>c(y),children:l.jsx(Je,{size:16})})]},y))]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(yr,{size:20}),"Plugins"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,children:[l.jsx(qe,{size:14}),"Add Plugin"]})]}),i.plugins.length===0?l.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins like ReflectAndRetryToolPlugin for error handling."}):i.plugins.map((v,y)=>l.jsxs("div",{className:"list-item",children:[l.jsxs("div",{className:"list-item-content",children:[l.jsx("select",{value:v.type,onChange:z=>p(y,{type:z.target.value}),children:l.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"})}),v.type==="ReflectAndRetryToolPlugin"&&l.jsxs(l.Fragment,{children:[l.jsx("input",{type:"number",value:v.max_retries||3,onChange:z=>p(y,{max_retries:parseInt(z.target.value)}),placeholder:"Max retries"}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("input",{type:"checkbox",checked:v.throw_exception_if_retry_exceeded||!1,onChange:z=>p(y,{throw_exception_if_retry_exceeded:z.target.checked})}),"Throw on exceed"]})]})]}),l.jsx("button",{className:"delete-item",onClick:()=>f(y),children:l.jsx(Je,{size:16})})]},y))]})]})}const a0="modulepreload",s0=function(e){return"/"+e},Vd={},Wh=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=s0(u),u in Vd)return;Vd[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":a0,c||(p.as="script"),p.crossOrigin="",p.href=u,s&&p.setAttribute("nonce",s),document.head.appendChild(p),c)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})};function Wd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u0(e){if(Array.isArray(e))return e}function c0(e,t,n){return(t=x0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,s=[],u=!0,c=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(u=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);u=!0);}catch(d){c=!0,i=d}finally{try{if(!u&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}function p0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function qd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hd(Object(n),!0).forEach(function(r){c0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function f0(e,t){if(e==null)return{};var n,r,i=m0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function m0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function h0(e,t){return u0(e)||d0(e,t)||y0(e,t)||p0()}function g0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function x0(e){var t=g0(e,"string");return typeof t=="symbol"?t:t+""}function y0(e,t){if(e){if(typeof e=="string")return Wd(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Wd(e,t):void 0}}function v0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kd(Object(n),!0).forEach(function(r){v0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function b0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function si(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return t.apply(n,[].concat(i,s))}}}function cl(e){return{}.toString.call(e).includes("Object")}function k0(e){return!Object.keys(e).length}function Vi(e){return typeof e=="function"}function w0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function j0(e,t){return cl(t)||_n("changeType"),Object.keys(t).some(function(n){return!w0(e,n)})&&_n("changeField"),t}function S0(e){Vi(e)||_n("selectorType")}function _0(e){Vi(e)||cl(e)||_n("handlerType"),cl(e)&&Object.values(e).some(function(t){return!Vi(t)})&&_n("handlersType")}function C0(e){e||_n("initialIsRequired"),cl(e)||_n("initialType"),k0(e)&&_n("initialContent")}function N0(e,t){throw new Error(e[t]||e.default)}var E0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},_n=si(N0)(E0),vo={changes:j0,selector:S0,handler:_0,initial:C0};function z0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};vo.initial(e),vo.handler(t);var n={current:e},r=si(L0)(n,t),i=si(P0)(n),o=si(vo.changes)(e),a=si(T0)(n);function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return vo.selector(c),c(n.current)}function u(c){b0(r,i,o,a)(c)}return[s,u]}function T0(e,t){return Vi(t)?t(e.current):t}function P0(e,t){return e.current=Qd(Qd({},e.current),t),t}function L0(e,t,n){return Vi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var A0={create:z0},I0={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function M0(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return t.apply(n,[].concat(i,s))}}}function R0(e){return{}.toString.call(e).includes("Object")}function O0(e){return e||Gd("configIsRequired"),R0(e)||Gd("configType"),e.urls?(D0(),{paths:{vs:e.urls.monacoBase}}):e}function D0(){console.warn(Hh.deprecation)}function $0(e,t){throw new Error(e[t]||e.default)}var Hh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Gd=M0($0)(Hh),F0={config:O0},B0=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function qh(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],qh(e[n],t[n]))}),qd(qd({},e),t)}var U0={type:"cancelation",msg:"operation is manually canceled"};function ha(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(U0):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var V0=["monaco"],W0=A0.create({config:I0,isInitialized:!1,resolve:null,reject:null,monaco:null}),Kh=h0(W0,2),Xi=Kh[0],Al=Kh[1];function H0(e){var t=F0.config(e),n=t.monaco,r=f0(t,V0);Al(function(i){return{config:qh(i.config,r),monaco:n}})}function q0(){var e=Xi(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Al({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ha(ga);if(window.monaco&&window.monaco.editor)return Qh(window.monaco),e.resolve(window.monaco),ha(ga);B0(K0,G0)(J0)}return ha(ga)}function K0(e){return document.body.appendChild(e)}function Q0(e){var t=document.createElement("script");return e&&(t.src=e),t}function G0(e){var t=Xi(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=Q0("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function J0(){var e=Xi(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Qh(r),e.resolve(r)},function(n){e.reject(n)})}function Qh(e){Xi().monaco||Al({monaco:e})}function Y0(){return Xi(function(e){var t=e.monaco;return t})}var ga=new Promise(function(e,t){return Al({resolve:e,reject:t})}),Gh={config:H0,init:q0,__getMonacoInstance:Y0},X0={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},xa=X0,Z0={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},eb=Z0;function tb({children:e}){return Rt.createElement("div",{style:eb.container},e)}var nb=tb,rb=nb;function ib({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return Rt.createElement("section",{style:{...xa.wrapper,width:e,height:t},...a},!n&&Rt.createElement(rb,null,r),Rt.createElement("div",{ref:i,style:{...xa.fullWidth,...!n&&xa.hide},className:o}))}var ob=ib,Jh=N.memo(ob);function lb(e){N.useEffect(e,[])}var Yh=lb;function ab(e,t,n=!0){let r=N.useRef(!0);N.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var pt=ab;function vi(){}function vr(e,t,n,r){return sb(e,r)||ub(e,t,n,r)}function sb(e,t){return e.editor.getModel(Xh(e,t))}function ub(e,t,n,r){return e.editor.createModel(t,n,r?Xh(e,r):void 0)}function Xh(e,t){return e.Uri.parse(t)}function cb({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:u=!1,theme:c="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:w,wrapperProps:b={},beforeMount:E=vi,onMount:h=vi}){let[x,g]=N.useState(!1),[T,_]=N.useState(!0),k=N.useRef(null),P=N.useRef(null),M=N.useRef(null),$=N.useRef(h),S=N.useRef(E),v=N.useRef(!1);Yh(()=>{let I=Gh.init();return I.then(D=>(P.current=D)&&_(!1)).catch(D=>(D==null?void 0:D.type)!=="cancelation"&&console.error("Monaco initialization: error:",D)),()=>k.current?R():I.cancel()}),pt(()=>{if(k.current&&P.current){let I=k.current.getOriginalEditor(),D=vr(P.current,e||"",r||n||"text",o||"");D!==I.getModel()&&I.setModel(D)}},[o],x),pt(()=>{if(k.current&&P.current){let I=k.current.getModifiedEditor(),D=vr(P.current,t||"",i||n||"text",a||"");D!==I.getModel()&&I.setModel(D)}},[a],x),pt(()=>{let I=k.current.getModifiedEditor();I.getOption(P.current.editor.EditorOption.readOnly)?I.setValue(t||""):t!==I.getValue()&&(I.executeEdits("",[{range:I.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),I.pushUndoStop())},[t],x),pt(()=>{var I,D;(D=(I=k.current)==null?void 0:I.getModel())==null||D.original.setValue(e||"")},[e],x),pt(()=>{let{original:I,modified:D}=k.current.getModel();P.current.editor.setModelLanguage(I,r||n||"text"),P.current.editor.setModelLanguage(D,i||n||"text")},[n,r,i],x),pt(()=>{var I;(I=P.current)==null||I.editor.setTheme(c)},[c],x),pt(()=>{var I;(I=k.current)==null||I.updateOptions(p)},[p],x);let y=N.useCallback(()=>{var L;if(!P.current)return;S.current(P.current);let I=vr(P.current,e||"",r||n||"text",o||""),D=vr(P.current,t||"",i||n||"text",a||"");(L=k.current)==null||L.setModel({original:I,modified:D})},[n,t,i,e,r,o,a]),z=N.useCallback(()=>{var I;!v.current&&M.current&&(k.current=P.current.editor.createDiffEditor(M.current,{automaticLayout:!0,...p}),y(),(I=P.current)==null||I.editor.setTheme(c),g(!0),v.current=!0)},[p,c,y]);N.useEffect(()=>{x&&$.current(k.current,P.current)},[x]),N.useEffect(()=>{!T&&!x&&z()},[T,x,z]);function R(){var D,L,A,U;let I=(D=k.current)==null?void 0:D.getModel();s||((L=I==null?void 0:I.original)==null||L.dispose()),u||((A=I==null?void 0:I.modified)==null||A.dispose()),(U=k.current)==null||U.dispose()}return Rt.createElement(Jh,{width:m,height:f,isEditorReady:x,loading:d,_ref:M,className:w,wrapperProps:b})}var db=cb;N.memo(db);function pb(e){let t=N.useRef();return N.useEffect(()=>{t.current=e},[e]),t.current}var fb=pb,bo=new Map;function mb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:s,loading:u="Loading...",options:c={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:w="100%",className:b,wrapperProps:E={},beforeMount:h=vi,onMount:x=vi,onChange:g,onValidate:T=vi}){let[_,k]=N.useState(!1),[P,M]=N.useState(!0),$=N.useRef(null),S=N.useRef(null),v=N.useRef(null),y=N.useRef(x),z=N.useRef(h),R=N.useRef(),I=N.useRef(r),D=fb(o),L=N.useRef(!1),A=N.useRef(!1);Yh(()=>{let V=Gh.init();return V.then(Q=>($.current=Q)&&M(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>S.current?j():V.cancel()}),pt(()=>{var Q,C,te,ie;let V=vr($.current,e||r||"",t||i||"",o||n||"");V!==((Q=S.current)==null?void 0:Q.getModel())&&(p&&bo.set(D,(C=S.current)==null?void 0:C.saveViewState()),(te=S.current)==null||te.setModel(V),p&&((ie=S.current)==null||ie.restoreViewState(bo.get(o))))},[o],_),pt(()=>{var V;(V=S.current)==null||V.updateOptions(c)},[c],_),pt(()=>{!S.current||r===void 0||(S.current.getOption($.current.editor.EditorOption.readOnly)?S.current.setValue(r):r!==S.current.getValue()&&(A.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),S.current.pushUndoStop(),A.current=!1))},[r],_),pt(()=>{var Q,C;let V=(Q=S.current)==null?void 0:Q.getModel();V&&i&&((C=$.current)==null||C.editor.setModelLanguage(V,i))},[i],_),pt(()=>{var V;s!==void 0&&((V=S.current)==null||V.revealLine(s))},[s],_),pt(()=>{var V;(V=$.current)==null||V.editor.setTheme(a)},[a],_);let U=N.useCallback(()=>{var V;if(!(!v.current||!$.current)&&!L.current){z.current($.current);let Q=o||n,C=vr($.current,r||e||"",t||i||"",Q||"");S.current=(V=$.current)==null?void 0:V.editor.create(v.current,{model:C,automaticLayout:!0,...c},d),p&&S.current.restoreViewState(bo.get(Q)),$.current.editor.setTheme(a),s!==void 0&&S.current.revealLine(s),k(!0),L.current=!0}},[e,t,n,r,i,o,c,d,p,a,s]);N.useEffect(()=>{_&&y.current(S.current,$.current)},[_]),N.useEffect(()=>{!P&&!_&&U()},[P,_,U]),I.current=r,N.useEffect(()=>{var V,Q;_&&g&&((V=R.current)==null||V.dispose(),R.current=(Q=S.current)==null?void 0:Q.onDidChangeModelContent(C=>{A.current||g(S.current.getValue(),C)}))},[_,g]),N.useEffect(()=>{if(_){let V=$.current.editor.onDidChangeMarkers(Q=>{var te;let C=(te=S.current.getModel())==null?void 0:te.uri;if(C&&Q.find(ie=>ie.path===C.path)){let ie=$.current.editor.getModelMarkers({resource:C});T==null||T(ie)}});return()=>{V==null||V.dispose()}}return()=>{}},[_,T]);function j(){var V,Q;(V=R.current)==null||V.dispose(),f?p&&bo.set(o,S.current.saveViewState()):(Q=S.current.getModel())==null||Q.dispose(),S.current.dispose()}return Rt.createElement(Jh,{width:m,height:w,isEditorReady:_,loading:u,_ref:v,className:b,wrapperProps:E})}var hb=mb,gb=N.memo(hb),Or=gb;function xb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const yb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,vb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,bb={};function Jd(e,t){return(bb.jsx?vb:yb).test(e)}const kb=/[ \t\n\f\r]/g;function wb(e){return typeof e=="object"?e.type==="text"?Yd(e.value):!1:Yd(e)}function Yd(e){return e.replace(kb,"")===""}class Zi{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Zi.prototype.normal={};Zi.prototype.property={};Zi.prototype.space=void 0;function Zh(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Zi(n,r,t)}function Ps(e){return e.toLowerCase()}class st{constructor(t,n){this.attribute=n,this.property=t}}st.prototype.attribute="";st.prototype.booleanish=!1;st.prototype.boolean=!1;st.prototype.commaOrSpaceSeparated=!1;st.prototype.commaSeparated=!1;st.prototype.defined=!1;st.prototype.mustUseProperty=!1;st.prototype.number=!1;st.prototype.overloadedBoolean=!1;st.prototype.property="";st.prototype.spaceSeparated=!1;st.prototype.space=void 0;let jb=0;const re=er(),Le=er(),Ls=er(),q=er(),ve=er(),Cr=er(),ct=er();function er(){return 2**++jb}const As=Object.freeze(Object.defineProperty({__proto__:null,boolean:re,booleanish:Le,commaOrSpaceSeparated:ct,commaSeparated:Cr,number:q,overloadedBoolean:Ls,spaceSeparated:ve},Symbol.toStringTag,{value:"Module"})),ya=Object.keys(As);class Gu extends st{constructor(t,n,r,i){let o=-1;if(super(t,n),Xd(this,"space",i),typeof r=="number")for(;++o<ya.length;){const a=ya[o];Xd(this,ya[o],(r&As[a])===As[a])}}}Gu.prototype.defined=!0;function Xd(e,t,n){n&&(e[t]=n)}function Ur(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Gu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Ps(r)]=r,n[Ps(o.attribute)]=r}return new Zi(t,n,e.space)}const eg=Ur({properties:{ariaActiveDescendant:null,ariaAtomic:Le,ariaAutoComplete:null,ariaBusy:Le,ariaChecked:Le,ariaColCount:q,ariaColIndex:q,ariaColSpan:q,ariaControls:ve,ariaCurrent:null,ariaDescribedBy:ve,ariaDetails:null,ariaDisabled:Le,ariaDropEffect:ve,ariaErrorMessage:null,ariaExpanded:Le,ariaFlowTo:ve,ariaGrabbed:Le,ariaHasPopup:null,ariaHidden:Le,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ve,ariaLevel:q,ariaLive:null,ariaModal:Le,ariaMultiLine:Le,ariaMultiSelectable:Le,ariaOrientation:null,ariaOwns:ve,ariaPlaceholder:null,ariaPosInSet:q,ariaPressed:Le,ariaReadOnly:Le,ariaRelevant:null,ariaRequired:Le,ariaRoleDescription:ve,ariaRowCount:q,ariaRowIndex:q,ariaRowSpan:q,ariaSelected:Le,ariaSetSize:q,ariaSort:null,ariaValueMax:q,ariaValueMin:q,ariaValueNow:q,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function tg(e,t){return t in e?e[t]:t}function ng(e,t){return tg(e,t.toLowerCase())}const Sb=Ur({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Cr,acceptCharset:ve,accessKey:ve,action:null,allow:null,allowFullScreen:re,allowPaymentRequest:re,allowUserMedia:re,alt:null,as:null,async:re,autoCapitalize:null,autoComplete:ve,autoFocus:re,autoPlay:re,blocking:ve,capture:null,charSet:null,checked:re,cite:null,className:ve,cols:q,colSpan:null,content:null,contentEditable:Le,controls:re,controlsList:ve,coords:q|Cr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:re,defer:re,dir:null,dirName:null,disabled:re,download:Ls,draggable:Le,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:re,formTarget:null,headers:ve,height:q,hidden:Ls,high:q,href:null,hrefLang:null,htmlFor:ve,httpEquiv:ve,id:null,imageSizes:null,imageSrcSet:null,inert:re,inputMode:null,integrity:null,is:null,isMap:re,itemId:null,itemProp:ve,itemRef:ve,itemScope:re,itemType:ve,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:re,low:q,manifest:null,max:null,maxLength:q,media:null,method:null,min:null,minLength:q,multiple:re,muted:re,name:null,nonce:null,noModule:re,noValidate:re,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:re,optimum:q,pattern:null,ping:ve,placeholder:null,playsInline:re,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:re,referrerPolicy:null,rel:ve,required:re,reversed:re,rows:q,rowSpan:q,sandbox:ve,scope:null,scoped:re,seamless:re,selected:re,shadowRootClonable:re,shadowRootDelegatesFocus:re,shadowRootMode:null,shape:null,size:q,sizes:null,slot:null,span:q,spellCheck:Le,src:null,srcDoc:null,srcLang:null,srcSet:null,start:q,step:null,style:null,tabIndex:q,target:null,title:null,translate:null,type:null,typeMustMatch:re,useMap:null,value:Le,width:q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ve,axis:null,background:null,bgColor:null,border:q,borderColor:null,bottomMargin:q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:re,declare:re,event:null,face:null,frame:null,frameBorder:null,hSpace:q,leftMargin:q,link:null,longDesc:null,lowSrc:null,marginHeight:q,marginWidth:q,noResize:re,noHref:re,noShade:re,noWrap:re,object:null,profile:null,prompt:null,rev:null,rightMargin:q,rules:null,scheme:null,scrolling:Le,standby:null,summary:null,text:null,topMargin:q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:re,disableRemotePlayback:re,prefix:null,property:null,results:q,security:null,unselectable:null},space:"html",transform:ng}),_b=Ur({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ct,accentHeight:q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:q,amplitude:q,arabicForm:null,ascent:q,attributeName:null,attributeType:null,azimuth:q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:q,by:null,calcMode:null,capHeight:q,className:ve,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:q,diffuseConstant:q,direction:null,display:null,dur:null,divisor:q,dominantBaseline:null,download:re,dx:null,dy:null,edgeMode:null,editable:null,elevation:q,enableBackground:null,end:null,event:null,exponent:q,externalResourcesRequired:null,fill:null,fillOpacity:q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Cr,g2:Cr,glyphName:Cr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:q,horizOriginX:q,horizOriginY:q,id:null,ideographic:q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:q,k:q,k1:q,k2:q,k3:q,k4:q,kernelMatrix:ct,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:q,overlineThickness:q,paintOrder:null,panose1:null,path:null,pathLength:q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ve,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:q,pointsAtY:q,pointsAtZ:q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ct,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ct,rev:ct,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ct,requiredFeatures:ct,requiredFonts:ct,requiredFormats:ct,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:q,specularExponent:q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:q,strikethroughThickness:q,string:null,stroke:null,strokeDashArray:ct,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:q,strokeOpacity:q,strokeWidth:null,style:null,surfaceScale:q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ct,tabIndex:q,tableValues:null,target:null,targetX:q,targetY:q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ct,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:q,underlineThickness:q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:q,values:null,vAlphabetic:q,vMathematical:q,vectorEffect:null,vHanging:q,vIdeographic:q,version:null,vertAdvY:q,vertOriginX:q,vertOriginY:q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:tg}),rg=Ur({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),ig=Ur({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ng}),og=Ur({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Cb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Nb=/[A-Z]/g,Zd=/-[a-z]/g,Eb=/^data[-\w.:]+$/i;function zb(e,t){const n=Ps(t);let r=t,i=st;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Eb.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Zd,Pb);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Zd.test(o)){let a=o.replace(Nb,Tb);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Gu}return new i(r,t)}function Tb(e){return"-"+e.toLowerCase()}function Pb(e){return e.charAt(1).toUpperCase()}const Lb=Zh([eg,Sb,rg,ig,og],"html"),Ju=Zh([eg,_b,rg,ig,og],"svg");function Ab(e){return e.join(" ").trim()}var Yu={},ep=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Ib=/\n/g,Mb=/^\s*/,Rb=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Ob=/^:\s*/,Db=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,$b=/^[;\s]*/,Fb=/^\s+|\s+$/g,Bb=`
`,tp="/",np="*",Dn="",Ub="comment",Vb="declaration";function Wb(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(w){var b=w.match(Ib);b&&(n+=b.length);var E=w.lastIndexOf(Bb);r=~E?w.length-E:r+w.length}function o(){var w={line:n,column:r};return function(b){return b.position=new a(w),c(),b}}function a(w){this.start=w,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function s(w){var b=new Error(t.source+":"+n+":"+r+": "+w);if(b.reason=w,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function u(w){var b=w.exec(e);if(b){var E=b[0];return i(E),e=e.slice(E.length),b}}function c(){u(Mb)}function d(w){var b;for(w=w||[];b=p();)b!==!1&&w.push(b);return w}function p(){var w=o();if(!(tp!=e.charAt(0)||np!=e.charAt(1))){for(var b=2;Dn!=e.charAt(b)&&(np!=e.charAt(b)||tp!=e.charAt(b+1));)++b;if(b+=2,Dn===e.charAt(b-1))return s("End of comment missing");var E=e.slice(2,b-2);return r+=2,i(E),e=e.slice(b),r+=2,w({type:Ub,comment:E})}}function f(){var w=o(),b=u(Rb);if(b){if(p(),!u(Ob))return s("property missing ':'");var E=u(Db),h=w({type:Vb,property:rp(b[0].replace(ep,Dn)),value:E?rp(E[0].replace(ep,Dn)):Dn});return u($b),h}}function m(){var w=[];d(w);for(var b;b=f();)b!==!1&&(w.push(b),d(w));return w}return c(),m()}function rp(e){return e?e.replace(Fb,Dn):Dn}var Hb=Wb,qb=$o&&$o.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});Yu.default=Qb;const Kb=qb(Hb);function Qb(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Kb.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:s}=o;i?t(a,s,o):s&&(n=n||{},n[a]=s)}),n}var Il={};Object.defineProperty(Il,"__esModule",{value:!0});Il.camelCase=void 0;var Gb=/^--[a-zA-Z0-9_-]+$/,Jb=/-([a-z])/g,Yb=/^[^-]+$/,Xb=/^-(webkit|moz|ms|o|khtml)-/,Zb=/^-(ms)-/,ek=function(e){return!e||Yb.test(e)||Gb.test(e)},tk=function(e,t){return t.toUpperCase()},ip=function(e,t){return"".concat(t,"-")},nk=function(e,t){return t===void 0&&(t={}),ek(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Zb,ip):e=e.replace(Xb,ip),e.replace(Jb,tk))};Il.camelCase=nk;var rk=$o&&$o.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ik=rk(Yu),ok=Il;function Is(e,t){var n={};return!e||typeof e!="string"||(0,ik.default)(e,function(r,i){r&&i&&(n[(0,ok.camelCase)(r,t)]=i)}),n}Is.default=Is;var lk=Is;const ak=ml(lk),lg=ag("end"),Xu=ag("start");function ag(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function sk(e){const t=Xu(e),n=lg(e);if(t&&n)return{start:t,end:n}}function bi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?op(e.position):"start"in e||"end"in e?op(e):"line"in e||"column"in e?Ms(e):""}function Ms(e){return lp(e&&e.line)+":"+lp(e&&e.column)}function op(e){return Ms(e&&e.start)+"-"+Ms(e&&e.end)}function lp(e){return e&&typeof e=="number"?e:1}class Qe extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=bi(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Qe.prototype.file="";Qe.prototype.name="";Qe.prototype.reason="";Qe.prototype.message="";Qe.prototype.stack="";Qe.prototype.column=void 0;Qe.prototype.line=void 0;Qe.prototype.ancestors=void 0;Qe.prototype.cause=void 0;Qe.prototype.fatal=void 0;Qe.prototype.place=void 0;Qe.prototype.ruleId=void 0;Qe.prototype.source=void 0;const Zu={}.hasOwnProperty,uk=new Map,ck=/[A-Z]/g,dk=new Set(["table","tbody","thead","tfoot","tr"]),pk=new Set(["td","th"]),sg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function fk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=kk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=bk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Ju:Lb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=ug(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function ug(e,t,n){if(t.type==="element")return mk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return hk(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return xk(e,t,n);if(t.type==="mdxjsEsm")return gk(e,t);if(t.type==="root")return yk(e,t,n);if(t.type==="text")return vk(e,t)}function mk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Ju,e.schema=i),e.ancestors.push(t);const o=dg(e,t.tagName,!1),a=wk(e,t);let s=tc(e,t);return dk.has(t.tagName)&&(s=s.filter(function(u){return typeof u=="string"?!wb(u):!0})),cg(e,a,o,t),ec(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function hk(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Wi(e,t.position)}function gk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Wi(e,t.position)}function xk(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Ju,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:dg(e,t.name,!0),a=jk(e,t),s=tc(e,t);return cg(e,a,o,t),ec(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function yk(e,t,n){const r={};return ec(r,tc(e,t)),e.create(t,e.Fragment,r,n)}function vk(e,t){return t.value}function cg(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function ec(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function bk(e,t,n){return r;function r(i,o,a,s){const c=Array.isArray(a.children)?n:t;return s?c(o,a,s):c(o,a)}}function kk(e,t){return n;function n(r,i,o,a){const s=Array.isArray(o.children),u=Xu(r);return t(i,o,a,s,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function wk(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Zu.call(t.properties,i)){const o=Sk(e,i,t.properties[i]);if(o){const[a,s]=o;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&pk.has(t.tagName)?r=s:n[a]=s}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function jk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const s=a.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else Wi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else Wi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function tc(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:uk;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){const c=i.get(u)||0;a=u+"-"+c,i.set(u,c+1)}}const s=ug(e,o,a);s!==void 0&&n.push(s)}return n}function Sk(e,t,n){const r=zb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?xb(n):Ab(n)),r.property==="style"){let i=typeof n=="object"?n:_k(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Ck(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Cb[r.property]||r.property:r.attribute,n]}}function _k(e,t){try{return ak(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Qe("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=sg+"#cannot-parse-style-attribute",i}}function dg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const s=Jd(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}r=a}else r=Jd(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Zu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Wi(e)}function Wi(e,t){const n=new Qe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=sg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Ck(e){const t={};let n;for(n in e)Zu.call(e,n)&&(t[Nk(n)]=e[n]);return t}function Nk(e){let t=e.replace(ck,Ek);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Ek(e){return"-"+e.toLowerCase()}const va={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},zk={};function Tk(e,t){const n=zk,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return pg(e,r,i)}function pg(e,t,n){if(Pk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ap(e.children,t,n)}return Array.isArray(e)?ap(e,t,n):""}function ap(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=pg(e[i],t,n);return r.join("")}function Pk(e){return!!(e&&typeof e=="object")}const sp=document.createElement("i");function nc(e){const t="&"+e+";";sp.innerHTML=t;const n=sp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Qt(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function wt(e,t){return e.length>0?(Qt(e,e.length,0,t),e):t}const up={}.hasOwnProperty;function Lk(e){const t={};let n=-1;for(;++n<e.length;)Ak(t,e[n]);return t}function Ak(e,t){let n;for(n in t){const i=(up.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){up.call(i,a)||(i[a]=[]);const s=o[a];Ik(i[a],Array.isArray(s)?s:s?[s]:[])}}}function Ik(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Qt(e,0,0,r)}function fg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Nr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Wt=An(/[A-Za-z]/),mt=An(/[\dA-Za-z]/),Mk=An(/[#-'*+\--9=?A-Z^-~]/);function Rs(e){return e!==null&&(e<32||e===127)}const Os=An(/\d/),Rk=An(/[\dA-Fa-f]/),Ok=An(/[!-/:-@[-`{-~]/);function ee(e){return e!==null&&e<-2}function at(e){return e!==null&&(e<0||e===32)}function fe(e){return e===-2||e===-1||e===32}const Dk=An(new RegExp("\\p{P}|\\p{S}","u")),$k=An(/\s/);function An(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Vr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&mt(e.charCodeAt(n+1))&&mt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(n+1);o<56320&&s>56319&&s<57344?(a=String.fromCharCode(o,s),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function ke(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(u){return fe(u)?(e.enter(n),s(u)):t(u)}function s(u){return fe(u)&&o++<i?(e.consume(u),s):(e.exit(n),t(u))}}const Fk={tokenize:Bk};function Bk(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ke(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),o(s)}function o(s){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return ee(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),a)}}const Uk={tokenize:Vk},cp={tokenize:Wk};function Vk(e){const t=this,n=[];let r=0,i,o,a;return s;function s(g){if(r<n.length){const T=n[r];return t.containerState=T[1],e.attempt(T[0].continuation,u,c)(g)}return c(g)}function u(g){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const T=t.events.length;let _=T,k;for(;_--;)if(t.events[_][0]==="exit"&&t.events[_][1].type==="chunkFlow"){k=t.events[_][1].end;break}h(r);let P=T;for(;P<t.events.length;)t.events[P][1].end={...k},P++;return Qt(t.events,_+1,0,t.events.slice(T)),t.events.length=P,c(g)}return s(g)}function c(g){if(r===n.length){if(!i)return f(g);if(i.currentConstruct&&i.currentConstruct.concrete)return w(g);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(cp,d,p)(g)}function d(g){return i&&x(),h(r),f(g)}function p(g){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,w(g)}function f(g){return t.containerState={},e.attempt(cp,m,w)(g)}function m(g){return r++,n.push([t.currentConstruct,t.containerState]),f(g)}function w(g){if(g===null){i&&x(),h(0),e.consume(g);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),b(g)}function b(g){if(g===null){E(e.exit("chunkFlow"),!0),h(0),e.consume(g);return}return ee(g)?(e.consume(g),E(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(g),b)}function E(g,T){const _=t.sliceStream(g);if(T&&_.push(null),g.previous=o,o&&(o.next=g),o=g,i.defineSkip(g.start),i.write(_),t.parser.lazy[g.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<a&&(!i.events[k][1].end||i.events[k][1].end.offset>a))return;const P=t.events.length;let M=P,$,S;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){if($){S=t.events[M][1].end;break}$=!0}for(h(r),k=P;k<t.events.length;)t.events[k][1].end={...S},k++;Qt(t.events,M+1,0,t.events.slice(P)),t.events.length=k}}function h(g){let T=n.length;for(;T-- >g;){const _=n[T];t.containerState=_[1],_[0].exit.call(t,e)}n.length=g}function x(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Wk(e,t,n){return ke(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function dp(e){if(e===null||at(e)||$k(e))return 1;if(Dk(e))return 2}function rc(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Ds={name:"attention",resolveAll:Hk,tokenize:qk};function Hk(e,t){let n=-1,r,i,o,a,s,u,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};pp(p,-u),pp(f,u),a={type:u>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},s={type:u>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:u>1?"strong":"emphasis",start:{...a.start},end:{...s.end}},e[r][1].end={...a.start},e[n][1].start={...s.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=wt(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=wt(c,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),c=wt(c,rc(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=wt(c,[["exit",o,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=wt(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Qt(e,r-1,n-r+3,c),n=r+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function qk(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=dp(r);let o;return a;function a(u){return o=u,e.enter("attentionSequence"),s(u)}function s(u){if(u===o)return e.consume(u),s;const c=e.exit("attentionSequence"),d=dp(u),p=!d||d===2&&i||n.includes(u),f=!i||i===2&&d||n.includes(r);return c._open=!!(o===42?p:p&&(i||!f)),c._close=!!(o===42?f:f&&(d||!p)),t(u)}}function pp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Kk={name:"autolink",tokenize:Qk};function Qk(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return Wt(m)?(e.consume(m),a):m===64?n(m):c(m)}function a(m){return m===43||m===45||m===46||mt(m)?(r=1,s(m)):c(m)}function s(m){return m===58?(e.consume(m),r=0,u):(m===43||m===45||m===46||mt(m))&&r++<32?(e.consume(m),s):(r=0,c(m))}function u(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Rs(m)?n(m):(e.consume(m),u)}function c(m){return m===64?(e.consume(m),d):Mk(m)?(e.consume(m),c):n(m)}function d(m){return mt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||mt(m))&&r++<63){const w=m===45?f:p;return e.consume(m),w}return n(m)}}const Ml={partial:!0,tokenize:Gk};function Gk(e,t,n){return r;function r(o){return fe(o)?ke(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ee(o)?t(o):n(o)}}const mg={continuation:{tokenize:Yk},exit:Xk,name:"blockQuote",tokenize:Jk};function Jk(e,t,n){const r=this;return i;function i(a){if(a===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return fe(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function Yk(e,t,n){const r=this;return i;function i(a){return fe(a)?ke(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(mg,t,n)(a)}}function Xk(e){e.exit("blockQuote")}const hg={name:"characterEscape",tokenize:Zk};function Zk(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Ok(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const gg={name:"characterReference",tokenize:ew};function ew(e,t,n){const r=this;let i=0,o,a;return s;function s(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),u}function u(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,a=mt,d(p))}function c(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=Rk,d):(e.enter("characterReferenceValue"),o=7,a=Os,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===mt&&!nc(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const fp={partial:!0,tokenize:nw},mp={concrete:!0,name:"codeFenced",tokenize:tw};function tw(e,t,n){const r=this,i={partial:!0,tokenize:_};let o=0,a=0,s;return u;function u(k){return c(k)}function c(k){const P=r.events[r.events.length-1];return o=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,s=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(k)}function d(k){return k===s?(a++,e.consume(k),d):a<3?n(k):(e.exit("codeFencedFenceSequence"),fe(k)?ke(e,p,"whitespace")(k):p(k))}function p(k){return k===null||ee(k)?(e.exit("codeFencedFence"),r.interrupt?t(k):e.check(fp,b,T)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(k))}function f(k){return k===null||ee(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(k)):fe(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ke(e,m,"whitespace")(k)):k===96&&k===s?n(k):(e.consume(k),f)}function m(k){return k===null||ee(k)?p(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(k))}function w(k){return k===null||ee(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(k)):k===96&&k===s?n(k):(e.consume(k),w)}function b(k){return e.attempt(i,T,E)(k)}function E(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),h}function h(k){return o>0&&fe(k)?ke(e,x,"linePrefix",o+1)(k):x(k)}function x(k){return k===null||ee(k)?e.check(fp,b,T)(k):(e.enter("codeFlowValue"),g(k))}function g(k){return k===null||ee(k)?(e.exit("codeFlowValue"),x(k)):(e.consume(k),g)}function T(k){return e.exit("codeFenced"),t(k)}function _(k,P,M){let $=0;return S;function S(I){return k.enter("lineEnding"),k.consume(I),k.exit("lineEnding"),v}function v(I){return k.enter("codeFencedFence"),fe(I)?ke(k,y,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):y(I)}function y(I){return I===s?(k.enter("codeFencedFenceSequence"),z(I)):M(I)}function z(I){return I===s?($++,k.consume(I),z):$>=a?(k.exit("codeFencedFenceSequence"),fe(I)?ke(k,R,"whitespace")(I):R(I)):M(I)}function R(I){return I===null||ee(I)?(k.exit("codeFencedFence"),P(I)):M(I)}}}function nw(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const ba={name:"codeIndented",tokenize:iw},rw={partial:!0,tokenize:ow};function iw(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),ke(e,o,"linePrefix",5)(c)}function o(c){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(c):n(c)}function a(c){return c===null?u(c):ee(c)?e.attempt(rw,a,u)(c):(e.enter("codeFlowValue"),s(c))}function s(c){return c===null||ee(c)?(e.exit("codeFlowValue"),a(c)):(e.consume(c),s)}function u(c){return e.exit("codeIndented"),t(c)}}function ow(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):ee(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):ke(e,o,"linePrefix",5)(a)}function o(a){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):ee(a)?i(a):n(a)}}const lw={name:"codeText",previous:sw,resolve:aw,tokenize:uw};function aw(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function sw(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function uw(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),s(p)}function s(p){return p===96?(e.consume(p),r++,s):(e.exit("codeTextSequence"),u(p))}function u(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),u):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):ee(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||ee(p)?(e.exit("codeTextData"),u(p)):(e.consume(p),c)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",c(p))}}class cw{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ei(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ei(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ei(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ei(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ei(this.left,n.reverse())}}}function ei(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function xg(e){const t={};let n=-1,r,i,o,a,s,u,c;const d=new cw(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,dw(d,n)),n=t[n],c=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},s=d.slice(i,n),s.unshift(r),d.splice(i,n-i+1,s))}}return Qt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function dw(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const s=a.events,u=[],c={};let d,p,f=-1,m=n,w=0,b=0;const E=[b];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<s.length;)s[f][0]==="exit"&&s[f-1][0]==="enter"&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(b=f+1,E.push(b),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):E.pop(),f=E.length;f--;){const h=s.slice(E[f],E[f+1]),x=o.pop();u.push([x,x+h.length-1]),e.splice(x,2,h)}for(u.reverse(),f=-1;++f<u.length;)c[w+u[f][0]]=w+u[f][1],w+=u[f][1]-u[f][0]-1;return c}const pw={resolve:mw,tokenize:hw},fw={partial:!0,tokenize:gw};function mw(e){return xg(e),e}function hw(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?o(s):ee(s)?e.check(fw,a,o)(s):(e.consume(s),i)}function o(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function a(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function gw(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ke(e,o,"linePrefix")}function o(a){if(a===null||ee(a))return n(a);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function yg(e,t,n,r,i,o,a,s,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return p;function p(h){return h===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(h),e.exit(o),f):h===null||h===32||h===41||Rs(h)?n(h):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),b(h))}function f(h){return h===62?(e.enter(o),e.consume(h),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),m(h))}function m(h){return h===62?(e.exit("chunkString"),e.exit(s),f(h)):h===null||h===60||ee(h)?n(h):(e.consume(h),h===92?w:m)}function w(h){return h===60||h===62||h===92?(e.consume(h),m):m(h)}function b(h){return!d&&(h===null||h===41||at(h))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(h)):d<c&&h===40?(e.consume(h),d++,b):h===41?(e.consume(h),d--,b):h===null||h===32||h===40||Rs(h)?n(h):(e.consume(h),h===92?E:b)}function E(h){return h===40||h===41||h===92?(e.consume(h),b):b(h)}}function vg(e,t,n,r,i,o){const a=this;let s=0,u;return c;function c(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return s>999||m===null||m===91||m===93&&!u||m===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):ee(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||ee(m)||s++>999?(e.exit("chunkString"),d(m)):(e.consume(m),u||(u=!fe(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),s++,p):p(m)}}function bg(e,t,n,r,i,o){let a;return s;function s(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,u):n(f)}function u(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),c(f))}function c(f){return f===a?(e.exit(o),u(a)):f===null?n(f):ee(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),ke(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||ee(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function ki(e,t){let n;return r;function r(i){return ee(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):fe(i)?ke(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const xw={name:"definition",tokenize:vw},yw={partial:!0,tokenize:bw};function vw(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return vg.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function s(m){return i=Nr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),u):n(m)}function u(m){return at(m)?ki(e,c)(m):c(m)}function c(m){return yg(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(yw,p,p)(m)}function p(m){return fe(m)?ke(e,f,"whitespace")(m):f(m)}function f(m){return m===null||ee(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function bw(e,t,n){return r;function r(s){return at(s)?ki(e,i)(s):n(s)}function i(s){return bg(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return fe(s)?ke(e,a,"whitespace")(s):a(s)}function a(s){return s===null||ee(s)?t(s):n(s)}}const kw={name:"hardBreakEscape",tokenize:ww};function ww(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ee(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const jw={name:"headingAtx",resolve:Sw,tokenize:_w};function Sw(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Qt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function _w(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||at(d)?(e.exit("atxHeadingSequence"),s(d)):n(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),u(d)):d===null||ee(d)?(e.exit("atxHeading"),t(d)):fe(d)?ke(e,s,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function u(d){return d===35?(e.consume(d),u):(e.exit("atxHeadingSequence"),s(d))}function c(d){return d===null||d===35||at(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),c)}}const Cw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],hp=["pre","script","style","textarea"],Nw={concrete:!0,name:"htmlFlow",resolveTo:Tw,tokenize:Pw},Ew={partial:!0,tokenize:Aw},zw={partial:!0,tokenize:Lw};function Tw(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Pw(e,t,n){const r=this;let i,o,a,s,u;return c;function c(C){return d(C)}function d(C){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(C),p}function p(C){return C===33?(e.consume(C),f):C===47?(e.consume(C),o=!0,b):C===63?(e.consume(C),i=3,r.interrupt?t:j):Wt(C)?(e.consume(C),a=String.fromCharCode(C),E):n(C)}function f(C){return C===45?(e.consume(C),i=2,m):C===91?(e.consume(C),i=5,s=0,w):Wt(C)?(e.consume(C),i=4,r.interrupt?t:j):n(C)}function m(C){return C===45?(e.consume(C),r.interrupt?t:j):n(C)}function w(C){const te="CDATA[";return C===te.charCodeAt(s++)?(e.consume(C),s===te.length?r.interrupt?t:y:w):n(C)}function b(C){return Wt(C)?(e.consume(C),a=String.fromCharCode(C),E):n(C)}function E(C){if(C===null||C===47||C===62||at(C)){const te=C===47,ie=a.toLowerCase();return!te&&!o&&hp.includes(ie)?(i=1,r.interrupt?t(C):y(C)):Cw.includes(a.toLowerCase())?(i=6,te?(e.consume(C),h):r.interrupt?t(C):y(C)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(C):o?x(C):g(C))}return C===45||mt(C)?(e.consume(C),a+=String.fromCharCode(C),E):n(C)}function h(C){return C===62?(e.consume(C),r.interrupt?t:y):n(C)}function x(C){return fe(C)?(e.consume(C),x):S(C)}function g(C){return C===47?(e.consume(C),S):C===58||C===95||Wt(C)?(e.consume(C),T):fe(C)?(e.consume(C),g):S(C)}function T(C){return C===45||C===46||C===58||C===95||mt(C)?(e.consume(C),T):_(C)}function _(C){return C===61?(e.consume(C),k):fe(C)?(e.consume(C),_):g(C)}function k(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),u=C,P):fe(C)?(e.consume(C),k):M(C)}function P(C){return C===u?(e.consume(C),u=null,$):C===null||ee(C)?n(C):(e.consume(C),P)}function M(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||at(C)?_(C):(e.consume(C),M)}function $(C){return C===47||C===62||fe(C)?g(C):n(C)}function S(C){return C===62?(e.consume(C),v):n(C)}function v(C){return C===null||ee(C)?y(C):fe(C)?(e.consume(C),v):n(C)}function y(C){return C===45&&i===2?(e.consume(C),D):C===60&&i===1?(e.consume(C),L):C===62&&i===4?(e.consume(C),V):C===63&&i===3?(e.consume(C),j):C===93&&i===5?(e.consume(C),U):ee(C)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Ew,Q,z)(C)):C===null||ee(C)?(e.exit("htmlFlowData"),z(C)):(e.consume(C),y)}function z(C){return e.check(zw,R,Q)(C)}function R(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),I}function I(C){return C===null||ee(C)?z(C):(e.enter("htmlFlowData"),y(C))}function D(C){return C===45?(e.consume(C),j):y(C)}function L(C){return C===47?(e.consume(C),a="",A):y(C)}function A(C){if(C===62){const te=a.toLowerCase();return hp.includes(te)?(e.consume(C),V):y(C)}return Wt(C)&&a.length<8?(e.consume(C),a+=String.fromCharCode(C),A):y(C)}function U(C){return C===93?(e.consume(C),j):y(C)}function j(C){return C===62?(e.consume(C),V):C===45&&i===2?(e.consume(C),j):y(C)}function V(C){return C===null||ee(C)?(e.exit("htmlFlowData"),Q(C)):(e.consume(C),V)}function Q(C){return e.exit("htmlFlow"),t(C)}}function Lw(e,t,n){const r=this;return i;function i(a){return ee(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Aw(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ml,t,n)}}const Iw={name:"htmlText",tokenize:Mw};function Mw(e,t,n){const r=this;let i,o,a;return s;function s(j){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(j),u}function u(j){return j===33?(e.consume(j),c):j===47?(e.consume(j),_):j===63?(e.consume(j),g):Wt(j)?(e.consume(j),M):n(j)}function c(j){return j===45?(e.consume(j),d):j===91?(e.consume(j),o=0,w):Wt(j)?(e.consume(j),x):n(j)}function d(j){return j===45?(e.consume(j),m):n(j)}function p(j){return j===null?n(j):j===45?(e.consume(j),f):ee(j)?(a=p,L(j)):(e.consume(j),p)}function f(j){return j===45?(e.consume(j),m):p(j)}function m(j){return j===62?D(j):j===45?f(j):p(j)}function w(j){const V="CDATA[";return j===V.charCodeAt(o++)?(e.consume(j),o===V.length?b:w):n(j)}function b(j){return j===null?n(j):j===93?(e.consume(j),E):ee(j)?(a=b,L(j)):(e.consume(j),b)}function E(j){return j===93?(e.consume(j),h):b(j)}function h(j){return j===62?D(j):j===93?(e.consume(j),h):b(j)}function x(j){return j===null||j===62?D(j):ee(j)?(a=x,L(j)):(e.consume(j),x)}function g(j){return j===null?n(j):j===63?(e.consume(j),T):ee(j)?(a=g,L(j)):(e.consume(j),g)}function T(j){return j===62?D(j):g(j)}function _(j){return Wt(j)?(e.consume(j),k):n(j)}function k(j){return j===45||mt(j)?(e.consume(j),k):P(j)}function P(j){return ee(j)?(a=P,L(j)):fe(j)?(e.consume(j),P):D(j)}function M(j){return j===45||mt(j)?(e.consume(j),M):j===47||j===62||at(j)?$(j):n(j)}function $(j){return j===47?(e.consume(j),D):j===58||j===95||Wt(j)?(e.consume(j),S):ee(j)?(a=$,L(j)):fe(j)?(e.consume(j),$):D(j)}function S(j){return j===45||j===46||j===58||j===95||mt(j)?(e.consume(j),S):v(j)}function v(j){return j===61?(e.consume(j),y):ee(j)?(a=v,L(j)):fe(j)?(e.consume(j),v):$(j)}function y(j){return j===null||j===60||j===61||j===62||j===96?n(j):j===34||j===39?(e.consume(j),i=j,z):ee(j)?(a=y,L(j)):fe(j)?(e.consume(j),y):(e.consume(j),R)}function z(j){return j===i?(e.consume(j),i=void 0,I):j===null?n(j):ee(j)?(a=z,L(j)):(e.consume(j),z)}function R(j){return j===null||j===34||j===39||j===60||j===61||j===96?n(j):j===47||j===62||at(j)?$(j):(e.consume(j),R)}function I(j){return j===47||j===62||at(j)?$(j):n(j)}function D(j){return j===62?(e.consume(j),e.exit("htmlTextData"),e.exit("htmlText"),t):n(j)}function L(j){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),A}function A(j){return fe(j)?ke(e,U,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):U(j)}function U(j){return e.enter("htmlTextData"),a(j)}}const ic={name:"labelEnd",resolveAll:$w,resolveTo:Fw,tokenize:Bw},Rw={tokenize:Uw},Ow={tokenize:Vw},Dw={tokenize:Ww};function $w(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Qt(e,0,e.length,n),e}function Fw(e,t){let n=e.length,r=0,i,o,a,s;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return s=[["enter",u,t],["enter",c,t]],s=wt(s,e.slice(o+1,o+r+3)),s=wt(s,[["enter",d,t]]),s=wt(s,rc(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),s=wt(s,[["exit",d,t],e[a-2],e[a-1],["exit",c,t]]),s=wt(s,e.slice(a+1)),s=wt(s,[["exit",u,t]]),Qt(e,o,e.length,s),e}function Bw(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return s;function s(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Nr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),u):n(f)}function u(f){return f===40?e.attempt(Rw,d,a?d:p)(f):f===91?e.attempt(Ow,d,a?c:p)(f):a?d(f):p(f)}function c(f){return e.attempt(Dw,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function Uw(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return at(p)?ki(e,o)(p):o(p)}function o(p){return p===41?d(p):yg(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return at(p)?ki(e,u)(p):d(p)}function s(p){return n(p)}function u(p){return p===34||p===39||p===40?bg(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function c(p){return at(p)?ki(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function Vw(e,t,n){const r=this;return i;function i(s){return vg.call(r,e,o,a,"reference","referenceMarker","referenceString")(s)}function o(s){return r.parser.defined.includes(Nr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function a(s){return n(s)}}function Ww(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Hw={name:"labelStartImage",resolveAll:ic.resolveAll,tokenize:qw};function qw(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),o}function o(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),a):n(s)}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Kw={name:"labelStartLink",resolveAll:ic.resolveAll,tokenize:Qw};function Qw(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const ka={name:"lineEnding",tokenize:Gw};function Gw(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),ke(e,t,"linePrefix")}}const Oo={name:"thematicBreak",tokenize:Jw};function Jw(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),a(c)}function a(c){return i=c,s(c)}function s(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||ee(c))?(e.exit("thematicBreak"),t(c)):n(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),fe(c)?ke(e,s,"whitespace")(c):s(c))}}const tt={continuation:{tokenize:e2},exit:n2,name:"list",tokenize:Zw},Yw={partial:!0,tokenize:r2},Xw={partial:!0,tokenize:t2};function Zw(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return s;function s(m){const w=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Os(m)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Oo,n,c)(m):c(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(m)}return n(m)}function u(m){return Os(m)&&++a<10?(e.consume(m),u):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),c(m)):n(m)}function c(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Ml,r.interrupt?n:d,e.attempt(Yw,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return fe(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function e2(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ml,i,o);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ke(e,t,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!fe(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Xw,t,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,ke(e,e.attempt(tt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function t2(e,t,n){const r=this;return ke(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function n2(e){e.exit(this.containerState.type)}function r2(e,t,n){const r=this;return ke(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!fe(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const gp={name:"setextUnderline",resolveTo:i2,tokenize:o2};function i2(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function o2(e,t,n){const r=this;let i;return o;function o(c){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=c,a(c)):n(c)}function a(c){return e.enter("setextHeadingLineSequence"),s(c)}function s(c){return c===i?(e.consume(c),s):(e.exit("setextHeadingLineSequence"),fe(c)?ke(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||ee(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const l2={tokenize:a2};function a2(e){const t=this,n=e.attempt(Ml,r,e.attempt(this.parser.constructs.flowInitial,i,ke(e,e.attempt(this.parser.constructs.flow,i,e.attempt(pw,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const s2={resolveAll:wg()},u2=kg("string"),c2=kg("text");function kg(e){return{resolveAll:wg(e==="text"?d2:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,s);return a;function a(d){return c(d)?o(d):s(d)}function s(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),u}function u(d){return c(d)?(n.exit("data"),o(d)):(n.consume(d),u)}function c(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function wg(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function d2(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,s=0,u;for(;o--;){const c=i[o];if(typeof c=="string"){for(a=c.length;c.charCodeAt(a-1)===32;)s++,a--;if(a)break;a=-1}else if(c===-2)u=!0,s++;else if(c!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const c={type:n===e.length||u||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const p2={42:tt,43:tt,45:tt,48:tt,49:tt,50:tt,51:tt,52:tt,53:tt,54:tt,55:tt,56:tt,57:tt,62:mg},f2={91:xw},m2={[-2]:ba,[-1]:ba,32:ba},h2={35:jw,42:Oo,45:[gp,Oo],60:Nw,61:gp,95:Oo,96:mp,126:mp},g2={38:gg,92:hg},x2={[-5]:ka,[-4]:ka,[-3]:ka,33:Hw,38:gg,42:Ds,60:[Kk,Iw],91:Kw,92:[kw,hg],93:ic,95:Ds,96:lw},y2={null:[Ds,s2]},v2={null:[42,95]},b2={null:[]},k2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:v2,contentInitial:f2,disable:b2,document:p2,flow:h2,flowInitial:m2,insideSpan:y2,string:g2,text:x2},Symbol.toStringTag,{value:"Module"}));function w2(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],s=[];const u={attempt:P(_),check:P(k),consume:x,enter:g,exit:T,interrupt:P(k,{interrupt:!0})},c={code:null,containerState:{},defineSkip:b,events:[],now:w,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function p(v){return a=wt(a,v),E(),a[a.length-1]!==null?[]:(M(t,0),c.events=rc(o,c.events,c),c.events)}function f(v,y){return S2(m(v),y)}function m(v){return j2(a,v)}function w(){const{_bufferIndex:v,_index:y,line:z,column:R,offset:I}=r;return{_bufferIndex:v,_index:y,line:z,column:R,offset:I}}function b(v){i[v.line]=v.column,S()}function E(){let v;for(;r._index<a.length;){const y=a[r._index];if(typeof y=="string")for(v=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===v&&r._bufferIndex<y.length;)h(y.charCodeAt(r._bufferIndex));else h(y)}}function h(v){d=d(v)}function x(v){ee(v)?(r.line++,r.column=1,r.offset+=v===-3?2:1,S()):v!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=v}function g(v,y){const z=y||{};return z.type=v,z.start=w(),c.events.push(["enter",z,c]),s.push(z),z}function T(v){const y=s.pop();return y.end=w(),c.events.push(["exit",y,c]),y}function _(v,y){M(v,y.from)}function k(v,y){y.restore()}function P(v,y){return z;function z(R,I,D){let L,A,U,j;return Array.isArray(R)?Q(R):"tokenize"in R?Q([R]):V(R);function V(de){return B;function B(Y){const oe=Y!==null&&de[Y],me=Y!==null&&de.null,ye=[...Array.isArray(oe)?oe:oe?[oe]:[],...Array.isArray(me)?me:me?[me]:[]];return Q(ye)(Y)}}function Q(de){return L=de,A=0,de.length===0?D:C(de[A])}function C(de){return B;function B(Y){return j=$(),U=de,de.partial||(c.currentConstruct=de),de.name&&c.parser.constructs.disable.null.includes(de.name)?ie():de.tokenize.call(y?Object.assign(Object.create(c),y):c,u,te,ie)(Y)}}function te(de){return v(U,j),I}function ie(de){return j.restore(),++A<L.length?C(L[A]):D}}}function M(v,y){v.resolveAll&&!o.includes(v)&&o.push(v),v.resolve&&Qt(c.events,y,c.events.length-y,v.resolve(c.events.slice(y),c)),v.resolveTo&&(c.events=v.resolveTo(c.events,c))}function $(){const v=w(),y=c.previous,z=c.currentConstruct,R=c.events.length,I=Array.from(s);return{from:R,restore:D};function D(){r=v,c.previous=y,c.currentConstruct=z,c.events.length=R,s=I,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function j2(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const s=a[0];typeof s=="string"?a[0]=s.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function S2(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function _2(e){const r={constructs:Lk([k2,...(e||{}).extensions||[]]),content:i(Fk),defined:[],document:i(Uk),flow:i(l2),lazy:{},string:i(u2),text:i(c2)};return r;function i(o){return a;function a(s){return w2(r,o,s)}}}function C2(e){for(;!xg(e););return e}const xp=/[\0\t\n\r]/g;function N2(){let e=1,t="",n=!0,r;return i;function i(o,a,s){const u=[];let c,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(xp.lastIndex=p,c=xp.exec(o),f=c&&c.index!==void 0?c.index:o.length,m=o.charCodeAt(f),!c){t=o.slice(p);break}if(m===10&&p===f&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),p<f&&(u.push(o.slice(p,f)),e+=f-p),m){case 0:{u.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,u.push(-2);e++<d;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return s&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const E2=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function z2(e){return e.replace(E2,T2)}function T2(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return fg(n.slice(o?2:1),o?16:10)}return nc(n)||e}const jg={}.hasOwnProperty;function P2(e,t,n){return typeof t!="string"&&(n=t,t=void 0),L2(n)(C2(_2(n).document().write(N2()(e,t,!0))))}function L2(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(_e),autolinkProtocol:$,autolinkEmail:$,atxHeading:o(Me),blockQuote:o(me),characterEscape:$,characterReference:$,codeFenced:o(ye),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(ye,a),codeText:o(ue,a),codeTextData:$,data:$,codeFlowValue:$,definition:o(vt),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(Et),hardBreakEscape:o(In),hardBreakTrailing:o(In),htmlFlow:o(F,a),htmlFlowData:$,htmlText:o(F,a),htmlTextData:$,image:o(ce),label:a,link:o(_e),listItem:o(W),listItemValue:f,listOrdered:o(et,p),listUnordered:o(et),paragraph:o(X),reference:C,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(Me),strong:o(Z),thematicBreak:o(ge)},exit:{atxHeading:u(),atxHeadingSequence:_,autolink:u(),autolinkEmail:oe,autolinkProtocol:Y,blockQuote:u(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:ie,characterReferenceMarkerNumeric:ie,characterReferenceValue:de,characterReference:B,codeFenced:u(E),codeFencedFence:b,codeFencedFenceInfo:m,codeFencedFenceMeta:w,codeFlowValue:S,codeIndented:u(h),codeText:u(I),codeTextData:S,data:S,definition:u(),definitionDestinationString:T,definitionLabelString:x,definitionTitleString:g,emphasis:u(),hardBreakEscape:u(y),hardBreakTrailing:u(y),htmlFlow:u(z),htmlFlowData:S,htmlText:u(R),htmlTextData:S,image:u(L),label:U,labelText:A,lineEnding:v,link:u(D),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:te,resourceDestinationString:j,resourceTitleString:V,resource:Q,setextHeading:u(M),setextHeadingLineSequence:P,setextHeadingText:k,strong:u(),thematicBreak:u()}};Sg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(O){let K={type:"root",children:[]};const ne={stack:[K],tokenStack:[],config:t,enter:s,exit:c,buffer:a,resume:d,data:n},le=[];let xe=-1;for(;++xe<O.length;)if(O[xe][1].type==="listOrdered"||O[xe][1].type==="listUnordered")if(O[xe][0]==="enter")le.push(xe);else{const zt=le.pop();xe=i(O,zt,xe)}for(xe=-1;++xe<O.length;){const zt=t[O[xe][0]];jg.call(zt,O[xe][1].type)&&zt[O[xe][1].type].call(Object.assign({sliceSerialize:O[xe][2].sliceSerialize},ne),O[xe][1])}if(ne.tokenStack.length>0){const zt=ne.tokenStack[ne.tokenStack.length-1];(zt[1]||yp).call(ne,void 0,zt[0])}for(K.position={start:un(O.length>0?O[0][1].start:{line:1,column:1,offset:0}),end:un(O.length>0?O[O.length-2][1].end:{line:1,column:1,offset:0})},xe=-1;++xe<t.transforms.length;)K=t.transforms[xe](K)||K;return K}function i(O,K,ne){let le=K-1,xe=-1,zt=!1,Mn,Gt,Wr,Hr;for(;++le<=ne;){const ut=O[le];switch(ut[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ut[0]==="enter"?xe++:xe--,Hr=void 0;break}case"lineEndingBlank":{ut[0]==="enter"&&(Mn&&!Hr&&!xe&&!Wr&&(Wr=le),Hr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Hr=void 0}if(!xe&&ut[0]==="enter"&&ut[1].type==="listItemPrefix"||xe===-1&&ut[0]==="exit"&&(ut[1].type==="listUnordered"||ut[1].type==="listOrdered")){if(Mn){let tr=le;for(Gt=void 0;tr--;){const Jt=O[tr];if(Jt[1].type==="lineEnding"||Jt[1].type==="lineEndingBlank"){if(Jt[0]==="exit")continue;Gt&&(O[Gt][1].type="lineEndingBlank",zt=!0),Jt[1].type="lineEnding",Gt=tr}else if(!(Jt[1].type==="linePrefix"||Jt[1].type==="blockQuotePrefix"||Jt[1].type==="blockQuotePrefixWhitespace"||Jt[1].type==="blockQuoteMarker"||Jt[1].type==="listItemIndent"))break}Wr&&(!Gt||Wr<Gt)&&(Mn._spread=!0),Mn.end=Object.assign({},Gt?O[Gt][1].start:ut[1].end),O.splice(Gt||le,0,["exit",Mn,ut[2]]),le++,ne++}if(ut[1].type==="listItemPrefix"){const tr={type:"listItem",_spread:!1,start:Object.assign({},ut[1].start),end:void 0};Mn=tr,O.splice(le,0,["enter",tr,ut[2]]),le++,ne++,Wr=void 0,Hr=!0}}}return O[K][1]._spread=zt,ne}function o(O,K){return ne;function ne(le){s.call(this,O(le),le),K&&K.call(this,le)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(O,K,ne){this.stack[this.stack.length-1].children.push(O),this.stack.push(O),this.tokenStack.push([K,ne||void 0]),O.position={start:un(K.start),end:void 0}}function u(O){return K;function K(ne){O&&O.call(this,ne),c.call(this,ne)}}function c(O,K){const ne=this.stack.pop(),le=this.tokenStack.pop();if(le)le[0].type!==O.type&&(K?K.call(this,O,le[0]):(le[1]||yp).call(this,O,le[0]));else throw new Error("Cannot close `"+O.type+"` ("+bi({start:O.start,end:O.end})+"): it’s not open");ne.position.end=un(O.end)}function d(){return Tk(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(O){if(this.data.expectingFirstListItemValue){const K=this.stack[this.stack.length-2];K.start=Number.parseInt(this.sliceSerialize(O),10),this.data.expectingFirstListItemValue=void 0}}function m(){const O=this.resume(),K=this.stack[this.stack.length-1];K.lang=O}function w(){const O=this.resume(),K=this.stack[this.stack.length-1];K.meta=O}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const O=this.resume(),K=this.stack[this.stack.length-1];K.value=O.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const O=this.resume(),K=this.stack[this.stack.length-1];K.value=O.replace(/(\r?\n|\r)$/g,"")}function x(O){const K=this.resume(),ne=this.stack[this.stack.length-1];ne.label=K,ne.identifier=Nr(this.sliceSerialize(O)).toLowerCase()}function g(){const O=this.resume(),K=this.stack[this.stack.length-1];K.title=O}function T(){const O=this.resume(),K=this.stack[this.stack.length-1];K.url=O}function _(O){const K=this.stack[this.stack.length-1];if(!K.depth){const ne=this.sliceSerialize(O).length;K.depth=ne}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function P(O){const K=this.stack[this.stack.length-1];K.depth=this.sliceSerialize(O).codePointAt(0)===61?1:2}function M(){this.data.setextHeadingSlurpLineEnding=void 0}function $(O){const ne=this.stack[this.stack.length-1].children;let le=ne[ne.length-1];(!le||le.type!=="text")&&(le=se(),le.position={start:un(O.start),end:void 0},ne.push(le)),this.stack.push(le)}function S(O){const K=this.stack.pop();K.value+=this.sliceSerialize(O),K.position.end=un(O.end)}function v(O){const K=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ne=K.children[K.children.length-1];ne.position.end=un(O.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(K.type)&&($.call(this,O),S.call(this,O))}function y(){this.data.atHardBreak=!0}function z(){const O=this.resume(),K=this.stack[this.stack.length-1];K.value=O}function R(){const O=this.resume(),K=this.stack[this.stack.length-1];K.value=O}function I(){const O=this.resume(),K=this.stack[this.stack.length-1];K.value=O}function D(){const O=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";O.type+="Reference",O.referenceType=K,delete O.url,delete O.title}else delete O.identifier,delete O.label;this.data.referenceType=void 0}function L(){const O=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";O.type+="Reference",O.referenceType=K,delete O.url,delete O.title}else delete O.identifier,delete O.label;this.data.referenceType=void 0}function A(O){const K=this.sliceSerialize(O),ne=this.stack[this.stack.length-2];ne.label=z2(K),ne.identifier=Nr(K).toLowerCase()}function U(){const O=this.stack[this.stack.length-1],K=this.resume(),ne=this.stack[this.stack.length-1];if(this.data.inReference=!0,ne.type==="link"){const le=O.children;ne.children=le}else ne.alt=K}function j(){const O=this.resume(),K=this.stack[this.stack.length-1];K.url=O}function V(){const O=this.resume(),K=this.stack[this.stack.length-1];K.title=O}function Q(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function te(O){const K=this.resume(),ne=this.stack[this.stack.length-1];ne.label=K,ne.identifier=Nr(this.sliceSerialize(O)).toLowerCase(),this.data.referenceType="full"}function ie(O){this.data.characterReferenceType=O.type}function de(O){const K=this.sliceSerialize(O),ne=this.data.characterReferenceType;let le;ne?(le=fg(K,ne==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):le=nc(K);const xe=this.stack[this.stack.length-1];xe.value+=le}function B(O){const K=this.stack.pop();K.position.end=un(O.end)}function Y(O){S.call(this,O);const K=this.stack[this.stack.length-1];K.url=this.sliceSerialize(O)}function oe(O){S.call(this,O);const K=this.stack[this.stack.length-1];K.url="mailto:"+this.sliceSerialize(O)}function me(){return{type:"blockquote",children:[]}}function ye(){return{type:"code",lang:null,meta:null,value:""}}function ue(){return{type:"inlineCode",value:""}}function vt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Et(){return{type:"emphasis",children:[]}}function Me(){return{type:"heading",depth:0,children:[]}}function In(){return{type:"break"}}function F(){return{type:"html",value:""}}function ce(){return{type:"image",title:null,url:"",alt:null}}function _e(){return{type:"link",title:null,url:"",children:[]}}function et(O){return{type:"list",ordered:O.type==="listOrdered",start:null,spread:O._spread,children:[]}}function W(O){return{type:"listItem",spread:O._spread,checked:null,children:[]}}function X(){return{type:"paragraph",children:[]}}function Z(){return{type:"strong",children:[]}}function se(){return{type:"text",value:""}}function ge(){return{type:"thematicBreak"}}}function un(e){return{line:e.line,column:e.column,offset:e.offset}}function Sg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Sg(e,r):A2(e,r)}}function A2(e,t){let n;for(n in t)if(jg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function yp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+bi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+bi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+bi({start:t.start,end:t.end})+") is still open")}function I2(e){const t=this;t.parser=n;function n(r){return P2(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function M2(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function R2(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function O2(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function D2(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function $2(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function F2(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Vr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(r,s);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function B2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function U2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function _g(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function V2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return _g(e,t);const i={src:Vr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function W2(e,t){const n={src:Vr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function H2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function q2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return _g(e,t);const i={href:Vr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function K2(e,t){const n={href:Vr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Q2(e,t,n){const r=e.all(t),i=n?G2(n):Cg(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const d=r[s];(i||s!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&a.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,c),e.applyData(t,c)}function G2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Cg(n[r])}return t}function Cg(e){const t=e.spread;return t??e.children.length>1}function J2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function Y2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function X2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Z2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ej(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=Xu(t.children[1]),u=lg(t.children[t.children.length-1]);s&&u&&(a.position={start:s,end:u}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function tj(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,s=a?a.length:t.children.length;let u=-1;const c=[];for(;++u<s;){const p=t.children[u],f={},m=a?a[u]:void 0;m&&(f.align=m);let w={type:"element",tagName:o,properties:f,children:[]};p&&(w.children=e.all(p),e.patch(p,w),w=e.applyData(p,w)),c.push(w)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,d),e.applyData(t,d)}function nj(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const vp=9,bp=32;function rj(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(kp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(kp(t.slice(i),i>0,!1)),o.join("")}function kp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===vp||o===bp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===vp||o===bp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function ij(e,t){const n={type:"text",value:rj(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function oj(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const lj={blockquote:M2,break:R2,code:O2,delete:D2,emphasis:$2,footnoteReference:F2,heading:B2,html:U2,imageReference:V2,image:W2,inlineCode:H2,linkReference:q2,link:K2,listItem:Q2,list:J2,paragraph:Y2,root:X2,strong:Z2,table:ej,tableCell:nj,tableRow:tj,text:ij,thematicBreak:oj,toml:ko,yaml:ko,definition:ko,footnoteDefinition:ko};function ko(){}const Ng=-1,Rl=0,wi=1,dl=2,oc=3,lc=4,ac=5,sc=6,Eg=7,zg=8,wp=typeof self=="object"?self:globalThis,aj=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case Rl:case Ng:return n(a,i);case wi:{const s=n([],i);for(const u of a)s.push(r(u));return s}case dl:{const s=n({},i);for(const[u,c]of a)s[r(u)]=r(c);return s}case oc:return n(new Date(a),i);case lc:{const{source:s,flags:u}=a;return n(new RegExp(s,u),i)}case ac:{const s=n(new Map,i);for(const[u,c]of a)s.set(r(u),r(c));return s}case sc:{const s=n(new Set,i);for(const u of a)s.add(r(u));return s}case Eg:{const{name:s,message:u}=a;return n(new wp[s](u),i)}case zg:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:s}=new Uint8Array(a);return n(new DataView(s),a)}}return n(new wp[o](a),i)};return r},jp=e=>aj(new Map,e)(0),ir="",{toString:sj}={},{keys:uj}=Object,ti=e=>{const t=typeof e;if(t!=="object"||!e)return[Rl,t];const n=sj.call(e).slice(8,-1);switch(n){case"Array":return[wi,ir];case"Object":return[dl,ir];case"Date":return[oc,ir];case"RegExp":return[lc,ir];case"Map":return[ac,ir];case"Set":return[sc,ir];case"DataView":return[wi,n]}return n.includes("Array")?[wi,n]:n.includes("Error")?[Eg,n]:[dl,n]},wo=([e,t])=>e===Rl&&(t==="function"||t==="symbol"),cj=(e,t,n,r)=>{const i=(a,s)=>{const u=r.push(a)-1;return n.set(s,u),u},o=a=>{if(n.has(a))return n.get(a);let[s,u]=ti(a);switch(s){case Rl:{let d=a;switch(u){case"bigint":s=zg,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([Ng],a)}return i([s,d],a)}case wi:{if(u){let f=a;return u==="DataView"?f=new Uint8Array(a.buffer):u==="ArrayBuffer"&&(f=new Uint8Array(a)),i([u,[...f]],a)}const d=[],p=i([s,d],a);for(const f of a)d.push(o(f));return p}case dl:{if(u)switch(u){case"BigInt":return i([u,a.toString()],a);case"Boolean":case"Number":case"String":return i([u,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([s,d],a);for(const f of uj(a))(e||!wo(ti(a[f])))&&d.push([o(f),o(a[f])]);return p}case oc:return i([s,a.toISOString()],a);case lc:{const{source:d,flags:p}=a;return i([s,{source:d,flags:p}],a)}case ac:{const d=[],p=i([s,d],a);for(const[f,m]of a)(e||!(wo(ti(f))||wo(ti(m))))&&d.push([o(f),o(m)]);return p}case sc:{const d=[],p=i([s,d],a);for(const f of a)(e||!wo(ti(f)))&&d.push(o(f));return p}}const{message:c}=a;return i([s,{name:u,message:c}],a)};return o},Sp=(e,{json:t,lossy:n}={})=>{const r=[];return cj(!(t||n),!!t,new Map,r)(e),r},pl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?jp(Sp(e,t)):structuredClone(e):(e,t)=>jp(Sp(e,t));function dj(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function pj(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function fj(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||dj,r=e.options.footnoteBackLabel||pj,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const d=e.all(c),p=String(c.identifier).toUpperCase(),f=Vr(p.toLowerCase());let m=0;const w=[],b=e.footnoteCounts.get(p);for(;b!==void 0&&++m<=b;){w.length>0&&w.push({type:"text",value:" "});let x=typeof n=="string"?n:n(u,m);typeof x=="string"&&(x={type:"text",value:x}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,m),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const E=d[d.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const x=E.children[E.children.length-1];x&&x.type==="text"?x.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...w)}else d.push(...w);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(c,h),s.push(h)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...pl(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const Tg=function(e){if(e==null)return xj;if(typeof e=="function")return Ol(e);if(typeof e=="object")return Array.isArray(e)?mj(e):hj(e);if(typeof e=="string")return gj(e);throw new Error("Expected function, string, or object as test")};function mj(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Tg(e[n]);return Ol(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function hj(e){const t=e;return Ol(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function gj(e){return Ol(t);function t(n){return n&&n.type===e}}function Ol(e){return t;function t(n,r,i){return!!(yj(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function xj(){return!0}function yj(e){return e!==null&&typeof e=="object"&&"type"in e}const Pg=[],vj=!0,_p=!1,bj="skip";function kj(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Tg(i),a=r?-1:1;s(e,void 0,[])();function s(u,c,d){const p=u&&typeof u=="object"?u:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(u.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Pg,w,b,E;if((!t||o(u,c,d[d.length-1]||void 0))&&(m=wj(n(u,d)),m[0]===_p))return m;if("children"in u&&u.children){const h=u;if(h.children&&m[0]!==bj)for(b=(r?h.children.length:-1)+a,E=d.concat(h);b>-1&&b<h.children.length;){const x=h.children[b];if(w=s(x,b,E)(),w[0]===_p)return w;b=typeof w[1]=="number"?w[1]:b+a}}return m}}}function wj(e){return Array.isArray(e)?e:typeof e=="number"?[vj,e]:e==null?Pg:[e]}function Lg(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),kj(e,o,s,i);function s(u,c){const d=c[c.length-1],p=d?d.children.indexOf(u):void 0;return a(u,p,d)}}const $s={}.hasOwnProperty,jj={};function Sj(e,t){const n=t||jj,r=new Map,i=new Map,o=new Map,a={...lj,...n.handlers},s={all:c,applyData:Cj,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:u,options:n,patch:_j,wrap:Ej};return Lg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),s;function u(d,p){const f=d.type,m=s.handlers[f];if($s.call(s.handlers,f)&&m)return m(s,d,p);if(s.options.passThrough&&s.options.passThrough.includes(f)){if("children"in d){const{children:b,...E}=d,h=pl(E);return h.children=s.all(d),h}return pl(d)}return(s.options.unknownHandler||Nj)(s,d,p)}function c(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const w=s.one(f[m],d);if(w){if(m&&f[m-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Cp(w.value)),!Array.isArray(w)&&w.type==="element")){const b=w.children[0];b&&b.type==="text"&&(b.value=Cp(b.value))}Array.isArray(w)?p.push(...w):p.push(w)}}}return p}}function _j(e,t){e.position&&(t.position=sk(e))}function Cj(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,pl(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Nj(e,t){const n=t.data||{},r="value"in t&&!($s.call(n,"hProperties")||$s.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ej(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Cp(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Np(e,t){const n=Sj(e,t),r=n.one(e,void 0),i=fj(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function zj(e,t){return e&&"run"in e?async function(n,r){const i=Np(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Np(n,{file:r,...e||t})}}function Ep(e){if(e)throw e}var Do=Object.prototype.hasOwnProperty,Ag=Object.prototype.toString,zp=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,Pp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Ag.call(t)==="[object Array]"},Lp=function(t){if(!t||Ag.call(t)!=="[object Object]")return!1;var n=Do.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Do.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Do.call(t,i)},Ap=function(t,n){zp&&n.name==="__proto__"?zp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Ip=function(t,n){if(n==="__proto__")if(Do.call(t,n)){if(Tp)return Tp(t,n).value}else return;return t[n]},Tj=function e(){var t,n,r,i,o,a,s=arguments[0],u=1,c=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},u=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});u<c;++u)if(t=arguments[u],t!=null)for(n in t)r=Ip(s,n),i=Ip(t,n),s!==i&&(d&&i&&(Lp(i)||(o=Pp(i)))?(o?(o=!1,a=r&&Pp(r)?r:[]):a=r&&Lp(r)?r:{},Ap(s,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Ap(s,{name:n,newValue:i}));return s};const wa=ml(Tj);function Fs(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Pj(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...i);function s(u,...c){const d=e[++o];let p=-1;if(u){a(u);return}for(;++p<i.length;)(c[p]===null||c[p]===void 0)&&(c[p]=i[p]);i=c,d?Lj(d,s)(...c):a(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Lj(e,t){let n;return r;function r(...a){const s=e.length>a.length;let u;s&&a.push(i);try{u=e.apply(this,a)}catch(c){const d=c;if(s&&n)throw d;return i(d)}s||(u&&u.then&&typeof u.then=="function"?u.then(o,i):u instanceof Error?i(u):o(u))}function i(a,...s){n||(n=!0,t(a,...s))}function o(a){i(null,a)}}const Ut={basename:Aj,dirname:Ij,extname:Mj,join:Rj,sep:"/"};function Aj(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');eo(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function Ij(e){if(eo(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Mj(e){eo(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const s=e.codePointAt(t);if(s===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),s===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Rj(...e){let t=-1,n;for(;++t<e.length;)eo(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Oj(n)}function Oj(e){eo(e);const t=e.codePointAt(0)===47;let n=Dj(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Dj(e,t){let n="",r=0,i=-1,o=0,a=-1,s,u;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else s===46&&o>-1?o++:o=-1}return n}function eo(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const $j={cwd:Fj};function Fj(){return"/"}function Bs(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Bj(e){if(typeof e=="string")e=new URL(e);else if(!Bs(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Uj(e)}function Uj(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const ja=["history","path","basename","stem","extname","dirname"];class Ig{constructor(t){let n;t?Bs(t)?n={path:t}:typeof t=="string"||Vj(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":$j.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ja.length;){const o=ja[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)ja.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Ut.basename(this.path):void 0}set basename(t){_a(t,"basename"),Sa(t,"basename"),this.path=Ut.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ut.dirname(this.path):void 0}set dirname(t){Mp(this.basename,"dirname"),this.path=Ut.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ut.extname(this.path):void 0}set extname(t){if(Sa(t,"extname"),Mp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ut.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Bs(t)&&(t=Bj(t)),_a(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ut.basename(this.path,this.extname):void 0}set stem(t){_a(t,"stem"),Sa(t,"stem"),this.path=Ut.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Qe(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Sa(e,t){if(e&&e.includes(Ut.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ut.sep+"`")}function _a(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Mp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Vj(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Wj=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},Hj={}.hasOwnProperty;class uc extends Wj{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Pj()}copy(){const t=new uc;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(wa(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ea("data",this.frozen),this.namespace[t]=n,this):Hj.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ea("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=jo(t),r=this.parser||this.Parser;return Ca("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ca("process",this.parser||this.Parser),Na("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const s=jo(t),u=r.parse(s);r.run(u,s,function(d,p,f){if(d||!p||!f)return c(d);const m=p,w=r.stringify(m,f);Qj(w)?f.value=w:f.result=w,c(d,f)});function c(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Ca("processSync",this.parser||this.Parser),Na("processSync",this.compiler||this.Compiler),this.process(t,i),Op("processSync","process",n),r;function i(o,a){n=!0,Ep(o),r=a}}run(t,n,r){Rp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,s){const u=jo(n);i.run(t,u,c);function c(d,p,f){const m=p||t;d?s(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Op("runSync","run",r),i;function o(a,s){Ep(a),i=s,r=!0}}stringify(t,n){this.freeze();const r=jo(n),i=this.compiler||this.Compiler;return Na("stringify",i),Rp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ea("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...p]=c;u(d,p)}else a(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function a(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(c.plugins),c.settings&&(i.settings=wa(!0,i.settings,c.settings))}function s(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const p=c[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===c){f=p;break}if(f===-1)r.push([c,...d]);else if(d.length>0){let[m,...w]=d;const b=r[f][1];Fs(b)&&Fs(m)&&(m=wa(!0,b,m)),r[f]=[c,m,...w]}}}}const qj=new uc().freeze();function Ca(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Na(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ea(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Rp(e){if(!Fs(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Op(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function jo(e){return Kj(e)?e:new Ig(e)}function Kj(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Qj(e){return typeof e=="string"||Gj(e)}function Gj(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Jj="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Dp=[],$p={allowDangerousHtml:!0},Yj=/^(https?|ircs?|mailto|xmpp)$/i,Xj=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Mg(e){const t=Zj(e),n=eS(e);return tS(t.runSync(t.parse(n),n),e)}function Zj(e){const t=e.rehypePlugins||Dp,n=e.remarkPlugins||Dp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...$p}:$p;return qj().use(I2).use(n).use(zj,r).use(t)}function eS(e){const t=e.children||"",n=new Ig;return typeof t=="string"&&(n.value=t),n}function tS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,s=t.unwrapDisallowed,u=t.urlTransform||nS;for(const d of Xj)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+Jj+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Lg(e,c),fk(e,{Fragment:l.Fragment,components:i,ignoreInvalidStyle:!0,jsx:l.jsx,jsxs:l.jsxs,passKeys:!0,passNode:!0});function c(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in va)if(Object.hasOwn(va,m)&&Object.hasOwn(d.properties,m)){const w=d.properties[m],b=va[m];(b===null||b.includes(d.tagName))&&(d.properties[m]=u(String(w||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return s&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function nS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Yj.test(e.slice(0,t))?e:""}function rS({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=N.useState(!1),[a,s]=N.useState(r),u=N.useRef(null),c=N.useRef(null);N.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));s(m)}},[e,r]),N.useEffect(()=>{i&&c.current&&c.current.focus()},[i]);function d(f){c.current=f,f.focus()}function p(f){u.current&&!u.current.contains(f.target)&&o(!1)}return N.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),l.jsxs("div",{ref:u,className:"markdown-editor",children:[l.jsx("style",{children:`
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
      `}),i?l.jsx("div",{className:"monaco-wrapper",children:l.jsx(Or,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):l.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[l.jsxs("span",{className:"edit-hint",children:[l.jsx(K1,{size:12}),"Click to edit"]}),e?l.jsx("div",{className:"markdown-content",children:l.jsx(Mg,{children:e})}):l.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function iS(e){return/^[a-zA-Z0-9_]+$/.test(e)}function oS({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=Nt(),[s,u]=N.useState(new Set(["basic","model","tools","subagents"])),[c,d]=N.useState(!1),[p,f]=N.useState(!1),[m,w]=N.useState(!1),[b,E]=N.useState(""),[h,x]=N.useState(null);if(!t)return null;function g(L){n(e.id,L)}function T(L){if(L===""){x(null),g({name:L});return}iS(L)?x(null):x("Name can only contain letters, numbers, and underscores"),g({name:L})}function _(L){const A=new Set(s);A.has(L)?A.delete(L):A.add(L),u(A)}const k=e.type==="LlmAgent",P=e;function M(L){k&&g({tools:[...P.tools,L]})}function $(L){k&&g({tools:P.tools.filter((A,U)=>U!==L)})}function S(L,A){if(!k)return;const U=[...P.tools];U[L]=A,g({tools:U})}function v(L){"sub_agents"in e&&g({sub_agents:[...e.sub_agents,L]})}function y(L){"sub_agents"in e&&g({sub_agents:e.sub_agents.filter(A=>A!==L)})}const z=t.agents.filter(L=>L.id!==e.id);async function R(){if(!(!t||!k)){d(!0);try{const L=P.instruction||"",A=L?`Current instruction to improve:

${L}

Please improve and expand this instruction while preserving its core intent.`:void 0,j=t.agents.some(Q=>Q.id===e.id)?void 0:e,V=await Ro(t.id,e.id,A,j);V.success&&V.prompt?g({instruction:V.prompt}):alert("Failed to generate prompt: "+(V.error||"Unknown error"))}catch(L){alert("Error generating prompt: "+L.message)}finally{d(!1)}}}async function I(){if(!(!t||!k||!b.trim())){d(!0);try{const A=`Current instruction:

${P.instruction||""}

---

Requested changes:
${b}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,j=t.agents.some(Q=>Q.id===e.id)?void 0:e,V=await Ro(t.id,e.id,A,j);V.success&&V.prompt?(g({instruction:V.prompt}),w(!1),E("")):alert("Failed to apply changes: "+(V.error||"Unknown error"))}catch(L){alert("Error applying changes: "+L.message)}finally{d(!1)}}}async function D(){if(!t||!k)return;const L=P.instruction;if(!L){alert("Please write an instruction first");return}f(!0);try{const A=`Write a 5-10 word description of what this agent does.

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
${L.slice(0,500)}

Your response (5-10 words only):`,U=await Ro(t.id,e.id,A);if(U.success&&U.prompt){let j=U.prompt.trim();j=j.replace(/^["']|["']$/g,"").trim();const V=j.split(/[.!?\n]/)[0].trim(),Q=V.length>80?V.slice(0,77)+"...":V;g({description:Q})}else alert("Failed to generate description: "+(U.error||"Unknown error"))}catch(A){alert("Error generating description: "+A.message)}finally{f(!1)}}return l.jsxs("div",{className:"agent-editor",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"editor-header",children:[l.jsx(qn,{size:24,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx("input",{type:"text",value:e.name,onChange:L=>T(L.target.value),placeholder:"Agent name",style:{borderColor:h?"var(--error)":void 0}}),h&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:h})]}),l.jsx("span",{className:"badge badge-info",children:e.type}),l.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[l.jsx(Un,{size:14}),"Run"]})]}),l.jsxs("div",{className:"editor-content",children:[l.jsxs(ni,{id:"basic",title:"Basic Info",icon:l.jsx(qn,{size:16}),expanded:s.has("basic"),onToggle:()=>_("basic"),children:[l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("div",{className:"label-with-action",children:[l.jsx("label",{children:"Description"}),k&&P.instruction&&l.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:D,disabled:p,title:"Generate description from instruction",children:p?l.jsxs(l.Fragment,{children:[l.jsx(Rr,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),l.jsx("input",{type:"text",value:e.description,onChange:L=>g({description:L.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),k&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("div",{className:"label-with-action",children:[l.jsx("label",{children:"Instruction"}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>w(!m),disabled:c||!P.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:R,disabled:c,title:"Uses AI to improve and expand the current instruction",children:c?l.jsxs(l.Fragment,{children:[l.jsx(Rr,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&l.jsxs("div",{className:"request-changes-box",children:[l.jsx("input",{type:"text",value:b,onChange:L=>E(L.target.value),placeholder:"Describe what changes you want...",onKeyDown:L=>{L.key==="Enter"&&b.trim()?I():L.key==="Escape"&&(w(!1),E(""))},autoFocus:!0}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:I,disabled:c||!b.trim(),children:"Apply"})]}),l.jsx(rS,{value:P.instruction,onChange:L=>g({instruction:L}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Output Key"}),l.jsxs("select",{value:P.output_key||"",onChange:L=>g({output_key:L.target.value||void 0}),children:[l.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(L=>l.jsx("option",{value:L.name,children:L.name},L.name))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Include Contents"}),l.jsxs("select",{value:P.include_contents,onChange:L=>g({include_contents:L.target.value}),children:[l.jsx("option",{value:"default",children:"Default"}),l.jsx("option",{value:"none",children:"None"})]})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"disallow-parent",checked:P.disallow_transfer_to_parent,onChange:L=>g({disallow_transfer_to_parent:L.target.checked})}),l.jsx("label",{htmlFor:"disallow-parent",children:"Disallow transfer to parent"})]}),l.jsxs("div",{className:"checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"disallow-peers",checked:P.disallow_transfer_to_peers,onChange:L=>g({disallow_transfer_to_peers:L.target.checked})}),l.jsx("label",{htmlFor:"disallow-peers",children:"Disallow transfer to peers"})]})]})]}),e.type==="LoopAgent"&&l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Iterations"}),l.jsx("input",{type:"number",value:e.max_iterations||"",onChange:L=>g({max_iterations:parseInt(L.target.value)||void 0}),placeholder:"No limit"})]})})]}),k&&l.jsx(ni,{id:"model",title:"Model",icon:l.jsx(Wu,{size:16}),expanded:s.has("model"),onToggle:()=>_("model"),children:l.jsx(aS,{agent:P,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,onUpdate:L=>g({model:L})})}),k&&l.jsx(ni,{id:"tools",title:`Tools (${P.tools.length})`,icon:l.jsx(Kt,{size:16}),expanded:s.has("tools"),onToggle:()=>_("tools"),children:l.jsx(lS,{tools:P.tools,onAdd:M,onRemove:$,onUpdate:S,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:z})}),k&&l.jsx(ni,{id:"callbacks",title:"Callbacks",icon:l.jsx(En,{size:16}),expanded:s.has("callbacks"),onToggle:()=>_("callbacks"),children:l.jsx(sS,{agent:P,onUpdate:g,customCallbacks:t.custom_callbacks||[]})}),"sub_agents"in e&&l.jsx(ni,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:l.jsx(e0,{size:16}),expanded:s.has("subagents"),onToggle:()=>_("subagents"),children:l.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(L=>{const A=t.agents.find(U=>U.id===L);return A?l.jsxs("div",{className:"sub-agent-chip",children:[A.name,l.jsx("button",{onClick:()=>y(L),children:l.jsx(Je,{size:12})})]},L):null}),l.jsxs("select",{value:"",onChange:L=>{L.target.value&&v(L.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[l.jsx("option",{value:"",children:"Add agent..."}),z.filter(L=>!e.sub_agents.includes(L.id)).map(L=>l.jsx("option",{value:L.id,children:L.name},L.id))]})]})})]})]})}function ni({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-header",onClick:i,children:[r?l.jsx(At,{size:16}):l.jsx(It,{size:16}),l.jsxs("h4",{children:[n," ",t]})]}),r&&l.jsx("div",{className:"section-content",children:o})]})}function lS({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:s,agents:u}){const[c,d]=N.useState(!1),[p,f]=N.useState({}),m=Rt.useRef(null),[w,b]=N.useState(null),[E,h]=N.useState(new Set);function x(){if(m.current){const y=m.current.getBoundingClientRect(),z=window.innerHeight,R=350,I=z-y.bottom-16,D=y.top-16;if(I>=200||I>=D){const L=Math.min(R,I);f({top:y.bottom+4,left:y.left,maxHeight:L})}else{const L=Math.min(R,D);f({top:y.top-L-4,left:y.left,maxHeight:L})}}d(!0)}function g(y){t({type:"builtin",name:y}),d(!1)}async function T(y){d(!1);const z=y.tool_filter||[];if(b({server:y,enabledTools:new Set(z),availableTools:z.map(R=>({name:R,description:""})),isLoading:z.length===0,error:void 0}),z.length===0)try{const{testMcpServer:R}=await Wh(async()=>{const{testMcpServer:D}=await Promise.resolve().then(()=>$1);return{testMcpServer:D}},void 0),I=await R({connection_type:y.connection_type,command:y.command,args:y.args,env:y.env,url:y.url,headers:y.headers,timeout:y.timeout||30});I.success?b(D=>D?{...D,availableTools:I.tools,enabledTools:new Set(I.tools.map(L=>L.name)),isLoading:!1}:null):b(D=>D?{...D,isLoading:!1,error:I.error||"Failed to connect to MCP server"}:null)}catch(R){b(I=>I?{...I,isLoading:!1,error:R.message}:null)}}function _(y){if(!w)return;const z=new Set(w.enabledTools);z.has(y)?z.delete(y):z.add(y),b({...w,enabledTools:z})}function k(){if(!w)return;const y=Array.from(w.enabledTools);t({type:"mcp",server:{...w.server,tool_filter:y}}),b(null)}function P(y){const z=new Set(E);z.has(y)?z.delete(y):z.add(y),h(z)}function M(y,z){const R=e[y];if(R.type!=="mcp"||!R.server)return;const I=R.server.tool_filter||[];let D;I.includes(z)?D=I.filter(L=>L!==z):D=[...I,z],r(y,{...R,server:{...R.server,tool_filter:D}})}function $(y){t({type:"function",name:y.name,module_path:y.module_path}),d(!1)}function S(y){const z=u.find(R=>R.id===y);t({type:"agent",agent_id:y,name:z==null?void 0:z.name}),d(!1)}function v(y){return o.find(z=>z.name===y)}return l.jsxs("div",{children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"tool-list",children:e.map((y,z)=>y.type==="mcp"&&y.server?l.jsxs("div",{className:"mcp-tool-item",children:[l.jsxs("div",{className:"mcp-tool-header",onClick:()=>P(z),children:[E.has(z)?l.jsx(At,{size:14}):l.jsx(It,{size:14}),l.jsx(Kt,{size:14,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{className:"mcp-tool-info",children:[l.jsx("div",{className:"mcp-tool-name",children:y.server.name}),l.jsx("div",{className:"mcp-tool-count",children:y.server.tool_filter===null||y.server.tool_filter===void 0?"all tools":`${y.server.tool_filter.length} tools enabled`})]}),l.jsx("button",{className:"delete-btn",onClick:R=>{R.stopPropagation(),n(z)},children:l.jsx(Je,{size:14})})]}),E.has(z)&&l.jsx("div",{className:"mcp-tool-body",children:l.jsx("div",{className:"mcp-tool-list",children:(()=>{const R=v(y.server.name),I=(R==null?void 0:R.tool_filter)||y.server.tool_filter||[],D=new Set(y.server.tool_filter||[]);return I.map(L=>l.jsxs("label",{className:`mcp-tool-chip ${D.has(L)?"enabled":"disabled"}`,onClick:()=>M(z,L),children:[l.jsx("input",{type:"checkbox",checked:D.has(L),onChange:()=>{},style:{display:"none"}}),L]},L))})()})})]},z):l.jsxs("div",{className:"tool-item",children:[l.jsx(Kt,{size:14,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{className:"tool-item-info",children:[l.jsx("div",{className:"tool-item-name",children:y.name||y.agent_id}),l.jsx("div",{className:"tool-item-type",children:y.type})]}),l.jsx("button",{className:"delete-btn",onClick:()=>n(z),children:l.jsx(Je,{size:14})})]},z))}),l.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[l.jsxs("button",{ref:m,className:"btn btn-secondary btn-sm",onClick:()=>c?d(!1):x(),children:[l.jsx(qe,{size:14}),"Add Tool"]}),c&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"dropdown-backdrop",onClick:()=>d(!1)}),l.jsxs("div",{className:"dropdown-content dropdown-fixed",style:p,children:[l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Built-in Tools"}),i.map(y=>l.jsxs("button",{className:"dropdown-item",onClick:()=>g(y.name),children:[l.jsx("div",{className:"dropdown-item-name",children:y.name}),l.jsx("div",{className:"dropdown-item-desc",children:y.description})]},y.name))]}),o.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["Known MCP Servers (",o.length,")"]}),o.map(y=>l.jsxs("button",{className:"dropdown-item",onClick:()=>T(y),children:[l.jsxs("div",{className:"dropdown-item-name",children:[y.name,l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:y.tool_filter===null||y.tool_filter===void 0?"all tools":`${y.tool_filter.length} tools`})]}),l.jsx("div",{className:"dropdown-item-desc",children:y.description})]},`known-${y.name}`))]}),a.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["Project MCP Servers (",a.length,")"]}),a.map(y=>l.jsxs("button",{className:"dropdown-item",onClick:()=>T(y),children:[l.jsxs("div",{className:"dropdown-item-name",children:[y.name,l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:y.tool_filter===null||y.tool_filter===void 0?"all tools":`${y.tool_filter.length} tools`})]}),l.jsx("div",{className:"dropdown-item-desc",children:y.description||"Custom MCP server"})]},`project-${y.id||y.name}`))]}),s.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Custom Tools"}),s.map(y=>l.jsxs("button",{className:"dropdown-item",onClick:()=>$(y),children:[l.jsx("div",{className:"dropdown-item-name",children:y.name}),l.jsx("div",{className:"dropdown-item-desc",children:y.description})]},y.id))]}),u.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Agents as Tools"}),u.map(y=>l.jsxs("button",{className:"dropdown-item",onClick:()=>S(y.id),children:[l.jsx("div",{className:"dropdown-item-name",children:y.name}),l.jsx("div",{className:"dropdown-item-desc",children:y.type})]},y.id))]})]})]})]}),w&&l.jsx("div",{className:"mcp-config-dialog",children:l.jsxs("div",{className:"mcp-config-content",children:[l.jsxs("h3",{children:["Configure ",w.server.name]}),l.jsx("p",{children:w.server.description}),w.isLoading?l.jsxs("div",{className:"mcp-loading",children:[l.jsx("div",{className:"spinner"}),l.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):w.error?l.jsxs("div",{className:"mcp-error",children:[l.jsxs("p",{children:["⚠️ Failed to discover tools: ",w.error]}),l.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mcp-select-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>b({...w,enabledTools:new Set(w.availableTools.map(y=>y.name))}),children:["Select All (",w.availableTools.length,")"]}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>b({...w,enabledTools:new Set}),children:"Select None"})]}),l.jsx("div",{className:"mcp-tools-grid",children:w.availableTools.map(y=>l.jsxs("label",{className:`mcp-tool-toggle ${w.enabledTools.has(y.name)?"enabled":""}`,onClick:()=>_(y.name),title:y.description||y.name,children:[l.jsx("input",{type:"checkbox",checked:w.enabledTools.has(y.name),onChange:()=>{}}),y.name]},y.name))})]}),l.jsxs("div",{className:"dialog-actions",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>b(null),children:"Cancel"}),l.jsxs("button",{className:"btn btn-primary",onClick:k,disabled:w.enabledTools.size===0,children:["Add ",w.enabledTools.size," Tools"]})]})]})})]})}function aS({agent:e,appModels:t,defaultModelId:n,onUpdate:r}){var p,f,m,w,b,E,h,x,g,T;const i=(p=e.model)==null?void 0:p._appModelId,o=e.model!==null&&e.model!==void 0&&!i,s=i||(()=>{if(!e.model)return n;const _=t.find(k=>{var P,M,$;return k.provider===((P=e.model)==null?void 0:P.provider)&&k.model_name===((M=e.model)==null?void 0:M.model_name)&&k.api_base===(($=e.model)==null?void 0:$.api_base)});return _==null?void 0:_.id})()||n||((f=t[0])==null?void 0:f.id);Rt.useEffect(()=>{var _,k,P,M,$;if(i){const S=t.find(v=>v.id===i);S&&(((_=e.model)==null?void 0:_.provider)!==S.provider||((k=e.model)==null?void 0:k.model_name)!==S.model_name||((P=e.model)==null?void 0:P.api_base)!==S.api_base||((M=e.model)==null?void 0:M.temperature)!==S.temperature||(($=e.model)==null?void 0:$.max_output_tokens)!==S.max_output_tokens)&&r({provider:S.provider,model_name:S.model_name,api_base:S.api_base,temperature:S.temperature,max_output_tokens:S.max_output_tokens,top_p:S.top_p,top_k:S.top_k,fallbacks:[],_appModelId:i})}},[i,t,e.model,r]);function u(_){const k=t.find(P=>P.id===_);k&&r({provider:k.provider,model_name:k.model_name,api_base:k.api_base,temperature:k.temperature,max_output_tokens:k.max_output_tokens,top_p:k.top_p,top_k:k.top_k,fallbacks:[],_appModelId:_})}function c(){var _;if(o){const k=n||((_=t[0])==null?void 0:_.id);k&&u(k)}else{const k=e.model;if(k){const{_appModelId:P,...M}=k;r(M)}else r({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function d(_){const{_appModelId:k,...P}=e.model||{};r({...P,..._})}return t.find(_=>_.id===s),t.find(_=>_.id===n),l.jsxs("div",{className:"model-selector",children:[l.jsx("style",{children:`
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
      `}),t.length>0&&l.jsxs("div",{className:"model-choice",children:[l.jsxs("div",{className:`model-option ${o?"":"selected"}`,onClick:()=>!o||c(),children:[l.jsx("div",{className:"model-option-label",children:"Use App Model"}),l.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),l.jsxs("div",{className:`model-option ${o?"selected":""}`,onClick:()=>o||c(),children:[l.jsx("div",{className:"model-option-label",children:"Custom"}),l.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!o&&t.length>0?l.jsx("div",{className:"app-model-select",children:t.map(_=>l.jsx("div",{className:`app-model-item ${s===_.id?"selected":""}`,onClick:()=>u(_.id),children:l.jsxs("div",{className:"app-model-item-info",children:[l.jsxs("div",{className:"app-model-item-name",children:[_.name,_.id===n&&l.jsxs("span",{className:"default-badge",children:[l.jsx(Bh,{size:10,fill:"currentColor"}),"Default"]})]}),l.jsxs("div",{className:"app-model-item-details",children:[_.provider," / ",_.model_name,_.api_base&&` • ${_.api_base}`]})]})},_.id))}):t.length===0?l.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(o||t.length===0)&&l.jsxs("div",{className:"custom-model-form",children:[l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Provider"}),l.jsxs("select",{value:((m=e.model)==null?void 0:m.provider)||"gemini",onChange:_=>d({provider:_.target.value}),children:[l.jsx("option",{value:"gemini",children:"Gemini"}),l.jsx("option",{value:"litellm",children:"LiteLLM"}),l.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"Model Name"}),l.jsx("input",{type:"text",value:((w=e.model)==null?void 0:w.model_name)||"",onChange:_=>d({model_name:_.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),((b=e.model)==null?void 0:b.provider)==="litellm"&&l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"API Base"}),l.jsx("input",{type:"text",value:((E=e.model)==null?void 0:E.api_base)||"",onChange:_=>d({api_base:_.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Temperature"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:((h=e.model)==null?void 0:h.temperature)??"",onChange:_=>d({temperature:_.target.value?parseFloat(_.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Tokens"}),l.jsx("input",{type:"number",value:((x=e.model)==null?void 0:x.max_output_tokens)??"",onChange:_=>d({max_output_tokens:_.target.value?parseInt(_.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top P"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:((g=e.model)==null?void 0:g.top_p)??"",onChange:_=>d({top_p:_.target.value?parseFloat(_.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top K"}),l.jsx("input",{type:"number",min:"1",value:((T=e.model)==null?void 0:T.top_k)??"",onChange:_=>d({top_k:_.target.value?parseInt(_.target.value):void 0}),placeholder:"Default"})]})]})]})]})}function sS({agent:e,onUpdate:t,customCallbacks:n}){const r=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"},{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}];function i(a,s){const u=e[a]||[],c=n.find(d=>d.id===s);c&&t({[a]:[...u,{module_path:c.module_path}]})}function o(a,s){const u=e[a]||[];t({[a]:u.filter((c,d)=>d!==s)})}return l.jsx("div",{className:"callbacks-editor",children:r.map(({key:a,label:s})=>{const u=e[a]||[],c=n;return l.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[l.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:s}),c.length>0&&l.jsxs("select",{value:"",onChange:d=>{d.target.value&&(i(a,d.target.value),d.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[l.jsx("option",{value:"",children:"Add callback..."}),c.filter(d=>{const p=d.module_path;return!u.some(f=>f.module_path===p)}).map(d=>l.jsx("option",{value:d.id,children:d.name},d.id))]})]}),u.length===0?l.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):l.jsx("div",{className:"callback-list",children:u.map((d,p)=>{const f=n.find(m=>m.module_path===d.module_path);return l.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[l.jsx("span",{style:{fontSize:"12px"},children:(f==null?void 0:f.name)||d.module_path}),l.jsx("button",{onClick:()=>o(a,p),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:l.jsx(Je,{size:12})})]},p)})})]},a)})})}const za=[{type:"LlmAgent",label:"LLM Agent",icon:qn,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:t0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:Q1,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:zs,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function uS(){return`agent_${Date.now().toString(36)}`}function cS(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function dS(e,t){const r={id:uS(),name:`New ${e}`,description:""},i=t?cS(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function pS({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:s}=Nt(),[u,c]=N.useState(!1),[d,p]=N.useState(new Set),[f,m]=N.useState(!1),[w,b]=N.useState(""),[E,h]=N.useState(!1);if(N.useEffect(()=>{if(t){const z=t.agents.filter(R=>"sub_agents"in R&&R.sub_agents.length>0).map(R=>R.id);p(new Set(z))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;async function x(){var z,R,I,D;if(!(!w.trim()||!t)){h(!0);try{const L=await Ah(t.id,w);if(L.success&&L.config){const A=L.config,U=[];if((z=A.tools)!=null&&z.builtin)for(const C of A.tools.builtin)U.push({type:"builtin",name:C});if((R=A.tools)!=null&&R.mcp)for(const C of A.tools.mcp){const te=s.find(ie=>ie.name===C.server);te&&U.push({type:"mcp",server:{...te,tool_filter:C.tools}})}if((I=A.tools)!=null&&I.custom)for(const C of A.tools.custom){const te=t.custom_tools.find(ie=>ie.name===C);te&&U.push({type:"function",name:C,module_path:te.module_path})}if((D=A.tools)!=null&&D.agents)for(const C of A.tools.agents){const te=t.agents.find(ie=>ie.id===C);te&&U.push({type:"agent",agent_id:C,name:te.name})}const j=t.app.models||[],V=j.find(C=>C.id===t.app.default_model_id)||j[0],Q={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:A.name||"new_agent",description:A.description||"",instruction:A.instruction||"",model:V?{provider:V.provider,model_name:V.model_name,api_base:V.api_base,temperature:V.temperature,max_output_tokens:V.max_output_tokens,top_p:V.top_p,top_k:V.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:U,sub_agents:A.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(Q),a(Q.id),e==null||e(Q.id),m(!1),b("")}else alert("Failed to generate agent: "+(L.error||"Unknown error"))}catch(L){alert("Error generating agent: "+L.message)}finally{h(!1)}}}const g=t.agents.find(z=>z.id===o);function T(z){a(z),e==null||e(z)}function _(z){const R=t.app.models||[],I=R.find(L=>L.id===t.app.default_model_id)||R[0],D=dS(z,I);n(D),T(D.id),c(!1)}function k(z,R){R.stopPropagation(),confirm("Delete this agent?")&&(r(z),o===z&&(e==null||e(null)))}function P(z){const R=new Set(d);R.has(z)?R.delete(z):R.add(z),p(R)}function M(z){const R=za.find(I=>I.type===z);return R?R.icon:qn}function $(z){const R=za.find(I=>I.type===z);return R?R.color:"#888"}function S(z,R=0){return z.map(I=>{const D=M(I.type),L=$(I.type),A="sub_agents"in I&&I.sub_agents.length>0,U=d.has(I.id),j=A?I.sub_agents.map(V=>t.agents.find(Q=>Q.id===V)).filter(V=>V!==void 0):[];return l.jsxs("div",{className:"agent-tree-item",children:[l.jsxs("div",{className:`agent-item ${o===I.id?"selected":""}`,onClick:()=>T(I.id),style:{paddingLeft:12+R*20},children:[A?l.jsx("button",{className:"expand-btn",onClick:V=>{V.stopPropagation(),P(I.id)},children:U?l.jsx(At,{size:16}):l.jsx(It,{size:16})}):l.jsx("span",{style:{width:20}}),l.jsx("div",{className:"agent-icon",style:{background:L},children:l.jsx(D,{size:14})}),l.jsx("span",{className:"agent-name",children:I.name}),l.jsx("span",{className:"agent-type",children:I.type}),l.jsx("button",{className:"delete-btn",onClick:V=>k(I.id,V),children:l.jsx(Je,{size:14})})]}),A&&U&&l.jsx("div",{className:"sub-agents",children:S(j,R+1)})]},I.id)})}const v=new Set(t.agents.flatMap(z=>"sub_agents"in z?z.sub_agents:[])),y=t.agents.filter(z=>!v.has(z.id));return l.jsxs("div",{className:"agents-panel",children:[l.jsx("style",{children:`
        .agents-panel {
          display: flex;
          gap: 20px;
          height: calc(100vh - 180px);
        }
        
        .agents-sidebar {
          width: 320px;
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
        
        .agents-list {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .agent-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
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
          width: 28px;
          height: 28px;
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
          gap: 8px;
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
      `}),l.jsxs("aside",{className:"agents-sidebar",children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["Agents (",t.agents.length,")"]}),l.jsxs("div",{className:"header-buttons",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!0),title:"AI-powered agent setup",children:[l.jsx(ma,{size:14}),"Quick"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>c(!0),children:[l.jsx(qe,{size:14}),"Add"]})]})]}),l.jsx("div",{className:"agents-list",children:t.agents.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(qn,{size:32}),l.jsx("p",{children:"No agents yet"})]}):S(y)})]}),l.jsx("div",{className:"agent-editor-area",children:g?l.jsx(oS,{agent:g}):l.jsxs("div",{className:"empty-state card",children:[l.jsx(qn,{size:48}),l.jsxs("p",{children:["Select an agent to edit",l.jsx("br",{}),"or create a new one"]})]})}),u&&l.jsx("div",{className:"type-selector",onClick:()=>c(!1),children:l.jsxs("div",{className:"type-selector-content",onClick:z=>z.stopPropagation(),children:[l.jsx("h2",{children:"Add Agent"}),l.jsx("div",{className:"type-options",children:za.map(({type:z,label:R,icon:I,color:D,description:L})=>l.jsxs("button",{className:"type-option",onClick:()=>_(z),children:[l.jsx("div",{className:"type-option-icon",style:{background:D},children:l.jsx(I,{size:20})}),l.jsxs("div",{className:"type-option-info",children:[l.jsx("h4",{children:R}),l.jsx("p",{children:L})]})]},z))})]})}),f&&l.jsx("div",{className:"type-selector",onClick:()=>!E&&m(!1),children:l.jsxs("div",{className:"quick-setup-content",onClick:z=>z.stopPropagation(),children:[l.jsxs("h2",{children:[l.jsx(ma,{size:20})," Quick Agent Setup"]}),l.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do, and AI will configure everything: name, description, instruction, tools, and sub-agents."}),l.jsxs("div",{className:"quick-setup-form",children:[l.jsx("textarea",{value:w,onChange:z=>b(z.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,disabled:E,autoFocus:!0}),l.jsxs("div",{className:"quick-setup-info",children:[l.jsx("strong",{children:"Available resources:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),l.jsxs("li",{children:[s.length," MCP servers"]}),l.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),l.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),l.jsxs("div",{className:"quick-setup-actions",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),disabled:E,children:"Cancel"}),l.jsx("button",{className:"btn btn-primary",onClick:x,disabled:E||!w.trim(),children:E?l.jsxs(l.Fragment,{children:[l.jsx(Rr,{size:14,className:"spin"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(ma,{size:14}),"Create Agent"]})})]})]})]})})]})}var cc="\x1B[0m",dc="\x1B[1m",Rg=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",fS=e=>{let t=Rg(e),n=`${dc}[MONACOPILOT ERROR] ${t}${cc}`;return console.error(n),{message:t}},mS=(e,t)=>{console.warn(`${dc}[MONACOPILOT WARN] ${e}${t?`
${Rg(t)}`:""}${cc}`)},hS=(e,t,n)=>console.warn(`${dc}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${cc}`),fl={report:fS,warn:mS,warnDeprecated:hS},Fp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(s=>s==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},gS=100,xS=!0,Og="onIdle",yS=!0,vS=120,bS=400,kS=0,pc=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),wS=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),jS=e=>e.getValue(),SS=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Dg=class $g{constructor(){this.cache=new SS($g.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=pc(n,r),a=o,s=r.getLineContent(n.lineNumber);if(n.column===s.length+1&&n.lineNumber<r.getLineCount()){let c=r.getLineContent(n.lineNumber+1);a=`${o}
${c}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let u=r.getValueInRange(t.range);return this.isPartialMatch(u,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:s}=r,{lineNumber:u,column:c}=n;return u<i||u>a?!1:i===a?c>=o-1&&c<=s+1:u===i?c>=o-1:u===a?c<=s+1:!0}};Dg.MAX_CACHE_SIZE=20;var _S=Dg,CS=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},NS=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,s=0,u=0,c=Math.min(r,i);for(let f=1;f<=c;f++){let m=e.substring(0,f),w=t.slice(-f);m===w&&(u=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(s=f);let p=Math.max(a,s);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:u,maxOverlapLength:p}}},ES=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new NS}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:s}=this.textOverlapCalculator.findOverlaps(t,i,o),u=a>0?n.getPositionAt(r-a):e,c=r+s,d=n.getPositionAt(c);return new this.monaco.Range(u.lineNumber,u.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,s=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,s)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},zS=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},TS=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:s=gS}=n,u=a&&a.length>0?3:2,c=s?Math.floor(s/u):void 0,d=(b,E,h)=>{let x=b(e,t);return E?Fp(x,E,h):x},p=(b,E)=>!b||!E?b:b.map(({content:h,...x})=>({...x,content:Fp(h,E)})),f=d(pc,c,{truncateDirection:"keepEnd"}),m=d(wS,c,{truncateDirection:"keepStart"}),w=p(a,c);return{filename:r,language:i,technologies:o,relatedFiles:w,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},PS=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,s,u=new Promise((c,d)=>{a=c,s=d});return r={args:o,promise:u,resolve:a,reject:s},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let c=r;if(c){r=null,n=null;try{let d=await e(...c.args);c.resolve(d)}catch(d){c.reject(d)}}},t),u};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},LS=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,ri=e=>({items:e,enableForwardStability:!0}),Us=new _S,AS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=Og,enableCaching:s=xS,allowFollowUpCompletions:u=yS,onError:c,requestHandler:d}=o;if(s&&!i){let p=Us.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return ri(p)}if(r.isCancellationRequested||!u&&i)return ri([]);try{let p=PS(async w=>{var E,h;(E=o.onCompletionRequested)==null||E.call(o,w);let b;if(d)b=await d(w);else if(o.endpoint)b=await zS({endpoint:o.endpoint,...w});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(b.error)throw new Error(b.error);return(h=o.onCompletionRequestFinished)==null||h.call(o,w,b),b},{onTyping:vS,onIdle:bS,onDemand:kS}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=TS({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let w=new CS(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),b=new ES(e);return s&&Us.add({completion:w,range:b.computeCacheRange(n,w),textBeforeCursor:pc(n,t)}),ri([{insertText:w,range:b.computeInsertionRange(n,w,t)}])}}catch(p){if(LS(p))return ri([]);c?c(p):fl.warn("Cannot provide completion",p)}return ri([])},fc=new WeakMap,Dl=e=>fc.get(e),IS=(e,t)=>{fc.set(e,t)},Bp=e=>{fc.delete(e)},MS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),RS=(e,t)=>{let n=Dl(e);!n||!n.options||(n.options={...n.options,...t})},OS=(e,t,n)=>{let r=Dl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,s)=>{if(i!==t.getModel())return{items:[]};let u=r.options||n;if(!(u.trigger==="onDemand"&&!r.isExplicitlyTriggered||u.triggerIf&&!u.triggerIf({text:jS(t),position:o,triggerType:u.trigger??Og})))return AS({monaco:e,mdl:i,pos:o,token:s,isCompletionAccepted:r.isCompletionAccepted,options:u})},handleItemDidShow:(i,o,a)=>{var s,u;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(u=(s=r.options||n).onCompletionShown)==null||u.call(s,a,o.range))},freeInlineCompletions:()=>{}}):null},DS={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},$S=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(DS).some(t=>t(this.monaco,e))}},FS=(e,t,n,r)=>{let i=new $S(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},Fg=(e,t,n)=>{let r=[];IS(t,MS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Dl(t);if(!i)return fl.warn("Completion is not registered properly. State not found."),US();let o=OS(e,t,n);o&&r.push(o);let a=FS(e,t,i,n);return r.push(a),{deregister:()=>{for(let s of r)s.dispose();Us.clear(),Bp(t)},trigger:()=>BS(t),updateOptions:s=>{RS(t,s(i.options||n))}}}catch(i){return n.onError?n.onError(i):fl.report(i),{deregister:()=>{for(let o of r)o.dispose();Bp(t)},trigger:()=>{},updateOptions:()=>{}}}},BS=e=>{let t=Dl(e);if(!t){fl.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},US=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function VS(){return`tool_${Date.now().toString(36)}`}function WS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const HS=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function qS({onSelectTool:e}){var In;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:s,builtinTools:u,mcpServers:c}=Nt(),[d,p]=N.useState(""),[f,m]=N.useState(null),[w,b]=N.useState("tools"),[E,h]=N.useState(null),[x,g]=N.useState(""),[T,_]=N.useState(!1),[k,P]=N.useState(null),[M,$]=N.useState(!1),[S,v]=N.useState(!1),[y,z]=N.useState(null),[R,I]=N.useState(null);if(!t)return null;const D=t.mcp_servers||[],L=t.custom_tools.find(F=>F.id===a),A=D.find(F=>F.name===E),U=new Set(D.map(F=>F.name)),j=c.filter(F=>!U.has(F.name));function V(F){s(F),e==null||e(F)}N.useEffect(()=>{L&&(p(L.code),I(null))},[a]),N.useEffect(()=>{A&&(g(JSON.stringify(A,null,2)),_(!1))},[E]);function Q(){const F=VS();r({id:F,name:"new_tool",description:"",module_path:"tools.custom",code:HS,state_keys_used:[]}),V(F)}function C(F,ce){ce.stopPropagation(),confirm("Delete this tool?")&&(o(F),a===F&&(e==null||e(null)))}function te(F){L&&(F.name!==void 0&&(F.name===""||WS(F.name)?I(null):I("Name can only contain letters, numbers, and underscores")),i(L.id,F))}function ie(F){F!==void 0&&L&&(p(F),te({code:F}))}async function de(){if(L){$(!0);try{const F=await Ih(t.id,L.name,L.description,L.state_keys_used);F.success&&F.code?(p(F.code),te({code:F.code})):(console.error("Failed to generate tool code:",F.error),alert("Failed to generate tool code: "+(F.error||"Unknown error")))}catch(F){console.error("Error generating tool code:",F),alert("Error generating tool code: "+F.message)}finally{$(!1)}}}const B=N.useRef(null),Y=N.useCallback((F,ce)=>{if(B.current&&typeof B.current=="function")try{B.current()}catch{}try{const _e=Fg(ce,F,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof _e=="function"?B.current=_e:B.current=null}catch{B.current=null}},[]);N.useEffect(()=>()=>{if(B.current&&typeof B.current=="function")try{B.current()}catch{}},[]);function oe(){const F={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...D,F]}),h(F.name),P(null)}function me(F){const ce={...F};n({mcp_servers:[...D,ce]}),h(ce.name),P(null)}function ye(F,ce){ce.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:D.filter(_e=>_e.name!==F)}),E===F&&h(null))}function ue(F){F!==void 0&&(g(F),_(F!==JSON.stringify(A,null,2)))}function vt(){if(A)try{const F=JSON.parse(x),ce=A.name,_e=D.map(et=>et.name===ce?F:et);n({mcp_servers:_e}),h(F.name),_(!1)}catch(F){alert("Invalid JSON: "+F.message)}}async function Et(){v(!0),z(null);try{const F=JSON.parse(x),ce=await Rh({connection_type:F.connection_type,command:F.command,args:F.args,env:F.env,url:F.url,headers:F.headers,timeout:F.timeout||30});if(z(ce),ce.success&&ce.tools.length>0){const _e={...F,tool_filter:ce.tools.map(et=>et.name)};g(JSON.stringify(_e,null,2)),_(!0)}}catch(F){z({success:!1,tools:[],error:F.message})}finally{v(!1)}}const Me={};return t.custom_tools.forEach(F=>{const ce=F.module_path||"tools";Me[ce]||(Me[ce]=[]),Me[ce].push(F)}),l.jsxs("div",{className:"tools-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"tools-sidebar",children:[l.jsxs("div",{className:"sidebar-tabs",children:[l.jsxs("button",{className:`sidebar-tab ${w==="tools"?"active":""}`,onClick:()=>b("tools"),children:[l.jsx(Kt,{size:14}),"Tools"]}),l.jsxs("button",{className:`sidebar-tab ${w==="mcp"?"active":""}`,onClick:()=>b("mcp"),children:[l.jsx(rr,{size:14}),"MCP"]})]}),w==="tools"?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Q,children:[l.jsx(qe,{size:14}),"New"]})]}),l.jsxs("div",{className:"tools-tree",children:[u.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Fd,{size:14}),"Built-in Tools"]}),u.map(F=>l.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===F.name?"selected":""}`,onClick:()=>{m(F),V(null),h(null)},children:[l.jsx(Ts,{size:14}),l.jsx("span",{className:"tool-name",children:F.name})]},F.name))]}),t.custom_tools.length===0&&u.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(En,{size:32}),l.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(Me).map(([F,ce])=>l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(q1,{size:14}),F]}),ce.map(_e=>l.jsxs("div",{className:`tool-item ${a===_e.id?"selected":""}`,onClick:()=>{V(_e.id),m(null),h(null)},children:[l.jsx(Kt,{size:14}),l.jsx("span",{className:"tool-name",children:_e.name}),l.jsx("button",{className:"delete-btn",onClick:et=>C(_e.id,et),children:l.jsx(Je,{size:14})})]},_e.id))]},F))]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["MCP Servers (",D.length,")"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:oe,children:[l.jsx(qe,{size:14}),"Custom"]})]}),l.jsxs("div",{className:"tools-tree",children:[D.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx($d,{size:14}),"Configured (",D.length,")"]}),D.map(F=>l.jsxs("div",{className:`tool-item ${E===F.name?"selected":""}`,onClick:()=>{h(F.name),P(null),V(null),m(null)},children:[l.jsx(rr,{size:14}),l.jsx("span",{className:"tool-name",children:F.name}),l.jsx("span",{className:"tool-type-badge",children:F.connection_type}),l.jsx("button",{className:"delete-btn",onClick:ce=>ye(F.name,ce),children:l.jsx(Je,{size:14})})]},F.name))]}),j.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Fd,{size:14}),"Available Templates (",j.length,")"]}),j.map(F=>l.jsxs("div",{className:`tool-item known-server ${(k==null?void 0:k.name)===F.name?"selected":""}`,onClick:()=>{P(F),h(null),V(null),m(null)},children:[l.jsx(rr,{size:14}),l.jsx("span",{className:"tool-name",children:F.name}),l.jsx("span",{className:"tool-type-badge",children:F.connection_type})]},F.name))]}),D.length===0&&j.length===0&&l.jsxs("div",{className:"empty-state",children:[l.jsx(rr,{size:32}),l.jsx("p",{children:"No MCP servers available"})]})]})]})]}),l.jsx("div",{className:"tool-editor",children:f?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(Ts,{size:20,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),l.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),l.jsxs("div",{className:"builtin-tool-info",children:[l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{children:f.description||"No description available."})]}),l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Usage"}),l.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),l.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Note"}),l.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):L?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(Kt,{size:20,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx("input",{type:"text",value:L.name,onChange:F=>te({name:F.target.value}),placeholder:"Tool name",style:{borderColor:R?"var(--error)":void 0}}),R&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:R})]})]}),l.jsxs("div",{className:"editor-meta",children:[l.jsxs("div",{className:"meta-field grow",children:[l.jsx("label",{children:"Description"}),l.jsx("input",{type:"text",value:L.description,onChange:F=>te({description:F.target.value}),placeholder:"What does this tool do?"})]}),l.jsxs("div",{className:"meta-field",children:[l.jsx("label",{children:"Module Path"}),l.jsx("input",{type:"text",value:L.module_path,onChange:F=>te({module_path:F.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),l.jsxs("div",{className:"code-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:de,disabled:M||!L.name||!L.description,title:!L.name||!L.description?"Add a name and description first":"Generate code using AI",children:M?l.jsxs(l.Fragment,{children:[l.jsx(Rr,{size:14,className:"spinning"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Qu,{size:14}),"Write Tool"]})}),l.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),l.jsx("div",{className:"code-editor",children:l.jsx(Or,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:ie,onMount:Y,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),l.jsxs("div",{className:"state-keys-panel",children:[l.jsxs("h4",{children:[l.jsx(qu,{size:14})," State Keys Used"]}),l.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(F=>{const ce=L.state_keys_used.includes(F.name);return l.jsxs("label",{className:`state-key-chip ${ce?"selected":""}`,title:F.description,children:[l.jsx("input",{type:"checkbox",checked:ce,onChange:_e=>{const et=_e.target.checked?[...L.state_keys_used,F.name]:L.state_keys_used.filter(W=>W!==F.name);te({state_keys_used:et})}}),F.name,l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",F.type,")"]})]},F.name)})})]})]}):k?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(rr,{size:20,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:k.name}),l.jsx("span",{className:"badge badge-info",children:k.connection_type}),l.jsx("span",{className:"badge badge-muted",children:"Template"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>me(k),children:[l.jsx(qe,{size:14}),"Add to Project"]})]}),l.jsxs("div",{className:"known-server-preview",children:[l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{children:k.description})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Command"}),l.jsxs("code",{children:[k.command," ",(In=k.args)==null?void 0:In.join(" ")]})]}),k.env&&Object.keys(k.env).length>0&&l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Required Environment Variables"}),l.jsx("div",{className:"env-vars",children:Object.entries(k.env).map(([F,ce])=>l.jsxs("div",{className:"env-var",children:[l.jsx("code",{children:F}),ce?l.jsx("span",{className:"env-value",children:ce}):l.jsx("span",{className:"env-required",children:"Required"})]},F))})]}),k.tool_filter&&k.tool_filter.length>0&&l.jsxs("div",{className:"preview-section",children:[l.jsxs("h4",{children:["Available Tools (",k.tool_filter.length,")"]}),l.jsx("div",{className:"tool-badges",children:k.tool_filter.map(F=>l.jsx("span",{className:"tool-badge",children:F},F))})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Configuration Preview"}),l.jsx("pre",{className:"config-preview",children:JSON.stringify(k,null,2)})]})]})]}):A?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(rr,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:A.name}),l.jsx("span",{className:"badge badge-info",children:A.connection_type}),T&&l.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:Et,disabled:S,title:"Test connection and discover available tools",children:[S?l.jsx(Rr,{size:14,className:"spin"}):l.jsx($d,{size:14}),S?"Testing...":"Test Connection"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:vt,disabled:!T,children:[l.jsx(Ku,{size:14}),"Save"]})]}),y&&l.jsx("div",{className:`mcp-test-result ${y.success?"success":"error"}`,children:y.success?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",y.tools.length," tools"]}),y.tools.length>0&&l.jsxs("div",{className:"test-result-tools",children:[l.jsx("strong",{children:"Available tools:"}),l.jsx("ul",{children:y.tools.map(F=>l.jsxs("li",{children:[l.jsx("code",{children:F.name}),F.description&&l.jsxs("span",{children:[" — ",F.description]})]},F.name))}),l.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),l.jsx("div",{className:"test-result-error",children:y.error})]})}),l.jsx("div",{className:"mcp-info",children:l.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),l.jsx("div",{className:"code-editor",children:l.jsx(Or,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:ue,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),l.jsxs("div",{className:"mcp-help",children:[l.jsx("h4",{children:"Schema Reference"}),l.jsxs("div",{className:"schema-fields",children:[l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"name"}),l.jsx("span",{children:"Unique identifier for this server"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"description"}),l.jsx("span",{children:"Human-readable description"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"connection_type"}),l.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"command"}),l.jsx("span",{children:"Command to run (for stdio)"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"args"}),l.jsx("span",{children:"Array of command arguments"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"env"}),l.jsx("span",{children:"Environment variables object"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"url"}),l.jsx("span",{children:"Server URL (for sse/http)"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"tool_filter"}),l.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(En,{size:48}),l.jsxs("p",{children:["Select a tool to view",l.jsx("br",{}),"or create a new custom tool"]})]})})]})}function KS(){return`callback_${Date.now().toString(36)}`}function Up(e){return/^[a-zA-Z0-9_]+$/.test(e)}const QS=`def my_callback(callback_context: CallbackContext) -> Optional[LlmResponse]:
    """Description of what this callback does.
    
    Args:
        callback_context: The callback context containing agent, model, tool, and state information.
            MUST be named 'callback_context' (enforced by ADK).
    
    Returns:
        Optional[LlmResponse]: If you return an LlmResponse, it will:
            - For before_* callbacks: Short-circuit execution and return this response to the user
            - For after_* callbacks: Add this response as an additional agent response
            - Return None to proceed normally
    """
    # ============================================================
    # State Management
    # ============================================================
    # Read state: callback_context.state.get('key', default_value)
    # Read state: callback_context.state['key']
    # Write state: callback_context.state['key'] = value
    # State changes are automatically tracked in state_delta
    
    # ============================================================
    # Context Information (available depending on callback type)
    # ============================================================
    # Agent info: callback_context.agent_name, callback_context.agent_id
    # Invocation info: callback_context.invocation_id
    # Model info: callback_context.model_name (for model callbacks)
    # Tool info: callback_context.tool_name, callback_context.tool_args (for tool callbacks)
    
    # ============================================================
    # Artifacts (async methods)
    # ============================================================
    # Load artifact: artifact = await callback_context.load_artifact(filename, version=None)
    # Save artifact: version = await callback_context.save_artifact(filename, artifact, custom_metadata=None)
    # Example:
    #   from google.genai import types
    #   artifact = types.Part.from_text(text="some content")
    #   version = await callback_context.save_artifact("report.txt", artifact)
    
    # ============================================================
    # Short-circuiting Execution (before_* callbacks only)
    # ============================================================
    # Return LlmResponse to skip the agent/model/tool execution:
    #   from google.adk.models.llm_request import LlmResponse
    #   from google.genai import types
    #   return LlmResponse(
    #       contents=[types.Content(role="assistant", parts=[types.Part.from_text("Custom response")])]
    #   )
    
    # ============================================================
    # Adding Additional Responses (after_* callbacks only)
    # ============================================================
    # Return LlmResponse to add an additional response after execution:
    #   from google.adk.models.llm_request import LlmResponse
    #   from google.genai import types
    #   return LlmResponse(
    #       contents=[types.Content(role="assistant", parts=[types.Part.from_text("Additional info")])]
    #   )
    
    pass
`;function GS({onSelectCallback:e}){var M,$;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=Nt(),[a,s]=N.useState(""),[u,c]=N.useState(null),[d,p]=N.useState(null),[f,m]=N.useState(!1),w=N.useRef(null);if(!t)return null;const b=t.custom_callbacks||[],E=b.find(S=>S.id===u);function h(S){c(S),e==null||e(S)}N.useEffect(()=>{E?(s(E.code),p(null)):s("")},[u,E]);function x(){const S=KS();r({id:S,name:"new_callback",description:"",module_path:"callbacks.custom",code:QS,state_keys_used:[]}),h(S)}function g(S,v){v.stopPropagation(),confirm("Delete this callback?")&&(o(S),u===S&&(e==null||e(null),c(null),s("")))}function T(){if(!u)return;const S=b.find(z=>z.id===u);if(!S)return;const v=S.name.trim();if(!v){alert("Please enter a name");return}if(!Up(v)){p("Name must contain only alphanumeric characters and underscores");return}if(b.find(z=>z.name===v&&z.id!==S.id)){p("A callback with this name already exists");return}i(S.id,{code:a,name:v,description:S.description,module_path:S.module_path,state_keys_used:S.state_keys_used}),p(null)}function _(S,v){w.current=v;try{Fg(v,{endpoint:"/api/code-completion",language:"python"})}catch(y){console.warn("Failed to register Monacopilot completion:",y)}}async function k(){if(E){m(!0);try{let S="before_agent";const v=E.name.toLowerCase(),y=E.description.toLowerCase();v.includes("after_agent")||y.includes("after agent")?S="after_agent":v.includes("before_model")||y.includes("before model")?S="before_model":v.includes("after_model")||y.includes("after model")?S="after_model":v.includes("before_tool")||y.includes("before tool")?S="before_tool":v.includes("after_tool")||y.includes("after tool")?S="after_tool":(v.includes("before_agent")||y.includes("before agent"))&&(S="before_agent");const z=await Mh(t.id,E.name,E.description,S,E.state_keys_used);z.success&&z.code?(s(z.code),i(E.id,{code:z.code})):(console.error("Failed to generate callback code:",z.error),alert("Failed to generate callback code: "+(z.error||"Unknown error")))}catch(S){console.error("Error generating callback code:",S),alert("Error generating callback code: "+S.message)}finally{m(!1)}}}const P=(($=(M=t.app)==null?void 0:M.state_keys)==null?void 0:$.map(S=>S.name))||[];return l.jsxs("div",{className:"tools-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"tools-sidebar",children:[l.jsxs("div",{className:"tools-sidebar-header",children:[l.jsx("h3",{children:"Callbacks"}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:l.jsx(qe,{size:16})})]}),l.jsx("div",{className:"tools-list",children:b.length===0?l.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):b.map(S=>l.jsxs("div",{className:`tool-item ${u===S.id?"selected":""}`,onClick:()=>h(S.id),children:[l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{className:"tool-item-name",children:S.name}),S.description&&l.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:S.description})]}),l.jsx("div",{className:"tool-item-actions",children:l.jsx("button",{className:"btn btn-icon btn-sm",onClick:v=>g(S.id,v),title:"Delete",children:l.jsx(Je,{size:14})})})]},S.id))})]}),l.jsx("div",{className:"tools-editor",children:E?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"tools-editor-header",children:[l.jsx("h3",{children:"Edit Callback"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:T,children:[l.jsx(Ku,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),l.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Name"}),l.jsx("input",{type:"text",value:E.name,onChange:S=>{const v=S.target.value;i(E.id,{name:v}),d&&Up(v)&&p(null)},className:d?"error":""}),d&&l.jsx("div",{className:"error-message",children:d})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{value:E.description,onChange:S=>i(E.id,{description:S.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Module Path"}),l.jsx("input",{type:"text",value:E.module_path,onChange:S=>i(E.id,{module_path:S.target.value}),placeholder:"callbacks.custom"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"State Keys Used"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:P.map(S=>{const v=E.state_keys_used.includes(S);return l.jsxs("button",{type:"button",className:`btn btn-sm ${v?"btn-primary":"btn-secondary"}`,onClick:()=>{const y=v?E.state_keys_used.filter(z=>z!==S):[...E.state_keys_used,S];i(E.id,{state_keys_used:y})},children:[l.jsx(qu,{size:12,style:{marginRight:"4px"}}),S]},S)})}),P.length===0&&l.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[l.jsx("label",{children:"Code"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:k,disabled:f||!E.name||!E.description,title:!E.name||!E.description?"Add a name and description first":"Generate code using AI",children:f?l.jsxs(l.Fragment,{children:[l.jsx(Rr,{size:14,className:"spinning"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Qu,{size:14}),"Generate"]})})]}),l.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),l.jsx("div",{className:"code-editor-container",children:l.jsx(Or,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:S=>s(S||""),onMount:_,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):l.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const Vp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},JS={agent_start:zs,agent_end:zs,tool_call:Kt,tool_result:Kt,model_call:Wu,model_response:Fh,state_change:yi,transfer:Vh,callback_start:En,callback_end:En};function YS(e){var t,n,r,i,o,a,s,u,c,d,p,f,m,w,b,E,h,x,g,T,_;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const P=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([U,j])=>{const V=j!=null?JSON.stringify(j):"null";return`${U}=${V.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${P.slice(0,60)}${P.length>60?"...":""})`;case"tool_result":const M=(i=e.data)==null?void 0:i.result;let $="";if((a=(o=M==null?void 0:M.content)==null?void 0:o[0])!=null&&a.text)$=String(M.content[0].text).slice(0,60);else if(typeof M=="string")$=M.slice(0,60);else if(M!=null){const U=JSON.stringify(M);$=U?U.slice(0,60):""}else $="";return`RESULT ${((s=e.data)==null?void 0:s.tool_name)||"unknown"} → ${$}${$.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((c=(u=e.data)==null?void 0:u.contents)==null?void 0:c.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const S=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],v=S.find(U=>(U==null?void 0:U.type)==="function_call");if(v)return`LLM_RSP → ${v.name||"unknown"}()`;const y=S.find(U=>(U==null?void 0:U.type)==="text");if(y!=null&&y.text){const U=String(y.text);return`LLM_RSP "${U.slice(0,50)}${U.length>50?"...":""}"`}return`LLM_RSP (${((w=e.data)==null?void 0:w.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((b=e.data)==null?void 0:b.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((E=e.data)==null?void 0:E.target)||"unknown"}`;case"callback_start":const R=((h=e.data)==null?void 0:h.callback_name)||"unknown",I=((x=e.data)==null?void 0:x.callback_type)||"";return`CALLBACK START ${I?`[${I}]`:""} ${R}`;case"callback_end":const D=((g=e.data)==null?void 0:g.callback_name)||"unknown",L=((T=e.data)==null?void 0:T.callback_type)||"",A=(_=e.data)!=null&&_.error?" [ERROR]":"";return`CALLBACK END ${L?`[${L}]`:""} ${D}${A}`;default:return e.event_type.toUpperCase()}}function XS(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function ZS({event:e}){var o,a,s,u,c,d,p,f,m,w,b,E,h,x;const[t,n]=N.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=g=>{const T=new Set(t);T.has(g)?T.delete(g):T.add(g),n(T)},i=(g,T=0,_=!1)=>{const k="  ".repeat(T),P="  ".repeat(T+1);if(g===null)return l.jsx("span",{className:"json-null",children:"null"});if(g===void 0)return l.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof g=="boolean")return l.jsx("span",{className:"json-boolean",children:g.toString()});if(typeof g=="number")return l.jsx("span",{className:"json-number",children:g});if(typeof g=="string"){const M=g.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return M.length>300&&T>0?l.jsxs("span",{className:"json-string",children:['"',M.slice(0,300),'..." ',l.jsxs("span",{className:"json-truncated",children:["(",g.length," chars)"]})]}):l.jsxs("span",{className:"json-string",children:['"',M,'"']})}if(Array.isArray(g))return g.length===0?l.jsx("span",{className:"json-bracket",children:"[]"}):g.every($=>$===null||typeof $!="object")&&g.length<=3?l.jsxs("span",{className:"json-inline",children:[l.jsx("span",{className:"json-bracket",children:"["}),g.map(($,S)=>l.jsxs("span",{children:[i($,T+1,!0),S<g.length-1&&l.jsx("span",{className:"json-comma",children:", "})]},S)),l.jsx("span",{className:"json-bracket",children:"]"})]}):l.jsxs("span",{className:"json-block",children:[l.jsx("span",{className:"json-bracket",children:"["}),g.map(($,S)=>l.jsxs("span",{children:[`
`+P,i($,T+1),S<g.length-1&&l.jsx("span",{className:"json-comma",children:","})]},S)),`
`+k,l.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof g=="object"){const M=Object.entries(g);return M.length===0?l.jsx("span",{className:"json-bracket",children:"{}"}):M.length<=2&&M.every(([,S])=>S===null||typeof S!="object")&&_?l.jsxs("span",{className:"json-inline",children:[l.jsx("span",{className:"json-bracket",children:"{"}),M.map(([S,v],y)=>l.jsxs("span",{children:[l.jsxs("span",{className:"json-key",children:['"',S,'"']}),l.jsx("span",{className:"json-colon",children:": "}),i(v,T+1,!0),y<M.length-1&&l.jsx("span",{className:"json-comma",children:", "})]},S)),l.jsx("span",{className:"json-bracket",children:"}"})]}):l.jsxs("span",{className:"json-block",children:[l.jsx("span",{className:"json-bracket",children:"{"}),M.map(([S,v],y)=>l.jsxs("span",{children:[`
`+P,l.jsxs("span",{className:"json-key",children:['"',S,'"']}),l.jsx("span",{className:"json-colon",children:": "}),i(v,T+1),y<M.length-1&&l.jsx("span",{className:"json-comma",children:","})]},S)),`
`+k,l.jsx("span",{className:"json-bracket",children:"}"})]})}return String(g)};return l.jsxs("div",{className:"event-detail",children:[l.jsxs("div",{className:"detail-header",children:[l.jsx("span",{className:"detail-type",children:e.event_type}),l.jsx("span",{className:"detail-agent",children:e.agent_name}),l.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?l.jsx(At,{size:12}):l.jsx(It,{size:12}),l.jsx("span",{children:"Event Data"})]}),t.has("data")&&l.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?l.jsx(At,{size:12}):l.jsx(It,{size:12}),l.jsx("span",{children:"Instruction"}),l.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&l.jsx("div",{className:"section-content",children:l.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?l.jsx(At,{size:12}):l.jsx(It,{size:12}),l.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&l.jsx("div",{className:"section-content",children:e.data.contents.map((g,T)=>{var _;return l.jsxs("div",{className:"message-item",children:[l.jsx("span",{className:`message-role ${g.role}`,children:g.role}),l.jsx("div",{className:"message-parts",children:(_=g.parts)==null?void 0:_.map((k,P)=>l.jsxs("div",{className:"message-part",children:[k.text&&l.jsx("pre",{children:k.text}),k.function_call&&l.jsxs("div",{className:"function-call",children:[l.jsx("strong",{children:k.function_call.name}),l.jsx("pre",{children:JSON.stringify(k.function_call.args,null,2)})]}),k.function_response&&l.jsxs("div",{className:"function-response",children:[l.jsx("strong",{children:k.function_response.name}),l.jsx("pre",{children:JSON.stringify(k.function_response.response,null,2)})]})]},P))})]},T)})})]}),e.event_type==="tool_result"&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?l.jsx(At,{size:12}):l.jsx(It,{size:12}),l.jsx("span",{children:"Tool Result"})]}),t.has("result")&&l.jsx("div",{className:"section-content",children:l.jsx("pre",{className:"result-content",children:((d=(c=(u=(s=e.data)==null?void 0:s.result)==null?void 0:u.content)==null?void 0:c[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?l.jsx(At,{size:12}):l.jsx(It,{size:12}),l.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.tokens&&l.jsxs("span",{className:"token-badge",children:[e.data.tokens.input,"↑ ",e.data.tokens.output,"↓"]})]}),t.has("response")&&l.jsx("div",{className:"section-content",children:e.data.parts.map((g,T)=>l.jsxs("div",{className:"response-part",children:[g.type==="text"&&g.text&&l.jsx("pre",{className:"response-text",children:g.text}),g.type==="function_call"&&l.jsxs("div",{className:"function-call",children:[l.jsxs("strong",{children:["→ ",g.name,"()"]}),g.args&&Object.keys(g.args).length>0&&l.jsx("pre",{children:JSON.stringify(g.args,null,2)})]}),g.thought&&l.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},T))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?l.jsx(At,{size:12}):l.jsx(It,{size:12}),l.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Name:"})," ",((w=e.data)==null?void 0:w.callback_name)||"unknown"]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Type:"})," ",((b=e.data)==null?void 0:b.callback_type)||"unknown"]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Module Path:"})," ",((E=e.data)==null?void 0:E.module_path)||"unknown"]}),((h=e.data)==null?void 0:h.error)&&l.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[l.jsx("strong",{children:"Error:"})," ",e.data.error]})]})]}),e.event_type==="state_change"&&((x=e.data)==null?void 0:x.state_delta)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?l.jsx(At,{size:12}):l.jsx(It,{size:12}),l.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&l.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([g,T])=>l.jsxs("div",{className:"state-delta-item",children:[l.jsx("div",{className:"state-delta-key",children:g}),l.jsx("pre",{className:"state-delta-value",children:typeof T=="string"?T:JSON.stringify(T,null,2)})]},g))})]})]})}function e_({content:e,title:t,onClose:n}){return l.jsxs("div",{className:"modal-overlay",onClick:n,children:[l.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:t}),l.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),l.jsx("div",{className:"modal-body markdown-content",children:l.jsx(Mg,{children:e})})]}),l.jsx("style",{children:`
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
      `})]})}function t_({events:e,selectedEventIndex:t,project:n}){const[r,i]=N.useState(null),o=N.useMemo(()=>{var c;const s={};return(c=n==null?void 0:n.app)!=null&&c.state_keys&&n.app.state_keys.forEach(d=>{s[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;s[p]||(s[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var w;s[f]={...s[f],value:m,timestamp:d.timestamp,defined:((w=s[f])==null?void 0:w.defined)??!1}})}),s},[e,t,n]),a=Object.entries(o);return l.jsxs(l.Fragment,{children:[r&&l.jsx(e_,{content:r.content,title:r.title,onClose:()=>i(null)}),l.jsxs("div",{className:"state-snapshot",children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?l.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([s,{value:u,timestamp:c,defined:d,description:p,type:f}])=>l.jsxs("div",{className:`state-entry ${u===void 0?"unset":""}`,children:[l.jsxs("div",{className:"state-key",children:[s,f&&l.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),l.jsx("div",{className:"state-value",onClick:()=>{if(u!==void 0){const m=typeof u=="string"?u:JSON.stringify(u,null,2);i({content:m,title:s})}},style:{cursor:u!==void 0?"pointer":"default"},title:u!==void 0?"Click to view in markdown viewer":void 0,children:u===void 0?"(not set)":typeof u=="string"?u:JSON.stringify(u,null,2)}),p&&l.jsx("div",{className:"state-desc",children:p}),c&&l.jsx("div",{className:"state-time",children:new Date(c*1e3).toLocaleTimeString()})]},s))]})]})}let Vs=null,Ws=null;(async()=>{try{Vs=(await Wh(()=>import("./jq-Bsw4JIGA.js").then(t=>t.j),[])).default}catch(e){console.warn("jq-web failed to load:",e.message),Ws=e.message}})();function Ta(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Wp(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(Vs)try{const i=Vs.json(r,n);return i==null?"[No match]":typeof i=="string"?i:JSON.stringify(i,null,2)}catch(i){if(!n.startsWith("."))try{const a=new Function("value","data",`return ${n}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch{}return`[jq error: ${i.message||i}]`}else{if(Ws){if(n.startsWith(".")&&!n.includes("|"))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const s=a.match(/^(\w+)?\[(\d+)\]$/);s?(s[1]&&(o=o[s[1]]),o=o[parseInt(s[2])]):o=o[a]}return typeof o=="string"?o:JSON.stringify(o,null,2)}catch{}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[jq not loaded: ${Ws}. JS fallback failed: ${i.message}]`}}return"[jq loading...]"}}function n_({project:e,selectedEventIndex:t}){var de;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:a}=Nt(),[s,u]=N.useState(!1),[c,d]=N.useState(null),[p,f]=N.useState({}),[m,w]=N.useState(new Set),[b,E]=N.useState(""),[h,x]=N.useState(""),[g,T]=N.useState({}),[_,k]=N.useState(""),[P,M]=N.useState([]),[$,S]=N.useState(null),[v,y]=N.useState(null),[z,R]=N.useState(!1);N.useEffect(()=>{Vu().then(M).catch(console.error)},[]);const I=N.useMemo(()=>{const B=e.mcp_servers||[],Y=new Set(B.map(me=>me.name)),oe=P.filter(me=>!Y.has(me.name));return[...B,...oe]},[e.mcp_servers,P]),D=N.useCallback(async B=>{if(!(p[B]||m.has(B))){w(Y=>new Set([...Y,B]));try{const Y=await Te(`/projects/${e.id}/mcp-servers/${encodeURIComponent(B)}/test-connection`,{method:"POST"});Y.success&&f(oe=>({...oe,[B]:Y.tools}))}catch(Y){console.error("Failed to load tools:",Y)}finally{w(Y=>{const oe=new Set(Y);return oe.delete(B),oe})}}},[e.id,p,m]);N.useEffect(()=>{var me;if(c)return;if(!b||!h){T({});return}const Y=(p[b]||[]).find(ye=>ye.name===h);if(!((me=Y==null?void 0:Y.parameters)!=null&&me.properties)){T({});return}const oe={};Object.entries(Y.parameters.properties).forEach(([ye,ue])=>{ue.type==="string"?oe[ye]=ue.default||"":ue.type==="number"||ue.type==="integer"?oe[ye]=ue.default||0:ue.type==="boolean"?oe[ye]=ue.default||!1:oe[ye]=ue.default||null}),T(oe)},[b,h,p,c]);const L=()=>{d(null),E(""),x(""),T({}),k(""),S(null),y(null),u(!0)},A=B=>{if(d(B.id),E(B.serverName),x(B.toolName),T({...B.args}),k(B.transform||""),B.result){const{text:Y}=Ta(B.result);S(Y),y(null)}else S(null),y(null);p[B.serverName]||D(B.serverName),u(!0)},U=async()=>{if(!(!b||!h)){R(!0),y(null);try{const B=await Te(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:b,tool_name:h,arguments:g})}),{text:Y,isError:oe}=Ta(B);oe?(y(Y),S(null)):(S(Y),y(null))}catch(B){y(String(B)),S(null)}finally{R(!1)}}},j=N.useMemo(()=>$?!_||!_.trim()?$:Wp($,_):null,[$,_]),V=()=>{if(!(!b||!h)){if(c){r(c,{serverName:b,toolName:h,args:{...g},transform:_||void 0});const B=n.find(Y=>Y.id===c);B&&C({...B,serverName:b,toolName:h,args:g,transform:_||void 0,history:B.history||[]})}else{const B={id:`watch-${Date.now()}`,serverName:b,toolName:h,args:{...g},transform:_||void 0,history:[]};i(B),C(B)}u(!1)}},Q=B=>{o(B)},C=N.useCallback(async(B,Y)=>{r(B.id,{isLoading:!0,error:void 0});const oe=Y??a.length-1,me=Date.now();try{const ye=await Te(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:B.serverName,tool_name:B.toolName,arguments:B.args})}),ue={eventIndex:oe,timestamp:me,result:ye},vt=[...B.history||[],ue];r(B.id,{result:ye,isLoading:!1,lastRun:me,history:vt})}catch(ye){const ue={eventIndex:oe,timestamp:me,error:String(ye)},vt=[...B.history||[],ue];r(B.id,{error:String(ye),isLoading:!1,lastRun:me,history:vt})}},[e.id,r,a.length]),te=()=>{n.forEach(B=>C(B))},ie=N.useMemo(()=>!b||!h?null:(p[b]||[]).find(Y=>Y.name===h),[b,h,p]);return l.jsxs("div",{className:"tool-watch-panel",children:[l.jsxs("div",{className:"watch-header",children:[l.jsx(Ui,{size:14}),l.jsx("span",{children:"Tool Watch"}),l.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),l.jsxs("div",{className:"watch-actions",children:[l.jsx("button",{className:"watch-btn",onClick:te,title:"Refresh all",children:l.jsx(yr,{size:12})}),l.jsx("button",{className:"watch-btn",onClick:L,title:"Add watch",children:l.jsx(qe,{size:12})})]})]}),n.length===0?l.jsxs("div",{className:"watch-empty",children:[l.jsx(Ui,{size:20,style:{opacity:.3}}),l.jsx("span",{children:"No watch expressions"}),l.jsxs("button",{className:"add-watch-btn",onClick:L,children:[l.jsx(qe,{size:12})," Add Tool Watch"]})]}):l.jsx("div",{className:"watch-list",children:n.map(B=>{let Y=B.result,oe=B.error;if(t!==null&&B.history&&B.history.length>0){const Et=B.history.filter(Me=>Me.eventIndex<=t);if(Et.length>0){const Me=Et[Et.length-1];Y=Me.result,oe=Me.error}else Y=void 0,oe=void 0}const{text:me,isError:ye}=Y?Ta(Y):{text:"",isError:!1},ue=Y?Wp(me,B.transform):"",vt=oe||ye;return l.jsxs("div",{className:`watch-item ${vt?"error":""}`,children:[l.jsxs("div",{className:"watch-item-header",children:[l.jsxs("span",{className:"watch-expr",children:[l.jsx("span",{className:"watch-server",children:B.serverName}),l.jsx("span",{className:"watch-tool",children:B.toolName}),Object.keys(B.args).length>0&&l.jsxs("span",{className:"watch-args",children:["(",Object.entries(B.args).map(([Et,Me])=>`${Et}=${JSON.stringify(Me)}`).join(", "),")"]}),t!==null&&l.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),l.jsxs("div",{className:"watch-item-actions",children:[l.jsx("button",{onClick:()=>A(B),title:"Edit watch",children:l.jsx(Kt,{size:10})}),l.jsx("button",{onClick:()=>C(B),title:"Refresh",children:B.isLoading?l.jsx(yr,{size:10,className:"spin"}):l.jsx(yr,{size:10})}),l.jsx("button",{onClick:()=>Q(B.id),title:"Remove",children:l.jsx(Je,{size:10})})]})]}),l.jsx("div",{className:"watch-result",children:B.isLoading?l.jsx("span",{className:"loading",children:"Loading..."}):oe?l.jsx("span",{className:"error",children:oe}):Y?l.jsx("pre",{className:ye?"error-text":"",children:ue}):l.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},B.id)})}),s&&l.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:l.jsxs("div",{className:"watch-dialog",onClick:B=>B.stopPropagation(),children:[l.jsxs("div",{className:"dialog-header",children:[l.jsx("span",{children:c?"Edit Watch":"Add Tool Watch"}),l.jsx("button",{onClick:()=>u(!1),children:l.jsx(n0,{size:14})})]}),l.jsxs("div",{className:"dialog-body",children:[l.jsxs("div",{className:"form-row",children:[l.jsx("label",{children:"MCP Server"}),l.jsxs("select",{value:b,onChange:B=>{E(B.target.value),c||x(""),B.target.value&&D(B.target.value)},children:[l.jsx("option",{value:"",children:"Select server..."}),I.map(B=>l.jsx("option",{value:B.name,children:B.name},B.name))]})]}),l.jsxs("div",{className:"form-row",children:[l.jsx("label",{children:"Tool"}),l.jsxs("select",{value:h,onChange:B=>x(B.target.value),disabled:!b||m.has(b),children:[l.jsx("option",{value:"",children:m.has(b)?"Loading tools...":"Select tool..."}),(p[b]||[]).map(B=>l.jsx("option",{value:B.name,children:B.name},B.name))]})]}),(ie==null?void 0:ie.description)&&l.jsx("div",{className:"tool-desc",children:ie.description}),((de=ie==null?void 0:ie.parameters)==null?void 0:de.properties)&&Object.keys(ie.parameters.properties).length>0&&l.jsxs("div",{className:"tool-args",children:[l.jsx("label",{children:"Arguments"}),Object.entries(ie.parameters.properties).map(([B,Y])=>{var oe,me;return l.jsxs("div",{className:"arg-row",children:[l.jsxs("span",{className:"arg-name",children:[B,((oe=ie.parameters.required)==null?void 0:oe.includes(B))&&l.jsx("span",{className:"required",children:"*"})]}),l.jsx("input",{type:Y.type==="number"||Y.type==="integer"?"number":"text",value:typeof g[B]=="object"?JSON.stringify(g[B]):g[B]??"",onChange:ye=>T(ue=>({...ue,[B]:ye.target.value})),placeholder:((me=Y.description)==null?void 0:me.slice(0,40))||B})]},B)})]}),b&&h&&l.jsxs("div",{className:"test-section",children:[l.jsxs("div",{className:"test-header",children:[l.jsx("label",{children:"Test & Preview"}),l.jsxs("button",{className:"test-btn",onClick:U,disabled:z,children:[z?l.jsx(yr,{size:12,className:"spin"}):l.jsx(Un,{size:12}),z?"Running...":"Test Run"]})]}),v&&l.jsxs("div",{className:"test-result error",children:[l.jsx("span",{className:"test-label",children:"Error:"}),l.jsx("pre",{children:v})]}),$&&l.jsxs("div",{className:"test-result",children:[l.jsx("span",{className:"test-label",children:"Raw Result:"}),l.jsx("pre",{children:$})]})]}),l.jsxs("div",{className:"form-row transform-row",children:[l.jsx("label",{children:"Transform (optional)"}),l.jsx("input",{type:"text",value:_,onChange:B=>k(B.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),l.jsxs("div",{className:"transform-hints",children:[l.jsx("span",{className:"hint-title",children:"jq:"}),l.jsx("code",{onClick:()=>k(".items[0].name"),children:".items[0].name"}),l.jsx("code",{onClick:()=>k(".content[].text"),children:".content[].text"}),l.jsx("code",{onClick:()=>k(".result.content[0].text"),children:".result.content[0].text"}),l.jsx("code",{onClick:()=>k('.[] | select(.status == "active")'),children:".[] | select()"}),l.jsx("span",{className:"hint-title",children:"JS:"}),l.jsx("code",{onClick:()=>k("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),l.jsx("code",{onClick:()=>k("js:data.length"),children:"js:data.length"})]})]}),$&&_&&l.jsxs("div",{className:"transform-preview",children:[l.jsx("span",{className:"test-label",children:"Transform Preview:"}),l.jsx("pre",{className:j!=null&&j.startsWith("[Transform error")?"error":"",children:j})]})]}),l.jsxs("div",{className:"dialog-footer",children:[l.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),l.jsx("button",{className:"add-btn",onClick:V,disabled:!b||!h,children:c?"Save Changes":"Add Watch"})]})]})})]})}function r_(){var et;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:o,clearWatchHistories:a,runAgentId:s,setRunAgentId:u,watches:c,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=Nt(),[m,w]=N.useState(""),[b,E]=N.useState(null),[h,x]=N.useState(null),[g,T]=N.useState(null),[_,k]=N.useState(""),[P,M]=N.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"])),[$,S]=N.useState(!0),[v,y]=N.useState(!0),[z,R]=N.useState(!1),[I,D]=N.useState(360),[L,A]=N.useState(!1),[U,j]=N.useState([]),[V,Q]=N.useState(null),[C,te]=N.useState(!1),ie=N.useRef(0),de=N.useCallback(async(W,X)=>{if(!e)return;d(W.id,{isLoading:!0,error:void 0});const Z=X??r.length-1,se=Date.now();try{const ge=await Te(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:W.serverName,tool_name:W.toolName,arguments:W.args})}),O={eventIndex:Z,timestamp:se,result:ge},K=[...W.history||[],O];d(W.id,{result:ge,isLoading:!1,lastRun:se,history:K})}catch(ge){const O={eventIndex:Z,timestamp:se,error:String(ge)},K=[...W.history||[],O];d(W.id,{error:String(ge),isLoading:!1,lastRun:se,history:K})}},[e==null?void 0:e.id,d,r.length]);N.useEffect(()=>{if(r.length>ie.current&&c.length>0){const W=r.length-1;c.forEach(X=>{X.isLoading||de(X,W)})}ie.current=r.length},[r.length,c,de]),N.useEffect(()=>{s!==null&&(Y(s),u(null))},[s,u]);const[B,Y]=N.useState(null),oe=N.useRef(null),me=N.useRef(null);N.useEffect(()=>{if(!L)return;const W=Z=>{if(!me.current)return;const ge=me.current.getBoundingClientRect().right-Z.clientX;D(Math.min(600,Math.max(200,ge)))},X=()=>{A(!1)};return document.addEventListener("mousemove",W),document.addEventListener("mouseup",X),()=>{document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",X)}},[L]);const ye=N.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),ue=N.useMemo(()=>r.filter((W,X)=>{var Z,se,ge;if(g&&(W.timestamp<g[0]||W.timestamp>g[1])||P.size>0&&!P.has(W.event_type))return!1;if($&&W.event_type==="model_response"){const O=((se=(Z=W.data)==null?void 0:Z.response_content)==null?void 0:se.parts)||((ge=W.data)==null?void 0:ge.parts)||[],K=O.some(le=>le.type==="function_call"),ne=O.some(le=>le.type==="text");if(!K&&!ne)return!1}return!(_&&!JSON.stringify(W).toLowerCase().includes(_.toLowerCase()))}),[r,g,P,_,$]),vt=h!==null?r[h]:null;N.useEffect(()=>{if(!e){j([]);return}(async()=>{te(!0);try{const X=await Es(e.id);j(X)}catch(X){console.error("Failed to load sessions:",X),j([])}finally{te(!1)}})()},[e]);const Et=N.useCallback(async W=>{if(!e){Q(null);return}if(!W){o(),a(),f(null),Q(null),x(null),T(null);return}try{const X=await Eh(e.id,W);o(),a(),f(X.id),Q(W),x(null),T(null);for(const Z of X.events)i(Z)}catch(X){alert(`Failed to load session: ${X.message||"Unknown error"}`)}},[e,o,a,f,i]);N.useEffect(()=>{t&&oe.current&&(oe.current.scrollTop=oe.current.scrollHeight)},[r.length,t]);const Me=N.useCallback(()=>{if(!e||!m.trim()||t)return;b&&(b.close(),E(null)),p||(o(),a(),Q(null)),n(!0),x(null),T(null);const W=Lh(e.id);E(W),W.onopen=()=>{W.send(JSON.stringify({message:m,agent_id:B||void 0,session_id:p||void 0}))},W.onmessage=X=>{var se;const Z=JSON.parse(X.data);if(Z.event_type==="agent_start"&&((se=Z.data)!=null&&se.session_id)){const ge=Z.data.session_id;Z.data.session_reused,f(ge),ge&&U.some(O=>O.id===ge)&&Q(ge)}else Z.type==="session_started"?(f(Z.session_id),Z.session_id&&U.some(ge=>ge.id===Z.session_id)&&Q(Z.session_id)):Z.type==="completed"?(n(!1),W.close()):Z.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:Z.error}})):i(Z)},W.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},W.onclose=()=>{n(!1)}},[e,m,t,b,o,n,i,B,p]),In=N.useCallback(()=>{b==null||b.close(),n(!1)},[b,n]);N.useEffect(()=>{const W=X=>{if((X.metaKey||X.ctrlKey)&&X.key==="Enter"){X.preventDefault(),Me();return}if(X.key==="ArrowDown"||X.key==="ArrowUp"){if(X.target instanceof HTMLInputElement||X.target instanceof HTMLTextAreaElement||(X.preventDefault(),ue.length===0))return;if(X.key==="ArrowDown")if(h===null){const Z=r.indexOf(ue[0]);x(Z)}else{const Z=ue.findIndex(se=>r.indexOf(se)===h);if(Z<ue.length-1){const se=r.indexOf(ue[Z+1]);x(se)}}else if(X.key==="ArrowUp")if(h===null){const Z=r.indexOf(ue[ue.length-1]);x(Z)}else{const Z=ue.findIndex(se=>r.indexOf(se)===h);if(Z>0){const se=r.indexOf(ue[Z-1]);x(se)}}}};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[Me,ue,h,r]);const F=N.useCallback(()=>{var ge;if(r.length===0)return;const W={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:B||((ge=e==null?void 0:e.app)==null?void 0:ge.root_agent_id),events:r},X=new Blob([JSON.stringify(W,null,2)],{type:"application/json"}),Z=URL.createObjectURL(X),se=document.createElement("a");se.href=Z,se.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(se),se.click(),document.body.removeChild(se),URL.revokeObjectURL(Z)},[r,e,B]),ce=N.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const W=await Nh(p);if(W.success){alert(W.message||"Session saved to memory successfully");try{const X=await Es(e.id);j(X)}catch{}}else alert(`Failed to save to memory: ${W.error||"Unknown error"}`)}catch(W){alert(`Error saving to memory: ${W.message||"Unknown error"}`)}},[p,e]),_e=N.useCallback(()=>{const W=document.createElement("input");W.type="file",W.accept=".json",W.onchange=async X=>{var se;const Z=(se=X.target.files)==null?void 0:se[0];if(Z)try{const ge=await Z.text(),O=JSON.parse(ge);if(!O.events||!Array.isArray(O.events)){alert("Invalid run file: missing events array");return}o(),a(),x(null),T(null),O.events.forEach(K=>{i(K)})}catch(ge){alert(`Failed to load run file: ${ge}`)}},W.click()},[o,a,i]);return N.useEffect(()=>{if(h!==null){const W=document.querySelector(".event-row.selected");W==null||W.scrollIntoView({behavior:"smooth",block:"nearest"})}},[h]),e?l.jsxs("div",{className:`run-panel ${L?"resizing":""}`,children:[l.jsx("style",{children:`
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
          grid-template-columns: 60px 80px 100px 80px 1fr;
          gap: 1px;
          background: #18181b;
          border-bottom: 1px solid #27272a;
          font-size: 10px;
          font-weight: 600;
          color: #71717a;
          text-transform: uppercase;
        }
        
        .event-list-header > div {
          padding: 6px 8px;
          background: #18181b;
        }
        
        .event-list {
          flex: 1;
          overflow-y: auto;
          background: #09090b;
        }
        
        .event-row {
          display: grid;
          grid-template-columns: 60px 80px 100px 80px 1fr;
          gap: 1px;
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
        .event-row .agent { font-weight: 500; }
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
      `}),l.jsxs("div",{className:"input-area",children:[l.jsxs("select",{className:"agent-selector",value:B||"",onChange:W=>Y(W.target.value||null),disabled:t,title:"Select which agent to run",children:[l.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((et=e.agents.find(W=>W.id===e.app.root_agent_id))==null?void 0:et.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(W=>W.id!==e.app.root_agent_id).map(W=>l.jsxs("option",{value:W.id,children:[W.name," (",W.type.replace("Agent",""),")"]},W.id))]}),l.jsxs("select",{className:"agent-selector",value:V||"",onChange:W=>Et(W.target.value||null),disabled:t||C,style:{minWidth:180},title:"Load a saved session",children:[l.jsx("option",{value:"",children:C?"Loading...":"Load Session..."}),U.map(W=>{const X=new Date(W.started_at*1e3),Z=W.duration?`${W.duration.toFixed(1)}s`:"?";return l.jsxs("option",{value:W.id,children:[X.toLocaleString()," (",W.event_count," events, ",Z,")"]},W.id)})]}),l.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:W=>w(W.target.value),onKeyDown:W=>W.key==="Enter"&&!W.shiftKey&&Me(),disabled:t}),t?l.jsxs("button",{className:"stop",onClick:In,children:[l.jsx(X1,{size:14}),"Stop"]}):l.jsxs("button",{onClick:Me,disabled:!m.trim(),children:[l.jsx(Un,{size:14}),"Run"]})]}),l.jsxs("div",{className:"toolbar",children:[l.jsxs("div",{className:"toolbar-section",children:[l.jsx(G1,{size:12,style:{color:"#71717a"}}),l.jsx("input",{type:"text",placeholder:"Filter events...",value:_,onChange:W=>k(W.target.value)})]}),l.jsx("div",{className:"toolbar-divider"}),l.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(W=>l.jsx("button",{className:`filter-chip ${P.has(W)?"active":""}`,onClick:()=>{const X=new Set(P);X.has(W)?X.delete(W):X.add(W),M(X)},children:W.replace("_"," ")},W)),l.jsx("button",{className:`filter-chip ${$?"active":""}`,onClick:()=>S(!$),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),l.jsx("div",{className:"toolbar-divider"}),l.jsxs("div",{className:"toolbar-section",children:[l.jsxs("button",{className:`toolbar-btn ${v?"active":""}`,onClick:()=>y(!v),children:[l.jsx(yi,{size:12}),"State"]}),l.jsxs("button",{className:`toolbar-btn ${z?"active":""}`,onClick:()=>R(!z),children:[l.jsx(Bd,{size:12}),"Tools"]})]}),l.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[l.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[ue.length," / ",r.length," events"]}),g&&l.jsx("button",{className:"toolbar-btn",onClick:()=>T(null),children:"Clear Range"})]})]}),l.jsxs("div",{className:"main-content",ref:me,children:[l.jsxs("div",{className:"event-list-container",children:[l.jsxs("div",{className:"event-list-header",children:[l.jsx("div",{children:"#"}),l.jsx("div",{children:"Time"}),l.jsx("div",{children:"Agent"}),l.jsx("div",{children:"Type"}),l.jsx("div",{children:"Info"})]}),l.jsx("div",{className:"event-list",ref:oe,children:ue.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx($h,{size:24}),l.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):ue.map((W,X)=>{const Z=r.indexOf(W),se=Vp[W.event_type]||Vp.error,ge=JS[W.event_type]||Fh;return l.jsxs("div",{className:`event-row ${h===Z?"selected":""}`,style:{background:se.bg},onClick:()=>x(Z),onDoubleClick:()=>{y(!1),R(!1)},children:[l.jsx("div",{className:"index",children:Z}),l.jsx("div",{className:"time",style:{color:se.fg},children:XS(W.timestamp,ye.min)}),l.jsx("div",{className:"agent",style:{color:se.fg},children:W.agent_name}),l.jsxs("div",{className:"type",style:{color:se.fg},children:[l.jsx(ge,{size:10}),W.event_type.split("_")[0]]}),l.jsx("div",{className:"summary",children:YS(W)})]},Z)})})]}),l.jsxs("div",{className:"side-panel-container",style:{width:I},children:[l.jsx("div",{className:`resize-handle ${L?"active":""}`,onMouseDown:()=>A(!0)}),l.jsxs("div",{className:"side-panel",style:{width:I-4},children:[l.jsxs("div",{className:"side-panel-tabs",children:[l.jsxs("button",{className:`side-panel-tab ${!v&&!z?"active":""}`,onClick:()=>{y(!1),R(!1)},children:[l.jsx(Ui,{size:12,style:{marginRight:4}}),"Details"]}),l.jsxs("button",{className:`side-panel-tab ${v?"active":""}`,onClick:()=>{y(!0),R(!1)},children:[l.jsx(yi,{size:12,style:{marginRight:4}}),"State"]}),l.jsxs("button",{className:`side-panel-tab ${z?"active":""}`,onClick:()=>{R(!0),y(!1)},children:[l.jsx(Bd,{size:12,style:{marginRight:4}}),"Tools"]})]}),l.jsx("div",{className:"side-panel-content",children:z?l.jsx(n_,{project:e,selectedEventIndex:h}):v?l.jsx(t_,{events:r,selectedEventIndex:h,project:e}):vt?l.jsx(ZS,{event:vt}):l.jsxs("div",{className:"empty-state",children:[l.jsx(Ui,{size:24}),l.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),l.jsxs("div",{className:"stats-bar",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Events:"}),l.jsx("span",{className:"stat-value",children:r.length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Tool Calls:"}),l.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="tool_call").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Model Calls:"}),l.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="model_call").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"State Changes:"}),l.jsx("span",{className:"stat-value",children:r.filter(W=>W.event_type==="state_change").length})]}),r.length>0&&l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Duration:"}),l.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),l.jsx("div",{className:"stats-bar-spacer"}),l.jsxs("button",{className:"stats-bar-btn",onClick:_e,title:"Load a saved run",children:[l.jsx(Uh,{size:12}),"Load"]}),l.jsxs("button",{className:"stats-bar-btn",onClick:F,disabled:r.length===0,title:"Save current run to file",children:[l.jsx(Hu,{size:12}),"Save"]}),l.jsxs("button",{className:"stats-bar-btn",onClick:ce,disabled:!p||r.length===0,title:"Save current session to memory",children:[l.jsx(yi,{size:12}),"Save to Memory"]})]})]}):l.jsx("div",{className:"run-panel empty",children:"No project loaded"})}function Hp(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function i_(){const{project:e}=Nt(),[t,n]=N.useState([{id:"root",name:"All Tests",description:"Root test group",tests:[],children:[]}]),[r,i]=N.useState("root"),[o,a]=N.useState(null),[s,u]=N.useState(new Map),[c,d]=N.useState(new Set),[p,f]=N.useState(new Set(["root"]));if(!e)return null;function m(S,v){for(const y of S){if(y.id===v)return y;const z=m(y.children,v);if(z)return z}return null}function w(S,v,y){return S.map(z=>z.id===v?{...z,...y}:{...z,children:w(z.children,v,y)})}const b=m(t,r),E=b==null?void 0:b.tests.find(S=>S.id===o);function h(S){const v=new Set(p);v.has(S)?v.delete(S):v.add(S),f(v)}function x(S){const v={id:Hp(),name:"New Group",description:"",tests:[],children:[]};n(y=>{var z,R;return S==="root"&&((z=y[0])==null?void 0:z.id)==="root"?[{...y[0],children:[...y[0].children,v]}]:w(y,S,{children:[...((R=m(y,S))==null?void 0:R.children)||[],v]})}),i(v.id),f(y=>new Set([...y,S]))}function g(S){const v={id:Hp(),name:"New Test",description:"",input_message:"",expected_tool_calls:[],expected_state:{}};n(y=>{const z=m(y,S);return z?w(y,S,{tests:[...z.tests,v]}):y}),a(v.id)}function T(S,v,y){n(z=>{const R=m(z,S);return R?w(z,S,{tests:R.tests.map(I=>I.id===v?{...I,...y}:I)}):z})}function _(S,v){n(y=>{const z=m(y,S);return z?w(y,S,{tests:z.tests.filter(R=>R.id!==v)}):y}),o===v&&a(null)}async function k(S){d(R=>new Set([...R,S.id]));const v=Date.now();await new Promise(R=>setTimeout(R,1e3+Math.random()*2e3));const y=Math.random()>.3,z={test_id:S.id,passed:y,duration_ms:Date.now()-v,error:y?void 0:"Expected output did not match"};u(R=>new Map(R).set(S.id,z)),d(R=>{const I=new Set(R);return I.delete(S.id),I})}async function P(S){for(const v of S.tests)await k(v);for(const v of S.children)await P(v)}function M(S){let v=0,y=0,z=0;function R(I){for(const D of I.tests){v++;const L=s.get(D.id);L&&(L.passed?y++:z++)}for(const D of I.children)R(D)}return R(S),{total:v,passed:y,failed:z,pending:v-y-z}}function $(S,v=0){return S.map(y=>{const z=p.has(y.id),R=M(y),I=y.tests.length>0||y.children.length>0;return l.jsxs("div",{className:"test-tree-item",children:[l.jsxs("div",{className:`tree-group ${r===y.id?"selected":""}`,style:{paddingLeft:8+v*16},onClick:()=>i(y.id),children:[l.jsx("button",{className:"expand-btn",onClick:D=>{D.stopPropagation(),h(y.id)},children:I?z?l.jsx(At,{size:14}):l.jsx(It,{size:14}):l.jsx("span",{style:{width:14}})}),l.jsx(Od,{size:14,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{className:"group-name",children:y.name}),R.total>0&&l.jsxs("span",{className:"group-stats",children:[R.passed>0&&l.jsx("span",{className:"stat-passed",children:R.passed}),R.failed>0&&l.jsx("span",{className:"stat-failed",children:R.failed}),R.pending>0&&l.jsx("span",{className:"stat-pending",children:R.pending})]}),l.jsx("button",{className:"run-btn",onClick:D=>{D.stopPropagation(),P(y)},title:"Run all tests in this group",children:l.jsx(Un,{size:12})})]}),z&&l.jsxs("div",{className:"tree-children",children:[y.tests.map(D=>{const L=s.get(D.id),A=c.has(D.id);return l.jsxs("div",{className:`tree-test ${o===D.id?"selected":""}`,style:{paddingLeft:24+v*16},onClick:()=>{i(y.id),a(D.id)},children:[A?l.jsx(V1,{size:14,className:"spinning",style:{color:"var(--warning)"}}):L?L.passed?l.jsx(Rd,{size:14,style:{color:"var(--success)"}}):l.jsx(Ud,{size:14,style:{color:"var(--error)"}}):l.jsx(fa,{size:14,style:{color:"var(--text-muted)"}}),l.jsx("span",{className:"test-name",children:D.name}),l.jsx("button",{className:"run-btn",onClick:U=>{U.stopPropagation(),k(D)},disabled:A,children:l.jsx(Un,{size:12})})]},D.id)}),$(y.children,v+1)]})]},y.id)})}return l.jsxs("div",{className:"eval-panel",children:[l.jsx("style",{children:`
        .eval-panel {
          display: flex;
          gap: 20px;
          height: calc(100vh - 180px);
        }
        
        .eval-sidebar {
          width: 320px;
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
        
        .test-tree {
          flex: 1;
          overflow-y: auto;
          padding: 8px;
        }
        
        .tree-group, .tree-test {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 8px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background 0.15s ease;
        }
        
        .tree-group:hover, .tree-test:hover {
          background: var(--bg-tertiary);
        }
        
        .tree-group.selected, .tree-test.selected {
          background: var(--bg-hover);
        }
        
        .expand-btn {
          padding: 2px;
          color: var(--text-muted);
        }
        
        .group-name, .test-name {
          flex: 1;
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        .group-stats {
          display: flex;
          gap: 4px;
        }
        
        .group-stats span {
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
        
        .tree-group:hover .run-btn, .tree-test:hover .run-btn {
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
        
        .test-editor {
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
          margin-bottom: 20px;
        }
        
        .form-section h4 {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-secondary);
        }
        
        .form-section textarea {
          width: 100%;
          min-height: 80px;
          font-family: var(--font-mono);
          font-size: 13px;
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
          margin-bottom: 8px;
        }
        
        .result-header.passed {
          color: var(--success);
        }
        
        .result-header.failed {
          color: var(--error);
        }
        
        .result-error {
          padding: 8px;
          background: rgba(255, 107, 107, 0.1);
          border-radius: var(--radius-sm);
          font-size: 13px;
          color: var(--error);
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
      `}),l.jsxs("aside",{className:"eval-sidebar",children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsx("h3",{children:"Evaluation Tests"}),l.jsxs("div",{className:"header-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(r),title:"Add test group",children:l.jsx(Od,{size:14})}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>g(r),title:"Add test",children:[l.jsx(qe,{size:14}),"Test"]})]})]}),l.jsx("div",{className:"test-tree",children:$(t)})]}),l.jsx("div",{className:"test-editor",children:E?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(fa,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("input",{type:"text",value:E.name,onChange:S=>T(r,E.id,{name:S.target.value}),placeholder:"Test name"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>k(E),disabled:c.has(E.id),children:[l.jsx(Un,{size:14}),"Run"]}),l.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>_(r,E.id),children:l.jsx(Je,{size:14})})]}),l.jsxs("div",{className:"editor-content",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("textarea",{value:E.description,onChange:S=>T(r,E.id,{description:S.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Input Message"}),l.jsx("textarea",{value:E.input_message,onChange:S=>T(r,E.id,{input_message:S.target.value}),placeholder:"The message to send to the agent..."})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected Output (optional)"}),l.jsx("textarea",{value:E.expected_output||"",onChange:S=>T(r,E.id,{expected_output:S.target.value||void 0}),placeholder:"Expected text in the response (partial match)..."})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected Tool Calls"}),l.jsx("textarea",{value:E.expected_tool_calls.join(`
`),onChange:S=>T(r,E.id,{expected_tool_calls:S.target.value.split(`
`).filter(Boolean)}),placeholder:"Tool names (one per line)...",style:{minHeight:60}})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected State (JSON)"}),l.jsx("textarea",{value:JSON.stringify(E.expected_state,null,2),onChange:S=>{try{const v=JSON.parse(S.target.value);T(r,E.id,{expected_state:v})}catch{}},placeholder:'{"key": "value"}'})]})]}),s.has(E.id)&&l.jsxs("div",{className:"result-panel",children:[l.jsxs("div",{className:`result-header ${s.get(E.id).passed?"passed":"failed"}`,children:[s.get(E.id).passed?l.jsxs(l.Fragment,{children:[l.jsx(Rd,{size:18}),l.jsx("strong",{children:"Passed"})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ud,{size:18}),l.jsx("strong",{children:"Failed"})]}),l.jsxs("span",{style:{marginLeft:"auto",color:"var(--text-muted)",fontSize:12},children:[s.get(E.id).duration_ms,"ms"]})]}),s.get(E.id).error&&l.jsx("div",{className:"result-error",children:s.get(E.id).error})]})]}):b?l.jsxs("div",{className:"editor-content",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Group Name"}),l.jsx("input",{type:"text",value:b.name,onChange:S=>n(v=>w(v,b.id,{name:S.target.value}))})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("textarea",{value:b.description,onChange:S=>n(v=>w(v,b.id,{description:S.target.value})),placeholder:"Description of this test group..."})]}),l.jsx("div",{style:{marginTop:20},children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>P(b),children:[l.jsx(Un,{size:16}),"Run All Tests in Group"]})})]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(fa,{size:48}),l.jsxs("p",{children:["Select a test to edit",l.jsx("br",{}),"or create a new one"]})]})})]})}function o_(){const{project:e,setProject:t}=Nt(),[n,r]=N.useState(""),[i,o]=N.useState(!0),[a,s]=N.useState(!1),[u,c]=N.useState(null),[d,p]=N.useState(!1);if(!e)return null;N.useEffect(()=>{f()},[e.id]);async function f(){o(!0),c(null);try{const x=await zh(e.id);r(x),s(!1)}catch(x){c(x.message)}finally{o(!1)}}function m(x){x!==void 0&&(r(x),s(!0),c(null))}async function w(){o(!0),c(null);try{const x=await Th(e.id,n);t(x),s(!1)}catch(x){c(x.message)}finally{o(!1)}}function b(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function E(){const x=new Blob([n],{type:"text/yaml"}),g=URL.createObjectURL(x),T=document.createElement("a");T.href=g,T.download=`${e.name}.yaml`,T.click(),URL.revokeObjectURL(g)}function h(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async g=>{var k;const T=(k=g.target.files)==null?void 0:k[0];if(!T)return;const _=await T.text();r(_),s(!0)},x.click()}return l.jsxs("div",{className:"yaml-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"yaml-header",children:[l.jsxs("div",{className:"yaml-title",children:[l.jsx("h3",{children:"Project Configuration"}),a&&l.jsxs("span",{className:"status-badge warning",children:[l.jsx(Md,{size:12}),"Unsaved changes"]}),u&&l.jsxs("span",{className:"status-badge error",children:[l.jsx(Md,{size:12}),u]}),d&&l.jsxs("span",{className:"status-badge success",children:[l.jsx(Oh,{size:12}),"Copied!"]})]}),l.jsxs("div",{className:"yaml-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,title:"Copy to clipboard",children:[l.jsx(Dh,{size:14}),"Copy"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:E,title:"Download YAML",children:[l.jsx(Hu,{size:14}),"Download"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:h,title:"Upload YAML",children:[l.jsx(Uh,{size:14}),"Upload"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[l.jsx(yr,{size:14}),"Reload"]}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:w,disabled:!a||i,children:"Apply Changes"})]})]}),l.jsx("div",{className:"yaml-editor",children:l.jsx(Or,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),l.jsxs("div",{className:"yaml-info",children:[l.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),l.jsxs("p",{children:["You can edit the YAML directly, then click ",l.jsx("code",{children:"Apply Changes"})," to update the project. Use ",l.jsx("code",{children:"Download"})," to save a backup or ",l.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function qp(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function l_(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function a_(e,t){var n;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const r=t.agents.find(i=>i.id===e.agent_id);return r?`AgentTool(agent=${r.name}_agent)`:"AgentTool(agent=sub_agent)"}else if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";return""}function s_(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${qp(i.instruction)}"""`),i.description&&o.push(`description="${qp(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(u=>a_(u,t)).filter(u=>u&&!u.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const u=i.sub_agents.map(c=>n.get(c)||"sub_agent").join(", ");o.push(`sub_agents=[${u}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const s={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[u,c]of Object.entries(s)){const d=i[u]||[];if(d.length>0){const p=d.map(f=>`"${f.module_path}"`).join(", ");d.length===1?o.push(`${c}="${d[0].module_path}"`):o.push(`${c}=[${p}]`)}}return`${r} = Agent(
    ${o.join(`,
    `)}
)`}else if(e.type==="SequentialAgent"){const i=e.sub_agents.map(o=>n.get(o)||"sub_agent").join(", ");return`${r} = SequentialAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}else if(e.type==="LoopAgent"){const i=e,o=[`name="${e.name}"`],a=e.sub_agents.map(s=>n.get(s)||"sub_agent").join(", ");return o.push(`sub_agents=[${a}]`),i.max_iterations&&o.push(`max_iterations=${i.max_iterations}`),`${r} = LoopAgent(
    ${o.join(`,
    `)}
)`}else if(e.type==="ParallelAgent"){const i=e.sub_agents.map(o=>n.get(o)||"sub_agent").join(", ");return`${r} = ParallelAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}return`# Unknown agent type: ${e.type}`}function u_(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = MCPToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        )"),t.push("    )"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = MCPToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),t.push("    )"),t.push(")")),t.join(`
`)}function c_(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(_=>{const k=n[_];if(k){const M=_.toLowerCase().includes("key")||_.toLowerCase().includes("secret")?"***":k;t.push(`os.environ["${_}"] = "${M}"  # Set your ${_}`)}else t.push(`# os.environ["${_}"] = ""  # TODO: Set your ${_}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(_=>_.type==="SequentialAgent"),a=e.agents.some(_=>_.type==="LoopAgent"),s=e.agents.some(_=>_.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),s&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(_=>{var k;return _.type==="LlmAgent"&&((k=_.model)==null?void 0:k.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(_=>_.type==="LlmAgent"&&_.tools.some(k=>k.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;e.agents.forEach(_=>{_.type==="LlmAgent"&&_.tools.forEach(k=>{k.type==="builtin"&&k.name&&d.add(k.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0&&(i.add("from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset"),i.add("from google.adk.tools.mcp_tool.mcp_toolset import StdioConnectionParams"),i.add("from google.adk.tools.mcp_tool.mcp_toolset import StdioServerParameters")),i.add("from google.adk.apps import App");const f=e.app.plugins.length>0;f&&e.app.plugins.forEach(_=>{_.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const m=Array.from(i).sort();t.push(...m),t.push(""),t.push("");const w=new Map;e.agents.forEach(_=>{const k=_.name.endsWith("_agent")?_.name:`${_.name}_agent`;w.set(_.id,k)});const b=[],E=new Set;function h(_){if(E.has(_))return;const k=e.agents.find(P=>P.id===_);k&&(k.sub_agents.forEach(P=>h(P)),E.add(_),b.push(k))}e.agents.forEach(_=>h(_.id));const x=new Map;b.forEach(_=>{_.type==="LlmAgent"&&_.tools.forEach(k=>{k.type==="mcp"&&k.server&&x.set(k.server.name,k.server)})}),x.size>0&&(t.push("# MCP Server Toolsets"),x.forEach(_=>{t.push(u_(_)),t.push("")}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(_=>{t.push(_.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(_=>{t.push(_.code),t.push("")}),t.push("")),t.push("# Models"),b.forEach(_=>{_.type==="LlmAgent"&&_.model&&(t.push(l_(_.model,`${_.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),b.forEach(_=>{t.push(s_(_,e,w)),t.push("")});const g=e.agents.find(_=>_.id===e.app.root_agent_id),T=g?w.get(g.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${T},`),f){const _=e.app.plugins.map(k=>k.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${k.max_retries||3})`:`        # ${k.type}()`);t.push("    plugins=["),t.push(_.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function d_(){const{project:e}=Nt(),[t,n]=N.useState(!1);if(!e)return null;const r=N.useMemo(()=>c_(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),s=URL.createObjectURL(a),u=document.createElement("a");u.href=s,u.download=`${e.name}_agent.py`,u.click(),URL.revokeObjectURL(s)}return l.jsxs("div",{className:"code-panel",children:[l.jsx("style",{children:`
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
          padding: 2px 8px;
          background: rgba(167, 139, 250, 0.15);
          color: var(--accent-primary);
          border-radius: 999px;
        }
        
        .status-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          font-size: 11px;
          border-radius: 999px;
        }
        
        .status-badge.success {
          background: rgba(0, 245, 212, 0.15);
          color: var(--success);
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
      `}),l.jsxs("div",{className:"code-header",children:[l.jsxs("div",{className:"code-title",children:[l.jsx(En,{size:16}),l.jsx("h3",{children:"Python Code"}),l.jsx("span",{className:"badge",children:"Generated"}),t&&l.jsxs("span",{className:"status-badge success",children:[l.jsx(Oh,{size:12}),"Copied!"]})]}),l.jsxs("div",{className:"code-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[l.jsx(Dh,{size:14}),"Copy"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[l.jsx(Hu,{size:14}),"Download"]})]})]}),l.jsx("div",{className:"code-editor",children:l.jsx(Or,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),l.jsxs("div",{className:"code-info",children:[l.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),l.jsxs("p",{children:["Place this in a file named ",l.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",l.jsx("code",{children:"adk web ."})," or ",l.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const p_=[{id:"app",label:"App Config",icon:Y1},{id:"agents",label:"Agents",icon:qn},{id:"tools",label:"Tools",icon:Kt},{id:"callbacks",label:"Callbacks",icon:En},{id:"run",label:"Run",icon:$h},{id:"eval",label:"Evaluate",icon:Z1},{id:"yaml",label:"YAML",icon:H1},{id:"code",label:"Code",icon:En}],f_=["app","agents","tools","callbacks","run","eval","yaml","code"];function Pa(){const{projectId:e,tab:t,itemId:n}=Wv(),r=Uu(),{project:i,setProject:o,activeTab:a,setActiveTab:s,hasUnsavedChanges:u,setHasUnsavedChanges:c,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=Nt(),[w,b]=N.useState(!0),[E,h]=N.useState(!1),x=N.useRef(!0),g=N.useRef(null);N.useEffect(()=>{t&&f_.includes(t)?s(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),N.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function T(S){s(S),S==="agents"&&d?r(`/project/${e}/${S}/${d}`,{replace:!0}):S==="tools"&&f?r(`/project/${e}/${S}/${f}`,{replace:!0}):r(`/project/${e}/${S}`,{replace:!0})}function _(S){S?r(`/project/${e}/${a}/${S}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}N.useEffect(()=>(e&&k(e),()=>{o(null),c(!1)}),[e]);async function k(S){x.current=!0;try{const v=await Sh(S);o(v),g.current=JSON.stringify(v),c(!1)}catch(v){console.error("Failed to load project:",v),r("/")}finally{b(!1),setTimeout(()=>{x.current=!1},100)}}async function P(){if(i){h(!0);try{await Ns(i.id,i),g.current=JSON.stringify(i),c(!1)}catch(S){console.error("Failed to save project:",S)}finally{h(!1)}}}const M=N.useRef(null);N.useEffect(()=>{if(i&&!x.current&&M.current){const S=i.app.models||[],v=M.current||[];if(S.some((z,R)=>{const I=v.find(D=>D.id===z.id);return I?I.provider!==z.provider||I.model_name!==z.model_name||I.api_base!==z.api_base||I.temperature!==z.temperature||I.max_output_tokens!==z.max_output_tokens||I.top_p!==z.top_p||I.top_k!==z.top_k:!1})){const z=i.app.default_model_id,R=i.agents.map(D=>{if(D.type==="LlmAgent"&&D.model){const L=D.model._appModelId;if(L){const A=S.find(U=>U.id===L);if(A)return{...D,model:{provider:A.provider,model_name:A.model_name,api_base:A.api_base,temperature:A.temperature,max_output_tokens:A.max_output_tokens,top_p:A.top_p,top_k:A.top_k,fallbacks:[],_appModelId:L}}}else if(z){const A=S.find(U=>U.id===z);if(A&&D.model.provider===A.provider&&D.model.model_name===A.model_name&&D.model.api_base===A.api_base)return{...D,model:{provider:A.provider,model_name:A.model_name,api_base:A.api_base,temperature:A.temperature,max_output_tokens:A.max_output_tokens,top_p:A.top_p,top_k:A.top_k,fallbacks:[],_appModelId:z}}}}return D});R.some((D,L)=>JSON.stringify(D)!==JSON.stringify(i.agents[L]))&&o({...i,agents:R})}}i&&(M.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const $=N.useRef(null);return N.useEffect(()=>(i&&!x.current&&g.current&&JSON.stringify(i)!==g.current&&(c(!0),$.current&&clearTimeout($.current),$.current=setTimeout(async()=>{try{await Ns(i.id,i),g.current=JSON.stringify(i),c(!1)}catch(v){console.error("Auto-save failed:",v)}},500)),()=>{$.current&&clearTimeout($.current)}),[i]),w?l.jsxs("div",{className:"loading-screen",children:[l.jsx("style",{children:`
          .loading-screen {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-muted);
          }
        `}),"Loading project..."]}):i?l.jsxs("div",{className:"project-editor",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("header",{className:"top-bar",children:[l.jsxs("div",{className:"top-bar-left",children:[l.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[l.jsx(U1,{size:18}),"Project"]}),l.jsx("h1",{className:"project-name",children:i.name})]}),l.jsx("nav",{className:"tabs-bar",children:p_.map(S=>l.jsxs("button",{className:`tab-btn ${a===S.id?"active":""}`,onClick:()=>T(S.id),children:[l.jsx(S.icon,{size:14}),S.label]},S.id))}),l.jsx("div",{className:"top-bar-right",children:l.jsxs("button",{className:"btn btn-primary",onClick:P,disabled:E,children:[l.jsx(Ku,{size:16}),E?"Saving...":"Save"]})})]}),l.jsxs("main",{className:"main-content",children:[a==="app"&&l.jsx(l0,{}),a==="agents"&&l.jsx(pS,{onSelectAgent:_}),a==="tools"&&l.jsx(qS,{onSelectTool:_}),a==="callbacks"&&l.jsx(GS,{onSelectCallback:_}),a==="run"&&l.jsx(r_,{}),a==="eval"&&l.jsx(i_,{}),a==="yaml"&&l.jsx(o_,{}),a==="code"&&l.jsx(d_,{})]})]}):null}function m_(){const{setMcpServers:e,setBuiltinTools:t}=Nt();return N.useEffect(()=>{Vu().then(e).catch(console.error),Ph().then(t).catch(console.error)},[e,t]),l.jsxs(a1,{children:[l.jsx(or,{path:"/",element:l.jsx(r0,{})}),l.jsx(or,{path:"/project/:projectId",element:l.jsx(Pa,{})}),l.jsx(or,{path:"/project/:projectId/:tab",element:l.jsx(Pa,{})}),l.jsx(or,{path:"/project/:projectId/:tab/:itemId",element:l.jsx(Pa,{})}),l.jsx(or,{path:"*",element:l.jsx(o1,{to:"/",replace:!0})})]})}La.createRoot(document.getElementById("root")).render(l.jsx(Rt.StrictMode,{children:l.jsx(c1,{children:l.jsx(m_,{})})}));export{ml as a,h_ as g};
