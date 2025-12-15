function E1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ma(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Im={exports:{}},Ia={},Om={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),z1=Symbol.for("react.portal"),T1=Symbol.for("react.fragment"),A1=Symbol.for("react.strict_mode"),P1=Symbol.for("react.profiler"),L1=Symbol.for("react.provider"),R1=Symbol.for("react.context"),M1=Symbol.for("react.forward_ref"),I1=Symbol.for("react.suspense"),O1=Symbol.for("react.memo"),$1=Symbol.for("react.lazy"),Up=Symbol.iterator;function D1(e){return e===null||typeof e!="object"?null:(e=Up&&e[Up]||e["@@iterator"],typeof e=="function"?e:null)}var $m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dm=Object.assign,Fm={};function ji(e,t,n){this.props=e,this.context=t,this.refs=Fm,this.updater=n||$m}ji.prototype.isReactComponent={};ji.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bm(){}Bm.prototype=ji.prototype;function Pu(e,t,n){this.props=e,this.context=t,this.refs=Fm,this.updater=n||$m}var Lu=Pu.prototype=new Bm;Lu.constructor=Pu;Dm(Lu,ji.prototype);Lu.isPureReactComponent=!0;var Vp=Array.isArray,Um=Object.prototype.hasOwnProperty,Ru={current:null},Vm={key:!0,ref:!0,__self:!0,__source:!0};function Wm(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Um.call(t,r)&&!Vm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Vo,type:e,key:s,ref:a,props:i,_owner:Ru.current}}function F1(e,t){return{$$typeof:Vo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vo}function B1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wp=/\/+/g;function hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?B1(""+e.key):t.toString(36)}function Ps(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Vo:case z1:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+hl(a,0):r,Vp(i)?(n="",e!=null&&(n=e.replace(Wp,"$&/")+"/"),Ps(i,t,n,"",function(u){return u})):i!=null&&(Mu(i)&&(i=F1(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Wp,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Vp(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+hl(s,l);a+=Ps(s,t,n,c,i)}else if(c=D1(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+hl(s,l++),a+=Ps(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ss(e,t,n){if(e==null)return e;var r=[],i=0;return Ps(e,r,"","",function(s){return t.call(n,s,i++)}),r}function U1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var mt={current:null},Ls={transition:null},V1={ReactCurrentDispatcher:mt,ReactCurrentBatchConfig:Ls,ReactCurrentOwner:Ru};function Hm(){throw Error("act(...) is not supported in production builds of React.")}Ce.Children={map:ss,forEach:function(e,t,n){ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ss(e,function(){t++}),t},toArray:function(e){return ss(e,function(t){return t})||[]},only:function(e){if(!Mu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ce.Component=ji;Ce.Fragment=T1;Ce.Profiler=P1;Ce.PureComponent=Pu;Ce.StrictMode=A1;Ce.Suspense=I1;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V1;Ce.act=Hm;Ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dm({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Ru.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Um.call(t,c)&&!Vm.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Vo,type:e.type,key:i,ref:s,props:r,_owner:a}};Ce.createContext=function(e){return e={$$typeof:R1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:L1,_context:e},e.Consumer=e};Ce.createElement=Wm;Ce.createFactory=function(e){var t=Wm.bind(null,e);return t.type=e,t};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(e){return{$$typeof:M1,render:e}};Ce.isValidElement=Mu;Ce.lazy=function(e){return{$$typeof:$1,_payload:{_status:-1,_result:e},_init:U1}};Ce.memo=function(e,t){return{$$typeof:O1,type:e,compare:t===void 0?null:t}};Ce.startTransition=function(e){var t=Ls.transition;Ls.transition={};try{e()}finally{Ls.transition=t}};Ce.unstable_act=Hm;Ce.useCallback=function(e,t){return mt.current.useCallback(e,t)};Ce.useContext=function(e){return mt.current.useContext(e)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(e){return mt.current.useDeferredValue(e)};Ce.useEffect=function(e,t){return mt.current.useEffect(e,t)};Ce.useId=function(){return mt.current.useId()};Ce.useImperativeHandle=function(e,t,n){return mt.current.useImperativeHandle(e,t,n)};Ce.useInsertionEffect=function(e,t){return mt.current.useInsertionEffect(e,t)};Ce.useLayoutEffect=function(e,t){return mt.current.useLayoutEffect(e,t)};Ce.useMemo=function(e,t){return mt.current.useMemo(e,t)};Ce.useReducer=function(e,t,n){return mt.current.useReducer(e,t,n)};Ce.useRef=function(e){return mt.current.useRef(e)};Ce.useState=function(e){return mt.current.useState(e)};Ce.useSyncExternalStore=function(e,t,n){return mt.current.useSyncExternalStore(e,t,n)};Ce.useTransition=function(){return mt.current.useTransition()};Ce.version="18.3.1";Om.exports=Ce;var k=Om.exports;const It=Ma(k),W1=E1({__proto__:null,default:It},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1=k,q1=Symbol.for("react.element"),J1=Symbol.for("react.fragment"),K1=Object.prototype.hasOwnProperty,G1=H1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q1={key:!0,ref:!0,__self:!0,__source:!0};function qm(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)K1.call(t,r)&&!Q1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:q1,type:e,key:s,ref:a,props:i,_owner:G1.current}}Ia.Fragment=J1;Ia.jsx=qm;Ia.jsxs=qm;Im.exports=Ia;var o=Im.exports,dc={},Jm={exports:{}},Ft={},Km={exports:{}},Gm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,I){var _=$.length;$.push(I);e:for(;0<_;){var W=_-1>>>1,Q=$[W];if(0<i(Q,I))$[W]=I,$[_]=Q,_=W;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var I=$[0],_=$.pop();if(_!==I){$[0]=_;e:for(var W=0,Q=$.length,b=Q>>>1;W<b;){var U=2*(W+1)-1,z=$[U],G=U+1,xe=$[G];if(0>i(z,_))G<Q&&0>i(xe,z)?($[W]=xe,$[G]=_,W=G):($[W]=z,$[U]=_,W=U);else if(G<Q&&0>i(xe,_))$[W]=xe,$[G]=_,W=G;else break e}}return I}function i($,I){var _=$.sortIndex-I.sortIndex;return _!==0?_:$.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,g=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=$)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function j($){if(v=!1,x($),!g)if(n(c)!==null)g=!0,X(E);else{var I=n(u);I!==null&&T(j,I.startTime-$)}}function E($,I){g=!1,v&&(v=!1,y(C),C=-1),h=!0;var _=f;try{for(x(I),p=n(c);p!==null&&(!(p.expirationTime>I)||$&&!L());){var W=p.callback;if(typeof W=="function"){p.callback=null,f=p.priorityLevel;var Q=W(p.expirationTime<=I);I=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(c)&&r(c),x(I)}else r(c);p=n(c)}if(p!==null)var b=!0;else{var U=n(u);U!==null&&T(j,U.startTime-I),b=!1}return b}finally{p=null,f=_,h=!1}}var S=!1,A=null,C=-1,R=5,N=-1;function L(){return!(e.unstable_now()-N<R)}function P(){if(A!==null){var $=e.unstable_now();N=$;var I=!0;try{I=A(!0,$)}finally{I?B():(S=!1,A=null)}}else S=!1}var B;if(typeof m=="function")B=function(){m(P)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,D=V.port2;V.port1.onmessage=P,B=function(){D.postMessage(null)}}else B=function(){w(P,0)};function X($){A=$,S||(S=!0,B())}function T($,I){C=w(function(){$(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,X(E))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var _=f;f=I;try{return $()}finally{f=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,I){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var _=f;f=$;try{return I()}finally{f=_}},e.unstable_scheduleCallback=function($,I,_){var W=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?W+_:W):_=W,$){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=_+Q,$={id:d++,callback:I,priorityLevel:$,startTime:_,expirationTime:Q,sortIndex:-1},_>W?($.sortIndex=_,t(u,$),n(c)===null&&$===n(u)&&(v?(y(C),C=-1):v=!0,T(j,_-W))):($.sortIndex=Q,t(c,$),g||h||(g=!0,X(E))),$},e.unstable_shouldYield=L,e.unstable_wrapCallback=function($){var I=f;return function(){var _=f;f=I;try{return $.apply(this,arguments)}finally{f=_}}}})(Gm);Km.exports=Gm;var Y1=Km.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1=k,$t=Y1;function ne(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qm=new Set,ho={};function Mr(e,t){ui(e,t),ui(e+"Capture",t)}function ui(e,t){for(ho[e]=t,e=0;e<t.length;e++)Qm.add(t[e])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=Object.prototype.hasOwnProperty,Z1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hp={},qp={};function e0(e){return pc.call(qp,e)?!0:pc.call(Hp,e)?!1:Z1.test(e)?qp[e]=!0:(Hp[e]=!0,!1)}function t0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function n0(e,t,n,r){if(t===null||typeof t>"u"||t0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function gt(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ot[e]=new gt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ot[t]=new gt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ot[e]=new gt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ot[e]=new gt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ot[e]=new gt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ot[e]=new gt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ot[e]=new gt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ot[e]=new gt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ot[e]=new gt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Iu=/[\-:]([a-z])/g;function Ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Iu,Ou);ot[t]=new gt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Iu,Ou);ot[t]=new gt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Iu,Ou);ot[t]=new gt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ot[e]=new gt(e,1,!1,e.toLowerCase(),null,!1,!1)});ot.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ot[e]=new gt(e,1,!1,e.toLowerCase(),null,!0,!0)});function $u(e,t,n,r){var i=ot.hasOwnProperty(t)?ot[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(n0(t,n,i,r)&&(n=null),r||i===null?e0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $n=X1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,as=Symbol.for("react.element"),Br=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),fc=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),Xm=Symbol.for("react.context"),Fu=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),mc=Symbol.for("react.suspense_list"),Bu=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),Zm=Symbol.for("react.offscreen"),Jp=Symbol.iterator;function Pi(e){return e===null||typeof e!="object"?null:(e=Jp&&e[Jp]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,ml;function qi(e){if(ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ml=t&&t[1]||""}return`
`+ml+e}var gl=!1;function xl(e,t){if(!e||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qi(e):""}function r0(e){switch(e.tag){case 5:return qi(e.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function gc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ur:return"Fragment";case Br:return"Portal";case fc:return"Profiler";case Du:return"StrictMode";case hc:return"Suspense";case mc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xm:return(e.displayName||"Context")+".Consumer";case Ym:return(e._context.displayName||"Context")+".Provider";case Fu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bu:return t=e.displayName||null,t!==null?t:gc(e.type)||"Memo";case Un:t=e._payload,e=e._init;try{return gc(e(t))}catch{}}return null}function i0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gc(t);case 8:return t===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ar(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function o0(e){var t=eg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){e._valueTracker||(e._valueTracker=o0(e))}function tg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=eg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xc(e,t){var n=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ar(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ng(e,t){t=t.checked,t!=null&&$u(e,"checked",t,!1)}function yc(e,t){ng(e,t);var n=ar(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vc(e,t.type,n):t.hasOwnProperty("defaultValue")&&vc(e,t.type,ar(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vc(e,t,n){(t!=="number"||Ys(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ji=Array.isArray;function ei(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ar(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ne(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ne(92));if(Ji(n)){if(1<n.length)throw Error(ne(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ar(n)}}function rg(e,t){var n=ar(t.value),r=ar(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ig(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ig(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cs,og=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cs=cs||document.createElement("div"),cs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s0=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){s0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),eo[t]=eo[e]})});function sg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||eo.hasOwnProperty(e)&&eo[e]?(""+t).trim():t+"px"}function ag(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var a0=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kc(e,t){if(t){if(a0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ne(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ne(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ne(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ne(62))}}function jc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _c=null;function Uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sc=null,ti=null,ni=null;function Xp(e){if(e=qo(e)){if(typeof Sc!="function")throw Error(ne(280));var t=e.stateNode;t&&(t=Ba(t),Sc(e.stateNode,e.type,t))}}function lg(e){ti?ni?ni.push(e):ni=[e]:ti=e}function cg(){if(ti){var e=ti,t=ni;if(ni=ti=null,Xp(e),t)for(e=0;e<t.length;e++)Xp(t[e])}}function ug(e,t){return e(t)}function dg(){}var yl=!1;function pg(e,t,n){if(yl)return e(t,n);yl=!0;try{return ug(e,t,n)}finally{yl=!1,(ti!==null||ni!==null)&&(dg(),cg())}}function go(e,t){var n=e.stateNode;if(n===null)return null;var r=Ba(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ne(231,t,typeof n));return n}var Cc=!1;if(Ln)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{Cc=!1}function l0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var to=!1,Xs=null,Zs=!1,Nc=null,c0={onError:function(e){to=!0,Xs=e}};function u0(e,t,n,r,i,s,a,l,c){to=!1,Xs=null,l0.apply(c0,arguments)}function d0(e,t,n,r,i,s,a,l,c){if(u0.apply(this,arguments),to){if(to){var u=Xs;to=!1,Xs=null}else throw Error(ne(198));Zs||(Zs=!0,Nc=u)}}function Ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zp(e){if(Ir(e)!==e)throw Error(ne(188))}function p0(e){var t=e.alternate;if(!t){if(t=Ir(e),t===null)throw Error(ne(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zp(i),e;if(s===r)return Zp(i),t;s=s.sibling}throw Error(ne(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==r)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?e:t}function hg(e){return e=p0(e),e!==null?mg(e):null}function mg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mg(e);if(t!==null)return t;e=e.sibling}return null}var gg=$t.unstable_scheduleCallback,ef=$t.unstable_cancelCallback,f0=$t.unstable_shouldYield,h0=$t.unstable_requestPaint,He=$t.unstable_now,m0=$t.unstable_getCurrentPriorityLevel,Vu=$t.unstable_ImmediatePriority,xg=$t.unstable_UserBlockingPriority,ea=$t.unstable_NormalPriority,g0=$t.unstable_LowPriority,yg=$t.unstable_IdlePriority,Oa=null,vn=null;function x0(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(Oa,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:b0,y0=Math.log,v0=Math.LN2;function b0(e){return e>>>=0,e===0?32:31-(y0(e)/v0|0)|0}var us=64,ds=4194304;function Ki(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Ki(l):(s&=a,s!==0&&(r=Ki(s)))}else a=n&~i,a!==0?r=Ki(a):s!==0&&(r=Ki(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-on(t),i=1<<n,r|=e[n],t&=~i;return r}function w0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-on(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=w0(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Ec(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vg(){var e=us;return us<<=1,!(us&4194240)&&(us=64),e}function vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=n}function j0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Wu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Ae=0;function bg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wg,Hu,kg,jg,_g,zc=!1,ps=[],Xn=null,Zn=null,er=null,xo=new Map,yo=new Map,Hn=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tf(e,t){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(t.pointerId)}}function Ri(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=qo(t),t!==null&&Hu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function S0(e,t,n,r,i){switch(t){case"focusin":return Xn=Ri(Xn,e,t,n,r,i),!0;case"dragenter":return Zn=Ri(Zn,e,t,n,r,i),!0;case"mouseover":return er=Ri(er,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return xo.set(s,Ri(xo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yo.set(s,Ri(yo.get(s)||null,e,t,n,r,i)),!0}return!1}function Sg(e){var t=yr(e.target);if(t!==null){var n=Ir(t);if(n!==null){if(t=n.tag,t===13){if(t=fg(n),t!==null){e.blockedOn=t,_g(e.priority,function(){kg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_c=r,n.target.dispatchEvent(r),_c=null}else return t=qo(n),t!==null&&Hu(t),e.blockedOn=n,!1;t.shift()}return!0}function nf(e,t,n){Rs(e)&&n.delete(t)}function C0(){zc=!1,Xn!==null&&Rs(Xn)&&(Xn=null),Zn!==null&&Rs(Zn)&&(Zn=null),er!==null&&Rs(er)&&(er=null),xo.forEach(nf),yo.forEach(nf)}function Mi(e,t){e.blockedOn===t&&(e.blockedOn=null,zc||(zc=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,C0)))}function vo(e){function t(i){return Mi(i,e)}if(0<ps.length){Mi(ps[0],e);for(var n=1;n<ps.length;n++){var r=ps[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xn!==null&&Mi(Xn,e),Zn!==null&&Mi(Zn,e),er!==null&&Mi(er,e),xo.forEach(t),yo.forEach(t),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Sg(n),n.blockedOn===null&&Hn.shift()}var ri=$n.ReactCurrentBatchConfig,na=!0;function N0(e,t,n,r){var i=Ae,s=ri.transition;ri.transition=null;try{Ae=1,qu(e,t,n,r)}finally{Ae=i,ri.transition=s}}function E0(e,t,n,r){var i=Ae,s=ri.transition;ri.transition=null;try{Ae=4,qu(e,t,n,r)}finally{Ae=i,ri.transition=s}}function qu(e,t,n,r){if(na){var i=Tc(e,t,n,r);if(i===null)zl(e,t,r,ra,n),tf(e,r);else if(S0(i,e,t,n,r))r.stopPropagation();else if(tf(e,r),t&4&&-1<_0.indexOf(e)){for(;i!==null;){var s=qo(i);if(s!==null&&wg(s),s=Tc(e,t,n,r),s===null&&zl(e,t,r,ra,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zl(e,t,r,null,n)}}var ra=null;function Tc(e,t,n,r){if(ra=null,e=Uu(r),e=yr(e),e!==null)if(t=Ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function Cg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m0()){case Vu:return 1;case xg:return 4;case ea:case g0:return 16;case yg:return 536870912;default:return 16}default:return 16}}var Jn=null,Ju=null,Ms=null;function Ng(){if(Ms)return Ms;var e,t=Ju,n=t.length,r,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Ms=i.slice(e,1<r?1-r:void 0)}function Is(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fs(){return!0}function rf(){return!1}function Bt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fs:rf,this.isPropagationStopped=rf,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fs)},persist:function(){},isPersistent:fs}),t}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ku=Bt(_i),Ho=Ve({},_i,{view:0,detail:0}),z0=Bt(Ho),bl,wl,Ii,$a=Ve({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(bl=e.screenX-Ii.screenX,wl=e.screenY-Ii.screenY):wl=bl=0,Ii=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),of=Bt($a),T0=Ve({},$a,{dataTransfer:0}),A0=Bt(T0),P0=Ve({},Ho,{relatedTarget:0}),kl=Bt(P0),L0=Ve({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),R0=Bt(L0),M0=Ve({},_i,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I0=Bt(M0),O0=Ve({},_i,{data:0}),sf=Bt(O0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=F0[e])?!!t[e]:!1}function Gu(){return B0}var U0=Ve({},Ho,{key:function(e){if(e.key){var t=$0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Is(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(e){return e.type==="keypress"?Is(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Is(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V0=Bt(U0),W0=Ve({},$a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),af=Bt(W0),H0=Ve({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),q0=Bt(H0),J0=Ve({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=Bt(J0),G0=Ve({},$a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Q0=Bt(G0),Y0=[9,13,27,32],Qu=Ln&&"CompositionEvent"in window,no=null;Ln&&"documentMode"in document&&(no=document.documentMode);var X0=Ln&&"TextEvent"in window&&!no,Eg=Ln&&(!Qu||no&&8<no&&11>=no),lf=" ",cf=!1;function zg(e,t){switch(e){case"keyup":return Y0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function Z0(e,t){switch(e){case"compositionend":return Tg(t);case"keypress":return t.which!==32?null:(cf=!0,lf);case"textInput":return e=t.data,e===lf&&cf?null:e;default:return null}}function eb(e,t){if(Vr)return e==="compositionend"||!Qu&&zg(e,t)?(e=Ng(),Ms=Ju=Jn=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Eg&&t.locale!=="ko"?null:t.data;default:return null}}var tb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!tb[e.type]:t==="textarea"}function Ag(e,t,n,r){lg(r),t=ia(t,"onChange"),0<t.length&&(n=new Ku("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ro=null,bo=null;function nb(e){Ug(e,0)}function Da(e){var t=qr(e);if(tg(t))return e}function rb(e,t){if(e==="change")return t}var Pg=!1;if(Ln){var jl;if(Ln){var _l="oninput"in document;if(!_l){var df=document.createElement("div");df.setAttribute("oninput","return;"),_l=typeof df.oninput=="function"}jl=_l}else jl=!1;Pg=jl&&(!document.documentMode||9<document.documentMode)}function pf(){ro&&(ro.detachEvent("onpropertychange",Lg),bo=ro=null)}function Lg(e){if(e.propertyName==="value"&&Da(bo)){var t=[];Ag(t,bo,e,Uu(e)),pg(nb,t)}}function ib(e,t,n){e==="focusin"?(pf(),ro=t,bo=n,ro.attachEvent("onpropertychange",Lg)):e==="focusout"&&pf()}function ob(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Da(bo)}function sb(e,t){if(e==="click")return Da(t)}function ab(e,t){if(e==="input"||e==="change")return Da(t)}function lb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ln=typeof Object.is=="function"?Object.is:lb;function wo(e,t){if(ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pc.call(t,i)||!ln(e[i],t[i]))return!1}return!0}function ff(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hf(e,t){var n=ff(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ff(n)}}function Rg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mg(){for(var e=window,t=Ys();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ys(e.document)}return t}function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cb(e){var t=Mg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rg(n.ownerDocument.documentElement,n)){if(r!==null&&Yu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=hf(n,s);var a=hf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ub=Ln&&"documentMode"in document&&11>=document.documentMode,Wr=null,Ac=null,io=null,Pc=!1;function mf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pc||Wr==null||Wr!==Ys(r)||(r=Wr,"selectionStart"in r&&Yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&wo(io,r)||(io=r,r=ia(Ac,"onSelect"),0<r.length&&(t=new Ku("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hr={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},Sl={},Ig={};Ln&&(Ig=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Fa(e){if(Sl[e])return Sl[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ig)return Sl[e]=t[n];return e}var Og=Fa("animationend"),$g=Fa("animationiteration"),Dg=Fa("animationstart"),Fg=Fa("transitionend"),Bg=new Map,gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(e,t){Bg.set(e,t),Mr(t,[e])}for(var Cl=0;Cl<gf.length;Cl++){var Nl=gf[Cl],db=Nl.toLowerCase(),pb=Nl[0].toUpperCase()+Nl.slice(1);ur(db,"on"+pb)}ur(Og,"onAnimationEnd");ur($g,"onAnimationIteration");ur(Dg,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Fg,"onTransitionEnd");ui("onMouseEnter",["mouseout","mouseover"]);ui("onMouseLeave",["mouseout","mouseover"]);ui("onPointerEnter",["pointerout","pointerover"]);ui("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gi));function xf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,d0(r,t,void 0,e),e.currentTarget=null}function Ug(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;xf(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;xf(i,l,u),s=c}}}if(Zs)throw e=Nc,Zs=!1,Nc=null,e}function Oe(e,t){var n=t[Oc];n===void 0&&(n=t[Oc]=new Set);var r=e+"__bubble";n.has(r)||(Vg(t,e,2,!1),n.add(r))}function El(e,t,n){var r=0;t&&(r|=4),Vg(n,e,r,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[ms]){e[ms]=!0,Qm.forEach(function(n){n!=="selectionchange"&&(fb.has(n)||El(n,!1,e),El(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,El("selectionchange",!1,t))}}function Vg(e,t,n,r){switch(Cg(t)){case 1:var i=N0;break;case 4:i=E0;break;default:i=qu}n=i.bind(null,t,n,e),i=void 0,!Cc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=yr(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}pg(function(){var u=s,d=Uu(n),p=[];e:{var f=Bg.get(e);if(f!==void 0){var h=Ku,g=e;switch(e){case"keypress":if(Is(n)===0)break e;case"keydown":case"keyup":h=V0;break;case"focusin":g="focus",h=kl;break;case"focusout":g="blur",h=kl;break;case"beforeblur":case"afterblur":h=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=q0;break;case Og:case $g:case Dg:h=R0;break;case Fg:h=K0;break;case"scroll":h=z0;break;case"wheel":h=Q0;break;case"copy":case"cut":case"paste":h=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=af}var v=(t&4)!==0,w=!v&&e==="scroll",y=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,x;m!==null;){x=m;var j=x.stateNode;if(x.tag===5&&j!==null&&(x=j,y!==null&&(j=go(m,y),j!=null&&v.push(jo(m,j,x)))),w)break;m=m.return}0<v.length&&(f=new h(f,g,null,n,d),p.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==_c&&(g=n.relatedTarget||n.fromElement)&&(yr(g)||g[Rn]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?yr(g):null,g!==null&&(w=Ir(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(v=of,j="onMouseLeave",y="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=af,j="onPointerLeave",y="onPointerEnter",m="pointer"),w=h==null?f:qr(h),x=g==null?f:qr(g),f=new v(j,m+"leave",h,n,d),f.target=w,f.relatedTarget=x,j=null,yr(d)===u&&(v=new v(y,m+"enter",g,n,d),v.target=x,v.relatedTarget=w,j=v),w=j,h&&g)t:{for(v=h,y=g,m=0,x=v;x;x=$r(x))m++;for(x=0,j=y;j;j=$r(j))x++;for(;0<m-x;)v=$r(v),m--;for(;0<x-m;)y=$r(y),x--;for(;m--;){if(v===y||y!==null&&v===y.alternate)break t;v=$r(v),y=$r(y)}v=null}else v=null;h!==null&&yf(p,f,h,v,!1),g!==null&&w!==null&&yf(p,w,g,v,!0)}}e:{if(f=u?qr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var E=rb;else if(uf(f))if(Pg)E=ab;else{E=ob;var S=ib}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=sb);if(E&&(E=E(e,u))){Ag(p,E,n,d);break e}S&&S(e,f,u),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&vc(f,"number",f.value)}switch(S=u?qr(u):window,e){case"focusin":(uf(S)||S.contentEditable==="true")&&(Wr=S,Ac=u,io=null);break;case"focusout":io=Ac=Wr=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,mf(p,n,d);break;case"selectionchange":if(ub)break;case"keydown":case"keyup":mf(p,n,d)}var A;if(Qu)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Vr?zg(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Eg&&n.locale!=="ko"&&(Vr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Vr&&(A=Ng()):(Jn=d,Ju="value"in Jn?Jn.value:Jn.textContent,Vr=!0)),S=ia(u,C),0<S.length&&(C=new sf(C,e,null,n,d),p.push({event:C,listeners:S}),A?C.data=A:(A=Tg(n),A!==null&&(C.data=A)))),(A=X0?Z0(e,n):eb(e,n))&&(u=ia(u,"onBeforeInput"),0<u.length&&(d=new sf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=A))}Ug(p,t)})}function jo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=go(e,n),s!=null&&r.unshift(jo(e,s,i)),s=go(e,t),s!=null&&r.push(jo(e,s,i))),e=e.return}return r}function $r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yf(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=go(n,s),c!=null&&a.unshift(jo(n,c,l))):i||(c=go(n,s),c!=null&&a.push(jo(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var hb=/\r\n?/g,mb=/\u0000|\uFFFD/g;function vf(e){return(typeof e=="string"?e:""+e).replace(hb,`
`).replace(mb,"")}function gs(e,t,n){if(t=vf(t),vf(e)!==t&&n)throw Error(ne(425))}function oa(){}var Lc=null,Rc=null;function Mc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,gb=typeof clearTimeout=="function"?clearTimeout:void 0,bf=typeof Promise=="function"?Promise:void 0,xb=typeof queueMicrotask=="function"?queueMicrotask:typeof bf<"u"?function(e){return bf.resolve(null).then(e).catch(yb)}:Ic;function yb(e){setTimeout(function(){throw e})}function Tl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vo(t)}function tr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Si=Math.random().toString(36).slice(2),gn="__reactFiber$"+Si,_o="__reactProps$"+Si,Rn="__reactContainer$"+Si,Oc="__reactEvents$"+Si,vb="__reactListeners$"+Si,bb="__reactHandles$"+Si;function yr(e){var t=e[gn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rn]||n[gn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wf(e);e!==null;){if(n=e[gn])return n;e=wf(e)}return t}e=n,n=e.parentNode}return null}function qo(e){return e=e[gn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ne(33))}function Ba(e){return e[_o]||null}var $c=[],Jr=-1;function dr(e){return{current:e}}function $e(e){0>Jr||(e.current=$c[Jr],$c[Jr]=null,Jr--)}function Me(e,t){Jr++,$c[Jr]=e.current,e.current=t}var lr={},ct=dr(lr),_t=dr(!1),Er=lr;function di(e,t){var n=e.type.contextTypes;if(!n)return lr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function St(e){return e=e.childContextTypes,e!=null}function sa(){$e(_t),$e(ct)}function kf(e,t,n){if(ct.current!==lr)throw Error(ne(168));Me(ct,t),Me(_t,n)}function Wg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(ne(108,i0(e)||"Unknown",i));return Ve({},n,r)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||lr,Er=ct.current,Me(ct,e),Me(_t,_t.current),!0}function jf(e,t,n){var r=e.stateNode;if(!r)throw Error(ne(169));n?(e=Wg(e,t,Er),r.__reactInternalMemoizedMergedChildContext=e,$e(_t),$e(ct),Me(ct,e)):$e(_t),Me(_t,n)}var En=null,Ua=!1,Al=!1;function Hg(e){En===null?En=[e]:En.push(e)}function wb(e){Ua=!0,Hg(e)}function pr(){if(!Al&&En!==null){Al=!0;var e=0,t=Ae;try{var n=En;for(Ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}En=null,Ua=!1}catch(i){throw En!==null&&(En=En.slice(e+1)),gg(Vu,pr),i}finally{Ae=t,Al=!1}}return null}var Kr=[],Gr=0,la=null,ca=0,Vt=[],Wt=0,zr=null,zn=1,Tn="";function mr(e,t){Kr[Gr++]=ca,Kr[Gr++]=la,la=e,ca=t}function qg(e,t,n){Vt[Wt++]=zn,Vt[Wt++]=Tn,Vt[Wt++]=zr,zr=e;var r=zn;e=Tn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,zn=1<<32-on(t)+i|n<<i|r,Tn=s+e}else zn=1<<s|n<<i|r,Tn=e}function Xu(e){e.return!==null&&(mr(e,1),qg(e,1,0))}function Zu(e){for(;e===la;)la=Kr[--Gr],Kr[Gr]=null,ca=Kr[--Gr],Kr[Gr]=null;for(;e===zr;)zr=Vt[--Wt],Vt[Wt]=null,Tn=Vt[--Wt],Vt[Wt]=null,zn=Vt[--Wt],Vt[Wt]=null}var Ot=null,Rt=null,De=!1,tn=null;function Jg(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _f(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ot=e,Rt=tr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ot=e,Rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zr!==null?{id:zn,overflow:Tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ot=e,Rt=null,!0):!1;default:return!1}}function Dc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fc(e){if(De){var t=Rt;if(t){var n=t;if(!_f(e,t)){if(Dc(e))throw Error(ne(418));t=tr(n.nextSibling);var r=Ot;t&&_f(e,t)?Jg(r,n):(e.flags=e.flags&-4097|2,De=!1,Ot=e)}}else{if(Dc(e))throw Error(ne(418));e.flags=e.flags&-4097|2,De=!1,Ot=e}}}function Sf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ot=e}function xs(e){if(e!==Ot)return!1;if(!De)return Sf(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Mc(e.type,e.memoizedProps)),t&&(t=Rt)){if(Dc(e))throw Kg(),Error(ne(418));for(;t;)Jg(e,t),t=tr(t.nextSibling)}if(Sf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ne(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Rt=tr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Rt=null}}else Rt=Ot?tr(e.stateNode.nextSibling):null;return!0}function Kg(){for(var e=Rt;e;)e=tr(e.nextSibling)}function pi(){Rt=Ot=null,De=!1}function ed(e){tn===null?tn=[e]:tn.push(e)}var kb=$n.ReactCurrentBatchConfig;function Oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var r=n.stateNode}if(!r)throw Error(ne(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,e))}return e}function ys(e,t){throw e=Object.prototype.toString.call(t),Error(ne(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cf(e){var t=e._init;return t(e._payload)}function Gg(e){function t(y,m){if(e){var x=y.deletions;x===null?(y.deletions=[m],y.flags|=16):x.push(m)}}function n(y,m){if(!e)return null;for(;m!==null;)t(y,m),m=m.sibling;return null}function r(y,m){for(y=new Map;m!==null;)m.key!==null?y.set(m.key,m):y.set(m.index,m),m=m.sibling;return y}function i(y,m){return y=or(y,m),y.index=0,y.sibling=null,y}function s(y,m,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<m?(y.flags|=2,m):x):(y.flags|=2,m)):(y.flags|=1048576,m)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,m,x,j){return m===null||m.tag!==6?(m=$l(x,y.mode,j),m.return=y,m):(m=i(m,x),m.return=y,m)}function c(y,m,x,j){var E=x.type;return E===Ur?d(y,m,x.props.children,j,x.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Un&&Cf(E)===m.type)?(j=i(m,x.props),j.ref=Oi(y,m,x),j.return=y,j):(j=Vs(x.type,x.key,x.props,null,y.mode,j),j.ref=Oi(y,m,x),j.return=y,j)}function u(y,m,x,j){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=Dl(x,y.mode,j),m.return=y,m):(m=i(m,x.children||[]),m.return=y,m)}function d(y,m,x,j,E){return m===null||m.tag!==7?(m=jr(x,y.mode,j,E),m.return=y,m):(m=i(m,x),m.return=y,m)}function p(y,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=$l(""+m,y.mode,x),m.return=y,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case as:return x=Vs(m.type,m.key,m.props,null,y.mode,x),x.ref=Oi(y,null,m),x.return=y,x;case Br:return m=Dl(m,y.mode,x),m.return=y,m;case Un:var j=m._init;return p(y,j(m._payload),x)}if(Ji(m)||Pi(m))return m=jr(m,y.mode,x,null),m.return=y,m;ys(y,m)}return null}function f(y,m,x,j){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:l(y,m,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case as:return x.key===E?c(y,m,x,j):null;case Br:return x.key===E?u(y,m,x,j):null;case Un:return E=x._init,f(y,m,E(x._payload),j)}if(Ji(x)||Pi(x))return E!==null?null:d(y,m,x,j,null);ys(y,x)}return null}function h(y,m,x,j,E){if(typeof j=="string"&&j!==""||typeof j=="number")return y=y.get(x)||null,l(m,y,""+j,E);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case as:return y=y.get(j.key===null?x:j.key)||null,c(m,y,j,E);case Br:return y=y.get(j.key===null?x:j.key)||null,u(m,y,j,E);case Un:var S=j._init;return h(y,m,x,S(j._payload),E)}if(Ji(j)||Pi(j))return y=y.get(x)||null,d(m,y,j,E,null);ys(m,j)}return null}function g(y,m,x,j){for(var E=null,S=null,A=m,C=m=0,R=null;A!==null&&C<x.length;C++){A.index>C?(R=A,A=null):R=A.sibling;var N=f(y,A,x[C],j);if(N===null){A===null&&(A=R);break}e&&A&&N.alternate===null&&t(y,A),m=s(N,m,C),S===null?E=N:S.sibling=N,S=N,A=R}if(C===x.length)return n(y,A),De&&mr(y,C),E;if(A===null){for(;C<x.length;C++)A=p(y,x[C],j),A!==null&&(m=s(A,m,C),S===null?E=A:S.sibling=A,S=A);return De&&mr(y,C),E}for(A=r(y,A);C<x.length;C++)R=h(A,y,C,x[C],j),R!==null&&(e&&R.alternate!==null&&A.delete(R.key===null?C:R.key),m=s(R,m,C),S===null?E=R:S.sibling=R,S=R);return e&&A.forEach(function(L){return t(y,L)}),De&&mr(y,C),E}function v(y,m,x,j){var E=Pi(x);if(typeof E!="function")throw Error(ne(150));if(x=E.call(x),x==null)throw Error(ne(151));for(var S=E=null,A=m,C=m=0,R=null,N=x.next();A!==null&&!N.done;C++,N=x.next()){A.index>C?(R=A,A=null):R=A.sibling;var L=f(y,A,N.value,j);if(L===null){A===null&&(A=R);break}e&&A&&L.alternate===null&&t(y,A),m=s(L,m,C),S===null?E=L:S.sibling=L,S=L,A=R}if(N.done)return n(y,A),De&&mr(y,C),E;if(A===null){for(;!N.done;C++,N=x.next())N=p(y,N.value,j),N!==null&&(m=s(N,m,C),S===null?E=N:S.sibling=N,S=N);return De&&mr(y,C),E}for(A=r(y,A);!N.done;C++,N=x.next())N=h(A,y,C,N.value,j),N!==null&&(e&&N.alternate!==null&&A.delete(N.key===null?C:N.key),m=s(N,m,C),S===null?E=N:S.sibling=N,S=N);return e&&A.forEach(function(P){return t(y,P)}),De&&mr(y,C),E}function w(y,m,x,j){if(typeof x=="object"&&x!==null&&x.type===Ur&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case as:e:{for(var E=x.key,S=m;S!==null;){if(S.key===E){if(E=x.type,E===Ur){if(S.tag===7){n(y,S.sibling),m=i(S,x.props.children),m.return=y,y=m;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Un&&Cf(E)===S.type){n(y,S.sibling),m=i(S,x.props),m.ref=Oi(y,S,x),m.return=y,y=m;break e}n(y,S);break}else t(y,S);S=S.sibling}x.type===Ur?(m=jr(x.props.children,y.mode,j,x.key),m.return=y,y=m):(j=Vs(x.type,x.key,x.props,null,y.mode,j),j.ref=Oi(y,m,x),j.return=y,y=j)}return a(y);case Br:e:{for(S=x.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(y,m.sibling),m=i(m,x.children||[]),m.return=y,y=m;break e}else{n(y,m);break}else t(y,m);m=m.sibling}m=Dl(x,y.mode,j),m.return=y,y=m}return a(y);case Un:return S=x._init,w(y,m,S(x._payload),j)}if(Ji(x))return g(y,m,x,j);if(Pi(x))return v(y,m,x,j);ys(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(y,m.sibling),m=i(m,x),m.return=y,y=m):(n(y,m),m=$l(x,y.mode,j),m.return=y,y=m),a(y)):n(y,m)}return w}var fi=Gg(!0),Qg=Gg(!1),ua=dr(null),da=null,Qr=null,td=null;function nd(){td=Qr=da=null}function rd(e){var t=ua.current;$e(ua),e._currentValue=t}function Bc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ii(e,t){da=e,td=Qr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(kt=!0),e.firstContext=null)}function Gt(e){var t=e._currentValue;if(td!==e)if(e={context:e,memoizedValue:t,next:null},Qr===null){if(da===null)throw Error(ne(308));Qr=e,da.dependencies={lanes:0,firstContext:e}}else Qr=Qr.next=e;return t}var vr=null;function id(e){vr===null?vr=[e]:vr.push(e)}function Yg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,id(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mn(e,r)}function Mn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vn=!1;function od(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mn(e,n)}return i=r.interleaved,i===null?(t.next=t,id(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mn(e,n)}function Os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wu(e,n)}}function Nf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pa(e,t,n,r){var i=e.updateQueue;Vn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(f=t,h=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){p=g.call(h,p,f);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(h,p,f):g,f==null)break e;p=Ve({},p,f);break e;case 2:Vn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=p):d=d.next=h,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ar|=a,e.lanes=a,e.memoizedState=p}}function Ef(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ne(191,i));i.call(r)}}}var Jo={},bn=dr(Jo),So=dr(Jo),Co=dr(Jo);function br(e){if(e===Jo)throw Error(ne(174));return e}function sd(e,t){switch(Me(Co,t),Me(So,e),Me(bn,Jo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wc(t,e)}$e(bn),Me(bn,t)}function hi(){$e(bn),$e(So),$e(Co)}function Zg(e){br(Co.current);var t=br(bn.current),n=wc(t,e.type);t!==n&&(Me(So,e),Me(bn,n))}function ad(e){So.current===e&&($e(bn),$e(So))}var Be=dr(0);function fa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pl=[];function ld(){for(var e=0;e<Pl.length;e++)Pl[e]._workInProgressVersionPrimary=null;Pl.length=0}var $s=$n.ReactCurrentDispatcher,Ll=$n.ReactCurrentBatchConfig,Tr=0,Ue=null,Ye=null,tt=null,ha=!1,oo=!1,No=0,jb=0;function st(){throw Error(ne(321))}function cd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}function ud(e,t,n,r,i,s){if(Tr=s,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$s.current=e===null||e.memoizedState===null?Nb:Eb,e=n(r,i),oo){s=0;do{if(oo=!1,No=0,25<=s)throw Error(ne(301));s+=1,tt=Ye=null,t.updateQueue=null,$s.current=zb,e=n(r,i)}while(oo)}if($s.current=ma,t=Ye!==null&&Ye.next!==null,Tr=0,tt=Ye=Ue=null,ha=!1,t)throw Error(ne(300));return e}function dd(){var e=No!==0;return No=0,e}function hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Ue.memoizedState=tt=e:tt=tt.next=e,tt}function Qt(){if(Ye===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=tt===null?Ue.memoizedState:tt.next;if(t!==null)tt=t,Ye=e;else{if(e===null)throw Error(ne(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},tt===null?Ue.memoizedState=tt=e:tt=tt.next=e}return tt}function Eo(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=Qt(),n=t.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=e;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Tr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Ue.lanes|=d,Ar|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,ln(r,t.memoizedState)||(kt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ue.lanes|=s,Ar|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ml(e){var t=Qt(),n=t.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);ln(s,t.memoizedState)||(kt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ex(){}function tx(e,t){var n=Ue,r=Qt(),i=t(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,kt=!0),r=r.queue,pd(ix.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,zo(9,rx.bind(null,n,r,i,t),void 0,null),nt===null)throw Error(ne(349));Tr&30||nx(n,t,i)}return i}function nx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rx(e,t,n,r){t.value=n,t.getSnapshot=r,ox(t)&&sx(e)}function ix(e,t,n){return n(function(){ox(t)&&sx(e)})}function ox(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ln(e,n)}catch{return!0}}function sx(e){var t=Mn(e,1);t!==null&&sn(t,e,1,-1)}function zf(e){var t=hn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:e},t.queue=e,e=e.dispatch=Cb.bind(null,Ue,e),[t.memoizedState,e]}function zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ax(){return Qt().memoizedState}function Ds(e,t,n,r){var i=hn();Ue.flags|=e,i.memoizedState=zo(1|t,n,void 0,r===void 0?null:r)}function Va(e,t,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var a=Ye.memoizedState;if(s=a.destroy,r!==null&&cd(r,a.deps)){i.memoizedState=zo(t,n,s,r);return}}Ue.flags|=e,i.memoizedState=zo(1|t,n,s,r)}function Tf(e,t){return Ds(8390656,8,e,t)}function pd(e,t){return Va(2048,8,e,t)}function lx(e,t){return Va(4,2,e,t)}function cx(e,t){return Va(4,4,e,t)}function ux(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dx(e,t,n){return n=n!=null?n.concat([e]):null,Va(4,4,ux.bind(null,t,e),n)}function fd(){}function px(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fx(e,t){var n=Qt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hx(e,t,n){return Tr&21?(ln(n,t)||(n=vg(),Ue.lanes|=n,Ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,kt=!0),e.memoizedState=n)}function _b(e,t){var n=Ae;Ae=n!==0&&4>n?n:4,e(!0);var r=Ll.transition;Ll.transition={};try{e(!1),t()}finally{Ae=n,Ll.transition=r}}function mx(){return Qt().memoizedState}function Sb(e,t,n){var r=ir(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gx(e))xx(t,n);else if(n=Yg(e,t,n,r),n!==null){var i=ht();sn(n,e,r,i),yx(n,t,r)}}function Cb(e,t,n){var r=ir(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gx(e))xx(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,a)){var c=t.interleaved;c===null?(i.next=i,id(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Yg(e,t,i,r),n!==null&&(i=ht(),sn(n,e,r,i),yx(n,t,r))}}function gx(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function xx(e,t){oo=ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wu(e,n)}}var ma={readContext:Gt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Nb={readContext:Gt,useCallback:function(e,t){return hn().memoizedState=[e,t===void 0?null:t],e},useContext:Gt,useEffect:Tf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ds(4194308,4,ux.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ds(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ds(4,2,e,t)},useMemo:function(e,t){var n=hn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=hn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sb.bind(null,Ue,e),[r.memoizedState,e]},useRef:function(e){var t=hn();return e={current:e},t.memoizedState=e},useState:zf,useDebugValue:fd,useDeferredValue:function(e){return hn().memoizedState=e},useTransition:function(){var e=zf(!1),t=e[0];return e=_b.bind(null,e[1]),hn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ue,i=hn();if(De){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=t(),nt===null)throw Error(ne(349));Tr&30||nx(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Tf(ix.bind(null,r,s,e),[e]),r.flags|=2048,zo(9,rx.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=hn(),t=nt.identifierPrefix;if(De){var n=Tn,r=zn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=No++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jb++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Eb={readContext:Gt,useCallback:px,useContext:Gt,useEffect:pd,useImperativeHandle:dx,useInsertionEffect:lx,useLayoutEffect:cx,useMemo:fx,useReducer:Rl,useRef:ax,useState:function(){return Rl(Eo)},useDebugValue:fd,useDeferredValue:function(e){var t=Qt();return hx(t,Ye.memoizedState,e)},useTransition:function(){var e=Rl(Eo)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:ex,useSyncExternalStore:tx,useId:mx,unstable_isNewReconciler:!1},zb={readContext:Gt,useCallback:px,useContext:Gt,useEffect:pd,useImperativeHandle:dx,useInsertionEffect:lx,useLayoutEffect:cx,useMemo:fx,useReducer:Ml,useRef:ax,useState:function(){return Ml(Eo)},useDebugValue:fd,useDeferredValue:function(e){var t=Qt();return Ye===null?t.memoizedState=e:hx(t,Ye.memoizedState,e)},useTransition:function(){var e=Ml(Eo)[0],t=Qt().memoizedState;return[e,t]},useMutableSource:ex,useSyncExternalStore:tx,useId:mx,unstable_isNewReconciler:!1};function Zt(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Uc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wa={isMounted:function(e){return(e=e._reactInternals)?Ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ht(),i=ir(e),s=An(r,i);s.payload=t,n!=null&&(s.callback=n),t=nr(e,s,i),t!==null&&(sn(t,e,i,r),Os(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ht(),i=ir(e),s=An(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=nr(e,s,i),t!==null&&(sn(t,e,i,r),Os(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ht(),r=ir(e),i=An(n,r);i.tag=2,t!=null&&(i.callback=t),t=nr(e,i,r),t!==null&&(sn(t,e,r,n),Os(t,e,r))}};function Af(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!wo(n,r)||!wo(i,s):!0}function vx(e,t,n){var r=!1,i=lr,s=t.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=St(t)?Er:ct.current,r=t.contextTypes,s=(r=r!=null)?di(e,i):lr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Pf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wa.enqueueReplaceState(t,t.state,null)}function Vc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},od(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=St(t)?Er:ct.current,i.context=di(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Uc(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wa.enqueueReplaceState(i,i.state,null),pa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mi(e,t){try{var n="",r=t;do n+=r0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Wc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tb=typeof WeakMap=="function"?WeakMap:Map;function bx(e,t,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xa||(xa=!0,eu=r),Wc(e,t)},n}function wx(e,t,n){n=An(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wc(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wc(e,t),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Lf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Wb.bind(null,e,t,n),t.then(e,e))}function Rf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=An(-1,1),t.tag=2,nr(n,t,1))),n.lanes|=1),e)}var Ab=$n.ReactCurrentOwner,kt=!1;function pt(e,t,n,r){t.child=e===null?Qg(t,null,n,r):fi(t,e.child,n,r)}function If(e,t,n,r,i){n=n.render;var s=t.ref;return ii(t,i),r=ud(e,t,n,r,s,i),n=dd(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,In(e,t,i)):(De&&n&&Xu(t),t.flags|=1,pt(e,t,r,i),t.child)}function Of(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!wd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,kx(e,t,s,r,i)):(e=Vs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:wo,n(a,r)&&e.ref===t.ref)return In(e,t,i)}return t.flags|=1,e=or(s,r),e.ref=t.ref,e.return=t,t.child=e}function kx(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(wo(s,r)&&e.ref===t.ref)if(kt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(kt=!0);else return t.lanes=e.lanes,In(e,t,i)}return Hc(e,t,n,r,i)}function jx(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Xr,At),At|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(Xr,At),At|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(Xr,At),At|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Me(Xr,At),At|=r;return pt(e,t,i,n),t.child}function _x(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hc(e,t,n,r,i){var s=St(n)?Er:ct.current;return s=di(t,s),ii(t,i),n=ud(e,t,n,r,s,i),r=dd(),e!==null&&!kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,In(e,t,i)):(De&&r&&Xu(t),t.flags|=1,pt(e,t,n,i),t.child)}function $f(e,t,n,r,i){if(St(n)){var s=!0;aa(t)}else s=!1;if(ii(t,i),t.stateNode===null)Fs(e,t),vx(t,n,r),Vc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gt(u):(u=St(n)?Er:ct.current,u=di(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Pf(t,a,r,u),Vn=!1;var f=t.memoizedState;a.state=f,pa(t,r,a,i),c=t.memoizedState,l!==r||f!==c||_t.current||Vn?(typeof d=="function"&&(Uc(t,n,d,r),c=t.memoizedState),(l=Vn||Af(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Xg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Zt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Gt(c):(c=St(n)?Er:ct.current,c=di(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Pf(t,a,r,c),Vn=!1,f=t.memoizedState,a.state=f,pa(t,r,a,i);var g=t.memoizedState;l!==p||f!==g||_t.current||Vn?(typeof h=="function"&&(Uc(t,n,h,r),g=t.memoizedState),(u=Vn||Af(t,n,u,r,f,g,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return qc(e,t,n,r,s,i)}function qc(e,t,n,r,i,s){_x(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&jf(t,n,!1),In(e,t,s);r=t.stateNode,Ab.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=fi(t,e.child,null,s),t.child=fi(t,null,l,s)):pt(e,t,l,s),t.memoizedState=r.state,i&&jf(t,n,!0),t.child}function Sx(e){var t=e.stateNode;t.pendingContext?kf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kf(e,t.context,!1),sd(e,t.containerInfo)}function Df(e,t,n,r,i){return pi(),ed(i),t.flags|=256,pt(e,t,n,r),t.child}var Jc={dehydrated:null,treeContext:null,retryLane:0};function Kc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cx(e,t,n){var r=t.pendingProps,i=Be.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Me(Be,i&1),e===null)return Fc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ja(a,r,0,null),e=jr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Kc(n),t.memoizedState=Jc,e):hd(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Pb(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=or(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=or(l,s):(s=jr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Kc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Jc,r}return s=e.child,e=s.sibling,r=or(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hd(e,t){return t=Ja({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vs(e,t,n,r){return r!==null&&ed(r),fi(t,e.child,null,n),e=hd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pb(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Il(Error(ne(422))),vs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ja({mode:"visible",children:r.children},i,0,null),s=jr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&fi(t,e.child,null,a),t.child.memoizedState=Kc(a),t.memoizedState=Jc,s);if(!(t.mode&1))return vs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(ne(419)),r=Il(s,r,void 0),vs(e,t,a,r)}if(l=(a&e.childLanes)!==0,kt||l){if(r=nt,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mn(e,i),sn(r,e,i,-1))}return bd(),r=Il(Error(ne(421))),vs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hb.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Rt=tr(i.nextSibling),Ot=t,De=!0,tn=null,e!==null&&(Vt[Wt++]=zn,Vt[Wt++]=Tn,Vt[Wt++]=zr,zn=e.id,Tn=e.overflow,zr=t),t=hd(t,r.children),t.flags|=4096,t)}function Ff(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bc(e.return,t,n)}function Ol(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Nx(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(pt(e,t,r.children,n),r=Be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ff(e,n,t);else if(e.tag===19)Ff(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(Be,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ol(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ol(t,!0,n,null,s);break;case"together":Ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function In(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ne(153));if(t.child!==null){for(e=t.child,n=or(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=or(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lb(e,t,n){switch(t.tag){case 3:Sx(t),pi();break;case 5:Zg(t);break;case 1:St(t.type)&&aa(t);break;case 4:sd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Me(ua,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(Be,Be.current&1),t.flags|=128,null):n&t.child.childLanes?Cx(e,t,n):(Me(Be,Be.current&1),e=In(e,t,n),e!==null?e.sibling:null);Me(Be,Be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Nx(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(Be,Be.current),r)break;return null;case 22:case 23:return t.lanes=0,jx(e,t,n)}return In(e,t,n)}var Ex,Gc,zx,Tx;Ex=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gc=function(){};zx=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,br(bn.current);var s=null;switch(n){case"input":i=xc(e,i),r=xc(e,r),s=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),s=[];break;case"textarea":i=bc(e,i),r=bc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oa)}kc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ho.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ho.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Oe("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Tx=function(e,t,n,r){n!==r&&(t.flags|=4)};function $i(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function at(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rb(e,t,n){var r=t.pendingProps;switch(Zu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(t),null;case 1:return St(t.type)&&sa(),at(t),null;case 3:return r=t.stateNode,hi(),$e(_t),$e(ct),ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(xs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(ru(tn),tn=null))),Gc(e,t),at(t),null;case 5:ad(t);var i=br(Co.current);if(n=t.type,e!==null&&t.stateNode!=null)zx(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ne(166));return at(t),null}if(e=br(bn.current),xs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[gn]=t,r[_o]=s,e=(t.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<Gi.length;i++)Oe(Gi[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":Kp(r,s),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Oe("invalid",r);break;case"textarea":Qp(r,s),Oe("invalid",r)}kc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&gs(r.textContent,l,e),i=["children",""+l]):ho.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Oe("scroll",r)}switch(n){case"input":ls(r),Gp(r,s,!0);break;case"textarea":ls(r),Yp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=oa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ig(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[gn]=t,e[_o]=r,Ex(e,t,!1,!1),t.stateNode=e;e:{switch(a=jc(n,r),n){case"dialog":Oe("cancel",e),Oe("close",e),i=r;break;case"iframe":case"object":case"embed":Oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gi.length;i++)Oe(Gi[i],e);i=r;break;case"source":Oe("error",e),i=r;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),i=r;break;case"details":Oe("toggle",e),i=r;break;case"input":Kp(e,r),i=xc(e,r),Oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Oe("invalid",e);break;case"textarea":Qp(e,r),i=bc(e,r),Oe("invalid",e);break;default:i=r}kc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?ag(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&og(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&mo(e,c):typeof c=="number"&&mo(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ho.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Oe("scroll",e):c!=null&&$u(e,s,c,a))}switch(n){case"input":ls(e),Gp(e,r,!1);break;case"textarea":ls(e),Yp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ar(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ei(e,!!r.multiple,s,!1):r.defaultValue!=null&&ei(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return at(t),null;case 6:if(e&&t.stateNode!=null)Tx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ne(166));if(n=br(Co.current),br(bn.current),xs(t)){if(r=t.stateNode,n=t.memoizedProps,r[gn]=t,(s=r.nodeValue!==n)&&(e=Ot,e!==null))switch(e.tag){case 3:gs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=t,t.stateNode=r}return at(t),null;case 13:if($e(Be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Rt!==null&&t.mode&1&&!(t.flags&128))Kg(),pi(),t.flags|=98560,s=!1;else if(s=xs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(ne(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[gn]=t}else pi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;at(t),s=!1}else tn!==null&&(ru(tn),tn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Be.current&1?Xe===0&&(Xe=3):bd())),t.updateQueue!==null&&(t.flags|=4),at(t),null);case 4:return hi(),Gc(e,t),e===null&&ko(t.stateNode.containerInfo),at(t),null;case 10:return rd(t.type._context),at(t),null;case 17:return St(t.type)&&sa(),at(t),null;case 19:if($e(Be),s=t.memoizedState,s===null)return at(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)$i(s,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=fa(e),a!==null){for(t.flags|=128,$i(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(Be,Be.current&1|2),t.child}e=e.sibling}s.tail!==null&&He()>gi&&(t.flags|=128,r=!0,$i(s,!1),t.lanes=4194304)}else{if(!r)if(e=fa(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$i(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!De)return at(t),null}else 2*He()-s.renderingStartTime>gi&&n!==1073741824&&(t.flags|=128,r=!0,$i(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=He(),t.sibling=null,n=Be.current,Me(Be,r?n&1|2:n&1),t):(at(t),null);case 22:case 23:return vd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?At&1073741824&&(at(t),t.subtreeFlags&6&&(t.flags|=8192)):at(t),null;case 24:return null;case 25:return null}throw Error(ne(156,t.tag))}function Mb(e,t){switch(Zu(t),t.tag){case 1:return St(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hi(),$e(_t),$e(ct),ld(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ad(t),null;case 13:if($e(Be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ne(340));pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $e(Be),null;case 4:return hi(),null;case 10:return rd(t.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var bs=!1,lt=!1,Ib=typeof WeakSet=="function"?WeakSet:Set,ue=null;function Yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(e,t,r)}else n.current=null}function Qc(e,t,n){try{n()}catch(r){We(e,t,r)}}var Bf=!1;function Ob(e,t){if(Lc=na,e=Mg(),Yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rc={focusedElem:e,selectionRange:n},na=!1,ue=t;ue!==null;)if(t=ue,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ue=e;else for(;ue!==null;){t=ue;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,w=g.memoizedState,y=t.stateNode,m=y.getSnapshotBeforeUpdate(t.elementType===t.type?v:Zt(t.type,v),w);y.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(j){We(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,ue=e;break}ue=t.return}return g=Bf,Bf=!1,g}function so(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qc(t,n,s)}i=i.next}while(i!==r)}}function Ha(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ax(e){var t=e.alternate;t!==null&&(e.alternate=null,Ax(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gn],delete t[_o],delete t[Oc],delete t[vb],delete t[bb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Px(e){return e.tag===5||e.tag===3||e.tag===4}function Uf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Px(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(r!==4&&(e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}var rt=null,en=!1;function Fn(e,t,n){for(n=n.child;n!==null;)Lx(e,t,n),n=n.sibling}function Lx(e,t,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(Oa,n)}catch{}switch(n.tag){case 5:lt||Yr(n,t);case 6:var r=rt,i=en;rt=null,Fn(e,t,n),rt=r,en=i,rt!==null&&(en?(e=rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(en?(e=rt,n=n.stateNode,e.nodeType===8?Tl(e.parentNode,n):e.nodeType===1&&Tl(e,n),vo(e)):Tl(rt,n.stateNode));break;case 4:r=rt,i=en,rt=n.stateNode.containerInfo,en=!0,Fn(e,t,n),rt=r,en=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qc(n,t,a),i=i.next}while(i!==r)}Fn(e,t,n);break;case 1:if(!lt&&(Yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){We(n,t,l)}Fn(e,t,n);break;case 21:Fn(e,t,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Fn(e,t,n),lt=r):Fn(e,t,n);break;default:Fn(e,t,n)}}function Vf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ib),t.forEach(function(r){var i=qb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,en=!1;break e;case 3:rt=l.stateNode.containerInfo,en=!0;break e;case 4:rt=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(rt===null)throw Error(ne(160));Lx(s,a,i),rt=null,en=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){We(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rx(t,e),t=t.sibling}function Rx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xt(t,e),fn(e),r&4){try{so(3,e,e.return),Ha(3,e)}catch(v){We(e,e.return,v)}try{so(5,e,e.return)}catch(v){We(e,e.return,v)}}break;case 1:Xt(t,e),fn(e),r&512&&n!==null&&Yr(n,n.return);break;case 5:if(Xt(t,e),fn(e),r&512&&n!==null&&Yr(n,n.return),e.flags&32){var i=e.stateNode;try{mo(i,"")}catch(v){We(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ng(i,s),jc(l,a);var u=jc(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?ag(i,p):d==="dangerouslySetInnerHTML"?og(i,p):d==="children"?mo(i,p):$u(i,d,p,u)}switch(l){case"input":yc(i,s);break;case"textarea":rg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?ei(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?ei(i,!!s.multiple,s.defaultValue,!0):ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[_o]=s}catch(v){We(e,e.return,v)}}break;case 6:if(Xt(t,e),fn(e),r&4){if(e.stateNode===null)throw Error(ne(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){We(e,e.return,v)}}break;case 3:if(Xt(t,e),fn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(v){We(e,e.return,v)}break;case 4:Xt(t,e),fn(e);break;case 13:Xt(t,e),fn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(xd=He())),r&4&&Vf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(lt=(u=lt)||d,Xt(t,e),lt=u):Xt(t,e),fn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ue=e,d=e.child;d!==null;){for(p=ue=d;ue!==null;){switch(f=ue,h=f.child,f.tag){case 0:case 11:case 14:case 15:so(4,f,f.return);break;case 1:Yr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){We(r,n,v)}}break;case 5:Yr(f,f.return);break;case 22:if(f.memoizedState!==null){Hf(p);continue}}h!==null?(h.return=f,ue=h):Hf(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=sg("display",a))}catch(v){We(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){We(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Xt(t,e),fn(e),r&4&&Vf(e);break;case 21:break;default:Xt(t,e),fn(e)}}function fn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Px(n)){var r=n;break e}n=n.return}throw Error(ne(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mo(i,""),r.flags&=-33);var s=Uf(e);Zc(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Uf(e);Xc(e,l,a);break;default:throw Error(ne(161))}}catch(c){We(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $b(e,t,n){ue=e,Mx(e)}function Mx(e,t,n){for(var r=(e.mode&1)!==0;ue!==null;){var i=ue,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||bs;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||lt;l=bs;var u=lt;if(bs=a,(lt=c)&&!u)for(ue=i;ue!==null;)a=ue,c=a.child,a.tag===22&&a.memoizedState!==null?qf(i):c!==null?(c.return=a,ue=c):qf(i);for(;s!==null;)ue=s,Mx(s),s=s.sibling;ue=i,bs=l,lt=u}Wf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ue=s):Wf(e)}}function Wf(e){for(;ue!==null;){var t=ue;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:lt||Ha(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ef(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ef(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&vo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}lt||t.flags&512&&Yc(t)}catch(f){We(t,t.return,f)}}if(t===e){ue=null;break}if(n=t.sibling,n!==null){n.return=t.return,ue=n;break}ue=t.return}}function Hf(e){for(;ue!==null;){var t=ue;if(t===e){ue=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ue=n;break}ue=t.return}}function qf(e){for(;ue!==null;){var t=ue;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ha(4,t)}catch(c){We(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){We(t,i,c)}}var s=t.return;try{Yc(t)}catch(c){We(t,s,c)}break;case 5:var a=t.return;try{Yc(t)}catch(c){We(t,a,c)}}}catch(c){We(t,t.return,c)}if(t===e){ue=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ue=l;break}ue=t.return}}var Db=Math.ceil,ga=$n.ReactCurrentDispatcher,md=$n.ReactCurrentOwner,Kt=$n.ReactCurrentBatchConfig,Ne=0,nt=null,Ge=null,it=0,At=0,Xr=dr(0),Xe=0,To=null,Ar=0,qa=0,gd=0,ao=null,wt=null,xd=0,gi=1/0,Nn=null,xa=!1,eu=null,rr=null,ws=!1,Kn=null,ya=0,lo=0,tu=null,Bs=-1,Us=0;function ht(){return Ne&6?He():Bs!==-1?Bs:Bs=He()}function ir(e){return e.mode&1?Ne&2&&it!==0?it&-it:kb.transition!==null?(Us===0&&(Us=vg()),Us):(e=Ae,e!==0||(e=window.event,e=e===void 0?16:Cg(e.type)),e):1}function sn(e,t,n,r){if(50<lo)throw lo=0,tu=null,Error(ne(185));Wo(e,n,r),(!(Ne&2)||e!==nt)&&(e===nt&&(!(Ne&2)&&(qa|=n),Xe===4&&qn(e,it)),Ct(e,r),n===1&&Ne===0&&!(t.mode&1)&&(gi=He()+500,Ua&&pr()))}function Ct(e,t){var n=e.callbackNode;k0(e,t);var r=ta(e,e===nt?it:0);if(r===0)n!==null&&ef(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ef(n),t===1)e.tag===0?wb(Jf.bind(null,e)):Hg(Jf.bind(null,e)),xb(function(){!(Ne&6)&&pr()}),n=null;else{switch(bg(r)){case 1:n=Vu;break;case 4:n=xg;break;case 16:n=ea;break;case 536870912:n=yg;break;default:n=ea}n=Vx(n,Ix.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ix(e,t){if(Bs=-1,Us=0,Ne&6)throw Error(ne(327));var n=e.callbackNode;if(oi()&&e.callbackNode!==n)return null;var r=ta(e,e===nt?it:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=va(e,r);else{t=r;var i=Ne;Ne|=2;var s=$x();(nt!==e||it!==t)&&(Nn=null,gi=He()+500,kr(e,t));do try{Ub();break}catch(l){Ox(e,l)}while(!0);nd(),ga.current=s,Ne=i,Ge!==null?t=0:(nt=null,it=0,t=Xe)}if(t!==0){if(t===2&&(i=Ec(e),i!==0&&(r=i,t=nu(e,i))),t===1)throw n=To,kr(e,0),qn(e,r),Ct(e,He()),n;if(t===6)qn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Fb(i)&&(t=va(e,r),t===2&&(s=Ec(e),s!==0&&(r=s,t=nu(e,s))),t===1))throw n=To,kr(e,0),qn(e,r),Ct(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(ne(345));case 2:gr(e,wt,Nn);break;case 3:if(qn(e,r),(r&130023424)===r&&(t=xd+500-He(),10<t)){if(ta(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ht(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ic(gr.bind(null,e,wt,Nn),t);break}gr(e,wt,Nn);break;case 4:if(qn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-on(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Db(r/1960))-r,10<r){e.timeoutHandle=Ic(gr.bind(null,e,wt,Nn),r);break}gr(e,wt,Nn);break;case 5:gr(e,wt,Nn);break;default:throw Error(ne(329))}}}return Ct(e,He()),e.callbackNode===n?Ix.bind(null,e):null}function nu(e,t){var n=ao;return e.current.memoizedState.isDehydrated&&(kr(e,t).flags|=256),e=va(e,t),e!==2&&(t=wt,wt=n,t!==null&&ru(t)),e}function ru(e){wt===null?wt=e:wt.push.apply(wt,e)}function Fb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qn(e,t){for(t&=~gd,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function Jf(e){if(Ne&6)throw Error(ne(327));oi();var t=ta(e,0);if(!(t&1))return Ct(e,He()),null;var n=va(e,t);if(e.tag!==0&&n===2){var r=Ec(e);r!==0&&(t=r,n=nu(e,r))}if(n===1)throw n=To,kr(e,0),qn(e,t),Ct(e,He()),n;if(n===6)throw Error(ne(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gr(e,wt,Nn),Ct(e,He()),null}function yd(e,t){var n=Ne;Ne|=1;try{return e(t)}finally{Ne=n,Ne===0&&(gi=He()+500,Ua&&pr())}}function Pr(e){Kn!==null&&Kn.tag===0&&!(Ne&6)&&oi();var t=Ne;Ne|=1;var n=Kt.transition,r=Ae;try{if(Kt.transition=null,Ae=1,e)return e()}finally{Ae=r,Kt.transition=n,Ne=t,!(Ne&6)&&pr()}}function vd(){At=Xr.current,$e(Xr)}function kr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,gb(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(Zu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:hi(),$e(_t),$e(ct),ld();break;case 5:ad(r);break;case 4:hi();break;case 13:$e(Be);break;case 19:$e(Be);break;case 10:rd(r.type._context);break;case 22:case 23:vd()}n=n.return}if(nt=e,Ge=e=or(e.current,null),it=At=t,Xe=0,To=null,gd=qa=Ar=0,wt=ao=null,vr!==null){for(t=0;t<vr.length;t++)if(n=vr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}vr=null}return e}function Ox(e,t){do{var n=Ge;try{if(nd(),$s.current=ma,ha){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ha=!1}if(Tr=0,tt=Ye=Ue=null,oo=!1,No=0,md.current=null,n===null||n.return===null){Xe=1,To=t,Ge=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=it,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Rf(a);if(h!==null){h.flags&=-257,Mf(h,a,l,s,t),h.mode&1&&Lf(s,u,t),t=h,c=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(c),t.updateQueue=v}else g.add(c);break e}else{if(!(t&1)){Lf(s,u,t),bd();break e}c=Error(ne(426))}}else if(De&&l.mode&1){var w=Rf(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Mf(w,a,l,s,t),ed(mi(c,l));break e}}s=c=mi(c,l),Xe!==4&&(Xe=2),ao===null?ao=[s]:ao.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=bx(s,c,t);Nf(s,y);break e;case 1:l=c;var m=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(rr===null||!rr.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=wx(s,l,t);Nf(s,j);break e}}s=s.return}while(s!==null)}Fx(n)}catch(E){t=E,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function $x(){var e=ga.current;return ga.current=ma,e===null?ma:e}function bd(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),nt===null||!(Ar&268435455)&&!(qa&268435455)||qn(nt,it)}function va(e,t){var n=Ne;Ne|=2;var r=$x();(nt!==e||it!==t)&&(Nn=null,kr(e,t));do try{Bb();break}catch(i){Ox(e,i)}while(!0);if(nd(),Ne=n,ga.current=r,Ge!==null)throw Error(ne(261));return nt=null,it=0,Xe}function Bb(){for(;Ge!==null;)Dx(Ge)}function Ub(){for(;Ge!==null&&!f0();)Dx(Ge)}function Dx(e){var t=Ux(e.alternate,e,At);e.memoizedProps=e.pendingProps,t===null?Fx(e):Ge=t,md.current=null}function Fx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mb(n,t),n!==null){n.flags&=32767,Ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ge=null;return}}else if(n=Rb(n,t,At),n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Xe===0&&(Xe=5)}function gr(e,t,n){var r=Ae,i=Kt.transition;try{Kt.transition=null,Ae=1,Vb(e,t,n,r)}finally{Kt.transition=i,Ae=r}return null}function Vb(e,t,n,r){do oi();while(Kn!==null);if(Ne&6)throw Error(ne(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ne(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(j0(e,s),e===nt&&(Ge=nt=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ws||(ws=!0,Vx(ea,function(){return oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kt.transition,Kt.transition=null;var a=Ae;Ae=1;var l=Ne;Ne|=4,md.current=null,Ob(e,n),Rx(n,e),cb(Rc),na=!!Lc,Rc=Lc=null,e.current=n,$b(n),h0(),Ne=l,Ae=a,Kt.transition=s}else e.current=n;if(ws&&(ws=!1,Kn=e,ya=i),s=e.pendingLanes,s===0&&(rr=null),x0(n.stateNode),Ct(e,He()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xa)throw xa=!1,e=eu,eu=null,e;return ya&1&&e.tag!==0&&oi(),s=e.pendingLanes,s&1?e===tu?lo++:(lo=0,tu=e):lo=0,pr(),null}function oi(){if(Kn!==null){var e=bg(ya),t=Kt.transition,n=Ae;try{if(Kt.transition=null,Ae=16>e?16:e,Kn===null)var r=!1;else{if(e=Kn,Kn=null,ya=0,Ne&6)throw Error(ne(331));var i=Ne;for(Ne|=4,ue=e.current;ue!==null;){var s=ue,a=s.child;if(ue.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ue=u;ue!==null;){var d=ue;switch(d.tag){case 0:case 11:case 15:so(8,d,s)}var p=d.child;if(p!==null)p.return=d,ue=p;else for(;ue!==null;){d=ue;var f=d.sibling,h=d.return;if(Ax(d),d===u){ue=null;break}if(f!==null){f.return=h,ue=f;break}ue=h}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}ue=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ue=a;else e:for(;ue!==null;){if(s=ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:so(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,ue=y;break e}ue=s.return}}var m=e.current;for(ue=m;ue!==null;){a=ue;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ue=x;else e:for(a=m;ue!==null;){if(l=ue,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ha(9,l)}}catch(E){We(l,l.return,E)}if(l===a){ue=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,ue=j;break e}ue=l.return}}if(Ne=i,pr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(Oa,e)}catch{}r=!0}return r}finally{Ae=n,Kt.transition=t}}return!1}function Kf(e,t,n){t=mi(n,t),t=bx(e,t,1),e=nr(e,t,1),t=ht(),e!==null&&(Wo(e,1,t),Ct(e,t))}function We(e,t,n){if(e.tag===3)Kf(e,e,n);else for(;t!==null;){if(t.tag===3){Kf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){e=mi(n,e),e=wx(t,e,1),t=nr(t,e,1),e=ht(),t!==null&&(Wo(t,1,e),Ct(t,e));break}}t=t.return}}function Wb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ht(),e.pingedLanes|=e.suspendedLanes&n,nt===e&&(it&n)===n&&(Xe===4||Xe===3&&(it&130023424)===it&&500>He()-xd?kr(e,0):gd|=n),Ct(e,t)}function Bx(e,t){t===0&&(e.mode&1?(t=ds,ds<<=1,!(ds&130023424)&&(ds=4194304)):t=1);var n=ht();e=Mn(e,t),e!==null&&(Wo(e,t,n),Ct(e,n))}function Hb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bx(e,n)}function qb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ne(314))}r!==null&&r.delete(t),Bx(e,n)}var Ux;Ux=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_t.current)kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return kt=!1,Lb(e,t,n);kt=!!(e.flags&131072)}else kt=!1,De&&t.flags&1048576&&qg(t,ca,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fs(e,t),e=t.pendingProps;var i=di(t,ct.current);ii(t,n),i=ud(null,t,r,e,i,n);var s=dd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,St(r)?(s=!0,aa(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,od(t),i.updater=Wa,t.stateNode=i,i._reactInternals=t,Vc(t,r,e,n),t=qc(null,t,r,!0,s,n)):(t.tag=0,De&&s&&Xu(t),pt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Kb(r),e=Zt(r,e),i){case 0:t=Hc(null,t,r,e,n);break e;case 1:t=$f(null,t,r,e,n);break e;case 11:t=If(null,t,r,e,n);break e;case 14:t=Of(null,t,r,Zt(r.type,e),n);break e}throw Error(ne(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),Hc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),$f(e,t,r,i,n);case 3:e:{if(Sx(t),e===null)throw Error(ne(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Xg(e,t),pa(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=mi(Error(ne(423)),t),t=Df(e,t,r,n,i);break e}else if(r!==i){i=mi(Error(ne(424)),t),t=Df(e,t,r,n,i);break e}else for(Rt=tr(t.stateNode.containerInfo.firstChild),Ot=t,De=!0,tn=null,n=Qg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){t=In(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return Zg(t),e===null&&Fc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,Mc(r,i)?a=null:s!==null&&Mc(r,s)&&(t.flags|=32),_x(e,t),pt(e,t,a,n),t.child;case 6:return e===null&&Fc(t),null;case 13:return Cx(e,t,n);case 4:return sd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fi(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),If(e,t,r,i,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Me(ua,r._currentValue),r._currentValue=a,s!==null)if(ln(s.value,a)){if(s.children===i.children&&!_t.current){t=In(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=An(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Bc(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Bc(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}pt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ii(t,n),i=Gt(i),r=r(i),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,i=Zt(r,t.pendingProps),i=Zt(r.type,i),Of(e,t,r,i,n);case 15:return kx(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Zt(r,i),Fs(e,t),t.tag=1,St(r)?(e=!0,aa(t)):e=!1,ii(t,n),vx(t,r,i),Vc(t,r,i,n),qc(null,t,r,!0,e,n);case 19:return Nx(e,t,n);case 22:return jx(e,t,n)}throw Error(ne(156,t.tag))};function Vx(e,t){return gg(e,t)}function Jb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,r){return new Jb(e,t,n,r)}function wd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Kb(e){if(typeof e=="function")return wd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fu)return 11;if(e===Bu)return 14}return 2}function or(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vs(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")wd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ur:return jr(n.children,i,s,t);case Du:a=8,i|=8;break;case fc:return e=qt(12,n,t,i|2),e.elementType=fc,e.lanes=s,e;case hc:return e=qt(13,n,t,i),e.elementType=hc,e.lanes=s,e;case mc:return e=qt(19,n,t,i),e.elementType=mc,e.lanes=s,e;case Zm:return Ja(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ym:a=10;break e;case Xm:a=9;break e;case Fu:a=11;break e;case Bu:a=14;break e;case Un:a=16,r=null;break e}throw Error(ne(130,e==null?e:typeof e,""))}return t=qt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function jr(e,t,n,r){return e=qt(7,e,r,t),e.lanes=n,e}function Ja(e,t,n,r){return e=qt(22,e,r,t),e.elementType=Zm,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function Dl(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kd(e,t,n,r,i,s,a,l,c){return e=new Gb(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=qt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(s),e}function Qb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Wx(e){if(!e)return lr;e=e._reactInternals;e:{if(Ir(e)!==e||e.tag!==1)throw Error(ne(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(St(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ne(171))}if(e.tag===1){var n=e.type;if(St(n))return Wg(e,n,t)}return t}function Hx(e,t,n,r,i,s,a,l,c){return e=kd(n,r,!0,e,i,s,a,l,c),e.context=Wx(null),n=e.current,r=ht(),i=ir(n),s=An(r,i),s.callback=t??null,nr(n,s,i),e.current.lanes=i,Wo(e,i,r),Ct(e,r),e}function Ka(e,t,n,r){var i=t.current,s=ht(),a=ir(i);return n=Wx(n),t.context===null?t.context=n:t.pendingContext=n,t=An(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nr(i,t,a),e!==null&&(sn(e,i,a,s),Os(e,i,a)),a}function ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jd(e,t){Gf(e,t),(e=e.alternate)&&Gf(e,t)}function Yb(){return null}var qx=typeof reportError=="function"?reportError:function(e){console.error(e)};function _d(e){this._internalRoot=e}Ga.prototype.render=_d.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ne(409));Ka(e,t,null,null)};Ga.prototype.unmount=_d.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pr(function(){Ka(null,e,null,null)}),t[Rn]=null}};function Ga(e){this._internalRoot=e}Ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=jg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Hn.length&&t!==0&&t<Hn[n].priority;n++);Hn.splice(n,0,e),n===0&&Sg(e)}};function Sd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qf(){}function Xb(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ba(a);s.call(u)}}var a=Hx(t,r,e,0,null,!1,!1,"",Qf);return e._reactRootContainer=a,e[Rn]=a.current,ko(e.nodeType===8?e.parentNode:e),Pr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ba(c);l.call(u)}}var c=kd(e,0,!1,null,null,!1,!1,"",Qf);return e._reactRootContainer=c,e[Rn]=c.current,ko(e.nodeType===8?e.parentNode:e),Pr(function(){Ka(t,c,n,r)}),c}function Ya(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=ba(a);l.call(c)}}Ka(t,a,e,i)}else a=Xb(n,t,e,i,r);return ba(a)}wg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ki(t.pendingLanes);n!==0&&(Wu(t,n|1),Ct(t,He()),!(Ne&6)&&(gi=He()+500,pr()))}break;case 13:Pr(function(){var r=Mn(e,1);if(r!==null){var i=ht();sn(r,e,1,i)}}),jd(e,1)}};Hu=function(e){if(e.tag===13){var t=Mn(e,134217728);if(t!==null){var n=ht();sn(t,e,134217728,n)}jd(e,134217728)}};kg=function(e){if(e.tag===13){var t=ir(e),n=Mn(e,t);if(n!==null){var r=ht();sn(n,e,t,r)}jd(e,t)}};jg=function(){return Ae};_g=function(e,t){var n=Ae;try{return Ae=e,t()}finally{Ae=n}};Sc=function(e,t,n){switch(t){case"input":if(yc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ba(r);if(!i)throw Error(ne(90));tg(r),yc(r,i)}}}break;case"textarea":rg(e,n);break;case"select":t=n.value,t!=null&&ei(e,!!n.multiple,t,!1)}};ug=yd;dg=Pr;var Zb={usingClientEntryPoint:!1,Events:[qo,qr,Ba,lg,cg,yd]},Di={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ew={bundleType:Di.bundleType,version:Di.version,rendererPackageName:Di.rendererPackageName,rendererConfig:Di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hg(e),e===null?null:e.stateNode},findFiberByHostInstance:Di.findFiberByHostInstance||Yb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{Oa=ks.inject(ew),vn=ks}catch{}}Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zb;Ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(t))throw Error(ne(200));return Qb(e,t,null,n)};Ft.createRoot=function(e,t){if(!Sd(e))throw Error(ne(299));var n=!1,r="",i=qx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=kd(e,1,!1,null,null,n,!1,r,i),e[Rn]=t.current,ko(e.nodeType===8?e.parentNode:e),new _d(t)};Ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ne(188)):(e=Object.keys(e).join(","),Error(ne(268,e)));return e=hg(t),e=e===null?null:e.stateNode,e};Ft.flushSync=function(e){return Pr(e)};Ft.hydrate=function(e,t,n){if(!Qa(t))throw Error(ne(200));return Ya(null,e,t,!0,n)};Ft.hydrateRoot=function(e,t,n){if(!Sd(e))throw Error(ne(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=qx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Hx(t,null,e,1,n??null,i,!1,s,a),e[Rn]=t.current,ko(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ga(t)};Ft.render=function(e,t,n){if(!Qa(t))throw Error(ne(200));return Ya(null,e,t,!1,n)};Ft.unmountComponentAtNode=function(e){if(!Qa(e))throw Error(ne(40));return e._reactRootContainer?(Pr(function(){Ya(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1};Ft.unstable_batchedUpdates=yd;Ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qa(n))throw Error(ne(200));if(e==null||e._reactInternals===void 0)throw Error(ne(38));return Ya(e,t,n,!1,r)};Ft.version="18.3.1-next-f1338f8080-20240426";function Jx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jx)}catch(e){console.error(e)}}Jx(),Jm.exports=Ft;var Kx=Jm.exports,Yf=Kx;dc.createRoot=Yf.createRoot,dc.hydrateRoot=Yf.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}var Gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gn||(Gn={}));const Xf="popstate";function tw(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return iu("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Gx(i)}return rw(t,n,null,e)}function Qe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Cd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function nw(){return Math.random().toString(36).substr(2,8)}function Zf(e,t){return{usr:e.state,key:e.key,idx:t}}function iu(e,t,n,r){return n===void 0&&(n=null),Ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ci(t):t,{state:n,key:t&&t.key||r||nw()})}function Gx(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ci(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function rw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Gn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Ao({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=Gn.Pop;let w=d(),y=w==null?null:w-u;u=w,c&&c({action:l,location:v.location,delta:y})}function f(w,y){l=Gn.Push;let m=iu(v.location,w,y);u=d()+1;let x=Zf(m,u),j=v.createHref(m);try{a.pushState(x,"",j)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(j)}s&&c&&c({action:l,location:v.location,delta:1})}function h(w,y){l=Gn.Replace;let m=iu(v.location,w,y);u=d();let x=Zf(m,u),j=v.createHref(m);a.replaceState(x,"",j),s&&c&&c({action:l,location:v.location,delta:0})}function g(w){let y=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:Gx(w);return m=m.replace(/ $/,"%20"),Qe(y,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,y)}let v={get action(){return l},get location(){return e(i,a)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Xf,p),c=w,()=>{i.removeEventListener(Xf,p),c=null}},createHref(w){return t(i,w)},createURL:g,encodeLocation(w){let y=g(w);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:f,replace:h,go(w){return a.go(w)}};return v}var eh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(eh||(eh={}));function iw(e,t,n){return n===void 0&&(n="/"),ow(e,t,n)}function ow(e,t,n,r){let i=typeof t=="string"?Ci(t):t,s=Xx(i.pathname||"/",n);if(s==null)return null;let a=Qx(e);sw(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=yw(s);l=mw(a[c],u)}return l}function Qx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(Qe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=_r([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(Qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qx(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:fw(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of Yx(s.path))i(s,a,c)}),t}function Yx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Yx(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function sw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:hw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const aw=/^:[\w-]+$/,lw=3,cw=2,uw=1,dw=10,pw=-2,th=e=>e==="*";function fw(e,t){let n=e.split("/"),r=n.length;return n.some(th)&&(r+=pw),t&&(r+=cw),n.filter(i=>!th(i)).reduce((i,s)=>i+(aw.test(s)?lw:s===""?uw:dw),r)}function hw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function mw(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=gw({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:_r([s,p.pathname]),pathnameBase:jw(_r([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=_r([s,p.pathnameBase]))}return a}function gw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let v=l[p]||"";a=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const g=l[p];return h&&!g?u[f]=void 0:u[f]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function xw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Cd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function yw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Cd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xx(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const vw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bw=e=>vw.test(e);function ww(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ci(e):e,s;if(n)if(bw(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Cd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=nh(n.substring(1),"/"):s=nh(n,t)}else s=t;return{pathname:s,search:_w(r),hash:Sw(i)}}function nh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function kw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zx(e,t){let n=kw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ey(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ci(e):(i=Ao({},e),Qe(!i.pathname||!i.pathname.includes("?"),Fl("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),Fl("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),Fl("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=ww(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const _r=e=>e.join("/").replace(/\/\/+/g,"/"),jw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_w=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Cw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ty=["post","put","patch","delete"];new Set(ty);const Nw=["get",...ty];new Set(Nw);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Po.apply(this,arguments)}const Nd=k.createContext(null),Ew=k.createContext(null),Ko=k.createContext(null),Xa=k.createContext(null),fr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),ny=k.createContext(null);function Go(){return k.useContext(Xa)!=null}function Ed(){return Go()||Qe(!1),k.useContext(Xa).location}function ry(e){k.useContext(Ko).static||k.useLayoutEffect(e)}function zd(){let{isDataRoute:e}=k.useContext(fr);return e?Uw():zw()}function zw(){Go()||Qe(!1);let e=k.useContext(Nd),{basename:t,future:n,navigator:r}=k.useContext(Ko),{matches:i}=k.useContext(fr),{pathname:s}=Ed(),a=JSON.stringify(Zx(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return ry(()=>{l.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=ey(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:_r([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function Tw(){let{matches:e}=k.useContext(fr),t=e[e.length-1];return t?t.params:{}}function Aw(e,t){return Pw(e,t)}function Pw(e,t,n,r){Go()||Qe(!1);let{navigator:i}=k.useContext(Ko),{matches:s}=k.useContext(fr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Ed(),d;if(t){var p;let w=typeof t=="string"?Ci(t):t;c==="/"||(p=w.pathname)!=null&&p.startsWith(c)||Qe(!1),d=w}else d=u;let f=d.pathname||"/",h=f;if(c!=="/"){let w=c.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=iw(e,{pathname:h}),v=Ow(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:_r([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:_r([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&v?k.createElement(Xa.Provider,{value:{location:Po({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Gn.Pop}},v):v}function Lw(){let e=Bw(),t=Cw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const Rw=k.createElement(Lw,null);class Mw extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(fr.Provider,{value:this.props.routeContext},k.createElement(ny.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Iw(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Nd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(fr.Provider,{value:t},r)}function Ow(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Qe(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:h}=n,g=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||g){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let h,g=!1,v=null,w=null;n&&(h=l&&p.route.id?l[p.route.id]:void 0,v=p.route.errorElement||Rw,c&&(u<0&&f===0?(Vw("route-fallback"),g=!0,w=null):u===f&&(g=!0,w=p.route.hydrateFallbackElement||null)));let y=t.concat(a.slice(0,f+1)),m=()=>{let x;return h?x=v:g?x=w:p.route.Component?x=k.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,k.createElement(Iw,{match:p,routeContext:{outlet:d,matches:y,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?k.createElement(Mw,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:m(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):m()},null)}var iy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(iy||{}),oy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(oy||{});function $w(e){let t=k.useContext(Nd);return t||Qe(!1),t}function Dw(e){let t=k.useContext(Ew);return t||Qe(!1),t}function Fw(e){let t=k.useContext(fr);return t||Qe(!1),t}function sy(e){let t=Fw(),n=t.matches[t.matches.length-1];return n.route.id||Qe(!1),n.route.id}function Bw(){var e;let t=k.useContext(ny),n=Dw(),r=sy();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Uw(){let{router:e}=$w(iy.UseNavigateStable),t=sy(oy.UseNavigateStable),n=k.useRef(!1);return ry(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Po({fromRouteId:t},s)))},[e,t])}const rh={};function Vw(e,t,n){rh[e]||(rh[e]=!0)}function Ww(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hw(e){let{to:t,replace:n,state:r,relative:i}=e;Go()||Qe(!1);let{future:s,static:a}=k.useContext(Ko),{matches:l}=k.useContext(fr),{pathname:c}=Ed(),u=zd(),d=ey(t,Zx(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function Fr(e){Qe(!1)}function qw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Gn.Pop,navigator:s,static:a=!1,future:l}=e;Go()&&Qe(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:s,static:a,future:Po({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=Ci(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:g="default"}=r,v=k.useMemo(()=>{let w=Xx(d,c);return w==null?null:{location:{pathname:w,search:p,hash:f,state:h,key:g},navigationType:i}},[c,d,p,f,h,g,i]);return v==null?null:k.createElement(Ko.Provider,{value:u},k.createElement(Xa.Provider,{children:n,value:v}))}function Jw(e){let{children:t,location:n}=e;return Aw(ou(t),n)}new Promise(()=>{});function ou(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,ou(r.props.children,s));return}r.type!==Fr&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=ou(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Kw="6";try{window.__reactRouterVersion=Kw}catch{}const Gw="startTransition",ih=W1[Gw];function Qw(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=tw({window:i,v5Compat:!0}));let a=s.current,[l,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(p=>{u&&ih?ih(()=>c(p)):c(p)},[c,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.useEffect(()=>Ww(r),[r]),k.createElement(qw,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var oh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(oh||(oh={}));var sh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sh||(sh={}));const Yw={},ah=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const h=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(g=>g(t,h))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Yw?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},Xw=e=>e?ah(e):ah;var ay={exports:{}},ly={},cy={exports:{}},uy={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=k;function Zw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ek=typeof Object.is=="function"?Object.is:Zw,tk=xi.useState,nk=xi.useEffect,rk=xi.useLayoutEffect,ik=xi.useDebugValue;function ok(e,t){var n=t(),r=tk({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return rk(function(){i.value=n,i.getSnapshot=t,Bl(i)&&s({inst:i})},[e,n,t]),nk(function(){return Bl(i)&&s({inst:i}),e(function(){Bl(i)&&s({inst:i})})},[e]),ik(n),n}function Bl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ek(e,n)}catch{return!0}}function sk(e,t){return t()}var ak=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?sk:ok;uy.useSyncExternalStore=xi.useSyncExternalStore!==void 0?xi.useSyncExternalStore:ak;cy.exports=uy;var lk=cy.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=k,ck=lk;function uk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dk=typeof Object.is=="function"?Object.is:uk,pk=ck.useSyncExternalStore,fk=Za.useRef,hk=Za.useEffect,mk=Za.useMemo,gk=Za.useDebugValue;ly.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=fk(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=mk(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var g=a.value;if(i(g,h))return p=g}return p=h}if(g=p,dk(d,h))return g;var v=r(h);return i!==void 0&&i(g,v)?(d=h,g):(d=h,p=v)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=pk(e,s[0],s[1]);return hk(function(){a.hasValue=!0,a.value=l},[l]),gk(l),l};ay.exports=ly;var xk=ay.exports;const yk=Ma(xk),dy={},{useDebugValue:vk}=It,{useSyncExternalStoreWithSelector:bk}=yk;let lh=!1;const wk=e=>e;function kk(e,t=wk,n){(dy?"production":void 0)!=="production"&&n&&!lh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),lh=!0);const r=bk(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return vk(r),r}const ch=e=>{(dy?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Xw(e):e,n=(r,i)=>kk(t,r,i);return Object.assign(n,t),n},jk=e=>e?ch(e):ch,ut=jk((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=s.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:s,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let i=r.app;if(n.type==="LlmAgent"&&n.output_key){const s=n.output_key;r.app.state_keys.find(l=>l.name===s)||(i={...r.app,state_keys:[...r.app.state_keys,{name:s,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:i,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:i}=t();if(i){const s=i.agents.find(l=>l.id===n);let a=i.app;if(s&&s.type==="LlmAgent"&&r.output_key){const l=s.output_key,c=r.output_key;if(l!==c){const u=i.app.state_keys.filter(p=>p.name!==l);u.find(p=>p.name===c)?a={...i.app,state_keys:u}:a={...i.app,state_keys:[...u,{name:c,description:`Output from ${r.name||s.name} agent`,type:"string",scope:"session"}]}}}e({project:{...i,app:a,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),py="/api";async function Se(e,t){const n=await fetch(`${py}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function fy(){return(await Se("/projects")).projects}async function hy(e){return(await Se(`/projects/${e}`)).project}async function my(e,t=""){return(await Se("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function su(e,t){return(await Se(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function gy(e){await Se(`/projects/${e}`,{method:"DELETE"})}async function xy(e){return Se(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function au(e){return(await Se(`/projects/${e}/sessions`)).sessions}async function yy(e,t){return(await Se(`/projects/${e}/sessions/${t}/load`)).session}async function vy(e){return(await Se(`/projects/${e}/yaml`)).yaml}async function by(e,t){return(await Se(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Td(){return(await Se("/mcp-servers")).servers}async function wy(){return(await Se("/builtin-tools")).tools}function ky(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Ws(e,t,n,r){return await Se(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function jy(e,t){return await Se(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function _y(e,t,n,r=[],i){return await Se(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Sy(e,t,n,r,i=[],s){return await Se(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function lu(e){return await Se("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Cy(e,t){return Se(`/projects/${e}/skillsets/${t}/stats`)}async function Ny(e,t,n,r,i=500,s=50){return Se(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function Ey(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const a=await fetch(`${py}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function zy(e,t,n,r=10,i=0){return Se(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Ty(e,t){return Se(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Ay(){return Se("/skillsets/embeddings-available")}const qe={async get(e){return Se(e)},async post(e,t){return Se(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Se(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Se(e,{method:"DELETE"})}},_k=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Ny,api:qe,checkEmbeddingsAvailable:Ay,clearSkillSet:Ty,createProject:my,createRunWebSocket:ky,deleteProject:gy,fetchJSON:Se,generateAgentConfig:jy,generateCallbackCode:Sy,generatePrompt:Ws,generateToolCode:_y,getBuiltinTools:wy,getMcpServers:Td,getProject:hy,getProjectYaml:vy,getSkillSetStats:Cy,listProjectSessions:au,listProjects:fy,loadSession:yy,saveSessionToMemory:xy,searchSkillSet:zy,testMcpServer:lu,updateProject:su,updateProjectFromYaml:by,uploadSkillSetFile:Ey},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),pe=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>k.createElement("svg",{ref:d,...Sk,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Ck(e)}`,l].join(" "),...u},[...t.map(([p,f])=>k.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=pe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=pe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=pe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=pe("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=pe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=pe("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=pe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=pe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=pe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=pe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=pe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=pe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=pe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=pe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=pe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=pe("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=pe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=pe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=pe("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=pe("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=pe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=pe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=pe("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=pe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=pe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=pe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=pe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=pe("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=pe("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=pe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=pe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=pe("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=pe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=pe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=pe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=pe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=pe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=pe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=pe("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=pe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=pe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=pe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=pe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=pe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=pe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=pe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=pe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=pe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=pe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=pe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=pe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=pe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=pe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=pe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=pe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=pe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=pe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=pe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=pe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=pe("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=pe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=pe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=pe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Wk(){const e=zd(),[t,n]=k.useState([]),[r,i]=k.useState(!0),[s,a]=k.useState(!1),[l,c]=k.useState("");k.useEffect(()=>{u()},[]);async function u(){try{const f=await fy();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await my(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await gy(f),n(t.filter(g=>g.id!==f))}catch(g){console.error("Failed to delete project:",g)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(Id,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(Ke,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[o.jsx(Ke,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(uh,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(f=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[o.jsxs("h3",{children:[o.jsx(uh,{size:18}),f.name]}),o.jsx("p",{children:f.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:h=>p(f.id,h),children:o.jsx(Fe,{size:16})})]},f.id))})]})]})}const dh={},Hk=5*60*1e3;function qk({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:s="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=k.useState(t||""),[u,d]=k.useState(!1),[p,f]=k.useState([]),[h,g]=k.useState(!1),[v,w]=k.useState(null),[y,m]=k.useState(-1),[x,j]=k.useState({top:0,left:0,width:0}),E=k.useRef(null),S=k.useRef(null);k.useEffect(()=>{if(u&&E.current){const V=E.current.getBoundingClientRect();j({top:V.bottom+window.scrollY+4,left:V.left+window.scrollX,width:V.width})}},[u]);const A=k.useCallback(async()=>{const V=dh[a];if(V&&Date.now()-V.timestamp<Hk){const D=[];Object.values(V.providers).forEach(X=>{D.push(...X.models)}),f(D);return}g(!0),w(null);try{const D=new URLSearchParams;n&&D.append("provider",n),r&&D.append("api_base",r);const X=`/models/${e}${D.toString()?"?"+D.toString():""}`,T=await qe.get(X);dh[a]={providers:T.providers,timestamp:Date.now()};const $=[];Object.values(T.providers).forEach(I=>{I.models&&I.models.length>0&&$.push(...I.models)}),f($)}catch(D){w(D.message||"Failed to fetch models")}finally{g(!1)}},[e,a,r,n]);k.useEffect(()=>{A()},[A]),k.useEffect(()=>{c(t||"")},[t]);const C=p.filter(V=>{const D=l.toLowerCase();return V.id.toLowerCase().includes(D)||V.name.toLowerCase().includes(D)||V.provider.toLowerCase().includes(D)});k.useEffect(()=>{const V=D=>{S.current&&!S.current.contains(D.target)&&E.current&&!E.current.contains(D.target)&&d(!1)};return document.addEventListener("mousedown",V),()=>document.removeEventListener("mousedown",V)},[]);const R=V=>{if(!u){(V.key==="ArrowDown"||V.key==="Enter")&&(d(!0),V.preventDefault());return}switch(V.key){case"ArrowDown":m(D=>Math.min(D+1,C.length-1)),V.preventDefault();break;case"ArrowUp":m(D=>Math.max(D-1,0)),V.preventDefault();break;case"Enter":y>=0&&y<C.length&&N(C[y]),V.preventDefault();break;case"Escape":d(!1);break}},N=V=>{c(V.id),i(V.id,V.provider),d(!1)},L=V=>{c(V.target.value),d(!0),m(-1),i(V.target.value,n||"gemini")},P=V=>{switch(V.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"ollama":return"provider-ollama";default:return"provider-other"}},B=u?o.jsxs("div",{ref:S,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:x.top,left:x.left,width:x.width},children:[h&&o.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),v&&o.jsx("div",{className:"model-autocomplete-error",children:v}),!h&&!v&&C.length===0&&o.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!h&&C.length>0&&o.jsxs("div",{className:"model-autocomplete-list",children:[C.slice(0,50).map((V,D)=>o.jsxs("div",{className:`model-autocomplete-item ${D===y?"highlighted":""}`,onClick:()=>N(V),onMouseEnter:()=>m(D),children:[o.jsx("span",{className:`provider-badge ${P(V.provider)}`,children:V.provider}),o.jsx("span",{className:"model-id",children:V.id}),V.context_window&&o.jsxs("span",{className:"model-context",title:`${V.context_window.toLocaleString()} token context`,children:[Math.round(V.context_window/1e3),"K"]}),V.supports_tools&&o.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),V.supports_vision&&o.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),V.supports_json_mode&&o.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${V.provider}-${V.id}`)),C.length>50&&o.jsxs("div",{className:"model-autocomplete-more",children:["+",C.length-50," more..."]})]})]}):null;return o.jsxs("div",{className:"model-autocomplete",children:[o.jsx("input",{ref:E,type:"text",value:l,onChange:L,onFocus:()=>d(!0),onKeyDown:R,placeholder:s,className:"model-autocomplete-input"}),B&&Kx.createPortal(B,document.body)]})}const Jk=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"litellm",label:"LiteLLM / Other"}];function Kk(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function Vy({projectId:e,values:t,onChange:n,className:r=""}){return o.jsxs("div",{className:`model-config-form ${r}`,children:[o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",style:{flex:1},children:[o.jsx("label",{children:"Provider"}),o.jsx("select",{value:t.provider||"gemini",onChange:i=>n({provider:i.target.value}),children:Jk.map(i=>o.jsx("option",{value:i.value,children:i.label},i.value))})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:"Model"}),o.jsx(qk,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(i,s)=>{const a=Kk(i,s);n({model_name:i,provider:a})},placeholder:"Search models..."})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{children:"API Base (optional)"}),o.jsx("input",{type:"text",value:t.api_base||"",onChange:i=>n({api_base:i.target.value||void 0}),placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":"http://localhost:11434"})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:i=>n({temperature:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:i=>n({max_output_tokens:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:i=>n({top_p:i.target.value?parseFloat(i.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:i=>n({top_k:i.target.value?parseInt(i.target.value):void 0}),placeholder:"Default"})]})]})]})}const Gk=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function Qk(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Yk(){var Q;const{project:e,updateProject:t}=ut(),[n,r]=k.useState(null);if(!e)return null;const{app:i}=e;function s(b){t({app:{...i,...b}})}function a(b){if(b===""){r(null),s({name:b});return}Qk(b)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:b})}function l(){const b={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({state_keys:[...i.state_keys,b]})}function c(b,U){const z=[...i.state_keys];z[b]={...z[b],...U},s({state_keys:z})}function u(b){s({state_keys:i.state_keys.filter((U,z)=>z!==b)})}function d(b="ReflectAndRetryToolPlugin"){let U;switch(b){case"ReflectAndRetryToolPlugin":U={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":U={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":U={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":U={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":U={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":U={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:U={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,U]})}function p(b,U){const z=[...i.plugins];z[b]={...z[b],...U},s({plugins:z})}function f(b){s({plugins:i.plugins.filter((U,z)=>z!==b)})}const h=i.sandbox||{enabled:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:300,volume_mounts:[]},g=((Q=h.allowlist)==null?void 0:Q.user)||[],v=h.volume_mounts||[];function w(b){s({sandbox:{...h,...b}})}async function y(b){const U=i.id;try{await fetch(`/api/sandbox/${U}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:b.map(z=>({pattern:z.pattern,pattern_type:z.pattern_type})).filter(z=>z.pattern)})})}catch(z){console.debug("Could not sync allowlist to gateway:",z)}}function m(){const b={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},U={...h.allowlist,user:[...g,b]};w({allowlist:U})}function x(b,U){const z=[...g];z[b]={...z[b],...U};const G=z;w({allowlist:{...h.allowlist,user:G}}),U.pattern&&y(G)}function j(b){const U=g.filter((z,G)=>G!==b);w({allowlist:{...h.allowlist,user:U}})}function E(){const b={host_path:"",container_path:"/mnt/data",mode:"ro"};w({volume_mounts:[...v,b]})}function S(b,U){const z=[...v];z[b]={...z[b],...U},w({volume_mounts:z})}function A(b){const U=v.filter((z,G)=>G!==b);w({volume_mounts:U})}const C=i.models||[];function R(){const b=`model_${Date.now().toString(36)}`,U={id:b,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:C.length===0};s({models:[...C,U],default_model_id:C.length===0?b:i.default_model_id})}function N(b,U){const z=C.map(G=>G.id===b?{...G,...U}:G);s({models:z})}function L(b){var G;const U=C.filter(xe=>xe.id!==b),z=i.default_model_id===b?((G=U[0])==null?void 0:G.id)||void 0:i.default_model_id;s({models:U,default_model_id:z})}function P(b){s({default_model_id:b})}const B=i.env_vars||{},[V,D]=k.useState({}),[X,T]=k.useState("");function $(b=""){const U=b||X.trim();!U||B[U]!==void 0||(s({env_vars:{...B,[U]:""}}),T(""))}function I(b,U){s({env_vars:{...B,[b]:U}})}function _(b){const U={...B};delete U[b],s({env_vars:U})}function W(b){D(U=>({...U,[b]:!U[b]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Bk,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:b=>a(b.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:b=>s({root_agent_id:b.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(b=>o.jsx("option",{value:b.id,children:b.name},b.id))]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Pn,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:b=>{const U=b.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[U]||U+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:b=>s({session_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:b=>s({session_service_uri:"sqlite://"+b.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:b=>s({session_service_uri:b.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:b=>{const U=i.session_service_uri.split("/");U[2]=b.target.value,s({session_service_uri:U.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:b=>{const U=i.session_service_uri.split("/");U[3]=b.target.value,s({session_service_uri:U.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:b=>{const U=i.session_service_uri.split("/");U[4]=b.target.value,s({session_service_uri:U.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:b=>{const U=b.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[U]||U+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:b=>s({memory_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:b=>s({memory_service_uri:"rag://"+b.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:b=>{const U=i.memory_service_uri.split("/");U[2]=b.target.value,s({memory_service_uri:U.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:b=>{const U=i.memory_service_uri.split("/");U[3]=b.target.value,s({memory_service_uri:U.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:b=>{const U=i.memory_service_uri.split("/");U[4]=b.target.value,s({memory_service_uri:U.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:b=>{const U=b.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[U]||U+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:b=>s({artifact_service_uri:"file://"+b.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:b=>s({artifact_service_uri:"gs://"+b.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(uu,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:Gk.filter(b=>B[b.key]===void 0).map(b=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>$(b.key),title:b.description,children:[o.jsx(Ke,{size:12}),b.key]},b.key))}),Object.keys(B).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(B).map(([b,U])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:b}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:V[b]?"text":"password",value:U,onChange:z=>I(b,z.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>W(b),title:V[b]?"Hide value":"Show value",children:V[b]?o.jsx(Tk,{size:16}):o.jsx(vi,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>_(b),children:o.jsx(Fe,{size:16})})]},b)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:X,onChange:b=>T(b.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:b=>b.key==="Enter"&&$()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>$(),disabled:!X.trim(),children:[o.jsx(Ke,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Pd,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:R,children:[o.jsx(Ke,{size:14}),"Add Model"]})]}),C.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):C.map(b=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:b.name,onChange:U=>N(b.id,{name:U.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===b.id?"is-default":""}`,onClick:()=>P(b.id),title:i.default_model_id===b.id?"Default model":"Set as default",children:o.jsx(Fy,{size:14,fill:i.default_model_id===b.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>L(b.id),children:o.jsx(Fe,{size:16})})]}),o.jsx("div",{className:"model-card-body",children:o.jsx(Vy,{projectId:e.id,values:b,onChange:U=>N(b.id,U)})})]},b.id))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Rd,{size:20}),"State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[o.jsx(Ke,{size:14}),"Add"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys. Auto-created when you add LlmAgents."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:i.state_keys.map((b,U)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx("input",{type:"text",value:b.name,onChange:z=>c(U,{name:z.target.value}),placeholder:"Key name",style:{flex:1,padding:"4px 8px",fontSize:12}}),o.jsxs("select",{value:b.type,onChange:z=>c(U,{type:z.target.value}),style:{padding:"4px 6px",fontSize:11},children:[o.jsx("option",{value:"string",children:"str"}),o.jsx("option",{value:"number",children:"num"}),o.jsx("option",{value:"boolean",children:"bool"}),o.jsx("option",{value:"object",children:"obj"}),o.jsx("option",{value:"array",children:"arr"})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(U),style:{padding:4},children:o.jsx(Fe,{size:12})})]},U))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Uy,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Summarize old events"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:b=>s({compaction:{...i.compaction,max_events:parseInt(b.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:b=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(b.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Pause/resume execution"})]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(rn,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:b=>{b.target.value&&(d(b.target.value),b.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((b,U)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:b.type,onChange:z=>p(U,{type:z.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>f(U),children:o.jsx(Fe,{size:16})})]}),b.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:b.max_retries??3,onChange:z=>p(U,{max_retries:parseInt(z.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:b.throw_exception_if_retry_exceeded??!1,onChange:z=>p(U,{throw_exception_if_retry_exceeded:z.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),b.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:b.num_invocations_to_keep??5,onChange:z=>p(U,{num_invocations_to_keep:parseInt(z.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),b.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),b.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:b.global_instruction??"",onChange:z=>p(U,{global_instruction:z.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),b.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),b.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},U))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Dy,{size:20}),"Network Allowlist"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:m,children:[o.jsx(Ke,{size:14}),"Add"]})]}),g.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:g.map((b,U)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(Ld,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:b.pattern,onChange:z=>x(U,{pattern:z.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),o.jsxs("select",{value:b.pattern_type,onChange:z=>x(U,{pattern_type:z.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[o.jsx("option",{value:"exact",children:"exact"}),o.jsx("option",{value:"wildcard",children:"wild"}),o.jsx("option",{value:"regex",children:"regex"})]}),o.jsx("button",{className:"delete-item",onClick:()=>j(U),style:{padding:4},children:o.jsx(Fe,{size:12})})]},b.id||U))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Rk,{size:20}),"Volume Mounts"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:E,children:[o.jsx(Ke,{size:14}),"Add"]})]}),v.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No mounts. Add to give sandbox file access."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:v.map((b,U)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(Ry,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:b.host_path,onChange:z=>S(U,{host_path:z.target.value}),placeholder:"~/path",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path"}),o.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),o.jsx("input",{type:"text",value:b.container_path,onChange:z=>S(U,{container_path:z.target.value}),placeholder:"/mnt",style:{width:70,padding:"4px 6px",fontSize:11},title:"Container path"}),o.jsxs("select",{value:b.mode,onChange:z=>S(U,{mode:z.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[o.jsx("option",{value:"ro",children:"ro"}),o.jsx("option",{value:"rw",children:"rw"})]}),o.jsx("button",{className:"delete-item",onClick:()=>A(U),style:{padding:4},children:o.jsx(Fe,{size:12})})]},U))})]})]})]})}const Xk="modulepreload",Zk=function(e){return"/"+e},ph={},ej=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Zk(c),c in ph)return;ph[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":Xk,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function fh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function tj(e){if(Array.isArray(e))return e}function nj(e,t,n){return(t=cj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rj(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,l=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function ij(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function mh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hh(Object(n),!0).forEach(function(r){nj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oj(e,t){if(e==null)return{};var n,r,i=sj(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function sj(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function aj(e,t){return tj(e)||rj(e,t)||uj(e,t)||ij()}function lj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function cj(e){var t=lj(e,"string");return typeof t=="symbol"?t:t+""}function uj(e,t){if(e){if(typeof e=="string")return fh(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fh(e,t):void 0}}function dj(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function xh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gh(Object(n),!0).forEach(function(r){dj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pj(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function Qi(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function _a(e){return{}.toString.call(e).includes("Object")}function fj(e){return!Object.keys(e).length}function Ro(e){return typeof e=="function"}function hj(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function mj(e,t){return _a(t)||sr("changeType"),Object.keys(t).some(function(n){return!hj(e,n)})&&sr("changeField"),t}function gj(e){Ro(e)||sr("selectorType")}function xj(e){Ro(e)||_a(e)||sr("handlerType"),_a(e)&&Object.values(e).some(function(t){return!Ro(t)})&&sr("handlersType")}function yj(e){e||sr("initialIsRequired"),_a(e)||sr("initialType"),fj(e)&&sr("initialContent")}function vj(e,t){throw new Error(e[t]||e.default)}var bj={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},sr=Qi(vj)(bj),js={changes:mj,selector:gj,handler:xj,initial:yj};function wj(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};js.initial(e),js.handler(t);var n={current:e},r=Qi(_j)(n,t),i=Qi(jj)(n),s=Qi(js.changes)(e),a=Qi(kj)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return js.selector(u),u(n.current)}function c(u){pj(r,i,s,a)(u)}return[l,c]}function kj(e,t){return Ro(t)?t(e.current):t}function jj(e,t){return e.current=xh(xh({},e.current),t),t}function _j(e,t,n){return Ro(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var Sj={create:wj},Cj={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function Nj(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function Ej(e){return{}.toString.call(e).includes("Object")}function zj(e){return e||yh("configIsRequired"),Ej(e)||yh("configType"),e.urls?(Tj(),{paths:{vs:e.urls.monacoBase}}):e}function Tj(){console.warn(Wy.deprecation)}function Aj(e,t){throw new Error(e[t]||e.default)}var Wy={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},yh=Nj(Aj)(Wy),Pj={config:zj},Lj=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,a){return a(s)},i)}};function Hy(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Hy(e[n],t[n]))}),mh(mh({},e),t)}var Rj={type:"cancelation",msg:"operation is manually canceled"};function Wl(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(Rj):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var Mj=["monaco"],Ij=Sj.create({config:Cj,isInitialized:!1,resolve:null,reject:null,monaco:null}),qy=aj(Ij,2),Zo=qy[0],tl=qy[1];function Oj(e){var t=Pj.config(e),n=t.monaco,r=oj(t,Mj);tl(function(i){return{config:Hy(i.config,r),monaco:n}})}function $j(){var e=Zo(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(tl({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Wl(Hl);if(window.monaco&&window.monaco.editor)return Jy(window.monaco),e.resolve(window.monaco),Wl(Hl);Lj(Dj,Bj)(Uj)}return Wl(Hl)}function Dj(e){return document.body.appendChild(e)}function Fj(e){var t=document.createElement("script");return e&&(t.src=e),t}function Bj(e){var t=Zo(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=Fj("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function Uj(){var e=Zo(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Jy(r),e.resolve(r)},function(n){e.reject(n)})}function Jy(e){Zo().monaco||tl({monaco:e})}function Vj(){return Zo(function(e){var t=e.monaco;return t})}var Hl=new Promise(function(e,t){return tl({resolve:e,reject:t})}),Ky={config:Oj,init:$j,__getMonacoInstance:Vj},Wj={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},ql=Wj,Hj={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},qj=Hj;function Jj({children:e}){return It.createElement("div",{style:qj.container},e)}var Kj=Jj,Gj=Kj;function Qj({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:a}){return It.createElement("section",{style:{...ql.wrapper,width:e,height:t},...a},!n&&It.createElement(Gj,null,r),It.createElement("div",{ref:i,style:{...ql.fullWidth,...!n&&ql.hide},className:s}))}var Yj=Qj,Gy=k.memo(Yj);function Xj(e){k.useEffect(e,[])}var Qy=Xj;function Zj(e,t,n=!0){let r=k.useRef(!0);k.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Lt=Zj;function co(){}function Zr(e,t,n,r){return e_(e,r)||t_(e,t,n,r)}function e_(e,t){return e.editor.getModel(Yy(e,t))}function t_(e,t,n,r){return e.editor.createModel(t,n,r?Yy(e,r):void 0)}function Yy(e,t){return e.Uri.parse(t)}function n_({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:g,wrapperProps:v={},beforeMount:w=co,onMount:y=co}){let[m,x]=k.useState(!1),[j,E]=k.useState(!0),S=k.useRef(null),A=k.useRef(null),C=k.useRef(null),R=k.useRef(y),N=k.useRef(w),L=k.useRef(!1);Qy(()=>{let D=Ky.init();return D.then(X=>(A.current=X)&&E(!1)).catch(X=>(X==null?void 0:X.type)!=="cancelation"&&console.error("Monaco initialization: error:",X)),()=>S.current?V():D.cancel()}),Lt(()=>{if(S.current&&A.current){let D=S.current.getOriginalEditor(),X=Zr(A.current,e||"",r||n||"text",s||"");X!==D.getModel()&&D.setModel(X)}},[s],m),Lt(()=>{if(S.current&&A.current){let D=S.current.getModifiedEditor(),X=Zr(A.current,t||"",i||n||"text",a||"");X!==D.getModel()&&D.setModel(X)}},[a],m),Lt(()=>{let D=S.current.getModifiedEditor();D.getOption(A.current.editor.EditorOption.readOnly)?D.setValue(t||""):t!==D.getValue()&&(D.executeEdits("",[{range:D.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),D.pushUndoStop())},[t],m),Lt(()=>{var D,X;(X=(D=S.current)==null?void 0:D.getModel())==null||X.original.setValue(e||"")},[e],m),Lt(()=>{let{original:D,modified:X}=S.current.getModel();A.current.editor.setModelLanguage(D,r||n||"text"),A.current.editor.setModelLanguage(X,i||n||"text")},[n,r,i],m),Lt(()=>{var D;(D=A.current)==null||D.editor.setTheme(u)},[u],m),Lt(()=>{var D;(D=S.current)==null||D.updateOptions(p)},[p],m);let P=k.useCallback(()=>{var T;if(!A.current)return;N.current(A.current);let D=Zr(A.current,e||"",r||n||"text",s||""),X=Zr(A.current,t||"",i||n||"text",a||"");(T=S.current)==null||T.setModel({original:D,modified:X})},[n,t,i,e,r,s,a]),B=k.useCallback(()=>{var D;!L.current&&C.current&&(S.current=A.current.editor.createDiffEditor(C.current,{automaticLayout:!0,...p}),P(),(D=A.current)==null||D.editor.setTheme(u),x(!0),L.current=!0)},[p,u,P]);k.useEffect(()=>{m&&R.current(S.current,A.current)},[m]),k.useEffect(()=>{!j&&!m&&B()},[j,m,B]);function V(){var X,T,$,I;let D=(X=S.current)==null?void 0:X.getModel();l||((T=D==null?void 0:D.original)==null||T.dispose()),c||(($=D==null?void 0:D.modified)==null||$.dispose()),(I=S.current)==null||I.dispose()}return It.createElement(Gy,{width:h,height:f,isEditorReady:m,loading:d,_ref:C,className:g,wrapperProps:v})}var r_=n_;k.memo(r_);function i_(e){let t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}var o_=i_,_s=new Map;function s_({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:g="100%",className:v,wrapperProps:w={},beforeMount:y=co,onMount:m=co,onChange:x,onValidate:j=co}){let[E,S]=k.useState(!1),[A,C]=k.useState(!0),R=k.useRef(null),N=k.useRef(null),L=k.useRef(null),P=k.useRef(m),B=k.useRef(y),V=k.useRef(),D=k.useRef(r),X=o_(s),T=k.useRef(!1),$=k.useRef(!1);Qy(()=>{let W=Ky.init();return W.then(Q=>(R.current=Q)&&C(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>N.current?_():W.cancel()}),Lt(()=>{var Q,b,U,z;let W=Zr(R.current,e||r||"",t||i||"",s||n||"");W!==((Q=N.current)==null?void 0:Q.getModel())&&(p&&_s.set(X,(b=N.current)==null?void 0:b.saveViewState()),(U=N.current)==null||U.setModel(W),p&&((z=N.current)==null||z.restoreViewState(_s.get(s))))},[s],E),Lt(()=>{var W;(W=N.current)==null||W.updateOptions(u)},[u],E),Lt(()=>{!N.current||r===void 0||(N.current.getOption(R.current.editor.EditorOption.readOnly)?N.current.setValue(r):r!==N.current.getValue()&&($.current=!0,N.current.executeEdits("",[{range:N.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),N.current.pushUndoStop(),$.current=!1))},[r],E),Lt(()=>{var Q,b;let W=(Q=N.current)==null?void 0:Q.getModel();W&&i&&((b=R.current)==null||b.editor.setModelLanguage(W,i))},[i],E),Lt(()=>{var W;l!==void 0&&((W=N.current)==null||W.revealLine(l))},[l],E),Lt(()=>{var W;(W=R.current)==null||W.editor.setTheme(a)},[a],E);let I=k.useCallback(()=>{var W;if(!(!L.current||!R.current)&&!T.current){B.current(R.current);let Q=s||n,b=Zr(R.current,r||e||"",t||i||"",Q||"");N.current=(W=R.current)==null?void 0:W.editor.create(L.current,{model:b,automaticLayout:!0,...u},d),p&&N.current.restoreViewState(_s.get(Q)),R.current.editor.setTheme(a),l!==void 0&&N.current.revealLine(l),S(!0),T.current=!0}},[e,t,n,r,i,s,u,d,p,a,l]);k.useEffect(()=>{E&&P.current(N.current,R.current)},[E]),k.useEffect(()=>{!A&&!E&&I()},[A,E,I]),D.current=r,k.useEffect(()=>{var W,Q;E&&x&&((W=V.current)==null||W.dispose(),V.current=(Q=N.current)==null?void 0:Q.onDidChangeModelContent(b=>{$.current||x(N.current.getValue(),b)}))},[E,x]),k.useEffect(()=>{if(E){let W=R.current.editor.onDidChangeMarkers(Q=>{var U;let b=(U=N.current.getModel())==null?void 0:U.uri;if(b&&Q.find(z=>z.path===b.path)){let z=R.current.editor.getModelMarkers({resource:b});j==null||j(z)}});return()=>{W==null||W.dispose()}}return()=>{}},[E,j]);function _(){var W,Q;(W=V.current)==null||W.dispose(),f?p&&_s.set(s,N.current.saveViewState()):(Q=N.current.getModel())==null||Q.dispose(),N.current.dispose()}return It.createElement(Gy,{width:h,height:g,isEditorReady:E,loading:c,_ref:L,className:v,wrapperProps:w})}var a_=s_,l_=k.memo(a_),Jt=l_;function c_(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const u_=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,d_=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,p_={};function vh(e,t){return(p_.jsx?d_:u_).test(e)}const f_=/[ \t\n\f\r]/g;function h_(e){return typeof e=="object"?e.type==="text"?bh(e.value):!1:bh(e)}function bh(e){return e.replace(f_,"")===""}class es{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}es.prototype.normal={};es.prototype.property={};es.prototype.space=void 0;function Xy(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new es(n,r,t)}function pu(e){return e.toLowerCase()}class Et{constructor(t,n){this.attribute=n,this.property=t}}Et.prototype.attribute="";Et.prototype.booleanish=!1;Et.prototype.boolean=!1;Et.prototype.commaOrSpaceSeparated=!1;Et.prototype.commaSeparated=!1;Et.prototype.defined=!1;Et.prototype.mustUseProperty=!1;Et.prototype.number=!1;Et.prototype.overloadedBoolean=!1;Et.prototype.property="";Et.prototype.spaceSeparated=!1;Et.prototype.space=void 0;let m_=0;const we=Or(),Je=Or(),fu=Or(),ie=Or(),Re=Or(),si=Or(),Tt=Or();function Or(){return 2**++m_}const hu=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:Je,commaOrSpaceSeparated:Tt,commaSeparated:si,number:ie,overloadedBoolean:fu,spaceSeparated:Re},Symbol.toStringTag,{value:"Module"})),Jl=Object.keys(hu);class $d extends Et{constructor(t,n,r,i){let s=-1;if(super(t,n),wh(this,"space",i),typeof r=="number")for(;++s<Jl.length;){const a=Jl[s];wh(this,Jl[s],(r&hu[a])===hu[a])}}}$d.prototype.defined=!0;function wh(e,t,n){n&&(e[t]=n)}function Ni(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new $d(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[pu(r)]=r,n[pu(s.attribute)]=r}return new es(t,n,e.space)}const Zy=Ni({properties:{ariaActiveDescendant:null,ariaAtomic:Je,ariaAutoComplete:null,ariaBusy:Je,ariaChecked:Je,ariaColCount:ie,ariaColIndex:ie,ariaColSpan:ie,ariaControls:Re,ariaCurrent:null,ariaDescribedBy:Re,ariaDetails:null,ariaDisabled:Je,ariaDropEffect:Re,ariaErrorMessage:null,ariaExpanded:Je,ariaFlowTo:Re,ariaGrabbed:Je,ariaHasPopup:null,ariaHidden:Je,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Re,ariaLevel:ie,ariaLive:null,ariaModal:Je,ariaMultiLine:Je,ariaMultiSelectable:Je,ariaOrientation:null,ariaOwns:Re,ariaPlaceholder:null,ariaPosInSet:ie,ariaPressed:Je,ariaReadOnly:Je,ariaRelevant:null,ariaRequired:Je,ariaRoleDescription:Re,ariaRowCount:ie,ariaRowIndex:ie,ariaRowSpan:ie,ariaSelected:Je,ariaSetSize:ie,ariaSort:null,ariaValueMax:ie,ariaValueMin:ie,ariaValueNow:ie,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function ev(e,t){return t in e?e[t]:t}function tv(e,t){return ev(e,t.toLowerCase())}const g_=Ni({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:si,acceptCharset:Re,accessKey:Re,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:Re,autoFocus:we,autoPlay:we,blocking:Re,capture:null,charSet:null,checked:we,cite:null,className:Re,cols:ie,colSpan:null,content:null,contentEditable:Je,controls:we,controlsList:Re,coords:ie|si,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:fu,draggable:Je,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:Re,height:ie,hidden:fu,high:ie,href:null,hrefLang:null,htmlFor:Re,httpEquiv:Re,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:Re,itemRef:Re,itemScope:we,itemType:Re,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:ie,manifest:null,max:null,maxLength:ie,media:null,method:null,min:null,minLength:ie,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:ie,pattern:null,ping:Re,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:Re,required:we,reversed:we,rows:ie,rowSpan:ie,sandbox:Re,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shape:null,size:ie,sizes:null,slot:null,span:ie,spellCheck:Je,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ie,step:null,style:null,tabIndex:ie,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:Je,width:ie,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Re,axis:null,background:null,bgColor:null,border:ie,borderColor:null,bottomMargin:ie,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:ie,leftMargin:ie,link:null,longDesc:null,lowSrc:null,marginHeight:ie,marginWidth:ie,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:ie,rules:null,scheme:null,scrolling:Je,standby:null,summary:null,text:null,topMargin:ie,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ie,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:we,disableRemotePlayback:we,prefix:null,property:null,results:ie,security:null,unselectable:null},space:"html",transform:tv}),x_=Ni({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Tt,accentHeight:ie,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ie,amplitude:ie,arabicForm:null,ascent:ie,attributeName:null,attributeType:null,azimuth:ie,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ie,by:null,calcMode:null,capHeight:ie,className:Re,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ie,diffuseConstant:ie,direction:null,display:null,dur:null,divisor:ie,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:ie,enableBackground:null,end:null,event:null,exponent:ie,externalResourcesRequired:null,fill:null,fillOpacity:ie,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:si,g2:si,glyphName:si,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ie,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ie,horizOriginX:ie,horizOriginY:ie,id:null,ideographic:ie,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ie,k:ie,k1:ie,k2:ie,k3:ie,k4:ie,kernelMatrix:Tt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ie,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ie,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ie,overlineThickness:ie,paintOrder:null,panose1:null,path:null,pathLength:ie,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Re,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ie,pointsAtY:ie,pointsAtZ:ie,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Tt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Tt,rev:Tt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Tt,requiredFeatures:Tt,requiredFonts:Tt,requiredFormats:Tt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ie,specularExponent:ie,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ie,strikethroughThickness:ie,string:null,stroke:null,strokeDashArray:Tt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ie,strokeOpacity:ie,strokeWidth:null,style:null,surfaceScale:ie,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Tt,tabIndex:ie,tableValues:null,target:null,targetX:ie,targetY:ie,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Tt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ie,underlineThickness:ie,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ie,values:null,vAlphabetic:ie,vMathematical:ie,vectorEffect:null,vHanging:ie,vIdeographic:ie,version:null,vertAdvY:ie,vertOriginX:ie,vertOriginY:ie,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ie,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:ev}),nv=Ni({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),rv=Ni({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:tv}),iv=Ni({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),y_={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},v_=/[A-Z]/g,kh=/-[a-z]/g,b_=/^data[-\w.:]+$/i;function w_(e,t){const n=pu(t);let r=t,i=Et;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&b_.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(kh,j_);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!kh.test(s)){let a=s.replace(v_,k_);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=$d}return new i(r,t)}function k_(e){return"-"+e.toLowerCase()}function j_(e){return e.charAt(1).toUpperCase()}const __=Xy([Zy,g_,nv,rv,iv],"html"),Dd=Xy([Zy,x_,nv,rv,iv],"svg");function S_(e){return e.join(" ").trim()}var Fd={},jh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,C_=/\n/g,N_=/^\s*/,E_=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,z_=/^:\s*/,T_=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,A_=/^[;\s]*/,P_=/^\s+|\s+$/g,L_=`
`,_h="/",Sh="*",xr="",R_="comment",M_="declaration";function I_(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var v=g.match(C_);v&&(n+=v.length);var w=g.lastIndexOf(L_);r=~w?g.length-w:r+g.length}function s(){var g={line:n,column:r};return function(v){return v.position=new a(g),u(),v}}function a(g){this.start=g,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(g){var v=new Error(t.source+":"+n+":"+r+": "+g);if(v.reason=g,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function c(g){var v=g.exec(e);if(v){var w=v[0];return i(w),e=e.slice(w.length),v}}function u(){c(N_)}function d(g){var v;for(g=g||[];v=p();)v!==!1&&g.push(v);return g}function p(){var g=s();if(!(_h!=e.charAt(0)||Sh!=e.charAt(1))){for(var v=2;xr!=e.charAt(v)&&(Sh!=e.charAt(v)||_h!=e.charAt(v+1));)++v;if(v+=2,xr===e.charAt(v-1))return l("End of comment missing");var w=e.slice(2,v-2);return r+=2,i(w),e=e.slice(v),r+=2,g({type:R_,comment:w})}}function f(){var g=s(),v=c(E_);if(v){if(p(),!c(z_))return l("property missing ':'");var w=c(T_),y=g({type:M_,property:Ch(v[0].replace(jh,xr)),value:w?Ch(w[0].replace(jh,xr)):xr});return c(A_),y}}function h(){var g=[];d(g);for(var v;v=f();)v!==!1&&(g.push(v),d(g));return g}return u(),h()}function Ch(e){return e?e.replace(P_,xr):xr}var O_=I_,$_=Qs&&Qs.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Fd,"__esModule",{value:!0});Fd.default=F_;const D_=$_(O_);function F_(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,D_.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:l}=s;i?t(a,l,s):l&&(n=n||{},n[a]=l)}),n}var nl={};Object.defineProperty(nl,"__esModule",{value:!0});nl.camelCase=void 0;var B_=/^--[a-zA-Z0-9_-]+$/,U_=/-([a-z])/g,V_=/^[^-]+$/,W_=/^-(webkit|moz|ms|o|khtml)-/,H_=/^-(ms)-/,q_=function(e){return!e||V_.test(e)||B_.test(e)},J_=function(e,t){return t.toUpperCase()},Nh=function(e,t){return"".concat(t,"-")},K_=function(e,t){return t===void 0&&(t={}),q_(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(H_,Nh):e=e.replace(W_,Nh),e.replace(U_,J_))};nl.camelCase=K_;var G_=Qs&&Qs.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Q_=G_(Fd),Y_=nl;function mu(e,t){var n={};return!e||typeof e!="string"||(0,Q_.default)(e,function(r,i){r&&i&&(n[(0,Y_.camelCase)(r,t)]=i)}),n}mu.default=mu;var X_=mu;const Z_=Ma(X_),ov=sv("end"),Bd=sv("start");function sv(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function e2(e){const t=Bd(e),n=ov(e);if(t&&n)return{start:t,end:n}}function uo(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Eh(e.position):"start"in e||"end"in e?Eh(e):"line"in e||"column"in e?gu(e):""}function gu(e){return zh(e&&e.line)+":"+zh(e&&e.column)}function Eh(e){return gu(e&&e.start)+"-"+gu(e&&e.end)}function zh(e){return e&&typeof e=="number"?e:1}class dt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=uo(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}dt.prototype.file="";dt.prototype.name="";dt.prototype.reason="";dt.prototype.message="";dt.prototype.stack="";dt.prototype.column=void 0;dt.prototype.line=void 0;dt.prototype.ancestors=void 0;dt.prototype.cause=void 0;dt.prototype.fatal=void 0;dt.prototype.place=void 0;dt.prototype.ruleId=void 0;dt.prototype.source=void 0;const Ud={}.hasOwnProperty,t2=new Map,n2=/[A-Z]/g,r2=new Set(["table","tbody","thead","tfoot","tr"]),i2=new Set(["td","th"]),av="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function o2(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=f2(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=p2(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Dd:__,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=lv(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function lv(e,t,n){if(t.type==="element")return s2(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return a2(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return c2(e,t,n);if(t.type==="mdxjsEsm")return l2(e,t);if(t.type==="root")return u2(e,t,n);if(t.type==="text")return d2(e,t)}function s2(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Dd,e.schema=i),e.ancestors.push(t);const s=uv(e,t.tagName,!1),a=h2(e,t);let l=Wd(e,t);return r2.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!h_(c):!0})),cv(e,a,s,t),Vd(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function a2(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Mo(e,t.position)}function l2(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Mo(e,t.position)}function c2(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Dd,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:uv(e,t.name,!0),a=m2(e,t),l=Wd(e,t);return cv(e,a,s,t),Vd(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function u2(e,t,n){const r={};return Vd(r,Wd(e,t)),e.create(t,e.Fragment,r,n)}function d2(e,t){return t.value}function cv(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Vd(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function p2(e,t,n){return r;function r(i,s,a,l){const u=Array.isArray(a.children)?n:t;return l?u(s,a,l):u(s,a)}}function f2(e,t){return n;function n(r,i,s,a){const l=Array.isArray(s.children),c=Bd(r);return t(i,s,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function h2(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Ud.call(t.properties,i)){const s=g2(e,i,t.properties[i]);if(s){const[a,l]=s;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&i2.has(t.tagName)?r=l:n[a]=l}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function m2(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Mo(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else Mo(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function Wd(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:t2;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=lv(e,s,a);l!==void 0&&n.push(l)}return n}function g2(e,t,n){const r=w_(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?c_(n):S_(n)),r.property==="style"){let i=typeof n=="object"?n:x2(e,String(n));return e.stylePropertyNameCase==="css"&&(i=y2(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?y_[r.property]||r.property:r.attribute,n]}}function x2(e,t){try{return Z_(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new dt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=av+"#cannot-parse-style-attribute",i}}function uv(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const l=vh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=a}else r=vh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Ud.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Mo(e)}function Mo(e,t){const n=new dt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=av+"#cannot-handle-mdx-estrees-without-createevaluater",n}function y2(e){const t={};let n;for(n in e)Ud.call(e,n)&&(t[v2(n)]=e[n]);return t}function v2(e){let t=e.replace(n2,b2);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function b2(e){return"-"+e.toLowerCase()}const Kl={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},w2={};function k2(e,t){const n=w2,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return dv(e,r,i)}function dv(e,t,n){if(j2(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Th(e.children,t,n)}return Array.isArray(e)?Th(e,t,n):""}function Th(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=dv(e[i],t,n);return r.join("")}function j2(e){return!!(e&&typeof e=="object")}const Ah=document.createElement("i");function Hd(e){const t="&"+e+";";Ah.innerHTML=t;const n=Ah.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function jn(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function Ht(e,t){return e.length>0?(jn(e,e.length,0,t),e):t}const Ph={}.hasOwnProperty;function _2(e){const t={};let n=-1;for(;++n<e.length;)S2(t,e[n]);return t}function S2(e,t){let n;for(n in t){const i=(Ph.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){Ph.call(i,a)||(i[a]=[]);const l=s[a];C2(i[a],Array.isArray(l)?l:l?[l]:[])}}}function C2(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);jn(e,0,0,r)}function pv(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ai(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const xn=hr(/[A-Za-z]/),Mt=hr(/[\dA-Za-z]/),N2=hr(/[#-'*+\--9=?A-Z^-~]/);function xu(e){return e!==null&&(e<32||e===127)}const yu=hr(/\d/),E2=hr(/[\dA-Fa-f]/),z2=hr(/[!-/:-@[-`{-~]/);function be(e){return e!==null&&e<-2}function Nt(e){return e!==null&&(e<0||e===32)}function Ee(e){return e===-2||e===-1||e===32}const T2=hr(new RegExp("\\p{P}|\\p{S}","u")),A2=hr(/\s/);function hr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Ei(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&Mt(e.charCodeAt(n+1))&&Mt(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(n+1);s<56320&&l>56319&&l<57344?(a=String.fromCharCode(s,l),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Ie(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(c){return Ee(c)?(e.enter(n),l(c)):t(c)}function l(c){return Ee(c)&&s++<i?(e.consume(c),l):(e.exit(n),t(c))}}const P2={tokenize:L2};function L2(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Ie(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return be(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),a)}}const R2={tokenize:M2},Lh={tokenize:I2};function M2(e){const t=this,n=[];let r=0,i,s,a;return l;function l(x){if(r<n.length){const j=n[r];return t.containerState=j[1],e.attempt(j[0].continuation,c,u)(x)}return u(x)}function c(x){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const j=t.events.length;let E=j,S;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){S=t.events[E][1].end;break}y(r);let A=j;for(;A<t.events.length;)t.events[A][1].end={...S},A++;return jn(t.events,E+1,0,t.events.slice(j)),t.events.length=A,u(x)}return l(x)}function u(x){if(r===n.length){if(!i)return f(x);if(i.currentConstruct&&i.currentConstruct.concrete)return g(x);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Lh,d,p)(x)}function d(x){return i&&m(),y(r),f(x)}function p(x){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,g(x)}function f(x){return t.containerState={},e.attempt(Lh,h,g)(x)}function h(x){return r++,n.push([t.currentConstruct,t.containerState]),f(x)}function g(x){if(x===null){i&&m(),y(0),e.consume(x);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),v(x)}function v(x){if(x===null){w(e.exit("chunkFlow"),!0),y(0),e.consume(x);return}return be(x)?(e.consume(x),w(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(x),v)}function w(x,j){const E=t.sliceStream(x);if(j&&E.push(null),x.previous=s,s&&(s.next=x),s=x,i.defineSkip(x.start),i.write(E),t.parser.lazy[x.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<a&&(!i.events[S][1].end||i.events[S][1].end.offset>a))return;const A=t.events.length;let C=A,R,N;for(;C--;)if(t.events[C][0]==="exit"&&t.events[C][1].type==="chunkFlow"){if(R){N=t.events[C][1].end;break}R=!0}for(y(r),S=A;S<t.events.length;)t.events[S][1].end={...N},S++;jn(t.events,C+1,0,t.events.slice(A)),t.events.length=S}}function y(x){let j=n.length;for(;j-- >x;){const E=n[j];t.containerState=E[1],E[0].exit.call(t,e)}n.length=x}function m(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function I2(e,t,n){return Ie(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Rh(e){if(e===null||Nt(e)||A2(e))return 1;if(T2(e))return 2}function qd(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const vu={name:"attention",resolveAll:O2,tokenize:$2};function O2(e,t){let n=-1,r,i,s,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};Mh(p,-c),Mh(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Ht(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Ht(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=Ht(u,qd(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Ht(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Ht(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,jn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function $2(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Rh(r);let s;return a;function a(c){return s=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===s)return e.consume(c),l;const u=e.exit("attentionSequence"),d=Rh(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?p:p&&(i||!f)),u._close=!!(s===42?f:f&&(d||!p)),t(c)}}function Mh(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const D2={name:"autolink",tokenize:F2};function F2(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return xn(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||Mt(h)?(r=1,l(h)):u(h)}function l(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||Mt(h))&&r++<32?(e.consume(h),l):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||xu(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),d):N2(h)?(e.consume(h),u):n(h)}function d(h){return Mt(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||Mt(h))&&r++<63){const g=h===45?f:p;return e.consume(h),g}return n(h)}}const rl={partial:!0,tokenize:B2};function B2(e,t,n){return r;function r(s){return Ee(s)?Ie(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||be(s)?t(s):n(s)}}const fv={continuation:{tokenize:V2},exit:W2,name:"blockQuote",tokenize:U2};function U2(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return Ee(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function V2(e,t,n){const r=this;return i;function i(a){return Ee(a)?Ie(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(fv,t,n)(a)}}function W2(e){e.exit("blockQuote")}const hv={name:"characterEscape",tokenize:H2};function H2(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return z2(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const mv={name:"characterReference",tokenize:q2};function q2(e,t,n){const r=this;let i=0,s,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=Mt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=E2,d):(e.enter("characterReferenceValue"),s=7,a=yu,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===Mt&&!Hd(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<s?(e.consume(p),d):n(p)}}const Ih={partial:!0,tokenize:K2},Oh={concrete:!0,name:"codeFenced",tokenize:J2};function J2(e,t,n){const r=this,i={partial:!0,tokenize:E};let s=0,a=0,l;return c;function c(S){return u(S)}function u(S){const A=r.events[r.events.length-1];return s=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,l=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(S)}function d(S){return S===l?(a++,e.consume(S),d):a<3?n(S):(e.exit("codeFencedFenceSequence"),Ee(S)?Ie(e,p,"whitespace")(S):p(S))}function p(S){return S===null||be(S)?(e.exit("codeFencedFence"),r.interrupt?t(S):e.check(Ih,v,j)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(S))}function f(S){return S===null||be(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(S)):Ee(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Ie(e,h,"whitespace")(S)):S===96&&S===l?n(S):(e.consume(S),f)}function h(S){return S===null||be(S)?p(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(S))}function g(S){return S===null||be(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(S)):S===96&&S===l?n(S):(e.consume(S),g)}function v(S){return e.attempt(i,j,w)(S)}function w(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),y}function y(S){return s>0&&Ee(S)?Ie(e,m,"linePrefix",s+1)(S):m(S)}function m(S){return S===null||be(S)?e.check(Ih,v,j)(S):(e.enter("codeFlowValue"),x(S))}function x(S){return S===null||be(S)?(e.exit("codeFlowValue"),m(S)):(e.consume(S),x)}function j(S){return e.exit("codeFenced"),t(S)}function E(S,A,C){let R=0;return N;function N(D){return S.enter("lineEnding"),S.consume(D),S.exit("lineEnding"),L}function L(D){return S.enter("codeFencedFence"),Ee(D)?Ie(S,P,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):P(D)}function P(D){return D===l?(S.enter("codeFencedFenceSequence"),B(D)):C(D)}function B(D){return D===l?(R++,S.consume(D),B):R>=a?(S.exit("codeFencedFenceSequence"),Ee(D)?Ie(S,V,"whitespace")(D):V(D)):C(D)}function V(D){return D===null||be(D)?(S.exit("codeFencedFence"),A(D)):C(D)}}}function K2(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const Gl={name:"codeIndented",tokenize:Q2},G2={partial:!0,tokenize:Y2};function Q2(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Ie(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):be(u)?e.attempt(G2,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||be(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function Y2(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):be(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Ie(e,s,"linePrefix",5)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):be(a)?i(a):n(a)}}const X2={name:"codeText",previous:eS,resolve:Z2,tokenize:tS};function Z2(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function eS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function tS(e,t,n){let r=0,i,s;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(s=e.enter("codeTextSequence"),i=0,d(p)):be(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||be(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(s.type="codeTextData",u(p))}}class nS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Bi(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Bi(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Bi(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Bi(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Bi(this.left,n.reverse())}}}function Bi(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function gv(e){const t={};let n=-1,r,i,s,a,l,c,u;const d=new nS(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,rS(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return jn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function rS(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,h=n,g=0,v=0;const w=[v];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(v=f+1,w.push(v),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):w.pop(),f=w.length;f--;){const y=l.slice(w[f],w[f+1]),m=s.pop();c.push([m,m+y.length-1]),e.splice(m,2,y)}for(c.reverse(),f=-1;++f<c.length;)u[g+c[f][0]]=g+c[f][1],g+=c[f][1]-c[f][0]-1;return u}const iS={resolve:sS,tokenize:aS},oS={partial:!0,tokenize:lS};function sS(e){return gv(e),e}function aS(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):be(l)?e.check(oS,a,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function lS(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Ie(e,s,"linePrefix")}function s(a){if(a===null||be(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function xv(e,t,n,r,i,s,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(y){return y===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(y),e.exit(s),f):y===null||y===32||y===41||xu(y)?n(y):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),v(y))}function f(y){return y===62?(e.enter(s),e.consume(y),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(y))}function h(y){return y===62?(e.exit("chunkString"),e.exit(l),f(y)):y===null||y===60||be(y)?n(y):(e.consume(y),y===92?g:h)}function g(y){return y===60||y===62||y===92?(e.consume(y),h):h(y)}function v(y){return!d&&(y===null||y===41||Nt(y))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(y)):d<u&&y===40?(e.consume(y),d++,v):y===41?(e.consume(y),d--,v):y===null||y===32||y===40||xu(y)?n(y):(e.consume(y),y===92?w:v)}function w(y){return y===40||y===41||y===92?(e.consume(y),v):v(y)}}function yv(e,t,n,r,i,s){const a=this;let l=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return l>999||h===null||h===91||h===93&&!c||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):be(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||be(h)||l++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!Ee(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),l++,p):p(h)}}function vv(e,t,n,r,i,s){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(s),u(f))}function u(f){return f===a?(e.exit(s),c(a)):f===null?n(f):be(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Ie(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||be(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function po(e,t){let n;return r;function r(i){return be(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Ee(i)?Ie(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const cS={name:"definition",tokenize:dS},uS={partial:!0,tokenize:pS};function dS(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return yv.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=ai(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return Nt(h)?po(e,u)(h):u(h)}function u(h){return xv(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(uS,p,p)(h)}function p(h){return Ee(h)?Ie(e,f,"whitespace")(h):f(h)}function f(h){return h===null||be(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function pS(e,t,n){return r;function r(l){return Nt(l)?po(e,i)(l):n(l)}function i(l){return vv(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return Ee(l)?Ie(e,a,"whitespace")(l):a(l)}function a(l){return l===null||be(l)?t(l):n(l)}}const fS={name:"hardBreakEscape",tokenize:hS};function hS(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return be(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const mS={name:"headingAtx",resolve:gS,tokenize:xS};function gS(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},jn(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function xS(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||Nt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||be(d)?(e.exit("atxHeading"),t(d)):Ee(d)?Ie(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||Nt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const yS=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],$h=["pre","script","style","textarea"],vS={concrete:!0,name:"htmlFlow",resolveTo:kS,tokenize:jS},bS={partial:!0,tokenize:SS},wS={partial:!0,tokenize:_S};function kS(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function jS(e,t,n){const r=this;let i,s,a,l,c;return u;function u(b){return d(b)}function d(b){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(b),p}function p(b){return b===33?(e.consume(b),f):b===47?(e.consume(b),s=!0,v):b===63?(e.consume(b),i=3,r.interrupt?t:_):xn(b)?(e.consume(b),a=String.fromCharCode(b),w):n(b)}function f(b){return b===45?(e.consume(b),i=2,h):b===91?(e.consume(b),i=5,l=0,g):xn(b)?(e.consume(b),i=4,r.interrupt?t:_):n(b)}function h(b){return b===45?(e.consume(b),r.interrupt?t:_):n(b)}function g(b){const U="CDATA[";return b===U.charCodeAt(l++)?(e.consume(b),l===U.length?r.interrupt?t:P:g):n(b)}function v(b){return xn(b)?(e.consume(b),a=String.fromCharCode(b),w):n(b)}function w(b){if(b===null||b===47||b===62||Nt(b)){const U=b===47,z=a.toLowerCase();return!U&&!s&&$h.includes(z)?(i=1,r.interrupt?t(b):P(b)):yS.includes(a.toLowerCase())?(i=6,U?(e.consume(b),y):r.interrupt?t(b):P(b)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(b):s?m(b):x(b))}return b===45||Mt(b)?(e.consume(b),a+=String.fromCharCode(b),w):n(b)}function y(b){return b===62?(e.consume(b),r.interrupt?t:P):n(b)}function m(b){return Ee(b)?(e.consume(b),m):N(b)}function x(b){return b===47?(e.consume(b),N):b===58||b===95||xn(b)?(e.consume(b),j):Ee(b)?(e.consume(b),x):N(b)}function j(b){return b===45||b===46||b===58||b===95||Mt(b)?(e.consume(b),j):E(b)}function E(b){return b===61?(e.consume(b),S):Ee(b)?(e.consume(b),E):x(b)}function S(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),c=b,A):Ee(b)?(e.consume(b),S):C(b)}function A(b){return b===c?(e.consume(b),c=null,R):b===null||be(b)?n(b):(e.consume(b),A)}function C(b){return b===null||b===34||b===39||b===47||b===60||b===61||b===62||b===96||Nt(b)?E(b):(e.consume(b),C)}function R(b){return b===47||b===62||Ee(b)?x(b):n(b)}function N(b){return b===62?(e.consume(b),L):n(b)}function L(b){return b===null||be(b)?P(b):Ee(b)?(e.consume(b),L):n(b)}function P(b){return b===45&&i===2?(e.consume(b),X):b===60&&i===1?(e.consume(b),T):b===62&&i===4?(e.consume(b),W):b===63&&i===3?(e.consume(b),_):b===93&&i===5?(e.consume(b),I):be(b)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(bS,Q,B)(b)):b===null||be(b)?(e.exit("htmlFlowData"),B(b)):(e.consume(b),P)}function B(b){return e.check(wS,V,Q)(b)}function V(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),D}function D(b){return b===null||be(b)?B(b):(e.enter("htmlFlowData"),P(b))}function X(b){return b===45?(e.consume(b),_):P(b)}function T(b){return b===47?(e.consume(b),a="",$):P(b)}function $(b){if(b===62){const U=a.toLowerCase();return $h.includes(U)?(e.consume(b),W):P(b)}return xn(b)&&a.length<8?(e.consume(b),a+=String.fromCharCode(b),$):P(b)}function I(b){return b===93?(e.consume(b),_):P(b)}function _(b){return b===62?(e.consume(b),W):b===45&&i===2?(e.consume(b),_):P(b)}function W(b){return b===null||be(b)?(e.exit("htmlFlowData"),Q(b)):(e.consume(b),W)}function Q(b){return e.exit("htmlFlow"),t(b)}}function _S(e,t,n){const r=this;return i;function i(a){return be(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):n(a)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function SS(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(rl,t,n)}}const CS={name:"htmlText",tokenize:NS};function NS(e,t,n){const r=this;let i,s,a;return l;function l(_){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(_),c}function c(_){return _===33?(e.consume(_),u):_===47?(e.consume(_),E):_===63?(e.consume(_),x):xn(_)?(e.consume(_),C):n(_)}function u(_){return _===45?(e.consume(_),d):_===91?(e.consume(_),s=0,g):xn(_)?(e.consume(_),m):n(_)}function d(_){return _===45?(e.consume(_),h):n(_)}function p(_){return _===null?n(_):_===45?(e.consume(_),f):be(_)?(a=p,T(_)):(e.consume(_),p)}function f(_){return _===45?(e.consume(_),h):p(_)}function h(_){return _===62?X(_):_===45?f(_):p(_)}function g(_){const W="CDATA[";return _===W.charCodeAt(s++)?(e.consume(_),s===W.length?v:g):n(_)}function v(_){return _===null?n(_):_===93?(e.consume(_),w):be(_)?(a=v,T(_)):(e.consume(_),v)}function w(_){return _===93?(e.consume(_),y):v(_)}function y(_){return _===62?X(_):_===93?(e.consume(_),y):v(_)}function m(_){return _===null||_===62?X(_):be(_)?(a=m,T(_)):(e.consume(_),m)}function x(_){return _===null?n(_):_===63?(e.consume(_),j):be(_)?(a=x,T(_)):(e.consume(_),x)}function j(_){return _===62?X(_):x(_)}function E(_){return xn(_)?(e.consume(_),S):n(_)}function S(_){return _===45||Mt(_)?(e.consume(_),S):A(_)}function A(_){return be(_)?(a=A,T(_)):Ee(_)?(e.consume(_),A):X(_)}function C(_){return _===45||Mt(_)?(e.consume(_),C):_===47||_===62||Nt(_)?R(_):n(_)}function R(_){return _===47?(e.consume(_),X):_===58||_===95||xn(_)?(e.consume(_),N):be(_)?(a=R,T(_)):Ee(_)?(e.consume(_),R):X(_)}function N(_){return _===45||_===46||_===58||_===95||Mt(_)?(e.consume(_),N):L(_)}function L(_){return _===61?(e.consume(_),P):be(_)?(a=L,T(_)):Ee(_)?(e.consume(_),L):R(_)}function P(_){return _===null||_===60||_===61||_===62||_===96?n(_):_===34||_===39?(e.consume(_),i=_,B):be(_)?(a=P,T(_)):Ee(_)?(e.consume(_),P):(e.consume(_),V)}function B(_){return _===i?(e.consume(_),i=void 0,D):_===null?n(_):be(_)?(a=B,T(_)):(e.consume(_),B)}function V(_){return _===null||_===34||_===39||_===60||_===61||_===96?n(_):_===47||_===62||Nt(_)?R(_):(e.consume(_),V)}function D(_){return _===47||_===62||Nt(_)?R(_):n(_)}function X(_){return _===62?(e.consume(_),e.exit("htmlTextData"),e.exit("htmlText"),t):n(_)}function T(_){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),$}function $(_){return Ee(_)?Ie(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):I(_)}function I(_){return e.enter("htmlTextData"),a(_)}}const Jd={name:"labelEnd",resolveAll:AS,resolveTo:PS,tokenize:LS},ES={tokenize:RS},zS={tokenize:MS},TS={tokenize:IS};function AS(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&jn(e,0,e.length,n),e}function PS(e,t){let n=e.length,r=0,i,s,a,l;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Ht(l,e.slice(s+1,s+r+3)),l=Ht(l,[["enter",d,t]]),l=Ht(l,qd(t.parser.constructs.insideSpan.null,e.slice(s+r+4,a-3),t)),l=Ht(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Ht(l,e.slice(a+1)),l=Ht(l,[["exit",c,t]]),jn(e,s,e.length,l),e}function LS(e,t,n){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(f){return s?s._inactive?p(f):(a=r.parser.defined.includes(ai(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(ES,d,a?d:p)(f):f===91?e.attempt(zS,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(TS,d,p)(f)}function d(f){return t(f)}function p(f){return s._balanced=!0,n(f)}}function RS(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return Nt(p)?po(e,s)(p):s(p)}function s(p){return p===41?d(p):xv(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return Nt(p)?po(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?vv(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return Nt(p)?po(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function MS(e,t,n){const r=this;return i;function i(l){return yv.call(r,e,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(ai(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function IS(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const OS={name:"labelStartImage",resolveAll:Jd.resolveAll,tokenize:$S};function $S(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const DS={name:"labelStartLink",resolveAll:Jd.resolveAll,tokenize:FS};function FS(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Ql={name:"lineEnding",tokenize:BS};function BS(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Ie(e,t,"linePrefix")}}const Hs={name:"thematicBreak",tokenize:US};function US(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||be(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Ee(u)?Ie(e,l,"whitespace")(u):l(u))}}const vt={continuation:{tokenize:qS},exit:KS,name:"list",tokenize:HS},VS={partial:!0,tokenize:GS},WS={partial:!0,tokenize:JS};function HS(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(h){const g=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:yu(h)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Hs,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return yu(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(rl,r.interrupt?n:d,e.attempt(VS,f,p))}function d(h){return r.containerState.initialBlankLine=!0,s++,f(h)}function p(h){return Ee(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function qS(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(rl,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Ie(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!Ee(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(WS,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Ie(e,e.attempt(vt,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function JS(e,t,n){const r=this;return Ie(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function KS(e){e.exit(this.containerState.type)}function GS(e,t,n){const r=this;return Ie(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!Ee(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const Dh={name:"setextUnderline",resolveTo:QS,tokenize:YS};function QS(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",a,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function YS(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Ee(u)?Ie(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||be(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const XS={tokenize:ZS};function ZS(e){const t=this,n=e.attempt(rl,r,e.attempt(this.parser.constructs.flowInitial,i,Ie(e,e.attempt(this.parser.constructs.flow,i,e.attempt(iS,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const eC={resolveAll:wv()},tC=bv("string"),nC=bv("text");function bv(e){return{resolveAll:wv(e==="text"?rC:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,l);return a;function a(d){return u(d)?s(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function wv(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function rC(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const iC={42:vt,43:vt,45:vt,48:vt,49:vt,50:vt,51:vt,52:vt,53:vt,54:vt,55:vt,56:vt,57:vt,62:fv},oC={91:cS},sC={[-2]:Gl,[-1]:Gl,32:Gl},aC={35:mS,42:Hs,45:[Dh,Hs],60:vS,61:Dh,95:Hs,96:Oh,126:Oh},lC={38:mv,92:hv},cC={[-5]:Ql,[-4]:Ql,[-3]:Ql,33:OS,38:mv,42:vu,60:[D2,CS],91:DS,92:[fS,hv],93:Jd,95:vu,96:X2},uC={null:[vu,eC]},dC={null:[42,95]},pC={null:[]},fC=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:dC,contentInitial:oC,disable:pC,document:iC,flow:aC,flowInitial:sC,insideSpan:uC,string:lC,text:cC},Symbol.toStringTag,{value:"Module"}));function hC(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],l=[];const c={attempt:A(E),check:A(S),consume:m,enter:x,exit:j,interrupt:A(S,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:g,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function p(L){return a=Ht(a,L),w(),a[a.length-1]!==null?[]:(C(t,0),u.events=qd(s,u.events,u),u.events)}function f(L,P){return gC(h(L),P)}function h(L){return mC(a,L)}function g(){const{_bufferIndex:L,_index:P,line:B,column:V,offset:D}=r;return{_bufferIndex:L,_index:P,line:B,column:V,offset:D}}function v(L){i[L.line]=L.column,N()}function w(){let L;for(;r._index<a.length;){const P=a[r._index];if(typeof P=="string")for(L=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===L&&r._bufferIndex<P.length;)y(P.charCodeAt(r._bufferIndex));else y(P)}}function y(L){d=d(L)}function m(L){be(L)?(r.line++,r.column=1,r.offset+=L===-3?2:1,N()):L!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=L}function x(L,P){const B=P||{};return B.type=L,B.start=g(),u.events.push(["enter",B,u]),l.push(B),B}function j(L){const P=l.pop();return P.end=g(),u.events.push(["exit",P,u]),P}function E(L,P){C(L,P.from)}function S(L,P){P.restore()}function A(L,P){return B;function B(V,D,X){let T,$,I,_;return Array.isArray(V)?Q(V):"tokenize"in V?Q([V]):W(V);function W(G){return xe;function xe(ye){const H=ye!==null&&G[ye],M=ye!==null&&G.null,q=[...Array.isArray(H)?H:H?[H]:[],...Array.isArray(M)?M:M?[M]:[]];return Q(q)(ye)}}function Q(G){return T=G,$=0,G.length===0?X:b(G[$])}function b(G){return xe;function xe(ye){return _=R(),I=G,G.partial||(u.currentConstruct=G),G.name&&u.parser.constructs.disable.null.includes(G.name)?z():G.tokenize.call(P?Object.assign(Object.create(u),P):u,c,U,z)(ye)}}function U(G){return L(I,_),D}function z(G){return _.restore(),++$<T.length?b(T[$]):X}}}function C(L,P){L.resolveAll&&!s.includes(L)&&s.push(L),L.resolve&&jn(u.events,P,u.events.length-P,L.resolve(u.events.slice(P),u)),L.resolveTo&&(u.events=L.resolveTo(u.events,u))}function R(){const L=g(),P=u.previous,B=u.currentConstruct,V=u.events.length,D=Array.from(l);return{from:V,restore:X};function X(){r=L,u.previous=P,u.currentConstruct=B,u.events.length=V,l=D,N()}}function N(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function mC(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function gC(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function xC(e){const r={constructs:_2([fC,...(e||{}).extensions||[]]),content:i(P2),defined:[],document:i(R2),flow:i(XS),lazy:{},string:i(tC),text:i(nC)};return r;function i(s){return a;function a(l){return hC(r,s,l)}}}function yC(e){for(;!gv(e););return e}const Fh=/[\0\t\n\r]/g;function vC(){let e=1,t="",n=!0,r;return i;function i(s,a,l){const c=[];let u,d,p,f,h;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),p=0,t="",n&&(s.charCodeAt(0)===65279&&p++,n=void 0);p<s.length;){if(Fh.lastIndex=p,u=Fh.exec(s),f=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(f),!u){t=s.slice(p);break}if(h===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(s.slice(p,f)),e+=f-p),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const bC=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function wC(e){return e.replace(bC,kC)}function kC(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return pv(n.slice(s?2:1),s?16:10)}return Hd(n)||e}const kv={}.hasOwnProperty;function jC(e,t,n){return typeof t!="string"&&(n=t,t=void 0),_C(n)(yC(xC(n).document().write(vC()(e,t,!0))))}function _C(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(je),autolinkProtocol:R,autolinkEmail:R,atxHeading:s(K),blockQuote:s(M),characterEscape:R,characterReference:R,codeFenced:s(q),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(q,a),codeText:s(ee,a),codeTextData:R,data:R,codeFlowValue:R,definition:s(Y),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(se),hardBreakEscape:s(Z),hardBreakTrailing:s(Z),htmlFlow:s(re,a),htmlFlowData:R,htmlText:s(re,a),htmlTextData:R,image:s(ve),label:a,link:s(je),listItem:s(ke),listItemValue:f,listOrdered:s(ze,p),listUnordered:s(ze),paragraph:s(F),reference:b,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(K),strong:s(ae),thematicBreak:s(ge)},exit:{atxHeading:c(),atxHeadingSequence:E,autolink:c(),autolinkEmail:H,autolinkProtocol:ye,blockQuote:c(),characterEscapeValue:N,characterReferenceMarkerHexadecimal:z,characterReferenceMarkerNumeric:z,characterReferenceValue:G,characterReference:xe,codeFenced:c(w),codeFencedFence:v,codeFencedFenceInfo:h,codeFencedFenceMeta:g,codeFlowValue:N,codeIndented:c(y),codeText:c(D),codeTextData:N,data:N,definition:c(),definitionDestinationString:j,definitionLabelString:m,definitionTitleString:x,emphasis:c(),hardBreakEscape:c(P),hardBreakTrailing:c(P),htmlFlow:c(B),htmlFlowData:N,htmlText:c(V),htmlTextData:N,image:c(T),label:I,labelText:$,lineEnding:L,link:c(X),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:U,resourceDestinationString:_,resourceTitleString:W,resource:Q,setextHeading:c(C),setextHeadingLineSequence:A,setextHeadingText:S,strong:c(),thematicBreak:c()}};jv(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(J){let te={type:"root",children:[]};const me={stack:[te],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},le=[];let _e=-1;for(;++_e<J.length;)if(J[_e][1].type==="listOrdered"||J[_e][1].type==="listUnordered")if(J[_e][0]==="enter")le.push(_e);else{const Ze=le.pop();_e=i(J,Ze,_e)}for(_e=-1;++_e<J.length;){const Ze=t[J[_e][0]];kv.call(Ze,J[_e][1].type)&&Ze[J[_e][1].type].call(Object.assign({sliceSerialize:J[_e][2].sliceSerialize},me),J[_e][1])}if(me.tokenStack.length>0){const Ze=me.tokenStack[me.tokenStack.length-1];(Ze[1]||Bh).call(me,void 0,Ze[0])}for(te.position={start:Bn(J.length>0?J[0][1].start:{line:1,column:1,offset:0}),end:Bn(J.length>0?J[J.length-2][1].end:{line:1,column:1,offset:0})},_e=-1;++_e<t.transforms.length;)te=t.transforms[_e](te)||te;return te}function i(J,te,me){let le=te-1,_e=-1,Ze=!1,un,Ut,Yt,Dn;for(;++le<=me;){const et=J[le];switch(et[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{et[0]==="enter"?_e++:_e--,Dn=void 0;break}case"lineEndingBlank":{et[0]==="enter"&&(un&&!Dn&&!_e&&!Yt&&(Yt=le),Dn=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Dn=void 0}if(!_e&&et[0]==="enter"&&et[1].type==="listItemPrefix"||_e===-1&&et[0]==="exit"&&(et[1].type==="listUnordered"||et[1].type==="listOrdered")){if(un){let dn=le;for(Ut=void 0;dn--;){const yt=J[dn];if(yt[1].type==="lineEnding"||yt[1].type==="lineEndingBlank"){if(yt[0]==="exit")continue;Ut&&(J[Ut][1].type="lineEndingBlank",Ze=!0),yt[1].type="lineEnding",Ut=dn}else if(!(yt[1].type==="linePrefix"||yt[1].type==="blockQuotePrefix"||yt[1].type==="blockQuotePrefixWhitespace"||yt[1].type==="blockQuoteMarker"||yt[1].type==="listItemIndent"))break}Yt&&(!Ut||Yt<Ut)&&(un._spread=!0),un.end=Object.assign({},Ut?J[Ut][1].start:et[1].end),J.splice(Ut||le,0,["exit",un,et[2]]),le++,me++}if(et[1].type==="listItemPrefix"){const dn={type:"listItem",_spread:!1,start:Object.assign({},et[1].start),end:void 0};un=dn,J.splice(le,0,["enter",dn,et[2]]),le++,me++,Yt=void 0,Dn=!0}}}return J[te][1]._spread=Ze,me}function s(J,te){return me;function me(le){l.call(this,J(le),le),te&&te.call(this,le)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(J,te,me){this.stack[this.stack.length-1].children.push(J),this.stack.push(J),this.tokenStack.push([te,me||void 0]),J.position={start:Bn(te.start),end:void 0}}function c(J){return te;function te(me){J&&J.call(this,me),u.call(this,me)}}function u(J,te){const me=this.stack.pop(),le=this.tokenStack.pop();if(le)le[0].type!==J.type&&(te?te.call(this,J,le[0]):(le[1]||Bh).call(this,J,le[0]));else throw new Error("Cannot close `"+J.type+"` ("+uo({start:J.start,end:J.end})+"): it’s not open");me.position.end=Bn(J.end)}function d(){return k2(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(J){if(this.data.expectingFirstListItemValue){const te=this.stack[this.stack.length-2];te.start=Number.parseInt(this.sliceSerialize(J),10),this.data.expectingFirstListItemValue=void 0}}function h(){const J=this.resume(),te=this.stack[this.stack.length-1];te.lang=J}function g(){const J=this.resume(),te=this.stack[this.stack.length-1];te.meta=J}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function w(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function y(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J.replace(/(\r?\n|\r)$/g,"")}function m(J){const te=this.resume(),me=this.stack[this.stack.length-1];me.label=te,me.identifier=ai(this.sliceSerialize(J)).toLowerCase()}function x(){const J=this.resume(),te=this.stack[this.stack.length-1];te.title=J}function j(){const J=this.resume(),te=this.stack[this.stack.length-1];te.url=J}function E(J){const te=this.stack[this.stack.length-1];if(!te.depth){const me=this.sliceSerialize(J).length;te.depth=me}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function A(J){const te=this.stack[this.stack.length-1];te.depth=this.sliceSerialize(J).codePointAt(0)===61?1:2}function C(){this.data.setextHeadingSlurpLineEnding=void 0}function R(J){const me=this.stack[this.stack.length-1].children;let le=me[me.length-1];(!le||le.type!=="text")&&(le=fe(),le.position={start:Bn(J.start),end:void 0},me.push(le)),this.stack.push(le)}function N(J){const te=this.stack.pop();te.value+=this.sliceSerialize(J),te.position.end=Bn(J.end)}function L(J){const te=this.stack[this.stack.length-1];if(this.data.atHardBreak){const me=te.children[te.children.length-1];me.position.end=Bn(J.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(te.type)&&(R.call(this,J),N.call(this,J))}function P(){this.data.atHardBreak=!0}function B(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J}function V(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J}function D(){const J=this.resume(),te=this.stack[this.stack.length-1];te.value=J}function X(){const J=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";J.type+="Reference",J.referenceType=te,delete J.url,delete J.title}else delete J.identifier,delete J.label;this.data.referenceType=void 0}function T(){const J=this.stack[this.stack.length-1];if(this.data.inReference){const te=this.data.referenceType||"shortcut";J.type+="Reference",J.referenceType=te,delete J.url,delete J.title}else delete J.identifier,delete J.label;this.data.referenceType=void 0}function $(J){const te=this.sliceSerialize(J),me=this.stack[this.stack.length-2];me.label=wC(te),me.identifier=ai(te).toLowerCase()}function I(){const J=this.stack[this.stack.length-1],te=this.resume(),me=this.stack[this.stack.length-1];if(this.data.inReference=!0,me.type==="link"){const le=J.children;me.children=le}else me.alt=te}function _(){const J=this.resume(),te=this.stack[this.stack.length-1];te.url=J}function W(){const J=this.resume(),te=this.stack[this.stack.length-1];te.title=J}function Q(){this.data.inReference=void 0}function b(){this.data.referenceType="collapsed"}function U(J){const te=this.resume(),me=this.stack[this.stack.length-1];me.label=te,me.identifier=ai(this.sliceSerialize(J)).toLowerCase(),this.data.referenceType="full"}function z(J){this.data.characterReferenceType=J.type}function G(J){const te=this.sliceSerialize(J),me=this.data.characterReferenceType;let le;me?(le=pv(te,me==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):le=Hd(te);const _e=this.stack[this.stack.length-1];_e.value+=le}function xe(J){const te=this.stack.pop();te.position.end=Bn(J.end)}function ye(J){N.call(this,J);const te=this.stack[this.stack.length-1];te.url=this.sliceSerialize(J)}function H(J){N.call(this,J);const te=this.stack[this.stack.length-1];te.url="mailto:"+this.sliceSerialize(J)}function M(){return{type:"blockquote",children:[]}}function q(){return{type:"code",lang:null,meta:null,value:""}}function ee(){return{type:"inlineCode",value:""}}function Y(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function se(){return{type:"emphasis",children:[]}}function K(){return{type:"heading",depth:0,children:[]}}function Z(){return{type:"break"}}function re(){return{type:"html",value:""}}function ve(){return{type:"image",title:null,url:"",alt:null}}function je(){return{type:"link",title:null,url:"",children:[]}}function ze(J){return{type:"list",ordered:J.type==="listOrdered",start:null,spread:J._spread,children:[]}}function ke(J){return{type:"listItem",spread:J._spread,checked:null,children:[]}}function F(){return{type:"paragraph",children:[]}}function ae(){return{type:"strong",children:[]}}function fe(){return{type:"text",value:""}}function ge(){return{type:"thematicBreak"}}}function Bn(e){return{line:e.line,column:e.column,offset:e.offset}}function jv(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?jv(e,r):SC(e,r)}}function SC(e,t){let n;for(n in t)if(kv.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Bh(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+uo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+uo({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+uo({start:t.start,end:t.end})+") is still open")}function CC(e){const t=this;t.parser=n;function n(r){return jC(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function NC(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function EC(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function zC(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function TC(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function AC(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function PC(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Ei(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function LC(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function RC(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function _v(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function MC(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return _v(e,t);const i={src:Ei(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function IC(e,t){const n={src:Ei(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function OC(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function $C(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return _v(e,t);const i={href:Ei(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function DC(e,t){const n={href:Ei(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function FC(e,t,n){const r=e.all(t),i=n?BC(n):Sv(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function BC(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Sv(n[r])}return t}function Sv(e){const t=e.spread;return t??e.children.length>1}function UC(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function VC(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function WC(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function HC(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qC(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=Bd(t.children[1]),c=ov(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function JC(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},h=a?a[c]:void 0;h&&(f.align=h);let g={type:"element",tagName:s,properties:f,children:[]};p&&(g.children=e.all(p),e.patch(p,g),g=e.applyData(p,g)),u.push(g)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function KC(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Uh=9,Vh=32;function GC(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(Wh(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(Wh(t.slice(i),i>0,!1)),s.join("")}function Wh(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===Uh||s===Vh;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===Uh||s===Vh;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function QC(e,t){const n={type:"text",value:GC(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function YC(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const XC={blockquote:NC,break:EC,code:zC,delete:TC,emphasis:AC,footnoteReference:PC,heading:LC,html:RC,imageReference:MC,image:IC,inlineCode:OC,linkReference:$C,link:DC,listItem:FC,list:UC,paragraph:VC,root:WC,strong:HC,table:qC,tableCell:KC,tableRow:JC,text:QC,thematicBreak:YC,toml:Ss,yaml:Ss,definition:Ss,footnoteDefinition:Ss};function Ss(){}const Cv=-1,il=0,fo=1,Sa=2,Kd=3,Gd=4,Qd=5,Yd=6,Nv=7,Ev=8,Hh=typeof self=="object"?self:globalThis,ZC=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case il:case Cv:return n(a,i);case fo:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Sa:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case Kd:return n(new Date(a),i);case Gd:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case Qd:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case Yd:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case Nv:{const{name:l,message:c}=a;return n(new Hh[l](c),i)}case Ev:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Hh[s](a),i)};return r},qh=e=>ZC(new Map,e)(0),Dr="",{toString:eN}={},{keys:tN}=Object,Ui=e=>{const t=typeof e;if(t!=="object"||!e)return[il,t];const n=eN.call(e).slice(8,-1);switch(n){case"Array":return[fo,Dr];case"Object":return[Sa,Dr];case"Date":return[Kd,Dr];case"RegExp":return[Gd,Dr];case"Map":return[Qd,Dr];case"Set":return[Yd,Dr];case"DataView":return[fo,n]}return n.includes("Array")?[fo,n]:n.includes("Error")?[Nv,n]:[Sa,n]},Cs=([e,t])=>e===il&&(t==="function"||t==="symbol"),nN=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},s=a=>{if(n.has(a))return n.get(a);let[l,c]=Ui(a);switch(l){case il:{let d=a;switch(c){case"bigint":l=Ev,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([Cv],a)}return i([l,d],a)}case fo:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(s(f));return p}case Sa:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],p=i([l,d],a);for(const f of tN(a))(e||!Cs(Ui(a[f])))&&d.push([s(f),s(a[f])]);return p}case Kd:return i([l,a.toISOString()],a);case Gd:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case Qd:{const d=[],p=i([l,d],a);for(const[f,h]of a)(e||!(Cs(Ui(f))||Cs(Ui(h))))&&d.push([s(f),s(h)]);return p}case Yd:{const d=[],p=i([l,d],a);for(const f of a)(e||!Cs(Ui(f)))&&d.push(s(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return s},Jh=(e,{json:t,lossy:n}={})=>{const r=[];return nN(!(t||n),!!t,new Map,r)(e),r},Ca=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?qh(Jh(e,t)):structuredClone(e):(e,t)=>qh(Jh(e,t));function rN(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function iN(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function oN(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||rN,r=e.options.footnoteBackLabel||iN,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Ei(p.toLowerCase());let h=0;const g=[],v=e.footnoteCounts.get(p);for(;v!==void 0&&++h<=v;){g.length>0&&g.push({type:"text",value:" "});let m=typeof n=="string"?n:n(c,h);typeof m=="string"&&(m={type:"text",value:m}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const w=d[d.length-1];if(w&&w.type==="element"&&w.tagName==="p"){const m=w.children[w.children.length-1];m&&m.type==="text"?m.value+=" ":w.children.push({type:"text",value:" "}),w.children.push(...g)}else d.push(...g);const y={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,y),l.push(y)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ca(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const zv=function(e){if(e==null)return cN;if(typeof e=="function")return ol(e);if(typeof e=="object")return Array.isArray(e)?sN(e):aN(e);if(typeof e=="string")return lN(e);throw new Error("Expected function, string, or object as test")};function sN(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=zv(e[n]);return ol(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function aN(e){const t=e;return ol(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function lN(e){return ol(t);function t(n){return n&&n.type===e}}function ol(e){return t;function t(n,r,i){return!!(uN(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function cN(){return!0}function uN(e){return e!==null&&typeof e=="object"&&"type"in e}const Tv=[],dN=!0,Kh=!1,pN="skip";function fN(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=zv(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=Tv,g,v,w;if((!t||s(c,u,d[d.length-1]||void 0))&&(h=hN(n(c,d)),h[0]===Kh))return h;if("children"in c&&c.children){const y=c;if(y.children&&h[0]!==pN)for(v=(r?y.children.length:-1)+a,w=d.concat(y);v>-1&&v<y.children.length;){const m=y.children[v];if(g=l(m,v,w)(),g[0]===Kh)return g;v=typeof g[1]=="number"?g[1]:v+a}}return h}}}function hN(e){return Array.isArray(e)?e:typeof e=="number"?[dN,e]:e==null?Tv:[e]}function Av(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),fN(e,s,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const bu={}.hasOwnProperty,mN={};function gN(e,t){const n=t||mN,r=new Map,i=new Map,s=new Map,a={...XC,...n.handlers},l={all:u,applyData:yN,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:c,options:n,patch:xN,wrap:bN};return Av(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,h=l.handlers[f];if(bu.call(l.handlers,f)&&h)return h(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:v,...w}=d,y=Ca(w);return y.children=l.all(d),y}return Ca(d)}return(l.options.unknownHandler||vN)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const g=l.one(f[h],d);if(g){if(h&&f[h-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Gh(g.value)),!Array.isArray(g)&&g.type==="element")){const v=g.children[0];v&&v.type==="text"&&(v.value=Gh(v.value))}Array.isArray(g)?p.push(...g):p.push(g)}}}return p}}function xN(e,t){e.position&&(t.position=e2(e))}function yN(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Ca(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function vN(e,t){const n=t.data||{},r="value"in t&&!(bu.call(n,"hProperties")||bu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function bN(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Gh(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Qh(e,t){const n=gN(e,t),r=n.one(e,void 0),i=oN(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function wN(e,t){return e&&"run"in e?async function(n,r){const i=Qh(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Qh(n,{file:r,...e||t})}}function Yh(e){if(e)throw e}var qs=Object.prototype.hasOwnProperty,Pv=Object.prototype.toString,Xh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,em=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Pv.call(t)==="[object Array]"},tm=function(t){if(!t||Pv.call(t)!=="[object Object]")return!1;var n=qs.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&qs.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||qs.call(t,i)},nm=function(t,n){Xh&&n.name==="__proto__"?Xh(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},rm=function(t,n){if(n==="__proto__")if(qs.call(t,n)){if(Zh)return Zh(t,n).value}else return;return t[n]},kN=function e(){var t,n,r,i,s,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=rm(l,n),i=rm(t,n),l!==i&&(d&&i&&(tm(i)||(s=em(i)))?(s?(s=!1,a=r&&em(r)?r:[]):a=r&&tm(r)?r:{},nm(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&nm(l,{name:n,newValue:i}));return l};const Yl=Ma(kN);function wu(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function jN(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++s];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?_N(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function _N(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(a,...l){n||(n=!0,t(a,...l))}function s(a){i(null,a)}}const mn={basename:SN,dirname:CN,extname:NN,join:EN,sep:"/"};function SN(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');ts(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function CN(e){if(ts(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function NN(e){ts(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function EN(...e){let t=-1,n;for(;++t<e.length;)ts(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":zN(n)}function zN(e){ts(e);const t=e.codePointAt(0)===47;let n=TN(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function TN(e,t){let n="",r=0,i=-1,s=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else l===46&&s>-1?s++:s=-1}return n}function ts(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const AN={cwd:PN};function PN(){return"/"}function ku(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function LN(e){if(typeof e=="string")e=new URL(e);else if(!ku(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return RN(e)}function RN(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Xl=["history","path","basename","stem","extname","dirname"];class Lv{constructor(t){let n;t?ku(t)?n={path:t}:typeof t=="string"||MN(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":AN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Xl.length;){const s=Xl[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)Xl.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?mn.basename(this.path):void 0}set basename(t){ec(t,"basename"),Zl(t,"basename"),this.path=mn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?mn.dirname(this.path):void 0}set dirname(t){im(this.basename,"dirname"),this.path=mn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?mn.extname(this.path):void 0}set extname(t){if(Zl(t,"extname"),im(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=mn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){ku(t)&&(t=LN(t)),ec(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?mn.basename(this.path,this.extname):void 0}set stem(t){ec(t,"stem"),Zl(t,"stem"),this.path=mn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new dt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Zl(e,t){if(e&&e.includes(mn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+mn.sep+"`")}function ec(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function im(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function MN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const IN=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},ON={}.hasOwnProperty;class Xd extends IN{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=jN()}copy(){const t=new Xd;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Yl(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(rc("data",this.frozen),this.namespace[t]=n,this):ON.call(this.namespace,t)&&this.namespace[t]||void 0:t?(rc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ns(t),r=this.parser||this.Parser;return tc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),tc("process",this.parser||this.Parser),nc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const l=Ns(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const h=p,g=r.stringify(h,f);FN(g)?f.value=g:f.result=g,u(d,f)});function u(d,p){d||!p?a(d):s?s(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),tc("processSync",this.parser||this.Parser),nc("processSync",this.compiler||this.Compiler),this.process(t,i),sm("processSync","process",n),r;function i(s,a){n=!0,Yh(s),r=a}}run(t,n,r){om(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,l){const c=Ns(n);i.run(t,c,u);function u(d,p,f){const h=p||t;d?l(d):a?a(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),sm("runSync","run",r),i;function s(a,l){Yh(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Ns(n),i=this.compiler||this.Compiler;return nc("stringify",i),om(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(rc("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Yl(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];s(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[h,...g]=d;const v=r[f][1];wu(v)&&wu(h)&&(h=Yl(!0,v,h)),r[f]=[u,h,...g]}}}}const $N=new Xd().freeze();function tc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function nc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function rc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function om(e){if(!wu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function sm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ns(e){return DN(e)?e:new Lv(e)}function DN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function FN(e){return typeof e=="string"||BN(e)}function BN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const UN="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",am=[],lm={allowDangerousHtml:!0},VN=/^(https?|ircs?|mailto|xmpp)$/i,WN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Rv(e){const t=HN(e),n=qN(e);return JN(t.runSync(t.parse(n),n),e)}function HN(e){const t=e.rehypePlugins||am,n=e.remarkPlugins||am,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...lm}:lm;return $N().use(CC).use(n).use(wN,r).use(t)}function qN(e){const t=e.children||"",n=new Lv;return typeof t=="string"&&(n.value=t),n}function JN(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||KN;for(const d of WN)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+UN+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Av(e,u),o2(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in Kl)if(Object.hasOwn(Kl,h)&&Object.hasOwn(d.properties,h)){const g=d.properties[h],v=Kl[h];(v===null||v.includes(d.tagName))&&(d.properties[h]=c(String(g||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function KN(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||VN.test(e.slice(0,t))?e:""}function GN({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=k.useState(!1),[a,l]=k.useState(r),c=k.useRef(null),u=k.useRef(null);k.useEffect(()=>{if(e){const f=e.split(`
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
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(Jt,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx($k,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(Rv,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function QN(e){return/^[a-zA-Z0-9_]+$/.test(e)}function YN({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:a}=ut(),[l,c]=k.useState(new Set(["basic","model","tools","subagents"])),[u,d]=k.useState(!1),[p,f]=k.useState(!1),[h,g]=k.useState(!1),[v,w]=k.useState(""),[y,m]=k.useState(null);if(!t)return null;function x(T){n(e.id,T)}function j(T){if(T===""){m(null),x({name:T});return}QN(T)?m(null):m("Name can only contain letters, numbers, and underscores"),e.type==="LlmAgent"?x({name:T,output_key:T}):x({name:T})}function E(T){const $=new Set(l);$.has(T)?$.delete(T):$.add(T),c($)}const S=e.type==="LlmAgent",A=e;function C(T){S&&x({tools:[...A.tools,T]})}function R(T){S&&x({tools:A.tools.filter(($,I)=>I!==T)})}function N(T,$){if(!S)return;const I=[...A.tools];I[T]=$,x({tools:I})}function L(T){"sub_agents"in e&&x({sub_agents:[...e.sub_agents,T]})}function P(T){"sub_agents"in e&&x({sub_agents:e.sub_agents.filter($=>$!==T)})}const B=t.agents.filter(T=>T.id!==e.id);async function V(){if(!(!t||!S)){d(!0);try{const T=A.instruction||"",$=T?`Current instruction to improve:

${T}

Please improve and expand this instruction while preserving its core intent.`:void 0,_=t.agents.some(Q=>Q.id===e.id)?void 0:e,W=await Ws(t.id,e.id,$,_);W.success&&W.prompt?x({instruction:W.prompt}):alert("Failed to generate prompt: "+(W.error||"Unknown error"))}catch(T){alert("Error generating prompt: "+T.message)}finally{d(!1)}}}async function D(){if(!(!t||!S||!v.trim())){d(!0);try{const $=`Current instruction:

${A.instruction||""}

---

Requested changes:
${v}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,_=t.agents.some(Q=>Q.id===e.id)?void 0:e,W=await Ws(t.id,e.id,$,_);W.success&&W.prompt?(x({instruction:W.prompt}),g(!1),w("")):alert("Failed to apply changes: "+(W.error||"Unknown error"))}catch(T){alert("Error applying changes: "+T.message)}finally{d(!1)}}}async function X(){if(!t||!S)return;const T=A.instruction;if(!T){alert("Please write an instruction first");return}f(!0);try{const $=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,I=await Ws(t.id,e.id,$);if(I.success&&I.prompt){let _=I.prompt.trim();_=_.replace(/^["']|["']$/g,"").trim();const W=_.split(/[.!?\n]/)[0].trim(),Q=W.length>80?W.slice(0,77)+"...":W;x({description:Q})}else alert("Failed to generate description: "+(I.error||"Unknown error"))}catch($){alert("Error generating description: "+$.message)}finally{f(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Sr,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:e.name,onChange:T=>j(T.target.value),placeholder:"Agent name",style:{borderColor:y?"var(--error)":void 0}}),y&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:y})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),s("run")},title:"Test this agent",children:[o.jsx(cr,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(Vi,{id:"basic",title:"Basic Info",icon:o.jsx(Sr,{size:16}),expanded:l.has("basic"),onToggle:()=>E("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),S&&A.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:X,disabled:p,title:"Generate description from instruction",children:p?o.jsxs(o.Fragment,{children:[o.jsx(Qn,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:T=>x({description:T.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),S&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Instruction"}),o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(!h),disabled:u||!A.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:V,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(Qn,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),h&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:v,onChange:T=>w(T.target.value),placeholder:"Describe what changes you want...",onKeyDown:T=>{T.key==="Enter"&&v.trim()?D():T.key==="Escape"&&(g(!1),w(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:D,disabled:u||!v.trim(),children:"Apply"})]}),o.jsx(GN,{value:A.instruction,onChange:T=>x({instruction:T}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:A.output_key||"",onChange:T=>x({output_key:T.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(T=>o.jsx("option",{value:T.name,children:T.name},T.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:A.include_contents,onChange:T=>x({include_contents:T.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:A.disallow_transfer_to_parent,onChange:T=>x({disallow_transfer_to_parent:T.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:A.disallow_transfer_to_peers,onChange:T=>x({disallow_transfer_to_peers:T.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:T=>x({max_iterations:parseInt(T.target.value)||void 0}),placeholder:"No limit"})]})})]}),S&&o.jsx(Vi,{id:"model",title:"Model",icon:o.jsx(Pd,{size:16}),expanded:l.has("model"),onToggle:()=>E("model"),children:o.jsx(ZN,{agent:A,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:T=>x({model:T})})}),S&&o.jsx(Vi,{id:"tools",title:`Tools (${A.tools.length})`,icon:o.jsx(an,{size:16}),expanded:l.has("tools"),onToggle:()=>E("tools"),children:o.jsx(XN,{tools:A.tools,onAdd:C,onRemove:R,onUpdate:N,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:B,skillsets:t.skillsets||[]})}),"sub_agents"in e&&o.jsx(Vi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(By,{size:16}),expanded:l.has("subagents"),onToggle:()=>E("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(T=>{const $=t.agents.find(I=>I.id===T);return $?o.jsxs("div",{className:"sub-agent-chip",children:[$.name,o.jsx("button",{onClick:()=>P(T),children:o.jsx(Fe,{size:12})})]},T):null}),o.jsxs("select",{value:"",onChange:T=>{T.target.value&&L(T.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),B.filter(T=>!e.sub_agents.includes(T.id)).map(T=>o.jsx("option",{value:T.id,children:T.name},T.id))]})]})}),o.jsx(Vi,{id:"callbacks",title:"Callbacks",icon:o.jsx(kn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>E("callbacks"),children:o.jsx(e4,{agent:e,onUpdate:x,customCallbacks:t.custom_callbacks||[],isLlmAgent:S})})]})]})}function Vi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(Pt,{size:16}):o.jsx(bt,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function XN({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=k.useState(!1),[f,h]=k.useState({}),[g,v]=k.useState(""),w=It.useRef(null),y=It.useRef(null),[m,x]=k.useState(null),[j,E]=k.useState(new Set),S=(z,G)=>{if(!g.trim())return!0;const xe=g.toLowerCase();return z.toLowerCase().includes(xe)||((G==null?void 0:G.toLowerCase().includes(xe))??!1)},A=i.filter(z=>S(z.name,z.description)),C=s.filter(z=>S(z.name,z.description)),R=a.filter(z=>S(z.name,z.description)),N=l.filter(z=>S(z.name,z.description)),L=c.filter(z=>S(z.name,z.description)),P=u.filter(z=>S(z.name,z.description));function B(){if(w.current){const z=w.current.getBoundingClientRect(),G=window.innerHeight,xe=350,ye=G-z.bottom-16,H=z.top-16;if(ye>=200||ye>=H){const M=Math.min(xe,ye);h({top:z.bottom+4,left:z.left,maxHeight:M})}else{const M=Math.min(xe,H);h({top:z.top-M-4,left:z.left,maxHeight:M})}}p(!0),v(""),setTimeout(()=>{var z;return(z=y.current)==null?void 0:z.focus()},50)}function V(){p(!1),v("")}function D(z){t({type:"builtin",name:z}),V()}async function X(z){V();const G=z.tool_filter||[];if(x({server:z,enabledTools:new Set(G),availableTools:G.map(xe=>({name:xe,description:""})),isLoading:G.length===0,error:void 0}),G.length===0)try{const{testMcpServer:xe}=await ej(async()=>{const{testMcpServer:H}=await Promise.resolve().then(()=>_k);return{testMcpServer:H}},void 0),ye=await xe({connection_type:z.connection_type,command:z.command,args:z.args,env:z.env,url:z.url,headers:z.headers,timeout:z.timeout||30});ye.success?x(H=>H?{...H,availableTools:ye.tools,enabledTools:new Set(ye.tools.map(M=>M.name)),isLoading:!1}:null):x(H=>H?{...H,isLoading:!1,error:ye.error||"Failed to connect to MCP server"}:null)}catch(xe){x(ye=>ye?{...ye,isLoading:!1,error:xe.message}:null)}}function T(z){if(!m)return;const G=new Set(m.enabledTools);G.has(z)?G.delete(z):G.add(z),x({...m,enabledTools:G})}function $(){if(!m)return;const z=Array.from(m.enabledTools);t({type:"mcp",server:{...m.server,tool_filter:z}}),x(null)}function I(z){const G=new Set(j);G.has(z)?G.delete(z):G.add(z),E(G)}function _(z,G){const xe=e[z];if(xe.type!=="mcp"||!xe.server)return;const ye=xe.server.tool_filter||[];let H;ye.includes(G)?H=ye.filter(M=>M!==G):H=[...ye,G],r(z,{...xe,server:{...xe.server,tool_filter:H}})}function W(z){t({type:"function",name:z.name,module_path:z.module_path}),V()}function Q(z){const G=c.find(xe=>xe.id===z);t({type:"agent",agent_id:z,name:G==null?void 0:G.name}),V()}function b(z){const G=u.find(xe=>xe.id===z);t({type:"skillset",skillset_id:z,name:G==null?void 0:G.name}),V()}function U(z){return s.find(G=>G.name===z)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((z,G)=>{var xe;return z.type==="mcp"&&z.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>I(G),children:[j.has(G)?o.jsx(Pt,{size:14}):o.jsx(bt,{size:14}),o.jsx(an,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:z.server.name}),o.jsx("div",{className:"mcp-tool-count",children:z.server.tool_filter===null||z.server.tool_filter===void 0?"all tools":`${z.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:ye=>{ye.stopPropagation(),n(G)},children:o.jsx(Fe,{size:14})})]}),j.has(G)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const ye=U(z.server.name),H=(ye==null?void 0:ye.tool_filter)||z.server.tool_filter||[],M=new Set(z.server.tool_filter||[]);return H.map(q=>o.jsxs("label",{className:`mcp-tool-chip ${M.has(q)?"enabled":"disabled"}`,onClick:()=>_(G,q),children:[o.jsx("input",{type:"checkbox",checked:M.has(q),onChange:()=>{},style:{display:"none"}}),q]},q))})()})})]},G):z.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(Pn,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:z.name||((xe=u.find(ye=>ye.id===z.skillset_id))==null?void 0:xe.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(G),children:o.jsx(Fe,{size:14})})]},G):o.jsxs("div",{className:"tool-item",children:[o.jsx(an,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:z.name||z.agent_id}),o.jsx("div",{className:"tool-item-type",children:z.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(G),children:o.jsx(Fe,{size:14})})]},G)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:w,className:"btn btn-secondary btn-sm",onClick:()=>d?V():B(),children:[o.jsx(Ke,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:V}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:y,type:"text",placeholder:"Search tools...",value:g,onChange:z=>v(z.target.value),onKeyDown:z=>z.key==="Escape"&&V()})}),A.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),A.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>D(z.name),children:[o.jsx("div",{className:"dropdown-item-name",children:z.name}),o.jsx("div",{className:"dropdown-item-desc",children:z.description})]},z.name))]}),C.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Known MCP Servers (",C.length,")"]}),C.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>X(z),children:[o.jsxs("div",{className:"dropdown-item-name",children:[z.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:z.tool_filter===null||z.tool_filter===void 0?"all tools":`${z.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:z.description})]},`known-${z.name}`))]}),R.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",R.length,")"]}),R.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>X(z),children:[o.jsxs("div",{className:"dropdown-item-name",children:[z.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:z.tool_filter===null||z.tool_filter===void 0?"all tools":`${z.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:z.description||"Custom MCP server"})]},`project-${z.id||z.name}`))]}),N.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),N.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>W(z),children:[o.jsx("div",{className:"dropdown-item-name",children:z.name}),o.jsx("div",{className:"dropdown-item-desc",children:z.description})]},z.id))]}),L.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),L.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>Q(z.id),children:[o.jsx("div",{className:"dropdown-item-name",children:z.name}),o.jsx("div",{className:"dropdown-item-desc",children:z.type})]},z.id))]}),P.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",P.length,")"]}),P.map(z=>o.jsxs("button",{className:"dropdown-item",onClick:()=>b(z.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[z.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[z.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:z.description||"Vector knowledge base"})]},z.id))]}),g.trim()&&A.length===0&&C.length===0&&R.length===0&&N.length===0&&L.length===0&&P.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',g,'"']})]})]})]}),m&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",m.server.name]}),o.jsx("p",{children:m.server.description}),m.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):m.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",m.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({...m,enabledTools:new Set(m.availableTools.map(z=>z.name))}),children:["Select All (",m.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({...m,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:m.availableTools.map(z=>o.jsxs("div",{className:"mcp-tool-row",title:z.description||z.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:m.enabledTools.has(z.name),onChange:()=>T(z.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:m.enabledTools.has(z.name)?1:.5,cursor:"pointer"},onClick:()=>T(z.name),children:z.name})]},z.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>x(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:m.enabledTools.size===0,children:["Add ",m.enabledTools.size," Tools"]})]})]})})]})}function ZN({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var f,h;const s=(f=e.model)==null?void 0:f._appModelId,a=e.model!==null&&e.model!==void 0&&!s,c=s||(()=>{if(!e.model)return n;const g=t.find(v=>{var w,y,m;return v.provider===((w=e.model)==null?void 0:w.provider)&&v.model_name===((y=e.model)==null?void 0:y.model_name)&&v.api_base===((m=e.model)==null?void 0:m.api_base)});return g==null?void 0:g.id})()||n||((h=t[0])==null?void 0:h.id);It.useEffect(()=>{var g,v,w,y,m;if(s){const x=t.find(j=>j.id===s);x&&(((g=e.model)==null?void 0:g.provider)!==x.provider||((v=e.model)==null?void 0:v.model_name)!==x.model_name||((w=e.model)==null?void 0:w.api_base)!==x.api_base||((y=e.model)==null?void 0:y.temperature)!==x.temperature||((m=e.model)==null?void 0:m.max_output_tokens)!==x.max_output_tokens)&&i({provider:x.provider,model_name:x.model_name,api_base:x.api_base,temperature:x.temperature,max_output_tokens:x.max_output_tokens,top_p:x.top_p,top_k:x.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,i]);function u(g){const v=t.find(w=>w.id===g);v&&i({provider:v.provider,model_name:v.model_name,api_base:v.api_base,temperature:v.temperature,max_output_tokens:v.max_output_tokens,top_p:v.top_p,top_k:v.top_k,fallbacks:[],_appModelId:g})}function d(){var g;if(a){const v=n||((g=t[0])==null?void 0:g.id);v&&u(v)}else{const v=e.model;if(v){const{_appModelId:w,...y}=v;i(y)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function p(g){const{_appModelId:v,...w}=e.model||{};i({...w,...g})}return t.find(g=>g.id===c),t.find(g=>g.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(g=>o.jsx("div",{className:`app-model-item ${c===g.id?"selected":""}`,onClick:()=>u(g.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[g.name,g.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(Fy,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[g.provider," / ",g.model_name,g.api_base&&` • ${g.api_base}`]})]})},g.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&o.jsx("div",{className:"custom-model-form",children:o.jsx(Vy,{projectId:r,values:e.model||{},onChange:p})})]})}const ic=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function e4({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[...ic,...n],s=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...s,...a]:s;function c(d,p){const f=e[d]||[],h=i.find(g=>g.id===p);h&&t({[d]:[...f,{module_path:h.module_path}]})}function u(d,p){const f=e[d]||[];t({[d]:f.filter((h,g)=>g!==p)})}return o.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:p})=>{const f=e[d]||[],h=i;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:p}),h.length>0&&o.jsxs("select",{value:"",onChange:g=>{g.target.value&&(c(d,g.target.value),g.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),o.jsx("optgroup",{label:"Built-in",children:ic.filter(g=>!f.some(v=>v.module_path===g.module_path)).map(g=>o.jsx("option",{value:g.id,children:g.name},g.id))}),o.jsx("optgroup",{label:"Custom",children:n.filter(g=>!f.some(v=>v.module_path===g.module_path)).map(g=>o.jsx("option",{value:g.id,children:g.name},g.id))})]})]}),f.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:f.map((g,v)=>{const w=i.find(m=>m.module_path===g.module_path),y=ic.some(m=>m.module_path===g.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:y?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(w==null?void 0:w.description)||"",children:[o.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[y&&o.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(w==null?void 0:w.name)||g.module_path]}),o.jsx("button",{onClick:()=>u(d,v),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Fe,{size:12})})]},v)})})]},d)})})}const oc=[{type:"LlmAgent",label:"LLM Agent",icon:Sr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:Vk,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:Fk,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:cu,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function t4(){return`agent_${Date.now().toString(36)}`}function n4(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function r4(e,t){const n=t4(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},i={id:n,name:r[e]||"new_agent",description:""},s=t?n4(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...i,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...i,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...i,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...i,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function i4({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:s,setSelectedAgentId:a,mcpServers:l}=ut(),[c,u]=k.useState(new Set),[d,p]=k.useState(!1),[f,h]=k.useState(""),[g,v]=k.useState(new Map),[w,y]=k.useState(380),[m,x]=k.useState(!1),j=k.useRef(null),[E,S]=k.useState(null),A=k.useRef(null),[C,R]=k.useState(null),[N,L]=k.useState(null),P=k.useRef(null),B=k.useRef(null),V=k.useCallback(K=>{K.preventDefault(),x(!0)},[]);if(k.useEffect(()=>{const K=re=>{if(!m)return;const ve=Math.min(Math.max(200,re.clientX),600);y(ve)},Z=()=>{x(!1)};return m&&(document.addEventListener("mousemove",K),document.addEventListener("mouseup",Z),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",K),document.removeEventListener("mouseup",Z),document.body.style.cursor="",document.body.style.userSelect=""}},[m]),k.useEffect(()=>{if(t){const K=t.agents.filter(Z=>"sub_agents"in Z&&Z.sub_agents.length>0).map(Z=>Z.id);u(new Set(K))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;function D(){if(!f.trim()||!t)return;const K=`generating_${Date.now()}`,Z=f;v(re=>new Map(re).set(K,Z)),p(!1),h(""),jy(t.id,Z).then(re=>{var ve,je,ze,ke;if(re.success&&re.config){const F=re.config,ae=[];if((ve=F.tools)!=null&&ve.builtin)for(const te of F.tools.builtin)ae.push({type:"builtin",name:te});if((je=F.tools)!=null&&je.mcp)for(const te of F.tools.mcp){const me=l.find(le=>le.name===te.server);me&&ae.push({type:"mcp",server:{...me,tool_filter:te.tools}})}if((ze=F.tools)!=null&&ze.custom)for(const te of F.tools.custom){const me=t.custom_tools.find(le=>le.name===te);me&&ae.push({type:"function",name:te,module_path:me.module_path})}if((ke=F.tools)!=null&&ke.agents)for(const te of F.tools.agents){const me=t.agents.find(le=>le.id===te);me&&ae.push({type:"agent",agent_id:te,name:me.name})}const fe=t.app.models||[],ge=fe.find(te=>te.id===t.app.default_model_id)||fe[0],J={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:F.name||"new_agent",description:F.description||"",instruction:F.instruction||"",model:ge?{provider:ge.provider,model_name:ge.model_name,api_base:ge.api_base,temperature:ge.temperature,max_output_tokens:ge.max_output_tokens,top_p:ge.top_p,top_k:ge.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:ae,sub_agents:F.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(J),a(J.id),e==null||e(J.id)}else console.error("Failed to generate agent:",re.error)}).catch(re=>{console.error("Error generating agent:",re)}).finally(()=>{v(re=>{const ve=new Map(re);return ve.delete(K),ve})})}const X=t.agents.find(K=>K.id===s);function T(K){a(K),e==null||e(K)}function $(K){if(!t)return;const Z=t.app.models||[],re=Z.find(je=>je.id===t.app.default_model_id)||Z[0],ve=r4(K,re);n(ve),T(ve.id)}function I(K,Z){Z.stopPropagation(),confirm("Delete this agent?")&&(r(K),s===K&&(e==null||e(null)))}function _(K){const Z=new Set(c);Z.has(K)?Z.delete(K):Z.add(K),u(Z)}function W(K){if(!P.current||!A.current)return;const Z=P.current.getBoundingClientRect(),re=K.clientY-Z.top,ve=60,je=8;if(re<ve){const ze=Math.max(1,je*(1-re/ve));P.current.scrollTop-=ze}else if(re>Z.height-ve){const ze=Math.max(1,je*(1-(Z.height-re)/ve));P.current.scrollTop+=ze}}function Q(K,Z){K.dataTransfer.setData("text/plain",Z),K.dataTransfer.effectAllowed="move",A.current=Z,requestAnimationFrame(()=>S(Z))}function b(){A.current=null,S(null),R(null),L(null),B.current&&(cancelAnimationFrame(B.current),B.current=null)}function U(K,Z,re){if(!t||(K.preventDefault(),K.stopPropagation(),!A.current))return;const je=t.agents.find(ze=>ze.id===Z);!je||!("sub_agents"in je)||(K.dataTransfer.dropEffect="move",L({parentId:Z,index:re}),R(null))}function z(K,Z,re){if(!t)return;K.preventDefault(),K.stopPropagation();const ve=K.dataTransfer.getData("text/plain");if(!ve)return;const je=t.agents.find(ke=>ke.id===Z);if(!je||!("sub_agents"in je))return;t.agents.forEach(ke=>{"sub_agents"in ke&&ke.sub_agents.includes(ve)&&i(ke.id,{sub_agents:ke.sub_agents.filter(F=>F!==ve)})});const ze=[...je.sub_agents.filter(ke=>ke!==ve)];ze.splice(re,0,ve),i(Z,{sub_agents:ze}),u(ke=>new Set([...ke,Z])),S(null),L(null)}function G(K,Z,re){if(!t)return;const ve=A.current;if(K.preventDefault(),K.stopPropagation(),ve===Z)return;const je=t.agents.find(ze=>ze.id===ve);je&&"sub_agents"in je&&H(je,Z)||(K.dataTransfer.dropEffect="move",R({agentId:Z,type:re}),L(null))}function xe(K){const Z=K.relatedTarget;(!Z||!K.currentTarget.contains(Z))&&R(null)}function ye(K,Z,re){if(!t)return;K.preventDefault(),K.stopPropagation();const ve=K.dataTransfer.getData("text/plain");if(!ve||ve===Z)return;const je=t.agents.find(ke=>ke.id===Z),ze=t.agents.find(ke=>ke.id===ve);if(!(!je||!ze)){if(re==="sub_agent")"sub_agents"in je&&(t.agents.forEach(ke=>{"sub_agents"in ke&&ke.sub_agents.includes(ve)&&i(ke.id,{sub_agents:ke.sub_agents.filter(F=>F!==ve)})}),je.sub_agents.includes(ve)||(i(Z,{sub_agents:[...je.sub_agents,ve]}),u(ke=>new Set([...ke,Z]))));else if(re==="tool"&&"tools"in je){const ke=je;ke.tools.some(ae=>ae.type==="agent"&&ae.agent_id===ve)||i(Z,{tools:[...ke.tools,{type:"agent",agent_id:ve,name:ze.name}]})}S(null),R(null)}}function H(K,Z){if(!t||!("sub_agents"in K))return!1;if(K.sub_agents.includes(Z))return!0;for(const re of K.sub_agents){const ve=t.agents.find(je=>je.id===re);if(ve&&H(ve,Z))return!0}return!1}function M(K){const Z=oc.find(re=>re.type===K);return Z?Z.icon:Sr}function q(K){const Z=oc.find(re=>re.type===K);return Z?Z.color:"#888"}function ee(K,Z=0){return K.map(re=>{const ve=M(re.type),je=q(re.type),ze="sub_agents"in re&&re.sub_agents.length>0,ke="sub_agents"in re,F=re.type==="LlmAgent",ae=c.has(re.id),fe=E===re.id,ge=(C==null?void 0:C.agentId)===re.id&&(C==null?void 0:C.type)==="sub_agent",J=(C==null?void 0:C.agentId)===re.id&&(C==null?void 0:C.type)==="tool",te=ze&&t?re.sub_agents.map(le=>t.agents.find(_e=>_e.id===le)).filter(le=>le!==void 0):[],me=E&&E!==re.id&&(ke||F);return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${s===re.id?"selected":""} ${fe?"dragging":""} ${me?"drop-target":""}`,onClick:()=>T(re.id),style:{paddingLeft:12+Z*20},draggable:!0,onDragStart:le=>Q(le,re.id),onDragEnd:b,onDragOver:le=>{me&&(le.preventDefault(),le.stopPropagation())},children:[o.jsx("div",{className:"drag-handle",children:o.jsx(Lk,{size:12})}),ze?o.jsx("button",{className:"expand-btn",onClick:le=>{le.stopPropagation(),_(re.id)},children:ae?o.jsx(Pt,{size:16}):o.jsx(bt,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:je},children:o.jsx(ve,{size:14})}),o.jsx("span",{className:"agent-name",children:re.name}),o.jsx("button",{className:"delete-btn",onClick:le=>I(re.id,le),children:o.jsx(Fe,{size:14})}),me&&o.jsxs("div",{className:"drop-overlay",children:[ke&&o.jsxs("div",{className:`drop-zone-overlay ${ge?"active":""}`,onDragOver:le=>G(le,re.id,"sub_agent"),onDragLeave:xe,onDrop:le=>ye(le,re.id,"sub_agent"),children:[o.jsx(By,{size:12}),o.jsx("span",{children:"Sub-agent"})]}),F&&o.jsxs("div",{className:`drop-zone-overlay ${J?"active":""}`,onDragOver:le=>G(le,re.id,"tool"),onDragLeave:xe,onDrop:le=>ye(le,re.id,"tool"),children:[o.jsx(an,{size:12}),o.jsx("span",{children:"Tool"})]})]})]}),ze&&ae&&o.jsxs("div",{className:"sub-agents",children:[E&&E!==re.id&&o.jsx("div",{className:`insert-indicator ${(N==null?void 0:N.parentId)===re.id&&(N==null?void 0:N.index)===0?"active":""}`,style:{marginLeft:12+(Z+1)*20},onDragOver:le=>U(le,re.id,0),onDragLeave:()=>L(null),onDrop:le=>z(le,re.id,0)}),te.map((le,_e)=>o.jsxs(It.Fragment,{children:[ee([le],Z+1),E&&E!==re.id&&E!==le.id&&o.jsx("div",{className:`insert-indicator ${(N==null?void 0:N.parentId)===re.id&&(N==null?void 0:N.index)===_e+1?"active":""}`,style:{marginLeft:12+(Z+1)*20},onDragOver:Ze=>U(Ze,re.id,_e+1),onDragLeave:()=>L(null),onDrop:Ze=>z(Ze,re.id,_e+1)})]},le.id))]})]},re.id)})}const Y=new Set(t.agents.flatMap(K=>"sub_agents"in K?K.sub_agents:[])),se=t.agents.filter(K=>!Y.has(K.id));return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"agents-sidebar",style:{width:w},children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")",g.size>0&&o.jsxs("span",{className:"generating-badge",children:[o.jsx(Qn,{size:12,className:"spin"})," ",g.size]})]}),o.jsxs("div",{className:"header-buttons",children:[oc.map(({type:K,icon:Z,color:re})=>o.jsx("button",{className:"quick-add-btn",style:{background:re},onClick:()=>$(K),title:`Add ${K}`,children:o.jsx(Z,{size:14})},K)),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>p(!0),title:"AI-powered agent setup",children:o.jsx(Vl,{size:14})})]})]}),o.jsx("div",{className:"agents-list",ref:P,onDragOver:W,children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Sr,{size:32}),o.jsx("p",{children:"No agents yet"})]}):ee(se)})]}),o.jsx("div",{ref:j,className:`sidebar-resizer ${m?"resizing":""}`,onMouseDown:V}),o.jsx("div",{className:"agent-editor-area",children:X?o.jsx(YN,{agent:X}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Sr,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),d&&o.jsx("div",{className:"type-selector",onClick:()=>p(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:K=>K.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(Vl,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:f,onChange:K=>h(K.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:K=>{K.key==="Enter"&&(K.metaKey||K.ctrlKey)&&f.trim()&&D()}}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[l.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>p(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:D,disabled:!f.trim(),children:[o.jsx(Vl,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var Zd="\x1B[0m",ep="\x1B[1m",Mv=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",o4=e=>{let t=Mv(e),n=`${ep}[MONACOPILOT ERROR] ${t}${Zd}`;return console.error(n),{message:t}},s4=(e,t)=>{console.warn(`${ep}[MONACOPILOT WARN] ${e}${t?`
${Mv(t)}`:""}${Zd}`)},a4=(e,t,n)=>console.warn(`${ep}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${Zd}`),Na={report:o4,warn:s4,warnDeprecated:a4},cm=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let s=r.slice(0,t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)},l4=100,c4=!0,Iv="onIdle",u4=!0,d4=120,p4=400,f4=0,tp=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),h4=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),m4=e=>e.getValue(),g4=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Ov=class $v{constructor(){this.cache=new g4($v.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=tp(n,r),a=s,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${s}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=s-1&&u<=l+1:c===i?u>=s-1:c===a?u<=l+1:!0}};Ov.MAX_CACHE_SIZE=20;var x4=Ov,y4=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],a=s.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},v4=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let h=e.substring(0,f),g=t.slice(-f);h===g&&(c=f)}let d=Math.min(r,s);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},b4=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new v4}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,s),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,a=n+s,l=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},w4=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},k4=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:a,maxContextLines:l=l4}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(v,w,y)=>{let m=v(e,t);return w?cm(m,w,y):m},p=(v,w)=>!v||!w?v:v.map(({content:y,...m})=>({...m,content:cm(y,w)})),f=d(tp,u,{truncateDirection:"keepEnd"}),h=d(h4,u,{truncateDirection:"keepStart"}),g=p(a,u);return{filename:r,language:i,technologies:s,relatedFiles:g,textBeforeCursor:f,textAfterCursor:h,cursorPosition:e}},j4=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:s,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},_4=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,Wi=e=>({items:e,enableForwardStability:!0}),ju=new x4,S4=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:a=Iv,enableCaching:l=c4,allowFollowUpCompletions:c=u4,onError:u,requestHandler:d}=s;if(l&&!i){let p=ju.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return Wi(p)}if(r.isCancellationRequested||!c&&i)return Wi([]);try{let p=j4(async g=>{var w,y;(w=s.onCompletionRequested)==null||w.call(s,g);let v;if(d)v=await d(g);else if(s.endpoint)v=await w4({endpoint:s.endpoint,...g});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(v.error)throw new Error(v.error);return(y=s.onCompletionRequestFinished)==null||y.call(s,g,v),v},{onTyping:d4,onIdle:p4,onDemand:f4}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=k4({pos:n,mdl:t,options:s}),{completion:h}=await p({body:{completionMetadata:f}});if(h){let g=new y4(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),v=new b4(e);return l&&ju.add({completion:g,range:v.computeCacheRange(n,g),textBeforeCursor:tp(n,t)}),Wi([{insertText:g,range:v.computeInsertionRange(n,g,t)}])}}catch(p){if(_4(p))return Wi([]);u?u(p):Na.warn("Cannot provide completion",p)}return Wi([])},np=new WeakMap,sl=e=>np.get(e),C4=(e,t)=>{np.set(e,t)},um=e=>{np.delete(e)},N4=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),E4=(e,t)=>{let n=sl(e);!n||!n.options||(n.options={...n.options,...t})},z4=(e,t,n)=>{let r=sl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:m4(t),position:s,triggerType:c.trigger??Iv})))return S4({monaco:e,mdl:i,pos:s,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,s.range))},freeInlineCompletions:()=>{}}):null},T4={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},A4=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(T4).some(t=>t(this.monaco,e))}},P4=(e,t,n,r)=>{let i=new A4(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},Dv=(e,t,n)=>{let r=[];C4(t,N4(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=sl(t);if(!i)return Na.warn("Completion is not registered properly. State not found."),R4();let s=z4(e,t,n);s&&r.push(s);let a=P4(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();ju.clear(),um(t)},trigger:()=>L4(t),updateOptions:l=>{E4(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Na.report(i),{deregister:()=>{for(let s of r)s.dispose();um(t)},trigger:()=>{},updateOptions:()=>{}}}},L4=e=>{let t=sl(e);if(!t){Na.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},R4=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function M4(){return`tool_${Date.now().toString(36)}`}function I4(e){return/^[a-zA-Z0-9_]+$/.test(e)}const O4=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function $4({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=ut(),[d,p]=k.useState(""),[f,h]=k.useState(null),[g,v]=k.useState("tools"),[w,y]=k.useState(null),[m,x]=k.useState(""),[j,E]=k.useState(!1),[S,A]=k.useState(!1),[C,R]=k.useState(!1),[N,L]=k.useState(null),[P,B]=k.useState(null),[V,D]=k.useState({}),[X,T]=k.useState({}),[$,I]=k.useState("");if(!t)return null;const _=t.mcp_servers||[],W=t.custom_tools.find(F=>F.id===a),Q=_.find(F=>F.name===w);function b(F){l(F),e==null||e(F)}k.useEffect(()=>{W&&(p(W.code),B(null))},[a]),k.useEffect(()=>{Q&&(x(JSON.stringify(Q,null,2)),E(!1))},[w]),k.useEffect(()=>{if(!t)return;const F=U(t.mcp_servers||[]);I(JSON.stringify(F,null,2))},[t==null?void 0:t.mcp_servers]),k.useEffect(()=>{if(g==="mcp"&&_.length>0){const F=_.filter(ae=>!V[ae.name]||V[ae.name]==="unknown");F.length>0&&F.forEach(ae=>{ye(ae.name)})}},[g,_.length]);function U(F){const ae={};for(const fe of F){const ge={};fe.connection_type==="stdio"?(ge.command=fe.command||"",ge.args=fe.args||[],Object.keys(fe.env||{}).length>0&&(ge.env=fe.env)):fe.connection_type==="sse"&&(ge.url=fe.url||"",Object.keys(fe.headers||{}).length>0&&(ge.headers=fe.headers)),fe.timeout&&fe.timeout!==30&&(ge.timeout=fe.timeout),fe.tool_filter&&(ge.tool_filter=fe.tool_filter),fe.tool_name_prefix&&(ge.tool_name_prefix=fe.tool_name_prefix),ae[fe.name]=ge}return{mcpServers:ae}}function z(F){const ae=[];for(const[fe,ge]of Object.entries(F.mcpServers||{})){const J={name:fe,description:ge.description||"",connection_type:ge.url?"sse":"stdio",command:ge.command,args:ge.args||[],env:ge.env||{},url:ge.url,headers:ge.headers||{},timeout:ge.timeout||30,tool_filter:ge.tool_filter||null,tool_name_prefix:ge.tool_name_prefix};ae.push(J)}return ae}function G(F){F!==void 0&&I(F)}function xe(){try{const F=JSON.parse($),ae=z(F);n({mcp_servers:ae})}catch(F){alert("Invalid JSON: "+F.message)}}async function ye(F){const ae=_.find(fe=>fe.name===F);if(ae){D(fe=>({...fe,[F]:"testing"})),T(fe=>({...fe,[F]:""}));try{const fe=await lu({connection_type:ae.connection_type,command:ae.command,args:ae.args,env:ae.env,url:ae.url,headers:ae.headers,timeout:ae.timeout});D(ge=>({...ge,[F]:fe.success?"connected":"error"})),!fe.success&&fe.error&&T(ge=>({...ge,[F]:fe.error||"Unknown error"}))}catch(fe){D(ge=>({...ge,[F]:"error"})),T(ge=>({...ge,[F]:fe.message}))}}}function H(F){const ae=u.find(ge=>ge.name===F);if(!ae)return;if(_.some(ge=>ge.name===F)){alert(`Server "${F}" is already configured`);return}const fe={name:ae.name,description:ae.description||"",connection_type:ae.connection_type,command:ae.command,args:ae.args||[],env:ae.env||{},url:ae.url,headers:ae.headers||{},timeout:ae.timeout||30,tool_filter:ae.tool_filter||null,tool_name_prefix:ae.tool_name_prefix};n({mcp_servers:[..._,fe]})}async function M(){for(const F of _)await ye(F.name)}function q(){const F=M4();r({id:F,name:"new_tool",description:"",module_path:"tools.custom",code:O4,state_keys_used:[]}),b(F)}function ee(F,ae){ae.stopPropagation(),confirm("Delete this tool?")&&(s(F),a===F&&(e==null||e(null)))}function Y(F){W&&(F.name!==void 0&&(F.name===""||I4(F.name)?B(null):B("Name can only contain letters, numbers, and underscores")),i(W.id,F))}function se(F){F!==void 0&&W&&(p(F),Y({code:F}))}async function K(){if(W){A(!0);try{const F=await _y(t.id,W.name,W.description,W.state_keys_used);F.success&&F.code?(p(F.code),Y({code:F.code})):(console.error("Failed to generate tool code:",F.error),alert("Failed to generate tool code: "+(F.error||"Unknown error")))}catch(F){console.error("Error generating tool code:",F),alert("Error generating tool code: "+F.message)}finally{A(!1)}}}const Z=k.useRef(null),re=k.useCallback((F,ae)=>{if(Z.current&&typeof Z.current=="function")try{Z.current()}catch{}try{const fe=Dv(ae,F,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof fe=="function"?Z.current=fe:Z.current=null}catch{Z.current=null}},[]);k.useEffect(()=>()=>{if(Z.current&&typeof Z.current=="function")try{Z.current()}catch{}},[]);function ve(F){F!==void 0&&(x(F),E(F!==JSON.stringify(Q,null,2)))}function je(){if(Q)try{const F=JSON.parse(m),ae=Q.name,fe=_.map(ge=>ge.name===ae?F:ge);n({mcp_servers:fe}),y(F.name),E(!1)}catch(F){alert("Invalid JSON: "+F.message)}}async function ze(){R(!0),L(null);try{const F=JSON.parse(m),ae=await lu({connection_type:F.connection_type,command:F.command,args:F.args,env:F.env,url:F.url,headers:F.headers,timeout:F.timeout||30});if(L(ae),ae.success&&ae.tools.length>0){const fe={...F,tool_filter:ae.tools.map(ge=>ge.name)};x(JSON.stringify(fe,null,2)),E(!0)}}catch(F){L({success:!1,tools:[],error:F.message})}finally{R(!1)}}const ke={};return t.custom_tools.forEach(F=>{const ae=F.module_path||"tools";ke[ae]||(ke[ae]=[]),ke[ae].push(F)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${g==="tools"?"active":""}`,onClick:()=>{v("tools"),y(null)},children:[o.jsx(an,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${g==="mcp"?"active":""}`,onClick:()=>{v("mcp"),l(null),h(null),y(null)},children:[o.jsx(Fi,{size:14}),"MCP"]})]}),g==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:q,children:[o.jsx(Ke,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Ok,{size:14}),"Built-in Tools"]}),c.map(F=>o.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===F.name?"selected":""}`,onClick:()=>{h(F),b(null),y(null)},children:[o.jsx(uu,{size:14}),o.jsx("span",{className:"tool-name",children:F.name})]},F.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(kn,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(ke).map(([F,ae])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Ry,{size:14}),F]}),ae.map(fe=>o.jsxs("div",{className:`tool-item ${a===fe.id?"selected":""}`,onClick:()=>{b(fe.id),h(null),y(null)},children:[o.jsx(an,{size:14}),o.jsx("span",{className:"tool-name",children:fe.name}),o.jsx("button",{className:"delete-btn",onClick:ge=>ee(fe.id,ge),children:o.jsx(Fe,{size:14})})]},fe.id))]},F))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",_.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:M,title:"Test all server connections",children:o.jsx(rn,{size:14})})]}),o.jsx("div",{className:"mcp-servers-list",children:_.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Fi,{size:32}),o.jsx("p",{children:"No MCP servers configured"}),o.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):_.map(F=>{const ae=V[F.name]||"unknown",fe=X[F.name];return o.jsxs("div",{className:"mcp-server-item-wrapper",children:[o.jsxs("div",{className:"mcp-server-item",children:[o.jsxs("div",{className:"mcp-server-info",children:[o.jsx(Fi,{size:14}),o.jsx("span",{className:"mcp-server-name",children:F.name}),o.jsxs("span",{className:`mcp-status-badge ${ae}`,children:[ae==="testing"?o.jsx(Qn,{size:10,className:"spin"}):null,ae==="unknown"&&"●",ae==="connected"&&"●",ae==="error"&&"●"]})]}),o.jsxs("div",{className:"mcp-server-actions",children:[o.jsx("span",{className:"mcp-server-type",children:F.connection_type}),o.jsxs("button",{className:"btn btn-sm",onClick:()=>ye(F.name),disabled:ae==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[ae==="testing"?o.jsx(Qn,{size:12,className:"spin"}):o.jsx(rn,{size:12}),o.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),ae==="error"&&fe&&o.jsxs("div",{className:"mcp-server-error",children:[o.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",fe]})]},F.name)})})]})]}),o.jsx("div",{className:"tool-editor",children:f?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(uu,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:f.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):W?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(an,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:W.name,onChange:F=>Y({name:F.target.value}),placeholder:"Tool name",style:{borderColor:P?"var(--error)":void 0}}),P&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:P})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:W.description,onChange:F=>Y({description:F.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:W.module_path,onChange:F=>Y({module_path:F.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:K,disabled:S||!W.name||!W.description,title:!W.name||!W.description?"Add a name and description first":"Generate code using AI",children:S?o.jsxs(o.Fragment,{children:[o.jsx(Qn,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Id,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(Jt,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:se,onMount:re,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(Rd,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(F=>{const ae=W.state_keys_used.includes(F.name);return o.jsxs("label",{className:`state-key-chip ${ae?"selected":""}`,title:F.description,children:[o.jsx("input",{type:"checkbox",checked:ae,onChange:fe=>{const ge=fe.target.checked?[...W.state_keys_used,F.name]:W.state_keys_used.filter(J=>J!==F.name);Y({state_keys_used:ge})}}),F.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",F.type,")"]})]},F.name)})})]})]}):Q?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Fi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:Q.name}),o.jsx("span",{className:"badge badge-info",children:Q.connection_type}),j&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:ze,disabled:C,title:"Test connection and discover available tools",children:[C?o.jsx(Qn,{size:14,className:"spin"}):o.jsx(Ld,{size:14}),C?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:je,disabled:!j,children:[o.jsx(ja,{size:14}),"Save"]})]}),N&&o.jsx("div",{className:`mcp-test-result ${N.success?"success":"error"}`,children:N.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",N.tools.length," tools"]}),N.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:N.tools.map(F=>o.jsxs("li",{children:[o.jsx("code",{children:F.name}),F.description&&o.jsxs("span",{children:[" — ",F.description]})]},F.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:N.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(Jt,{height:"100%",language:"json",theme:"vs-dark",value:m,onChange:ve,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):g==="mcp"?o.jsxs("div",{className:"mcp-json-editor",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Fi,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),o.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),o.jsxs("select",{value:"",onChange:F=>{F.target.value&&H(F.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[o.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(F=>!_.some(ae=>ae.name===F.name)).map(F=>o.jsxs("option",{value:F.name,children:[F.name," - ",F.description||"No description"]},F.name))]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:xe,children:[o.jsx(ja,{size:14}),"Apply Changes"]})]}),o.jsx("div",{className:"mcp-json-info",children:o.jsxs("p",{children:["Configure your MCP servers using the standard ",o.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration."]})}),o.jsx("div",{className:"editor-content",style:{flex:1},children:o.jsx(Jt,{height:"100%",defaultLanguage:"json",value:$,onChange:G,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(kn,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function D4(){return`callback_${Date.now().toString(36)}`}function dm(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Fv(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return Fv("before_agent")}}function F4({onSelectCallback:e}){var C,R;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=ut(),[a,l]=k.useState(""),[c,u]=k.useState(null),[d,p]=k.useState(null),[f,h]=k.useState(!1),g=k.useRef(null);if(!t)return null;const v=t.custom_callbacks||[],w=v.find(N=>N.id===c);function y(N){u(N),e==null||e(N)}k.useEffect(()=>{w?(l(w.code),p(null)):l("")},[c,w]);function m(){const N=D4(),L="new_callback",P={id:N,name:L,description:"",module_path:`callbacks.${L}`,code:Fv("before_agent"),state_keys_used:[]};r(P),y(N)}function x(N,L){L.stopPropagation(),confirm("Delete this callback?")&&(s(N),c===N&&(e==null||e(null),u(null),l("")))}function j(){if(!c)return;const N=v.find(B=>B.id===c);if(!N)return;const L=N.name.trim();if(!L){alert("Please enter a name");return}if(!dm(L)){p("Name must contain only alphanumeric characters and underscores");return}if(v.find(B=>B.name===L&&B.id!==N.id)){p("A callback with this name already exists");return}i(N.id,{code:a,name:L,description:N.description,module_path:`callbacks.${L}`,state_keys_used:N.state_keys_used}),p(null)}function E(N,L){g.current=L;try{Dv(L,{endpoint:"/api/code-completion",language:"python"})}catch(P){console.warn("Failed to register Monacopilot completion:",P)}}async function S(){if(w){h(!0);try{let N="before_agent";const L=w.name.toLowerCase(),P=w.description.toLowerCase();L.includes("after_agent")||P.includes("after agent")?N="after_agent":L.includes("before_model")||P.includes("before model")?N="before_model":L.includes("after_model")||P.includes("after model")?N="after_model":L.includes("before_tool")||P.includes("before tool")?N="before_tool":L.includes("after_tool")||P.includes("after tool")?N="after_tool":(L.includes("before_agent")||P.includes("before agent"))&&(N="before_agent");const B=await Sy(t.id,w.name,w.description,N,w.state_keys_used);B.success&&B.code?(l(B.code),i(w.id,{code:B.code})):(console.error("Failed to generate callback code:",B.error),alert("Failed to generate callback code: "+(B.error||"Unknown error")))}catch(N){console.error("Error generating callback code:",N),alert("Error generating callback code: "+N.message)}finally{h(!1)}}}const A=((R=(C=t.app)==null?void 0:C.state_keys)==null?void 0:R.map(N=>N.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:m,title:"Add Callback",children:o.jsx(Ke,{size:16})})]}),o.jsx("div",{className:"tools-list",children:v.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):v.map(N=>o.jsxs("div",{className:`tool-item ${c===N.id?"selected":""}`,onClick:()=>y(N.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:N.name}),N.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:N.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:L=>x(N.id,L),title:"Delete",children:o.jsx(Fe,{size:14})})})]},N.id))})]}),o.jsx("div",{className:"tools-editor",children:w?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:j,children:[o.jsx(ja,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:w.name,onChange:N=>{const L=N.target.value;i(w.id,{name:L,module_path:`callbacks.${L.trim()||"callback"}`}),d&&dm(L)&&p(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:w.description,onChange:N=>i(w.id,{description:N.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:w.module_path,onChange:N=>i(w.id,{module_path:N.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:A.map(N=>{const L=w.state_keys_used.includes(N);return o.jsxs("button",{type:"button",className:`btn btn-sm ${L?"btn-primary":"btn-secondary"}`,onClick:()=>{const P=L?w.state_keys_used.filter(B=>B!==N):[...w.state_keys_used,N];i(w.id,{state_keys_used:P})},children:[o.jsx(Rd,{size:12,style:{marginRight:"4px"}}),N]},N)})}),A.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:S,disabled:f||!w.name,title:w.name?"Generate code using AI":"Add a name first",children:f?o.jsxs(o.Fragment,{children:[o.jsx(Qn,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(Id,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(Jt,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:N=>l(N||""),onMount:E,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function B4(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],s=n.split(".");if(s.length>2){const a=s.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Le={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function U4({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[s,a]=k.useState(""),[l,c]=k.useState("exact"),[u,d]=k.useState(!1),[p,f]=k.useState(""),[h,g]=k.useState(!1),[v,w]=k.useState(t),y=B4(e.url);k.useEffect(()=>{y.length>0&&!s&&a(y[0].pattern)},[y,s]),k.useEffect(()=>{const A=setInterval(()=>{w(C=>C<=1?(r(),0):C-1)},1e3);return()=>clearInterval(A)},[r]);const m=k.useCallback(()=>{n()},[n]),x=k.useCallback(()=>{n(h?p:s,l,u)},[n,h,p,s,l,u]),j=v/t*100,E=e.source.startsWith("mcp:"),S=E?e.source.substring(4):"agent";return o.jsx("div",{style:Le.overlay,children:o.jsxs("div",{style:Le.dialog,children:[o.jsxs("div",{style:Le.header,children:[o.jsx(Py,{size:18,style:Le.headerIcon}),o.jsx("span",{style:Le.headerTitle,children:"Network Request Approval"}),o.jsx("button",{style:Le.closeButton,onClick:i,children:o.jsx(Xo,{size:16})})]}),o.jsxs("div",{style:Le.content,children:[o.jsx("div",{style:Le.sourceText,children:E?o.jsxs(o.Fragment,{children:['MCP server "',o.jsx("span",{style:{color:"#22d3ee"},children:S}),'" wants to connect to:']}):o.jsx(o.Fragment,{children:"Agent wants to connect to:"})}),o.jsxs("div",{style:Le.requestBox,children:[o.jsxs("div",{children:[o.jsx("span",{style:Le.methodBadge(e.method),children:e.method}),o.jsx("span",{style:Le.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&o.jsxs("div",{style:Le.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),o.jsxs("div",{children:[o.jsx("div",{style:Le.label,children:"Allow pattern:"}),h?o.jsxs("div",{children:[o.jsx("input",{type:"text",value:p,onChange:A=>f(A.target.value),placeholder:"e.g., *.example.com/*",style:Le.customInput}),o.jsxs("div",{style:Le.radioGroup,children:[o.jsxs("label",{style:Le.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),o.jsxs("label",{style:Le.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),o.jsx("button",{onClick:()=>g(!1),style:Le.backLink,children:"← Back to suggestions"})]})]}):o.jsxs("select",{value:s,onChange:A=>{A.target.value==="__custom__"?(g(!0),f(s)):a(A.target.value)},style:Le.select,children:[y.map(A=>o.jsx("option",{value:A.pattern,children:A.label},A.pattern)),o.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),o.jsxs("label",{style:Le.checkboxLabel,children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:u,onChange:A=>d(A.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),o.jsxs("div",{style:Le.footer,children:[o.jsxs("button",{onClick:r,style:Le.button("deny"),children:[o.jsx(Ek,{size:14}),"Deny"]}),o.jsxs("button",{onClick:m,style:Le.button("once"),children:[o.jsx(Ad,{size:14}),"Allow Once"]}),o.jsxs("button",{onClick:x,style:Le.button("pattern"),children:[o.jsx(Dy,{size:14}),"Allow Pattern"]}),o.jsxs("div",{style:Le.timerContainer,children:[o.jsx(Lo,{size:14}),o.jsxs("span",{children:[v,"s"]})]})]}),o.jsx("div",{style:Le.progressBar,children:o.jsx("div",{style:Le.progressFill(j)})})]})})}var V4={value:()=>{}};function al(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new Js(n)}function Js(e){this._=e}function W4(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}Js.prototype=al.prototype={constructor:Js,on:function(e,t){var n=this._,r=W4(e+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(e=r[s]).type)&&(i=H4(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(i=(e=r[s]).type)n[i]=pm(n[i],e.name,t);else if(t==null)for(i in n)n[i]=pm(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new Js(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};function H4(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function pm(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=V4,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var _u="http://www.w3.org/1999/xhtml";const fm={svg:"http://www.w3.org/2000/svg",xhtml:_u,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ll(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),fm.hasOwnProperty(t)?{space:fm[t],local:e}:e}function q4(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===_u&&t.documentElement.namespaceURI===_u?t.createElement(e):t.createElementNS(n,e)}}function J4(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Bv(e){var t=ll(e);return(t.local?J4:q4)(t)}function K4(){}function rp(e){return e==null?K4:function(){return this.querySelector(e)}}function G4(e){typeof e!="function"&&(e=rp(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=new Array(a),c,u,d=0;d<a;++d)(c=s[d])&&(u=e.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u);return new Dt(r,this._parents)}function Q4(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Y4(){return[]}function Uv(e){return e==null?Y4:function(){return this.querySelectorAll(e)}}function X4(e){return function(){return Q4(e.apply(this,arguments))}}function Z4(e){typeof e=="function"?e=X4(e):e=Uv(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var a=t[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&(r.push(e.call(c,c.__data__,u,a)),i.push(c));return new Dt(r,i)}function Vv(e){return function(){return this.matches(e)}}function Wv(e){return function(t){return t.matches(e)}}var eE=Array.prototype.find;function tE(e){return function(){return eE.call(this.children,e)}}function nE(){return this.firstElementChild}function rE(e){return this.select(e==null?nE:tE(typeof e=="function"?e:Wv(e)))}var iE=Array.prototype.filter;function oE(){return Array.from(this.children)}function sE(e){return function(){return iE.call(this.children,e)}}function aE(e){return this.selectAll(e==null?oE:sE(typeof e=="function"?e:Wv(e)))}function lE(e){typeof e!="function"&&(e=Vv(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Dt(r,this._parents)}function Hv(e){return new Array(e.length)}function cE(){return new Dt(this._enter||this._groups.map(Hv),this._parents)}function Ea(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Ea.prototype={constructor:Ea,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function uE(e){return function(){return e}}function dE(e,t,n,r,i,s){for(var a=0,l,c=t.length,u=s.length;a<u;++a)(l=t[a])?(l.__data__=s[a],r[a]=l):n[a]=new Ea(e,s[a]);for(;a<c;++a)(l=t[a])&&(i[a]=l)}function pE(e,t,n,r,i,s,a){var l,c,u=new Map,d=t.length,p=s.length,f=new Array(d),h;for(l=0;l<d;++l)(c=t[l])&&(f[l]=h=a.call(c,c.__data__,l,t)+"",u.has(h)?i[l]=c:u.set(h,c));for(l=0;l<p;++l)h=a.call(e,s[l],l,s)+"",(c=u.get(h))?(r[l]=c,c.__data__=s[l],u.delete(h)):n[l]=new Ea(e,s[l]);for(l=0;l<d;++l)(c=t[l])&&u.get(f[l])===c&&(i[l]=c)}function fE(e){return e.__data__}function hE(e,t){if(!arguments.length)return Array.from(this,fE);var n=t?pE:dE,r=this._parents,i=this._groups;typeof e!="function"&&(e=uE(e));for(var s=i.length,a=new Array(s),l=new Array(s),c=new Array(s),u=0;u<s;++u){var d=r[u],p=i[u],f=p.length,h=mE(e.call(d,d&&d.__data__,u,r)),g=h.length,v=l[u]=new Array(g),w=a[u]=new Array(g),y=c[u]=new Array(f);n(d,p,v,w,y,h,t);for(var m=0,x=0,j,E;m<g;++m)if(j=v[m]){for(m>=x&&(x=m+1);!(E=w[x])&&++x<g;);j._next=E||null}}return a=new Dt(a,r),a._enter=l,a._exit=c,a}function mE(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function gE(){return new Dt(this._exit||this._groups.map(Hv),this._parents)}function xE(e,t,n){var r=this.enter(),i=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function yE(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,a=Math.min(i,s),l=new Array(i),c=0;c<a;++c)for(var u=n[c],d=r[c],p=u.length,f=l[c]=new Array(p),h,g=0;g<p;++g)(h=u[g]||d[g])&&(f[g]=h);for(;c<i;++c)l[c]=n[c];return new Dt(l,this._parents)}function vE(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function bE(e){e||(e=wE);function t(p,f){return p&&f?e(p.__data__,f.__data__):!p-!f}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],l=a.length,c=i[s]=new Array(l),u,d=0;d<l;++d)(u=a[d])&&(c[d]=u);c.sort(t)}return new Dt(i,this._parents).order()}function wE(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function kE(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function jE(){return Array.from(this)}function _E(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function SE(){let e=0;for(const t of this)++e;return e}function CE(){return!this.node()}function NE(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],s=0,a=i.length,l;s<a;++s)(l=i[s])&&e.call(l,l.__data__,s,i);return this}function EE(e){return function(){this.removeAttribute(e)}}function zE(e){return function(){this.removeAttributeNS(e.space,e.local)}}function TE(e,t){return function(){this.setAttribute(e,t)}}function AE(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function PE(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function LE(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function RE(e,t){var n=ll(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?zE:EE:typeof t=="function"?n.local?LE:PE:n.local?AE:TE)(n,t))}function qv(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function ME(e){return function(){this.style.removeProperty(e)}}function IE(e,t,n){return function(){this.style.setProperty(e,t,n)}}function OE(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function $E(e,t,n){return arguments.length>1?this.each((t==null?ME:typeof t=="function"?OE:IE)(e,t,n??"")):wi(this.node(),e)}function wi(e,t){return e.style.getPropertyValue(t)||qv(e).getComputedStyle(e,null).getPropertyValue(t)}function DE(e){return function(){delete this[e]}}function FE(e,t){return function(){this[e]=t}}function BE(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function UE(e,t){return arguments.length>1?this.each((t==null?DE:typeof t=="function"?BE:FE)(e,t)):this.node()[e]}function Jv(e){return e.trim().split(/^|\s+/)}function ip(e){return e.classList||new Kv(e)}function Kv(e){this._node=e,this._names=Jv(e.getAttribute("class")||"")}Kv.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function Gv(e,t){for(var n=ip(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function Qv(e,t){for(var n=ip(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function VE(e){return function(){Gv(this,e)}}function WE(e){return function(){Qv(this,e)}}function HE(e,t){return function(){(t.apply(this,arguments)?Gv:Qv)(this,e)}}function qE(e,t){var n=Jv(e+"");if(arguments.length<2){for(var r=ip(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?HE:t?VE:WE)(n,t))}function JE(){this.textContent=""}function KE(e){return function(){this.textContent=e}}function GE(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function QE(e){return arguments.length?this.each(e==null?JE:(typeof e=="function"?GE:KE)(e)):this.node().textContent}function YE(){this.innerHTML=""}function XE(e){return function(){this.innerHTML=e}}function ZE(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function ez(e){return arguments.length?this.each(e==null?YE:(typeof e=="function"?ZE:XE)(e)):this.node().innerHTML}function tz(){this.nextSibling&&this.parentNode.appendChild(this)}function nz(){return this.each(tz)}function rz(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function iz(){return this.each(rz)}function oz(e){var t=typeof e=="function"?e:Bv(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function sz(){return null}function az(e,t){var n=typeof e=="function"?e:Bv(e),r=t==null?sz:typeof t=="function"?t:rp(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function lz(){var e=this.parentNode;e&&e.removeChild(this)}function cz(){return this.each(lz)}function uz(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function dz(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function pz(e){return this.select(e?dz:uz)}function fz(e){return arguments.length?this.property("__data__",e):this.node().__data__}function hz(e){return function(t){e.call(this,t,this.__data__)}}function mz(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function gz(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,s;n<i;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function xz(e,t,n){return function(){var r=this.__on,i,s=hz(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=t;return}}this.addEventListener(e.type,s,n),i={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(i):this.__on=[i]}}function yz(e,t,n){var r=mz(e+""),i,s=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,u=l.length,d;c<u;++c)for(i=0,d=l[c];i<s;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?xz:gz,i=0;i<s;++i)this.each(l(r[i],t,n));return this}function Yv(e,t,n){var r=qv(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function vz(e,t){return function(){return Yv(this,e,t)}}function bz(e,t){return function(){return Yv(this,e,t.apply(this,arguments))}}function wz(e,t){return this.each((typeof t=="function"?bz:vz)(e,t))}function*kz(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var Xv=[null];function Dt(e,t){this._groups=e,this._parents=t}function ns(){return new Dt([[document.documentElement]],Xv)}function jz(){return this}Dt.prototype=ns.prototype={constructor:Dt,select:G4,selectAll:Z4,selectChild:rE,selectChildren:aE,filter:lE,data:hE,enter:cE,exit:gE,join:xE,merge:yE,selection:jz,order:vE,sort:bE,call:kE,nodes:jE,node:_E,size:SE,empty:CE,each:NE,attr:RE,style:$E,property:UE,classed:qE,text:QE,html:ez,raise:nz,lower:iz,append:oz,insert:az,remove:cz,clone:pz,datum:fz,on:yz,dispatch:wz,[Symbol.iterator]:kz};function Io(e){return typeof e=="string"?new Dt([[document.querySelector(e)]],[document.documentElement]):new Dt([[e]],Xv)}function _z(e){let t;for(;t=e.sourceEvent;)e=t;return e}function hm(e,t){if(e=_z(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const Sz={passive:!1},Oo={capture:!0,passive:!1};function sc(e){e.stopImmediatePropagation()}function li(e){e.preventDefault(),e.stopImmediatePropagation()}function Cz(e){var t=e.document.documentElement,n=Io(e).on("dragstart.drag",li,Oo);"onselectstart"in t?n.on("selectstart.drag",li,Oo):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Nz(e,t){var n=e.document.documentElement,r=Io(e).on("dragstart.drag",null);t&&(r.on("click.drag",li,Oo),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Es=e=>()=>e;function Su(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:s,x:a,y:l,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Su.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Ez(e){return!e.ctrlKey&&!e.button}function zz(){return this.parentNode}function Tz(e,t){return t??{x:e.x,y:e.y}}function Az(){return navigator.maxTouchPoints||"ontouchstart"in this}function Pz(){var e=Ez,t=zz,n=Tz,r=Az,i={},s=al("start","drag","end"),a=0,l,c,u,d,p=0;function f(j){j.on("mousedown.drag",h).filter(r).on("touchstart.drag",w).on("touchmove.drag",y,Sz).on("touchend.drag touchcancel.drag",m).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(j,E){if(!(d||!e.call(this,j,E))){var S=x(this,t.call(this,j,E),j,E,"mouse");S&&(Io(j.view).on("mousemove.drag",g,Oo).on("mouseup.drag",v,Oo),Cz(j.view),sc(j),u=!1,l=j.clientX,c=j.clientY,S("start",j))}}function g(j){if(li(j),!u){var E=j.clientX-l,S=j.clientY-c;u=E*E+S*S>p}i.mouse("drag",j)}function v(j){Io(j.view).on("mousemove.drag mouseup.drag",null),Nz(j.view,u),li(j),i.mouse("end",j)}function w(j,E){if(e.call(this,j,E)){var S=j.changedTouches,A=t.call(this,j,E),C=S.length,R,N;for(R=0;R<C;++R)(N=x(this,A,j,E,S[R].identifier,S[R]))&&(sc(j),N("start",j,S[R]))}}function y(j){var E=j.changedTouches,S=E.length,A,C;for(A=0;A<S;++A)(C=i[E[A].identifier])&&(li(j),C("drag",j,E[A]))}function m(j){var E=j.changedTouches,S=E.length,A,C;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),A=0;A<S;++A)(C=i[E[A].identifier])&&(sc(j),C("end",j,E[A]))}function x(j,E,S,A,C,R){var N=s.copy(),L=hm(R||S,E),P,B,V;if((V=n.call(j,new Su("beforestart",{sourceEvent:S,target:f,identifier:C,active:a,x:L[0],y:L[1],dx:0,dy:0,dispatch:N}),A))!=null)return P=V.x-L[0]||0,B=V.y-L[1]||0,function D(X,T,$){var I=L,_;switch(X){case"start":i[C]=D,_=a++;break;case"end":delete i[C],--a;case"drag":L=hm($||T,E),_=a;break}N.call(X,j,new Su(X,{sourceEvent:T,subject:V,target:f,identifier:C,active:_,x:L[0]+P,y:L[1]+B,dx:L[0]-I[0],dy:L[1]-I[1],dispatch:N}),A)}}return f.filter=function(j){return arguments.length?(e=typeof j=="function"?j:Es(!!j),f):e},f.container=function(j){return arguments.length?(t=typeof j=="function"?j:Es(j),f):t},f.subject=function(j){return arguments.length?(n=typeof j=="function"?j:Es(j),f):n},f.touchable=function(j){return arguments.length?(r=typeof j=="function"?j:Es(!!j),f):r},f.on=function(){var j=s.on.apply(s,arguments);return j===s?f:j},f.clickDistance=function(j){return arguments.length?(p=(j=+j)*j,f):Math.sqrt(p)},f}function op(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function Zv(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function rs(){}var $o=.7,za=1/$o,ci="\\s*([+-]?\\d+)\\s*",Do="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",wn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Lz=/^#([0-9a-f]{3,8})$/,Rz=new RegExp(`^rgb\\(${ci},${ci},${ci}\\)$`),Mz=new RegExp(`^rgb\\(${wn},${wn},${wn}\\)$`),Iz=new RegExp(`^rgba\\(${ci},${ci},${ci},${Do}\\)$`),Oz=new RegExp(`^rgba\\(${wn},${wn},${wn},${Do}\\)$`),$z=new RegExp(`^hsl\\(${Do},${wn},${wn}\\)$`),Dz=new RegExp(`^hsla\\(${Do},${wn},${wn},${Do}\\)$`),mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};op(rs,Fo,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:gm,formatHex:gm,formatHex8:Fz,formatHsl:Bz,formatRgb:xm,toString:xm});function gm(){return this.rgb().formatHex()}function Fz(){return this.rgb().formatHex8()}function Bz(){return e1(this).formatHsl()}function xm(){return this.rgb().formatRgb()}function Fo(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=Lz.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?ym(t):n===3?new jt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?zs(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?zs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Rz.exec(e))?new jt(t[1],t[2],t[3],1):(t=Mz.exec(e))?new jt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Iz.exec(e))?zs(t[1],t[2],t[3],t[4]):(t=Oz.exec(e))?zs(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=$z.exec(e))?wm(t[1],t[2]/100,t[3]/100,1):(t=Dz.exec(e))?wm(t[1],t[2]/100,t[3]/100,t[4]):mm.hasOwnProperty(e)?ym(mm[e]):e==="transparent"?new jt(NaN,NaN,NaN,0):null}function ym(e){return new jt(e>>16&255,e>>8&255,e&255,1)}function zs(e,t,n,r){return r<=0&&(e=t=n=NaN),new jt(e,t,n,r)}function Uz(e){return e instanceof rs||(e=Fo(e)),e?(e=e.rgb(),new jt(e.r,e.g,e.b,e.opacity)):new jt}function Cu(e,t,n,r){return arguments.length===1?Uz(e):new jt(e,t,n,r??1)}function jt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}op(jt,Cu,Zv(rs,{brighter(e){return e=e==null?za:Math.pow(za,e),new jt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?$o:Math.pow($o,e),new jt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new jt(Cr(this.r),Cr(this.g),Cr(this.b),Ta(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:vm,formatHex:vm,formatHex8:Vz,formatRgb:bm,toString:bm}));function vm(){return`#${wr(this.r)}${wr(this.g)}${wr(this.b)}`}function Vz(){return`#${wr(this.r)}${wr(this.g)}${wr(this.b)}${wr((isNaN(this.opacity)?1:this.opacity)*255)}`}function bm(){const e=Ta(this.opacity);return`${e===1?"rgb(":"rgba("}${Cr(this.r)}, ${Cr(this.g)}, ${Cr(this.b)}${e===1?")":`, ${e})`}`}function Ta(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Cr(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function wr(e){return e=Cr(e),(e<16?"0":"")+e.toString(16)}function wm(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new nn(e,t,n,r)}function e1(e){if(e instanceof nn)return new nn(e.h,e.s,e.l,e.opacity);if(e instanceof rs||(e=Fo(e)),!e)return new nn;if(e instanceof nn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),a=NaN,l=s-i,c=(s+i)/2;return l?(t===s?a=(n-r)/l+(n<r)*6:n===s?a=(r-t)/l+2:a=(t-n)/l+4,l/=c<.5?s+i:2-s-i,a*=60):l=c>0&&c<1?0:a,new nn(a,l,c,e.opacity)}function Wz(e,t,n,r){return arguments.length===1?e1(e):new nn(e,t,n,r??1)}function nn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}op(nn,Wz,Zv(rs,{brighter(e){return e=e==null?za:Math.pow(za,e),new nn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?$o:Math.pow($o,e),new nn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new jt(ac(e>=240?e-240:e+120,i,r),ac(e,i,r),ac(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new nn(km(this.h),Ts(this.s),Ts(this.l),Ta(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Ta(this.opacity);return`${e===1?"hsl(":"hsla("}${km(this.h)}, ${Ts(this.s)*100}%, ${Ts(this.l)*100}%${e===1?")":`, ${e})`}`}}));function km(e){return e=(e||0)%360,e<0?e+360:e}function Ts(e){return Math.max(0,Math.min(1,e||0))}function ac(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const t1=e=>()=>e;function Hz(e,t){return function(n){return e+n*t}}function qz(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function Jz(e){return(e=+e)==1?n1:function(t,n){return n-t?qz(t,n,e):t1(isNaN(t)?n:t)}}function n1(e,t){var n=t-e;return n?Hz(e,n):t1(isNaN(e)?t:e)}const jm=function e(t){var n=Jz(t);function r(i,s){var a=n((i=Cu(i)).r,(s=Cu(s)).r),l=n(i.g,s.g),c=n(i.b,s.b),u=n1(i.opacity,s.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=c(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function Wn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Nu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,lc=new RegExp(Nu.source,"g");function Kz(e){return function(){return e}}function Gz(e){return function(t){return e(t)+""}}function Qz(e,t){var n=Nu.lastIndex=lc.lastIndex=0,r,i,s,a=-1,l=[],c=[];for(e=e+"",t=t+"";(r=Nu.exec(e))&&(i=lc.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),l[a]?l[a]+=s:l[++a]=s),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,c.push({i:a,x:Wn(r,i)})),n=lc.lastIndex;return n<t.length&&(s=t.slice(n),l[a]?l[a]+=s:l[++a]=s),l.length<2?c[0]?Gz(c[0].x):Kz(t):(t=c.length,function(u){for(var d=0,p;d<t;++d)l[(p=c[d]).i]=p.x(u);return l.join("")})}var _m=180/Math.PI,Eu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function r1(e,t,n,r,i,s){var a,l,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,c/=l),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*_m,skewX:Math.atan(c)*_m,scaleX:a,scaleY:l}}var As;function Yz(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Eu:r1(t.a,t.b,t.c,t.d,t.e,t.f)}function Xz(e){return e==null||(As||(As=document.createElementNS("http://www.w3.org/2000/svg","g")),As.setAttribute("transform",e),!(e=As.transform.baseVal.consolidate()))?Eu:(e=e.matrix,r1(e.a,e.b,e.c,e.d,e.e,e.f))}function i1(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function s(u,d,p,f,h,g){if(u!==p||d!==f){var v=h.push("translate(",null,t,null,n);g.push({i:v-4,x:Wn(u,p)},{i:v-2,x:Wn(d,f)})}else(p||f)&&h.push("translate("+p+t+f+n)}function a(u,d,p,f){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),f.push({i:p.push(i(p)+"rotate(",null,r)-2,x:Wn(u,d)})):d&&p.push(i(p)+"rotate("+d+r)}function l(u,d,p,f){u!==d?f.push({i:p.push(i(p)+"skewX(",null,r)-2,x:Wn(u,d)}):d&&p.push(i(p)+"skewX("+d+r)}function c(u,d,p,f,h,g){if(u!==p||d!==f){var v=h.push(i(h)+"scale(",null,",",null,")");g.push({i:v-4,x:Wn(u,p)},{i:v-2,x:Wn(d,f)})}else(p!==1||f!==1)&&h.push(i(h)+"scale("+p+","+f+")")}return function(u,d){var p=[],f=[];return u=e(u),d=e(d),s(u.translateX,u.translateY,d.translateX,d.translateY,p,f),a(u.rotate,d.rotate,p,f),l(u.skewX,d.skewX,p,f),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,p,f),u=d=null,function(h){for(var g=-1,v=f.length,w;++g<v;)p[(w=f[g]).i]=w.x(h);return p.join("")}}}var Zz=i1(Yz,"px, ","px)","deg)"),e3=i1(Xz,", ",")",")"),ki=0,Yi=0,Hi=0,o1=1e3,Aa,Xi,Pa=0,Rr=0,cl=0,Bo=typeof performance=="object"&&performance.now?performance:Date,s1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function sp(){return Rr||(s1(t3),Rr=Bo.now()+cl)}function t3(){Rr=0}function La(){this._call=this._time=this._next=null}La.prototype=ap.prototype={constructor:La,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?sp():+n)+(t==null?0:+t),!this._next&&Xi!==this&&(Xi?Xi._next=this:Aa=this,Xi=this),this._call=e,this._time=n,zu()},stop:function(){this._call&&(this._call=null,this._time=1/0,zu())}};function ap(e,t,n){var r=new La;return r.restart(e,t,n),r}function n3(){sp(),++ki;for(var e=Aa,t;e;)(t=Rr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--ki}function Sm(){Rr=(Pa=Bo.now())+cl,ki=Yi=0;try{n3()}finally{ki=0,i3(),Rr=0}}function r3(){var e=Bo.now(),t=e-Pa;t>o1&&(cl-=t,Pa=e)}function i3(){for(var e,t=Aa,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Aa=n);Xi=e,zu(r)}function zu(e){if(!ki){Yi&&(Yi=clearTimeout(Yi));var t=e-Rr;t>24?(e<1/0&&(Yi=setTimeout(Sm,e-Bo.now()-cl)),Hi&&(Hi=clearInterval(Hi))):(Hi||(Pa=Bo.now(),Hi=setInterval(r3,o1)),ki=1,s1(Sm))}}function Cm(e,t,n){var r=new La;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var o3=al("start","end","cancel","interrupt"),s3=[],a1=0,Nm=1,Tu=2,Ks=3,Em=4,Au=5,Gs=6;function ul(e,t,n,r,i,s){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;a3(e,n,{name:t,index:r,group:i,on:o3,tween:s3,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:a1})}function lp(e,t){var n=cn(e,t);if(n.state>a1)throw new Error("too late; already scheduled");return n}function _n(e,t){var n=cn(e,t);if(n.state>Ks)throw new Error("too late; already running");return n}function cn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function a3(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=ap(s,0,n.time);function s(u){n.state=Nm,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var d,p,f,h;if(n.state!==Nm)return c();for(d in r)if(h=r[d],h.name===n.name){if(h.state===Ks)return Cm(a);h.state===Em?(h.state=Gs,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=Gs,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(Cm(function(){n.state===Ks&&(n.state=Em,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=Tu,n.on.call("start",e,e.__data__,n.index,n.group),n.state===Tu){for(n.state=Ks,i=new Array(f=n.tween.length),d=0,p=-1;d<f;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++p]=h);i.length=p+1}}function l(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=Au,1),p=-1,f=i.length;++p<f;)i[p].call(e,d);n.state===Au&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=Gs,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function l3(e,t){var n=e.__transition,r,i,s=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){s=!1;continue}i=r.state>Tu&&r.state<Au,r.state=Gs,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}s&&delete e.__transition}}function c3(e){return this.each(function(){l3(this,e)})}function u3(e,t){var n,r;return function(){var i=_n(this,e),s=i.tween;if(s!==n){r=n=s;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function d3(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=_n(this,e),a=s.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=l;break}c===u&&i.push(l)}s.tween=i}}function p3(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=cn(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?u3:d3)(n,e,t))}function cp(e,t,n){var r=e._id;return e.each(function(){var i=_n(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return cn(i,r).value[t]}}function l1(e,t){var n;return(typeof t=="number"?Wn:t instanceof Fo?jm:(n=Fo(t))?(t=n,jm):Qz)(e,t)}function f3(e){return function(){this.removeAttribute(e)}}function h3(e){return function(){this.removeAttributeNS(e.space,e.local)}}function m3(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttribute(e);return a===i?null:a===r?s:s=t(r=a,n)}}function g3(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?s:s=t(r=a,n)}}function x3(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function y3(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function v3(e,t){var n=ll(e),r=n==="transform"?e3:l1;return this.attrTween(e,typeof t=="function"?(n.local?y3:x3)(n,r,cp(this,"attr."+e,t)):t==null?(n.local?h3:f3)(n):(n.local?g3:m3)(n,r,t))}function b3(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function w3(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function k3(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&w3(e,s)),n}return i._value=t,i}function j3(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&b3(e,s)),n}return i._value=t,i}function _3(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=ll(e);return this.tween(n,(r.local?k3:j3)(r,t))}function S3(e,t){return function(){lp(this,e).delay=+t.apply(this,arguments)}}function C3(e,t){return t=+t,function(){lp(this,e).delay=t}}function N3(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?S3:C3)(t,e)):cn(this.node(),t).delay}function E3(e,t){return function(){_n(this,e).duration=+t.apply(this,arguments)}}function z3(e,t){return t=+t,function(){_n(this,e).duration=t}}function T3(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?E3:z3)(t,e)):cn(this.node(),t).duration}function A3(e,t){if(typeof t!="function")throw new Error;return function(){_n(this,e).ease=t}}function P3(e){var t=this._id;return arguments.length?this.each(A3(t,e)):cn(this.node(),t).ease}function L3(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;_n(this,e).ease=n}}function R3(e){if(typeof e!="function")throw new Error;return this.each(L3(this._id,e))}function M3(e){typeof e!="function"&&(e=Vv(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new On(r,this._parents,this._name,this._id)}function I3(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),a=new Array(r),l=0;l<s;++l)for(var c=t[l],u=n[l],d=c.length,p=a[l]=new Array(d),f,h=0;h<d;++h)(f=c[h]||u[h])&&(p[h]=f);for(;l<r;++l)a[l]=t[l];return new On(a,this._parents,this._name,this._id)}function O3(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function $3(e,t,n){var r,i,s=O3(t)?lp:_n;return function(){var a=s(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function D3(e,t){var n=this._id;return arguments.length<2?cn(this.node(),n).on.on(e):this.each($3(n,e,t))}function F3(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function B3(){return this.on("end.remove",F3(this._id))}function U3(e){var t=this._name,n=this._id;typeof e!="function"&&(e=rp(e));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var l=r[a],c=l.length,u=s[a]=new Array(c),d,p,f=0;f<c;++f)(d=l[f])&&(p=e.call(d,d.__data__,f,l))&&("__data__"in d&&(p.__data__=d.__data__),u[f]=p,ul(u[f],t,n,f,u,cn(d,n)));return new On(s,this._parents,t,n)}function V3(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Uv(e));for(var r=this._groups,i=r.length,s=[],a=[],l=0;l<i;++l)for(var c=r[l],u=c.length,d,p=0;p<u;++p)if(d=c[p]){for(var f=e.call(d,d.__data__,p,c),h,g=cn(d,n),v=0,w=f.length;v<w;++v)(h=f[v])&&ul(h,t,n,v,f,g);s.push(f),a.push(d)}return new On(s,a,t,n)}var W3=ns.prototype.constructor;function H3(){return new W3(this._groups,this._parents)}function q3(e,t){var n,r,i;return function(){var s=wi(this,e),a=(this.style.removeProperty(e),wi(this,e));return s===a?null:s===n&&a===r?i:i=t(n=s,r=a)}}function c1(e){return function(){this.style.removeProperty(e)}}function J3(e,t,n){var r,i=n+"",s;return function(){var a=wi(this,e);return a===i?null:a===r?s:s=t(r=a,n)}}function K3(e,t,n){var r,i,s;return function(){var a=wi(this,e),l=n(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(e),wi(this,e))),a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l))}}function G3(e,t){var n,r,i,s="style."+t,a="end."+s,l;return function(){var c=_n(this,e),u=c.on,d=c.value[s]==null?l||(l=c1(t)):void 0;(u!==n||i!==d)&&(r=(n=u).copy()).on(a,i=d),c.on=r}}function Q3(e,t,n){var r=(e+="")=="transform"?Zz:l1;return t==null?this.styleTween(e,q3(e,r)).on("end.style."+e,c1(e)):typeof t=="function"?this.styleTween(e,K3(e,r,cp(this,"style."+e,t))).each(G3(this._id,e)):this.styleTween(e,J3(e,r,t),n).on("end.style."+e,null)}function Y3(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function X3(e,t,n){var r,i;function s(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&Y3(e,a,n)),r}return s._value=t,s}function Z3(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,X3(e,t,n??""))}function eT(e){return function(){this.textContent=e}}function tT(e){return function(){var t=e(this);this.textContent=t??""}}function nT(e){return this.tween("text",typeof e=="function"?tT(cp(this,"text",e)):eT(e==null?"":e+""))}function rT(e){return function(t){this.textContent=e.call(this,t)}}function iT(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&rT(i)),t}return r._value=e,r}function oT(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,iT(e))}function sT(){for(var e=this._name,t=this._id,n=u1(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)if(c=a[u]){var d=cn(c,t);ul(c,e,n,u,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new On(r,this._parents,e,n)}function aT(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var l={value:a},c={value:function(){--i===0&&s()}};n.each(function(){var u=_n(this,r),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),u.on=t}),i===0&&s()})}var lT=0;function On(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function u1(){return++lT}var Cn=ns.prototype;On.prototype={constructor:On,select:U3,selectAll:V3,selectChild:Cn.selectChild,selectChildren:Cn.selectChildren,filter:M3,merge:I3,selection:H3,transition:sT,call:Cn.call,nodes:Cn.nodes,node:Cn.node,size:Cn.size,empty:Cn.empty,each:Cn.each,on:D3,attr:v3,attrTween:_3,style:Q3,styleTween:Z3,text:nT,textTween:oT,remove:B3,tween:p3,delay:N3,duration:T3,ease:P3,easeVarying:R3,end:aT,[Symbol.iterator]:Cn[Symbol.iterator]};function cT(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var uT={time:null,delay:0,duration:250,ease:cT};function dT(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function pT(e){var t,n;e instanceof On?(t=e._id,e=e._name):(t=u1(),(n=uT).time=sp(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&ul(c,e,t,u,a,n||dT(c,t));return new On(r,this._parents,e,t)}ns.prototype.interrupt=c3;ns.prototype.transition=pT;function fT(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var s,a=n.length,l,c=0,u=0;for(s=0;s<a;++s)l=n[s],c+=l.x,u+=l.y;for(c=(c/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)l=n[s],l.x-=c,l.y-=u}return i.initialize=function(s){n=s},i.x=function(s){return arguments.length?(e=+s,i):e},i.y=function(s){return arguments.length?(t=+s,i):t},i.strength=function(s){return arguments.length?(r=+s,i):r},i}function hT(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return d1(this.cover(t,n),t,n,e)}function d1(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,s=e._root,a={data:r},l=e._x0,c=e._y0,u=e._x1,d=e._y1,p,f,h,g,v,w,y,m;if(!s)return e._root=a,e;for(;s.length;)if((v=t>=(p=(l+u)/2))?l=p:u=p,(w=n>=(f=(c+d)/2))?c=f:d=f,i=s,!(s=s[y=w<<1|v]))return i[y]=a,e;if(h=+e._x.call(null,s.data),g=+e._y.call(null,s.data),t===h&&n===g)return a.next=s,i?i[y]=a:e._root=a,e;do i=i?i[y]=new Array(4):e._root=new Array(4),(v=t>=(p=(l+u)/2))?l=p:u=p,(w=n>=(f=(c+d)/2))?c=f:d=f;while((y=w<<1|v)===(m=(g>=f)<<1|h>=p));return i[m]=s,i[y]=a,e}function mT(e){var t,n,r=e.length,i,s,a=new Array(r),l=new Array(r),c=1/0,u=1/0,d=-1/0,p=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(s=+this._y.call(null,t))||(a[n]=i,l[n]=s,i<c&&(c=i),i>d&&(d=i),s<u&&(u=s),s>p&&(p=s));if(c>d||u>p)return this;for(this.cover(c,u).cover(d,p),n=0;n<r;++n)d1(this,a[n],l[n],e[n]);return this}function gT(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,s=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var a=i-n||1,l=this._root,c,u;n>e||e>=i||r>t||t>=s;)switch(u=(t<r)<<1|e<n,c=new Array(4),c[u]=l,l=c,a*=2,u){case 0:i=n+a,s=r+a;break;case 1:n=i-a,s=r+a;break;case 2:i=n+a,r=s-a;break;case 3:n=i-a,r=s-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=s,this}function xT(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function yT(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function ft(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function vT(e,t,n){var r,i=this._x0,s=this._y0,a,l,c,u,d=this._x1,p=this._y1,f=[],h=this._root,g,v;for(h&&f.push(new ft(h,i,s,d,p)),n==null?n=1/0:(i=e-n,s=t-n,d=e+n,p=t+n,n*=n);g=f.pop();)if(!(!(h=g.node)||(a=g.x0)>d||(l=g.y0)>p||(c=g.x1)<i||(u=g.y1)<s))if(h.length){var w=(a+c)/2,y=(l+u)/2;f.push(new ft(h[3],w,y,c,u),new ft(h[2],a,y,w,u),new ft(h[1],w,l,c,y),new ft(h[0],a,l,w,y)),(v=(t>=y)<<1|e>=w)&&(g=f[f.length-1],f[f.length-1]=f[f.length-1-v],f[f.length-1-v]=g)}else{var m=e-+this._x.call(null,h.data),x=t-+this._y.call(null,h.data),j=m*m+x*x;if(j<n){var E=Math.sqrt(n=j);i=e-E,s=t-E,d=e+E,p=t+E,r=h.data}}return r}function bT(e){if(isNaN(d=+this._x.call(null,e))||isNaN(p=+this._y.call(null,e)))return this;var t,n=this._root,r,i,s,a=this._x0,l=this._y0,c=this._x1,u=this._y1,d,p,f,h,g,v,w,y;if(!n)return this;if(n.length)for(;;){if((g=d>=(f=(a+c)/2))?a=f:c=f,(v=p>=(h=(l+u)/2))?l=h:u=h,t=n,!(n=n[w=v<<1|g]))return this;if(!n.length)break;(t[w+1&3]||t[w+2&3]||t[w+3&3])&&(r=t,y=w)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,i?(s?i.next=s:delete i.next,this):t?(s?t[w]=s:delete t[w],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[y]=n:this._root=n),this):(this._root=s,this)}function wT(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function kT(){return this._root}function jT(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function _T(e){var t=[],n,r=this._root,i,s,a,l,c;for(r&&t.push(new ft(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,s=n.x0,a=n.y0,l=n.x1,c=n.y1)&&r.length){var u=(s+l)/2,d=(a+c)/2;(i=r[3])&&t.push(new ft(i,u,d,l,c)),(i=r[2])&&t.push(new ft(i,s,d,u,c)),(i=r[1])&&t.push(new ft(i,u,a,l,d)),(i=r[0])&&t.push(new ft(i,s,a,u,d))}return this}function ST(e){var t=[],n=[],r;for(this._root&&t.push(new ft(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var s,a=r.x0,l=r.y0,c=r.x1,u=r.y1,d=(a+c)/2,p=(l+u)/2;(s=i[0])&&t.push(new ft(s,a,l,d,p)),(s=i[1])&&t.push(new ft(s,d,l,c,p)),(s=i[2])&&t.push(new ft(s,a,p,d,u)),(s=i[3])&&t.push(new ft(s,d,p,c,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function CT(e){return e[0]}function NT(e){return arguments.length?(this._x=e,this):this._x}function ET(e){return e[1]}function zT(e){return arguments.length?(this._y=e,this):this._y}function up(e,t,n){var r=new dp(t??CT,n??ET,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function dp(e,t,n,r,i,s){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=s,this._root=void 0}function zm(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var xt=up.prototype=dp.prototype;xt.copy=function(){var e=new dp(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=zm(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=zm(r));return e};xt.add=hT;xt.addAll=mT;xt.cover=gT;xt.data=xT;xt.extent=yT;xt.find=vT;xt.remove=bT;xt.removeAll=wT;xt.root=kT;xt.size=jT;xt.visit=_T;xt.visitAfter=ST;xt.x=NT;xt.y=zT;function Nr(e){return function(){return e}}function Yn(e){return(e()-.5)*1e-6}function TT(e){return e.x+e.vx}function AT(e){return e.y+e.vy}function PT(e){var t,n,r,i=1,s=1;typeof e!="function"&&(e=Nr(e==null?1:+e));function a(){for(var u,d=t.length,p,f,h,g,v,w,y=0;y<s;++y)for(p=up(t,TT,AT).visitAfter(l),u=0;u<d;++u)f=t[u],v=n[f.index],w=v*v,h=f.x+f.vx,g=f.y+f.vy,p.visit(m);function m(x,j,E,S,A){var C=x.data,R=x.r,N=v+R;if(C){if(C.index>f.index){var L=h-C.x-C.vx,P=g-C.y-C.vy,B=L*L+P*P;B<N*N&&(L===0&&(L=Yn(r),B+=L*L),P===0&&(P=Yn(r),B+=P*P),B=(N-(B=Math.sqrt(B)))/B*i,f.vx+=(L*=B)*(N=(R*=R)/(w+R)),f.vy+=(P*=B)*N,C.vx-=L*(N=1-N),C.vy-=P*N)}return}return j>h+N||S<h-N||E>g+N||A<g-N}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<4;++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,p;for(n=new Array(d),u=0;u<d;++u)p=t[u],n[p.index]=+e(p,u,t)}}return a.initialize=function(u,d){t=u,r=d,c()},a.iterations=function(u){return arguments.length?(s=+u,a):s},a.strength=function(u){return arguments.length?(i=+u,a):i},a.radius=function(u){return arguments.length?(e=typeof u=="function"?u:Nr(+u),c(),a):e},a}function LT(e){return e.index}function Tm(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function RT(e){var t=LT,n=p,r,i=Nr(30),s,a,l,c,u,d=1;e==null&&(e=[]);function p(w){return 1/Math.min(l[w.source.index],l[w.target.index])}function f(w){for(var y=0,m=e.length;y<d;++y)for(var x=0,j,E,S,A,C,R,N;x<m;++x)j=e[x],E=j.source,S=j.target,A=S.x+S.vx-E.x-E.vx||Yn(u),C=S.y+S.vy-E.y-E.vy||Yn(u),R=Math.sqrt(A*A+C*C),R=(R-s[x])/R*w*r[x],A*=R,C*=R,S.vx-=A*(N=c[x]),S.vy-=C*N,E.vx+=A*(N=1-N),E.vy+=C*N}function h(){if(a){var w,y=a.length,m=e.length,x=new Map(a.map((E,S)=>[t(E,S,a),E])),j;for(w=0,l=new Array(y);w<m;++w)j=e[w],j.index=w,typeof j.source!="object"&&(j.source=Tm(x,j.source)),typeof j.target!="object"&&(j.target=Tm(x,j.target)),l[j.source.index]=(l[j.source.index]||0)+1,l[j.target.index]=(l[j.target.index]||0)+1;for(w=0,c=new Array(m);w<m;++w)j=e[w],c[w]=l[j.source.index]/(l[j.source.index]+l[j.target.index]);r=new Array(m),g(),s=new Array(m),v()}}function g(){if(a)for(var w=0,y=e.length;w<y;++w)r[w]=+n(e[w],w,e)}function v(){if(a)for(var w=0,y=e.length;w<y;++w)s[w]=+i(e[w],w,e)}return f.initialize=function(w,y){a=w,u=y,h()},f.links=function(w){return arguments.length?(e=w,h(),f):e},f.id=function(w){return arguments.length?(t=w,f):t},f.iterations=function(w){return arguments.length?(d=+w,f):d},f.strength=function(w){return arguments.length?(n=typeof w=="function"?w:Nr(+w),g(),f):n},f.distance=function(w){return arguments.length?(i=typeof w=="function"?w:Nr(+w),v(),f):i},f}const MT=1664525,IT=1013904223,Am=4294967296;function OT(){let e=1;return()=>(e=(MT*e+IT)%Am)/Am}function $T(e){return e.x}function DT(e){return e.y}var FT=10,BT=Math.PI*(3-Math.sqrt(5));function UT(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),s=0,a=.6,l=new Map,c=ap(p),u=al("tick","end"),d=OT();e==null&&(e=[]);function p(){f(),u.call("tick",t),n<r&&(c.stop(),u.call("end",t))}function f(v){var w,y=e.length,m;v===void 0&&(v=1);for(var x=0;x<v;++x)for(n+=(s-n)*i,l.forEach(function(j){j(n)}),w=0;w<y;++w)m=e[w],m.fx==null?m.x+=m.vx*=a:(m.x=m.fx,m.vx=0),m.fy==null?m.y+=m.vy*=a:(m.y=m.fy,m.vy=0);return t}function h(){for(var v=0,w=e.length,y;v<w;++v){if(y=e[v],y.index=v,y.fx!=null&&(y.x=y.fx),y.fy!=null&&(y.y=y.fy),isNaN(y.x)||isNaN(y.y)){var m=FT*Math.sqrt(.5+v),x=v*BT;y.x=m*Math.cos(x),y.y=m*Math.sin(x)}(isNaN(y.vx)||isNaN(y.vy))&&(y.vx=y.vy=0)}}function g(v){return v.initialize&&v.initialize(e,d),v}return h(),t={tick:f,restart:function(){return c.restart(p),t},stop:function(){return c.stop(),t},nodes:function(v){return arguments.length?(e=v,h(),l.forEach(g),t):e},alpha:function(v){return arguments.length?(n=+v,t):n},alphaMin:function(v){return arguments.length?(r=+v,t):r},alphaDecay:function(v){return arguments.length?(i=+v,t):+i},alphaTarget:function(v){return arguments.length?(s=+v,t):s},velocityDecay:function(v){return arguments.length?(a=1-v,t):1-a},randomSource:function(v){return arguments.length?(d=v,l.forEach(g),t):d},force:function(v,w){return arguments.length>1?(w==null?l.delete(v):l.set(v,g(w)),t):l.get(v)},find:function(v,w,y){var m=0,x=e.length,j,E,S,A,C;for(y==null?y=1/0:y*=y,m=0;m<x;++m)A=e[m],j=v-A.x,E=w-A.y,S=j*j+E*E,S<y&&(C=A,y=S);return C},on:function(v,w){return arguments.length>1?(u.on(v,w),t):u.on(v)}}}function VT(){var e,t,n,r,i=Nr(-30),s,a=1,l=1/0,c=.81;function u(h){var g,v=e.length,w=up(e,$T,DT).visitAfter(p);for(r=h,g=0;g<v;++g)t=e[g],w.visit(f)}function d(){if(e){var h,g=e.length,v;for(s=new Array(g),h=0;h<g;++h)v=e[h],s[v.index]=+i(v,h,e)}}function p(h){var g=0,v,w,y=0,m,x,j;if(h.length){for(m=x=j=0;j<4;++j)(v=h[j])&&(w=Math.abs(v.value))&&(g+=v.value,y+=w,m+=w*v.x,x+=w*v.y);h.x=m/y,h.y=x/y}else{v=h,v.x=v.data.x,v.y=v.data.y;do g+=s[v.data.index];while(v=v.next)}h.value=g}function f(h,g,v,w){if(!h.value)return!0;var y=h.x-t.x,m=h.y-t.y,x=w-g,j=y*y+m*m;if(x*x/c<j)return j<l&&(y===0&&(y=Yn(n),j+=y*y),m===0&&(m=Yn(n),j+=m*m),j<a&&(j=Math.sqrt(a*j)),t.vx+=y*h.value*r/j,t.vy+=m*h.value*r/j),!0;if(h.length||j>=l)return;(h.data!==t||h.next)&&(y===0&&(y=Yn(n),j+=y*y),m===0&&(m=Yn(n),j+=m*m),j<a&&(j=Math.sqrt(a*j)));do h.data!==t&&(x=s[h.data.index]*r/j,t.vx+=y*x,t.vy+=m*x);while(h=h.next)}return u.initialize=function(h,g){e=h,n=g,d()},u.strength=function(h){return arguments.length?(i=typeof h=="function"?h:Nr(+h),d(),u):i},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}function Zi(e,t,n){this.k=e,this.x=t,this.y=n}Zi.prototype={constructor:Zi,scale:function(e){return e===1?this:new Zi(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Zi(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Zi.prototype;const WT={LlmAgent:"#6366f1",SequentialAgent:"#7b2cbf",LoopAgent:"#ffd93d",ParallelAgent:"#ff6b6b"};function HT({agents:e,events:t,selectedEventIndex:n}){const[r,i]=k.useState(!1),s=k.useRef(null),a=k.useRef(null),{activeAgent:l,transitions:c,visitedAgents:u}=k.useMemo(()=>{if(n===null||n<0)return{activeAgent:null,transitions:new Map,visitedAgents:new Set};const p=t.slice(0,n+1),f=new Map,h=new Set;let g=null,v=null;for(const w of p)if(w.event_type==="agent_start"){const y=w.agent_name;if(h.add(y),g&&g!==y){const m=`${g}->${y}`;f.set(m,(f.get(m)||0)+1)}g=v,v=y}else w.event_type==="agent_end"&&(g=v);return{activeAgent:v,transitions:f,visitedAgents:h}},[t,n]),d=k.useMemo(()=>{const p=e.map(v=>({id:v.id,name:v.name,type:v.type,isActive:v.name===l,wasActive:u.has(v.name)})),f=[],h=new Map(e.map(v=>[v.id,v])),g=new Map(e.map(v=>[v.name,v]));for(const v of e){if("sub_agents"in v&&v.sub_agents)for(const w of v.sub_agents)h.get(w)&&f.push({source:v.id,target:w,type:"sub_agent",count:1});if(v.type==="LlmAgent"&&"tools"in v)for(const w of v.tools||[])w.type==="agent"&&w.agent_id&&f.push({source:v.id,target:w.agent_id,type:"tool",count:1})}for(const[v,w]of c){const[y,m]=v.split("->"),x=g.get(y),j=g.get(m);if(x&&j){const E=f.find(S=>(typeof S.source=="string"?S.source:S.source.id)===x.id&&(typeof S.target=="string"?S.target:S.target.id)===j.id&&S.type==="transition");E?E.count=w:f.push({source:x.id,target:j.id,type:"transition",count:w})}}return{nodes:p,links:f}},[e,l,u,c]);return k.useEffect(()=>{if(!s.current||!r)return;const p=Io(s.current),f=300,h=400;p.selectAll("*").remove();const g=p.append("g").attr("transform",`translate(${f/2}, ${h/2})`);p.append("defs").selectAll("marker").data(["transition","sub_agent","tool"]).join("marker").attr("id",m=>`arrow-${m}`).attr("viewBox","0 -5 10 10").attr("refX",25).attr("refY",0).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto").append("path").attr("fill",m=>m==="transition"?"#22c55e":m==="sub_agent"?"#6366f1":"#f59e0b").attr("d","M0,-5L10,0L0,5");const v=UT(d.nodes).force("link",RT(d.links).id(m=>m.id).distance(80)).force("charge",VT().strength(-200)).force("center",fT(0,0)).force("collision",PT().radius(35));a.current=v;const w=g.append("g").selectAll("path").data(d.links).join("path").attr("stroke",m=>m.type==="transition"?"#22c55e":m.type==="sub_agent"?"#6366f1":"#f59e0b").attr("stroke-width",m=>m.type==="transition"?Math.min(m.count*1.5+1,6):1.5).attr("stroke-opacity",m=>m.type==="transition"?.8:.4).attr("stroke-dasharray",m=>m.type==="tool"?"4,2":"none").attr("fill","none").attr("marker-end",m=>`url(#arrow-${m.type})`),y=g.append("g").selectAll("g").data(d.nodes).join("g").call(Pz().on("start",(m,x)=>{m.active||v.alphaTarget(.3).restart(),x.fx=x.x,x.fy=x.y}).on("drag",(m,x)=>{x.fx=m.x,x.fy=m.y}).on("end",(m,x)=>{m.active||v.alphaTarget(0),x.fx=null,x.fy=null}));return y.append("circle").attr("r",18).attr("fill",m=>WT[m.type]||"#6366f1").attr("stroke",m=>m.isActive?"#fff":m.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",m=>m.isActive?3:1.5).attr("opacity",m=>m.wasActive?1:.5).attr("class",m=>m.isActive?"active-node":""),y.append("text").text(m=>m.name.length>10?m.name.slice(0,8)+"…":m.name).attr("text-anchor","middle").attr("dy",32).attr("font-size",10).attr("fill","#e4e4e7").attr("font-weight",m=>m.isActive?600:400),v.on("tick",()=>{w.attr("d",m=>{const x=m.target.x-m.source.x,j=m.target.y-m.source.y,E=Math.sqrt(x*x+j*j)*(m.type==="transition"?1.5:2);return`M${m.source.x},${m.source.y}A${E},${E} 0 0,1 ${m.target.x},${m.target.y}`}),y.attr("transform",m=>`translate(${m.x},${m.y})`)}),()=>{v.stop()}},[d,r]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
          border-radius: 0 0 200px 0;
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
      `}),o.jsx("div",{className:`agent-graph-container ${r?"":"closed"}`,children:o.jsxs("div",{className:"agent-graph-panel",children:[o.jsxs("div",{className:"agent-graph-content",children:[o.jsx("svg",{ref:s,className:"agent-graph-svg"}),o.jsxs("div",{className:"agent-graph-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#6366f1"}}),o.jsx("span",{children:"sub-agent"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#f59e0b",borderStyle:"dashed"}}),o.jsx("span",{children:"tool"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#22c55e"}}),o.jsx("span",{children:"transition"})]})]})]}),o.jsx("button",{className:"agent-graph-toggle",onClick:()=>i(!r),children:o.jsx(bt,{size:20})})]})})]})}const Pm={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},qT={agent_start:cu,agent_end:cu,tool_call:an,tool_result:an,model_call:Pd,model_response:ka,state_change:Pn,transfer:Uy,callback_start:kn,callback_end:kn,callback_error:Py},Lm=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],Rm=new Map;function Ra(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=Rm.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%Lm.length,Rm.set(e,t)}return Lm[t]}function JT(e){var t,n,r,i,s,a,l,c,u,d,p,f,h,g,v,w,y,m,x,j,E,S,A,C,R,N,L,P,B;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const D=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([H,M])=>{const q=M!=null?JSON.stringify(M):"null";return`${H}=${q.slice(0,500)}${q.length>500?"...":""}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${D.slice(0,1e3)}${D.length>1e3?"...":""})`;case"tool_result":const X=(i=e.data)==null?void 0:i.result;let T="";if((a=(s=X==null?void 0:X.content)==null?void 0:s[0])!=null&&a.text)T=String(X.content[0].text).slice(0,500);else if(typeof X=="string")T=X.slice(0,500);else if(X!=null){const H=JSON.stringify(X);T=H?H.slice(0,500):""}else T="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${T}${T.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const $=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((h=e.data)==null?void 0:h.parts)||[],I=$.find(H=>(H==null?void 0:H.type)==="function_call");if(I)return`LLM_RSP → ${I.name||"unknown"}()`;const _=$.find(H=>(H==null?void 0:H.type)==="text");if(_!=null&&_.text){const H=String(_.text);return`LLM_RSP "${H.slice(0,50)}${H.length>50?"...":""}"`}return`LLM_RSP (${((g=e.data)==null?void 0:g.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((v=e.data)==null?void 0:v.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((w=e.data)==null?void 0:w.target)||"unknown"}`;case"callback_start":const Q=((y=e.data)==null?void 0:y.callback_name)||"unknown",b=((m=e.data)==null?void 0:m.callback_type)||"";return Q==="network_approval"?`⏳ AWAITING APPROVAL ${((x=e.data)==null?void 0:x.host)||((j=e.data)==null?void 0:j.url)||""}`:`CALLBACK START ${b?`[${b}]`:""} ${Q}`;case"callback_end":const U=((E=e.data)==null?void 0:E.callback_name)||"unknown",z=((S=e.data)==null?void 0:S.callback_type)||"",G=(A=e.data)!=null&&A.error?" [ERROR]":"";return U==="network_approval"?((C=e.data)==null?void 0:C.action)==="deny"?`🚫 DENIED ${((R=e.data)==null?void 0:R.host)||""}`:`✅ APPROVED ${((N=e.data)==null?void 0:N.pattern)||((L=e.data)==null?void 0:L.host)||""}`:`CALLBACK END ${z?`[${z}]`:""} ${U}${G}`;case"callback_error":const xe=((P=e.data)==null?void 0:P.source)||"unknown",ye=((B=e.data)==null?void 0:B.error)||"Unknown error";return`⚠️ ERROR in ${xe}: ${ye.slice(0,50)}${ye.length>50?"...":""}`;default:return e.event_type.toUpperCase()}}function KT(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function GT(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,i=0;const s=(l,c)=>{l&&n.push(c?o.jsx("span",{style:{color:c},children:l},i++):o.jsx("span",{children:l},i++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const p=r.match(c);if(p&&p.index!==void 0){const f=d?r.indexOf(p[d],p.index):p.index,h=d?p[d]:p[0];(!l||f<l.index)&&(l={index:f,length:h.length,text:h,color:u})}}if(l)l.index>0&&s(r.slice(0,l.index)),s(l.text,l.color),r=r.slice(l.index+l.length);else{s(r);break}}return o.jsx(o.Fragment,{children:n})}function QT({content:e}){const t=e.split(`
`);return o.jsx(o.Fragment,{children:t.map((n,r)=>o.jsx("div",{children:GT(n)},r))})}function YT({event:e}){var l,c,u,d,p,f,h,g,v,w,y,m,x,j,E,S,A,C,R,N,L;const[t,n]=k.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,i]=k.useState(null),s=P=>{const B=new Set(t);B.has(P)?B.delete(P):B.add(P),n(B)},a=(P,B=0,V=!1)=>{const D="  ".repeat(B),X="  ".repeat(B+1);if(P===null)return o.jsx("span",{className:"json-null",children:"null"});if(P===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof P=="boolean")return o.jsx("span",{className:"json-boolean",children:P.toString()});if(typeof P=="number")return o.jsx("span",{className:"json-number",children:P});if(typeof P=="string"){const T=P.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),$=()=>i(P);return T.length>300&&B>0?o.jsxs("span",{className:"json-string json-string-clickable",onClick:$,title:"Click to view as Markdown",children:['"',T.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",P.length," chars)"]})]}):o.jsxs("span",{className:"json-string json-string-clickable",onClick:$,title:"Click to view as Markdown",children:['"',T,'"']})}if(Array.isArray(P))return P.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):P.every($=>$===null||typeof $!="object")&&P.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),P.map(($,I)=>o.jsxs("span",{children:[a($,B+1,!0),I<P.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},I)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),P.map(($,I)=>o.jsxs("span",{children:[`
`+X,a($,B+1),I<P.length-1&&o.jsx("span",{className:"json-comma",children:","})]},I)),`
`+D,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof P=="object"){const T=Object.entries(P);return T.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):T.length<=2&&T.every(([,I])=>I===null||typeof I!="object")&&V?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),T.map(([I,_],W)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',I,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(_,B+1,!0),W<T.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},I)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),T.map(([I,_],W)=>o.jsxs("span",{children:[`
`+X,o.jsxs("span",{className:"json-key",children:['"',I,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(_,B+1),W<T.length-1&&o.jsx("span",{className:"json-comma",children:","})]},I)),`
`+D,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(P)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",style:{backgroundColor:Ra(e.agent_name).bg,color:Ra(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("data"),children:[t.has("data")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((l=e.data)==null?void 0:l.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("instruction"),children:[t.has("instruction")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((c=e.data)==null?void 0:c.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("messages"),children:[t.has("messages")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((P,B)=>{var V;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${P.role}`,children:P.role}),o.jsx("div",{className:"message-parts",children:(V=P.parts)==null?void 0:V.map((D,X)=>o.jsxs("div",{className:"message-part",children:[D.text&&o.jsx("pre",{children:D.text}),D.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:D.function_call.name}),o.jsx("pre",{children:JSON.stringify(D.function_call.args,null,2)})]}),D.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:D.function_response.name}),o.jsx("pre",{children:JSON.stringify(D.function_response.response,null,2)})]})]},X))})]},B)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("result"),children:[t.has("result")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((f=(p=(d=(u=e.data)==null?void 0:u.result)==null?void 0:d.content)==null?void 0:p[0])==null?void 0:f.text)||(typeof((h=e.data)==null?void 0:h.result)=="string"?e.data.result:JSON.stringify((g=e.data)==null?void 0:g.result,null,2))})})]}),e.event_type==="model_response"&&((v=e.data)==null?void 0:v.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("response"),children:[t.has("response")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((P,B)=>o.jsxs("div",{className:"response-part",children:[P.type==="text"&&P.text&&o.jsx("pre",{className:"response-text",children:P.text}),P.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",P.name,"()"]}),P.args&&Object.keys(P.args).length>0&&o.jsx("pre",{children:JSON.stringify(P.args,null,2)})]}),P.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},B))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("callback_info"),children:[t.has("callback_info")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((w=e.data)==null?void 0:w.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((y=e.data)==null?void 0:y.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((m=e.data)==null?void 0:m.module_path)||"unknown"]}),((x=e.data)==null?void 0:x.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((j=e.data)==null?void 0:j.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((E=e.data)==null?void 0:E.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",onClick:()=>s("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Source:"})," ",((S=e.data)==null?void 0:S.source)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error Type:"})," ",((A=e.data)==null?void 0:A.error_type)||"unknown"]}),o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",((C=e.data)==null?void 0:C.error)||"No error message"]}),((R=e.data)==null?void 0:R.context)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Context:"})," ",e.data.context]}),((N=e.data)==null?void 0:N.traceback)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&((L=e.data)==null?void 0:L.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("state_delta"),children:[t.has("state_delta")?o.jsx(Pt,{size:12}):o.jsx(bt,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([P,B])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:P}),o.jsx("pre",{className:"state-delta-value",children:typeof B=="string"?B:JSON.stringify(B,null,2)})]},P))})]}),r&&o.jsx(XT,{content:r,onClose:()=>i(null)})]})}function XT({content:e,onClose:t}){return o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:o.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(vi,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"String Content"}),o.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:o.jsx(Xo,{size:18})})]}),o.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:o.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:o.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(Qo,{size:12}),"Copy"]})})]})})}function ZT({content:e,title:t,onClose:n}){return o.jsxs("div",{className:"modal-overlay",onClick:n,children:[o.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:t}),o.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(Rv,{children:e})})]}),o.jsx("style",{children:`
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
      `})]})}function e6({events:e,selectedEventIndex:t,project:n}){const[r,i]=k.useState(null),s=k.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,h])=>{var g;l[f]={...l[f],value:h,timestamp:d.timestamp,defined:((g=l[f])==null?void 0:g.defined)??!1}})}),l},[e,t,n]),a=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(ZT,{content:r.content,title:r.title,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>o.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[l,f&&o.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),o.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const h=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:h,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&o.jsx("div",{className:"state-desc",children:p}),u&&o.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}function cc(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function Mm(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(s){return`[JS error: ${s}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(s=s[l[1]]),s=s[parseInt(l[2])]):s=s[a]}return s==null?"[No match]":typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function t6({project:e,selectedEventIndex:t,sandboxMode:n}){var xe,ye;const{watches:r,updateWatch:i,addWatch:s,removeWatch:a,runEvents:l}=ut(),[c,u]=k.useState(!1),[d,p]=k.useState(null),[f,h]=k.useState({}),[g,v]=k.useState(new Set),[w,y]=k.useState(""),[m,x]=k.useState(""),[j,E]=k.useState({}),[S,A]=k.useState(""),[C,R]=k.useState([]),[N,L]=k.useState(null),[P,B]=k.useState(null),[V,D]=k.useState(!1);k.useEffect(()=>{Td().then(R).catch(console.error)},[]);const X=k.useMemo(()=>{const H=e.mcp_servers||[],M=new Set(H.map(ee=>ee.name)),q=C.filter(ee=>!M.has(ee.name));return[...H,...q]},[e.mcp_servers,C]),T=k.useCallback(async H=>{if(!(f[H]||g.has(H))){v(M=>new Set([...M,H]));try{const M=await Se(`/projects/${e.id}/mcp-servers/${encodeURIComponent(H)}/test-connection`,{method:"POST"});M.success&&h(q=>({...q,[H]:M.tools}))}catch(M){console.error("Failed to load tools:",M)}finally{v(M=>{const q=new Set(M);return q.delete(H),q})}}},[e.id,f,g]);k.useEffect(()=>{var ee;if(d)return;if(!w||!m){E({});return}const M=(f[w]||[]).find(Y=>Y.name===m);if(!((ee=M==null?void 0:M.parameters)!=null&&ee.properties)){E({});return}const q={};Object.entries(M.parameters.properties).forEach(([Y,se])=>{se.type==="string"?q[Y]=se.default||"":se.type==="number"||se.type==="integer"?q[Y]=se.default||0:se.type==="boolean"?q[Y]=se.default||!1:q[Y]=se.default||null}),E(q)},[w,m,f,d]);const $=()=>{p(null),y(""),x(""),E({}),A(""),L(null),B(null),u(!0)},I=H=>{if(p(H.id),y(H.serverName),x(H.toolName),E({...H.args}),A(H.transform||""),H.result){const{text:M}=cc(H.result);L(M),B(null)}else L(null),B(null);f[H.serverName]||T(H.serverName),u(!0)},_=async()=>{var M;if(!w||!m)return;D(!0),B(null);const H=((M=e.app)==null?void 0:M.id)||`app_${e.id}`;try{const q=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:w,tool_name:m,arguments:j,sandbox_mode:n,app_id:n?H:void 0})}),{text:ee,isError:Y}=cc(q);Y?(B(ee),L(null)):(L(ee),B(null))}catch(q){B(String(q)),L(null)}finally{D(!1)}},W=k.useMemo(()=>N?!S||!S.trim()?N:Mm(N,S):null,[N,S]),Q=()=>{if(!(!w||!m)){if(d){i(d,{serverName:w,toolName:m,args:{...j},transform:S||void 0});const H=r.find(M=>M.id===d);H&&U({...H,serverName:w,toolName:m,args:j,transform:S||void 0,history:H.history||[]})}else{const H={id:`watch-${Date.now()}`,serverName:w,toolName:m,args:{...j},transform:S||void 0,history:[]};s(H),U(H)}u(!1)}},b=H=>{a(H)},U=k.useCallback(async(H,M)=>{var se;i(H.id,{isLoading:!0,error:void 0});const q=M??l.length-1,ee=Date.now(),Y=((se=e.app)==null?void 0:se.id)||`app_${e.id}`;try{const K=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:H.serverName,tool_name:H.toolName,arguments:H.args,sandbox_mode:n,app_id:n?Y:void 0})}),Z={eventIndex:q,timestamp:ee,result:K},re=[...H.history||[],Z];i(H.id,{result:K,isLoading:!1,lastRun:ee,history:re})}catch(K){const Z={eventIndex:q,timestamp:ee,error:String(K)},re=[...H.history||[],Z];i(H.id,{error:String(K),isLoading:!1,lastRun:ee,history:re})}},[e.id,(xe=e.app)==null?void 0:xe.id,i,l.length,n]),z=()=>{r.forEach(H=>U(H))},G=k.useMemo(()=>!w||!m?null:(f[w]||[]).find(M=>M.name===m),[w,m,f]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(vi,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:z,title:"Refresh all",children:o.jsx(rn,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:$,title:"Add watch",children:o.jsx(Ke,{size:12})})]})]}),r.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(vi,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:$,children:[o.jsx(Ke,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:r.map(H=>{let M=H.result,q=H.error;if(t!==null&&H.history&&H.history.length>0){const Z=H.history.filter(re=>re.eventIndex<=t);if(Z.length>0){const re=Z[Z.length-1];M=re.result,q=re.error}else M=void 0,q=void 0}const{text:ee,isError:Y}=M?cc(M):{text:"",isError:!1},se=M?Mm(ee,H.transform):"",K=q||Y;return o.jsxs("div",{className:`watch-item ${K?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:H.serverName}),o.jsx("span",{className:"watch-tool",children:H.toolName}),Object.keys(H.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(H.args).map(([Z,re])=>`${Z}=${JSON.stringify(re)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>I(H),title:"Edit watch",children:o.jsx(an,{size:10})}),o.jsx("button",{onClick:()=>U(H),title:"Refresh",children:H.isLoading?o.jsx(rn,{size:10,className:"spin"}):o.jsx(rn,{size:10})}),o.jsx("button",{onClick:()=>b(H.id),title:"Remove",children:o.jsx(Fe,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:H.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):q?o.jsx("span",{className:"error",children:q}):M?o.jsx("pre",{className:Y?"error-text":"",children:se}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},H.id)})}),c&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:H=>H.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>u(!1),children:o.jsx(Xo,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:w,onChange:H=>{y(H.target.value),d||x(""),H.target.value&&T(H.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),X.map(H=>o.jsx("option",{value:H.name,children:H.name},H.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:m,onChange:H=>x(H.target.value),disabled:!w||g.has(w),children:[o.jsx("option",{value:"",children:g.has(w)?"Loading tools...":"Select tool..."}),(f[w]||[]).map(H=>o.jsx("option",{value:H.name,children:H.name},H.name))]})]}),(G==null?void 0:G.description)&&o.jsx("div",{className:"tool-desc",children:G.description}),((ye=G==null?void 0:G.parameters)==null?void 0:ye.properties)&&Object.keys(G.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(G.parameters.properties).map(([H,M])=>{var q,ee;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[H,((q=G.parameters.required)==null?void 0:q.includes(H))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:M.type==="number"||M.type==="integer"?"number":"text",value:typeof j[H]=="object"?JSON.stringify(j[H]):j[H]??"",onChange:Y=>E(se=>({...se,[H]:Y.target.value})),placeholder:((ee=M.description)==null?void 0:ee.slice(0,40))||H})]},H)})]}),w&&m&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:_,disabled:V,children:[V?o.jsx(rn,{size:12,className:"spin"}):o.jsx(cr,{size:12}),V?"Running...":"Test Run"]})]}),P&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:P})]}),N&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:N})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:S,onChange:H=>A(H.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"Path:"}),o.jsx("code",{onClick:()=>A(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>A(".content[0].text"),children:".content[0].text"}),o.jsx("code",{onClick:()=>A(".result.data"),children:".result.data"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>A("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>A("js:data.items?.length"),children:"js:data.items?.length"})]})]}),N&&S&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:W!=null&&W.startsWith("[Transform error")?"error":"",children:W})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:Q,disabled:!w||!m,children:d?"Save Changes":"Add Watch"})]})]})})]})}function n6(){var xp,yp;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:s,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:p,currentSessionId:f,setCurrentSessionId:h}=ut(),[g,v]=k.useState(""),[w,y]=k.useState(null),[m,x]=k.useState(null),[j,E]=k.useState(null),[S,A]=k.useState(""),[C,R]=k.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[N,L]=k.useState(()=>{const O=localStorage.getItem("sandboxMode");return O!==null?O==="true":!0});k.useEffect(()=>{localStorage.setItem("sandboxMode",String(N))},[N]);const[P,B]=k.useState(null),[V,D]=k.useState(!1),[X,T]=k.useState({}),[$,I]=k.useState(!1),[_,W]=k.useState("agent"),Q=k.useRef(null),[b,U]=k.useState(!0),[z,G]=k.useState(!0),[xe,ye]=k.useState(!1),[H,M]=k.useState(360),[q,ee]=k.useState(!1),[Y,se]=k.useState(!1),[K,Z]=k.useState([]),re=k.useRef(null);k.useEffect(()=>{const O=localStorage.getItem("promptHistory");if(O)try{const oe=JSON.parse(O),de=Object.entries(oe).map(([he,ce])=>({prompt:he,count:ce})).sort((he,ce)=>ce.count-he.count);Z(de)}catch(oe){console.error("Failed to parse prompt history:",oe)}},[]);const ve=k.useCallback(O=>{const oe=O.trim();if(!oe)return;const de=localStorage.getItem("promptHistory"),he=de?JSON.parse(de):{};he[oe]=(he[oe]||0)+1,localStorage.setItem("promptHistory",JSON.stringify(he));const ce=Object.entries(he).map(([Te,Pe])=>({prompt:Te,count:Pe})).sort((Te,Pe)=>Pe.count-Te.count);Z(ce)},[]),je=k.useMemo(()=>{const O=g.toLowerCase().trim();return K.filter(oe=>!O||oe.prompt.toLowerCase().includes(O)).slice(0,10)},[K,g]),[ze,ke]=k.useState([60,80,100,80,1]),[F,ae]=k.useState(null),fe=k.useRef(0),ge=k.useRef(0),[J,te]=k.useState([]),[me,le]=k.useState(null),[_e,Ze]=k.useState(!1),un=k.useRef(0),Ut=k.useCallback(async(O,oe)=>{var Te;if(!e)return;p(O.id,{isLoading:!0,error:void 0});const de=oe??i.length-1,he=Date.now(),ce=((Te=e.app)==null?void 0:Te.id)||`app_${e.id}`;try{const Pe=await Se(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:O.serverName,tool_name:O.toolName,arguments:O.args,sandbox_mode:N,app_id:N?ce:void 0})}),Sn={eventIndex:de,timestamp:he,result:Pe},pn=[...O.history||[],Sn];p(O.id,{result:Pe,isLoading:!1,lastRun:he,history:pn})}catch(Pe){const Sn={eventIndex:de,timestamp:he,error:String(Pe)},pn=[...O.history||[],Sn];p(O.id,{error:String(Pe),isLoading:!1,lastRun:he,history:pn})}},[e==null?void 0:e.id,(xp=e==null?void 0:e.app)==null?void 0:xp.id,p,i.length,N]);k.useEffect(()=>{if(i.length>un.current&&d.length>0){const O=i.length-1;d.forEach(oe=>{oe.isLoading||Ut(oe,O)})}un.current=i.length},[i.length,d,Ut]),k.useEffect(()=>{c!==null&&(Dn(c),u(null))},[c,u]);const[Yt,Dn]=k.useState(null),et=k.useRef(null),dn=k.useRef(null);k.useEffect(()=>{if(!q)return;const O=de=>{if(!dn.current)return;const ce=dn.current.getBoundingClientRect().right-de.clientX;M(Math.min(600,Math.max(200,ce)))},oe=()=>{ee(!1)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",oe),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",oe)}},[q]),k.useEffect(()=>{if(F===null)return;const O=de=>{const he=de.clientX-fe.current,ce=Math.max(40,ge.current+he);ke(Te=>{const Pe=[...Te];return Pe[F]=ce,Pe})},oe=()=>{ae(null)};return document.addEventListener("mousemove",O),document.addEventListener("mouseup",oe),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",oe),document.body.style.cursor="",document.body.style.userSelect=""}},[F]);const yt=(O,oe)=>{oe.preventDefault(),fe.current=oe.clientX,ge.current=ze[O],ae(O)},pp=ze.map((O,oe)=>oe===ze.length-1?`minmax(${O}px, 1fr)`:`${O}px`).join(" "),f1=k.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),zt=k.useMemo(()=>i.filter((O,oe)=>{var de,he,ce;if(j&&(O.timestamp<j[0]||O.timestamp>j[1])||C.size>0&&!C.has(O.event_type))return!1;if(b&&O.event_type==="model_response"){const Te=((he=(de=O.data)==null?void 0:de.response_content)==null?void 0:he.parts)||((ce=O.data)==null?void 0:ce.parts)||[],Pe=Te.some(pn=>pn.type==="function_call"),Sn=Te.some(pn=>pn.type==="text");if(!Pe&&!Sn)return!1}return!(S&&!JSON.stringify(O).toLowerCase().includes(S.toLowerCase()))}),[i,j,C,S,b]),is=k.useMemo(()=>{var he;let O=0,oe=0;const de=m!==null?m+1:i.length;for(let ce=0;ce<de;ce++){const Te=i[ce];Te.event_type==="model_response"&&((he=Te.data)!=null&&he.token_counts)&&(O+=Te.data.token_counts.input||0,oe+=Te.data.token_counts.output||0)}return{input:O,output:oe,total:O+oe}},[i,m]),fp=m!==null?i[m]:null;k.useEffect(()=>{if(!e){te([]);return}(async()=>{Ze(!0);try{const oe=await au(e.id);te(oe)}catch(oe){console.error("Failed to load sessions:",oe),te([])}finally{Ze(!1)}})()},[e]);const dl=k.useCallback(async O=>{if(!e){le(null);return}if(!O){a(),l(),h(null),le(null),x(null),E(null);return}try{const oe=await yy(e.id,O);a(),l(),h(oe.id),le(O),x(null),E(null);for(const de of oe.events)s(de)}catch(oe){alert(`Failed to load session: ${oe.message||"Unknown error"}`)}},[e,a,l,h,s]);k.useEffect(()=>{if(!e||J.length===0||_e)return;const oe=new URLSearchParams(window.location.search).get("session");if(oe)if(J.some(he=>he.id===oe)){dl(oe);const he=window.location.pathname;window.history.replaceState({},"",he)}else console.warn(`Session ${oe} not found in available sessions`)},[e,J,_e,dl]),k.useEffect(()=>{n&&et.current&&(et.current.scrollTop=et.current.scrollHeight)},[i.length,n]);const zi=k.useCallback(O=>{const oe=O??g;if(!e||!oe.trim()||n)return;ve(oe),se(!1),v(oe),w&&(w.close(),y(null)),f||(a(),l(),le(null)),r(!0),x(null),E(null);const de=ky(e.id);y(de),de.onopen=()=>{de.send(JSON.stringify({message:oe,agent_id:Yt||void 0,session_id:f||void 0,sandbox_mode:N}))},de.onmessage=he=>{var Te;const ce=JSON.parse(he.data);if(ce.event_type==="agent_start"&&((Te=ce.data)!=null&&Te.session_id)){const Pe=ce.data.session_id;ce.data.session_reused,h(Pe),Pe&&J.some(Sn=>Sn.id===Pe)&&le(Pe)}else if(ce.type==="session_started")h(ce.session_id),ce.session_id&&J.some(Pe=>Pe.id===ce.session_id)&&le(ce.session_id);else if(ce.type==="sandbox_starting")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(ce.type==="sandbox_started")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${ce.sandbox_id})`}});else if(ce.type==="sandbox_response")s({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:ce.data});else if(ce.event_type==="approval_required"||ce.type==="network_request"&&ce.event_type==="approval_required"){const Pe={id:ce.id,method:ce.method||"GET",url:ce.url,host:ce.host,source:ce.source||"agent",headers:ce.headers||{},timeout:ce.timeout||30};B(Pe),s({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${ce.host} requires approval`,host:ce.host,url:ce.url}})}else ce.type==="completed"?(r(!1),de.close()):ce.type==="error"?(r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:ce.error}})):s(ce)},de.onerror=()=>{r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},de.onclose=()=>{r(!1)}},[e,g,n,w,a,r,s,Yt,f,N,ve]),h1=k.useCallback(()=>{w==null||w.close(),r(!1)},[w,r]),m1=k.useCallback(async(O,oe,de)=>{var pn,vp,bp,wp,kp,jp,_p,Sp,Cp,Np,Ep,zp,Tp,Ap,Pp,Lp,Rp,Mp,Ip,Op,$p,Dp,Fp,Bp;if(!P||!e)return;const he=((pn=e.app)==null?void 0:pn.id)||e.id,ce=O?"allow_pattern":"allow_once",Te=O||P.host,Pe=oe||"exact",Sn=de?`/sandbox/${he}/approval?project_id=${e.id}`:`/sandbox/${he}/approval`;try{if(await Se(Sn,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:P.id,action:ce,pattern:Te,pattern_type:Pe,persist:de||!1})}),de&&ce==="allow_pattern"){const fl=((wp=(bp=(vp=e.app)==null?void 0:vp.sandbox)==null?void 0:bp.allowlist)==null?void 0:wp.user)||[],N1={id:`pattern_${Date.now().toString(36)}`,pattern:Te,pattern_type:Pe,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(kp=e.app)==null?void 0:kp.sandbox,enabled:((_p=(jp=e.app)==null?void 0:jp.sandbox)==null?void 0:_p.enabled)??!1,allowlist:{auto:((Np=(Cp=(Sp=e.app)==null?void 0:Sp.sandbox)==null?void 0:Cp.allowlist)==null?void 0:Np.auto)||[],user:[...fl,N1]},unknown_action:((zp=(Ep=e.app)==null?void 0:Ep.sandbox)==null?void 0:zp.unknown_action)??"ask",approval_timeout:((Ap=(Tp=e.app)==null?void 0:Tp.sandbox)==null?void 0:Ap.approval_timeout)??30,agent_memory_limit_mb:((Lp=(Pp=e.app)==null?void 0:Pp.sandbox)==null?void 0:Lp.agent_memory_limit_mb)??512,agent_cpu_limit:((Mp=(Rp=e.app)==null?void 0:Rp.sandbox)==null?void 0:Mp.agent_cpu_limit)??1,mcp_memory_limit_mb:((Op=(Ip=e.app)==null?void 0:Ip.sandbox)==null?void 0:Op.mcp_memory_limit_mb)??256,mcp_cpu_limit:((Dp=($p=e.app)==null?void 0:$p.sandbox)==null?void 0:Dp.mcp_cpu_limit)??.5,run_timeout:((Bp=(Fp=e.app)==null?void 0:Fp.sandbox)==null?void 0:Bp.run_timeout)??300}}})}s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${Te}`,pattern:Te,action:ce}})}catch(fl){console.error("Failed to approve:",fl)}B(null)},[P,e,s,t]),g1=k.useCallback(async()=>{var oe;if(!P||!e)return;const O=((oe=e.app)==null?void 0:oe.id)||e.id;try{await Se(`/sandbox/${O}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:P.id,action:"deny"})}),s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${P.host}`,host:P.host,action:"deny"}})}catch(de){console.error("Failed to deny:",de)}B(null)},[P,e,s]),Ti=k.useCallback(async(O=!0)=>{var de;if(!e)return;const oe=((de=e.app)==null?void 0:de.id)||`app_${e.id}`;O&&I(!0);try{const[he,ce]=await Promise.all([Se(`/sandbox/${oe}/logs?container=agent&tail=500`).catch(()=>null),Se(`/sandbox/${oe}/logs?container=gateway&tail=500`).catch(()=>null)]);T({agent:(he==null?void 0:he.logs)||(he==null?void 0:he.error)||"No logs available",gateway:(ce==null?void 0:ce.logs)||(ce==null?void 0:ce.error)||"No logs available"})}catch(he){console.error("Failed to fetch logs:",he),T({agent:`Error fetching logs: ${he}`,gateway:`Error fetching logs: ${he}`})}finally{O&&I(!1)}},[e]),x1=k.useCallback(()=>{D(!0),Ti()},[Ti]);k.useEffect(()=>{V&&Q.current&&!$&&setTimeout(()=>{Q.current&&(Q.current.scrollTop=Q.current.scrollHeight)},50)},[V,_,X,$]),k.useEffect(()=>{if(!V)return;const O=setInterval(()=>{Ti(!1)},3e3);return()=>clearInterval(O)},[V,Ti]),k.useEffect(()=>{const O=oe=>{if((oe.metaKey||oe.ctrlKey)&&oe.key==="Enter"){oe.preventDefault(),zi();return}if(oe.key==="ArrowDown"||oe.key==="ArrowUp"){if(oe.target instanceof HTMLInputElement||oe.target instanceof HTMLTextAreaElement||(oe.preventDefault(),zt.length===0))return;if(oe.key==="ArrowDown")if(m===null){const de=i.indexOf(zt[0]);x(de)}else{const de=zt.findIndex(he=>i.indexOf(he)===m);if(de<zt.length-1){const he=i.indexOf(zt[de+1]);x(he)}}else if(oe.key==="ArrowUp")if(m===null){const de=i.indexOf(zt[zt.length-1]);x(de)}else{const de=zt.findIndex(he=>i.indexOf(he)===m);if(de>0){const he=i.indexOf(zt[de-1]);x(he)}}}};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[zi,zt,m,i]);const y1=k.useCallback(()=>{var ce;if(i.length===0)return;const O={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:Yt||((ce=e==null?void 0:e.app)==null?void 0:ce.root_agent_id),events:i},oe=new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),de=URL.createObjectURL(oe),he=document.createElement("a");he.href=de,he.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(he),he.click(),document.body.removeChild(he),URL.revokeObjectURL(de)},[i,e,Yt]),v1=k.useCallback(async()=>{if(!f||!e){alert("No active session to save");return}try{const O=await xy(f);if(O.success){alert(O.message||"Session saved to memory successfully");try{const oe=await au(e.id);te(oe)}catch{}}else alert(`Failed to save to memory: ${O.error||"Unknown error"}`)}catch(O){alert(`Error saving to memory: ${O.message||"Unknown error"}`)}},[f,e]),[b1,os]=k.useState(!1),[w1,k1]=k.useState([]),[Ai,hp]=k.useState(""),[pl,j1]=k.useState("Test Case from Session"),[mp,gp]=k.useState(!1),_1=k.useCallback(async()=>{if(!f||!e){alert("No active session to create test case from");return}try{const O=await Se(`/projects/${e.id}/eval-sets`);if(k1(O.eval_sets||[]),!O.eval_sets||O.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}hp(O.eval_sets[0].id),os(!0)}catch(O){alert(`Error loading eval sets: ${O.message||"Unknown error"}`)}},[f,e]),S1=k.useCallback(async()=>{if(!f||!e||!Ai){alert("Please select an evaluation set");return}gp(!0);try{const O=await Se(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:f,eval_set_id:Ai,case_name:pl})});os(!1),alert(`Test case "${O.eval_case.name}" created successfully!

Token count: ${O.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(O){alert(`Error creating test case: ${O.message||"Unknown error"}`)}finally{gp(!1)}},[f,e,Ai,pl]),C1=k.useCallback(()=>{const O=document.createElement("input");O.type="file",O.accept=".json",O.onchange=async oe=>{var he;const de=(he=oe.target.files)==null?void 0:he[0];if(de)try{const ce=await de.text(),Te=JSON.parse(ce);if(!Te.events||!Array.isArray(Te.events)){alert("Invalid run file: missing events array");return}a(),l(),x(null),E(null),Te.events.forEach(Pe=>{s(Pe)})}catch(ce){alert(`Failed to load run file: ${ce}`)}},O.click()},[a,l,s]);return k.useEffect(()=>{if(m!==null){const O=document.querySelector(".event-row.selected");O==null||O.scrollIntoView({behavior:"smooth",block:"nearest"})}},[m]),e?o.jsxs("div",{className:`run-panel ${q?"resizing":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsx(HT,{agents:e.agents,events:i,selectedEventIndex:m}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:Yt||"",onChange:O=>Dn(O.target.value||null),disabled:n,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((yp=e.agents.find(O=>O.id===e.app.root_agent_id))==null?void 0:yp.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(O=>O.id!==e.app.root_agent_id).map(O=>o.jsxs("option",{value:O.id,children:[O.name," (",O.type.replace("Agent",""),")"]},O.id))]}),o.jsxs("select",{className:"agent-selector",value:me||"",onChange:O=>dl(O.target.value||null),disabled:n||_e,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:_e?"Loading...":"Load Session..."}),J.map(O=>{const oe=new Date(O.started_at*1e3),de=O.duration?`${O.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:O.id,children:[oe.toLocaleString()," (",O.event_count," events, ",de,")"]},O.id)})]}),o.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[o.jsx("input",{ref:re,type:"text",placeholder:"Enter your query...",value:g,onChange:O=>v(O.target.value),onFocus:()=>se(!0),onBlur:()=>setTimeout(()=>se(!1),150),onKeyDown:O=>{O.key==="Enter"&&!O.shiftKey?zi():O.key==="Escape"&&se(!1)},disabled:n,style:{flex:1}}),Y&&je.length>0&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:je.map((O,oe)=>o.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:oe<je.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:de=>{de.preventDefault(),zi(O.prompt)},onMouseEnter:de=>{de.currentTarget.style.background="#27272a"},onMouseLeave:de=>{de.currentTarget.style.background="transparent"},children:[o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:O.prompt}),o.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",O.count]})]},oe))})]}),n?o.jsxs("button",{className:"stop",onClick:h1,children:[o.jsx(Uk,{size:14}),"Stop"]}):o.jsxs("button",{onClick:zi,disabled:!g.trim(),children:[o.jsx(cr,{size:14}),"Run"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:N?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[o.jsx("input",{type:"checkbox",checked:N,onChange:O=>L(O.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),N&&o.jsx("button",{onClick:x1,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(Oy,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:S,onChange:O=>A(O.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(O=>o.jsx("button",{className:`filter-chip ${C.has(O)?"active":""}`,onClick:()=>{const oe=new Set(C);oe.has(O)?oe.delete(O):oe.add(O),R(oe)},children:O.replace("_"," ")},O)),o.jsx("button",{className:`filter-chip ${C.has("callback_start")&&C.has("callback_end")?"active":""}`,onClick:()=>{const O=new Set(C);O.has("callback_start")&&O.has("callback_end")?(O.delete("callback_start"),O.delete("callback_end")):(O.add("callback_start"),O.add("callback_end")),R(O)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${b?"active":""}`,onClick:()=>U(!b),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${z?"active":""}`,onClick:()=>G(!z),children:[o.jsx(Pn,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${xe?"active":""}`,onClick:()=>ye(!xe),children:[o.jsx(Ul,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[zt.length," / ",i.length," events"]}),j&&o.jsx("button",{className:"toolbar-btn",onClick:()=>E(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:dn,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:pp},children:[o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"#"}),o.jsx("div",{className:`column-resize-handle ${F===0?"active":""}`,onMouseDown:O=>yt(0,O)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Time"}),o.jsx("div",{className:`column-resize-handle ${F===1?"active":""}`,onMouseDown:O=>yt(1,O)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Agent"}),o.jsx("div",{className:`column-resize-handle ${F===2?"active":""}`,onMouseDown:O=>yt(2,O)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Type"}),o.jsx("div",{className:`column-resize-handle ${F===3?"active":""}`,onMouseDown:O=>yt(3,O)})]}),o.jsx("div",{className:"header-cell",children:o.jsx("span",{children:"Info"})})]}),o.jsx("div",{className:"event-list",ref:et,children:zt.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Iy,{size:24}),o.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):zt.map((O,oe)=>{const de=i.indexOf(O),he=Pm[O.event_type]||Pm.error,ce=qT[O.event_type]||ka;return o.jsxs("div",{className:`event-row ${m===de?"selected":""}`,style:{background:he.bg,gridTemplateColumns:pp},onClick:()=>x(de),onDoubleClick:()=>{G(!1),ye(!1)},children:[o.jsx("div",{className:"index",children:de}),o.jsx("div",{className:"time",style:{color:he.fg},children:KT(O.timestamp,f1.min)}),o.jsx("div",{className:"agent",children:o.jsx("span",{className:"agent-badge",style:{backgroundColor:Ra(O.agent_name).bg,color:Ra(O.agent_name).fg},children:O.agent_name})}),o.jsxs("div",{className:"type",style:{color:he.fg},children:[o.jsx(ce,{size:10}),O.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:JT(O)})]},de)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:H},children:[o.jsx("div",{className:`resize-handle ${q?"active":""}`,onMouseDown:()=>ee(!0)}),o.jsxs("div",{className:"side-panel",style:{width:H-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!z&&!xe?"active":""}`,onClick:()=>{G(!1),ye(!1)},children:[o.jsx(vi,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${z?"active":""}`,onClick:()=>{G(!0),ye(!1)},children:[o.jsx(Pn,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${xe?"active":""}`,onClick:()=>{ye(!0),G(!1)},children:[o.jsx(Ul,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:xe?o.jsx(t6,{project:e,selectedEventIndex:m,sandboxMode:N}):z?o.jsx(e6,{events:i,selectedEventIndex:m,project:e}):fp?o.jsx(YT,{event:fp}):o.jsxs("div",{className:"empty-state",children:[o.jsx(vi,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:i.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:i.filter(O=>O.event_type==="state_change").length})]}),i.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),is.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[is.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[is.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:is.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:C1,title:"Load a saved run",children:[o.jsx(el,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:y1,disabled:i.length===0,title:"Save current run to file",children:[o.jsx(Yo,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:v1,disabled:!f||i.length===0,title:"Save current session to memory",children:[o.jsx(Pn,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:_1,disabled:!f||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(du,{size:12}),"Create Test Case"]})]}),b1&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>os(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:O=>O.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(du,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:pl,onChange:O=>j1(O.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:Ai,onChange:O=>hp(O.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:w1.map(O=>o.jsx("option",{value:O.id,children:O.name},O.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>os(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:S1,disabled:mp||!Ai,children:mp?"Creating...":"Create Test Case"})]})]})}),P&&o.jsx(U4,{request:P,timeout:P.timeout||30,onApprove:m1,onDeny:g1,onClose:()=>B(null)}),V&&o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>D(!1),children:o.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:O=>O.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Ul,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs("button",{onClick:Ti,disabled:$,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:$?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(rn,{size:12,className:$?"animate-spin":""}),"Refresh"]}),o.jsx("button",{onClick:()=>D(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:o.jsx(Xo,{size:16})})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsx("button",{onClick:()=>W("agent"),style:{padding:"8px 16px",background:_==="agent"?"#18181b":"transparent",border:"none",borderBottom:_==="agent"?"2px solid #22d3ee":"2px solid transparent",color:_==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),o.jsx("button",{onClick:()=>W("gateway"),style:{padding:"8px 16px",background:_==="gateway"?"#18181b":"transparent",border:"none",borderBottom:_==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:_==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),o.jsx("div",{ref:Q,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:$?o.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):X[_]?o.jsx(QT,{content:X[_]}):o.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const r6=()=>Math.random().toString(36).substring(2,10),i6=()=>({id:r6(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function o6(){const{project:e,setProject:t}=ut(),[n,r]=k.useState(null),[i,s]=k.useState(null),[a,l]=k.useState(""),[c,u]=k.useState([]),[d,p]=k.useState(!1),[f,h]=k.useState(!1),[g,v]=k.useState(""),[w,y]=k.useState(!1),[m,x]=k.useState(null),[j,E]=k.useState(null),S=k.useRef(null),A=(e==null?void 0:e.skillsets)||[],C=A.find(I=>I.id===n);k.useEffect(()=>{Ay().then(I=>E(I.available)).catch(()=>E(!1))},[]),k.useEffect(()=>{A.length>0&&!n&&r(A[0].id)},[A,n]),k.useEffect(()=>{!e||!n||R()},[e==null?void 0:e.id,n]);const R=k.useCallback(async()=>{if(!(!e||!n))try{const I=await Cy(e.id,n);s(I),L(n,{entry_count:I.entry_count})}catch(I){console.error("Failed to load stats:",I)}},[e==null?void 0:e.id,n]),N=I=>{e&&t({...e,...I})},L=(I,_)=>{e&&t({...e,skillsets:e.skillsets.map(W=>W.id===I?{...W,..._}:W)})},P=()=>{if(!e)return;const I=i6();N({skillsets:[...A,I]}),r(I.id)},B=I=>{e&&confirm("Delete this SkillSet and all its data?")&&(N({skillsets:A.filter(_=>_.id!==I)}),n===I&&r(A.length>1?A[0].id:null),s(null),u([]))},V=async()=>{if(!(!e||!n||!a.trim())){p(!0),x(null);try{const I=await zy(e.id,n,a.trim(),10,0);u(I.results)}catch(I){x("Search failed"),console.error(I)}finally{p(!1)}}},D=async()=>{if(!(!e||!n||!g.trim())){y(!0),x(null);try{const I=await Ny(e.id,n,g.trim());v(""),await R(),alert(`Added ${I.chunks_added} chunks from ${I.source_name}`)}catch(I){x(I.message||"Failed to fetch URL")}finally{y(!1)}}},X=async I=>{var W;const _=(W=I.target.files)==null?void 0:W[0];if(!(!_||!e||!n)){x(null);try{const Q=await Ey(e.id,n,_);await R(),alert(`Added ${Q.chunks_added} chunks from ${Q.source_name}`)}catch(Q){x(Q.message||"Upload failed")}S.current&&(S.current.value="")}},T=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Ty(e.id,n),await R(),u([])}catch{x("Clear failed")}},$=I=>{const _=Math.round(I*100),W=160,Q=70,b=20+(1-I)*15,U=.15+I*.25;return`linear-gradient(90deg, hsla(${W}, ${Q}%, ${b}%, ${U}) 0%, transparent ${_}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:P,title:"Add SkillSet",children:o.jsx(Ke,{size:16})})]}),A.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(Pn,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:P,children:[o.jsx(Ke,{size:14})," Create SkillSet"]})]}):A.map(I=>o.jsxs("div",{className:`skillset-item ${n===I.id?"selected":""}`,onClick:()=>r(I.id),children:[o.jsx(Pn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:I.name}),o.jsxs("div",{className:"skillset-item-count",children:[I.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:_=>{_.stopPropagation(),B(I.id)},children:o.jsx(Fe,{size:14})})]},I.id))]}),C?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:C.name,onChange:I=>L(C.id,{name:I.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:C.description,onChange:I=>L(C.id,{description:I.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:C.embedding_model||"text-embedding-004",onChange:I=>L(C.id,{embedding_model:I.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),j===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:R,title:"Refresh",children:o.jsx(rn,{size:16})})]}),m&&o.jsxs("div",{className:"error-banner",children:[m,o.jsx("button",{onClick:()=>x(null),children:o.jsx(Xo,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:a,onChange:I=>l(I.target.value),onKeyDown:I=>I.key==="Enter"&&V(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:V,disabled:d||!a.trim(),children:[o.jsx(Oy,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(I=>o.jsxs("div",{className:"search-result",style:{background:$(I.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(I.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:I.text}),o.jsx("div",{className:"search-result-source",children:I.source_name})]},I.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>h(!f),children:[f?o.jsx(Pt,{size:16}):o.jsx(bt,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),f&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(Ld,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:g,onChange:I=>v(I.target.value),onKeyDown:I=>I.key==="Enter"&&D(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:D,disabled:w||!g.trim(),children:[o.jsx(Mk,{size:14}),w?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(Pk,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:S,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:X}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var I;return(I=S.current)==null?void 0:I.click()},children:[o.jsx(el,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:T,children:[o.jsx(Fe,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):A.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Pn,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const yn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},Uo=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=yn[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const s=n??3.5;return{value:t.toFixed(1),comparison:`${s.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const s=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(s*100)}% min`}}},s6={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function p1(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function a6(){const{project:e}=ut(),[t,n]=k.useState([]),[r,i]=k.useState(null),[s,a]=k.useState(null),[l,c]=k.useState(new Set),[u,d]=k.useState(new Map),[p,f]=k.useState(new Map),[h,g]=k.useState(new Set),[v,w]=k.useState(!1),[y,m]=k.useState(null),[x,j]=k.useState([]),[E,S]=k.useState(null),A=async()=>{if(e)try{const M=await qe.get(`/projects/${e.id}/eval-history`);j(M.runs||[])}catch(M){console.warn("Failed to load eval history:",M)}},C=async(M,q=!0)=>{if(e)try{const Y=(await qe.get(`/projects/${e.id}/eval-history/${M}`)).run;if(S(Y),Y!=null&&Y.case_results){const se=new Map;for(const K of Y.case_results)se.set(K.eval_case_id,K);d(se)}if((Y==null?void 0:Y.eval_set_id)==="batch")c(new Set(t.map(se=>se.id))),i(null);else if(Y!=null&&Y.eval_set_id){const se=new Map;se.set(Y.eval_set_id,Y),f(se),i(Y.eval_set_id),c(K=>new Set([...K,Y.eval_set_id]))}a(null),q&&window.history.pushState({run:M},"",`?run=${M}`)}catch(ee){console.warn("Failed to load history run:",ee)}},R=(M,q=!0)=>{i(M),a(null),S(null),q&&M?window.history.pushState({set:M},"",`?set=${M}`):q&&window.history.pushState({},"",window.location.pathname)},N=(M,q,ee=!0)=>{i(M),a(q),S(null),ee&&q?window.history.pushState({set:M,case:q},"",`?set=${M}&case=${q}`):ee&&M&&window.history.pushState({set:M},"",`?set=${M}`)},L=()=>{S(null),d(new Map),f(new Map),window.history.pushState({},"",window.location.pathname)},P=async M=>{if(e)try{await qe.delete(`/projects/${e.id}/eval-history/${M}`),j(q=>q.filter(ee=>ee.id!==M)),(E==null?void 0:E.id)===M&&S(null)}catch(q){console.warn("Failed to delete history run:",q)}};k.useEffect(()=>{e!=null&&e.id&&(B(),A())},[e==null?void 0:e.id]),k.useEffect(()=>{const M=()=>{g(new Set(t.map(ee=>ee.id)))},q=()=>{g(new Set),A()};return window.addEventListener("eval-tests-started",M),window.addEventListener("eval-tests-completed",q),()=>{window.removeEventListener("eval-tests-started",M),window.removeEventListener("eval-tests-completed",q)}},[t]),k.useEffect(()=>{if(!(e!=null&&e.id)||v)return;const M=()=>{const ee=new URLSearchParams(window.location.search),Y=ee.get("set"),se=ee.get("case"),K=ee.get("run");if(K){C(K,!1);return}if(Y)i(Y),a(se),S(null),c(Z=>new Set([...Z,Y]));else{if(!r&&!s&&!E)return;i(null),a(null),S(null)}};M();const q=()=>{M()};return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[e==null?void 0:e.id,v,t.length]);const B=async()=>{var M,q;if(e!=null&&e.id){w(!0),m(null);try{const ee=await qe.get(`/projects/${e.id}/eval-sets`);if(n(ee.eval_sets||[]),((M=ee.eval_sets)==null?void 0:M.length)>0){const Y=new URLSearchParams(window.location.search),se=Y.get("set"),K=Y.get("case"),Z=se||(K?(q=ee.eval_sets.find(re=>re.eval_cases.some(ve=>ve.id===K)))==null?void 0:q.id:null)||ee.eval_sets[0].id;c(new Set([Z]))}}catch(ee){m(ee.message||"Failed to load eval sets")}finally{w(!1)}}},V=t.find(M=>M.id===r),D=V==null?void 0:V.eval_cases.find(M=>M.id===s),X=async()=>{if(e!=null&&e.id)try{const M=await qe.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:s6});n(q=>[...q,M.eval_set]),i(M.eval_set.id),c(q=>new Set([...q,M.eval_set.id]))}catch(M){m(M.message||"Failed to create eval set")}},T=async M=>{if(e!=null&&e.id)try{const q=await qe.post(`/projects/${e.id}/eval-sets/${M}/cases`,{name:"New Test Case",description:"",invocations:[{id:p1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(ee=>ee.map(Y=>Y.id===M?{...Y,eval_cases:[...Y.eval_cases,q.eval_case]}:Y)),i(M),a(q.eval_case.id)}catch(q){m(q.message||"Failed to create eval case")}},$=async(M,q,ee)=>{if(e!=null&&e.id)try{const Y=await qe.put(`/projects/${e.id}/eval-sets/${M}/cases/${q}`,ee);n(se=>se.map(K=>K.id===M?{...K,eval_cases:K.eval_cases.map(Z=>Z.id===q?Y.eval_case:Z)}:K))}catch(Y){m(Y.message||"Failed to update eval case")}},I=async(M,q)=>{if(e!=null&&e.id)try{await qe.delete(`/projects/${e.id}/eval-sets/${M}/cases/${q}`),n(ee=>ee.map(Y=>Y.id===M?{...Y,eval_cases:Y.eval_cases.filter(se=>se.id!==q)}:Y)),s===q&&a(null)}catch(ee){m(ee.message||"Failed to delete eval case")}},_=async M=>{if(e!=null&&e.id)try{await qe.delete(`/projects/${e.id}/eval-sets/${M}`),n(q=>q.filter(ee=>ee.id!==M)),r===M&&(i(null),a(null))}catch(q){m(q.message||"Failed to delete eval set")}},W=async M=>{if(e!=null&&e.id)try{const q=await qe.get(`/projects/${e.id}/eval-sets/${M}/export`),ee=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),Y=URL.createObjectURL(ee),se=document.createElement("a");se.href=Y;const K=t.find(Z=>Z.id===M);se.download=`${(K==null?void 0:K.name)||"eval-set"}.json`,document.body.appendChild(se),se.click(),document.body.removeChild(se),URL.revokeObjectURL(Y)}catch(q){m(q.message||"Failed to export eval set")}},Q=async M=>{if(e!=null&&e.id)try{const q=await M.text(),ee=JSON.parse(q),Y=await qe.post(`/projects/${e.id}/eval-sets/import`,ee);n(se=>[...se,Y.eval_set]),i(Y.eval_set.id),c(se=>new Set([...se,Y.eval_set.id]))}catch(q){m(q.message||"Failed to import eval set")}},b=k.useRef(null),U=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const M=await Promise.all(t.map(async se=>{try{return await qe.get(`/projects/${e.id}/eval-sets/${se.id}/export`)}catch{return se}})),q=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),ee=URL.createObjectURL(q),Y=document.createElement("a");Y.href=ee,Y.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(ee)}catch(M){m(M.message||"Failed to export all eval sets")}},z=async(M,q)=>{if(e!=null&&e.id){g(ee=>new Set([...ee,q]));try{const ee=await qe.post(`/projects/${e.id}/eval-sets/${M}/cases/${q}/run`,{});d(Y=>new Map(Y).set(q,ee.result))}catch(ee){m(ee.message||"Failed to run eval case")}finally{g(ee=>{const Y=new Set(ee);return Y.delete(q),Y})}}},G=async M=>{if(!(e!=null&&e.id))return;const q=t.find(Y=>Y.id===M);if(!q)return;const ee=q.eval_cases.map(Y=>Y.id);g(Y=>new Set([...Y,M,...ee]));try{const Y=await qe.post(`/projects/${e.id}/eval-sets/${M}/run`,{});f(se=>new Map(se).set(M,Y.result));for(const se of Y.result.case_results)d(K=>new Map(K).set(se.eval_case_id,se));try{await qe.post(`/projects/${e.id}/eval-history`,Y.result),A()}catch(se){console.warn("Failed to save eval run to history:",se)}}catch(Y){m(Y.message||"Failed to run eval set")}finally{g(Y=>{const se=new Set(Y);return se.delete(M),ee.forEach(K=>se.delete(K)),se})}},xe=M=>{c(q=>{const ee=new Set(q);return ee.has(M)?ee.delete(M):ee.add(M),ee})},ye=M=>{let q=M.eval_cases.length,ee=0,Y=0,se=0;for(const K of M.eval_cases){const Z=u.get(K.id);Z?Z.passed?ee++:Y++:se++}return{total:q,passed:ee,failed:Y,pending:se}},H=M=>M==null?"-":`${Math.round(M*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:b,accept:".json",style:{display:"none"},onChange:M=>{var ee;const q=(ee=M.target.files)==null?void 0:ee[0];q&&(Q(q),M.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var M;return(M=b.current)==null?void 0:M.click()},title:"Import eval set from JSON",children:o.jsx(el,{size:14})}),t.length>0&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,title:"Download all eval sets as JSON",children:o.jsx(Yo,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:B,title:"Refresh",children:o.jsx(rn,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:X,title:"New eval set",children:[o.jsx(Ke,{size:14}),"Set"]})]})]}),o.jsxs("div",{className:"eval-tree",children:[v&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),y&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:y}),!v&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(Od,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one to get started."]})]}),t.map(M=>{const q=l.has(M.id),ee=ye(M),Y=h.has(M.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===M.id&&!s?"selected":""}`,onClick:()=>R(M.id),children:[o.jsx("button",{className:"expand-btn",onClick:se=>{se.stopPropagation(),xe(M.id)},children:M.eval_cases.length>0?q?o.jsx(Pt,{size:14}):o.jsx(bt,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(My,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:M.name}),o.jsx("button",{className:"add-case-btn",onClick:se=>{se.stopPropagation(),T(M.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:o.jsx(Ke,{size:12})}),ee.total>0&&o.jsxs("span",{className:"set-stats",children:[ee.passed>0&&o.jsx("span",{className:"stat-passed",children:ee.passed}),ee.failed>0&&o.jsx("span",{className:"stat-failed",children:ee.failed}),ee.pending>0&&o.jsx("span",{className:"stat-pending",children:ee.pending})]}),o.jsx("button",{className:"run-btn",onClick:se=>{se.stopPropagation(),G(M.id)},title:"Run all tests in this set",disabled:Y,children:Y?o.jsx(Lo,{size:12,className:"spinning"}):o.jsx(cr,{size:12})})]}),q&&o.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:M.eval_cases.map(se=>{var re;const K=u.get(se.id),Z=h.has(se.id);return o.jsxs("div",{className:`tree-case ${s===se.id?"selected":""}`,onClick:()=>N(M.id,se.id),children:[Z?o.jsx(Lo,{size:14,className:"spinning",style:{color:"var(--warning)"}}):K?K.passed?o.jsx(Lr,{size:14,style:{color:"var(--success)"}}):o.jsx(bi,{size:14,style:{color:"var(--error)"}}):o.jsx(wa,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:se.name}),K&&K.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:K.passed?"var(--success)":"var(--error)"},children:H((re=K.metric_results[0])==null?void 0:re.score)}),o.jsx("button",{className:"run-btn",onClick:ve=>{ve.stopPropagation(),z(M.id,se.id)},disabled:Z,children:o.jsx(cr,{size:12})})]},se.id)})})]},M.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",x.length,")"]})}),o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:x.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...x].sort((M,q)=>(q.started_at||0)-(M.started_at||0)).map(M=>{const q=M.passed_cases===M.total_cases;return o.jsx("div",{className:`history-item ${(E==null?void 0:E.id)===M.id?"selected":""}`,onClick:()=>C(M.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(E==null?void 0:E.id)===M.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[q?o.jsx(Lr,{size:14,style:{color:"var(--success)",flexShrink:0}}):o.jsx(bi,{size:14,style:{color:"var(--error)",flexShrink:0}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:M.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(M.started_at*1e3).toLocaleString()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:q?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[M.passed_cases,"/",M.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:ee=>{ee.stopPropagation(),P(M.id)},title:"Delete run",style:{padding:2},children:o.jsx(Fe,{size:12})})]})]})},M.id)})})]})]}),o.jsx("div",{className:"eval-editor",children:E?o.jsx(c6,{run:E,onClose:L}):D?o.jsx(u6,{evalCase:D,evalSetId:r,projectId:e.id,result:u.get(D.id),isRunning:h.has(D.id),onUpdate:M=>$(r,D.id,M),onDelete:()=>I(r,D.id),onRun:()=>z(r,D.id),onClearResult:()=>d(M=>{const q=new Map(M);return q.delete(D.id),q})}):V?o.jsx(d6,{evalSet:V,projectId:e.id,result:p.get(V.id),isRunning:h.has(V.id),caseResults:u,onUpdate:async M=>{try{const q=await qe.put(`/projects/${e.id}/eval-sets/${V.id}`,M);n(ee=>ee.map(Y=>Y.id===V.id?q.eval_set:Y))}catch(q){m(q.message)}},onDelete:()=>_(V.id),onRun:()=>G(V.id),onExport:()=>W(V.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(wa,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})})]}):null}function l6({value:e,onChange:t}){var a,l;const{project:n}=ut(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function c6({run:e,onClose:t}){var h;const{project:n}=ut(),[r,i]=k.useState(!0),[s,a]=k.useState(new Set),l=e.case_results||[],c=l.filter(g=>g.passed).length,u=l.filter(g=>!g.passed).length,d=r?l.filter(g=>!g.passed):l,p=g=>{a(v=>{const w=new Set(v);return w.has(g)?w.delete(g):w.add(g),w})},f=g=>{g&&n&&(window.location.href=`/project/${n.id}/run?session=${g}`)};return o.jsxs("div",{className:"test-result-viewer",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"result-header",children:[o.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const g=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(g)}},title:"Copy link to this run",children:o.jsx(Md,{size:14})})})]}),o.jsxs("div",{className:"result-summary",children:[o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Status"}),o.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Passed"}),o.jsx("span",{className:"value passed",children:c})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Failed"}),o.jsx("span",{className:"value failed",children:u})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Total Cases"}),o.jsx("span",{className:"value",children:l.length})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Duration"}),o.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Tokens"}),o.jsx("span",{className:"value",children:((h=e.total_tokens)==null?void 0:h.toLocaleString())||"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Run Time"}),o.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),o.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[o.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[o.jsx("input",{type:"checkbox",checked:r,onChange:g=>i(g.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),o.jsxs("div",{className:"result-cases",children:[d.map((g,v)=>{var L,P,B,V,D,X;const w=g.case_id||`case-${v}`,y=s.has(w),m=((L=g.metric_results)==null?void 0:L.filter(T=>!T.passed||T.error))||[],x=((P=g.metric_results)==null?void 0:P.filter(T=>T.passed&&!T.error))||[],j=((B=g.rubric_results)==null?void 0:B.filter(T=>!T.passed||T.error))||[],E=((V=g.rubric_results)==null?void 0:V.filter(T=>T.passed&&!T.error))||[],S=y?g.metric_results:m,A=y?g.rubric_results:j,C=y?g.invocation_results:(D=g.invocation_results)==null?void 0:D.filter(T=>{var $;return(($=T.metric_results)==null?void 0:$.some(I=>!I.passed))||T.error}),R=x.length+E.length,N=m.length+j.length;return o.jsxs("div",{className:"result-case",children:[o.jsxs("div",{className:"result-case-header",onClick:()=>p(w),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"result-case-name",children:[o.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:y?"▼":"▶"}),g.passed?o.jsx(Lr,{size:16,style:{color:"var(--success)"}}):o.jsx(bi,{size:16,style:{color:"var(--error)"}}),g.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&o.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:g.eval_set_name}),g.case_name||`Case ${v+1}`,o.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[N>0&&o.jsxs("span",{style:{color:"var(--error)"},children:[N," failed"]}),N>0&&R>0&&" · ",R>0&&o.jsxs("span",{style:{color:"var(--success)"},children:[R," passed"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[g.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:T=>{T.stopPropagation(),f(g.session_id)},title:"View session in Run panel",children:[o.jsx(Ly,{size:12})," View Session"]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:g.duration_ms?`${(g.duration_ms/1e3).toFixed(2)}s`:""})]})]}),o.jsxs("div",{className:"result-case-details",children:[(S==null?void 0:S.length)>0&&o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[S.map((T,$)=>{const I=Uo(T.metric,T.score,T.threshold);return o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:T.error?"rgba(255, 193, 7, 0.1)":T.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${T.error?"var(--warning)":T.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[o.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:T.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),T.error?o.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:T.passed?"var(--success)":"var(--error)"},children:I.value}),o.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:I.comparison})]})]},$)}),!y&&x.length>0&&o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",x.length," passed"]})]}),S==null?void 0:S.filter(T=>!T.passed&&T.rationale).map((T,$)=>o.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[o.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[T.metric.replace(/_/g," ")," - Why it failed:"]}),o.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:T.rationale})]},`rationale-${$}`)),(A==null?void 0:A.length)>0&&o.jsxs("div",{style:{marginTop:8},children:[o.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),A.map((T,$)=>o.jsxs("div",{style:{marginBottom:T.rationale&&!T.passed?8:4},children:[o.jsxs("div",{className:"metric-row",children:[o.jsx("span",{className:"metric-name",style:{flex:1},children:T.rubric}),o.jsx("span",{className:`metric-value ${T.passed?"passed":"failed"}`,children:T.passed?"✓ Pass":"✗ Fail"})]}),!T.passed&&T.rationale&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[o.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",T.rationale]}),T.error&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",T.error]})]},$)),!y&&E.length>0&&o.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",E.length," passed rubric",E.length>1?"s":""]})]}),(C==null?void 0:C.length)>0&&o.jsxs("div",{className:"invocation-summary",children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",C.length,!y&&((X=g.invocation_results)==null?void 0:X.length)>C.length?` of ${g.invocation_results.length}`:"",")"]}),C.map((T,$)=>o.jsxs("div",{className:"invocation-item",children:[o.jsxs("div",{className:"invocation-query",children:["Turn ",T.invocation_id||$+1,": ",T.user_message||"(no message)"]}),T.actual_response&&o.jsxs("div",{className:"invocation-response",children:["Response: ",T.actual_response.substring(0,200),T.actual_response.length>200?"...":""]})]},$))]}),g.error&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:g.error})]})]},w)}),l.length===0&&o.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function u6({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:a,onRun:l,onClearResult:c}){var E,S,A;const{project:u}=ut(),[d,p]=k.useState(e),[f,h]=k.useState("assertions");k.useEffect(()=>{p(e)},[e.id]);const g=k.useCallback(C=>{p(R=>({...R,...C})),s(C)},[s]),v=()=>{const C={id:p1(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};g({invocations:[...d.invocations,C]})},w=(C,R)=>{const N=[...d.invocations];N[C]={...N[C],...R},g({invocations:N})},y=C=>{g({invocations:d.invocations.filter((R,N)=>N!==C)})},m=C=>{const R=[...d.invocations];R[C]={...R[C],expected_tool_calls:[...R[C].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},g({invocations:R})},x=(C,R,N)=>{const L=[...d.invocations],P=[...L[C].expected_tool_calls];P[R]={...P[R],...N},L[C]={...L[C],expected_tool_calls:P},g({invocations:L})},j=(C,R)=>{const N=[...d.invocations];N[C]={...N[C],expected_tool_calls:N[C].expected_tool_calls.filter((L,P)=>P!==R)},g({invocations:N})};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(wa,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:d.name,onChange:C=>g({name:C.target.value}),placeholder:"Test case name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const C=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(C)},title:"Copy link to this test case",children:o.jsx(Md,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?o.jsx(Lo,{size:14,className:"spinning"}):o.jsx(cr,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Fe,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${f==="assertions"?"active":""}`,onClick:()=>h("assertions"),children:[o.jsx(ka,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),o.jsxs("div",{className:`tab ${f==="rubrics"?"active":""}`,onClick:()=>h("rubrics"),children:[o.jsx(Od,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${f==="docs"?"active":""}`,onClick:()=>h("docs"),children:[o.jsx(yi,{size:14,style:{marginRight:6}}),"Docs"]}),o.jsxs("div",{className:`tab ${f==="json"?"active":""}`,onClick:()=>h("json"),children:[o.jsx(kn,{size:14,style:{marginRight:6}}),"JSON"]})]}),o.jsxs("div",{className:"editor-content",children:[f==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:d.target_agent||"",onChange:C=>g({target_agent:C.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(E=u==null?void 0:u.agents)==null?void 0:E.map(C=>o.jsx("option",{value:C.name,children:C.name},C.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:d.tags.join(", "),onChange:C=>g({tags:C.target.value.split(",").map(R=>R.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:d.description,onChange:C=>g({description:C.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(Jt,{height:"100%",defaultLanguage:"json",value:(()=>{var R;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((R=u==null?void 0:u.app)!=null&&R.state_keys)&&u.app.state_keys.length>0){const N={};return u.app.state_keys.forEach(L=>{L.default_value!==void 0?N[L.name]=L.default_value:N[L.name]=L.type==="string"?"":L.type==="number"?0:L.type==="boolean"?!1:L.type==="array"?[]:{}}),JSON.stringify(N,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:C=>{try{C&&g({initial_state:JSON.parse(C)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(ka,{size:14}),"Conversation Turns"]}),d.invocations.map((C,R)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:R+1}),d.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y(R),style:{padding:4},children:o.jsx(Fe,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:C.user_message,onChange:N=>w(R,{user_message:N.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:C.expected_response||"",onChange:N=>w(R,{expected_response:N.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),C.expected_tool_calls.map((N,L)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:N.name,onChange:P=>x(R,L,{name:P.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${N.args_match_mode==="subset"?"active":""}`,onClick:()=>x(R,L,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${N.args_match_mode==="exact"?"active":""}`,onClick:()=>x(R,L,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(Jt,{height:"22px",defaultLanguage:"json",value:JSON.stringify(N.args||{}),onChange:P=>{try{P&&x(R,L,{args:JSON.parse(P)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>j(R,L),style:{padding:"4px 6px"},children:o.jsx(Fe,{size:10})})]},L)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(R),style:{marginTop:4},children:[o.jsx(Ke,{size:12})," Assert Tool Call"]})]})]},C.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:v,children:[o.jsx(Ke,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Lr,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(Jt,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:C=>{if(!C||C==="{}")g({expected_final_state:void 0});else try{g({expected_final_state:JSON.parse(C)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),f==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:C,label:R,default:N,max:L})=>{const P=(d.enabled_metrics||[]).find(V=>V.metric===C),B=(P==null?void 0:P.threshold)??N;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!P,onChange:V=>{const D=[...d.enabled_metrics||[]];if(V.target.checked)D.push({metric:C,threshold:N});else{const X=D.findIndex(T=>T.metric===C);X!==-1&&D.splice(X,1)}g({enabled_metrics:D})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:P?1:.5,minWidth:100},children:R}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:P?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:L===5?1:0,max:L,step:.1,value:B,disabled:!P,onChange:V=>{const D=[...d.enabled_metrics||[]],X=D.findIndex(T=>T.metric===C);X!==-1&&(D[X]={...D[X],threshold:parseFloat(V.target.value)||0},g({enabled_metrics:D}))},style:{width:60,textAlign:"center",opacity:P?1:.3,padding:"2px 4px",fontSize:11}})]},C)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((C,R)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:C.rubric,onChange:N=>{const L=[...d.rubrics];L[R]={rubric:N.target.value},g({rubrics:L})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>g({rubrics:d.rubrics.filter((N,L)=>L!==R)}),children:o.jsx(Fe,{size:12})})]},R)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>g({rubrics:[...d.rubrics,{rubric:""}]}),children:[o.jsx(Ke,{size:12})," Add Rubric"]})]})]}),f==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(yn).map(C=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:C}),o.jsx("td",{style:{padding:"8px 4px"},children:yn[C].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:yn[C].description})]},C))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),f==="json"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),o.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(Jt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(S=d.tags)!=null&&S.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(C=>{var R;return{user_message:C.user_message,expected_response:C.expected_response||void 0,expected_tool_calls:(R=C.expected_tool_calls)!=null&&R.length?C.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(A=d.rubrics)!=null&&A.length?d.rubrics.map(C=>C.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var R,N;const C=JSON.stringify({name:d.name,description:d.description||void 0,tags:(R=d.tags)!=null&&R.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(L=>{var P;return{user_message:L.user_message,expected_response:L.expected_response||void 0,expected_tool_calls:(P=L.expected_tool_calls)!=null&&P.length?L.expected_tool_calls.map(B=>({tool_name:B.tool_name,args:B.match_type!=="name_only"&&Object.keys(B.args||{}).length?B.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(N=d.rubrics)!=null&&N.length?d.rubrics.map(L=>L.rubric):void 0},null,2);navigator.clipboard.writeText(C)},children:[o.jsx(Qo,{size:14})," Copy JSON"]})})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(Lr,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(bi,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(Ly,{size:12}),"View Session"]}),c&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((C,R)=>{var L;const N=Uo(C.metric,C.score,C.threshold);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${C.passed?"passed":"failed"}`,children:N.value}),o.jsx("div",{className:"score-label",children:((L=yn[C.metric])==null?void 0:L.name)||C.metric}),o.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:N.comparison}),C.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:C.error})]},R)})}),r.rubric_results&&r.rubric_results.length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((C,R)=>o.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:C.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${C.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:16,color:C.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:C.passed?"✓":"✗"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:C.rubric}),C.error&&o.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",C.error]})]})]},R))})]}),r.invocation_results.map((C,R)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",R+1,": ",C.user_message.length>50?C.user_message.slice(0,50)+"…":C.user_message]}),C.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:C.metric_results.map((N,L)=>{var B;const P=Uo(N.metric,N.score,N.threshold);return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:N.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:N.passed?"var(--success)":"var(--error)"},children:[((B=yn[N.metric])==null?void 0:B.name)||N.metric,": ",P.value]},L)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,C.actual_response||"(no response)",`

`,C.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,C.actual_tool_calls.map((N,L)=>`  ${L+1}. ${N.name}(${JSON.stringify(N.args)})
`).join("")]})]})]},R)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function d6({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:a,onRun:l,onExport:c}){var v,w,y,m;const[u,d]=k.useState(e.name),[p,f]=k.useState(!1);k.useEffect(()=>{d(e.name)},[e.id]);const h=k.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),g=x=>x==null?"-":`${Math.round(x*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(My,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:x=>d(x.target.value),onBlur:h,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const x=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(x)},title:"Copy link to this eval set",children:o.jsx(Md,{size:14})}),o.jsxs("button",{className:`btn btn-sm ${p?"btn-primary":"btn-secondary"}`,onClick:()=>f(!p),title:"View/Hide JSON",children:[o.jsx(kn,{size:14}),"JSON"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx(Yo,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?o.jsx(Lo,{size:14,className:"spinning"}):o.jsx(cr,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Fe,{size:14})})]}),o.jsx("div",{className:"editor-content",children:p?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),o.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(Jt,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(x=>{var j,E;return{name:x.name,description:x.description||void 0,tags:(j=x.tags)!=null&&j.length?x.tags:void 0,target_agent:x.target_agent!=="root_agent"?x.target_agent:void 0,invocations:x.invocations.map(S=>{var A;return{user_message:S.user_message,expected_response:S.expected_response||void 0,expected_tool_calls:(A=S.expected_tool_calls)!=null&&A.length?S.expected_tool_calls.map(C=>({tool_name:C.tool_name,args:C.match_type!=="name_only"&&Object.keys(C.args||{}).length?C.args:void 0})):void 0}}),session_input:Object.keys(x.session_input||{}).length?{state:x.session_input}:void 0,final_session_state:Object.keys(x.final_session_state||{}).length?x.final_session_state:void 0,rubrics:(E=x.rubrics)!=null&&E.length?x.rubrics.map(S=>S.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((v=e.eval_config.metrics)==null?void 0:v.filter(x=>x.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var j;const x=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(E=>{var S,A;return{name:E.name,description:E.description||void 0,tags:(S=E.tags)!=null&&S.length?E.tags:void 0,target_agent:E.target_agent!=="root_agent"?E.target_agent:void 0,invocations:E.invocations.map(C=>{var R;return{user_message:C.user_message,expected_response:C.expected_response||void 0,expected_tool_calls:(R=C.expected_tool_calls)!=null&&R.length?C.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(E.session_input||{}).length?{state:E.session_input}:void 0,final_session_state:Object.keys(E.final_session_state||{}).length?E.final_session_state:void 0,rubrics:(A=E.rubrics)!=null&&A.length?E.rubrics.map(C=>C.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((j=e.eval_config.metrics)==null?void 0:j.filter(E=>E.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(x)},children:[o.jsx(Qo,{size:14})," Copy JSON"]})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:x=>s({description:x.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(l6,{value:((w=e.eval_config)==null?void 0:w.judge_model)||"",onChange:x=>s({eval_config:{...e.eval_config,judge_model:x}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx($y,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(yn).map(x=>{var C,R,N;const j=yn[x],E=(R=(C=e.eval_config)==null?void 0:C.metrics)==null?void 0:R.find(L=>L.metric===x),S=(E==null?void 0:E.enabled)??!1,A=((N=E==null?void 0:E.criterion)==null?void 0:N.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:S,onChange:L=>{var V;const P=[...((V=e.eval_config)==null?void 0:V.metrics)||[]],B=P.findIndex(D=>D.metric===x);L.target.checked?B===-1?P.push({metric:x,enabled:!0,criterion:{threshold:.7}}):P[B]={...P[B],enabled:!0}:B!==-1&&(P[B]={...P[B],enabled:!1}),s({eval_config:{...e.eval_config,metrics:P}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:S?1:.5,minWidth:140,fontWeight:S?500:400},children:[j.name,j.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:S?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:A,disabled:!S,onChange:L=>{var V;const P=[...((V=e.eval_config)==null?void 0:V.metrics)||[]],B=P.findIndex(D=>D.metric===x);B!==-1&&(P[B]={...P[B],criterion:{...P[B].criterion,threshold:parseFloat(L.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:P}}))},style:{width:60,textAlign:"center",opacity:S?1:.3,padding:"2px 4px",fontSize:11}})]},x)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((y=e.eval_config)==null?void 0:y.default_trajectory_match_type)||"in_order",onChange:x=>s({eval_config:{...e.eval_config,default_trajectory_match_type:x.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((m=e.eval_config)==null?void 0:m.num_runs)||1,onChange:x=>s({eval_config:{...e.eval_config,num_runs:parseInt(x.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Dk,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:g(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([x,j])=>{var S;const E=Uo(x,j);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:E.value}),o.jsxs("div",{className:"score-label",children:["Avg ",((S=yn[x])==null?void 0:S.name)||x]})]},x)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([x,j])=>{var E;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((E=yn[x])==null?void 0:E.name)||x}),o.jsx("span",{children:g(j)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${j>=.8?"passed":"failed"}`,style:{width:`${j*100}%`}})})]},x)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(x=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:x.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:x.metric_results.map((j,E)=>{const S=Uo(j.metric,j.score,j.threshold);return o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:j.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:j.passed?"var(--success)":"var(--error)"},children:S.value},E)})}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:x.passed?o.jsx(Lr,{size:14,style:{color:"var(--success)"}}):x.error?o.jsx(yi,{size:14,style:{color:"var(--warning)"}}):o.jsx(bi,{size:14,style:{color:"var(--error)"}})})]},x.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(Od,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(x=>{const j=i.get(x.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[j?j.passed?o.jsx(Lr,{size:14,style:{color:"var(--success)"}}):o.jsx(bi,{size:14,style:{color:"var(--error)"}}):o.jsx(wa,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:x.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[x.invocations.length," turn(s)"]})]},x.id)})})]})]})})]})}function p6(){const{project:e,setProject:t}=ut(),[n,r]=k.useState(""),[i,s]=k.useState(!0),[a,l]=k.useState(!1),[c,u]=k.useState(null),[d,p]=k.useState(!1);if(!e)return null;k.useEffect(()=>{f()},[e.id]);async function f(){s(!0),u(null);try{const m=await vy(e.id);r(m),l(!1)}catch(m){u(m.message)}finally{s(!1)}}function h(m){m!==void 0&&(r(m),l(!0),u(null))}async function g(){s(!0),u(null);try{const m=await by(e.id,n);t(m),l(!1)}catch(m){u(m.message)}finally{s(!1)}}function v(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function w(){const m=new Blob([n],{type:"text/yaml"}),x=URL.createObjectURL(m),j=document.createElement("a");j.href=x,j.download=`${e.name}.yaml`,j.click(),URL.revokeObjectURL(x)}function y(){const m=document.createElement("input");m.type="file",m.accept=".yaml,.yml",m.onchange=async x=>{var S;const j=(S=x.target.files)==null?void 0:S[0];if(!j)return;const E=await j.text();r(E),l(!0)},m.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),a&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(yi,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(yi,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Ad,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:v,title:"Copy to clipboard",children:[o.jsx(Qo,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,title:"Download YAML",children:[o.jsx(Yo,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:y,title:"Upload YAML",children:[o.jsx(el,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[o.jsx(rn,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:g,disabled:!a||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(Jt,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function f6(){const{project:e}=ut(),[t,n]=k.useState(!1),[r,i]=k.useState(""),[s,a]=k.useState(!1),[l,c]=k.useState(null);if(k.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(p=>{if(!p.ok)throw new Error("Failed to fetch code");return p.json()}).then(p=>{let f=p.code||"";f=f.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),f=f.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),i(f),a(!1)}).catch(p=>{c(p.message),a(!1),i("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const p=new Blob([r],{type:"text/x-python"}),f=URL.createObjectURL(p),h=document.createElement("a");h.href=f,h.download=`${e.name}_agent.py`,h.click(),URL.revokeObjectURL(f)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(kn,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:s?"Loading...":"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(Ad,{size:12}),"Copied!"]}),l&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(yi,{size:12}),"Error"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:s||!!l,children:[o.jsx(Qo,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:s||!!l,children:[o.jsx(Yo,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:s?o.jsx("div",{className:"code-loading",children:o.jsx("div",{children:"Loading generated code..."})}):l?o.jsxs("div",{className:"code-error",children:[o.jsx(yi,{size:24}),o.jsx("div",{children:l})]}):o.jsx(Jt,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const h6=[{id:"app",label:"App",icon:$y},{id:"agents",label:"Agents",icon:Sr},{id:"tools",label:"Tools",icon:an},{id:"callbacks",label:"Callbacks",icon:kn},{id:"run",label:"Run",icon:Iy},{id:"skillsets",label:"SkillSets",icon:zk},{id:"eval",label:"Evaluate",icon:du},{id:"yaml",label:"YAML",icon:Ak},{id:"code",label:"Code",icon:kn}],m6=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function uc(){var D,X;const{projectId:e,tab:t,itemId:n}=Tw(),r=zd(),{project:i,setProject:s,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:h}=ut(),[g,v]=k.useState(!0),[w,y]=k.useState(!1),[m,x]=k.useState(!1),[j,E]=k.useState(null),S=k.useRef(!0),A=k.useRef(null);k.useEffect(()=>{t&&m6.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),k.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&h(n)},[t,n]);function C(T){l(T),T==="agents"&&d?r(`/project/${e}/${T}/${d}`,{replace:!0}):T==="tools"&&f?r(`/project/${e}/${T}/${f}`,{replace:!0}):r(`/project/${e}/${T}`,{replace:!0})}function R(T){T?r(`/project/${e}/${a}/${T}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}k.useEffect(()=>(e&&N(e),()=>{s(null),u(!1)}),[e]);async function N(T){S.current=!0;try{const $=await hy(T);s($),A.current=JSON.stringify($),u(!1)}catch($){console.error("Failed to load project:",$),r("/")}finally{v(!1),setTimeout(()=>{S.current=!1},100)}}async function L(){if(i){y(!0);try{const{eval_sets:T,...$}=i;await su(i.id,$),A.current=JSON.stringify(i),u(!1)}catch(T){console.error("Failed to save project:",T)}finally{y(!1)}}}async function P(){if(i){x(!0),E(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let T=0,$=0;const I=[],_=[];for(const W of i.eval_sets||[]){if(W.eval_cases.length===0)continue;const Q=await qe.post(`/projects/${i.id}/eval-sets/${W.id}/run`,{});Q.result&&(T+=Q.result.passed_cases||0,$+=Q.result.total_cases||0,Q.result.case_results&&I.push(...Q.result.case_results),_.push(Q.result.eval_set_name||W.name||W.id))}if(I.length>0){const W={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:_.length>1?`All Tests (${_.length} sets)`:_[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:$,passed_cases:T,failed_cases:$-T,case_results:I};try{await qe.post(`/projects/${i.id}/eval-history`,W)}catch(Q){console.warn("Failed to save batch eval run to history:",Q)}}E({passed:T,total:$}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>E(null),5e3)}catch(T){console.error("Failed to run tests:",T),E({passed:0,total:-1}),setTimeout(()=>E(null),5e3)}finally{x(!1)}}}const B=k.useRef(null);k.useEffect(()=>{if(i&&!S.current&&B.current){const T=i.app.models||[],$=B.current||[];if(T.some((_,W)=>{const Q=$.find(b=>b.id===_.id);return Q?Q.provider!==_.provider||Q.model_name!==_.model_name||Q.api_base!==_.api_base||Q.temperature!==_.temperature||Q.max_output_tokens!==_.max_output_tokens||Q.top_p!==_.top_p||Q.top_k!==_.top_k:!1})){const _=i.app.default_model_id,W=i.agents.map(b=>{if(b.type==="LlmAgent"&&b.model){const U=b.model._appModelId;if(U){const z=T.find(G=>G.id===U);if(z)return{...b,model:{provider:z.provider,model_name:z.model_name,api_base:z.api_base,temperature:z.temperature,max_output_tokens:z.max_output_tokens,top_p:z.top_p,top_k:z.top_k,fallbacks:[],_appModelId:U}}}else if(_){const z=T.find(G=>G.id===_);if(z&&b.model.provider===z.provider&&b.model.model_name===z.model_name&&b.model.api_base===z.api_base)return{...b,model:{provider:z.provider,model_name:z.model_name,api_base:z.api_base,temperature:z.temperature,max_output_tokens:z.max_output_tokens,top_p:z.top_p,top_k:z.top_k,fallbacks:[],_appModelId:_}}}}return b});W.some((b,U)=>JSON.stringify(b)!==JSON.stringify(i.agents[U]))&&s({...i,agents:W})}}i&&(B.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const V=k.useRef(null);return k.useEffect(()=>(i&&!S.current&&A.current&&JSON.stringify(i)!==A.current&&(u(!0),V.current&&clearTimeout(V.current),V.current=setTimeout(async()=>{try{const{eval_sets:$,...I}=i;await su(i.id,I),A.current=JSON.stringify(i),u(!1)}catch($){console.error("Auto-save failed:",$)}},500)),()=>{V.current&&clearTimeout(V.current)}),[i]),g?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(Nk,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:h6.map(T=>o.jsxs("button",{className:`tab-btn ${a===T.id?"active":""}`,onClick:()=>C(T.id),children:[o.jsx(T.icon,{size:14}),T.label]},T.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${j?j.total===-1?"btn-error":j.passed===j.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:P,disabled:m||!((D=i==null?void 0:i.eval_sets)!=null&&D.some(T=>T.eval_cases.length>0)),title:(X=i==null?void 0:i.eval_sets)!=null&&X.some(T=>T.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[m?o.jsx(Ik,{size:16,className:"spin"}):o.jsx(cr,{size:16}),m?"Testing...":j?j.total===-1?"Error":`${j.passed}/${j.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:L,disabled:w,children:[o.jsx(ja,{size:16}),w?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[a==="app"&&o.jsx(Yk,{}),a==="agents"&&o.jsx(i4,{onSelectAgent:R}),a==="tools"&&o.jsx($4,{onSelectTool:R}),a==="callbacks"&&o.jsx(F4,{onSelectCallback:R}),a==="run"&&o.jsx(n6,{}),a==="skillsets"&&o.jsx(o6,{}),a==="eval"&&o.jsx(a6,{}),a==="yaml"&&o.jsx(p6,{}),a==="code"&&o.jsx(f6,{})]})]}):null}function g6(){const{setMcpServers:e,setBuiltinTools:t}=ut();return k.useEffect(()=>{Td().then(e).catch(console.error),wy().then(t).catch(console.error)},[e,t]),o.jsxs(Jw,{children:[o.jsx(Fr,{path:"/",element:o.jsx(Wk,{})}),o.jsx(Fr,{path:"/project/:projectId",element:o.jsx(uc,{})}),o.jsx(Fr,{path:"/project/:projectId/:tab",element:o.jsx(uc,{})}),o.jsx(Fr,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(uc,{})}),o.jsx(Fr,{path:"*",element:o.jsx(Hw,{to:"/",replace:!0})})]})}dc.createRoot(document.getElementById("root")).render(o.jsx(It.StrictMode,{children:o.jsx(Qw,{children:o.jsx(g6,{})})}));
