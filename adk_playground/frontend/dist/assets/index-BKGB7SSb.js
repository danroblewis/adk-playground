function ux(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function No(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nf={exports:{}},Eo={},rf={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),dx=Symbol.for("react.portal"),px=Symbol.for("react.fragment"),fx=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),hx=Symbol.for("react.provider"),gx=Symbol.for("react.context"),xx=Symbol.for("react.forward_ref"),yx=Symbol.for("react.suspense"),vx=Symbol.for("react.memo"),bx=Symbol.for("react.lazy"),zu=Symbol.iterator;function kx(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},of=Object.assign,af={};function Jr(e,t,n){this.props=e,this.context=t,this.refs=af,this.updater=n||sf}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lf(){}lf.prototype=Jr.prototype;function oc(e,t,n){this.props=e,this.context=t,this.refs=af,this.updater=n||sf}var ac=oc.prototype=new lf;ac.constructor=oc;of(ac,Jr.prototype);ac.isPureReactComponent=!0;var Tu=Array.isArray,cf=Object.prototype.hasOwnProperty,lc={current:null},uf={key:!0,ref:!0,__self:!0,__source:!0};function df(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)cf.call(t,r)&&!uf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xi,type:e,key:o,ref:a,props:i,_owner:lc.current}}function jx(e,t){return{$$typeof:Xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xi}function wx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pu=/\/+/g;function ta(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wx(""+e.key):t.toString(36)}function Ps(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xi:case dx:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ta(a,0):r,Tu(i)?(n="",e!=null&&(n=e.replace(Pu,"$&/")+"/"),Ps(i,t,n,"",function(u){return u})):i!=null&&(cc(i)&&(i=jx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Pu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Tu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+ta(o,l);a+=Ps(o,t,n,c,i)}else if(c=kx(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+ta(o,l++),a+=Ps(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function cs(e,t,n){if(e==null)return e;var r=[],i=0;return Ps(e,r,"","",function(o){return t.call(n,o,i++)}),r}function _x(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var dt={current:null},Ls={transition:null},Sx={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Ls,ReactCurrentOwner:lc};function pf(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:cs,forEach:function(e,t,n){cs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cs(e,function(){t++}),t},toArray:function(e){return cs(e,function(t){return t})||[]},only:function(e){if(!cc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ke.Component=Jr;ke.Fragment=px;ke.Profiler=mx;ke.PureComponent=oc;ke.StrictMode=fx;ke.Suspense=yx;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx;ke.act=pf;ke.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=of({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=lc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)cf.call(t,c)&&!uf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xi,type:e.type,key:i,ref:o,props:r,_owner:a}};ke.createContext=function(e){return e={$$typeof:gx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hx,_context:e},e.Consumer=e};ke.createElement=df;ke.createFactory=function(e){var t=df.bind(null,e);return t.type=e,t};ke.createRef=function(){return{current:null}};ke.forwardRef=function(e){return{$$typeof:xx,render:e}};ke.isValidElement=cc;ke.lazy=function(e){return{$$typeof:bx,_payload:{_status:-1,_result:e},_init:_x}};ke.memo=function(e,t){return{$$typeof:vx,type:e,compare:t===void 0?null:t}};ke.startTransition=function(e){var t=Ls.transition;Ls.transition={};try{e()}finally{Ls.transition=t}};ke.unstable_act=pf;ke.useCallback=function(e,t){return dt.current.useCallback(e,t)};ke.useContext=function(e){return dt.current.useContext(e)};ke.useDebugValue=function(){};ke.useDeferredValue=function(e){return dt.current.useDeferredValue(e)};ke.useEffect=function(e,t){return dt.current.useEffect(e,t)};ke.useId=function(){return dt.current.useId()};ke.useImperativeHandle=function(e,t,n){return dt.current.useImperativeHandle(e,t,n)};ke.useInsertionEffect=function(e,t){return dt.current.useInsertionEffect(e,t)};ke.useLayoutEffect=function(e,t){return dt.current.useLayoutEffect(e,t)};ke.useMemo=function(e,t){return dt.current.useMemo(e,t)};ke.useReducer=function(e,t,n){return dt.current.useReducer(e,t,n)};ke.useRef=function(e){return dt.current.useRef(e)};ke.useState=function(e){return dt.current.useState(e)};ke.useSyncExternalStore=function(e,t,n){return dt.current.useSyncExternalStore(e,t,n)};ke.useTransition=function(){return dt.current.useTransition()};ke.version="18.3.1";rf.exports=ke;var w=rf.exports;const Ct=No(w),Cx=ux({__proto__:null,default:Ct},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nx=w,Ex=Symbol.for("react.element"),zx=Symbol.for("react.fragment"),Tx=Object.prototype.hasOwnProperty,Px=Nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lx={key:!0,ref:!0,__self:!0,__source:!0};function ff(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Tx.call(t,r)&&!Lx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ex,type:e,key:o,ref:a,props:i,_owner:Px.current}}Eo.Fragment=zx;Eo.jsx=ff;Eo.jsxs=ff;nf.exports=Eo;var s=nf.exports,Ja={},mf={exports:{}},zt={},hf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,M){var j=D.length;D.push(M);e:for(;0<j;){var H=j-1>>>1,G=D[H];if(0<i(G,M))D[H]=M,D[j]=G,j=H;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var M=D[0],j=D.pop();if(j!==M){D[0]=j;e:for(var H=0,G=D.length,z=G>>>1;H<z;){var he=2*(H+1)-1,R=D[he],te=he+1,V=D[te];if(0>i(R,j))te<G&&0>i(V,R)?(D[H]=V,D[te]=j,H=te):(D[H]=R,D[he]=j,H=he);else if(te<G&&0>i(V,j))D[H]=V,D[te]=j,H=te;else break e}}return M}function i(D,M){var j=D.sortIndex-M.sortIndex;return j!==0?j:D.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,x=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(D){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=D)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function P(D){if(b=!1,h(D),!x)if(n(c)!==null)x=!0,ne(C);else{var M=n(u);M!==null&&L(P,M.startTime-D)}}function C(D,M){x=!1,b&&(b=!1,y(k),k=-1),m=!0;var j=f;try{for(h(M),p=n(c);p!==null&&(!(p.expirationTime>M)||D&&!v());){var H=p.callback;if(typeof H=="function"){p.callback=null,f=p.priorityLevel;var G=H(p.expirationTime<=M);M=e.unstable_now(),typeof G=="function"?p.callback=G:p===n(c)&&r(c),h(M)}else r(c);p=n(c)}if(p!==null)var z=!0;else{var he=n(u);he!==null&&L(P,he.startTime-M),z=!1}return z}finally{p=null,f=j,m=!1}}var _=!1,N=null,k=-1,A=5,S=-1;function v(){return!(e.unstable_now()-S<A)}function E(){if(N!==null){var D=e.unstable_now();S=D;var M=!0;try{M=N(!0,D)}finally{M?F():(_=!1,N=null)}}else _=!1}var F;if(typeof g=="function")F=function(){g(E)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,$=B.port2;B.port1.onmessage=E,F=function(){$.postMessage(null)}}else F=function(){T(E,0)};function ne(D){N=D,_||(_=!0,F())}function L(D,M){k=T(function(){D(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,ne(C))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(D){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var j=f;f=M;try{return D()}finally{f=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,M){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=f;f=D;try{return M()}finally{f=j}},e.unstable_scheduleCallback=function(D,M,j){var H=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?H+j:H):j=H,D){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,D={id:d++,callback:M,priorityLevel:D,startTime:j,expirationTime:G,sortIndex:-1},j>H?(D.sortIndex=j,t(u,D),n(c)===null&&D===n(u)&&(b?(y(k),k=-1):b=!0,L(P,j-H))):(D.sortIndex=G,t(c,D),x||m||(x=!0,ne(C))),D},e.unstable_shouldYield=v,e.unstable_wrapCallback=function(D){var M=f;return function(){var j=f;f=M;try{return D.apply(this,arguments)}finally{f=j}}}})(gf);hf.exports=gf;var Ax=hf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx=w,Et=Ax;function Z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xf=new Set,zi={};function ur(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(zi[e]=t,e=0;e<t.length;e++)xf.add(t[e])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ka=Object.prototype.hasOwnProperty,Mx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lu={},Au={};function Ox(e){return Ka.call(Au,e)?!0:Ka.call(Lu,e)?!1:Mx.test(e)?Au[e]=!0:(Lu[e]=!0,!1)}function Ix(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $x(e,t,n,r){if(t===null||typeof t>"u"||Ix(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function pt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){nt[e]=new pt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];nt[t]=new pt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){nt[e]=new pt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){nt[e]=new pt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){nt[e]=new pt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){nt[e]=new pt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){nt[e]=new pt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){nt[e]=new pt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){nt[e]=new pt(e,5,!1,e.toLowerCase(),null,!1,!1)});var uc=/[\-:]([a-z])/g;function dc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uc,dc);nt[t]=new pt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uc,dc);nt[t]=new pt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uc,dc);nt[t]=new pt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){nt[e]=new pt(e,1,!1,e.toLowerCase(),null,!1,!1)});nt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){nt[e]=new pt(e,1,!1,e.toLowerCase(),null,!0,!0)});function pc(e,t,n,r){var i=nt.hasOwnProperty(t)?nt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($x(t,n,i,r)&&(n=null),r||i===null?Ox(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vn=Rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,us=Symbol.for("react.element"),xr=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),Qa=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),vf=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Ya=Symbol.for("react.suspense_list"),hc=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),bf=Symbol.for("react.offscreen"),Ru=Symbol.iterator;function Zr(e){return e===null||typeof e!="object"?null:(e=Ru&&e[Ru]||e["@@iterator"],typeof e=="function"?e:null)}var $e=Object.assign,na;function di(e){if(na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);na=t&&t[1]||""}return`
`+na+e}var ra=!1;function ia(e,t){if(!e||ra)return"";ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ra=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?di(e):""}function Dx(e){switch(e.tag){case 5:return di(e.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return e=ia(e.type,!1),e;case 11:return e=ia(e.type.render,!1),e;case 1:return e=ia(e.type,!0),e;default:return""}}function Xa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case xr:return"Portal";case Qa:return"Profiler";case fc:return"StrictMode";case Ga:return"Suspense";case Ya:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vf:return(e.displayName||"Context")+".Consumer";case yf:return(e._context.displayName||"Context")+".Provider";case mc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hc:return t=e.displayName||null,t!==null?t:Xa(e.type)||"Memo";case jn:t=e._payload,e=e._init;try{return Xa(e(t))}catch{}}return null}function Fx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xa(t);case 8:return t===fc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bx(e){var t=kf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ds(e){e._valueTracker||(e._valueTracker=Bx(e))}function jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Za(e,t){var n=t.checked;return $e({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wf(e,t){t=t.checked,t!=null&&pc(e,"checked",t,!1)}function el(e,t){wf(e,t);var n=Dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?tl(e,t.type,n):t.hasOwnProperty("defaultValue")&&tl(e,t.type,Dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ou(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function tl(e,t,n){(t!=="number"||Js(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pi=Array.isArray;function Tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Z(91));return $e({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Iu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Z(92));if(pi(n)){if(1<n.length)throw Error(Z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dn(n)}}function _f(e,t){var n=Dn(t.value),r=Dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ps,Cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ps=ps||document.createElement("div"),ps.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ps.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ux=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){Ux.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function Nf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function Ef(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vx=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function il(e,t){if(t){if(Vx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Z(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ol=null;function gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,Pr=null,Lr=null;function Du(e){if(e=ts(e)){if(typeof al!="function")throw Error(Z(280));var t=e.stateNode;t&&(t=Ao(t),al(e.stateNode,e.type,t))}}function zf(e){Pr?Lr?Lr.push(e):Lr=[e]:Pr=e}function Tf(){if(Pr){var e=Pr,t=Lr;if(Lr=Pr=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function Pf(e,t){return e(t)}function Lf(){}var sa=!1;function Af(e,t,n){if(sa)return e(t,n);sa=!0;try{return Pf(e,t,n)}finally{sa=!1,(Pr!==null||Lr!==null)&&(Lf(),Tf())}}function Pi(e,t){var n=e.stateNode;if(n===null)return null;var r=Ao(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Z(231,t,typeof n));return n}var ll=!1;if(hn)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){ll=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{ll=!1}function Wx(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var xi=!1,Ks=null,Qs=!1,cl=null,Hx={onError:function(e){xi=!0,Ks=e}};function qx(e,t,n,r,i,o,a,l,c){xi=!1,Ks=null,Wx.apply(Hx,arguments)}function Jx(e,t,n,r,i,o,a,l,c){if(qx.apply(this,arguments),xi){if(xi){var u=Ks;xi=!1,Ks=null}else throw Error(Z(198));Qs||(Qs=!0,cl=u)}}function dr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fu(e){if(dr(e)!==e)throw Error(Z(188))}function Kx(e){var t=e.alternate;if(!t){if(t=dr(e),t===null)throw Error(Z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fu(i),e;if(o===r)return Fu(i),t;o=o.sibling}throw Error(Z(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(Z(189))}}if(n.alternate!==r)throw Error(Z(190))}if(n.tag!==3)throw Error(Z(188));return n.stateNode.current===n?e:t}function Mf(e){return e=Kx(e),e!==null?Of(e):null}function Of(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Of(e);if(t!==null)return t;e=e.sibling}return null}var If=Et.unstable_scheduleCallback,Bu=Et.unstable_cancelCallback,Qx=Et.unstable_shouldYield,Gx=Et.unstable_requestPaint,Be=Et.unstable_now,Yx=Et.unstable_getCurrentPriorityLevel,xc=Et.unstable_ImmediatePriority,$f=Et.unstable_UserBlockingPriority,Gs=Et.unstable_NormalPriority,Xx=Et.unstable_LowPriority,Df=Et.unstable_IdlePriority,zo=null,rn=null;function Zx(e){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(zo,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:ny,ey=Math.log,ty=Math.LN2;function ny(e){return e>>>=0,e===0?32:31-(ey(e)/ty|0)|0}var fs=64,ms=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ys(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=fi(l):(o&=a,o!==0&&(r=fi(o)))}else a=n&~i,a!==0?r=fi(a):o!==0&&(r=fi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qt(t),i=1<<n,r|=e[n],t&=~i;return r}function ry(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-qt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=ry(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function ul(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ff(){var e=fs;return fs<<=1,!(fs&4194240)&&(fs=64),e}function oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qt(t),e[t]=n}function sy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-qt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function yc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ee=0;function Bf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uf,vc,Vf,Wf,Hf,dl=!1,hs=[],Tn=null,Pn=null,Ln=null,Li=new Map,Ai=new Map,_n=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(t.pointerId)}}function ti(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ts(t),t!==null&&vc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ay(e,t,n,r,i){switch(t){case"focusin":return Tn=ti(Tn,e,t,n,r,i),!0;case"dragenter":return Pn=ti(Pn,e,t,n,r,i),!0;case"mouseover":return Ln=ti(Ln,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Li.set(o,ti(Li.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ai.set(o,ti(Ai.get(o)||null,e,t,n,r,i)),!0}return!1}function qf(e){var t=Yn(e.target);if(t!==null){var n=dr(t);if(n!==null){if(t=n.tag,t===13){if(t=Rf(n),t!==null){e.blockedOn=t,Hf(e.priority,function(){Vf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function As(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ol=r,n.target.dispatchEvent(r),ol=null}else return t=ts(n),t!==null&&vc(t),e.blockedOn=n,!1;t.shift()}return!0}function Vu(e,t,n){As(e)&&n.delete(t)}function ly(){dl=!1,Tn!==null&&As(Tn)&&(Tn=null),Pn!==null&&As(Pn)&&(Pn=null),Ln!==null&&As(Ln)&&(Ln=null),Li.forEach(Vu),Ai.forEach(Vu)}function ni(e,t){e.blockedOn===t&&(e.blockedOn=null,dl||(dl=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,ly)))}function Ri(e){function t(i){return ni(i,e)}if(0<hs.length){ni(hs[0],e);for(var n=1;n<hs.length;n++){var r=hs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tn!==null&&ni(Tn,e),Pn!==null&&ni(Pn,e),Ln!==null&&ni(Ln,e),Li.forEach(t),Ai.forEach(t),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)qf(n),n.blockedOn===null&&_n.shift()}var Ar=vn.ReactCurrentBatchConfig,Xs=!0;function cy(e,t,n,r){var i=Ee,o=Ar.transition;Ar.transition=null;try{Ee=1,bc(e,t,n,r)}finally{Ee=i,Ar.transition=o}}function uy(e,t,n,r){var i=Ee,o=Ar.transition;Ar.transition=null;try{Ee=4,bc(e,t,n,r)}finally{Ee=i,Ar.transition=o}}function bc(e,t,n,r){if(Xs){var i=pl(e,t,n,r);if(i===null)ga(e,t,r,Zs,n),Uu(e,r);else if(ay(i,e,t,n,r))r.stopPropagation();else if(Uu(e,r),t&4&&-1<oy.indexOf(e)){for(;i!==null;){var o=ts(i);if(o!==null&&Uf(o),o=pl(e,t,n,r),o===null&&ga(e,t,r,Zs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ga(e,t,r,null,n)}}var Zs=null;function pl(e,t,n,r){if(Zs=null,e=gc(r),e=Yn(e),e!==null)if(t=dr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zs=e,null}function Jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yx()){case xc:return 1;case $f:return 4;case Gs:case Xx:return 16;case Df:return 536870912;default:return 16}default:return 16}}var Cn=null,kc=null,Rs=null;function Kf(){if(Rs)return Rs;var e,t=kc,n=t.length,r,i="value"in Cn?Cn.value:Cn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Rs=i.slice(e,1<r?1-r:void 0)}function Ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function Wu(){return!1}function Tt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gs:Wu,this.isPropagationStopped=Wu,this}return $e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),t}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=Tt(Kr),es=$e({},Kr,{view:0,detail:0}),dy=Tt(es),aa,la,ri,To=$e({},es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(aa=e.screenX-ri.screenX,la=e.screenY-ri.screenY):la=aa=0,ri=e),aa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),Hu=Tt(To),py=$e({},To,{dataTransfer:0}),fy=Tt(py),my=$e({},es,{relatedTarget:0}),ca=Tt(my),hy=$e({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=Tt(hy),xy=$e({},Kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yy=Tt(xy),vy=$e({},Kr,{data:0}),qu=Tt(vy),by={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jy[e])?!!t[e]:!1}function wc(){return wy}var _y=$e({},es,{key:function(e){if(e.key){var t=by[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ky[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(e){return e.type==="keypress"?Ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sy=Tt(_y),Cy=$e({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ju=Tt(Cy),Ny=$e({},es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),Ey=Tt(Ny),zy=$e({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=Tt(zy),Py=$e({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=Tt(Py),Ay=[9,13,27,32],_c=hn&&"CompositionEvent"in window,yi=null;hn&&"documentMode"in document&&(yi=document.documentMode);var Ry=hn&&"TextEvent"in window&&!yi,Qf=hn&&(!_c||yi&&8<yi&&11>=yi),Ku=" ",Qu=!1;function Gf(e,t){switch(e){case"keyup":return Ay.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function My(e,t){switch(e){case"compositionend":return Yf(t);case"keypress":return t.which!==32?null:(Qu=!0,Ku);case"textInput":return e=t.data,e===Ku&&Qu?null:e;default:return null}}function Oy(e,t){if(vr)return e==="compositionend"||!_c&&Gf(e,t)?(e=Kf(),Rs=kc=Cn=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qf&&t.locale!=="ko"?null:t.data;default:return null}}var Iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Iy[e.type]:t==="textarea"}function Xf(e,t,n,r){zf(r),t=eo(t,"onChange"),0<t.length&&(n=new jc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var vi=null,Mi=null;function $y(e){cm(e,0)}function Po(e){var t=jr(e);if(jf(t))return e}function Dy(e,t){if(e==="change")return t}var Zf=!1;if(hn){var ua;if(hn){var da="oninput"in document;if(!da){var Yu=document.createElement("div");Yu.setAttribute("oninput","return;"),da=typeof Yu.oninput=="function"}ua=da}else ua=!1;Zf=ua&&(!document.documentMode||9<document.documentMode)}function Xu(){vi&&(vi.detachEvent("onpropertychange",em),Mi=vi=null)}function em(e){if(e.propertyName==="value"&&Po(Mi)){var t=[];Xf(t,Mi,e,gc(e)),Af($y,t)}}function Fy(e,t,n){e==="focusin"?(Xu(),vi=t,Mi=n,vi.attachEvent("onpropertychange",em)):e==="focusout"&&Xu()}function By(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Po(Mi)}function Uy(e,t){if(e==="click")return Po(t)}function Vy(e,t){if(e==="input"||e==="change")return Po(t)}function Wy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:Wy;function Oi(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ka.call(t,i)||!Qt(e[i],t[i]))return!1}return!0}function Zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var n=Zu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zu(n)}}function tm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nm(){for(var e=window,t=Js();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Js(e.document)}return t}function Sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hy(e){var t=nm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tm(n.ownerDocument.documentElement,n)){if(r!==null&&Sc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ed(n,o);var a=ed(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qy=hn&&"documentMode"in document&&11>=document.documentMode,br=null,fl=null,bi=null,ml=!1;function td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ml||br==null||br!==Js(r)||(r=br,"selectionStart"in r&&Sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bi&&Oi(bi,r)||(bi=r,r=eo(fl,"onSelect"),0<r.length&&(t=new jc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=br)))}function xs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},pa={},rm={};hn&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function Lo(e){if(pa[e])return pa[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rm)return pa[e]=t[n];return e}var im=Lo("animationend"),sm=Lo("animationiteration"),om=Lo("animationstart"),am=Lo("transitionend"),lm=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,t){lm.set(e,t),ur(t,[e])}for(var fa=0;fa<nd.length;fa++){var ma=nd[fa],Jy=ma.toLowerCase(),Ky=ma[0].toUpperCase()+ma.slice(1);Un(Jy,"on"+Ky)}Un(im,"onAnimationEnd");Un(sm,"onAnimationIteration");Un(om,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(am,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));function rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jx(r,t,void 0,e),e.currentTarget=null}function cm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;rd(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;rd(i,l,u),o=c}}}if(Qs)throw e=cl,Qs=!1,cl=null,e}function Ae(e,t){var n=t[vl];n===void 0&&(n=t[vl]=new Set);var r=e+"__bubble";n.has(r)||(um(t,e,2,!1),n.add(r))}function ha(e,t,n){var r=0;t&&(r|=4),um(n,e,r,t)}var ys="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[ys]){e[ys]=!0,xf.forEach(function(n){n!=="selectionchange"&&(Qy.has(n)||ha(n,!1,e),ha(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ys]||(t[ys]=!0,ha("selectionchange",!1,t))}}function um(e,t,n,r){switch(Jf(t)){case 1:var i=cy;break;case 4:i=uy;break;default:i=bc}n=i.bind(null,t,n,e),i=void 0,!ll||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ga(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Yn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Af(function(){var u=o,d=gc(n),p=[];e:{var f=lm.get(e);if(f!==void 0){var m=jc,x=e;switch(e){case"keypress":if(Ms(n)===0)break e;case"keydown":case"keyup":m=Sy;break;case"focusin":x="focus",m=ca;break;case"focusout":x="blur",m=ca;break;case"beforeblur":case"afterblur":m=ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ey;break;case im:case sm:case om:m=gy;break;case am:m=Ty;break;case"scroll":m=dy;break;case"wheel":m=Ly;break;case"copy":case"cut":case"paste":m=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ju}var b=(t&4)!==0,T=!b&&e==="scroll",y=b?f!==null?f+"Capture":null:f;b=[];for(var g=u,h;g!==null;){h=g;var P=h.stateNode;if(h.tag===5&&P!==null&&(h=P,y!==null&&(P=Pi(g,y),P!=null&&b.push($i(g,P,h)))),T)break;g=g.return}0<b.length&&(f=new m(f,x,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==ol&&(x=n.relatedTarget||n.fromElement)&&(Yn(x)||x[gn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?Yn(x):null,x!==null&&(T=dr(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(b=Hu,P="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=Ju,P="onPointerLeave",y="onPointerEnter",g="pointer"),T=m==null?f:jr(m),h=x==null?f:jr(x),f=new b(P,g+"leave",m,n,d),f.target=T,f.relatedTarget=h,P=null,Yn(d)===u&&(b=new b(y,g+"enter",x,n,d),b.target=h,b.relatedTarget=T,P=b),T=P,m&&x)t:{for(b=m,y=x,g=0,h=b;h;h=fr(h))g++;for(h=0,P=y;P;P=fr(P))h++;for(;0<g-h;)b=fr(b),g--;for(;0<h-g;)y=fr(y),h--;for(;g--;){if(b===y||y!==null&&b===y.alternate)break t;b=fr(b),y=fr(y)}b=null}else b=null;m!==null&&id(p,f,m,b,!1),x!==null&&T!==null&&id(p,T,x,b,!0)}}e:{if(f=u?jr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Dy;else if(Gu(f))if(Zf)C=Vy;else{C=By;var _=Fy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Uy);if(C&&(C=C(e,u))){Xf(p,C,n,d);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&tl(f,"number",f.value)}switch(_=u?jr(u):window,e){case"focusin":(Gu(_)||_.contentEditable==="true")&&(br=_,fl=u,bi=null);break;case"focusout":bi=fl=br=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,td(p,n,d);break;case"selectionchange":if(qy)break;case"keydown":case"keyup":td(p,n,d)}var N;if(_c)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else vr?Gf(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Qf&&n.locale!=="ko"&&(vr||k!=="onCompositionStart"?k==="onCompositionEnd"&&vr&&(N=Kf()):(Cn=d,kc="value"in Cn?Cn.value:Cn.textContent,vr=!0)),_=eo(u,k),0<_.length&&(k=new qu(k,e,null,n,d),p.push({event:k,listeners:_}),N?k.data=N:(N=Yf(n),N!==null&&(k.data=N)))),(N=Ry?My(e,n):Oy(e,n))&&(u=eo(u,"onBeforeInput"),0<u.length&&(d=new qu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=N))}cm(p,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pi(e,n),o!=null&&r.unshift($i(e,o,i)),o=Pi(e,t),o!=null&&r.push($i(e,o,i))),e=e.return}return r}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Pi(n,o),c!=null&&a.unshift($i(n,c,l))):i||(c=Pi(n,o),c!=null&&a.push($i(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Gy=/\r\n?/g,Yy=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(Gy,`
`).replace(Yy,"")}function vs(e,t,n){if(t=sd(t),sd(e)!==t&&n)throw Error(Z(425))}function to(){}var hl=null,gl=null;function xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yl=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(ev)}:yl;function ev(e){setTimeout(function(){throw e})}function xa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ri(t)}function An(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),en="__reactFiber$"+Qr,Di="__reactProps$"+Qr,gn="__reactContainer$"+Qr,vl="__reactEvents$"+Qr,tv="__reactListeners$"+Qr,nv="__reactHandles$"+Qr;function Yn(e){var t=e[en];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gn]||n[en]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ad(e);e!==null;){if(n=e[en])return n;e=ad(e)}return t}e=n,n=e.parentNode}return null}function ts(e){return e=e[en]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Z(33))}function Ao(e){return e[Di]||null}var bl=[],wr=-1;function Vn(e){return{current:e}}function Re(e){0>wr||(e.current=bl[wr],bl[wr]=null,wr--)}function Pe(e,t){wr++,bl[wr]=e.current,e.current=t}var Fn={},ot=Vn(Fn),gt=Vn(!1),ir=Fn;function Dr(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xt(e){return e=e.childContextTypes,e!=null}function no(){Re(gt),Re(ot)}function ld(e,t,n){if(ot.current!==Fn)throw Error(Z(168));Pe(ot,t),Pe(gt,n)}function dm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Z(108,Fx(e)||"Unknown",i));return $e({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,ir=ot.current,Pe(ot,e),Pe(gt,gt.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(Z(169));n?(e=dm(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,Re(gt),Re(ot),Pe(ot,e)):Re(gt),Pe(gt,n)}var un=null,Ro=!1,ya=!1;function pm(e){un===null?un=[e]:un.push(e)}function rv(e){Ro=!0,pm(e)}function Wn(){if(!ya&&un!==null){ya=!0;var e=0,t=Ee;try{var n=un;for(Ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}un=null,Ro=!1}catch(i){throw un!==null&&(un=un.slice(e+1)),If(xc,Wn),i}finally{Ee=t,ya=!1}}return null}var _r=[],Sr=0,io=null,so=0,Rt=[],Mt=0,sr=null,dn=1,pn="";function Kn(e,t){_r[Sr++]=so,_r[Sr++]=io,io=e,so=t}function fm(e,t,n){Rt[Mt++]=dn,Rt[Mt++]=pn,Rt[Mt++]=sr,sr=e;var r=dn;e=pn;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var o=32-qt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,dn=1<<32-qt(t)+i|n<<i|r,pn=o+e}else dn=1<<o|n<<i|r,pn=e}function Cc(e){e.return!==null&&(Kn(e,1),fm(e,1,0))}function Nc(e){for(;e===io;)io=_r[--Sr],_r[Sr]=null,so=_r[--Sr],_r[Sr]=null;for(;e===sr;)sr=Rt[--Mt],Rt[Mt]=null,pn=Rt[--Mt],Rt[Mt]=null,dn=Rt[--Mt],Rt[Mt]=null}var Nt=null,_t=null,Me=!1,Ht=null;function mm(e,t){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ud(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Nt=e,_t=An(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Nt=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sr!==null?{id:dn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Nt=e,_t=null,!0):!1;default:return!1}}function kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(Me){var t=_t;if(t){var n=t;if(!ud(e,t)){if(kl(e))throw Error(Z(418));t=An(n.nextSibling);var r=Nt;t&&ud(e,t)?mm(r,n):(e.flags=e.flags&-4097|2,Me=!1,Nt=e)}}else{if(kl(e))throw Error(Z(418));e.flags=e.flags&-4097|2,Me=!1,Nt=e}}}function dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Nt=e}function bs(e){if(e!==Nt)return!1;if(!Me)return dd(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xl(e.type,e.memoizedProps)),t&&(t=_t)){if(kl(e))throw hm(),Error(Z(418));for(;t;)mm(e,t),t=An(t.nextSibling)}if(dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_t=An(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=Nt?An(e.stateNode.nextSibling):null;return!0}function hm(){for(var e=_t;e;)e=An(e.nextSibling)}function Fr(){_t=Nt=null,Me=!1}function Ec(e){Ht===null?Ht=[e]:Ht.push(e)}var iv=vn.ReactCurrentBatchConfig;function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Z(309));var r=n.stateNode}if(!r)throw Error(Z(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(Z(284));if(!n._owner)throw Error(Z(290,e))}return e}function ks(e,t){throw e=Object.prototype.toString.call(t),Error(Z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pd(e){var t=e._init;return t(e._payload)}function gm(e){function t(y,g){if(e){var h=y.deletions;h===null?(y.deletions=[g],y.flags|=16):h.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=In(y,g),y.index=0,y.sibling=null,y}function o(y,g,h){return y.index=h,e?(h=y.alternate,h!==null?(h=h.index,h<g?(y.flags|=2,g):h):(y.flags|=2,g)):(y.flags|=1048576,g)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,g,h,P){return g===null||g.tag!==6?(g=Sa(h,y.mode,P),g.return=y,g):(g=i(g,h),g.return=y,g)}function c(y,g,h,P){var C=h.type;return C===yr?d(y,g,h.props.children,P,h.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jn&&pd(C)===g.type)?(P=i(g,h.props),P.ref=ii(y,g,h),P.return=y,P):(P=Us(h.type,h.key,h.props,null,y.mode,P),P.ref=ii(y,g,h),P.return=y,P)}function u(y,g,h,P){return g===null||g.tag!==4||g.stateNode.containerInfo!==h.containerInfo||g.stateNode.implementation!==h.implementation?(g=Ca(h,y.mode,P),g.return=y,g):(g=i(g,h.children||[]),g.return=y,g)}function d(y,g,h,P,C){return g===null||g.tag!==7?(g=tr(h,y.mode,P,C),g.return=y,g):(g=i(g,h),g.return=y,g)}function p(y,g,h){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Sa(""+g,y.mode,h),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case us:return h=Us(g.type,g.key,g.props,null,y.mode,h),h.ref=ii(y,null,g),h.return=y,h;case xr:return g=Ca(g,y.mode,h),g.return=y,g;case jn:var P=g._init;return p(y,P(g._payload),h)}if(pi(g)||Zr(g))return g=tr(g,y.mode,h,null),g.return=y,g;ks(y,g)}return null}function f(y,g,h,P){var C=g!==null?g.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:l(y,g,""+h,P);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case us:return h.key===C?c(y,g,h,P):null;case xr:return h.key===C?u(y,g,h,P):null;case jn:return C=h._init,f(y,g,C(h._payload),P)}if(pi(h)||Zr(h))return C!==null?null:d(y,g,h,P,null);ks(y,h)}return null}function m(y,g,h,P,C){if(typeof P=="string"&&P!==""||typeof P=="number")return y=y.get(h)||null,l(g,y,""+P,C);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case us:return y=y.get(P.key===null?h:P.key)||null,c(g,y,P,C);case xr:return y=y.get(P.key===null?h:P.key)||null,u(g,y,P,C);case jn:var _=P._init;return m(y,g,h,_(P._payload),C)}if(pi(P)||Zr(P))return y=y.get(h)||null,d(g,y,P,C,null);ks(g,P)}return null}function x(y,g,h,P){for(var C=null,_=null,N=g,k=g=0,A=null;N!==null&&k<h.length;k++){N.index>k?(A=N,N=null):A=N.sibling;var S=f(y,N,h[k],P);if(S===null){N===null&&(N=A);break}e&&N&&S.alternate===null&&t(y,N),g=o(S,g,k),_===null?C=S:_.sibling=S,_=S,N=A}if(k===h.length)return n(y,N),Me&&Kn(y,k),C;if(N===null){for(;k<h.length;k++)N=p(y,h[k],P),N!==null&&(g=o(N,g,k),_===null?C=N:_.sibling=N,_=N);return Me&&Kn(y,k),C}for(N=r(y,N);k<h.length;k++)A=m(N,y,k,h[k],P),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?k:A.key),g=o(A,g,k),_===null?C=A:_.sibling=A,_=A);return e&&N.forEach(function(v){return t(y,v)}),Me&&Kn(y,k),C}function b(y,g,h,P){var C=Zr(h);if(typeof C!="function")throw Error(Z(150));if(h=C.call(h),h==null)throw Error(Z(151));for(var _=C=null,N=g,k=g=0,A=null,S=h.next();N!==null&&!S.done;k++,S=h.next()){N.index>k?(A=N,N=null):A=N.sibling;var v=f(y,N,S.value,P);if(v===null){N===null&&(N=A);break}e&&N&&v.alternate===null&&t(y,N),g=o(v,g,k),_===null?C=v:_.sibling=v,_=v,N=A}if(S.done)return n(y,N),Me&&Kn(y,k),C;if(N===null){for(;!S.done;k++,S=h.next())S=p(y,S.value,P),S!==null&&(g=o(S,g,k),_===null?C=S:_.sibling=S,_=S);return Me&&Kn(y,k),C}for(N=r(y,N);!S.done;k++,S=h.next())S=m(N,y,k,S.value,P),S!==null&&(e&&S.alternate!==null&&N.delete(S.key===null?k:S.key),g=o(S,g,k),_===null?C=S:_.sibling=S,_=S);return e&&N.forEach(function(E){return t(y,E)}),Me&&Kn(y,k),C}function T(y,g,h,P){if(typeof h=="object"&&h!==null&&h.type===yr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case us:e:{for(var C=h.key,_=g;_!==null;){if(_.key===C){if(C=h.type,C===yr){if(_.tag===7){n(y,_.sibling),g=i(_,h.props.children),g.return=y,y=g;break e}}else if(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===jn&&pd(C)===_.type){n(y,_.sibling),g=i(_,h.props),g.ref=ii(y,_,h),g.return=y,y=g;break e}n(y,_);break}else t(y,_);_=_.sibling}h.type===yr?(g=tr(h.props.children,y.mode,P,h.key),g.return=y,y=g):(P=Us(h.type,h.key,h.props,null,y.mode,P),P.ref=ii(y,g,h),P.return=y,y=P)}return a(y);case xr:e:{for(_=h.key;g!==null;){if(g.key===_)if(g.tag===4&&g.stateNode.containerInfo===h.containerInfo&&g.stateNode.implementation===h.implementation){n(y,g.sibling),g=i(g,h.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=Ca(h,y.mode,P),g.return=y,y=g}return a(y);case jn:return _=h._init,T(y,g,_(h._payload),P)}if(pi(h))return x(y,g,h,P);if(Zr(h))return b(y,g,h,P);ks(y,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,h),g.return=y,y=g):(n(y,g),g=Sa(h,y.mode,P),g.return=y,y=g),a(y)):n(y,g)}return T}var Br=gm(!0),xm=gm(!1),oo=Vn(null),ao=null,Cr=null,zc=null;function Tc(){zc=Cr=ao=null}function Pc(e){var t=oo.current;Re(oo),e._currentValue=t}function wl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Rr(e,t){ao=e,zc=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ht=!0),e.firstContext=null)}function Ft(e){var t=e._currentValue;if(zc!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(ao===null)throw Error(Z(308));Cr=e,ao.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Xn=null;function Lc(e){Xn===null?Xn=[e]:Xn.push(e)}function ym(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Lc(t)):(n.next=i.next,i.next=n),t.interleaved=n,xn(e,r)}function xn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wn=!1;function Ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,xn(e,n)}return i=r.interleaved,i===null?(t.next=t,Lc(r)):(t.next=i.next,i.next=t),r.interleaved=t,xn(e,n)}function Os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yc(e,n)}}function fd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lo(e,t,n,r){var i=e.updateQueue;wn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,d=u=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,b=l;switch(f=t,m=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){p=x.call(m,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,f=typeof x=="function"?x.call(m,p,f):x,f==null)break e;p=$e({},p,f);break e;case 2:wn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ar|=a,e.lanes=a,e.memoizedState=p}}function md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Z(191,i));i.call(r)}}}var ns={},sn=Vn(ns),Fi=Vn(ns),Bi=Vn(ns);function Zn(e){if(e===ns)throw Error(Z(174));return e}function Rc(e,t){switch(Pe(Bi,t),Pe(Fi,e),Pe(sn,ns),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rl(t,e)}Re(sn),Pe(sn,t)}function Ur(){Re(sn),Re(Fi),Re(Bi)}function bm(e){Zn(Bi.current);var t=Zn(sn.current),n=rl(t,e.type);t!==n&&(Pe(Fi,e),Pe(sn,n))}function Mc(e){Fi.current===e&&(Re(sn),Re(Fi))}var Oe=Vn(0);function co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var va=[];function Oc(){for(var e=0;e<va.length;e++)va[e]._workInProgressVersionPrimary=null;va.length=0}var Is=vn.ReactCurrentDispatcher,ba=vn.ReactCurrentBatchConfig,or=0,Ie=null,qe=null,Ye=null,uo=!1,ki=!1,Ui=0,sv=0;function rt(){throw Error(Z(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qt(e[n],t[n]))return!1;return!0}function $c(e,t,n,r,i,o){if(or=o,Ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Is.current=e===null||e.memoizedState===null?cv:uv,e=n(r,i),ki){o=0;do{if(ki=!1,Ui=0,25<=o)throw Error(Z(301));o+=1,Ye=qe=null,t.updateQueue=null,Is.current=dv,e=n(r,i)}while(ki)}if(Is.current=po,t=qe!==null&&qe.next!==null,or=0,Ye=qe=Ie=null,uo=!1,t)throw Error(Z(300));return e}function Dc(){var e=Ui!==0;return Ui=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ie.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Bt(){if(qe===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=Ye===null?Ie.memoizedState:Ye.next;if(t!==null)Ye=t,qe=e;else{if(e===null)throw Error(Z(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Ye===null?Ie.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Vi(e,t){return typeof t=="function"?t(e):t}function ka(e){var t=Bt(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var r=qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((or&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ie.lanes|=d,ar|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Qt(r,t.memoizedState)||(ht=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ie.lanes|=o,ar|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ja(e){var t=Bt(),n=t.queue;if(n===null)throw Error(Z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Qt(o,t.memoizedState)||(ht=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function km(){}function jm(e,t){var n=Ie,r=Bt(),i=t(),o=!Qt(r.memoizedState,i);if(o&&(r.memoizedState=i,ht=!0),r=r.queue,Fc(Sm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Wi(9,_m.bind(null,n,r,i,t),void 0,null),Xe===null)throw Error(Z(349));or&30||wm(n,t,i)}return i}function wm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _m(e,t,n,r){t.value=n,t.getSnapshot=r,Cm(t)&&Nm(e)}function Sm(e,t,n){return n(function(){Cm(t)&&Nm(e)})}function Cm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qt(e,n)}catch{return!0}}function Nm(e){var t=xn(e,1);t!==null&&Jt(t,e,1,-1)}function hd(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},t.queue=e,e=e.dispatch=lv.bind(null,Ie,e),[t.memoizedState,e]}function Wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ie.updateQueue,t===null?(t={lastEffect:null,stores:null},Ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Em(){return Bt().memoizedState}function $s(e,t,n,r){var i=Yt();Ie.flags|=e,i.memoizedState=Wi(1|t,n,void 0,r===void 0?null:r)}function Mo(e,t,n,r){var i=Bt();r=r===void 0?null:r;var o=void 0;if(qe!==null){var a=qe.memoizedState;if(o=a.destroy,r!==null&&Ic(r,a.deps)){i.memoizedState=Wi(t,n,o,r);return}}Ie.flags|=e,i.memoizedState=Wi(1|t,n,o,r)}function gd(e,t){return $s(8390656,8,e,t)}function Fc(e,t){return Mo(2048,8,e,t)}function zm(e,t){return Mo(4,2,e,t)}function Tm(e,t){return Mo(4,4,e,t)}function Pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lm(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4,4,Pm.bind(null,t,e),n)}function Bc(){}function Am(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rm(e,t){var n=Bt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ic(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mm(e,t,n){return or&21?(Qt(n,t)||(n=Ff(),Ie.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=n)}function ov(e,t){var n=Ee;Ee=n!==0&&4>n?n:4,e(!0);var r=ba.transition;ba.transition={};try{e(!1),t()}finally{Ee=n,ba.transition=r}}function Om(){return Bt().memoizedState}function av(e,t,n){var r=On(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Im(e))$m(t,n);else if(n=ym(e,t,n,r),n!==null){var i=ut();Jt(n,e,r,i),Dm(n,t,r)}}function lv(e,t,n){var r=On(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Im(e))$m(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Qt(l,a)){var c=t.interleaved;c===null?(i.next=i,Lc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=ym(e,t,i,r),n!==null&&(i=ut(),Jt(n,e,r,i),Dm(n,t,r))}}function Im(e){var t=e.alternate;return e===Ie||t!==null&&t===Ie}function $m(e,t){ki=uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yc(e,n)}}var po={readContext:Ft,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},cv={readContext:Ft,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Ft,useEffect:gd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$s(4194308,4,Pm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $s(4194308,4,e,t)},useInsertionEffect:function(e,t){return $s(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=av.bind(null,Ie,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:hd,useDebugValue:Bc,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=hd(!1),t=e[0];return e=ov.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ie,i=Yt();if(Me){if(n===void 0)throw Error(Z(407));n=n()}else{if(n=t(),Xe===null)throw Error(Z(349));or&30||wm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,gd(Sm.bind(null,r,o,e),[e]),r.flags|=2048,Wi(9,_m.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Yt(),t=Xe.identifierPrefix;if(Me){var n=pn,r=dn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uv={readContext:Ft,useCallback:Am,useContext:Ft,useEffect:Fc,useImperativeHandle:Lm,useInsertionEffect:zm,useLayoutEffect:Tm,useMemo:Rm,useReducer:ka,useRef:Em,useState:function(){return ka(Vi)},useDebugValue:Bc,useDeferredValue:function(e){var t=Bt();return Mm(t,qe.memoizedState,e)},useTransition:function(){var e=ka(Vi)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:km,useSyncExternalStore:jm,useId:Om,unstable_isNewReconciler:!1},dv={readContext:Ft,useCallback:Am,useContext:Ft,useEffect:Fc,useImperativeHandle:Lm,useInsertionEffect:zm,useLayoutEffect:Tm,useMemo:Rm,useReducer:ja,useRef:Em,useState:function(){return ja(Vi)},useDebugValue:Bc,useDeferredValue:function(e){var t=Bt();return qe===null?t.memoizedState=e:Mm(t,qe.memoizedState,e)},useTransition:function(){var e=ja(Vi)[0],t=Bt().memoizedState;return[e,t]},useMutableSource:km,useSyncExternalStore:jm,useId:Om,unstable_isNewReconciler:!1};function Vt(e,t){if(e&&e.defaultProps){t=$e({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Oo={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ut(),i=On(e),o=fn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Rn(e,o,i),t!==null&&(Jt(t,e,i,r),Os(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ut(),i=On(e),o=fn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Rn(e,o,i),t!==null&&(Jt(t,e,i,r),Os(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ut(),r=On(e),i=fn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,r),t!==null&&(Jt(t,e,r,n),Os(t,e,r))}};function xd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,o):!0}function Fm(e,t,n){var r=!1,i=Fn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ft(o):(i=xt(t)?ir:ot.current,r=t.contextTypes,o=(r=r!=null)?Dr(e,i):Fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Oo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Oo.enqueueReplaceState(t,t.state,null)}function Sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ac(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ft(o):(o=xt(t)?ir:ot.current,i.context=Dr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_l(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Oo.enqueueReplaceState(i,i.state,null),lo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t){try{var n="",r=t;do n+=Dx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pv=typeof WeakMap=="function"?WeakMap:Map;function Bm(e,t,n){n=fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mo||(mo=!0,Ol=r),Cl(e,t)},n}function Um(e,t,n){n=fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Cl(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function vd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cv.bind(null,e,t,n),t.then(e,e))}function bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=fn(-1,1),t.tag=2,Rn(n,t,1))),n.lanes|=1),e)}var fv=vn.ReactCurrentOwner,ht=!1;function ct(e,t,n,r){t.child=e===null?xm(t,null,n,r):Br(t,e.child,n,r)}function jd(e,t,n,r,i){n=n.render;var o=t.ref;return Rr(t,i),r=$c(e,t,n,r,o,i),n=Dc(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yn(e,t,i)):(Me&&n&&Cc(t),t.flags|=1,ct(e,t,r,i),t.child)}function wd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Qc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vm(e,t,o,r,i)):(e=Us(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(a,r)&&e.ref===t.ref)return yn(e,t,i)}return t.flags|=1,e=In(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Oi(o,r)&&e.ref===t.ref)if(ht=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ht=!0);else return t.lanes=e.lanes,yn(e,t,i)}return Nl(e,t,n,r,i)}function Wm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Er,jt),jt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pe(Er,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Pe(Er,jt),jt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Pe(Er,jt),jt|=r;return ct(e,t,i,n),t.child}function Hm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nl(e,t,n,r,i){var o=xt(n)?ir:ot.current;return o=Dr(t,o),Rr(t,i),n=$c(e,t,n,r,o,i),r=Dc(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yn(e,t,i)):(Me&&r&&Cc(t),t.flags|=1,ct(e,t,n,i),t.child)}function _d(e,t,n,r,i){if(xt(n)){var o=!0;ro(t)}else o=!1;if(Rr(t,i),t.stateNode===null)Ds(e,t),Fm(t,n,r),Sl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=xt(n)?ir:ot.current,u=Dr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&yd(t,a,r,u),wn=!1;var f=t.memoizedState;a.state=f,lo(t,r,a,i),c=t.memoizedState,l!==r||f!==c||gt.current||wn?(typeof d=="function"&&(_l(t,n,d,r),c=t.memoizedState),(l=wn||xd(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Vt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ft(c):(c=xt(n)?ir:ot.current,c=Dr(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&yd(t,a,r,c),wn=!1,f=t.memoizedState,a.state=f,lo(t,r,a,i);var x=t.memoizedState;l!==p||f!==x||gt.current||wn?(typeof m=="function"&&(_l(t,n,m,r),x=t.memoizedState),(u=wn||xd(t,n,u,r,f,x,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return El(e,t,n,r,o,i)}function El(e,t,n,r,i,o){Hm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&cd(t,n,!1),yn(e,t,o);r=t.stateNode,fv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Br(t,e.child,null,o),t.child=Br(t,null,l,o)):ct(e,t,l,o),t.memoizedState=r.state,i&&cd(t,n,!0),t.child}function qm(e){var t=e.stateNode;t.pendingContext?ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ld(e,t.context,!1),Rc(e,t.containerInfo)}function Sd(e,t,n,r,i){return Fr(),Ec(i),t.flags|=256,ct(e,t,n,r),t.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jm(e,t,n){var r=t.pendingProps,i=Oe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Pe(Oe,i&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Do(a,r,0,null),e=tr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Tl(n),t.memoizedState=zl,e):Uc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=In(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=In(l,o):(o=tr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Tl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=zl,r}return o=e.child,e=o.sibling,r=In(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uc(e,t){return t=Do({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function js(e,t,n,r){return r!==null&&Ec(r),Br(t,e.child,null,n),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=wa(Error(Z(422))),js(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Do({mode:"visible",children:r.children},i,0,null),o=tr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Br(t,e.child,null,a),t.child.memoizedState=Tl(a),t.memoizedState=zl,o);if(!(t.mode&1))return js(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(Z(419)),r=wa(o,r,void 0),js(e,t,a,r)}if(l=(a&e.childLanes)!==0,ht||l){if(r=Xe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xn(e,i),Jt(r,e,i,-1))}return Kc(),r=wa(Error(Z(421))),js(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Nv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,_t=An(i.nextSibling),Nt=t,Me=!0,Ht=null,e!==null&&(Rt[Mt++]=dn,Rt[Mt++]=pn,Rt[Mt++]=sr,dn=e.id,pn=e.overflow,sr=t),t=Uc(t,r.children),t.flags|=4096,t)}function Cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wl(e.return,t,n)}function _a(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Km(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ct(e,t,r.children,n),r=Oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,n,t);else if(e.tag===19)Cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Pe(Oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_a(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_a(t,!0,n,null,o);break;case"together":_a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ds(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Z(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hv(e,t,n){switch(t.tag){case 3:qm(t),Fr();break;case 5:bm(t);break;case 1:xt(t.type)&&ro(t);break;case 4:Rc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Pe(oo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Oe,Oe.current&1),t.flags|=128,null):n&t.child.childLanes?Jm(e,t,n):(Pe(Oe,Oe.current&1),e=yn(e,t,n),e!==null?e.sibling:null);Pe(Oe,Oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Km(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Oe,Oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Wm(e,t,n)}return yn(e,t,n)}var Qm,Pl,Gm,Ym;Qm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pl=function(){};Gm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Zn(sn.current);var o=null;switch(n){case"input":i=Za(e,i),r=Za(e,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=nl(e,i),r=nl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}il(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zi.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ae("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ym=function(e,t,n,r){n!==r&&(t.flags|=4)};function si(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function it(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gv(e,t,n){var r=t.pendingProps;switch(Nc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(t),null;case 1:return xt(t.type)&&no(),it(t),null;case 3:return r=t.stateNode,Ur(),Re(gt),Re(ot),Oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(bs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ht!==null&&(Dl(Ht),Ht=null))),Pl(e,t),it(t),null;case 5:Mc(t);var i=Zn(Bi.current);if(n=t.type,e!==null&&t.stateNode!=null)Gm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Z(166));return it(t),null}if(e=Zn(sn.current),bs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[en]=t,r[Di]=o,e=(t.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<mi.length;i++)Ae(mi[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":Mu(r,o),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ae("invalid",r);break;case"textarea":Iu(r,o),Ae("invalid",r)}il(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&vs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&vs(r.textContent,l,e),i=["children",""+l]):zi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ae("scroll",r)}switch(n){case"input":ds(r),Ou(r,o,!0);break;case"textarea":ds(r),$u(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=to)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[en]=t,e[Di]=r,Qm(e,t,!1,!1),t.stateNode=e;e:{switch(a=sl(n,r),n){case"dialog":Ae("cancel",e),Ae("close",e),i=r;break;case"iframe":case"object":case"embed":Ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<mi.length;i++)Ae(mi[i],e);i=r;break;case"source":Ae("error",e),i=r;break;case"img":case"image":case"link":Ae("error",e),Ae("load",e),i=r;break;case"details":Ae("toggle",e),i=r;break;case"input":Mu(e,r),i=Za(e,r),Ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Ae("invalid",e);break;case"textarea":Iu(e,r),i=nl(e,r),Ae("invalid",e);break;default:i=r}il(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Ef(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ti(e,c):typeof c=="number"&&Ti(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zi.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ae("scroll",e):c!=null&&pc(e,o,c,a))}switch(n){case"input":ds(e),Ou(e,r,!1);break;case"textarea":ds(e),$u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return it(t),null;case 6:if(e&&t.stateNode!=null)Ym(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Z(166));if(n=Zn(Bi.current),Zn(sn.current),bs(t)){if(r=t.stateNode,n=t.memoizedProps,r[en]=t,(o=r.nodeValue!==n)&&(e=Nt,e!==null))switch(e.tag){case 3:vs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=t,t.stateNode=r}return it(t),null;case 13:if(Re(Oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&_t!==null&&t.mode&1&&!(t.flags&128))hm(),Fr(),t.flags|=98560,o=!1;else if(o=bs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Z(317));o[en]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;it(t),o=!1}else Ht!==null&&(Dl(Ht),Ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Oe.current&1?Je===0&&(Je=3):Kc())),t.updateQueue!==null&&(t.flags|=4),it(t),null);case 4:return Ur(),Pl(e,t),e===null&&Ii(t.stateNode.containerInfo),it(t),null;case 10:return Pc(t.type._context),it(t),null;case 17:return xt(t.type)&&no(),it(t),null;case 19:if(Re(Oe),o=t.memoizedState,o===null)return it(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)si(o,!1);else{if(Je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=co(e),a!==null){for(t.flags|=128,si(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Pe(Oe,Oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&Be()>Wr&&(t.flags|=128,r=!0,si(o,!1),t.lanes=4194304)}else{if(!r)if(e=co(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),si(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Me)return it(t),null}else 2*Be()-o.renderingStartTime>Wr&&n!==1073741824&&(t.flags|=128,r=!0,si(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Be(),t.sibling=null,n=Oe.current,Pe(Oe,r?n&1|2:n&1),t):(it(t),null);case 22:case 23:return Jc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?jt&1073741824&&(it(t),t.subtreeFlags&6&&(t.flags|=8192)):it(t),null;case 24:return null;case 25:return null}throw Error(Z(156,t.tag))}function xv(e,t){switch(Nc(t),t.tag){case 1:return xt(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),Re(gt),Re(ot),Oc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mc(t),null;case 13:if(Re(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Z(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(Oe),null;case 4:return Ur(),null;case 10:return Pc(t.type._context),null;case 22:case 23:return Jc(),null;case 24:return null;default:return null}}var ws=!1,st=!1,yv=typeof WeakSet=="function"?WeakSet:Set,le=null;function Nr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(e,t,r)}else n.current=null}function Ll(e,t,n){try{n()}catch(r){De(e,t,r)}}var Nd=!1;function vv(e,t){if(hl=Xs,e=nm(),Sc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gl={focusedElem:e,selectionRange:n},Xs=!1,le=t;le!==null;)if(t=le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,le=e;else for(;le!==null;){t=le;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,T=x.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?b:Vt(t.type,b),T);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(P){De(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,le=e;break}le=t.return}return x=Nd,Nd=!1,x}function ji(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ll(t,n,o)}i=i.next}while(i!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xm(e){var t=e.alternate;t!==null&&(e.alternate=null,Xm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[en],delete t[Di],delete t[vl],delete t[tv],delete t[nv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zm(e){return e.tag===5||e.tag===3||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}var et=null,Wt=!1;function bn(e,t,n){for(n=n.child;n!==null;)eh(e,t,n),n=n.sibling}function eh(e,t,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 5:st||Nr(n,t);case 6:var r=et,i=Wt;et=null,bn(e,t,n),et=r,Wt=i,et!==null&&(Wt?(e=et,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):et.removeChild(n.stateNode));break;case 18:et!==null&&(Wt?(e=et,n=n.stateNode,e.nodeType===8?xa(e.parentNode,n):e.nodeType===1&&xa(e,n),Ri(e)):xa(et,n.stateNode));break;case 4:r=et,i=Wt,et=n.stateNode.containerInfo,Wt=!0,bn(e,t,n),et=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ll(n,t,a),i=i.next}while(i!==r)}bn(e,t,n);break;case 1:if(!st&&(Nr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,t,l)}bn(e,t,n);break;case 21:bn(e,t,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,bn(e,t,n),st=r):bn(e,t,n);break;default:bn(e,t,n)}}function zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yv),t.forEach(function(r){var i=Ev.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:et=l.stateNode,Wt=!1;break e;case 3:et=l.stateNode.containerInfo,Wt=!0;break e;case 4:et=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(et===null)throw Error(Z(160));eh(o,a,i),et=null,Wt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){De(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)th(t,e),t=t.sibling}function th(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),Gt(e),r&4){try{ji(3,e,e.return),Io(3,e)}catch(b){De(e,e.return,b)}try{ji(5,e,e.return)}catch(b){De(e,e.return,b)}}break;case 1:Ut(t,e),Gt(e),r&512&&n!==null&&Nr(n,n.return);break;case 5:if(Ut(t,e),Gt(e),r&512&&n!==null&&Nr(n,n.return),e.flags&32){var i=e.stateNode;try{Ti(i,"")}catch(b){De(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&wf(i,o),sl(l,a);var u=sl(l,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Ef(i,p):d==="dangerouslySetInnerHTML"?Cf(i,p):d==="children"?Ti(i,p):pc(i,d,p,u)}switch(l){case"input":el(i,o);break;case"textarea":_f(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Tr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Tr(i,!!o.multiple,o.defaultValue,!0):Tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Di]=o}catch(b){De(e,e.return,b)}}break;case 6:if(Ut(t,e),Gt(e),r&4){if(e.stateNode===null)throw Error(Z(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(b){De(e,e.return,b)}}break;case 3:if(Ut(t,e),Gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(b){De(e,e.return,b)}break;case 4:Ut(t,e),Gt(e);break;case 13:Ut(t,e),Gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Hc=Be())),r&4&&zd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(st=(u=st)||d,Ut(t,e),st=u):Ut(t,e),Gt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(le=e,d=e.child;d!==null;){for(p=le=d;le!==null;){switch(f=le,m=f.child,f.tag){case 0:case 11:case 14:case 15:ji(4,f,f.return);break;case 1:Nr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){De(r,n,b)}}break;case 5:Nr(f,f.return);break;case 22:if(f.memoizedState!==null){Pd(p);continue}}m!==null?(m.return=f,le=m):Pd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Nf("display",a))}catch(b){De(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){De(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(t,e),Gt(e),r&4&&zd(e);break;case 21:break;default:Ut(t,e),Gt(e)}}function Gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zm(n)){var r=n;break e}n=n.return}throw Error(Z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ti(i,""),r.flags&=-33);var o=Ed(e);Ml(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ed(e);Rl(e,l,a);break;default:throw Error(Z(161))}}catch(c){De(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bv(e,t,n){le=e,nh(e)}function nh(e,t,n){for(var r=(e.mode&1)!==0;le!==null;){var i=le,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ws;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||st;l=ws;var u=st;if(ws=a,(st=c)&&!u)for(le=i;le!==null;)a=le,c=a.child,a.tag===22&&a.memoizedState!==null?Ld(i):c!==null?(c.return=a,le=c):Ld(i);for(;o!==null;)le=o,nh(o),o=o.sibling;le=i,ws=l,st=u}Td(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,le=o):Td(e)}}function Td(e){for(;le!==null;){var t=le;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:st||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Vt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&md(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}md(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ri(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}st||t.flags&512&&Al(t)}catch(f){De(t,t.return,f)}}if(t===e){le=null;break}if(n=t.sibling,n!==null){n.return=t.return,le=n;break}le=t.return}}function Pd(e){for(;le!==null;){var t=le;if(t===e){le=null;break}var n=t.sibling;if(n!==null){n.return=t.return,le=n;break}le=t.return}}function Ld(e){for(;le!==null;){var t=le;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(c){De(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){De(t,i,c)}}var o=t.return;try{Al(t)}catch(c){De(t,o,c)}break;case 5:var a=t.return;try{Al(t)}catch(c){De(t,a,c)}}}catch(c){De(t,t.return,c)}if(t===e){le=null;break}var l=t.sibling;if(l!==null){l.return=t.return,le=l;break}le=t.return}}var kv=Math.ceil,fo=vn.ReactCurrentDispatcher,Vc=vn.ReactCurrentOwner,Dt=vn.ReactCurrentBatchConfig,_e=0,Xe=null,We=null,tt=0,jt=0,Er=Vn(0),Je=0,Hi=null,ar=0,$o=0,Wc=0,wi=null,mt=null,Hc=0,Wr=1/0,cn=null,mo=!1,Ol=null,Mn=null,_s=!1,Nn=null,ho=0,_i=0,Il=null,Fs=-1,Bs=0;function ut(){return _e&6?Be():Fs!==-1?Fs:Fs=Be()}function On(e){return e.mode&1?_e&2&&tt!==0?tt&-tt:iv.transition!==null?(Bs===0&&(Bs=Ff()),Bs):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Jf(e.type)),e):1}function Jt(e,t,n,r){if(50<_i)throw _i=0,Il=null,Error(Z(185));Zi(e,n,r),(!(_e&2)||e!==Xe)&&(e===Xe&&(!(_e&2)&&($o|=n),Je===4&&Sn(e,tt)),yt(e,r),n===1&&_e===0&&!(t.mode&1)&&(Wr=Be()+500,Ro&&Wn()))}function yt(e,t){var n=e.callbackNode;iy(e,t);var r=Ys(e,e===Xe?tt:0);if(r===0)n!==null&&Bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bu(n),t===1)e.tag===0?rv(Ad.bind(null,e)):pm(Ad.bind(null,e)),Zy(function(){!(_e&6)&&Wn()}),n=null;else{switch(Bf(r)){case 1:n=xc;break;case 4:n=$f;break;case 16:n=Gs;break;case 536870912:n=Df;break;default:n=Gs}n=uh(n,rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rh(e,t){if(Fs=-1,Bs=0,_e&6)throw Error(Z(327));var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var r=Ys(e,e===Xe?tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=go(e,r);else{t=r;var i=_e;_e|=2;var o=sh();(Xe!==e||tt!==t)&&(cn=null,Wr=Be()+500,er(e,t));do try{_v();break}catch(l){ih(e,l)}while(!0);Tc(),fo.current=o,_e=i,We!==null?t=0:(Xe=null,tt=0,t=Je)}if(t!==0){if(t===2&&(i=ul(e),i!==0&&(r=i,t=$l(e,i))),t===1)throw n=Hi,er(e,0),Sn(e,r),yt(e,Be()),n;if(t===6)Sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!jv(i)&&(t=go(e,r),t===2&&(o=ul(e),o!==0&&(r=o,t=$l(e,o))),t===1))throw n=Hi,er(e,0),Sn(e,r),yt(e,Be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Z(345));case 2:Qn(e,mt,cn);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=Hc+500-Be(),10<t)){if(Ys(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ut(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yl(Qn.bind(null,e,mt,cn),t);break}Qn(e,mt,cn);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-qt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kv(r/1960))-r,10<r){e.timeoutHandle=yl(Qn.bind(null,e,mt,cn),r);break}Qn(e,mt,cn);break;case 5:Qn(e,mt,cn);break;default:throw Error(Z(329))}}}return yt(e,Be()),e.callbackNode===n?rh.bind(null,e):null}function $l(e,t){var n=wi;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=go(e,t),e!==2&&(t=mt,mt=n,t!==null&&Dl(t)),e}function Dl(e){mt===null?mt=e:mt.push.apply(mt,e)}function jv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~Wc,t&=~$o,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qt(t),r=1<<n;e[n]=-1,t&=~r}}function Ad(e){if(_e&6)throw Error(Z(327));Mr();var t=Ys(e,0);if(!(t&1))return yt(e,Be()),null;var n=go(e,t);if(e.tag!==0&&n===2){var r=ul(e);r!==0&&(t=r,n=$l(e,r))}if(n===1)throw n=Hi,er(e,0),Sn(e,t),yt(e,Be()),n;if(n===6)throw Error(Z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qn(e,mt,cn),yt(e,Be()),null}function qc(e,t){var n=_e;_e|=1;try{return e(t)}finally{_e=n,_e===0&&(Wr=Be()+500,Ro&&Wn())}}function lr(e){Nn!==null&&Nn.tag===0&&!(_e&6)&&Mr();var t=_e;_e|=1;var n=Dt.transition,r=Ee;try{if(Dt.transition=null,Ee=1,e)return e()}finally{Ee=r,Dt.transition=n,_e=t,!(_e&6)&&Wn()}}function Jc(){jt=Er.current,Re(Er)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xy(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Nc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:Ur(),Re(gt),Re(ot),Oc();break;case 5:Mc(r);break;case 4:Ur();break;case 13:Re(Oe);break;case 19:Re(Oe);break;case 10:Pc(r.type._context);break;case 22:case 23:Jc()}n=n.return}if(Xe=e,We=e=In(e.current,null),tt=jt=t,Je=0,Hi=null,Wc=$o=ar=0,mt=wi=null,Xn!==null){for(t=0;t<Xn.length;t++)if(n=Xn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Xn=null}return e}function ih(e,t){do{var n=We;try{if(Tc(),Is.current=po,uo){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}uo=!1}if(or=0,Ye=qe=Ie=null,ki=!1,Ui=0,Vc.current=null,n===null||n.return===null){Je=1,Hi=t,We=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=tt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=bd(a);if(m!==null){m.flags&=-257,kd(m,a,l,o,t),m.mode&1&&vd(o,u,t),t=m,c=u;var x=t.updateQueue;if(x===null){var b=new Set;b.add(c),t.updateQueue=b}else x.add(c);break e}else{if(!(t&1)){vd(o,u,t),Kc();break e}c=Error(Z(426))}}else if(Me&&l.mode&1){var T=bd(a);if(T!==null){!(T.flags&65536)&&(T.flags|=256),kd(T,a,l,o,t),Ec(Vr(c,l));break e}}o=c=Vr(c,l),Je!==4&&(Je=2),wi===null?wi=[o]:wi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Bm(o,c,t);fd(o,y);break e;case 1:l=c;var g=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Mn===null||!Mn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=Um(o,l,t);fd(o,P);break e}}o=o.return}while(o!==null)}ah(n)}catch(C){t=C,We===n&&n!==null&&(We=n=n.return);continue}break}while(!0)}function sh(){var e=fo.current;return fo.current=po,e===null?po:e}function Kc(){(Je===0||Je===3||Je===2)&&(Je=4),Xe===null||!(ar&268435455)&&!($o&268435455)||Sn(Xe,tt)}function go(e,t){var n=_e;_e|=2;var r=sh();(Xe!==e||tt!==t)&&(cn=null,er(e,t));do try{wv();break}catch(i){ih(e,i)}while(!0);if(Tc(),_e=n,fo.current=r,We!==null)throw Error(Z(261));return Xe=null,tt=0,Je}function wv(){for(;We!==null;)oh(We)}function _v(){for(;We!==null&&!Qx();)oh(We)}function oh(e){var t=ch(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?ah(e):We=t,Vc.current=null}function ah(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xv(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Je=6,We=null;return}}else if(n=gv(n,t,jt),n!==null){We=n;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Je===0&&(Je=5)}function Qn(e,t,n){var r=Ee,i=Dt.transition;try{Dt.transition=null,Ee=1,Sv(e,t,n,r)}finally{Dt.transition=i,Ee=r}return null}function Sv(e,t,n,r){do Mr();while(Nn!==null);if(_e&6)throw Error(Z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sy(e,o),e===Xe&&(We=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_s||(_s=!0,uh(Gs,function(){return Mr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Dt.transition,Dt.transition=null;var a=Ee;Ee=1;var l=_e;_e|=4,Vc.current=null,vv(e,n),th(n,e),Hy(gl),Xs=!!hl,gl=hl=null,e.current=n,bv(n),Gx(),_e=l,Ee=a,Dt.transition=o}else e.current=n;if(_s&&(_s=!1,Nn=e,ho=i),o=e.pendingLanes,o===0&&(Mn=null),Zx(n.stateNode),yt(e,Be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mo)throw mo=!1,e=Ol,Ol=null,e;return ho&1&&e.tag!==0&&Mr(),o=e.pendingLanes,o&1?e===Il?_i++:(_i=0,Il=e):_i=0,Wn(),null}function Mr(){if(Nn!==null){var e=Bf(ho),t=Dt.transition,n=Ee;try{if(Dt.transition=null,Ee=16>e?16:e,Nn===null)var r=!1;else{if(e=Nn,Nn=null,ho=0,_e&6)throw Error(Z(331));var i=_e;for(_e|=4,le=e.current;le!==null;){var o=le,a=o.child;if(le.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(le=u;le!==null;){var d=le;switch(d.tag){case 0:case 11:case 15:ji(8,d,o)}var p=d.child;if(p!==null)p.return=d,le=p;else for(;le!==null;){d=le;var f=d.sibling,m=d.return;if(Xm(d),d===u){le=null;break}if(f!==null){f.return=m,le=f;break}le=m}}}var x=o.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var T=b.sibling;b.sibling=null,b=T}while(b!==null)}}le=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,le=a;else e:for(;le!==null;){if(o=le,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ji(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,le=y;break e}le=o.return}}var g=e.current;for(le=g;le!==null;){a=le;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,le=h;else e:for(a=g;le!==null;){if(l=le,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Io(9,l)}}catch(C){De(l,l.return,C)}if(l===a){le=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,le=P;break e}le=l.return}}if(_e=i,Wn(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(zo,e)}catch{}r=!0}return r}finally{Ee=n,Dt.transition=t}}return!1}function Rd(e,t,n){t=Vr(n,t),t=Bm(e,t,1),e=Rn(e,t,1),t=ut(),e!==null&&(Zi(e,1,t),yt(e,t))}function De(e,t,n){if(e.tag===3)Rd(e,e,n);else for(;t!==null;){if(t.tag===3){Rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=Vr(n,e),e=Um(t,e,1),t=Rn(t,e,1),e=ut(),t!==null&&(Zi(t,1,e),yt(t,e));break}}t=t.return}}function Cv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ut(),e.pingedLanes|=e.suspendedLanes&n,Xe===e&&(tt&n)===n&&(Je===4||Je===3&&(tt&130023424)===tt&&500>Be()-Hc?er(e,0):Wc|=n),yt(e,t)}function lh(e,t){t===0&&(e.mode&1?(t=ms,ms<<=1,!(ms&130023424)&&(ms=4194304)):t=1);var n=ut();e=xn(e,t),e!==null&&(Zi(e,t,n),yt(e,n))}function Nv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lh(e,n)}function Ev(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Z(314))}r!==null&&r.delete(t),lh(e,n)}var ch;ch=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||gt.current)ht=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ht=!1,hv(e,t,n);ht=!!(e.flags&131072)}else ht=!1,Me&&t.flags&1048576&&fm(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ds(e,t),e=t.pendingProps;var i=Dr(t,ot.current);Rr(t,n),i=$c(null,t,r,e,i,n);var o=Dc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(r)?(o=!0,ro(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ac(t),i.updater=Oo,t.stateNode=i,i._reactInternals=t,Sl(t,r,e,n),t=El(null,t,r,!0,o,n)):(t.tag=0,Me&&o&&Cc(t),ct(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ds(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Tv(r),e=Vt(r,e),i){case 0:t=Nl(null,t,r,e,n);break e;case 1:t=_d(null,t,r,e,n);break e;case 11:t=jd(null,t,r,e,n);break e;case 14:t=wd(null,t,r,Vt(r.type,e),n);break e}throw Error(Z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),Nl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),_d(e,t,r,i,n);case 3:e:{if(qm(t),e===null)throw Error(Z(387));r=t.pendingProps,o=t.memoizedState,i=o.element,vm(e,t),lo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Vr(Error(Z(423)),t),t=Sd(e,t,r,n,i);break e}else if(r!==i){i=Vr(Error(Z(424)),t),t=Sd(e,t,r,n,i);break e}else for(_t=An(t.stateNode.containerInfo.firstChild),Nt=t,Me=!0,Ht=null,n=xm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){t=yn(e,t,n);break e}ct(e,t,r,n)}t=t.child}return t;case 5:return bm(t),e===null&&jl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,xl(r,i)?a=null:o!==null&&xl(r,o)&&(t.flags|=32),Hm(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&jl(t),null;case 13:return Jm(e,t,n);case 4:return Rc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Br(t,null,r,n):ct(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),jd(e,t,r,i,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Pe(oo,r._currentValue),r._currentValue=a,o!==null)if(Qt(o.value,a)){if(o.children===i.children&&!gt.current){t=yn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=fn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),wl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(Z(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),wl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ct(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Rr(t,n),i=Ft(i),r=r(i),t.flags|=1,ct(e,t,r,n),t.child;case 14:return r=t.type,i=Vt(r,t.pendingProps),i=Vt(r.type,i),wd(e,t,r,i,n);case 15:return Vm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Vt(r,i),Ds(e,t),t.tag=1,xt(r)?(e=!0,ro(t)):e=!1,Rr(t,n),Fm(t,r,i),Sl(t,r,i,n),El(null,t,r,!0,e,n);case 19:return Km(e,t,n);case 22:return Wm(e,t,n)}throw Error(Z(156,t.tag))};function uh(e,t){return If(e,t)}function zv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,n,r){return new zv(e,t,n,r)}function Qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tv(e){if(typeof e=="function")return Qc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mc)return 11;if(e===hc)return 14}return 2}function In(e,t){var n=e.alternate;return n===null?(n=It(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Us(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Qc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case yr:return tr(n.children,i,o,t);case fc:a=8,i|=8;break;case Qa:return e=It(12,n,t,i|2),e.elementType=Qa,e.lanes=o,e;case Ga:return e=It(13,n,t,i),e.elementType=Ga,e.lanes=o,e;case Ya:return e=It(19,n,t,i),e.elementType=Ya,e.lanes=o,e;case bf:return Do(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yf:a=10;break e;case vf:a=9;break e;case mc:a=11;break e;case hc:a=14;break e;case jn:a=16,r=null;break e}throw Error(Z(130,e==null?e:typeof e,""))}return t=It(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function tr(e,t,n,r){return e=It(7,e,r,t),e.lanes=n,e}function Do(e,t,n,r){return e=It(22,e,r,t),e.elementType=bf,e.lanes=n,e.stateNode={isHidden:!1},e}function Sa(e,t,n){return e=It(6,e,null,t),e.lanes=n,e}function Ca(e,t,n){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gc(e,t,n,r,i,o,a,l,c){return e=new Pv(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=It(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ac(o),e}function Lv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dh(e){if(!e)return Fn;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(Z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Z(171))}if(e.tag===1){var n=e.type;if(xt(n))return dm(e,n,t)}return t}function ph(e,t,n,r,i,o,a,l,c){return e=Gc(n,r,!0,e,i,o,a,l,c),e.context=dh(null),n=e.current,r=ut(),i=On(n),o=fn(r,i),o.callback=t??null,Rn(n,o,i),e.current.lanes=i,Zi(e,i,r),yt(e,r),e}function Fo(e,t,n,r){var i=t.current,o=ut(),a=On(i);return n=dh(n),t.context===null?t.context=n:t.pendingContext=n,t=fn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rn(i,t,a),e!==null&&(Jt(e,i,a,o),Os(e,i,a)),a}function xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yc(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function Av(){return null}var fh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}Bo.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Z(409));Fo(e,t,null,null)};Bo.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){Fo(null,e,null,null)}),t[gn]=null}};function Bo(e){this._internalRoot=e}Bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_n.length&&t!==0&&t<_n[n].priority;n++);_n.splice(n,0,e),n===0&&qf(e)}};function Zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Od(){}function Rv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=xo(a);o.call(u)}}var a=ph(t,r,e,0,null,!1,!1,"",Od);return e._reactRootContainer=a,e[gn]=a.current,Ii(e.nodeType===8?e.parentNode:e),lr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=xo(c);l.call(u)}}var c=Gc(e,0,!1,null,null,!1,!1,"",Od);return e._reactRootContainer=c,e[gn]=c.current,Ii(e.nodeType===8?e.parentNode:e),lr(function(){Fo(t,c,n,r)}),c}function Vo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=xo(a);l.call(c)}}Fo(t,a,e,i)}else a=Rv(n,t,e,i,r);return xo(a)}Uf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=fi(t.pendingLanes);n!==0&&(yc(t,n|1),yt(t,Be()),!(_e&6)&&(Wr=Be()+500,Wn()))}break;case 13:lr(function(){var r=xn(e,1);if(r!==null){var i=ut();Jt(r,e,1,i)}}),Yc(e,1)}};vc=function(e){if(e.tag===13){var t=xn(e,134217728);if(t!==null){var n=ut();Jt(t,e,134217728,n)}Yc(e,134217728)}};Vf=function(e){if(e.tag===13){var t=On(e),n=xn(e,t);if(n!==null){var r=ut();Jt(n,e,t,r)}Yc(e,t)}};Wf=function(){return Ee};Hf=function(e,t){var n=Ee;try{return Ee=e,t()}finally{Ee=n}};al=function(e,t,n){switch(t){case"input":if(el(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ao(r);if(!i)throw Error(Z(90));jf(r),el(r,i)}}}break;case"textarea":_f(e,n);break;case"select":t=n.value,t!=null&&Tr(e,!!n.multiple,t,!1)}};Pf=qc;Lf=lr;var Mv={usingClientEntryPoint:!1,Events:[ts,jr,Ao,zf,Tf,qc]},oi={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ov={bundleType:oi.bundleType,version:oi.version,rendererPackageName:oi.rendererPackageName,rendererConfig:oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mf(e),e===null?null:e.stateNode},findFiberByHostInstance:oi.findFiberByHostInstance||Av,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ss.isDisabled&&Ss.supportsFiber)try{zo=Ss.inject(Ov),rn=Ss}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zc(t))throw Error(Z(200));return Lv(e,t,null,n)};zt.createRoot=function(e,t){if(!Zc(e))throw Error(Z(299));var n=!1,r="",i=fh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Gc(e,1,!1,null,null,n,!1,r,i),e[gn]=t.current,Ii(e.nodeType===8?e.parentNode:e),new Xc(t)};zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Z(188)):(e=Object.keys(e).join(","),Error(Z(268,e)));return e=Mf(t),e=e===null?null:e.stateNode,e};zt.flushSync=function(e){return lr(e)};zt.hydrate=function(e,t,n){if(!Uo(t))throw Error(Z(200));return Vo(null,e,t,!0,n)};zt.hydrateRoot=function(e,t,n){if(!Zc(e))throw Error(Z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=fh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ph(t,null,e,1,n??null,i,!1,o,a),e[gn]=t.current,Ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bo(t)};zt.render=function(e,t,n){if(!Uo(t))throw Error(Z(200));return Vo(null,e,t,!1,n)};zt.unmountComponentAtNode=function(e){if(!Uo(e))throw Error(Z(40));return e._reactRootContainer?(lr(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1};zt.unstable_batchedUpdates=qc;zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Uo(n))throw Error(Z(200));if(e==null||e._reactInternals===void 0)throw Error(Z(38));return Vo(e,t,n,!1,r)};zt.version="18.3.1-next-f1338f8080-20240426";function mh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mh)}catch(e){console.error(e)}}mh(),mf.exports=zt;var hh=mf.exports,Id=hh;Ja.createRoot=Id.createRoot,Ja.hydrateRoot=Id.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}var En;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(En||(En={}));const $d="popstate";function Iv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Fl("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:gh(i)}return Dv(t,n,null,e)}function He(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function eu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $v(){return Math.random().toString(36).substr(2,8)}function Dd(e,t){return{usr:e.state,key:e.key,idx:t}}function Fl(e,t,n,r){return n===void 0&&(n=null),qi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Gr(t):t,{state:n,key:t&&t.key||r||$v()})}function gh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=En.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(qi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=En.Pop;let T=d(),y=T==null?null:T-u;u=T,c&&c({action:l,location:b.location,delta:y})}function f(T,y){l=En.Push;let g=Fl(b.location,T,y);u=d()+1;let h=Dd(g,u),P=b.createHref(g);try{a.pushState(h,"",P)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(P)}o&&c&&c({action:l,location:b.location,delta:1})}function m(T,y){l=En.Replace;let g=Fl(b.location,T,y);u=d();let h=Dd(g,u),P=b.createHref(g);a.replaceState(h,"",P),o&&c&&c({action:l,location:b.location,delta:0})}function x(T){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof T=="string"?T:gh(T);return g=g.replace(/ $/,"%20"),He(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let b={get action(){return l},get location(){return e(i,a)},listen(T){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener($d,p),c=T,()=>{i.removeEventListener($d,p),c=null}},createHref(T){return t(i,T)},createURL:x,encodeLocation(T){let y=x(T);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:m,go(T){return a.go(T)}};return b}var Fd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fd||(Fd={}));function Fv(e,t,n){return n===void 0&&(n="/"),Bv(e,t,n)}function Bv(e,t,n,r){let i=typeof t=="string"?Gr(t):t,o=vh(i.pathname||"/",n);if(o==null)return null;let a=xh(e);Uv(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=e1(o);l=Yv(a[c],u)}return l}function xh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(He(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=nr([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(He(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),xh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Qv(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of yh(o.path))i(o,a,c)}),t}function yh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=yh(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Uv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vv=/^:[\w-]+$/,Wv=3,Hv=2,qv=1,Jv=10,Kv=-2,Bd=e=>e==="*";function Qv(e,t){let n=e.split("/"),r=n.length;return n.some(Bd)&&(r+=Kv),t&&(r+=Hv),n.filter(i=>!Bd(i)).reduce((i,o)=>i+(Vv.test(o)?Wv:o===""?qv:Jv),r)}function Gv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Yv(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Xv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:nr([o,p.pathname]),pathnameBase:s1(nr([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=nr([o,p.pathnameBase]))}return a}function Xv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let b=l[p]||"";a=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const x=l[p];return m&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Zv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),eu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function e1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return eu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function vh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const t1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,n1=e=>t1.test(e);function r1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Gr(e):e,o;if(n)if(n1(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),eu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Ud(n.substring(1),"/"):o=Ud(n,t)}else o=t;return{pathname:o,search:o1(r),hash:a1(i)}}function Ud(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Na(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bh(e,t){let n=i1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Gr(e):(i=qi({},e),He(!i.pathname||!i.pathname.includes("?"),Na("?","pathname","search",i)),He(!i.pathname||!i.pathname.includes("#"),Na("#","pathname","hash",i)),He(!i.search||!i.search.includes("#"),Na("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=r1(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const nr=e=>e.join("/").replace(/\/\/+/g,"/"),s1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),o1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,a1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function l1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const jh=["post","put","patch","delete"];new Set(jh);const c1=["get",...jh];new Set(c1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ji.apply(this,arguments)}const tu=w.createContext(null),u1=w.createContext(null),rs=w.createContext(null),Wo=w.createContext(null),Hn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),wh=w.createContext(null);function is(){return w.useContext(Wo)!=null}function nu(){return is()||He(!1),w.useContext(Wo).location}function _h(e){w.useContext(rs).static||w.useLayoutEffect(e)}function ru(){let{isDataRoute:e}=w.useContext(Hn);return e?_1():d1()}function d1(){is()||He(!1);let e=w.useContext(tu),{basename:t,future:n,navigator:r}=w.useContext(rs),{matches:i}=w.useContext(Hn),{pathname:o}=nu(),a=JSON.stringify(bh(i,n.v7_relativeSplatPath)),l=w.useRef(!1);return _h(()=>{l.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=kh(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:nr([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function p1(){let{matches:e}=w.useContext(Hn),t=e[e.length-1];return t?t.params:{}}function f1(e,t){return m1(e,t)}function m1(e,t,n,r){is()||He(!1);let{navigator:i}=w.useContext(rs),{matches:o}=w.useContext(Hn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=nu(),d;if(t){var p;let T=typeof t=="string"?Gr(t):t;c==="/"||(p=T.pathname)!=null&&p.startsWith(c)||He(!1),d=T}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let T=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(T.length).join("/")}let x=Fv(e,{pathname:m}),b=v1(x&&x.map(T=>Object.assign({},T,{params:Object.assign({},l,T.params),pathname:nr([c,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?c:nr([c,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),o,n,r);return t&&b?w.createElement(Wo.Provider,{value:{location:Ji({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:En.Pop}},b):b}function h1(){let e=w1(),t=l1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const g1=w.createElement(h1,null);class x1 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Hn.Provider,{value:this.props.routeContext},w.createElement(wh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function y1(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(tu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Hn.Provider,{value:t},r)}function v1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||He(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,x=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||x){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,x=!1,b=null,T=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||g1,c&&(u<0&&f===0?(S1("route-fallback"),x=!0,T=null):u===f&&(x=!0,T=p.route.hydrateFallbackElement||null)));let y=t.concat(a.slice(0,f+1)),g=()=>{let h;return m?h=b:x?h=T:p.route.Component?h=w.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,w.createElement(y1,{match:p,routeContext:{outlet:d,matches:y,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?w.createElement(x1,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var Sh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Sh||{}),Ch=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ch||{});function b1(e){let t=w.useContext(tu);return t||He(!1),t}function k1(e){let t=w.useContext(u1);return t||He(!1),t}function j1(e){let t=w.useContext(Hn);return t||He(!1),t}function Nh(e){let t=j1(),n=t.matches[t.matches.length-1];return n.route.id||He(!1),n.route.id}function w1(){var e;let t=w.useContext(wh),n=k1(),r=Nh();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _1(){let{router:e}=b1(Sh.UseNavigateStable),t=Nh(Ch.UseNavigateStable),n=w.useRef(!1);return _h(()=>{n.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ji({fromRouteId:t},o)))},[e,t])}const Vd={};function S1(e,t,n){Vd[e]||(Vd[e]=!0)}function C1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function N1(e){let{to:t,replace:n,state:r,relative:i}=e;is()||He(!1);let{future:o,static:a}=w.useContext(rs),{matches:l}=w.useContext(Hn),{pathname:c}=nu(),u=ru(),d=kh(t,bh(l,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function gr(e){He(!1)}function E1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=En.Pop,navigator:o,static:a=!1,future:l}=e;is()&&He(!1);let c=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:c,navigator:o,static:a,future:Ji({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=Gr(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:x="default"}=r,b=w.useMemo(()=>{let T=vh(d,c);return T==null?null:{location:{pathname:T,search:p,hash:f,state:m,key:x},navigationType:i}},[c,d,p,f,m,x,i]);return b==null?null:w.createElement(rs.Provider,{value:u},w.createElement(Wo.Provider,{children:n,value:b}))}function z1(e){let{children:t,location:n}=e;return f1(Bl(t),n)}new Promise(()=>{});function Bl(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let o=[...t,i];if(r.type===w.Fragment){n.push.apply(n,Bl(r.props.children,o));return}r.type!==gr&&He(!1),!r.props.index||!r.props.children||He(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Bl(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const T1="6";try{window.__reactRouterVersion=T1}catch{}const P1="startTransition",Wd=Cx[P1];function L1(e){let{basename:t,children:n,future:r,window:i}=e,o=w.useRef();o.current==null&&(o.current=Iv({window:i,v5Compat:!0}));let a=o.current,[l,c]=w.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=w.useCallback(p=>{u&&Wd?Wd(()=>c(p)):c(p)},[c,u]);return w.useLayoutEffect(()=>a.listen(d),[a,d]),w.useEffect(()=>C1(r),[r]),w.createElement(E1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hd||(Hd={}));var qd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qd||(qd={}));const A1={},Jd=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(x=>x(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(A1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},R1=e=>e?Jd(e):Jd;var Eh={exports:{}},zh={},Th={exports:{}},Ph={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=w;function M1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O1=typeof Object.is=="function"?Object.is:M1,I1=Hr.useState,$1=Hr.useEffect,D1=Hr.useLayoutEffect,F1=Hr.useDebugValue;function B1(e,t){var n=t(),r=I1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return D1(function(){i.value=n,i.getSnapshot=t,Ea(i)&&o({inst:i})},[e,n,t]),$1(function(){return Ea(i)&&o({inst:i}),e(function(){Ea(i)&&o({inst:i})})},[e]),F1(n),n}function Ea(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!O1(e,n)}catch{return!0}}function U1(e,t){return t()}var V1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?U1:B1;Ph.useSyncExternalStore=Hr.useSyncExternalStore!==void 0?Hr.useSyncExternalStore:V1;Th.exports=Ph;var W1=Th.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=w,H1=W1;function q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var J1=typeof Object.is=="function"?Object.is:q1,K1=H1.useSyncExternalStore,Q1=Ho.useRef,G1=Ho.useEffect,Y1=Ho.useMemo,X1=Ho.useDebugValue;zh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=Q1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Y1(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var x=a.value;if(i(x,m))return p=x}return p=m}if(x=p,J1(d,m))return x;var b=r(m);return i!==void 0&&i(x,b)?(d=m,x):(d=m,p=b)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=K1(e,o[0],o[1]);return G1(function(){a.hasValue=!0,a.value=l},[l]),X1(l),l};Eh.exports=zh;var Z1=Eh.exports;const e0=No(Z1),Lh={},{useDebugValue:t0}=Ct,{useSyncExternalStoreWithSelector:n0}=e0;let Kd=!1;const r0=e=>e;function i0(e,t=r0,n){(Lh?"production":void 0)!=="production"&&n&&!Kd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Kd=!0);const r=n0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return t0(r),r}const Qd=e=>{(Lh?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?R1(e):e,n=(r,i)=>i0(t,r,i);return Object.assign(n,t),n},s0=e=>e?Qd(e):Qd,at=s0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Ah="/api";async function Se(e,t){const n=await fetch(`${Ah}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Rh(){return(await Se("/projects")).projects}async function Mh(e){return(await Se(`/projects/${e}`)).project}async function Oh(e,t=""){return(await Se("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Ul(e,t){return(await Se(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Ih(e){await Se(`/projects/${e}`,{method:"DELETE"})}async function $h(e){return Se(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Vl(e){return(await Se(`/projects/${e}/sessions`)).sessions}async function Dh(e,t){return(await Se(`/projects/${e}/sessions/${t}/load`)).session}async function Fh(e){return(await Se(`/projects/${e}/yaml`)).yaml}async function Bh(e,t){return(await Se(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function iu(){return(await Se("/mcp-servers")).servers}async function Uh(){return(await Se("/builtin-tools")).tools}function Vh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Vs(e,t,n,r){return await Se(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Wh(e,t){return await Se(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Hh(e,t,n,r=[],i){return await Se(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function qh(e,t,n,r,i=[],o){return await Se(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function Wl(e){return await Se("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Jh(e,t){return Se(`/projects/${e}/skillsets/${t}/stats`)}async function Kh(e,t,n,r,i=500,o=50){return Se(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:o})})}async function Qh(e,t,n,r=500,i=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(i));const a=await fetch(`${Ah}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Gh(e,t,n,r=10,i=0){return Se(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Yh(e,t){return Se(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Xh(){return Se("/skillsets/embeddings-available")}const Ue={async get(e){return Se(e)},async post(e,t){return Se(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Se(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Se(e,{method:"DELETE"})}},o0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Kh,api:Ue,checkEmbeddingsAvailable:Xh,clearSkillSet:Yh,createProject:Oh,createRunWebSocket:Vh,deleteProject:Ih,fetchJSON:Se,generateAgentConfig:Wh,generateCallbackCode:qh,generatePrompt:Vs,generateToolCode:Hh,getBuiltinTools:Uh,getMcpServers:iu,getProject:Mh,getProjectYaml:Fh,getSkillSetStats:Jh,listProjectSessions:Vl,listProjects:Rh,loadSession:Dh,saveSessionToMemory:$h,searchSkillSet:Gh,testMcpServer:Wl,updateProject:Ul,updateProjectFromYaml:Bh,uploadSkillSetFile:Qh},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),fe=(e,t)=>{const n=w.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>w.createElement("svg",{ref:d,...a0,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${l0(e)}`,l].join(" "),...u},[...t.map(([p,f])=>w.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=fe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=fe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=fe("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=fe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=fe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=fe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=fe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=fe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=fe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=fe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=fe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=fe("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=fe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=fe("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=fe("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=fe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=fe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=fe("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=fe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=fe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=fe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=fe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=fe("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=fe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=fe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=fe("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=fe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=fe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=fe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=fe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=fe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=fe("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=fe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=fe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=fe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=fe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=fe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=fe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=fe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=fe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=fe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=fe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=fe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=fe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=fe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=fe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=fe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=fe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=fe("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=fe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=fe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=fe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function S0(){const e=ru(),[t,n]=w.useState([]),[r,i]=w.useState(!0),[o,a]=w.useState(!1),[l,c]=w.useState("");w.useEffect(()=>{u()},[]);async function u(){try{const f=await Rh();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Oh(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Ih(f),n(t.filter(x=>x.id!==f))}catch(x){console.error("Failed to delete project:",x)}}return s.jsxs("div",{className:"project-list",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"logo",children:[s.jsx(lu,{size:40,className:"logo-icon"}),s.jsx("h1",{className:"title",children:"ADK Playground"})]}),s.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),s.jsxs("div",{className:"content",children:[o?s.jsxs("div",{className:"create-form",children:[s.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),s.jsxs("button",{className:"btn btn-primary",onClick:d,children:[s.jsx(Ke,{size:18}),"Create"]}),s.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):s.jsx("div",{className:"create-form",children:s.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[s.jsx(Ke,{size:18}),"New Project"]})}),r?s.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Gd,{size:48,style:{marginBottom:16,opacity:.3}}),s.jsx("p",{children:"No projects yet. Create one to get started!"})]}):s.jsx("div",{className:"projects-grid",children:t.map(f=>s.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[s.jsxs("h3",{children:[s.jsx(Gd,{size:18}),f.name]}),s.jsx("p",{children:f.description||"No description"}),s.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:s.jsx(Fe,{size:16})})]},f.id))})]})]})}const Xd={},C0=5*60*1e3;function N0({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:o="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=w.useState(t||""),[u,d]=w.useState(!1),[p,f]=w.useState([]),[m,x]=w.useState(!1),[b,T]=w.useState(null),[y,g]=w.useState(-1),[h,P]=w.useState({top:0,left:0,width:0}),C=w.useRef(null),_=w.useRef(null);w.useEffect(()=>{if(u&&C.current){const B=C.current.getBoundingClientRect();P({top:B.bottom+window.scrollY+4,left:B.left+window.scrollX,width:B.width})}},[u]);const N=w.useCallback(async()=>{const B=Xd[a];if(B&&Date.now()-B.timestamp<C0){const $=[];Object.values(B.providers).forEach(ne=>{$.push(...ne.models)}),f($);return}x(!0),T(null);try{const $=new URLSearchParams;n&&$.append("provider",n),r&&$.append("api_base",r);const ne=`/models/${e}${$.toString()?"?"+$.toString():""}`,L=await Ue.get(ne);Xd[a]={providers:L.providers,timestamp:Date.now()};const D=[];Object.values(L.providers).forEach(M=>{M.models&&M.models.length>0&&D.push(...M.models)}),f(D)}catch($){T($.message||"Failed to fetch models")}finally{x(!1)}},[e,a,r,n]);w.useEffect(()=>{N()},[N]),w.useEffect(()=>{c(t||"")},[t]);const k=p.filter(B=>{const $=l.toLowerCase();return B.id.toLowerCase().includes($)||B.name.toLowerCase().includes($)||B.provider.toLowerCase().includes($)});w.useEffect(()=>{const B=$=>{_.current&&!_.current.contains($.target)&&C.current&&!C.current.contains($.target)&&d(!1)};return document.addEventListener("mousedown",B),()=>document.removeEventListener("mousedown",B)},[]);const A=B=>{if(!u){(B.key==="ArrowDown"||B.key==="Enter")&&(d(!0),B.preventDefault());return}switch(B.key){case"ArrowDown":g($=>Math.min($+1,k.length-1)),B.preventDefault();break;case"ArrowUp":g($=>Math.max($-1,0)),B.preventDefault();break;case"Enter":y>=0&&y<k.length&&S(k[y]),B.preventDefault();break;case"Escape":d(!1);break}},S=B=>{c(B.id),i(B.id,B.provider),d(!1)},v=B=>{c(B.target.value),d(!0),g(-1),i(B.target.value,n||"gemini")},E=B=>{switch(B.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"ollama":return"provider-ollama";default:return"provider-other"}},F=u?s.jsxs("div",{ref:_,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:h.top,left:h.left,width:h.width},children:[m&&s.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),b&&s.jsx("div",{className:"model-autocomplete-error",children:b}),!m&&!b&&k.length===0&&s.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!m&&k.length>0&&s.jsxs("div",{className:"model-autocomplete-list",children:[k.slice(0,50).map((B,$)=>s.jsxs("div",{className:`model-autocomplete-item ${$===y?"highlighted":""}`,onClick:()=>S(B),onMouseEnter:()=>g($),children:[s.jsx("span",{className:`provider-badge ${E(B.provider)}`,children:B.provider}),s.jsx("span",{className:"model-id",children:B.id}),B.context_window&&s.jsxs("span",{className:"model-context",title:`${B.context_window.toLocaleString()} token context`,children:[Math.round(B.context_window/1e3),"K"]}),B.supports_tools&&s.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),B.supports_vision&&s.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),B.supports_json_mode&&s.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${B.provider}-${B.id}`)),k.length>50&&s.jsxs("div",{className:"model-autocomplete-more",children:["+",k.length-50," more..."]})]})]}):null;return s.jsxs("div",{className:"model-autocomplete",children:[s.jsx("input",{ref:C,type:"text",value:l,onChange:v,onFocus:()=>d(!0),onKeyDown:A,placeholder:o,className:"model-autocomplete-input"}),F&&hh.createPortal(F,document.body)]})}const E0=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"litellm",label:"LiteLLM / Other"}];function z0(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function ug({projectId:e,values:t,onChange:n,className:r=""}){return s.jsxs("div",{className:`model-config-form ${r}`,children:[s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",style:{flex:1},children:[s.jsx("label",{children:"Provider"}),s.jsx("select",{value:t.provider||"gemini",onChange:i=>n({provider:i.target.value}),children:E0.map(i=>s.jsx("option",{value:i.value,children:i.label},i.value))})]}),s.jsxs("div",{className:"model-config-field",style:{flex:3},children:[s.jsx("label",{children:"Model"}),s.jsx(N0,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(i,o)=>{const a=z0(i,o);n({model_name:i,provider:a})},placeholder:"Search models..."})]}),t.provider==="litellm"&&s.jsxs("div",{className:"model-config-field",style:{flex:2},children:[s.jsx("label",{children:"API Base"}),s.jsx("input",{type:"text",value:t.api_base||"",onChange:i=>n({api_base:i.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Temperature"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:i=>n({temperature:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Max Tokens"}),s.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:i=>n({max_output_tokens:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top P"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:i=>n({top_p:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top K"}),s.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:i=>n({top_k:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]})]})]})}const T0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function P0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function L0(){const{project:e,updateProject:t}=at(),[n,r]=w.useState(null);if(!e)return null;const{app:i}=e;function o(v){t({app:{...i,...v}})}function a(v){if(v===""){r(null),o({name:v});return}P0(v)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:v})}function l(){const v={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,v]})}function c(v,E){const F=[...i.state_keys];F[v]={...F[v],...E},o({state_keys:F})}function u(v){o({state_keys:i.state_keys.filter((E,F)=>F!==v)})}function d(v="ReflectAndRetryToolPlugin"){let E;switch(v){case"ReflectAndRetryToolPlugin":E={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":E={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":E={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":E={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":E={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":E={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:E={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...i.plugins,E]})}function p(v,E){const F=[...i.plugins];F[v]={...F[v],...E},o({plugins:F})}function f(v){o({plugins:i.plugins.filter((E,F)=>F!==v)})}const m=i.models||[];function x(){const v=`model_${Date.now().toString(36)}`,E={id:v,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};o({models:[...m,E],default_model_id:m.length===0?v:i.default_model_id})}function b(v,E){const F=m.map(B=>B.id===v?{...B,...E}:B);o({models:F})}function T(v){var B;const E=m.filter($=>$.id!==v),F=i.default_model_id===v?((B=E[0])==null?void 0:B.id)||void 0:i.default_model_id;o({models:E,default_model_id:F})}function y(v){o({default_model_id:v})}const g=i.env_vars||{},[h,P]=w.useState({}),[C,_]=w.useState("");function N(v=""){const E=v||C.trim();!E||g[E]!==void 0||(o({env_vars:{...g,[E]:""}}),_(""))}function k(v,E){o({env_vars:{...g,[v]:E}})}function A(v){const E={...g};delete E[v],o({env_vars:E})}function S(v){P(E=>({...E,[v]:!E[v]}))}return s.jsxs("div",{className:"app-config",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(j0,{size:20}),"Basic Information"]})}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"App Name"}),s.jsx("input",{type:"text",value:i.name,onChange:v=>a(v.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Root Agent"}),s.jsxs("select",{value:i.root_agent_id||"",onChange:v=>o({root_agent_id:v.target.value||void 0}),children:[s.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(v=>s.jsx("option",{value:v.id,children:v.name},v.id))]})]}),s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:i.description,onChange:v=>o({description:v.target.value}),rows:2})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(mn,{size:20}),"Services"]}),s.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Session Service"}),s.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;o({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[E]||E+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System (JSON)"}),s.jsx("option",{value:"sqlite",children:"SQLite (local)"}),s.jsx("option",{value:"postgresql",children:"PostgreSQL"}),s.jsx("option",{value:"mysql",children:"MySQL"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:v=>o({session_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:v=>o({session_service_uri:"sqlite://"+v.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&s.jsx("input",{type:"text",value:i.session_service_uri,onChange:v=>o({session_service_uri:v.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:v=>{const E=i.session_service_uri.split("/");E[2]=v.target.value,o({session_service_uri:E.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:v=>{const E=i.session_service_uri.split("/");E[3]=v.target.value,o({session_service_uri:E.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:v=>{const E=i.session_service_uri.split("/");E[4]=v.target.value,o({session_service_uri:E.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Memory Service"}),s.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;o({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[E]||E+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),s.jsx("option",{value:"file",children:"File System (keyword matching)"}),s.jsx("option",{value:"rag",children:"Vertex AI RAG"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:v=>o({memory_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:v=>o({memory_service_uri:"rag://"+v.target.value}),placeholder:"rag-corpus-id or full resource path"}),s.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:v=>{const E=i.memory_service_uri.split("/");E[2]=v.target.value,o({memory_service_uri:E.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:v=>{const E=i.memory_service_uri.split("/");E[3]=v.target.value,o({memory_service_uri:E.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:v=>{const E=i.memory_service_uri.split("/");E[4]=v.target.value,o({memory_service_uri:E.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Artifact Service"}),s.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:v=>{const E=v.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[E]||E+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System"}),s.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:v=>o({artifact_service_uri:"file://"+v.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:v=>o({artifact_service_uri:"gs://"+v.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(ql,{size:20}),"Environment Variables"]})}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:T0.filter(v=>g[v.key]===void 0).map(v=>s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>N(v.key),title:v.description,children:[s.jsx(Ke,{size:12}),v.key]},v.key))}),Object.keys(g).length===0?s.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(g).map(([v,E])=>s.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[s.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[s.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:v}),s.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[s.jsx("input",{type:h[v]?"text":"password",value:E,onChange:F=>k(v,F.target.value),placeholder:"Enter value...",style:{flex:1}}),s.jsx("button",{className:"delete-item",onClick:()=>S(v),title:h[v]?"Hide value":"Show value",children:h[v]?s.jsx(d0,{size:16}):s.jsx(Ki,{size:16})})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>A(v),children:s.jsx(Fe,{size:16})})]},v)),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[s.jsx("input",{type:"text",value:C,onChange:v=>_(v.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:v=>v.key==="Enter"&&N()}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>N(),disabled:!C.trim(),children:[s.jsx(Ke,{size:14}),"Add Variable"]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(su,{size:20}),"Models"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[s.jsx(Ke,{size:14}),"Add Model"]})]}),m.length===0?s.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(v=>s.jsxs("div",{className:"model-card",children:[s.jsxs("div",{className:"model-card-header",children:[s.jsx("input",{type:"text",value:v.name,onChange:E=>b(v.id,{name:E.target.value}),placeholder:"Model name",className:"model-name-input"}),s.jsx("button",{className:`default-model-btn ${i.default_model_id===v.id?"is-default":""}`,onClick:()=>y(v.id),title:i.default_model_id===v.id?"Default model":"Set as default",children:s.jsx(og,{size:14,fill:i.default_model_id===v.id?"currentColor":"none"})}),s.jsx("button",{className:"delete-item",onClick:()=>T(v.id),children:s.jsx(Fe,{size:16})})]}),s.jsx("div",{className:"model-card-body",children:s.jsx(ug,{projectId:e.id,values:v,onChange:E=>b(v.id,E)})})]},v.id))]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(cg,{size:20}),"Advanced Options"]})}),s.jsxs("div",{className:"toggle-group",children:[s.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Event Compaction"}),s.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&s.jsx("input",{type:"number",value:i.compaction.max_events,onChange:v=>o({compaction:{...i.compaction,max_events:parseInt(v.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Context Caching"}),s.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&s.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:v=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(v.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Resumability"}),s.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(ou,{size:20}),"Session State Keys"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[s.jsx(Ke,{size:14}),"Add Key"]})]}),i.state_keys.length===0?s.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((v,E)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",children:[s.jsx("input",{type:"text",value:v.name,onChange:F=>c(E,{name:F.target.value}),placeholder:"Key name"}),s.jsxs("select",{value:v.type,onChange:F=>c(E,{type:F.target.value}),children:[s.jsx("option",{value:"string",children:"String"}),s.jsx("option",{value:"number",children:"Number"}),s.jsx("option",{value:"boolean",children:"Boolean"}),s.jsx("option",{value:"object",children:"Object"}),s.jsx("option",{value:"array",children:"Array"})]}),s.jsxs("select",{value:v.scope,onChange:F=>c(E,{scope:F.target.value}),children:[s.jsx("option",{value:"session",children:"Session"}),s.jsx("option",{value:"user",children:"User"}),s.jsx("option",{value:"app",children:"App"}),s.jsx("option",{value:"temp",children:"Temporary"})]}),s.jsx("input",{type:"text",value:v.description,onChange:F=>c(E,{description:F.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),s.jsx("button",{className:"delete-item",onClick:()=>u(E),children:s.jsx(Fe,{size:16})})]},E))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(zn,{size:20}),"Plugins"]}),s.jsx("div",{className:"plugin-add-dropdown",children:s.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:v=>{v.target.value&&(d(v.target.value),v.target.value="")},style:{paddingRight:8},children:[s.jsx("option",{value:"",children:"+ Add Plugin..."}),s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?s.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((v,E)=>s.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[s.jsxs("select",{value:v.type,onChange:F=>p(E,{type:F.target.value}),style:{flex:1},children:[s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),s.jsx("button",{className:"delete-item",onClick:()=>f(E),children:s.jsx(Fe,{size:16})})]}),v.type==="ReflectAndRetryToolPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Max Retries"}),s.jsx("input",{type:"number",min:"0",max:"10",value:v.max_retries??3,onChange:F=>p(E,{max_retries:parseInt(F.target.value)||0}),style:{width:70}})]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:v.throw_exception_if_retry_exceeded??!1,onChange:F=>p(E,{throw_exception_if_retry_exceeded:F.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),v.type==="ContextFilterPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),s.jsx("input",{type:"number",min:"1",max:"100",value:v.num_invocations_to_keep??5,onChange:F=>p(E,{num_invocations_to_keep:parseInt(F.target.value)||1}),style:{width:70}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),v.type==="LoggingPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),v.type==="GlobalInstructionPlugin"&&s.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),s.jsx("textarea",{value:v.global_instruction??"",onChange:F=>p(E,{global_instruction:F.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),v.type==="SaveFilesAsArtifactsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),v.type==="MultimodalToolResultsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},E))]})]})}const A0="modulepreload",R0=function(e){return"/"+e},Zd={},M0=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=R0(c),c in Zd)return;Zd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":A0,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function ep(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function O0(e){if(Array.isArray(e))return e}function I0(e,t,n){return(t=W0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function D0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function np(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tp(Object(n),!0).forEach(function(r){I0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F0(e,t){if(e==null)return{};var n,r,i=B0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function B0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function U0(e,t){return O0(e)||$0(e,t)||H0(e,t)||D0()}function V0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W0(e){var t=V0(e,"string");return typeof t=="symbol"?t:t+""}function H0(e,t){if(e){if(typeof e=="string")return ep(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ep(e,t):void 0}}function q0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ip(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rp(Object(n),!0).forEach(function(r){q0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function J0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function hi(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function wo(e){return{}.toString.call(e).includes("Object")}function K0(e){return!Object.keys(e).length}function Qi(e){return typeof e=="function"}function Q0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function G0(e,t){return wo(t)||$n("changeType"),Object.keys(t).some(function(n){return!Q0(e,n)})&&$n("changeField"),t}function Y0(e){Qi(e)||$n("selectorType")}function X0(e){Qi(e)||wo(e)||$n("handlerType"),wo(e)&&Object.values(e).some(function(t){return!Qi(t)})&&$n("handlersType")}function Z0(e){e||$n("initialIsRequired"),wo(e)||$n("initialType"),K0(e)&&$n("initialContent")}function eb(e,t){throw new Error(e[t]||e.default)}var tb={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},$n=hi(eb)(tb),Cs={changes:G0,selector:Y0,handler:X0,initial:Z0};function nb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Cs.initial(e),Cs.handler(t);var n={current:e},r=hi(sb)(n,t),i=hi(ib)(n),o=hi(Cs.changes)(e),a=hi(rb)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Cs.selector(u),u(n.current)}function c(u){J0(r,i,o,a)(u)}return[l,c]}function rb(e,t){return Qi(t)?t(e.current):t}function ib(e,t){return e.current=ip(ip({},e.current),t),t}function sb(e,t,n){return Qi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var ob={create:nb},ab={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function lb(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function cb(e){return{}.toString.call(e).includes("Object")}function ub(e){return e||sp("configIsRequired"),cb(e)||sp("configType"),e.urls?(db(),{paths:{vs:e.urls.monacoBase}}):e}function db(){console.warn(dg.deprecation)}function pb(e,t){throw new Error(e[t]||e.default)}var dg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},sp=lb(pb)(dg),fb={config:ub},mb=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function pg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],pg(e[n],t[n]))}),np(np({},e),t)}var hb={type:"cancelation",msg:"operation is manually canceled"};function Ta(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(hb):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var gb=["monaco"],xb=ob.create({config:ab,isInitialized:!1,resolve:null,reject:null,monaco:null}),fg=U0(xb,2),os=fg[0],Ko=fg[1];function yb(e){var t=fb.config(e),n=t.monaco,r=F0(t,gb);Ko(function(i){return{config:pg(i.config,r),monaco:n}})}function vb(){var e=os(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Ko({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Ta(Pa);if(window.monaco&&window.monaco.editor)return mg(window.monaco),e.resolve(window.monaco),Ta(Pa);mb(bb,jb)(wb)}return Ta(Pa)}function bb(e){return document.body.appendChild(e)}function kb(e){var t=document.createElement("script");return e&&(t.src=e),t}function jb(e){var t=os(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=kb("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function wb(){var e=os(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;mg(r),e.resolve(r)},function(n){e.reject(n)})}function mg(e){os().monaco||Ko({monaco:e})}function _b(){return os(function(e){var t=e.monaco;return t})}var Pa=new Promise(function(e,t){return Ko({resolve:e,reject:t})}),hg={config:yb,init:vb,__getMonacoInstance:_b},Sb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},La=Sb,Cb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Nb=Cb;function Eb({children:e}){return Ct.createElement("div",{style:Nb.container},e)}var zb=Eb,Tb=zb;function Pb({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return Ct.createElement("section",{style:{...La.wrapper,width:e,height:t},...a},!n&&Ct.createElement(Tb,null,r),Ct.createElement("div",{ref:i,style:{...La.fullWidth,...!n&&La.hide},className:o}))}var Lb=Pb,gg=w.memo(Lb);function Ab(e){w.useEffect(e,[])}var xg=Ab;function Rb(e,t,n=!0){let r=w.useRef(!0);w.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var wt=Rb;function Si(){}function zr(e,t,n,r){return Mb(e,r)||Ob(e,t,n,r)}function Mb(e,t){return e.editor.getModel(yg(e,t))}function Ob(e,t,n,r){return e.editor.createModel(t,n,r?yg(e,r):void 0)}function yg(e,t){return e.Uri.parse(t)}function Ib({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:x,wrapperProps:b={},beforeMount:T=Si,onMount:y=Si}){let[g,h]=w.useState(!1),[P,C]=w.useState(!0),_=w.useRef(null),N=w.useRef(null),k=w.useRef(null),A=w.useRef(y),S=w.useRef(T),v=w.useRef(!1);xg(()=>{let $=hg.init();return $.then(ne=>(N.current=ne)&&C(!1)).catch(ne=>(ne==null?void 0:ne.type)!=="cancelation"&&console.error("Monaco initialization: error:",ne)),()=>_.current?B():$.cancel()}),wt(()=>{if(_.current&&N.current){let $=_.current.getOriginalEditor(),ne=zr(N.current,e||"",r||n||"text",o||"");ne!==$.getModel()&&$.setModel(ne)}},[o],g),wt(()=>{if(_.current&&N.current){let $=_.current.getModifiedEditor(),ne=zr(N.current,t||"",i||n||"text",a||"");ne!==$.getModel()&&$.setModel(ne)}},[a],g),wt(()=>{let $=_.current.getModifiedEditor();$.getOption(N.current.editor.EditorOption.readOnly)?$.setValue(t||""):t!==$.getValue()&&($.executeEdits("",[{range:$.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),$.pushUndoStop())},[t],g),wt(()=>{var $,ne;(ne=($=_.current)==null?void 0:$.getModel())==null||ne.original.setValue(e||"")},[e],g),wt(()=>{let{original:$,modified:ne}=_.current.getModel();N.current.editor.setModelLanguage($,r||n||"text"),N.current.editor.setModelLanguage(ne,i||n||"text")},[n,r,i],g),wt(()=>{var $;($=N.current)==null||$.editor.setTheme(u)},[u],g),wt(()=>{var $;($=_.current)==null||$.updateOptions(p)},[p],g);let E=w.useCallback(()=>{var L;if(!N.current)return;S.current(N.current);let $=zr(N.current,e||"",r||n||"text",o||""),ne=zr(N.current,t||"",i||n||"text",a||"");(L=_.current)==null||L.setModel({original:$,modified:ne})},[n,t,i,e,r,o,a]),F=w.useCallback(()=>{var $;!v.current&&k.current&&(_.current=N.current.editor.createDiffEditor(k.current,{automaticLayout:!0,...p}),E(),($=N.current)==null||$.editor.setTheme(u),h(!0),v.current=!0)},[p,u,E]);w.useEffect(()=>{g&&A.current(_.current,N.current)},[g]),w.useEffect(()=>{!P&&!g&&F()},[P,g,F]);function B(){var ne,L,D,M;let $=(ne=_.current)==null?void 0:ne.getModel();l||((L=$==null?void 0:$.original)==null||L.dispose()),c||((D=$==null?void 0:$.modified)==null||D.dispose()),(M=_.current)==null||M.dispose()}return Ct.createElement(gg,{width:m,height:f,isEditorReady:g,loading:d,_ref:k,className:x,wrapperProps:b})}var $b=Ib;w.memo($b);function Db(e){let t=w.useRef();return w.useEffect(()=>{t.current=e},[e]),t.current}var Fb=Db,Ns=new Map;function Bb({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:x="100%",className:b,wrapperProps:T={},beforeMount:y=Si,onMount:g=Si,onChange:h,onValidate:P=Si}){let[C,_]=w.useState(!1),[N,k]=w.useState(!0),A=w.useRef(null),S=w.useRef(null),v=w.useRef(null),E=w.useRef(g),F=w.useRef(y),B=w.useRef(),$=w.useRef(r),ne=Fb(o),L=w.useRef(!1),D=w.useRef(!1);xg(()=>{let H=hg.init();return H.then(G=>(A.current=G)&&k(!1)).catch(G=>(G==null?void 0:G.type)!=="cancelation"&&console.error("Monaco initialization: error:",G)),()=>S.current?j():H.cancel()}),wt(()=>{var G,z,he,R;let H=zr(A.current,e||r||"",t||i||"",o||n||"");H!==((G=S.current)==null?void 0:G.getModel())&&(p&&Ns.set(ne,(z=S.current)==null?void 0:z.saveViewState()),(he=S.current)==null||he.setModel(H),p&&((R=S.current)==null||R.restoreViewState(Ns.get(o))))},[o],C),wt(()=>{var H;(H=S.current)==null||H.updateOptions(u)},[u],C),wt(()=>{!S.current||r===void 0||(S.current.getOption(A.current.editor.EditorOption.readOnly)?S.current.setValue(r):r!==S.current.getValue()&&(D.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),S.current.pushUndoStop(),D.current=!1))},[r],C),wt(()=>{var G,z;let H=(G=S.current)==null?void 0:G.getModel();H&&i&&((z=A.current)==null||z.editor.setModelLanguage(H,i))},[i],C),wt(()=>{var H;l!==void 0&&((H=S.current)==null||H.revealLine(l))},[l],C),wt(()=>{var H;(H=A.current)==null||H.editor.setTheme(a)},[a],C);let M=w.useCallback(()=>{var H;if(!(!v.current||!A.current)&&!L.current){F.current(A.current);let G=o||n,z=zr(A.current,r||e||"",t||i||"",G||"");S.current=(H=A.current)==null?void 0:H.editor.create(v.current,{model:z,automaticLayout:!0,...u},d),p&&S.current.restoreViewState(Ns.get(G)),A.current.editor.setTheme(a),l!==void 0&&S.current.revealLine(l),_(!0),L.current=!0}},[e,t,n,r,i,o,u,d,p,a,l]);w.useEffect(()=>{C&&E.current(S.current,A.current)},[C]),w.useEffect(()=>{!N&&!C&&M()},[N,C,M]),$.current=r,w.useEffect(()=>{var H,G;C&&h&&((H=B.current)==null||H.dispose(),B.current=(G=S.current)==null?void 0:G.onDidChangeModelContent(z=>{D.current||h(S.current.getValue(),z)}))},[C,h]),w.useEffect(()=>{if(C){let H=A.current.editor.onDidChangeMarkers(G=>{var he;let z=(he=S.current.getModel())==null?void 0:he.uri;if(z&&G.find(R=>R.path===z.path)){let R=A.current.editor.getModelMarkers({resource:z});P==null||P(R)}});return()=>{H==null||H.dispose()}}return()=>{}},[C,P]);function j(){var H,G;(H=B.current)==null||H.dispose(),f?p&&Ns.set(o,S.current.saveViewState()):(G=S.current.getModel())==null||G.dispose(),S.current.dispose()}return Ct.createElement(gg,{width:m,height:x,isEditorReady:C,loading:c,_ref:v,className:b,wrapperProps:T})}var Ub=Bb,Vb=w.memo(Ub),$t=Vb;function Wb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Hb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,qb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Jb={};function op(e,t){return(Jb.jsx?qb:Hb).test(e)}const Kb=/[ \t\n\f\r]/g;function Qb(e){return typeof e=="object"?e.type==="text"?ap(e.value):!1:ap(e)}function ap(e){return e.replace(Kb,"")===""}class as{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}as.prototype.normal={};as.prototype.property={};as.prototype.space=void 0;function vg(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new as(n,r,t)}function Kl(e){return e.toLowerCase()}class bt{constructor(t,n){this.attribute=n,this.property=t}}bt.prototype.attribute="";bt.prototype.booleanish=!1;bt.prototype.boolean=!1;bt.prototype.commaOrSpaceSeparated=!1;bt.prototype.commaSeparated=!1;bt.prototype.defined=!1;bt.prototype.mustUseProperty=!1;bt.prototype.number=!1;bt.prototype.overloadedBoolean=!1;bt.prototype.property="";bt.prototype.spaceSeparated=!1;bt.prototype.space=void 0;let Gb=0;const ye=pr(),Ve=pr(),Ql=pr(),ee=pr(),Te=pr(),Or=pr(),kt=pr();function pr(){return 2**++Gb}const Gl=Object.freeze(Object.defineProperty({__proto__:null,boolean:ye,booleanish:Ve,commaOrSpaceSeparated:kt,commaSeparated:Or,number:ee,overloadedBoolean:Ql,spaceSeparated:Te},Symbol.toStringTag,{value:"Module"})),Aa=Object.keys(Gl);class uu extends bt{constructor(t,n,r,i){let o=-1;if(super(t,n),lp(this,"space",i),typeof r=="number")for(;++o<Aa.length;){const a=Aa[o];lp(this,Aa[o],(r&Gl[a])===Gl[a])}}}uu.prototype.defined=!0;function lp(e,t,n){n&&(e[t]=n)}function Yr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new uu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Kl(r)]=r,n[Kl(o.attribute)]=r}return new as(t,n,e.space)}const bg=Yr({properties:{ariaActiveDescendant:null,ariaAtomic:Ve,ariaAutoComplete:null,ariaBusy:Ve,ariaChecked:Ve,ariaColCount:ee,ariaColIndex:ee,ariaColSpan:ee,ariaControls:Te,ariaCurrent:null,ariaDescribedBy:Te,ariaDetails:null,ariaDisabled:Ve,ariaDropEffect:Te,ariaErrorMessage:null,ariaExpanded:Ve,ariaFlowTo:Te,ariaGrabbed:Ve,ariaHasPopup:null,ariaHidden:Ve,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Te,ariaLevel:ee,ariaLive:null,ariaModal:Ve,ariaMultiLine:Ve,ariaMultiSelectable:Ve,ariaOrientation:null,ariaOwns:Te,ariaPlaceholder:null,ariaPosInSet:ee,ariaPressed:Ve,ariaReadOnly:Ve,ariaRelevant:null,ariaRequired:Ve,ariaRoleDescription:Te,ariaRowCount:ee,ariaRowIndex:ee,ariaRowSpan:ee,ariaSelected:Ve,ariaSetSize:ee,ariaSort:null,ariaValueMax:ee,ariaValueMin:ee,ariaValueNow:ee,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function kg(e,t){return t in e?e[t]:t}function jg(e,t){return kg(e,t.toLowerCase())}const Yb=Yr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Or,acceptCharset:Te,accessKey:Te,action:null,allow:null,allowFullScreen:ye,allowPaymentRequest:ye,allowUserMedia:ye,alt:null,as:null,async:ye,autoCapitalize:null,autoComplete:Te,autoFocus:ye,autoPlay:ye,blocking:Te,capture:null,charSet:null,checked:ye,cite:null,className:Te,cols:ee,colSpan:null,content:null,contentEditable:Ve,controls:ye,controlsList:Te,coords:ee|Or,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ye,defer:ye,dir:null,dirName:null,disabled:ye,download:Ql,draggable:Ve,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ye,formTarget:null,headers:Te,height:ee,hidden:Ql,high:ee,href:null,hrefLang:null,htmlFor:Te,httpEquiv:Te,id:null,imageSizes:null,imageSrcSet:null,inert:ye,inputMode:null,integrity:null,is:null,isMap:ye,itemId:null,itemProp:Te,itemRef:Te,itemScope:ye,itemType:Te,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ye,low:ee,manifest:null,max:null,maxLength:ee,media:null,method:null,min:null,minLength:ee,multiple:ye,muted:ye,name:null,nonce:null,noModule:ye,noValidate:ye,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ye,optimum:ee,pattern:null,ping:Te,placeholder:null,playsInline:ye,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ye,referrerPolicy:null,rel:Te,required:ye,reversed:ye,rows:ee,rowSpan:ee,sandbox:Te,scope:null,scoped:ye,seamless:ye,selected:ye,shadowRootClonable:ye,shadowRootDelegatesFocus:ye,shadowRootMode:null,shape:null,size:ee,sizes:null,slot:null,span:ee,spellCheck:Ve,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ee,step:null,style:null,tabIndex:ee,target:null,title:null,translate:null,type:null,typeMustMatch:ye,useMap:null,value:Ve,width:ee,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Te,axis:null,background:null,bgColor:null,border:ee,borderColor:null,bottomMargin:ee,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ye,declare:ye,event:null,face:null,frame:null,frameBorder:null,hSpace:ee,leftMargin:ee,link:null,longDesc:null,lowSrc:null,marginHeight:ee,marginWidth:ee,noResize:ye,noHref:ye,noShade:ye,noWrap:ye,object:null,profile:null,prompt:null,rev:null,rightMargin:ee,rules:null,scheme:null,scrolling:Ve,standby:null,summary:null,text:null,topMargin:ee,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ee,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ye,disableRemotePlayback:ye,prefix:null,property:null,results:ee,security:null,unselectable:null},space:"html",transform:jg}),Xb=Yr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:kt,accentHeight:ee,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ee,amplitude:ee,arabicForm:null,ascent:ee,attributeName:null,attributeType:null,azimuth:ee,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ee,by:null,calcMode:null,capHeight:ee,className:Te,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ee,diffuseConstant:ee,direction:null,display:null,dur:null,divisor:ee,dominantBaseline:null,download:ye,dx:null,dy:null,edgeMode:null,editable:null,elevation:ee,enableBackground:null,end:null,event:null,exponent:ee,externalResourcesRequired:null,fill:null,fillOpacity:ee,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Or,g2:Or,glyphName:Or,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ee,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ee,horizOriginX:ee,horizOriginY:ee,id:null,ideographic:ee,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ee,k:ee,k1:ee,k2:ee,k3:ee,k4:ee,kernelMatrix:kt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ee,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ee,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ee,overlineThickness:ee,paintOrder:null,panose1:null,path:null,pathLength:ee,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Te,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ee,pointsAtY:ee,pointsAtZ:ee,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:kt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:kt,rev:kt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:kt,requiredFeatures:kt,requiredFonts:kt,requiredFormats:kt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ee,specularExponent:ee,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ee,strikethroughThickness:ee,string:null,stroke:null,strokeDashArray:kt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ee,strokeOpacity:ee,strokeWidth:null,style:null,surfaceScale:ee,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:kt,tabIndex:ee,tableValues:null,target:null,targetX:ee,targetY:ee,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:kt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ee,underlineThickness:ee,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ee,values:null,vAlphabetic:ee,vMathematical:ee,vectorEffect:null,vHanging:ee,vIdeographic:ee,version:null,vertAdvY:ee,vertOriginX:ee,vertOriginY:ee,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ee,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:kg}),wg=Yr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),_g=Yr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:jg}),Sg=Yr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Zb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ek=/[A-Z]/g,cp=/-[a-z]/g,tk=/^data[-\w.:]+$/i;function nk(e,t){const n=Kl(t);let r=t,i=bt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&tk.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(cp,ik);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!cp.test(o)){let a=o.replace(ek,rk);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=uu}return new i(r,t)}function rk(e){return"-"+e.toLowerCase()}function ik(e){return e.charAt(1).toUpperCase()}const sk=vg([bg,Yb,wg,_g,Sg],"html"),du=vg([bg,Xb,wg,_g,Sg],"svg");function ok(e){return e.join(" ").trim()}var pu={},up=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,ak=/\n/g,lk=/^\s*/,ck=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,uk=/^:\s*/,dk=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,pk=/^[;\s]*/,fk=/^\s+|\s+$/g,mk=`
`,dp="/",pp="*",Gn="",hk="comment",gk="declaration";function xk(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(x){var b=x.match(ak);b&&(n+=b.length);var T=x.lastIndexOf(mk);r=~T?x.length-T:r+x.length}function o(){var x={line:n,column:r};return function(b){return b.position=new a(x),u(),b}}function a(x){this.start=x,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(x){var b=new Error(t.source+":"+n+":"+r+": "+x);if(b.reason=x,b.filename=t.source,b.line=n,b.column=r,b.source=e,!t.silent)throw b}function c(x){var b=x.exec(e);if(b){var T=b[0];return i(T),e=e.slice(T.length),b}}function u(){c(lk)}function d(x){var b;for(x=x||[];b=p();)b!==!1&&x.push(b);return x}function p(){var x=o();if(!(dp!=e.charAt(0)||pp!=e.charAt(1))){for(var b=2;Gn!=e.charAt(b)&&(pp!=e.charAt(b)||dp!=e.charAt(b+1));)++b;if(b+=2,Gn===e.charAt(b-1))return l("End of comment missing");var T=e.slice(2,b-2);return r+=2,i(T),e=e.slice(b),r+=2,x({type:hk,comment:T})}}function f(){var x=o(),b=c(ck);if(b){if(p(),!c(uk))return l("property missing ':'");var T=c(dk),y=x({type:gk,property:fp(b[0].replace(up,Gn)),value:T?fp(T[0].replace(up,Gn)):Gn});return c(pk),y}}function m(){var x=[];d(x);for(var b;b=f();)b!==!1&&(x.push(b),d(x));return x}return u(),m()}function fp(e){return e?e.replace(fk,Gn):Gn}var yk=xk,vk=qs&&qs.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pu,"__esModule",{value:!0});pu.default=kk;const bk=vk(yk);function kk(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,bk.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l)}),n}var Qo={};Object.defineProperty(Qo,"__esModule",{value:!0});Qo.camelCase=void 0;var jk=/^--[a-zA-Z0-9_-]+$/,wk=/-([a-z])/g,_k=/^[^-]+$/,Sk=/^-(webkit|moz|ms|o|khtml)-/,Ck=/^-(ms)-/,Nk=function(e){return!e||_k.test(e)||jk.test(e)},Ek=function(e,t){return t.toUpperCase()},mp=function(e,t){return"".concat(t,"-")},zk=function(e,t){return t===void 0&&(t={}),Nk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Ck,mp):e=e.replace(Sk,mp),e.replace(wk,Ek))};Qo.camelCase=zk;var Tk=qs&&qs.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Pk=Tk(pu),Lk=Qo;function Yl(e,t){var n={};return!e||typeof e!="string"||(0,Pk.default)(e,function(r,i){r&&i&&(n[(0,Lk.camelCase)(r,t)]=i)}),n}Yl.default=Yl;var Ak=Yl;const Rk=No(Ak),Cg=Ng("end"),fu=Ng("start");function Ng(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Mk(e){const t=fu(e),n=Cg(e);if(t&&n)return{start:t,end:n}}function Ci(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?hp(e.position):"start"in e||"end"in e?hp(e):"line"in e||"column"in e?Xl(e):""}function Xl(e){return gp(e&&e.line)+":"+gp(e&&e.column)}function hp(e){return Xl(e&&e.start)+"-"+Xl(e&&e.end)}function gp(e){return e&&typeof e=="number"?e:1}class lt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Ci(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}lt.prototype.file="";lt.prototype.name="";lt.prototype.reason="";lt.prototype.message="";lt.prototype.stack="";lt.prototype.column=void 0;lt.prototype.line=void 0;lt.prototype.ancestors=void 0;lt.prototype.cause=void 0;lt.prototype.fatal=void 0;lt.prototype.place=void 0;lt.prototype.ruleId=void 0;lt.prototype.source=void 0;const mu={}.hasOwnProperty,Ok=new Map,Ik=/[A-Z]/g,$k=new Set(["table","tbody","thead","tfoot","tr"]),Dk=new Set(["td","th"]),Eg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Fk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Kk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Jk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?du:sk,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=zg(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function zg(e,t,n){if(t.type==="element")return Bk(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Uk(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Wk(e,t,n);if(t.type==="mdxjsEsm")return Vk(e,t);if(t.type==="root")return Hk(e,t,n);if(t.type==="text")return qk(e,t)}function Bk(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=du,e.schema=i),e.ancestors.push(t);const o=Pg(e,t.tagName,!1),a=Qk(e,t);let l=gu(e,t);return $k.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Qb(c):!0})),Tg(e,a,o,t),hu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Uk(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Gi(e,t.position)}function Vk(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Gi(e,t.position)}function Wk(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=du,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Pg(e,t.name,!0),a=Gk(e,t),l=gu(e,t);return Tg(e,a,o,t),hu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Hk(e,t,n){const r={};return hu(r,gu(e,t)),e.create(t,e.Fragment,r,n)}function qk(e,t){return t.value}function Tg(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function hu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Jk(e,t,n){return r;function r(i,o,a,l){const u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function Kk(e,t){return n;function n(r,i,o,a){const l=Array.isArray(o.children),c=fu(r);return t(i,o,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Qk(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&mu.call(t.properties,i)){const o=Yk(e,i,t.properties[i]);if(o){const[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Dk.has(t.tagName)?r=l:n[a]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Gk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Gi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else Gi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function gu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Ok;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=zg(e,o,a);l!==void 0&&n.push(l)}return n}function Yk(e,t,n){const r=nk(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Wb(n):ok(n)),r.property==="style"){let i=typeof n=="object"?n:Xk(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Zk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Zb[r.property]||r.property:r.attribute,n]}}function Xk(e,t){try{return Rk(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new lt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Eg+"#cannot-parse-style-attribute",i}}function Pg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const l=op(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=a}else r=op(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return mu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Gi(e)}function Gi(e,t){const n=new lt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Eg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Zk(e){const t={};let n;for(n in e)mu.call(e,n)&&(t[ej(n)]=e[n]);return t}function ej(e){let t=e.replace(Ik,tj);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function tj(e){return"-"+e.toLowerCase()}const Ra={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},nj={};function rj(e,t){const n=nj,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Lg(e,r,i)}function Lg(e,t,n){if(ij(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return xp(e.children,t,n)}return Array.isArray(e)?xp(e,t,n):""}function xp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Lg(e[i],t,n);return r.join("")}function ij(e){return!!(e&&typeof e=="object")}const yp=document.createElement("i");function xu(e){const t="&"+e+";";yp.innerHTML=t;const n=yp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function an(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function Ot(e,t){return e.length>0?(an(e,e.length,0,t),e):t}const vp={}.hasOwnProperty;function sj(e){const t={};let n=-1;for(;++n<e.length;)oj(t,e[n]);return t}function oj(e,t){let n;for(n in t){const i=(vp.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){vp.call(i,a)||(i[a]=[]);const l=o[a];aj(i[a],Array.isArray(l)?l:l?[l]:[])}}}function aj(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);an(e,0,0,r)}function Ag(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Ir(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const tn=qn(/[A-Za-z]/),St=qn(/[\dA-Za-z]/),lj=qn(/[#-'*+\--9=?A-Z^-~]/);function Zl(e){return e!==null&&(e<32||e===127)}const ec=qn(/\d/),cj=qn(/[\dA-Fa-f]/),uj=qn(/[!-/:-@[-`{-~]/);function xe(e){return e!==null&&e<-2}function vt(e){return e!==null&&(e<0||e===32)}function Ce(e){return e===-2||e===-1||e===32}const dj=qn(new RegExp("\\p{P}|\\p{S}","u")),pj=qn(/\s/);function qn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Xr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&St(e.charCodeAt(n+1))&&St(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Le(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return Ce(c)?(e.enter(n),l(c)):t(c)}function l(c){return Ce(c)&&o++<i?(e.consume(c),l):(e.exit(n),t(c))}}const fj={tokenize:mj};function mj(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Le(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return xe(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}const hj={tokenize:gj},bp={tokenize:xj};function gj(e){const t=this,n=[];let r=0,i,o,a;return l;function l(h){if(r<n.length){const P=n[r];return t.containerState=P[1],e.attempt(P[0].continuation,c,u)(h)}return u(h)}function c(h){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&g();const P=t.events.length;let C=P,_;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){_=t.events[C][1].end;break}y(r);let N=P;for(;N<t.events.length;)t.events[N][1].end={..._},N++;return an(t.events,C+1,0,t.events.slice(P)),t.events.length=N,u(h)}return l(h)}function u(h){if(r===n.length){if(!i)return f(h);if(i.currentConstruct&&i.currentConstruct.concrete)return x(h);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(bp,d,p)(h)}function d(h){return i&&g(),y(r),f(h)}function p(h){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,x(h)}function f(h){return t.containerState={},e.attempt(bp,m,x)(h)}function m(h){return r++,n.push([t.currentConstruct,t.containerState]),f(h)}function x(h){if(h===null){i&&g(),y(0),e.consume(h);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),b(h)}function b(h){if(h===null){T(e.exit("chunkFlow"),!0),y(0),e.consume(h);return}return xe(h)?(e.consume(h),T(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(h),b)}function T(h,P){const C=t.sliceStream(h);if(P&&C.push(null),h.previous=o,o&&(o.next=h),o=h,i.defineSkip(h.start),i.write(C),t.parser.lazy[h.start.line]){let _=i.events.length;for(;_--;)if(i.events[_][1].start.offset<a&&(!i.events[_][1].end||i.events[_][1].end.offset>a))return;const N=t.events.length;let k=N,A,S;for(;k--;)if(t.events[k][0]==="exit"&&t.events[k][1].type==="chunkFlow"){if(A){S=t.events[k][1].end;break}A=!0}for(y(r),_=N;_<t.events.length;)t.events[_][1].end={...S},_++;an(t.events,k+1,0,t.events.slice(N)),t.events.length=_}}function y(h){let P=n.length;for(;P-- >h;){const C=n[P];t.containerState=C[1],C[0].exit.call(t,e)}n.length=h}function g(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function xj(e,t,n){return Le(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function kp(e){if(e===null||vt(e)||pj(e))return 1;if(dj(e))return 2}function yu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const tc={name:"attention",resolveAll:yj,tokenize:vj};function yj(e,t){let n=-1,r,i,o,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};jp(p,-c),jp(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Ot(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Ot(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=Ot(u,yu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Ot(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Ot(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,an(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function vj(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=kp(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=kp(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function jp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const bj={name:"autolink",tokenize:kj};function kj(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return tn(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||St(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||St(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Zl(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):lj(m)?(e.consume(m),u):n(m)}function d(m){return St(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||St(m))&&r++<63){const x=m===45?f:p;return e.consume(m),x}return n(m)}}const Go={partial:!0,tokenize:jj};function jj(e,t,n){return r;function r(o){return Ce(o)?Le(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||xe(o)?t(o):n(o)}}const Rg={continuation:{tokenize:_j},exit:Sj,name:"blockQuote",tokenize:wj};function wj(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return Ce(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function _j(e,t,n){const r=this;return i;function i(a){return Ce(a)?Le(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Rg,t,n)(a)}}function Sj(e){e.exit("blockQuote")}const Mg={name:"characterEscape",tokenize:Cj};function Cj(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return uj(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Og={name:"characterReference",tokenize:Nj};function Nj(e,t,n){const r=this;let i=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=St,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=cj,d):(e.enter("characterReferenceValue"),o=7,a=ec,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===St&&!xu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const wp={partial:!0,tokenize:zj},_p={concrete:!0,name:"codeFenced",tokenize:Ej};function Ej(e,t,n){const r=this,i={partial:!0,tokenize:C};let o=0,a=0,l;return c;function c(_){return u(_)}function u(_){const N=r.events[r.events.length-1];return o=N&&N[1].type==="linePrefix"?N[2].sliceSerialize(N[1],!0).length:0,l=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(_)}function d(_){return _===l?(a++,e.consume(_),d):a<3?n(_):(e.exit("codeFencedFenceSequence"),Ce(_)?Le(e,p,"whitespace")(_):p(_))}function p(_){return _===null||xe(_)?(e.exit("codeFencedFence"),r.interrupt?t(_):e.check(wp,b,P)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(_))}function f(_){return _===null||xe(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(_)):Ce(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Le(e,m,"whitespace")(_)):_===96&&_===l?n(_):(e.consume(_),f)}function m(_){return _===null||xe(_)?p(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(_))}function x(_){return _===null||xe(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(_)):_===96&&_===l?n(_):(e.consume(_),x)}function b(_){return e.attempt(i,P,T)(_)}function T(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),y}function y(_){return o>0&&Ce(_)?Le(e,g,"linePrefix",o+1)(_):g(_)}function g(_){return _===null||xe(_)?e.check(wp,b,P)(_):(e.enter("codeFlowValue"),h(_))}function h(_){return _===null||xe(_)?(e.exit("codeFlowValue"),g(_)):(e.consume(_),h)}function P(_){return e.exit("codeFenced"),t(_)}function C(_,N,k){let A=0;return S;function S($){return _.enter("lineEnding"),_.consume($),_.exit("lineEnding"),v}function v($){return _.enter("codeFencedFence"),Ce($)?Le(_,E,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)($):E($)}function E($){return $===l?(_.enter("codeFencedFenceSequence"),F($)):k($)}function F($){return $===l?(A++,_.consume($),F):A>=a?(_.exit("codeFencedFenceSequence"),Ce($)?Le(_,B,"whitespace")($):B($)):k($)}function B($){return $===null||xe($)?(_.exit("codeFencedFence"),N($)):k($)}}}function zj(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Ma={name:"codeIndented",tokenize:Pj},Tj={partial:!0,tokenize:Lj};function Pj(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Le(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):xe(u)?e.attempt(Tj,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||xe(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function Lj(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):xe(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Le(e,o,"linePrefix",5)(a)}function o(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):xe(a)?i(a):n(a)}}const Aj={name:"codeText",previous:Mj,resolve:Rj,tokenize:Oj};function Rj(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Mj(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Oj(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):xe(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||xe(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class Ij{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ai(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ai(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ai(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ai(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ai(this.left,n.reverse())}}}function ai(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Ig(e){const t={};let n=-1,r,i,o,a,l,c,u;const d=new Ij(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,$j(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return an(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function $j(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,m=n,x=0,b=0;const T=[b];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(b=f+1,T.push(b),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):T.pop(),f=T.length;f--;){const y=l.slice(T[f],T[f+1]),g=o.pop();c.push([g,g+y.length-1]),e.splice(g,2,y)}for(c.reverse(),f=-1;++f<c.length;)u[x+c[f][0]]=x+c[f][1],x+=c[f][1]-c[f][0]-1;return u}const Dj={resolve:Bj,tokenize:Uj},Fj={partial:!0,tokenize:Vj};function Bj(e){return Ig(e),e}function Uj(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):xe(l)?e.check(Fj,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Vj(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Le(e,o,"linePrefix")}function o(a){if(a===null||xe(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function $g(e,t,n,r,i,o,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(y){return y===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(y),e.exit(o),f):y===null||y===32||y===41||Zl(y)?n(y):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),b(y))}function f(y){return y===62?(e.enter(o),e.consume(y),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(y))}function m(y){return y===62?(e.exit("chunkString"),e.exit(l),f(y)):y===null||y===60||xe(y)?n(y):(e.consume(y),y===92?x:m)}function x(y){return y===60||y===62||y===92?(e.consume(y),m):m(y)}function b(y){return!d&&(y===null||y===41||vt(y))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(y)):d<u&&y===40?(e.consume(y),d++,b):y===41?(e.consume(y),d--,b):y===null||y===32||y===40||Zl(y)?n(y):(e.consume(y),y===92?T:b)}function T(y){return y===40||y===41||y===92?(e.consume(y),b):b(y)}}function Dg(e,t,n,r,i,o){const a=this;let l=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return l>999||m===null||m===91||m===93&&!c||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):xe(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||xe(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!Ce(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function Fg(e,t,n,r,i,o){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):xe(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Le(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||xe(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function Ni(e,t){let n;return r;function r(i){return xe(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Ce(i)?Le(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Wj={name:"definition",tokenize:qj},Hj={partial:!0,tokenize:Jj};function qj(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return Dg.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=Ir(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return vt(m)?Ni(e,u)(m):u(m)}function u(m){return $g(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(Hj,p,p)(m)}function p(m){return Ce(m)?Le(e,f,"whitespace")(m):f(m)}function f(m){return m===null||xe(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Jj(e,t,n){return r;function r(l){return vt(l)?Ni(e,i)(l):n(l)}function i(l){return Fg(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return Ce(l)?Le(e,a,"whitespace")(l):a(l)}function a(l){return l===null||xe(l)?t(l):n(l)}}const Kj={name:"hardBreakEscape",tokenize:Qj};function Qj(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return xe(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Gj={name:"headingAtx",resolve:Yj,tokenize:Xj};function Yj(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},an(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Xj(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||vt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||xe(d)?(e.exit("atxHeading"),t(d)):Ce(d)?Le(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||vt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const Zj=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Sp=["pre","script","style","textarea"],ew={concrete:!0,name:"htmlFlow",resolveTo:rw,tokenize:iw},tw={partial:!0,tokenize:ow},nw={partial:!0,tokenize:sw};function rw(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function iw(e,t,n){const r=this;let i,o,a,l,c;return u;function u(z){return d(z)}function d(z){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(z),p}function p(z){return z===33?(e.consume(z),f):z===47?(e.consume(z),o=!0,b):z===63?(e.consume(z),i=3,r.interrupt?t:j):tn(z)?(e.consume(z),a=String.fromCharCode(z),T):n(z)}function f(z){return z===45?(e.consume(z),i=2,m):z===91?(e.consume(z),i=5,l=0,x):tn(z)?(e.consume(z),i=4,r.interrupt?t:j):n(z)}function m(z){return z===45?(e.consume(z),r.interrupt?t:j):n(z)}function x(z){const he="CDATA[";return z===he.charCodeAt(l++)?(e.consume(z),l===he.length?r.interrupt?t:E:x):n(z)}function b(z){return tn(z)?(e.consume(z),a=String.fromCharCode(z),T):n(z)}function T(z){if(z===null||z===47||z===62||vt(z)){const he=z===47,R=a.toLowerCase();return!he&&!o&&Sp.includes(R)?(i=1,r.interrupt?t(z):E(z)):Zj.includes(a.toLowerCase())?(i=6,he?(e.consume(z),y):r.interrupt?t(z):E(z)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(z):o?g(z):h(z))}return z===45||St(z)?(e.consume(z),a+=String.fromCharCode(z),T):n(z)}function y(z){return z===62?(e.consume(z),r.interrupt?t:E):n(z)}function g(z){return Ce(z)?(e.consume(z),g):S(z)}function h(z){return z===47?(e.consume(z),S):z===58||z===95||tn(z)?(e.consume(z),P):Ce(z)?(e.consume(z),h):S(z)}function P(z){return z===45||z===46||z===58||z===95||St(z)?(e.consume(z),P):C(z)}function C(z){return z===61?(e.consume(z),_):Ce(z)?(e.consume(z),C):h(z)}function _(z){return z===null||z===60||z===61||z===62||z===96?n(z):z===34||z===39?(e.consume(z),c=z,N):Ce(z)?(e.consume(z),_):k(z)}function N(z){return z===c?(e.consume(z),c=null,A):z===null||xe(z)?n(z):(e.consume(z),N)}function k(z){return z===null||z===34||z===39||z===47||z===60||z===61||z===62||z===96||vt(z)?C(z):(e.consume(z),k)}function A(z){return z===47||z===62||Ce(z)?h(z):n(z)}function S(z){return z===62?(e.consume(z),v):n(z)}function v(z){return z===null||xe(z)?E(z):Ce(z)?(e.consume(z),v):n(z)}function E(z){return z===45&&i===2?(e.consume(z),ne):z===60&&i===1?(e.consume(z),L):z===62&&i===4?(e.consume(z),H):z===63&&i===3?(e.consume(z),j):z===93&&i===5?(e.consume(z),M):xe(z)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(tw,G,F)(z)):z===null||xe(z)?(e.exit("htmlFlowData"),F(z)):(e.consume(z),E)}function F(z){return e.check(nw,B,G)(z)}function B(z){return e.enter("lineEnding"),e.consume(z),e.exit("lineEnding"),$}function $(z){return z===null||xe(z)?F(z):(e.enter("htmlFlowData"),E(z))}function ne(z){return z===45?(e.consume(z),j):E(z)}function L(z){return z===47?(e.consume(z),a="",D):E(z)}function D(z){if(z===62){const he=a.toLowerCase();return Sp.includes(he)?(e.consume(z),H):E(z)}return tn(z)&&a.length<8?(e.consume(z),a+=String.fromCharCode(z),D):E(z)}function M(z){return z===93?(e.consume(z),j):E(z)}function j(z){return z===62?(e.consume(z),H):z===45&&i===2?(e.consume(z),j):E(z)}function H(z){return z===null||xe(z)?(e.exit("htmlFlowData"),G(z)):(e.consume(z),H)}function G(z){return e.exit("htmlFlow"),t(z)}}function sw(e,t,n){const r=this;return i;function i(a){return xe(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function ow(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Go,t,n)}}const aw={name:"htmlText",tokenize:lw};function lw(e,t,n){const r=this;let i,o,a;return l;function l(j){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(j),c}function c(j){return j===33?(e.consume(j),u):j===47?(e.consume(j),C):j===63?(e.consume(j),h):tn(j)?(e.consume(j),k):n(j)}function u(j){return j===45?(e.consume(j),d):j===91?(e.consume(j),o=0,x):tn(j)?(e.consume(j),g):n(j)}function d(j){return j===45?(e.consume(j),m):n(j)}function p(j){return j===null?n(j):j===45?(e.consume(j),f):xe(j)?(a=p,L(j)):(e.consume(j),p)}function f(j){return j===45?(e.consume(j),m):p(j)}function m(j){return j===62?ne(j):j===45?f(j):p(j)}function x(j){const H="CDATA[";return j===H.charCodeAt(o++)?(e.consume(j),o===H.length?b:x):n(j)}function b(j){return j===null?n(j):j===93?(e.consume(j),T):xe(j)?(a=b,L(j)):(e.consume(j),b)}function T(j){return j===93?(e.consume(j),y):b(j)}function y(j){return j===62?ne(j):j===93?(e.consume(j),y):b(j)}function g(j){return j===null||j===62?ne(j):xe(j)?(a=g,L(j)):(e.consume(j),g)}function h(j){return j===null?n(j):j===63?(e.consume(j),P):xe(j)?(a=h,L(j)):(e.consume(j),h)}function P(j){return j===62?ne(j):h(j)}function C(j){return tn(j)?(e.consume(j),_):n(j)}function _(j){return j===45||St(j)?(e.consume(j),_):N(j)}function N(j){return xe(j)?(a=N,L(j)):Ce(j)?(e.consume(j),N):ne(j)}function k(j){return j===45||St(j)?(e.consume(j),k):j===47||j===62||vt(j)?A(j):n(j)}function A(j){return j===47?(e.consume(j),ne):j===58||j===95||tn(j)?(e.consume(j),S):xe(j)?(a=A,L(j)):Ce(j)?(e.consume(j),A):ne(j)}function S(j){return j===45||j===46||j===58||j===95||St(j)?(e.consume(j),S):v(j)}function v(j){return j===61?(e.consume(j),E):xe(j)?(a=v,L(j)):Ce(j)?(e.consume(j),v):A(j)}function E(j){return j===null||j===60||j===61||j===62||j===96?n(j):j===34||j===39?(e.consume(j),i=j,F):xe(j)?(a=E,L(j)):Ce(j)?(e.consume(j),E):(e.consume(j),B)}function F(j){return j===i?(e.consume(j),i=void 0,$):j===null?n(j):xe(j)?(a=F,L(j)):(e.consume(j),F)}function B(j){return j===null||j===34||j===39||j===60||j===61||j===96?n(j):j===47||j===62||vt(j)?A(j):(e.consume(j),B)}function $(j){return j===47||j===62||vt(j)?A(j):n(j)}function ne(j){return j===62?(e.consume(j),e.exit("htmlTextData"),e.exit("htmlText"),t):n(j)}function L(j){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),D}function D(j){return Ce(j)?Le(e,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(j):M(j)}function M(j){return e.enter("htmlTextData"),a(j)}}const vu={name:"labelEnd",resolveAll:pw,resolveTo:fw,tokenize:mw},cw={tokenize:hw},uw={tokenize:gw},dw={tokenize:xw};function pw(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&an(e,0,e.length,n),e}function fw(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Ot(l,e.slice(o+1,o+r+3)),l=Ot(l,[["enter",d,t]]),l=Ot(l,yu(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=Ot(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Ot(l,e.slice(a+1)),l=Ot(l,[["exit",c,t]]),an(e,o,e.length,l),e}function mw(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Ir(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(cw,d,a?d:p)(f):f===91?e.attempt(uw,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(dw,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function hw(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return vt(p)?Ni(e,o)(p):o(p)}function o(p){return p===41?d(p):$g(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return vt(p)?Ni(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Fg(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return vt(p)?Ni(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function gw(e,t,n){const r=this;return i;function i(l){return Dg.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Ir(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function xw(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const yw={name:"labelStartImage",resolveAll:vu.resolveAll,tokenize:vw};function vw(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const bw={name:"labelStartLink",resolveAll:vu.resolveAll,tokenize:kw};function kw(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Oa={name:"lineEnding",tokenize:jw};function jw(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Le(e,t,"linePrefix")}}const Ws={name:"thematicBreak",tokenize:ww};function ww(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||xe(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Ce(u)?Le(e,l,"whitespace")(u):l(u))}}const ft={continuation:{tokenize:Nw},exit:zw,name:"list",tokenize:Cw},_w={partial:!0,tokenize:Tw},Sw={partial:!0,tokenize:Ew};function Cw(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(m){const x=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:ec(m)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Ws,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return ec(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Go,r.interrupt?n:d,e.attempt(_w,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return Ce(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function Nw(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Go,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Le(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!Ce(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Sw,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Le(e,e.attempt(ft,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Ew(e,t,n){const r=this;return Le(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function zw(e){e.exit(this.containerState.type)}function Tw(e,t,n){const r=this;return Le(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!Ce(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Cp={name:"setextUnderline",resolveTo:Pw,tokenize:Lw};function Pw(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function Lw(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Ce(u)?Le(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||xe(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Aw={tokenize:Rw};function Rw(e){const t=this,n=e.attempt(Go,r,e.attempt(this.parser.constructs.flowInitial,i,Le(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Dj,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Mw={resolveAll:Ug()},Ow=Bg("string"),Iw=Bg("text");function Bg(e){return{resolveAll:Ug(e==="text"?$w:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Ug(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function $w(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,l=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Dw={42:ft,43:ft,45:ft,48:ft,49:ft,50:ft,51:ft,52:ft,53:ft,54:ft,55:ft,56:ft,57:ft,62:Rg},Fw={91:Wj},Bw={[-2]:Ma,[-1]:Ma,32:Ma},Uw={35:Gj,42:Ws,45:[Cp,Ws],60:ew,61:Cp,95:Ws,96:_p,126:_p},Vw={38:Og,92:Mg},Ww={[-5]:Oa,[-4]:Oa,[-3]:Oa,33:yw,38:Og,42:tc,60:[bj,aw],91:bw,92:[Kj,Mg],93:vu,95:tc,96:Aj},Hw={null:[tc,Mw]},qw={null:[42,95]},Jw={null:[]},Kw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:qw,contentInitial:Fw,disable:Jw,document:Dw,flow:Uw,flowInitial:Bw,insideSpan:Hw,string:Vw,text:Ww},Symbol.toStringTag,{value:"Module"}));function Qw(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],l=[];const c={attempt:N(C),check:N(_),consume:g,enter:h,exit:P,interrupt:N(_,{interrupt:!0})},u={code:null,containerState:{},defineSkip:b,events:[],now:x,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(v){return a=Ot(a,v),T(),a[a.length-1]!==null?[]:(k(t,0),u.events=yu(o,u.events,u),u.events)}function f(v,E){return Yw(m(v),E)}function m(v){return Gw(a,v)}function x(){const{_bufferIndex:v,_index:E,line:F,column:B,offset:$}=r;return{_bufferIndex:v,_index:E,line:F,column:B,offset:$}}function b(v){i[v.line]=v.column,S()}function T(){let v;for(;r._index<a.length;){const E=a[r._index];if(typeof E=="string")for(v=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===v&&r._bufferIndex<E.length;)y(E.charCodeAt(r._bufferIndex));else y(E)}}function y(v){d=d(v)}function g(v){xe(v)?(r.line++,r.column=1,r.offset+=v===-3?2:1,S()):v!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=v}function h(v,E){const F=E||{};return F.type=v,F.start=x(),u.events.push(["enter",F,u]),l.push(F),F}function P(v){const E=l.pop();return E.end=x(),u.events.push(["exit",E,u]),E}function C(v,E){k(v,E.from)}function _(v,E){E.restore()}function N(v,E){return F;function F(B,$,ne){let L,D,M,j;return Array.isArray(B)?G(B):"tokenize"in B?G([B]):H(B);function H(te){return V;function V(re){const ce=re!==null&&te[re],I=re!==null&&te.null,K=[...Array.isArray(ce)?ce:ce?[ce]:[],...Array.isArray(I)?I:I?[I]:[]];return G(K)(re)}}function G(te){return L=te,D=0,te.length===0?ne:z(te[D])}function z(te){return V;function V(re){return j=A(),M=te,te.partial||(u.currentConstruct=te),te.name&&u.parser.constructs.disable.null.includes(te.name)?R():te.tokenize.call(E?Object.assign(Object.create(u),E):u,c,he,R)(re)}}function he(te){return v(M,j),$}function R(te){return j.restore(),++D<L.length?z(L[D]):ne}}}function k(v,E){v.resolveAll&&!o.includes(v)&&o.push(v),v.resolve&&an(u.events,E,u.events.length-E,v.resolve(u.events.slice(E),u)),v.resolveTo&&(u.events=v.resolveTo(u.events,u))}function A(){const v=x(),E=u.previous,F=u.currentConstruct,B=u.events.length,$=Array.from(l);return{from:B,restore:ne};function ne(){r=v,u.previous=E,u.currentConstruct=F,u.events.length=B,l=$,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Gw(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function Yw(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function Xw(e){const r={constructs:sj([Kw,...(e||{}).extensions||[]]),content:i(fj),defined:[],document:i(hj),flow:i(Aw),lazy:{},string:i(Ow),text:i(Iw)};return r;function i(o){return a;function a(l){return Qw(r,o,l)}}}function Zw(e){for(;!Ig(e););return e}const Np=/[\0\t\n\r]/g;function e_(){let e=1,t="",n=!0,r;return i;function i(o,a,l){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(Np.lastIndex=p,u=Np.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const t_=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function n_(e){return e.replace(t_,r_)}function r_(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Ag(n.slice(o?2:1),o?16:10)}return xu(n)||e}const Vg={}.hasOwnProperty;function i_(e,t,n){return typeof t!="string"&&(n=t,t=void 0),s_(n)(Zw(Xw(n).document().write(e_()(e,t,!0))))}function s_(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(je),autolinkProtocol:A,autolinkEmail:A,atxHeading:o(J),blockQuote:o(I),characterEscape:A,characterReference:A,codeFenced:o(K),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(K,a),codeText:o(Q,a),codeTextData:A,data:A,codeFlowValue:A,definition:o(Y),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(oe),hardBreakEscape:o(X),hardBreakTrailing:o(X),htmlFlow:o(ie,a),htmlFlowData:A,htmlText:o(ie,a),htmlTextData:A,image:o(me),label:a,link:o(je),listItem:o(be),listItemValue:f,listOrdered:o(ze,p),listUnordered:o(ze),paragraph:o(Ne),reference:z,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(J),strong:o(Qe),thematicBreak:o(ae)},exit:{atxHeading:c(),atxHeadingSequence:C,autolink:c(),autolinkEmail:ce,autolinkProtocol:re,blockQuote:c(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:R,characterReferenceMarkerNumeric:R,characterReferenceValue:te,characterReference:V,codeFenced:c(T),codeFencedFence:b,codeFencedFenceInfo:m,codeFencedFenceMeta:x,codeFlowValue:S,codeIndented:c(y),codeText:c($),codeTextData:S,data:S,definition:c(),definitionDestinationString:P,definitionLabelString:g,definitionTitleString:h,emphasis:c(),hardBreakEscape:c(E),hardBreakTrailing:c(E),htmlFlow:c(F),htmlFlowData:S,htmlText:c(B),htmlTextData:S,image:c(L),label:M,labelText:D,lineEnding:v,link:c(ne),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:he,resourceDestinationString:j,resourceTitleString:H,resource:G,setextHeading:c(k),setextHeadingLineSequence:N,setextHeadingText:_,strong:c(),thematicBreak:c()}};Wg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(O){let q={type:"root",children:[]};const ue={stack:[q],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},se=[];let we=-1;for(;++we<O.length;)if(O[we][1].type==="listOrdered"||O[we][1].type==="listUnordered")if(O[we][0]==="enter")se.push(we);else{const Ze=se.pop();we=i(O,Ze,we)}for(we=-1;++we<O.length;){const Ze=t[O[we][0]];Vg.call(Ze,O[we][1].type)&&Ze[O[we][1].type].call(Object.assign({sliceSerialize:O[we][2].sliceSerialize},ue),O[we][1])}if(ue.tokenStack.length>0){const Ze=ue.tokenStack[ue.tokenStack.length-1];(Ze[1]||Ep).call(ue,void 0,Ze[0])}for(q.position={start:kn(O.length>0?O[0][1].start:{line:1,column:1,offset:0}),end:kn(O.length>0?O[O.length-2][1].end:{line:1,column:1,offset:0})},we=-1;++we<t.transforms.length;)q=t.transforms[we](q)||q;return q}function i(O,q,ue){let se=q-1,we=-1,Ze=!1,ln,Pt,U,de;for(;++se<=ue;){const pe=O[se];switch(pe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{pe[0]==="enter"?we++:we--,de=void 0;break}case"lineEndingBlank":{pe[0]==="enter"&&(ln&&!de&&!we&&!U&&(U=se),de=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:de=void 0}if(!we&&pe[0]==="enter"&&pe[1].type==="listItemPrefix"||we===-1&&pe[0]==="exit"&&(pe[1].type==="listUnordered"||pe[1].type==="listOrdered")){if(ln){let ge=se;for(Pt=void 0;ge--;){const ve=O[ge];if(ve[1].type==="lineEnding"||ve[1].type==="lineEndingBlank"){if(ve[0]==="exit")continue;Pt&&(O[Pt][1].type="lineEndingBlank",Ze=!0),ve[1].type="lineEnding",Pt=ge}else if(!(ve[1].type==="linePrefix"||ve[1].type==="blockQuotePrefix"||ve[1].type==="blockQuotePrefixWhitespace"||ve[1].type==="blockQuoteMarker"||ve[1].type==="listItemIndent"))break}U&&(!Pt||U<Pt)&&(ln._spread=!0),ln.end=Object.assign({},Pt?O[Pt][1].start:pe[1].end),O.splice(Pt||se,0,["exit",ln,pe[2]]),se++,ue++}if(pe[1].type==="listItemPrefix"){const ge={type:"listItem",_spread:!1,start:Object.assign({},pe[1].start),end:void 0};ln=ge,O.splice(se,0,["enter",ge,pe[2]]),se++,ue++,U=void 0,de=!0}}}return O[q][1]._spread=Ze,ue}function o(O,q){return ue;function ue(se){l.call(this,O(se),se),q&&q.call(this,se)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(O,q,ue){this.stack[this.stack.length-1].children.push(O),this.stack.push(O),this.tokenStack.push([q,ue||void 0]),O.position={start:kn(q.start),end:void 0}}function c(O){return q;function q(ue){O&&O.call(this,ue),u.call(this,ue)}}function u(O,q){const ue=this.stack.pop(),se=this.tokenStack.pop();if(se)se[0].type!==O.type&&(q?q.call(this,O,se[0]):(se[1]||Ep).call(this,O,se[0]));else throw new Error("Cannot close `"+O.type+"` ("+Ci({start:O.start,end:O.end})+"): it’s not open");ue.position.end=kn(O.end)}function d(){return rj(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(O){if(this.data.expectingFirstListItemValue){const q=this.stack[this.stack.length-2];q.start=Number.parseInt(this.sliceSerialize(O),10),this.data.expectingFirstListItemValue=void 0}}function m(){const O=this.resume(),q=this.stack[this.stack.length-1];q.lang=O}function x(){const O=this.resume(),q=this.stack[this.stack.length-1];q.meta=O}function b(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const O=this.resume(),q=this.stack[this.stack.length-1];q.value=O.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const O=this.resume(),q=this.stack[this.stack.length-1];q.value=O.replace(/(\r?\n|\r)$/g,"")}function g(O){const q=this.resume(),ue=this.stack[this.stack.length-1];ue.label=q,ue.identifier=Ir(this.sliceSerialize(O)).toLowerCase()}function h(){const O=this.resume(),q=this.stack[this.stack.length-1];q.title=O}function P(){const O=this.resume(),q=this.stack[this.stack.length-1];q.url=O}function C(O){const q=this.stack[this.stack.length-1];if(!q.depth){const ue=this.sliceSerialize(O).length;q.depth=ue}}function _(){this.data.setextHeadingSlurpLineEnding=!0}function N(O){const q=this.stack[this.stack.length-1];q.depth=this.sliceSerialize(O).codePointAt(0)===61?1:2}function k(){this.data.setextHeadingSlurpLineEnding=void 0}function A(O){const ue=this.stack[this.stack.length-1].children;let se=ue[ue.length-1];(!se||se.type!=="text")&&(se=W(),se.position={start:kn(O.start),end:void 0},ue.push(se)),this.stack.push(se)}function S(O){const q=this.stack.pop();q.value+=this.sliceSerialize(O),q.position.end=kn(O.end)}function v(O){const q=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ue=q.children[q.children.length-1];ue.position.end=kn(O.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(q.type)&&(A.call(this,O),S.call(this,O))}function E(){this.data.atHardBreak=!0}function F(){const O=this.resume(),q=this.stack[this.stack.length-1];q.value=O}function B(){const O=this.resume(),q=this.stack[this.stack.length-1];q.value=O}function $(){const O=this.resume(),q=this.stack[this.stack.length-1];q.value=O}function ne(){const O=this.stack[this.stack.length-1];if(this.data.inReference){const q=this.data.referenceType||"shortcut";O.type+="Reference",O.referenceType=q,delete O.url,delete O.title}else delete O.identifier,delete O.label;this.data.referenceType=void 0}function L(){const O=this.stack[this.stack.length-1];if(this.data.inReference){const q=this.data.referenceType||"shortcut";O.type+="Reference",O.referenceType=q,delete O.url,delete O.title}else delete O.identifier,delete O.label;this.data.referenceType=void 0}function D(O){const q=this.sliceSerialize(O),ue=this.stack[this.stack.length-2];ue.label=n_(q),ue.identifier=Ir(q).toLowerCase()}function M(){const O=this.stack[this.stack.length-1],q=this.resume(),ue=this.stack[this.stack.length-1];if(this.data.inReference=!0,ue.type==="link"){const se=O.children;ue.children=se}else ue.alt=q}function j(){const O=this.resume(),q=this.stack[this.stack.length-1];q.url=O}function H(){const O=this.resume(),q=this.stack[this.stack.length-1];q.title=O}function G(){this.data.inReference=void 0}function z(){this.data.referenceType="collapsed"}function he(O){const q=this.resume(),ue=this.stack[this.stack.length-1];ue.label=q,ue.identifier=Ir(this.sliceSerialize(O)).toLowerCase(),this.data.referenceType="full"}function R(O){this.data.characterReferenceType=O.type}function te(O){const q=this.sliceSerialize(O),ue=this.data.characterReferenceType;let se;ue?(se=Ag(q,ue==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):se=xu(q);const we=this.stack[this.stack.length-1];we.value+=se}function V(O){const q=this.stack.pop();q.position.end=kn(O.end)}function re(O){S.call(this,O);const q=this.stack[this.stack.length-1];q.url=this.sliceSerialize(O)}function ce(O){S.call(this,O);const q=this.stack[this.stack.length-1];q.url="mailto:"+this.sliceSerialize(O)}function I(){return{type:"blockquote",children:[]}}function K(){return{type:"code",lang:null,meta:null,value:""}}function Q(){return{type:"inlineCode",value:""}}function Y(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function oe(){return{type:"emphasis",children:[]}}function J(){return{type:"heading",depth:0,children:[]}}function X(){return{type:"break"}}function ie(){return{type:"html",value:""}}function me(){return{type:"image",title:null,url:"",alt:null}}function je(){return{type:"link",title:null,url:"",children:[]}}function ze(O){return{type:"list",ordered:O.type==="listOrdered",start:null,spread:O._spread,children:[]}}function be(O){return{type:"listItem",spread:O._spread,checked:null,children:[]}}function Ne(){return{type:"paragraph",children:[]}}function Qe(){return{type:"strong",children:[]}}function W(){return{type:"text",value:""}}function ae(){return{type:"thematicBreak"}}}function kn(e){return{line:e.line,column:e.column,offset:e.offset}}function Wg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Wg(e,r):o_(e,r)}}function o_(e,t){let n;for(n in t)if(Vg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Ep(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ci({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ci({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ci({start:t.start,end:t.end})+") is still open")}function a_(e){const t=this;t.parser=n;function n(r){return i_(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function l_(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function c_(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function u_(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function d_(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function p_(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function f_(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Xr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function m_(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function h_(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Hg(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function g_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Hg(e,t);const i={src:Xr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function x_(e,t){const n={src:Xr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function y_(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function v_(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Hg(e,t);const i={href:Xr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function b_(e,t){const n={href:Xr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function k_(e,t,n){const r=e.all(t),i=n?j_(n):qg(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function j_(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=qg(n[r])}return t}function qg(e){const t=e.spread;return t??e.children.length>1}function w_(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function __(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function S_(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function C_(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function N_(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=fu(t.children[1]),c=Cg(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function E_(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let x={type:"element",tagName:o,properties:f,children:[]};p&&(x.children=e.all(p),e.patch(p,x),x=e.applyData(p,x)),u.push(x)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function z_(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const zp=9,Tp=32;function T_(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Pp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Pp(t.slice(i),i>0,!1)),o.join("")}function Pp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===zp||o===Tp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===zp||o===Tp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function P_(e,t){const n={type:"text",value:T_(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function L_(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const A_={blockquote:l_,break:c_,code:u_,delete:d_,emphasis:p_,footnoteReference:f_,heading:m_,html:h_,imageReference:g_,image:x_,inlineCode:y_,linkReference:v_,link:b_,listItem:k_,list:w_,paragraph:__,root:S_,strong:C_,table:N_,tableCell:z_,tableRow:E_,text:P_,thematicBreak:L_,toml:Es,yaml:Es,definition:Es,footnoteDefinition:Es};function Es(){}const Jg=-1,Yo=0,Ei=1,_o=2,bu=3,ku=4,ju=5,wu=6,Kg=7,Qg=8,Lp=typeof self=="object"?self:globalThis,R_=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case Yo:case Jg:return n(a,i);case Ei:{const l=n([],i);for(const c of a)l.push(r(c));return l}case _o:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case bu:return n(new Date(a),i);case ku:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case ju:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case wu:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case Kg:{const{name:l,message:c}=a;return n(new Lp[l](c),i)}case Qg:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Lp[o](a),i)};return r},Ap=e=>R_(new Map,e)(0),hr="",{toString:M_}={},{keys:O_}=Object,li=e=>{const t=typeof e;if(t!=="object"||!e)return[Yo,t];const n=M_.call(e).slice(8,-1);switch(n){case"Array":return[Ei,hr];case"Object":return[_o,hr];case"Date":return[bu,hr];case"RegExp":return[ku,hr];case"Map":return[ju,hr];case"Set":return[wu,hr];case"DataView":return[Ei,n]}return n.includes("Array")?[Ei,n]:n.includes("Error")?[Kg,n]:[_o,n]},zs=([e,t])=>e===Yo&&(t==="function"||t==="symbol"),I_=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},o=a=>{if(n.has(a))return n.get(a);let[l,c]=li(a);switch(l){case Yo:{let d=a;switch(c){case"bigint":l=Qg,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Jg],a)}return i([l,d],a)}case Ei:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(o(f));return p}case _o:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([l,d],a);for(const f of O_(a))(e||!zs(li(a[f])))&&d.push([o(f),o(a[f])]);return p}case bu:return i([l,a.toISOString()],a);case ku:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case ju:{const d=[],p=i([l,d],a);for(const[f,m]of a)(e||!(zs(li(f))||zs(li(m))))&&d.push([o(f),o(m)]);return p}case wu:{const d=[],p=i([l,d],a);for(const f of a)(e||!zs(li(f)))&&d.push(o(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return o},Rp=(e,{json:t,lossy:n}={})=>{const r=[];return I_(!(t||n),!!t,new Map,r)(e),r},So=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Ap(Rp(e,t)):structuredClone(e):(e,t)=>Ap(Rp(e,t));function $_(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function D_(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function F_(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||$_,r=e.options.footnoteBackLabel||D_,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Xr(p.toLowerCase());let m=0;const x=[],b=e.footnoteCounts.get(p);for(;b!==void 0&&++m<=b;){x.length>0&&x.push({type:"text",value:" "});let g=typeof n=="string"?n:n(c,m);typeof g=="string"&&(g={type:"text",value:g}),x.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const T=d[d.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const g=T.children[T.children.length-1];g&&g.type==="text"?g.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...x)}else d.push(...x);const y={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,y),l.push(y)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...So(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Gg=function(e){if(e==null)return W_;if(typeof e=="function")return Xo(e);if(typeof e=="object")return Array.isArray(e)?B_(e):U_(e);if(typeof e=="string")return V_(e);throw new Error("Expected function, string, or object as test")};function B_(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Gg(e[n]);return Xo(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function U_(e){const t=e;return Xo(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function V_(e){return Xo(t);function t(n){return n&&n.type===e}}function Xo(e){return t;function t(n,r,i){return!!(H_(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function W_(){return!0}function H_(e){return e!==null&&typeof e=="object"&&"type"in e}const Yg=[],q_=!0,Mp=!1,J_="skip";function K_(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Gg(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Yg,x,b,T;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=Q_(n(c,d)),m[0]===Mp))return m;if("children"in c&&c.children){const y=c;if(y.children&&m[0]!==J_)for(b=(r?y.children.length:-1)+a,T=d.concat(y);b>-1&&b<y.children.length;){const g=y.children[b];if(x=l(g,b,T)(),x[0]===Mp)return x;b=typeof x[1]=="number"?x[1]:b+a}}return m}}}function Q_(e){return Array.isArray(e)?e:typeof e=="number"?[q_,e]:e==null?Yg:[e]}function Xg(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),K_(e,o,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const nc={}.hasOwnProperty,G_={};function Y_(e,t){const n=t||G_,r=new Map,i=new Map,o=new Map,a={...A_,...n.handlers},l={all:u,applyData:Z_,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:X_,wrap:t2};return Xg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,m=l.handlers[f];if(nc.call(l.handlers,f)&&m)return m(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:b,...T}=d,y=So(T);return y.children=l.all(d),y}return So(d)}return(l.options.unknownHandler||e2)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const x=l.one(f[m],d);if(x){if(m&&f[m-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=Op(x.value)),!Array.isArray(x)&&x.type==="element")){const b=x.children[0];b&&b.type==="text"&&(b.value=Op(b.value))}Array.isArray(x)?p.push(...x):p.push(x)}}}return p}}function X_(e,t){e.position&&(t.position=Mk(e))}function Z_(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,So(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function e2(e,t){const n=t.data||{},r="value"in t&&!(nc.call(n,"hProperties")||nc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function t2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Op(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Ip(e,t){const n=Y_(e,t),r=n.one(e,void 0),i=F_(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function n2(e,t){return e&&"run"in e?async function(n,r){const i=Ip(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Ip(n,{file:r,...e||t})}}function $p(e){if(e)throw e}var Hs=Object.prototype.hasOwnProperty,Zg=Object.prototype.toString,Dp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Bp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Zg.call(t)==="[object Array]"},Up=function(t){if(!t||Zg.call(t)!=="[object Object]")return!1;var n=Hs.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Hs.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Hs.call(t,i)},Vp=function(t,n){Dp&&n.name==="__proto__"?Dp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Wp=function(t,n){if(n==="__proto__")if(Hs.call(t,n)){if(Fp)return Fp(t,n).value}else return;return t[n]},r2=function e(){var t,n,r,i,o,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Wp(l,n),i=Wp(t,n),l!==i&&(d&&i&&(Up(i)||(o=Bp(i)))?(o?(o=!1,a=r&&Bp(r)?r:[]):a=r&&Up(r)?r:{},Vp(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Vp(l,{name:n,newValue:i}));return l};const Ia=No(r2);function rc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function i2(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?s2(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function s2(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...l){n||(n=!0,t(a,...l))}function o(a){i(null,a)}}const Xt={basename:o2,dirname:a2,extname:l2,join:c2,sep:"/"};function o2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ls(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function a2(e){if(ls(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function l2(e){ls(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function c2(...e){let t=-1,n;for(;++t<e.length;)ls(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":u2(n)}function u2(e){ls(e);const t=e.codePointAt(0)===47;let n=d2(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function d2(e,t){let n="",r=0,i=-1,o=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else l===46&&o>-1?o++:o=-1}return n}function ls(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const p2={cwd:f2};function f2(){return"/"}function ic(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function m2(e){if(typeof e=="string")e=new URL(e);else if(!ic(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return h2(e)}function h2(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const $a=["history","path","basename","stem","extname","dirname"];class ex{constructor(t){let n;t?ic(t)?n={path:t}:typeof t=="string"||g2(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":p2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<$a.length;){const o=$a[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)$a.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Xt.basename(this.path):void 0}set basename(t){Fa(t,"basename"),Da(t,"basename"),this.path=Xt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Xt.dirname(this.path):void 0}set dirname(t){Hp(this.basename,"dirname"),this.path=Xt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Xt.extname(this.path):void 0}set extname(t){if(Da(t,"extname"),Hp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Xt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){ic(t)&&(t=m2(t)),Fa(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Xt.basename(this.path,this.extname):void 0}set stem(t){Fa(t,"stem"),Da(t,"stem"),this.path=Xt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new lt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Da(e,t){if(e&&e.includes(Xt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Xt.sep+"`")}function Fa(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Hp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function g2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const x2=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},y2={}.hasOwnProperty;class _u extends x2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=i2()}copy(){const t=new _u;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ia(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Va("data",this.frozen),this.namespace[t]=n,this):y2.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Va("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ts(t),r=this.parser||this.Parser;return Ba("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ba("process",this.parser||this.Parser),Ua("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const l=Ts(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const m=p,x=r.stringify(m,f);k2(x)?f.value=x:f.result=x,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Ba("processSync",this.parser||this.Parser),Ua("processSync",this.compiler||this.Compiler),this.process(t,i),Jp("processSync","process",n),r;function i(o,a){n=!0,$p(o),r=a}}run(t,n,r){qp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){const c=Ts(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Jp("runSync","run",r),i;function o(a,l){$p(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Ts(n),i=this.compiler||this.Compiler;return Ua("stringify",i),qp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Va("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ia(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...x]=d;const b=r[f][1];rc(b)&&rc(m)&&(m=Ia(!0,b,m)),r[f]=[u,m,...x]}}}}const v2=new _u().freeze();function Ba(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ua(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Va(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function qp(e){if(!rc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Jp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ts(e){return b2(e)?e:new ex(e)}function b2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function k2(e){return typeof e=="string"||j2(e)}function j2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const w2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Kp=[],Qp={allowDangerousHtml:!0},_2=/^(https?|ircs?|mailto|xmpp)$/i,S2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function tx(e){const t=C2(e),n=N2(e);return E2(t.runSync(t.parse(n),n),e)}function C2(e){const t=e.rehypePlugins||Kp,n=e.remarkPlugins||Kp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Qp}:Qp;return v2().use(a_).use(n).use(n2,r).use(t)}function N2(e){const t=e.children||"",n=new ex;return typeof t=="string"&&(n.value=t),n}function E2(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||z2;for(const d of S2)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+w2+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Xg(e,u),Fk(e,{Fragment:s.Fragment,components:i,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in Ra)if(Object.hasOwn(Ra,m)&&Object.hasOwn(d.properties,m)){const x=d.properties[m],b=Ra[m];(b===null||b.includes(d.tagName))&&(d.properties[m]=c(String(x||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function z2(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||_2.test(e.slice(0,t))?e:""}function T2({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=w.useState(!1),[a,l]=w.useState(r),c=w.useRef(null),u=w.useRef(null);w.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));l(m)}},[e,r]),w.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&o(!1)}return w.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),s.jsxs("div",{ref:c,className:"markdown-editor",children:[s.jsx("style",{children:`
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
      `}),i?s.jsx("div",{className:"monaco-wrapper",children:s.jsx($t,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):s.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[s.jsxs("span",{className:"edit-hint",children:[s.jsx(v0,{size:12}),"Click to edit"]}),e?s.jsx("div",{className:"markdown-content",children:s.jsx(tx,{children:e})}):s.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function P2(e){return/^[a-zA-Z0-9_]+$/.test(e)}function L2({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=at(),[l,c]=w.useState(new Set(["basic","model","tools","subagents"])),[u,d]=w.useState(!1),[p,f]=w.useState(!1),[m,x]=w.useState(!1),[b,T]=w.useState(""),[y,g]=w.useState(null);if(!t)return null;function h(L){n(e.id,L)}function P(L){if(L===""){g(null),h({name:L});return}P2(L)?g(null):g("Name can only contain letters, numbers, and underscores"),h({name:L})}function C(L){const D=new Set(l);D.has(L)?D.delete(L):D.add(L),c(D)}const _=e.type==="LlmAgent",N=e;function k(L){_&&h({tools:[...N.tools,L]})}function A(L){_&&h({tools:N.tools.filter((D,M)=>M!==L)})}function S(L,D){if(!_)return;const M=[...N.tools];M[L]=D,h({tools:M})}function v(L){"sub_agents"in e&&h({sub_agents:[...e.sub_agents,L]})}function E(L){"sub_agents"in e&&h({sub_agents:e.sub_agents.filter(D=>D!==L)})}const F=t.agents.filter(L=>L.id!==e.id);async function B(){if(!(!t||!_)){d(!0);try{const L=N.instruction||"",D=L?`Current instruction to improve:

${L}

Please improve and expand this instruction while preserving its core intent.`:void 0,j=t.agents.some(G=>G.id===e.id)?void 0:e,H=await Vs(t.id,e.id,D,j);H.success&&H.prompt?h({instruction:H.prompt}):alert("Failed to generate prompt: "+(H.error||"Unknown error"))}catch(L){alert("Error generating prompt: "+L.message)}finally{d(!1)}}}async function $(){if(!(!t||!_||!b.trim())){d(!0);try{const D=`Current instruction:

${N.instruction||""}

---

Requested changes:
${b}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,j=t.agents.some(G=>G.id===e.id)?void 0:e,H=await Vs(t.id,e.id,D,j);H.success&&H.prompt?(h({instruction:H.prompt}),x(!1),T("")):alert("Failed to apply changes: "+(H.error||"Unknown error"))}catch(L){alert("Error applying changes: "+L.message)}finally{d(!1)}}}async function ne(){if(!t||!_)return;const L=N.instruction;if(!L){alert("Please write an instruction first");return}f(!0);try{const D=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,M=await Vs(t.id,e.id,D);if(M.success&&M.prompt){let j=M.prompt.trim();j=j.replace(/^["']|["']$/g,"").trim();const H=j.split(/[.!?\n]/)[0].trim(),G=H.length>80?H.slice(0,77)+"...":H;h({description:G})}else alert("Failed to generate description: "+(M.error||"Unknown error"))}catch(D){alert("Error generating description: "+D.message)}finally{f(!1)}}return s.jsxs("div",{className:"agent-editor",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"editor-header",children:[s.jsx(rr,{size:24,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:e.name,onChange:L=>P(L.target.value),placeholder:"Agent name",style:{borderColor:y?"var(--error)":void 0}}),y&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:y})]}),s.jsx("span",{className:"badge badge-info",children:e.type}),s.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[s.jsx(Bn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"editor-content",children:[s.jsxs(ci,{id:"basic",title:"Basic Info",icon:s.jsx(rr,{size:16}),expanded:l.has("basic"),onToggle:()=>C("basic"),children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Description"}),_&&N.instruction&&s.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:ne,disabled:p,title:"Generate description from instruction",children:p?s.jsxs(s.Fragment,{children:[s.jsx(Zt,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),s.jsx("input",{type:"text",value:e.description,onChange:L=>h({description:L.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),_&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Instruction"}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(!m),disabled:u||!N.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:B,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?s.jsxs(s.Fragment,{children:[s.jsx(Zt,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&s.jsxs("div",{className:"request-changes-box",children:[s.jsx("input",{type:"text",value:b,onChange:L=>T(L.target.value),placeholder:"Describe what changes you want...",onKeyDown:L=>{L.key==="Enter"&&b.trim()?$():L.key==="Escape"&&(x(!1),T(""))},autoFocus:!0}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:$,disabled:u||!b.trim(),children:"Apply"})]}),s.jsx(T2,{value:N.instruction,onChange:L=>h({instruction:L}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Output Key"}),s.jsxs("select",{value:N.output_key||"",onChange:L=>h({output_key:L.target.value||void 0}),children:[s.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(L=>s.jsx("option",{value:L.name,children:L.name},L.name))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Include Contents"}),s.jsxs("select",{value:N.include_contents,onChange:L=>h({include_contents:L.target.value}),children:[s.jsx("option",{value:"default",children:"Default"}),s.jsx("option",{value:"none",children:"None"})]})]})]}),s.jsxs("div",{className:"form-row",style:{gap:24},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:N.disallow_transfer_to_parent,onChange:L=>h({disallow_transfer_to_parent:L.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:N.disallow_transfer_to_peers,onChange:L=>h({disallow_transfer_to_peers:L.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Iterations"}),s.jsx("input",{type:"number",value:e.max_iterations||"",onChange:L=>h({max_iterations:parseInt(L.target.value)||void 0}),placeholder:"No limit"})]})})]}),_&&s.jsx(ci,{id:"model",title:"Model",icon:s.jsx(su,{size:16}),expanded:l.has("model"),onToggle:()=>C("model"),children:s.jsx(R2,{agent:N,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:L=>h({model:L})})}),_&&s.jsx(ci,{id:"tools",title:`Tools (${N.tools.length})`,icon:s.jsx(Kt,{size:16}),expanded:l.has("tools"),onToggle:()=>C("tools"),children:s.jsx(A2,{tools:N.tools,onAdd:k,onRemove:A,onUpdate:S,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:F,skillsets:t.skillsets||[]})}),"sub_agents"in e&&s.jsx(ci,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:s.jsx(ag,{size:16}),expanded:l.has("subagents"),onToggle:()=>C("subagents"),children:s.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(L=>{const D=t.agents.find(M=>M.id===L);return D?s.jsxs("div",{className:"sub-agent-chip",children:[D.name,s.jsx("button",{onClick:()=>E(L),children:s.jsx(Fe,{size:12})})]},L):null}),s.jsxs("select",{value:"",onChange:L=>{L.target.value&&v(L.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[s.jsx("option",{value:"",children:"Add agent..."}),F.filter(L=>!e.sub_agents.includes(L.id)).map(L=>s.jsx("option",{value:L.id,children:L.name},L.id))]})]})}),s.jsx(ci,{id:"callbacks",title:"Callbacks",icon:s.jsx(on,{size:16}),expanded:l.has("callbacks"),onToggle:()=>C("callbacks"),children:s.jsx(M2,{agent:e,onUpdate:h,customCallbacks:t.custom_callbacks||[],isLlmAgent:_})})]})]})}function ci({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-header",onClick:i,children:[r?s.jsx(Lt,{size:16}):s.jsx(At,{size:16}),s.jsxs("h4",{children:[n," ",t]})]}),r&&s.jsx("div",{className:"section-content",children:o})]})}function A2({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=w.useState(!1),[f,m]=w.useState({}),[x,b]=w.useState(""),T=Ct.useRef(null),y=Ct.useRef(null),[g,h]=w.useState(null),[P,C]=w.useState(new Set),_=(R,te)=>{if(!x.trim())return!0;const V=x.toLowerCase();return R.toLowerCase().includes(V)||((te==null?void 0:te.toLowerCase().includes(V))??!1)},N=i.filter(R=>_(R.name,R.description)),k=o.filter(R=>_(R.name,R.description)),A=a.filter(R=>_(R.name,R.description)),S=l.filter(R=>_(R.name,R.description)),v=c.filter(R=>_(R.name,R.description)),E=u.filter(R=>_(R.name,R.description));function F(){if(T.current){const R=T.current.getBoundingClientRect(),te=window.innerHeight,V=350,re=te-R.bottom-16,ce=R.top-16;if(re>=200||re>=ce){const I=Math.min(V,re);m({top:R.bottom+4,left:R.left,maxHeight:I})}else{const I=Math.min(V,ce);m({top:R.top-I-4,left:R.left,maxHeight:I})}}p(!0),b(""),setTimeout(()=>{var R;return(R=y.current)==null?void 0:R.focus()},50)}function B(){p(!1),b("")}function $(R){t({type:"builtin",name:R}),B()}async function ne(R){B();const te=R.tool_filter||[];if(h({server:R,enabledTools:new Set(te),availableTools:te.map(V=>({name:V,description:""})),isLoading:te.length===0,error:void 0}),te.length===0)try{const{testMcpServer:V}=await M0(async()=>{const{testMcpServer:ce}=await Promise.resolve().then(()=>o0);return{testMcpServer:ce}},void 0),re=await V({connection_type:R.connection_type,command:R.command,args:R.args,env:R.env,url:R.url,headers:R.headers,timeout:R.timeout||30});re.success?h(ce=>ce?{...ce,availableTools:re.tools,enabledTools:new Set(re.tools.map(I=>I.name)),isLoading:!1}:null):h(ce=>ce?{...ce,isLoading:!1,error:re.error||"Failed to connect to MCP server"}:null)}catch(V){h(re=>re?{...re,isLoading:!1,error:V.message}:null)}}function L(R){if(!g)return;const te=new Set(g.enabledTools);te.has(R)?te.delete(R):te.add(R),h({...g,enabledTools:te})}function D(){if(!g)return;const R=Array.from(g.enabledTools);t({type:"mcp",server:{...g.server,tool_filter:R}}),h(null)}function M(R){const te=new Set(P);te.has(R)?te.delete(R):te.add(R),C(te)}function j(R,te){const V=e[R];if(V.type!=="mcp"||!V.server)return;const re=V.server.tool_filter||[];let ce;re.includes(te)?ce=re.filter(I=>I!==te):ce=[...re,te],r(R,{...V,server:{...V.server,tool_filter:ce}})}function H(R){t({type:"function",name:R.name,module_path:R.module_path}),B()}function G(R){const te=c.find(V=>V.id===R);t({type:"agent",agent_id:R,name:te==null?void 0:te.name}),B()}function z(R){const te=u.find(V=>V.id===R);t({type:"skillset",skillset_id:R,name:te==null?void 0:te.name}),B()}function he(R){return o.find(te=>te.name===R)}return s.jsxs("div",{children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"tool-list",children:e.map((R,te)=>{var V;return R.type==="mcp"&&R.server?s.jsxs("div",{className:"mcp-tool-item",children:[s.jsxs("div",{className:"mcp-tool-header",onClick:()=>M(te),children:[P.has(te)?s.jsx(Lt,{size:14}):s.jsx(At,{size:14}),s.jsx(Kt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"mcp-tool-info",children:[s.jsx("div",{className:"mcp-tool-name",children:R.server.name}),s.jsx("div",{className:"mcp-tool-count",children:R.server.tool_filter===null||R.server.tool_filter===void 0?"all tools":`${R.server.tool_filter.length} tools enabled`})]}),s.jsx("button",{className:"delete-btn",onClick:re=>{re.stopPropagation(),n(te)},children:s.jsx(Fe,{size:14})})]}),P.has(te)&&s.jsx("div",{className:"mcp-tool-body",children:s.jsx("div",{className:"mcp-tool-list",children:(()=>{const re=he(R.server.name),ce=(re==null?void 0:re.tool_filter)||R.server.tool_filter||[],I=new Set(R.server.tool_filter||[]);return ce.map(K=>s.jsxs("label",{className:`mcp-tool-chip ${I.has(K)?"enabled":"disabled"}`,onClick:()=>j(te,K),children:[s.jsx("input",{type:"checkbox",checked:I.has(K),onChange:()=>{},style:{display:"none"}}),K]},K))})()})})]},te):R.type==="skillset"?s.jsxs("div",{className:"tool-item",children:[s.jsx(mn,{size:14,style:{color:"var(--accent)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:R.name||((V=u.find(re=>re.id===R.skillset_id))==null?void 0:V.name)||"SkillSet"}),s.jsx("div",{className:"tool-item-type",children:"skillset"})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(te),children:s.jsx(Fe,{size:14})})]},te):s.jsxs("div",{className:"tool-item",children:[s.jsx(Kt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:R.name||R.agent_id}),s.jsx("div",{className:"tool-item-type",children:R.type})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(te),children:s.jsx(Fe,{size:14})})]},te)})}),s.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[s.jsxs("button",{ref:T,className:"btn btn-secondary btn-sm",onClick:()=>d?B():F(),children:[s.jsx(Ke,{size:14}),"Add Tool"]}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"dropdown-backdrop",onClick:B}),s.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[s.jsx("div",{className:"dropdown-search",children:s.jsx("input",{ref:y,type:"text",placeholder:"Search tools...",value:x,onChange:R=>b(R.target.value),onKeyDown:R=>R.key==="Escape"&&B()})}),N.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Built-in Tools"}),N.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>$(R.name),children:[s.jsx("div",{className:"dropdown-item-name",children:R.name}),s.jsx("div",{className:"dropdown-item-desc",children:R.description})]},R.name))]}),k.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Known MCP Servers (",k.length,")"]}),k.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>ne(R),children:[s.jsxs("div",{className:"dropdown-item-name",children:[R.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:R.tool_filter===null||R.tool_filter===void 0?"all tools":`${R.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:R.description})]},`known-${R.name}`))]}),A.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Project MCP Servers (",A.length,")"]}),A.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>ne(R),children:[s.jsxs("div",{className:"dropdown-item-name",children:[R.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:R.tool_filter===null||R.tool_filter===void 0?"all tools":`${R.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:R.description||"Custom MCP server"})]},`project-${R.id||R.name}`))]}),S.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Custom Tools"}),S.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>H(R),children:[s.jsx("div",{className:"dropdown-item-name",children:R.name}),s.jsx("div",{className:"dropdown-item-desc",children:R.description})]},R.id))]}),v.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Agents as Tools"}),v.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>G(R.id),children:[s.jsx("div",{className:"dropdown-item-name",children:R.name}),s.jsx("div",{className:"dropdown-item-desc",children:R.type})]},R.id))]}),E.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["SkillSets (",E.length,")"]}),E.map(R=>s.jsxs("button",{className:"dropdown-item",onClick:()=>z(R.id),children:[s.jsxs("div",{className:"dropdown-item-name",children:[R.name,s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[R.entry_count||0," entries"]})]}),s.jsx("div",{className:"dropdown-item-desc",children:R.description||"Vector knowledge base"})]},R.id))]}),x.trim()&&N.length===0&&k.length===0&&A.length===0&&S.length===0&&v.length===0&&E.length===0&&s.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',x,'"']})]})]})]}),g&&s.jsx("div",{className:"mcp-config-dialog",children:s.jsxs("div",{className:"mcp-config-content",children:[s.jsxs("h3",{children:["Configure ",g.server.name]}),s.jsx("p",{children:g.server.description}),g.isLoading?s.jsxs("div",{className:"mcp-loading",children:[s.jsx("div",{className:"spinner"}),s.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):g.error?s.jsxs("div",{className:"mcp-error",children:[s.jsxs("p",{children:["⚠️ Failed to discover tools: ",g.error]}),s.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mcp-select-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>h({...g,enabledTools:new Set(g.availableTools.map(R=>R.name))}),children:["Select All (",g.availableTools.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>h({...g,enabledTools:new Set}),children:"Select None"})]}),s.jsx("div",{className:"mcp-tools-grid",children:g.availableTools.map(R=>s.jsxs("div",{className:"mcp-tool-row",title:R.description||R.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:g.enabledTools.has(R.name),onChange:()=>L(R.name)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:13,opacity:g.enabledTools.has(R.name)?1:.5,cursor:"pointer"},onClick:()=>L(R.name),children:R.name})]},R.name))})]}),s.jsxs("div",{className:"dialog-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>h(null),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:D,disabled:g.enabledTools.size===0,children:["Add ",g.enabledTools.size," Tools"]})]})]})})]})}function R2({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,m;const o=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!o,c=o||(()=>{if(!e.model)return n;const x=t.find(b=>{var T,y,g;return b.provider===((T=e.model)==null?void 0:T.provider)&&b.model_name===((y=e.model)==null?void 0:y.model_name)&&b.api_base===((g=e.model)==null?void 0:g.api_base)});return x==null?void 0:x.id})()||n||((m=t[0])==null?void 0:m.id);Ct.useEffect(()=>{var x,b,T,y,g;if(o){const h=t.find(P=>P.id===o);h&&(((x=e.model)==null?void 0:x.provider)!==h.provider||((b=e.model)==null?void 0:b.model_name)!==h.model_name||((T=e.model)==null?void 0:T.api_base)!==h.api_base||((y=e.model)==null?void 0:y.temperature)!==h.temperature||((g=e.model)==null?void 0:g.max_output_tokens)!==h.max_output_tokens)&&i({provider:h.provider,model_name:h.model_name,api_base:h.api_base,temperature:h.temperature,max_output_tokens:h.max_output_tokens,top_p:h.top_p,top_k:h.top_k,fallbacks:[],_appModelId:o})}},[o,t,e.model,i]);function u(x){const b=t.find(T=>T.id===x);b&&i({provider:b.provider,model_name:b.model_name,api_base:b.api_base,temperature:b.temperature,max_output_tokens:b.max_output_tokens,top_p:b.top_p,top_k:b.top_k,fallbacks:[],_appModelId:x})}function d(){var x;if(a){const b=n||((x=t[0])==null?void 0:x.id);b&&u(b)}else{const b=e.model;if(b){const{_appModelId:T,...y}=b;i(y)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(x){const{_appModelId:b,...T}=e.model||{};i({...T,...x})}return t.find(x=>x.id===c),t.find(x=>x.id===n),s.jsxs("div",{className:"model-selector",children:[s.jsx("style",{children:`
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
      `}),t.length>0&&s.jsxs("div",{className:"model-choice",children:[s.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Use App Model"}),s.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),s.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Custom"}),s.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?s.jsx("div",{className:"app-model-select",children:t.map(x=>s.jsx("div",{className:`app-model-item ${c===x.id?"selected":""}`,onClick:()=>u(x.id),children:s.jsxs("div",{className:"app-model-item-info",children:[s.jsxs("div",{className:"app-model-item-name",children:[x.name,x.id===n&&s.jsxs("span",{className:"default-badge",children:[s.jsx(og,{size:10,fill:"currentColor"}),"Default"]})]}),s.jsxs("div",{className:"app-model-item-details",children:[x.provider," / ",x.model_name,x.api_base&&` • ${x.api_base}`]})]})},x.id))}):t.length===0?s.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&s.jsx("div",{className:"custom-model-form",children:s.jsx(ug,{projectId:r,values:e.model||{},onChange:p})})]})}function M2({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],o=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],a=r?[...i,...o]:i;function l(u,d){const p=e[u]||[],f=n.find(m=>m.id===d);f&&t({[u]:[...p,{module_path:f.module_path}]})}function c(u,d){const p=e[u]||[];t({[u]:p.filter((f,m)=>m!==d)})}return s.jsx("div",{className:"callbacks-editor",children:a.map(({key:u,label:d})=>{const p=e[u]||[],f=n;return s.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:d}),f.length>0&&s.jsxs("select",{value:"",onChange:m=>{m.target.value&&(l(u,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[s.jsx("option",{value:"",children:"Add callback..."}),f.filter(m=>{const x=m.module_path;return!p.some(b=>b.module_path===x)}).map(m=>s.jsx("option",{value:m.id,children:m.name},m.id))]})]}),p.length===0?s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):s.jsx("div",{className:"callback-list",children:p.map((m,x)=>{const b=n.find(T=>T.module_path===m.module_path);return s.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[s.jsx("span",{style:{fontSize:"12px"},children:(b==null?void 0:b.name)||m.module_path}),s.jsx("button",{onClick:()=>c(u,x),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:s.jsx(Fe,{size:12})})]},x)})})]},u)})})}const Wa=[{type:"LlmAgent",label:"LLM Agent",icon:rr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:_0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:k0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Hl,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function O2(){return`agent_${Date.now().toString(36)}`}function I2(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function $2(e,t){const r={id:O2(),name:`New ${e}`,description:""},i=t?I2(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function D2({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:l}=at(),[c,u]=w.useState(new Set),[d,p]=w.useState(!1),[f,m]=w.useState(""),[x,b]=w.useState(new Map),[T,y]=w.useState(380),[g,h]=w.useState(!1),P=w.useRef(null),[C,_]=w.useState(null),N=w.useRef(null),[k,A]=w.useState(null),[S,v]=w.useState(null),E=w.useRef(null),F=w.useRef(null),B=w.useCallback(J=>{J.preventDefault(),h(!0)},[]);if(w.useEffect(()=>{const J=ie=>{if(!g)return;const me=Math.min(Math.max(200,ie.clientX),600);y(me)},X=()=>{h(!1)};return g&&(document.addEventListener("mousemove",J),document.addEventListener("mouseup",X),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",X),document.body.style.cursor="",document.body.style.userSelect=""}},[g]),w.useEffect(()=>{if(t){const J=t.agents.filter(X=>"sub_agents"in X&&X.sub_agents.length>0).map(X=>X.id);u(new Set(J))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;function $(){if(!f.trim()||!t)return;const J=`generating_${Date.now()}`,X=f;b(ie=>new Map(ie).set(J,X)),p(!1),m(""),Wh(t.id,X).then(ie=>{var me,je,ze,be;if(ie.success&&ie.config){const Ne=ie.config,Qe=[];if((me=Ne.tools)!=null&&me.builtin)for(const q of Ne.tools.builtin)Qe.push({type:"builtin",name:q});if((je=Ne.tools)!=null&&je.mcp)for(const q of Ne.tools.mcp){const ue=l.find(se=>se.name===q.server);ue&&Qe.push({type:"mcp",server:{...ue,tool_filter:q.tools}})}if((ze=Ne.tools)!=null&&ze.custom)for(const q of Ne.tools.custom){const ue=t.custom_tools.find(se=>se.name===q);ue&&Qe.push({type:"function",name:q,module_path:ue.module_path})}if((be=Ne.tools)!=null&&be.agents)for(const q of Ne.tools.agents){const ue=t.agents.find(se=>se.id===q);ue&&Qe.push({type:"agent",agent_id:q,name:ue.name})}const W=t.app.models||[],ae=W.find(q=>q.id===t.app.default_model_id)||W[0],O={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:Ne.name||"new_agent",description:Ne.description||"",instruction:Ne.instruction||"",model:ae?{provider:ae.provider,model_name:ae.model_name,api_base:ae.api_base,temperature:ae.temperature,max_output_tokens:ae.max_output_tokens,top_p:ae.top_p,top_k:ae.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:Qe,sub_agents:Ne.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(O),a(O.id),e==null||e(O.id)}else console.error("Failed to generate agent:",ie.error)}).catch(ie=>{console.error("Error generating agent:",ie)}).finally(()=>{b(ie=>{const me=new Map(ie);return me.delete(J),me})})}const ne=t.agents.find(J=>J.id===o);function L(J){a(J),e==null||e(J)}function D(J){if(!t)return;const X=t.app.models||[],ie=X.find(je=>je.id===t.app.default_model_id)||X[0],me=$2(J,ie);n(me),L(me.id)}function M(J,X){X.stopPropagation(),confirm("Delete this agent?")&&(r(J),o===J&&(e==null||e(null)))}function j(J){const X=new Set(c);X.has(J)?X.delete(J):X.add(J),u(X)}function H(J){if(!E.current||!N.current)return;const X=E.current.getBoundingClientRect(),ie=J.clientY-X.top,me=60,je=8;if(ie<me){const ze=Math.max(1,je*(1-ie/me));E.current.scrollTop-=ze}else if(ie>X.height-me){const ze=Math.max(1,je*(1-(X.height-ie)/me));E.current.scrollTop+=ze}}function G(J,X){J.dataTransfer.setData("text/plain",X),J.dataTransfer.effectAllowed="move",N.current=X,requestAnimationFrame(()=>_(X))}function z(){N.current=null,_(null),A(null),v(null),F.current&&(cancelAnimationFrame(F.current),F.current=null)}function he(J,X,ie){if(!t||(J.preventDefault(),J.stopPropagation(),!N.current))return;const je=t.agents.find(ze=>ze.id===X);!je||!("sub_agents"in je)||(J.dataTransfer.dropEffect="move",v({parentId:X,index:ie}),A(null))}function R(J,X,ie){if(!t)return;J.preventDefault(),J.stopPropagation();const me=J.dataTransfer.getData("text/plain");if(!me)return;const je=t.agents.find(be=>be.id===X);if(!je||!("sub_agents"in je))return;t.agents.forEach(be=>{"sub_agents"in be&&be.sub_agents.includes(me)&&i(be.id,{sub_agents:be.sub_agents.filter(Ne=>Ne!==me)})});const ze=[...je.sub_agents.filter(be=>be!==me)];ze.splice(ie,0,me),i(X,{sub_agents:ze}),u(be=>new Set([...be,X])),_(null),v(null)}function te(J,X,ie){if(!t)return;const me=N.current;if(J.preventDefault(),J.stopPropagation(),me===X)return;const je=t.agents.find(ze=>ze.id===me);je&&"sub_agents"in je&&ce(je,X)||(J.dataTransfer.dropEffect="move",A({agentId:X,type:ie}),v(null))}function V(J){const X=J.relatedTarget;(!X||!J.currentTarget.contains(X))&&A(null)}function re(J,X,ie){if(!t)return;J.preventDefault(),J.stopPropagation();const me=J.dataTransfer.getData("text/plain");if(!me||me===X)return;const je=t.agents.find(be=>be.id===X),ze=t.agents.find(be=>be.id===me);if(!(!je||!ze)){if(ie==="sub_agent")"sub_agents"in je&&(t.agents.forEach(be=>{"sub_agents"in be&&be.sub_agents.includes(me)&&i(be.id,{sub_agents:be.sub_agents.filter(Ne=>Ne!==me)})}),je.sub_agents.includes(me)||(i(X,{sub_agents:[...je.sub_agents,me]}),u(be=>new Set([...be,X]))));else if(ie==="tool"&&"tools"in je){const be=je;be.tools.some(Qe=>Qe.type==="agent"&&Qe.agent_id===me)||i(X,{tools:[...be.tools,{type:"agent",agent_id:me,name:ze.name}]})}_(null),A(null)}}function ce(J,X){if(!t||!("sub_agents"in J))return!1;if(J.sub_agents.includes(X))return!0;for(const ie of J.sub_agents){const me=t.agents.find(je=>je.id===ie);if(me&&ce(me,X))return!0}return!1}function I(J){const X=Wa.find(ie=>ie.type===J);return X?X.icon:rr}function K(J){const X=Wa.find(ie=>ie.type===J);return X?X.color:"#888"}function Q(J,X=0){return J.map(ie=>{const me=I(ie.type),je=K(ie.type),ze="sub_agents"in ie&&ie.sub_agents.length>0,be="sub_agents"in ie,Ne=ie.type==="LlmAgent",Qe=c.has(ie.id),W=C===ie.id,ae=(k==null?void 0:k.agentId)===ie.id&&(k==null?void 0:k.type)==="sub_agent",O=(k==null?void 0:k.agentId)===ie.id&&(k==null?void 0:k.type)==="tool",q=ze&&t?ie.sub_agents.map(se=>t.agents.find(we=>we.id===se)).filter(se=>se!==void 0):[],ue=C&&C!==ie.id&&(be||Ne);return s.jsxs("div",{className:"agent-tree-item",children:[s.jsxs("div",{className:`agent-item ${o===ie.id?"selected":""} ${W?"dragging":""} ${ue?"drop-target":""}`,onClick:()=>L(ie.id),style:{paddingLeft:12+X*20},draggable:!0,onDragStart:se=>G(se,ie.id),onDragEnd:z,onDragOver:se=>{ue&&(se.preventDefault(),se.stopPropagation())},children:[s.jsx("div",{className:"drag-handle",children:s.jsx(h0,{size:12})}),ze?s.jsx("button",{className:"expand-btn",onClick:se=>{se.stopPropagation(),j(ie.id)},children:Qe?s.jsx(Lt,{size:16}):s.jsx(At,{size:16})}):s.jsx("span",{style:{width:20}}),s.jsx("div",{className:"agent-icon",style:{background:je},children:s.jsx(me,{size:14})}),s.jsx("span",{className:"agent-name",children:ie.name}),s.jsx("button",{className:"delete-btn",onClick:se=>M(ie.id,se),children:s.jsx(Fe,{size:14})}),ue&&s.jsxs("div",{className:"drop-overlay",children:[be&&s.jsxs("div",{className:`drop-zone-overlay ${ae?"active":""}`,onDragOver:se=>te(se,ie.id,"sub_agent"),onDragLeave:V,onDrop:se=>re(se,ie.id,"sub_agent"),children:[s.jsx(ag,{size:12}),s.jsx("span",{children:"Sub-agent"})]}),Ne&&s.jsxs("div",{className:`drop-zone-overlay ${O?"active":""}`,onDragOver:se=>te(se,ie.id,"tool"),onDragLeave:V,onDrop:se=>re(se,ie.id,"tool"),children:[s.jsx(Kt,{size:12}),s.jsx("span",{children:"Tool"})]})]})]}),ze&&Qe&&s.jsxs("div",{className:"sub-agents",children:[C&&C!==ie.id&&s.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===ie.id&&(S==null?void 0:S.index)===0?"active":""}`,style:{marginLeft:12+(X+1)*20},onDragOver:se=>he(se,ie.id,0),onDragLeave:()=>v(null),onDrop:se=>R(se,ie.id,0)}),q.map((se,we)=>s.jsxs(Ct.Fragment,{children:[Q([se],X+1),C&&C!==ie.id&&C!==se.id&&s.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===ie.id&&(S==null?void 0:S.index)===we+1?"active":""}`,style:{marginLeft:12+(X+1)*20},onDragOver:Ze=>he(Ze,ie.id,we+1),onDragLeave:()=>v(null),onDrop:Ze=>R(Ze,ie.id,we+1)})]},se.id))]})]},ie.id)})}const Y=new Set(t.agents.flatMap(J=>"sub_agents"in J?J.sub_agents:[])),oe=t.agents.filter(J=>!Y.has(J.id));return s.jsxs("div",{className:"agents-panel",children:[s.jsx("style",{children:`
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
          height: 0px;
          margin: 0px 0;
          border-radius: 2px;
          background: transparent;
          transition: all 0.15s ease;
        }
        
        .insert-indicator:hover,
        .insert-indicator.active {
          background: var(--accent-primary);
          box-shadow: 0 0 8px rgba(124, 58, 237, 0.5);
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
      `}),s.jsxs("aside",{className:"agents-sidebar",style:{width:T},children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Agents (",t.agents.length,")",x.size>0&&s.jsxs("span",{className:"generating-badge",children:[s.jsx(Zt,{size:12,className:"spin"})," ",x.size]})]}),s.jsxs("div",{className:"header-buttons",children:[Wa.map(({type:J,icon:X,color:ie})=>s.jsx("button",{className:"quick-add-btn",style:{background:ie},onClick:()=>D(J),title:`Add ${J}`,children:s.jsx(X,{size:14})},J)),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:s.jsx(za,{size:14})})]})]}),s.jsx("div",{className:"agents-list",ref:E,onDragOver:H,children:t.agents.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(rr,{size:32}),s.jsx("p",{children:"No agents yet"})]}):Q(oe)})]}),s.jsx("div",{ref:P,className:`sidebar-resizer ${g?"resizing":""}`,onMouseDown:B}),s.jsx("div",{className:"agent-editor-area",children:ne?s.jsx(L2,{agent:ne}):s.jsxs("div",{className:"empty-state card",children:[s.jsx(rr,{size:48}),s.jsxs("p",{children:["Select an agent to edit",s.jsx("br",{}),"or create a new one"]})]})}),d&&s.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:s.jsxs("div",{className:"quick-setup-content",onClick:J=>J.stopPropagation(),children:[s.jsxs("h2",{children:[s.jsx(za,{size:20})," Quick Agent Setup"]}),s.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),s.jsxs("div",{className:"quick-setup-form",children:[s.jsx("textarea",{value:f,onChange:J=>m(J.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:J=>{J.key==="Enter"&&(J.metaKey||J.ctrlKey)&&f.trim()&&$()}}),s.jsxs("div",{className:"quick-setup-info",children:[s.jsx("strong",{children:"Available resources:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),s.jsxs("li",{children:[l.length," MCP servers"]}),s.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),s.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),s.jsxs("div",{className:"quick-setup-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:!f.trim(),children:[s.jsx(za,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var Su="\x1B[0m",Cu="\x1B[1m",nx=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",F2=e=>{let t=nx(e),n=`${Cu}[MONACOPILOT ERROR] ${t}${Su}`;return console.error(n),{message:t}},B2=(e,t)=>{console.warn(`${Cu}[MONACOPILOT WARN] ${e}${t?`
${nx(t)}`:""}${Su}`)},U2=(e,t,n)=>console.warn(`${Cu}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${Su}`),Co={report:F2,warn:B2,warnDeprecated:U2},Gp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},V2=100,W2=!0,rx="onIdle",H2=!0,q2=120,J2=400,K2=0,Nu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),Q2=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),G2=e=>e.getValue(),Y2=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},ix=class sx{constructor(){this.cache=new Y2(sx.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=Nu(n,r),a=o,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=o-1&&u<=l+1:c===i?u>=o-1:c===a?u<=l+1:!0}};ix.MAX_CACHE_SIZE=20;var X2=ix,Z2=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},eS=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),x=t.slice(-f);m===x&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},tS=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new eS}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,o),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,l=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},nS=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},rS=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:l=V2}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(b,T,y)=>{let g=b(e,t);return T?Gp(g,T,y):g},p=(b,T)=>!b||!T?b:b.map(({content:y,...g})=>({...g,content:Gp(y,T)})),f=d(Nu,u,{truncateDirection:"keepEnd"}),m=d(Q2,u,{truncateDirection:"keepStart"}),x=p(a,u);return{filename:r,language:i,technologies:o,relatedFiles:x,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},iS=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:o,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},sS=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,ui=e=>({items:e,enableForwardStability:!0}),sc=new X2,oS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=rx,enableCaching:l=W2,allowFollowUpCompletions:c=H2,onError:u,requestHandler:d}=o;if(l&&!i){let p=sc.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return ui(p)}if(r.isCancellationRequested||!c&&i)return ui([]);try{let p=iS(async x=>{var T,y;(T=o.onCompletionRequested)==null||T.call(o,x);let b;if(d)b=await d(x);else if(o.endpoint)b=await nS({endpoint:o.endpoint,...x});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(b.error)throw new Error(b.error);return(y=o.onCompletionRequestFinished)==null||y.call(o,x,b),b},{onTyping:q2,onIdle:J2,onDemand:K2}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=rS({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let x=new Z2(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),b=new tS(e);return l&&sc.add({completion:x,range:b.computeCacheRange(n,x),textBeforeCursor:Nu(n,t)}),ui([{insertText:x,range:b.computeInsertionRange(n,x,t)}])}}catch(p){if(sS(p))return ui([]);u?u(p):Co.warn("Cannot provide completion",p)}return ui([])},Eu=new WeakMap,Zo=e=>Eu.get(e),aS=(e,t)=>{Eu.set(e,t)},Yp=e=>{Eu.delete(e)},lS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),cS=(e,t)=>{let n=Zo(e);!n||!n.options||(n.options={...n.options,...t})},uS=(e,t,n)=>{let r=Zo(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:G2(t),position:o,triggerType:c.trigger??rx})))return oS({monaco:e,mdl:i,pos:o,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,o,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,o.range))},freeInlineCompletions:()=>{}}):null},dS={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},pS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(dS).some(t=>t(this.monaco,e))}},fS=(e,t,n,r)=>{let i=new pS(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},ox=(e,t,n)=>{let r=[];aS(t,lS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Zo(t);if(!i)return Co.warn("Completion is not registered properly. State not found."),hS();let o=uS(e,t,n);o&&r.push(o);let a=fS(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();sc.clear(),Yp(t)},trigger:()=>mS(t),updateOptions:l=>{cS(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Co.report(i),{deregister:()=>{for(let o of r)o.dispose();Yp(t)},trigger:()=>{},updateOptions:()=>{}}}},mS=e=>{let t=Zo(e);if(!t){Co.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},hS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function gS(){return`tool_${Date.now().toString(36)}`}function xS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const yS=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function vS({onSelectTool:e}){var Qe;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=at(),[d,p]=w.useState(""),[f,m]=w.useState(null),[x,b]=w.useState("tools"),[T,y]=w.useState(null),[g,h]=w.useState(""),[P,C]=w.useState(!1),[_,N]=w.useState(null),[k,A]=w.useState(!1),[S,v]=w.useState(!1),[E,F]=w.useState(null),[B,$]=w.useState(null),[ne,L]=w.useState({}),[D,M]=w.useState("");if(!t)return null;const j=t.mcp_servers||[],H=t.custom_tools.find(W=>W.id===a),G=j.find(W=>W.name===T),z=new Set(j.map(W=>W.name));u.filter(W=>!z.has(W.name));function he(W){l(W),e==null||e(W)}w.useEffect(()=>{H&&(p(H.code),$(null))},[a]),w.useEffect(()=>{G&&(h(JSON.stringify(G,null,2)),C(!1))},[T]),w.useEffect(()=>{if(!t)return;const W=R(t.mcp_servers||[]);M(JSON.stringify(W,null,2))},[t==null?void 0:t.mcp_servers]);function R(W){const ae={};for(const O of W){const q={};O.connection_type==="stdio"?(q.command=O.command||"",q.args=O.args||[],Object.keys(O.env||{}).length>0&&(q.env=O.env)):O.connection_type==="sse"&&(q.url=O.url||"",Object.keys(O.headers||{}).length>0&&(q.headers=O.headers)),O.timeout&&O.timeout!==30&&(q.timeout=O.timeout),O.tool_filter&&(q.tool_filter=O.tool_filter),O.tool_name_prefix&&(q.tool_name_prefix=O.tool_name_prefix),ae[O.name]=q}return{mcpServers:ae}}function te(W){const ae=[];for(const[O,q]of Object.entries(W.mcpServers||{})){const ue={name:O,description:q.description||"",connection_type:q.url?"sse":"stdio",command:q.command,args:q.args||[],env:q.env||{},url:q.url,headers:q.headers||{},timeout:q.timeout||30,tool_filter:q.tool_filter||null,tool_name_prefix:q.tool_name_prefix};ae.push(ue)}return ae}function V(W){W!==void 0&&M(W)}function re(){try{const W=JSON.parse(D),ae=te(W);n({mcp_servers:ae})}catch(W){alert("Invalid JSON: "+W.message)}}async function ce(W){const ae=j.find(O=>O.name===W);if(ae){L(O=>({...O,[W]:"testing"}));try{const O=await Wl({connection_type:ae.connection_type,command:ae.command,args:ae.args,env:ae.env,url:ae.url,headers:ae.headers,timeout:ae.timeout});L(q=>({...q,[W]:O.success?"connected":"error"}))}catch{L(q=>({...q,[W]:"error"}))}}}async function I(){for(const W of j)await ce(W.name)}function K(){const W=gS();r({id:W,name:"new_tool",description:"",module_path:"tools.custom",code:yS,state_keys_used:[]}),he(W)}function Q(W,ae){ae.stopPropagation(),confirm("Delete this tool?")&&(o(W),a===W&&(e==null||e(null)))}function Y(W){H&&(W.name!==void 0&&(W.name===""||xS(W.name)?$(null):$("Name can only contain letters, numbers, and underscores")),i(H.id,W))}function oe(W){W!==void 0&&H&&(p(W),Y({code:W}))}async function J(){if(H){A(!0);try{const W=await Hh(t.id,H.name,H.description,H.state_keys_used);W.success&&W.code?(p(W.code),Y({code:W.code})):(console.error("Failed to generate tool code:",W.error),alert("Failed to generate tool code: "+(W.error||"Unknown error")))}catch(W){console.error("Error generating tool code:",W),alert("Error generating tool code: "+W.message)}finally{A(!1)}}}const X=w.useRef(null),ie=w.useCallback((W,ae)=>{if(X.current&&typeof X.current=="function")try{X.current()}catch{}try{const O=ox(ae,W,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof O=="function"?X.current=O:X.current=null}catch{X.current=null}},[]);w.useEffect(()=>()=>{if(X.current&&typeof X.current=="function")try{X.current()}catch{}},[]);function me(W){const ae={...W};n({mcp_servers:[...j,ae]}),y(ae.name),N(null)}function je(W){W!==void 0&&(h(W),C(W!==JSON.stringify(G,null,2)))}function ze(){if(G)try{const W=JSON.parse(g),ae=G.name,O=j.map(q=>q.name===ae?W:q);n({mcp_servers:O}),y(W.name),C(!1)}catch(W){alert("Invalid JSON: "+W.message)}}async function be(){v(!0),F(null);try{const W=JSON.parse(g),ae=await Wl({connection_type:W.connection_type,command:W.command,args:W.args,env:W.env,url:W.url,headers:W.headers,timeout:W.timeout||30});if(F(ae),ae.success&&ae.tools.length>0){const O={...W,tool_filter:ae.tools.map(q=>q.name)};h(JSON.stringify(O,null,2)),C(!0)}}catch(W){F({success:!1,tools:[],error:W.message})}finally{v(!1)}}const Ne={};return t.custom_tools.forEach(W=>{const ae=W.module_path||"tools";Ne[ae]||(Ne[ae]=[]),Ne[ae].push(W)}),s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
        
        .mcp-server-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          margin-bottom: 6px;
          transition: all 0.15s ease;
        }
        
        .mcp-server-item:hover {
          background: var(--bg-primary);
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
      `}),s.jsxs("aside",{className:"tools-sidebar",children:[s.jsxs("div",{className:"sidebar-tabs",children:[s.jsxs("button",{className:`sidebar-tab ${x==="tools"?"active":""}`,onClick:()=>b("tools"),children:[s.jsx(Kt,{size:14}),"Tools"]}),s.jsxs("button",{className:`sidebar-tab ${x==="mcp"?"active":""}`,onClick:()=>b("mcp"),children:[s.jsx(mr,{size:14}),"MCP"]})]}),x==="tools"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:K,children:[s.jsx(Ke,{size:14}),"New"]})]}),s.jsxs("div",{className:"tools-tree",children:[c.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(y0,{size:14}),"Built-in Tools"]}),c.map(W=>s.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===W.name?"selected":""}`,onClick:()=>{m(W),he(null),y(null)},children:[s.jsx(ql,{size:14}),s.jsx("span",{className:"tool-name",children:W.name})]},W.name))]}),t.custom_tools.length===0&&c.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(on,{size:32}),s.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(Ne).map(([W,ae])=>s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(m0,{size:14}),W]}),ae.map(O=>s.jsxs("div",{className:`tool-item ${a===O.id?"selected":""}`,onClick:()=>{he(O.id),m(null),y(null)},children:[s.jsx(Kt,{size:14}),s.jsx("span",{className:"tool-name",children:O.name}),s.jsx("button",{className:"delete-btn",onClick:q=>Q(O.id,q),children:s.jsx(Fe,{size:14})})]},O.id))]},W))]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["MCP Servers (",j.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:I,title:"Test all connections",children:s.jsx(Zt,{size:14})})]}),s.jsx("div",{className:"mcp-servers-list",children:j.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(mr,{size:32}),s.jsx("p",{children:"No MCP servers configured"}),s.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):j.map(W=>{const ae=ne[W.name]||"unknown";return s.jsxs("div",{className:"mcp-server-item",children:[s.jsxs("div",{className:"mcp-server-info",children:[s.jsx(mr,{size:14}),s.jsx("span",{className:"mcp-server-name",children:W.name}),s.jsxs("span",{className:`mcp-status-badge ${ae}`,children:[ae==="testing"?s.jsx(Zt,{size:10,className:"spin"}):null,ae==="unknown"&&"●",ae==="connected"&&"●",ae==="error"&&"●"]})]}),s.jsxs("div",{className:"mcp-server-actions",children:[s.jsx("span",{className:"mcp-server-type",children:W.connection_type}),s.jsx("button",{className:"btn btn-sm",onClick:()=>ce(W.name),disabled:ae==="testing",title:"Test connection",children:ae==="testing"?s.jsx(Zt,{size:12,className:"spin"}):s.jsx(Zt,{size:12})})]})]},W.name)})})]})]}),s.jsx("div",{className:"tool-editor",children:f?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(ql,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),s.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),s.jsxs("div",{className:"builtin-tool-info",children:[s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:f.description||"No description available."})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Usage"}),s.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),s.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Note"}),s.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):H?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Kt,{size:20,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:H.name,onChange:W=>Y({name:W.target.value}),placeholder:"Tool name",style:{borderColor:B?"var(--error)":void 0}}),B&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:B})]})]}),s.jsxs("div",{className:"editor-meta",children:[s.jsxs("div",{className:"meta-field grow",children:[s.jsx("label",{children:"Description"}),s.jsx("input",{type:"text",value:H.description,onChange:W=>Y({description:W.target.value}),placeholder:"What does this tool do?"})]}),s.jsxs("div",{className:"meta-field",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:H.module_path,onChange:W=>Y({module_path:W.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:J,disabled:k||!H.name||!H.description,title:!H.name||!H.description?"Add a name and description first":"Generate code using AI",children:k?s.jsxs(s.Fragment,{children:[s.jsx(Zt,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(lu,{size:14}),"Write Tool"]})}),s.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),s.jsx("div",{className:"code-editor",children:s.jsx($t,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:oe,onMount:ie,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),s.jsxs("div",{className:"state-keys-panel",children:[s.jsxs("h4",{children:[s.jsx(ou,{size:14})," State Keys Used"]}),s.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(W=>{const ae=H.state_keys_used.includes(W.name);return s.jsxs("label",{className:`state-key-chip ${ae?"selected":""}`,title:W.description,children:[s.jsx("input",{type:"checkbox",checked:ae,onChange:O=>{const q=O.target.checked?[...H.state_keys_used,W.name]:H.state_keys_used.filter(ue=>ue!==W.name);Y({state_keys_used:q})}}),W.name,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",W.type,")"]})]},W.name)})})]})]}):_?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(mr,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:_.name}),s.jsx("span",{className:"badge badge-info",children:_.connection_type}),s.jsx("span",{className:"badge badge-muted",children:"Template"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>me(_),children:[s.jsx(Ke,{size:14}),"Add to Project"]})]}),s.jsxs("div",{className:"known-server-preview",children:[s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:_.description})]}),s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Command"}),s.jsxs("code",{children:[_.command," ",(Qe=_.args)==null?void 0:Qe.join(" ")]})]}),_.env&&Object.keys(_.env).length>0&&s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Required Environment Variables"}),s.jsx("div",{className:"env-vars",children:Object.entries(_.env).map(([W,ae])=>s.jsxs("div",{className:"env-var",children:[s.jsx("code",{children:W}),ae?s.jsx("span",{className:"env-value",children:ae}):s.jsx("span",{className:"env-required",children:"Required"})]},W))})]}),_.tool_filter&&_.tool_filter.length>0&&s.jsxs("div",{className:"preview-section",children:[s.jsxs("h4",{children:["Available Tools (",_.tool_filter.length,")"]}),s.jsx("div",{className:"tool-badges",children:_.tool_filter.map(W=>s.jsx("span",{className:"tool-badge",children:W},W))})]}),s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Configuration Preview"}),s.jsx("pre",{className:"config-preview",children:JSON.stringify(_,null,2)})]})]})]}):G?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(mr,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:G.name}),s.jsx("span",{className:"badge badge-info",children:G.connection_type}),P&&s.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:be,disabled:S,title:"Test connection and discover available tools",children:[S?s.jsx(Zt,{size:14,className:"spin"}):s.jsx(ng,{size:14}),S?"Testing...":"Test Connection"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ze,disabled:!P,children:[s.jsx(jo,{size:14}),"Save"]})]}),E&&s.jsx("div",{className:`mcp-test-result ${E.success?"success":"error"}`,children:E.success?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",E.tools.length," tools"]}),E.tools.length>0&&s.jsxs("div",{className:"test-result-tools",children:[s.jsx("strong",{children:"Available tools:"}),s.jsx("ul",{children:E.tools.map(W=>s.jsxs("li",{children:[s.jsx("code",{children:W.name}),W.description&&s.jsxs("span",{children:[" — ",W.description]})]},W.name))}),s.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),s.jsx("div",{className:"test-result-error",children:E.error})]})}),s.jsx("div",{className:"mcp-info",children:s.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),s.jsx("div",{className:"code-editor",children:s.jsx($t,{height:"100%",language:"json",theme:"vs-dark",value:g,onChange:je,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),s.jsxs("div",{className:"mcp-help",children:[s.jsx("h4",{children:"Schema Reference"}),s.jsxs("div",{className:"schema-fields",children:[s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"name"}),s.jsx("span",{children:"Unique identifier for this server"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"description"}),s.jsx("span",{children:"Human-readable description"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"connection_type"}),s.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"command"}),s.jsx("span",{children:"Command to run (for stdio)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"args"}),s.jsx("span",{children:"Array of command arguments"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"env"}),s.jsx("span",{children:"Environment variables object"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"url"}),s.jsx("span",{children:"Server URL (for sse/http)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"tool_filter"}),s.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):x==="mcp"?s.jsxs("div",{className:"mcp-json-editor",children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(mr,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),s.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:re,children:[s.jsx(jo,{size:14}),"Apply Changes"]})]}),s.jsx("div",{className:"mcp-json-info",children:s.jsxs("p",{children:["Configure your MCP servers using the standard ",s.jsx("code",{children:"mcp.json"}),' format. Changes are applied when you click "Apply Changes".']})}),s.jsx("div",{className:"editor-content",style:{flex:1},children:s.jsx($t,{height:"100%",defaultLanguage:"json",value:D,onChange:V,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):s.jsxs("div",{className:"empty-state",children:[s.jsx(on,{size:48}),s.jsxs("p",{children:["Select a tool to view",s.jsx("br",{}),"or create a new custom tool"]})]})})]})}function bS(){return`callback_${Date.now().toString(36)}`}function Xp(e){return/^[a-zA-Z0-9_]+$/.test(e)}function ax(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return ax("before_agent")}}function kS({onSelectCallback:e}){var k,A;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=at(),[a,l]=w.useState(""),[c,u]=w.useState(null),[d,p]=w.useState(null),[f,m]=w.useState(!1),x=w.useRef(null);if(!t)return null;const b=t.custom_callbacks||[],T=b.find(S=>S.id===c);function y(S){u(S),e==null||e(S)}w.useEffect(()=>{T?(l(T.code),p(null)):l("")},[c,T]);function g(){const S=bS(),v={id:S,name:"new_callback",description:"",module_path:"callbacks.custom",code:ax("before_agent"),state_keys_used:[]};r(v),y(S)}function h(S,v){v.stopPropagation(),confirm("Delete this callback?")&&(o(S),c===S&&(e==null||e(null),u(null),l("")))}function P(){if(!c)return;const S=b.find(F=>F.id===c);if(!S)return;const v=S.name.trim();if(!v){alert("Please enter a name");return}if(!Xp(v)){p("Name must contain only alphanumeric characters and underscores");return}if(b.find(F=>F.name===v&&F.id!==S.id)){p("A callback with this name already exists");return}i(S.id,{code:a,name:v,description:S.description,module_path:S.module_path,state_keys_used:S.state_keys_used}),p(null)}function C(S,v){x.current=v;try{ox(v,{endpoint:"/api/code-completion",language:"python"})}catch(E){console.warn("Failed to register Monacopilot completion:",E)}}async function _(){if(T){m(!0);try{let S="before_agent";const v=T.name.toLowerCase(),E=T.description.toLowerCase();v.includes("after_agent")||E.includes("after agent")?S="after_agent":v.includes("before_model")||E.includes("before model")?S="before_model":v.includes("after_model")||E.includes("after model")?S="after_model":v.includes("before_tool")||E.includes("before tool")?S="before_tool":v.includes("after_tool")||E.includes("after tool")?S="after_tool":(v.includes("before_agent")||E.includes("before agent"))&&(S="before_agent");const F=await qh(t.id,T.name,T.description,S,T.state_keys_used);F.success&&F.code?(l(F.code),i(T.id,{code:F.code})):(console.error("Failed to generate callback code:",F.error),alert("Failed to generate callback code: "+(F.error||"Unknown error")))}catch(S){console.error("Error generating callback code:",S),alert("Error generating callback code: "+S.message)}finally{m(!1)}}}const N=((A=(k=t.app)==null?void 0:k.state_keys)==null?void 0:A.map(S=>S.name))||[];return s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tools-sidebar",children:[s.jsxs("div",{className:"tools-sidebar-header",children:[s.jsx("h3",{children:"Callbacks"}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,title:"Add Callback",children:s.jsx(Ke,{size:16})})]}),s.jsx("div",{className:"tools-list",children:b.length===0?s.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):b.map(S=>s.jsxs("div",{className:`tool-item ${c===S.id?"selected":""}`,onClick:()=>y(S.id),children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{className:"tool-item-name",children:S.name}),S.description&&s.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:S.description})]}),s.jsx("div",{className:"tool-item-actions",children:s.jsx("button",{className:"btn btn-icon btn-sm",onClick:v=>h(S.id,v),title:"Delete",children:s.jsx(Fe,{size:14})})})]},S.id))})]}),s.jsx("div",{className:"tools-editor",children:T?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tools-editor-header",children:[s.jsx("h3",{children:"Edit Callback"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:P,children:[s.jsx(jo,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),s.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:T.name,onChange:S=>{const v=S.target.value;i(T.id,{name:v}),d&&Xp(v)&&p(null)},className:d?"error":""}),d&&s.jsx("div",{className:"error-message",children:d})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:T.description,onChange:S=>i(T.id,{description:S.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:T.module_path,onChange:S=>i(T.id,{module_path:S.target.value}),placeholder:"callbacks.custom"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"State Keys Used"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:N.map(S=>{const v=T.state_keys_used.includes(S);return s.jsxs("button",{type:"button",className:`btn btn-sm ${v?"btn-primary":"btn-secondary"}`,onClick:()=>{const E=v?T.state_keys_used.filter(F=>F!==S):[...T.state_keys_used,S];i(T.id,{state_keys_used:E})},children:[s.jsx(ou,{size:12,style:{marginRight:"4px"}}),S]},S)})}),N.length===0&&s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{children:"Code"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:_,disabled:f||!T.name,title:T.name?"Generate code using AI":"Add a name first",children:f?s.jsxs(s.Fragment,{children:[s.jsx(Zt,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(lu,{size:14}),"Generate"]})})]}),s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),s.jsx("div",{className:"code-editor-container",children:s.jsx($t,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:S=>l(S||""),onMount:C,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):s.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const Zp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},jS={agent_start:Hl,agent_end:Hl,tool_call:Kt,tool_result:Kt,model_call:su,model_response:ko,state_change:mn,transfer:cg,callback_start:on,callback_end:on};function wS(e){var t,n,r,i,o,a,l,c,u,d,p,f,m,x,b,T,y,g,h,P,C;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const N=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([M,j])=>{const H=j!=null?JSON.stringify(j):"null";return`${M}=${H.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${N.slice(0,60)}${N.length>60?"...":""})`;case"tool_result":const k=(i=e.data)==null?void 0:i.result;let A="";if((a=(o=k==null?void 0:k.content)==null?void 0:o[0])!=null&&a.text)A=String(k.content[0].text).slice(0,60);else if(typeof k=="string")A=k.slice(0,60);else if(k!=null){const M=JSON.stringify(k);A=M?M.slice(0,60):""}else A="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${A}${A.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const S=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],v=S.find(M=>(M==null?void 0:M.type)==="function_call");if(v)return`LLM_RSP → ${v.name||"unknown"}()`;const E=S.find(M=>(M==null?void 0:M.type)==="text");if(E!=null&&E.text){const M=String(E.text);return`LLM_RSP "${M.slice(0,50)}${M.length>50?"...":""}"`}return`LLM_RSP (${((x=e.data)==null?void 0:x.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((b=e.data)==null?void 0:b.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((T=e.data)==null?void 0:T.target)||"unknown"}`;case"callback_start":const B=((y=e.data)==null?void 0:y.callback_name)||"unknown",$=((g=e.data)==null?void 0:g.callback_type)||"";return`CALLBACK START ${$?`[${$}]`:""} ${B}`;case"callback_end":const ne=((h=e.data)==null?void 0:h.callback_name)||"unknown",L=((P=e.data)==null?void 0:P.callback_type)||"",D=(C=e.data)!=null&&C.error?" [ERROR]":"";return`CALLBACK END ${L?`[${L}]`:""} ${ne}${D}`;default:return e.event_type.toUpperCase()}}function _S(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function SS({event:e}){var o,a,l,c,u,d,p,f,m,x,b,T,y,g,h,P;const[t,n]=w.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=C=>{const _=new Set(t);_.has(C)?_.delete(C):_.add(C),n(_)},i=(C,_=0,N=!1)=>{const k="  ".repeat(_),A="  ".repeat(_+1);if(C===null)return s.jsx("span",{className:"json-null",children:"null"});if(C===void 0)return s.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof C=="boolean")return s.jsx("span",{className:"json-boolean",children:C.toString()});if(typeof C=="number")return s.jsx("span",{className:"json-number",children:C});if(typeof C=="string"){const S=C.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return S.length>300&&_>0?s.jsxs("span",{className:"json-string",children:['"',S.slice(0,300),'..." ',s.jsxs("span",{className:"json-truncated",children:["(",C.length," chars)"]})]}):s.jsxs("span",{className:"json-string",children:['"',S,'"']})}if(Array.isArray(C))return C.length===0?s.jsx("span",{className:"json-bracket",children:"[]"}):C.every(v=>v===null||typeof v!="object")&&C.length<=3?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"["}),C.map((v,E)=>s.jsxs("span",{children:[i(v,_+1,!0),E<C.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},E)),s.jsx("span",{className:"json-bracket",children:"]"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"["}),C.map((v,E)=>s.jsxs("span",{children:[`
`+A,i(v,_+1),E<C.length-1&&s.jsx("span",{className:"json-comma",children:","})]},E)),`
`+k,s.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof C=="object"){const S=Object.entries(C);return S.length===0?s.jsx("span",{className:"json-bracket",children:"{}"}):S.length<=2&&S.every(([,E])=>E===null||typeof E!="object")&&N?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"{"}),S.map(([E,F],B)=>s.jsxs("span",{children:[s.jsxs("span",{className:"json-key",children:['"',E,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(F,_+1,!0),B<S.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},E)),s.jsx("span",{className:"json-bracket",children:"}"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"{"}),S.map(([E,F],B)=>s.jsxs("span",{children:[`
`+A,s.jsxs("span",{className:"json-key",children:['"',E,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(F,_+1),B<S.length-1&&s.jsx("span",{className:"json-comma",children:","})]},E)),`
`+k,s.jsx("span",{className:"json-bracket",children:"}"})]})}return String(C)};return s.jsxs("div",{className:"event-detail",children:[s.jsxs("div",{className:"detail-header",children:[s.jsx("span",{className:"detail-type",children:e.event_type}),s.jsx("span",{className:"detail-agent",children:e.agent_name}),s.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?s.jsx(Lt,{size:12}):s.jsx(At,{size:12}),s.jsx("span",{children:"Event Data"})]}),t.has("data")&&s.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?s.jsx(Lt,{size:12}):s.jsx(At,{size:12}),s.jsx("span",{children:"Instruction"}),s.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?s.jsx(Lt,{size:12}):s.jsx(At,{size:12}),s.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&s.jsx("div",{className:"section-content",children:e.data.contents.map((C,_)=>{var N;return s.jsxs("div",{className:"message-item",children:[s.jsx("span",{className:`message-role ${C.role}`,children:C.role}),s.jsx("div",{className:"message-parts",children:(N=C.parts)==null?void 0:N.map((k,A)=>s.jsxs("div",{className:"message-part",children:[k.text&&s.jsx("pre",{children:k.text}),k.function_call&&s.jsxs("div",{className:"function-call",children:[s.jsx("strong",{children:k.function_call.name}),s.jsx("pre",{children:JSON.stringify(k.function_call.args,null,2)})]}),k.function_response&&s.jsxs("div",{className:"function-response",children:[s.jsx("strong",{children:k.function_response.name}),s.jsx("pre",{children:JSON.stringify(k.function_response.response,null,2)})]})]},A))})]},_)})})]}),e.event_type==="tool_result"&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?s.jsx(Lt,{size:12}):s.jsx(At,{size:12}),s.jsx("span",{children:"Tool Result"})]}),t.has("result")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"result-content",children:((d=(u=(c=(l=e.data)==null?void 0:l.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?s.jsx(Lt,{size:12}):s.jsx(At,{size:12}),s.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&s.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&s.jsx("div",{className:"section-content",children:e.data.parts.map((C,_)=>s.jsxs("div",{className:"response-part",children:[C.type==="text"&&C.text&&s.jsx("pre",{className:"response-text",children:C.text}),C.type==="function_call"&&s.jsxs("div",{className:"function-call",children:[s.jsxs("strong",{children:["→ ",C.name,"()"]}),C.args&&Object.keys(C.args).length>0&&s.jsx("pre",{children:JSON.stringify(C.args,null,2)})]}),C.thought&&s.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},_))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?s.jsx(Lt,{size:12}):s.jsx(At,{size:12}),s.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&s.jsxs("div",{className:"section-content",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Name:"})," ",((x=e.data)==null?void 0:x.callback_name)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Type:"})," ",((b=e.data)==null?void 0:b.callback_type)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Module Path:"})," ",((T=e.data)==null?void 0:T.module_path)||"unknown"]}),((y=e.data)==null?void 0:y.error)&&s.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Error:"})," ",e.data.error]}),((g=e.data)==null?void 0:g.error_type)&&s.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[s.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((h=e.data)==null?void 0:h.stack_trace)&&s.jsxs("div",{style:{marginTop:"8px"},children:[s.jsx("strong",{children:"Stack Trace:"}),s.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((P=e.data)==null?void 0:P.state_delta)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?s.jsx(Lt,{size:12}):s.jsx(At,{size:12}),s.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&s.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([C,_])=>s.jsxs("div",{className:"state-delta-item",children:[s.jsx("div",{className:"state-delta-key",children:C}),s.jsx("pre",{className:"state-delta-value",children:typeof _=="string"?_:JSON.stringify(_,null,2)})]},C))})]})]})}function CS({content:e,title:t,onClose:n}){return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:t}),s.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),s.jsx("div",{className:"modal-body markdown-content",children:s.jsx(tx,{children:e})})]}),s.jsx("style",{children:`
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
      `})]})}function NS({events:e,selectedEventIndex:t,project:n}){const[r,i]=w.useState(null),o=w.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var x;l[f]={...l[f],value:m,timestamp:d.timestamp,defined:((x=l[f])==null?void 0:x.defined)??!1}})}),l},[e,t,n]),a=Object.entries(o);return s.jsxs(s.Fragment,{children:[r&&s.jsx(CS,{content:r.content,title:r.title,onClose:()=>i(null)}),s.jsxs("div",{className:"state-snapshot",children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?s.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>s.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[s.jsxs("div",{className:"state-key",children:[l,f&&s.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),s.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&s.jsx("div",{className:"state-desc",children:p}),u&&s.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function Ha(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function ef(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(o=o[l[1]]),o=o[parseInt(l[2])]):o=o[a]}return o==null?"[No match]":typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function ES({project:e,selectedEventIndex:t}){var te;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:a}=at(),[l,c]=w.useState(!1),[u,d]=w.useState(null),[p,f]=w.useState({}),[m,x]=w.useState(new Set),[b,T]=w.useState(""),[y,g]=w.useState(""),[h,P]=w.useState({}),[C,_]=w.useState(""),[N,k]=w.useState([]),[A,S]=w.useState(null),[v,E]=w.useState(null),[F,B]=w.useState(!1);w.useEffect(()=>{iu().then(k).catch(console.error)},[]);const $=w.useMemo(()=>{const V=e.mcp_servers||[],re=new Set(V.map(I=>I.name)),ce=N.filter(I=>!re.has(I.name));return[...V,...ce]},[e.mcp_servers,N]),ne=w.useCallback(async V=>{if(!(p[V]||m.has(V))){x(re=>new Set([...re,V]));try{const re=await Se(`/projects/${e.id}/mcp-servers/${encodeURIComponent(V)}/test-connection`,{method:"POST"});re.success&&f(ce=>({...ce,[V]:re.tools}))}catch(re){console.error("Failed to load tools:",re)}finally{x(re=>{const ce=new Set(re);return ce.delete(V),ce})}}},[e.id,p,m]);w.useEffect(()=>{var I;if(u)return;if(!b||!y){P({});return}const re=(p[b]||[]).find(K=>K.name===y);if(!((I=re==null?void 0:re.parameters)!=null&&I.properties)){P({});return}const ce={};Object.entries(re.parameters.properties).forEach(([K,Q])=>{Q.type==="string"?ce[K]=Q.default||"":Q.type==="number"||Q.type==="integer"?ce[K]=Q.default||0:Q.type==="boolean"?ce[K]=Q.default||!1:ce[K]=Q.default||null}),P(ce)},[b,y,p,u]);const L=()=>{d(null),T(""),g(""),P({}),_(""),S(null),E(null),c(!0)},D=V=>{if(d(V.id),T(V.serverName),g(V.toolName),P({...V.args}),_(V.transform||""),V.result){const{text:re}=Ha(V.result);S(re),E(null)}else S(null),E(null);p[V.serverName]||ne(V.serverName),c(!0)},M=async()=>{if(!(!b||!y)){B(!0),E(null);try{const V=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:b,tool_name:y,arguments:h})}),{text:re,isError:ce}=Ha(V);ce?(E(re),S(null)):(S(re),E(null))}catch(V){E(String(V)),S(null)}finally{B(!1)}}},j=w.useMemo(()=>A?!C||!C.trim()?A:ef(A,C):null,[A,C]),H=()=>{if(!(!b||!y)){if(u){r(u,{serverName:b,toolName:y,args:{...h},transform:C||void 0});const V=n.find(re=>re.id===u);V&&z({...V,serverName:b,toolName:y,args:h,transform:C||void 0,history:V.history||[]})}else{const V={id:`watch-${Date.now()}`,serverName:b,toolName:y,args:{...h},transform:C||void 0,history:[]};i(V),z(V)}c(!1)}},G=V=>{o(V)},z=w.useCallback(async(V,re)=>{r(V.id,{isLoading:!0,error:void 0});const ce=re??a.length-1,I=Date.now();try{const K=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:V.serverName,tool_name:V.toolName,arguments:V.args})}),Q={eventIndex:ce,timestamp:I,result:K},Y=[...V.history||[],Q];r(V.id,{result:K,isLoading:!1,lastRun:I,history:Y})}catch(K){const Q={eventIndex:ce,timestamp:I,error:String(K)},Y=[...V.history||[],Q];r(V.id,{error:String(K),isLoading:!1,lastRun:I,history:Y})}},[e.id,r,a.length]),he=()=>{n.forEach(V=>z(V))},R=w.useMemo(()=>!b||!y?null:(p[b]||[]).find(re=>re.name===y),[b,y,p]);return s.jsxs("div",{className:"tool-watch-panel",children:[s.jsxs("div",{className:"watch-header",children:[s.jsx(Ki,{size:14}),s.jsx("span",{children:"Tool Watch"}),s.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),s.jsxs("div",{className:"watch-actions",children:[s.jsx("button",{className:"watch-btn",onClick:he,title:"Refresh all",children:s.jsx(zn,{size:12})}),s.jsx("button",{className:"watch-btn",onClick:L,title:"Add watch",children:s.jsx(Ke,{size:12})})]})]}),n.length===0?s.jsxs("div",{className:"watch-empty",children:[s.jsx(Ki,{size:20,style:{opacity:.3}}),s.jsx("span",{children:"No watch expressions"}),s.jsxs("button",{className:"add-watch-btn",onClick:L,children:[s.jsx(Ke,{size:12})," Add Tool Watch"]})]}):s.jsx("div",{className:"watch-list",children:n.map(V=>{let re=V.result,ce=V.error;if(t!==null&&V.history&&V.history.length>0){const oe=V.history.filter(J=>J.eventIndex<=t);if(oe.length>0){const J=oe[oe.length-1];re=J.result,ce=J.error}else re=void 0,ce=void 0}const{text:I,isError:K}=re?Ha(re):{text:"",isError:!1},Q=re?ef(I,V.transform):"",Y=ce||K;return s.jsxs("div",{className:`watch-item ${Y?"error":""}`,children:[s.jsxs("div",{className:"watch-item-header",children:[s.jsxs("span",{className:"watch-expr",children:[s.jsx("span",{className:"watch-server",children:V.serverName}),s.jsx("span",{className:"watch-tool",children:V.toolName}),Object.keys(V.args).length>0&&s.jsxs("span",{className:"watch-args",children:["(",Object.entries(V.args).map(([oe,J])=>`${oe}=${JSON.stringify(J)}`).join(", "),")"]}),t!==null&&s.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),s.jsxs("div",{className:"watch-item-actions",children:[s.jsx("button",{onClick:()=>D(V),title:"Edit watch",children:s.jsx(Kt,{size:10})}),s.jsx("button",{onClick:()=>z(V),title:"Refresh",children:V.isLoading?s.jsx(zn,{size:10,className:"spin"}):s.jsx(zn,{size:10})}),s.jsx("button",{onClick:()=>G(V.id),title:"Remove",children:s.jsx(Fe,{size:10})})]})]}),s.jsx("div",{className:"watch-result",children:V.isLoading?s.jsx("span",{className:"loading",children:"Loading..."}):ce?s.jsx("span",{className:"error",children:ce}):re?s.jsx("pre",{className:K?"error-text":"",children:Q}):s.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},V.id)})}),l&&s.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:s.jsxs("div",{className:"watch-dialog",onClick:V=>V.stopPropagation(),children:[s.jsxs("div",{className:"dialog-header",children:[s.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),s.jsx("button",{onClick:()=>c(!1),children:s.jsx(lg,{size:14})})]}),s.jsxs("div",{className:"dialog-body",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"MCP Server"}),s.jsxs("select",{value:b,onChange:V=>{T(V.target.value),u||g(""),V.target.value&&ne(V.target.value)},children:[s.jsx("option",{value:"",children:"Select server..."}),$.map(V=>s.jsx("option",{value:V.name,children:V.name},V.name))]})]}),s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"Tool"}),s.jsxs("select",{value:y,onChange:V=>g(V.target.value),disabled:!b||m.has(b),children:[s.jsx("option",{value:"",children:m.has(b)?"Loading tools...":"Select tool..."}),(p[b]||[]).map(V=>s.jsx("option",{value:V.name,children:V.name},V.name))]})]}),(R==null?void 0:R.description)&&s.jsx("div",{className:"tool-desc",children:R.description}),((te=R==null?void 0:R.parameters)==null?void 0:te.properties)&&Object.keys(R.parameters.properties).length>0&&s.jsxs("div",{className:"tool-args",children:[s.jsx("label",{children:"Arguments"}),Object.entries(R.parameters.properties).map(([V,re])=>{var ce,I;return s.jsxs("div",{className:"arg-row",children:[s.jsxs("span",{className:"arg-name",children:[V,((ce=R.parameters.required)==null?void 0:ce.includes(V))&&s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:re.type==="number"||re.type==="integer"?"number":"text",value:typeof h[V]=="object"?JSON.stringify(h[V]):h[V]??"",onChange:K=>P(Q=>({...Q,[V]:K.target.value})),placeholder:((I=re.description)==null?void 0:I.slice(0,40))||V})]},V)})]}),b&&y&&s.jsxs("div",{className:"test-section",children:[s.jsxs("div",{className:"test-header",children:[s.jsx("label",{children:"Test & Preview"}),s.jsxs("button",{className:"test-btn",onClick:M,disabled:F,children:[F?s.jsx(zn,{size:12,className:"spin"}):s.jsx(Bn,{size:12}),F?"Running...":"Test Run"]})]}),v&&s.jsxs("div",{className:"test-result error",children:[s.jsx("span",{className:"test-label",children:"Error:"}),s.jsx("pre",{children:v})]}),A&&s.jsxs("div",{className:"test-result",children:[s.jsx("span",{className:"test-label",children:"Raw Result:"}),s.jsx("pre",{children:A})]})]}),s.jsxs("div",{className:"form-row transform-row",children:[s.jsx("label",{children:"Transform (optional)"}),s.jsx("input",{type:"text",value:C,onChange:V=>_(V.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),s.jsxs("div",{className:"transform-hints",children:[s.jsx("span",{className:"hint-title",children:"Path:"}),s.jsx("code",{onClick:()=>_(".items[0].name"),children:".items[0].name"}),s.jsx("code",{onClick:()=>_(".content[0].text"),children:".content[0].text"}),s.jsx("code",{onClick:()=>_(".result.data"),children:".result.data"}),s.jsx("span",{className:"hint-title",children:"JS:"}),s.jsx("code",{onClick:()=>_("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),s.jsx("code",{onClick:()=>_("js:data.items?.length"),children:"js:data.items?.length"})]})]}),A&&C&&s.jsxs("div",{className:"transform-preview",children:[s.jsx("span",{className:"test-label",children:"Transform Preview:"}),s.jsx("pre",{className:j!=null&&j.startsWith("[Transform error")?"error":"",children:j})]})]}),s.jsxs("div",{className:"dialog-footer",children:[s.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),s.jsx("button",{className:"add-btn",onClick:H,disabled:!b||!y,children:u?"Save Changes":"Add Watch"})]})]})})]})}function zS(){var Pt;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:o,clearWatchHistories:a,runAgentId:l,setRunAgentId:c,watches:u,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=at(),[m,x]=w.useState(""),[b,T]=w.useState(null),[y,g]=w.useState(null),[h,P]=w.useState(null),[C,_]=w.useState(""),[N,k]=w.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[A,S]=w.useState(!0),[v,E]=w.useState(!0),[F,B]=w.useState(!1),[$,ne]=w.useState(360),[L,D]=w.useState(!1),[M,j]=w.useState([]),[H,G]=w.useState(null),[z,he]=w.useState(!1),R=w.useRef(0),te=w.useCallback(async(U,de)=>{if(!e)return;d(U.id,{isLoading:!0,error:void 0});const pe=de??r.length-1,ge=Date.now();try{const ve=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:U.serverName,tool_name:U.toolName,arguments:U.args})}),Ge={eventIndex:pe,timestamp:ge,result:ve},Jn=[...U.history||[],Ge];d(U.id,{result:ve,isLoading:!1,lastRun:ge,history:Jn})}catch(ve){const Ge={eventIndex:pe,timestamp:ge,error:String(ve)},Jn=[...U.history||[],Ge];d(U.id,{error:String(ve),isLoading:!1,lastRun:ge,history:Jn})}},[e==null?void 0:e.id,d,r.length]);w.useEffect(()=>{if(r.length>R.current&&u.length>0){const U=r.length-1;u.forEach(de=>{de.isLoading||te(de,U)})}R.current=r.length},[r.length,u,te]),w.useEffect(()=>{l!==null&&(re(l),c(null))},[l,c]);const[V,re]=w.useState(null),ce=w.useRef(null),I=w.useRef(null);w.useEffect(()=>{if(!L)return;const U=pe=>{if(!I.current)return;const ve=I.current.getBoundingClientRect().right-pe.clientX;ne(Math.min(600,Math.max(200,ve)))},de=()=>{D(!1)};return document.addEventListener("mousemove",U),document.addEventListener("mouseup",de),()=>{document.removeEventListener("mousemove",U),document.removeEventListener("mouseup",de)}},[L]);const K=w.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),Q=w.useMemo(()=>r.filter((U,de)=>{var pe,ge,ve;if(h&&(U.timestamp<h[0]||U.timestamp>h[1])||N.size>0&&!N.has(U.event_type))return!1;if(A&&U.event_type==="model_response"){const Ge=((ge=(pe=U.data)==null?void 0:pe.response_content)==null?void 0:ge.parts)||((ve=U.data)==null?void 0:ve.parts)||[],Jn=Ge.some(ea=>ea.type==="function_call"),cx=Ge.some(ea=>ea.type==="text");if(!Jn&&!cx)return!1}return!(C&&!JSON.stringify(U).toLowerCase().includes(C.toLowerCase()))}),[r,h,N,C,A]),Y=w.useMemo(()=>{var ge;let U=0,de=0;const pe=y!==null?y+1:r.length;for(let ve=0;ve<pe;ve++){const Ge=r[ve];Ge.event_type==="model_response"&&((ge=Ge.data)!=null&&ge.token_counts)&&(U+=Ge.data.token_counts.input||0,de+=Ge.data.token_counts.output||0)}return{input:U,output:de,total:U+de}},[r,y]),oe=y!==null?r[y]:null;w.useEffect(()=>{if(!e){j([]);return}(async()=>{he(!0);try{const de=await Vl(e.id);j(de)}catch(de){console.error("Failed to load sessions:",de),j([])}finally{he(!1)}})()},[e]);const J=w.useCallback(async U=>{if(!e){G(null);return}if(!U){o(),a(),f(null),G(null),g(null),P(null);return}try{const de=await Dh(e.id,U);o(),a(),f(de.id),G(U),g(null),P(null);for(const pe of de.events)i(pe)}catch(de){alert(`Failed to load session: ${de.message||"Unknown error"}`)}},[e,o,a,f,i]);w.useEffect(()=>{if(!e||M.length===0||z)return;const de=new URLSearchParams(window.location.search).get("session");if(de)if(M.some(ge=>ge.id===de)){J(de);const ge=window.location.pathname;window.history.replaceState({},"",ge)}else console.warn(`Session ${de} not found in available sessions`)},[e,M,z,J]),w.useEffect(()=>{t&&ce.current&&(ce.current.scrollTop=ce.current.scrollHeight)},[r.length,t]);const X=w.useCallback(()=>{if(!e||!m.trim()||t)return;b&&(b.close(),T(null)),p||(o(),a(),G(null)),n(!0),g(null),P(null);const U=Vh(e.id);T(U),U.onopen=()=>{U.send(JSON.stringify({message:m,agent_id:V||void 0,session_id:p||void 0}))},U.onmessage=de=>{var ge;const pe=JSON.parse(de.data);if(pe.event_type==="agent_start"&&((ge=pe.data)!=null&&ge.session_id)){const ve=pe.data.session_id;pe.data.session_reused,f(ve),ve&&M.some(Ge=>Ge.id===ve)&&G(ve)}else pe.type==="session_started"?(f(pe.session_id),pe.session_id&&M.some(ve=>ve.id===pe.session_id)&&G(pe.session_id)):pe.type==="completed"?(n(!1),U.close()):pe.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:pe.error}})):i(pe)},U.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},U.onclose=()=>{n(!1)}},[e,m,t,b,o,n,i,V,p]),ie=w.useCallback(()=>{b==null||b.close(),n(!1)},[b,n]);w.useEffect(()=>{const U=de=>{if((de.metaKey||de.ctrlKey)&&de.key==="Enter"){de.preventDefault(),X();return}if(de.key==="ArrowDown"||de.key==="ArrowUp"){if(de.target instanceof HTMLInputElement||de.target instanceof HTMLTextAreaElement||(de.preventDefault(),Q.length===0))return;if(de.key==="ArrowDown")if(y===null){const pe=r.indexOf(Q[0]);g(pe)}else{const pe=Q.findIndex(ge=>r.indexOf(ge)===y);if(pe<Q.length-1){const ge=r.indexOf(Q[pe+1]);g(ge)}}else if(de.key==="ArrowUp")if(y===null){const pe=r.indexOf(Q[Q.length-1]);g(pe)}else{const pe=Q.findIndex(ge=>r.indexOf(ge)===y);if(pe>0){const ge=r.indexOf(Q[pe-1]);g(ge)}}}};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[X,Q,y,r]);const me=w.useCallback(()=>{var ve;if(r.length===0)return;const U={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:V||((ve=e==null?void 0:e.app)==null?void 0:ve.root_agent_id),events:r},de=new Blob([JSON.stringify(U,null,2)],{type:"application/json"}),pe=URL.createObjectURL(de),ge=document.createElement("a");ge.href=pe,ge.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ge),ge.click(),document.body.removeChild(ge),URL.revokeObjectURL(pe)},[r,e,V]),je=w.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const U=await $h(p);if(U.success){alert(U.message||"Session saved to memory successfully");try{const de=await Vl(e.id);j(de)}catch{}}else alert(`Failed to save to memory: ${U.error||"Unknown error"}`)}catch(U){alert(`Error saving to memory: ${U.message||"Unknown error"}`)}},[p,e]),[ze,be]=w.useState(!1),[Ne,Qe]=w.useState([]),[W,ae]=w.useState(""),[O,q]=w.useState("Test Case from Session"),[ue,se]=w.useState(!1),we=w.useCallback(async()=>{if(!p||!e){alert("No active session to create test case from");return}try{const U=await Se(`/projects/${e.id}/eval-sets`);if(Qe(U.eval_sets||[]),!U.eval_sets||U.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}ae(U.eval_sets[0].id),be(!0)}catch(U){alert(`Error loading eval sets: ${U.message||"Unknown error"}`)}},[p,e]),Ze=w.useCallback(async()=>{if(!p||!e||!W){alert("Please select an evaluation set");return}se(!0);try{const U=await Se(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:p,eval_set_id:W,case_name:O})});be(!1),alert(`Test case "${U.eval_case.name}" created successfully!

Token count: ${U.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(U){alert(`Error creating test case: ${U.message||"Unknown error"}`)}finally{se(!1)}},[p,e,W,O]),ln=w.useCallback(()=>{const U=document.createElement("input");U.type="file",U.accept=".json",U.onchange=async de=>{var ge;const pe=(ge=de.target.files)==null?void 0:ge[0];if(pe)try{const ve=await pe.text(),Ge=JSON.parse(ve);if(!Ge.events||!Array.isArray(Ge.events)){alert("Invalid run file: missing events array");return}o(),a(),g(null),P(null),Ge.events.forEach(Jn=>{i(Jn)})}catch(ve){alert(`Failed to load run file: ${ve}`)}},U.click()},[o,a,i]);return w.useEffect(()=>{if(y!==null){const U=document.querySelector(".event-row.selected");U==null||U.scrollIntoView({behavior:"smooth",block:"nearest"})}},[y]),e?s.jsxs("div",{className:`run-panel ${L?"resizing":""}`,children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"input-area",children:[s.jsxs("select",{className:"agent-selector",value:V||"",onChange:U=>re(U.target.value||null),disabled:t,title:"Select which agent to run",children:[s.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Pt=e.agents.find(U=>U.id===e.app.root_agent_id))==null?void 0:Pt.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(U=>U.id!==e.app.root_agent_id).map(U=>s.jsxs("option",{value:U.id,children:[U.name," (",U.type.replace("Agent",""),")"]},U.id))]}),s.jsxs("select",{className:"agent-selector",value:H||"",onChange:U=>J(U.target.value||null),disabled:t||z,style:{minWidth:180},title:"Load a saved session",children:[s.jsx("option",{value:"",children:z?"Loading...":"Load Session..."}),M.map(U=>{const de=new Date(U.started_at*1e3),pe=U.duration?`${U.duration.toFixed(1)}s`:"?";return s.jsxs("option",{value:U.id,children:[de.toLocaleString()," (",U.event_count," events, ",pe,")"]},U.id)})]}),s.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:U=>x(U.target.value),onKeyDown:U=>U.key==="Enter"&&!U.shiftKey&&X(),disabled:t}),t?s.jsxs("button",{className:"stop",onClick:ie,children:[s.jsx(w0,{size:14}),"Stop"]}):s.jsxs("button",{onClick:X,disabled:!m.trim(),children:[s.jsx(Bn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"toolbar",children:[s.jsxs("div",{className:"toolbar-section",children:[s.jsx(ig,{size:12,style:{color:"#71717a"}}),s.jsx("input",{type:"text",placeholder:"Filter events...",value:C,onChange:U=>_(U.target.value)})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(U=>s.jsx("button",{className:`filter-chip ${N.has(U)?"active":""}`,onClick:()=>{const de=new Set(N);de.has(U)?de.delete(U):de.add(U),k(de)},children:U.replace("_"," ")},U)),s.jsx("button",{className:`filter-chip ${N.has("callback_start")&&N.has("callback_end")?"active":""}`,onClick:()=>{const U=new Set(N);U.has("callback_start")&&U.has("callback_end")?(U.delete("callback_start"),U.delete("callback_end")):(U.add("callback_start"),U.add("callback_end")),k(U)},title:"Show/hide callback events",children:"callback"}),s.jsx("button",{className:`filter-chip ${A?"active":""}`,onClick:()=>S(!A),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[s.jsxs("button",{className:`toolbar-btn ${v?"active":""}`,onClick:()=>E(!v),children:[s.jsx(mn,{size:12}),"State"]}),s.jsxs("button",{className:`toolbar-btn ${F?"active":""}`,onClick:()=>B(!F),children:[s.jsx(Yd,{size:12}),"Tools"]})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[Q.length," / ",r.length," events"]}),h&&s.jsx("button",{className:"toolbar-btn",onClick:()=>P(null),children:"Clear Range"})]})]}),s.jsxs("div",{className:"main-content",ref:I,children:[s.jsxs("div",{className:"event-list-container",children:[s.jsxs("div",{className:"event-list-header",children:[s.jsx("div",{children:"#"}),s.jsx("div",{children:"Time"}),s.jsx("div",{children:"Agent"}),s.jsx("div",{children:"Type"}),s.jsx("div",{children:"Info"})]}),s.jsx("div",{className:"event-list",ref:ce,children:Q.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(rg,{size:24}),s.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):Q.map((U,de)=>{const pe=r.indexOf(U),ge=Zp[U.event_type]||Zp.error,ve=jS[U.event_type]||ko;return s.jsxs("div",{className:`event-row ${y===pe?"selected":""}`,style:{background:ge.bg},onClick:()=>g(pe),onDoubleClick:()=>{E(!1),B(!1)},children:[s.jsx("div",{className:"index",children:pe}),s.jsx("div",{className:"time",style:{color:ge.fg},children:_S(U.timestamp,K.min)}),s.jsx("div",{className:"agent",style:{color:ge.fg},children:U.agent_name}),s.jsxs("div",{className:"type",style:{color:ge.fg},children:[s.jsx(ve,{size:10}),U.event_type.split("_")[0]]}),s.jsx("div",{className:"summary",children:wS(U)})]},pe)})})]}),s.jsxs("div",{className:"side-panel-container",style:{width:$},children:[s.jsx("div",{className:`resize-handle ${L?"active":""}`,onMouseDown:()=>D(!0)}),s.jsxs("div",{className:"side-panel",style:{width:$-4},children:[s.jsxs("div",{className:"side-panel-tabs",children:[s.jsxs("button",{className:`side-panel-tab ${!v&&!F?"active":""}`,onClick:()=>{E(!1),B(!1)},children:[s.jsx(Ki,{size:12,style:{marginRight:4}}),"Details"]}),s.jsxs("button",{className:`side-panel-tab ${v?"active":""}`,onClick:()=>{E(!0),B(!1)},children:[s.jsx(mn,{size:12,style:{marginRight:4}}),"State"]}),s.jsxs("button",{className:`side-panel-tab ${F?"active":""}`,onClick:()=>{B(!0),E(!1)},children:[s.jsx(Yd,{size:12,style:{marginRight:4}}),"Tools"]})]}),s.jsx("div",{className:"side-panel-content",children:F?s.jsx(ES,{project:e,selectedEventIndex:y}):v?s.jsx(NS,{events:r,selectedEventIndex:y,project:e}):oe?s.jsx(SS,{event:oe}):s.jsxs("div",{className:"empty-state",children:[s.jsx(Ki,{size:24}),s.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),s.jsxs("div",{className:"stats-bar",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Events:"}),s.jsx("span",{className:"stat-value",children:r.length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Tool Calls:"}),s.jsx("span",{className:"stat-value",children:r.filter(U=>U.event_type==="tool_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Model Calls:"}),s.jsx("span",{className:"stat-value",children:r.filter(U=>U.event_type==="model_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Callbacks:"}),s.jsx("span",{className:"stat-value",children:r.filter(U=>U.event_type==="callback_start").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"State Changes:"}),s.jsx("span",{className:"stat-value",children:r.filter(U=>U.event_type==="state_change").length})]}),r.length>0&&s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Duration:"}),s.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),Y.total>0&&s.jsx("div",{className:"stat-item token-stats",children:s.jsxs("span",{className:"stat-value token-value",children:[s.jsxs("span",{className:"token-in",title:"Input tokens",children:[Y.input.toLocaleString(),"↑"]}),s.jsxs("span",{className:"token-out",title:"Output tokens",children:[Y.output.toLocaleString(),"↓"]}),s.jsx("span",{className:"token-total",title:"Total tokens",children:Y.total.toLocaleString()})]})}),s.jsx("div",{className:"stats-bar-spacer"}),s.jsxs("button",{className:"stats-bar-btn",onClick:ln,title:"Load a saved run",children:[s.jsx(Jo,{size:12}),"Load"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:me,disabled:r.length===0,title:"Save current run to file",children:[s.jsx(ss,{size:12}),"Save"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:je,disabled:!p||r.length===0,title:"Save current session to memory",children:[s.jsx(mn,{size:12}),"Save to Memory"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:we,disabled:!p||r.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[s.jsx(Jl,{size:12}),"Create Test Case"]})]}),ze&&s.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>be(!1),children:s.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:U=>U.stopPropagation(),children:[s.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[s.jsx(Jl,{size:18}),"Create Test Case from Session"]}),s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),s.jsx("input",{type:"text",value:O,onChange:U=>q(U.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),s.jsx("select",{value:W,onChange:U=>ae(U.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:Ne.map(U=>s.jsx("option",{value:U.id,children:U.name},U.id))})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),s.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>be(!1),children:"Cancel"}),s.jsx("button",{className:"btn btn-primary",onClick:Ze,disabled:ue||!W,children:ue?"Creating...":"Create Test Case"})]})]})})]}):s.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const TS=()=>Math.random().toString(36).substring(2,10),PS=()=>({id:TS(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function LS(){const{project:e,setProject:t}=at(),[n,r]=w.useState(null),[i,o]=w.useState(null),[a,l]=w.useState(""),[c,u]=w.useState([]),[d,p]=w.useState(!1),[f,m]=w.useState(!1),[x,b]=w.useState(""),[T,y]=w.useState(!1),[g,h]=w.useState(null),[P,C]=w.useState(null),_=w.useRef(null),N=(e==null?void 0:e.skillsets)||[],k=N.find(M=>M.id===n);w.useEffect(()=>{Xh().then(M=>C(M.available)).catch(()=>C(!1))},[]),w.useEffect(()=>{N.length>0&&!n&&r(N[0].id)},[N,n]),w.useEffect(()=>{!e||!n||A()},[e==null?void 0:e.id,n]);const A=w.useCallback(async()=>{if(!(!e||!n))try{const M=await Jh(e.id,n);o(M),v(n,{entry_count:M.entry_count})}catch(M){console.error("Failed to load stats:",M)}},[e==null?void 0:e.id,n]),S=M=>{e&&t({...e,...M})},v=(M,j)=>{e&&t({...e,skillsets:e.skillsets.map(H=>H.id===M?{...H,...j}:H)})},E=()=>{if(!e)return;const M=PS();S({skillsets:[...N,M]}),r(M.id)},F=M=>{e&&confirm("Delete this SkillSet and all its data?")&&(S({skillsets:N.filter(j=>j.id!==M)}),n===M&&r(N.length>1?N[0].id:null),o(null),u([]))},B=async()=>{if(!(!e||!n||!a.trim())){p(!0),h(null);try{const M=await Gh(e.id,n,a.trim(),10,0);u(M.results)}catch(M){h("Search failed"),console.error(M)}finally{p(!1)}}},$=async()=>{if(!(!e||!n||!x.trim())){y(!0),h(null);try{const M=await Kh(e.id,n,x.trim());b(""),await A(),alert(`Added ${M.chunks_added} chunks from ${M.source_name}`)}catch(M){h(M.message||"Failed to fetch URL")}finally{y(!1)}}},ne=async M=>{var H;const j=(H=M.target.files)==null?void 0:H[0];if(!(!j||!e||!n)){h(null);try{const G=await Qh(e.id,n,j);await A(),alert(`Added ${G.chunks_added} chunks from ${G.source_name}`)}catch(G){h(G.message||"Upload failed")}_.current&&(_.current.value="")}},L=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Yh(e.id,n),await A(),u([])}catch{h("Clear failed")}},D=M=>{const j=Math.round(M*100),H=160,G=70,z=20+(1-M)*15,he=.15+M*.25;return`linear-gradient(90deg, hsla(${H}, ${G}%, ${z}%, ${he}) 0%, transparent ${j}%)`};return e?s.jsxs("div",{className:"skillsets-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"skillset-list",children:[s.jsxs("div",{className:"skillset-list-header",children:[s.jsx("h3",{children:"SkillSets"}),s.jsx("button",{className:"btn-icon",onClick:E,title:"Add SkillSet",children:s.jsx(Ke,{size:16})})]}),N.length===0?s.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[s.jsx(mn,{size:32}),s.jsx("span",{children:"No SkillSets"}),s.jsxs("button",{className:"btn-primary",onClick:E,children:[s.jsx(Ke,{size:14})," Create SkillSet"]})]}):N.map(M=>s.jsxs("div",{className:`skillset-item ${n===M.id?"selected":""}`,onClick:()=>r(M.id),children:[s.jsx(mn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),s.jsxs("div",{className:"skillset-item-info",children:[s.jsx("div",{className:"skillset-item-name",children:M.name}),s.jsxs("div",{className:"skillset-item-count",children:[M.entry_count||0," entries"]})]}),s.jsx("button",{className:"skillset-item-delete",onClick:j=>{j.stopPropagation(),F(M.id)},children:s.jsx(Fe,{size:14})})]},M.id))]}),k?s.jsxs("div",{className:"skillset-detail",children:[s.jsxs("div",{className:"skillset-header",children:[s.jsxs("div",{className:"skillset-header-info",children:[s.jsx("input",{className:"skillset-name-input",value:k.name,onChange:M=>v(k.id,{name:M.target.value}),placeholder:"SkillSet Name"}),s.jsx("textarea",{className:"skillset-desc-input",value:k.description,onChange:M=>v(k.id,{description:M.target.value}),placeholder:"Description (optional)",rows:1}),s.jsxs("div",{className:"skillset-model",children:[s.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),s.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:k.embedding_model||"text-embedding-004",onChange:M=>v(k.id,{embedding_model:M.target.value}),children:[s.jsxs("optgroup",{label:"Google Gemini",children:[s.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),s.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),s.jsxs("optgroup",{label:"OpenAI",children:[s.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),s.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),s.jsxs("optgroup",{label:"Cohere",children:[s.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),s.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),s.jsxs("div",{className:"skillset-stats",children:[s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),P===!1&&s.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),s.jsx("button",{className:"btn-icon",onClick:A,title:"Refresh",children:s.jsx(zn,{size:16})})]}),g&&s.jsxs("div",{className:"error-banner",children:[g,s.jsx("button",{onClick:()=>h(null),children:s.jsx(lg,{size:14})})]}),s.jsxs("div",{className:"search-section",children:[s.jsx("div",{className:"search-input-wrapper",children:s.jsx("input",{className:"search-input",value:a,onChange:M=>l(M.target.value),onKeyDown:M=>M.key==="Enter"&&B(),placeholder:"Search this SkillSet..."})}),s.jsxs("button",{className:"btn-primary",onClick:B,disabled:d||!a.trim(),children:[s.jsx(ig,{size:14}),d?"Searching...":"Search"]})]}),s.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&s.jsx("div",{className:"empty-state",children:s.jsx("span",{children:"No results found"})}),c.map(M=>s.jsxs("div",{className:"search-result",style:{background:D(M.score)},children:[s.jsxs("span",{className:"search-result-score",children:[(M.score*100).toFixed(0),"%"]}),s.jsx("div",{className:"search-result-text",children:M.text}),s.jsx("div",{className:"search-result-source",children:M.source_name})]},M.id))]}),s.jsxs("div",{className:"add-sources-section",children:[s.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?s.jsx(Lt,{size:16}):s.jsx(At,{size:16}),s.jsx("h4",{children:"Add Sources"})]}),f&&s.jsxs("div",{className:"add-sources-content",children:[s.jsxs("div",{className:"source-row",children:[s.jsx(ng,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{className:"source-input",value:x,onChange:M=>b(M.target.value),onKeyDown:M=>M.key==="Enter"&&$(),placeholder:"Enter URL (e.g., llms.txt file)"}),s.jsxs("button",{className:"btn-primary",onClick:$,disabled:T||!x.trim(),children:[s.jsx(g0,{size:14}),T?"Loading...":"Add"]})]}),s.jsxs("div",{className:"source-row",children:[s.jsx(f0,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{ref:_,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:ne}),s.jsxs("button",{className:"btn-primary",onClick:()=>{var M;return(M=_.current)==null?void 0:M.click()},children:[s.jsx(Jo,{size:14}),"Upload File"]}),s.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&s.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:s.jsxs("button",{className:"clear-button",onClick:L,children:[s.jsx(Fe,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):N.length>0?s.jsx("div",{className:"skillset-detail",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(mn,{size:48}),s.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const nn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Yi=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=nn[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const o=n??3.5;return{value:t.toFixed(1),comparison:`${o.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const o=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(o*100)}% min`}}},AS={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function lx(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function RS(){const{project:e}=at(),[t,n]=w.useState([]),[r,i]=w.useState(null),[o,a]=w.useState(null),[l,c]=w.useState(new Set),[u,d]=w.useState(new Map),[p,f]=w.useState(new Map),[m,x]=w.useState(new Set),[b,T]=w.useState(!1),[y,g]=w.useState(null),[h,P]=w.useState([]),[C,_]=w.useState(null),N=async()=>{if(e)try{const I=await Ue.get(`/projects/${e.id}/eval-history`);P(I.runs||[])}catch(I){console.warn("Failed to load eval history:",I)}},k=async(I,K=!0)=>{if(e)try{const Y=(await Ue.get(`/projects/${e.id}/eval-history/${I}`)).run;if(_(Y),Y!=null&&Y.case_results){const oe=new Map;for(const J of Y.case_results)oe.set(J.eval_case_id,J);d(oe)}if((Y==null?void 0:Y.eval_set_id)==="batch")c(new Set(t.map(oe=>oe.id))),i(null);else if(Y!=null&&Y.eval_set_id){const oe=new Map;oe.set(Y.eval_set_id,Y),f(oe),i(Y.eval_set_id),c(J=>new Set([...J,Y.eval_set_id]))}a(null),K&&window.history.pushState({run:I},"",`?run=${I}`)}catch(Q){console.warn("Failed to load history run:",Q)}},A=(I,K=!0)=>{i(I),a(null),_(null),K&&I?window.history.pushState({set:I},"",`?set=${I}`):K&&window.history.pushState({},"",window.location.pathname)},S=(I,K,Q=!0)=>{i(I),a(K),_(null),Q&&K?window.history.pushState({set:I,case:K},"",`?set=${I}&case=${K}`):Q&&I&&window.history.pushState({set:I},"",`?set=${I}`)},v=()=>{_(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},E=async I=>{if(e)try{await Ue.delete(`/projects/${e.id}/eval-history/${I}`),P(K=>K.filter(Q=>Q.id!==I)),(C==null?void 0:C.id)===I&&_(null)}catch(K){console.warn("Failed to delete history run:",K)}};w.useEffect(()=>{e!=null&&e.id&&(F(),N())},[e==null?void 0:e.id]),w.useEffect(()=>{const I=()=>{x(new Set(t.map(Q=>Q.id)))},K=()=>{x(new Set),N()};return window.addEventListener("eval-tests-started",I),window.addEventListener("eval-tests-completed",K),()=>{window.removeEventListener("eval-tests-started",I),window.removeEventListener("eval-tests-completed",K)}},[t]),w.useEffect(()=>{if(!(e!=null&&e.id)||b)return;const I=()=>{const Q=new URLSearchParams(window.location.search),Y=Q.get("set"),oe=Q.get("case"),J=Q.get("run");if(J){k(J,!1);return}if(Y)i(Y),a(oe),_(null),c(X=>new Set([...X,Y]));else{if(!r&&!o&&!C)return;i(null),a(null),_(null)}};I();const K=()=>{I()};return window.addEventListener("popstate",K),()=>window.removeEventListener("popstate",K)},[e==null?void 0:e.id,b,t.length]);const F=async()=>{var I,K;if(e!=null&&e.id){T(!0),g(null);try{const Q=await Ue.get(`/projects/${e.id}/eval-sets`);if(n(Q.eval_sets||[]),((I=Q.eval_sets)==null?void 0:I.length)>0){const Y=new URLSearchParams(window.location.search),oe=Y.get("set"),J=Y.get("case"),X=oe||(J?(K=Q.eval_sets.find(ie=>ie.eval_cases.some(me=>me.id===J)))==null?void 0:K.id:null)||Q.eval_sets[0].id;c(new Set([X]))}}catch(Q){g(Q.message||"Failed to load eval sets")}finally{T(!1)}}},B=t.find(I=>I.id===r),$=B==null?void 0:B.eval_cases.find(I=>I.id===o),ne=async()=>{if(e!=null&&e.id)try{const I=await Ue.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:AS});n(K=>[...K,I.eval_set]),i(I.eval_set.id),c(K=>new Set([...K,I.eval_set.id]))}catch(I){g(I.message||"Failed to create eval set")}},L=async I=>{if(e!=null&&e.id)try{const K=await Ue.post(`/projects/${e.id}/eval-sets/${I}/cases`,{name:"New Test Case",description:"",invocations:[{id:lx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(Q=>Q.map(Y=>Y.id===I?{...Y,eval_cases:[...Y.eval_cases,K.eval_case]}:Y)),i(I),a(K.eval_case.id)}catch(K){g(K.message||"Failed to create eval case")}},D=async(I,K,Q)=>{if(e!=null&&e.id)try{const Y=await Ue.put(`/projects/${e.id}/eval-sets/${I}/cases/${K}`,Q);n(oe=>oe.map(J=>J.id===I?{...J,eval_cases:J.eval_cases.map(X=>X.id===K?Y.eval_case:X)}:J))}catch(Y){g(Y.message||"Failed to update eval case")}},M=async(I,K)=>{if(e!=null&&e.id)try{await Ue.delete(`/projects/${e.id}/eval-sets/${I}/cases/${K}`),n(Q=>Q.map(Y=>Y.id===I?{...Y,eval_cases:Y.eval_cases.filter(oe=>oe.id!==K)}:Y)),o===K&&a(null)}catch(Q){g(Q.message||"Failed to delete eval case")}},j=async I=>{if(e!=null&&e.id)try{await Ue.delete(`/projects/${e.id}/eval-sets/${I}`),n(K=>K.filter(Q=>Q.id!==I)),r===I&&(i(null),a(null))}catch(K){g(K.message||"Failed to delete eval set")}},H=async I=>{if(e!=null&&e.id)try{const K=await Ue.get(`/projects/${e.id}/eval-sets/${I}/export`),Q=new Blob([JSON.stringify(K,null,2)],{type:"application/json"}),Y=URL.createObjectURL(Q),oe=document.createElement("a");oe.href=Y;const J=t.find(X=>X.id===I);oe.download=`${(J==null?void 0:J.name)||"eval-set"}.json`,document.body.appendChild(oe),oe.click(),document.body.removeChild(oe),URL.revokeObjectURL(Y)}catch(K){g(K.message||"Failed to export eval set")}},G=async I=>{if(e!=null&&e.id)try{const K=await I.text(),Q=JSON.parse(K),Y=await Ue.post(`/projects/${e.id}/eval-sets/import`,Q);n(oe=>[...oe,Y.eval_set]),i(Y.eval_set.id),c(oe=>new Set([...oe,Y.eval_set.id]))}catch(K){g(K.message||"Failed to import eval set")}},z=w.useRef(null),he=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const I=await Promise.all(t.map(async oe=>{try{return await Ue.get(`/projects/${e.id}/eval-sets/${oe.id}/export`)}catch{return oe}})),K=new Blob([JSON.stringify(I,null,2)],{type:"application/json"}),Q=URL.createObjectURL(K),Y=document.createElement("a");Y.href=Q,Y.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(Q)}catch(I){g(I.message||"Failed to export all eval sets")}},R=async(I,K)=>{if(e!=null&&e.id){x(Q=>new Set([...Q,K]));try{const Q=await Ue.post(`/projects/${e.id}/eval-sets/${I}/cases/${K}/run`,{});d(Y=>new Map(Y).set(K,Q.result))}catch(Q){g(Q.message||"Failed to run eval case")}finally{x(Q=>{const Y=new Set(Q);return Y.delete(K),Y})}}},te=async I=>{if(!(e!=null&&e.id))return;const K=t.find(Y=>Y.id===I);if(!K)return;const Q=K.eval_cases.map(Y=>Y.id);x(Y=>new Set([...Y,I,...Q]));try{const Y=await Ue.post(`/projects/${e.id}/eval-sets/${I}/run`,{});f(oe=>new Map(oe).set(I,Y.result));for(const oe of Y.result.case_results)d(J=>new Map(J).set(oe.eval_case_id,oe));try{await Ue.post(`/projects/${e.id}/eval-history`,Y.result),N()}catch(oe){console.warn("Failed to save eval run to history:",oe)}}catch(Y){g(Y.message||"Failed to run eval set")}finally{x(Y=>{const oe=new Set(Y);return oe.delete(I),Q.forEach(J=>oe.delete(J)),oe})}},V=I=>{c(K=>{const Q=new Set(K);return Q.has(I)?Q.delete(I):Q.add(I),Q})},re=I=>{let K=I.eval_cases.length,Q=0,Y=0,oe=0;for(const J of I.eval_cases){const X=u.get(J.id);X?X.passed?Q++:Y++:oe++}return{total:K,passed:Q,failed:Y,pending:oe}},ce=I=>I==null?"-":`${Math.round(I*100)}%`;return e?s.jsxs("div",{className:"eval-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"eval-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsx("h3",{children:"Evaluation Tests"}),s.jsxs("div",{className:"header-actions",children:[s.jsx("input",{type:"file",ref:z,accept:".json",style:{display:"none"},onChange:I=>{var Q;const K=(Q=I.target.files)==null?void 0:Q[0];K&&(G(K),I.target.value="")}}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var I;return(I=z.current)==null?void 0:I.click()},title:"Import eval set from JSON",children:s.jsx(Jo,{size:14})}),t.length>0&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:he,title:"Download all eval sets as JSON",children:s.jsx(ss,{size:14})}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:F,title:"Refresh",children:s.jsx(zn,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ne,title:"New eval set",children:[s.jsx(Ke,{size:14}),"Set"]})]})]}),s.jsxs("div",{className:"eval-tree",children:[b&&s.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),y&&s.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:y}),!b&&t.length===0&&s.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[s.jsx(cu,{size:32}),s.jsxs("p",{children:["No evaluation sets yet.",s.jsx("br",{}),"Create one to get started."]})]}),t.map(I=>{const K=l.has(I.id),Q=re(I),Y=m.has(I.id);return s.jsxs("div",{className:"tree-item",children:[s.jsxs("div",{className:`tree-set ${r===I.id&&!o?"selected":""}`,onClick:()=>A(I.id),children:[s.jsx("button",{className:"expand-btn",onClick:oe=>{oe.stopPropagation(),V(I.id)},children:I.eval_cases.length>0?K?s.jsx(Lt,{size:14}):s.jsx(At,{size:14}):s.jsx("span",{style:{width:14}})}),s.jsx(tg,{size:14,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{className:"set-name",children:I.name}),s.jsx("button",{className:"add-case-btn",onClick:oe=>{oe.stopPropagation(),L(I.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:s.jsx(Ke,{size:12})}),Q.total>0&&s.jsxs("span",{className:"set-stats",children:[Q.passed>0&&s.jsx("span",{className:"stat-passed",children:Q.passed}),Q.failed>0&&s.jsx("span",{className:"stat-failed",children:Q.failed}),Q.pending>0&&s.jsx("span",{className:"stat-pending",children:Q.pending})]}),s.jsx("button",{className:"run-btn",onClick:oe=>{oe.stopPropagation(),te(I.id)},title:"Run all tests in this set",disabled:Y,children:Y?s.jsx(vo,{size:12,className:"spinning"}):s.jsx(Bn,{size:12})})]}),K&&s.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:I.eval_cases.map(oe=>{var ie;const J=u.get(oe.id),X=m.has(oe.id);return s.jsxs("div",{className:`tree-case ${o===oe.id?"selected":""}`,onClick:()=>S(I.id,oe.id),children:[X?s.jsx(vo,{size:14,className:"spinning",style:{color:"var(--warning)"}}):J?J.passed?s.jsx(cr,{size:14,style:{color:"var(--success)"}}):s.jsx(qr,{size:14,style:{color:"var(--error)"}}):s.jsx(bo,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{className:"case-name",children:oe.name}),J&&J.metric_results.length>0&&s.jsx("span",{style:{fontSize:11,color:J.passed?"var(--success)":"var(--error)"},children:ce((ie=J.metric_results[0])==null?void 0:ie.score)}),s.jsx("button",{className:"run-btn",onClick:me=>{me.stopPropagation(),R(I.id,oe.id)},disabled:X,children:s.jsx(Bn,{size:12})})]},oe.id)})})]},I.id)})]}),s.jsxs("div",{className:"history-section",children:[s.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:s.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",h.length,")"]})}),s.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:h.length===0?s.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...h].sort((I,K)=>(K.started_at||0)-(I.started_at||0)).map(I=>{const K=I.passed_cases===I.total_cases;return s.jsx("div",{className:`history-item ${(C==null?void 0:C.id)===I.id?"selected":""}`,onClick:()=>k(I.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(C==null?void 0:C.id)===I.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[K?s.jsx(cr,{size:14,style:{color:"var(--success)",flexShrink:0}}):s.jsx(qr,{size:14,style:{color:"var(--error)",flexShrink:0}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:500},children:I.eval_set_name||"Unnamed"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(I.started_at*1e3).toLocaleString()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{color:K?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[I.passed_cases,"/",I.total_cases]}),s.jsx("button",{className:"btn btn-icon",onClick:Q=>{Q.stopPropagation(),E(I.id)},title:"Delete run",style:{padding:2},children:s.jsx(Fe,{size:12})})]})]})},I.id)})})]})]}),s.jsx("div",{className:"eval-editor",children:C?s.jsx(OS,{run:C,onClose:v}):$?s.jsx(IS,{evalCase:$,evalSetId:r,projectId:e.id,result:u.get($.id),isRunning:m.has($.id),onUpdate:I=>D(r,$.id,I),onDelete:()=>M(r,$.id),onRun:()=>R(r,$.id),onClearResult:()=>d(I=>{const K=new Map(I);return K.delete($.id),K})}):B?s.jsx($S,{evalSet:B,projectId:e.id,result:p.get(B.id),isRunning:m.has(B.id),caseResults:u,onUpdate:async I=>{try{const K=await Ue.put(`/projects/${e.id}/eval-sets/${B.id}`,I);n(Q=>Q.map(Y=>Y.id===B.id?K.eval_set:Y))}catch(K){g(K.message)}},onDelete:()=>j(B.id),onRun:()=>te(B.id),onExport:()=>H(B.id)}):s.jsx("div",{className:"editor-content",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(bo,{size:48}),s.jsxs("p",{children:["Select a test case to edit",s.jsx("br",{}),"or create a new one"]})]})})})]}):null}function MS({value:e,onChange:t}){var a,l;const{project:n}=at(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,o=r.find(c=>c.id===i);return s.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[s.jsx("option",{value:"",children:o?`App Default (${o.model_name})`:"App Default"}),r.map(c=>s.jsx("option",{value:c.model_name,children:c.model_name},c.id)),s.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),s.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),s.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function OS({run:e,onClose:t}){var m;const{project:n}=at(),[r,i]=w.useState(!0),[o,a]=w.useState(new Set),l=e.case_results||[],c=l.filter(x=>x.passed).length,u=l.filter(x=>!x.passed).length,d=r?l.filter(x=>!x.passed):l,p=x=>{a(b=>{const T=new Set(b);return T.has(x)?T.delete(x):T.add(x),T})},f=x=>{x&&n&&(window.location.href=`/project/${n.id}/run?session=${x}`)};return s.jsxs("div",{className:"test-result-viewer",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"result-header",children:[s.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const x=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(x)}},title:"Copy link to this run",children:s.jsx(au,{size:14})})})]}),s.jsxs("div",{className:"result-summary",children:[s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Status"}),s.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Passed"}),s.jsx("span",{className:"value passed",children:c})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Failed"}),s.jsx("span",{className:"value failed",children:u})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Total Cases"}),s.jsx("span",{className:"value",children:l.length})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Duration"}),s.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Tokens"}),s.jsx("span",{className:"value",children:((m=e.total_tokens)==null?void 0:m.toLocaleString())||"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Run Time"}),s.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),s.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[s.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[s.jsx("input",{type:"checkbox",checked:r,onChange:x=>i(x.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),s.jsxs("div",{className:"result-cases",children:[d.map((x,b)=>{var v,E,F,B,$,ne;const T=x.case_id||`case-${b}`,y=o.has(T),g=((v=x.metric_results)==null?void 0:v.filter(L=>!L.passed||L.error))||[],h=((E=x.metric_results)==null?void 0:E.filter(L=>L.passed&&!L.error))||[],P=((F=x.rubric_results)==null?void 0:F.filter(L=>!L.passed||L.error))||[],C=((B=x.rubric_results)==null?void 0:B.filter(L=>L.passed&&!L.error))||[],_=y?x.metric_results:g,N=y?x.rubric_results:P,k=y?x.invocation_results:($=x.invocation_results)==null?void 0:$.filter(L=>{var D;return((D=L.metric_results)==null?void 0:D.some(M=>!M.passed))||L.error}),A=h.length+C.length,S=g.length+P.length;return s.jsxs("div",{className:"result-case",children:[s.jsxs("div",{className:"result-case-header",onClick:()=>p(T),style:{cursor:"pointer"},children:[s.jsxs("div",{className:"result-case-name",children:[s.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:y?"▼":"▶"}),x.passed?s.jsx(cr,{size:16,style:{color:"var(--success)"}}):s.jsx(qr,{size:16,style:{color:"var(--error)"}}),x.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&s.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:x.eval_set_name}),x.case_name||`Case ${b+1}`,s.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[S>0&&s.jsxs("span",{style:{color:"var(--error)"},children:[S," failed"]}),S>0&&A>0&&" · ",A>0&&s.jsxs("span",{style:{color:"var(--success)"},children:[A," passed"]})]})]}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[x.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:L=>{L.stopPropagation(),f(x.session_id)},title:"View session in Run panel",children:[s.jsx(eg,{size:12})," View Session"]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:x.duration_ms?`${(x.duration_ms/1e3).toFixed(2)}s`:""})]})]}),s.jsxs("div",{className:"result-case-details",children:[(_==null?void 0:_.length)>0&&s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[_.map((L,D)=>{const M=Yi(L.metric,L.score,L.threshold);return s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:L.error?"rgba(255, 193, 7, 0.1)":L.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${L.error?"var(--warning)":L.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[s.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:L.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),L.error?s.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):s.jsxs(s.Fragment,{children:[s.jsx("span",{style:{fontSize:14,fontWeight:600,color:L.passed?"var(--success)":"var(--error)"},children:M.value}),s.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:M.comparison})]})]},D)}),!y&&h.length>0&&s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",h.length," passed"]})]}),_==null?void 0:_.filter(L=>!L.passed&&L.rationale).map((L,D)=>s.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[s.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[L.metric.replace(/_/g," ")," - Why it failed:"]}),s.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:L.rationale})]},`rationale-${D}`)),(N==null?void 0:N.length)>0&&s.jsxs("div",{style:{marginTop:8},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),N.map((L,D)=>s.jsxs("div",{style:{marginBottom:L.rationale&&!L.passed?8:4},children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"metric-name",style:{flex:1},children:L.rubric}),s.jsx("span",{className:`metric-value ${L.passed?"passed":"failed"}`,children:L.passed?"✓ Pass":"✗ Fail"})]}),!L.passed&&L.rationale&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",L.rationale]}),L.error&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",L.error]})]},D)),!y&&C.length>0&&s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",C.length," passed rubric",C.length>1?"s":""]})]}),(k==null?void 0:k.length)>0&&s.jsxs("div",{className:"invocation-summary",children:[s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",k.length,!y&&((ne=x.invocation_results)==null?void 0:ne.length)>k.length?` of ${x.invocation_results.length}`:"",")"]}),k.map((L,D)=>s.jsxs("div",{className:"invocation-item",children:[s.jsxs("div",{className:"invocation-query",children:["Turn ",L.invocation_id||D+1,": ",L.user_message||"(no message)"]}),L.actual_response&&s.jsxs("div",{className:"invocation-response",children:["Response: ",L.actual_response.substring(0,200),L.actual_response.length>200?"...":""]})]},D))]}),x.error&&s.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:x.error})]})]},T)}),l.length===0&&s.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function IS({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:o,onDelete:a,onRun:l,onClearResult:c}){var C,_,N;const{project:u}=at(),[d,p]=w.useState(e),[f,m]=w.useState("assertions");w.useEffect(()=>{p(e)},[e.id]);const x=w.useCallback(k=>{p(A=>({...A,...k})),o(k)},[o]),b=()=>{const k={id:lx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};x({invocations:[...d.invocations,k]})},T=(k,A)=>{const S=[...d.invocations];S[k]={...S[k],...A},x({invocations:S})},y=k=>{x({invocations:d.invocations.filter((A,S)=>S!==k)})},g=k=>{const A=[...d.invocations];A[k]={...A[k],expected_tool_calls:[...A[k].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},x({invocations:A})},h=(k,A,S)=>{const v=[...d.invocations],E=[...v[k].expected_tool_calls];E[A]={...E[A],...S},v[k]={...v[k],expected_tool_calls:E},x({invocations:v})},P=(k,A)=>{const S=[...d.invocations];S[k]={...S[k],expected_tool_calls:S[k].expected_tool_calls.filter((v,E)=>E!==A)},x({invocations:S})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(bo,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("input",{type:"text",value:d.name,onChange:k=>x({name:k.target.value}),placeholder:"Test case name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const k=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(k)},title:"Copy link to this test case",children:s.jsx(au,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?s.jsx(vo,{size:14,className:"spinning"}):s.jsx(Bn,{size:14}),"Run"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(Fe,{size:14})})]}),s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>m("assertions"),children:[s.jsx(ko,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),s.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>m("rubrics"),children:[s.jsx(cu,{size:14,style:{marginRight:6}}),"LLM Judges"]}),s.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>m("docs"),children:[s.jsx(yo,{size:14,style:{marginRight:6}}),"Docs"]}),s.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>m("json"),children:[s.jsx(on,{size:14,style:{marginRight:6}}),"JSON"]})]}),s.jsxs("div",{className:"editor-content",children:[f==="assertions"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),s.jsxs("select",{value:d.target_agent||"",onChange:k=>x({target_agent:k.target.value||void 0}),style:{width:"100%"},children:[s.jsx("option",{value:"",children:"root_agent"}),(C=u==null?void 0:u.agents)==null?void 0:C.map(k=>s.jsx("option",{value:k.name,children:k.name},k.name))]})]}),s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),s.jsx("input",{type:"text",value:d.tags.join(", "),onChange:k=>x({tags:k.target.value.split(",").map(A=>A.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:d.description,onChange:k=>x({description:k.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["session_input ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx($t,{height:"100%",defaultLanguage:"json",value:(()=>{var A;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((A=u==null?void 0:u.app)!=null&&A.state_keys)&&u.app.state_keys.length>0){const S={};return u.app.state_keys.forEach(v=>{v.default_value!==void 0?S[v.name]=v.default_value:S[v.name]=v.type==="string"?"":v.type==="number"?0:v.type==="boolean"?!1:v.type==="array"?[]:{}}),JSON.stringify(S,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:k=>{try{k&&x({initial_state:JSON.parse(k)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(ko,{size:14}),"Conversation Turns"]}),d.invocations.map((k,A)=>s.jsxs("div",{className:"invocation-card",children:[s.jsxs("div",{className:"invocation-number",children:[s.jsx("span",{children:A+1}),d.invocations.length>1&&s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y(A),style:{padding:4},children:s.jsx(Fe,{size:10})})]}),s.jsxs("div",{className:"invocation-content",children:[s.jsxs("div",{className:"invocation-row",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("label",{children:"User Query"}),s.jsx("textarea",{value:k.user_message,onChange:S=>T(A,{user_message:S.target.value}),placeholder:"The message to send to the agent..."})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{children:["Expected Response ",s.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),s.jsx("textarea",{value:k.expected_response||"",onChange:S=>T(A,{expected_response:S.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),k.expected_tool_calls.map((S,v)=>s.jsxs("div",{className:"tool-call-compact",children:[s.jsx("input",{type:"text",value:S.name,onChange:E=>h(A,v,{name:E.target.value}),placeholder:"tool_name",className:"tool-name-input"}),s.jsxs("div",{className:"pillbox-toggle",children:[s.jsx("button",{className:`pill ${S.args_match_mode==="subset"?"active":""}`,onClick:()=>h(A,v,{args_match_mode:"subset"}),children:"Partial"}),s.jsx("button",{className:`pill ${S.args_match_mode==="exact"?"active":""}`,onClick:()=>h(A,v,{args_match_mode:"exact"}),children:"Exact"})]}),s.jsx("div",{className:"tool-args-editor",children:s.jsx($t,{height:"22px",defaultLanguage:"json",value:JSON.stringify(S.args||{}),onChange:E=>{try{E&&h(A,v,{args:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>P(A,v),style:{padding:"4px 6px"},children:s.jsx(Fe,{size:10})})]},v)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(A),style:{marginTop:4},children:[s.jsx(Ke,{size:12})," Assert Tool Call"]})]})]},k.id)),s.jsxs("button",{className:"btn btn-secondary",onClick:b,children:[s.jsx(Ke,{size:14})," Add Turn"]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(cr,{size:14,style:{marginRight:6}}),"final_session_state ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx($t,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:k=>{if(!k||k==="{}")x({expected_final_state:void 0});else try{x({expected_final_state:JSON.parse(k)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:k,label:A,default:S,max:v})=>{const E=(d.enabled_metrics||[]).find(B=>B.metric===k),F=(E==null?void 0:E.threshold)??S;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:!!E,onChange:B=>{const $=[...d.enabled_metrics||[]];if(B.target.checked)$.push({metric:k,threshold:S});else{const ne=$.findIndex(L=>L.metric===k);ne!==-1&&$.splice(ne,1)}x({enabled_metrics:$})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,opacity:E?1:.5,minWidth:100},children:A}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:E?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:v===5?1:0,max:v,step:.1,value:F,disabled:!E,onChange:B=>{const $=[...d.enabled_metrics||[]],ne=$.findIndex(L=>L.metric===k);ne!==-1&&($[ne]={...$[ne],threshold:parseFloat(B.target.value)||0},x({enabled_metrics:$}))},style:{width:60,textAlign:"center",opacity:E?1:.3,padding:"2px 4px",fontSize:11}})]},k)})}),s.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Custom Rubrics"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((k,A)=>s.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[s.jsx("input",{type:"text",value:k.rubric,onChange:S=>{const v=[...d.rubrics];v[A]={rubric:S.target.value},x({rubrics:v})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>x({rubrics:d.rubrics.filter((S,v)=>v!==A)}),children:s.jsx(Fe,{size:12})})]},A)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({rubrics:[...d.rubrics,{rubric:""}]}),children:[s.jsx(Ke,{size:12})," Add Rubric"]})]})]}),f==="docs"&&s.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[s.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),s.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),s.jsxs("p",{children:["Each test case simulates a ",s.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Response"})," = the agent's ",s.jsx("em",{children:"final text reply"})," for that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Session State"})," = test the ",s.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),s.jsxs("p",{children:["The ",s.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",s.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{style:{marginBottom:8},children:s.jsx("strong",{children:"During one turn, an agent may:"})}),s.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[s.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),s.jsx("li",{children:"Call multiple tools"}),s.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),s.jsxs("li",{children:["Finally send a ",s.jsx("em",{children:"concluding response"})]})]}),s.jsxs("p",{children:["Only the ",s.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"response_match_score"})," uses ",s.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),s.jsx("li",{children:"Calculates word overlap (not exact string match)"}),s.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{children:s.jsx("strong",{children:"Example:"})}),s.jsxs("p",{children:["Expected: ",s.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),s.jsxs("p",{children:["Actual: ",s.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),s.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),s.jsxs("p",{style:{marginTop:8},children:["A threshold of ",s.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),s.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),s.jsxs("p",{children:[s.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Set user preferences or context"}),s.jsx("li",{children:"Simulate a specific scenario"}),s.jsx("li",{children:"Test state-dependent behavior"})]}),s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Expected Final State"})," — Verified at the ",s.jsx("em",{children:"very end"})," of the test case, ",s.jsx("strong",{children:"after ALL invocations complete"}),"."]}),s.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:s.jsxs("p",{style:{margin:0},children:[s.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),s.jsxs("p",{children:["By default, tests run against the ",s.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),s.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:'"Does the response mention the product price?"'}),s.jsx("li",{children:'"Is the tone professional and helpful?"'}),s.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),s.jsx("tbody",{children:Object.keys(nn).map(k=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:k}),s.jsx("td",{style:{padding:"8px 4px"},children:nn[k].requiresJudge?s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),s.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:nn[k].description})]},k))})]})]}),s.jsxs("section",{children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),s.jsxs("ul",{style:{marginLeft:20},children:[s.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),s.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),s.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),s.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),s.jsx("li",{children:"Use tags to organize tests by feature or priority"}),s.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),s.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx($t,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(_=d.tags)!=null&&_.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(k=>{var A;return{user_message:k.user_message,expected_response:k.expected_response||void 0,expected_tool_calls:(A=k.expected_tool_calls)!=null&&A.length?k.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(N=d.rubrics)!=null&&N.length?d.rubrics.map(k=>k.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var A,S;const k=JSON.stringify({name:d.name,description:d.description||void 0,tags:(A=d.tags)!=null&&A.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(v=>{var E;return{user_message:v.user_message,expected_response:v.expected_response||void 0,expected_tool_calls:(E=v.expected_tool_calls)!=null&&E.length?v.expected_tool_calls.map(F=>({tool_name:F.tool_name,args:F.match_type!=="name_only"&&Object.keys(F.args||{}).length?F.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(S=d.rubrics)!=null&&S.length?d.rubrics.map(v=>v.rubric):void 0},null,2);navigator.clipboard.writeText(k)},children:[s.jsx(qo,{size:14})," Copy JSON"]})})]})]}),r&&s.jsxs("div",{className:"result-panel",children:[s.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?s.jsxs(s.Fragment,{children:[s.jsx(cr,{size:18})," ",s.jsx("strong",{children:"Passed"})]}):s.jsxs(s.Fragment,{children:[s.jsx(qr,{size:18})," ",s.jsx("strong",{children:"Failed"})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[s.jsx(eg,{size:12}),"View Session"]}),c&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),s.jsx("div",{className:"result-scores",children:r.metric_results.map((k,A)=>{var v;const S=Yi(k.metric,k.score,k.threshold);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${k.passed?"passed":"failed"}`,children:S.value}),s.jsx("div",{className:"score-label",children:((v=nn[k.metric])==null?void 0:v.name)||k.metric}),s.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:S.comparison}),k.error&&s.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:k.error})]},A)})}),r.rubric_results&&r.rubric_results.length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((k,A)=>s.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:k.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${k.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[s.jsx("span",{style:{fontSize:16,color:k.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:k.passed?"✓":"✗"}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:k.rubric}),k.error&&s.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",k.error]})]})]},A))})]}),r.invocation_results.map((k,A)=>s.jsxs("div",{className:"result-details",children:[s.jsxs("h5",{children:["Turn ",A+1,": ",k.user_message.length>50?k.user_message.slice(0,50)+"…":k.user_message]}),k.metric_results.length>0&&s.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:k.metric_results.map((S,v)=>{var F;const E=Yi(S.metric,S.score,S.threshold);return s.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:S.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:S.passed?"var(--success)":"var(--error)"},children:[((F=nn[S.metric])==null?void 0:F.name)||S.metric,": ",E.value]},v)})}),s.jsxs("div",{className:"detail-box",children:[s.jsx("strong",{children:"Actual Response:"}),`
`,k.actual_response||"(no response)",`

`,k.actual_tool_calls.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("strong",{children:"Tool Calls:"}),`
`,k.actual_tool_calls.map((S,v)=>`  ${v+1}. ${S.name}(${JSON.stringify(S.args)})
`).join("")]})]})]},A)),r.error&&s.jsxs("div",{className:"result-details",children:[s.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),s.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function $S({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:o,onDelete:a,onRun:l,onExport:c}){var b,T,y,g;const[u,d]=w.useState(e.name),[p,f]=w.useState(!1);w.useEffect(()=>{d(e.name)},[e.id]);const m=w.useCallback(()=>{u!==e.name&&o({name:u})},[u,e.name,o]),x=h=>h==null?"-":`${Math.round(h*100)}%`;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(tg,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("input",{type:"text",value:u,onChange:h=>d(h.target.value),onBlur:m,placeholder:"Eval set name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const h=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(h)},title:"Copy link to this eval set",children:s.jsx(au,{size:14})}),s.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[s.jsx(on,{size:14}),"JSON"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:s.jsx(ss,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?s.jsx(vo,{size:14,className:"spinning"}):s.jsx(Bn,{size:14}),"Run All"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(Fe,{size:14})})]}),s.jsx("div",{className:"editor-content",children:p?s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),s.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx($t,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(h=>{var P,C;return{name:h.name,description:h.description||void 0,tags:(P=h.tags)!=null&&P.length?h.tags:void 0,target_agent:h.target_agent!=="root_agent"?h.target_agent:void 0,invocations:h.invocations.map(_=>{var N;return{user_message:_.user_message,expected_response:_.expected_response||void 0,expected_tool_calls:(N=_.expected_tool_calls)!=null&&N.length?_.expected_tool_calls.map(k=>({tool_name:k.tool_name,args:k.match_type!=="name_only"&&Object.keys(k.args||{}).length?k.args:void 0})):void 0}}),session_input:Object.keys(h.session_input||{}).length?{state:h.session_input}:void 0,final_session_state:Object.keys(h.final_session_state||{}).length?h.final_session_state:void 0,rubrics:(C=h.rubrics)!=null&&C.length?h.rubrics.map(_=>_.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((b=e.eval_config.metrics)==null?void 0:b.filter(h=>h.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var P;const h=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(C=>{var _,N;return{name:C.name,description:C.description||void 0,tags:(_=C.tags)!=null&&_.length?C.tags:void 0,target_agent:C.target_agent!=="root_agent"?C.target_agent:void 0,invocations:C.invocations.map(k=>{var A;return{user_message:k.user_message,expected_response:k.expected_response||void 0,expected_tool_calls:(A=k.expected_tool_calls)!=null&&A.length?k.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(C.session_input||{}).length?{state:C.session_input}:void 0,final_session_state:Object.keys(C.final_session_state||{}).length?C.final_session_state:void 0,rubrics:(N=C.rubrics)!=null&&N.length?C.rubrics.map(k=>k.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((P=e.eval_config.metrics)==null?void 0:P.filter(C=>C.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(h)},children:[s.jsx(qo,{size:14})," Copy JSON"]})})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:e.description,onChange:h=>o({description:h.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"LLM Judge Model"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),s.jsx(MS,{value:((T=e.eval_config)==null?void 0:T.judge_model)||"",onChange:h=>o({eval_config:{...e.eval_config,judge_model:h}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(sg,{size:14})," Evaluation Metrics"]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(nn).map(h=>{var k,A,S;const P=nn[h],C=(A=(k=e.eval_config)==null?void 0:k.metrics)==null?void 0:A.find(v=>v.metric===h),_=(C==null?void 0:C.enabled)??!1,N=((S=C==null?void 0:C.criterion)==null?void 0:S.threshold)??.7;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:_,onChange:v=>{var B;const E=[...((B=e.eval_config)==null?void 0:B.metrics)||[]],F=E.findIndex($=>$.metric===h);v.target.checked?F===-1?E.push({metric:h,enabled:!0,criterion:{threshold:.7}}):E[F]={...E[F],enabled:!0}:F!==-1&&(E[F]={...E[F],enabled:!1}),o({eval_config:{...e.eval_config,metrics:E}})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsxs("span",{style:{fontSize:12,opacity:_?1:.5,minWidth:140,fontWeight:_?500:400},children:[P.name,P.requiresJudge&&s.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:_?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:0,max:1,step:.1,value:N,disabled:!_,onChange:v=>{var B;const E=[...((B=e.eval_config)==null?void 0:B.metrics)||[]],F=E.findIndex($=>$.metric===h);F!==-1&&(E[F]={...E[F],criterion:{...E[F].criterion,threshold:parseFloat(v.target.value)||.7}},o({eval_config:{...e.eval_config,metrics:E}}))},style:{width:60,textAlign:"center",opacity:_?1:.3,padding:"2px 4px",fontSize:11}})]},h)}),s.jsxs("div",{className:"form-row",style:{marginTop:16},children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Default Trajectory Match Type"}),s.jsxs("select",{value:((y=e.eval_config)==null?void 0:y.default_trajectory_match_type)||"in_order",onChange:h=>o({eval_config:{...e.eval_config,default_trajectory_match_type:h.target.value}}),children:[s.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),s.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),s.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Number of Runs"}),s.jsx("input",{type:"number",min:1,max:10,value:((g=e.eval_config)==null?void 0:g.num_runs)||1,onChange:h=>o({eval_config:{...e.eval_config,num_runs:parseInt(h.target.value)||1}})}),s.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(b0,{size:14})," Coverage Summary"]}),n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"result-scores",children:[s.jsxs("div",{className:"score-card",children:[s.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),s.jsx("div",{className:"score-label",children:"Cases Passed"})]}),s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:x(n.overall_pass_rate)}),s.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([h,P])=>{var _;const C=Yi(h,P);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:"score-value",children:C.value}),s.jsxs("div",{className:"score-label",children:["Avg ",((_=nn[h])==null?void 0:_.name)||h]})]},h)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([h,P])=>{var C;return s.jsxs("div",{style:{marginBottom:8},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[s.jsx("span",{children:((C=nn[h])==null?void 0:C.name)||h}),s.jsx("span",{children:x(P)})]}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${P>=.8?"passed":"failed"}`,style:{width:`${P*100}%`}})})]},h)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),s.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),s.jsx("tbody",{children:n.case_results.map(h=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px"},children:h.eval_case_name}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:h.metric_results.map((P,C)=>{const _=Yi(P.metric,P.score,P.threshold);return s.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:P.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:P.passed?"var(--success)":"var(--error)"},children:_.value},C)})}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:h.passed?s.jsx(cr,{size:14,style:{color:"var(--success)"}}):h.error?s.jsx(yo,{size:14,style:{color:"var(--warning)"}}):s.jsx(qr,{size:14,style:{color:"var(--error)"}})})]},h.eval_case_id))})]})]})]}):s.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[s.jsx(cu,{size:32,style:{marginBottom:8,opacity:.3}}),s.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):s.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(h=>{const P=i.get(h.id);return s.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[P?P.passed?s.jsx(cr,{size:14,style:{color:"var(--success)"}}):s.jsx(qr,{size:14,style:{color:"var(--error)"}}):s.jsx(bo,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{style:{flex:1},children:h.name}),s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[h.invocations.length," turn(s)"]})]},h.id)})})]})]})})]})}function DS(){const{project:e,setProject:t}=at(),[n,r]=w.useState(""),[i,o]=w.useState(!0),[a,l]=w.useState(!1),[c,u]=w.useState(null),[d,p]=w.useState(!1);if(!e)return null;w.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const g=await Fh(e.id);r(g),l(!1)}catch(g){u(g.message)}finally{o(!1)}}function m(g){g!==void 0&&(r(g),l(!0),u(null))}async function x(){o(!0),u(null);try{const g=await Bh(e.id,n);t(g),l(!1)}catch(g){u(g.message)}finally{o(!1)}}function b(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function T(){const g=new Blob([n],{type:"text/yaml"}),h=URL.createObjectURL(g),P=document.createElement("a");P.href=h,P.download=`${e.name}.yaml`,P.click(),URL.revokeObjectURL(h)}function y(){const g=document.createElement("input");g.type="file",g.accept=".yaml,.yml",g.onchange=async h=>{var _;const P=(_=h.target.files)==null?void 0:_[0];if(!P)return;const C=await P.text();r(C),l(!0)},g.click()}return s.jsxs("div",{className:"yaml-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"yaml-header",children:[s.jsxs("div",{className:"yaml-title",children:[s.jsx("h3",{children:"Project Configuration"}),a&&s.jsxs("span",{className:"status-badge warning",children:[s.jsx(yo,{size:12}),"Unsaved changes"]}),c&&s.jsxs("span",{className:"status-badge error",children:[s.jsx(yo,{size:12}),c]}),d&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(Zh,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"yaml-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:b,title:"Copy to clipboard",children:[s.jsx(qo,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:T,title:"Download YAML",children:[s.jsx(ss,{size:14}),"Download"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:y,title:"Upload YAML",children:[s.jsx(Jo,{size:14}),"Upload"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[s.jsx(zn,{size:14}),"Reload"]}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,disabled:!a||i,children:"Apply Changes"})]})]}),s.jsx("div",{className:"yaml-editor",children:s.jsx($t,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"yaml-info",children:[s.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),s.jsxs("p",{children:["You can edit the YAML directly, then click ",s.jsx("code",{children:"Apply Changes"})," to update the project. Use ",s.jsx("code",{children:"Download"})," to save a backup or ",s.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function tf(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function FS(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function BS(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const i=t.agents.find(o=>o.id===e.agent_id);return i?`AgentTool(agent=${i.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const i=e.skillset_id,o=(r=t.skillsets)==null?void 0:r.find(a=>a.id===i);return o?`${o.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function US(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${tf(i.instruction)}"""`),i.description&&o.push(`description="${tf(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(c=>BS(c,t)).filter(c=>c&&!c.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const l={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(l)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(x=>x.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(x=>x.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${u}="${m}"`)}else o.push(`${u}=[${p}]`)}}return`${r} = Agent(
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
`)}function HS(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(N=>{const k=n[N];if(k){const S=N.toLowerCase().includes("key")||N.toLowerCase().includes("secret")?"***":k;t.push(`os.environ["${N}"] = "${S}"  # Set your ${N}`)}else t.push(`# os.environ["${N}"] = ""  # TODO: Set your ${N}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(N=>N.type==="SequentialAgent"),a=e.agents.some(N=>N.type==="LoopAgent"),l=e.agents.some(N=>N.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),l&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(N=>{var k;return N.type==="LlmAgent"&&((k=N.model)==null?void 0:k.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(N=>N.type==="LlmAgent"&&N.tools.some(k=>k.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(N=>{N.type==="LlmAgent"&&N.tools.forEach(k=>{k.type==="builtin"&&k.name&&d.add(k.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){i.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const N=e.mcp_servers.some(A=>A.connection_type==="stdio"),k=e.mcp_servers.some(A=>A.connection_type==="sse");N&&(i.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),i.add("from mcp import StdioServerParameters")),k&&i.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(N=>{"tools"in N&&N.tools&&N.tools.forEach(k=>{k.type==="skillset"&&f.add(k.skillset_id)})}),f.size>0&&(i.add("from skillset import SkillSet"),i.add("from knowledge_service import KnowledgeServiceManager")),i.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(N=>{N.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const x=Array.from(i).sort();t.push(...x),t.push(""),t.push("");const b=new Map;e.agents.forEach(N=>{const k=N.name.endsWith("_agent")?N.name:`${N.name}_agent`;b.set(N.id,k)});const T=[],y=new Set;function g(N){if(y.has(N))return;const k=e.agents.find(A=>A.id===N);k&&(k.sub_agents.forEach(A=>g(A)),y.add(N),T.push(k))}e.agents.forEach(N=>g(N.id));const h=new Map;T.forEach(N=>{N.type==="LlmAgent"&&N.tools.forEach(k=>{k.type==="mcp"&&k.server&&h.set(k.server.name,k.server)})}),h.size>0&&(t.push("# MCP Server Toolsets"),h.forEach(N=>{t.push(VS(N)),t.push("")}),t.push(""));const P=new Set;T.forEach(N=>{N.type==="LlmAgent"&&N.tools.forEach(k=>{k.type==="skillset"&&P.add(k.skillset_id)})}),P.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),P.forEach(N=>{var A;const k=(A=e.skillsets)==null?void 0:A.find(S=>S.id===N);k&&(t.push(WS(k,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(N=>{t.push(N.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(N=>{t.push(N.code),t.push("")}),t.push("")),t.push("# Models"),T.forEach(N=>{N.type==="LlmAgent"&&N.model&&(t.push(FS(N.model,`${N.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),T.forEach(N=>{t.push(US(N,e,b)),t.push("")});const C=e.agents.find(N=>N.id===e.app.root_agent_id),_=C?b.get(C.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${_},`),m){const N=e.app.plugins.map(k=>k.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${k.max_retries||3})`:`        # ${k.type}()`);t.push("    plugins=["),t.push(N.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function qS(){const{project:e}=at(),[t,n]=w.useState(!1);if(!e)return null;const r=w.useMemo(()=>HS(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(l)}return s.jsxs("div",{className:"code-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"code-header",children:[s.jsxs("div",{className:"code-title",children:[s.jsx(on,{size:16}),s.jsx("h3",{children:"Python Code"}),s.jsx("span",{className:"badge",children:"Generated"}),t&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(Zh,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[s.jsx(qo,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[s.jsx(ss,{size:14}),"Download"]})]})]}),s.jsx("div",{className:"code-editor",children:s.jsx($t,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"code-info",children:[s.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),s.jsxs("p",{children:["Place this in a file named ",s.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",s.jsx("code",{children:"adk web ."})," or ",s.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const JS=[{id:"app",label:"App",icon:sg},{id:"agents",label:"Agents",icon:rr},{id:"tools",label:"Tools",icon:Kt},{id:"callbacks",label:"Callbacks",icon:on},{id:"run",label:"Run",icon:rg},{id:"skillsets",label:"SkillSets",icon:u0},{id:"eval",label:"Evaluate",icon:Jl},{id:"yaml",label:"YAML",icon:p0},{id:"code",label:"Code",icon:on}],KS=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function qa(){var $,ne;const{projectId:e,tab:t,itemId:n}=p1(),r=ru(),{project:i,setProject:o,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=at(),[x,b]=w.useState(!0),[T,y]=w.useState(!1),[g,h]=w.useState(!1),[P,C]=w.useState(null),_=w.useRef(!0),N=w.useRef(null);w.useEffect(()=>{t&&KS.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),w.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function k(L){l(L),L==="agents"&&d?r(`/project/${e}/${L}/${d}`,{replace:!0}):L==="tools"&&f?r(`/project/${e}/${L}/${f}`,{replace:!0}):r(`/project/${e}/${L}`,{replace:!0})}function A(L){L?r(`/project/${e}/${a}/${L}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}w.useEffect(()=>(e&&S(e),()=>{o(null),u(!1)}),[e]);async function S(L){_.current=!0;try{const D=await Mh(L);o(D),N.current=JSON.stringify(D),u(!1)}catch(D){console.error("Failed to load project:",D),r("/")}finally{b(!1),setTimeout(()=>{_.current=!1},100)}}async function v(){if(i){y(!0);try{const{eval_sets:L,...D}=i;await Ul(i.id,D),N.current=JSON.stringify(i),u(!1)}catch(L){console.error("Failed to save project:",L)}finally{y(!1)}}}async function E(){if(i){h(!0),C(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let L=0,D=0;const M=[],j=[];for(const H of i.eval_sets||[]){if(H.eval_cases.length===0)continue;const G=await Ue.post(`/projects/${i.id}/eval-sets/${H.id}/run`,{});G.result&&(L+=G.result.passed_cases||0,D+=G.result.total_cases||0,G.result.case_results&&M.push(...G.result.case_results),j.push(G.result.eval_set_name||H.name||H.id))}if(M.length>0){const H={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:j.length>1?`All Tests (${j.length} sets)`:j[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:D,passed_cases:L,failed_cases:D-L,case_results:M};try{await Ue.post(`/projects/${i.id}/eval-history`,H)}catch(G){console.warn("Failed to save batch eval run to history:",G)}}C({passed:L,total:D}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>C(null),5e3)}catch(L){console.error("Failed to run tests:",L),C({passed:0,total:-1}),setTimeout(()=>C(null),5e3)}finally{h(!1)}}}const F=w.useRef(null);w.useEffect(()=>{if(i&&!_.current&&F.current){const L=i.app.models||[],D=F.current||[];if(L.some((j,H)=>{const G=D.find(z=>z.id===j.id);return G?G.provider!==j.provider||G.model_name!==j.model_name||G.api_base!==j.api_base||G.temperature!==j.temperature||G.max_output_tokens!==j.max_output_tokens||G.top_p!==j.top_p||G.top_k!==j.top_k:!1})){const j=i.app.default_model_id,H=i.agents.map(z=>{if(z.type==="LlmAgent"&&z.model){const he=z.model._appModelId;if(he){const R=L.find(te=>te.id===he);if(R)return{...z,model:{provider:R.provider,model_name:R.model_name,api_base:R.api_base,temperature:R.temperature,max_output_tokens:R.max_output_tokens,top_p:R.top_p,top_k:R.top_k,fallbacks:[],_appModelId:he}}}else if(j){const R=L.find(te=>te.id===j);if(R&&z.model.provider===R.provider&&z.model.model_name===R.model_name&&z.model.api_base===R.api_base)return{...z,model:{provider:R.provider,model_name:R.model_name,api_base:R.api_base,temperature:R.temperature,max_output_tokens:R.max_output_tokens,top_p:R.top_p,top_k:R.top_k,fallbacks:[],_appModelId:j}}}}return z});H.some((z,he)=>JSON.stringify(z)!==JSON.stringify(i.agents[he]))&&o({...i,agents:H})}}i&&(F.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const B=w.useRef(null);return w.useEffect(()=>(i&&!_.current&&N.current&&JSON.stringify(i)!==N.current&&(u(!0),B.current&&clearTimeout(B.current),B.current=setTimeout(async()=>{try{const{eval_sets:D,...M}=i;await Ul(i.id,M),N.current=JSON.stringify(i),u(!1)}catch(D){console.error("Auto-save failed:",D)}},500)),()=>{B.current&&clearTimeout(B.current)}),[i]),x?s.jsxs("div",{className:"loading-screen",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"top-bar",children:[s.jsxs("div",{className:"top-bar-left",children:[s.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[s.jsx(c0,{size:18}),"Project"]}),s.jsx("h1",{className:"project-name",children:i.name})]}),s.jsx("nav",{className:"tabs-bar",children:JS.map(L=>s.jsxs("button",{className:`tab-btn ${a===L.id?"active":""}`,onClick:()=>k(L.id),children:[s.jsx(L.icon,{size:14}),L.label]},L.id))}),s.jsxs("div",{className:"top-bar-right",children:[s.jsxs("button",{className:`btn ${P?P.total===-1?"btn-error":P.passed===P.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:E,disabled:g||!(($=i==null?void 0:i.eval_sets)!=null&&$.some(L=>L.eval_cases.length>0)),title:(ne=i==null?void 0:i.eval_sets)!=null&&ne.some(L=>L.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[g?s.jsx(x0,{size:16,className:"spin"}):s.jsx(Bn,{size:16}),g?"Testing...":P?P.total===-1?"Error":`${P.passed}/${P.total}`:"Test"]}),s.jsxs("button",{className:"btn btn-primary",onClick:v,disabled:T,children:[s.jsx(jo,{size:16}),T?"Saving...":"Save"]})]})]}),s.jsxs("main",{className:"main-content",children:[a==="app"&&s.jsx(L0,{}),a==="agents"&&s.jsx(D2,{onSelectAgent:A}),a==="tools"&&s.jsx(vS,{onSelectTool:A}),a==="callbacks"&&s.jsx(kS,{onSelectCallback:A}),a==="run"&&s.jsx(zS,{}),a==="skillsets"&&s.jsx(LS,{}),a==="eval"&&s.jsx(RS,{}),a==="yaml"&&s.jsx(DS,{}),a==="code"&&s.jsx(qS,{})]})]}):null}function QS(){const{setMcpServers:e,setBuiltinTools:t}=at();return w.useEffect(()=>{iu().then(e).catch(console.error),Uh().then(t).catch(console.error)},[e,t]),s.jsxs(z1,{children:[s.jsx(gr,{path:"/",element:s.jsx(S0,{})}),s.jsx(gr,{path:"/project/:projectId",element:s.jsx(qa,{})}),s.jsx(gr,{path:"/project/:projectId/:tab",element:s.jsx(qa,{})}),s.jsx(gr,{path:"/project/:projectId/:tab/:itemId",element:s.jsx(qa,{})}),s.jsx(gr,{path:"*",element:s.jsx(N1,{to:"/",replace:!0})})]})}Ja.createRoot(document.getElementById("root")).render(s.jsx(Ct.StrictMode,{children:s.jsx(L1,{children:s.jsx(QS,{})})}));
