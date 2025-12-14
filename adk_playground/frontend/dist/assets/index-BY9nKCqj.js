function uy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qf={exports:{}},$o={},Jf={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var li=Symbol.for("react.element"),dy=Symbol.for("react.portal"),py=Symbol.for("react.fragment"),fy=Symbol.for("react.strict_mode"),my=Symbol.for("react.profiler"),hy=Symbol.for("react.provider"),gy=Symbol.for("react.context"),xy=Symbol.for("react.forward_ref"),yy=Symbol.for("react.suspense"),vy=Symbol.for("react.memo"),by=Symbol.for("react.lazy"),vd=Symbol.iterator;function ky(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var Kf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gf=Object.assign,Qf={};function es(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Kf}es.prototype.isReactComponent={};es.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};es.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yf(){}Yf.prototype=es.prototype;function bc(e,t,n){this.props=e,this.context=t,this.refs=Qf,this.updater=n||Kf}var kc=bc.prototype=new Yf;kc.constructor=bc;Gf(kc,es.prototype);kc.isPureReactComponent=!0;var bd=Array.isArray,Xf=Object.prototype.hasOwnProperty,wc={current:null},Zf={key:!0,ref:!0,__self:!0,__source:!0};function em(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Xf.call(t,r)&&!Zf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:li,type:e,key:o,ref:a,props:i,_owner:wc.current}}function wy(e,t){return{$$typeof:li,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jc(e){return typeof e=="object"&&e!==null&&e.$$typeof===li}function jy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var kd=/\/+/g;function ma(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jy(""+e.key):t.toString(36)}function Ui(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case li:case dy:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ma(a,0):r,bd(i)?(n="",e!=null&&(n=e.replace(kd,"$&/")+"/"),Ui(i,t,n,"",function(u){return u})):i!=null&&(jc(i)&&(i=wy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(kd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",bd(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+ma(o,l);a+=Ui(o,t,n,c,i)}else if(c=ky(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+ma(o,l++),a+=Ui(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function bi(e,t,n){if(e==null)return e;var r=[],i=0;return Ui(e,r,"","",function(o){return t.call(n,o,i++)}),r}function _y(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ht={current:null},Vi={transition:null},Sy={ReactCurrentDispatcher:ht,ReactCurrentBatchConfig:Vi,ReactCurrentOwner:wc};function tm(){throw Error("act(...) is not supported in production builds of React.")}Se.Children={map:bi,forEach:function(e,t,n){bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bi(e,function(){t++}),t},toArray:function(e){return bi(e,function(t){return t})||[]},only:function(e){if(!jc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Se.Component=es;Se.Fragment=py;Se.Profiler=my;Se.PureComponent=bc;Se.StrictMode=fy;Se.Suspense=yy;Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;Se.act=tm;Se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gf({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=wc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Xf.call(t,c)&&!Zf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:li,type:e.type,key:i,ref:o,props:r,_owner:a}};Se.createContext=function(e){return e={$$typeof:gy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hy,_context:e},e.Consumer=e};Se.createElement=em;Se.createFactory=function(e){var t=em.bind(null,e);return t.type=e,t};Se.createRef=function(){return{current:null}};Se.forwardRef=function(e){return{$$typeof:xy,render:e}};Se.isValidElement=jc;Se.lazy=function(e){return{$$typeof:by,_payload:{_status:-1,_result:e},_init:_y}};Se.memo=function(e,t){return{$$typeof:vy,type:e,compare:t===void 0?null:t}};Se.startTransition=function(e){var t=Vi.transition;Vi.transition={};try{e()}finally{Vi.transition=t}};Se.unstable_act=tm;Se.useCallback=function(e,t){return ht.current.useCallback(e,t)};Se.useContext=function(e){return ht.current.useContext(e)};Se.useDebugValue=function(){};Se.useDeferredValue=function(e){return ht.current.useDeferredValue(e)};Se.useEffect=function(e,t){return ht.current.useEffect(e,t)};Se.useId=function(){return ht.current.useId()};Se.useImperativeHandle=function(e,t,n){return ht.current.useImperativeHandle(e,t,n)};Se.useInsertionEffect=function(e,t){return ht.current.useInsertionEffect(e,t)};Se.useLayoutEffect=function(e,t){return ht.current.useLayoutEffect(e,t)};Se.useMemo=function(e,t){return ht.current.useMemo(e,t)};Se.useReducer=function(e,t,n){return ht.current.useReducer(e,t,n)};Se.useRef=function(e){return ht.current.useRef(e)};Se.useState=function(e){return ht.current.useState(e)};Se.useSyncExternalStore=function(e,t,n){return ht.current.useSyncExternalStore(e,t,n)};Se.useTransition=function(){return ht.current.useTransition()};Se.version="18.3.1";Jf.exports=Se;var b=Jf.exports;const Tt=Oo(b),Cy=uy({__proto__:null,default:Tt},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=b,Ey=Symbol.for("react.element"),zy=Symbol.for("react.fragment"),Ty=Object.prototype.hasOwnProperty,Py=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ly={key:!0,ref:!0,__self:!0,__source:!0};function nm(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ty.call(t,r)&&!Ly.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ey,type:e,key:o,ref:a,props:i,_owner:Py.current}}$o.Fragment=zy;$o.jsx=nm;$o.jsxs=nm;qf.exports=$o;var s=qf.exports,al={},rm={exports:{}},At={},sm={exports:{}},im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,M){var w=$.length;$.push(M);e:for(;0<w;){var V=w-1>>>1,Q=$[V];if(0<i(Q,M))$[V]=M,$[w]=Q,w=V;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var M=$[0],w=$.pop();if(w!==M){$[0]=w;e:for(var V=0,Q=$.length,h=Q>>>1;V<h;){var D=2*(V+1)-1,E=$[D],G=D+1,ge=$[G];if(0>i(E,w))G<Q&&0>i(ge,E)?($[V]=ge,$[G]=w,V=G):($[V]=E,$[D]=w,V=D);else if(G<Q&&0>i(ge,w))$[V]=ge,$[G]=w,V=G;else break e}}return M}function i($,M){var w=$.sortIndex-M.sortIndex;return w!==0?w:$.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,y=!1,j=!1,z=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g($){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=$)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function T($){if(j=!1,g($),!y)if(n(c)!==null)y=!0,se(N);else{var M=n(u);M!==null&&P(T,M.startTime-$)}}function N($,M){y=!1,j&&(j=!1,v(k),k=-1),m=!0;var w=f;try{for(g(M),p=n(c);p!==null&&(!(p.expirationTime>M)||$&&!L());){var V=p.callback;if(typeof V=="function"){p.callback=null,f=p.priorityLevel;var Q=V(p.expirationTime<=M);M=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(c)&&r(c),g(M)}else r(c);p=n(c)}if(p!==null)var h=!0;else{var D=n(u);D!==null&&P(T,D.startTime-M),h=!1}return h}finally{p=null,f=w,m=!1}}var _=!1,C=null,k=-1,R=5,S=-1;function L(){return!(e.unstable_now()-S<R)}function I(){if(C!==null){var $=e.unstable_now();S=$;var M=!0;try{M=C(!0,$)}finally{M?q():(_=!1,C=null)}}else _=!1}var q;if(typeof x=="function")q=function(){x(I)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,B=U.port2;U.port1.onmessage=I,q=function(){B.postMessage(null)}}else q=function(){z(I,0)};function se($){C=$,_||(_=!0,q())}function P($,M){k=z(function(){$(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,se(N))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var w=f;f=M;try{return $()}finally{f=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,M){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var w=f;f=$;try{return M()}finally{f=w}},e.unstable_scheduleCallback=function($,M,w){var V=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?V+w:V):w=V,$){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=w+Q,$={id:d++,callback:M,priorityLevel:$,startTime:w,expirationTime:Q,sortIndex:-1},w>V?($.sortIndex=w,t(u,$),n(c)===null&&$===n(u)&&(j?(v(k),k=-1):j=!0,P(T,w-V))):($.sortIndex=Q,t(c,$),y||m||(y=!0,se(N))),$},e.unstable_shouldYield=L,e.unstable_wrapCallback=function($){var M=f;return function(){var w=f;f=M;try{return $.apply(this,arguments)}finally{f=w}}}})(im);sm.exports=im;var Ay=sm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry=b,Lt=Ay;function te(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var om=new Set,$s={};function yr(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for($s[e]=t,e=0;e<t.length;e++)om.add(t[e])}var wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=Object.prototype.hasOwnProperty,My=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wd={},jd={};function Iy(e){return ll.call(jd,e)?!0:ll.call(wd,e)?!1:My.test(e)?jd[e]=!0:(wd[e]=!0,!1)}function Oy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $y(e,t,n,r){if(t===null||typeof t>"u"||Oy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){it[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];it[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){it[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){it[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){it[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){it[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){it[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){it[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){it[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var _c=/[\-:]([a-z])/g;function Sc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_c,Sc);it[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_c,Sc);it[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_c,Sc);it[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){it[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});it.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){it[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cc(e,t,n,r){var i=it.hasOwnProperty(t)?it[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($y(t,n,i,r)&&(n=null),r||i===null?Iy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Cn=Ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ki=Symbol.for("react.element"),_r=Symbol.for("react.portal"),Sr=Symbol.for("react.fragment"),Nc=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),lm=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),zc=Symbol.for("react.memo"),Tn=Symbol.for("react.lazy"),cm=Symbol.for("react.offscreen"),_d=Symbol.iterator;function as(e){return e===null||typeof e!="object"?null:(e=_d&&e[_d]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,ha;function bs(e){if(ha===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ha=t&&t[1]||""}return`
`+ha+e}var ga=!1;function xa(e,t){if(!e||ga)return"";ga=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ga=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bs(e):""}function Dy(e){switch(e.tag){case 5:return bs(e.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return e=xa(e.type,!1),e;case 11:return e=xa(e.type.render,!1),e;case 1:return e=xa(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Sr:return"Fragment";case _r:return"Portal";case cl:return"Profiler";case Nc:return"StrictMode";case ul:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lm:return(e.displayName||"Context")+".Consumer";case am:return(e._context.displayName||"Context")+".Provider";case Ec:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zc:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case Tn:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function Fy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===Nc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function um(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function By(e){var t=um(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=By(e))}function dm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=um(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function so(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,t){var n=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pm(e,t){t=t.checked,t!=null&&Cc(e,"checked",t,!1)}function ml(e,t){pm(e,t);var n=Jn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,Jn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||so(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ks=Array.isArray;function Or(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(te(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Nd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(te(92));if(ks(n)){if(1<n.length)throw Error(te(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jn(n)}}function fm(e,t){var n=Jn(t.value),r=Jn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ed(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ji,hm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ds(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uy=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(e){Uy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ss[t]=Ss[e]})});function gm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ss.hasOwnProperty(e)&&Ss[e]?(""+t).trim():t+"px"}function xm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Vy=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,t){if(t){if(Vy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(te(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(te(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(te(61))}if(t.style!=null&&typeof t.style!="object")throw Error(te(62))}}function vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function Tc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,$r=null,Dr=null;function zd(e){if(e=di(e)){if(typeof kl!="function")throw Error(te(280));var t=e.stateNode;t&&(t=Vo(t),kl(e.stateNode,e.type,t))}}function ym(e){$r?Dr?Dr.push(e):Dr=[e]:$r=e}function vm(){if($r){var e=$r,t=Dr;if(Dr=$r=null,zd(e),t)for(e=0;e<t.length;e++)zd(t[e])}}function bm(e,t){return e(t)}function km(){}var ya=!1;function wm(e,t,n){if(ya)return e(t,n);ya=!0;try{return bm(e,t,n)}finally{ya=!1,($r!==null||Dr!==null)&&(km(),vm())}}function Fs(e,t){var n=e.stateNode;if(n===null)return null;var r=Vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(te(231,t,typeof n));return n}var wl=!1;if(wn)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){wl=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{wl=!1}function Wy(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Cs=!1,io=null,oo=!1,jl=null,Hy={onError:function(e){Cs=!0,io=e}};function qy(e,t,n,r,i,o,a,l,c){Cs=!1,io=null,Wy.apply(Hy,arguments)}function Jy(e,t,n,r,i,o,a,l,c){if(qy.apply(this,arguments),Cs){if(Cs){var u=io;Cs=!1,io=null}else throw Error(te(198));oo||(oo=!0,jl=u)}}function vr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Td(e){if(vr(e)!==e)throw Error(te(188))}function Ky(e){var t=e.alternate;if(!t){if(t=vr(e),t===null)throw Error(te(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Td(i),e;if(o===r)return Td(i),t;o=o.sibling}throw Error(te(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==r)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?e:t}function _m(e){return e=Ky(e),e!==null?Sm(e):null}function Sm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sm(e);if(t!==null)return t;e=e.sibling}return null}var Cm=Lt.unstable_scheduleCallback,Pd=Lt.unstable_cancelCallback,Gy=Lt.unstable_shouldYield,Qy=Lt.unstable_requestPaint,He=Lt.unstable_now,Yy=Lt.unstable_getCurrentPriorityLevel,Pc=Lt.unstable_ImmediatePriority,Nm=Lt.unstable_UserBlockingPriority,ao=Lt.unstable_NormalPriority,Xy=Lt.unstable_LowPriority,Em=Lt.unstable_IdlePriority,Do=null,dn=null;function Zy(e){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Do,e,void 0,(e.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:nv,ev=Math.log,tv=Math.LN2;function nv(e){return e>>>=0,e===0?32:31-(ev(e)/tv|0)|0}var _i=64,Si=4194304;function ws(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ws(l):(o&=a,o!==0&&(r=ws(o)))}else a=n&~i,a!==0?r=ws(a):o!==0&&(r=ws(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Xt(t),i=1<<n,r|=e[n],t&=~i;return r}function rv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Xt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=rv(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zm(){var e=_i;return _i<<=1,!(_i&4194240)&&(_i=64),e}function va(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xt(t),e[t]=n}function iv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Lc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ze=0;function Tm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pm,Ac,Lm,Am,Rm,Sl=!1,Ci=[],$n=null,Dn=null,Fn=null,Bs=new Map,Us=new Map,Ln=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ld(e,t){switch(e){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Bs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Us.delete(t.pointerId)}}function cs(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=di(t),t!==null&&Ac(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function av(e,t,n,r,i){switch(t){case"focusin":return $n=cs($n,e,t,n,r,i),!0;case"dragenter":return Dn=cs(Dn,e,t,n,r,i),!0;case"mouseover":return Fn=cs(Fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Bs.set(o,cs(Bs.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Us.set(o,cs(Us.get(o)||null,e,t,n,r,i)),!0}return!1}function Mm(e){var t=ir(e.target);if(t!==null){var n=vr(t);if(n!==null){if(t=n.tag,t===13){if(t=jm(n),t!==null){e.blockedOn=t,Rm(e.priority,function(){Lm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);bl=r,n.target.dispatchEvent(r),bl=null}else return t=di(n),t!==null&&Ac(t),e.blockedOn=n,!1;t.shift()}return!0}function Ad(e,t,n){Wi(e)&&n.delete(t)}function lv(){Sl=!1,$n!==null&&Wi($n)&&($n=null),Dn!==null&&Wi(Dn)&&(Dn=null),Fn!==null&&Wi(Fn)&&(Fn=null),Bs.forEach(Ad),Us.forEach(Ad)}function us(e,t){e.blockedOn===t&&(e.blockedOn=null,Sl||(Sl=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,lv)))}function Vs(e){function t(i){return us(i,e)}if(0<Ci.length){us(Ci[0],e);for(var n=1;n<Ci.length;n++){var r=Ci[n];r.blockedOn===e&&(r.blockedOn=null)}}for($n!==null&&us($n,e),Dn!==null&&us(Dn,e),Fn!==null&&us(Fn,e),Bs.forEach(t),Us.forEach(t),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)Mm(n),n.blockedOn===null&&Ln.shift()}var Fr=Cn.ReactCurrentBatchConfig,co=!0;function cv(e,t,n,r){var i=ze,o=Fr.transition;Fr.transition=null;try{ze=1,Rc(e,t,n,r)}finally{ze=i,Fr.transition=o}}function uv(e,t,n,r){var i=ze,o=Fr.transition;Fr.transition=null;try{ze=4,Rc(e,t,n,r)}finally{ze=i,Fr.transition=o}}function Rc(e,t,n,r){if(co){var i=Cl(e,t,n,r);if(i===null)za(e,t,r,uo,n),Ld(e,r);else if(av(i,e,t,n,r))r.stopPropagation();else if(Ld(e,r),t&4&&-1<ov.indexOf(e)){for(;i!==null;){var o=di(i);if(o!==null&&Pm(o),o=Cl(e,t,n,r),o===null&&za(e,t,r,uo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else za(e,t,r,null,n)}}var uo=null;function Cl(e,t,n,r){if(uo=null,e=Tc(r),e=ir(e),e!==null)if(t=vr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return uo=e,null}function Im(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yy()){case Pc:return 1;case Nm:return 4;case ao:case Xy:return 16;case Em:return 536870912;default:return 16}default:return 16}}var Rn=null,Mc=null,Hi=null;function Om(){if(Hi)return Hi;var e,t=Mc,n=t.length,r,i="value"in Rn?Rn.value:Rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Hi=i.slice(e,1<r?1-r:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Rd(){return!1}function Rt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ni:Rd,this.isPropagationStopped=Rd,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=Rt(ts),ui=Ve({},ts,{view:0,detail:0}),dv=Rt(ui),ba,ka,ds,Fo=Ve({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ds&&(ds&&e.type==="mousemove"?(ba=e.screenX-ds.screenX,ka=e.screenY-ds.screenY):ka=ba=0,ds=e),ba)},movementY:function(e){return"movementY"in e?e.movementY:ka}}),Md=Rt(Fo),pv=Ve({},Fo,{dataTransfer:0}),fv=Rt(pv),mv=Ve({},ui,{relatedTarget:0}),wa=Rt(mv),hv=Ve({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=Rt(hv),xv=Ve({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yv=Rt(xv),vv=Ve({},ts,{data:0}),Id=Rt(vv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wv[e])?!!t[e]:!1}function Oc(){return jv}var _v=Ve({},ui,{key:function(e){if(e.key){var t=bv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sv=Rt(_v),Cv=Ve({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=Rt(Cv),Nv=Ve({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),Ev=Rt(Nv),zv=Ve({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=Rt(zv),Pv=Ve({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lv=Rt(Pv),Av=[9,13,27,32],$c=wn&&"CompositionEvent"in window,Ns=null;wn&&"documentMode"in document&&(Ns=document.documentMode);var Rv=wn&&"TextEvent"in window&&!Ns,$m=wn&&(!$c||Ns&&8<Ns&&11>=Ns),$d=" ",Dd=!1;function Dm(e,t){switch(e){case"keyup":return Av.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function Mv(e,t){switch(e){case"compositionend":return Fm(t);case"keypress":return t.which!==32?null:(Dd=!0,$d);case"textInput":return e=t.data,e===$d&&Dd?null:e;default:return null}}function Iv(e,t){if(Cr)return e==="compositionend"||!$c&&Dm(e,t)?(e=Om(),Hi=Mc=Rn=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $m&&t.locale!=="ko"?null:t.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ov[e.type]:t==="textarea"}function Bm(e,t,n,r){ym(r),t=po(t,"onChange"),0<t.length&&(n=new Ic("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Es=null,Ws=null;function $v(e){Xm(e,0)}function Bo(e){var t=zr(e);if(dm(t))return e}function Dv(e,t){if(e==="change")return t}var Um=!1;if(wn){var ja;if(wn){var _a="oninput"in document;if(!_a){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),_a=typeof Bd.oninput=="function"}ja=_a}else ja=!1;Um=ja&&(!document.documentMode||9<document.documentMode)}function Ud(){Es&&(Es.detachEvent("onpropertychange",Vm),Ws=Es=null)}function Vm(e){if(e.propertyName==="value"&&Bo(Ws)){var t=[];Bm(t,Ws,e,Tc(e)),wm($v,t)}}function Fv(e,t,n){e==="focusin"?(Ud(),Es=t,Ws=n,Es.attachEvent("onpropertychange",Vm)):e==="focusout"&&Ud()}function Bv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bo(Ws)}function Uv(e,t){if(e==="click")return Bo(t)}function Vv(e,t){if(e==="input"||e==="change")return Bo(t)}function Wv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tn=typeof Object.is=="function"?Object.is:Wv;function Hs(e,t){if(tn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ll.call(t,i)||!tn(e[i],t[i]))return!1}return!0}function Vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wd(e,t){var n=Vd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vd(n)}}function Wm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hm(){for(var e=window,t=so();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=so(e.document)}return t}function Dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hv(e){var t=Hm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wm(n.ownerDocument.documentElement,n)){if(r!==null&&Dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Wd(n,o);var a=Wd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qv=wn&&"documentMode"in document&&11>=document.documentMode,Nr=null,Nl=null,zs=null,El=!1;function Hd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;El||Nr==null||Nr!==so(r)||(r=Nr,"selectionStart"in r&&Dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zs&&Hs(zs,r)||(zs=r,r=po(Nl,"onSelect"),0<r.length&&(t=new Ic("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Nr)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Er={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},Sa={},qm={};wn&&(qm=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Uo(e){if(Sa[e])return Sa[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qm)return Sa[e]=t[n];return e}var Jm=Uo("animationend"),Km=Uo("animationiteration"),Gm=Uo("animationstart"),Qm=Uo("transitionend"),Ym=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,t){Ym.set(e,t),yr(t,[e])}for(var Ca=0;Ca<qd.length;Ca++){var Na=qd[Ca],Jv=Na.toLowerCase(),Kv=Na[0].toUpperCase()+Na.slice(1);Qn(Jv,"on"+Kv)}Qn(Jm,"onAnimationEnd");Qn(Km,"onAnimationIteration");Qn(Gm,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(Qm,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function Jd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jy(r,t,void 0,e),e.currentTarget=null}function Xm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Jd(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Jd(i,l,u),o=c}}}if(oo)throw e=jl,oo=!1,jl=null,e}function Me(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(Zm(t,e,2,!1),n.add(r))}function Ea(e,t,n){var r=0;t&&(r|=4),Zm(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function qs(e){if(!e[zi]){e[zi]=!0,om.forEach(function(n){n!=="selectionchange"&&(Gv.has(n)||Ea(n,!1,e),Ea(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,Ea("selectionchange",!1,t))}}function Zm(e,t,n,r){switch(Im(t)){case 1:var i=cv;break;case 4:i=uv;break;default:i=Rc}n=i.bind(null,t,n,e),i=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function za(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=ir(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}wm(function(){var u=o,d=Tc(n),p=[];e:{var f=Ym.get(e);if(f!==void 0){var m=Ic,y=e;switch(e){case"keypress":if(qi(n)===0)break e;case"keydown":case"keyup":m=Sv;break;case"focusin":y="focus",m=wa;break;case"focusout":y="blur",m=wa;break;case"beforeblur":case"afterblur":m=wa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ev;break;case Jm:case Km:case Gm:m=gv;break;case Qm:m=Tv;break;case"scroll":m=dv;break;case"wheel":m=Lv;break;case"copy":case"cut":case"paste":m=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Od}var j=(t&4)!==0,z=!j&&e==="scroll",v=j?f!==null?f+"Capture":null:f;j=[];for(var x=u,g;x!==null;){g=x;var T=g.stateNode;if(g.tag===5&&T!==null&&(g=T,v!==null&&(T=Fs(x,v),T!=null&&j.push(Js(x,T,g)))),z)break;x=x.return}0<j.length&&(f=new m(f,y,null,n,d),p.push({event:f,listeners:j}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==bl&&(y=n.relatedTarget||n.fromElement)&&(ir(y)||y[jn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?ir(y):null,y!==null&&(z=vr(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(j=Md,T="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(j=Od,T="onPointerLeave",v="onPointerEnter",x="pointer"),z=m==null?f:zr(m),g=y==null?f:zr(y),f=new j(T,x+"leave",m,n,d),f.target=z,f.relatedTarget=g,T=null,ir(d)===u&&(j=new j(v,x+"enter",y,n,d),j.target=g,j.relatedTarget=z,T=j),z=T,m&&y)t:{for(j=m,v=y,x=0,g=j;g;g=kr(g))x++;for(g=0,T=v;T;T=kr(T))g++;for(;0<x-g;)j=kr(j),x--;for(;0<g-x;)v=kr(v),g--;for(;x--;){if(j===v||v!==null&&j===v.alternate)break t;j=kr(j),v=kr(v)}j=null}else j=null;m!==null&&Kd(p,f,m,j,!1),y!==null&&z!==null&&Kd(p,z,y,j,!0)}}e:{if(f=u?zr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=Dv;else if(Fd(f))if(Um)N=Vv;else{N=Bv;var _=Fv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Uv);if(N&&(N=N(e,u))){Bm(p,N,n,d);break e}_&&_(e,f,u),e==="focusout"&&(_=f._wrapperState)&&_.controlled&&f.type==="number"&&hl(f,"number",f.value)}switch(_=u?zr(u):window,e){case"focusin":(Fd(_)||_.contentEditable==="true")&&(Nr=_,Nl=u,zs=null);break;case"focusout":zs=Nl=Nr=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,Hd(p,n,d);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":Hd(p,n,d)}var C;if($c)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Cr?Dm(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&($m&&n.locale!=="ko"&&(Cr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Cr&&(C=Om()):(Rn=d,Mc="value"in Rn?Rn.value:Rn.textContent,Cr=!0)),_=po(u,k),0<_.length&&(k=new Id(k,e,null,n,d),p.push({event:k,listeners:_}),C?k.data=C:(C=Fm(n),C!==null&&(k.data=C)))),(C=Rv?Mv(e,n):Iv(e,n))&&(u=po(u,"onBeforeInput"),0<u.length&&(d=new Id("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Xm(p,t)})}function Js(e,t,n){return{instance:e,listener:t,currentTarget:n}}function po(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fs(e,n),o!=null&&r.unshift(Js(e,o,i)),o=Fs(e,t),o!=null&&r.push(Js(e,o,i))),e=e.return}return r}function kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kd(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Fs(n,o),c!=null&&a.unshift(Js(n,c,l))):i||(c=Fs(n,o),c!=null&&a.push(Js(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Qv=/\r\n?/g,Yv=/\u0000|\uFFFD/g;function Gd(e){return(typeof e=="string"?e:""+e).replace(Qv,`
`).replace(Yv,"")}function Ti(e,t,n){if(t=Gd(t),Gd(e)!==t&&n)throw Error(te(425))}function fo(){}var zl=null,Tl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,Zv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(e1)}:Ll;function e1(e){setTimeout(function(){throw e})}function Ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vs(t)}function Bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ns=Math.random().toString(36).slice(2),ln="__reactFiber$"+ns,Ks="__reactProps$"+ns,jn="__reactContainer$"+ns,Al="__reactEvents$"+ns,t1="__reactListeners$"+ns,n1="__reactHandles$"+ns;function ir(e){var t=e[ln];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jn]||n[ln]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yd(e);e!==null;){if(n=e[ln])return n;e=Yd(e)}return t}e=n,n=e.parentNode}return null}function di(e){return e=e[ln]||e[jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(te(33))}function Vo(e){return e[Ks]||null}var Rl=[],Tr=-1;function Yn(e){return{current:e}}function Ie(e){0>Tr||(e.current=Rl[Tr],Rl[Tr]=null,Tr--)}function Ae(e,t){Tr++,Rl[Tr]=e.current,e.current=t}var Kn={},ct=Yn(Kn),bt=Yn(!1),pr=Kn;function qr(e,t){var n=e.type.contextTypes;if(!n)return Kn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function kt(e){return e=e.childContextTypes,e!=null}function mo(){Ie(bt),Ie(ct)}function Xd(e,t,n){if(ct.current!==Kn)throw Error(te(168));Ae(ct,t),Ae(bt,n)}function eh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(te(108,Fy(e)||"Unknown",i));return Ve({},n,r)}function ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kn,pr=ct.current,Ae(ct,e),Ae(bt,bt.current),!0}function Zd(e,t,n){var r=e.stateNode;if(!r)throw Error(te(169));n?(e=eh(e,t,pr),r.__reactInternalMemoizedMergedChildContext=e,Ie(bt),Ie(ct),Ae(ct,e)):Ie(bt),Ae(bt,n)}var xn=null,Wo=!1,Pa=!1;function th(e){xn===null?xn=[e]:xn.push(e)}function r1(e){Wo=!0,th(e)}function Xn(){if(!Pa&&xn!==null){Pa=!0;var e=0,t=ze;try{var n=xn;for(ze=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xn=null,Wo=!1}catch(i){throw xn!==null&&(xn=xn.slice(e+1)),Cm(Pc,Xn),i}finally{ze=t,Pa=!1}}return null}var Pr=[],Lr=0,go=null,xo=0,Ot=[],$t=0,fr=null,yn=1,vn="";function nr(e,t){Pr[Lr++]=xo,Pr[Lr++]=go,go=e,xo=t}function nh(e,t,n){Ot[$t++]=yn,Ot[$t++]=vn,Ot[$t++]=fr,fr=e;var r=yn;e=vn;var i=32-Xt(r)-1;r&=~(1<<i),n+=1;var o=32-Xt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,yn=1<<32-Xt(t)+i|n<<i|r,vn=o+e}else yn=1<<o|n<<i|r,vn=e}function Fc(e){e.return!==null&&(nr(e,1),nh(e,1,0))}function Bc(e){for(;e===go;)go=Pr[--Lr],Pr[Lr]=null,xo=Pr[--Lr],Pr[Lr]=null;for(;e===fr;)fr=Ot[--$t],Ot[$t]=null,vn=Ot[--$t],Ot[$t]=null,yn=Ot[--$t],Ot[$t]=null}var Pt=null,Et=null,Oe=!1,Qt=null;function rh(e,t){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ep(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pt=e,Et=Bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pt=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fr!==null?{id:yn,overflow:vn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pt=e,Et=null,!0):!1;default:return!1}}function Ml(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Il(e){if(Oe){var t=Et;if(t){var n=t;if(!ep(e,t)){if(Ml(e))throw Error(te(418));t=Bn(n.nextSibling);var r=Pt;t&&ep(e,t)?rh(r,n):(e.flags=e.flags&-4097|2,Oe=!1,Pt=e)}}else{if(Ml(e))throw Error(te(418));e.flags=e.flags&-4097|2,Oe=!1,Pt=e}}}function tp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pt=e}function Pi(e){if(e!==Pt)return!1;if(!Oe)return tp(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=Et)){if(Ml(e))throw sh(),Error(te(418));for(;t;)rh(e,t),t=Bn(t.nextSibling)}if(tp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(te(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Et=Bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=Pt?Bn(e.stateNode.nextSibling):null;return!0}function sh(){for(var e=Et;e;)e=Bn(e.nextSibling)}function Jr(){Et=Pt=null,Oe=!1}function Uc(e){Qt===null?Qt=[e]:Qt.push(e)}var s1=Cn.ReactCurrentBatchConfig;function ps(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var r=n.stateNode}if(!r)throw Error(te(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error(te(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function np(e){var t=e._init;return t(e._payload)}function ih(e){function t(v,x){if(e){var g=v.deletions;g===null?(v.deletions=[x],v.flags|=16):g.push(x)}}function n(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function r(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function i(v,x){return v=Hn(v,x),v.index=0,v.sibling=null,v}function o(v,x,g){return v.index=g,e?(g=v.alternate,g!==null?(g=g.index,g<x?(v.flags|=2,x):g):(v.flags|=2,x)):(v.flags|=1048576,x)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,x,g,T){return x===null||x.tag!==6?(x=$a(g,v.mode,T),x.return=v,x):(x=i(x,g),x.return=v,x)}function c(v,x,g,T){var N=g.type;return N===Sr?d(v,x,g.props.children,T,g.key):x!==null&&(x.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Tn&&np(N)===x.type)?(T=i(x,g.props),T.ref=ps(v,x,g),T.return=v,T):(T=Zi(g.type,g.key,g.props,null,v.mode,T),T.ref=ps(v,x,g),T.return=v,T)}function u(v,x,g,T){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=Da(g,v.mode,T),x.return=v,x):(x=i(x,g.children||[]),x.return=v,x)}function d(v,x,g,T,N){return x===null||x.tag!==7?(x=cr(g,v.mode,T,N),x.return=v,x):(x=i(x,g),x.return=v,x)}function p(v,x,g){if(typeof x=="string"&&x!==""||typeof x=="number")return x=$a(""+x,v.mode,g),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ki:return g=Zi(x.type,x.key,x.props,null,v.mode,g),g.ref=ps(v,null,x),g.return=v,g;case _r:return x=Da(x,v.mode,g),x.return=v,x;case Tn:var T=x._init;return p(v,T(x._payload),g)}if(ks(x)||as(x))return x=cr(x,v.mode,g,null),x.return=v,x;Li(v,x)}return null}function f(v,x,g,T){var N=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:l(v,x,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ki:return g.key===N?c(v,x,g,T):null;case _r:return g.key===N?u(v,x,g,T):null;case Tn:return N=g._init,f(v,x,N(g._payload),T)}if(ks(g)||as(g))return N!==null?null:d(v,x,g,T,null);Li(v,g)}return null}function m(v,x,g,T,N){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(g)||null,l(x,v,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ki:return v=v.get(T.key===null?g:T.key)||null,c(x,v,T,N);case _r:return v=v.get(T.key===null?g:T.key)||null,u(x,v,T,N);case Tn:var _=T._init;return m(v,x,g,_(T._payload),N)}if(ks(T)||as(T))return v=v.get(g)||null,d(x,v,T,N,null);Li(x,T)}return null}function y(v,x,g,T){for(var N=null,_=null,C=x,k=x=0,R=null;C!==null&&k<g.length;k++){C.index>k?(R=C,C=null):R=C.sibling;var S=f(v,C,g[k],T);if(S===null){C===null&&(C=R);break}e&&C&&S.alternate===null&&t(v,C),x=o(S,x,k),_===null?N=S:_.sibling=S,_=S,C=R}if(k===g.length)return n(v,C),Oe&&nr(v,k),N;if(C===null){for(;k<g.length;k++)C=p(v,g[k],T),C!==null&&(x=o(C,x,k),_===null?N=C:_.sibling=C,_=C);return Oe&&nr(v,k),N}for(C=r(v,C);k<g.length;k++)R=m(C,v,k,g[k],T),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?k:R.key),x=o(R,x,k),_===null?N=R:_.sibling=R,_=R);return e&&C.forEach(function(L){return t(v,L)}),Oe&&nr(v,k),N}function j(v,x,g,T){var N=as(g);if(typeof N!="function")throw Error(te(150));if(g=N.call(g),g==null)throw Error(te(151));for(var _=N=null,C=x,k=x=0,R=null,S=g.next();C!==null&&!S.done;k++,S=g.next()){C.index>k?(R=C,C=null):R=C.sibling;var L=f(v,C,S.value,T);if(L===null){C===null&&(C=R);break}e&&C&&L.alternate===null&&t(v,C),x=o(L,x,k),_===null?N=L:_.sibling=L,_=L,C=R}if(S.done)return n(v,C),Oe&&nr(v,k),N;if(C===null){for(;!S.done;k++,S=g.next())S=p(v,S.value,T),S!==null&&(x=o(S,x,k),_===null?N=S:_.sibling=S,_=S);return Oe&&nr(v,k),N}for(C=r(v,C);!S.done;k++,S=g.next())S=m(C,v,k,S.value,T),S!==null&&(e&&S.alternate!==null&&C.delete(S.key===null?k:S.key),x=o(S,x,k),_===null?N=S:_.sibling=S,_=S);return e&&C.forEach(function(I){return t(v,I)}),Oe&&nr(v,k),N}function z(v,x,g,T){if(typeof g=="object"&&g!==null&&g.type===Sr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ki:e:{for(var N=g.key,_=x;_!==null;){if(_.key===N){if(N=g.type,N===Sr){if(_.tag===7){n(v,_.sibling),x=i(_,g.props.children),x.return=v,v=x;break e}}else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Tn&&np(N)===_.type){n(v,_.sibling),x=i(_,g.props),x.ref=ps(v,_,g),x.return=v,v=x;break e}n(v,_);break}else t(v,_);_=_.sibling}g.type===Sr?(x=cr(g.props.children,v.mode,T,g.key),x.return=v,v=x):(T=Zi(g.type,g.key,g.props,null,v.mode,T),T.ref=ps(v,x,g),T.return=v,v=T)}return a(v);case _r:e:{for(_=g.key;x!==null;){if(x.key===_)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){n(v,x.sibling),x=i(x,g.children||[]),x.return=v,v=x;break e}else{n(v,x);break}else t(v,x);x=x.sibling}x=Da(g,v.mode,T),x.return=v,v=x}return a(v);case Tn:return _=g._init,z(v,x,_(g._payload),T)}if(ks(g))return y(v,x,g,T);if(as(g))return j(v,x,g,T);Li(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,x!==null&&x.tag===6?(n(v,x.sibling),x=i(x,g),x.return=v,v=x):(n(v,x),x=$a(g,v.mode,T),x.return=v,v=x),a(v)):n(v,x)}return z}var Kr=ih(!0),oh=ih(!1),yo=Yn(null),vo=null,Ar=null,Vc=null;function Wc(){Vc=Ar=vo=null}function Hc(e){var t=yo.current;Ie(yo),e._currentValue=t}function Ol(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Br(e,t){vo=e,Vc=Ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(vt=!0),e.firstContext=null)}function Vt(e){var t=e._currentValue;if(Vc!==e)if(e={context:e,memoizedValue:t,next:null},Ar===null){if(vo===null)throw Error(te(308));Ar=e,vo.dependencies={lanes:0,firstContext:e}}else Ar=Ar.next=e;return t}var or=null;function qc(e){or===null?or=[e]:or.push(e)}function ah(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,qc(t)):(n.next=i.next,i.next=n),t.interleaved=n,_n(e,r)}function _n(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pn=!1;function Jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,_n(e,n)}return i=r.interleaved,i===null?(t.next=t,qc(r)):(t.next=i.next,i.next=t),r.interleaved=t,_n(e,n)}function Ji(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lc(e,n)}}function rp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var i=e.updateQueue;Pn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,d=u=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,j=l;switch(f=t,m=n,j.tag){case 1:if(y=j.payload,typeof y=="function"){p=y.call(m,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,f=typeof y=="function"?y.call(m,p,f):y,f==null)break e;p=Ve({},p,f);break e;case 2:Pn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);hr|=a,e.lanes=a,e.memoizedState=p}}function sp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(te(191,i));i.call(r)}}}var pi={},pn=Yn(pi),Gs=Yn(pi),Qs=Yn(pi);function ar(e){if(e===pi)throw Error(te(174));return e}function Kc(e,t){switch(Ae(Qs,t),Ae(Gs,e),Ae(pn,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}Ie(pn),Ae(pn,t)}function Gr(){Ie(pn),Ie(Gs),Ie(Qs)}function ch(e){ar(Qs.current);var t=ar(pn.current),n=xl(t,e.type);t!==n&&(Ae(Gs,e),Ae(pn,n))}function Gc(e){Gs.current===e&&(Ie(pn),Ie(Gs))}var Be=Yn(0);function ko(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var La=[];function Qc(){for(var e=0;e<La.length;e++)La[e]._workInProgressVersionPrimary=null;La.length=0}var Ki=Cn.ReactCurrentDispatcher,Aa=Cn.ReactCurrentBatchConfig,mr=0,Ue=null,Ye=null,et=null,wo=!1,Ts=!1,Ys=0,i1=0;function ot(){throw Error(te(321))}function Yc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tn(e[n],t[n]))return!1;return!0}function Xc(e,t,n,r,i,o){if(mr=o,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ki.current=e===null||e.memoizedState===null?c1:u1,e=n(r,i),Ts){o=0;do{if(Ts=!1,Ys=0,25<=o)throw Error(te(301));o+=1,et=Ye=null,t.updateQueue=null,Ki.current=d1,e=n(r,i)}while(Ts)}if(Ki.current=jo,t=Ye!==null&&Ye.next!==null,mr=0,et=Ye=Ue=null,wo=!1,t)throw Error(te(300));return e}function Zc(){var e=Ys!==0;return Ys=0,e}function on(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ue.memoizedState=et=e:et=et.next=e,et}function Wt(){if(Ye===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=et===null?Ue.memoizedState:et.next;if(t!==null)et=t,Ye=e;else{if(e===null)throw Error(te(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},et===null?Ue.memoizedState=et=e:et=et.next=e}return et}function Xs(e,t){return typeof t=="function"?t(e):t}function Ra(e){var t=Wt(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=Ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((mr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ue.lanes|=d,hr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,tn(r,t.memoizedState)||(vt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ue.lanes|=o,hr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ma(e){var t=Wt(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);tn(o,t.memoizedState)||(vt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function uh(){}function dh(e,t){var n=Ue,r=Wt(),i=t(),o=!tn(r.memoizedState,i);if(o&&(r.memoizedState=i,vt=!0),r=r.queue,eu(mh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,Zs(9,fh.bind(null,n,r,i,t),void 0,null),tt===null)throw Error(te(349));mr&30||ph(n,t,i)}return i}function ph(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fh(e,t,n,r){t.value=n,t.getSnapshot=r,hh(t)&&gh(e)}function mh(e,t,n){return n(function(){hh(t)&&gh(e)})}function hh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tn(e,n)}catch{return!0}}function gh(e){var t=_n(e,1);t!==null&&Zt(t,e,1,-1)}function ip(e){var t=on();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:e},t.queue=e,e=e.dispatch=l1.bind(null,Ue,e),[t.memoizedState,e]}function Zs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function xh(){return Wt().memoizedState}function Gi(e,t,n,r){var i=on();Ue.flags|=e,i.memoizedState=Zs(1|t,n,void 0,r===void 0?null:r)}function Ho(e,t,n,r){var i=Wt();r=r===void 0?null:r;var o=void 0;if(Ye!==null){var a=Ye.memoizedState;if(o=a.destroy,r!==null&&Yc(r,a.deps)){i.memoizedState=Zs(t,n,o,r);return}}Ue.flags|=e,i.memoizedState=Zs(1|t,n,o,r)}function op(e,t){return Gi(8390656,8,e,t)}function eu(e,t){return Ho(2048,8,e,t)}function yh(e,t){return Ho(4,2,e,t)}function vh(e,t){return Ho(4,4,e,t)}function bh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kh(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4,4,bh.bind(null,t,e),n)}function tu(){}function wh(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jh(e,t){var n=Wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _h(e,t,n){return mr&21?(tn(n,t)||(n=zm(),Ue.lanes|=n,hr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n)}function o1(e,t){var n=ze;ze=n!==0&&4>n?n:4,e(!0);var r=Aa.transition;Aa.transition={};try{e(!1),t()}finally{ze=n,Aa.transition=r}}function Sh(){return Wt().memoizedState}function a1(e,t,n){var r=Wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ch(e))Nh(t,n);else if(n=ah(e,t,n,r),n!==null){var i=mt();Zt(n,e,r,i),Eh(n,t,r)}}function l1(e,t,n){var r=Wn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ch(e))Nh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,tn(l,a)){var c=t.interleaved;c===null?(i.next=i,qc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=ah(e,t,i,r),n!==null&&(i=mt(),Zt(n,e,r,i),Eh(n,t,r))}}function Ch(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function Nh(e,t){Ts=wo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Lc(e,n)}}var jo={readContext:Vt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},c1={readContext:Vt,useCallback:function(e,t){return on().memoizedState=[e,t===void 0?null:t],e},useContext:Vt,useEffect:op,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Gi(4194308,4,bh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gi(4,2,e,t)},useMemo:function(e,t){var n=on();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=on();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=a1.bind(null,Ue,e),[r.memoizedState,e]},useRef:function(e){var t=on();return e={current:e},t.memoizedState=e},useState:ip,useDebugValue:tu,useDeferredValue:function(e){return on().memoizedState=e},useTransition:function(){var e=ip(!1),t=e[0];return e=o1.bind(null,e[1]),on().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ue,i=on();if(Oe){if(n===void 0)throw Error(te(407));n=n()}else{if(n=t(),tt===null)throw Error(te(349));mr&30||ph(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,op(mh.bind(null,r,o,e),[e]),r.flags|=2048,Zs(9,fh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=on(),t=tt.identifierPrefix;if(Oe){var n=vn,r=yn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ys++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=i1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},u1={readContext:Vt,useCallback:wh,useContext:Vt,useEffect:eu,useImperativeHandle:kh,useInsertionEffect:yh,useLayoutEffect:vh,useMemo:jh,useReducer:Ra,useRef:xh,useState:function(){return Ra(Xs)},useDebugValue:tu,useDeferredValue:function(e){var t=Wt();return _h(t,Ye.memoizedState,e)},useTransition:function(){var e=Ra(Xs)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:uh,useSyncExternalStore:dh,useId:Sh,unstable_isNewReconciler:!1},d1={readContext:Vt,useCallback:wh,useContext:Vt,useEffect:eu,useImperativeHandle:kh,useInsertionEffect:yh,useLayoutEffect:vh,useMemo:jh,useReducer:Ma,useRef:xh,useState:function(){return Ma(Xs)},useDebugValue:tu,useDeferredValue:function(e){var t=Wt();return Ye===null?t.memoizedState=e:_h(t,Ye.memoizedState,e)},useTransition:function(){var e=Ma(Xs)[0],t=Wt().memoizedState;return[e,t]},useMutableSource:uh,useSyncExternalStore:dh,useId:Sh,unstable_isNewReconciler:!1};function Kt(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function $l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qo={isMounted:function(e){return(e=e._reactInternals)?vr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mt(),i=Wn(e),o=bn(r,i);o.payload=t,n!=null&&(o.callback=n),t=Un(e,o,i),t!==null&&(Zt(t,e,i,r),Ji(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mt(),i=Wn(e),o=bn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Un(e,o,i),t!==null&&(Zt(t,e,i,r),Ji(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),r=Wn(e),i=bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Un(e,i,r),t!==null&&(Zt(t,e,r,n),Ji(t,e,r))}};function ap(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,o):!0}function zh(e,t,n){var r=!1,i=Kn,o=t.contextType;return typeof o=="object"&&o!==null?o=Vt(o):(i=kt(t)?pr:ct.current,r=t.contextTypes,o=(r=r!=null)?qr(e,i):Kn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=qo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function lp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qo.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Jc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Vt(o):(o=kt(t)?pr:ct.current,i.context=qr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&($l(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&qo.enqueueReplaceState(i,i.state,null),bo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Qr(e,t){try{var n="",r=t;do n+=Dy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ia(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var p1=typeof WeakMap=="function"?WeakMap:Map;function Th(e,t,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){So||(So=!0,Ql=r),Fl(e,t)},n}function Ph(e,t,n){n=bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Fl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Fl(e,t),typeof r!="function"&&(Vn===null?Vn=new Set([this]):Vn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function cp(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new p1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=C1.bind(null,e,t,n),t.then(e,e))}function up(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bn(-1,1),t.tag=2,Un(n,t,1))),n.lanes|=1),e)}var f1=Cn.ReactCurrentOwner,vt=!1;function ft(e,t,n,r){t.child=e===null?oh(t,null,n,r):Kr(t,e.child,n,r)}function pp(e,t,n,r,i){n=n.render;var o=t.ref;return Br(t,i),r=Xc(e,t,n,r,o,i),n=Zc(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Sn(e,t,i)):(Oe&&n&&Fc(t),t.flags|=1,ft(e,t,r,i),t.child)}function fp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!cu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lh(e,t,o,r,i)):(e=Zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(a,r)&&e.ref===t.ref)return Sn(e,t,i)}return t.flags|=1,e=Hn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Lh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hs(o,r)&&e.ref===t.ref)if(vt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(vt=!0);else return t.lanes=e.lanes,Sn(e,t,i)}return Bl(e,t,n,r,i)}function Ah(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Mr,Ct),Ct|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ae(Mr,Ct),Ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ae(Mr,Ct),Ct|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ae(Mr,Ct),Ct|=r;return ft(e,t,i,n),t.child}function Rh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bl(e,t,n,r,i){var o=kt(n)?pr:ct.current;return o=qr(t,o),Br(t,i),n=Xc(e,t,n,r,o,i),r=Zc(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Sn(e,t,i)):(Oe&&r&&Fc(t),t.flags|=1,ft(e,t,n,i),t.child)}function mp(e,t,n,r,i){if(kt(n)){var o=!0;ho(t)}else o=!1;if(Br(t,i),t.stateNode===null)Qi(e,t),zh(t,n,r),Dl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=kt(n)?pr:ct.current,u=qr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&lp(t,a,r,u),Pn=!1;var f=t.memoizedState;a.state=f,bo(t,r,a,i),c=t.memoizedState,l!==r||f!==c||bt.current||Pn?(typeof d=="function"&&($l(t,n,d,r),c=t.memoizedState),(l=Pn||ap(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,lh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Kt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Vt(c):(c=kt(n)?pr:ct.current,c=qr(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&lp(t,a,r,c),Pn=!1,f=t.memoizedState,a.state=f,bo(t,r,a,i);var y=t.memoizedState;l!==p||f!==y||bt.current||Pn?(typeof m=="function"&&($l(t,n,m,r),y=t.memoizedState),(u=Pn||ap(t,n,u,r,f,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ul(e,t,n,r,o,i)}function Ul(e,t,n,r,i,o){Rh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Zd(t,n,!1),Sn(e,t,o);r=t.stateNode,f1.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Kr(t,e.child,null,o),t.child=Kr(t,null,l,o)):ft(e,t,l,o),t.memoizedState=r.state,i&&Zd(t,n,!0),t.child}function Mh(e){var t=e.stateNode;t.pendingContext?Xd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xd(e,t.context,!1),Kc(e,t.containerInfo)}function hp(e,t,n,r,i){return Jr(),Uc(i),t.flags|=256,ft(e,t,n,r),t.child}var Vl={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ih(e,t,n){var r=t.pendingProps,i=Be.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ae(Be,i&1),e===null)return Il(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Go(a,r,0,null),e=cr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Wl(n),t.memoizedState=Vl,e):nu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return m1(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Hn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Hn(l,o):(o=cr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Wl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Vl,r}return o=e.child,e=o.sibling,r=Hn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nu(e,t){return t=Go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ai(e,t,n,r){return r!==null&&Uc(r),Kr(t,e.child,null,n),e=nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function m1(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Ia(Error(te(422))),Ai(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Go({mode:"visible",children:r.children},i,0,null),o=cr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Kr(t,e.child,null,a),t.child.memoizedState=Wl(a),t.memoizedState=Vl,o);if(!(t.mode&1))return Ai(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(te(419)),r=Ia(o,r,void 0),Ai(e,t,a,r)}if(l=(a&e.childLanes)!==0,vt||l){if(r=tt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,_n(e,i),Zt(r,e,i,-1))}return lu(),r=Ia(Error(te(421))),Ai(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=N1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Et=Bn(i.nextSibling),Pt=t,Oe=!0,Qt=null,e!==null&&(Ot[$t++]=yn,Ot[$t++]=vn,Ot[$t++]=fr,yn=e.id,vn=e.overflow,fr=t),t=nu(t,r.children),t.flags|=4096,t)}function gp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ol(e.return,t,n)}function Oa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Oh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ft(e,t,r.children,n),r=Be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gp(e,n,t);else if(e.tag===19)gp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ae(Be,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ko(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oa(t,!0,n,null,o);break;case"together":Oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(te(153));if(t.child!==null){for(e=t.child,n=Hn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Hn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h1(e,t,n){switch(t.tag){case 3:Mh(t),Jr();break;case 5:ch(t);break;case 1:kt(t.type)&&ho(t);break;case 4:Kc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ae(yo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ae(Be,Be.current&1),t.flags|=128,null):n&t.child.childLanes?Ih(e,t,n):(Ae(Be,Be.current&1),e=Sn(e,t,n),e!==null?e.sibling:null);Ae(Be,Be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Oh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae(Be,Be.current),r)break;return null;case 22:case 23:return t.lanes=0,Ah(e,t,n)}return Sn(e,t,n)}var $h,Hl,Dh,Fh;$h=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hl=function(){};Dh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ar(pn.current);var o=null;switch(n){case"input":i=fl(e,i),r=fl(e,r),o=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),o=[];break;case"textarea":i=gl(e,i),r=gl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fo)}yl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($s.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Me("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Fh=function(e,t,n,r){n!==r&&(t.flags|=4)};function fs(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function g1(e,t,n){var r=t.pendingProps;switch(Bc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return kt(t.type)&&mo(),at(t),null;case 3:return r=t.stateNode,Gr(),Ie(bt),Ie(ct),Qc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qt!==null&&(Zl(Qt),Qt=null))),Hl(e,t),at(t),null;case 5:Gc(t);var i=ar(Qs.current);if(n=t.type,e!==null&&t.stateNode!=null)Dh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(te(166));return at(t),null}if(e=ar(pn.current),Pi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ln]=t,r[Ks]=o,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<js.length;i++)Me(js[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Sd(r,o),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Me("invalid",r);break;case"textarea":Nd(r,o),Me("invalid",r)}yl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ti(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ti(r.textContent,l,e),i=["children",""+l]):$s.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Me("scroll",r)}switch(n){case"input":wi(r),Cd(r,o,!0);break;case"textarea":wi(r),Ed(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=fo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ln]=t,e[Ks]=r,$h(e,t,!1,!1),t.stateNode=e;e:{switch(a=vl(n,r),n){case"dialog":Me("cancel",e),Me("close",e),i=r;break;case"iframe":case"object":case"embed":Me("load",e),i=r;break;case"video":case"audio":for(i=0;i<js.length;i++)Me(js[i],e);i=r;break;case"source":Me("error",e),i=r;break;case"img":case"image":case"link":Me("error",e),Me("load",e),i=r;break;case"details":Me("toggle",e),i=r;break;case"input":Sd(e,r),i=fl(e,r),Me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Me("invalid",e);break;case"textarea":Nd(e,r),i=gl(e,r),Me("invalid",e);break;default:i=r}yl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?xm(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&hm(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ds(e,c):typeof c=="number"&&Ds(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($s.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Me("scroll",e):c!=null&&Cc(e,o,c,a))}switch(n){case"input":wi(e),Cd(e,r,!1);break;case"textarea":wi(e),Ed(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Or(e,!!r.multiple,o,!1):r.defaultValue!=null&&Or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)Fh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(te(166));if(n=ar(Qs.current),ar(pn.current),Pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[ln]=t,(o=r.nodeValue!==n)&&(e=Pt,e!==null))switch(e.tag){case 3:Ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ti(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=t,t.stateNode=r}return at(t),null;case 13:if(Ie(Be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&Et!==null&&t.mode&1&&!(t.flags&128))sh(),Jr(),t.flags|=98560,o=!1;else if(o=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(te(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(te(317));o[ln]=t}else Jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),o=!1}else Qt!==null&&(Zl(Qt),Qt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?Xe===0&&(Xe=3):lu())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return Gr(),Hl(e,t),e===null&&qs(t.stateNode.containerInfo),at(t),null;case 10:return Hc(t.type._context),at(t),null;case 17:return kt(t.type)&&mo(),at(t),null;case 19:if(Ie(Be),o=t.memoizedState,o===null)return at(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)fs(o,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ko(e),a!==null){for(t.flags|=128,fs(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ae(Be,Be.current&1|2),t.child}e=e.sibling}o.tail!==null&&He()>Yr&&(t.flags|=128,r=!0,fs(o,!1),t.lanes=4194304)}else{if(!r)if(e=ko(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Oe)return at(t),null}else 2*He()-o.renderingStartTime>Yr&&n!==1073741824&&(t.flags|=128,r=!0,fs(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=He(),t.sibling=null,n=Be.current,Ae(Be,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return au(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ct&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(te(156,t.tag))}function x1(e,t){switch(Bc(t),t.tag){case 1:return kt(t.type)&&mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gr(),Ie(bt),Ie(ct),Qc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gc(t),null;case 13:if(Ie(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(te(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Be),null;case 4:return Gr(),null;case 10:return Hc(t.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Ri=!1,lt=!1,y1=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Rr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){We(e,t,r)}}var xp=!1;function v1(e,t){if(zl=co,e=Hm(),Dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tl={focusedElem:e,selectionRange:n},co=!1,ue=t;ue!==null;)if(t=ue,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ue=e;else for(;ue!==null;){t=ue;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var j=y.memoizedProps,z=y.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?j:Kt(t.type,j),z);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(T){We(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,ue=e;break}ue=t.return}return y=xp,xp=!1,y}function Ps(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ql(t,n,o)}i=i.next}while(i!==r)}}function Jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bh(e){var t=e.alternate;t!==null&&(e.alternate=null,Bh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ln],delete t[Ks],delete t[Al],delete t[t1],delete t[n1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Uh(e){return e.tag===5||e.tag===3||e.tag===4}function yp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Uh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(r!==4&&(e=e.child,e!==null))for(Kl(e,t,n),e=e.sibling;e!==null;)Kl(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}var rt=null,Gt=!1;function En(e,t,n){for(n=n.child;n!==null;)Vh(e,t,n),n=n.sibling}function Vh(e,t,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Do,n)}catch{}switch(n.tag){case 5:lt||Rr(n,t);case 6:var r=rt,i=Gt;rt=null,En(e,t,n),rt=r,Gt=i,rt!==null&&(Gt?(e=rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(Gt?(e=rt,n=n.stateNode,e.nodeType===8?Ta(e.parentNode,n):e.nodeType===1&&Ta(e,n),Vs(e)):Ta(rt,n.stateNode));break;case 4:r=rt,i=Gt,rt=n.stateNode.containerInfo,Gt=!0,En(e,t,n),rt=r,Gt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&ql(n,t,a),i=i.next}while(i!==r)}En(e,t,n);break;case 1:if(!lt&&(Rr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){We(n,t,l)}En(e,t,n);break;case 21:En(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,En(e,t,n),lt=r):En(e,t,n);break;default:En(e,t,n)}}function vp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new y1),t.forEach(function(r){var i=E1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,Gt=!1;break e;case 3:rt=l.stateNode.containerInfo,Gt=!0;break e;case 4:rt=l.stateNode.containerInfo,Gt=!0;break e}l=l.return}if(rt===null)throw Error(te(160));Vh(o,a,i),rt=null,Gt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){We(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wh(t,e),t=t.sibling}function Wh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Jt(t,e),sn(e),r&4){try{Ps(3,e,e.return),Jo(3,e)}catch(j){We(e,e.return,j)}try{Ps(5,e,e.return)}catch(j){We(e,e.return,j)}}break;case 1:Jt(t,e),sn(e),r&512&&n!==null&&Rr(n,n.return);break;case 5:if(Jt(t,e),sn(e),r&512&&n!==null&&Rr(n,n.return),e.flags&32){var i=e.stateNode;try{Ds(i,"")}catch(j){We(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&pm(i,o),vl(l,a);var u=vl(l,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?xm(i,p):d==="dangerouslySetInnerHTML"?hm(i,p):d==="children"?Ds(i,p):Cc(i,d,p,u)}switch(l){case"input":ml(i,o);break;case"textarea":fm(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Or(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Or(i,!!o.multiple,o.defaultValue,!0):Or(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ks]=o}catch(j){We(e,e.return,j)}}break;case 6:if(Jt(t,e),sn(e),r&4){if(e.stateNode===null)throw Error(te(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(j){We(e,e.return,j)}}break;case 3:if(Jt(t,e),sn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vs(t.containerInfo)}catch(j){We(e,e.return,j)}break;case 4:Jt(t,e),sn(e);break;case 13:Jt(t,e),sn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(iu=He())),r&4&&vp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(u=lt)||d,Jt(t,e),lt=u):Jt(t,e),sn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ue=e,d=e.child;d!==null;){for(p=ue=d;ue!==null;){switch(f=ue,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ps(4,f,f.return);break;case 1:Rr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(j){We(r,n,j)}}break;case 5:Rr(f,f.return);break;case 22:if(f.memoizedState!==null){kp(p);continue}}m!==null?(m.return=f,ue=m):kp(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=gm("display",a))}catch(j){We(e,e.return,j)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(j){We(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Jt(t,e),sn(e),r&4&&vp(e);break;case 21:break;default:Jt(t,e),sn(e)}}function sn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Uh(n)){var r=n;break e}n=n.return}throw Error(te(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ds(i,""),r.flags&=-33);var o=yp(e);Gl(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=yp(e);Kl(e,l,a);break;default:throw Error(te(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function b1(e,t,n){ue=e,Hh(e)}function Hh(e,t,n){for(var r=(e.mode&1)!==0;ue!==null;){var i=ue,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ri;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||lt;l=Ri;var u=lt;if(Ri=a,(lt=c)&&!u)for(ue=i;ue!==null;)a=ue,c=a.child,a.tag===22&&a.memoizedState!==null?wp(i):c!==null?(c.return=a,ue=c):wp(i);for(;o!==null;)ue=o,Hh(o),o=o.sibling;ue=i,Ri=l,lt=u}bp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ue=o):bp(e)}}function bp(e){for(;ue!==null;){var t=ue;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Kt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&sp(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sp(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Vs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}lt||t.flags&512&&Jl(t)}catch(f){We(t,t.return,f)}}if(t===e){ue=null;break}if(n=t.sibling,n!==null){n.return=t.return,ue=n;break}ue=t.return}}function kp(e){for(;ue!==null;){var t=ue;if(t===e){ue=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ue=n;break}ue=t.return}}function wp(e){for(;ue!==null;){var t=ue;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Jo(4,t)}catch(c){We(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){We(t,i,c)}}var o=t.return;try{Jl(t)}catch(c){We(t,o,c)}break;case 5:var a=t.return;try{Jl(t)}catch(c){We(t,a,c)}}}catch(c){We(t,t.return,c)}if(t===e){ue=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ue=l;break}ue=t.return}}var k1=Math.ceil,_o=Cn.ReactCurrentDispatcher,ru=Cn.ReactCurrentOwner,Ut=Cn.ReactCurrentBatchConfig,Ne=0,tt=null,Ge=null,st=0,Ct=0,Mr=Yn(0),Xe=0,ei=null,hr=0,Ko=0,su=0,Ls=null,yt=null,iu=0,Yr=1/0,gn=null,So=!1,Ql=null,Vn=null,Mi=!1,Mn=null,Co=0,As=0,Yl=null,Yi=-1,Xi=0;function mt(){return Ne&6?He():Yi!==-1?Yi:Yi=He()}function Wn(e){return e.mode&1?Ne&2&&st!==0?st&-st:s1.transition!==null?(Xi===0&&(Xi=zm()),Xi):(e=ze,e!==0||(e=window.event,e=e===void 0?16:Im(e.type)),e):1}function Zt(e,t,n,r){if(50<As)throw As=0,Yl=null,Error(te(185));ci(e,n,r),(!(Ne&2)||e!==tt)&&(e===tt&&(!(Ne&2)&&(Ko|=n),Xe===4&&An(e,st)),wt(e,r),n===1&&Ne===0&&!(t.mode&1)&&(Yr=He()+500,Wo&&Xn()))}function wt(e,t){var n=e.callbackNode;sv(e,t);var r=lo(e,e===tt?st:0);if(r===0)n!==null&&Pd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pd(n),t===1)e.tag===0?r1(jp.bind(null,e)):th(jp.bind(null,e)),Zv(function(){!(Ne&6)&&Xn()}),n=null;else{switch(Tm(r)){case 1:n=Pc;break;case 4:n=Nm;break;case 16:n=ao;break;case 536870912:n=Em;break;default:n=ao}n=Zh(n,qh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qh(e,t){if(Yi=-1,Xi=0,Ne&6)throw Error(te(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var r=lo(e,e===tt?st:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=No(e,r);else{t=r;var i=Ne;Ne|=2;var o=Kh();(tt!==e||st!==t)&&(gn=null,Yr=He()+500,lr(e,t));do try{_1();break}catch(l){Jh(e,l)}while(!0);Wc(),_o.current=o,Ne=i,Ge!==null?t=0:(tt=null,st=0,t=Xe)}if(t!==0){if(t===2&&(i=_l(e),i!==0&&(r=i,t=Xl(e,i))),t===1)throw n=ei,lr(e,0),An(e,r),wt(e,He()),n;if(t===6)An(e,r);else{if(i=e.current.alternate,!(r&30)&&!w1(i)&&(t=No(e,r),t===2&&(o=_l(e),o!==0&&(r=o,t=Xl(e,o))),t===1))throw n=ei,lr(e,0),An(e,r),wt(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(te(345));case 2:rr(e,yt,gn);break;case 3:if(An(e,r),(r&130023424)===r&&(t=iu+500-He(),10<t)){if(lo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){mt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ll(rr.bind(null,e,yt,gn),t);break}rr(e,yt,gn);break;case 4:if(An(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Xt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k1(r/1960))-r,10<r){e.timeoutHandle=Ll(rr.bind(null,e,yt,gn),r);break}rr(e,yt,gn);break;case 5:rr(e,yt,gn);break;default:throw Error(te(329))}}}return wt(e,He()),e.callbackNode===n?qh.bind(null,e):null}function Xl(e,t){var n=Ls;return e.current.memoizedState.isDehydrated&&(lr(e,t).flags|=256),e=No(e,t),e!==2&&(t=yt,yt=n,t!==null&&Zl(t)),e}function Zl(e){yt===null?yt=e:yt.push.apply(yt,e)}function w1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!tn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function An(e,t){for(t&=~su,t&=~Ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xt(t),r=1<<n;e[n]=-1,t&=~r}}function jp(e){if(Ne&6)throw Error(te(327));Ur();var t=lo(e,0);if(!(t&1))return wt(e,He()),null;var n=No(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=Xl(e,r))}if(n===1)throw n=ei,lr(e,0),An(e,t),wt(e,He()),n;if(n===6)throw Error(te(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rr(e,yt,gn),wt(e,He()),null}function ou(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(Yr=He()+500,Wo&&Xn())}}function gr(e){Mn!==null&&Mn.tag===0&&!(Ne&6)&&Ur();var t=Ne;Ne|=1;var n=Ut.transition,r=ze;try{if(Ut.transition=null,ze=1,e)return e()}finally{ze=r,Ut.transition=n,Ne=t,!(Ne&6)&&Xn()}}function au(){Ct=Mr.current,Ie(Mr)}function lr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xv(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Bc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:Gr(),Ie(bt),Ie(ct),Qc();break;case 5:Gc(r);break;case 4:Gr();break;case 13:Ie(Be);break;case 19:Ie(Be);break;case 10:Hc(r.type._context);break;case 22:case 23:au()}n=n.return}if(tt=e,Ge=e=Hn(e.current,null),st=Ct=t,Xe=0,ei=null,su=Ko=hr=0,yt=Ls=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}or=null}return e}function Jh(e,t){do{var n=Ge;try{if(Wc(),Ki.current=jo,wo){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wo=!1}if(mr=0,et=Ye=Ue=null,Ts=!1,Ys=0,ru.current=null,n===null||n.return===null){Xe=1,ei=t,Ge=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=st,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=up(a);if(m!==null){m.flags&=-257,dp(m,a,l,o,t),m.mode&1&&cp(o,u,t),t=m,c=u;var y=t.updateQueue;if(y===null){var j=new Set;j.add(c),t.updateQueue=j}else y.add(c);break e}else{if(!(t&1)){cp(o,u,t),lu();break e}c=Error(te(426))}}else if(Oe&&l.mode&1){var z=up(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),dp(z,a,l,o,t),Uc(Qr(c,l));break e}}o=c=Qr(c,l),Xe!==4&&(Xe=2),Ls===null?Ls=[o]:Ls.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Th(o,c,t);rp(o,v);break e;case 1:l=c;var x=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Vn===null||!Vn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var T=Ph(o,l,t);rp(o,T);break e}}o=o.return}while(o!==null)}Qh(n)}catch(N){t=N,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function Kh(){var e=_o.current;return _o.current=jo,e===null?jo:e}function lu(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||!(hr&268435455)&&!(Ko&268435455)||An(tt,st)}function No(e,t){var n=Ne;Ne|=2;var r=Kh();(tt!==e||st!==t)&&(gn=null,lr(e,t));do try{j1();break}catch(i){Jh(e,i)}while(!0);if(Wc(),Ne=n,_o.current=r,Ge!==null)throw Error(te(261));return tt=null,st=0,Xe}function j1(){for(;Ge!==null;)Gh(Ge)}function _1(){for(;Ge!==null&&!Gy();)Gh(Ge)}function Gh(e){var t=Xh(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,t===null?Qh(e):Ge=t,ru.current=null}function Qh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=x1(n,t),n!==null){n.flags&=32767,Ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ge=null;return}}else if(n=g1(n,t,Ct),n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Xe===0&&(Xe=5)}function rr(e,t,n){var r=ze,i=Ut.transition;try{Ut.transition=null,ze=1,S1(e,t,n,r)}finally{Ut.transition=i,ze=r}return null}function S1(e,t,n,r){do Ur();while(Mn!==null);if(Ne&6)throw Error(te(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(te(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(iv(e,o),e===tt&&(Ge=tt=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mi||(Mi=!0,Zh(ao,function(){return Ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ut.transition,Ut.transition=null;var a=ze;ze=1;var l=Ne;Ne|=4,ru.current=null,v1(e,n),Wh(n,e),Hv(Tl),co=!!zl,Tl=zl=null,e.current=n,b1(n),Qy(),Ne=l,ze=a,Ut.transition=o}else e.current=n;if(Mi&&(Mi=!1,Mn=e,Co=i),o=e.pendingLanes,o===0&&(Vn=null),Zy(n.stateNode),wt(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(So)throw So=!1,e=Ql,Ql=null,e;return Co&1&&e.tag!==0&&Ur(),o=e.pendingLanes,o&1?e===Yl?As++:(As=0,Yl=e):As=0,Xn(),null}function Ur(){if(Mn!==null){var e=Tm(Co),t=Ut.transition,n=ze;try{if(Ut.transition=null,ze=16>e?16:e,Mn===null)var r=!1;else{if(e=Mn,Mn=null,Co=0,Ne&6)throw Error(te(331));var i=Ne;for(Ne|=4,ue=e.current;ue!==null;){var o=ue,a=o.child;if(ue.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ue=u;ue!==null;){var d=ue;switch(d.tag){case 0:case 11:case 15:Ps(8,d,o)}var p=d.child;if(p!==null)p.return=d,ue=p;else for(;ue!==null;){d=ue;var f=d.sibling,m=d.return;if(Bh(d),d===u){ue=null;break}if(f!==null){f.return=m,ue=f;break}ue=m}}}var y=o.alternate;if(y!==null){var j=y.child;if(j!==null){y.child=null;do{var z=j.sibling;j.sibling=null,j=z}while(j!==null)}}ue=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ue=a;else e:for(;ue!==null;){if(o=ue,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ps(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,ue=v;break e}ue=o.return}}var x=e.current;for(ue=x;ue!==null;){a=ue;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,ue=g;else e:for(a=x;ue!==null;){if(l=ue,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Jo(9,l)}}catch(N){We(l,l.return,N)}if(l===a){ue=null;break e}var T=l.sibling;if(T!==null){T.return=l.return,ue=T;break e}ue=l.return}}if(Ne=i,Xn(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Do,e)}catch{}r=!0}return r}finally{ze=n,Ut.transition=t}}return!1}function _p(e,t,n){t=Qr(n,t),t=Th(e,t,1),e=Un(e,t,1),t=mt(),e!==null&&(ci(e,1,t),wt(e,t))}function We(e,t,n){if(e.tag===3)_p(e,e,n);else for(;t!==null;){if(t.tag===3){_p(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vn===null||!Vn.has(r))){e=Qr(n,e),e=Ph(t,e,1),t=Un(t,e,1),e=mt(),t!==null&&(ci(t,1,e),wt(t,e));break}}t=t.return}}function C1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,tt===e&&(st&n)===n&&(Xe===4||Xe===3&&(st&130023424)===st&&500>He()-iu?lr(e,0):su|=n),wt(e,t)}function Yh(e,t){t===0&&(e.mode&1?(t=Si,Si<<=1,!(Si&130023424)&&(Si=4194304)):t=1);var n=mt();e=_n(e,t),e!==null&&(ci(e,t,n),wt(e,n))}function N1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yh(e,n)}function E1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(te(314))}r!==null&&r.delete(t),Yh(e,n)}var Xh;Xh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||bt.current)vt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return vt=!1,h1(e,t,n);vt=!!(e.flags&131072)}else vt=!1,Oe&&t.flags&1048576&&nh(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qi(e,t),e=t.pendingProps;var i=qr(t,ct.current);Br(t,n),i=Xc(null,t,r,e,i,n);var o=Zc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(r)?(o=!0,ho(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Jc(t),i.updater=qo,t.stateNode=i,i._reactInternals=t,Dl(t,r,e,n),t=Ul(null,t,r,!0,o,n)):(t.tag=0,Oe&&o&&Fc(t),ft(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=T1(r),e=Kt(r,e),i){case 0:t=Bl(null,t,r,e,n);break e;case 1:t=mp(null,t,r,e,n);break e;case 11:t=pp(null,t,r,e,n);break e;case 14:t=fp(null,t,r,Kt(r.type,e),n);break e}throw Error(te(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Kt(r,i),Bl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Kt(r,i),mp(e,t,r,i,n);case 3:e:{if(Mh(t),e===null)throw Error(te(387));r=t.pendingProps,o=t.memoizedState,i=o.element,lh(e,t),bo(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Qr(Error(te(423)),t),t=hp(e,t,r,n,i);break e}else if(r!==i){i=Qr(Error(te(424)),t),t=hp(e,t,r,n,i);break e}else for(Et=Bn(t.stateNode.containerInfo.firstChild),Pt=t,Oe=!0,Qt=null,n=oh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){t=Sn(e,t,n);break e}ft(e,t,r,n)}t=t.child}return t;case 5:return ch(t),e===null&&Il(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Pl(r,i)?a=null:o!==null&&Pl(r,o)&&(t.flags|=32),Rh(e,t),ft(e,t,a,n),t.child;case 6:return e===null&&Il(t),null;case 13:return Ih(e,t,n);case 4:return Kc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kr(t,null,r,n):ft(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Kt(r,i),pp(e,t,r,i,n);case 7:return ft(e,t,t.pendingProps,n),t.child;case 8:return ft(e,t,t.pendingProps.children,n),t.child;case 12:return ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ae(yo,r._currentValue),r._currentValue=a,o!==null)if(tn(o.value,a)){if(o.children===i.children&&!bt.current){t=Sn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=bn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ol(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(te(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ol(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}ft(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Br(t,n),i=Vt(i),r=r(i),t.flags|=1,ft(e,t,r,n),t.child;case 14:return r=t.type,i=Kt(r,t.pendingProps),i=Kt(r.type,i),fp(e,t,r,i,n);case 15:return Lh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Kt(r,i),Qi(e,t),t.tag=1,kt(r)?(e=!0,ho(t)):e=!1,Br(t,n),zh(t,r,i),Dl(t,r,i,n),Ul(null,t,r,!0,e,n);case 19:return Oh(e,t,n);case 22:return Ah(e,t,n)}throw Error(te(156,t.tag))};function Zh(e,t){return Cm(e,t)}function z1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,n,r){return new z1(e,t,n,r)}function cu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T1(e){if(typeof e=="function")return cu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ec)return 11;if(e===zc)return 14}return 2}function Hn(e,t){var n=e.alternate;return n===null?(n=Ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zi(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")cu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Sr:return cr(n.children,i,o,t);case Nc:a=8,i|=8;break;case cl:return e=Ft(12,n,t,i|2),e.elementType=cl,e.lanes=o,e;case ul:return e=Ft(13,n,t,i),e.elementType=ul,e.lanes=o,e;case dl:return e=Ft(19,n,t,i),e.elementType=dl,e.lanes=o,e;case cm:return Go(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case am:a=10;break e;case lm:a=9;break e;case Ec:a=11;break e;case zc:a=14;break e;case Tn:a=16,r=null;break e}throw Error(te(130,e==null?e:typeof e,""))}return t=Ft(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function cr(e,t,n,r){return e=Ft(7,e,r,t),e.lanes=n,e}function Go(e,t,n,r){return e=Ft(22,e,r,t),e.elementType=cm,e.lanes=n,e.stateNode={isHidden:!1},e}function $a(e,t,n){return e=Ft(6,e,null,t),e.lanes=n,e}function Da(e,t,n){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=va(0),this.expirationTimes=va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=va(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function uu(e,t,n,r,i,o,a,l,c){return e=new P1(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ft(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(o),e}function L1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_r,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function eg(e){if(!e)return Kn;e=e._reactInternals;e:{if(vr(e)!==e||e.tag!==1)throw Error(te(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(te(171))}if(e.tag===1){var n=e.type;if(kt(n))return eh(e,n,t)}return t}function tg(e,t,n,r,i,o,a,l,c){return e=uu(n,r,!0,e,i,o,a,l,c),e.context=eg(null),n=e.current,r=mt(),i=Wn(n),o=bn(r,i),o.callback=t??null,Un(n,o,i),e.current.lanes=i,ci(e,i,r),wt(e,r),e}function Qo(e,t,n,r){var i=t.current,o=mt(),a=Wn(i);return n=eg(n),t.context===null?t.context=n:t.pendingContext=n,t=bn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Un(i,t,a),e!==null&&(Zt(e,i,a,o),Ji(e,i,a)),a}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function du(e,t){Sp(e,t),(e=e.alternate)&&Sp(e,t)}function A1(){return null}var ng=typeof reportError=="function"?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}Yo.prototype.render=pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(te(409));Qo(e,t,null,null)};Yo.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gr(function(){Qo(null,e,null,null)}),t[jn]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Am();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ln.length&&t!==0&&t<Ln[n].priority;n++);Ln.splice(n,0,e),n===0&&Mm(e)}};function fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function R1(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Eo(a);o.call(u)}}var a=tg(t,r,e,0,null,!1,!1,"",Cp);return e._reactRootContainer=a,e[jn]=a.current,qs(e.nodeType===8?e.parentNode:e),gr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Eo(c);l.call(u)}}var c=uu(e,0,!1,null,null,!1,!1,"",Cp);return e._reactRootContainer=c,e[jn]=c.current,qs(e.nodeType===8?e.parentNode:e),gr(function(){Qo(t,c,n,r)}),c}function Zo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Eo(a);l.call(c)}}Qo(t,a,e,i)}else a=R1(n,t,e,i,r);return Eo(a)}Pm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ws(t.pendingLanes);n!==0&&(Lc(t,n|1),wt(t,He()),!(Ne&6)&&(Yr=He()+500,Xn()))}break;case 13:gr(function(){var r=_n(e,1);if(r!==null){var i=mt();Zt(r,e,1,i)}}),du(e,1)}};Ac=function(e){if(e.tag===13){var t=_n(e,134217728);if(t!==null){var n=mt();Zt(t,e,134217728,n)}du(e,134217728)}};Lm=function(e){if(e.tag===13){var t=Wn(e),n=_n(e,t);if(n!==null){var r=mt();Zt(n,e,t,r)}du(e,t)}};Am=function(){return ze};Rm=function(e,t){var n=ze;try{return ze=e,t()}finally{ze=n}};kl=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vo(r);if(!i)throw Error(te(90));dm(r),ml(r,i)}}}break;case"textarea":fm(e,n);break;case"select":t=n.value,t!=null&&Or(e,!!n.multiple,t,!1)}};bm=ou;km=gr;var M1={usingClientEntryPoint:!1,Events:[di,zr,Vo,ym,vm,ou]},ms={findFiberByHostInstance:ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I1={bundleType:ms.bundleType,version:ms.version,rendererPackageName:ms.rendererPackageName,rendererConfig:ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_m(e),e===null?null:e.stateNode},findFiberByHostInstance:ms.findFiberByHostInstance||A1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{Do=Ii.inject(I1),dn=Ii}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M1;At.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(t))throw Error(te(200));return L1(e,t,null,n)};At.createRoot=function(e,t){if(!fu(e))throw Error(te(299));var n=!1,r="",i=ng;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=uu(e,1,!1,null,null,n,!1,r,i),e[jn]=t.current,qs(e.nodeType===8?e.parentNode:e),new pu(t)};At.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(te(188)):(e=Object.keys(e).join(","),Error(te(268,e)));return e=_m(t),e=e===null?null:e.stateNode,e};At.flushSync=function(e){return gr(e)};At.hydrate=function(e,t,n){if(!Xo(t))throw Error(te(200));return Zo(null,e,t,!0,n)};At.hydrateRoot=function(e,t,n){if(!fu(e))throw Error(te(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=ng;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=tg(t,null,e,1,n??null,i,!1,o,a),e[jn]=t.current,qs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yo(t)};At.render=function(e,t,n){if(!Xo(t))throw Error(te(200));return Zo(null,e,t,!1,n)};At.unmountComponentAtNode=function(e){if(!Xo(e))throw Error(te(40));return e._reactRootContainer?(gr(function(){Zo(null,null,e,!1,function(){e._reactRootContainer=null,e[jn]=null})}),!0):!1};At.unstable_batchedUpdates=ou;At.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xo(n))throw Error(te(200));if(e==null||e._reactInternals===void 0)throw Error(te(38));return Zo(e,t,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function rg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rg)}catch(e){console.error(e)}}rg(),rm.exports=At;var sg=rm.exports,Np=sg;al.createRoot=Np.createRoot,al.hydrateRoot=Np.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ti.apply(this,arguments)}var In;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(In||(In={}));const Ep="popstate";function O1(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return ec("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ig(i)}return D1(t,n,null,e)}function Qe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $1(){return Math.random().toString(36).substr(2,8)}function zp(e,t){return{usr:e.state,key:e.key,idx:t}}function ec(e,t,n,r){return n===void 0&&(n=null),ti({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?rs(t):t,{state:n,key:t&&t.key||r||$1()})}function ig(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function rs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function D1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=In.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(ti({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=In.Pop;let z=d(),v=z==null?null:z-u;u=z,c&&c({action:l,location:j.location,delta:v})}function f(z,v){l=In.Push;let x=ec(j.location,z,v);u=d()+1;let g=zp(x,u),T=j.createHref(x);try{a.pushState(g,"",T)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(T)}o&&c&&c({action:l,location:j.location,delta:1})}function m(z,v){l=In.Replace;let x=ec(j.location,z,v);u=d();let g=zp(x,u),T=j.createHref(x);a.replaceState(g,"",T),o&&c&&c({action:l,location:j.location,delta:0})}function y(z){let v=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof z=="string"?z:ig(z);return x=x.replace(/ $/,"%20"),Qe(v,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,v)}let j={get action(){return l},get location(){return e(i,a)},listen(z){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ep,p),c=z,()=>{i.removeEventListener(Ep,p),c=null}},createHref(z){return t(i,z)},createURL:y,encodeLocation(z){let v=y(z);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(z){return a.go(z)}};return j}var Tp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tp||(Tp={}));function F1(e,t,n){return n===void 0&&(n="/"),B1(e,t,n)}function B1(e,t,n,r){let i=typeof t=="string"?rs(t):t,o=lg(i.pathname||"/",n);if(o==null)return null;let a=og(e);U1(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=eb(o);l=Y1(a[c],u)}return l}function og(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(Qe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=ur([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),og(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:G1(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of ag(o.path))i(o,a,c)}),t}function ag(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=ag(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function U1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Q1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const V1=/^:[\w-]+$/,W1=3,H1=2,q1=1,J1=10,K1=-2,Pp=e=>e==="*";function G1(e,t){let n=e.split("/"),r=n.length;return n.some(Pp)&&(r+=K1),t&&(r+=H1),n.filter(i=>!Pp(i)).reduce((i,o)=>i+(V1.test(o)?W1:o===""?q1:J1),r)}function Q1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Y1(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=X1({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:ur([o,p.pathname]),pathnameBase:ib(ur([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=ur([o,p.pathnameBase]))}return a}function X1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Z1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let j=l[p]||"";a=o.slice(0,o.length-j.length).replace(/(.)\/+$/,"$1")}const y=l[p];return m&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Z1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function eb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lg(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const tb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nb=e=>tb.test(e);function rb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?rs(e):e,o;if(n)if(nb(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),mu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Lp(n.substring(1),"/"):o=Lp(n,t)}else o=t;return{pathname:o,search:ob(r),hash:ab(i)}}function Lp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function cg(e,t){let n=sb(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ug(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=rs(e):(i=ti({},e),Qe(!i.pathname||!i.pathname.includes("?"),Fa("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),Fa("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),Fa("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=rb(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const ur=e=>e.join("/").replace(/\/\/+/g,"/"),ib=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ob=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ab=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dg=["post","put","patch","delete"];new Set(dg);const cb=["get",...dg];new Set(cb);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ni.apply(this,arguments)}const hu=b.createContext(null),ub=b.createContext(null),fi=b.createContext(null),ea=b.createContext(null),Zn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),pg=b.createContext(null);function mi(){return b.useContext(ea)!=null}function gu(){return mi()||Qe(!1),b.useContext(ea).location}function fg(e){b.useContext(fi).static||b.useLayoutEffect(e)}function xu(){let{isDataRoute:e}=b.useContext(Zn);return e?_b():db()}function db(){mi()||Qe(!1);let e=b.useContext(hu),{basename:t,future:n,navigator:r}=b.useContext(fi),{matches:i}=b.useContext(Zn),{pathname:o}=gu(),a=JSON.stringify(cg(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return fg(()=>{l.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=ug(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ur([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function pb(){let{matches:e}=b.useContext(Zn),t=e[e.length-1];return t?t.params:{}}function fb(e,t){return mb(e,t)}function mb(e,t,n,r){mi()||Qe(!1);let{navigator:i}=b.useContext(fi),{matches:o}=b.useContext(Zn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=gu(),d;if(t){var p;let z=typeof t=="string"?rs(t):t;c==="/"||(p=z.pathname)!=null&&p.startsWith(c)||Qe(!1),d=z}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let z=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(z.length).join("/")}let y=F1(e,{pathname:m}),j=vb(y&&y.map(z=>Object.assign({},z,{params:Object.assign({},l,z.params),pathname:ur([c,i.encodeLocation?i.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?c:ur([c,i.encodeLocation?i.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),o,n,r);return t&&j?b.createElement(ea.Provider,{value:{location:ni({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:In.Pop}},j):j}function hb(){let e=jb(),t=lb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const gb=b.createElement(hb,null);class xb extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Zn.Provider,{value:this.props.routeContext},b.createElement(pg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yb(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(hu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Zn.Provider,{value:t},r)}function vb(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Qe(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,y=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,y=!1,j=null,z=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,j=p.route.errorElement||gb,c&&(u<0&&f===0?(Sb("route-fallback"),y=!0,z=null):u===f&&(y=!0,z=p.route.hydrateFallbackElement||null)));let v=t.concat(a.slice(0,f+1)),x=()=>{let g;return m?g=j:y?g=z:p.route.Component?g=b.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,b.createElement(yb,{match:p,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?b.createElement(xb,{location:n.location,revalidation:n.revalidation,component:j,error:m,children:x(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):x()},null)}var mg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mg||{}),hg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(hg||{});function bb(e){let t=b.useContext(hu);return t||Qe(!1),t}function kb(e){let t=b.useContext(ub);return t||Qe(!1),t}function wb(e){let t=b.useContext(Zn);return t||Qe(!1),t}function gg(e){let t=wb(),n=t.matches[t.matches.length-1];return n.route.id||Qe(!1),n.route.id}function jb(){var e;let t=b.useContext(pg),n=kb(),r=gg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _b(){let{router:e}=bb(mg.UseNavigateStable),t=gg(hg.UseNavigateStable),n=b.useRef(!1);return fg(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ni({fromRouteId:t},o)))},[e,t])}const Ap={};function Sb(e,t,n){Ap[e]||(Ap[e]=!0)}function Cb(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Nb(e){let{to:t,replace:n,state:r,relative:i}=e;mi()||Qe(!1);let{future:o,static:a}=b.useContext(fi),{matches:l}=b.useContext(Zn),{pathname:c}=gu(),u=xu(),d=ug(t,cg(l,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return b.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function jr(e){Qe(!1)}function Eb(e){let{basename:t="/",children:n=null,location:r,navigationType:i=In.Pop,navigator:o,static:a=!1,future:l}=e;mi()&&Qe(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:o,static:a,future:ni({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=rs(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:y="default"}=r,j=b.useMemo(()=>{let z=lg(d,c);return z==null?null:{location:{pathname:z,search:p,hash:f,state:m,key:y},navigationType:i}},[c,d,p,f,m,y,i]);return j==null?null:b.createElement(fi.Provider,{value:u},b.createElement(ea.Provider,{children:n,value:j}))}function zb(e){let{children:t,location:n}=e;return fb(tc(t),n)}new Promise(()=>{});function tc(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,tc(r.props.children,o));return}r.type!==jr&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=tc(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Tb="6";try{window.__reactRouterVersion=Tb}catch{}const Pb="startTransition",Rp=Cy[Pb];function Lb(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=O1({window:i,v5Compat:!0}));let a=o.current,[l,c]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(p=>{u&&Rp?Rp(()=>c(p)):c(p)},[c,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.useEffect(()=>Cb(r),[r]),b.createElement(Eb,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Mp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mp||(Mp={}));var Ip;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ip||(Ip={}));const Ab={},Op=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(y=>y(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Ab?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},Rb=e=>e?Op(e):Op;var xg={exports:{}},yg={},vg={exports:{}},bg={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=b;function Mb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ib=typeof Object.is=="function"?Object.is:Mb,Ob=Xr.useState,$b=Xr.useEffect,Db=Xr.useLayoutEffect,Fb=Xr.useDebugValue;function Bb(e,t){var n=t(),r=Ob({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return Db(function(){i.value=n,i.getSnapshot=t,Ba(i)&&o({inst:i})},[e,n,t]),$b(function(){return Ba(i)&&o({inst:i}),e(function(){Ba(i)&&o({inst:i})})},[e]),Fb(n),n}function Ba(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ib(e,n)}catch{return!0}}function Ub(e,t){return t()}var Vb=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ub:Bb;bg.useSyncExternalStore=Xr.useSyncExternalStore!==void 0?Xr.useSyncExternalStore:Vb;vg.exports=bg;var Wb=vg.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=b,Hb=Wb;function qb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jb=typeof Object.is=="function"?Object.is:qb,Kb=Hb.useSyncExternalStore,Gb=ta.useRef,Qb=ta.useEffect,Yb=ta.useMemo,Xb=ta.useDebugValue;yg.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=Gb(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Yb(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var y=a.value;if(i(y,m))return p=y}return p=m}if(y=p,Jb(d,m))return y;var j=r(m);return i!==void 0&&i(y,j)?(d=m,y):(d=m,p=j)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=Kb(e,o[0],o[1]);return Qb(function(){a.hasValue=!0,a.value=l},[l]),Xb(l),l};xg.exports=yg;var Zb=xg.exports;const e0=Oo(Zb),kg={},{useDebugValue:t0}=Tt,{useSyncExternalStoreWithSelector:n0}=e0;let $p=!1;const r0=e=>e;function s0(e,t=r0,n){(kg?"production":void 0)!=="production"&&n&&!$p&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),$p=!0);const r=n0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return t0(r),r}const Dp=e=>{(kg?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Rb(e):e,n=(r,i)=>s0(t,r,i);return Object.assign(n,t),n},i0=e=>e?Dp(e):Dp,ut=i0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),wg="/api";async function _e(e,t){const n=await fetch(`${wg}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function jg(){return(await _e("/projects")).projects}async function _g(e){return(await _e(`/projects/${e}`)).project}async function Sg(e,t=""){return(await _e("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function nc(e,t){return(await _e(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Cg(e){await _e(`/projects/${e}`,{method:"DELETE"})}async function Ng(e){return _e(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function rc(e){return(await _e(`/projects/${e}/sessions`)).sessions}async function Eg(e,t){return(await _e(`/projects/${e}/sessions/${t}/load`)).session}async function zg(e){return(await _e(`/projects/${e}/yaml`)).yaml}async function Tg(e,t){return(await _e(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function yu(){return(await _e("/mcp-servers")).servers}async function Pg(){return(await _e("/builtin-tools")).tools}function Lg(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function eo(e,t,n,r){return await _e(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Ag(e,t){return await _e(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Rg(e,t,n,r=[],i){return await _e(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Mg(e,t,n,r,i=[],o){return await _e(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function sc(e){return await _e("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Ig(e,t){return _e(`/projects/${e}/skillsets/${t}/stats`)}async function Og(e,t,n,r,i=500,o=50){return _e(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:o})})}async function $g(e,t,n,r=500,i=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(i));const a=await fetch(`${wg}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Dg(e,t,n,r=10,i=0){return _e(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Fg(e,t){return _e(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Bg(){return _e("/skillsets/embeddings-available")}const qe={async get(e){return _e(e)},async post(e,t){return _e(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return _e(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return _e(e,{method:"DELETE"})}},o0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Og,api:qe,checkEmbeddingsAvailable:Bg,clearSkillSet:Fg,createProject:Sg,createRunWebSocket:Lg,deleteProject:Cg,fetchJSON:_e,generateAgentConfig:Ag,generateCallbackCode:Mg,generatePrompt:eo,generateToolCode:Rg,getBuiltinTools:Pg,getMcpServers:yu,getProject:_g,getProjectYaml:zg,getSkillSetStats:Ig,listProjectSessions:rc,listProjects:jg,loadSession:Eg,saveSessionToMemory:Ng,searchSkillSet:Dg,testMcpServer:sc,updateProject:nc,updateProjectFromYaml:Tg,uploadSkillSetFile:$g},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),de=(e,t)=>{const n=b.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>b.createElement("svg",{ref:d,...a0,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${l0(e)}`,l].join(" "),...u},[...t.map(([p,f])=>b.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=de("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=de("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=de("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=de("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=de("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=de("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=de("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=de("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=de("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=de("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=de("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=de("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=de("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=de("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=de("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=de("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=de("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=de("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=de("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=de("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=de("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=de("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=de("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=de("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=de("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=de("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=de("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=de("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=de("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=de("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=de("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=de("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=de("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=de("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=de("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=de("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=de("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=de("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=de("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=de("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=de("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=de("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=de("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=de("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=de("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=de("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=de("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=de("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=de("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=de("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=de("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=de("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=de("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=de("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=de("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=de("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=de("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=de("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=de("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=de("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=de("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=de("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=de("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=de("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=de("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function N0(){const e=xu(),[t,n]=b.useState([]),[r,i]=b.useState(!0),[o,a]=b.useState(!1),[l,c]=b.useState("");b.useEffect(()=>{u()},[]);async function u(){try{const f=await jg();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Sg(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Cg(f),n(t.filter(y=>y.id!==f))}catch(y){console.error("Failed to delete project:",y)}}return s.jsxs("div",{className:"project-list",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"logo",children:[s.jsx(_u,{size:40,className:"logo-icon"}),s.jsx("h1",{className:"title",children:"ADK Playground"})]}),s.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),s.jsxs("div",{className:"content",children:[o?s.jsxs("div",{className:"create-form",children:[s.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),s.jsxs("button",{className:"btn btn-primary",onClick:d,children:[s.jsx(Ke,{size:18}),"Create"]}),s.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):s.jsx("div",{className:"create-form",children:s.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[s.jsx(Ke,{size:18}),"New Project"]})}),r?s.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Fp,{size:48,style:{marginBottom:16,opacity:.3}}),s.jsx("p",{children:"No projects yet. Create one to get started!"})]}):s.jsx("div",{className:"projects-grid",children:t.map(f=>s.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[s.jsxs("h3",{children:[s.jsx(Fp,{size:18}),f.name]}),s.jsx("p",{children:f.description||"No description"}),s.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:s.jsx($e,{size:16})})]},f.id))})]})]})}const Bp={},E0=5*60*1e3;function z0({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:o="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=b.useState(t||""),[u,d]=b.useState(!1),[p,f]=b.useState([]),[m,y]=b.useState(!1),[j,z]=b.useState(null),[v,x]=b.useState(-1),[g,T]=b.useState({top:0,left:0,width:0}),N=b.useRef(null),_=b.useRef(null);b.useEffect(()=>{if(u&&N.current){const U=N.current.getBoundingClientRect();T({top:U.bottom+window.scrollY+4,left:U.left+window.scrollX,width:U.width})}},[u]);const C=b.useCallback(async()=>{const U=Bp[a];if(U&&Date.now()-U.timestamp<E0){const B=[];Object.values(U.providers).forEach(se=>{B.push(...se.models)}),f(B);return}y(!0),z(null);try{const B=new URLSearchParams;n&&B.append("provider",n),r&&B.append("api_base",r);const se=`/models/${e}${B.toString()?"?"+B.toString():""}`,P=await qe.get(se);Bp[a]={providers:P.providers,timestamp:Date.now()};const $=[];Object.values(P.providers).forEach(M=>{M.models&&M.models.length>0&&$.push(...M.models)}),f($)}catch(B){z(B.message||"Failed to fetch models")}finally{y(!1)}},[e,a,r,n]);b.useEffect(()=>{C()},[C]),b.useEffect(()=>{c(t||"")},[t]);const k=p.filter(U=>{const B=l.toLowerCase();return U.id.toLowerCase().includes(B)||U.name.toLowerCase().includes(B)||U.provider.toLowerCase().includes(B)});b.useEffect(()=>{const U=B=>{_.current&&!_.current.contains(B.target)&&N.current&&!N.current.contains(B.target)&&d(!1)};return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[]);const R=U=>{if(!u){(U.key==="ArrowDown"||U.key==="Enter")&&(d(!0),U.preventDefault());return}switch(U.key){case"ArrowDown":x(B=>Math.min(B+1,k.length-1)),U.preventDefault();break;case"ArrowUp":x(B=>Math.max(B-1,0)),U.preventDefault();break;case"Enter":v>=0&&v<k.length&&S(k[v]),U.preventDefault();break;case"Escape":d(!1);break}},S=U=>{c(U.id),i(U.id,U.provider),d(!1)},L=U=>{c(U.target.value),d(!0),x(-1),i(U.target.value,n||"gemini")},I=U=>{switch(U.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"ollama":return"provider-ollama";default:return"provider-other"}},q=u?s.jsxs("div",{ref:_,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:g.top,left:g.left,width:g.width},children:[m&&s.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),j&&s.jsx("div",{className:"model-autocomplete-error",children:j}),!m&&!j&&k.length===0&&s.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!m&&k.length>0&&s.jsxs("div",{className:"model-autocomplete-list",children:[k.slice(0,50).map((U,B)=>s.jsxs("div",{className:`model-autocomplete-item ${B===v?"highlighted":""}`,onClick:()=>S(U),onMouseEnter:()=>x(B),children:[s.jsx("span",{className:`provider-badge ${I(U.provider)}`,children:U.provider}),s.jsx("span",{className:"model-id",children:U.id}),U.context_window&&s.jsxs("span",{className:"model-context",title:`${U.context_window.toLocaleString()} token context`,children:[Math.round(U.context_window/1e3),"K"]}),U.supports_tools&&s.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),U.supports_vision&&s.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),U.supports_json_mode&&s.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${U.provider}-${U.id}`)),k.length>50&&s.jsxs("div",{className:"model-autocomplete-more",children:["+",k.length-50," more..."]})]})]}):null;return s.jsxs("div",{className:"model-autocomplete",children:[s.jsx("input",{ref:N,type:"text",value:l,onChange:L,onFocus:()=>d(!0),onKeyDown:R,placeholder:o,className:"model-autocomplete-input"}),q&&sg.createPortal(q,document.body)]})}const T0=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"litellm",label:"LiteLLM / Other"}];function P0(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function Xg({projectId:e,values:t,onChange:n,className:r=""}){return s.jsxs("div",{className:`model-config-form ${r}`,children:[s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",style:{flex:1},children:[s.jsx("label",{children:"Provider"}),s.jsx("select",{value:t.provider||"gemini",onChange:i=>n({provider:i.target.value}),children:T0.map(i=>s.jsx("option",{value:i.value,children:i.label},i.value))})]}),s.jsxs("div",{className:"model-config-field",style:{flex:3},children:[s.jsx("label",{children:"Model"}),s.jsx(z0,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(i,o)=>{const a=P0(i,o);n({model_name:i,provider:a})},placeholder:"Search models..."})]}),t.provider==="litellm"&&s.jsxs("div",{className:"model-config-field",style:{flex:2},children:[s.jsx("label",{children:"API Base"}),s.jsx("input",{type:"text",value:t.api_base||"",onChange:i=>n({api_base:i.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),s.jsxs("div",{className:"model-config-row",children:[s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Temperature"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:i=>n({temperature:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Max Tokens"}),s.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:i=>n({max_output_tokens:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top P"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:i=>n({top_p:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"model-config-field",children:[s.jsx("label",{children:"Top K"}),s.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:i=>n({top_k:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]})]})]})}const L0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function A0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function R0(){var Q;const{project:e,updateProject:t}=ut(),[n,r]=b.useState(null);if(!e)return null;const{app:i}=e;function o(h){t({app:{...i,...h}})}function a(h){if(h===""){r(null),o({name:h});return}A0(h)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:h})}function l(){const h={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,h]})}function c(h,D){const E=[...i.state_keys];E[h]={...E[h],...D},o({state_keys:E})}function u(h){o({state_keys:i.state_keys.filter((D,E)=>E!==h)})}function d(h="ReflectAndRetryToolPlugin"){let D;switch(h){case"ReflectAndRetryToolPlugin":D={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":D={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":D={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":D={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":D={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":D={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:D={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...i.plugins,D]})}function p(h,D){const E=[...i.plugins];E[h]={...E[h],...D},o({plugins:E})}function f(h){o({plugins:i.plugins.filter((D,E)=>E!==h)})}const m=i.sandbox||{enabled:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:300,volume_mounts:[]},y=((Q=m.allowlist)==null?void 0:Q.user)||[],j=m.volume_mounts||[];function z(h){o({sandbox:{...m,...h}})}async function v(h){const D=i.id;try{await fetch(`/api/sandbox/${D}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:h.map(E=>({pattern:E.pattern,pattern_type:E.pattern_type})).filter(E=>E.pattern)})})}catch(E){console.debug("Could not sync allowlist to gateway:",E)}}function x(){const h={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},D={...m.allowlist,user:[...y,h]};z({allowlist:D})}function g(h,D){const E=[...y];E[h]={...E[h],...D};const G=E;z({allowlist:{...m.allowlist,user:G}}),D.pattern&&v(G)}function T(h){const D=y.filter((E,G)=>G!==h);z({allowlist:{...m.allowlist,user:D}})}function N(){const h={host_path:"",container_path:"/mnt/data",mode:"ro"};z({volume_mounts:[...j,h]})}function _(h,D){const E=[...j];E[h]={...E[h],...D},z({volume_mounts:E})}function C(h){const D=j.filter((E,G)=>G!==h);z({volume_mounts:D})}const k=i.models||[];function R(){const h=`model_${Date.now().toString(36)}`,D={id:h,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:k.length===0};o({models:[...k,D],default_model_id:k.length===0?h:i.default_model_id})}function S(h,D){const E=k.map(G=>G.id===h?{...G,...D}:G);o({models:E})}function L(h){var G;const D=k.filter(ge=>ge.id!==h),E=i.default_model_id===h?((G=D[0])==null?void 0:G.id)||void 0:i.default_model_id;o({models:D,default_model_id:E})}function I(h){o({default_model_id:h})}const q=i.env_vars||{},[U,B]=b.useState({}),[se,P]=b.useState("");function $(h=""){const D=h||se.trim();!D||q[D]!==void 0||(o({env_vars:{...q,[D]:""}}),P(""))}function M(h,D){o({env_vars:{...q,[h]:D}})}function w(h){const D={...q};delete D[h],o({env_vars:D})}function V(h){B(D=>({...D,[h]:!D[h]}))}return s.jsxs("div",{className:"app-config",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(_0,{size:20}),"Basic Information"]})}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"App Name"}),s.jsx("input",{type:"text",value:i.name,onChange:h=>a(h.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Root Agent"}),s.jsxs("select",{value:i.root_agent_id||"",onChange:h=>o({root_agent_id:h.target.value||void 0}),children:[s.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(h=>s.jsx("option",{value:h.id,children:h.name},h.id))]})]}),s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:i.description,onChange:h=>o({description:h.target.value}),rows:2})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(kn,{size:20}),"Services"]}),s.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Session Service"}),s.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:h=>{const D=h.target.value;o({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[D]||D+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System (JSON)"}),s.jsx("option",{value:"sqlite",children:"SQLite (local)"}),s.jsx("option",{value:"postgresql",children:"PostgreSQL"}),s.jsx("option",{value:"mysql",children:"MySQL"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:h=>o({session_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:h=>o({session_service_uri:"sqlite://"+h.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&s.jsx("input",{type:"text",value:i.session_service_uri,onChange:h=>o({session_service_uri:h.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:h=>{const D=i.session_service_uri.split("/");D[2]=h.target.value,o({session_service_uri:D.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:h=>{const D=i.session_service_uri.split("/");D[3]=h.target.value,o({session_service_uri:D.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:h=>{const D=i.session_service_uri.split("/");D[4]=h.target.value,o({session_service_uri:D.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Memory Service"}),s.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:h=>{const D=h.target.value;o({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[D]||D+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),s.jsx("option",{value:"file",children:"File System (keyword matching)"}),s.jsx("option",{value:"rag",children:"Vertex AI RAG"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:h=>o({memory_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:h=>o({memory_service_uri:"rag://"+h.target.value}),placeholder:"rag-corpus-id or full resource path"}),s.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:h=>{const D=i.memory_service_uri.split("/");D[2]=h.target.value,o({memory_service_uri:D.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:h=>{const D=i.memory_service_uri.split("/");D[3]=h.target.value,o({memory_service_uri:D.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:h=>{const D=i.memory_service_uri.split("/");D[4]=h.target.value,o({memory_service_uri:D.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Artifact Service"}),s.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:h=>{const D=h.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[D]||D+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System"}),s.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:h=>o({artifact_service_uri:"file://"+h.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:h=>o({artifact_service_uri:"gs://"+h.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(oc,{size:20}),"Environment Variables"]})}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:L0.filter(h=>q[h.key]===void 0).map(h=>s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>$(h.key),title:h.description,children:[s.jsx(Ke,{size:12}),h.key]},h.key))}),Object.keys(q).length===0?s.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(q).map(([h,D])=>s.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[s.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[s.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:h}),s.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[s.jsx("input",{type:U[h]?"text":"password",value:D,onChange:E=>M(h,E.target.value),placeholder:"Enter value...",style:{flex:1}}),s.jsx("button",{className:"delete-item",onClick:()=>V(h),title:U[h]?"Hide value":"Show value",children:U[h]?s.jsx(f0,{size:16}):s.jsx(si,{size:16})})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>w(h),children:s.jsx($e,{size:16})})]},h)),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[s.jsx("input",{type:"text",value:se,onChange:h=>P(h.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:h=>h.key==="Enter"&&$()}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>$(),disabled:!se.trim(),children:[s.jsx(Ke,{size:14}),"Add Variable"]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(bu,{size:20}),"Models"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:R,children:[s.jsx(Ke,{size:14}),"Add Model"]})]}),k.length===0?s.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):k.map(h=>s.jsxs("div",{className:"model-card",children:[s.jsxs("div",{className:"model-card-header",children:[s.jsx("input",{type:"text",value:h.name,onChange:D=>S(h.id,{name:D.target.value}),placeholder:"Model name",className:"model-name-input"}),s.jsx("button",{className:`default-model-btn ${i.default_model_id===h.id?"is-default":""}`,onClick:()=>I(h.id),title:i.default_model_id===h.id?"Default model":"Set as default",children:s.jsx(Gg,{size:14,fill:i.default_model_id===h.id?"currentColor":"none"})}),s.jsx("button",{className:"delete-item",onClick:()=>L(h.id),children:s.jsx($e,{size:16})})]}),s.jsx("div",{className:"model-card-body",children:s.jsx(Xg,{projectId:e.id,values:h,onChange:D=>S(h.id,D)})})]},h.id))]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(Yg,{size:20}),"Advanced Options"]})}),s.jsxs("div",{className:"toggle-group",children:[s.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Event Compaction"}),s.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&s.jsx("input",{type:"number",value:i.compaction.max_events,onChange:h=>o({compaction:{...i.compaction,max_events:parseInt(h.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Context Caching"}),s.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&s.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:h=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(h.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Resumability"}),s.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(wu,{size:20}),"Session State Keys"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[s.jsx(Ke,{size:14}),"Add Key"]})]}),i.state_keys.length===0?s.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((h,D)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",children:[s.jsx("input",{type:"text",value:h.name,onChange:E=>c(D,{name:E.target.value}),placeholder:"Key name"}),s.jsxs("select",{value:h.type,onChange:E=>c(D,{type:E.target.value}),children:[s.jsx("option",{value:"string",children:"String"}),s.jsx("option",{value:"number",children:"Number"}),s.jsx("option",{value:"boolean",children:"Boolean"}),s.jsx("option",{value:"object",children:"Object"}),s.jsx("option",{value:"array",children:"Array"})]}),s.jsxs("select",{value:h.scope,onChange:E=>c(D,{scope:E.target.value}),children:[s.jsx("option",{value:"session",children:"Session"}),s.jsx("option",{value:"user",children:"User"}),s.jsx("option",{value:"app",children:"App"}),s.jsx("option",{value:"temp",children:"Temporary"})]}),s.jsx("input",{type:"text",value:h.description,onChange:E=>c(D,{description:E.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),s.jsx("button",{className:"delete-item",onClick:()=>u(D),children:s.jsx($e,{size:16})})]},D))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(Yt,{size:20}),"Plugins"]}),s.jsx("div",{className:"plugin-add-dropdown",children:s.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:h=>{h.target.value&&(d(h.target.value),h.target.value="")},style:{paddingRight:8},children:[s.jsx("option",{value:"",children:"+ Add Plugin..."}),s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?s.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((h,D)=>s.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[s.jsxs("select",{value:h.type,onChange:E=>p(D,{type:E.target.value}),style:{flex:1},children:[s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),s.jsx("button",{className:"delete-item",onClick:()=>f(D),children:s.jsx($e,{size:16})})]}),h.type==="ReflectAndRetryToolPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Max Retries"}),s.jsx("input",{type:"number",min:"0",max:"10",value:h.max_retries??3,onChange:E=>p(D,{max_retries:parseInt(E.target.value)||0}),style:{width:70}})]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:h.throw_exception_if_retry_exceeded??!1,onChange:E=>p(D,{throw_exception_if_retry_exceeded:E.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),h.type==="ContextFilterPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),s.jsx("input",{type:"number",min:"1",max:"100",value:h.num_invocations_to_keep??5,onChange:E=>p(D,{num_invocations_to_keep:parseInt(E.target.value)||1}),style:{width:70}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),h.type==="LoggingPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),h.type==="GlobalInstructionPlugin"&&s.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),s.jsx("textarea",{value:h.global_instruction??"",onChange:E=>p(D,{global_instruction:E.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),h.type==="SaveFilesAsArtifactsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),h.type==="MultimodalToolResultsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},D))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(Kg,{size:20}),"Network Allowlist"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[s.jsx(Ke,{size:14}),"Add Pattern"]})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:12},children:"Patterns that are automatically allowed when running in sandbox mode. Requests to other domains will prompt for approval."}),y.length===0?s.jsx("p",{className:"empty-message",children:"No custom allowlist patterns. LLM API providers are allowed by default."}):y.map((h,D)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",style:{display:"flex",gap:8,alignItems:"center"},children:[s.jsx(ku,{size:16,style:{color:"var(--text-muted)",flexShrink:0}}),s.jsx("input",{type:"text",value:h.pattern,onChange:E=>g(D,{pattern:E.target.value}),placeholder:"example.com or *.example.com",style:{flex:1}}),s.jsxs("select",{value:h.pattern_type,onChange:E=>g(D,{pattern_type:E.target.value}),style:{width:100},children:[s.jsx("option",{value:"exact",children:"Exact"}),s.jsx("option",{value:"wildcard",children:"Wildcard"}),s.jsx("option",{value:"regex",children:"Regex"})]}),s.jsx("span",{style:{fontSize:10,padding:"2px 6px",backgroundColor:h.source==="approved"?"rgba(34, 197, 94, 0.2)":"rgba(107, 114, 128, 0.2)",color:h.source==="approved"?"#4ade80":"var(--text-muted)",borderRadius:4,flexShrink:0},children:h.source})]}),s.jsx("button",{className:"delete-item",onClick:()=>T(D),children:s.jsx($e,{size:16})})]},h.id||D)),s.jsxs("div",{style:{marginTop:16,padding:12,backgroundColor:"var(--bg-tertiary)",borderRadius:6,fontSize:12},children:[s.jsx("div",{style:{fontWeight:500,marginBottom:6,color:"var(--text-secondary)"},children:"Default Allowed Domains:"}),s.jsx("div",{style:{color:"var(--text-muted)",lineHeight:1.6},children:"generativelanguage.googleapis.com, api.openai.com, api.anthropic.com, api.together.xyz, api.groq.com, api.mistral.ai"})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(x0,{size:20}),"Volume Mounts"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:N,children:[s.jsx(Ke,{size:14}),"Add Mount"]})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:12},children:"Mount local directories into the Docker sandbox so MCP servers and tools can access files."}),j.length===0?s.jsx("p",{className:"empty-message",children:"No volume mounts configured. Add mounts to allow MCP servers to access local files."}):j.map((h,D)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[s.jsx(Vg,{size:16,style:{color:"var(--text-muted)",flexShrink:0}}),s.jsx("input",{type:"text",value:h.host_path,onChange:E=>_(D,{host_path:E.target.value}),placeholder:"~/Documents or /path/to/folder",style:{flex:1,minWidth:150},title:"Host path (local directory)"}),s.jsx("span",{style:{color:"var(--text-muted)",fontSize:12},children:"→"}),s.jsx("input",{type:"text",value:h.container_path,onChange:E=>_(D,{container_path:E.target.value}),placeholder:"/mnt/data",style:{width:140},title:"Container path (where it appears in sandbox)"}),s.jsxs("select",{value:h.mode,onChange:E=>_(D,{mode:E.target.value}),style:{width:100},title:"Access mode",children:[s.jsx("option",{value:"ro",children:"Read Only"}),s.jsx("option",{value:"rw",children:"Read/Write"})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>C(D),children:s.jsx($e,{size:16})})]},D)),s.jsxs("div",{style:{marginTop:16,padding:12,backgroundColor:"var(--bg-tertiary)",borderRadius:6,fontSize:12},children:[s.jsx("div",{style:{fontWeight:500,marginBottom:6,color:"var(--text-secondary)"},children:"Usage Tips:"}),s.jsxs("div",{style:{color:"var(--text-muted)",lineHeight:1.6},children:["• Use ",s.jsx("code",{style:{background:"var(--bg-primary)",padding:"1px 4px",borderRadius:3},children:"~/Documents"})," to mount your Documents folder",s.jsx("br",{}),"• MCP filesystem server needs access to directories it should manage",s.jsx("br",{}),'• Use "Read Only" mode for safety unless write access is needed']})]})]})]})}const M0="modulepreload",I0=function(e){return"/"+e},Up={},O0=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=I0(c),c in Up)return;Up[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":M0,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function Vp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function $0(e){if(Array.isArray(e))return e}function D0(e,t,n){return(t=q0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function B0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Hp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wp(Object(n),!0).forEach(function(r){D0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function U0(e,t){if(e==null)return{};var n,r,i=V0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function V0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function W0(e,t){return $0(e)||F0(e,t)||J0(e,t)||B0()}function H0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function q0(e){var t=H0(e,"string");return typeof t=="symbol"?t:t+""}function J0(e,t){if(e){if(typeof e=="string")return Vp(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Vp(e,t):void 0}}function K0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Jp(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qp(Object(n),!0).forEach(function(r){K0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function G0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function _s(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Ao(e){return{}.toString.call(e).includes("Object")}function Q0(e){return!Object.keys(e).length}function ii(e){return typeof e=="function"}function Y0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function X0(e,t){return Ao(t)||qn("changeType"),Object.keys(t).some(function(n){return!Y0(e,n)})&&qn("changeField"),t}function Z0(e){ii(e)||qn("selectorType")}function ek(e){ii(e)||Ao(e)||qn("handlerType"),Ao(e)&&Object.values(e).some(function(t){return!ii(t)})&&qn("handlersType")}function tk(e){e||qn("initialIsRequired"),Ao(e)||qn("initialType"),Q0(e)&&qn("initialContent")}function nk(e,t){throw new Error(e[t]||e.default)}var rk={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},qn=_s(nk)(rk),Oi={changes:X0,selector:Z0,handler:ek,initial:tk};function sk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Oi.initial(e),Oi.handler(t);var n={current:e},r=_s(ak)(n,t),i=_s(ok)(n),o=_s(Oi.changes)(e),a=_s(ik)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Oi.selector(u),u(n.current)}function c(u){G0(r,i,o,a)(u)}return[l,c]}function ik(e,t){return ii(t)?t(e.current):t}function ok(e,t){return e.current=Jp(Jp({},e.current),t),t}function ak(e,t,n){return ii(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var lk={create:sk},ck={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function uk(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function dk(e){return{}.toString.call(e).includes("Object")}function pk(e){return e||Kp("configIsRequired"),dk(e)||Kp("configType"),e.urls?(fk(),{paths:{vs:e.urls.monacoBase}}):e}function fk(){console.warn(Zg.deprecation)}function mk(e,t){throw new Error(e[t]||e.default)}var Zg={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Kp=uk(mk)(Zg),hk={config:pk},gk=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function ex(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],ex(e[n],t[n]))}),Hp(Hp({},e),t)}var xk={type:"cancelation",msg:"operation is manually canceled"};function Wa(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(xk):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var yk=["monaco"],vk=lk.create({config:ck,isInitialized:!1,resolve:null,reject:null,monaco:null}),tx=W0(vk,2),gi=tx[0],ia=tx[1];function bk(e){var t=hk.config(e),n=t.monaco,r=U0(t,yk);ia(function(i){return{config:ex(i.config,r),monaco:n}})}function kk(){var e=gi(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(ia({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Wa(Ha);if(window.monaco&&window.monaco.editor)return nx(window.monaco),e.resolve(window.monaco),Wa(Ha);gk(wk,_k)(Sk)}return Wa(Ha)}function wk(e){return document.body.appendChild(e)}function jk(e){var t=document.createElement("script");return e&&(t.src=e),t}function _k(e){var t=gi(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=jk("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Sk(){var e=gi(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;nx(r),e.resolve(r)},function(n){e.reject(n)})}function nx(e){gi().monaco||ia({monaco:e})}function Ck(){return gi(function(e){var t=e.monaco;return t})}var Ha=new Promise(function(e,t){return ia({resolve:e,reject:t})}),rx={config:bk,init:kk,__getMonacoInstance:Ck},Nk={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},qa=Nk,Ek={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},zk=Ek;function Tk({children:e}){return Tt.createElement("div",{style:zk.container},e)}var Pk=Tk,Lk=Pk;function Ak({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return Tt.createElement("section",{style:{...qa.wrapper,width:e,height:t},...a},!n&&Tt.createElement(Lk,null,r),Tt.createElement("div",{ref:i,style:{...qa.fullWidth,...!n&&qa.hide},className:o}))}var Rk=Ak,sx=b.memo(Rk);function Mk(e){b.useEffect(e,[])}var ix=Mk;function Ik(e,t,n=!0){let r=b.useRef(!0);b.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Nt=Ik;function Rs(){}function Ir(e,t,n,r){return Ok(e,r)||$k(e,t,n,r)}function Ok(e,t){return e.editor.getModel(ox(e,t))}function $k(e,t,n,r){return e.editor.createModel(t,n,r?ox(e,r):void 0)}function ox(e,t){return e.Uri.parse(t)}function Dk({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:y,wrapperProps:j={},beforeMount:z=Rs,onMount:v=Rs}){let[x,g]=b.useState(!1),[T,N]=b.useState(!0),_=b.useRef(null),C=b.useRef(null),k=b.useRef(null),R=b.useRef(v),S=b.useRef(z),L=b.useRef(!1);ix(()=>{let B=rx.init();return B.then(se=>(C.current=se)&&N(!1)).catch(se=>(se==null?void 0:se.type)!=="cancelation"&&console.error("Monaco initialization: error:",se)),()=>_.current?U():B.cancel()}),Nt(()=>{if(_.current&&C.current){let B=_.current.getOriginalEditor(),se=Ir(C.current,e||"",r||n||"text",o||"");se!==B.getModel()&&B.setModel(se)}},[o],x),Nt(()=>{if(_.current&&C.current){let B=_.current.getModifiedEditor(),se=Ir(C.current,t||"",i||n||"text",a||"");se!==B.getModel()&&B.setModel(se)}},[a],x),Nt(()=>{let B=_.current.getModifiedEditor();B.getOption(C.current.editor.EditorOption.readOnly)?B.setValue(t||""):t!==B.getValue()&&(B.executeEdits("",[{range:B.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),B.pushUndoStop())},[t],x),Nt(()=>{var B,se;(se=(B=_.current)==null?void 0:B.getModel())==null||se.original.setValue(e||"")},[e],x),Nt(()=>{let{original:B,modified:se}=_.current.getModel();C.current.editor.setModelLanguage(B,r||n||"text"),C.current.editor.setModelLanguage(se,i||n||"text")},[n,r,i],x),Nt(()=>{var B;(B=C.current)==null||B.editor.setTheme(u)},[u],x),Nt(()=>{var B;(B=_.current)==null||B.updateOptions(p)},[p],x);let I=b.useCallback(()=>{var P;if(!C.current)return;S.current(C.current);let B=Ir(C.current,e||"",r||n||"text",o||""),se=Ir(C.current,t||"",i||n||"text",a||"");(P=_.current)==null||P.setModel({original:B,modified:se})},[n,t,i,e,r,o,a]),q=b.useCallback(()=>{var B;!L.current&&k.current&&(_.current=C.current.editor.createDiffEditor(k.current,{automaticLayout:!0,...p}),I(),(B=C.current)==null||B.editor.setTheme(u),g(!0),L.current=!0)},[p,u,I]);b.useEffect(()=>{x&&R.current(_.current,C.current)},[x]),b.useEffect(()=>{!T&&!x&&q()},[T,x,q]);function U(){var se,P,$,M;let B=(se=_.current)==null?void 0:se.getModel();l||((P=B==null?void 0:B.original)==null||P.dispose()),c||(($=B==null?void 0:B.modified)==null||$.dispose()),(M=_.current)==null||M.dispose()}return Tt.createElement(sx,{width:m,height:f,isEditorReady:x,loading:d,_ref:k,className:y,wrapperProps:j})}var Fk=Dk;b.memo(Fk);function Bk(e){let t=b.useRef();return b.useEffect(()=>{t.current=e},[e]),t.current}var Uk=Bk,$i=new Map;function Vk({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:y="100%",className:j,wrapperProps:z={},beforeMount:v=Rs,onMount:x=Rs,onChange:g,onValidate:T=Rs}){let[N,_]=b.useState(!1),[C,k]=b.useState(!0),R=b.useRef(null),S=b.useRef(null),L=b.useRef(null),I=b.useRef(x),q=b.useRef(v),U=b.useRef(),B=b.useRef(r),se=Uk(o),P=b.useRef(!1),$=b.useRef(!1);ix(()=>{let V=rx.init();return V.then(Q=>(R.current=Q)&&k(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>S.current?w():V.cancel()}),Nt(()=>{var Q,h,D,E;let V=Ir(R.current,e||r||"",t||i||"",o||n||"");V!==((Q=S.current)==null?void 0:Q.getModel())&&(p&&$i.set(se,(h=S.current)==null?void 0:h.saveViewState()),(D=S.current)==null||D.setModel(V),p&&((E=S.current)==null||E.restoreViewState($i.get(o))))},[o],N),Nt(()=>{var V;(V=S.current)==null||V.updateOptions(u)},[u],N),Nt(()=>{!S.current||r===void 0||(S.current.getOption(R.current.editor.EditorOption.readOnly)?S.current.setValue(r):r!==S.current.getValue()&&($.current=!0,S.current.executeEdits("",[{range:S.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),S.current.pushUndoStop(),$.current=!1))},[r],N),Nt(()=>{var Q,h;let V=(Q=S.current)==null?void 0:Q.getModel();V&&i&&((h=R.current)==null||h.editor.setModelLanguage(V,i))},[i],N),Nt(()=>{var V;l!==void 0&&((V=S.current)==null||V.revealLine(l))},[l],N),Nt(()=>{var V;(V=R.current)==null||V.editor.setTheme(a)},[a],N);let M=b.useCallback(()=>{var V;if(!(!L.current||!R.current)&&!P.current){q.current(R.current);let Q=o||n,h=Ir(R.current,r||e||"",t||i||"",Q||"");S.current=(V=R.current)==null?void 0:V.editor.create(L.current,{model:h,automaticLayout:!0,...u},d),p&&S.current.restoreViewState($i.get(Q)),R.current.editor.setTheme(a),l!==void 0&&S.current.revealLine(l),_(!0),P.current=!0}},[e,t,n,r,i,o,u,d,p,a,l]);b.useEffect(()=>{N&&I.current(S.current,R.current)},[N]),b.useEffect(()=>{!C&&!N&&M()},[C,N,M]),B.current=r,b.useEffect(()=>{var V,Q;N&&g&&((V=U.current)==null||V.dispose(),U.current=(Q=S.current)==null?void 0:Q.onDidChangeModelContent(h=>{$.current||g(S.current.getValue(),h)}))},[N,g]),b.useEffect(()=>{if(N){let V=R.current.editor.onDidChangeMarkers(Q=>{var D;let h=(D=S.current.getModel())==null?void 0:D.uri;if(h&&Q.find(E=>E.path===h.path)){let E=R.current.editor.getModelMarkers({resource:h});T==null||T(E)}});return()=>{V==null||V.dispose()}}return()=>{}},[N,T]);function w(){var V,Q;(V=U.current)==null||V.dispose(),f?p&&$i.set(o,S.current.saveViewState()):(Q=S.current.getModel())==null||Q.dispose(),S.current.dispose()}return Tt.createElement(sx,{width:m,height:y,isEditorReady:N,loading:c,_ref:L,className:j,wrapperProps:z})}var Wk=Vk,Hk=b.memo(Wk),Bt=Hk;function qk(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Jk=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Kk=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Gk={};function Gp(e,t){return(Gk.jsx?Kk:Jk).test(e)}const Qk=/[ \t\n\f\r]/g;function Yk(e){return typeof e=="object"?e.type==="text"?Qp(e.value):!1:Qp(e)}function Qp(e){return e.replace(Qk,"")===""}class xi{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}xi.prototype.normal={};xi.prototype.property={};xi.prototype.space=void 0;function ax(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new xi(n,r,t)}function lc(e){return e.toLowerCase()}class _t{constructor(t,n){this.attribute=n,this.property=t}}_t.prototype.attribute="";_t.prototype.booleanish=!1;_t.prototype.boolean=!1;_t.prototype.commaOrSpaceSeparated=!1;_t.prototype.commaSeparated=!1;_t.prototype.defined=!1;_t.prototype.mustUseProperty=!1;_t.prototype.number=!1;_t.prototype.overloadedBoolean=!1;_t.prototype.property="";_t.prototype.spaceSeparated=!1;_t.prototype.space=void 0;let Xk=0;const ke=br(),Je=br(),cc=br(),re=br(),Le=br(),Vr=br(),St=br();function br(){return 2**++Xk}const uc=Object.freeze(Object.defineProperty({__proto__:null,boolean:ke,booleanish:Je,commaOrSpaceSeparated:St,commaSeparated:Vr,number:re,overloadedBoolean:cc,spaceSeparated:Le},Symbol.toStringTag,{value:"Module"})),Ja=Object.keys(uc);class Cu extends _t{constructor(t,n,r,i){let o=-1;if(super(t,n),Yp(this,"space",i),typeof r=="number")for(;++o<Ja.length;){const a=Ja[o];Yp(this,Ja[o],(r&uc[a])===uc[a])}}}Cu.prototype.defined=!0;function Yp(e,t,n){n&&(e[t]=n)}function ss(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Cu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[lc(r)]=r,n[lc(o.attribute)]=r}return new xi(t,n,e.space)}const lx=ss({properties:{ariaActiveDescendant:null,ariaAtomic:Je,ariaAutoComplete:null,ariaBusy:Je,ariaChecked:Je,ariaColCount:re,ariaColIndex:re,ariaColSpan:re,ariaControls:Le,ariaCurrent:null,ariaDescribedBy:Le,ariaDetails:null,ariaDisabled:Je,ariaDropEffect:Le,ariaErrorMessage:null,ariaExpanded:Je,ariaFlowTo:Le,ariaGrabbed:Je,ariaHasPopup:null,ariaHidden:Je,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Le,ariaLevel:re,ariaLive:null,ariaModal:Je,ariaMultiLine:Je,ariaMultiSelectable:Je,ariaOrientation:null,ariaOwns:Le,ariaPlaceholder:null,ariaPosInSet:re,ariaPressed:Je,ariaReadOnly:Je,ariaRelevant:null,ariaRequired:Je,ariaRoleDescription:Le,ariaRowCount:re,ariaRowIndex:re,ariaRowSpan:re,ariaSelected:Je,ariaSetSize:re,ariaSort:null,ariaValueMax:re,ariaValueMin:re,ariaValueNow:re,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function cx(e,t){return t in e?e[t]:t}function ux(e,t){return cx(e,t.toLowerCase())}const Zk=ss({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Vr,acceptCharset:Le,accessKey:Le,action:null,allow:null,allowFullScreen:ke,allowPaymentRequest:ke,allowUserMedia:ke,alt:null,as:null,async:ke,autoCapitalize:null,autoComplete:Le,autoFocus:ke,autoPlay:ke,blocking:Le,capture:null,charSet:null,checked:ke,cite:null,className:Le,cols:re,colSpan:null,content:null,contentEditable:Je,controls:ke,controlsList:Le,coords:re|Vr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ke,defer:ke,dir:null,dirName:null,disabled:ke,download:cc,draggable:Je,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ke,formTarget:null,headers:Le,height:re,hidden:cc,high:re,href:null,hrefLang:null,htmlFor:Le,httpEquiv:Le,id:null,imageSizes:null,imageSrcSet:null,inert:ke,inputMode:null,integrity:null,is:null,isMap:ke,itemId:null,itemProp:Le,itemRef:Le,itemScope:ke,itemType:Le,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ke,low:re,manifest:null,max:null,maxLength:re,media:null,method:null,min:null,minLength:re,multiple:ke,muted:ke,name:null,nonce:null,noModule:ke,noValidate:ke,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ke,optimum:re,pattern:null,ping:Le,placeholder:null,playsInline:ke,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ke,referrerPolicy:null,rel:Le,required:ke,reversed:ke,rows:re,rowSpan:re,sandbox:Le,scope:null,scoped:ke,seamless:ke,selected:ke,shadowRootClonable:ke,shadowRootDelegatesFocus:ke,shadowRootMode:null,shape:null,size:re,sizes:null,slot:null,span:re,spellCheck:Je,src:null,srcDoc:null,srcLang:null,srcSet:null,start:re,step:null,style:null,tabIndex:re,target:null,title:null,translate:null,type:null,typeMustMatch:ke,useMap:null,value:Je,width:re,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Le,axis:null,background:null,bgColor:null,border:re,borderColor:null,bottomMargin:re,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ke,declare:ke,event:null,face:null,frame:null,frameBorder:null,hSpace:re,leftMargin:re,link:null,longDesc:null,lowSrc:null,marginHeight:re,marginWidth:re,noResize:ke,noHref:ke,noShade:ke,noWrap:ke,object:null,profile:null,prompt:null,rev:null,rightMargin:re,rules:null,scheme:null,scrolling:Je,standby:null,summary:null,text:null,topMargin:re,valueType:null,version:null,vAlign:null,vLink:null,vSpace:re,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ke,disableRemotePlayback:ke,prefix:null,property:null,results:re,security:null,unselectable:null},space:"html",transform:ux}),ew=ss({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:St,accentHeight:re,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:re,amplitude:re,arabicForm:null,ascent:re,attributeName:null,attributeType:null,azimuth:re,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:re,by:null,calcMode:null,capHeight:re,className:Le,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:re,diffuseConstant:re,direction:null,display:null,dur:null,divisor:re,dominantBaseline:null,download:ke,dx:null,dy:null,edgeMode:null,editable:null,elevation:re,enableBackground:null,end:null,event:null,exponent:re,externalResourcesRequired:null,fill:null,fillOpacity:re,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Vr,g2:Vr,glyphName:Vr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:re,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:re,horizOriginX:re,horizOriginY:re,id:null,ideographic:re,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:re,k:re,k1:re,k2:re,k3:re,k4:re,kernelMatrix:St,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:re,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:re,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:re,overlineThickness:re,paintOrder:null,panose1:null,path:null,pathLength:re,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Le,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:re,pointsAtY:re,pointsAtZ:re,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:St,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:St,rev:St,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:St,requiredFeatures:St,requiredFonts:St,requiredFormats:St,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:re,specularExponent:re,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:re,strikethroughThickness:re,string:null,stroke:null,strokeDashArray:St,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:re,strokeOpacity:re,strokeWidth:null,style:null,surfaceScale:re,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:St,tabIndex:re,tableValues:null,target:null,targetX:re,targetY:re,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:St,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:re,underlineThickness:re,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:re,values:null,vAlphabetic:re,vMathematical:re,vectorEffect:null,vHanging:re,vIdeographic:re,version:null,vertAdvY:re,vertOriginX:re,vertOriginY:re,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:re,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:cx}),dx=ss({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),px=ss({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:ux}),fx=ss({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),tw={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},nw=/[A-Z]/g,Xp=/-[a-z]/g,rw=/^data[-\w.:]+$/i;function sw(e,t){const n=lc(t);let r=t,i=_t;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&rw.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Xp,ow);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Xp.test(o)){let a=o.replace(nw,iw);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=Cu}return new i(r,t)}function iw(e){return"-"+e.toLowerCase()}function ow(e){return e.charAt(1).toUpperCase()}const aw=ax([lx,Zk,dx,px,fx],"html"),Nu=ax([lx,ew,dx,px,fx],"svg");function lw(e){return e.join(" ").trim()}var Eu={},Zp=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,cw=/\n/g,uw=/^\s*/,dw=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,pw=/^:\s*/,fw=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,mw=/^[;\s]*/,hw=/^\s+|\s+$/g,gw=`
`,ef="/",tf="*",sr="",xw="comment",yw="declaration";function vw(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(y){var j=y.match(cw);j&&(n+=j.length);var z=y.lastIndexOf(gw);r=~z?y.length-z:r+y.length}function o(){var y={line:n,column:r};return function(j){return j.position=new a(y),u(),j}}function a(y){this.start=y,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(y){var j=new Error(t.source+":"+n+":"+r+": "+y);if(j.reason=y,j.filename=t.source,j.line=n,j.column=r,j.source=e,!t.silent)throw j}function c(y){var j=y.exec(e);if(j){var z=j[0];return i(z),e=e.slice(z.length),j}}function u(){c(uw)}function d(y){var j;for(y=y||[];j=p();)j!==!1&&y.push(j);return y}function p(){var y=o();if(!(ef!=e.charAt(0)||tf!=e.charAt(1))){for(var j=2;sr!=e.charAt(j)&&(tf!=e.charAt(j)||ef!=e.charAt(j+1));)++j;if(j+=2,sr===e.charAt(j-1))return l("End of comment missing");var z=e.slice(2,j-2);return r+=2,i(z),e=e.slice(j),r+=2,y({type:xw,comment:z})}}function f(){var y=o(),j=c(dw);if(j){if(p(),!c(pw))return l("property missing ':'");var z=c(fw),v=y({type:yw,property:nf(j[0].replace(Zp,sr)),value:z?nf(z[0].replace(Zp,sr)):sr});return c(mw),v}}function m(){var y=[];d(y);for(var j;j=f();)j!==!1&&(y.push(j),d(y));return y}return u(),m()}function nf(e){return e?e.replace(hw,sr):sr}var bw=vw,kw=ro&&ro.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Eu,"__esModule",{value:!0});Eu.default=jw;const ww=kw(bw);function jw(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,ww.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l)}),n}var oa={};Object.defineProperty(oa,"__esModule",{value:!0});oa.camelCase=void 0;var _w=/^--[a-zA-Z0-9_-]+$/,Sw=/-([a-z])/g,Cw=/^[^-]+$/,Nw=/^-(webkit|moz|ms|o|khtml)-/,Ew=/^-(ms)-/,zw=function(e){return!e||Cw.test(e)||_w.test(e)},Tw=function(e,t){return t.toUpperCase()},rf=function(e,t){return"".concat(t,"-")},Pw=function(e,t){return t===void 0&&(t={}),zw(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Ew,rf):e=e.replace(Nw,rf),e.replace(Sw,Tw))};oa.camelCase=Pw;var Lw=ro&&ro.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Aw=Lw(Eu),Rw=oa;function dc(e,t){var n={};return!e||typeof e!="string"||(0,Aw.default)(e,function(r,i){r&&i&&(n[(0,Rw.camelCase)(r,t)]=i)}),n}dc.default=dc;var Mw=dc;const Iw=Oo(Mw),mx=hx("end"),zu=hx("start");function hx(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Ow(e){const t=zu(e),n=mx(e);if(t&&n)return{start:t,end:n}}function Ms(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?sf(e.position):"start"in e||"end"in e?sf(e):"line"in e||"column"in e?pc(e):""}function pc(e){return of(e&&e.line)+":"+of(e&&e.column)}function sf(e){return pc(e&&e.start)+"-"+pc(e&&e.end)}function of(e){return e&&typeof e=="number"?e:1}class dt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Ms(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}dt.prototype.file="";dt.prototype.name="";dt.prototype.reason="";dt.prototype.message="";dt.prototype.stack="";dt.prototype.column=void 0;dt.prototype.line=void 0;dt.prototype.ancestors=void 0;dt.prototype.cause=void 0;dt.prototype.fatal=void 0;dt.prototype.place=void 0;dt.prototype.ruleId=void 0;dt.prototype.source=void 0;const Tu={}.hasOwnProperty,$w=new Map,Dw=/[A-Z]/g,Fw=new Set(["table","tbody","thead","tfoot","tr"]),Bw=new Set(["td","th"]),gx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Uw(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Qw(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Gw(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Nu:aw,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=xx(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function xx(e,t,n){if(t.type==="element")return Vw(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Ww(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return qw(e,t,n);if(t.type==="mdxjsEsm")return Hw(e,t);if(t.type==="root")return Jw(e,t,n);if(t.type==="text")return Kw(e,t)}function Vw(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Nu,e.schema=i),e.ancestors.push(t);const o=vx(e,t.tagName,!1),a=Yw(e,t);let l=Lu(e,t);return Fw.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Yk(c):!0})),yx(e,a,o,t),Pu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Ww(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}oi(e,t.position)}function Hw(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);oi(e,t.position)}function qw(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Nu,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:vx(e,t.name,!0),a=Xw(e,t),l=Lu(e,t);return yx(e,a,o,t),Pu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Jw(e,t,n){const r={};return Pu(r,Lu(e,t)),e.create(t,e.Fragment,r,n)}function Kw(e,t){return t.value}function yx(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Pu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Gw(e,t,n){return r;function r(i,o,a,l){const u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function Qw(e,t){return n;function n(r,i,o,a){const l=Array.isArray(o.children),c=zu(r);return t(i,o,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Yw(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Tu.call(t.properties,i)){const o=Zw(e,i,t.properties[i]);if(o){const[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Bw.has(t.tagName)?r=l:n[a]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Xw(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else oi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else oi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Lu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:$w;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=xx(e,o,a);l!==void 0&&n.push(l)}return n}function Zw(e,t,n){const r=sw(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?qk(n):lw(n)),r.property==="style"){let i=typeof n=="object"?n:ej(e,String(n));return e.stylePropertyNameCase==="css"&&(i=tj(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?tw[r.property]||r.property:r.attribute,n]}}function ej(e,t){try{return Iw(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new dt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=gx+"#cannot-parse-style-attribute",i}}function vx(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const l=Gp(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=a}else r=Gp(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Tu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);oi(e)}function oi(e,t){const n=new dt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=gx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function tj(e){const t={};let n;for(n in e)Tu.call(e,n)&&(t[nj(n)]=e[n]);return t}function nj(e){let t=e.replace(Dw,rj);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function rj(e){return"-"+e.toLowerCase()}const Ka={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},sj={};function ij(e,t){const n=sj,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return bx(e,r,i)}function bx(e,t,n){if(oj(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return af(e.children,t,n)}return Array.isArray(e)?af(e,t,n):""}function af(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=bx(e[i],t,n);return r.join("")}function oj(e){return!!(e&&typeof e=="object")}const lf=document.createElement("i");function Au(e){const t="&"+e+";";lf.innerHTML=t;const n=lf.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function mn(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function Dt(e,t){return e.length>0?(mn(e,e.length,0,t),e):t}const cf={}.hasOwnProperty;function aj(e){const t={};let n=-1;for(;++n<e.length;)lj(t,e[n]);return t}function lj(e,t){let n;for(n in t){const i=(cf.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){cf.call(i,a)||(i[a]=[]);const l=o[a];cj(i[a],Array.isArray(l)?l:l?[l]:[])}}}function cj(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);mn(e,0,0,r)}function kx(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Wr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const cn=er(/[A-Za-z]/),zt=er(/[\dA-Za-z]/),uj=er(/[#-'*+\--9=?A-Z^-~]/);function fc(e){return e!==null&&(e<32||e===127)}const mc=er(/\d/),dj=er(/[\dA-Fa-f]/),pj=er(/[!-/:-@[-`{-~]/);function ve(e){return e!==null&&e<-2}function jt(e){return e!==null&&(e<0||e===32)}function Ee(e){return e===-2||e===-1||e===32}const fj=er(new RegExp("\\p{P}|\\p{S}","u")),mj=er(/\s/);function er(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function is(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&zt(e.charCodeAt(n+1))&&zt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Re(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return Ee(c)?(e.enter(n),l(c)):t(c)}function l(c){return Ee(c)&&o++<i?(e.consume(c),l):(e.exit(n),t(c))}}const hj={tokenize:gj};function gj(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Re(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return ve(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}const xj={tokenize:yj},uf={tokenize:vj};function yj(e){const t=this,n=[];let r=0,i,o,a;return l;function l(g){if(r<n.length){const T=n[r];return t.containerState=T[1],e.attempt(T[0].continuation,c,u)(g)}return u(g)}function c(g){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const T=t.events.length;let N=T,_;for(;N--;)if(t.events[N][0]==="exit"&&t.events[N][1].type==="chunkFlow"){_=t.events[N][1].end;break}v(r);let C=T;for(;C<t.events.length;)t.events[C][1].end={..._},C++;return mn(t.events,N+1,0,t.events.slice(T)),t.events.length=C,u(g)}return l(g)}function u(g){if(r===n.length){if(!i)return f(g);if(i.currentConstruct&&i.currentConstruct.concrete)return y(g);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(uf,d,p)(g)}function d(g){return i&&x(),v(r),f(g)}function p(g){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,y(g)}function f(g){return t.containerState={},e.attempt(uf,m,y)(g)}function m(g){return r++,n.push([t.currentConstruct,t.containerState]),f(g)}function y(g){if(g===null){i&&x(),v(0),e.consume(g);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),j(g)}function j(g){if(g===null){z(e.exit("chunkFlow"),!0),v(0),e.consume(g);return}return ve(g)?(e.consume(g),z(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(g),j)}function z(g,T){const N=t.sliceStream(g);if(T&&N.push(null),g.previous=o,o&&(o.next=g),o=g,i.defineSkip(g.start),i.write(N),t.parser.lazy[g.start.line]){let _=i.events.length;for(;_--;)if(i.events[_][1].start.offset<a&&(!i.events[_][1].end||i.events[_][1].end.offset>a))return;const C=t.events.length;let k=C,R,S;for(;k--;)if(t.events[k][0]==="exit"&&t.events[k][1].type==="chunkFlow"){if(R){S=t.events[k][1].end;break}R=!0}for(v(r),_=C;_<t.events.length;)t.events[_][1].end={...S},_++;mn(t.events,k+1,0,t.events.slice(C)),t.events.length=_}}function v(g){let T=n.length;for(;T-- >g;){const N=n[T];t.containerState=N[1],N[0].exit.call(t,e)}n.length=g}function x(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function vj(e,t,n){return Re(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function df(e){if(e===null||jt(e)||mj(e))return 1;if(fj(e))return 2}function Ru(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const hc={name:"attention",resolveAll:bj,tokenize:kj};function bj(e,t){let n=-1,r,i,o,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};pf(p,-c),pf(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Dt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Dt(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=Dt(u,Ru(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Dt(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Dt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,mn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function kj(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=df(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=df(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function pf(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const wj={name:"autolink",tokenize:jj};function jj(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return cn(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||zt(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||zt(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||fc(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):uj(m)?(e.consume(m),u):n(m)}function d(m){return zt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||zt(m))&&r++<63){const y=m===45?f:p;return e.consume(m),y}return n(m)}}const aa={partial:!0,tokenize:_j};function _j(e,t,n){return r;function r(o){return Ee(o)?Re(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ve(o)?t(o):n(o)}}const wx={continuation:{tokenize:Cj},exit:Nj,name:"blockQuote",tokenize:Sj};function Sj(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return Ee(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function Cj(e,t,n){const r=this;return i;function i(a){return Ee(a)?Re(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(wx,t,n)(a)}}function Nj(e){e.exit("blockQuote")}const jx={name:"characterEscape",tokenize:Ej};function Ej(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return pj(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const _x={name:"characterReference",tokenize:zj};function zj(e,t,n){const r=this;let i=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=zt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=dj,d):(e.enter("characterReferenceValue"),o=7,a=mc,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===zt&&!Au(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const ff={partial:!0,tokenize:Pj},mf={concrete:!0,name:"codeFenced",tokenize:Tj};function Tj(e,t,n){const r=this,i={partial:!0,tokenize:N};let o=0,a=0,l;return c;function c(_){return u(_)}function u(_){const C=r.events[r.events.length-1];return o=C&&C[1].type==="linePrefix"?C[2].sliceSerialize(C[1],!0).length:0,l=_,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(_)}function d(_){return _===l?(a++,e.consume(_),d):a<3?n(_):(e.exit("codeFencedFenceSequence"),Ee(_)?Re(e,p,"whitespace")(_):p(_))}function p(_){return _===null||ve(_)?(e.exit("codeFencedFence"),r.interrupt?t(_):e.check(ff,j,T)(_)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(_))}function f(_){return _===null||ve(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(_)):Ee(_)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Re(e,m,"whitespace")(_)):_===96&&_===l?n(_):(e.consume(_),f)}function m(_){return _===null||ve(_)?p(_):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),y(_))}function y(_){return _===null||ve(_)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(_)):_===96&&_===l?n(_):(e.consume(_),y)}function j(_){return e.attempt(i,T,z)(_)}function z(_){return e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),v}function v(_){return o>0&&Ee(_)?Re(e,x,"linePrefix",o+1)(_):x(_)}function x(_){return _===null||ve(_)?e.check(ff,j,T)(_):(e.enter("codeFlowValue"),g(_))}function g(_){return _===null||ve(_)?(e.exit("codeFlowValue"),x(_)):(e.consume(_),g)}function T(_){return e.exit("codeFenced"),t(_)}function N(_,C,k){let R=0;return S;function S(B){return _.enter("lineEnding"),_.consume(B),_.exit("lineEnding"),L}function L(B){return _.enter("codeFencedFence"),Ee(B)?Re(_,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):I(B)}function I(B){return B===l?(_.enter("codeFencedFenceSequence"),q(B)):k(B)}function q(B){return B===l?(R++,_.consume(B),q):R>=a?(_.exit("codeFencedFenceSequence"),Ee(B)?Re(_,U,"whitespace")(B):U(B)):k(B)}function U(B){return B===null||ve(B)?(_.exit("codeFencedFence"),C(B)):k(B)}}}function Pj(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Ga={name:"codeIndented",tokenize:Aj},Lj={partial:!0,tokenize:Rj};function Aj(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Re(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):ve(u)?e.attempt(Lj,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||ve(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function Rj(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):ve(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Re(e,o,"linePrefix",5)(a)}function o(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):ve(a)?i(a):n(a)}}const Mj={name:"codeText",previous:Oj,resolve:Ij,tokenize:$j};function Ij(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Oj(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function $j(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):ve(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||ve(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class Dj{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&gs(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),gs(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),gs(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);gs(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);gs(this.left,n.reverse())}}}function gs(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Sx(e){const t={};let n=-1,r,i,o,a,l,c,u;const d=new Dj(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Fj(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return mn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Fj(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,m=n,y=0,j=0;const z=[j];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(j=f+1,z.push(j),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):z.pop(),f=z.length;f--;){const v=l.slice(z[f],z[f+1]),x=o.pop();c.push([x,x+v.length-1]),e.splice(x,2,v)}for(c.reverse(),f=-1;++f<c.length;)u[y+c[f][0]]=y+c[f][1],y+=c[f][1]-c[f][0]-1;return u}const Bj={resolve:Vj,tokenize:Wj},Uj={partial:!0,tokenize:Hj};function Vj(e){return Sx(e),e}function Wj(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):ve(l)?e.check(Uj,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Hj(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Re(e,o,"linePrefix")}function o(a){if(a===null||ve(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Cx(e,t,n,r,i,o,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(v){return v===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(v),e.exit(o),f):v===null||v===32||v===41||fc(v)?n(v):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),j(v))}function f(v){return v===62?(e.enter(o),e.consume(v),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(v))}function m(v){return v===62?(e.exit("chunkString"),e.exit(l),f(v)):v===null||v===60||ve(v)?n(v):(e.consume(v),v===92?y:m)}function y(v){return v===60||v===62||v===92?(e.consume(v),m):m(v)}function j(v){return!d&&(v===null||v===41||jt(v))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(v)):d<u&&v===40?(e.consume(v),d++,j):v===41?(e.consume(v),d--,j):v===null||v===32||v===40||fc(v)?n(v):(e.consume(v),v===92?z:j)}function z(v){return v===40||v===41||v===92?(e.consume(v),j):j(v)}}function Nx(e,t,n,r,i,o){const a=this;let l=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return l>999||m===null||m===91||m===93&&!c||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):ve(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||ve(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!Ee(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function Ex(e,t,n,r,i,o){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):ve(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Re(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||ve(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function Is(e,t){let n;return r;function r(i){return ve(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Ee(i)?Re(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const qj={name:"definition",tokenize:Kj},Jj={partial:!0,tokenize:Gj};function Kj(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return Nx.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=Wr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return jt(m)?Is(e,u)(m):u(m)}function u(m){return Cx(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(Jj,p,p)(m)}function p(m){return Ee(m)?Re(e,f,"whitespace")(m):f(m)}function f(m){return m===null||ve(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Gj(e,t,n){return r;function r(l){return jt(l)?Is(e,i)(l):n(l)}function i(l){return Ex(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return Ee(l)?Re(e,a,"whitespace")(l):a(l)}function a(l){return l===null||ve(l)?t(l):n(l)}}const Qj={name:"hardBreakEscape",tokenize:Yj};function Yj(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ve(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Xj={name:"headingAtx",resolve:Zj,tokenize:e_};function Zj(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},mn(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function e_(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||jt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||ve(d)?(e.exit("atxHeading"),t(d)):Ee(d)?Re(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||jt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const t_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],hf=["pre","script","style","textarea"],n_={concrete:!0,name:"htmlFlow",resolveTo:i_,tokenize:o_},r_={partial:!0,tokenize:l_},s_={partial:!0,tokenize:a_};function i_(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function o_(e,t,n){const r=this;let i,o,a,l,c;return u;function u(h){return d(h)}function d(h){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(h),p}function p(h){return h===33?(e.consume(h),f):h===47?(e.consume(h),o=!0,j):h===63?(e.consume(h),i=3,r.interrupt?t:w):cn(h)?(e.consume(h),a=String.fromCharCode(h),z):n(h)}function f(h){return h===45?(e.consume(h),i=2,m):h===91?(e.consume(h),i=5,l=0,y):cn(h)?(e.consume(h),i=4,r.interrupt?t:w):n(h)}function m(h){return h===45?(e.consume(h),r.interrupt?t:w):n(h)}function y(h){const D="CDATA[";return h===D.charCodeAt(l++)?(e.consume(h),l===D.length?r.interrupt?t:I:y):n(h)}function j(h){return cn(h)?(e.consume(h),a=String.fromCharCode(h),z):n(h)}function z(h){if(h===null||h===47||h===62||jt(h)){const D=h===47,E=a.toLowerCase();return!D&&!o&&hf.includes(E)?(i=1,r.interrupt?t(h):I(h)):t_.includes(a.toLowerCase())?(i=6,D?(e.consume(h),v):r.interrupt?t(h):I(h)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(h):o?x(h):g(h))}return h===45||zt(h)?(e.consume(h),a+=String.fromCharCode(h),z):n(h)}function v(h){return h===62?(e.consume(h),r.interrupt?t:I):n(h)}function x(h){return Ee(h)?(e.consume(h),x):S(h)}function g(h){return h===47?(e.consume(h),S):h===58||h===95||cn(h)?(e.consume(h),T):Ee(h)?(e.consume(h),g):S(h)}function T(h){return h===45||h===46||h===58||h===95||zt(h)?(e.consume(h),T):N(h)}function N(h){return h===61?(e.consume(h),_):Ee(h)?(e.consume(h),N):g(h)}function _(h){return h===null||h===60||h===61||h===62||h===96?n(h):h===34||h===39?(e.consume(h),c=h,C):Ee(h)?(e.consume(h),_):k(h)}function C(h){return h===c?(e.consume(h),c=null,R):h===null||ve(h)?n(h):(e.consume(h),C)}function k(h){return h===null||h===34||h===39||h===47||h===60||h===61||h===62||h===96||jt(h)?N(h):(e.consume(h),k)}function R(h){return h===47||h===62||Ee(h)?g(h):n(h)}function S(h){return h===62?(e.consume(h),L):n(h)}function L(h){return h===null||ve(h)?I(h):Ee(h)?(e.consume(h),L):n(h)}function I(h){return h===45&&i===2?(e.consume(h),se):h===60&&i===1?(e.consume(h),P):h===62&&i===4?(e.consume(h),V):h===63&&i===3?(e.consume(h),w):h===93&&i===5?(e.consume(h),M):ve(h)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(r_,Q,q)(h)):h===null||ve(h)?(e.exit("htmlFlowData"),q(h)):(e.consume(h),I)}function q(h){return e.check(s_,U,Q)(h)}function U(h){return e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),B}function B(h){return h===null||ve(h)?q(h):(e.enter("htmlFlowData"),I(h))}function se(h){return h===45?(e.consume(h),w):I(h)}function P(h){return h===47?(e.consume(h),a="",$):I(h)}function $(h){if(h===62){const D=a.toLowerCase();return hf.includes(D)?(e.consume(h),V):I(h)}return cn(h)&&a.length<8?(e.consume(h),a+=String.fromCharCode(h),$):I(h)}function M(h){return h===93?(e.consume(h),w):I(h)}function w(h){return h===62?(e.consume(h),V):h===45&&i===2?(e.consume(h),w):I(h)}function V(h){return h===null||ve(h)?(e.exit("htmlFlowData"),Q(h)):(e.consume(h),V)}function Q(h){return e.exit("htmlFlow"),t(h)}}function a_(e,t,n){const r=this;return i;function i(a){return ve(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function l_(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(aa,t,n)}}const c_={name:"htmlText",tokenize:u_};function u_(e,t,n){const r=this;let i,o,a;return l;function l(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),c}function c(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),N):w===63?(e.consume(w),g):cn(w)?(e.consume(w),k):n(w)}function u(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),o=0,y):cn(w)?(e.consume(w),x):n(w)}function d(w){return w===45?(e.consume(w),m):n(w)}function p(w){return w===null?n(w):w===45?(e.consume(w),f):ve(w)?(a=p,P(w)):(e.consume(w),p)}function f(w){return w===45?(e.consume(w),m):p(w)}function m(w){return w===62?se(w):w===45?f(w):p(w)}function y(w){const V="CDATA[";return w===V.charCodeAt(o++)?(e.consume(w),o===V.length?j:y):n(w)}function j(w){return w===null?n(w):w===93?(e.consume(w),z):ve(w)?(a=j,P(w)):(e.consume(w),j)}function z(w){return w===93?(e.consume(w),v):j(w)}function v(w){return w===62?se(w):w===93?(e.consume(w),v):j(w)}function x(w){return w===null||w===62?se(w):ve(w)?(a=x,P(w)):(e.consume(w),x)}function g(w){return w===null?n(w):w===63?(e.consume(w),T):ve(w)?(a=g,P(w)):(e.consume(w),g)}function T(w){return w===62?se(w):g(w)}function N(w){return cn(w)?(e.consume(w),_):n(w)}function _(w){return w===45||zt(w)?(e.consume(w),_):C(w)}function C(w){return ve(w)?(a=C,P(w)):Ee(w)?(e.consume(w),C):se(w)}function k(w){return w===45||zt(w)?(e.consume(w),k):w===47||w===62||jt(w)?R(w):n(w)}function R(w){return w===47?(e.consume(w),se):w===58||w===95||cn(w)?(e.consume(w),S):ve(w)?(a=R,P(w)):Ee(w)?(e.consume(w),R):se(w)}function S(w){return w===45||w===46||w===58||w===95||zt(w)?(e.consume(w),S):L(w)}function L(w){return w===61?(e.consume(w),I):ve(w)?(a=L,P(w)):Ee(w)?(e.consume(w),L):R(w)}function I(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,q):ve(w)?(a=I,P(w)):Ee(w)?(e.consume(w),I):(e.consume(w),U)}function q(w){return w===i?(e.consume(w),i=void 0,B):w===null?n(w):ve(w)?(a=q,P(w)):(e.consume(w),q)}function U(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||jt(w)?R(w):(e.consume(w),U)}function B(w){return w===47||w===62||jt(w)?R(w):n(w)}function se(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function P(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),$}function $(w){return Ee(w)?Re(e,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):M(w)}function M(w){return e.enter("htmlTextData"),a(w)}}const Mu={name:"labelEnd",resolveAll:m_,resolveTo:h_,tokenize:g_},d_={tokenize:x_},p_={tokenize:y_},f_={tokenize:v_};function m_(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&mn(e,0,e.length,n),e}function h_(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Dt(l,e.slice(o+1,o+r+3)),l=Dt(l,[["enter",d,t]]),l=Dt(l,Ru(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=Dt(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Dt(l,e.slice(a+1)),l=Dt(l,[["exit",c,t]]),mn(e,o,e.length,l),e}function g_(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Wr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(d_,d,a?d:p)(f):f===91?e.attempt(p_,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(f_,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function x_(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return jt(p)?Is(e,o)(p):o(p)}function o(p){return p===41?d(p):Cx(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return jt(p)?Is(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Ex(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return jt(p)?Is(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function y_(e,t,n){const r=this;return i;function i(l){return Nx.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Wr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function v_(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const b_={name:"labelStartImage",resolveAll:Mu.resolveAll,tokenize:k_};function k_(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const w_={name:"labelStartLink",resolveAll:Mu.resolveAll,tokenize:j_};function j_(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Qa={name:"lineEnding",tokenize:__};function __(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Re(e,t,"linePrefix")}}const to={name:"thematicBreak",tokenize:S_};function S_(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ve(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Ee(u)?Re(e,l,"whitespace")(u):l(u))}}const xt={continuation:{tokenize:z_},exit:P_,name:"list",tokenize:E_},C_={partial:!0,tokenize:L_},N_={partial:!0,tokenize:T_};function E_(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(m){const y=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(y==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:mc(m)){if(r.containerState.type||(r.containerState.type=y,e.enter(y,{_container:!0})),y==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(to,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return mc(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(aa,r.interrupt?n:d,e.attempt(C_,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return Ee(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function z_(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(aa,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Re(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!Ee(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(N_,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Re(e,e.attempt(xt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function T_(e,t,n){const r=this;return Re(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function P_(e){e.exit(this.containerState.type)}function L_(e,t,n){const r=this;return Re(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!Ee(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const gf={name:"setextUnderline",resolveTo:A_,tokenize:R_};function A_(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function R_(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Ee(u)?Re(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ve(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const M_={tokenize:I_};function I_(e){const t=this,n=e.attempt(aa,r,e.attempt(this.parser.constructs.flowInitial,i,Re(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Bj,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const O_={resolveAll:Tx()},$_=zx("string"),D_=zx("text");function zx(e){return{resolveAll:Tx(e==="text"?F_:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Tx(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function F_(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,l=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const B_={42:xt,43:xt,45:xt,48:xt,49:xt,50:xt,51:xt,52:xt,53:xt,54:xt,55:xt,56:xt,57:xt,62:wx},U_={91:qj},V_={[-2]:Ga,[-1]:Ga,32:Ga},W_={35:Xj,42:to,45:[gf,to],60:n_,61:gf,95:to,96:mf,126:mf},H_={38:_x,92:jx},q_={[-5]:Qa,[-4]:Qa,[-3]:Qa,33:b_,38:_x,42:hc,60:[wj,c_],91:w_,92:[Qj,jx],93:Mu,95:hc,96:Mj},J_={null:[hc,O_]},K_={null:[42,95]},G_={null:[]},Q_=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:K_,contentInitial:U_,disable:G_,document:B_,flow:W_,flowInitial:V_,insideSpan:J_,string:H_,text:q_},Symbol.toStringTag,{value:"Module"}));function Y_(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],l=[];const c={attempt:C(N),check:C(_),consume:x,enter:g,exit:T,interrupt:C(_,{interrupt:!0})},u={code:null,containerState:{},defineSkip:j,events:[],now:y,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(L){return a=Dt(a,L),z(),a[a.length-1]!==null?[]:(k(t,0),u.events=Ru(o,u.events,u),u.events)}function f(L,I){return Z_(m(L),I)}function m(L){return X_(a,L)}function y(){const{_bufferIndex:L,_index:I,line:q,column:U,offset:B}=r;return{_bufferIndex:L,_index:I,line:q,column:U,offset:B}}function j(L){i[L.line]=L.column,S()}function z(){let L;for(;r._index<a.length;){const I=a[r._index];if(typeof I=="string")for(L=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===L&&r._bufferIndex<I.length;)v(I.charCodeAt(r._bufferIndex));else v(I)}}function v(L){d=d(L)}function x(L){ve(L)?(r.line++,r.column=1,r.offset+=L===-3?2:1,S()):L!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=L}function g(L,I){const q=I||{};return q.type=L,q.start=y(),u.events.push(["enter",q,u]),l.push(q),q}function T(L){const I=l.pop();return I.end=y(),u.events.push(["exit",I,u]),I}function N(L,I){k(L,I.from)}function _(L,I){I.restore()}function C(L,I){return q;function q(U,B,se){let P,$,M,w;return Array.isArray(U)?Q(U):"tokenize"in U?Q([U]):V(U);function V(G){return ge;function ge(ye){const K=ye!==null&&G[ye],A=ye!==null&&G.null,H=[...Array.isArray(K)?K:K?[K]:[],...Array.isArray(A)?A:A?[A]:[]];return Q(H)(ye)}}function Q(G){return P=G,$=0,G.length===0?se:h(G[$])}function h(G){return ge;function ge(ye){return w=R(),M=G,G.partial||(u.currentConstruct=G),G.name&&u.parser.constructs.disable.null.includes(G.name)?E():G.tokenize.call(I?Object.assign(Object.create(u),I):u,c,D,E)(ye)}}function D(G){return L(M,w),B}function E(G){return w.restore(),++$<P.length?h(P[$]):se}}}function k(L,I){L.resolveAll&&!o.includes(L)&&o.push(L),L.resolve&&mn(u.events,I,u.events.length-I,L.resolve(u.events.slice(I),u)),L.resolveTo&&(u.events=L.resolveTo(u.events,u))}function R(){const L=y(),I=u.previous,q=u.currentConstruct,U=u.events.length,B=Array.from(l);return{from:U,restore:se};function se(){r=L,u.previous=I,u.currentConstruct=q,u.events.length=U,l=B,S()}}function S(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function X_(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function Z_(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function e2(e){const r={constructs:aj([Q_,...(e||{}).extensions||[]]),content:i(hj),defined:[],document:i(xj),flow:i(M_),lazy:{},string:i($_),text:i(D_)};return r;function i(o){return a;function a(l){return Y_(r,o,l)}}}function t2(e){for(;!Sx(e););return e}const xf=/[\0\t\n\r]/g;function n2(){let e=1,t="",n=!0,r;return i;function i(o,a,l){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(xf.lastIndex=p,u=xf.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const r2=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function s2(e){return e.replace(r2,i2)}function i2(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return kx(n.slice(o?2:1),o?16:10)}return Au(n)||e}const Px={}.hasOwnProperty;function o2(e,t,n){return typeof t!="string"&&(n=t,t=void 0),a2(n)(t2(e2(n).document().write(n2()(e,t,!0))))}function a2(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(we),autolinkProtocol:R,autolinkEmail:R,atxHeading:o(J),blockQuote:o(A),characterEscape:R,characterReference:R,codeFenced:o(H),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(H,a),codeText:o(Z,a),codeTextData:R,data:R,codeFlowValue:R,definition:o(Y),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(ie),hardBreakEscape:o(X),hardBreakTrailing:o(X),htmlFlow:o(ne,a),htmlFlowData:R,htmlText:o(ne,a),htmlTextData:R,image:o(he),label:a,link:o(we),listItem:o(be),listItemValue:f,listOrdered:o(Te,p),listUnordered:o(Te),paragraph:o(F),reference:h,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(J),strong:o(ae),thematicBreak:o(me)},exit:{atxHeading:c(),atxHeadingSequence:N,autolink:c(),autolinkEmail:K,autolinkProtocol:ye,blockQuote:c(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:E,characterReferenceMarkerNumeric:E,characterReferenceValue:G,characterReference:ge,codeFenced:c(z),codeFencedFence:j,codeFencedFenceInfo:m,codeFencedFenceMeta:y,codeFlowValue:S,codeIndented:c(v),codeText:c(B),codeTextData:S,data:S,definition:c(),definitionDestinationString:T,definitionLabelString:x,definitionTitleString:g,emphasis:c(),hardBreakEscape:c(I),hardBreakTrailing:c(I),htmlFlow:c(q),htmlFlowData:S,htmlText:c(U),htmlTextData:S,image:c(P),label:M,labelText:$,lineEnding:L,link:c(se),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:D,resourceDestinationString:w,resourceTitleString:V,resource:Q,setextHeading:c(k),setextHeadingLineSequence:C,setextHeadingText:_,strong:c(),thematicBreak:c()}};Lx(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(W){let ee={type:"root",children:[]};const fe={stack:[ee],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},le=[];let je=-1;for(;++je<W.length;)if(W[je][1].type==="listOrdered"||W[je][1].type==="listUnordered")if(W[je][0]==="enter")le.push(je);else{const Ze=le.pop();je=i(W,Ze,je)}for(je=-1;++je<W.length;){const Ze=t[W[je][0]];Px.call(Ze,W[je][1].type)&&Ze[W[je][1].type].call(Object.assign({sliceSerialize:W[je][2].sliceSerialize},fe),W[je][1])}if(fe.tokenStack.length>0){const Ze=fe.tokenStack[fe.tokenStack.length-1];(Ze[1]||yf).call(fe,void 0,Ze[0])}for(ee.position={start:zn(W.length>0?W[0][1].start:{line:1,column:1,offset:0}),end:zn(W.length>0?W[W.length-2][1].end:{line:1,column:1,offset:0})},je=-1;++je<t.transforms.length;)ee=t.transforms[je](ee)||ee;return ee}function i(W,ee,fe){let le=ee-1,je=-1,Ze=!1,hn,De,nn,Nn;for(;++le<=fe;){const nt=W[le];switch(nt[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{nt[0]==="enter"?je++:je--,Nn=void 0;break}case"lineEndingBlank":{nt[0]==="enter"&&(hn&&!Nn&&!je&&!nn&&(nn=le),Nn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Nn=void 0}if(!je&&nt[0]==="enter"&&nt[1].type==="listItemPrefix"||je===-1&&nt[0]==="exit"&&(nt[1].type==="listUnordered"||nt[1].type==="listOrdered")){if(hn){let Ht=le;for(De=void 0;Ht--;){const qt=W[Ht];if(qt[1].type==="lineEnding"||qt[1].type==="lineEndingBlank"){if(qt[0]==="exit")continue;De&&(W[De][1].type="lineEndingBlank",Ze=!0),qt[1].type="lineEnding",De=Ht}else if(!(qt[1].type==="linePrefix"||qt[1].type==="blockQuotePrefix"||qt[1].type==="blockQuotePrefixWhitespace"||qt[1].type==="blockQuoteMarker"||qt[1].type==="listItemIndent"))break}nn&&(!De||nn<De)&&(hn._spread=!0),hn.end=Object.assign({},De?W[De][1].start:nt[1].end),W.splice(De||le,0,["exit",hn,nt[2]]),le++,fe++}if(nt[1].type==="listItemPrefix"){const Ht={type:"listItem",_spread:!1,start:Object.assign({},nt[1].start),end:void 0};hn=Ht,W.splice(le,0,["enter",Ht,nt[2]]),le++,fe++,nn=void 0,Nn=!0}}}return W[ee][1]._spread=Ze,fe}function o(W,ee){return fe;function fe(le){l.call(this,W(le),le),ee&&ee.call(this,le)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(W,ee,fe){this.stack[this.stack.length-1].children.push(W),this.stack.push(W),this.tokenStack.push([ee,fe||void 0]),W.position={start:zn(ee.start),end:void 0}}function c(W){return ee;function ee(fe){W&&W.call(this,fe),u.call(this,fe)}}function u(W,ee){const fe=this.stack.pop(),le=this.tokenStack.pop();if(le)le[0].type!==W.type&&(ee?ee.call(this,W,le[0]):(le[1]||yf).call(this,W,le[0]));else throw new Error("Cannot close `"+W.type+"` ("+Ms({start:W.start,end:W.end})+"): it’s not open");fe.position.end=zn(W.end)}function d(){return ij(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(W){if(this.data.expectingFirstListItemValue){const ee=this.stack[this.stack.length-2];ee.start=Number.parseInt(this.sliceSerialize(W),10),this.data.expectingFirstListItemValue=void 0}}function m(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.lang=W}function y(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.meta=W}function j(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function z(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function v(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W.replace(/(\r?\n|\r)$/g,"")}function x(W){const ee=this.resume(),fe=this.stack[this.stack.length-1];fe.label=ee,fe.identifier=Wr(this.sliceSerialize(W)).toLowerCase()}function g(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.title=W}function T(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.url=W}function N(W){const ee=this.stack[this.stack.length-1];if(!ee.depth){const fe=this.sliceSerialize(W).length;ee.depth=fe}}function _(){this.data.setextHeadingSlurpLineEnding=!0}function C(W){const ee=this.stack[this.stack.length-1];ee.depth=this.sliceSerialize(W).codePointAt(0)===61?1:2}function k(){this.data.setextHeadingSlurpLineEnding=void 0}function R(W){const fe=this.stack[this.stack.length-1].children;let le=fe[fe.length-1];(!le||le.type!=="text")&&(le=pe(),le.position={start:zn(W.start),end:void 0},fe.push(le)),this.stack.push(le)}function S(W){const ee=this.stack.pop();ee.value+=this.sliceSerialize(W),ee.position.end=zn(W.end)}function L(W){const ee=this.stack[this.stack.length-1];if(this.data.atHardBreak){const fe=ee.children[ee.children.length-1];fe.position.end=zn(W.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(ee.type)&&(R.call(this,W),S.call(this,W))}function I(){this.data.atHardBreak=!0}function q(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W}function U(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W}function B(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.value=W}function se(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=ee,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function P(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=ee,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function $(W){const ee=this.sliceSerialize(W),fe=this.stack[this.stack.length-2];fe.label=s2(ee),fe.identifier=Wr(ee).toLowerCase()}function M(){const W=this.stack[this.stack.length-1],ee=this.resume(),fe=this.stack[this.stack.length-1];if(this.data.inReference=!0,fe.type==="link"){const le=W.children;fe.children=le}else fe.alt=ee}function w(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.url=W}function V(){const W=this.resume(),ee=this.stack[this.stack.length-1];ee.title=W}function Q(){this.data.inReference=void 0}function h(){this.data.referenceType="collapsed"}function D(W){const ee=this.resume(),fe=this.stack[this.stack.length-1];fe.label=ee,fe.identifier=Wr(this.sliceSerialize(W)).toLowerCase(),this.data.referenceType="full"}function E(W){this.data.characterReferenceType=W.type}function G(W){const ee=this.sliceSerialize(W),fe=this.data.characterReferenceType;let le;fe?(le=kx(ee,fe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):le=Au(ee);const je=this.stack[this.stack.length-1];je.value+=le}function ge(W){const ee=this.stack.pop();ee.position.end=zn(W.end)}function ye(W){S.call(this,W);const ee=this.stack[this.stack.length-1];ee.url=this.sliceSerialize(W)}function K(W){S.call(this,W);const ee=this.stack[this.stack.length-1];ee.url="mailto:"+this.sliceSerialize(W)}function A(){return{type:"blockquote",children:[]}}function H(){return{type:"code",lang:null,meta:null,value:""}}function Z(){return{type:"inlineCode",value:""}}function Y(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function ie(){return{type:"emphasis",children:[]}}function J(){return{type:"heading",depth:0,children:[]}}function X(){return{type:"break"}}function ne(){return{type:"html",value:""}}function he(){return{type:"image",title:null,url:"",alt:null}}function we(){return{type:"link",title:null,url:"",children:[]}}function Te(W){return{type:"list",ordered:W.type==="listOrdered",start:null,spread:W._spread,children:[]}}function be(W){return{type:"listItem",spread:W._spread,checked:null,children:[]}}function F(){return{type:"paragraph",children:[]}}function ae(){return{type:"strong",children:[]}}function pe(){return{type:"text",value:""}}function me(){return{type:"thematicBreak"}}}function zn(e){return{line:e.line,column:e.column,offset:e.offset}}function Lx(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Lx(e,r):l2(e,r)}}function l2(e,t){let n;for(n in t)if(Px.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function yf(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ms({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ms({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ms({start:t.start,end:t.end})+") is still open")}function c2(e){const t=this;t.parser=n;function n(r){return o2(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function u2(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function d2(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function p2(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function f2(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function m2(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function h2(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=is(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function g2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function x2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ax(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function y2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ax(e,t);const i={src:is(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function v2(e,t){const n={src:is(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function b2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function k2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Ax(e,t);const i={href:is(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function w2(e,t){const n={href:is(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function j2(e,t,n){const r=e.all(t),i=n?_2(n):Rx(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function _2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Rx(n[r])}return t}function Rx(e){const t=e.spread;return t??e.children.length>1}function S2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function C2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function N2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function E2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function z2(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=zu(t.children[1]),c=mx(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function T2(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let y={type:"element",tagName:o,properties:f,children:[]};p&&(y.children=e.all(p),e.patch(p,y),y=e.applyData(p,y)),u.push(y)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function P2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const vf=9,bf=32;function L2(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(kf(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(kf(t.slice(i),i>0,!1)),o.join("")}function kf(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===vf||o===bf;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===vf||o===bf;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function A2(e,t){const n={type:"text",value:L2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function R2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const M2={blockquote:u2,break:d2,code:p2,delete:f2,emphasis:m2,footnoteReference:h2,heading:g2,html:x2,imageReference:y2,image:v2,inlineCode:b2,linkReference:k2,link:w2,listItem:j2,list:S2,paragraph:C2,root:N2,strong:E2,table:z2,tableCell:P2,tableRow:T2,text:A2,thematicBreak:R2,toml:Di,yaml:Di,definition:Di,footnoteDefinition:Di};function Di(){}const Mx=-1,la=0,Os=1,Ro=2,Iu=3,Ou=4,$u=5,Du=6,Ix=7,Ox=8,wf=typeof self=="object"?self:globalThis,I2=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case la:case Mx:return n(a,i);case Os:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Ro:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case Iu:return n(new Date(a),i);case Ou:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case $u:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case Du:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case Ix:{const{name:l,message:c}=a;return n(new wf[l](c),i)}case Ox:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new wf[o](a),i)};return r},jf=e=>I2(new Map,e)(0),wr="",{toString:O2}={},{keys:$2}=Object,xs=e=>{const t=typeof e;if(t!=="object"||!e)return[la,t];const n=O2.call(e).slice(8,-1);switch(n){case"Array":return[Os,wr];case"Object":return[Ro,wr];case"Date":return[Iu,wr];case"RegExp":return[Ou,wr];case"Map":return[$u,wr];case"Set":return[Du,wr];case"DataView":return[Os,n]}return n.includes("Array")?[Os,n]:n.includes("Error")?[Ix,n]:[Ro,n]},Fi=([e,t])=>e===la&&(t==="function"||t==="symbol"),D2=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},o=a=>{if(n.has(a))return n.get(a);let[l,c]=xs(a);switch(l){case la:{let d=a;switch(c){case"bigint":l=Ox,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Mx],a)}return i([l,d],a)}case Os:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(o(f));return p}case Ro:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([l,d],a);for(const f of $2(a))(e||!Fi(xs(a[f])))&&d.push([o(f),o(a[f])]);return p}case Iu:return i([l,a.toISOString()],a);case Ou:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case $u:{const d=[],p=i([l,d],a);for(const[f,m]of a)(e||!(Fi(xs(f))||Fi(xs(m))))&&d.push([o(f),o(m)]);return p}case Du:{const d=[],p=i([l,d],a);for(const f of a)(e||!Fi(xs(f)))&&d.push(o(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return o},_f=(e,{json:t,lossy:n}={})=>{const r=[];return D2(!(t||n),!!t,new Map,r)(e),r},Mo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?jf(_f(e,t)):structuredClone(e):(e,t)=>jf(_f(e,t));function F2(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function B2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function U2(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||F2,r=e.options.footnoteBackLabel||B2,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=is(p.toLowerCase());let m=0;const y=[],j=e.footnoteCounts.get(p);for(;j!==void 0&&++m<=j;){y.length>0&&y.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,m);typeof x=="string"&&(x={type:"text",value:x}),y.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const z=d[d.length-1];if(z&&z.type==="element"&&z.tagName==="p"){const x=z.children[z.children.length-1];x&&x.type==="text"?x.value+=" ":z.children.push({type:"text",value:" "}),z.children.push(...y)}else d.push(...y);const v={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,v),l.push(v)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Mo(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const $x=function(e){if(e==null)return q2;if(typeof e=="function")return ca(e);if(typeof e=="object")return Array.isArray(e)?V2(e):W2(e);if(typeof e=="string")return H2(e);throw new Error("Expected function, string, or object as test")};function V2(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=$x(e[n]);return ca(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function W2(e){const t=e;return ca(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function H2(e){return ca(t);function t(n){return n&&n.type===e}}function ca(e){return t;function t(n,r,i){return!!(J2(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function q2(){return!0}function J2(e){return e!==null&&typeof e=="object"&&"type"in e}const Dx=[],K2=!0,Sf=!1,G2="skip";function Q2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=$x(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Dx,y,j,z;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=Y2(n(c,d)),m[0]===Sf))return m;if("children"in c&&c.children){const v=c;if(v.children&&m[0]!==G2)for(j=(r?v.children.length:-1)+a,z=d.concat(v);j>-1&&j<v.children.length;){const x=v.children[j];if(y=l(x,j,z)(),y[0]===Sf)return y;j=typeof y[1]=="number"?y[1]:j+a}}return m}}}function Y2(e){return Array.isArray(e)?e:typeof e=="number"?[K2,e]:e==null?Dx:[e]}function Fx(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),Q2(e,o,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const gc={}.hasOwnProperty,X2={};function Z2(e,t){const n=t||X2,r=new Map,i=new Map,o=new Map,a={...M2,...n.handlers},l={all:u,applyData:tS,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:eS,wrap:rS};return Fx(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,m=l.handlers[f];if(gc.call(l.handlers,f)&&m)return m(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:j,...z}=d,v=Mo(z);return v.children=l.all(d),v}return Mo(d)}return(l.options.unknownHandler||nS)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const y=l.one(f[m],d);if(y){if(m&&f[m-1].type==="break"&&(!Array.isArray(y)&&y.type==="text"&&(y.value=Cf(y.value)),!Array.isArray(y)&&y.type==="element")){const j=y.children[0];j&&j.type==="text"&&(j.value=Cf(j.value))}Array.isArray(y)?p.push(...y):p.push(y)}}}return p}}function eS(e,t){e.position&&(t.position=Ow(e))}function tS(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,Mo(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function nS(e,t){const n=t.data||{},r="value"in t&&!(gc.call(n,"hProperties")||gc.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function rS(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Cf(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Nf(e,t){const n=Z2(e,t),r=n.one(e,void 0),i=U2(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function sS(e,t){return e&&"run"in e?async function(n,r){const i=Nf(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Nf(n,{file:r,...e||t})}}function Ef(e){if(e)throw e}var no=Object.prototype.hasOwnProperty,Bx=Object.prototype.toString,zf=Object.defineProperty,Tf=Object.getOwnPropertyDescriptor,Pf=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Bx.call(t)==="[object Array]"},Lf=function(t){if(!t||Bx.call(t)!=="[object Object]")return!1;var n=no.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&no.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||no.call(t,i)},Af=function(t,n){zf&&n.name==="__proto__"?zf(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Rf=function(t,n){if(n==="__proto__")if(no.call(t,n)){if(Tf)return Tf(t,n).value}else return;return t[n]},iS=function e(){var t,n,r,i,o,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Rf(l,n),i=Rf(t,n),l!==i&&(d&&i&&(Lf(i)||(o=Pf(i)))?(o?(o=!1,a=r&&Pf(r)?r:[]):a=r&&Lf(r)?r:{},Af(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Af(l,{name:n,newValue:i}));return l};const Ya=Oo(iS);function xc(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function oS(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?aS(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function aS(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...l){n||(n=!0,t(a,...l))}function o(a){i(null,a)}}const an={basename:lS,dirname:cS,extname:uS,join:dS,sep:"/"};function lS(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');yi(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function cS(e){if(yi(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function uS(e){yi(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function dS(...e){let t=-1,n;for(;++t<e.length;)yi(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":pS(n)}function pS(e){yi(e);const t=e.codePointAt(0)===47;let n=fS(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function fS(e,t){let n="",r=0,i=-1,o=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else l===46&&o>-1?o++:o=-1}return n}function yi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const mS={cwd:hS};function hS(){return"/"}function yc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function gS(e){if(typeof e=="string")e=new URL(e);else if(!yc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return xS(e)}function xS(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Xa=["history","path","basename","stem","extname","dirname"];class Ux{constructor(t){let n;t?yc(t)?n={path:t}:typeof t=="string"||yS(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":mS.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Xa.length;){const o=Xa[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Xa.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?an.basename(this.path):void 0}set basename(t){el(t,"basename"),Za(t,"basename"),this.path=an.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?an.dirname(this.path):void 0}set dirname(t){Mf(this.basename,"dirname"),this.path=an.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?an.extname(this.path):void 0}set extname(t){if(Za(t,"extname"),Mf(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=an.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){yc(t)&&(t=gS(t)),el(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?an.basename(this.path,this.extname):void 0}set stem(t){el(t,"stem"),Za(t,"stem"),this.path=an.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new dt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Za(e,t){if(e&&e.includes(an.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+an.sep+"`")}function el(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Mf(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function yS(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const vS=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},bS={}.hasOwnProperty;class Fu extends vS{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=oS()}copy(){const t=new Fu;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ya(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(rl("data",this.frozen),this.namespace[t]=n,this):bS.call(this.namespace,t)&&this.namespace[t]||void 0:t?(rl("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Bi(t),r=this.parser||this.Parser;return tl("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),tl("process",this.parser||this.Parser),nl("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const l=Bi(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const m=p,y=r.stringify(m,f);jS(y)?f.value=y:f.result=y,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),tl("processSync",this.parser||this.Parser),nl("processSync",this.compiler||this.Compiler),this.process(t,i),Of("processSync","process",n),r;function i(o,a){n=!0,Ef(o),r=a}}run(t,n,r){If(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){const c=Bi(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Of("runSync","run",r),i;function o(a,l){Ef(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Bi(n),i=this.compiler||this.Compiler;return nl("stringify",i),If(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(rl("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ya(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...y]=d;const j=r[f][1];xc(j)&&xc(m)&&(m=Ya(!0,j,m)),r[f]=[u,m,...y]}}}}const kS=new Fu().freeze();function tl(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function nl(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function rl(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function If(e){if(!xc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Of(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Bi(e){return wS(e)?e:new Ux(e)}function wS(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function jS(e){return typeof e=="string"||_S(e)}function _S(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const SS="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",$f=[],Df={allowDangerousHtml:!0},CS=/^(https?|ircs?|mailto|xmpp)$/i,NS=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Vx(e){const t=ES(e),n=zS(e);return TS(t.runSync(t.parse(n),n),e)}function ES(e){const t=e.rehypePlugins||$f,n=e.remarkPlugins||$f,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Df}:Df;return kS().use(c2).use(n).use(sS,r).use(t)}function zS(e){const t=e.children||"",n=new Ux;return typeof t=="string"&&(n.value=t),n}function TS(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||PS;for(const d of NS)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+SS+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Fx(e,u),Uw(e,{Fragment:s.Fragment,components:i,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in Ka)if(Object.hasOwn(Ka,m)&&Object.hasOwn(d.properties,m)){const y=d.properties[m],j=Ka[m];(j===null||j.includes(d.tagName))&&(d.properties[m]=c(String(y||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function PS(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||CS.test(e.slice(0,t))?e:""}function LS({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=b.useState(!1),[a,l]=b.useState(r),c=b.useRef(null),u=b.useRef(null);b.useEffect(()=>{if(e){const f=e.split(`
`).length,m=Math.max(r,Math.min(f*20+40,500));l(m)}},[e,r]),b.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(f){u.current=f,f.focus()}function p(f){c.current&&!c.current.contains(f.target)&&o(!1)}return b.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),s.jsxs("div",{ref:c,className:"markdown-editor",children:[s.jsx("style",{children:`
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
      `}),i?s.jsx("div",{className:"monaco-wrapper",children:s.jsx(Bt,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):s.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[s.jsxs("span",{className:"edit-hint",children:[s.jsx(k0,{size:12}),"Click to edit"]}),e?s.jsx("div",{className:"markdown-content",children:s.jsx(Vx,{children:e})}):s.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function AS(e){return/^[a-zA-Z0-9_]+$/.test(e)}function RS({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=ut(),[l,c]=b.useState(new Set(["basic","model","tools","subagents"])),[u,d]=b.useState(!1),[p,f]=b.useState(!1),[m,y]=b.useState(!1),[j,z]=b.useState(""),[v,x]=b.useState(null);if(!t)return null;function g(P){n(e.id,P)}function T(P){if(P===""){x(null),g({name:P});return}AS(P)?x(null):x("Name can only contain letters, numbers, and underscores"),g({name:P})}function N(P){const $=new Set(l);$.has(P)?$.delete(P):$.add(P),c($)}const _=e.type==="LlmAgent",C=e;function k(P){_&&g({tools:[...C.tools,P]})}function R(P){_&&g({tools:C.tools.filter(($,M)=>M!==P)})}function S(P,$){if(!_)return;const M=[...C.tools];M[P]=$,g({tools:M})}function L(P){"sub_agents"in e&&g({sub_agents:[...e.sub_agents,P]})}function I(P){"sub_agents"in e&&g({sub_agents:e.sub_agents.filter($=>$!==P)})}const q=t.agents.filter(P=>P.id!==e.id);async function U(){if(!(!t||!_)){d(!0);try{const P=C.instruction||"",$=P?`Current instruction to improve:

${P}

Please improve and expand this instruction while preserving its core intent.`:void 0,w=t.agents.some(Q=>Q.id===e.id)?void 0:e,V=await eo(t.id,e.id,$,w);V.success&&V.prompt?g({instruction:V.prompt}):alert("Failed to generate prompt: "+(V.error||"Unknown error"))}catch(P){alert("Error generating prompt: "+P.message)}finally{d(!1)}}}async function B(){if(!(!t||!_||!j.trim())){d(!0);try{const $=`Current instruction:

${C.instruction||""}

---

Requested changes:
${j}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,w=t.agents.some(Q=>Q.id===e.id)?void 0:e,V=await eo(t.id,e.id,$,w);V.success&&V.prompt?(g({instruction:V.prompt}),y(!1),z("")):alert("Failed to apply changes: "+(V.error||"Unknown error"))}catch(P){alert("Error applying changes: "+P.message)}finally{d(!1)}}}async function se(){if(!t||!_)return;const P=C.instruction;if(!P){alert("Please write an instruction first");return}f(!0);try{const $=`Write a 5-10 word description of what this agent does.

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
${P.slice(0,500)}

Your response (5-10 words only):`,M=await eo(t.id,e.id,$);if(M.success&&M.prompt){let w=M.prompt.trim();w=w.replace(/^["']|["']$/g,"").trim();const V=w.split(/[.!?\n]/)[0].trim(),Q=V.length>80?V.slice(0,77)+"...":V;g({description:Q})}else alert("Failed to generate description: "+(M.error||"Unknown error"))}catch($){alert("Error generating description: "+$.message)}finally{f(!1)}}return s.jsxs("div",{className:"agent-editor",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"editor-header",children:[s.jsx(dr,{size:24,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:e.name,onChange:P=>T(P.target.value),placeholder:"Agent name",style:{borderColor:v?"var(--error)":void 0}}),v&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:v})]}),s.jsx("span",{className:"badge badge-info",children:e.type}),s.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[s.jsx(Gn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"editor-content",children:[s.jsxs(ys,{id:"basic",title:"Basic Info",icon:s.jsx(dr,{size:16}),expanded:l.has("basic"),onToggle:()=>N("basic"),children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Description"}),_&&C.instruction&&s.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:se,disabled:p,title:"Generate description from instruction",children:p?s.jsxs(s.Fragment,{children:[s.jsx(On,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),s.jsx("input",{type:"text",value:e.description,onChange:P=>g({description:P.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),_&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Instruction"}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y(!m),disabled:u||!C.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?s.jsxs(s.Fragment,{children:[s.jsx(On,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&s.jsxs("div",{className:"request-changes-box",children:[s.jsx("input",{type:"text",value:j,onChange:P=>z(P.target.value),placeholder:"Describe what changes you want...",onKeyDown:P=>{P.key==="Enter"&&j.trim()?B():P.key==="Escape"&&(y(!1),z(""))},autoFocus:!0}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:B,disabled:u||!j.trim(),children:"Apply"})]}),s.jsx(LS,{value:C.instruction,onChange:P=>g({instruction:P}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Output Key"}),s.jsxs("select",{value:C.output_key||"",onChange:P=>g({output_key:P.target.value||void 0}),children:[s.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(P=>s.jsx("option",{value:P.name,children:P.name},P.name))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Include Contents"}),s.jsxs("select",{value:C.include_contents,onChange:P=>g({include_contents:P.target.value}),children:[s.jsx("option",{value:"default",children:"Default"}),s.jsx("option",{value:"none",children:"None"})]})]})]}),s.jsxs("div",{className:"form-row",style:{gap:24},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:C.disallow_transfer_to_parent,onChange:P=>g({disallow_transfer_to_parent:P.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:C.disallow_transfer_to_peers,onChange:P=>g({disallow_transfer_to_peers:P.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Iterations"}),s.jsx("input",{type:"number",value:e.max_iterations||"",onChange:P=>g({max_iterations:parseInt(P.target.value)||void 0}),placeholder:"No limit"})]})})]}),_&&s.jsx(ys,{id:"model",title:"Model",icon:s.jsx(bu,{size:16}),expanded:l.has("model"),onToggle:()=>N("model"),children:s.jsx(IS,{agent:C,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:P=>g({model:P})})}),_&&s.jsx(ys,{id:"tools",title:`Tools (${C.tools.length})`,icon:s.jsx(en,{size:16}),expanded:l.has("tools"),onToggle:()=>N("tools"),children:s.jsx(MS,{tools:C.tools,onAdd:k,onRemove:R,onUpdate:S,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:q,skillsets:t.skillsets||[]})}),"sub_agents"in e&&s.jsx(ys,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:s.jsx(Qg,{size:16}),expanded:l.has("subagents"),onToggle:()=>N("subagents"),children:s.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(P=>{const $=t.agents.find(M=>M.id===P);return $?s.jsxs("div",{className:"sub-agent-chip",children:[$.name,s.jsx("button",{onClick:()=>I(P),children:s.jsx($e,{size:12})})]},P):null}),s.jsxs("select",{value:"",onChange:P=>{P.target.value&&L(P.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[s.jsx("option",{value:"",children:"Add agent..."}),q.filter(P=>!e.sub_agents.includes(P.id)).map(P=>s.jsx("option",{value:P.id,children:P.name},P.id))]})]})}),s.jsx(ys,{id:"callbacks",title:"Callbacks",icon:s.jsx(fn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>N("callbacks"),children:s.jsx(OS,{agent:e,onUpdate:g,customCallbacks:t.custom_callbacks||[],isLlmAgent:_})})]})]})}function ys({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-header",onClick:i,children:[r?s.jsx(Mt,{size:16}):s.jsx(It,{size:16}),s.jsxs("h4",{children:[n," ",t]})]}),r&&s.jsx("div",{className:"section-content",children:o})]})}function MS({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=b.useState(!1),[f,m]=b.useState({}),[y,j]=b.useState(""),z=Tt.useRef(null),v=Tt.useRef(null),[x,g]=b.useState(null),[T,N]=b.useState(new Set),_=(E,G)=>{if(!y.trim())return!0;const ge=y.toLowerCase();return E.toLowerCase().includes(ge)||((G==null?void 0:G.toLowerCase().includes(ge))??!1)},C=i.filter(E=>_(E.name,E.description)),k=o.filter(E=>_(E.name,E.description)),R=a.filter(E=>_(E.name,E.description)),S=l.filter(E=>_(E.name,E.description)),L=c.filter(E=>_(E.name,E.description)),I=u.filter(E=>_(E.name,E.description));function q(){if(z.current){const E=z.current.getBoundingClientRect(),G=window.innerHeight,ge=350,ye=G-E.bottom-16,K=E.top-16;if(ye>=200||ye>=K){const A=Math.min(ge,ye);m({top:E.bottom+4,left:E.left,maxHeight:A})}else{const A=Math.min(ge,K);m({top:E.top-A-4,left:E.left,maxHeight:A})}}p(!0),j(""),setTimeout(()=>{var E;return(E=v.current)==null?void 0:E.focus()},50)}function U(){p(!1),j("")}function B(E){t({type:"builtin",name:E}),U()}async function se(E){U();const G=E.tool_filter||[];if(g({server:E,enabledTools:new Set(G),availableTools:G.map(ge=>({name:ge,description:""})),isLoading:G.length===0,error:void 0}),G.length===0)try{const{testMcpServer:ge}=await O0(async()=>{const{testMcpServer:K}=await Promise.resolve().then(()=>o0);return{testMcpServer:K}},void 0),ye=await ge({connection_type:E.connection_type,command:E.command,args:E.args,env:E.env,url:E.url,headers:E.headers,timeout:E.timeout||30});ye.success?g(K=>K?{...K,availableTools:ye.tools,enabledTools:new Set(ye.tools.map(A=>A.name)),isLoading:!1}:null):g(K=>K?{...K,isLoading:!1,error:ye.error||"Failed to connect to MCP server"}:null)}catch(ge){g(ye=>ye?{...ye,isLoading:!1,error:ge.message}:null)}}function P(E){if(!x)return;const G=new Set(x.enabledTools);G.has(E)?G.delete(E):G.add(E),g({...x,enabledTools:G})}function $(){if(!x)return;const E=Array.from(x.enabledTools);t({type:"mcp",server:{...x.server,tool_filter:E}}),g(null)}function M(E){const G=new Set(T);G.has(E)?G.delete(E):G.add(E),N(G)}function w(E,G){const ge=e[E];if(ge.type!=="mcp"||!ge.server)return;const ye=ge.server.tool_filter||[];let K;ye.includes(G)?K=ye.filter(A=>A!==G):K=[...ye,G],r(E,{...ge,server:{...ge.server,tool_filter:K}})}function V(E){t({type:"function",name:E.name,module_path:E.module_path}),U()}function Q(E){const G=c.find(ge=>ge.id===E);t({type:"agent",agent_id:E,name:G==null?void 0:G.name}),U()}function h(E){const G=u.find(ge=>ge.id===E);t({type:"skillset",skillset_id:E,name:G==null?void 0:G.name}),U()}function D(E){return o.find(G=>G.name===E)}return s.jsxs("div",{children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"tool-list",children:e.map((E,G)=>{var ge;return E.type==="mcp"&&E.server?s.jsxs("div",{className:"mcp-tool-item",children:[s.jsxs("div",{className:"mcp-tool-header",onClick:()=>M(G),children:[T.has(G)?s.jsx(Mt,{size:14}):s.jsx(It,{size:14}),s.jsx(en,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"mcp-tool-info",children:[s.jsx("div",{className:"mcp-tool-name",children:E.server.name}),s.jsx("div",{className:"mcp-tool-count",children:E.server.tool_filter===null||E.server.tool_filter===void 0?"all tools":`${E.server.tool_filter.length} tools enabled`})]}),s.jsx("button",{className:"delete-btn",onClick:ye=>{ye.stopPropagation(),n(G)},children:s.jsx($e,{size:14})})]}),T.has(G)&&s.jsx("div",{className:"mcp-tool-body",children:s.jsx("div",{className:"mcp-tool-list",children:(()=>{const ye=D(E.server.name),K=(ye==null?void 0:ye.tool_filter)||E.server.tool_filter||[],A=new Set(E.server.tool_filter||[]);return K.map(H=>s.jsxs("label",{className:`mcp-tool-chip ${A.has(H)?"enabled":"disabled"}`,onClick:()=>w(G,H),children:[s.jsx("input",{type:"checkbox",checked:A.has(H),onChange:()=>{},style:{display:"none"}}),H]},H))})()})})]},G):E.type==="skillset"?s.jsxs("div",{className:"tool-item",children:[s.jsx(kn,{size:14,style:{color:"var(--accent)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:E.name||((ge=u.find(ye=>ye.id===E.skillset_id))==null?void 0:ge.name)||"SkillSet"}),s.jsx("div",{className:"tool-item-type",children:"skillset"})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(G),children:s.jsx($e,{size:14})})]},G):s.jsxs("div",{className:"tool-item",children:[s.jsx(en,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:E.name||E.agent_id}),s.jsx("div",{className:"tool-item-type",children:E.type})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(G),children:s.jsx($e,{size:14})})]},G)})}),s.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[s.jsxs("button",{ref:z,className:"btn btn-secondary btn-sm",onClick:()=>d?U():q(),children:[s.jsx(Ke,{size:14}),"Add Tool"]}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"dropdown-backdrop",onClick:U}),s.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[s.jsx("div",{className:"dropdown-search",children:s.jsx("input",{ref:v,type:"text",placeholder:"Search tools...",value:y,onChange:E=>j(E.target.value),onKeyDown:E=>E.key==="Escape"&&U()})}),C.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Built-in Tools"}),C.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>B(E.name),children:[s.jsx("div",{className:"dropdown-item-name",children:E.name}),s.jsx("div",{className:"dropdown-item-desc",children:E.description})]},E.name))]}),k.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Known MCP Servers (",k.length,")"]}),k.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>se(E),children:[s.jsxs("div",{className:"dropdown-item-name",children:[E.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:E.tool_filter===null||E.tool_filter===void 0?"all tools":`${E.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:E.description})]},`known-${E.name}`))]}),R.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Project MCP Servers (",R.length,")"]}),R.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>se(E),children:[s.jsxs("div",{className:"dropdown-item-name",children:[E.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:E.tool_filter===null||E.tool_filter===void 0?"all tools":`${E.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:E.description||"Custom MCP server"})]},`project-${E.id||E.name}`))]}),S.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Custom Tools"}),S.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>V(E),children:[s.jsx("div",{className:"dropdown-item-name",children:E.name}),s.jsx("div",{className:"dropdown-item-desc",children:E.description})]},E.id))]}),L.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Agents as Tools"}),L.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>Q(E.id),children:[s.jsx("div",{className:"dropdown-item-name",children:E.name}),s.jsx("div",{className:"dropdown-item-desc",children:E.type})]},E.id))]}),I.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["SkillSets (",I.length,")"]}),I.map(E=>s.jsxs("button",{className:"dropdown-item",onClick:()=>h(E.id),children:[s.jsxs("div",{className:"dropdown-item-name",children:[E.name,s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[E.entry_count||0," entries"]})]}),s.jsx("div",{className:"dropdown-item-desc",children:E.description||"Vector knowledge base"})]},E.id))]}),y.trim()&&C.length===0&&k.length===0&&R.length===0&&S.length===0&&L.length===0&&I.length===0&&s.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',y,'"']})]})]})]}),x&&s.jsx("div",{className:"mcp-config-dialog",children:s.jsxs("div",{className:"mcp-config-content",children:[s.jsxs("h3",{children:["Configure ",x.server.name]}),s.jsx("p",{children:x.server.description}),x.isLoading?s.jsxs("div",{className:"mcp-loading",children:[s.jsx("div",{className:"spinner"}),s.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):x.error?s.jsxs("div",{className:"mcp-error",children:[s.jsxs("p",{children:["⚠️ Failed to discover tools: ",x.error]}),s.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mcp-select-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g({...x,enabledTools:new Set(x.availableTools.map(E=>E.name))}),children:["Select All (",x.availableTools.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>g({...x,enabledTools:new Set}),children:"Select None"})]}),s.jsx("div",{className:"mcp-tools-grid",children:x.availableTools.map(E=>s.jsxs("div",{className:"mcp-tool-row",title:E.description||E.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:x.enabledTools.has(E.name),onChange:()=>P(E.name)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:13,opacity:x.enabledTools.has(E.name)?1:.5,cursor:"pointer"},onClick:()=>P(E.name),children:E.name})]},E.name))})]}),s.jsxs("div",{className:"dialog-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>g(null),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:x.enabledTools.size===0,children:["Add ",x.enabledTools.size," Tools"]})]})]})})]})}function IS({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,m;const o=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!o,c=o||(()=>{if(!e.model)return n;const y=t.find(j=>{var z,v,x;return j.provider===((z=e.model)==null?void 0:z.provider)&&j.model_name===((v=e.model)==null?void 0:v.model_name)&&j.api_base===((x=e.model)==null?void 0:x.api_base)});return y==null?void 0:y.id})()||n||((m=t[0])==null?void 0:m.id);Tt.useEffect(()=>{var y,j,z,v,x;if(o){const g=t.find(T=>T.id===o);g&&(((y=e.model)==null?void 0:y.provider)!==g.provider||((j=e.model)==null?void 0:j.model_name)!==g.model_name||((z=e.model)==null?void 0:z.api_base)!==g.api_base||((v=e.model)==null?void 0:v.temperature)!==g.temperature||((x=e.model)==null?void 0:x.max_output_tokens)!==g.max_output_tokens)&&i({provider:g.provider,model_name:g.model_name,api_base:g.api_base,temperature:g.temperature,max_output_tokens:g.max_output_tokens,top_p:g.top_p,top_k:g.top_k,fallbacks:[],_appModelId:o})}},[o,t,e.model,i]);function u(y){const j=t.find(z=>z.id===y);j&&i({provider:j.provider,model_name:j.model_name,api_base:j.api_base,temperature:j.temperature,max_output_tokens:j.max_output_tokens,top_p:j.top_p,top_k:j.top_k,fallbacks:[],_appModelId:y})}function d(){var y;if(a){const j=n||((y=t[0])==null?void 0:y.id);j&&u(j)}else{const j=e.model;if(j){const{_appModelId:z,...v}=j;i(v)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(y){const{_appModelId:j,...z}=e.model||{};i({...z,...y})}return t.find(y=>y.id===c),t.find(y=>y.id===n),s.jsxs("div",{className:"model-selector",children:[s.jsx("style",{children:`
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
      `}),t.length>0&&s.jsxs("div",{className:"model-choice",children:[s.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Use App Model"}),s.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),s.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[s.jsx("div",{className:"model-option-label",children:"Custom"}),s.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?s.jsx("div",{className:"app-model-select",children:t.map(y=>s.jsx("div",{className:`app-model-item ${c===y.id?"selected":""}`,onClick:()=>u(y.id),children:s.jsxs("div",{className:"app-model-item-info",children:[s.jsxs("div",{className:"app-model-item-name",children:[y.name,y.id===n&&s.jsxs("span",{className:"default-badge",children:[s.jsx(Gg,{size:10,fill:"currentColor"}),"Default"]})]}),s.jsxs("div",{className:"app-model-item-details",children:[y.provider," / ",y.model_name,y.api_base&&` • ${y.api_base}`]})]})},y.id))}):t.length===0?s.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&s.jsx("div",{className:"custom-model-form",children:s.jsx(Xg,{projectId:r,values:e.model||{},onChange:p})})]})}function OS({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],o=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],a=r?[...i,...o]:i;function l(u,d){const p=e[u]||[],f=n.find(m=>m.id===d);f&&t({[u]:[...p,{module_path:f.module_path}]})}function c(u,d){const p=e[u]||[];t({[u]:p.filter((f,m)=>m!==d)})}return s.jsx("div",{className:"callbacks-editor",children:a.map(({key:u,label:d})=>{const p=e[u]||[],f=n;return s.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:d}),f.length>0&&s.jsxs("select",{value:"",onChange:m=>{m.target.value&&(l(u,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[s.jsx("option",{value:"",children:"Add callback..."}),f.filter(m=>{const y=m.module_path;return!p.some(j=>j.module_path===y)}).map(m=>s.jsx("option",{value:m.id,children:m.name},m.id))]})]}),p.length===0?s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):s.jsx("div",{className:"callback-list",children:p.map((m,y)=>{const j=n.find(z=>z.module_path===m.module_path);return s.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[s.jsx("span",{style:{fontSize:"12px"},children:(j==null?void 0:j.name)||m.module_path}),s.jsx("button",{onClick:()=>c(u,y),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:s.jsx($e,{size:12})})]},y)})})]},u)})})}const sl=[{type:"LlmAgent",label:"LLM Agent",icon:dr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:C0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:j0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:ic,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function $S(){return`agent_${Date.now().toString(36)}`}function DS(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function FS(e,t){const r={id:$S(),name:`New ${e}`,description:""},i=t?DS(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function BS({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:l}=ut(),[c,u]=b.useState(new Set),[d,p]=b.useState(!1),[f,m]=b.useState(""),[y,j]=b.useState(new Map),[z,v]=b.useState(380),[x,g]=b.useState(!1),T=b.useRef(null),[N,_]=b.useState(null),C=b.useRef(null),[k,R]=b.useState(null),[S,L]=b.useState(null),I=b.useRef(null),q=b.useRef(null),U=b.useCallback(J=>{J.preventDefault(),g(!0)},[]);if(b.useEffect(()=>{const J=ne=>{if(!x)return;const he=Math.min(Math.max(200,ne.clientX),600);v(he)},X=()=>{g(!1)};return x&&(document.addEventListener("mousemove",J),document.addEventListener("mouseup",X),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",X),document.body.style.cursor="",document.body.style.userSelect=""}},[x]),b.useEffect(()=>{if(t){const J=t.agents.filter(X=>"sub_agents"in X&&X.sub_agents.length>0).map(X=>X.id);u(new Set(J))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;function B(){if(!f.trim()||!t)return;const J=`generating_${Date.now()}`,X=f;j(ne=>new Map(ne).set(J,X)),p(!1),m(""),Ag(t.id,X).then(ne=>{var he,we,Te,be;if(ne.success&&ne.config){const F=ne.config,ae=[];if((he=F.tools)!=null&&he.builtin)for(const ee of F.tools.builtin)ae.push({type:"builtin",name:ee});if((we=F.tools)!=null&&we.mcp)for(const ee of F.tools.mcp){const fe=l.find(le=>le.name===ee.server);fe&&ae.push({type:"mcp",server:{...fe,tool_filter:ee.tools}})}if((Te=F.tools)!=null&&Te.custom)for(const ee of F.tools.custom){const fe=t.custom_tools.find(le=>le.name===ee);fe&&ae.push({type:"function",name:ee,module_path:fe.module_path})}if((be=F.tools)!=null&&be.agents)for(const ee of F.tools.agents){const fe=t.agents.find(le=>le.id===ee);fe&&ae.push({type:"agent",agent_id:ee,name:fe.name})}const pe=t.app.models||[],me=pe.find(ee=>ee.id===t.app.default_model_id)||pe[0],W={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:F.name||"new_agent",description:F.description||"",instruction:F.instruction||"",model:me?{provider:me.provider,model_name:me.model_name,api_base:me.api_base,temperature:me.temperature,max_output_tokens:me.max_output_tokens,top_p:me.top_p,top_k:me.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:ae,sub_agents:F.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(W),a(W.id),e==null||e(W.id)}else console.error("Failed to generate agent:",ne.error)}).catch(ne=>{console.error("Error generating agent:",ne)}).finally(()=>{j(ne=>{const he=new Map(ne);return he.delete(J),he})})}const se=t.agents.find(J=>J.id===o);function P(J){a(J),e==null||e(J)}function $(J){if(!t)return;const X=t.app.models||[],ne=X.find(we=>we.id===t.app.default_model_id)||X[0],he=FS(J,ne);n(he),P(he.id)}function M(J,X){X.stopPropagation(),confirm("Delete this agent?")&&(r(J),o===J&&(e==null||e(null)))}function w(J){const X=new Set(c);X.has(J)?X.delete(J):X.add(J),u(X)}function V(J){if(!I.current||!C.current)return;const X=I.current.getBoundingClientRect(),ne=J.clientY-X.top,he=60,we=8;if(ne<he){const Te=Math.max(1,we*(1-ne/he));I.current.scrollTop-=Te}else if(ne>X.height-he){const Te=Math.max(1,we*(1-(X.height-ne)/he));I.current.scrollTop+=Te}}function Q(J,X){J.dataTransfer.setData("text/plain",X),J.dataTransfer.effectAllowed="move",C.current=X,requestAnimationFrame(()=>_(X))}function h(){C.current=null,_(null),R(null),L(null),q.current&&(cancelAnimationFrame(q.current),q.current=null)}function D(J,X,ne){if(!t||(J.preventDefault(),J.stopPropagation(),!C.current))return;const we=t.agents.find(Te=>Te.id===X);!we||!("sub_agents"in we)||(J.dataTransfer.dropEffect="move",L({parentId:X,index:ne}),R(null))}function E(J,X,ne){if(!t)return;J.preventDefault(),J.stopPropagation();const he=J.dataTransfer.getData("text/plain");if(!he)return;const we=t.agents.find(be=>be.id===X);if(!we||!("sub_agents"in we))return;t.agents.forEach(be=>{"sub_agents"in be&&be.sub_agents.includes(he)&&i(be.id,{sub_agents:be.sub_agents.filter(F=>F!==he)})});const Te=[...we.sub_agents.filter(be=>be!==he)];Te.splice(ne,0,he),i(X,{sub_agents:Te}),u(be=>new Set([...be,X])),_(null),L(null)}function G(J,X,ne){if(!t)return;const he=C.current;if(J.preventDefault(),J.stopPropagation(),he===X)return;const we=t.agents.find(Te=>Te.id===he);we&&"sub_agents"in we&&K(we,X)||(J.dataTransfer.dropEffect="move",R({agentId:X,type:ne}),L(null))}function ge(J){const X=J.relatedTarget;(!X||!J.currentTarget.contains(X))&&R(null)}function ye(J,X,ne){if(!t)return;J.preventDefault(),J.stopPropagation();const he=J.dataTransfer.getData("text/plain");if(!he||he===X)return;const we=t.agents.find(be=>be.id===X),Te=t.agents.find(be=>be.id===he);if(!(!we||!Te)){if(ne==="sub_agent")"sub_agents"in we&&(t.agents.forEach(be=>{"sub_agents"in be&&be.sub_agents.includes(he)&&i(be.id,{sub_agents:be.sub_agents.filter(F=>F!==he)})}),we.sub_agents.includes(he)||(i(X,{sub_agents:[...we.sub_agents,he]}),u(be=>new Set([...be,X]))));else if(ne==="tool"&&"tools"in we){const be=we;be.tools.some(ae=>ae.type==="agent"&&ae.agent_id===he)||i(X,{tools:[...be.tools,{type:"agent",agent_id:he,name:Te.name}]})}_(null),R(null)}}function K(J,X){if(!t||!("sub_agents"in J))return!1;if(J.sub_agents.includes(X))return!0;for(const ne of J.sub_agents){const he=t.agents.find(we=>we.id===ne);if(he&&K(he,X))return!0}return!1}function A(J){const X=sl.find(ne=>ne.type===J);return X?X.icon:dr}function H(J){const X=sl.find(ne=>ne.type===J);return X?X.color:"#888"}function Z(J,X=0){return J.map(ne=>{const he=A(ne.type),we=H(ne.type),Te="sub_agents"in ne&&ne.sub_agents.length>0,be="sub_agents"in ne,F=ne.type==="LlmAgent",ae=c.has(ne.id),pe=N===ne.id,me=(k==null?void 0:k.agentId)===ne.id&&(k==null?void 0:k.type)==="sub_agent",W=(k==null?void 0:k.agentId)===ne.id&&(k==null?void 0:k.type)==="tool",ee=Te&&t?ne.sub_agents.map(le=>t.agents.find(je=>je.id===le)).filter(le=>le!==void 0):[],fe=N&&N!==ne.id&&(be||F);return s.jsxs("div",{className:"agent-tree-item",children:[s.jsxs("div",{className:`agent-item ${o===ne.id?"selected":""} ${pe?"dragging":""} ${fe?"drop-target":""}`,onClick:()=>P(ne.id),style:{paddingLeft:12+X*20},draggable:!0,onDragStart:le=>Q(le,ne.id),onDragEnd:h,onDragOver:le=>{fe&&(le.preventDefault(),le.stopPropagation())},children:[s.jsx("div",{className:"drag-handle",children:s.jsx(g0,{size:12})}),Te?s.jsx("button",{className:"expand-btn",onClick:le=>{le.stopPropagation(),w(ne.id)},children:ae?s.jsx(Mt,{size:16}):s.jsx(It,{size:16})}):s.jsx("span",{style:{width:20}}),s.jsx("div",{className:"agent-icon",style:{background:we},children:s.jsx(he,{size:14})}),s.jsx("span",{className:"agent-name",children:ne.name}),s.jsx("button",{className:"delete-btn",onClick:le=>M(ne.id,le),children:s.jsx($e,{size:14})}),fe&&s.jsxs("div",{className:"drop-overlay",children:[be&&s.jsxs("div",{className:`drop-zone-overlay ${me?"active":""}`,onDragOver:le=>G(le,ne.id,"sub_agent"),onDragLeave:ge,onDrop:le=>ye(le,ne.id,"sub_agent"),children:[s.jsx(Qg,{size:12}),s.jsx("span",{children:"Sub-agent"})]}),F&&s.jsxs("div",{className:`drop-zone-overlay ${W?"active":""}`,onDragOver:le=>G(le,ne.id,"tool"),onDragLeave:ge,onDrop:le=>ye(le,ne.id,"tool"),children:[s.jsx(en,{size:12}),s.jsx("span",{children:"Tool"})]})]})]}),Te&&ae&&s.jsxs("div",{className:"sub-agents",children:[N&&N!==ne.id&&s.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===ne.id&&(S==null?void 0:S.index)===0?"active":""}`,style:{marginLeft:12+(X+1)*20},onDragOver:le=>D(le,ne.id,0),onDragLeave:()=>L(null),onDrop:le=>E(le,ne.id,0)}),ee.map((le,je)=>s.jsxs(Tt.Fragment,{children:[Z([le],X+1),N&&N!==ne.id&&N!==le.id&&s.jsx("div",{className:`insert-indicator ${(S==null?void 0:S.parentId)===ne.id&&(S==null?void 0:S.index)===je+1?"active":""}`,style:{marginLeft:12+(X+1)*20},onDragOver:Ze=>D(Ze,ne.id,je+1),onDragLeave:()=>L(null),onDrop:Ze=>E(Ze,ne.id,je+1)})]},le.id))]})]},ne.id)})}const Y=new Set(t.agents.flatMap(J=>"sub_agents"in J?J.sub_agents:[])),ie=t.agents.filter(J=>!Y.has(J.id));return s.jsxs("div",{className:"agents-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"agents-sidebar",style:{width:z},children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Agents (",t.agents.length,")",y.size>0&&s.jsxs("span",{className:"generating-badge",children:[s.jsx(On,{size:12,className:"spin"})," ",y.size]})]}),s.jsxs("div",{className:"header-buttons",children:[sl.map(({type:J,icon:X,color:ne})=>s.jsx("button",{className:"quick-add-btn",style:{background:ne},onClick:()=>$(J),title:`Add ${J}`,children:s.jsx(X,{size:14})},J)),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:s.jsx(Va,{size:14})})]})]}),s.jsx("div",{className:"agents-list",ref:I,onDragOver:V,children:t.agents.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(dr,{size:32}),s.jsx("p",{children:"No agents yet"})]}):Z(ie)})]}),s.jsx("div",{ref:T,className:`sidebar-resizer ${x?"resizing":""}`,onMouseDown:U}),s.jsx("div",{className:"agent-editor-area",children:se?s.jsx(RS,{agent:se}):s.jsxs("div",{className:"empty-state card",children:[s.jsx(dr,{size:48}),s.jsxs("p",{children:["Select an agent to edit",s.jsx("br",{}),"or create a new one"]})]})}),d&&s.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:s.jsxs("div",{className:"quick-setup-content",onClick:J=>J.stopPropagation(),children:[s.jsxs("h2",{children:[s.jsx(Va,{size:20})," Quick Agent Setup"]}),s.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),s.jsxs("div",{className:"quick-setup-form",children:[s.jsx("textarea",{value:f,onChange:J=>m(J.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:J=>{J.key==="Enter"&&(J.metaKey||J.ctrlKey)&&f.trim()&&B()}}),s.jsxs("div",{className:"quick-setup-info",children:[s.jsx("strong",{children:"Available resources:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),s.jsxs("li",{children:[l.length," MCP servers"]}),s.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),s.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),s.jsxs("div",{className:"quick-setup-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:B,disabled:!f.trim(),children:[s.jsx(Va,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var Bu="\x1B[0m",Uu="\x1B[1m",Wx=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",US=e=>{let t=Wx(e),n=`${Uu}[MONACOPILOT ERROR] ${t}${Bu}`;return console.error(n),{message:t}},VS=(e,t)=>{console.warn(`${Uu}[MONACOPILOT WARN] ${e}${t?`
${Wx(t)}`:""}${Bu}`)},WS=(e,t,n)=>console.warn(`${Uu}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${Bu}`),Io={report:US,warn:VS,warnDeprecated:WS},Ff=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},HS=100,qS=!0,Hx="onIdle",JS=!0,KS=120,GS=400,QS=0,Vu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),YS=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),XS=e=>e.getValue(),ZS=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},qx=class Jx{constructor(){this.cache=new ZS(Jx.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=Vu(n,r),a=o,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=o-1&&u<=l+1:c===i?u>=o-1:c===a?u<=l+1:!0}};qx.MAX_CACHE_SIZE=20;var eC=qx,tC=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},nC=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),y=t.slice(-f);m===y&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},rC=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new nC}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,o),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,l=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},sC=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},iC=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:l=HS}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(j,z,v)=>{let x=j(e,t);return z?Ff(x,z,v):x},p=(j,z)=>!j||!z?j:j.map(({content:v,...x})=>({...x,content:Ff(v,z)})),f=d(Vu,u,{truncateDirection:"keepEnd"}),m=d(YS,u,{truncateDirection:"keepStart"}),y=p(a,u);return{filename:r,language:i,technologies:o,relatedFiles:y,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},oC=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:o,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},aC=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,vs=e=>({items:e,enableForwardStability:!0}),vc=new eC,lC=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=Hx,enableCaching:l=qS,allowFollowUpCompletions:c=JS,onError:u,requestHandler:d}=o;if(l&&!i){let p=vc.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return vs(p)}if(r.isCancellationRequested||!c&&i)return vs([]);try{let p=oC(async y=>{var z,v;(z=o.onCompletionRequested)==null||z.call(o,y);let j;if(d)j=await d(y);else if(o.endpoint)j=await sC({endpoint:o.endpoint,...y});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(j.error)throw new Error(j.error);return(v=o.onCompletionRequestFinished)==null||v.call(o,y,j),j},{onTyping:KS,onIdle:GS,onDemand:QS}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=iC({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let y=new tC(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),j=new rC(e);return l&&vc.add({completion:y,range:j.computeCacheRange(n,y),textBeforeCursor:Vu(n,t)}),vs([{insertText:y,range:j.computeInsertionRange(n,y,t)}])}}catch(p){if(aC(p))return vs([]);u?u(p):Io.warn("Cannot provide completion",p)}return vs([])},Wu=new WeakMap,ua=e=>Wu.get(e),cC=(e,t)=>{Wu.set(e,t)},Bf=e=>{Wu.delete(e)},uC=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),dC=(e,t)=>{let n=ua(e);!n||!n.options||(n.options={...n.options,...t})},pC=(e,t,n)=>{let r=ua(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:XS(t),position:o,triggerType:c.trigger??Hx})))return lC({monaco:e,mdl:i,pos:o,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,o,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,o.range))},freeInlineCompletions:()=>{}}):null},fC={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},mC=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(fC).some(t=>t(this.monaco,e))}},hC=(e,t,n,r)=>{let i=new mC(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},Kx=(e,t,n)=>{let r=[];cC(t,uC(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=ua(t);if(!i)return Io.warn("Completion is not registered properly. State not found."),xC();let o=pC(e,t,n);o&&r.push(o);let a=hC(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();vc.clear(),Bf(t)},trigger:()=>gC(t),updateOptions:l=>{dC(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Io.report(i),{deregister:()=>{for(let o of r)o.dispose();Bf(t)},trigger:()=>{},updateOptions:()=>{}}}},gC=e=>{let t=ua(e);if(!t){Io.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},xC=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function yC(){return`tool_${Date.now().toString(36)}`}function vC(e){return/^[a-zA-Z0-9_]+$/.test(e)}const bC=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function kC({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=ut(),[d,p]=b.useState(""),[f,m]=b.useState(null),[y,j]=b.useState("tools"),[z,v]=b.useState(null),[x,g]=b.useState(""),[T,N]=b.useState(!1),[_,C]=b.useState(!1),[k,R]=b.useState(!1),[S,L]=b.useState(null),[I,q]=b.useState(null),[U,B]=b.useState({}),[se,P]=b.useState({}),[$,M]=b.useState("");if(!t)return null;const w=t.mcp_servers||[],V=t.custom_tools.find(F=>F.id===a),Q=w.find(F=>F.name===z);function h(F){l(F),e==null||e(F)}b.useEffect(()=>{V&&(p(V.code),q(null))},[a]),b.useEffect(()=>{Q&&(g(JSON.stringify(Q,null,2)),N(!1))},[z]),b.useEffect(()=>{if(!t)return;const F=D(t.mcp_servers||[]);M(JSON.stringify(F,null,2))},[t==null?void 0:t.mcp_servers]),b.useEffect(()=>{if(y==="mcp"&&w.length>0){const F=w.filter(ae=>!U[ae.name]||U[ae.name]==="unknown");F.length>0&&F.forEach(ae=>{ye(ae.name)})}},[y,w.length]);function D(F){const ae={};for(const pe of F){const me={};pe.connection_type==="stdio"?(me.command=pe.command||"",me.args=pe.args||[],Object.keys(pe.env||{}).length>0&&(me.env=pe.env)):pe.connection_type==="sse"&&(me.url=pe.url||"",Object.keys(pe.headers||{}).length>0&&(me.headers=pe.headers)),pe.timeout&&pe.timeout!==30&&(me.timeout=pe.timeout),pe.tool_filter&&(me.tool_filter=pe.tool_filter),pe.tool_name_prefix&&(me.tool_name_prefix=pe.tool_name_prefix),ae[pe.name]=me}return{mcpServers:ae}}function E(F){const ae=[];for(const[pe,me]of Object.entries(F.mcpServers||{})){const W={name:pe,description:me.description||"",connection_type:me.url?"sse":"stdio",command:me.command,args:me.args||[],env:me.env||{},url:me.url,headers:me.headers||{},timeout:me.timeout||30,tool_filter:me.tool_filter||null,tool_name_prefix:me.tool_name_prefix};ae.push(W)}return ae}function G(F){F!==void 0&&M(F)}function ge(){try{const F=JSON.parse($),ae=E(F);n({mcp_servers:ae})}catch(F){alert("Invalid JSON: "+F.message)}}async function ye(F){const ae=w.find(pe=>pe.name===F);if(ae){B(pe=>({...pe,[F]:"testing"})),P(pe=>({...pe,[F]:""}));try{const pe=await sc({connection_type:ae.connection_type,command:ae.command,args:ae.args,env:ae.env,url:ae.url,headers:ae.headers,timeout:ae.timeout});B(me=>({...me,[F]:pe.success?"connected":"error"})),!pe.success&&pe.error&&P(me=>({...me,[F]:pe.error||"Unknown error"}))}catch(pe){B(me=>({...me,[F]:"error"})),P(me=>({...me,[F]:pe.message}))}}}function K(F){const ae=u.find(me=>me.name===F);if(!ae)return;if(w.some(me=>me.name===F)){alert(`Server "${F}" is already configured`);return}const pe={name:ae.name,description:ae.description||"",connection_type:ae.connection_type,command:ae.command,args:ae.args||[],env:ae.env||{},url:ae.url,headers:ae.headers||{},timeout:ae.timeout||30,tool_filter:ae.tool_filter||null,tool_name_prefix:ae.tool_name_prefix};n({mcp_servers:[...w,pe]})}async function A(){for(const F of w)await ye(F.name)}function H(){const F=yC();r({id:F,name:"new_tool",description:"",module_path:"tools.custom",code:bC,state_keys_used:[]}),h(F)}function Z(F,ae){ae.stopPropagation(),confirm("Delete this tool?")&&(o(F),a===F&&(e==null||e(null)))}function Y(F){V&&(F.name!==void 0&&(F.name===""||vC(F.name)?q(null):q("Name can only contain letters, numbers, and underscores")),i(V.id,F))}function ie(F){F!==void 0&&V&&(p(F),Y({code:F}))}async function J(){if(V){C(!0);try{const F=await Rg(t.id,V.name,V.description,V.state_keys_used);F.success&&F.code?(p(F.code),Y({code:F.code})):(console.error("Failed to generate tool code:",F.error),alert("Failed to generate tool code: "+(F.error||"Unknown error")))}catch(F){console.error("Error generating tool code:",F),alert("Error generating tool code: "+F.message)}finally{C(!1)}}}const X=b.useRef(null),ne=b.useCallback((F,ae)=>{if(X.current&&typeof X.current=="function")try{X.current()}catch{}try{const pe=Kx(ae,F,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof pe=="function"?X.current=pe:X.current=null}catch{X.current=null}},[]);b.useEffect(()=>()=>{if(X.current&&typeof X.current=="function")try{X.current()}catch{}},[]);function he(F){F!==void 0&&(g(F),N(F!==JSON.stringify(Q,null,2)))}function we(){if(Q)try{const F=JSON.parse(x),ae=Q.name,pe=w.map(me=>me.name===ae?F:me);n({mcp_servers:pe}),v(F.name),N(!1)}catch(F){alert("Invalid JSON: "+F.message)}}async function Te(){R(!0),L(null);try{const F=JSON.parse(x),ae=await sc({connection_type:F.connection_type,command:F.command,args:F.args,env:F.env,url:F.url,headers:F.headers,timeout:F.timeout||30});if(L(ae),ae.success&&ae.tools.length>0){const pe={...F,tool_filter:ae.tools.map(me=>me.name)};g(JSON.stringify(pe,null,2)),N(!0)}}catch(F){L({success:!1,tools:[],error:F.message})}finally{R(!1)}}const be={};return t.custom_tools.forEach(F=>{const ae=F.module_path||"tools";be[ae]||(be[ae]=[]),be[ae].push(F)}),s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"tools-sidebar",children:[s.jsxs("div",{className:"sidebar-tabs",children:[s.jsxs("button",{className:`sidebar-tab ${y==="tools"?"active":""}`,onClick:()=>{j("tools"),v(null)},children:[s.jsx(en,{size:14}),"Tools"]}),s.jsxs("button",{className:`sidebar-tab ${y==="mcp"?"active":""}`,onClick:()=>{j("mcp"),l(null),m(null),v(null)},children:[s.jsx(hs,{size:14}),"MCP"]})]}),y==="tools"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:H,children:[s.jsx(Ke,{size:14}),"New"]})]}),s.jsxs("div",{className:"tools-tree",children:[c.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(b0,{size:14}),"Built-in Tools"]}),c.map(F=>s.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===F.name?"selected":""}`,onClick:()=>{m(F),h(null),v(null)},children:[s.jsx(oc,{size:14}),s.jsx("span",{className:"tool-name",children:F.name})]},F.name))]}),t.custom_tools.length===0&&c.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(fn,{size:32}),s.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(be).map(([F,ae])=>s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Vg,{size:14}),F]}),ae.map(pe=>s.jsxs("div",{className:`tool-item ${a===pe.id?"selected":""}`,onClick:()=>{h(pe.id),m(null),v(null)},children:[s.jsx(en,{size:14}),s.jsx("span",{className:"tool-name",children:pe.name}),s.jsx("button",{className:"delete-btn",onClick:me=>Z(pe.id,me),children:s.jsx($e,{size:14})})]},pe.id))]},F))]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["MCP Servers (",w.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:A,title:"Test all server connections",children:s.jsx(Yt,{size:14})})]}),s.jsx("div",{className:"mcp-servers-list",children:w.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(hs,{size:32}),s.jsx("p",{children:"No MCP servers configured"}),s.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):w.map(F=>{const ae=U[F.name]||"unknown",pe=se[F.name];return s.jsxs("div",{className:"mcp-server-item-wrapper",children:[s.jsxs("div",{className:"mcp-server-item",children:[s.jsxs("div",{className:"mcp-server-info",children:[s.jsx(hs,{size:14}),s.jsx("span",{className:"mcp-server-name",children:F.name}),s.jsxs("span",{className:`mcp-status-badge ${ae}`,children:[ae==="testing"?s.jsx(On,{size:10,className:"spin"}):null,ae==="unknown"&&"●",ae==="connected"&&"●",ae==="error"&&"●"]})]}),s.jsxs("div",{className:"mcp-server-actions",children:[s.jsx("span",{className:"mcp-server-type",children:F.connection_type}),s.jsxs("button",{className:"btn btn-sm",onClick:()=>ye(F.name),disabled:ae==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[ae==="testing"?s.jsx(On,{size:12,className:"spin"}):s.jsx(Yt,{size:12}),s.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),ae==="error"&&pe&&s.jsxs("div",{className:"mcp-server-error",children:[s.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",pe]})]},F.name)})})]})]}),s.jsx("div",{className:"tool-editor",children:f?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(oc,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),s.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),s.jsxs("div",{className:"builtin-tool-info",children:[s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:f.description||"No description available."})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Usage"}),s.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),s.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Note"}),s.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):V?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(en,{size:20,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:V.name,onChange:F=>Y({name:F.target.value}),placeholder:"Tool name",style:{borderColor:I?"var(--error)":void 0}}),I&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:I})]})]}),s.jsxs("div",{className:"editor-meta",children:[s.jsxs("div",{className:"meta-field grow",children:[s.jsx("label",{children:"Description"}),s.jsx("input",{type:"text",value:V.description,onChange:F=>Y({description:F.target.value}),placeholder:"What does this tool do?"})]}),s.jsxs("div",{className:"meta-field",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:V.module_path,onChange:F=>Y({module_path:F.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:J,disabled:_||!V.name||!V.description,title:!V.name||!V.description?"Add a name and description first":"Generate code using AI",children:_?s.jsxs(s.Fragment,{children:[s.jsx(On,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(_u,{size:14}),"Write Tool"]})}),s.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),s.jsx("div",{className:"code-editor",children:s.jsx(Bt,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:ie,onMount:ne,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),s.jsxs("div",{className:"state-keys-panel",children:[s.jsxs("h4",{children:[s.jsx(wu,{size:14})," State Keys Used"]}),s.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(F=>{const ae=V.state_keys_used.includes(F.name);return s.jsxs("label",{className:`state-key-chip ${ae?"selected":""}`,title:F.description,children:[s.jsx("input",{type:"checkbox",checked:ae,onChange:pe=>{const me=pe.target.checked?[...V.state_keys_used,F.name]:V.state_keys_used.filter(W=>W!==F.name);Y({state_keys_used:me})}}),F.name,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",F.type,")"]})]},F.name)})})]})]}):Q?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(hs,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:Q.name}),s.jsx("span",{className:"badge badge-info",children:Q.connection_type}),T&&s.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:Te,disabled:k,title:"Test connection and discover available tools",children:[k?s.jsx(On,{size:14,className:"spin"}):s.jsx(ku,{size:14}),k?"Testing...":"Test Connection"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:we,disabled:!T,children:[s.jsx(Lo,{size:14}),"Save"]})]}),S&&s.jsx("div",{className:`mcp-test-result ${S.success?"success":"error"}`,children:S.success?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",S.tools.length," tools"]}),S.tools.length>0&&s.jsxs("div",{className:"test-result-tools",children:[s.jsx("strong",{children:"Available tools:"}),s.jsx("ul",{children:S.tools.map(F=>s.jsxs("li",{children:[s.jsx("code",{children:F.name}),F.description&&s.jsxs("span",{children:[" — ",F.description]})]},F.name))}),s.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),s.jsx("div",{className:"test-result-error",children:S.error})]})}),s.jsx("div",{className:"mcp-info",children:s.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),s.jsx("div",{className:"code-editor",children:s.jsx(Bt,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:he,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),s.jsxs("div",{className:"mcp-help",children:[s.jsx("h4",{children:"Schema Reference"}),s.jsxs("div",{className:"schema-fields",children:[s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"name"}),s.jsx("span",{children:"Unique identifier for this server"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"description"}),s.jsx("span",{children:"Human-readable description"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"connection_type"}),s.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"command"}),s.jsx("span",{children:"Command to run (for stdio)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"args"}),s.jsx("span",{children:"Array of command arguments"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"env"}),s.jsx("span",{children:"Environment variables object"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"url"}),s.jsx("span",{children:"Server URL (for sse/http)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"tool_filter"}),s.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):y==="mcp"?s.jsxs("div",{className:"mcp-json-editor",children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(hs,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),s.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),s.jsxs("select",{value:"",onChange:F=>{F.target.value&&K(F.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[s.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(F=>!w.some(ae=>ae.name===F.name)).map(F=>s.jsxs("option",{value:F.name,children:[F.name," - ",F.description||"No description"]},F.name))]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ge,children:[s.jsx(Lo,{size:14}),"Apply Changes"]})]}),s.jsx("div",{className:"mcp-json-info",children:s.jsxs("p",{children:["Configure your MCP servers using the standard ",s.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),s.jsx("div",{className:"editor-content",style:{flex:1},children:s.jsx(Bt,{height:"100%",defaultLanguage:"json",value:$,onChange:G,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):s.jsxs("div",{className:"empty-state",children:[s.jsx(fn,{size:48}),s.jsxs("p",{children:["Select a tool to view",s.jsx("br",{}),"or create a new custom tool"]})]})})]})}function wC(){return`callback_${Date.now().toString(36)}`}function Uf(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Gx(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return Gx("before_agent")}}function jC({onSelectCallback:e}){var k,R;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=ut(),[a,l]=b.useState(""),[c,u]=b.useState(null),[d,p]=b.useState(null),[f,m]=b.useState(!1),y=b.useRef(null);if(!t)return null;const j=t.custom_callbacks||[],z=j.find(S=>S.id===c);function v(S){u(S),e==null||e(S)}b.useEffect(()=>{z?(l(z.code),p(null)):l("")},[c,z]);function x(){const S=wC(),L={id:S,name:"new_callback",description:"",module_path:"callbacks.custom",code:Gx("before_agent"),state_keys_used:[]};r(L),v(S)}function g(S,L){L.stopPropagation(),confirm("Delete this callback?")&&(o(S),c===S&&(e==null||e(null),u(null),l("")))}function T(){if(!c)return;const S=j.find(q=>q.id===c);if(!S)return;const L=S.name.trim();if(!L){alert("Please enter a name");return}if(!Uf(L)){p("Name must contain only alphanumeric characters and underscores");return}if(j.find(q=>q.name===L&&q.id!==S.id)){p("A callback with this name already exists");return}i(S.id,{code:a,name:L,description:S.description,module_path:S.module_path,state_keys_used:S.state_keys_used}),p(null)}function N(S,L){y.current=L;try{Kx(L,{endpoint:"/api/code-completion",language:"python"})}catch(I){console.warn("Failed to register Monacopilot completion:",I)}}async function _(){if(z){m(!0);try{let S="before_agent";const L=z.name.toLowerCase(),I=z.description.toLowerCase();L.includes("after_agent")||I.includes("after agent")?S="after_agent":L.includes("before_model")||I.includes("before model")?S="before_model":L.includes("after_model")||I.includes("after model")?S="after_model":L.includes("before_tool")||I.includes("before tool")?S="before_tool":L.includes("after_tool")||I.includes("after tool")?S="after_tool":(L.includes("before_agent")||I.includes("before agent"))&&(S="before_agent");const q=await Mg(t.id,z.name,z.description,S,z.state_keys_used);q.success&&q.code?(l(q.code),i(z.id,{code:q.code})):(console.error("Failed to generate callback code:",q.error),alert("Failed to generate callback code: "+(q.error||"Unknown error")))}catch(S){console.error("Error generating callback code:",S),alert("Error generating callback code: "+S.message)}finally{m(!1)}}}const C=((R=(k=t.app)==null?void 0:k.state_keys)==null?void 0:R.map(S=>S.name))||[];return s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tools-sidebar",children:[s.jsxs("div",{className:"tools-sidebar-header",children:[s.jsx("h3",{children:"Callbacks"}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:s.jsx(Ke,{size:16})})]}),s.jsx("div",{className:"tools-list",children:j.length===0?s.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):j.map(S=>s.jsxs("div",{className:`tool-item ${c===S.id?"selected":""}`,onClick:()=>v(S.id),children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{className:"tool-item-name",children:S.name}),S.description&&s.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:S.description})]}),s.jsx("div",{className:"tool-item-actions",children:s.jsx("button",{className:"btn btn-icon btn-sm",onClick:L=>g(S.id,L),title:"Delete",children:s.jsx($e,{size:14})})})]},S.id))})]}),s.jsx("div",{className:"tools-editor",children:z?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tools-editor-header",children:[s.jsx("h3",{children:"Edit Callback"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:T,children:[s.jsx(Lo,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),s.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:z.name,onChange:S=>{const L=S.target.value;i(z.id,{name:L}),d&&Uf(L)&&p(null)},className:d?"error":""}),d&&s.jsx("div",{className:"error-message",children:d})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:z.description,onChange:S=>i(z.id,{description:S.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:z.module_path,onChange:S=>i(z.id,{module_path:S.target.value}),placeholder:"callbacks.custom"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"State Keys Used"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:C.map(S=>{const L=z.state_keys_used.includes(S);return s.jsxs("button",{type:"button",className:`btn btn-sm ${L?"btn-primary":"btn-secondary"}`,onClick:()=>{const I=L?z.state_keys_used.filter(q=>q!==S):[...z.state_keys_used,S];i(z.id,{state_keys_used:I})},children:[s.jsx(wu,{size:12,style:{marginRight:"4px"}}),S]},S)})}),C.length===0&&s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{children:"Code"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:_,disabled:f||!z.name,title:z.name?"Generate code using AI":"Add a name first",children:f?s.jsxs(s.Fragment,{children:[s.jsx(On,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(_u,{size:14}),"Generate"]})})]}),s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),s.jsx("div",{className:"code-editor-container",children:s.jsx(Bt,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:S=>l(S||""),onMount:N,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):s.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function _C(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],o=n.split(".");if(o.length>2){const a=o.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Pe={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function SC({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[o,a]=b.useState(""),[l,c]=b.useState("exact"),[u,d]=b.useState(!1),[p,f]=b.useState(""),[m,y]=b.useState(!1),[j,z]=b.useState(t),v=_C(e.url);b.useEffect(()=>{v.length>0&&!o&&a(v[0].pattern)},[v,o]),b.useEffect(()=>{const C=setInterval(()=>{z(k=>k<=1?(r(),0):k-1)},1e3);return()=>clearInterval(C)},[r]);const x=b.useCallback(()=>{n()},[n]),g=b.useCallback(()=>{n(m?p:o,l,u)},[n,m,p,o,l,u]),T=j/t*100,N=e.source.startsWith("mcp:"),_=N?e.source.substring(4):"agent";return s.jsx("div",{style:Pe.overlay,children:s.jsxs("div",{style:Pe.dialog,children:[s.jsxs("div",{style:Pe.header,children:[s.jsx(c0,{size:18,style:Pe.headerIcon}),s.jsx("span",{style:Pe.headerTitle,children:"Network Request Approval"}),s.jsx("button",{style:Pe.closeButton,onClick:i,children:s.jsx(sa,{size:16})})]}),s.jsxs("div",{style:Pe.content,children:[s.jsx("div",{style:Pe.sourceText,children:N?s.jsxs(s.Fragment,{children:['MCP server "',s.jsx("span",{style:{color:"#22d3ee"},children:_}),'" wants to connect to:']}):s.jsx(s.Fragment,{children:"Agent wants to connect to:"})}),s.jsxs("div",{style:Pe.requestBox,children:[s.jsxs("div",{children:[s.jsx("span",{style:Pe.methodBadge(e.method),children:e.method}),s.jsx("span",{style:Pe.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&s.jsxs("div",{style:Pe.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),s.jsxs("div",{children:[s.jsx("div",{style:Pe.label,children:"Allow pattern:"}),m?s.jsxs("div",{children:[s.jsx("input",{type:"text",value:p,onChange:C=>f(C.target.value),placeholder:"e.g., *.example.com/*",style:Pe.customInput}),s.jsxs("div",{style:Pe.radioGroup,children:[s.jsxs("label",{style:Pe.radioLabel,children:[s.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),s.jsxs("label",{style:Pe.radioLabel,children:[s.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),s.jsx("button",{onClick:()=>y(!1),style:Pe.backLink,children:"← Back to suggestions"})]})]}):s.jsxs("select",{value:o,onChange:C=>{C.target.value==="__custom__"?(y(!0),f(o)):a(C.target.value)},style:Pe.select,children:[v.map(C=>s.jsx("option",{value:C.pattern,children:C.label},C.pattern)),s.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),s.jsxs("label",{style:Pe.checkboxLabel,children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:u,onChange:C=>d(C.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),s.jsxs("div",{style:Pe.footer,children:[s.jsxs("button",{onClick:r,style:Pe.button("deny"),children:[s.jsx(d0,{size:14}),"Deny"]}),s.jsxs("button",{onClick:x,style:Pe.button("once"),children:[s.jsx(vu,{size:14}),"Allow Once"]}),s.jsxs("button",{onClick:g,style:Pe.button("pattern"),children:[s.jsx(Kg,{size:14}),"Allow Pattern"]}),s.jsxs("div",{style:Pe.timerContainer,children:[s.jsx(ri,{size:14}),s.jsxs("span",{children:[j,"s"]})]})]}),s.jsx("div",{style:Pe.progressBar,children:s.jsx("div",{style:Pe.progressFill(T)})})]})})}const Vf={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},CC={agent_start:ic,agent_end:ic,tool_call:en,tool_result:en,model_call:bu,model_response:Po,state_change:kn,transfer:Yg,callback_start:fn,callback_end:fn};function NC(e){var t,n,r,i,o,a,l,c,u,d,p,f,m,y,j,z,v,x,g,T,N;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const C=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([M,w])=>{const V=w!=null?JSON.stringify(w):"null";return`${M}=${V.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${C.slice(0,60)}${C.length>60?"...":""})`;case"tool_result":const k=(i=e.data)==null?void 0:i.result;let R="";if((a=(o=k==null?void 0:k.content)==null?void 0:o[0])!=null&&a.text)R=String(k.content[0].text).slice(0,60);else if(typeof k=="string")R=k.slice(0,60);else if(k!=null){const M=JSON.stringify(k);R=M?M.slice(0,60):""}else R="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${R}${R.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const S=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],L=S.find(M=>(M==null?void 0:M.type)==="function_call");if(L)return`LLM_RSP → ${L.name||"unknown"}()`;const I=S.find(M=>(M==null?void 0:M.type)==="text");if(I!=null&&I.text){const M=String(I.text);return`LLM_RSP "${M.slice(0,50)}${M.length>50?"...":""}"`}return`LLM_RSP (${((y=e.data)==null?void 0:y.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((j=e.data)==null?void 0:j.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((z=e.data)==null?void 0:z.target)||"unknown"}`;case"callback_start":const U=((v=e.data)==null?void 0:v.callback_name)||"unknown",B=((x=e.data)==null?void 0:x.callback_type)||"";return`CALLBACK START ${B?`[${B}]`:""} ${U}`;case"callback_end":const se=((g=e.data)==null?void 0:g.callback_name)||"unknown",P=((T=e.data)==null?void 0:T.callback_type)||"",$=(N=e.data)!=null&&N.error?" [ERROR]":"";return`CALLBACK END ${P?`[${P}]`:""} ${se}${$}`;default:return e.event_type.toUpperCase()}}function EC(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function zC({event:e}){var o,a,l,c,u,d,p,f,m,y,j,z,v,x,g,T;const[t,n]=b.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=N=>{const _=new Set(t);_.has(N)?_.delete(N):_.add(N),n(_)},i=(N,_=0,C=!1)=>{const k="  ".repeat(_),R="  ".repeat(_+1);if(N===null)return s.jsx("span",{className:"json-null",children:"null"});if(N===void 0)return s.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof N=="boolean")return s.jsx("span",{className:"json-boolean",children:N.toString()});if(typeof N=="number")return s.jsx("span",{className:"json-number",children:N});if(typeof N=="string"){const S=N.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return S.length>300&&_>0?s.jsxs("span",{className:"json-string",children:['"',S.slice(0,300),'..." ',s.jsxs("span",{className:"json-truncated",children:["(",N.length," chars)"]})]}):s.jsxs("span",{className:"json-string",children:['"',S,'"']})}if(Array.isArray(N))return N.length===0?s.jsx("span",{className:"json-bracket",children:"[]"}):N.every(L=>L===null||typeof L!="object")&&N.length<=3?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"["}),N.map((L,I)=>s.jsxs("span",{children:[i(L,_+1,!0),I<N.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},I)),s.jsx("span",{className:"json-bracket",children:"]"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"["}),N.map((L,I)=>s.jsxs("span",{children:[`
`+R,i(L,_+1),I<N.length-1&&s.jsx("span",{className:"json-comma",children:","})]},I)),`
`+k,s.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof N=="object"){const S=Object.entries(N);return S.length===0?s.jsx("span",{className:"json-bracket",children:"{}"}):S.length<=2&&S.every(([,I])=>I===null||typeof I!="object")&&C?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"{"}),S.map(([I,q],U)=>s.jsxs("span",{children:[s.jsxs("span",{className:"json-key",children:['"',I,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(q,_+1,!0),U<S.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},I)),s.jsx("span",{className:"json-bracket",children:"}"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"{"}),S.map(([I,q],U)=>s.jsxs("span",{children:[`
`+R,s.jsxs("span",{className:"json-key",children:['"',I,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(q,_+1),U<S.length-1&&s.jsx("span",{className:"json-comma",children:","})]},I)),`
`+k,s.jsx("span",{className:"json-bracket",children:"}"})]})}return String(N)};return s.jsxs("div",{className:"event-detail",children:[s.jsxs("div",{className:"detail-header",children:[s.jsx("span",{className:"detail-type",children:e.event_type}),s.jsx("span",{className:"detail-agent",children:e.agent_name}),s.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?s.jsx(Mt,{size:12}):s.jsx(It,{size:12}),s.jsx("span",{children:"Event Data"})]}),t.has("data")&&s.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?s.jsx(Mt,{size:12}):s.jsx(It,{size:12}),s.jsx("span",{children:"Instruction"}),s.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?s.jsx(Mt,{size:12}):s.jsx(It,{size:12}),s.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&s.jsx("div",{className:"section-content",children:e.data.contents.map((N,_)=>{var C;return s.jsxs("div",{className:"message-item",children:[s.jsx("span",{className:`message-role ${N.role}`,children:N.role}),s.jsx("div",{className:"message-parts",children:(C=N.parts)==null?void 0:C.map((k,R)=>s.jsxs("div",{className:"message-part",children:[k.text&&s.jsx("pre",{children:k.text}),k.function_call&&s.jsxs("div",{className:"function-call",children:[s.jsx("strong",{children:k.function_call.name}),s.jsx("pre",{children:JSON.stringify(k.function_call.args,null,2)})]}),k.function_response&&s.jsxs("div",{className:"function-response",children:[s.jsx("strong",{children:k.function_response.name}),s.jsx("pre",{children:JSON.stringify(k.function_response.response,null,2)})]})]},R))})]},_)})})]}),e.event_type==="tool_result"&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?s.jsx(Mt,{size:12}):s.jsx(It,{size:12}),s.jsx("span",{children:"Tool Result"})]}),t.has("result")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"result-content",children:((d=(u=(c=(l=e.data)==null?void 0:l.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?s.jsx(Mt,{size:12}):s.jsx(It,{size:12}),s.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&s.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&s.jsx("div",{className:"section-content",children:e.data.parts.map((N,_)=>s.jsxs("div",{className:"response-part",children:[N.type==="text"&&N.text&&s.jsx("pre",{className:"response-text",children:N.text}),N.type==="function_call"&&s.jsxs("div",{className:"function-call",children:[s.jsxs("strong",{children:["→ ",N.name,"()"]}),N.args&&Object.keys(N.args).length>0&&s.jsx("pre",{children:JSON.stringify(N.args,null,2)})]}),N.thought&&s.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},_))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?s.jsx(Mt,{size:12}):s.jsx(It,{size:12}),s.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&s.jsxs("div",{className:"section-content",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Name:"})," ",((y=e.data)==null?void 0:y.callback_name)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Type:"})," ",((j=e.data)==null?void 0:j.callback_type)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Module Path:"})," ",((z=e.data)==null?void 0:z.module_path)||"unknown"]}),((v=e.data)==null?void 0:v.error)&&s.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Error:"})," ",e.data.error]}),((x=e.data)==null?void 0:x.error_type)&&s.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[s.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((g=e.data)==null?void 0:g.stack_trace)&&s.jsxs("div",{style:{marginTop:"8px"},children:[s.jsx("strong",{children:"Stack Trace:"}),s.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((T=e.data)==null?void 0:T.state_delta)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?s.jsx(Mt,{size:12}):s.jsx(It,{size:12}),s.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&s.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([N,_])=>s.jsxs("div",{className:"state-delta-item",children:[s.jsx("div",{className:"state-delta-key",children:N}),s.jsx("pre",{className:"state-delta-value",children:typeof _=="string"?_:JSON.stringify(_,null,2)})]},N))})]})]})}function TC({content:e,title:t,onClose:n}){return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:t}),s.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),s.jsx("div",{className:"modal-body markdown-content",children:s.jsx(Vx,{children:e})})]}),s.jsx("style",{children:`
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
      `})]})}function PC({events:e,selectedEventIndex:t,project:n}){const[r,i]=b.useState(null),o=b.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var y;l[f]={...l[f],value:m,timestamp:d.timestamp,defined:((y=l[f])==null?void 0:y.defined)??!1}})}),l},[e,t,n]),a=Object.entries(o);return s.jsxs(s.Fragment,{children:[r&&s.jsx(TC,{content:r.content,title:r.title,onClose:()=>i(null)}),s.jsxs("div",{className:"state-snapshot",children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?s.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>s.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[s.jsxs("div",{className:"state-key",children:[l,f&&s.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),s.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&s.jsx("div",{className:"state-desc",children:p}),u&&s.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function il(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Wf(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(o=o[l[1]]),o=o[parseInt(l[2])]):o=o[a]}return o==null?"[No match]":typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function LC({project:e,selectedEventIndex:t,sandboxMode:n}){var ge,ye;const{watches:r,updateWatch:i,addWatch:o,removeWatch:a,runEvents:l}=ut(),[c,u]=b.useState(!1),[d,p]=b.useState(null),[f,m]=b.useState({}),[y,j]=b.useState(new Set),[z,v]=b.useState(""),[x,g]=b.useState(""),[T,N]=b.useState({}),[_,C]=b.useState(""),[k,R]=b.useState([]),[S,L]=b.useState(null),[I,q]=b.useState(null),[U,B]=b.useState(!1);b.useEffect(()=>{yu().then(R).catch(console.error)},[]);const se=b.useMemo(()=>{const K=e.mcp_servers||[],A=new Set(K.map(Z=>Z.name)),H=k.filter(Z=>!A.has(Z.name));return[...K,...H]},[e.mcp_servers,k]),P=b.useCallback(async K=>{if(!(f[K]||y.has(K))){j(A=>new Set([...A,K]));try{const A=await _e(`/projects/${e.id}/mcp-servers/${encodeURIComponent(K)}/test-connection`,{method:"POST"});A.success&&m(H=>({...H,[K]:A.tools}))}catch(A){console.error("Failed to load tools:",A)}finally{j(A=>{const H=new Set(A);return H.delete(K),H})}}},[e.id,f,y]);b.useEffect(()=>{var Z;if(d)return;if(!z||!x){N({});return}const A=(f[z]||[]).find(Y=>Y.name===x);if(!((Z=A==null?void 0:A.parameters)!=null&&Z.properties)){N({});return}const H={};Object.entries(A.parameters.properties).forEach(([Y,ie])=>{ie.type==="string"?H[Y]=ie.default||"":ie.type==="number"||ie.type==="integer"?H[Y]=ie.default||0:ie.type==="boolean"?H[Y]=ie.default||!1:H[Y]=ie.default||null}),N(H)},[z,x,f,d]);const $=()=>{p(null),v(""),g(""),N({}),C(""),L(null),q(null),u(!0)},M=K=>{if(p(K.id),v(K.serverName),g(K.toolName),N({...K.args}),C(K.transform||""),K.result){const{text:A}=il(K.result);L(A),q(null)}else L(null),q(null);f[K.serverName]||P(K.serverName),u(!0)},w=async()=>{var A;if(!z||!x)return;B(!0),q(null);const K=((A=e.app)==null?void 0:A.id)||`app_${e.id}`;try{const H=await _e(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:z,tool_name:x,arguments:T,sandbox_mode:n,app_id:n?K:void 0})}),{text:Z,isError:Y}=il(H);Y?(q(Z),L(null)):(L(Z),q(null))}catch(H){q(String(H)),L(null)}finally{B(!1)}},V=b.useMemo(()=>S?!_||!_.trim()?S:Wf(S,_):null,[S,_]),Q=()=>{if(!(!z||!x)){if(d){i(d,{serverName:z,toolName:x,args:{...T},transform:_||void 0});const K=r.find(A=>A.id===d);K&&D({...K,serverName:z,toolName:x,args:T,transform:_||void 0,history:K.history||[]})}else{const K={id:`watch-${Date.now()}`,serverName:z,toolName:x,args:{...T},transform:_||void 0,history:[]};o(K),D(K)}u(!1)}},h=K=>{a(K)},D=b.useCallback(async(K,A)=>{var ie;i(K.id,{isLoading:!0,error:void 0});const H=A??l.length-1,Z=Date.now(),Y=((ie=e.app)==null?void 0:ie.id)||`app_${e.id}`;try{const J=await _e(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:K.serverName,tool_name:K.toolName,arguments:K.args,sandbox_mode:n,app_id:n?Y:void 0})}),X={eventIndex:H,timestamp:Z,result:J},ne=[...K.history||[],X];i(K.id,{result:J,isLoading:!1,lastRun:Z,history:ne})}catch(J){const X={eventIndex:H,timestamp:Z,error:String(J)},ne=[...K.history||[],X];i(K.id,{error:String(J),isLoading:!1,lastRun:Z,history:ne})}},[e.id,(ge=e.app)==null?void 0:ge.id,i,l.length,n]),E=()=>{r.forEach(K=>D(K))},G=b.useMemo(()=>!z||!x?null:(f[z]||[]).find(A=>A.name===x),[z,x,f]);return s.jsxs("div",{className:"tool-watch-panel",children:[s.jsxs("div",{className:"watch-header",children:[s.jsx(si,{size:14}),s.jsx("span",{children:"Tool Watch"}),s.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),s.jsxs("div",{className:"watch-actions",children:[s.jsx("button",{className:"watch-btn",onClick:E,title:"Refresh all",children:s.jsx(Yt,{size:12})}),s.jsx("button",{className:"watch-btn",onClick:$,title:"Add watch",children:s.jsx(Ke,{size:12})})]})]}),r.length===0?s.jsxs("div",{className:"watch-empty",children:[s.jsx(si,{size:20,style:{opacity:.3}}),s.jsx("span",{children:"No watch expressions"}),s.jsxs("button",{className:"add-watch-btn",onClick:$,children:[s.jsx(Ke,{size:12})," Add Tool Watch"]})]}):s.jsx("div",{className:"watch-list",children:r.map(K=>{let A=K.result,H=K.error;if(t!==null&&K.history&&K.history.length>0){const X=K.history.filter(ne=>ne.eventIndex<=t);if(X.length>0){const ne=X[X.length-1];A=ne.result,H=ne.error}else A=void 0,H=void 0}const{text:Z,isError:Y}=A?il(A):{text:"",isError:!1},ie=A?Wf(Z,K.transform):"",J=H||Y;return s.jsxs("div",{className:`watch-item ${J?"error":""}`,children:[s.jsxs("div",{className:"watch-item-header",children:[s.jsxs("span",{className:"watch-expr",children:[s.jsx("span",{className:"watch-server",children:K.serverName}),s.jsx("span",{className:"watch-tool",children:K.toolName}),Object.keys(K.args).length>0&&s.jsxs("span",{className:"watch-args",children:["(",Object.entries(K.args).map(([X,ne])=>`${X}=${JSON.stringify(ne)}`).join(", "),")"]}),t!==null&&s.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),s.jsxs("div",{className:"watch-item-actions",children:[s.jsx("button",{onClick:()=>M(K),title:"Edit watch",children:s.jsx(en,{size:10})}),s.jsx("button",{onClick:()=>D(K),title:"Refresh",children:K.isLoading?s.jsx(Yt,{size:10,className:"spin"}):s.jsx(Yt,{size:10})}),s.jsx("button",{onClick:()=>h(K.id),title:"Remove",children:s.jsx($e,{size:10})})]})]}),s.jsx("div",{className:"watch-result",children:K.isLoading?s.jsx("span",{className:"loading",children:"Loading..."}):H?s.jsx("span",{className:"error",children:H}):A?s.jsx("pre",{className:Y?"error-text":"",children:ie}):s.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},K.id)})}),c&&s.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:s.jsxs("div",{className:"watch-dialog",onClick:K=>K.stopPropagation(),children:[s.jsxs("div",{className:"dialog-header",children:[s.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),s.jsx("button",{onClick:()=>u(!1),children:s.jsx(sa,{size:14})})]}),s.jsxs("div",{className:"dialog-body",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"MCP Server"}),s.jsxs("select",{value:z,onChange:K=>{v(K.target.value),d||g(""),K.target.value&&P(K.target.value)},children:[s.jsx("option",{value:"",children:"Select server..."}),se.map(K=>s.jsx("option",{value:K.name,children:K.name},K.name))]})]}),s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"Tool"}),s.jsxs("select",{value:x,onChange:K=>g(K.target.value),disabled:!z||y.has(z),children:[s.jsx("option",{value:"",children:y.has(z)?"Loading tools...":"Select tool..."}),(f[z]||[]).map(K=>s.jsx("option",{value:K.name,children:K.name},K.name))]})]}),(G==null?void 0:G.description)&&s.jsx("div",{className:"tool-desc",children:G.description}),((ye=G==null?void 0:G.parameters)==null?void 0:ye.properties)&&Object.keys(G.parameters.properties).length>0&&s.jsxs("div",{className:"tool-args",children:[s.jsx("label",{children:"Arguments"}),Object.entries(G.parameters.properties).map(([K,A])=>{var H,Z;return s.jsxs("div",{className:"arg-row",children:[s.jsxs("span",{className:"arg-name",children:[K,((H=G.parameters.required)==null?void 0:H.includes(K))&&s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:A.type==="number"||A.type==="integer"?"number":"text",value:typeof T[K]=="object"?JSON.stringify(T[K]):T[K]??"",onChange:Y=>N(ie=>({...ie,[K]:Y.target.value})),placeholder:((Z=A.description)==null?void 0:Z.slice(0,40))||K})]},K)})]}),z&&x&&s.jsxs("div",{className:"test-section",children:[s.jsxs("div",{className:"test-header",children:[s.jsx("label",{children:"Test & Preview"}),s.jsxs("button",{className:"test-btn",onClick:w,disabled:U,children:[U?s.jsx(Yt,{size:12,className:"spin"}):s.jsx(Gn,{size:12}),U?"Running...":"Test Run"]})]}),I&&s.jsxs("div",{className:"test-result error",children:[s.jsx("span",{className:"test-label",children:"Error:"}),s.jsx("pre",{children:I})]}),S&&s.jsxs("div",{className:"test-result",children:[s.jsx("span",{className:"test-label",children:"Raw Result:"}),s.jsx("pre",{children:S})]})]}),s.jsxs("div",{className:"form-row transform-row",children:[s.jsx("label",{children:"Transform (optional)"}),s.jsx("input",{type:"text",value:_,onChange:K=>C(K.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),s.jsxs("div",{className:"transform-hints",children:[s.jsx("span",{className:"hint-title",children:"Path:"}),s.jsx("code",{onClick:()=>C(".items[0].name"),children:".items[0].name"}),s.jsx("code",{onClick:()=>C(".content[0].text"),children:".content[0].text"}),s.jsx("code",{onClick:()=>C(".result.data"),children:".result.data"}),s.jsx("span",{className:"hint-title",children:"JS:"}),s.jsx("code",{onClick:()=>C("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),s.jsx("code",{onClick:()=>C("js:data.items?.length"),children:"js:data.items?.length"})]})]}),S&&_&&s.jsxs("div",{className:"transform-preview",children:[s.jsx("span",{className:"test-label",children:"Transform Preview:"}),s.jsx("pre",{className:V!=null&&V.startsWith("[Transform error")?"error":"",children:V})]})]}),s.jsxs("div",{className:"dialog-footer",children:[s.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),s.jsx("button",{className:"add-btn",onClick:Q,disabled:!z||!x,children:d?"Save Changes":"Add Watch"})]})]})})]})}function AC(){var Ku,Gu;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:o,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:m}=ut(),[y,j]=b.useState(""),[z,v]=b.useState(null),[x,g]=b.useState(null),[T,N]=b.useState(null),[_,C]=b.useState(""),[k,R]=b.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[S,L]=b.useState(!0),[I,q]=b.useState(null),[U,B]=b.useState(!1),[se,P]=b.useState({}),[$,M]=b.useState(!1),[w,V]=b.useState("agent"),[Q,h]=b.useState(!0),[D,E]=b.useState(!0),[G,ge]=b.useState(!1),[ye,K]=b.useState(360),[A,H]=b.useState(!1),[Z,Y]=b.useState([60,80,100,80,1]),[ie,J]=b.useState(null),X=b.useRef(0),ne=b.useRef(0),[he,we]=b.useState([]),[Te,be]=b.useState(null),[F,ae]=b.useState(!1),pe=b.useRef(0),me=b.useCallback(async(O,ce)=>{var Fe;if(!e)return;p(O.id,{isLoading:!0,error:void 0});const oe=ce??i.length-1,xe=Date.now(),Ce=((Fe=e.app)==null?void 0:Fe.id)||`app_${e.id}`;try{const pt=await _e(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:O.serverName,tool_name:O.toolName,arguments:O.args,sandbox_mode:S,app_id:S?Ce:void 0})}),tr={eventIndex:oe,timestamp:xe,result:pt},rn=[...O.history||[],tr];p(O.id,{result:pt,isLoading:!1,lastRun:xe,history:rn})}catch(pt){const tr={eventIndex:oe,timestamp:xe,error:String(pt)},rn=[...O.history||[],tr];p(O.id,{error:String(pt),isLoading:!1,lastRun:xe,history:rn})}},[e==null?void 0:e.id,(Ku=e==null?void 0:e.app)==null?void 0:Ku.id,p,i.length,S]);b.useEffect(()=>{if(i.length>pe.current&&d.length>0){const O=i.length-1;d.forEach(ce=>{ce.isLoading||me(ce,O)})}pe.current=i.length},[i.length,d,me]),b.useEffect(()=>{c!==null&&(ee(c),u(null))},[c,u]);const[W,ee]=b.useState(null),fe=b.useRef(null),le=b.useRef(null);b.useEffect(()=>{if(!A)return;const O=oe=>{if(!le.current)return;const Ce=le.current.getBoundingClientRect().right-oe.clientX;K(Math.min(600,Math.max(200,Ce)))},ce=()=>{H(!1)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",ce),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",ce)}},[A]),b.useEffect(()=>{if(ie===null)return;const O=oe=>{const xe=oe.clientX-X.current,Ce=Math.max(40,ne.current+xe);Y(Fe=>{const pt=[...Fe];return pt[ie]=Ce,pt})},ce=()=>{J(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",ce),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",ce),document.body.style.cursor="",document.body.style.userSelect=""}},[ie]);const je=(O,ce)=>{ce.preventDefault(),X.current=ce.clientX,ne.current=Z[O],J(O)},Ze=Z.map((O,ce)=>ce===Z.length-1?`minmax(${O}px, 1fr)`:`${O}px`).join(" "),hn=b.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),De=b.useMemo(()=>i.filter((O,ce)=>{var oe,xe,Ce;if(T&&(O.timestamp<T[0]||O.timestamp>T[1])||k.size>0&&!k.has(O.event_type))return!1;if(Q&&O.event_type==="model_response"){const Fe=((xe=(oe=O.data)==null?void 0:oe.response_content)==null?void 0:xe.parts)||((Ce=O.data)==null?void 0:Ce.parts)||[],pt=Fe.some(rn=>rn.type==="function_call"),tr=Fe.some(rn=>rn.type==="text");if(!pt&&!tr)return!1}return!(_&&!JSON.stringify(O).toLowerCase().includes(_.toLowerCase()))}),[i,T,k,_,Q]),nn=b.useMemo(()=>{var xe;let O=0,ce=0;const oe=x!==null?x+1:i.length;for(let Ce=0;Ce<oe;Ce++){const Fe=i[Ce];Fe.event_type==="model_response"&&((xe=Fe.data)!=null&&xe.token_counts)&&(O+=Fe.data.token_counts.input||0,ce+=Fe.data.token_counts.output||0)}return{input:O,output:ce,total:O+ce}},[i,x]),Nn=x!==null?i[x]:null;b.useEffect(()=>{if(!e){we([]);return}(async()=>{ae(!0);try{const ce=await rc(e.id);we(ce)}catch(ce){console.error("Failed to load sessions:",ce),we([])}finally{ae(!1)}})()},[e]);const nt=b.useCallback(async O=>{if(!e){be(null);return}if(!O){a(),l(),m(null),be(null),g(null),N(null);return}try{const ce=await Eg(e.id,O);a(),l(),m(ce.id),be(O),g(null),N(null);for(const oe of ce.events)o(oe)}catch(ce){alert(`Failed to load session: ${ce.message||"Unknown error"}`)}},[e,a,l,m,o]);b.useEffect(()=>{if(!e||he.length===0||F)return;const ce=new URLSearchParams(window.location.search).get("session");if(ce)if(he.some(xe=>xe.id===ce)){nt(ce);const xe=window.location.pathname;window.history.replaceState({},"",xe)}else console.warn(`Session ${ce} not found in available sessions`)},[e,he,F,nt]),b.useEffect(()=>{n&&fe.current&&(fe.current.scrollTop=fe.current.scrollHeight)},[i.length,n]);const Ht=b.useCallback(()=>{if(!e||!y.trim()||n)return;z&&(z.close(),v(null)),f||(a(),l(),be(null)),r(!0),g(null),N(null);const O=Lg(e.id);v(O),O.onopen=()=>{O.send(JSON.stringify({message:y,agent_id:W||void 0,session_id:f||void 0,sandbox_mode:S}))},O.onmessage=ce=>{var xe;const oe=JSON.parse(ce.data);if(oe.event_type==="agent_start"&&((xe=oe.data)!=null&&xe.session_id)){const Ce=oe.data.session_id;oe.data.session_reused,m(Ce),Ce&&he.some(Fe=>Fe.id===Ce)&&be(Ce)}else if(oe.type==="session_started")m(oe.session_id),oe.session_id&&he.some(Ce=>Ce.id===oe.session_id)&&be(oe.session_id);else if(oe.type==="sandbox_starting")o({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(oe.type==="sandbox_started")o({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${oe.sandbox_id})`}});else if(oe.type==="sandbox_response")o({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:oe.data});else if(oe.event_type==="approval_required"||oe.type==="network_request"&&oe.event_type==="approval_required"){const Ce={id:oe.id,method:oe.method||"GET",url:oe.url,host:oe.host,source:oe.source||"agent",headers:oe.headers||{},timeout:oe.timeout||30};q(Ce),o({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{message:`⚠️ Network request to ${oe.host} requires approval`}})}else oe.type==="completed"?(r(!1),O.close()):oe.type==="error"?(r(!1),o({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:oe.error}})):o(oe)},O.onerror=()=>{r(!1),o({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},O.onclose=()=>{r(!1)}},[e,y,n,z,a,r,o,W,f,S]),qt=b.useCallback(()=>{z==null||z.close(),r(!1)},[z,r]),Yx=b.useCallback(async(O,ce,oe)=>{var rn,Qu,Yu,Xu,Zu,ed,td,nd,rd,sd,id,od,ad,ld,cd,ud,dd,pd,fd,md,hd,gd,xd,yd;if(!I||!e)return;const xe=((rn=e.app)==null?void 0:rn.id)||e.id,Ce=O?"allow_pattern":"allow_once",Fe=O||I.host,pt=ce||"exact",tr=oe?`/sandbox/${xe}/approval?project_id=${e.id}`:`/sandbox/${xe}/approval`;try{if(await _e(tr,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:I.id,action:Ce,pattern:Fe,pattern_type:pt,persist:oe||!1})}),oe&&Ce==="allow_pattern"){const fa=((Xu=(Yu=(Qu=e.app)==null?void 0:Qu.sandbox)==null?void 0:Yu.allowlist)==null?void 0:Xu.user)||[],cy={id:`pattern_${Date.now().toString(36)}`,pattern:Fe,pattern_type:pt,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(Zu=e.app)==null?void 0:Zu.sandbox,enabled:((td=(ed=e.app)==null?void 0:ed.sandbox)==null?void 0:td.enabled)??!1,allowlist:{auto:((sd=(rd=(nd=e.app)==null?void 0:nd.sandbox)==null?void 0:rd.allowlist)==null?void 0:sd.auto)||[],user:[...fa,cy]},unknown_action:((od=(id=e.app)==null?void 0:id.sandbox)==null?void 0:od.unknown_action)??"ask",approval_timeout:((ld=(ad=e.app)==null?void 0:ad.sandbox)==null?void 0:ld.approval_timeout)??30,agent_memory_limit_mb:((ud=(cd=e.app)==null?void 0:cd.sandbox)==null?void 0:ud.agent_memory_limit_mb)??512,agent_cpu_limit:((pd=(dd=e.app)==null?void 0:dd.sandbox)==null?void 0:pd.agent_cpu_limit)??1,mcp_memory_limit_mb:((md=(fd=e.app)==null?void 0:fd.sandbox)==null?void 0:md.mcp_memory_limit_mb)??256,mcp_cpu_limit:((gd=(hd=e.app)==null?void 0:hd.sandbox)==null?void 0:gd.mcp_cpu_limit)??.5,run_timeout:((yd=(xd=e.app)==null?void 0:xd.sandbox)==null?void 0:yd.run_timeout)??300}}})}o({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{message:`✅ Approved: ${Fe}`}})}catch(fa){console.error("Failed to approve:",fa)}q(null)},[I,e,o,t]),Xx=b.useCallback(async()=>{var ce;if(!I||!e)return;const O=((ce=e.app)==null?void 0:ce.id)||e.id;try{await _e(`/sandbox/${O}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:I.id,action:"deny"})}),o({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{message:`❌ Denied: ${I.host}`}})}catch(oe){console.error("Failed to deny:",oe)}q(null)},[I,e,o]),da=b.useCallback(async()=>{var ce;if(!e)return;const O=((ce=e.app)==null?void 0:ce.id)||`app_${e.id}`;M(!0);try{const[oe,xe]=await Promise.all([_e(`/sandbox/${O}/logs?container=agent&tail=1000`).catch(()=>null),_e(`/sandbox/${O}/logs?container=gateway&tail=1000`).catch(()=>null)]);P({agent:(oe==null?void 0:oe.logs)||(oe==null?void 0:oe.error)||"No logs available",gateway:(xe==null?void 0:xe.logs)||(xe==null?void 0:xe.error)||"No logs available"})}catch(oe){console.error("Failed to fetch logs:",oe),P({agent:`Error fetching logs: ${oe}`,gateway:`Error fetching logs: ${oe}`})}finally{M(!1)}},[e]),Zx=b.useCallback(()=>{B(!0),da()},[da]);b.useEffect(()=>{const O=ce=>{if((ce.metaKey||ce.ctrlKey)&&ce.key==="Enter"){ce.preventDefault(),Ht();return}if(ce.key==="ArrowDown"||ce.key==="ArrowUp"){if(ce.target instanceof HTMLInputElement||ce.target instanceof HTMLTextAreaElement||(ce.preventDefault(),De.length===0))return;if(ce.key==="ArrowDown")if(x===null){const oe=i.indexOf(De[0]);g(oe)}else{const oe=De.findIndex(xe=>i.indexOf(xe)===x);if(oe<De.length-1){const xe=i.indexOf(De[oe+1]);g(xe)}}else if(ce.key==="ArrowUp")if(x===null){const oe=i.indexOf(De[De.length-1]);g(oe)}else{const oe=De.findIndex(xe=>i.indexOf(xe)===x);if(oe>0){const xe=i.indexOf(De[oe-1]);g(xe)}}}};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[Ht,De,x,i]);const ey=b.useCallback(()=>{var Ce;if(i.length===0)return;const O={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:W||((Ce=e==null?void 0:e.app)==null?void 0:Ce.root_agent_id),events:i},ce=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),oe=URL.createObjectURL(ce),xe=document.createElement("a");xe.href=oe,xe.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(xe),xe.click(),document.body.removeChild(xe),URL.revokeObjectURL(oe)},[i,e,W]),ty=b.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const O=await Ng(f);if(O.success){alert(O.message||"Session saved to memory successfully");try{const ce=await rc(e.id);we(ce)}catch{}}else alert(`Failed to save to memory: ${O.error||"Unknown error"}`)}catch(O){alert(`Error saving to memory: ${O.message||"Unknown error"}`)}},[f,e]),[ny,vi]=b.useState(!1),[ry,sy]=b.useState([]),[os,Hu]=b.useState(""),[pa,iy]=b.useState("Test Case from Session"),[qu,Ju]=b.useState(!1),oy=b.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const O=await _e(`/projects/${e.id}/eval-sets`);if(sy(O.eval_sets||[]),!O.eval_sets||O.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}Hu(O.eval_sets[0].id),vi(!0)}catch(O){alert(`Error loading eval sets: ${O.message||"Unknown error"}`)}},[f,e]),ay=b.useCallback(async()=>{if(!f||!e||!os){alert("Please select an evaluation set");return}Ju(!0);try{const O=await _e(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:os,case_name:pa})});vi(!1),alert(`Test case "${O.eval_case.name}" created successfully!

Token count: ${O.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(O){alert(`Error creating test case: ${O.message||"Unknown error"}`)}finally{Ju(!1)}},[f,e,os,pa]),ly=b.useCallback(()=>{const O=document.createElement("input");O.type="file",O.accept=".json",O.onchange=async ce=>{var xe;const oe=(xe=ce.target.files)==null?void 0:xe[0];if(oe)try{const Ce=await oe.text(),Fe=JSON.parse(Ce);if(!Fe.events||!Array.isArray(Fe.events)){alert("Invalid run file: missing events array");return}a(),l(),g(null),N(null),Fe.events.forEach(pt=>{o(pt)})}catch(Ce){alert(`Failed to load run file: ${Ce}`)}},O.click()},[a,l,o]);return b.useEffect(()=>{if(x!==null){const O=document.querySelector(".event-row.selected");O==null||O.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?s.jsxs("div",{className:`run-panel ${A?"resizing":""}`,children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"input-area",children:[s.jsxs("select",{className:"agent-selector",value:W||"",onChange:O=>ee(O.target.value||null),disabled:n,title:"Select which agent to run",children:[s.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Gu=e.agents.find(O=>O.id===e.app.root_agent_id))==null?void 0:Gu.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(O=>O.id!==e.app.root_agent_id).map(O=>s.jsxs("option",{value:O.id,children:[O.name," (",O.type.replace("Agent",""),")"]},O.id))]}),s.jsxs("select",{className:"agent-selector",value:Te||"",onChange:O=>nt(O.target.value||null),disabled:n||F,style:{minWidth:180},title:"Load a saved session",children:[s.jsx("option",{value:"",children:F?"Loading...":"Load Session..."}),he.map(O=>{const ce=new Date(O.started_at*1e3),oe=O.duration?`${O.duration.toFixed(1)}s`:"?";return s.jsxs("option",{value:O.id,children:[ce.toLocaleString()," (",O.event_count," events, ",oe,")"]},O.id)})]}),s.jsx("input",{type:"text",placeholder:"Enter your query...",value:y,onChange:O=>j(O.target.value),onKeyDown:O=>O.key==="Enter"&&!O.shiftKey&&Ht(),disabled:n}),n?s.jsxs("button",{className:"stop",onClick:qt,children:[s.jsx(S0,{size:14}),"Stop"]}):s.jsxs("button",{onClick:Ht,disabled:!y.trim(),children:[s.jsx(Gn,{size:14}),"Run"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:S?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[s.jsx("input",{type:"checkbox",checked:S,onChange:O=>L(O.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),S&&s.jsx("button",{onClick:Zx,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),s.jsxs("div",{className:"toolbar",children:[s.jsxs("div",{className:"toolbar-section",children:[s.jsx(qg,{size:12,style:{color:"#71717a"}}),s.jsx("input",{type:"text",placeholder:"Filter events...",value:_,onChange:O=>C(O.target.value)})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(O=>s.jsx("button",{className:`filter-chip ${k.has(O)?"active":""}`,onClick:()=>{const ce=new Set(k);ce.has(O)?ce.delete(O):ce.add(O),R(ce)},children:O.replace("_"," ")},O)),s.jsx("button",{className:`filter-chip ${k.has("callback_start")&&k.has("callback_end")?"active":""}`,onClick:()=>{const O=new Set(k);O.has("callback_start")&&O.has("callback_end")?(O.delete("callback_start"),O.delete("callback_end")):(O.add("callback_start"),O.add("callback_end")),R(O)},title:"Show/hide callback events",children:"callback"}),s.jsx("button",{className:`filter-chip ${Q?"active":""}`,onClick:()=>h(!Q),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[s.jsxs("button",{className:`toolbar-btn ${D?"active":""}`,onClick:()=>E(!D),children:[s.jsx(kn,{size:12}),"State"]}),s.jsxs("button",{className:`toolbar-btn ${G?"active":""}`,onClick:()=>ge(!G),children:[s.jsx(Ua,{size:12}),"Tools"]})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[De.length," / ",i.length," events"]}),T&&s.jsx("button",{className:"toolbar-btn",onClick:()=>N(null),children:"Clear Range"})]})]}),s.jsxs("div",{className:"main-content",ref:le,children:[s.jsxs("div",{className:"event-list-container",children:[s.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:Ze},children:[s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"#"}),s.jsx("div",{className:`column-resize-handle ${ie===0?"active":""}`,onMouseDown:O=>je(0,O)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Time"}),s.jsx("div",{className:`column-resize-handle ${ie===1?"active":""}`,onMouseDown:O=>je(1,O)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Agent"}),s.jsx("div",{className:`column-resize-handle ${ie===2?"active":""}`,onMouseDown:O=>je(2,O)})]}),s.jsxs("div",{className:"header-cell",children:[s.jsx("span",{children:"Type"}),s.jsx("div",{className:`column-resize-handle ${ie===3?"active":""}`,onMouseDown:O=>je(3,O)})]}),s.jsx("div",{className:"header-cell",children:s.jsx("span",{children:"Info"})})]}),s.jsx("div",{className:"event-list",ref:fe,children:De.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Hg,{size:24}),s.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):De.map((O,ce)=>{const oe=i.indexOf(O),xe=Vf[O.event_type]||Vf.error,Ce=CC[O.event_type]||Po;return s.jsxs("div",{className:`event-row ${x===oe?"selected":""}`,style:{background:xe.bg,gridTemplateColumns:Ze},onClick:()=>g(oe),onDoubleClick:()=>{E(!1),ge(!1)},children:[s.jsx("div",{className:"index",children:oe}),s.jsx("div",{className:"time",style:{color:xe.fg},children:EC(O.timestamp,hn.min)}),s.jsx("div",{className:"agent",style:{color:xe.fg},children:O.agent_name}),s.jsxs("div",{className:"type",style:{color:xe.fg},children:[s.jsx(Ce,{size:10}),O.event_type.split("_")[0]]}),s.jsx("div",{className:"summary",children:NC(O)})]},oe)})})]}),s.jsxs("div",{className:"side-panel-container",style:{width:ye},children:[s.jsx("div",{className:`resize-handle ${A?"active":""}`,onMouseDown:()=>H(!0)}),s.jsxs("div",{className:"side-panel",style:{width:ye-4},children:[s.jsxs("div",{className:"side-panel-tabs",children:[s.jsxs("button",{className:`side-panel-tab ${!D&&!G?"active":""}`,onClick:()=>{E(!1),ge(!1)},children:[s.jsx(si,{size:12,style:{marginRight:4}}),"Details"]}),s.jsxs("button",{className:`side-panel-tab ${D?"active":""}`,onClick:()=>{E(!0),ge(!1)},children:[s.jsx(kn,{size:12,style:{marginRight:4}}),"State"]}),s.jsxs("button",{className:`side-panel-tab ${G?"active":""}`,onClick:()=>{ge(!0),E(!1)},children:[s.jsx(Ua,{size:12,style:{marginRight:4}}),"Tools"]})]}),s.jsx("div",{className:"side-panel-content",children:G?s.jsx(LC,{project:e,selectedEventIndex:x,sandboxMode:S}):D?s.jsx(PC,{events:i,selectedEventIndex:x,project:e}):Nn?s.jsx(zC,{event:Nn}):s.jsxs("div",{className:"empty-state",children:[s.jsx(si,{size:24}),s.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),s.jsxs("div",{className:"stats-bar",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Events:"}),s.jsx("span",{className:"stat-value",children:i.length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Tool Calls:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="tool_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Model Calls:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="model_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Callbacks:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="callback_start").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"State Changes:"}),s.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="state_change").length})]}),i.length>0&&s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Duration:"}),s.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),nn.total>0&&s.jsx("div",{className:"stat-item token-stats",children:s.jsxs("span",{className:"stat-value token-value",children:[s.jsxs("span",{className:"token-in",title:"Input tokens",children:[nn.input.toLocaleString(),"↑"]}),s.jsxs("span",{className:"token-out",title:"Output tokens",children:[nn.output.toLocaleString(),"↓"]}),s.jsx("span",{className:"token-total",title:"Total tokens",children:nn.total.toLocaleString()})]})}),s.jsx("div",{className:"stats-bar-spacer"}),s.jsxs("button",{className:"stats-bar-btn",onClick:ly,title:"Load a saved run",children:[s.jsx(ra,{size:12}),"Load"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:ey,disabled:i.length===0,title:"Save current run to file",children:[s.jsx(hi,{size:12}),"Save"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:ty,disabled:!f||i.length===0,title:"Save current session to memory",children:[s.jsx(kn,{size:12}),"Save to Memory"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:oy,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[s.jsx(ac,{size:12}),"Create Test Case"]})]}),ny&&s.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>vi(!1),children:s.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:O=>O.stopPropagation(),children:[s.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[s.jsx(ac,{size:18}),"Create Test Case from Session"]}),s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),s.jsx("input",{type:"text",value:pa,onChange:O=>iy(O.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),s.jsx("select",{value:os,onChange:O=>Hu(O.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:ry.map(O=>s.jsx("option",{value:O.id,children:O.name},O.id))})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),s.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>vi(!1),children:"Cancel"}),s.jsx("button",{className:"btn btn-primary",onClick:ay,disabled:qu||!os,children:qu?"Creating...":"Create Test Case"})]})]})}),I&&s.jsx(SC,{request:I,timeout:I.timeout||30,onApprove:Yx,onDeny:Xx,onClose:()=>q(null)}),U&&s.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>B(!1),children:s.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"80%",maxWidth:"900px",height:"70%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:O=>O.stopPropagation(),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[s.jsx(Ua,{size:16}),s.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[s.jsxs("button",{onClick:da,disabled:$,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:$?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[s.jsx(Yt,{size:12,className:$?"animate-spin":""}),"Refresh"]}),s.jsx("button",{onClick:()=>B(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:s.jsx(sa,{size:16})})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[s.jsx("button",{onClick:()=>V("agent"),style:{padding:"8px 16px",background:w==="agent"?"#18181b":"transparent",border:"none",borderBottom:w==="agent"?"2px solid #22d3ee":"2px solid transparent",color:w==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),s.jsx("button",{onClick:()=>V("gateway"),style:{padding:"8px 16px",background:w==="gateway"?"#18181b":"transparent",border:"none",borderBottom:w==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:w==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),s.jsx("div",{style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:$?s.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):se[w]||"No logs available"})]})})]}):s.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const RC=()=>Math.random().toString(36).substring(2,10),MC=()=>({id:RC(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function IC(){const{project:e,setProject:t}=ut(),[n,r]=b.useState(null),[i,o]=b.useState(null),[a,l]=b.useState(""),[c,u]=b.useState([]),[d,p]=b.useState(!1),[f,m]=b.useState(!1),[y,j]=b.useState(""),[z,v]=b.useState(!1),[x,g]=b.useState(null),[T,N]=b.useState(null),_=b.useRef(null),C=(e==null?void 0:e.skillsets)||[],k=C.find(M=>M.id===n);b.useEffect(()=>{Bg().then(M=>N(M.available)).catch(()=>N(!1))},[]),b.useEffect(()=>{C.length>0&&!n&&r(C[0].id)},[C,n]),b.useEffect(()=>{!e||!n||R()},[e==null?void 0:e.id,n]);const R=b.useCallback(async()=>{if(!(!e||!n))try{const M=await Ig(e.id,n);o(M),L(n,{entry_count:M.entry_count})}catch(M){console.error("Failed to load stats:",M)}},[e==null?void 0:e.id,n]),S=M=>{e&&t({...e,...M})},L=(M,w)=>{e&&t({...e,skillsets:e.skillsets.map(V=>V.id===M?{...V,...w}:V)})},I=()=>{if(!e)return;const M=MC();S({skillsets:[...C,M]}),r(M.id)},q=M=>{e&&confirm("Delete this SkillSet and all its data?")&&(S({skillsets:C.filter(w=>w.id!==M)}),n===M&&r(C.length>1?C[0].id:null),o(null),u([]))},U=async()=>{if(!(!e||!n||!a.trim())){p(!0),g(null);try{const M=await Dg(e.id,n,a.trim(),10,0);u(M.results)}catch(M){g("Search failed"),console.error(M)}finally{p(!1)}}},B=async()=>{if(!(!e||!n||!y.trim())){v(!0),g(null);try{const M=await Og(e.id,n,y.trim());j(""),await R(),alert(`Added ${M.chunks_added} chunks from ${M.source_name}`)}catch(M){g(M.message||"Failed to fetch URL")}finally{v(!1)}}},se=async M=>{var V;const w=(V=M.target.files)==null?void 0:V[0];if(!(!w||!e||!n)){g(null);try{const Q=await $g(e.id,n,w);await R(),alert(`Added ${Q.chunks_added} chunks from ${Q.source_name}`)}catch(Q){g(Q.message||"Upload failed")}_.current&&(_.current.value="")}},P=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Fg(e.id,n),await R(),u([])}catch{g("Clear failed")}},$=M=>{const w=Math.round(M*100),V=160,Q=70,h=20+(1-M)*15,D=.15+M*.25;return`linear-gradient(90deg, hsla(${V}, ${Q}%, ${h}%, ${D}) 0%, transparent ${w}%)`};return e?s.jsxs("div",{className:"skillsets-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"skillset-list",children:[s.jsxs("div",{className:"skillset-list-header",children:[s.jsx("h3",{children:"SkillSets"}),s.jsx("button",{className:"btn-icon",onClick:I,title:"Add SkillSet",children:s.jsx(Ke,{size:16})})]}),C.length===0?s.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[s.jsx(kn,{size:32}),s.jsx("span",{children:"No SkillSets"}),s.jsxs("button",{className:"btn-primary",onClick:I,children:[s.jsx(Ke,{size:14})," Create SkillSet"]})]}):C.map(M=>s.jsxs("div",{className:`skillset-item ${n===M.id?"selected":""}`,onClick:()=>r(M.id),children:[s.jsx(kn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),s.jsxs("div",{className:"skillset-item-info",children:[s.jsx("div",{className:"skillset-item-name",children:M.name}),s.jsxs("div",{className:"skillset-item-count",children:[M.entry_count||0," entries"]})]}),s.jsx("button",{className:"skillset-item-delete",onClick:w=>{w.stopPropagation(),q(M.id)},children:s.jsx($e,{size:14})})]},M.id))]}),k?s.jsxs("div",{className:"skillset-detail",children:[s.jsxs("div",{className:"skillset-header",children:[s.jsxs("div",{className:"skillset-header-info",children:[s.jsx("input",{className:"skillset-name-input",value:k.name,onChange:M=>L(k.id,{name:M.target.value}),placeholder:"SkillSet Name"}),s.jsx("textarea",{className:"skillset-desc-input",value:k.description,onChange:M=>L(k.id,{description:M.target.value}),placeholder:"Description (optional)",rows:1}),s.jsxs("div",{className:"skillset-model",children:[s.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),s.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:k.embedding_model||"text-embedding-004",onChange:M=>L(k.id,{embedding_model:M.target.value}),children:[s.jsxs("optgroup",{label:"Google Gemini",children:[s.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),s.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),s.jsxs("optgroup",{label:"OpenAI",children:[s.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),s.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),s.jsxs("optgroup",{label:"Cohere",children:[s.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),s.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),s.jsxs("div",{className:"skillset-stats",children:[s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),T===!1&&s.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),s.jsx("button",{className:"btn-icon",onClick:R,title:"Refresh",children:s.jsx(Yt,{size:16})})]}),x&&s.jsxs("div",{className:"error-banner",children:[x,s.jsx("button",{onClick:()=>g(null),children:s.jsx(sa,{size:14})})]}),s.jsxs("div",{className:"search-section",children:[s.jsx("div",{className:"search-input-wrapper",children:s.jsx("input",{className:"search-input",value:a,onChange:M=>l(M.target.value),onKeyDown:M=>M.key==="Enter"&&U(),placeholder:"Search this SkillSet..."})}),s.jsxs("button",{className:"btn-primary",onClick:U,disabled:d||!a.trim(),children:[s.jsx(qg,{size:14}),d?"Searching...":"Search"]})]}),s.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&s.jsx("div",{className:"empty-state",children:s.jsx("span",{children:"No results found"})}),c.map(M=>s.jsxs("div",{className:"search-result",style:{background:$(M.score)},children:[s.jsxs("span",{className:"search-result-score",children:[(M.score*100).toFixed(0),"%"]}),s.jsx("div",{className:"search-result-text",children:M.text}),s.jsx("div",{className:"search-result-source",children:M.source_name})]},M.id))]}),s.jsxs("div",{className:"add-sources-section",children:[s.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?s.jsx(Mt,{size:16}):s.jsx(It,{size:16}),s.jsx("h4",{children:"Add Sources"})]}),f&&s.jsxs("div",{className:"add-sources-content",children:[s.jsxs("div",{className:"source-row",children:[s.jsx(ku,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{className:"source-input",value:y,onChange:M=>j(M.target.value),onKeyDown:M=>M.key==="Enter"&&B(),placeholder:"Enter URL (e.g., llms.txt file)"}),s.jsxs("button",{className:"btn-primary",onClick:B,disabled:z||!y.trim(),children:[s.jsx(y0,{size:14}),z?"Loading...":"Add"]})]}),s.jsxs("div",{className:"source-row",children:[s.jsx(h0,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{ref:_,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:se}),s.jsxs("button",{className:"btn-primary",onClick:()=>{var M;return(M=_.current)==null?void 0:M.click()},children:[s.jsx(ra,{size:14}),"Upload File"]}),s.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&s.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:s.jsxs("button",{className:"clear-button",onClick:P,children:[s.jsx($e,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):C.length>0?s.jsx("div",{className:"skillset-detail",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(kn,{size:48}),s.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const un={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},ai=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=un[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const o=n??3.5;return{value:t.toFixed(1),comparison:`${o.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const o=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(o*100)}% min`}}},OC={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function Qx(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function $C(){const{project:e}=ut(),[t,n]=b.useState([]),[r,i]=b.useState(null),[o,a]=b.useState(null),[l,c]=b.useState(new Set),[u,d]=b.useState(new Map),[p,f]=b.useState(new Map),[m,y]=b.useState(new Set),[j,z]=b.useState(!1),[v,x]=b.useState(null),[g,T]=b.useState([]),[N,_]=b.useState(null),C=async()=>{if(e)try{const A=await qe.get(`/projects/${e.id}/eval-history`);T(A.runs||[])}catch(A){console.warn("Failed to load eval history:",A)}},k=async(A,H=!0)=>{if(e)try{const Y=(await qe.get(`/projects/${e.id}/eval-history/${A}`)).run;if(_(Y),Y!=null&&Y.case_results){const ie=new Map;for(const J of Y.case_results)ie.set(J.eval_case_id,J);d(ie)}if((Y==null?void 0:Y.eval_set_id)==="batch")c(new Set(t.map(ie=>ie.id))),i(null);else if(Y!=null&&Y.eval_set_id){const ie=new Map;ie.set(Y.eval_set_id,Y),f(ie),i(Y.eval_set_id),c(J=>new Set([...J,Y.eval_set_id]))}a(null),H&&window.history.pushState({run:A},"",`?run=${A}`)}catch(Z){console.warn("Failed to load history run:",Z)}},R=(A,H=!0)=>{i(A),a(null),_(null),H&&A?window.history.pushState({set:A},"",`?set=${A}`):H&&window.history.pushState({},"",window.location.pathname)},S=(A,H,Z=!0)=>{i(A),a(H),_(null),Z&&H?window.history.pushState({set:A,case:H},"",`?set=${A}&case=${H}`):Z&&A&&window.history.pushState({set:A},"",`?set=${A}`)},L=()=>{_(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},I=async A=>{if(e)try{await qe.delete(`/projects/${e.id}/eval-history/${A}`),T(H=>H.filter(Z=>Z.id!==A)),(N==null?void 0:N.id)===A&&_(null)}catch(H){console.warn("Failed to delete history run:",H)}};b.useEffect(()=>{e!=null&&e.id&&(q(),C())},[e==null?void 0:e.id]),b.useEffect(()=>{const A=()=>{y(new Set(t.map(Z=>Z.id)))},H=()=>{y(new Set),C()};return window.addEventListener("eval-tests-started",A),window.addEventListener("eval-tests-completed",H),()=>{window.removeEventListener("eval-tests-started",A),window.removeEventListener("eval-tests-completed",H)}},[t]),b.useEffect(()=>{if(!(e!=null&&e.id)||j)return;const A=()=>{const Z=new URLSearchParams(window.location.search),Y=Z.get("set"),ie=Z.get("case"),J=Z.get("run");if(J){k(J,!1);return}if(Y)i(Y),a(ie),_(null),c(X=>new Set([...X,Y]));else{if(!r&&!o&&!N)return;i(null),a(null),_(null)}};A();const H=()=>{A()};return window.addEventListener("popstate",H),()=>window.removeEventListener("popstate",H)},[e==null?void 0:e.id,j,t.length]);const q=async()=>{var A,H;if(e!=null&&e.id){z(!0),x(null);try{const Z=await qe.get(`/projects/${e.id}/eval-sets`);if(n(Z.eval_sets||[]),((A=Z.eval_sets)==null?void 0:A.length)>0){const Y=new URLSearchParams(window.location.search),ie=Y.get("set"),J=Y.get("case"),X=ie||(J?(H=Z.eval_sets.find(ne=>ne.eval_cases.some(he=>he.id===J)))==null?void 0:H.id:null)||Z.eval_sets[0].id;c(new Set([X]))}}catch(Z){x(Z.message||"Failed to load eval sets")}finally{z(!1)}}},U=t.find(A=>A.id===r),B=U==null?void 0:U.eval_cases.find(A=>A.id===o),se=async()=>{if(e!=null&&e.id)try{const A=await qe.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:OC});n(H=>[...H,A.eval_set]),i(A.eval_set.id),c(H=>new Set([...H,A.eval_set.id]))}catch(A){x(A.message||"Failed to create eval set")}},P=async A=>{if(e!=null&&e.id)try{const H=await qe.post(`/projects/${e.id}/eval-sets/${A}/cases`,{name:"New Test Case",description:"",invocations:[{id:Qx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(Z=>Z.map(Y=>Y.id===A?{...Y,eval_cases:[...Y.eval_cases,H.eval_case]}:Y)),i(A),a(H.eval_case.id)}catch(H){x(H.message||"Failed to create eval case")}},$=async(A,H,Z)=>{if(e!=null&&e.id)try{const Y=await qe.put(`/projects/${e.id}/eval-sets/${A}/cases/${H}`,Z);n(ie=>ie.map(J=>J.id===A?{...J,eval_cases:J.eval_cases.map(X=>X.id===H?Y.eval_case:X)}:J))}catch(Y){x(Y.message||"Failed to update eval case")}},M=async(A,H)=>{if(e!=null&&e.id)try{await qe.delete(`/projects/${e.id}/eval-sets/${A}/cases/${H}`),n(Z=>Z.map(Y=>Y.id===A?{...Y,eval_cases:Y.eval_cases.filter(ie=>ie.id!==H)}:Y)),o===H&&a(null)}catch(Z){x(Z.message||"Failed to delete eval case")}},w=async A=>{if(e!=null&&e.id)try{await qe.delete(`/projects/${e.id}/eval-sets/${A}`),n(H=>H.filter(Z=>Z.id!==A)),r===A&&(i(null),a(null))}catch(H){x(H.message||"Failed to delete eval set")}},V=async A=>{if(e!=null&&e.id)try{const H=await qe.get(`/projects/${e.id}/eval-sets/${A}/export`),Z=new Blob([JSON.stringify(H,null,2)],{type:"application/json"}),Y=URL.createObjectURL(Z),ie=document.createElement("a");ie.href=Y;const J=t.find(X=>X.id===A);ie.download=`${(J==null?void 0:J.name)||"eval-set"}.json`,document.body.appendChild(ie),ie.click(),document.body.removeChild(ie),URL.revokeObjectURL(Y)}catch(H){x(H.message||"Failed to export eval set")}},Q=async A=>{if(e!=null&&e.id)try{const H=await A.text(),Z=JSON.parse(H),Y=await qe.post(`/projects/${e.id}/eval-sets/import`,Z);n(ie=>[...ie,Y.eval_set]),i(Y.eval_set.id),c(ie=>new Set([...ie,Y.eval_set.id]))}catch(H){x(H.message||"Failed to import eval set")}},h=b.useRef(null),D=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const A=await Promise.all(t.map(async ie=>{try{return await qe.get(`/projects/${e.id}/eval-sets/${ie.id}/export`)}catch{return ie}})),H=new Blob([JSON.stringify(A,null,2)],{type:"application/json"}),Z=URL.createObjectURL(H),Y=document.createElement("a");Y.href=Z,Y.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(Z)}catch(A){x(A.message||"Failed to export all eval sets")}},E=async(A,H)=>{if(e!=null&&e.id){y(Z=>new Set([...Z,H]));try{const Z=await qe.post(`/projects/${e.id}/eval-sets/${A}/cases/${H}/run`,{});d(Y=>new Map(Y).set(H,Z.result))}catch(Z){x(Z.message||"Failed to run eval case")}finally{y(Z=>{const Y=new Set(Z);return Y.delete(H),Y})}}},G=async A=>{if(!(e!=null&&e.id))return;const H=t.find(Y=>Y.id===A);if(!H)return;const Z=H.eval_cases.map(Y=>Y.id);y(Y=>new Set([...Y,A,...Z]));try{const Y=await qe.post(`/projects/${e.id}/eval-sets/${A}/run`,{});f(ie=>new Map(ie).set(A,Y.result));for(const ie of Y.result.case_results)d(J=>new Map(J).set(ie.eval_case_id,ie));try{await qe.post(`/projects/${e.id}/eval-history`,Y.result),C()}catch(ie){console.warn("Failed to save eval run to history:",ie)}}catch(Y){x(Y.message||"Failed to run eval set")}finally{y(Y=>{const ie=new Set(Y);return ie.delete(A),Z.forEach(J=>ie.delete(J)),ie})}},ge=A=>{c(H=>{const Z=new Set(H);return Z.has(A)?Z.delete(A):Z.add(A),Z})},ye=A=>{let H=A.eval_cases.length,Z=0,Y=0,ie=0;for(const J of A.eval_cases){const X=u.get(J.id);X?X.passed?Z++:Y++:ie++}return{total:H,passed:Z,failed:Y,pending:ie}},K=A=>A==null?"-":`${Math.round(A*100)}%`;return e?s.jsxs("div",{className:"eval-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"eval-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsx("h3",{children:"Evaluation Tests"}),s.jsxs("div",{className:"header-actions",children:[s.jsx("input",{type:"file",ref:h,accept:".json",style:{display:"none"},onChange:A=>{var Z;const H=(Z=A.target.files)==null?void 0:Z[0];H&&(Q(H),A.target.value="")}}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var A;return(A=h.current)==null?void 0:A.click()},title:"Import eval set from JSON",children:s.jsx(ra,{size:14})}),t.length>0&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:D,title:"Download all eval sets as JSON",children:s.jsx(hi,{size:14})}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:q,title:"Refresh",children:s.jsx(Yt,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:se,title:"New eval set",children:[s.jsx(Ke,{size:14}),"Set"]})]})]}),s.jsxs("div",{className:"eval-tree",children:[j&&s.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),v&&s.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:v}),!j&&t.length===0&&s.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[s.jsx(Su,{size:32}),s.jsxs("p",{children:["No evaluation sets yet.",s.jsx("br",{}),"Create one to get started."]})]}),t.map(A=>{const H=l.has(A.id),Z=ye(A),Y=m.has(A.id);return s.jsxs("div",{className:"tree-item",children:[s.jsxs("div",{className:`tree-set ${r===A.id&&!o?"selected":""}`,onClick:()=>R(A.id),children:[s.jsx("button",{className:"expand-btn",onClick:ie=>{ie.stopPropagation(),ge(A.id)},children:A.eval_cases.length>0?H?s.jsx(Mt,{size:14}):s.jsx(It,{size:14}):s.jsx("span",{style:{width:14}})}),s.jsx(Wg,{size:14,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{className:"set-name",children:A.name}),s.jsx("button",{className:"add-case-btn",onClick:ie=>{ie.stopPropagation(),P(A.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:s.jsx(Ke,{size:12})}),Z.total>0&&s.jsxs("span",{className:"set-stats",children:[Z.passed>0&&s.jsx("span",{className:"stat-passed",children:Z.passed}),Z.failed>0&&s.jsx("span",{className:"stat-failed",children:Z.failed}),Z.pending>0&&s.jsx("span",{className:"stat-pending",children:Z.pending})]}),s.jsx("button",{className:"run-btn",onClick:ie=>{ie.stopPropagation(),G(A.id)},title:"Run all tests in this set",disabled:Y,children:Y?s.jsx(ri,{size:12,className:"spinning"}):s.jsx(Gn,{size:12})})]}),H&&s.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:A.eval_cases.map(ie=>{var ne;const J=u.get(ie.id),X=m.has(ie.id);return s.jsxs("div",{className:`tree-case ${o===ie.id?"selected":""}`,onClick:()=>S(A.id,ie.id),children:[X?s.jsx(ri,{size:14,className:"spinning",style:{color:"var(--warning)"}}):J?J.passed?s.jsx(xr,{size:14,style:{color:"var(--success)"}}):s.jsx(Zr,{size:14,style:{color:"var(--error)"}}):s.jsx(To,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{className:"case-name",children:ie.name}),J&&J.metric_results.length>0&&s.jsx("span",{style:{fontSize:11,color:J.passed?"var(--success)":"var(--error)"},children:K((ne=J.metric_results[0])==null?void 0:ne.score)}),s.jsx("button",{className:"run-btn",onClick:he=>{he.stopPropagation(),E(A.id,ie.id)},disabled:X,children:s.jsx(Gn,{size:12})})]},ie.id)})})]},A.id)})]}),s.jsxs("div",{className:"history-section",children:[s.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:s.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",g.length,")"]})}),s.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:g.length===0?s.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...g].sort((A,H)=>(H.started_at||0)-(A.started_at||0)).map(A=>{const H=A.passed_cases===A.total_cases;return s.jsx("div",{className:`history-item ${(N==null?void 0:N.id)===A.id?"selected":""}`,onClick:()=>k(A.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(N==null?void 0:N.id)===A.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[H?s.jsx(xr,{size:14,style:{color:"var(--success)",flexShrink:0}}):s.jsx(Zr,{size:14,style:{color:"var(--error)",flexShrink:0}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:500},children:A.eval_set_name||"Unnamed"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(A.started_at*1e3).toLocaleString()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{color:H?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[A.passed_cases,"/",A.total_cases]}),s.jsx("button",{className:"btn btn-icon",onClick:Z=>{Z.stopPropagation(),I(A.id)},title:"Delete run",style:{padding:2},children:s.jsx($e,{size:12})})]})]})},A.id)})})]})]}),s.jsx("div",{className:"eval-editor",children:N?s.jsx(FC,{run:N,onClose:L}):B?s.jsx(BC,{evalCase:B,evalSetId:r,projectId:e.id,result:u.get(B.id),isRunning:m.has(B.id),onUpdate:A=>$(r,B.id,A),onDelete:()=>M(r,B.id),onRun:()=>E(r,B.id),onClearResult:()=>d(A=>{const H=new Map(A);return H.delete(B.id),H})}):U?s.jsx(UC,{evalSet:U,projectId:e.id,result:p.get(U.id),isRunning:m.has(U.id),caseResults:u,onUpdate:async A=>{try{const H=await qe.put(`/projects/${e.id}/eval-sets/${U.id}`,A);n(Z=>Z.map(Y=>Y.id===U.id?H.eval_set:Y))}catch(H){x(H.message)}},onDelete:()=>w(U.id),onRun:()=>G(U.id),onExport:()=>V(U.id)}):s.jsx("div",{className:"editor-content",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(To,{size:48}),s.jsxs("p",{children:["Select a test case to edit",s.jsx("br",{}),"or create a new one"]})]})})})]}):null}function DC({value:e,onChange:t}){var a,l;const{project:n}=ut(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,o=r.find(c=>c.id===i);return s.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[s.jsx("option",{value:"",children:o?`App Default (${o.model_name})`:"App Default"}),r.map(c=>s.jsx("option",{value:c.model_name,children:c.model_name},c.id)),s.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),s.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),s.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function FC({run:e,onClose:t}){var m;const{project:n}=ut(),[r,i]=b.useState(!0),[o,a]=b.useState(new Set),l=e.case_results||[],c=l.filter(y=>y.passed).length,u=l.filter(y=>!y.passed).length,d=r?l.filter(y=>!y.passed):l,p=y=>{a(j=>{const z=new Set(j);return z.has(y)?z.delete(y):z.add(y),z})},f=y=>{y&&n&&(window.location.href=`/project/${n.id}/run?session=${y}`)};return s.jsxs("div",{className:"test-result-viewer",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"result-header",children:[s.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const y=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(y)}},title:"Copy link to this run",children:s.jsx(ju,{size:14})})})]}),s.jsxs("div",{className:"result-summary",children:[s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Status"}),s.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Passed"}),s.jsx("span",{className:"value passed",children:c})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Failed"}),s.jsx("span",{className:"value failed",children:u})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Total Cases"}),s.jsx("span",{className:"value",children:l.length})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Duration"}),s.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Tokens"}),s.jsx("span",{className:"value",children:((m=e.total_tokens)==null?void 0:m.toLocaleString())||"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Run Time"}),s.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),s.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[s.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[s.jsx("input",{type:"checkbox",checked:r,onChange:y=>i(y.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),s.jsxs("div",{className:"result-cases",children:[d.map((y,j)=>{var L,I,q,U,B,se;const z=y.case_id||`case-${j}`,v=o.has(z),x=((L=y.metric_results)==null?void 0:L.filter(P=>!P.passed||P.error))||[],g=((I=y.metric_results)==null?void 0:I.filter(P=>P.passed&&!P.error))||[],T=((q=y.rubric_results)==null?void 0:q.filter(P=>!P.passed||P.error))||[],N=((U=y.rubric_results)==null?void 0:U.filter(P=>P.passed&&!P.error))||[],_=v?y.metric_results:x,C=v?y.rubric_results:T,k=v?y.invocation_results:(B=y.invocation_results)==null?void 0:B.filter(P=>{var $;return(($=P.metric_results)==null?void 0:$.some(M=>!M.passed))||P.error}),R=g.length+N.length,S=x.length+T.length;return s.jsxs("div",{className:"result-case",children:[s.jsxs("div",{className:"result-case-header",onClick:()=>p(z),style:{cursor:"pointer"},children:[s.jsxs("div",{className:"result-case-name",children:[s.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:v?"▼":"▶"}),y.passed?s.jsx(xr,{size:16,style:{color:"var(--success)"}}):s.jsx(Zr,{size:16,style:{color:"var(--error)"}}),y.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&s.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:y.eval_set_name}),y.case_name||`Case ${j+1}`,s.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[S>0&&s.jsxs("span",{style:{color:"var(--error)"},children:[S," failed"]}),S>0&&R>0&&" · ",R>0&&s.jsxs("span",{style:{color:"var(--success)"},children:[R," passed"]})]})]}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[y.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:P=>{P.stopPropagation(),f(y.session_id)},title:"View session in Run panel",children:[s.jsx(Ug,{size:12})," View Session"]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:y.duration_ms?`${(y.duration_ms/1e3).toFixed(2)}s`:""})]})]}),s.jsxs("div",{className:"result-case-details",children:[(_==null?void 0:_.length)>0&&s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[_.map((P,$)=>{const M=ai(P.metric,P.score,P.threshold);return s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:P.error?"rgba(255, 193, 7, 0.1)":P.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${P.error?"var(--warning)":P.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[s.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:P.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),P.error?s.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):s.jsxs(s.Fragment,{children:[s.jsx("span",{style:{fontSize:14,fontWeight:600,color:P.passed?"var(--success)":"var(--error)"},children:M.value}),s.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:M.comparison})]})]},$)}),!v&&g.length>0&&s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",g.length," passed"]})]}),_==null?void 0:_.filter(P=>!P.passed&&P.rationale).map((P,$)=>s.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[s.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[P.metric.replace(/_/g," ")," - Why it failed:"]}),s.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:P.rationale})]},`rationale-${$}`)),(C==null?void 0:C.length)>0&&s.jsxs("div",{style:{marginTop:8},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),C.map((P,$)=>s.jsxs("div",{style:{marginBottom:P.rationale&&!P.passed?8:4},children:[s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"metric-name",style:{flex:1},children:P.rubric}),s.jsx("span",{className:`metric-value ${P.passed?"passed":"failed"}`,children:P.passed?"✓ Pass":"✗ Fail"})]}),!P.passed&&P.rationale&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[s.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",P.rationale]}),P.error&&s.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",P.error]})]},$)),!v&&N.length>0&&s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",N.length," passed rubric",N.length>1?"s":""]})]}),(k==null?void 0:k.length)>0&&s.jsxs("div",{className:"invocation-summary",children:[s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",k.length,!v&&((se=y.invocation_results)==null?void 0:se.length)>k.length?` of ${y.invocation_results.length}`:"",")"]}),k.map((P,$)=>s.jsxs("div",{className:"invocation-item",children:[s.jsxs("div",{className:"invocation-query",children:["Turn ",P.invocation_id||$+1,": ",P.user_message||"(no message)"]}),P.actual_response&&s.jsxs("div",{className:"invocation-response",children:["Response: ",P.actual_response.substring(0,200),P.actual_response.length>200?"...":""]})]},$))]}),y.error&&s.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:y.error})]})]},z)}),l.length===0&&s.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function BC({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:o,onDelete:a,onRun:l,onClearResult:c}){var N,_,C;const{project:u}=ut(),[d,p]=b.useState(e),[f,m]=b.useState("assertions");b.useEffect(()=>{p(e)},[e.id]);const y=b.useCallback(k=>{p(R=>({...R,...k})),o(k)},[o]),j=()=>{const k={id:Qx(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};y({invocations:[...d.invocations,k]})},z=(k,R)=>{const S=[...d.invocations];S[k]={...S[k],...R},y({invocations:S})},v=k=>{y({invocations:d.invocations.filter((R,S)=>S!==k)})},x=k=>{const R=[...d.invocations];R[k]={...R[k],expected_tool_calls:[...R[k].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},y({invocations:R})},g=(k,R,S)=>{const L=[...d.invocations],I=[...L[k].expected_tool_calls];I[R]={...I[R],...S},L[k]={...L[k],expected_tool_calls:I},y({invocations:L})},T=(k,R)=>{const S=[...d.invocations];S[k]={...S[k],expected_tool_calls:S[k].expected_tool_calls.filter((L,I)=>I!==R)},y({invocations:S})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(To,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("input",{type:"text",value:d.name,onChange:k=>y({name:k.target.value}),placeholder:"Test case name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const k=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(k)},title:"Copy link to this test case",children:s.jsx(ju,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?s.jsx(ri,{size:14,className:"spinning"}):s.jsx(Gn,{size:14}),"Run"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx($e,{size:14})})]}),s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>m("assertions"),children:[s.jsx(Po,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),s.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>m("rubrics"),children:[s.jsx(Su,{size:14,style:{marginRight:6}}),"LLM Judges"]}),s.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>m("docs"),children:[s.jsx(zo,{size:14,style:{marginRight:6}}),"Docs"]}),s.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>m("json"),children:[s.jsx(fn,{size:14,style:{marginRight:6}}),"JSON"]})]}),s.jsxs("div",{className:"editor-content",children:[f==="assertions"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),s.jsxs("select",{value:d.target_agent||"",onChange:k=>y({target_agent:k.target.value||void 0}),style:{width:"100%"},children:[s.jsx("option",{value:"",children:"root_agent"}),(N=u==null?void 0:u.agents)==null?void 0:N.map(k=>s.jsx("option",{value:k.name,children:k.name},k.name))]})]}),s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),s.jsx("input",{type:"text",value:d.tags.join(", "),onChange:k=>y({tags:k.target.value.split(",").map(R=>R.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:d.description,onChange:k=>y({description:k.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["session_input ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(Bt,{height:"100%",defaultLanguage:"json",value:(()=>{var R;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((R=u==null?void 0:u.app)!=null&&R.state_keys)&&u.app.state_keys.length>0){const S={};return u.app.state_keys.forEach(L=>{L.default_value!==void 0?S[L.name]=L.default_value:S[L.name]=L.type==="string"?"":L.type==="number"?0:L.type==="boolean"?!1:L.type==="array"?[]:{}}),JSON.stringify(S,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:k=>{try{k&&y({initial_state:JSON.parse(k)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(Po,{size:14}),"Conversation Turns"]}),d.invocations.map((k,R)=>s.jsxs("div",{className:"invocation-card",children:[s.jsxs("div",{className:"invocation-number",children:[s.jsx("span",{children:R+1}),d.invocations.length>1&&s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>v(R),style:{padding:4},children:s.jsx($e,{size:10})})]}),s.jsxs("div",{className:"invocation-content",children:[s.jsxs("div",{className:"invocation-row",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("label",{children:"User Query"}),s.jsx("textarea",{value:k.user_message,onChange:S=>z(R,{user_message:S.target.value}),placeholder:"The message to send to the agent..."})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{children:["Expected Response ",s.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),s.jsx("textarea",{value:k.expected_response||"",onChange:S=>z(R,{expected_response:S.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),k.expected_tool_calls.map((S,L)=>s.jsxs("div",{className:"tool-call-compact",children:[s.jsx("input",{type:"text",value:S.name,onChange:I=>g(R,L,{name:I.target.value}),placeholder:"tool_name",className:"tool-name-input"}),s.jsxs("div",{className:"pillbox-toggle",children:[s.jsx("button",{className:`pill ${S.args_match_mode==="subset"?"active":""}`,onClick:()=>g(R,L,{args_match_mode:"subset"}),children:"Partial"}),s.jsx("button",{className:`pill ${S.args_match_mode==="exact"?"active":""}`,onClick:()=>g(R,L,{args_match_mode:"exact"}),children:"Exact"})]}),s.jsx("div",{className:"tool-args-editor",children:s.jsx(Bt,{height:"22px",defaultLanguage:"json",value:JSON.stringify(S.args||{}),onChange:I=>{try{I&&g(R,L,{args:JSON.parse(I)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>T(R,L),style:{padding:"4px 6px"},children:s.jsx($e,{size:10})})]},L)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(R),style:{marginTop:4},children:[s.jsx(Ke,{size:12})," Assert Tool Call"]})]})]},k.id)),s.jsxs("button",{className:"btn btn-secondary",onClick:j,children:[s.jsx(Ke,{size:14})," Add Turn"]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(xr,{size:14,style:{marginRight:6}}),"final_session_state ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(Bt,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:k=>{if(!k||k==="{}")y({expected_final_state:void 0});else try{y({expected_final_state:JSON.parse(k)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:k,label:R,default:S,max:L})=>{const I=(d.enabled_metrics||[]).find(U=>U.metric===k),q=(I==null?void 0:I.threshold)??S;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:!!I,onChange:U=>{const B=[...d.enabled_metrics||[]];if(U.target.checked)B.push({metric:k,threshold:S});else{const se=B.findIndex(P=>P.metric===k);se!==-1&&B.splice(se,1)}y({enabled_metrics:B})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,opacity:I?1:.5,minWidth:100},children:R}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:I?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:L===5?1:0,max:L,step:.1,value:q,disabled:!I,onChange:U=>{const B=[...d.enabled_metrics||[]],se=B.findIndex(P=>P.metric===k);se!==-1&&(B[se]={...B[se],threshold:parseFloat(U.target.value)||0},y({enabled_metrics:B}))},style:{width:60,textAlign:"center",opacity:I?1:.3,padding:"2px 4px",fontSize:11}})]},k)})}),s.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Custom Rubrics"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((k,R)=>s.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[s.jsx("input",{type:"text",value:k.rubric,onChange:S=>{const L=[...d.rubrics];L[R]={rubric:S.target.value},y({rubrics:L})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y({rubrics:d.rubrics.filter((S,L)=>L!==R)}),children:s.jsx($e,{size:12})})]},R)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({rubrics:[...d.rubrics,{rubric:""}]}),children:[s.jsx(Ke,{size:12})," Add Rubric"]})]})]}),f==="docs"&&s.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[s.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),s.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),s.jsxs("p",{children:["Each test case simulates a ",s.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Response"})," = the agent's ",s.jsx("em",{children:"final text reply"})," for that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Session State"})," = test the ",s.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),s.jsxs("p",{children:["The ",s.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",s.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{style:{marginBottom:8},children:s.jsx("strong",{children:"During one turn, an agent may:"})}),s.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[s.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),s.jsx("li",{children:"Call multiple tools"}),s.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),s.jsxs("li",{children:["Finally send a ",s.jsx("em",{children:"concluding response"})]})]}),s.jsxs("p",{children:["Only the ",s.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"response_match_score"})," uses ",s.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),s.jsx("li",{children:"Calculates word overlap (not exact string match)"}),s.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{children:s.jsx("strong",{children:"Example:"})}),s.jsxs("p",{children:["Expected: ",s.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),s.jsxs("p",{children:["Actual: ",s.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),s.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),s.jsxs("p",{style:{marginTop:8},children:["A threshold of ",s.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),s.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),s.jsxs("p",{children:[s.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Set user preferences or context"}),s.jsx("li",{children:"Simulate a specific scenario"}),s.jsx("li",{children:"Test state-dependent behavior"})]}),s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Expected Final State"})," — Verified at the ",s.jsx("em",{children:"very end"})," of the test case, ",s.jsx("strong",{children:"after ALL invocations complete"}),"."]}),s.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:s.jsxs("p",{style:{margin:0},children:[s.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),s.jsxs("p",{children:["By default, tests run against the ",s.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),s.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:'"Does the response mention the product price?"'}),s.jsx("li",{children:'"Is the tone professional and helpful?"'}),s.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),s.jsx("tbody",{children:Object.keys(un).map(k=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:k}),s.jsx("td",{style:{padding:"8px 4px"},children:un[k].requiresJudge?s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),s.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:un[k].description})]},k))})]})]}),s.jsxs("section",{children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),s.jsxs("ul",{style:{marginLeft:20},children:[s.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),s.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),s.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),s.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),s.jsx("li",{children:"Use tags to organize tests by feature or priority"}),s.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),s.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx(Bt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(_=d.tags)!=null&&_.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(k=>{var R;return{user_message:k.user_message,expected_response:k.expected_response||void 0,expected_tool_calls:(R=k.expected_tool_calls)!=null&&R.length?k.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(C=d.rubrics)!=null&&C.length?d.rubrics.map(k=>k.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var R,S;const k=JSON.stringify({name:d.name,description:d.description||void 0,tags:(R=d.tags)!=null&&R.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(L=>{var I;return{user_message:L.user_message,expected_response:L.expected_response||void 0,expected_tool_calls:(I=L.expected_tool_calls)!=null&&I.length?L.expected_tool_calls.map(q=>({tool_name:q.tool_name,args:q.match_type!=="name_only"&&Object.keys(q.args||{}).length?q.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(S=d.rubrics)!=null&&S.length?d.rubrics.map(L=>L.rubric):void 0},null,2);navigator.clipboard.writeText(k)},children:[s.jsx(na,{size:14})," Copy JSON"]})})]})]}),r&&s.jsxs("div",{className:"result-panel",children:[s.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?s.jsxs(s.Fragment,{children:[s.jsx(xr,{size:18})," ",s.jsx("strong",{children:"Passed"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Zr,{size:18})," ",s.jsx("strong",{children:"Failed"})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[s.jsx(Ug,{size:12}),"View Session"]}),c&&s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),s.jsx("div",{className:"result-scores",children:r.metric_results.map((k,R)=>{var L;const S=ai(k.metric,k.score,k.threshold);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${k.passed?"passed":"failed"}`,children:S.value}),s.jsx("div",{className:"score-label",children:((L=un[k.metric])==null?void 0:L.name)||k.metric}),s.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:S.comparison}),k.error&&s.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:k.error})]},R)})}),r.rubric_results&&r.rubric_results.length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((k,R)=>s.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:k.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${k.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[s.jsx("span",{style:{fontSize:16,color:k.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:k.passed?"✓":"✗"}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:k.rubric}),k.error&&s.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",k.error]})]})]},R))})]}),r.invocation_results.map((k,R)=>s.jsxs("div",{className:"result-details",children:[s.jsxs("h5",{children:["Turn ",R+1,": ",k.user_message.length>50?k.user_message.slice(0,50)+"…":k.user_message]}),k.metric_results.length>0&&s.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:k.metric_results.map((S,L)=>{var q;const I=ai(S.metric,S.score,S.threshold);return s.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:S.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:S.passed?"var(--success)":"var(--error)"},children:[((q=un[S.metric])==null?void 0:q.name)||S.metric,": ",I.value]},L)})}),s.jsxs("div",{className:"detail-box",children:[s.jsx("strong",{children:"Actual Response:"}),`
`,k.actual_response||"(no response)",`

`,k.actual_tool_calls.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("strong",{children:"Tool Calls:"}),`
`,k.actual_tool_calls.map((S,L)=>`  ${L+1}. ${S.name}(${JSON.stringify(S.args)})
`).join("")]})]})]},R)),r.error&&s.jsxs("div",{className:"result-details",children:[s.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),s.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function UC({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:o,onDelete:a,onRun:l,onExport:c}){var j,z,v,x;const[u,d]=b.useState(e.name),[p,f]=b.useState(!1);b.useEffect(()=>{d(e.name)},[e.id]);const m=b.useCallback(()=>{u!==e.name&&o({name:u})},[u,e.name,o]),y=g=>g==null?"-":`${Math.round(g*100)}%`;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Wg,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("input",{type:"text",value:u,onChange:g=>d(g.target.value),onBlur:m,placeholder:"Eval set name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const g=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(g)},title:"Copy link to this eval set",children:s.jsx(ju,{size:14})}),s.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[s.jsx(fn,{size:14}),"JSON"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:s.jsx(hi,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?s.jsx(ri,{size:14,className:"spinning"}):s.jsx(Gn,{size:14}),"Run All"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx($e,{size:14})})]}),s.jsx("div",{className:"editor-content",children:p?s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:s.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",s.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),s.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:s.jsx(Bt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(g=>{var T,N;return{name:g.name,description:g.description||void 0,tags:(T=g.tags)!=null&&T.length?g.tags:void 0,target_agent:g.target_agent!=="root_agent"?g.target_agent:void 0,invocations:g.invocations.map(_=>{var C;return{user_message:_.user_message,expected_response:_.expected_response||void 0,expected_tool_calls:(C=_.expected_tool_calls)!=null&&C.length?_.expected_tool_calls.map(k=>({tool_name:k.tool_name,args:k.match_type!=="name_only"&&Object.keys(k.args||{}).length?k.args:void 0})):void 0}}),session_input:Object.keys(g.session_input||{}).length?{state:g.session_input}:void 0,final_session_state:Object.keys(g.final_session_state||{}).length?g.final_session_state:void 0,rubrics:(N=g.rubrics)!=null&&N.length?g.rubrics.map(_=>_.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((j=e.eval_config.metrics)==null?void 0:j.filter(g=>g.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var T;const g=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(N=>{var _,C;return{name:N.name,description:N.description||void 0,tags:(_=N.tags)!=null&&_.length?N.tags:void 0,target_agent:N.target_agent!=="root_agent"?N.target_agent:void 0,invocations:N.invocations.map(k=>{var R;return{user_message:k.user_message,expected_response:k.expected_response||void 0,expected_tool_calls:(R=k.expected_tool_calls)!=null&&R.length?k.expected_tool_calls.map(S=>({tool_name:S.tool_name,args:S.match_type!=="name_only"&&Object.keys(S.args||{}).length?S.args:void 0})):void 0}}),session_input:Object.keys(N.session_input||{}).length?{state:N.session_input}:void 0,final_session_state:Object.keys(N.final_session_state||{}).length?N.final_session_state:void 0,rubrics:(C=N.rubrics)!=null&&C.length?N.rubrics.map(k=>k.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((T=e.eval_config.metrics)==null?void 0:T.filter(N=>N.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(g)},children:[s.jsx(na,{size:14})," Copy JSON"]})})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:e.description,onChange:g=>o({description:g.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"LLM Judge Model"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),s.jsx(DC,{value:((z=e.eval_config)==null?void 0:z.judge_model)||"",onChange:g=>o({eval_config:{...e.eval_config,judge_model:g}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(Jg,{size:14})," Evaluation Metrics"]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(un).map(g=>{var k,R,S;const T=un[g],N=(R=(k=e.eval_config)==null?void 0:k.metrics)==null?void 0:R.find(L=>L.metric===g),_=(N==null?void 0:N.enabled)??!1,C=((S=N==null?void 0:N.criterion)==null?void 0:S.threshold)??.7;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:_,onChange:L=>{var U;const I=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],q=I.findIndex(B=>B.metric===g);L.target.checked?q===-1?I.push({metric:g,enabled:!0,criterion:{threshold:.7}}):I[q]={...I[q],enabled:!0}:q!==-1&&(I[q]={...I[q],enabled:!1}),o({eval_config:{...e.eval_config,metrics:I}})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsxs("span",{style:{fontSize:12,opacity:_?1:.5,minWidth:140,fontWeight:_?500:400},children:[T.name,T.requiresJudge&&s.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:_?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:0,max:1,step:.1,value:C,disabled:!_,onChange:L=>{var U;const I=[...((U=e.eval_config)==null?void 0:U.metrics)||[]],q=I.findIndex(B=>B.metric===g);q!==-1&&(I[q]={...I[q],criterion:{...I[q].criterion,threshold:parseFloat(L.target.value)||.7}},o({eval_config:{...e.eval_config,metrics:I}}))},style:{width:60,textAlign:"center",opacity:_?1:.3,padding:"2px 4px",fontSize:11}})]},g)}),s.jsxs("div",{className:"form-row",style:{marginTop:16},children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Default Trajectory Match Type"}),s.jsxs("select",{value:((v=e.eval_config)==null?void 0:v.default_trajectory_match_type)||"in_order",onChange:g=>o({eval_config:{...e.eval_config,default_trajectory_match_type:g.target.value}}),children:[s.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),s.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),s.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Number of Runs"}),s.jsx("input",{type:"number",min:1,max:10,value:((x=e.eval_config)==null?void 0:x.num_runs)||1,onChange:g=>o({eval_config:{...e.eval_config,num_runs:parseInt(g.target.value)||1}})}),s.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(w0,{size:14})," Coverage Summary"]}),n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"result-scores",children:[s.jsxs("div",{className:"score-card",children:[s.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),s.jsx("div",{className:"score-label",children:"Cases Passed"})]}),s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:y(n.overall_pass_rate)}),s.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([g,T])=>{var _;const N=ai(g,T);return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:"score-value",children:N.value}),s.jsxs("div",{className:"score-label",children:["Avg ",((_=un[g])==null?void 0:_.name)||g]})]},g)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([g,T])=>{var N;return s.jsxs("div",{style:{marginBottom:8},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[s.jsx("span",{children:((N=un[g])==null?void 0:N.name)||g}),s.jsx("span",{children:y(T)})]}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${T>=.8?"passed":"failed"}`,style:{width:`${T*100}%`}})})]},g)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),s.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),s.jsx("tbody",{children:n.case_results.map(g=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px"},children:g.eval_case_name}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:g.metric_results.map((T,N)=>{const _=ai(T.metric,T.score,T.threshold);return s.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:T.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:T.passed?"var(--success)":"var(--error)"},children:_.value},N)})}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:g.passed?s.jsx(xr,{size:14,style:{color:"var(--success)"}}):g.error?s.jsx(zo,{size:14,style:{color:"var(--warning)"}}):s.jsx(Zr,{size:14,style:{color:"var(--error)"}})})]},g.eval_case_id))})]})]})]}):s.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[s.jsx(Su,{size:32,style:{marginBottom:8,opacity:.3}}),s.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):s.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(g=>{const T=i.get(g.id);return s.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[T?T.passed?s.jsx(xr,{size:14,style:{color:"var(--success)"}}):s.jsx(Zr,{size:14,style:{color:"var(--error)"}}):s.jsx(To,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{style:{flex:1},children:g.name}),s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[g.invocations.length," turn(s)"]})]},g.id)})})]})]})})]})}function VC(){const{project:e,setProject:t}=ut(),[n,r]=b.useState(""),[i,o]=b.useState(!0),[a,l]=b.useState(!1),[c,u]=b.useState(null),[d,p]=b.useState(!1);if(!e)return null;b.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const x=await zg(e.id);r(x),l(!1)}catch(x){u(x.message)}finally{o(!1)}}function m(x){x!==void 0&&(r(x),l(!0),u(null))}async function y(){o(!0),u(null);try{const x=await Tg(e.id,n);t(x),l(!1)}catch(x){u(x.message)}finally{o(!1)}}function j(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function z(){const x=new Blob([n],{type:"text/yaml"}),g=URL.createObjectURL(x),T=document.createElement("a");T.href=g,T.download=`${e.name}.yaml`,T.click(),URL.revokeObjectURL(g)}function v(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async g=>{var _;const T=(_=g.target.files)==null?void 0:_[0];if(!T)return;const N=await T.text();r(N),l(!0)},x.click()}return s.jsxs("div",{className:"yaml-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"yaml-header",children:[s.jsxs("div",{className:"yaml-title",children:[s.jsx("h3",{children:"Project Configuration"}),a&&s.jsxs("span",{className:"status-badge warning",children:[s.jsx(zo,{size:12}),"Unsaved changes"]}),c&&s.jsxs("span",{className:"status-badge error",children:[s.jsx(zo,{size:12}),c]}),d&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(vu,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"yaml-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,title:"Copy to clipboard",children:[s.jsx(na,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:z,title:"Download YAML",children:[s.jsx(hi,{size:14}),"Download"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:v,title:"Upload YAML",children:[s.jsx(ra,{size:14}),"Upload"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[s.jsx(Yt,{size:14}),"Reload"]}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:y,disabled:!a||i,children:"Apply Changes"})]})]}),s.jsx("div",{className:"yaml-editor",children:s.jsx(Bt,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"yaml-info",children:[s.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),s.jsxs("p",{children:["You can edit the YAML directly, then click ",s.jsx("code",{children:"Apply Changes"})," to update the project. Use ",s.jsx("code",{children:"Download"})," to save a backup or ",s.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function Hf(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function WC(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function HC(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const i=t.agents.find(o=>o.id===e.agent_id);return i?`AgentTool(agent=${i.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const i=e.skillset_id,o=(r=t.skillsets)==null?void 0:r.find(a=>a.id===i);return o?`${o.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function qC(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${Hf(i.instruction)}"""`),i.description&&o.push(`description="${Hf(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(c=>HC(c,t)).filter(c=>c&&!c.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const l={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(l)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(y=>y.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(y=>y.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${u}="${m}"`)}else o.push(`${u}=[${p}]`)}}return`${r} = Agent(
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
)`}return`# Unknown agent type: ${e.type}`}function JC(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        ),"),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")),t.join(`
`)}function KC(e,t){const n=[];return n.push(`# SkillSet: ${e.name}`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager = KnowledgeServiceManager()`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset = SkillSet(`),n.push(`    skillset_id="${e.id}",`),n.push(`    project_id="${t.id}",`),n.push(`    manager=${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager,`),e.embedding_model?n.push(`    model_name="${e.embedding_model}",`):n.push('    model_name="text-embedding-004",'),n.push(`    search_enabled=${e.search_enabled?"True":"False"},`),n.push(`    preload_enabled=${e.preload_enabled?"True":"False"},`),e.preload_top_k&&n.push(`    preload_top_k=${e.preload_top_k},`),e.preload_min_score&&n.push(`    preload_min_score=${e.preload_min_score},`),n.push(")"),n.join(`
`)}function GC(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(C=>{const k=n[C];if(k){const S=C.toLowerCase().includes("key")||C.toLowerCase().includes("secret")?"***":k;t.push(`os.environ["${C}"] = "${S}"  # Set your ${C}`)}else t.push(`# os.environ["${C}"] = ""  # TODO: Set your ${C}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(C=>C.type==="SequentialAgent"),a=e.agents.some(C=>C.type==="LoopAgent"),l=e.agents.some(C=>C.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),l&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(C=>{var k;return C.type==="LlmAgent"&&((k=C.model)==null?void 0:k.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(C=>C.type==="LlmAgent"&&C.tools.some(k=>k.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(k=>{k.type==="builtin"&&k.name&&d.add(k.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){i.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const C=e.mcp_servers.some(R=>R.connection_type==="stdio"),k=e.mcp_servers.some(R=>R.connection_type==="sse");C&&(i.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),i.add("from mcp import StdioServerParameters")),k&&i.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(C=>{"tools"in C&&C.tools&&C.tools.forEach(k=>{k.type==="skillset"&&f.add(k.skillset_id)})}),f.size>0&&(i.add("from skillset import SkillSet"),i.add("from knowledge_service import KnowledgeServiceManager")),i.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(C=>{C.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const y=Array.from(i).sort();t.push(...y),t.push(""),t.push("");const j=new Map;e.agents.forEach(C=>{const k=C.name.endsWith("_agent")?C.name:`${C.name}_agent`;j.set(C.id,k)});const z=[],v=new Set;function x(C){if(v.has(C))return;const k=e.agents.find(R=>R.id===C);k&&(k.sub_agents.forEach(R=>x(R)),v.add(C),z.push(k))}e.agents.forEach(C=>x(C.id));const g=new Map;z.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(k=>{k.type==="mcp"&&k.server&&g.set(k.server.name,k.server)})}),g.size>0&&(t.push("# MCP Server Toolsets"),g.forEach(C=>{t.push(JC(C)),t.push("")}),t.push(""));const T=new Set;z.forEach(C=>{C.type==="LlmAgent"&&C.tools.forEach(k=>{k.type==="skillset"&&T.add(k.skillset_id)})}),T.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),T.forEach(C=>{var R;const k=(R=e.skillsets)==null?void 0:R.find(S=>S.id===C);k&&(t.push(KC(k,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(C=>{t.push(C.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(C=>{t.push(C.code),t.push("")}),t.push("")),t.push("# Models"),z.forEach(C=>{C.type==="LlmAgent"&&C.model&&(t.push(WC(C.model,`${C.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),z.forEach(C=>{t.push(qC(C,e,j)),t.push("")});const N=e.agents.find(C=>C.id===e.app.root_agent_id),_=N?j.get(N.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${_},`),m){const C=e.app.plugins.map(k=>k.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${k.max_retries||3})`:`        # ${k.type}()`);t.push("    plugins=["),t.push(C.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function QC(){const{project:e}=ut(),[t,n]=b.useState(!1);if(!e)return null;const r=b.useMemo(()=>GC(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(l)}return s.jsxs("div",{className:"code-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"code-header",children:[s.jsxs("div",{className:"code-title",children:[s.jsx(fn,{size:16}),s.jsx("h3",{children:"Python Code"}),s.jsx("span",{className:"badge",children:"Generated"}),t&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(vu,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[s.jsx(na,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[s.jsx(hi,{size:14}),"Download"]})]})]}),s.jsx("div",{className:"code-editor",children:s.jsx(Bt,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"code-info",children:[s.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),s.jsxs("p",{children:["Place this in a file named ",s.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",s.jsx("code",{children:"adk web ."})," or ",s.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const YC=[{id:"app",label:"App",icon:Jg},{id:"agents",label:"Agents",icon:dr},{id:"tools",label:"Tools",icon:en},{id:"callbacks",label:"Callbacks",icon:fn},{id:"run",label:"Run",icon:Hg},{id:"skillsets",label:"SkillSets",icon:p0},{id:"eval",label:"Evaluate",icon:ac},{id:"yaml",label:"YAML",icon:m0},{id:"code",label:"Code",icon:fn}],XC=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function ol(){var B,se;const{projectId:e,tab:t,itemId:n}=pb(),r=xu(),{project:i,setProject:o,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=ut(),[y,j]=b.useState(!0),[z,v]=b.useState(!1),[x,g]=b.useState(!1),[T,N]=b.useState(null),_=b.useRef(!0),C=b.useRef(null);b.useEffect(()=>{t&&XC.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),b.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function k(P){l(P),P==="agents"&&d?r(`/project/${e}/${P}/${d}`,{replace:!0}):P==="tools"&&f?r(`/project/${e}/${P}/${f}`,{replace:!0}):r(`/project/${e}/${P}`,{replace:!0})}function R(P){P?r(`/project/${e}/${a}/${P}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}b.useEffect(()=>(e&&S(e),()=>{o(null),u(!1)}),[e]);async function S(P){_.current=!0;try{const $=await _g(P);o($),C.current=JSON.stringify($),u(!1)}catch($){console.error("Failed to load project:",$),r("/")}finally{j(!1),setTimeout(()=>{_.current=!1},100)}}async function L(){if(i){v(!0);try{const{eval_sets:P,...$}=i;await nc(i.id,$),C.current=JSON.stringify(i),u(!1)}catch(P){console.error("Failed to save project:",P)}finally{v(!1)}}}async function I(){if(i){g(!0),N(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let P=0,$=0;const M=[],w=[];for(const V of i.eval_sets||[]){if(V.eval_cases.length===0)continue;const Q=await qe.post(`/projects/${i.id}/eval-sets/${V.id}/run`,{});Q.result&&(P+=Q.result.passed_cases||0,$+=Q.result.total_cases||0,Q.result.case_results&&M.push(...Q.result.case_results),w.push(Q.result.eval_set_name||V.name||V.id))}if(M.length>0){const V={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:w.length>1?`All Tests (${w.length} sets)`:w[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:$,passed_cases:P,failed_cases:$-P,case_results:M};try{await qe.post(`/projects/${i.id}/eval-history`,V)}catch(Q){console.warn("Failed to save batch eval run to history:",Q)}}N({passed:P,total:$}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>N(null),5e3)}catch(P){console.error("Failed to run tests:",P),N({passed:0,total:-1}),setTimeout(()=>N(null),5e3)}finally{g(!1)}}}const q=b.useRef(null);b.useEffect(()=>{if(i&&!_.current&&q.current){const P=i.app.models||[],$=q.current||[];if(P.some((w,V)=>{const Q=$.find(h=>h.id===w.id);return Q?Q.provider!==w.provider||Q.model_name!==w.model_name||Q.api_base!==w.api_base||Q.temperature!==w.temperature||Q.max_output_tokens!==w.max_output_tokens||Q.top_p!==w.top_p||Q.top_k!==w.top_k:!1})){const w=i.app.default_model_id,V=i.agents.map(h=>{if(h.type==="LlmAgent"&&h.model){const D=h.model._appModelId;if(D){const E=P.find(G=>G.id===D);if(E)return{...h,model:{provider:E.provider,model_name:E.model_name,api_base:E.api_base,temperature:E.temperature,max_output_tokens:E.max_output_tokens,top_p:E.top_p,top_k:E.top_k,fallbacks:[],_appModelId:D}}}else if(w){const E=P.find(G=>G.id===w);if(E&&h.model.provider===E.provider&&h.model.model_name===E.model_name&&h.model.api_base===E.api_base)return{...h,model:{provider:E.provider,model_name:E.model_name,api_base:E.api_base,temperature:E.temperature,max_output_tokens:E.max_output_tokens,top_p:E.top_p,top_k:E.top_k,fallbacks:[],_appModelId:w}}}}return h});V.some((h,D)=>JSON.stringify(h)!==JSON.stringify(i.agents[D]))&&o({...i,agents:V})}}i&&(q.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const U=b.useRef(null);return b.useEffect(()=>(i&&!_.current&&C.current&&JSON.stringify(i)!==C.current&&(u(!0),U.current&&clearTimeout(U.current),U.current=setTimeout(async()=>{try{const{eval_sets:$,...M}=i;await nc(i.id,M),C.current=JSON.stringify(i),u(!1)}catch($){console.error("Auto-save failed:",$)}},500)),()=>{U.current&&clearTimeout(U.current)}),[i]),y?s.jsxs("div",{className:"loading-screen",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"top-bar",children:[s.jsxs("div",{className:"top-bar-left",children:[s.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[s.jsx(u0,{size:18}),"Project"]}),s.jsx("h1",{className:"project-name",children:i.name})]}),s.jsx("nav",{className:"tabs-bar",children:YC.map(P=>s.jsxs("button",{className:`tab-btn ${a===P.id?"active":""}`,onClick:()=>k(P.id),children:[s.jsx(P.icon,{size:14}),P.label]},P.id))}),s.jsxs("div",{className:"top-bar-right",children:[s.jsxs("button",{className:`btn ${T?T.total===-1?"btn-error":T.passed===T.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:I,disabled:x||!((B=i==null?void 0:i.eval_sets)!=null&&B.some(P=>P.eval_cases.length>0)),title:(se=i==null?void 0:i.eval_sets)!=null&&se.some(P=>P.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[x?s.jsx(v0,{size:16,className:"spin"}):s.jsx(Gn,{size:16}),x?"Testing...":T?T.total===-1?"Error":`${T.passed}/${T.total}`:"Test"]}),s.jsxs("button",{className:"btn btn-primary",onClick:L,disabled:z,children:[s.jsx(Lo,{size:16}),z?"Saving...":"Save"]})]})]}),s.jsxs("main",{className:"main-content",children:[a==="app"&&s.jsx(R0,{}),a==="agents"&&s.jsx(BS,{onSelectAgent:R}),a==="tools"&&s.jsx(kC,{onSelectTool:R}),a==="callbacks"&&s.jsx(jC,{onSelectCallback:R}),a==="run"&&s.jsx(AC,{}),a==="skillsets"&&s.jsx(IC,{}),a==="eval"&&s.jsx($C,{}),a==="yaml"&&s.jsx(VC,{}),a==="code"&&s.jsx(QC,{})]})]}):null}function ZC(){const{setMcpServers:e,setBuiltinTools:t}=ut();return b.useEffect(()=>{yu().then(e).catch(console.error),Pg().then(t).catch(console.error)},[e,t]),s.jsxs(zb,{children:[s.jsx(jr,{path:"/",element:s.jsx(N0,{})}),s.jsx(jr,{path:"/project/:projectId",element:s.jsx(ol,{})}),s.jsx(jr,{path:"/project/:projectId/:tab",element:s.jsx(ol,{})}),s.jsx(jr,{path:"/project/:projectId/:tab/:itemId",element:s.jsx(ol,{})}),s.jsx(jr,{path:"*",element:s.jsx(Nb,{to:"/",replace:!0})})]})}al.createRoot(document.getElementById("root")).render(s.jsx(Tt.StrictMode,{children:s.jsx(Lb,{children:s.jsx(ZC,{})})}));
