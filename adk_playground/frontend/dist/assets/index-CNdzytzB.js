function dx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Co(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rf={exports:{}},No={},sf={exports:{}},ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),px=Symbol.for("react.portal"),fx=Symbol.for("react.fragment"),mx=Symbol.for("react.strict_mode"),hx=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),xx=Symbol.for("react.context"),yx=Symbol.for("react.forward_ref"),vx=Symbol.for("react.suspense"),bx=Symbol.for("react.memo"),kx=Symbol.for("react.lazy"),zu=Symbol.iterator;function wx(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var of={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},af=Object.assign,lf={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||of}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cf(){}cf.prototype=Jr.prototype;function sc(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||of}var oc=sc.prototype=new cf;oc.constructor=sc;af(oc,Jr.prototype);oc.isPureReactComponent=!0;var Tu=Array.isArray,uf=Object.prototype.hasOwnProperty,ac={current:null},df={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)uf.call(t,r)&&!df.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xi,type:e,key:o,ref:a,props:i,_owner:ac.current}}function jx(e,t){return{$$typeof:Xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xi}function _x(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pu=/\/+/g;function ea(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_x(""+e.key):t.toString(36)}function Ps(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xi:case px:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ea(a,0):r,Tu(i)?(n="",e!=null&&(n=e.replace(Pu,"$&/")+"/"),Ps(i,t,n,"",function(u){return u})):i!=null&&(lc(i)&&(i=jx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Pu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Tu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+ea(o,l);a+=Ps(o,t,n,c,i)}else if(c=wx(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+ea(o,l++),a+=Ps(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function cs(e,t,n){if(e==null)return e;var r=[],i=0;return Ps(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Sx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ct={current:null},Ls={transition:null},Cx={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:Ls,ReactCurrentOwner:ac};function ff(){throw Error("act(...) is not supported in production builds of React.")}ye.Children={map:cs,forEach:function(e,t,n){cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cs(e,function(){t++}),t},toArray:function(e){return cs(e,function(t){return t})||[]},only:function(e){if(!lc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ye.Component=Jr;ye.Fragment=fx;ye.Profiler=hx;ye.PureComponent=sc;ye.StrictMode=mx;ye.Suspense=vx;ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cx;ye.act=ff;ye.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=af({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ac.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)uf.call(t,c)&&!df.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xi,type:e.type,key:i,ref:o,props:r,_owner:a}};ye.createContext=function(e){return e={$$typeof:xx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gx,_context:e},e.Consumer=e};ye.createElement=pf;ye.createFactory=function(e){var t=pf.bind(null,e);return t.type=e,t};ye.createRef=function(){return{current:null}};ye.forwardRef=function(e){return{$$typeof:yx,render:e}};ye.isValidElement=lc;ye.lazy=function(e){return{$$typeof:kx,_payload:{_status:-1,_result:e},_init:Sx}};ye.memo=function(e,t){return{$$typeof:bx,type:e,compare:t===void 0?null:t}};ye.startTransition=function(e){var t=Ls.transition;Ls.transition={};try{e()}finally{Ls.transition=t}};ye.unstable_act=ff;ye.useCallback=function(e,t){return ct.current.useCallback(e,t)};ye.useContext=function(e){return ct.current.useContext(e)};ye.useDebugValue=function(){};ye.useDeferredValue=function(e){return ct.current.useDeferredValue(e)};ye.useEffect=function(e,t){return ct.current.useEffect(e,t)};ye.useId=function(){return ct.current.useId()};ye.useImperativeHandle=function(e,t,n){return ct.current.useImperativeHandle(e,t,n)};ye.useInsertionEffect=function(e,t){return ct.current.useInsertionEffect(e,t)};ye.useLayoutEffect=function(e,t){return ct.current.useLayoutEffect(e,t)};ye.useMemo=function(e,t){return ct.current.useMemo(e,t)};ye.useReducer=function(e,t,n){return ct.current.useReducer(e,t,n)};ye.useRef=function(e){return ct.current.useRef(e)};ye.useState=function(e){return ct.current.useState(e)};ye.useSyncExternalStore=function(e,t,n){return ct.current.useSyncExternalStore(e,t,n)};ye.useTransition=function(){return ct.current.useTransition()};ye.version="18.3.1";sf.exports=ye;var _=sf.exports;const It=Co(_),Nx=dx({__proto__:null,default:It},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex=_,zx=Symbol.for("react.element"),Tx=Symbol.for("react.fragment"),Px=Object.prototype.hasOwnProperty,Lx=Ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ax={key:!0,ref:!0,__self:!0,__source:!0};function mf(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Px.call(t,r)&&!Ax.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:zx,type:e,key:o,ref:a,props:i,_owner:Lx.current}}No.Fragment=Tx;No.jsx=mf;No.jsxs=mf;rf.exports=No;var s=rf.exports,qa={},hf={exports:{}},Nt={},gf={exports:{}},xf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,M){var j=D.length;D.push(M);e:for(;0<j;){var K=j-1>>>1,G=D[K];if(0<i(G,M))D[K]=M,D[j]=G,j=K;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var M=D[0],j=D.pop();if(j!==M){D[0]=j;e:for(var K=0,G=D.length,z=G>>>1;K<z;){var ue=2*(K+1)-1,R=D[ue],ee=ue+1,W=D[ee];if(0>i(R,j))ee<G&&0>i(W,R)?(D[K]=W,D[ee]=j,K=ee):(D[K]=R,D[ue]=j,K=ue);else if(ee<G&&0>i(W,j))D[K]=W,D[ee]=j,K=ee;else break e}}return M}function i(D,M){var j=D.sortIndex-M.sortIndex;return j!==0?j:D.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,y=!1,b=!1,P=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(D){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=D)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function L(D){if(b=!1,h(D),!y)if(n(c)!==null)y=!0,X(C);else{var M=n(u);M!==null&&T(L,M.startTime-D)}}function C(D,M){y=!1,b&&(b=!1,x(k),k=-1),m=!0;var j=f;try{for(h(M),p=n(c);p!==null&&(!(p.expirationTime>M)||D&&!v());){var K=p.callback;if(typeof K=="function"){p.callback=null,f=p.priorityLevel;var G=K(p.expirationTime<=M);M=e.unstable_now(),typeof G=="function"?p.callback=G:p===n(c)&&r(c),h(M)}else r(c);p=n(c)}if(p!==null)var z=!0;else{var ue=n(u);ue!==null&&T(L,ue.startTime-M),z=!1}return z}finally{p=null,f=j,m=!1}}var w=!1,S=null,k=-1,A=5,N=-1;function v(){return!(e.unstable_now()-N<A)}function E(){if(S!==null){var D=e.unstable_now();N=D;var M=!0;try{M=S(!0,D)}finally{M?B():(w=!1,S=null)}}else w=!1}var B;if(typeof g=="function")B=function(){g(E)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,F=U.port2;U.port1.onmessage=E,B=function(){F.postMessage(null)}}else B=function(){P(E,0)};function X(D){S=D,w||(w=!0,B())}function T(D,M){k=P(function(){D(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,X(C))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var j=f;f=M;try{return D()}finally{f=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,M){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=f;f=D;try{return M()}finally{f=j}},e.unstable_scheduleCallback=function(D,M,j){var K=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?K+j:K):j=K,D){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,D={id:d++,callback:M,priorityLevel:D,startTime:j,expirationTime:G,sortIndex:-1},j>K?(D.sortIndex=j,t(u,D),n(c)===null&&D===n(u)&&(b?(x(k),k=-1):b=!0,T(L,j-K))):(D.sortIndex=G,t(c,D),y||m||(y=!0,X(C))),D},e.unstable_shouldYield=v,e.unstable_wrapCallback=function(D){var M=f;return function(){var j=f;f=M;try{return D.apply(this,arguments)}finally{f=j}}}})(xf);gf.exports=xf;var Rx=gf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx=_,Ct=Rx;function Y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yf=new Set,zi={};function cr(e,t){Or(e,t),Or(e+"Capture",t)}function Or(e,t){for(zi[e]=t,e=0;e<t.length;e++)yf.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ja=Object.prototype.hasOwnProperty,Ix=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lu={},Au={};function Ox(e){return Ja.call(Au,e)?!0:Ja.call(Lu,e)?!1:Ix.test(e)?Au[e]=!0:(Lu[e]=!0,!1)}function $x(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dx(e,t,n,r){if(t===null||typeof t>"u"||$x(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ut(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){et[e]=new ut(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];et[t]=new ut(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){et[e]=new ut(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){et[e]=new ut(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){et[e]=new ut(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){et[e]=new ut(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){et[e]=new ut(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){et[e]=new ut(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){et[e]=new ut(e,5,!1,e.toLowerCase(),null,!1,!1)});var cc=/[\-:]([a-z])/g;function uc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cc,uc);et[t]=new ut(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cc,uc);et[t]=new ut(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cc,uc);et[t]=new ut(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){et[e]=new ut(e,1,!1,e.toLowerCase(),null,!1,!1)});et.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){et[e]=new ut(e,1,!1,e.toLowerCase(),null,!0,!0)});function dc(e,t,n,r){var i=et.hasOwnProperty(t)?et[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dx(t,n,i,r)&&(n=null),r||i===null?Ox(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yn=Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,us=Symbol.for("react.element"),gr=Symbol.for("react.portal"),xr=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),vf=Symbol.for("react.provider"),bf=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ga=Symbol.for("react.suspense_list"),mc=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),kf=Symbol.for("react.offscreen"),Ru=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=Ru&&e[Ru]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Object.assign,ta;function di(e){if(ta===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ta=t&&t[1]||""}return`
`+ta+e}var na=!1;function ra(e,t){if(!e||na)return"";na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{na=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?di(e):""}function Fx(e){switch(e.tag){case 5:return di(e.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return e=ra(e.type,!1),e;case 11:return e=ra(e.type.render,!1),e;case 1:return e=ra(e.type,!0),e;default:return""}}function Ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xr:return"Fragment";case gr:return"Portal";case Ka:return"Profiler";case pc:return"StrictMode";case Qa:return"Suspense";case Ga:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bf:return(e.displayName||"Context")+".Consumer";case vf:return(e._context.displayName||"Context")+".Provider";case fc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mc:return t=e.displayName||null,t!==null?t:Ya(e.type)||"Memo";case kn:t=e._payload,e=e._init;try{return Ya(e(t))}catch{}}return null}function Bx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(t);case 8:return t===pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function $n(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ux(e){var t=wf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ds(e){e._valueTracker||(e._valueTracker=Ux(e))}function jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xa(e,t){var n=t.checked;return Me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=$n(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _f(e,t){t=t.checked,t!=null&&dc(e,"checked",t,!1)}function Za(e,t){_f(e,t);var n=$n(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?el(e,t.type,n):t.hasOwnProperty("defaultValue")&&el(e,t.type,$n(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function el(e,t,n){(t!=="number"||Js(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pi=Array.isArray;function zr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Y(91));return Me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Y(92));if(pi(n)){if(1<n.length)throw Error(Y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:$n(n)}}function Sf(e,t){var n=$n(t.value),r=$n(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ps,Nf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ps=ps||document.createElement("div"),ps.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vx=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){Vx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function Ef(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function zf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ef(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wx=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,t){if(t){if(Wx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Y(62))}}function il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,Tr=null,Pr=null;function Du(e){if(e=ts(e)){if(typeof ol!="function")throw Error(Y(280));var t=e.stateNode;t&&(t=Lo(t),ol(e.stateNode,e.type,t))}}function Tf(e){Tr?Pr?Pr.push(e):Pr=[e]:Tr=e}function Pf(){if(Tr){var e=Tr,t=Pr;if(Pr=Tr=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function Lf(e,t){return e(t)}function Af(){}var ia=!1;function Rf(e,t,n){if(ia)return e(t,n);ia=!0;try{return Lf(e,t,n)}finally{ia=!1,(Tr!==null||Pr!==null)&&(Af(),Pf())}}function Pi(e,t){var n=e.stateNode;if(n===null)return null;var r=Lo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var al=!1;if(mn)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){al=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{al=!1}function Hx(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var xi=!1,Ks=null,Qs=!1,ll=null,qx={onError:function(e){xi=!0,Ks=e}};function Jx(e,t,n,r,i,o,a,l,c){xi=!1,Ks=null,Hx.apply(qx,arguments)}function Kx(e,t,n,r,i,o,a,l,c){if(Jx.apply(this,arguments),xi){if(xi){var u=Ks;xi=!1,Ks=null}else throw Error(Y(198));Qs||(Qs=!0,ll=u)}}function ur(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Mf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fu(e){if(ur(e)!==e)throw Error(Y(188))}function Qx(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fu(i),e;if(o===r)return Fu(i),t;o=o.sibling}throw Error(Y(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function If(e){return e=Qx(e),e!==null?Of(e):null}function Of(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Of(e);if(t!==null)return t;e=e.sibling}return null}var $f=Ct.unstable_scheduleCallback,Bu=Ct.unstable_cancelCallback,Gx=Ct.unstable_shouldYield,Yx=Ct.unstable_requestPaint,Oe=Ct.unstable_now,Xx=Ct.unstable_getCurrentPriorityLevel,gc=Ct.unstable_ImmediatePriority,Df=Ct.unstable_UserBlockingPriority,Gs=Ct.unstable_NormalPriority,Zx=Ct.unstable_LowPriority,Ff=Ct.unstable_IdlePriority,Eo=null,tn=null;function ey(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:ry,ty=Math.log,ny=Math.LN2;function ry(e){return e>>>=0,e===0?32:31-(ty(e)/ny|0)|0}var fs=64,ms=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ys(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=fi(l):(o&=a,o!==0&&(r=fi(o)))}else a=n&~i,a!==0?r=fi(a):o!==0&&(r=fi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ht(t),i=1<<n,r|=e[n],t&=~i;return r}function iy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ht(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=iy(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bf(){var e=fs;return fs<<=1,!(fs&4194240)&&(fs=64),e}function sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=n}function oy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ht(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Se=0;function Uf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vf,yc,Wf,Hf,qf,ul=!1,hs=[],zn=null,Tn=null,Pn=null,Li=new Map,Ai=new Map,jn=[],ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":zn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(t.pointerId)}}function ti(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ts(t),t!==null&&yc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ly(e,t,n,r,i){switch(t){case"focusin":return zn=ti(zn,e,t,n,r,i),!0;case"dragenter":return Tn=ti(Tn,e,t,n,r,i),!0;case"mouseover":return Pn=ti(Pn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Li.set(o,ti(Li.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ai.set(o,ti(Ai.get(o)||null,e,t,n,r,i)),!0}return!1}function Jf(e){var t=Gn(e.target);if(t!==null){var n=ur(t);if(n!==null){if(t=n.tag,t===13){if(t=Mf(n),t!==null){e.blockedOn=t,qf(e.priority,function(){Wf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function As(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sl=r,n.target.dispatchEvent(r),sl=null}else return t=ts(n),t!==null&&yc(t),e.blockedOn=n,!1;t.shift()}return!0}function Vu(e,t,n){As(e)&&n.delete(t)}function cy(){ul=!1,zn!==null&&As(zn)&&(zn=null),Tn!==null&&As(Tn)&&(Tn=null),Pn!==null&&As(Pn)&&(Pn=null),Li.forEach(Vu),Ai.forEach(Vu)}function ni(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,cy)))}function Ri(e){function t(i){return ni(i,e)}if(0<hs.length){ni(hs[0],e);for(var n=1;n<hs.length;n++){var r=hs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zn!==null&&ni(zn,e),Tn!==null&&ni(Tn,e),Pn!==null&&ni(Pn,e),Li.forEach(t),Ai.forEach(t),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Jf(n),n.blockedOn===null&&jn.shift()}var Lr=yn.ReactCurrentBatchConfig,Xs=!0;function uy(e,t,n,r){var i=Se,o=Lr.transition;Lr.transition=null;try{Se=1,vc(e,t,n,r)}finally{Se=i,Lr.transition=o}}function dy(e,t,n,r){var i=Se,o=Lr.transition;Lr.transition=null;try{Se=4,vc(e,t,n,r)}finally{Se=i,Lr.transition=o}}function vc(e,t,n,r){if(Xs){var i=dl(e,t,n,r);if(i===null)ha(e,t,r,Zs,n),Uu(e,r);else if(ly(i,e,t,n,r))r.stopPropagation();else if(Uu(e,r),t&4&&-1<ay.indexOf(e)){for(;i!==null;){var o=ts(i);if(o!==null&&Vf(o),o=dl(e,t,n,r),o===null&&ha(e,t,r,Zs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ha(e,t,r,null,n)}}var Zs=null;function dl(e,t,n,r){if(Zs=null,e=hc(r),e=Gn(e),e!==null)if(t=ur(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Mf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zs=e,null}function Kf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xx()){case gc:return 1;case Df:return 4;case Gs:case Zx:return 16;case Ff:return 536870912;default:return 16}default:return 16}}var Sn=null,bc=null,Rs=null;function Qf(){if(Rs)return Rs;var e,t=bc,n=t.length,r,i="value"in Sn?Sn.value:Sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Rs=i.slice(e,1<r?1-r:void 0)}function Ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function Wu(){return!1}function Et(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gs:Wu,this.isPropagationStopped=Wu,this}return Me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),t}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=Et(Kr),es=Me({},Kr,{view:0,detail:0}),py=Et(es),oa,aa,ri,zo=Me({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(oa=e.screenX-ri.screenX,aa=e.screenY-ri.screenY):aa=oa=0,ri=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),Hu=Et(zo),fy=Me({},zo,{dataTransfer:0}),my=Et(fy),hy=Me({},es,{relatedTarget:0}),la=Et(hy),gy=Me({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=Et(gy),yy=Me({},Kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vy=Et(yy),by=Me({},Kr,{data:0}),qu=Et(by),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jy[e])?!!t[e]:!1}function wc(){return _y}var Sy=Me({},es,{key:function(e){if(e.key){var t=ky[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(e){return e.type==="keypress"?Ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cy=Et(Sy),Ny=Me({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ju=Et(Ny),Ey=Me({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),zy=Et(Ey),Ty=Me({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Py=Et(Ty),Ly=Me({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ay=Et(Ly),Ry=[9,13,27,32],jc=mn&&"CompositionEvent"in window,yi=null;mn&&"documentMode"in document&&(yi=document.documentMode);var My=mn&&"TextEvent"in window&&!yi,Gf=mn&&(!jc||yi&&8<yi&&11>=yi),Ku=" ",Qu=!1;function Yf(e,t){switch(e){case"keyup":return Ry.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function Iy(e,t){switch(e){case"compositionend":return Xf(t);case"keypress":return t.which!==32?null:(Qu=!0,Ku);case"textInput":return e=t.data,e===Ku&&Qu?null:e;default:return null}}function Oy(e,t){if(yr)return e==="compositionend"||!jc&&Yf(e,t)?(e=Qf(),Rs=bc=Sn=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gf&&t.locale!=="ko"?null:t.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$y[e.type]:t==="textarea"}function Zf(e,t,n,r){Tf(r),t=eo(t,"onChange"),0<t.length&&(n=new kc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vi=null,Mi=null;function Dy(e){um(e,0)}function To(e){var t=kr(e);if(jf(t))return e}function Fy(e,t){if(e==="change")return t}var em=!1;if(mn){var ca;if(mn){var ua="oninput"in document;if(!ua){var Yu=document.createElement("div");Yu.setAttribute("oninput","return;"),ua=typeof Yu.oninput=="function"}ca=ua}else ca=!1;em=ca&&(!document.documentMode||9<document.documentMode)}function Xu(){vi&&(vi.detachEvent("onpropertychange",tm),Mi=vi=null)}function tm(e){if(e.propertyName==="value"&&To(Mi)){var t=[];Zf(t,Mi,e,hc(e)),Rf(Dy,t)}}function By(e,t,n){e==="focusin"?(Xu(),vi=t,Mi=n,vi.attachEvent("onpropertychange",tm)):e==="focusout"&&Xu()}function Uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(Mi)}function Vy(e,t){if(e==="click")return To(t)}function Wy(e,t){if(e==="input"||e==="change")return To(t)}function Hy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Kt=typeof Object.is=="function"?Object.is:Hy;function Ii(e,t){if(Kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ja.call(t,i)||!Kt(e[i],t[i]))return!1}return!0}function Zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var n=Zu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zu(n)}}function nm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rm(){for(var e=window,t=Js();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Js(e.document)}return t}function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qy(e){var t=rm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nm(n.ownerDocument.documentElement,n)){if(r!==null&&_c(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ed(n,o);var a=ed(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jy=mn&&"documentMode"in document&&11>=document.documentMode,vr=null,pl=null,bi=null,fl=!1;function td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||vr==null||vr!==Js(r)||(r=vr,"selectionStart"in r&&_c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&Ii(bi,r)||(bi=r,r=eo(pl,"onSelect"),0<r.length&&(t=new kc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vr)))}function xs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var br={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},da={},im={};mn&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Po(e){if(da[e])return da[e];if(!br[e])return e;var t=br[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in im)return da[e]=t[n];return e}var sm=Po("animationend"),om=Po("animationiteration"),am=Po("animationstart"),lm=Po("transitionend"),cm=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){cm.set(e,t),cr(t,[e])}for(var pa=0;pa<nd.length;pa++){var fa=nd[pa],Ky=fa.toLowerCase(),Qy=fa[0].toUpperCase()+fa.slice(1);Bn(Ky,"on"+Qy)}Bn(sm,"onAnimationEnd");Bn(om,"onAnimationIteration");Bn(am,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(lm,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));function rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kx(r,t,void 0,e),e.currentTarget=null}function um(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;rd(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;rd(i,l,u),o=c}}}if(Qs)throw e=ll,Qs=!1,ll=null,e}function ze(e,t){var n=t[yl];n===void 0&&(n=t[yl]=new Set);var r=e+"__bubble";n.has(r)||(dm(t,e,2,!1),n.add(r))}function ma(e,t,n){var r=0;t&&(r|=4),dm(n,e,r,t)}var ys="_reactListening"+Math.random().toString(36).slice(2);function Oi(e){if(!e[ys]){e[ys]=!0,yf.forEach(function(n){n!=="selectionchange"&&(Gy.has(n)||ma(n,!1,e),ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ys]||(t[ys]=!0,ma("selectionchange",!1,t))}}function dm(e,t,n,r){switch(Kf(t)){case 1:var i=uy;break;case 4:i=dy;break;default:i=vc}n=i.bind(null,t,n,e),i=void 0,!al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ha(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Gn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Rf(function(){var u=o,d=hc(n),p=[];e:{var f=cm.get(e);if(f!==void 0){var m=kc,y=e;switch(e){case"keypress":if(Ms(n)===0)break e;case"keydown":case"keyup":m=Cy;break;case"focusin":y="focus",m=la;break;case"focusout":y="blur",m=la;break;case"beforeblur":case"afterblur":m=la;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=zy;break;case sm:case om:case am:m=xy;break;case lm:m=Py;break;case"scroll":m=py;break;case"wheel":m=Ay;break;case"copy":case"cut":case"paste":m=vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ju}var b=(t&4)!==0,P=!b&&e==="scroll",x=b?f!==null?f+"Capture":null:f;b=[];for(var g=u,h;g!==null;){h=g;var L=h.stateNode;if(h.tag===5&&L!==null&&(h=L,x!==null&&(L=Pi(g,x),L!=null&&b.push($i(g,L,h)))),P)break;g=g.return}0<b.length&&(f=new m(f,y,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==sl&&(y=n.relatedTarget||n.fromElement)&&(Gn(y)||y[hn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Gn(y):null,y!==null&&(P=ur(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(b=Hu,L="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ju,L="onPointerLeave",x="onPointerEnter",g="pointer"),P=m==null?f:kr(m),h=y==null?f:kr(y),f=new b(L,g+"leave",m,n,d),f.target=P,f.relatedTarget=h,L=null,Gn(d)===u&&(b=new b(x,g+"enter",y,n,d),b.target=h,b.relatedTarget=P,L=b),P=L,m&&y)t:{for(b=m,x=y,g=0,h=b;h;h=pr(h))g++;for(h=0,L=x;L;L=pr(L))h++;for(;0<g-h;)b=pr(b),g--;for(;0<h-g;)x=pr(x),h--;for(;g--;){if(b===x||x!==null&&b===x.alternate)break t;b=pr(b),x=pr(x)}b=null}else b=null;m!==null&&id(p,f,m,b,!1),y!==null&&P!==null&&id(p,P,y,b,!0)}}e:{if(f=u?kr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Fy;else if(Gu(f))if(em)C=Wy;else{C=Uy;var w=By}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Vy);if(C&&(C=C(e,u))){Zf(p,C,n,d);break e}w&&w(e,f,u),e==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&el(f,"number",f.value)}switch(w=u?kr(u):window,e){case"focusin":(Gu(w)||w.contentEditable==="true")&&(vr=w,pl=u,bi=null);break;case"focusout":bi=pl=vr=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,td(p,n,d);break;case"selectionchange":if(Jy)break;case"keydown":case"keyup":td(p,n,d)}var S;if(jc)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else yr?Yf(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Gf&&n.locale!=="ko"&&(yr||k!=="onCompositionStart"?k==="onCompositionEnd"&&yr&&(S=Qf()):(Sn=d,bc="value"in Sn?Sn.value:Sn.textContent,yr=!0)),w=eo(u,k),0<w.length&&(k=new qu(k,e,null,n,d),p.push({event:k,listeners:w}),S?k.data=S:(S=Xf(n),S!==null&&(k.data=S)))),(S=My?Iy(e,n):Oy(e,n))&&(u=eo(u,"onBeforeInput"),0<u.length&&(d=new qu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=S))}um(p,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pi(e,n),o!=null&&r.unshift($i(e,o,i)),o=Pi(e,t),o!=null&&r.push($i(e,o,i))),e=e.return}return r}function pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Pi(n,o),c!=null&&a.unshift($i(n,c,l))):i||(c=Pi(n,o),c!=null&&a.push($i(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Yy=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(Yy,`
`).replace(Xy,"")}function vs(e,t,n){if(t=sd(t),sd(e)!==t&&n)throw Error(Y(425))}function to(){}var ml=null,hl=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,ev=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(tv)}:xl;function tv(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ri(t)}function Ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Qr,Di="__reactProps$"+Qr,hn="__reactContainer$"+Qr,yl="__reactEvents$"+Qr,nv="__reactListeners$"+Qr,rv="__reactHandles$"+Qr;function Gn(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ad(e);e!==null;){if(n=e[Xt])return n;e=ad(e)}return t}e=n,n=e.parentNode}return null}function ts(e){return e=e[Xt]||e[hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function Lo(e){return e[Di]||null}var vl=[],wr=-1;function Un(e){return{current:e}}function Te(e){0>wr||(e.current=vl[wr],vl[wr]=null,wr--)}function Ne(e,t){wr++,vl[wr]=e.current,e.current=t}var Dn={},it=Un(Dn),mt=Un(!1),rr=Dn;function $r(e,t){var n=e.type.contextTypes;if(!n)return Dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ht(e){return e=e.childContextTypes,e!=null}function no(){Te(mt),Te(it)}function ld(e,t,n){if(it.current!==Dn)throw Error(Y(168));Ne(it,t),Ne(mt,n)}function pm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Y(108,Bx(e)||"Unknown",i));return Me({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dn,rr=it.current,Ne(it,e),Ne(mt,mt.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(Y(169));n?(e=pm(e,t,rr),r.__reactInternalMemoizedMergedChildContext=e,Te(mt),Te(it),Ne(it,e)):Te(mt),Ne(mt,n)}var cn=null,Ao=!1,xa=!1;function fm(e){cn===null?cn=[e]:cn.push(e)}function iv(e){Ao=!0,fm(e)}function Vn(){if(!xa&&cn!==null){xa=!0;var e=0,t=Se;try{var n=cn;for(Se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cn=null,Ao=!1}catch(i){throw cn!==null&&(cn=cn.slice(e+1)),$f(gc,Vn),i}finally{Se=t,xa=!1}}return null}var jr=[],_r=0,io=null,so=0,Lt=[],At=0,ir=null,un=1,dn="";function Jn(e,t){jr[_r++]=so,jr[_r++]=io,io=e,so=t}function mm(e,t,n){Lt[At++]=un,Lt[At++]=dn,Lt[At++]=ir,ir=e;var r=un;e=dn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var o=32-Ht(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,un=1<<32-Ht(t)+i|n<<i|r,dn=o+e}else un=1<<o|n<<i|r,dn=e}function Sc(e){e.return!==null&&(Jn(e,1),mm(e,1,0))}function Cc(e){for(;e===io;)io=jr[--_r],jr[_r]=null,so=jr[--_r],jr[_r]=null;for(;e===ir;)ir=Lt[--At],Lt[At]=null,dn=Lt[--At],Lt[At]=null,un=Lt[--At],Lt[At]=null}var St=null,jt=null,Pe=!1,Vt=null;function hm(e,t){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ud(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,jt=Ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,jt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ir!==null?{id:un,overflow:dn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,St=e,jt=null,!0):!1;default:return!1}}function bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kl(e){if(Pe){var t=jt;if(t){var n=t;if(!ud(e,t)){if(bl(e))throw Error(Y(418));t=Ln(n.nextSibling);var r=St;t&&ud(e,t)?hm(r,n):(e.flags=e.flags&-4097|2,Pe=!1,St=e)}}else{if(bl(e))throw Error(Y(418));e.flags=e.flags&-4097|2,Pe=!1,St=e}}}function dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function bs(e){if(e!==St)return!1;if(!Pe)return dd(e),Pe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=jt)){if(bl(e))throw gm(),Error(Y(418));for(;t;)hm(e,t),t=Ln(t.nextSibling)}if(dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){jt=Ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}jt=null}}else jt=St?Ln(e.stateNode.nextSibling):null;return!0}function gm(){for(var e=jt;e;)e=Ln(e.nextSibling)}function Dr(){jt=St=null,Pe=!1}function Nc(e){Vt===null?Vt=[e]:Vt.push(e)}var sv=yn.ReactCurrentBatchConfig;function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,e))}return e}function ks(e,t){throw e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pd(e){var t=e._init;return t(e._payload)}function xm(e){function t(x,g){if(e){var h=x.deletions;h===null?(x.deletions=[g],x.flags|=16):h.push(g)}}function n(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function r(x,g){for(x=new Map;g!==null;)g.key!==null?x.set(g.key,g):x.set(g.index,g),g=g.sibling;return x}function i(x,g){return x=In(x,g),x.index=0,x.sibling=null,x}function o(x,g,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<g?(x.flags|=2,g):h):(x.flags|=2,g)):(x.flags|=1048576,g)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,g,h,L){return g===null||g.tag!==6?(g=_a(h,x.mode,L),g.return=x,g):(g=i(g,h),g.return=x,g)}function c(x,g,h,L){var C=h.type;return C===xr?d(x,g,h.props.children,L,h.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===kn&&pd(C)===g.type)?(L=i(g,h.props),L.ref=ii(x,g,h),L.return=x,L):(L=Us(h.type,h.key,h.props,null,x.mode,L),L.ref=ii(x,g,h),L.return=x,L)}function u(x,g,h,L){return g===null||g.tag!==4||g.stateNode.containerInfo!==h.containerInfo||g.stateNode.implementation!==h.implementation?(g=Sa(h,x.mode,L),g.return=x,g):(g=i(g,h.children||[]),g.return=x,g)}function d(x,g,h,L,C){return g===null||g.tag!==7?(g=er(h,x.mode,L,C),g.return=x,g):(g=i(g,h),g.return=x,g)}function p(x,g,h){if(typeof g=="string"&&g!==""||typeof g=="number")return g=_a(""+g,x.mode,h),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case us:return h=Us(g.type,g.key,g.props,null,x.mode,h),h.ref=ii(x,null,g),h.return=x,h;case gr:return g=Sa(g,x.mode,h),g.return=x,g;case kn:var L=g._init;return p(x,L(g._payload),h)}if(pi(g)||Zr(g))return g=er(g,x.mode,h,null),g.return=x,g;ks(x,g)}return null}function f(x,g,h,L){var C=g!==null?g.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:l(x,g,""+h,L);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case us:return h.key===C?c(x,g,h,L):null;case gr:return h.key===C?u(x,g,h,L):null;case kn:return C=h._init,f(x,g,C(h._payload),L)}if(pi(h)||Zr(h))return C!==null?null:d(x,g,h,L,null);ks(x,h)}return null}function m(x,g,h,L,C){if(typeof L=="string"&&L!==""||typeof L=="number")return x=x.get(h)||null,l(g,x,""+L,C);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case us:return x=x.get(L.key===null?h:L.key)||null,c(g,x,L,C);case gr:return x=x.get(L.key===null?h:L.key)||null,u(g,x,L,C);case kn:var w=L._init;return m(x,g,h,w(L._payload),C)}if(pi(L)||Zr(L))return x=x.get(h)||null,d(g,x,L,C,null);ks(g,L)}return null}function y(x,g,h,L){for(var C=null,w=null,S=g,k=g=0,A=null;S!==null&&k<h.length;k++){S.index>k?(A=S,S=null):A=S.sibling;var N=f(x,S,h[k],L);if(N===null){S===null&&(S=A);break}e&&S&&N.alternate===null&&t(x,S),g=o(N,g,k),w===null?C=N:w.sibling=N,w=N,S=A}if(k===h.length)return n(x,S),Pe&&Jn(x,k),C;if(S===null){for(;k<h.length;k++)S=p(x,h[k],L),S!==null&&(g=o(S,g,k),w===null?C=S:w.sibling=S,w=S);return Pe&&Jn(x,k),C}for(S=r(x,S);k<h.length;k++)A=m(S,x,k,h[k],L),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?k:A.key),g=o(A,g,k),w===null?C=A:w.sibling=A,w=A);return e&&S.forEach(function(v){return t(x,v)}),Pe&&Jn(x,k),C}function b(x,g,h,L){var C=Zr(h);if(typeof C!="function")throw Error(Y(150));if(h=C.call(h),h==null)throw Error(Y(151));for(var w=C=null,S=g,k=g=0,A=null,N=h.next();S!==null&&!N.done;k++,N=h.next()){S.index>k?(A=S,S=null):A=S.sibling;var v=f(x,S,N.value,L);if(v===null){S===null&&(S=A);break}e&&S&&v.alternate===null&&t(x,S),g=o(v,g,k),w===null?C=v:w.sibling=v,w=v,S=A}if(N.done)return n(x,S),Pe&&Jn(x,k),C;if(S===null){for(;!N.done;k++,N=h.next())N=p(x,N.value,L),N!==null&&(g=o(N,g,k),w===null?C=N:w.sibling=N,w=N);return Pe&&Jn(x,k),C}for(S=r(x,S);!N.done;k++,N=h.next())N=m(S,x,k,N.value,L),N!==null&&(e&&N.alternate!==null&&S.delete(N.key===null?k:N.key),g=o(N,g,k),w===null?C=N:w.sibling=N,w=N);return e&&S.forEach(function(E){return t(x,E)}),Pe&&Jn(x,k),C}function P(x,g,h,L){if(typeof h=="object"&&h!==null&&h.type===xr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case us:e:{for(var C=h.key,w=g;w!==null;){if(w.key===C){if(C=h.type,C===xr){if(w.tag===7){n(x,w.sibling),g=i(w,h.props.children),g.return=x,x=g;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===kn&&pd(C)===w.type){n(x,w.sibling),g=i(w,h.props),g.ref=ii(x,w,h),g.return=x,x=g;break e}n(x,w);break}else t(x,w);w=w.sibling}h.type===xr?(g=er(h.props.children,x.mode,L,h.key),g.return=x,x=g):(L=Us(h.type,h.key,h.props,null,x.mode,L),L.ref=ii(x,g,h),L.return=x,x=L)}return a(x);case gr:e:{for(w=h.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===h.containerInfo&&g.stateNode.implementation===h.implementation){n(x,g.sibling),g=i(g,h.children||[]),g.return=x,x=g;break e}else{n(x,g);break}else t(x,g);g=g.sibling}g=Sa(h,x.mode,L),g.return=x,x=g}return a(x);case kn:return w=h._init,P(x,g,w(h._payload),L)}if(pi(h))return y(x,g,h,L);if(Zr(h))return b(x,g,h,L);ks(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,g!==null&&g.tag===6?(n(x,g.sibling),g=i(g,h),g.return=x,x=g):(n(x,g),g=_a(h,x.mode,L),g.return=x,x=g),a(x)):n(x,g)}return P}var Fr=xm(!0),ym=xm(!1),oo=Un(null),ao=null,Sr=null,Ec=null;function zc(){Ec=Sr=ao=null}function Tc(e){var t=oo.current;Te(oo),e._currentValue=t}function wl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ar(e,t){ao=e,Ec=Sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function $t(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},Sr===null){if(ao===null)throw Error(Y(308));Sr=e,ao.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return t}var Yn=null;function Pc(e){Yn===null?Yn=[e]:Yn.push(e)}function vm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,gn(e,r)}function gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function An(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,be&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gn(e,n)}return i=r.interleaved,i===null?(t.next=t,Pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,gn(e,n)}function Is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}function fd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lo(e,t,n,r){var i=e.updateQueue;wn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,d=u=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,b=l;switch(f=t,m=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=Me({},p,f);break e;case 2:wn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);or|=a,e.lanes=a,e.memoizedState=p}}function md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Y(191,i));i.call(r)}}}var ns={},nn=Un(ns),Fi=Un(ns),Bi=Un(ns);function Xn(e){if(e===ns)throw Error(Y(174));return e}function Ac(e,t){switch(Ne(Bi,t),Ne(Fi,e),Ne(nn,ns),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nl(t,e)}Te(nn),Ne(nn,t)}function Br(){Te(nn),Te(Fi),Te(Bi)}function km(e){Xn(Bi.current);var t=Xn(nn.current),n=nl(t,e.type);t!==n&&(Ne(Fi,e),Ne(nn,n))}function Rc(e){Fi.current===e&&(Te(nn),Te(Fi))}var Le=Un(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function Mc(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var Os=yn.ReactCurrentDispatcher,va=yn.ReactCurrentBatchConfig,sr=0,Re=null,He=null,Ge=null,uo=!1,ki=!1,Ui=0,ov=0;function tt(){throw Error(Y(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Kt(e[n],t[n]))return!1;return!0}function Oc(e,t,n,r,i,o){if(sr=o,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Os.current=e===null||e.memoizedState===null?uv:dv,e=n(r,i),ki){o=0;do{if(ki=!1,Ui=0,25<=o)throw Error(Y(301));o+=1,Ge=He=null,t.updateQueue=null,Os.current=pv,e=n(r,i)}while(ki)}if(Os.current=po,t=He!==null&&He.next!==null,sr=0,Ge=He=Re=null,uo=!1,t)throw Error(Y(300));return e}function $c(){var e=Ui!==0;return Ui=0,e}function Gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Re.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function Dt(){if(He===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ge===null?Re.memoizedState:Ge.next;if(t!==null)Ge=t,He=e;else{if(e===null)throw Error(Y(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ge===null?Re.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Vi(e,t){return typeof t=="function"?t(e):t}function ba(e){var t=Dt(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((sr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Re.lanes|=d,or|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Kt(r,t.memoizedState)||(ft=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Re.lanes|=o,or|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=Dt(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Kt(o,t.memoizedState)||(ft=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function wm(){}function jm(e,t){var n=Re,r=Dt(),i=t(),o=!Kt(r.memoizedState,i);if(o&&(r.memoizedState=i,ft=!0),r=r.queue,Dc(Cm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Wi(9,Sm.bind(null,n,r,i,t),void 0,null),Ye===null)throw Error(Y(349));sr&30||_m(n,t,i)}return i}function _m(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sm(e,t,n,r){t.value=n,t.getSnapshot=r,Nm(t)&&Em(e)}function Cm(e,t,n){return n(function(){Nm(t)&&Em(e)})}function Nm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Kt(e,n)}catch{return!0}}function Em(e){var t=gn(e,1);t!==null&&qt(t,e,1,-1)}function hd(e){var t=Gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},t.queue=e,e=e.dispatch=cv.bind(null,Re,e),[t.memoizedState,e]}function Wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function zm(){return Dt().memoizedState}function $s(e,t,n,r){var i=Gt();Re.flags|=e,i.memoizedState=Wi(1|t,n,void 0,r===void 0?null:r)}function Ro(e,t,n,r){var i=Dt();r=r===void 0?null:r;var o=void 0;if(He!==null){var a=He.memoizedState;if(o=a.destroy,r!==null&&Ic(r,a.deps)){i.memoizedState=Wi(t,n,o,r);return}}Re.flags|=e,i.memoizedState=Wi(1|t,n,o,r)}function gd(e,t){return $s(8390656,8,e,t)}function Dc(e,t){return Ro(2048,8,e,t)}function Tm(e,t){return Ro(4,2,e,t)}function Pm(e,t){return Ro(4,4,e,t)}function Lm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Am(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4,4,Lm.bind(null,t,e),n)}function Fc(){}function Rm(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mm(e,t){var n=Dt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Im(e,t,n){return sr&21?(Kt(n,t)||(n=Bf(),Re.lanes|=n,or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=n)}function av(e,t){var n=Se;Se=n!==0&&4>n?n:4,e(!0);var r=va.transition;va.transition={};try{e(!1),t()}finally{Se=n,va.transition=r}}function Om(){return Dt().memoizedState}function lv(e,t,n){var r=Mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$m(e))Dm(t,n);else if(n=vm(e,t,n,r),n!==null){var i=lt();qt(n,e,r,i),Fm(n,t,r)}}function cv(e,t,n){var r=Mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($m(e))Dm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,a)){var c=t.interleaved;c===null?(i.next=i,Pc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=vm(e,t,i,r),n!==null&&(i=lt(),qt(n,e,r,i),Fm(n,t,r))}}function $m(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function Dm(e,t){ki=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}var po={readContext:$t,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},uv={readContext:$t,useCallback:function(e,t){return Gt().memoizedState=[e,t===void 0?null:t],e},useContext:$t,useEffect:gd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$s(4194308,4,Lm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $s(4194308,4,e,t)},useInsertionEffect:function(e,t){return $s(4,2,e,t)},useMemo:function(e,t){var n=Gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lv.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=Gt();return e={current:e},t.memoizedState=e},useState:hd,useDebugValue:Fc,useDeferredValue:function(e){return Gt().memoizedState=e},useTransition:function(){var e=hd(!1),t=e[0];return e=av.bind(null,e[1]),Gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,i=Gt();if(Pe){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),Ye===null)throw Error(Y(349));sr&30||_m(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,gd(Cm.bind(null,r,o,e),[e]),r.flags|=2048,Wi(9,Sm.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Gt(),t=Ye.identifierPrefix;if(Pe){var n=dn,r=un;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ov++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dv={readContext:$t,useCallback:Rm,useContext:$t,useEffect:Dc,useImperativeHandle:Am,useInsertionEffect:Tm,useLayoutEffect:Pm,useMemo:Mm,useReducer:ba,useRef:zm,useState:function(){return ba(Vi)},useDebugValue:Fc,useDeferredValue:function(e){var t=Dt();return Im(t,He.memoizedState,e)},useTransition:function(){var e=ba(Vi)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:wm,useSyncExternalStore:jm,useId:Om,unstable_isNewReconciler:!1},pv={readContext:$t,useCallback:Rm,useContext:$t,useEffect:Dc,useImperativeHandle:Am,useInsertionEffect:Tm,useLayoutEffect:Pm,useMemo:Mm,useReducer:ka,useRef:zm,useState:function(){return ka(Vi)},useDebugValue:Fc,useDeferredValue:function(e){var t=Dt();return He===null?t.memoizedState=e:Im(t,He.memoizedState,e)},useTransition:function(){var e=ka(Vi)[0],t=Dt().memoizedState;return[e,t]},useMutableSource:wm,useSyncExternalStore:jm,useId:Om,unstable_isNewReconciler:!1};function Bt(e,t){if(e&&e.defaultProps){t=Me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lt(),i=Mn(e),o=pn(r,i);o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(qt(t,e,i,r),Is(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lt(),i=Mn(e),o=pn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=An(e,o,i),t!==null&&(qt(t,e,i,r),Is(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lt(),r=Mn(e),i=pn(n,r);i.tag=2,t!=null&&(i.callback=t),t=An(e,i,r),t!==null&&(qt(t,e,r,n),Is(t,e,r))}};function xd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,r)||!Ii(i,o):!0}function Bm(e,t,n){var r=!1,i=Dn,o=t.contextType;return typeof o=="object"&&o!==null?o=$t(o):(i=ht(t)?rr:it.current,r=t.contextTypes,o=(r=r!=null)?$r(e,i):Dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function _l(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Lc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=$t(o):(o=ht(t)?rr:it.current,i.context=$r(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(jl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mo.enqueueReplaceState(i,i.state,null),lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var n="",r=t;do n+=Fx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fv=typeof WeakMap=="function"?WeakMap:Map;function Um(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mo||(mo=!0,Ml=r),Sl(e,t)},n}function Vm(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Sl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Sl(e,t),typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function vd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Nv.bind(null,e,t,n),t.then(e,e))}function bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,An(n,t,1))),n.lanes|=1),e)}var mv=yn.ReactCurrentOwner,ft=!1;function at(e,t,n,r){t.child=e===null?ym(t,null,n,r):Fr(t,e.child,n,r)}function wd(e,t,n,r,i){n=n.render;var o=t.ref;return Ar(t,i),r=Oc(e,t,n,r,o,i),n=$c(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(Pe&&n&&Sc(t),t.flags|=1,at(e,t,r,i),t.child)}function jd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Kc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Wm(e,t,o,r,i)):(e=Us(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(a,r)&&e.ref===t.ref)return xn(e,t,i)}return t.flags|=1,e=In(o,r),e.ref=t.ref,e.return=t,t.child=e}function Wm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ii(o,r)&&e.ref===t.ref)if(ft=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,xn(e,t,i)}return Cl(e,t,n,r,i)}function Hm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Nr,kt),kt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(Nr,kt),kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ne(Nr,kt),kt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ne(Nr,kt),kt|=r;return at(e,t,i,n),t.child}function qm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,i){var o=ht(n)?rr:it.current;return o=$r(t,o),Ar(t,i),n=Oc(e,t,n,r,o,i),r=$c(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xn(e,t,i)):(Pe&&r&&Sc(t),t.flags|=1,at(e,t,n,i),t.child)}function _d(e,t,n,r,i){if(ht(n)){var o=!0;ro(t)}else o=!1;if(Ar(t,i),t.stateNode===null)Ds(e,t),Bm(t,n,r),_l(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=$t(u):(u=ht(n)?rr:it.current,u=$r(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&yd(t,a,r,u),wn=!1;var f=t.memoizedState;a.state=f,lo(t,r,a,i),c=t.memoizedState,l!==r||f!==c||mt.current||wn?(typeof d=="function"&&(jl(t,n,d,r),c=t.memoizedState),(l=wn||xd(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Bt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=$t(c):(c=ht(n)?rr:it.current,c=$r(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&yd(t,a,r,c),wn=!1,f=t.memoizedState,a.state=f,lo(t,r,a,i);var y=t.memoizedState;l!==p||f!==y||mt.current||wn?(typeof m=="function"&&(jl(t,n,m,r),y=t.memoizedState),(u=wn||xd(t,n,u,r,f,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,o,i)}function Nl(e,t,n,r,i,o){qm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&cd(t,n,!1),xn(e,t,o);r=t.stateNode,mv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Fr(t,e.child,null,o),t.child=Fr(t,null,l,o)):at(e,t,l,o),t.memoizedState=r.state,i&&cd(t,n,!0),t.child}function Jm(e){var t=e.stateNode;t.pendingContext?ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ld(e,t.context,!1),Ac(e,t.containerInfo)}function Sd(e,t,n,r,i){return Dr(),Nc(i),t.flags|=256,at(e,t,n,r),t.child}var El={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Km(e,t,n){var r=t.pendingProps,i=Le.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ne(Le,i&1),e===null)return kl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=$o(a,r,0,null),e=er(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=zl(n),t.memoizedState=El,e):Bc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=In(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=In(l,o):(o=er(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?zl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=El,r}return o=e.child,e=o.sibling,r=In(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bc(e,t){return t=$o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ws(e,t,n,r){return r!==null&&Nc(r),Fr(t,e.child,null,n),e=Bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=wa(Error(Y(422))),ws(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=$o({mode:"visible",children:r.children},i,0,null),o=er(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Fr(t,e.child,null,a),t.child.memoizedState=zl(a),t.memoizedState=El,o);if(!(t.mode&1))return ws(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(Y(419)),r=wa(o,r,void 0),ws(e,t,a,r)}if(l=(a&e.childLanes)!==0,ft||l){if(r=Ye,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,gn(e,i),qt(r,e,i,-1))}return Jc(),r=wa(Error(Y(421))),ws(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ev.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,jt=Ln(i.nextSibling),St=t,Pe=!0,Vt=null,e!==null&&(Lt[At++]=un,Lt[At++]=dn,Lt[At++]=ir,un=e.id,dn=e.overflow,ir=t),t=Bc(t,r.children),t.flags|=4096,t)}function Cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wl(e.return,t,n)}function ja(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Qm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(at(e,t,r.children,n),r=Le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,n,t);else if(e.tag===19)Cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ne(Le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ja(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ja(t,!0,n,null,o);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ds(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gv(e,t,n){switch(t.tag){case 3:Jm(t),Dr();break;case 5:km(t);break;case 1:ht(t.type)&&ro(t);break;case 4:Ac(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ne(oo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Le,Le.current&1),t.flags|=128,null):n&t.child.childLanes?Km(e,t,n):(Ne(Le,Le.current&1),e=xn(e,t,n),e!==null?e.sibling:null);Ne(Le,Le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ne(Le,Le.current),r)break;return null;case 22:case 23:return t.lanes=0,Hm(e,t,n)}return xn(e,t,n)}var Gm,Tl,Ym,Xm;Gm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tl=function(){};Ym=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xn(nn.current);var o=null;switch(n){case"input":i=Xa(e,i),r=Xa(e,r),o=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),o=[];break;case"textarea":i=tl(e,i),r=tl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}rl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ze("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Xm=function(e,t,n,r){n!==r&&(t.flags|=4)};function si(e,t){if(!Pe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xv(e,t,n){var r=t.pendingProps;switch(Cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(t),null;case 1:return ht(t.type)&&no(),nt(t),null;case 3:return r=t.stateNode,Br(),Te(mt),Te(it),Mc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&($l(Vt),Vt=null))),Tl(e,t),nt(t),null;case 5:Rc(t);var i=Xn(Bi.current);if(n=t.type,e!==null&&t.stateNode!=null)Ym(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Y(166));return nt(t),null}if(e=Xn(nn.current),bs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xt]=t,r[Di]=o,e=(t.mode&1)!==0,n){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(i=0;i<mi.length;i++)ze(mi[i],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":Mu(r,o),ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ze("invalid",r);break;case"textarea":Ou(r,o),ze("invalid",r)}rl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&vs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&vs(r.textContent,l,e),i=["children",""+l]):zi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ze("scroll",r)}switch(n){case"input":ds(r),Iu(r,o,!0);break;case"textarea":ds(r),$u(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=to)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xt]=t,e[Di]=r,Gm(e,t,!1,!1),t.stateNode=e;e:{switch(a=il(n,r),n){case"dialog":ze("cancel",e),ze("close",e),i=r;break;case"iframe":case"object":case"embed":ze("load",e),i=r;break;case"video":case"audio":for(i=0;i<mi.length;i++)ze(mi[i],e);i=r;break;case"source":ze("error",e),i=r;break;case"img":case"image":case"link":ze("error",e),ze("load",e),i=r;break;case"details":ze("toggle",e),i=r;break;case"input":Mu(e,r),i=Xa(e,r),ze("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),ze("invalid",e);break;case"textarea":Ou(e,r),i=tl(e,r),ze("invalid",e);break;default:i=r}rl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?zf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Nf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ti(e,c):typeof c=="number"&&Ti(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ze("scroll",e):c!=null&&dc(e,o,c,a))}switch(n){case"input":ds(e),Iu(e,r,!1);break;case"textarea":ds(e),$u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+$n(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?zr(e,!!r.multiple,o,!1):r.defaultValue!=null&&zr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return nt(t),null;case 6:if(e&&t.stateNode!=null)Xm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Y(166));if(n=Xn(Bi.current),Xn(nn.current),bs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(o=r.nodeValue!==n)&&(e=St,e!==null))switch(e.tag){case 3:vs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return nt(t),null;case 13:if(Te(Le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&jt!==null&&t.mode&1&&!(t.flags&128))gm(),Dr(),t.flags|=98560,o=!1;else if(o=bs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Y(317));o[Xt]=t}else Dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;nt(t),o=!1}else Vt!==null&&($l(Vt),Vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Le.current&1?qe===0&&(qe=3):Jc())),t.updateQueue!==null&&(t.flags|=4),nt(t),null);case 4:return Br(),Tl(e,t),e===null&&Oi(t.stateNode.containerInfo),nt(t),null;case 10:return Tc(t.type._context),nt(t),null;case 17:return ht(t.type)&&no(),nt(t),null;case 19:if(Te(Le),o=t.memoizedState,o===null)return nt(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)si(o,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=co(e),a!==null){for(t.flags|=128,si(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ne(Le,Le.current&1|2),t.child}e=e.sibling}o.tail!==null&&Oe()>Vr&&(t.flags|=128,r=!0,si(o,!1),t.lanes=4194304)}else{if(!r)if(e=co(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),si(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Pe)return nt(t),null}else 2*Oe()-o.renderingStartTime>Vr&&n!==1073741824&&(t.flags|=128,r=!0,si(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Oe(),t.sibling=null,n=Le.current,Ne(Le,r?n&1|2:n&1),t):(nt(t),null);case 22:case 23:return qc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?kt&1073741824&&(nt(t),t.subtreeFlags&6&&(t.flags|=8192)):nt(t),null;case 24:return null;case 25:return null}throw Error(Y(156,t.tag))}function yv(e,t){switch(Cc(t),t.tag){case 1:return ht(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),Te(mt),Te(it),Mc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rc(t),null;case 13:if(Te(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));Dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Le),null;case 4:return Br(),null;case 10:return Tc(t.type._context),null;case 22:case 23:return qc(),null;case 24:return null;default:return null}}var js=!1,rt=!1,vv=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function Pl(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var Nd=!1;function bv(e,t){if(ml=Xs,e=rm(),_c(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(hl={focusedElem:e,selectionRange:n},Xs=!1,ie=t;ie!==null;)if(t=ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ie=e;else for(;ie!==null;){t=ie;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,P=y.memoizedState,x=t.stateNode,g=x.getSnapshotBeforeUpdate(t.elementType===t.type?b:Bt(t.type,b),P);x.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(L){Ie(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,ie=e;break}ie=t.return}return y=Nd,Nd=!1,y}function wi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Pl(t,n,o)}i=i.next}while(i!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ll(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zm(e){var t=e.alternate;t!==null&&(e.alternate=null,Zm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[Di],delete t[yl],delete t[nv],delete t[rv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function eh(e){return e.tag===5||e.tag===3||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}var Xe=null,Ut=!1;function vn(e,t,n){for(n=n.child;n!==null;)th(e,t,n),n=n.sibling}function th(e,t,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Eo,n)}catch{}switch(n.tag){case 5:rt||Cr(n,t);case 6:var r=Xe,i=Ut;Xe=null,vn(e,t,n),Xe=r,Ut=i,Xe!==null&&(Ut?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Ut?(e=Xe,n=n.stateNode,e.nodeType===8?ga(e.parentNode,n):e.nodeType===1&&ga(e,n),Ri(e)):ga(Xe,n.stateNode));break;case 4:r=Xe,i=Ut,Xe=n.stateNode.containerInfo,Ut=!0,vn(e,t,n),Xe=r,Ut=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Pl(n,t,a),i=i.next}while(i!==r)}vn(e,t,n);break;case 1:if(!rt&&(Cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,t,l)}vn(e,t,n);break;case 21:vn(e,t,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,vn(e,t,n),rt=r):vn(e,t,n);break;default:vn(e,t,n)}}function zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vv),t.forEach(function(r){var i=zv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,Ut=!1;break e;case 3:Xe=l.stateNode.containerInfo,Ut=!0;break e;case 4:Xe=l.stateNode.containerInfo,Ut=!0;break e}l=l.return}if(Xe===null)throw Error(Y(160));th(o,a,i),Xe=null,Ut=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nh(t,e),t=t.sibling}function nh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Qt(e),r&4){try{wi(3,e,e.return),Io(3,e)}catch(b){Ie(e,e.return,b)}try{wi(5,e,e.return)}catch(b){Ie(e,e.return,b)}}break;case 1:Ft(t,e),Qt(e),r&512&&n!==null&&Cr(n,n.return);break;case 5:if(Ft(t,e),Qt(e),r&512&&n!==null&&Cr(n,n.return),e.flags&32){var i=e.stateNode;try{Ti(i,"")}catch(b){Ie(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&_f(i,o),il(l,a);var u=il(l,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?zf(i,p):d==="dangerouslySetInnerHTML"?Nf(i,p):d==="children"?Ti(i,p):dc(i,d,p,u)}switch(l){case"input":Za(i,o);break;case"textarea":Sf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?zr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?zr(i,!!o.multiple,o.defaultValue,!0):zr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Di]=o}catch(b){Ie(e,e.return,b)}}break;case 6:if(Ft(t,e),Qt(e),r&4){if(e.stateNode===null)throw Error(Y(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){Ie(e,e.return,b)}}break;case 3:if(Ft(t,e),Qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(b){Ie(e,e.return,b)}break;case 4:Ft(t,e),Qt(e);break;case 13:Ft(t,e),Qt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wc=Oe())),r&4&&zd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(rt=(u=rt)||d,Ft(t,e),rt=u):Ft(t,e),Qt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ie=e,d=e.child;d!==null;){for(p=ie=d;ie!==null;){switch(f=ie,m=f.child,f.tag){case 0:case 11:case 14:case 15:wi(4,f,f.return);break;case 1:Cr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){Ie(r,n,b)}}break;case 5:Cr(f,f.return);break;case 22:if(f.memoizedState!==null){Pd(p);continue}}m!==null?(m.return=f,ie=m):Pd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ef("display",a))}catch(b){Ie(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){Ie(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ft(t,e),Qt(e),r&4&&zd(e);break;case 21:break;default:Ft(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(eh(n)){var r=n;break e}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ti(i,""),r.flags&=-33);var o=Ed(e);Rl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ed(e);Al(e,l,a);break;default:throw Error(Y(161))}}catch(c){Ie(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kv(e,t,n){ie=e,rh(e)}function rh(e,t,n){for(var r=(e.mode&1)!==0;ie!==null;){var i=ie,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||js;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||rt;l=js;var u=rt;if(js=a,(rt=c)&&!u)for(ie=i;ie!==null;)a=ie,c=a.child,a.tag===22&&a.memoizedState!==null?Ld(i):c!==null?(c.return=a,ie=c):Ld(i);for(;o!==null;)ie=o,rh(o),o=o.sibling;ie=i,js=l,rt=u}Td(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ie=o):Td(e)}}function Td(e){for(;ie!==null;){var t=ie;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:rt||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Bt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&md(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}md(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ri(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}rt||t.flags&512&&Ll(t)}catch(f){Ie(t,t.return,f)}}if(t===e){ie=null;break}if(n=t.sibling,n!==null){n.return=t.return,ie=n;break}ie=t.return}}function Pd(e){for(;ie!==null;){var t=ie;if(t===e){ie=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ie=n;break}ie=t.return}}function Ld(e){for(;ie!==null;){var t=ie;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(c){Ie(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ie(t,i,c)}}var o=t.return;try{Ll(t)}catch(c){Ie(t,o,c)}break;case 5:var a=t.return;try{Ll(t)}catch(c){Ie(t,a,c)}}}catch(c){Ie(t,t.return,c)}if(t===e){ie=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ie=l;break}ie=t.return}}var wv=Math.ceil,fo=yn.ReactCurrentDispatcher,Uc=yn.ReactCurrentOwner,Ot=yn.ReactCurrentBatchConfig,be=0,Ye=null,Be=null,Ze=0,kt=0,Nr=Un(0),qe=0,Hi=null,or=0,Oo=0,Vc=0,ji=null,pt=null,Wc=0,Vr=1/0,ln=null,mo=!1,Ml=null,Rn=null,_s=!1,Cn=null,ho=0,_i=0,Il=null,Fs=-1,Bs=0;function lt(){return be&6?Oe():Fs!==-1?Fs:Fs=Oe()}function Mn(e){return e.mode&1?be&2&&Ze!==0?Ze&-Ze:sv.transition!==null?(Bs===0&&(Bs=Bf()),Bs):(e=Se,e!==0||(e=window.event,e=e===void 0?16:Kf(e.type)),e):1}function qt(e,t,n,r){if(50<_i)throw _i=0,Il=null,Error(Y(185));Zi(e,n,r),(!(be&2)||e!==Ye)&&(e===Ye&&(!(be&2)&&(Oo|=n),qe===4&&_n(e,Ze)),gt(e,r),n===1&&be===0&&!(t.mode&1)&&(Vr=Oe()+500,Ao&&Vn()))}function gt(e,t){var n=e.callbackNode;sy(e,t);var r=Ys(e,e===Ye?Ze:0);if(r===0)n!==null&&Bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bu(n),t===1)e.tag===0?iv(Ad.bind(null,e)):fm(Ad.bind(null,e)),ev(function(){!(be&6)&&Vn()}),n=null;else{switch(Uf(r)){case 1:n=gc;break;case 4:n=Df;break;case 16:n=Gs;break;case 536870912:n=Ff;break;default:n=Gs}n=dh(n,ih.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ih(e,t){if(Fs=-1,Bs=0,be&6)throw Error(Y(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=Ys(e,e===Ye?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=go(e,r);else{t=r;var i=be;be|=2;var o=oh();(Ye!==e||Ze!==t)&&(ln=null,Vr=Oe()+500,Zn(e,t));do try{Sv();break}catch(l){sh(e,l)}while(!0);zc(),fo.current=o,be=i,Be!==null?t=0:(Ye=null,Ze=0,t=qe)}if(t!==0){if(t===2&&(i=cl(e),i!==0&&(r=i,t=Ol(e,i))),t===1)throw n=Hi,Zn(e,0),_n(e,r),gt(e,Oe()),n;if(t===6)_n(e,r);else{if(i=e.current.alternate,!(r&30)&&!jv(i)&&(t=go(e,r),t===2&&(o=cl(e),o!==0&&(r=o,t=Ol(e,o))),t===1))throw n=Hi,Zn(e,0),_n(e,r),gt(e,Oe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Y(345));case 2:Kn(e,pt,ln);break;case 3:if(_n(e,r),(r&130023424)===r&&(t=Wc+500-Oe(),10<t)){if(Ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){lt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xl(Kn.bind(null,e,pt,ln),t);break}Kn(e,pt,ln);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ht(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wv(r/1960))-r,10<r){e.timeoutHandle=xl(Kn.bind(null,e,pt,ln),r);break}Kn(e,pt,ln);break;case 5:Kn(e,pt,ln);break;default:throw Error(Y(329))}}}return gt(e,Oe()),e.callbackNode===n?ih.bind(null,e):null}function Ol(e,t){var n=ji;return e.current.memoizedState.isDehydrated&&(Zn(e,t).flags|=256),e=go(e,t),e!==2&&(t=pt,pt=n,t!==null&&$l(t)),e}function $l(e){pt===null?pt=e:pt.push.apply(pt,e)}function jv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Kt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~Vc,t&=~Oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ht(t),r=1<<n;e[n]=-1,t&=~r}}function Ad(e){if(be&6)throw Error(Y(327));Rr();var t=Ys(e,0);if(!(t&1))return gt(e,Oe()),null;var n=go(e,t);if(e.tag!==0&&n===2){var r=cl(e);r!==0&&(t=r,n=Ol(e,r))}if(n===1)throw n=Hi,Zn(e,0),_n(e,t),gt(e,Oe()),n;if(n===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kn(e,pt,ln),gt(e,Oe()),null}function Hc(e,t){var n=be;be|=1;try{return e(t)}finally{be=n,be===0&&(Vr=Oe()+500,Ao&&Vn())}}function ar(e){Cn!==null&&Cn.tag===0&&!(be&6)&&Rr();var t=be;be|=1;var n=Ot.transition,r=Se;try{if(Ot.transition=null,Se=1,e)return e()}finally{Se=r,Ot.transition=n,be=t,!(be&6)&&Vn()}}function qc(){kt=Nr.current,Te(Nr)}function Zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zy(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(Cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:Br(),Te(mt),Te(it),Mc();break;case 5:Rc(r);break;case 4:Br();break;case 13:Te(Le);break;case 19:Te(Le);break;case 10:Tc(r.type._context);break;case 22:case 23:qc()}n=n.return}if(Ye=e,Be=e=In(e.current,null),Ze=kt=t,qe=0,Hi=null,Vc=Oo=or=0,pt=ji=null,Yn!==null){for(t=0;t<Yn.length;t++)if(n=Yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Yn=null}return e}function sh(e,t){do{var n=Be;try{if(zc(),Os.current=po,uo){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uo=!1}if(sr=0,Ge=He=Re=null,ki=!1,Ui=0,Uc.current=null,n===null||n.return===null){qe=1,Hi=t,Be=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Ze,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=bd(a);if(m!==null){m.flags&=-257,kd(m,a,l,o,t),m.mode&1&&vd(o,u,t),t=m,c=u;var y=t.updateQueue;if(y===null){var b=new Set;b.add(c),t.updateQueue=b}else y.add(c);break e}else{if(!(t&1)){vd(o,u,t),Jc();break e}c=Error(Y(426))}}else if(Pe&&l.mode&1){var P=bd(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),kd(P,a,l,o,t),Nc(Ur(c,l));break e}}o=c=Ur(c,l),qe!==4&&(qe=2),ji===null?ji=[o]:ji.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=Um(o,c,t);fd(o,x);break e;case 1:l=c;var g=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Rn===null||!Rn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var L=Vm(o,l,t);fd(o,L);break e}}o=o.return}while(o!==null)}lh(n)}catch(C){t=C,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function oh(){var e=fo.current;return fo.current=po,e===null?po:e}function Jc(){(qe===0||qe===3||qe===2)&&(qe=4),Ye===null||!(or&268435455)&&!(Oo&268435455)||_n(Ye,Ze)}function go(e,t){var n=be;be|=2;var r=oh();(Ye!==e||Ze!==t)&&(ln=null,Zn(e,t));do try{_v();break}catch(i){sh(e,i)}while(!0);if(zc(),be=n,fo.current=r,Be!==null)throw Error(Y(261));return Ye=null,Ze=0,qe}function _v(){for(;Be!==null;)ah(Be)}function Sv(){for(;Be!==null&&!Gx();)ah(Be)}function ah(e){var t=uh(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?lh(e):Be=t,Uc.current=null}function lh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yv(n,t),n!==null){n.flags&=32767,Be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,Be=null;return}}else if(n=xv(n,t,kt),n!==null){Be=n;return}if(t=t.sibling,t!==null){Be=t;return}Be=t=e}while(t!==null);qe===0&&(qe=5)}function Kn(e,t,n){var r=Se,i=Ot.transition;try{Ot.transition=null,Se=1,Cv(e,t,n,r)}finally{Ot.transition=i,Se=r}return null}function Cv(e,t,n,r){do Rr();while(Cn!==null);if(be&6)throw Error(Y(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(oy(e,o),e===Ye&&(Be=Ye=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_s||(_s=!0,dh(Gs,function(){return Rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ot.transition,Ot.transition=null;var a=Se;Se=1;var l=be;be|=4,Uc.current=null,bv(e,n),nh(n,e),qy(hl),Xs=!!ml,hl=ml=null,e.current=n,kv(n),Yx(),be=l,Se=a,Ot.transition=o}else e.current=n;if(_s&&(_s=!1,Cn=e,ho=i),o=e.pendingLanes,o===0&&(Rn=null),ey(n.stateNode),gt(e,Oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mo)throw mo=!1,e=Ml,Ml=null,e;return ho&1&&e.tag!==0&&Rr(),o=e.pendingLanes,o&1?e===Il?_i++:(_i=0,Il=e):_i=0,Vn(),null}function Rr(){if(Cn!==null){var e=Uf(ho),t=Ot.transition,n=Se;try{if(Ot.transition=null,Se=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,ho=0,be&6)throw Error(Y(331));var i=be;for(be|=4,ie=e.current;ie!==null;){var o=ie,a=o.child;if(ie.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ie=u;ie!==null;){var d=ie;switch(d.tag){case 0:case 11:case 15:wi(8,d,o)}var p=d.child;if(p!==null)p.return=d,ie=p;else for(;ie!==null;){d=ie;var f=d.sibling,m=d.return;if(Zm(d),d===u){ie=null;break}if(f!==null){f.return=m,ie=f;break}ie=m}}}var y=o.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var P=b.sibling;b.sibling=null,b=P}while(b!==null)}}ie=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ie=a;else e:for(;ie!==null;){if(o=ie,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wi(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,ie=x;break e}ie=o.return}}var g=e.current;for(ie=g;ie!==null;){a=ie;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,ie=h;else e:for(a=g;ie!==null;){if(l=ie,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Io(9,l)}}catch(C){Ie(l,l.return,C)}if(l===a){ie=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,ie=L;break e}ie=l.return}}if(be=i,Vn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Eo,e)}catch{}r=!0}return r}finally{Se=n,Ot.transition=t}}return!1}function Rd(e,t,n){t=Ur(n,t),t=Um(e,t,1),e=An(e,t,1),t=lt(),e!==null&&(Zi(e,1,t),gt(e,t))}function Ie(e,t,n){if(e.tag===3)Rd(e,e,n);else for(;t!==null;){if(t.tag===3){Rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))){e=Ur(n,e),e=Vm(t,e,1),t=An(t,e,1),e=lt(),t!==null&&(Zi(t,1,e),gt(t,e));break}}t=t.return}}function Nv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&n,Ye===e&&(Ze&n)===n&&(qe===4||qe===3&&(Ze&130023424)===Ze&&500>Oe()-Wc?Zn(e,0):Vc|=n),gt(e,t)}function ch(e,t){t===0&&(e.mode&1?(t=ms,ms<<=1,!(ms&130023424)&&(ms=4194304)):t=1);var n=lt();e=gn(e,t),e!==null&&(Zi(e,t,n),gt(e,n))}function Ev(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ch(e,n)}function zv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(t),ch(e,n)}var uh;uh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||mt.current)ft=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ft=!1,gv(e,t,n);ft=!!(e.flags&131072)}else ft=!1,Pe&&t.flags&1048576&&mm(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ds(e,t),e=t.pendingProps;var i=$r(t,it.current);Ar(t,n),i=Oc(null,t,r,e,i,n);var o=$c();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ht(r)?(o=!0,ro(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lc(t),i.updater=Mo,t.stateNode=i,i._reactInternals=t,_l(t,r,e,n),t=Nl(null,t,r,!0,o,n)):(t.tag=0,Pe&&o&&Sc(t),at(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ds(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pv(r),e=Bt(r,e),i){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=_d(null,t,r,e,n);break e;case 11:t=wd(null,t,r,e,n);break e;case 14:t=jd(null,t,r,Bt(r.type,e),n);break e}throw Error(Y(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),Cl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),_d(e,t,r,i,n);case 3:e:{if(Jm(t),e===null)throw Error(Y(387));r=t.pendingProps,o=t.memoizedState,i=o.element,bm(e,t),lo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ur(Error(Y(423)),t),t=Sd(e,t,r,n,i);break e}else if(r!==i){i=Ur(Error(Y(424)),t),t=Sd(e,t,r,n,i);break e}else for(jt=Ln(t.stateNode.containerInfo.firstChild),St=t,Pe=!0,Vt=null,n=ym(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dr(),r===i){t=xn(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return km(t),e===null&&kl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,gl(r,i)?a=null:o!==null&&gl(r,o)&&(t.flags|=32),qm(e,t),at(e,t,a,n),t.child;case 6:return e===null&&kl(t),null;case 13:return Km(e,t,n);case 4:return Ac(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fr(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),wd(e,t,r,i,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ne(oo,r._currentValue),r._currentValue=a,o!==null)if(Kt(o.value,a)){if(o.children===i.children&&!mt.current){t=xn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=pn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),wl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(Y(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),wl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}at(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ar(t,n),i=$t(i),r=r(i),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,i=Bt(r,t.pendingProps),i=Bt(r.type,i),jd(e,t,r,i,n);case 15:return Wm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bt(r,i),Ds(e,t),t.tag=1,ht(r)?(e=!0,ro(t)):e=!1,Ar(t,n),Bm(t,r,i),_l(t,r,i,n),Nl(null,t,r,!0,e,n);case 19:return Qm(e,t,n);case 22:return Hm(e,t,n)}throw Error(Y(156,t.tag))};function dh(e,t){return $f(e,t)}function Tv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,r){return new Tv(e,t,n,r)}function Kc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pv(e){if(typeof e=="function")return Kc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fc)return 11;if(e===mc)return 14}return 2}function In(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Us(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Kc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case xr:return er(n.children,i,o,t);case pc:a=8,i|=8;break;case Ka:return e=Mt(12,n,t,i|2),e.elementType=Ka,e.lanes=o,e;case Qa:return e=Mt(13,n,t,i),e.elementType=Qa,e.lanes=o,e;case Ga:return e=Mt(19,n,t,i),e.elementType=Ga,e.lanes=o,e;case kf:return $o(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vf:a=10;break e;case bf:a=9;break e;case fc:a=11;break e;case mc:a=14;break e;case kn:a=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return t=Mt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function er(e,t,n,r){return e=Mt(7,e,r,t),e.lanes=n,e}function $o(e,t,n,r){return e=Mt(22,e,r,t),e.elementType=kf,e.lanes=n,e.stateNode={isHidden:!1},e}function _a(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Sa(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qc(e,t,n,r,i,o,a,l,c){return e=new Lv(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Mt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(o),e}function Av(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ph(e){if(!e)return Dn;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(Y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Y(171))}if(e.tag===1){var n=e.type;if(ht(n))return pm(e,n,t)}return t}function fh(e,t,n,r,i,o,a,l,c){return e=Qc(n,r,!0,e,i,o,a,l,c),e.context=ph(null),n=e.current,r=lt(),i=Mn(n),o=pn(r,i),o.callback=t??null,An(n,o,i),e.current.lanes=i,Zi(e,i,r),gt(e,r),e}function Do(e,t,n,r){var i=t.current,o=lt(),a=Mn(i);return n=ph(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=An(i,t,a),e!==null&&(qt(e,i,a,o),Is(e,i,a)),a}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gc(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function Rv(){return null}var mh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}Fo.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));Do(e,t,null,null)};Fo.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){Do(null,e,null,null)}),t[hn]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&Jf(e)}};function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Id(){}function Mv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=xo(a);o.call(u)}}var a=fh(t,r,e,0,null,!1,!1,"",Id);return e._reactRootContainer=a,e[hn]=a.current,Oi(e.nodeType===8?e.parentNode:e),ar(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=xo(c);l.call(u)}}var c=Qc(e,0,!1,null,null,!1,!1,"",Id);return e._reactRootContainer=c,e[hn]=c.current,Oi(e.nodeType===8?e.parentNode:e),ar(function(){Do(t,c,n,r)}),c}function Uo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=xo(a);l.call(c)}}Do(t,a,e,i)}else a=Mv(n,t,e,i,r);return xo(a)}Vf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fi(t.pendingLanes);n!==0&&(xc(t,n|1),gt(t,Oe()),!(be&6)&&(Vr=Oe()+500,Vn()))}break;case 13:ar(function(){var r=gn(e,1);if(r!==null){var i=lt();qt(r,e,1,i)}}),Gc(e,1)}};yc=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var n=lt();qt(t,e,134217728,n)}Gc(e,134217728)}};Wf=function(e){if(e.tag===13){var t=Mn(e),n=gn(e,t);if(n!==null){var r=lt();qt(n,e,t,r)}Gc(e,t)}};Hf=function(){return Se};qf=function(e,t){var n=Se;try{return Se=e,t()}finally{Se=n}};ol=function(e,t,n){switch(t){case"input":if(Za(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Lo(r);if(!i)throw Error(Y(90));jf(r),Za(r,i)}}}break;case"textarea":Sf(e,n);break;case"select":t=n.value,t!=null&&zr(e,!!n.multiple,t,!1)}};Lf=Hc;Af=ar;var Iv={usingClientEntryPoint:!1,Events:[ts,kr,Lo,Tf,Pf,Hc]},oi={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ov={bundleType:oi.bundleType,version:oi.version,rendererPackageName:oi.rendererPackageName,rendererConfig:oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:oi.findFiberByHostInstance||Rv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{Eo=Ss.inject(Ov),tn=Ss}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;Nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(t))throw Error(Y(200));return Av(e,t,null,n)};Nt.createRoot=function(e,t){if(!Xc(e))throw Error(Y(299));var n=!1,r="",i=mh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qc(e,1,!1,null,null,n,!1,r,i),e[hn]=t.current,Oi(e.nodeType===8?e.parentNode:e),new Yc(t)};Nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};Nt.flushSync=function(e){return ar(e)};Nt.hydrate=function(e,t,n){if(!Bo(t))throw Error(Y(200));return Uo(null,e,t,!0,n)};Nt.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=mh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=fh(t,null,e,1,n??null,i,!1,o,a),e[hn]=t.current,Oi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Fo(t)};Nt.render=function(e,t,n){if(!Bo(t))throw Error(Y(200));return Uo(null,e,t,!1,n)};Nt.unmountComponentAtNode=function(e){if(!Bo(e))throw Error(Y(40));return e._reactRootContainer?(ar(function(){Uo(null,null,e,!1,function(){e._reactRootContainer=null,e[hn]=null})}),!0):!1};Nt.unstable_batchedUpdates=Hc;Nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bo(n))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return Uo(e,t,n,!1,r)};Nt.version="18.3.1-next-f1338f8080-20240426";function hh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hh)}catch(e){console.error(e)}}hh(),hf.exports=Nt;var gh=hf.exports,Od=gh;qa.createRoot=Od.createRoot,qa.hydrateRoot=Od.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}var Nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nn||(Nn={}));const $d="popstate";function $v(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Dl("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:xh(i)}return Fv(t,n,null,e)}function Ve(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Dv(){return Math.random().toString(36).substr(2,8)}function Dd(e,t){return{usr:e.state,key:e.key,idx:t}}function Dl(e,t,n,r){return n===void 0&&(n=null),qi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Gr(t):t,{state:n,key:t&&t.key||r||Dv()})}function xh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Nn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(qi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=Nn.Pop;let P=d(),x=P==null?null:P-u;u=P,c&&c({action:l,location:b.location,delta:x})}function f(P,x){l=Nn.Push;let g=Dl(b.location,P,x);u=d()+1;let h=Dd(g,u),L=b.createHref(g);try{a.pushState(h,"",L)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(L)}o&&c&&c({action:l,location:b.location,delta:1})}function m(P,x){l=Nn.Replace;let g=Dl(b.location,P,x);u=d();let h=Dd(g,u),L=b.createHref(g);a.replaceState(h,"",L),o&&c&&c({action:l,location:b.location,delta:0})}function y(P){let x=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof P=="string"?P:xh(P);return g=g.replace(/ $/,"%20"),Ve(x,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,x)}let b={get action(){return l},get location(){return e(i,a)},listen(P){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener($d,p),c=P,()=>{i.removeEventListener($d,p),c=null}},createHref(P){return t(i,P)},createURL:y,encodeLocation(P){let x=y(P);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:m,go(P){return a.go(P)}};return b}var Fd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fd||(Fd={}));function Bv(e,t,n){return n===void 0&&(n="/"),Uv(e,t,n)}function Uv(e,t,n,r){let i=typeof t=="string"?Gr(t):t,o=bh(i.pathname||"/",n);if(o==null)return null;let a=yh(e);Vv(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=t1(o);l=Xv(a[c],u)}return l}function yh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Ve(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=tr([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Ve(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),yh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Gv(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of vh(o.path))i(o,a,c)}),t}function vh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=vh(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Vv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wv=/^:[\w-]+$/,Hv=3,qv=2,Jv=1,Kv=10,Qv=-2,Bd=e=>e==="*";function Gv(e,t){let n=e.split("/"),r=n.length;return n.some(Bd)&&(r+=Qv),t&&(r+=qv),n.filter(i=>!Bd(i)).reduce((i,o)=>i+(Wv.test(o)?Hv:o===""?Jv:Kv),r)}function Yv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Xv(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Zv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:tr([o,p.pathname]),pathnameBase:o1(tr([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=tr([o,p.pathnameBase]))}return a}function Zv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=e1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let b=l[p]||"";a=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const y=l[p];return m&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function e1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function t1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function bh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const n1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,r1=e=>n1.test(e);function i1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Gr(e):e,o;if(n)if(r1(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Zc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Ud(n.substring(1),"/"):o=Ud(n,t)}else o=t;return{pathname:o,search:a1(r),hash:l1(i)}}function Ud(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ca(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function s1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function kh(e,t){let n=s1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function wh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Gr(e):(i=qi({},e),Ve(!i.pathname||!i.pathname.includes("?"),Ca("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),Ca("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),Ca("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=i1(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const tr=e=>e.join("/").replace(/\/\/+/g,"/"),o1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),a1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,l1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function c1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jh=["post","put","patch","delete"];new Set(jh);const u1=["get",...jh];new Set(u1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ji.apply(this,arguments)}const eu=_.createContext(null),d1=_.createContext(null),rs=_.createContext(null),Vo=_.createContext(null),Wn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),_h=_.createContext(null);function is(){return _.useContext(Vo)!=null}function tu(){return is()||Ve(!1),_.useContext(Vo).location}function Sh(e){_.useContext(rs).static||_.useLayoutEffect(e)}function nu(){let{isDataRoute:e}=_.useContext(Wn);return e?S1():p1()}function p1(){is()||Ve(!1);let e=_.useContext(eu),{basename:t,future:n,navigator:r}=_.useContext(rs),{matches:i}=_.useContext(Wn),{pathname:o}=tu(),a=JSON.stringify(kh(i,n.v7_relativeSplatPath)),l=_.useRef(!1);return Sh(()=>{l.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=wh(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:tr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function f1(){let{matches:e}=_.useContext(Wn),t=e[e.length-1];return t?t.params:{}}function m1(e,t){return h1(e,t)}function h1(e,t,n,r){is()||Ve(!1);let{navigator:i}=_.useContext(rs),{matches:o}=_.useContext(Wn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=tu(),d;if(t){var p;let P=typeof t=="string"?Gr(t):t;c==="/"||(p=P.pathname)!=null&&p.startsWith(c)||Ve(!1),d=P}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let P=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(P.length).join("/")}let y=Bv(e,{pathname:m}),b=b1(y&&y.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:tr([c,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?c:tr([c,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),o,n,r);return t&&b?_.createElement(Vo.Provider,{value:{location:Ji({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Nn.Pop}},b):b}function g1(){let e=_1(),t=c1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const x1=_.createElement(g1,null);class y1 extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Wn.Provider,{value:this.props.routeContext},_.createElement(_h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function v1(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(eu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Wn.Provider,{value:t},r)}function b1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ve(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,y=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,y=!1,b=null,P=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||x1,c&&(u<0&&f===0?(C1("route-fallback"),y=!0,P=null):u===f&&(y=!0,P=p.route.hydrateFallbackElement||null)));let x=t.concat(a.slice(0,f+1)),g=()=>{let h;return m?h=b:y?h=P:p.route.Component?h=_.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,_.createElement(v1,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?_.createElement(y1,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:g(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):g()},null)}var Ch=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ch||{}),Nh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Nh||{});function k1(e){let t=_.useContext(eu);return t||Ve(!1),t}function w1(e){let t=_.useContext(d1);return t||Ve(!1),t}function j1(e){let t=_.useContext(Wn);return t||Ve(!1),t}function Eh(e){let t=j1(),n=t.matches[t.matches.length-1];return n.route.id||Ve(!1),n.route.id}function _1(){var e;let t=_.useContext(_h),n=w1(),r=Eh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function S1(){let{router:e}=k1(Ch.UseNavigateStable),t=Eh(Nh.UseNavigateStable),n=_.useRef(!1);return Sh(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ji({fromRouteId:t},o)))},[e,t])}const Vd={};function C1(e,t,n){Vd[e]||(Vd[e]=!0)}function N1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function E1(e){let{to:t,replace:n,state:r,relative:i}=e;is()||Ve(!1);let{future:o,static:a}=_.useContext(rs),{matches:l}=_.useContext(Wn),{pathname:c}=tu(),u=nu(),d=wh(t,kh(l,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return _.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function hr(e){Ve(!1)}function z1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Nn.Pop,navigator:o,static:a=!1,future:l}=e;is()&&Ve(!1);let c=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:c,navigator:o,static:a,future:Ji({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=Gr(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:y="default"}=r,b=_.useMemo(()=>{let P=bh(d,c);return P==null?null:{location:{pathname:P,search:p,hash:f,state:m,key:y},navigationType:i}},[c,d,p,f,m,y,i]);return b==null?null:_.createElement(rs.Provider,{value:u},_.createElement(Vo.Provider,{children:n,value:b}))}function T1(e){let{children:t,location:n}=e;return m1(Fl(t),n)}new Promise(()=>{});function Fl(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,Fl(r.props.children,o));return}r.type!==hr&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Fl(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const P1="6";try{window.__reactRouterVersion=P1}catch{}const L1="startTransition",Wd=Nx[L1];function A1(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=$v({window:i,v5Compat:!0}));let a=o.current,[l,c]=_.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=_.useCallback(p=>{u&&Wd?Wd(()=>c(p)):c(p)},[c,u]);return _.useLayoutEffect(()=>a.listen(d),[a,d]),_.useEffect(()=>N1(r),[r]),_.createElement(z1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hd||(Hd={}));var qd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qd||(qd={}));const R1={},Jd=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(y=>y(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(R1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},M1=e=>e?Jd(e):Jd;var zh={exports:{}},Th={},Ph={exports:{}},Lh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr=_;function I1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O1=typeof Object.is=="function"?Object.is:I1,$1=Wr.useState,D1=Wr.useEffect,F1=Wr.useLayoutEffect,B1=Wr.useDebugValue;function U1(e,t){var n=t(),r=$1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return F1(function(){i.value=n,i.getSnapshot=t,Na(i)&&o({inst:i})},[e,n,t]),D1(function(){return Na(i)&&o({inst:i}),e(function(){Na(i)&&o({inst:i})})},[e]),B1(n),n}function Na(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!O1(e,n)}catch{return!0}}function V1(e,t){return t()}var W1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?V1:U1;Lh.useSyncExternalStore=Wr.useSyncExternalStore!==void 0?Wr.useSyncExternalStore:W1;Ph.exports=Lh;var H1=Ph.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=_,q1=H1;function J1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var K1=typeof Object.is=="function"?Object.is:J1,Q1=q1.useSyncExternalStore,G1=Wo.useRef,Y1=Wo.useEffect,X1=Wo.useMemo,Z1=Wo.useDebugValue;Th.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=G1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=X1(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var y=a.value;if(i(y,m))return p=y}return p=m}if(y=p,K1(d,m))return y;var b=r(m);return i!==void 0&&i(y,b)?(d=m,y):(d=m,p=b)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=Q1(e,o[0],o[1]);return Y1(function(){a.hasValue=!0,a.value=l},[l]),Z1(l),l};zh.exports=Th;var e0=zh.exports;const t0=Co(e0),Ah={},{useDebugValue:n0}=It,{useSyncExternalStoreWithSelector:r0}=t0;let Kd=!1;const i0=e=>e;function s0(e,t=i0,n){(Ah?"production":void 0)!=="production"&&n&&!Kd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Kd=!0);const r=r0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return n0(r),r}const Qd=e=>{(Ah?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?M1(e):e,n=(r,i)=>s0(t,r,i);return Object.assign(n,t),n},o0=e=>e?Qd(e):Qd,st=o0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Rh="/api";async function ke(e,t){const n=await fetch(`${Rh}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Mh(){return(await ke("/projects")).projects}async function Ih(e){return(await ke(`/projects/${e}`)).project}async function Oh(e,t=""){return(await ke("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Bl(e,t){return(await ke(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function $h(e){await ke(`/projects/${e}`,{method:"DELETE"})}async function Dh(e){return ke(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Ul(e){return(await ke(`/projects/${e}/sessions`)).sessions}async function Fh(e,t){return(await ke(`/projects/${e}/sessions/${t}/load`)).session}async function Bh(e){return(await ke(`/projects/${e}/yaml`)).yaml}async function Uh(e,t){return(await ke(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function ru(){return(await ke("/mcp-servers")).servers}async function Vh(){return(await ke("/builtin-tools")).tools}function Wh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Vs(e,t,n,r){return await ke(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Hh(e,t){return await ke(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function qh(e,t,n,r=[],i){return await ke(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Jh(e,t,n,r,i=[],o){return await ke(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function Kh(e){return await ke("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Qh(e,t){return ke(`/projects/${e}/skillsets/${t}/stats`)}async function Gh(e,t,n,r,i=500,o=50){return ke(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:o})})}async function Yh(e,t,n,r=500,i=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(i));const a=await fetch(`${Rh}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Xh(e,t,n,r=10,i=0){return ke(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Zh(e,t){return ke(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function eg(){return ke("/skillsets/embeddings-available")}const De={async get(e){return ke(e)},async post(e,t){return ke(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return ke(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return ke(e,{method:"DELETE"})}},a0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Gh,api:De,checkEmbeddingsAvailable:eg,clearSkillSet:Zh,createProject:Oh,createRunWebSocket:Wh,deleteProject:$h,fetchJSON:ke,generateAgentConfig:Hh,generateCallbackCode:Jh,generatePrompt:Vs,generateToolCode:qh,getBuiltinTools:Vh,getMcpServers:ru,getProject:Ih,getProjectYaml:Bh,getSkillSetStats:Qh,listProjectSessions:Ul,listProjects:Mh,loadSession:Fh,saveSessionToMemory:Dh,searchSkillSet:Xh,testMcpServer:Kh,updateProject:Bl,updateProjectFromYaml:Uh,uploadSkillSetFile:Yh},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),le=(e,t)=>{const n=_.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>_.createElement("svg",{ref:d,...l0,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${c0(e)}`,l].join(" "),...u},[...t.map(([p,f])=>_.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=le("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=le("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=le("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=le("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=le("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=le("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=le("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=le("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=le("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=le("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=le("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=le("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=le("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=le("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=le("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=le("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=le("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=le("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=le("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=le("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=le("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=le("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=le("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=le("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=le("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=le("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=le("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=le("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=le("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=le("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=le("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=le("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=le("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=le("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=le("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=le("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=le("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=le("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=le("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=le("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=le("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=le("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=le("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=le("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=le("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=le("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=le("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=le("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=le("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=le("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=le("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=le("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=le("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=le("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=le("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=le("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=le("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function S0(){const e=nu(),[t,n]=_.useState([]),[r,i]=_.useState(!0),[o,a]=_.useState(!1),[l,c]=_.useState("");_.useEffect(()=>{u()},[]);async function u(){try{const f=await Mh();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Oh(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await $h(f),n(t.filter(y=>y.id!==f))}catch(y){console.error("Failed to delete project:",y)}}return s.jsxs("div",{className:"project-list",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"logo",children:[s.jsx(lu,{size:40,className:"logo-icon"}),s.jsx("h1",{className:"title",children:"ADK Playground"})]}),s.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),s.jsxs("div",{className:"content",children:[o?s.jsxs("div",{className:"create-form",children:[s.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),s.jsxs("button",{className:"btn btn-primary",onClick:d,children:[s.jsx(Ue,{size:18}),"Create"]}),s.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):s.jsx("div",{className:"create-form",children:s.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[s.jsx(Ue,{size:18}),"New Project"]})}),r?s.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Gd,{size:48,style:{marginBottom:16,opacity:.3}}),s.jsx("p",{children:"No projects yet. Create one to get started!"})]}):s.jsx("div",{className:"projects-grid",children:t.map(f=>s.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[s.jsxs("h3",{children:[s.jsx(Gd,{size:18}),f.name]}),s.jsx("p",{children:f.description||"No description"}),s.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:s.jsx(Ae,{size:16})})]},f.id))})]})]})}const Zd={},C0=5*60*1e3;function N0({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:o="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=_.useState(t||""),[u,d]=_.useState(!1),[p,f]=_.useState([]),[m,y]=_.useState(!1),[b,P]=_.useState(null),[x,g]=_.useState(-1),[h,L]=_.useState({top:0,left:0,width:0}),C=_.useRef(null),w=_.useRef(null);_.useEffect(()=>{if(u&&C.current){const U=C.current.getBoundingClientRect();L({top:U.bottom+window.scrollY+4,left:U.left+window.scrollX,width:U.width})}},[u]);const S=_.useCallback(async()=>{const U=Zd[a];if(U&&Date.now()-U.timestamp<C0){const F=[];Object.values(U.providers).forEach(X=>{F.push(...X.models)}),f(F);return}y(!0),P(null);try{const F=new URLSearchParams;n&&F.append("provider",n),r&&F.append("api_base",r);const X=`/models/${e}${F.toString()?"?"+F.toString():""}`,T=await De.get(X);Zd[a]={providers:T.providers,timestamp:Date.now()};const D=[];Object.values(T.providers).forEach(M=>{M.models&&M.models.length>0&&D.push(...M.models)}),f(D)}catch(F){P(F.message||"Failed to fetch models")}finally{y(!1)}},[e,a,r,n]);_.useEffect(()=>{S()},[S]),_.useEffect(()=>{c(t||"")},[t]);const k=p.filter(U=>{const F=l.toLowerCase();return U.id.toLowerCase().includes(F)||U.name.toLowerCase().includes(F)||U.provider.toLowerCase().includes(F)});_.useEffect(()=>{const U=F=>{w.current&&!w.current.contains(F.target)&&C.current&&!C.current.contains(F.target)&&d(!1)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);const A=U=>{if(!u){(U.key==="ArrowDown"||U.key==="Enter")&&(d(!0),U.preventDefault());return}switch(U.key){case"ArrowDown":g(F=>Math.min(F+1,k.length-1)),U.preventDefault();break;case"ArrowUp":g(F=>Math.max(F-1,0)),U.preventDefault();break;case"Enter":x>=0&&x<k.length&&N(k[x]),U.preventDefault();break;case"Escape":d(!1);break}},N=U=>{c(U.id),i(U.id,U.provider),d(!1)},v=U=>{c(U.target.value),d(!0),g(-1),i(U.target.value,n||"gemini")},E=U=>{switch(U.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"ollama":return"provider-ollama";default:return"provider-other"}},B=u?s.jsxs("div",{ref:w,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:h.top,left:h.left,width:h.width},children:[m&&s.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),b&&s.jsx("div",{className:"model-autocomplete-error",children:b}),!m&&!b&&k.length===0&&s.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!m&&k.length>0&&s.jsxs("div",{className:"model-autocomplete-list",children:[k.slice(0,50).map((U,F)=>s.jsxs("div",{className:`model-autocomplete-item ${F===x?"highlighted":""}`,onClick:()=>N(U),onMouseEnter:()=>g(F),children:[s.jsx("span",{className:`provider-badge ${E(U.provider)}`,children:U.provider}),s.jsx("span",{className:"model-id",children:U.id}),U.context_window&&s.jsxs("span",{className:"model-context",title:`${U.context_window.toLocaleString()} token context`,children:[Math.round(U.context_window/1e3),"K"]}),U.supports_tools&&s.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),U.supports_vision&&s.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),U.supports_json_mode&&s.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${U.provider}-${U.id}`)),k.length>50&&s.jsxs("div",{className:"model-autocomplete-more",children:["+",k.length-50," more..."]})]})]}):null;return s.jsxs("div",{className:"model-autocomplete",children:[s.jsx("input",{ref:C,type:"text",value:l,onChange:v,onFocus:()=>d(!0),onKeyDown:A,placeholder:o,className:"model-autocomplete-input"}),B&&gh.createPortal(B,document.body)]})}const E0=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"litellm",label:"LiteLLM / Other"}];function z0(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function dg({projectId:e,values:t,onChange:n,className:r=""}){return s.jsxs("div",{className:`model-config-form ${r}`,children:[s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",style:{flex:1},children:[s.jsx("label",{children:"Provider"}),s.jsx("select",{value:t.provider||"gemini",onChange:i=>n({provider:i.target.value}),children:E0.map(i=>s.jsx("option",{value:i.value,children:i.label},i.value))})]}),s.jsxs("div",{className:"model-config-field",style:{flex:3},children:[s.jsx("label",{children:"Model"}),s.jsx(N0,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(i,o)=>{const a=z0(i,o);n({model_name:i,provider:a})},placeholder:"Search models..."})]}),t.provider==="litellm"&&s.jsxs("div",{className:"model-config-field",style:{flex:2},children:[s.jsx("label",{children:"API Base"}),s.jsx("input",{type:"text",value:t.api_base||"",onChange:i=>n({api_base:i.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Temperature"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:i=>n({temperature:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Max Tokens"}),s.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:i=>n({max_output_tokens:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top P"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:i=>n({top_p:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top K"}),s.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:i=>n({top_k:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]})]})]})}const T0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function P0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function L0(){const{project:e,updateProject:t}=st(),[n,r]=_.useState(null);if(!e)return null;const{app:i}=e;function o(v){t({app:{...i,...v}})}function a(v){if(v===""){r(null),o({name:v});return}P0(v)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:v})}function l(){const v={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,v]})}function c(v,E){const B=[...i.state_keys];B[v]={...B[v],...E},o({state_keys:B})}function u(v){o({state_keys:i.state_keys.filter((E,B)=>B!==v)})}function d(v="ReflectAndRetryToolPlugin"){let E;switch(v){case"ReflectAndRetryToolPlugin":E={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":E={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":E={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":E={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":E={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":E={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:E={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...i.plugins,E]})}function p(v,E){const B=[...i.plugins];B[v]={...B[v],...E},o({plugins:B})}function f(v){o({plugins:i.plugins.filter((E,B)=>B!==v)})}const m=i.models||[];function y(){const v=`model_${Date.now().toString(36)}`,E={id:v,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};o({models:[...m,E],default_model_id:m.length===0?v:i.default_model_id})}function b(v,E){const B=m.map(U=>U.id===v?{...U,...E}:U);o({models:B})}function P(v){var U;const E=m.filter(F=>F.id!==v),B=i.default_model_id===v?((U=E[0])==null?void 0:U.id)||void 0:i.default_model_id;o({models:E,default_model_id:B})}function x(v){o({default_model_id:v})}const g=i.env_vars||{},[h,L]=_.useState({}),[C,w]=_.useState("");function S(v=""){const E=v||C.trim();!E||g[E]!==void 0||(o({env_vars:{...g,[E]:""}}),w(""))}function k(v,E){o({env_vars:{...g,[v]:E}})}function A(v){const E={...g};delete E[v],o({env_vars:E})}function N(v){L(E=>({...E,[v]:!E[v]}))}return s.jsxs("div",{className:"app-config",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(w0,{size:20}),"Basic Information"]})}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"App Name"}),s.jsx("input",{type:"text",value:i.name,onChange:v=>a(v.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Root Agent"}),s.jsxs("select",{value:i.root_agent_id||"",onChange:v=>o({root_agent_id:v.target.value||void 0}),children:[s.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(v=>s.jsx("option",{value:v.id,children:v.name},v.id))]})]}),s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:i.description,onChange:v=>o({description:v.target.value}),rows:2})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(fn,{size:20}),"Services"]}),s.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Session Service"}),s.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;o({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[E]||E+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System (JSON)"}),s.jsx("option",{value:"sqlite",children:"SQLite (local)"}),s.jsx("option",{value:"postgresql",children:"PostgreSQL"}),s.jsx("option",{value:"mysql",children:"MySQL"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:v=>o({session_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:v=>o({session_service_uri:"sqlite://"+v.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&s.jsx("input",{type:"text",value:i.session_service_uri,onChange:v=>o({session_service_uri:v.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:v=>{const E=i.session_service_uri.split("/");E[2]=v.target.value,o({session_service_uri:E.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:v=>{const E=i.session_service_uri.split("/");E[3]=v.target.value,o({session_service_uri:E.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:v=>{const E=i.session_service_uri.split("/");E[4]=v.target.value,o({session_service_uri:E.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Memory Service"}),s.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;o({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[E]||E+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),s.jsx("option",{value:"file",children:"File System (keyword matching)"}),s.jsx("option",{value:"rag",children:"Vertex AI RAG"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:v=>o({memory_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:v=>o({memory_service_uri:"rag://"+v.target.value}),placeholder:"rag-corpus-id or full resource path"}),s.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:v=>{const E=i.memory_service_uri.split("/");E[2]=v.target.value,o({memory_service_uri:E.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:v=>{const E=i.memory_service_uri.split("/");E[3]=v.target.value,o({memory_service_uri:E.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:v=>{const E=i.memory_service_uri.split("/");E[4]=v.target.value,o({memory_service_uri:E.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Artifact Service"}),s.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[E]||E+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System"}),s.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:v=>o({artifact_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:v=>o({artifact_service_uri:"gs://"+v.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(Hl,{size:20}),"Environment Variables"]})}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:T0.filter(v=>g[v.key]===void 0).map(v=>s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>S(v.key),title:v.description,children:[s.jsx(Ue,{size:12}),v.key]},v.key))}),Object.keys(g).length===0?s.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(g).map(([v,E])=>s.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[s.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[s.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:v}),s.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[s.jsx("input",{type:h[v]?"text":"password",value:E,onChange:B=>k(v,B.target.value),placeholder:"Enter value...",style:{flex:1}}),s.jsx("button",{className:"delete-item",onClick:()=>N(v),title:h[v]?"Hide value":"Show value",children:h[v]?s.jsx(p0,{size:16}):s.jsx(Ki,{size:16})})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>A(v),children:s.jsx(Ae,{size:16})})]},v)),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[s.jsx("input",{type:"text",value:C,onChange:v=>w(v.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:v=>v.key==="Enter"&&S()}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>S(),disabled:!C.trim(),children:[s.jsx(Ue,{size:14}),"Add Variable"]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(iu,{size:20}),"Models"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:y,children:[s.jsx(Ue,{size:14}),"Add Model"]})]}),m.length===0?s.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(v=>s.jsxs("div",{className:"model-card",children:[s.jsxs("div",{className:"model-card-header",children:[s.jsx("input",{type:"text",value:v.name,onChange:E=>b(v.id,{name:E.target.value}),placeholder:"Model name",className:"model-name-input"}),s.jsx("button",{className:`default-model-btn ${i.default_model_id===v.id?"is-default":""}`,onClick:()=>x(v.id),title:i.default_model_id===v.id?"Default model":"Set as default",children:s.jsx(ag,{size:14,fill:i.default_model_id===v.id?"currentColor":"none"})}),s.jsx("button",{className:"delete-item",onClick:()=>P(v.id),children:s.jsx(Ae,{size:16})})]}),s.jsx("div",{className:"model-card-body",children:s.jsx(dg,{projectId:e.id,values:v,onChange:E=>b(v.id,E)})})]},v.id))]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(ug,{size:20}),"Advanced Options"]})}),s.jsxs("div",{className:"toggle-group",children:[s.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Event Compaction"}),s.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&s.jsx("input",{type:"number",value:i.compaction.max_events,onChange:v=>o({compaction:{...i.compaction,max_events:parseInt(v.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Context Caching"}),s.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&s.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:v=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(v.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Resumability"}),s.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(su,{size:20}),"Session State Keys"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[s.jsx(Ue,{size:14}),"Add Key"]})]}),i.state_keys.length===0?s.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((v,E)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",children:[s.jsx("input",{type:"text",value:v.name,onChange:B=>c(E,{name:B.target.value}),placeholder:"Key name"}),s.jsxs("select",{value:v.type,onChange:B=>c(E,{type:B.target.value}),children:[s.jsx("option",{value:"string",children:"String"}),s.jsx("option",{value:"number",children:"Number"}),s.jsx("option",{value:"boolean",children:"Boolean"}),s.jsx("option",{value:"object",children:"Object"}),s.jsx("option",{value:"array",children:"Array"})]}),s.jsxs("select",{value:v.scope,onChange:B=>c(E,{scope:B.target.value}),children:[s.jsx("option",{value:"session",children:"Session"}),s.jsx("option",{value:"user",children:"User"}),s.jsx("option",{value:"app",children:"App"}),s.jsx("option",{value:"temp",children:"Temporary"})]}),s.jsx("input",{type:"text",value:v.description,onChange:B=>c(E,{description:B.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),s.jsx("button",{className:"delete-item",onClick:()=>u(E),children:s.jsx(Ae,{size:16})})]},E))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(En,{size:20}),"Plugins"]}),s.jsx("div",{className:"plugin-add-dropdown",children:s.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:v=>{v.target.value&&(d(v.target.value),v.target.value="")},style:{paddingRight:8},children:[s.jsx("option",{value:"",children:"+ Add Plugin..."}),s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?s.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((v,E)=>s.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[s.jsxs("select",{value:v.type,onChange:B=>p(E,{type:B.target.value}),style:{flex:1},children:[s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),s.jsx("button",{className:"delete-item",onClick:()=>f(E),children:s.jsx(Ae,{size:16})})]}),v.type==="ReflectAndRetryToolPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Max Retries"}),s.jsx("input",{type:"number",min:"0",max:"10",value:v.max_retries??3,onChange:B=>p(E,{max_retries:parseInt(B.target.value)||0}),style:{width:70}})]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:v.throw_exception_if_retry_exceeded??!1,onChange:B=>p(E,{throw_exception_if_retry_exceeded:B.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),v.type==="ContextFilterPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),s.jsx("input",{type:"number",min:"1",max:"100",value:v.num_invocations_to_keep??5,onChange:B=>p(E,{num_invocations_to_keep:parseInt(B.target.value)||1}),style:{width:70}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),v.type==="LoggingPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),v.type==="GlobalInstructionPlugin"&&s.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),s.jsx("textarea",{value:v.global_instruction??"",onChange:B=>p(E,{global_instruction:B.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),v.type==="SaveFilesAsArtifactsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),v.type==="MultimodalToolResultsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},E))]})]})}const A0="modulepreload",R0=function(e){return"/"+e},ep={},M0=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=R0(c),c in ep)return;ep[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":A0,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function tp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function I0(e){if(Array.isArray(e))return e}function O0(e,t,n){return(t=W0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function D0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function np(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function rp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?np(Object(n),!0).forEach(function(r){O0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):np(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F0(e,t){if(e==null)return{};var n,r,i=B0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function B0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function U0(e,t){return I0(e)||$0(e,t)||H0(e,t)||D0()}function V0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W0(e){var t=V0(e,"string");return typeof t=="symbol"?t:t+""}function H0(e,t){if(e){if(typeof e=="string")return tp(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?tp(e,t):void 0}}function q0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ip(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ip(Object(n),!0).forEach(function(r){q0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ip(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function J0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function hi(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function wo(e){return{}.toString.call(e).includes("Object")}function K0(e){return!Object.keys(e).length}function Qi(e){return typeof e=="function"}function Q0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function G0(e,t){return wo(t)||On("changeType"),Object.keys(t).some(function(n){return!Q0(e,n)})&&On("changeField"),t}function Y0(e){Qi(e)||On("selectorType")}function X0(e){Qi(e)||wo(e)||On("handlerType"),wo(e)&&Object.values(e).some(function(t){return!Qi(t)})&&On("handlersType")}function Z0(e){e||On("initialIsRequired"),wo(e)||On("initialType"),K0(e)&&On("initialContent")}function eb(e,t){throw new Error(e[t]||e.default)}var tb={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},On=hi(eb)(tb),Cs={changes:G0,selector:Y0,handler:X0,initial:Z0};function nb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Cs.initial(e),Cs.handler(t);var n={current:e},r=hi(sb)(n,t),i=hi(ib)(n),o=hi(Cs.changes)(e),a=hi(rb)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Cs.selector(u),u(n.current)}function c(u){J0(r,i,o,a)(u)}return[l,c]}function rb(e,t){return Qi(t)?t(e.current):t}function ib(e,t){return e.current=sp(sp({},e.current),t),t}function sb(e,t,n){return Qi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var ob={create:nb},ab={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function lb(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function cb(e){return{}.toString.call(e).includes("Object")}function ub(e){return e||op("configIsRequired"),cb(e)||op("configType"),e.urls?(db(),{paths:{vs:e.urls.monacoBase}}):e}function db(){console.warn(pg.deprecation)}function pb(e,t){throw new Error(e[t]||e.default)}var pg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},op=lb(pb)(pg),fb={config:ub},mb=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function fg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],fg(e[n],t[n]))}),rp(rp({},e),t)}var hb={type:"cancelation",msg:"operation is manually canceled"};function za(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(hb):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var gb=["monaco"],xb=ob.create({config:ab,isInitialized:!1,resolve:null,reject:null,monaco:null}),mg=U0(xb,2),os=mg[0],Jo=mg[1];function yb(e){var t=fb.config(e),n=t.monaco,r=F0(t,gb);Jo(function(i){return{config:fg(i.config,r),monaco:n}})}function vb(){var e=os(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Jo({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),za(Ta);if(window.monaco&&window.monaco.editor)return hg(window.monaco),e.resolve(window.monaco),za(Ta);mb(bb,wb)(jb)}return za(Ta)}function bb(e){return document.body.appendChild(e)}function kb(e){var t=document.createElement("script");return e&&(t.src=e),t}function wb(e){var t=os(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=kb("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function jb(){var e=os(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;hg(r),e.resolve(r)},function(n){e.reject(n)})}function hg(e){os().monaco||Jo({monaco:e})}function _b(){return os(function(e){var t=e.monaco;return t})}var Ta=new Promise(function(e,t){return Jo({resolve:e,reject:t})}),gg={config:yb,init:vb,__getMonacoInstance:_b},Sb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Pa=Sb,Cb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Nb=Cb;function Eb({children:e}){return It.createElement("div",{style:Nb.container},e)}var zb=Eb,Tb=zb;function Pb({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return It.createElement("section",{style:{...Pa.wrapper,width:e,height:t},...a},!n&&It.createElement(Tb,null,r),It.createElement("div",{ref:i,style:{...Pa.fullWidth,...!n&&Pa.hide},className:o}))}var Lb=Pb,xg=_.memo(Lb);function Ab(e){_.useEffect(e,[])}var yg=Ab;function Rb(e,t,n=!0){let r=_.useRef(!0);_.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var wt=Rb;function Si(){}function Er(e,t,n,r){return Mb(e,r)||Ib(e,t,n,r)}function Mb(e,t){return e.editor.getModel(vg(e,t))}function Ib(e,t,n,r){return e.editor.createModel(t,n,r?vg(e,r):void 0)}function vg(e,t){return e.Uri.parse(t)}function Ob({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:y,wrapperProps:b={},beforeMount:P=Si,onMount:x=Si}){let[g,h]=_.useState(!1),[L,C]=_.useState(!0),w=_.useRef(null),S=_.useRef(null),k=_.useRef(null),A=_.useRef(x),N=_.useRef(P),v=_.useRef(!1);yg(()=>{let F=gg.init();return F.then(X=>(S.current=X)&&C(!1)).catch(X=>(X==null?void 0:X.type)!=="cancelation"&&console.error("Monaco initialization: error:",X)),()=>w.current?U():F.cancel()}),wt(()=>{if(w.current&&S.current){let F=w.current.getOriginalEditor(),X=Er(S.current,e||"",r||n||"text",o||"");X!==F.getModel()&&F.setModel(X)}},[o],g),wt(()=>{if(w.current&&S.current){let F=w.current.getModifiedEditor(),X=Er(S.current,t||"",i||n||"text",a||"");X!==F.getModel()&&F.setModel(X)}},[a],g),wt(()=>{let F=w.current.getModifiedEditor();F.getOption(S.current.editor.EditorOption.readOnly)?F.setValue(t||""):t!==F.getValue()&&(F.executeEdits("",[{range:F.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),F.pushUndoStop())},[t],g),wt(()=>{var F,X;(X=(F=w.current)==null?void 0:F.getModel())==null||X.original.setValue(e||"")},[e],g),wt(()=>{let{original:F,modified:X}=w.current.getModel();S.current.editor.setModelLanguage(F,r||n||"text"),S.current.editor.setModelLanguage(X,i||n||"text")},[n,r,i],g),wt(()=>{var F;(F=S.current)==null||F.editor.setTheme(u)},[u],g),wt(()=>{var F;(F=w.current)==null||F.updateOptions(p)},[p],g);let E=_.useCallback(()=>{var T;if(!S.current)return;N.current(S.current);let F=Er(S.current,e||"",r||n||"text",o||""),X=Er(S.current,t||"",i||n||"text",a||"");(T=w.current)==null||T.setModel({original:F,modified:X})},[n,t,i,e,r,o,a]),B=_.useCallback(()=>{var F;!v.current&&k.current&&(w.current=S.current.editor.createDiffEditor(k.current,{automaticLayout:!0,...p}),E(),(F=S.current)==null||F.editor.setTheme(u),h(!0),v.current=!0)},[p,u,E]);_.useEffect(()=>{g&&A.current(w.current,S.current)},[g]),_.useEffect(()=>{!L&&!g&&B()},[L,g,B]);function U(){var X,T,D,M;let F=(X=w.current)==null?void 0:X.getModel();l||((T=F==null?void 0:F.original)==null||T.dispose()),c||((D=F==null?void 0:F.modified)==null||D.dispose()),(M=w.current)==null||M.dispose()}return It.createElement(xg,{width:m,height:f,isEditorReady:g,loading:d,_ref:k,className:y,wrapperProps:b})}var $b=Ob;_.memo($b);function Db(e){let t=_.useRef();return _.useEffect(()=>{t.current=e},[e]),t.current}var Fb=Db,Ns=new Map;function Bb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:y="100%",className:b,wrapperProps:P={},beforeMount:x=Si,onMount:g=Si,onChange:h,onValidate:L=Si}){let[C,w]=_.useState(!1),[S,k]=_.useState(!0),A=_.useRef(null),N=_.useRef(null),v=_.useRef(null),E=_.useRef(g),B=_.useRef(x),U=_.useRef(),F=_.useRef(r),X=Fb(o),T=_.useRef(!1),D=_.useRef(!1);yg(()=>{let K=gg.init();return K.then(G=>(A.current=G)&&k(!1)).catch(G=>(G==null?void 0:G.type)!=="cancelation"&&console.error("Monaco initialization: error:",G)),()=>N.current?j():K.cancel()}),wt(()=>{var G,z,ue,R;let K=Er(A.current,e||r||"",t||i||"",o||n||"");K!==((G=N.current)==null?void 0:G.getModel())&&(p&&Ns.set(X,(z=N.current)==null?void 0:z.saveViewState()),(ue=N.current)==null||ue.setModel(K),p&&((R=N.current)==null||R.restoreViewState(Ns.get(o))))},[o],C),wt(()=>{var K;(K=N.current)==null||K.updateOptions(u)},[u],C),wt(()=>{!N.current||r===void 0||(N.current.getOption(A.current.editor.EditorOption.readOnly)?N.current.setValue(r):r!==N.current.getValue()&&(D.current=!0,N.current.executeEdits("",[{range:N.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),N.current.pushUndoStop(),D.current=!1))},[r],C),wt(()=>{var G,z;let K=(G=N.current)==null?void 0:G.getModel();K&&i&&((z=A.current)==null||z.editor.setModelLanguage(K,i))},[i],C),wt(()=>{var K;l!==void 0&&((K=N.current)==null||K.revealLine(l))},[l],C),wt(()=>{var K;(K=A.current)==null||K.editor.setTheme(a)},[a],C);let M=_.useCallback(()=>{var K;if(!(!v.current||!A.current)&&!T.current){B.current(A.current);let G=o||n,z=Er(A.current,r||e||"",t||i||"",G||"");N.current=(K=A.current)==null?void 0:K.editor.create(v.current,{model:z,automaticLayout:!0,...u},d),p&&N.current.restoreViewState(Ns.get(G)),A.current.editor.setTheme(a),l!==void 0&&N.current.revealLine(l),w(!0),T.current=!0}},[e,t,n,r,i,o,u,d,p,a,l]);_.useEffect(()=>{C&&E.current(N.current,A.current)},[C]),_.useEffect(()=>{!S&&!C&&M()},[S,C,M]),F.current=r,_.useEffect(()=>{var K,G;C&&h&&((K=U.current)==null||K.dispose(),U.current=(G=N.current)==null?void 0:G.onDidChangeModelContent(z=>{D.current||h(N.current.getValue(),z)}))},[C,h]),_.useEffect(()=>{if(C){let K=A.current.editor.onDidChangeMarkers(G=>{var ue;let z=(ue=N.current.getModel())==null?void 0:ue.uri;if(z&&G.find(R=>R.path===z.path)){let R=A.current.editor.getModelMarkers({resource:z});L==null||L(R)}});return()=>{K==null||K.dispose()}}return()=>{}},[C,L]);function j(){var K,G;(K=U.current)==null||K.dispose(),f?p&&Ns.set(o,N.current.saveViewState()):(G=N.current.getModel())==null||G.dispose(),N.current.dispose()}return It.createElement(xg,{width:m,height:y,isEditorReady:C,loading:c,_ref:v,className:b,wrapperProps:P})}var Ub=Bb,Vb=_.memo(Ub),Wt=Vb;function Wb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Hb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,qb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Jb={};function ap(e,t){return(Jb.jsx?qb:Hb).test(e)}const Kb=/[ \t\n\f\r]/g;function Qb(e){return typeof e=="object"?e.type==="text"?lp(e.value):!1:lp(e)}function lp(e){return e.replace(Kb,"")===""}class as{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}as.prototype.normal={};as.prototype.property={};as.prototype.space=void 0;function bg(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new as(n,r,t)}function Jl(e){return e.toLowerCase()}class yt{constructor(t,n){this.attribute=n,this.property=t}}yt.prototype.attribute="";yt.prototype.booleanish=!1;yt.prototype.boolean=!1;yt.prototype.commaOrSpaceSeparated=!1;yt.prototype.commaSeparated=!1;yt.prototype.defined=!1;yt.prototype.mustUseProperty=!1;yt.prototype.number=!1;yt.prototype.overloadedBoolean=!1;yt.prototype.property="";yt.prototype.spaceSeparated=!1;yt.prototype.space=void 0;let Gb=0;const he=dr(),Fe=dr(),Kl=dr(),Z=dr(),Ce=dr(),Mr=dr(),bt=dr();function dr(){return 2**++Gb}const Ql=Object.freeze(Object.defineProperty({__proto__:null,boolean:he,booleanish:Fe,commaOrSpaceSeparated:bt,commaSeparated:Mr,number:Z,overloadedBoolean:Kl,spaceSeparated:Ce},Symbol.toStringTag,{value:"Module"})),La=Object.keys(Ql);class uu extends yt{constructor(t,n,r,i){let o=-1;if(super(t,n),cp(this,"space",i),typeof r=="number")for(;++o<La.length;){const a=La[o];cp(this,La[o],(r&Ql[a])===Ql[a])}}}uu.prototype.defined=!0;function cp(e,t,n){n&&(e[t]=n)}function Yr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new uu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Jl(r)]=r,n[Jl(o.attribute)]=r}return new as(t,n,e.space)}const kg=Yr({properties:{ariaActiveDescendant:null,ariaAtomic:Fe,ariaAutoComplete:null,ariaBusy:Fe,ariaChecked:Fe,ariaColCount:Z,ariaColIndex:Z,ariaColSpan:Z,ariaControls:Ce,ariaCurrent:null,ariaDescribedBy:Ce,ariaDetails:null,ariaDisabled:Fe,ariaDropEffect:Ce,ariaErrorMessage:null,ariaExpanded:Fe,ariaFlowTo:Ce,ariaGrabbed:Fe,ariaHasPopup:null,ariaHidden:Fe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ce,ariaLevel:Z,ariaLive:null,ariaModal:Fe,ariaMultiLine:Fe,ariaMultiSelectable:Fe,ariaOrientation:null,ariaOwns:Ce,ariaPlaceholder:null,ariaPosInSet:Z,ariaPressed:Fe,ariaReadOnly:Fe,ariaRelevant:null,ariaRequired:Fe,ariaRoleDescription:Ce,ariaRowCount:Z,ariaRowIndex:Z,ariaRowSpan:Z,ariaSelected:Fe,ariaSetSize:Z,ariaSort:null,ariaValueMax:Z,ariaValueMin:Z,ariaValueNow:Z,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function wg(e,t){return t in e?e[t]:t}function jg(e,t){return wg(e,t.toLowerCase())}const Yb=Yr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Mr,acceptCharset:Ce,accessKey:Ce,action:null,allow:null,allowFullScreen:he,allowPaymentRequest:he,allowUserMedia:he,alt:null,as:null,async:he,autoCapitalize:null,autoComplete:Ce,autoFocus:he,autoPlay:he,blocking:Ce,capture:null,charSet:null,checked:he,cite:null,className:Ce,cols:Z,colSpan:null,content:null,contentEditable:Fe,controls:he,controlsList:Ce,coords:Z|Mr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:he,defer:he,dir:null,dirName:null,disabled:he,download:Kl,draggable:Fe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:he,formTarget:null,headers:Ce,height:Z,hidden:Kl,high:Z,href:null,hrefLang:null,htmlFor:Ce,httpEquiv:Ce,id:null,imageSizes:null,imageSrcSet:null,inert:he,inputMode:null,integrity:null,is:null,isMap:he,itemId:null,itemProp:Ce,itemRef:Ce,itemScope:he,itemType:Ce,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:he,low:Z,manifest:null,max:null,maxLength:Z,media:null,method:null,min:null,minLength:Z,multiple:he,muted:he,name:null,nonce:null,noModule:he,noValidate:he,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:he,optimum:Z,pattern:null,ping:Ce,placeholder:null,playsInline:he,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:he,referrerPolicy:null,rel:Ce,required:he,reversed:he,rows:Z,rowSpan:Z,sandbox:Ce,scope:null,scoped:he,seamless:he,selected:he,shadowRootClonable:he,shadowRootDelegatesFocus:he,shadowRootMode:null,shape:null,size:Z,sizes:null,slot:null,span:Z,spellCheck:Fe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Z,step:null,style:null,tabIndex:Z,target:null,title:null,translate:null,type:null,typeMustMatch:he,useMap:null,value:Fe,width:Z,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ce,axis:null,background:null,bgColor:null,border:Z,borderColor:null,bottomMargin:Z,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:he,declare:he,event:null,face:null,frame:null,frameBorder:null,hSpace:Z,leftMargin:Z,link:null,longDesc:null,lowSrc:null,marginHeight:Z,marginWidth:Z,noResize:he,noHref:he,noShade:he,noWrap:he,object:null,profile:null,prompt:null,rev:null,rightMargin:Z,rules:null,scheme:null,scrolling:Fe,standby:null,summary:null,text:null,topMargin:Z,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Z,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:he,disableRemotePlayback:he,prefix:null,property:null,results:Z,security:null,unselectable:null},space:"html",transform:jg}),Xb=Yr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:bt,accentHeight:Z,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Z,amplitude:Z,arabicForm:null,ascent:Z,attributeName:null,attributeType:null,azimuth:Z,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Z,by:null,calcMode:null,capHeight:Z,className:Ce,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Z,diffuseConstant:Z,direction:null,display:null,dur:null,divisor:Z,dominantBaseline:null,download:he,dx:null,dy:null,edgeMode:null,editable:null,elevation:Z,enableBackground:null,end:null,event:null,exponent:Z,externalResourcesRequired:null,fill:null,fillOpacity:Z,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Mr,g2:Mr,glyphName:Mr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Z,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Z,horizOriginX:Z,horizOriginY:Z,id:null,ideographic:Z,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Z,k:Z,k1:Z,k2:Z,k3:Z,k4:Z,kernelMatrix:bt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Z,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Z,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Z,overlineThickness:Z,paintOrder:null,panose1:null,path:null,pathLength:Z,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ce,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Z,pointsAtY:Z,pointsAtZ:Z,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:bt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:bt,rev:bt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:bt,requiredFeatures:bt,requiredFonts:bt,requiredFormats:bt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Z,specularExponent:Z,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Z,strikethroughThickness:Z,string:null,stroke:null,strokeDashArray:bt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Z,strokeOpacity:Z,strokeWidth:null,style:null,surfaceScale:Z,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:bt,tabIndex:Z,tableValues:null,target:null,targetX:Z,targetY:Z,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:bt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Z,underlineThickness:Z,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Z,values:null,vAlphabetic:Z,vMathematical:Z,vectorEffect:null,vHanging:Z,vIdeographic:Z,version:null,vertAdvY:Z,vertOriginX:Z,vertOriginY:Z,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Z,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:wg}),_g=Yr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Sg=Yr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:jg}),Cg=Yr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Zb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ek=/[A-Z]/g,up=/-[a-z]/g,tk=/^data[-\w.:]+$/i;function nk(e,t){const n=Jl(t);let r=t,i=yt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&tk.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(up,ik);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!up.test(o)){let a=o.replace(ek,rk);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=uu}return new i(r,t)}function rk(e){return"-"+e.toLowerCase()}function ik(e){return e.charAt(1).toUpperCase()}const sk=bg([kg,Yb,_g,Sg,Cg],"html"),du=bg([kg,Xb,_g,Sg,Cg],"svg");function ok(e){return e.join(" ").trim()}var pu={},dp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ak=/\n/g,lk=/^\s*/,ck=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,uk=/^:\s*/,dk=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,pk=/^[;\s]*/,fk=/^\s+|\s+$/g,mk=`
`,pp="/",fp="*",Qn="",hk="comment",gk="declaration";function xk(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(y){var b=y.match(ak);b&&(n+=b.length);var P=y.lastIndexOf(mk);r=~P?y.length-P:r+y.length}function o(){var y={line:n,column:r};return function(b){return b.position=new a(y),u(),b}}function a(y){this.start=y,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(y){var b=new Error(t.source+":"+n+":"+r+": "+y);if(b.reason=y,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function c(y){var b=y.exec(e);if(b){var P=b[0];return i(P),e=e.slice(P.length),b}}function u(){c(lk)}function d(y){var b;for(y=y||[];b=p();)b!==!1&&y.push(b);return y}function p(){var y=o();if(!(pp!=e.charAt(0)||fp!=e.charAt(1))){for(var b=2;Qn!=e.charAt(b)&&(fp!=e.charAt(b)||pp!=e.charAt(b+1));)++b;if(b+=2,Qn===e.charAt(b-1))return l("End of comment missing");var P=e.slice(2,b-2);return r+=2,i(P),e=e.slice(b),r+=2,y({type:hk,comment:P})}}function f(){var y=o(),b=c(ck);if(b){if(p(),!c(uk))return l("property missing ':'");var P=c(dk),x=y({type:gk,property:mp(b[0].replace(dp,Qn)),value:P?mp(P[0].replace(dp,Qn)):Qn});return c(pk),x}}function m(){var y=[];d(y);for(var b;b=f();)b!==!1&&(y.push(b),d(y));return y}return u(),m()}function mp(e){return e?e.replace(fk,Qn):Qn}var yk=xk,vk=qs&&qs.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pu,"__esModule",{value:!0});pu.default=kk;const bk=vk(yk);function kk(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,bk.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l)}),n}var Ko={};Object.defineProperty(Ko,"__esModule",{value:!0});Ko.camelCase=void 0;var wk=/^--[a-zA-Z0-9_-]+$/,jk=/-([a-z])/g,_k=/^[^-]+$/,Sk=/^-(webkit|moz|ms|o|khtml)-/,Ck=/^-(ms)-/,Nk=function(e){return!e||_k.test(e)||wk.test(e)},Ek=function(e,t){return t.toUpperCase()},hp=function(e,t){return"".concat(t,"-")},zk=function(e,t){return t===void 0&&(t={}),Nk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Ck,hp):e=e.replace(Sk,hp),e.replace(jk,Ek))};Ko.camelCase=zk;var Tk=qs&&qs.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Pk=Tk(pu),Lk=Ko;function Gl(e,t){var n={};return!e||typeof e!="string"||(0,Pk.default)(e,function(r,i){r&&i&&(n[(0,Lk.camelCase)(r,t)]=i)}),n}Gl.default=Gl;var Ak=Gl;const Rk=Co(Ak),Ng=Eg("end"),fu=Eg("start");function Eg(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Mk(e){const t=fu(e),n=Ng(e);if(t&&n)return{start:t,end:n}}function Ci(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?gp(e.position):"start"in e||"end"in e?gp(e):"line"in e||"column"in e?Yl(e):""}function Yl(e){return xp(e&&e.line)+":"+xp(e&&e.column)}function gp(e){return Yl(e&&e.start)+"-"+Yl(e&&e.end)}function xp(e){return e&&typeof e=="number"?e:1}class ot extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Ci(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ot.prototype.file="";ot.prototype.name="";ot.prototype.reason="";ot.prototype.message="";ot.prototype.stack="";ot.prototype.column=void 0;ot.prototype.line=void 0;ot.prototype.ancestors=void 0;ot.prototype.cause=void 0;ot.prototype.fatal=void 0;ot.prototype.place=void 0;ot.prototype.ruleId=void 0;ot.prototype.source=void 0;const mu={}.hasOwnProperty,Ik=new Map,Ok=/[A-Z]/g,$k=new Set(["table","tbody","thead","tfoot","tr"]),Dk=new Set(["td","th"]),zg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Fk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Kk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Jk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?du:sk,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Tg(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Tg(e,t,n){if(t.type==="element")return Bk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Uk(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Wk(e,t,n);if(t.type==="mdxjsEsm")return Vk(e,t);if(t.type==="root")return Hk(e,t,n);if(t.type==="text")return qk(e,t)}function Bk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=du,e.schema=i),e.ancestors.push(t);const o=Lg(e,t.tagName,!1),a=Qk(e,t);let l=gu(e,t);return $k.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Qb(c):!0})),Pg(e,a,o,t),hu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Uk(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Gi(e,t.position)}function Vk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Gi(e,t.position)}function Wk(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=du,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Lg(e,t.name,!0),a=Gk(e,t),l=gu(e,t);return Pg(e,a,o,t),hu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Hk(e,t,n){const r={};return hu(r,gu(e,t)),e.create(t,e.Fragment,r,n)}function qk(e,t){return t.value}function Pg(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function hu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Jk(e,t,n){return r;function r(i,o,a,l){const u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function Kk(e,t){return n;function n(r,i,o,a){const l=Array.isArray(o.children),c=fu(r);return t(i,o,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Qk(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&mu.call(t.properties,i)){const o=Yk(e,i,t.properties[i]);if(o){const[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Dk.has(t.tagName)?r=l:n[a]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Gk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Gi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else Gi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function gu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Ik;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=Tg(e,o,a);l!==void 0&&n.push(l)}return n}function Yk(e,t,n){const r=nk(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Wb(n):ok(n)),r.property==="style"){let i=typeof n=="object"?n:Xk(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Zk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Zb[r.property]||r.property:r.attribute,n]}}function Xk(e,t){try{return Rk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ot("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=zg+"#cannot-parse-style-attribute",i}}function Lg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const l=ap(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=a}else r=ap(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return mu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Gi(e)}function Gi(e,t){const n=new ot("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=zg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Zk(e){const t={};let n;for(n in e)mu.call(e,n)&&(t[ew(n)]=e[n]);return t}function ew(e){let t=e.replace(Ok,tw);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function tw(e){return"-"+e.toLowerCase()}const Aa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},nw={};function rw(e,t){const n=nw,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Ag(e,r,i)}function Ag(e,t,n){if(iw(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return yp(e.children,t,n)}return Array.isArray(e)?yp(e,t,n):""}function yp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Ag(e[i],t,n);return r.join("")}function iw(e){return!!(e&&typeof e=="object")}const vp=document.createElement("i");function xu(e){const t="&"+e+";";vp.innerHTML=t;const n=vp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function sn(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function Rt(e,t){return e.length>0?(sn(e,e.length,0,t),e):t}const bp={}.hasOwnProperty;function sw(e){const t={};let n=-1;for(;++n<e.length;)ow(t,e[n]);return t}function ow(e,t){let n;for(n in t){const i=(bp.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){bp.call(i,a)||(i[a]=[]);const l=o[a];aw(i[a],Array.isArray(l)?l:l?[l]:[])}}}function aw(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);sn(e,0,0,r)}function Rg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Ir(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Zt=Hn(/[A-Za-z]/),_t=Hn(/[\dA-Za-z]/),lw=Hn(/[#-'*+\--9=?A-Z^-~]/);function Xl(e){return e!==null&&(e<32||e===127)}const Zl=Hn(/\d/),cw=Hn(/[\dA-Fa-f]/),uw=Hn(/[!-/:-@[-`{-~]/);function pe(e){return e!==null&&e<-2}function xt(e){return e!==null&&(e<0||e===32)}function je(e){return e===-2||e===-1||e===32}const dw=Hn(new RegExp("\\p{P}|\\p{S}","u")),pw=Hn(/\s/);function Hn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Xr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&_t(e.charCodeAt(n+1))&&_t(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Ee(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return je(c)?(e.enter(n),l(c)):t(c)}function l(c){return je(c)&&o++<i?(e.consume(c),l):(e.exit(n),t(c))}}const fw={tokenize:mw};function mw(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Ee(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return pe(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}const hw={tokenize:gw},kp={tokenize:xw};function gw(e){const t=this,n=[];let r=0,i,o,a;return l;function l(h){if(r<n.length){const L=n[r];return t.containerState=L[1],e.attempt(L[0].continuation,c,u)(h)}return u(h)}function c(h){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&g();const L=t.events.length;let C=L,w;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){w=t.events[C][1].end;break}x(r);let S=L;for(;S<t.events.length;)t.events[S][1].end={...w},S++;return sn(t.events,C+1,0,t.events.slice(L)),t.events.length=S,u(h)}return l(h)}function u(h){if(r===n.length){if(!i)return f(h);if(i.currentConstruct&&i.currentConstruct.concrete)return y(h);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(kp,d,p)(h)}function d(h){return i&&g(),x(r),f(h)}function p(h){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,y(h)}function f(h){return t.containerState={},e.attempt(kp,m,y)(h)}function m(h){return r++,n.push([t.currentConstruct,t.containerState]),f(h)}function y(h){if(h===null){i&&g(),x(0),e.consume(h);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),b(h)}function b(h){if(h===null){P(e.exit("chunkFlow"),!0),x(0),e.consume(h);return}return pe(h)?(e.consume(h),P(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(h),b)}function P(h,L){const C=t.sliceStream(h);if(L&&C.push(null),h.previous=o,o&&(o.next=h),o=h,i.defineSkip(h.start),i.write(C),t.parser.lazy[h.start.line]){let w=i.events.length;for(;w--;)if(i.events[w][1].start.offset<a&&(!i.events[w][1].end||i.events[w][1].end.offset>a))return;const S=t.events.length;let k=S,A,N;for(;k--;)if(t.events[k][0]==="exit"&&t.events[k][1].type==="chunkFlow"){if(A){N=t.events[k][1].end;break}A=!0}for(x(r),w=S;w<t.events.length;)t.events[w][1].end={...N},w++;sn(t.events,k+1,0,t.events.slice(S)),t.events.length=w}}function x(h){let L=n.length;for(;L-- >h;){const C=n[L];t.containerState=C[1],C[0].exit.call(t,e)}n.length=h}function g(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function xw(e,t,n){return Ee(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function wp(e){if(e===null||xt(e)||pw(e))return 1;if(dw(e))return 2}function yu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const ec={name:"attention",resolveAll:yw,tokenize:vw};function yw(e,t){let n=-1,r,i,o,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};jp(p,-c),jp(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Rt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Rt(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=Rt(u,yu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Rt(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Rt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,sn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function vw(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=wp(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=wp(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function jp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const bw={name:"autolink",tokenize:kw};function kw(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return Zt(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||_t(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||_t(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Xl(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):lw(m)?(e.consume(m),u):n(m)}function d(m){return _t(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||_t(m))&&r++<63){const y=m===45?f:p;return e.consume(m),y}return n(m)}}const Qo={partial:!0,tokenize:ww};function ww(e,t,n){return r;function r(o){return je(o)?Ee(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||pe(o)?t(o):n(o)}}const Mg={continuation:{tokenize:_w},exit:Sw,name:"blockQuote",tokenize:jw};function jw(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return je(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function _w(e,t,n){const r=this;return i;function i(a){return je(a)?Ee(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Mg,t,n)(a)}}function Sw(e){e.exit("blockQuote")}const Ig={name:"characterEscape",tokenize:Cw};function Cw(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return uw(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Og={name:"characterReference",tokenize:Nw};function Nw(e,t,n){const r=this;let i=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=_t,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=cw,d):(e.enter("characterReferenceValue"),o=7,a=Zl,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===_t&&!xu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const _p={partial:!0,tokenize:zw},Sp={concrete:!0,name:"codeFenced",tokenize:Ew};function Ew(e,t,n){const r=this,i={partial:!0,tokenize:C};let o=0,a=0,l;return c;function c(w){return u(w)}function u(w){const S=r.events[r.events.length-1];return o=S&&S[1].type==="linePrefix"?S[2].sliceSerialize(S[1],!0).length:0,l=w,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(w)}function d(w){return w===l?(a++,e.consume(w),d):a<3?n(w):(e.exit("codeFencedFenceSequence"),je(w)?Ee(e,p,"whitespace")(w):p(w))}function p(w){return w===null||pe(w)?(e.exit("codeFencedFence"),r.interrupt?t(w):e.check(_p,b,L)(w)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(w))}function f(w){return w===null||pe(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(w)):je(w)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Ee(e,m,"whitespace")(w)):w===96&&w===l?n(w):(e.consume(w),f)}function m(w){return w===null||pe(w)?p(w):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(w))}function y(w){return w===null||pe(w)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(w)):w===96&&w===l?n(w):(e.consume(w),y)}function b(w){return e.attempt(i,L,P)(w)}function P(w){return e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),x}function x(w){return o>0&&je(w)?Ee(e,g,"linePrefix",o+1)(w):g(w)}function g(w){return w===null||pe(w)?e.check(_p,b,L)(w):(e.enter("codeFlowValue"),h(w))}function h(w){return w===null||pe(w)?(e.exit("codeFlowValue"),g(w)):(e.consume(w),h)}function L(w){return e.exit("codeFenced"),t(w)}function C(w,S,k){let A=0;return N;function N(F){return w.enter("lineEnding"),w.consume(F),w.exit("lineEnding"),v}function v(F){return w.enter("codeFencedFence"),je(F)?Ee(w,E,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):E(F)}function E(F){return F===l?(w.enter("codeFencedFenceSequence"),B(F)):k(F)}function B(F){return F===l?(A++,w.consume(F),B):A>=a?(w.exit("codeFencedFenceSequence"),je(F)?Ee(w,U,"whitespace")(F):U(F)):k(F)}function U(F){return F===null||pe(F)?(w.exit("codeFencedFence"),S(F)):k(F)}}}function zw(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Ra={name:"codeIndented",tokenize:Pw},Tw={partial:!0,tokenize:Lw};function Pw(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Ee(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):pe(u)?e.attempt(Tw,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||pe(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function Lw(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):pe(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Ee(e,o,"linePrefix",5)(a)}function o(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):pe(a)?i(a):n(a)}}const Aw={name:"codeText",previous:Mw,resolve:Rw,tokenize:Iw};function Rw(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Mw(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Iw(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):pe(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||pe(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class Ow{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ai(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ai(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ai(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ai(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ai(this.left,n.reverse())}}}function ai(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function $g(e){const t={};let n=-1,r,i,o,a,l,c,u;const d=new Ow(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,$w(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return sn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function $w(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,m=n,y=0,b=0;const P=[b];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(b=f+1,P.push(b),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):P.pop(),f=P.length;f--;){const x=l.slice(P[f],P[f+1]),g=o.pop();c.push([g,g+x.length-1]),e.splice(g,2,x)}for(c.reverse(),f=-1;++f<c.length;)u[y+c[f][0]]=y+c[f][1],y+=c[f][1]-c[f][0]-1;return u}const Dw={resolve:Bw,tokenize:Uw},Fw={partial:!0,tokenize:Vw};function Bw(e){return $g(e),e}function Uw(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):pe(l)?e.check(Fw,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Vw(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Ee(e,o,"linePrefix")}function o(a){if(a===null||pe(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Dg(e,t,n,r,i,o,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(x){return x===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(x),e.exit(o),f):x===null||x===32||x===41||Xl(x)?n(x):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(x))}function f(x){return x===62?(e.enter(o),e.consume(x),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(x))}function m(x){return x===62?(e.exit("chunkString"),e.exit(l),f(x)):x===null||x===60||pe(x)?n(x):(e.consume(x),x===92?y:m)}function y(x){return x===60||x===62||x===92?(e.consume(x),m):m(x)}function b(x){return!d&&(x===null||x===41||xt(x))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(x)):d<u&&x===40?(e.consume(x),d++,b):x===41?(e.consume(x),d--,b):x===null||x===32||x===40||Xl(x)?n(x):(e.consume(x),x===92?P:b)}function P(x){return x===40||x===41||x===92?(e.consume(x),b):b(x)}}function Fg(e,t,n,r,i,o){const a=this;let l=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return l>999||m===null||m===91||m===93&&!c||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):pe(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||pe(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!je(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function Bg(e,t,n,r,i,o){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):pe(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Ee(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||pe(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function Ni(e,t){let n;return r;function r(i){return pe(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):je(i)?Ee(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Ww={name:"definition",tokenize:qw},Hw={partial:!0,tokenize:Jw};function qw(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return Fg.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=Ir(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return xt(m)?Ni(e,u)(m):u(m)}function u(m){return Dg(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(Hw,p,p)(m)}function p(m){return je(m)?Ee(e,f,"whitespace")(m):f(m)}function f(m){return m===null||pe(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Jw(e,t,n){return r;function r(l){return xt(l)?Ni(e,i)(l):n(l)}function i(l){return Bg(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return je(l)?Ee(e,a,"whitespace")(l):a(l)}function a(l){return l===null||pe(l)?t(l):n(l)}}const Kw={name:"hardBreakEscape",tokenize:Qw};function Qw(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return pe(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Gw={name:"headingAtx",resolve:Yw,tokenize:Xw};function Yw(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},sn(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Xw(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||xt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||pe(d)?(e.exit("atxHeading"),t(d)):je(d)?Ee(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||xt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const Zw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Cp=["pre","script","style","textarea"],ej={concrete:!0,name:"htmlFlow",resolveTo:rj,tokenize:ij},tj={partial:!0,tokenize:oj},nj={partial:!0,tokenize:sj};function rj(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function ij(e,t,n){const r=this;let i,o,a,l,c;return u;function u(z){return d(z)}function d(z){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(z),p}function p(z){return z===33?(e.consume(z),f):z===47?(e.consume(z),o=!0,b):z===63?(e.consume(z),i=3,r.interrupt?t:j):Zt(z)?(e.consume(z),a=String.fromCharCode(z),P):n(z)}function f(z){return z===45?(e.consume(z),i=2,m):z===91?(e.consume(z),i=5,l=0,y):Zt(z)?(e.consume(z),i=4,r.interrupt?t:j):n(z)}function m(z){return z===45?(e.consume(z),r.interrupt?t:j):n(z)}function y(z){const ue="CDATA[";return z===ue.charCodeAt(l++)?(e.consume(z),l===ue.length?r.interrupt?t:E:y):n(z)}function b(z){return Zt(z)?(e.consume(z),a=String.fromCharCode(z),P):n(z)}function P(z){if(z===null||z===47||z===62||xt(z)){const ue=z===47,R=a.toLowerCase();return!ue&&!o&&Cp.includes(R)?(i=1,r.interrupt?t(z):E(z)):Zw.includes(a.toLowerCase())?(i=6,ue?(e.consume(z),x):r.interrupt?t(z):E(z)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(z):o?g(z):h(z))}return z===45||_t(z)?(e.consume(z),a+=String.fromCharCode(z),P):n(z)}function x(z){return z===62?(e.consume(z),r.interrupt?t:E):n(z)}function g(z){return je(z)?(e.consume(z),g):N(z)}function h(z){return z===47?(e.consume(z),N):z===58||z===95||Zt(z)?(e.consume(z),L):je(z)?(e.consume(z),h):N(z)}function L(z){return z===45||z===46||z===58||z===95||_t(z)?(e.consume(z),L):C(z)}function C(z){return z===61?(e.consume(z),w):je(z)?(e.consume(z),C):h(z)}function w(z){return z===null||z===60||z===61||z===62||z===96?n(z):z===34||z===39?(e.consume(z),c=z,S):je(z)?(e.consume(z),w):k(z)}function S(z){return z===c?(e.consume(z),c=null,A):z===null||pe(z)?n(z):(e.consume(z),S)}function k(z){return z===null||z===34||z===39||z===47||z===60||z===61||z===62||z===96||xt(z)?C(z):(e.consume(z),k)}function A(z){return z===47||z===62||je(z)?h(z):n(z)}function N(z){return z===62?(e.consume(z),v):n(z)}function v(z){return z===null||pe(z)?E(z):je(z)?(e.consume(z),v):n(z)}function E(z){return z===45&&i===2?(e.consume(z),X):z===60&&i===1?(e.consume(z),T):z===62&&i===4?(e.consume(z),K):z===63&&i===3?(e.consume(z),j):z===93&&i===5?(e.consume(z),M):pe(z)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(tj,G,B)(z)):z===null||pe(z)?(e.exit("htmlFlowData"),B(z)):(e.consume(z),E)}function B(z){return e.check(nj,U,G)(z)}function U(z){return e.enter("lineEnding"),e.consume(z),e.exit("lineEnding"),F}function F(z){return z===null||pe(z)?B(z):(e.enter("htmlFlowData"),E(z))}function X(z){return z===45?(e.consume(z),j):E(z)}function T(z){return z===47?(e.consume(z),a="",D):E(z)}function D(z){if(z===62){const ue=a.toLowerCase();return Cp.includes(ue)?(e.consume(z),K):E(z)}return Zt(z)&&a.length<8?(e.consume(z),a+=String.fromCharCode(z),D):E(z)}function M(z){return z===93?(e.consume(z),j):E(z)}function j(z){return z===62?(e.consume(z),K):z===45&&i===2?(e.consume(z),j):E(z)}function K(z){return z===null||pe(z)?(e.exit("htmlFlowData"),G(z)):(e.consume(z),K)}function G(z){return e.exit("htmlFlow"),t(z)}}function sj(e,t,n){const r=this;return i;function i(a){return pe(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function oj(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Qo,t,n)}}const aj={name:"htmlText",tokenize:lj};function lj(e,t,n){const r=this;let i,o,a;return l;function l(j){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(j),c}function c(j){return j===33?(e.consume(j),u):j===47?(e.consume(j),C):j===63?(e.consume(j),h):Zt(j)?(e.consume(j),k):n(j)}function u(j){return j===45?(e.consume(j),d):j===91?(e.consume(j),o=0,y):Zt(j)?(e.consume(j),g):n(j)}function d(j){return j===45?(e.consume(j),m):n(j)}function p(j){return j===null?n(j):j===45?(e.consume(j),f):pe(j)?(a=p,T(j)):(e.consume(j),p)}function f(j){return j===45?(e.consume(j),m):p(j)}function m(j){return j===62?X(j):j===45?f(j):p(j)}function y(j){const K="CDATA[";return j===K.charCodeAt(o++)?(e.consume(j),o===K.length?b:y):n(j)}function b(j){return j===null?n(j):j===93?(e.consume(j),P):pe(j)?(a=b,T(j)):(e.consume(j),b)}function P(j){return j===93?(e.consume(j),x):b(j)}function x(j){return j===62?X(j):j===93?(e.consume(j),x):b(j)}function g(j){return j===null||j===62?X(j):pe(j)?(a=g,T(j)):(e.consume(j),g)}function h(j){return j===null?n(j):j===63?(e.consume(j),L):pe(j)?(a=h,T(j)):(e.consume(j),h)}function L(j){return j===62?X(j):h(j)}function C(j){return Zt(j)?(e.consume(j),w):n(j)}function w(j){return j===45||_t(j)?(e.consume(j),w):S(j)}function S(j){return pe(j)?(a=S,T(j)):je(j)?(e.consume(j),S):X(j)}function k(j){return j===45||_t(j)?(e.consume(j),k):j===47||j===62||xt(j)?A(j):n(j)}function A(j){return j===47?(e.consume(j),X):j===58||j===95||Zt(j)?(e.consume(j),N):pe(j)?(a=A,T(j)):je(j)?(e.consume(j),A):X(j)}function N(j){return j===45||j===46||j===58||j===95||_t(j)?(e.consume(j),N):v(j)}function v(j){return j===61?(e.consume(j),E):pe(j)?(a=v,T(j)):je(j)?(e.consume(j),v):A(j)}function E(j){return j===null||j===60||j===61||j===62||j===96?n(j):j===34||j===39?(e.consume(j),i=j,B):pe(j)?(a=E,T(j)):je(j)?(e.consume(j),E):(e.consume(j),U)}function B(j){return j===i?(e.consume(j),i=void 0,F):j===null?n(j):pe(j)?(a=B,T(j)):(e.consume(j),B)}function U(j){return j===null||j===34||j===39||j===60||j===61||j===96?n(j):j===47||j===62||xt(j)?A(j):(e.consume(j),U)}function F(j){return j===47||j===62||xt(j)?A(j):n(j)}function X(j){return j===62?(e.consume(j),e.exit("htmlTextData"),e.exit("htmlText"),t):n(j)}function T(j){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),D}function D(j){return je(j)?Ee(e,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):M(j)}function M(j){return e.enter("htmlTextData"),a(j)}}const vu={name:"labelEnd",resolveAll:pj,resolveTo:fj,tokenize:mj},cj={tokenize:hj},uj={tokenize:gj},dj={tokenize:xj};function pj(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&sn(e,0,e.length,n),e}function fj(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Rt(l,e.slice(o+1,o+r+3)),l=Rt(l,[["enter",d,t]]),l=Rt(l,yu(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=Rt(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Rt(l,e.slice(a+1)),l=Rt(l,[["exit",c,t]]),sn(e,o,e.length,l),e}function mj(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Ir(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(cj,d,a?d:p)(f):f===91?e.attempt(uj,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(dj,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function hj(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return xt(p)?Ni(e,o)(p):o(p)}function o(p){return p===41?d(p):Dg(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return xt(p)?Ni(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Bg(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return xt(p)?Ni(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function gj(e,t,n){const r=this;return i;function i(l){return Fg.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Ir(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function xj(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const yj={name:"labelStartImage",resolveAll:vu.resolveAll,tokenize:vj};function vj(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const bj={name:"labelStartLink",resolveAll:vu.resolveAll,tokenize:kj};function kj(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Ma={name:"lineEnding",tokenize:wj};function wj(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Ee(e,t,"linePrefix")}}const Ws={name:"thematicBreak",tokenize:jj};function jj(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||pe(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),je(u)?Ee(e,l,"whitespace")(u):l(u))}}const dt={continuation:{tokenize:Nj},exit:zj,name:"list",tokenize:Cj},_j={partial:!0,tokenize:Tj},Sj={partial:!0,tokenize:Ej};function Cj(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(m){const y=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Zl(m)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Ws,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return Zl(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Qo,r.interrupt?n:d,e.attempt(_j,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return je(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function Nj(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Qo,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Ee(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!je(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Sj,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Ee(e,e.attempt(dt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Ej(e,t,n){const r=this;return Ee(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function zj(e){e.exit(this.containerState.type)}function Tj(e,t,n){const r=this;return Ee(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!je(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Np={name:"setextUnderline",resolveTo:Pj,tokenize:Lj};function Pj(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function Lj(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),je(u)?Ee(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||pe(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Aj={tokenize:Rj};function Rj(e){const t=this,n=e.attempt(Qo,r,e.attempt(this.parser.constructs.flowInitial,i,Ee(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Dw,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Mj={resolveAll:Vg()},Ij=Ug("string"),Oj=Ug("text");function Ug(e){return{resolveAll:Vg(e==="text"?$j:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Vg(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function $j(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,l=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Dj={42:dt,43:dt,45:dt,48:dt,49:dt,50:dt,51:dt,52:dt,53:dt,54:dt,55:dt,56:dt,57:dt,62:Mg},Fj={91:Ww},Bj={[-2]:Ra,[-1]:Ra,32:Ra},Uj={35:Gw,42:Ws,45:[Np,Ws],60:ej,61:Np,95:Ws,96:Sp,126:Sp},Vj={38:Og,92:Ig},Wj={[-5]:Ma,[-4]:Ma,[-3]:Ma,33:yj,38:Og,42:ec,60:[bw,aj],91:bj,92:[Kw,Ig],93:vu,95:ec,96:Aw},Hj={null:[ec,Mj]},qj={null:[42,95]},Jj={null:[]},Kj=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:qj,contentInitial:Fj,disable:Jj,document:Dj,flow:Uj,flowInitial:Bj,insideSpan:Hj,string:Vj,text:Wj},Symbol.toStringTag,{value:"Module"}));function Qj(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],l=[];const c={attempt:S(C),check:S(w),consume:g,enter:h,exit:L,interrupt:S(w,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:y,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(v){return a=Rt(a,v),P(),a[a.length-1]!==null?[]:(k(t,0),u.events=yu(o,u.events,u),u.events)}function f(v,E){return Yj(m(v),E)}function m(v){return Gj(a,v)}function y(){const{_bufferIndex:v,_index:E,line:B,column:U,offset:F}=r;return{_bufferIndex:v,_index:E,line:B,column:U,offset:F}}function b(v){i[v.line]=v.column,N()}function P(){let v;for(;r._index<a.length;){const E=a[r._index];if(typeof E=="string")for(v=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===v&&r._bufferIndex<E.length;)x(E.charCodeAt(r._bufferIndex));else x(E)}}function x(v){d=d(v)}function g(v){pe(v)?(r.line++,r.column=1,r.offset+=v===-3?2:1,N()):v!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=v}function h(v,E){const B=E||{};return B.type=v,B.start=y(),u.events.push(["enter",B,u]),l.push(B),B}function L(v){const E=l.pop();return E.end=y(),u.events.push(["exit",E,u]),E}function C(v,E){k(v,E.from)}function w(v,E){E.restore()}function S(v,E){return B;function B(U,F,X){let T,D,M,j;return Array.isArray(U)?G(U):"tokenize"in U?G([U]):K(U);function K(ee){return W;function W(ne){const ae=ne!==null&&ee[ne],O=ne!==null&&ee.null,I=[...Array.isArray(ae)?ae:ae?[ae]:[],...Array.isArray(O)?O:O?[O]:[]];return G(I)(ne)}}function G(ee){return T=ee,D=0,ee.length===0?X:z(ee[D])}function z(ee){return W;function W(ne){return j=A(),M=ee,ee.partial||(u.currentConstruct=ee),ee.name&&u.parser.constructs.disable.null.includes(ee.name)?R():ee.tokenize.call(E?Object.assign(Object.create(u),E):u,c,ue,R)(ne)}}function ue(ee){return v(M,j),F}function R(ee){return j.restore(),++D<T.length?z(T[D]):X}}}function k(v,E){v.resolveAll&&!o.includes(v)&&o.push(v),v.resolve&&sn(u.events,E,u.events.length-E,v.resolve(u.events.slice(E),u)),v.resolveTo&&(u.events=v.resolveTo(u.events,u))}function A(){const v=y(),E=u.previous,B=u.currentConstruct,U=u.events.length,F=Array.from(l);return{from:U,restore:X};function X(){r=v,u.previous=E,u.currentConstruct=B,u.events.length=U,l=F,N()}}function N(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Gj(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function Yj(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function Xj(e){const r={constructs:sw([Kj,...(e||{}).extensions||[]]),content:i(fw),defined:[],document:i(hw),flow:i(Aj),lazy:{},string:i(Ij),text:i(Oj)};return r;function i(o){return a;function a(l){return Qj(r,o,l)}}}function Zj(e){for(;!$g(e););return e}const Ep=/[\0\t\n\r]/g;function e_(){let e=1,t="",n=!0,r;return i;function i(o,a,l){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(Ep.lastIndex=p,u=Ep.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const t_=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function n_(e){return e.replace(t_,r_)}function r_(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Rg(n.slice(o?2:1),o?16:10)}return xu(n)||e}const Wg={}.hasOwnProperty;function i_(e,t,n){return typeof t!="string"&&(n=t,t=void 0),s_(n)(Zj(Xj(n).document().write(e_()(e,t,!0))))}function s_(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(ve),autolinkProtocol:A,autolinkEmail:A,atxHeading:o(re),blockQuote:o(O),characterEscape:A,characterReference:A,codeFenced:o(I),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(I,a),codeText:o($,a),codeTextData:A,data:A,codeFlowValue:A,definition:o(V),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(Q),hardBreakEscape:o(me),hardBreakTrailing:o(me),htmlFlow:o(H,a),htmlFlowData:A,htmlText:o(H,a),htmlTextData:A,image:o(ce),label:a,link:o(ve),listItem:o(We),listItemValue:f,listOrdered:o(Je,p),listUnordered:o(Je),paragraph:o(on),reference:z,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(re),strong:o(Ke),thematicBreak:o(we)},exit:{atxHeading:c(),atxHeadingSequence:C,autolink:c(),autolinkEmail:ae,autolinkProtocol:ne,blockQuote:c(),characterEscapeValue:N,characterReferenceMarkerHexadecimal:R,characterReferenceMarkerNumeric:R,characterReferenceValue:ee,characterReference:W,codeFenced:c(P),codeFencedFence:b,codeFencedFenceInfo:m,codeFencedFenceMeta:y,codeFlowValue:N,codeIndented:c(x),codeText:c(F),codeTextData:N,data:N,definition:c(),definitionDestinationString:L,definitionLabelString:g,definitionTitleString:h,emphasis:c(),hardBreakEscape:c(E),hardBreakTrailing:c(E),htmlFlow:c(B),htmlFlowData:N,htmlText:c(U),htmlTextData:N,image:c(T),label:M,labelText:D,lineEnding:v,link:c(X),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ue,resourceDestinationString:j,resourceTitleString:K,resource:G,setextHeading:c(k),setextHeadingLineSequence:S,setextHeadingText:w,strong:c(),thematicBreak:c()}};Hg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(J){let te={type:"root",children:[]};const fe={stack:[te],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},xe=[];let _e=-1;for(;++_e<J.length;)if(J[_e][1].type==="listOrdered"||J[_e][1].type==="listUnordered")if(J[_e][0]==="enter")xe.push(_e);else{const vt=xe.pop();_e=i(J,vt,_e)}for(_e=-1;++_e<J.length;){const vt=t[J[_e][0]];Wg.call(vt,J[_e][1].type)&&vt[J[_e][1].type].call(Object.assign({sliceSerialize:J[_e][2].sliceSerialize},fe),J[_e][1])}if(fe.tokenStack.length>0){const vt=fe.tokenStack[fe.tokenStack.length-1];(vt[1]||zp).call(fe,void 0,vt[0])}for(te.position={start:bn(J.length>0?J[0][1].start:{line:1,column:1,offset:0}),end:bn(J.length>0?J[J.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<t.transforms.length;)te=t.transforms[_e](te)||te;return te}function i(J,te,fe){let xe=te-1,_e=-1,vt=!1,an,zt,q,se;for(;++xe<=fe;){const oe=J[xe];switch(oe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{oe[0]==="enter"?_e++:_e--,se=void 0;break}case"lineEndingBlank":{oe[0]==="enter"&&(an&&!se&&!_e&&!q&&(q=xe),se=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:se=void 0}if(!_e&&oe[0]==="enter"&&oe[1].type==="listItemPrefix"||_e===-1&&oe[0]==="exit"&&(oe[1].type==="listUnordered"||oe[1].type==="listOrdered")){if(an){let de=xe;for(zt=void 0;de--;){const ge=J[de];if(ge[1].type==="lineEnding"||ge[1].type==="lineEndingBlank"){if(ge[0]==="exit")continue;zt&&(J[zt][1].type="lineEndingBlank",vt=!0),ge[1].type="lineEnding",zt=de}else if(!(ge[1].type==="linePrefix"||ge[1].type==="blockQuotePrefix"||ge[1].type==="blockQuotePrefixWhitespace"||ge[1].type==="blockQuoteMarker"||ge[1].type==="listItemIndent"))break}q&&(!zt||q<zt)&&(an._spread=!0),an.end=Object.assign({},zt?J[zt][1].start:oe[1].end),J.splice(zt||xe,0,["exit",an,oe[2]]),xe++,fe++}if(oe[1].type==="listItemPrefix"){const de={type:"listItem",_spread:!1,start:Object.assign({},oe[1].start),end:void 0};an=de,J.splice(xe,0,["enter",de,oe[2]]),xe++,fe++,q=void 0,se=!0}}}return J[te][1]._spread=vt,fe}function o(J,te){return fe;function fe(xe){l.call(this,J(xe),xe),te&&te.call(this,xe)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(J,te,fe){this.stack[this.stack.length-1].children.push(J),this.stack.push(J),this.tokenStack.push([te,fe||void 0]),J.position={start:bn(te.start),end:void 0}}function c(J){return te;function te(fe){J&&J.call(this,fe),u.call(this,fe)}}function u(J,te){const fe=this.stack.pop(),xe=this.tokenStack.pop();if(xe)xe[0].type!==J.type&&(te?te.call(this,J,xe[0]):(xe[1]||zp).call(this,J,xe[0]));else throw new Error("Cannot close `"+J.type+"` ("+Ci({start:J.start,end:J.end})+"): it’s not open");fe.position.end=bn(J.end)}function d(){return rw(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(J){if(this.data.expectingFirstListItemValue){const te=this.stack[this.stack.length-2];te.start=Number.parseInt(this.sliceSerialize(J),10),this.data.expectingFirstListItemValue=void 0}}function m(){const J=this.resume(),te=this.stack[this.stack.length-1];te.lang=J}function y(){const J=this.resume(),te=this.stack[this.stack.length-1];te.meta=J}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function P(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J.replace(/(\r?\n|\r)$/g,"")}function g(J){const te=this.resume(),fe=this.stack[this.stack.length-1];fe.label=te,fe.identifier=Ir(this.sliceSerialize(J)).toLowerCase()}function h(){const J=this.resume(),te=this.stack[this.stack.length-1];te.title=J}function L(){const J=this.resume(),te=this.stack[this.stack.length-1];te.url=J}function C(J){const te=this.stack[this.stack.length-1];if(!te.depth){const fe=this.sliceSerialize(J).length;te.depth=fe}}function w(){this.data.setextHeadingSlurpLineEnding=!0}function S(J){const te=this.stack[this.stack.length-1];te.depth=this.sliceSerialize(J).codePointAt(0)===61?1:2}function k(){this.data.setextHeadingSlurpLineEnding=void 0}function A(J){const fe=this.stack[this.stack.length-1].children;let xe=fe[fe.length-1];(!xe||xe.type!=="text")&&(xe=$e(),xe.position={start:bn(J.start),end:void 0},fe.push(xe)),this.stack.push(xe)}function N(J){const te=this.stack.pop();te.value+=this.sliceSerialize(J),te.position.end=bn(J.end)}function v(J){const te=this.stack[this.stack.length-1];if(this.data.atHardBreak){const fe=te.children[te.children.length-1];fe.position.end=bn(J.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(te.type)&&(A.call(this,J),N.call(this,J))}function E(){this.data.atHardBreak=!0}function B(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J}function U(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J}function F(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J}function X(){const J=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";J.type+="Reference",J.referenceType=te,delete J.url,delete J.title}else delete J.identifier,delete J.label;this.data.referenceType=void 0}function T(){const J=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";J.type+="Reference",J.referenceType=te,delete J.url,delete J.title}else delete J.identifier,delete J.label;this.data.referenceType=void 0}function D(J){const te=this.sliceSerialize(J),fe=this.stack[this.stack.length-2];fe.label=n_(te),fe.identifier=Ir(te).toLowerCase()}function M(){const J=this.stack[this.stack.length-1],te=this.resume(),fe=this.stack[this.stack.length-1];if(this.data.inReference=!0,fe.type==="link"){const xe=J.children;fe.children=xe}else fe.alt=te}function j(){const J=this.resume(),te=this.stack[this.stack.length-1];te.url=J}function K(){const J=this.resume(),te=this.stack[this.stack.length-1];te.title=J}function G(){this.data.inReference=void 0}function z(){this.data.referenceType="collapsed"}function ue(J){const te=this.resume(),fe=this.stack[this.stack.length-1];fe.label=te,fe.identifier=Ir(this.sliceSerialize(J)).toLowerCase(),this.data.referenceType="full"}function R(J){this.data.characterReferenceType=J.type}function ee(J){const te=this.sliceSerialize(J),fe=this.data.characterReferenceType;let xe;fe?(xe=Rg(te,fe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):xe=xu(te);const _e=this.stack[this.stack.length-1];_e.value+=xe}function W(J){const te=this.stack.pop();te.position.end=bn(J.end)}function ne(J){N.call(this,J);const te=this.stack[this.stack.length-1];te.url=this.sliceSerialize(J)}function ae(J){N.call(this,J);const te=this.stack[this.stack.length-1];te.url="mailto:"+this.sliceSerialize(J)}function O(){return{type:"blockquote",children:[]}}function I(){return{type:"code",lang:null,meta:null,value:""}}function $(){return{type:"inlineCode",value:""}}function V(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Q(){return{type:"emphasis",children:[]}}function re(){return{type:"heading",depth:0,children:[]}}function me(){return{type:"break"}}function H(){return{type:"html",value:""}}function ce(){return{type:"image",title:null,url:"",alt:null}}function ve(){return{type:"link",title:null,url:"",children:[]}}function Je(J){return{type:"list",ordered:J.type==="listOrdered",start:null,spread:J._spread,children:[]}}function We(J){return{type:"listItem",spread:J._spread,checked:null,children:[]}}function on(){return{type:"paragraph",children:[]}}function Ke(){return{type:"strong",children:[]}}function $e(){return{type:"text",value:""}}function we(){return{type:"thematicBreak"}}}function bn(e){return{line:e.line,column:e.column,offset:e.offset}}function Hg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Hg(e,r):o_(e,r)}}function o_(e,t){let n;for(n in t)if(Wg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function zp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ci({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ci({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ci({start:t.start,end:t.end})+") is still open")}function a_(e){const t=this;t.parser=n;function n(r){return i_(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function l_(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function c_(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function u_(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function d_(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function p_(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function f_(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Xr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function m_(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function h_(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function qg(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function g_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return qg(e,t);const i={src:Xr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function x_(e,t){const n={src:Xr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function y_(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function v_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return qg(e,t);const i={href:Xr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function b_(e,t){const n={href:Xr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function k_(e,t,n){const r=e.all(t),i=n?w_(n):Jg(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function w_(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Jg(n[r])}return t}function Jg(e){const t=e.spread;return t??e.children.length>1}function j_(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function __(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function S_(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function C_(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function N_(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=fu(t.children[1]),c=Ng(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function E_(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let y={type:"element",tagName:o,properties:f,children:[]};p&&(y.children=e.all(p),e.patch(p,y),y=e.applyData(p,y)),u.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function z_(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Tp=9,Pp=32;function T_(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Lp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Lp(t.slice(i),i>0,!1)),o.join("")}function Lp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Tp||o===Pp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Tp||o===Pp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function P_(e,t){const n={type:"text",value:T_(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function L_(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const A_={blockquote:l_,break:c_,code:u_,delete:d_,emphasis:p_,footnoteReference:f_,heading:m_,html:h_,imageReference:g_,image:x_,inlineCode:y_,linkReference:v_,link:b_,listItem:k_,list:j_,paragraph:__,root:S_,strong:C_,table:N_,tableCell:z_,tableRow:E_,text:P_,thematicBreak:L_,toml:Es,yaml:Es,definition:Es,footnoteDefinition:Es};function Es(){}const Kg=-1,Go=0,Ei=1,jo=2,bu=3,ku=4,wu=5,ju=6,Qg=7,Gg=8,Ap=typeof self=="object"?self:globalThis,R_=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case Go:case Kg:return n(a,i);case Ei:{const l=n([],i);for(const c of a)l.push(r(c));return l}case jo:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case bu:return n(new Date(a),i);case ku:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case wu:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case ju:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case Qg:{const{name:l,message:c}=a;return n(new Ap[l](c),i)}case Gg:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Ap[o](a),i)};return r},Rp=e=>R_(new Map,e)(0),mr="",{toString:M_}={},{keys:I_}=Object,li=e=>{const t=typeof e;if(t!=="object"||!e)return[Go,t];const n=M_.call(e).slice(8,-1);switch(n){case"Array":return[Ei,mr];case"Object":return[jo,mr];case"Date":return[bu,mr];case"RegExp":return[ku,mr];case"Map":return[wu,mr];case"Set":return[ju,mr];case"DataView":return[Ei,n]}return n.includes("Array")?[Ei,n]:n.includes("Error")?[Qg,n]:[jo,n]},zs=([e,t])=>e===Go&&(t==="function"||t==="symbol"),O_=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},o=a=>{if(n.has(a))return n.get(a);let[l,c]=li(a);switch(l){case Go:{let d=a;switch(c){case"bigint":l=Gg,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Kg],a)}return i([l,d],a)}case Ei:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(o(f));return p}case jo:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([l,d],a);for(const f of I_(a))(e||!zs(li(a[f])))&&d.push([o(f),o(a[f])]);return p}case bu:return i([l,a.toISOString()],a);case ku:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case wu:{const d=[],p=i([l,d],a);for(const[f,m]of a)(e||!(zs(li(f))||zs(li(m))))&&d.push([o(f),o(m)]);return p}case ju:{const d=[],p=i([l,d],a);for(const f of a)(e||!zs(li(f)))&&d.push(o(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return o},Mp=(e,{json:t,lossy:n}={})=>{const r=[];return O_(!(t||n),!!t,new Map,r)(e),r},_o=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Rp(Mp(e,t)):structuredClone(e):(e,t)=>Rp(Mp(e,t));function $_(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function D_(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function F_(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||$_,r=e.options.footnoteBackLabel||D_,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Xr(p.toLowerCase());let m=0;const y=[],b=e.footnoteCounts.get(p);for(;b!==void 0&&++m<=b;){y.length>0&&y.push({type:"text",value:" "});let g=typeof n=="string"?n:n(c,m);typeof g=="string"&&(g={type:"text",value:g}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const P=d[d.length-1];if(P&&P.type==="element"&&P.tagName==="p"){const g=P.children[P.children.length-1];g&&g.type==="text"?g.value+=" ":P.children.push({type:"text",value:" "}),P.children.push(...y)}else d.push(...y);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,x),l.push(x)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{..._o(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Yg=function(e){if(e==null)return W_;if(typeof e=="function")return Yo(e);if(typeof e=="object")return Array.isArray(e)?B_(e):U_(e);if(typeof e=="string")return V_(e);throw new Error("Expected function, string, or object as test")};function B_(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Yg(e[n]);return Yo(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function U_(e){const t=e;return Yo(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function V_(e){return Yo(t);function t(n){return n&&n.type===e}}function Yo(e){return t;function t(n,r,i){return!!(H_(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function W_(){return!0}function H_(e){return e!==null&&typeof e=="object"&&"type"in e}const Xg=[],q_=!0,Ip=!1,J_="skip";function K_(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Yg(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Xg,y,b,P;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=Q_(n(c,d)),m[0]===Ip))return m;if("children"in c&&c.children){const x=c;if(x.children&&m[0]!==J_)for(b=(r?x.children.length:-1)+a,P=d.concat(x);b>-1&&b<x.children.length;){const g=x.children[b];if(y=l(g,b,P)(),y[0]===Ip)return y;b=typeof y[1]=="number"?y[1]:b+a}}return m}}}function Q_(e){return Array.isArray(e)?e:typeof e=="number"?[q_,e]:e==null?Xg:[e]}function Zg(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),K_(e,o,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const tc={}.hasOwnProperty,G_={};function Y_(e,t){const n=t||G_,r=new Map,i=new Map,o=new Map,a={...A_,...n.handlers},l={all:u,applyData:Z_,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:X_,wrap:t2};return Zg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,m=l.handlers[f];if(tc.call(l.handlers,f)&&m)return m(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:b,...P}=d,x=_o(P);return x.children=l.all(d),x}return _o(d)}return(l.options.unknownHandler||e2)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const y=l.one(f[m],d);if(y){if(m&&f[m-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Op(y.value)),!Array.isArray(y)&&y.type==="element")){const b=y.children[0];b&&b.type==="text"&&(b.value=Op(b.value))}Array.isArray(y)?p.push(...y):p.push(y)}}}return p}}function X_(e,t){e.position&&(t.position=Mk(e))}function Z_(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,_o(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function e2(e,t){const n=t.data||{},r="value"in t&&!(tc.call(n,"hProperties")||tc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function t2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Op(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function $p(e,t){const n=Y_(e,t),r=n.one(e,void 0),i=F_(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function n2(e,t){return e&&"run"in e?async function(n,r){const i=$p(n,{file:r,...t});await e.run(i,r)}:function(n,r){return $p(n,{file:r,...e||t})}}function Dp(e){if(e)throw e}var Hs=Object.prototype.hasOwnProperty,ex=Object.prototype.toString,Fp=Object.defineProperty,Bp=Object.getOwnPropertyDescriptor,Up=function(t){return typeof Array.isArray=="function"?Array.isArray(t):ex.call(t)==="[object Array]"},Vp=function(t){if(!t||ex.call(t)!=="[object Object]")return!1;var n=Hs.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Hs.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Hs.call(t,i)},Wp=function(t,n){Fp&&n.name==="__proto__"?Fp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Hp=function(t,n){if(n==="__proto__")if(Hs.call(t,n)){if(Bp)return Bp(t,n).value}else return;return t[n]},r2=function e(){var t,n,r,i,o,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Hp(l,n),i=Hp(t,n),l!==i&&(d&&i&&(Vp(i)||(o=Up(i)))?(o?(o=!1,a=r&&Up(r)?r:[]):a=r&&Vp(r)?r:{},Wp(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Wp(l,{name:n,newValue:i}));return l};const Ia=Co(r2);function nc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function i2(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?s2(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function s2(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...l){n||(n=!0,t(a,...l))}function o(a){i(null,a)}}const Yt={basename:o2,dirname:a2,extname:l2,join:c2,sep:"/"};function o2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ls(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function a2(e){if(ls(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function l2(e){ls(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function c2(...e){let t=-1,n;for(;++t<e.length;)ls(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":u2(n)}function u2(e){ls(e);const t=e.codePointAt(0)===47;let n=d2(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function d2(e,t){let n="",r=0,i=-1,o=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else l===46&&o>-1?o++:o=-1}return n}function ls(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const p2={cwd:f2};function f2(){return"/"}function rc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function m2(e){if(typeof e=="string")e=new URL(e);else if(!rc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return h2(e)}function h2(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Oa=["history","path","basename","stem","extname","dirname"];class tx{constructor(t){let n;t?rc(t)?n={path:t}:typeof t=="string"||g2(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":p2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Oa.length;){const o=Oa[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Oa.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Yt.basename(this.path):void 0}set basename(t){Da(t,"basename"),$a(t,"basename"),this.path=Yt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Yt.dirname(this.path):void 0}set dirname(t){qp(this.basename,"dirname"),this.path=Yt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Yt.extname(this.path):void 0}set extname(t){if($a(t,"extname"),qp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Yt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){rc(t)&&(t=m2(t)),Da(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Yt.basename(this.path,this.extname):void 0}set stem(t){Da(t,"stem"),$a(t,"stem"),this.path=Yt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ot(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function $a(e,t){if(e&&e.includes(Yt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Yt.sep+"`")}function Da(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function qp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function g2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const x2=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},y2={}.hasOwnProperty;class _u extends x2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=i2()}copy(){const t=new _u;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ia(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ua("data",this.frozen),this.namespace[t]=n,this):y2.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ua("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ts(t),r=this.parser||this.Parser;return Fa("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Fa("process",this.parser||this.Parser),Ba("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const l=Ts(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const m=p,y=r.stringify(m,f);k2(y)?f.value=y:f.result=y,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Fa("processSync",this.parser||this.Parser),Ba("processSync",this.compiler||this.Compiler),this.process(t,i),Kp("processSync","process",n),r;function i(o,a){n=!0,Dp(o),r=a}}run(t,n,r){Jp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){const c=Ts(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Kp("runSync","run",r),i;function o(a,l){Dp(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Ts(n),i=this.compiler||this.Compiler;return Ba("stringify",i),Jp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Ua("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ia(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...y]=d;const b=r[f][1];nc(b)&&nc(m)&&(m=Ia(!0,b,m)),r[f]=[u,m,...y]}}}}const v2=new _u().freeze();function Fa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ba(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ua(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Jp(e){if(!nc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Kp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ts(e){return b2(e)?e:new tx(e)}function b2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function k2(e){return typeof e=="string"||w2(e)}function w2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const j2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Qp=[],Gp={allowDangerousHtml:!0},_2=/^(https?|ircs?|mailto|xmpp)$/i,S2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function nx(e){const t=C2(e),n=N2(e);return E2(t.runSync(t.parse(n),n),e)}function C2(e){const t=e.rehypePlugins||Qp,n=e.remarkPlugins||Qp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Gp}:Gp;return v2().use(a_).use(n).use(n2,r).use(t)}function N2(e){const t=e.children||"",n=new tx;return typeof t=="string"&&(n.value=t),n}function E2(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||z2;for(const d of S2)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+j2+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Zg(e,u),Fk(e,{Fragment:s.Fragment,components:i,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in Aa)if(Object.hasOwn(Aa,m)&&Object.hasOwn(d.properties,m)){const y=d.properties[m],b=Aa[m];(b===null||b.includes(d.tagName))&&(d.properties[m]=c(String(y||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function z2(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||_2.test(e.slice(0,t))?e:""}function T2({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=_.useState(!1),[a,l]=_.useState(r),c=_.useRef(null),u=_.useRef(null);_.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));l(m)}},[e,r]),_.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&o(!1)}return _.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),s.jsxs("div",{ref:c,className:"markdown-editor",children:[s.jsx("style",{children:`
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
      `}),i?s.jsx("div",{className:"monaco-wrapper",children:s.jsx(Wt,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):s.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[s.jsxs("span",{className:"edit-hint",children:[s.jsx(v0,{size:12}),"Click to edit"]}),e?s.jsx("div",{className:"markdown-content",children:s.jsx(nx,{children:e})}):s.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function P2(e){return/^[a-zA-Z0-9_]+$/.test(e)}function L2({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=st(),[l,c]=_.useState(new Set(["basic","model","tools","subagents"])),[u,d]=_.useState(!1),[p,f]=_.useState(!1),[m,y]=_.useState(!1),[b,P]=_.useState(""),[x,g]=_.useState(null);if(!t)return null;function h(T){n(e.id,T)}function L(T){if(T===""){g(null),h({name:T});return}P2(T)?g(null):g("Name can only contain letters, numbers, and underscores"),h({name:T})}function C(T){const D=new Set(l);D.has(T)?D.delete(T):D.add(T),c(D)}const w=e.type==="LlmAgent",S=e;function k(T){w&&h({tools:[...S.tools,T]})}function A(T){w&&h({tools:S.tools.filter((D,M)=>M!==T)})}function N(T,D){if(!w)return;const M=[...S.tools];M[T]=D,h({tools:M})}function v(T){"sub_agents"in e&&h({sub_agents:[...e.sub_agents,T]})}function E(T){"sub_agents"in e&&h({sub_agents:e.sub_agents.filter(D=>D!==T)})}const B=t.agents.filter(T=>T.id!==e.id);async function U(){if(!(!t||!w)){d(!0);try{const T=S.instruction||"",D=T?`Current instruction to improve:

${T}

Please improve and expand this instruction while preserving its core intent.`:void 0,j=t.agents.some(G=>G.id===e.id)?void 0:e,K=await Vs(t.id,e.id,D,j);K.success&&K.prompt?h({instruction:K.prompt}):alert("Failed to generate prompt: "+(K.error||"Unknown error"))}catch(T){alert("Error generating prompt: "+T.message)}finally{d(!1)}}}async function F(){if(!(!t||!w||!b.trim())){d(!0);try{const D=`Current instruction:

${S.instruction||""}

---

Requested changes:
${b}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,j=t.agents.some(G=>G.id===e.id)?void 0:e,K=await Vs(t.id,e.id,D,j);K.success&&K.prompt?(h({instruction:K.prompt}),y(!1),P("")):alert("Failed to apply changes: "+(K.error||"Unknown error"))}catch(T){alert("Error applying changes: "+T.message)}finally{d(!1)}}}async function X(){if(!t||!w)return;const T=S.instruction;if(!T){alert("Please write an instruction first");return}f(!0);try{const D=`Write a 5-10 word description of what this agent does.

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
${T.slice(0,500)}

Your response (5-10 words only):`,M=await Vs(t.id,e.id,D);if(M.success&&M.prompt){let j=M.prompt.trim();j=j.replace(/^["']|["']$/g,"").trim();const K=j.split(/[.!?\n]/)[0].trim(),G=K.length>80?K.slice(0,77)+"...":K;h({description:G})}else alert("Failed to generate description: "+(M.error||"Unknown error"))}catch(D){alert("Error generating description: "+D.message)}finally{f(!1)}}return s.jsxs("div",{className:"agent-editor",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"editor-header",children:[s.jsx(nr,{size:24,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:e.name,onChange:T=>L(T.target.value),placeholder:"Agent name",style:{borderColor:x?"var(--error)":void 0}}),x&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:x})]}),s.jsx("span",{className:"badge badge-info",children:e.type}),s.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[s.jsx(Fn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"editor-content",children:[s.jsxs(ci,{id:"basic",title:"Basic Info",icon:s.jsx(nr,{size:16}),expanded:l.has("basic"),onToggle:()=>C("basic"),children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Description"}),w&&S.instruction&&s.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:X,disabled:p,title:"Generate description from instruction",children:p?s.jsxs(s.Fragment,{children:[s.jsx(Hr,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),s.jsx("input",{type:"text",value:e.description,onChange:T=>h({description:T.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),w&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Instruction"}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(!m),disabled:u||!S.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?s.jsxs(s.Fragment,{children:[s.jsx(Hr,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&s.jsxs("div",{className:"request-changes-box",children:[s.jsx("input",{type:"text",value:b,onChange:T=>P(T.target.value),placeholder:"Describe what changes you want...",onKeyDown:T=>{T.key==="Enter"&&b.trim()?F():T.key==="Escape"&&(y(!1),P(""))},autoFocus:!0}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:F,disabled:u||!b.trim(),children:"Apply"})]}),s.jsx(T2,{value:S.instruction,onChange:T=>h({instruction:T}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Output Key"}),s.jsxs("select",{value:S.output_key||"",onChange:T=>h({output_key:T.target.value||void 0}),children:[s.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(T=>s.jsx("option",{value:T.name,children:T.name},T.name))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Include Contents"}),s.jsxs("select",{value:S.include_contents,onChange:T=>h({include_contents:T.target.value}),children:[s.jsx("option",{value:"default",children:"Default"}),s.jsx("option",{value:"none",children:"None"})]})]})]}),s.jsxs("div",{className:"form-row",style:{gap:24},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:S.disallow_transfer_to_parent,onChange:T=>h({disallow_transfer_to_parent:T.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:S.disallow_transfer_to_peers,onChange:T=>h({disallow_transfer_to_peers:T.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Iterations"}),s.jsx("input",{type:"number",value:e.max_iterations||"",onChange:T=>h({max_iterations:parseInt(T.target.value)||void 0}),placeholder:"No limit"})]})})]}),w&&s.jsx(ci,{id:"model",title:"Model",icon:s.jsx(iu,{size:16}),expanded:l.has("model"),onToggle:()=>C("model"),children:s.jsx(R2,{agent:S,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:T=>h({model:T})})}),w&&s.jsx(ci,{id:"tools",title:`Tools (${S.tools.length})`,icon:s.jsx(Jt,{size:16}),expanded:l.has("tools"),onToggle:()=>C("tools"),children:s.jsx(A2,{tools:S.tools,onAdd:k,onRemove:A,onUpdate:N,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:B,skillsets:t.skillsets||[]})}),"sub_agents"in e&&s.jsx(ci,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:s.jsx(lg,{size:16}),expanded:l.has("subagents"),onToggle:()=>C("subagents"),children:s.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(T=>{const D=t.agents.find(M=>M.id===T);return D?s.jsxs("div",{className:"sub-agent-chip",children:[D.name,s.jsx("button",{onClick:()=>E(T),children:s.jsx(Ae,{size:12})})]},T):null}),s.jsxs("select",{value:"",onChange:T=>{T.target.value&&v(T.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[s.jsx("option",{value:"",children:"Add agent..."}),B.filter(T=>!e.sub_agents.includes(T.id)).map(T=>s.jsx("option",{value:T.id,children:T.name},T.id))]})]})}),w&&s.jsx(ci,{id:"callbacks",title:"Callbacks",icon:s.jsx(rn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>C("callbacks"),children:s.jsx(M2,{agent:S,onUpdate:h,customCallbacks:t.custom_callbacks||[]})})]})]})}function ci({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-header",onClick:i,children:[r?s.jsx(Tt,{size:16}):s.jsx(Pt,{size:16}),s.jsxs("h4",{children:[n," ",t]})]}),r&&s.jsx("div",{className:"section-content",children:o})]})}function A2({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=_.useState(!1),[f,m]=_.useState({}),[y,b]=_.useState(""),P=It.useRef(null),x=It.useRef(null),[g,h]=_.useState(null),[L,C]=_.useState(new Set),w=(R,ee)=>{if(!y.trim())return!0;const W=y.toLowerCase();return R.toLowerCase().includes(W)||((ee==null?void 0:ee.toLowerCase().includes(W))??!1)},S=i.filter(R=>w(R.name,R.description)),k=o.filter(R=>w(R.name,R.description)),A=a.filter(R=>w(R.name,R.description)),N=l.filter(R=>w(R.name,R.description)),v=c.filter(R=>w(R.name,R.description)),E=u.filter(R=>w(R.name,R.description));function B(){if(P.current){const R=P.current.getBoundingClientRect(),ee=window.innerHeight,W=350,ne=ee-R.bottom-16,ae=R.top-16;if(ne>=200||ne>=ae){const O=Math.min(W,ne);m({top:R.bottom+4,left:R.left,maxHeight:O})}else{const O=Math.min(W,ae);m({top:R.top-O-4,left:R.left,maxHeight:O})}}p(!0),b(""),setTimeout(()=>{var R;return(R=x.current)==null?void 0:R.focus()},50)}function U(){p(!1),b("")}function F(R){t({type:"builtin",name:R}),U()}async function X(R){U();const ee=R.tool_filter||[];if(h({server:R,enabledTools:new Set(ee),availableTools:ee.map(W=>({name:W,description:""})),isLoading:ee.length===0,error:void 0}),ee.length===0)try{const{testMcpServer:W}=await M0(async()=>{const{testMcpServer:ae}=await Promise.resolve().then(()=>a0);return{testMcpServer:ae}},void 0),ne=await W({connection_type:R.connection_type,command:R.command,args:R.args,env:R.env,url:R.url,headers:R.headers,timeout:R.timeout||30});ne.success?h(ae=>ae?{...ae,availableTools:ne.tools,enabledTools:new Set(ne.tools.map(O=>O.name)),isLoading:!1}:null):h(ae=>ae?{...ae,isLoading:!1,error:ne.error||"Failed to connect to MCP server"}:null)}catch(W){h(ne=>ne?{...ne,isLoading:!1,error:W.message}:null)}}function T(R){if(!g)return;const ee=new Set(g.enabledTools);ee.has(R)?ee.delete(R):ee.add(R),h({...g,enabledTools:ee})}function D(){if(!g)return;const R=Array.from(g.enabledTools);t({type:"mcp",server:{...g.server,tool_filter:R}}),h(null)}function M(R){const ee=new Set(L);ee.has(R)?ee.delete(R):ee.add(R),C(ee)}function j(R,ee){const W=e[R];if(W.type!=="mcp"||!W.server)return;const ne=W.server.tool_filter||[];let ae;ne.includes(ee)?ae=ne.filter(O=>O!==ee):ae=[...ne,ee],r(R,{...W,server:{...W.server,tool_filter:ae}})}function K(R){t({type:"function",name:R.name,module_path:R.module_path}),U()}function G(R){const ee=c.find(W=>W.id===R);t({type:"agent",agent_id:R,name:ee==null?void 0:ee.name}),U()}function z(R){const ee=u.find(W=>W.id===R);t({type:"skillset",skillset_id:R,name:ee==null?void 0:ee.name}),U()}function ue(R){return o.find(ee=>ee.name===R)}return s.jsxs("div",{children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"tool-list",children:e.map((R,ee)=>{var W;return R.type==="mcp"&&R.server?s.jsxs("div",{className:"mcp-tool-item",children:[s.jsxs("div",{className:"mcp-tool-header",onClick:()=>M(ee),children:[L.has(ee)?s.jsx(Tt,{size:14}):s.jsx(Pt,{size:14}),s.jsx(Jt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"mcp-tool-info",children:[s.jsx("div",{className:"mcp-tool-name",children:R.server.name}),s.jsx("div",{className:"mcp-tool-count",children:R.server.tool_filter===null||R.server.tool_filter===void 0?"all tools":`${R.server.tool_filter.length} tools enabled`})]}),s.jsx("button",{className:"delete-btn",onClick:ne=>{ne.stopPropagation(),n(ee)},children:s.jsx(Ae,{size:14})})]}),L.has(ee)&&s.jsx("div",{className:"mcp-tool-body",children:s.jsx("div",{className:"mcp-tool-list",children:(()=>{const ne=ue(R.server.name),ae=(ne==null?void 0:ne.tool_filter)||R.server.tool_filter||[],O=new Set(R.server.tool_filter||[]);return ae.map(I=>s.jsxs("label",{className:`mcp-tool-chip ${O.has(I)?"enabled":"disabled"}`,onClick:()=>j(ee,I),children:[s.jsx("input",{type:"checkbox",checked:O.has(I),onChange:()=>{},style:{display:"none"}}),I]},I))})()})})]},ee):R.type==="skillset"?s.jsxs("div",{className:"tool-item",children:[s.jsx(fn,{size:14,style:{color:"var(--accent)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:R.name||((W=u.find(ne=>ne.id===R.skillset_id))==null?void 0:W.name)||"SkillSet"}),s.jsx("div",{className:"tool-item-type",children:"skillset"})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(ee),children:s.jsx(Ae,{size:14})})]},ee):s.jsxs("div",{className:"tool-item",children:[s.jsx(Jt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:R.name||R.agent_id}),s.jsx("div",{className:"tool-item-type",children:R.type})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(ee),children:s.jsx(Ae,{size:14})})]},ee)})}),s.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[s.jsxs("button",{ref:P,className:"btn btn-secondary btn-sm",onClick:()=>d?U():B(),children:[s.jsx(Ue,{size:14}),"Add Tool"]}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"dropdown-backdrop",onClick:U}),s.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[s.jsx("div",{className:"dropdown-search",children:s.jsx("input",{ref:x,type:"text",placeholder:"Search tools...",value:y,onChange:R=>b(R.target.value),onKeyDown:R=>R.key==="Escape"&&U()})}),S.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Built-in Tools"}),S.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>F(R.name),children:[s.jsx("div",{className:"dropdown-item-name",children:R.name}),s.jsx("div",{className:"dropdown-item-desc",children:R.description})]},R.name))]}),k.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Known MCP Servers (",k.length,")"]}),k.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>X(R),children:[s.jsxs("div",{className:"dropdown-item-name",children:[R.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:R.tool_filter===null||R.tool_filter===void 0?"all tools":`${R.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:R.description})]},`known-${R.name}`))]}),A.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Project MCP Servers (",A.length,")"]}),A.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>X(R),children:[s.jsxs("div",{className:"dropdown-item-name",children:[R.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:R.tool_filter===null||R.tool_filter===void 0?"all tools":`${R.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:R.description||"Custom MCP server"})]},`project-${R.id||R.name}`))]}),N.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Custom Tools"}),N.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>K(R),children:[s.jsx("div",{className:"dropdown-item-name",children:R.name}),s.jsx("div",{className:"dropdown-item-desc",children:R.description})]},R.id))]}),v.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Agents as Tools"}),v.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>G(R.id),children:[s.jsx("div",{className:"dropdown-item-name",children:R.name}),s.jsx("div",{className:"dropdown-item-desc",children:R.type})]},R.id))]}),E.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["SkillSets (",E.length,")"]}),E.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>z(R.id),children:[s.jsxs("div",{className:"dropdown-item-name",children:[R.name,s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[R.entry_count||0," entries"]})]}),s.jsx("div",{className:"dropdown-item-desc",children:R.description||"Vector knowledge base"})]},R.id))]}),y.trim()&&S.length===0&&k.length===0&&A.length===0&&N.length===0&&v.length===0&&E.length===0&&s.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',y,'"']})]})]})]}),g&&s.jsx("div",{className:"mcp-config-dialog",children:s.jsxs("div",{className:"mcp-config-content",children:[s.jsxs("h3",{children:["Configure ",g.server.name]}),s.jsx("p",{children:g.server.description}),g.isLoading?s.jsxs("div",{className:"mcp-loading",children:[s.jsx("div",{className:"spinner"}),s.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):g.error?s.jsxs("div",{className:"mcp-error",children:[s.jsxs("p",{children:["⚠️ Failed to discover tools: ",g.error]}),s.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mcp-select-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>h({...g,enabledTools:new Set(g.availableTools.map(R=>R.name))}),children:["Select All (",g.availableTools.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>h({...g,enabledTools:new Set}),children:"Select None"})]}),s.jsx("div",{className:"mcp-tools-grid",children:g.availableTools.map(R=>s.jsxs("div",{className:"mcp-tool-row",title:R.description||R.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:g.enabledTools.has(R.name),onChange:()=>T(R.name)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:13,opacity:g.enabledTools.has(R.name)?1:.5,cursor:"pointer"},onClick:()=>T(R.name),children:R.name})]},R.name))})]}),s.jsxs("div",{className:"dialog-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>h(null),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:D,disabled:g.enabledTools.size===0,children:["Add ",g.enabledTools.size," Tools"]})]})]})})]})}function R2({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,m;const o=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!o,c=o||(()=>{if(!e.model)return n;const y=t.find(b=>{var P,x,g;return b.provider===((P=e.model)==null?void 0:P.provider)&&b.model_name===((x=e.model)==null?void 0:x.model_name)&&b.api_base===((g=e.model)==null?void 0:g.api_base)});return y==null?void 0:y.id})()||n||((m=t[0])==null?void 0:m.id);It.useEffect(()=>{var y,b,P,x,g;if(o){const h=t.find(L=>L.id===o);h&&(((y=e.model)==null?void 0:y.provider)!==h.provider||((b=e.model)==null?void 0:b.model_name)!==h.model_name||((P=e.model)==null?void 0:P.api_base)!==h.api_base||((x=e.model)==null?void 0:x.temperature)!==h.temperature||((g=e.model)==null?void 0:g.max_output_tokens)!==h.max_output_tokens)&&i({provider:h.provider,model_name:h.model_name,api_base:h.api_base,temperature:h.temperature,max_output_tokens:h.max_output_tokens,top_p:h.top_p,top_k:h.top_k,fallbacks:[],_appModelId:o})}},[o,t,e.model,i]);function u(y){const b=t.find(P=>P.id===y);b&&i({provider:b.provider,model_name:b.model_name,api_base:b.api_base,temperature:b.temperature,max_output_tokens:b.max_output_tokens,top_p:b.top_p,top_k:b.top_k,fallbacks:[],_appModelId:y})}function d(){var y;if(a){const b=n||((y=t[0])==null?void 0:y.id);b&&u(b)}else{const b=e.model;if(b){const{_appModelId:P,...x}=b;i(x)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(y){const{_appModelId:b,...P}=e.model||{};i({...P,...y})}return t.find(y=>y.id===c),t.find(y=>y.id===n),s.jsxs("div",{className:"model-selector",children:[s.jsx("style",{children:`
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
      `}),t.length>0&&s.jsxs("div",{className:"model-choice",children:[s.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Use App Model"}),s.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),s.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Custom"}),s.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?s.jsx("div",{className:"app-model-select",children:t.map(y=>s.jsx("div",{className:`app-model-item ${c===y.id?"selected":""}`,onClick:()=>u(y.id),children:s.jsxs("div",{className:"app-model-item-info",children:[s.jsxs("div",{className:"app-model-item-name",children:[y.name,y.id===n&&s.jsxs("span",{className:"default-badge",children:[s.jsx(ag,{size:10,fill:"currentColor"}),"Default"]})]}),s.jsxs("div",{className:"app-model-item-details",children:[y.provider," / ",y.model_name,y.api_base&&` • ${y.api_base}`]})]})},y.id))}):t.length===0?s.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&s.jsx("div",{className:"custom-model-form",children:s.jsx(dg,{projectId:r,values:e.model||{},onChange:p})})]})}function M2({agent:e,onUpdate:t,customCallbacks:n}){const r=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"},{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}];function i(a,l){const c=e[a]||[],u=n.find(d=>d.id===l);u&&t({[a]:[...c,{module_path:u.module_path}]})}function o(a,l){const c=e[a]||[];t({[a]:c.filter((u,d)=>d!==l)})}return s.jsx("div",{className:"callbacks-editor",children:r.map(({key:a,label:l})=>{const c=e[a]||[],u=n;return s.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:l}),u.length>0&&s.jsxs("select",{value:"",onChange:d=>{d.target.value&&(i(a,d.target.value),d.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[s.jsx("option",{value:"",children:"Add callback..."}),u.filter(d=>{const p=d.module_path;return!c.some(f=>f.module_path===p)}).map(d=>s.jsx("option",{value:d.id,children:d.name},d.id))]})]}),c.length===0?s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):s.jsx("div",{className:"callback-list",children:c.map((d,p)=>{const f=n.find(m=>m.module_path===d.module_path);return s.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[s.jsx("span",{style:{fontSize:"12px"},children:(f==null?void 0:f.name)||d.module_path}),s.jsx("button",{onClick:()=>o(a,p),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:s.jsx(Ae,{size:12})})]},p)})})]},a)})})}const Va=[{type:"LlmAgent",label:"LLM Agent",icon:nr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:_0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:k0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Vl,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function I2(){return`agent_${Date.now().toString(36)}`}function O2(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function $2(e,t){const r={id:I2(),name:`New ${e}`,description:""},i=t?O2(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function D2({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:l}=st(),[c,u]=_.useState(new Set),[d,p]=_.useState(!1),[f,m]=_.useState(""),[y,b]=_.useState(new Map),[P,x]=_.useState(320),[g,h]=_.useState(!1),L=_.useRef(null),[C,w]=_.useState(null),S=_.useRef(null),[k,A]=_.useState(null),N=_.useRef(null),v=_.useRef(null),E=_.useCallback(I=>{I.preventDefault(),h(!0)},[]);if(_.useEffect(()=>{const I=V=>{if(!g)return;const Q=Math.min(Math.max(200,V.clientX),600);x(Q)},$=()=>{h(!1)};return g&&(document.addEventListener("mousemove",I),document.addEventListener("mouseup",$),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",$),document.body.style.cursor="",document.body.style.userSelect=""}},[g]),_.useEffect(()=>{if(t){const I=t.agents.filter($=>"sub_agents"in $&&$.sub_agents.length>0).map($=>$.id);u(new Set(I))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;function B(){if(!f.trim()||!t)return;const I=`generating_${Date.now()}`,$=f;b(V=>new Map(V).set(I,$)),p(!1),m(""),Hh(t.id,$).then(V=>{var Q,re,me,H;if(V.success&&V.config){const ce=V.config,ve=[];if((Q=ce.tools)!=null&&Q.builtin)for(const Ke of ce.tools.builtin)ve.push({type:"builtin",name:Ke});if((re=ce.tools)!=null&&re.mcp)for(const Ke of ce.tools.mcp){const $e=l.find(we=>we.name===Ke.server);$e&&ve.push({type:"mcp",server:{...$e,tool_filter:Ke.tools}})}if((me=ce.tools)!=null&&me.custom)for(const Ke of ce.tools.custom){const $e=t.custom_tools.find(we=>we.name===Ke);$e&&ve.push({type:"function",name:Ke,module_path:$e.module_path})}if((H=ce.tools)!=null&&H.agents)for(const Ke of ce.tools.agents){const $e=t.agents.find(we=>we.id===Ke);$e&&ve.push({type:"agent",agent_id:Ke,name:$e.name})}const Je=t.app.models||[],We=Je.find(Ke=>Ke.id===t.app.default_model_id)||Je[0],on={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:ce.name||"new_agent",description:ce.description||"",instruction:ce.instruction||"",model:We?{provider:We.provider,model_name:We.model_name,api_base:We.api_base,temperature:We.temperature,max_output_tokens:We.max_output_tokens,top_p:We.top_p,top_k:We.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:ve,sub_agents:ce.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(on),a(on.id),e==null||e(on.id)}else console.error("Failed to generate agent:",V.error)}).catch(V=>{console.error("Error generating agent:",V)}).finally(()=>{b(V=>{const Q=new Map(V);return Q.delete(I),Q})})}const U=t.agents.find(I=>I.id===o);function F(I){a(I),e==null||e(I)}function X(I){const $=t.app.models||[],V=$.find(re=>re.id===t.app.default_model_id)||$[0],Q=$2(I,V);n(Q),F(Q.id),setShowTypeSelector(!1)}function T(I,$){$.stopPropagation(),confirm("Delete this agent?")&&(r(I),o===I&&(e==null||e(null)))}function D(I){const $=new Set(c);$.has(I)?$.delete(I):$.add(I),u($)}function M(I){if(!N.current||!S.current)return;const $=N.current.getBoundingClientRect(),V=I.clientY-$.top,Q=60,re=8;if(V<Q){const me=Math.max(1,re*(1-V/Q));N.current.scrollTop-=me}else if(V>$.height-Q){const me=Math.max(1,re*(1-($.height-V)/Q));N.current.scrollTop+=me}}function j(I,$){I.dataTransfer.setData("text/plain",$),I.dataTransfer.effectAllowed="move",S.current=$,requestAnimationFrame(()=>w($))}function K(){S.current=null,w(null),A(null),v.current&&(cancelAnimationFrame(v.current),v.current=null)}function G(I,$,V){const Q=S.current;if(I.preventDefault(),I.stopPropagation(),Q===$)return;const re=t.agents.find(me=>me.id===Q);re&&"sub_agents"in re&&R(re,$)||(I.dataTransfer.dropEffect="move",A({agentId:$,type:V}))}function z(I){const $=I.relatedTarget;(!$||!I.currentTarget.contains($))&&A(null)}function ue(I,$,V){I.preventDefault(),I.stopPropagation();const Q=I.dataTransfer.getData("text/plain");if(!Q||Q===$)return;const re=t.agents.find(H=>H.id===$),me=t.agents.find(H=>H.id===Q);if(!(!re||!me)){if(V==="sub_agent")"sub_agents"in re&&(t.agents.forEach(H=>{"sub_agents"in H&&H.sub_agents.includes(Q)&&i(H.id,{sub_agents:H.sub_agents.filter(ce=>ce!==Q)})}),re.sub_agents.includes(Q)||(i($,{sub_agents:[...re.sub_agents,Q]}),u(H=>new Set([...H,$]))));else if(V==="tool"&&"tools"in re){const H=re;H.tools.some(ve=>ve.type==="agent"&&ve.agent_id===Q)||i($,{tools:[...H.tools,{type:"agent",agent_id:Q,name:me.name}]})}w(null),A(null)}}function R(I,$){if(!("sub_agents"in I))return!1;if(I.sub_agents.includes($))return!0;for(const V of I.sub_agents){const Q=t.agents.find(re=>re.id===V);if(Q&&R(Q,$))return!0}return!1}function ee(I){const $=Va.find(V=>V.type===I);return $?$.icon:nr}function W(I){const $=Va.find(V=>V.type===I);return $?$.color:"#888"}function ne(I,$=0){return I.map(V=>{const Q=ee(V.type),re=W(V.type),me="sub_agents"in V&&V.sub_agents.length>0,H="sub_agents"in V,ce=V.type==="LlmAgent",ve=c.has(V.id),Je=C===V.id,We=(k==null?void 0:k.agentId)===V.id&&(k==null?void 0:k.type)==="sub_agent",on=(k==null?void 0:k.agentId)===V.id&&(k==null?void 0:k.type)==="tool",Ke=me?V.sub_agents.map(we=>t.agents.find(J=>J.id===we)).filter(we=>we!==void 0):[],$e=C&&C!==V.id&&(H||ce);return s.jsxs("div",{className:"agent-tree-item",children:[s.jsxs("div",{className:`agent-item ${o===V.id?"selected":""} ${Je?"dragging":""} ${$e?"drop-target":""}`,onClick:()=>F(V.id),style:{paddingLeft:12+$*20},draggable:!0,onDragStart:we=>j(we,V.id),onDragEnd:K,onDragOver:we=>{$e&&(we.preventDefault(),we.stopPropagation())},children:[s.jsx("div",{className:"drag-handle",children:s.jsx(g0,{size:12})}),me?s.jsx("button",{className:"expand-btn",onClick:we=>{we.stopPropagation(),D(V.id)},children:ve?s.jsx(Tt,{size:16}):s.jsx(Pt,{size:16})}):s.jsx("span",{style:{width:20}}),s.jsx("div",{className:"agent-icon",style:{background:re},children:s.jsx(Q,{size:14})}),s.jsx("span",{className:"agent-name",children:V.name}),s.jsx("button",{className:"delete-btn",onClick:we=>T(V.id,we),children:s.jsx(Ae,{size:14})}),$e&&s.jsxs("div",{className:"drop-overlay",children:[H&&s.jsxs("div",{className:`drop-zone-overlay ${We?"active":""}`,onDragOver:we=>G(we,V.id,"sub_agent"),onDragLeave:z,onDrop:we=>ue(we,V.id,"sub_agent"),children:[s.jsx(lg,{size:12}),s.jsx("span",{children:"Sub-agent"})]}),ce&&s.jsxs("div",{className:`drop-zone-overlay ${on?"active":""}`,onDragOver:we=>G(we,V.id,"tool"),onDragLeave:z,onDrop:we=>ue(we,V.id,"tool"),children:[s.jsx(Jt,{size:12}),s.jsx("span",{children:"Tool"})]})]})]}),me&&ve&&s.jsx("div",{className:"sub-agents",children:ne(Ke,$+1)})]},V.id)})}const ae=new Set(t.agents.flatMap(I=>"sub_agents"in I?I.sub_agents:[])),O=t.agents.filter(I=>!ae.has(I.id));return s.jsxs("div",{className:"agents-panel",children:[s.jsx("style",{children:`
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
        
        .drag-handle {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          opacity: 0.4;
          cursor: grab;
          padding: 4px;
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
      `}),s.jsxs("aside",{className:"agents-sidebar",style:{width:P},children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Agents (",t.agents.length,")",y.size>0&&s.jsxs("span",{className:"generating-badge",children:[s.jsx(Hr,{size:12,className:"spin"})," ",y.size]})]}),s.jsxs("div",{className:"header-buttons",children:[Va.map(({type:I,icon:$,color:V})=>s.jsx("button",{className:"quick-add-btn",style:{background:V},onClick:()=>X(I),title:`Add ${I}`,children:s.jsx($,{size:14})},I)),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:s.jsx(Ea,{size:14})})]})]}),s.jsx("div",{className:"agents-list",ref:N,onDragOver:M,children:t.agents.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(nr,{size:32}),s.jsx("p",{children:"No agents yet"})]}):ne(O)})]}),s.jsx("div",{ref:L,className:`sidebar-resizer ${g?"resizing":""}`,onMouseDown:E}),s.jsx("div",{className:"agent-editor-area",children:U?s.jsx(L2,{agent:U}):s.jsxs("div",{className:"empty-state card",children:[s.jsx(nr,{size:48}),s.jsxs("p",{children:["Select an agent to edit",s.jsx("br",{}),"or create a new one"]})]})}),d&&s.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:s.jsxs("div",{className:"quick-setup-content",onClick:I=>I.stopPropagation(),children:[s.jsxs("h2",{children:[s.jsx(Ea,{size:20})," Quick Agent Setup"]}),s.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),s.jsxs("div",{className:"quick-setup-form",children:[s.jsx("textarea",{value:f,onChange:I=>m(I.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:I=>{I.key==="Enter"&&(I.metaKey||I.ctrlKey)&&f.trim()&&B()}}),s.jsxs("div",{className:"quick-setup-info",children:[s.jsx("strong",{children:"Available resources:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),s.jsxs("li",{children:[l.length," MCP servers"]}),s.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),s.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),s.jsxs("div",{className:"quick-setup-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:B,disabled:!f.trim(),children:[s.jsx(Ea,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var Su="\x1B[0m",Cu="\x1B[1m",rx=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",F2=e=>{let t=rx(e),n=`${Cu}[MONACOPILOT ERROR] ${t}${Su}`;return console.error(n),{message:t}},B2=(e,t)=>{console.warn(`${Cu}[MONACOPILOT WARN] ${e}${t?`
${rx(t)}`:""}${Su}`)},U2=(e,t,n)=>console.warn(`${Cu}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${Su}`),So={report:F2,warn:B2,warnDeprecated:U2},Yp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},V2=100,W2=!0,ix="onIdle",H2=!0,q2=120,J2=400,K2=0,Nu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),Q2=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),G2=e=>e.getValue(),Y2=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},sx=class ox{constructor(){this.cache=new Y2(ox.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=Nu(n,r),a=o,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=o-1&&u<=l+1:c===i?u>=o-1:c===a?u<=l+1:!0}};sx.MAX_CACHE_SIZE=20;var X2=sx,Z2=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},eS=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),y=t.slice(-f);m===y&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},tS=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new eS}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,o),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,l=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},nS=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},rS=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:l=V2}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(b,P,x)=>{let g=b(e,t);return P?Yp(g,P,x):g},p=(b,P)=>!b||!P?b:b.map(({content:x,...g})=>({...g,content:Yp(x,P)})),f=d(Nu,u,{truncateDirection:"keepEnd"}),m=d(Q2,u,{truncateDirection:"keepStart"}),y=p(a,u);return{filename:r,language:i,technologies:o,relatedFiles:y,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},iS=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:o,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},sS=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,ui=e=>({items:e,enableForwardStability:!0}),ic=new X2,oS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=ix,enableCaching:l=W2,allowFollowUpCompletions:c=H2,onError:u,requestHandler:d}=o;if(l&&!i){let p=ic.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return ui(p)}if(r.isCancellationRequested||!c&&i)return ui([]);try{let p=iS(async y=>{var P,x;(P=o.onCompletionRequested)==null||P.call(o,y);let b;if(d)b=await d(y);else if(o.endpoint)b=await nS({endpoint:o.endpoint,...y});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(b.error)throw new Error(b.error);return(x=o.onCompletionRequestFinished)==null||x.call(o,y,b),b},{onTyping:q2,onIdle:J2,onDemand:K2}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=rS({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let y=new Z2(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),b=new tS(e);return l&&ic.add({completion:y,range:b.computeCacheRange(n,y),textBeforeCursor:Nu(n,t)}),ui([{insertText:y,range:b.computeInsertionRange(n,y,t)}])}}catch(p){if(sS(p))return ui([]);u?u(p):So.warn("Cannot provide completion",p)}return ui([])},Eu=new WeakMap,Xo=e=>Eu.get(e),aS=(e,t)=>{Eu.set(e,t)},Xp=e=>{Eu.delete(e)},lS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),cS=(e,t)=>{let n=Xo(e);!n||!n.options||(n.options={...n.options,...t})},uS=(e,t,n)=>{let r=Xo(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:G2(t),position:o,triggerType:c.trigger??ix})))return oS({monaco:e,mdl:i,pos:o,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,o,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,o.range))},freeInlineCompletions:()=>{}}):null},dS={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},pS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(dS).some(t=>t(this.monaco,e))}},fS=(e,t,n,r)=>{let i=new pS(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},ax=(e,t,n)=>{let r=[];aS(t,lS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Xo(t);if(!i)return So.warn("Completion is not registered properly. State not found."),hS();let o=uS(e,t,n);o&&r.push(o);let a=fS(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();ic.clear(),Xp(t)},trigger:()=>mS(t),updateOptions:l=>{cS(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):So.report(i),{deregister:()=>{for(let o of r)o.dispose();Xp(t)},trigger:()=>{},updateOptions:()=>{}}}},mS=e=>{let t=Xo(e);if(!t){So.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},hS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function gS(){return`tool_${Date.now().toString(36)}`}function xS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const yS=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function vS({onSelectTool:e}){var me;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=st(),[d,p]=_.useState(""),[f,m]=_.useState(null),[y,b]=_.useState("tools"),[P,x]=_.useState(null),[g,h]=_.useState(""),[L,C]=_.useState(!1),[w,S]=_.useState(null),[k,A]=_.useState(!1),[N,v]=_.useState(!1),[E,B]=_.useState(null),[U,F]=_.useState(null);if(!t)return null;const X=t.mcp_servers||[],T=t.custom_tools.find(H=>H.id===a),D=X.find(H=>H.name===P),M=new Set(X.map(H=>H.name)),j=u.filter(H=>!M.has(H.name));function K(H){l(H),e==null||e(H)}_.useEffect(()=>{T&&(p(T.code),F(null))},[a]),_.useEffect(()=>{D&&(h(JSON.stringify(D,null,2)),C(!1))},[P]);function G(){const H=gS();r({id:H,name:"new_tool",description:"",module_path:"tools.custom",code:yS,state_keys_used:[]}),K(H)}function z(H,ce){ce.stopPropagation(),confirm("Delete this tool?")&&(o(H),a===H&&(e==null||e(null)))}function ue(H){T&&(H.name!==void 0&&(H.name===""||xS(H.name)?F(null):F("Name can only contain letters, numbers, and underscores")),i(T.id,H))}function R(H){H!==void 0&&T&&(p(H),ue({code:H}))}async function ee(){if(T){A(!0);try{const H=await qh(t.id,T.name,T.description,T.state_keys_used);H.success&&H.code?(p(H.code),ue({code:H.code})):(console.error("Failed to generate tool code:",H.error),alert("Failed to generate tool code: "+(H.error||"Unknown error")))}catch(H){console.error("Error generating tool code:",H),alert("Error generating tool code: "+H.message)}finally{A(!1)}}}const W=_.useRef(null),ne=_.useCallback((H,ce)=>{if(W.current&&typeof W.current=="function")try{W.current()}catch{}try{const ve=ax(ce,H,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof ve=="function"?W.current=ve:W.current=null}catch{W.current=null}},[]);_.useEffect(()=>()=>{if(W.current&&typeof W.current=="function")try{W.current()}catch{}},[]);function ae(){const H={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...X,H]}),x(H.name),S(null)}function O(H){const ce={...H};n({mcp_servers:[...X,ce]}),x(ce.name),S(null)}function I(H,ce){ce.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:X.filter(ve=>ve.name!==H)}),P===H&&x(null))}function $(H){H!==void 0&&(h(H),C(H!==JSON.stringify(D,null,2)))}function V(){if(D)try{const H=JSON.parse(g),ce=D.name,ve=X.map(Je=>Je.name===ce?H:Je);n({mcp_servers:ve}),x(H.name),C(!1)}catch(H){alert("Invalid JSON: "+H.message)}}async function Q(){v(!0),B(null);try{const H=JSON.parse(g),ce=await Kh({connection_type:H.connection_type,command:H.command,args:H.args,env:H.env,url:H.url,headers:H.headers,timeout:H.timeout||30});if(B(ce),ce.success&&ce.tools.length>0){const ve={...H,tool_filter:ce.tools.map(Je=>Je.name)};h(JSON.stringify(ve,null,2)),C(!0)}}catch(H){B({success:!1,tools:[],error:H.message})}finally{v(!1)}}const re={};return t.custom_tools.forEach(H=>{const ce=H.module_path||"tools";re[ce]||(re[ce]=[]),re[ce].push(H)}),s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"tools-sidebar",children:[s.jsxs("div",{className:"sidebar-tabs",children:[s.jsxs("button",{className:`sidebar-tab ${y==="tools"?"active":""}`,onClick:()=>b("tools"),children:[s.jsx(Jt,{size:14}),"Tools"]}),s.jsxs("button",{className:`sidebar-tab ${y==="mcp"?"active":""}`,onClick:()=>b("mcp"),children:[s.jsx(fr,{size:14}),"MCP"]})]}),y==="tools"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:G,children:[s.jsx(Ue,{size:14}),"New"]})]}),s.jsxs("div",{className:"tools-tree",children:[c.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Yd,{size:14}),"Built-in Tools"]}),c.map(H=>s.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===H.name?"selected":""}`,onClick:()=>{m(H),K(null),x(null)},children:[s.jsx(Hl,{size:14}),s.jsx("span",{className:"tool-name",children:H.name})]},H.name))]}),t.custom_tools.length===0&&c.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(rn,{size:32}),s.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(re).map(([H,ce])=>s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(h0,{size:14}),H]}),ce.map(ve=>s.jsxs("div",{className:`tool-item ${a===ve.id?"selected":""}`,onClick:()=>{K(ve.id),m(null),x(null)},children:[s.jsx(Jt,{size:14}),s.jsx("span",{className:"tool-name",children:ve.name}),s.jsx("button",{className:"delete-btn",onClick:Je=>z(ve.id,Je),children:s.jsx(Ae,{size:14})})]},ve.id))]},H))]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["MCP Servers (",X.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ae,children:[s.jsx(Ue,{size:14}),"Custom"]})]}),s.jsxs("div",{className:"tools-tree",children:[X.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Wl,{size:14}),"Configured (",X.length,")"]}),X.map(H=>s.jsxs("div",{className:`tool-item ${P===H.name?"selected":""}`,onClick:()=>{x(H.name),S(null),K(null),m(null)},children:[s.jsx(fr,{size:14}),s.jsx("span",{className:"tool-name",children:H.name}),s.jsx("span",{className:"tool-type-badge",children:H.connection_type}),s.jsx("button",{className:"delete-btn",onClick:ce=>I(H.name,ce),children:s.jsx(Ae,{size:14})})]},H.name))]}),j.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Yd,{size:14}),"Available Templates (",j.length,")"]}),j.map(H=>s.jsxs("div",{className:`tool-item known-server ${(w==null?void 0:w.name)===H.name?"selected":""}`,onClick:()=>{S(H),x(null),K(null),m(null)},children:[s.jsx(fr,{size:14}),s.jsx("span",{className:"tool-name",children:H.name}),s.jsx("span",{className:"tool-type-badge",children:H.connection_type})]},H.name))]}),X.length===0&&j.length===0&&s.jsxs("div",{className:"empty-state",children:[s.jsx(fr,{size:32}),s.jsx("p",{children:"No MCP servers available"})]})]})]})]}),s.jsx("div",{className:"tool-editor",children:f?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Hl,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),s.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),s.jsxs("div",{className:"builtin-tool-info",children:[s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:f.description||"No description available."})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Usage"}),s.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),s.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Note"}),s.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):T?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Jt,{size:20,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:T.name,onChange:H=>ue({name:H.target.value}),placeholder:"Tool name",style:{borderColor:U?"var(--error)":void 0}}),U&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:U})]})]}),s.jsxs("div",{className:"editor-meta",children:[s.jsxs("div",{className:"meta-field grow",children:[s.jsx("label",{children:"Description"}),s.jsx("input",{type:"text",value:T.description,onChange:H=>ue({description:H.target.value}),placeholder:"What does this tool do?"})]}),s.jsxs("div",{className:"meta-field",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:T.module_path,onChange:H=>ue({module_path:H.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:ee,disabled:k||!T.name||!T.description,title:!T.name||!T.description?"Add a name and description first":"Generate code using AI",children:k?s.jsxs(s.Fragment,{children:[s.jsx(Hr,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(lu,{size:14}),"Write Tool"]})}),s.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),s.jsx("div",{className:"code-editor",children:s.jsx(Wt,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:R,onMount:ne,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),s.jsxs("div",{className:"state-keys-panel",children:[s.jsxs("h4",{children:[s.jsx(su,{size:14})," State Keys Used"]}),s.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(H=>{const ce=T.state_keys_used.includes(H.name);return s.jsxs("label",{className:`state-key-chip ${ce?"selected":""}`,title:H.description,children:[s.jsx("input",{type:"checkbox",checked:ce,onChange:ve=>{const Je=ve.target.checked?[...T.state_keys_used,H.name]:T.state_keys_used.filter(We=>We!==H.name);ue({state_keys_used:Je})}}),H.name,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",H.type,")"]})]},H.name)})})]})]}):w?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(fr,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:w.name}),s.jsx("span",{className:"badge badge-info",children:w.connection_type}),s.jsx("span",{className:"badge badge-muted",children:"Template"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>O(w),children:[s.jsx(Ue,{size:14}),"Add to Project"]})]}),s.jsxs("div",{className:"known-server-preview",children:[s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:w.description})]}),s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Command"}),s.jsxs("code",{children:[w.command," ",(me=w.args)==null?void 0:me.join(" ")]})]}),w.env&&Object.keys(w.env).length>0&&s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Required Environment Variables"}),s.jsx("div",{className:"env-vars",children:Object.entries(w.env).map(([H,ce])=>s.jsxs("div",{className:"env-var",children:[s.jsx("code",{children:H}),ce?s.jsx("span",{className:"env-value",children:ce}):s.jsx("span",{className:"env-required",children:"Required"})]},H))})]}),w.tool_filter&&w.tool_filter.length>0&&s.jsxs("div",{className:"preview-section",children:[s.jsxs("h4",{children:["Available Tools (",w.tool_filter.length,")"]}),s.jsx("div",{className:"tool-badges",children:w.tool_filter.map(H=>s.jsx("span",{className:"tool-badge",children:H},H))})]}),s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Configuration Preview"}),s.jsx("pre",{className:"config-preview",children:JSON.stringify(w,null,2)})]})]})]}):D?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(fr,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:D.name}),s.jsx("span",{className:"badge badge-info",children:D.connection_type}),L&&s.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:Q,disabled:N,title:"Test connection and discover available tools",children:[N?s.jsx(Hr,{size:14,className:"spin"}):s.jsx(Wl,{size:14}),N?"Testing...":"Test Connection"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:V,disabled:!L,children:[s.jsx(au,{size:14}),"Save"]})]}),E&&s.jsx("div",{className:`mcp-test-result ${E.success?"success":"error"}`,children:E.success?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",E.tools.length," tools"]}),E.tools.length>0&&s.jsxs("div",{className:"test-result-tools",children:[s.jsx("strong",{children:"Available tools:"}),s.jsx("ul",{children:E.tools.map(H=>s.jsxs("li",{children:[s.jsx("code",{children:H.name}),H.description&&s.jsxs("span",{children:[" — ",H.description]})]},H.name))}),s.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),s.jsx("div",{className:"test-result-error",children:E.error})]})}),s.jsx("div",{className:"mcp-info",children:s.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),s.jsx("div",{className:"code-editor",children:s.jsx(Wt,{height:"100%",language:"json",theme:"vs-dark",value:g,onChange:$,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),s.jsxs("div",{className:"mcp-help",children:[s.jsx("h4",{children:"Schema Reference"}),s.jsxs("div",{className:"schema-fields",children:[s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"name"}),s.jsx("span",{children:"Unique identifier for this server"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"description"}),s.jsx("span",{children:"Human-readable description"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"connection_type"}),s.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"command"}),s.jsx("span",{children:"Command to run (for stdio)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"args"}),s.jsx("span",{children:"Array of command arguments"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"env"}),s.jsx("span",{children:"Environment variables object"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"url"}),s.jsx("span",{children:"Server URL (for sse/http)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"tool_filter"}),s.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):s.jsxs("div",{className:"empty-state",children:[s.jsx(rn,{size:48}),s.jsxs("p",{children:["Select a tool to view",s.jsx("br",{}),"or create a new custom tool"]})]})})]})}function bS(){return`callback_${Date.now().toString(36)}`}function Zp(e){return/^[a-zA-Z0-9_]+$/.test(e)}function lx(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return lx("before_agent")}}function kS({onSelectCallback:e}){var k,A;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=st(),[a,l]=_.useState(""),[c,u]=_.useState(null),[d,p]=_.useState(null),[f,m]=_.useState(!1),y=_.useRef(null);if(!t)return null;const b=t.custom_callbacks||[],P=b.find(N=>N.id===c);function x(N){u(N),e==null||e(N)}_.useEffect(()=>{P?(l(P.code),p(null)):l("")},[c,P]);function g(){const N=bS(),v={id:N,name:"new_callback",description:"",module_path:"callbacks.custom",code:lx("before_agent"),state_keys_used:[]};r(v),x(N)}function h(N,v){v.stopPropagation(),confirm("Delete this callback?")&&(o(N),c===N&&(e==null||e(null),u(null),l("")))}function L(){if(!c)return;const N=b.find(B=>B.id===c);if(!N)return;const v=N.name.trim();if(!v){alert("Please enter a name");return}if(!Zp(v)){p("Name must contain only alphanumeric characters and underscores");return}if(b.find(B=>B.name===v&&B.id!==N.id)){p("A callback with this name already exists");return}i(N.id,{code:a,name:v,description:N.description,module_path:N.module_path,state_keys_used:N.state_keys_used}),p(null)}function C(N,v){y.current=v;try{ax(v,{endpoint:"/api/code-completion",language:"python"})}catch(E){console.warn("Failed to register Monacopilot completion:",E)}}async function w(){if(P){m(!0);try{let N="before_agent";const v=P.name.toLowerCase(),E=P.description.toLowerCase();v.includes("after_agent")||E.includes("after agent")?N="after_agent":v.includes("before_model")||E.includes("before model")?N="before_model":v.includes("after_model")||E.includes("after model")?N="after_model":v.includes("before_tool")||E.includes("before tool")?N="before_tool":v.includes("after_tool")||E.includes("after tool")?N="after_tool":(v.includes("before_agent")||E.includes("before agent"))&&(N="before_agent");const B=await Jh(t.id,P.name,P.description,N,P.state_keys_used);B.success&&B.code?(l(B.code),i(P.id,{code:B.code})):(console.error("Failed to generate callback code:",B.error),alert("Failed to generate callback code: "+(B.error||"Unknown error")))}catch(N){console.error("Error generating callback code:",N),alert("Error generating callback code: "+N.message)}finally{m(!1)}}}const S=((A=(k=t.app)==null?void 0:k.state_keys)==null?void 0:A.map(N=>N.name))||[];return s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tools-sidebar",children:[s.jsxs("div",{className:"tools-sidebar-header",children:[s.jsx("h3",{children:"Callbacks"}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,title:"Add Callback",children:s.jsx(Ue,{size:16})})]}),s.jsx("div",{className:"tools-list",children:b.length===0?s.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):b.map(N=>s.jsxs("div",{className:`tool-item ${c===N.id?"selected":""}`,onClick:()=>x(N.id),children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{className:"tool-item-name",children:N.name}),N.description&&s.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:N.description})]}),s.jsx("div",{className:"tool-item-actions",children:s.jsx("button",{className:"btn btn-icon btn-sm",onClick:v=>h(N.id,v),title:"Delete",children:s.jsx(Ae,{size:14})})})]},N.id))})]}),s.jsx("div",{className:"tools-editor",children:P?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tools-editor-header",children:[s.jsx("h3",{children:"Edit Callback"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:L,children:[s.jsx(au,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),s.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:P.name,onChange:N=>{const v=N.target.value;i(P.id,{name:v}),d&&Zp(v)&&p(null)},className:d?"error":""}),d&&s.jsx("div",{className:"error-message",children:d})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:P.description,onChange:N=>i(P.id,{description:N.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:P.module_path,onChange:N=>i(P.id,{module_path:N.target.value}),placeholder:"callbacks.custom"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"State Keys Used"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:S.map(N=>{const v=P.state_keys_used.includes(N);return s.jsxs("button",{type:"button",className:`btn btn-sm ${v?"btn-primary":"btn-secondary"}`,onClick:()=>{const E=v?P.state_keys_used.filter(B=>B!==N):[...P.state_keys_used,N];i(P.id,{state_keys_used:E})},children:[s.jsx(su,{size:12,style:{marginRight:"4px"}}),N]},N)})}),S.length===0&&s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{children:"Code"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:w,disabled:f||!P.name,title:P.name?"Generate code using AI":"Add a name first",children:f?s.jsxs(s.Fragment,{children:[s.jsx(Hr,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(lu,{size:14}),"Generate"]})})]}),s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),s.jsx("div",{className:"code-editor-container",children:s.jsx(Wt,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:N=>l(N||""),onMount:C,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):s.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const ef={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},wS={agent_start:Vl,agent_end:Vl,tool_call:Jt,tool_result:Jt,model_call:iu,model_response:ko,state_change:fn,transfer:ug,callback_start:rn,callback_end:rn};function jS(e){var t,n,r,i,o,a,l,c,u,d,p,f,m,y,b,P,x,g,h,L,C;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const S=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([M,j])=>{const K=j!=null?JSON.stringify(j):"null";return`${M}=${K.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${S.slice(0,60)}${S.length>60?"...":""})`;case"tool_result":const k=(i=e.data)==null?void 0:i.result;let A="";if((a=(o=k==null?void 0:k.content)==null?void 0:o[0])!=null&&a.text)A=String(k.content[0].text).slice(0,60);else if(typeof k=="string")A=k.slice(0,60);else if(k!=null){const M=JSON.stringify(k);A=M?M.slice(0,60):""}else A="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${A}${A.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const N=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],v=N.find(M=>(M==null?void 0:M.type)==="function_call");if(v)return`LLM_RSP → ${v.name||"unknown"}()`;const E=N.find(M=>(M==null?void 0:M.type)==="text");if(E!=null&&E.text){const M=String(E.text);return`LLM_RSP "${M.slice(0,50)}${M.length>50?"...":""}"`}return`LLM_RSP (${((y=e.data)==null?void 0:y.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((b=e.data)==null?void 0:b.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((P=e.data)==null?void 0:P.target)||"unknown"}`;case"callback_start":const U=((x=e.data)==null?void 0:x.callback_name)||"unknown",F=((g=e.data)==null?void 0:g.callback_type)||"";return`CALLBACK START ${F?`[${F}]`:""} ${U}`;case"callback_end":const X=((h=e.data)==null?void 0:h.callback_name)||"unknown",T=((L=e.data)==null?void 0:L.callback_type)||"",D=(C=e.data)!=null&&C.error?" [ERROR]":"";return`CALLBACK END ${T?`[${T}]`:""} ${X}${D}`;default:return e.event_type.toUpperCase()}}function _S(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function SS({event:e}){var o,a,l,c,u,d,p,f,m,y,b,P,x,g,h,L;const[t,n]=_.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=C=>{const w=new Set(t);w.has(C)?w.delete(C):w.add(C),n(w)},i=(C,w=0,S=!1)=>{const k="  ".repeat(w),A="  ".repeat(w+1);if(C===null)return s.jsx("span",{className:"json-null",children:"null"});if(C===void 0)return s.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof C=="boolean")return s.jsx("span",{className:"json-boolean",children:C.toString()});if(typeof C=="number")return s.jsx("span",{className:"json-number",children:C});if(typeof C=="string"){const N=C.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return N.length>300&&w>0?s.jsxs("span",{className:"json-string",children:['"',N.slice(0,300),'..." ',s.jsxs("span",{className:"json-truncated",children:["(",C.length," chars)"]})]}):s.jsxs("span",{className:"json-string",children:['"',N,'"']})}if(Array.isArray(C))return C.length===0?s.jsx("span",{className:"json-bracket",children:"[]"}):C.every(v=>v===null||typeof v!="object")&&C.length<=3?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"["}),C.map((v,E)=>s.jsxs("span",{children:[i(v,w+1,!0),E<C.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},E)),s.jsx("span",{className:"json-bracket",children:"]"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"["}),C.map((v,E)=>s.jsxs("span",{children:[`
`+A,i(v,w+1),E<C.length-1&&s.jsx("span",{className:"json-comma",children:","})]},E)),`
`+k,s.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof C=="object"){const N=Object.entries(C);return N.length===0?s.jsx("span",{className:"json-bracket",children:"{}"}):N.length<=2&&N.every(([,E])=>E===null||typeof E!="object")&&S?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"{"}),N.map(([E,B],U)=>s.jsxs("span",{children:[s.jsxs("span",{className:"json-key",children:['"',E,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(B,w+1,!0),U<N.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},E)),s.jsx("span",{className:"json-bracket",children:"}"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"{"}),N.map(([E,B],U)=>s.jsxs("span",{children:[`
`+A,s.jsxs("span",{className:"json-key",children:['"',E,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(B,w+1),U<N.length-1&&s.jsx("span",{className:"json-comma",children:","})]},E)),`
`+k,s.jsx("span",{className:"json-bracket",children:"}"})]})}return String(C)};return s.jsxs("div",{className:"event-detail",children:[s.jsxs("div",{className:"detail-header",children:[s.jsx("span",{className:"detail-type",children:e.event_type}),s.jsx("span",{className:"detail-agent",children:e.agent_name}),s.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?s.jsx(Tt,{size:12}):s.jsx(Pt,{size:12}),s.jsx("span",{children:"Event Data"})]}),t.has("data")&&s.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?s.jsx(Tt,{size:12}):s.jsx(Pt,{size:12}),s.jsx("span",{children:"Instruction"}),s.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?s.jsx(Tt,{size:12}):s.jsx(Pt,{size:12}),s.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&s.jsx("div",{className:"section-content",children:e.data.contents.map((C,w)=>{var S;return s.jsxs("div",{className:"message-item",children:[s.jsx("span",{className:`message-role ${C.role}`,children:C.role}),s.jsx("div",{className:"message-parts",children:(S=C.parts)==null?void 0:S.map((k,A)=>s.jsxs("div",{className:"message-part",children:[k.text&&s.jsx("pre",{children:k.text}),k.function_call&&s.jsxs("div",{className:"function-call",children:[s.jsx("strong",{children:k.function_call.name}),s.jsx("pre",{children:JSON.stringify(k.function_call.args,null,2)})]}),k.function_response&&s.jsxs("div",{className:"function-response",children:[s.jsx("strong",{children:k.function_response.name}),s.jsx("pre",{children:JSON.stringify(k.function_response.response,null,2)})]})]},A))})]},w)})})]}),e.event_type==="tool_result"&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?s.jsx(Tt,{size:12}):s.jsx(Pt,{size:12}),s.jsx("span",{children:"Tool Result"})]}),t.has("result")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"result-content",children:((d=(u=(c=(l=e.data)==null?void 0:l.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?s.jsx(Tt,{size:12}):s.jsx(Pt,{size:12}),s.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&s.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&s.jsx("div",{className:"section-content",children:e.data.parts.map((C,w)=>s.jsxs("div",{className:"response-part",children:[C.type==="text"&&C.text&&s.jsx("pre",{className:"response-text",children:C.text}),C.type==="function_call"&&s.jsxs("div",{className:"function-call",children:[s.jsxs("strong",{children:["→ ",C.name,"()"]}),C.args&&Object.keys(C.args).length>0&&s.jsx("pre",{children:JSON.stringify(C.args,null,2)})]}),C.thought&&s.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},w))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?s.jsx(Tt,{size:12}):s.jsx(Pt,{size:12}),s.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&s.jsxs("div",{className:"section-content",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Name:"})," ",((y=e.data)==null?void 0:y.callback_name)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Type:"})," ",((b=e.data)==null?void 0:b.callback_type)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Module Path:"})," ",((P=e.data)==null?void 0:P.module_path)||"unknown"]}),((x=e.data)==null?void 0:x.error)&&s.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Error:"})," ",e.data.error]}),((g=e.data)==null?void 0:g.error_type)&&s.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[s.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((h=e.data)==null?void 0:h.stack_trace)&&s.jsxs("div",{style:{marginTop:"8px"},children:[s.jsx("strong",{children:"Stack Trace:"}),s.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((L=e.data)==null?void 0:L.state_delta)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?s.jsx(Tt,{size:12}):s.jsx(Pt,{size:12}),s.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&s.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([C,w])=>s.jsxs("div",{className:"state-delta-item",children:[s.jsx("div",{className:"state-delta-key",children:C}),s.jsx("pre",{className:"state-delta-value",children:typeof w=="string"?w:JSON.stringify(w,null,2)})]},C))})]})]})}function CS({content:e,title:t,onClose:n}){return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:t}),s.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),s.jsx("div",{className:"modal-body markdown-content",children:s.jsx(nx,{children:e})})]}),s.jsx("style",{children:`
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
      `})]})}function NS({events:e,selectedEventIndex:t,project:n}){const[r,i]=_.useState(null),o=_.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var y;l[f]={...l[f],value:m,timestamp:d.timestamp,defined:((y=l[f])==null?void 0:y.defined)??!1}})}),l},[e,t,n]),a=Object.entries(o);return s.jsxs(s.Fragment,{children:[r&&s.jsx(CS,{content:r.content,title:r.title,onClose:()=>i(null)}),s.jsxs("div",{className:"state-snapshot",children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?s.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>s.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[s.jsxs("div",{className:"state-key",children:[l,f&&s.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),s.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&s.jsx("div",{className:"state-desc",children:p}),u&&s.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function Wa(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function tf(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(o=o[l[1]]),o=o[parseInt(l[2])]):o=o[a]}return o==null?"[No match]":typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function ES({project:e,selectedEventIndex:t}){var ee;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:a}=st(),[l,c]=_.useState(!1),[u,d]=_.useState(null),[p,f]=_.useState({}),[m,y]=_.useState(new Set),[b,P]=_.useState(""),[x,g]=_.useState(""),[h,L]=_.useState({}),[C,w]=_.useState(""),[S,k]=_.useState([]),[A,N]=_.useState(null),[v,E]=_.useState(null),[B,U]=_.useState(!1);_.useEffect(()=>{ru().then(k).catch(console.error)},[]);const F=_.useMemo(()=>{const W=e.mcp_servers||[],ne=new Set(W.map(O=>O.name)),ae=S.filter(O=>!ne.has(O.name));return[...W,...ae]},[e.mcp_servers,S]),X=_.useCallback(async W=>{if(!(p[W]||m.has(W))){y(ne=>new Set([...ne,W]));try{const ne=await ke(`/projects/${e.id}/mcp-servers/${encodeURIComponent(W)}/test-connection`,{method:"POST"});ne.success&&f(ae=>({...ae,[W]:ne.tools}))}catch(ne){console.error("Failed to load tools:",ne)}finally{y(ne=>{const ae=new Set(ne);return ae.delete(W),ae})}}},[e.id,p,m]);_.useEffect(()=>{var O;if(u)return;if(!b||!x){L({});return}const ne=(p[b]||[]).find(I=>I.name===x);if(!((O=ne==null?void 0:ne.parameters)!=null&&O.properties)){L({});return}const ae={};Object.entries(ne.parameters.properties).forEach(([I,$])=>{$.type==="string"?ae[I]=$.default||"":$.type==="number"||$.type==="integer"?ae[I]=$.default||0:$.type==="boolean"?ae[I]=$.default||!1:ae[I]=$.default||null}),L(ae)},[b,x,p,u]);const T=()=>{d(null),P(""),g(""),L({}),w(""),N(null),E(null),c(!0)},D=W=>{if(d(W.id),P(W.serverName),g(W.toolName),L({...W.args}),w(W.transform||""),W.result){const{text:ne}=Wa(W.result);N(ne),E(null)}else N(null),E(null);p[W.serverName]||X(W.serverName),c(!0)},M=async()=>{if(!(!b||!x)){U(!0),E(null);try{const W=await ke(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:b,tool_name:x,arguments:h})}),{text:ne,isError:ae}=Wa(W);ae?(E(ne),N(null)):(N(ne),E(null))}catch(W){E(String(W)),N(null)}finally{U(!1)}}},j=_.useMemo(()=>A?!C||!C.trim()?A:tf(A,C):null,[A,C]),K=()=>{if(!(!b||!x)){if(u){r(u,{serverName:b,toolName:x,args:{...h},transform:C||void 0});const W=n.find(ne=>ne.id===u);W&&z({...W,serverName:b,toolName:x,args:h,transform:C||void 0,history:W.history||[]})}else{const W={id:`watch-${Date.now()}`,serverName:b,toolName:x,args:{...h},transform:C||void 0,history:[]};i(W),z(W)}c(!1)}},G=W=>{o(W)},z=_.useCallback(async(W,ne)=>{r(W.id,{isLoading:!0,error:void 0});const ae=ne??a.length-1,O=Date.now();try{const I=await ke(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:W.serverName,tool_name:W.toolName,arguments:W.args})}),$={eventIndex:ae,timestamp:O,result:I},V=[...W.history||[],$];r(W.id,{result:I,isLoading:!1,lastRun:O,history:V})}catch(I){const $={eventIndex:ae,timestamp:O,error:String(I)},V=[...W.history||[],$];r(W.id,{error:String(I),isLoading:!1,lastRun:O,history:V})}},[e.id,r,a.length]),ue=()=>{n.forEach(W=>z(W))},R=_.useMemo(()=>!b||!x?null:(p[b]||[]).find(ne=>ne.name===x),[b,x,p]);return s.jsxs("div",{className:"tool-watch-panel",children:[s.jsxs("div",{className:"watch-header",children:[s.jsx(Ki,{size:14}),s.jsx("span",{children:"Tool Watch"}),s.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),s.jsxs("div",{className:"watch-actions",children:[s.jsx("button",{className:"watch-btn",onClick:ue,title:"Refresh all",children:s.jsx(En,{size:12})}),s.jsx("button",{className:"watch-btn",onClick:T,title:"Add watch",children:s.jsx(Ue,{size:12})})]})]}),n.length===0?s.jsxs("div",{className:"watch-empty",children:[s.jsx(Ki,{size:20,style:{opacity:.3}}),s.jsx("span",{children:"No watch expressions"}),s.jsxs("button",{className:"add-watch-btn",onClick:T,children:[s.jsx(Ue,{size:12})," Add Tool Watch"]})]}):s.jsx("div",{className:"watch-list",children:n.map(W=>{let ne=W.result,ae=W.error;if(t!==null&&W.history&&W.history.length>0){const Q=W.history.filter(re=>re.eventIndex<=t);if(Q.length>0){const re=Q[Q.length-1];ne=re.result,ae=re.error}else ne=void 0,ae=void 0}const{text:O,isError:I}=ne?Wa(ne):{text:"",isError:!1},$=ne?tf(O,W.transform):"",V=ae||I;return s.jsxs("div",{className:`watch-item ${V?"error":""}`,children:[s.jsxs("div",{className:"watch-item-header",children:[s.jsxs("span",{className:"watch-expr",children:[s.jsx("span",{className:"watch-server",children:W.serverName}),s.jsx("span",{className:"watch-tool",children:W.toolName}),Object.keys(W.args).length>0&&s.jsxs("span",{className:"watch-args",children:["(",Object.entries(W.args).map(([Q,re])=>`${Q}=${JSON.stringify(re)}`).join(", "),")"]}),t!==null&&s.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),s.jsxs("div",{className:"watch-item-actions",children:[s.jsx("button",{onClick:()=>D(W),title:"Edit watch",children:s.jsx(Jt,{size:10})}),s.jsx("button",{onClick:()=>z(W),title:"Refresh",children:W.isLoading?s.jsx(En,{size:10,className:"spin"}):s.jsx(En,{size:10})}),s.jsx("button",{onClick:()=>G(W.id),title:"Remove",children:s.jsx(Ae,{size:10})})]})]}),s.jsx("div",{className:"watch-result",children:W.isLoading?s.jsx("span",{className:"loading",children:"Loading..."}):ae?s.jsx("span",{className:"error",children:ae}):ne?s.jsx("pre",{className:I?"error-text":"",children:$}):s.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},W.id)})}),l&&s.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:s.jsxs("div",{className:"watch-dialog",onClick:W=>W.stopPropagation(),children:[s.jsxs("div",{className:"dialog-header",children:[s.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),s.jsx("button",{onClick:()=>c(!1),children:s.jsx(cg,{size:14})})]}),s.jsxs("div",{className:"dialog-body",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"MCP Server"}),s.jsxs("select",{value:b,onChange:W=>{P(W.target.value),u||g(""),W.target.value&&X(W.target.value)},children:[s.jsx("option",{value:"",children:"Select server..."}),F.map(W=>s.jsx("option",{value:W.name,children:W.name},W.name))]})]}),s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"Tool"}),s.jsxs("select",{value:x,onChange:W=>g(W.target.value),disabled:!b||m.has(b),children:[s.jsx("option",{value:"",children:m.has(b)?"Loading tools...":"Select tool..."}),(p[b]||[]).map(W=>s.jsx("option",{value:W.name,children:W.name},W.name))]})]}),(R==null?void 0:R.description)&&s.jsx("div",{className:"tool-desc",children:R.description}),((ee=R==null?void 0:R.parameters)==null?void 0:ee.properties)&&Object.keys(R.parameters.properties).length>0&&s.jsxs("div",{className:"tool-args",children:[s.jsx("label",{children:"Arguments"}),Object.entries(R.parameters.properties).map(([W,ne])=>{var ae,O;return s.jsxs("div",{className:"arg-row",children:[s.jsxs("span",{className:"arg-name",children:[W,((ae=R.parameters.required)==null?void 0:ae.includes(W))&&s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:ne.type==="number"||ne.type==="integer"?"number":"text",value:typeof h[W]=="object"?JSON.stringify(h[W]):h[W]??"",onChange:I=>L($=>({...$,[W]:I.target.value})),placeholder:((O=ne.description)==null?void 0:O.slice(0,40))||W})]},W)})]}),b&&x&&s.jsxs("div",{className:"test-section",children:[s.jsxs("div",{className:"test-header",children:[s.jsx("label",{children:"Test & Preview"}),s.jsxs("button",{className:"test-btn",onClick:M,disabled:B,children:[B?s.jsx(En,{size:12,className:"spin"}):s.jsx(Fn,{size:12}),B?"Running...":"Test Run"]})]}),v&&s.jsxs("div",{className:"test-result error",children:[s.jsx("span",{className:"test-label",children:"Error:"}),s.jsx("pre",{children:v})]}),A&&s.jsxs("div",{className:"test-result",children:[s.jsx("span",{className:"test-label",children:"Raw Result:"}),s.jsx("pre",{children:A})]})]}),s.jsxs("div",{className:"form-row transform-row",children:[s.jsx("label",{children:"Transform (optional)"}),s.jsx("input",{type:"text",value:C,onChange:W=>w(W.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),s.jsxs("div",{className:"transform-hints",children:[s.jsx("span",{className:"hint-title",children:"Path:"}),s.jsx("code",{onClick:()=>w(".items[0].name"),children:".items[0].name"}),s.jsx("code",{onClick:()=>w(".content[0].text"),children:".content[0].text"}),s.jsx("code",{onClick:()=>w(".result.data"),children:".result.data"}),s.jsx("span",{className:"hint-title",children:"JS:"}),s.jsx("code",{onClick:()=>w("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),s.jsx("code",{onClick:()=>w("js:data.items?.length"),children:"js:data.items?.length"})]})]}),A&&C&&s.jsxs("div",{className:"transform-preview",children:[s.jsx("span",{className:"test-label",children:"Transform Preview:"}),s.jsx("pre",{className:j!=null&&j.startsWith("[Transform error")?"error":"",children:j})]})]}),s.jsxs("div",{className:"dialog-footer",children:[s.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),s.jsx("button",{className:"add-btn",onClick:K,disabled:!b||!x,children:u?"Save Changes":"Add Watch"})]})]})})]})}function zS(){var zt;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:o,clearWatchHistories:a,runAgentId:l,setRunAgentId:c,watches:u,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=st(),[m,y]=_.useState(""),[b,P]=_.useState(null),[x,g]=_.useState(null),[h,L]=_.useState(null),[C,w]=_.useState(""),[S,k]=_.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[A,N]=_.useState(!0),[v,E]=_.useState(!0),[B,U]=_.useState(!1),[F,X]=_.useState(360),[T,D]=_.useState(!1),[M,j]=_.useState([]),[K,G]=_.useState(null),[z,ue]=_.useState(!1),R=_.useRef(0),ee=_.useCallback(async(q,se)=>{if(!e)return;d(q.id,{isLoading:!0,error:void 0});const oe=se??r.length-1,de=Date.now();try{const ge=await ke(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:q.serverName,tool_name:q.toolName,arguments:q.args})}),Qe={eventIndex:oe,timestamp:de,result:ge},qn=[...q.history||[],Qe];d(q.id,{result:ge,isLoading:!1,lastRun:de,history:qn})}catch(ge){const Qe={eventIndex:oe,timestamp:de,error:String(ge)},qn=[...q.history||[],Qe];d(q.id,{error:String(ge),isLoading:!1,lastRun:de,history:qn})}},[e==null?void 0:e.id,d,r.length]);_.useEffect(()=>{if(r.length>R.current&&u.length>0){const q=r.length-1;u.forEach(se=>{se.isLoading||ee(se,q)})}R.current=r.length},[r.length,u,ee]),_.useEffect(()=>{l!==null&&(ne(l),c(null))},[l,c]);const[W,ne]=_.useState(null),ae=_.useRef(null),O=_.useRef(null);_.useEffect(()=>{if(!T)return;const q=oe=>{if(!O.current)return;const ge=O.current.getBoundingClientRect().right-oe.clientX;X(Math.min(600,Math.max(200,ge)))},se=()=>{D(!1)};return document.addEventListener("mousemove",q),document.addEventListener("mouseup",se),()=>{document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",se)}},[T]);const I=_.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),$=_.useMemo(()=>r.filter((q,se)=>{var oe,de,ge;if(h&&(q.timestamp<h[0]||q.timestamp>h[1])||S.size>0&&!S.has(q.event_type))return!1;if(A&&q.event_type==="model_response"){const Qe=((de=(oe=q.data)==null?void 0:oe.response_content)==null?void 0:de.parts)||((ge=q.data)==null?void 0:ge.parts)||[],qn=Qe.some(Zo=>Zo.type==="function_call"),ux=Qe.some(Zo=>Zo.type==="text");if(!qn&&!ux)return!1}return!(C&&!JSON.stringify(q).toLowerCase().includes(C.toLowerCase()))}),[r,h,S,C,A]),V=_.useMemo(()=>{var de;let q=0,se=0;const oe=x!==null?x+1:r.length;for(let ge=0;ge<oe;ge++){const Qe=r[ge];Qe.event_type==="model_response"&&((de=Qe.data)!=null&&de.token_counts)&&(q+=Qe.data.token_counts.input||0,se+=Qe.data.token_counts.output||0)}return{input:q,output:se,total:q+se}},[r,x]),Q=x!==null?r[x]:null;_.useEffect(()=>{if(!e){j([]);return}(async()=>{ue(!0);try{const se=await Ul(e.id);j(se)}catch(se){console.error("Failed to load sessions:",se),j([])}finally{ue(!1)}})()},[e]);const re=_.useCallback(async q=>{if(!e){G(null);return}if(!q){o(),a(),f(null),G(null),g(null),L(null);return}try{const se=await Fh(e.id,q);o(),a(),f(se.id),G(q),g(null),L(null);for(const oe of se.events)i(oe)}catch(se){alert(`Failed to load session: ${se.message||"Unknown error"}`)}},[e,o,a,f,i]);_.useEffect(()=>{if(!e||M.length===0||z)return;const se=new URLSearchParams(window.location.search).get("session");if(se)if(M.some(de=>de.id===se)){re(se);const de=window.location.pathname;window.history.replaceState({},"",de)}else console.warn(`Session ${se} not found in available sessions`)},[e,M,z,re]),_.useEffect(()=>{t&&ae.current&&(ae.current.scrollTop=ae.current.scrollHeight)},[r.length,t]);const me=_.useCallback(()=>{if(!e||!m.trim()||t)return;b&&(b.close(),P(null)),p||(o(),a(),G(null)),n(!0),g(null),L(null);const q=Wh(e.id);P(q),q.onopen=()=>{q.send(JSON.stringify({message:m,agent_id:W||void 0,session_id:p||void 0}))},q.onmessage=se=>{var de;const oe=JSON.parse(se.data);if(oe.event_type==="agent_start"&&((de=oe.data)!=null&&de.session_id)){const ge=oe.data.session_id;oe.data.session_reused,f(ge),ge&&M.some(Qe=>Qe.id===ge)&&G(ge)}else oe.type==="session_started"?(f(oe.session_id),oe.session_id&&M.some(ge=>ge.id===oe.session_id)&&G(oe.session_id)):oe.type==="completed"?(n(!1),q.close()):oe.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:oe.error}})):i(oe)},q.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},q.onclose=()=>{n(!1)}},[e,m,t,b,o,n,i,W,p]),H=_.useCallback(()=>{b==null||b.close(),n(!1)},[b,n]);_.useEffect(()=>{const q=se=>{if((se.metaKey||se.ctrlKey)&&se.key==="Enter"){se.preventDefault(),me();return}if(se.key==="ArrowDown"||se.key==="ArrowUp"){if(se.target instanceof HTMLInputElement||se.target instanceof HTMLTextAreaElement||(se.preventDefault(),$.length===0))return;if(se.key==="ArrowDown")if(x===null){const oe=r.indexOf($[0]);g(oe)}else{const oe=$.findIndex(de=>r.indexOf(de)===x);if(oe<$.length-1){const de=r.indexOf($[oe+1]);g(de)}}else if(se.key==="ArrowUp")if(x===null){const oe=r.indexOf($[$.length-1]);g(oe)}else{const oe=$.findIndex(de=>r.indexOf(de)===x);if(oe>0){const de=r.indexOf($[oe-1]);g(de)}}}};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)},[me,$,x,r]);const ce=_.useCallback(()=>{var ge;if(r.length===0)return;const q={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:W||((ge=e==null?void 0:e.app)==null?void 0:ge.root_agent_id),events:r},se=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),oe=URL.createObjectURL(se),de=document.createElement("a");de.href=oe,de.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(de),de.click(),document.body.removeChild(de),URL.revokeObjectURL(oe)},[r,e,W]),ve=_.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const q=await Dh(p);if(q.success){alert(q.message||"Session saved to memory successfully");try{const se=await Ul(e.id);j(se)}catch{}}else alert(`Failed to save to memory: ${q.error||"Unknown error"}`)}catch(q){alert(`Error saving to memory: ${q.message||"Unknown error"}`)}},[p,e]),[Je,We]=_.useState(!1),[on,Ke]=_.useState([]),[$e,we]=_.useState(""),[J,te]=_.useState("Test Case from Session"),[fe,xe]=_.useState(!1),_e=_.useCallback(async()=>{if(!p||!e){alert("No active session to create test case from");return}try{const q=await ke(`/projects/${e.id}/eval-sets`);if(Ke(q.eval_sets||[]),!q.eval_sets||q.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}we(q.eval_sets[0].id),We(!0)}catch(q){alert(`Error loading eval sets: ${q.message||"Unknown error"}`)}},[p,e]),vt=_.useCallback(async()=>{if(!p||!e||!$e){alert("Please select an evaluation set");return}xe(!0);try{const q=await ke(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:p,eval_set_id:$e,case_name:J})});We(!1),alert(`Test case "${q.eval_case.name}" created successfully!

Token count: ${q.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(q){alert(`Error creating test case: ${q.message||"Unknown error"}`)}finally{xe(!1)}},[p,e,$e,J]),an=_.useCallback(()=>{const q=document.createElement("input");q.type="file",q.accept=".json",q.onchange=async se=>{var de;const oe=(de=se.target.files)==null?void 0:de[0];if(oe)try{const ge=await oe.text(),Qe=JSON.parse(ge);if(!Qe.events||!Array.isArray(Qe.events)){alert("Invalid run file: missing events array");return}o(),a(),g(null),L(null),Qe.events.forEach(qn=>{i(qn)})}catch(ge){alert(`Failed to load run file: ${ge}`)}},q.click()},[o,a,i]);return _.useEffect(()=>{if(x!==null){const q=document.querySelector(".event-row.selected");q==null||q.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?s.jsxs("div",{className:`run-panel ${T?"resizing":""}`,children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"input-area",children:[s.jsxs("select",{className:"agent-selector",value:W||"",onChange:q=>ne(q.target.value||null),disabled:t,title:"Select which agent to run",children:[s.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((zt=e.agents.find(q=>q.id===e.app.root_agent_id))==null?void 0:zt.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(q=>q.id!==e.app.root_agent_id).map(q=>s.jsxs("option",{value:q.id,children:[q.name," (",q.type.replace("Agent",""),")"]},q.id))]}),s.jsxs("select",{className:"agent-selector",value:K||"",onChange:q=>re(q.target.value||null),disabled:t||z,style:{minWidth:180},title:"Load a saved session",children:[s.jsx("option",{value:"",children:z?"Loading...":"Load Session..."}),M.map(q=>{const se=new Date(q.started_at*1e3),oe=q.duration?`${q.duration.toFixed(1)}s`:"?";return s.jsxs("option",{value:q.id,children:[se.toLocaleString()," (",q.event_count," events, ",oe,")"]},q.id)})]}),s.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:q=>y(q.target.value),onKeyDown:q=>q.key==="Enter"&&!q.shiftKey&&me(),disabled:t}),t?s.jsxs("button",{className:"stop",onClick:H,children:[s.jsx(j0,{size:14}),"Stop"]}):s.jsxs("button",{onClick:me,disabled:!m.trim(),children:[s.jsx(Fn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"toolbar",children:[s.jsxs("div",{className:"toolbar-section",children:[s.jsx(sg,{size:12,style:{color:"#71717a"}}),s.jsx("input",{type:"text",placeholder:"Filter events...",value:C,onChange:q=>w(q.target.value)})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(q=>s.jsx("button",{className:`filter-chip ${S.has(q)?"active":""}`,onClick:()=>{const se=new Set(S);se.has(q)?se.delete(q):se.add(q),k(se)},children:q.replace("_"," ")},q)),s.jsx("button",{className:`filter-chip ${S.has("callback_start")&&S.has("callback_end")?"active":""}`,onClick:()=>{const q=new Set(S);q.has("callback_start")&&q.has("callback_end")?(q.delete("callback_start"),q.delete("callback_end")):(q.add("callback_start"),q.add("callback_end")),k(q)},title:"Show/hide callback events",children:"callback"}),s.jsx("button",{className:`filter-chip ${A?"active":""}`,onClick:()=>N(!A),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[s.jsxs("button",{className:`toolbar-btn ${v?"active":""}`,onClick:()=>E(!v),children:[s.jsx(fn,{size:12}),"State"]}),s.jsxs("button",{className:`toolbar-btn ${B?"active":""}`,onClick:()=>U(!B),children:[s.jsx(Xd,{size:12}),"Tools"]})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[$.length," / ",r.length," events"]}),h&&s.jsx("button",{className:"toolbar-btn",onClick:()=>L(null),children:"Clear Range"})]})]}),s.jsxs("div",{className:"main-content",ref:O,children:[s.jsxs("div",{className:"event-list-container",children:[s.jsxs("div",{className:"event-list-header",children:[s.jsx("div",{children:"#"}),s.jsx("div",{children:"Time"}),s.jsx("div",{children:"Agent"}),s.jsx("div",{children:"Type"}),s.jsx("div",{children:"Info"})]}),s.jsx("div",{className:"event-list",ref:ae,children:$.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(ig,{size:24}),s.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):$.map((q,se)=>{const oe=r.indexOf(q),de=ef[q.event_type]||ef.error,ge=wS[q.event_type]||ko;return s.jsxs("div",{className:`event-row ${x===oe?"selected":""}`,style:{background:de.bg},onClick:()=>g(oe),onDoubleClick:()=>{E(!1),U(!1)},children:[s.jsx("div",{className:"index",children:oe}),s.jsx("div",{className:"time",style:{color:de.fg},children:_S(q.timestamp,I.min)}),s.jsx("div",{className:"agent",style:{color:de.fg},children:q.agent_name}),s.jsxs("div",{className:"type",style:{color:de.fg},children:[s.jsx(ge,{size:10}),q.event_type.split("_")[0]]}),s.jsx("div",{className:"summary",children:jS(q)})]},oe)})})]}),s.jsxs("div",{className:"side-panel-container",style:{width:F},children:[s.jsx("div",{className:`resize-handle ${T?"active":""}`,onMouseDown:()=>D(!0)}),s.jsxs("div",{className:"side-panel",style:{width:F-4},children:[s.jsxs("div",{className:"side-panel-tabs",children:[s.jsxs("button",{className:`side-panel-tab ${!v&&!B?"active":""}`,onClick:()=>{E(!1),U(!1)},children:[s.jsx(Ki,{size:12,style:{marginRight:4}}),"Details"]}),s.jsxs("button",{className:`side-panel-tab ${v?"active":""}`,onClick:()=>{E(!0),U(!1)},children:[s.jsx(fn,{size:12,style:{marginRight:4}}),"State"]}),s.jsxs("button",{className:`side-panel-tab ${B?"active":""}`,onClick:()=>{U(!0),E(!1)},children:[s.jsx(Xd,{size:12,style:{marginRight:4}}),"Tools"]})]}),s.jsx("div",{className:"side-panel-content",children:B?s.jsx(ES,{project:e,selectedEventIndex:x}):v?s.jsx(NS,{events:r,selectedEventIndex:x,project:e}):Q?s.jsx(SS,{event:Q}):s.jsxs("div",{className:"empty-state",children:[s.jsx(Ki,{size:24}),s.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),s.jsxs("div",{className:"stats-bar",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Events:"}),s.jsx("span",{className:"stat-value",children:r.length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Tool Calls:"}),s.jsx("span",{className:"stat-value",children:r.filter(q=>q.event_type==="tool_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Model Calls:"}),s.jsx("span",{className:"stat-value",children:r.filter(q=>q.event_type==="model_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Callbacks:"}),s.jsx("span",{className:"stat-value",children:r.filter(q=>q.event_type==="callback_start").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"State Changes:"}),s.jsx("span",{className:"stat-value",children:r.filter(q=>q.event_type==="state_change").length})]}),r.length>0&&s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Duration:"}),s.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),V.total>0&&s.jsx("div",{className:"stat-item token-stats",children:s.jsxs("span",{className:"stat-value token-value",children:[s.jsxs("span",{className:"token-in",title:"Input tokens",children:[V.input.toLocaleString(),"↑"]}),s.jsxs("span",{className:"token-out",title:"Output tokens",children:[V.output.toLocaleString(),"↓"]}),s.jsx("span",{className:"token-total",title:"Total tokens",children:V.total.toLocaleString()})]})}),s.jsx("div",{className:"stats-bar-spacer"}),s.jsxs("button",{className:"stats-bar-btn",onClick:an,title:"Load a saved run",children:[s.jsx(qo,{size:12}),"Load"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:ce,disabled:r.length===0,title:"Save current run to file",children:[s.jsx(ss,{size:12}),"Save"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:ve,disabled:!p||r.length===0,title:"Save current session to memory",children:[s.jsx(fn,{size:12}),"Save to Memory"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:_e,disabled:!p||r.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[s.jsx(ql,{size:12}),"Create Test Case"]})]}),Je&&s.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>We(!1),children:s.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:q=>q.stopPropagation(),children:[s.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[s.jsx(ql,{size:18}),"Create Test Case from Session"]}),s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),s.jsx("input",{type:"text",value:J,onChange:q=>te(q.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),s.jsx("select",{value:$e,onChange:q=>we(q.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:on.map(q=>s.jsx("option",{value:q.id,children:q.name},q.id))})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),s.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>We(!1),children:"Cancel"}),s.jsx("button",{className:"btn btn-primary",onClick:vt,disabled:fe||!$e,children:fe?"Creating...":"Create Test Case"})]})]})})]}):s.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const TS=()=>Math.random().toString(36).substring(2,10),PS=()=>({id:TS(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function LS(){const{project:e,setProject:t}=st(),[n,r]=_.useState(null),[i,o]=_.useState(null),[a,l]=_.useState(""),[c,u]=_.useState([]),[d,p]=_.useState(!1),[f,m]=_.useState(!1),[y,b]=_.useState(""),[P,x]=_.useState(!1),[g,h]=_.useState(null),[L,C]=_.useState(null),w=_.useRef(null),S=(e==null?void 0:e.skillsets)||[],k=S.find(M=>M.id===n);_.useEffect(()=>{eg().then(M=>C(M.available)).catch(()=>C(!1))},[]),_.useEffect(()=>{S.length>0&&!n&&r(S[0].id)},[S,n]),_.useEffect(()=>{!e||!n||A()},[e==null?void 0:e.id,n]);const A=_.useCallback(async()=>{if(!(!e||!n))try{const M=await Qh(e.id,n);o(M),v(n,{entry_count:M.entry_count})}catch(M){console.error("Failed to load stats:",M)}},[e==null?void 0:e.id,n]),N=M=>{e&&t({...e,...M})},v=(M,j)=>{e&&t({...e,skillsets:e.skillsets.map(K=>K.id===M?{...K,...j}:K)})},E=()=>{if(!e)return;const M=PS();N({skillsets:[...S,M]}),r(M.id)},B=M=>{e&&confirm("Delete this SkillSet and all its data?")&&(N({skillsets:S.filter(j=>j.id!==M)}),n===M&&r(S.length>1?S[0].id:null),o(null),u([]))},U=async()=>{if(!(!e||!n||!a.trim())){p(!0),h(null);try{const M=await Xh(e.id,n,a.trim(),10,0);u(M.results)}catch(M){h("Search failed"),console.error(M)}finally{p(!1)}}},F=async()=>{if(!(!e||!n||!y.trim())){x(!0),h(null);try{const M=await Gh(e.id,n,y.trim());b(""),await A(),alert(`Added ${M.chunks_added} chunks from ${M.source_name}`)}catch(M){h(M.message||"Failed to fetch URL")}finally{x(!1)}}},X=async M=>{var K;const j=(K=M.target.files)==null?void 0:K[0];if(!(!j||!e||!n)){h(null);try{const G=await Yh(e.id,n,j);await A(),alert(`Added ${G.chunks_added} chunks from ${G.source_name}`)}catch(G){h(G.message||"Upload failed")}w.current&&(w.current.value="")}},T=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Zh(e.id,n),await A(),u([])}catch{h("Clear failed")}},D=M=>{const j=Math.round(M*100),K=160,G=70,z=20+(1-M)*15,ue=.15+M*.25;return`linear-gradient(90deg, hsla(${K}, ${G}%, ${z}%, ${ue}) 0%, transparent ${j}%)`};return e?s.jsxs("div",{className:"skillsets-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"skillset-list",children:[s.jsxs("div",{className:"skillset-list-header",children:[s.jsx("h3",{children:"SkillSets"}),s.jsx("button",{className:"btn-icon",onClick:E,title:"Add SkillSet",children:s.jsx(Ue,{size:16})})]}),S.length===0?s.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[s.jsx(fn,{size:32}),s.jsx("span",{children:"No SkillSets"}),s.jsxs("button",{className:"btn-primary",onClick:E,children:[s.jsx(Ue,{size:14})," Create SkillSet"]})]}):S.map(M=>s.jsxs("div",{className:`skillset-item ${n===M.id?"selected":""}`,onClick:()=>r(M.id),children:[s.jsx(fn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),s.jsxs("div",{className:"skillset-item-info",children:[s.jsx("div",{className:"skillset-item-name",children:M.name}),s.jsxs("div",{className:"skillset-item-count",children:[M.entry_count||0," entries"]})]}),s.jsx("button",{className:"skillset-item-delete",onClick:j=>{j.stopPropagation(),B(M.id)},children:s.jsx(Ae,{size:14})})]},M.id))]}),k?s.jsxs("div",{className:"skillset-detail",children:[s.jsxs("div",{className:"skillset-header",children:[s.jsxs("div",{className:"skillset-header-info",children:[s.jsx("input",{className:"skillset-name-input",value:k.name,onChange:M=>v(k.id,{name:M.target.value}),placeholder:"SkillSet Name"}),s.jsx("textarea",{className:"skillset-desc-input",value:k.description,onChange:M=>v(k.id,{description:M.target.value}),placeholder:"Description (optional)",rows:1}),s.jsxs("div",{className:"skillset-model",children:[s.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),s.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:k.embedding_model||"text-embedding-004",onChange:M=>v(k.id,{embedding_model:M.target.value}),children:[s.jsxs("optgroup",{label:"Google Gemini",children:[s.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),s.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),s.jsxs("optgroup",{label:"OpenAI",children:[s.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),s.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),s.jsxs("optgroup",{label:"Cohere",children:[s.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),s.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),s.jsxs("div",{className:"skillset-stats",children:[s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),L===!1&&s.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),s.jsx("button",{className:"btn-icon",onClick:A,title:"Refresh",children:s.jsx(En,{size:16})})]}),g&&s.jsxs("div",{className:"error-banner",children:[g,s.jsx("button",{onClick:()=>h(null),children:s.jsx(cg,{size:14})})]}),s.jsxs("div",{className:"search-section",children:[s.jsx("div",{className:"search-input-wrapper",children:s.jsx("input",{className:"search-input",value:a,onChange:M=>l(M.target.value),onKeyDown:M=>M.key==="Enter"&&U(),placeholder:"Search this SkillSet..."})}),s.jsxs("button",{className:"btn-primary",onClick:U,disabled:d||!a.trim(),children:[s.jsx(sg,{size:14}),d?"Searching...":"Search"]})]}),s.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&s.jsx("div",{className:"empty-state",children:s.jsx("span",{children:"No results found"})}),c.map(M=>s.jsxs("div",{className:"search-result",style:{background:D(M.score)},children:[s.jsxs("span",{className:"search-result-score",children:[(M.score*100).toFixed(0),"%"]}),s.jsx("div",{className:"search-result-text",children:M.text}),s.jsx("div",{className:"search-result-source",children:M.source_name})]},M.id))]}),s.jsxs("div",{className:"add-sources-section",children:[s.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?s.jsx(Tt,{size:16}):s.jsx(Pt,{size:16}),s.jsx("h4",{children:"Add Sources"})]}),f&&s.jsxs("div",{className:"add-sources-content",children:[s.jsxs("div",{className:"source-row",children:[s.jsx(Wl,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{className:"source-input",value:y,onChange:M=>b(M.target.value),onKeyDown:M=>M.key==="Enter"&&F(),placeholder:"Enter URL (e.g., llms.txt file)"}),s.jsxs("button",{className:"btn-primary",onClick:F,disabled:P||!y.trim(),children:[s.jsx(x0,{size:14}),P?"Loading...":"Add"]})]}),s.jsxs("div",{className:"source-row",children:[s.jsx(m0,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{ref:w,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:X}),s.jsxs("button",{className:"btn-primary",onClick:()=>{var M;return(M=w.current)==null?void 0:M.click()},children:[s.jsx(qo,{size:14}),"Upload File"]}),s.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&s.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:s.jsxs("button",{className:"clear-button",onClick:T,children:[s.jsx(Ae,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):S.length>0?s.jsx("div",{className:"skillset-detail",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(fn,{size:48}),s.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const en={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Yi=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=en[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const o=n??3.5;return{value:t.toFixed(1),comparison:`${o.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const o=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(o*100)}% min`}}},AS={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function cx(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function RS(){const{project:e}=st(),[t,n]=_.useState([]),[r,i]=_.useState(null),[o,a]=_.useState(null),[l,c]=_.useState(new Set),[u,d]=_.useState(new Map),[p,f]=_.useState(new Map),[m,y]=_.useState(new Set),[b,P]=_.useState(!1),[x,g]=_.useState(null),[h,L]=_.useState([]),[C,w]=_.useState(null),S=async()=>{if(e)try{const O=await De.get(`/projects/${e.id}/eval-history`);L(O.runs||[])}catch(O){console.warn("Failed to load eval history:",O)}},k=async(O,I=!0)=>{if(e)try{const V=(await De.get(`/projects/${e.id}/eval-history/${O}`)).run;if(w(V),V!=null&&V.case_results){const Q=new Map;for(const re of V.case_results)Q.set(re.eval_case_id,re);d(Q)}if((V==null?void 0:V.eval_set_id)==="batch")c(new Set(t.map(Q=>Q.id))),i(null);else if(V!=null&&V.eval_set_id){const Q=new Map;Q.set(V.eval_set_id,V),f(Q),i(V.eval_set_id),c(re=>new Set([...re,V.eval_set_id]))}a(null),I&&window.history.pushState({run:O},"",`?run=${O}`)}catch($){console.warn("Failed to load history run:",$)}},A=(O,I=!0)=>{i(O),a(null),w(null),I&&O?window.history.pushState({set:O},"",`?set=${O}`):I&&window.history.pushState({},"",window.location.pathname)},N=(O,I,$=!0)=>{i(O),a(I),w(null),$&&I?window.history.pushState({set:O,case:I},"",`?set=${O}&case=${I}`):$&&O&&window.history.pushState({set:O},"",`?set=${O}`)},v=()=>{w(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},E=async O=>{if(e)try{await De.delete(`/projects/${e.id}/eval-history/${O}`),L(I=>I.filter($=>$.id!==O)),(C==null?void 0:C.id)===O&&w(null)}catch(I){console.warn("Failed to delete history run:",I)}};_.useEffect(()=>{e!=null&&e.id&&(B(),S())},[e==null?void 0:e.id]),_.useEffect(()=>{const O=()=>{y(new Set(t.map($=>$.id)))},I=()=>{y(new Set),S()};return window.addEventListener("eval-tests-started",O),window.addEventListener("eval-tests-completed",I),()=>{window.removeEventListener("eval-tests-started",O),window.removeEventListener("eval-tests-completed",I)}},[t]),_.useEffect(()=>{if(!(e!=null&&e.id)||b)return;const O=()=>{const $=new URLSearchParams(window.location.search),V=$.get("set"),Q=$.get("case"),re=$.get("run");if(re){k(re,!1);return}if(V)i(V),a(Q),w(null),c(me=>new Set([...me,V]));else{if(!r&&!o&&!C)return;i(null),a(null),w(null)}};O();const I=()=>{O()};return window.addEventListener("popstate",I),()=>window.removeEventListener("popstate",I)},[e==null?void 0:e.id,b,t.length]);const B=async()=>{var O,I;if(e!=null&&e.id){P(!0),g(null);try{const $=await De.get(`/projects/${e.id}/eval-sets`);if(n($.eval_sets||[]),((O=$.eval_sets)==null?void 0:O.length)>0){const V=new URLSearchParams(window.location.search),Q=V.get("set"),re=V.get("case"),me=Q||(re?(I=$.eval_sets.find(H=>H.eval_cases.some(ce=>ce.id===re)))==null?void 0:I.id:null)||$.eval_sets[0].id;c(new Set([me]))}}catch($){g($.message||"Failed to load eval sets")}finally{P(!1)}}},U=t.find(O=>O.id===r),F=U==null?void 0:U.eval_cases.find(O=>O.id===o),X=async()=>{if(e!=null&&e.id)try{const O=await De.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:AS});n(I=>[...I,O.eval_set]),i(O.eval_set.id),c(I=>new Set([...I,O.eval_set.id]))}catch(O){g(O.message||"Failed to create eval set")}},T=async O=>{if(e!=null&&e.id)try{const I=await De.post(`/projects/${e.id}/eval-sets/${O}/cases`,{name:"New Test Case",description:"",invocations:[{id:cx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n($=>$.map(V=>V.id===O?{...V,eval_cases:[...V.eval_cases,I.eval_case]}:V)),i(O),a(I.eval_case.id)}catch(I){g(I.message||"Failed to create eval case")}},D=async(O,I,$)=>{if(e!=null&&e.id)try{const V=await De.put(`/projects/${e.id}/eval-sets/${O}/cases/${I}`,$);n(Q=>Q.map(re=>re.id===O?{...re,eval_cases:re.eval_cases.map(me=>me.id===I?V.eval_case:me)}:re))}catch(V){g(V.message||"Failed to update eval case")}},M=async(O,I)=>{if(e!=null&&e.id)try{await De.delete(`/projects/${e.id}/eval-sets/${O}/cases/${I}`),n($=>$.map(V=>V.id===O?{...V,eval_cases:V.eval_cases.filter(Q=>Q.id!==I)}:V)),o===I&&a(null)}catch($){g($.message||"Failed to delete eval case")}},j=async O=>{if(e!=null&&e.id)try{await De.delete(`/projects/${e.id}/eval-sets/${O}`),n(I=>I.filter($=>$.id!==O)),r===O&&(i(null),a(null))}catch(I){g(I.message||"Failed to delete eval set")}},K=async O=>{if(e!=null&&e.id)try{const I=await De.get(`/projects/${e.id}/eval-sets/${O}/export`),$=new Blob([JSON.stringify(I,null,2)],{type:"application/json"}),V=URL.createObjectURL($),Q=document.createElement("a");Q.href=V;const re=t.find(me=>me.id===O);Q.download=`${(re==null?void 0:re.name)||"eval-set"}.json`,document.body.appendChild(Q),Q.click(),document.body.removeChild(Q),URL.revokeObjectURL(V)}catch(I){g(I.message||"Failed to export eval set")}},G=async O=>{if(e!=null&&e.id)try{const I=await O.text(),$=JSON.parse(I),V=await De.post(`/projects/${e.id}/eval-sets/import`,$);n(Q=>[...Q,V.eval_set]),i(V.eval_set.id),c(Q=>new Set([...Q,V.eval_set.id]))}catch(I){g(I.message||"Failed to import eval set")}},z=_.useRef(null),ue=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const O=await Promise.all(t.map(async Q=>{try{return await De.get(`/projects/${e.id}/eval-sets/${Q.id}/export`)}catch{return Q}})),I=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),$=URL.createObjectURL(I),V=document.createElement("a");V.href=$,V.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(V),V.click(),document.body.removeChild(V),URL.revokeObjectURL($)}catch(O){g(O.message||"Failed to export all eval sets")}},R=async(O,I)=>{if(e!=null&&e.id){y($=>new Set([...$,I]));try{const $=await De.post(`/projects/${e.id}/eval-sets/${O}/cases/${I}/run`,{});d(V=>new Map(V).set(I,$.result))}catch($){g($.message||"Failed to run eval case")}finally{y($=>{const V=new Set($);return V.delete(I),V})}}},ee=async O=>{if(!(e!=null&&e.id))return;const I=t.find(V=>V.id===O);if(!I)return;const $=I.eval_cases.map(V=>V.id);y(V=>new Set([...V,O,...$]));try{const V=await De.post(`/projects/${e.id}/eval-sets/${O}/run`,{});f(Q=>new Map(Q).set(O,V.result));for(const Q of V.result.case_results)d(re=>new Map(re).set(Q.eval_case_id,Q));try{await De.post(`/projects/${e.id}/eval-history`,V.result),S()}catch(Q){console.warn("Failed to save eval run to history:",Q)}}catch(V){g(V.message||"Failed to run eval set")}finally{y(V=>{const Q=new Set(V);return Q.delete(O),$.forEach(re=>Q.delete(re)),Q})}},W=O=>{c(I=>{const $=new Set(I);return $.has(O)?$.delete(O):$.add(O),$})},ne=O=>{let I=O.eval_cases.length,$=0,V=0,Q=0;for(const re of O.eval_cases){const me=u.get(re.id);me?me.passed?$++:V++:Q++}return{total:I,passed:$,failed:V,pending:Q}},ae=O=>O==null?"-":`${Math.round(O*100)}%`;return e?s.jsxs("div",{className:"eval-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"eval-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsx("h3",{children:"Evaluation Tests"}),s.jsxs("div",{className:"header-actions",children:[s.jsx("input",{type:"file",ref:z,accept:".json",style:{display:"none"},onChange:O=>{var $;const I=($=O.target.files)==null?void 0:$[0];I&&(G(I),O.target.value="")}}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var O;return(O=z.current)==null?void 0:O.click()},title:"Import eval set from JSON",children:s.jsx(qo,{size:14})}),t.length>0&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:ue,title:"Download all eval sets as JSON",children:s.jsx(ss,{size:14})}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:B,title:"Refresh",children:s.jsx(En,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:X,title:"New eval set",children:[s.jsx(Ue,{size:14}),"Set"]})]})]}),s.jsxs("div",{className:"eval-tree",children:[b&&s.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),x&&s.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:x}),!b&&t.length===0&&s.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[s.jsx(cu,{size:32}),s.jsxs("p",{children:["No evaluation sets yet.",s.jsx("br",{}),"Create one to get started."]})]}),t.map(O=>{const I=l.has(O.id),$=ne(O),V=m.has(O.id);return s.jsxs("div",{className:"tree-item",children:[s.jsxs("div",{className:`tree-set ${r===O.id&&!o?"selected":""}`,onClick:()=>A(O.id),children:[s.jsx("button",{className:"expand-btn",onClick:Q=>{Q.stopPropagation(),W(O.id)},children:O.eval_cases.length>0?I?s.jsx(Tt,{size:14}):s.jsx(Pt,{size:14}):s.jsx("span",{style:{width:14}})}),s.jsx(rg,{size:14,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{className:"set-name",children:O.name}),s.jsx("button",{className:"add-case-btn",onClick:Q=>{Q.stopPropagation(),T(O.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:s.jsx(Ue,{size:12})}),$.total>0&&s.jsxs("span",{className:"set-stats",children:[$.passed>0&&s.jsx("span",{className:"stat-passed",children:$.passed}),$.failed>0&&s.jsx("span",{className:"stat-failed",children:$.failed}),$.pending>0&&s.jsx("span",{className:"stat-pending",children:$.pending})]}),s.jsx("button",{className:"run-btn",onClick:Q=>{Q.stopPropagation(),ee(O.id)},title:"Run all tests in this set",disabled:V,children:V?s.jsx(vo,{size:12,className:"spinning"}):s.jsx(Fn,{size:12})})]}),I&&s.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:O.eval_cases.map(Q=>{var H;const re=u.get(Q.id),me=m.has(Q.id);return s.jsxs("div",{className:`tree-case ${o===Q.id?"selected":""}`,onClick:()=>N(O.id,Q.id),children:[me?s.jsx(vo,{size:14,className:"spinning",style:{color:"var(--warning)"}}):re?re.passed?s.jsx(lr,{size:14,style:{color:"var(--success)"}}):s.jsx(qr,{size:14,style:{color:"var(--error)"}}):s.jsx(bo,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{className:"case-name",children:Q.name}),re&&re.metric_results.length>0&&s.jsx("span",{style:{fontSize:11,color:re.passed?"var(--success)":"var(--error)"},children:ae((H=re.metric_results[0])==null?void 0:H.score)}),s.jsx("button",{className:"run-btn",onClick:ce=>{ce.stopPropagation(),R(O.id,Q.id)},disabled:me,children:s.jsx(Fn,{size:12})})]},Q.id)})})]},O.id)})]}),s.jsxs("div",{className:"history-section",children:[s.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:s.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",h.length,")"]})}),s.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:h.length===0?s.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...h].sort((O,I)=>(I.started_at||0)-(O.started_at||0)).map(O=>{const I=O.passed_cases===O.total_cases;return s.jsx("div",{className:`history-item ${(C==null?void 0:C.id)===O.id?"selected":""}`,onClick:()=>k(O.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(C==null?void 0:C.id)===O.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[I?s.jsx(lr,{size:14,style:{color:"var(--success)",flexShrink:0}}):s.jsx(qr,{size:14,style:{color:"var(--error)",flexShrink:0}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:500},children:O.eval_set_name||"Unnamed"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(O.started_at*1e3).toLocaleString()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{color:I?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[O.passed_cases,"/",O.total_cases]}),s.jsx("button",{className:"btn btn-icon",onClick:$=>{$.stopPropagation(),E(O.id)},title:"Delete run",style:{padding:2},children:s.jsx(Ae,{size:12})})]})]})},O.id)})})]})]}),s.jsx("div",{className:"eval-editor",children:C?s.jsx(IS,{run:C,onClose:v}):F?s.jsx(OS,{evalCase:F,evalSetId:r,projectId:e.id,result:u.get(F.id),isRunning:m.has(F.id),onUpdate:O=>D(r,F.id,O),onDelete:()=>M(r,F.id),onRun:()=>R(r,F.id),onClearResult:()=>d(O=>{const I=new Map(O);return I.delete(F.id),I})}):U?s.jsx($S,{evalSet:U,projectId:e.id,result:p.get(U.id),isRunning:m.has(U.id),caseResults:u,onUpdate:async O=>{try{const I=await De.put(`/projects/${e.id}/eval-sets/${U.id}`,O);n($=>$.map(V=>V.id===U.id?I.eval_set:V))}catch(I){g(I.message)}},onDelete:()=>j(U.id),onRun:()=>ee(U.id),onExport:()=>K(U.id)}):s.jsx("div",{className:"editor-content",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(bo,{size:48}),s.jsxs("p",{children:["Select a test case to edit",s.jsx("br",{}),"or create a new one"]})]})})})]}):null}function MS({value:e,onChange:t}){var a,l;const{project:n}=st(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,o=r.find(c=>c.id===i);return s.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[s.jsx("option",{value:"",children:o?`App Default (${o.model_name})`:"App Default"}),r.map(c=>s.jsx("option",{value:c.model_name,children:c.model_name},c.id)),s.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),s.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),s.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function IS({run:e,onClose:t}){var m;const{project:n}=st(),[r,i]=_.useState(!0),[o,a]=_.useState(new Set),l=e.case_results||[],c=l.filter(y=>y.passed).length,u=l.filter(y=>!y.passed).length,d=r?l.filter(y=>!y.passed):l,p=y=>{a(b=>{const P=new Set(b);return P.has(y)?P.delete(y):P.add(y),P})},f=y=>{y&&n&&(window.location.href=`/project/${n.id}/run?session=${y}`)};return s.jsxs("div",{className:"test-result-viewer",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"result-header",children:[s.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const y=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(y)}},title:"Copy link to this run",children:s.jsx(ou,{size:14})})})]}),s.jsxs("div",{className:"result-summary",children:[s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Status"}),s.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Passed"}),s.jsx("span",{className:"value passed",children:c})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Failed"}),s.jsx("span",{className:"value failed",children:u})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Total Cases"}),s.jsx("span",{className:"value",children:l.length})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Duration"}),s.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Tokens"}),s.jsx("span",{className:"value",children:((m=e.total_tokens)==null?void 0:m.toLocaleString())||"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Run Time"}),s.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),s.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[s.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[s.jsx("input",{type:"checkbox",checked:r,onChange:y=>i(y.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),s.jsxs("div",{className:"result-cases",children:[d.map((y,b)=>{var v,E,B,U,F,X;const P=y.case_id||`case-${b}`,x=o.has(P),g=((v=y.metric_results)==null?void 0:v.filter(T=>!T.passed||T.error))||[],h=((E=y.metric_results)==null?void 0:E.filter(T=>T.passed&&!T.error))||[],L=((B=y.rubric_results)==null?void 0:B.filter(T=>!T.passed||T.error))||[],C=((U=y.rubric_results)==null?void 0:U.filter(T=>T.passed&&!T.error))||[],w=x?y.metric_results:g,S=x?y.rubric_results:L,k=x?y.invocation_results:(F=y.invocation_results)==null?void 0:F.filter(T=>{var D;return((D=T.metric_results)==null?void 0:D.some(M=>!M.passed))||T.error}),A=h.length+C.length,N=g.length+L.length;return s.jsxs("div",{className:"result-case",children:[s.jsxs("div",{className:"result-case-header",onClick:()=>p(P),style:{cursor:"pointer"},children:[s.jsxs("div",{className:"result-case-name",children:[s.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:x?"▼":"▶"}),y.passed?s.jsx(lr,{size:16,style:{color:"var(--success)"}}):s.jsx(qr,{size:16,style:{color:"var(--error)"}}),y.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&s.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:y.eval_set_name}),y.case_name||`Case ${b+1}`,s.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[N>0&&s.jsxs("span",{style:{color:"var(--error)"},children:[N," failed"]}),N>0&&A>0&&" · ",A>0&&s.jsxs("span",{style:{color:"var(--success)"},children:[A," passed"]})]})]}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[y.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:T=>{T.stopPropagation(),f(y.session_id)},title:"View session in Run panel",children:[s.jsx(ng,{size:12})," View Session"]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:y.duration_ms?`${(y.duration_ms/1e3).toFixed(2)}s`:""})]})]}),s.jsxs("div",{className:"result-case-details",children:[(w==null?void 0:w.length)>0&&s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[w.map((T,D)=>{const M=Yi(T.metric,T.score,T.threshold);return s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:T.error?"rgba(255, 193, 7, 0.1)":T.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${T.error?"var(--warning)":T.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[s.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:T.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),T.error?s.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):s.jsxs(s.Fragment,{children:[s.jsx("span",{style:{fontSize:14,fontWeight:600,color:T.passed?"var(--success)":"var(--error)"},children:M.value}),s.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:M.comparison})]})]},D)}),!x&&h.length>0&&s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",h.length," passed"]})]}),w==null?void 0:w.filter(T=>!T.passed&&T.rationale).map((T,D)=>s.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[s.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[T.metric.replace(/_/g," ")," - Why it failed:"]}),s.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:T.rationale})]},`rationale-${D}`)),(S==null?void 0:S.length)>0&&s.jsxs("div",{style:{marginTop:8},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),S.map((T,D)=>s.jsxs("div",{style:{marginBottom:T.rationale&&!T.passed?8:4},children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"metric-name",style:{flex:1},children:T.rubric}),s.jsx("span",{className:`metric-value ${T.passed?"passed":"failed"}`,children:T.passed?"✓ Pass":"✗ Fail"})]}),!T.passed&&T.rationale&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",T.rationale]}),T.error&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",T.error]})]},D)),!x&&C.length>0&&s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",C.length," passed rubric",C.length>1?"s":""]})]}),(k==null?void 0:k.length)>0&&s.jsxs("div",{className:"invocation-summary",children:[s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",k.length,!x&&((X=y.invocation_results)==null?void 0:X.length)>k.length?` of ${y.invocation_results.length}`:"",")"]}),k.map((T,D)=>s.jsxs("div",{className:"invocation-item",children:[s.jsxs("div",{className:"invocation-query",children:["Turn ",T.invocation_id||D+1,": ",T.user_message||"(no message)"]}),T.actual_response&&s.jsxs("div",{className:"invocation-response",children:["Response: ",T.actual_response.substring(0,200),T.actual_response.length>200?"...":""]})]},D))]}),y.error&&s.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:y.error})]})]},P)}),l.length===0&&s.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function OS({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:o,onDelete:a,onRun:l,onClearResult:c}){var C,w,S;const{project:u}=st(),[d,p]=_.useState(e),[f,m]=_.useState("assertions");_.useEffect(()=>{p(e)},[e.id]);const y=_.useCallback(k=>{p(A=>({...A,...k})),o(k)},[o]),b=()=>{const k={id:cx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};y({invocations:[...d.invocations,k]})},P=(k,A)=>{const N=[...d.invocations];N[k]={...N[k],...A},y({invocations:N})},x=k=>{y({invocations:d.invocations.filter((A,N)=>N!==k)})},g=k=>{const A=[...d.invocations];A[k]={...A[k],expected_tool_calls:[...A[k].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},y({invocations:A})},h=(k,A,N)=>{const v=[...d.invocations],E=[...v[k].expected_tool_calls];E[A]={...E[A],...N},v[k]={...v[k],expected_tool_calls:E},y({invocations:v})},L=(k,A)=>{const N=[...d.invocations];N[k]={...N[k],expected_tool_calls:N[k].expected_tool_calls.filter((v,E)=>E!==A)},y({invocations:N})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(bo,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("input",{type:"text",value:d.name,onChange:k=>y({name:k.target.value}),placeholder:"Test case name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const k=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(k)},title:"Copy link to this test case",children:s.jsx(ou,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?s.jsx(vo,{size:14,className:"spinning"}):s.jsx(Fn,{size:14}),"Run"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(Ae,{size:14})})]}),s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>m("assertions"),children:[s.jsx(ko,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),s.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>m("rubrics"),children:[s.jsx(cu,{size:14,style:{marginRight:6}}),"LLM Judges"]}),s.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>m("docs"),children:[s.jsx(yo,{size:14,style:{marginRight:6}}),"Docs"]}),s.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>m("json"),children:[s.jsx(rn,{size:14,style:{marginRight:6}}),"JSON"]})]}),s.jsxs("div",{className:"editor-content",children:[f==="assertions"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),s.jsxs("select",{value:d.target_agent||"",onChange:k=>y({target_agent:k.target.value||void 0}),style:{width:"100%"},children:[s.jsx("option",{value:"",children:"root_agent"}),(C=u==null?void 0:u.agents)==null?void 0:C.map(k=>s.jsx("option",{value:k.name,children:k.name},k.name))]})]}),s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),s.jsx("input",{type:"text",value:d.tags.join(", "),onChange:k=>y({tags:k.target.value.split(",").map(A=>A.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:d.description,onChange:k=>y({description:k.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["session_input ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(Wt,{height:"100%",defaultLanguage:"json",value:(()=>{var A;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((A=u==null?void 0:u.app)!=null&&A.state_keys)&&u.app.state_keys.length>0){const N={};return u.app.state_keys.forEach(v=>{v.default_value!==void 0?N[v.name]=v.default_value:N[v.name]=v.type==="string"?"":v.type==="number"?0:v.type==="boolean"?!1:v.type==="array"?[]:{}}),JSON.stringify(N,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:k=>{try{k&&y({initial_state:JSON.parse(k)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(ko,{size:14}),"Conversation Turns"]}),d.invocations.map((k,A)=>s.jsxs("div",{className:"invocation-card",children:[s.jsxs("div",{className:"invocation-number",children:[s.jsx("span",{children:A+1}),d.invocations.length>1&&s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>x(A),style:{padding:4},children:s.jsx(Ae,{size:10})})]}),s.jsxs("div",{className:"invocation-content",children:[s.jsxs("div",{className:"invocation-row",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("label",{children:"User Query"}),s.jsx("textarea",{value:k.user_message,onChange:N=>P(A,{user_message:N.target.value}),placeholder:"The message to send to the agent..."})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{children:["Expected Response ",s.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),s.jsx("textarea",{value:k.expected_response||"",onChange:N=>P(A,{expected_response:N.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),k.expected_tool_calls.map((N,v)=>s.jsxs("div",{className:"tool-call-compact",children:[s.jsx("input",{type:"text",value:N.name,onChange:E=>h(A,v,{name:E.target.value}),placeholder:"tool_name",className:"tool-name-input"}),s.jsxs("div",{className:"pillbox-toggle",children:[s.jsx("button",{className:`pill ${N.args_match_mode==="subset"?"active":""}`,onClick:()=>h(A,v,{args_match_mode:"subset"}),children:"Partial"}),s.jsx("button",{className:`pill ${N.args_match_mode==="exact"?"active":""}`,onClick:()=>h(A,v,{args_match_mode:"exact"}),children:"Exact"})]}),s.jsx("div",{className:"tool-args-editor",children:s.jsx(Wt,{height:"22px",defaultLanguage:"json",value:JSON.stringify(N.args||{}),onChange:E=>{try{E&&h(A,v,{args:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>L(A,v),style:{padding:"4px 6px"},children:s.jsx(Ae,{size:10})})]},v)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(A),style:{marginTop:4},children:[s.jsx(Ue,{size:12})," Assert Tool Call"]})]})]},k.id)),s.jsxs("button",{className:"btn btn-secondary",onClick:b,children:[s.jsx(Ue,{size:14})," Add Turn"]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(lr,{size:14,style:{marginRight:6}}),"final_session_state ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(Wt,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:k=>{if(!k||k==="{}")y({expected_final_state:void 0});else try{y({expected_final_state:JSON.parse(k)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:k,label:A,default:N,max:v})=>{const E=(d.enabled_metrics||[]).find(U=>U.metric===k),B=(E==null?void 0:E.threshold)??N;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:!!E,onChange:U=>{const F=[...d.enabled_metrics||[]];if(U.target.checked)F.push({metric:k,threshold:N});else{const X=F.findIndex(T=>T.metric===k);X!==-1&&F.splice(X,1)}y({enabled_metrics:F})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,opacity:E?1:.5,minWidth:100},children:A}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:E?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:v===5?1:0,max:v,step:.1,value:B,disabled:!E,onChange:U=>{const F=[...d.enabled_metrics||[]],X=F.findIndex(T=>T.metric===k);X!==-1&&(F[X]={...F[X],threshold:parseFloat(U.target.value)||0},y({enabled_metrics:F}))},style:{width:60,textAlign:"center",opacity:E?1:.3,padding:"2px 4px",fontSize:11}})]},k)})}),s.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Custom Rubrics"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((k,A)=>s.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[s.jsx("input",{type:"text",value:k.rubric,onChange:N=>{const v=[...d.rubrics];v[A]={rubric:N.target.value},y({rubrics:v})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y({rubrics:d.rubrics.filter((N,v)=>v!==A)}),children:s.jsx(Ae,{size:12})})]},A)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({rubrics:[...d.rubrics,{rubric:""}]}),children:[s.jsx(Ue,{size:12})," Add Rubric"]})]})]}),f==="docs"&&s.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[s.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),s.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),s.jsxs("p",{children:["Each test case simulates a ",s.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Response"})," = the agent's ",s.jsx("em",{children:"final text reply"})," for that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Session State"})," = test the ",s.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),s.jsxs("p",{children:["The ",s.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",s.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{style:{marginBottom:8},children:s.jsx("strong",{children:"During one turn, an agent may:"})}),s.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[s.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),s.jsx("li",{children:"Call multiple tools"}),s.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),s.jsxs("li",{children:["Finally send a ",s.jsx("em",{children:"concluding response"})]})]}),s.jsxs("p",{children:["Only the ",s.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"response_match_score"})," uses ",s.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),s.jsx("li",{children:"Calculates word overlap (not exact string match)"}),s.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{children:s.jsx("strong",{children:"Example:"})}),s.jsxs("p",{children:["Expected: ",s.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),s.jsxs("p",{children:["Actual: ",s.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),s.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),s.jsxs("p",{style:{marginTop:8},children:["A threshold of ",s.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),s.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),s.jsxs("p",{children:[s.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Set user preferences or context"}),s.jsx("li",{children:"Simulate a specific scenario"}),s.jsx("li",{children:"Test state-dependent behavior"})]}),s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Expected Final State"})," — Verified at the ",s.jsx("em",{children:"very end"})," of the test case, ",s.jsx("strong",{children:"after ALL invocations complete"}),"."]}),s.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:s.jsxs("p",{style:{margin:0},children:[s.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),s.jsxs("p",{children:["By default, tests run against the ",s.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),s.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:'"Does the response mention the product price?"'}),s.jsx("li",{children:'"Is the tone professional and helpful?"'}),s.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),s.jsx("tbody",{children:Object.keys(en).map(k=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:k}),s.jsx("td",{style:{padding:"8px 4px"},children:en[k].requiresJudge?s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),s.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:en[k].description})]},k))})]})]}),s.jsxs("section",{children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),s.jsxs("ul",{style:{marginLeft:20},children:[s.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),s.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),s.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),s.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),s.jsx("li",{children:"Use tags to organize tests by feature or priority"}),s.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),s.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx(Wt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(w=d.tags)!=null&&w.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(k=>{var A;return{user_message:k.user_message,expected_response:k.expected_response||void 0,expected_tool_calls:(A=k.expected_tool_calls)!=null&&A.length?k.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(S=d.rubrics)!=null&&S.length?d.rubrics.map(k=>k.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var A,N;const k=JSON.stringify({name:d.name,description:d.description||void 0,tags:(A=d.tags)!=null&&A.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(v=>{var E;return{user_message:v.user_message,expected_response:v.expected_response||void 0,expected_tool_calls:(E=v.expected_tool_calls)!=null&&E.length?v.expected_tool_calls.map(B=>({tool_name:B.tool_name,args:B.match_type!=="name_only"&&Object.keys(B.args||{}).length?B.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(N=d.rubrics)!=null&&N.length?d.rubrics.map(v=>v.rubric):void 0},null,2);navigator.clipboard.writeText(k)},children:[s.jsx(Ho,{size:14})," Copy JSON"]})})]})]}),r&&s.jsxs("div",{className:"result-panel",children:[s.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?s.jsxs(s.Fragment,{children:[s.jsx(lr,{size:18})," ",s.jsx("strong",{children:"Passed"})]}):s.jsxs(s.Fragment,{children:[s.jsx(qr,{size:18})," ",s.jsx("strong",{children:"Failed"})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[s.jsx(ng,{size:12}),"View Session"]}),c&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),s.jsx("div",{className:"result-scores",children:r.metric_results.map((k,A)=>{var v;const N=Yi(k.metric,k.score,k.threshold);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${k.passed?"passed":"failed"}`,children:N.value}),s.jsx("div",{className:"score-label",children:((v=en[k.metric])==null?void 0:v.name)||k.metric}),s.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:N.comparison}),k.error&&s.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:k.error})]},A)})}),r.rubric_results&&r.rubric_results.length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((k,A)=>s.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:k.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${k.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[s.jsx("span",{style:{fontSize:16,color:k.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:k.passed?"✓":"✗"}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:k.rubric}),k.error&&s.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",k.error]})]})]},A))})]}),r.invocation_results.map((k,A)=>s.jsxs("div",{className:"result-details",children:[s.jsxs("h5",{children:["Turn ",A+1,": ",k.user_message.length>50?k.user_message.slice(0,50)+"…":k.user_message]}),k.metric_results.length>0&&s.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:k.metric_results.map((N,v)=>{var B;const E=Yi(N.metric,N.score,N.threshold);return s.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:N.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:N.passed?"var(--success)":"var(--error)"},children:[((B=en[N.metric])==null?void 0:B.name)||N.metric,": ",E.value]},v)})}),s.jsxs("div",{className:"detail-box",children:[s.jsx("strong",{children:"Actual Response:"}),`
`,k.actual_response||"(no response)",`

`,k.actual_tool_calls.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("strong",{children:"Tool Calls:"}),`
`,k.actual_tool_calls.map((N,v)=>`  ${v+1}. ${N.name}(${JSON.stringify(N.args)})
`).join("")]})]})]},A)),r.error&&s.jsxs("div",{className:"result-details",children:[s.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),s.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function $S({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:o,onDelete:a,onRun:l,onExport:c}){var b,P,x,g;const[u,d]=_.useState(e.name),[p,f]=_.useState(!1);_.useEffect(()=>{d(e.name)},[e.id]);const m=_.useCallback(()=>{u!==e.name&&o({name:u})},[u,e.name,o]),y=h=>h==null?"-":`${Math.round(h*100)}%`;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(rg,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("input",{type:"text",value:u,onChange:h=>d(h.target.value),onBlur:m,placeholder:"Eval set name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const h=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(h)},title:"Copy link to this eval set",children:s.jsx(ou,{size:14})}),s.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[s.jsx(rn,{size:14}),"JSON"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:s.jsx(ss,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?s.jsx(vo,{size:14,className:"spinning"}):s.jsx(Fn,{size:14}),"Run All"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(Ae,{size:14})})]}),s.jsx("div",{className:"editor-content",children:p?s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),s.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx(Wt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(h=>{var L,C;return{name:h.name,description:h.description||void 0,tags:(L=h.tags)!=null&&L.length?h.tags:void 0,target_agent:h.target_agent!=="root_agent"?h.target_agent:void 0,invocations:h.invocations.map(w=>{var S;return{user_message:w.user_message,expected_response:w.expected_response||void 0,expected_tool_calls:(S=w.expected_tool_calls)!=null&&S.length?w.expected_tool_calls.map(k=>({tool_name:k.tool_name,args:k.match_type!=="name_only"&&Object.keys(k.args||{}).length?k.args:void 0})):void 0}}),session_input:Object.keys(h.session_input||{}).length?{state:h.session_input}:void 0,final_session_state:Object.keys(h.final_session_state||{}).length?h.final_session_state:void 0,rubrics:(C=h.rubrics)!=null&&C.length?h.rubrics.map(w=>w.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((b=e.eval_config.metrics)==null?void 0:b.filter(h=>h.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var L;const h=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(C=>{var w,S;return{name:C.name,description:C.description||void 0,tags:(w=C.tags)!=null&&w.length?C.tags:void 0,target_agent:C.target_agent!=="root_agent"?C.target_agent:void 0,invocations:C.invocations.map(k=>{var A;return{user_message:k.user_message,expected_response:k.expected_response||void 0,expected_tool_calls:(A=k.expected_tool_calls)!=null&&A.length?k.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(C.session_input||{}).length?{state:C.session_input}:void 0,final_session_state:Object.keys(C.final_session_state||{}).length?C.final_session_state:void 0,rubrics:(S=C.rubrics)!=null&&S.length?C.rubrics.map(k=>k.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((L=e.eval_config.metrics)==null?void 0:L.filter(C=>C.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(h)},children:[s.jsx(Ho,{size:14})," Copy JSON"]})})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:e.description,onChange:h=>o({description:h.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"LLM Judge Model"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),s.jsx(MS,{value:((P=e.eval_config)==null?void 0:P.judge_model)||"",onChange:h=>o({eval_config:{...e.eval_config,judge_model:h}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(og,{size:14})," Evaluation Metrics"]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(en).map(h=>{var k,A,N;const L=en[h],C=(A=(k=e.eval_config)==null?void 0:k.metrics)==null?void 0:A.find(v=>v.metric===h),w=(C==null?void 0:C.enabled)??!1,S=((N=C==null?void 0:C.criterion)==null?void 0:N.threshold)??.7;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:w,onChange:v=>{var U;const E=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],B=E.findIndex(F=>F.metric===h);v.target.checked?B===-1?E.push({metric:h,enabled:!0,criterion:{threshold:.7}}):E[B]={...E[B],enabled:!0}:B!==-1&&(E[B]={...E[B],enabled:!1}),o({eval_config:{...e.eval_config,metrics:E}})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsxs("span",{style:{fontSize:12,opacity:w?1:.5,minWidth:140,fontWeight:w?500:400},children:[L.name,L.requiresJudge&&s.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:w?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:0,max:1,step:.1,value:S,disabled:!w,onChange:v=>{var U;const E=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],B=E.findIndex(F=>F.metric===h);B!==-1&&(E[B]={...E[B],criterion:{...E[B].criterion,threshold:parseFloat(v.target.value)||.7}},o({eval_config:{...e.eval_config,metrics:E}}))},style:{width:60,textAlign:"center",opacity:w?1:.3,padding:"2px 4px",fontSize:11}})]},h)}),s.jsxs("div",{className:"form-row",style:{marginTop:16},children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Default Trajectory Match Type"}),s.jsxs("select",{value:((x=e.eval_config)==null?void 0:x.default_trajectory_match_type)||"in_order",onChange:h=>o({eval_config:{...e.eval_config,default_trajectory_match_type:h.target.value}}),children:[s.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),s.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),s.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Number of Runs"}),s.jsx("input",{type:"number",min:1,max:10,value:((g=e.eval_config)==null?void 0:g.num_runs)||1,onChange:h=>o({eval_config:{...e.eval_config,num_runs:parseInt(h.target.value)||1}})}),s.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(b0,{size:14})," Coverage Summary"]}),n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"result-scores",children:[s.jsxs("div",{className:"score-card",children:[s.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),s.jsx("div",{className:"score-label",children:"Cases Passed"})]}),s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:y(n.overall_pass_rate)}),s.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([h,L])=>{var w;const C=Yi(h,L);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:"score-value",children:C.value}),s.jsxs("div",{className:"score-label",children:["Avg ",((w=en[h])==null?void 0:w.name)||h]})]},h)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([h,L])=>{var C;return s.jsxs("div",{style:{marginBottom:8},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[s.jsx("span",{children:((C=en[h])==null?void 0:C.name)||h}),s.jsx("span",{children:y(L)})]}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${L>=.8?"passed":"failed"}`,style:{width:`${L*100}%`}})})]},h)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),s.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),s.jsx("tbody",{children:n.case_results.map(h=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px"},children:h.eval_case_name}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:h.metric_results.map((L,C)=>{const w=Yi(L.metric,L.score,L.threshold);return s.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:L.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:L.passed?"var(--success)":"var(--error)"},children:w.value},C)})}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:h.passed?s.jsx(lr,{size:14,style:{color:"var(--success)"}}):h.error?s.jsx(yo,{size:14,style:{color:"var(--warning)"}}):s.jsx(qr,{size:14,style:{color:"var(--error)"}})})]},h.eval_case_id))})]})]})]}):s.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[s.jsx(cu,{size:32,style:{marginBottom:8,opacity:.3}}),s.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):s.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(h=>{const L=i.get(h.id);return s.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[L?L.passed?s.jsx(lr,{size:14,style:{color:"var(--success)"}}):s.jsx(qr,{size:14,style:{color:"var(--error)"}}):s.jsx(bo,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{style:{flex:1},children:h.name}),s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[h.invocations.length," turn(s)"]})]},h.id)})})]})]})})]})}function DS(){const{project:e,setProject:t}=st(),[n,r]=_.useState(""),[i,o]=_.useState(!0),[a,l]=_.useState(!1),[c,u]=_.useState(null),[d,p]=_.useState(!1);if(!e)return null;_.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const g=await Bh(e.id);r(g),l(!1)}catch(g){u(g.message)}finally{o(!1)}}function m(g){g!==void 0&&(r(g),l(!0),u(null))}async function y(){o(!0),u(null);try{const g=await Uh(e.id,n);t(g),l(!1)}catch(g){u(g.message)}finally{o(!1)}}function b(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function P(){const g=new Blob([n],{type:"text/yaml"}),h=URL.createObjectURL(g),L=document.createElement("a");L.href=h,L.download=`${e.name}.yaml`,L.click(),URL.revokeObjectURL(h)}function x(){const g=document.createElement("input");g.type="file",g.accept=".yaml,.yml",g.onchange=async h=>{var w;const L=(w=h.target.files)==null?void 0:w[0];if(!L)return;const C=await L.text();r(C),l(!0)},g.click()}return s.jsxs("div",{className:"yaml-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"yaml-header",children:[s.jsxs("div",{className:"yaml-title",children:[s.jsx("h3",{children:"Project Configuration"}),a&&s.jsxs("span",{className:"status-badge warning",children:[s.jsx(yo,{size:12}),"Unsaved changes"]}),c&&s.jsxs("span",{className:"status-badge error",children:[s.jsx(yo,{size:12}),c]}),d&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(tg,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"yaml-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,title:"Copy to clipboard",children:[s.jsx(Ho,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:P,title:"Download YAML",children:[s.jsx(ss,{size:14}),"Download"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,title:"Upload YAML",children:[s.jsx(qo,{size:14}),"Upload"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[s.jsx(En,{size:14}),"Reload"]}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:y,disabled:!a||i,children:"Apply Changes"})]})]}),s.jsx("div",{className:"yaml-editor",children:s.jsx(Wt,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"yaml-info",children:[s.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),s.jsxs("p",{children:["You can edit the YAML directly, then click ",s.jsx("code",{children:"Apply Changes"})," to update the project. Use ",s.jsx("code",{children:"Download"})," to save a backup or ",s.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function nf(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function FS(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function BS(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const i=t.agents.find(o=>o.id===e.agent_id);return i?`AgentTool(agent=${i.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const i=e.skillset_id,o=(r=t.skillsets)==null?void 0:r.find(a=>a.id===i);return o?`${o.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function US(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${nf(i.instruction)}"""`),i.description&&o.push(`description="${nf(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(c=>BS(c,t)).filter(c=>c&&!c.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const l={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(l)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(y=>y.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(y=>y.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${u}="${m}"`)}else o.push(`${u}=[${p}]`)}}return`${r} = Agent(
    ${o.join(`,
    `)}
)`}else if(e.type==="SequentialAgent"){const i=e.sub_agents.map(o=>n.get(o)||"sub_agent").join(", ");return`${r} = SequentialAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}else if(e.type==="LoopAgent"){const i=e,o=[`name="${e.name}"`],a=e.sub_agents.map(l=>n.get(l)||"sub_agent").join(", ");return o.push(`sub_agents=[${a}]`),i.max_iterations&&o.push(`max_iterations=${i.max_iterations}`),`${r} = LoopAgent(
    ${o.join(`,
    `)}
)`}else if(e.type==="ParallelAgent"){const i=e.sub_agents.map(o=>n.get(o)||"sub_agent").join(", ");return`${r} = ParallelAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}return`# Unknown agent type: ${e.type}`}function VS(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        ),"),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")),t.join(`
`)}function WS(e,t){const n=[];return n.push(`# SkillSet: ${e.name}`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager = KnowledgeServiceManager()`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset = SkillSet(`),n.push(`    skillset_id="${e.id}",`),n.push(`    project_id="${t.id}",`),n.push(`    manager=${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager,`),e.embedding_model?n.push(`    model_name="${e.embedding_model}",`):n.push('    model_name="text-embedding-004",'),n.push(`    search_enabled=${e.search_enabled?"True":"False"},`),n.push(`    preload_enabled=${e.preload_enabled?"True":"False"},`),e.preload_top_k&&n.push(`    preload_top_k=${e.preload_top_k},`),e.preload_min_score&&n.push(`    preload_min_score=${e.preload_min_score},`),n.push(")"),n.join(`
`)}function HS(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(S=>{const k=n[S];if(k){const N=S.toLowerCase().includes("key")||S.toLowerCase().includes("secret")?"***":k;t.push(`os.environ["${S}"] = "${N}"  # Set your ${S}`)}else t.push(`# os.environ["${S}"] = ""  # TODO: Set your ${S}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(S=>S.type==="SequentialAgent"),a=e.agents.some(S=>S.type==="LoopAgent"),l=e.agents.some(S=>S.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),l&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(S=>{var k;return S.type==="LlmAgent"&&((k=S.model)==null?void 0:k.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(S=>S.type==="LlmAgent"&&S.tools.some(k=>k.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(S=>{S.type==="LlmAgent"&&S.tools.forEach(k=>{k.type==="builtin"&&k.name&&d.add(k.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){i.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const S=e.mcp_servers.some(A=>A.connection_type==="stdio"),k=e.mcp_servers.some(A=>A.connection_type==="sse");S&&(i.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),i.add("from mcp import StdioServerParameters")),k&&i.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(S=>{"tools"in S&&S.tools&&S.tools.forEach(k=>{k.type==="skillset"&&f.add(k.skillset_id)})}),f.size>0&&(i.add("from skillset import SkillSet"),i.add("from knowledge_service import KnowledgeServiceManager")),i.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(S=>{S.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const y=Array.from(i).sort();t.push(...y),t.push(""),t.push("");const b=new Map;e.agents.forEach(S=>{const k=S.name.endsWith("_agent")?S.name:`${S.name}_agent`;b.set(S.id,k)});const P=[],x=new Set;function g(S){if(x.has(S))return;const k=e.agents.find(A=>A.id===S);k&&(k.sub_agents.forEach(A=>g(A)),x.add(S),P.push(k))}e.agents.forEach(S=>g(S.id));const h=new Map;P.forEach(S=>{S.type==="LlmAgent"&&S.tools.forEach(k=>{k.type==="mcp"&&k.server&&h.set(k.server.name,k.server)})}),h.size>0&&(t.push("# MCP Server Toolsets"),h.forEach(S=>{t.push(VS(S)),t.push("")}),t.push(""));const L=new Set;P.forEach(S=>{S.type==="LlmAgent"&&S.tools.forEach(k=>{k.type==="skillset"&&L.add(k.skillset_id)})}),L.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),L.forEach(S=>{var A;const k=(A=e.skillsets)==null?void 0:A.find(N=>N.id===S);k&&(t.push(WS(k,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(S=>{t.push(S.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(S=>{t.push(S.code),t.push("")}),t.push("")),t.push("# Models"),P.forEach(S=>{S.type==="LlmAgent"&&S.model&&(t.push(FS(S.model,`${S.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),P.forEach(S=>{t.push(US(S,e,b)),t.push("")});const C=e.agents.find(S=>S.id===e.app.root_agent_id),w=C?b.get(C.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${w},`),m){const S=e.app.plugins.map(k=>k.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${k.max_retries||3})`:`        # ${k.type}()`);t.push("    plugins=["),t.push(S.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function qS(){const{project:e}=st(),[t,n]=_.useState(!1);if(!e)return null;const r=_.useMemo(()=>HS(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(l)}return s.jsxs("div",{className:"code-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"code-header",children:[s.jsxs("div",{className:"code-title",children:[s.jsx(rn,{size:16}),s.jsx("h3",{children:"Python Code"}),s.jsx("span",{className:"badge",children:"Generated"}),t&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(tg,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[s.jsx(Ho,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[s.jsx(ss,{size:14}),"Download"]})]})]}),s.jsx("div",{className:"code-editor",children:s.jsx(Wt,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"code-info",children:[s.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),s.jsxs("p",{children:["Place this in a file named ",s.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",s.jsx("code",{children:"adk web ."})," or ",s.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const JS=[{id:"app",label:"App",icon:og},{id:"agents",label:"Agents",icon:nr},{id:"tools",label:"Tools",icon:Jt},{id:"callbacks",label:"Callbacks",icon:rn},{id:"run",label:"Run",icon:ig},{id:"skillsets",label:"SkillSets",icon:d0},{id:"eval",label:"Evaluate",icon:ql},{id:"yaml",label:"YAML",icon:f0},{id:"code",label:"Code",icon:rn}],KS=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Ha(){var F,X;const{projectId:e,tab:t,itemId:n}=f1(),r=nu(),{project:i,setProject:o,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=st(),[y,b]=_.useState(!0),[P,x]=_.useState(!1),[g,h]=_.useState(!1),[L,C]=_.useState(null),w=_.useRef(!0),S=_.useRef(null);_.useEffect(()=>{t&&KS.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),_.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function k(T){l(T),T==="agents"&&d?r(`/project/${e}/${T}/${d}`,{replace:!0}):T==="tools"&&f?r(`/project/${e}/${T}/${f}`,{replace:!0}):r(`/project/${e}/${T}`,{replace:!0})}function A(T){T?r(`/project/${e}/${a}/${T}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}_.useEffect(()=>(e&&N(e),()=>{o(null),u(!1)}),[e]);async function N(T){w.current=!0;try{const D=await Ih(T);o(D),S.current=JSON.stringify(D),u(!1)}catch(D){console.error("Failed to load project:",D),r("/")}finally{b(!1),setTimeout(()=>{w.current=!1},100)}}async function v(){if(i){x(!0);try{const{eval_sets:T,...D}=i;await Bl(i.id,D),S.current=JSON.stringify(i),u(!1)}catch(T){console.error("Failed to save project:",T)}finally{x(!1)}}}async function E(){if(i){h(!0),C(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let T=0,D=0;const M=[],j=[];for(const K of i.eval_sets||[]){if(K.eval_cases.length===0)continue;const G=await De.post(`/projects/${i.id}/eval-sets/${K.id}/run`,{});G.result&&(T+=G.result.passed_cases||0,D+=G.result.total_cases||0,G.result.case_results&&M.push(...G.result.case_results),j.push(G.result.eval_set_name||K.name||K.id))}if(M.length>0){const K={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:j.length>1?`All Tests (${j.length} sets)`:j[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:D,passed_cases:T,failed_cases:D-T,case_results:M};try{await De.post(`/projects/${i.id}/eval-history`,K)}catch(G){console.warn("Failed to save batch eval run to history:",G)}}C({passed:T,total:D}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>C(null),5e3)}catch(T){console.error("Failed to run tests:",T),C({passed:0,total:-1}),setTimeout(()=>C(null),5e3)}finally{h(!1)}}}const B=_.useRef(null);_.useEffect(()=>{if(i&&!w.current&&B.current){const T=i.app.models||[],D=B.current||[];if(T.some((j,K)=>{const G=D.find(z=>z.id===j.id);return G?G.provider!==j.provider||G.model_name!==j.model_name||G.api_base!==j.api_base||G.temperature!==j.temperature||G.max_output_tokens!==j.max_output_tokens||G.top_p!==j.top_p||G.top_k!==j.top_k:!1})){const j=i.app.default_model_id,K=i.agents.map(z=>{if(z.type==="LlmAgent"&&z.model){const ue=z.model._appModelId;if(ue){const R=T.find(ee=>ee.id===ue);if(R)return{...z,model:{provider:R.provider,model_name:R.model_name,api_base:R.api_base,temperature:R.temperature,max_output_tokens:R.max_output_tokens,top_p:R.top_p,top_k:R.top_k,fallbacks:[],_appModelId:ue}}}else if(j){const R=T.find(ee=>ee.id===j);if(R&&z.model.provider===R.provider&&z.model.model_name===R.model_name&&z.model.api_base===R.api_base)return{...z,model:{provider:R.provider,model_name:R.model_name,api_base:R.api_base,temperature:R.temperature,max_output_tokens:R.max_output_tokens,top_p:R.top_p,top_k:R.top_k,fallbacks:[],_appModelId:j}}}}return z});K.some((z,ue)=>JSON.stringify(z)!==JSON.stringify(i.agents[ue]))&&o({...i,agents:K})}}i&&(B.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const U=_.useRef(null);return _.useEffect(()=>(i&&!w.current&&S.current&&JSON.stringify(i)!==S.current&&(u(!0),U.current&&clearTimeout(U.current),U.current=setTimeout(async()=>{try{const{eval_sets:D,...M}=i;await Bl(i.id,M),S.current=JSON.stringify(i),u(!1)}catch(D){console.error("Auto-save failed:",D)}},500)),()=>{U.current&&clearTimeout(U.current)}),[i]),y?s.jsxs("div",{className:"loading-screen",children:[s.jsx("style",{children:`
          .loading-screen {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-muted);
          }
        `}),"Loading project..."]}):i?s.jsxs("div",{className:"project-editor",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"top-bar",children:[s.jsxs("div",{className:"top-bar-left",children:[s.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[s.jsx(u0,{size:18}),"Project"]}),s.jsx("h1",{className:"project-name",children:i.name})]}),s.jsx("nav",{className:"tabs-bar",children:JS.map(T=>s.jsxs("button",{className:`tab-btn ${a===T.id?"active":""}`,onClick:()=>k(T.id),children:[s.jsx(T.icon,{size:14}),T.label]},T.id))}),s.jsxs("div",{className:"top-bar-right",children:[s.jsxs("button",{className:`btn ${L?L.total===-1?"btn-error":L.passed===L.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:E,disabled:g||!((F=i==null?void 0:i.eval_sets)!=null&&F.some(T=>T.eval_cases.length>0)),title:(X=i==null?void 0:i.eval_sets)!=null&&X.some(T=>T.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[g?s.jsx(y0,{size:16,className:"spin"}):s.jsx(Fn,{size:16}),g?"Testing...":L?L.total===-1?"Error":`${L.passed}/${L.total}`:"Test"]}),s.jsxs("button",{className:"btn btn-primary",onClick:v,disabled:P,children:[s.jsx(au,{size:16}),P?"Saving...":"Save"]})]})]}),s.jsxs("main",{className:"main-content",children:[a==="app"&&s.jsx(L0,{}),a==="agents"&&s.jsx(D2,{onSelectAgent:A}),a==="tools"&&s.jsx(vS,{onSelectTool:A}),a==="callbacks"&&s.jsx(kS,{onSelectCallback:A}),a==="run"&&s.jsx(zS,{}),a==="skillsets"&&s.jsx(LS,{}),a==="eval"&&s.jsx(RS,{}),a==="yaml"&&s.jsx(DS,{}),a==="code"&&s.jsx(qS,{})]})]}):null}function QS(){const{setMcpServers:e,setBuiltinTools:t}=st();return _.useEffect(()=>{ru().then(e).catch(console.error),Vh().then(t).catch(console.error)},[e,t]),s.jsxs(T1,{children:[s.jsx(hr,{path:"/",element:s.jsx(S0,{})}),s.jsx(hr,{path:"/project/:projectId",element:s.jsx(Ha,{})}),s.jsx(hr,{path:"/project/:projectId/:tab",element:s.jsx(Ha,{})}),s.jsx(hr,{path:"/project/:projectId/:tab/:itemId",element:s.jsx(Ha,{})}),s.jsx(hr,{path:"*",element:s.jsx(E1,{to:"/",replace:!0})})]})}qa.createRoot(document.getElementById("root")).render(s.jsx(It.StrictMode,{children:s.jsx(A1,{children:s.jsx(QS,{})})}));
