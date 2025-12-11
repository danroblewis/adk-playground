function Ug(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var $o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ml(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function h_(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Kp={exports:{}},hl={},Qp={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),Vg=Symbol.for("react.portal"),Wg=Symbol.for("react.fragment"),Hg=Symbol.for("react.strict_mode"),qg=Symbol.for("react.profiler"),Kg=Symbol.for("react.provider"),Qg=Symbol.for("react.context"),Gg=Symbol.for("react.forward_ref"),Jg=Symbol.for("react.suspense"),Yg=Symbol.for("react.memo"),Xg=Symbol.for("react.lazy"),mc=Symbol.iterator;function Zg(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var Gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jp=Object.assign,Yp={};function Dr(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||Gp}Dr.prototype.isReactComponent={};Dr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xp(){}Xp.prototype=Dr.prototype;function Hs(e,t,n){this.props=e,this.context=t,this.refs=Yp,this.updater=n||Gp}var qs=Hs.prototype=new Xp;qs.constructor=Hs;Jp(qs,Dr.prototype);qs.isPureReactComponent=!0;var hc=Array.isArray,Zp=Object.prototype.hasOwnProperty,Ks={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Zp.call(t,r)&&!ef.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Hi,type:e,key:o,ref:a,props:i,_owner:Ks.current}}function ex(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function tx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gc=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tx(""+e.key):t.toString(36)}function So(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Hi:case Vg:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+$l(a,0):r,hc(i)?(n="",e!=null&&(n=e.replace(gc,"$&/")+"/"),So(i,t,n,"",function(c){return c})):i!=null&&(Qs(i)&&(i=ex(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(gc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",hc(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+$l(o,s);a+=So(o,t,n,u,i)}else if(u=Zg(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+$l(o,s++),a+=So(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function to(e,t,n){if(e==null)return e;var r=[],i=0;return So(e,r,"","",function(o){return t.call(n,o,i++)}),r}function nx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},_o={transition:null},rx={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:_o,ReactCurrentOwner:Ks};function nf(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Dr;se.Fragment=Wg;se.Profiler=qg;se.PureComponent=Hs;se.StrictMode=Hg;se.Suspense=Jg;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rx;se.act=nf;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jp({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Ks.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Zp.call(t,u)&&!ef.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Hi,type:e.type,key:i,ref:o,props:r,_owner:a}};se.createContext=function(e){return e={$$typeof:Qg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kg,_context:e},e.Consumer=e};se.createElement=tf;se.createFactory=function(e){var t=tf.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:Gg,render:e}};se.isValidElement=Qs;se.lazy=function(e){return{$$typeof:Xg,_payload:{_status:-1,_result:e},_init:nx}};se.memo=function(e,t){return{$$typeof:Yg,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=_o.transition;_o.transition={};try{e()}finally{_o.transition=t}};se.unstable_act=nf;se.useCallback=function(e,t){return Ye.current.useCallback(e,t)};se.useContext=function(e){return Ye.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};se.useEffect=function(e,t){return Ye.current.useEffect(e,t)};se.useId=function(){return Ye.current.useId()};se.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return Ye.current.useMemo(e,t)};se.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};se.useRef=function(e){return Ye.current.useRef(e)};se.useState=function(e){return Ye.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return Ye.current.useTransition()};se.version="18.3.1";Qp.exports=se;var N=Qp.exports;const Rt=ml(N),ix=Ug({__proto__:null,default:Rt},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ox=N,lx=Symbol.for("react.element"),ax=Symbol.for("react.fragment"),sx=Object.prototype.hasOwnProperty,ux=ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cx={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)sx.call(t,r)&&!cx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:lx,type:e,key:o,ref:a,props:i,_owner:ux.current}}hl.Fragment=ax;hl.jsx=rf;hl.jsxs=rf;Kp.exports=hl;var l=Kp.exports,La={},of={exports:{}},xt={},lf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,V){var S=A.length;A.push(V);e:for(;0<S;){var W=S-1>>>1,Q=A[W];if(0<i(Q,V))A[W]=V,A[S]=Q,S=W;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var V=A[0],S=A.pop();if(S!==V){A[0]=S;e:for(var W=0,Q=A.length,C=Q>>>1;W<C;){var ne=2*(W+1)-1,ie=A[ne],de=ne+1,U=A[de];if(0>i(ie,S))de<Q&&0>i(U,ie)?(A[W]=U,A[de]=S,W=de):(A[W]=ie,A[ne]=S,W=ne);else if(de<Q&&0>i(U,S))A[W]=U,A[de]=S,W=de;else break e}}return V}function i(A,V){var S=A.sortIndex-V.sortIndex;return S!==0?S:A.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],d=1,p=null,f=3,m=!1,w=!1,j=!1,z=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var V=n(c);V!==null;){if(V.callback===null)r(c);else if(V.startTime<=A)r(c),V.sortIndex=V.expirationTime,t(u,V);else break;V=n(c)}}function T(A){if(j=!1,y(A),!w)if(n(u)!==null)w=!0,D(k);else{var V=n(c);V!==null&&L(T,V.startTime-A)}}function k(A,V){w=!1,j&&(j=!1,h(O),O=-1),m=!0;var S=f;try{for(y(V),p=n(u);p!==null&&(!(p.expirationTime>V)||A&&!b());){var W=p.callback;if(typeof W=="function"){p.callback=null,f=p.priorityLevel;var Q=W(p.expirationTime<=V);V=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(u)&&r(u),y(V)}else r(u);p=n(u)}if(p!==null)var C=!0;else{var ne=n(c);ne!==null&&L(T,ne.startTime-V),C=!1}return C}finally{p=null,f=S,m=!1}}var v=!1,P=null,O=-1,F=5,_=-1;function b(){return!(e.unstable_now()-_<F)}function x(){if(P!==null){var A=e.unstable_now();_=A;var V=!0;try{V=P(!0,A)}finally{V?E():(v=!1,P=null)}}else v=!1}var E;if(typeof g=="function")E=function(){g(x)};else if(typeof MessageChannel<"u"){var M=new MessageChannel,I=M.port2;M.port1.onmessage=x,E=function(){I.postMessage(null)}}else E=function(){z(x,0)};function D(A){P=A,v||(v=!0,E())}function L(A,V){O=z(function(){A(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,D(k))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(A){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var S=f;f=V;try{return A()}finally{f=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,V){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var S=f;f=A;try{return V()}finally{f=S}},e.unstable_scheduleCallback=function(A,V,S){var W=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?W+S:W):S=W,A){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=S+Q,A={id:d++,callback:V,priorityLevel:A,startTime:S,expirationTime:Q,sortIndex:-1},S>W?(A.sortIndex=S,t(c,A),n(u)===null&&A===n(c)&&(j?(h(O),O=-1):j=!0,L(T,S-W))):(A.sortIndex=Q,t(u,A),w||m||(w=!0,D(k))),A},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(A){var V=f;return function(){var S=f;f=V;try{return A.apply(this,arguments)}finally{f=S}}}})(af);lf.exports=af;var dx=lf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=N,gt=dx;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sf=new Set,ji={};function Yn(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(ji[e]=t,e=0;e<t.length;e++)sf.add(t[e])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,fx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},yc={};function mx(e){return Aa.call(yc,e)?!0:Aa.call(xc,e)?!1:fx.test(e)?yc[e]=!0:(xc[e]=!0,!1)}function hx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gx(e,t,n,r){if(t===null||typeof t>"u"||hx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gs=/[\-:]([a-z])/g;function Js(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gs,Js);Fe[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gs,Js);Fe[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gs,Js);Fe[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ys(e,t,n,r){var i=Fe.hasOwnProperty(t)?Fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gx(t,n,i,r)&&(n=null),r||i===null?mx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var an=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),lr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Xs=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),uf=Symbol.for("react.provider"),cf=Symbol.for("react.context"),Zs=Symbol.for("react.forward_ref"),Ra=Symbol.for("react.suspense"),Ma=Symbol.for("react.suspense_list"),eu=Symbol.for("react.memo"),cn=Symbol.for("react.lazy"),df=Symbol.for("react.offscreen"),vc=Symbol.iterator;function qr(e){return e===null||typeof e!="object"?null:(e=vc&&e[vc]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Object.assign,Fl;function ii(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Bl=!1;function Ul(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ii(e):""}function xx(e){switch(e.tag){case 5:return ii(e.type);case 16:return ii("Lazy");case 13:return ii("Suspense");case 19:return ii("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function Oa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case lr:return"Portal";case Ia:return"Profiler";case Xs:return"StrictMode";case Ra:return"Suspense";case Ma:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cf:return(e.displayName||"Context")+".Consumer";case uf:return(e._context.displayName||"Context")+".Provider";case Zs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eu:return t=e.displayName||null,t!==null?t:Oa(e.type)||"Memo";case cn:t=e._payload,e=e._init;try{return Oa(e(t))}catch{}}return null}function yx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oa(t);case 8:return t===Xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vx(e){var t=pf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=vx(e))}function ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,t){var n=t.checked;return Ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mf(e,t){t=t.checked,t!=null&&Ys(e,"checked",t,!1)}function $a(e,t){mf(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fa(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fa(e,t,n){(t!=="number"||Fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var oi=Array.isArray;function br(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ba(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return Ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(q(92));if(oi(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function hf(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ua(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var io,xf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=io.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bx=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(e){bx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ui[t]=ui[e]})});function yf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ui.hasOwnProperty(e)&&ui[e]?(""+t).trim():t+"px"}function vf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var kx=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(e,t){if(t){if(kx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,kr=null,wr=null;function Sc(e){if(e=Qi(e)){if(typeof qa!="function")throw Error(q(280));var t=e.stateNode;t&&(t=bl(t),qa(e.stateNode,e.type,t))}}function bf(e){kr?wr?wr.push(e):wr=[e]:kr=e}function kf(){if(kr){var e=kr,t=wr;if(wr=kr=null,Sc(e),t)for(e=0;e<t.length;e++)Sc(t[e])}}function wf(e,t){return e(t)}function jf(){}var Vl=!1;function Sf(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return wf(e,t,n)}finally{Vl=!1,(kr!==null||wr!==null)&&(jf(),kf())}}function _i(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var Ka=!1;if(nn)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){Ka=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{Ka=!1}function wx(e,t,n,r,i,o,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ci=!1,Bo=null,Uo=!1,Qa=null,jx={onError:function(e){ci=!0,Bo=e}};function Sx(e,t,n,r,i,o,a,s,u){ci=!1,Bo=null,wx.apply(jx,arguments)}function _x(e,t,n,r,i,o,a,s,u){if(Sx.apply(this,arguments),ci){if(ci){var c=Bo;ci=!1,Bo=null}else throw Error(q(198));Uo||(Uo=!0,Qa=c)}}function Xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _c(e){if(Xn(e)!==e)throw Error(q(188))}function Cx(e){var t=e.alternate;if(!t){if(t=Xn(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _c(i),e;if(o===r)return _c(i),t;o=o.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function Cf(e){return e=Cx(e),e!==null?Nf(e):null}function Nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nf(e);if(t!==null)return t;e=e.sibling}return null}var Ef=gt.unstable_scheduleCallback,Cc=gt.unstable_cancelCallback,Nx=gt.unstable_shouldYield,Ex=gt.unstable_requestPaint,Te=gt.unstable_now,zx=gt.unstable_getCurrentPriorityLevel,nu=gt.unstable_ImmediatePriority,zf=gt.unstable_UserBlockingPriority,Vo=gt.unstable_NormalPriority,Tx=gt.unstable_LowPriority,Tf=gt.unstable_IdlePriority,gl=null,Ht=null;function Px(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(gl,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Ix,Lx=Math.log,Ax=Math.LN2;function Ix(e){return e>>>=0,e===0?32:31-(Lx(e)/Ax|0)|0}var oo=64,lo=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=li(s):(o&=a,o!==0&&(r=li(o)))}else a=n&~i,a!==0?r=li(a):o!==0&&(r=li(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),i=1<<n,r|=e[n],t&=~i;return r}function Rx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Mt(o),s=1<<a,u=i[a];u===-1?(!(s&n)||s&r)&&(i[a]=Rx(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Ga(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pf(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function Ox(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ru(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ge=0;function Lf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Af,iu,If,Rf,Mf,Ja=!1,ao=[],xn=null,yn=null,vn=null,Ci=new Map,Ni=new Map,pn=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nc(e,t){switch(e){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function Qr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Qi(t),t!==null&&iu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $x(e,t,n,r,i){switch(t){case"focusin":return xn=Qr(xn,e,t,n,r,i),!0;case"dragenter":return yn=Qr(yn,e,t,n,r,i),!0;case"mouseover":return vn=Qr(vn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ci.set(o,Qr(Ci.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ni.set(o,Qr(Ni.get(o)||null,e,t,n,r,i)),!0}return!1}function Of(e){var t=Dn(e.target);if(t!==null){var n=Xn(t);if(n!==null){if(t=n.tag,t===13){if(t=_f(n),t!==null){e.blockedOn=t,Mf(e.priority,function(){If(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ya(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ha=r,n.target.dispatchEvent(r),Ha=null}else return t=Qi(n),t!==null&&iu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ec(e,t,n){Co(e)&&n.delete(t)}function Fx(){Ja=!1,xn!==null&&Co(xn)&&(xn=null),yn!==null&&Co(yn)&&(yn=null),vn!==null&&Co(vn)&&(vn=null),Ci.forEach(Ec),Ni.forEach(Ec)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ja||(Ja=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,Fx)))}function Ei(e){function t(i){return Gr(i,e)}if(0<ao.length){Gr(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(xn!==null&&Gr(xn,e),yn!==null&&Gr(yn,e),vn!==null&&Gr(vn,e),Ci.forEach(t),Ni.forEach(t),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)Of(n),n.blockedOn===null&&pn.shift()}var jr=an.ReactCurrentBatchConfig,Ho=!0;function Bx(e,t,n,r){var i=ge,o=jr.transition;jr.transition=null;try{ge=1,ou(e,t,n,r)}finally{ge=i,jr.transition=o}}function Ux(e,t,n,r){var i=ge,o=jr.transition;jr.transition=null;try{ge=4,ou(e,t,n,r)}finally{ge=i,jr.transition=o}}function ou(e,t,n,r){if(Ho){var i=Ya(e,t,n,r);if(i===null)ea(e,t,r,qo,n),Nc(e,r);else if($x(i,e,t,n,r))r.stopPropagation();else if(Nc(e,r),t&4&&-1<Dx.indexOf(e)){for(;i!==null;){var o=Qi(i);if(o!==null&&Af(o),o=Ya(e,t,n,r),o===null&&ea(e,t,r,qo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ea(e,t,r,null,n)}}var qo=null;function Ya(e,t,n,r){if(qo=null,e=tu(r),e=Dn(e),e!==null)if(t=Xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qo=e,null}function Df(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zx()){case nu:return 1;case zf:return 4;case Vo:case Tx:return 16;case Tf:return 536870912;default:return 16}default:return 16}}var mn=null,lu=null,No=null;function $f(){if(No)return No;var e,t=lu,n=t.length,r,i="value"in mn?mn.value:mn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return No=i.slice(e,1<r?1-r:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function zc(){return!1}function yt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?so:zc,this.isPropagationStopped=zc,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=yt($r),Ki=Ne({},$r,{view:0,detail:0}),Vx=yt(Ki),Hl,ql,Jr,xl=Ne({},Ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jr&&(Jr&&e.type==="mousemove"?(Hl=e.screenX-Jr.screenX,ql=e.screenY-Jr.screenY):ql=Hl=0,Jr=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),Tc=yt(xl),Wx=Ne({},xl,{dataTransfer:0}),Hx=yt(Wx),qx=Ne({},Ki,{relatedTarget:0}),Kl=yt(qx),Kx=Ne({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=yt(Kx),Gx=Ne({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jx=yt(Gx),Yx=Ne({},$r,{data:0}),Pc=yt(Yx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ty(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ey[e])?!!t[e]:!1}function su(){return ty}var ny=Ne({},Ki,{key:function(e){if(e.key){var t=Xx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ry=yt(ny),iy=Ne({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lc=yt(iy),oy=Ne({},Ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),ly=yt(oy),ay=Ne({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=yt(ay),uy=Ne({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=yt(uy),dy=[9,13,27,32],uu=nn&&"CompositionEvent"in window,di=null;nn&&"documentMode"in document&&(di=document.documentMode);var py=nn&&"TextEvent"in window&&!di,Ff=nn&&(!uu||di&&8<di&&11>=di),Ac=" ",Ic=!1;function Bf(e,t){switch(e){case"keyup":return dy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function fy(e,t){switch(e){case"compositionend":return Uf(t);case"keypress":return t.which!==32?null:(Ic=!0,Ac);case"textInput":return e=t.data,e===Ac&&Ic?null:e;default:return null}}function my(e,t){if(sr)return e==="compositionend"||!uu&&Bf(e,t)?(e=$f(),No=lu=mn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ff&&t.locale!=="ko"?null:t.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hy[e.type]:t==="textarea"}function Vf(e,t,n,r){bf(r),t=Ko(t,"onChange"),0<t.length&&(n=new au("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pi=null,zi=null;function gy(e){em(e,0)}function yl(e){var t=dr(e);if(ff(t))return e}function xy(e,t){if(e==="change")return t}var Wf=!1;if(nn){var Ql;if(nn){var Gl="oninput"in document;if(!Gl){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),Gl=typeof Mc.oninput=="function"}Ql=Gl}else Ql=!1;Wf=Ql&&(!document.documentMode||9<document.documentMode)}function Oc(){pi&&(pi.detachEvent("onpropertychange",Hf),zi=pi=null)}function Hf(e){if(e.propertyName==="value"&&yl(zi)){var t=[];Vf(t,zi,e,tu(e)),Sf(gy,t)}}function yy(e,t,n){e==="focusin"?(Oc(),pi=t,zi=n,pi.attachEvent("onpropertychange",Hf)):e==="focusout"&&Oc()}function vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(zi)}function by(e,t){if(e==="click")return yl(t)}function ky(e,t){if(e==="input"||e==="change")return yl(t)}function wy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:wy;function Ti(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Aa.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function Dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $c(e,t){var n=Dc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dc(n)}}function qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kf(){for(var e=window,t=Fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fo(e.document)}return t}function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jy(e){var t=Kf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qf(n.ownerDocument.documentElement,n)){if(r!==null&&cu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$c(n,o);var a=$c(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sy=nn&&"documentMode"in document&&11>=document.documentMode,ur=null,Xa=null,fi=null,Za=!1;function Fc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Za||ur==null||ur!==Fo(r)||(r=ur,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fi&&Ti(fi,r)||(fi=r,r=Ko(Xa,"onSelect"),0<r.length&&(t=new au("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function uo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Jl={},Qf={};nn&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function vl(e){if(Jl[e])return Jl[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qf)return Jl[e]=t[n];return e}var Gf=vl("animationend"),Jf=vl("animationiteration"),Yf=vl("animationstart"),Xf=vl("transitionend"),Zf=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){Zf.set(e,t),Yn(t,[e])}for(var Yl=0;Yl<Bc.length;Yl++){var Xl=Bc[Yl],_y=Xl.toLowerCase(),Cy=Xl[0].toUpperCase()+Xl.slice(1);zn(_y,"on"+Cy)}zn(Gf,"onAnimationEnd");zn(Jf,"onAnimationIteration");zn(Yf,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Xf,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(ai));function Uc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_x(r,t,void 0,e),e.currentTarget=null}function em(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Uc(i,s,c),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Uc(i,s,c),o=u}}}if(Uo)throw e=Qa,Uo=!1,Qa=null,e}function ke(e,t){var n=t[is];n===void 0&&(n=t[is]=new Set);var r=e+"__bubble";n.has(r)||(tm(t,e,2,!1),n.add(r))}function Zl(e,t,n){var r=0;t&&(r|=4),tm(n,e,r,t)}var co="_reactListening"+Math.random().toString(36).slice(2);function Pi(e){if(!e[co]){e[co]=!0,sf.forEach(function(n){n!=="selectionchange"&&(Ny.has(n)||Zl(n,!1,e),Zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[co]||(t[co]=!0,Zl("selectionchange",!1,t))}}function tm(e,t,n,r){switch(Df(t)){case 1:var i=Bx;break;case 4:i=Ux;break;default:i=ou}n=i.bind(null,t,n,e),i=void 0,!Ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ea(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Dn(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Sf(function(){var c=o,d=tu(n),p=[];e:{var f=Zf.get(e);if(f!==void 0){var m=au,w=e;switch(e){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":m=ry;break;case"focusin":w="focus",m=Kl;break;case"focusout":w="blur",m=Kl;break;case"beforeblur":case"afterblur":m=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ly;break;case Gf:case Jf:case Yf:m=Qx;break;case Xf:m=sy;break;case"scroll":m=Vx;break;case"wheel":m=cy;break;case"copy":case"cut":case"paste":m=Jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Lc}var j=(t&4)!==0,z=!j&&e==="scroll",h=j?f!==null?f+"Capture":null:f;j=[];for(var g=c,y;g!==null;){y=g;var T=y.stateNode;if(y.tag===5&&T!==null&&(y=T,h!==null&&(T=_i(g,h),T!=null&&j.push(Li(g,T,y)))),z)break;g=g.return}0<j.length&&(f=new m(f,w,null,n,d),p.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==Ha&&(w=n.relatedTarget||n.fromElement)&&(Dn(w)||w[rn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=c,w=w?Dn(w):null,w!==null&&(z=Xn(w),w!==z||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=c),m!==w)){if(j=Tc,T="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(j=Lc,T="onPointerLeave",h="onPointerEnter",g="pointer"),z=m==null?f:dr(m),y=w==null?f:dr(w),f=new j(T,g+"leave",m,n,d),f.target=z,f.relatedTarget=y,T=null,Dn(d)===c&&(j=new j(h,g+"enter",w,n,d),j.target=y,j.relatedTarget=z,T=j),z=T,m&&w)t:{for(j=m,h=w,g=0,y=j;y;y=nr(y))g++;for(y=0,T=h;T;T=nr(T))y++;for(;0<g-y;)j=nr(j),g--;for(;0<y-g;)h=nr(h),y--;for(;g--;){if(j===h||h!==null&&j===h.alternate)break t;j=nr(j),h=nr(h)}j=null}else j=null;m!==null&&Vc(p,f,m,j,!1),w!==null&&z!==null&&Vc(p,z,w,j,!0)}}e:{if(f=c?dr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var k=xy;else if(Rc(f))if(Wf)k=ky;else{k=vy;var v=yy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=by);if(k&&(k=k(e,c))){Vf(p,k,n,d);break e}v&&v(e,f,c),e==="focusout"&&(v=f._wrapperState)&&v.controlled&&f.type==="number"&&Fa(f,"number",f.value)}switch(v=c?dr(c):window,e){case"focusin":(Rc(v)||v.contentEditable==="true")&&(ur=v,Xa=c,fi=null);break;case"focusout":fi=Xa=ur=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,Fc(p,n,d);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":Fc(p,n,d)}var P;if(uu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else sr?Bf(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Ff&&n.locale!=="ko"&&(sr||O!=="onCompositionStart"?O==="onCompositionEnd"&&sr&&(P=$f()):(mn=d,lu="value"in mn?mn.value:mn.textContent,sr=!0)),v=Ko(c,O),0<v.length&&(O=new Pc(O,e,null,n,d),p.push({event:O,listeners:v}),P?O.data=P:(P=Uf(n),P!==null&&(O.data=P)))),(P=py?fy(e,n):my(e,n))&&(c=Ko(c,"onBeforeInput"),0<c.length&&(d=new Pc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=P))}em(p,t)})}function Li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_i(e,n),o!=null&&r.unshift(Li(e,o,i)),o=_i(e,t),o!=null&&r.push(Li(e,o,i))),e=e.return}return r}function nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=_i(n,o),u!=null&&a.unshift(Li(n,u,s))):i||(u=_i(n,o),u!=null&&a.push(Li(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Ey=/\r\n?/g,zy=/\u0000|\uFFFD/g;function Wc(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(zy,"")}function po(e,t,n){if(t=Wc(t),Wc(e)!==t&&n)throw Error(q(425))}function Qo(){}var es=null,ts=null;function ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rs=typeof setTimeout=="function"?setTimeout:void 0,Ty=typeof clearTimeout=="function"?clearTimeout:void 0,Hc=typeof Promise=="function"?Promise:void 0,Py=typeof queueMicrotask=="function"?queueMicrotask:typeof Hc<"u"?function(e){return Hc.resolve(null).then(e).catch(Ly)}:rs;function Ly(e){setTimeout(function(){throw e})}function ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ei(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ei(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Fr,Ai="__reactProps$"+Fr,rn="__reactContainer$"+Fr,is="__reactEvents$"+Fr,Ay="__reactListeners$"+Fr,Iy="__reactHandles$"+Fr;function Dn(e){var t=e[Vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rn]||n[Vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qc(e);e!==null;){if(n=e[Vt])return n;e=qc(e)}return t}e=n,n=e.parentNode}return null}function Qi(e){return e=e[Vt]||e[rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function bl(e){return e[Ai]||null}var os=[],pr=-1;function Tn(e){return{current:e}}function we(e){0>pr||(e.current=os[pr],os[pr]=null,pr--)}function ve(e,t){pr++,os[pr]=e.current,e.current=t}var Nn={},qe=Tn(Nn),rt=Tn(!1),qn=Nn;function zr(e,t){var n=e.type.contextTypes;if(!n)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function Go(){we(rt),we(qe)}function Kc(e,t,n){if(qe.current!==Nn)throw Error(q(168));ve(qe,t),ve(rt,n)}function nm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(q(108,yx(e)||"Unknown",i));return Ne({},n,r)}function Jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,qn=qe.current,ve(qe,e),ve(rt,rt.current),!0}function Qc(e,t,n){var r=e.stateNode;if(!r)throw Error(q(169));n?(e=nm(e,t,qn),r.__reactInternalMemoizedMergedChildContext=e,we(rt),we(qe),ve(qe,e)):we(rt),ve(rt,n)}var Xt=null,kl=!1,na=!1;function rm(e){Xt===null?Xt=[e]:Xt.push(e)}function Ry(e){kl=!0,rm(e)}function Pn(){if(!na&&Xt!==null){na=!0;var e=0,t=ge;try{var n=Xt;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xt=null,kl=!1}catch(i){throw Xt!==null&&(Xt=Xt.slice(e+1)),Ef(nu,Pn),i}finally{ge=t,na=!1}}return null}var fr=[],mr=0,Yo=null,Xo=0,bt=[],kt=0,Kn=null,Zt=1,en="";function Rn(e,t){fr[mr++]=Xo,fr[mr++]=Yo,Yo=e,Xo=t}function im(e,t,n){bt[kt++]=Zt,bt[kt++]=en,bt[kt++]=Kn,Kn=e;var r=Zt;e=en;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var o=32-Mt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Zt=1<<32-Mt(t)+i|n<<i|r,en=o+e}else Zt=1<<o|n<<i|r,en=e}function du(e){e.return!==null&&(Rn(e,1),im(e,1,0))}function pu(e){for(;e===Yo;)Yo=fr[--mr],fr[mr]=null,Xo=fr[--mr],fr[mr]=null;for(;e===Kn;)Kn=bt[--kt],bt[kt]=null,en=bt[--kt],bt[kt]=null,Zt=bt[--kt],bt[kt]=null}var ht=null,ft=null,je=!1,It=null;function om(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,ft=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kn!==null?{id:Zt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,ft=null,!0):!1;default:return!1}}function ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(je){var t=ft;if(t){var n=t;if(!Gc(e,t)){if(ls(e))throw Error(q(418));t=bn(n.nextSibling);var r=ht;t&&Gc(e,t)?om(r,n):(e.flags=e.flags&-4097|2,je=!1,ht=e)}}else{if(ls(e))throw Error(q(418));e.flags=e.flags&-4097|2,je=!1,ht=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function fo(e){if(e!==ht)return!1;if(!je)return Jc(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ns(e.type,e.memoizedProps)),t&&(t=ft)){if(ls(e))throw lm(),Error(q(418));for(;t;)om(e,t),t=bn(t.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=ht?bn(e.stateNode.nextSibling):null;return!0}function lm(){for(var e=ft;e;)e=bn(e.nextSibling)}function Tr(){ft=ht=null,je=!1}function fu(e){It===null?It=[e]:It.push(e)}var My=an.ReactCurrentBatchConfig;function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,e))}return e}function mo(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yc(e){var t=e._init;return t(e._payload)}function am(e){function t(h,g){if(e){var y=h.deletions;y===null?(h.deletions=[g],h.flags|=16):y.push(g)}}function n(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function r(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(h,g){return h=Sn(h,g),h.index=0,h.sibling=null,h}function o(h,g,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<g?(h.flags|=2,g):y):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,g,y,T){return g===null||g.tag!==6?(g=ua(y,h.mode,T),g.return=h,g):(g=i(g,y),g.return=h,g)}function u(h,g,y,T){var k=y.type;return k===ar?d(h,g,y.props.children,T,y.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===cn&&Yc(k)===g.type)?(T=i(g,y.props),T.ref=Yr(h,g,y),T.return=h,T):(T=Ro(y.type,y.key,y.props,null,h.mode,T),T.ref=Yr(h,g,y),T.return=h,T)}function c(h,g,y,T){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=ca(y,h.mode,T),g.return=h,g):(g=i(g,y.children||[]),g.return=h,g)}function d(h,g,y,T,k){return g===null||g.tag!==7?(g=Vn(y,h.mode,T,k),g.return=h,g):(g=i(g,y),g.return=h,g)}function p(h,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ua(""+g,h.mode,y),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case no:return y=Ro(g.type,g.key,g.props,null,h.mode,y),y.ref=Yr(h,null,g),y.return=h,y;case lr:return g=ca(g,h.mode,y),g.return=h,g;case cn:var T=g._init;return p(h,T(g._payload),y)}if(oi(g)||qr(g))return g=Vn(g,h.mode,y,null),g.return=h,g;mo(h,g)}return null}function f(h,g,y,T){var k=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:s(h,g,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case no:return y.key===k?u(h,g,y,T):null;case lr:return y.key===k?c(h,g,y,T):null;case cn:return k=y._init,f(h,g,k(y._payload),T)}if(oi(y)||qr(y))return k!==null?null:d(h,g,y,T,null);mo(h,y)}return null}function m(h,g,y,T,k){if(typeof T=="string"&&T!==""||typeof T=="number")return h=h.get(y)||null,s(g,h,""+T,k);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case no:return h=h.get(T.key===null?y:T.key)||null,u(g,h,T,k);case lr:return h=h.get(T.key===null?y:T.key)||null,c(g,h,T,k);case cn:var v=T._init;return m(h,g,y,v(T._payload),k)}if(oi(T)||qr(T))return h=h.get(y)||null,d(g,h,T,k,null);mo(g,T)}return null}function w(h,g,y,T){for(var k=null,v=null,P=g,O=g=0,F=null;P!==null&&O<y.length;O++){P.index>O?(F=P,P=null):F=P.sibling;var _=f(h,P,y[O],T);if(_===null){P===null&&(P=F);break}e&&P&&_.alternate===null&&t(h,P),g=o(_,g,O),v===null?k=_:v.sibling=_,v=_,P=F}if(O===y.length)return n(h,P),je&&Rn(h,O),k;if(P===null){for(;O<y.length;O++)P=p(h,y[O],T),P!==null&&(g=o(P,g,O),v===null?k=P:v.sibling=P,v=P);return je&&Rn(h,O),k}for(P=r(h,P);O<y.length;O++)F=m(P,h,O,y[O],T),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?O:F.key),g=o(F,g,O),v===null?k=F:v.sibling=F,v=F);return e&&P.forEach(function(b){return t(h,b)}),je&&Rn(h,O),k}function j(h,g,y,T){var k=qr(y);if(typeof k!="function")throw Error(q(150));if(y=k.call(y),y==null)throw Error(q(151));for(var v=k=null,P=g,O=g=0,F=null,_=y.next();P!==null&&!_.done;O++,_=y.next()){P.index>O?(F=P,P=null):F=P.sibling;var b=f(h,P,_.value,T);if(b===null){P===null&&(P=F);break}e&&P&&b.alternate===null&&t(h,P),g=o(b,g,O),v===null?k=b:v.sibling=b,v=b,P=F}if(_.done)return n(h,P),je&&Rn(h,O),k;if(P===null){for(;!_.done;O++,_=y.next())_=p(h,_.value,T),_!==null&&(g=o(_,g,O),v===null?k=_:v.sibling=_,v=_);return je&&Rn(h,O),k}for(P=r(h,P);!_.done;O++,_=y.next())_=m(P,h,O,_.value,T),_!==null&&(e&&_.alternate!==null&&P.delete(_.key===null?O:_.key),g=o(_,g,O),v===null?k=_:v.sibling=_,v=_);return e&&P.forEach(function(x){return t(h,x)}),je&&Rn(h,O),k}function z(h,g,y,T){if(typeof y=="object"&&y!==null&&y.type===ar&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case no:e:{for(var k=y.key,v=g;v!==null;){if(v.key===k){if(k=y.type,k===ar){if(v.tag===7){n(h,v.sibling),g=i(v,y.props.children),g.return=h,h=g;break e}}else if(v.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===cn&&Yc(k)===v.type){n(h,v.sibling),g=i(v,y.props),g.ref=Yr(h,v,y),g.return=h,h=g;break e}n(h,v);break}else t(h,v);v=v.sibling}y.type===ar?(g=Vn(y.props.children,h.mode,T,y.key),g.return=h,h=g):(T=Ro(y.type,y.key,y.props,null,h.mode,T),T.ref=Yr(h,g,y),T.return=h,h=T)}return a(h);case lr:e:{for(v=y.key;g!==null;){if(g.key===v)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(h,g.sibling),g=i(g,y.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else t(h,g);g=g.sibling}g=ca(y,h.mode,T),g.return=h,h=g}return a(h);case cn:return v=y._init,z(h,g,v(y._payload),T)}if(oi(y))return w(h,g,y,T);if(qr(y))return j(h,g,y,T);mo(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(h,g.sibling),g=i(g,y),g.return=h,h=g):(n(h,g),g=ua(y,h.mode,T),g.return=h,h=g),a(h)):n(h,g)}return z}var Pr=am(!0),sm=am(!1),Zo=Tn(null),el=null,hr=null,mu=null;function hu(){mu=hr=el=null}function gu(e){var t=Zo.current;we(Zo),e._currentValue=t}function ss(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sr(e,t){el=e,mu=hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(mu!==e)if(e={context:e,memoizedValue:t,next:null},hr===null){if(el===null)throw Error(q(308));hr=e,el.dependencies={lanes:0,firstContext:e}}else hr=hr.next=e;return t}var $n=null;function xu(e){$n===null?$n=[e]:$n.push(e)}function um(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xu(t)):(n.next=i.next,i.next=n),t.interleaved=n,on(e,r)}function on(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,on(e,n)}return i=r.interleaved,i===null?(t.next=t,xu(r)):(t.next=i.next,i.next=t),r.interleaved=t,on(e,n)}function zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ru(e,n)}}function Xc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var i=e.updateQueue;dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?o=c:a.next=c,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;a=0,d=c=u=null,s=o;do{var f=s.lane,m=s.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,j=s;switch(f=t,m=n,j.tag){case 1:if(w=j.payload,typeof w=="function"){p=w.call(m,p,f);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,f=typeof w=="function"?w.call(m,p,f):w,f==null)break e;p=Ne({},p,f);break e;case 2:dn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else m={eventTime:m,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=m,u=p):d=d.next=m,a|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Gn|=a,e.lanes=a,e.memoizedState=p}}function Zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Gi={},qt=Tn(Gi),Ii=Tn(Gi),Ri=Tn(Gi);function Fn(e){if(e===Gi)throw Error(q(174));return e}function vu(e,t){switch(ve(Ri,t),ve(Ii,e),ve(qt,Gi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ua(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ua(t,e)}we(qt),ve(qt,t)}function Lr(){we(qt),we(Ii),we(Ri)}function dm(e){Fn(Ri.current);var t=Fn(qt.current),n=Ua(t,e.type);t!==n&&(ve(Ii,e),ve(qt,n))}function bu(e){Ii.current===e&&(we(qt),we(Ii))}var _e=Tn(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function ku(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var To=an.ReactCurrentDispatcher,ia=an.ReactCurrentBatchConfig,Qn=0,Ce=null,Ie=null,Me=null,rl=!1,mi=!1,Mi=0,Oy=0;function Ue(){throw Error(q(321))}function wu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function ju(e,t,n,r,i,o){if(Qn=o,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?By:Uy,e=n(r,i),mi){o=0;do{if(mi=!1,Mi=0,25<=o)throw Error(q(301));o+=1,Me=Ie=null,t.updateQueue=null,To.current=Vy,e=n(r,i)}while(mi)}if(To.current=il,t=Ie!==null&&Ie.next!==null,Qn=0,Me=Ie=Ce=null,rl=!1,t)throw Error(q(300));return e}function Su(){var e=Mi!==0;return Mi=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?Ce.memoizedState=Me=e:Me=Me.next=e,Me}function Ct(){if(Ie===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Me===null?Ce.memoizedState:Me.next;if(t!==null)Me=t,Ie=e;else{if(e===null)throw Error(q(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Me===null?Ce.memoizedState=Me=e:Me=Me.next=e}return Me}function Oi(e,t){return typeof t=="function"?t(e):t}function oa(e){var t=Ct(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=Ie,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=a=null,u=null,c=o;do{var d=c.lane;if((Qn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,a=r):u=u.next=p,Ce.lanes|=d,Gn|=d}c=c.next}while(c!==null&&c!==o);u===null?a=r:u.next=s,Dt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ce.lanes|=o,Gn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function la(e){var t=Ct(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Dt(o,t.memoizedState)||(nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function pm(){}function fm(e,t){var n=Ce,r=Ct(),i=t(),o=!Dt(r.memoizedState,i);if(o&&(r.memoizedState=i,nt=!0),r=r.queue,_u(gm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Di(9,hm.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(q(349));Qn&30||mm(n,t,i)}return i}function mm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hm(e,t,n,r){t.value=n,t.getSnapshot=r,xm(t)&&ym(e)}function gm(e,t,n){return n(function(){xm(t)&&ym(e)})}function xm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function ym(e){var t=on(e,1);t!==null&&Ot(t,e,1,-1)}function ed(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=Fy.bind(null,Ce,e),[t.memoizedState,e]}function Di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vm(){return Ct().memoizedState}function Po(e,t,n,r){var i=Bt();Ce.flags|=e,i.memoizedState=Di(1|t,n,void 0,r===void 0?null:r)}function wl(e,t,n,r){var i=Ct();r=r===void 0?null:r;var o=void 0;if(Ie!==null){var a=Ie.memoizedState;if(o=a.destroy,r!==null&&wu(r,a.deps)){i.memoizedState=Di(t,n,o,r);return}}Ce.flags|=e,i.memoizedState=Di(1|t,n,o,r)}function td(e,t){return Po(8390656,8,e,t)}function _u(e,t){return wl(2048,8,e,t)}function bm(e,t){return wl(4,2,e,t)}function km(e,t){return wl(4,4,e,t)}function wm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jm(e,t,n){return n=n!=null?n.concat([e]):null,wl(4,4,wm.bind(null,t,e),n)}function Cu(){}function Sm(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _m(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cm(e,t,n){return Qn&21?(Dt(n,t)||(n=Pf(),Ce.lanes|=n,Gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function Dy(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{ge=n,ia.transition=r}}function Nm(){return Ct().memoizedState}function $y(e,t,n){var r=jn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Em(e))zm(t,n);else if(n=um(e,t,n,r),n!==null){var i=Je();Ot(n,e,r,i),Tm(n,t,r)}}function Fy(e,t,n){var r=jn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Em(e))zm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,Dt(s,a)){var u=t.interleaved;u===null?(i.next=i,xu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=um(e,t,i,r),n!==null&&(i=Je(),Ot(n,e,r,i),Tm(n,t,r))}}function Em(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function zm(e,t){mi=rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ru(e,n)}}var il={readContext:_t,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},By={readContext:_t,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:td,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,wm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$y.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:ed,useDebugValue:Cu,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=ed(!1),t=e[0];return e=Dy.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,i=Bt();if(je){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),Oe===null)throw Error(q(349));Qn&30||mm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,td(gm.bind(null,r,o,e),[e]),r.flags|=2048,Di(9,hm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Bt(),t=Oe.identifierPrefix;if(je){var n=en,r=Zt;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Oy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uy={readContext:_t,useCallback:Sm,useContext:_t,useEffect:_u,useImperativeHandle:jm,useInsertionEffect:bm,useLayoutEffect:km,useMemo:_m,useReducer:oa,useRef:vm,useState:function(){return oa(Oi)},useDebugValue:Cu,useDeferredValue:function(e){var t=Ct();return Cm(t,Ie.memoizedState,e)},useTransition:function(){var e=oa(Oi)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:pm,useSyncExternalStore:fm,useId:Nm,unstable_isNewReconciler:!1},Vy={readContext:_t,useCallback:Sm,useContext:_t,useEffect:_u,useImperativeHandle:jm,useInsertionEffect:bm,useLayoutEffect:km,useMemo:_m,useReducer:la,useRef:vm,useState:function(){return la(Oi)},useDebugValue:Cu,useDeferredValue:function(e){var t=Ct();return Ie===null?t.memoizedState=e:Cm(t,Ie.memoizedState,e)},useTransition:function(){var e=la(Oi)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:pm,useSyncExternalStore:fm,useId:Nm,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=Ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function us(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=jn(e),o=tn(r,i);o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(Ot(t,e,i,r),zo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=jn(e),o=tn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(Ot(t,e,i,r),zo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=jn(e),i=tn(n,r);i.tag=2,t!=null&&(i.callback=t),t=kn(e,i,r),t!==null&&(Ot(t,e,r,n),zo(t,e,r))}};function nd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,r)||!Ti(i,o):!0}function Pm(e,t,n){var r=!1,i=Nn,o=t.contextType;return typeof o=="object"&&o!==null?o=_t(o):(i=it(t)?qn:qe.current,r=t.contextTypes,o=(r=r!=null)?zr(e,i):Nn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function rd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function cs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},yu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=_t(o):(o=it(t)?qn:qe.current,i.context=zr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(us(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&jl.enqueueReplaceState(i,i.state,null),tl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var n="",r=t;do n+=xx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function Lm(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ll||(ll=!0,ks=r),ds(e,t)},n}function Am(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ds(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function id(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Wy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=iv.bind(null,e,t,n),t.then(e,e))}function od(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ld(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e)}var Hy=an.ReactCurrentOwner,nt=!1;function Qe(e,t,n,r){t.child=e===null?sm(t,null,n,r):Pr(t,e.child,n,r)}function ad(e,t,n,r,i){n=n.render;var o=t.ref;return Sr(t,i),r=ju(e,t,n,r,o,i),n=Su(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ln(e,t,i)):(je&&n&&du(t),t.flags|=1,Qe(e,t,r,i),t.child)}function sd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Iu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Im(e,t,o,r,i)):(e=Ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(a,r)&&e.ref===t.ref)return ln(e,t,i)}return t.flags|=1,e=Sn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Im(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ti(o,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,ln(e,t,i)}return ps(e,t,n,r,i)}function Rm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(xr,dt),dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(xr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ve(xr,dt),dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ve(xr,dt),dt|=r;return Qe(e,t,i,n),t.child}function Mm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ps(e,t,n,r,i){var o=it(n)?qn:qe.current;return o=zr(t,o),Sr(t,i),n=ju(e,t,n,r,o,i),r=Su(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ln(e,t,i)):(je&&r&&du(t),t.flags|=1,Qe(e,t,n,i),t.child)}function ud(e,t,n,r,i){if(it(n)){var o=!0;Jo(t)}else o=!1;if(Sr(t,i),t.stateNode===null)Lo(e,t),Pm(t,n,r),cs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=_t(c):(c=it(n)?qn:qe.current,c=zr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&rd(t,a,r,c),dn=!1;var f=t.memoizedState;a.state=f,tl(t,r,a,i),u=t.memoizedState,s!==r||f!==u||rt.current||dn?(typeof d=="function"&&(us(t,n,d,r),u=t.memoizedState),(s=dn||nd(t,n,s,r,f,u,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,cm(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Tt(t.type,s),a.props=c,p=t.pendingProps,f=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=_t(u):(u=it(n)?qn:qe.current,u=zr(t,u));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||f!==u)&&rd(t,a,r,u),dn=!1,f=t.memoizedState,a.state=f,tl(t,r,a,i);var w=t.memoizedState;s!==p||f!==w||rt.current||dn?(typeof m=="function"&&(us(t,n,m,r),w=t.memoizedState),(c=dn||nd(t,n,c,r,f,w,u)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return fs(e,t,n,r,o,i)}function fs(e,t,n,r,i,o){Mm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Qc(t,n,!1),ln(e,t,o);r=t.stateNode,Hy.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Pr(t,e.child,null,o),t.child=Pr(t,null,s,o)):Qe(e,t,s,o),t.memoizedState=r.state,i&&Qc(t,n,!0),t.child}function Om(e){var t=e.stateNode;t.pendingContext?Kc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kc(e,t.context,!1),vu(e,t.containerInfo)}function cd(e,t,n,r,i){return Tr(),fu(i),t.flags|=256,Qe(e,t,n,r),t.child}var ms={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dm(e,t,n){var r=t.pendingProps,i=_e.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(_e,i&1),e===null)return as(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Cl(a,r,0,null),e=Vn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hs(n),t.memoizedState=ms,e):Nu(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return qy(e,t,a,r,s,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Sn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=Sn(s,o):(o=Vn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?hs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ms,r}return o=e.child,e=o.sibling,r=Sn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nu(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ho(e,t,n,r){return r!==null&&fu(r),Pr(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qy(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=aa(Error(q(422))),ho(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Cl({mode:"visible",children:r.children},i,0,null),o=Vn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Pr(t,e.child,null,a),t.child.memoizedState=hs(a),t.memoizedState=ms,o);if(!(t.mode&1))return ho(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(q(419)),r=aa(o,r,void 0),ho(e,t,a,r)}if(s=(a&e.childLanes)!==0,nt||s){if(r=Oe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,on(e,i),Ot(r,e,i,-1))}return Au(),r=aa(Error(q(421))),ho(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ov.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=bn(i.nextSibling),ht=t,je=!0,It=null,e!==null&&(bt[kt++]=Zt,bt[kt++]=en,bt[kt++]=Kn,Zt=e.id,en=e.overflow,Kn=t),t=Nu(t,r.children),t.flags|=4096,t)}function dd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ss(e.return,t,n)}function sa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $m(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Qe(e,t,r.children,n),r=_e.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,n,t);else if(e.tag===19)dd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ve(_e,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&nl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sa(t,!0,n,null,o);break;case"together":sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ky(e,t,n){switch(t.tag){case 3:Om(t),Tr();break;case 5:dm(t);break;case 1:it(t.type)&&Jo(t);break;case 4:vu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ve(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ve(_e,_e.current&1),t.flags|=128,null):n&t.child.childLanes?Dm(e,t,n):(ve(_e,_e.current&1),e=ln(e,t,n),e!==null?e.sibling:null);ve(_e,_e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $m(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(_e,_e.current),r)break;return null;case 22:case 23:return t.lanes=0,Rm(e,t,n)}return ln(e,t,n)}var Fm,gs,Bm,Um;Fm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gs=function(){};Bm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fn(qt.current);var o=null;switch(n){case"input":i=Da(e,i),r=Da(e,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=Ba(e,i),r=Ba(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Va(n,r);var a;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ji.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ji.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ke("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Um=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xr(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qy(e,t,n){var r=t.pendingProps;switch(pu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return it(t.type)&&Go(),Ve(t),null;case 3:return r=t.stateNode,Lr(),we(rt),we(qe),ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,It!==null&&(Ss(It),It=null))),gs(e,t),Ve(t),null;case 5:bu(t);var i=Fn(Ri.current);if(n=t.type,e!==null&&t.stateNode!=null)Bm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(q(166));return Ve(t),null}if(e=Fn(qt.current),fo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Vt]=t,r[Ai]=o,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<ai.length;i++)ke(ai[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":bc(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":wc(r,o),ke("invalid",r)}Va(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&po(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&po(r.textContent,s,e),i=["children",""+s]):ji.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ke("scroll",r)}switch(n){case"input":ro(r),kc(r,o,!0);break;case"textarea":ro(r),jc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Vt]=t,e[Ai]=r,Fm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Wa(n,r),n){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<ai.length;i++)ke(ai[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":bc(e,r),i=Da(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ke("invalid",e);break;case"textarea":wc(e,r),i=Ba(e,r),ke("invalid",e);break;default:i=r}Va(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?vf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Si(e,u):typeof u=="number"&&Si(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ji.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ke("scroll",e):u!=null&&Ys(e,o,u,a))}switch(n){case"input":ro(e),kc(e,r,!1);break;case"textarea":ro(e),jc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?br(e,!!r.multiple,o,!1):r.defaultValue!=null&&br(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)Um(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(q(166));if(n=Fn(Ri.current),Fn(qt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Vt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Vt]=t,t.stateNode=r}return Ve(t),null;case 13:if(we(_e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&ft!==null&&t.mode&1&&!(t.flags&128))lm(),Tr(),t.flags|=98560,o=!1;else if(o=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(q(317));o[Vt]=t}else Tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else It!==null&&(Ss(It),It=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||_e.current&1?Re===0&&(Re=3):Au())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return Lr(),gs(e,t),e===null&&Pi(t.stateNode.containerInfo),Ve(t),null;case 10:return gu(t.type._context),Ve(t),null;case 17:return it(t.type)&&Go(),Ve(t),null;case 19:if(we(_e),o=t.memoizedState,o===null)return Ve(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Xr(o,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=nl(e),a!==null){for(t.flags|=128,Xr(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ve(_e,_e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>Ir&&(t.flags|=128,r=!0,Xr(o,!1),t.lanes=4194304)}else{if(!r)if(e=nl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!je)return Ve(t),null}else 2*Te()-o.renderingStartTime>Ir&&n!==1073741824&&(t.flags|=128,r=!0,Xr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,n=_e.current,ve(_e,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return Lu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function Gy(e,t){switch(pu(t),t.tag){case 1:return it(t.type)&&Go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),we(rt),we(qe),ku(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bu(t),null;case 13:if(we(_e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(_e),null;case 4:return Lr(),null;case 10:return gu(t.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var go=!1,We=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,G=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function xs(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var pd=!1;function Yy(e,t){if(es=Ho,e=Kf(),cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(s=a+i),p!==o||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++c===i&&(s=a),f===o&&++d===r&&(u=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ts={focusedElem:e,selectionRange:n},Ho=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,z=w.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?j:Tt(t.type,j),z);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(T){Ee(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return w=pd,pd=!1,w}function hi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xs(t,n,o)}i=i.next}while(i!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ys(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Vm(e){var t=e.alternate;t!==null&&(e.alternate=null,Vm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Vt],delete t[Ai],delete t[is],delete t[Ay],delete t[Iy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wm(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(vs(e,t,n),e=e.sibling;e!==null;)vs(e,t,n),e=e.sibling}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}var De=null,Pt=!1;function sn(e,t,n){for(n=n.child;n!==null;)Hm(e,t,n),n=n.sibling}function Hm(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:We||gr(n,t);case 6:var r=De,i=Pt;De=null,sn(e,t,n),De=r,Pt=i,De!==null&&(Pt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Pt?(e=De,n=n.stateNode,e.nodeType===8?ta(e.parentNode,n):e.nodeType===1&&ta(e,n),Ei(e)):ta(De,n.stateNode));break;case 4:r=De,i=Pt,De=n.stateNode.containerInfo,Pt=!0,sn(e,t,n),De=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&xs(n,t,a),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!We&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Ee(n,t,s)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,sn(e,t,n),We=r):sn(e,t,n);break;default:sn(e,t,n)}}function md(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jy),t.forEach(function(r){var i=lv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,Pt=!1;break e;case 3:De=s.stateNode.containerInfo,Pt=!0;break e;case 4:De=s.stateNode.containerInfo,Pt=!0;break e}s=s.return}if(De===null)throw Error(q(160));Hm(o,a,i),De=null,Pt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ee(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qm(t,e),t=t.sibling}function qm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Ft(e),r&4){try{hi(3,e,e.return),Sl(3,e)}catch(j){Ee(e,e.return,j)}try{hi(5,e,e.return)}catch(j){Ee(e,e.return,j)}}break;case 1:zt(t,e),Ft(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(zt(t,e),Ft(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(j){Ee(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&mf(i,o),Wa(s,a);var c=Wa(s,o);for(a=0;a<u.length;a+=2){var d=u[a],p=u[a+1];d==="style"?vf(i,p):d==="dangerouslySetInnerHTML"?xf(i,p):d==="children"?Si(i,p):Ys(i,d,p,c)}switch(s){case"input":$a(i,o);break;case"textarea":hf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?br(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?br(i,!!o.multiple,o.defaultValue,!0):br(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ai]=o}catch(j){Ee(e,e.return,j)}}break;case 6:if(zt(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(q(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){Ee(e,e.return,j)}}break;case 3:if(zt(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ei(t.containerInfo)}catch(j){Ee(e,e.return,j)}break;case 4:zt(t,e),Ft(e);break;case 13:zt(t,e),Ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tu=Te())),r&4&&md(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(We=(c=We)||d,zt(t,e),We=c):zt(t,e),Ft(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(p=G=d;G!==null;){switch(f=G,m=f.child,f.tag){case 0:case 11:case 14:case 15:hi(4,f,f.return);break;case 1:gr(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){Ee(r,n,j)}}break;case 5:gr(f,f.return);break;case 22:if(f.memoizedState!==null){gd(p);continue}}m!==null?(m.return=f,G=m):gd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=yf("display",a))}catch(j){Ee(e,e.return,j)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(j){Ee(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:zt(t,e),Ft(e),r&4&&md(e);break;case 21:break;default:zt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Wm(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var o=fd(e);bs(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=fd(e);vs(e,s,a);break;default:throw Error(q(161))}}catch(u){Ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xy(e,t,n){G=e,Km(e)}function Km(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||go;if(!a){var s=i.alternate,u=s!==null&&s.memoizedState!==null||We;s=go;var c=We;if(go=a,(We=u)&&!c)for(G=i;G!==null;)a=G,u=a.child,a.tag===22&&a.memoizedState!==null?xd(i):u!==null?(u.return=a,G=u):xd(i);for(;o!==null;)G=o,Km(o),o=o.sibling;G=i,go=s,We=c}hd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):hd(e)}}function hd(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zc(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zc(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ei(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}We||t.flags&512&&ys(t)}catch(f){Ee(t,t.return,f)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function gd(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function xd(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(u){Ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ee(t,i,u)}}var o=t.return;try{ys(t)}catch(u){Ee(t,o,u)}break;case 5:var a=t.return;try{ys(t)}catch(u){Ee(t,a,u)}}}catch(u){Ee(t,t.return,u)}if(t===e){G=null;break}var s=t.sibling;if(s!==null){s.return=t.return,G=s;break}G=t.return}}var Zy=Math.ceil,ol=an.ReactCurrentDispatcher,Eu=an.ReactCurrentOwner,St=an.ReactCurrentBatchConfig,pe=0,Oe=null,Le=null,$e=0,dt=0,xr=Tn(0),Re=0,$i=null,Gn=0,_l=0,zu=0,gi=null,tt=null,Tu=0,Ir=1/0,Yt=null,ll=!1,ks=null,wn=null,xo=!1,hn=null,al=0,xi=0,ws=null,Ao=-1,Io=0;function Je(){return pe&6?Te():Ao!==-1?Ao:Ao=Te()}function jn(e){return e.mode&1?pe&2&&$e!==0?$e&-$e:My.transition!==null?(Io===0&&(Io=Pf()),Io):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Df(e.type)),e):1}function Ot(e,t,n,r){if(50<xi)throw xi=0,ws=null,Error(q(185));qi(e,n,r),(!(pe&2)||e!==Oe)&&(e===Oe&&(!(pe&2)&&(_l|=n),Re===4&&fn(e,$e)),ot(e,r),n===1&&pe===0&&!(t.mode&1)&&(Ir=Te()+500,kl&&Pn()))}function ot(e,t){var n=e.callbackNode;Mx(e,t);var r=Wo(e,e===Oe?$e:0);if(r===0)n!==null&&Cc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cc(n),t===1)e.tag===0?Ry(yd.bind(null,e)):rm(yd.bind(null,e)),Py(function(){!(pe&6)&&Pn()}),n=null;else{switch(Lf(r)){case 1:n=nu;break;case 4:n=zf;break;case 16:n=Vo;break;case 536870912:n=Tf;break;default:n=Vo}n=th(n,Qm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qm(e,t){if(Ao=-1,Io=0,pe&6)throw Error(q(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=Wo(e,e===Oe?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var i=pe;pe|=2;var o=Jm();(Oe!==e||$e!==t)&&(Yt=null,Ir=Te()+500,Un(e,t));do try{nv();break}catch(s){Gm(e,s)}while(!0);hu(),ol.current=o,pe=i,Le!==null?t=0:(Oe=null,$e=0,t=Re)}if(t!==0){if(t===2&&(i=Ga(e),i!==0&&(r=i,t=js(e,i))),t===1)throw n=$i,Un(e,0),fn(e,r),ot(e,Te()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ev(i)&&(t=sl(e,r),t===2&&(o=Ga(e),o!==0&&(r=o,t=js(e,o))),t===1))throw n=$i,Un(e,0),fn(e,r),ot(e,Te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345));case 2:Mn(e,tt,Yt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=Tu+500-Te(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rs(Mn.bind(null,e,tt,Yt),t);break}Mn(e,tt,Yt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Mt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zy(r/1960))-r,10<r){e.timeoutHandle=rs(Mn.bind(null,e,tt,Yt),r);break}Mn(e,tt,Yt);break;case 5:Mn(e,tt,Yt);break;default:throw Error(q(329))}}}return ot(e,Te()),e.callbackNode===n?Qm.bind(null,e):null}function js(e,t){var n=gi;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=sl(e,t),e!==2&&(t=tt,tt=n,t!==null&&Ss(t)),e}function Ss(e){tt===null?tt=e:tt.push.apply(tt,e)}function ev(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~zu,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function yd(e){if(pe&6)throw Error(q(327));_r();var t=Wo(e,0);if(!(t&1))return ot(e,Te()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=Ga(e);r!==0&&(t=r,n=js(e,r))}if(n===1)throw n=$i,Un(e,0),fn(e,t),ot(e,Te()),n;if(n===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,tt,Yt),ot(e,Te()),null}function Pu(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Ir=Te()+500,kl&&Pn())}}function Jn(e){hn!==null&&hn.tag===0&&!(pe&6)&&_r();var t=pe;pe|=1;var n=St.transition,r=ge;try{if(St.transition=null,ge=1,e)return e()}finally{ge=r,St.transition=n,pe=t,!(pe&6)&&Pn()}}function Lu(){dt=xr.current,we(xr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ty(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(pu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:Lr(),we(rt),we(qe),ku();break;case 5:bu(r);break;case 4:Lr();break;case 13:we(_e);break;case 19:we(_e);break;case 10:gu(r.type._context);break;case 22:case 23:Lu()}n=n.return}if(Oe=e,Le=e=Sn(e.current,null),$e=dt=t,Re=0,$i=null,zu=_l=Gn=0,tt=gi=null,$n!==null){for(t=0;t<$n.length;t++)if(n=$n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}$n=null}return e}function Gm(e,t){do{var n=Le;try{if(hu(),To.current=il,rl){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(Qn=0,Me=Ie=Ce=null,mi=!1,Mi=0,Eu.current=null,n===null||n.return===null){Re=1,$i=t,Le=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=$e,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=od(a);if(m!==null){m.flags&=-257,ld(m,a,s,o,t),m.mode&1&&id(o,c,t),t=m,u=c;var w=t.updateQueue;if(w===null){var j=new Set;j.add(u),t.updateQueue=j}else w.add(u);break e}else{if(!(t&1)){id(o,c,t),Au();break e}u=Error(q(426))}}else if(je&&s.mode&1){var z=od(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),ld(z,a,s,o,t),fu(Ar(u,s));break e}}o=u=Ar(u,s),Re!==4&&(Re=2),gi===null?gi=[o]:gi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Lm(o,u,t);Xc(o,h);break e;case 1:s=u;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wn===null||!wn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var T=Am(o,s,t);Xc(o,T);break e}}o=o.return}while(o!==null)}Xm(n)}catch(k){t=k,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Jm(){var e=ol.current;return ol.current=il,e===null?il:e}function Au(){(Re===0||Re===3||Re===2)&&(Re=4),Oe===null||!(Gn&268435455)&&!(_l&268435455)||fn(Oe,$e)}function sl(e,t){var n=pe;pe|=2;var r=Jm();(Oe!==e||$e!==t)&&(Yt=null,Un(e,t));do try{tv();break}catch(i){Gm(e,i)}while(!0);if(hu(),pe=n,ol.current=r,Le!==null)throw Error(q(261));return Oe=null,$e=0,Re}function tv(){for(;Le!==null;)Ym(Le)}function nv(){for(;Le!==null&&!Nx();)Ym(Le)}function Ym(e){var t=eh(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Xm(e):Le=t,Eu.current=null}function Xm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gy(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Le=null;return}}else if(n=Qy(n,t,dt),n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Re===0&&(Re=5)}function Mn(e,t,n){var r=ge,i=St.transition;try{St.transition=null,ge=1,rv(e,t,n,r)}finally{St.transition=i,ge=r}return null}function rv(e,t,n,r){do _r();while(hn!==null);if(pe&6)throw Error(q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ox(e,o),e===Oe&&(Le=Oe=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,th(Vo,function(){return _r(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=St.transition,St.transition=null;var a=ge;ge=1;var s=pe;pe|=4,Eu.current=null,Yy(e,n),qm(n,e),jy(ts),Ho=!!es,ts=es=null,e.current=n,Xy(n),Ex(),pe=s,ge=a,St.transition=o}else e.current=n;if(xo&&(xo=!1,hn=e,al=i),o=e.pendingLanes,o===0&&(wn=null),Px(n.stateNode),ot(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ll)throw ll=!1,e=ks,ks=null,e;return al&1&&e.tag!==0&&_r(),o=e.pendingLanes,o&1?e===ws?xi++:(xi=0,ws=e):xi=0,Pn(),null}function _r(){if(hn!==null){var e=Lf(al),t=St.transition,n=ge;try{if(St.transition=null,ge=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,al=0,pe&6)throw Error(q(331));var i=pe;for(pe|=4,G=e.current;G!==null;){var o=G,a=o.child;if(G.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:hi(8,d,o)}var p=d.child;if(p!==null)p.return=d,G=p;else for(;G!==null;){d=G;var f=d.sibling,m=d.return;if(Vm(d),d===c){G=null;break}if(f!==null){f.return=m,G=f;break}G=m}}}var w=o.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var z=j.sibling;j.sibling=null,j=z}while(j!==null)}}G=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,G=a;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hi(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,G=h;break e}G=o.return}}var g=e.current;for(G=g;G!==null;){a=G;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,G=y;else e:for(a=g;G!==null;){if(s=G,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Sl(9,s)}}catch(k){Ee(s,s.return,k)}if(s===a){G=null;break e}var T=s.sibling;if(T!==null){T.return=s.return,G=T;break e}G=s.return}}if(pe=i,Pn(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(gl,e)}catch{}r=!0}return r}finally{ge=n,St.transition=t}}return!1}function vd(e,t,n){t=Ar(n,t),t=Lm(e,t,1),e=kn(e,t,1),t=Je(),e!==null&&(qi(e,1,t),ot(e,t))}function Ee(e,t,n){if(e.tag===3)vd(e,e,n);else for(;t!==null;){if(t.tag===3){vd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=Ar(n,e),e=Am(t,e,1),t=kn(t,e,1),e=Je(),t!==null&&(qi(t,1,e),ot(t,e));break}}t=t.return}}function iv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&($e&n)===n&&(Re===4||Re===3&&($e&130023424)===$e&&500>Te()-Tu?Un(e,0):zu|=n),ot(e,t)}function Zm(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=Je();e=on(e,t),e!==null&&(qi(e,t,n),ot(e,n))}function ov(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zm(e,n)}function lv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(t),Zm(e,n)}var eh;eh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,Ky(e,t,n);nt=!!(e.flags&131072)}else nt=!1,je&&t.flags&1048576&&im(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lo(e,t),e=t.pendingProps;var i=zr(t,qe.current);Sr(t,n),i=ju(null,t,r,e,i,n);var o=Su();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(o=!0,Jo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yu(t),i.updater=jl,t.stateNode=i,i._reactInternals=t,cs(t,r,e,n),t=fs(null,t,r,!0,o,n)):(t.tag=0,je&&o&&du(t),Qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sv(r),e=Tt(r,e),i){case 0:t=ps(null,t,r,e,n);break e;case 1:t=ud(null,t,r,e,n);break e;case 11:t=ad(null,t,r,e,n);break e;case 14:t=sd(null,t,r,Tt(r.type,e),n);break e}throw Error(q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),ps(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),ud(e,t,r,i,n);case 3:e:{if(Om(t),e===null)throw Error(q(387));r=t.pendingProps,o=t.memoizedState,i=o.element,cm(e,t),tl(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ar(Error(q(423)),t),t=cd(e,t,r,n,i);break e}else if(r!==i){i=Ar(Error(q(424)),t),t=cd(e,t,r,n,i);break e}else for(ft=bn(t.stateNode.containerInfo.firstChild),ht=t,je=!0,It=null,n=sm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tr(),r===i){t=ln(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return dm(t),e===null&&as(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ns(r,i)?a=null:o!==null&&ns(r,o)&&(t.flags|=32),Mm(e,t),Qe(e,t,a,n),t.child;case 6:return e===null&&as(t),null;case 13:return Dm(e,t,n);case 4:return vu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pr(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),ad(e,t,r,i,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ve(Zo,r._currentValue),r._currentValue=a,o!==null)if(Dt(o.value,a)){if(o.children===i.children&&!rt.current){t=ln(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=tn(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ss(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(q(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ss(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sr(t,n),i=_t(i),r=r(i),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,i=Tt(r,t.pendingProps),i=Tt(r.type,i),sd(e,t,r,i,n);case 15:return Im(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Tt(r,i),Lo(e,t),t.tag=1,it(r)?(e=!0,Jo(t)):e=!1,Sr(t,n),Pm(t,r,i),cs(t,r,i,n),fs(null,t,r,!0,e,n);case 19:return $m(e,t,n);case 22:return Rm(e,t,n)}throw Error(q(156,t.tag))};function th(e,t){return Ef(e,t)}function av(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new av(e,t,n,r)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sv(e){if(typeof e=="function")return Iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zs)return 11;if(e===eu)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Iu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ar:return Vn(n.children,i,o,t);case Xs:a=8,i|=8;break;case Ia:return e=jt(12,n,t,i|2),e.elementType=Ia,e.lanes=o,e;case Ra:return e=jt(13,n,t,i),e.elementType=Ra,e.lanes=o,e;case Ma:return e=jt(19,n,t,i),e.elementType=Ma,e.lanes=o,e;case df:return Cl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case uf:a=10;break e;case cf:a=9;break e;case Zs:a=11;break e;case eu:a=14;break e;case cn:a=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=jt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vn(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=jt(22,e,r,t),e.elementType=df,e.lanes=n,e.stateNode={isHidden:!1},e}function ua(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function ca(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ru(e,t,n,r,i,o,a,s,u){return e=new uv(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(o),e}function cv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function nh(e){if(!e)return Nn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var n=e.type;if(it(n))return nm(e,n,t)}return t}function rh(e,t,n,r,i,o,a,s,u){return e=Ru(n,r,!0,e,i,o,a,s,u),e.context=nh(null),n=e.current,r=Je(),i=jn(n),o=tn(r,i),o.callback=t??null,kn(n,o,i),e.current.lanes=i,qi(e,i,r),ot(e,r),e}function Nl(e,t,n,r){var i=t.current,o=Je(),a=jn(i);return n=nh(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(i,t,a),e!==null&&(Ot(e,i,a,o),zo(e,i,a)),a}function ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mu(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function dv(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}El.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));Nl(e,t,null,null)};El.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){Nl(null,e,null,null)}),t[rn]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<pn.length&&t!==0&&t<pn[n].priority;n++);pn.splice(n,0,e),n===0&&Of(e)}};function Du(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kd(){}function pv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=ul(a);o.call(c)}}var a=rh(t,r,e,0,null,!1,!1,"",kd);return e._reactRootContainer=a,e[rn]=a.current,Pi(e.nodeType===8?e.parentNode:e),Jn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ul(u);s.call(c)}}var u=Ru(e,0,!1,null,null,!1,!1,"",kd);return e._reactRootContainer=u,e[rn]=u.current,Pi(e.nodeType===8?e.parentNode:e),Jn(function(){Nl(t,u,n,r)}),u}function Tl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var u=ul(a);s.call(u)}}Nl(t,a,e,i)}else a=pv(n,t,e,i,r);return ul(a)}Af=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=li(t.pendingLanes);n!==0&&(ru(t,n|1),ot(t,Te()),!(pe&6)&&(Ir=Te()+500,Pn()))}break;case 13:Jn(function(){var r=on(e,1);if(r!==null){var i=Je();Ot(r,e,1,i)}}),Mu(e,1)}};iu=function(e){if(e.tag===13){var t=on(e,134217728);if(t!==null){var n=Je();Ot(t,e,134217728,n)}Mu(e,134217728)}};If=function(e){if(e.tag===13){var t=jn(e),n=on(e,t);if(n!==null){var r=Je();Ot(n,e,t,r)}Mu(e,t)}};Rf=function(){return ge};Mf=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}};qa=function(e,t,n){switch(t){case"input":if($a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bl(r);if(!i)throw Error(q(90));ff(r),$a(r,i)}}}break;case"textarea":hf(e,n);break;case"select":t=n.value,t!=null&&br(e,!!n.multiple,t,!1)}};wf=Pu;jf=Jn;var fv={usingClientEntryPoint:!1,Events:[Qi,dr,bl,bf,kf,Pu]},Zr={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mv={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cf(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{gl=yo.inject(mv),Ht=yo}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;xt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Du(t))throw Error(q(200));return cv(e,t,null,n)};xt.createRoot=function(e,t){if(!Du(e))throw Error(q(299));var n=!1,r="",i=ih;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ru(e,1,!1,null,null,n,!1,r,i),e[rn]=t.current,Pi(e.nodeType===8?e.parentNode:e),new Ou(t)};xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=Cf(t),e=e===null?null:e.stateNode,e};xt.flushSync=function(e){return Jn(e)};xt.hydrate=function(e,t,n){if(!zl(t))throw Error(q(200));return Tl(null,e,t,!0,n)};xt.hydrateRoot=function(e,t,n){if(!Du(e))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ih;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=rh(t,null,e,1,n??null,i,!1,o,a),e[rn]=t.current,Pi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new El(t)};xt.render=function(e,t,n){if(!zl(t))throw Error(q(200));return Tl(null,e,t,!1,n)};xt.unmountComponentAtNode=function(e){if(!zl(e))throw Error(q(40));return e._reactRootContainer?(Jn(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[rn]=null})}),!0):!1};xt.unstable_batchedUpdates=Pu;xt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Tl(e,t,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function oh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oh)}catch(e){console.error(e)}}oh(),of.exports=xt;var hv=of.exports,wd=hv;La.createRoot=wd.createRoot,La.hydrateRoot=wd.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(this,arguments)}var gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(gn||(gn={}));const jd="popstate";function gv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:s}=r.location;return _s("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:lh(i)}return yv(t,n,null,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $u(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xv(){return Math.random().toString(36).substr(2,8)}function Sd(e,t){return{usr:e.state,key:e.key,idx:t}}function _s(e,t,n,r){return n===void 0&&(n=null),Fi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:n,key:t&&t.key||r||xv()})}function lh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Br(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function yv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s=gn.Pop,u=null,c=d();c==null&&(c=0,a.replaceState(Fi({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function p(){s=gn.Pop;let z=d(),h=z==null?null:z-c;c=z,u&&u({action:s,location:j.location,delta:h})}function f(z,h){s=gn.Push;let g=_s(j.location,z,h);c=d()+1;let y=Sd(g,c),T=j.createHref(g);try{a.pushState(y,"",T)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(T)}o&&u&&u({action:s,location:j.location,delta:1})}function m(z,h){s=gn.Replace;let g=_s(j.location,z,h);c=d();let y=Sd(g,c),T=j.createHref(g);a.replaceState(y,"",T),o&&u&&u({action:s,location:j.location,delta:0})}function w(z){let h=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof z=="string"?z:lh(z);return g=g.replace(/ $/,"%20"),Ae(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let j={get action(){return s},get location(){return e(i,a)},listen(z){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(jd,p),u=z,()=>{i.removeEventListener(jd,p),u=null}},createHref(z){return t(i,z)},createURL:w,encodeLocation(z){let h=w(z);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:m,go(z){return a.go(z)}};return j}var _d;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_d||(_d={}));function vv(e,t,n){return n===void 0&&(n="/"),bv(e,t,n)}function bv(e,t,n,r){let i=typeof t=="string"?Br(t):t,o=uh(i.pathname||"/",n);if(o==null)return null;let a=ah(e);kv(a);let s=null;for(let u=0;s==null&&u<a.length;++u){let c=Av(o);s=Tv(a[u],c)}return s}function ah(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};u.relativePath.startsWith("/")&&(Ae(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Wn([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(Ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ah(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Ev(c,o.index),routesMeta:d})};return e.forEach((o,a)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,a);else for(let u of sh(o.path))i(o,a,u)}),t}function sh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=sh(r.join("/")),s=[];return s.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function kv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:zv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wv=/^:[\w-]+$/,jv=3,Sv=2,_v=1,Cv=10,Nv=-2,Cd=e=>e==="*";function Ev(e,t){let n=e.split("/"),r=n.length;return n.some(Cd)&&(r+=Nv),t&&(r+=Sv),n.filter(i=>!Cd(i)).reduce((i,o)=>i+(wv.test(o)?jv:o===""?_v:Cv),r)}function zv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Tv(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Pv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),f=u.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Wn([o,p.pathname]),pathnameBase:Dv(Wn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=Wn([o,p.pathnameBase]))}return a}function Pv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Lv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let j=s[p]||"";a=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const w=s[p];return m&&!w?c[f]=void 0:c[f]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:e}}function Lv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$u(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Av(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function uh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rv=e=>Iv.test(e);function Mv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Br(e):e,o;if(n)if(Rv(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),$u(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Nd(n.substring(1),"/"):o=Nd(n,t)}else o=t;return{pathname:o,search:$v(r),hash:Fv(i)}}function Nd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function da(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ov(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ch(e,t){let n=Ov(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function dh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Br(e):(i=Fi({},e),Ae(!i.pathname||!i.pathname.includes("?"),da("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),da("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),da("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}s=p>=0?t[p]:"/"}let u=Mv(i,s),c=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Wn=e=>e.join("/").replace(/\/\/+/g,"/"),Dv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$v=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Bv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ph=["post","put","patch","delete"];new Set(ph);const Uv=["get",...ph];new Set(Uv);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}const Fu=N.createContext(null),Vv=N.createContext(null),Ji=N.createContext(null),Pl=N.createContext(null),Ln=N.createContext({outlet:null,matches:[],isDataRoute:!1}),fh=N.createContext(null);function Yi(){return N.useContext(Pl)!=null}function Bu(){return Yi()||Ae(!1),N.useContext(Pl).location}function mh(e){N.useContext(Ji).static||N.useLayoutEffect(e)}function Uu(){let{isDataRoute:e}=N.useContext(Ln);return e?r1():Wv()}function Wv(){Yi()||Ae(!1);let e=N.useContext(Fu),{basename:t,future:n,navigator:r}=N.useContext(Ji),{matches:i}=N.useContext(Ln),{pathname:o}=Bu(),a=JSON.stringify(ch(i,n.v7_relativeSplatPath)),s=N.useRef(!1);return mh(()=>{s.current=!0}),N.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let p=dh(c,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Wn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function Hv(){let{matches:e}=N.useContext(Ln),t=e[e.length-1];return t?t.params:{}}function qv(e,t){return Kv(e,t)}function Kv(e,t,n,r){Yi()||Ae(!1);let{navigator:i}=N.useContext(Ji),{matches:o}=N.useContext(Ln),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=Bu(),d;if(t){var p;let z=typeof t=="string"?Br(t):t;u==="/"||(p=z.pathname)!=null&&p.startsWith(u)||Ae(!1),d=z}else d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let z=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(z.length).join("/")}let w=vv(e,{pathname:m}),j=Xv(w&&w.map(z=>Object.assign({},z,{params:Object.assign({},s,z.params),pathname:Wn([u,i.encodeLocation?i.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?u:Wn([u,i.encodeLocation?i.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),o,n,r);return t&&j?N.createElement(Pl.Provider,{value:{location:Bi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:gn.Pop}},j):j}function Qv(){let e=n1(),t=Bv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,null)}const Gv=N.createElement(Qv,null);class Jv extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(Ln.Provider,{value:this.props.routeContext},N.createElement(fh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Yv(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(Fu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Ln.Provider,{value:t},r)}function Xv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);d>=0||Ae(!1),a=a.slice(0,Math.min(a.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:f,errors:m}=n,w=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||w){u=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,w=!1,j=null,z=null;n&&(m=s&&p.route.id?s[p.route.id]:void 0,j=p.route.errorElement||Gv,u&&(c<0&&f===0?(i1("route-fallback"),w=!0,z=null):c===f&&(w=!0,z=p.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,f+1)),g=()=>{let y;return m?y=j:w?y=z:p.route.Component?y=N.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,N.createElement(Yv,{match:p,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?N.createElement(Jv,{location:n.location,revalidation:n.revalidation,component:j,error:m,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var hh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(hh||{}),gh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gh||{});function Zv(e){let t=N.useContext(Fu);return t||Ae(!1),t}function e1(e){let t=N.useContext(Vv);return t||Ae(!1),t}function t1(e){let t=N.useContext(Ln);return t||Ae(!1),t}function xh(e){let t=t1(),n=t.matches[t.matches.length-1];return n.route.id||Ae(!1),n.route.id}function n1(){var e;let t=N.useContext(fh),n=e1(),r=xh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function r1(){let{router:e}=Zv(hh.UseNavigateStable),t=xh(gh.UseNavigateStable),n=N.useRef(!1);return mh(()=>{n.current=!0}),N.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Bi({fromRouteId:t},o)))},[e,t])}const Ed={};function i1(e,t,n){Ed[e]||(Ed[e]=!0)}function o1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function l1(e){let{to:t,replace:n,state:r,relative:i}=e;Yi()||Ae(!1);let{future:o,static:a}=N.useContext(Ji),{matches:s}=N.useContext(Ln),{pathname:u}=Bu(),c=Uu(),d=dh(t,ch(s,o.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return N.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function or(e){Ae(!1)}function a1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=gn.Pop,navigator:o,static:a=!1,future:s}=e;Yi()&&Ae(!1);let u=t.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:u,navigator:o,static:a,future:Bi({v7_relativeSplatPath:!1},s)}),[u,s,o,a]);typeof r=="string"&&(r=Br(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:w="default"}=r,j=N.useMemo(()=>{let z=uh(d,u);return z==null?null:{location:{pathname:z,search:p,hash:f,state:m,key:w},navigationType:i}},[u,d,p,f,m,w,i]);return j==null?null:N.createElement(Ji.Provider,{value:c},N.createElement(Pl.Provider,{children:n,value:j}))}function s1(e){let{children:t,location:n}=e;return qv(Cs(t),n)}new Promise(()=>{});function Cs(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let o=[...t,i];if(r.type===N.Fragment){n.push.apply(n,Cs(r.props.children,o));return}r.type!==or&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Cs(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const u1="6";try{window.__reactRouterVersion=u1}catch{}const c1="startTransition",zd=ix[c1];function d1(e){let{basename:t,children:n,future:r,window:i}=e,o=N.useRef();o.current==null&&(o.current=gv({window:i,v5Compat:!0}));let a=o.current,[s,u]=N.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},d=N.useCallback(p=>{c&&zd?zd(()=>u(p)):u(p)},[u,c]);return N.useLayoutEffect(()=>a.listen(d),[a,d]),N.useEffect(()=>o1(r),[r]),N.createElement(a1,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}var Td;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Td||(Td={}));var Pd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Pd||(Pd={}));const p1={},Ld=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(w=>w(t,m))}},i=()=>t,u={setState:r,getState:i,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(p1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,i,u);return u},f1=e=>e?Ld(e):Ld;var yh={exports:{}},vh={},bh={exports:{}},kh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rr=N;function m1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var h1=typeof Object.is=="function"?Object.is:m1,g1=Rr.useState,x1=Rr.useEffect,y1=Rr.useLayoutEffect,v1=Rr.useDebugValue;function b1(e,t){var n=t(),r=g1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return y1(function(){i.value=n,i.getSnapshot=t,pa(i)&&o({inst:i})},[e,n,t]),x1(function(){return pa(i)&&o({inst:i}),e(function(){pa(i)&&o({inst:i})})},[e]),v1(n),n}function pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!h1(e,n)}catch{return!0}}function k1(e,t){return t()}var w1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?k1:b1;kh.useSyncExternalStore=Rr.useSyncExternalStore!==void 0?Rr.useSyncExternalStore:w1;bh.exports=kh;var j1=bh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=N,S1=j1;function _1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var C1=typeof Object.is=="function"?Object.is:_1,N1=S1.useSyncExternalStore,E1=Ll.useRef,z1=Ll.useEffect,T1=Ll.useMemo,P1=Ll.useDebugValue;vh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=E1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=T1(function(){function u(m){if(!c){if(c=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var w=a.value;if(i(w,m))return p=w}return p=m}if(w=p,C1(d,m))return w;var j=r(m);return i!==void 0&&i(w,j)?(d=m,w):(d=m,p=j)}var c=!1,d,p,f=n===void 0?null:n;return[function(){return u(t())},f===null?void 0:function(){return u(f())}]},[t,n,r,i]);var s=N1(e,o[0],o[1]);return z1(function(){a.hasValue=!0,a.value=s},[s]),P1(s),s};yh.exports=vh;var L1=yh.exports;const A1=ml(L1),wh={},{useDebugValue:I1}=Rt,{useSyncExternalStoreWithSelector:R1}=A1;let Ad=!1;const M1=e=>e;function O1(e,t=M1,n){(wh?"production":void 0)!=="production"&&n&&!Ad&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ad=!0);const r=R1(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return I1(r),r}const Id=e=>{(wh?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?f1(e):e,n=(r,i)=>O1(t,r,i);return Object.assign(n,t),n},D1=e=>e?Id(e):Id,Nt=D1((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(s=>s.id===n?{...s,...r}:s);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const s=o.map(({id:u,serverName:c,toolName:d,args:p,transform:f})=>({id:u,serverName:c,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:s},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:s,serverName:u,toolName:c,args:d,transform:p})=>({id:s,serverName:u,toolName:c,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:s,serverName:u,toolName:c,args:d,transform:p})=>({id:s,serverName:u,toolName:c,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),$1="/api";async function ze(e,t){const n=await fetch(`${$1}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function jh(){return(await ze("/projects")).projects}async function Sh(e){return(await ze(`/projects/${e}`)).project}async function _h(e,t=""){return(await ze("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Ns(e,t){return(await ze(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Ch(e){await ze(`/projects/${e}`,{method:"DELETE"})}async function Nh(e){return ze(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Es(e){return(await ze(`/projects/${e}/sessions`)).sessions}async function Eh(e,t){return(await ze(`/projects/${e}/sessions/${t}/load`)).session}async function zh(e){return(await ze(`/projects/${e}/yaml`)).yaml}async function Th(e,t){return(await ze(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Vu(){return(await ze("/mcp-servers")).servers}async function Ph(){return(await ze("/builtin-tools")).tools}function Lh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Mo(e,t,n,r){return await ze(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Ah(e,t){return await ze(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Ih(e,t,n,r=[],i){return await ze(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Rh(e,t,n,r,i=[],o){return await ze(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function Mh(e){return await ze("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}const F1=Object.freeze(Object.defineProperty({__proto__:null,createProject:_h,createRunWebSocket:Lh,deleteProject:Ch,fetchJSON:ze,generateAgentConfig:Ah,generateCallbackCode:Rh,generatePrompt:Mo,generateToolCode:Ih,getBuiltinTools:Ph,getMcpServers:Vu,getProject:Sh,getProjectYaml:zh,listProjectSessions:Es,listProjects:jh,loadSession:Eh,saveSessionToMemory:Nh,testMcpServer:Mh,updateProject:Ns,updateProjectFromYaml:Th},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var B1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),X=(e,t)=>{const n=N.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:s="",children:u,...c},d)=>N.createElement("svg",{ref:d,...B1,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${U1(e)}`,s].join(" "),...c},[...t.map(([p,f])=>N.createElement(p,f)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=X("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=X("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=X("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=X("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=X("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=X("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=X("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=X("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=X("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=X("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=X("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=X("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=X("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=X("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=X("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=X("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=X("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=X("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=X("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=X("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=X("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=X("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=X("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=X("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=X("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=X("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=X("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=X("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=X("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=X("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=X("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=X("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=X("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=X("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=X("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=X("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=X("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=X("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=X("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=X("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=X("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=X("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=X("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=X("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=X("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=X("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=X("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=X("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=X("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=X("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=X("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=X("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function i0(){const e=Uu(),[t,n]=N.useState([]),[r,i]=N.useState(!0),[o,a]=N.useState(!1),[s,u]=N.useState("");N.useEffect(()=>{c()},[]);async function c(){try{const f=await jh();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(s.trim())try{const f=await _h(s.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Ch(f),n(t.filter(w=>w.id!==f))}catch(w){console.error("Failed to delete project:",w)}}return l.jsxs("div",{className:"project-list",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("header",{className:"header",children:[l.jsxs("div",{className:"logo",children:[l.jsx(Qu,{size:40,className:"logo-icon"}),l.jsx("h1",{className:"title",children:"ADK Playground"})]}),l.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),l.jsxs("div",{className:"content",children:[o?l.jsxs("div",{className:"create-form",children:[l.jsx("input",{type:"text",placeholder:"Project name...",value:s,onChange:f=>u(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),l.jsxs("button",{className:"btn btn-primary",onClick:d,children:[l.jsx(He,{size:18}),"Create"]}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):l.jsx("div",{className:"create-form",children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[l.jsx(He,{size:18}),"New Project"]})}),r?l.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Dd,{size:48,style:{marginBottom:16,opacity:.3}}),l.jsx("p",{children:"No projects yet. Create one to get started!"})]}):l.jsx("div",{className:"projects-grid",children:t.map(f=>l.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[l.jsxs("h3",{children:[l.jsx(Dd,{size:18}),f.name]}),l.jsx("p",{children:f.description||"No description"}),l.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:l.jsx(Ge,{size:16})})]},f.id))})]})]})}const o0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function l0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function a0(){const{project:e,updateProject:t}=Nt(),[n,r]=N.useState(null);if(!e)return null;const{app:i}=e;function o(b){t({app:{...i,...b}})}function a(b){if(b===""){r(null),o({name:b});return}l0(b)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:b})}function s(){const b={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,b]})}function u(b,x){const E=[...i.state_keys];E[b]={...E[b],...x},o({state_keys:E})}function c(b){o({state_keys:i.state_keys.filter((x,E)=>E!==b)})}function d(){const b={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};o({plugins:[...i.plugins,b]})}function p(b,x){const E=[...i.plugins];E[b]={...E[b],...x},o({plugins:E})}function f(b){o({plugins:i.plugins.filter((x,E)=>E!==b)})}const m=i.models||[];function w(){const b=`model_${Date.now().toString(36)}`,x={id:b,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};o({models:[...m,x],default_model_id:m.length===0?b:i.default_model_id})}function j(b,x){const E=m.map(M=>M.id===b?{...M,...x}:M);o({models:E})}function z(b){var M;const x=m.filter(I=>I.id!==b),E=i.default_model_id===b?((M=x[0])==null?void 0:M.id)||void 0:i.default_model_id;o({models:x,default_model_id:E})}function h(b){o({default_model_id:b})}const g=i.env_vars||{},[y,T]=N.useState({}),[k,v]=N.useState("");function P(b=""){const x=b||k.trim();!x||g[x]!==void 0||(o({env_vars:{...g,[x]:""}}),v(""))}function O(b,x){o({env_vars:{...g,[b]:x}})}function F(b){const x={...g};delete x[b],o({env_vars:x})}function _(b){T(x=>({...x,[b]:!x[b]}))}return l.jsxs("div",{className:"app-config",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Y1,{size:20}),"Basic Information"]})}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"App Name"}),l.jsx("input",{type:"text",value:i.name,onChange:b=>a(b.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Root Agent"}),l.jsxs("select",{value:i.root_agent_id||"",onChange:b=>o({root_agent_id:b.target.value||void 0}),children:[l.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(b=>l.jsx("option",{value:b.id,children:b.name},b.id))]})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{value:i.description,onChange:b=>o({description:b.target.value}),rows:2})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(yi,{size:20}),"Services"]})}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Session Service"}),l.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:b=>{const x=b.target.value;o(x==="memory"?{session_service_uri:"memory://"}:x==="file"?{session_service_uri:"file://./sessions"}:x==="sqlite"?{session_service_uri:"sqlite://./sessions.db"}:{session_service_uri:x+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System (JSON)"}),l.jsx("option",{value:"sqlite",children:"SQLite"}),l.jsx("option",{value:"postgresql",children:"PostgreSQL"})]}),i.session_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:b=>o({session_service_uri:"file://"+b.target.value}),placeholder:"./sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&l.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:b=>o({session_service_uri:"sqlite://"+b.target.value}),placeholder:"./sessions.db",style:{marginTop:8}})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Memory Service"}),l.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:b=>{const x=b.target.value;o(x==="memory"?{memory_service_uri:"memory://"}:x==="file"?{memory_service_uri:"file://./memory"}:{memory_service_uri:x+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System (JSON)"})]}),i.memory_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:b=>o({memory_service_uri:"file://"+b.target.value}),placeholder:"./memory",style:{marginTop:8}})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Artifact Service"}),l.jsxs("select",{value:i.artifact_service_uri.split("://")[0],onChange:b=>{const x=b.target.value;o(x==="memory"?{artifact_service_uri:"memory://"}:x==="file"?{artifact_service_uri:"file://./artifacts"}:x==="gcs"?{artifact_service_uri:"gcs://your-bucket-name"}:{artifact_service_uri:x+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System"}),l.jsx("option",{value:"gcs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:b=>o({artifact_service_uri:"file://"+b.target.value}),placeholder:"./artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gcs://")&&l.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gcs://",""),onChange:b=>o({artifact_service_uri:"gcs://"+b.target.value}),placeholder:"your-bucket-name",style:{marginTop:8}})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Ts,{size:20}),"Environment Variables"]})}),l.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:o0.filter(b=>g[b.key]===void 0).map(b=>l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>P(b.key),title:b.description,children:[l.jsx(He,{size:12}),b.key]},b.key))}),Object.keys(g).length===0?l.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(g).map(([b,x])=>l.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[l.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:b}),l.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[l.jsx("input",{type:y[b]?"text":"password",value:x,onChange:E=>O(b,E.target.value),placeholder:"Enter value...",style:{flex:1}}),l.jsx("button",{className:"delete-item",onClick:()=>_(b),title:y[b]?"Hide value":"Show value",children:y[b]?l.jsx(H1,{size:16}):l.jsx(Ui,{size:16})})]})]}),l.jsx("button",{className:"delete-item",onClick:()=>F(b),children:l.jsx(Ge,{size:16})})]},b)),l.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[l.jsx("input",{type:"text",value:k,onChange:b=>v(b.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:b=>b.key==="Enter"&&P()}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>P(),disabled:!k.trim(),children:[l.jsx(He,{size:14}),"Add Variable"]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(Wu,{size:20}),"Models"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,children:[l.jsx(He,{size:14}),"Add Model"]})]}),m.length===0?l.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(b=>l.jsxs("div",{className:"model-card",children:[l.jsxs("div",{className:"model-card-header",children:[l.jsx("input",{type:"text",value:b.name,onChange:x=>j(b.id,{name:x.target.value}),placeholder:"Model name",className:"model-name-input"}),l.jsx("button",{className:`default-model-btn ${i.default_model_id===b.id?"is-default":""}`,onClick:()=>h(b.id),title:i.default_model_id===b.id?"Default model":"Set as default",children:l.jsx(Bh,{size:14,fill:i.default_model_id===b.id?"currentColor":"none"})}),l.jsx("button",{className:"delete-item",onClick:()=>z(b.id),children:l.jsx(Ge,{size:16})})]}),l.jsxs("div",{className:"model-card-body",children:[l.jsxs("div",{className:"model-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Provider"}),l.jsxs("select",{value:b.provider,onChange:x=>j(b.id,{provider:x.target.value}),children:[l.jsx("option",{value:"gemini",children:"Gemini"}),l.jsx("option",{value:"litellm",children:"LiteLLM"}),l.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"Model Name"}),l.jsx("input",{type:"text",value:b.model_name,onChange:x=>j(b.id,{model_name:x.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),b.provider==="litellm"&&l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"API Base URL"}),l.jsx("input",{type:"text",value:b.api_base||"",onChange:x=>j(b.id,{api_base:x.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),l.jsxs("div",{className:"model-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Temperature"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:b.temperature??"",onChange:x=>j(b.id,{temperature:x.target.value?parseFloat(x.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Tokens"}),l.jsx("input",{type:"number",min:"1",value:b.max_output_tokens??"",onChange:x=>j(b.id,{max_output_tokens:x.target.value?parseInt(x.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top P"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:b.top_p??"",onChange:x=>j(b.id,{top_p:x.target.value?parseFloat(x.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top K"}),l.jsx("input",{type:"number",min:"1",value:b.top_k??"",onChange:x=>j(b.id,{top_k:x.target.value?parseInt(x.target.value):void 0}),placeholder:"Default"})]})]})]})]},b.id))]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Vh,{size:20}),"Advanced Options"]})}),l.jsxs("div",{className:"toggle-group",children:[l.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Event Compaction"}),l.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&l.jsx("input",{type:"number",value:i.compaction.max_events,onChange:b=>o({compaction:{...i.compaction,max_events:parseInt(b.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),l.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[l.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Context Caching"}),l.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&l.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:b=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(b.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),l.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[l.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Resumability"}),l.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(qu,{size:20}),"Session State Keys"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:s,children:[l.jsx(He,{size:14}),"Add Key"]})]}),i.state_keys.length===0?l.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((b,x)=>l.jsxs("div",{className:"list-item",children:[l.jsxs("div",{className:"list-item-content",children:[l.jsx("input",{type:"text",value:b.name,onChange:E=>u(x,{name:E.target.value}),placeholder:"Key name"}),l.jsxs("select",{value:b.type,onChange:E=>u(x,{type:E.target.value}),children:[l.jsx("option",{value:"string",children:"String"}),l.jsx("option",{value:"number",children:"Number"}),l.jsx("option",{value:"boolean",children:"Boolean"}),l.jsx("option",{value:"object",children:"Object"}),l.jsx("option",{value:"array",children:"Array"})]}),l.jsxs("select",{value:b.scope,onChange:E=>u(x,{scope:E.target.value}),children:[l.jsx("option",{value:"session",children:"Session"}),l.jsx("option",{value:"user",children:"User"}),l.jsx("option",{value:"app",children:"App"}),l.jsx("option",{value:"temp",children:"Temporary"})]}),l.jsx("input",{type:"text",value:b.description,onChange:E=>u(x,{description:E.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),l.jsx("button",{className:"delete-item",onClick:()=>c(x),children:l.jsx(Ge,{size:16})})]},x))]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(yr,{size:20}),"Plugins"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,children:[l.jsx(He,{size:14}),"Add Plugin"]})]}),i.plugins.length===0?l.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins like ReflectAndRetryToolPlugin for error handling."}):i.plugins.map((b,x)=>l.jsxs("div",{className:"list-item",children:[l.jsxs("div",{className:"list-item-content",children:[l.jsx("select",{value:b.type,onChange:E=>p(x,{type:E.target.value}),children:l.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"})}),b.type==="ReflectAndRetryToolPlugin"&&l.jsxs(l.Fragment,{children:[l.jsx("input",{type:"number",value:b.max_retries||3,onChange:E=>p(x,{max_retries:parseInt(E.target.value)}),placeholder:"Max retries"}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("input",{type:"checkbox",checked:b.throw_exception_if_retry_exceeded||!1,onChange:E=>p(x,{throw_exception_if_retry_exceeded:E.target.checked})}),"Throw on exceed"]})]})]}),l.jsx("button",{className:"delete-item",onClick:()=>f(x),children:l.jsx(Ge,{size:16})})]},x))]})]})}const s0="modulepreload",u0=function(e){return"/"+e},Vd={},Wh=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=u0(u),u in Vd)return;Vd[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":s0,c||(p.as="script"),p.crossOrigin="",p.href=u,s&&p.setAttribute("nonce",s),document.head.appendChild(p),c)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})};function Wd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c0(e){if(Array.isArray(e))return e}function d0(e,t,n){return(t=y0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,s=[],u=!0,c=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(u=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);u=!0);}catch(d){c=!0,i=d}finally{try{if(!u&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}function f0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function qd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hd(Object(n),!0).forEach(function(r){d0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function m0(e,t){if(e==null)return{};var n,r,i=h0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function h0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function g0(e,t){return c0(e)||p0(e,t)||v0(e,t)||f0()}function x0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function y0(e){var t=x0(e,"string");return typeof t=="symbol"?t:t+""}function v0(e,t){if(e){if(typeof e=="string")return Wd(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Wd(e,t):void 0}}function b0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Qd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kd(Object(n),!0).forEach(function(r){b0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function k0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function si(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return t.apply(n,[].concat(i,s))}}}function cl(e){return{}.toString.call(e).includes("Object")}function w0(e){return!Object.keys(e).length}function Vi(e){return typeof e=="function"}function j0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function S0(e,t){return cl(t)||_n("changeType"),Object.keys(t).some(function(n){return!j0(e,n)})&&_n("changeField"),t}function _0(e){Vi(e)||_n("selectorType")}function C0(e){Vi(e)||cl(e)||_n("handlerType"),cl(e)&&Object.values(e).some(function(t){return!Vi(t)})&&_n("handlersType")}function N0(e){e||_n("initialIsRequired"),cl(e)||_n("initialType"),w0(e)&&_n("initialContent")}function E0(e,t){throw new Error(e[t]||e.default)}var z0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},_n=si(E0)(z0),vo={changes:S0,selector:_0,handler:C0,initial:N0};function T0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};vo.initial(e),vo.handler(t);var n={current:e},r=si(A0)(n,t),i=si(L0)(n),o=si(vo.changes)(e),a=si(P0)(n);function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return vo.selector(c),c(n.current)}function u(c){k0(r,i,o,a)(c)}return[s,u]}function P0(e,t){return Vi(t)?t(e.current):t}function L0(e,t){return e.current=Qd(Qd({},e.current),t),t}function A0(e,t,n){return Vi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var I0={create:T0},R0={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function M0(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return t.apply(n,[].concat(i,s))}}}function O0(e){return{}.toString.call(e).includes("Object")}function D0(e){return e||Gd("configIsRequired"),O0(e)||Gd("configType"),e.urls?($0(),{paths:{vs:e.urls.monacoBase}}):e}function $0(){console.warn(Hh.deprecation)}function F0(e,t){throw new Error(e[t]||e.default)}var Hh={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Gd=M0(F0)(Hh),B0={config:D0},U0=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function qh(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],qh(e[n],t[n]))}),qd(qd({},e),t)}var V0={type:"cancelation",msg:"operation is manually canceled"};function ha(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(V0):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var W0=["monaco"],H0=I0.create({config:R0,isInitialized:!1,resolve:null,reject:null,monaco:null}),Kh=g0(H0,2),Xi=Kh[0],Al=Kh[1];function q0(e){var t=B0.config(e),n=t.monaco,r=m0(t,W0);Al(function(i){return{config:qh(i.config,r),monaco:n}})}function K0(){var e=Xi(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Al({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ha(ga);if(window.monaco&&window.monaco.editor)return Qh(window.monaco),e.resolve(window.monaco),ha(ga);U0(Q0,J0)(Y0)}return ha(ga)}function Q0(e){return document.body.appendChild(e)}function G0(e){var t=document.createElement("script");return e&&(t.src=e),t}function J0(e){var t=Xi(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=G0("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Y0(){var e=Xi(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Qh(r),e.resolve(r)},function(n){e.reject(n)})}function Qh(e){Xi().monaco||Al({monaco:e})}function X0(){return Xi(function(e){var t=e.monaco;return t})}var ga=new Promise(function(e,t){return Al({resolve:e,reject:t})}),Gh={config:q0,init:K0,__getMonacoInstance:X0},Z0={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},xa=Z0,eb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},tb=eb;function nb({children:e}){return Rt.createElement("div",{style:tb.container},e)}var rb=nb,ib=rb;function ob({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return Rt.createElement("section",{style:{...xa.wrapper,width:e,height:t},...a},!n&&Rt.createElement(ib,null,r),Rt.createElement("div",{ref:i,style:{...xa.fullWidth,...!n&&xa.hide},className:o}))}var lb=ob,Jh=N.memo(lb);function ab(e){N.useEffect(e,[])}var Yh=ab;function sb(e,t,n=!0){let r=N.useRef(!0);N.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var pt=sb;function vi(){}function vr(e,t,n,r){return ub(e,r)||cb(e,t,n,r)}function ub(e,t){return e.editor.getModel(Xh(e,t))}function cb(e,t,n,r){return e.editor.createModel(t,n,r?Xh(e,r):void 0)}function Xh(e,t){return e.Uri.parse(t)}function db({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:u=!1,theme:c="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:w,wrapperProps:j={},beforeMount:z=vi,onMount:h=vi}){let[g,y]=N.useState(!1),[T,k]=N.useState(!0),v=N.useRef(null),P=N.useRef(null),O=N.useRef(null),F=N.useRef(h),_=N.useRef(z),b=N.useRef(!1);Yh(()=>{let I=Gh.init();return I.then(D=>(P.current=D)&&k(!1)).catch(D=>(D==null?void 0:D.type)!=="cancelation"&&console.error("Monaco initialization: error:",D)),()=>v.current?M():I.cancel()}),pt(()=>{if(v.current&&P.current){let I=v.current.getOriginalEditor(),D=vr(P.current,e||"",r||n||"text",o||"");D!==I.getModel()&&I.setModel(D)}},[o],g),pt(()=>{if(v.current&&P.current){let I=v.current.getModifiedEditor(),D=vr(P.current,t||"",i||n||"text",a||"");D!==I.getModel()&&I.setModel(D)}},[a],g),pt(()=>{let I=v.current.getModifiedEditor();I.getOption(P.current.editor.EditorOption.readOnly)?I.setValue(t||""):t!==I.getValue()&&(I.executeEdits("",[{range:I.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),I.pushUndoStop())},[t],g),pt(()=>{var I,D;(D=(I=v.current)==null?void 0:I.getModel())==null||D.original.setValue(e||"")},[e],g),pt(()=>{let{original:I,modified:D}=v.current.getModel();P.current.editor.setModelLanguage(I,r||n||"text"),P.current.editor.setModelLanguage(D,i||n||"text")},[n,r,i],g),pt(()=>{var I;(I=P.current)==null||I.editor.setTheme(c)},[c],g),pt(()=>{var I;(I=v.current)==null||I.updateOptions(p)},[p],g);let x=N.useCallback(()=>{var L;if(!P.current)return;_.current(P.current);let I=vr(P.current,e||"",r||n||"text",o||""),D=vr(P.current,t||"",i||n||"text",a||"");(L=v.current)==null||L.setModel({original:I,modified:D})},[n,t,i,e,r,o,a]),E=N.useCallback(()=>{var I;!b.current&&O.current&&(v.current=P.current.editor.createDiffEditor(O.current,{automaticLayout:!0,...p}),x(),(I=P.current)==null||I.editor.setTheme(c),y(!0),b.current=!0)},[p,c,x]);N.useEffect(()=>{g&&F.current(v.current,P.current)},[g]),N.useEffect(()=>{!T&&!g&&E()},[T,g,E]);function M(){var D,L,A,V;let I=(D=v.current)==null?void 0:D.getModel();s||((L=I==null?void 0:I.original)==null||L.dispose()),u||((A=I==null?void 0:I.modified)==null||A.dispose()),(V=v.current)==null||V.dispose()}return Rt.createElement(Jh,{width:m,height:f,isEditorReady:g,loading:d,_ref:O,className:w,wrapperProps:j})}var pb=db;N.memo(pb);function fb(e){let t=N.useRef();return N.useEffect(()=>{t.current=e},[e]),t.current}var mb=fb,bo=new Map;function hb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:s,loading:u="Loading...",options:c={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:w="100%",className:j,wrapperProps:z={},beforeMount:h=vi,onMount:g=vi,onChange:y,onValidate:T=vi}){let[k,v]=N.useState(!1),[P,O]=N.useState(!0),F=N.useRef(null),_=N.useRef(null),b=N.useRef(null),x=N.useRef(g),E=N.useRef(h),M=N.useRef(),I=N.useRef(r),D=mb(o),L=N.useRef(!1),A=N.useRef(!1);Yh(()=>{let W=Gh.init();return W.then(Q=>(F.current=Q)&&O(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>_.current?S():W.cancel()}),pt(()=>{var Q,C,ne,ie;let W=vr(F.current,e||r||"",t||i||"",o||n||"");W!==((Q=_.current)==null?void 0:Q.getModel())&&(p&&bo.set(D,(C=_.current)==null?void 0:C.saveViewState()),(ne=_.current)==null||ne.setModel(W),p&&((ie=_.current)==null||ie.restoreViewState(bo.get(o))))},[o],k),pt(()=>{var W;(W=_.current)==null||W.updateOptions(c)},[c],k),pt(()=>{!_.current||r===void 0||(_.current.getOption(F.current.editor.EditorOption.readOnly)?_.current.setValue(r):r!==_.current.getValue()&&(A.current=!0,_.current.executeEdits("",[{range:_.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),_.current.pushUndoStop(),A.current=!1))},[r],k),pt(()=>{var Q,C;let W=(Q=_.current)==null?void 0:Q.getModel();W&&i&&((C=F.current)==null||C.editor.setModelLanguage(W,i))},[i],k),pt(()=>{var W;s!==void 0&&((W=_.current)==null||W.revealLine(s))},[s],k),pt(()=>{var W;(W=F.current)==null||W.editor.setTheme(a)},[a],k);let V=N.useCallback(()=>{var W;if(!(!b.current||!F.current)&&!L.current){E.current(F.current);let Q=o||n,C=vr(F.current,r||e||"",t||i||"",Q||"");_.current=(W=F.current)==null?void 0:W.editor.create(b.current,{model:C,automaticLayout:!0,...c},d),p&&_.current.restoreViewState(bo.get(Q)),F.current.editor.setTheme(a),s!==void 0&&_.current.revealLine(s),v(!0),L.current=!0}},[e,t,n,r,i,o,c,d,p,a,s]);N.useEffect(()=>{k&&x.current(_.current,F.current)},[k]),N.useEffect(()=>{!P&&!k&&V()},[P,k,V]),I.current=r,N.useEffect(()=>{var W,Q;k&&y&&((W=M.current)==null||W.dispose(),M.current=(Q=_.current)==null?void 0:Q.onDidChangeModelContent(C=>{A.current||y(_.current.getValue(),C)}))},[k,y]),N.useEffect(()=>{if(k){let W=F.current.editor.onDidChangeMarkers(Q=>{var ne;let C=(ne=_.current.getModel())==null?void 0:ne.uri;if(C&&Q.find(ie=>ie.path===C.path)){let ie=F.current.editor.getModelMarkers({resource:C});T==null||T(ie)}});return()=>{W==null||W.dispose()}}return()=>{}},[k,T]);function S(){var W,Q;(W=M.current)==null||W.dispose(),f?p&&bo.set(o,_.current.saveViewState()):(Q=_.current.getModel())==null||Q.dispose(),_.current.dispose()}return Rt.createElement(Jh,{width:m,height:w,isEditorReady:k,loading:u,_ref:b,className:j,wrapperProps:z})}var gb=hb,xb=N.memo(gb),Or=xb;function yb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const vb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,bb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,kb={};function Jd(e,t){return(kb.jsx?bb:vb).test(e)}const wb=/[ \t\n\f\r]/g;function jb(e){return typeof e=="object"?e.type==="text"?Yd(e.value):!1:Yd(e)}function Yd(e){return e.replace(wb,"")===""}class Zi{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Zi.prototype.normal={};Zi.prototype.property={};Zi.prototype.space=void 0;function Zh(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Zi(n,r,t)}function Ps(e){return e.toLowerCase()}class at{constructor(t,n){this.attribute=n,this.property=t}}at.prototype.attribute="";at.prototype.booleanish=!1;at.prototype.boolean=!1;at.prototype.commaOrSpaceSeparated=!1;at.prototype.commaSeparated=!1;at.prototype.defined=!1;at.prototype.mustUseProperty=!1;at.prototype.number=!1;at.prototype.overloadedBoolean=!1;at.prototype.property="";at.prototype.spaceSeparated=!1;at.prototype.space=void 0;let Sb=0;const re=Zn(),Pe=Zn(),Ls=Zn(),K=Zn(),ye=Zn(),Cr=Zn(),ct=Zn();function Zn(){return 2**++Sb}const As=Object.freeze(Object.defineProperty({__proto__:null,boolean:re,booleanish:Pe,commaOrSpaceSeparated:ct,commaSeparated:Cr,number:K,overloadedBoolean:Ls,spaceSeparated:ye},Symbol.toStringTag,{value:"Module"})),ya=Object.keys(As);class Gu extends at{constructor(t,n,r,i){let o=-1;if(super(t,n),Xd(this,"space",i),typeof r=="number")for(;++o<ya.length;){const a=ya[o];Xd(this,ya[o],(r&As[a])===As[a])}}}Gu.prototype.defined=!0;function Xd(e,t,n){n&&(e[t]=n)}function Ur(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Gu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Ps(r)]=r,n[Ps(o.attribute)]=r}return new Zi(t,n,e.space)}const eg=Ur({properties:{ariaActiveDescendant:null,ariaAtomic:Pe,ariaAutoComplete:null,ariaBusy:Pe,ariaChecked:Pe,ariaColCount:K,ariaColIndex:K,ariaColSpan:K,ariaControls:ye,ariaCurrent:null,ariaDescribedBy:ye,ariaDetails:null,ariaDisabled:Pe,ariaDropEffect:ye,ariaErrorMessage:null,ariaExpanded:Pe,ariaFlowTo:ye,ariaGrabbed:Pe,ariaHasPopup:null,ariaHidden:Pe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ye,ariaLevel:K,ariaLive:null,ariaModal:Pe,ariaMultiLine:Pe,ariaMultiSelectable:Pe,ariaOrientation:null,ariaOwns:ye,ariaPlaceholder:null,ariaPosInSet:K,ariaPressed:Pe,ariaReadOnly:Pe,ariaRelevant:null,ariaRequired:Pe,ariaRoleDescription:ye,ariaRowCount:K,ariaRowIndex:K,ariaRowSpan:K,ariaSelected:Pe,ariaSetSize:K,ariaSort:null,ariaValueMax:K,ariaValueMin:K,ariaValueNow:K,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function tg(e,t){return t in e?e[t]:t}function ng(e,t){return tg(e,t.toLowerCase())}const _b=Ur({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Cr,acceptCharset:ye,accessKey:ye,action:null,allow:null,allowFullScreen:re,allowPaymentRequest:re,allowUserMedia:re,alt:null,as:null,async:re,autoCapitalize:null,autoComplete:ye,autoFocus:re,autoPlay:re,blocking:ye,capture:null,charSet:null,checked:re,cite:null,className:ye,cols:K,colSpan:null,content:null,contentEditable:Pe,controls:re,controlsList:ye,coords:K|Cr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:re,defer:re,dir:null,dirName:null,disabled:re,download:Ls,draggable:Pe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:re,formTarget:null,headers:ye,height:K,hidden:Ls,high:K,href:null,hrefLang:null,htmlFor:ye,httpEquiv:ye,id:null,imageSizes:null,imageSrcSet:null,inert:re,inputMode:null,integrity:null,is:null,isMap:re,itemId:null,itemProp:ye,itemRef:ye,itemScope:re,itemType:ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:re,low:K,manifest:null,max:null,maxLength:K,media:null,method:null,min:null,minLength:K,multiple:re,muted:re,name:null,nonce:null,noModule:re,noValidate:re,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:re,optimum:K,pattern:null,ping:ye,placeholder:null,playsInline:re,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:re,referrerPolicy:null,rel:ye,required:re,reversed:re,rows:K,rowSpan:K,sandbox:ye,scope:null,scoped:re,seamless:re,selected:re,shadowRootClonable:re,shadowRootDelegatesFocus:re,shadowRootMode:null,shape:null,size:K,sizes:null,slot:null,span:K,spellCheck:Pe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:K,step:null,style:null,tabIndex:K,target:null,title:null,translate:null,type:null,typeMustMatch:re,useMap:null,value:Pe,width:K,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ye,axis:null,background:null,bgColor:null,border:K,borderColor:null,bottomMargin:K,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:re,declare:re,event:null,face:null,frame:null,frameBorder:null,hSpace:K,leftMargin:K,link:null,longDesc:null,lowSrc:null,marginHeight:K,marginWidth:K,noResize:re,noHref:re,noShade:re,noWrap:re,object:null,profile:null,prompt:null,rev:null,rightMargin:K,rules:null,scheme:null,scrolling:Pe,standby:null,summary:null,text:null,topMargin:K,valueType:null,version:null,vAlign:null,vLink:null,vSpace:K,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:re,disableRemotePlayback:re,prefix:null,property:null,results:K,security:null,unselectable:null},space:"html",transform:ng}),Cb=Ur({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:ct,accentHeight:K,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:K,amplitude:K,arabicForm:null,ascent:K,attributeName:null,attributeType:null,azimuth:K,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:K,by:null,calcMode:null,capHeight:K,className:ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:K,diffuseConstant:K,direction:null,display:null,dur:null,divisor:K,dominantBaseline:null,download:re,dx:null,dy:null,edgeMode:null,editable:null,elevation:K,enableBackground:null,end:null,event:null,exponent:K,externalResourcesRequired:null,fill:null,fillOpacity:K,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Cr,g2:Cr,glyphName:Cr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:K,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:K,horizOriginX:K,horizOriginY:K,id:null,ideographic:K,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:K,k:K,k1:K,k2:K,k3:K,k4:K,kernelMatrix:ct,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:K,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:K,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:K,overlineThickness:K,paintOrder:null,panose1:null,path:null,pathLength:K,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:K,pointsAtY:K,pointsAtZ:K,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ct,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ct,rev:ct,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ct,requiredFeatures:ct,requiredFonts:ct,requiredFormats:ct,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:K,specularExponent:K,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:K,strikethroughThickness:K,string:null,stroke:null,strokeDashArray:ct,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:K,strokeOpacity:K,strokeWidth:null,style:null,surfaceScale:K,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ct,tabIndex:K,tableValues:null,target:null,targetX:K,targetY:K,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ct,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:K,underlineThickness:K,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:K,values:null,vAlphabetic:K,vMathematical:K,vectorEffect:null,vHanging:K,vIdeographic:K,version:null,vertAdvY:K,vertOriginX:K,vertOriginY:K,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:K,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:tg}),rg=Ur({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),ig=Ur({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ng}),og=Ur({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Nb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Eb=/[A-Z]/g,Zd=/-[a-z]/g,zb=/^data[-\w.:]+$/i;function Tb(e,t){const n=Ps(t);let r=t,i=at;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&zb.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Zd,Lb);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Zd.test(o)){let a=o.replace(Eb,Pb);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Gu}return new i(r,t)}function Pb(e){return"-"+e.toLowerCase()}function Lb(e){return e.charAt(1).toUpperCase()}const Ab=Zh([eg,_b,rg,ig,og],"html"),Ju=Zh([eg,Cb,rg,ig,og],"svg");function Ib(e){return e.join(" ").trim()}var Yu={},ep=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Rb=/\n/g,Mb=/^\s*/,Ob=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Db=/^:\s*/,$b=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Fb=/^[;\s]*/,Bb=/^\s+|\s+$/g,Ub=`
`,tp="/",np="*",On="",Vb="comment",Wb="declaration";function Hb(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(w){var j=w.match(Rb);j&&(n+=j.length);var z=w.lastIndexOf(Ub);r=~z?w.length-z:r+w.length}function o(){var w={line:n,column:r};return function(j){return j.position=new a(w),c(),j}}function a(w){this.start=w,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function s(w){var j=new Error(t.source+":"+n+":"+r+": "+w);if(j.reason=w,j.filename=t.source,j.line=n,j.column=r,j.source=e,!t.silent)throw j}function u(w){var j=w.exec(e);if(j){var z=j[0];return i(z),e=e.slice(z.length),j}}function c(){u(Mb)}function d(w){var j;for(w=w||[];j=p();)j!==!1&&w.push(j);return w}function p(){var w=o();if(!(tp!=e.charAt(0)||np!=e.charAt(1))){for(var j=2;On!=e.charAt(j)&&(np!=e.charAt(j)||tp!=e.charAt(j+1));)++j;if(j+=2,On===e.charAt(j-1))return s("End of comment missing");var z=e.slice(2,j-2);return r+=2,i(z),e=e.slice(j),r+=2,w({type:Vb,comment:z})}}function f(){var w=o(),j=u(Ob);if(j){if(p(),!u(Db))return s("property missing ':'");var z=u($b),h=w({type:Wb,property:rp(j[0].replace(ep,On)),value:z?rp(z[0].replace(ep,On)):On});return u(Fb),h}}function m(){var w=[];d(w);for(var j;j=f();)j!==!1&&(w.push(j),d(w));return w}return c(),m()}function rp(e){return e?e.replace(Bb,On):On}var qb=Hb,Kb=$o&&$o.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Yu,"__esModule",{value:!0});Yu.default=Gb;const Qb=Kb(qb);function Gb(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Qb.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:s}=o;i?t(a,s,o):s&&(n=n||{},n[a]=s)}),n}var Il={};Object.defineProperty(Il,"__esModule",{value:!0});Il.camelCase=void 0;var Jb=/^--[a-zA-Z0-9_-]+$/,Yb=/-([a-z])/g,Xb=/^[^-]+$/,Zb=/^-(webkit|moz|ms|o|khtml)-/,ek=/^-(ms)-/,tk=function(e){return!e||Xb.test(e)||Jb.test(e)},nk=function(e,t){return t.toUpperCase()},ip=function(e,t){return"".concat(t,"-")},rk=function(e,t){return t===void 0&&(t={}),tk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(ek,ip):e=e.replace(Zb,ip),e.replace(Yb,nk))};Il.camelCase=rk;var ik=$o&&$o.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},ok=ik(Yu),lk=Il;function Is(e,t){var n={};return!e||typeof e!="string"||(0,ok.default)(e,function(r,i){r&&i&&(n[(0,lk.camelCase)(r,t)]=i)}),n}Is.default=Is;var ak=Is;const sk=ml(ak),lg=ag("end"),Xu=ag("start");function ag(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function uk(e){const t=Xu(e),n=lg(e);if(t&&n)return{start:t,end:n}}function bi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?op(e.position):"start"in e||"end"in e?op(e):"line"in e||"column"in e?Rs(e):""}function Rs(e){return lp(e&&e.line)+":"+lp(e&&e.column)}function op(e){return Rs(e&&e.start)+"-"+Rs(e&&e.end)}function lp(e){return e&&typeof e=="number"?e:1}class Ke extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const s=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=s?s.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=s?s.line:void 0,this.name=bi(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ke.prototype.file="";Ke.prototype.name="";Ke.prototype.reason="";Ke.prototype.message="";Ke.prototype.stack="";Ke.prototype.column=void 0;Ke.prototype.line=void 0;Ke.prototype.ancestors=void 0;Ke.prototype.cause=void 0;Ke.prototype.fatal=void 0;Ke.prototype.place=void 0;Ke.prototype.ruleId=void 0;Ke.prototype.source=void 0;const Zu={}.hasOwnProperty,ck=new Map,dk=/[A-Z]/g,pk=new Set(["table","tbody","thead","tfoot","tr"]),fk=new Set(["td","th"]),sg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function mk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=wk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=kk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Ju:Ab,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=ug(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function ug(e,t,n){if(t.type==="element")return hk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return gk(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return yk(e,t,n);if(t.type==="mdxjsEsm")return xk(e,t);if(t.type==="root")return vk(e,t,n);if(t.type==="text")return bk(e,t)}function hk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Ju,e.schema=i),e.ancestors.push(t);const o=dg(e,t.tagName,!1),a=jk(e,t);let s=tc(e,t);return pk.has(t.tagName)&&(s=s.filter(function(u){return typeof u=="string"?!jb(u):!0})),cg(e,a,o,t),ec(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function gk(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Wi(e,t.position)}function xk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Wi(e,t.position)}function yk(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Ju,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:dg(e,t.name,!0),a=Sk(e,t),s=tc(e,t);return cg(e,a,o,t),ec(a,s),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function vk(e,t,n){const r={};return ec(r,tc(e,t)),e.create(t,e.Fragment,r,n)}function bk(e,t){return t.value}function cg(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function ec(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function kk(e,t,n){return r;function r(i,o,a,s){const c=Array.isArray(a.children)?n:t;return s?c(o,a,s):c(o,a)}}function wk(e,t){return n;function n(r,i,o,a){const s=Array.isArray(o.children),u=Xu(r);return t(i,o,a,s,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function jk(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Zu.call(t.properties,i)){const o=_k(e,i,t.properties[i]);if(o){const[a,s]=o;e.tableCellAlignToStyle&&a==="align"&&typeof s=="string"&&fk.has(t.tagName)?r=s:n[a]=s}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Sk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const s=a.properties[0];s.type,Object.assign(n,e.evaluater.evaluateExpression(s.argument))}else Wi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const s=r.value.data.estree.body[0];s.type,o=e.evaluater.evaluateExpression(s.expression)}else Wi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function tc(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:ck;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){const c=i.get(u)||0;a=u+"-"+c,i.set(u,c+1)}}const s=ug(e,o,a);s!==void 0&&n.push(s)}return n}function _k(e,t,n){const r=Tb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?yb(n):Ib(n)),r.property==="style"){let i=typeof n=="object"?n:Ck(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Nk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Nb[r.property]||r.property:r.attribute,n]}}function Ck(e,t){try{return sk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new Ke("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=sg+"#cannot-parse-style-attribute",i}}function dg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const s=Jd(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:s,computed:!!(o&&s.type==="Literal"),optional:!1}:s}r=a}else r=Jd(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Zu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Wi(e)}function Wi(e,t){const n=new Ke("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=sg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Nk(e){const t={};let n;for(n in e)Zu.call(e,n)&&(t[Ek(n)]=e[n]);return t}function Ek(e){let t=e.replace(dk,zk);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function zk(e){return"-"+e.toLowerCase()}const va={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Tk={};function Pk(e,t){const n=Tk,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return pg(e,r,i)}function pg(e,t,n){if(Lk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ap(e.children,t,n)}return Array.isArray(e)?ap(e,t,n):""}function ap(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=pg(e[i],t,n);return r.join("")}function Lk(e){return!!(e&&typeof e=="object")}const sp=document.createElement("i");function nc(e){const t="&"+e+";";sp.innerHTML=t;const n=sp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Qt(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function wt(e,t){return e.length>0?(Qt(e,e.length,0,t),e):t}const up={}.hasOwnProperty;function Ak(e){const t={};let n=-1;for(;++n<e.length;)Ik(t,e[n]);return t}function Ik(e,t){let n;for(n in t){const i=(up.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){up.call(i,a)||(i[a]=[]);const s=o[a];Rk(i[a],Array.isArray(s)?s:s?[s]:[])}}}function Rk(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Qt(e,0,0,r)}function fg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Nr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Wt=An(/[A-Za-z]/),mt=An(/[\dA-Za-z]/),Mk=An(/[#-'*+\--9=?A-Z^-~]/);function Ms(e){return e!==null&&(e<32||e===127)}const Os=An(/\d/),Ok=An(/[\dA-Fa-f]/),Dk=An(/[!-/:-@[-`{-~]/);function te(e){return e!==null&&e<-2}function lt(e){return e!==null&&(e<0||e===32)}function me(e){return e===-2||e===-1||e===32}const $k=An(new RegExp("\\p{P}|\\p{S}","u")),Fk=An(/\s/);function An(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Vr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&mt(e.charCodeAt(n+1))&&mt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const s=e.charCodeAt(n+1);o<56320&&s>56319&&s<57344?(a=String.fromCharCode(o,s),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function be(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(u){return me(u)?(e.enter(n),s(u)):t(u)}function s(u){return me(u)&&o++<i?(e.consume(u),s):(e.exit(n),t(u))}}const Bk={tokenize:Uk};function Uk(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),be(e,t,"linePrefix")}function i(s){return e.enter("paragraph"),o(s)}function o(s){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,a(s)}function a(s){if(s===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(s);return}return te(s)?(e.consume(s),e.exit("chunkText"),o):(e.consume(s),a)}}const Vk={tokenize:Wk},cp={tokenize:Hk};function Wk(e){const t=this,n=[];let r=0,i,o,a;return s;function s(y){if(r<n.length){const T=n[r];return t.containerState=T[1],e.attempt(T[0].continuation,u,c)(y)}return c(y)}function u(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&g();const T=t.events.length;let k=T,v;for(;k--;)if(t.events[k][0]==="exit"&&t.events[k][1].type==="chunkFlow"){v=t.events[k][1].end;break}h(r);let P=T;for(;P<t.events.length;)t.events[P][1].end={...v},P++;return Qt(t.events,k+1,0,t.events.slice(T)),t.events.length=P,c(y)}return s(y)}function c(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return w(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(cp,d,p)(y)}function d(y){return i&&g(),h(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,w(y)}function f(y){return t.containerState={},e.attempt(cp,m,w)(y)}function m(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function w(y){if(y===null){i&&g(),h(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),j(y)}function j(y){if(y===null){z(e.exit("chunkFlow"),!0),h(0),e.consume(y);return}return te(y)?(e.consume(y),z(e.exit("chunkFlow")),r=0,t.interrupt=void 0,s):(e.consume(y),j)}function z(y,T){const k=t.sliceStream(y);if(T&&k.push(null),y.previous=o,o&&(o.next=y),o=y,i.defineSkip(y.start),i.write(k),t.parser.lazy[y.start.line]){let v=i.events.length;for(;v--;)if(i.events[v][1].start.offset<a&&(!i.events[v][1].end||i.events[v][1].end.offset>a))return;const P=t.events.length;let O=P,F,_;for(;O--;)if(t.events[O][0]==="exit"&&t.events[O][1].type==="chunkFlow"){if(F){_=t.events[O][1].end;break}F=!0}for(h(r),v=P;v<t.events.length;)t.events[v][1].end={..._},v++;Qt(t.events,O+1,0,t.events.slice(P)),t.events.length=v}}function h(y){let T=n.length;for(;T-- >y;){const k=n[T];t.containerState=k[1],k[0].exit.call(t,e)}n.length=y}function g(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Hk(e,t,n){return be(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function dp(e){if(e===null||lt(e)||Fk(e))return 1;if($k(e))return 2}function rc(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Ds={name:"attention",resolveAll:qk,tokenize:Kk};function qk(e,t){let n=-1,r,i,o,a,s,u,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};pp(p,-u),pp(f,u),a={type:u>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},s={type:u>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:u>1?"strong":"emphasis",start:{...a.start},end:{...s.end}},e[r][1].end={...a.start},e[n][1].start={...s.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=wt(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=wt(c,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),c=wt(c,rc(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=wt(c,[["exit",o,t],["enter",s,t],["exit",s,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=wt(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Qt(e,r-1,n-r+3,c),n=r+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Kk(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=dp(r);let o;return a;function a(u){return o=u,e.enter("attentionSequence"),s(u)}function s(u){if(u===o)return e.consume(u),s;const c=e.exit("attentionSequence"),d=dp(u),p=!d||d===2&&i||n.includes(u),f=!i||i===2&&d||n.includes(r);return c._open=!!(o===42?p:p&&(i||!f)),c._close=!!(o===42?f:f&&(d||!p)),t(u)}}function pp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Qk={name:"autolink",tokenize:Gk};function Gk(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return Wt(m)?(e.consume(m),a):m===64?n(m):c(m)}function a(m){return m===43||m===45||m===46||mt(m)?(r=1,s(m)):c(m)}function s(m){return m===58?(e.consume(m),r=0,u):(m===43||m===45||m===46||mt(m))&&r++<32?(e.consume(m),s):(r=0,c(m))}function u(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Ms(m)?n(m):(e.consume(m),u)}function c(m){return m===64?(e.consume(m),d):Mk(m)?(e.consume(m),c):n(m)}function d(m){return mt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||mt(m))&&r++<63){const w=m===45?f:p;return e.consume(m),w}return n(m)}}const Rl={partial:!0,tokenize:Jk};function Jk(e,t,n){return r;function r(o){return me(o)?be(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||te(o)?t(o):n(o)}}const mg={continuation:{tokenize:Xk},exit:Zk,name:"blockQuote",tokenize:Yk};function Yk(e,t,n){const r=this;return i;function i(a){if(a===62){const s=r.containerState;return s.open||(e.enter("blockQuote",{_container:!0}),s.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return me(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function Xk(e,t,n){const r=this;return i;function i(a){return me(a)?be(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(mg,t,n)(a)}}function Zk(e){e.exit("blockQuote")}const hg={name:"characterEscape",tokenize:ew};function ew(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Dk(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const gg={name:"characterReference",tokenize:tw};function tw(e,t,n){const r=this;let i=0,o,a;return s;function s(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),u}function u(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,a=mt,d(p))}function c(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=Ok,d):(e.enter("characterReferenceValue"),o=7,a=Os,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===mt&&!nc(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const fp={partial:!0,tokenize:rw},mp={concrete:!0,name:"codeFenced",tokenize:nw};function nw(e,t,n){const r=this,i={partial:!0,tokenize:k};let o=0,a=0,s;return u;function u(v){return c(v)}function c(v){const P=r.events[r.events.length-1];return o=P&&P[1].type==="linePrefix"?P[2].sliceSerialize(P[1],!0).length:0,s=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(v)}function d(v){return v===s?(a++,e.consume(v),d):a<3?n(v):(e.exit("codeFencedFenceSequence"),me(v)?be(e,p,"whitespace")(v):p(v))}function p(v){return v===null||te(v)?(e.exit("codeFencedFence"),r.interrupt?t(v):e.check(fp,j,T)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(v))}function f(v){return v===null||te(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(v)):me(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),be(e,m,"whitespace")(v)):v===96&&v===s?n(v):(e.consume(v),f)}function m(v){return v===null||te(v)?p(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(v))}function w(v){return v===null||te(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(v)):v===96&&v===s?n(v):(e.consume(v),w)}function j(v){return e.attempt(i,T,z)(v)}function z(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),h}function h(v){return o>0&&me(v)?be(e,g,"linePrefix",o+1)(v):g(v)}function g(v){return v===null||te(v)?e.check(fp,j,T)(v):(e.enter("codeFlowValue"),y(v))}function y(v){return v===null||te(v)?(e.exit("codeFlowValue"),g(v)):(e.consume(v),y)}function T(v){return e.exit("codeFenced"),t(v)}function k(v,P,O){let F=0;return _;function _(I){return v.enter("lineEnding"),v.consume(I),v.exit("lineEnding"),b}function b(I){return v.enter("codeFencedFence"),me(I)?be(v,x,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):x(I)}function x(I){return I===s?(v.enter("codeFencedFenceSequence"),E(I)):O(I)}function E(I){return I===s?(F++,v.consume(I),E):F>=a?(v.exit("codeFencedFenceSequence"),me(I)?be(v,M,"whitespace")(I):M(I)):O(I)}function M(I){return I===null||te(I)?(v.exit("codeFencedFence"),P(I)):O(I)}}}function rw(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const ba={name:"codeIndented",tokenize:ow},iw={partial:!0,tokenize:lw};function ow(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),be(e,o,"linePrefix",5)(c)}function o(c){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(c):n(c)}function a(c){return c===null?u(c):te(c)?e.attempt(iw,a,u)(c):(e.enter("codeFlowValue"),s(c))}function s(c){return c===null||te(c)?(e.exit("codeFlowValue"),a(c)):(e.consume(c),s)}function u(c){return e.exit("codeIndented"),t(c)}}function lw(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):te(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):be(e,o,"linePrefix",5)(a)}function o(a){const s=r.events[r.events.length-1];return s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):te(a)?i(a):n(a)}}const aw={name:"codeText",previous:uw,resolve:sw,tokenize:cw};function sw(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function uw(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function cw(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),s(p)}function s(p){return p===96?(e.consume(p),r++,s):(e.exit("codeTextSequence"),u(p))}function u(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),u):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):te(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||te(p)?(e.exit("codeTextData"),u(p)):(e.consume(p),c)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",c(p))}}class dw{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ei(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ei(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ei(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ei(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ei(this.left,n.reverse())}}}function ei(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function xg(e){const t={};let n=-1,r,i,o,a,s,u,c;const d=new dw(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,pw(d,n)),n=t[n],c=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},s=d.slice(i,n),s.unshift(r),d.splice(i,n-i+1,s))}}return Qt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function pw(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const s=a.events,u=[],c={};let d,p,f=-1,m=n,w=0,j=0;const z=[j];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<s.length;)s[f][0]==="exit"&&s[f-1][0]==="enter"&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(j=f+1,z.push(j),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):z.pop(),f=z.length;f--;){const h=s.slice(z[f],z[f+1]),g=o.pop();u.push([g,g+h.length-1]),e.splice(g,2,h)}for(u.reverse(),f=-1;++f<u.length;)c[w+u[f][0]]=w+u[f][1],w+=u[f][1]-u[f][0]-1;return c}const fw={resolve:hw,tokenize:gw},mw={partial:!0,tokenize:xw};function hw(e){return xg(e),e}function gw(e,t){let n;return r;function r(s){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(s)}function i(s){return s===null?o(s):te(s)?e.check(mw,a,o)(s):(e.consume(s),i)}function o(s){return e.exit("chunkContent"),e.exit("content"),t(s)}function a(s){return e.consume(s),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function xw(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),be(e,o,"linePrefix")}function o(a){if(a===null||te(a))return n(a);const s=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&s&&s[1].type==="linePrefix"&&s[2].sliceSerialize(s[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function yg(e,t,n,r,i,o,a,s,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return p;function p(h){return h===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(h),e.exit(o),f):h===null||h===32||h===41||Ms(h)?n(h):(e.enter(r),e.enter(a),e.enter(s),e.enter("chunkString",{contentType:"string"}),j(h))}function f(h){return h===62?(e.enter(o),e.consume(h),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(s),e.enter("chunkString",{contentType:"string"}),m(h))}function m(h){return h===62?(e.exit("chunkString"),e.exit(s),f(h)):h===null||h===60||te(h)?n(h):(e.consume(h),h===92?w:m)}function w(h){return h===60||h===62||h===92?(e.consume(h),m):m(h)}function j(h){return!d&&(h===null||h===41||lt(h))?(e.exit("chunkString"),e.exit(s),e.exit(a),e.exit(r),t(h)):d<c&&h===40?(e.consume(h),d++,j):h===41?(e.consume(h),d--,j):h===null||h===32||h===40||Ms(h)?n(h):(e.consume(h),h===92?z:j)}function z(h){return h===40||h===41||h===92?(e.consume(h),j):j(h)}}function vg(e,t,n,r,i,o){const a=this;let s=0,u;return c;function c(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return s>999||m===null||m===91||m===93&&!u||m===94&&!s&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):te(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||te(m)||s++>999?(e.exit("chunkString"),d(m)):(e.consume(m),u||(u=!me(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),s++,p):p(m)}}function bg(e,t,n,r,i,o){let a;return s;function s(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,u):n(f)}function u(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),c(f))}function c(f){return f===a?(e.exit(o),u(a)):f===null?n(f):te(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),be(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||te(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function ki(e,t){let n;return r;function r(i){return te(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):me(i)?be(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const yw={name:"definition",tokenize:bw},vw={partial:!0,tokenize:kw};function bw(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return vg.call(r,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function s(m){return i=Nr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),u):n(m)}function u(m){return lt(m)?ki(e,c)(m):c(m)}function c(m){return yg(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(vw,p,p)(m)}function p(m){return me(m)?be(e,f,"whitespace")(m):f(m)}function f(m){return m===null||te(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function kw(e,t,n){return r;function r(s){return lt(s)?ki(e,i)(s):n(s)}function i(s){return bg(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(s)}function o(s){return me(s)?be(e,a,"whitespace")(s):a(s)}function a(s){return s===null||te(s)?t(s):n(s)}}const ww={name:"hardBreakEscape",tokenize:jw};function jw(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return te(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Sw={name:"headingAtx",resolve:_w,tokenize:Cw};function _w(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Qt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Cw(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||lt(d)?(e.exit("atxHeadingSequence"),s(d)):n(d)}function s(d){return d===35?(e.enter("atxHeadingSequence"),u(d)):d===null||te(d)?(e.exit("atxHeading"),t(d)):me(d)?be(e,s,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function u(d){return d===35?(e.consume(d),u):(e.exit("atxHeadingSequence"),s(d))}function c(d){return d===null||d===35||lt(d)?(e.exit("atxHeadingText"),s(d)):(e.consume(d),c)}}const Nw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],hp=["pre","script","style","textarea"],Ew={concrete:!0,name:"htmlFlow",resolveTo:Pw,tokenize:Lw},zw={partial:!0,tokenize:Iw},Tw={partial:!0,tokenize:Aw};function Pw(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Lw(e,t,n){const r=this;let i,o,a,s,u;return c;function c(C){return d(C)}function d(C){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(C),p}function p(C){return C===33?(e.consume(C),f):C===47?(e.consume(C),o=!0,j):C===63?(e.consume(C),i=3,r.interrupt?t:S):Wt(C)?(e.consume(C),a=String.fromCharCode(C),z):n(C)}function f(C){return C===45?(e.consume(C),i=2,m):C===91?(e.consume(C),i=5,s=0,w):Wt(C)?(e.consume(C),i=4,r.interrupt?t:S):n(C)}function m(C){return C===45?(e.consume(C),r.interrupt?t:S):n(C)}function w(C){const ne="CDATA[";return C===ne.charCodeAt(s++)?(e.consume(C),s===ne.length?r.interrupt?t:x:w):n(C)}function j(C){return Wt(C)?(e.consume(C),a=String.fromCharCode(C),z):n(C)}function z(C){if(C===null||C===47||C===62||lt(C)){const ne=C===47,ie=a.toLowerCase();return!ne&&!o&&hp.includes(ie)?(i=1,r.interrupt?t(C):x(C)):Nw.includes(a.toLowerCase())?(i=6,ne?(e.consume(C),h):r.interrupt?t(C):x(C)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(C):o?g(C):y(C))}return C===45||mt(C)?(e.consume(C),a+=String.fromCharCode(C),z):n(C)}function h(C){return C===62?(e.consume(C),r.interrupt?t:x):n(C)}function g(C){return me(C)?(e.consume(C),g):_(C)}function y(C){return C===47?(e.consume(C),_):C===58||C===95||Wt(C)?(e.consume(C),T):me(C)?(e.consume(C),y):_(C)}function T(C){return C===45||C===46||C===58||C===95||mt(C)?(e.consume(C),T):k(C)}function k(C){return C===61?(e.consume(C),v):me(C)?(e.consume(C),k):y(C)}function v(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),u=C,P):me(C)?(e.consume(C),v):O(C)}function P(C){return C===u?(e.consume(C),u=null,F):C===null||te(C)?n(C):(e.consume(C),P)}function O(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||lt(C)?k(C):(e.consume(C),O)}function F(C){return C===47||C===62||me(C)?y(C):n(C)}function _(C){return C===62?(e.consume(C),b):n(C)}function b(C){return C===null||te(C)?x(C):me(C)?(e.consume(C),b):n(C)}function x(C){return C===45&&i===2?(e.consume(C),D):C===60&&i===1?(e.consume(C),L):C===62&&i===4?(e.consume(C),W):C===63&&i===3?(e.consume(C),S):C===93&&i===5?(e.consume(C),V):te(C)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(zw,Q,E)(C)):C===null||te(C)?(e.exit("htmlFlowData"),E(C)):(e.consume(C),x)}function E(C){return e.check(Tw,M,Q)(C)}function M(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),I}function I(C){return C===null||te(C)?E(C):(e.enter("htmlFlowData"),x(C))}function D(C){return C===45?(e.consume(C),S):x(C)}function L(C){return C===47?(e.consume(C),a="",A):x(C)}function A(C){if(C===62){const ne=a.toLowerCase();return hp.includes(ne)?(e.consume(C),W):x(C)}return Wt(C)&&a.length<8?(e.consume(C),a+=String.fromCharCode(C),A):x(C)}function V(C){return C===93?(e.consume(C),S):x(C)}function S(C){return C===62?(e.consume(C),W):C===45&&i===2?(e.consume(C),S):x(C)}function W(C){return C===null||te(C)?(e.exit("htmlFlowData"),Q(C)):(e.consume(C),W)}function Q(C){return e.exit("htmlFlow"),t(C)}}function Aw(e,t,n){const r=this;return i;function i(a){return te(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Iw(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Rl,t,n)}}const Rw={name:"htmlText",tokenize:Mw};function Mw(e,t,n){const r=this;let i,o,a;return s;function s(S){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(S),u}function u(S){return S===33?(e.consume(S),c):S===47?(e.consume(S),k):S===63?(e.consume(S),y):Wt(S)?(e.consume(S),O):n(S)}function c(S){return S===45?(e.consume(S),d):S===91?(e.consume(S),o=0,w):Wt(S)?(e.consume(S),g):n(S)}function d(S){return S===45?(e.consume(S),m):n(S)}function p(S){return S===null?n(S):S===45?(e.consume(S),f):te(S)?(a=p,L(S)):(e.consume(S),p)}function f(S){return S===45?(e.consume(S),m):p(S)}function m(S){return S===62?D(S):S===45?f(S):p(S)}function w(S){const W="CDATA[";return S===W.charCodeAt(o++)?(e.consume(S),o===W.length?j:w):n(S)}function j(S){return S===null?n(S):S===93?(e.consume(S),z):te(S)?(a=j,L(S)):(e.consume(S),j)}function z(S){return S===93?(e.consume(S),h):j(S)}function h(S){return S===62?D(S):S===93?(e.consume(S),h):j(S)}function g(S){return S===null||S===62?D(S):te(S)?(a=g,L(S)):(e.consume(S),g)}function y(S){return S===null?n(S):S===63?(e.consume(S),T):te(S)?(a=y,L(S)):(e.consume(S),y)}function T(S){return S===62?D(S):y(S)}function k(S){return Wt(S)?(e.consume(S),v):n(S)}function v(S){return S===45||mt(S)?(e.consume(S),v):P(S)}function P(S){return te(S)?(a=P,L(S)):me(S)?(e.consume(S),P):D(S)}function O(S){return S===45||mt(S)?(e.consume(S),O):S===47||S===62||lt(S)?F(S):n(S)}function F(S){return S===47?(e.consume(S),D):S===58||S===95||Wt(S)?(e.consume(S),_):te(S)?(a=F,L(S)):me(S)?(e.consume(S),F):D(S)}function _(S){return S===45||S===46||S===58||S===95||mt(S)?(e.consume(S),_):b(S)}function b(S){return S===61?(e.consume(S),x):te(S)?(a=b,L(S)):me(S)?(e.consume(S),b):F(S)}function x(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),i=S,E):te(S)?(a=x,L(S)):me(S)?(e.consume(S),x):(e.consume(S),M)}function E(S){return S===i?(e.consume(S),i=void 0,I):S===null?n(S):te(S)?(a=E,L(S)):(e.consume(S),E)}function M(S){return S===null||S===34||S===39||S===60||S===61||S===96?n(S):S===47||S===62||lt(S)?F(S):(e.consume(S),M)}function I(S){return S===47||S===62||lt(S)?F(S):n(S)}function D(S){return S===62?(e.consume(S),e.exit("htmlTextData"),e.exit("htmlText"),t):n(S)}function L(S){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),A}function A(S){return me(S)?be(e,V,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):V(S)}function V(S){return e.enter("htmlTextData"),a(S)}}const ic={name:"labelEnd",resolveAll:Fw,resolveTo:Bw,tokenize:Uw},Ow={tokenize:Vw},Dw={tokenize:Ww},$w={tokenize:Hw};function Fw(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Qt(e,0,e.length,n),e}function Bw(e,t){let n=e.length,r=0,i,o,a,s;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return s=[["enter",u,t],["enter",c,t]],s=wt(s,e.slice(o+1,o+r+3)),s=wt(s,[["enter",d,t]]),s=wt(s,rc(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),s=wt(s,[["exit",d,t],e[a-2],e[a-1],["exit",c,t]]),s=wt(s,e.slice(a+1)),s=wt(s,[["exit",u,t]]),Qt(e,o,e.length,s),e}function Uw(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return s;function s(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Nr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),u):n(f)}function u(f){return f===40?e.attempt(Ow,d,a?d:p)(f):f===91?e.attempt(Dw,d,a?c:p)(f):a?d(f):p(f)}function c(f){return e.attempt($w,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function Vw(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return lt(p)?ki(e,o)(p):o(p)}function o(p){return p===41?d(p):yg(e,a,s,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return lt(p)?ki(e,u)(p):d(p)}function s(p){return n(p)}function u(p){return p===34||p===39||p===40?bg(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function c(p){return lt(p)?ki(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function Ww(e,t,n){const r=this;return i;function i(s){return vg.call(r,e,o,a,"reference","referenceMarker","referenceString")(s)}function o(s){return r.parser.defined.includes(Nr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(s):n(s)}function a(s){return n(s)}}function Hw(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const qw={name:"labelStartImage",resolveAll:ic.resolveAll,tokenize:Kw};function Kw(e,t,n){const r=this;return i;function i(s){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(s),e.exit("labelImageMarker"),o}function o(s){return s===91?(e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelImage"),a):n(s)}function a(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const Qw={name:"labelStartLink",resolveAll:ic.resolveAll,tokenize:Gw};function Gw(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const ka={name:"lineEnding",tokenize:Jw};function Jw(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),be(e,t,"linePrefix")}}const Oo={name:"thematicBreak",tokenize:Yw};function Yw(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),a(c)}function a(c){return i=c,s(c)}function s(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||te(c))?(e.exit("thematicBreak"),t(c)):n(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),me(c)?be(e,s,"whitespace")(c):s(c))}}const et={continuation:{tokenize:t2},exit:r2,name:"list",tokenize:e2},Xw={partial:!0,tokenize:i2},Zw={partial:!0,tokenize:n2};function e2(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return s;function s(m){const w=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Os(m)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Oo,n,c)(m):c(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(m)}return n(m)}function u(m){return Os(m)&&++a<10?(e.consume(m),u):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),c(m)):n(m)}function c(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Rl,r.interrupt?n:d,e.attempt(Xw,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return me(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function t2(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Rl,i,o);function i(s){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,be(e,t,"listItemIndent",r.containerState.size+1)(s)}function o(s){return r.containerState.furtherBlankLines||!me(s)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(s)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Zw,t,a)(s))}function a(s){return r.containerState._closeFlow=!0,r.interrupt=void 0,be(e,e.attempt(et,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s)}}function n2(e,t,n){const r=this;return be(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function r2(e){e.exit(this.containerState.type)}function i2(e,t,n){const r=this;return be(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!me(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const gp={name:"setextUnderline",resolveTo:o2,tokenize:l2};function o2(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function l2(e,t,n){const r=this;let i;return o;function o(c){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=c,a(c)):n(c)}function a(c){return e.enter("setextHeadingLineSequence"),s(c)}function s(c){return c===i?(e.consume(c),s):(e.exit("setextHeadingLineSequence"),me(c)?be(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||te(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const a2={tokenize:s2};function s2(e){const t=this,n=e.attempt(Rl,r,e.attempt(this.parser.constructs.flowInitial,i,be(e,e.attempt(this.parser.constructs.flow,i,e.attempt(fw,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const u2={resolveAll:wg()},c2=kg("string"),d2=kg("text");function kg(e){return{resolveAll:wg(e==="text"?p2:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,s);return a;function a(d){return c(d)?o(d):s(d)}function s(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),u}function u(d){return c(d)?(n.exit("data"),o(d)):(n.consume(d),u)}function c(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function wg(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function p2(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,s=0,u;for(;o--;){const c=i[o];if(typeof c=="string"){for(a=c.length;c.charCodeAt(a-1)===32;)s++,a--;if(a)break;a=-1}else if(c===-2)u=!0,s++;else if(c!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){const c={type:n===e.length||u||s<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const f2={42:et,43:et,45:et,48:et,49:et,50:et,51:et,52:et,53:et,54:et,55:et,56:et,57:et,62:mg},m2={91:yw},h2={[-2]:ba,[-1]:ba,32:ba},g2={35:Sw,42:Oo,45:[gp,Oo],60:Ew,61:gp,95:Oo,96:mp,126:mp},x2={38:gg,92:hg},y2={[-5]:ka,[-4]:ka,[-3]:ka,33:qw,38:gg,42:Ds,60:[Qk,Rw],91:Qw,92:[ww,hg],93:ic,95:Ds,96:aw},v2={null:[Ds,u2]},b2={null:[42,95]},k2={null:[]},w2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:b2,contentInitial:m2,disable:k2,document:f2,flow:g2,flowInitial:h2,insideSpan:v2,string:x2,text:y2},Symbol.toStringTag,{value:"Module"}));function j2(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],s=[];const u={attempt:P(k),check:P(v),consume:g,enter:y,exit:T,interrupt:P(v,{interrupt:!0})},c={code:null,containerState:{},defineSkip:j,events:[],now:w,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function p(b){return a=wt(a,b),z(),a[a.length-1]!==null?[]:(O(t,0),c.events=rc(o,c.events,c),c.events)}function f(b,x){return _2(m(b),x)}function m(b){return S2(a,b)}function w(){const{_bufferIndex:b,_index:x,line:E,column:M,offset:I}=r;return{_bufferIndex:b,_index:x,line:E,column:M,offset:I}}function j(b){i[b.line]=b.column,_()}function z(){let b;for(;r._index<a.length;){const x=a[r._index];if(typeof x=="string")for(b=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===b&&r._bufferIndex<x.length;)h(x.charCodeAt(r._bufferIndex));else h(x)}}function h(b){d=d(b)}function g(b){te(b)?(r.line++,r.column=1,r.offset+=b===-3?2:1,_()):b!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=b}function y(b,x){const E=x||{};return E.type=b,E.start=w(),c.events.push(["enter",E,c]),s.push(E),E}function T(b){const x=s.pop();return x.end=w(),c.events.push(["exit",x,c]),x}function k(b,x){O(b,x.from)}function v(b,x){x.restore()}function P(b,x){return E;function E(M,I,D){let L,A,V,S;return Array.isArray(M)?Q(M):"tokenize"in M?Q([M]):W(M);function W(de){return U;function U(Z){const oe=Z!==null&&de[Z],he=Z!==null&&de.null,xe=[...Array.isArray(oe)?oe:oe?[oe]:[],...Array.isArray(he)?he:he?[he]:[]];return Q(xe)(Z)}}function Q(de){return L=de,A=0,de.length===0?D:C(de[A])}function C(de){return U;function U(Z){return S=F(),V=de,de.partial||(c.currentConstruct=de),de.name&&c.parser.constructs.disable.null.includes(de.name)?ie():de.tokenize.call(x?Object.assign(Object.create(c),x):c,u,ne,ie)(Z)}}function ne(de){return b(V,S),I}function ie(de){return S.restore(),++A<L.length?C(L[A]):D}}}function O(b,x){b.resolveAll&&!o.includes(b)&&o.push(b),b.resolve&&Qt(c.events,x,c.events.length-x,b.resolve(c.events.slice(x),c)),b.resolveTo&&(c.events=b.resolveTo(c.events,c))}function F(){const b=w(),x=c.previous,E=c.currentConstruct,M=c.events.length,I=Array.from(s);return{from:M,restore:D};function D(){r=b,c.previous=x,c.currentConstruct=E,c.events.length=M,s=I,_()}}function _(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function S2(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const s=a[0];typeof s=="string"?a[0]=s.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function _2(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function C2(e){const r={constructs:Ak([w2,...(e||{}).extensions||[]]),content:i(Bk),defined:[],document:i(Vk),flow:i(a2),lazy:{},string:i(c2),text:i(d2)};return r;function i(o){return a;function a(s){return j2(r,o,s)}}}function N2(e){for(;!xg(e););return e}const xp=/[\0\t\n\r]/g;function E2(){let e=1,t="",n=!0,r;return i;function i(o,a,s){const u=[];let c,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(xp.lastIndex=p,c=xp.exec(o),f=c&&c.index!==void 0?c.index:o.length,m=o.charCodeAt(f),!c){t=o.slice(p);break}if(m===10&&p===f&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),p<f&&(u.push(o.slice(p,f)),e+=f-p),m){case 0:{u.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,u.push(-2);e++<d;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return s&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const z2=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function T2(e){return e.replace(z2,P2)}function P2(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return fg(n.slice(o?2:1),o?16:10)}return nc(n)||e}const jg={}.hasOwnProperty;function L2(e,t,n){return typeof t!="string"&&(n=t,t=void 0),A2(n)(N2(C2(n).document().write(E2()(e,t,!0))))}function A2(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Se),autolinkProtocol:F,autolinkEmail:F,atxHeading:o(Be),blockQuote:o(he),characterEscape:F,characterReference:F,codeFenced:o(xe),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(xe,a),codeText:o(ue,a),codeTextData:F,data:F,codeFlowValue:F,definition:o(Ze),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(vt),hardBreakEscape:o($t),hardBreakTrailing:o($t),htmlFlow:o($,a),htmlFlowData:F,htmlText:o($,a),htmlTextData:F,image:o(ce),label:a,link:o(Se),listItem:o(er),listItemValue:f,listOrdered:o(st,p),listUnordered:o(st),paragraph:o(B),reference:C,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(Be),strong:o(J),thematicBreak:o(le)},exit:{atxHeading:u(),atxHeadingSequence:k,autolink:u(),autolinkEmail:oe,autolinkProtocol:Z,blockQuote:u(),characterEscapeValue:_,characterReferenceMarkerHexadecimal:ie,characterReferenceMarkerNumeric:ie,characterReferenceValue:de,characterReference:U,codeFenced:u(z),codeFencedFence:j,codeFencedFenceInfo:m,codeFencedFenceMeta:w,codeFlowValue:_,codeIndented:u(h),codeText:u(I),codeTextData:_,data:_,definition:u(),definitionDestinationString:T,definitionLabelString:g,definitionTitleString:y,emphasis:u(),hardBreakEscape:u(x),hardBreakTrailing:u(x),htmlFlow:u(E),htmlFlowData:_,htmlText:u(M),htmlTextData:_,image:u(L),label:V,labelText:A,lineEnding:b,link:u(D),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:ne,resourceDestinationString:S,resourceTitleString:W,resource:Q,setextHeading:u(O),setextHeadingLineSequence:P,setextHeadingText:v,strong:u(),thematicBreak:u()}};Sg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(R){let H={type:"root",children:[]};const ee={stack:[H],tokenStack:[],config:t,enter:s,exit:c,buffer:a,resume:d,data:n},ae=[];let fe=-1;for(;++fe<R.length;)if(R[fe][1].type==="listOrdered"||R[fe][1].type==="listUnordered")if(R[fe][0]==="enter")ae.push(fe);else{const Et=ae.pop();fe=i(R,Et,fe)}for(fe=-1;++fe<R.length;){const Et=t[R[fe][0]];jg.call(Et,R[fe][1].type)&&Et[R[fe][1].type].call(Object.assign({sliceSerialize:R[fe][2].sliceSerialize},ee),R[fe][1])}if(ee.tokenStack.length>0){const Et=ee.tokenStack[ee.tokenStack.length-1];(Et[1]||yp).call(ee,void 0,Et[0])}for(H.position={start:un(R.length>0?R[0][1].start:{line:1,column:1,offset:0}),end:un(R.length>0?R[R.length-2][1].end:{line:1,column:1,offset:0})},fe=-1;++fe<t.transforms.length;)H=t.transforms[fe](H)||H;return H}function i(R,H,ee){let ae=H-1,fe=-1,Et=!1,In,Gt,Wr,Hr;for(;++ae<=ee;){const ut=R[ae];switch(ut[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ut[0]==="enter"?fe++:fe--,Hr=void 0;break}case"lineEndingBlank":{ut[0]==="enter"&&(In&&!Hr&&!fe&&!Wr&&(Wr=ae),Hr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Hr=void 0}if(!fe&&ut[0]==="enter"&&ut[1].type==="listItemPrefix"||fe===-1&&ut[0]==="exit"&&(ut[1].type==="listUnordered"||ut[1].type==="listOrdered")){if(In){let tr=ae;for(Gt=void 0;tr--;){const Jt=R[tr];if(Jt[1].type==="lineEnding"||Jt[1].type==="lineEndingBlank"){if(Jt[0]==="exit")continue;Gt&&(R[Gt][1].type="lineEndingBlank",Et=!0),Jt[1].type="lineEnding",Gt=tr}else if(!(Jt[1].type==="linePrefix"||Jt[1].type==="blockQuotePrefix"||Jt[1].type==="blockQuotePrefixWhitespace"||Jt[1].type==="blockQuoteMarker"||Jt[1].type==="listItemIndent"))break}Wr&&(!Gt||Wr<Gt)&&(In._spread=!0),In.end=Object.assign({},Gt?R[Gt][1].start:ut[1].end),R.splice(Gt||ae,0,["exit",In,ut[2]]),ae++,ee++}if(ut[1].type==="listItemPrefix"){const tr={type:"listItem",_spread:!1,start:Object.assign({},ut[1].start),end:void 0};In=tr,R.splice(ae,0,["enter",tr,ut[2]]),ae++,ee++,Wr=void 0,Hr=!0}}}return R[H][1]._spread=Et,ee}function o(R,H){return ee;function ee(ae){s.call(this,R(ae),ae),H&&H.call(this,ae)}}function a(){this.stack.push({type:"fragment",children:[]})}function s(R,H,ee){this.stack[this.stack.length-1].children.push(R),this.stack.push(R),this.tokenStack.push([H,ee||void 0]),R.position={start:un(H.start),end:void 0}}function u(R){return H;function H(ee){R&&R.call(this,ee),c.call(this,ee)}}function c(R,H){const ee=this.stack.pop(),ae=this.tokenStack.pop();if(ae)ae[0].type!==R.type&&(H?H.call(this,R,ae[0]):(ae[1]||yp).call(this,R,ae[0]));else throw new Error("Cannot close `"+R.type+"` ("+bi({start:R.start,end:R.end})+"): it’s not open");ee.position.end=un(R.end)}function d(){return Pk(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(R){if(this.data.expectingFirstListItemValue){const H=this.stack[this.stack.length-2];H.start=Number.parseInt(this.sliceSerialize(R),10),this.data.expectingFirstListItemValue=void 0}}function m(){const R=this.resume(),H=this.stack[this.stack.length-1];H.lang=R}function w(){const R=this.resume(),H=this.stack[this.stack.length-1];H.meta=R}function j(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function z(){const R=this.resume(),H=this.stack[this.stack.length-1];H.value=R.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function h(){const R=this.resume(),H=this.stack[this.stack.length-1];H.value=R.replace(/(\r?\n|\r)$/g,"")}function g(R){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.label=H,ee.identifier=Nr(this.sliceSerialize(R)).toLowerCase()}function y(){const R=this.resume(),H=this.stack[this.stack.length-1];H.title=R}function T(){const R=this.resume(),H=this.stack[this.stack.length-1];H.url=R}function k(R){const H=this.stack[this.stack.length-1];if(!H.depth){const ee=this.sliceSerialize(R).length;H.depth=ee}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function P(R){const H=this.stack[this.stack.length-1];H.depth=this.sliceSerialize(R).codePointAt(0)===61?1:2}function O(){this.data.setextHeadingSlurpLineEnding=void 0}function F(R){const ee=this.stack[this.stack.length-1].children;let ae=ee[ee.length-1];(!ae||ae.type!=="text")&&(ae=Y(),ae.position={start:un(R.start),end:void 0},ee.push(ae)),this.stack.push(ae)}function _(R){const H=this.stack.pop();H.value+=this.sliceSerialize(R),H.position.end=un(R.end)}function b(R){const H=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ee=H.children[H.children.length-1];ee.position.end=un(R.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(H.type)&&(F.call(this,R),_.call(this,R))}function x(){this.data.atHardBreak=!0}function E(){const R=this.resume(),H=this.stack[this.stack.length-1];H.value=R}function M(){const R=this.resume(),H=this.stack[this.stack.length-1];H.value=R}function I(){const R=this.resume(),H=this.stack[this.stack.length-1];H.value=R}function D(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const H=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=H,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function L(){const R=this.stack[this.stack.length-1];if(this.data.inReference){const H=this.data.referenceType||"shortcut";R.type+="Reference",R.referenceType=H,delete R.url,delete R.title}else delete R.identifier,delete R.label;this.data.referenceType=void 0}function A(R){const H=this.sliceSerialize(R),ee=this.stack[this.stack.length-2];ee.label=T2(H),ee.identifier=Nr(H).toLowerCase()}function V(){const R=this.stack[this.stack.length-1],H=this.resume(),ee=this.stack[this.stack.length-1];if(this.data.inReference=!0,ee.type==="link"){const ae=R.children;ee.children=ae}else ee.alt=H}function S(){const R=this.resume(),H=this.stack[this.stack.length-1];H.url=R}function W(){const R=this.resume(),H=this.stack[this.stack.length-1];H.title=R}function Q(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function ne(R){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.label=H,ee.identifier=Nr(this.sliceSerialize(R)).toLowerCase(),this.data.referenceType="full"}function ie(R){this.data.characterReferenceType=R.type}function de(R){const H=this.sliceSerialize(R),ee=this.data.characterReferenceType;let ae;ee?(ae=fg(H,ee==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ae=nc(H);const fe=this.stack[this.stack.length-1];fe.value+=ae}function U(R){const H=this.stack.pop();H.position.end=un(R.end)}function Z(R){_.call(this,R);const H=this.stack[this.stack.length-1];H.url=this.sliceSerialize(R)}function oe(R){_.call(this,R);const H=this.stack[this.stack.length-1];H.url="mailto:"+this.sliceSerialize(R)}function he(){return{type:"blockquote",children:[]}}function xe(){return{type:"code",lang:null,meta:null,value:""}}function ue(){return{type:"inlineCode",value:""}}function Ze(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function vt(){return{type:"emphasis",children:[]}}function Be(){return{type:"heading",depth:0,children:[]}}function $t(){return{type:"break"}}function $(){return{type:"html",value:""}}function ce(){return{type:"image",title:null,url:"",alt:null}}function Se(){return{type:"link",title:null,url:"",children:[]}}function st(R){return{type:"list",ordered:R.type==="listOrdered",start:null,spread:R._spread,children:[]}}function er(R){return{type:"listItem",spread:R._spread,checked:null,children:[]}}function B(){return{type:"paragraph",children:[]}}function J(){return{type:"strong",children:[]}}function Y(){return{type:"text",value:""}}function le(){return{type:"thematicBreak"}}}function un(e){return{line:e.line,column:e.column,offset:e.offset}}function Sg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Sg(e,r):I2(e,r)}}function I2(e,t){let n;for(n in t)if(jg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function yp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+bi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+bi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+bi({start:t.start,end:t.end})+") is still open")}function R2(e){const t=this;t.parser=n;function n(r){return L2(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function M2(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function O2(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function D2(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function $2(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function F2(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function B2(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Vr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,s+=1,e.footnoteCounts.set(r,s);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(s>1?"-"+s:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function U2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function V2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function _g(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function W2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return _g(e,t);const i={src:Vr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function H2(e,t){const n={src:Vr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function q2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function K2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return _g(e,t);const i={href:Vr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function Q2(e,t){const n={href:Vr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function G2(e,t,n){const r=e.all(t),i=n?J2(n):Cg(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let s=-1;for(;++s<r.length;){const d=r[s];(i||s!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&a.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,c),e.applyData(t,c)}function J2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Cg(n[r])}return t}function Cg(e){const t=e.spread;return t??e.children.length>1}function Y2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function X2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Z2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function ej(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function tj(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},s=Xu(t.children[1]),u=lg(t.children[t.children.length-1]);s&&u&&(a.position={start:s,end:u}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function nj(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,s=a?a.length:t.children.length;let u=-1;const c=[];for(;++u<s;){const p=t.children[u],f={},m=a?a[u]:void 0;m&&(f.align=m);let w={type:"element",tagName:o,properties:f,children:[]};p&&(w.children=e.all(p),e.patch(p,w),w=e.applyData(p,w)),c.push(w)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,d),e.applyData(t,d)}function rj(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const vp=9,bp=32;function ij(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(kp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(kp(t.slice(i),i>0,!1)),o.join("")}function kp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===vp||o===bp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===vp||o===bp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function oj(e,t){const n={type:"text",value:ij(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function lj(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const aj={blockquote:M2,break:O2,code:D2,delete:$2,emphasis:F2,footnoteReference:B2,heading:U2,html:V2,imageReference:W2,image:H2,inlineCode:q2,linkReference:K2,link:Q2,listItem:G2,list:Y2,paragraph:X2,root:Z2,strong:ej,table:tj,tableCell:rj,tableRow:nj,text:oj,thematicBreak:lj,toml:ko,yaml:ko,definition:ko,footnoteDefinition:ko};function ko(){}const Ng=-1,Ml=0,wi=1,dl=2,oc=3,lc=4,ac=5,sc=6,Eg=7,zg=8,wp=typeof self=="object"?self:globalThis,sj=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case Ml:case Ng:return n(a,i);case wi:{const s=n([],i);for(const u of a)s.push(r(u));return s}case dl:{const s=n({},i);for(const[u,c]of a)s[r(u)]=r(c);return s}case oc:return n(new Date(a),i);case lc:{const{source:s,flags:u}=a;return n(new RegExp(s,u),i)}case ac:{const s=n(new Map,i);for(const[u,c]of a)s.set(r(u),r(c));return s}case sc:{const s=n(new Set,i);for(const u of a)s.add(r(u));return s}case Eg:{const{name:s,message:u}=a;return n(new wp[s](u),i)}case zg:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:s}=new Uint8Array(a);return n(new DataView(s),a)}}return n(new wp[o](a),i)};return r},jp=e=>sj(new Map,e)(0),ir="",{toString:uj}={},{keys:cj}=Object,ti=e=>{const t=typeof e;if(t!=="object"||!e)return[Ml,t];const n=uj.call(e).slice(8,-1);switch(n){case"Array":return[wi,ir];case"Object":return[dl,ir];case"Date":return[oc,ir];case"RegExp":return[lc,ir];case"Map":return[ac,ir];case"Set":return[sc,ir];case"DataView":return[wi,n]}return n.includes("Array")?[wi,n]:n.includes("Error")?[Eg,n]:[dl,n]},wo=([e,t])=>e===Ml&&(t==="function"||t==="symbol"),dj=(e,t,n,r)=>{const i=(a,s)=>{const u=r.push(a)-1;return n.set(s,u),u},o=a=>{if(n.has(a))return n.get(a);let[s,u]=ti(a);switch(s){case Ml:{let d=a;switch(u){case"bigint":s=zg,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([Ng],a)}return i([s,d],a)}case wi:{if(u){let f=a;return u==="DataView"?f=new Uint8Array(a.buffer):u==="ArrayBuffer"&&(f=new Uint8Array(a)),i([u,[...f]],a)}const d=[],p=i([s,d],a);for(const f of a)d.push(o(f));return p}case dl:{if(u)switch(u){case"BigInt":return i([u,a.toString()],a);case"Boolean":case"Number":case"String":return i([u,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([s,d],a);for(const f of cj(a))(e||!wo(ti(a[f])))&&d.push([o(f),o(a[f])]);return p}case oc:return i([s,a.toISOString()],a);case lc:{const{source:d,flags:p}=a;return i([s,{source:d,flags:p}],a)}case ac:{const d=[],p=i([s,d],a);for(const[f,m]of a)(e||!(wo(ti(f))||wo(ti(m))))&&d.push([o(f),o(m)]);return p}case sc:{const d=[],p=i([s,d],a);for(const f of a)(e||!wo(ti(f)))&&d.push(o(f));return p}}const{message:c}=a;return i([s,{name:u,message:c}],a)};return o},Sp=(e,{json:t,lossy:n}={})=>{const r=[];return dj(!(t||n),!!t,new Map,r)(e),r},pl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?jp(Sp(e,t)):structuredClone(e):(e,t)=>jp(Sp(e,t));function pj(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function fj(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function mj(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||pj,r=e.options.footnoteBackLabel||fj,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},s=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const d=e.all(c),p=String(c.identifier).toUpperCase(),f=Vr(p.toLowerCase());let m=0;const w=[],j=e.footnoteCounts.get(p);for(;j!==void 0&&++m<=j;){w.length>0&&w.push({type:"text",value:" "});let g=typeof n=="string"?n:n(u,m);typeof g=="string"&&(g={type:"text",value:g}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,m),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const z=d[d.length-1];if(z&&z.type==="element"&&z.tagName==="p"){const g=z.children[z.children.length-1];g&&g.type==="text"?g.value+=" ":z.children.push({type:"text",value:" "}),z.children.push(...w)}else d.push(...w);const h={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(c,h),s.push(h)}if(s.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...pl(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(s,!0)},{type:"text",value:`
`}]}}const Tg=function(e){if(e==null)return yj;if(typeof e=="function")return Ol(e);if(typeof e=="object")return Array.isArray(e)?hj(e):gj(e);if(typeof e=="string")return xj(e);throw new Error("Expected function, string, or object as test")};function hj(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Tg(e[n]);return Ol(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function gj(e){const t=e;return Ol(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function xj(e){return Ol(t);function t(n){return n&&n.type===e}}function Ol(e){return t;function t(n,r,i){return!!(vj(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function yj(){return!0}function vj(e){return e!==null&&typeof e=="object"&&"type"in e}const Pg=[],bj=!0,_p=!1,kj="skip";function wj(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Tg(i),a=r?-1:1;s(e,void 0,[])();function s(u,c,d){const p=u&&typeof u=="object"?u:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(u.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Pg,w,j,z;if((!t||o(u,c,d[d.length-1]||void 0))&&(m=jj(n(u,d)),m[0]===_p))return m;if("children"in u&&u.children){const h=u;if(h.children&&m[0]!==kj)for(j=(r?h.children.length:-1)+a,z=d.concat(h);j>-1&&j<h.children.length;){const g=h.children[j];if(w=s(g,j,z)(),w[0]===_p)return w;j=typeof w[1]=="number"?w[1]:j+a}}return m}}}function jj(e){return Array.isArray(e)?e:typeof e=="number"?[bj,e]:e==null?Pg:[e]}function Lg(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),wj(e,o,s,i);function s(u,c){const d=c[c.length-1],p=d?d.children.indexOf(u):void 0;return a(u,p,d)}}const $s={}.hasOwnProperty,Sj={};function _j(e,t){const n=t||Sj,r=new Map,i=new Map,o=new Map,a={...aj,...n.handlers},s={all:c,applyData:Nj,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:u,options:n,patch:Cj,wrap:zj};return Lg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),s;function u(d,p){const f=d.type,m=s.handlers[f];if($s.call(s.handlers,f)&&m)return m(s,d,p);if(s.options.passThrough&&s.options.passThrough.includes(f)){if("children"in d){const{children:j,...z}=d,h=pl(z);return h.children=s.all(d),h}return pl(d)}return(s.options.unknownHandler||Ej)(s,d,p)}function c(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const w=s.one(f[m],d);if(w){if(m&&f[m-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=Cp(w.value)),!Array.isArray(w)&&w.type==="element")){const j=w.children[0];j&&j.type==="text"&&(j.value=Cp(j.value))}Array.isArray(w)?p.push(...w):p.push(w)}}}return p}}function Cj(e,t){e.position&&(t.position=uk(e))}function Nj(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,pl(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function Ej(e,t){const n=t.data||{},r="value"in t&&!($s.call(n,"hProperties")||$s.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function zj(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Cp(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Np(e,t){const n=_j(e,t),r=n.one(e,void 0),i=mj(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function Tj(e,t){return e&&"run"in e?async function(n,r){const i=Np(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Np(n,{file:r,...e||t})}}function Ep(e){if(e)throw e}var Do=Object.prototype.hasOwnProperty,Ag=Object.prototype.toString,zp=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,Pp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Ag.call(t)==="[object Array]"},Lp=function(t){if(!t||Ag.call(t)!=="[object Object]")return!1;var n=Do.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Do.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Do.call(t,i)},Ap=function(t,n){zp&&n.name==="__proto__"?zp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Ip=function(t,n){if(n==="__proto__")if(Do.call(t,n)){if(Tp)return Tp(t,n).value}else return;return t[n]},Pj=function e(){var t,n,r,i,o,a,s=arguments[0],u=1,c=arguments.length,d=!1;for(typeof s=="boolean"&&(d=s,s=arguments[1]||{},u=2),(s==null||typeof s!="object"&&typeof s!="function")&&(s={});u<c;++u)if(t=arguments[u],t!=null)for(n in t)r=Ip(s,n),i=Ip(t,n),s!==i&&(d&&i&&(Lp(i)||(o=Pp(i)))?(o?(o=!1,a=r&&Pp(r)?r:[]):a=r&&Lp(r)?r:{},Ap(s,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Ap(s,{name:n,newValue:i}));return s};const wa=ml(Pj);function Fs(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Lj(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);s(null,...i);function s(u,...c){const d=e[++o];let p=-1;if(u){a(u);return}for(;++p<i.length;)(c[p]===null||c[p]===void 0)&&(c[p]=i[p]);i=c,d?Aj(d,s)(...c):a(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Aj(e,t){let n;return r;function r(...a){const s=e.length>a.length;let u;s&&a.push(i);try{u=e.apply(this,a)}catch(c){const d=c;if(s&&n)throw d;return i(d)}s||(u&&u.then&&typeof u.then=="function"?u.then(o,i):u instanceof Error?i(u):o(u))}function i(a,...s){n||(n=!0,t(a,...s))}function o(a){i(null,a)}}const Ut={basename:Ij,dirname:Rj,extname:Mj,join:Oj,sep:"/"};function Ij(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');eo(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function Rj(e){if(eo(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Mj(e){eo(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const s=e.codePointAt(t);if(s===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),s===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Oj(...e){let t=-1,n;for(;++t<e.length;)eo(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Dj(n)}function Dj(e){eo(e);const t=e.codePointAt(0)===47;let n=$j(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function $j(e,t){let n="",r=0,i=-1,o=0,a=-1,s,u;for(;++a<=e.length;){if(a<e.length)s=e.codePointAt(a);else{if(s===47)break;s=47}if(s===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else s===46&&o>-1?o++:o=-1}return n}function eo(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Fj={cwd:Bj};function Bj(){return"/"}function Bs(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Uj(e){if(typeof e=="string")e=new URL(e);else if(!Bs(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Vj(e)}function Vj(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const ja=["history","path","basename","stem","extname","dirname"];class Ig{constructor(t){let n;t?Bs(t)?n={path:t}:typeof t=="string"||Wj(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Fj.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ja.length;){const o=ja[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)ja.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Ut.basename(this.path):void 0}set basename(t){_a(t,"basename"),Sa(t,"basename"),this.path=Ut.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ut.dirname(this.path):void 0}set dirname(t){Rp(this.basename,"dirname"),this.path=Ut.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ut.extname(this.path):void 0}set extname(t){if(Sa(t,"extname"),Rp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ut.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Bs(t)&&(t=Uj(t)),_a(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ut.basename(this.path,this.extname):void 0}set stem(t){_a(t,"stem"),Sa(t,"stem"),this.path=Ut.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new Ke(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Sa(e,t){if(e&&e.includes(Ut.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ut.sep+"`")}function _a(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Rp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Wj(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Hj=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},qj={}.hasOwnProperty;class uc extends Hj{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Lj()}copy(){const t=new uc;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(wa(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ea("data",this.frozen),this.namespace[t]=n,this):qj.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ea("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=jo(t),r=this.parser||this.Parser;return Ca("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ca("process",this.parser||this.Parser),Na("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const s=jo(t),u=r.parse(s);r.run(u,s,function(d,p,f){if(d||!p||!f)return c(d);const m=p,w=r.stringify(m,f);Gj(w)?f.value=w:f.result=w,c(d,f)});function c(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Ca("processSync",this.parser||this.Parser),Na("processSync",this.compiler||this.Compiler),this.process(t,i),Op("processSync","process",n),r;function i(o,a){n=!0,Ep(o),r=a}}run(t,n,r){Mp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,s){const u=jo(n);i.run(t,u,c);function c(d,p,f){const m=p||t;d?s(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Op("runSync","run",r),i;function o(a,s){Ep(a),i=s,r=!0}}stringify(t,n){this.freeze();const r=jo(n),i=this.compiler||this.Compiler;return Na("stringify",i),Mp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ea("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?s(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...p]=c;u(d,p)}else a(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function a(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");s(c.plugins),c.settings&&(i.settings=wa(!0,i.settings,c.settings))}function s(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const p=c[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===c){f=p;break}if(f===-1)r.push([c,...d]);else if(d.length>0){let[m,...w]=d;const j=r[f][1];Fs(j)&&Fs(m)&&(m=wa(!0,j,m)),r[f]=[c,m,...w]}}}}const Kj=new uc().freeze();function Ca(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Na(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ea(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Mp(e){if(!Fs(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Op(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function jo(e){return Qj(e)?e:new Ig(e)}function Qj(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Gj(e){return typeof e=="string"||Jj(e)}function Jj(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Yj="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Dp=[],$p={allowDangerousHtml:!0},Xj=/^(https?|ircs?|mailto|xmpp)$/i,Zj=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Rg(e){const t=eS(e),n=tS(e);return nS(t.runSync(t.parse(n),n),e)}function eS(e){const t=e.rehypePlugins||Dp,n=e.remarkPlugins||Dp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...$p}:$p;return Kj().use(R2).use(n).use(Tj,r).use(t)}function tS(e){const t=e.children||"",n=new Ig;return typeof t=="string"&&(n.value=t),n}function nS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,s=t.unwrapDisallowed,u=t.urlTransform||rS;for(const d of Zj)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+Yj+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Lg(e,c),mk(e,{Fragment:l.Fragment,components:i,ignoreInvalidStyle:!0,jsx:l.jsx,jsxs:l.jsxs,passKeys:!0,passNode:!0});function c(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in va)if(Object.hasOwn(va,m)&&Object.hasOwn(d.properties,m)){const w=d.properties[m],j=va[m];(j===null||j.includes(d.tagName))&&(d.properties[m]=u(String(w||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return s&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function rS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Xj.test(e.slice(0,t))?e:""}function iS({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=N.useState(!1),[a,s]=N.useState(r),u=N.useRef(null),c=N.useRef(null);N.useEffect(()=>{if(e){const f=e.split(`
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
      `}),i?l.jsx("div",{className:"monaco-wrapper",children:l.jsx(Or,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):l.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[l.jsxs("span",{className:"edit-hint",children:[l.jsx(Q1,{size:12}),"Click to edit"]}),e?l.jsx("div",{className:"markdown-content",children:l.jsx(Rg,{children:e})}):l.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function oS(e){return/^[a-zA-Z0-9_]+$/.test(e)}function lS({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=Nt(),[s,u]=N.useState(new Set(["basic","model","tools","subagents"])),[c,d]=N.useState(!1),[p,f]=N.useState(!1),[m,w]=N.useState(!1),[j,z]=N.useState(""),[h,g]=N.useState(null);if(!t)return null;function y(L){n(e.id,L)}function T(L){if(L===""){g(null),y({name:L});return}oS(L)?g(null):g("Name can only contain letters, numbers, and underscores"),y({name:L})}function k(L){const A=new Set(s);A.has(L)?A.delete(L):A.add(L),u(A)}const v=e.type==="LlmAgent",P=e;function O(L){v&&y({tools:[...P.tools,L]})}function F(L){v&&y({tools:P.tools.filter((A,V)=>V!==L)})}function _(L,A){if(!v)return;const V=[...P.tools];V[L]=A,y({tools:V})}function b(L){"sub_agents"in e&&y({sub_agents:[...e.sub_agents,L]})}function x(L){"sub_agents"in e&&y({sub_agents:e.sub_agents.filter(A=>A!==L)})}const E=t.agents.filter(L=>L.id!==e.id);async function M(){if(!(!t||!v)){d(!0);try{const L=P.instruction||"",A=L?`Current instruction to improve:

${L}

Please improve and expand this instruction while preserving its core intent.`:void 0,S=t.agents.some(Q=>Q.id===e.id)?void 0:e,W=await Mo(t.id,e.id,A,S);W.success&&W.prompt?y({instruction:W.prompt}):alert("Failed to generate prompt: "+(W.error||"Unknown error"))}catch(L){alert("Error generating prompt: "+L.message)}finally{d(!1)}}}async function I(){if(!(!t||!v||!j.trim())){d(!0);try{const A=`Current instruction:

${P.instruction||""}

---

Requested changes:
${j}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,S=t.agents.some(Q=>Q.id===e.id)?void 0:e,W=await Mo(t.id,e.id,A,S);W.success&&W.prompt?(y({instruction:W.prompt}),w(!1),z("")):alert("Failed to apply changes: "+(W.error||"Unknown error"))}catch(L){alert("Error applying changes: "+L.message)}finally{d(!1)}}}async function D(){if(!t||!v)return;const L=P.instruction;if(!L){alert("Please write an instruction first");return}f(!0);try{const A=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,V=await Mo(t.id,e.id,A);if(V.success&&V.prompt){let S=V.prompt.trim();S=S.replace(/^["']|["']$/g,"").trim();const W=S.split(/[.!?\n]/)[0].trim(),Q=W.length>80?W.slice(0,77)+"...":W;y({description:Q})}else alert("Failed to generate description: "+(V.error||"Unknown error"))}catch(A){alert("Error generating description: "+A.message)}finally{f(!1)}}return l.jsxs("div",{className:"agent-editor",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"editor-header",children:[l.jsx(Hn,{size:24,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx("input",{type:"text",value:e.name,onChange:L=>T(L.target.value),placeholder:"Agent name",style:{borderColor:h?"var(--error)":void 0}}),h&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:h})]}),l.jsx("span",{className:"badge badge-info",children:e.type}),l.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[l.jsx(Bn,{size:14}),"Run"]})]}),l.jsxs("div",{className:"editor-content",children:[l.jsxs(ni,{id:"basic",title:"Basic Info",icon:l.jsx(Hn,{size:16}),expanded:s.has("basic"),onToggle:()=>k("basic"),children:[l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("div",{className:"label-with-action",children:[l.jsx("label",{children:"Description"}),v&&P.instruction&&l.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:D,disabled:p,title:"Generate description from instruction",children:p?l.jsxs(l.Fragment,{children:[l.jsx(Mr,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),l.jsx("input",{type:"text",value:e.description,onChange:L=>y({description:L.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),v&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("div",{className:"label-with-action",children:[l.jsx("label",{children:"Instruction"}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>w(!m),disabled:c||!P.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:M,disabled:c,title:"Uses AI to improve and expand the current instruction",children:c?l.jsxs(l.Fragment,{children:[l.jsx(Mr,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&l.jsxs("div",{className:"request-changes-box",children:[l.jsx("input",{type:"text",value:j,onChange:L=>z(L.target.value),placeholder:"Describe what changes you want...",onKeyDown:L=>{L.key==="Enter"&&j.trim()?I():L.key==="Escape"&&(w(!1),z(""))},autoFocus:!0}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:I,disabled:c||!j.trim(),children:"Apply"})]}),l.jsx(iS,{value:P.instruction,onChange:L=>y({instruction:L}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Output Key"}),l.jsxs("select",{value:P.output_key||"",onChange:L=>y({output_key:L.target.value||void 0}),children:[l.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(L=>l.jsx("option",{value:L.name,children:L.name},L.name))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Include Contents"}),l.jsxs("select",{value:P.include_contents,onChange:L=>y({include_contents:L.target.value}),children:[l.jsx("option",{value:"default",children:"Default"}),l.jsx("option",{value:"none",children:"None"})]})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"disallow-parent",checked:P.disallow_transfer_to_parent,onChange:L=>y({disallow_transfer_to_parent:L.target.checked})}),l.jsx("label",{htmlFor:"disallow-parent",children:"Disallow transfer to parent"})]}),l.jsxs("div",{className:"checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"disallow-peers",checked:P.disallow_transfer_to_peers,onChange:L=>y({disallow_transfer_to_peers:L.target.checked})}),l.jsx("label",{htmlFor:"disallow-peers",children:"Disallow transfer to peers"})]})]})]}),e.type==="LoopAgent"&&l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Iterations"}),l.jsx("input",{type:"number",value:e.max_iterations||"",onChange:L=>y({max_iterations:parseInt(L.target.value)||void 0}),placeholder:"No limit"})]})})]}),v&&l.jsx(ni,{id:"model",title:"Model",icon:l.jsx(Wu,{size:16}),expanded:s.has("model"),onToggle:()=>k("model"),children:l.jsx(sS,{agent:P,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,onUpdate:L=>y({model:L})})}),v&&l.jsx(ni,{id:"tools",title:`Tools (${P.tools.length})`,icon:l.jsx(Kt,{size:16}),expanded:s.has("tools"),onToggle:()=>k("tools"),children:l.jsx(aS,{tools:P.tools,onAdd:O,onRemove:F,onUpdate:_,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:E})}),v&&l.jsx(ni,{id:"callbacks",title:"Callbacks",icon:l.jsx(En,{size:16}),expanded:s.has("callbacks"),onToggle:()=>k("callbacks"),children:l.jsx(uS,{agent:P,onUpdate:y,customCallbacks:t.custom_callbacks||[]})}),"sub_agents"in e&&l.jsx(ni,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:l.jsx(t0,{size:16}),expanded:s.has("subagents"),onToggle:()=>k("subagents"),children:l.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(L=>{const A=t.agents.find(V=>V.id===L);return A?l.jsxs("div",{className:"sub-agent-chip",children:[A.name,l.jsx("button",{onClick:()=>x(L),children:l.jsx(Ge,{size:12})})]},L):null}),l.jsxs("select",{value:"",onChange:L=>{L.target.value&&b(L.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[l.jsx("option",{value:"",children:"Add agent..."}),E.filter(L=>!e.sub_agents.includes(L.id)).map(L=>l.jsx("option",{value:L.id,children:L.name},L.id))]})]})})]})]})}function ni({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-header",onClick:i,children:[r?l.jsx(Lt,{size:16}):l.jsx(At,{size:16}),l.jsxs("h4",{children:[n," ",t]})]}),r&&l.jsx("div",{className:"section-content",children:o})]})}function aS({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:s,agents:u}){const[c,d]=N.useState(!1),[p,f]=N.useState({}),m=Rt.useRef(null),[w,j]=N.useState(null),[z,h]=N.useState(new Set);function g(){if(m.current){const x=m.current.getBoundingClientRect(),E=window.innerHeight,M=350,I=E-x.bottom-16,D=x.top-16;if(I>=200||I>=D){const L=Math.min(M,I);f({top:x.bottom+4,left:x.left,maxHeight:L})}else{const L=Math.min(M,D);f({top:x.top-L-4,left:x.left,maxHeight:L})}}d(!0)}function y(x){t({type:"builtin",name:x}),d(!1)}async function T(x){d(!1);const E=x.tool_filter||[];if(j({server:x,enabledTools:new Set(E),availableTools:E.map(M=>({name:M,description:""})),isLoading:E.length===0,error:void 0}),E.length===0)try{const{testMcpServer:M}=await Wh(async()=>{const{testMcpServer:D}=await Promise.resolve().then(()=>F1);return{testMcpServer:D}},void 0),I=await M({connection_type:x.connection_type,command:x.command,args:x.args,env:x.env,url:x.url,headers:x.headers,timeout:x.timeout||30});I.success?j(D=>D?{...D,availableTools:I.tools,enabledTools:new Set(I.tools.map(L=>L.name)),isLoading:!1}:null):j(D=>D?{...D,isLoading:!1,error:I.error||"Failed to connect to MCP server"}:null)}catch(M){j(I=>I?{...I,isLoading:!1,error:M.message}:null)}}function k(x){if(!w)return;const E=new Set(w.enabledTools);E.has(x)?E.delete(x):E.add(x),j({...w,enabledTools:E})}function v(){if(!w)return;const x=Array.from(w.enabledTools);t({type:"mcp",server:{...w.server,tool_filter:x}}),j(null)}function P(x){const E=new Set(z);E.has(x)?E.delete(x):E.add(x),h(E)}function O(x,E){const M=e[x];if(M.type!=="mcp"||!M.server)return;const I=M.server.tool_filter||[];let D;I.includes(E)?D=I.filter(L=>L!==E):D=[...I,E],r(x,{...M,server:{...M.server,tool_filter:D}})}function F(x){t({type:"function",name:x.name,module_path:x.module_path}),d(!1)}function _(x){const E=u.find(M=>M.id===x);t({type:"agent",agent_id:x,name:E==null?void 0:E.name}),d(!1)}function b(x){return o.find(E=>E.name===x)}return l.jsxs("div",{children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"tool-list",children:e.map((x,E)=>x.type==="mcp"&&x.server?l.jsxs("div",{className:"mcp-tool-item",children:[l.jsxs("div",{className:"mcp-tool-header",onClick:()=>P(E),children:[z.has(E)?l.jsx(Lt,{size:14}):l.jsx(At,{size:14}),l.jsx(Kt,{size:14,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{className:"mcp-tool-info",children:[l.jsx("div",{className:"mcp-tool-name",children:x.server.name}),l.jsx("div",{className:"mcp-tool-count",children:x.server.tool_filter===null||x.server.tool_filter===void 0?"all tools":`${x.server.tool_filter.length} tools enabled`})]}),l.jsx("button",{className:"delete-btn",onClick:M=>{M.stopPropagation(),n(E)},children:l.jsx(Ge,{size:14})})]}),z.has(E)&&l.jsx("div",{className:"mcp-tool-body",children:l.jsx("div",{className:"mcp-tool-list",children:(()=>{const M=b(x.server.name),I=(M==null?void 0:M.tool_filter)||x.server.tool_filter||[],D=new Set(x.server.tool_filter||[]);return I.map(L=>l.jsxs("label",{className:`mcp-tool-chip ${D.has(L)?"enabled":"disabled"}`,onClick:()=>O(E,L),children:[l.jsx("input",{type:"checkbox",checked:D.has(L),onChange:()=>{},style:{display:"none"}}),L]},L))})()})})]},E):l.jsxs("div",{className:"tool-item",children:[l.jsx(Kt,{size:14,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{className:"tool-item-info",children:[l.jsx("div",{className:"tool-item-name",children:x.name||x.agent_id}),l.jsx("div",{className:"tool-item-type",children:x.type})]}),l.jsx("button",{className:"delete-btn",onClick:()=>n(E),children:l.jsx(Ge,{size:14})})]},E))}),l.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[l.jsxs("button",{ref:m,className:"btn btn-secondary btn-sm",onClick:()=>c?d(!1):g(),children:[l.jsx(He,{size:14}),"Add Tool"]}),c&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"dropdown-backdrop",onClick:()=>d(!1)}),l.jsxs("div",{className:"dropdown-content dropdown-fixed",style:p,children:[l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Built-in Tools"}),i.map(x=>l.jsxs("button",{className:"dropdown-item",onClick:()=>y(x.name),children:[l.jsx("div",{className:"dropdown-item-name",children:x.name}),l.jsx("div",{className:"dropdown-item-desc",children:x.description})]},x.name))]}),o.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["Known MCP Servers (",o.length,")"]}),o.map(x=>l.jsxs("button",{className:"dropdown-item",onClick:()=>T(x),children:[l.jsxs("div",{className:"dropdown-item-name",children:[x.name,l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:x.tool_filter===null||x.tool_filter===void 0?"all tools":`${x.tool_filter.length} tools`})]}),l.jsx("div",{className:"dropdown-item-desc",children:x.description})]},`known-${x.name}`))]}),a.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["Project MCP Servers (",a.length,")"]}),a.map(x=>l.jsxs("button",{className:"dropdown-item",onClick:()=>T(x),children:[l.jsxs("div",{className:"dropdown-item-name",children:[x.name,l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:x.tool_filter===null||x.tool_filter===void 0?"all tools":`${x.tool_filter.length} tools`})]}),l.jsx("div",{className:"dropdown-item-desc",children:x.description||"Custom MCP server"})]},`project-${x.id||x.name}`))]}),s.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Custom Tools"}),s.map(x=>l.jsxs("button",{className:"dropdown-item",onClick:()=>F(x),children:[l.jsx("div",{className:"dropdown-item-name",children:x.name}),l.jsx("div",{className:"dropdown-item-desc",children:x.description})]},x.id))]}),u.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Agents as Tools"}),u.map(x=>l.jsxs("button",{className:"dropdown-item",onClick:()=>_(x.id),children:[l.jsx("div",{className:"dropdown-item-name",children:x.name}),l.jsx("div",{className:"dropdown-item-desc",children:x.type})]},x.id))]})]})]})]}),w&&l.jsx("div",{className:"mcp-config-dialog",children:l.jsxs("div",{className:"mcp-config-content",children:[l.jsxs("h3",{children:["Configure ",w.server.name]}),l.jsx("p",{children:w.server.description}),w.isLoading?l.jsxs("div",{className:"mcp-loading",children:[l.jsx("div",{className:"spinner"}),l.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):w.error?l.jsxs("div",{className:"mcp-error",children:[l.jsxs("p",{children:["⚠️ Failed to discover tools: ",w.error]}),l.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mcp-select-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>j({...w,enabledTools:new Set(w.availableTools.map(x=>x.name))}),children:["Select All (",w.availableTools.length,")"]}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>j({...w,enabledTools:new Set}),children:"Select None"})]}),l.jsx("div",{className:"mcp-tools-grid",children:w.availableTools.map(x=>l.jsxs("label",{className:`mcp-tool-toggle ${w.enabledTools.has(x.name)?"enabled":""}`,onClick:()=>k(x.name),title:x.description||x.name,children:[l.jsx("input",{type:"checkbox",checked:w.enabledTools.has(x.name),onChange:()=>{}}),x.name]},x.name))})]}),l.jsxs("div",{className:"dialog-actions",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>j(null),children:"Cancel"}),l.jsxs("button",{className:"btn btn-primary",onClick:v,disabled:w.enabledTools.size===0,children:["Add ",w.enabledTools.size," Tools"]})]})]})})]})}function sS({agent:e,appModels:t,defaultModelId:n,onUpdate:r}){var p,f,m,w,j,z,h,g,y,T;const i=(p=e.model)==null?void 0:p._appModelId,o=e.model!==null&&e.model!==void 0&&!i,s=i||(()=>{if(!e.model)return n;const k=t.find(v=>{var P,O,F;return v.provider===((P=e.model)==null?void 0:P.provider)&&v.model_name===((O=e.model)==null?void 0:O.model_name)&&v.api_base===((F=e.model)==null?void 0:F.api_base)});return k==null?void 0:k.id})()||n||((f=t[0])==null?void 0:f.id);Rt.useEffect(()=>{var k,v,P,O,F;if(i){const _=t.find(b=>b.id===i);_&&(((k=e.model)==null?void 0:k.provider)!==_.provider||((v=e.model)==null?void 0:v.model_name)!==_.model_name||((P=e.model)==null?void 0:P.api_base)!==_.api_base||((O=e.model)==null?void 0:O.temperature)!==_.temperature||((F=e.model)==null?void 0:F.max_output_tokens)!==_.max_output_tokens)&&r({provider:_.provider,model_name:_.model_name,api_base:_.api_base,temperature:_.temperature,max_output_tokens:_.max_output_tokens,top_p:_.top_p,top_k:_.top_k,fallbacks:[],_appModelId:i})}},[i,t,e.model,r]);function u(k){const v=t.find(P=>P.id===k);v&&r({provider:v.provider,model_name:v.model_name,api_base:v.api_base,temperature:v.temperature,max_output_tokens:v.max_output_tokens,top_p:v.top_p,top_k:v.top_k,fallbacks:[],_appModelId:k})}function c(){var k;if(o){const v=n||((k=t[0])==null?void 0:k.id);v&&u(v)}else{const v=e.model;if(v){const{_appModelId:P,...O}=v;r(O)}else r({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function d(k){const{_appModelId:v,...P}=e.model||{};r({...P,...k})}return t.find(k=>k.id===s),t.find(k=>k.id===n),l.jsxs("div",{className:"model-selector",children:[l.jsx("style",{children:`
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
      `}),t.length>0&&l.jsxs("div",{className:"model-choice",children:[l.jsxs("div",{className:`model-option ${o?"":"selected"}`,onClick:()=>!o||c(),children:[l.jsx("div",{className:"model-option-label",children:"Use App Model"}),l.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),l.jsxs("div",{className:`model-option ${o?"selected":""}`,onClick:()=>o||c(),children:[l.jsx("div",{className:"model-option-label",children:"Custom"}),l.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!o&&t.length>0?l.jsx("div",{className:"app-model-select",children:t.map(k=>l.jsx("div",{className:`app-model-item ${s===k.id?"selected":""}`,onClick:()=>u(k.id),children:l.jsxs("div",{className:"app-model-item-info",children:[l.jsxs("div",{className:"app-model-item-name",children:[k.name,k.id===n&&l.jsxs("span",{className:"default-badge",children:[l.jsx(Bh,{size:10,fill:"currentColor"}),"Default"]})]}),l.jsxs("div",{className:"app-model-item-details",children:[k.provider," / ",k.model_name,k.api_base&&` • ${k.api_base}`]})]})},k.id))}):t.length===0?l.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(o||t.length===0)&&l.jsxs("div",{className:"custom-model-form",children:[l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Provider"}),l.jsxs("select",{value:((m=e.model)==null?void 0:m.provider)||"gemini",onChange:k=>d({provider:k.target.value}),children:[l.jsx("option",{value:"gemini",children:"Gemini"}),l.jsx("option",{value:"litellm",children:"LiteLLM"}),l.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"Model Name"}),l.jsx("input",{type:"text",value:((w=e.model)==null?void 0:w.model_name)||"",onChange:k=>d({model_name:k.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),((j=e.model)==null?void 0:j.provider)==="litellm"&&l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"API Base"}),l.jsx("input",{type:"text",value:((z=e.model)==null?void 0:z.api_base)||"",onChange:k=>d({api_base:k.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Temperature"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:((h=e.model)==null?void 0:h.temperature)??"",onChange:k=>d({temperature:k.target.value?parseFloat(k.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Tokens"}),l.jsx("input",{type:"number",value:((g=e.model)==null?void 0:g.max_output_tokens)??"",onChange:k=>d({max_output_tokens:k.target.value?parseInt(k.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top P"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:((y=e.model)==null?void 0:y.top_p)??"",onChange:k=>d({top_p:k.target.value?parseFloat(k.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top K"}),l.jsx("input",{type:"number",min:"1",value:((T=e.model)==null?void 0:T.top_k)??"",onChange:k=>d({top_k:k.target.value?parseInt(k.target.value):void 0}),placeholder:"Default"})]})]})]})]})}function uS({agent:e,onUpdate:t,customCallbacks:n}){const r=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"},{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}];function i(a,s){const u=e[a]||[],c=n.find(d=>d.id===s);c&&t({[a]:[...u,{module_path:c.module_path}]})}function o(a,s){const u=e[a]||[];t({[a]:u.filter((c,d)=>d!==s)})}return l.jsx("div",{className:"callbacks-editor",children:r.map(({key:a,label:s})=>{const u=e[a]||[],c=n;return l.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[l.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:s}),c.length>0&&l.jsxs("select",{value:"",onChange:d=>{d.target.value&&(i(a,d.target.value),d.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[l.jsx("option",{value:"",children:"Add callback..."}),c.filter(d=>{const p=d.module_path;return!u.some(f=>f.module_path===p)}).map(d=>l.jsx("option",{value:d.id,children:d.name},d.id))]})]}),u.length===0?l.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):l.jsx("div",{className:"callback-list",children:u.map((d,p)=>{const f=n.find(m=>m.module_path===d.module_path);return l.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[l.jsx("span",{style:{fontSize:"12px"},children:(f==null?void 0:f.name)||d.module_path}),l.jsx("button",{onClick:()=>o(a,p),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:l.jsx(Ge,{size:12})})]},p)})})]},a)})})}const za=[{type:"LlmAgent",label:"LLM Agent",icon:Hn,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:n0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:G1,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:zs,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function cS(){return`agent_${Date.now().toString(36)}`}function dS(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function pS(e,t){const r={id:cS(),name:`New ${e}`,description:""},i=t?dS(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function fS({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:s}=Nt(),[u,c]=N.useState(!1),[d,p]=N.useState(new Set),[f,m]=N.useState(!1),[w,j]=N.useState(""),[z,h]=N.useState(!1);if(N.useEffect(()=>{if(t){const E=t.agents.filter(M=>"sub_agents"in M&&M.sub_agents.length>0).map(M=>M.id);p(new Set(E))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;async function g(){var E,M,I,D;if(!(!w.trim()||!t)){h(!0);try{const L=await Ah(t.id,w);if(L.success&&L.config){const A=L.config,V=[];if((E=A.tools)!=null&&E.builtin)for(const C of A.tools.builtin)V.push({type:"builtin",name:C});if((M=A.tools)!=null&&M.mcp)for(const C of A.tools.mcp){const ne=s.find(ie=>ie.name===C.server);ne&&V.push({type:"mcp",server:{...ne,tool_filter:C.tools}})}if((I=A.tools)!=null&&I.custom)for(const C of A.tools.custom){const ne=t.custom_tools.find(ie=>ie.name===C);ne&&V.push({type:"function",name:C,module_path:ne.module_path})}if((D=A.tools)!=null&&D.agents)for(const C of A.tools.agents){const ne=t.agents.find(ie=>ie.id===C);ne&&V.push({type:"agent",agent_id:C,name:ne.name})}const S=t.app.models||[],W=S.find(C=>C.id===t.app.default_model_id)||S[0],Q={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:A.name||"new_agent",description:A.description||"",instruction:A.instruction||"",model:W?{provider:W.provider,model_name:W.model_name,api_base:W.api_base,temperature:W.temperature,max_output_tokens:W.max_output_tokens,top_p:W.top_p,top_k:W.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:V,sub_agents:A.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(Q),a(Q.id),e==null||e(Q.id),m(!1),j("")}else alert("Failed to generate agent: "+(L.error||"Unknown error"))}catch(L){alert("Error generating agent: "+L.message)}finally{h(!1)}}}const y=t.agents.find(E=>E.id===o);function T(E){a(E),e==null||e(E)}function k(E){const M=t.app.models||[],I=M.find(L=>L.id===t.app.default_model_id)||M[0],D=pS(E,I);n(D),T(D.id),c(!1)}function v(E,M){M.stopPropagation(),confirm("Delete this agent?")&&(r(E),o===E&&(e==null||e(null)))}function P(E){const M=new Set(d);M.has(E)?M.delete(E):M.add(E),p(M)}function O(E){const M=za.find(I=>I.type===E);return M?M.icon:Hn}function F(E){const M=za.find(I=>I.type===E);return M?M.color:"#888"}function _(E,M=0){return E.map(I=>{const D=O(I.type),L=F(I.type),A="sub_agents"in I&&I.sub_agents.length>0,V=d.has(I.id),S=A?I.sub_agents.map(W=>t.agents.find(Q=>Q.id===W)).filter(W=>W!==void 0):[];return l.jsxs("div",{className:"agent-tree-item",children:[l.jsxs("div",{className:`agent-item ${o===I.id?"selected":""}`,onClick:()=>T(I.id),style:{paddingLeft:12+M*20},children:[A?l.jsx("button",{className:"expand-btn",onClick:W=>{W.stopPropagation(),P(I.id)},children:V?l.jsx(Lt,{size:16}):l.jsx(At,{size:16})}):l.jsx("span",{style:{width:20}}),l.jsx("div",{className:"agent-icon",style:{background:L},children:l.jsx(D,{size:14})}),l.jsx("span",{className:"agent-name",children:I.name}),l.jsx("span",{className:"agent-type",children:I.type}),l.jsx("button",{className:"delete-btn",onClick:W=>v(I.id,W),children:l.jsx(Ge,{size:14})})]}),A&&V&&l.jsx("div",{className:"sub-agents",children:_(S,M+1)})]},I.id)})}const b=new Set(t.agents.flatMap(E=>"sub_agents"in E?E.sub_agents:[])),x=t.agents.filter(E=>!b.has(E.id));return l.jsxs("div",{className:"agents-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"agents-sidebar",children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["Agents (",t.agents.length,")"]}),l.jsxs("div",{className:"header-buttons",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!0),title:"AI-powered agent setup",children:[l.jsx(ma,{size:14}),"Quick"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>c(!0),children:[l.jsx(He,{size:14}),"Add"]})]})]}),l.jsx("div",{className:"agents-list",children:t.agents.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Hn,{size:32}),l.jsx("p",{children:"No agents yet"})]}):_(x)})]}),l.jsx("div",{className:"agent-editor-area",children:y?l.jsx(lS,{agent:y}):l.jsxs("div",{className:"empty-state card",children:[l.jsx(Hn,{size:48}),l.jsxs("p",{children:["Select an agent to edit",l.jsx("br",{}),"or create a new one"]})]})}),u&&l.jsx("div",{className:"type-selector",onClick:()=>c(!1),children:l.jsxs("div",{className:"type-selector-content",onClick:E=>E.stopPropagation(),children:[l.jsx("h2",{children:"Add Agent"}),l.jsx("div",{className:"type-options",children:za.map(({type:E,label:M,icon:I,color:D,description:L})=>l.jsxs("button",{className:"type-option",onClick:()=>k(E),children:[l.jsx("div",{className:"type-option-icon",style:{background:D},children:l.jsx(I,{size:20})}),l.jsxs("div",{className:"type-option-info",children:[l.jsx("h4",{children:M}),l.jsx("p",{children:L})]})]},E))})]})}),f&&l.jsx("div",{className:"type-selector",onClick:()=>!z&&m(!1),children:l.jsxs("div",{className:"quick-setup-content",onClick:E=>E.stopPropagation(),children:[l.jsxs("h2",{children:[l.jsx(ma,{size:20})," Quick Agent Setup"]}),l.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do, and AI will configure everything: name, description, instruction, tools, and sub-agents."}),l.jsxs("div",{className:"quick-setup-form",children:[l.jsx("textarea",{value:w,onChange:E=>j(E.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,disabled:z,autoFocus:!0}),l.jsxs("div",{className:"quick-setup-info",children:[l.jsx("strong",{children:"Available resources:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),l.jsxs("li",{children:[s.length," MCP servers"]}),l.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),l.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),l.jsxs("div",{className:"quick-setup-actions",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),disabled:z,children:"Cancel"}),l.jsx("button",{className:"btn btn-primary",onClick:g,disabled:z||!w.trim(),children:z?l.jsxs(l.Fragment,{children:[l.jsx(Mr,{size:14,className:"spin"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(ma,{size:14}),"Create Agent"]})})]})]})]})})]})}var cc="\x1B[0m",dc="\x1B[1m",Mg=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",mS=e=>{let t=Mg(e),n=`${dc}[MONACOPILOT ERROR] ${t}${cc}`;return console.error(n),{message:t}},hS=(e,t)=>{console.warn(`${dc}[MONACOPILOT WARN] ${e}${t?`
${Mg(t)}`:""}${cc}`)},gS=(e,t,n)=>console.warn(`${dc}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${cc}`),fl={report:mS,warn:hS,warnDeprecated:gS},Fp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(s=>s==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},xS=100,yS=!0,Og="onIdle",vS=!0,bS=120,kS=400,wS=0,pc=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),jS=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),SS=e=>e.getValue(),_S=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Dg=class $g{constructor(){this.cache=new _S($g.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=pc(n,r),a=o,s=r.getLineContent(n.lineNumber);if(n.column===s.length+1&&n.lineNumber<r.getLineCount()){let c=r.getLineContent(n.lineNumber+1);a=`${o}
${c}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let u=r.getValueInRange(t.range);return this.isPartialMatch(u,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:s}=r,{lineNumber:u,column:c}=n;return u<i||u>a?!1:i===a?c>=o-1&&c<=s+1:u===i?c>=o-1:u===a?c<=s+1:!0}};Dg.MAX_CACHE_SIZE=20;var CS=Dg,NS=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},ES=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,s=0,u=0,c=Math.min(r,i);for(let f=1;f<=c;f++){let m=e.substring(0,f),w=t.slice(-f);m===w&&(u=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(s=f);let p=Math.max(a,s);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:u,maxOverlapLength:p}}},zS=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new ES}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:s}=this.textOverlapCalculator.findOverlaps(t,i,o),u=a>0?n.getPositionAt(r-a):e,c=r+s,d=n.getPositionAt(c);return new this.monaco.Range(u.lineNumber,u.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,s=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,s)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},TS=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},PS=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:s=xS}=n,u=a&&a.length>0?3:2,c=s?Math.floor(s/u):void 0,d=(j,z,h)=>{let g=j(e,t);return z?Fp(g,z,h):g},p=(j,z)=>!j||!z?j:j.map(({content:h,...g})=>({...g,content:Fp(h,z)})),f=d(pc,c,{truncateDirection:"keepEnd"}),m=d(jS,c,{truncateDirection:"keepStart"}),w=p(a,c);return{filename:r,language:i,technologies:o,relatedFiles:w,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},LS=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,s,u=new Promise((c,d)=>{a=c,s=d});return r={args:o,promise:u,resolve:a,reject:s},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let c=r;if(c){r=null,n=null;try{let d=await e(...c.args);c.resolve(d)}catch(d){c.reject(d)}}},t),u};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},AS=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,ri=e=>({items:e,enableForwardStability:!0}),Us=new CS,IS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=Og,enableCaching:s=yS,allowFollowUpCompletions:u=vS,onError:c,requestHandler:d}=o;if(s&&!i){let p=Us.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return ri(p)}if(r.isCancellationRequested||!u&&i)return ri([]);try{let p=LS(async w=>{var z,h;(z=o.onCompletionRequested)==null||z.call(o,w);let j;if(d)j=await d(w);else if(o.endpoint)j=await TS({endpoint:o.endpoint,...w});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(j.error)throw new Error(j.error);return(h=o.onCompletionRequestFinished)==null||h.call(o,w,j),j},{onTyping:bS,onIdle:kS,onDemand:wS}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=PS({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let w=new NS(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),j=new zS(e);return s&&Us.add({completion:w,range:j.computeCacheRange(n,w),textBeforeCursor:pc(n,t)}),ri([{insertText:w,range:j.computeInsertionRange(n,w,t)}])}}catch(p){if(AS(p))return ri([]);c?c(p):fl.warn("Cannot provide completion",p)}return ri([])},fc=new WeakMap,Dl=e=>fc.get(e),RS=(e,t)=>{fc.set(e,t)},Bp=e=>{fc.delete(e)},MS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),OS=(e,t)=>{let n=Dl(e);!n||!n.options||(n.options={...n.options,...t})},DS=(e,t,n)=>{let r=Dl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,s)=>{if(i!==t.getModel())return{items:[]};let u=r.options||n;if(!(u.trigger==="onDemand"&&!r.isExplicitlyTriggered||u.triggerIf&&!u.triggerIf({text:SS(t),position:o,triggerType:u.trigger??Og})))return IS({monaco:e,mdl:i,pos:o,token:s,isCompletionAccepted:r.isCompletionAccepted,options:u})},handleItemDidShow:(i,o,a)=>{var s,u;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(u=(s=r.options||n).onCompletionShown)==null||u.call(s,a,o.range))},freeInlineCompletions:()=>{}}):null},$S={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},FS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values($S).some(t=>t(this.monaco,e))}},BS=(e,t,n,r)=>{let i=new FS(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},Fg=(e,t,n)=>{let r=[];RS(t,MS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Dl(t);if(!i)return fl.warn("Completion is not registered properly. State not found."),VS();let o=DS(e,t,n);o&&r.push(o);let a=BS(e,t,i,n);return r.push(a),{deregister:()=>{for(let s of r)s.dispose();Us.clear(),Bp(t)},trigger:()=>US(t),updateOptions:s=>{OS(t,s(i.options||n))}}}catch(i){return n.onError?n.onError(i):fl.report(i),{deregister:()=>{for(let o of r)o.dispose();Bp(t)},trigger:()=>{},updateOptions:()=>{}}}},US=e=>{let t=Dl(e);if(!t){fl.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},VS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function WS(){return`tool_${Date.now().toString(36)}`}function HS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const qS=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function KS({onSelectTool:e}){var $t;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:s,builtinTools:u,mcpServers:c}=Nt(),[d,p]=N.useState(""),[f,m]=N.useState(null),[w,j]=N.useState("tools"),[z,h]=N.useState(null),[g,y]=N.useState(""),[T,k]=N.useState(!1),[v,P]=N.useState(null),[O,F]=N.useState(!1),[_,b]=N.useState(!1),[x,E]=N.useState(null),[M,I]=N.useState(null);if(!t)return null;const D=t.mcp_servers||[],L=t.custom_tools.find($=>$.id===a),A=D.find($=>$.name===z),V=new Set(D.map($=>$.name)),S=c.filter($=>!V.has($.name));function W($){s($),e==null||e($)}N.useEffect(()=>{L&&(p(L.code),I(null))},[a]),N.useEffect(()=>{A&&(y(JSON.stringify(A,null,2)),k(!1))},[z]);function Q(){const $=WS();r({id:$,name:"new_tool",description:"",module_path:"tools.custom",code:qS,state_keys_used:[]}),W($)}function C($,ce){ce.stopPropagation(),confirm("Delete this tool?")&&(o($),a===$&&(e==null||e(null)))}function ne($){L&&($.name!==void 0&&($.name===""||HS($.name)?I(null):I("Name can only contain letters, numbers, and underscores")),i(L.id,$))}function ie($){$!==void 0&&L&&(p($),ne({code:$}))}async function de(){if(L){F(!0);try{const $=await Ih(t.id,L.name,L.description,L.state_keys_used);$.success&&$.code?(p($.code),ne({code:$.code})):(console.error("Failed to generate tool code:",$.error),alert("Failed to generate tool code: "+($.error||"Unknown error")))}catch($){console.error("Error generating tool code:",$),alert("Error generating tool code: "+$.message)}finally{F(!1)}}}const U=N.useRef(null),Z=N.useCallback(($,ce)=>{if(U.current&&typeof U.current=="function")try{U.current()}catch{}try{const Se=Fg(ce,$,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof Se=="function"?U.current=Se:U.current=null}catch{U.current=null}},[]);N.useEffect(()=>()=>{if(U.current&&typeof U.current=="function")try{U.current()}catch{}},[]);function oe(){const $={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...D,$]}),h($.name),P(null)}function he($){const ce={...$};n({mcp_servers:[...D,ce]}),h(ce.name),P(null)}function xe($,ce){ce.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:D.filter(Se=>Se.name!==$)}),z===$&&h(null))}function ue($){$!==void 0&&(y($),k($!==JSON.stringify(A,null,2)))}function Ze(){if(A)try{const $=JSON.parse(g),ce=A.name,Se=D.map(st=>st.name===ce?$:st);n({mcp_servers:Se}),h($.name),k(!1)}catch($){alert("Invalid JSON: "+$.message)}}async function vt(){b(!0),E(null);try{const $=JSON.parse(g),ce=await Mh({connection_type:$.connection_type,command:$.command,args:$.args,env:$.env,url:$.url,headers:$.headers,timeout:$.timeout||30});if(E(ce),ce.success&&ce.tools.length>0){const Se={...$,tool_filter:ce.tools.map(st=>st.name)};y(JSON.stringify(Se,null,2)),k(!0)}}catch($){E({success:!1,tools:[],error:$.message})}finally{b(!1)}}const Be={};return t.custom_tools.forEach($=>{const ce=$.module_path||"tools";Be[ce]||(Be[ce]=[]),Be[ce].push($)}),l.jsxs("div",{className:"tools-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"tools-sidebar",children:[l.jsxs("div",{className:"sidebar-tabs",children:[l.jsxs("button",{className:`sidebar-tab ${w==="tools"?"active":""}`,onClick:()=>j("tools"),children:[l.jsx(Kt,{size:14}),"Tools"]}),l.jsxs("button",{className:`sidebar-tab ${w==="mcp"?"active":""}`,onClick:()=>j("mcp"),children:[l.jsx(rr,{size:14}),"MCP"]})]}),w==="tools"?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Q,children:[l.jsx(He,{size:14}),"New"]})]}),l.jsxs("div",{className:"tools-tree",children:[u.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Fd,{size:14}),"Built-in Tools"]}),u.map($=>l.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===$.name?"selected":""}`,onClick:()=>{m($),W(null),h(null)},children:[l.jsx(Ts,{size:14}),l.jsx("span",{className:"tool-name",children:$.name})]},$.name))]}),t.custom_tools.length===0&&u.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(En,{size:32}),l.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(Be).map(([$,ce])=>l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(K1,{size:14}),$]}),ce.map(Se=>l.jsxs("div",{className:`tool-item ${a===Se.id?"selected":""}`,onClick:()=>{W(Se.id),m(null),h(null)},children:[l.jsx(Kt,{size:14}),l.jsx("span",{className:"tool-name",children:Se.name}),l.jsx("button",{className:"delete-btn",onClick:st=>C(Se.id,st),children:l.jsx(Ge,{size:14})})]},Se.id))]},$))]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["MCP Servers (",D.length,")"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:oe,children:[l.jsx(He,{size:14}),"Custom"]})]}),l.jsxs("div",{className:"tools-tree",children:[D.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx($d,{size:14}),"Configured (",D.length,")"]}),D.map($=>l.jsxs("div",{className:`tool-item ${z===$.name?"selected":""}`,onClick:()=>{h($.name),P(null),W(null),m(null)},children:[l.jsx(rr,{size:14}),l.jsx("span",{className:"tool-name",children:$.name}),l.jsx("span",{className:"tool-type-badge",children:$.connection_type}),l.jsx("button",{className:"delete-btn",onClick:ce=>xe($.name,ce),children:l.jsx(Ge,{size:14})})]},$.name))]}),S.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Fd,{size:14}),"Available Templates (",S.length,")"]}),S.map($=>l.jsxs("div",{className:`tool-item known-server ${(v==null?void 0:v.name)===$.name?"selected":""}`,onClick:()=>{P($),h(null),W(null),m(null)},children:[l.jsx(rr,{size:14}),l.jsx("span",{className:"tool-name",children:$.name}),l.jsx("span",{className:"tool-type-badge",children:$.connection_type})]},$.name))]}),D.length===0&&S.length===0&&l.jsxs("div",{className:"empty-state",children:[l.jsx(rr,{size:32}),l.jsx("p",{children:"No MCP servers available"})]})]})]})]}),l.jsx("div",{className:"tool-editor",children:f?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(Ts,{size:20,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),l.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),l.jsxs("div",{className:"builtin-tool-info",children:[l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{children:f.description||"No description available."})]}),l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Usage"}),l.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),l.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Note"}),l.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):L?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(Kt,{size:20,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[l.jsx("input",{type:"text",value:L.name,onChange:$=>ne({name:$.target.value}),placeholder:"Tool name",style:{borderColor:M?"var(--error)":void 0}}),M&&l.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:M})]})]}),l.jsxs("div",{className:"editor-meta",children:[l.jsxs("div",{className:"meta-field grow",children:[l.jsx("label",{children:"Description"}),l.jsx("input",{type:"text",value:L.description,onChange:$=>ne({description:$.target.value}),placeholder:"What does this tool do?"})]}),l.jsxs("div",{className:"meta-field",children:[l.jsx("label",{children:"Module Path"}),l.jsx("input",{type:"text",value:L.module_path,onChange:$=>ne({module_path:$.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),l.jsxs("div",{className:"code-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:de,disabled:O||!L.name||!L.description,title:!L.name||!L.description?"Add a name and description first":"Generate code using AI",children:O?l.jsxs(l.Fragment,{children:[l.jsx(Mr,{size:14,className:"spinning"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Qu,{size:14}),"Write Tool"]})}),l.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),l.jsx("div",{className:"code-editor",children:l.jsx(Or,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:ie,onMount:Z,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),l.jsxs("div",{className:"state-keys-panel",children:[l.jsxs("h4",{children:[l.jsx(qu,{size:14})," State Keys Used"]}),l.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map($=>{const ce=L.state_keys_used.includes($.name);return l.jsxs("label",{className:`state-key-chip ${ce?"selected":""}`,title:$.description,children:[l.jsx("input",{type:"checkbox",checked:ce,onChange:Se=>{const st=Se.target.checked?[...L.state_keys_used,$.name]:L.state_keys_used.filter(er=>er!==$.name);ne({state_keys_used:st})}}),$.name,l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",$.type,")"]})]},$.name)})})]})]}):v?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(rr,{size:20,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:v.name}),l.jsx("span",{className:"badge badge-info",children:v.connection_type}),l.jsx("span",{className:"badge badge-muted",children:"Template"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>he(v),children:[l.jsx(He,{size:14}),"Add to Project"]})]}),l.jsxs("div",{className:"known-server-preview",children:[l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{children:v.description})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Command"}),l.jsxs("code",{children:[v.command," ",($t=v.args)==null?void 0:$t.join(" ")]})]}),v.env&&Object.keys(v.env).length>0&&l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Required Environment Variables"}),l.jsx("div",{className:"env-vars",children:Object.entries(v.env).map(([$,ce])=>l.jsxs("div",{className:"env-var",children:[l.jsx("code",{children:$}),ce?l.jsx("span",{className:"env-value",children:ce}):l.jsx("span",{className:"env-required",children:"Required"})]},$))})]}),v.tool_filter&&v.tool_filter.length>0&&l.jsxs("div",{className:"preview-section",children:[l.jsxs("h4",{children:["Available Tools (",v.tool_filter.length,")"]}),l.jsx("div",{className:"tool-badges",children:v.tool_filter.map($=>l.jsx("span",{className:"tool-badge",children:$},$))})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Configuration Preview"}),l.jsx("pre",{className:"config-preview",children:JSON.stringify(v,null,2)})]})]})]}):A?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(rr,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:A.name}),l.jsx("span",{className:"badge badge-info",children:A.connection_type}),T&&l.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:vt,disabled:_,title:"Test connection and discover available tools",children:[_?l.jsx(Mr,{size:14,className:"spin"}):l.jsx($d,{size:14}),_?"Testing...":"Test Connection"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Ze,disabled:!T,children:[l.jsx(Ku,{size:14}),"Save"]})]}),x&&l.jsx("div",{className:`mcp-test-result ${x.success?"success":"error"}`,children:x.success?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",x.tools.length," tools"]}),x.tools.length>0&&l.jsxs("div",{className:"test-result-tools",children:[l.jsx("strong",{children:"Available tools:"}),l.jsx("ul",{children:x.tools.map($=>l.jsxs("li",{children:[l.jsx("code",{children:$.name}),$.description&&l.jsxs("span",{children:[" — ",$.description]})]},$.name))}),l.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),l.jsx("div",{className:"test-result-error",children:x.error})]})}),l.jsx("div",{className:"mcp-info",children:l.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),l.jsx("div",{className:"code-editor",children:l.jsx(Or,{height:"100%",language:"json",theme:"vs-dark",value:g,onChange:ue,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),l.jsxs("div",{className:"mcp-help",children:[l.jsx("h4",{children:"Schema Reference"}),l.jsxs("div",{className:"schema-fields",children:[l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"name"}),l.jsx("span",{children:"Unique identifier for this server"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"description"}),l.jsx("span",{children:"Human-readable description"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"connection_type"}),l.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"command"}),l.jsx("span",{children:"Command to run (for stdio)"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"args"}),l.jsx("span",{children:"Array of command arguments"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"env"}),l.jsx("span",{children:"Environment variables object"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"url"}),l.jsx("span",{children:"Server URL (for sse/http)"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"tool_filter"}),l.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(En,{size:48}),l.jsxs("p",{children:["Select a tool to view",l.jsx("br",{}),"or create a new custom tool"]})]})})]})}function QS(){return`callback_${Date.now().toString(36)}`}function Up(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Bg(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return Bg("before_agent")}}function GS({onSelectCallback:e}){var O,F;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=Nt(),[a,s]=N.useState(""),[u,c]=N.useState(null),[d,p]=N.useState(null),[f,m]=N.useState(!1),w=N.useRef(null);if(!t)return null;const j=t.custom_callbacks||[],z=j.find(_=>_.id===u);function h(_){c(_),e==null||e(_)}N.useEffect(()=>{z?(s(z.code),p(null)):s("")},[u,z]);function g(){const _=QS(),b={id:_,name:"new_callback",description:"",module_path:"callbacks.custom",code:Bg("before_agent"),state_keys_used:[]};r(b),h(_)}function y(_,b){b.stopPropagation(),confirm("Delete this callback?")&&(o(_),u===_&&(e==null||e(null),c(null),s("")))}function T(){if(!u)return;const _=j.find(E=>E.id===u);if(!_)return;const b=_.name.trim();if(!b){alert("Please enter a name");return}if(!Up(b)){p("Name must contain only alphanumeric characters and underscores");return}if(j.find(E=>E.name===b&&E.id!==_.id)){p("A callback with this name already exists");return}i(_.id,{code:a,name:b,description:_.description,module_path:_.module_path,state_keys_used:_.state_keys_used}),p(null)}function k(_,b){w.current=b;try{Fg(b,{endpoint:"/api/code-completion",language:"python"})}catch(x){console.warn("Failed to register Monacopilot completion:",x)}}async function v(){if(z){m(!0);try{let _="before_agent";const b=z.name.toLowerCase(),x=z.description.toLowerCase();b.includes("after_agent")||x.includes("after agent")?_="after_agent":b.includes("before_model")||x.includes("before model")?_="before_model":b.includes("after_model")||x.includes("after model")?_="after_model":b.includes("before_tool")||x.includes("before tool")?_="before_tool":b.includes("after_tool")||x.includes("after tool")?_="after_tool":(b.includes("before_agent")||x.includes("before agent"))&&(_="before_agent");const E=await Rh(t.id,z.name,z.description,_,z.state_keys_used);E.success&&E.code?(s(E.code),i(z.id,{code:E.code})):(console.error("Failed to generate callback code:",E.error),alert("Failed to generate callback code: "+(E.error||"Unknown error")))}catch(_){console.error("Error generating callback code:",_),alert("Error generating callback code: "+_.message)}finally{m(!1)}}}const P=((F=(O=t.app)==null?void 0:O.state_keys)==null?void 0:F.map(_=>_.name))||[];return l.jsxs("div",{className:"tools-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"tools-sidebar",children:[l.jsxs("div",{className:"tools-sidebar-header",children:[l.jsx("h3",{children:"Callbacks"}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,title:"Add Callback",children:l.jsx(He,{size:16})})]}),l.jsx("div",{className:"tools-list",children:j.length===0?l.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):j.map(_=>l.jsxs("div",{className:`tool-item ${u===_.id?"selected":""}`,onClick:()=>h(_.id),children:[l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{className:"tool-item-name",children:_.name}),_.description&&l.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:_.description})]}),l.jsx("div",{className:"tool-item-actions",children:l.jsx("button",{className:"btn btn-icon btn-sm",onClick:b=>y(_.id,b),title:"Delete",children:l.jsx(Ge,{size:14})})})]},_.id))})]}),l.jsx("div",{className:"tools-editor",children:z?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"tools-editor-header",children:[l.jsx("h3",{children:"Edit Callback"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:T,children:[l.jsx(Ku,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),l.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Name"}),l.jsx("input",{type:"text",value:z.name,onChange:_=>{const b=_.target.value;i(z.id,{name:b}),d&&Up(b)&&p(null)},className:d?"error":""}),d&&l.jsx("div",{className:"error-message",children:d})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{value:z.description,onChange:_=>i(z.id,{description:_.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Module Path"}),l.jsx("input",{type:"text",value:z.module_path,onChange:_=>i(z.id,{module_path:_.target.value}),placeholder:"callbacks.custom"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"State Keys Used"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:P.map(_=>{const b=z.state_keys_used.includes(_);return l.jsxs("button",{type:"button",className:`btn btn-sm ${b?"btn-primary":"btn-secondary"}`,onClick:()=>{const x=b?z.state_keys_used.filter(E=>E!==_):[...z.state_keys_used,_];i(z.id,{state_keys_used:x})},children:[l.jsx(qu,{size:12,style:{marginRight:"4px"}}),_]},_)})}),P.length===0&&l.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[l.jsx("label",{children:"Code"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:v,disabled:f||!z.name,title:z.name?"Generate code using AI":"Add a name first",children:f?l.jsxs(l.Fragment,{children:[l.jsx(Mr,{size:14,className:"spinning"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Qu,{size:14}),"Generate"]})})]}),l.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),l.jsx("div",{className:"code-editor-container",children:l.jsx(Or,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:_=>s(_||""),onMount:k,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):l.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const Vp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},JS={agent_start:zs,agent_end:zs,tool_call:Kt,tool_result:Kt,model_call:Wu,model_response:Fh,state_change:yi,transfer:Vh,callback_start:En,callback_end:En};function YS(e){var t,n,r,i,o,a,s,u,c,d,p,f,m,w,j,z,h,g,y,T,k;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const P=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([V,S])=>{const W=S!=null?JSON.stringify(S):"null";return`${V}=${W.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${P.slice(0,60)}${P.length>60?"...":""})`;case"tool_result":const O=(i=e.data)==null?void 0:i.result;let F="";if((a=(o=O==null?void 0:O.content)==null?void 0:o[0])!=null&&a.text)F=String(O.content[0].text).slice(0,60);else if(typeof O=="string")F=O.slice(0,60);else if(O!=null){const V=JSON.stringify(O);F=V?V.slice(0,60):""}else F="";return`RESULT ${((s=e.data)==null?void 0:s.tool_name)||"unknown"} → ${F}${F.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((c=(u=e.data)==null?void 0:u.contents)==null?void 0:c.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const _=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],b=_.find(V=>(V==null?void 0:V.type)==="function_call");if(b)return`LLM_RSP → ${b.name||"unknown"}()`;const x=_.find(V=>(V==null?void 0:V.type)==="text");if(x!=null&&x.text){const V=String(x.text);return`LLM_RSP "${V.slice(0,50)}${V.length>50?"...":""}"`}return`LLM_RSP (${((w=e.data)==null?void 0:w.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((j=e.data)==null?void 0:j.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((z=e.data)==null?void 0:z.target)||"unknown"}`;case"callback_start":const M=((h=e.data)==null?void 0:h.callback_name)||"unknown",I=((g=e.data)==null?void 0:g.callback_type)||"";return`CALLBACK START ${I?`[${I}]`:""} ${M}`;case"callback_end":const D=((y=e.data)==null?void 0:y.callback_name)||"unknown",L=((T=e.data)==null?void 0:T.callback_type)||"",A=(k=e.data)!=null&&k.error?" [ERROR]":"";return`CALLBACK END ${L?`[${L}]`:""} ${D}${A}`;default:return e.event_type.toUpperCase()}}function XS(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function ZS({event:e}){var o,a,s,u,c,d,p,f,m,w,j,z,h,g,y,T;const[t,n]=N.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=k=>{const v=new Set(t);v.has(k)?v.delete(k):v.add(k),n(v)},i=(k,v=0,P=!1)=>{const O="  ".repeat(v),F="  ".repeat(v+1);if(k===null)return l.jsx("span",{className:"json-null",children:"null"});if(k===void 0)return l.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof k=="boolean")return l.jsx("span",{className:"json-boolean",children:k.toString()});if(typeof k=="number")return l.jsx("span",{className:"json-number",children:k});if(typeof k=="string"){const _=k.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return _.length>300&&v>0?l.jsxs("span",{className:"json-string",children:['"',_.slice(0,300),'..." ',l.jsxs("span",{className:"json-truncated",children:["(",k.length," chars)"]})]}):l.jsxs("span",{className:"json-string",children:['"',_,'"']})}if(Array.isArray(k))return k.length===0?l.jsx("span",{className:"json-bracket",children:"[]"}):k.every(b=>b===null||typeof b!="object")&&k.length<=3?l.jsxs("span",{className:"json-inline",children:[l.jsx("span",{className:"json-bracket",children:"["}),k.map((b,x)=>l.jsxs("span",{children:[i(b,v+1,!0),x<k.length-1&&l.jsx("span",{className:"json-comma",children:", "})]},x)),l.jsx("span",{className:"json-bracket",children:"]"})]}):l.jsxs("span",{className:"json-block",children:[l.jsx("span",{className:"json-bracket",children:"["}),k.map((b,x)=>l.jsxs("span",{children:[`
`+F,i(b,v+1),x<k.length-1&&l.jsx("span",{className:"json-comma",children:","})]},x)),`
`+O,l.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof k=="object"){const _=Object.entries(k);return _.length===0?l.jsx("span",{className:"json-bracket",children:"{}"}):_.length<=2&&_.every(([,x])=>x===null||typeof x!="object")&&P?l.jsxs("span",{className:"json-inline",children:[l.jsx("span",{className:"json-bracket",children:"{"}),_.map(([x,E],M)=>l.jsxs("span",{children:[l.jsxs("span",{className:"json-key",children:['"',x,'"']}),l.jsx("span",{className:"json-colon",children:": "}),i(E,v+1,!0),M<_.length-1&&l.jsx("span",{className:"json-comma",children:", "})]},x)),l.jsx("span",{className:"json-bracket",children:"}"})]}):l.jsxs("span",{className:"json-block",children:[l.jsx("span",{className:"json-bracket",children:"{"}),_.map(([x,E],M)=>l.jsxs("span",{children:[`
`+F,l.jsxs("span",{className:"json-key",children:['"',x,'"']}),l.jsx("span",{className:"json-colon",children:": "}),i(E,v+1),M<_.length-1&&l.jsx("span",{className:"json-comma",children:","})]},x)),`
`+O,l.jsx("span",{className:"json-bracket",children:"}"})]})}return String(k)};return l.jsxs("div",{className:"event-detail",children:[l.jsxs("div",{className:"detail-header",children:[l.jsx("span",{className:"detail-type",children:e.event_type}),l.jsx("span",{className:"detail-agent",children:e.agent_name}),l.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsx("span",{children:"Event Data"})]}),t.has("data")&&l.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsx("span",{children:"Instruction"}),l.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&l.jsx("div",{className:"section-content",children:l.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&l.jsx("div",{className:"section-content",children:e.data.contents.map((k,v)=>{var P;return l.jsxs("div",{className:"message-item",children:[l.jsx("span",{className:`message-role ${k.role}`,children:k.role}),l.jsx("div",{className:"message-parts",children:(P=k.parts)==null?void 0:P.map((O,F)=>l.jsxs("div",{className:"message-part",children:[O.text&&l.jsx("pre",{children:O.text}),O.function_call&&l.jsxs("div",{className:"function-call",children:[l.jsx("strong",{children:O.function_call.name}),l.jsx("pre",{children:JSON.stringify(O.function_call.args,null,2)})]}),O.function_response&&l.jsxs("div",{className:"function-response",children:[l.jsx("strong",{children:O.function_response.name}),l.jsx("pre",{children:JSON.stringify(O.function_response.response,null,2)})]})]},F))})]},v)})})]}),e.event_type==="tool_result"&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsx("span",{children:"Tool Result"})]}),t.has("result")&&l.jsx("div",{className:"section-content",children:l.jsx("pre",{className:"result-content",children:((d=(c=(u=(s=e.data)==null?void 0:s.result)==null?void 0:u.content)==null?void 0:c[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.tokens&&l.jsxs("span",{className:"token-badge",children:[e.data.tokens.input,"↑ ",e.data.tokens.output,"↓"]})]}),t.has("response")&&l.jsx("div",{className:"section-content",children:e.data.parts.map((k,v)=>l.jsxs("div",{className:"response-part",children:[k.type==="text"&&k.text&&l.jsx("pre",{className:"response-text",children:k.text}),k.type==="function_call"&&l.jsxs("div",{className:"function-call",children:[l.jsxs("strong",{children:["→ ",k.name,"()"]}),k.args&&Object.keys(k.args).length>0&&l.jsx("pre",{children:JSON.stringify(k.args,null,2)})]}),k.thought&&l.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},v))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&l.jsxs("div",{className:"section-content",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Name:"})," ",((w=e.data)==null?void 0:w.callback_name)||"unknown"]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Type:"})," ",((j=e.data)==null?void 0:j.callback_type)||"unknown"]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Module Path:"})," ",((z=e.data)==null?void 0:z.module_path)||"unknown"]}),((h=e.data)==null?void 0:h.error)&&l.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[l.jsxs("div",{children:[l.jsx("strong",{children:"Error:"})," ",e.data.error]}),((g=e.data)==null?void 0:g.error_type)&&l.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[l.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((y=e.data)==null?void 0:y.stack_trace)&&l.jsxs("div",{style:{marginTop:"8px"},children:[l.jsx("strong",{children:"Stack Trace:"}),l.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((T=e.data)==null?void 0:T.state_delta)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?l.jsx(Lt,{size:12}):l.jsx(At,{size:12}),l.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&l.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([k,v])=>l.jsxs("div",{className:"state-delta-item",children:[l.jsx("div",{className:"state-delta-key",children:k}),l.jsx("pre",{className:"state-delta-value",children:typeof v=="string"?v:JSON.stringify(v,null,2)})]},k))})]})]})}function e_({content:e,title:t,onClose:n}){return l.jsxs("div",{className:"modal-overlay",onClick:n,children:[l.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[l.jsxs("div",{className:"modal-header",children:[l.jsx("h3",{children:t}),l.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),l.jsx("div",{className:"modal-body markdown-content",children:l.jsx(Rg,{children:e})})]}),l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?l.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([s,{value:u,timestamp:c,defined:d,description:p,type:f}])=>l.jsxs("div",{className:`state-entry ${u===void 0?"unset":""}`,children:[l.jsxs("div",{className:"state-key",children:[s,f&&l.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),l.jsx("div",{className:"state-value",onClick:()=>{if(u!==void 0){const m=typeof u=="string"?u:JSON.stringify(u,null,2);i({content:m,title:s})}},style:{cursor:u!==void 0?"pointer":"default"},title:u!==void 0?"Click to view in markdown viewer":void 0,children:u===void 0?"(not set)":typeof u=="string"?u:JSON.stringify(u,null,2)}),p&&l.jsx("div",{className:"state-desc",children:p}),c&&l.jsx("div",{className:"state-time",children:new Date(c*1e3).toLocaleTimeString()})]},s))]})]})}let Vs=null,Ws=null;(async()=>{try{Vs=(await Wh(()=>import("./jq-RPt8mnQY.js").then(t=>t.j),[])).default}catch(e){console.warn("jq-web failed to load:",e.message),Ws=e.message}})();function Ta(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Wp(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(Vs)try{const i=Vs.json(r,n);return i==null?"[No match]":typeof i=="string"?i:JSON.stringify(i,null,2)}catch(i){if(!n.startsWith("."))try{const a=new Function("value","data",`return ${n}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch{}return`[jq error: ${i.message||i}]`}else{if(Ws){if(n.startsWith(".")&&!n.includes("|"))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const s=a.match(/^(\w+)?\[(\d+)\]$/);s?(s[1]&&(o=o[s[1]]),o=o[parseInt(s[2])]):o=o[a]}return typeof o=="string"?o:JSON.stringify(o,null,2)}catch{}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[jq not loaded: ${Ws}. JS fallback failed: ${i.message}]`}}return"[jq loading...]"}}function n_({project:e,selectedEventIndex:t}){var de;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:a}=Nt(),[s,u]=N.useState(!1),[c,d]=N.useState(null),[p,f]=N.useState({}),[m,w]=N.useState(new Set),[j,z]=N.useState(""),[h,g]=N.useState(""),[y,T]=N.useState({}),[k,v]=N.useState(""),[P,O]=N.useState([]),[F,_]=N.useState(null),[b,x]=N.useState(null),[E,M]=N.useState(!1);N.useEffect(()=>{Vu().then(O).catch(console.error)},[]);const I=N.useMemo(()=>{const U=e.mcp_servers||[],Z=new Set(U.map(he=>he.name)),oe=P.filter(he=>!Z.has(he.name));return[...U,...oe]},[e.mcp_servers,P]),D=N.useCallback(async U=>{if(!(p[U]||m.has(U))){w(Z=>new Set([...Z,U]));try{const Z=await ze(`/projects/${e.id}/mcp-servers/${encodeURIComponent(U)}/test-connection`,{method:"POST"});Z.success&&f(oe=>({...oe,[U]:Z.tools}))}catch(Z){console.error("Failed to load tools:",Z)}finally{w(Z=>{const oe=new Set(Z);return oe.delete(U),oe})}}},[e.id,p,m]);N.useEffect(()=>{var he;if(c)return;if(!j||!h){T({});return}const Z=(p[j]||[]).find(xe=>xe.name===h);if(!((he=Z==null?void 0:Z.parameters)!=null&&he.properties)){T({});return}const oe={};Object.entries(Z.parameters.properties).forEach(([xe,ue])=>{ue.type==="string"?oe[xe]=ue.default||"":ue.type==="number"||ue.type==="integer"?oe[xe]=ue.default||0:ue.type==="boolean"?oe[xe]=ue.default||!1:oe[xe]=ue.default||null}),T(oe)},[j,h,p,c]);const L=()=>{d(null),z(""),g(""),T({}),v(""),_(null),x(null),u(!0)},A=U=>{if(d(U.id),z(U.serverName),g(U.toolName),T({...U.args}),v(U.transform||""),U.result){const{text:Z}=Ta(U.result);_(Z),x(null)}else _(null),x(null);p[U.serverName]||D(U.serverName),u(!0)},V=async()=>{if(!(!j||!h)){M(!0),x(null);try{const U=await ze(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:j,tool_name:h,arguments:y})}),{text:Z,isError:oe}=Ta(U);oe?(x(Z),_(null)):(_(Z),x(null))}catch(U){x(String(U)),_(null)}finally{M(!1)}}},S=N.useMemo(()=>F?!k||!k.trim()?F:Wp(F,k):null,[F,k]),W=()=>{if(!(!j||!h)){if(c){r(c,{serverName:j,toolName:h,args:{...y},transform:k||void 0});const U=n.find(Z=>Z.id===c);U&&C({...U,serverName:j,toolName:h,args:y,transform:k||void 0,history:U.history||[]})}else{const U={id:`watch-${Date.now()}`,serverName:j,toolName:h,args:{...y},transform:k||void 0,history:[]};i(U),C(U)}u(!1)}},Q=U=>{o(U)},C=N.useCallback(async(U,Z)=>{r(U.id,{isLoading:!0,error:void 0});const oe=Z??a.length-1,he=Date.now();try{const xe=await ze(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:U.serverName,tool_name:U.toolName,arguments:U.args})}),ue={eventIndex:oe,timestamp:he,result:xe},Ze=[...U.history||[],ue];r(U.id,{result:xe,isLoading:!1,lastRun:he,history:Ze})}catch(xe){const ue={eventIndex:oe,timestamp:he,error:String(xe)},Ze=[...U.history||[],ue];r(U.id,{error:String(xe),isLoading:!1,lastRun:he,history:Ze})}},[e.id,r,a.length]),ne=()=>{n.forEach(U=>C(U))},ie=N.useMemo(()=>!j||!h?null:(p[j]||[]).find(Z=>Z.name===h),[j,h,p]);return l.jsxs("div",{className:"tool-watch-panel",children:[l.jsxs("div",{className:"watch-header",children:[l.jsx(Ui,{size:14}),l.jsx("span",{children:"Tool Watch"}),l.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),l.jsxs("div",{className:"watch-actions",children:[l.jsx("button",{className:"watch-btn",onClick:ne,title:"Refresh all",children:l.jsx(yr,{size:12})}),l.jsx("button",{className:"watch-btn",onClick:L,title:"Add watch",children:l.jsx(He,{size:12})})]})]}),n.length===0?l.jsxs("div",{className:"watch-empty",children:[l.jsx(Ui,{size:20,style:{opacity:.3}}),l.jsx("span",{children:"No watch expressions"}),l.jsxs("button",{className:"add-watch-btn",onClick:L,children:[l.jsx(He,{size:12})," Add Tool Watch"]})]}):l.jsx("div",{className:"watch-list",children:n.map(U=>{let Z=U.result,oe=U.error;if(t!==null&&U.history&&U.history.length>0){const vt=U.history.filter(Be=>Be.eventIndex<=t);if(vt.length>0){const Be=vt[vt.length-1];Z=Be.result,oe=Be.error}else Z=void 0,oe=void 0}const{text:he,isError:xe}=Z?Ta(Z):{text:"",isError:!1},ue=Z?Wp(he,U.transform):"",Ze=oe||xe;return l.jsxs("div",{className:`watch-item ${Ze?"error":""}`,children:[l.jsxs("div",{className:"watch-item-header",children:[l.jsxs("span",{className:"watch-expr",children:[l.jsx("span",{className:"watch-server",children:U.serverName}),l.jsx("span",{className:"watch-tool",children:U.toolName}),Object.keys(U.args).length>0&&l.jsxs("span",{className:"watch-args",children:["(",Object.entries(U.args).map(([vt,Be])=>`${vt}=${JSON.stringify(Be)}`).join(", "),")"]}),t!==null&&l.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),l.jsxs("div",{className:"watch-item-actions",children:[l.jsx("button",{onClick:()=>A(U),title:"Edit watch",children:l.jsx(Kt,{size:10})}),l.jsx("button",{onClick:()=>C(U),title:"Refresh",children:U.isLoading?l.jsx(yr,{size:10,className:"spin"}):l.jsx(yr,{size:10})}),l.jsx("button",{onClick:()=>Q(U.id),title:"Remove",children:l.jsx(Ge,{size:10})})]})]}),l.jsx("div",{className:"watch-result",children:U.isLoading?l.jsx("span",{className:"loading",children:"Loading..."}):oe?l.jsx("span",{className:"error",children:oe}):Z?l.jsx("pre",{className:xe?"error-text":"",children:ue}):l.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},U.id)})}),s&&l.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:l.jsxs("div",{className:"watch-dialog",onClick:U=>U.stopPropagation(),children:[l.jsxs("div",{className:"dialog-header",children:[l.jsx("span",{children:c?"Edit Watch":"Add Tool Watch"}),l.jsx("button",{onClick:()=>u(!1),children:l.jsx(r0,{size:14})})]}),l.jsxs("div",{className:"dialog-body",children:[l.jsxs("div",{className:"form-row",children:[l.jsx("label",{children:"MCP Server"}),l.jsxs("select",{value:j,onChange:U=>{z(U.target.value),c||g(""),U.target.value&&D(U.target.value)},children:[l.jsx("option",{value:"",children:"Select server..."}),I.map(U=>l.jsx("option",{value:U.name,children:U.name},U.name))]})]}),l.jsxs("div",{className:"form-row",children:[l.jsx("label",{children:"Tool"}),l.jsxs("select",{value:h,onChange:U=>g(U.target.value),disabled:!j||m.has(j),children:[l.jsx("option",{value:"",children:m.has(j)?"Loading tools...":"Select tool..."}),(p[j]||[]).map(U=>l.jsx("option",{value:U.name,children:U.name},U.name))]})]}),(ie==null?void 0:ie.description)&&l.jsx("div",{className:"tool-desc",children:ie.description}),((de=ie==null?void 0:ie.parameters)==null?void 0:de.properties)&&Object.keys(ie.parameters.properties).length>0&&l.jsxs("div",{className:"tool-args",children:[l.jsx("label",{children:"Arguments"}),Object.entries(ie.parameters.properties).map(([U,Z])=>{var oe,he;return l.jsxs("div",{className:"arg-row",children:[l.jsxs("span",{className:"arg-name",children:[U,((oe=ie.parameters.required)==null?void 0:oe.includes(U))&&l.jsx("span",{className:"required",children:"*"})]}),l.jsx("input",{type:Z.type==="number"||Z.type==="integer"?"number":"text",value:typeof y[U]=="object"?JSON.stringify(y[U]):y[U]??"",onChange:xe=>T(ue=>({...ue,[U]:xe.target.value})),placeholder:((he=Z.description)==null?void 0:he.slice(0,40))||U})]},U)})]}),j&&h&&l.jsxs("div",{className:"test-section",children:[l.jsxs("div",{className:"test-header",children:[l.jsx("label",{children:"Test & Preview"}),l.jsxs("button",{className:"test-btn",onClick:V,disabled:E,children:[E?l.jsx(yr,{size:12,className:"spin"}):l.jsx(Bn,{size:12}),E?"Running...":"Test Run"]})]}),b&&l.jsxs("div",{className:"test-result error",children:[l.jsx("span",{className:"test-label",children:"Error:"}),l.jsx("pre",{children:b})]}),F&&l.jsxs("div",{className:"test-result",children:[l.jsx("span",{className:"test-label",children:"Raw Result:"}),l.jsx("pre",{children:F})]})]}),l.jsxs("div",{className:"form-row transform-row",children:[l.jsx("label",{children:"Transform (optional)"}),l.jsx("input",{type:"text",value:k,onChange:U=>v(U.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),l.jsxs("div",{className:"transform-hints",children:[l.jsx("span",{className:"hint-title",children:"jq:"}),l.jsx("code",{onClick:()=>v(".items[0].name"),children:".items[0].name"}),l.jsx("code",{onClick:()=>v(".content[].text"),children:".content[].text"}),l.jsx("code",{onClick:()=>v(".result.content[0].text"),children:".result.content[0].text"}),l.jsx("code",{onClick:()=>v('.[] | select(.status == "active")'),children:".[] | select()"}),l.jsx("span",{className:"hint-title",children:"JS:"}),l.jsx("code",{onClick:()=>v("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),l.jsx("code",{onClick:()=>v("js:data.length"),children:"js:data.length"})]})]}),F&&k&&l.jsxs("div",{className:"transform-preview",children:[l.jsx("span",{className:"test-label",children:"Transform Preview:"}),l.jsx("pre",{className:S!=null&&S.startsWith("[Transform error")?"error":"",children:S})]})]}),l.jsxs("div",{className:"dialog-footer",children:[l.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),l.jsx("button",{className:"add-btn",onClick:W,disabled:!j||!h,children:c?"Save Changes":"Add Watch"})]})]})})]})}function r_(){var er;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:o,clearWatchHistories:a,runAgentId:s,setRunAgentId:u,watches:c,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=Nt(),[m,w]=N.useState(""),[j,z]=N.useState(null),[h,g]=N.useState(null),[y,T]=N.useState(null),[k,v]=N.useState(""),[P,O]=N.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[F,_]=N.useState(!0),[b,x]=N.useState(!0),[E,M]=N.useState(!1),[I,D]=N.useState(360),[L,A]=N.useState(!1),[V,S]=N.useState([]),[W,Q]=N.useState(null),[C,ne]=N.useState(!1),ie=N.useRef(0),de=N.useCallback(async(B,J)=>{if(!e)return;d(B.id,{isLoading:!0,error:void 0});const Y=J??r.length-1,le=Date.now();try{const R=await ze(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:B.serverName,tool_name:B.toolName,arguments:B.args})}),H={eventIndex:Y,timestamp:le,result:R},ee=[...B.history||[],H];d(B.id,{result:R,isLoading:!1,lastRun:le,history:ee})}catch(R){const H={eventIndex:Y,timestamp:le,error:String(R)},ee=[...B.history||[],H];d(B.id,{error:String(R),isLoading:!1,lastRun:le,history:ee})}},[e==null?void 0:e.id,d,r.length]);N.useEffect(()=>{if(r.length>ie.current&&c.length>0){const B=r.length-1;c.forEach(J=>{J.isLoading||de(J,B)})}ie.current=r.length},[r.length,c,de]),N.useEffect(()=>{s!==null&&(Z(s),u(null))},[s,u]);const[U,Z]=N.useState(null),oe=N.useRef(null),he=N.useRef(null);N.useEffect(()=>{if(!L)return;const B=Y=>{if(!he.current)return;const R=he.current.getBoundingClientRect().right-Y.clientX;D(Math.min(600,Math.max(200,R)))},J=()=>{A(!1)};return document.addEventListener("mousemove",B),document.addEventListener("mouseup",J),()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",J)}},[L]);const xe=N.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),ue=N.useMemo(()=>r.filter((B,J)=>{var Y,le,R;if(y&&(B.timestamp<y[0]||B.timestamp>y[1])||P.size>0&&!P.has(B.event_type))return!1;if(F&&B.event_type==="model_response"){const H=((le=(Y=B.data)==null?void 0:Y.response_content)==null?void 0:le.parts)||((R=B.data)==null?void 0:R.parts)||[],ee=H.some(fe=>fe.type==="function_call"),ae=H.some(fe=>fe.type==="text");if(!ee&&!ae)return!1}return!(k&&!JSON.stringify(B).toLowerCase().includes(k.toLowerCase()))}),[r,y,P,k,F]),Ze=N.useMemo(()=>{let B=0,J=0;return r.forEach(Y=>{var le;Y.event_type==="model_response"&&((le=Y.data)!=null&&le.tokens)&&(B+=Y.data.tokens.input||0,J+=Y.data.tokens.output||0)}),{input:B,output:J,total:B+J}},[r]),vt=h!==null?r[h]:null;N.useEffect(()=>{if(!e){S([]);return}(async()=>{ne(!0);try{const J=await Es(e.id);S(J)}catch(J){console.error("Failed to load sessions:",J),S([])}finally{ne(!1)}})()},[e]);const Be=N.useCallback(async B=>{if(!e){Q(null);return}if(!B){o(),a(),f(null),Q(null),g(null),T(null);return}try{const J=await Eh(e.id,B);o(),a(),f(J.id),Q(B),g(null),T(null);for(const Y of J.events)i(Y)}catch(J){alert(`Failed to load session: ${J.message||"Unknown error"}`)}},[e,o,a,f,i]);N.useEffect(()=>{t&&oe.current&&(oe.current.scrollTop=oe.current.scrollHeight)},[r.length,t]);const $t=N.useCallback(()=>{if(!e||!m.trim()||t)return;j&&(j.close(),z(null)),p||(o(),a(),Q(null)),n(!0),g(null),T(null);const B=Lh(e.id);z(B),B.onopen=()=>{B.send(JSON.stringify({message:m,agent_id:U||void 0,session_id:p||void 0}))},B.onmessage=J=>{var le;const Y=JSON.parse(J.data);if(Y.event_type==="agent_start"&&((le=Y.data)!=null&&le.session_id)){const R=Y.data.session_id;Y.data.session_reused,f(R),R&&V.some(H=>H.id===R)&&Q(R)}else Y.type==="session_started"?(f(Y.session_id),Y.session_id&&V.some(R=>R.id===Y.session_id)&&Q(Y.session_id)):Y.type==="completed"?(n(!1),B.close()):Y.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:Y.error}})):i(Y)},B.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},B.onclose=()=>{n(!1)}},[e,m,t,j,o,n,i,U,p]),$=N.useCallback(()=>{j==null||j.close(),n(!1)},[j,n]);N.useEffect(()=>{const B=J=>{if((J.metaKey||J.ctrlKey)&&J.key==="Enter"){J.preventDefault(),$t();return}if(J.key==="ArrowDown"||J.key==="ArrowUp"){if(J.target instanceof HTMLInputElement||J.target instanceof HTMLTextAreaElement||(J.preventDefault(),ue.length===0))return;if(J.key==="ArrowDown")if(h===null){const Y=r.indexOf(ue[0]);g(Y)}else{const Y=ue.findIndex(le=>r.indexOf(le)===h);if(Y<ue.length-1){const le=r.indexOf(ue[Y+1]);g(le)}}else if(J.key==="ArrowUp")if(h===null){const Y=r.indexOf(ue[ue.length-1]);g(Y)}else{const Y=ue.findIndex(le=>r.indexOf(le)===h);if(Y>0){const le=r.indexOf(ue[Y-1]);g(le)}}}};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[$t,ue,h,r]);const ce=N.useCallback(()=>{var R;if(r.length===0)return;const B={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:U||((R=e==null?void 0:e.app)==null?void 0:R.root_agent_id),events:r},J=new Blob([JSON.stringify(B,null,2)],{type:"application/json"}),Y=URL.createObjectURL(J),le=document.createElement("a");le.href=Y,le.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(Y)},[r,e,U]),Se=N.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const B=await Nh(p);if(B.success){alert(B.message||"Session saved to memory successfully");try{const J=await Es(e.id);S(J)}catch{}}else alert(`Failed to save to memory: ${B.error||"Unknown error"}`)}catch(B){alert(`Error saving to memory: ${B.message||"Unknown error"}`)}},[p,e]),st=N.useCallback(()=>{const B=document.createElement("input");B.type="file",B.accept=".json",B.onchange=async J=>{var le;const Y=(le=J.target.files)==null?void 0:le[0];if(Y)try{const R=await Y.text(),H=JSON.parse(R);if(!H.events||!Array.isArray(H.events)){alert("Invalid run file: missing events array");return}o(),a(),g(null),T(null),H.events.forEach(ee=>{i(ee)})}catch(R){alert(`Failed to load run file: ${R}`)}},B.click()},[o,a,i]);return N.useEffect(()=>{if(h!==null){const B=document.querySelector(".event-row.selected");B==null||B.scrollIntoView({behavior:"smooth",block:"nearest"})}},[h]),e?l.jsxs("div",{className:`run-panel ${L?"resizing":""}`,children:[l.jsx("style",{children:`
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
        
        .token-stats {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1));
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(139, 92, 246, 0.3);
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
      `}),l.jsxs("div",{className:"input-area",children:[l.jsxs("select",{className:"agent-selector",value:U||"",onChange:B=>Z(B.target.value||null),disabled:t,title:"Select which agent to run",children:[l.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((er=e.agents.find(B=>B.id===e.app.root_agent_id))==null?void 0:er.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(B=>B.id!==e.app.root_agent_id).map(B=>l.jsxs("option",{value:B.id,children:[B.name," (",B.type.replace("Agent",""),")"]},B.id))]}),l.jsxs("select",{className:"agent-selector",value:W||"",onChange:B=>Be(B.target.value||null),disabled:t||C,style:{minWidth:180},title:"Load a saved session",children:[l.jsx("option",{value:"",children:C?"Loading...":"Load Session..."}),V.map(B=>{const J=new Date(B.started_at*1e3),Y=B.duration?`${B.duration.toFixed(1)}s`:"?";return l.jsxs("option",{value:B.id,children:[J.toLocaleString()," (",B.event_count," events, ",Y,")"]},B.id)})]}),l.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:B=>w(B.target.value),onKeyDown:B=>B.key==="Enter"&&!B.shiftKey&&$t(),disabled:t}),t?l.jsxs("button",{className:"stop",onClick:$,children:[l.jsx(Z1,{size:14}),"Stop"]}):l.jsxs("button",{onClick:$t,disabled:!m.trim(),children:[l.jsx(Bn,{size:14}),"Run"]})]}),l.jsxs("div",{className:"toolbar",children:[l.jsxs("div",{className:"toolbar-section",children:[l.jsx(J1,{size:12,style:{color:"#71717a"}}),l.jsx("input",{type:"text",placeholder:"Filter events...",value:k,onChange:B=>v(B.target.value)})]}),l.jsx("div",{className:"toolbar-divider"}),l.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(B=>l.jsx("button",{className:`filter-chip ${P.has(B)?"active":""}`,onClick:()=>{const J=new Set(P);J.has(B)?J.delete(B):J.add(B),O(J)},children:B.replace("_"," ")},B)),l.jsx("button",{className:`filter-chip ${P.has("callback_start")&&P.has("callback_end")?"active":""}`,onClick:()=>{const B=new Set(P);B.has("callback_start")&&B.has("callback_end")?(B.delete("callback_start"),B.delete("callback_end")):(B.add("callback_start"),B.add("callback_end")),O(B)},title:"Show/hide callback events",children:"callback"}),l.jsx("button",{className:`filter-chip ${F?"active":""}`,onClick:()=>_(!F),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),l.jsx("div",{className:"toolbar-divider"}),l.jsxs("div",{className:"toolbar-section",children:[l.jsxs("button",{className:`toolbar-btn ${b?"active":""}`,onClick:()=>x(!b),children:[l.jsx(yi,{size:12}),"State"]}),l.jsxs("button",{className:`toolbar-btn ${E?"active":""}`,onClick:()=>M(!E),children:[l.jsx(Bd,{size:12}),"Tools"]})]}),l.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[l.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[ue.length," / ",r.length," events"]}),y&&l.jsx("button",{className:"toolbar-btn",onClick:()=>T(null),children:"Clear Range"})]})]}),l.jsxs("div",{className:"main-content",ref:he,children:[l.jsxs("div",{className:"event-list-container",children:[l.jsxs("div",{className:"event-list-header",children:[l.jsx("div",{children:"#"}),l.jsx("div",{children:"Time"}),l.jsx("div",{children:"Agent"}),l.jsx("div",{children:"Type"}),l.jsx("div",{children:"Info"})]}),l.jsx("div",{className:"event-list",ref:oe,children:ue.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx($h,{size:24}),l.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):ue.map((B,J)=>{const Y=r.indexOf(B),le=Vp[B.event_type]||Vp.error,R=JS[B.event_type]||Fh;return l.jsxs("div",{className:`event-row ${h===Y?"selected":""}`,style:{background:le.bg},onClick:()=>g(Y),onDoubleClick:()=>{x(!1),M(!1)},children:[l.jsx("div",{className:"index",children:Y}),l.jsx("div",{className:"time",style:{color:le.fg},children:XS(B.timestamp,xe.min)}),l.jsx("div",{className:"agent",style:{color:le.fg},children:B.agent_name}),l.jsxs("div",{className:"type",style:{color:le.fg},children:[l.jsx(R,{size:10}),B.event_type.split("_")[0]]}),l.jsx("div",{className:"summary",children:YS(B)})]},Y)})})]}),l.jsxs("div",{className:"side-panel-container",style:{width:I},children:[l.jsx("div",{className:`resize-handle ${L?"active":""}`,onMouseDown:()=>A(!0)}),l.jsxs("div",{className:"side-panel",style:{width:I-4},children:[l.jsxs("div",{className:"side-panel-tabs",children:[l.jsxs("button",{className:`side-panel-tab ${!b&&!E?"active":""}`,onClick:()=>{x(!1),M(!1)},children:[l.jsx(Ui,{size:12,style:{marginRight:4}}),"Details"]}),l.jsxs("button",{className:`side-panel-tab ${b?"active":""}`,onClick:()=>{x(!0),M(!1)},children:[l.jsx(yi,{size:12,style:{marginRight:4}}),"State"]}),l.jsxs("button",{className:`side-panel-tab ${E?"active":""}`,onClick:()=>{M(!0),x(!1)},children:[l.jsx(Bd,{size:12,style:{marginRight:4}}),"Tools"]})]}),l.jsx("div",{className:"side-panel-content",children:E?l.jsx(n_,{project:e,selectedEventIndex:h}):b?l.jsx(t_,{events:r,selectedEventIndex:h,project:e}):vt?l.jsx(ZS,{event:vt}):l.jsxs("div",{className:"empty-state",children:[l.jsx(Ui,{size:24}),l.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),l.jsxs("div",{className:"stats-bar",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Events:"}),l.jsx("span",{className:"stat-value",children:r.length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Tool Calls:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="tool_call").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Model Calls:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="model_call").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Callbacks:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="callback_start").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"State Changes:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="state_change").length})]}),r.length>0&&l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Duration:"}),l.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),Ze.total>0&&l.jsxs("div",{className:"stat-item token-stats",children:[l.jsx("span",{children:"Tokens:"}),l.jsxs("span",{className:"stat-value token-value",children:[l.jsxs("span",{className:"token-in",title:"Input tokens",children:[Ze.input.toLocaleString(),"↑"]}),l.jsxs("span",{className:"token-out",title:"Output tokens",children:[Ze.output.toLocaleString(),"↓"]}),l.jsxs("span",{className:"token-total",title:"Total tokens",children:["= ",Ze.total.toLocaleString()]})]})]}),l.jsx("div",{className:"stats-bar-spacer"}),l.jsxs("button",{className:"stats-bar-btn",onClick:st,title:"Load a saved run",children:[l.jsx(Uh,{size:12}),"Load"]}),l.jsxs("button",{className:"stats-bar-btn",onClick:ce,disabled:r.length===0,title:"Save current run to file",children:[l.jsx(Hu,{size:12}),"Save"]}),l.jsxs("button",{className:"stats-bar-btn",onClick:Se,disabled:!p||r.length===0,title:"Save current session to memory",children:[l.jsx(yi,{size:12}),"Save to Memory"]})]})]}):l.jsx("div",{className:"run-panel empty",children:"No project loaded"})}function Hp(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function i_(){const{project:e}=Nt(),[t,n]=N.useState([{id:"root",name:"All Tests",description:"Root test group",tests:[],children:[]}]),[r,i]=N.useState("root"),[o,a]=N.useState(null),[s,u]=N.useState(new Map),[c,d]=N.useState(new Set),[p,f]=N.useState(new Set(["root"]));if(!e)return null;function m(_,b){for(const x of _){if(x.id===b)return x;const E=m(x.children,b);if(E)return E}return null}function w(_,b,x){return _.map(E=>E.id===b?{...E,...x}:{...E,children:w(E.children,b,x)})}const j=m(t,r),z=j==null?void 0:j.tests.find(_=>_.id===o);function h(_){const b=new Set(p);b.has(_)?b.delete(_):b.add(_),f(b)}function g(_){const b={id:Hp(),name:"New Group",description:"",tests:[],children:[]};n(x=>{var E,M;return _==="root"&&((E=x[0])==null?void 0:E.id)==="root"?[{...x[0],children:[...x[0].children,b]}]:w(x,_,{children:[...((M=m(x,_))==null?void 0:M.children)||[],b]})}),i(b.id),f(x=>new Set([...x,_]))}function y(_){const b={id:Hp(),name:"New Test",description:"",input_message:"",expected_tool_calls:[],expected_state:{}};n(x=>{const E=m(x,_);return E?w(x,_,{tests:[...E.tests,b]}):x}),a(b.id)}function T(_,b,x){n(E=>{const M=m(E,_);return M?w(E,_,{tests:M.tests.map(I=>I.id===b?{...I,...x}:I)}):E})}function k(_,b){n(x=>{const E=m(x,_);return E?w(x,_,{tests:E.tests.filter(M=>M.id!==b)}):x}),o===b&&a(null)}async function v(_){d(M=>new Set([...M,_.id]));const b=Date.now();await new Promise(M=>setTimeout(M,1e3+Math.random()*2e3));const x=Math.random()>.3,E={test_id:_.id,passed:x,duration_ms:Date.now()-b,error:x?void 0:"Expected output did not match"};u(M=>new Map(M).set(_.id,E)),d(M=>{const I=new Set(M);return I.delete(_.id),I})}async function P(_){for(const b of _.tests)await v(b);for(const b of _.children)await P(b)}function O(_){let b=0,x=0,E=0;function M(I){for(const D of I.tests){b++;const L=s.get(D.id);L&&(L.passed?x++:E++)}for(const D of I.children)M(D)}return M(_),{total:b,passed:x,failed:E,pending:b-x-E}}function F(_,b=0){return _.map(x=>{const E=p.has(x.id),M=O(x),I=x.tests.length>0||x.children.length>0;return l.jsxs("div",{className:"test-tree-item",children:[l.jsxs("div",{className:`tree-group ${r===x.id?"selected":""}`,style:{paddingLeft:8+b*16},onClick:()=>i(x.id),children:[l.jsx("button",{className:"expand-btn",onClick:D=>{D.stopPropagation(),h(x.id)},children:I?E?l.jsx(Lt,{size:14}):l.jsx(At,{size:14}):l.jsx("span",{style:{width:14}})}),l.jsx(Od,{size:14,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{className:"group-name",children:x.name}),M.total>0&&l.jsxs("span",{className:"group-stats",children:[M.passed>0&&l.jsx("span",{className:"stat-passed",children:M.passed}),M.failed>0&&l.jsx("span",{className:"stat-failed",children:M.failed}),M.pending>0&&l.jsx("span",{className:"stat-pending",children:M.pending})]}),l.jsx("button",{className:"run-btn",onClick:D=>{D.stopPropagation(),P(x)},title:"Run all tests in this group",children:l.jsx(Bn,{size:12})})]}),E&&l.jsxs("div",{className:"tree-children",children:[x.tests.map(D=>{const L=s.get(D.id),A=c.has(D.id);return l.jsxs("div",{className:`tree-test ${o===D.id?"selected":""}`,style:{paddingLeft:24+b*16},onClick:()=>{i(x.id),a(D.id)},children:[A?l.jsx(W1,{size:14,className:"spinning",style:{color:"var(--warning)"}}):L?L.passed?l.jsx(Md,{size:14,style:{color:"var(--success)"}}):l.jsx(Ud,{size:14,style:{color:"var(--error)"}}):l.jsx(fa,{size:14,style:{color:"var(--text-muted)"}}),l.jsx("span",{className:"test-name",children:D.name}),l.jsx("button",{className:"run-btn",onClick:V=>{V.stopPropagation(),v(D)},disabled:A,children:l.jsx(Bn,{size:12})})]},D.id)}),F(x.children,b+1)]})]},x.id)})}return l.jsxs("div",{className:"eval-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"eval-sidebar",children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsx("h3",{children:"Evaluation Tests"}),l.jsxs("div",{className:"header-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(r),title:"Add test group",children:l.jsx(Od,{size:14})}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>y(r),title:"Add test",children:[l.jsx(He,{size:14}),"Test"]})]})]}),l.jsx("div",{className:"test-tree",children:F(t)})]}),l.jsx("div",{className:"test-editor",children:z?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(fa,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("input",{type:"text",value:z.name,onChange:_=>T(r,z.id,{name:_.target.value}),placeholder:"Test name"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>v(z),disabled:c.has(z.id),children:[l.jsx(Bn,{size:14}),"Run"]}),l.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>k(r,z.id),children:l.jsx(Ge,{size:14})})]}),l.jsxs("div",{className:"editor-content",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("textarea",{value:z.description,onChange:_=>T(r,z.id,{description:_.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Input Message"}),l.jsx("textarea",{value:z.input_message,onChange:_=>T(r,z.id,{input_message:_.target.value}),placeholder:"The message to send to the agent..."})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected Output (optional)"}),l.jsx("textarea",{value:z.expected_output||"",onChange:_=>T(r,z.id,{expected_output:_.target.value||void 0}),placeholder:"Expected text in the response (partial match)..."})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected Tool Calls"}),l.jsx("textarea",{value:z.expected_tool_calls.join(`
`),onChange:_=>T(r,z.id,{expected_tool_calls:_.target.value.split(`
`).filter(Boolean)}),placeholder:"Tool names (one per line)...",style:{minHeight:60}})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected State (JSON)"}),l.jsx("textarea",{value:JSON.stringify(z.expected_state,null,2),onChange:_=>{try{const b=JSON.parse(_.target.value);T(r,z.id,{expected_state:b})}catch{}},placeholder:'{"key": "value"}'})]})]}),s.has(z.id)&&l.jsxs("div",{className:"result-panel",children:[l.jsxs("div",{className:`result-header ${s.get(z.id).passed?"passed":"failed"}`,children:[s.get(z.id).passed?l.jsxs(l.Fragment,{children:[l.jsx(Md,{size:18}),l.jsx("strong",{children:"Passed"})]}):l.jsxs(l.Fragment,{children:[l.jsx(Ud,{size:18}),l.jsx("strong",{children:"Failed"})]}),l.jsxs("span",{style:{marginLeft:"auto",color:"var(--text-muted)",fontSize:12},children:[s.get(z.id).duration_ms,"ms"]})]}),s.get(z.id).error&&l.jsx("div",{className:"result-error",children:s.get(z.id).error})]})]}):j?l.jsxs("div",{className:"editor-content",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Group Name"}),l.jsx("input",{type:"text",value:j.name,onChange:_=>n(b=>w(b,j.id,{name:_.target.value}))})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("textarea",{value:j.description,onChange:_=>n(b=>w(b,j.id,{description:_.target.value})),placeholder:"Description of this test group..."})]}),l.jsx("div",{style:{marginTop:20},children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>P(j),children:[l.jsx(Bn,{size:16}),"Run All Tests in Group"]})})]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(fa,{size:48}),l.jsxs("p",{children:["Select a test to edit",l.jsx("br",{}),"or create a new one"]})]})})]})}function o_(){const{project:e,setProject:t}=Nt(),[n,r]=N.useState(""),[i,o]=N.useState(!0),[a,s]=N.useState(!1),[u,c]=N.useState(null),[d,p]=N.useState(!1);if(!e)return null;N.useEffect(()=>{f()},[e.id]);async function f(){o(!0),c(null);try{const g=await zh(e.id);r(g),s(!1)}catch(g){c(g.message)}finally{o(!1)}}function m(g){g!==void 0&&(r(g),s(!0),c(null))}async function w(){o(!0),c(null);try{const g=await Th(e.id,n);t(g),s(!1)}catch(g){c(g.message)}finally{o(!1)}}function j(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function z(){const g=new Blob([n],{type:"text/yaml"}),y=URL.createObjectURL(g),T=document.createElement("a");T.href=y,T.download=`${e.name}.yaml`,T.click(),URL.revokeObjectURL(y)}function h(){const g=document.createElement("input");g.type="file",g.accept=".yaml,.yml",g.onchange=async y=>{var v;const T=(v=y.target.files)==null?void 0:v[0];if(!T)return;const k=await T.text();r(k),s(!0)},g.click()}return l.jsxs("div",{className:"yaml-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"yaml-header",children:[l.jsxs("div",{className:"yaml-title",children:[l.jsx("h3",{children:"Project Configuration"}),a&&l.jsxs("span",{className:"status-badge warning",children:[l.jsx(Rd,{size:12}),"Unsaved changes"]}),u&&l.jsxs("span",{className:"status-badge error",children:[l.jsx(Rd,{size:12}),u]}),d&&l.jsxs("span",{className:"status-badge success",children:[l.jsx(Oh,{size:12}),"Copied!"]})]}),l.jsxs("div",{className:"yaml-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,title:"Copy to clipboard",children:[l.jsx(Dh,{size:14}),"Copy"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:z,title:"Download YAML",children:[l.jsx(Hu,{size:14}),"Download"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:h,title:"Upload YAML",children:[l.jsx(Uh,{size:14}),"Upload"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[l.jsx(yr,{size:14}),"Reload"]}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:w,disabled:!a||i,children:"Apply Changes"})]})]}),l.jsx("div",{className:"yaml-editor",children:l.jsx(Or,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),l.jsxs("div",{className:"yaml-info",children:[l.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),l.jsxs("p",{children:["You can edit the YAML directly, then click ",l.jsx("code",{children:"Apply Changes"})," to update the project. Use ",l.jsx("code",{children:"Download"})," to save a backup or ",l.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function qp(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function l_(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function a_(e,t){var n;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const r=t.agents.find(i=>i.id===e.agent_id);return r?`AgentTool(agent=${r.name}_agent)`:"AgentTool(agent=sub_agent)"}else if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";return""}function s_(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${qp(i.instruction)}"""`),i.description&&o.push(`description="${qp(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(u=>a_(u,t)).filter(u=>u&&!u.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const u=i.sub_agents.map(c=>n.get(c)||"sub_agent").join(", ");o.push(`sub_agents=[${u}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const s={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[u,c]of Object.entries(s)){const d=i[u]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(w=>w.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(w=>w.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${c}="${m}"`)}else o.push(`${c}=[${p}]`)}}return`${r} = Agent(
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
`)}function c_(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(k=>{const v=n[k];if(v){const O=k.toLowerCase().includes("key")||k.toLowerCase().includes("secret")?"***":v;t.push(`os.environ["${k}"] = "${O}"  # Set your ${k}`)}else t.push(`# os.environ["${k}"] = ""  # TODO: Set your ${k}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(k=>k.type==="SequentialAgent"),a=e.agents.some(k=>k.type==="LoopAgent"),s=e.agents.some(k=>k.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),s&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(k=>{var v;return k.type==="LlmAgent"&&((v=k.model)==null?void 0:v.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(k=>k.type==="LlmAgent"&&k.tools.some(v=>v.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;e.agents.forEach(k=>{k.type==="LlmAgent"&&k.tools.forEach(v=>{v.type==="builtin"&&v.name&&d.add(v.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0&&(i.add("from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset"),i.add("from google.adk.tools.mcp_tool.mcp_toolset import StdioConnectionParams"),i.add("from google.adk.tools.mcp_tool.mcp_toolset import StdioServerParameters")),i.add("from google.adk.apps import App");const f=e.app.plugins.length>0;f&&e.app.plugins.forEach(k=>{k.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const m=Array.from(i).sort();t.push(...m),t.push(""),t.push("");const w=new Map;e.agents.forEach(k=>{const v=k.name.endsWith("_agent")?k.name:`${k.name}_agent`;w.set(k.id,v)});const j=[],z=new Set;function h(k){if(z.has(k))return;const v=e.agents.find(P=>P.id===k);v&&(v.sub_agents.forEach(P=>h(P)),z.add(k),j.push(v))}e.agents.forEach(k=>h(k.id));const g=new Map;j.forEach(k=>{k.type==="LlmAgent"&&k.tools.forEach(v=>{v.type==="mcp"&&v.server&&g.set(v.server.name,v.server)})}),g.size>0&&(t.push("# MCP Server Toolsets"),g.forEach(k=>{t.push(u_(k)),t.push("")}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(k=>{t.push(k.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(k=>{t.push(k.code),t.push("")}),t.push("")),t.push("# Models"),j.forEach(k=>{k.type==="LlmAgent"&&k.model&&(t.push(l_(k.model,`${k.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),j.forEach(k=>{t.push(s_(k,e,w)),t.push("")});const y=e.agents.find(k=>k.id===e.app.root_agent_id),T=y?w.get(y.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${T},`),f){const k=e.app.plugins.map(v=>v.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${v.max_retries||3})`:`        # ${v.type}()`);t.push("    plugins=["),t.push(k.join(`,
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
      `}),l.jsxs("div",{className:"code-header",children:[l.jsxs("div",{className:"code-title",children:[l.jsx(En,{size:16}),l.jsx("h3",{children:"Python Code"}),l.jsx("span",{className:"badge",children:"Generated"}),t&&l.jsxs("span",{className:"status-badge success",children:[l.jsx(Oh,{size:12}),"Copied!"]})]}),l.jsxs("div",{className:"code-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[l.jsx(Dh,{size:14}),"Copy"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[l.jsx(Hu,{size:14}),"Download"]})]})]}),l.jsx("div",{className:"code-editor",children:l.jsx(Or,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),l.jsxs("div",{className:"code-info",children:[l.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),l.jsxs("p",{children:["Place this in a file named ",l.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",l.jsx("code",{children:"adk web ."})," or ",l.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const p_=[{id:"app",label:"App",icon:X1},{id:"agents",label:"Agents",icon:Hn},{id:"tools",label:"Tools",icon:Kt},{id:"callbacks",label:"Callbacks",icon:En},{id:"run",label:"Run",icon:$h},{id:"eval",label:"Evaluate",icon:e0},{id:"yaml",label:"YAML",icon:q1},{id:"code",label:"Code",icon:En}],f_=["app","agents","tools","callbacks","run","eval","yaml","code"];function Pa(){const{projectId:e,tab:t,itemId:n}=Hv(),r=Uu(),{project:i,setProject:o,activeTab:a,setActiveTab:s,hasUnsavedChanges:u,setHasUnsavedChanges:c,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=Nt(),[w,j]=N.useState(!0),[z,h]=N.useState(!1),g=N.useRef(!0),y=N.useRef(null);N.useEffect(()=>{t&&f_.includes(t)?s(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),N.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function T(_){s(_),_==="agents"&&d?r(`/project/${e}/${_}/${d}`,{replace:!0}):_==="tools"&&f?r(`/project/${e}/${_}/${f}`,{replace:!0}):r(`/project/${e}/${_}`,{replace:!0})}function k(_){_?r(`/project/${e}/${a}/${_}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}N.useEffect(()=>(e&&v(e),()=>{o(null),c(!1)}),[e]);async function v(_){g.current=!0;try{const b=await Sh(_);o(b),y.current=JSON.stringify(b),c(!1)}catch(b){console.error("Failed to load project:",b),r("/")}finally{j(!1),setTimeout(()=>{g.current=!1},100)}}async function P(){if(i){h(!0);try{await Ns(i.id,i),y.current=JSON.stringify(i),c(!1)}catch(_){console.error("Failed to save project:",_)}finally{h(!1)}}}const O=N.useRef(null);N.useEffect(()=>{if(i&&!g.current&&O.current){const _=i.app.models||[],b=O.current||[];if(_.some((E,M)=>{const I=b.find(D=>D.id===E.id);return I?I.provider!==E.provider||I.model_name!==E.model_name||I.api_base!==E.api_base||I.temperature!==E.temperature||I.max_output_tokens!==E.max_output_tokens||I.top_p!==E.top_p||I.top_k!==E.top_k:!1})){const E=i.app.default_model_id,M=i.agents.map(D=>{if(D.type==="LlmAgent"&&D.model){const L=D.model._appModelId;if(L){const A=_.find(V=>V.id===L);if(A)return{...D,model:{provider:A.provider,model_name:A.model_name,api_base:A.api_base,temperature:A.temperature,max_output_tokens:A.max_output_tokens,top_p:A.top_p,top_k:A.top_k,fallbacks:[],_appModelId:L}}}else if(E){const A=_.find(V=>V.id===E);if(A&&D.model.provider===A.provider&&D.model.model_name===A.model_name&&D.model.api_base===A.api_base)return{...D,model:{provider:A.provider,model_name:A.model_name,api_base:A.api_base,temperature:A.temperature,max_output_tokens:A.max_output_tokens,top_p:A.top_p,top_k:A.top_k,fallbacks:[],_appModelId:E}}}}return D});M.some((D,L)=>JSON.stringify(D)!==JSON.stringify(i.agents[L]))&&o({...i,agents:M})}}i&&(O.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const F=N.useRef(null);return N.useEffect(()=>(i&&!g.current&&y.current&&JSON.stringify(i)!==y.current&&(c(!0),F.current&&clearTimeout(F.current),F.current=setTimeout(async()=>{try{await Ns(i.id,i),y.current=JSON.stringify(i),c(!1)}catch(b){console.error("Auto-save failed:",b)}},500)),()=>{F.current&&clearTimeout(F.current)}),[i]),w?l.jsxs("div",{className:"loading-screen",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("header",{className:"top-bar",children:[l.jsxs("div",{className:"top-bar-left",children:[l.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[l.jsx(V1,{size:18}),"Project"]}),l.jsx("h1",{className:"project-name",children:i.name})]}),l.jsx("nav",{className:"tabs-bar",children:p_.map(_=>l.jsxs("button",{className:`tab-btn ${a===_.id?"active":""}`,onClick:()=>T(_.id),children:[l.jsx(_.icon,{size:14}),_.label]},_.id))}),l.jsx("div",{className:"top-bar-right",children:l.jsxs("button",{className:"btn btn-primary",onClick:P,disabled:z,children:[l.jsx(Ku,{size:16}),z?"Saving...":"Save"]})})]}),l.jsxs("main",{className:"main-content",children:[a==="app"&&l.jsx(a0,{}),a==="agents"&&l.jsx(fS,{onSelectAgent:k}),a==="tools"&&l.jsx(KS,{onSelectTool:k}),a==="callbacks"&&l.jsx(GS,{onSelectCallback:k}),a==="run"&&l.jsx(r_,{}),a==="eval"&&l.jsx(i_,{}),a==="yaml"&&l.jsx(o_,{}),a==="code"&&l.jsx(d_,{})]})]}):null}function m_(){const{setMcpServers:e,setBuiltinTools:t}=Nt();return N.useEffect(()=>{Vu().then(e).catch(console.error),Ph().then(t).catch(console.error)},[e,t]),l.jsxs(s1,{children:[l.jsx(or,{path:"/",element:l.jsx(i0,{})}),l.jsx(or,{path:"/project/:projectId",element:l.jsx(Pa,{})}),l.jsx(or,{path:"/project/:projectId/:tab",element:l.jsx(Pa,{})}),l.jsx(or,{path:"/project/:projectId/:tab/:itemId",element:l.jsx(Pa,{})}),l.jsx(or,{path:"*",element:l.jsx(l1,{to:"/",replace:!0})})]})}La.createRoot(document.getElementById("root")).render(l.jsx(Rt.StrictMode,{children:l.jsx(d1,{children:l.jsx(m_,{})})}));export{ml as a,h_ as g};
