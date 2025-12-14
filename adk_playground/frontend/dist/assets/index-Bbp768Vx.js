function ey(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Io(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wf={exports:{}},Oo={},Hf={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),ty=Symbol.for("react.portal"),ny=Symbol.for("react.fragment"),ry=Symbol.for("react.strict_mode"),sy=Symbol.for("react.profiler"),iy=Symbol.for("react.provider"),oy=Symbol.for("react.context"),ay=Symbol.for("react.forward_ref"),ly=Symbol.for("react.suspense"),cy=Symbol.for("react.memo"),uy=Symbol.for("react.lazy"),gd=Symbol.iterator;function dy(e){return e===null||typeof e!="object"?null:(e=gd&&e[gd]||e["@@iterator"],typeof e=="function"?e:null)}var qf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jf=Object.assign,Kf={};function es(e,t,n){this.props=e,this.context=t,this.refs=Kf,this.updater=n||qf}es.prototype.isReactComponent={};es.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};es.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gf(){}Gf.prototype=es.prototype;function gc(e,t,n){this.props=e,this.context=t,this.refs=Kf,this.updater=n||qf}var xc=gc.prototype=new Gf;xc.constructor=gc;Jf(xc,es.prototype);xc.isPureReactComponent=!0;var xd=Array.isArray,Qf=Object.prototype.hasOwnProperty,yc={current:null},Yf={key:!0,ref:!0,__self:!0,__source:!0};function Xf(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Qf.call(t,r)&&!Yf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:li,type:e,key:o,ref:a,props:i,_owner:yc.current}}function py(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vc(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function fy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yd=/\/+/g;function da(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fy(""+e.key):t.toString(36)}function Bi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case li:case ty:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+da(a,0):r,xd(i)?(n="",e!=null&&(n=e.replace(yd,"$&/")+"/"),Bi(i,t,n,"",function(u){return u})):i!=null&&(vc(i)&&(i=py(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(yd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",xd(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+da(o,l);a+=Bi(o,t,n,c,i)}else if(c=dy(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+da(o,l++),a+=Bi(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function vi(e,t,n){if(e==null)return e;var r=[],i=0;return Bi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function my(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Ui={transition:null},hy={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Ui,ReactCurrentOwner:yc};function Zf(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:vi,forEach:function(e,t,n){vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!vc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};je.Component=es;je.Fragment=ny;je.Profiler=sy;je.PureComponent=gc;je.StrictMode=ry;je.Suspense=ly;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy;je.act=Zf;je.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=yc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Qf.call(t,c)&&!Yf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:li,type:e.type,key:i,ref:o,props:r,_owner:a}};je.createContext=function(e){return e={$$typeof:oy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:iy,_context:e},e.Consumer=e};je.createElement=Xf;je.createFactory=function(e){var t=Xf.bind(null,e);return t.type=e,t};je.createRef=function(){return{current:null}};je.forwardRef=function(e){return{$$typeof:ay,render:e}};je.isValidElement=vc;je.lazy=function(e){return{$$typeof:uy,_payload:{_status:-1,_result:e},_init:my}};je.memo=function(e,t){return{$$typeof:cy,type:e,compare:t===void 0?null:t}};je.startTransition=function(e){var t=Ui.transition;Ui.transition={};try{e()}finally{Ui.transition=t}};je.unstable_act=Zf;je.useCallback=function(e,t){return mt.current.useCallback(e,t)};je.useContext=function(e){return mt.current.useContext(e)};je.useDebugValue=function(){};je.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};je.useEffect=function(e,t){return mt.current.useEffect(e,t)};je.useId=function(){return mt.current.useId()};je.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};je.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};je.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};je.useMemo=function(e,t){return mt.current.useMemo(e,t)};je.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};je.useRef=function(e){return mt.current.useRef(e)};je.useState=function(e){return mt.current.useState(e)};je.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};je.useTransition=function(){return mt.current.useTransition()};je.version="18.3.1";Hf.exports=je;var k=Hf.exports;const zt=Io(k),gy=ey({__proto__:null,default:zt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy=k,yy=Symbol.for("react.element"),vy=Symbol.for("react.fragment"),by=Object.prototype.hasOwnProperty,ky=xy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wy={key:!0,ref:!0,__self:!0,__source:!0};function em(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)by.call(t,r)&&!wy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:yy,type:e,key:o,ref:a,props:i,_owner:ky.current}}Oo.Fragment=vy;Oo.jsx=em;Oo.jsxs=em;Wf.exports=Oo;var s=Wf.exports,rl={},tm={exports:{}},Lt={},nm={exports:{}},rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,M){var w=$.length;$.push(M);e:for(;0<w;){var V=w-1>>>1,Q=$[V];if(0<i(Q,M))$[V]=M,$[w]=Q,w=V;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var M=$[0],w=$.pop();if(w!==M){$[0]=w;e:for(var V=0,Q=$.length,h=Q>>>1;V<h;){var F=2*(V+1)-1,z=$[F],G=F+1,ge=$[G];if(0>i(z,w))G<Q&&0>i(ge,z)?($[V]=ge,$[G]=w,V=G):($[V]=z,$[F]=w,V=F);else if(G<Q&&0>i(ge,w))$[V]=ge,$[G]=w,V=G;else break e}}return M}function i($,M){var w=$.sortIndex-M.sortIndex;return w!==0?w:$.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,y=!1,j=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g($){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=$)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function P($){if(j=!1,g($),!y)if(n(c)!==null)y=!0,se(N);else{var M=n(u);M!==null&&T(P,M.startTime-$)}}function N($,M){y=!1,j&&(j=!1,v(b),b=-1),m=!0;var w=f;try{for(g(M),p=n(c);p!==null&&(!(p.expirationTime>M)||$&&!L());){var V=p.callback;if(typeof V=="function"){p.callback=null,f=p.priorityLevel;var Q=V(p.expirationTime<=M);M=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(c)&&r(c),g(M)}else r(c);p=n(c)}if(p!==null)var h=!0;else{var F=n(u);F!==null&&T(P,F.startTime-M),h=!1}return h}finally{p=null,f=w,m=!1}}var _=!1,C=null,b=-1,R=5,S=-1;function L(){return!(e.unstable_now()-S<R)}function I(){if(C!==null){var $=e.unstable_now();S=$;var M=!0;try{M=C(!0,$)}finally{M?q():(_=!1,C=null)}}else _=!1}var q;if(typeof x=="function")q=function(){x(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,B=U.port2;U.port1.onmessage=I,q=function(){B.postMessage(null)}}else q=function(){E(I,0)};function se($){C=$,_||(_=!0,q())}function T($,M){b=E(function(){$(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,se(N))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var w=f;f=M;try{return $()}finally{f=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,M){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var w=f;f=$;try{return M()}finally{f=w}},e.unstable_scheduleCallback=function($,M,w){var V=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?V+w:V):w=V,$){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=w+Q,$={id:d++,callback:M,priorityLevel:$,startTime:w,expirationTime:Q,sortIndex:-1},w>V?($.sortIndex=w,t(u,$),n(c)===null&&$===n(u)&&(j?(v(b),b=-1):j=!0,T(P,w-V))):($.sortIndex=Q,t(c,$),y||m||(y=!0,se(N))),$},e.unstable_shouldYield=L,e.unstable_wrapCallback=function($){var M=f;return function(){var w=f;f=M;try{return $.apply(this,arguments)}finally{f=w}}}})(rm);nm.exports=rm;var jy=nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y=k,Pt=jy;function te(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sm=new Set,$s={};function yr(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for($s[e]=t,e=0;e<t.length;e++)sm.add(t[e])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,Sy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},bd={};function Cy(e){return sl.call(bd,e)?!0:sl.call(vd,e)?!1:Sy.test(e)?bd[e]=!0:(vd[e]=!0,!1)}function Ny(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ey(e,t,n,r){if(t===null||typeof t>"u"||Ny(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ht(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var bc=/[\-:]([a-z])/g;function kc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bc,kc);st[t]=new ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bc,kc);st[t]=new ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bc,kc);st[t]=new ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new ht(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function wc(e,t,n,r){var i=st.hasOwnProperty(t)?st[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ey(t,n,i,r)&&(n=null),r||i===null?Cy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var _n=_y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bi=Symbol.for("react.element"),_r=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),jc=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),om=Symbol.for("react.context"),_c=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),Sc=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),am=Symbol.for("react.offscreen"),kd=Symbol.iterator;function as(e){return e===null||typeof e!="object"?null:(e=kd&&e[kd]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Object.assign,pa;function bs(e){if(pa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pa=t&&t[1]||""}return`
`+pa+e}var fa=!1;function ma(e,t){if(!e||fa)return"";fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bs(e):""}function zy(e){switch(e.tag){case 5:return bs(e.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return e=ma(e.type,!1),e;case 11:return e=ma(e.type.render,!1),e;case 1:return e=ma(e.type,!0),e;default:return""}}function ll(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sr:return"Fragment";case _r:return"Portal";case il:return"Profiler";case jc:return"StrictMode";case ol:return"Suspense";case al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case om:return(e.displayName||"Context")+".Consumer";case im:return(e._context.displayName||"Context")+".Provider";case _c:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Sc:return t=e.displayName||null,t!==null?t:ll(e.type)||"Memo";case En:t=e._payload,e=e._init;try{return ll(e(t))}catch{}}return null}function Ty(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ll(t);case 8:return t===jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Py(e){var t=lm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ki(e){e._valueTracker||(e._valueTracker=Py(e))}function cm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return Ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function um(e,t){t=t.checked,t!=null&&wc(e,"checked",t,!1)}function ul(e,t){um(e,t);var n=Hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,Hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ks=Array.isArray;function Or(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Hn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(te(91));return Ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _d(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(te(92));if(ks(n)){if(1<n.length)throw Error(te(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Hn(n)}}function dm(e,t){var n=Hn(t.value),r=Hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wi,fm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wi=wi||document.createElement("div"),wi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ds(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ly=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(e){Ly.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ss[t]=Ss[e]})});function mm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ss.hasOwnProperty(e)&&Ss[e]?(""+t).trim():t+"px"}function hm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ay=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Ay[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(te(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(te(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(te(61))}if(t.style!=null&&typeof t.style!="object")throw Error(te(62))}}function hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function Cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,$r=null,Dr=null;function Cd(e){if(e=di(e)){if(typeof xl!="function")throw Error(te(280));var t=e.stateNode;t&&(t=Uo(t),xl(e.stateNode,e.type,t))}}function gm(e){$r?Dr?Dr.push(e):Dr=[e]:$r=e}function xm(){if($r){var e=$r,t=Dr;if(Dr=$r=null,Cd(e),t)for(e=0;e<t.length;e++)Cd(t[e])}}function ym(e,t){return e(t)}function vm(){}var ha=!1;function bm(e,t,n){if(ha)return e(t,n);ha=!0;try{return ym(e,t,n)}finally{ha=!1,($r!==null||Dr!==null)&&(vm(),xm())}}function Fs(e,t){var n=e.stateNode;if(n===null)return null;var r=Uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(te(231,t,typeof n));return n}var yl=!1;if(bn)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){yl=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{yl=!1}function Ry(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Cs=!1,so=null,io=!1,vl=null,My={onError:function(e){Cs=!0,so=e}};function Iy(e,t,n,r,i,o,a,l,c){Cs=!1,so=null,Ry.apply(My,arguments)}function Oy(e,t,n,r,i,o,a,l,c){if(Iy.apply(this,arguments),Cs){if(Cs){var u=so;Cs=!1,so=null}else throw Error(te(198));io||(io=!0,vl=u)}}function vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function km(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nd(e){if(vr(e)!==e)throw Error(te(188))}function $y(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(te(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Nd(i),e;if(o===r)return Nd(i),t;o=o.sibling}throw Error(te(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==r)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?e:t}function wm(e){return e=$y(e),e!==null?jm(e):null}function jm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=jm(e);if(t!==null)return t;e=e.sibling}return null}var _m=Pt.unstable_scheduleCallback,Ed=Pt.unstable_cancelCallback,Dy=Pt.unstable_shouldYield,Fy=Pt.unstable_requestPaint,We=Pt.unstable_now,By=Pt.unstable_getCurrentPriorityLevel,Nc=Pt.unstable_ImmediatePriority,Sm=Pt.unstable_UserBlockingPriority,oo=Pt.unstable_NormalPriority,Uy=Pt.unstable_LowPriority,Cm=Pt.unstable_IdlePriority,$o=null,cn=null;function Vy(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot($o,e,void 0,(e.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:qy,Wy=Math.log,Hy=Math.LN2;function qy(e){return e>>>=0,e===0?32:31-(Wy(e)/Hy|0)|0}var ji=64,_i=4194304;function ws(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ws(l):(o&=a,o!==0&&(r=ws(o)))}else a=n&~i,a!==0?r=ws(a):o!==0&&(r=ws(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qt(t),i=1<<n,r|=e[n],t&=~i;return r}function Jy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ky(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Qt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Jy(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nm(){var e=ji;return ji<<=1,!(ji&4194240)&&(ji=64),e}function ga(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qt(t),e[t]=n}function Gy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ec(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Te=0;function Em(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zm,zc,Tm,Pm,Lm,kl=!1,Si=[],In=null,On=null,$n=null,Bs=new Map,Us=new Map,Tn=[],Qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":Bs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(t.pointerId)}}function cs(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=di(t),t!==null&&zc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yy(e,t,n,r,i){switch(t){case"focusin":return In=cs(In,e,t,n,r,i),!0;case"dragenter":return On=cs(On,e,t,n,r,i),!0;case"mouseover":return $n=cs($n,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Bs.set(o,cs(Bs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Us.set(o,cs(Us.get(o)||null,e,t,n,r,i)),!0}return!1}function Am(e){var t=ir(e.target);if(t!==null){var n=vr(t);if(n!==null){if(t=n.tag,t===13){if(t=km(n),t!==null){e.blockedOn=t,Lm(e.priority,function(){Tm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=di(n),t!==null&&zc(t),e.blockedOn=n,!1;t.shift()}return!0}function Td(e,t,n){Vi(e)&&n.delete(t)}function Xy(){kl=!1,In!==null&&Vi(In)&&(In=null),On!==null&&Vi(On)&&(On=null),$n!==null&&Vi($n)&&($n=null),Bs.forEach(Td),Us.forEach(Td)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,Xy)))}function Vs(e){function t(i){return us(i,e)}if(0<Si.length){us(Si[0],e);for(var n=1;n<Si.length;n++){var r=Si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(In!==null&&us(In,e),On!==null&&us(On,e),$n!==null&&us($n,e),Bs.forEach(t),Us.forEach(t),n=0;n<Tn.length;n++)r=Tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tn.length&&(n=Tn[0],n.blockedOn===null);)Am(n),n.blockedOn===null&&Tn.shift()}var Fr=_n.ReactCurrentBatchConfig,lo=!0;function Zy(e,t,n,r){var i=Te,o=Fr.transition;Fr.transition=null;try{Te=1,Tc(e,t,n,r)}finally{Te=i,Fr.transition=o}}function ev(e,t,n,r){var i=Te,o=Fr.transition;Fr.transition=null;try{Te=4,Tc(e,t,n,r)}finally{Te=i,Fr.transition=o}}function Tc(e,t,n,r){if(lo){var i=wl(e,t,n,r);if(i===null)Ca(e,t,r,co,n),zd(e,r);else if(Yy(i,e,t,n,r))r.stopPropagation();else if(zd(e,r),t&4&&-1<Qy.indexOf(e)){for(;i!==null;){var o=di(i);if(o!==null&&zm(o),o=wl(e,t,n,r),o===null&&Ca(e,t,r,co,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ca(e,t,r,null,n)}}var co=null;function wl(e,t,n,r){if(co=null,e=Cc(r),e=ir(e),e!==null)if(t=vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=km(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return co=e,null}function Rm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(By()){case Nc:return 1;case Sm:return 4;case oo:case Uy:return 16;case Cm:return 536870912;default:return 16}default:return 16}}var Ln=null,Pc=null,Wi=null;function Mm(){if(Wi)return Wi;var e,t=Pc,n=t.length,r,i="value"in Ln?Ln.value:Ln.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Wi=i.slice(e,1<r?1-r:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ci(){return!0}function Pd(){return!1}function At(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ci:Pd,this.isPropagationStopped=Pd,this}return Ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),t}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=At(ts),ui=Ue({},ts,{view:0,detail:0}),tv=At(ui),xa,ya,ds,Do=Ue({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ds&&(ds&&e.type==="mousemove"?(xa=e.screenX-ds.screenX,ya=e.screenY-ds.screenY):ya=xa=0,ds=e),xa)},movementY:function(e){return"movementY"in e?e.movementY:ya}}),Ld=At(Do),nv=Ue({},Do,{dataTransfer:0}),rv=At(nv),sv=Ue({},ui,{relatedTarget:0}),va=At(sv),iv=Ue({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=At(iv),av=Ue({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lv=At(av),cv=Ue({},ts,{data:0}),Ad=At(cv),uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pv[e])?!!t[e]:!1}function Ac(){return fv}var mv=Ue({},ui,{key:function(e){if(e.key){var t=uv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hv=At(mv),gv=Ue({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=At(gv),xv=Ue({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),yv=At(xv),vv=Ue({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=At(vv),kv=Ue({},Do,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=At(kv),jv=[9,13,27,32],Rc=bn&&"CompositionEvent"in window,Ns=null;bn&&"documentMode"in document&&(Ns=document.documentMode);var _v=bn&&"TextEvent"in window&&!Ns,Im=bn&&(!Rc||Ns&&8<Ns&&11>=Ns),Md=" ",Id=!1;function Om(e,t){switch(e){case"keyup":return jv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function Sv(e,t){switch(e){case"compositionend":return $m(t);case"keypress":return t.which!==32?null:(Id=!0,Md);case"textInput":return e=t.data,e===Md&&Id?null:e;default:return null}}function Cv(e,t){if(Cr)return e==="compositionend"||!Rc&&Om(e,t)?(e=Mm(),Wi=Pc=Ln=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Im&&t.locale!=="ko"?null:t.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Nv[e.type]:t==="textarea"}function Dm(e,t,n,r){gm(r),t=uo(t,"onChange"),0<t.length&&(n=new Lc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Es=null,Ws=null;function Ev(e){Qm(e,0)}function Fo(e){var t=zr(e);if(cm(t))return e}function zv(e,t){if(e==="change")return t}var Fm=!1;if(bn){var ba;if(bn){var ka="oninput"in document;if(!ka){var $d=document.createElement("div");$d.setAttribute("oninput","return;"),ka=typeof $d.oninput=="function"}ba=ka}else ba=!1;Fm=ba&&(!document.documentMode||9<document.documentMode)}function Dd(){Es&&(Es.detachEvent("onpropertychange",Bm),Ws=Es=null)}function Bm(e){if(e.propertyName==="value"&&Fo(Ws)){var t=[];Dm(t,Ws,e,Cc(e)),bm(Ev,t)}}function Tv(e,t,n){e==="focusin"?(Dd(),Es=t,Ws=n,Es.attachEvent("onpropertychange",Bm)):e==="focusout"&&Dd()}function Pv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(Ws)}function Lv(e,t){if(e==="click")return Fo(t)}function Av(e,t){if(e==="input"||e==="change")return Fo(t)}function Rv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zt=typeof Object.is=="function"?Object.is:Rv;function Hs(e,t){if(Zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sl.call(t,i)||!Zt(e[i],t[i]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bd(e,t){var n=Fd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fd(n)}}function Um(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Um(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vm(){for(var e=window,t=ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ro(e.document)}return t}function Mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mv(e){var t=Vm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Um(n.ownerDocument.documentElement,n)){if(r!==null&&Mc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Bd(n,o);var a=Bd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Iv=bn&&"documentMode"in document&&11>=document.documentMode,Nr=null,jl=null,zs=null,_l=!1;function Ud(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_l||Nr==null||Nr!==ro(r)||(r=Nr,"selectionStart"in r&&Mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zs&&Hs(zs,r)||(zs=r,r=uo(jl,"onSelect"),0<r.length&&(t=new Lc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionend:Ni("Transition","TransitionEnd")},wa={},Wm={};bn&&(Wm=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Bo(e){if(wa[e])return wa[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wm)return wa[e]=t[n];return e}var Hm=Bo("animationend"),qm=Bo("animationiteration"),Jm=Bo("animationstart"),Km=Bo("transitionend"),Gm=new Map,Vd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(e,t){Gm.set(e,t),yr(t,[e])}for(var ja=0;ja<Vd.length;ja++){var _a=Vd[ja],Ov=_a.toLowerCase(),$v=_a[0].toUpperCase()+_a.slice(1);Kn(Ov,"on"+$v)}Kn(Hm,"onAnimationEnd");Kn(qm,"onAnimationIteration");Kn(Jm,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Km,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dv=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function Wd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Oy(r,t,void 0,e),e.currentTarget=null}function Qm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Wd(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Wd(i,l,u),o=c}}}if(io)throw e=vl,io=!1,vl=null,e}function Me(e,t){var n=t[zl];n===void 0&&(n=t[zl]=new Set);var r=e+"__bubble";n.has(r)||(Ym(t,e,2,!1),n.add(r))}function Sa(e,t,n){var r=0;t&&(r|=4),Ym(n,e,r,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function qs(e){if(!e[Ei]){e[Ei]=!0,sm.forEach(function(n){n!=="selectionchange"&&(Dv.has(n)||Sa(n,!1,e),Sa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,Sa("selectionchange",!1,t))}}function Ym(e,t,n,r){switch(Rm(t)){case 1:var i=Zy;break;case 4:i=ev;break;default:i=Tc}n=i.bind(null,t,n,e),i=void 0,!yl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ca(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=ir(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}bm(function(){var u=o,d=Cc(n),p=[];e:{var f=Gm.get(e);if(f!==void 0){var m=Lc,y=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":m=hv;break;case"focusin":y="focus",m=va;break;case"focusout":y="blur",m=va;break;case"beforeblur":case"afterblur":m=va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ld;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=yv;break;case Hm:case qm:case Jm:m=ov;break;case Km:m=bv;break;case"scroll":m=tv;break;case"wheel":m=wv;break;case"copy":case"cut":case"paste":m=lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Rd}var j=(t&4)!==0,E=!j&&e==="scroll",v=j?f!==null?f+"Capture":null:f;j=[];for(var x=u,g;x!==null;){g=x;var P=g.stateNode;if(g.tag===5&&P!==null&&(g=P,v!==null&&(P=Fs(x,v),P!=null&&j.push(Js(x,P,g)))),E)break;x=x.return}0<j.length&&(f=new m(f,y,null,n,d),p.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==gl&&(y=n.relatedTarget||n.fromElement)&&(ir(y)||y[kn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?ir(y):null,y!==null&&(E=vr(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(j=Ld,P="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(j=Rd,P="onPointerLeave",v="onPointerEnter",x="pointer"),E=m==null?f:zr(m),g=y==null?f:zr(y),f=new j(P,x+"leave",m,n,d),f.target=E,f.relatedTarget=g,P=null,ir(d)===u&&(j=new j(v,x+"enter",y,n,d),j.target=g,j.relatedTarget=E,P=j),E=P,m&&y)t:{for(j=m,v=y,x=0,g=j;g;g=kr(g))x++;for(g=0,P=v;P;P=kr(P))g++;for(;0<x-g;)j=kr(j),x--;for(;0<g-x;)v=kr(v),g--;for(;x--;){if(j===v||v!==null&&j===v.alternate)break t;j=kr(j),v=kr(v)}j=null}else j=null;m!==null&&Hd(p,f,m,j,!1),y!==null&&E!==null&&Hd(p,E,y,j,!0)}}e:{if(f=u?zr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=zv;else if(Od(f))if(Fm)N=Av;else{N=Pv;var _=Tv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Lv);if(N&&(N=N(e,u))){Dm(p,N,n,d);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&dl(f,"number",f.value)}switch(_=u?zr(u):window,e){case"focusin":(Od(_)||_.contentEditable==="true")&&(Nr=_,jl=u,zs=null);break;case"focusout":zs=jl=Nr=null;break;case"mousedown":_l=!0;break;case"contextmenu":case"mouseup":case"dragend":_l=!1,Ud(p,n,d);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":Ud(p,n,d)}var C;if(Rc)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Cr?Om(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Im&&n.locale!=="ko"&&(Cr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Cr&&(C=Mm()):(Ln=d,Pc="value"in Ln?Ln.value:Ln.textContent,Cr=!0)),_=uo(u,b),0<_.length&&(b=new Ad(b,e,null,n,d),p.push({event:b,listeners:_}),C?b.data=C:(C=$m(n),C!==null&&(b.data=C)))),(C=_v?Sv(e,n):Cv(e,n))&&(u=uo(u,"onBeforeInput"),0<u.length&&(d=new Ad("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Qm(p,t)})}function Js(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fs(e,n),o!=null&&r.unshift(Js(e,o,i)),o=Fs(e,t),o!=null&&r.push(Js(e,o,i))),e=e.return}return r}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Fs(n,o),c!=null&&a.unshift(Js(n,c,l))):i||(c=Fs(n,o),c!=null&&a.push(Js(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Fv=/\r\n?/g,Bv=/\u0000|\uFFFD/g;function qd(e){return(typeof e=="string"?e:""+e).replace(Fv,`
`).replace(Bv,"")}function zi(e,t,n){if(t=qd(t),qd(e)!==t&&n)throw Error(te(425))}function po(){}var Sl=null,Cl=null;function Nl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var El=typeof setTimeout=="function"?setTimeout:void 0,Uv=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,Vv=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(e){return Jd.resolve(null).then(e).catch(Wv)}:El;function Wv(e){setTimeout(function(){throw e})}function Na(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vs(t)}function Dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ns=Math.random().toString(36).slice(2),sn="__reactFiber$"+ns,Ks="__reactProps$"+ns,kn="__reactContainer$"+ns,zl="__reactEvents$"+ns,Hv="__reactListeners$"+ns,qv="__reactHandles$"+ns;function ir(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kn]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kd(e);e!==null;){if(n=e[sn])return n;e=Kd(e)}return t}e=n,n=e.parentNode}return null}function di(e){return e=e[sn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(te(33))}function Uo(e){return e[Ks]||null}var Tl=[],Tr=-1;function Gn(e){return{current:e}}function Ie(e){0>Tr||(e.current=Tl[Tr],Tl[Tr]=null,Tr--)}function Ae(e,t){Tr++,Tl[Tr]=e.current,e.current=t}var qn={},lt=Gn(qn),vt=Gn(!1),pr=qn;function qr(e,t){var n=e.type.contextTypes;if(!n)return qn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function bt(e){return e=e.childContextTypes,e!=null}function fo(){Ie(vt),Ie(lt)}function Gd(e,t,n){if(lt.current!==qn)throw Error(te(168));Ae(lt,t),Ae(vt,n)}function Xm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(te(108,Ty(e)||"Unknown",i));return Ue({},n,r)}function mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,pr=lt.current,Ae(lt,e),Ae(vt,vt.current),!0}function Qd(e,t,n){var r=e.stateNode;if(!r)throw Error(te(169));n?(e=Xm(e,t,pr),r.__reactInternalMemoizedMergedChildContext=e,Ie(vt),Ie(lt),Ae(lt,e)):Ie(vt),Ae(vt,n)}var hn=null,Vo=!1,Ea=!1;function Zm(e){hn===null?hn=[e]:hn.push(e)}function Jv(e){Vo=!0,Zm(e)}function Qn(){if(!Ea&&hn!==null){Ea=!0;var e=0,t=Te;try{var n=hn;for(Te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}hn=null,Vo=!1}catch(i){throw hn!==null&&(hn=hn.slice(e+1)),_m(Nc,Qn),i}finally{Te=t,Ea=!1}}return null}var Pr=[],Lr=0,ho=null,go=0,It=[],Ot=0,fr=null,gn=1,xn="";function nr(e,t){Pr[Lr++]=go,Pr[Lr++]=ho,ho=e,go=t}function eh(e,t,n){It[Ot++]=gn,It[Ot++]=xn,It[Ot++]=fr,fr=e;var r=gn;e=xn;var i=32-Qt(r)-1;r&=~(1<<i),n+=1;var o=32-Qt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,gn=1<<32-Qt(t)+i|n<<i|r,xn=o+e}else gn=1<<o|n<<i|r,xn=e}function Ic(e){e.return!==null&&(nr(e,1),eh(e,1,0))}function Oc(e){for(;e===ho;)ho=Pr[--Lr],Pr[Lr]=null,go=Pr[--Lr],Pr[Lr]=null;for(;e===fr;)fr=It[--Ot],It[Ot]=null,xn=It[--Ot],It[Ot]=null,gn=It[--Ot],It[Ot]=null}var Tt=null,Nt=null,Oe=!1,Gt=null;function th(e,t){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Tt=e,Nt=Dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Tt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fr!==null?{id:gn,overflow:xn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Tt=e,Nt=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if(Oe){var t=Nt;if(t){var n=t;if(!Yd(e,t)){if(Pl(e))throw Error(te(418));t=Dn(n.nextSibling);var r=Tt;t&&Yd(e,t)?th(r,n):(e.flags=e.flags&-4097|2,Oe=!1,Tt=e)}}else{if(Pl(e))throw Error(te(418));e.flags=e.flags&-4097|2,Oe=!1,Tt=e}}}function Xd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function Ti(e){if(e!==Tt)return!1;if(!Oe)return Xd(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Nl(e.type,e.memoizedProps)),t&&(t=Nt)){if(Pl(e))throw nh(),Error(te(418));for(;t;)th(e,t),t=Dn(t.nextSibling)}if(Xd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(te(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=Dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=Tt?Dn(e.stateNode.nextSibling):null;return!0}function nh(){for(var e=Nt;e;)e=Dn(e.nextSibling)}function Jr(){Nt=Tt=null,Oe=!1}function $c(e){Gt===null?Gt=[e]:Gt.push(e)}var Kv=_n.ReactCurrentBatchConfig;function ps(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var r=n.stateNode}if(!r)throw Error(te(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,e))}return e}function Pi(e,t){throw e=Object.prototype.toString.call(t),Error(te(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zd(e){var t=e._init;return t(e._payload)}function rh(e){function t(v,x){if(e){var g=v.deletions;g===null?(v.deletions=[x],v.flags|=16):g.push(x)}}function n(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function r(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function i(v,x){return v=Vn(v,x),v.index=0,v.sibling=null,v}function o(v,x,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<x?(v.flags|=2,x):g):(v.flags|=2,x)):(v.flags|=1048576,x)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,x,g,P){return x===null||x.tag!==6?(x=Ma(g,v.mode,P),x.return=v,x):(x=i(x,g),x.return=v,x)}function c(v,x,g,P){var N=g.type;return N===Sr?d(v,x,g.props.children,P,g.key):x!==null&&(x.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===En&&Zd(N)===x.type)?(P=i(x,g.props),P.ref=ps(v,x,g),P.return=v,P):(P=Xi(g.type,g.key,g.props,null,v.mode,P),P.ref=ps(v,x,g),P.return=v,P)}function u(v,x,g,P){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=Ia(g,v.mode,P),x.return=v,x):(x=i(x,g.children||[]),x.return=v,x)}function d(v,x,g,P,N){return x===null||x.tag!==7?(x=cr(g,v.mode,P,N),x.return=v,x):(x=i(x,g),x.return=v,x)}function p(v,x,g){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ma(""+x,v.mode,g),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case bi:return g=Xi(x.type,x.key,x.props,null,v.mode,g),g.ref=ps(v,null,x),g.return=v,g;case _r:return x=Ia(x,v.mode,g),x.return=v,x;case En:var P=x._init;return p(v,P(x._payload),g)}if(ks(x)||as(x))return x=cr(x,v.mode,g,null),x.return=v,x;Pi(v,x)}return null}function f(v,x,g,P){var N=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:l(v,x,""+g,P);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case bi:return g.key===N?c(v,x,g,P):null;case _r:return g.key===N?u(v,x,g,P):null;case En:return N=g._init,f(v,x,N(g._payload),P)}if(ks(g)||as(g))return N!==null?null:d(v,x,g,P,null);Pi(v,g)}return null}function m(v,x,g,P,N){if(typeof P=="string"&&P!==""||typeof P=="number")return v=v.get(g)||null,l(x,v,""+P,N);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case bi:return v=v.get(P.key===null?g:P.key)||null,c(x,v,P,N);case _r:return v=v.get(P.key===null?g:P.key)||null,u(x,v,P,N);case En:var _=P._init;return m(v,x,g,_(P._payload),N)}if(ks(P)||as(P))return v=v.get(g)||null,d(x,v,P,N,null);Pi(x,P)}return null}function y(v,x,g,P){for(var N=null,_=null,C=x,b=x=0,R=null;C!==null&&b<g.length;b++){C.index>b?(R=C,C=null):R=C.sibling;var S=f(v,C,g[b],P);if(S===null){C===null&&(C=R);break}e&&C&&S.alternate===null&&t(v,C),x=o(S,x,b),_===null?N=S:_.sibling=S,_=S,C=R}if(b===g.length)return n(v,C),Oe&&nr(v,b),N;if(C===null){for(;b<g.length;b++)C=p(v,g[b],P),C!==null&&(x=o(C,x,b),_===null?N=C:_.sibling=C,_=C);return Oe&&nr(v,b),N}for(C=r(v,C);b<g.length;b++)R=m(C,v,b,g[b],P),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?b:R.key),x=o(R,x,b),_===null?N=R:_.sibling=R,_=R);return e&&C.forEach(function(L){return t(v,L)}),Oe&&nr(v,b),N}function j(v,x,g,P){var N=as(g);if(typeof N!="function")throw Error(te(150));if(g=N.call(g),g==null)throw Error(te(151));for(var _=N=null,C=x,b=x=0,R=null,S=g.next();C!==null&&!S.done;b++,S=g.next()){C.index>b?(R=C,C=null):R=C.sibling;var L=f(v,C,S.value,P);if(L===null){C===null&&(C=R);break}e&&C&&L.alternate===null&&t(v,C),x=o(L,x,b),_===null?N=L:_.sibling=L,_=L,C=R}if(S.done)return n(v,C),Oe&&nr(v,b),N;if(C===null){for(;!S.done;b++,S=g.next())S=p(v,S.value,P),S!==null&&(x=o(S,x,b),_===null?N=S:_.sibling=S,_=S);return Oe&&nr(v,b),N}for(C=r(v,C);!S.done;b++,S=g.next())S=m(C,v,b,S.value,P),S!==null&&(e&&S.alternate!==null&&C.delete(S.key===null?b:S.key),x=o(S,x,b),_===null?N=S:_.sibling=S,_=S);return e&&C.forEach(function(I){return t(v,I)}),Oe&&nr(v,b),N}function E(v,x,g,P){if(typeof g=="object"&&g!==null&&g.type===Sr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case bi:e:{for(var N=g.key,_=x;_!==null;){if(_.key===N){if(N=g.type,N===Sr){if(_.tag===7){n(v,_.sibling),x=i(_,g.props.children),x.return=v,v=x;break e}}else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===En&&Zd(N)===_.type){n(v,_.sibling),x=i(_,g.props),x.ref=ps(v,_,g),x.return=v,v=x;break e}n(v,_);break}else t(v,_);_=_.sibling}g.type===Sr?(x=cr(g.props.children,v.mode,P,g.key),x.return=v,v=x):(P=Xi(g.type,g.key,g.props,null,v.mode,P),P.ref=ps(v,x,g),P.return=v,v=P)}return a(v);case _r:e:{for(_=g.key;x!==null;){if(x.key===_)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){n(v,x.sibling),x=i(x,g.children||[]),x.return=v,v=x;break e}else{n(v,x);break}else t(v,x);x=x.sibling}x=Ia(g,v.mode,P),x.return=v,v=x}return a(v);case En:return _=g._init,E(v,x,_(g._payload),P)}if(ks(g))return y(v,x,g,P);if(as(g))return j(v,x,g,P);Pi(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,x!==null&&x.tag===6?(n(v,x.sibling),x=i(x,g),x.return=v,v=x):(n(v,x),x=Ma(g,v.mode,P),x.return=v,v=x),a(v)):n(v,x)}return E}var Kr=rh(!0),sh=rh(!1),xo=Gn(null),yo=null,Ar=null,Dc=null;function Fc(){Dc=Ar=yo=null}function Bc(e){var t=xo.current;Ie(xo),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Br(e,t){yo=e,Dc=Ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(yt=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(Dc!==e)if(e={context:e,memoizedValue:t,next:null},Ar===null){if(yo===null)throw Error(te(308));Ar=e,yo.dependencies={lanes:0,firstContext:e}}else Ar=Ar.next=e;return t}var or=null;function Uc(e){or===null?or=[e]:or.push(e)}function ih(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Uc(t)):(n.next=i.next,i.next=n),t.interleaved=n,wn(e,r)}function wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zn=!1;function Vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wn(e,n)}return i=r.interleaved,i===null?(t.next=t,Uc(r)):(t.next=i.next,i.next=t),r.interleaved=t,wn(e,n)}function qi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ec(e,n)}}function ep(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vo(e,t,n,r){var i=e.updateQueue;zn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,d=u=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,j=l;switch(f=t,m=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=Ue({},p,f);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);hr|=a,e.lanes=a,e.memoizedState=p}}function tp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(te(191,i));i.call(r)}}}var pi={},un=Gn(pi),Gs=Gn(pi),Qs=Gn(pi);function ar(e){if(e===pi)throw Error(te(174));return e}function Wc(e,t){switch(Ae(Qs,t),Ae(Gs,e),Ae(un,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fl(t,e)}Ie(un),Ae(un,t)}function Gr(){Ie(un),Ie(Gs),Ie(Qs)}function ah(e){ar(Qs.current);var t=ar(un.current),n=fl(t,e.type);t!==n&&(Ae(Gs,e),Ae(un,n))}function Hc(e){Gs.current===e&&(Ie(un),Ie(Gs))}var Fe=Gn(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var za=[];function qc(){for(var e=0;e<za.length;e++)za[e]._workInProgressVersionPrimary=null;za.length=0}var Ji=_n.ReactCurrentDispatcher,Ta=_n.ReactCurrentBatchConfig,mr=0,Be=null,Qe=null,Ze=null,ko=!1,Ts=!1,Ys=0,Gv=0;function it(){throw Error(te(321))}function Jc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zt(e[n],t[n]))return!1;return!0}function Kc(e,t,n,r,i,o){if(mr=o,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ji.current=e===null||e.memoizedState===null?Zv:e1,e=n(r,i),Ts){o=0;do{if(Ts=!1,Ys=0,25<=o)throw Error(te(301));o+=1,Ze=Qe=null,t.updateQueue=null,Ji.current=t1,e=n(r,i)}while(Ts)}if(Ji.current=wo,t=Qe!==null&&Qe.next!==null,mr=0,Ze=Qe=Be=null,ko=!1,t)throw Error(te(300));return e}function Gc(){var e=Ys!==0;return Ys=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Be.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Vt(){if(Qe===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var t=Ze===null?Be.memoizedState:Ze.next;if(t!==null)Ze=t,Qe=e;else{if(e===null)throw Error(te(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},Ze===null?Be.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Xs(e,t){return typeof t=="function"?t(e):t}function Pa(e){var t=Vt(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=Qe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((mr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Be.lanes|=d,hr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Zt(r,t.memoizedState)||(yt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Be.lanes|=o,hr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function La(e){var t=Vt(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Zt(o,t.memoizedState)||(yt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function lh(){}function ch(e,t){var n=Be,r=Vt(),i=t(),o=!Zt(r.memoizedState,i);if(o&&(r.memoizedState=i,yt=!0),r=r.queue,Qc(ph.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Zs(9,dh.bind(null,n,r,i,t),void 0,null),et===null)throw Error(te(349));mr&30||uh(n,t,i)}return i}function uh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dh(e,t,n,r){t.value=n,t.getSnapshot=r,fh(t)&&mh(e)}function ph(e,t,n){return n(function(){fh(t)&&mh(e)})}function fh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zt(e,n)}catch{return!0}}function mh(e){var t=wn(e,1);t!==null&&Yt(t,e,1,-1)}function np(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:e},t.queue=e,e=e.dispatch=Xv.bind(null,Be,e),[t.memoizedState,e]}function Zs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Be.updateQueue,t===null?(t={lastEffect:null,stores:null},Be.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hh(){return Vt().memoizedState}function Ki(e,t,n,r){var i=nn();Be.flags|=e,i.memoizedState=Zs(1|t,n,void 0,r===void 0?null:r)}function Wo(e,t,n,r){var i=Vt();r=r===void 0?null:r;var o=void 0;if(Qe!==null){var a=Qe.memoizedState;if(o=a.destroy,r!==null&&Jc(r,a.deps)){i.memoizedState=Zs(t,n,o,r);return}}Be.flags|=e,i.memoizedState=Zs(1|t,n,o,r)}function rp(e,t){return Ki(8390656,8,e,t)}function Qc(e,t){return Wo(2048,8,e,t)}function gh(e,t){return Wo(4,2,e,t)}function xh(e,t){return Wo(4,4,e,t)}function yh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vh(e,t,n){return n=n!=null?n.concat([e]):null,Wo(4,4,yh.bind(null,t,e),n)}function Yc(){}function bh(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kh(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Jc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wh(e,t,n){return mr&21?(Zt(n,t)||(n=Nm(),Be.lanes|=n,hr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yt=!0),e.memoizedState=n)}function Qv(e,t){var n=Te;Te=n!==0&&4>n?n:4,e(!0);var r=Ta.transition;Ta.transition={};try{e(!1),t()}finally{Te=n,Ta.transition=r}}function jh(){return Vt().memoizedState}function Yv(e,t,n){var r=Un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_h(e))Sh(t,n);else if(n=ih(e,t,n,r),n!==null){var i=ft();Yt(n,e,r,i),Ch(n,t,r)}}function Xv(e,t,n){var r=Un(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_h(e))Sh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Zt(l,a)){var c=t.interleaved;c===null?(i.next=i,Uc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=ih(e,t,i,r),n!==null&&(i=ft(),Yt(n,e,r,i),Ch(n,t,r))}}function _h(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function Sh(e,t){Ts=ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ch(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ec(e,n)}}var wo={readContext:Ut,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},Zv={readContext:Ut,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:rp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ki(4194308,4,yh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ki(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ki(4,2,e,t)},useMemo:function(e,t){var n=nn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yv.bind(null,Be,e),[r.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:np,useDebugValue:Yc,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=np(!1),t=e[0];return e=Qv.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Be,i=nn();if(Oe){if(n===void 0)throw Error(te(407));n=n()}else{if(n=t(),et===null)throw Error(te(349));mr&30||uh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,rp(ph.bind(null,r,o,e),[e]),r.flags|=2048,Zs(9,dh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=nn(),t=et.identifierPrefix;if(Oe){var n=xn,r=gn;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ys++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},e1={readContext:Ut,useCallback:bh,useContext:Ut,useEffect:Qc,useImperativeHandle:vh,useInsertionEffect:gh,useLayoutEffect:xh,useMemo:kh,useReducer:Pa,useRef:hh,useState:function(){return Pa(Xs)},useDebugValue:Yc,useDeferredValue:function(e){var t=Vt();return wh(t,Qe.memoizedState,e)},useTransition:function(){var e=Pa(Xs)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:lh,useSyncExternalStore:ch,useId:jh,unstable_isNewReconciler:!1},t1={readContext:Ut,useCallback:bh,useContext:Ut,useEffect:Qc,useImperativeHandle:vh,useInsertionEffect:gh,useLayoutEffect:xh,useMemo:kh,useReducer:La,useRef:hh,useState:function(){return La(Xs)},useDebugValue:Yc,useDeferredValue:function(e){var t=Vt();return Qe===null?t.memoizedState=e:wh(t,Qe.memoizedState,e)},useTransition:function(){var e=La(Xs)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:lh,useSyncExternalStore:ch,useId:jh,unstable_isNewReconciler:!1};function Jt(e,t){if(e&&e.defaultProps){t=Ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ho={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ft(),i=Un(e),o=yn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Yt(t,e,i,r),qi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ft(),i=Un(e),o=yn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Fn(e,o,i),t!==null&&(Yt(t,e,i,r),qi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ft(),r=Un(e),i=yn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Fn(e,i,r),t!==null&&(Yt(t,e,r,n),qi(t,e,r))}};function sp(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,o):!0}function Nh(e,t,n){var r=!1,i=qn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ut(o):(i=bt(t)?pr:lt.current,r=t.contextTypes,o=(r=r!=null)?qr(e,i):qn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ho,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ip(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ho.enqueueReplaceState(t,t.state,null)}function Ml(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Vc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ut(o):(o=bt(t)?pr:lt.current,i.context=qr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Rl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ho.enqueueReplaceState(i,i.state,null),vo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var n="",r=t;do n+=zy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Il(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var n1=typeof WeakMap=="function"?WeakMap:Map;function Eh(e,t,n){n=yn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_o||(_o=!0,ql=r),Il(e,t)},n}function zh(e,t,n){n=yn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Il(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Il(e,t),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function op(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new n1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=g1.bind(null,e,t,n),t.then(e,e))}function ap(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yn(-1,1),t.tag=2,Fn(n,t,1))),n.lanes|=1),e)}var r1=_n.ReactCurrentOwner,yt=!1;function pt(e,t,n,r){t.child=e===null?sh(t,null,n,r):Kr(t,e.child,n,r)}function cp(e,t,n,r,i){n=n.render;var o=t.ref;return Br(t,i),r=Kc(e,t,n,r,o,i),n=Gc(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jn(e,t,i)):(Oe&&n&&Ic(t),t.flags|=1,pt(e,t,r,i),t.child)}function up(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!iu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Th(e,t,o,r,i)):(e=Xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(a,r)&&e.ref===t.ref)return jn(e,t,i)}return t.flags|=1,e=Vn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Th(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hs(o,r)&&e.ref===t.ref)if(yt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(yt=!0);else return t.lanes=e.lanes,jn(e,t,i)}return Ol(e,t,n,r,i)}function Ph(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Mr,St),St|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(Mr,St),St|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ae(Mr,St),St|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ae(Mr,St),St|=r;return pt(e,t,i,n),t.child}function Lh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ol(e,t,n,r,i){var o=bt(n)?pr:lt.current;return o=qr(t,o),Br(t,i),n=Kc(e,t,n,r,o,i),r=Gc(),e!==null&&!yt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jn(e,t,i)):(Oe&&r&&Ic(t),t.flags|=1,pt(e,t,n,i),t.child)}function dp(e,t,n,r,i){if(bt(n)){var o=!0;mo(t)}else o=!1;if(Br(t,i),t.stateNode===null)Gi(e,t),Nh(t,n,r),Ml(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=bt(n)?pr:lt.current,u=qr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&ip(t,a,r,u),zn=!1;var f=t.memoizedState;a.state=f,vo(t,r,a,i),c=t.memoizedState,l!==r||f!==c||vt.current||zn?(typeof d=="function"&&(Rl(t,n,d,r),c=t.memoizedState),(l=zn||sp(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,oh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Jt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ut(c):(c=bt(n)?pr:lt.current,c=qr(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&ip(t,a,r,c),zn=!1,f=t.memoizedState,a.state=f,vo(t,r,a,i);var y=t.memoizedState;l!==p||f!==y||vt.current||zn?(typeof m=="function"&&(Rl(t,n,m,r),y=t.memoizedState),(u=zn||sp(t,n,u,r,f,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return $l(e,t,n,r,o,i)}function $l(e,t,n,r,i,o){Lh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Qd(t,n,!1),jn(e,t,o);r=t.stateNode,r1.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Kr(t,e.child,null,o),t.child=Kr(t,null,l,o)):pt(e,t,l,o),t.memoizedState=r.state,i&&Qd(t,n,!0),t.child}function Ah(e){var t=e.stateNode;t.pendingContext?Gd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gd(e,t.context,!1),Wc(e,t.containerInfo)}function pp(e,t,n,r,i){return Jr(),$c(i),t.flags|=256,pt(e,t,n,r),t.child}var Dl={dehydrated:null,treeContext:null,retryLane:0};function Fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rh(e,t,n){var r=t.pendingProps,i=Fe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ae(Fe,i&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ko(a,r,0,null),e=cr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Fl(n),t.memoizedState=Dl,e):Xc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return s1(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Vn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Vn(l,o):(o=cr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Fl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Dl,r}return o=e.child,e=o.sibling,r=Vn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xc(e,t){return t=Ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Li(e,t,n,r){return r!==null&&$c(r),Kr(t,e.child,null,n),e=Xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function s1(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Aa(Error(te(422))),Li(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ko({mode:"visible",children:r.children},i,0,null),o=cr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Kr(t,e.child,null,a),t.child.memoizedState=Fl(a),t.memoizedState=Dl,o);if(!(t.mode&1))return Li(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(te(419)),r=Aa(o,r,void 0),Li(e,t,a,r)}if(l=(a&e.childLanes)!==0,yt||l){if(r=et,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wn(e,i),Yt(r,e,i,-1))}return su(),r=Aa(Error(te(421))),Li(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=x1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Nt=Dn(i.nextSibling),Tt=t,Oe=!0,Gt=null,e!==null&&(It[Ot++]=gn,It[Ot++]=xn,It[Ot++]=fr,gn=e.id,xn=e.overflow,fr=t),t=Xc(t,r.children),t.flags|=4096,t)}function fp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function Ra(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(pt(e,t,r.children,n),r=Fe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fp(e,n,t);else if(e.tag===19)fp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ae(Fe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ra(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ra(t,!0,n,null,o);break;case"together":Ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(te(153));if(t.child!==null){for(e=t.child,n=Vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function i1(e,t,n){switch(t.tag){case 3:Ah(t),Jr();break;case 5:ah(t);break;case 1:bt(t.type)&&mo(t);break;case 4:Wc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ae(xo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Fe,Fe.current&1),t.flags|=128,null):n&t.child.childLanes?Rh(e,t,n):(Ae(Fe,Fe.current&1),e=jn(e,t,n),e!==null?e.sibling:null);Ae(Fe,Fe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Mh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Fe,Fe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ph(e,t,n)}return jn(e,t,n)}var Ih,Bl,Oh,$h;Ih=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};Oh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ar(un.current);var o=null;switch(n){case"input":i=cl(e,i),r=cl(e,r),o=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),o=[];break;case"textarea":i=pl(e,i),r=pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=po)}ml(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($s.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Me("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};$h=function(e,t,n,r){n!==r&&(t.flags|=4)};function fs(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function o1(e,t,n){var r=t.pendingProps;switch(Oc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(t),null;case 1:return bt(t.type)&&fo(),ot(t),null;case 3:return r=t.stateNode,Gr(),Ie(vt),Ie(lt),qc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Gt!==null&&(Gl(Gt),Gt=null))),Bl(e,t),ot(t),null;case 5:Hc(t);var i=ar(Qs.current);if(n=t.type,e!==null&&t.stateNode!=null)Oh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(te(166));return ot(t),null}if(e=ar(un.current),Ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[sn]=t,r[Ks]=o,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<js.length;i++)Me(js[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":wd(r,o),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Me("invalid",r);break;case"textarea":_d(r,o),Me("invalid",r)}ml(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",""+l]):$s.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Me("scroll",r)}switch(n){case"input":ki(r),jd(r,o,!0);break;case"textarea":ki(r),Sd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=po)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[sn]=t,e[Ks]=r,Ih(e,t,!1,!1),t.stateNode=e;e:{switch(a=hl(n,r),n){case"dialog":Me("cancel",e),Me("close",e),i=r;break;case"iframe":case"object":case"embed":Me("load",e),i=r;break;case"video":case"audio":for(i=0;i<js.length;i++)Me(js[i],e);i=r;break;case"source":Me("error",e),i=r;break;case"img":case"image":case"link":Me("error",e),Me("load",e),i=r;break;case"details":Me("toggle",e),i=r;break;case"input":wd(e,r),i=cl(e,r),Me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),Me("invalid",e);break;case"textarea":_d(e,r),i=pl(e,r),Me("invalid",e);break;default:i=r}ml(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?hm(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fm(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ds(e,c):typeof c=="number"&&Ds(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($s.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Me("scroll",e):c!=null&&wc(e,o,c,a))}switch(n){case"input":ki(e),jd(e,r,!1);break;case"textarea":ki(e),Sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Or(e,!!r.multiple,o,!1):r.defaultValue!=null&&Or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ot(t),null;case 6:if(e&&t.stateNode!=null)$h(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(te(166));if(n=ar(Qs.current),ar(un.current),Ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(o=r.nodeValue!==n)&&(e=Tt,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return ot(t),null;case 13:if(Ie(Fe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&Nt!==null&&t.mode&1&&!(t.flags&128))nh(),Jr(),t.flags|=98560,o=!1;else if(o=Ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(te(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(te(317));o[sn]=t}else Jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ot(t),o=!1}else Gt!==null&&(Gl(Gt),Gt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Fe.current&1?Ye===0&&(Ye=3):su())),t.updateQueue!==null&&(t.flags|=4),ot(t),null);case 4:return Gr(),Bl(e,t),e===null&&qs(t.stateNode.containerInfo),ot(t),null;case 10:return Bc(t.type._context),ot(t),null;case 17:return bt(t.type)&&fo(),ot(t),null;case 19:if(Ie(Fe),o=t.memoizedState,o===null)return ot(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)fs(o,!1);else{if(Ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=bo(e),a!==null){for(t.flags|=128,fs(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ae(Fe,Fe.current&1|2),t.child}e=e.sibling}o.tail!==null&&We()>Yr&&(t.flags|=128,r=!0,fs(o,!1),t.lanes=4194304)}else{if(!r)if(e=bo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Oe)return ot(t),null}else 2*We()-o.renderingStartTime>Yr&&n!==1073741824&&(t.flags|=128,r=!0,fs(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=We(),t.sibling=null,n=Fe.current,Ae(Fe,r?n&1|2:n&1),t):(ot(t),null);case 22:case 23:return ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?St&1073741824&&(ot(t),t.subtreeFlags&6&&(t.flags|=8192)):ot(t),null;case 24:return null;case 25:return null}throw Error(te(156,t.tag))}function a1(e,t){switch(Oc(t),t.tag){case 1:return bt(t.type)&&fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),Ie(vt),Ie(lt),qc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hc(t),null;case 13:if(Ie(Fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(te(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Fe),null;case 4:return Gr(),null;case 10:return Bc(t.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var Ai=!1,at=!1,l1=typeof WeakSet=="function"?WeakSet:Set,de=null;function Rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(e,t,r)}else n.current=null}function Ul(e,t,n){try{n()}catch(r){Ve(e,t,r)}}var mp=!1;function c1(e,t){if(Sl=lo,e=Vm(),Mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},lo=!1,de=t;de!==null;)if(t=de,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,de=e;else for(;de!==null;){t=de;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,E=y.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:Jt(t.type,j),E);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(P){Ve(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,de=e;break}de=t.return}return y=mp,mp=!1,y}function Ps(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ul(t,n,o)}i=i.next}while(i!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dh(e){var t=e.alternate;t!==null&&(e.alternate=null,Dh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[Ks],delete t[zl],delete t[Hv],delete t[qv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fh(e){return e.tag===5||e.tag===3||e.tag===4}function hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=po));else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}var nt=null,Kt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)Bh(e,t,n),n=n.sibling}function Bh(e,t,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount($o,n)}catch{}switch(n.tag){case 5:at||Rr(n,t);case 6:var r=nt,i=Kt;nt=null,Cn(e,t,n),nt=r,Kt=i,nt!==null&&(Kt?(e=nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(Kt?(e=nt,n=n.stateNode,e.nodeType===8?Na(e.parentNode,n):e.nodeType===1&&Na(e,n),Vs(e)):Na(nt,n.stateNode));break;case 4:r=nt,i=Kt,nt=n.stateNode.containerInfo,Kt=!0,Cn(e,t,n),nt=r,Kt=i;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ul(n,t,a),i=i.next}while(i!==r)}Cn(e,t,n);break;case 1:if(!at&&(Rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ve(n,t,l)}Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,Cn(e,t,n),at=r):Cn(e,t,n);break;default:Cn(e,t,n)}}function gp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l1),t.forEach(function(r){var i=y1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,Kt=!1;break e;case 3:nt=l.stateNode.containerInfo,Kt=!0;break e;case 4:nt=l.stateNode.containerInfo,Kt=!0;break e}l=l.return}if(nt===null)throw Error(te(160));Bh(o,a,i),nt=null,Kt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ve(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uh(t,e),t=t.sibling}function Uh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(t,e),tn(e),r&4){try{Ps(3,e,e.return),qo(3,e)}catch(j){Ve(e,e.return,j)}try{Ps(5,e,e.return)}catch(j){Ve(e,e.return,j)}}break;case 1:qt(t,e),tn(e),r&512&&n!==null&&Rr(n,n.return);break;case 5:if(qt(t,e),tn(e),r&512&&n!==null&&Rr(n,n.return),e.flags&32){var i=e.stateNode;try{Ds(i,"")}catch(j){Ve(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&um(i,o),hl(l,a);var u=hl(l,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?hm(i,p):d==="dangerouslySetInnerHTML"?fm(i,p):d==="children"?Ds(i,p):wc(i,d,p,u)}switch(l){case"input":ul(i,o);break;case"textarea":dm(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Or(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Or(i,!!o.multiple,o.defaultValue,!0):Or(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ks]=o}catch(j){Ve(e,e.return,j)}}break;case 6:if(qt(t,e),tn(e),r&4){if(e.stateNode===null)throw Error(te(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){Ve(e,e.return,j)}}break;case 3:if(qt(t,e),tn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vs(t.containerInfo)}catch(j){Ve(e,e.return,j)}break;case 4:qt(t,e),tn(e);break;case 13:qt(t,e),tn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(tu=We())),r&4&&gp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(at=(u=at)||d,qt(t,e),at=u):qt(t,e),tn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(de=e,d=e.child;d!==null;){for(p=de=d;de!==null;){switch(f=de,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ps(4,f,f.return);break;case 1:Rr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){Ve(r,n,j)}}break;case 5:Rr(f,f.return);break;case 22:if(f.memoizedState!==null){yp(p);continue}}m!==null?(m.return=f,de=m):yp(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=mm("display",a))}catch(j){Ve(e,e.return,j)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){Ve(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qt(t,e),tn(e),r&4&&gp(e);break;case 21:break;default:qt(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fh(n)){var r=n;break e}n=n.return}throw Error(te(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ds(i,""),r.flags&=-33);var o=hp(e);Hl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=hp(e);Wl(e,l,a);break;default:throw Error(te(161))}}catch(c){Ve(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function u1(e,t,n){de=e,Vh(e)}function Vh(e,t,n){for(var r=(e.mode&1)!==0;de!==null;){var i=de,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ai;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||at;l=Ai;var u=at;if(Ai=a,(at=c)&&!u)for(de=i;de!==null;)a=de,c=a.child,a.tag===22&&a.memoizedState!==null?vp(i):c!==null?(c.return=a,de=c):vp(i);for(;o!==null;)de=o,Vh(o),o=o.sibling;de=i,Ai=l,at=u}xp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,de=o):xp(e)}}function xp(e){for(;de!==null;){var t=de;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:at||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!at)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&tp(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tp(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Vs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}at||t.flags&512&&Vl(t)}catch(f){Ve(t,t.return,f)}}if(t===e){de=null;break}if(n=t.sibling,n!==null){n.return=t.return,de=n;break}de=t.return}}function yp(e){for(;de!==null;){var t=de;if(t===e){de=null;break}var n=t.sibling;if(n!==null){n.return=t.return,de=n;break}de=t.return}}function vp(e){for(;de!==null;){var t=de;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(c){Ve(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ve(t,i,c)}}var o=t.return;try{Vl(t)}catch(c){Ve(t,o,c)}break;case 5:var a=t.return;try{Vl(t)}catch(c){Ve(t,a,c)}}}catch(c){Ve(t,t.return,c)}if(t===e){de=null;break}var l=t.sibling;if(l!==null){l.return=t.return,de=l;break}de=t.return}}var d1=Math.ceil,jo=_n.ReactCurrentDispatcher,Zc=_n.ReactCurrentOwner,Bt=_n.ReactCurrentBatchConfig,Ne=0,et=null,Ke=null,rt=0,St=0,Mr=Gn(0),Ye=0,ei=null,hr=0,Jo=0,eu=0,Ls=null,xt=null,tu=0,Yr=1/0,mn=null,_o=!1,ql=null,Bn=null,Ri=!1,An=null,So=0,As=0,Jl=null,Qi=-1,Yi=0;function ft(){return Ne&6?We():Qi!==-1?Qi:Qi=We()}function Un(e){return e.mode&1?Ne&2&&rt!==0?rt&-rt:Kv.transition!==null?(Yi===0&&(Yi=Nm()),Yi):(e=Te,e!==0||(e=window.event,e=e===void 0?16:Rm(e.type)),e):1}function Yt(e,t,n,r){if(50<As)throw As=0,Jl=null,Error(te(185));ci(e,n,r),(!(Ne&2)||e!==et)&&(e===et&&(!(Ne&2)&&(Jo|=n),Ye===4&&Pn(e,rt)),kt(e,r),n===1&&Ne===0&&!(t.mode&1)&&(Yr=We()+500,Vo&&Qn()))}function kt(e,t){var n=e.callbackNode;Ky(e,t);var r=ao(e,e===et?rt:0);if(r===0)n!==null&&Ed(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ed(n),t===1)e.tag===0?Jv(bp.bind(null,e)):Zm(bp.bind(null,e)),Vv(function(){!(Ne&6)&&Qn()}),n=null;else{switch(Em(r)){case 1:n=Nc;break;case 4:n=Sm;break;case 16:n=oo;break;case 536870912:n=Cm;break;default:n=oo}n=Yh(n,Wh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wh(e,t){if(Qi=-1,Yi=0,Ne&6)throw Error(te(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var r=ao(e,e===et?rt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Co(e,r);else{t=r;var i=Ne;Ne|=2;var o=qh();(et!==e||rt!==t)&&(mn=null,Yr=We()+500,lr(e,t));do try{m1();break}catch(l){Hh(e,l)}while(!0);Fc(),jo.current=o,Ne=i,Ke!==null?t=0:(et=null,rt=0,t=Ye)}if(t!==0){if(t===2&&(i=bl(e),i!==0&&(r=i,t=Kl(e,i))),t===1)throw n=ei,lr(e,0),Pn(e,r),kt(e,We()),n;if(t===6)Pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!p1(i)&&(t=Co(e,r),t===2&&(o=bl(e),o!==0&&(r=o,t=Kl(e,o))),t===1))throw n=ei,lr(e,0),Pn(e,r),kt(e,We()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(te(345));case 2:rr(e,xt,mn);break;case 3:if(Pn(e,r),(r&130023424)===r&&(t=tu+500-We(),10<t)){if(ao(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=El(rr.bind(null,e,xt,mn),t);break}rr(e,xt,mn);break;case 4:if(Pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Qt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d1(r/1960))-r,10<r){e.timeoutHandle=El(rr.bind(null,e,xt,mn),r);break}rr(e,xt,mn);break;case 5:rr(e,xt,mn);break;default:throw Error(te(329))}}}return kt(e,We()),e.callbackNode===n?Wh.bind(null,e):null}function Kl(e,t){var n=Ls;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=Co(e,t),e!==2&&(t=xt,xt=n,t!==null&&Gl(t)),e}function Gl(e){xt===null?xt=e:xt.push.apply(xt,e)}function p1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Zt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pn(e,t){for(t&=~eu,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qt(t),r=1<<n;e[n]=-1,t&=~r}}function bp(e){if(Ne&6)throw Error(te(327));Ur();var t=ao(e,0);if(!(t&1))return kt(e,We()),null;var n=Co(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=Kl(e,r))}if(n===1)throw n=ei,lr(e,0),Pn(e,t),kt(e,We()),n;if(n===6)throw Error(te(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,xt,mn),kt(e,We()),null}function nu(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Yr=We()+500,Vo&&Qn())}}function gr(e){An!==null&&An.tag===0&&!(Ne&6)&&Ur();var t=Ne;Ne|=1;var n=Bt.transition,r=Te;try{if(Bt.transition=null,Te=1,e)return e()}finally{Te=r,Bt.transition=n,Ne=t,!(Ne&6)&&Qn()}}function ru(){St=Mr.current,Ie(Mr)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Uv(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Oc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fo();break;case 3:Gr(),Ie(vt),Ie(lt),qc();break;case 5:Hc(r);break;case 4:Gr();break;case 13:Ie(Fe);break;case 19:Ie(Fe);break;case 10:Bc(r.type._context);break;case 22:case 23:ru()}n=n.return}if(et=e,Ke=e=Vn(e.current,null),rt=St=t,Ye=0,ei=null,eu=Jo=hr=0,xt=Ls=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}or=null}return e}function Hh(e,t){do{var n=Ke;try{if(Fc(),Ji.current=wo,ko){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ko=!1}if(mr=0,Ze=Qe=Be=null,Ts=!1,Ys=0,Zc.current=null,n===null||n.return===null){Ye=1,ei=t,Ke=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=rt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=ap(a);if(m!==null){m.flags&=-257,lp(m,a,l,o,t),m.mode&1&&op(o,u,t),t=m,c=u;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){op(o,u,t),su();break e}c=Error(te(426))}}else if(Oe&&l.mode&1){var E=ap(a);if(E!==null){!(E.flags&65536)&&(E.flags|=256),lp(E,a,l,o,t),$c(Qr(c,l));break e}}o=c=Qr(c,l),Ye!==4&&(Ye=2),Ls===null?Ls=[o]:Ls.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Eh(o,c,t);ep(o,v);break e;case 1:l=c;var x=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Bn===null||!Bn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=zh(o,l,t);ep(o,P);break e}}o=o.return}while(o!==null)}Kh(n)}catch(N){t=N,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function qh(){var e=jo.current;return jo.current=wo,e===null?wo:e}function su(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),et===null||!(hr&268435455)&&!(Jo&268435455)||Pn(et,rt)}function Co(e,t){var n=Ne;Ne|=2;var r=qh();(et!==e||rt!==t)&&(mn=null,lr(e,t));do try{f1();break}catch(i){Hh(e,i)}while(!0);if(Fc(),Ne=n,jo.current=r,Ke!==null)throw Error(te(261));return et=null,rt=0,Ye}function f1(){for(;Ke!==null;)Jh(Ke)}function m1(){for(;Ke!==null&&!Dy();)Jh(Ke)}function Jh(e){var t=Qh(e.alternate,e,St);e.memoizedProps=e.pendingProps,t===null?Kh(e):Ke=t,Zc.current=null}function Kh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=a1(n,t),n!==null){n.flags&=32767,Ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,Ke=null;return}}else if(n=o1(n,t,St),n!==null){Ke=n;return}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);Ye===0&&(Ye=5)}function rr(e,t,n){var r=Te,i=Bt.transition;try{Bt.transition=null,Te=1,h1(e,t,n,r)}finally{Bt.transition=i,Te=r}return null}function h1(e,t,n,r){do Ur();while(An!==null);if(Ne&6)throw Error(te(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(te(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Gy(e,o),e===et&&(Ke=et=null,rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ri||(Ri=!0,Yh(oo,function(){return Ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Bt.transition,Bt.transition=null;var a=Te;Te=1;var l=Ne;Ne|=4,Zc.current=null,c1(e,n),Uh(n,e),Mv(Cl),lo=!!Sl,Cl=Sl=null,e.current=n,u1(n),Fy(),Ne=l,Te=a,Bt.transition=o}else e.current=n;if(Ri&&(Ri=!1,An=e,So=i),o=e.pendingLanes,o===0&&(Bn=null),Vy(n.stateNode),kt(e,We()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,e=ql,ql=null,e;return So&1&&e.tag!==0&&Ur(),o=e.pendingLanes,o&1?e===Jl?As++:(As=0,Jl=e):As=0,Qn(),null}function Ur(){if(An!==null){var e=Em(So),t=Bt.transition,n=Te;try{if(Bt.transition=null,Te=16>e?16:e,An===null)var r=!1;else{if(e=An,An=null,So=0,Ne&6)throw Error(te(331));var i=Ne;for(Ne|=4,de=e.current;de!==null;){var o=de,a=o.child;if(de.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(de=u;de!==null;){var d=de;switch(d.tag){case 0:case 11:case 15:Ps(8,d,o)}var p=d.child;if(p!==null)p.return=d,de=p;else for(;de!==null;){d=de;var f=d.sibling,m=d.return;if(Dh(d),d===u){de=null;break}if(f!==null){f.return=m,de=f;break}de=m}}}var y=o.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var E=j.sibling;j.sibling=null,j=E}while(j!==null)}}de=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,de=a;else e:for(;de!==null;){if(o=de,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ps(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,de=v;break e}de=o.return}}var x=e.current;for(de=x;de!==null;){a=de;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,de=g;else e:for(a=x;de!==null;){if(l=de,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qo(9,l)}}catch(N){Ve(l,l.return,N)}if(l===a){de=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,de=P;break e}de=l.return}}if(Ne=i,Qn(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot($o,e)}catch{}r=!0}return r}finally{Te=n,Bt.transition=t}}return!1}function kp(e,t,n){t=Qr(n,t),t=Eh(e,t,1),e=Fn(e,t,1),t=ft(),e!==null&&(ci(e,1,t),kt(e,t))}function Ve(e,t,n){if(e.tag===3)kp(e,e,n);else for(;t!==null;){if(t.tag===3){kp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){e=Qr(n,e),e=zh(t,e,1),t=Fn(t,e,1),e=ft(),t!==null&&(ci(t,1,e),kt(t,e));break}}t=t.return}}function g1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ft(),e.pingedLanes|=e.suspendedLanes&n,et===e&&(rt&n)===n&&(Ye===4||Ye===3&&(rt&130023424)===rt&&500>We()-tu?lr(e,0):eu|=n),kt(e,t)}function Gh(e,t){t===0&&(e.mode&1?(t=_i,_i<<=1,!(_i&130023424)&&(_i=4194304)):t=1);var n=ft();e=wn(e,t),e!==null&&(ci(e,t,n),kt(e,n))}function x1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gh(e,n)}function y1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(te(314))}r!==null&&r.delete(t),Gh(e,n)}var Qh;Qh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)yt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return yt=!1,i1(e,t,n);yt=!!(e.flags&131072)}else yt=!1,Oe&&t.flags&1048576&&eh(t,go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Gi(e,t),e=t.pendingProps;var i=qr(t,lt.current);Br(t,n),i=Kc(null,t,r,e,i,n);var o=Gc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(o=!0,mo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vc(t),i.updater=Ho,t.stateNode=i,i._reactInternals=t,Ml(t,r,e,n),t=$l(null,t,r,!0,o,n)):(t.tag=0,Oe&&o&&Ic(t),pt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Gi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=b1(r),e=Jt(r,e),i){case 0:t=Ol(null,t,r,e,n);break e;case 1:t=dp(null,t,r,e,n);break e;case 11:t=cp(null,t,r,e,n);break e;case 14:t=up(null,t,r,Jt(r.type,e),n);break e}throw Error(te(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Ol(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),dp(e,t,r,i,n);case 3:e:{if(Ah(t),e===null)throw Error(te(387));r=t.pendingProps,o=t.memoizedState,i=o.element,oh(e,t),vo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qr(Error(te(423)),t),t=pp(e,t,r,n,i);break e}else if(r!==i){i=Qr(Error(te(424)),t),t=pp(e,t,r,n,i);break e}else for(Nt=Dn(t.stateNode.containerInfo.firstChild),Tt=t,Oe=!0,Gt=null,n=sh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){t=jn(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return ah(t),e===null&&Ll(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Nl(r,i)?a=null:o!==null&&Nl(r,o)&&(t.flags|=32),Lh(e,t),pt(e,t,a,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return Rh(e,t,n);case 4:return Wc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),cp(e,t,r,i,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ae(xo,r._currentValue),r._currentValue=a,o!==null)if(Zt(o.value,a)){if(o.children===i.children&&!vt.current){t=jn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=yn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Al(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(te(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Al(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}pt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Br(t,n),i=Ut(i),r=r(i),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,i=Jt(r,t.pendingProps),i=Jt(r.type,i),up(e,t,r,i,n);case 15:return Th(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Gi(e,t),t.tag=1,bt(r)?(e=!0,mo(t)):e=!1,Br(t,n),Nh(t,r,i),Ml(t,r,i,n),$l(null,t,r,!0,e,n);case 19:return Mh(e,t,n);case 22:return Ph(e,t,n)}throw Error(te(156,t.tag))};function Yh(e,t){return _m(e,t)}function v1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,n,r){return new v1(e,t,n,r)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function b1(e){if(typeof e=="function")return iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_c)return 11;if(e===Sc)return 14}return 2}function Vn(e,t){var n=e.alternate;return n===null?(n=Dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")iu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Sr:return cr(n.children,i,o,t);case jc:a=8,i|=8;break;case il:return e=Dt(12,n,t,i|2),e.elementType=il,e.lanes=o,e;case ol:return e=Dt(13,n,t,i),e.elementType=ol,e.lanes=o,e;case al:return e=Dt(19,n,t,i),e.elementType=al,e.lanes=o,e;case am:return Ko(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case im:a=10;break e;case om:a=9;break e;case _c:a=11;break e;case Sc:a=14;break e;case En:a=16,r=null;break e}throw Error(te(130,e==null?e:typeof e,""))}return t=Dt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function cr(e,t,n,r){return e=Dt(7,e,r,t),e.lanes=n,e}function Ko(e,t,n,r){return e=Dt(22,e,r,t),e.elementType=am,e.lanes=n,e.stateNode={isHidden:!1},e}function Ma(e,t,n){return e=Dt(6,e,null,t),e.lanes=n,e}function Ia(e,t,n){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function k1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ga(0),this.expirationTimes=ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ga(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ou(e,t,n,r,i,o,a,l,c){return e=new k1(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Dt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(o),e}function w1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xh(e){if(!e)return qn;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(te(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(te(171))}if(e.tag===1){var n=e.type;if(bt(n))return Xm(e,n,t)}return t}function Zh(e,t,n,r,i,o,a,l,c){return e=ou(n,r,!0,e,i,o,a,l,c),e.context=Xh(null),n=e.current,r=ft(),i=Un(n),o=yn(r,i),o.callback=t??null,Fn(n,o,i),e.current.lanes=i,ci(e,i,r),kt(e,r),e}function Go(e,t,n,r){var i=t.current,o=ft(),a=Un(i);return n=Xh(n),t.context===null?t.context=n:t.pendingContext=n,t=yn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Fn(i,t,a),e!==null&&(Yt(e,i,a,o),qi(e,i,a)),a}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function au(e,t){wp(e,t),(e=e.alternate)&&wp(e,t)}function j1(){return null}var eg=typeof reportError=="function"?reportError:function(e){console.error(e)};function lu(e){this._internalRoot=e}Qo.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(te(409));Go(e,t,null,null)};Qo.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gr(function(){Go(null,e,null,null)}),t[kn]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tn.length&&t!==0&&t<Tn[n].priority;n++);Tn.splice(n,0,e),n===0&&Am(e)}};function cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jp(){}function _1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=No(a);o.call(u)}}var a=Zh(t,r,e,0,null,!1,!1,"",jp);return e._reactRootContainer=a,e[kn]=a.current,qs(e.nodeType===8?e.parentNode:e),gr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=No(c);l.call(u)}}var c=ou(e,0,!1,null,null,!1,!1,"",jp);return e._reactRootContainer=c,e[kn]=c.current,qs(e.nodeType===8?e.parentNode:e),gr(function(){Go(t,c,n,r)}),c}function Xo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=No(a);l.call(c)}}Go(t,a,e,i)}else a=_1(n,t,e,i,r);return No(a)}zm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ws(t.pendingLanes);n!==0&&(Ec(t,n|1),kt(t,We()),!(Ne&6)&&(Yr=We()+500,Qn()))}break;case 13:gr(function(){var r=wn(e,1);if(r!==null){var i=ft();Yt(r,e,1,i)}}),au(e,1)}};zc=function(e){if(e.tag===13){var t=wn(e,134217728);if(t!==null){var n=ft();Yt(t,e,134217728,n)}au(e,134217728)}};Tm=function(e){if(e.tag===13){var t=Un(e),n=wn(e,t);if(n!==null){var r=ft();Yt(n,e,t,r)}au(e,t)}};Pm=function(){return Te};Lm=function(e,t){var n=Te;try{return Te=e,t()}finally{Te=n}};xl=function(e,t,n){switch(t){case"input":if(ul(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Uo(r);if(!i)throw Error(te(90));cm(r),ul(r,i)}}}break;case"textarea":dm(e,n);break;case"select":t=n.value,t!=null&&Or(e,!!n.multiple,t,!1)}};ym=nu;vm=gr;var S1={usingClientEntryPoint:!1,Events:[di,zr,Uo,gm,xm,nu]},ms={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C1={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wm(e),e===null?null:e.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||j1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{$o=Mi.inject(C1),cn=Mi}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S1;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(t))throw Error(te(200));return w1(e,t,null,n)};Lt.createRoot=function(e,t){if(!cu(e))throw Error(te(299));var n=!1,r="",i=eg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ou(e,1,!1,null,null,n,!1,r,i),e[kn]=t.current,qs(e.nodeType===8?e.parentNode:e),new lu(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(te(188)):(e=Object.keys(e).join(","),Error(te(268,e)));return e=wm(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return gr(e)};Lt.hydrate=function(e,t,n){if(!Yo(t))throw Error(te(200));return Xo(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!cu(e))throw Error(te(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=eg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Zh(t,null,e,1,n??null,i,!1,o,a),e[kn]=t.current,qs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qo(t)};Lt.render=function(e,t,n){if(!Yo(t))throw Error(te(200));return Xo(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!Yo(e))throw Error(te(40));return e._reactRootContainer?(gr(function(){Xo(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1};Lt.unstable_batchedUpdates=nu;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yo(n))throw Error(te(200));if(e==null||e._reactInternals===void 0)throw Error(te(38));return Xo(e,t,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function tg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tg)}catch(e){console.error(e)}}tg(),tm.exports=Lt;var ng=tm.exports,_p=ng;rl.createRoot=_p.createRoot,rl.hydrateRoot=_p.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(this,arguments)}var Rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Rn||(Rn={}));const Sp="popstate";function N1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Ql("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rg(i)}return z1(t,n,null,e)}function Ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function uu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function E1(){return Math.random().toString(36).substr(2,8)}function Cp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ql(e,t,n,r){return n===void 0&&(n=null),ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?rs(t):t,{state:n,key:t&&t.key||r||E1()})}function rg(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function rs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function z1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=Rn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(ti({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=Rn.Pop;let E=d(),v=E==null?null:E-u;u=E,c&&c({action:l,location:j.location,delta:v})}function f(E,v){l=Rn.Push;let x=Ql(j.location,E,v);u=d()+1;let g=Cp(x,u),P=j.createHref(x);try{a.pushState(g,"",P)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(P)}o&&c&&c({action:l,location:j.location,delta:1})}function m(E,v){l=Rn.Replace;let x=Ql(j.location,E,v);u=d();let g=Cp(x,u),P=j.createHref(x);a.replaceState(g,"",P),o&&c&&c({action:l,location:j.location,delta:0})}function y(E){let v=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof E=="string"?E:rg(E);return x=x.replace(/ $/,"%20"),Ge(v,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,v)}let j={get action(){return l},get location(){return e(i,a)},listen(E){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Sp,p),c=E,()=>{i.removeEventListener(Sp,p),c=null}},createHref(E){return t(i,E)},createURL:y,encodeLocation(E){let v=y(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(E){return a.go(E)}};return j}var Np;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Np||(Np={}));function T1(e,t,n){return n===void 0&&(n="/"),P1(e,t,n)}function P1(e,t,n,r){let i=typeof t=="string"?rs(t):t,o=og(i.pathname||"/",n);if(o==null)return null;let a=sg(e);L1(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=W1(o);l=B1(a[c],u)}return l}function sg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Ge(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=ur([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sg(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:D1(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of ig(o.path))i(o,a,c)}),t}function ig(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=ig(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function L1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:F1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const A1=/^:[\w-]+$/,R1=3,M1=2,I1=1,O1=10,$1=-2,Ep=e=>e==="*";function D1(e,t){let n=e.split("/"),r=n.length;return n.some(Ep)&&(r+=$1),t&&(r+=M1),n.filter(i=>!Ep(i)).reduce((i,o)=>i+(A1.test(o)?R1:o===""?I1:O1),r)}function F1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function B1(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=U1({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:ur([o,p.pathname]),pathnameBase:G1(ur([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=ur([o,p.pathnameBase]))}return a}function U1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=V1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let j=l[p]||"";a=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const y=l[p];return m&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function V1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),uu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function W1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return uu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function og(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const H1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q1=e=>H1.test(e);function J1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?rs(e):e,o;if(n)if(q1(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),uu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=zp(n.substring(1),"/"):o=zp(n,t)}else o=t;return{pathname:o,search:Q1(r),hash:Y1(i)}}function zp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function K1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ag(e,t){let n=K1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=rs(e):(i=ti({},e),Ge(!i.pathname||!i.pathname.includes("?"),Oa("?","pathname","search",i)),Ge(!i.pathname||!i.pathname.includes("#"),Oa("#","pathname","hash",i)),Ge(!i.search||!i.search.includes("#"),Oa("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=J1(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const ur=e=>e.join("/").replace(/\/\/+/g,"/"),G1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Q1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function X1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cg=["post","put","patch","delete"];new Set(cg);const Z1=["get",...cg];new Set(Z1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}const du=k.createContext(null),e0=k.createContext(null),fi=k.createContext(null),Zo=k.createContext(null),Yn=k.createContext({outlet:null,matches:[],isDataRoute:!1}),ug=k.createContext(null);function mi(){return k.useContext(Zo)!=null}function pu(){return mi()||Ge(!1),k.useContext(Zo).location}function dg(e){k.useContext(fi).static||k.useLayoutEffect(e)}function fu(){let{isDataRoute:e}=k.useContext(Yn);return e?m0():t0()}function t0(){mi()||Ge(!1);let e=k.useContext(du),{basename:t,future:n,navigator:r}=k.useContext(fi),{matches:i}=k.useContext(Yn),{pathname:o}=pu(),a=JSON.stringify(ag(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return dg(()=>{l.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=lg(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ur([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function n0(){let{matches:e}=k.useContext(Yn),t=e[e.length-1];return t?t.params:{}}function r0(e,t){return s0(e,t)}function s0(e,t,n,r){mi()||Ge(!1);let{navigator:i}=k.useContext(fi),{matches:o}=k.useContext(Yn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=pu(),d;if(t){var p;let E=typeof t=="string"?rs(t):t;c==="/"||(p=E.pathname)!=null&&p.startsWith(c)||Ge(!1),d=E}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let E=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let y=T1(e,{pathname:m}),j=c0(y&&y.map(E=>Object.assign({},E,{params:Object.assign({},l,E.params),pathname:ur([c,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?c:ur([c,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&j?k.createElement(Zo.Provider,{value:{location:ni({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Rn.Pop}},j):j}function i0(){let e=f0(),t=X1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const o0=k.createElement(i0,null);class a0 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Yn.Provider,{value:this.props.routeContext},k.createElement(ug.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l0(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(du);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Yn.Provider,{value:t},r)}function c0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ge(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,y=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,y=!1,j=null,E=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,j=p.route.errorElement||o0,c&&(u<0&&f===0?(h0("route-fallback"),y=!0,E=null):u===f&&(y=!0,E=p.route.hydrateFallbackElement||null)));let v=t.concat(a.slice(0,f+1)),x=()=>{let g;return m?g=j:y?g=E:p.route.Component?g=k.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,k.createElement(l0,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?k.createElement(a0,{location:n.location,revalidation:n.revalidation,component:j,error:m,children:x(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):x()},null)}var pg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pg||{}),fg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fg||{});function u0(e){let t=k.useContext(du);return t||Ge(!1),t}function d0(e){let t=k.useContext(e0);return t||Ge(!1),t}function p0(e){let t=k.useContext(Yn);return t||Ge(!1),t}function mg(e){let t=p0(),n=t.matches[t.matches.length-1];return n.route.id||Ge(!1),n.route.id}function f0(){var e;let t=k.useContext(ug),n=d0(),r=mg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function m0(){let{router:e}=u0(pg.UseNavigateStable),t=mg(fg.UseNavigateStable),n=k.useRef(!1);return dg(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ni({fromRouteId:t},o)))},[e,t])}const Tp={};function h0(e,t,n){Tp[e]||(Tp[e]=!0)}function g0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function x0(e){let{to:t,replace:n,state:r,relative:i}=e;mi()||Ge(!1);let{future:o,static:a}=k.useContext(fi),{matches:l}=k.useContext(Yn),{pathname:c}=pu(),u=fu(),d=lg(t,ag(l,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function jr(e){Ge(!1)}function y0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Rn.Pop,navigator:o,static:a=!1,future:l}=e;mi()&&Ge(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:o,static:a,future:ni({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=rs(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:y="default"}=r,j=k.useMemo(()=>{let E=og(d,c);return E==null?null:{location:{pathname:E,search:p,hash:f,state:m,key:y},navigationType:i}},[c,d,p,f,m,y,i]);return j==null?null:k.createElement(fi.Provider,{value:u},k.createElement(Zo.Provider,{children:n,value:j}))}function v0(e){let{children:t,location:n}=e;return r0(Yl(t),n)}new Promise(()=>{});function Yl(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Yl(r.props.children,o));return}r.type!==jr&&Ge(!1),!r.props.index||!r.props.children||Ge(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Yl(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const b0="6";try{window.__reactRouterVersion=b0}catch{}const k0="startTransition",Pp=gy[k0];function w0(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=N1({window:i,v5Compat:!0}));let a=o.current,[l,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(p=>{u&&Pp?Pp(()=>c(p)):c(p)},[c,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.useEffect(()=>g0(r),[r]),k.createElement(y0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Lp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Lp||(Lp={}));var Ap;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ap||(Ap={}));const j0={},Rp=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(y=>y(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(j0?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},_0=e=>e?Rp(e):Rp;var hg={exports:{}},gg={},xg={exports:{}},yg={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=k;function S0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var C0=typeof Object.is=="function"?Object.is:S0,N0=Xr.useState,E0=Xr.useEffect,z0=Xr.useLayoutEffect,T0=Xr.useDebugValue;function P0(e,t){var n=t(),r=N0({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return z0(function(){i.value=n,i.getSnapshot=t,$a(i)&&o({inst:i})},[e,n,t]),E0(function(){return $a(i)&&o({inst:i}),e(function(){$a(i)&&o({inst:i})})},[e]),T0(n),n}function $a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!C0(e,n)}catch{return!0}}function L0(e,t){return t()}var A0=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?L0:P0;yg.useSyncExternalStore=Xr.useSyncExternalStore!==void 0?Xr.useSyncExternalStore:A0;xg.exports=yg;var R0=xg.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ea=k,M0=R0;function I0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O0=typeof Object.is=="function"?Object.is:I0,$0=M0.useSyncExternalStore,D0=ea.useRef,F0=ea.useEffect,B0=ea.useMemo,U0=ea.useDebugValue;gg.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=D0(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=B0(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var y=a.value;if(i(y,m))return p=y}return p=m}if(y=p,O0(d,m))return y;var j=r(m);return i!==void 0&&i(y,j)?(d=m,y):(d=m,p=j)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=$0(e,o[0],o[1]);return F0(function(){a.hasValue=!0,a.value=l},[l]),U0(l),l};hg.exports=gg;var V0=hg.exports;const W0=Io(V0),vg={},{useDebugValue:H0}=zt,{useSyncExternalStoreWithSelector:q0}=W0;let Mp=!1;const J0=e=>e;function K0(e,t=J0,n){(vg?"production":void 0)!=="production"&&n&&!Mp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Mp=!0);const r=q0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return H0(r),r}const Ip=e=>{(vg?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?_0(e):e,n=(r,i)=>K0(t,r,i);return Object.assign(n,t),n},G0=e=>e?Ip(e):Ip,ct=G0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),bg="/api";async function Se(e,t){const n=await fetch(`${bg}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function kg(){return(await Se("/projects")).projects}async function wg(e){return(await Se(`/projects/${e}`)).project}async function jg(e,t=""){return(await Se("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Xl(e,t){return(await Se(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function _g(e){await Se(`/projects/${e}`,{method:"DELETE"})}async function Sg(e){return Se(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Zl(e){return(await Se(`/projects/${e}/sessions`)).sessions}async function Cg(e,t){return(await Se(`/projects/${e}/sessions/${t}/load`)).session}async function Ng(e){return(await Se(`/projects/${e}/yaml`)).yaml}async function Eg(e,t){return(await Se(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function mu(){return(await Se("/mcp-servers")).servers}async function zg(){return(await Se("/builtin-tools")).tools}function Tg(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Zi(e,t,n,r){return await Se(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Pg(e,t){return await Se(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Lg(e,t,n,r=[],i){return await Se(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Ag(e,t,n,r,i=[],o){return await Se(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function ec(e){return await Se("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Rg(e,t){return Se(`/projects/${e}/skillsets/${t}/stats`)}async function Mg(e,t,n,r,i=500,o=50){return Se(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:o})})}async function Ig(e,t,n,r=500,i=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(i));const a=await fetch(`${bg}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Og(e,t,n,r=10,i=0){return Se(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function $g(e,t){return Se(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Dg(){return Se("/skillsets/embeddings-available")}const He={async get(e){return Se(e)},async post(e,t){return Se(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Se(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Se(e,{method:"DELETE"})}},Q0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Mg,api:He,checkEmbeddingsAvailable:Dg,clearSkillSet:$g,createProject:jg,createRunWebSocket:Tg,deleteProject:_g,fetchJSON:Se,generateAgentConfig:Pg,generateCallbackCode:Ag,generatePrompt:Zi,generateToolCode:Lg,getBuiltinTools:zg,getMcpServers:mu,getProject:wg,getProjectYaml:Ng,getSkillSetStats:Rg,listProjectSessions:Zl,listProjects:kg,loadSession:Cg,saveSessionToMemory:Sg,searchSkillSet:Og,testMcpServer:ec,updateProject:Xl,updateProjectFromYaml:Eg,uploadSkillSetFile:Ig},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Y0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),pe=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>k.createElement("svg",{ref:d,...Y0,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${X0(e)}`,l].join(" "),...u},[...t.map(([p,f])=>k.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=pe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=pe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=pe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=pe("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=pe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=pe("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=pe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=pe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=pe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=pe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=pe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=pe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=pe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=pe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=pe("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=pe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=pe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=pe("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=pe("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=pe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=pe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=pe("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=pe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=pe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=pe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=pe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=pe("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=pe("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=pe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=pe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=pe("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=pe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=pe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=pe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=pe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=pe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=pe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=pe("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=pe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=pe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=pe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=pe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=pe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=pe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=pe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=pe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=pe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=pe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=pe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=pe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=pe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=pe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=pe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=pe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=pe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=pe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=pe("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=pe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=pe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=pe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function xb(){const e=fu(),[t,n]=k.useState([]),[r,i]=k.useState(!0),[o,a]=k.useState(!1),[l,c]=k.useState("");k.useEffect(()=>{u()},[]);async function u(){try{const f=await kg();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await jg(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await _g(f),n(t.filter(y=>y.id!==f))}catch(y){console.error("Failed to delete project:",y)}}return s.jsxs("div",{className:"project-list",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"logo",children:[s.jsx(bu,{size:40,className:"logo-icon"}),s.jsx("h1",{className:"title",children:"ADK Playground"})]}),s.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),s.jsxs("div",{className:"content",children:[o?s.jsxs("div",{className:"create-form",children:[s.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),s.jsxs("button",{className:"btn btn-primary",onClick:d,children:[s.jsx(Je,{size:18}),"Create"]}),s.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):s.jsx("div",{className:"create-form",children:s.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[s.jsx(Je,{size:18}),"New Project"]})}),r?s.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Op,{size:48,style:{marginBottom:16,opacity:.3}}),s.jsx("p",{children:"No projects yet. Create one to get started!"})]}):s.jsx("div",{className:"projects-grid",children:t.map(f=>s.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[s.jsxs("h3",{children:[s.jsx(Op,{size:18}),f.name]}),s.jsx("p",{children:f.description||"No description"}),s.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:s.jsx($e,{size:16})})]},f.id))})]})]})}const Dp={},yb=5*60*1e3;function vb({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:o="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=k.useState(t||""),[u,d]=k.useState(!1),[p,f]=k.useState([]),[m,y]=k.useState(!1),[j,E]=k.useState(null),[v,x]=k.useState(-1),[g,P]=k.useState({top:0,left:0,width:0}),N=k.useRef(null),_=k.useRef(null);k.useEffect(()=>{if(u&&N.current){const U=N.current.getBoundingClientRect();P({top:U.bottom+window.scrollY+4,left:U.left+window.scrollX,width:U.width})}},[u]);const C=k.useCallback(async()=>{const U=Dp[a];if(U&&Date.now()-U.timestamp<yb){const B=[];Object.values(U.providers).forEach(se=>{B.push(...se.models)}),f(B);return}y(!0),E(null);try{const B=new URLSearchParams;n&&B.append("provider",n),r&&B.append("api_base",r);const se=`/models/${e}${B.toString()?"?"+B.toString():""}`,T=await He.get(se);Dp[a]={providers:T.providers,timestamp:Date.now()};const $=[];Object.values(T.providers).forEach(M=>{M.models&&M.models.length>0&&$.push(...M.models)}),f($)}catch(B){E(B.message||"Failed to fetch models")}finally{y(!1)}},[e,a,r,n]);k.useEffect(()=>{C()},[C]),k.useEffect(()=>{c(t||"")},[t]);const b=p.filter(U=>{const B=l.toLowerCase();return U.id.toLowerCase().includes(B)||U.name.toLowerCase().includes(B)||U.provider.toLowerCase().includes(B)});k.useEffect(()=>{const U=B=>{_.current&&!_.current.contains(B.target)&&N.current&&!N.current.contains(B.target)&&d(!1)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);const R=U=>{if(!u){(U.key==="ArrowDown"||U.key==="Enter")&&(d(!0),U.preventDefault());return}switch(U.key){case"ArrowDown":x(B=>Math.min(B+1,b.length-1)),U.preventDefault();break;case"ArrowUp":x(B=>Math.max(B-1,0)),U.preventDefault();break;case"Enter":v>=0&&v<b.length&&S(b[v]),U.preventDefault();break;case"Escape":d(!1);break}},S=U=>{c(U.id),i(U.id,U.provider),d(!1)},L=U=>{c(U.target.value),d(!0),x(-1),i(U.target.value,n||"gemini")},I=U=>{switch(U.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"ollama":return"provider-ollama";default:return"provider-other"}},q=u?s.jsxs("div",{ref:_,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:g.top,left:g.left,width:g.width},children:[m&&s.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),j&&s.jsx("div",{className:"model-autocomplete-error",children:j}),!m&&!j&&b.length===0&&s.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!m&&b.length>0&&s.jsxs("div",{className:"model-autocomplete-list",children:[b.slice(0,50).map((U,B)=>s.jsxs("div",{className:`model-autocomplete-item ${B===v?"highlighted":""}`,onClick:()=>S(U),onMouseEnter:()=>x(B),children:[s.jsx("span",{className:`provider-badge ${I(U.provider)}`,children:U.provider}),s.jsx("span",{className:"model-id",children:U.id}),U.context_window&&s.jsxs("span",{className:"model-context",title:`${U.context_window.toLocaleString()} token context`,children:[Math.round(U.context_window/1e3),"K"]}),U.supports_tools&&s.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),U.supports_vision&&s.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),U.supports_json_mode&&s.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${U.provider}-${U.id}`)),b.length>50&&s.jsxs("div",{className:"model-autocomplete-more",children:["+",b.length-50," more..."]})]})]}):null;return s.jsxs("div",{className:"model-autocomplete",children:[s.jsx("input",{ref:N,type:"text",value:l,onChange:L,onFocus:()=>d(!0),onKeyDown:R,placeholder:o,className:"model-autocomplete-input"}),q&&ng.createPortal(q,document.body)]})}const bb=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"litellm",label:"LiteLLM / Other"}];function kb(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function Qg({projectId:e,values:t,onChange:n,className:r=""}){return s.jsxs("div",{className:`model-config-form ${r}`,children:[s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",style:{flex:1},children:[s.jsx("label",{children:"Provider"}),s.jsx("select",{value:t.provider||"gemini",onChange:i=>n({provider:i.target.value}),children:bb.map(i=>s.jsx("option",{value:i.value,children:i.label},i.value))})]}),s.jsxs("div",{className:"model-config-field",style:{flex:3},children:[s.jsx("label",{children:"Model"}),s.jsx(vb,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(i,o)=>{const a=kb(i,o);n({model_name:i,provider:a})},placeholder:"Search models..."})]}),t.provider==="litellm"&&s.jsxs("div",{className:"model-config-field",style:{flex:2},children:[s.jsx("label",{children:"API Base"}),s.jsx("input",{type:"text",value:t.api_base||"",onChange:i=>n({api_base:i.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Temperature"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:i=>n({temperature:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Max Tokens"}),s.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:i=>n({max_output_tokens:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top P"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:i=>n({top_p:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top K"}),s.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:i=>n({top_k:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]})]})]})}const wb=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function jb(e){return/^[a-zA-Z0-9_]+$/.test(e)}function _b(){var Q;const{project:e,updateProject:t}=ct(),[n,r]=k.useState(null);if(!e)return null;const{app:i}=e;function o(h){t({app:{...i,...h}})}function a(h){if(h===""){r(null),o({name:h});return}jb(h)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:h})}function l(){const h={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,h]})}function c(h,F){const z=[...i.state_keys];z[h]={...z[h],...F},o({state_keys:z})}function u(h){o({state_keys:i.state_keys.filter((F,z)=>z!==h)})}function d(h="ReflectAndRetryToolPlugin"){let F;switch(h){case"ReflectAndRetryToolPlugin":F={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":F={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":F={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":F={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":F={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":F={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:F={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...i.plugins,F]})}function p(h,F){const z=[...i.plugins];z[h]={...z[h],...F},o({plugins:z})}function f(h){o({plugins:i.plugins.filter((F,z)=>z!==h)})}const m=i.sandbox||{enabled:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:300,volume_mounts:[]},y=((Q=m.allowlist)==null?void 0:Q.user)||[],j=m.volume_mounts||[];function E(h){o({sandbox:{...m,...h}})}async function v(h){const F=i.id;try{await fetch(`/api/sandbox/${F}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:h.map(z=>({pattern:z.pattern,pattern_type:z.pattern_type})).filter(z=>z.pattern)})})}catch(z){console.debug("Could not sync allowlist to gateway:",z)}}function x(){const h={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},F={...m.allowlist,user:[...y,h]};E({allowlist:F})}function g(h,F){const z=[...y];z[h]={...z[h],...F};const G=z;E({allowlist:{...m.allowlist,user:G}}),F.pattern&&v(G)}function P(h){const F=y.filter((z,G)=>G!==h);E({allowlist:{...m.allowlist,user:F}})}function N(){const h={host_path:"",container_path:"/mnt/data",mode:"ro"};E({volume_mounts:[...j,h]})}function _(h,F){const z=[...j];z[h]={...z[h],...F},E({volume_mounts:z})}function C(h){const F=j.filter((z,G)=>G!==h);E({volume_mounts:F})}const b=i.models||[];function R(){const h=`model_${Date.now().toString(36)}`,F={id:h,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:b.length===0};o({models:[...b,F],default_model_id:b.length===0?h:i.default_model_id})}function S(h,F){const z=b.map(G=>G.id===h?{...G,...F}:G);o({models:z})}function L(h){var G;const F=b.filter(ge=>ge.id!==h),z=i.default_model_id===h?((G=F[0])==null?void 0:G.id)||void 0:i.default_model_id;o({models:F,default_model_id:z})}function I(h){o({default_model_id:h})}const q=i.env_vars||{},[U,B]=k.useState({}),[se,T]=k.useState("");function $(h=""){const F=h||se.trim();!F||q[F]!==void 0||(o({env_vars:{...q,[F]:""}}),T(""))}function M(h,F){o({env_vars:{...q,[h]:F}})}function w(h){const F={...q};delete F[h],o({env_vars:F})}function V(h){B(F=>({...F,[h]:!F[h]}))}return s.jsxs("div",{className:"app-config",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(mb,{size:20}),"Basic Information"]})}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"App Name"}),s.jsx("input",{type:"text",value:i.name,onChange:h=>a(h.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Root Agent"}),s.jsxs("select",{value:i.root_agent_id||"",onChange:h=>o({root_agent_id:h.target.value||void 0}),children:[s.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(h=>s.jsx("option",{value:h.id,children:h.name},h.id))]})]}),s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:i.description,onChange:h=>o({description:h.target.value}),rows:2})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(vn,{size:20}),"Services"]}),s.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Session Service"}),s.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:h=>{const F=h.target.value;o({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[F]||F+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System (JSON)"}),s.jsx("option",{value:"sqlite",children:"SQLite (local)"}),s.jsx("option",{value:"postgresql",children:"PostgreSQL"}),s.jsx("option",{value:"mysql",children:"MySQL"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:h=>o({session_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:h=>o({session_service_uri:"sqlite://"+h.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&s.jsx("input",{type:"text",value:i.session_service_uri,onChange:h=>o({session_service_uri:h.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:h=>{const F=i.session_service_uri.split("/");F[2]=h.target.value,o({session_service_uri:F.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:h=>{const F=i.session_service_uri.split("/");F[3]=h.target.value,o({session_service_uri:F.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:h=>{const F=i.session_service_uri.split("/");F[4]=h.target.value,o({session_service_uri:F.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Memory Service"}),s.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:h=>{const F=h.target.value;o({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[F]||F+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),s.jsx("option",{value:"file",children:"File System (keyword matching)"}),s.jsx("option",{value:"rag",children:"Vertex AI RAG"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:h=>o({memory_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:h=>o({memory_service_uri:"rag://"+h.target.value}),placeholder:"rag-corpus-id or full resource path"}),s.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:h=>{const F=i.memory_service_uri.split("/");F[2]=h.target.value,o({memory_service_uri:F.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:h=>{const F=i.memory_service_uri.split("/");F[3]=h.target.value,o({memory_service_uri:F.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:h=>{const F=i.memory_service_uri.split("/");F[4]=h.target.value,o({memory_service_uri:F.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Artifact Service"}),s.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:h=>{const F=h.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[F]||F+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System"}),s.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:h=>o({artifact_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:h=>o({artifact_service_uri:"gs://"+h.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(nc,{size:20}),"Environment Variables"]})}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:wb.filter(h=>q[h.key]===void 0).map(h=>s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>$(h.key),title:h.description,children:[s.jsx(Je,{size:12}),h.key]},h.key))}),Object.keys(q).length===0?s.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(q).map(([h,F])=>s.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[s.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[s.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:h}),s.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[s.jsx("input",{type:U[h]?"text":"password",value:F,onChange:z=>M(h,z.target.value),placeholder:"Enter value...",style:{flex:1}}),s.jsx("button",{className:"delete-item",onClick:()=>V(h),title:U[h]?"Hide value":"Show value",children:U[h]?s.jsx(rb,{size:16}):s.jsx(si,{size:16})})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>w(h),children:s.jsx($e,{size:16})})]},h)),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[s.jsx("input",{type:"text",value:se,onChange:h=>T(h.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:h=>h.key==="Enter"&&$()}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>$(),disabled:!se.trim(),children:[s.jsx(Je,{size:14}),"Add Variable"]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(gu,{size:20}),"Models"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:R,children:[s.jsx(Je,{size:14}),"Add Model"]})]}),b.length===0?s.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):b.map(h=>s.jsxs("div",{className:"model-card",children:[s.jsxs("div",{className:"model-card-header",children:[s.jsx("input",{type:"text",value:h.name,onChange:F=>S(h.id,{name:F.target.value}),placeholder:"Model name",className:"model-name-input"}),s.jsx("button",{className:`default-model-btn ${i.default_model_id===h.id?"is-default":""}`,onClick:()=>I(h.id),title:i.default_model_id===h.id?"Default model":"Set as default",children:s.jsx(Jg,{size:14,fill:i.default_model_id===h.id?"currentColor":"none"})}),s.jsx("button",{className:"delete-item",onClick:()=>L(h.id),children:s.jsx($e,{size:16})})]}),s.jsx("div",{className:"model-card-body",children:s.jsx(Qg,{projectId:e.id,values:h,onChange:F=>S(h.id,F)})})]},h.id))]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(Gg,{size:20}),"Advanced Options"]})}),s.jsxs("div",{className:"toggle-group",children:[s.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Event Compaction"}),s.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&s.jsx("input",{type:"number",value:i.compaction.max_events,onChange:h=>o({compaction:{...i.compaction,max_events:parseInt(h.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Context Caching"}),s.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&s.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:h=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(h.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Resumability"}),s.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(yu,{size:20}),"Session State Keys"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[s.jsx(Je,{size:14}),"Add Key"]})]}),i.state_keys.length===0?s.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((h,F)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",children:[s.jsx("input",{type:"text",value:h.name,onChange:z=>c(F,{name:z.target.value}),placeholder:"Key name"}),s.jsxs("select",{value:h.type,onChange:z=>c(F,{type:z.target.value}),children:[s.jsx("option",{value:"string",children:"String"}),s.jsx("option",{value:"number",children:"Number"}),s.jsx("option",{value:"boolean",children:"Boolean"}),s.jsx("option",{value:"object",children:"Object"}),s.jsx("option",{value:"array",children:"Array"})]}),s.jsxs("select",{value:h.scope,onChange:z=>c(F,{scope:z.target.value}),children:[s.jsx("option",{value:"session",children:"Session"}),s.jsx("option",{value:"user",children:"User"}),s.jsx("option",{value:"app",children:"App"}),s.jsx("option",{value:"temp",children:"Temporary"})]}),s.jsx("input",{type:"text",value:h.description,onChange:z=>c(F,{description:z.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),s.jsx("button",{className:"delete-item",onClick:()=>u(F),children:s.jsx($e,{size:16})})]},F))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(ln,{size:20}),"Plugins"]}),s.jsx("div",{className:"plugin-add-dropdown",children:s.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:h=>{h.target.value&&(d(h.target.value),h.target.value="")},style:{paddingRight:8},children:[s.jsx("option",{value:"",children:"+ Add Plugin..."}),s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?s.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((h,F)=>s.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[s.jsxs("select",{value:h.type,onChange:z=>p(F,{type:z.target.value}),style:{flex:1},children:[s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),s.jsx("button",{className:"delete-item",onClick:()=>f(F),children:s.jsx($e,{size:16})})]}),h.type==="ReflectAndRetryToolPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Max Retries"}),s.jsx("input",{type:"number",min:"0",max:"10",value:h.max_retries??3,onChange:z=>p(F,{max_retries:parseInt(z.target.value)||0}),style:{width:70}})]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:h.throw_exception_if_retry_exceeded??!1,onChange:z=>p(F,{throw_exception_if_retry_exceeded:z.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),h.type==="ContextFilterPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),s.jsx("input",{type:"number",min:"1",max:"100",value:h.num_invocations_to_keep??5,onChange:z=>p(F,{num_invocations_to_keep:parseInt(z.target.value)||1}),style:{width:70}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),h.type==="LoggingPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),h.type==="GlobalInstructionPlugin"&&s.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),s.jsx("textarea",{value:h.global_instruction??"",onChange:z=>p(F,{global_instruction:z.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),h.type==="SaveFilesAsArtifactsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),h.type==="MultimodalToolResultsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},F))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(qg,{size:20}),"Network Allowlist"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[s.jsx(Je,{size:14}),"Add Pattern"]})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:12},children:"Patterns that are automatically allowed when running in sandbox mode. Requests to other domains will prompt for approval."}),y.length===0?s.jsx("p",{className:"empty-message",children:"No custom allowlist patterns. LLM API providers are allowed by default."}):y.map((h,F)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",style:{display:"flex",gap:8,alignItems:"center"},children:[s.jsx(xu,{size:16,style:{color:"var(--text-muted)",flexShrink:0}}),s.jsx("input",{type:"text",value:h.pattern,onChange:z=>g(F,{pattern:z.target.value}),placeholder:"example.com or *.example.com",style:{flex:1}}),s.jsxs("select",{value:h.pattern_type,onChange:z=>g(F,{pattern_type:z.target.value}),style:{width:100},children:[s.jsx("option",{value:"exact",children:"Exact"}),s.jsx("option",{value:"wildcard",children:"Wildcard"}),s.jsx("option",{value:"regex",children:"Regex"})]}),s.jsx("span",{style:{fontSize:10,padding:"2px 6px",backgroundColor:h.source==="approved"?"rgba(34, 197, 94, 0.2)":"rgba(107, 114, 128, 0.2)",color:h.source==="approved"?"#4ade80":"var(--text-muted)",borderRadius:4,flexShrink:0},children:h.source})]}),s.jsx("button",{className:"delete-item",onClick:()=>P(F),children:s.jsx($e,{size:16})})]},h.id||F)),s.jsxs("div",{style:{marginTop:16,padding:12,backgroundColor:"var(--bg-tertiary)",borderRadius:6,fontSize:12},children:[s.jsx("div",{style:{fontWeight:500,marginBottom:6,color:"var(--text-secondary)"},children:"Default Allowed Domains:"}),s.jsx("div",{style:{color:"var(--text-muted)",lineHeight:1.6},children:"generativelanguage.googleapis.com, api.openai.com, api.anthropic.com, api.together.xyz, api.groq.com, api.mistral.ai"})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(ab,{size:20}),"Volume Mounts"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:N,children:[s.jsx(Je,{size:14}),"Add Mount"]})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:12},children:"Mount local directories into the Docker sandbox so MCP servers and tools can access files."}),j.length===0?s.jsx("p",{className:"empty-message",children:"No volume mounts configured. Add mounts to allow MCP servers to access local files."}):j.map((h,F)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[s.jsx(Bg,{size:16,style:{color:"var(--text-muted)",flexShrink:0}}),s.jsx("input",{type:"text",value:h.host_path,onChange:z=>_(F,{host_path:z.target.value}),placeholder:"~/Documents or /path/to/folder",style:{flex:1,minWidth:150},title:"Host path (local directory)"}),s.jsx("span",{style:{color:"var(--text-muted)",fontSize:12},children:"→"}),s.jsx("input",{type:"text",value:h.container_path,onChange:z=>_(F,{container_path:z.target.value}),placeholder:"/mnt/data",style:{width:140},title:"Container path (where it appears in sandbox)"}),s.jsxs("select",{value:h.mode,onChange:z=>_(F,{mode:z.target.value}),style:{width:100},title:"Access mode",children:[s.jsx("option",{value:"ro",children:"Read Only"}),s.jsx("option",{value:"rw",children:"Read/Write"})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>C(F),children:s.jsx($e,{size:16})})]},F)),s.jsxs("div",{style:{marginTop:16,padding:12,backgroundColor:"var(--bg-tertiary)",borderRadius:6,fontSize:12},children:[s.jsx("div",{style:{fontWeight:500,marginBottom:6,color:"var(--text-secondary)"},children:"Usage Tips:"}),s.jsxs("div",{style:{color:"var(--text-muted)",lineHeight:1.6},children:["• Use ",s.jsx("code",{style:{background:"var(--bg-primary)",padding:"1px 4px",borderRadius:3},children:"~/Documents"})," to mount your Documents folder",s.jsx("br",{}),"• MCP filesystem server needs access to directories it should manage",s.jsx("br",{}),'• Use "Read Only" mode for safety unless write access is needed']})]})]})]})}const Sb="modulepreload",Cb=function(e){return"/"+e},Fp={},Nb=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Cb(c),c in Fp)return;Fp[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Sb,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function Bp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Eb(e){if(Array.isArray(e))return e}function zb(e,t,n){return(t=Ib(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function Pb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Up(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Vp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Up(Object(n),!0).forEach(function(r){zb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Up(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Lb(e,t){if(e==null)return{};var n,r,i=Ab(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ab(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Rb(e,t){return Eb(e)||Tb(e,t)||Ob(e,t)||Pb()}function Mb(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ib(e){var t=Mb(e,"string");return typeof t=="symbol"?t:t+""}function Ob(e,t){if(e){if(typeof e=="string")return Bp(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Bp(e,t):void 0}}function $b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Hp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wp(Object(n),!0).forEach(function(r){$b(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Db(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function _s(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Lo(e){return{}.toString.call(e).includes("Object")}function Fb(e){return!Object.keys(e).length}function ii(e){return typeof e=="function"}function Bb(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ub(e,t){return Lo(t)||Wn("changeType"),Object.keys(t).some(function(n){return!Bb(e,n)})&&Wn("changeField"),t}function Vb(e){ii(e)||Wn("selectorType")}function Wb(e){ii(e)||Lo(e)||Wn("handlerType"),Lo(e)&&Object.values(e).some(function(t){return!ii(t)})&&Wn("handlersType")}function Hb(e){e||Wn("initialIsRequired"),Lo(e)||Wn("initialType"),Fb(e)&&Wn("initialContent")}function qb(e,t){throw new Error(e[t]||e.default)}var Jb={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Wn=_s(qb)(Jb),Ii={changes:Ub,selector:Vb,handler:Wb,initial:Hb};function Kb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ii.initial(e),Ii.handler(t);var n={current:e},r=_s(Yb)(n,t),i=_s(Qb)(n),o=_s(Ii.changes)(e),a=_s(Gb)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Ii.selector(u),u(n.current)}function c(u){Db(r,i,o,a)(u)}return[l,c]}function Gb(e,t){return ii(t)?t(e.current):t}function Qb(e,t){return e.current=Hp(Hp({},e.current),t),t}function Yb(e,t,n){return ii(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Xb={create:Kb},Zb={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function ek(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function tk(e){return{}.toString.call(e).includes("Object")}function nk(e){return e||qp("configIsRequired"),tk(e)||qp("configType"),e.urls?(rk(),{paths:{vs:e.urls.monacoBase}}):e}function rk(){console.warn(Yg.deprecation)}function sk(e,t){throw new Error(e[t]||e.default)}var Yg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},qp=ek(sk)(Yg),ik={config:nk},ok=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function Xg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Xg(e[n],t[n]))}),Vp(Vp({},e),t)}var ak={type:"cancelation",msg:"operation is manually canceled"};function Fa(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(ak):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var lk=["monaco"],ck=Xb.create({config:Zb,isInitialized:!1,resolve:null,reject:null,monaco:null}),Zg=Rb(ck,2),gi=Zg[0],ra=Zg[1];function uk(e){var t=ik.config(e),n=t.monaco,r=Lb(t,lk);ra(function(i){return{config:Xg(i.config,r),monaco:n}})}function dk(){var e=gi(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(ra({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Fa(Ba);if(window.monaco&&window.monaco.editor)return ex(window.monaco),e.resolve(window.monaco),Fa(Ba);ok(pk,mk)(hk)}return Fa(Ba)}function pk(e){return document.body.appendChild(e)}function fk(e){var t=document.createElement("script");return e&&(t.src=e),t}function mk(e){var t=gi(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=fk("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function hk(){var e=gi(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;ex(r),e.resolve(r)},function(n){e.reject(n)})}function ex(e){gi().monaco||ra({monaco:e})}function gk(){return gi(function(e){var t=e.monaco;return t})}var Ba=new Promise(function(e,t){return ra({resolve:e,reject:t})}),tx={config:uk,init:dk,__getMonacoInstance:gk},xk={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},Ua=xk,yk={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},vk=yk;function bk({children:e}){return zt.createElement("div",{style:vk.container},e)}var kk=bk,wk=kk;function jk({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return zt.createElement("section",{style:{...Ua.wrapper,width:e,height:t},...a},!n&&zt.createElement(wk,null,r),zt.createElement("div",{ref:i,style:{...Ua.fullWidth,...!n&&Ua.hide},className:o}))}var _k=jk,nx=k.memo(_k);function Sk(e){k.useEffect(e,[])}var rx=Sk;function Ck(e,t,n=!0){let r=k.useRef(!0);k.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Ct=Ck;function Rs(){}function Ir(e,t,n,r){return Nk(e,r)||Ek(e,t,n,r)}function Nk(e,t){return e.editor.getModel(sx(e,t))}function Ek(e,t,n,r){return e.editor.createModel(t,n,r?sx(e,r):void 0)}function sx(e,t){return e.Uri.parse(t)}function zk({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:y,wrapperProps:j={},beforeMount:E=Rs,onMount:v=Rs}){let[x,g]=k.useState(!1),[P,N]=k.useState(!0),_=k.useRef(null),C=k.useRef(null),b=k.useRef(null),R=k.useRef(v),S=k.useRef(E),L=k.useRef(!1);rx(()=>{let B=tx.init();return B.then(se=>(C.current=se)&&N(!1)).catch(se=>(se==null?void 0:se.type)!=="cancelation"&&console.error("Monaco initialization: error:",se)),()=>_.current?U():B.cancel()}),Ct(()=>{if(_.current&&C.current){let B=_.current.getOriginalEditor(),se=Ir(C.current,e||"",r||n||"text",o||"");se!==B.getModel()&&B.setModel(se)}},[o],x),Ct(()=>{if(_.current&&C.current){let B=_.current.getModifiedEditor(),se=Ir(C.current,t||"",i||n||"text",a||"");se!==B.getModel()&&B.setModel(se)}},[a],x),Ct(()=>{let B=_.current.getModifiedEditor();B.getOption(C.current.editor.EditorOption.readOnly)?B.setValue(t||""):t!==B.getValue()&&(B.executeEdits("",[{range:B.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),B.pushUndoStop())},[t],x),Ct(()=>{var B,se;(se=(B=_.current)==null?void 0:B.getModel())==null||se.original.setValue(e||"")},[e],x),Ct(()=>{let{original:B,modified:se}=_.current.getModel();C.current.editor.setModelLanguage(B,r||n||"text"),C.current.editor.setModelLanguage(se,i||n||"text")},[n,r,i],x),Ct(()=>{var B;(B=C.current)==null||B.editor.setTheme(u)},[u],x),Ct(()=>{var B;(B=_.current)==null||B.updateOptions(p)},[p],x);let I=k.useCallback(()=>{var T;if(!C.current)return;S.current(C.current);let B=Ir(C.current,e||"",r||n||"text",o||""),se=Ir(C.current,t||"",i||n||"text",a||"");(T=_.current)==null||T.setModel({original:B,modified:se})},[n,t,i,e,r,o,a]),q=k.useCallback(()=>{var B;!L.current&&b.current&&(_.current=C.current.editor.createDiffEditor(b.current,{automaticLayout:!0,...p}),I(),(B=C.current)==null||B.editor.setTheme(u),g(!0),L.current=!0)},[p,u,I]);k.useEffect(()=>{x&&R.current(_.current,C.current)},[x]),k.useEffect(()=>{!P&&!x&&q()},[P,x,q]);function U(){var se,T,$,M;let B=(se=_.current)==null?void 0:se.getModel();l||((T=B==null?void 0:B.original)==null||T.dispose()),c||(($=B==null?void 0:B.modified)==null||$.dispose()),(M=_.current)==null||M.dispose()}return zt.createElement(nx,{width:m,height:f,isEditorReady:x,loading:d,_ref:b,className:y,wrapperProps:j})}var Tk=zk;k.memo(Tk);function Pk(e){let t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}var Lk=Pk,Oi=new Map;function Ak({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:y="100%",className:j,wrapperProps:E={},beforeMount:v=Rs,onMount:x=Rs,onChange:g,onValidate:P=Rs}){let[N,_]=k.useState(!1),[C,b]=k.useState(!0),R=k.useRef(null),S=k.useRef(null),L=k.useRef(null),I=k.useRef(x),q=k.useRef(v),U=k.useRef(),B=k.useRef(r),se=Lk(o),T=k.useRef(!1),$=k.useRef(!1);rx(()=>{let V=tx.init();return V.then(Q=>(R.current=Q)&&b(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>S.current?w():V.cancel()}),Ct(()=>{var Q,h,F,z;let V=Ir(R.current,e||r||"",t||i||"",o||n||"");V!==((Q=S.current)==null?void 0:Q.getModel())&&(p&&Oi.set(se,(h=S.current)==null?void 0:h.saveViewState()),(F=S.current)==null||F.setModel(V),p&&((z=S.current)==null||z.restoreViewState(Oi.get(o))))},[o],N),Ct(()=>{var V;(V=S.current)==null||V.updateOptions(u)},[u],N),Ct(()=>{!S.current||r===void 0||(S.current.getOption(R.current.editor.EditorOption.readOnly)?S.current.setValue(r):r!==S.current.getValue()&&($.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),S.current.pushUndoStop(),$.current=!1))},[r],N),Ct(()=>{var Q,h;let V=(Q=S.current)==null?void 0:Q.getModel();V&&i&&((h=R.current)==null||h.editor.setModelLanguage(V,i))},[i],N),Ct(()=>{var V;l!==void 0&&((V=S.current)==null||V.revealLine(l))},[l],N),Ct(()=>{var V;(V=R.current)==null||V.editor.setTheme(a)},[a],N);let M=k.useCallback(()=>{var V;if(!(!L.current||!R.current)&&!T.current){q.current(R.current);let Q=o||n,h=Ir(R.current,r||e||"",t||i||"",Q||"");S.current=(V=R.current)==null?void 0:V.editor.create(L.current,{model:h,automaticLayout:!0,...u},d),p&&S.current.restoreViewState(Oi.get(Q)),R.current.editor.setTheme(a),l!==void 0&&S.current.revealLine(l),_(!0),T.current=!0}},[e,t,n,r,i,o,u,d,p,a,l]);k.useEffect(()=>{N&&I.current(S.current,R.current)},[N]),k.useEffect(()=>{!C&&!N&&M()},[C,N,M]),B.current=r,k.useEffect(()=>{var V,Q;N&&g&&((V=U.current)==null||V.dispose(),U.current=(Q=S.current)==null?void 0:Q.onDidChangeModelContent(h=>{$.current||g(S.current.getValue(),h)}))},[N,g]),k.useEffect(()=>{if(N){let V=R.current.editor.onDidChangeMarkers(Q=>{var F;let h=(F=S.current.getModel())==null?void 0:F.uri;if(h&&Q.find(z=>z.path===h.path)){let z=R.current.editor.getModelMarkers({resource:h});P==null||P(z)}});return()=>{V==null||V.dispose()}}return()=>{}},[N,P]);function w(){var V,Q;(V=U.current)==null||V.dispose(),f?p&&Oi.set(o,S.current.saveViewState()):(Q=S.current.getModel())==null||Q.dispose(),S.current.dispose()}return zt.createElement(nx,{width:m,height:y,isEditorReady:N,loading:c,_ref:L,className:j,wrapperProps:E})}var Rk=Ak,Mk=k.memo(Rk),Ft=Mk;function Ik(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Ok=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,$k=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Dk={};function Jp(e,t){return(Dk.jsx?$k:Ok).test(e)}const Fk=/[ \t\n\f\r]/g;function Bk(e){return typeof e=="object"?e.type==="text"?Kp(e.value):!1:Kp(e)}function Kp(e){return e.replace(Fk,"")===""}class xi{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}xi.prototype.normal={};xi.prototype.property={};xi.prototype.space=void 0;function ix(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new xi(n,r,t)}function sc(e){return e.toLowerCase()}class jt{constructor(t,n){this.attribute=n,this.property=t}}jt.prototype.attribute="";jt.prototype.booleanish=!1;jt.prototype.boolean=!1;jt.prototype.commaOrSpaceSeparated=!1;jt.prototype.commaSeparated=!1;jt.prototype.defined=!1;jt.prototype.mustUseProperty=!1;jt.prototype.number=!1;jt.prototype.overloadedBoolean=!1;jt.prototype.property="";jt.prototype.spaceSeparated=!1;jt.prototype.space=void 0;let Uk=0;const ke=br(),qe=br(),ic=br(),re=br(),Le=br(),Vr=br(),_t=br();function br(){return 2**++Uk}const oc=Object.freeze(Object.defineProperty({__proto__:null,boolean:ke,booleanish:qe,commaOrSpaceSeparated:_t,commaSeparated:Vr,number:re,overloadedBoolean:ic,spaceSeparated:Le},Symbol.toStringTag,{value:"Module"})),Va=Object.keys(oc);class ju extends jt{constructor(t,n,r,i){let o=-1;if(super(t,n),Gp(this,"space",i),typeof r=="number")for(;++o<Va.length;){const a=Va[o];Gp(this,Va[o],(r&oc[a])===oc[a])}}}ju.prototype.defined=!0;function Gp(e,t,n){n&&(e[t]=n)}function ss(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new ju(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[sc(r)]=r,n[sc(o.attribute)]=r}return new xi(t,n,e.space)}const ox=ss({properties:{ariaActiveDescendant:null,ariaAtomic:qe,ariaAutoComplete:null,ariaBusy:qe,ariaChecked:qe,ariaColCount:re,ariaColIndex:re,ariaColSpan:re,ariaControls:Le,ariaCurrent:null,ariaDescribedBy:Le,ariaDetails:null,ariaDisabled:qe,ariaDropEffect:Le,ariaErrorMessage:null,ariaExpanded:qe,ariaFlowTo:Le,ariaGrabbed:qe,ariaHasPopup:null,ariaHidden:qe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Le,ariaLevel:re,ariaLive:null,ariaModal:qe,ariaMultiLine:qe,ariaMultiSelectable:qe,ariaOrientation:null,ariaOwns:Le,ariaPlaceholder:null,ariaPosInSet:re,ariaPressed:qe,ariaReadOnly:qe,ariaRelevant:null,ariaRequired:qe,ariaRoleDescription:Le,ariaRowCount:re,ariaRowIndex:re,ariaRowSpan:re,ariaSelected:qe,ariaSetSize:re,ariaSort:null,ariaValueMax:re,ariaValueMin:re,ariaValueNow:re,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ax(e,t){return t in e?e[t]:t}function lx(e,t){return ax(e,t.toLowerCase())}const Vk=ss({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Vr,acceptCharset:Le,accessKey:Le,action:null,allow:null,allowFullScreen:ke,allowPaymentRequest:ke,allowUserMedia:ke,alt:null,as:null,async:ke,autoCapitalize:null,autoComplete:Le,autoFocus:ke,autoPlay:ke,blocking:Le,capture:null,charSet:null,checked:ke,cite:null,className:Le,cols:re,colSpan:null,content:null,contentEditable:qe,controls:ke,controlsList:Le,coords:re|Vr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ke,defer:ke,dir:null,dirName:null,disabled:ke,download:ic,draggable:qe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ke,formTarget:null,headers:Le,height:re,hidden:ic,high:re,href:null,hrefLang:null,htmlFor:Le,httpEquiv:Le,id:null,imageSizes:null,imageSrcSet:null,inert:ke,inputMode:null,integrity:null,is:null,isMap:ke,itemId:null,itemProp:Le,itemRef:Le,itemScope:ke,itemType:Le,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ke,low:re,manifest:null,max:null,maxLength:re,media:null,method:null,min:null,minLength:re,multiple:ke,muted:ke,name:null,nonce:null,noModule:ke,noValidate:ke,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ke,optimum:re,pattern:null,ping:Le,placeholder:null,playsInline:ke,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ke,referrerPolicy:null,rel:Le,required:ke,reversed:ke,rows:re,rowSpan:re,sandbox:Le,scope:null,scoped:ke,seamless:ke,selected:ke,shadowRootClonable:ke,shadowRootDelegatesFocus:ke,shadowRootMode:null,shape:null,size:re,sizes:null,slot:null,span:re,spellCheck:qe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:re,step:null,style:null,tabIndex:re,target:null,title:null,translate:null,type:null,typeMustMatch:ke,useMap:null,value:qe,width:re,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Le,axis:null,background:null,bgColor:null,border:re,borderColor:null,bottomMargin:re,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ke,declare:ke,event:null,face:null,frame:null,frameBorder:null,hSpace:re,leftMargin:re,link:null,longDesc:null,lowSrc:null,marginHeight:re,marginWidth:re,noResize:ke,noHref:ke,noShade:ke,noWrap:ke,object:null,profile:null,prompt:null,rev:null,rightMargin:re,rules:null,scheme:null,scrolling:qe,standby:null,summary:null,text:null,topMargin:re,valueType:null,version:null,vAlign:null,vLink:null,vSpace:re,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ke,disableRemotePlayback:ke,prefix:null,property:null,results:re,security:null,unselectable:null},space:"html",transform:lx}),Wk=ss({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:_t,accentHeight:re,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:re,amplitude:re,arabicForm:null,ascent:re,attributeName:null,attributeType:null,azimuth:re,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:re,by:null,calcMode:null,capHeight:re,className:Le,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:re,diffuseConstant:re,direction:null,display:null,dur:null,divisor:re,dominantBaseline:null,download:ke,dx:null,dy:null,edgeMode:null,editable:null,elevation:re,enableBackground:null,end:null,event:null,exponent:re,externalResourcesRequired:null,fill:null,fillOpacity:re,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Vr,g2:Vr,glyphName:Vr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:re,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:re,horizOriginX:re,horizOriginY:re,id:null,ideographic:re,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:re,k:re,k1:re,k2:re,k3:re,k4:re,kernelMatrix:_t,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:re,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:re,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:re,overlineThickness:re,paintOrder:null,panose1:null,path:null,pathLength:re,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Le,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:re,pointsAtY:re,pointsAtZ:re,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:_t,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:_t,rev:_t,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:_t,requiredFeatures:_t,requiredFonts:_t,requiredFormats:_t,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:re,specularExponent:re,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:re,strikethroughThickness:re,string:null,stroke:null,strokeDashArray:_t,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:re,strokeOpacity:re,strokeWidth:null,style:null,surfaceScale:re,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:_t,tabIndex:re,tableValues:null,target:null,targetX:re,targetY:re,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:_t,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:re,underlineThickness:re,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:re,values:null,vAlphabetic:re,vMathematical:re,vectorEffect:null,vHanging:re,vIdeographic:re,version:null,vertAdvY:re,vertOriginX:re,vertOriginY:re,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:re,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ax}),cx=ss({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),ux=ss({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:lx}),dx=ss({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Hk={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},qk=/[A-Z]/g,Qp=/-[a-z]/g,Jk=/^data[-\w.:]+$/i;function Kk(e,t){const n=sc(t);let r=t,i=jt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Jk.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Qp,Qk);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Qp.test(o)){let a=o.replace(qk,Gk);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=ju}return new i(r,t)}function Gk(e){return"-"+e.toLowerCase()}function Qk(e){return e.charAt(1).toUpperCase()}const Yk=ix([ox,Vk,cx,ux,dx],"html"),_u=ix([ox,Wk,cx,ux,dx],"svg");function Xk(e){return e.join(" ").trim()}var Su={},Yp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Zk=/\n/g,ew=/^\s*/,tw=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,nw=/^:\s*/,rw=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,sw=/^[;\s]*/,iw=/^\s+|\s+$/g,ow=`
`,Xp="/",Zp="*",sr="",aw="comment",lw="declaration";function cw(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(y){var j=y.match(Zk);j&&(n+=j.length);var E=y.lastIndexOf(ow);r=~E?y.length-E:r+y.length}function o(){var y={line:n,column:r};return function(j){return j.position=new a(y),u(),j}}function a(y){this.start=y,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(y){var j=new Error(t.source+":"+n+":"+r+": "+y);if(j.reason=y,j.filename=t.source,j.line=n,j.column=r,j.source=e,!t.silent)throw j}function c(y){var j=y.exec(e);if(j){var E=j[0];return i(E),e=e.slice(E.length),j}}function u(){c(ew)}function d(y){var j;for(y=y||[];j=p();)j!==!1&&y.push(j);return y}function p(){var y=o();if(!(Xp!=e.charAt(0)||Zp!=e.charAt(1))){for(var j=2;sr!=e.charAt(j)&&(Zp!=e.charAt(j)||Xp!=e.charAt(j+1));)++j;if(j+=2,sr===e.charAt(j-1))return l("End of comment missing");var E=e.slice(2,j-2);return r+=2,i(E),e=e.slice(j),r+=2,y({type:aw,comment:E})}}function f(){var y=o(),j=c(tw);if(j){if(p(),!c(nw))return l("property missing ':'");var E=c(rw),v=y({type:lw,property:ef(j[0].replace(Yp,sr)),value:E?ef(E[0].replace(Yp,sr)):sr});return c(sw),v}}function m(){var y=[];d(y);for(var j;j=f();)j!==!1&&(y.push(j),d(y));return y}return u(),m()}function ef(e){return e?e.replace(iw,sr):sr}var uw=cw,dw=no&&no.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Su,"__esModule",{value:!0});Su.default=fw;const pw=dw(uw);function fw(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,pw.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l)}),n}var sa={};Object.defineProperty(sa,"__esModule",{value:!0});sa.camelCase=void 0;var mw=/^--[a-zA-Z0-9_-]+$/,hw=/-([a-z])/g,gw=/^[^-]+$/,xw=/^-(webkit|moz|ms|o|khtml)-/,yw=/^-(ms)-/,vw=function(e){return!e||gw.test(e)||mw.test(e)},bw=function(e,t){return t.toUpperCase()},tf=function(e,t){return"".concat(t,"-")},kw=function(e,t){return t===void 0&&(t={}),vw(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(yw,tf):e=e.replace(xw,tf),e.replace(hw,bw))};sa.camelCase=kw;var ww=no&&no.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},jw=ww(Su),_w=sa;function ac(e,t){var n={};return!e||typeof e!="string"||(0,jw.default)(e,function(r,i){r&&i&&(n[(0,_w.camelCase)(r,t)]=i)}),n}ac.default=ac;var Sw=ac;const Cw=Io(Sw),px=fx("end"),Cu=fx("start");function fx(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Nw(e){const t=Cu(e),n=px(e);if(t&&n)return{start:t,end:n}}function Ms(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?nf(e.position):"start"in e||"end"in e?nf(e):"line"in e||"column"in e?lc(e):""}function lc(e){return rf(e&&e.line)+":"+rf(e&&e.column)}function nf(e){return lc(e&&e.start)+"-"+lc(e&&e.end)}function rf(e){return e&&typeof e=="number"?e:1}class ut extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Ms(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ut.prototype.file="";ut.prototype.name="";ut.prototype.reason="";ut.prototype.message="";ut.prototype.stack="";ut.prototype.column=void 0;ut.prototype.line=void 0;ut.prototype.ancestors=void 0;ut.prototype.cause=void 0;ut.prototype.fatal=void 0;ut.prototype.place=void 0;ut.prototype.ruleId=void 0;ut.prototype.source=void 0;const Nu={}.hasOwnProperty,Ew=new Map,zw=/[A-Z]/g,Tw=new Set(["table","tbody","thead","tfoot","tr"]),Pw=new Set(["td","th"]),mx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Lw(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Fw(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Dw(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?_u:Yk,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=hx(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function hx(e,t,n){if(t.type==="element")return Aw(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Rw(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Iw(e,t,n);if(t.type==="mdxjsEsm")return Mw(e,t);if(t.type==="root")return Ow(e,t,n);if(t.type==="text")return $w(e,t)}function Aw(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=_u,e.schema=i),e.ancestors.push(t);const o=xx(e,t.tagName,!1),a=Bw(e,t);let l=zu(e,t);return Tw.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Bk(c):!0})),gx(e,a,o,t),Eu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Rw(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}oi(e,t.position)}function Mw(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);oi(e,t.position)}function Iw(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=_u,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:xx(e,t.name,!0),a=Uw(e,t),l=zu(e,t);return gx(e,a,o,t),Eu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Ow(e,t,n){const r={};return Eu(r,zu(e,t)),e.create(t,e.Fragment,r,n)}function $w(e,t){return t.value}function gx(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Eu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Dw(e,t,n){return r;function r(i,o,a,l){const u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function Fw(e,t){return n;function n(r,i,o,a){const l=Array.isArray(o.children),c=Cu(r);return t(i,o,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Bw(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Nu.call(t.properties,i)){const o=Vw(e,i,t.properties[i]);if(o){const[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Pw.has(t.tagName)?r=l:n[a]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Uw(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else oi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else oi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function zu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Ew;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=hx(e,o,a);l!==void 0&&n.push(l)}return n}function Vw(e,t,n){const r=Kk(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Ik(n):Xk(n)),r.property==="style"){let i=typeof n=="object"?n:Ww(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Hw(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Hk[r.property]||r.property:r.attribute,n]}}function Ww(e,t){try{return Cw(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ut("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=mx+"#cannot-parse-style-attribute",i}}function xx(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const l=Jp(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=a}else r=Jp(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Nu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);oi(e)}function oi(e,t){const n=new ut("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=mx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Hw(e){const t={};let n;for(n in e)Nu.call(e,n)&&(t[qw(n)]=e[n]);return t}function qw(e){let t=e.replace(zw,Jw);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Jw(e){return"-"+e.toLowerCase()}const Wa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Kw={};function Gw(e,t){const n=Kw,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return yx(e,r,i)}function yx(e,t,n){if(Qw(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return sf(e.children,t,n)}return Array.isArray(e)?sf(e,t,n):""}function sf(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=yx(e[i],t,n);return r.join("")}function Qw(e){return!!(e&&typeof e=="object")}const of=document.createElement("i");function Tu(e){const t="&"+e+";";of.innerHTML=t;const n=of.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function pn(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function $t(e,t){return e.length>0?(pn(e,e.length,0,t),e):t}const af={}.hasOwnProperty;function Yw(e){const t={};let n=-1;for(;++n<e.length;)Xw(t,e[n]);return t}function Xw(e,t){let n;for(n in t){const i=(af.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){af.call(i,a)||(i[a]=[]);const l=o[a];Zw(i[a],Array.isArray(l)?l:l?[l]:[])}}}function Zw(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);pn(e,0,0,r)}function vx(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Wr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const on=Xn(/[A-Za-z]/),Et=Xn(/[\dA-Za-z]/),ej=Xn(/[#-'*+\--9=?A-Z^-~]/);function cc(e){return e!==null&&(e<32||e===127)}const uc=Xn(/\d/),tj=Xn(/[\dA-Fa-f]/),nj=Xn(/[!-/:-@[-`{-~]/);function ye(e){return e!==null&&e<-2}function wt(e){return e!==null&&(e<0||e===32)}function Ee(e){return e===-2||e===-1||e===32}const rj=Xn(new RegExp("\\p{P}|\\p{S}","u")),sj=Xn(/\s/);function Xn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function is(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&Et(e.charCodeAt(n+1))&&Et(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Re(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return Ee(c)?(e.enter(n),l(c)):t(c)}function l(c){return Ee(c)&&o++<i?(e.consume(c),l):(e.exit(n),t(c))}}const ij={tokenize:oj};function oj(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Re(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return ye(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}const aj={tokenize:lj},lf={tokenize:cj};function lj(e){const t=this,n=[];let r=0,i,o,a;return l;function l(g){if(r<n.length){const P=n[r];return t.containerState=P[1],e.attempt(P[0].continuation,c,u)(g)}return u(g)}function c(g){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const P=t.events.length;let N=P,_;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){_=t.events[N][1].end;break}v(r);let C=P;for(;C<t.events.length;)t.events[C][1].end={..._},C++;return pn(t.events,N+1,0,t.events.slice(P)),t.events.length=C,u(g)}return l(g)}function u(g){if(r===n.length){if(!i)return f(g);if(i.currentConstruct&&i.currentConstruct.concrete)return y(g);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(lf,d,p)(g)}function d(g){return i&&x(),v(r),f(g)}function p(g){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,y(g)}function f(g){return t.containerState={},e.attempt(lf,m,y)(g)}function m(g){return r++,n.push([t.currentConstruct,t.containerState]),f(g)}function y(g){if(g===null){i&&x(),v(0),e.consume(g);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),j(g)}function j(g){if(g===null){E(e.exit("chunkFlow"),!0),v(0),e.consume(g);return}return ye(g)?(e.consume(g),E(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(g),j)}function E(g,P){const N=t.sliceStream(g);if(P&&N.push(null),g.previous=o,o&&(o.next=g),o=g,i.defineSkip(g.start),i.write(N),t.parser.lazy[g.start.line]){let _=i.events.length;for(;_--;)if(i.events[_][1].start.offset<a&&(!i.events[_][1].end||i.events[_][1].end.offset>a))return;const C=t.events.length;let b=C,R,S;for(;b--;)if(t.events[b][0]==="exit"&&t.events[b][1].type==="chunkFlow"){if(R){S=t.events[b][1].end;break}R=!0}for(v(r),_=C;_<t.events.length;)t.events[_][1].end={...S},_++;pn(t.events,b+1,0,t.events.slice(C)),t.events.length=_}}function v(g){let P=n.length;for(;P-- >g;){const N=n[P];t.containerState=N[1],N[0].exit.call(t,e)}n.length=g}function x(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function cj(e,t,n){return Re(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function cf(e){if(e===null||wt(e)||sj(e))return 1;if(rj(e))return 2}function Pu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const dc={name:"attention",resolveAll:uj,tokenize:dj};function uj(e,t){let n=-1,r,i,o,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};uf(p,-c),uf(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=$t(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=$t(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=$t(u,Pu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=$t(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=$t(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,pn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function dj(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=cf(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=cf(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function uf(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const pj={name:"autolink",tokenize:fj};function fj(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return on(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||Et(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||Et(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||cc(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):ej(m)?(e.consume(m),u):n(m)}function d(m){return Et(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||Et(m))&&r++<63){const y=m===45?f:p;return e.consume(m),y}return n(m)}}const ia={partial:!0,tokenize:mj};function mj(e,t,n){return r;function r(o){return Ee(o)?Re(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ye(o)?t(o):n(o)}}const bx={continuation:{tokenize:gj},exit:xj,name:"blockQuote",tokenize:hj};function hj(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return Ee(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function gj(e,t,n){const r=this;return i;function i(a){return Ee(a)?Re(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(bx,t,n)(a)}}function xj(e){e.exit("blockQuote")}const kx={name:"characterEscape",tokenize:yj};function yj(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return nj(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const wx={name:"characterReference",tokenize:vj};function vj(e,t,n){const r=this;let i=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=Et,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=tj,d):(e.enter("characterReferenceValue"),o=7,a=uc,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===Et&&!Tu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const df={partial:!0,tokenize:kj},pf={concrete:!0,name:"codeFenced",tokenize:bj};function bj(e,t,n){const r=this,i={partial:!0,tokenize:N};let o=0,a=0,l;return c;function c(_){return u(_)}function u(_){const C=r.events[r.events.length-1];return o=C&&C[1].type==="linePrefix"?C[2].sliceSerialize(C[1],!0).length:0,l=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(_)}function d(_){return _===l?(a++,e.consume(_),d):a<3?n(_):(e.exit("codeFencedFenceSequence"),Ee(_)?Re(e,p,"whitespace")(_):p(_))}function p(_){return _===null||ye(_)?(e.exit("codeFencedFence"),r.interrupt?t(_):e.check(df,j,P)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(_))}function f(_){return _===null||ye(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(_)):Ee(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Re(e,m,"whitespace")(_)):_===96&&_===l?n(_):(e.consume(_),f)}function m(_){return _===null||ye(_)?p(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(_))}function y(_){return _===null||ye(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(_)):_===96&&_===l?n(_):(e.consume(_),y)}function j(_){return e.attempt(i,P,E)(_)}function E(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),v}function v(_){return o>0&&Ee(_)?Re(e,x,"linePrefix",o+1)(_):x(_)}function x(_){return _===null||ye(_)?e.check(df,j,P)(_):(e.enter("codeFlowValue"),g(_))}function g(_){return _===null||ye(_)?(e.exit("codeFlowValue"),x(_)):(e.consume(_),g)}function P(_){return e.exit("codeFenced"),t(_)}function N(_,C,b){let R=0;return S;function S(B){return _.enter("lineEnding"),_.consume(B),_.exit("lineEnding"),L}function L(B){return _.enter("codeFencedFence"),Ee(B)?Re(_,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):I(B)}function I(B){return B===l?(_.enter("codeFencedFenceSequence"),q(B)):b(B)}function q(B){return B===l?(R++,_.consume(B),q):R>=a?(_.exit("codeFencedFenceSequence"),Ee(B)?Re(_,U,"whitespace")(B):U(B)):b(B)}function U(B){return B===null||ye(B)?(_.exit("codeFencedFence"),C(B)):b(B)}}}function kj(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Ha={name:"codeIndented",tokenize:jj},wj={partial:!0,tokenize:_j};function jj(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Re(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):ye(u)?e.attempt(wj,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||ye(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function _j(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):ye(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Re(e,o,"linePrefix",5)(a)}function o(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):ye(a)?i(a):n(a)}}const Sj={name:"codeText",previous:Nj,resolve:Cj,tokenize:Ej};function Cj(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Nj(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Ej(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):ye(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||ye(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class zj{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&gs(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),gs(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),gs(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);gs(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);gs(this.left,n.reverse())}}}function gs(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function jx(e){const t={};let n=-1,r,i,o,a,l,c,u;const d=new zj(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Tj(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return pn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Tj(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,m=n,y=0,j=0;const E=[j];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(j=f+1,E.push(j),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):E.pop(),f=E.length;f--;){const v=l.slice(E[f],E[f+1]),x=o.pop();c.push([x,x+v.length-1]),e.splice(x,2,v)}for(c.reverse(),f=-1;++f<c.length;)u[y+c[f][0]]=y+c[f][1],y+=c[f][1]-c[f][0]-1;return u}const Pj={resolve:Aj,tokenize:Rj},Lj={partial:!0,tokenize:Mj};function Aj(e){return jx(e),e}function Rj(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):ye(l)?e.check(Lj,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Mj(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Re(e,o,"linePrefix")}function o(a){if(a===null||ye(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function _x(e,t,n,r,i,o,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(v){return v===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(v),e.exit(o),f):v===null||v===32||v===41||cc(v)?n(v):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),j(v))}function f(v){return v===62?(e.enter(o),e.consume(v),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(v))}function m(v){return v===62?(e.exit("chunkString"),e.exit(l),f(v)):v===null||v===60||ye(v)?n(v):(e.consume(v),v===92?y:m)}function y(v){return v===60||v===62||v===92?(e.consume(v),m):m(v)}function j(v){return!d&&(v===null||v===41||wt(v))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(v)):d<u&&v===40?(e.consume(v),d++,j):v===41?(e.consume(v),d--,j):v===null||v===32||v===40||cc(v)?n(v):(e.consume(v),v===92?E:j)}function E(v){return v===40||v===41||v===92?(e.consume(v),j):j(v)}}function Sx(e,t,n,r,i,o){const a=this;let l=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return l>999||m===null||m===91||m===93&&!c||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):ye(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||ye(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!Ee(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function Cx(e,t,n,r,i,o){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):ye(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Re(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||ye(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function Is(e,t){let n;return r;function r(i){return ye(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Ee(i)?Re(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Ij={name:"definition",tokenize:$j},Oj={partial:!0,tokenize:Dj};function $j(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return Sx.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=Wr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return wt(m)?Is(e,u)(m):u(m)}function u(m){return _x(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(Oj,p,p)(m)}function p(m){return Ee(m)?Re(e,f,"whitespace")(m):f(m)}function f(m){return m===null||ye(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Dj(e,t,n){return r;function r(l){return wt(l)?Is(e,i)(l):n(l)}function i(l){return Cx(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return Ee(l)?Re(e,a,"whitespace")(l):a(l)}function a(l){return l===null||ye(l)?t(l):n(l)}}const Fj={name:"hardBreakEscape",tokenize:Bj};function Bj(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ye(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Uj={name:"headingAtx",resolve:Vj,tokenize:Wj};function Vj(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},pn(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function Wj(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||wt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||ye(d)?(e.exit("atxHeading"),t(d)):Ee(d)?Re(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||wt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const Hj=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],ff=["pre","script","style","textarea"],qj={concrete:!0,name:"htmlFlow",resolveTo:Gj,tokenize:Qj},Jj={partial:!0,tokenize:Xj},Kj={partial:!0,tokenize:Yj};function Gj(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Qj(e,t,n){const r=this;let i,o,a,l,c;return u;function u(h){return d(h)}function d(h){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(h),p}function p(h){return h===33?(e.consume(h),f):h===47?(e.consume(h),o=!0,j):h===63?(e.consume(h),i=3,r.interrupt?t:w):on(h)?(e.consume(h),a=String.fromCharCode(h),E):n(h)}function f(h){return h===45?(e.consume(h),i=2,m):h===91?(e.consume(h),i=5,l=0,y):on(h)?(e.consume(h),i=4,r.interrupt?t:w):n(h)}function m(h){return h===45?(e.consume(h),r.interrupt?t:w):n(h)}function y(h){const F="CDATA[";return h===F.charCodeAt(l++)?(e.consume(h),l===F.length?r.interrupt?t:I:y):n(h)}function j(h){return on(h)?(e.consume(h),a=String.fromCharCode(h),E):n(h)}function E(h){if(h===null||h===47||h===62||wt(h)){const F=h===47,z=a.toLowerCase();return!F&&!o&&ff.includes(z)?(i=1,r.interrupt?t(h):I(h)):Hj.includes(a.toLowerCase())?(i=6,F?(e.consume(h),v):r.interrupt?t(h):I(h)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(h):o?x(h):g(h))}return h===45||Et(h)?(e.consume(h),a+=String.fromCharCode(h),E):n(h)}function v(h){return h===62?(e.consume(h),r.interrupt?t:I):n(h)}function x(h){return Ee(h)?(e.consume(h),x):S(h)}function g(h){return h===47?(e.consume(h),S):h===58||h===95||on(h)?(e.consume(h),P):Ee(h)?(e.consume(h),g):S(h)}function P(h){return h===45||h===46||h===58||h===95||Et(h)?(e.consume(h),P):N(h)}function N(h){return h===61?(e.consume(h),_):Ee(h)?(e.consume(h),N):g(h)}function _(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(e.consume(h),c=h,C):Ee(h)?(e.consume(h),_):b(h)}function C(h){return h===c?(e.consume(h),c=null,R):h===null||ye(h)?n(h):(e.consume(h),C)}function b(h){return h===null||h===34||h===39||h===47||h===60||h===61||h===62||h===96||wt(h)?N(h):(e.consume(h),b)}function R(h){return h===47||h===62||Ee(h)?g(h):n(h)}function S(h){return h===62?(e.consume(h),L):n(h)}function L(h){return h===null||ye(h)?I(h):Ee(h)?(e.consume(h),L):n(h)}function I(h){return h===45&&i===2?(e.consume(h),se):h===60&&i===1?(e.consume(h),T):h===62&&i===4?(e.consume(h),V):h===63&&i===3?(e.consume(h),w):h===93&&i===5?(e.consume(h),M):ye(h)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Jj,Q,q)(h)):h===null||ye(h)?(e.exit("htmlFlowData"),q(h)):(e.consume(h),I)}function q(h){return e.check(Kj,U,Q)(h)}function U(h){return e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),B}function B(h){return h===null||ye(h)?q(h):(e.enter("htmlFlowData"),I(h))}function se(h){return h===45?(e.consume(h),w):I(h)}function T(h){return h===47?(e.consume(h),a="",$):I(h)}function $(h){if(h===62){const F=a.toLowerCase();return ff.includes(F)?(e.consume(h),V):I(h)}return on(h)&&a.length<8?(e.consume(h),a+=String.fromCharCode(h),$):I(h)}function M(h){return h===93?(e.consume(h),w):I(h)}function w(h){return h===62?(e.consume(h),V):h===45&&i===2?(e.consume(h),w):I(h)}function V(h){return h===null||ye(h)?(e.exit("htmlFlowData"),Q(h)):(e.consume(h),V)}function Q(h){return e.exit("htmlFlow"),t(h)}}function Yj(e,t,n){const r=this;return i;function i(a){return ye(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function Xj(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ia,t,n)}}const Zj={name:"htmlText",tokenize:e_};function e_(e,t,n){const r=this;let i,o,a;return l;function l(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),c}function c(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),N):w===63?(e.consume(w),g):on(w)?(e.consume(w),b):n(w)}function u(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),o=0,y):on(w)?(e.consume(w),x):n(w)}function d(w){return w===45?(e.consume(w),m):n(w)}function p(w){return w===null?n(w):w===45?(e.consume(w),f):ye(w)?(a=p,T(w)):(e.consume(w),p)}function f(w){return w===45?(e.consume(w),m):p(w)}function m(w){return w===62?se(w):w===45?f(w):p(w)}function y(w){const V="CDATA[";return w===V.charCodeAt(o++)?(e.consume(w),o===V.length?j:y):n(w)}function j(w){return w===null?n(w):w===93?(e.consume(w),E):ye(w)?(a=j,T(w)):(e.consume(w),j)}function E(w){return w===93?(e.consume(w),v):j(w)}function v(w){return w===62?se(w):w===93?(e.consume(w),v):j(w)}function x(w){return w===null||w===62?se(w):ye(w)?(a=x,T(w)):(e.consume(w),x)}function g(w){return w===null?n(w):w===63?(e.consume(w),P):ye(w)?(a=g,T(w)):(e.consume(w),g)}function P(w){return w===62?se(w):g(w)}function N(w){return on(w)?(e.consume(w),_):n(w)}function _(w){return w===45||Et(w)?(e.consume(w),_):C(w)}function C(w){return ye(w)?(a=C,T(w)):Ee(w)?(e.consume(w),C):se(w)}function b(w){return w===45||Et(w)?(e.consume(w),b):w===47||w===62||wt(w)?R(w):n(w)}function R(w){return w===47?(e.consume(w),se):w===58||w===95||on(w)?(e.consume(w),S):ye(w)?(a=R,T(w)):Ee(w)?(e.consume(w),R):se(w)}function S(w){return w===45||w===46||w===58||w===95||Et(w)?(e.consume(w),S):L(w)}function L(w){return w===61?(e.consume(w),I):ye(w)?(a=L,T(w)):Ee(w)?(e.consume(w),L):R(w)}function I(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,q):ye(w)?(a=I,T(w)):Ee(w)?(e.consume(w),I):(e.consume(w),U)}function q(w){return w===i?(e.consume(w),i=void 0,B):w===null?n(w):ye(w)?(a=q,T(w)):(e.consume(w),q)}function U(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||wt(w)?R(w):(e.consume(w),U)}function B(w){return w===47||w===62||wt(w)?R(w):n(w)}function se(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function T(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),$}function $(w){return Ee(w)?Re(e,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):M(w)}function M(w){return e.enter("htmlTextData"),a(w)}}const Lu={name:"labelEnd",resolveAll:s_,resolveTo:i_,tokenize:o_},t_={tokenize:a_},n_={tokenize:l_},r_={tokenize:c_};function s_(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&pn(e,0,e.length,n),e}function i_(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=$t(l,e.slice(o+1,o+r+3)),l=$t(l,[["enter",d,t]]),l=$t(l,Pu(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=$t(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=$t(l,e.slice(a+1)),l=$t(l,[["exit",c,t]]),pn(e,o,e.length,l),e}function o_(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Wr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(t_,d,a?d:p)(f):f===91?e.attempt(n_,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(r_,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function a_(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return wt(p)?Is(e,o)(p):o(p)}function o(p){return p===41?d(p):_x(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return wt(p)?Is(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Cx(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return wt(p)?Is(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function l_(e,t,n){const r=this;return i;function i(l){return Sx.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Wr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function c_(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const u_={name:"labelStartImage",resolveAll:Lu.resolveAll,tokenize:d_};function d_(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const p_={name:"labelStartLink",resolveAll:Lu.resolveAll,tokenize:f_};function f_(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const qa={name:"lineEnding",tokenize:m_};function m_(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Re(e,t,"linePrefix")}}const eo={name:"thematicBreak",tokenize:h_};function h_(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ye(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Ee(u)?Re(e,l,"whitespace")(u):l(u))}}const gt={continuation:{tokenize:v_},exit:k_,name:"list",tokenize:y_},g_={partial:!0,tokenize:w_},x_={partial:!0,tokenize:b_};function y_(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(m){const y=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:uc(m)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(eo,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return uc(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(ia,r.interrupt?n:d,e.attempt(g_,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return Ee(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function v_(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ia,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Re(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!Ee(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(x_,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Re(e,e.attempt(gt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function b_(e,t,n){const r=this;return Re(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function k_(e){e.exit(this.containerState.type)}function w_(e,t,n){const r=this;return Re(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!Ee(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const mf={name:"setextUnderline",resolveTo:j_,tokenize:__};function j_(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function __(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Ee(u)?Re(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ye(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const S_={tokenize:C_};function C_(e){const t=this,n=e.attempt(ia,r,e.attempt(this.parser.constructs.flowInitial,i,Re(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Pj,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const N_={resolveAll:Ex()},E_=Nx("string"),z_=Nx("text");function Nx(e){return{resolveAll:Ex(e==="text"?T_:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Ex(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function T_(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,l=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const P_={42:gt,43:gt,45:gt,48:gt,49:gt,50:gt,51:gt,52:gt,53:gt,54:gt,55:gt,56:gt,57:gt,62:bx},L_={91:Ij},A_={[-2]:Ha,[-1]:Ha,32:Ha},R_={35:Uj,42:eo,45:[mf,eo],60:qj,61:mf,95:eo,96:pf,126:pf},M_={38:wx,92:kx},I_={[-5]:qa,[-4]:qa,[-3]:qa,33:u_,38:wx,42:dc,60:[pj,Zj],91:p_,92:[Fj,kx],93:Lu,95:dc,96:Sj},O_={null:[dc,N_]},$_={null:[42,95]},D_={null:[]},F_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:$_,contentInitial:L_,disable:D_,document:P_,flow:R_,flowInitial:A_,insideSpan:O_,string:M_,text:I_},Symbol.toStringTag,{value:"Module"}));function B_(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],l=[];const c={attempt:C(N),check:C(_),consume:x,enter:g,exit:P,interrupt:C(_,{interrupt:!0})},u={code:null,containerState:{},defineSkip:j,events:[],now:y,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(L){return a=$t(a,L),E(),a[a.length-1]!==null?[]:(b(t,0),u.events=Pu(o,u.events,u),u.events)}function f(L,I){return V_(m(L),I)}function m(L){return U_(a,L)}function y(){const{_bufferIndex:L,_index:I,line:q,column:U,offset:B}=r;return{_bufferIndex:L,_index:I,line:q,column:U,offset:B}}function j(L){i[L.line]=L.column,S()}function E(){let L;for(;r._index<a.length;){const I=a[r._index];if(typeof I=="string")for(L=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===L&&r._bufferIndex<I.length;)v(I.charCodeAt(r._bufferIndex));else v(I)}}function v(L){d=d(L)}function x(L){ye(L)?(r.line++,r.column=1,r.offset+=L===-3?2:1,S()):L!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=L}function g(L,I){const q=I||{};return q.type=L,q.start=y(),u.events.push(["enter",q,u]),l.push(q),q}function P(L){const I=l.pop();return I.end=y(),u.events.push(["exit",I,u]),I}function N(L,I){b(L,I.from)}function _(L,I){I.restore()}function C(L,I){return q;function q(U,B,se){let T,$,M,w;return Array.isArray(U)?Q(U):"tokenize"in U?Q([U]):V(U);function V(G){return ge;function ge(xe){const J=xe!==null&&G[xe],A=xe!==null&&G.null,H=[...Array.isArray(J)?J:J?[J]:[],...Array.isArray(A)?A:A?[A]:[]];return Q(H)(xe)}}function Q(G){return T=G,$=0,G.length===0?se:h(G[$])}function h(G){return ge;function ge(xe){return w=R(),M=G,G.partial||(u.currentConstruct=G),G.name&&u.parser.constructs.disable.null.includes(G.name)?z():G.tokenize.call(I?Object.assign(Object.create(u),I):u,c,F,z)(xe)}}function F(G){return L(M,w),B}function z(G){return w.restore(),++$<T.length?h(T[$]):se}}}function b(L,I){L.resolveAll&&!o.includes(L)&&o.push(L),L.resolve&&pn(u.events,I,u.events.length-I,L.resolve(u.events.slice(I),u)),L.resolveTo&&(u.events=L.resolveTo(u.events,u))}function R(){const L=y(),I=u.previous,q=u.currentConstruct,U=u.events.length,B=Array.from(l);return{from:U,restore:se};function se(){r=L,u.previous=I,u.currentConstruct=q,u.events.length=U,l=B,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function U_(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function V_(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function W_(e){const r={constructs:Yw([F_,...(e||{}).extensions||[]]),content:i(ij),defined:[],document:i(aj),flow:i(S_),lazy:{},string:i(E_),text:i(z_)};return r;function i(o){return a;function a(l){return B_(r,o,l)}}}function H_(e){for(;!jx(e););return e}const hf=/[\0\t\n\r]/g;function q_(){let e=1,t="",n=!0,r;return i;function i(o,a,l){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(hf.lastIndex=p,u=hf.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const J_=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function K_(e){return e.replace(J_,G_)}function G_(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return vx(n.slice(o?2:1),o?16:10)}return Tu(n)||e}const zx={}.hasOwnProperty;function Q_(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Y_(n)(H_(W_(n).document().write(q_()(e,t,!0))))}function Y_(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(we),autolinkProtocol:R,autolinkEmail:R,atxHeading:o(K),blockQuote:o(A),characterEscape:R,characterReference:R,codeFenced:o(H),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(H,a),codeText:o(Z,a),codeTextData:R,data:R,codeFlowValue:R,definition:o(Y),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(ie),hardBreakEscape:o(X),hardBreakTrailing:o(X),htmlFlow:o(ne,a),htmlFlowData:R,htmlText:o(ne,a),htmlTextData:R,image:o(he),label:a,link:o(we),listItem:o(be),listItemValue:f,listOrdered:o(ze,p),listUnordered:o(ze),paragraph:o(D),reference:h,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(K),strong:o(oe),thematicBreak:o(ue)},exit:{atxHeading:c(),atxHeadingSequence:N,autolink:c(),autolinkEmail:J,autolinkProtocol:xe,blockQuote:c(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:z,characterReferenceMarkerNumeric:z,characterReferenceValue:G,characterReference:ge,codeFenced:c(E),codeFencedFence:j,codeFencedFenceInfo:m,codeFencedFenceMeta:y,codeFlowValue:S,codeIndented:c(v),codeText:c(B),codeTextData:S,data:S,definition:c(),definitionDestinationString:P,definitionLabelString:x,definitionTitleString:g,emphasis:c(),hardBreakEscape:c(I),hardBreakTrailing:c(I),htmlFlow:c(q),htmlFlowData:S,htmlText:c(U),htmlTextData:S,image:c(T),label:M,labelText:$,lineEnding:L,link:c(se),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:F,resourceDestinationString:w,resourceTitleString:V,resource:Q,setextHeading:c(b),setextHeadingLineSequence:C,setextHeadingText:_,strong:c(),thematicBreak:c()}};Tx(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(W){let ee={type:"root",children:[]};const me={stack:[ee],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},ae=[];let _e=-1;for(;++_e<W.length;)if(W[_e][1].type==="listOrdered"||W[_e][1].type==="listUnordered")if(W[_e][0]==="enter")ae.push(_e);else{const tt=ae.pop();_e=i(W,tt,_e)}for(_e=-1;++_e<W.length;){const tt=t[W[_e][0]];zx.call(tt,W[_e][1].type)&&tt[W[_e][1].type].call(Object.assign({sliceSerialize:W[_e][2].sliceSerialize},me),W[_e][1])}if(me.tokenStack.length>0){const tt=me.tokenStack[me.tokenStack.length-1];(tt[1]||gf).call(me,void 0,tt[0])}for(ee.position={start:Nn(W.length>0?W[0][1].start:{line:1,column:1,offset:0}),end:Nn(W.length>0?W[W.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<t.transforms.length;)ee=t.transforms[_e](ee)||ee;return ee}function i(W,ee,me){let ae=ee-1,_e=-1,tt=!1,fn,Wt,Zn,er;for(;++ae<=me;){const Xe=W[ae];switch(Xe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Xe[0]==="enter"?_e++:_e--,er=void 0;break}case"lineEndingBlank":{Xe[0]==="enter"&&(fn&&!er&&!_e&&!Zn&&(Zn=ae),er=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:er=void 0}if(!_e&&Xe[0]==="enter"&&Xe[1].type==="listItemPrefix"||_e===-1&&Xe[0]==="exit"&&(Xe[1].type==="listUnordered"||Xe[1].type==="listOrdered")){if(fn){let Sn=ae;for(Wt=void 0;Sn--;){const Ht=W[Sn];if(Ht[1].type==="lineEnding"||Ht[1].type==="lineEndingBlank"){if(Ht[0]==="exit")continue;Wt&&(W[Wt][1].type="lineEndingBlank",tt=!0),Ht[1].type="lineEnding",Wt=Sn}else if(!(Ht[1].type==="linePrefix"||Ht[1].type==="blockQuotePrefix"||Ht[1].type==="blockQuotePrefixWhitespace"||Ht[1].type==="blockQuoteMarker"||Ht[1].type==="listItemIndent"))break}Zn&&(!Wt||Zn<Wt)&&(fn._spread=!0),fn.end=Object.assign({},Wt?W[Wt][1].start:Xe[1].end),W.splice(Wt||ae,0,["exit",fn,Xe[2]]),ae++,me++}if(Xe[1].type==="listItemPrefix"){const Sn={type:"listItem",_spread:!1,start:Object.assign({},Xe[1].start),end:void 0};fn=Sn,W.splice(ae,0,["enter",Sn,Xe[2]]),ae++,me++,Zn=void 0,er=!0}}}return W[ee][1]._spread=tt,me}function o(W,ee){return me;function me(ae){l.call(this,W(ae),ae),ee&&ee.call(this,ae)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(W,ee,me){this.stack[this.stack.length-1].children.push(W),this.stack.push(W),this.tokenStack.push([ee,me||void 0]),W.position={start:Nn(ee.start),end:void 0}}function c(W){return ee;function ee(me){W&&W.call(this,me),u.call(this,me)}}function u(W,ee){const me=this.stack.pop(),ae=this.tokenStack.pop();if(ae)ae[0].type!==W.type&&(ee?ee.call(this,W,ae[0]):(ae[1]||gf).call(this,W,ae[0]));else throw new Error("Cannot close `"+W.type+"` ("+Ms({start:W.start,end:W.end})+"): it’s not open");me.position.end=Nn(W.end)}function d(){return Gw(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(W){if(this.data.expectingFirstListItemValue){const ee=this.stack[this.stack.length-2];ee.start=Number.parseInt(this.sliceSerialize(W),10),this.data.expectingFirstListItemValue=void 0}}function m(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.lang=W}function y(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.meta=W}function j(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function v(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W.replace(/(\r?\n|\r)$/g,"")}function x(W){const ee=this.resume(),me=this.stack[this.stack.length-1];me.label=ee,me.identifier=Wr(this.sliceSerialize(W)).toLowerCase()}function g(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.title=W}function P(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.url=W}function N(W){const ee=this.stack[this.stack.length-1];if(!ee.depth){const me=this.sliceSerialize(W).length;ee.depth=me}}function _(){this.data.setextHeadingSlurpLineEnding=!0}function C(W){const ee=this.stack[this.stack.length-1];ee.depth=this.sliceSerialize(W).codePointAt(0)===61?1:2}function b(){this.data.setextHeadingSlurpLineEnding=void 0}function R(W){const me=this.stack[this.stack.length-1].children;let ae=me[me.length-1];(!ae||ae.type!=="text")&&(ae=fe(),ae.position={start:Nn(W.start),end:void 0},me.push(ae)),this.stack.push(ae)}function S(W){const ee=this.stack.pop();ee.value+=this.sliceSerialize(W),ee.position.end=Nn(W.end)}function L(W){const ee=this.stack[this.stack.length-1];if(this.data.atHardBreak){const me=ee.children[ee.children.length-1];me.position.end=Nn(W.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(ee.type)&&(R.call(this,W),S.call(this,W))}function I(){this.data.atHardBreak=!0}function q(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W}function U(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W}function B(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W}function se(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=ee,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function T(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=ee,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function $(W){const ee=this.sliceSerialize(W),me=this.stack[this.stack.length-2];me.label=K_(ee),me.identifier=Wr(ee).toLowerCase()}function M(){const W=this.stack[this.stack.length-1],ee=this.resume(),me=this.stack[this.stack.length-1];if(this.data.inReference=!0,me.type==="link"){const ae=W.children;me.children=ae}else me.alt=ee}function w(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.url=W}function V(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.title=W}function Q(){this.data.inReference=void 0}function h(){this.data.referenceType="collapsed"}function F(W){const ee=this.resume(),me=this.stack[this.stack.length-1];me.label=ee,me.identifier=Wr(this.sliceSerialize(W)).toLowerCase(),this.data.referenceType="full"}function z(W){this.data.characterReferenceType=W.type}function G(W){const ee=this.sliceSerialize(W),me=this.data.characterReferenceType;let ae;me?(ae=vx(ee,me==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ae=Tu(ee);const _e=this.stack[this.stack.length-1];_e.value+=ae}function ge(W){const ee=this.stack.pop();ee.position.end=Nn(W.end)}function xe(W){S.call(this,W);const ee=this.stack[this.stack.length-1];ee.url=this.sliceSerialize(W)}function J(W){S.call(this,W);const ee=this.stack[this.stack.length-1];ee.url="mailto:"+this.sliceSerialize(W)}function A(){return{type:"blockquote",children:[]}}function H(){return{type:"code",lang:null,meta:null,value:""}}function Z(){return{type:"inlineCode",value:""}}function Y(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ie(){return{type:"emphasis",children:[]}}function K(){return{type:"heading",depth:0,children:[]}}function X(){return{type:"break"}}function ne(){return{type:"html",value:""}}function he(){return{type:"image",title:null,url:"",alt:null}}function we(){return{type:"link",title:null,url:"",children:[]}}function ze(W){return{type:"list",ordered:W.type==="listOrdered",start:null,spread:W._spread,children:[]}}function be(W){return{type:"listItem",spread:W._spread,checked:null,children:[]}}function D(){return{type:"paragraph",children:[]}}function oe(){return{type:"strong",children:[]}}function fe(){return{type:"text",value:""}}function ue(){return{type:"thematicBreak"}}}function Nn(e){return{line:e.line,column:e.column,offset:e.offset}}function Tx(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Tx(e,r):X_(e,r)}}function X_(e,t){let n;for(n in t)if(zx.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function gf(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ms({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ms({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ms({start:t.start,end:t.end})+") is still open")}function Z_(e){const t=this;t.parser=n;function n(r){return Q_(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function e2(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function t2(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function n2(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function r2(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function s2(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function i2(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=is(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function o2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function a2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Px(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function l2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Px(e,t);const i={src:is(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function c2(e,t){const n={src:is(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function u2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function d2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Px(e,t);const i={href:is(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function p2(e,t){const n={href:is(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function f2(e,t,n){const r=e.all(t),i=n?m2(n):Lx(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function m2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Lx(n[r])}return t}function Lx(e){const t=e.spread;return t??e.children.length>1}function h2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function g2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function x2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function y2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function v2(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=Cu(t.children[1]),c=px(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function b2(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let y={type:"element",tagName:o,properties:f,children:[]};p&&(y.children=e.all(p),e.patch(p,y),y=e.applyData(p,y)),u.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function k2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const xf=9,yf=32;function w2(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(vf(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(vf(t.slice(i),i>0,!1)),o.join("")}function vf(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===xf||o===yf;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===xf||o===yf;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function j2(e,t){const n={type:"text",value:w2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function _2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const S2={blockquote:e2,break:t2,code:n2,delete:r2,emphasis:s2,footnoteReference:i2,heading:o2,html:a2,imageReference:l2,image:c2,inlineCode:u2,linkReference:d2,link:p2,listItem:f2,list:h2,paragraph:g2,root:x2,strong:y2,table:v2,tableCell:k2,tableRow:b2,text:j2,thematicBreak:_2,toml:$i,yaml:$i,definition:$i,footnoteDefinition:$i};function $i(){}const Ax=-1,oa=0,Os=1,Ao=2,Au=3,Ru=4,Mu=5,Iu=6,Rx=7,Mx=8,bf=typeof self=="object"?self:globalThis,C2=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case oa:case Ax:return n(a,i);case Os:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Ao:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case Au:return n(new Date(a),i);case Ru:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case Mu:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case Iu:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case Rx:{const{name:l,message:c}=a;return n(new bf[l](c),i)}case Mx:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new bf[o](a),i)};return r},kf=e=>C2(new Map,e)(0),wr="",{toString:N2}={},{keys:E2}=Object,xs=e=>{const t=typeof e;if(t!=="object"||!e)return[oa,t];const n=N2.call(e).slice(8,-1);switch(n){case"Array":return[Os,wr];case"Object":return[Ao,wr];case"Date":return[Au,wr];case"RegExp":return[Ru,wr];case"Map":return[Mu,wr];case"Set":return[Iu,wr];case"DataView":return[Os,n]}return n.includes("Array")?[Os,n]:n.includes("Error")?[Rx,n]:[Ao,n]},Di=([e,t])=>e===oa&&(t==="function"||t==="symbol"),z2=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},o=a=>{if(n.has(a))return n.get(a);let[l,c]=xs(a);switch(l){case oa:{let d=a;switch(c){case"bigint":l=Mx,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Ax],a)}return i([l,d],a)}case Os:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(o(f));return p}case Ao:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([l,d],a);for(const f of E2(a))(e||!Di(xs(a[f])))&&d.push([o(f),o(a[f])]);return p}case Au:return i([l,a.toISOString()],a);case Ru:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case Mu:{const d=[],p=i([l,d],a);for(const[f,m]of a)(e||!(Di(xs(f))||Di(xs(m))))&&d.push([o(f),o(m)]);return p}case Iu:{const d=[],p=i([l,d],a);for(const f of a)(e||!Di(xs(f)))&&d.push(o(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return o},wf=(e,{json:t,lossy:n}={})=>{const r=[];return z2(!(t||n),!!t,new Map,r)(e),r},Ro=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?kf(wf(e,t)):structuredClone(e):(e,t)=>kf(wf(e,t));function T2(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function P2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function L2(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||T2,r=e.options.footnoteBackLabel||P2,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=is(p.toLowerCase());let m=0;const y=[],j=e.footnoteCounts.get(p);for(;j!==void 0&&++m<=j;){y.length>0&&y.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,m);typeof x=="string"&&(x={type:"text",value:x}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const E=d[d.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const x=E.children[E.children.length-1];x&&x.type==="text"?x.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...y)}else d.push(...y);const v={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,v),l.push(v)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Ro(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Ix=function(e){if(e==null)return I2;if(typeof e=="function")return aa(e);if(typeof e=="object")return Array.isArray(e)?A2(e):R2(e);if(typeof e=="string")return M2(e);throw new Error("Expected function, string, or object as test")};function A2(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Ix(e[n]);return aa(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function R2(e){const t=e;return aa(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function M2(e){return aa(t);function t(n){return n&&n.type===e}}function aa(e){return t;function t(n,r,i){return!!(O2(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function I2(){return!0}function O2(e){return e!==null&&typeof e=="object"&&"type"in e}const Ox=[],$2=!0,jf=!1,D2="skip";function F2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Ix(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Ox,y,j,E;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=B2(n(c,d)),m[0]===jf))return m;if("children"in c&&c.children){const v=c;if(v.children&&m[0]!==D2)for(j=(r?v.children.length:-1)+a,E=d.concat(v);j>-1&&j<v.children.length;){const x=v.children[j];if(y=l(x,j,E)(),y[0]===jf)return y;j=typeof y[1]=="number"?y[1]:j+a}}return m}}}function B2(e){return Array.isArray(e)?e:typeof e=="number"?[$2,e]:e==null?Ox:[e]}function $x(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),F2(e,o,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const pc={}.hasOwnProperty,U2={};function V2(e,t){const n=t||U2,r=new Map,i=new Map,o=new Map,a={...S2,...n.handlers},l={all:u,applyData:H2,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:W2,wrap:J2};return $x(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,m=l.handlers[f];if(pc.call(l.handlers,f)&&m)return m(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:j,...E}=d,v=Ro(E);return v.children=l.all(d),v}return Ro(d)}return(l.options.unknownHandler||q2)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const y=l.one(f[m],d);if(y){if(m&&f[m-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=_f(y.value)),!Array.isArray(y)&&y.type==="element")){const j=y.children[0];j&&j.type==="text"&&(j.value=_f(j.value))}Array.isArray(y)?p.push(...y):p.push(y)}}}return p}}function W2(e,t){e.position&&(t.position=Nw(e))}function H2(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,Ro(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function q2(e,t){const n=t.data||{},r="value"in t&&!(pc.call(n,"hProperties")||pc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function J2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function _f(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Sf(e,t){const n=V2(e,t),r=n.one(e,void 0),i=L2(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function K2(e,t){return e&&"run"in e?async function(n,r){const i=Sf(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Sf(n,{file:r,...e||t})}}function Cf(e){if(e)throw e}var to=Object.prototype.hasOwnProperty,Dx=Object.prototype.toString,Nf=Object.defineProperty,Ef=Object.getOwnPropertyDescriptor,zf=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Dx.call(t)==="[object Array]"},Tf=function(t){if(!t||Dx.call(t)!=="[object Object]")return!1;var n=to.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&to.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||to.call(t,i)},Pf=function(t,n){Nf&&n.name==="__proto__"?Nf(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Lf=function(t,n){if(n==="__proto__")if(to.call(t,n)){if(Ef)return Ef(t,n).value}else return;return t[n]},G2=function e(){var t,n,r,i,o,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Lf(l,n),i=Lf(t,n),l!==i&&(d&&i&&(Tf(i)||(o=zf(i)))?(o?(o=!1,a=r&&zf(r)?r:[]):a=r&&Tf(r)?r:{},Pf(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Pf(l,{name:n,newValue:i}));return l};const Ja=Io(G2);function fc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Q2(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?Y2(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Y2(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...l){n||(n=!0,t(a,...l))}function o(a){i(null,a)}}const rn={basename:X2,dirname:Z2,extname:eS,join:tS,sep:"/"};function X2(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');yi(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function Z2(e){if(yi(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function eS(e){yi(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function tS(...e){let t=-1,n;for(;++t<e.length;)yi(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":nS(n)}function nS(e){yi(e);const t=e.codePointAt(0)===47;let n=rS(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function rS(e,t){let n="",r=0,i=-1,o=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else l===46&&o>-1?o++:o=-1}return n}function yi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const sS={cwd:iS};function iS(){return"/"}function mc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function oS(e){if(typeof e=="string")e=new URL(e);else if(!mc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return aS(e)}function aS(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Ka=["history","path","basename","stem","extname","dirname"];class Fx{constructor(t){let n;t?mc(t)?n={path:t}:typeof t=="string"||lS(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":sS.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ka.length;){const o=Ka[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Ka.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?rn.basename(this.path):void 0}set basename(t){Qa(t,"basename"),Ga(t,"basename"),this.path=rn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?rn.dirname(this.path):void 0}set dirname(t){Af(this.basename,"dirname"),this.path=rn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?rn.extname(this.path):void 0}set extname(t){if(Ga(t,"extname"),Af(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=rn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){mc(t)&&(t=oS(t)),Qa(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?rn.basename(this.path,this.extname):void 0}set stem(t){Qa(t,"stem"),Ga(t,"stem"),this.path=rn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ut(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Ga(e,t){if(e&&e.includes(rn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+rn.sep+"`")}function Qa(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Af(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function lS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const cS=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},uS={}.hasOwnProperty;class Ou extends cS{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Q2()}copy(){const t=new Ou;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ja(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Za("data",this.frozen),this.namespace[t]=n,this):uS.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Za("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Fi(t),r=this.parser||this.Parser;return Ya("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Ya("process",this.parser||this.Parser),Xa("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const l=Fi(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const m=p,y=r.stringify(m,f);fS(y)?f.value=y:f.result=y,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),Ya("processSync",this.parser||this.Parser),Xa("processSync",this.compiler||this.Compiler),this.process(t,i),Mf("processSync","process",n),r;function i(o,a){n=!0,Cf(o),r=a}}run(t,n,r){Rf(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){const c=Fi(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Mf("runSync","run",r),i;function o(a,l){Cf(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Fi(n),i=this.compiler||this.Compiler;return Xa("stringify",i),Rf(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Za("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ja(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...y]=d;const j=r[f][1];fc(j)&&fc(m)&&(m=Ja(!0,j,m)),r[f]=[u,m,...y]}}}}const dS=new Ou().freeze();function Ya(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Xa(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Za(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Rf(e){if(!fc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Mf(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Fi(e){return pS(e)?e:new Fx(e)}function pS(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function fS(e){return typeof e=="string"||mS(e)}function mS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const hS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",If=[],Of={allowDangerousHtml:!0},gS=/^(https?|ircs?|mailto|xmpp)$/i,xS=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Bx(e){const t=yS(e),n=vS(e);return bS(t.runSync(t.parse(n),n),e)}function yS(e){const t=e.rehypePlugins||If,n=e.remarkPlugins||If,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Of}:Of;return dS().use(Z_).use(n).use(K2,r).use(t)}function vS(e){const t=e.children||"",n=new Fx;return typeof t=="string"&&(n.value=t),n}function bS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||kS;for(const d of xS)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+hS+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),$x(e,u),Lw(e,{Fragment:s.Fragment,components:i,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in Wa)if(Object.hasOwn(Wa,m)&&Object.hasOwn(d.properties,m)){const y=d.properties[m],j=Wa[m];(j===null||j.includes(d.tagName))&&(d.properties[m]=c(String(y||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function kS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||gS.test(e.slice(0,t))?e:""}function wS({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=k.useState(!1),[a,l]=k.useState(r),c=k.useRef(null),u=k.useRef(null);k.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));l(m)}},[e,r]),k.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&o(!1)}return k.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),s.jsxs("div",{ref:c,className:"markdown-editor",children:[s.jsx("style",{children:`
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
      `}),i?s.jsx("div",{className:"monaco-wrapper",children:s.jsx(Ft,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):s.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[s.jsxs("span",{className:"edit-hint",children:[s.jsx(db,{size:12}),"Click to edit"]}),e?s.jsx("div",{className:"markdown-content",children:s.jsx(Bx,{children:e})}):s.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function jS(e){return/^[a-zA-Z0-9_]+$/.test(e)}function _S({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=ct(),[l,c]=k.useState(new Set(["basic","model","tools","subagents"])),[u,d]=k.useState(!1),[p,f]=k.useState(!1),[m,y]=k.useState(!1),[j,E]=k.useState(""),[v,x]=k.useState(null);if(!t)return null;function g(T){n(e.id,T)}function P(T){if(T===""){x(null),g({name:T});return}jS(T)?x(null):x("Name can only contain letters, numbers, and underscores"),g({name:T})}function N(T){const $=new Set(l);$.has(T)?$.delete(T):$.add(T),c($)}const _=e.type==="LlmAgent",C=e;function b(T){_&&g({tools:[...C.tools,T]})}function R(T){_&&g({tools:C.tools.filter(($,M)=>M!==T)})}function S(T,$){if(!_)return;const M=[...C.tools];M[T]=$,g({tools:M})}function L(T){"sub_agents"in e&&g({sub_agents:[...e.sub_agents,T]})}function I(T){"sub_agents"in e&&g({sub_agents:e.sub_agents.filter($=>$!==T)})}const q=t.agents.filter(T=>T.id!==e.id);async function U(){if(!(!t||!_)){d(!0);try{const T=C.instruction||"",$=T?`Current instruction to improve:

${T}

Please improve and expand this instruction while preserving its core intent.`:void 0,w=t.agents.some(Q=>Q.id===e.id)?void 0:e,V=await Zi(t.id,e.id,$,w);V.success&&V.prompt?g({instruction:V.prompt}):alert("Failed to generate prompt: "+(V.error||"Unknown error"))}catch(T){alert("Error generating prompt: "+T.message)}finally{d(!1)}}}async function B(){if(!(!t||!_||!j.trim())){d(!0);try{const $=`Current instruction:

${C.instruction||""}

---

Requested changes:
${j}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,w=t.agents.some(Q=>Q.id===e.id)?void 0:e,V=await Zi(t.id,e.id,$,w);V.success&&V.prompt?(g({instruction:V.prompt}),y(!1),E("")):alert("Failed to apply changes: "+(V.error||"Unknown error"))}catch(T){alert("Error applying changes: "+T.message)}finally{d(!1)}}}async function se(){if(!t||!_)return;const T=C.instruction;if(!T){alert("Please write an instruction first");return}f(!0);try{const $=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,M=await Zi(t.id,e.id,$);if(M.success&&M.prompt){let w=M.prompt.trim();w=w.replace(/^["']|["']$/g,"").trim();const V=w.split(/[.!?\n]/)[0].trim(),Q=V.length>80?V.slice(0,77)+"...":V;g({description:Q})}else alert("Failed to generate description: "+(M.error||"Unknown error"))}catch($){alert("Error generating description: "+$.message)}finally{f(!1)}}return s.jsxs("div",{className:"agent-editor",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"editor-header",children:[s.jsx(dr,{size:24,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:e.name,onChange:T=>P(T.target.value),placeholder:"Agent name",style:{borderColor:v?"var(--error)":void 0}}),v&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:v})]}),s.jsx("span",{className:"badge badge-info",children:e.type}),s.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[s.jsx(Jn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"editor-content",children:[s.jsxs(ys,{id:"basic",title:"Basic Info",icon:s.jsx(dr,{size:16}),expanded:l.has("basic"),onToggle:()=>N("basic"),children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Description"}),_&&C.instruction&&s.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:se,disabled:p,title:"Generate description from instruction",children:p?s.jsxs(s.Fragment,{children:[s.jsx(Mn,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),s.jsx("input",{type:"text",value:e.description,onChange:T=>g({description:T.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),_&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Instruction"}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(!m),disabled:u||!C.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?s.jsxs(s.Fragment,{children:[s.jsx(Mn,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&s.jsxs("div",{className:"request-changes-box",children:[s.jsx("input",{type:"text",value:j,onChange:T=>E(T.target.value),placeholder:"Describe what changes you want...",onKeyDown:T=>{T.key==="Enter"&&j.trim()?B():T.key==="Escape"&&(y(!1),E(""))},autoFocus:!0}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:B,disabled:u||!j.trim(),children:"Apply"})]}),s.jsx(wS,{value:C.instruction,onChange:T=>g({instruction:T}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Output Key"}),s.jsxs("select",{value:C.output_key||"",onChange:T=>g({output_key:T.target.value||void 0}),children:[s.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(T=>s.jsx("option",{value:T.name,children:T.name},T.name))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Include Contents"}),s.jsxs("select",{value:C.include_contents,onChange:T=>g({include_contents:T.target.value}),children:[s.jsx("option",{value:"default",children:"Default"}),s.jsx("option",{value:"none",children:"None"})]})]})]}),s.jsxs("div",{className:"form-row",style:{gap:24},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:C.disallow_transfer_to_parent,onChange:T=>g({disallow_transfer_to_parent:T.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:C.disallow_transfer_to_peers,onChange:T=>g({disallow_transfer_to_peers:T.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Iterations"}),s.jsx("input",{type:"number",value:e.max_iterations||"",onChange:T=>g({max_iterations:parseInt(T.target.value)||void 0}),placeholder:"No limit"})]})})]}),_&&s.jsx(ys,{id:"model",title:"Model",icon:s.jsx(gu,{size:16}),expanded:l.has("model"),onToggle:()=>N("model"),children:s.jsx(CS,{agent:C,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:T=>g({model:T})})}),_&&s.jsx(ys,{id:"tools",title:`Tools (${C.tools.length})`,icon:s.jsx(Xt,{size:16}),expanded:l.has("tools"),onToggle:()=>N("tools"),children:s.jsx(SS,{tools:C.tools,onAdd:b,onRemove:R,onUpdate:S,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:q,skillsets:t.skillsets||[]})}),"sub_agents"in e&&s.jsx(ys,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:s.jsx(Kg,{size:16}),expanded:l.has("subagents"),onToggle:()=>N("subagents"),children:s.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(T=>{const $=t.agents.find(M=>M.id===T);return $?s.jsxs("div",{className:"sub-agent-chip",children:[$.name,s.jsx("button",{onClick:()=>I(T),children:s.jsx($e,{size:12})})]},T):null}),s.jsxs("select",{value:"",onChange:T=>{T.target.value&&L(T.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[s.jsx("option",{value:"",children:"Add agent..."}),q.filter(T=>!e.sub_agents.includes(T.id)).map(T=>s.jsx("option",{value:T.id,children:T.name},T.id))]})]})}),s.jsx(ys,{id:"callbacks",title:"Callbacks",icon:s.jsx(dn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>N("callbacks"),children:s.jsx(NS,{agent:e,onUpdate:g,customCallbacks:t.custom_callbacks||[],isLlmAgent:_})})]})]})}function ys({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-header",onClick:i,children:[r?s.jsx(Rt,{size:16}):s.jsx(Mt,{size:16}),s.jsxs("h4",{children:[n," ",t]})]}),r&&s.jsx("div",{className:"section-content",children:o})]})}function SS({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=k.useState(!1),[f,m]=k.useState({}),[y,j]=k.useState(""),E=zt.useRef(null),v=zt.useRef(null),[x,g]=k.useState(null),[P,N]=k.useState(new Set),_=(z,G)=>{if(!y.trim())return!0;const ge=y.toLowerCase();return z.toLowerCase().includes(ge)||((G==null?void 0:G.toLowerCase().includes(ge))??!1)},C=i.filter(z=>_(z.name,z.description)),b=o.filter(z=>_(z.name,z.description)),R=a.filter(z=>_(z.name,z.description)),S=l.filter(z=>_(z.name,z.description)),L=c.filter(z=>_(z.name,z.description)),I=u.filter(z=>_(z.name,z.description));function q(){if(E.current){const z=E.current.getBoundingClientRect(),G=window.innerHeight,ge=350,xe=G-z.bottom-16,J=z.top-16;if(xe>=200||xe>=J){const A=Math.min(ge,xe);m({top:z.bottom+4,left:z.left,maxHeight:A})}else{const A=Math.min(ge,J);m({top:z.top-A-4,left:z.left,maxHeight:A})}}p(!0),j(""),setTimeout(()=>{var z;return(z=v.current)==null?void 0:z.focus()},50)}function U(){p(!1),j("")}function B(z){t({type:"builtin",name:z}),U()}async function se(z){U();const G=z.tool_filter||[];if(g({server:z,enabledTools:new Set(G),availableTools:G.map(ge=>({name:ge,description:""})),isLoading:G.length===0,error:void 0}),G.length===0)try{const{testMcpServer:ge}=await Nb(async()=>{const{testMcpServer:J}=await Promise.resolve().then(()=>Q0);return{testMcpServer:J}},void 0),xe=await ge({connection_type:z.connection_type,command:z.command,args:z.args,env:z.env,url:z.url,headers:z.headers,timeout:z.timeout||30});xe.success?g(J=>J?{...J,availableTools:xe.tools,enabledTools:new Set(xe.tools.map(A=>A.name)),isLoading:!1}:null):g(J=>J?{...J,isLoading:!1,error:xe.error||"Failed to connect to MCP server"}:null)}catch(ge){g(xe=>xe?{...xe,isLoading:!1,error:ge.message}:null)}}function T(z){if(!x)return;const G=new Set(x.enabledTools);G.has(z)?G.delete(z):G.add(z),g({...x,enabledTools:G})}function $(){if(!x)return;const z=Array.from(x.enabledTools);t({type:"mcp",server:{...x.server,tool_filter:z}}),g(null)}function M(z){const G=new Set(P);G.has(z)?G.delete(z):G.add(z),N(G)}function w(z,G){const ge=e[z];if(ge.type!=="mcp"||!ge.server)return;const xe=ge.server.tool_filter||[];let J;xe.includes(G)?J=xe.filter(A=>A!==G):J=[...xe,G],r(z,{...ge,server:{...ge.server,tool_filter:J}})}function V(z){t({type:"function",name:z.name,module_path:z.module_path}),U()}function Q(z){const G=c.find(ge=>ge.id===z);t({type:"agent",agent_id:z,name:G==null?void 0:G.name}),U()}function h(z){const G=u.find(ge=>ge.id===z);t({type:"skillset",skillset_id:z,name:G==null?void 0:G.name}),U()}function F(z){return o.find(G=>G.name===z)}return s.jsxs("div",{children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"tool-list",children:e.map((z,G)=>{var ge;return z.type==="mcp"&&z.server?s.jsxs("div",{className:"mcp-tool-item",children:[s.jsxs("div",{className:"mcp-tool-header",onClick:()=>M(G),children:[P.has(G)?s.jsx(Rt,{size:14}):s.jsx(Mt,{size:14}),s.jsx(Xt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"mcp-tool-info",children:[s.jsx("div",{className:"mcp-tool-name",children:z.server.name}),s.jsx("div",{className:"mcp-tool-count",children:z.server.tool_filter===null||z.server.tool_filter===void 0?"all tools":`${z.server.tool_filter.length} tools enabled`})]}),s.jsx("button",{className:"delete-btn",onClick:xe=>{xe.stopPropagation(),n(G)},children:s.jsx($e,{size:14})})]}),P.has(G)&&s.jsx("div",{className:"mcp-tool-body",children:s.jsx("div",{className:"mcp-tool-list",children:(()=>{const xe=F(z.server.name),J=(xe==null?void 0:xe.tool_filter)||z.server.tool_filter||[],A=new Set(z.server.tool_filter||[]);return J.map(H=>s.jsxs("label",{className:`mcp-tool-chip ${A.has(H)?"enabled":"disabled"}`,onClick:()=>w(G,H),children:[s.jsx("input",{type:"checkbox",checked:A.has(H),onChange:()=>{},style:{display:"none"}}),H]},H))})()})})]},G):z.type==="skillset"?s.jsxs("div",{className:"tool-item",children:[s.jsx(vn,{size:14,style:{color:"var(--accent)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:z.name||((ge=u.find(xe=>xe.id===z.skillset_id))==null?void 0:ge.name)||"SkillSet"}),s.jsx("div",{className:"tool-item-type",children:"skillset"})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(G),children:s.jsx($e,{size:14})})]},G):s.jsxs("div",{className:"tool-item",children:[s.jsx(Xt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:z.name||z.agent_id}),s.jsx("div",{className:"tool-item-type",children:z.type})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(G),children:s.jsx($e,{size:14})})]},G)})}),s.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[s.jsxs("button",{ref:E,className:"btn btn-secondary btn-sm",onClick:()=>d?U():q(),children:[s.jsx(Je,{size:14}),"Add Tool"]}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"dropdown-backdrop",onClick:U}),s.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[s.jsx("div",{className:"dropdown-search",children:s.jsx("input",{ref:v,type:"text",placeholder:"Search tools...",value:y,onChange:z=>j(z.target.value),onKeyDown:z=>z.key==="Escape"&&U()})}),C.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Built-in Tools"}),C.map(z=>s.jsxs("button",{className:"dropdown-item",onClick:()=>B(z.name),children:[s.jsx("div",{className:"dropdown-item-name",children:z.name}),s.jsx("div",{className:"dropdown-item-desc",children:z.description})]},z.name))]}),b.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Known MCP Servers (",b.length,")"]}),b.map(z=>s.jsxs("button",{className:"dropdown-item",onClick:()=>se(z),children:[s.jsxs("div",{className:"dropdown-item-name",children:[z.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:z.tool_filter===null||z.tool_filter===void 0?"all tools":`${z.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:z.description})]},`known-${z.name}`))]}),R.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Project MCP Servers (",R.length,")"]}),R.map(z=>s.jsxs("button",{className:"dropdown-item",onClick:()=>se(z),children:[s.jsxs("div",{className:"dropdown-item-name",children:[z.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:z.tool_filter===null||z.tool_filter===void 0?"all tools":`${z.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:z.description||"Custom MCP server"})]},`project-${z.id||z.name}`))]}),S.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Custom Tools"}),S.map(z=>s.jsxs("button",{className:"dropdown-item",onClick:()=>V(z),children:[s.jsx("div",{className:"dropdown-item-name",children:z.name}),s.jsx("div",{className:"dropdown-item-desc",children:z.description})]},z.id))]}),L.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Agents as Tools"}),L.map(z=>s.jsxs("button",{className:"dropdown-item",onClick:()=>Q(z.id),children:[s.jsx("div",{className:"dropdown-item-name",children:z.name}),s.jsx("div",{className:"dropdown-item-desc",children:z.type})]},z.id))]}),I.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["SkillSets (",I.length,")"]}),I.map(z=>s.jsxs("button",{className:"dropdown-item",onClick:()=>h(z.id),children:[s.jsxs("div",{className:"dropdown-item-name",children:[z.name,s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[z.entry_count||0," entries"]})]}),s.jsx("div",{className:"dropdown-item-desc",children:z.description||"Vector knowledge base"})]},z.id))]}),y.trim()&&C.length===0&&b.length===0&&R.length===0&&S.length===0&&L.length===0&&I.length===0&&s.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',y,'"']})]})]})]}),x&&s.jsx("div",{className:"mcp-config-dialog",children:s.jsxs("div",{className:"mcp-config-content",children:[s.jsxs("h3",{children:["Configure ",x.server.name]}),s.jsx("p",{children:x.server.description}),x.isLoading?s.jsxs("div",{className:"mcp-loading",children:[s.jsx("div",{className:"spinner"}),s.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):x.error?s.jsxs("div",{className:"mcp-error",children:[s.jsxs("p",{children:["⚠️ Failed to discover tools: ",x.error]}),s.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mcp-select-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g({...x,enabledTools:new Set(x.availableTools.map(z=>z.name))}),children:["Select All (",x.availableTools.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>g({...x,enabledTools:new Set}),children:"Select None"})]}),s.jsx("div",{className:"mcp-tools-grid",children:x.availableTools.map(z=>s.jsxs("div",{className:"mcp-tool-row",title:z.description||z.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:x.enabledTools.has(z.name),onChange:()=>T(z.name)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:13,opacity:x.enabledTools.has(z.name)?1:.5,cursor:"pointer"},onClick:()=>T(z.name),children:z.name})]},z.name))})]}),s.jsxs("div",{className:"dialog-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>g(null),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:x.enabledTools.size===0,children:["Add ",x.enabledTools.size," Tools"]})]})]})})]})}function CS({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,m;const o=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!o,c=o||(()=>{if(!e.model)return n;const y=t.find(j=>{var E,v,x;return j.provider===((E=e.model)==null?void 0:E.provider)&&j.model_name===((v=e.model)==null?void 0:v.model_name)&&j.api_base===((x=e.model)==null?void 0:x.api_base)});return y==null?void 0:y.id})()||n||((m=t[0])==null?void 0:m.id);zt.useEffect(()=>{var y,j,E,v,x;if(o){const g=t.find(P=>P.id===o);g&&(((y=e.model)==null?void 0:y.provider)!==g.provider||((j=e.model)==null?void 0:j.model_name)!==g.model_name||((E=e.model)==null?void 0:E.api_base)!==g.api_base||((v=e.model)==null?void 0:v.temperature)!==g.temperature||((x=e.model)==null?void 0:x.max_output_tokens)!==g.max_output_tokens)&&i({provider:g.provider,model_name:g.model_name,api_base:g.api_base,temperature:g.temperature,max_output_tokens:g.max_output_tokens,top_p:g.top_p,top_k:g.top_k,fallbacks:[],_appModelId:o})}},[o,t,e.model,i]);function u(y){const j=t.find(E=>E.id===y);j&&i({provider:j.provider,model_name:j.model_name,api_base:j.api_base,temperature:j.temperature,max_output_tokens:j.max_output_tokens,top_p:j.top_p,top_k:j.top_k,fallbacks:[],_appModelId:y})}function d(){var y;if(a){const j=n||((y=t[0])==null?void 0:y.id);j&&u(j)}else{const j=e.model;if(j){const{_appModelId:E,...v}=j;i(v)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(y){const{_appModelId:j,...E}=e.model||{};i({...E,...y})}return t.find(y=>y.id===c),t.find(y=>y.id===n),s.jsxs("div",{className:"model-selector",children:[s.jsx("style",{children:`
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
      `}),t.length>0&&s.jsxs("div",{className:"model-choice",children:[s.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Use App Model"}),s.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),s.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Custom"}),s.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?s.jsx("div",{className:"app-model-select",children:t.map(y=>s.jsx("div",{className:`app-model-item ${c===y.id?"selected":""}`,onClick:()=>u(y.id),children:s.jsxs("div",{className:"app-model-item-info",children:[s.jsxs("div",{className:"app-model-item-name",children:[y.name,y.id===n&&s.jsxs("span",{className:"default-badge",children:[s.jsx(Jg,{size:10,fill:"currentColor"}),"Default"]})]}),s.jsxs("div",{className:"app-model-item-details",children:[y.provider," / ",y.model_name,y.api_base&&` • ${y.api_base}`]})]})},y.id))}):t.length===0?s.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&s.jsx("div",{className:"custom-model-form",children:s.jsx(Qg,{projectId:r,values:e.model||{},onChange:p})})]})}function NS({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],o=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],a=r?[...i,...o]:i;function l(u,d){const p=e[u]||[],f=n.find(m=>m.id===d);f&&t({[u]:[...p,{module_path:f.module_path}]})}function c(u,d){const p=e[u]||[];t({[u]:p.filter((f,m)=>m!==d)})}return s.jsx("div",{className:"callbacks-editor",children:a.map(({key:u,label:d})=>{const p=e[u]||[],f=n;return s.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:d}),f.length>0&&s.jsxs("select",{value:"",onChange:m=>{m.target.value&&(l(u,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[s.jsx("option",{value:"",children:"Add callback..."}),f.filter(m=>{const y=m.module_path;return!p.some(j=>j.module_path===y)}).map(m=>s.jsx("option",{value:m.id,children:m.name},m.id))]})]}),p.length===0?s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):s.jsx("div",{className:"callback-list",children:p.map((m,y)=>{const j=n.find(E=>E.module_path===m.module_path);return s.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[s.jsx("span",{style:{fontSize:"12px"},children:(j==null?void 0:j.name)||m.module_path}),s.jsx("button",{onClick:()=>c(u,y),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:s.jsx($e,{size:12})})]},y)})})]},u)})})}const el=[{type:"LlmAgent",label:"LLM Agent",icon:dr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:gb,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:fb,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:tc,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function ES(){return`agent_${Date.now().toString(36)}`}function zS(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function TS(e,t){const r={id:ES(),name:`New ${e}`,description:""},i=t?zS(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function PS({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:l}=ct(),[c,u]=k.useState(new Set),[d,p]=k.useState(!1),[f,m]=k.useState(""),[y,j]=k.useState(new Map),[E,v]=k.useState(380),[x,g]=k.useState(!1),P=k.useRef(null),[N,_]=k.useState(null),C=k.useRef(null),[b,R]=k.useState(null),[S,L]=k.useState(null),I=k.useRef(null),q=k.useRef(null),U=k.useCallback(K=>{K.preventDefault(),g(!0)},[]);if(k.useEffect(()=>{const K=ne=>{if(!x)return;const he=Math.min(Math.max(200,ne.clientX),600);v(he)},X=()=>{g(!1)};return x&&(document.addEventListener("mousemove",K),document.addEventListener("mouseup",X),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",K),document.removeEventListener("mouseup",X),document.body.style.cursor="",document.body.style.userSelect=""}},[x]),k.useEffect(()=>{if(t){const K=t.agents.filter(X=>"sub_agents"in X&&X.sub_agents.length>0).map(X=>X.id);u(new Set(K))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;function B(){if(!f.trim()||!t)return;const K=`generating_${Date.now()}`,X=f;j(ne=>new Map(ne).set(K,X)),p(!1),m(""),Pg(t.id,X).then(ne=>{var he,we,ze,be;if(ne.success&&ne.config){const D=ne.config,oe=[];if((he=D.tools)!=null&&he.builtin)for(const ee of D.tools.builtin)oe.push({type:"builtin",name:ee});if((we=D.tools)!=null&&we.mcp)for(const ee of D.tools.mcp){const me=l.find(ae=>ae.name===ee.server);me&&oe.push({type:"mcp",server:{...me,tool_filter:ee.tools}})}if((ze=D.tools)!=null&&ze.custom)for(const ee of D.tools.custom){const me=t.custom_tools.find(ae=>ae.name===ee);me&&oe.push({type:"function",name:ee,module_path:me.module_path})}if((be=D.tools)!=null&&be.agents)for(const ee of D.tools.agents){const me=t.agents.find(ae=>ae.id===ee);me&&oe.push({type:"agent",agent_id:ee,name:me.name})}const fe=t.app.models||[],ue=fe.find(ee=>ee.id===t.app.default_model_id)||fe[0],W={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:D.name||"new_agent",description:D.description||"",instruction:D.instruction||"",model:ue?{provider:ue.provider,model_name:ue.model_name,api_base:ue.api_base,temperature:ue.temperature,max_output_tokens:ue.max_output_tokens,top_p:ue.top_p,top_k:ue.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:oe,sub_agents:D.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(W),a(W.id),e==null||e(W.id)}else console.error("Failed to generate agent:",ne.error)}).catch(ne=>{console.error("Error generating agent:",ne)}).finally(()=>{j(ne=>{const he=new Map(ne);return he.delete(K),he})})}const se=t.agents.find(K=>K.id===o);function T(K){a(K),e==null||e(K)}function $(K){if(!t)return;const X=t.app.models||[],ne=X.find(we=>we.id===t.app.default_model_id)||X[0],he=TS(K,ne);n(he),T(he.id)}function M(K,X){X.stopPropagation(),confirm("Delete this agent?")&&(r(K),o===K&&(e==null||e(null)))}function w(K){const X=new Set(c);X.has(K)?X.delete(K):X.add(K),u(X)}function V(K){if(!I.current||!C.current)return;const X=I.current.getBoundingClientRect(),ne=K.clientY-X.top,he=60,we=8;if(ne<he){const ze=Math.max(1,we*(1-ne/he));I.current.scrollTop-=ze}else if(ne>X.height-he){const ze=Math.max(1,we*(1-(X.height-ne)/he));I.current.scrollTop+=ze}}function Q(K,X){K.dataTransfer.setData("text/plain",X),K.dataTransfer.effectAllowed="move",C.current=X,requestAnimationFrame(()=>_(X))}function h(){C.current=null,_(null),R(null),L(null),q.current&&(cancelAnimationFrame(q.current),q.current=null)}function F(K,X,ne){if(!t||(K.preventDefault(),K.stopPropagation(),!C.current))return;const we=t.agents.find(ze=>ze.id===X);!we||!("sub_agents"in we)||(K.dataTransfer.dropEffect="move",L({parentId:X,index:ne}),R(null))}function z(K,X,ne){if(!t)return;K.preventDefault(),K.stopPropagation();const he=K.dataTransfer.getData("text/plain");if(!he)return;const we=t.agents.find(be=>be.id===X);if(!we||!("sub_agents"in we))return;t.agents.forEach(be=>{"sub_agents"in be&&be.sub_agents.includes(he)&&i(be.id,{sub_agents:be.sub_agents.filter(D=>D!==he)})});const ze=[...we.sub_agents.filter(be=>be!==he)];ze.splice(ne,0,he),i(X,{sub_agents:ze}),u(be=>new Set([...be,X])),_(null),L(null)}function G(K,X,ne){if(!t)return;const he=C.current;if(K.preventDefault(),K.stopPropagation(),he===X)return;const we=t.agents.find(ze=>ze.id===he);we&&"sub_agents"in we&&J(we,X)||(K.dataTransfer.dropEffect="move",R({agentId:X,type:ne}),L(null))}function ge(K){const X=K.relatedTarget;(!X||!K.currentTarget.contains(X))&&R(null)}function xe(K,X,ne){if(!t)return;K.preventDefault(),K.stopPropagation();const he=K.dataTransfer.getData("text/plain");if(!he||he===X)return;const we=t.agents.find(be=>be.id===X),ze=t.agents.find(be=>be.id===he);if(!(!we||!ze)){if(ne==="sub_agent")"sub_agents"in we&&(t.agents.forEach(be=>{"sub_agents"in be&&be.sub_agents.includes(he)&&i(be.id,{sub_agents:be.sub_agents.filter(D=>D!==he)})}),we.sub_agents.includes(he)||(i(X,{sub_agents:[...we.sub_agents,he]}),u(be=>new Set([...be,X]))));else if(ne==="tool"&&"tools"in we){const be=we;be.tools.some(oe=>oe.type==="agent"&&oe.agent_id===he)||i(X,{tools:[...be.tools,{type:"agent",agent_id:he,name:ze.name}]})}_(null),R(null)}}function J(K,X){if(!t||!("sub_agents"in K))return!1;if(K.sub_agents.includes(X))return!0;for(const ne of K.sub_agents){const he=t.agents.find(we=>we.id===ne);if(he&&J(he,X))return!0}return!1}function A(K){const X=el.find(ne=>ne.type===K);return X?X.icon:dr}function H(K){const X=el.find(ne=>ne.type===K);return X?X.color:"#888"}function Z(K,X=0){return K.map(ne=>{const he=A(ne.type),we=H(ne.type),ze="sub_agents"in ne&&ne.sub_agents.length>0,be="sub_agents"in ne,D=ne.type==="LlmAgent",oe=c.has(ne.id),fe=N===ne.id,ue=(b==null?void 0:b.agentId)===ne.id&&(b==null?void 0:b.type)==="sub_agent",W=(b==null?void 0:b.agentId)===ne.id&&(b==null?void 0:b.type)==="tool",ee=ze&&t?ne.sub_agents.map(ae=>t.agents.find(_e=>_e.id===ae)).filter(ae=>ae!==void 0):[],me=N&&N!==ne.id&&(be||D);return s.jsxs("div",{className:"agent-tree-item",children:[s.jsxs("div",{className:`agent-item ${o===ne.id?"selected":""} ${fe?"dragging":""} ${me?"drop-target":""}`,onClick:()=>T(ne.id),style:{paddingLeft:12+X*20},draggable:!0,onDragStart:ae=>Q(ae,ne.id),onDragEnd:h,onDragOver:ae=>{me&&(ae.preventDefault(),ae.stopPropagation())},children:[s.jsx("div",{className:"drag-handle",children:s.jsx(ob,{size:12})}),ze?s.jsx("button",{className:"expand-btn",onClick:ae=>{ae.stopPropagation(),w(ne.id)},children:oe?s.jsx(Rt,{size:16}):s.jsx(Mt,{size:16})}):s.jsx("span",{style:{width:20}}),s.jsx("div",{className:"agent-icon",style:{background:we},children:s.jsx(he,{size:14})}),s.jsx("span",{className:"agent-name",children:ne.name}),s.jsx("button",{className:"delete-btn",onClick:ae=>M(ne.id,ae),children:s.jsx($e,{size:14})}),me&&s.jsxs("div",{className:"drop-overlay",children:[be&&s.jsxs("div",{className:`drop-zone-overlay ${ue?"active":""}`,onDragOver:ae=>G(ae,ne.id,"sub_agent"),onDragLeave:ge,onDrop:ae=>xe(ae,ne.id,"sub_agent"),children:[s.jsx(Kg,{size:12}),s.jsx("span",{children:"Sub-agent"})]}),D&&s.jsxs("div",{className:`drop-zone-overlay ${W?"active":""}`,onDragOver:ae=>G(ae,ne.id,"tool"),onDragLeave:ge,onDrop:ae=>xe(ae,ne.id,"tool"),children:[s.jsx(Xt,{size:12}),s.jsx("span",{children:"Tool"})]})]})]}),ze&&oe&&s.jsxs("div",{className:"sub-agents",children:[N&&N!==ne.id&&s.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===ne.id&&(S==null?void 0:S.index)===0?"active":""}`,style:{marginLeft:12+(X+1)*20},onDragOver:ae=>F(ae,ne.id,0),onDragLeave:()=>L(null),onDrop:ae=>z(ae,ne.id,0)}),ee.map((ae,_e)=>s.jsxs(zt.Fragment,{children:[Z([ae],X+1),N&&N!==ne.id&&N!==ae.id&&s.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===ne.id&&(S==null?void 0:S.index)===_e+1?"active":""}`,style:{marginLeft:12+(X+1)*20},onDragOver:tt=>F(tt,ne.id,_e+1),onDragLeave:()=>L(null),onDrop:tt=>z(tt,ne.id,_e+1)})]},ae.id))]})]},ne.id)})}const Y=new Set(t.agents.flatMap(K=>"sub_agents"in K?K.sub_agents:[])),ie=t.agents.filter(K=>!Y.has(K.id));return s.jsxs("div",{className:"agents-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"agents-sidebar",style:{width:E},children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Agents (",t.agents.length,")",y.size>0&&s.jsxs("span",{className:"generating-badge",children:[s.jsx(Mn,{size:12,className:"spin"})," ",y.size]})]}),s.jsxs("div",{className:"header-buttons",children:[el.map(({type:K,icon:X,color:ne})=>s.jsx("button",{className:"quick-add-btn",style:{background:ne},onClick:()=>$(K),title:`Add ${K}`,children:s.jsx(X,{size:14})},K)),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:s.jsx(Da,{size:14})})]})]}),s.jsx("div",{className:"agents-list",ref:I,onDragOver:V,children:t.agents.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(dr,{size:32}),s.jsx("p",{children:"No agents yet"})]}):Z(ie)})]}),s.jsx("div",{ref:P,className:`sidebar-resizer ${x?"resizing":""}`,onMouseDown:U}),s.jsx("div",{className:"agent-editor-area",children:se?s.jsx(_S,{agent:se}):s.jsxs("div",{className:"empty-state card",children:[s.jsx(dr,{size:48}),s.jsxs("p",{children:["Select an agent to edit",s.jsx("br",{}),"or create a new one"]})]})}),d&&s.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:s.jsxs("div",{className:"quick-setup-content",onClick:K=>K.stopPropagation(),children:[s.jsxs("h2",{children:[s.jsx(Da,{size:20})," Quick Agent Setup"]}),s.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),s.jsxs("div",{className:"quick-setup-form",children:[s.jsx("textarea",{value:f,onChange:K=>m(K.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:K=>{K.key==="Enter"&&(K.metaKey||K.ctrlKey)&&f.trim()&&B()}}),s.jsxs("div",{className:"quick-setup-info",children:[s.jsx("strong",{children:"Available resources:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),s.jsxs("li",{children:[l.length," MCP servers"]}),s.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),s.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),s.jsxs("div",{className:"quick-setup-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:B,disabled:!f.trim(),children:[s.jsx(Da,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var $u="\x1B[0m",Du="\x1B[1m",Ux=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",LS=e=>{let t=Ux(e),n=`${Du}[MONACOPILOT ERROR] ${t}${$u}`;return console.error(n),{message:t}},AS=(e,t)=>{console.warn(`${Du}[MONACOPILOT WARN] ${e}${t?`
${Ux(t)}`:""}${$u}`)},RS=(e,t,n)=>console.warn(`${Du}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${$u}`),Mo={report:LS,warn:AS,warnDeprecated:RS},$f=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},MS=100,IS=!0,Vx="onIdle",OS=!0,$S=120,DS=400,FS=0,Fu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),BS=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),US=e=>e.getValue(),VS=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Wx=class Hx{constructor(){this.cache=new VS(Hx.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=Fu(n,r),a=o,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=o-1&&u<=l+1:c===i?u>=o-1:c===a?u<=l+1:!0}};Wx.MAX_CACHE_SIZE=20;var WS=Wx,HS=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},qS=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),y=t.slice(-f);m===y&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},JS=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new qS}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,o),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,l=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},KS=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},GS=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:l=MS}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(j,E,v)=>{let x=j(e,t);return E?$f(x,E,v):x},p=(j,E)=>!j||!E?j:j.map(({content:v,...x})=>({...x,content:$f(v,E)})),f=d(Fu,u,{truncateDirection:"keepEnd"}),m=d(BS,u,{truncateDirection:"keepStart"}),y=p(a,u);return{filename:r,language:i,technologies:o,relatedFiles:y,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},QS=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:o,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},YS=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,vs=e=>({items:e,enableForwardStability:!0}),hc=new WS,XS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=Vx,enableCaching:l=IS,allowFollowUpCompletions:c=OS,onError:u,requestHandler:d}=o;if(l&&!i){let p=hc.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return vs(p)}if(r.isCancellationRequested||!c&&i)return vs([]);try{let p=QS(async y=>{var E,v;(E=o.onCompletionRequested)==null||E.call(o,y);let j;if(d)j=await d(y);else if(o.endpoint)j=await KS({endpoint:o.endpoint,...y});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(j.error)throw new Error(j.error);return(v=o.onCompletionRequestFinished)==null||v.call(o,y,j),j},{onTyping:$S,onIdle:DS,onDemand:FS}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=GS({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let y=new HS(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),j=new JS(e);return l&&hc.add({completion:y,range:j.computeCacheRange(n,y),textBeforeCursor:Fu(n,t)}),vs([{insertText:y,range:j.computeInsertionRange(n,y,t)}])}}catch(p){if(YS(p))return vs([]);u?u(p):Mo.warn("Cannot provide completion",p)}return vs([])},Bu=new WeakMap,la=e=>Bu.get(e),ZS=(e,t)=>{Bu.set(e,t)},Df=e=>{Bu.delete(e)},eC=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),tC=(e,t)=>{let n=la(e);!n||!n.options||(n.options={...n.options,...t})},nC=(e,t,n)=>{let r=la(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:US(t),position:o,triggerType:c.trigger??Vx})))return XS({monaco:e,mdl:i,pos:o,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,o,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,o.range))},freeInlineCompletions:()=>{}}):null},rC={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},sC=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(rC).some(t=>t(this.monaco,e))}},iC=(e,t,n,r)=>{let i=new sC(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},qx=(e,t,n)=>{let r=[];ZS(t,eC(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=la(t);if(!i)return Mo.warn("Completion is not registered properly. State not found."),aC();let o=nC(e,t,n);o&&r.push(o);let a=iC(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();hc.clear(),Df(t)},trigger:()=>oC(t),updateOptions:l=>{tC(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Mo.report(i),{deregister:()=>{for(let o of r)o.dispose();Df(t)},trigger:()=>{},updateOptions:()=>{}}}},oC=e=>{let t=la(e);if(!t){Mo.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},aC=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function lC(){return`tool_${Date.now().toString(36)}`}function cC(e){return/^[a-zA-Z0-9_]+$/.test(e)}const uC=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function dC({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=ct(),[d,p]=k.useState(""),[f,m]=k.useState(null),[y,j]=k.useState("tools"),[E,v]=k.useState(null),[x,g]=k.useState(""),[P,N]=k.useState(!1),[_,C]=k.useState(!1),[b,R]=k.useState(!1),[S,L]=k.useState(null),[I,q]=k.useState(null),[U,B]=k.useState({}),[se,T]=k.useState({}),[$,M]=k.useState("");if(!t)return null;const w=t.mcp_servers||[],V=t.custom_tools.find(D=>D.id===a),Q=w.find(D=>D.name===E);function h(D){l(D),e==null||e(D)}k.useEffect(()=>{V&&(p(V.code),q(null))},[a]),k.useEffect(()=>{Q&&(g(JSON.stringify(Q,null,2)),N(!1))},[E]),k.useEffect(()=>{if(!t)return;const D=F(t.mcp_servers||[]);M(JSON.stringify(D,null,2))},[t==null?void 0:t.mcp_servers]),k.useEffect(()=>{if(y==="mcp"&&w.length>0){const D=w.filter(oe=>!U[oe.name]||U[oe.name]==="unknown");D.length>0&&D.forEach(oe=>{xe(oe.name)})}},[y,w.length]);function F(D){const oe={};for(const fe of D){const ue={};fe.connection_type==="stdio"?(ue.command=fe.command||"",ue.args=fe.args||[],Object.keys(fe.env||{}).length>0&&(ue.env=fe.env)):fe.connection_type==="sse"&&(ue.url=fe.url||"",Object.keys(fe.headers||{}).length>0&&(ue.headers=fe.headers)),fe.timeout&&fe.timeout!==30&&(ue.timeout=fe.timeout),fe.tool_filter&&(ue.tool_filter=fe.tool_filter),fe.tool_name_prefix&&(ue.tool_name_prefix=fe.tool_name_prefix),oe[fe.name]=ue}return{mcpServers:oe}}function z(D){const oe=[];for(const[fe,ue]of Object.entries(D.mcpServers||{})){const W={name:fe,description:ue.description||"",connection_type:ue.url?"sse":"stdio",command:ue.command,args:ue.args||[],env:ue.env||{},url:ue.url,headers:ue.headers||{},timeout:ue.timeout||30,tool_filter:ue.tool_filter||null,tool_name_prefix:ue.tool_name_prefix};oe.push(W)}return oe}function G(D){D!==void 0&&M(D)}function ge(){try{const D=JSON.parse($),oe=z(D);n({mcp_servers:oe})}catch(D){alert("Invalid JSON: "+D.message)}}async function xe(D){const oe=w.find(fe=>fe.name===D);if(oe){B(fe=>({...fe,[D]:"testing"})),T(fe=>({...fe,[D]:""}));try{const fe=await ec({connection_type:oe.connection_type,command:oe.command,args:oe.args,env:oe.env,url:oe.url,headers:oe.headers,timeout:oe.timeout});B(ue=>({...ue,[D]:fe.success?"connected":"error"})),!fe.success&&fe.error&&T(ue=>({...ue,[D]:fe.error||"Unknown error"}))}catch(fe){B(ue=>({...ue,[D]:"error"})),T(ue=>({...ue,[D]:fe.message}))}}}function J(D){const oe=u.find(ue=>ue.name===D);if(!oe)return;if(w.some(ue=>ue.name===D)){alert(`Server "${D}" is already configured`);return}const fe={name:oe.name,description:oe.description||"",connection_type:oe.connection_type,command:oe.command,args:oe.args||[],env:oe.env||{},url:oe.url,headers:oe.headers||{},timeout:oe.timeout||30,tool_filter:oe.tool_filter||null,tool_name_prefix:oe.tool_name_prefix};n({mcp_servers:[...w,fe]})}async function A(){for(const D of w)await xe(D.name)}function H(){const D=lC();r({id:D,name:"new_tool",description:"",module_path:"tools.custom",code:uC,state_keys_used:[]}),h(D)}function Z(D,oe){oe.stopPropagation(),confirm("Delete this tool?")&&(o(D),a===D&&(e==null||e(null)))}function Y(D){V&&(D.name!==void 0&&(D.name===""||cC(D.name)?q(null):q("Name can only contain letters, numbers, and underscores")),i(V.id,D))}function ie(D){D!==void 0&&V&&(p(D),Y({code:D}))}async function K(){if(V){C(!0);try{const D=await Lg(t.id,V.name,V.description,V.state_keys_used);D.success&&D.code?(p(D.code),Y({code:D.code})):(console.error("Failed to generate tool code:",D.error),alert("Failed to generate tool code: "+(D.error||"Unknown error")))}catch(D){console.error("Error generating tool code:",D),alert("Error generating tool code: "+D.message)}finally{C(!1)}}}const X=k.useRef(null),ne=k.useCallback((D,oe)=>{if(X.current&&typeof X.current=="function")try{X.current()}catch{}try{const fe=qx(oe,D,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof fe=="function"?X.current=fe:X.current=null}catch{X.current=null}},[]);k.useEffect(()=>()=>{if(X.current&&typeof X.current=="function")try{X.current()}catch{}},[]);function he(D){D!==void 0&&(g(D),N(D!==JSON.stringify(Q,null,2)))}function we(){if(Q)try{const D=JSON.parse(x),oe=Q.name,fe=w.map(ue=>ue.name===oe?D:ue);n({mcp_servers:fe}),v(D.name),N(!1)}catch(D){alert("Invalid JSON: "+D.message)}}async function ze(){R(!0),L(null);try{const D=JSON.parse(x),oe=await ec({connection_type:D.connection_type,command:D.command,args:D.args,env:D.env,url:D.url,headers:D.headers,timeout:D.timeout||30});if(L(oe),oe.success&&oe.tools.length>0){const fe={...D,tool_filter:oe.tools.map(ue=>ue.name)};g(JSON.stringify(fe,null,2)),N(!0)}}catch(D){L({success:!1,tools:[],error:D.message})}finally{R(!1)}}const be={};return t.custom_tools.forEach(D=>{const oe=D.module_path||"tools";be[oe]||(be[oe]=[]),be[oe].push(D)}),s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"tools-sidebar",children:[s.jsxs("div",{className:"sidebar-tabs",children:[s.jsxs("button",{className:`sidebar-tab ${y==="tools"?"active":""}`,onClick:()=>{j("tools"),v(null)},children:[s.jsx(Xt,{size:14}),"Tools"]}),s.jsxs("button",{className:`sidebar-tab ${y==="mcp"?"active":""}`,onClick:()=>{j("mcp"),l(null),m(null),v(null)},children:[s.jsx(hs,{size:14}),"MCP"]})]}),y==="tools"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:H,children:[s.jsx(Je,{size:14}),"New"]})]}),s.jsxs("div",{className:"tools-tree",children:[c.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(ub,{size:14}),"Built-in Tools"]}),c.map(D=>s.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===D.name?"selected":""}`,onClick:()=>{m(D),h(null),v(null)},children:[s.jsx(nc,{size:14}),s.jsx("span",{className:"tool-name",children:D.name})]},D.name))]}),t.custom_tools.length===0&&c.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(dn,{size:32}),s.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(be).map(([D,oe])=>s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Bg,{size:14}),D]}),oe.map(fe=>s.jsxs("div",{className:`tool-item ${a===fe.id?"selected":""}`,onClick:()=>{h(fe.id),m(null),v(null)},children:[s.jsx(Xt,{size:14}),s.jsx("span",{className:"tool-name",children:fe.name}),s.jsx("button",{className:"delete-btn",onClick:ue=>Z(fe.id,ue),children:s.jsx($e,{size:14})})]},fe.id))]},D))]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["MCP Servers (",w.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:A,title:"Test all server connections",children:s.jsx(ln,{size:14})})]}),s.jsx("div",{className:"mcp-servers-list",children:w.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(hs,{size:32}),s.jsx("p",{children:"No MCP servers configured"}),s.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):w.map(D=>{const oe=U[D.name]||"unknown",fe=se[D.name];return s.jsxs("div",{className:"mcp-server-item-wrapper",children:[s.jsxs("div",{className:"mcp-server-item",children:[s.jsxs("div",{className:"mcp-server-info",children:[s.jsx(hs,{size:14}),s.jsx("span",{className:"mcp-server-name",children:D.name}),s.jsxs("span",{className:`mcp-status-badge ${oe}`,children:[oe==="testing"?s.jsx(Mn,{size:10,className:"spin"}):null,oe==="unknown"&&"●",oe==="connected"&&"●",oe==="error"&&"●"]})]}),s.jsxs("div",{className:"mcp-server-actions",children:[s.jsx("span",{className:"mcp-server-type",children:D.connection_type}),s.jsxs("button",{className:"btn btn-sm",onClick:()=>xe(D.name),disabled:oe==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[oe==="testing"?s.jsx(Mn,{size:12,className:"spin"}):s.jsx(ln,{size:12}),s.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),oe==="error"&&fe&&s.jsxs("div",{className:"mcp-server-error",children:[s.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",fe]})]},D.name)})})]})]}),s.jsx("div",{className:"tool-editor",children:f?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(nc,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),s.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),s.jsxs("div",{className:"builtin-tool-info",children:[s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:f.description||"No description available."})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Usage"}),s.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),s.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Note"}),s.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):V?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Xt,{size:20,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:V.name,onChange:D=>Y({name:D.target.value}),placeholder:"Tool name",style:{borderColor:I?"var(--error)":void 0}}),I&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:I})]})]}),s.jsxs("div",{className:"editor-meta",children:[s.jsxs("div",{className:"meta-field grow",children:[s.jsx("label",{children:"Description"}),s.jsx("input",{type:"text",value:V.description,onChange:D=>Y({description:D.target.value}),placeholder:"What does this tool do?"})]}),s.jsxs("div",{className:"meta-field",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:V.module_path,onChange:D=>Y({module_path:D.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:K,disabled:_||!V.name||!V.description,title:!V.name||!V.description?"Add a name and description first":"Generate code using AI",children:_?s.jsxs(s.Fragment,{children:[s.jsx(Mn,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(bu,{size:14}),"Write Tool"]})}),s.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),s.jsx("div",{className:"code-editor",children:s.jsx(Ft,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:ie,onMount:ne,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),s.jsxs("div",{className:"state-keys-panel",children:[s.jsxs("h4",{children:[s.jsx(yu,{size:14})," State Keys Used"]}),s.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(D=>{const oe=V.state_keys_used.includes(D.name);return s.jsxs("label",{className:`state-key-chip ${oe?"selected":""}`,title:D.description,children:[s.jsx("input",{type:"checkbox",checked:oe,onChange:fe=>{const ue=fe.target.checked?[...V.state_keys_used,D.name]:V.state_keys_used.filter(W=>W!==D.name);Y({state_keys_used:ue})}}),D.name,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",D.type,")"]})]},D.name)})})]})]}):Q?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(hs,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:Q.name}),s.jsx("span",{className:"badge badge-info",children:Q.connection_type}),P&&s.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:ze,disabled:b,title:"Test connection and discover available tools",children:[b?s.jsx(Mn,{size:14,className:"spin"}):s.jsx(xu,{size:14}),b?"Testing...":"Test Connection"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:we,disabled:!P,children:[s.jsx(Po,{size:14}),"Save"]})]}),S&&s.jsx("div",{className:`mcp-test-result ${S.success?"success":"error"}`,children:S.success?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",S.tools.length," tools"]}),S.tools.length>0&&s.jsxs("div",{className:"test-result-tools",children:[s.jsx("strong",{children:"Available tools:"}),s.jsx("ul",{children:S.tools.map(D=>s.jsxs("li",{children:[s.jsx("code",{children:D.name}),D.description&&s.jsxs("span",{children:[" — ",D.description]})]},D.name))}),s.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),s.jsx("div",{className:"test-result-error",children:S.error})]})}),s.jsx("div",{className:"mcp-info",children:s.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),s.jsx("div",{className:"code-editor",children:s.jsx(Ft,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:he,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),s.jsxs("div",{className:"mcp-help",children:[s.jsx("h4",{children:"Schema Reference"}),s.jsxs("div",{className:"schema-fields",children:[s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"name"}),s.jsx("span",{children:"Unique identifier for this server"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"description"}),s.jsx("span",{children:"Human-readable description"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"connection_type"}),s.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"command"}),s.jsx("span",{children:"Command to run (for stdio)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"args"}),s.jsx("span",{children:"Array of command arguments"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"env"}),s.jsx("span",{children:"Environment variables object"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"url"}),s.jsx("span",{children:"Server URL (for sse/http)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"tool_filter"}),s.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):y==="mcp"?s.jsxs("div",{className:"mcp-json-editor",children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(hs,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),s.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),s.jsxs("select",{value:"",onChange:D=>{D.target.value&&J(D.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[s.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(D=>!w.some(oe=>oe.name===D.name)).map(D=>s.jsxs("option",{value:D.name,children:[D.name," - ",D.description||"No description"]},D.name))]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ge,children:[s.jsx(Po,{size:14}),"Apply Changes"]})]}),s.jsx("div",{className:"mcp-json-info",children:s.jsxs("p",{children:["Configure your MCP servers using the standard ",s.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),s.jsx("div",{className:"editor-content",style:{flex:1},children:s.jsx(Ft,{height:"100%",defaultLanguage:"json",value:$,onChange:G,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):s.jsxs("div",{className:"empty-state",children:[s.jsx(dn,{size:48}),s.jsxs("p",{children:["Select a tool to view",s.jsx("br",{}),"or create a new custom tool"]})]})})]})}function pC(){return`callback_${Date.now().toString(36)}`}function Ff(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Jx(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return Jx("before_agent")}}function fC({onSelectCallback:e}){var b,R;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=ct(),[a,l]=k.useState(""),[c,u]=k.useState(null),[d,p]=k.useState(null),[f,m]=k.useState(!1),y=k.useRef(null);if(!t)return null;const j=t.custom_callbacks||[],E=j.find(S=>S.id===c);function v(S){u(S),e==null||e(S)}k.useEffect(()=>{E?(l(E.code),p(null)):l("")},[c,E]);function x(){const S=pC(),L={id:S,name:"new_callback",description:"",module_path:"callbacks.custom",code:Jx("before_agent"),state_keys_used:[]};r(L),v(S)}function g(S,L){L.stopPropagation(),confirm("Delete this callback?")&&(o(S),c===S&&(e==null||e(null),u(null),l("")))}function P(){if(!c)return;const S=j.find(q=>q.id===c);if(!S)return;const L=S.name.trim();if(!L){alert("Please enter a name");return}if(!Ff(L)){p("Name must contain only alphanumeric characters and underscores");return}if(j.find(q=>q.name===L&&q.id!==S.id)){p("A callback with this name already exists");return}i(S.id,{code:a,name:L,description:S.description,module_path:S.module_path,state_keys_used:S.state_keys_used}),p(null)}function N(S,L){y.current=L;try{qx(L,{endpoint:"/api/code-completion",language:"python"})}catch(I){console.warn("Failed to register Monacopilot completion:",I)}}async function _(){if(E){m(!0);try{let S="before_agent";const L=E.name.toLowerCase(),I=E.description.toLowerCase();L.includes("after_agent")||I.includes("after agent")?S="after_agent":L.includes("before_model")||I.includes("before model")?S="before_model":L.includes("after_model")||I.includes("after model")?S="after_model":L.includes("before_tool")||I.includes("before tool")?S="before_tool":L.includes("after_tool")||I.includes("after tool")?S="after_tool":(L.includes("before_agent")||I.includes("before agent"))&&(S="before_agent");const q=await Ag(t.id,E.name,E.description,S,E.state_keys_used);q.success&&q.code?(l(q.code),i(E.id,{code:q.code})):(console.error("Failed to generate callback code:",q.error),alert("Failed to generate callback code: "+(q.error||"Unknown error")))}catch(S){console.error("Error generating callback code:",S),alert("Error generating callback code: "+S.message)}finally{m(!1)}}}const C=((R=(b=t.app)==null?void 0:b.state_keys)==null?void 0:R.map(S=>S.name))||[];return s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tools-sidebar",children:[s.jsxs("div",{className:"tools-sidebar-header",children:[s.jsx("h3",{children:"Callbacks"}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:s.jsx(Je,{size:16})})]}),s.jsx("div",{className:"tools-list",children:j.length===0?s.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):j.map(S=>s.jsxs("div",{className:`tool-item ${c===S.id?"selected":""}`,onClick:()=>v(S.id),children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{className:"tool-item-name",children:S.name}),S.description&&s.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:S.description})]}),s.jsx("div",{className:"tool-item-actions",children:s.jsx("button",{className:"btn btn-icon btn-sm",onClick:L=>g(S.id,L),title:"Delete",children:s.jsx($e,{size:14})})})]},S.id))})]}),s.jsx("div",{className:"tools-editor",children:E?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tools-editor-header",children:[s.jsx("h3",{children:"Edit Callback"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:P,children:[s.jsx(Po,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),s.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:E.name,onChange:S=>{const L=S.target.value;i(E.id,{name:L}),d&&Ff(L)&&p(null)},className:d?"error":""}),d&&s.jsx("div",{className:"error-message",children:d})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:E.description,onChange:S=>i(E.id,{description:S.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:E.module_path,onChange:S=>i(E.id,{module_path:S.target.value}),placeholder:"callbacks.custom"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"State Keys Used"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:C.map(S=>{const L=E.state_keys_used.includes(S);return s.jsxs("button",{type:"button",className:`btn btn-sm ${L?"btn-primary":"btn-secondary"}`,onClick:()=>{const I=L?E.state_keys_used.filter(q=>q!==S):[...E.state_keys_used,S];i(E.id,{state_keys_used:I})},children:[s.jsx(yu,{size:12,style:{marginRight:"4px"}}),S]},S)})}),C.length===0&&s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{children:"Code"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:_,disabled:f||!E.name,title:E.name?"Generate code using AI":"Add a name first",children:f?s.jsxs(s.Fragment,{children:[s.jsx(Mn,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(bu,{size:14}),"Generate"]})})]}),s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),s.jsx("div",{className:"code-editor-container",children:s.jsx(Ft,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:S=>l(S||""),onMount:N,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):s.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function mC(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],o=n.split(".");if(o.length>2){const a=o.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Pe={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function hC({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[o,a]=k.useState(""),[l,c]=k.useState("exact"),[u,d]=k.useState(!1),[p,f]=k.useState(""),[m,y]=k.useState(!1),[j,E]=k.useState(t),v=mC(e.url);k.useEffect(()=>{v.length>0&&!o&&a(v[0].pattern)},[v,o]),k.useEffect(()=>{const C=setInterval(()=>{E(b=>b<=1?(r(),0):b-1)},1e3);return()=>clearInterval(C)},[r]);const x=k.useCallback(()=>{n()},[n]),g=k.useCallback(()=>{n(m?p:o,l,u)},[n,m,p,o,l,u]),P=j/t*100,N=e.source.startsWith("mcp:"),_=N?e.source.substring(4):"agent";return s.jsx("div",{style:Pe.overlay,children:s.jsxs("div",{style:Pe.dialog,children:[s.jsxs("div",{style:Pe.header,children:[s.jsx(Z0,{size:18,style:Pe.headerIcon}),s.jsx("span",{style:Pe.headerTitle,children:"Network Request Approval"}),s.jsx("button",{style:Pe.closeButton,onClick:i,children:s.jsx(wu,{size:16})})]}),s.jsxs("div",{style:Pe.content,children:[s.jsx("div",{style:Pe.sourceText,children:N?s.jsxs(s.Fragment,{children:['MCP server "',s.jsx("span",{style:{color:"#22d3ee"},children:_}),'" wants to connect to:']}):s.jsx(s.Fragment,{children:"Agent wants to connect to:"})}),s.jsxs("div",{style:Pe.requestBox,children:[s.jsxs("div",{children:[s.jsx("span",{style:Pe.methodBadge(e.method),children:e.method}),s.jsx("span",{style:Pe.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&s.jsxs("div",{style:Pe.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),s.jsxs("div",{children:[s.jsx("div",{style:Pe.label,children:"Allow pattern:"}),m?s.jsxs("div",{children:[s.jsx("input",{type:"text",value:p,onChange:C=>f(C.target.value),placeholder:"e.g., *.example.com/*",style:Pe.customInput}),s.jsxs("div",{style:Pe.radioGroup,children:[s.jsxs("label",{style:Pe.radioLabel,children:[s.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),s.jsxs("label",{style:Pe.radioLabel,children:[s.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),s.jsx("button",{onClick:()=>y(!1),style:Pe.backLink,children:"← Back to suggestions"})]})]}):s.jsxs("select",{value:o,onChange:C=>{C.target.value==="__custom__"?(y(!0),f(o)):a(C.target.value)},style:Pe.select,children:[v.map(C=>s.jsx("option",{value:C.pattern,children:C.label},C.pattern)),s.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),s.jsxs("label",{style:Pe.checkboxLabel,children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:u,onChange:C=>d(C.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),s.jsxs("div",{style:Pe.footer,children:[s.jsxs("button",{onClick:r,style:Pe.button("deny"),children:[s.jsx(tb,{size:14}),"Deny"]}),s.jsxs("button",{onClick:x,style:Pe.button("once"),children:[s.jsx(hu,{size:14}),"Allow Once"]}),s.jsxs("button",{onClick:g,style:Pe.button("pattern"),children:[s.jsx(qg,{size:14}),"Allow Pattern"]}),s.jsxs("div",{style:Pe.timerContainer,children:[s.jsx(ri,{size:14}),s.jsxs("span",{children:[j,"s"]})]})]}),s.jsx("div",{style:Pe.progressBar,children:s.jsx("div",{style:Pe.progressFill(P)})})]})})}const Bf={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},gC={agent_start:tc,agent_end:tc,tool_call:Xt,tool_result:Xt,model_call:gu,model_response:To,state_change:vn,transfer:Gg,callback_start:dn,callback_end:dn};function xC(e){var t,n,r,i,o,a,l,c,u,d,p,f,m,y,j,E,v,x,g,P,N;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const C=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([M,w])=>{const V=w!=null?JSON.stringify(w):"null";return`${M}=${V.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${C.slice(0,60)}${C.length>60?"...":""})`;case"tool_result":const b=(i=e.data)==null?void 0:i.result;let R="";if((a=(o=b==null?void 0:b.content)==null?void 0:o[0])!=null&&a.text)R=String(b.content[0].text).slice(0,60);else if(typeof b=="string")R=b.slice(0,60);else if(b!=null){const M=JSON.stringify(b);R=M?M.slice(0,60):""}else R="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${R}${R.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const S=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],L=S.find(M=>(M==null?void 0:M.type)==="function_call");if(L)return`LLM_RSP → ${L.name||"unknown"}()`;const I=S.find(M=>(M==null?void 0:M.type)==="text");if(I!=null&&I.text){const M=String(I.text);return`LLM_RSP "${M.slice(0,50)}${M.length>50?"...":""}"`}return`LLM_RSP (${((y=e.data)==null?void 0:y.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((j=e.data)==null?void 0:j.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((E=e.data)==null?void 0:E.target)||"unknown"}`;case"callback_start":const U=((v=e.data)==null?void 0:v.callback_name)||"unknown",B=((x=e.data)==null?void 0:x.callback_type)||"";return`CALLBACK START ${B?`[${B}]`:""} ${U}`;case"callback_end":const se=((g=e.data)==null?void 0:g.callback_name)||"unknown",T=((P=e.data)==null?void 0:P.callback_type)||"",$=(N=e.data)!=null&&N.error?" [ERROR]":"";return`CALLBACK END ${T?`[${T}]`:""} ${se}${$}`;default:return e.event_type.toUpperCase()}}function yC(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function vC({event:e}){var o,a,l,c,u,d,p,f,m,y,j,E,v,x,g,P;const[t,n]=k.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=N=>{const _=new Set(t);_.has(N)?_.delete(N):_.add(N),n(_)},i=(N,_=0,C=!1)=>{const b="  ".repeat(_),R="  ".repeat(_+1);if(N===null)return s.jsx("span",{className:"json-null",children:"null"});if(N===void 0)return s.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof N=="boolean")return s.jsx("span",{className:"json-boolean",children:N.toString()});if(typeof N=="number")return s.jsx("span",{className:"json-number",children:N});if(typeof N=="string"){const S=N.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return S.length>300&&_>0?s.jsxs("span",{className:"json-string",children:['"',S.slice(0,300),'..." ',s.jsxs("span",{className:"json-truncated",children:["(",N.length," chars)"]})]}):s.jsxs("span",{className:"json-string",children:['"',S,'"']})}if(Array.isArray(N))return N.length===0?s.jsx("span",{className:"json-bracket",children:"[]"}):N.every(L=>L===null||typeof L!="object")&&N.length<=3?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"["}),N.map((L,I)=>s.jsxs("span",{children:[i(L,_+1,!0),I<N.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},I)),s.jsx("span",{className:"json-bracket",children:"]"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"["}),N.map((L,I)=>s.jsxs("span",{children:[`
`+R,i(L,_+1),I<N.length-1&&s.jsx("span",{className:"json-comma",children:","})]},I)),`
`+b,s.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof N=="object"){const S=Object.entries(N);return S.length===0?s.jsx("span",{className:"json-bracket",children:"{}"}):S.length<=2&&S.every(([,I])=>I===null||typeof I!="object")&&C?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"{"}),S.map(([I,q],U)=>s.jsxs("span",{children:[s.jsxs("span",{className:"json-key",children:['"',I,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(q,_+1,!0),U<S.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},I)),s.jsx("span",{className:"json-bracket",children:"}"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"{"}),S.map(([I,q],U)=>s.jsxs("span",{children:[`
`+R,s.jsxs("span",{className:"json-key",children:['"',I,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(q,_+1),U<S.length-1&&s.jsx("span",{className:"json-comma",children:","})]},I)),`
`+b,s.jsx("span",{className:"json-bracket",children:"}"})]})}return String(N)};return s.jsxs("div",{className:"event-detail",children:[s.jsxs("div",{className:"detail-header",children:[s.jsx("span",{className:"detail-type",children:e.event_type}),s.jsx("span",{className:"detail-agent",children:e.agent_name}),s.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsx("span",{children:"Event Data"})]}),t.has("data")&&s.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsx("span",{children:"Instruction"}),s.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&s.jsx("div",{className:"section-content",children:e.data.contents.map((N,_)=>{var C;return s.jsxs("div",{className:"message-item",children:[s.jsx("span",{className:`message-role ${N.role}`,children:N.role}),s.jsx("div",{className:"message-parts",children:(C=N.parts)==null?void 0:C.map((b,R)=>s.jsxs("div",{className:"message-part",children:[b.text&&s.jsx("pre",{children:b.text}),b.function_call&&s.jsxs("div",{className:"function-call",children:[s.jsx("strong",{children:b.function_call.name}),s.jsx("pre",{children:JSON.stringify(b.function_call.args,null,2)})]}),b.function_response&&s.jsxs("div",{className:"function-response",children:[s.jsx("strong",{children:b.function_response.name}),s.jsx("pre",{children:JSON.stringify(b.function_response.response,null,2)})]})]},R))})]},_)})})]}),e.event_type==="tool_result"&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsx("span",{children:"Tool Result"})]}),t.has("result")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"result-content",children:((d=(u=(c=(l=e.data)==null?void 0:l.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&s.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&s.jsx("div",{className:"section-content",children:e.data.parts.map((N,_)=>s.jsxs("div",{className:"response-part",children:[N.type==="text"&&N.text&&s.jsx("pre",{className:"response-text",children:N.text}),N.type==="function_call"&&s.jsxs("div",{className:"function-call",children:[s.jsxs("strong",{children:["→ ",N.name,"()"]}),N.args&&Object.keys(N.args).length>0&&s.jsx("pre",{children:JSON.stringify(N.args,null,2)})]}),N.thought&&s.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},_))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&s.jsxs("div",{className:"section-content",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Name:"})," ",((y=e.data)==null?void 0:y.callback_name)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Type:"})," ",((j=e.data)==null?void 0:j.callback_type)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Module Path:"})," ",((E=e.data)==null?void 0:E.module_path)||"unknown"]}),((v=e.data)==null?void 0:v.error)&&s.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Error:"})," ",e.data.error]}),((x=e.data)==null?void 0:x.error_type)&&s.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[s.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((g=e.data)==null?void 0:g.stack_trace)&&s.jsxs("div",{style:{marginTop:"8px"},children:[s.jsx("strong",{children:"Stack Trace:"}),s.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((P=e.data)==null?void 0:P.state_delta)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?s.jsx(Rt,{size:12}):s.jsx(Mt,{size:12}),s.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&s.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([N,_])=>s.jsxs("div",{className:"state-delta-item",children:[s.jsx("div",{className:"state-delta-key",children:N}),s.jsx("pre",{className:"state-delta-value",children:typeof _=="string"?_:JSON.stringify(_,null,2)})]},N))})]})]})}function bC({content:e,title:t,onClose:n}){return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:t}),s.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),s.jsx("div",{className:"modal-body markdown-content",children:s.jsx(Bx,{children:e})})]}),s.jsx("style",{children:`
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
      `})]})}function kC({events:e,selectedEventIndex:t,project:n}){const[r,i]=k.useState(null),o=k.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var y;l[f]={...l[f],value:m,timestamp:d.timestamp,defined:((y=l[f])==null?void 0:y.defined)??!1}})}),l},[e,t,n]),a=Object.entries(o);return s.jsxs(s.Fragment,{children:[r&&s.jsx(bC,{content:r.content,title:r.title,onClose:()=>i(null)}),s.jsxs("div",{className:"state-snapshot",children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?s.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>s.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[s.jsxs("div",{className:"state-key",children:[l,f&&s.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),s.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&s.jsx("div",{className:"state-desc",children:p}),u&&s.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function tl(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Uf(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(o=o[l[1]]),o=o[parseInt(l[2])]):o=o[a]}return o==null?"[No match]":typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function wC({project:e,selectedEventIndex:t,sandboxMode:n}){var ge,xe;const{watches:r,updateWatch:i,addWatch:o,removeWatch:a,runEvents:l}=ct(),[c,u]=k.useState(!1),[d,p]=k.useState(null),[f,m]=k.useState({}),[y,j]=k.useState(new Set),[E,v]=k.useState(""),[x,g]=k.useState(""),[P,N]=k.useState({}),[_,C]=k.useState(""),[b,R]=k.useState([]),[S,L]=k.useState(null),[I,q]=k.useState(null),[U,B]=k.useState(!1);k.useEffect(()=>{mu().then(R).catch(console.error)},[]);const se=k.useMemo(()=>{const J=e.mcp_servers||[],A=new Set(J.map(Z=>Z.name)),H=b.filter(Z=>!A.has(Z.name));return[...J,...H]},[e.mcp_servers,b]),T=k.useCallback(async J=>{if(!(f[J]||y.has(J))){j(A=>new Set([...A,J]));try{const A=await Se(`/projects/${e.id}/mcp-servers/${encodeURIComponent(J)}/test-connection`,{method:"POST"});A.success&&m(H=>({...H,[J]:A.tools}))}catch(A){console.error("Failed to load tools:",A)}finally{j(A=>{const H=new Set(A);return H.delete(J),H})}}},[e.id,f,y]);k.useEffect(()=>{var Z;if(d)return;if(!E||!x){N({});return}const A=(f[E]||[]).find(Y=>Y.name===x);if(!((Z=A==null?void 0:A.parameters)!=null&&Z.properties)){N({});return}const H={};Object.entries(A.parameters.properties).forEach(([Y,ie])=>{ie.type==="string"?H[Y]=ie.default||"":ie.type==="number"||ie.type==="integer"?H[Y]=ie.default||0:ie.type==="boolean"?H[Y]=ie.default||!1:H[Y]=ie.default||null}),N(H)},[E,x,f,d]);const $=()=>{p(null),v(""),g(""),N({}),C(""),L(null),q(null),u(!0)},M=J=>{if(p(J.id),v(J.serverName),g(J.toolName),N({...J.args}),C(J.transform||""),J.result){const{text:A}=tl(J.result);L(A),q(null)}else L(null),q(null);f[J.serverName]||T(J.serverName),u(!0)},w=async()=>{if(!(!E||!x)){B(!0),q(null);try{const J=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:E,tool_name:x,arguments:P})}),{text:A,isError:H}=tl(J);H?(q(A),L(null)):(L(A),q(null))}catch(J){q(String(J)),L(null)}finally{B(!1)}}},V=k.useMemo(()=>S?!_||!_.trim()?S:Uf(S,_):null,[S,_]),Q=()=>{if(!(!E||!x)){if(d){i(d,{serverName:E,toolName:x,args:{...P},transform:_||void 0});const J=r.find(A=>A.id===d);J&&F({...J,serverName:E,toolName:x,args:P,transform:_||void 0,history:J.history||[]})}else{const J={id:`watch-${Date.now()}`,serverName:E,toolName:x,args:{...P},transform:_||void 0,history:[]};o(J),F(J)}u(!1)}},h=J=>{a(J)},F=k.useCallback(async(J,A)=>{var ie;i(J.id,{isLoading:!0,error:void 0});const H=A??l.length-1,Z=Date.now(),Y=((ie=e.app)==null?void 0:ie.id)||`app_${e.id}`;try{const K=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:J.serverName,tool_name:J.toolName,arguments:J.args,sandbox_mode:n,app_id:n?Y:void 0})}),X={eventIndex:H,timestamp:Z,result:K},ne=[...J.history||[],X];i(J.id,{result:K,isLoading:!1,lastRun:Z,history:ne})}catch(K){const X={eventIndex:H,timestamp:Z,error:String(K)},ne=[...J.history||[],X];i(J.id,{error:String(K),isLoading:!1,lastRun:Z,history:ne})}},[e.id,(ge=e.app)==null?void 0:ge.id,i,l.length,n]),z=()=>{r.forEach(J=>F(J))},G=k.useMemo(()=>!E||!x?null:(f[E]||[]).find(A=>A.name===x),[E,x,f]);return s.jsxs("div",{className:"tool-watch-panel",children:[s.jsxs("div",{className:"watch-header",children:[s.jsx(si,{size:14}),s.jsx("span",{children:"Tool Watch"}),s.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),s.jsxs("div",{className:"watch-actions",children:[s.jsx("button",{className:"watch-btn",onClick:z,title:"Refresh all",children:s.jsx(ln,{size:12})}),s.jsx("button",{className:"watch-btn",onClick:$,title:"Add watch",children:s.jsx(Je,{size:12})})]})]}),r.length===0?s.jsxs("div",{className:"watch-empty",children:[s.jsx(si,{size:20,style:{opacity:.3}}),s.jsx("span",{children:"No watch expressions"}),s.jsxs("button",{className:"add-watch-btn",onClick:$,children:[s.jsx(Je,{size:12})," Add Tool Watch"]})]}):s.jsx("div",{className:"watch-list",children:r.map(J=>{let A=J.result,H=J.error;if(t!==null&&J.history&&J.history.length>0){const X=J.history.filter(ne=>ne.eventIndex<=t);if(X.length>0){const ne=X[X.length-1];A=ne.result,H=ne.error}else A=void 0,H=void 0}const{text:Z,isError:Y}=A?tl(A):{text:"",isError:!1},ie=A?Uf(Z,J.transform):"",K=H||Y;return s.jsxs("div",{className:`watch-item ${K?"error":""}`,children:[s.jsxs("div",{className:"watch-item-header",children:[s.jsxs("span",{className:"watch-expr",children:[s.jsx("span",{className:"watch-server",children:J.serverName}),s.jsx("span",{className:"watch-tool",children:J.toolName}),Object.keys(J.args).length>0&&s.jsxs("span",{className:"watch-args",children:["(",Object.entries(J.args).map(([X,ne])=>`${X}=${JSON.stringify(ne)}`).join(", "),")"]}),t!==null&&s.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),s.jsxs("div",{className:"watch-item-actions",children:[s.jsx("button",{onClick:()=>M(J),title:"Edit watch",children:s.jsx(Xt,{size:10})}),s.jsx("button",{onClick:()=>F(J),title:"Refresh",children:J.isLoading?s.jsx(ln,{size:10,className:"spin"}):s.jsx(ln,{size:10})}),s.jsx("button",{onClick:()=>h(J.id),title:"Remove",children:s.jsx($e,{size:10})})]})]}),s.jsx("div",{className:"watch-result",children:J.isLoading?s.jsx("span",{className:"loading",children:"Loading..."}):H?s.jsx("span",{className:"error",children:H}):A?s.jsx("pre",{className:Y?"error-text":"",children:ie}):s.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},J.id)})}),c&&s.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:s.jsxs("div",{className:"watch-dialog",onClick:J=>J.stopPropagation(),children:[s.jsxs("div",{className:"dialog-header",children:[s.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),s.jsx("button",{onClick:()=>u(!1),children:s.jsx(wu,{size:14})})]}),s.jsxs("div",{className:"dialog-body",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"MCP Server"}),s.jsxs("select",{value:E,onChange:J=>{v(J.target.value),d||g(""),J.target.value&&T(J.target.value)},children:[s.jsx("option",{value:"",children:"Select server..."}),se.map(J=>s.jsx("option",{value:J.name,children:J.name},J.name))]})]}),s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"Tool"}),s.jsxs("select",{value:x,onChange:J=>g(J.target.value),disabled:!E||y.has(E),children:[s.jsx("option",{value:"",children:y.has(E)?"Loading tools...":"Select tool..."}),(f[E]||[]).map(J=>s.jsx("option",{value:J.name,children:J.name},J.name))]})]}),(G==null?void 0:G.description)&&s.jsx("div",{className:"tool-desc",children:G.description}),((xe=G==null?void 0:G.parameters)==null?void 0:xe.properties)&&Object.keys(G.parameters.properties).length>0&&s.jsxs("div",{className:"tool-args",children:[s.jsx("label",{children:"Arguments"}),Object.entries(G.parameters.properties).map(([J,A])=>{var H,Z;return s.jsxs("div",{className:"arg-row",children:[s.jsxs("span",{className:"arg-name",children:[J,((H=G.parameters.required)==null?void 0:H.includes(J))&&s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:A.type==="number"||A.type==="integer"?"number":"text",value:typeof P[J]=="object"?JSON.stringify(P[J]):P[J]??"",onChange:Y=>N(ie=>({...ie,[J]:Y.target.value})),placeholder:((Z=A.description)==null?void 0:Z.slice(0,40))||J})]},J)})]}),E&&x&&s.jsxs("div",{className:"test-section",children:[s.jsxs("div",{className:"test-header",children:[s.jsx("label",{children:"Test & Preview"}),s.jsxs("button",{className:"test-btn",onClick:w,disabled:U,children:[U?s.jsx(ln,{size:12,className:"spin"}):s.jsx(Jn,{size:12}),U?"Running...":"Test Run"]})]}),I&&s.jsxs("div",{className:"test-result error",children:[s.jsx("span",{className:"test-label",children:"Error:"}),s.jsx("pre",{children:I})]}),S&&s.jsxs("div",{className:"test-result",children:[s.jsx("span",{className:"test-label",children:"Raw Result:"}),s.jsx("pre",{children:S})]})]}),s.jsxs("div",{className:"form-row transform-row",children:[s.jsx("label",{children:"Transform (optional)"}),s.jsx("input",{type:"text",value:_,onChange:J=>C(J.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),s.jsxs("div",{className:"transform-hints",children:[s.jsx("span",{className:"hint-title",children:"Path:"}),s.jsx("code",{onClick:()=>C(".items[0].name"),children:".items[0].name"}),s.jsx("code",{onClick:()=>C(".content[0].text"),children:".content[0].text"}),s.jsx("code",{onClick:()=>C(".result.data"),children:".result.data"}),s.jsx("span",{className:"hint-title",children:"JS:"}),s.jsx("code",{onClick:()=>C("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),s.jsx("code",{onClick:()=>C("js:data.items?.length"),children:"js:data.items?.length"})]})]}),S&&_&&s.jsxs("div",{className:"transform-preview",children:[s.jsx("span",{className:"test-label",children:"Transform Preview:"}),s.jsx("pre",{className:V!=null&&V.startsWith("[Transform error")?"error":"",children:V})]})]}),s.jsxs("div",{className:"dialog-footer",children:[s.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),s.jsx("button",{className:"add-btn",onClick:Q,disabled:!E||!x,children:d?"Save Changes":"Add Watch"})]})]})})]})}function jC(){var Hu,qu;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:o,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:m}=ct(),[y,j]=k.useState(""),[E,v]=k.useState(null),[x,g]=k.useState(null),[P,N]=k.useState(null),[_,C]=k.useState(""),[b,R]=k.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[S,L]=k.useState(!0),[I,q]=k.useState(null),[U,B]=k.useState(!0),[se,T]=k.useState(!0),[$,M]=k.useState(!1),[w,V]=k.useState(360),[Q,h]=k.useState(!1),[F,z]=k.useState([60,80,100,80,1]),[G,ge]=k.useState(null),xe=k.useRef(0),J=k.useRef(0),[A,H]=k.useState([]),[Z,Y]=k.useState(null),[ie,K]=k.useState(!1),X=k.useRef(0),ne=k.useCallback(async(O,ce)=>{var De;if(!e)return;p(O.id,{isLoading:!0,error:void 0});const le=ce??i.length-1,ve=Date.now(),Ce=((De=e.app)==null?void 0:De.id)||`app_${e.id}`;try{const dt=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:O.serverName,tool_name:O.toolName,arguments:O.args,sandbox_mode:S,app_id:S?Ce:void 0})}),tr={eventIndex:le,timestamp:ve,result:dt},en=[...O.history||[],tr];p(O.id,{result:dt,isLoading:!1,lastRun:ve,history:en})}catch(dt){const tr={eventIndex:le,timestamp:ve,error:String(dt)},en=[...O.history||[],tr];p(O.id,{error:String(dt),isLoading:!1,lastRun:ve,history:en})}},[e==null?void 0:e.id,(Hu=e==null?void 0:e.app)==null?void 0:Hu.id,p,i.length,S]);k.useEffect(()=>{if(i.length>X.current&&d.length>0){const O=i.length-1;d.forEach(ce=>{ce.isLoading||ne(ce,O)})}X.current=i.length},[i.length,d,ne]),k.useEffect(()=>{c!==null&&(we(c),u(null))},[c,u]);const[he,we]=k.useState(null),ze=k.useRef(null),be=k.useRef(null);k.useEffect(()=>{if(!Q)return;const O=le=>{if(!be.current)return;const Ce=be.current.getBoundingClientRect().right-le.clientX;V(Math.min(600,Math.max(200,Ce)))},ce=()=>{h(!1)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",ce),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",ce)}},[Q]),k.useEffect(()=>{if(G===null)return;const O=le=>{const ve=le.clientX-xe.current,Ce=Math.max(40,J.current+ve);z(De=>{const dt=[...De];return dt[G]=Ce,dt})},ce=()=>{ge(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",ce),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",ce),document.body.style.cursor="",document.body.style.userSelect=""}},[G]);const D=(O,ce)=>{ce.preventDefault(),xe.current=ce.clientX,J.current=F[O],ge(O)},oe=F.map((O,ce)=>ce===F.length-1?`minmax(${O}px, 1fr)`:`${O}px`).join(" "),fe=k.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),ue=k.useMemo(()=>i.filter((O,ce)=>{var le,ve,Ce;if(P&&(O.timestamp<P[0]||O.timestamp>P[1])||b.size>0&&!b.has(O.event_type))return!1;if(U&&O.event_type==="model_response"){const De=((ve=(le=O.data)==null?void 0:le.response_content)==null?void 0:ve.parts)||((Ce=O.data)==null?void 0:Ce.parts)||[],dt=De.some(en=>en.type==="function_call"),tr=De.some(en=>en.type==="text");if(!dt&&!tr)return!1}return!(_&&!JSON.stringify(O).toLowerCase().includes(_.toLowerCase()))}),[i,P,b,_,U]),W=k.useMemo(()=>{var ve;let O=0,ce=0;const le=x!==null?x+1:i.length;for(let Ce=0;Ce<le;Ce++){const De=i[Ce];De.event_type==="model_response"&&((ve=De.data)!=null&&ve.token_counts)&&(O+=De.data.token_counts.input||0,ce+=De.data.token_counts.output||0)}return{input:O,output:ce,total:O+ce}},[i,x]),ee=x!==null?i[x]:null;k.useEffect(()=>{if(!e){H([]);return}(async()=>{K(!0);try{const ce=await Zl(e.id);H(ce)}catch(ce){console.error("Failed to load sessions:",ce),H([])}finally{K(!1)}})()},[e]);const me=k.useCallback(async O=>{if(!e){Y(null);return}if(!O){a(),l(),m(null),Y(null),g(null),N(null);return}try{const ce=await Cg(e.id,O);a(),l(),m(ce.id),Y(O),g(null),N(null);for(const le of ce.events)o(le)}catch(ce){alert(`Failed to load session: ${ce.message||"Unknown error"}`)}},[e,a,l,m,o]);k.useEffect(()=>{if(!e||A.length===0||ie)return;const ce=new URLSearchParams(window.location.search).get("session");if(ce)if(A.some(ve=>ve.id===ce)){me(ce);const ve=window.location.pathname;window.history.replaceState({},"",ve)}else console.warn(`Session ${ce} not found in available sessions`)},[e,A,ie,me]),k.useEffect(()=>{n&&ze.current&&(ze.current.scrollTop=ze.current.scrollHeight)},[i.length,n]);const ae=k.useCallback(()=>{if(!e||!y.trim()||n)return;E&&(E.close(),v(null)),f||(a(),l(),Y(null)),r(!0),g(null),N(null);const O=Tg(e.id);v(O),O.onopen=()=>{O.send(JSON.stringify({message:y,agent_id:he||void 0,session_id:f||void 0,sandbox_mode:S}))},O.onmessage=ce=>{var ve;const le=JSON.parse(ce.data);if(le.event_type==="agent_start"&&((ve=le.data)!=null&&ve.session_id)){const Ce=le.data.session_id;le.data.session_reused,m(Ce),Ce&&A.some(De=>De.id===Ce)&&Y(Ce)}else if(le.type==="session_started")m(le.session_id),le.session_id&&A.some(Ce=>Ce.id===le.session_id)&&Y(le.session_id);else if(le.type==="sandbox_starting")o({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(le.type==="sandbox_started")o({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${le.sandbox_id})`}});else if(le.type==="sandbox_response")o({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:le.data});else if(le.event_type==="approval_required"||le.type==="network_request"&&le.event_type==="approval_required"){const Ce={id:le.id,method:le.method||"GET",url:le.url,host:le.host,source:le.source||"agent",headers:le.headers||{},timeout:le.timeout||30};q(Ce),o({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{message:`⚠️ Network request to ${le.host} requires approval`}})}else le.type==="completed"?(r(!1),O.close()):le.type==="error"?(r(!1),o({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:le.error}})):o(le)},O.onerror=()=>{r(!1),o({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},O.onclose=()=>{r(!1)}},[e,y,n,E,a,r,o,he,f,S]),_e=k.useCallback(()=>{E==null||E.close(),r(!1)},[E,r]),tt=k.useCallback(async(O,ce,le)=>{var en,Ju,Ku,Gu,Qu,Yu,Xu,Zu,ed,td,nd,rd,sd,id,od,ad,ld,cd,ud,dd,pd,fd,md,hd;if(!I||!e)return;const ve=((en=e.app)==null?void 0:en.id)||e.id,Ce=O?"allow_pattern":"allow_once",De=O||I.host,dt=ce||"exact",tr=le?`/sandbox/${ve}/approval?project_id=${e.id}`:`/sandbox/${ve}/approval`;try{if(await Se(tr,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:I.id,action:Ce,pattern:De,pattern_type:dt,persist:le||!1})}),le&&Ce==="allow_pattern"){const ua=((Gu=(Ku=(Ju=e.app)==null?void 0:Ju.sandbox)==null?void 0:Ku.allowlist)==null?void 0:Gu.user)||[],Zx={id:`pattern_${Date.now().toString(36)}`,pattern:De,pattern_type:dt,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(Qu=e.app)==null?void 0:Qu.sandbox,enabled:((Xu=(Yu=e.app)==null?void 0:Yu.sandbox)==null?void 0:Xu.enabled)??!1,allowlist:{auto:((td=(ed=(Zu=e.app)==null?void 0:Zu.sandbox)==null?void 0:ed.allowlist)==null?void 0:td.auto)||[],user:[...ua,Zx]},unknown_action:((rd=(nd=e.app)==null?void 0:nd.sandbox)==null?void 0:rd.unknown_action)??"ask",approval_timeout:((id=(sd=e.app)==null?void 0:sd.sandbox)==null?void 0:id.approval_timeout)??30,agent_memory_limit_mb:((ad=(od=e.app)==null?void 0:od.sandbox)==null?void 0:ad.agent_memory_limit_mb)??512,agent_cpu_limit:((cd=(ld=e.app)==null?void 0:ld.sandbox)==null?void 0:cd.agent_cpu_limit)??1,mcp_memory_limit_mb:((dd=(ud=e.app)==null?void 0:ud.sandbox)==null?void 0:dd.mcp_memory_limit_mb)??256,mcp_cpu_limit:((fd=(pd=e.app)==null?void 0:pd.sandbox)==null?void 0:fd.mcp_cpu_limit)??.5,run_timeout:((hd=(md=e.app)==null?void 0:md.sandbox)==null?void 0:hd.run_timeout)??300}}})}o({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{message:`✅ Approved: ${De}`}})}catch(ua){console.error("Failed to approve:",ua)}q(null)},[I,e,o,t]),fn=k.useCallback(async()=>{var ce;if(!I||!e)return;const O=((ce=e.app)==null?void 0:ce.id)||e.id;try{await Se(`/sandbox/${O}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:I.id,action:"deny"})}),o({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{message:`❌ Denied: ${I.host}`}})}catch(le){console.error("Failed to deny:",le)}q(null)},[I,e,o]);k.useEffect(()=>{const O=ce=>{if((ce.metaKey||ce.ctrlKey)&&ce.key==="Enter"){ce.preventDefault(),ae();return}if(ce.key==="ArrowDown"||ce.key==="ArrowUp"){if(ce.target instanceof HTMLInputElement||ce.target instanceof HTMLTextAreaElement||(ce.preventDefault(),ue.length===0))return;if(ce.key==="ArrowDown")if(x===null){const le=i.indexOf(ue[0]);g(le)}else{const le=ue.findIndex(ve=>i.indexOf(ve)===x);if(le<ue.length-1){const ve=i.indexOf(ue[le+1]);g(ve)}}else if(ce.key==="ArrowUp")if(x===null){const le=i.indexOf(ue[ue.length-1]);g(le)}else{const le=ue.findIndex(ve=>i.indexOf(ve)===x);if(le>0){const ve=i.indexOf(ue[le-1]);g(ve)}}}};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[ae,ue,x,i]);const Wt=k.useCallback(()=>{var Ce;if(i.length===0)return;const O={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:he||((Ce=e==null?void 0:e.app)==null?void 0:Ce.root_agent_id),events:i},ce=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),le=URL.createObjectURL(ce),ve=document.createElement("a");ve.href=le,ve.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ve),ve.click(),document.body.removeChild(ve),URL.revokeObjectURL(le)},[i,e,he]),Zn=k.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const O=await Sg(f);if(O.success){alert(O.message||"Session saved to memory successfully");try{const ce=await Zl(e.id);H(ce)}catch{}}else alert(`Failed to save to memory: ${O.error||"Unknown error"}`)}catch(O){alert(`Error saving to memory: ${O.message||"Unknown error"}`)}},[f,e]),[er,Xe]=k.useState(!1),[Sn,Ht]=k.useState([]),[os,Uu]=k.useState(""),[ca,Gx]=k.useState("Test Case from Session"),[Vu,Wu]=k.useState(!1),Qx=k.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const O=await Se(`/projects/${e.id}/eval-sets`);if(Ht(O.eval_sets||[]),!O.eval_sets||O.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}Uu(O.eval_sets[0].id),Xe(!0)}catch(O){alert(`Error loading eval sets: ${O.message||"Unknown error"}`)}},[f,e]),Yx=k.useCallback(async()=>{if(!f||!e||!os){alert("Please select an evaluation set");return}Wu(!0);try{const O=await Se(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:os,case_name:ca})});Xe(!1),alert(`Test case "${O.eval_case.name}" created successfully!

Token count: ${O.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(O){alert(`Error creating test case: ${O.message||"Unknown error"}`)}finally{Wu(!1)}},[f,e,os,ca]),Xx=k.useCallback(()=>{const O=document.createElement("input");O.type="file",O.accept=".json",O.onchange=async ce=>{var ve;const le=(ve=ce.target.files)==null?void 0:ve[0];if(le)try{const Ce=await le.text(),De=JSON.parse(Ce);if(!De.events||!Array.isArray(De.events)){alert("Invalid run file: missing events array");return}a(),l(),g(null),N(null),De.events.forEach(dt=>{o(dt)})}catch(Ce){alert(`Failed to load run file: ${Ce}`)}},O.click()},[a,l,o]);return k.useEffect(()=>{if(x!==null){const O=document.querySelector(".event-row.selected");O==null||O.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?s.jsxs("div",{className:`run-panel ${Q?"resizing":""}`,children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"input-area",children:[s.jsxs("select",{className:"agent-selector",value:he||"",onChange:O=>we(O.target.value||null),disabled:n,title:"Select which agent to run",children:[s.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((qu=e.agents.find(O=>O.id===e.app.root_agent_id))==null?void 0:qu.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(O=>O.id!==e.app.root_agent_id).map(O=>s.jsxs("option",{value:O.id,children:[O.name," (",O.type.replace("Agent",""),")"]},O.id))]}),s.jsxs("select",{className:"agent-selector",value:Z||"",onChange:O=>me(O.target.value||null),disabled:n||ie,style:{minWidth:180},title:"Load a saved session",children:[s.jsx("option",{value:"",children:ie?"Loading...":"Load Session..."}),A.map(O=>{const ce=new Date(O.started_at*1e3),le=O.duration?`${O.duration.toFixed(1)}s`:"?";return s.jsxs("option",{value:O.id,children:[ce.toLocaleString()," (",O.event_count," events, ",le,")"]},O.id)})]}),s.jsx("input",{type:"text",placeholder:"Enter your query...",value:y,onChange:O=>j(O.target.value),onKeyDown:O=>O.key==="Enter"&&!O.shiftKey&&ae(),disabled:n}),n?s.jsxs("button",{className:"stop",onClick:_e,children:[s.jsx(hb,{size:14}),"Stop"]}):s.jsxs("button",{onClick:ae,disabled:!y.trim(),children:[s.jsx(Jn,{size:14}),"Run"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:S?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[s.jsx("input",{type:"checkbox",checked:S,onChange:O=>L(O.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]})]}),s.jsxs("div",{className:"toolbar",children:[s.jsxs("div",{className:"toolbar-section",children:[s.jsx(Wg,{size:12,style:{color:"#71717a"}}),s.jsx("input",{type:"text",placeholder:"Filter events...",value:_,onChange:O=>C(O.target.value)})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(O=>s.jsx("button",{className:`filter-chip ${b.has(O)?"active":""}`,onClick:()=>{const ce=new Set(b);ce.has(O)?ce.delete(O):ce.add(O),R(ce)},children:O.replace("_"," ")},O)),s.jsx("button",{className:`filter-chip ${b.has("callback_start")&&b.has("callback_end")?"active":""}`,onClick:()=>{const O=new Set(b);O.has("callback_start")&&O.has("callback_end")?(O.delete("callback_start"),O.delete("callback_end")):(O.add("callback_start"),O.add("callback_end")),R(O)},title:"Show/hide callback events",children:"callback"}),s.jsx("button",{className:`filter-chip ${U?"active":""}`,onClick:()=>B(!U),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[s.jsxs("button",{className:`toolbar-btn ${se?"active":""}`,onClick:()=>T(!se),children:[s.jsx(vn,{size:12}),"State"]}),s.jsxs("button",{className:`toolbar-btn ${$?"active":""}`,onClick:()=>M(!$),children:[s.jsx($p,{size:12}),"Tools"]})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[ue.length," / ",i.length," events"]}),P&&s.jsx("button",{className:"toolbar-btn",onClick:()=>N(null),children:"Clear Range"})]})]}),s.jsxs("div",{className:"main-content",ref:be,children:[s.jsxs("div",{className:"event-list-container",children:[s.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:oe},children:[s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"#"}),s.jsx("div",{className:`column-resize-handle ${G===0?"active":""}`,onMouseDown:O=>D(0,O)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Time"}),s.jsx("div",{className:`column-resize-handle ${G===1?"active":""}`,onMouseDown:O=>D(1,O)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Agent"}),s.jsx("div",{className:`column-resize-handle ${G===2?"active":""}`,onMouseDown:O=>D(2,O)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Type"}),s.jsx("div",{className:`column-resize-handle ${G===3?"active":""}`,onMouseDown:O=>D(3,O)})]}),s.jsx("div",{className:"header-cell",children:s.jsx("span",{children:"Info"})})]}),s.jsx("div",{className:"event-list",ref:ze,children:ue.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Vg,{size:24}),s.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):ue.map((O,ce)=>{const le=i.indexOf(O),ve=Bf[O.event_type]||Bf.error,Ce=gC[O.event_type]||To;return s.jsxs("div",{className:`event-row ${x===le?"selected":""}`,style:{background:ve.bg,gridTemplateColumns:oe},onClick:()=>g(le),onDoubleClick:()=>{T(!1),M(!1)},children:[s.jsx("div",{className:"index",children:le}),s.jsx("div",{className:"time",style:{color:ve.fg},children:yC(O.timestamp,fe.min)}),s.jsx("div",{className:"agent",style:{color:ve.fg},children:O.agent_name}),s.jsxs("div",{className:"type",style:{color:ve.fg},children:[s.jsx(Ce,{size:10}),O.event_type.split("_")[0]]}),s.jsx("div",{className:"summary",children:xC(O)})]},le)})})]}),s.jsxs("div",{className:"side-panel-container",style:{width:w},children:[s.jsx("div",{className:`resize-handle ${Q?"active":""}`,onMouseDown:()=>h(!0)}),s.jsxs("div",{className:"side-panel",style:{width:w-4},children:[s.jsxs("div",{className:"side-panel-tabs",children:[s.jsxs("button",{className:`side-panel-tab ${!se&&!$?"active":""}`,onClick:()=>{T(!1),M(!1)},children:[s.jsx(si,{size:12,style:{marginRight:4}}),"Details"]}),s.jsxs("button",{className:`side-panel-tab ${se?"active":""}`,onClick:()=>{T(!0),M(!1)},children:[s.jsx(vn,{size:12,style:{marginRight:4}}),"State"]}),s.jsxs("button",{className:`side-panel-tab ${$?"active":""}`,onClick:()=>{M(!0),T(!1)},children:[s.jsx($p,{size:12,style:{marginRight:4}}),"Tools"]})]}),s.jsx("div",{className:"side-panel-content",children:$?s.jsx(wC,{project:e,selectedEventIndex:x,sandboxMode:S}):se?s.jsx(kC,{events:i,selectedEventIndex:x,project:e}):ee?s.jsx(vC,{event:ee}):s.jsxs("div",{className:"empty-state",children:[s.jsx(si,{size:24}),s.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),s.jsxs("div",{className:"stats-bar",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Events:"}),s.jsx("span",{className:"stat-value",children:i.length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Tool Calls:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="tool_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Model Calls:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="model_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Callbacks:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="callback_start").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"State Changes:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="state_change").length})]}),i.length>0&&s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Duration:"}),s.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),W.total>0&&s.jsx("div",{className:"stat-item token-stats",children:s.jsxs("span",{className:"stat-value token-value",children:[s.jsxs("span",{className:"token-in",title:"Input tokens",children:[W.input.toLocaleString(),"↑"]}),s.jsxs("span",{className:"token-out",title:"Output tokens",children:[W.output.toLocaleString(),"↓"]}),s.jsx("span",{className:"token-total",title:"Total tokens",children:W.total.toLocaleString()})]})}),s.jsx("div",{className:"stats-bar-spacer"}),s.jsxs("button",{className:"stats-bar-btn",onClick:Xx,title:"Load a saved run",children:[s.jsx(na,{size:12}),"Load"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:Wt,disabled:i.length===0,title:"Save current run to file",children:[s.jsx(hi,{size:12}),"Save"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:Zn,disabled:!f||i.length===0,title:"Save current session to memory",children:[s.jsx(vn,{size:12}),"Save to Memory"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:Qx,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[s.jsx(rc,{size:12}),"Create Test Case"]})]}),er&&s.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>Xe(!1),children:s.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:O=>O.stopPropagation(),children:[s.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[s.jsx(rc,{size:18}),"Create Test Case from Session"]}),s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),s.jsx("input",{type:"text",value:ca,onChange:O=>Gx(O.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),s.jsx("select",{value:os,onChange:O=>Uu(O.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:Sn.map(O=>s.jsx("option",{value:O.id,children:O.name},O.id))})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),s.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>Xe(!1),children:"Cancel"}),s.jsx("button",{className:"btn btn-primary",onClick:Yx,disabled:Vu||!os,children:Vu?"Creating...":"Create Test Case"})]})]})}),I&&s.jsx(hC,{request:I,timeout:I.timeout||30,onApprove:tt,onDeny:fn,onClose:()=>q(null)})]}):s.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const _C=()=>Math.random().toString(36).substring(2,10),SC=()=>({id:_C(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function CC(){const{project:e,setProject:t}=ct(),[n,r]=k.useState(null),[i,o]=k.useState(null),[a,l]=k.useState(""),[c,u]=k.useState([]),[d,p]=k.useState(!1),[f,m]=k.useState(!1),[y,j]=k.useState(""),[E,v]=k.useState(!1),[x,g]=k.useState(null),[P,N]=k.useState(null),_=k.useRef(null),C=(e==null?void 0:e.skillsets)||[],b=C.find(M=>M.id===n);k.useEffect(()=>{Dg().then(M=>N(M.available)).catch(()=>N(!1))},[]),k.useEffect(()=>{C.length>0&&!n&&r(C[0].id)},[C,n]),k.useEffect(()=>{!e||!n||R()},[e==null?void 0:e.id,n]);const R=k.useCallback(async()=>{if(!(!e||!n))try{const M=await Rg(e.id,n);o(M),L(n,{entry_count:M.entry_count})}catch(M){console.error("Failed to load stats:",M)}},[e==null?void 0:e.id,n]),S=M=>{e&&t({...e,...M})},L=(M,w)=>{e&&t({...e,skillsets:e.skillsets.map(V=>V.id===M?{...V,...w}:V)})},I=()=>{if(!e)return;const M=SC();S({skillsets:[...C,M]}),r(M.id)},q=M=>{e&&confirm("Delete this SkillSet and all its data?")&&(S({skillsets:C.filter(w=>w.id!==M)}),n===M&&r(C.length>1?C[0].id:null),o(null),u([]))},U=async()=>{if(!(!e||!n||!a.trim())){p(!0),g(null);try{const M=await Og(e.id,n,a.trim(),10,0);u(M.results)}catch(M){g("Search failed"),console.error(M)}finally{p(!1)}}},B=async()=>{if(!(!e||!n||!y.trim())){v(!0),g(null);try{const M=await Mg(e.id,n,y.trim());j(""),await R(),alert(`Added ${M.chunks_added} chunks from ${M.source_name}`)}catch(M){g(M.message||"Failed to fetch URL")}finally{v(!1)}}},se=async M=>{var V;const w=(V=M.target.files)==null?void 0:V[0];if(!(!w||!e||!n)){g(null);try{const Q=await Ig(e.id,n,w);await R(),alert(`Added ${Q.chunks_added} chunks from ${Q.source_name}`)}catch(Q){g(Q.message||"Upload failed")}_.current&&(_.current.value="")}},T=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await $g(e.id,n),await R(),u([])}catch{g("Clear failed")}},$=M=>{const w=Math.round(M*100),V=160,Q=70,h=20+(1-M)*15,F=.15+M*.25;return`linear-gradient(90deg, hsla(${V}, ${Q}%, ${h}%, ${F}) 0%, transparent ${w}%)`};return e?s.jsxs("div",{className:"skillsets-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"skillset-list",children:[s.jsxs("div",{className:"skillset-list-header",children:[s.jsx("h3",{children:"SkillSets"}),s.jsx("button",{className:"btn-icon",onClick:I,title:"Add SkillSet",children:s.jsx(Je,{size:16})})]}),C.length===0?s.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[s.jsx(vn,{size:32}),s.jsx("span",{children:"No SkillSets"}),s.jsxs("button",{className:"btn-primary",onClick:I,children:[s.jsx(Je,{size:14})," Create SkillSet"]})]}):C.map(M=>s.jsxs("div",{className:`skillset-item ${n===M.id?"selected":""}`,onClick:()=>r(M.id),children:[s.jsx(vn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),s.jsxs("div",{className:"skillset-item-info",children:[s.jsx("div",{className:"skillset-item-name",children:M.name}),s.jsxs("div",{className:"skillset-item-count",children:[M.entry_count||0," entries"]})]}),s.jsx("button",{className:"skillset-item-delete",onClick:w=>{w.stopPropagation(),q(M.id)},children:s.jsx($e,{size:14})})]},M.id))]}),b?s.jsxs("div",{className:"skillset-detail",children:[s.jsxs("div",{className:"skillset-header",children:[s.jsxs("div",{className:"skillset-header-info",children:[s.jsx("input",{className:"skillset-name-input",value:b.name,onChange:M=>L(b.id,{name:M.target.value}),placeholder:"SkillSet Name"}),s.jsx("textarea",{className:"skillset-desc-input",value:b.description,onChange:M=>L(b.id,{description:M.target.value}),placeholder:"Description (optional)",rows:1}),s.jsxs("div",{className:"skillset-model",children:[s.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),s.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:b.embedding_model||"text-embedding-004",onChange:M=>L(b.id,{embedding_model:M.target.value}),children:[s.jsxs("optgroup",{label:"Google Gemini",children:[s.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),s.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),s.jsxs("optgroup",{label:"OpenAI",children:[s.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),s.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),s.jsxs("optgroup",{label:"Cohere",children:[s.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),s.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),s.jsxs("div",{className:"skillset-stats",children:[s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),P===!1&&s.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),s.jsx("button",{className:"btn-icon",onClick:R,title:"Refresh",children:s.jsx(ln,{size:16})})]}),x&&s.jsxs("div",{className:"error-banner",children:[x,s.jsx("button",{onClick:()=>g(null),children:s.jsx(wu,{size:14})})]}),s.jsxs("div",{className:"search-section",children:[s.jsx("div",{className:"search-input-wrapper",children:s.jsx("input",{className:"search-input",value:a,onChange:M=>l(M.target.value),onKeyDown:M=>M.key==="Enter"&&U(),placeholder:"Search this SkillSet..."})}),s.jsxs("button",{className:"btn-primary",onClick:U,disabled:d||!a.trim(),children:[s.jsx(Wg,{size:14}),d?"Searching...":"Search"]})]}),s.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&s.jsx("div",{className:"empty-state",children:s.jsx("span",{children:"No results found"})}),c.map(M=>s.jsxs("div",{className:"search-result",style:{background:$(M.score)},children:[s.jsxs("span",{className:"search-result-score",children:[(M.score*100).toFixed(0),"%"]}),s.jsx("div",{className:"search-result-text",children:M.text}),s.jsx("div",{className:"search-result-source",children:M.source_name})]},M.id))]}),s.jsxs("div",{className:"add-sources-section",children:[s.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?s.jsx(Rt,{size:16}):s.jsx(Mt,{size:16}),s.jsx("h4",{children:"Add Sources"})]}),f&&s.jsxs("div",{className:"add-sources-content",children:[s.jsxs("div",{className:"source-row",children:[s.jsx(xu,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{className:"source-input",value:y,onChange:M=>j(M.target.value),onKeyDown:M=>M.key==="Enter"&&B(),placeholder:"Enter URL (e.g., llms.txt file)"}),s.jsxs("button",{className:"btn-primary",onClick:B,disabled:E||!y.trim(),children:[s.jsx(lb,{size:14}),E?"Loading...":"Add"]})]}),s.jsxs("div",{className:"source-row",children:[s.jsx(ib,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{ref:_,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:se}),s.jsxs("button",{className:"btn-primary",onClick:()=>{var M;return(M=_.current)==null?void 0:M.click()},children:[s.jsx(na,{size:14}),"Upload File"]}),s.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&s.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:s.jsxs("button",{className:"clear-button",onClick:T,children:[s.jsx($e,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):C.length>0?s.jsx("div",{className:"skillset-detail",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(vn,{size:48}),s.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const an={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},ai=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=an[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const o=n??3.5;return{value:t.toFixed(1),comparison:`${o.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const o=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(o*100)}% min`}}},NC={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function Kx(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function EC(){const{project:e}=ct(),[t,n]=k.useState([]),[r,i]=k.useState(null),[o,a]=k.useState(null),[l,c]=k.useState(new Set),[u,d]=k.useState(new Map),[p,f]=k.useState(new Map),[m,y]=k.useState(new Set),[j,E]=k.useState(!1),[v,x]=k.useState(null),[g,P]=k.useState([]),[N,_]=k.useState(null),C=async()=>{if(e)try{const A=await He.get(`/projects/${e.id}/eval-history`);P(A.runs||[])}catch(A){console.warn("Failed to load eval history:",A)}},b=async(A,H=!0)=>{if(e)try{const Y=(await He.get(`/projects/${e.id}/eval-history/${A}`)).run;if(_(Y),Y!=null&&Y.case_results){const ie=new Map;for(const K of Y.case_results)ie.set(K.eval_case_id,K);d(ie)}if((Y==null?void 0:Y.eval_set_id)==="batch")c(new Set(t.map(ie=>ie.id))),i(null);else if(Y!=null&&Y.eval_set_id){const ie=new Map;ie.set(Y.eval_set_id,Y),f(ie),i(Y.eval_set_id),c(K=>new Set([...K,Y.eval_set_id]))}a(null),H&&window.history.pushState({run:A},"",`?run=${A}`)}catch(Z){console.warn("Failed to load history run:",Z)}},R=(A,H=!0)=>{i(A),a(null),_(null),H&&A?window.history.pushState({set:A},"",`?set=${A}`):H&&window.history.pushState({},"",window.location.pathname)},S=(A,H,Z=!0)=>{i(A),a(H),_(null),Z&&H?window.history.pushState({set:A,case:H},"",`?set=${A}&case=${H}`):Z&&A&&window.history.pushState({set:A},"",`?set=${A}`)},L=()=>{_(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},I=async A=>{if(e)try{await He.delete(`/projects/${e.id}/eval-history/${A}`),P(H=>H.filter(Z=>Z.id!==A)),(N==null?void 0:N.id)===A&&_(null)}catch(H){console.warn("Failed to delete history run:",H)}};k.useEffect(()=>{e!=null&&e.id&&(q(),C())},[e==null?void 0:e.id]),k.useEffect(()=>{const A=()=>{y(new Set(t.map(Z=>Z.id)))},H=()=>{y(new Set),C()};return window.addEventListener("eval-tests-started",A),window.addEventListener("eval-tests-completed",H),()=>{window.removeEventListener("eval-tests-started",A),window.removeEventListener("eval-tests-completed",H)}},[t]),k.useEffect(()=>{if(!(e!=null&&e.id)||j)return;const A=()=>{const Z=new URLSearchParams(window.location.search),Y=Z.get("set"),ie=Z.get("case"),K=Z.get("run");if(K){b(K,!1);return}if(Y)i(Y),a(ie),_(null),c(X=>new Set([...X,Y]));else{if(!r&&!o&&!N)return;i(null),a(null),_(null)}};A();const H=()=>{A()};return window.addEventListener("popstate",H),()=>window.removeEventListener("popstate",H)},[e==null?void 0:e.id,j,t.length]);const q=async()=>{var A,H;if(e!=null&&e.id){E(!0),x(null);try{const Z=await He.get(`/projects/${e.id}/eval-sets`);if(n(Z.eval_sets||[]),((A=Z.eval_sets)==null?void 0:A.length)>0){const Y=new URLSearchParams(window.location.search),ie=Y.get("set"),K=Y.get("case"),X=ie||(K?(H=Z.eval_sets.find(ne=>ne.eval_cases.some(he=>he.id===K)))==null?void 0:H.id:null)||Z.eval_sets[0].id;c(new Set([X]))}}catch(Z){x(Z.message||"Failed to load eval sets")}finally{E(!1)}}},U=t.find(A=>A.id===r),B=U==null?void 0:U.eval_cases.find(A=>A.id===o),se=async()=>{if(e!=null&&e.id)try{const A=await He.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:NC});n(H=>[...H,A.eval_set]),i(A.eval_set.id),c(H=>new Set([...H,A.eval_set.id]))}catch(A){x(A.message||"Failed to create eval set")}},T=async A=>{if(e!=null&&e.id)try{const H=await He.post(`/projects/${e.id}/eval-sets/${A}/cases`,{name:"New Test Case",description:"",invocations:[{id:Kx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(Z=>Z.map(Y=>Y.id===A?{...Y,eval_cases:[...Y.eval_cases,H.eval_case]}:Y)),i(A),a(H.eval_case.id)}catch(H){x(H.message||"Failed to create eval case")}},$=async(A,H,Z)=>{if(e!=null&&e.id)try{const Y=await He.put(`/projects/${e.id}/eval-sets/${A}/cases/${H}`,Z);n(ie=>ie.map(K=>K.id===A?{...K,eval_cases:K.eval_cases.map(X=>X.id===H?Y.eval_case:X)}:K))}catch(Y){x(Y.message||"Failed to update eval case")}},M=async(A,H)=>{if(e!=null&&e.id)try{await He.delete(`/projects/${e.id}/eval-sets/${A}/cases/${H}`),n(Z=>Z.map(Y=>Y.id===A?{...Y,eval_cases:Y.eval_cases.filter(ie=>ie.id!==H)}:Y)),o===H&&a(null)}catch(Z){x(Z.message||"Failed to delete eval case")}},w=async A=>{if(e!=null&&e.id)try{await He.delete(`/projects/${e.id}/eval-sets/${A}`),n(H=>H.filter(Z=>Z.id!==A)),r===A&&(i(null),a(null))}catch(H){x(H.message||"Failed to delete eval set")}},V=async A=>{if(e!=null&&e.id)try{const H=await He.get(`/projects/${e.id}/eval-sets/${A}/export`),Z=new Blob([JSON.stringify(H,null,2)],{type:"application/json"}),Y=URL.createObjectURL(Z),ie=document.createElement("a");ie.href=Y;const K=t.find(X=>X.id===A);ie.download=`${(K==null?void 0:K.name)||"eval-set"}.json`,document.body.appendChild(ie),ie.click(),document.body.removeChild(ie),URL.revokeObjectURL(Y)}catch(H){x(H.message||"Failed to export eval set")}},Q=async A=>{if(e!=null&&e.id)try{const H=await A.text(),Z=JSON.parse(H),Y=await He.post(`/projects/${e.id}/eval-sets/import`,Z);n(ie=>[...ie,Y.eval_set]),i(Y.eval_set.id),c(ie=>new Set([...ie,Y.eval_set.id]))}catch(H){x(H.message||"Failed to import eval set")}},h=k.useRef(null),F=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const A=await Promise.all(t.map(async ie=>{try{return await He.get(`/projects/${e.id}/eval-sets/${ie.id}/export`)}catch{return ie}})),H=new Blob([JSON.stringify(A,null,2)],{type:"application/json"}),Z=URL.createObjectURL(H),Y=document.createElement("a");Y.href=Z,Y.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(Z)}catch(A){x(A.message||"Failed to export all eval sets")}},z=async(A,H)=>{if(e!=null&&e.id){y(Z=>new Set([...Z,H]));try{const Z=await He.post(`/projects/${e.id}/eval-sets/${A}/cases/${H}/run`,{});d(Y=>new Map(Y).set(H,Z.result))}catch(Z){x(Z.message||"Failed to run eval case")}finally{y(Z=>{const Y=new Set(Z);return Y.delete(H),Y})}}},G=async A=>{if(!(e!=null&&e.id))return;const H=t.find(Y=>Y.id===A);if(!H)return;const Z=H.eval_cases.map(Y=>Y.id);y(Y=>new Set([...Y,A,...Z]));try{const Y=await He.post(`/projects/${e.id}/eval-sets/${A}/run`,{});f(ie=>new Map(ie).set(A,Y.result));for(const ie of Y.result.case_results)d(K=>new Map(K).set(ie.eval_case_id,ie));try{await He.post(`/projects/${e.id}/eval-history`,Y.result),C()}catch(ie){console.warn("Failed to save eval run to history:",ie)}}catch(Y){x(Y.message||"Failed to run eval set")}finally{y(Y=>{const ie=new Set(Y);return ie.delete(A),Z.forEach(K=>ie.delete(K)),ie})}},ge=A=>{c(H=>{const Z=new Set(H);return Z.has(A)?Z.delete(A):Z.add(A),Z})},xe=A=>{let H=A.eval_cases.length,Z=0,Y=0,ie=0;for(const K of A.eval_cases){const X=u.get(K.id);X?X.passed?Z++:Y++:ie++}return{total:H,passed:Z,failed:Y,pending:ie}},J=A=>A==null?"-":`${Math.round(A*100)}%`;return e?s.jsxs("div",{className:"eval-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"eval-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsx("h3",{children:"Evaluation Tests"}),s.jsxs("div",{className:"header-actions",children:[s.jsx("input",{type:"file",ref:h,accept:".json",style:{display:"none"},onChange:A=>{var Z;const H=(Z=A.target.files)==null?void 0:Z[0];H&&(Q(H),A.target.value="")}}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var A;return(A=h.current)==null?void 0:A.click()},title:"Import eval set from JSON",children:s.jsx(na,{size:14})}),t.length>0&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:F,title:"Download all eval sets as JSON",children:s.jsx(hi,{size:14})}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:q,title:"Refresh",children:s.jsx(ln,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:se,title:"New eval set",children:[s.jsx(Je,{size:14}),"Set"]})]})]}),s.jsxs("div",{className:"eval-tree",children:[j&&s.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),v&&s.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:v}),!j&&t.length===0&&s.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[s.jsx(ku,{size:32}),s.jsxs("p",{children:["No evaluation sets yet.",s.jsx("br",{}),"Create one to get started."]})]}),t.map(A=>{const H=l.has(A.id),Z=xe(A),Y=m.has(A.id);return s.jsxs("div",{className:"tree-item",children:[s.jsxs("div",{className:`tree-set ${r===A.id&&!o?"selected":""}`,onClick:()=>R(A.id),children:[s.jsx("button",{className:"expand-btn",onClick:ie=>{ie.stopPropagation(),ge(A.id)},children:A.eval_cases.length>0?H?s.jsx(Rt,{size:14}):s.jsx(Mt,{size:14}):s.jsx("span",{style:{width:14}})}),s.jsx(Ug,{size:14,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{className:"set-name",children:A.name}),s.jsx("button",{className:"add-case-btn",onClick:ie=>{ie.stopPropagation(),T(A.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:s.jsx(Je,{size:12})}),Z.total>0&&s.jsxs("span",{className:"set-stats",children:[Z.passed>0&&s.jsx("span",{className:"stat-passed",children:Z.passed}),Z.failed>0&&s.jsx("span",{className:"stat-failed",children:Z.failed}),Z.pending>0&&s.jsx("span",{className:"stat-pending",children:Z.pending})]}),s.jsx("button",{className:"run-btn",onClick:ie=>{ie.stopPropagation(),G(A.id)},title:"Run all tests in this set",disabled:Y,children:Y?s.jsx(ri,{size:12,className:"spinning"}):s.jsx(Jn,{size:12})})]}),H&&s.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:A.eval_cases.map(ie=>{var ne;const K=u.get(ie.id),X=m.has(ie.id);return s.jsxs("div",{className:`tree-case ${o===ie.id?"selected":""}`,onClick:()=>S(A.id,ie.id),children:[X?s.jsx(ri,{size:14,className:"spinning",style:{color:"var(--warning)"}}):K?K.passed?s.jsx(xr,{size:14,style:{color:"var(--success)"}}):s.jsx(Zr,{size:14,style:{color:"var(--error)"}}):s.jsx(zo,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{className:"case-name",children:ie.name}),K&&K.metric_results.length>0&&s.jsx("span",{style:{fontSize:11,color:K.passed?"var(--success)":"var(--error)"},children:J((ne=K.metric_results[0])==null?void 0:ne.score)}),s.jsx("button",{className:"run-btn",onClick:he=>{he.stopPropagation(),z(A.id,ie.id)},disabled:X,children:s.jsx(Jn,{size:12})})]},ie.id)})})]},A.id)})]}),s.jsxs("div",{className:"history-section",children:[s.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:s.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",g.length,")"]})}),s.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:g.length===0?s.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...g].sort((A,H)=>(H.started_at||0)-(A.started_at||0)).map(A=>{const H=A.passed_cases===A.total_cases;return s.jsx("div",{className:`history-item ${(N==null?void 0:N.id)===A.id?"selected":""}`,onClick:()=>b(A.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(N==null?void 0:N.id)===A.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[H?s.jsx(xr,{size:14,style:{color:"var(--success)",flexShrink:0}}):s.jsx(Zr,{size:14,style:{color:"var(--error)",flexShrink:0}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:500},children:A.eval_set_name||"Unnamed"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(A.started_at*1e3).toLocaleString()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{color:H?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[A.passed_cases,"/",A.total_cases]}),s.jsx("button",{className:"btn btn-icon",onClick:Z=>{Z.stopPropagation(),I(A.id)},title:"Delete run",style:{padding:2},children:s.jsx($e,{size:12})})]})]})},A.id)})})]})]}),s.jsx("div",{className:"eval-editor",children:N?s.jsx(TC,{run:N,onClose:L}):B?s.jsx(PC,{evalCase:B,evalSetId:r,projectId:e.id,result:u.get(B.id),isRunning:m.has(B.id),onUpdate:A=>$(r,B.id,A),onDelete:()=>M(r,B.id),onRun:()=>z(r,B.id),onClearResult:()=>d(A=>{const H=new Map(A);return H.delete(B.id),H})}):U?s.jsx(LC,{evalSet:U,projectId:e.id,result:p.get(U.id),isRunning:m.has(U.id),caseResults:u,onUpdate:async A=>{try{const H=await He.put(`/projects/${e.id}/eval-sets/${U.id}`,A);n(Z=>Z.map(Y=>Y.id===U.id?H.eval_set:Y))}catch(H){x(H.message)}},onDelete:()=>w(U.id),onRun:()=>G(U.id),onExport:()=>V(U.id)}):s.jsx("div",{className:"editor-content",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(zo,{size:48}),s.jsxs("p",{children:["Select a test case to edit",s.jsx("br",{}),"or create a new one"]})]})})})]}):null}function zC({value:e,onChange:t}){var a,l;const{project:n}=ct(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,o=r.find(c=>c.id===i);return s.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[s.jsx("option",{value:"",children:o?`App Default (${o.model_name})`:"App Default"}),r.map(c=>s.jsx("option",{value:c.model_name,children:c.model_name},c.id)),s.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),s.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),s.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function TC({run:e,onClose:t}){var m;const{project:n}=ct(),[r,i]=k.useState(!0),[o,a]=k.useState(new Set),l=e.case_results||[],c=l.filter(y=>y.passed).length,u=l.filter(y=>!y.passed).length,d=r?l.filter(y=>!y.passed):l,p=y=>{a(j=>{const E=new Set(j);return E.has(y)?E.delete(y):E.add(y),E})},f=y=>{y&&n&&(window.location.href=`/project/${n.id}/run?session=${y}`)};return s.jsxs("div",{className:"test-result-viewer",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"result-header",children:[s.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const y=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(y)}},title:"Copy link to this run",children:s.jsx(vu,{size:14})})})]}),s.jsxs("div",{className:"result-summary",children:[s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Status"}),s.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Passed"}),s.jsx("span",{className:"value passed",children:c})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Failed"}),s.jsx("span",{className:"value failed",children:u})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Total Cases"}),s.jsx("span",{className:"value",children:l.length})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Duration"}),s.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Tokens"}),s.jsx("span",{className:"value",children:((m=e.total_tokens)==null?void 0:m.toLocaleString())||"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Run Time"}),s.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),s.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[s.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[s.jsx("input",{type:"checkbox",checked:r,onChange:y=>i(y.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),s.jsxs("div",{className:"result-cases",children:[d.map((y,j)=>{var L,I,q,U,B,se;const E=y.case_id||`case-${j}`,v=o.has(E),x=((L=y.metric_results)==null?void 0:L.filter(T=>!T.passed||T.error))||[],g=((I=y.metric_results)==null?void 0:I.filter(T=>T.passed&&!T.error))||[],P=((q=y.rubric_results)==null?void 0:q.filter(T=>!T.passed||T.error))||[],N=((U=y.rubric_results)==null?void 0:U.filter(T=>T.passed&&!T.error))||[],_=v?y.metric_results:x,C=v?y.rubric_results:P,b=v?y.invocation_results:(B=y.invocation_results)==null?void 0:B.filter(T=>{var $;return(($=T.metric_results)==null?void 0:$.some(M=>!M.passed))||T.error}),R=g.length+N.length,S=x.length+P.length;return s.jsxs("div",{className:"result-case",children:[s.jsxs("div",{className:"result-case-header",onClick:()=>p(E),style:{cursor:"pointer"},children:[s.jsxs("div",{className:"result-case-name",children:[s.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:v?"▼":"▶"}),y.passed?s.jsx(xr,{size:16,style:{color:"var(--success)"}}):s.jsx(Zr,{size:16,style:{color:"var(--error)"}}),y.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&s.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:y.eval_set_name}),y.case_name||`Case ${j+1}`,s.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[S>0&&s.jsxs("span",{style:{color:"var(--error)"},children:[S," failed"]}),S>0&&R>0&&" · ",R>0&&s.jsxs("span",{style:{color:"var(--success)"},children:[R," passed"]})]})]}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[y.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:T=>{T.stopPropagation(),f(y.session_id)},title:"View session in Run panel",children:[s.jsx(Fg,{size:12})," View Session"]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:y.duration_ms?`${(y.duration_ms/1e3).toFixed(2)}s`:""})]})]}),s.jsxs("div",{className:"result-case-details",children:[(_==null?void 0:_.length)>0&&s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[_.map((T,$)=>{const M=ai(T.metric,T.score,T.threshold);return s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:T.error?"rgba(255, 193, 7, 0.1)":T.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${T.error?"var(--warning)":T.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[s.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:T.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),T.error?s.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):s.jsxs(s.Fragment,{children:[s.jsx("span",{style:{fontSize:14,fontWeight:600,color:T.passed?"var(--success)":"var(--error)"},children:M.value}),s.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:M.comparison})]})]},$)}),!v&&g.length>0&&s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",g.length," passed"]})]}),_==null?void 0:_.filter(T=>!T.passed&&T.rationale).map((T,$)=>s.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[s.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[T.metric.replace(/_/g," ")," - Why it failed:"]}),s.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:T.rationale})]},`rationale-${$}`)),(C==null?void 0:C.length)>0&&s.jsxs("div",{style:{marginTop:8},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),C.map((T,$)=>s.jsxs("div",{style:{marginBottom:T.rationale&&!T.passed?8:4},children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"metric-name",style:{flex:1},children:T.rubric}),s.jsx("span",{className:`metric-value ${T.passed?"passed":"failed"}`,children:T.passed?"✓ Pass":"✗ Fail"})]}),!T.passed&&T.rationale&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",T.rationale]}),T.error&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",T.error]})]},$)),!v&&N.length>0&&s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",N.length," passed rubric",N.length>1?"s":""]})]}),(b==null?void 0:b.length)>0&&s.jsxs("div",{className:"invocation-summary",children:[s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",b.length,!v&&((se=y.invocation_results)==null?void 0:se.length)>b.length?` of ${y.invocation_results.length}`:"",")"]}),b.map((T,$)=>s.jsxs("div",{className:"invocation-item",children:[s.jsxs("div",{className:"invocation-query",children:["Turn ",T.invocation_id||$+1,": ",T.user_message||"(no message)"]}),T.actual_response&&s.jsxs("div",{className:"invocation-response",children:["Response: ",T.actual_response.substring(0,200),T.actual_response.length>200?"...":""]})]},$))]}),y.error&&s.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:y.error})]})]},E)}),l.length===0&&s.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function PC({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:o,onDelete:a,onRun:l,onClearResult:c}){var N,_,C;const{project:u}=ct(),[d,p]=k.useState(e),[f,m]=k.useState("assertions");k.useEffect(()=>{p(e)},[e.id]);const y=k.useCallback(b=>{p(R=>({...R,...b})),o(b)},[o]),j=()=>{const b={id:Kx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};y({invocations:[...d.invocations,b]})},E=(b,R)=>{const S=[...d.invocations];S[b]={...S[b],...R},y({invocations:S})},v=b=>{y({invocations:d.invocations.filter((R,S)=>S!==b)})},x=b=>{const R=[...d.invocations];R[b]={...R[b],expected_tool_calls:[...R[b].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},y({invocations:R})},g=(b,R,S)=>{const L=[...d.invocations],I=[...L[b].expected_tool_calls];I[R]={...I[R],...S},L[b]={...L[b],expected_tool_calls:I},y({invocations:L})},P=(b,R)=>{const S=[...d.invocations];S[b]={...S[b],expected_tool_calls:S[b].expected_tool_calls.filter((L,I)=>I!==R)},y({invocations:S})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(zo,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("input",{type:"text",value:d.name,onChange:b=>y({name:b.target.value}),placeholder:"Test case name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const b=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(b)},title:"Copy link to this test case",children:s.jsx(vu,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?s.jsx(ri,{size:14,className:"spinning"}):s.jsx(Jn,{size:14}),"Run"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx($e,{size:14})})]}),s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>m("assertions"),children:[s.jsx(To,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),s.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>m("rubrics"),children:[s.jsx(ku,{size:14,style:{marginRight:6}}),"LLM Judges"]}),s.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>m("docs"),children:[s.jsx(Eo,{size:14,style:{marginRight:6}}),"Docs"]}),s.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>m("json"),children:[s.jsx(dn,{size:14,style:{marginRight:6}}),"JSON"]})]}),s.jsxs("div",{className:"editor-content",children:[f==="assertions"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),s.jsxs("select",{value:d.target_agent||"",onChange:b=>y({target_agent:b.target.value||void 0}),style:{width:"100%"},children:[s.jsx("option",{value:"",children:"root_agent"}),(N=u==null?void 0:u.agents)==null?void 0:N.map(b=>s.jsx("option",{value:b.name,children:b.name},b.name))]})]}),s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),s.jsx("input",{type:"text",value:d.tags.join(", "),onChange:b=>y({tags:b.target.value.split(",").map(R=>R.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:d.description,onChange:b=>y({description:b.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["session_input ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(Ft,{height:"100%",defaultLanguage:"json",value:(()=>{var R;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((R=u==null?void 0:u.app)!=null&&R.state_keys)&&u.app.state_keys.length>0){const S={};return u.app.state_keys.forEach(L=>{L.default_value!==void 0?S[L.name]=L.default_value:S[L.name]=L.type==="string"?"":L.type==="number"?0:L.type==="boolean"?!1:L.type==="array"?[]:{}}),JSON.stringify(S,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:b=>{try{b&&y({initial_state:JSON.parse(b)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(To,{size:14}),"Conversation Turns"]}),d.invocations.map((b,R)=>s.jsxs("div",{className:"invocation-card",children:[s.jsxs("div",{className:"invocation-number",children:[s.jsx("span",{children:R+1}),d.invocations.length>1&&s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>v(R),style:{padding:4},children:s.jsx($e,{size:10})})]}),s.jsxs("div",{className:"invocation-content",children:[s.jsxs("div",{className:"invocation-row",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("label",{children:"User Query"}),s.jsx("textarea",{value:b.user_message,onChange:S=>E(R,{user_message:S.target.value}),placeholder:"The message to send to the agent..."})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{children:["Expected Response ",s.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),s.jsx("textarea",{value:b.expected_response||"",onChange:S=>E(R,{expected_response:S.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),b.expected_tool_calls.map((S,L)=>s.jsxs("div",{className:"tool-call-compact",children:[s.jsx("input",{type:"text",value:S.name,onChange:I=>g(R,L,{name:I.target.value}),placeholder:"tool_name",className:"tool-name-input"}),s.jsxs("div",{className:"pillbox-toggle",children:[s.jsx("button",{className:`pill ${S.args_match_mode==="subset"?"active":""}`,onClick:()=>g(R,L,{args_match_mode:"subset"}),children:"Partial"}),s.jsx("button",{className:`pill ${S.args_match_mode==="exact"?"active":""}`,onClick:()=>g(R,L,{args_match_mode:"exact"}),children:"Exact"})]}),s.jsx("div",{className:"tool-args-editor",children:s.jsx(Ft,{height:"22px",defaultLanguage:"json",value:JSON.stringify(S.args||{}),onChange:I=>{try{I&&g(R,L,{args:JSON.parse(I)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>P(R,L),style:{padding:"4px 6px"},children:s.jsx($e,{size:10})})]},L)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(R),style:{marginTop:4},children:[s.jsx(Je,{size:12})," Assert Tool Call"]})]})]},b.id)),s.jsxs("button",{className:"btn btn-secondary",onClick:j,children:[s.jsx(Je,{size:14})," Add Turn"]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(xr,{size:14,style:{marginRight:6}}),"final_session_state ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(Ft,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:b=>{if(!b||b==="{}")y({expected_final_state:void 0});else try{y({expected_final_state:JSON.parse(b)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:b,label:R,default:S,max:L})=>{const I=(d.enabled_metrics||[]).find(U=>U.metric===b),q=(I==null?void 0:I.threshold)??S;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:!!I,onChange:U=>{const B=[...d.enabled_metrics||[]];if(U.target.checked)B.push({metric:b,threshold:S});else{const se=B.findIndex(T=>T.metric===b);se!==-1&&B.splice(se,1)}y({enabled_metrics:B})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,opacity:I?1:.5,minWidth:100},children:R}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:I?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:L===5?1:0,max:L,step:.1,value:q,disabled:!I,onChange:U=>{const B=[...d.enabled_metrics||[]],se=B.findIndex(T=>T.metric===b);se!==-1&&(B[se]={...B[se],threshold:parseFloat(U.target.value)||0},y({enabled_metrics:B}))},style:{width:60,textAlign:"center",opacity:I?1:.3,padding:"2px 4px",fontSize:11}})]},b)})}),s.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Custom Rubrics"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((b,R)=>s.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[s.jsx("input",{type:"text",value:b.rubric,onChange:S=>{const L=[...d.rubrics];L[R]={rubric:S.target.value},y({rubrics:L})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y({rubrics:d.rubrics.filter((S,L)=>L!==R)}),children:s.jsx($e,{size:12})})]},R)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({rubrics:[...d.rubrics,{rubric:""}]}),children:[s.jsx(Je,{size:12})," Add Rubric"]})]})]}),f==="docs"&&s.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[s.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),s.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),s.jsxs("p",{children:["Each test case simulates a ",s.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Response"})," = the agent's ",s.jsx("em",{children:"final text reply"})," for that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Session State"})," = test the ",s.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),s.jsxs("p",{children:["The ",s.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",s.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{style:{marginBottom:8},children:s.jsx("strong",{children:"During one turn, an agent may:"})}),s.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[s.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),s.jsx("li",{children:"Call multiple tools"}),s.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),s.jsxs("li",{children:["Finally send a ",s.jsx("em",{children:"concluding response"})]})]}),s.jsxs("p",{children:["Only the ",s.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"response_match_score"})," uses ",s.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),s.jsx("li",{children:"Calculates word overlap (not exact string match)"}),s.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{children:s.jsx("strong",{children:"Example:"})}),s.jsxs("p",{children:["Expected: ",s.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),s.jsxs("p",{children:["Actual: ",s.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),s.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),s.jsxs("p",{style:{marginTop:8},children:["A threshold of ",s.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),s.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),s.jsxs("p",{children:[s.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Set user preferences or context"}),s.jsx("li",{children:"Simulate a specific scenario"}),s.jsx("li",{children:"Test state-dependent behavior"})]}),s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Expected Final State"})," — Verified at the ",s.jsx("em",{children:"very end"})," of the test case, ",s.jsx("strong",{children:"after ALL invocations complete"}),"."]}),s.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:s.jsxs("p",{style:{margin:0},children:[s.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),s.jsxs("p",{children:["By default, tests run against the ",s.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),s.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:'"Does the response mention the product price?"'}),s.jsx("li",{children:'"Is the tone professional and helpful?"'}),s.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),s.jsx("tbody",{children:Object.keys(an).map(b=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:b}),s.jsx("td",{style:{padding:"8px 4px"},children:an[b].requiresJudge?s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),s.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:an[b].description})]},b))})]})]}),s.jsxs("section",{children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),s.jsxs("ul",{style:{marginLeft:20},children:[s.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),s.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),s.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),s.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),s.jsx("li",{children:"Use tags to organize tests by feature or priority"}),s.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),s.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx(Ft,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(_=d.tags)!=null&&_.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(b=>{var R;return{user_message:b.user_message,expected_response:b.expected_response||void 0,expected_tool_calls:(R=b.expected_tool_calls)!=null&&R.length?b.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(C=d.rubrics)!=null&&C.length?d.rubrics.map(b=>b.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var R,S;const b=JSON.stringify({name:d.name,description:d.description||void 0,tags:(R=d.tags)!=null&&R.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(L=>{var I;return{user_message:L.user_message,expected_response:L.expected_response||void 0,expected_tool_calls:(I=L.expected_tool_calls)!=null&&I.length?L.expected_tool_calls.map(q=>({tool_name:q.tool_name,args:q.match_type!=="name_only"&&Object.keys(q.args||{}).length?q.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(S=d.rubrics)!=null&&S.length?d.rubrics.map(L=>L.rubric):void 0},null,2);navigator.clipboard.writeText(b)},children:[s.jsx(ta,{size:14})," Copy JSON"]})})]})]}),r&&s.jsxs("div",{className:"result-panel",children:[s.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?s.jsxs(s.Fragment,{children:[s.jsx(xr,{size:18})," ",s.jsx("strong",{children:"Passed"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Zr,{size:18})," ",s.jsx("strong",{children:"Failed"})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[s.jsx(Fg,{size:12}),"View Session"]}),c&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),s.jsx("div",{className:"result-scores",children:r.metric_results.map((b,R)=>{var L;const S=ai(b.metric,b.score,b.threshold);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${b.passed?"passed":"failed"}`,children:S.value}),s.jsx("div",{className:"score-label",children:((L=an[b.metric])==null?void 0:L.name)||b.metric}),s.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:S.comparison}),b.error&&s.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:b.error})]},R)})}),r.rubric_results&&r.rubric_results.length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((b,R)=>s.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:b.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${b.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[s.jsx("span",{style:{fontSize:16,color:b.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:b.passed?"✓":"✗"}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:b.rubric}),b.error&&s.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",b.error]})]})]},R))})]}),r.invocation_results.map((b,R)=>s.jsxs("div",{className:"result-details",children:[s.jsxs("h5",{children:["Turn ",R+1,": ",b.user_message.length>50?b.user_message.slice(0,50)+"…":b.user_message]}),b.metric_results.length>0&&s.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:b.metric_results.map((S,L)=>{var q;const I=ai(S.metric,S.score,S.threshold);return s.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:S.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:S.passed?"var(--success)":"var(--error)"},children:[((q=an[S.metric])==null?void 0:q.name)||S.metric,": ",I.value]},L)})}),s.jsxs("div",{className:"detail-box",children:[s.jsx("strong",{children:"Actual Response:"}),`
`,b.actual_response||"(no response)",`

`,b.actual_tool_calls.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("strong",{children:"Tool Calls:"}),`
`,b.actual_tool_calls.map((S,L)=>`  ${L+1}. ${S.name}(${JSON.stringify(S.args)})
`).join("")]})]})]},R)),r.error&&s.jsxs("div",{className:"result-details",children:[s.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),s.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function LC({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:o,onDelete:a,onRun:l,onExport:c}){var j,E,v,x;const[u,d]=k.useState(e.name),[p,f]=k.useState(!1);k.useEffect(()=>{d(e.name)},[e.id]);const m=k.useCallback(()=>{u!==e.name&&o({name:u})},[u,e.name,o]),y=g=>g==null?"-":`${Math.round(g*100)}%`;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Ug,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("input",{type:"text",value:u,onChange:g=>d(g.target.value),onBlur:m,placeholder:"Eval set name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const g=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(g)},title:"Copy link to this eval set",children:s.jsx(vu,{size:14})}),s.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[s.jsx(dn,{size:14}),"JSON"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:s.jsx(hi,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?s.jsx(ri,{size:14,className:"spinning"}):s.jsx(Jn,{size:14}),"Run All"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx($e,{size:14})})]}),s.jsx("div",{className:"editor-content",children:p?s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),s.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx(Ft,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(g=>{var P,N;return{name:g.name,description:g.description||void 0,tags:(P=g.tags)!=null&&P.length?g.tags:void 0,target_agent:g.target_agent!=="root_agent"?g.target_agent:void 0,invocations:g.invocations.map(_=>{var C;return{user_message:_.user_message,expected_response:_.expected_response||void 0,expected_tool_calls:(C=_.expected_tool_calls)!=null&&C.length?_.expected_tool_calls.map(b=>({tool_name:b.tool_name,args:b.match_type!=="name_only"&&Object.keys(b.args||{}).length?b.args:void 0})):void 0}}),session_input:Object.keys(g.session_input||{}).length?{state:g.session_input}:void 0,final_session_state:Object.keys(g.final_session_state||{}).length?g.final_session_state:void 0,rubrics:(N=g.rubrics)!=null&&N.length?g.rubrics.map(_=>_.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((j=e.eval_config.metrics)==null?void 0:j.filter(g=>g.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var P;const g=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(N=>{var _,C;return{name:N.name,description:N.description||void 0,tags:(_=N.tags)!=null&&_.length?N.tags:void 0,target_agent:N.target_agent!=="root_agent"?N.target_agent:void 0,invocations:N.invocations.map(b=>{var R;return{user_message:b.user_message,expected_response:b.expected_response||void 0,expected_tool_calls:(R=b.expected_tool_calls)!=null&&R.length?b.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(N.session_input||{}).length?{state:N.session_input}:void 0,final_session_state:Object.keys(N.final_session_state||{}).length?N.final_session_state:void 0,rubrics:(C=N.rubrics)!=null&&C.length?N.rubrics.map(b=>b.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((P=e.eval_config.metrics)==null?void 0:P.filter(N=>N.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(g)},children:[s.jsx(ta,{size:14})," Copy JSON"]})})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:e.description,onChange:g=>o({description:g.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"LLM Judge Model"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),s.jsx(zC,{value:((E=e.eval_config)==null?void 0:E.judge_model)||"",onChange:g=>o({eval_config:{...e.eval_config,judge_model:g}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(Hg,{size:14})," Evaluation Metrics"]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(an).map(g=>{var b,R,S;const P=an[g],N=(R=(b=e.eval_config)==null?void 0:b.metrics)==null?void 0:R.find(L=>L.metric===g),_=(N==null?void 0:N.enabled)??!1,C=((S=N==null?void 0:N.criterion)==null?void 0:S.threshold)??.7;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:_,onChange:L=>{var U;const I=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],q=I.findIndex(B=>B.metric===g);L.target.checked?q===-1?I.push({metric:g,enabled:!0,criterion:{threshold:.7}}):I[q]={...I[q],enabled:!0}:q!==-1&&(I[q]={...I[q],enabled:!1}),o({eval_config:{...e.eval_config,metrics:I}})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsxs("span",{style:{fontSize:12,opacity:_?1:.5,minWidth:140,fontWeight:_?500:400},children:[P.name,P.requiresJudge&&s.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:_?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:0,max:1,step:.1,value:C,disabled:!_,onChange:L=>{var U;const I=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],q=I.findIndex(B=>B.metric===g);q!==-1&&(I[q]={...I[q],criterion:{...I[q].criterion,threshold:parseFloat(L.target.value)||.7}},o({eval_config:{...e.eval_config,metrics:I}}))},style:{width:60,textAlign:"center",opacity:_?1:.3,padding:"2px 4px",fontSize:11}})]},g)}),s.jsxs("div",{className:"form-row",style:{marginTop:16},children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Default Trajectory Match Type"}),s.jsxs("select",{value:((v=e.eval_config)==null?void 0:v.default_trajectory_match_type)||"in_order",onChange:g=>o({eval_config:{...e.eval_config,default_trajectory_match_type:g.target.value}}),children:[s.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),s.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),s.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Number of Runs"}),s.jsx("input",{type:"number",min:1,max:10,value:((x=e.eval_config)==null?void 0:x.num_runs)||1,onChange:g=>o({eval_config:{...e.eval_config,num_runs:parseInt(g.target.value)||1}})}),s.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(pb,{size:14})," Coverage Summary"]}),n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"result-scores",children:[s.jsxs("div",{className:"score-card",children:[s.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),s.jsx("div",{className:"score-label",children:"Cases Passed"})]}),s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:y(n.overall_pass_rate)}),s.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([g,P])=>{var _;const N=ai(g,P);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:"score-value",children:N.value}),s.jsxs("div",{className:"score-label",children:["Avg ",((_=an[g])==null?void 0:_.name)||g]})]},g)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([g,P])=>{var N;return s.jsxs("div",{style:{marginBottom:8},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[s.jsx("span",{children:((N=an[g])==null?void 0:N.name)||g}),s.jsx("span",{children:y(P)})]}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${P>=.8?"passed":"failed"}`,style:{width:`${P*100}%`}})})]},g)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),s.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),s.jsx("tbody",{children:n.case_results.map(g=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px"},children:g.eval_case_name}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:g.metric_results.map((P,N)=>{const _=ai(P.metric,P.score,P.threshold);return s.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:P.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:P.passed?"var(--success)":"var(--error)"},children:_.value},N)})}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:g.passed?s.jsx(xr,{size:14,style:{color:"var(--success)"}}):g.error?s.jsx(Eo,{size:14,style:{color:"var(--warning)"}}):s.jsx(Zr,{size:14,style:{color:"var(--error)"}})})]},g.eval_case_id))})]})]})]}):s.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[s.jsx(ku,{size:32,style:{marginBottom:8,opacity:.3}}),s.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):s.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(g=>{const P=i.get(g.id);return s.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[P?P.passed?s.jsx(xr,{size:14,style:{color:"var(--success)"}}):s.jsx(Zr,{size:14,style:{color:"var(--error)"}}):s.jsx(zo,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{style:{flex:1},children:g.name}),s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[g.invocations.length," turn(s)"]})]},g.id)})})]})]})})]})}function AC(){const{project:e,setProject:t}=ct(),[n,r]=k.useState(""),[i,o]=k.useState(!0),[a,l]=k.useState(!1),[c,u]=k.useState(null),[d,p]=k.useState(!1);if(!e)return null;k.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const x=await Ng(e.id);r(x),l(!1)}catch(x){u(x.message)}finally{o(!1)}}function m(x){x!==void 0&&(r(x),l(!0),u(null))}async function y(){o(!0),u(null);try{const x=await Eg(e.id,n);t(x),l(!1)}catch(x){u(x.message)}finally{o(!1)}}function j(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function E(){const x=new Blob([n],{type:"text/yaml"}),g=URL.createObjectURL(x),P=document.createElement("a");P.href=g,P.download=`${e.name}.yaml`,P.click(),URL.revokeObjectURL(g)}function v(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async g=>{var _;const P=(_=g.target.files)==null?void 0:_[0];if(!P)return;const N=await P.text();r(N),l(!0)},x.click()}return s.jsxs("div",{className:"yaml-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"yaml-header",children:[s.jsxs("div",{className:"yaml-title",children:[s.jsx("h3",{children:"Project Configuration"}),a&&s.jsxs("span",{className:"status-badge warning",children:[s.jsx(Eo,{size:12}),"Unsaved changes"]}),c&&s.jsxs("span",{className:"status-badge error",children:[s.jsx(Eo,{size:12}),c]}),d&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(hu,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"yaml-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,title:"Copy to clipboard",children:[s.jsx(ta,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:E,title:"Download YAML",children:[s.jsx(hi,{size:14}),"Download"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:v,title:"Upload YAML",children:[s.jsx(na,{size:14}),"Upload"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[s.jsx(ln,{size:14}),"Reload"]}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:y,disabled:!a||i,children:"Apply Changes"})]})]}),s.jsx("div",{className:"yaml-editor",children:s.jsx(Ft,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"yaml-info",children:[s.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),s.jsxs("p",{children:["You can edit the YAML directly, then click ",s.jsx("code",{children:"Apply Changes"})," to update the project. Use ",s.jsx("code",{children:"Download"})," to save a backup or ",s.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function Vf(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function RC(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function MC(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const i=t.agents.find(o=>o.id===e.agent_id);return i?`AgentTool(agent=${i.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const i=e.skillset_id,o=(r=t.skillsets)==null?void 0:r.find(a=>a.id===i);return o?`${o.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function IC(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${Vf(i.instruction)}"""`),i.description&&o.push(`description="${Vf(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(c=>MC(c,t)).filter(c=>c&&!c.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const l={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(l)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(y=>y.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(y=>y.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${u}="${m}"`)}else o.push(`${u}=[${p}]`)}}return`${r} = Agent(
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
)`}return`# Unknown agent type: ${e.type}`}function OC(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        ),"),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")),t.join(`
`)}function $C(e,t){const n=[];return n.push(`# SkillSet: ${e.name}`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager = KnowledgeServiceManager()`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset = SkillSet(`),n.push(`    skillset_id="${e.id}",`),n.push(`    project_id="${t.id}",`),n.push(`    manager=${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager,`),e.embedding_model?n.push(`    model_name="${e.embedding_model}",`):n.push('    model_name="text-embedding-004",'),n.push(`    search_enabled=${e.search_enabled?"True":"False"},`),n.push(`    preload_enabled=${e.preload_enabled?"True":"False"},`),e.preload_top_k&&n.push(`    preload_top_k=${e.preload_top_k},`),e.preload_min_score&&n.push(`    preload_min_score=${e.preload_min_score},`),n.push(")"),n.join(`
`)}function DC(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(C=>{const b=n[C];if(b){const S=C.toLowerCase().includes("key")||C.toLowerCase().includes("secret")?"***":b;t.push(`os.environ["${C}"] = "${S}"  # Set your ${C}`)}else t.push(`# os.environ["${C}"] = ""  # TODO: Set your ${C}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(C=>C.type==="SequentialAgent"),a=e.agents.some(C=>C.type==="LoopAgent"),l=e.agents.some(C=>C.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),l&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(C=>{var b;return C.type==="LlmAgent"&&((b=C.model)==null?void 0:b.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(C=>C.type==="LlmAgent"&&C.tools.some(b=>b.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(b=>{b.type==="builtin"&&b.name&&d.add(b.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){i.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const C=e.mcp_servers.some(R=>R.connection_type==="stdio"),b=e.mcp_servers.some(R=>R.connection_type==="sse");C&&(i.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),i.add("from mcp import StdioServerParameters")),b&&i.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(C=>{"tools"in C&&C.tools&&C.tools.forEach(b=>{b.type==="skillset"&&f.add(b.skillset_id)})}),f.size>0&&(i.add("from skillset import SkillSet"),i.add("from knowledge_service import KnowledgeServiceManager")),i.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(C=>{C.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const y=Array.from(i).sort();t.push(...y),t.push(""),t.push("");const j=new Map;e.agents.forEach(C=>{const b=C.name.endsWith("_agent")?C.name:`${C.name}_agent`;j.set(C.id,b)});const E=[],v=new Set;function x(C){if(v.has(C))return;const b=e.agents.find(R=>R.id===C);b&&(b.sub_agents.forEach(R=>x(R)),v.add(C),E.push(b))}e.agents.forEach(C=>x(C.id));const g=new Map;E.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(b=>{b.type==="mcp"&&b.server&&g.set(b.server.name,b.server)})}),g.size>0&&(t.push("# MCP Server Toolsets"),g.forEach(C=>{t.push(OC(C)),t.push("")}),t.push(""));const P=new Set;E.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(b=>{b.type==="skillset"&&P.add(b.skillset_id)})}),P.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),P.forEach(C=>{var R;const b=(R=e.skillsets)==null?void 0:R.find(S=>S.id===C);b&&(t.push($C(b,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(C=>{t.push(C.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(C=>{t.push(C.code),t.push("")}),t.push("")),t.push("# Models"),E.forEach(C=>{C.type==="LlmAgent"&&C.model&&(t.push(RC(C.model,`${C.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),E.forEach(C=>{t.push(IC(C,e,j)),t.push("")});const N=e.agents.find(C=>C.id===e.app.root_agent_id),_=N?j.get(N.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${_},`),m){const C=e.app.plugins.map(b=>b.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${b.max_retries||3})`:`        # ${b.type}()`);t.push("    plugins=["),t.push(C.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function FC(){const{project:e}=ct(),[t,n]=k.useState(!1);if(!e)return null;const r=k.useMemo(()=>DC(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(l)}return s.jsxs("div",{className:"code-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"code-header",children:[s.jsxs("div",{className:"code-title",children:[s.jsx(dn,{size:16}),s.jsx("h3",{children:"Python Code"}),s.jsx("span",{className:"badge",children:"Generated"}),t&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(hu,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[s.jsx(ta,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[s.jsx(hi,{size:14}),"Download"]})]})]}),s.jsx("div",{className:"code-editor",children:s.jsx(Ft,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"code-info",children:[s.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),s.jsxs("p",{children:["Place this in a file named ",s.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",s.jsx("code",{children:"adk web ."})," or ",s.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const BC=[{id:"app",label:"App",icon:Hg},{id:"agents",label:"Agents",icon:dr},{id:"tools",label:"Tools",icon:Xt},{id:"callbacks",label:"Callbacks",icon:dn},{id:"run",label:"Run",icon:Vg},{id:"skillsets",label:"SkillSets",icon:nb},{id:"eval",label:"Evaluate",icon:rc},{id:"yaml",label:"YAML",icon:sb},{id:"code",label:"Code",icon:dn}],UC=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function nl(){var B,se;const{projectId:e,tab:t,itemId:n}=n0(),r=fu(),{project:i,setProject:o,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=ct(),[y,j]=k.useState(!0),[E,v]=k.useState(!1),[x,g]=k.useState(!1),[P,N]=k.useState(null),_=k.useRef(!0),C=k.useRef(null);k.useEffect(()=>{t&&UC.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),k.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function b(T){l(T),T==="agents"&&d?r(`/project/${e}/${T}/${d}`,{replace:!0}):T==="tools"&&f?r(`/project/${e}/${T}/${f}`,{replace:!0}):r(`/project/${e}/${T}`,{replace:!0})}function R(T){T?r(`/project/${e}/${a}/${T}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}k.useEffect(()=>(e&&S(e),()=>{o(null),u(!1)}),[e]);async function S(T){_.current=!0;try{const $=await wg(T);o($),C.current=JSON.stringify($),u(!1)}catch($){console.error("Failed to load project:",$),r("/")}finally{j(!1),setTimeout(()=>{_.current=!1},100)}}async function L(){if(i){v(!0);try{const{eval_sets:T,...$}=i;await Xl(i.id,$),C.current=JSON.stringify(i),u(!1)}catch(T){console.error("Failed to save project:",T)}finally{v(!1)}}}async function I(){if(i){g(!0),N(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let T=0,$=0;const M=[],w=[];for(const V of i.eval_sets||[]){if(V.eval_cases.length===0)continue;const Q=await He.post(`/projects/${i.id}/eval-sets/${V.id}/run`,{});Q.result&&(T+=Q.result.passed_cases||0,$+=Q.result.total_cases||0,Q.result.case_results&&M.push(...Q.result.case_results),w.push(Q.result.eval_set_name||V.name||V.id))}if(M.length>0){const V={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:w.length>1?`All Tests (${w.length} sets)`:w[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:$,passed_cases:T,failed_cases:$-T,case_results:M};try{await He.post(`/projects/${i.id}/eval-history`,V)}catch(Q){console.warn("Failed to save batch eval run to history:",Q)}}N({passed:T,total:$}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>N(null),5e3)}catch(T){console.error("Failed to run tests:",T),N({passed:0,total:-1}),setTimeout(()=>N(null),5e3)}finally{g(!1)}}}const q=k.useRef(null);k.useEffect(()=>{if(i&&!_.current&&q.current){const T=i.app.models||[],$=q.current||[];if(T.some((w,V)=>{const Q=$.find(h=>h.id===w.id);return Q?Q.provider!==w.provider||Q.model_name!==w.model_name||Q.api_base!==w.api_base||Q.temperature!==w.temperature||Q.max_output_tokens!==w.max_output_tokens||Q.top_p!==w.top_p||Q.top_k!==w.top_k:!1})){const w=i.app.default_model_id,V=i.agents.map(h=>{if(h.type==="LlmAgent"&&h.model){const F=h.model._appModelId;if(F){const z=T.find(G=>G.id===F);if(z)return{...h,model:{provider:z.provider,model_name:z.model_name,api_base:z.api_base,temperature:z.temperature,max_output_tokens:z.max_output_tokens,top_p:z.top_p,top_k:z.top_k,fallbacks:[],_appModelId:F}}}else if(w){const z=T.find(G=>G.id===w);if(z&&h.model.provider===z.provider&&h.model.model_name===z.model_name&&h.model.api_base===z.api_base)return{...h,model:{provider:z.provider,model_name:z.model_name,api_base:z.api_base,temperature:z.temperature,max_output_tokens:z.max_output_tokens,top_p:z.top_p,top_k:z.top_k,fallbacks:[],_appModelId:w}}}}return h});V.some((h,F)=>JSON.stringify(h)!==JSON.stringify(i.agents[F]))&&o({...i,agents:V})}}i&&(q.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const U=k.useRef(null);return k.useEffect(()=>(i&&!_.current&&C.current&&JSON.stringify(i)!==C.current&&(u(!0),U.current&&clearTimeout(U.current),U.current=setTimeout(async()=>{try{const{eval_sets:$,...M}=i;await Xl(i.id,M),C.current=JSON.stringify(i),u(!1)}catch($){console.error("Auto-save failed:",$)}},500)),()=>{U.current&&clearTimeout(U.current)}),[i]),y?s.jsxs("div",{className:"loading-screen",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"top-bar",children:[s.jsxs("div",{className:"top-bar-left",children:[s.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[s.jsx(eb,{size:18}),"Project"]}),s.jsx("h1",{className:"project-name",children:i.name})]}),s.jsx("nav",{className:"tabs-bar",children:BC.map(T=>s.jsxs("button",{className:`tab-btn ${a===T.id?"active":""}`,onClick:()=>b(T.id),children:[s.jsx(T.icon,{size:14}),T.label]},T.id))}),s.jsxs("div",{className:"top-bar-right",children:[s.jsxs("button",{className:`btn ${P?P.total===-1?"btn-error":P.passed===P.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:I,disabled:x||!((B=i==null?void 0:i.eval_sets)!=null&&B.some(T=>T.eval_cases.length>0)),title:(se=i==null?void 0:i.eval_sets)!=null&&se.some(T=>T.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[x?s.jsx(cb,{size:16,className:"spin"}):s.jsx(Jn,{size:16}),x?"Testing...":P?P.total===-1?"Error":`${P.passed}/${P.total}`:"Test"]}),s.jsxs("button",{className:"btn btn-primary",onClick:L,disabled:E,children:[s.jsx(Po,{size:16}),E?"Saving...":"Save"]})]})]}),s.jsxs("main",{className:"main-content",children:[a==="app"&&s.jsx(_b,{}),a==="agents"&&s.jsx(PS,{onSelectAgent:R}),a==="tools"&&s.jsx(dC,{onSelectTool:R}),a==="callbacks"&&s.jsx(fC,{onSelectCallback:R}),a==="run"&&s.jsx(jC,{}),a==="skillsets"&&s.jsx(CC,{}),a==="eval"&&s.jsx(EC,{}),a==="yaml"&&s.jsx(AC,{}),a==="code"&&s.jsx(FC,{})]})]}):null}function VC(){const{setMcpServers:e,setBuiltinTools:t}=ct();return k.useEffect(()=>{mu().then(e).catch(console.error),zg().then(t).catch(console.error)},[e,t]),s.jsxs(v0,{children:[s.jsx(jr,{path:"/",element:s.jsx(xb,{})}),s.jsx(jr,{path:"/project/:projectId",element:s.jsx(nl,{})}),s.jsx(jr,{path:"/project/:projectId/:tab",element:s.jsx(nl,{})}),s.jsx(jr,{path:"/project/:projectId/:tab/:itemId",element:s.jsx(nl,{})}),s.jsx(jr,{path:"*",element:s.jsx(x0,{to:"/",replace:!0})})]})}rl.createRoot(document.getElementById("root")).render(s.jsx(zt.StrictMode,{children:s.jsx(w0,{children:s.jsx(VC,{})})}));
