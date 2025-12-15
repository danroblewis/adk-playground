function B1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jm={exports:{}},Ba={},Km={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),U1=Symbol.for("react.portal"),V1=Symbol.for("react.fragment"),W1=Symbol.for("react.strict_mode"),H1=Symbol.for("react.profiler"),q1=Symbol.for("react.provider"),J1=Symbol.for("react.context"),K1=Symbol.for("react.forward_ref"),G1=Symbol.for("react.suspense"),Y1=Symbol.for("react.memo"),Q1=Symbol.for("react.lazy"),Kp=Symbol.iterator;function X1(e){return e===null||typeof e!="object"?null:(e=Kp&&e[Kp]||e["@@iterator"],typeof e=="function"?e:null)}var Gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ym=Object.assign,Qm={};function Ci(e,t,n){this.props=e,this.context=t,this.refs=Qm,this.updater=n||Gm}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xm(){}Xm.prototype=Ci.prototype;function Ou(e,t,n){this.props=e,this.context=t,this.refs=Qm,this.updater=n||Gm}var $u=Ou.prototype=new Xm;$u.constructor=Ou;Ym($u,Ci.prototype);$u.isPureReactComponent=!0;var Gp=Array.isArray,Zm=Object.prototype.hasOwnProperty,Du={current:null},eg={key:!0,ref:!0,__self:!0,__source:!0};function tg(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Zm.call(t,r)&&!eg.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ho,type:e,key:s,ref:a,props:i,_owner:Du.current}}function Z1(e,t){return{$$typeof:Ho,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ho}function e0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yp=/\/+/g;function yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?e0(""+e.key):t.toString(36)}function Is(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ho:case U1:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+yl(a,0):r,Gp(i)?(n="",e!=null&&(n=e.replace(Yp,"$&/")+"/"),Is(i,t,n,"",function(u){return u})):i!=null&&(Fu(i)&&(i=Z1(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Yp,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Gp(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+yl(s,l);a+=Is(s,t,n,c,i)}else if(c=X1(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+yl(s,l++),a+=Is(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function cs(e,t,n){if(e==null)return e;var r=[],i=0;return Is(e,r,"","",function(s){return t.call(n,s,i++)}),r}function t0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Os={transition:null},n0={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Os,ReactCurrentOwner:Du};function ng(){throw Error("act(...) is not supported in production builds of React.")}Ce.Children={map:cs,forEach:function(e,t,n){cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cs(e,function(){t++}),t},toArray:function(e){return cs(e,function(t){return t})||[]},only:function(e){if(!Fu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ce.Component=Ci;Ce.Fragment=V1;Ce.Profiler=H1;Ce.PureComponent=Ou;Ce.StrictMode=W1;Ce.Suspense=G1;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;Ce.act=ng;Ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ym({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Du.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Zm.call(t,c)&&!eg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ho,type:e.type,key:i,ref:s,props:r,_owner:a}};Ce.createContext=function(e){return e={$$typeof:J1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:q1,_context:e},e.Consumer=e};Ce.createElement=tg;Ce.createFactory=function(e){var t=tg.bind(null,e);return t.type=e,t};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(e){return{$$typeof:K1,render:e}};Ce.isValidElement=Fu;Ce.lazy=function(e){return{$$typeof:Q1,_payload:{_status:-1,_result:e},_init:t0}};Ce.memo=function(e,t){return{$$typeof:Y1,type:e,compare:t===void 0?null:t}};Ce.startTransition=function(e){var t=Os.transition;Os.transition={};try{e()}finally{Os.transition=t}};Ce.unstable_act=ng;Ce.useCallback=function(e,t){return mt.current.useCallback(e,t)};Ce.useContext=function(e){return mt.current.useContext(e)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};Ce.useEffect=function(e,t){return mt.current.useEffect(e,t)};Ce.useId=function(){return mt.current.useId()};Ce.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};Ce.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};Ce.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};Ce.useMemo=function(e,t){return mt.current.useMemo(e,t)};Ce.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};Ce.useRef=function(e){return mt.current.useRef(e)};Ce.useState=function(e){return mt.current.useState(e)};Ce.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};Ce.useTransition=function(){return mt.current.useTransition()};Ce.version="18.3.1";Km.exports=Ce;var _=Km.exports;const It=Fa(_),r0=B1({__proto__:null,default:It},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=_,o0=Symbol.for("react.element"),s0=Symbol.for("react.fragment"),a0=Object.prototype.hasOwnProperty,l0=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c0={key:!0,ref:!0,__self:!0,__source:!0};function rg(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)a0.call(t,r)&&!c0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:o0,type:e,key:s,ref:a,props:i,_owner:l0.current}}Ba.Fragment=s0;Ba.jsx=rg;Ba.jsxs=rg;Jm.exports=Ba;var o=Jm.exports,gc={},ig={exports:{}},Ft={},og={exports:{}},sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,I){var v=O.length;O.push(I);e:for(;0<v;){var D=v-1>>>1,q=O[D];if(0<i(q,I))O[D]=I,O[v]=q,v=D;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],v=O.pop();if(v!==I){O[0]=v;e:for(var D=0,q=O.length,b=q>>>1;D<b;){var V=2*(D+1)-1,P=O[V],Y=V+1,ue=O[Y];if(0>i(P,v))Y<q&&0>i(ue,P)?(O[D]=ue,O[Y]=v,D=Y):(O[D]=P,O[V]=v,D=V);else if(Y<q&&0>i(ue,v))O[D]=ue,O[Y]=v,D=Y;else break e}}return I}function i(O,I){var v=O.sortIndex-I.sortIndex;return v!==0?v:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,x=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=O)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function k(O){if(w=!1,y(O),!x)if(n(c)!==null)x=!0,B(z);else{var I=n(u);I!==null&&E(k,I.startTime-O)}}function z(O,I){x=!1,w&&(w=!1,g(S),S=-1),h=!0;var v=f;try{for(y(I),p=n(c);p!==null&&(!(p.expirationTime>I)||O&&!R());){var D=p.callback;if(typeof D=="function"){p.callback=null,f=p.priorityLevel;var q=D(p.expirationTime<=I);I=e.unstable_now(),typeof q=="function"?p.callback=q:p===n(c)&&r(c),y(I)}else r(c);p=n(c)}if(p!==null)var b=!0;else{var V=n(u);V!==null&&E(k,V.startTime-I),b=!1}return b}finally{p=null,f=v,h=!1}}var C=!1,A=null,S=-1,$=5,N=-1;function R(){return!(e.unstable_now()-N<$)}function L(){if(A!==null){var O=e.unstable_now();N=O;var I=!0;try{I=A(!0,O)}finally{I?W():(C=!1,A=null)}}else C=!1}var W;if(typeof m=="function")W=function(){m(L)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,M=T.port2;T.port1.onmessage=L,W=function(){M.postMessage(null)}}else W=function(){j(L,0)};function B(O){A=O,C||(C=!0,W())}function E(O,I){S=j(function(){O(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){x||h||(x=!0,B(z))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var v=f;f=I;try{return O()}finally{f=v}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var v=f;f=O;try{return I()}finally{f=v}},e.unstable_scheduleCallback=function(O,I,v){var D=e.unstable_now();switch(typeof v=="object"&&v!==null?(v=v.delay,v=typeof v=="number"&&0<v?D+v:D):v=D,O){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=v+q,O={id:d++,callback:I,priorityLevel:O,startTime:v,expirationTime:q,sortIndex:-1},v>D?(O.sortIndex=v,t(u,O),n(c)===null&&O===n(u)&&(w?(g(S),S=-1):w=!0,E(k,v-D))):(O.sortIndex=q,t(c,O),x||h||(x=!0,B(z))),O},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(O){var I=f;return function(){var v=f;f=I;try{return O.apply(this,arguments)}finally{f=v}}}})(sg);og.exports=sg;var u0=og.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=_,$t=u0;function ne(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ag=new Set,xo={};function $r(e,t){fi(e,t),fi(e+"Capture",t)}function fi(e,t){for(xo[e]=t,e=0;e<t.length;e++)ag.add(t[e])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xc=Object.prototype.hasOwnProperty,p0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qp={},Xp={};function f0(e){return xc.call(Xp,e)?!0:xc.call(Qp,e)?!1:p0.test(e)?Xp[e]=!0:(Qp[e]=!0,!1)}function h0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function m0(e,t,n,r){if(t===null||typeof t>"u"||h0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bu=/[\-:]([a-z])/g;function Uu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bu,Uu);ot[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bu,Uu);ot[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bu,Uu);ot[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vu(e,t,n,r){var i=ot.hasOwnProperty(t)?ot[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(m0(t,n,i,r)&&(n=null),r||i===null?f0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bn=d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,us=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Hr=Symbol.for("react.fragment"),Wu=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),lg=Symbol.for("react.provider"),cg=Symbol.for("react.context"),Hu=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),qu=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),ug=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function Ri(e){return e===null||typeof e!="object"?null:(e=Zp&&e[Zp]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,vl;function Yi(e){if(vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vl=t&&t[1]||""}return`
`+vl+e}var bl=!1;function wl(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yi(e):""}function g0(e){switch(e.tag){case 5:return Yi(e.type);case 16:return Yi("Lazy");case 13:return Yi("Suspense");case 19:return Yi("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function wc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hr:return"Fragment";case Wr:return"Portal";case yc:return"Profiler";case Wu:return"StrictMode";case vc:return"Suspense";case bc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case cg:return(e.displayName||"Context")+".Consumer";case lg:return(e._context.displayName||"Context")+".Provider";case Hu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qu:return t=e.displayName||null,t!==null?t:wc(e.type)||"Memo";case Hn:t=e._payload,e=e._init;try{return wc(e(t))}catch{}}return null}function x0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wc(t);case 8:return t===Wu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function y0(e){var t=dg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ds(e){e._valueTracker||(e._valueTracker=y0(e))}function pg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=dg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kc(e,t){var n=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ef(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ur(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fg(e,t){t=t.checked,t!=null&&Vu(e,"checked",t,!1)}function jc(e,t){fg(e,t);var n=ur(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_c(e,t.type,n):t.hasOwnProperty("defaultValue")&&_c(e,t.type,ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _c(e,t,n){(t!=="number"||na(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qi=Array.isArray;function ri(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ur(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Sc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ne(92));if(Qi(n)){if(1<n.length)throw Error(ne(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ur(n)}}function hg(e,t){var n=ur(t.value),r=ur(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ps,gg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ps=ps||document.createElement("div"),ps.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},v0=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){v0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function xg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function yg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var b0=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nc(e,t){if(t){if(b0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ne(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ne(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ne(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ne(62))}}function Ec(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zc=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tc=null,ii=null,oi=null;function of(e){if(e=Ko(e)){if(typeof Tc!="function")throw Error(ne(280));var t=e.stateNode;t&&(t=qa(t),Tc(e.stateNode,e.type,t))}}function vg(e){ii?oi?oi.push(e):oi=[e]:ii=e}function bg(){if(ii){var e=ii,t=oi;if(oi=ii=null,of(e),t)for(e=0;e<t.length;e++)of(t[e])}}function wg(e,t){return e(t)}function kg(){}var kl=!1;function jg(e,t,n){if(kl)return e(t,n);kl=!0;try{return wg(e,t,n)}finally{kl=!1,(ii!==null||oi!==null)&&(kg(),bg())}}function vo(e,t){var n=e.stateNode;if(n===null)return null;var r=qa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ne(231,t,typeof n));return n}var Ac=!1;if(In)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Ac=!1}function w0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var io=!1,ra=null,ia=!1,Pc=null,k0={onError:function(e){io=!0,ra=e}};function j0(e,t,n,r,i,s,a,l,c){io=!1,ra=null,w0.apply(k0,arguments)}function _0(e,t,n,r,i,s,a,l,c){if(j0.apply(this,arguments),io){if(io){var u=ra;io=!1,ra=null}else throw Error(ne(198));ia||(ia=!0,Pc=u)}}function Dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sf(e){if(Dr(e)!==e)throw Error(ne(188))}function S0(e){var t=e.alternate;if(!t){if(t=Dr(e),t===null)throw Error(ne(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sf(i),e;if(s===r)return sf(i),t;s=s.sibling}throw Error(ne(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==r)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?e:t}function Sg(e){return e=S0(e),e!==null?Cg(e):null}function Cg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cg(e);if(t!==null)return t;e=e.sibling}return null}var Ng=$t.unstable_scheduleCallback,af=$t.unstable_cancelCallback,C0=$t.unstable_shouldYield,N0=$t.unstable_requestPaint,He=$t.unstable_now,E0=$t.unstable_getCurrentPriorityLevel,Ku=$t.unstable_ImmediatePriority,Eg=$t.unstable_UserBlockingPriority,oa=$t.unstable_NormalPriority,z0=$t.unstable_LowPriority,zg=$t.unstable_IdlePriority,Ua=null,bn=null;function T0(e){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Ua,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:L0,A0=Math.log,P0=Math.LN2;function L0(e){return e>>>=0,e===0?32:31-(A0(e)/P0|0)|0}var fs=64,hs=4194304;function Xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Xi(l):(s&=a,s!==0&&(r=Xi(s)))}else a=n&~i,a!==0?r=Xi(a):s!==0&&(r=Xi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-sn(t),i=1<<n,r|=e[n],t&=~i;return r}function M0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-sn(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=M0(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Lc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tg(){var e=fs;return fs<<=1,!(fs&4194240)&&(fs=64),e}function jl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-sn(t),e[t]=n}function I0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Gu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ae=0;function Ag(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pg,Yu,Lg,Mg,Rg,Mc=!1,ms=[],tr=null,nr=null,rr=null,bo=new Map,wo=new Map,Kn=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lf(e,t){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(t.pointerId)}}function Oi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ko(t),t!==null&&Yu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $0(e,t,n,r,i){switch(t){case"focusin":return tr=Oi(tr,e,t,n,r,i),!0;case"dragenter":return nr=Oi(nr,e,t,n,r,i),!0;case"mouseover":return rr=Oi(rr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,Oi(bo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,wo.set(s,Oi(wo.get(s)||null,e,t,n,r,i)),!0}return!1}function Ig(e){var t=wr(e.target);if(t!==null){var n=Dr(t);if(n!==null){if(t=n.tag,t===13){if(t=_g(n),t!==null){e.blockedOn=t,Rg(e.priority,function(){Lg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zc=r,n.target.dispatchEvent(r),zc=null}else return t=Ko(n),t!==null&&Yu(t),e.blockedOn=n,!1;t.shift()}return!0}function cf(e,t,n){$s(e)&&n.delete(t)}function D0(){Mc=!1,tr!==null&&$s(tr)&&(tr=null),nr!==null&&$s(nr)&&(nr=null),rr!==null&&$s(rr)&&(rr=null),bo.forEach(cf),wo.forEach(cf)}function $i(e,t){e.blockedOn===t&&(e.blockedOn=null,Mc||(Mc=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,D0)))}function ko(e){function t(i){return $i(i,e)}if(0<ms.length){$i(ms[0],e);for(var n=1;n<ms.length;n++){var r=ms[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tr!==null&&$i(tr,e),nr!==null&&$i(nr,e),rr!==null&&$i(rr,e),bo.forEach(t),wo.forEach(t),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Ig(n),n.blockedOn===null&&Kn.shift()}var si=Bn.ReactCurrentBatchConfig,aa=!0;function F0(e,t,n,r){var i=Ae,s=si.transition;si.transition=null;try{Ae=1,Qu(e,t,n,r)}finally{Ae=i,si.transition=s}}function B0(e,t,n,r){var i=Ae,s=si.transition;si.transition=null;try{Ae=4,Qu(e,t,n,r)}finally{Ae=i,si.transition=s}}function Qu(e,t,n,r){if(aa){var i=Rc(e,t,n,r);if(i===null)Ll(e,t,r,la,n),lf(e,r);else if($0(i,e,t,n,r))r.stopPropagation();else if(lf(e,r),t&4&&-1<O0.indexOf(e)){for(;i!==null;){var s=Ko(i);if(s!==null&&Pg(s),s=Rc(e,t,n,r),s===null&&Ll(e,t,r,la,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var la=null;function Rc(e,t,n,r){if(la=null,e=Ju(r),e=wr(e),e!==null)if(t=Dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return la=e,null}function Og(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E0()){case Ku:return 1;case Eg:return 4;case oa:case z0:return 16;case zg:return 536870912;default:return 16}default:return 16}}var Yn=null,Xu=null,Ds=null;function $g(){if(Ds)return Ds;var e,t=Xu,n=t.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Ds=i.slice(e,1<r?1-r:void 0)}function Fs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function uf(){return!1}function Bt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gs:uf,this.isPropagationStopped=uf,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),t}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zu=Bt(Ni),Jo=Ve({},Ni,{view:0,detail:0}),U0=Bt(Jo),_l,Sl,Di,Va=Ve({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ed,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Di&&(Di&&e.type==="mousemove"?(_l=e.screenX-Di.screenX,Sl=e.screenY-Di.screenY):Sl=_l=0,Di=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),df=Bt(Va),V0=Ve({},Va,{dataTransfer:0}),W0=Bt(V0),H0=Ve({},Jo,{relatedTarget:0}),Cl=Bt(H0),q0=Ve({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=Bt(q0),K0=Ve({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G0=Bt(K0),Y0=Ve({},Ni,{data:0}),pf=Bt(Y0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z0[e])?!!t[e]:!1}function ed(){return eb}var tb=Ve({},Jo,{key:function(e){if(e.key){var t=Q0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?X0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ed,charCode:function(e){return e.type==="keypress"?Fs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nb=Bt(tb),rb=Ve({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ff=Bt(rb),ib=Ve({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ed}),ob=Bt(ib),sb=Ve({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),ab=Bt(sb),lb=Ve({},Va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cb=Bt(lb),ub=[9,13,27,32],td=In&&"CompositionEvent"in window,oo=null;In&&"documentMode"in document&&(oo=document.documentMode);var db=In&&"TextEvent"in window&&!oo,Dg=In&&(!td||oo&&8<oo&&11>=oo),hf=" ",mf=!1;function Fg(e,t){switch(e){case"keyup":return ub.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qr=!1;function pb(e,t){switch(e){case"compositionend":return Bg(t);case"keypress":return t.which!==32?null:(mf=!0,hf);case"textInput":return e=t.data,e===hf&&mf?null:e;default:return null}}function fb(e,t){if(qr)return e==="compositionend"||!td&&Fg(e,t)?(e=$g(),Ds=Xu=Yn=null,qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dg&&t.locale!=="ko"?null:t.data;default:return null}}var hb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hb[e.type]:t==="textarea"}function Ug(e,t,n,r){vg(r),t=ca(t,"onChange"),0<t.length&&(n=new Zu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var so=null,jo=null;function mb(e){Zg(e,0)}function Wa(e){var t=Gr(e);if(pg(t))return e}function gb(e,t){if(e==="change")return t}var Vg=!1;if(In){var Nl;if(In){var El="oninput"in document;if(!El){var xf=document.createElement("div");xf.setAttribute("oninput","return;"),El=typeof xf.oninput=="function"}Nl=El}else Nl=!1;Vg=Nl&&(!document.documentMode||9<document.documentMode)}function yf(){so&&(so.detachEvent("onpropertychange",Wg),jo=so=null)}function Wg(e){if(e.propertyName==="value"&&Wa(jo)){var t=[];Ug(t,jo,e,Ju(e)),jg(mb,t)}}function xb(e,t,n){e==="focusin"?(yf(),so=t,jo=n,so.attachEvent("onpropertychange",Wg)):e==="focusout"&&yf()}function yb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wa(jo)}function vb(e,t){if(e==="click")return Wa(t)}function bb(e,t){if(e==="input"||e==="change")return Wa(t)}function wb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cn=typeof Object.is=="function"?Object.is:wb;function _o(e,t){if(cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xc.call(t,i)||!cn(e[i],t[i]))return!1}return!0}function vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bf(e,t){var n=vf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vf(n)}}function Hg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qg(){for(var e=window,t=na();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=na(e.document)}return t}function nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function kb(e){var t=qg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(r!==null&&nd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=bf(n,s);var a=bf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jb=In&&"documentMode"in document&&11>=document.documentMode,Jr=null,Ic=null,ao=null,Oc=!1;function wf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oc||Jr==null||Jr!==na(r)||(r=Jr,"selectionStart"in r&&nd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&_o(ao,r)||(ao=r,r=ca(Ic,"onSelect"),0<r.length&&(t=new Zu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jr)))}function xs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},zl={},Jg={};In&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Ha(e){if(zl[e])return zl[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jg)return zl[e]=t[n];return e}var Kg=Ha("animationend"),Gg=Ha("animationiteration"),Yg=Ha("animationstart"),Qg=Ha("transitionend"),Xg=new Map,kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(e,t){Xg.set(e,t),$r(t,[e])}for(var Tl=0;Tl<kf.length;Tl++){var Al=kf[Tl],_b=Al.toLowerCase(),Sb=Al[0].toUpperCase()+Al.slice(1);fr(_b,"on"+Sb)}fr(Kg,"onAnimationEnd");fr(Gg,"onAnimationIteration");fr(Yg,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Qg,"onTransitionEnd");fi("onMouseEnter",["mouseout","mouseover"]);fi("onMouseLeave",["mouseout","mouseover"]);fi("onPointerEnter",["pointerout","pointerover"]);fi("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function jf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,_0(r,t,void 0,e),e.currentTarget=null}function Zg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;jf(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;jf(i,l,u),s=c}}}if(ia)throw e=Pc,ia=!1,Pc=null,e}function Oe(e,t){var n=t[Uc];n===void 0&&(n=t[Uc]=new Set);var r=e+"__bubble";n.has(r)||(ex(t,e,2,!1),n.add(r))}function Pl(e,t,n){var r=0;t&&(r|=4),ex(n,e,r,t)}var ys="_reactListening"+Math.random().toString(36).slice(2);function So(e){if(!e[ys]){e[ys]=!0,ag.forEach(function(n){n!=="selectionchange"&&(Cb.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ys]||(t[ys]=!0,Pl("selectionchange",!1,t))}}function ex(e,t,n,r){switch(Og(t)){case 1:var i=F0;break;case 4:i=B0;break;default:i=Qu}n=i.bind(null,t,n,e),i=void 0,!Ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=wr(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}jg(function(){var u=s,d=Ju(n),p=[];e:{var f=Xg.get(e);if(f!==void 0){var h=Zu,x=e;switch(e){case"keypress":if(Fs(n)===0)break e;case"keydown":case"keyup":h=nb;break;case"focusin":x="focus",h=Cl;break;case"focusout":x="blur",h=Cl;break;case"beforeblur":case"afterblur":h=Cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ob;break;case Kg:case Gg:case Yg:h=J0;break;case Qg:h=ab;break;case"scroll":h=U0;break;case"wheel":h=cb;break;case"copy":case"cut":case"paste":h=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ff}var w=(t&4)!==0,j=!w&&e==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var m=u,y;m!==null;){y=m;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,g!==null&&(k=vo(m,g),k!=null&&w.push(Co(m,k,y)))),j)break;m=m.return}0<w.length&&(f=new h(f,x,null,n,d),p.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==zc&&(x=n.relatedTarget||n.fromElement)&&(wr(x)||x[On]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(x=n.relatedTarget||n.toElement,h=u,x=x?wr(x):null,x!==null&&(j=Dr(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=u),h!==x)){if(w=df,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=ff,k="onPointerLeave",g="onPointerEnter",m="pointer"),j=h==null?f:Gr(h),y=x==null?f:Gr(x),f=new w(k,m+"leave",h,n,d),f.target=j,f.relatedTarget=y,k=null,wr(d)===u&&(w=new w(g,m+"enter",x,n,d),w.target=y,w.relatedTarget=j,k=w),j=k,h&&x)t:{for(w=h,g=x,m=0,y=w;y;y=Br(y))m++;for(y=0,k=g;k;k=Br(k))y++;for(;0<m-y;)w=Br(w),m--;for(;0<y-m;)g=Br(g),y--;for(;m--;){if(w===g||g!==null&&w===g.alternate)break t;w=Br(w),g=Br(g)}w=null}else w=null;h!==null&&_f(p,f,h,w,!1),x!==null&&j!==null&&_f(p,j,x,w,!0)}}e:{if(f=u?Gr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var z=gb;else if(gf(f))if(Vg)z=bb;else{z=yb;var C=xb}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(z=vb);if(z&&(z=z(e,u))){Ug(p,z,n,d);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&_c(f,"number",f.value)}switch(C=u?Gr(u):window,e){case"focusin":(gf(C)||C.contentEditable==="true")&&(Jr=C,Ic=u,ao=null);break;case"focusout":ao=Ic=Jr=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,wf(p,n,d);break;case"selectionchange":if(jb)break;case"keydown":case"keyup":wf(p,n,d)}var A;if(td)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else qr?Fg(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Dg&&n.locale!=="ko"&&(qr||S!=="onCompositionStart"?S==="onCompositionEnd"&&qr&&(A=$g()):(Yn=d,Xu="value"in Yn?Yn.value:Yn.textContent,qr=!0)),C=ca(u,S),0<C.length&&(S=new pf(S,e,null,n,d),p.push({event:S,listeners:C}),A?S.data=A:(A=Bg(n),A!==null&&(S.data=A)))),(A=db?pb(e,n):fb(e,n))&&(u=ca(u,"onBeforeInput"),0<u.length&&(d=new pf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=A))}Zg(p,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ca(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vo(e,n),s!=null&&r.unshift(Co(e,s,i)),s=vo(e,t),s!=null&&r.push(Co(e,s,i))),e=e.return}return r}function Br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _f(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=vo(n,s),c!=null&&a.unshift(Co(n,c,l))):i||(c=vo(n,s),c!=null&&a.push(Co(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Nb=/\r\n?/g,Eb=/\u0000|\uFFFD/g;function Sf(e){return(typeof e=="string"?e:""+e).replace(Nb,`
`).replace(Eb,"")}function vs(e,t,n){if(t=Sf(t),Sf(e)!==t&&n)throw Error(ne(425))}function ua(){}var $c=null,Dc=null;function Fc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,zb=typeof clearTimeout=="function"?clearTimeout:void 0,Cf=typeof Promise=="function"?Promise:void 0,Tb=typeof queueMicrotask=="function"?queueMicrotask:typeof Cf<"u"?function(e){return Cf.resolve(null).then(e).catch(Ab)}:Bc;function Ab(e){setTimeout(function(){throw e})}function Ml(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ko(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ko(t)}function ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),xn="__reactFiber$"+Ei,No="__reactProps$"+Ei,On="__reactContainer$"+Ei,Uc="__reactEvents$"+Ei,Pb="__reactListeners$"+Ei,Lb="__reactHandles$"+Ei;function wr(e){var t=e[xn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[On]||n[xn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nf(e);e!==null;){if(n=e[xn])return n;e=Nf(e)}return t}e=n,n=e.parentNode}return null}function Ko(e){return e=e[xn]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ne(33))}function qa(e){return e[No]||null}var Vc=[],Yr=-1;function hr(e){return{current:e}}function $e(e){0>Yr||(e.current=Vc[Yr],Vc[Yr]=null,Yr--)}function Re(e,t){Yr++,Vc[Yr]=e.current,e.current=t}var dr={},ct=hr(dr),_t=hr(!1),Ar=dr;function hi(e,t){var n=e.type.contextTypes;if(!n)return dr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function St(e){return e=e.childContextTypes,e!=null}function da(){$e(_t),$e(ct)}function Ef(e,t,n){if(ct.current!==dr)throw Error(ne(168));Re(ct,t),Re(_t,n)}function tx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(ne(108,x0(e)||"Unknown",i));return Ve({},n,r)}function pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dr,Ar=ct.current,Re(ct,e),Re(_t,_t.current),!0}function zf(e,t,n){var r=e.stateNode;if(!r)throw Error(ne(169));n?(e=tx(e,t,Ar),r.__reactInternalMemoizedMergedChildContext=e,$e(_t),$e(ct),Re(ct,e)):$e(_t),Re(_t,n)}var Tn=null,Ja=!1,Rl=!1;function nx(e){Tn===null?Tn=[e]:Tn.push(e)}function Mb(e){Ja=!0,nx(e)}function mr(){if(!Rl&&Tn!==null){Rl=!0;var e=0,t=Ae;try{var n=Tn;for(Ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tn=null,Ja=!1}catch(i){throw Tn!==null&&(Tn=Tn.slice(e+1)),Ng(Ku,mr),i}finally{Ae=t,Rl=!1}}return null}var Qr=[],Xr=0,fa=null,ha=0,Vt=[],Wt=0,Pr=null,An=1,Pn="";function yr(e,t){Qr[Xr++]=ha,Qr[Xr++]=fa,fa=e,ha=t}function rx(e,t,n){Vt[Wt++]=An,Vt[Wt++]=Pn,Vt[Wt++]=Pr,Pr=e;var r=An;e=Pn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,An=1<<32-sn(t)+i|n<<i|r,Pn=s+e}else An=1<<s|n<<i|r,Pn=e}function rd(e){e.return!==null&&(yr(e,1),rx(e,1,0))}function id(e){for(;e===fa;)fa=Qr[--Xr],Qr[Xr]=null,ha=Qr[--Xr],Qr[Xr]=null;for(;e===Pr;)Pr=Vt[--Wt],Vt[Wt]=null,Pn=Vt[--Wt],Vt[Wt]=null,An=Vt[--Wt],Vt[Wt]=null}var Ot=null,Mt=null,De=!1,nn=null;function ix(e,t){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Tf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ot=e,Mt=ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ot=e,Mt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pr!==null?{id:An,overflow:Pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ot=e,Mt=null,!0):!1;default:return!1}}function Wc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hc(e){if(De){var t=Mt;if(t){var n=t;if(!Tf(e,t)){if(Wc(e))throw Error(ne(418));t=ir(n.nextSibling);var r=Ot;t&&Tf(e,t)?ix(r,n):(e.flags=e.flags&-4097|2,De=!1,Ot=e)}}else{if(Wc(e))throw Error(ne(418));e.flags=e.flags&-4097|2,De=!1,Ot=e}}}function Af(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ot=e}function bs(e){if(e!==Ot)return!1;if(!De)return Af(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fc(e.type,e.memoizedProps)),t&&(t=Mt)){if(Wc(e))throw ox(),Error(ne(418));for(;t;)ix(e,t),t=ir(t.nextSibling)}if(Af(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ne(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Mt=ir(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Mt=null}}else Mt=Ot?ir(e.stateNode.nextSibling):null;return!0}function ox(){for(var e=Mt;e;)e=ir(e.nextSibling)}function mi(){Mt=Ot=null,De=!1}function od(e){nn===null?nn=[e]:nn.push(e)}var Rb=Bn.ReactCurrentBatchConfig;function Fi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var r=n.stateNode}if(!r)throw Error(ne(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,e))}return e}function ws(e,t){throw e=Object.prototype.toString.call(t),Error(ne(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pf(e){var t=e._init;return t(e._payload)}function sx(e){function t(g,m){if(e){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=lr(g,m),g.index=0,g.sibling=null,g}function s(g,m,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,y,k){return m===null||m.tag!==6?(m=Ul(y,g.mode,k),m.return=g,m):(m=i(m,y),m.return=g,m)}function c(g,m,y,k){var z=y.type;return z===Hr?d(g,m,y.props.children,k,y.key):m!==null&&(m.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Hn&&Pf(z)===m.type)?(k=i(m,y.props),k.ref=Fi(g,m,y),k.return=g,k):(k=Js(y.type,y.key,y.props,null,g.mode,k),k.ref=Fi(g,m,y),k.return=g,k)}function u(g,m,y,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Vl(y,g.mode,k),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function d(g,m,y,k,z){return m===null||m.tag!==7?(m=Cr(y,g.mode,k,z),m.return=g,m):(m=i(m,y),m.return=g,m)}function p(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ul(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case us:return y=Js(m.type,m.key,m.props,null,g.mode,y),y.ref=Fi(g,null,m),y.return=g,y;case Wr:return m=Vl(m,g.mode,y),m.return=g,m;case Hn:var k=m._init;return p(g,k(m._payload),y)}if(Qi(m)||Ri(m))return m=Cr(m,g.mode,y,null),m.return=g,m;ws(g,m)}return null}function f(g,m,y,k){var z=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return z!==null?null:l(g,m,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case us:return y.key===z?c(g,m,y,k):null;case Wr:return y.key===z?u(g,m,y,k):null;case Hn:return z=y._init,f(g,m,z(y._payload),k)}if(Qi(y)||Ri(y))return z!==null?null:d(g,m,y,k,null);ws(g,y)}return null}function h(g,m,y,k,z){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(y)||null,l(m,g,""+k,z);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case us:return g=g.get(k.key===null?y:k.key)||null,c(m,g,k,z);case Wr:return g=g.get(k.key===null?y:k.key)||null,u(m,g,k,z);case Hn:var C=k._init;return h(g,m,y,C(k._payload),z)}if(Qi(k)||Ri(k))return g=g.get(y)||null,d(m,g,k,z,null);ws(m,k)}return null}function x(g,m,y,k){for(var z=null,C=null,A=m,S=m=0,$=null;A!==null&&S<y.length;S++){A.index>S?($=A,A=null):$=A.sibling;var N=f(g,A,y[S],k);if(N===null){A===null&&(A=$);break}e&&A&&N.alternate===null&&t(g,A),m=s(N,m,S),C===null?z=N:C.sibling=N,C=N,A=$}if(S===y.length)return n(g,A),De&&yr(g,S),z;if(A===null){for(;S<y.length;S++)A=p(g,y[S],k),A!==null&&(m=s(A,m,S),C===null?z=A:C.sibling=A,C=A);return De&&yr(g,S),z}for(A=r(g,A);S<y.length;S++)$=h(A,g,S,y[S],k),$!==null&&(e&&$.alternate!==null&&A.delete($.key===null?S:$.key),m=s($,m,S),C===null?z=$:C.sibling=$,C=$);return e&&A.forEach(function(R){return t(g,R)}),De&&yr(g,S),z}function w(g,m,y,k){var z=Ri(y);if(typeof z!="function")throw Error(ne(150));if(y=z.call(y),y==null)throw Error(ne(151));for(var C=z=null,A=m,S=m=0,$=null,N=y.next();A!==null&&!N.done;S++,N=y.next()){A.index>S?($=A,A=null):$=A.sibling;var R=f(g,A,N.value,k);if(R===null){A===null&&(A=$);break}e&&A&&R.alternate===null&&t(g,A),m=s(R,m,S),C===null?z=R:C.sibling=R,C=R,A=$}if(N.done)return n(g,A),De&&yr(g,S),z;if(A===null){for(;!N.done;S++,N=y.next())N=p(g,N.value,k),N!==null&&(m=s(N,m,S),C===null?z=N:C.sibling=N,C=N);return De&&yr(g,S),z}for(A=r(g,A);!N.done;S++,N=y.next())N=h(A,g,S,N.value,k),N!==null&&(e&&N.alternate!==null&&A.delete(N.key===null?S:N.key),m=s(N,m,S),C===null?z=N:C.sibling=N,C=N);return e&&A.forEach(function(L){return t(g,L)}),De&&yr(g,S),z}function j(g,m,y,k){if(typeof y=="object"&&y!==null&&y.type===Hr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case us:e:{for(var z=y.key,C=m;C!==null;){if(C.key===z){if(z=y.type,z===Hr){if(C.tag===7){n(g,C.sibling),m=i(C,y.props.children),m.return=g,g=m;break e}}else if(C.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Hn&&Pf(z)===C.type){n(g,C.sibling),m=i(C,y.props),m.ref=Fi(g,C,y),m.return=g,g=m;break e}n(g,C);break}else t(g,C);C=C.sibling}y.type===Hr?(m=Cr(y.props.children,g.mode,k,y.key),m.return=g,g=m):(k=Js(y.type,y.key,y.props,null,g.mode,k),k.ref=Fi(g,m,y),k.return=g,g=k)}return a(g);case Wr:e:{for(C=y.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Vl(y,g.mode,k),m.return=g,g=m}return a(g);case Hn:return C=y._init,j(g,m,C(y._payload),k)}if(Qi(y))return x(g,m,y,k);if(Ri(y))return w(g,m,y,k);ws(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=Ul(y,g.mode,k),m.return=g,g=m),a(g)):n(g,m)}return j}var gi=sx(!0),ax=sx(!1),ma=hr(null),ga=null,Zr=null,sd=null;function ad(){sd=Zr=ga=null}function ld(e){var t=ma.current;$e(ma),e._currentValue=t}function qc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ai(e,t){ga=e,sd=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(kt=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(sd!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(ga===null)throw Error(ne(308));Zr=e,ga.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var kr=null;function cd(e){kr===null?kr=[e]:kr.push(e)}function lx(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cd(t)):(n.next=i.next,i.next=n),t.interleaved=n,$n(e,r)}function $n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qn=!1;function ud(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function or(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$n(e,n)}return i=r.interleaved,i===null?(t.next=t,cd(r)):(t.next=i.next,i.next=t),r.interleaved=t,$n(e,n)}function Bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gu(e,n)}}function Lf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xa(e,t,n,r){var i=e.updateQueue;qn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(f=t,h=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){p=x.call(h,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,f=typeof x=="function"?x.call(h,p,f):x,f==null)break e;p=Ve({},p,f);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=p):d=d.next=h,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Mr|=a,e.lanes=a,e.memoizedState=p}}function Mf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ne(191,i));i.call(r)}}}var Go={},wn=hr(Go),Eo=hr(Go),zo=hr(Go);function jr(e){if(e===Go)throw Error(ne(174));return e}function dd(e,t){switch(Re(zo,t),Re(Eo,e),Re(wn,Go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cc(t,e)}$e(wn),Re(wn,t)}function xi(){$e(wn),$e(Eo),$e(zo)}function ux(e){jr(zo.current);var t=jr(wn.current),n=Cc(t,e.type);t!==n&&(Re(Eo,e),Re(wn,n))}function pd(e){Eo.current===e&&($e(wn),$e(Eo))}var Be=hr(0);function ya(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function fd(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var Us=Bn.ReactCurrentDispatcher,Ol=Bn.ReactCurrentBatchConfig,Lr=0,Ue=null,Qe=null,tt=null,va=!1,lo=!1,To=0,Ib=0;function st(){throw Error(ne(321))}function hd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!cn(e[n],t[n]))return!1;return!0}function md(e,t,n,r,i,s){if(Lr=s,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Us.current=e===null||e.memoizedState===null?Fb:Bb,e=n(r,i),lo){s=0;do{if(lo=!1,To=0,25<=s)throw Error(ne(301));s+=1,tt=Qe=null,t.updateQueue=null,Us.current=Ub,e=n(r,i)}while(lo)}if(Us.current=ba,t=Qe!==null&&Qe.next!==null,Lr=0,tt=Qe=Ue=null,va=!1,t)throw Error(ne(300));return e}function gd(){var e=To!==0;return To=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Ue.memoizedState=tt=e:tt=tt.next=e,tt}function Qt(){if(Qe===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=tt===null?Ue.memoizedState:tt.next;if(t!==null)tt=t,Qe=e;else{if(e===null)throw Error(ne(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},tt===null?Ue.memoizedState=tt=e:tt=tt.next=e}return tt}function Ao(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=Qt(),n=t.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=e;var r=Qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Lr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ue.lanes|=d,Mr|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,cn(r,t.memoizedState)||(kt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ue.lanes|=s,Mr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Dl(e){var t=Qt(),n=t.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);cn(s,t.memoizedState)||(kt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function dx(){}function px(e,t){var n=Ue,r=Qt(),i=t(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,xd(mx.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Po(9,hx.bind(null,n,r,i,t),void 0,null),nt===null)throw Error(ne(349));Lr&30||fx(n,t,i)}return i}function fx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hx(e,t,n,r){t.value=n,t.getSnapshot=r,gx(t)&&xx(e)}function mx(e,t,n){return n(function(){gx(t)&&xx(e)})}function gx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cn(e,n)}catch{return!0}}function xx(e){var t=$n(e,1);t!==null&&an(t,e,1,-1)}function Rf(e){var t=mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:e},t.queue=e,e=e.dispatch=Db.bind(null,Ue,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yx(){return Qt().memoizedState}function Vs(e,t,n,r){var i=mn();Ue.flags|=e,i.memoizedState=Po(1|t,n,void 0,r===void 0?null:r)}function Ka(e,t,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(Qe!==null){var a=Qe.memoizedState;if(s=a.destroy,r!==null&&hd(r,a.deps)){i.memoizedState=Po(t,n,s,r);return}}Ue.flags|=e,i.memoizedState=Po(1|t,n,s,r)}function If(e,t){return Vs(8390656,8,e,t)}function xd(e,t){return Ka(2048,8,e,t)}function vx(e,t){return Ka(4,2,e,t)}function bx(e,t){return Ka(4,4,e,t)}function wx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kx(e,t,n){return n=n!=null?n.concat([e]):null,Ka(4,4,wx.bind(null,t,e),n)}function yd(){}function jx(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _x(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sx(e,t,n){return Lr&21?(cn(n,t)||(n=Tg(),Ue.lanes|=n,Mr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=n)}function Ob(e,t){var n=Ae;Ae=n!==0&&4>n?n:4,e(!0);var r=Ol.transition;Ol.transition={};try{e(!1),t()}finally{Ae=n,Ol.transition=r}}function Cx(){return Qt().memoizedState}function $b(e,t,n){var r=ar(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nx(e))Ex(t,n);else if(n=lx(e,t,n,r),n!==null){var i=ht();an(n,e,r,i),zx(n,t,r)}}function Db(e,t,n){var r=ar(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nx(e))Ex(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,cn(l,a)){var c=t.interleaved;c===null?(i.next=i,cd(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=lx(e,t,i,r),n!==null&&(i=ht(),an(n,e,r,i),zx(n,t,r))}}function Nx(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function Ex(e,t){lo=va=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gu(e,n)}}var ba={readContext:Yt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Fb={readContext:Yt,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:If,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vs(4194308,4,wx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vs(4,2,e,t)},useMemo:function(e,t){var n=mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$b.bind(null,Ue,e),[r.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:Rf,useDebugValue:yd,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=Rf(!1),t=e[0];return e=Ob.bind(null,e[1]),mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ue,i=mn();if(De){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=t(),nt===null)throw Error(ne(349));Lr&30||fx(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,If(mx.bind(null,r,s,e),[e]),r.flags|=2048,Po(9,hx.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=mn(),t=nt.identifierPrefix;if(De){var n=Pn,r=An;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=To++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ib++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bb={readContext:Yt,useCallback:jx,useContext:Yt,useEffect:xd,useImperativeHandle:kx,useInsertionEffect:vx,useLayoutEffect:bx,useMemo:_x,useReducer:$l,useRef:yx,useState:function(){return $l(Ao)},useDebugValue:yd,useDeferredValue:function(e){var t=Qt();return Sx(t,Qe.memoizedState,e)},useTransition:function(){var e=$l(Ao)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:dx,useSyncExternalStore:px,useId:Cx,unstable_isNewReconciler:!1},Ub={readContext:Yt,useCallback:jx,useContext:Yt,useEffect:xd,useImperativeHandle:kx,useInsertionEffect:vx,useLayoutEffect:bx,useMemo:_x,useReducer:Dl,useRef:yx,useState:function(){return Dl(Ao)},useDebugValue:yd,useDeferredValue:function(e){var t=Qt();return Qe===null?t.memoizedState=e:Sx(t,Qe.memoizedState,e)},useTransition:function(){var e=Dl(Ao)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:dx,useSyncExternalStore:px,useId:Cx,unstable_isNewReconciler:!1};function en(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Jc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ga={isMounted:function(e){return(e=e._reactInternals)?Dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ht(),i=ar(e),s=Mn(r,i);s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(an(t,e,i,r),Bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ht(),i=ar(e),s=Mn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(an(t,e,i,r),Bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ht(),r=ar(e),i=Mn(n,r);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,r),t!==null&&(an(t,e,r,n),Bs(t,e,r))}};function Of(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!_o(n,r)||!_o(i,s):!0}function Tx(e,t,n){var r=!1,i=dr,s=t.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=St(t)?Ar:ct.current,r=t.contextTypes,s=(r=r!=null)?hi(e,i):dr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ga,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function $f(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ga.enqueueReplaceState(t,t.state,null)}function Kc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ud(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=St(t)?Ar:ct.current,i.context=hi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Jc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ga.enqueueReplaceState(i,i.state,null),xa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yi(e,t){try{var n="",r=t;do n+=g0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vb=typeof WeakMap=="function"?WeakMap:Map;function Ax(e,t,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ka||(ka=!0,ou=r),Gc(e,t)},n}function Px(e,t,n){n=Mn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Gc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gc(e,t),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Df(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=rw.bind(null,e,t,n),t.then(e,e))}function Ff(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mn(-1,1),t.tag=2,or(n,t,1))),n.lanes|=1),e)}var Wb=Bn.ReactCurrentOwner,kt=!1;function pt(e,t,n,r){t.child=e===null?ax(t,null,n,r):gi(t,e.child,n,r)}function Uf(e,t,n,r,i){n=n.render;var s=t.ref;return ai(t,i),r=md(e,t,n,r,s,i),n=gd(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dn(e,t,i)):(De&&n&&rd(t),t.flags|=1,pt(e,t,r,i),t.child)}function Vf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Lx(e,t,s,r,i)):(e=Js(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(a,r)&&e.ref===t.ref)return Dn(e,t,i)}return t.flags|=1,e=lr(s,r),e.ref=t.ref,e.return=t,t.child=e}function Lx(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(_o(s,r)&&e.ref===t.ref)if(kt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(kt=!0);else return t.lanes=e.lanes,Dn(e,t,i)}return Yc(e,t,n,r,i)}function Mx(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(ti,At),At|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(ti,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Re(ti,At),At|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Re(ti,At),At|=r;return pt(e,t,i,n),t.child}function Rx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yc(e,t,n,r,i){var s=St(n)?Ar:ct.current;return s=hi(t,s),ai(t,i),n=md(e,t,n,r,s,i),r=gd(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dn(e,t,i)):(De&&r&&rd(t),t.flags|=1,pt(e,t,n,i),t.child)}function Wf(e,t,n,r,i){if(St(n)){var s=!0;pa(t)}else s=!1;if(ai(t,i),t.stateNode===null)Ws(e,t),Tx(t,n,r),Kc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=St(n)?Ar:ct.current,u=hi(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&$f(t,a,r,u),qn=!1;var f=t.memoizedState;a.state=f,xa(t,r,a,i),c=t.memoizedState,l!==r||f!==c||_t.current||qn?(typeof d=="function"&&(Jc(t,n,d,r),c=t.memoizedState),(l=qn||Of(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,cx(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:en(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Yt(c):(c=St(n)?Ar:ct.current,c=hi(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&$f(t,a,r,c),qn=!1,f=t.memoizedState,a.state=f,xa(t,r,a,i);var x=t.memoizedState;l!==p||f!==x||_t.current||qn?(typeof h=="function"&&(Jc(t,n,h,r),x=t.memoizedState),(u=qn||Of(t,n,u,r,f,x,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Qc(e,t,n,r,s,i)}function Qc(e,t,n,r,i,s){Rx(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&zf(t,n,!1),Dn(e,t,s);r=t.stateNode,Wb.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=gi(t,e.child,null,s),t.child=gi(t,null,l,s)):pt(e,t,l,s),t.memoizedState=r.state,i&&zf(t,n,!0),t.child}function Ix(e){var t=e.stateNode;t.pendingContext?Ef(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ef(e,t.context,!1),dd(e,t.containerInfo)}function Hf(e,t,n,r,i){return mi(),od(i),t.flags|=256,pt(e,t,n,r),t.child}var Xc={dehydrated:null,treeContext:null,retryLane:0};function Zc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ox(e,t,n){var r=t.pendingProps,i=Be.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Re(Be,i&1),e===null)return Hc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Xa(a,r,0,null),e=Cr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Zc(n),t.memoizedState=Xc,e):vd(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Hb(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=lr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=lr(l,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Zc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Xc,r}return s=e.child,e=s.sibling,r=lr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function vd(e,t){return t=Xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ks(e,t,n,r){return r!==null&&od(r),gi(t,e.child,null,n),e=vd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hb(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Fl(Error(ne(422))),ks(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Xa({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&gi(t,e.child,null,a),t.child.memoizedState=Zc(a),t.memoizedState=Xc,s);if(!(t.mode&1))return ks(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(ne(419)),r=Fl(s,r,void 0),ks(e,t,a,r)}if(l=(a&e.childLanes)!==0,kt||l){if(r=nt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$n(e,i),an(r,e,i,-1))}return Sd(),r=Fl(Error(ne(421))),ks(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=iw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Mt=ir(i.nextSibling),Ot=t,De=!0,nn=null,e!==null&&(Vt[Wt++]=An,Vt[Wt++]=Pn,Vt[Wt++]=Pr,An=e.id,Pn=e.overflow,Pr=t),t=vd(t,r.children),t.flags|=4096,t)}function qf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qc(e.return,t,n)}function Bl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $x(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(pt(e,t,r.children,n),r=Be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qf(e,n,t);else if(e.tag===19)qf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Re(Be,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ya(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Bl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ya(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Bl(t,!0,n,null,s);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ne(153));if(t.child!==null){for(e=t.child,n=lr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=lr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qb(e,t,n){switch(t.tag){case 3:Ix(t),mi();break;case 5:ux(t);break;case 1:St(t.type)&&pa(t);break;case 4:dd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Re(ma,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Re(Be,Be.current&1),t.flags|=128,null):n&t.child.childLanes?Ox(e,t,n):(Re(Be,Be.current&1),e=Dn(e,t,n),e!==null?e.sibling:null);Re(Be,Be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $x(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Be,Be.current),r)break;return null;case 22:case 23:return t.lanes=0,Mx(e,t,n)}return Dn(e,t,n)}var Dx,eu,Fx,Bx;Dx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eu=function(){};Fx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jr(wn.current);var s=null;switch(n){case"input":i=kc(e,i),r=kc(e,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=Sc(e,i),r=Sc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ua)}Nc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Oe("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Bx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bi(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jb(e,t,n){var r=t.pendingProps;switch(id(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return St(t.type)&&da(),at(t),null;case 3:return r=t.stateNode,xi(),$e(_t),$e(ct),fd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,nn!==null&&(lu(nn),nn=null))),eu(e,t),at(t),null;case 5:pd(t);var i=jr(zo.current);if(n=t.type,e!==null&&t.stateNode!=null)Fx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ne(166));return at(t),null}if(e=jr(wn.current),bs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[xn]=t,r[No]=s,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<Zi.length;i++)Oe(Zi[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":ef(r,s),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Oe("invalid",r);break;case"textarea":nf(r,s),Oe("invalid",r)}Nc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&vs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&vs(r.textContent,l,e),i=["children",""+l]):xo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Oe("scroll",r)}switch(n){case"input":ds(r),tf(r,s,!0);break;case"textarea":ds(r),rf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ua)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[xn]=t,e[No]=r,Dx(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ec(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),i=r;break;case"iframe":case"object":case"embed":Oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zi.length;i++)Oe(Zi[i],e);i=r;break;case"source":Oe("error",e),i=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=r;break;case"details":Oe("toggle",e),i=r;break;case"input":ef(e,r),i=kc(e,r),Oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":nf(e,r),i=Sc(e,r),Oe("invalid",e);break;default:i=r}Nc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?yg(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&gg(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&yo(e,c):typeof c=="number"&&yo(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Oe("scroll",e):c!=null&&Vu(e,s,c,a))}switch(n){case"input":ds(e),tf(e,r,!1);break;case"textarea":ds(e),rf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ur(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ri(e,!!r.multiple,s,!1):r.defaultValue!=null&&ri(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)Bx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ne(166));if(n=jr(zo.current),jr(wn.current),bs(t)){if(r=t.stateNode,n=t.memoizedProps,r[xn]=t,(s=r.nodeValue!==n)&&(e=Ot,e!==null))switch(e.tag){case 3:vs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xn]=t,t.stateNode=r}return at(t),null;case 13:if($e(Be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Mt!==null&&t.mode&1&&!(t.flags&128))ox(),mi(),t.flags|=98560,s=!1;else if(s=bs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(ne(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[xn]=t}else mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),s=!1}else nn!==null&&(lu(nn),nn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?Xe===0&&(Xe=3):Sd())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return xi(),eu(e,t),e===null&&So(t.stateNode.containerInfo),at(t),null;case 10:return ld(t.type._context),at(t),null;case 17:return St(t.type)&&da(),at(t),null;case 19:if($e(Be),s=t.memoizedState,s===null)return at(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Bi(s,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ya(e),a!==null){for(t.flags|=128,Bi(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Re(Be,Be.current&1|2),t.child}e=e.sibling}s.tail!==null&&He()>vi&&(t.flags|=128,r=!0,Bi(s,!1),t.lanes=4194304)}else{if(!r)if(e=ya(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!De)return at(t),null}else 2*He()-s.renderingStartTime>vi&&n!==1073741824&&(t.flags|=128,r=!0,Bi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=He(),t.sibling=null,n=Be.current,Re(Be,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return _d(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?At&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(ne(156,t.tag))}function Kb(e,t){switch(id(t),t.tag){case 1:return St(t.type)&&da(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xi(),$e(_t),$e(ct),fd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pd(t),null;case 13:if($e(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ne(340));mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Be),null;case 4:return xi(),null;case 10:return ld(t.type._context),null;case 22:case 23:return _d(),null;case 24:return null;default:return null}}var js=!1,lt=!1,Gb=typeof WeakSet=="function"?WeakSet:Set,de=null;function ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function tu(e,t,n){try{n()}catch(r){We(e,t,r)}}var Jf=!1;function Yb(e,t){if($c=aa,e=qg(),nd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dc={focusedElem:e,selectionRange:n},aa=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){t=de;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,j=x.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:en(t.type,w),j);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(k){We(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}return x=Jf,Jf=!1,x}function co(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&tu(t,n,s)}i=i.next}while(i!==r)}}function Ya(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ux(e){var t=e.alternate;t!==null&&(e.alternate=null,Ux(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xn],delete t[No],delete t[Uc],delete t[Pb],delete t[Lb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vx(e){return e.tag===5||e.tag===3||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ru(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ua));else if(r!==4&&(e=e.child,e!==null))for(ru(e,t,n),e=e.sibling;e!==null;)ru(e,t,n),e=e.sibling}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}var rt=null,tn=!1;function Vn(e,t,n){for(n=n.child;n!==null;)Wx(e,t,n),n=n.sibling}function Wx(e,t,n){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Ua,n)}catch{}switch(n.tag){case 5:lt||ei(n,t);case 6:var r=rt,i=tn;rt=null,Vn(e,t,n),rt=r,tn=i,rt!==null&&(tn?(e=rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(tn?(e=rt,n=n.stateNode,e.nodeType===8?Ml(e.parentNode,n):e.nodeType===1&&Ml(e,n),ko(e)):Ml(rt,n.stateNode));break;case 4:r=rt,i=tn,rt=n.stateNode.containerInfo,tn=!0,Vn(e,t,n),rt=r,tn=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&tu(n,t,a),i=i.next}while(i!==r)}Vn(e,t,n);break;case 1:if(!lt&&(ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){We(n,t,l)}Vn(e,t,n);break;case 21:Vn(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Vn(e,t,n),lt=r):Vn(e,t,n);break;default:Vn(e,t,n)}}function Gf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gb),t.forEach(function(r){var i=ow.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,tn=!1;break e;case 3:rt=l.stateNode.containerInfo,tn=!0;break e;case 4:rt=l.stateNode.containerInfo,tn=!0;break e}l=l.return}if(rt===null)throw Error(ne(160));Wx(s,a,i),rt=null,tn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){We(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hx(t,e),t=t.sibling}function Hx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zt(t,e),hn(e),r&4){try{co(3,e,e.return),Ya(3,e)}catch(w){We(e,e.return,w)}try{co(5,e,e.return)}catch(w){We(e,e.return,w)}}break;case 1:Zt(t,e),hn(e),r&512&&n!==null&&ei(n,n.return);break;case 5:if(Zt(t,e),hn(e),r&512&&n!==null&&ei(n,n.return),e.flags&32){var i=e.stateNode;try{yo(i,"")}catch(w){We(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&fg(i,s),Ec(l,a);var u=Ec(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?yg(i,p):d==="dangerouslySetInnerHTML"?gg(i,p):d==="children"?yo(i,p):Vu(i,d,p,u)}switch(l){case"input":jc(i,s);break;case"textarea":hg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?ri(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?ri(i,!!s.multiple,s.defaultValue,!0):ri(i,!!s.multiple,s.multiple?[]:"",!1))}i[No]=s}catch(w){We(e,e.return,w)}}break;case 6:if(Zt(t,e),hn(e),r&4){if(e.stateNode===null)throw Error(ne(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(w){We(e,e.return,w)}}break;case 3:if(Zt(t,e),hn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(t.containerInfo)}catch(w){We(e,e.return,w)}break;case 4:Zt(t,e),hn(e);break;case 13:Zt(t,e),hn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kd=He())),r&4&&Gf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(u=lt)||d,Zt(t,e),lt=u):Zt(t,e),hn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(de=e,d=e.child;d!==null;){for(p=de=d;de!==null;){switch(f=de,h=f.child,f.tag){case 0:case 11:case 14:case 15:co(4,f,f.return);break;case 1:ei(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){We(r,n,w)}}break;case 5:ei(f,f.return);break;case 22:if(f.memoizedState!==null){Qf(p);continue}}h!==null?(h.return=f,de=h):Qf(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=xg("display",a))}catch(w){We(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){We(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Zt(t,e),hn(e),r&4&&Gf(e);break;case 21:break;default:Zt(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vx(n)){var r=n;break e}n=n.return}throw Error(ne(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yo(i,""),r.flags&=-33);var s=Kf(e);iu(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Kf(e);ru(e,l,a);break;default:throw Error(ne(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qb(e,t,n){de=e,qx(e)}function qx(e,t,n){for(var r=(e.mode&1)!==0;de!==null;){var i=de,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||js;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||lt;l=js;var u=lt;if(js=a,(lt=c)&&!u)for(de=i;de!==null;)a=de,c=a.child,a.tag===22&&a.memoizedState!==null?Xf(i):c!==null?(c.return=a,de=c):Xf(i);for(;s!==null;)de=s,qx(s),s=s.sibling;de=i,js=l,lt=u}Yf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,de=s):Yf(e)}}function Yf(e){for(;de!==null;){var t=de;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Ya(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:en(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Mf(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mf(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ko(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}lt||t.flags&512&&nu(t)}catch(f){We(t,t.return,f)}}if(t===e){de=null;break}if(n=t.sibling,n!==null){n.return=t.return,de=n;break}de=t.return}}function Qf(e){for(;de!==null;){var t=de;if(t===e){de=null;break}var n=t.sibling;if(n!==null){n.return=t.return,de=n;break}de=t.return}}function Xf(e){for(;de!==null;){var t=de;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ya(4,t)}catch(c){We(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){We(t,i,c)}}var s=t.return;try{nu(t)}catch(c){We(t,s,c)}break;case 5:var a=t.return;try{nu(t)}catch(c){We(t,a,c)}}}catch(c){We(t,t.return,c)}if(t===e){de=null;break}var l=t.sibling;if(l!==null){l.return=t.return,de=l;break}de=t.return}}var Xb=Math.ceil,wa=Bn.ReactCurrentDispatcher,bd=Bn.ReactCurrentOwner,Gt=Bn.ReactCurrentBatchConfig,Ne=0,nt=null,Ge=null,it=0,At=0,ti=hr(0),Xe=0,Lo=null,Mr=0,Qa=0,wd=0,uo=null,wt=null,kd=0,vi=1/0,En=null,ka=!1,ou=null,sr=null,_s=!1,Qn=null,ja=0,po=0,su=null,Hs=-1,qs=0;function ht(){return Ne&6?He():Hs!==-1?Hs:Hs=He()}function ar(e){return e.mode&1?Ne&2&&it!==0?it&-it:Rb.transition!==null?(qs===0&&(qs=Tg()),qs):(e=Ae,e!==0||(e=window.event,e=e===void 0?16:Og(e.type)),e):1}function an(e,t,n,r){if(50<po)throw po=0,su=null,Error(ne(185));qo(e,n,r),(!(Ne&2)||e!==nt)&&(e===nt&&(!(Ne&2)&&(Qa|=n),Xe===4&&Gn(e,it)),Ct(e,r),n===1&&Ne===0&&!(t.mode&1)&&(vi=He()+500,Ja&&mr()))}function Ct(e,t){var n=e.callbackNode;R0(e,t);var r=sa(e,e===nt?it:0);if(r===0)n!==null&&af(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&af(n),t===1)e.tag===0?Mb(Zf.bind(null,e)):nx(Zf.bind(null,e)),Tb(function(){!(Ne&6)&&mr()}),n=null;else{switch(Ag(r)){case 1:n=Ku;break;case 4:n=Eg;break;case 16:n=oa;break;case 536870912:n=zg;break;default:n=oa}n=ey(n,Jx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jx(e,t){if(Hs=-1,qs=0,Ne&6)throw Error(ne(327));var n=e.callbackNode;if(li()&&e.callbackNode!==n)return null;var r=sa(e,e===nt?it:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_a(e,r);else{t=r;var i=Ne;Ne|=2;var s=Gx();(nt!==e||it!==t)&&(En=null,vi=He()+500,Sr(e,t));do try{tw();break}catch(l){Kx(e,l)}while(!0);ad(),wa.current=s,Ne=i,Ge!==null?t=0:(nt=null,it=0,t=Xe)}if(t!==0){if(t===2&&(i=Lc(e),i!==0&&(r=i,t=au(e,i))),t===1)throw n=Lo,Sr(e,0),Gn(e,r),Ct(e,He()),n;if(t===6)Gn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Zb(i)&&(t=_a(e,r),t===2&&(s=Lc(e),s!==0&&(r=s,t=au(e,s))),t===1))throw n=Lo,Sr(e,0),Gn(e,r),Ct(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ne(345));case 2:vr(e,wt,En);break;case 3:if(Gn(e,r),(r&130023424)===r&&(t=kd+500-He(),10<t)){if(sa(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ht(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bc(vr.bind(null,e,wt,En),t);break}vr(e,wt,En);break;case 4:if(Gn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-sn(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xb(r/1960))-r,10<r){e.timeoutHandle=Bc(vr.bind(null,e,wt,En),r);break}vr(e,wt,En);break;case 5:vr(e,wt,En);break;default:throw Error(ne(329))}}}return Ct(e,He()),e.callbackNode===n?Jx.bind(null,e):null}function au(e,t){var n=uo;return e.current.memoizedState.isDehydrated&&(Sr(e,t).flags|=256),e=_a(e,t),e!==2&&(t=wt,wt=n,t!==null&&lu(t)),e}function lu(e){wt===null?wt=e:wt.push.apply(wt,e)}function Zb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Gn(e,t){for(t&=~wd,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function Zf(e){if(Ne&6)throw Error(ne(327));li();var t=sa(e,0);if(!(t&1))return Ct(e,He()),null;var n=_a(e,t);if(e.tag!==0&&n===2){var r=Lc(e);r!==0&&(t=r,n=au(e,r))}if(n===1)throw n=Lo,Sr(e,0),Gn(e,t),Ct(e,He()),n;if(n===6)throw Error(ne(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vr(e,wt,En),Ct(e,He()),null}function jd(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(vi=He()+500,Ja&&mr())}}function Rr(e){Qn!==null&&Qn.tag===0&&!(Ne&6)&&li();var t=Ne;Ne|=1;var n=Gt.transition,r=Ae;try{if(Gt.transition=null,Ae=1,e)return e()}finally{Ae=r,Gt.transition=n,Ne=t,!(Ne&6)&&mr()}}function _d(){At=ti.current,$e(ti)}function Sr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zb(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&da();break;case 3:xi(),$e(_t),$e(ct),fd();break;case 5:pd(r);break;case 4:xi();break;case 13:$e(Be);break;case 19:$e(Be);break;case 10:ld(r.type._context);break;case 22:case 23:_d()}n=n.return}if(nt=e,Ge=e=lr(e.current,null),it=At=t,Xe=0,Lo=null,wd=Qa=Mr=0,wt=uo=null,kr!==null){for(t=0;t<kr.length;t++)if(n=kr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}kr=null}return e}function Kx(e,t){do{var n=Ge;try{if(ad(),Us.current=ba,va){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}va=!1}if(Lr=0,tt=Qe=Ue=null,lo=!1,To=0,bd.current=null,n===null||n.return===null){Xe=1,Lo=t,Ge=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=it,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Ff(a);if(h!==null){h.flags&=-257,Bf(h,a,l,s,t),h.mode&1&&Df(s,u,t),t=h,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){Df(s,u,t),Sd();break e}c=Error(ne(426))}}else if(De&&l.mode&1){var j=Ff(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Bf(j,a,l,s,t),od(yi(c,l));break e}}s=c=yi(c,l),Xe!==4&&(Xe=2),uo===null?uo=[s]:uo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Ax(s,c,t);Lf(s,g);break e;case 1:l=c;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(sr===null||!sr.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var k=Px(s,l,t);Lf(s,k);break e}}s=s.return}while(s!==null)}Qx(n)}catch(z){t=z,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function Gx(){var e=wa.current;return wa.current=ba,e===null?ba:e}function Sd(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),nt===null||!(Mr&268435455)&&!(Qa&268435455)||Gn(nt,it)}function _a(e,t){var n=Ne;Ne|=2;var r=Gx();(nt!==e||it!==t)&&(En=null,Sr(e,t));do try{ew();break}catch(i){Kx(e,i)}while(!0);if(ad(),Ne=n,wa.current=r,Ge!==null)throw Error(ne(261));return nt=null,it=0,Xe}function ew(){for(;Ge!==null;)Yx(Ge)}function tw(){for(;Ge!==null&&!C0();)Yx(Ge)}function Yx(e){var t=Zx(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?Qx(e):Ge=t,bd.current=null}function Qx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Kb(n,t),n!==null){n.flags&=32767,Ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ge=null;return}}else if(n=Jb(n,t,At),n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Xe===0&&(Xe=5)}function vr(e,t,n){var r=Ae,i=Gt.transition;try{Gt.transition=null,Ae=1,nw(e,t,n,r)}finally{Gt.transition=i,Ae=r}return null}function nw(e,t,n,r){do li();while(Qn!==null);if(Ne&6)throw Error(ne(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ne(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(I0(e,s),e===nt&&(Ge=nt=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_s||(_s=!0,ey(oa,function(){return li(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gt.transition,Gt.transition=null;var a=Ae;Ae=1;var l=Ne;Ne|=4,bd.current=null,Yb(e,n),Hx(n,e),kb(Dc),aa=!!$c,Dc=$c=null,e.current=n,Qb(n),N0(),Ne=l,Ae=a,Gt.transition=s}else e.current=n;if(_s&&(_s=!1,Qn=e,ja=i),s=e.pendingLanes,s===0&&(sr=null),T0(n.stateNode),Ct(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ka)throw ka=!1,e=ou,ou=null,e;return ja&1&&e.tag!==0&&li(),s=e.pendingLanes,s&1?e===su?po++:(po=0,su=e):po=0,mr(),null}function li(){if(Qn!==null){var e=Ag(ja),t=Gt.transition,n=Ae;try{if(Gt.transition=null,Ae=16>e?16:e,Qn===null)var r=!1;else{if(e=Qn,Qn=null,ja=0,Ne&6)throw Error(ne(331));var i=Ne;for(Ne|=4,de=e.current;de!==null;){var s=de,a=s.child;if(de.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(de=u;de!==null;){var d=de;switch(d.tag){case 0:case 11:case 15:co(8,d,s)}var p=d.child;if(p!==null)p.return=d,de=p;else for(;de!==null;){d=de;var f=d.sibling,h=d.return;if(Ux(d),d===u){de=null;break}if(f!==null){f.return=h,de=f;break}de=h}}}var x=s.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}de=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,de=a;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,de=g;break e}de=s.return}}var m=e.current;for(de=m;de!==null;){a=de;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,de=y;else e:for(a=m;de!==null;){if(l=de,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ya(9,l)}}catch(z){We(l,l.return,z)}if(l===a){de=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,de=k;break e}de=l.return}}if(Ne=i,mr(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Ua,e)}catch{}r=!0}return r}finally{Ae=n,Gt.transition=t}}return!1}function eh(e,t,n){t=yi(n,t),t=Ax(e,t,1),e=or(e,t,1),t=ht(),e!==null&&(qo(e,1,t),Ct(e,t))}function We(e,t,n){if(e.tag===3)eh(e,e,n);else for(;t!==null;){if(t.tag===3){eh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){e=yi(n,e),e=Px(t,e,1),t=or(t,e,1),e=ht(),t!==null&&(qo(t,1,e),Ct(t,e));break}}t=t.return}}function rw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&n,nt===e&&(it&n)===n&&(Xe===4||Xe===3&&(it&130023424)===it&&500>He()-kd?Sr(e,0):wd|=n),Ct(e,t)}function Xx(e,t){t===0&&(e.mode&1?(t=hs,hs<<=1,!(hs&130023424)&&(hs=4194304)):t=1);var n=ht();e=$n(e,t),e!==null&&(qo(e,t,n),Ct(e,n))}function iw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xx(e,n)}function ow(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ne(314))}r!==null&&r.delete(t),Xx(e,n)}var Zx;Zx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return kt=!1,qb(e,t,n);kt=!!(e.flags&131072)}else kt=!1,De&&t.flags&1048576&&rx(t,ha,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ws(e,t),e=t.pendingProps;var i=hi(t,ct.current);ai(t,n),i=md(null,t,r,e,i,n);var s=gd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(s=!0,pa(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ud(t),i.updater=Ga,t.stateNode=i,i._reactInternals=t,Kc(t,r,e,n),t=Qc(null,t,r,!0,s,n)):(t.tag=0,De&&s&&rd(t),pt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=aw(r),e=en(r,e),i){case 0:t=Yc(null,t,r,e,n);break e;case 1:t=Wf(null,t,r,e,n);break e;case 11:t=Uf(null,t,r,e,n);break e;case 14:t=Vf(null,t,r,en(r.type,e),n);break e}throw Error(ne(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Yc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Wf(e,t,r,i,n);case 3:e:{if(Ix(t),e===null)throw Error(ne(387));r=t.pendingProps,s=t.memoizedState,i=s.element,cx(e,t),xa(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=yi(Error(ne(423)),t),t=Hf(e,t,r,n,i);break e}else if(r!==i){i=yi(Error(ne(424)),t),t=Hf(e,t,r,n,i);break e}else for(Mt=ir(t.stateNode.containerInfo.firstChild),Ot=t,De=!0,nn=null,n=ax(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===i){t=Dn(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return ux(t),e===null&&Hc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Fc(r,i)?a=null:s!==null&&Fc(r,s)&&(t.flags|=32),Rx(e,t),pt(e,t,a,n),t.child;case 6:return e===null&&Hc(t),null;case 13:return Ox(e,t,n);case 4:return dd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gi(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Uf(e,t,r,i,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Re(ma,r._currentValue),r._currentValue=a,s!==null)if(cn(s.value,a)){if(s.children===i.children&&!_t.current){t=Dn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Mn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),qc(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),qc(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}pt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ai(t,n),i=Yt(i),r=r(i),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,i=en(r,t.pendingProps),i=en(r.type,i),Vf(e,t,r,i,n);case 15:return Lx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:en(r,i),Ws(e,t),t.tag=1,St(r)?(e=!0,pa(t)):e=!1,ai(t,n),Tx(t,r,i),Kc(t,r,i,n),Qc(null,t,r,!0,e,n);case 19:return $x(e,t,n);case 22:return Mx(e,t,n)}throw Error(ne(156,t.tag))};function ey(e,t){return Ng(e,t)}function sw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(e,t,n,r){return new sw(e,t,n,r)}function Cd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aw(e){if(typeof e=="function")return Cd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hu)return 11;if(e===qu)return 14}return 2}function lr(e,t){var n=e.alternate;return n===null?(n=Jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Js(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Cd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Hr:return Cr(n.children,i,s,t);case Wu:a=8,i|=8;break;case yc:return e=Jt(12,n,t,i|2),e.elementType=yc,e.lanes=s,e;case vc:return e=Jt(13,n,t,i),e.elementType=vc,e.lanes=s,e;case bc:return e=Jt(19,n,t,i),e.elementType=bc,e.lanes=s,e;case ug:return Xa(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lg:a=10;break e;case cg:a=9;break e;case Hu:a=11;break e;case qu:a=14;break e;case Hn:a=16,r=null;break e}throw Error(ne(130,e==null?e:typeof e,""))}return t=Jt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Cr(e,t,n,r){return e=Jt(7,e,r,t),e.lanes=n,e}function Xa(e,t,n,r){return e=Jt(22,e,r,t),e.elementType=ug,e.lanes=n,e.stateNode={isHidden:!1},e}function Ul(e,t,n){return e=Jt(6,e,null,t),e.lanes=n,e}function Vl(e,t,n){return t=Jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nd(e,t,n,r,i,s,a,l,c){return e=new lw(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Jt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ud(s),e}function cw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ty(e){if(!e)return dr;e=e._reactInternals;e:{if(Dr(e)!==e||e.tag!==1)throw Error(ne(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ne(171))}if(e.tag===1){var n=e.type;if(St(n))return tx(e,n,t)}return t}function ny(e,t,n,r,i,s,a,l,c){return e=Nd(n,r,!0,e,i,s,a,l,c),e.context=ty(null),n=e.current,r=ht(),i=ar(n),s=Mn(r,i),s.callback=t??null,or(n,s,i),e.current.lanes=i,qo(e,i,r),Ct(e,r),e}function Za(e,t,n,r){var i=t.current,s=ht(),a=ar(i);return n=ty(n),t.context===null?t.context=n:t.pendingContext=n,t=Mn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=or(i,t,a),e!==null&&(an(e,i,a,s),Bs(e,i,a)),a}function Sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function th(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ed(e,t){th(e,t),(e=e.alternate)&&th(e,t)}function uw(){return null}var ry=typeof reportError=="function"?reportError:function(e){console.error(e)};function zd(e){this._internalRoot=e}el.prototype.render=zd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ne(409));Za(e,t,null,null)};el.prototype.unmount=zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rr(function(){Za(null,e,null,null)}),t[On]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kn.length&&t!==0&&t<Kn[n].priority;n++);Kn.splice(n,0,e),n===0&&Ig(e)}};function Td(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nh(){}function dw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Sa(a);s.call(u)}}var a=ny(t,r,e,0,null,!1,!1,"",nh);return e._reactRootContainer=a,e[On]=a.current,So(e.nodeType===8?e.parentNode:e),Rr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Sa(c);l.call(u)}}var c=Nd(e,0,!1,null,null,!1,!1,"",nh);return e._reactRootContainer=c,e[On]=c.current,So(e.nodeType===8?e.parentNode:e),Rr(function(){Za(t,c,n,r)}),c}function nl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Sa(a);l.call(c)}}Za(t,a,e,i)}else a=dw(n,t,e,i,r);return Sa(a)}Pg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xi(t.pendingLanes);n!==0&&(Gu(t,n|1),Ct(t,He()),!(Ne&6)&&(vi=He()+500,mr()))}break;case 13:Rr(function(){var r=$n(e,1);if(r!==null){var i=ht();an(r,e,1,i)}}),Ed(e,1)}};Yu=function(e){if(e.tag===13){var t=$n(e,134217728);if(t!==null){var n=ht();an(t,e,134217728,n)}Ed(e,134217728)}};Lg=function(e){if(e.tag===13){var t=ar(e),n=$n(e,t);if(n!==null){var r=ht();an(n,e,t,r)}Ed(e,t)}};Mg=function(){return Ae};Rg=function(e,t){var n=Ae;try{return Ae=e,t()}finally{Ae=n}};Tc=function(e,t,n){switch(t){case"input":if(jc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=qa(r);if(!i)throw Error(ne(90));pg(r),jc(r,i)}}}break;case"textarea":hg(e,n);break;case"select":t=n.value,t!=null&&ri(e,!!n.multiple,t,!1)}};wg=jd;kg=Rr;var pw={usingClientEntryPoint:!1,Events:[Ko,Gr,qa,vg,bg,jd]},Ui={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fw={bundleType:Ui.bundleType,version:Ui.version,rendererPackageName:Ui.rendererPackageName,rendererConfig:Ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sg(e),e===null?null:e.stateNode},findFiberByHostInstance:Ui.findFiberByHostInstance||uw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{Ua=Ss.inject(fw),bn=Ss}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Td(t))throw Error(ne(200));return cw(e,t,null,n)};Ft.createRoot=function(e,t){if(!Td(e))throw Error(ne(299));var n=!1,r="",i=ry;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nd(e,1,!1,null,null,n,!1,r,i),e[On]=t.current,So(e.nodeType===8?e.parentNode:e),new zd(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ne(188)):(e=Object.keys(e).join(","),Error(ne(268,e)));return e=Sg(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return Rr(e)};Ft.hydrate=function(e,t,n){if(!tl(t))throw Error(ne(200));return nl(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!Td(e))throw Error(ne(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=ry;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ny(t,null,e,1,n??null,i,!1,s,a),e[On]=t.current,So(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new el(t)};Ft.render=function(e,t,n){if(!tl(t))throw Error(ne(200));return nl(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!tl(e))throw Error(ne(40));return e._reactRootContainer?(Rr(function(){nl(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1};Ft.unstable_batchedUpdates=jd;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!tl(n))throw Error(ne(200));if(e==null||e._reactInternals===void 0)throw Error(ne(38));return nl(e,t,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function iy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iy)}catch(e){console.error(e)}}iy(),ig.exports=Ft;var oy=ig.exports,rh=oy;gc.createRoot=rh.createRoot,gc.hydrateRoot=rh.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mo.apply(this,arguments)}var Xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xn||(Xn={}));const ih="popstate";function hw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return cu("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:sy(i)}return gw(t,n,null,e)}function Ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ad(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mw(){return Math.random().toString(36).substr(2,8)}function oh(e,t){return{usr:e.state,key:e.key,idx:t}}function cu(e,t,n,r){return n===void 0&&(n=null),Mo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zi(t):t,{state:n,key:t&&t.key||r||mw()})}function sy(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function gw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Xn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Mo({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=Xn.Pop;let j=d(),g=j==null?null:j-u;u=j,c&&c({action:l,location:w.location,delta:g})}function f(j,g){l=Xn.Push;let m=cu(w.location,j,g);u=d()+1;let y=oh(m,u),k=w.createHref(m);try{a.pushState(y,"",k)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(k)}s&&c&&c({action:l,location:w.location,delta:1})}function h(j,g){l=Xn.Replace;let m=cu(w.location,j,g);u=d();let y=oh(m,u),k=w.createHref(m);a.replaceState(y,"",k),s&&c&&c({action:l,location:w.location,delta:0})}function x(j){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof j=="string"?j:sy(j);return m=m.replace(/ $/,"%20"),Ye(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let w={get action(){return l},get location(){return e(i,a)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(ih,p),c=j,()=>{i.removeEventListener(ih,p),c=null}},createHref(j){return t(i,j)},createURL:x,encodeLocation(j){let g=x(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:h,go(j){return a.go(j)}};return w}var sh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sh||(sh={}));function xw(e,t,n){return n===void 0&&(n="/"),yw(e,t,n)}function yw(e,t,n,r){let i=typeof t=="string"?zi(t):t,s=cy(i.pathname||"/",n);if(s==null)return null;let a=ay(e);vw(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Aw(s);l=Ew(a[c],u)}return l}function ay(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(Ye(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Nr([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ay(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Cw(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of ly(s.path))i(s,a,c)}),t}function ly(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=ly(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function vw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Nw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bw=/^:[\w-]+$/,ww=3,kw=2,jw=1,_w=10,Sw=-2,ah=e=>e==="*";function Cw(e,t){let n=e.split("/"),r=n.length;return n.some(ah)&&(r+=Sw),t&&(r+=kw),n.filter(i=>!ah(i)).reduce((i,s)=>i+(bw.test(s)?ww:s===""?jw:_w),r)}function Nw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ew(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=zw({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Nr([s,p.pathname]),pathnameBase:Iw(Nr([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=Nr([s,p.pathnameBase]))}return a}function zw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Tw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let w=l[p]||"";a=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const x=l[p];return h&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Tw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ad(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Aw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ad(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function cy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Pw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lw=e=>Pw.test(e);function Mw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zi(e):e,s;if(n)if(Lw(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Ad(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=lh(n.substring(1),"/"):s=lh(n,t)}else s=t;return{pathname:s,search:Ow(r),hash:$w(i)}}function lh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function uy(e,t){let n=Rw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function dy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zi(e):(i=Mo({},e),Ye(!i.pathname||!i.pathname.includes("?"),Wl("?","pathname","search",i)),Ye(!i.pathname||!i.pathname.includes("#"),Wl("#","pathname","hash",i)),Ye(!i.search||!i.search.includes("#"),Wl("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=Mw(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Nr=e=>e.join("/").replace(/\/\/+/g,"/"),Iw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ow=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$w=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Dw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const py=["post","put","patch","delete"];new Set(py);const Fw=["get",...py];new Set(Fw);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}const Pd=_.createContext(null),Bw=_.createContext(null),Yo=_.createContext(null),rl=_.createContext(null),gr=_.createContext({outlet:null,matches:[],isDataRoute:!1}),fy=_.createContext(null);function Qo(){return _.useContext(rl)!=null}function Ld(){return Qo()||Ye(!1),_.useContext(rl).location}function hy(e){_.useContext(Yo).static||_.useLayoutEffect(e)}function Md(){let{isDataRoute:e}=_.useContext(gr);return e?tk():Uw()}function Uw(){Qo()||Ye(!1);let e=_.useContext(Pd),{basename:t,future:n,navigator:r}=_.useContext(Yo),{matches:i}=_.useContext(gr),{pathname:s}=Ld(),a=JSON.stringify(uy(i,n.v7_relativeSplatPath)),l=_.useRef(!1);return hy(()=>{l.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=dy(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Nr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function Vw(){let{matches:e}=_.useContext(gr),t=e[e.length-1];return t?t.params:{}}function Ww(e,t){return Hw(e,t)}function Hw(e,t,n,r){Qo()||Ye(!1);let{navigator:i}=_.useContext(Yo),{matches:s}=_.useContext(gr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Ld(),d;if(t){var p;let j=typeof t=="string"?zi(t):t;c==="/"||(p=j.pathname)!=null&&p.startsWith(c)||Ye(!1),d=j}else d=u;let f=d.pathname||"/",h=f;if(c!=="/"){let j=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(j.length).join("/")}let x=xw(e,{pathname:h}),w=Yw(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Nr([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Nr([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),s,n,r);return t&&w?_.createElement(rl.Provider,{value:{location:Ro({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Xn.Pop}},w):w}function qw(){let e=ek(),t=Dw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const Jw=_.createElement(qw,null);class Kw extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(gr.Provider,{value:this.props.routeContext},_.createElement(fy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gw(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Pd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(gr.Provider,{value:t},r)}function Yw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ye(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:h}=n,x=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||x){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let h,x=!1,w=null,j=null;n&&(h=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||Jw,c&&(u<0&&f===0?(nk("route-fallback"),x=!0,j=null):u===f&&(x=!0,j=p.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,f+1)),m=()=>{let y;return h?y=w:x?y=j:p.route.Component?y=_.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,_.createElement(Gw,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?_.createElement(Kw,{location:n.location,revalidation:n.revalidation,component:w,error:h,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var my=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(my||{}),gy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(gy||{});function Qw(e){let t=_.useContext(Pd);return t||Ye(!1),t}function Xw(e){let t=_.useContext(Bw);return t||Ye(!1),t}function Zw(e){let t=_.useContext(gr);return t||Ye(!1),t}function xy(e){let t=Zw(),n=t.matches[t.matches.length-1];return n.route.id||Ye(!1),n.route.id}function ek(){var e;let t=_.useContext(fy),n=Xw(),r=xy();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function tk(){let{router:e}=Qw(my.UseNavigateStable),t=xy(gy.UseNavigateStable),n=_.useRef(!1);return hy(()=>{n.current=!0}),_.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ro({fromRouteId:t},s)))},[e,t])}const ch={};function nk(e,t,n){ch[e]||(ch[e]=!0)}function rk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ik(e){let{to:t,replace:n,state:r,relative:i}=e;Qo()||Ye(!1);let{future:s,static:a}=_.useContext(Yo),{matches:l}=_.useContext(gr),{pathname:c}=Ld(),u=Md(),d=dy(t,uy(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return _.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function Vr(e){Ye(!1)}function ok(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:a=!1,future:l}=e;Qo()&&Ye(!1);let c=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:c,navigator:s,static:a,future:Ro({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=zi(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:x="default"}=r,w=_.useMemo(()=>{let j=cy(d,c);return j==null?null:{location:{pathname:j,search:p,hash:f,state:h,key:x},navigationType:i}},[c,d,p,f,h,x,i]);return w==null?null:_.createElement(Yo.Provider,{value:u},_.createElement(rl.Provider,{children:n,value:w}))}function sk(e){let{children:t,location:n}=e;return Ww(uu(t),n)}new Promise(()=>{});function uu(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let s=[...t,i];if(r.type===_.Fragment){n.push.apply(n,uu(r.props.children,s));return}r.type!==Vr&&Ye(!1),!r.props.index||!r.props.children||Ye(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=uu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ak="6";try{window.__reactRouterVersion=ak}catch{}const lk="startTransition",uh=r0[lk];function ck(e){let{basename:t,children:n,future:r,window:i}=e,s=_.useRef();s.current==null&&(s.current=hw({window:i,v5Compat:!0}));let a=s.current,[l,c]=_.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=_.useCallback(p=>{u&&uh?uh(()=>c(p)):c(p)},[c,u]);return _.useLayoutEffect(()=>a.listen(d),[a,d]),_.useEffect(()=>rk(r),[r]),_.createElement(ok,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var dh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(dh||(dh={}));var ph;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ph||(ph={}));const uk={},fh=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const h=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(x=>x(t,h))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(uk?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},dk=e=>e?fh(e):fh;var yy={exports:{}},vy={},by={exports:{}},wy={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=_;function pk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var fk=typeof Object.is=="function"?Object.is:pk,hk=bi.useState,mk=bi.useEffect,gk=bi.useLayoutEffect,xk=bi.useDebugValue;function yk(e,t){var n=t(),r=hk({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return gk(function(){i.value=n,i.getSnapshot=t,Hl(i)&&s({inst:i})},[e,n,t]),mk(function(){return Hl(i)&&s({inst:i}),e(function(){Hl(i)&&s({inst:i})})},[e]),xk(n),n}function Hl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fk(e,n)}catch{return!0}}function vk(e,t){return t()}var bk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vk:yk;wy.useSyncExternalStore=bi.useSyncExternalStore!==void 0?bi.useSyncExternalStore:bk;by.exports=wy;var wk=by.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var il=_,kk=wk;function jk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _k=typeof Object.is=="function"?Object.is:jk,Sk=kk.useSyncExternalStore,Ck=il.useRef,Nk=il.useEffect,Ek=il.useMemo,zk=il.useDebugValue;vy.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=Ck(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=Ek(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var x=a.value;if(i(x,h))return p=x}return p=h}if(x=p,_k(d,h))return x;var w=r(h);return i!==void 0&&i(x,w)?(d=h,x):(d=h,p=w)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=Sk(e,s[0],s[1]);return Nk(function(){a.hasValue=!0,a.value=l},[l]),zk(l),l};yy.exports=vy;var Tk=yy.exports;const Ak=Fa(Tk),ky={},{useDebugValue:Pk}=It,{useSyncExternalStoreWithSelector:Lk}=Ak;let hh=!1;const Mk=e=>e;function Rk(e,t=Mk,n){(ky?"production":void 0)!=="production"&&n&&!hh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),hh=!0);const r=Lk(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return Pk(r),r}const mh=e=>{(ky?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?dk(e):e,n=(r,i)=>Rk(t,r,i);return Object.assign(n,t),n},Ik=e=>e?mh(e):mh,ut=Ik((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=s.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:s,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let i=r.app;if(n.type==="LlmAgent"&&n.output_key){const s=n.output_key;r.app.state_keys.find(l=>l.name===s)||(i={...r.app,state_keys:[...r.app.state_keys,{name:s,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:i,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:i}=t();if(i){const s=i.agents.find(l=>l.id===n);let a=i.app;if(s&&s.type==="LlmAgent"&&r.output_key){const l=s.output_key,c=r.output_key;if(l!==c){const u=i.app.state_keys.filter(p=>p.name!==l);u.find(p=>p.name===c)?a={...i.app,state_keys:u}:a={...i.app,state_keys:[...u,{name:c,description:`Output from ${r.name||s.name} agent`,type:"string",scope:"session"}]}}}e({project:{...i,app:a,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),jy="/api";async function Se(e,t){const n=await fetch(`${jy}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function _y(){return(await Se("/projects")).projects}async function Sy(e){return(await Se(`/projects/${e}`)).project}async function Cy(e,t=""){return(await Se("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function du(e,t){return(await Se(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Ny(e){await Se(`/projects/${e}`,{method:"DELETE"})}async function Ey(e){return Se(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function pu(e){return(await Se(`/projects/${e}/sessions`)).sessions}async function zy(e,t){return(await Se(`/projects/${e}/sessions/${t}/load`)).session}async function Ty(e){return(await Se(`/projects/${e}/yaml`)).yaml}async function Ay(e,t){return(await Se(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Rd(){return(await Se("/mcp-servers")).servers}async function Py(){return(await Se("/builtin-tools")).tools}function Ly(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Ks(e,t,n,r){return await Se(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function My(e,t){return await Se(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Ry(e,t,n,r=[],i){return await Se(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Iy(e,t,n,r,i=[],s){return await Se(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function fu(e){return await Se("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Oy(e,t){return Se(`/projects/${e}/skillsets/${t}/stats`)}async function $y(e,t,n,r,i=500,s=50){return Se(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function Dy(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const a=await fetch(`${jy}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Fy(e,t,n,r=10,i=0){return Se(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function By(e,t){return Se(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Uy(){return Se("/skillsets/embeddings-available")}const qe={async get(e){return Se(e)},async post(e,t){return Se(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Se(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Se(e,{method:"DELETE"})}},Ok=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:$y,api:qe,checkEmbeddingsAvailable:Uy,clearSkillSet:By,createProject:Cy,createRunWebSocket:Ly,deleteProject:Ny,fetchJSON:Se,generateAgentConfig:My,generateCallbackCode:Iy,generatePrompt:Ks,generateToolCode:Ry,getBuiltinTools:Py,getMcpServers:Rd,getProject:Sy,getProjectYaml:Ty,getSkillSetStats:Oy,listProjectSessions:pu,listProjects:_y,loadSession:zy,saveSessionToMemory:Ey,searchSkillSet:Fy,testMcpServer:fu,updateProject:du,updateProjectFromYaml:Ay,uploadSkillSetFile:Dy},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),he=(e,t)=>{const n=_.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>_.createElement("svg",{ref:d,...$k,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Dk(e)}`,l].join(" "),...u},[...t.map(([p,f])=>_.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=he("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=he("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=he("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=he("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=he("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=he("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=he("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=he("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=he("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=he("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=he("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=he("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=he("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=he("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=he("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=he("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=he("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=he("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=he("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=he("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=he("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=he("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=he("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=he("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=he("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=he("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=he("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=he("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=he("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=he("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=he("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=he("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=he("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=he("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=he("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=he("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=he("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=he("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=he("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=he("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=he("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=he("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=he("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=he("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=he("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=he("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=he("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tj=he("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=he("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=he("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=he("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=he("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=he("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=he("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=he("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=he("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=he("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=he("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=he("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function rj(){const e=Md(),[t,n]=_.useState([]),[r,i]=_.useState(!0),[s,a]=_.useState(!1),[l,c]=_.useState("");_.useEffect(()=>{u()},[]);async function u(){try{const f=await _y();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Cy(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await Ny(f),n(t.filter(x=>x.id!==f))}catch(x){console.error("Failed to delete project:",x)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(Bd,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(Ke,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[o.jsx(Ke,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(gh,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(f=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[o.jsxs("h3",{children:[o.jsx(gh,{size:18}),f.name]}),o.jsx("p",{children:f.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:h=>p(f.id,h),children:o.jsx(Fe,{size:16})})]},f.id))})]})]})}const xh={},ij=5*60*1e3;function oj({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:s="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=_.useState(t||""),[u,d]=_.useState(!1),[p,f]=_.useState([]),[h,x]=_.useState(!1),[w,j]=_.useState(null),[g,m]=_.useState(-1),[y,k]=_.useState({top:0,left:0,width:0}),z=_.useRef(null),C=_.useRef(null);_.useEffect(()=>{if(u&&z.current){const T=z.current.getBoundingClientRect();k({top:T.bottom+window.scrollY+4,left:T.left+window.scrollX,width:T.width})}},[u]);const A=_.useCallback(async()=>{const T=xh[a];if(T&&Date.now()-T.timestamp<ij){const M=[];Object.values(T.providers).forEach(B=>{M.push(...B.models)}),f(M);return}x(!0),j(null);try{const M=new URLSearchParams;n&&M.append("provider",n),r&&M.append("api_base",r);const B=`/models/${e}${M.toString()?"?"+M.toString():""}`,E=await qe.get(B);xh[a]={providers:E.providers,timestamp:Date.now()};const O=[];Object.values(E.providers).forEach(I=>{I.models&&I.models.length>0&&O.push(...I.models)}),f(O)}catch(M){j(M.message||"Failed to fetch models")}finally{x(!1)}},[e,a,r,n]);_.useEffect(()=>{A()},[A]),_.useEffect(()=>{c(t||"")},[t]);const S=p.filter(T=>{const M=l.toLowerCase();return T.id.toLowerCase().includes(M)||T.name.toLowerCase().includes(M)||T.provider.toLowerCase().includes(M)});_.useEffect(()=>{const T=M=>{C.current&&!C.current.contains(M.target)&&z.current&&!z.current.contains(M.target)&&d(!1)};return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const $=T=>{if(!u){(T.key==="ArrowDown"||T.key==="Enter")&&(d(!0),T.preventDefault());return}switch(T.key){case"ArrowDown":m(M=>Math.min(M+1,S.length-1)),T.preventDefault();break;case"ArrowUp":m(M=>Math.max(M-1,0)),T.preventDefault();break;case"Enter":g>=0&&g<S.length&&N(S[g]),T.preventDefault();break;case"Escape":d(!1);break}},N=T=>{c(T.id),i(T.id,T.provider),d(!1)},R=T=>{c(T.target.value),d(!0),m(-1),i(T.target.value,n||"gemini")},L=T=>{switch(T.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"ollama":return"provider-ollama";default:return"provider-other"}},W=u?o.jsxs("div",{ref:C,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:y.top,left:y.left,width:y.width},children:[h&&o.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),w&&o.jsx("div",{className:"model-autocomplete-error",children:w}),!h&&!w&&S.length===0&&o.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!h&&S.length>0&&o.jsxs("div",{className:"model-autocomplete-list",children:[S.slice(0,50).map((T,M)=>o.jsxs("div",{className:`model-autocomplete-item ${M===g?"highlighted":""}`,onClick:()=>N(T),onMouseEnter:()=>m(M),children:[o.jsx("span",{className:`provider-badge ${L(T.provider)}`,children:T.provider}),o.jsx("span",{className:"model-id",children:T.id}),T.context_window&&o.jsxs("span",{className:"model-context",title:`${T.context_window.toLocaleString()} token context`,children:[Math.round(T.context_window/1e3),"K"]}),T.supports_tools&&o.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),T.supports_vision&&o.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),T.supports_json_mode&&o.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${T.provider}-${T.id}`)),S.length>50&&o.jsxs("div",{className:"model-autocomplete-more",children:["+",S.length-50," more..."]})]})]}):null;return o.jsxs("div",{className:"model-autocomplete",children:[o.jsx("input",{ref:z,type:"text",value:l,onChange:R,onFocus:()=>d(!0),onKeyDown:$,placeholder:s,className:"model-autocomplete-input"}),W&&oy.createPortal(W,document.body)]})}const sj=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"litellm",label:"LiteLLM / Other"}];function aj(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function ev({projectId:e,values:t,onChange:n,className:r=""}){return o.jsxs("div",{className:`model-config-form ${r}`,children:[o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",style:{flex:1},children:[o.jsx("label",{children:"Provider"}),o.jsx("select",{value:t.provider||"gemini",onChange:i=>n({provider:i.target.value}),children:sj.map(i=>o.jsx("option",{value:i.value,children:i.label},i.value))})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:"Model"}),o.jsx(oj,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(i,s)=>{const a=aj(i,s);n({model_name:i,provider:a})},placeholder:"Search models..."})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{children:"API Base (optional)"}),o.jsx("input",{type:"text",value:t.api_base||"",onChange:i=>n({api_base:i.target.value||void 0}),placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":"http://localhost:11434"})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:i=>n({temperature:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:i=>n({max_output_tokens:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:i=>n({top_p:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:i=>n({top_k:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]})]})]})}const lj=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function cj(e){return/^[a-zA-Z0-9_]+$/.test(e)}function uj(){var q;const{project:e,updateProject:t}=ut(),[n,r]=_.useState(null);if(!e)return null;const{app:i}=e;function s(b){t({app:{...i,...b}})}function a(b){if(b===""){r(null),s({name:b});return}cj(b)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:b})}function l(){const b={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({state_keys:[...i.state_keys,b]})}function c(b,V){const P=[...i.state_keys];P[b]={...P[b],...V},s({state_keys:P})}function u(b){s({state_keys:i.state_keys.filter((V,P)=>P!==b)})}function d(b="ReflectAndRetryToolPlugin"){let V;switch(b){case"ReflectAndRetryToolPlugin":V={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":V={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":V={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":V={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":V={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":V={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:V={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,V]})}function p(b,V){const P=[...i.plugins];P[b]={...P[b],...V},s({plugins:P})}function f(b){s({plugins:i.plugins.filter((V,P)=>P!==b)})}const h=i.sandbox||{enabled:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:300,volume_mounts:[]},x=((q=h.allowlist)==null?void 0:q.user)||[],w=h.volume_mounts||[];function j(b){s({sandbox:{...h,...b}})}async function g(b){const V=i.id;try{await fetch(`/api/sandbox/${V}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:b.map(P=>({pattern:P.pattern,pattern_type:P.pattern_type})).filter(P=>P.pattern)})})}catch(P){console.debug("Could not sync allowlist to gateway:",P)}}function m(){const b={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},V={...h.allowlist,user:[...x,b]};j({allowlist:V})}function y(b,V){const P=[...x];P[b]={...P[b],...V};const Y=P;j({allowlist:{...h.allowlist,user:Y}}),V.pattern&&g(Y)}function k(b){const V=x.filter((P,Y)=>Y!==b);j({allowlist:{...h.allowlist,user:V}})}function z(){const b={host_path:"",container_path:"/mnt/data",mode:"ro"};j({volume_mounts:[...w,b]})}function C(b,V){const P=[...w];P[b]={...P[b],...V},j({volume_mounts:P})}function A(b){const V=w.filter((P,Y)=>Y!==b);j({volume_mounts:V})}const S=i.models||[];function $(){const b=`model_${Date.now().toString(36)}`,V={id:b,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:S.length===0};s({models:[...S,V],default_model_id:S.length===0?b:i.default_model_id})}function N(b,V){const P=S.map(Y=>Y.id===b?{...Y,...V}:Y);s({models:P})}function R(b){var Y;const V=S.filter(ue=>ue.id!==b),P=i.default_model_id===b?((Y=V[0])==null?void 0:Y.id)||void 0:i.default_model_id;s({models:V,default_model_id:P})}function L(b){s({default_model_id:b})}const W=i.env_vars||{},[T,M]=_.useState({}),[B,E]=_.useState("");function O(b=""){const V=b||B.trim();!V||W[V]!==void 0||(s({env_vars:{...W,[V]:""}}),E(""))}function I(b,V){s({env_vars:{...W,[b]:V}})}function v(b){const V={...W};delete V[b],s({env_vars:V})}function D(b){M(V=>({...V,[b]:!V[b]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(ej,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:b=>a(b.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:b=>s({root_agent_id:b.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(b=>o.jsx("option",{value:b.id,children:b.name},b.id))]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Rn,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:b=>{const V=b.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[V]||V+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:b=>s({session_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:b=>s({session_service_uri:"sqlite://"+b.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:b=>s({session_service_uri:b.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:b=>{const V=i.session_service_uri.split("/");V[2]=b.target.value,s({session_service_uri:V.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:b=>{const V=i.session_service_uri.split("/");V[3]=b.target.value,s({session_service_uri:V.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:b=>{const V=i.session_service_uri.split("/");V[4]=b.target.value,s({session_service_uri:V.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:b=>{const V=b.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[V]||V+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:b=>s({memory_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:b=>s({memory_service_uri:"rag://"+b.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:b=>{const V=i.memory_service_uri.split("/");V[2]=b.target.value,s({memory_service_uri:V.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:b=>{const V=i.memory_service_uri.split("/");V[3]=b.target.value,s({memory_service_uri:V.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:b=>{const V=i.memory_service_uri.split("/");V[4]=b.target.value,s({memory_service_uri:V.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:b=>{const V=b.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[V]||V+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:b=>s({artifact_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:b=>s({artifact_service_uri:"gs://"+b.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(mu,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:lj.filter(b=>W[b.key]===void 0).map(b=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>O(b.key),title:b.description,children:[o.jsx(Ke,{size:12}),b.key]},b.key))}),Object.keys(W).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(W).map(([b,V])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:b}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:T[b]?"text":"password",value:V,onChange:P=>I(b,P.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>D(b),title:T[b]?"Hide value":"Show value",children:T[b]?o.jsx(Vk,{size:16}):o.jsx(ki,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>v(b),children:o.jsx(Fe,{size:16})})]},b)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:B,onChange:b=>E(b.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:b=>b.key==="Enter"&&O()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>O(),disabled:!B.trim(),children:[o.jsx(Ke,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Od,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:$,children:[o.jsx(Ke,{size:14}),"Add Model"]})]}),S.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):S.map(b=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:b.name,onChange:V=>N(b.id,{name:V.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===b.id?"is-default":""}`,onClick:()=>L(b.id),title:i.default_model_id===b.id?"Default model":"Set as default",children:o.jsx(Qy,{size:14,fill:i.default_model_id===b.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>R(b.id),children:o.jsx(Fe,{size:16})})]}),o.jsx("div",{className:"model-card-body",children:o.jsx(ev,{projectId:e.id,values:b,onChange:V=>N(b.id,V)})})]},b.id))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Dd,{size:20}),"State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[o.jsx(Ke,{size:14}),"Add"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys. Auto-created when you add LlmAgents."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:i.state_keys.map((b,V)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx("input",{type:"text",value:b.name,onChange:P=>c(V,{name:P.target.value}),placeholder:"Key name",style:{flex:1,padding:"4px 8px",fontSize:12}}),o.jsxs("select",{value:b.type,onChange:P=>c(V,{type:P.target.value}),style:{padding:"4px 6px",fontSize:11},children:[o.jsx("option",{value:"string",children:"str"}),o.jsx("option",{value:"number",children:"num"}),o.jsx("option",{value:"boolean",children:"bool"}),o.jsx("option",{value:"object",children:"obj"}),o.jsx("option",{value:"array",children:"arr"})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(V),style:{padding:4},children:o.jsx(Fe,{size:12})})]},V))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Zy,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Summarize old events"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:b=>s({compaction:{...i.compaction,max_events:parseInt(b.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:b=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(b.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Pause/resume execution"})]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(on,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:b=>{b.target.value&&(d(b.target.value),b.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((b,V)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:b.type,onChange:P=>p(V,{type:P.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>f(V),children:o.jsx(Fe,{size:16})})]}),b.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:b.max_retries??3,onChange:P=>p(V,{max_retries:parseInt(P.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:b.throw_exception_if_retry_exceeded??!1,onChange:P=>p(V,{throw_exception_if_retry_exceeded:P.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),b.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:b.num_invocations_to_keep??5,onChange:P=>p(V,{num_invocations_to_keep:parseInt(P.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),b.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),b.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:b.global_instruction??"",onChange:P=>p(V,{global_instruction:P.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),b.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),b.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},V))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Yy,{size:20}),"Network Allowlist"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:m,children:[o.jsx(Ke,{size:14}),"Add"]})]}),x.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:x.map((b,V)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx($d,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:b.pattern,onChange:P=>y(V,{pattern:P.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),o.jsxs("select",{value:b.pattern_type,onChange:P=>y(V,{pattern_type:P.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[o.jsx("option",{value:"exact",children:"exact"}),o.jsx("option",{value:"wildcard",children:"wild"}),o.jsx("option",{value:"regex",children:"regex"})]}),o.jsx("button",{className:"delete-item",onClick:()=>k(V),style:{padding:4},children:o.jsx(Fe,{size:12})})]},b.id||V))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Jk,{size:20}),"Volume Mounts"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:z,children:[o.jsx(Ke,{size:14}),"Add"]})]}),w.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No mounts. Add to give sandbox file access."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:w.map((b,V)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(Hy,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:b.host_path,onChange:P=>C(V,{host_path:P.target.value}),placeholder:"~/path",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path"}),o.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),o.jsx("input",{type:"text",value:b.container_path,onChange:P=>C(V,{container_path:P.target.value}),placeholder:"/mnt",style:{width:70,padding:"4px 6px",fontSize:11},title:"Container path"}),o.jsxs("select",{value:b.mode,onChange:P=>C(V,{mode:P.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[o.jsx("option",{value:"ro",children:"ro"}),o.jsx("option",{value:"rw",children:"rw"})]}),o.jsx("button",{className:"delete-item",onClick:()=>A(V),style:{padding:4},children:o.jsx(Fe,{size:12})})]},V))})]})]})]})}const dj="modulepreload",pj=function(e){return"/"+e},yh={},fj=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=pj(c),c in yh)return;yh[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":dj,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function vh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function hj(e){if(Array.isArray(e))return e}function mj(e,t,n){return(t=kj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gj(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,l=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function xj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function wh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bh(Object(n),!0).forEach(function(r){mj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yj(e,t){if(e==null)return{};var n,r,i=vj(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function vj(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function bj(e,t){return hj(e)||gj(e,t)||jj(e,t)||xj()}function wj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kj(e){var t=wj(e,"string");return typeof t=="symbol"?t:t+""}function jj(e,t){if(e){if(typeof e=="string")return vh(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?vh(e,t):void 0}}function _j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function jh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kh(Object(n),!0).forEach(function(r){_j(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Sj(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function eo(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function za(e){return{}.toString.call(e).includes("Object")}function Cj(e){return!Object.keys(e).length}function Oo(e){return typeof e=="function"}function Nj(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ej(e,t){return za(t)||cr("changeType"),Object.keys(t).some(function(n){return!Nj(e,n)})&&cr("changeField"),t}function zj(e){Oo(e)||cr("selectorType")}function Tj(e){Oo(e)||za(e)||cr("handlerType"),za(e)&&Object.values(e).some(function(t){return!Oo(t)})&&cr("handlersType")}function Aj(e){e||cr("initialIsRequired"),za(e)||cr("initialType"),Cj(e)&&cr("initialContent")}function Pj(e,t){throw new Error(e[t]||e.default)}var Lj={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},cr=eo(Pj)(Lj),Cs={changes:Ej,selector:zj,handler:Tj,initial:Aj};function Mj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Cs.initial(e),Cs.handler(t);var n={current:e},r=eo(Oj)(n,t),i=eo(Ij)(n),s=eo(Cs.changes)(e),a=eo(Rj)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Cs.selector(u),u(n.current)}function c(u){Sj(r,i,s,a)(u)}return[l,c]}function Rj(e,t){return Oo(t)?t(e.current):t}function Ij(e,t){return e.current=jh(jh({},e.current),t),t}function Oj(e,t,n){return Oo(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var $j={create:Mj},Dj={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Fj(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Bj(e){return{}.toString.call(e).includes("Object")}function Uj(e){return e||_h("configIsRequired"),Bj(e)||_h("configType"),e.urls?(Vj(),{paths:{vs:e.urls.monacoBase}}):e}function Vj(){console.warn(tv.deprecation)}function Wj(e,t){throw new Error(e[t]||e.default)}var tv={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},_h=Fj(Wj)(tv),Hj={config:Uj},qj=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,a){return a(s)},i)}};function nv(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],nv(e[n],t[n]))}),wh(wh({},e),t)}var Jj={type:"cancelation",msg:"operation is manually canceled"};function Kl(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(Jj):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var Kj=["monaco"],Gj=$j.create({config:Dj,isInitialized:!1,resolve:null,reject:null,monaco:null}),rv=bj(Gj,2),ts=rv[0],sl=rv[1];function Yj(e){var t=Hj.config(e),n=t.monaco,r=yj(t,Kj);sl(function(i){return{config:nv(i.config,r),monaco:n}})}function Qj(){var e=ts(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(sl({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Kl(Gl);if(window.monaco&&window.monaco.editor)return iv(window.monaco),e.resolve(window.monaco),Kl(Gl);qj(Xj,e_)(t_)}return Kl(Gl)}function Xj(e){return document.body.appendChild(e)}function Zj(e){var t=document.createElement("script");return e&&(t.src=e),t}function e_(e){var t=ts(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=Zj("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function t_(){var e=ts(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;iv(r),e.resolve(r)},function(n){e.reject(n)})}function iv(e){ts().monaco||sl({monaco:e})}function n_(){return ts(function(e){var t=e.monaco;return t})}var Gl=new Promise(function(e,t){return sl({resolve:e,reject:t})}),ov={config:Yj,init:Qj,__getMonacoInstance:n_},r_={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Yl=r_,i_={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},o_=i_;function s_({children:e}){return It.createElement("div",{style:o_.container},e)}var a_=s_,l_=a_;function c_({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:a}){return It.createElement("section",{style:{...Yl.wrapper,width:e,height:t},...a},!n&&It.createElement(l_,null,r),It.createElement("div",{ref:i,style:{...Yl.fullWidth,...!n&&Yl.hide},className:s}))}var u_=c_,sv=_.memo(u_);function d_(e){_.useEffect(e,[])}var av=d_;function p_(e,t,n=!0){let r=_.useRef(!0);_.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Lt=p_;function fo(){}function ni(e,t,n,r){return f_(e,r)||h_(e,t,n,r)}function f_(e,t){return e.editor.getModel(lv(e,t))}function h_(e,t,n,r){return e.editor.createModel(t,n,r?lv(e,r):void 0)}function lv(e,t){return e.Uri.parse(t)}function m_({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:x,wrapperProps:w={},beforeMount:j=fo,onMount:g=fo}){let[m,y]=_.useState(!1),[k,z]=_.useState(!0),C=_.useRef(null),A=_.useRef(null),S=_.useRef(null),$=_.useRef(g),N=_.useRef(j),R=_.useRef(!1);av(()=>{let M=ov.init();return M.then(B=>(A.current=B)&&z(!1)).catch(B=>(B==null?void 0:B.type)!=="cancelation"&&console.error("Monaco initialization: error:",B)),()=>C.current?T():M.cancel()}),Lt(()=>{if(C.current&&A.current){let M=C.current.getOriginalEditor(),B=ni(A.current,e||"",r||n||"text",s||"");B!==M.getModel()&&M.setModel(B)}},[s],m),Lt(()=>{if(C.current&&A.current){let M=C.current.getModifiedEditor(),B=ni(A.current,t||"",i||n||"text",a||"");B!==M.getModel()&&M.setModel(B)}},[a],m),Lt(()=>{let M=C.current.getModifiedEditor();M.getOption(A.current.editor.EditorOption.readOnly)?M.setValue(t||""):t!==M.getValue()&&(M.executeEdits("",[{range:M.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),M.pushUndoStop())},[t],m),Lt(()=>{var M,B;(B=(M=C.current)==null?void 0:M.getModel())==null||B.original.setValue(e||"")},[e],m),Lt(()=>{let{original:M,modified:B}=C.current.getModel();A.current.editor.setModelLanguage(M,r||n||"text"),A.current.editor.setModelLanguage(B,i||n||"text")},[n,r,i],m),Lt(()=>{var M;(M=A.current)==null||M.editor.setTheme(u)},[u],m),Lt(()=>{var M;(M=C.current)==null||M.updateOptions(p)},[p],m);let L=_.useCallback(()=>{var E;if(!A.current)return;N.current(A.current);let M=ni(A.current,e||"",r||n||"text",s||""),B=ni(A.current,t||"",i||n||"text",a||"");(E=C.current)==null||E.setModel({original:M,modified:B})},[n,t,i,e,r,s,a]),W=_.useCallback(()=>{var M;!R.current&&S.current&&(C.current=A.current.editor.createDiffEditor(S.current,{automaticLayout:!0,...p}),L(),(M=A.current)==null||M.editor.setTheme(u),y(!0),R.current=!0)},[p,u,L]);_.useEffect(()=>{m&&$.current(C.current,A.current)},[m]),_.useEffect(()=>{!k&&!m&&W()},[k,m,W]);function T(){var B,E,O,I;let M=(B=C.current)==null?void 0:B.getModel();l||((E=M==null?void 0:M.original)==null||E.dispose()),c||((O=M==null?void 0:M.modified)==null||O.dispose()),(I=C.current)==null||I.dispose()}return It.createElement(sv,{width:h,height:f,isEditorReady:m,loading:d,_ref:S,className:x,wrapperProps:w})}var g_=m_;_.memo(g_);function x_(e){let t=_.useRef();return _.useEffect(()=>{t.current=e},[e]),t.current}var y_=x_,Ns=new Map;function v_({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:x="100%",className:w,wrapperProps:j={},beforeMount:g=fo,onMount:m=fo,onChange:y,onValidate:k=fo}){let[z,C]=_.useState(!1),[A,S]=_.useState(!0),$=_.useRef(null),N=_.useRef(null),R=_.useRef(null),L=_.useRef(m),W=_.useRef(g),T=_.useRef(),M=_.useRef(r),B=y_(s),E=_.useRef(!1),O=_.useRef(!1);av(()=>{let D=ov.init();return D.then(q=>($.current=q)&&S(!1)).catch(q=>(q==null?void 0:q.type)!=="cancelation"&&console.error("Monaco initialization: error:",q)),()=>N.current?v():D.cancel()}),Lt(()=>{var q,b,V,P;let D=ni($.current,e||r||"",t||i||"",s||n||"");D!==((q=N.current)==null?void 0:q.getModel())&&(p&&Ns.set(B,(b=N.current)==null?void 0:b.saveViewState()),(V=N.current)==null||V.setModel(D),p&&((P=N.current)==null||P.restoreViewState(Ns.get(s))))},[s],z),Lt(()=>{var D;(D=N.current)==null||D.updateOptions(u)},[u],z),Lt(()=>{!N.current||r===void 0||(N.current.getOption($.current.editor.EditorOption.readOnly)?N.current.setValue(r):r!==N.current.getValue()&&(O.current=!0,N.current.executeEdits("",[{range:N.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),N.current.pushUndoStop(),O.current=!1))},[r],z),Lt(()=>{var q,b;let D=(q=N.current)==null?void 0:q.getModel();D&&i&&((b=$.current)==null||b.editor.setModelLanguage(D,i))},[i],z),Lt(()=>{var D;l!==void 0&&((D=N.current)==null||D.revealLine(l))},[l],z),Lt(()=>{var D;(D=$.current)==null||D.editor.setTheme(a)},[a],z);let I=_.useCallback(()=>{var D;if(!(!R.current||!$.current)&&!E.current){W.current($.current);let q=s||n,b=ni($.current,r||e||"",t||i||"",q||"");N.current=(D=$.current)==null?void 0:D.editor.create(R.current,{model:b,automaticLayout:!0,...u},d),p&&N.current.restoreViewState(Ns.get(q)),$.current.editor.setTheme(a),l!==void 0&&N.current.revealLine(l),C(!0),E.current=!0}},[e,t,n,r,i,s,u,d,p,a,l]);_.useEffect(()=>{z&&L.current(N.current,$.current)},[z]),_.useEffect(()=>{!A&&!z&&I()},[A,z,I]),M.current=r,_.useEffect(()=>{var D,q;z&&y&&((D=T.current)==null||D.dispose(),T.current=(q=N.current)==null?void 0:q.onDidChangeModelContent(b=>{O.current||y(N.current.getValue(),b)}))},[z,y]),_.useEffect(()=>{if(z){let D=$.current.editor.onDidChangeMarkers(q=>{var V;let b=(V=N.current.getModel())==null?void 0:V.uri;if(b&&q.find(P=>P.path===b.path)){let P=$.current.editor.getModelMarkers({resource:b});k==null||k(P)}});return()=>{D==null||D.dispose()}}return()=>{}},[z,k]);function v(){var D,q;(D=T.current)==null||D.dispose(),f?p&&Ns.set(s,N.current.saveViewState()):(q=N.current.getModel())==null||q.dispose(),N.current.dispose()}return It.createElement(sv,{width:h,height:x,isEditorReady:z,loading:c,_ref:R,className:w,wrapperProps:j})}var b_=v_,w_=_.memo(b_),Kt=w_;function k_(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const j_=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,__=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,S_={};function Sh(e,t){return(S_.jsx?__:j_).test(e)}const C_=/[ \t\n\f\r]/g;function N_(e){return typeof e=="object"?e.type==="text"?Ch(e.value):!1:Ch(e)}function Ch(e){return e.replace(C_,"")===""}class ns{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ns.prototype.normal={};ns.prototype.property={};ns.prototype.space=void 0;function cv(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ns(n,r,t)}function xu(e){return e.toLowerCase()}class Et{constructor(t,n){this.attribute=n,this.property=t}}Et.prototype.attribute="";Et.prototype.booleanish=!1;Et.prototype.boolean=!1;Et.prototype.commaOrSpaceSeparated=!1;Et.prototype.commaSeparated=!1;Et.prototype.defined=!1;Et.prototype.mustUseProperty=!1;Et.prototype.number=!1;Et.prototype.overloadedBoolean=!1;Et.prototype.property="";Et.prototype.spaceSeparated=!1;Et.prototype.space=void 0;let E_=0;const we=Fr(),Je=Fr(),yu=Fr(),ie=Fr(),Me=Fr(),ci=Fr(),Tt=Fr();function Fr(){return 2**++E_}const vu=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:Je,commaOrSpaceSeparated:Tt,commaSeparated:ci,number:ie,overloadedBoolean:yu,spaceSeparated:Me},Symbol.toStringTag,{value:"Module"})),Ql=Object.keys(vu);class Vd extends Et{constructor(t,n,r,i){let s=-1;if(super(t,n),Nh(this,"space",i),typeof r=="number")for(;++s<Ql.length;){const a=Ql[s];Nh(this,Ql[s],(r&vu[a])===vu[a])}}}Vd.prototype.defined=!0;function Nh(e,t,n){n&&(e[t]=n)}function Ti(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new Vd(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[xu(r)]=r,n[xu(s.attribute)]=r}return new ns(t,n,e.space)}const uv=Ti({properties:{ariaActiveDescendant:null,ariaAtomic:Je,ariaAutoComplete:null,ariaBusy:Je,ariaChecked:Je,ariaColCount:ie,ariaColIndex:ie,ariaColSpan:ie,ariaControls:Me,ariaCurrent:null,ariaDescribedBy:Me,ariaDetails:null,ariaDisabled:Je,ariaDropEffect:Me,ariaErrorMessage:null,ariaExpanded:Je,ariaFlowTo:Me,ariaGrabbed:Je,ariaHasPopup:null,ariaHidden:Je,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Me,ariaLevel:ie,ariaLive:null,ariaModal:Je,ariaMultiLine:Je,ariaMultiSelectable:Je,ariaOrientation:null,ariaOwns:Me,ariaPlaceholder:null,ariaPosInSet:ie,ariaPressed:Je,ariaReadOnly:Je,ariaRelevant:null,ariaRequired:Je,ariaRoleDescription:Me,ariaRowCount:ie,ariaRowIndex:ie,ariaRowSpan:ie,ariaSelected:Je,ariaSetSize:ie,ariaSort:null,ariaValueMax:ie,ariaValueMin:ie,ariaValueNow:ie,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function dv(e,t){return t in e?e[t]:t}function pv(e,t){return dv(e,t.toLowerCase())}const z_=Ti({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ci,acceptCharset:Me,accessKey:Me,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Me,autoFocus:we,autoPlay:we,blocking:Me,capture:null,charSet:null,checked:we,cite:null,className:Me,cols:ie,colSpan:null,content:null,contentEditable:Je,controls:we,controlsList:Me,coords:ie|ci,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:yu,draggable:Je,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Me,height:ie,hidden:yu,high:ie,href:null,hrefLang:null,htmlFor:Me,httpEquiv:Me,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Me,itemRef:Me,itemScope:we,itemType:Me,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:ie,manifest:null,max:null,maxLength:ie,media:null,method:null,min:null,minLength:ie,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:ie,pattern:null,ping:Me,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Me,required:we,reversed:we,rows:ie,rowSpan:ie,sandbox:Me,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shape:null,size:ie,sizes:null,slot:null,span:ie,spellCheck:Je,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ie,step:null,style:null,tabIndex:ie,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:Je,width:ie,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Me,axis:null,background:null,bgColor:null,border:ie,borderColor:null,bottomMargin:ie,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:ie,leftMargin:ie,link:null,longDesc:null,lowSrc:null,marginHeight:ie,marginWidth:ie,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:ie,rules:null,scheme:null,scrolling:Je,standby:null,summary:null,text:null,topMargin:ie,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ie,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:ie,security:null,unselectable:null},space:"html",transform:pv}),T_=Ti({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Tt,accentHeight:ie,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ie,amplitude:ie,arabicForm:null,ascent:ie,attributeName:null,attributeType:null,azimuth:ie,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ie,by:null,calcMode:null,capHeight:ie,className:Me,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ie,diffuseConstant:ie,direction:null,display:null,dur:null,divisor:ie,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:ie,enableBackground:null,end:null,event:null,exponent:ie,externalResourcesRequired:null,fill:null,fillOpacity:ie,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ci,g2:ci,glyphName:ci,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ie,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ie,horizOriginX:ie,horizOriginY:ie,id:null,ideographic:ie,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ie,k:ie,k1:ie,k2:ie,k3:ie,k4:ie,kernelMatrix:Tt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ie,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ie,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ie,overlineThickness:ie,paintOrder:null,panose1:null,path:null,pathLength:ie,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Me,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ie,pointsAtY:ie,pointsAtZ:ie,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Tt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Tt,rev:Tt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Tt,requiredFeatures:Tt,requiredFonts:Tt,requiredFormats:Tt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ie,specularExponent:ie,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ie,strikethroughThickness:ie,string:null,stroke:null,strokeDashArray:Tt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ie,strokeOpacity:ie,strokeWidth:null,style:null,surfaceScale:ie,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Tt,tabIndex:ie,tableValues:null,target:null,targetX:ie,targetY:ie,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Tt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ie,underlineThickness:ie,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ie,values:null,vAlphabetic:ie,vMathematical:ie,vectorEffect:null,vHanging:ie,vIdeographic:ie,version:null,vertAdvY:ie,vertOriginX:ie,vertOriginY:ie,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ie,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:dv}),fv=Ti({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),hv=Ti({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:pv}),mv=Ti({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),A_={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},P_=/[A-Z]/g,Eh=/-[a-z]/g,L_=/^data[-\w.:]+$/i;function M_(e,t){const n=xu(t);let r=t,i=Et;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&L_.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Eh,I_);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Eh.test(s)){let a=s.replace(P_,R_);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Vd}return new i(r,t)}function R_(e){return"-"+e.toLowerCase()}function I_(e){return e.charAt(1).toUpperCase()}const O_=cv([uv,z_,fv,hv,mv],"html"),Wd=cv([uv,T_,fv,hv,mv],"svg");function $_(e){return e.join(" ").trim()}var Hd={},zh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,D_=/\n/g,F_=/^\s*/,B_=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,U_=/^:\s*/,V_=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,W_=/^[;\s]*/,H_=/^\s+|\s+$/g,q_=`
`,Th="/",Ah="*",br="",J_="comment",K_="declaration";function G_(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(x){var w=x.match(D_);w&&(n+=w.length);var j=x.lastIndexOf(q_);r=~j?x.length-j:r+x.length}function s(){var x={line:n,column:r};return function(w){return w.position=new a(x),u(),w}}function a(x){this.start=x,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(x){var w=new Error(t.source+":"+n+":"+r+": "+x);if(w.reason=x,w.filename=t.source,w.line=n,w.column=r,w.source=e,!t.silent)throw w}function c(x){var w=x.exec(e);if(w){var j=w[0];return i(j),e=e.slice(j.length),w}}function u(){c(F_)}function d(x){var w;for(x=x||[];w=p();)w!==!1&&x.push(w);return x}function p(){var x=s();if(!(Th!=e.charAt(0)||Ah!=e.charAt(1))){for(var w=2;br!=e.charAt(w)&&(Ah!=e.charAt(w)||Th!=e.charAt(w+1));)++w;if(w+=2,br===e.charAt(w-1))return l("End of comment missing");var j=e.slice(2,w-2);return r+=2,i(j),e=e.slice(w),r+=2,x({type:J_,comment:j})}}function f(){var x=s(),w=c(B_);if(w){if(p(),!c(U_))return l("property missing ':'");var j=c(V_),g=x({type:K_,property:Ph(w[0].replace(zh,br)),value:j?Ph(j[0].replace(zh,br)):br});return c(W_),g}}function h(){var x=[];d(x);for(var w;w=f();)w!==!1&&(x.push(w),d(x));return x}return u(),h()}function Ph(e){return e?e.replace(H_,br):br}var Y_=G_,Q_=ta&&ta.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Hd,"__esModule",{value:!0});Hd.default=Z_;const X_=Q_(Y_);function Z_(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,X_.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:l}=s;i?t(a,l,s):l&&(n=n||{},n[a]=l)}),n}var al={};Object.defineProperty(al,"__esModule",{value:!0});al.camelCase=void 0;var e2=/^--[a-zA-Z0-9_-]+$/,t2=/-([a-z])/g,n2=/^[^-]+$/,r2=/^-(webkit|moz|ms|o|khtml)-/,i2=/^-(ms)-/,o2=function(e){return!e||n2.test(e)||e2.test(e)},s2=function(e,t){return t.toUpperCase()},Lh=function(e,t){return"".concat(t,"-")},a2=function(e,t){return t===void 0&&(t={}),o2(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(i2,Lh):e=e.replace(r2,Lh),e.replace(t2,s2))};al.camelCase=a2;var l2=ta&&ta.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},c2=l2(Hd),u2=al;function bu(e,t){var n={};return!e||typeof e!="string"||(0,c2.default)(e,function(r,i){r&&i&&(n[(0,u2.camelCase)(r,t)]=i)}),n}bu.default=bu;var d2=bu;const p2=Fa(d2),gv=xv("end"),qd=xv("start");function xv(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function f2(e){const t=qd(e),n=gv(e);if(t&&n)return{start:t,end:n}}function ho(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Mh(e.position):"start"in e||"end"in e?Mh(e):"line"in e||"column"in e?wu(e):""}function wu(e){return Rh(e&&e.line)+":"+Rh(e&&e.column)}function Mh(e){return wu(e&&e.start)+"-"+wu(e&&e.end)}function Rh(e){return e&&typeof e=="number"?e:1}class dt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=ho(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}dt.prototype.file="";dt.prototype.name="";dt.prototype.reason="";dt.prototype.message="";dt.prototype.stack="";dt.prototype.column=void 0;dt.prototype.line=void 0;dt.prototype.ancestors=void 0;dt.prototype.cause=void 0;dt.prototype.fatal=void 0;dt.prototype.place=void 0;dt.prototype.ruleId=void 0;dt.prototype.source=void 0;const Jd={}.hasOwnProperty,h2=new Map,m2=/[A-Z]/g,g2=new Set(["table","tbody","thead","tfoot","tr"]),x2=new Set(["td","th"]),yv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function y2(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=C2(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=S2(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Wd:O_,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=vv(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function vv(e,t,n){if(t.type==="element")return v2(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return b2(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return k2(e,t,n);if(t.type==="mdxjsEsm")return w2(e,t);if(t.type==="root")return j2(e,t,n);if(t.type==="text")return _2(e,t)}function v2(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Wd,e.schema=i),e.ancestors.push(t);const s=wv(e,t.tagName,!1),a=N2(e,t);let l=Gd(e,t);return g2.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!N_(c):!0})),bv(e,a,s,t),Kd(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function b2(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}$o(e,t.position)}function w2(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);$o(e,t.position)}function k2(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Wd,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:wv(e,t.name,!0),a=E2(e,t),l=Gd(e,t);return bv(e,a,s,t),Kd(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function j2(e,t,n){const r={};return Kd(r,Gd(e,t)),e.create(t,e.Fragment,r,n)}function _2(e,t){return t.value}function bv(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Kd(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function S2(e,t,n){return r;function r(i,s,a,l){const u=Array.isArray(a.children)?n:t;return l?u(s,a,l):u(s,a)}}function C2(e,t){return n;function n(r,i,s,a){const l=Array.isArray(s.children),c=qd(r);return t(i,s,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function N2(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Jd.call(t.properties,i)){const s=z2(e,i,t.properties[i]);if(s){const[a,l]=s;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&x2.has(t.tagName)?r=l:n[a]=l}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function E2(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else $o(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else $o(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function Gd(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:h2;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=vv(e,s,a);l!==void 0&&n.push(l)}return n}function z2(e,t,n){const r=M_(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?k_(n):$_(n)),r.property==="style"){let i=typeof n=="object"?n:T2(e,String(n));return e.stylePropertyNameCase==="css"&&(i=A2(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?A_[r.property]||r.property:r.attribute,n]}}function T2(e,t){try{return p2(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new dt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=yv+"#cannot-parse-style-attribute",i}}function wv(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const l=Sh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=a}else r=Sh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Jd.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);$o(e)}function $o(e,t){const n=new dt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=yv+"#cannot-handle-mdx-estrees-without-createevaluater",n}function A2(e){const t={};let n;for(n in e)Jd.call(e,n)&&(t[P2(n)]=e[n]);return t}function P2(e){let t=e.replace(m2,L2);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function L2(e){return"-"+e.toLowerCase()}const Xl={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},M2={};function R2(e,t){const n=M2,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return kv(e,r,i)}function kv(e,t,n){if(I2(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Ih(e.children,t,n)}return Array.isArray(e)?Ih(e,t,n):""}function Ih(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=kv(e[i],t,n);return r.join("")}function I2(e){return!!(e&&typeof e=="object")}const Oh=document.createElement("i");function Yd(e){const t="&"+e+";";Oh.innerHTML=t;const n=Oh.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function _n(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function Ht(e,t){return e.length>0?(_n(e,e.length,0,t),e):t}const $h={}.hasOwnProperty;function O2(e){const t={};let n=-1;for(;++n<e.length;)$2(t,e[n]);return t}function $2(e,t){let n;for(n in t){const i=($h.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){$h.call(i,a)||(i[a]=[]);const l=s[a];D2(i[a],Array.isArray(l)?l:l?[l]:[])}}}function D2(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);_n(e,0,0,r)}function jv(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ui(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const yn=xr(/[A-Za-z]/),Rt=xr(/[\dA-Za-z]/),F2=xr(/[#-'*+\--9=?A-Z^-~]/);function ku(e){return e!==null&&(e<32||e===127)}const ju=xr(/\d/),B2=xr(/[\dA-Fa-f]/),U2=xr(/[!-/:-@[-`{-~]/);function be(e){return e!==null&&e<-2}function Nt(e){return e!==null&&(e<0||e===32)}function Ee(e){return e===-2||e===-1||e===32}const V2=xr(new RegExp("\\p{P}|\\p{S}","u")),W2=xr(/\s/);function xr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Ai(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&Rt(e.charCodeAt(n+1))&&Rt(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(n+1);s<56320&&l>56319&&l<57344?(a=String.fromCharCode(s,l),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Ie(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(c){return Ee(c)?(e.enter(n),l(c)):t(c)}function l(c){return Ee(c)&&s++<i?(e.consume(c),l):(e.exit(n),t(c))}}const H2={tokenize:q2};function q2(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Ie(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return be(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),a)}}const J2={tokenize:K2},Dh={tokenize:G2};function K2(e){const t=this,n=[];let r=0,i,s,a;return l;function l(y){if(r<n.length){const k=n[r];return t.containerState=k[1],e.attempt(k[0].continuation,c,u)(y)}return u(y)}function c(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const k=t.events.length;let z=k,C;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){C=t.events[z][1].end;break}g(r);let A=k;for(;A<t.events.length;)t.events[A][1].end={...C},A++;return _n(t.events,z+1,0,t.events.slice(k)),t.events.length=A,u(y)}return l(y)}function u(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return x(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Dh,d,p)(y)}function d(y){return i&&m(),g(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,x(y)}function f(y){return t.containerState={},e.attempt(Dh,h,x)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function x(y){if(y===null){i&&m(),g(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),w(y)}function w(y){if(y===null){j(e.exit("chunkFlow"),!0),g(0),e.consume(y);return}return be(y)?(e.consume(y),j(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(y),w)}function j(y,k){const z=t.sliceStream(y);if(k&&z.push(null),y.previous=s,s&&(s.next=y),s=y,i.defineSkip(y.start),i.write(z),t.parser.lazy[y.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<a&&(!i.events[C][1].end||i.events[C][1].end.offset>a))return;const A=t.events.length;let S=A,$,N;for(;S--;)if(t.events[S][0]==="exit"&&t.events[S][1].type==="chunkFlow"){if($){N=t.events[S][1].end;break}$=!0}for(g(r),C=A;C<t.events.length;)t.events[C][1].end={...N},C++;_n(t.events,S+1,0,t.events.slice(A)),t.events.length=C}}function g(y){let k=n.length;for(;k-- >y;){const z=n[k];t.containerState=z[1],z[0].exit.call(t,e)}n.length=y}function m(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function G2(e,t,n){return Ie(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Fh(e){if(e===null||Nt(e)||W2(e))return 1;if(V2(e))return 2}function Qd(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const _u={name:"attention",resolveAll:Y2,tokenize:Q2};function Y2(e,t){let n=-1,r,i,s,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};Bh(p,-c),Bh(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Ht(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Ht(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=Ht(u,Qd(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Ht(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Ht(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,_n(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Q2(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Fh(r);let s;return a;function a(c){return s=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===s)return e.consume(c),l;const u=e.exit("attentionSequence"),d=Fh(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?p:p&&(i||!f)),u._close=!!(s===42?f:f&&(d||!p)),t(c)}}function Bh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const X2={name:"autolink",tokenize:Z2};function Z2(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return yn(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||Rt(h)?(r=1,l(h)):u(h)}function l(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||Rt(h))&&r++<32?(e.consume(h),l):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||ku(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),d):F2(h)?(e.consume(h),u):n(h)}function d(h){return Rt(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||Rt(h))&&r++<63){const x=h===45?f:p;return e.consume(h),x}return n(h)}}const ll={partial:!0,tokenize:eS};function eS(e,t,n){return r;function r(s){return Ee(s)?Ie(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||be(s)?t(s):n(s)}}const _v={continuation:{tokenize:nS},exit:rS,name:"blockQuote",tokenize:tS};function tS(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return Ee(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function nS(e,t,n){const r=this;return i;function i(a){return Ee(a)?Ie(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(_v,t,n)(a)}}function rS(e){e.exit("blockQuote")}const Sv={name:"characterEscape",tokenize:iS};function iS(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return U2(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const Cv={name:"characterReference",tokenize:oS};function oS(e,t,n){const r=this;let i=0,s,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=Rt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=B2,d):(e.enter("characterReferenceValue"),s=7,a=ju,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===Rt&&!Yd(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<s?(e.consume(p),d):n(p)}}const Uh={partial:!0,tokenize:aS},Vh={concrete:!0,name:"codeFenced",tokenize:sS};function sS(e,t,n){const r=this,i={partial:!0,tokenize:z};let s=0,a=0,l;return c;function c(C){return u(C)}function u(C){const A=r.events[r.events.length-1];return s=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,l=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===l?(a++,e.consume(C),d):a<3?n(C):(e.exit("codeFencedFenceSequence"),Ee(C)?Ie(e,p,"whitespace")(C):p(C))}function p(C){return C===null||be(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(Uh,w,k)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(C))}function f(C){return C===null||be(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(C)):Ee(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Ie(e,h,"whitespace")(C)):C===96&&C===l?n(C):(e.consume(C),f)}function h(C){return C===null||be(C)?p(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(C))}function x(C){return C===null||be(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(C)):C===96&&C===l?n(C):(e.consume(C),x)}function w(C){return e.attempt(i,k,j)(C)}function j(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),g}function g(C){return s>0&&Ee(C)?Ie(e,m,"linePrefix",s+1)(C):m(C)}function m(C){return C===null||be(C)?e.check(Uh,w,k)(C):(e.enter("codeFlowValue"),y(C))}function y(C){return C===null||be(C)?(e.exit("codeFlowValue"),m(C)):(e.consume(C),y)}function k(C){return e.exit("codeFenced"),t(C)}function z(C,A,S){let $=0;return N;function N(M){return C.enter("lineEnding"),C.consume(M),C.exit("lineEnding"),R}function R(M){return C.enter("codeFencedFence"),Ee(M)?Ie(C,L,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(M):L(M)}function L(M){return M===l?(C.enter("codeFencedFenceSequence"),W(M)):S(M)}function W(M){return M===l?($++,C.consume(M),W):$>=a?(C.exit("codeFencedFenceSequence"),Ee(M)?Ie(C,T,"whitespace")(M):T(M)):S(M)}function T(M){return M===null||be(M)?(C.exit("codeFencedFence"),A(M)):S(M)}}}function aS(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Zl={name:"codeIndented",tokenize:cS},lS={partial:!0,tokenize:uS};function cS(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Ie(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):be(u)?e.attempt(lS,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||be(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function uS(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):be(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Ie(e,s,"linePrefix",5)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):be(a)?i(a):n(a)}}const dS={name:"codeText",previous:fS,resolve:pS,tokenize:hS};function pS(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function fS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function hS(e,t,n){let r=0,i,s;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(s=e.enter("codeTextSequence"),i=0,d(p)):be(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||be(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(s.type="codeTextData",u(p))}}class mS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Wi(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Wi(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Wi(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Wi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Wi(this.left,n.reverse())}}}function Wi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Nv(e){const t={};let n=-1,r,i,s,a,l,c,u;const d=new mS(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,gS(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return _n(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function gS(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,h=n,x=0,w=0;const j=[w];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(w=f+1,j.push(w),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):j.pop(),f=j.length;f--;){const g=l.slice(j[f],j[f+1]),m=s.pop();c.push([m,m+g.length-1]),e.splice(m,2,g)}for(c.reverse(),f=-1;++f<c.length;)u[x+c[f][0]]=x+c[f][1],x+=c[f][1]-c[f][0]-1;return u}const xS={resolve:vS,tokenize:bS},yS={partial:!0,tokenize:wS};function vS(e){return Nv(e),e}function bS(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):be(l)?e.check(yS,a,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function wS(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Ie(e,s,"linePrefix")}function s(a){if(a===null||be(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Ev(e,t,n,r,i,s,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(g){return g===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(g),e.exit(s),f):g===null||g===32||g===41||ku(g)?n(g):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),w(g))}function f(g){return g===62?(e.enter(s),e.consume(g),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(l),f(g)):g===null||g===60||be(g)?n(g):(e.consume(g),g===92?x:h)}function x(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function w(g){return!d&&(g===null||g===41||Nt(g))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,w):g===41?(e.consume(g),d--,w):g===null||g===32||g===40||ku(g)?n(g):(e.consume(g),g===92?j:w)}function j(g){return g===40||g===41||g===92?(e.consume(g),w):w(g)}}function zv(e,t,n,r,i,s){const a=this;let l=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return l>999||h===null||h===91||h===93&&!c||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):be(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||be(h)||l++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!Ee(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),l++,p):p(h)}}function Tv(e,t,n,r,i,s){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(s),u(f))}function u(f){return f===a?(e.exit(s),c(a)):f===null?n(f):be(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Ie(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||be(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function mo(e,t){let n;return r;function r(i){return be(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Ee(i)?Ie(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const kS={name:"definition",tokenize:_S},jS={partial:!0,tokenize:SS};function _S(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return zv.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=ui(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return Nt(h)?mo(e,u)(h):u(h)}function u(h){return Ev(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(jS,p,p)(h)}function p(h){return Ee(h)?Ie(e,f,"whitespace")(h):f(h)}function f(h){return h===null||be(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function SS(e,t,n){return r;function r(l){return Nt(l)?mo(e,i)(l):n(l)}function i(l){return Tv(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return Ee(l)?Ie(e,a,"whitespace")(l):a(l)}function a(l){return l===null||be(l)?t(l):n(l)}}const CS={name:"hardBreakEscape",tokenize:NS};function NS(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return be(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const ES={name:"headingAtx",resolve:zS,tokenize:TS};function zS(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},_n(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function TS(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||Nt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||be(d)?(e.exit("atxHeading"),t(d)):Ee(d)?Ie(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||Nt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const AS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Wh=["pre","script","style","textarea"],PS={concrete:!0,name:"htmlFlow",resolveTo:RS,tokenize:IS},LS={partial:!0,tokenize:$S},MS={partial:!0,tokenize:OS};function RS(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function IS(e,t,n){const r=this;let i,s,a,l,c;return u;function u(b){return d(b)}function d(b){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(b),p}function p(b){return b===33?(e.consume(b),f):b===47?(e.consume(b),s=!0,w):b===63?(e.consume(b),i=3,r.interrupt?t:v):yn(b)?(e.consume(b),a=String.fromCharCode(b),j):n(b)}function f(b){return b===45?(e.consume(b),i=2,h):b===91?(e.consume(b),i=5,l=0,x):yn(b)?(e.consume(b),i=4,r.interrupt?t:v):n(b)}function h(b){return b===45?(e.consume(b),r.interrupt?t:v):n(b)}function x(b){const V="CDATA[";return b===V.charCodeAt(l++)?(e.consume(b),l===V.length?r.interrupt?t:L:x):n(b)}function w(b){return yn(b)?(e.consume(b),a=String.fromCharCode(b),j):n(b)}function j(b){if(b===null||b===47||b===62||Nt(b)){const V=b===47,P=a.toLowerCase();return!V&&!s&&Wh.includes(P)?(i=1,r.interrupt?t(b):L(b)):AS.includes(a.toLowerCase())?(i=6,V?(e.consume(b),g):r.interrupt?t(b):L(b)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(b):s?m(b):y(b))}return b===45||Rt(b)?(e.consume(b),a+=String.fromCharCode(b),j):n(b)}function g(b){return b===62?(e.consume(b),r.interrupt?t:L):n(b)}function m(b){return Ee(b)?(e.consume(b),m):N(b)}function y(b){return b===47?(e.consume(b),N):b===58||b===95||yn(b)?(e.consume(b),k):Ee(b)?(e.consume(b),y):N(b)}function k(b){return b===45||b===46||b===58||b===95||Rt(b)?(e.consume(b),k):z(b)}function z(b){return b===61?(e.consume(b),C):Ee(b)?(e.consume(b),z):y(b)}function C(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),c=b,A):Ee(b)?(e.consume(b),C):S(b)}function A(b){return b===c?(e.consume(b),c=null,$):b===null||be(b)?n(b):(e.consume(b),A)}function S(b){return b===null||b===34||b===39||b===47||b===60||b===61||b===62||b===96||Nt(b)?z(b):(e.consume(b),S)}function $(b){return b===47||b===62||Ee(b)?y(b):n(b)}function N(b){return b===62?(e.consume(b),R):n(b)}function R(b){return b===null||be(b)?L(b):Ee(b)?(e.consume(b),R):n(b)}function L(b){return b===45&&i===2?(e.consume(b),B):b===60&&i===1?(e.consume(b),E):b===62&&i===4?(e.consume(b),D):b===63&&i===3?(e.consume(b),v):b===93&&i===5?(e.consume(b),I):be(b)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(LS,q,W)(b)):b===null||be(b)?(e.exit("htmlFlowData"),W(b)):(e.consume(b),L)}function W(b){return e.check(MS,T,q)(b)}function T(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),M}function M(b){return b===null||be(b)?W(b):(e.enter("htmlFlowData"),L(b))}function B(b){return b===45?(e.consume(b),v):L(b)}function E(b){return b===47?(e.consume(b),a="",O):L(b)}function O(b){if(b===62){const V=a.toLowerCase();return Wh.includes(V)?(e.consume(b),D):L(b)}return yn(b)&&a.length<8?(e.consume(b),a+=String.fromCharCode(b),O):L(b)}function I(b){return b===93?(e.consume(b),v):L(b)}function v(b){return b===62?(e.consume(b),D):b===45&&i===2?(e.consume(b),v):L(b)}function D(b){return b===null||be(b)?(e.exit("htmlFlowData"),q(b)):(e.consume(b),D)}function q(b){return e.exit("htmlFlow"),t(b)}}function OS(e,t,n){const r=this;return i;function i(a){return be(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):n(a)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function $S(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ll,t,n)}}const DS={name:"htmlText",tokenize:FS};function FS(e,t,n){const r=this;let i,s,a;return l;function l(v){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(v),c}function c(v){return v===33?(e.consume(v),u):v===47?(e.consume(v),z):v===63?(e.consume(v),y):yn(v)?(e.consume(v),S):n(v)}function u(v){return v===45?(e.consume(v),d):v===91?(e.consume(v),s=0,x):yn(v)?(e.consume(v),m):n(v)}function d(v){return v===45?(e.consume(v),h):n(v)}function p(v){return v===null?n(v):v===45?(e.consume(v),f):be(v)?(a=p,E(v)):(e.consume(v),p)}function f(v){return v===45?(e.consume(v),h):p(v)}function h(v){return v===62?B(v):v===45?f(v):p(v)}function x(v){const D="CDATA[";return v===D.charCodeAt(s++)?(e.consume(v),s===D.length?w:x):n(v)}function w(v){return v===null?n(v):v===93?(e.consume(v),j):be(v)?(a=w,E(v)):(e.consume(v),w)}function j(v){return v===93?(e.consume(v),g):w(v)}function g(v){return v===62?B(v):v===93?(e.consume(v),g):w(v)}function m(v){return v===null||v===62?B(v):be(v)?(a=m,E(v)):(e.consume(v),m)}function y(v){return v===null?n(v):v===63?(e.consume(v),k):be(v)?(a=y,E(v)):(e.consume(v),y)}function k(v){return v===62?B(v):y(v)}function z(v){return yn(v)?(e.consume(v),C):n(v)}function C(v){return v===45||Rt(v)?(e.consume(v),C):A(v)}function A(v){return be(v)?(a=A,E(v)):Ee(v)?(e.consume(v),A):B(v)}function S(v){return v===45||Rt(v)?(e.consume(v),S):v===47||v===62||Nt(v)?$(v):n(v)}function $(v){return v===47?(e.consume(v),B):v===58||v===95||yn(v)?(e.consume(v),N):be(v)?(a=$,E(v)):Ee(v)?(e.consume(v),$):B(v)}function N(v){return v===45||v===46||v===58||v===95||Rt(v)?(e.consume(v),N):R(v)}function R(v){return v===61?(e.consume(v),L):be(v)?(a=R,E(v)):Ee(v)?(e.consume(v),R):$(v)}function L(v){return v===null||v===60||v===61||v===62||v===96?n(v):v===34||v===39?(e.consume(v),i=v,W):be(v)?(a=L,E(v)):Ee(v)?(e.consume(v),L):(e.consume(v),T)}function W(v){return v===i?(e.consume(v),i=void 0,M):v===null?n(v):be(v)?(a=W,E(v)):(e.consume(v),W)}function T(v){return v===null||v===34||v===39||v===60||v===61||v===96?n(v):v===47||v===62||Nt(v)?$(v):(e.consume(v),T)}function M(v){return v===47||v===62||Nt(v)?$(v):n(v)}function B(v){return v===62?(e.consume(v),e.exit("htmlTextData"),e.exit("htmlText"),t):n(v)}function E(v){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),O}function O(v){return Ee(v)?Ie(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(v):I(v)}function I(v){return e.enter("htmlTextData"),a(v)}}const Xd={name:"labelEnd",resolveAll:WS,resolveTo:HS,tokenize:qS},BS={tokenize:JS},US={tokenize:KS},VS={tokenize:GS};function WS(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&_n(e,0,e.length,n),e}function HS(e,t){let n=e.length,r=0,i,s,a,l;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Ht(l,e.slice(s+1,s+r+3)),l=Ht(l,[["enter",d,t]]),l=Ht(l,Qd(t.parser.constructs.insideSpan.null,e.slice(s+r+4,a-3),t)),l=Ht(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Ht(l,e.slice(a+1)),l=Ht(l,[["exit",c,t]]),_n(e,s,e.length,l),e}function qS(e,t,n){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(f){return s?s._inactive?p(f):(a=r.parser.defined.includes(ui(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(BS,d,a?d:p)(f):f===91?e.attempt(US,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(VS,d,p)(f)}function d(f){return t(f)}function p(f){return s._balanced=!0,n(f)}}function JS(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return Nt(p)?mo(e,s)(p):s(p)}function s(p){return p===41?d(p):Ev(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return Nt(p)?mo(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Tv(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return Nt(p)?mo(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function KS(e,t,n){const r=this;return i;function i(l){return zv.call(r,e,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(ui(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function GS(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const YS={name:"labelStartImage",resolveAll:Xd.resolveAll,tokenize:QS};function QS(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const XS={name:"labelStartLink",resolveAll:Xd.resolveAll,tokenize:ZS};function ZS(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const ec={name:"lineEnding",tokenize:eC};function eC(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Ie(e,t,"linePrefix")}}const Gs={name:"thematicBreak",tokenize:tC};function tC(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||be(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Ee(u)?Ie(e,l,"whitespace")(u):l(u))}}const vt={continuation:{tokenize:oC},exit:aC,name:"list",tokenize:iC},nC={partial:!0,tokenize:lC},rC={partial:!0,tokenize:sC};function iC(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(h){const x=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:ju(h)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Gs,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return ju(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(ll,r.interrupt?n:d,e.attempt(nC,f,p))}function d(h){return r.containerState.initialBlankLine=!0,s++,f(h)}function p(h){return Ee(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function oC(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ll,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Ie(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!Ee(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(rC,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Ie(e,e.attempt(vt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function sC(e,t,n){const r=this;return Ie(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function aC(e){e.exit(this.containerState.type)}function lC(e,t,n){const r=this;return Ie(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!Ee(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Hh={name:"setextUnderline",resolveTo:cC,tokenize:uC};function cC(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",a,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function uC(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Ee(u)?Ie(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||be(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const dC={tokenize:pC};function pC(e){const t=this,n=e.attempt(ll,r,e.attempt(this.parser.constructs.flowInitial,i,Ie(e,e.attempt(this.parser.constructs.flow,i,e.attempt(xS,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const fC={resolveAll:Pv()},hC=Av("string"),mC=Av("text");function Av(e){return{resolveAll:Pv(e==="text"?gC:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,l);return a;function a(d){return u(d)?s(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Pv(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function gC(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const xC={42:vt,43:vt,45:vt,48:vt,49:vt,50:vt,51:vt,52:vt,53:vt,54:vt,55:vt,56:vt,57:vt,62:_v},yC={91:kS},vC={[-2]:Zl,[-1]:Zl,32:Zl},bC={35:ES,42:Gs,45:[Hh,Gs],60:PS,61:Hh,95:Gs,96:Vh,126:Vh},wC={38:Cv,92:Sv},kC={[-5]:ec,[-4]:ec,[-3]:ec,33:YS,38:Cv,42:_u,60:[X2,DS],91:XS,92:[CS,Sv],93:Xd,95:_u,96:dS},jC={null:[_u,fC]},_C={null:[42,95]},SC={null:[]},CC=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:_C,contentInitial:yC,disable:SC,document:xC,flow:bC,flowInitial:vC,insideSpan:jC,string:wC,text:kC},Symbol.toStringTag,{value:"Module"}));function NC(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],l=[];const c={attempt:A(z),check:A(C),consume:m,enter:y,exit:k,interrupt:A(C,{interrupt:!0})},u={code:null,containerState:{},defineSkip:w,events:[],now:x,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function p(R){return a=Ht(a,R),j(),a[a.length-1]!==null?[]:(S(t,0),u.events=Qd(s,u.events,u),u.events)}function f(R,L){return zC(h(R),L)}function h(R){return EC(a,R)}function x(){const{_bufferIndex:R,_index:L,line:W,column:T,offset:M}=r;return{_bufferIndex:R,_index:L,line:W,column:T,offset:M}}function w(R){i[R.line]=R.column,N()}function j(){let R;for(;r._index<a.length;){const L=a[r._index];if(typeof L=="string")for(R=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===R&&r._bufferIndex<L.length;)g(L.charCodeAt(r._bufferIndex));else g(L)}}function g(R){d=d(R)}function m(R){be(R)?(r.line++,r.column=1,r.offset+=R===-3?2:1,N()):R!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=R}function y(R,L){const W=L||{};return W.type=R,W.start=x(),u.events.push(["enter",W,u]),l.push(W),W}function k(R){const L=l.pop();return L.end=x(),u.events.push(["exit",L,u]),L}function z(R,L){S(R,L.from)}function C(R,L){L.restore()}function A(R,L){return W;function W(T,M,B){let E,O,I,v;return Array.isArray(T)?q(T):"tokenize"in T?q([T]):D(T);function D(Y){return ue;function ue(pe){const J=pe!==null&&Y[pe],F=pe!==null&&Y.null,K=[...Array.isArray(J)?J:J?[J]:[],...Array.isArray(F)?F:F?[F]:[]];return q(K)(pe)}}function q(Y){return E=Y,O=0,Y.length===0?B:b(Y[O])}function b(Y){return ue;function ue(pe){return v=$(),I=Y,Y.partial||(u.currentConstruct=Y),Y.name&&u.parser.constructs.disable.null.includes(Y.name)?P():Y.tokenize.call(L?Object.assign(Object.create(u),L):u,c,V,P)(pe)}}function V(Y){return R(I,v),M}function P(Y){return v.restore(),++O<E.length?b(E[O]):B}}}function S(R,L){R.resolveAll&&!s.includes(R)&&s.push(R),R.resolve&&_n(u.events,L,u.events.length-L,R.resolve(u.events.slice(L),u)),R.resolveTo&&(u.events=R.resolveTo(u.events,u))}function $(){const R=x(),L=u.previous,W=u.currentConstruct,T=u.events.length,M=Array.from(l);return{from:T,restore:B};function B(){r=R,u.previous=L,u.currentConstruct=W,u.events.length=T,l=M,N()}}function N(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function EC(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function zC(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function TC(e){const r={constructs:O2([CC,...(e||{}).extensions||[]]),content:i(H2),defined:[],document:i(J2),flow:i(dC),lazy:{},string:i(hC),text:i(mC)};return r;function i(s){return a;function a(l){return NC(r,s,l)}}}function AC(e){for(;!Nv(e););return e}const qh=/[\0\t\n\r]/g;function PC(){let e=1,t="",n=!0,r;return i;function i(s,a,l){const c=[];let u,d,p,f,h;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),p=0,t="",n&&(s.charCodeAt(0)===65279&&p++,n=void 0);p<s.length;){if(qh.lastIndex=p,u=qh.exec(s),f=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(f),!u){t=s.slice(p);break}if(h===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(s.slice(p,f)),e+=f-p),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const LC=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function MC(e){return e.replace(LC,RC)}function RC(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return jv(n.slice(s?2:1),s?16:10)}return Yd(n)||e}const Lv={}.hasOwnProperty;function IC(e,t,n){return typeof t!="string"&&(n=t,t=void 0),OC(n)(AC(TC(n).document().write(PC()(e,t,!0))))}function OC(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(je),autolinkProtocol:$,autolinkEmail:$,atxHeading:s(Q),blockQuote:s(F),characterEscape:$,characterReference:$,codeFenced:s(K),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(K,a),codeText:s(ee,a),codeTextData:$,data:$,codeFlowValue:$,definition:s(X),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(se),hardBreakEscape:s(Z),hardBreakTrailing:s(Z),htmlFlow:s(re,a),htmlFlowData:$,htmlText:s(re,a),htmlTextData:$,image:s(ve),label:a,link:s(je),listItem:s(ke),listItemValue:f,listOrdered:s(ze,p),listUnordered:s(ze),paragraph:s(H),reference:b,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(Q),strong:s(ae),thematicBreak:s(ye)},exit:{atxHeading:c(),atxHeadingSequence:z,autolink:c(),autolinkEmail:J,autolinkProtocol:pe,blockQuote:c(),characterEscapeValue:N,characterReferenceMarkerHexadecimal:P,characterReferenceMarkerNumeric:P,characterReferenceValue:Y,characterReference:ue,codeFenced:c(j),codeFencedFence:w,codeFencedFenceInfo:h,codeFencedFenceMeta:x,codeFlowValue:N,codeIndented:c(g),codeText:c(M),codeTextData:N,data:N,definition:c(),definitionDestinationString:k,definitionLabelString:m,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(L),hardBreakTrailing:c(L),htmlFlow:c(W),htmlFlowData:N,htmlText:c(T),htmlTextData:N,image:c(E),label:I,labelText:O,lineEnding:R,link:c(B),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:V,resourceDestinationString:v,resourceTitleString:D,resource:q,setextHeading:c(S),setextHeadingLineSequence:A,setextHeadingText:C,strong:c(),thematicBreak:c()}};Mv(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(G){let te={type:"root",children:[]};const xe={stack:[te],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},le=[];let _e=-1;for(;++_e<G.length;)if(G[_e][1].type==="listOrdered"||G[_e][1].type==="listUnordered")if(G[_e][0]==="enter")le.push(_e);else{const Ze=le.pop();_e=i(G,Ze,_e)}for(_e=-1;++_e<G.length;){const Ze=t[G[_e][0]];Lv.call(Ze,G[_e][1].type)&&Ze[G[_e][1].type].call(Object.assign({sliceSerialize:G[_e][2].sliceSerialize},xe),G[_e][1])}if(xe.tokenStack.length>0){const Ze=xe.tokenStack[xe.tokenStack.length-1];(Ze[1]||Jh).call(xe,void 0,Ze[0])}for(te.position={start:Wn(G.length>0?G[0][1].start:{line:1,column:1,offset:0}),end:Wn(G.length>0?G[G.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<t.transforms.length;)te=t.transforms[_e](te)||te;return te}function i(G,te,xe){let le=te-1,_e=-1,Ze=!1,dn,Ut,Xt,Un;for(;++le<=xe;){const et=G[le];switch(et[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{et[0]==="enter"?_e++:_e--,Un=void 0;break}case"lineEndingBlank":{et[0]==="enter"&&(dn&&!Un&&!_e&&!Xt&&(Xt=le),Un=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Un=void 0}if(!_e&&et[0]==="enter"&&et[1].type==="listItemPrefix"||_e===-1&&et[0]==="exit"&&(et[1].type==="listUnordered"||et[1].type==="listOrdered")){if(dn){let pn=le;for(Ut=void 0;pn--;){const yt=G[pn];if(yt[1].type==="lineEnding"||yt[1].type==="lineEndingBlank"){if(yt[0]==="exit")continue;Ut&&(G[Ut][1].type="lineEndingBlank",Ze=!0),yt[1].type="lineEnding",Ut=pn}else if(!(yt[1].type==="linePrefix"||yt[1].type==="blockQuotePrefix"||yt[1].type==="blockQuotePrefixWhitespace"||yt[1].type==="blockQuoteMarker"||yt[1].type==="listItemIndent"))break}Xt&&(!Ut||Xt<Ut)&&(dn._spread=!0),dn.end=Object.assign({},Ut?G[Ut][1].start:et[1].end),G.splice(Ut||le,0,["exit",dn,et[2]]),le++,xe++}if(et[1].type==="listItemPrefix"){const pn={type:"listItem",_spread:!1,start:Object.assign({},et[1].start),end:void 0};dn=pn,G.splice(le,0,["enter",pn,et[2]]),le++,xe++,Xt=void 0,Un=!0}}}return G[te][1]._spread=Ze,xe}function s(G,te){return xe;function xe(le){l.call(this,G(le),le),te&&te.call(this,le)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(G,te,xe){this.stack[this.stack.length-1].children.push(G),this.stack.push(G),this.tokenStack.push([te,xe||void 0]),G.position={start:Wn(te.start),end:void 0}}function c(G){return te;function te(xe){G&&G.call(this,xe),u.call(this,xe)}}function u(G,te){const xe=this.stack.pop(),le=this.tokenStack.pop();if(le)le[0].type!==G.type&&(te?te.call(this,G,le[0]):(le[1]||Jh).call(this,G,le[0]));else throw new Error("Cannot close `"+G.type+"` ("+ho({start:G.start,end:G.end})+"): it’s not open");xe.position.end=Wn(G.end)}function d(){return R2(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(G){if(this.data.expectingFirstListItemValue){const te=this.stack[this.stack.length-2];te.start=Number.parseInt(this.sliceSerialize(G),10),this.data.expectingFirstListItemValue=void 0}}function h(){const G=this.resume(),te=this.stack[this.stack.length-1];te.lang=G}function x(){const G=this.resume(),te=this.stack[this.stack.length-1];te.meta=G}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function j(){const G=this.resume(),te=this.stack[this.stack.length-1];te.value=G.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const G=this.resume(),te=this.stack[this.stack.length-1];te.value=G.replace(/(\r?\n|\r)$/g,"")}function m(G){const te=this.resume(),xe=this.stack[this.stack.length-1];xe.label=te,xe.identifier=ui(this.sliceSerialize(G)).toLowerCase()}function y(){const G=this.resume(),te=this.stack[this.stack.length-1];te.title=G}function k(){const G=this.resume(),te=this.stack[this.stack.length-1];te.url=G}function z(G){const te=this.stack[this.stack.length-1];if(!te.depth){const xe=this.sliceSerialize(G).length;te.depth=xe}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function A(G){const te=this.stack[this.stack.length-1];te.depth=this.sliceSerialize(G).codePointAt(0)===61?1:2}function S(){this.data.setextHeadingSlurpLineEnding=void 0}function $(G){const xe=this.stack[this.stack.length-1].children;let le=xe[xe.length-1];(!le||le.type!=="text")&&(le=me(),le.position={start:Wn(G.start),end:void 0},xe.push(le)),this.stack.push(le)}function N(G){const te=this.stack.pop();te.value+=this.sliceSerialize(G),te.position.end=Wn(G.end)}function R(G){const te=this.stack[this.stack.length-1];if(this.data.atHardBreak){const xe=te.children[te.children.length-1];xe.position.end=Wn(G.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(te.type)&&($.call(this,G),N.call(this,G))}function L(){this.data.atHardBreak=!0}function W(){const G=this.resume(),te=this.stack[this.stack.length-1];te.value=G}function T(){const G=this.resume(),te=this.stack[this.stack.length-1];te.value=G}function M(){const G=this.resume(),te=this.stack[this.stack.length-1];te.value=G}function B(){const G=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";G.type+="Reference",G.referenceType=te,delete G.url,delete G.title}else delete G.identifier,delete G.label;this.data.referenceType=void 0}function E(){const G=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";G.type+="Reference",G.referenceType=te,delete G.url,delete G.title}else delete G.identifier,delete G.label;this.data.referenceType=void 0}function O(G){const te=this.sliceSerialize(G),xe=this.stack[this.stack.length-2];xe.label=MC(te),xe.identifier=ui(te).toLowerCase()}function I(){const G=this.stack[this.stack.length-1],te=this.resume(),xe=this.stack[this.stack.length-1];if(this.data.inReference=!0,xe.type==="link"){const le=G.children;xe.children=le}else xe.alt=te}function v(){const G=this.resume(),te=this.stack[this.stack.length-1];te.url=G}function D(){const G=this.resume(),te=this.stack[this.stack.length-1];te.title=G}function q(){this.data.inReference=void 0}function b(){this.data.referenceType="collapsed"}function V(G){const te=this.resume(),xe=this.stack[this.stack.length-1];xe.label=te,xe.identifier=ui(this.sliceSerialize(G)).toLowerCase(),this.data.referenceType="full"}function P(G){this.data.characterReferenceType=G.type}function Y(G){const te=this.sliceSerialize(G),xe=this.data.characterReferenceType;let le;xe?(le=jv(te,xe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):le=Yd(te);const _e=this.stack[this.stack.length-1];_e.value+=le}function ue(G){const te=this.stack.pop();te.position.end=Wn(G.end)}function pe(G){N.call(this,G);const te=this.stack[this.stack.length-1];te.url=this.sliceSerialize(G)}function J(G){N.call(this,G);const te=this.stack[this.stack.length-1];te.url="mailto:"+this.sliceSerialize(G)}function F(){return{type:"blockquote",children:[]}}function K(){return{type:"code",lang:null,meta:null,value:""}}function ee(){return{type:"inlineCode",value:""}}function X(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function se(){return{type:"emphasis",children:[]}}function Q(){return{type:"heading",depth:0,children:[]}}function Z(){return{type:"break"}}function re(){return{type:"html",value:""}}function ve(){return{type:"image",title:null,url:"",alt:null}}function je(){return{type:"link",title:null,url:"",children:[]}}function ze(G){return{type:"list",ordered:G.type==="listOrdered",start:null,spread:G._spread,children:[]}}function ke(G){return{type:"listItem",spread:G._spread,checked:null,children:[]}}function H(){return{type:"paragraph",children:[]}}function ae(){return{type:"strong",children:[]}}function me(){return{type:"text",value:""}}function ye(){return{type:"thematicBreak"}}}function Wn(e){return{line:e.line,column:e.column,offset:e.offset}}function Mv(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Mv(e,r):$C(e,r)}}function $C(e,t){let n;for(n in t)if(Lv.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Jh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+ho({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+ho({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+ho({start:t.start,end:t.end})+") is still open")}function DC(e){const t=this;t.parser=n;function n(r){return IC(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function FC(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function BC(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function UC(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function VC(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function WC(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function HC(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Ai(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function qC(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function JC(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Rv(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function KC(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Rv(e,t);const i={src:Ai(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function GC(e,t){const n={src:Ai(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function YC(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function QC(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Rv(e,t);const i={href:Ai(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function XC(e,t){const n={href:Ai(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function ZC(e,t,n){const r=e.all(t),i=n?eN(n):Iv(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function eN(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Iv(n[r])}return t}function Iv(e){const t=e.spread;return t??e.children.length>1}function tN(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function nN(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function rN(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function iN(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function oN(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=qd(t.children[1]),c=gv(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function sN(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},h=a?a[c]:void 0;h&&(f.align=h);let x={type:"element",tagName:s,properties:f,children:[]};p&&(x.children=e.all(p),e.patch(p,x),x=e.applyData(p,x)),u.push(x)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function aN(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Kh=9,Gh=32;function lN(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(Yh(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(Yh(t.slice(i),i>0,!1)),s.join("")}function Yh(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===Kh||s===Gh;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===Kh||s===Gh;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function cN(e,t){const n={type:"text",value:lN(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function uN(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const dN={blockquote:FC,break:BC,code:UC,delete:VC,emphasis:WC,footnoteReference:HC,heading:qC,html:JC,imageReference:KC,image:GC,inlineCode:YC,linkReference:QC,link:XC,listItem:ZC,list:tN,paragraph:nN,root:rN,strong:iN,table:oN,tableCell:aN,tableRow:sN,text:cN,thematicBreak:uN,toml:Es,yaml:Es,definition:Es,footnoteDefinition:Es};function Es(){}const Ov=-1,cl=0,go=1,Ta=2,Zd=3,ep=4,tp=5,np=6,$v=7,Dv=8,Qh=typeof self=="object"?self:globalThis,pN=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case cl:case Ov:return n(a,i);case go:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Ta:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case Zd:return n(new Date(a),i);case ep:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case tp:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case np:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case $v:{const{name:l,message:c}=a;return n(new Qh[l](c),i)}case Dv:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Qh[s](a),i)};return r},Xh=e=>pN(new Map,e)(0),Ur="",{toString:fN}={},{keys:hN}=Object,Hi=e=>{const t=typeof e;if(t!=="object"||!e)return[cl,t];const n=fN.call(e).slice(8,-1);switch(n){case"Array":return[go,Ur];case"Object":return[Ta,Ur];case"Date":return[Zd,Ur];case"RegExp":return[ep,Ur];case"Map":return[tp,Ur];case"Set":return[np,Ur];case"DataView":return[go,n]}return n.includes("Array")?[go,n]:n.includes("Error")?[$v,n]:[Ta,n]},zs=([e,t])=>e===cl&&(t==="function"||t==="symbol"),mN=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},s=a=>{if(n.has(a))return n.get(a);let[l,c]=Hi(a);switch(l){case cl:{let d=a;switch(c){case"bigint":l=Dv,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Ov],a)}return i([l,d],a)}case go:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(s(f));return p}case Ta:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],p=i([l,d],a);for(const f of hN(a))(e||!zs(Hi(a[f])))&&d.push([s(f),s(a[f])]);return p}case Zd:return i([l,a.toISOString()],a);case ep:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case tp:{const d=[],p=i([l,d],a);for(const[f,h]of a)(e||!(zs(Hi(f))||zs(Hi(h))))&&d.push([s(f),s(h)]);return p}case np:{const d=[],p=i([l,d],a);for(const f of a)(e||!zs(Hi(f)))&&d.push(s(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return s},Zh=(e,{json:t,lossy:n}={})=>{const r=[];return mN(!(t||n),!!t,new Map,r)(e),r},Aa=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Xh(Zh(e,t)):structuredClone(e):(e,t)=>Xh(Zh(e,t));function gN(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function xN(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function yN(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||gN,r=e.options.footnoteBackLabel||xN,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Ai(p.toLowerCase());let h=0;const x=[],w=e.footnoteCounts.get(p);for(;w!==void 0&&++h<=w;){x.length>0&&x.push({type:"text",value:" "});let m=typeof n=="string"?n:n(c,h);typeof m=="string"&&(m={type:"text",value:m}),x.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const j=d[d.length-1];if(j&&j.type==="element"&&j.tagName==="p"){const m=j.children[j.children.length-1];m&&m.type==="text"?m.value+=" ":j.children.push({type:"text",value:" "}),j.children.push(...x)}else d.push(...x);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Aa(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Fv=function(e){if(e==null)return kN;if(typeof e=="function")return ul(e);if(typeof e=="object")return Array.isArray(e)?vN(e):bN(e);if(typeof e=="string")return wN(e);throw new Error("Expected function, string, or object as test")};function vN(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Fv(e[n]);return ul(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function bN(e){const t=e;return ul(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function wN(e){return ul(t);function t(n){return n&&n.type===e}}function ul(e){return t;function t(n,r,i){return!!(jN(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function kN(){return!0}function jN(e){return e!==null&&typeof e=="object"&&"type"in e}const Bv=[],_N=!0,em=!1,SN="skip";function CN(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=Fv(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=Bv,x,w,j;if((!t||s(c,u,d[d.length-1]||void 0))&&(h=NN(n(c,d)),h[0]===em))return h;if("children"in c&&c.children){const g=c;if(g.children&&h[0]!==SN)for(w=(r?g.children.length:-1)+a,j=d.concat(g);w>-1&&w<g.children.length;){const m=g.children[w];if(x=l(m,w,j)(),x[0]===em)return x;w=typeof x[1]=="number"?x[1]:w+a}}return h}}}function NN(e){return Array.isArray(e)?e:typeof e=="number"?[_N,e]:e==null?Bv:[e]}function Uv(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),CN(e,s,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const Su={}.hasOwnProperty,EN={};function zN(e,t){const n=t||EN,r=new Map,i=new Map,s=new Map,a={...dN,...n.handlers},l={all:u,applyData:AN,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:c,options:n,patch:TN,wrap:LN};return Uv(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,h=l.handlers[f];if(Su.call(l.handlers,f)&&h)return h(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:w,...j}=d,g=Aa(j);return g.children=l.all(d),g}return Aa(d)}return(l.options.unknownHandler||PN)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const x=l.one(f[h],d);if(x){if(h&&f[h-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=tm(x.value)),!Array.isArray(x)&&x.type==="element")){const w=x.children[0];w&&w.type==="text"&&(w.value=tm(w.value))}Array.isArray(x)?p.push(...x):p.push(x)}}}return p}}function TN(e,t){e.position&&(t.position=f2(e))}function AN(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Aa(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function PN(e,t){const n=t.data||{},r="value"in t&&!(Su.call(n,"hProperties")||Su.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function LN(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function tm(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function nm(e,t){const n=zN(e,t),r=n.one(e,void 0),i=yN(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function MN(e,t){return e&&"run"in e?async function(n,r){const i=nm(n,{file:r,...t});await e.run(i,r)}:function(n,r){return nm(n,{file:r,...e||t})}}function rm(e){if(e)throw e}var Ys=Object.prototype.hasOwnProperty,Vv=Object.prototype.toString,im=Object.defineProperty,om=Object.getOwnPropertyDescriptor,sm=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Vv.call(t)==="[object Array]"},am=function(t){if(!t||Vv.call(t)!=="[object Object]")return!1;var n=Ys.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Ys.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Ys.call(t,i)},lm=function(t,n){im&&n.name==="__proto__"?im(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},cm=function(t,n){if(n==="__proto__")if(Ys.call(t,n)){if(om)return om(t,n).value}else return;return t[n]},RN=function e(){var t,n,r,i,s,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=cm(l,n),i=cm(t,n),l!==i&&(d&&i&&(am(i)||(s=sm(i)))?(s?(s=!1,a=r&&sm(r)?r:[]):a=r&&am(r)?r:{},lm(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&lm(l,{name:n,newValue:i}));return l};const tc=Fa(RN);function Cu(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function IN(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++s];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?ON(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function ON(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(a,...l){n||(n=!0,t(a,...l))}function s(a){i(null,a)}}const gn={basename:$N,dirname:DN,extname:FN,join:BN,sep:"/"};function $N(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');rs(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function DN(e){if(rs(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function FN(e){rs(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function BN(...e){let t=-1,n;for(;++t<e.length;)rs(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":UN(n)}function UN(e){rs(e);const t=e.codePointAt(0)===47;let n=VN(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function VN(e,t){let n="",r=0,i=-1,s=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else l===46&&s>-1?s++:s=-1}return n}function rs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const WN={cwd:HN};function HN(){return"/"}function Nu(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function qN(e){if(typeof e=="string")e=new URL(e);else if(!Nu(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return JN(e)}function JN(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const nc=["history","path","basename","stem","extname","dirname"];class Wv{constructor(t){let n;t?Nu(t)?n={path:t}:typeof t=="string"||KN(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":WN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<nc.length;){const s=nc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)nc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?gn.basename(this.path):void 0}set basename(t){ic(t,"basename"),rc(t,"basename"),this.path=gn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?gn.dirname(this.path):void 0}set dirname(t){um(this.basename,"dirname"),this.path=gn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?gn.extname(this.path):void 0}set extname(t){if(rc(t,"extname"),um(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=gn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Nu(t)&&(t=qN(t)),ic(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?gn.basename(this.path,this.extname):void 0}set stem(t){ic(t,"stem"),rc(t,"stem"),this.path=gn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new dt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function rc(e,t){if(e&&e.includes(gn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+gn.sep+"`")}function ic(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function um(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function KN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const GN=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},YN={}.hasOwnProperty;class rp extends GN{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=IN()}copy(){const t=new rp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(tc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(ac("data",this.frozen),this.namespace[t]=n,this):YN.call(this.namespace,t)&&this.namespace[t]||void 0:t?(ac("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ts(t),r=this.parser||this.Parser;return oc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),oc("process",this.parser||this.Parser),sc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const l=Ts(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const h=p,x=r.stringify(h,f);ZN(x)?f.value=x:f.result=x,u(d,f)});function u(d,p){d||!p?a(d):s?s(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),oc("processSync",this.parser||this.Parser),sc("processSync",this.compiler||this.Compiler),this.process(t,i),pm("processSync","process",n),r;function i(s,a){n=!0,rm(s),r=a}}run(t,n,r){dm(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,l){const c=Ts(n);i.run(t,c,u);function u(d,p,f){const h=p||t;d?l(d):a?a(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),pm("runSync","run",r),i;function s(a,l){rm(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Ts(n),i=this.compiler||this.Compiler;return sc("stringify",i),dm(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(ac("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=tc(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[h,...x]=d;const w=r[f][1];Cu(w)&&Cu(h)&&(h=tc(!0,w,h)),r[f]=[u,h,...x]}}}}const QN=new rp().freeze();function oc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function sc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ac(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function dm(e){if(!Cu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function pm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ts(e){return XN(e)?e:new Wv(e)}function XN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function ZN(e){return typeof e=="string"||e4(e)}function e4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const t4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",fm=[],hm={allowDangerousHtml:!0},n4=/^(https?|ircs?|mailto|xmpp)$/i,r4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Hv(e){const t=i4(e),n=o4(e);return s4(t.runSync(t.parse(n),n),e)}function i4(e){const t=e.rehypePlugins||fm,n=e.remarkPlugins||fm,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...hm}:hm;return QN().use(DC).use(n).use(MN,r).use(t)}function o4(e){const t=e.children||"",n=new Wv;return typeof t=="string"&&(n.value=t),n}function s4(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||a4;for(const d of r4)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+t4+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Uv(e,u),y2(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in Xl)if(Object.hasOwn(Xl,h)&&Object.hasOwn(d.properties,h)){const x=d.properties[h],w=Xl[h];(w===null||w.includes(d.tagName))&&(d.properties[h]=c(String(x||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function a4(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||n4.test(e.slice(0,t))?e:""}function l4({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=_.useState(!1),[a,l]=_.useState(r),c=_.useRef(null),u=_.useRef(null);_.useEffect(()=>{if(e){const f=e.split(`
`).length,h=Math.max(r,Math.min(f*20+40,500));l(h)}},[e,r]),_.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&s(!1)}return _.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),o.jsxs("div",{ref:c,className:"markdown-editor",children:[o.jsx("style",{children:`
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
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(Kt,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(Qk,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(Hv,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function c4(e){return/^[a-zA-Z0-9_]+$/.test(e)}function u4({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:a}=ut(),[l,c]=_.useState(new Set(["basic","model","tools","subagents"])),[u,d]=_.useState(!1),[p,f]=_.useState(!1),[h,x]=_.useState(!1),[w,j]=_.useState(""),[g,m]=_.useState(null);if(!t)return null;function y(E){n(e.id,E)}function k(E){if(E===""){m(null),y({name:E});return}c4(E)?m(null):m("Name can only contain letters, numbers, and underscores"),e.type==="LlmAgent"?y({name:E,output_key:E}):y({name:E})}function z(E){const O=new Set(l);O.has(E)?O.delete(E):O.add(E),c(O)}const C=e.type==="LlmAgent",A=e;function S(E){C&&y({tools:[...A.tools,E]})}function $(E){C&&y({tools:A.tools.filter((O,I)=>I!==E)})}function N(E,O){if(!C)return;const I=[...A.tools];I[E]=O,y({tools:I})}function R(E){"sub_agents"in e&&y({sub_agents:[...e.sub_agents,E]})}function L(E){"sub_agents"in e&&y({sub_agents:e.sub_agents.filter(O=>O!==E)})}const W=t.agents.filter(E=>E.id!==e.id);async function T(){if(!(!t||!C)){d(!0);try{const E=A.instruction||"",O=E?`Current instruction to improve:

${E}

Please improve and expand this instruction while preserving its core intent.`:void 0,v=t.agents.some(q=>q.id===e.id)?void 0:e,D=await Ks(t.id,e.id,O,v);D.success&&D.prompt?y({instruction:D.prompt}):alert("Failed to generate prompt: "+(D.error||"Unknown error"))}catch(E){alert("Error generating prompt: "+E.message)}finally{d(!1)}}}async function M(){if(!(!t||!C||!w.trim())){d(!0);try{const O=`Current instruction:

${A.instruction||""}

---

Requested changes:
${w}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,v=t.agents.some(q=>q.id===e.id)?void 0:e,D=await Ks(t.id,e.id,O,v);D.success&&D.prompt?(y({instruction:D.prompt}),x(!1),j("")):alert("Failed to apply changes: "+(D.error||"Unknown error"))}catch(E){alert("Error applying changes: "+E.message)}finally{d(!1)}}}async function B(){if(!t||!C)return;const E=A.instruction;if(!E){alert("Please write an instruction first");return}f(!0);try{const O=`Write a 5-10 word description of what this agent does.

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
${E.slice(0,500)}

Your response (5-10 words only):`,I=await Ks(t.id,e.id,O);if(I.success&&I.prompt){let v=I.prompt.trim();v=v.replace(/^["']|["']$/g,"").trim();const D=v.split(/[.!?\n]/)[0].trim(),q=D.length>80?D.slice(0,77)+"...":D;y({description:q})}else alert("Failed to generate description: "+(I.error||"Unknown error"))}catch(O){alert("Error generating description: "+O.message)}finally{f(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Er,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:e.name,onChange:E=>k(E.target.value),placeholder:"Agent name",style:{borderColor:g?"var(--error)":void 0}}),g&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:g})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),s("run")},title:"Test this agent",children:[o.jsx(pr,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(qi,{id:"basic",title:"Basic Info",icon:o.jsx(Er,{size:16}),expanded:l.has("basic"),onToggle:()=>z("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),C&&A.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:B,disabled:p,title:"Generate description from instruction",children:p?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:E=>y({description:E.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),C&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Instruction"}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(!h),disabled:u||!A.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:T,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),h&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:w,onChange:E=>j(E.target.value),placeholder:"Describe what changes you want...",onKeyDown:E=>{E.key==="Enter"&&w.trim()?M():E.key==="Escape"&&(x(!1),j(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:M,disabled:u||!w.trim(),children:"Apply"})]}),o.jsx(l4,{value:A.instruction,onChange:E=>y({instruction:E}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:A.output_key||"",onChange:E=>y({output_key:E.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(E=>o.jsx("option",{value:E.name,children:E.name},E.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:A.include_contents,onChange:E=>y({include_contents:E.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:A.disallow_transfer_to_parent,onChange:E=>y({disallow_transfer_to_parent:E.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:A.disallow_transfer_to_peers,onChange:E=>y({disallow_transfer_to_peers:E.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:E=>y({max_iterations:parseInt(E.target.value)||void 0}),placeholder:"No limit"})]})})]}),C&&o.jsx(qi,{id:"model",title:"Model",icon:o.jsx(Od,{size:16}),expanded:l.has("model"),onToggle:()=>z("model"),children:o.jsx(p4,{agent:A,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:E=>y({model:E})})}),C&&o.jsx(qi,{id:"tools",title:`Tools (${A.tools.length})`,icon:o.jsx(ln,{size:16}),expanded:l.has("tools"),onToggle:()=>z("tools"),children:o.jsx(d4,{tools:A.tools,onAdd:S,onRemove:$,onUpdate:N,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:W,skillsets:t.skillsets||[]})}),"sub_agents"in e&&o.jsx(qi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(Xy,{size:16}),expanded:l.has("subagents"),onToggle:()=>z("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(E=>{const O=t.agents.find(I=>I.id===E);return O?o.jsxs("div",{className:"sub-agent-chip",children:[O.name,o.jsx("button",{onClick:()=>L(E),children:o.jsx(Fe,{size:12})})]},E):null}),o.jsxs("select",{value:"",onChange:E=>{E.target.value&&R(E.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),W.filter(E=>!e.sub_agents.includes(E.id)).map(E=>o.jsx("option",{value:E.id,children:E.name},E.id))]})]})}),o.jsx(qi,{id:"callbacks",title:"Callbacks",icon:o.jsx(jn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>z("callbacks"),children:o.jsx(f4,{agent:e,onUpdate:y,customCallbacks:t.custom_callbacks||[],isLlmAgent:C})})]})]})}function qi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(Pt,{size:16}):o.jsx(bt,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function d4({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=_.useState(!1),[f,h]=_.useState({}),[x,w]=_.useState(""),j=It.useRef(null),g=It.useRef(null),[m,y]=_.useState(null),[k,z]=_.useState(new Set),C=(P,Y)=>{if(!x.trim())return!0;const ue=x.toLowerCase();return P.toLowerCase().includes(ue)||((Y==null?void 0:Y.toLowerCase().includes(ue))??!1)},A=i.filter(P=>C(P.name,P.description)),S=s.filter(P=>C(P.name,P.description)),$=a.filter(P=>C(P.name,P.description)),N=l.filter(P=>C(P.name,P.description)),R=c.filter(P=>C(P.name,P.description)),L=u.filter(P=>C(P.name,P.description));function W(){if(j.current){const P=j.current.getBoundingClientRect(),Y=window.innerHeight,ue=350,pe=Y-P.bottom-16,J=P.top-16;if(pe>=200||pe>=J){const F=Math.min(ue,pe);h({top:P.bottom+4,left:P.left,maxHeight:F})}else{const F=Math.min(ue,J);h({top:P.top-F-4,left:P.left,maxHeight:F})}}p(!0),w(""),setTimeout(()=>{var P;return(P=g.current)==null?void 0:P.focus()},50)}function T(){p(!1),w("")}function M(P){t({type:"builtin",name:P}),T()}async function B(P){T();const Y=P.tool_filter||[];if(y({server:P,enabledTools:new Set(Y),availableTools:Y.map(ue=>({name:ue,description:""})),isLoading:Y.length===0,error:void 0}),Y.length===0)try{const{testMcpServer:ue}=await fj(async()=>{const{testMcpServer:J}=await Promise.resolve().then(()=>Ok);return{testMcpServer:J}},void 0),pe=await ue({connection_type:P.connection_type,command:P.command,args:P.args,env:P.env,url:P.url,headers:P.headers,timeout:P.timeout||30});pe.success?y(J=>J?{...J,availableTools:pe.tools,enabledTools:new Set(pe.tools.map(F=>F.name)),isLoading:!1}:null):y(J=>J?{...J,isLoading:!1,error:pe.error||"Failed to connect to MCP server"}:null)}catch(ue){y(pe=>pe?{...pe,isLoading:!1,error:ue.message}:null)}}function E(P){if(!m)return;const Y=new Set(m.enabledTools);Y.has(P)?Y.delete(P):Y.add(P),y({...m,enabledTools:Y})}function O(){if(!m)return;const P=Array.from(m.enabledTools);t({type:"mcp",server:{...m.server,tool_filter:P}}),y(null)}function I(P){const Y=new Set(k);Y.has(P)?Y.delete(P):Y.add(P),z(Y)}function v(P,Y){const ue=e[P];if(ue.type!=="mcp"||!ue.server)return;const pe=ue.server.tool_filter||[];let J;pe.includes(Y)?J=pe.filter(F=>F!==Y):J=[...pe,Y],r(P,{...ue,server:{...ue.server,tool_filter:J}})}function D(P){t({type:"function",name:P.name,module_path:P.module_path}),T()}function q(P){const Y=c.find(ue=>ue.id===P);t({type:"agent",agent_id:P,name:Y==null?void 0:Y.name}),T()}function b(P){const Y=u.find(ue=>ue.id===P);t({type:"skillset",skillset_id:P,name:Y==null?void 0:Y.name}),T()}function V(P){return s.find(Y=>Y.name===P)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((P,Y)=>{var ue;return P.type==="mcp"&&P.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>I(Y),children:[k.has(Y)?o.jsx(Pt,{size:14}):o.jsx(bt,{size:14}),o.jsx(ln,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:P.server.name}),o.jsx("div",{className:"mcp-tool-count",children:P.server.tool_filter===null||P.server.tool_filter===void 0?"all tools":`${P.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:pe=>{pe.stopPropagation(),n(Y)},children:o.jsx(Fe,{size:14})})]}),k.has(Y)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const pe=V(P.server.name),J=(pe==null?void 0:pe.tool_filter)||P.server.tool_filter||[],F=new Set(P.server.tool_filter||[]);return J.map(K=>o.jsxs("label",{className:`mcp-tool-chip ${F.has(K)?"enabled":"disabled"}`,onClick:()=>v(Y,K),children:[o.jsx("input",{type:"checkbox",checked:F.has(K),onChange:()=>{},style:{display:"none"}}),K]},K))})()})})]},Y):P.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(Rn,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:P.name||((ue=u.find(pe=>pe.id===P.skillset_id))==null?void 0:ue.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(Y),children:o.jsx(Fe,{size:14})})]},Y):o.jsxs("div",{className:"tool-item",children:[o.jsx(ln,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:P.name||P.agent_id}),o.jsx("div",{className:"tool-item-type",children:P.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(Y),children:o.jsx(Fe,{size:14})})]},Y)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:j,className:"btn btn-secondary btn-sm",onClick:()=>d?T():W(),children:[o.jsx(Ke,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:T}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:g,type:"text",placeholder:"Search tools...",value:x,onChange:P=>w(P.target.value),onKeyDown:P=>P.key==="Escape"&&T()})}),A.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),A.map(P=>o.jsxs("button",{className:"dropdown-item",onClick:()=>M(P.name),children:[o.jsx("div",{className:"dropdown-item-name",children:P.name}),o.jsx("div",{className:"dropdown-item-desc",children:P.description})]},P.name))]}),S.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Known MCP Servers (",S.length,")"]}),S.map(P=>o.jsxs("button",{className:"dropdown-item",onClick:()=>B(P),children:[o.jsxs("div",{className:"dropdown-item-name",children:[P.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:P.tool_filter===null||P.tool_filter===void 0?"all tools":`${P.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:P.description})]},`known-${P.name}`))]}),$.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",$.length,")"]}),$.map(P=>o.jsxs("button",{className:"dropdown-item",onClick:()=>B(P),children:[o.jsxs("div",{className:"dropdown-item-name",children:[P.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:P.tool_filter===null||P.tool_filter===void 0?"all tools":`${P.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:P.description||"Custom MCP server"})]},`project-${P.id||P.name}`))]}),N.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),N.map(P=>o.jsxs("button",{className:"dropdown-item",onClick:()=>D(P),children:[o.jsx("div",{className:"dropdown-item-name",children:P.name}),o.jsx("div",{className:"dropdown-item-desc",children:P.description})]},P.id))]}),R.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),R.map(P=>o.jsxs("button",{className:"dropdown-item",onClick:()=>q(P.id),children:[o.jsx("div",{className:"dropdown-item-name",children:P.name}),o.jsx("div",{className:"dropdown-item-desc",children:P.type})]},P.id))]}),L.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",L.length,")"]}),L.map(P=>o.jsxs("button",{className:"dropdown-item",onClick:()=>b(P.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[P.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[P.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:P.description||"Vector knowledge base"})]},P.id))]}),x.trim()&&A.length===0&&S.length===0&&$.length===0&&N.length===0&&R.length===0&&L.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',x,'"']})]})]})]}),m&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",m.server.name]}),o.jsx("p",{children:m.server.description}),m.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):m.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",m.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...m,enabledTools:new Set(m.availableTools.map(P=>P.name))}),children:["Select All (",m.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...m,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:m.availableTools.map(P=>o.jsxs("div",{className:"mcp-tool-row",title:P.description||P.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:m.enabledTools.has(P.name),onChange:()=>E(P.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:m.enabledTools.has(P.name)?1:.5,cursor:"pointer"},onClick:()=>E(P.name),children:P.name})]},P.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>y(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:O,disabled:m.enabledTools.size===0,children:["Add ",m.enabledTools.size," Tools"]})]})]})})]})}function p4({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,h;const s=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!s,c=s||(()=>{if(!e.model)return n;const x=t.find(w=>{var j,g,m;return w.provider===((j=e.model)==null?void 0:j.provider)&&w.model_name===((g=e.model)==null?void 0:g.model_name)&&w.api_base===((m=e.model)==null?void 0:m.api_base)});return x==null?void 0:x.id})()||n||((h=t[0])==null?void 0:h.id);It.useEffect(()=>{var x,w,j,g,m;if(s){const y=t.find(k=>k.id===s);y&&(((x=e.model)==null?void 0:x.provider)!==y.provider||((w=e.model)==null?void 0:w.model_name)!==y.model_name||((j=e.model)==null?void 0:j.api_base)!==y.api_base||((g=e.model)==null?void 0:g.temperature)!==y.temperature||((m=e.model)==null?void 0:m.max_output_tokens)!==y.max_output_tokens)&&i({provider:y.provider,model_name:y.model_name,api_base:y.api_base,temperature:y.temperature,max_output_tokens:y.max_output_tokens,top_p:y.top_p,top_k:y.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,i]);function u(x){const w=t.find(j=>j.id===x);w&&i({provider:w.provider,model_name:w.model_name,api_base:w.api_base,temperature:w.temperature,max_output_tokens:w.max_output_tokens,top_p:w.top_p,top_k:w.top_k,fallbacks:[],_appModelId:x})}function d(){var x;if(a){const w=n||((x=t[0])==null?void 0:x.id);w&&u(w)}else{const w=e.model;if(w){const{_appModelId:j,...g}=w;i(g)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(x){const{_appModelId:w,...j}=e.model||{};i({...j,...x})}return t.find(x=>x.id===c),t.find(x=>x.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(x=>o.jsx("div",{className:`app-model-item ${c===x.id?"selected":""}`,onClick:()=>u(x.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[x.name,x.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(Qy,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[x.provider," / ",x.model_name,x.api_base&&` • ${x.api_base}`]})]})},x.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&o.jsx("div",{className:"custom-model-form",children:o.jsx(ev,{projectId:r,values:e.model||{},onChange:p})})]})}const lc=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function f4({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[...lc,...n],s=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...s,...a]:s;function c(d,p){const f=e[d]||[],h=i.find(x=>x.id===p);h&&t({[d]:[...f,{module_path:h.module_path}]})}function u(d,p){const f=e[d]||[];t({[d]:f.filter((h,x)=>x!==p)})}return o.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:p})=>{const f=e[d]||[],h=i;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:p}),h.length>0&&o.jsxs("select",{value:"",onChange:x=>{x.target.value&&(c(d,x.target.value),x.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),o.jsx("optgroup",{label:"Built-in",children:lc.filter(x=>!f.some(w=>w.module_path===x.module_path)).map(x=>o.jsx("option",{value:x.id,children:x.name},x.id))}),o.jsx("optgroup",{label:"Custom",children:n.filter(x=>!f.some(w=>w.module_path===x.module_path)).map(x=>o.jsx("option",{value:x.id,children:x.name},x.id))})]})]}),f.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:f.map((x,w)=>{const j=i.find(m=>m.module_path===x.module_path),g=lc.some(m=>m.module_path===x.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:g?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(j==null?void 0:j.description)||"",children:[o.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[g&&o.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(j==null?void 0:j.name)||x.module_path]}),o.jsx("button",{onClick:()=>u(d,w),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Fe,{size:12})})]},w)})})]},d)})})}const cc=[{type:"LlmAgent",label:"LLM Agent",icon:Er,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:nj,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:Zk,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:hu,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function h4(){return`agent_${Date.now().toString(36)}`}function m4(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function g4(e,t){const n=h4(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},i={id:n,name:r[e]||"new_agent",description:""},s=t?m4(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...i,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...i,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...i,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...i,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function x4({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:s,setSelectedAgentId:a,mcpServers:l}=ut(),[c,u]=_.useState(new Set),[d,p]=_.useState(!1),[f,h]=_.useState(""),[x,w]=_.useState(new Map),[j,g]=_.useState(380),[m,y]=_.useState(!1),k=_.useRef(null),[z,C]=_.useState(null),A=_.useRef(null),[S,$]=_.useState(null),[N,R]=_.useState(null),L=_.useRef(null),W=_.useRef(null),T=_.useCallback(Q=>{Q.preventDefault(),y(!0)},[]);if(_.useEffect(()=>{const Q=re=>{if(!m)return;const ve=Math.min(Math.max(200,re.clientX),600);g(ve)},Z=()=>{y(!1)};return m&&(document.addEventListener("mousemove",Q),document.addEventListener("mouseup",Z),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",Q),document.removeEventListener("mouseup",Z),document.body.style.cursor="",document.body.style.userSelect=""}},[m]),_.useEffect(()=>{if(t){const Q=t.agents.filter(Z=>"sub_agents"in Z&&Z.sub_agents.length>0).map(Z=>Z.id);u(new Set(Q))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;function M(){if(!f.trim()||!t)return;const Q=`generating_${Date.now()}`,Z=f;w(re=>new Map(re).set(Q,Z)),p(!1),h(""),My(t.id,Z).then(re=>{var ve,je,ze,ke;if(re.success&&re.config){const H=re.config,ae=[];if((ve=H.tools)!=null&&ve.builtin)for(const te of H.tools.builtin)ae.push({type:"builtin",name:te});if((je=H.tools)!=null&&je.mcp)for(const te of H.tools.mcp){const xe=l.find(le=>le.name===te.server);xe&&ae.push({type:"mcp",server:{...xe,tool_filter:te.tools}})}if((ze=H.tools)!=null&&ze.custom)for(const te of H.tools.custom){const xe=t.custom_tools.find(le=>le.name===te);xe&&ae.push({type:"function",name:te,module_path:xe.module_path})}if((ke=H.tools)!=null&&ke.agents)for(const te of H.tools.agents){const xe=t.agents.find(le=>le.id===te);xe&&ae.push({type:"agent",agent_id:te,name:xe.name})}const me=t.app.models||[],ye=me.find(te=>te.id===t.app.default_model_id)||me[0],G={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:H.name||"new_agent",description:H.description||"",instruction:H.instruction||"",model:ye?{provider:ye.provider,model_name:ye.model_name,api_base:ye.api_base,temperature:ye.temperature,max_output_tokens:ye.max_output_tokens,top_p:ye.top_p,top_k:ye.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:ae,sub_agents:H.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(G),a(G.id),e==null||e(G.id)}else console.error("Failed to generate agent:",re.error)}).catch(re=>{console.error("Error generating agent:",re)}).finally(()=>{w(re=>{const ve=new Map(re);return ve.delete(Q),ve})})}const B=t.agents.find(Q=>Q.id===s);function E(Q){a(Q),e==null||e(Q)}function O(Q){if(!t)return;const Z=t.app.models||[],re=Z.find(je=>je.id===t.app.default_model_id)||Z[0],ve=g4(Q,re);n(ve),E(ve.id)}function I(Q,Z){Z.stopPropagation(),confirm("Delete this agent?")&&(r(Q),s===Q&&(e==null||e(null)))}function v(Q){const Z=new Set(c);Z.has(Q)?Z.delete(Q):Z.add(Q),u(Z)}function D(Q){if(!L.current||!A.current)return;const Z=L.current.getBoundingClientRect(),re=Q.clientY-Z.top,ve=60,je=8;if(re<ve){const ze=Math.max(1,je*(1-re/ve));L.current.scrollTop-=ze}else if(re>Z.height-ve){const ze=Math.max(1,je*(1-(Z.height-re)/ve));L.current.scrollTop+=ze}}function q(Q,Z){Q.dataTransfer.setData("text/plain",Z),Q.dataTransfer.effectAllowed="move",A.current=Z,requestAnimationFrame(()=>C(Z))}function b(){A.current=null,C(null),$(null),R(null),W.current&&(cancelAnimationFrame(W.current),W.current=null)}function V(Q,Z,re){if(!t||(Q.preventDefault(),Q.stopPropagation(),!A.current))return;const je=t.agents.find(ze=>ze.id===Z);!je||!("sub_agents"in je)||(Q.dataTransfer.dropEffect="move",R({parentId:Z,index:re}),$(null))}function P(Q,Z,re){if(!t)return;Q.preventDefault(),Q.stopPropagation();const ve=Q.dataTransfer.getData("text/plain");if(!ve)return;const je=t.agents.find(ke=>ke.id===Z);if(!je||!("sub_agents"in je))return;t.agents.forEach(ke=>{"sub_agents"in ke&&ke.sub_agents.includes(ve)&&i(ke.id,{sub_agents:ke.sub_agents.filter(H=>H!==ve)})});const ze=[...je.sub_agents.filter(ke=>ke!==ve)];ze.splice(re,0,ve),i(Z,{sub_agents:ze}),u(ke=>new Set([...ke,Z])),C(null),R(null)}function Y(Q,Z,re){if(!t)return;const ve=A.current;if(Q.preventDefault(),Q.stopPropagation(),ve===Z)return;const je=t.agents.find(ze=>ze.id===ve);je&&"sub_agents"in je&&J(je,Z)||(Q.dataTransfer.dropEffect="move",$({agentId:Z,type:re}),R(null))}function ue(Q){const Z=Q.relatedTarget;(!Z||!Q.currentTarget.contains(Z))&&$(null)}function pe(Q,Z,re){if(!t)return;Q.preventDefault(),Q.stopPropagation();const ve=Q.dataTransfer.getData("text/plain");if(!ve||ve===Z)return;const je=t.agents.find(ke=>ke.id===Z),ze=t.agents.find(ke=>ke.id===ve);if(!(!je||!ze)){if(re==="sub_agent")"sub_agents"in je&&(t.agents.forEach(ke=>{"sub_agents"in ke&&ke.sub_agents.includes(ve)&&i(ke.id,{sub_agents:ke.sub_agents.filter(H=>H!==ve)})}),je.sub_agents.includes(ve)||(i(Z,{sub_agents:[...je.sub_agents,ve]}),u(ke=>new Set([...ke,Z]))));else if(re==="tool"&&"tools"in je){const ke=je;ke.tools.some(ae=>ae.type==="agent"&&ae.agent_id===ve)||i(Z,{tools:[...ke.tools,{type:"agent",agent_id:ve,name:ze.name}]})}C(null),$(null)}}function J(Q,Z){if(!t||!("sub_agents"in Q))return!1;if(Q.sub_agents.includes(Z))return!0;for(const re of Q.sub_agents){const ve=t.agents.find(je=>je.id===re);if(ve&&J(ve,Z))return!0}return!1}function F(Q){const Z=cc.find(re=>re.type===Q);return Z?Z.icon:Er}function K(Q){const Z=cc.find(re=>re.type===Q);return Z?Z.color:"#888"}function ee(Q,Z=0){return Q.map(re=>{const ve=F(re.type),je=K(re.type),ze="sub_agents"in re&&re.sub_agents.length>0,ke="sub_agents"in re,H=re.type==="LlmAgent",ae=c.has(re.id),me=z===re.id,ye=(S==null?void 0:S.agentId)===re.id&&(S==null?void 0:S.type)==="sub_agent",G=(S==null?void 0:S.agentId)===re.id&&(S==null?void 0:S.type)==="tool",te=ze&&t?re.sub_agents.map(le=>t.agents.find(_e=>_e.id===le)).filter(le=>le!==void 0):[],xe=z&&z!==re.id&&(ke||H);return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${s===re.id?"selected":""} ${me?"dragging":""} ${xe?"drop-target":""}`,onClick:()=>E(re.id),style:{paddingLeft:12+Z*20},draggable:!0,onDragStart:le=>q(le,re.id),onDragEnd:b,onDragOver:le=>{xe&&(le.preventDefault(),le.stopPropagation())},children:[o.jsx("div",{className:"drag-handle",children:o.jsx(qk,{size:12})}),ze?o.jsx("button",{className:"expand-btn",onClick:le=>{le.stopPropagation(),v(re.id)},children:ae?o.jsx(Pt,{size:16}):o.jsx(bt,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:je},children:o.jsx(ve,{size:14})}),o.jsx("span",{className:"agent-name",children:re.name}),o.jsx("button",{className:"delete-btn",onClick:le=>I(re.id,le),children:o.jsx(Fe,{size:14})}),xe&&o.jsxs("div",{className:"drop-overlay",children:[ke&&o.jsxs("div",{className:`drop-zone-overlay ${ye?"active":""}`,onDragOver:le=>Y(le,re.id,"sub_agent"),onDragLeave:ue,onDrop:le=>pe(le,re.id,"sub_agent"),children:[o.jsx(Xy,{size:12}),o.jsx("span",{children:"Sub-agent"})]}),H&&o.jsxs("div",{className:`drop-zone-overlay ${G?"active":""}`,onDragOver:le=>Y(le,re.id,"tool"),onDragLeave:ue,onDrop:le=>pe(le,re.id,"tool"),children:[o.jsx(ln,{size:12}),o.jsx("span",{children:"Tool"})]})]})]}),ze&&ae&&o.jsxs("div",{className:"sub-agents",children:[z&&z!==re.id&&o.jsx("div",{className:`insert-indicator ${(N==null?void 0:N.parentId)===re.id&&(N==null?void 0:N.index)===0?"active":""}`,style:{marginLeft:12+(Z+1)*20},onDragOver:le=>V(le,re.id,0),onDragLeave:()=>R(null),onDrop:le=>P(le,re.id,0)}),te.map((le,_e)=>o.jsxs(It.Fragment,{children:[ee([le],Z+1),z&&z!==re.id&&z!==le.id&&o.jsx("div",{className:`insert-indicator ${(N==null?void 0:N.parentId)===re.id&&(N==null?void 0:N.index)===_e+1?"active":""}`,style:{marginLeft:12+(Z+1)*20},onDragOver:Ze=>V(Ze,re.id,_e+1),onDragLeave:()=>R(null),onDrop:Ze=>P(Ze,re.id,_e+1)})]},le.id))]})]},re.id)})}const X=new Set(t.agents.flatMap(Q=>"sub_agents"in Q?Q.sub_agents:[])),se=t.agents.filter(Q=>!X.has(Q.id));return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"agents-sidebar",style:{width:j},children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")",x.size>0&&o.jsxs("span",{className:"generating-badge",children:[o.jsx(Zn,{size:12,className:"spin"})," ",x.size]})]}),o.jsxs("div",{className:"header-buttons",children:[cc.map(({type:Q,icon:Z,color:re})=>o.jsx("button",{className:"quick-add-btn",style:{background:re},onClick:()=>O(Q),title:`Add ${Q}`,children:o.jsx(Z,{size:14})},Q)),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:o.jsx(Jl,{size:14})})]})]}),o.jsx("div",{className:"agents-list",ref:L,onDragOver:D,children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Er,{size:32}),o.jsx("p",{children:"No agents yet"})]}):ee(se)})]}),o.jsx("div",{ref:k,className:`sidebar-resizer ${m?"resizing":""}`,onMouseDown:T}),o.jsx("div",{className:"agent-editor-area",children:B?o.jsx(u4,{agent:B}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Er,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),d&&o.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:Q=>Q.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(Jl,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:f,onChange:Q=>h(Q.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:Q=>{Q.key==="Enter"&&(Q.metaKey||Q.ctrlKey)&&f.trim()&&M()}}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[l.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:M,disabled:!f.trim(),children:[o.jsx(Jl,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var ip="\x1B[0m",op="\x1B[1m",qv=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",y4=e=>{let t=qv(e),n=`${op}[MONACOPILOT ERROR] ${t}${ip}`;return console.error(n),{message:t}},v4=(e,t)=>{console.warn(`${op}[MONACOPILOT WARN] ${e}${t?`
${qv(t)}`:""}${ip}`)},b4=(e,t,n)=>console.warn(`${op}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${ip}`),Pa={report:y4,warn:v4,warnDeprecated:b4},mm=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let s=r.slice(0,t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)},w4=100,k4=!0,Jv="onIdle",j4=!0,_4=120,S4=400,C4=0,sp=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),N4=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),E4=e=>e.getValue(),z4=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Kv=class Gv{constructor(){this.cache=new z4(Gv.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=sp(n,r),a=s,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${s}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=s-1&&u<=l+1:c===i?u>=s-1:c===a?u<=l+1:!0}};Kv.MAX_CACHE_SIZE=20;var T4=Kv,A4=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],a=s.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},P4=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let h=e.substring(0,f),x=t.slice(-f);h===x&&(c=f)}let d=Math.min(r,s);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},L4=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new P4}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,s),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,a=n+s,l=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},M4=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},R4=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:a,maxContextLines:l=w4}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(w,j,g)=>{let m=w(e,t);return j?mm(m,j,g):m},p=(w,j)=>!w||!j?w:w.map(({content:g,...m})=>({...m,content:mm(g,j)})),f=d(sp,u,{truncateDirection:"keepEnd"}),h=d(N4,u,{truncateDirection:"keepStart"}),x=p(a,u);return{filename:r,language:i,technologies:s,relatedFiles:x,textBeforeCursor:f,textAfterCursor:h,cursorPosition:e}},I4=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:s,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},O4=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,Ji=e=>({items:e,enableForwardStability:!0}),Eu=new T4,$4=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:a=Jv,enableCaching:l=k4,allowFollowUpCompletions:c=j4,onError:u,requestHandler:d}=s;if(l&&!i){let p=Eu.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return Ji(p)}if(r.isCancellationRequested||!c&&i)return Ji([]);try{let p=I4(async x=>{var j,g;(j=s.onCompletionRequested)==null||j.call(s,x);let w;if(d)w=await d(x);else if(s.endpoint)w=await M4({endpoint:s.endpoint,...x});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(w.error)throw new Error(w.error);return(g=s.onCompletionRequestFinished)==null||g.call(s,x,w),w},{onTyping:_4,onIdle:S4,onDemand:C4}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=R4({pos:n,mdl:t,options:s}),{completion:h}=await p({body:{completionMetadata:f}});if(h){let x=new A4(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),w=new L4(e);return l&&Eu.add({completion:x,range:w.computeCacheRange(n,x),textBeforeCursor:sp(n,t)}),Ji([{insertText:x,range:w.computeInsertionRange(n,x,t)}])}}catch(p){if(O4(p))return Ji([]);u?u(p):Pa.warn("Cannot provide completion",p)}return Ji([])},ap=new WeakMap,dl=e=>ap.get(e),D4=(e,t)=>{ap.set(e,t)},gm=e=>{ap.delete(e)},F4=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),B4=(e,t)=>{let n=dl(e);!n||!n.options||(n.options={...n.options,...t})},U4=(e,t,n)=>{let r=dl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:E4(t),position:s,triggerType:c.trigger??Jv})))return $4({monaco:e,mdl:i,pos:s,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,s.range))},freeInlineCompletions:()=>{}}):null},V4={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},W4=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(V4).some(t=>t(this.monaco,e))}},H4=(e,t,n,r)=>{let i=new W4(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},Yv=(e,t,n)=>{let r=[];D4(t,F4(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=dl(t);if(!i)return Pa.warn("Completion is not registered properly. State not found."),J4();let s=U4(e,t,n);s&&r.push(s);let a=H4(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();Eu.clear(),gm(t)},trigger:()=>q4(t),updateOptions:l=>{B4(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Pa.report(i),{deregister:()=>{for(let s of r)s.dispose();gm(t)},trigger:()=>{},updateOptions:()=>{}}}},q4=e=>{let t=dl(e);if(!t){Pa.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},J4=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function K4(){return`tool_${Date.now().toString(36)}`}function G4(e){return/^[a-zA-Z0-9_]+$/.test(e)}const Y4=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function Q4({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=ut(),[d,p]=_.useState(""),[f,h]=_.useState(null),[x,w]=_.useState("tools"),[j,g]=_.useState(null),[m,y]=_.useState(""),[k,z]=_.useState(!1),[C,A]=_.useState(!1),[S,$]=_.useState(!1),[N,R]=_.useState(null),[L,W]=_.useState(null),[T,M]=_.useState({}),[B,E]=_.useState({}),[O,I]=_.useState("");if(!t)return null;const v=t.mcp_servers||[],D=t.custom_tools.find(H=>H.id===a),q=v.find(H=>H.name===j);function b(H){l(H),e==null||e(H)}_.useEffect(()=>{D&&(p(D.code),W(null))},[a]),_.useEffect(()=>{q&&(y(JSON.stringify(q,null,2)),z(!1))},[j]),_.useEffect(()=>{if(!t)return;const H=V(t.mcp_servers||[]);I(JSON.stringify(H,null,2))},[t==null?void 0:t.mcp_servers]),_.useEffect(()=>{if(x==="mcp"&&v.length>0){const H=v.filter(ae=>!T[ae.name]||T[ae.name]==="unknown");H.length>0&&H.forEach(ae=>{pe(ae.name)})}},[x,v.length]);function V(H){const ae={};for(const me of H){const ye={};me.connection_type==="stdio"?(ye.command=me.command||"",ye.args=me.args||[],Object.keys(me.env||{}).length>0&&(ye.env=me.env)):me.connection_type==="sse"&&(ye.url=me.url||"",Object.keys(me.headers||{}).length>0&&(ye.headers=me.headers)),me.timeout&&me.timeout!==30&&(ye.timeout=me.timeout),me.tool_filter&&(ye.tool_filter=me.tool_filter),me.tool_name_prefix&&(ye.tool_name_prefix=me.tool_name_prefix),ae[me.name]=ye}return{mcpServers:ae}}function P(H){const ae=[];for(const[me,ye]of Object.entries(H.mcpServers||{})){const G={name:me,description:ye.description||"",connection_type:ye.url?"sse":"stdio",command:ye.command,args:ye.args||[],env:ye.env||{},url:ye.url,headers:ye.headers||{},timeout:ye.timeout||30,tool_filter:ye.tool_filter||null,tool_name_prefix:ye.tool_name_prefix};ae.push(G)}return ae}function Y(H){H!==void 0&&I(H)}function ue(){try{const H=JSON.parse(O),ae=P(H);n({mcp_servers:ae})}catch(H){alert("Invalid JSON: "+H.message)}}async function pe(H){const ae=v.find(me=>me.name===H);if(ae){M(me=>({...me,[H]:"testing"})),E(me=>({...me,[H]:""}));try{const me=await fu({connection_type:ae.connection_type,command:ae.command,args:ae.args,env:ae.env,url:ae.url,headers:ae.headers,timeout:ae.timeout});M(ye=>({...ye,[H]:me.success?"connected":"error"})),!me.success&&me.error&&E(ye=>({...ye,[H]:me.error||"Unknown error"}))}catch(me){M(ye=>({...ye,[H]:"error"})),E(ye=>({...ye,[H]:me.message}))}}}function J(H){const ae=u.find(ye=>ye.name===H);if(!ae)return;if(v.some(ye=>ye.name===H)){alert(`Server "${H}" is already configured`);return}const me={name:ae.name,description:ae.description||"",connection_type:ae.connection_type,command:ae.command,args:ae.args||[],env:ae.env||{},url:ae.url,headers:ae.headers||{},timeout:ae.timeout||30,tool_filter:ae.tool_filter||null,tool_name_prefix:ae.tool_name_prefix};n({mcp_servers:[...v,me]})}async function F(){for(const H of v)await pe(H.name)}function K(){const H=K4();r({id:H,name:"new_tool",description:"",module_path:"tools.custom",code:Y4,state_keys_used:[]}),b(H)}function ee(H,ae){ae.stopPropagation(),confirm("Delete this tool?")&&(s(H),a===H&&(e==null||e(null)))}function X(H){D&&(H.name!==void 0&&(H.name===""||G4(H.name)?W(null):W("Name can only contain letters, numbers, and underscores")),i(D.id,H))}function se(H){H!==void 0&&D&&(p(H),X({code:H}))}async function Q(){if(D){A(!0);try{const H=await Ry(t.id,D.name,D.description,D.state_keys_used);H.success&&H.code?(p(H.code),X({code:H.code})):(console.error("Failed to generate tool code:",H.error),alert("Failed to generate tool code: "+(H.error||"Unknown error")))}catch(H){console.error("Error generating tool code:",H),alert("Error generating tool code: "+H.message)}finally{A(!1)}}}const Z=_.useRef(null),re=_.useCallback((H,ae)=>{if(Z.current&&typeof Z.current=="function")try{Z.current()}catch{}try{const me=Yv(ae,H,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof me=="function"?Z.current=me:Z.current=null}catch{Z.current=null}},[]);_.useEffect(()=>()=>{if(Z.current&&typeof Z.current=="function")try{Z.current()}catch{}},[]);function ve(H){H!==void 0&&(y(H),z(H!==JSON.stringify(q,null,2)))}function je(){if(q)try{const H=JSON.parse(m),ae=q.name,me=v.map(ye=>ye.name===ae?H:ye);n({mcp_servers:me}),g(H.name),z(!1)}catch(H){alert("Invalid JSON: "+H.message)}}async function ze(){$(!0),R(null);try{const H=JSON.parse(m),ae=await fu({connection_type:H.connection_type,command:H.command,args:H.args,env:H.env,url:H.url,headers:H.headers,timeout:H.timeout||30});if(R(ae),ae.success&&ae.tools.length>0){const me={...H,tool_filter:ae.tools.map(ye=>ye.name)};y(JSON.stringify(me,null,2)),z(!0)}}catch(H){R({success:!1,tools:[],error:H.message})}finally{$(!1)}}const ke={};return t.custom_tools.forEach(H=>{const ae=H.module_path||"tools";ke[ae]||(ke[ae]=[]),ke[ae].push(H)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${x==="tools"?"active":""}`,onClick:()=>{w("tools"),g(null)},children:[o.jsx(ln,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${x==="mcp"?"active":""}`,onClick:()=>{w("mcp"),l(null),h(null),g(null)},children:[o.jsx(Vi,{size:14}),"MCP"]})]}),x==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:K,children:[o.jsx(Ke,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Yk,{size:14}),"Built-in Tools"]}),c.map(H=>o.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===H.name?"selected":""}`,onClick:()=>{h(H),b(null),g(null)},children:[o.jsx(mu,{size:14}),o.jsx("span",{className:"tool-name",children:H.name})]},H.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(jn,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(ke).map(([H,ae])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Hy,{size:14}),H]}),ae.map(me=>o.jsxs("div",{className:`tool-item ${a===me.id?"selected":""}`,onClick:()=>{b(me.id),h(null),g(null)},children:[o.jsx(ln,{size:14}),o.jsx("span",{className:"tool-name",children:me.name}),o.jsx("button",{className:"delete-btn",onClick:ye=>ee(me.id,ye),children:o.jsx(Fe,{size:14})})]},me.id))]},H))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",v.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:F,title:"Test all server connections",children:o.jsx(on,{size:14})})]}),o.jsx("div",{className:"mcp-servers-list",children:v.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Vi,{size:32}),o.jsx("p",{children:"No MCP servers configured"}),o.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):v.map(H=>{const ae=T[H.name]||"unknown",me=B[H.name];return o.jsxs("div",{className:"mcp-server-item-wrapper",children:[o.jsxs("div",{className:"mcp-server-item",children:[o.jsxs("div",{className:"mcp-server-info",children:[o.jsx(Vi,{size:14}),o.jsx("span",{className:"mcp-server-name",children:H.name}),o.jsxs("span",{className:`mcp-status-badge ${ae}`,children:[ae==="testing"?o.jsx(Zn,{size:10,className:"spin"}):null,ae==="unknown"&&"●",ae==="connected"&&"●",ae==="error"&&"●"]})]}),o.jsxs("div",{className:"mcp-server-actions",children:[o.jsx("span",{className:"mcp-server-type",children:H.connection_type}),o.jsxs("button",{className:"btn btn-sm",onClick:()=>pe(H.name),disabled:ae==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[ae==="testing"?o.jsx(Zn,{size:12,className:"spin"}):o.jsx(on,{size:12}),o.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),ae==="error"&&me&&o.jsxs("div",{className:"mcp-server-error",children:[o.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",me]})]},H.name)})})]})]}),o.jsx("div",{className:"tool-editor",children:f?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(mu,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:f.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):D?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(ln,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:D.name,onChange:H=>X({name:H.target.value}),placeholder:"Tool name",style:{borderColor:L?"var(--error)":void 0}}),L&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:L})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:D.description,onChange:H=>X({description:H.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:D.module_path,onChange:H=>X({module_path:H.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Q,disabled:C||!D.name||!D.description,title:!D.name||!D.description?"Add a name and description first":"Generate code using AI",children:C?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Bd,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(Kt,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:se,onMount:re,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(Dd,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(H=>{const ae=D.state_keys_used.includes(H.name);return o.jsxs("label",{className:`state-key-chip ${ae?"selected":""}`,title:H.description,children:[o.jsx("input",{type:"checkbox",checked:ae,onChange:me=>{const ye=me.target.checked?[...D.state_keys_used,H.name]:D.state_keys_used.filter(G=>G!==H.name);X({state_keys_used:ye})}}),H.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",H.type,")"]})]},H.name)})})]})]}):q?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Vi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:q.name}),o.jsx("span",{className:"badge badge-info",children:q.connection_type}),k&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:ze,disabled:S,title:"Test connection and discover available tools",children:[S?o.jsx(Zn,{size:14,className:"spin"}):o.jsx($d,{size:14}),S?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:je,disabled:!k,children:[o.jsx(Ea,{size:14}),"Save"]})]}),N&&o.jsx("div",{className:`mcp-test-result ${N.success?"success":"error"}`,children:N.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",N.tools.length," tools"]}),N.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:N.tools.map(H=>o.jsxs("li",{children:[o.jsx("code",{children:H.name}),H.description&&o.jsxs("span",{children:[" — ",H.description]})]},H.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:N.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(Kt,{height:"100%",language:"json",theme:"vs-dark",value:m,onChange:ve,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):x==="mcp"?o.jsxs("div",{className:"mcp-json-editor",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Vi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),o.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),o.jsxs("select",{value:"",onChange:H=>{H.target.value&&J(H.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[o.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(H=>!v.some(ae=>ae.name===H.name)).map(H=>o.jsxs("option",{value:H.name,children:[H.name," - ",H.description||"No description"]},H.name))]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ue,children:[o.jsx(Ea,{size:14}),"Apply Changes"]})]}),o.jsx("div",{className:"mcp-json-info",children:o.jsxs("p",{children:["Configure your MCP servers using the standard ",o.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),o.jsx("div",{className:"editor-content",style:{flex:1},children:o.jsx(Kt,{height:"100%",defaultLanguage:"json",value:O,onChange:Y,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(jn,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function X4(){return`callback_${Date.now().toString(36)}`}function xm(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Qv(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return Qv("before_agent")}}function Z4({onSelectCallback:e}){var S,$;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=ut(),[a,l]=_.useState(""),[c,u]=_.useState(null),[d,p]=_.useState(null),[f,h]=_.useState(!1),x=_.useRef(null);if(!t)return null;const w=t.custom_callbacks||[],j=w.find(N=>N.id===c);function g(N){u(N),e==null||e(N)}_.useEffect(()=>{j?(l(j.code),p(null)):l("")},[c,j]);function m(){const N=X4(),R="new_callback",L={id:N,name:R,description:"",module_path:`callbacks.${R}`,code:Qv("before_agent"),state_keys_used:[]};r(L),g(N)}function y(N,R){R.stopPropagation(),confirm("Delete this callback?")&&(s(N),c===N&&(e==null||e(null),u(null),l("")))}function k(){if(!c)return;const N=w.find(W=>W.id===c);if(!N)return;const R=N.name.trim();if(!R){alert("Please enter a name");return}if(!xm(R)){p("Name must contain only alphanumeric characters and underscores");return}if(w.find(W=>W.name===R&&W.id!==N.id)){p("A callback with this name already exists");return}i(N.id,{code:a,name:R,description:N.description,module_path:`callbacks.${R}`,state_keys_used:N.state_keys_used}),p(null)}function z(N,R){x.current=R;try{Yv(R,{endpoint:"/api/code-completion",language:"python"})}catch(L){console.warn("Failed to register Monacopilot completion:",L)}}async function C(){if(j){h(!0);try{let N="before_agent";const R=j.name.toLowerCase(),L=j.description.toLowerCase();R.includes("after_agent")||L.includes("after agent")?N="after_agent":R.includes("before_model")||L.includes("before model")?N="before_model":R.includes("after_model")||L.includes("after model")?N="after_model":R.includes("before_tool")||L.includes("before tool")?N="before_tool":R.includes("after_tool")||L.includes("after tool")?N="after_tool":(R.includes("before_agent")||L.includes("before agent"))&&(N="before_agent");const W=await Iy(t.id,j.name,j.description,N,j.state_keys_used);W.success&&W.code?(l(W.code),i(j.id,{code:W.code})):(console.error("Failed to generate callback code:",W.error),alert("Failed to generate callback code: "+(W.error||"Unknown error")))}catch(N){console.error("Error generating callback code:",N),alert("Error generating callback code: "+N.message)}finally{h(!1)}}}const A=(($=(S=t.app)==null?void 0:S.state_keys)==null?void 0:$.map(N=>N.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:m,title:"Add Callback",children:o.jsx(Ke,{size:16})})]}),o.jsx("div",{className:"tools-list",children:w.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):w.map(N=>o.jsxs("div",{className:`tool-item ${c===N.id?"selected":""}`,onClick:()=>g(N.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:N.name}),N.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:N.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:R=>y(N.id,R),title:"Delete",children:o.jsx(Fe,{size:14})})})]},N.id))})]}),o.jsx("div",{className:"tools-editor",children:j?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:k,children:[o.jsx(Ea,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:j.name,onChange:N=>{const R=N.target.value;i(j.id,{name:R,module_path:`callbacks.${R.trim()||"callback"}`}),d&&xm(R)&&p(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:j.description,onChange:N=>i(j.id,{description:N.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:j.module_path,onChange:N=>i(j.id,{module_path:N.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:A.map(N=>{const R=j.state_keys_used.includes(N);return o.jsxs("button",{type:"button",className:`btn btn-sm ${R?"btn-primary":"btn-secondary"}`,onClick:()=>{const L=R?j.state_keys_used.filter(W=>W!==N):[...j.state_keys_used,N];i(j.id,{state_keys_used:L})},children:[o.jsx(Dd,{size:12,style:{marginRight:"4px"}}),N]},N)})}),A.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:C,disabled:f||!j.name,title:j.name?"Generate code using AI":"Add a name first",children:f?o.jsxs(o.Fragment,{children:[o.jsx(Zn,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Bd,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(Kt,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:N=>l(N||""),onMount:z,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function eE(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],s=n.split(".");if(s.length>2){const a=s.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Le={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function tE({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[s,a]=_.useState(""),[l,c]=_.useState("exact"),[u,d]=_.useState(!1),[p,f]=_.useState(""),[h,x]=_.useState(!1),[w,j]=_.useState(t),g=eE(e.url);_.useEffect(()=>{g.length>0&&!s&&a(g[0].pattern)},[g,s]),_.useEffect(()=>{const A=setInterval(()=>{j(S=>S<=1?(r(),0):S-1)},1e3);return()=>clearInterval(A)},[r]);const m=_.useCallback(()=>{n()},[n]),y=_.useCallback(()=>{n(h?p:s,l,u)},[n,h,p,s,l,u]),k=w/t*100,z=e.source.startsWith("mcp:"),C=z?e.source.substring(4):"agent";return o.jsx("div",{style:Le.overlay,children:o.jsxs("div",{style:Le.dialog,children:[o.jsxs("div",{style:Le.header,children:[o.jsx(Vy,{size:18,style:Le.headerIcon}),o.jsx("span",{style:Le.headerTitle,children:"Network Request Approval"}),o.jsx("button",{style:Le.closeButton,onClick:i,children:o.jsx(es,{size:16})})]}),o.jsxs("div",{style:Le.content,children:[o.jsx("div",{style:Le.sourceText,children:z?o.jsxs(o.Fragment,{children:['MCP server "',o.jsx("span",{style:{color:"#22d3ee"},children:C}),'" wants to connect to:']}):o.jsx(o.Fragment,{children:"Agent wants to connect to:"})}),o.jsxs("div",{style:Le.requestBox,children:[o.jsxs("div",{children:[o.jsx("span",{style:Le.methodBadge(e.method),children:e.method}),o.jsx("span",{style:Le.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&o.jsxs("div",{style:Le.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),o.jsxs("div",{children:[o.jsx("div",{style:Le.label,children:"Allow pattern:"}),h?o.jsxs("div",{children:[o.jsx("input",{type:"text",value:p,onChange:A=>f(A.target.value),placeholder:"e.g., *.example.com/*",style:Le.customInput}),o.jsxs("div",{style:Le.radioGroup,children:[o.jsxs("label",{style:Le.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),o.jsxs("label",{style:Le.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),o.jsx("button",{onClick:()=>x(!1),style:Le.backLink,children:"← Back to suggestions"})]})]}):o.jsxs("select",{value:s,onChange:A=>{A.target.value==="__custom__"?(x(!0),f(s)):a(A.target.value)},style:Le.select,children:[g.map(A=>o.jsx("option",{value:A.pattern,children:A.label},A.pattern)),o.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),o.jsxs("label",{style:Le.checkboxLabel,children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:u,onChange:A=>d(A.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),o.jsxs("div",{style:Le.footer,children:[o.jsxs("button",{onClick:r,style:Le.button("deny"),children:[o.jsx(Bk,{size:14}),"Deny"]}),o.jsxs("button",{onClick:m,style:Le.button("once"),children:[o.jsx(Id,{size:14}),"Allow Once"]}),o.jsxs("button",{onClick:y,style:Le.button("pattern"),children:[o.jsx(Yy,{size:14}),"Allow Pattern"]}),o.jsxs("div",{style:Le.timerContainer,children:[o.jsx(Io,{size:14}),o.jsxs("span",{children:[w,"s"]})]})]}),o.jsx("div",{style:Le.progressBar,children:o.jsx("div",{style:Le.progressFill(k)})})]})})}var nE={value:()=>{}};function is(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Qs(n)}function Qs(e){this._=e}function rE(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Qs.prototype=is.prototype={constructor:Qs,on:function(e,t){var n=this._,r=rE(e+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(e=r[s]).type)&&(i=iE(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(i=(e=r[s]).type)n[i]=ym(n[i],e.name,t);else if(t==null)for(i in n)n[i]=ym(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Qs(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};function iE(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function ym(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=nE,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var zu="http://www.w3.org/1999/xhtml";const vm={svg:"http://www.w3.org/2000/svg",xhtml:zu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function pl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),vm.hasOwnProperty(t)?{space:vm[t],local:e}:e}function oE(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===zu&&t.documentElement.namespaceURI===zu?t.createElement(e):t.createElementNS(n,e)}}function sE(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Xv(e){var t=pl(e);return(t.local?sE:oE)(t)}function aE(){}function lp(e){return e==null?aE:function(){return this.querySelector(e)}}function lE(e){typeof e!="function"&&(e=lp(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=new Array(a),c,u,d=0;d<a;++d)(c=s[d])&&(u=e.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u);return new Dt(r,this._parents)}function cE(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function uE(){return[]}function Zv(e){return e==null?uE:function(){return this.querySelectorAll(e)}}function dE(e){return function(){return cE(e.apply(this,arguments))}}function pE(e){typeof e=="function"?e=dE(e):e=Zv(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var a=t[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&(r.push(e.call(c,c.__data__,u,a)),i.push(c));return new Dt(r,i)}function e1(e){return function(){return this.matches(e)}}function t1(e){return function(t){return t.matches(e)}}var fE=Array.prototype.find;function hE(e){return function(){return fE.call(this.children,e)}}function mE(){return this.firstElementChild}function gE(e){return this.select(e==null?mE:hE(typeof e=="function"?e:t1(e)))}var xE=Array.prototype.filter;function yE(){return Array.from(this.children)}function vE(e){return function(){return xE.call(this.children,e)}}function bE(e){return this.selectAll(e==null?yE:vE(typeof e=="function"?e:t1(e)))}function wE(e){typeof e!="function"&&(e=e1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Dt(r,this._parents)}function n1(e){return new Array(e.length)}function kE(){return new Dt(this._enter||this._groups.map(n1),this._parents)}function La(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}La.prototype={constructor:La,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function jE(e){return function(){return e}}function _E(e,t,n,r,i,s){for(var a=0,l,c=t.length,u=s.length;a<u;++a)(l=t[a])?(l.__data__=s[a],r[a]=l):n[a]=new La(e,s[a]);for(;a<c;++a)(l=t[a])&&(i[a]=l)}function SE(e,t,n,r,i,s,a){var l,c,u=new Map,d=t.length,p=s.length,f=new Array(d),h;for(l=0;l<d;++l)(c=t[l])&&(f[l]=h=a.call(c,c.__data__,l,t)+"",u.has(h)?i[l]=c:u.set(h,c));for(l=0;l<p;++l)h=a.call(e,s[l],l,s)+"",(c=u.get(h))?(r[l]=c,c.__data__=s[l],u.delete(h)):n[l]=new La(e,s[l]);for(l=0;l<d;++l)(c=t[l])&&u.get(f[l])===c&&(i[l]=c)}function CE(e){return e.__data__}function NE(e,t){if(!arguments.length)return Array.from(this,CE);var n=t?SE:_E,r=this._parents,i=this._groups;typeof e!="function"&&(e=jE(e));for(var s=i.length,a=new Array(s),l=new Array(s),c=new Array(s),u=0;u<s;++u){var d=r[u],p=i[u],f=p.length,h=EE(e.call(d,d&&d.__data__,u,r)),x=h.length,w=l[u]=new Array(x),j=a[u]=new Array(x),g=c[u]=new Array(f);n(d,p,w,j,g,h,t);for(var m=0,y=0,k,z;m<x;++m)if(k=w[m]){for(m>=y&&(y=m+1);!(z=j[y])&&++y<x;);k._next=z||null}}return a=new Dt(a,r),a._enter=l,a._exit=c,a}function EE(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function zE(){return new Dt(this._exit||this._groups.map(n1),this._parents)}function TE(e,t,n){var r=this.enter(),i=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function AE(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,a=Math.min(i,s),l=new Array(i),c=0;c<a;++c)for(var u=n[c],d=r[c],p=u.length,f=l[c]=new Array(p),h,x=0;x<p;++x)(h=u[x]||d[x])&&(f[x]=h);for(;c<i;++c)l[c]=n[c];return new Dt(l,this._parents)}function PE(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function LE(e){e||(e=ME);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],l=a.length,c=i[s]=new Array(l),u,d=0;d<l;++d)(u=a[d])&&(c[d]=u);c.sort(t)}return new Dt(i,this._parents).order()}function ME(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function RE(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function IE(){return Array.from(this)}function OE(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function $E(){let e=0;for(const t of this)++e;return e}function DE(){return!this.node()}function FE(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],s=0,a=i.length,l;s<a;++s)(l=i[s])&&e.call(l,l.__data__,s,i);return this}function BE(e){return function(){this.removeAttribute(e)}}function UE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function VE(e,t){return function(){this.setAttribute(e,t)}}function WE(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function HE(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function qE(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function JE(e,t){var n=pl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?UE:BE:typeof t=="function"?n.local?qE:HE:n.local?WE:VE)(n,t))}function r1(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function KE(e){return function(){this.style.removeProperty(e)}}function GE(e,t,n){return function(){this.style.setProperty(e,t,n)}}function YE(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function QE(e,t,n){return arguments.length>1?this.each((t==null?KE:typeof t=="function"?YE:GE)(e,t,n??"")):_i(this.node(),e)}function _i(e,t){return e.style.getPropertyValue(t)||r1(e).getComputedStyle(e,null).getPropertyValue(t)}function XE(e){return function(){delete this[e]}}function ZE(e,t){return function(){this[e]=t}}function ez(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function tz(e,t){return arguments.length>1?this.each((t==null?XE:typeof t=="function"?ez:ZE)(e,t)):this.node()[e]}function i1(e){return e.trim().split(/^|\s+/)}function cp(e){return e.classList||new o1(e)}function o1(e){this._node=e,this._names=i1(e.getAttribute("class")||"")}o1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function s1(e,t){for(var n=cp(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function a1(e,t){for(var n=cp(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function nz(e){return function(){s1(this,e)}}function rz(e){return function(){a1(this,e)}}function iz(e,t){return function(){(t.apply(this,arguments)?s1:a1)(this,e)}}function oz(e,t){var n=i1(e+"");if(arguments.length<2){for(var r=cp(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?iz:t?nz:rz)(n,t))}function sz(){this.textContent=""}function az(e){return function(){this.textContent=e}}function lz(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function cz(e){return arguments.length?this.each(e==null?sz:(typeof e=="function"?lz:az)(e)):this.node().textContent}function uz(){this.innerHTML=""}function dz(e){return function(){this.innerHTML=e}}function pz(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function fz(e){return arguments.length?this.each(e==null?uz:(typeof e=="function"?pz:dz)(e)):this.node().innerHTML}function hz(){this.nextSibling&&this.parentNode.appendChild(this)}function mz(){return this.each(hz)}function gz(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function xz(){return this.each(gz)}function yz(e){var t=typeof e=="function"?e:Xv(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function vz(){return null}function bz(e,t){var n=typeof e=="function"?e:Xv(e),r=t==null?vz:typeof t=="function"?t:lp(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function wz(){var e=this.parentNode;e&&e.removeChild(this)}function kz(){return this.each(wz)}function jz(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function _z(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Sz(e){return this.select(e?_z:jz)}function Cz(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Nz(e){return function(t){e.call(this,t,this.__data__)}}function Ez(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function zz(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,s;n<i;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function Tz(e,t,n){return function(){var r=this.__on,i,s=Nz(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=t;return}}this.addEventListener(e.type,s,n),i={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(i):this.__on=[i]}}function Az(e,t,n){var r=Ez(e+""),i,s=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,u=l.length,d;c<u;++c)for(i=0,d=l[c];i<s;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?Tz:zz,i=0;i<s;++i)this.each(l(r[i],t,n));return this}function l1(e,t,n){var r=r1(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function Pz(e,t){return function(){return l1(this,e,t)}}function Lz(e,t){return function(){return l1(this,e,t.apply(this,arguments))}}function Mz(e,t){return this.each((typeof t=="function"?Lz:Pz)(e,t))}function*Rz(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var c1=[null];function Dt(e,t){this._groups=e,this._parents=t}function os(){return new Dt([[document.documentElement]],c1)}function Iz(){return this}Dt.prototype=os.prototype={constructor:Dt,select:lE,selectAll:pE,selectChild:gE,selectChildren:bE,filter:wE,data:NE,enter:kE,exit:zE,join:TE,merge:AE,selection:Iz,order:PE,sort:LE,call:RE,nodes:IE,node:OE,size:$E,empty:DE,each:FE,attr:JE,style:QE,property:tz,classed:oz,text:cz,html:fz,raise:mz,lower:xz,append:yz,insert:bz,remove:kz,clone:Sz,datum:Cz,on:Az,dispatch:Mz,[Symbol.iterator]:Rz};function qt(e){return typeof e=="string"?new Dt([[document.querySelector(e)]],[document.documentElement]):new Dt([[e]],c1)}function Oz(e){let t;for(;t=e.sourceEvent;)e=t;return e}function zn(e,t){if(e=Oz(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const $z={passive:!1},Do={capture:!0,passive:!1};function uc(e){e.stopImmediatePropagation()}function di(e){e.preventDefault(),e.stopImmediatePropagation()}function u1(e){var t=e.document.documentElement,n=qt(e).on("dragstart.drag",di,Do);"onselectstart"in t?n.on("selectstart.drag",di,Do):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function d1(e,t){var n=e.document.documentElement,r=qt(e).on("dragstart.drag",null);t&&(r.on("click.drag",di,Do),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const As=e=>()=>e;function Tu(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:s,x:a,y:l,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Tu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Dz(e){return!e.ctrlKey&&!e.button}function Fz(){return this.parentNode}function Bz(e,t){return t??{x:e.x,y:e.y}}function Uz(){return navigator.maxTouchPoints||"ontouchstart"in this}function Vz(){var e=Dz,t=Fz,n=Bz,r=Uz,i={},s=is("start","drag","end"),a=0,l,c,u,d,p=0;function f(k){k.on("mousedown.drag",h).filter(r).on("touchstart.drag",j).on("touchmove.drag",g,$z).on("touchend.drag touchcancel.drag",m).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(k,z){if(!(d||!e.call(this,k,z))){var C=y(this,t.call(this,k,z),k,z,"mouse");C&&(qt(k.view).on("mousemove.drag",x,Do).on("mouseup.drag",w,Do),u1(k.view),uc(k),u=!1,l=k.clientX,c=k.clientY,C("start",k))}}function x(k){if(di(k),!u){var z=k.clientX-l,C=k.clientY-c;u=z*z+C*C>p}i.mouse("drag",k)}function w(k){qt(k.view).on("mousemove.drag mouseup.drag",null),d1(k.view,u),di(k),i.mouse("end",k)}function j(k,z){if(e.call(this,k,z)){var C=k.changedTouches,A=t.call(this,k,z),S=C.length,$,N;for($=0;$<S;++$)(N=y(this,A,k,z,C[$].identifier,C[$]))&&(uc(k),N("start",k,C[$]))}}function g(k){var z=k.changedTouches,C=z.length,A,S;for(A=0;A<C;++A)(S=i[z[A].identifier])&&(di(k),S("drag",k,z[A]))}function m(k){var z=k.changedTouches,C=z.length,A,S;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),A=0;A<C;++A)(S=i[z[A].identifier])&&(uc(k),S("end",k,z[A]))}function y(k,z,C,A,S,$){var N=s.copy(),R=zn($||C,z),L,W,T;if((T=n.call(k,new Tu("beforestart",{sourceEvent:C,target:f,identifier:S,active:a,x:R[0],y:R[1],dx:0,dy:0,dispatch:N}),A))!=null)return L=T.x-R[0]||0,W=T.y-R[1]||0,function M(B,E,O){var I=R,v;switch(B){case"start":i[S]=M,v=a++;break;case"end":delete i[S],--a;case"drag":R=zn(O||E,z),v=a;break}N.call(B,k,new Tu(B,{sourceEvent:E,subject:T,target:f,identifier:S,active:v,x:R[0]+L,y:R[1]+W,dx:R[0]-I[0],dy:R[1]-I[1],dispatch:N}),A)}}return f.filter=function(k){return arguments.length?(e=typeof k=="function"?k:As(!!k),f):e},f.container=function(k){return arguments.length?(t=typeof k=="function"?k:As(k),f):t},f.subject=function(k){return arguments.length?(n=typeof k=="function"?k:As(k),f):n},f.touchable=function(k){return arguments.length?(r=typeof k=="function"?k:As(!!k),f):r},f.on=function(){var k=s.on.apply(s,arguments);return k===s?f:k},f.clickDistance=function(k){return arguments.length?(p=(k=+k)*k,f):Math.sqrt(p)},f}function up(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function p1(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function ss(){}var Fo=.7,Ma=1/Fo,pi="\\s*([+-]?\\d+)\\s*",Bo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",kn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Wz=/^#([0-9a-f]{3,8})$/,Hz=new RegExp(`^rgb\\(${pi},${pi},${pi}\\)$`),qz=new RegExp(`^rgb\\(${kn},${kn},${kn}\\)$`),Jz=new RegExp(`^rgba\\(${pi},${pi},${pi},${Bo}\\)$`),Kz=new RegExp(`^rgba\\(${kn},${kn},${kn},${Bo}\\)$`),Gz=new RegExp(`^hsl\\(${Bo},${kn},${kn}\\)$`),Yz=new RegExp(`^hsla\\(${Bo},${kn},${kn},${Bo}\\)$`),bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};up(ss,Uo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:wm,formatHex:wm,formatHex8:Qz,formatHsl:Xz,formatRgb:km,toString:km});function wm(){return this.rgb().formatHex()}function Qz(){return this.rgb().formatHex8()}function Xz(){return f1(this).formatHsl()}function km(){return this.rgb().formatRgb()}function Uo(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Wz.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?jm(t):n===3?new jt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Ps(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Ps(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Hz.exec(e))?new jt(t[1],t[2],t[3],1):(t=qz.exec(e))?new jt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Jz.exec(e))?Ps(t[1],t[2],t[3],t[4]):(t=Kz.exec(e))?Ps(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Gz.exec(e))?Cm(t[1],t[2]/100,t[3]/100,1):(t=Yz.exec(e))?Cm(t[1],t[2]/100,t[3]/100,t[4]):bm.hasOwnProperty(e)?jm(bm[e]):e==="transparent"?new jt(NaN,NaN,NaN,0):null}function jm(e){return new jt(e>>16&255,e>>8&255,e&255,1)}function Ps(e,t,n,r){return r<=0&&(e=t=n=NaN),new jt(e,t,n,r)}function Zz(e){return e instanceof ss||(e=Uo(e)),e?(e=e.rgb(),new jt(e.r,e.g,e.b,e.opacity)):new jt}function Au(e,t,n,r){return arguments.length===1?Zz(e):new jt(e,t,n,r??1)}function jt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}up(jt,Au,p1(ss,{brighter(e){return e=e==null?Ma:Math.pow(Ma,e),new jt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Fo:Math.pow(Fo,e),new jt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new jt(zr(this.r),zr(this.g),zr(this.b),Ra(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:_m,formatHex:_m,formatHex8:eT,formatRgb:Sm,toString:Sm}));function _m(){return`#${_r(this.r)}${_r(this.g)}${_r(this.b)}`}function eT(){return`#${_r(this.r)}${_r(this.g)}${_r(this.b)}${_r((isNaN(this.opacity)?1:this.opacity)*255)}`}function Sm(){const e=Ra(this.opacity);return`${e===1?"rgb(":"rgba("}${zr(this.r)}, ${zr(this.g)}, ${zr(this.b)}${e===1?")":`, ${e})`}`}function Ra(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function zr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function _r(e){return e=zr(e),(e<16?"0":"")+e.toString(16)}function Cm(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new rn(e,t,n,r)}function f1(e){if(e instanceof rn)return new rn(e.h,e.s,e.l,e.opacity);if(e instanceof ss||(e=Uo(e)),!e)return new rn;if(e instanceof rn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),a=NaN,l=s-i,c=(s+i)/2;return l?(t===s?a=(n-r)/l+(n<r)*6:n===s?a=(r-t)/l+2:a=(t-n)/l+4,l/=c<.5?s+i:2-s-i,a*=60):l=c>0&&c<1?0:a,new rn(a,l,c,e.opacity)}function tT(e,t,n,r){return arguments.length===1?f1(e):new rn(e,t,n,r??1)}function rn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}up(rn,tT,p1(ss,{brighter(e){return e=e==null?Ma:Math.pow(Ma,e),new rn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Fo:Math.pow(Fo,e),new rn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new jt(dc(e>=240?e-240:e+120,i,r),dc(e,i,r),dc(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new rn(Nm(this.h),Ls(this.s),Ls(this.l),Ra(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ra(this.opacity);return`${e===1?"hsl(":"hsla("}${Nm(this.h)}, ${Ls(this.s)*100}%, ${Ls(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Nm(e){return e=(e||0)%360,e<0?e+360:e}function Ls(e){return Math.max(0,Math.min(1,e||0))}function dc(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const h1=e=>()=>e;function nT(e,t){return function(n){return e+n*t}}function rT(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function iT(e){return(e=+e)==1?m1:function(t,n){return n-t?rT(t,n,e):h1(isNaN(t)?n:t)}}function m1(e,t){var n=t-e;return n?nT(e,n):h1(isNaN(e)?t:e)}const Em=function e(t){var n=iT(t);function r(i,s){var a=n((i=Au(i)).r,(s=Au(s)).r),l=n(i.g,s.g),c=n(i.b,s.b),u=m1(i.opacity,s.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=c(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function Jn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Pu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pc=new RegExp(Pu.source,"g");function oT(e){return function(){return e}}function sT(e){return function(t){return e(t)+""}}function aT(e,t){var n=Pu.lastIndex=pc.lastIndex=0,r,i,s,a=-1,l=[],c=[];for(e=e+"",t=t+"";(r=Pu.exec(e))&&(i=pc.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),l[a]?l[a]+=s:l[++a]=s),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,c.push({i:a,x:Jn(r,i)})),n=pc.lastIndex;return n<t.length&&(s=t.slice(n),l[a]?l[a]+=s:l[++a]=s),l.length<2?c[0]?sT(c[0].x):oT(t):(t=c.length,function(u){for(var d=0,p;d<t;++d)l[(p=c[d]).i]=p.x(u);return l.join("")})}var zm=180/Math.PI,Lu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function g1(e,t,n,r,i,s){var a,l,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,c/=l),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*zm,skewX:Math.atan(c)*zm,scaleX:a,scaleY:l}}var Ms;function lT(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Lu:g1(t.a,t.b,t.c,t.d,t.e,t.f)}function cT(e){return e==null||(Ms||(Ms=document.createElementNS("http://www.w3.org/2000/svg","g")),Ms.setAttribute("transform",e),!(e=Ms.transform.baseVal.consolidate()))?Lu:(e=e.matrix,g1(e.a,e.b,e.c,e.d,e.e,e.f))}function x1(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function s(u,d,p,f,h,x){if(u!==p||d!==f){var w=h.push("translate(",null,t,null,n);x.push({i:w-4,x:Jn(u,p)},{i:w-2,x:Jn(d,f)})}else(p||f)&&h.push("translate("+p+t+f+n)}function a(u,d,p,f){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),f.push({i:p.push(i(p)+"rotate(",null,r)-2,x:Jn(u,d)})):d&&p.push(i(p)+"rotate("+d+r)}function l(u,d,p,f){u!==d?f.push({i:p.push(i(p)+"skewX(",null,r)-2,x:Jn(u,d)}):d&&p.push(i(p)+"skewX("+d+r)}function c(u,d,p,f,h,x){if(u!==p||d!==f){var w=h.push(i(h)+"scale(",null,",",null,")");x.push({i:w-4,x:Jn(u,p)},{i:w-2,x:Jn(d,f)})}else(p!==1||f!==1)&&h.push(i(h)+"scale("+p+","+f+")")}return function(u,d){var p=[],f=[];return u=e(u),d=e(d),s(u.translateX,u.translateY,d.translateX,d.translateY,p,f),a(u.rotate,d.rotate,p,f),l(u.skewX,d.skewX,p,f),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,p,f),u=d=null,function(h){for(var x=-1,w=f.length,j;++x<w;)p[(j=f[x]).i]=j.x(h);return p.join("")}}}var uT=x1(lT,"px, ","px)","deg)"),dT=x1(cT,", ",")",")"),pT=1e-12;function Tm(e){return((e=Math.exp(e))+1/e)/2}function fT(e){return((e=Math.exp(e))-1/e)/2}function hT(e){return((e=Math.exp(2*e))-1)/(e+1)}const mT=function e(t,n,r){function i(s,a){var l=s[0],c=s[1],u=s[2],d=a[0],p=a[1],f=a[2],h=d-l,x=p-c,w=h*h+x*x,j,g;if(w<pT)g=Math.log(f/u)/t,j=function(A){return[l+A*h,c+A*x,u*Math.exp(t*A*g)]};else{var m=Math.sqrt(w),y=(f*f-u*u+r*w)/(2*u*n*m),k=(f*f-u*u-r*w)/(2*f*n*m),z=Math.log(Math.sqrt(y*y+1)-y),C=Math.log(Math.sqrt(k*k+1)-k);g=(C-z)/t,j=function(A){var S=A*g,$=Tm(z),N=u/(n*m)*($*hT(t*S+z)-fT(z));return[l+N*h,c+N*x,u*$/Tm(t*S+z)]}}return j.duration=g*1e3*t/Math.SQRT2,j}return i.rho=function(s){var a=Math.max(.001,+s),l=a*a,c=l*l;return e(a,l,c)},i}(Math.SQRT2,2,4);var Si=0,to=0,Ki=0,y1=1e3,Ia,no,Oa=0,Or=0,fl=0,Vo=typeof performance=="object"&&performance.now?performance:Date,v1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function dp(){return Or||(v1(gT),Or=Vo.now()+fl)}function gT(){Or=0}function $a(){this._call=this._time=this._next=null}$a.prototype=pp.prototype={constructor:$a,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?dp():+n)+(t==null?0:+t),!this._next&&no!==this&&(no?no._next=this:Ia=this,no=this),this._call=e,this._time=n,Mu()},stop:function(){this._call&&(this._call=null,this._time=1/0,Mu())}};function pp(e,t,n){var r=new $a;return r.restart(e,t,n),r}function xT(){dp(),++Si;for(var e=Ia,t;e;)(t=Or-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Si}function Am(){Or=(Oa=Vo.now())+fl,Si=to=0;try{xT()}finally{Si=0,vT(),Or=0}}function yT(){var e=Vo.now(),t=e-Oa;t>y1&&(fl-=t,Oa=e)}function vT(){for(var e,t=Ia,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Ia=n);no=e,Mu(r)}function Mu(e){if(!Si){to&&(to=clearTimeout(to));var t=e-Or;t>24?(e<1/0&&(to=setTimeout(Am,e-Vo.now()-fl)),Ki&&(Ki=clearInterval(Ki))):(Ki||(Oa=Vo.now(),Ki=setInterval(yT,y1)),Si=1,v1(Am))}}function Pm(e,t,n){var r=new $a;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var bT=is("start","end","cancel","interrupt"),wT=[],b1=0,Lm=1,Ru=2,Xs=3,Mm=4,Iu=5,Zs=6;function hl(e,t,n,r,i,s){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;kT(e,n,{name:t,index:r,group:i,on:bT,tween:wT,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:b1})}function fp(e,t){var n=un(e,t);if(n.state>b1)throw new Error("too late; already scheduled");return n}function Sn(e,t){var n=un(e,t);if(n.state>Xs)throw new Error("too late; already running");return n}function un(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function kT(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=pp(s,0,n.time);function s(u){n.state=Lm,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var d,p,f,h;if(n.state!==Lm)return c();for(d in r)if(h=r[d],h.name===n.name){if(h.state===Xs)return Pm(a);h.state===Mm?(h.state=Zs,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=Zs,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(Pm(function(){n.state===Xs&&(n.state=Mm,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=Ru,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Ru){for(n.state=Xs,i=new Array(f=n.tween.length),d=0,p=-1;d<f;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++p]=h);i.length=p+1}}function l(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Iu,1),p=-1,f=i.length;++p<f;)i[p].call(e,d);n.state===Iu&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=Zs,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function ea(e,t){var n=e.__transition,r,i,s=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){s=!1;continue}i=r.state>Ru&&r.state<Iu,r.state=Zs,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}s&&delete e.__transition}}function jT(e){return this.each(function(){ea(this,e)})}function _T(e,t){var n,r;return function(){var i=Sn(this,e),s=i.tween;if(s!==n){r=n=s;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function ST(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=Sn(this,e),a=s.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=l;break}c===u&&i.push(l)}s.tween=i}}function CT(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=un(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?_T:ST)(n,e,t))}function hp(e,t,n){var r=e._id;return e.each(function(){var i=Sn(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return un(i,r).value[t]}}function w1(e,t){var n;return(typeof t=="number"?Jn:t instanceof Uo?Em:(n=Uo(t))?(t=n,Em):aT)(e,t)}function NT(e){return function(){this.removeAttribute(e)}}function ET(e){return function(){this.removeAttributeNS(e.space,e.local)}}function zT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttribute(e);return a===i?null:a===r?s:s=t(r=a,n)}}function TT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?s:s=t(r=a,n)}}function AT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function PT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function LT(e,t){var n=pl(e),r=n==="transform"?dT:w1;return this.attrTween(e,typeof t=="function"?(n.local?PT:AT)(n,r,hp(this,"attr."+e,t)):t==null?(n.local?ET:NT)(n):(n.local?TT:zT)(n,r,t))}function MT(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function RT(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function IT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&RT(e,s)),n}return i._value=t,i}function OT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&MT(e,s)),n}return i._value=t,i}function $T(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=pl(e);return this.tween(n,(r.local?IT:OT)(r,t))}function DT(e,t){return function(){fp(this,e).delay=+t.apply(this,arguments)}}function FT(e,t){return t=+t,function(){fp(this,e).delay=t}}function BT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?DT:FT)(t,e)):un(this.node(),t).delay}function UT(e,t){return function(){Sn(this,e).duration=+t.apply(this,arguments)}}function VT(e,t){return t=+t,function(){Sn(this,e).duration=t}}function WT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?UT:VT)(t,e)):un(this.node(),t).duration}function HT(e,t){if(typeof t!="function")throw new Error;return function(){Sn(this,e).ease=t}}function qT(e){var t=this._id;return arguments.length?this.each(HT(t,e)):un(this.node(),t).ease}function JT(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;Sn(this,e).ease=n}}function KT(e){if(typeof e!="function")throw new Error;return this.each(JT(this._id,e))}function GT(e){typeof e!="function"&&(e=e1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Fn(r,this._parents,this._name,this._id)}function YT(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),a=new Array(r),l=0;l<s;++l)for(var c=t[l],u=n[l],d=c.length,p=a[l]=new Array(d),f,h=0;h<d;++h)(f=c[h]||u[h])&&(p[h]=f);for(;l<r;++l)a[l]=t[l];return new Fn(a,this._parents,this._name,this._id)}function QT(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function XT(e,t,n){var r,i,s=QT(t)?fp:Sn;return function(){var a=s(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function ZT(e,t){var n=this._id;return arguments.length<2?un(this.node(),n).on.on(e):this.each(XT(n,e,t))}function e3(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function t3(){return this.on("end.remove",e3(this._id))}function n3(e){var t=this._name,n=this._id;typeof e!="function"&&(e=lp(e));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var l=r[a],c=l.length,u=s[a]=new Array(c),d,p,f=0;f<c;++f)(d=l[f])&&(p=e.call(d,d.__data__,f,l))&&("__data__"in d&&(p.__data__=d.__data__),u[f]=p,hl(u[f],t,n,f,u,un(d,n)));return new Fn(s,this._parents,t,n)}function r3(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Zv(e));for(var r=this._groups,i=r.length,s=[],a=[],l=0;l<i;++l)for(var c=r[l],u=c.length,d,p=0;p<u;++p)if(d=c[p]){for(var f=e.call(d,d.__data__,p,c),h,x=un(d,n),w=0,j=f.length;w<j;++w)(h=f[w])&&hl(h,t,n,w,f,x);s.push(f),a.push(d)}return new Fn(s,a,t,n)}var i3=os.prototype.constructor;function o3(){return new i3(this._groups,this._parents)}function s3(e,t){var n,r,i;return function(){var s=_i(this,e),a=(this.style.removeProperty(e),_i(this,e));return s===a?null:s===n&&a===r?i:i=t(n=s,r=a)}}function k1(e){return function(){this.style.removeProperty(e)}}function a3(e,t,n){var r,i=n+"",s;return function(){var a=_i(this,e);return a===i?null:a===r?s:s=t(r=a,n)}}function l3(e,t,n){var r,i,s;return function(){var a=_i(this,e),l=n(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(e),_i(this,e))),a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l))}}function c3(e,t){var n,r,i,s="style."+t,a="end."+s,l;return function(){var c=Sn(this,e),u=c.on,d=c.value[s]==null?l||(l=k1(t)):void 0;(u!==n||i!==d)&&(r=(n=u).copy()).on(a,i=d),c.on=r}}function u3(e,t,n){var r=(e+="")=="transform"?uT:w1;return t==null?this.styleTween(e,s3(e,r)).on("end.style."+e,k1(e)):typeof t=="function"?this.styleTween(e,l3(e,r,hp(this,"style."+e,t))).each(c3(this._id,e)):this.styleTween(e,a3(e,r,t),n).on("end.style."+e,null)}function d3(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function p3(e,t,n){var r,i;function s(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&d3(e,a,n)),r}return s._value=t,s}function f3(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,p3(e,t,n??""))}function h3(e){return function(){this.textContent=e}}function m3(e){return function(){var t=e(this);this.textContent=t??""}}function g3(e){return this.tween("text",typeof e=="function"?m3(hp(this,"text",e)):h3(e==null?"":e+""))}function x3(e){return function(t){this.textContent=e.call(this,t)}}function y3(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&x3(i)),t}return r._value=e,r}function v3(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,y3(e))}function b3(){for(var e=this._name,t=this._id,n=j1(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)if(c=a[u]){var d=un(c,t);hl(c,e,n,u,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Fn(r,this._parents,e,n)}function w3(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var l={value:a},c={value:function(){--i===0&&s()}};n.each(function(){var u=Sn(this,r),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),u.on=t}),i===0&&s()})}var k3=0;function Fn(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function j1(){return++k3}var Nn=os.prototype;Fn.prototype={constructor:Fn,select:n3,selectAll:r3,selectChild:Nn.selectChild,selectChildren:Nn.selectChildren,filter:GT,merge:YT,selection:o3,transition:b3,call:Nn.call,nodes:Nn.nodes,node:Nn.node,size:Nn.size,empty:Nn.empty,each:Nn.each,on:ZT,attr:LT,attrTween:$T,style:u3,styleTween:f3,text:g3,textTween:v3,remove:t3,tween:CT,delay:BT,duration:WT,ease:qT,easeVarying:KT,end:w3,[Symbol.iterator]:Nn[Symbol.iterator]};function j3(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var _3={time:null,delay:0,duration:250,ease:j3};function S3(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function C3(e){var t,n;e instanceof Fn?(t=e._id,e=e._name):(t=j1(),(n=_3).time=dp(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&hl(c,e,t,u,a,n||S3(c,t));return new Fn(r,this._parents,e,t)}os.prototype.interrupt=jT;os.prototype.transition=C3;function N3(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var s,a=n.length,l,c=0,u=0;for(s=0;s<a;++s)l=n[s],c+=l.x,u+=l.y;for(c=(c/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)l=n[s],l.x-=c,l.y-=u}return i.initialize=function(s){n=s},i.x=function(s){return arguments.length?(e=+s,i):e},i.y=function(s){return arguments.length?(t=+s,i):t},i.strength=function(s){return arguments.length?(r=+s,i):r},i}function E3(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return _1(this.cover(t,n),t,n,e)}function _1(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,s=e._root,a={data:r},l=e._x0,c=e._y0,u=e._x1,d=e._y1,p,f,h,x,w,j,g,m;if(!s)return e._root=a,e;for(;s.length;)if((w=t>=(p=(l+u)/2))?l=p:u=p,(j=n>=(f=(c+d)/2))?c=f:d=f,i=s,!(s=s[g=j<<1|w]))return i[g]=a,e;if(h=+e._x.call(null,s.data),x=+e._y.call(null,s.data),t===h&&n===x)return a.next=s,i?i[g]=a:e._root=a,e;do i=i?i[g]=new Array(4):e._root=new Array(4),(w=t>=(p=(l+u)/2))?l=p:u=p,(j=n>=(f=(c+d)/2))?c=f:d=f;while((g=j<<1|w)===(m=(x>=f)<<1|h>=p));return i[m]=s,i[g]=a,e}function z3(e){var t,n,r=e.length,i,s,a=new Array(r),l=new Array(r),c=1/0,u=1/0,d=-1/0,p=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(s=+this._y.call(null,t))||(a[n]=i,l[n]=s,i<c&&(c=i),i>d&&(d=i),s<u&&(u=s),s>p&&(p=s));if(c>d||u>p)return this;for(this.cover(c,u).cover(d,p),n=0;n<r;++n)_1(this,a[n],l[n],e[n]);return this}function T3(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,s=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var a=i-n||1,l=this._root,c,u;n>e||e>=i||r>t||t>=s;)switch(u=(t<r)<<1|e<n,c=new Array(4),c[u]=l,l=c,a*=2,u){case 0:i=n+a,s=r+a;break;case 1:n=i-a,s=r+a;break;case 2:i=n+a,r=s-a;break;case 3:n=i-a,r=s-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=s,this}function A3(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function P3(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function ft(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function L3(e,t,n){var r,i=this._x0,s=this._y0,a,l,c,u,d=this._x1,p=this._y1,f=[],h=this._root,x,w;for(h&&f.push(new ft(h,i,s,d,p)),n==null?n=1/0:(i=e-n,s=t-n,d=e+n,p=t+n,n*=n);x=f.pop();)if(!(!(h=x.node)||(a=x.x0)>d||(l=x.y0)>p||(c=x.x1)<i||(u=x.y1)<s))if(h.length){var j=(a+c)/2,g=(l+u)/2;f.push(new ft(h[3],j,g,c,u),new ft(h[2],a,g,j,u),new ft(h[1],j,l,c,g),new ft(h[0],a,l,j,g)),(w=(t>=g)<<1|e>=j)&&(x=f[f.length-1],f[f.length-1]=f[f.length-1-w],f[f.length-1-w]=x)}else{var m=e-+this._x.call(null,h.data),y=t-+this._y.call(null,h.data),k=m*m+y*y;if(k<n){var z=Math.sqrt(n=k);i=e-z,s=t-z,d=e+z,p=t+z,r=h.data}}return r}function M3(e){if(isNaN(d=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,n=this._root,r,i,s,a=this._x0,l=this._y0,c=this._x1,u=this._y1,d,p,f,h,x,w,j,g;if(!n)return this;if(n.length)for(;;){if((x=d>=(f=(a+c)/2))?a=f:c=f,(w=p>=(h=(l+u)/2))?l=h:u=h,t=n,!(n=n[j=w<<1|x]))return this;if(!n.length)break;(t[j+1&3]||t[j+2&3]||t[j+3&3])&&(r=t,g=j)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,i?(s?i.next=s:delete i.next,this):t?(s?t[j]=s:delete t[j],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[g]=n:this._root=n),this):(this._root=s,this)}function R3(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function I3(){return this._root}function O3(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function $3(e){var t=[],n,r=this._root,i,s,a,l,c;for(r&&t.push(new ft(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,s=n.x0,a=n.y0,l=n.x1,c=n.y1)&&r.length){var u=(s+l)/2,d=(a+c)/2;(i=r[3])&&t.push(new ft(i,u,d,l,c)),(i=r[2])&&t.push(new ft(i,s,d,u,c)),(i=r[1])&&t.push(new ft(i,u,a,l,d)),(i=r[0])&&t.push(new ft(i,s,a,u,d))}return this}function D3(e){var t=[],n=[],r;for(this._root&&t.push(new ft(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var s,a=r.x0,l=r.y0,c=r.x1,u=r.y1,d=(a+c)/2,p=(l+u)/2;(s=i[0])&&t.push(new ft(s,a,l,d,p)),(s=i[1])&&t.push(new ft(s,d,l,c,p)),(s=i[2])&&t.push(new ft(s,a,p,d,u)),(s=i[3])&&t.push(new ft(s,d,p,c,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function F3(e){return e[0]}function B3(e){return arguments.length?(this._x=e,this):this._x}function U3(e){return e[1]}function V3(e){return arguments.length?(this._y=e,this):this._y}function mp(e,t,n){var r=new gp(t??F3,n??U3,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function gp(e,t,n,r,i,s){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=s,this._root=void 0}function Rm(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var xt=mp.prototype=gp.prototype;xt.copy=function(){var e=new gp(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=Rm(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=Rm(r));return e};xt.add=E3;xt.addAll=z3;xt.cover=T3;xt.data=A3;xt.extent=P3;xt.find=L3;xt.remove=M3;xt.removeAll=R3;xt.root=I3;xt.size=O3;xt.visit=$3;xt.visitAfter=D3;xt.x=B3;xt.y=V3;function Tr(e){return function(){return e}}function er(e){return(e()-.5)*1e-6}function W3(e){return e.x+e.vx}function H3(e){return e.y+e.vy}function q3(e){var t,n,r,i=1,s=1;typeof e!="function"&&(e=Tr(e==null?1:+e));function a(){for(var u,d=t.length,p,f,h,x,w,j,g=0;g<s;++g)for(p=mp(t,W3,H3).visitAfter(l),u=0;u<d;++u)f=t[u],w=n[f.index],j=w*w,h=f.x+f.vx,x=f.y+f.vy,p.visit(m);function m(y,k,z,C,A){var S=y.data,$=y.r,N=w+$;if(S){if(S.index>f.index){var R=h-S.x-S.vx,L=x-S.y-S.vy,W=R*R+L*L;W<N*N&&(R===0&&(R=er(r),W+=R*R),L===0&&(L=er(r),W+=L*L),W=(N-(W=Math.sqrt(W)))/W*i,f.vx+=(R*=W)*(N=($*=$)/(j+$)),f.vy+=(L*=W)*N,S.vx-=R*(N=1-N),S.vy-=L*N)}return}return k>h+N||C<h-N||z>x+N||A<x-N}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<4;++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,p;for(n=new Array(d),u=0;u<d;++u)p=t[u],n[p.index]=+e(p,u,t)}}return a.initialize=function(u,d){t=u,r=d,c()},a.iterations=function(u){return arguments.length?(s=+u,a):s},a.strength=function(u){return arguments.length?(i=+u,a):i},a.radius=function(u){return arguments.length?(e=typeof u=="function"?u:Tr(+u),c(),a):e},a}function J3(e){return e.index}function Im(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function K3(e){var t=J3,n=p,r,i=Tr(30),s,a,l,c,u,d=1;e==null&&(e=[]);function p(j){return 1/Math.min(l[j.source.index],l[j.target.index])}function f(j){for(var g=0,m=e.length;g<d;++g)for(var y=0,k,z,C,A,S,$,N;y<m;++y)k=e[y],z=k.source,C=k.target,A=C.x+C.vx-z.x-z.vx||er(u),S=C.y+C.vy-z.y-z.vy||er(u),$=Math.sqrt(A*A+S*S),$=($-s[y])/$*j*r[y],A*=$,S*=$,C.vx-=A*(N=c[y]),C.vy-=S*N,z.vx+=A*(N=1-N),z.vy+=S*N}function h(){if(a){var j,g=a.length,m=e.length,y=new Map(a.map((z,C)=>[t(z,C,a),z])),k;for(j=0,l=new Array(g);j<m;++j)k=e[j],k.index=j,typeof k.source!="object"&&(k.source=Im(y,k.source)),typeof k.target!="object"&&(k.target=Im(y,k.target)),l[k.source.index]=(l[k.source.index]||0)+1,l[k.target.index]=(l[k.target.index]||0)+1;for(j=0,c=new Array(m);j<m;++j)k=e[j],c[j]=l[k.source.index]/(l[k.source.index]+l[k.target.index]);r=new Array(m),x(),s=new Array(m),w()}}function x(){if(a)for(var j=0,g=e.length;j<g;++j)r[j]=+n(e[j],j,e)}function w(){if(a)for(var j=0,g=e.length;j<g;++j)s[j]=+i(e[j],j,e)}return f.initialize=function(j,g){a=j,u=g,h()},f.links=function(j){return arguments.length?(e=j,h(),f):e},f.id=function(j){return arguments.length?(t=j,f):t},f.iterations=function(j){return arguments.length?(d=+j,f):d},f.strength=function(j){return arguments.length?(n=typeof j=="function"?j:Tr(+j),x(),f):n},f.distance=function(j){return arguments.length?(i=typeof j=="function"?j:Tr(+j),w(),f):i},f}const G3=1664525,Y3=1013904223,Om=4294967296;function Q3(){let e=1;return()=>(e=(G3*e+Y3)%Om)/Om}function X3(e){return e.x}function Z3(e){return e.y}var e5=10,t5=Math.PI*(3-Math.sqrt(5));function n5(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),s=0,a=.6,l=new Map,c=pp(p),u=is("tick","end"),d=Q3();e==null&&(e=[]);function p(){f(),u.call("tick",t),n<r&&(c.stop(),u.call("end",t))}function f(w){var j,g=e.length,m;w===void 0&&(w=1);for(var y=0;y<w;++y)for(n+=(s-n)*i,l.forEach(function(k){k(n)}),j=0;j<g;++j)m=e[j],m.fx==null?m.x+=m.vx*=a:(m.x=m.fx,m.vx=0),m.fy==null?m.y+=m.vy*=a:(m.y=m.fy,m.vy=0);return t}function h(){for(var w=0,j=e.length,g;w<j;++w){if(g=e[w],g.index=w,g.fx!=null&&(g.x=g.fx),g.fy!=null&&(g.y=g.fy),isNaN(g.x)||isNaN(g.y)){var m=e5*Math.sqrt(.5+w),y=w*t5;g.x=m*Math.cos(y),g.y=m*Math.sin(y)}(isNaN(g.vx)||isNaN(g.vy))&&(g.vx=g.vy=0)}}function x(w){return w.initialize&&w.initialize(e,d),w}return h(),t={tick:f,restart:function(){return c.restart(p),t},stop:function(){return c.stop(),t},nodes:function(w){return arguments.length?(e=w,h(),l.forEach(x),t):e},alpha:function(w){return arguments.length?(n=+w,t):n},alphaMin:function(w){return arguments.length?(r=+w,t):r},alphaDecay:function(w){return arguments.length?(i=+w,t):+i},alphaTarget:function(w){return arguments.length?(s=+w,t):s},velocityDecay:function(w){return arguments.length?(a=1-w,t):1-a},randomSource:function(w){return arguments.length?(d=w,l.forEach(x),t):d},force:function(w,j){return arguments.length>1?(j==null?l.delete(w):l.set(w,x(j)),t):l.get(w)},find:function(w,j,g){var m=0,y=e.length,k,z,C,A,S;for(g==null?g=1/0:g*=g,m=0;m<y;++m)A=e[m],k=w-A.x,z=j-A.y,C=k*k+z*z,C<g&&(S=A,g=C);return S},on:function(w,j){return arguments.length>1?(u.on(w,j),t):u.on(w)}}}function r5(){var e,t,n,r,i=Tr(-30),s,a=1,l=1/0,c=.81;function u(h){var x,w=e.length,j=mp(e,X3,Z3).visitAfter(p);for(r=h,x=0;x<w;++x)t=e[x],j.visit(f)}function d(){if(e){var h,x=e.length,w;for(s=new Array(x),h=0;h<x;++h)w=e[h],s[w.index]=+i(w,h,e)}}function p(h){var x=0,w,j,g=0,m,y,k;if(h.length){for(m=y=k=0;k<4;++k)(w=h[k])&&(j=Math.abs(w.value))&&(x+=w.value,g+=j,m+=j*w.x,y+=j*w.y);h.x=m/g,h.y=y/g}else{w=h,w.x=w.data.x,w.y=w.data.y;do x+=s[w.data.index];while(w=w.next)}h.value=x}function f(h,x,w,j){if(!h.value)return!0;var g=h.x-t.x,m=h.y-t.y,y=j-x,k=g*g+m*m;if(y*y/c<k)return k<l&&(g===0&&(g=er(n),k+=g*g),m===0&&(m=er(n),k+=m*m),k<a&&(k=Math.sqrt(a*k)),t.vx+=g*h.value*r/k,t.vy+=m*h.value*r/k),!0;if(h.length||k>=l)return;(h.data!==t||h.next)&&(g===0&&(g=er(n),k+=g*g),m===0&&(m=er(n),k+=m*m),k<a&&(k=Math.sqrt(a*k)));do h.data!==t&&(y=s[h.data.index]*r/k,t.vx+=g*y,t.vy+=m*y);while(h=h.next)}return u.initialize=function(h,x){e=h,n=x,d()},u.strength=function(h){return arguments.length?(i=typeof h=="function"?h:Tr(+h),d(),u):i},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}const Rs=e=>()=>e;function i5(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Ln(e,t,n){this.k=e,this.x=t,this.y=n}Ln.prototype={constructor:Ln,scale:function(e){return e===1?this:new Ln(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Ln(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var xp=new Ln(1,0,0);Ln.prototype;function fc(e){e.stopImmediatePropagation()}function Gi(e){e.preventDefault(),e.stopImmediatePropagation()}function o5(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function s5(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function $m(){return this.__zoom||xp}function a5(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function l5(){return navigator.maxTouchPoints||"ontouchstart"in this}function c5(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>s?(s+a)/2:Math.min(0,s)||Math.max(0,a))}function u5(){var e=o5,t=s5,n=c5,r=a5,i=l5,s=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,c=mT,u=is("start","zoom","end"),d,p,f,h=500,x=150,w=0,j=10;function g(T){T.property("__zoom",$m).on("wheel.zoom",S,{passive:!1}).on("mousedown.zoom",$).on("dblclick.zoom",N).filter(i).on("touchstart.zoom",R).on("touchmove.zoom",L).on("touchend.zoom touchcancel.zoom",W).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(T,M,B,E){var O=T.selection?T.selection():T;O.property("__zoom",$m),T!==O?z(T,M,B,E):O.interrupt().each(function(){C(this,arguments).event(E).start().zoom(null,typeof M=="function"?M.apply(this,arguments):M).end()})},g.scaleBy=function(T,M,B,E){g.scaleTo(T,function(){var O=this.__zoom.k,I=typeof M=="function"?M.apply(this,arguments):M;return O*I},B,E)},g.scaleTo=function(T,M,B,E){g.transform(T,function(){var O=t.apply(this,arguments),I=this.__zoom,v=B==null?k(O):typeof B=="function"?B.apply(this,arguments):B,D=I.invert(v),q=typeof M=="function"?M.apply(this,arguments):M;return n(y(m(I,q),v,D),O,a)},B,E)},g.translateBy=function(T,M,B,E){g.transform(T,function(){return n(this.__zoom.translate(typeof M=="function"?M.apply(this,arguments):M,typeof B=="function"?B.apply(this,arguments):B),t.apply(this,arguments),a)},null,E)},g.translateTo=function(T,M,B,E,O){g.transform(T,function(){var I=t.apply(this,arguments),v=this.__zoom,D=E==null?k(I):typeof E=="function"?E.apply(this,arguments):E;return n(xp.translate(D[0],D[1]).scale(v.k).translate(typeof M=="function"?-M.apply(this,arguments):-M,typeof B=="function"?-B.apply(this,arguments):-B),I,a)},E,O)};function m(T,M){return M=Math.max(s[0],Math.min(s[1],M)),M===T.k?T:new Ln(M,T.x,T.y)}function y(T,M,B){var E=M[0]-B[0]*T.k,O=M[1]-B[1]*T.k;return E===T.x&&O===T.y?T:new Ln(T.k,E,O)}function k(T){return[(+T[0][0]+ +T[1][0])/2,(+T[0][1]+ +T[1][1])/2]}function z(T,M,B,E){T.on("start.zoom",function(){C(this,arguments).event(E).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(E).end()}).tween("zoom",function(){var O=this,I=arguments,v=C(O,I).event(E),D=t.apply(O,I),q=B==null?k(D):typeof B=="function"?B.apply(O,I):B,b=Math.max(D[1][0]-D[0][0],D[1][1]-D[0][1]),V=O.__zoom,P=typeof M=="function"?M.apply(O,I):M,Y=c(V.invert(q).concat(b/V.k),P.invert(q).concat(b/P.k));return function(ue){if(ue===1)ue=P;else{var pe=Y(ue),J=b/pe[2];ue=new Ln(J,q[0]-pe[0]*J,q[1]-pe[1]*J)}v.zoom(null,ue)}})}function C(T,M,B){return!B&&T.__zooming||new A(T,M)}function A(T,M){this.that=T,this.args=M,this.active=0,this.sourceEvent=null,this.extent=t.apply(T,M),this.taps=0}A.prototype={event:function(T){return T&&(this.sourceEvent=T),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(T,M){return this.mouse&&T!=="mouse"&&(this.mouse[1]=M.invert(this.mouse[0])),this.touch0&&T!=="touch"&&(this.touch0[1]=M.invert(this.touch0[0])),this.touch1&&T!=="touch"&&(this.touch1[1]=M.invert(this.touch1[0])),this.that.__zoom=M,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(T){var M=qt(this.that).datum();u.call(T,this.that,new i5(T,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:u}),M)}};function S(T,...M){if(!e.apply(this,arguments))return;var B=C(this,M).event(T),E=this.__zoom,O=Math.max(s[0],Math.min(s[1],E.k*Math.pow(2,r.apply(this,arguments)))),I=zn(T);if(B.wheel)(B.mouse[0][0]!==I[0]||B.mouse[0][1]!==I[1])&&(B.mouse[1]=E.invert(B.mouse[0]=I)),clearTimeout(B.wheel);else{if(E.k===O)return;B.mouse=[I,E.invert(I)],ea(this),B.start()}Gi(T),B.wheel=setTimeout(v,x),B.zoom("mouse",n(y(m(E,O),B.mouse[0],B.mouse[1]),B.extent,a));function v(){B.wheel=null,B.end()}}function $(T,...M){if(f||!e.apply(this,arguments))return;var B=T.currentTarget,E=C(this,M,!0).event(T),O=qt(T.view).on("mousemove.zoom",q,!0).on("mouseup.zoom",b,!0),I=zn(T,B),v=T.clientX,D=T.clientY;u1(T.view),fc(T),E.mouse=[I,this.__zoom.invert(I)],ea(this),E.start();function q(V){if(Gi(V),!E.moved){var P=V.clientX-v,Y=V.clientY-D;E.moved=P*P+Y*Y>w}E.event(V).zoom("mouse",n(y(E.that.__zoom,E.mouse[0]=zn(V,B),E.mouse[1]),E.extent,a))}function b(V){O.on("mousemove.zoom mouseup.zoom",null),d1(V.view,E.moved),Gi(V),E.event(V).end()}}function N(T,...M){if(e.apply(this,arguments)){var B=this.__zoom,E=zn(T.changedTouches?T.changedTouches[0]:T,this),O=B.invert(E),I=B.k*(T.shiftKey?.5:2),v=n(y(m(B,I),E,O),t.apply(this,M),a);Gi(T),l>0?qt(this).transition().duration(l).call(z,v,E,T):qt(this).call(g.transform,v,E,T)}}function R(T,...M){if(e.apply(this,arguments)){var B=T.touches,E=B.length,O=C(this,M,T.changedTouches.length===E).event(T),I,v,D,q;for(fc(T),v=0;v<E;++v)D=B[v],q=zn(D,this),q=[q,this.__zoom.invert(q),D.identifier],O.touch0?!O.touch1&&O.touch0[2]!==q[2]&&(O.touch1=q,O.taps=0):(O.touch0=q,I=!0,O.taps=1+!!d);d&&(d=clearTimeout(d)),I&&(O.taps<2&&(p=q[0],d=setTimeout(function(){d=null},h)),ea(this),O.start())}}function L(T,...M){if(this.__zooming){var B=C(this,M).event(T),E=T.changedTouches,O=E.length,I,v,D,q;for(Gi(T),I=0;I<O;++I)v=E[I],D=zn(v,this),B.touch0&&B.touch0[2]===v.identifier?B.touch0[0]=D:B.touch1&&B.touch1[2]===v.identifier&&(B.touch1[0]=D);if(v=B.that.__zoom,B.touch1){var b=B.touch0[0],V=B.touch0[1],P=B.touch1[0],Y=B.touch1[1],ue=(ue=P[0]-b[0])*ue+(ue=P[1]-b[1])*ue,pe=(pe=Y[0]-V[0])*pe+(pe=Y[1]-V[1])*pe;v=m(v,Math.sqrt(ue/pe)),D=[(b[0]+P[0])/2,(b[1]+P[1])/2],q=[(V[0]+Y[0])/2,(V[1]+Y[1])/2]}else if(B.touch0)D=B.touch0[0],q=B.touch0[1];else return;B.zoom("touch",n(y(v,D,q),B.extent,a))}}function W(T,...M){if(this.__zooming){var B=C(this,M).event(T),E=T.changedTouches,O=E.length,I,v;for(fc(T),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),I=0;I<O;++I)v=E[I],B.touch0&&B.touch0[2]===v.identifier?delete B.touch0:B.touch1&&B.touch1[2]===v.identifier&&delete B.touch1;if(B.touch1&&!B.touch0&&(B.touch0=B.touch1,delete B.touch1),B.touch0)B.touch0[1]=this.__zoom.invert(B.touch0[0]);else if(B.end(),B.taps===2&&(v=zn(v,this),Math.hypot(p[0]-v[0],p[1]-v[1])<j)){var D=qt(this).on("dblclick.zoom");D&&D.apply(this,arguments)}}}return g.wheelDelta=function(T){return arguments.length?(r=typeof T=="function"?T:Rs(+T),g):r},g.filter=function(T){return arguments.length?(e=typeof T=="function"?T:Rs(!!T),g):e},g.touchable=function(T){return arguments.length?(i=typeof T=="function"?T:Rs(!!T),g):i},g.extent=function(T){return arguments.length?(t=typeof T=="function"?T:Rs([[+T[0][0],+T[0][1]],[+T[1][0],+T[1][1]]]),g):t},g.scaleExtent=function(T){return arguments.length?(s[0]=+T[0],s[1]=+T[1],g):[s[0],s[1]]},g.translateExtent=function(T){return arguments.length?(a[0][0]=+T[0][0],a[1][0]=+T[1][0],a[0][1]=+T[0][1],a[1][1]=+T[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(T){return arguments.length?(n=T,g):n},g.duration=function(T){return arguments.length?(l=+T,g):l},g.interpolate=function(T){return arguments.length?(c=T,g):c},g.on=function(){var T=u.on.apply(u,arguments);return T===u?g:T},g.clickDistance=function(T){return arguments.length?(w=(T=+T)*T,g):Math.sqrt(w)},g.tapDistance=function(T){return arguments.length?(j=+T,g):j},g}const Dm=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],Fm=new Map;function Bm(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};const t=Fm.get(e);if(t)return t;let n=0;for(let s=0;s<e.length;s++)n=(n<<5)-n+e.charCodeAt(s),n=n&n;const r=Math.abs(n)%Dm.length,i=Dm[r];return Fm.set(e,i),i}const Um={bg:"#14b8a6"};function d5({agents:e,events:t,selectedEventIndex:n}){const[r,i]=_.useState(!1),[s,a]=_.useState(null),l=_.useRef(null),c=_.useRef(null),u=_.useRef(null),d=_.useRef(new Map),p=_.useRef(null),{activeAgent:f,activeTool:h,transitions:x,visitedAgents:w,toolCalls:j}=_.useMemo(()=>{var R;const m=n!==null?n:t.length-1;if(m<0||t.length===0)return{activeAgent:null,activeTool:null,transitions:new Map,visitedAgents:new Set,toolCalls:new Map};const y=t.slice(0,m+1),k=new Map,z=new Map,C=new Set,A=new Set;C.add("system");const S=["system"];let $=null;for(const L of y)if(L.event_type==="agent_start"){const W=L.agent_name;if(C.add(W),S.length>0){const T=S[S.length-1];if(T!==W){const M=`${T}->${W}`;k.set(M,(k.get(M)||0)+1)}}S.push(W)}else if(L.event_type==="agent_end")S.length>1&&S.pop();else if(L.event_type==="tool_call"){const W=(R=L.data)==null?void 0:R.tool_name;if(W&&S.length>0){const T=S[S.length-1];A.add(W);const M=`${T}->tool:${W}`;z.set(M,(z.get(M)||0)+1),$=W}}else L.event_type==="tool_result"&&($=null);return A.forEach(L=>C.add(`tool:${L}`)),{activeAgent:S.length>1?S[S.length-1]:null,activeTool:$,transitions:k,visitedAgents:C,toolCalls:z}},[t,n]),g=_.useMemo(()=>{const m=new Map(e.map(A=>[A.name,A])),y=[],k=new Map;for(const A of w){if(A.startsWith("tool:"))continue;const S=m.get(A),$=(S==null?void 0:S.id)||A,N=d.current.get($);y.push({id:$,name:A,type:A==="system"?"System":(S==null?void 0:S.type)||"LlmAgent",isActive:A===f,wasActive:!0,x:N==null?void 0:N.x,y:N==null?void 0:N.y}),k.set(A,$)}for(const A of w){if(!A.startsWith("tool:"))continue;const S=A.slice(5),$=`tool:${S}`,N=d.current.get($);y.push({id:$,name:S,type:"Tool",isActive:S===h,wasActive:!0,x:N==null?void 0:N.x,y:N==null?void 0:N.y}),k.set(A,$)}const z=new Set(y.map(A=>A.id)),C=[];for(const[A,S]of x){const[$,N]=A.split("->"),R=k.get($),L=k.get(N);R&&L&&z.has(R)&&z.has(L)&&C.push({source:R,target:L,type:"transition",count:S})}for(const[A,S]of j){const[$,N]=A.split("->"),R=k.get($),L=k.get(N);R&&L&&z.has(R)&&z.has(L)&&C.push({source:R,target:L,type:"tool",count:S})}return{nodes:y,links:C}},[e,f,h,w,x,j]);return _.useEffect(()=>{var I;if(!l.current||!r)return;const m=qt(l.current),y=300,k=400;m.selectAll("*").remove();const z=m.append("g"),C={current:((I=p.current)==null?void 0:I.k)||1},A=u5().scaleExtent([.3,3]).on("zoom",v=>{z.attr("transform",v.transform),p.current=v.transform,C.current=v.transform.k});m.call(A),p.current&&(m.call(A.transform,p.current),C.current=p.current.k);const S=()=>{if(g.nodes.length===0)return null;let v=1/0,D=-1/0,q=1/0,b=-1/0;if(g.nodes.forEach(F=>{F.x!==void 0&&F.y!==void 0&&(v=Math.min(v,F.x),D=Math.max(D,F.x),q=Math.min(q,F.y),b=Math.max(b,F.y))}),v===1/0)return null;const V=60,P=D-v+V*2,Y=b-q+V*2,ue=Math.min(y/P,k/Y,1.5)*.85,pe=(v+D)/2,J=(q+b)/2;return xp.translate(y/2,k/2).scale(ue).translate(-pe,-J)},$=v=>{p.current=v,C.current=v.k,m.call(A.transform,v)},N=g.nodes.every(v=>v.x!==void 0&&v.y!==void 0),R=140,L=()=>{const v=R/C.current;for(const D of g.nodes){if(D.x===void 0||D.y===void 0)continue;const q=Math.sqrt(D.x*D.x+D.y*D.y);if(q>v){const b=v/q;D.x*=b,D.y*=b}}},W=n5(g.nodes).force("link",K3(g.links).id(v=>v.id).distance(80)).force("charge",r5().strength(-200)).force("center",N3(0,0)).force("collision",q3().radius(35)).force("boundary",L);N&&W.alpha(.1).alphaDecay(.05),u.current=W;const T=z.append("g").selectAll("path").data(g.links).join("path").attr("stroke",v=>v.type==="transition"?"#22c55e":v.type==="sub_agent"?"#6366f1":"#f59e0b").attr("stroke-width",v=>v.type==="transition"?Math.min(v.count*1.5+1,6):1.5).attr("stroke-opacity",v=>v.type==="transition"?.8:.4).attr("stroke-dasharray",v=>v.type==="tool"?"4,2":"none").attr("fill","none"),M=z.append("g").selectAll("g").data(g.nodes).join("g").call(Vz().on("start",(v,D)=>{v.active||W.alphaTarget(.3).restart(),D.fx=D.x,D.fy=D.y}).on("drag",(v,D)=>{D.fx=v.x,D.fy=v.y}).on("end",(v,D)=>{v.active||W.alphaTarget(0),D.fx=null,D.fy=null})),B=v=>v.type==="System"?14:v.type==="Tool"?12:18;M.append("circle").attr("r",v=>B(v)).attr("fill",v=>v.type==="Tool"?Um.bg:Bm(v.name).bg).attr("stroke",v=>v.isActive?"#fff":v.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",v=>v.isActive?3:1.5).attr("opacity",v=>v.wasActive?1:.5).attr("class",v=>v.isActive?"active-node":"").style("cursor","pointer").on("mouseenter",function(v,D){var P;const q=(P=c.current)==null?void 0:P.getBoundingClientRect();if(!q)return;const b=v.clientX-q.left,V=v.clientY-q.top;a({x:b,y:V,node:D}),qt(this).transition().duration(150).attr("r",B(D)+6)}).on("mouseleave",function(v,D){a(null),qt(this).transition().duration(150).attr("r",B(D))}),M.append("text").text(v=>v.name.length>10?v.name.slice(0,8)+"…":v.name).attr("text-anchor","middle").attr("dy",32).attr("font-size",10).attr("fill","#e4e4e7").attr("font-weight",v=>v.isActive?600:400);let E=0;W.on("tick",()=>{if(T.attr("d",v=>{const D=v.target.x-v.source.x,q=v.target.y-v.source.y,b=Math.sqrt(D*D+q*q)*(v.type==="transition"?1.5:2);return`M${v.source.x},${v.source.y}A${b},${b} 0 0,1 ${v.target.x},${v.target.y}`}),M.attr("transform",v=>`translate(${v.x},${v.y})`),g.nodes.forEach(v=>{v.x!==void 0&&v.y!==void 0&&d.current.set(v.id,{x:v.x,y:v.y})}),E++,E%5===0){const v=S();v&&$(v)}});const O=S();return O&&$(O),()=>{W.stop()}},[g,r]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:`agent-graph-container ${r?"":"closed"}`,children:o.jsxs("div",{className:"agent-graph-panel",children:[o.jsxs("div",{className:"agent-graph-content",ref:c,children:[o.jsx("svg",{ref:l,className:"agent-graph-svg"}),o.jsxs("div",{className:"agent-graph-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#22c55e"}}),o.jsx("span",{children:"agent flow"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#f59e0b",borderStyle:"dashed"}}),o.jsx("span",{children:"tool call"})]})]}),s&&o.jsxs("div",{className:"agent-graph-tooltip",style:{left:Math.min(s.x+15,180),top:Math.max(s.y-20,10)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:s.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:s.node.type==="Tool"?Um.bg:Bm(s.node.name).bg}}),s.node.type]}),s.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"})]})]}),o.jsx("button",{className:"agent-graph-toggle",onClick:()=>i(!r),children:o.jsx(bt,{size:20})})]})})]})}const Vm={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},p5={agent_start:hu,agent_end:hu,tool_call:ln,tool_result:ln,model_call:Od,model_response:Na,state_change:Rn,transfer:Zy,callback_start:jn,callback_end:jn,callback_error:Vy},Wm=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],Hm=new Map;function Da(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=Hm.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%Wm.length,Hm.set(e,t)}return Wm[t]}function f5(e){var t,n,r,i,s,a,l,c,u,d,p,f,h,x,w,j,g,m,y,k,z,C,A,S,$,N,R,L,W;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const M=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([J,F])=>{const K=F!=null?JSON.stringify(F):"null";return`${J}=${K.slice(0,500)}${K.length>500?"...":""}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${M.slice(0,1e3)}${M.length>1e3?"...":""})`;case"tool_result":const B=(i=e.data)==null?void 0:i.result;let E="";if((a=(s=B==null?void 0:B.content)==null?void 0:s[0])!=null&&a.text)E=String(B.content[0].text).slice(0,500);else if(typeof B=="string")E=B.slice(0,500);else if(B!=null){const J=JSON.stringify(B);E=J?J.slice(0,500):""}else E="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${E}${E.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const O=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((h=e.data)==null?void 0:h.parts)||[],I=O.find(J=>(J==null?void 0:J.type)==="function_call");if(I)return`LLM_RSP → ${I.name||"unknown"}()`;const v=O.find(J=>(J==null?void 0:J.type)==="text");if(v!=null&&v.text){const J=String(v.text);return`LLM_RSP "${J.slice(0,50)}${J.length>50?"...":""}"`}return`LLM_RSP (${((x=e.data)==null?void 0:x.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((w=e.data)==null?void 0:w.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((j=e.data)==null?void 0:j.target)||"unknown"}`;case"callback_start":const q=((g=e.data)==null?void 0:g.callback_name)||"unknown",b=((m=e.data)==null?void 0:m.callback_type)||"";return q==="network_approval"?`⏳ AWAITING APPROVAL ${((y=e.data)==null?void 0:y.host)||((k=e.data)==null?void 0:k.url)||""}`:`CALLBACK START ${b?`[${b}]`:""} ${q}`;case"callback_end":const V=((z=e.data)==null?void 0:z.callback_name)||"unknown",P=((C=e.data)==null?void 0:C.callback_type)||"",Y=(A=e.data)!=null&&A.error?" [ERROR]":"";return V==="network_approval"?((S=e.data)==null?void 0:S.action)==="deny"?`🚫 DENIED ${(($=e.data)==null?void 0:$.host)||""}`:`✅ APPROVED ${((N=e.data)==null?void 0:N.pattern)||((R=e.data)==null?void 0:R.host)||""}`:`CALLBACK END ${P?`[${P}]`:""} ${V}${Y}`;case"callback_error":const ue=((L=e.data)==null?void 0:L.source)||"unknown",pe=((W=e.data)==null?void 0:W.error)||"Unknown error";return`⚠️ ERROR in ${ue}: ${pe.slice(0,50)}${pe.length>50?"...":""}`;default:return e.event_type.toUpperCase()}}function h5(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function m5(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,i=0;const s=(l,c)=>{l&&n.push(c?o.jsx("span",{style:{color:c},children:l},i++):o.jsx("span",{children:l},i++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const p=r.match(c);if(p&&p.index!==void 0){const f=d?r.indexOf(p[d],p.index):p.index,h=d?p[d]:p[0];(!l||f<l.index)&&(l={index:f,length:h.length,text:h,color:u})}}if(l)l.index>0&&s(r.slice(0,l.index)),s(l.text,l.color),r=r.slice(l.index+l.length);else{s(r);break}}return o.jsx(o.Fragment,{children:n})}function g5({content:e}){const t=e.split(`
`);return o.jsx(o.Fragment,{children:t.map((n,r)=>o.jsx("div",{children:m5(n)},r))})}function x5({event:e}){var l,c,u,d,p,f,h,x,w,j,g,m,y,k,z,C,A,S,$,N,R;const[t,n]=_.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,i]=_.useState(null),s=L=>{const W=new Set(t);W.has(L)?W.delete(L):W.add(L),n(W)},a=(L,W=0,T=!1)=>{const M="  ".repeat(W),B="  ".repeat(W+1);if(L===null)return o.jsx("span",{className:"json-null",children:"null"});if(L===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof L=="boolean")return o.jsx("span",{className:"json-boolean",children:L.toString()});if(typeof L=="number")return o.jsx("span",{className:"json-number",children:L});if(typeof L=="string"){const E=L.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),O=()=>i(L);return E.length>300&&W>0?o.jsxs("span",{className:"json-string json-string-clickable",onClick:O,title:"Click to view as Markdown",children:['"',E.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",L.length," chars)"]})]}):o.jsxs("span",{className:"json-string json-string-clickable",onClick:O,title:"Click to view as Markdown",children:['"',E,'"']})}if(Array.isArray(L))return L.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):L.every(O=>O===null||typeof O!="object")&&L.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),L.map((O,I)=>o.jsxs("span",{children:[a(O,W+1,!0),I<L.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},I)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),L.map((O,I)=>o.jsxs("span",{children:[`
`+B,a(O,W+1),I<L.length-1&&o.jsx("span",{className:"json-comma",children:","})]},I)),`
`+M,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof L=="object"){const E=Object.entries(L);return E.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):E.length<=2&&E.every(([,I])=>I===null||typeof I!="object")&&T?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),E.map(([I,v],D)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',I,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(v,W+1,!0),D<E.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},I)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),E.map(([I,v],D)=>o.jsxs("span",{children:[`
`+B,o.jsxs("span",{className:"json-key",children:['"',I,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(v,W+1),D<E.length-1&&o.jsx("span",{className:"json-comma",children:","})]},I)),`
`+M,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(L)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",style:{backgroundColor:Da(e.agent_name).bg,color:Da(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("data"),children:[t.has("data")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((l=e.data)==null?void 0:l.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("instruction"),children:[t.has("instruction")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((c=e.data)==null?void 0:c.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("messages"),children:[t.has("messages")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((L,W)=>{var T;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${L.role}`,children:L.role}),o.jsx("div",{className:"message-parts",children:(T=L.parts)==null?void 0:T.map((M,B)=>o.jsxs("div",{className:"message-part",children:[M.text&&o.jsx("pre",{children:M.text}),M.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:M.function_call.name}),o.jsx("pre",{children:JSON.stringify(M.function_call.args,null,2)})]}),M.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:M.function_response.name}),o.jsx("pre",{children:JSON.stringify(M.function_response.response,null,2)})]})]},B))})]},W)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("result"),children:[t.has("result")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((f=(p=(d=(u=e.data)==null?void 0:u.result)==null?void 0:d.content)==null?void 0:p[0])==null?void 0:f.text)||(typeof((h=e.data)==null?void 0:h.result)=="string"?e.data.result:JSON.stringify((x=e.data)==null?void 0:x.result,null,2))})})]}),e.event_type==="model_response"&&((w=e.data)==null?void 0:w.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("response"),children:[t.has("response")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((L,W)=>o.jsxs("div",{className:"response-part",children:[L.type==="text"&&L.text&&o.jsx("pre",{className:"response-text",children:L.text}),L.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",L.name,"()"]}),L.args&&Object.keys(L.args).length>0&&o.jsx("pre",{children:JSON.stringify(L.args,null,2)})]}),L.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},W))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("callback_info"),children:[t.has("callback_info")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((j=e.data)==null?void 0:j.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((g=e.data)==null?void 0:g.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((m=e.data)==null?void 0:m.module_path)||"unknown"]}),((y=e.data)==null?void 0:y.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((k=e.data)==null?void 0:k.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((z=e.data)==null?void 0:z.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",onClick:()=>s("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Source:"})," ",((C=e.data)==null?void 0:C.source)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error Type:"})," ",((A=e.data)==null?void 0:A.error_type)||"unknown"]}),o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",((S=e.data)==null?void 0:S.error)||"No error message"]}),(($=e.data)==null?void 0:$.context)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Context:"})," ",e.data.context]}),((N=e.data)==null?void 0:N.traceback)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&((R=e.data)==null?void 0:R.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("state_delta"),children:[t.has("state_delta")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([L,W])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:L}),o.jsx("pre",{className:"state-delta-value",children:typeof W=="string"?W:JSON.stringify(W,null,2)})]},L))})]}),r&&o.jsx(y5,{content:r,onClose:()=>i(null)})]})}function y5({content:e,onClose:t}){return o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:o.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(ki,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"String Content"}),o.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:o.jsx(es,{size:18})})]}),o.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:o.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:o.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(Xo,{size:12}),"Copy"]})})]})})}function v5({content:e,title:t,onClose:n}){return o.jsxs("div",{className:"modal-overlay",onClick:n,children:[o.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:t}),o.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(Hv,{children:e})})]}),o.jsx("style",{children:`
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
      `})]})}function b5({events:e,selectedEventIndex:t,project:n}){const[r,i]=_.useState(null),s=_.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,h])=>{var x;l[f]={...l[f],value:h,timestamp:d.timestamp,defined:((x=l[f])==null?void 0:x.defined)??!1}})}),l},[e,t,n]),a=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(v5,{content:r.content,title:r.title,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>o.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[l,f&&o.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),o.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const h=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:h,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&o.jsx("div",{className:"state-desc",children:p}),u&&o.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function hc(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function qm(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(s){return`[JS error: ${s}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(s=s[l[1]]),s=s[parseInt(l[2])]):s=s[a]}return s==null?"[No match]":typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function w5({project:e,selectedEventIndex:t,sandboxMode:n}){var ue,pe;const{watches:r,updateWatch:i,addWatch:s,removeWatch:a,runEvents:l}=ut(),[c,u]=_.useState(!1),[d,p]=_.useState(null),[f,h]=_.useState({}),[x,w]=_.useState(new Set),[j,g]=_.useState(""),[m,y]=_.useState(""),[k,z]=_.useState({}),[C,A]=_.useState(""),[S,$]=_.useState([]),[N,R]=_.useState(null),[L,W]=_.useState(null),[T,M]=_.useState(!1);_.useEffect(()=>{Rd().then($).catch(console.error)},[]);const B=_.useMemo(()=>{const J=e.mcp_servers||[],F=new Set(J.map(ee=>ee.name)),K=S.filter(ee=>!F.has(ee.name));return[...J,...K]},[e.mcp_servers,S]),E=_.useCallback(async J=>{if(!(f[J]||x.has(J))){w(F=>new Set([...F,J]));try{const F=await Se(`/projects/${e.id}/mcp-servers/${encodeURIComponent(J)}/test-connection`,{method:"POST"});F.success&&h(K=>({...K,[J]:F.tools}))}catch(F){console.error("Failed to load tools:",F)}finally{w(F=>{const K=new Set(F);return K.delete(J),K})}}},[e.id,f,x]);_.useEffect(()=>{var ee;if(d)return;if(!j||!m){z({});return}const F=(f[j]||[]).find(X=>X.name===m);if(!((ee=F==null?void 0:F.parameters)!=null&&ee.properties)){z({});return}const K={};Object.entries(F.parameters.properties).forEach(([X,se])=>{se.type==="string"?K[X]=se.default||"":se.type==="number"||se.type==="integer"?K[X]=se.default||0:se.type==="boolean"?K[X]=se.default||!1:K[X]=se.default||null}),z(K)},[j,m,f,d]);const O=()=>{p(null),g(""),y(""),z({}),A(""),R(null),W(null),u(!0)},I=J=>{if(p(J.id),g(J.serverName),y(J.toolName),z({...J.args}),A(J.transform||""),J.result){const{text:F}=hc(J.result);R(F),W(null)}else R(null),W(null);f[J.serverName]||E(J.serverName),u(!0)},v=async()=>{var F;if(!j||!m)return;M(!0),W(null);const J=((F=e.app)==null?void 0:F.id)||`app_${e.id}`;try{const K=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:j,tool_name:m,arguments:k,sandbox_mode:n,app_id:n?J:void 0})}),{text:ee,isError:X}=hc(K);X?(W(ee),R(null)):(R(ee),W(null))}catch(K){W(String(K)),R(null)}finally{M(!1)}},D=_.useMemo(()=>N?!C||!C.trim()?N:qm(N,C):null,[N,C]),q=()=>{if(!(!j||!m)){if(d){i(d,{serverName:j,toolName:m,args:{...k},transform:C||void 0});const J=r.find(F=>F.id===d);J&&V({...J,serverName:j,toolName:m,args:k,transform:C||void 0,history:J.history||[]})}else{const J={id:`watch-${Date.now()}`,serverName:j,toolName:m,args:{...k},transform:C||void 0,history:[]};s(J),V(J)}u(!1)}},b=J=>{a(J)},V=_.useCallback(async(J,F)=>{var se;i(J.id,{isLoading:!0,error:void 0});const K=F??l.length-1,ee=Date.now(),X=((se=e.app)==null?void 0:se.id)||`app_${e.id}`;try{const Q=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:J.serverName,tool_name:J.toolName,arguments:J.args,sandbox_mode:n,app_id:n?X:void 0})}),Z={eventIndex:K,timestamp:ee,result:Q},re=[...J.history||[],Z];i(J.id,{result:Q,isLoading:!1,lastRun:ee,history:re})}catch(Q){const Z={eventIndex:K,timestamp:ee,error:String(Q)},re=[...J.history||[],Z];i(J.id,{error:String(Q),isLoading:!1,lastRun:ee,history:re})}},[e.id,(ue=e.app)==null?void 0:ue.id,i,l.length,n]),P=()=>{r.forEach(J=>V(J))},Y=_.useMemo(()=>!j||!m?null:(f[j]||[]).find(F=>F.name===m),[j,m,f]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(ki,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:P,title:"Refresh all",children:o.jsx(on,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:O,title:"Add watch",children:o.jsx(Ke,{size:12})})]})]}),r.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(ki,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:O,children:[o.jsx(Ke,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:r.map(J=>{let F=J.result,K=J.error;if(t!==null&&J.history&&J.history.length>0){const Z=J.history.filter(re=>re.eventIndex<=t);if(Z.length>0){const re=Z[Z.length-1];F=re.result,K=re.error}else F=void 0,K=void 0}const{text:ee,isError:X}=F?hc(F):{text:"",isError:!1},se=F?qm(ee,J.transform):"",Q=K||X;return o.jsxs("div",{className:`watch-item ${Q?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:J.serverName}),o.jsx("span",{className:"watch-tool",children:J.toolName}),Object.keys(J.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(J.args).map(([Z,re])=>`${Z}=${JSON.stringify(re)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>I(J),title:"Edit watch",children:o.jsx(ln,{size:10})}),o.jsx("button",{onClick:()=>V(J),title:"Refresh",children:J.isLoading?o.jsx(on,{size:10,className:"spin"}):o.jsx(on,{size:10})}),o.jsx("button",{onClick:()=>b(J.id),title:"Remove",children:o.jsx(Fe,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:J.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):K?o.jsx("span",{className:"error",children:K}):F?o.jsx("pre",{className:X?"error-text":"",children:se}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},J.id)})}),c&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:J=>J.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>u(!1),children:o.jsx(es,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:j,onChange:J=>{g(J.target.value),d||y(""),J.target.value&&E(J.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),B.map(J=>o.jsx("option",{value:J.name,children:J.name},J.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:m,onChange:J=>y(J.target.value),disabled:!j||x.has(j),children:[o.jsx("option",{value:"",children:x.has(j)?"Loading tools...":"Select tool..."}),(f[j]||[]).map(J=>o.jsx("option",{value:J.name,children:J.name},J.name))]})]}),(Y==null?void 0:Y.description)&&o.jsx("div",{className:"tool-desc",children:Y.description}),((pe=Y==null?void 0:Y.parameters)==null?void 0:pe.properties)&&Object.keys(Y.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(Y.parameters.properties).map(([J,F])=>{var K,ee;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[J,((K=Y.parameters.required)==null?void 0:K.includes(J))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:F.type==="number"||F.type==="integer"?"number":"text",value:typeof k[J]=="object"?JSON.stringify(k[J]):k[J]??"",onChange:X=>z(se=>({...se,[J]:X.target.value})),placeholder:((ee=F.description)==null?void 0:ee.slice(0,40))||J})]},J)})]}),j&&m&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:v,disabled:T,children:[T?o.jsx(on,{size:12,className:"spin"}):o.jsx(pr,{size:12}),T?"Running...":"Test Run"]})]}),L&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:L})]}),N&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:N})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:C,onChange:J=>A(J.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"Path:"}),o.jsx("code",{onClick:()=>A(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>A(".content[0].text"),children:".content[0].text"}),o.jsx("code",{onClick:()=>A(".result.data"),children:".result.data"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>A("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>A("js:data.items?.length"),children:"js:data.items?.length"})]})]}),N&&C&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:D!=null&&D.startsWith("[Transform error")?"error":"",children:D})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:q,disabled:!j||!m,children:d?"Save Changes":"Add Watch"})]})]})})]})}function k5(){var jp,_p;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:s,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:h}=ut(),[x,w]=_.useState(""),[j,g]=_.useState(null),[m,y]=_.useState(null),[k,z]=_.useState(null),[C,A]=_.useState(""),[S,$]=_.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[N,R]=_.useState(()=>{const U=localStorage.getItem("sandboxMode");return U!==null?U==="true":!0});_.useEffect(()=>{localStorage.setItem("sandboxMode",String(N))},[N]);const[L,W]=_.useState(null),[T,M]=_.useState(!1),[B,E]=_.useState({}),[O,I]=_.useState(!1),[v,D]=_.useState("agent"),q=_.useRef(null),[b,V]=_.useState(!0),[P,Y]=_.useState(!0),[ue,pe]=_.useState(!1),[J,F]=_.useState(360),[K,ee]=_.useState(!1),[X,se]=_.useState(!1),[Q,Z]=_.useState([]),re=_.useRef(null);_.useEffect(()=>{const U=localStorage.getItem("promptHistory");if(U)try{const oe=JSON.parse(U),fe=Object.entries(oe).map(([ge,ce])=>({prompt:ge,count:ce})).sort((ge,ce)=>ce.count-ge.count);Z(fe)}catch(oe){console.error("Failed to parse prompt history:",oe)}},[]);const ve=_.useCallback(U=>{const oe=U.trim();if(!oe)return;const fe=localStorage.getItem("promptHistory"),ge=fe?JSON.parse(fe):{};ge[oe]=(ge[oe]||0)+1,localStorage.setItem("promptHistory",JSON.stringify(ge));const ce=Object.entries(ge).map(([Te,Pe])=>({prompt:Te,count:Pe})).sort((Te,Pe)=>Pe.count-Te.count);Z(ce)},[]),je=_.useMemo(()=>{const U=x.toLowerCase().trim();return Q.filter(oe=>!U||oe.prompt.toLowerCase().includes(U)).slice(0,10)},[Q,x]),[ze,ke]=_.useState([60,80,100,80,1]),[H,ae]=_.useState(null),me=_.useRef(0),ye=_.useRef(0),[G,te]=_.useState([]),[xe,le]=_.useState(null),[_e,Ze]=_.useState(!1),dn=_.useRef(0),Ut=_.useCallback(async(U,oe)=>{var Te;if(!e)return;p(U.id,{isLoading:!0,error:void 0});const fe=oe??i.length-1,ge=Date.now(),ce=((Te=e.app)==null?void 0:Te.id)||`app_${e.id}`;try{const Pe=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:U.serverName,tool_name:U.toolName,arguments:U.args,sandbox_mode:N,app_id:N?ce:void 0})}),Cn={eventIndex:fe,timestamp:ge,result:Pe},fn=[...U.history||[],Cn];p(U.id,{result:Pe,isLoading:!1,lastRun:ge,history:fn})}catch(Pe){const Cn={eventIndex:fe,timestamp:ge,error:String(Pe)},fn=[...U.history||[],Cn];p(U.id,{error:String(Pe),isLoading:!1,lastRun:ge,history:fn})}},[e==null?void 0:e.id,(jp=e==null?void 0:e.app)==null?void 0:jp.id,p,i.length,N]);_.useEffect(()=>{if(i.length>dn.current&&d.length>0){const U=i.length-1;d.forEach(oe=>{oe.isLoading||Ut(oe,U)})}dn.current=i.length},[i.length,d,Ut]),_.useEffect(()=>{c!==null&&(Un(c),u(null))},[c,u]);const[Xt,Un]=_.useState(null),et=_.useRef(null),pn=_.useRef(null);_.useEffect(()=>{if(!K)return;const U=fe=>{if(!pn.current)return;const ce=pn.current.getBoundingClientRect().right-fe.clientX;F(Math.min(600,Math.max(200,ce)))},oe=()=>{ee(!1)};return document.addEventListener("mousemove",U),document.addEventListener("mouseup",oe),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",oe)}},[K]),_.useEffect(()=>{if(H===null)return;const U=fe=>{const ge=fe.clientX-me.current,ce=Math.max(40,ye.current+ge);ke(Te=>{const Pe=[...Te];return Pe[H]=ce,Pe})},oe=()=>{ae(null)};return document.addEventListener("mousemove",U),document.addEventListener("mouseup",oe),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",oe),document.body.style.cursor="",document.body.style.userSelect=""}},[H]);const yt=(U,oe)=>{oe.preventDefault(),me.current=oe.clientX,ye.current=ze[U],ae(U)},yp=ze.map((U,oe)=>oe===ze.length-1?`minmax(${U}px, 1fr)`:`${U}px`).join(" "),C1=_.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),zt=_.useMemo(()=>i.filter((U,oe)=>{var fe,ge,ce;if(k&&(U.timestamp<k[0]||U.timestamp>k[1])||S.size>0&&!S.has(U.event_type))return!1;if(b&&U.event_type==="model_response"){const Te=((ge=(fe=U.data)==null?void 0:fe.response_content)==null?void 0:ge.parts)||((ce=U.data)==null?void 0:ce.parts)||[],Pe=Te.some(fn=>fn.type==="function_call"),Cn=Te.some(fn=>fn.type==="text");if(!Pe&&!Cn)return!1}return!(C&&!JSON.stringify(U).toLowerCase().includes(C.toLowerCase()))}),[i,k,S,C,b]),as=_.useMemo(()=>{var ge;let U=0,oe=0;const fe=m!==null?m+1:i.length;for(let ce=0;ce<fe;ce++){const Te=i[ce];Te.event_type==="model_response"&&((ge=Te.data)!=null&&ge.token_counts)&&(U+=Te.data.token_counts.input||0,oe+=Te.data.token_counts.output||0)}return{input:U,output:oe,total:U+oe}},[i,m]),vp=m!==null?i[m]:null;_.useEffect(()=>{if(!e){te([]);return}(async()=>{Ze(!0);try{const oe=await pu(e.id);te(oe)}catch(oe){console.error("Failed to load sessions:",oe),te([])}finally{Ze(!1)}})()},[e]);const ml=_.useCallback(async U=>{if(!e){le(null);return}if(!U){a(),l(),h(null),le(null),y(null),z(null);return}try{const oe=await zy(e.id,U);a(),l(),h(oe.id),le(U),y(null),z(null);for(const fe of oe.events)s(fe)}catch(oe){alert(`Failed to load session: ${oe.message||"Unknown error"}`)}},[e,a,l,h,s]);_.useEffect(()=>{if(!e||G.length===0||_e)return;const oe=new URLSearchParams(window.location.search).get("session");if(oe)if(G.some(ge=>ge.id===oe)){ml(oe);const ge=window.location.pathname;window.history.replaceState({},"",ge)}else console.warn(`Session ${oe} not found in available sessions`)},[e,G,_e,ml]),_.useEffect(()=>{n&&et.current&&(et.current.scrollTop=et.current.scrollHeight)},[i.length,n]);const Pi=_.useCallback(U=>{const oe=U??x;if(!e||!oe.trim()||n)return;ve(oe),se(!1),w(oe),j&&(j.close(),g(null)),f||(a(),l(),le(null)),r(!0),y(null),z(null);const fe=Ly(e.id);g(fe),fe.onopen=()=>{fe.send(JSON.stringify({message:oe,agent_id:Xt||void 0,session_id:f||void 0,sandbox_mode:N}))},fe.onmessage=ge=>{var Te;const ce=JSON.parse(ge.data);if(ce.event_type==="agent_start"&&((Te=ce.data)!=null&&Te.session_id)){const Pe=ce.data.session_id;ce.data.session_reused,h(Pe),Pe&&G.some(Cn=>Cn.id===Pe)&&le(Pe)}else if(ce.type==="session_started")h(ce.session_id),ce.session_id&&G.some(Pe=>Pe.id===ce.session_id)&&le(ce.session_id);else if(ce.type==="sandbox_starting")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(ce.type==="sandbox_started")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${ce.sandbox_id})`}});else if(ce.type==="sandbox_response")s({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:ce.data});else if(ce.event_type==="approval_required"||ce.type==="network_request"&&ce.event_type==="approval_required"){const Pe={id:ce.id,method:ce.method||"GET",url:ce.url,host:ce.host,source:ce.source||"agent",headers:ce.headers||{},timeout:ce.timeout||30};W(Pe),s({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${ce.host} requires approval`,host:ce.host,url:ce.url}})}else ce.type==="completed"?(r(!1),fe.close()):ce.type==="error"?(r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:ce.error}})):s(ce)},fe.onerror=()=>{r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},fe.onclose=()=>{r(!1)}},[e,x,n,j,a,r,s,Xt,f,N,ve]),N1=_.useCallback(()=>{j==null||j.close(),r(!1)},[j,r]),E1=_.useCallback(async(U,oe,fe)=>{var fn,Sp,Cp,Np,Ep,zp,Tp,Ap,Pp,Lp,Mp,Rp,Ip,Op,$p,Dp,Fp,Bp,Up,Vp,Wp,Hp,qp,Jp;if(!L||!e)return;const ge=((fn=e.app)==null?void 0:fn.id)||e.id,ce=U?"allow_pattern":"allow_once",Te=U||L.host,Pe=oe||"exact",Cn=fe?`/sandbox/${ge}/approval?project_id=${e.id}`:`/sandbox/${ge}/approval`;try{if(await Se(Cn,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:L.id,action:ce,pattern:Te,pattern_type:Pe,persist:fe||!1})}),fe&&ce==="allow_pattern"){const xl=((Np=(Cp=(Sp=e.app)==null?void 0:Sp.sandbox)==null?void 0:Cp.allowlist)==null?void 0:Np.user)||[],F1={id:`pattern_${Date.now().toString(36)}`,pattern:Te,pattern_type:Pe,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(Ep=e.app)==null?void 0:Ep.sandbox,enabled:((Tp=(zp=e.app)==null?void 0:zp.sandbox)==null?void 0:Tp.enabled)??!1,allowlist:{auto:((Lp=(Pp=(Ap=e.app)==null?void 0:Ap.sandbox)==null?void 0:Pp.allowlist)==null?void 0:Lp.auto)||[],user:[...xl,F1]},unknown_action:((Rp=(Mp=e.app)==null?void 0:Mp.sandbox)==null?void 0:Rp.unknown_action)??"ask",approval_timeout:((Op=(Ip=e.app)==null?void 0:Ip.sandbox)==null?void 0:Op.approval_timeout)??30,agent_memory_limit_mb:((Dp=($p=e.app)==null?void 0:$p.sandbox)==null?void 0:Dp.agent_memory_limit_mb)??512,agent_cpu_limit:((Bp=(Fp=e.app)==null?void 0:Fp.sandbox)==null?void 0:Bp.agent_cpu_limit)??1,mcp_memory_limit_mb:((Vp=(Up=e.app)==null?void 0:Up.sandbox)==null?void 0:Vp.mcp_memory_limit_mb)??256,mcp_cpu_limit:((Hp=(Wp=e.app)==null?void 0:Wp.sandbox)==null?void 0:Hp.mcp_cpu_limit)??.5,run_timeout:((Jp=(qp=e.app)==null?void 0:qp.sandbox)==null?void 0:Jp.run_timeout)??300}}})}s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${Te}`,pattern:Te,action:ce}})}catch(xl){console.error("Failed to approve:",xl)}W(null)},[L,e,s,t]),z1=_.useCallback(async()=>{var oe;if(!L||!e)return;const U=((oe=e.app)==null?void 0:oe.id)||e.id;try{await Se(`/sandbox/${U}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:L.id,action:"deny"})}),s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${L.host}`,host:L.host,action:"deny"}})}catch(fe){console.error("Failed to deny:",fe)}W(null)},[L,e,s]),Li=_.useCallback(async(U=!0)=>{var fe;if(!e)return;const oe=((fe=e.app)==null?void 0:fe.id)||`app_${e.id}`;U&&I(!0);try{const[ge,ce]=await Promise.all([Se(`/sandbox/${oe}/logs?container=agent&tail=500`).catch(()=>null),Se(`/sandbox/${oe}/logs?container=gateway&tail=500`).catch(()=>null)]);E({agent:(ge==null?void 0:ge.logs)||(ge==null?void 0:ge.error)||"No logs available",gateway:(ce==null?void 0:ce.logs)||(ce==null?void 0:ce.error)||"No logs available"})}catch(ge){console.error("Failed to fetch logs:",ge),E({agent:`Error fetching logs: ${ge}`,gateway:`Error fetching logs: ${ge}`})}finally{U&&I(!1)}},[e]),T1=_.useCallback(()=>{M(!0),Li()},[Li]);_.useEffect(()=>{T&&q.current&&!O&&setTimeout(()=>{q.current&&(q.current.scrollTop=q.current.scrollHeight)},50)},[T,v,B,O]),_.useEffect(()=>{if(!T)return;const U=setInterval(()=>{Li(!1)},3e3);return()=>clearInterval(U)},[T,Li]),_.useEffect(()=>{const U=oe=>{if((oe.metaKey||oe.ctrlKey)&&oe.key==="Enter"){oe.preventDefault(),Pi();return}if(oe.key==="ArrowDown"||oe.key==="ArrowUp"){if(oe.target instanceof HTMLInputElement||oe.target instanceof HTMLTextAreaElement||(oe.preventDefault(),zt.length===0))return;if(oe.key==="ArrowDown")if(m===null){const fe=i.indexOf(zt[0]);y(fe)}else{const fe=zt.findIndex(ge=>i.indexOf(ge)===m);if(fe<zt.length-1){const ge=i.indexOf(zt[fe+1]);y(ge)}}else if(oe.key==="ArrowUp")if(m===null){const fe=i.indexOf(zt[zt.length-1]);y(fe)}else{const fe=zt.findIndex(ge=>i.indexOf(ge)===m);if(fe>0){const ge=i.indexOf(zt[fe-1]);y(ge)}}}};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[Pi,zt,m,i]);const A1=_.useCallback(()=>{var ce;if(i.length===0)return;const U={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:Xt||((ce=e==null?void 0:e.app)==null?void 0:ce.root_agent_id),events:i},oe=new Blob([JSON.stringify(U,null,2)],{type:"application/json"}),fe=URL.createObjectURL(oe),ge=document.createElement("a");ge.href=fe,ge.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ge),ge.click(),document.body.removeChild(ge),URL.revokeObjectURL(fe)},[i,e,Xt]),P1=_.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const U=await Ey(f);if(U.success){alert(U.message||"Session saved to memory successfully");try{const oe=await pu(e.id);te(oe)}catch{}}else alert(`Failed to save to memory: ${U.error||"Unknown error"}`)}catch(U){alert(`Error saving to memory: ${U.message||"Unknown error"}`)}},[f,e]),[L1,ls]=_.useState(!1),[M1,R1]=_.useState([]),[Mi,bp]=_.useState(""),[gl,I1]=_.useState("Test Case from Session"),[wp,kp]=_.useState(!1),O1=_.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const U=await Se(`/projects/${e.id}/eval-sets`);if(R1(U.eval_sets||[]),!U.eval_sets||U.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}bp(U.eval_sets[0].id),ls(!0)}catch(U){alert(`Error loading eval sets: ${U.message||"Unknown error"}`)}},[f,e]),$1=_.useCallback(async()=>{if(!f||!e||!Mi){alert("Please select an evaluation set");return}kp(!0);try{const U=await Se(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:Mi,case_name:gl})});ls(!1),alert(`Test case "${U.eval_case.name}" created successfully!

Token count: ${U.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(U){alert(`Error creating test case: ${U.message||"Unknown error"}`)}finally{kp(!1)}},[f,e,Mi,gl]),D1=_.useCallback(()=>{const U=document.createElement("input");U.type="file",U.accept=".json",U.onchange=async oe=>{var ge;const fe=(ge=oe.target.files)==null?void 0:ge[0];if(fe)try{const ce=await fe.text(),Te=JSON.parse(ce);if(!Te.events||!Array.isArray(Te.events)){alert("Invalid run file: missing events array");return}a(),l(),y(null),z(null),Te.events.forEach(Pe=>{s(Pe)})}catch(ce){alert(`Failed to load run file: ${ce}`)}},U.click()},[a,l,s]);return _.useEffect(()=>{if(m!==null){const U=document.querySelector(".event-row.selected");U==null||U.scrollIntoView({behavior:"smooth",block:"nearest"})}},[m]),e?o.jsxs("div",{className:`run-panel ${K?"resizing":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsx(d5,{agents:e.agents,events:i,selectedEventIndex:m}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:Xt||"",onChange:U=>Un(U.target.value||null),disabled:n,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((_p=e.agents.find(U=>U.id===e.app.root_agent_id))==null?void 0:_p.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(U=>U.id!==e.app.root_agent_id).map(U=>o.jsxs("option",{value:U.id,children:[U.name," (",U.type.replace("Agent",""),")"]},U.id))]}),o.jsxs("select",{className:"agent-selector",value:xe||"",onChange:U=>ml(U.target.value||null),disabled:n||_e,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:_e?"Loading...":"Load Session..."}),G.map(U=>{const oe=new Date(U.started_at*1e3),fe=U.duration?`${U.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:U.id,children:[oe.toLocaleString()," (",U.event_count," events, ",fe,")"]},U.id)})]}),o.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[o.jsx("input",{ref:re,type:"text",placeholder:"Enter your query...",value:x,onChange:U=>w(U.target.value),onFocus:()=>se(!0),onBlur:()=>setTimeout(()=>se(!1),150),onKeyDown:U=>{U.key==="Enter"&&!U.shiftKey?Pi():U.key==="Escape"&&se(!1)},disabled:n,style:{flex:1}}),X&&je.length>0&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:je.map((U,oe)=>o.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:oe<je.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:fe=>{fe.preventDefault(),Pi(U.prompt)},onMouseEnter:fe=>{fe.currentTarget.style.background="#27272a"},onMouseLeave:fe=>{fe.currentTarget.style.background="transparent"},children:[o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:U.prompt}),o.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",U.count]})]},oe))})]}),n?o.jsxs("button",{className:"stop",onClick:N1,children:[o.jsx(tj,{size:14}),"Stop"]}):o.jsxs("button",{onClick:Pi,disabled:!x.trim(),children:[o.jsx(pr,{size:14}),"Run"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:N?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[o.jsx("input",{type:"checkbox",checked:N,onChange:U=>R(U.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),N&&o.jsx("button",{onClick:T1,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(Ky,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:C,onChange:U=>A(U.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(U=>o.jsx("button",{className:`filter-chip ${S.has(U)?"active":""}`,onClick:()=>{const oe=new Set(S);oe.has(U)?oe.delete(U):oe.add(U),$(oe)},children:U.replace("_"," ")},U)),o.jsx("button",{className:`filter-chip ${S.has("callback_start")&&S.has("callback_end")?"active":""}`,onClick:()=>{const U=new Set(S);U.has("callback_start")&&U.has("callback_end")?(U.delete("callback_start"),U.delete("callback_end")):(U.add("callback_start"),U.add("callback_end")),$(U)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${b?"active":""}`,onClick:()=>V(!b),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${P?"active":""}`,onClick:()=>Y(!P),children:[o.jsx(Rn,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${ue?"active":""}`,onClick:()=>pe(!ue),children:[o.jsx(ql,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[zt.length," / ",i.length," events"]}),k&&o.jsx("button",{className:"toolbar-btn",onClick:()=>z(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:pn,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:yp},children:[o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"#"}),o.jsx("div",{className:`column-resize-handle ${H===0?"active":""}`,onMouseDown:U=>yt(0,U)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Time"}),o.jsx("div",{className:`column-resize-handle ${H===1?"active":""}`,onMouseDown:U=>yt(1,U)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Agent"}),o.jsx("div",{className:`column-resize-handle ${H===2?"active":""}`,onMouseDown:U=>yt(2,U)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Type"}),o.jsx("div",{className:`column-resize-handle ${H===3?"active":""}`,onMouseDown:U=>yt(3,U)})]}),o.jsx("div",{className:"header-cell",children:o.jsx("span",{children:"Info"})})]}),o.jsx("div",{className:"event-list",ref:et,children:zt.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Jy,{size:24}),o.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):zt.map((U,oe)=>{const fe=i.indexOf(U),ge=Vm[U.event_type]||Vm.error,ce=p5[U.event_type]||Na;return o.jsxs("div",{className:`event-row ${m===fe?"selected":""}`,style:{background:ge.bg,gridTemplateColumns:yp},onClick:()=>y(fe),onDoubleClick:()=>{Y(!1),pe(!1)},children:[o.jsx("div",{className:"index",children:fe}),o.jsx("div",{className:"time",style:{color:ge.fg},children:h5(U.timestamp,C1.min)}),o.jsx("div",{className:"agent",children:o.jsx("span",{className:"agent-badge",style:{backgroundColor:Da(U.agent_name).bg,color:Da(U.agent_name).fg},children:U.agent_name})}),o.jsxs("div",{className:"type",style:{color:ge.fg},children:[o.jsx(ce,{size:10}),U.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:f5(U)})]},fe)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:J},children:[o.jsx("div",{className:`resize-handle ${K?"active":""}`,onMouseDown:()=>ee(!0)}),o.jsxs("div",{className:"side-panel",style:{width:J-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!P&&!ue?"active":""}`,onClick:()=>{Y(!1),pe(!1)},children:[o.jsx(ki,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${P?"active":""}`,onClick:()=>{Y(!0),pe(!1)},children:[o.jsx(Rn,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${ue?"active":""}`,onClick:()=>{pe(!0),Y(!1)},children:[o.jsx(ql,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:ue?o.jsx(w5,{project:e,selectedEventIndex:m,sandboxMode:N}):P?o.jsx(b5,{events:i,selectedEventIndex:m,project:e}):vp?o.jsx(x5,{event:vp}):o.jsxs("div",{className:"empty-state",children:[o.jsx(ki,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:i.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(U=>U.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(U=>U.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:i.filter(U=>U.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:i.filter(U=>U.event_type==="state_change").length})]}),i.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),as.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[as.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[as.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:as.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:D1,title:"Load a saved run",children:[o.jsx(ol,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:A1,disabled:i.length===0,title:"Save current run to file",children:[o.jsx(Zo,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:P1,disabled:!f||i.length===0,title:"Save current session to memory",children:[o.jsx(Rn,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:O1,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(gu,{size:12}),"Create Test Case"]})]}),L1&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>ls(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:U=>U.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(gu,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:gl,onChange:U=>I1(U.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:Mi,onChange:U=>bp(U.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:M1.map(U=>o.jsx("option",{value:U.id,children:U.name},U.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>ls(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:$1,disabled:wp||!Mi,children:wp?"Creating...":"Create Test Case"})]})]})}),L&&o.jsx(tE,{request:L,timeout:L.timeout||30,onApprove:E1,onDeny:z1,onClose:()=>W(null)}),T&&o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>M(!1),children:o.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:U=>U.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(ql,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs("button",{onClick:Li,disabled:O,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:O?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(on,{size:12,className:O?"animate-spin":""}),"Refresh"]}),o.jsx("button",{onClick:()=>M(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:o.jsx(es,{size:16})})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsx("button",{onClick:()=>D("agent"),style:{padding:"8px 16px",background:v==="agent"?"#18181b":"transparent",border:"none",borderBottom:v==="agent"?"2px solid #22d3ee":"2px solid transparent",color:v==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),o.jsx("button",{onClick:()=>D("gateway"),style:{padding:"8px 16px",background:v==="gateway"?"#18181b":"transparent",border:"none",borderBottom:v==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:v==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),o.jsx("div",{ref:q,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:O?o.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):B[v]?o.jsx(g5,{content:B[v]}):o.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const j5=()=>Math.random().toString(36).substring(2,10),_5=()=>({id:j5(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function S5(){const{project:e,setProject:t}=ut(),[n,r]=_.useState(null),[i,s]=_.useState(null),[a,l]=_.useState(""),[c,u]=_.useState([]),[d,p]=_.useState(!1),[f,h]=_.useState(!1),[x,w]=_.useState(""),[j,g]=_.useState(!1),[m,y]=_.useState(null),[k,z]=_.useState(null),C=_.useRef(null),A=(e==null?void 0:e.skillsets)||[],S=A.find(I=>I.id===n);_.useEffect(()=>{Uy().then(I=>z(I.available)).catch(()=>z(!1))},[]),_.useEffect(()=>{A.length>0&&!n&&r(A[0].id)},[A,n]),_.useEffect(()=>{!e||!n||$()},[e==null?void 0:e.id,n]);const $=_.useCallback(async()=>{if(!(!e||!n))try{const I=await Oy(e.id,n);s(I),R(n,{entry_count:I.entry_count})}catch(I){console.error("Failed to load stats:",I)}},[e==null?void 0:e.id,n]),N=I=>{e&&t({...e,...I})},R=(I,v)=>{e&&t({...e,skillsets:e.skillsets.map(D=>D.id===I?{...D,...v}:D)})},L=()=>{if(!e)return;const I=_5();N({skillsets:[...A,I]}),r(I.id)},W=I=>{e&&confirm("Delete this SkillSet and all its data?")&&(N({skillsets:A.filter(v=>v.id!==I)}),n===I&&r(A.length>1?A[0].id:null),s(null),u([]))},T=async()=>{if(!(!e||!n||!a.trim())){p(!0),y(null);try{const I=await Fy(e.id,n,a.trim(),10,0);u(I.results)}catch(I){y("Search failed"),console.error(I)}finally{p(!1)}}},M=async()=>{if(!(!e||!n||!x.trim())){g(!0),y(null);try{const I=await $y(e.id,n,x.trim());w(""),await $(),alert(`Added ${I.chunks_added} chunks from ${I.source_name}`)}catch(I){y(I.message||"Failed to fetch URL")}finally{g(!1)}}},B=async I=>{var D;const v=(D=I.target.files)==null?void 0:D[0];if(!(!v||!e||!n)){y(null);try{const q=await Dy(e.id,n,v);await $(),alert(`Added ${q.chunks_added} chunks from ${q.source_name}`)}catch(q){y(q.message||"Upload failed")}C.current&&(C.current.value="")}},E=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await By(e.id,n),await $(),u([])}catch{y("Clear failed")}},O=I=>{const v=Math.round(I*100),D=160,q=70,b=20+(1-I)*15,V=.15+I*.25;return`linear-gradient(90deg, hsla(${D}, ${q}%, ${b}%, ${V}) 0%, transparent ${v}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:L,title:"Add SkillSet",children:o.jsx(Ke,{size:16})})]}),A.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(Rn,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:L,children:[o.jsx(Ke,{size:14})," Create SkillSet"]})]}):A.map(I=>o.jsxs("div",{className:`skillset-item ${n===I.id?"selected":""}`,onClick:()=>r(I.id),children:[o.jsx(Rn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:I.name}),o.jsxs("div",{className:"skillset-item-count",children:[I.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:v=>{v.stopPropagation(),W(I.id)},children:o.jsx(Fe,{size:14})})]},I.id))]}),S?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:S.name,onChange:I=>R(S.id,{name:I.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:S.description,onChange:I=>R(S.id,{description:I.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:S.embedding_model||"text-embedding-004",onChange:I=>R(S.id,{embedding_model:I.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),k===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:$,title:"Refresh",children:o.jsx(on,{size:16})})]}),m&&o.jsxs("div",{className:"error-banner",children:[m,o.jsx("button",{onClick:()=>y(null),children:o.jsx(es,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:a,onChange:I=>l(I.target.value),onKeyDown:I=>I.key==="Enter"&&T(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:T,disabled:d||!a.trim(),children:[o.jsx(Ky,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(I=>o.jsxs("div",{className:"search-result",style:{background:O(I.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(I.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:I.text}),o.jsx("div",{className:"search-result-source",children:I.source_name})]},I.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>h(!f),children:[f?o.jsx(Pt,{size:16}):o.jsx(bt,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),f&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx($d,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:x,onChange:I=>w(I.target.value),onKeyDown:I=>I.key==="Enter"&&M(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:M,disabled:j||!x.trim(),children:[o.jsx(Kk,{size:14}),j?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(Hk,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:C,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:B}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var I;return(I=C.current)==null?void 0:I.click()},children:[o.jsx(ol,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:E,children:[o.jsx(Fe,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):A.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Rn,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const vn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Wo=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=vn[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const s=n??3.5;return{value:t.toFixed(1),comparison:`${s.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const s=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(s*100)}% min`}}},C5={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function S1(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function N5(){const{project:e}=ut(),[t,n]=_.useState([]),[r,i]=_.useState(null),[s,a]=_.useState(null),[l,c]=_.useState(new Set),[u,d]=_.useState(new Map),[p,f]=_.useState(new Map),[h,x]=_.useState(new Set),[w,j]=_.useState(!1),[g,m]=_.useState(null),[y,k]=_.useState([]),[z,C]=_.useState(null),A=async()=>{if(e)try{const F=await qe.get(`/projects/${e.id}/eval-history`);k(F.runs||[])}catch(F){console.warn("Failed to load eval history:",F)}},S=async(F,K=!0)=>{if(e)try{const X=(await qe.get(`/projects/${e.id}/eval-history/${F}`)).run;if(C(X),X!=null&&X.case_results){const se=new Map;for(const Q of X.case_results)se.set(Q.eval_case_id,Q);d(se)}if((X==null?void 0:X.eval_set_id)==="batch")c(new Set(t.map(se=>se.id))),i(null);else if(X!=null&&X.eval_set_id){const se=new Map;se.set(X.eval_set_id,X),f(se),i(X.eval_set_id),c(Q=>new Set([...Q,X.eval_set_id]))}a(null),K&&window.history.pushState({run:F},"",`?run=${F}`)}catch(ee){console.warn("Failed to load history run:",ee)}},$=(F,K=!0)=>{i(F),a(null),C(null),K&&F?window.history.pushState({set:F},"",`?set=${F}`):K&&window.history.pushState({},"",window.location.pathname)},N=(F,K,ee=!0)=>{i(F),a(K),C(null),ee&&K?window.history.pushState({set:F,case:K},"",`?set=${F}&case=${K}`):ee&&F&&window.history.pushState({set:F},"",`?set=${F}`)},R=()=>{C(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},L=async F=>{if(e)try{await qe.delete(`/projects/${e.id}/eval-history/${F}`),k(K=>K.filter(ee=>ee.id!==F)),(z==null?void 0:z.id)===F&&C(null)}catch(K){console.warn("Failed to delete history run:",K)}};_.useEffect(()=>{e!=null&&e.id&&(W(),A())},[e==null?void 0:e.id]),_.useEffect(()=>{const F=()=>{x(new Set(t.map(ee=>ee.id)))},K=()=>{x(new Set),A()};return window.addEventListener("eval-tests-started",F),window.addEventListener("eval-tests-completed",K),()=>{window.removeEventListener("eval-tests-started",F),window.removeEventListener("eval-tests-completed",K)}},[t]),_.useEffect(()=>{if(!(e!=null&&e.id)||w)return;const F=()=>{const ee=new URLSearchParams(window.location.search),X=ee.get("set"),se=ee.get("case"),Q=ee.get("run");if(Q){S(Q,!1);return}if(X)i(X),a(se),C(null),c(Z=>new Set([...Z,X]));else{if(!r&&!s&&!z)return;i(null),a(null),C(null)}};F();const K=()=>{F()};return window.addEventListener("popstate",K),()=>window.removeEventListener("popstate",K)},[e==null?void 0:e.id,w,t.length]);const W=async()=>{var F,K;if(e!=null&&e.id){j(!0),m(null);try{const ee=await qe.get(`/projects/${e.id}/eval-sets`);if(n(ee.eval_sets||[]),((F=ee.eval_sets)==null?void 0:F.length)>0){const X=new URLSearchParams(window.location.search),se=X.get("set"),Q=X.get("case"),Z=se||(Q?(K=ee.eval_sets.find(re=>re.eval_cases.some(ve=>ve.id===Q)))==null?void 0:K.id:null)||ee.eval_sets[0].id;c(new Set([Z]))}}catch(ee){m(ee.message||"Failed to load eval sets")}finally{j(!1)}}},T=t.find(F=>F.id===r),M=T==null?void 0:T.eval_cases.find(F=>F.id===s),B=async()=>{if(e!=null&&e.id)try{const F=await qe.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:C5});n(K=>[...K,F.eval_set]),i(F.eval_set.id),c(K=>new Set([...K,F.eval_set.id]))}catch(F){m(F.message||"Failed to create eval set")}},E=async F=>{if(e!=null&&e.id)try{const K=await qe.post(`/projects/${e.id}/eval-sets/${F}/cases`,{name:"New Test Case",description:"",invocations:[{id:S1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(ee=>ee.map(X=>X.id===F?{...X,eval_cases:[...X.eval_cases,K.eval_case]}:X)),i(F),a(K.eval_case.id)}catch(K){m(K.message||"Failed to create eval case")}},O=async(F,K,ee)=>{if(e!=null&&e.id)try{const X=await qe.put(`/projects/${e.id}/eval-sets/${F}/cases/${K}`,ee);n(se=>se.map(Q=>Q.id===F?{...Q,eval_cases:Q.eval_cases.map(Z=>Z.id===K?X.eval_case:Z)}:Q))}catch(X){m(X.message||"Failed to update eval case")}},I=async(F,K)=>{if(e!=null&&e.id)try{await qe.delete(`/projects/${e.id}/eval-sets/${F}/cases/${K}`),n(ee=>ee.map(X=>X.id===F?{...X,eval_cases:X.eval_cases.filter(se=>se.id!==K)}:X)),s===K&&a(null)}catch(ee){m(ee.message||"Failed to delete eval case")}},v=async F=>{if(e!=null&&e.id)try{await qe.delete(`/projects/${e.id}/eval-sets/${F}`),n(K=>K.filter(ee=>ee.id!==F)),r===F&&(i(null),a(null))}catch(K){m(K.message||"Failed to delete eval set")}},D=async F=>{if(e!=null&&e.id)try{const K=await qe.get(`/projects/${e.id}/eval-sets/${F}/export`),ee=new Blob([JSON.stringify(K,null,2)],{type:"application/json"}),X=URL.createObjectURL(ee),se=document.createElement("a");se.href=X;const Q=t.find(Z=>Z.id===F);se.download=`${(Q==null?void 0:Q.name)||"eval-set"}.json`,document.body.appendChild(se),se.click(),document.body.removeChild(se),URL.revokeObjectURL(X)}catch(K){m(K.message||"Failed to export eval set")}},q=async F=>{if(e!=null&&e.id)try{const K=await F.text(),ee=JSON.parse(K),X=await qe.post(`/projects/${e.id}/eval-sets/import`,ee);n(se=>[...se,X.eval_set]),i(X.eval_set.id),c(se=>new Set([...se,X.eval_set.id]))}catch(K){m(K.message||"Failed to import eval set")}},b=_.useRef(null),V=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const F=await Promise.all(t.map(async se=>{try{return await qe.get(`/projects/${e.id}/eval-sets/${se.id}/export`)}catch{return se}})),K=new Blob([JSON.stringify(F,null,2)],{type:"application/json"}),ee=URL.createObjectURL(K),X=document.createElement("a");X.href=ee,X.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(ee)}catch(F){m(F.message||"Failed to export all eval sets")}},P=async(F,K)=>{if(e!=null&&e.id){x(ee=>new Set([...ee,K]));try{const ee=await qe.post(`/projects/${e.id}/eval-sets/${F}/cases/${K}/run`,{});d(X=>new Map(X).set(K,ee.result))}catch(ee){m(ee.message||"Failed to run eval case")}finally{x(ee=>{const X=new Set(ee);return X.delete(K),X})}}},Y=async F=>{if(!(e!=null&&e.id))return;const K=t.find(X=>X.id===F);if(!K)return;const ee=K.eval_cases.map(X=>X.id);x(X=>new Set([...X,F,...ee]));try{const X=await qe.post(`/projects/${e.id}/eval-sets/${F}/run`,{});f(se=>new Map(se).set(F,X.result));for(const se of X.result.case_results)d(Q=>new Map(Q).set(se.eval_case_id,se));try{await qe.post(`/projects/${e.id}/eval-history`,X.result),A()}catch(se){console.warn("Failed to save eval run to history:",se)}}catch(X){m(X.message||"Failed to run eval set")}finally{x(X=>{const se=new Set(X);return se.delete(F),ee.forEach(Q=>se.delete(Q)),se})}},ue=F=>{c(K=>{const ee=new Set(K);return ee.has(F)?ee.delete(F):ee.add(F),ee})},pe=F=>{let K=F.eval_cases.length,ee=0,X=0,se=0;for(const Q of F.eval_cases){const Z=u.get(Q.id);Z?Z.passed?ee++:X++:se++}return{total:K,passed:ee,failed:X,pending:se}},J=F=>F==null?"-":`${Math.round(F*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:b,accept:".json",style:{display:"none"},onChange:F=>{var ee;const K=(ee=F.target.files)==null?void 0:ee[0];K&&(q(K),F.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var F;return(F=b.current)==null?void 0:F.click()},title:"Import eval set from JSON",children:o.jsx(ol,{size:14})}),t.length>0&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:V,title:"Download all eval sets as JSON",children:o.jsx(Zo,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:W,title:"Refresh",children:o.jsx(on,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:B,title:"New eval set",children:[o.jsx(Ke,{size:14}),"Set"]})]})]}),o.jsxs("div",{className:"eval-tree",children:[w&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),g&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:g}),!w&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(Ud,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one to get started."]})]}),t.map(F=>{const K=l.has(F.id),ee=pe(F),X=h.has(F.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===F.id&&!s?"selected":""}`,onClick:()=>$(F.id),children:[o.jsx("button",{className:"expand-btn",onClick:se=>{se.stopPropagation(),ue(F.id)},children:F.eval_cases.length>0?K?o.jsx(Pt,{size:14}):o.jsx(bt,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(qy,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:F.name}),o.jsx("button",{className:"add-case-btn",onClick:se=>{se.stopPropagation(),E(F.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:o.jsx(Ke,{size:12})}),ee.total>0&&o.jsxs("span",{className:"set-stats",children:[ee.passed>0&&o.jsx("span",{className:"stat-passed",children:ee.passed}),ee.failed>0&&o.jsx("span",{className:"stat-failed",children:ee.failed}),ee.pending>0&&o.jsx("span",{className:"stat-pending",children:ee.pending})]}),o.jsx("button",{className:"run-btn",onClick:se=>{se.stopPropagation(),Y(F.id)},title:"Run all tests in this set",disabled:X,children:X?o.jsx(Io,{size:12,className:"spinning"}):o.jsx(pr,{size:12})})]}),K&&o.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:F.eval_cases.map(se=>{var re;const Q=u.get(se.id),Z=h.has(se.id);return o.jsxs("div",{className:`tree-case ${s===se.id?"selected":""}`,onClick:()=>N(F.id,se.id),children:[Z?o.jsx(Io,{size:14,className:"spinning",style:{color:"var(--warning)"}}):Q?Q.passed?o.jsx(Ir,{size:14,style:{color:"var(--success)"}}):o.jsx(ji,{size:14,style:{color:"var(--error)"}}):o.jsx(Ca,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:se.name}),Q&&Q.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:Q.passed?"var(--success)":"var(--error)"},children:J((re=Q.metric_results[0])==null?void 0:re.score)}),o.jsx("button",{className:"run-btn",onClick:ve=>{ve.stopPropagation(),P(F.id,se.id)},disabled:Z,children:o.jsx(pr,{size:12})})]},se.id)})})]},F.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",y.length,")"]})}),o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:y.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...y].sort((F,K)=>(K.started_at||0)-(F.started_at||0)).map(F=>{const K=F.passed_cases===F.total_cases;return o.jsx("div",{className:`history-item ${(z==null?void 0:z.id)===F.id?"selected":""}`,onClick:()=>S(F.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(z==null?void 0:z.id)===F.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[K?o.jsx(Ir,{size:14,style:{color:"var(--success)",flexShrink:0}}):o.jsx(ji,{size:14,style:{color:"var(--error)",flexShrink:0}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:F.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(F.started_at*1e3).toLocaleString()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:K?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[F.passed_cases,"/",F.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:ee=>{ee.stopPropagation(),L(F.id)},title:"Delete run",style:{padding:2},children:o.jsx(Fe,{size:12})})]})]})},F.id)})})]})]}),o.jsx("div",{className:"eval-editor",children:z?o.jsx(z5,{run:z,onClose:R}):M?o.jsx(T5,{evalCase:M,evalSetId:r,projectId:e.id,result:u.get(M.id),isRunning:h.has(M.id),onUpdate:F=>O(r,M.id,F),onDelete:()=>I(r,M.id),onRun:()=>P(r,M.id),onClearResult:()=>d(F=>{const K=new Map(F);return K.delete(M.id),K})}):T?o.jsx(A5,{evalSet:T,projectId:e.id,result:p.get(T.id),isRunning:h.has(T.id),caseResults:u,onUpdate:async F=>{try{const K=await qe.put(`/projects/${e.id}/eval-sets/${T.id}`,F);n(ee=>ee.map(X=>X.id===T.id?K.eval_set:X))}catch(K){m(K.message)}},onDelete:()=>v(T.id),onRun:()=>Y(T.id),onExport:()=>D(T.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Ca,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})})]}):null}function E5({value:e,onChange:t}){var a,l;const{project:n}=ut(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function z5({run:e,onClose:t}){var h;const{project:n}=ut(),[r,i]=_.useState(!0),[s,a]=_.useState(new Set),l=e.case_results||[],c=l.filter(x=>x.passed).length,u=l.filter(x=>!x.passed).length,d=r?l.filter(x=>!x.passed):l,p=x=>{a(w=>{const j=new Set(w);return j.has(x)?j.delete(x):j.add(x),j})},f=x=>{x&&n&&(window.location.href=`/project/${n.id}/run?session=${x}`)};return o.jsxs("div",{className:"test-result-viewer",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"result-header",children:[o.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const x=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(x)}},title:"Copy link to this run",children:o.jsx(Fd,{size:14})})})]}),o.jsxs("div",{className:"result-summary",children:[o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Status"}),o.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Passed"}),o.jsx("span",{className:"value passed",children:c})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Failed"}),o.jsx("span",{className:"value failed",children:u})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Total Cases"}),o.jsx("span",{className:"value",children:l.length})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Duration"}),o.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Tokens"}),o.jsx("span",{className:"value",children:((h=e.total_tokens)==null?void 0:h.toLocaleString())||"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Run Time"}),o.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),o.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[o.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[o.jsx("input",{type:"checkbox",checked:r,onChange:x=>i(x.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),o.jsxs("div",{className:"result-cases",children:[d.map((x,w)=>{var R,L,W,T,M,B;const j=x.case_id||`case-${w}`,g=s.has(j),m=((R=x.metric_results)==null?void 0:R.filter(E=>!E.passed||E.error))||[],y=((L=x.metric_results)==null?void 0:L.filter(E=>E.passed&&!E.error))||[],k=((W=x.rubric_results)==null?void 0:W.filter(E=>!E.passed||E.error))||[],z=((T=x.rubric_results)==null?void 0:T.filter(E=>E.passed&&!E.error))||[],C=g?x.metric_results:m,A=g?x.rubric_results:k,S=g?x.invocation_results:(M=x.invocation_results)==null?void 0:M.filter(E=>{var O;return((O=E.metric_results)==null?void 0:O.some(I=>!I.passed))||E.error}),$=y.length+z.length,N=m.length+k.length;return o.jsxs("div",{className:"result-case",children:[o.jsxs("div",{className:"result-case-header",onClick:()=>p(j),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"result-case-name",children:[o.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:g?"▼":"▶"}),x.passed?o.jsx(Ir,{size:16,style:{color:"var(--success)"}}):o.jsx(ji,{size:16,style:{color:"var(--error)"}}),x.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&o.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:x.eval_set_name}),x.case_name||`Case ${w+1}`,o.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[N>0&&o.jsxs("span",{style:{color:"var(--error)"},children:[N," failed"]}),N>0&&$>0&&" · ",$>0&&o.jsxs("span",{style:{color:"var(--success)"},children:[$," passed"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[x.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:E=>{E.stopPropagation(),f(x.session_id)},title:"View session in Run panel",children:[o.jsx(Wy,{size:12})," View Session"]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:x.duration_ms?`${(x.duration_ms/1e3).toFixed(2)}s`:""})]})]}),o.jsxs("div",{className:"result-case-details",children:[(C==null?void 0:C.length)>0&&o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[C.map((E,O)=>{const I=Wo(E.metric,E.score,E.threshold);return o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:E.error?"rgba(255, 193, 7, 0.1)":E.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${E.error?"var(--warning)":E.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[o.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:E.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),E.error?o.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:E.passed?"var(--success)":"var(--error)"},children:I.value}),o.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:I.comparison})]})]},O)}),!g&&y.length>0&&o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",y.length," passed"]})]}),C==null?void 0:C.filter(E=>!E.passed&&E.rationale).map((E,O)=>o.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[o.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[E.metric.replace(/_/g," ")," - Why it failed:"]}),o.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:E.rationale})]},`rationale-${O}`)),(A==null?void 0:A.length)>0&&o.jsxs("div",{style:{marginTop:8},children:[o.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),A.map((E,O)=>o.jsxs("div",{style:{marginBottom:E.rationale&&!E.passed?8:4},children:[o.jsxs("div",{className:"metric-row",children:[o.jsx("span",{className:"metric-name",style:{flex:1},children:E.rubric}),o.jsx("span",{className:`metric-value ${E.passed?"passed":"failed"}`,children:E.passed?"✓ Pass":"✗ Fail"})]}),!E.passed&&E.rationale&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[o.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",E.rationale]}),E.error&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",E.error]})]},O)),!g&&z.length>0&&o.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",z.length," passed rubric",z.length>1?"s":""]})]}),(S==null?void 0:S.length)>0&&o.jsxs("div",{className:"invocation-summary",children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",S.length,!g&&((B=x.invocation_results)==null?void 0:B.length)>S.length?` of ${x.invocation_results.length}`:"",")"]}),S.map((E,O)=>o.jsxs("div",{className:"invocation-item",children:[o.jsxs("div",{className:"invocation-query",children:["Turn ",E.invocation_id||O+1,": ",E.user_message||"(no message)"]}),E.actual_response&&o.jsxs("div",{className:"invocation-response",children:["Response: ",E.actual_response.substring(0,200),E.actual_response.length>200?"...":""]})]},O))]}),x.error&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:x.error})]})]},j)}),l.length===0&&o.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function T5({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:a,onRun:l,onClearResult:c}){var z,C,A;const{project:u}=ut(),[d,p]=_.useState(e),[f,h]=_.useState("assertions");_.useEffect(()=>{p(e)},[e.id]);const x=_.useCallback(S=>{p($=>({...$,...S})),s(S)},[s]),w=()=>{const S={id:S1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};x({invocations:[...d.invocations,S]})},j=(S,$)=>{const N=[...d.invocations];N[S]={...N[S],...$},x({invocations:N})},g=S=>{x({invocations:d.invocations.filter(($,N)=>N!==S)})},m=S=>{const $=[...d.invocations];$[S]={...$[S],expected_tool_calls:[...$[S].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},x({invocations:$})},y=(S,$,N)=>{const R=[...d.invocations],L=[...R[S].expected_tool_calls];L[$]={...L[$],...N},R[S]={...R[S],expected_tool_calls:L},x({invocations:R})},k=(S,$)=>{const N=[...d.invocations];N[S]={...N[S],expected_tool_calls:N[S].expected_tool_calls.filter((R,L)=>L!==$)},x({invocations:N})};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Ca,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:d.name,onChange:S=>x({name:S.target.value}),placeholder:"Test case name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const S=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(S)},title:"Copy link to this test case",children:o.jsx(Fd,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?o.jsx(Io,{size:14,className:"spinning"}):o.jsx(pr,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Fe,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>h("assertions"),children:[o.jsx(Na,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),o.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>h("rubrics"),children:[o.jsx(Ud,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>h("docs"),children:[o.jsx(wi,{size:14,style:{marginRight:6}}),"Docs"]}),o.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>h("json"),children:[o.jsx(jn,{size:14,style:{marginRight:6}}),"JSON"]})]}),o.jsxs("div",{className:"editor-content",children:[f==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:d.target_agent||"",onChange:S=>x({target_agent:S.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(z=u==null?void 0:u.agents)==null?void 0:z.map(S=>o.jsx("option",{value:S.name,children:S.name},S.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:d.tags.join(", "),onChange:S=>x({tags:S.target.value.split(",").map($=>$.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:d.description,onChange:S=>x({description:S.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(Kt,{height:"100%",defaultLanguage:"json",value:(()=>{var $;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&(($=u==null?void 0:u.app)!=null&&$.state_keys)&&u.app.state_keys.length>0){const N={};return u.app.state_keys.forEach(R=>{R.default_value!==void 0?N[R.name]=R.default_value:N[R.name]=R.type==="string"?"":R.type==="number"?0:R.type==="boolean"?!1:R.type==="array"?[]:{}}),JSON.stringify(N,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:S=>{try{S&&x({initial_state:JSON.parse(S)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Na,{size:14}),"Conversation Turns"]}),d.invocations.map((S,$)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:$+1}),d.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>g($),style:{padding:4},children:o.jsx(Fe,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:S.user_message,onChange:N=>j($,{user_message:N.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:S.expected_response||"",onChange:N=>j($,{expected_response:N.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),S.expected_tool_calls.map((N,R)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:N.name,onChange:L=>y($,R,{name:L.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${N.args_match_mode==="subset"?"active":""}`,onClick:()=>y($,R,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${N.args_match_mode==="exact"?"active":""}`,onClick:()=>y($,R,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(Kt,{height:"22px",defaultLanguage:"json",value:JSON.stringify(N.args||{}),onChange:L=>{try{L&&y($,R,{args:JSON.parse(L)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>k($,R),style:{padding:"4px 6px"},children:o.jsx(Fe,{size:10})})]},R)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m($),style:{marginTop:4},children:[o.jsx(Ke,{size:12})," Assert Tool Call"]})]})]},S.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:w,children:[o.jsx(Ke,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Ir,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(Kt,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:S=>{if(!S||S==="{}")x({expected_final_state:void 0});else try{x({expected_final_state:JSON.parse(S)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:S,label:$,default:N,max:R})=>{const L=(d.enabled_metrics||[]).find(T=>T.metric===S),W=(L==null?void 0:L.threshold)??N;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!L,onChange:T=>{const M=[...d.enabled_metrics||[]];if(T.target.checked)M.push({metric:S,threshold:N});else{const B=M.findIndex(E=>E.metric===S);B!==-1&&M.splice(B,1)}x({enabled_metrics:M})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:L?1:.5,minWidth:100},children:$}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:L?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:R===5?1:0,max:R,step:.1,value:W,disabled:!L,onChange:T=>{const M=[...d.enabled_metrics||[]],B=M.findIndex(E=>E.metric===S);B!==-1&&(M[B]={...M[B],threshold:parseFloat(T.target.value)||0},x({enabled_metrics:M}))},style:{width:60,textAlign:"center",opacity:L?1:.3,padding:"2px 4px",fontSize:11}})]},S)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((S,$)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:S.rubric,onChange:N=>{const R=[...d.rubrics];R[$]={rubric:N.target.value},x({rubrics:R})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>x({rubrics:d.rubrics.filter((N,R)=>R!==$)}),children:o.jsx(Fe,{size:12})})]},$)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({rubrics:[...d.rubrics,{rubric:""}]}),children:[o.jsx(Ke,{size:12})," Add Rubric"]})]})]}),f==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(vn).map(S=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:S}),o.jsx("td",{style:{padding:"8px 4px"},children:vn[S].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:vn[S].description})]},S))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),o.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(Kt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(C=d.tags)!=null&&C.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(S=>{var $;return{user_message:S.user_message,expected_response:S.expected_response||void 0,expected_tool_calls:($=S.expected_tool_calls)!=null&&$.length?S.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(A=d.rubrics)!=null&&A.length?d.rubrics.map(S=>S.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var $,N;const S=JSON.stringify({name:d.name,description:d.description||void 0,tags:($=d.tags)!=null&&$.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(R=>{var L;return{user_message:R.user_message,expected_response:R.expected_response||void 0,expected_tool_calls:(L=R.expected_tool_calls)!=null&&L.length?R.expected_tool_calls.map(W=>({tool_name:W.tool_name,args:W.match_type!=="name_only"&&Object.keys(W.args||{}).length?W.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(N=d.rubrics)!=null&&N.length?d.rubrics.map(R=>R.rubric):void 0},null,2);navigator.clipboard.writeText(S)},children:[o.jsx(Xo,{size:14})," Copy JSON"]})})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(Ir,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(ji,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(Wy,{size:12}),"View Session"]}),c&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((S,$)=>{var R;const N=Wo(S.metric,S.score,S.threshold);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${S.passed?"passed":"failed"}`,children:N.value}),o.jsx("div",{className:"score-label",children:((R=vn[S.metric])==null?void 0:R.name)||S.metric}),o.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:N.comparison}),S.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:S.error})]},$)})}),r.rubric_results&&r.rubric_results.length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((S,$)=>o.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:S.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${S.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:16,color:S.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:S.passed?"✓":"✗"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:S.rubric}),S.error&&o.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",S.error]})]})]},$))})]}),r.invocation_results.map((S,$)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",$+1,": ",S.user_message.length>50?S.user_message.slice(0,50)+"…":S.user_message]}),S.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:S.metric_results.map((N,R)=>{var W;const L=Wo(N.metric,N.score,N.threshold);return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:N.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:N.passed?"var(--success)":"var(--error)"},children:[((W=vn[N.metric])==null?void 0:W.name)||N.metric,": ",L.value]},R)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,S.actual_response||"(no response)",`

`,S.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,S.actual_tool_calls.map((N,R)=>`  ${R+1}. ${N.name}(${JSON.stringify(N.args)})
`).join("")]})]})]},$)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function A5({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:a,onRun:l,onExport:c}){var w,j,g,m;const[u,d]=_.useState(e.name),[p,f]=_.useState(!1);_.useEffect(()=>{d(e.name)},[e.id]);const h=_.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),x=y=>y==null?"-":`${Math.round(y*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(qy,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:y=>d(y.target.value),onBlur:h,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const y=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(y)},title:"Copy link to this eval set",children:o.jsx(Fd,{size:14})}),o.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[o.jsx(jn,{size:14}),"JSON"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx(Zo,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?o.jsx(Io,{size:14,className:"spinning"}):o.jsx(pr,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Fe,{size:14})})]}),o.jsx("div",{className:"editor-content",children:p?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),o.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(Kt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(y=>{var k,z;return{name:y.name,description:y.description||void 0,tags:(k=y.tags)!=null&&k.length?y.tags:void 0,target_agent:y.target_agent!=="root_agent"?y.target_agent:void 0,invocations:y.invocations.map(C=>{var A;return{user_message:C.user_message,expected_response:C.expected_response||void 0,expected_tool_calls:(A=C.expected_tool_calls)!=null&&A.length?C.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(y.session_input||{}).length?{state:y.session_input}:void 0,final_session_state:Object.keys(y.final_session_state||{}).length?y.final_session_state:void 0,rubrics:(z=y.rubrics)!=null&&z.length?y.rubrics.map(C=>C.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((w=e.eval_config.metrics)==null?void 0:w.filter(y=>y.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var k;const y=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(z=>{var C,A;return{name:z.name,description:z.description||void 0,tags:(C=z.tags)!=null&&C.length?z.tags:void 0,target_agent:z.target_agent!=="root_agent"?z.target_agent:void 0,invocations:z.invocations.map(S=>{var $;return{user_message:S.user_message,expected_response:S.expected_response||void 0,expected_tool_calls:($=S.expected_tool_calls)!=null&&$.length?S.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(z.session_input||{}).length?{state:z.session_input}:void 0,final_session_state:Object.keys(z.final_session_state||{}).length?z.final_session_state:void 0,rubrics:(A=z.rubrics)!=null&&A.length?z.rubrics.map(S=>S.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((k=e.eval_config.metrics)==null?void 0:k.filter(z=>z.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(y)},children:[o.jsx(Xo,{size:14})," Copy JSON"]})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:y=>s({description:y.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(E5,{value:((j=e.eval_config)==null?void 0:j.judge_model)||"",onChange:y=>s({eval_config:{...e.eval_config,judge_model:y}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Gy,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(vn).map(y=>{var S,$,N;const k=vn[y],z=($=(S=e.eval_config)==null?void 0:S.metrics)==null?void 0:$.find(R=>R.metric===y),C=(z==null?void 0:z.enabled)??!1,A=((N=z==null?void 0:z.criterion)==null?void 0:N.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:C,onChange:R=>{var T;const L=[...((T=e.eval_config)==null?void 0:T.metrics)||[]],W=L.findIndex(M=>M.metric===y);R.target.checked?W===-1?L.push({metric:y,enabled:!0,criterion:{threshold:.7}}):L[W]={...L[W],enabled:!0}:W!==-1&&(L[W]={...L[W],enabled:!1}),s({eval_config:{...e.eval_config,metrics:L}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:C?1:.5,minWidth:140,fontWeight:C?500:400},children:[k.name,k.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:C?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:A,disabled:!C,onChange:R=>{var T;const L=[...((T=e.eval_config)==null?void 0:T.metrics)||[]],W=L.findIndex(M=>M.metric===y);W!==-1&&(L[W]={...L[W],criterion:{...L[W].criterion,threshold:parseFloat(R.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:L}}))},style:{width:60,textAlign:"center",opacity:C?1:.3,padding:"2px 4px",fontSize:11}})]},y)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((g=e.eval_config)==null?void 0:g.default_trajectory_match_type)||"in_order",onChange:y=>s({eval_config:{...e.eval_config,default_trajectory_match_type:y.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((m=e.eval_config)==null?void 0:m.num_runs)||1,onChange:y=>s({eval_config:{...e.eval_config,num_runs:parseInt(y.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Xk,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:x(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([y,k])=>{var C;const z=Wo(y,k);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:z.value}),o.jsxs("div",{className:"score-label",children:["Avg ",((C=vn[y])==null?void 0:C.name)||y]})]},y)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([y,k])=>{var z;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((z=vn[y])==null?void 0:z.name)||y}),o.jsx("span",{children:x(k)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${k>=.8?"passed":"failed"}`,style:{width:`${k*100}%`}})})]},y)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(y=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:y.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:y.metric_results.map((k,z)=>{const C=Wo(k.metric,k.score,k.threshold);return o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:k.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:k.passed?"var(--success)":"var(--error)"},children:C.value},z)})}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:y.passed?o.jsx(Ir,{size:14,style:{color:"var(--success)"}}):y.error?o.jsx(wi,{size:14,style:{color:"var(--warning)"}}):o.jsx(ji,{size:14,style:{color:"var(--error)"}})})]},y.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(Ud,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(y=>{const k=i.get(y.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[k?k.passed?o.jsx(Ir,{size:14,style:{color:"var(--success)"}}):o.jsx(ji,{size:14,style:{color:"var(--error)"}}):o.jsx(Ca,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:y.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[y.invocations.length," turn(s)"]})]},y.id)})})]})]})})]})}function P5(){const{project:e,setProject:t}=ut(),[n,r]=_.useState(""),[i,s]=_.useState(!0),[a,l]=_.useState(!1),[c,u]=_.useState(null),[d,p]=_.useState(!1);if(!e)return null;_.useEffect(()=>{f()},[e.id]);async function f(){s(!0),u(null);try{const m=await Ty(e.id);r(m),l(!1)}catch(m){u(m.message)}finally{s(!1)}}function h(m){m!==void 0&&(r(m),l(!0),u(null))}async function x(){s(!0),u(null);try{const m=await Ay(e.id,n);t(m),l(!1)}catch(m){u(m.message)}finally{s(!1)}}function w(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function j(){const m=new Blob([n],{type:"text/yaml"}),y=URL.createObjectURL(m),k=document.createElement("a");k.href=y,k.download=`${e.name}.yaml`,k.click(),URL.revokeObjectURL(y)}function g(){const m=document.createElement("input");m.type="file",m.accept=".yaml,.yml",m.onchange=async y=>{var C;const k=(C=y.target.files)==null?void 0:C[0];if(!k)return;const z=await k.text();r(z),l(!0)},m.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),a&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(wi,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(wi,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Id,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,title:"Copy to clipboard",children:[o.jsx(Xo,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,title:"Download YAML",children:[o.jsx(Zo,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:g,title:"Upload YAML",children:[o.jsx(ol,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[o.jsx(on,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,disabled:!a||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(Kt,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function L5(){const{project:e}=ut(),[t,n]=_.useState(!1),[r,i]=_.useState(""),[s,a]=_.useState(!1),[l,c]=_.useState(null);if(_.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(p=>{if(!p.ok)throw new Error("Failed to fetch code");return p.json()}).then(p=>{let f=p.code||"";f=f.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),f=f.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),i(f),a(!1)}).catch(p=>{c(p.message),a(!1),i("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const p=new Blob([r],{type:"text/x-python"}),f=URL.createObjectURL(p),h=document.createElement("a");h.href=f,h.download=`${e.name}_agent.py`,h.click(),URL.revokeObjectURL(f)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(jn,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:s?"Loading...":"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Id,{size:12}),"Copied!"]}),l&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(wi,{size:12}),"Error"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:s||!!l,children:[o.jsx(Xo,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:s||!!l,children:[o.jsx(Zo,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:s?o.jsx("div",{className:"code-loading",children:o.jsx("div",{children:"Loading generated code..."})}):l?o.jsxs("div",{className:"code-error",children:[o.jsx(wi,{size:24}),o.jsx("div",{children:l})]}):o.jsx(Kt,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const M5=[{id:"app",label:"App",icon:Gy},{id:"agents",label:"Agents",icon:Er},{id:"tools",label:"Tools",icon:ln},{id:"callbacks",label:"Callbacks",icon:jn},{id:"run",label:"Run",icon:Jy},{id:"skillsets",label:"SkillSets",icon:Uk},{id:"eval",label:"Evaluate",icon:gu},{id:"yaml",label:"YAML",icon:Wk},{id:"code",label:"Code",icon:jn}],R5=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function mc(){var M,B;const{projectId:e,tab:t,itemId:n}=Vw(),r=Md(),{project:i,setProject:s,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:h}=ut(),[x,w]=_.useState(!0),[j,g]=_.useState(!1),[m,y]=_.useState(!1),[k,z]=_.useState(null),C=_.useRef(!0),A=_.useRef(null);_.useEffect(()=>{t&&R5.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),_.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&h(n)},[t,n]);function S(E){l(E),E==="agents"&&d?r(`/project/${e}/${E}/${d}`,{replace:!0}):E==="tools"&&f?r(`/project/${e}/${E}/${f}`,{replace:!0}):r(`/project/${e}/${E}`,{replace:!0})}function $(E){E?r(`/project/${e}/${a}/${E}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}_.useEffect(()=>(e&&N(e),()=>{s(null),u(!1)}),[e]);async function N(E){C.current=!0;try{const O=await Sy(E);s(O),A.current=JSON.stringify(O),u(!1)}catch(O){console.error("Failed to load project:",O),r("/")}finally{w(!1),setTimeout(()=>{C.current=!1},100)}}async function R(){if(i){g(!0);try{const{eval_sets:E,...O}=i;await du(i.id,O),A.current=JSON.stringify(i),u(!1)}catch(E){console.error("Failed to save project:",E)}finally{g(!1)}}}async function L(){if(i){y(!0),z(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let E=0,O=0;const I=[],v=[];for(const D of i.eval_sets||[]){if(D.eval_cases.length===0)continue;const q=await qe.post(`/projects/${i.id}/eval-sets/${D.id}/run`,{});q.result&&(E+=q.result.passed_cases||0,O+=q.result.total_cases||0,q.result.case_results&&I.push(...q.result.case_results),v.push(q.result.eval_set_name||D.name||D.id))}if(I.length>0){const D={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:v.length>1?`All Tests (${v.length} sets)`:v[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:O,passed_cases:E,failed_cases:O-E,case_results:I};try{await qe.post(`/projects/${i.id}/eval-history`,D)}catch(q){console.warn("Failed to save batch eval run to history:",q)}}z({passed:E,total:O}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>z(null),5e3)}catch(E){console.error("Failed to run tests:",E),z({passed:0,total:-1}),setTimeout(()=>z(null),5e3)}finally{y(!1)}}}const W=_.useRef(null);_.useEffect(()=>{if(i&&!C.current&&W.current){const E=i.app.models||[],O=W.current||[];if(E.some((v,D)=>{const q=O.find(b=>b.id===v.id);return q?q.provider!==v.provider||q.model_name!==v.model_name||q.api_base!==v.api_base||q.temperature!==v.temperature||q.max_output_tokens!==v.max_output_tokens||q.top_p!==v.top_p||q.top_k!==v.top_k:!1})){const v=i.app.default_model_id,D=i.agents.map(b=>{if(b.type==="LlmAgent"&&b.model){const V=b.model._appModelId;if(V){const P=E.find(Y=>Y.id===V);if(P)return{...b,model:{provider:P.provider,model_name:P.model_name,api_base:P.api_base,temperature:P.temperature,max_output_tokens:P.max_output_tokens,top_p:P.top_p,top_k:P.top_k,fallbacks:[],_appModelId:V}}}else if(v){const P=E.find(Y=>Y.id===v);if(P&&b.model.provider===P.provider&&b.model.model_name===P.model_name&&b.model.api_base===P.api_base)return{...b,model:{provider:P.provider,model_name:P.model_name,api_base:P.api_base,temperature:P.temperature,max_output_tokens:P.max_output_tokens,top_p:P.top_p,top_k:P.top_k,fallbacks:[],_appModelId:v}}}}return b});D.some((b,V)=>JSON.stringify(b)!==JSON.stringify(i.agents[V]))&&s({...i,agents:D})}}i&&(W.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const T=_.useRef(null);return _.useEffect(()=>(i&&!C.current&&A.current&&JSON.stringify(i)!==A.current&&(u(!0),T.current&&clearTimeout(T.current),T.current=setTimeout(async()=>{try{const{eval_sets:O,...I}=i;await du(i.id,I),A.current=JSON.stringify(i),u(!1)}catch(O){console.error("Auto-save failed:",O)}},500)),()=>{T.current&&clearTimeout(T.current)}),[i]),x?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(Fk,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:M5.map(E=>o.jsxs("button",{className:`tab-btn ${a===E.id?"active":""}`,onClick:()=>S(E.id),children:[o.jsx(E.icon,{size:14}),E.label]},E.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${k?k.total===-1?"btn-error":k.passed===k.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:L,disabled:m||!((M=i==null?void 0:i.eval_sets)!=null&&M.some(E=>E.eval_cases.length>0)),title:(B=i==null?void 0:i.eval_sets)!=null&&B.some(E=>E.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[m?o.jsx(Gk,{size:16,className:"spin"}):o.jsx(pr,{size:16}),m?"Testing...":k?k.total===-1?"Error":`${k.passed}/${k.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:R,disabled:j,children:[o.jsx(Ea,{size:16}),j?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[a==="app"&&o.jsx(uj,{}),a==="agents"&&o.jsx(x4,{onSelectAgent:$}),a==="tools"&&o.jsx(Q4,{onSelectTool:$}),a==="callbacks"&&o.jsx(Z4,{onSelectCallback:$}),a==="run"&&o.jsx(k5,{}),a==="skillsets"&&o.jsx(S5,{}),a==="eval"&&o.jsx(N5,{}),a==="yaml"&&o.jsx(P5,{}),a==="code"&&o.jsx(L5,{})]})]}):null}function I5(){const{setMcpServers:e,setBuiltinTools:t}=ut();return _.useEffect(()=>{Rd().then(e).catch(console.error),Py().then(t).catch(console.error)},[e,t]),o.jsxs(sk,{children:[o.jsx(Vr,{path:"/",element:o.jsx(rj,{})}),o.jsx(Vr,{path:"/project/:projectId",element:o.jsx(mc,{})}),o.jsx(Vr,{path:"/project/:projectId/:tab",element:o.jsx(mc,{})}),o.jsx(Vr,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(mc,{})}),o.jsx(Vr,{path:"*",element:o.jsx(ik,{to:"/",replace:!0})})]})}gc.createRoot(document.getElementById("root")).render(o.jsx(It.StrictMode,{children:o.jsx(ck,{children:o.jsx(I5,{})})}));
