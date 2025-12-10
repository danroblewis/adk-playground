function Rg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Do=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function oC(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Up={exports:{}},ml={},Vp={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vi=Symbol.for("react.element"),Dg=Symbol.for("react.portal"),$g=Symbol.for("react.fragment"),Fg=Symbol.for("react.strict_mode"),Bg=Symbol.for("react.profiler"),Ug=Symbol.for("react.provider"),Vg=Symbol.for("react.context"),Wg=Symbol.for("react.forward_ref"),Hg=Symbol.for("react.suspense"),qg=Symbol.for("react.memo"),Kg=Symbol.for("react.lazy"),cc=Symbol.iterator;function Qg(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hp=Object.assign,qp={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=qp,this.updater=n||Wp}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kp(){}Kp.prototype=Ar.prototype;function Wa(e,t,n){this.props=e,this.context=t,this.refs=qp,this.updater=n||Wp}var Ha=Wa.prototype=new Kp;Ha.constructor=Wa;Hp(Ha,Ar.prototype);Ha.isPureReactComponent=!0;var dc=Array.isArray,Qp=Object.prototype.hasOwnProperty,qa={current:null},Gp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Qp.call(t,r)&&!Gp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vi,type:e,key:o,ref:s,props:i,_owner:qa.current}}function Gg(e,t){return{$$typeof:Vi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ka(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vi}function Jg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pc=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jg(""+e.key):t.toString(36)}function jo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Vi:case Dg:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+$l(s,0):r,dc(i)?(n="",e!=null&&(n=e.replace(pc,"$&/")+"/"),jo(i,t,n,"",function(c){return c})):i!=null&&(Ka(i)&&(i=Gg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(pc,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",dc(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+$l(o,a);s+=jo(o,t,n,u,i)}else if(u=Qg(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+$l(o,a++),s+=jo(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Zi(e,t,n){if(e==null)return e;var r=[],i=0;return jo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Yg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},So={transition:null},Xg={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:So,ReactCurrentOwner:qa};function Yp(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Zi,forEach:function(e,t,n){Zi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zi(e,function(){t++}),t},toArray:function(e){return Zi(e,function(t){return t})||[]},only:function(e){if(!Ka(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Ar;se.Fragment=$g;se.Profiler=Bg;se.PureComponent=Wa;se.StrictMode=Fg;se.Suspense=Hg;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xg;se.act=Yp;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=qa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Qp.call(t,u)&&!Gp.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Vi,type:e.type,key:i,ref:o,props:r,_owner:s}};se.createContext=function(e){return e={$$typeof:Vg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ug,_context:e},e.Consumer=e};se.createElement=Jp;se.createFactory=function(e){var t=Jp.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:Wg,render:e}};se.isValidElement=Ka;se.lazy=function(e){return{$$typeof:Kg,_payload:{_status:-1,_result:e},_init:Yg}};se.memo=function(e,t){return{$$typeof:qg,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=So.transition;So.transition={};try{e()}finally{So.transition=t}};se.unstable_act=Yp;se.useCallback=function(e,t){return Ye.current.useCallback(e,t)};se.useContext=function(e){return Ye.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};se.useEffect=function(e,t){return Ye.current.useEffect(e,t)};se.useId=function(){return Ye.current.useId()};se.useImperativeHandle=function(e,t,n){return Ye.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return Ye.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return Ye.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return Ye.current.useMemo(e,t)};se.useReducer=function(e,t,n){return Ye.current.useReducer(e,t,n)};se.useRef=function(e){return Ye.current.useRef(e)};se.useState=function(e){return Ye.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return Ye.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return Ye.current.useTransition()};se.version="18.3.1";Vp.exports=se;var _=Vp.exports;const Lt=hl(_),Zg=Rg({__proto__:null,default:Lt},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=_,tx=Symbol.for("react.element"),nx=Symbol.for("react.fragment"),rx=Object.prototype.hasOwnProperty,ix=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ox={key:!0,ref:!0,__self:!0,__source:!0};function Xp(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)rx.call(t,r)&&!ox.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:tx,type:e,key:o,ref:s,props:i,_owner:ix.current}}ml.Fragment=nx;ml.jsx=Xp;ml.jsxs=Xp;Up.exports=ml;var l=Up.exports,Ls={},Zp={exports:{}},gt={},ef={exports:{}},tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,q){var w=$.length;$.push(q);e:for(;0<w;){var W=w-1>>>1,Q=$[W];if(0<i(Q,q))$[W]=q,$[w]=Q,w=W;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var q=$[0],w=$.pop();if(w!==q){$[0]=w;e:for(var W=0,Q=$.length,S=Q>>>1;W<S;){var re=2*(W+1)-1,ne=$[re],de=re+1,F=$[de];if(0>i(ne,w))de<Q&&0>i(F,ne)?($[W]=F,$[de]=w,W=de):($[W]=ne,$[re]=w,W=re);else if(de<Q&&0>i(F,w))$[W]=F,$[de]=w,W=de;else break e}}return q}function i($,q){var w=$.sortIndex-q.sortIndex;return w!==0?w:$.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var u=[],c=[],d=1,p=null,f=3,h=!1,v=!1,x=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var q=n(c);q!==null;){if(q.callback===null)r(c);else if(q.startTime<=$)r(c),q.sortIndex=q.expirationTime,t(u,q);else break;q=n(c)}}function E($){if(x=!1,y($),!v)if(n(u)!==null)v=!0,D(k);else{var q=n(c);q!==null&&K(E,q.startTime-$)}}function k($,q){v=!1,x&&(x=!1,m(j),j=-1),h=!0;var w=f;try{for(y(q),p=n(u);p!==null&&(!(p.expirationTime>q)||$&&!O());){var W=p.callback;if(typeof W=="function"){p.callback=null,f=p.priorityLevel;var Q=W(p.expirationTime<=q);q=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(u)&&r(u),y(q)}else r(u);p=n(u)}if(p!==null)var S=!0;else{var re=n(c);re!==null&&K(E,re.startTime-q),S=!1}return S}finally{p=null,f=w,h=!1}}var b=!1,I=null,j=-1,P=5,z=-1;function O(){return!(e.unstable_now()-z<P)}function C(){if(I!==null){var $=e.unstable_now();z=$;var q=!0;try{q=I(!0,$)}finally{q?A():(b=!1,I=null)}}else b=!1}var A;if(typeof g=="function")A=function(){g(C)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,L=T.port2;T.port1.onmessage=C,A=function(){L.postMessage(null)}}else A=function(){N(C,0)};function D($){I=$,b||(b=!0,A())}function K($,q){j=N(function(){$(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){v||h||(v=!0,D(k))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var w=f;f=q;try{return $()}finally{f=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var w=f;f=$;try{return q()}finally{f=w}},e.unstable_scheduleCallback=function($,q,w){var W=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?W+w:W):w=W,$){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=w+Q,$={id:d++,callback:q,priorityLevel:$,startTime:w,expirationTime:Q,sortIndex:-1},w>W?($.sortIndex=w,t(c,$),n(u)===null&&$===n(c)&&(x?(m(j),j=-1):x=!0,K(E,w-W))):($.sortIndex=Q,t(u,$),v||h||(v=!0,D(k))),$},e.unstable_shouldYield=O,e.unstable_wrapCallback=function($){var q=f;return function(){var w=f;f=q;try{return $.apply(this,arguments)}finally{f=w}}}})(tf);ef.exports=tf;var lx=ef.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx=_,mt=lx;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nf=new Set,vi={};function Gn(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(vi[e]=t,e=0;e<t.length;e++)nf.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Is=Object.prototype.hasOwnProperty,ax=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fc={},hc={};function ux(e){return Is.call(hc,e)?!0:Is.call(fc,e)?!1:ax.test(e)?hc[e]=!0:(fc[e]=!0,!1)}function cx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dx(e,t,n,r){if(t===null||typeof t>"u"||cx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qa=/[\-:]([a-z])/g;function Ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qa,Ga);Be[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qa,Ga);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qa,Ga);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ja(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dx(t,n,i,r)&&(n=null),r||i===null?ux(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ln=sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),ir=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),Ya=Symbol.for("react.strict_mode"),As=Symbol.for("react.profiler"),rf=Symbol.for("react.provider"),of=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),Os=Symbol.for("react.suspense"),Ms=Symbol.for("react.suspense_list"),Za=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),lf=Symbol.for("react.offscreen"),mc=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Object.assign,Fl;function ei(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Bl=!1;function Ul(e,t){if(!e||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=a);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ei(e):""}function px(e){switch(e.tag){case 5:return ei(e.type);case 16:return ei("Lazy");case 13:return ei("Suspense");case 19:return ei("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function Rs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case or:return"Fragment";case ir:return"Portal";case As:return"Profiler";case Ya:return"StrictMode";case Os:return"Suspense";case Ms:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case of:return(e.displayName||"Context")+".Consumer";case rf:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Za:return t=e.displayName||null,t!==null?t:Rs(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return Rs(e(t))}catch{}}return null}function fx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rs(t);case 8:return t===Ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hx(e){var t=sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function to(e){e._valueTracker||(e._valueTracker=hx(e))}function af(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ds(e,t){var n=t.checked;return Ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uf(e,t){t=t.checked,t!=null&&Ja(e,"checked",t,!1)}function $s(e,t){uf(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fs(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fs(e,t,n){(t!=="number"||$o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ti=Array.isArray;function yr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(ti(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function cf(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function df(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Us(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?df(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var no,pf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=no.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mx=["Webkit","ms","Moz","O"];Object.keys(oi).forEach(function(e){mx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oi[t]=oi[e]})});function ff(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oi.hasOwnProperty(e)&&oi[e]?(""+t).trim():t+"px"}function hf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ff(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gx=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vs(e,t){if(t){if(gx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function Ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hs=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,vr=null,br=null;function bc(e){if(e=qi(e)){if(typeof qs!="function")throw Error(U(280));var t=e.stateNode;t&&(t=bl(t),qs(e.stateNode,e.type,t))}}function mf(e){vr?br?br.push(e):br=[e]:vr=e}function gf(){if(vr){var e=vr,t=br;if(br=vr=null,bc(e),t)for(e=0;e<t.length;e++)bc(t[e])}}function xf(e,t){return e(t)}function yf(){}var Vl=!1;function vf(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return xf(e,t,n)}finally{Vl=!1,(vr!==null||br!==null)&&(yf(),gf())}}function wi(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var Ks=!1;if(tn)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Ks=!1}function xx(e,t,n,r,i,o,s,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var li=!1,Fo=null,Bo=!1,Qs=null,yx={onError:function(e){li=!0,Fo=e}};function vx(e,t,n,r,i,o,s,a,u){li=!1,Fo=null,xx.apply(yx,arguments)}function bx(e,t,n,r,i,o,s,a,u){if(vx.apply(this,arguments),li){if(li){var c=Fo;li=!1,Fo=null}else throw Error(U(198));Bo||(Bo=!0,Qs=c)}}function Jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wc(e){if(Jn(e)!==e)throw Error(U(188))}function wx(e){var t=e.alternate;if(!t){if(t=Jn(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return wc(i),e;if(o===r)return wc(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function wf(e){return e=wx(e),e!==null?kf(e):null}function kf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kf(e);if(t!==null)return t;e=e.sibling}return null}var jf=mt.unstable_scheduleCallback,kc=mt.unstable_cancelCallback,kx=mt.unstable_shouldYield,jx=mt.unstable_requestPaint,ze=mt.unstable_now,Sx=mt.unstable_getCurrentPriorityLevel,tu=mt.unstable_ImmediatePriority,Sf=mt.unstable_UserBlockingPriority,Uo=mt.unstable_NormalPriority,Cx=mt.unstable_LowPriority,Cf=mt.unstable_IdlePriority,gl=null,Wt=null;function _x(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(gl,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:zx,Nx=Math.log,Ex=Math.LN2;function zx(e){return e>>>=0,e===0?32:31-(Nx(e)/Ex|0)|0}var ro=64,io=4194304;function ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ni(a):(o&=s,o!==0&&(r=ni(o)))}else s=n&~i,s!==0?r=ni(s):o!==0&&(r=ni(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-It(t),i=1<<n,r|=e[n],t&=~i;return r}function Tx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Px(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-It(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=Tx(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Gs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _f(){var e=ro;return ro<<=1,!(ro&4194240)&&(ro=64),e}function Wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function Lx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-It(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-It(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var me=0;function Nf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ef,ru,zf,Tf,Pf,Js=!1,oo=[],gn=null,xn=null,yn=null,ki=new Map,ji=new Map,dn=[],Ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jc(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(t.pointerId)}}function Hr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=qi(t),t!==null&&ru(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ax(e,t,n,r,i){switch(t){case"focusin":return gn=Hr(gn,e,t,n,r,i),!0;case"dragenter":return xn=Hr(xn,e,t,n,r,i),!0;case"mouseover":return yn=Hr(yn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ki.set(o,Hr(ki.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ji.set(o,Hr(ji.get(o)||null,e,t,n,r,i)),!0}return!1}function Lf(e){var t=Mn(e.target);if(t!==null){var n=Jn(t);if(n!==null){if(t=n.tag,t===13){if(t=bf(n),t!==null){e.blockedOn=t,Pf(e.priority,function(){zf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ys(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hs=r,n.target.dispatchEvent(r),Hs=null}else return t=qi(n),t!==null&&ru(t),e.blockedOn=n,!1;t.shift()}return!0}function Sc(e,t,n){Co(e)&&n.delete(t)}function Ox(){Js=!1,gn!==null&&Co(gn)&&(gn=null),xn!==null&&Co(xn)&&(xn=null),yn!==null&&Co(yn)&&(yn=null),ki.forEach(Sc),ji.forEach(Sc)}function qr(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Ox)))}function Si(e){function t(i){return qr(i,e)}if(0<oo.length){qr(oo[0],e);for(var n=1;n<oo.length;n++){var r=oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&qr(gn,e),xn!==null&&qr(xn,e),yn!==null&&qr(yn,e),ki.forEach(t),ji.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Lf(n),n.blockedOn===null&&dn.shift()}var wr=ln.ReactCurrentBatchConfig,Wo=!0;function Mx(e,t,n,r){var i=me,o=wr.transition;wr.transition=null;try{me=1,iu(e,t,n,r)}finally{me=i,wr.transition=o}}function Rx(e,t,n,r){var i=me,o=wr.transition;wr.transition=null;try{me=4,iu(e,t,n,r)}finally{me=i,wr.transition=o}}function iu(e,t,n,r){if(Wo){var i=Ys(e,t,n,r);if(i===null)es(e,t,r,Ho,n),jc(e,r);else if(Ax(i,e,t,n,r))r.stopPropagation();else if(jc(e,r),t&4&&-1<Ix.indexOf(e)){for(;i!==null;){var o=qi(i);if(o!==null&&Ef(o),o=Ys(e,t,n,r),o===null&&es(e,t,r,Ho,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else es(e,t,r,null,n)}}var Ho=null;function Ys(e,t,n,r){if(Ho=null,e=eu(r),e=Mn(e),e!==null)if(t=Jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ho=e,null}function If(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sx()){case tu:return 1;case Sf:return 4;case Uo:case Cx:return 16;case Cf:return 536870912;default:return 16}default:return 16}}var fn=null,ou=null,_o=null;function Af(){if(_o)return _o;var e,t=ou,n=t.length,r,i="value"in fn?fn.value:fn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return _o=i.slice(e,1<r?1-r:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lo(){return!0}function Cc(){return!1}function xt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?lo:Cc,this.isPropagationStopped=Cc,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lu=xt(Or),Hi=Ne({},Or,{view:0,detail:0}),Dx=xt(Hi),Hl,ql,Kr,xl=Ne({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(Hl=e.screenX-Kr.screenX,ql=e.screenY-Kr.screenY):ql=Hl=0,Kr=e),Hl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),_c=xt(xl),$x=Ne({},xl,{dataTransfer:0}),Fx=xt($x),Bx=Ne({},Hi,{relatedTarget:0}),Kl=xt(Bx),Ux=Ne({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=xt(Ux),Wx=Ne({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hx=xt(Wx),qx=Ne({},Or,{data:0}),Nc=xt(qx),Kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gx[e])?!!t[e]:!1}function su(){return Jx}var Yx=Ne({},Hi,{key:function(e){if(e.key){var t=Kx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xx=xt(Yx),Zx=Ne({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=xt(Zx),ey=Ne({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),ty=xt(ey),ny=Ne({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),ry=xt(ny),iy=Ne({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oy=xt(iy),ly=[9,13,27,32],au=tn&&"CompositionEvent"in window,si=null;tn&&"documentMode"in document&&(si=document.documentMode);var sy=tn&&"TextEvent"in window&&!si,Of=tn&&(!au||si&&8<si&&11>=si),zc=" ",Tc=!1;function Mf(e,t){switch(e){case"keyup":return ly.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var lr=!1;function ay(e,t){switch(e){case"compositionend":return Rf(t);case"keypress":return t.which!==32?null:(Tc=!0,zc);case"textInput":return e=t.data,e===zc&&Tc?null:e;default:return null}}function uy(e,t){if(lr)return e==="compositionend"||!au&&Mf(e,t)?(e=Af(),_o=ou=fn=null,lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Of&&t.locale!=="ko"?null:t.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cy[e.type]:t==="textarea"}function Df(e,t,n,r){mf(r),t=qo(t,"onChange"),0<t.length&&(n=new lu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ai=null,Ci=null;function dy(e){Gf(e,0)}function yl(e){var t=ur(e);if(af(t))return e}function py(e,t){if(e==="change")return t}var $f=!1;if(tn){var Ql;if(tn){var Gl="oninput"in document;if(!Gl){var Lc=document.createElement("div");Lc.setAttribute("oninput","return;"),Gl=typeof Lc.oninput=="function"}Ql=Gl}else Ql=!1;$f=Ql&&(!document.documentMode||9<document.documentMode)}function Ic(){ai&&(ai.detachEvent("onpropertychange",Ff),Ci=ai=null)}function Ff(e){if(e.propertyName==="value"&&yl(Ci)){var t=[];Df(t,Ci,e,eu(e)),vf(dy,t)}}function fy(e,t,n){e==="focusin"?(Ic(),ai=t,Ci=n,ai.attachEvent("onpropertychange",Ff)):e==="focusout"&&Ic()}function hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(Ci)}function my(e,t){if(e==="click")return yl(t)}function gy(e,t){if(e==="input"||e==="change")return yl(t)}function xy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:xy;function _i(e,t){if(Ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Is.call(t,i)||!Ot(e[i],t[i]))return!1}return!0}function Ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var n=Ac(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ac(n)}}function Bf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uf(){for(var e=window,t=$o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$o(e.document)}return t}function uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yy(e){var t=Uf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bf(n.ownerDocument.documentElement,n)){if(r!==null&&uu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Oc(n,o);var s=Oc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vy=tn&&"documentMode"in document&&11>=document.documentMode,sr=null,Xs=null,ui=null,Zs=!1;function Mc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zs||sr==null||sr!==$o(r)||(r=sr,"selectionStart"in r&&uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&_i(ui,r)||(ui=r,r=qo(Xs,"onSelect"),0<r.length&&(t=new lu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=sr)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Jl={},Vf={};tn&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function vl(e){if(Jl[e])return Jl[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vf)return Jl[e]=t[n];return e}var Wf=vl("animationend"),Hf=vl("animationiteration"),qf=vl("animationstart"),Kf=vl("transitionend"),Qf=new Map,Rc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){Qf.set(e,t),Gn(t,[e])}for(var Yl=0;Yl<Rc.length;Yl++){var Xl=Rc[Yl],by=Xl.toLowerCase(),wy=Xl[0].toUpperCase()+Xl.slice(1);Nn(by,"on"+wy)}Nn(Wf,"onAnimationEnd");Nn(Hf,"onAnimationIteration");Nn(qf,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(Kf,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));function Dc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bx(r,t,void 0,e),e.currentTarget=null}function Gf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Dc(i,a,c),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Dc(i,a,c),o=u}}}if(Bo)throw e=Qs,Bo=!1,Qs=null,e}function ke(e,t){var n=t[ia];n===void 0&&(n=t[ia]=new Set);var r=e+"__bubble";n.has(r)||(Jf(t,e,2,!1),n.add(r))}function Zl(e,t,n){var r=0;t&&(r|=4),Jf(n,e,r,t)}var ao="_reactListening"+Math.random().toString(36).slice(2);function Ni(e){if(!e[ao]){e[ao]=!0,nf.forEach(function(n){n!=="selectionchange"&&(ky.has(n)||Zl(n,!1,e),Zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ao]||(t[ao]=!0,Zl("selectionchange",!1,t))}}function Jf(e,t,n,r){switch(If(t)){case 1:var i=Mx;break;case 4:i=Rx;break;default:i=iu}n=i.bind(null,t,n,e),i=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function es(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Mn(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}vf(function(){var c=o,d=eu(n),p=[];e:{var f=Qf.get(e);if(f!==void 0){var h=lu,v=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":h=Xx;break;case"focusin":v="focus",h=Kl;break;case"focusout":v="blur",h=Kl;break;case"beforeblur":case"afterblur":h=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=_c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=ty;break;case Wf:case Hf:case qf:h=Vx;break;case Kf:h=ry;break;case"scroll":h=Dx;break;case"wheel":h=oy;break;case"copy":case"cut":case"paste":h=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ec}var x=(t&4)!==0,N=!x&&e==="scroll",m=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,y;g!==null;){y=g;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,m!==null&&(E=wi(g,m),E!=null&&x.push(Ei(g,E,y)))),N)break;g=g.return}0<x.length&&(f=new h(f,v,null,n,d),p.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Hs&&(v=n.relatedTarget||n.fromElement)&&(Mn(v)||v[nn]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(v=n.relatedTarget||n.toElement,h=c,v=v?Mn(v):null,v!==null&&(N=Jn(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(h=null,v=c),h!==v)){if(x=_c,E="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ec,E="onPointerLeave",m="onPointerEnter",g="pointer"),N=h==null?f:ur(h),y=v==null?f:ur(v),f=new x(E,g+"leave",h,n,d),f.target=N,f.relatedTarget=y,E=null,Mn(d)===c&&(x=new x(m,g+"enter",v,n,d),x.target=y,x.relatedTarget=N,E=x),N=E,h&&v)t:{for(x=h,m=v,g=0,y=x;y;y=er(y))g++;for(y=0,E=m;E;E=er(E))y++;for(;0<g-y;)x=er(x),g--;for(;0<y-g;)m=er(m),y--;for(;g--;){if(x===m||m!==null&&x===m.alternate)break t;x=er(x),m=er(m)}x=null}else x=null;h!==null&&$c(p,f,h,x,!1),v!==null&&N!==null&&$c(p,N,v,x,!0)}}e:{if(f=c?ur(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var k=py;else if(Pc(f))if($f)k=gy;else{k=hy;var b=fy}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=my);if(k&&(k=k(e,c))){Df(p,k,n,d);break e}b&&b(e,f,c),e==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Fs(f,"number",f.value)}switch(b=c?ur(c):window,e){case"focusin":(Pc(b)||b.contentEditable==="true")&&(sr=b,Xs=c,ui=null);break;case"focusout":ui=Xs=sr=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,Mc(p,n,d);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":Mc(p,n,d)}var I;if(au)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else lr?Mf(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Of&&n.locale!=="ko"&&(lr||j!=="onCompositionStart"?j==="onCompositionEnd"&&lr&&(I=Af()):(fn=d,ou="value"in fn?fn.value:fn.textContent,lr=!0)),b=qo(c,j),0<b.length&&(j=new Nc(j,e,null,n,d),p.push({event:j,listeners:b}),I?j.data=I:(I=Rf(n),I!==null&&(j.data=I)))),(I=sy?ay(e,n):uy(e,n))&&(c=qo(c,"onBeforeInput"),0<c.length&&(d=new Nc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=I))}Gf(p,t)})}function Ei(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=wi(e,n),o!=null&&r.unshift(Ei(e,o,i)),o=wi(e,t),o!=null&&r.push(Ei(e,o,i))),e=e.return}return r}function er(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $c(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=wi(n,o),u!=null&&s.unshift(Ei(n,u,a))):i||(u=wi(n,o),u!=null&&s.push(Ei(n,u,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var jy=/\r\n?/g,Sy=/\u0000|\uFFFD/g;function Fc(e){return(typeof e=="string"?e:""+e).replace(jy,`
`).replace(Sy,"")}function uo(e,t,n){if(t=Fc(t),Fc(e)!==t&&n)throw Error(U(425))}function Ko(){}var ea=null,ta=null;function na(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ra=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,Bc=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof Bc<"u"?function(e){return Bc.resolve(null).then(e).catch(Ny)}:ra;function Ny(e){setTimeout(function(){throw e})}function ts(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Si(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Si(t)}function vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Mr,zi="__reactProps$"+Mr,nn="__reactContainer$"+Mr,ia="__reactEvents$"+Mr,Ey="__reactListeners$"+Mr,zy="__reactHandles$"+Mr;function Mn(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Uc(e);e!==null;){if(n=e[Ut])return n;e=Uc(e)}return t}e=n,n=e.parentNode}return null}function qi(e){return e=e[Ut]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function bl(e){return e[zi]||null}var oa=[],cr=-1;function En(e){return{current:e}}function je(e){0>cr||(e.current=oa[cr],oa[cr]=null,cr--)}function be(e,t){cr++,oa[cr]=e.current,e.current=t}var _n={},He=En(_n),nt=En(!1),Wn=_n;function Nr(e,t){var n=e.type.contextTypes;if(!n)return _n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function Qo(){je(nt),je(He)}function Vc(e,t,n){if(He.current!==_n)throw Error(U(168));be(He,t),be(nt,n)}function Yf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,fx(e)||"Unknown",i));return Ne({},n,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,Wn=He.current,be(He,e),be(nt,nt.current),!0}function Wc(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=Yf(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,je(nt),je(He),be(He,e)):je(nt),be(nt,n)}var Yt=null,wl=!1,ns=!1;function Xf(e){Yt===null?Yt=[e]:Yt.push(e)}function Ty(e){wl=!0,Xf(e)}function zn(){if(!ns&&Yt!==null){ns=!0;var e=0,t=me;try{var n=Yt;for(me=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yt=null,wl=!1}catch(i){throw Yt!==null&&(Yt=Yt.slice(e+1)),jf(tu,zn),i}finally{me=t,ns=!1}}return null}var dr=[],pr=0,Jo=null,Yo=0,bt=[],wt=0,Hn=null,Xt=1,Zt="";function In(e,t){dr[pr++]=Yo,dr[pr++]=Jo,Jo=e,Yo=t}function Zf(e,t,n){bt[wt++]=Xt,bt[wt++]=Zt,bt[wt++]=Hn,Hn=e;var r=Xt;e=Zt;var i=32-It(r)-1;r&=~(1<<i),n+=1;var o=32-It(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Xt=1<<32-It(t)+i|n<<i|r,Zt=o+e}else Xt=1<<o|n<<i|r,Zt=e}function cu(e){e.return!==null&&(In(e,1),Zf(e,1,0))}function du(e){for(;e===Jo;)Jo=dr[--pr],dr[pr]=null,Yo=dr[--pr],dr[pr]=null;for(;e===Hn;)Hn=bt[--wt],bt[wt]=null,Zt=bt[--wt],bt[wt]=null,Xt=bt[--wt],bt[wt]=null}var ht=null,dt=null,Se=!1,Pt=null;function eh(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Hc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,dt=vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Hn!==null?{id:Xt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,dt=null,!0):!1;default:return!1}}function la(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sa(e){if(Se){var t=dt;if(t){var n=t;if(!Hc(e,t)){if(la(e))throw Error(U(418));t=vn(n.nextSibling);var r=ht;t&&Hc(e,t)?eh(r,n):(e.flags=e.flags&-4097|2,Se=!1,ht=e)}}else{if(la(e))throw Error(U(418));e.flags=e.flags&-4097|2,Se=!1,ht=e}}}function qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function co(e){if(e!==ht)return!1;if(!Se)return qc(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!na(e.type,e.memoizedProps)),t&&(t=dt)){if(la(e))throw th(),Error(U(418));for(;t;)eh(e,t),t=vn(t.nextSibling)}if(qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ht?vn(e.stateNode.nextSibling):null;return!0}function th(){for(var e=dt;e;)e=vn(e.nextSibling)}function Er(){dt=ht=null,Se=!1}function pu(e){Pt===null?Pt=[e]:Pt.push(e)}var Py=ln.ReactCurrentBatchConfig;function Qr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function po(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kc(e){var t=e._init;return t(e._payload)}function nh(e){function t(m,g){if(e){var y=m.deletions;y===null?(m.deletions=[g],m.flags|=16):y.push(g)}}function n(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=jn(m,g),m.index=0,m.sibling=null,m}function o(m,g,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<g?(m.flags|=2,g):y):(m.flags|=2,g)):(m.flags|=1048576,g)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,g,y,E){return g===null||g.tag!==6?(g=us(y,m.mode,E),g.return=m,g):(g=i(g,y),g.return=m,g)}function u(m,g,y,E){var k=y.type;return k===or?d(m,g,y.props.children,E,y.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===un&&Kc(k)===g.type)?(E=i(g,y.props),E.ref=Qr(m,g,y),E.return=m,E):(E=Ao(y.type,y.key,y.props,null,m.mode,E),E.ref=Qr(m,g,y),E.return=m,E)}function c(m,g,y,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=cs(y,m.mode,E),g.return=m,g):(g=i(g,y.children||[]),g.return=m,g)}function d(m,g,y,E,k){return g===null||g.tag!==7?(g=Bn(y,m.mode,E,k),g.return=m,g):(g=i(g,y),g.return=m,g)}function p(m,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=us(""+g,m.mode,y),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case eo:return y=Ao(g.type,g.key,g.props,null,m.mode,y),y.ref=Qr(m,null,g),y.return=m,y;case ir:return g=cs(g,m.mode,y),g.return=m,g;case un:var E=g._init;return p(m,E(g._payload),y)}if(ti(g)||Vr(g))return g=Bn(g,m.mode,y,null),g.return=m,g;po(m,g)}return null}function f(m,g,y,E){var k=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:a(m,g,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case eo:return y.key===k?u(m,g,y,E):null;case ir:return y.key===k?c(m,g,y,E):null;case un:return k=y._init,f(m,g,k(y._payload),E)}if(ti(y)||Vr(y))return k!==null?null:d(m,g,y,E,null);po(m,y)}return null}function h(m,g,y,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(y)||null,a(g,m,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case eo:return m=m.get(E.key===null?y:E.key)||null,u(g,m,E,k);case ir:return m=m.get(E.key===null?y:E.key)||null,c(g,m,E,k);case un:var b=E._init;return h(m,g,y,b(E._payload),k)}if(ti(E)||Vr(E))return m=m.get(y)||null,d(g,m,E,k,null);po(g,E)}return null}function v(m,g,y,E){for(var k=null,b=null,I=g,j=g=0,P=null;I!==null&&j<y.length;j++){I.index>j?(P=I,I=null):P=I.sibling;var z=f(m,I,y[j],E);if(z===null){I===null&&(I=P);break}e&&I&&z.alternate===null&&t(m,I),g=o(z,g,j),b===null?k=z:b.sibling=z,b=z,I=P}if(j===y.length)return n(m,I),Se&&In(m,j),k;if(I===null){for(;j<y.length;j++)I=p(m,y[j],E),I!==null&&(g=o(I,g,j),b===null?k=I:b.sibling=I,b=I);return Se&&In(m,j),k}for(I=r(m,I);j<y.length;j++)P=h(I,m,j,y[j],E),P!==null&&(e&&P.alternate!==null&&I.delete(P.key===null?j:P.key),g=o(P,g,j),b===null?k=P:b.sibling=P,b=P);return e&&I.forEach(function(O){return t(m,O)}),Se&&In(m,j),k}function x(m,g,y,E){var k=Vr(y);if(typeof k!="function")throw Error(U(150));if(y=k.call(y),y==null)throw Error(U(151));for(var b=k=null,I=g,j=g=0,P=null,z=y.next();I!==null&&!z.done;j++,z=y.next()){I.index>j?(P=I,I=null):P=I.sibling;var O=f(m,I,z.value,E);if(O===null){I===null&&(I=P);break}e&&I&&O.alternate===null&&t(m,I),g=o(O,g,j),b===null?k=O:b.sibling=O,b=O,I=P}if(z.done)return n(m,I),Se&&In(m,j),k;if(I===null){for(;!z.done;j++,z=y.next())z=p(m,z.value,E),z!==null&&(g=o(z,g,j),b===null?k=z:b.sibling=z,b=z);return Se&&In(m,j),k}for(I=r(m,I);!z.done;j++,z=y.next())z=h(I,m,j,z.value,E),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?j:z.key),g=o(z,g,j),b===null?k=z:b.sibling=z,b=z);return e&&I.forEach(function(C){return t(m,C)}),Se&&In(m,j),k}function N(m,g,y,E){if(typeof y=="object"&&y!==null&&y.type===or&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case eo:e:{for(var k=y.key,b=g;b!==null;){if(b.key===k){if(k=y.type,k===or){if(b.tag===7){n(m,b.sibling),g=i(b,y.props.children),g.return=m,m=g;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===un&&Kc(k)===b.type){n(m,b.sibling),g=i(b,y.props),g.ref=Qr(m,b,y),g.return=m,m=g;break e}n(m,b);break}else t(m,b);b=b.sibling}y.type===or?(g=Bn(y.props.children,m.mode,E,y.key),g.return=m,m=g):(E=Ao(y.type,y.key,y.props,null,m.mode,E),E.ref=Qr(m,g,y),E.return=m,m=E)}return s(m);case ir:e:{for(b=y.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(m,g.sibling),g=i(g,y.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else t(m,g);g=g.sibling}g=cs(y,m.mode,E),g.return=m,m=g}return s(m);case un:return b=y._init,N(m,g,b(y._payload),E)}if(ti(y))return v(m,g,y,E);if(Vr(y))return x(m,g,y,E);po(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,y),g.return=m,m=g):(n(m,g),g=us(y,m.mode,E),g.return=m,m=g),s(m)):n(m,g)}return N}var zr=nh(!0),rh=nh(!1),Xo=En(null),Zo=null,fr=null,fu=null;function hu(){fu=fr=Zo=null}function mu(e){var t=Xo.current;je(Xo),e._currentValue=t}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function kr(e,t){Zo=e,fu=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(tt=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(fu!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(Zo===null)throw Error(U(308));fr=e,Zo.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var Rn=null;function gu(e){Rn===null?Rn=[e]:Rn.push(e)}function ih(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gu(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function en(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,gu(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}function Qc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function el(e,t,n,r){var i=e.updateQueue;cn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;s=0,d=c=u=null,a=o;do{var f=a.lane,h=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,h=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){p=v.call(h,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(h,p,f):v,f==null)break e;p=Ne({},p,f);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=h,u=p):d=d.next=h,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Kn|=s,e.lanes=s,e.memoizedState=p}}function Gc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Ki={},Ht=En(Ki),Ti=En(Ki),Pi=En(Ki);function Dn(e){if(e===Ki)throw Error(U(174));return e}function yu(e,t){switch(be(Pi,t),be(Ti,e),be(Ht,Ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Us(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Us(t,e)}je(Ht),be(Ht,t)}function Tr(){je(Ht),je(Ti),je(Pi)}function lh(e){Dn(Pi.current);var t=Dn(Ht.current),n=Us(t,e.type);t!==n&&(be(Ti,e),be(Ht,n))}function vu(e){Ti.current===e&&(je(Ht),je(Ti))}var Ce=En(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rs=[];function bu(){for(var e=0;e<rs.length;e++)rs[e]._workInProgressVersionPrimary=null;rs.length=0}var zo=ln.ReactCurrentDispatcher,is=ln.ReactCurrentBatchConfig,qn=0,_e=null,Oe=null,Re=null,nl=!1,ci=!1,Li=0,Ly=0;function Ue(){throw Error(U(321))}function wu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ot(e[n],t[n]))return!1;return!0}function ku(e,t,n,r,i,o){if(qn=o,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?My:Ry,e=n(r,i),ci){o=0;do{if(ci=!1,Li=0,25<=o)throw Error(U(301));o+=1,Re=Oe=null,t.updateQueue=null,zo.current=Dy,e=n(r,i)}while(ci)}if(zo.current=rl,t=Oe!==null&&Oe.next!==null,qn=0,Re=Oe=_e=null,nl=!1,t)throw Error(U(300));return e}function ju(){var e=Li!==0;return Li=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?_e.memoizedState=Re=e:Re=Re.next=e,Re}function _t(){if(Oe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var t=Re===null?_e.memoizedState:Re.next;if(t!==null)Re=t,Oe=e;else{if(e===null)throw Error(U(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Re===null?_e.memoizedState=Re=e:Re=Re.next=e}return Re}function Ii(e,t){return typeof t=="function"?t(e):t}function os(e){var t=_t(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,c=o;do{var d=c.lane;if((qn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=p,s=r):u=u.next=p,_e.lanes|=d,Kn|=d}c=c.next}while(c!==null&&c!==o);u===null?s=r:u.next=a,Ot(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,_e.lanes|=o,Kn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ls(e){var t=_t(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ot(o,t.memoizedState)||(tt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function sh(){}function ah(e,t){var n=_e,r=_t(),i=t(),o=!Ot(r.memoizedState,i);if(o&&(r.memoizedState=i,tt=!0),r=r.queue,Su(dh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Ai(9,ch.bind(null,n,r,i,t),void 0,null),De===null)throw Error(U(349));qn&30||uh(n,t,i)}return i}function uh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ch(e,t,n,r){t.value=n,t.getSnapshot=r,ph(t)&&fh(e)}function dh(e,t,n){return n(function(){ph(t)&&fh(e)})}function ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ot(e,n)}catch{return!0}}function fh(e){var t=rn(e,1);t!==null&&At(t,e,1,-1)}function Jc(e){var t=Dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},t.queue=e,e=e.dispatch=Oy.bind(null,_e,e),[t.memoizedState,e]}function Ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hh(){return _t().memoizedState}function To(e,t,n,r){var i=Dt();_e.flags|=e,i.memoizedState=Ai(1|t,n,void 0,r===void 0?null:r)}function kl(e,t,n,r){var i=_t();r=r===void 0?null:r;var o=void 0;if(Oe!==null){var s=Oe.memoizedState;if(o=s.destroy,r!==null&&wu(r,s.deps)){i.memoizedState=Ai(t,n,o,r);return}}_e.flags|=e,i.memoizedState=Ai(1|t,n,o,r)}function Yc(e,t){return To(8390656,8,e,t)}function Su(e,t){return kl(2048,8,e,t)}function mh(e,t){return kl(4,2,e,t)}function gh(e,t){return kl(4,4,e,t)}function xh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yh(e,t,n){return n=n!=null?n.concat([e]):null,kl(4,4,xh.bind(null,t,e),n)}function Cu(){}function vh(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function bh(e,t){var n=_t();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wh(e,t,n){return qn&21?(Ot(n,t)||(n=_f(),_e.lanes|=n,Kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n)}function Iy(e,t){var n=me;me=n!==0&&4>n?n:4,e(!0);var r=is.transition;is.transition={};try{e(!1),t()}finally{me=n,is.transition=r}}function kh(){return _t().memoizedState}function Ay(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jh(e))Sh(t,n);else if(n=ih(e,t,n,r),n!==null){var i=Je();At(n,e,r,i),Ch(n,t,r)}}function Oy(e,t,n){var r=kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jh(e))Sh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ot(a,s)){var u=t.interleaved;u===null?(i.next=i,gu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ih(e,t,i,r),n!==null&&(i=Je(),At(n,e,r,i),Ch(n,t,r))}}function jh(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function Sh(e,t){ci=nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ch(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}var rl={readContext:Ct,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},My={readContext:Ct,useCallback:function(e,t){return Dt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Yc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,xh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=Dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ay.bind(null,_e,e),[r.memoizedState,e]},useRef:function(e){var t=Dt();return e={current:e},t.memoizedState=e},useState:Jc,useDebugValue:Cu,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Jc(!1),t=e[0];return e=Iy.bind(null,e[1]),Dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_e,i=Dt();if(Se){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),De===null)throw Error(U(349));qn&30||uh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Yc(dh.bind(null,r,o,e),[e]),r.flags|=2048,Ai(9,ch.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Dt(),t=De.identifierPrefix;if(Se){var n=Zt,r=Xt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ly++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ry={readContext:Ct,useCallback:vh,useContext:Ct,useEffect:Su,useImperativeHandle:yh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:bh,useReducer:os,useRef:hh,useState:function(){return os(Ii)},useDebugValue:Cu,useDeferredValue:function(e){var t=_t();return wh(t,Oe.memoizedState,e)},useTransition:function(){var e=os(Ii)[0],t=_t().memoizedState;return[e,t]},useMutableSource:sh,useSyncExternalStore:ah,useId:kh,unstable_isNewReconciler:!1},Dy={readContext:Ct,useCallback:vh,useContext:Ct,useEffect:Su,useImperativeHandle:yh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:bh,useReducer:ls,useRef:hh,useState:function(){return ls(Ii)},useDebugValue:Cu,useDeferredValue:function(e){var t=_t();return Oe===null?t.memoizedState=e:wh(t,Oe.memoizedState,e)},useTransition:function(){var e=ls(Ii)[0],t=_t().memoizedState;return[e,t]},useMutableSource:sh,useSyncExternalStore:ah,useId:kh,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=Ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ua(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),i=kn(e),o=en(r,i);o.payload=t,n!=null&&(o.callback=n),t=bn(e,o,i),t!==null&&(At(t,e,i,r),Eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),i=kn(e),o=en(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=bn(e,o,i),t!==null&&(At(t,e,i,r),Eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=kn(e),i=en(n,r);i.tag=2,t!=null&&(i.callback=t),t=bn(e,i,r),t!==null&&(At(t,e,r,n),Eo(t,e,r))}};function Xc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!_i(n,r)||!_i(i,o):!0}function _h(e,t,n){var r=!1,i=_n,o=t.contextType;return typeof o=="object"&&o!==null?o=Ct(o):(i=rt(t)?Wn:He.current,r=t.contextTypes,o=(r=r!=null)?Nr(e,i):_n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function ca(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ct(o):(o=rt(t)?Wn:He.current,i.context=Nr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ua(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&jl.enqueueReplaceState(i,i.state,null),el(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pr(e,t){try{var n="",r=t;do n+=px(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ss(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function da(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $y=typeof WeakMap=="function"?WeakMap:Map;function Nh(e,t,n){n=en(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ol||(ol=!0,wa=r),da(e,t)},n}function Eh(e,t,n){n=en(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){da(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){da(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ed(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $y;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Zy.bind(null,e,t,n),t.then(e,e))}function td(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=en(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e)}var Fy=ln.ReactCurrentOwner,tt=!1;function Qe(e,t,n,r){t.child=e===null?rh(t,null,n,r):zr(t,e.child,n,r)}function rd(e,t,n,r,i){n=n.render;var o=t.ref;return kr(t,i),r=ku(e,t,n,r,o,i),n=ju(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(Se&&n&&cu(t),t.flags|=1,Qe(e,t,r,i),t.child)}function id(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Iu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,zh(e,t,o,r,i)):(e=Ao(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:_i,n(s,r)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=jn(o,r),e.ref=t.ref,e.return=t,t.child=e}function zh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(_i(o,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(tt=!0);else return t.lanes=e.lanes,on(e,t,i)}return pa(e,t,n,r,i)}function Th(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(mr,ut),ut|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(mr,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,be(mr,ut),ut|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,be(mr,ut),ut|=r;return Qe(e,t,i,n),t.child}function Ph(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pa(e,t,n,r,i){var o=rt(n)?Wn:He.current;return o=Nr(t,o),kr(t,i),n=ku(e,t,n,r,o,i),r=ju(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(Se&&r&&cu(t),t.flags|=1,Qe(e,t,n,i),t.child)}function od(e,t,n,r,i){if(rt(n)){var o=!0;Go(t)}else o=!1;if(kr(t,i),t.stateNode===null)Po(e,t),_h(t,n,r),ca(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var u=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ct(c):(c=rt(n)?Wn:He.current,c=Nr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Zc(t,s,r,c),cn=!1;var f=t.memoizedState;s.state=f,el(t,r,s,i),u=t.memoizedState,a!==r||f!==u||nt.current||cn?(typeof d=="function"&&(ua(t,n,d,r),u=t.memoizedState),(a=cn||Xc(t,n,a,r,f,u,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,oh(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:zt(t.type,a),s.props=c,p=t.pendingProps,f=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ct(u):(u=rt(n)?Wn:He.current,u=Nr(t,u));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||f!==u)&&Zc(t,s,r,u),cn=!1,f=t.memoizedState,s.state=f,el(t,r,s,i);var v=t.memoizedState;a!==p||f!==v||nt.current||cn?(typeof h=="function"&&(ua(t,n,h,r),v=t.memoizedState),(c=cn||Xc(t,n,c,r,f,v,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=u,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return fa(e,t,n,r,o,i)}function fa(e,t,n,r,i,o){Ph(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Wc(t,n,!1),on(e,t,o);r=t.stateNode,Fy.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=zr(t,e.child,null,o),t.child=zr(t,null,a,o)):Qe(e,t,a,o),t.memoizedState=r.state,i&&Wc(t,n,!0),t.child}function Lh(e){var t=e.stateNode;t.pendingContext?Vc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vc(e,t.context,!1),yu(e,t.containerInfo)}function ld(e,t,n,r,i){return Er(),pu(i),t.flags|=256,Qe(e,t,n,r),t.child}var ha={dehydrated:null,treeContext:null,retryLane:0};function ma(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ih(e,t,n){var r=t.pendingProps,i=Ce.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),be(Ce,i&1),e===null)return sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_l(s,r,0,null),e=Bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ma(n),t.memoizedState=ha,e):_u(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return By(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=jn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=jn(a,o):(o=Bn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ma(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ha,r}return o=e.child,e=o.sibling,r=jn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _u(e,t){return t=_l({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&pu(r),zr(t,e.child,null,n),e=_u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function By(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ss(Error(U(422))),fo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=_l({mode:"visible",children:r.children},i,0,null),o=Bn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&zr(t,e.child,null,s),t.child.memoizedState=ma(s),t.memoizedState=ha,o);if(!(t.mode&1))return fo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(U(419)),r=ss(o,r,void 0),fo(e,t,s,r)}if(a=(s&e.childLanes)!==0,tt||a){if(r=De,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rn(e,i),At(r,e,i,-1))}return Lu(),r=ss(Error(U(421))),fo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ev.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,dt=vn(i.nextSibling),ht=t,Se=!0,Pt=null,e!==null&&(bt[wt++]=Xt,bt[wt++]=Zt,bt[wt++]=Hn,Xt=e.id,Zt=e.overflow,Hn=t),t=_u(t,r.children),t.flags|=4096,t)}function sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function as(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ah(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Qe(e,t,r.children,n),r=Ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,n,t);else if(e.tag===19)sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(be(Ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&tl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),as(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&tl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}as(t,!0,n,null,o);break;case"together":as(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uy(e,t,n){switch(t.tag){case 3:Lh(t),Er();break;case 5:lh(t);break;case 1:rt(t.type)&&Go(t);break;case 4:yu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;be(Xo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(be(Ce,Ce.current&1),t.flags|=128,null):n&t.child.childLanes?Ih(e,t,n):(be(Ce,Ce.current&1),e=on(e,t,n),e!==null?e.sibling:null);be(Ce,Ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ah(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Ce,Ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Th(e,t,n)}return on(e,t,n)}var Oh,ga,Mh,Rh;Oh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ga=function(){};Mh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Dn(Ht.current);var o=null;switch(n){case"input":i=Ds(e,i),r=Ds(e,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=Bs(e,i),r=Bs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ko)}Vs(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(vi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(vi.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ke("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Rh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vy(e,t,n){var r=t.pendingProps;switch(du(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return rt(t.type)&&Qo(),Ve(t),null;case 3:return r=t.stateNode,Tr(),je(nt),je(He),bu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Sa(Pt),Pt=null))),ga(e,t),Ve(t),null;case 5:vu(t);var i=Dn(Pi.current);if(n=t.type,e!==null&&t.stateNode!=null)Mh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return Ve(t),null}if(e=Dn(Ht.current),co(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ut]=t,r[zi]=o,e=(t.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<ri.length;i++)ke(ri[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":gc(r,o),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ke("invalid",r);break;case"textarea":yc(r,o),ke("invalid",r)}Vs(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&uo(r.textContent,a,e),i=["children",""+a]):vi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ke("scroll",r)}switch(n){case"input":to(r),xc(r,o,!0);break;case"textarea":to(r),vc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ko)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=df(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ut]=t,e[zi]=r,Oh(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ws(n,r),n){case"dialog":ke("cancel",e),ke("close",e),i=r;break;case"iframe":case"object":case"embed":ke("load",e),i=r;break;case"video":case"audio":for(i=0;i<ri.length;i++)ke(ri[i],e);i=r;break;case"source":ke("error",e),i=r;break;case"img":case"image":case"link":ke("error",e),ke("load",e),i=r;break;case"details":ke("toggle",e),i=r;break;case"input":gc(e,r),i=Ds(e,r),ke("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ke("invalid",e);break;case"textarea":yc(e,r),i=Bs(e,r),ke("invalid",e);break;default:i=r}Vs(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?hf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bi(e,u):typeof u=="number"&&bi(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vi.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ke("scroll",e):u!=null&&Ja(e,o,u,s))}switch(n){case"input":to(e),xc(e,r,!1);break;case"textarea":to(e),vc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?yr(e,!!r.multiple,o,!1):r.defaultValue!=null&&yr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)Rh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=Dn(Pi.current),Dn(Ht.current),co(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ut]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=t,t.stateNode=r}return Ve(t),null;case 13:if(je(Ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&dt!==null&&t.mode&1&&!(t.flags&128))th(),Er(),t.flags|=98560,o=!1;else if(o=co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Ut]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else Pt!==null&&(Sa(Pt),Pt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ce.current&1?Me===0&&(Me=3):Lu())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return Tr(),ga(e,t),e===null&&Ni(t.stateNode.containerInfo),Ve(t),null;case 10:return mu(t.type._context),Ve(t),null;case 17:return rt(t.type)&&Qo(),Ve(t),null;case 19:if(je(Ce),o=t.memoizedState,o===null)return Ve(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Gr(o,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=tl(e),s!==null){for(t.flags|=128,Gr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return be(Ce,Ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>Lr&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=tl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Se)return Ve(t),null}else 2*ze()-o.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Ce.current,be(Ce,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return Pu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function Wy(e,t){switch(du(t),t.tag){case 1:return rt(t.type)&&Qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),je(nt),je(He),bu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vu(t),null;case 13:if(je(Ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Ce),null;case 4:return Tr(),null;case 10:return mu(t.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var ho=!1,We=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,G=null;function hr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function xa(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var ad=!1;function qy(e,t){if(ea=Wo,e=Uf(),uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,c=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++c===i&&(a=s),f===o&&++d===r&&(u=s),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Wo=!1,G=t;G!==null;)if(t=G,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,G=e;else for(;G!==null;){t=G;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,N=v.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:zt(t.type,x),N);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(E){Ee(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,G=e;break}G=t.return}return v=ad,ad=!1,v}function di(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xa(t,n,o)}i=i.next}while(i!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dh(e){var t=e.alternate;t!==null&&(e.alternate=null,Dh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[zi],delete t[ia],delete t[Ey],delete t[zy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $h(e){return e.tag===5||e.tag===3||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$h(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ko));else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}var $e=null,Tt=!1;function sn(e,t,n){for(n=n.child;n!==null;)Fh(e,t,n),n=n.sibling}function Fh(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:We||hr(n,t);case 6:var r=$e,i=Tt;$e=null,sn(e,t,n),$e=r,Tt=i,$e!==null&&(Tt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Tt?(e=$e,n=n.stateNode,e.nodeType===8?ts(e.parentNode,n):e.nodeType===1&&ts(e,n),Si(e)):ts($e,n.stateNode));break;case 4:r=$e,i=Tt,$e=n.stateNode.containerInfo,Tt=!0,sn(e,t,n),$e=r,Tt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&xa(n,t,s),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!We&&(hr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,t,a)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,sn(e,t,n),We=r):sn(e,t,n);break;default:sn(e,t,n)}}function cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hy),t.forEach(function(r){var i=tv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,Tt=!1;break e;case 3:$e=a.stateNode.containerInfo,Tt=!0;break e;case 4:$e=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if($e===null)throw Error(U(160));Fh(o,s,i),$e=null,Tt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ee(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bh(t,e),t=t.sibling}function Bh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Rt(e),r&4){try{di(3,e,e.return),Sl(3,e)}catch(x){Ee(e,e.return,x)}try{di(5,e,e.return)}catch(x){Ee(e,e.return,x)}}break;case 1:Et(t,e),Rt(e),r&512&&n!==null&&hr(n,n.return);break;case 5:if(Et(t,e),Rt(e),r&512&&n!==null&&hr(n,n.return),e.flags&32){var i=e.stateNode;try{bi(i,"")}catch(x){Ee(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&uf(i,o),Ws(a,s);var c=Ws(a,o);for(s=0;s<u.length;s+=2){var d=u[s],p=u[s+1];d==="style"?hf(i,p):d==="dangerouslySetInnerHTML"?pf(i,p):d==="children"?bi(i,p):Ja(i,d,p,c)}switch(a){case"input":$s(i,o);break;case"textarea":cf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?yr(i,!!o.multiple,h,!1):f!==!!o.multiple&&(o.defaultValue!=null?yr(i,!!o.multiple,o.defaultValue,!0):yr(i,!!o.multiple,o.multiple?[]:"",!1))}i[zi]=o}catch(x){Ee(e,e.return,x)}}break;case 6:if(Et(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Ee(e,e.return,x)}}break;case 3:if(Et(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Si(t.containerInfo)}catch(x){Ee(e,e.return,x)}break;case 4:Et(t,e),Rt(e);break;case 13:Et(t,e),Rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(zu=ze())),r&4&&cd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(We=(c=We)||d,Et(t,e),We=c):Et(t,e),Rt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(G=e,d=e.child;d!==null;){for(p=G=d;G!==null;){switch(f=G,h=f.child,f.tag){case 0:case 11:case 14:case 15:di(4,f,f.return);break;case 1:hr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Ee(r,n,x)}}break;case 5:hr(f,f.return);break;case 22:if(f.memoizedState!==null){pd(p);continue}}h!==null?(h.return=f,G=h):pd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ff("display",s))}catch(x){Ee(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){Ee(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Et(t,e),Rt(e),r&4&&cd(e);break;case 21:break;default:Et(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($h(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bi(i,""),r.flags&=-33);var o=ud(e);ba(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ud(e);va(e,a,s);break;default:throw Error(U(161))}}catch(u){Ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ky(e,t,n){G=e,Uh(e)}function Uh(e,t,n){for(var r=(e.mode&1)!==0;G!==null;){var i=G,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ho;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||We;a=ho;var c=We;if(ho=s,(We=u)&&!c)for(G=i;G!==null;)s=G,u=s.child,s.tag===22&&s.memoizedState!==null?fd(i):u!==null?(u.return=s,G=u):fd(i);for(;o!==null;)G=o,Uh(o),o=o.sibling;G=i,ho=a,We=c}dd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,G=o):dd(e)}}function dd(e){for(;G!==null;){var t=G;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Gc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Si(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}We||t.flags&512&&ya(t)}catch(f){Ee(t,t.return,f)}}if(t===e){G=null;break}if(n=t.sibling,n!==null){n.return=t.return,G=n;break}G=t.return}}function pd(e){for(;G!==null;){var t=G;if(t===e){G=null;break}var n=t.sibling;if(n!==null){n.return=t.return,G=n;break}G=t.return}}function fd(e){for(;G!==null;){var t=G;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(u){Ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Ee(t,i,u)}}var o=t.return;try{ya(t)}catch(u){Ee(t,o,u)}break;case 5:var s=t.return;try{ya(t)}catch(u){Ee(t,s,u)}}}catch(u){Ee(t,t.return,u)}if(t===e){G=null;break}var a=t.sibling;if(a!==null){a.return=t.return,G=a;break}G=t.return}}var Qy=Math.ceil,il=ln.ReactCurrentDispatcher,Nu=ln.ReactCurrentOwner,St=ln.ReactCurrentBatchConfig,pe=0,De=null,Ie=null,Fe=0,ut=0,mr=En(0),Me=0,Oi=null,Kn=0,Cl=0,Eu=0,pi=null,et=null,zu=0,Lr=1/0,Jt=null,ol=!1,wa=null,wn=null,mo=!1,hn=null,ll=0,fi=0,ka=null,Lo=-1,Io=0;function Je(){return pe&6?ze():Lo!==-1?Lo:Lo=ze()}function kn(e){return e.mode&1?pe&2&&Fe!==0?Fe&-Fe:Py.transition!==null?(Io===0&&(Io=_f()),Io):(e=me,e!==0||(e=window.event,e=e===void 0?16:If(e.type)),e):1}function At(e,t,n,r){if(50<fi)throw fi=0,ka=null,Error(U(185));Wi(e,n,r),(!(pe&2)||e!==De)&&(e===De&&(!(pe&2)&&(Cl|=n),Me===4&&pn(e,Fe)),it(e,r),n===1&&pe===0&&!(t.mode&1)&&(Lr=ze()+500,wl&&zn()))}function it(e,t){var n=e.callbackNode;Px(e,t);var r=Vo(e,e===De?Fe:0);if(r===0)n!==null&&kc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&kc(n),t===1)e.tag===0?Ty(hd.bind(null,e)):Xf(hd.bind(null,e)),_y(function(){!(pe&6)&&zn()}),n=null;else{switch(Nf(r)){case 1:n=tu;break;case 4:n=Sf;break;case 16:n=Uo;break;case 536870912:n=Cf;break;default:n=Uo}n=Jh(n,Vh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vh(e,t){if(Lo=-1,Io=0,pe&6)throw Error(U(327));var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var r=Vo(e,e===De?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var i=pe;pe|=2;var o=Hh();(De!==e||Fe!==t)&&(Jt=null,Lr=ze()+500,Fn(e,t));do try{Yy();break}catch(a){Wh(e,a)}while(!0);hu(),il.current=o,pe=i,Ie!==null?t=0:(De=null,Fe=0,t=Me)}if(t!==0){if(t===2&&(i=Gs(e),i!==0&&(r=i,t=ja(e,i))),t===1)throw n=Oi,Fn(e,0),pn(e,r),it(e,ze()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Gy(i)&&(t=sl(e,r),t===2&&(o=Gs(e),o!==0&&(r=o,t=ja(e,o))),t===1))throw n=Oi,Fn(e,0),pn(e,r),it(e,ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:An(e,et,Jt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=zu+500-ze(),10<t)){if(Vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ra(An.bind(null,e,et,Jt),t);break}An(e,et,Jt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-It(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qy(r/1960))-r,10<r){e.timeoutHandle=ra(An.bind(null,e,et,Jt),r);break}An(e,et,Jt);break;case 5:An(e,et,Jt);break;default:throw Error(U(329))}}}return it(e,ze()),e.callbackNode===n?Vh.bind(null,e):null}function ja(e,t){var n=pi;return e.current.memoizedState.isDehydrated&&(Fn(e,t).flags|=256),e=sl(e,t),e!==2&&(t=et,et=n,t!==null&&Sa(t)),e}function Sa(e){et===null?et=e:et.push.apply(et,e)}function Gy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ot(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~Eu,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),r=1<<n;e[n]=-1,t&=~r}}function hd(e){if(pe&6)throw Error(U(327));jr();var t=Vo(e,0);if(!(t&1))return it(e,ze()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=Gs(e);r!==0&&(t=r,n=ja(e,r))}if(n===1)throw n=Oi,Fn(e,0),pn(e,t),it(e,ze()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,et,Jt),it(e,ze()),null}function Tu(e,t){var n=pe;pe|=1;try{return e(t)}finally{pe=n,pe===0&&(Lr=ze()+500,wl&&zn())}}function Qn(e){hn!==null&&hn.tag===0&&!(pe&6)&&jr();var t=pe;pe|=1;var n=St.transition,r=me;try{if(St.transition=null,me=1,e)return e()}finally{me=r,St.transition=n,pe=t,!(pe&6)&&zn()}}function Pu(){ut=mr.current,je(mr)}function Fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cy(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(du(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qo();break;case 3:Tr(),je(nt),je(He),bu();break;case 5:vu(r);break;case 4:Tr();break;case 13:je(Ce);break;case 19:je(Ce);break;case 10:mu(r.type._context);break;case 22:case 23:Pu()}n=n.return}if(De=e,Ie=e=jn(e.current,null),Fe=ut=t,Me=0,Oi=null,Eu=Cl=Kn=0,et=pi=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Rn=null}return e}function Wh(e,t){do{var n=Ie;try{if(hu(),zo.current=rl,nl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nl=!1}if(qn=0,Re=Oe=_e=null,ci=!1,Li=0,Nu.current=null,n===null||n.return===null){Me=1,Oi=t,Ie=null;break}e:{var o=e,s=n.return,a=n,u=t;if(t=Fe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=td(s);if(h!==null){h.flags&=-257,nd(h,s,a,o,t),h.mode&1&&ed(o,c,t),t=h,u=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(u),t.updateQueue=x}else v.add(u);break e}else{if(!(t&1)){ed(o,c,t),Lu();break e}u=Error(U(426))}}else if(Se&&a.mode&1){var N=td(s);if(N!==null){!(N.flags&65536)&&(N.flags|=256),nd(N,s,a,o,t),pu(Pr(u,a));break e}}o=u=Pr(u,a),Me!==4&&(Me=2),pi===null?pi=[o]:pi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Nh(o,u,t);Qc(o,m);break e;case 1:a=u;var g=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wn===null||!wn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var E=Eh(o,a,t);Qc(o,E);break e}}o=o.return}while(o!==null)}Kh(n)}catch(k){t=k,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function Hh(){var e=il.current;return il.current=rl,e===null?rl:e}function Lu(){(Me===0||Me===3||Me===2)&&(Me=4),De===null||!(Kn&268435455)&&!(Cl&268435455)||pn(De,Fe)}function sl(e,t){var n=pe;pe|=2;var r=Hh();(De!==e||Fe!==t)&&(Jt=null,Fn(e,t));do try{Jy();break}catch(i){Wh(e,i)}while(!0);if(hu(),pe=n,il.current=r,Ie!==null)throw Error(U(261));return De=null,Fe=0,Me}function Jy(){for(;Ie!==null;)qh(Ie)}function Yy(){for(;Ie!==null&&!kx();)qh(Ie)}function qh(e){var t=Gh(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Kh(e):Ie=t,Nu.current=null}function Kh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Wy(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Ie=null;return}}else if(n=Vy(n,t,ut),n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Me===0&&(Me=5)}function An(e,t,n){var r=me,i=St.transition;try{St.transition=null,me=1,Xy(e,t,n,r)}finally{St.transition=i,me=r}return null}function Xy(e,t,n,r){do jr();while(hn!==null);if(pe&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Lx(e,o),e===De&&(Ie=De=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,Jh(Uo,function(){return jr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=St.transition,St.transition=null;var s=me;me=1;var a=pe;pe|=4,Nu.current=null,qy(e,n),Bh(n,e),yy(ta),Wo=!!ea,ta=ea=null,e.current=n,Ky(n),jx(),pe=a,me=s,St.transition=o}else e.current=n;if(mo&&(mo=!1,hn=e,ll=i),o=e.pendingLanes,o===0&&(wn=null),_x(n.stateNode),it(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ol)throw ol=!1,e=wa,wa=null,e;return ll&1&&e.tag!==0&&jr(),o=e.pendingLanes,o&1?e===ka?fi++:(fi=0,ka=e):fi=0,zn(),null}function jr(){if(hn!==null){var e=Nf(ll),t=St.transition,n=me;try{if(St.transition=null,me=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,ll=0,pe&6)throw Error(U(331));var i=pe;for(pe|=4,G=e.current;G!==null;){var o=G,s=o.child;if(G.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(G=c;G!==null;){var d=G;switch(d.tag){case 0:case 11:case 15:di(8,d,o)}var p=d.child;if(p!==null)p.return=d,G=p;else for(;G!==null;){d=G;var f=d.sibling,h=d.return;if(Dh(d),d===c){G=null;break}if(f!==null){f.return=h,G=f;break}G=h}}}var v=o.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}G=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,G=s;else e:for(;G!==null;){if(o=G,o.flags&2048)switch(o.tag){case 0:case 11:case 15:di(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,G=m;break e}G=o.return}}var g=e.current;for(G=g;G!==null;){s=G;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,G=y;else e:for(s=g;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sl(9,a)}}catch(k){Ee(a,a.return,k)}if(a===s){G=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,G=E;break e}G=a.return}}if(pe=i,zn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(gl,e)}catch{}r=!0}return r}finally{me=n,St.transition=t}}return!1}function md(e,t,n){t=Pr(n,t),t=Nh(e,t,1),e=bn(e,t,1),t=Je(),e!==null&&(Wi(e,1,t),it(e,t))}function Ee(e,t,n){if(e.tag===3)md(e,e,n);else for(;t!==null;){if(t.tag===3){md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=Pr(n,e),e=Eh(t,e,1),t=bn(t,e,1),e=Je(),t!==null&&(Wi(t,1,e),it(t,e));break}}t=t.return}}function Zy(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Fe&n)===n&&(Me===4||Me===3&&(Fe&130023424)===Fe&&500>ze()-zu?Fn(e,0):Eu|=n),it(e,t)}function Qh(e,t){t===0&&(e.mode&1?(t=io,io<<=1,!(io&130023424)&&(io=4194304)):t=1);var n=Je();e=rn(e,t),e!==null&&(Wi(e,t,n),it(e,n))}function ev(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qh(e,n)}function tv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Qh(e,n)}var Gh;Gh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return tt=!1,Uy(e,t,n);tt=!!(e.flags&131072)}else tt=!1,Se&&t.flags&1048576&&Zf(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Po(e,t),e=t.pendingProps;var i=Nr(t,He.current);kr(t,n),i=ku(null,t,r,e,i,n);var o=ju();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,Go(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xu(t),i.updater=jl,t.stateNode=i,i._reactInternals=t,ca(t,r,e,n),t=fa(null,t,r,!0,o,n)):(t.tag=0,Se&&o&&cu(t),Qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Po(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rv(r),e=zt(r,e),i){case 0:t=pa(null,t,r,e,n);break e;case 1:t=od(null,t,r,e,n);break e;case 11:t=rd(null,t,r,e,n);break e;case 14:t=id(null,t,r,zt(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),pa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),od(e,t,r,i,n);case 3:e:{if(Lh(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,oh(e,t),el(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Pr(Error(U(423)),t),t=ld(e,t,r,n,i);break e}else if(r!==i){i=Pr(Error(U(424)),t),t=ld(e,t,r,n,i);break e}else for(dt=vn(t.stateNode.containerInfo.firstChild),ht=t,Se=!0,Pt=null,n=rh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===i){t=on(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return lh(t),e===null&&sa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,na(r,i)?s=null:o!==null&&na(r,o)&&(t.flags|=32),Ph(e,t),Qe(e,t,s,n),t.child;case 6:return e===null&&sa(t),null;case 13:return Ih(e,t,n);case 4:return yu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zr(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),rd(e,t,r,i,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,be(Xo,r._currentValue),r._currentValue=s,o!==null)if(Ot(o.value,s)){if(o.children===i.children&&!nt.current){t=on(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=en(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),aa(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(U(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),aa(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,kr(t,n),i=Ct(i),r=r(i),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,i=zt(r,t.pendingProps),i=zt(r.type,i),id(e,t,r,i,n);case 15:return zh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:zt(r,i),Po(e,t),t.tag=1,rt(r)?(e=!0,Go(t)):e=!1,kr(t,n),_h(t,r,i),ca(t,r,i,n),fa(null,t,r,!0,e,n);case 19:return Ah(e,t,n);case 22:return Th(e,t,n)}throw Error(U(156,t.tag))};function Jh(e,t){return jf(e,t)}function nv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new nv(e,t,n,r)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rv(e){if(typeof e=="function")return Iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===Za)return 14}return 2}function jn(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ao(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Iu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case or:return Bn(n.children,i,o,t);case Ya:s=8,i|=8;break;case As:return e=jt(12,n,t,i|2),e.elementType=As,e.lanes=o,e;case Os:return e=jt(13,n,t,i),e.elementType=Os,e.lanes=o,e;case Ms:return e=jt(19,n,t,i),e.elementType=Ms,e.lanes=o,e;case lf:return _l(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rf:s=10;break e;case of:s=9;break e;case Xa:s=11;break e;case Za:s=14;break e;case un:s=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=jt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Bn(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function _l(e,t,n,r){return e=jt(22,e,r,t),e.elementType=lf,e.lanes=n,e.stateNode={isHidden:!1},e}function us(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function cs(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function iv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Au(e,t,n,r,i,o,s,a,u){return e=new iv(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(o),e}function ov(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yh(e){if(!e)return _n;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(rt(n))return Yf(e,n,t)}return t}function Xh(e,t,n,r,i,o,s,a,u){return e=Au(n,r,!0,e,i,o,s,a,u),e.context=Yh(null),n=e.current,r=Je(),i=kn(n),o=en(r,i),o.callback=t??null,bn(n,o,i),e.current.lanes=i,Wi(e,i,r),it(e,r),e}function Nl(e,t,n,r){var i=t.current,o=Je(),s=kn(i);return n=Yh(n),t.context===null?t.context=n:t.pendingContext=n,t=en(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bn(i,t,s),e!==null&&(At(e,i,s,o),Eo(e,i,s)),s}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ou(e,t){gd(e,t),(e=e.alternate)&&gd(e,t)}function lv(){return null}var Zh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mu(e){this._internalRoot=e}El.prototype.render=Mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Nl(e,t,null,null)};El.prototype.unmount=Mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){Nl(null,e,null,null)}),t[nn]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&Lf(e)}};function Ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xd(){}function sv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=al(s);o.call(c)}}var s=Xh(t,r,e,0,null,!1,!1,"",xd);return e._reactRootContainer=s,e[nn]=s.current,Ni(e.nodeType===8?e.parentNode:e),Qn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=al(u);a.call(c)}}var u=Au(e,0,!1,null,null,!1,!1,"",xd);return e._reactRootContainer=u,e[nn]=u.current,Ni(e.nodeType===8?e.parentNode:e),Qn(function(){Nl(t,u,n,r)}),u}function Tl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=al(s);a.call(u)}}Nl(t,s,e,i)}else s=sv(n,t,e,i,r);return al(s)}Ef=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ni(t.pendingLanes);n!==0&&(nu(t,n|1),it(t,ze()),!(pe&6)&&(Lr=ze()+500,zn()))}break;case 13:Qn(function(){var r=rn(e,1);if(r!==null){var i=Je();At(r,e,1,i)}}),Ou(e,1)}};ru=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Je();At(t,e,134217728,n)}Ou(e,134217728)}};zf=function(e){if(e.tag===13){var t=kn(e),n=rn(e,t);if(n!==null){var r=Je();At(n,e,t,r)}Ou(e,t)}};Tf=function(){return me};Pf=function(e,t){var n=me;try{return me=e,t()}finally{me=n}};qs=function(e,t,n){switch(t){case"input":if($s(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bl(r);if(!i)throw Error(U(90));af(r),$s(r,i)}}}break;case"textarea":cf(e,n);break;case"select":t=n.value,t!=null&&yr(e,!!n.multiple,t,!1)}};xf=Tu;yf=Qn;var av={usingClientEntryPoint:!1,Events:[qi,ur,bl,mf,gf,Tu]},Jr={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uv={bundleType:Jr.bundleType,version:Jr.version,rendererPackageName:Jr.rendererPackageName,rendererConfig:Jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wf(e),e===null?null:e.stateNode},findFiberByHostInstance:Jr.findFiberByHostInstance||lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{gl=go.inject(uv),Wt=go}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=av;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(t))throw Error(U(200));return ov(e,t,null,n)};gt.createRoot=function(e,t){if(!Ru(e))throw Error(U(299));var n=!1,r="",i=Zh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Au(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,Ni(e.nodeType===8?e.parentNode:e),new Mu(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=wf(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return Qn(e)};gt.hydrate=function(e,t,n){if(!zl(t))throw Error(U(200));return Tl(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!Ru(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Zh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Xh(t,null,e,1,n??null,i,!1,o,s),e[nn]=t.current,Ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new El(t)};gt.render=function(e,t,n){if(!zl(t))throw Error(U(200));return Tl(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!zl(e))throw Error(U(40));return e._reactRootContainer?(Qn(function(){Tl(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};gt.unstable_batchedUpdates=Tu;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zl(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Tl(e,t,n,!1,r)};gt.version="18.3.1-next-f1338f8080-20240426";function em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(em)}catch(e){console.error(e)}}em(),Zp.exports=gt;var cv=Zp.exports,yd=cv;Ls.createRoot=yd.createRoot,Ls.hydrateRoot=yd.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(this,arguments)}var mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mn||(mn={}));const vd="popstate";function dv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ca("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:tm(i)}return fv(t,n,null,e)}function Ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Du(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pv(){return Math.random().toString(36).substr(2,8)}function bd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ca(e,t,n,r){return n===void 0&&(n=null),Mi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rr(t):t,{state:n,key:t&&t.key||r||pv()})}function tm(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Rr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=mn.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(Mi({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=mn.Pop;let N=d(),m=N==null?null:N-c;c=N,u&&u({action:a,location:x.location,delta:m})}function f(N,m){a=mn.Push;let g=Ca(x.location,N,m);c=d()+1;let y=bd(g,c),E=x.createHref(g);try{s.pushState(y,"",E)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(E)}o&&u&&u({action:a,location:x.location,delta:1})}function h(N,m){a=mn.Replace;let g=Ca(x.location,N,m);c=d();let y=bd(g,c),E=x.createHref(g);s.replaceState(y,"",E),o&&u&&u({action:a,location:x.location,delta:0})}function v(N){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof N=="string"?N:tm(N);return g=g.replace(/ $/,"%20"),Ae(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let x={get action(){return a},get location(){return e(i,s)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(vd,p),u=N,()=>{i.removeEventListener(vd,p),u=null}},createHref(N){return t(i,N)},createURL:v,encodeLocation(N){let m=v(N);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:h,go(N){return s.go(N)}};return x}var wd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wd||(wd={}));function hv(e,t,n){return n===void 0&&(n="/"),mv(e,t,n)}function mv(e,t,n,r){let i=typeof t=="string"?Rr(t):t,o=im(i.pathname||"/",n);if(o==null)return null;let s=nm(e);gv(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let c=Ev(o);a=Cv(s[u],c)}return a}function nm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Ae(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Un([r,u.relativePath]),d=n.concat(u);o.children&&o.children.length>0&&(Ae(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nm(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:jv(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of rm(o.path))i(o,s,u)}),t}function rm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=rm(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function gv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Sv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xv=/^:[\w-]+$/,yv=3,vv=2,bv=1,wv=10,kv=-2,kd=e=>e==="*";function jv(e,t){let n=e.split("/"),r=n.length;return n.some(kd)&&(r+=kv),t&&(r+=vv),n.filter(i=>!kd(i)).reduce((i,o)=>i+(xv.test(o)?yv:o===""?bv:wv),r)}function Sv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Cv(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=_v({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),f=u.route;if(!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:Un([o,p.pathname]),pathnameBase:Iv(Un([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=Un([o,p.pathnameBase]))}return s}function _v(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Nv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:f,isOptional:h}=d;if(f==="*"){let x=a[p]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[p];return h&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function Nv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Du(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Ev(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Du(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function im(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const zv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tv=e=>zv.test(e);function Pv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Rr(e):e,o;if(n)if(Tv(n))o=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Du(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?o=jd(n.substring(1),"/"):o=jd(n,t)}else o=t;return{pathname:o,search:Av(r),hash:Ov(i)}}function jd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ds(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Lv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function om(e,t){let n=Lv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function lm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Rr(e):(i=Mi({},e),Ae(!i.pathname||!i.pathname.includes("?"),ds("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),ds("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),ds("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}a=p>=0?t[p]:"/"}let u=Pv(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Un=e=>e.join("/").replace(/\/\/+/g,"/"),Iv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Av=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ov=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Mv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sm=["post","put","patch","delete"];new Set(sm);const Rv=["get",...sm];new Set(Rv);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ri(){return Ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ri.apply(this,arguments)}const $u=_.createContext(null),Dv=_.createContext(null),Qi=_.createContext(null),Pl=_.createContext(null),Tn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),am=_.createContext(null);function Gi(){return _.useContext(Pl)!=null}function Fu(){return Gi()||Ae(!1),_.useContext(Pl).location}function um(e){_.useContext(Qi).static||_.useLayoutEffect(e)}function Bu(){let{isDataRoute:e}=_.useContext(Tn);return e?Xv():$v()}function $v(){Gi()||Ae(!1);let e=_.useContext($u),{basename:t,future:n,navigator:r}=_.useContext(Qi),{matches:i}=_.useContext(Tn),{pathname:o}=Fu(),s=JSON.stringify(om(i,n.v7_relativeSplatPath)),a=_.useRef(!1);return um(()=>{a.current=!0}),_.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=lm(c,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Un([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,o,e])}function Fv(){let{matches:e}=_.useContext(Tn),t=e[e.length-1];return t?t.params:{}}function Bv(e,t){return Uv(e,t)}function Uv(e,t,n,r){Gi()||Ae(!1);let{navigator:i}=_.useContext(Qi),{matches:o}=_.useContext(Tn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Fu(),d;if(t){var p;let N=typeof t=="string"?Rr(t):t;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||Ae(!1),d=N}else d=c;let f=d.pathname||"/",h=f;if(u!=="/"){let N=u.replace(/^\//,"").split("/");h="/"+f.replace(/^\//,"").split("/").slice(N.length).join("/")}let v=hv(e,{pathname:h}),x=Kv(v&&v.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:Un([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Un([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,r);return t&&x?_.createElement(Pl.Provider,{value:{location:Ri({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:mn.Pop}},x):x}function Vv(){let e=Yv(),t=Mv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const Wv=_.createElement(Vv,null);class Hv extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Tn.Provider,{value:this.props.routeContext},_.createElement(am.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qv(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext($u);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Tn.Provider,{value:t},r)}function Kv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||Ae(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:f,errors:h}=n,v=p.route.loader&&f[p.route.id]===void 0&&(!h||h[p.route.id]===void 0);if(p.route.lazy||v){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,p,f)=>{let h,v=!1,x=null,N=null;n&&(h=a&&p.route.id?a[p.route.id]:void 0,x=p.route.errorElement||Wv,u&&(c<0&&f===0?(Zv("route-fallback"),v=!0,N=null):c===f&&(v=!0,N=p.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,f+1)),g=()=>{let y;return h?y=x:v?y=N:p.route.Component?y=_.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,_.createElement(qv,{match:p,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?_.createElement(Hv,{location:n.location,revalidation:n.revalidation,component:x,error:h,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var cm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cm||{}),dm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(dm||{});function Qv(e){let t=_.useContext($u);return t||Ae(!1),t}function Gv(e){let t=_.useContext(Dv);return t||Ae(!1),t}function Jv(e){let t=_.useContext(Tn);return t||Ae(!1),t}function pm(e){let t=Jv(),n=t.matches[t.matches.length-1];return n.route.id||Ae(!1),n.route.id}function Yv(){var e;let t=_.useContext(am),n=Gv(),r=pm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Xv(){let{router:e}=Qv(cm.UseNavigateStable),t=pm(dm.UseNavigateStable),n=_.useRef(!1);return um(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ri({fromRouteId:t},o)))},[e,t])}const Sd={};function Zv(e,t,n){Sd[e]||(Sd[e]=!0)}function e1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function t1(e){let{to:t,replace:n,state:r,relative:i}=e;Gi()||Ae(!1);let{future:o,static:s}=_.useContext(Qi),{matches:a}=_.useContext(Tn),{pathname:u}=Fu(),c=Bu(),d=lm(t,om(a,o.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return _.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function rr(e){Ae(!1)}function n1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=mn.Pop,navigator:o,static:s=!1,future:a}=e;Gi()&&Ae(!1);let u=t.replace(/^\/*/,"/"),c=_.useMemo(()=>({basename:u,navigator:o,static:s,future:Ri({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=Rr(r));let{pathname:d="/",search:p="",hash:f="",state:h=null,key:v="default"}=r,x=_.useMemo(()=>{let N=im(d,u);return N==null?null:{location:{pathname:N,search:p,hash:f,state:h,key:v},navigationType:i}},[u,d,p,f,h,v,i]);return x==null?null:_.createElement(Qi.Provider,{value:c},_.createElement(Pl.Provider,{children:n,value:x}))}function r1(e){let{children:t,location:n}=e;return Bv(_a(t),n)}new Promise(()=>{});function _a(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,_a(r.props.children,o));return}r.type!==rr&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=_a(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const i1="6";try{window.__reactRouterVersion=i1}catch{}const o1="startTransition",Cd=Zg[o1];function l1(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=dv({window:i,v5Compat:!0}));let s=o.current,[a,u]=_.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=_.useCallback(p=>{c&&Cd?Cd(()=>u(p)):u(p)},[u,c]);return _.useLayoutEffect(()=>s.listen(d),[s,d]),_.useEffect(()=>e1(r),[r]),_.createElement(n1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}var _d;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_d||(_d={}));var Nd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nd||(Nd={}));const s1={},Ed=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const h=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(v=>v(t,h))}},i=()=>t,u={setState:r,getState:i,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(s1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=t=e(r,i,u);return u},a1=e=>e?Ed(e):Ed;var fm={exports:{}},hm={},mm={exports:{}},gm={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir=_;function u1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var c1=typeof Object.is=="function"?Object.is:u1,d1=Ir.useState,p1=Ir.useEffect,f1=Ir.useLayoutEffect,h1=Ir.useDebugValue;function m1(e,t){var n=t(),r=d1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return f1(function(){i.value=n,i.getSnapshot=t,ps(i)&&o({inst:i})},[e,n,t]),p1(function(){return ps(i)&&o({inst:i}),e(function(){ps(i)&&o({inst:i})})},[e]),h1(n),n}function ps(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!c1(e,n)}catch{return!0}}function g1(e,t){return t()}var x1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g1:m1;gm.useSyncExternalStore=Ir.useSyncExternalStore!==void 0?Ir.useSyncExternalStore:x1;mm.exports=gm;var y1=mm.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=_,v1=y1;function b1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var w1=typeof Object.is=="function"?Object.is:b1,k1=v1.useSyncExternalStore,j1=Ll.useRef,S1=Ll.useEffect,C1=Ll.useMemo,_1=Ll.useDebugValue;hm.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=j1(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=C1(function(){function u(h){if(!c){if(c=!0,d=h,h=r(h),i!==void 0&&s.hasValue){var v=s.value;if(i(v,h))return p=v}return p=h}if(v=p,w1(d,h))return v;var x=r(h);return i!==void 0&&i(v,x)?(d=h,v):(d=h,p=x)}var c=!1,d,p,f=n===void 0?null:n;return[function(){return u(t())},f===null?void 0:function(){return u(f())}]},[t,n,r,i]);var a=k1(e,o[0],o[1]);return S1(function(){s.hasValue=!0,s.value=a},[a]),_1(a),a};fm.exports=hm;var N1=fm.exports;const E1=hl(N1),xm={},{useDebugValue:z1}=Lt,{useSyncExternalStoreWithSelector:T1}=E1;let zd=!1;const P1=e=>e;function L1(e,t=P1,n){(xm?"production":void 0)!=="production"&&n&&!zd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),zd=!0);const r=T1(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return z1(r),r}const Td=e=>{(xm?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?a1(e):e,n=(r,i)=>L1(t,r,i);return Object.assign(n,t),n},I1=e=>e?Td(e):Td,Mt=I1((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(a=>a.id===n?{...a,...r}:a);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const a=o.map(({id:u,serverName:c,toolName:d,args:p,transform:f})=>({id:u,serverName:c,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:a},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const s=i.map(({id:a,serverName:u,toolName:c,args:d,transform:p})=>({id:a,serverName:u,toolName:c,args:d,transform:p}));return{watches:i,project:{...o,watches:s},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(s=>s.id!==n),{project:o}=r;if(o){const s=i.map(({id:a,serverName:u,toolName:c,args:d,transform:p})=>({id:a,serverName:u,toolName:c,args:d,transform:p}));return{watches:i,project:{...o,watches:s},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})}})),A1="/api";async function Te(e,t){const n=await fetch(`${A1}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function ym(){return(await Te("/projects")).projects}async function vm(e){return(await Te(`/projects/${e}`)).project}async function bm(e,t=""){return(await Te("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function wm(e,t){return(await Te(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function km(e){await Te(`/projects/${e}`,{method:"DELETE"})}async function jm(e){return Te(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Na(e){return(await Te(`/projects/${e}/sessions`)).sessions}async function Sm(e,t){return(await Te(`/projects/${e}/sessions/${t}/load`)).session}async function Cm(e){return(await Te(`/projects/${e}/yaml`)).yaml}async function _m(e,t){return(await Te(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function Uu(){return(await Te("/mcp-servers")).servers}async function Nm(){return(await Te("/builtin-tools")).tools}function Em(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Oo(e,t,n){return await Te(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n})})}async function zm(e,t){return await Te(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Tm(e,t,n,r=[],i){return await Te(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Pm(e){return await Te("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}const O1=Object.freeze(Object.defineProperty({__proto__:null,createProject:bm,createRunWebSocket:Em,deleteProject:km,fetchJSON:Te,generateAgentConfig:zm,generatePrompt:Oo,generateToolCode:Tm,getBuiltinTools:Nm,getMcpServers:Uu,getProject:vm,getProjectYaml:Cm,listProjectSessions:Na,listProjects:ym,loadSession:Sm,saveSessionToMemory:jm,testMcpServer:Pm,updateProject:wm,updateProjectFromYaml:_m},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),J=(e,t)=>{const n=_.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:a="",children:u,...c},d)=>_.createElement("svg",{ref:d,...M1,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:["lucide",`lucide-${R1(e)}`,a].join(" "),...c},[...t.map(([p,f])=>_.createElement(p,f)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=J("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=J("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=J("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=J("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=J("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=J("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=J("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=J("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=J("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=J("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=J("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=J("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=J("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=J("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=J("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=J("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=J("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=J("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=J("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=J("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=J("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=J("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=J("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=J("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=J("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=J("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=J("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=J("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=J("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=J("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=J("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=J("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=J("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=J("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=J("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=J("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=J("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=J("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=J("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=J("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=J("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=J("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=J("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=J("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=J("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=J("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=J("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=J("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=J("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=J("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=J("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Z1(){const e=Bu(),[t,n]=_.useState([]),[r,i]=_.useState(!0),[o,s]=_.useState(!1),[a,u]=_.useState("");_.useEffect(()=>{c()},[]);async function c(){try{const f=await ym();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(a.trim())try{const f=await bm(a.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await km(f),n(t.filter(v=>v.id!==f))}catch(v){console.error("Failed to delete project:",v)}}return l.jsxs("div",{className:"project-list",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("header",{className:"header",children:[l.jsxs("div",{className:"logo",children:[l.jsx(Dm,{size:40,className:"logo-icon"}),l.jsx("h1",{className:"title",children:"ADK Playground"})]}),l.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),l.jsxs("div",{className:"content",children:[o?l.jsxs("div",{className:"create-form",children:[l.jsx("input",{type:"text",placeholder:"Project name...",value:a,onChange:f=>u(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),l.jsxs("button",{className:"btn btn-primary",onClick:d,children:[l.jsx(Ge,{size:18}),"Create"]}),l.jsx("button",{className:"btn btn-secondary",onClick:()=>s(!1),children:"Cancel"})]}):l.jsx("div",{className:"create-form",children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>s(!0),children:[l.jsx(Ge,{size:18}),"New Project"]})}),r?l.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Ad,{size:48,style:{marginBottom:16,opacity:.3}}),l.jsx("p",{children:"No projects yet. Create one to get started!"})]}):l.jsx("div",{className:"projects-grid",children:t.map(f=>l.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[l.jsxs("h3",{children:[l.jsx(Ad,{size:18}),f.name]}),l.jsx("p",{children:f.description||"No description"}),l.jsx("button",{className:"delete-btn",onClick:h=>p(f.id,h),children:l.jsx(pt,{size:16})})]},f.id))})]})]})}const e0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function t0(){const{project:e,updateProject:t}=Mt();if(!e)return null;const{app:n}=e;function r(j){t({app:{...n,...j}})}function i(){const j={name:`state_key_${n.state_keys.length+1}`,description:"",type:"string",scope:"session"};r({state_keys:[...n.state_keys,j]})}function o(j,P){const z=[...n.state_keys];z[j]={...z[j],...P},r({state_keys:z})}function s(j){r({state_keys:n.state_keys.filter((P,z)=>z!==j)})}function a(){const j={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};r({plugins:[...n.plugins,j]})}function u(j,P){const z=[...n.plugins];z[j]={...z[j],...P},r({plugins:z})}function c(j){r({plugins:n.plugins.filter((P,z)=>z!==j)})}const d=n.models||[];function p(){const j=`model_${Date.now().toString(36)}`,P={id:j,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:d.length===0};r({models:[...d,P],default_model_id:d.length===0?j:n.default_model_id})}function f(j,P){const z=d.map(O=>O.id===j?{...O,...P}:O);r({models:z})}function h(j){var O;const P=d.filter(C=>C.id!==j),z=n.default_model_id===j?((O=P[0])==null?void 0:O.id)||void 0:n.default_model_id;r({models:P,default_model_id:z})}function v(j){r({default_model_id:j})}const x=n.env_vars||{},[N,m]=_.useState({}),[g,y]=_.useState("");function E(j=""){const P=j||g.trim();!P||x[P]!==void 0||(r({env_vars:{...x,[P]:""}}),y(""))}function k(j,P){r({env_vars:{...x,[j]:P}})}function b(j){const P={...x};delete P[j],r({env_vars:P})}function I(j){m(P=>({...P,[j]:!P[j]}))}return l.jsxs("div",{className:"app-config",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(q1,{size:20}),"Basic Information"]})}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"App Name"}),l.jsx("input",{type:"text",value:n.name,onChange:j=>r({name:j.target.value})})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Root Agent"}),l.jsxs("select",{value:n.root_agent_id||"",onChange:j=>r({root_agent_id:j.target.value||void 0}),children:[l.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(j=>l.jsx("option",{value:j.id,children:j.name},j.id))]})]}),l.jsxs("div",{className:"form-group full-width",children:[l.jsx("label",{children:"Description"}),l.jsx("textarea",{value:n.description,onChange:j=>r({description:j.target.value}),rows:2})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(hi,{size:20}),"Services"]})}),l.jsxs("div",{className:"form-grid",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Session Service"}),l.jsxs("select",{value:n.session_service_uri.split("://")[0],onChange:j=>{const P=j.target.value;r(P==="memory"?{session_service_uri:"memory://"}:P==="file"?{session_service_uri:"file://./sessions"}:P==="sqlite"?{session_service_uri:"sqlite://./sessions.db"}:{session_service_uri:P+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System (JSON)"}),l.jsx("option",{value:"sqlite",children:"SQLite"}),l.jsx("option",{value:"postgresql",children:"PostgreSQL"})]}),n.session_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:n.session_service_uri.replace("file://",""),onChange:j=>r({session_service_uri:"file://"+j.target.value}),placeholder:"./sessions",style:{marginTop:8}}),n.session_service_uri.startsWith("sqlite://")&&l.jsx("input",{type:"text",value:n.session_service_uri.replace("sqlite://",""),onChange:j=>r({session_service_uri:"sqlite://"+j.target.value}),placeholder:"./sessions.db",style:{marginTop:8}})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Memory Service"}),l.jsxs("select",{value:n.memory_service_uri.split("://")[0],onChange:j=>{const P=j.target.value;r(P==="memory"?{memory_service_uri:"memory://"}:P==="file"?{memory_service_uri:"file://./memory"}:{memory_service_uri:P+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System (JSON)"})]}),n.memory_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:n.memory_service_uri.replace("file://",""),onChange:j=>r({memory_service_uri:"file://"+j.target.value}),placeholder:"./memory",style:{marginTop:8}})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Artifact Service"}),l.jsxs("select",{value:n.artifact_service_uri.split("://")[0],onChange:j=>{const P=j.target.value;r(P==="memory"?{artifact_service_uri:"memory://"}:P==="file"?{artifact_service_uri:"file://./artifacts"}:P==="gcs"?{artifact_service_uri:"gcs://your-bucket-name"}:{artifact_service_uri:P+"://"})},children:[l.jsx("option",{value:"memory",children:"In-Memory"}),l.jsx("option",{value:"file",children:"File System"}),l.jsx("option",{value:"gcs",children:"Google Cloud Storage"})]}),n.artifact_service_uri.startsWith("file://")&&l.jsx("input",{type:"text",value:n.artifact_service_uri.replace("file://",""),onChange:j=>r({artifact_service_uri:"file://"+j.target.value}),placeholder:"./artifacts",style:{marginTop:8}}),n.artifact_service_uri.startsWith("gcs://")&&l.jsx("input",{type:"text",value:n.artifact_service_uri.replace("gcs://",""),onChange:j=>r({artifact_service_uri:"gcs://"+j.target.value}),placeholder:"your-bucket-name",style:{marginTop:8}})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(za,{size:20}),"Environment Variables"]})}),l.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:e0.filter(j=>x[j.key]===void 0).map(j=>l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>E(j.key),title:j.description,children:[l.jsx(Ge,{size:12}),j.key]},j.key))}),Object.keys(x).length===0?l.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(x).map(([j,P])=>l.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[l.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[l.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:j}),l.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[l.jsx("input",{type:N[j]?"text":"password",value:P,onChange:z=>k(j,z.target.value),placeholder:"Enter value...",style:{flex:1}}),l.jsx("button",{className:"delete-item",onClick:()=>I(j),title:N[j]?"Hide value":"Show value",children:N[j]?l.jsx(F1,{size:16}):l.jsx(Di,{size:16})})]})]}),l.jsx("button",{className:"delete-item",onClick:()=>b(j),children:l.jsx(pt,{size:16})})]},j)),l.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[l.jsx("input",{type:"text",value:g,onChange:j=>y(j.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:j=>j.key==="Enter"&&E()}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>E(),disabled:!g.trim(),children:[l.jsx(Ge,{size:14}),"Add Variable"]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(Vu,{size:20}),"Models"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:p,children:[l.jsx(Ge,{size:14}),"Add Model"]})]}),d.length===0?l.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):d.map(j=>l.jsxs("div",{className:"model-card",children:[l.jsxs("div",{className:"model-card-header",children:[l.jsx("input",{type:"text",value:j.name,onChange:P=>f(j.id,{name:P.target.value}),placeholder:"Model name",className:"model-name-input"}),l.jsx("button",{className:`default-model-btn ${n.default_model_id===j.id?"is-default":""}`,onClick:()=>v(j.id),title:n.default_model_id===j.id?"Default model":"Set as default",children:l.jsx($m,{size:14,fill:n.default_model_id===j.id?"currentColor":"none"})}),l.jsx("button",{className:"delete-item",onClick:()=>h(j.id),children:l.jsx(pt,{size:16})})]}),l.jsxs("div",{className:"model-card-body",children:[l.jsxs("div",{className:"model-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Provider"}),l.jsxs("select",{value:j.provider,onChange:P=>f(j.id,{provider:P.target.value}),children:[l.jsx("option",{value:"gemini",children:"Gemini"}),l.jsx("option",{value:"litellm",children:"LiteLLM"}),l.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"Model Name"}),l.jsx("input",{type:"text",value:j.model_name,onChange:P=>f(j.id,{model_name:P.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),j.provider==="litellm"&&l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"API Base URL"}),l.jsx("input",{type:"text",value:j.api_base||"",onChange:P=>f(j.id,{api_base:P.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),l.jsxs("div",{className:"model-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Temperature"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:j.temperature??"",onChange:P=>f(j.id,{temperature:P.target.value?parseFloat(P.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Tokens"}),l.jsx("input",{type:"number",min:"1",value:j.max_output_tokens??"",onChange:P=>f(j.id,{max_output_tokens:P.target.value?parseInt(P.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top P"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:j.top_p??"",onChange:P=>f(j.id,{top_p:P.target.value?parseFloat(P.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top K"}),l.jsx("input",{type:"number",min:"1",value:j.top_k??"",onChange:P=>f(j.id,{top_k:P.target.value?parseInt(P.target.value):void 0}),placeholder:"Default"})]})]})]})]},j.id))]}),l.jsxs("section",{className:"section",children:[l.jsx("div",{className:"section-header",children:l.jsxs("h2",{className:"section-title",children:[l.jsx(Bm,{size:20}),"Advanced Options"]})}),l.jsxs("div",{className:"toggle-group",children:[l.jsx("div",{className:`toggle ${n.compaction.enabled?"active":""}`,onClick:()=>r({compaction:{...n.compaction,enabled:!n.compaction.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Event Compaction"}),l.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),n.compaction.enabled&&l.jsx("input",{type:"number",value:n.compaction.max_events,onChange:j=>r({compaction:{...n.compaction,max_events:parseInt(j.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),l.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[l.jsx("div",{className:`toggle ${n.context_cache.enabled?"active":""}`,onClick:()=>r({context_cache:{...n.context_cache,enabled:!n.context_cache.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Context Caching"}),l.jsx("span",{children:"Cache static instructions for better performance"})]}),n.context_cache.enabled&&l.jsx("input",{type:"number",value:n.context_cache.ttl_seconds,onChange:j=>r({context_cache:{...n.context_cache,ttl_seconds:parseInt(j.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),l.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[l.jsx("div",{className:`toggle ${n.resumability.enabled?"active":""}`,onClick:()=>r({resumability:{...n.resumability,enabled:!n.resumability.enabled}})}),l.jsxs("div",{className:"toggle-label",children:[l.jsx("strong",{children:"Resumability"}),l.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(Am,{size:20}),"Session State Keys"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,children:[l.jsx(Ge,{size:14}),"Add Key"]})]}),n.state_keys.length===0?l.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):n.state_keys.map((j,P)=>l.jsxs("div",{className:"list-item",children:[l.jsxs("div",{className:"list-item-content",children:[l.jsx("input",{type:"text",value:j.name,onChange:z=>o(P,{name:z.target.value}),placeholder:"Key name"}),l.jsxs("select",{value:j.type,onChange:z=>o(P,{type:z.target.value}),children:[l.jsx("option",{value:"string",children:"String"}),l.jsx("option",{value:"number",children:"Number"}),l.jsx("option",{value:"boolean",children:"Boolean"}),l.jsx("option",{value:"object",children:"Object"}),l.jsx("option",{value:"array",children:"Array"})]}),l.jsxs("select",{value:j.scope,onChange:z=>o(P,{scope:z.target.value}),children:[l.jsx("option",{value:"session",children:"Session"}),l.jsx("option",{value:"user",children:"User"}),l.jsx("option",{value:"app",children:"App"}),l.jsx("option",{value:"temp",children:"Temporary"})]}),l.jsx("input",{type:"text",value:j.description,onChange:z=>o(P,{description:z.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),l.jsx("button",{className:"delete-item",onClick:()=>s(P),children:l.jsx(pt,{size:16})})]},P))]}),l.jsxs("section",{className:"section",children:[l.jsxs("div",{className:"section-header",children:[l.jsxs("h2",{className:"section-title",children:[l.jsx(gr,{size:20}),"Plugins"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:a,children:[l.jsx(Ge,{size:14}),"Add Plugin"]})]}),n.plugins.length===0?l.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins like ReflectAndRetryToolPlugin for error handling."}):n.plugins.map((j,P)=>l.jsxs("div",{className:"list-item",children:[l.jsxs("div",{className:"list-item-content",children:[l.jsx("select",{value:j.type,onChange:z=>u(P,{type:z.target.value}),children:l.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"})}),j.type==="ReflectAndRetryToolPlugin"&&l.jsxs(l.Fragment,{children:[l.jsx("input",{type:"number",value:j.max_retries||3,onChange:z=>u(P,{max_retries:parseInt(z.target.value)}),placeholder:"Max retries"}),l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("input",{type:"checkbox",checked:j.throw_exception_if_retry_exceeded||!1,onChange:z=>u(P,{throw_exception_if_retry_exceeded:z.target.checked})}),"Throw on exceed"]})]})]}),l.jsx("button",{className:"delete-item",onClick:()=>c(P),children:l.jsx(pt,{size:16})})]},P))]})]})}const n0="modulepreload",r0=function(e){return"/"+e},$d={},Um=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=r0(u),u in $d)return;$d[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":n0,c||(p.as="script"),p.crossOrigin="",p.href=u,a&&p.setAttribute("nonce",a),document.head.appendChild(p),c)return new Promise((f,h)=>{p.addEventListener("load",f),p.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return i.then(s=>{for(const a of s||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};function Fd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function i0(e){if(Array.isArray(e))return e}function o0(e,t,n){return(t=p0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,a=[],u=!0,c=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(u=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);u=!0);}catch(d){c=!0,i=d}finally{try{if(!u&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function s0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ud(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bd(Object(n),!0).forEach(function(r){o0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function a0(e,t){if(e==null)return{};var n,r,i=u0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function c0(e,t){return i0(e)||l0(e,t)||f0(e,t)||s0()}function d0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function p0(e){var t=d0(e,"string");return typeof t=="symbol"?t:t+""}function f0(e,t){if(e){if(typeof e=="string")return Fd(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fd(e,t):void 0}}function h0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vd(Object(n),!0).forEach(function(r){h0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function m0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function ii(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var s=arguments.length,a=new Array(s),u=0;u<s;u++)a[u]=arguments[u];return t.apply(n,[].concat(i,a))}}}function cl(e){return{}.toString.call(e).includes("Object")}function g0(e){return!Object.keys(e).length}function Fi(e){return typeof e=="function"}function x0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function y0(e,t){return cl(t)||Sn("changeType"),Object.keys(t).some(function(n){return!x0(e,n)})&&Sn("changeField"),t}function v0(e){Fi(e)||Sn("selectorType")}function b0(e){Fi(e)||cl(e)||Sn("handlerType"),cl(e)&&Object.values(e).some(function(t){return!Fi(t)})&&Sn("handlersType")}function w0(e){e||Sn("initialIsRequired"),cl(e)||Sn("initialType"),g0(e)&&Sn("initialContent")}function k0(e,t){throw new Error(e[t]||e.default)}var j0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Sn=ii(k0)(j0),xo={changes:y0,selector:v0,handler:b0,initial:w0};function S0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};xo.initial(e),xo.handler(t);var n={current:e},r=ii(N0)(n,t),i=ii(_0)(n),o=ii(xo.changes)(e),s=ii(C0)(n);function a(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return xo.selector(c),c(n.current)}function u(c){m0(r,i,o,s)(c)}return[a,u]}function C0(e,t){return Fi(t)?t(e.current):t}function _0(e,t){return e.current=Wd(Wd({},e.current),t),t}function N0(e,t,n){return Fi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var E0={create:S0},z0={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function T0(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var s=arguments.length,a=new Array(s),u=0;u<s;u++)a[u]=arguments[u];return t.apply(n,[].concat(i,a))}}}function P0(e){return{}.toString.call(e).includes("Object")}function L0(e){return e||Hd("configIsRequired"),P0(e)||Hd("configType"),e.urls?(I0(),{paths:{vs:e.urls.monacoBase}}):e}function I0(){console.warn(Vm.deprecation)}function A0(e,t){throw new Error(e[t]||e.default)}var Vm={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Hd=T0(A0)(Vm),O0={config:L0},M0=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,s){return s(o)},i)}};function Wm(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Wm(e[n],t[n]))}),Ud(Ud({},e),t)}var R0={type:"cancelation",msg:"operation is manually canceled"};function ms(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(R0):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var D0=["monaco"],$0=E0.create({config:z0,isInitialized:!1,resolve:null,reject:null,monaco:null}),Hm=c0($0,2),Ji=Hm[0],Il=Hm[1];function F0(e){var t=O0.config(e),n=t.monaco,r=a0(t,D0);Il(function(i){return{config:Wm(i.config,r),monaco:n}})}function B0(){var e=Ji(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Il({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),ms(gs);if(window.monaco&&window.monaco.editor)return qm(window.monaco),e.resolve(window.monaco),ms(gs);M0(U0,W0)(H0)}return ms(gs)}function U0(e){return document.body.appendChild(e)}function V0(e){var t=document.createElement("script");return e&&(t.src=e),t}function W0(e){var t=Ji(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=V0("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function H0(){var e=Ji(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;qm(r),e.resolve(r)},function(n){e.reject(n)})}function qm(e){Ji().monaco||Il({monaco:e})}function q0(){return Ji(function(e){var t=e.monaco;return t})}var gs=new Promise(function(e,t){return Il({resolve:e,reject:t})}),Km={config:F0,init:B0,__getMonacoInstance:q0},K0={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},xs=K0,Q0={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},G0=Q0;function J0({children:e}){return Lt.createElement("div",{style:G0.container},e)}var Y0=J0,X0=Y0;function Z0({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:s}){return Lt.createElement("section",{style:{...xs.wrapper,width:e,height:t},...s},!n&&Lt.createElement(X0,null,r),Lt.createElement("div",{ref:i,style:{...xs.fullWidth,...!n&&xs.hide},className:o}))}var eb=Z0,Qm=_.memo(eb);function tb(e){_.useEffect(e,[])}var Gm=tb;function nb(e,t,n=!0){let r=_.useRef(!0);_.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var ct=nb;function mi(){}function xr(e,t,n,r){return rb(e,r)||ib(e,t,n,r)}function rb(e,t){return e.editor.getModel(Jm(e,t))}function ib(e,t,n,r){return e.editor.createModel(t,n,r?Jm(e,r):void 0)}function Jm(e,t){return e.Uri.parse(t)}function ob({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:s,keepCurrentOriginalModel:a=!1,keepCurrentModifiedModel:u=!1,theme:c="light",loading:d="Loading...",options:p={},height:f="100%",width:h="100%",className:v,wrapperProps:x={},beforeMount:N=mi,onMount:m=mi}){let[g,y]=_.useState(!1),[E,k]=_.useState(!0),b=_.useRef(null),I=_.useRef(null),j=_.useRef(null),P=_.useRef(m),z=_.useRef(N),O=_.useRef(!1);Gm(()=>{let L=Km.init();return L.then(D=>(I.current=D)&&k(!1)).catch(D=>(D==null?void 0:D.type)!=="cancelation"&&console.error("Monaco initialization: error:",D)),()=>b.current?T():L.cancel()}),ct(()=>{if(b.current&&I.current){let L=b.current.getOriginalEditor(),D=xr(I.current,e||"",r||n||"text",o||"");D!==L.getModel()&&L.setModel(D)}},[o],g),ct(()=>{if(b.current&&I.current){let L=b.current.getModifiedEditor(),D=xr(I.current,t||"",i||n||"text",s||"");D!==L.getModel()&&L.setModel(D)}},[s],g),ct(()=>{let L=b.current.getModifiedEditor();L.getOption(I.current.editor.EditorOption.readOnly)?L.setValue(t||""):t!==L.getValue()&&(L.executeEdits("",[{range:L.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),L.pushUndoStop())},[t],g),ct(()=>{var L,D;(D=(L=b.current)==null?void 0:L.getModel())==null||D.original.setValue(e||"")},[e],g),ct(()=>{let{original:L,modified:D}=b.current.getModel();I.current.editor.setModelLanguage(L,r||n||"text"),I.current.editor.setModelLanguage(D,i||n||"text")},[n,r,i],g),ct(()=>{var L;(L=I.current)==null||L.editor.setTheme(c)},[c],g),ct(()=>{var L;(L=b.current)==null||L.updateOptions(p)},[p],g);let C=_.useCallback(()=>{var K;if(!I.current)return;z.current(I.current);let L=xr(I.current,e||"",r||n||"text",o||""),D=xr(I.current,t||"",i||n||"text",s||"");(K=b.current)==null||K.setModel({original:L,modified:D})},[n,t,i,e,r,o,s]),A=_.useCallback(()=>{var L;!O.current&&j.current&&(b.current=I.current.editor.createDiffEditor(j.current,{automaticLayout:!0,...p}),C(),(L=I.current)==null||L.editor.setTheme(c),y(!0),O.current=!0)},[p,c,C]);_.useEffect(()=>{g&&P.current(b.current,I.current)},[g]),_.useEffect(()=>{!E&&!g&&A()},[E,g,A]);function T(){var D,K,$,q;let L=(D=b.current)==null?void 0:D.getModel();a||((K=L==null?void 0:L.original)==null||K.dispose()),u||(($=L==null?void 0:L.modified)==null||$.dispose()),(q=b.current)==null||q.dispose()}return Lt.createElement(Qm,{width:h,height:f,isEditorReady:g,loading:d,_ref:j,className:v,wrapperProps:x})}var lb=ob;_.memo(lb);function sb(e){let t=_.useRef();return _.useEffect(()=>{t.current=e},[e]),t.current}var ab=sb,yo=new Map;function ub({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:s="light",line:a,loading:u="Loading...",options:c={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:h="100%",height:v="100%",className:x,wrapperProps:N={},beforeMount:m=mi,onMount:g=mi,onChange:y,onValidate:E=mi}){let[k,b]=_.useState(!1),[I,j]=_.useState(!0),P=_.useRef(null),z=_.useRef(null),O=_.useRef(null),C=_.useRef(g),A=_.useRef(m),T=_.useRef(),L=_.useRef(r),D=ab(o),K=_.useRef(!1),$=_.useRef(!1);Gm(()=>{let W=Km.init();return W.then(Q=>(P.current=Q)&&j(!1)).catch(Q=>(Q==null?void 0:Q.type)!=="cancelation"&&console.error("Monaco initialization: error:",Q)),()=>z.current?w():W.cancel()}),ct(()=>{var Q,S,re,ne;let W=xr(P.current,e||r||"",t||i||"",o||n||"");W!==((Q=z.current)==null?void 0:Q.getModel())&&(p&&yo.set(D,(S=z.current)==null?void 0:S.saveViewState()),(re=z.current)==null||re.setModel(W),p&&((ne=z.current)==null||ne.restoreViewState(yo.get(o))))},[o],k),ct(()=>{var W;(W=z.current)==null||W.updateOptions(c)},[c],k),ct(()=>{!z.current||r===void 0||(z.current.getOption(P.current.editor.EditorOption.readOnly)?z.current.setValue(r):r!==z.current.getValue()&&($.current=!0,z.current.executeEdits("",[{range:z.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),z.current.pushUndoStop(),$.current=!1))},[r],k),ct(()=>{var Q,S;let W=(Q=z.current)==null?void 0:Q.getModel();W&&i&&((S=P.current)==null||S.editor.setModelLanguage(W,i))},[i],k),ct(()=>{var W;a!==void 0&&((W=z.current)==null||W.revealLine(a))},[a],k),ct(()=>{var W;(W=P.current)==null||W.editor.setTheme(s)},[s],k);let q=_.useCallback(()=>{var W;if(!(!O.current||!P.current)&&!K.current){A.current(P.current);let Q=o||n,S=xr(P.current,r||e||"",t||i||"",Q||"");z.current=(W=P.current)==null?void 0:W.editor.create(O.current,{model:S,automaticLayout:!0,...c},d),p&&z.current.restoreViewState(yo.get(Q)),P.current.editor.setTheme(s),a!==void 0&&z.current.revealLine(a),b(!0),K.current=!0}},[e,t,n,r,i,o,c,d,p,s,a]);_.useEffect(()=>{k&&C.current(z.current,P.current)},[k]),_.useEffect(()=>{!I&&!k&&q()},[I,k,q]),L.current=r,_.useEffect(()=>{var W,Q;k&&y&&((W=T.current)==null||W.dispose(),T.current=(Q=z.current)==null?void 0:Q.onDidChangeModelContent(S=>{$.current||y(z.current.getValue(),S)}))},[k,y]),_.useEffect(()=>{if(k){let W=P.current.editor.onDidChangeMarkers(Q=>{var re;let S=(re=z.current.getModel())==null?void 0:re.uri;if(S&&Q.find(ne=>ne.path===S.path)){let ne=P.current.editor.getModelMarkers({resource:S});E==null||E(ne)}});return()=>{W==null||W.dispose()}}return()=>{}},[k,E]);function w(){var W,Q;(W=T.current)==null||W.dispose(),f?p&&yo.set(o,z.current.saveViewState()):(Q=z.current.getModel())==null||Q.dispose(),z.current.dispose()}return Lt.createElement(Qm,{width:h,height:v,isEditorReady:k,loading:u,_ref:O,className:x,wrapperProps:N})}var cb=ub,db=_.memo(cb),Bi=db;function pb(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const fb=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,hb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,mb={};function qd(e,t){return(mb.jsx?hb:fb).test(e)}const gb=/[ \t\n\f\r]/g;function xb(e){return typeof e=="object"?e.type==="text"?Kd(e.value):!1:Kd(e)}function Kd(e){return e.replace(gb,"")===""}class Yi{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Yi.prototype.normal={};Yi.prototype.property={};Yi.prototype.space=void 0;function Ym(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Yi(n,r,t)}function Ta(e){return e.toLowerCase()}class lt{constructor(t,n){this.attribute=n,this.property=t}}lt.prototype.attribute="";lt.prototype.booleanish=!1;lt.prototype.boolean=!1;lt.prototype.commaOrSpaceSeparated=!1;lt.prototype.commaSeparated=!1;lt.prototype.defined=!1;lt.prototype.mustUseProperty=!1;lt.prototype.number=!1;lt.prototype.overloadedBoolean=!1;lt.prototype.property="";lt.prototype.spaceSeparated=!1;lt.prototype.space=void 0;let yb=0;const ie=Yn(),Le=Yn(),Pa=Yn(),V=Yn(),ve=Yn(),Sr=Yn(),at=Yn();function Yn(){return 2**++yb}const La=Object.freeze(Object.defineProperty({__proto__:null,boolean:ie,booleanish:Le,commaOrSpaceSeparated:at,commaSeparated:Sr,number:V,overloadedBoolean:Pa,spaceSeparated:ve},Symbol.toStringTag,{value:"Module"})),ys=Object.keys(La);class Hu extends lt{constructor(t,n,r,i){let o=-1;if(super(t,n),Qd(this,"space",i),typeof r=="number")for(;++o<ys.length;){const s=ys[o];Qd(this,ys[o],(r&La[s])===La[s])}}}Hu.prototype.defined=!0;function Qd(e,t,n){n&&(e[t]=n)}function Dr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new Hu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Ta(r)]=r,n[Ta(o.attribute)]=r}return new Yi(t,n,e.space)}const Xm=Dr({properties:{ariaActiveDescendant:null,ariaAtomic:Le,ariaAutoComplete:null,ariaBusy:Le,ariaChecked:Le,ariaColCount:V,ariaColIndex:V,ariaColSpan:V,ariaControls:ve,ariaCurrent:null,ariaDescribedBy:ve,ariaDetails:null,ariaDisabled:Le,ariaDropEffect:ve,ariaErrorMessage:null,ariaExpanded:Le,ariaFlowTo:ve,ariaGrabbed:Le,ariaHasPopup:null,ariaHidden:Le,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ve,ariaLevel:V,ariaLive:null,ariaModal:Le,ariaMultiLine:Le,ariaMultiSelectable:Le,ariaOrientation:null,ariaOwns:ve,ariaPlaceholder:null,ariaPosInSet:V,ariaPressed:Le,ariaReadOnly:Le,ariaRelevant:null,ariaRequired:Le,ariaRoleDescription:ve,ariaRowCount:V,ariaRowIndex:V,ariaRowSpan:V,ariaSelected:Le,ariaSetSize:V,ariaSort:null,ariaValueMax:V,ariaValueMin:V,ariaValueNow:V,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Zm(e,t){return t in e?e[t]:t}function eg(e,t){return Zm(e,t.toLowerCase())}const vb=Dr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Sr,acceptCharset:ve,accessKey:ve,action:null,allow:null,allowFullScreen:ie,allowPaymentRequest:ie,allowUserMedia:ie,alt:null,as:null,async:ie,autoCapitalize:null,autoComplete:ve,autoFocus:ie,autoPlay:ie,blocking:ve,capture:null,charSet:null,checked:ie,cite:null,className:ve,cols:V,colSpan:null,content:null,contentEditable:Le,controls:ie,controlsList:ve,coords:V|Sr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ie,defer:ie,dir:null,dirName:null,disabled:ie,download:Pa,draggable:Le,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ie,formTarget:null,headers:ve,height:V,hidden:Pa,high:V,href:null,hrefLang:null,htmlFor:ve,httpEquiv:ve,id:null,imageSizes:null,imageSrcSet:null,inert:ie,inputMode:null,integrity:null,is:null,isMap:ie,itemId:null,itemProp:ve,itemRef:ve,itemScope:ie,itemType:ve,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ie,low:V,manifest:null,max:null,maxLength:V,media:null,method:null,min:null,minLength:V,multiple:ie,muted:ie,name:null,nonce:null,noModule:ie,noValidate:ie,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ie,optimum:V,pattern:null,ping:ve,placeholder:null,playsInline:ie,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ie,referrerPolicy:null,rel:ve,required:ie,reversed:ie,rows:V,rowSpan:V,sandbox:ve,scope:null,scoped:ie,seamless:ie,selected:ie,shadowRootClonable:ie,shadowRootDelegatesFocus:ie,shadowRootMode:null,shape:null,size:V,sizes:null,slot:null,span:V,spellCheck:Le,src:null,srcDoc:null,srcLang:null,srcSet:null,start:V,step:null,style:null,tabIndex:V,target:null,title:null,translate:null,type:null,typeMustMatch:ie,useMap:null,value:Le,width:V,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ve,axis:null,background:null,bgColor:null,border:V,borderColor:null,bottomMargin:V,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ie,declare:ie,event:null,face:null,frame:null,frameBorder:null,hSpace:V,leftMargin:V,link:null,longDesc:null,lowSrc:null,marginHeight:V,marginWidth:V,noResize:ie,noHref:ie,noShade:ie,noWrap:ie,object:null,profile:null,prompt:null,rev:null,rightMargin:V,rules:null,scheme:null,scrolling:Le,standby:null,summary:null,text:null,topMargin:V,valueType:null,version:null,vAlign:null,vLink:null,vSpace:V,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ie,disableRemotePlayback:ie,prefix:null,property:null,results:V,security:null,unselectable:null},space:"html",transform:eg}),bb=Dr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:at,accentHeight:V,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:V,amplitude:V,arabicForm:null,ascent:V,attributeName:null,attributeType:null,azimuth:V,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:V,by:null,calcMode:null,capHeight:V,className:ve,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:V,diffuseConstant:V,direction:null,display:null,dur:null,divisor:V,dominantBaseline:null,download:ie,dx:null,dy:null,edgeMode:null,editable:null,elevation:V,enableBackground:null,end:null,event:null,exponent:V,externalResourcesRequired:null,fill:null,fillOpacity:V,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Sr,g2:Sr,glyphName:Sr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:V,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:V,horizOriginX:V,horizOriginY:V,id:null,ideographic:V,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:V,k:V,k1:V,k2:V,k3:V,k4:V,kernelMatrix:at,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:V,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:V,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:V,overlineThickness:V,paintOrder:null,panose1:null,path:null,pathLength:V,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ve,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:V,pointsAtY:V,pointsAtZ:V,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:at,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:at,rev:at,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:at,requiredFeatures:at,requiredFonts:at,requiredFormats:at,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:V,specularExponent:V,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:V,strikethroughThickness:V,string:null,stroke:null,strokeDashArray:at,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:V,strokeOpacity:V,strokeWidth:null,style:null,surfaceScale:V,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:at,tabIndex:V,tableValues:null,target:null,targetX:V,targetY:V,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:at,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:V,underlineThickness:V,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:V,values:null,vAlphabetic:V,vMathematical:V,vectorEffect:null,vHanging:V,vIdeographic:V,version:null,vertAdvY:V,vertOriginX:V,vertOriginY:V,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:V,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Zm}),tg=Dr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),ng=Dr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:eg}),rg=Dr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),wb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},kb=/[A-Z]/g,Gd=/-[a-z]/g,jb=/^data[-\w.:]+$/i;function Sb(e,t){const n=Ta(t);let r=t,i=lt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&jb.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(Gd,_b);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!Gd.test(o)){let s=o.replace(kb,Cb);s.charAt(0)!=="-"&&(s="-"+s),t="data"+s}}i=Hu}return new i(r,t)}function Cb(e){return"-"+e.toLowerCase()}function _b(e){return e.charAt(1).toUpperCase()}const Nb=Ym([Xm,vb,tg,ng,rg],"html"),qu=Ym([Xm,bb,tg,ng,rg],"svg");function Eb(e){return e.join(" ").trim()}var Ku={},Jd=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,zb=/\n/g,Tb=/^\s*/,Pb=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Lb=/^:\s*/,Ib=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Ab=/^[;\s]*/,Ob=/^\s+|\s+$/g,Mb=`
`,Yd="/",Xd="*",On="",Rb="comment",Db="declaration";function $b(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(v){var x=v.match(zb);x&&(n+=x.length);var N=v.lastIndexOf(Mb);r=~N?v.length-N:r+v.length}function o(){var v={line:n,column:r};return function(x){return x.position=new s(v),c(),x}}function s(v){this.start=v,this.end={line:n,column:r},this.source=t.source}s.prototype.content=e;function a(v){var x=new Error(t.source+":"+n+":"+r+": "+v);if(x.reason=v,x.filename=t.source,x.line=n,x.column=r,x.source=e,!t.silent)throw x}function u(v){var x=v.exec(e);if(x){var N=x[0];return i(N),e=e.slice(N.length),x}}function c(){u(Tb)}function d(v){var x;for(v=v||[];x=p();)x!==!1&&v.push(x);return v}function p(){var v=o();if(!(Yd!=e.charAt(0)||Xd!=e.charAt(1))){for(var x=2;On!=e.charAt(x)&&(Xd!=e.charAt(x)||Yd!=e.charAt(x+1));)++x;if(x+=2,On===e.charAt(x-1))return a("End of comment missing");var N=e.slice(2,x-2);return r+=2,i(N),e=e.slice(x),r+=2,v({type:Rb,comment:N})}}function f(){var v=o(),x=u(Pb);if(x){if(p(),!u(Lb))return a("property missing ':'");var N=u(Ib),m=v({type:Db,property:Zd(x[0].replace(Jd,On)),value:N?Zd(N[0].replace(Jd,On)):On});return u(Ab),m}}function h(){var v=[];d(v);for(var x;x=f();)x!==!1&&(v.push(x),d(v));return v}return c(),h()}function Zd(e){return e?e.replace(Ob,On):On}var Fb=$b,Bb=Do&&Do.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ku,"__esModule",{value:!0});Ku.default=Vb;const Ub=Bb(Fb);function Vb(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,Ub.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:s,value:a}=o;i?t(s,a,o):a&&(n=n||{},n[s]=a)}),n}var Al={};Object.defineProperty(Al,"__esModule",{value:!0});Al.camelCase=void 0;var Wb=/^--[a-zA-Z0-9_-]+$/,Hb=/-([a-z])/g,qb=/^[^-]+$/,Kb=/^-(webkit|moz|ms|o|khtml)-/,Qb=/^-(ms)-/,Gb=function(e){return!e||qb.test(e)||Wb.test(e)},Jb=function(e,t){return t.toUpperCase()},ep=function(e,t){return"".concat(t,"-")},Yb=function(e,t){return t===void 0&&(t={}),Gb(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Qb,ep):e=e.replace(Kb,ep),e.replace(Hb,Jb))};Al.camelCase=Yb;var Xb=Do&&Do.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Zb=Xb(Ku),ew=Al;function Ia(e,t){var n={};return!e||typeof e!="string"||(0,Zb.default)(e,function(r,i){r&&i&&(n[(0,ew.camelCase)(r,t)]=i)}),n}Ia.default=Ia;var tw=Ia;const nw=hl(tw),ig=og("end"),Qu=og("start");function og(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function rw(e){const t=Qu(e),n=ig(e);if(t&&n)return{start:t,end:n}}function gi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?tp(e.position):"start"in e||"end"in e?tp(e):"line"in e||"column"in e?Aa(e):""}function Aa(e){return np(e&&e.line)+":"+np(e&&e.column)}function tp(e){return Aa(e&&e.start)+"-"+Aa(e&&e.end)}function np(e){return e&&typeof e=="number"?e:1}class qe extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(s=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const u=r.indexOf(":");u===-1?o.ruleId=r:(o.source=r.slice(0,u),o.ruleId=r.slice(u+1))}if(!o.place&&o.ancestors&&o.ancestors){const u=o.ancestors[o.ancestors.length-1];u&&(o.place=u.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=gi(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}qe.prototype.file="";qe.prototype.name="";qe.prototype.reason="";qe.prototype.message="";qe.prototype.stack="";qe.prototype.column=void 0;qe.prototype.line=void 0;qe.prototype.ancestors=void 0;qe.prototype.cause=void 0;qe.prototype.fatal=void 0;qe.prototype.place=void 0;qe.prototype.ruleId=void 0;qe.prototype.source=void 0;const Gu={}.hasOwnProperty,iw=new Map,ow=/[A-Z]/g,lw=new Set(["table","tbody","thead","tfoot","tr"]),sw=new Set(["td","th"]),lg="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function aw(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=gw(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=mw(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?qu:Nb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=sg(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function sg(e,t,n){if(t.type==="element")return uw(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return cw(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return pw(e,t,n);if(t.type==="mdxjsEsm")return dw(e,t);if(t.type==="root")return fw(e,t,n);if(t.type==="text")return hw(e,t)}function uw(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=qu,e.schema=i),e.ancestors.push(t);const o=ug(e,t.tagName,!1),s=xw(e,t);let a=Yu(e,t);return lw.has(t.tagName)&&(a=a.filter(function(u){return typeof u=="string"?!xb(u):!0})),ag(e,s,o,t),Ju(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function cw(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ui(e,t.position)}function dw(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ui(e,t.position)}function pw(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=qu,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:ug(e,t.name,!0),s=yw(e,t),a=Yu(e,t);return ag(e,s,o,t),Ju(s,a),e.ancestors.pop(),e.schema=r,e.create(t,o,s,n)}function fw(e,t,n){const r={};return Ju(r,Yu(e,t)),e.create(t,e.Fragment,r,n)}function hw(e,t){return t.value}function ag(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Ju(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function mw(e,t,n){return r;function r(i,o,s,a){const c=Array.isArray(s.children)?n:t;return a?c(o,s,a):c(o,s)}}function gw(e,t){return n;function n(r,i,o,s){const a=Array.isArray(o.children),u=Qu(r);return t(i,o,s,a,{columnNumber:u?u.column-1:void 0,fileName:e,lineNumber:u?u.line:void 0},void 0)}}function xw(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Gu.call(t.properties,i)){const o=vw(e,i,t.properties[i]);if(o){const[s,a]=o;e.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&sw.has(t.tagName)?r=a:n[s]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function yw(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else Ui(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else Ui(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Yu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:iw;for(;++r<t.children.length;){const o=t.children[r];let s;if(e.passKeys){const u=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(u){const c=i.get(u)||0;s=u+"-"+c,i.set(u,c+1)}}const a=sg(e,o,s);a!==void 0&&n.push(a)}return n}function vw(e,t,n){const r=Sb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?pb(n):Eb(n)),r.property==="style"){let i=typeof n=="object"?n:bw(e,String(n));return e.stylePropertyNameCase==="css"&&(i=ww(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?wb[r.property]||r.property:r.attribute,n]}}function bw(e,t){try{return nw(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new qe("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=lg+"#cannot-parse-style-attribute",i}}function ug(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,s;for(;++o<i.length;){const a=qd(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=s}else r=qd(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Gu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ui(e)}function Ui(e,t){const n=new qe("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=lg+"#cannot-handle-mdx-estrees-without-createevaluater",n}function ww(e){const t={};let n;for(n in e)Gu.call(e,n)&&(t[kw(n)]=e[n]);return t}function kw(e){let t=e.replace(ow,jw);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function jw(e){return"-"+e.toLowerCase()}const vs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Sw={};function Cw(e,t){const n=Sw,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return cg(e,r,i)}function cg(e,t,n){if(_w(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return rp(e.children,t,n)}return Array.isArray(e)?rp(e,t,n):""}function rp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=cg(e[i],t,n);return r.join("")}function _w(e){return!!(e&&typeof e=="object")}const ip=document.createElement("i");function Xu(e){const t="&"+e+";";ip.innerHTML=t;const n=ip.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Kt(e,t,n,r){const i=e.length;let o=0,s;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)s=Array.from(r),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<r.length;)s=r.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function kt(e,t){return e.length>0?(Kt(e,e.length,0,t),e):t}const op={}.hasOwnProperty;function Nw(e){const t={};let n=-1;for(;++n<e.length;)Ew(t,e[n]);return t}function Ew(e,t){let n;for(n in t){const i=(op.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let s;if(o)for(s in o){op.call(i,s)||(i[s]=[]);const a=o[s];zw(i[s],Array.isArray(a)?a:a?[a]:[])}}}function zw(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Kt(e,0,0,r)}function dg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Cr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Vt=Pn(/[A-Za-z]/),ft=Pn(/[\dA-Za-z]/),Tw=Pn(/[#-'*+\--9=?A-Z^-~]/);function Oa(e){return e!==null&&(e<32||e===127)}const Ma=Pn(/\d/),Pw=Pn(/[\dA-Fa-f]/),Lw=Pn(/[!-/:-@[-`{-~]/);function ee(e){return e!==null&&e<-2}function ot(e){return e!==null&&(e<0||e===32)}function fe(e){return e===-2||e===-1||e===32}const Iw=Pn(new RegExp("\\p{P}|\\p{S}","u")),Aw=Pn(/\s/);function Pn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function $r(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let s="";if(o===37&&ft(e.charCodeAt(n+1))&&ft(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),i=1):s="�"}else s=String.fromCharCode(o);s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function we(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(u){return fe(u)?(e.enter(n),a(u)):t(u)}function a(u){return fe(u)&&o++<i?(e.consume(u),a):(e.exit(n),t(u))}}const Ow={tokenize:Mw};function Mw(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),we(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const u=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=u),n=u,s(a)}function s(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return ee(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),s)}}const Rw={tokenize:Dw},lp={tokenize:$w};function Dw(e){const t=this,n=[];let r=0,i,o,s;return a;function a(y){if(r<n.length){const E=n[r];return t.containerState=E[1],e.attempt(E[0].continuation,u,c)(y)}return c(y)}function u(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&g();const E=t.events.length;let k=E,b;for(;k--;)if(t.events[k][0]==="exit"&&t.events[k][1].type==="chunkFlow"){b=t.events[k][1].end;break}m(r);let I=E;for(;I<t.events.length;)t.events[I][1].end={...b},I++;return Kt(t.events,k+1,0,t.events.slice(E)),t.events.length=I,c(y)}return a(y)}function c(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return v(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(lp,d,p)(y)}function d(y){return i&&g(),m(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,s=t.now().offset,v(y)}function f(y){return t.containerState={},e.attempt(lp,h,v)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function v(y){if(y===null){i&&g(),m(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),x(y)}function x(y){if(y===null){N(e.exit("chunkFlow"),!0),m(0),e.consume(y);return}return ee(y)?(e.consume(y),N(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(y),x)}function N(y,E){const k=t.sliceStream(y);if(E&&k.push(null),y.previous=o,o&&(o.next=y),o=y,i.defineSkip(y.start),i.write(k),t.parser.lazy[y.start.line]){let b=i.events.length;for(;b--;)if(i.events[b][1].start.offset<s&&(!i.events[b][1].end||i.events[b][1].end.offset>s))return;const I=t.events.length;let j=I,P,z;for(;j--;)if(t.events[j][0]==="exit"&&t.events[j][1].type==="chunkFlow"){if(P){z=t.events[j][1].end;break}P=!0}for(m(r),b=I;b<t.events.length;)t.events[b][1].end={...z},b++;Kt(t.events,j+1,0,t.events.slice(I)),t.events.length=b}}function m(y){let E=n.length;for(;E-- >y;){const k=n[E];t.containerState=k[1],k[0].exit.call(t,e)}n.length=y}function g(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function $w(e,t,n){return we(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function sp(e){if(e===null||ot(e)||Aw(e))return 1;if(Iw(e))return 2}function Zu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Ra={name:"attention",resolveAll:Fw,tokenize:Bw};function Fw(e,t){let n=-1,r,i,o,s,a,u,c,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};ap(p,-u),ap(f,u),s={type:u>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},a={type:u>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:u>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:u>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},e[r][1].end={...s.start},e[n][1].start={...a.end},c=[],e[r][1].end.offset-e[r][1].start.offset&&(c=kt(c,[["enter",e[r][1],t],["exit",e[r][1],t]])),c=kt(c,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",o,t]]),c=kt(c,Zu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),c=kt(c,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,c=kt(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Kt(e,r-1,n-r+3,c),n=r+c.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Bw(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=sp(r);let o;return s;function s(u){return o=u,e.enter("attentionSequence"),a(u)}function a(u){if(u===o)return e.consume(u),a;const c=e.exit("attentionSequence"),d=sp(u),p=!d||d===2&&i||n.includes(u),f=!i||i===2&&d||n.includes(r);return c._open=!!(o===42?p:p&&(i||!f)),c._close=!!(o===42?f:f&&(d||!p)),t(u)}}function ap(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Uw={name:"autolink",tokenize:Vw};function Vw(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(h){return Vt(h)?(e.consume(h),s):h===64?n(h):c(h)}function s(h){return h===43||h===45||h===46||ft(h)?(r=1,a(h)):c(h)}function a(h){return h===58?(e.consume(h),r=0,u):(h===43||h===45||h===46||ft(h))&&r++<32?(e.consume(h),a):(r=0,c(h))}function u(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Oa(h)?n(h):(e.consume(h),u)}function c(h){return h===64?(e.consume(h),d):Tw(h)?(e.consume(h),c):n(h)}function d(h){return ft(h)?p(h):n(h)}function p(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||ft(h))&&r++<63){const v=h===45?f:p;return e.consume(h),v}return n(h)}}const Ol={partial:!0,tokenize:Ww};function Ww(e,t,n){return r;function r(o){return fe(o)?we(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ee(o)?t(o):n(o)}}const pg={continuation:{tokenize:qw},exit:Kw,name:"blockQuote",tokenize:Hw};function Hw(e,t,n){const r=this;return i;function i(s){if(s===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return n(s)}function o(s){return fe(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(s))}}function qw(e,t,n){const r=this;return i;function i(s){return fe(s)?we(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(pg,t,n)(s)}}function Kw(e){e.exit("blockQuote")}const fg={name:"characterEscape",tokenize:Qw};function Qw(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Lw(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const hg={name:"characterReference",tokenize:Gw};function Gw(e,t,n){const r=this;let i=0,o,s;return a;function a(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),u}function u(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),o=31,s=ft,d(p))}function c(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=Pw,d):(e.enter("characterReferenceValue"),o=7,s=Ma,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return s===ft&&!Xu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return s(p)&&i++<o?(e.consume(p),d):n(p)}}const up={partial:!0,tokenize:Yw},cp={concrete:!0,name:"codeFenced",tokenize:Jw};function Jw(e,t,n){const r=this,i={partial:!0,tokenize:k};let o=0,s=0,a;return u;function u(b){return c(b)}function c(b){const I=r.events[r.events.length-1];return o=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,a=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(b)}function d(b){return b===a?(s++,e.consume(b),d):s<3?n(b):(e.exit("codeFencedFenceSequence"),fe(b)?we(e,p,"whitespace")(b):p(b))}function p(b){return b===null||ee(b)?(e.exit("codeFencedFence"),r.interrupt?t(b):e.check(up,x,E)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(b))}function f(b){return b===null||ee(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(b)):fe(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),we(e,h,"whitespace")(b)):b===96&&b===a?n(b):(e.consume(b),f)}function h(b){return b===null||ee(b)?p(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(b))}function v(b){return b===null||ee(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(b)):b===96&&b===a?n(b):(e.consume(b),v)}function x(b){return e.attempt(i,E,N)(b)}function N(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),m}function m(b){return o>0&&fe(b)?we(e,g,"linePrefix",o+1)(b):g(b)}function g(b){return b===null||ee(b)?e.check(up,x,E)(b):(e.enter("codeFlowValue"),y(b))}function y(b){return b===null||ee(b)?(e.exit("codeFlowValue"),g(b)):(e.consume(b),y)}function E(b){return e.exit("codeFenced"),t(b)}function k(b,I,j){let P=0;return z;function z(L){return b.enter("lineEnding"),b.consume(L),b.exit("lineEnding"),O}function O(L){return b.enter("codeFencedFence"),fe(L)?we(b,C,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):C(L)}function C(L){return L===a?(b.enter("codeFencedFenceSequence"),A(L)):j(L)}function A(L){return L===a?(P++,b.consume(L),A):P>=s?(b.exit("codeFencedFenceSequence"),fe(L)?we(b,T,"whitespace")(L):T(L)):j(L)}function T(L){return L===null||ee(L)?(b.exit("codeFencedFence"),I(L)):j(L)}}}function Yw(e,t,n){const r=this;return i;function i(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}const bs={name:"codeIndented",tokenize:Zw},Xw={partial:!0,tokenize:ek};function Zw(e,t,n){const r=this;return i;function i(c){return e.enter("codeIndented"),we(e,o,"linePrefix",5)(c)}function o(c){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?s(c):n(c)}function s(c){return c===null?u(c):ee(c)?e.attempt(Xw,s,u)(c):(e.enter("codeFlowValue"),a(c))}function a(c){return c===null||ee(c)?(e.exit("codeFlowValue"),s(c)):(e.consume(c),a)}function u(c){return e.exit("codeIndented"),t(c)}}function ek(e,t,n){const r=this;return i;function i(s){return r.parser.lazy[r.now().line]?n(s):ee(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),i):we(e,o,"linePrefix",5)(s)}function o(s){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):ee(s)?i(s):n(s)}}const tk={name:"codeText",previous:rk,resolve:nk,tokenize:ik};function nk(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function rk(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function ik(e,t,n){let r=0,i,o;return s;function s(p){return e.enter("codeText"),e.enter("codeTextSequence"),a(p)}function a(p){return p===96?(e.consume(p),r++,a):(e.exit("codeTextSequence"),u(p))}function u(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),u):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):ee(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("codeTextData"),c(p))}function c(p){return p===null||p===32||p===96||ee(p)?(e.exit("codeTextData"),u(p)):(e.consume(p),c)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",c(p))}}class ok{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&Yr(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Yr(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Yr(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Yr(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Yr(this.left,n.reverse())}}}function Yr(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function mg(e){const t={};let n=-1,r,i,o,s,a,u,c;const d=new ok(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(u=r[1]._tokenizer.events,o=0,o<u.length&&u[o][1].type==="lineEndingBlank"&&(o+=2),o<u.length&&u[o][1].type==="content"))for(;++o<u.length&&u[o][1].type!=="content";)u[o][1].type==="chunkText"&&(u[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,lk(d,n)),n=t[n],c=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(s=d.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),s[1].type="lineEnding",i=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},a=d.slice(i,n),a.unshift(r),d.splice(i,n-i+1,a))}}return Kt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!c}function lk(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let s=n._tokenizer;s||(s=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const a=s.events,u=[],c={};let d,p,f=-1,h=n,v=0,x=0;const N=[x];for(;h;){for(;e.get(++i)[1]!==h;);o.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),p&&s.defineSkip(h.start),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(d),h._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),p=h,h=h.next}for(h=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(x=f+1,N.push(x),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(s.events=[],h?(h._tokenizer=void 0,h.previous=void 0):N.pop(),f=N.length;f--;){const m=a.slice(N[f],N[f+1]),g=o.pop();u.push([g,g+m.length-1]),e.splice(g,2,m)}for(u.reverse(),f=-1;++f<u.length;)c[v+u[f][0]]=v+u[f][1],v+=u[f][1]-u[f][0]-1;return c}const sk={resolve:uk,tokenize:ck},ak={partial:!0,tokenize:dk};function uk(e){return mg(e),e}function ck(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):ee(a)?e.check(ak,s,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function s(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function dk(e,t,n){const r=this;return i;function i(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),we(e,o,"linePrefix")}function o(s){if(s===null||ee(s))return n(s);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(s):e.interrupt(r.parser.constructs.flow,n,t)(s)}}function gg(e,t,n,r,i,o,s,a,u){const c=u||Number.POSITIVE_INFINITY;let d=0;return p;function p(m){return m===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(m),e.exit(o),f):m===null||m===32||m===41||Oa(m)?n(m):(e.enter(r),e.enter(s),e.enter(a),e.enter("chunkString",{contentType:"string"}),x(m))}function f(m){return m===62?(e.enter(o),e.consume(m),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(m))}function h(m){return m===62?(e.exit("chunkString"),e.exit(a),f(m)):m===null||m===60||ee(m)?n(m):(e.consume(m),m===92?v:h)}function v(m){return m===60||m===62||m===92?(e.consume(m),h):h(m)}function x(m){return!d&&(m===null||m===41||ot(m))?(e.exit("chunkString"),e.exit(a),e.exit(s),e.exit(r),t(m)):d<c&&m===40?(e.consume(m),d++,x):m===41?(e.consume(m),d--,x):m===null||m===32||m===40||Oa(m)?n(m):(e.consume(m),m===92?N:x)}function N(m){return m===40||m===41||m===92?(e.consume(m),x):x(m)}}function xg(e,t,n,r,i,o){const s=this;let a=0,u;return c;function c(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(o),d}function d(h){return a>999||h===null||h===91||h===93&&!u||h===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(h):h===93?(e.exit(o),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):ee(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(h))}function p(h){return h===null||h===91||h===93||ee(h)||a++>999?(e.exit("chunkString"),d(h)):(e.consume(h),u||(u=!fe(h)),h===92?f:p)}function f(h){return h===91||h===92||h===93?(e.consume(h),a++,p):p(h)}}function yg(e,t,n,r,i,o){let s;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),s=f===40?41:f,u):n(f)}function u(f){return f===s?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),c(f))}function c(f){return f===s?(e.exit(o),u(s)):f===null?n(f):ee(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),we(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===s||f===null||ee(f)?(e.exit("chunkString"),c(f)):(e.consume(f),f===92?p:d)}function p(f){return f===s||f===92?(e.consume(f),d):d(f)}}function xi(e,t){let n;return r;function r(i){return ee(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):fe(i)?we(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const pk={name:"definition",tokenize:hk},fk={partial:!0,tokenize:mk};function hk(e,t,n){const r=this;let i;return o;function o(h){return e.enter("definition"),s(h)}function s(h){return xg.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return i=Cr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),u):n(h)}function u(h){return ot(h)?xi(e,c)(h):c(h)}function c(h){return gg(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(fk,p,p)(h)}function p(h){return fe(h)?we(e,f,"whitespace")(h):f(h)}function f(h){return h===null||ee(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function mk(e,t,n){return r;function r(a){return ot(a)?xi(e,i)(a):n(a)}function i(a){return yg(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return fe(a)?we(e,s,"whitespace")(a):s(a)}function s(a){return a===null||ee(a)?t(a):n(a)}}const gk={name:"hardBreakEscape",tokenize:xk};function xk(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ee(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const yk={name:"headingAtx",resolve:vk,tokenize:bk};function vk(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Kt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function bk(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),s(d)}function s(d){return d===35&&r++<6?(e.consume(d),s):d===null||ot(d)?(e.exit("atxHeadingSequence"),a(d)):n(d)}function a(d){return d===35?(e.enter("atxHeadingSequence"),u(d)):d===null||ee(d)?(e.exit("atxHeading"),t(d)):fe(d)?we(e,a,"whitespace")(d):(e.enter("atxHeadingText"),c(d))}function u(d){return d===35?(e.consume(d),u):(e.exit("atxHeadingSequence"),a(d))}function c(d){return d===null||d===35||ot(d)?(e.exit("atxHeadingText"),a(d)):(e.consume(d),c)}}const wk=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],dp=["pre","script","style","textarea"],kk={concrete:!0,name:"htmlFlow",resolveTo:Ck,tokenize:_k},jk={partial:!0,tokenize:Ek},Sk={partial:!0,tokenize:Nk};function Ck(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function _k(e,t,n){const r=this;let i,o,s,a,u;return c;function c(S){return d(S)}function d(S){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(S),p}function p(S){return S===33?(e.consume(S),f):S===47?(e.consume(S),o=!0,x):S===63?(e.consume(S),i=3,r.interrupt?t:w):Vt(S)?(e.consume(S),s=String.fromCharCode(S),N):n(S)}function f(S){return S===45?(e.consume(S),i=2,h):S===91?(e.consume(S),i=5,a=0,v):Vt(S)?(e.consume(S),i=4,r.interrupt?t:w):n(S)}function h(S){return S===45?(e.consume(S),r.interrupt?t:w):n(S)}function v(S){const re="CDATA[";return S===re.charCodeAt(a++)?(e.consume(S),a===re.length?r.interrupt?t:C:v):n(S)}function x(S){return Vt(S)?(e.consume(S),s=String.fromCharCode(S),N):n(S)}function N(S){if(S===null||S===47||S===62||ot(S)){const re=S===47,ne=s.toLowerCase();return!re&&!o&&dp.includes(ne)?(i=1,r.interrupt?t(S):C(S)):wk.includes(s.toLowerCase())?(i=6,re?(e.consume(S),m):r.interrupt?t(S):C(S)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(S):o?g(S):y(S))}return S===45||ft(S)?(e.consume(S),s+=String.fromCharCode(S),N):n(S)}function m(S){return S===62?(e.consume(S),r.interrupt?t:C):n(S)}function g(S){return fe(S)?(e.consume(S),g):z(S)}function y(S){return S===47?(e.consume(S),z):S===58||S===95||Vt(S)?(e.consume(S),E):fe(S)?(e.consume(S),y):z(S)}function E(S){return S===45||S===46||S===58||S===95||ft(S)?(e.consume(S),E):k(S)}function k(S){return S===61?(e.consume(S),b):fe(S)?(e.consume(S),k):y(S)}function b(S){return S===null||S===60||S===61||S===62||S===96?n(S):S===34||S===39?(e.consume(S),u=S,I):fe(S)?(e.consume(S),b):j(S)}function I(S){return S===u?(e.consume(S),u=null,P):S===null||ee(S)?n(S):(e.consume(S),I)}function j(S){return S===null||S===34||S===39||S===47||S===60||S===61||S===62||S===96||ot(S)?k(S):(e.consume(S),j)}function P(S){return S===47||S===62||fe(S)?y(S):n(S)}function z(S){return S===62?(e.consume(S),O):n(S)}function O(S){return S===null||ee(S)?C(S):fe(S)?(e.consume(S),O):n(S)}function C(S){return S===45&&i===2?(e.consume(S),D):S===60&&i===1?(e.consume(S),K):S===62&&i===4?(e.consume(S),W):S===63&&i===3?(e.consume(S),w):S===93&&i===5?(e.consume(S),q):ee(S)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(jk,Q,A)(S)):S===null||ee(S)?(e.exit("htmlFlowData"),A(S)):(e.consume(S),C)}function A(S){return e.check(Sk,T,Q)(S)}function T(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),L}function L(S){return S===null||ee(S)?A(S):(e.enter("htmlFlowData"),C(S))}function D(S){return S===45?(e.consume(S),w):C(S)}function K(S){return S===47?(e.consume(S),s="",$):C(S)}function $(S){if(S===62){const re=s.toLowerCase();return dp.includes(re)?(e.consume(S),W):C(S)}return Vt(S)&&s.length<8?(e.consume(S),s+=String.fromCharCode(S),$):C(S)}function q(S){return S===93?(e.consume(S),w):C(S)}function w(S){return S===62?(e.consume(S),W):S===45&&i===2?(e.consume(S),w):C(S)}function W(S){return S===null||ee(S)?(e.exit("htmlFlowData"),Q(S)):(e.consume(S),W)}function Q(S){return e.exit("htmlFlow"),t(S)}}function Nk(e,t,n){const r=this;return i;function i(s){return ee(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):n(s)}function o(s){return r.parser.lazy[r.now().line]?n(s):t(s)}}function Ek(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ol,t,n)}}const zk={name:"htmlText",tokenize:Tk};function Tk(e,t,n){const r=this;let i,o,s;return a;function a(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),u}function u(w){return w===33?(e.consume(w),c):w===47?(e.consume(w),k):w===63?(e.consume(w),y):Vt(w)?(e.consume(w),j):n(w)}function c(w){return w===45?(e.consume(w),d):w===91?(e.consume(w),o=0,v):Vt(w)?(e.consume(w),g):n(w)}function d(w){return w===45?(e.consume(w),h):n(w)}function p(w){return w===null?n(w):w===45?(e.consume(w),f):ee(w)?(s=p,K(w)):(e.consume(w),p)}function f(w){return w===45?(e.consume(w),h):p(w)}function h(w){return w===62?D(w):w===45?f(w):p(w)}function v(w){const W="CDATA[";return w===W.charCodeAt(o++)?(e.consume(w),o===W.length?x:v):n(w)}function x(w){return w===null?n(w):w===93?(e.consume(w),N):ee(w)?(s=x,K(w)):(e.consume(w),x)}function N(w){return w===93?(e.consume(w),m):x(w)}function m(w){return w===62?D(w):w===93?(e.consume(w),m):x(w)}function g(w){return w===null||w===62?D(w):ee(w)?(s=g,K(w)):(e.consume(w),g)}function y(w){return w===null?n(w):w===63?(e.consume(w),E):ee(w)?(s=y,K(w)):(e.consume(w),y)}function E(w){return w===62?D(w):y(w)}function k(w){return Vt(w)?(e.consume(w),b):n(w)}function b(w){return w===45||ft(w)?(e.consume(w),b):I(w)}function I(w){return ee(w)?(s=I,K(w)):fe(w)?(e.consume(w),I):D(w)}function j(w){return w===45||ft(w)?(e.consume(w),j):w===47||w===62||ot(w)?P(w):n(w)}function P(w){return w===47?(e.consume(w),D):w===58||w===95||Vt(w)?(e.consume(w),z):ee(w)?(s=P,K(w)):fe(w)?(e.consume(w),P):D(w)}function z(w){return w===45||w===46||w===58||w===95||ft(w)?(e.consume(w),z):O(w)}function O(w){return w===61?(e.consume(w),C):ee(w)?(s=O,K(w)):fe(w)?(e.consume(w),O):P(w)}function C(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,A):ee(w)?(s=C,K(w)):fe(w)?(e.consume(w),C):(e.consume(w),T)}function A(w){return w===i?(e.consume(w),i=void 0,L):w===null?n(w):ee(w)?(s=A,K(w)):(e.consume(w),A)}function T(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||ot(w)?P(w):(e.consume(w),T)}function L(w){return w===47||w===62||ot(w)?P(w):n(w)}function D(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function K(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),$}function $(w){return fe(w)?we(e,q,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):q(w)}function q(w){return e.enter("htmlTextData"),s(w)}}const ec={name:"labelEnd",resolveAll:Ak,resolveTo:Ok,tokenize:Mk},Pk={tokenize:Rk},Lk={tokenize:Dk},Ik={tokenize:$k};function Ak(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Kt(e,0,e.length,n),e}function Ok(e,t){let n=e.length,r=0,i,o,s,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(s){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(s=n);const u={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[s-2][1].start}};return a=[["enter",u,t],["enter",c,t]],a=kt(a,e.slice(o+1,o+r+3)),a=kt(a,[["enter",d,t]]),a=kt(a,Zu(t.parser.constructs.insideSpan.null,e.slice(o+r+4,s-3),t)),a=kt(a,[["exit",d,t],e[s-2],e[s-1],["exit",c,t]]),a=kt(a,e.slice(s+1)),a=kt(a,[["exit",u,t]]),Kt(e,o,e.length,a),e}function Mk(e,t,n){const r=this;let i=r.events.length,o,s;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(f){return o?o._inactive?p(f):(s=r.parser.defined.includes(Cr(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),u):n(f)}function u(f){return f===40?e.attempt(Pk,d,s?d:p)(f):f===91?e.attempt(Lk,d,s?c:p)(f):s?d(f):p(f)}function c(f){return e.attempt(Ik,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function Rk(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return ot(p)?xi(e,o)(p):o(p)}function o(p){return p===41?d(p):gg(e,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function s(p){return ot(p)?xi(e,u)(p):d(p)}function a(p){return n(p)}function u(p){return p===34||p===39||p===40?yg(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function c(p){return ot(p)?xi(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function Dk(e,t,n){const r=this;return i;function i(a){return xg.call(r,e,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Cr(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function s(a){return n(a)}}function $k(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Fk={name:"labelStartImage",resolveAll:ec.resolveAll,tokenize:Bk};function Bk(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Uk={name:"labelStartLink",resolveAll:ec.resolveAll,tokenize:Vk};function Vk(e,t,n){const r=this;return i;function i(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(s):t(s)}}const ws={name:"lineEnding",tokenize:Wk};function Wk(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),we(e,t,"linePrefix")}}const Mo={name:"thematicBreak",tokenize:Hk};function Hk(e,t,n){let r=0,i;return o;function o(c){return e.enter("thematicBreak"),s(c)}function s(c){return i=c,a(c)}function a(c){return c===i?(e.enter("thematicBreakSequence"),u(c)):r>=3&&(c===null||ee(c))?(e.exit("thematicBreak"),t(c)):n(c)}function u(c){return c===i?(e.consume(c),r++,u):(e.exit("thematicBreakSequence"),fe(c)?we(e,a,"whitespace")(c):a(c))}}const Ze={continuation:{tokenize:Gk},exit:Yk,name:"list",tokenize:Qk},qk={partial:!0,tokenize:Xk},Kk={partial:!0,tokenize:Jk};function Qk(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,s=0;return a;function a(h){const v=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Ma(h)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(Mo,n,c)(h):c(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),u(h)}return n(h)}function u(h){return Ma(h)&&++s<10?(e.consume(h),u):(!r.interrupt||s<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),c(h)):n(h)}function c(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Ol,r.interrupt?n:d,e.attempt(qk,f,p))}function d(h){return r.containerState.initialBlankLine=!0,o++,f(h)}function p(h){return fe(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function Gk(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ol,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,we(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!fe(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,s(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Kk,t,s)(a))}function s(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,we(e,e.attempt(Ze,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Jk(e,t,n){const r=this;return we(e,i,"listItemIndent",r.containerState.size+1);function i(o){const s=r.events[r.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===r.containerState.size?t(o):n(o)}}function Yk(e){e.exit(this.containerState.type)}function Xk(e,t,n){const r=this;return we(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const s=r.events[r.events.length-1];return!fe(o)&&s&&s[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const pp={name:"setextUnderline",resolveTo:Zk,tokenize:e2};function Zk(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",s,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=s,e.push(["exit",s,t]),e}function e2(e,t,n){const r=this;let i;return o;function o(c){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=c,s(c)):n(c)}function s(c){return e.enter("setextHeadingLineSequence"),a(c)}function a(c){return c===i?(e.consume(c),a):(e.exit("setextHeadingLineSequence"),fe(c)?we(e,u,"lineSuffix")(c):u(c))}function u(c){return c===null||ee(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const t2={tokenize:n2};function n2(e){const t=this,n=e.attempt(Ol,r,e.attempt(this.parser.constructs.flowInitial,i,we(e,e.attempt(this.parser.constructs.flow,i,e.attempt(sk,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const r2={resolveAll:bg()},i2=vg("string"),o2=vg("text");function vg(e){return{resolveAll:bg(e==="text"?l2:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,s,a);return s;function s(d){return c(d)?o(d):a(d)}function a(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),u}function u(d){return c(d)?(n.exit("data"),o(d)):(n.consume(d),u)}function c(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const h=p[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function bg(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function l2(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,s=-1,a=0,u;for(;o--;){const c=i[o];if(typeof c=="string"){for(s=c.length;c.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(c===-2)u=!0,a++;else if(c!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const c={type:n===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:r.start._bufferIndex+s,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...c.start},r.start.offset===r.end.offset?Object.assign(r,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const s2={42:Ze,43:Ze,45:Ze,48:Ze,49:Ze,50:Ze,51:Ze,52:Ze,53:Ze,54:Ze,55:Ze,56:Ze,57:Ze,62:pg},a2={91:pk},u2={[-2]:bs,[-1]:bs,32:bs},c2={35:yk,42:Mo,45:[pp,Mo],60:kk,61:pp,95:Mo,96:cp,126:cp},d2={38:hg,92:fg},p2={[-5]:ws,[-4]:ws,[-3]:ws,33:Fk,38:hg,42:Ra,60:[Uw,zk],91:Uk,92:[gk,fg],93:ec,95:Ra,96:tk},f2={null:[Ra,r2]},h2={null:[42,95]},m2={null:[]},g2=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:h2,contentInitial:a2,disable:m2,document:s2,flow:c2,flowInitial:u2,insideSpan:f2,string:d2,text:p2},Symbol.toStringTag,{value:"Module"}));function x2(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let s=[],a=[];const u={attempt:I(k),check:I(b),consume:g,enter:y,exit:E,interrupt:I(b,{interrupt:!0})},c={code:null,containerState:{},defineSkip:x,events:[],now:v,parser:e,previous:null,sliceSerialize:f,sliceStream:h,write:p};let d=t.tokenize.call(c,u);return t.resolveAll&&o.push(t),c;function p(O){return s=kt(s,O),N(),s[s.length-1]!==null?[]:(j(t,0),c.events=Zu(o,c.events,c),c.events)}function f(O,C){return v2(h(O),C)}function h(O){return y2(s,O)}function v(){const{_bufferIndex:O,_index:C,line:A,column:T,offset:L}=r;return{_bufferIndex:O,_index:C,line:A,column:T,offset:L}}function x(O){i[O.line]=O.column,z()}function N(){let O;for(;r._index<s.length;){const C=s[r._index];if(typeof C=="string")for(O=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===O&&r._bufferIndex<C.length;)m(C.charCodeAt(r._bufferIndex));else m(C)}}function m(O){d=d(O)}function g(O){ee(O)?(r.line++,r.column=1,r.offset+=O===-3?2:1,z()):O!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,r._index++)),c.previous=O}function y(O,C){const A=C||{};return A.type=O,A.start=v(),c.events.push(["enter",A,c]),a.push(A),A}function E(O){const C=a.pop();return C.end=v(),c.events.push(["exit",C,c]),C}function k(O,C){j(O,C.from)}function b(O,C){C.restore()}function I(O,C){return A;function A(T,L,D){let K,$,q,w;return Array.isArray(T)?Q(T):"tokenize"in T?Q([T]):W(T);function W(de){return F;function F(Y){const oe=Y!==null&&de[Y],he=Y!==null&&de.null,ye=[...Array.isArray(oe)?oe:oe?[oe]:[],...Array.isArray(he)?he:he?[he]:[]];return Q(ye)(Y)}}function Q(de){return K=de,$=0,de.length===0?D:S(de[$])}function S(de){return F;function F(Y){return w=P(),q=de,de.partial||(c.currentConstruct=de),de.name&&c.parser.constructs.disable.null.includes(de.name)?ne():de.tokenize.call(C?Object.assign(Object.create(c),C):c,u,re,ne)(Y)}}function re(de){return O(q,w),L}function ne(de){return w.restore(),++$<K.length?S(K[$]):D}}}function j(O,C){O.resolveAll&&!o.includes(O)&&o.push(O),O.resolve&&Kt(c.events,C,c.events.length-C,O.resolve(c.events.slice(C),c)),O.resolveTo&&(c.events=O.resolveTo(c.events,c))}function P(){const O=v(),C=c.previous,A=c.currentConstruct,T=c.events.length,L=Array.from(a);return{from:T,restore:D};function D(){r=O,c.previous=C,c.currentConstruct=A,c.events.length=T,a=L,z()}}function z(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function y2(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let s;if(n===i)s=[e[n].slice(r,o)];else{if(s=e.slice(n,i),r>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(r):s.shift()}o>0&&s.push(e[i].slice(0,o))}return s}function v2(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=t?" ":"	";break}case-1:{if(!t&&i)continue;s=" ";break}default:s=String.fromCharCode(o)}i=o===-2,r.push(s)}return r.join("")}function b2(e){const r={constructs:Nw([g2,...(e||{}).extensions||[]]),content:i(Ow),defined:[],document:i(Rw),flow:i(t2),lazy:{},string:i(i2),text:i(o2)};return r;function i(o){return s;function s(a){return x2(r,o,a)}}}function w2(e){for(;!mg(e););return e}const fp=/[\0\t\n\r]/g;function k2(){let e=1,t="",n=!0,r;return i;function i(o,s,a){const u=[];let c,d,p,f,h;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(fp.lastIndex=p,c=fp.exec(o),f=c&&c.index!==void 0?c.index:o.length,h=o.charCodeAt(f),!c){t=o.slice(p);break}if(h===10&&p===f&&r)u.push(-3),r=void 0;else switch(r&&(u.push(-5),r=void 0),p<f&&(u.push(o.slice(p,f)),e+=f-p),h){case 0:{u.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,u.push(-2);e++<d;)u.push(-1);break}case 10:{u.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return a&&(r&&u.push(-5),t&&u.push(t),u.push(null)),u}}const j2=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function S2(e){return e.replace(j2,C2)}function C2(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return dg(n.slice(o?2:1),o?16:10)}return Xu(n)||e}const wg={}.hasOwnProperty;function _2(e,t,n){return typeof t!="string"&&(n=t,t=void 0),N2(n)(w2(b2(n).document().write(k2()(e,t,!0))))}function N2(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Xn),autolinkProtocol:P,autolinkEmail:P,atxHeading:o(R),blockQuote:o(he),characterEscape:P,characterReference:P,codeFenced:o(ye),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(ye,s),codeText:o(ce,s),codeTextData:P,data:P,codeFlowValue:P,definition:o(Ke),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(yt),hardBreakEscape:o(ae),hardBreakTrailing:o(ae),htmlFlow:o(Pe,s),htmlFlowData:P,htmlText:o(Pe,s),htmlTextData:P,image:o(vt),label:s,link:o(Xn),listItem:o(B),listItemValue:f,listOrdered:o(Fr,p),listUnordered:o(Fr),paragraph:o(X),reference:S,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(R),strong:o(Z),thematicBreak:o(ge)},exit:{atxHeading:u(),atxHeadingSequence:k,autolink:u(),autolinkEmail:oe,autolinkProtocol:Y,blockQuote:u(),characterEscapeValue:z,characterReferenceMarkerHexadecimal:ne,characterReferenceMarkerNumeric:ne,characterReferenceValue:de,characterReference:F,codeFenced:u(N),codeFencedFence:x,codeFencedFenceInfo:h,codeFencedFenceMeta:v,codeFlowValue:z,codeIndented:u(m),codeText:u(L),codeTextData:z,data:z,definition:u(),definitionDestinationString:E,definitionLabelString:g,definitionTitleString:y,emphasis:u(),hardBreakEscape:u(C),hardBreakTrailing:u(C),htmlFlow:u(A),htmlFlowData:z,htmlText:u(T),htmlTextData:z,image:u(K),label:q,labelText:$,lineEnding:O,link:u(D),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:re,resourceDestinationString:w,resourceTitleString:W,resource:Q,setextHeading:u(j),setextHeadingLineSequence:I,setextHeadingText:b,strong:u(),thematicBreak:u()}};kg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(M){let H={type:"root",children:[]};const te={stack:[H],tokenStack:[],config:t,enter:a,exit:c,buffer:s,resume:d,data:n},le=[];let xe=-1;for(;++xe<M.length;)if(M[xe][1].type==="listOrdered"||M[xe][1].type==="listUnordered")if(M[xe][0]==="enter")le.push(xe);else{const Nt=le.pop();xe=i(M,Nt,xe)}for(xe=-1;++xe<M.length;){const Nt=t[M[xe][0]];wg.call(Nt,M[xe][1].type)&&Nt[M[xe][1].type].call(Object.assign({sliceSerialize:M[xe][2].sliceSerialize},te),M[xe][1])}if(te.tokenStack.length>0){const Nt=te.tokenStack[te.tokenStack.length-1];(Nt[1]||hp).call(te,void 0,Nt[0])}for(H.position={start:an(M.length>0?M[0][1].start:{line:1,column:1,offset:0}),end:an(M.length>0?M[M.length-2][1].end:{line:1,column:1,offset:0})},xe=-1;++xe<t.transforms.length;)H=t.transforms[xe](H)||H;return H}function i(M,H,te){let le=H-1,xe=-1,Nt=!1,Ln,Qt,Br,Ur;for(;++le<=te;){const st=M[le];switch(st[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{st[0]==="enter"?xe++:xe--,Ur=void 0;break}case"lineEndingBlank":{st[0]==="enter"&&(Ln&&!Ur&&!xe&&!Br&&(Br=le),Ur=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ur=void 0}if(!xe&&st[0]==="enter"&&st[1].type==="listItemPrefix"||xe===-1&&st[0]==="exit"&&(st[1].type==="listUnordered"||st[1].type==="listOrdered")){if(Ln){let Zn=le;for(Qt=void 0;Zn--;){const Gt=M[Zn];if(Gt[1].type==="lineEnding"||Gt[1].type==="lineEndingBlank"){if(Gt[0]==="exit")continue;Qt&&(M[Qt][1].type="lineEndingBlank",Nt=!0),Gt[1].type="lineEnding",Qt=Zn}else if(!(Gt[1].type==="linePrefix"||Gt[1].type==="blockQuotePrefix"||Gt[1].type==="blockQuotePrefixWhitespace"||Gt[1].type==="blockQuoteMarker"||Gt[1].type==="listItemIndent"))break}Br&&(!Qt||Br<Qt)&&(Ln._spread=!0),Ln.end=Object.assign({},Qt?M[Qt][1].start:st[1].end),M.splice(Qt||le,0,["exit",Ln,st[2]]),le++,te++}if(st[1].type==="listItemPrefix"){const Zn={type:"listItem",_spread:!1,start:Object.assign({},st[1].start),end:void 0};Ln=Zn,M.splice(le,0,["enter",Zn,st[2]]),le++,te++,Br=void 0,Ur=!0}}}return M[H][1]._spread=Nt,te}function o(M,H){return te;function te(le){a.call(this,M(le),le),H&&H.call(this,le)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(M,H,te){this.stack[this.stack.length-1].children.push(M),this.stack.push(M),this.tokenStack.push([H,te||void 0]),M.position={start:an(H.start),end:void 0}}function u(M){return H;function H(te){M&&M.call(this,te),c.call(this,te)}}function c(M,H){const te=this.stack.pop(),le=this.tokenStack.pop();if(le)le[0].type!==M.type&&(H?H.call(this,M,le[0]):(le[1]||hp).call(this,M,le[0]));else throw new Error("Cannot close `"+M.type+"` ("+gi({start:M.start,end:M.end})+"): it’s not open");te.position.end=an(M.end)}function d(){return Cw(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(M){if(this.data.expectingFirstListItemValue){const H=this.stack[this.stack.length-2];H.start=Number.parseInt(this.sliceSerialize(M),10),this.data.expectingFirstListItemValue=void 0}}function h(){const M=this.resume(),H=this.stack[this.stack.length-1];H.lang=M}function v(){const M=this.resume(),H=this.stack[this.stack.length-1];H.meta=M}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function N(){const M=this.resume(),H=this.stack[this.stack.length-1];H.value=M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function m(){const M=this.resume(),H=this.stack[this.stack.length-1];H.value=M.replace(/(\r?\n|\r)$/g,"")}function g(M){const H=this.resume(),te=this.stack[this.stack.length-1];te.label=H,te.identifier=Cr(this.sliceSerialize(M)).toLowerCase()}function y(){const M=this.resume(),H=this.stack[this.stack.length-1];H.title=M}function E(){const M=this.resume(),H=this.stack[this.stack.length-1];H.url=M}function k(M){const H=this.stack[this.stack.length-1];if(!H.depth){const te=this.sliceSerialize(M).length;H.depth=te}}function b(){this.data.setextHeadingSlurpLineEnding=!0}function I(M){const H=this.stack[this.stack.length-1];H.depth=this.sliceSerialize(M).codePointAt(0)===61?1:2}function j(){this.data.setextHeadingSlurpLineEnding=void 0}function P(M){const te=this.stack[this.stack.length-1].children;let le=te[te.length-1];(!le||le.type!=="text")&&(le=ue(),le.position={start:an(M.start),end:void 0},te.push(le)),this.stack.push(le)}function z(M){const H=this.stack.pop();H.value+=this.sliceSerialize(M),H.position.end=an(M.end)}function O(M){const H=this.stack[this.stack.length-1];if(this.data.atHardBreak){const te=H.children[H.children.length-1];te.position.end=an(M.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(H.type)&&(P.call(this,M),z.call(this,M))}function C(){this.data.atHardBreak=!0}function A(){const M=this.resume(),H=this.stack[this.stack.length-1];H.value=M}function T(){const M=this.resume(),H=this.stack[this.stack.length-1];H.value=M}function L(){const M=this.resume(),H=this.stack[this.stack.length-1];H.value=M}function D(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const H=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=H,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function K(){const M=this.stack[this.stack.length-1];if(this.data.inReference){const H=this.data.referenceType||"shortcut";M.type+="Reference",M.referenceType=H,delete M.url,delete M.title}else delete M.identifier,delete M.label;this.data.referenceType=void 0}function $(M){const H=this.sliceSerialize(M),te=this.stack[this.stack.length-2];te.label=S2(H),te.identifier=Cr(H).toLowerCase()}function q(){const M=this.stack[this.stack.length-1],H=this.resume(),te=this.stack[this.stack.length-1];if(this.data.inReference=!0,te.type==="link"){const le=M.children;te.children=le}else te.alt=H}function w(){const M=this.resume(),H=this.stack[this.stack.length-1];H.url=M}function W(){const M=this.resume(),H=this.stack[this.stack.length-1];H.title=M}function Q(){this.data.inReference=void 0}function S(){this.data.referenceType="collapsed"}function re(M){const H=this.resume(),te=this.stack[this.stack.length-1];te.label=H,te.identifier=Cr(this.sliceSerialize(M)).toLowerCase(),this.data.referenceType="full"}function ne(M){this.data.characterReferenceType=M.type}function de(M){const H=this.sliceSerialize(M),te=this.data.characterReferenceType;let le;te?(le=dg(H,te==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):le=Xu(H);const xe=this.stack[this.stack.length-1];xe.value+=le}function F(M){const H=this.stack.pop();H.position.end=an(M.end)}function Y(M){z.call(this,M);const H=this.stack[this.stack.length-1];H.url=this.sliceSerialize(M)}function oe(M){z.call(this,M);const H=this.stack[this.stack.length-1];H.url="mailto:"+this.sliceSerialize(M)}function he(){return{type:"blockquote",children:[]}}function ye(){return{type:"code",lang:null,meta:null,value:""}}function ce(){return{type:"inlineCode",value:""}}function Ke(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function yt(){return{type:"emphasis",children:[]}}function R(){return{type:"heading",depth:0,children:[]}}function ae(){return{type:"break"}}function Pe(){return{type:"html",value:""}}function vt(){return{type:"image",title:null,url:"",alt:null}}function Xn(){return{type:"link",title:null,url:"",children:[]}}function Fr(M){return{type:"list",ordered:M.type==="listOrdered",start:null,spread:M._spread,children:[]}}function B(M){return{type:"listItem",spread:M._spread,checked:null,children:[]}}function X(){return{type:"paragraph",children:[]}}function Z(){return{type:"strong",children:[]}}function ue(){return{type:"text",value:""}}function ge(){return{type:"thematicBreak"}}}function an(e){return{line:e.line,column:e.column,offset:e.offset}}function kg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?kg(e,r):E2(e,r)}}function E2(e,t){let n;for(n in t)if(wg.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function hp(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+gi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+gi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+gi({start:t.start,end:t.end})+") is still open")}function z2(e){const t=this;t.parser=n;function n(r){return _2(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function T2(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function P2(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function L2(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function I2(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function A2(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function O2(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=$r(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let s,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),s=e.footnoteOrder.length):s=o+1,a+=1,e.footnoteCounts.set(r,a);const u={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(t,u);const c={type:"element",tagName:"sup",properties:{},children:[u]};return e.patch(t,c),e.applyData(t,c)}function M2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function R2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function jg(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const s=i[i.length-1];return s&&s.type==="text"?s.value+=r:i.push({type:"text",value:r}),i}function D2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return jg(e,t);const i={src:$r(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function $2(e,t){const n={src:$r(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function F2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function B2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return jg(e,t);const i={href:$r(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function U2(e,t){const n={href:$r(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function V2(e,t,n){const r=e.all(t),i=n?W2(n):Sg(t),o={},s=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const d=r[a];(i||a!==0||d.type!=="element"||d.tagName!=="p")&&s.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?s.push(...d.children):s.push(d)}const u=r[r.length-1];u&&(i||u.type!=="element"||u.tagName!=="p")&&s.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:o,children:s};return e.patch(t,c),e.applyData(t,c)}function W2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Sg(n[r])}return t}function Sg(e){const t=e.spread;return t??e.children.length>1}function H2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const s=r[i];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function q2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function K2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Q2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function G2(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],s),i.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Qu(t.children[1]),u=ig(t.children[t.children.length-1]);a&&u&&(s.position={start:a,end:u}),i.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function J2(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:t.children.length;let u=-1;const c=[];for(;++u<a;){const p=t.children[u],f={},h=s?s[u]:void 0;h&&(f.align=h);let v={type:"element",tagName:o,properties:f,children:[]};p&&(v.children=e.all(p),e.patch(p,v),v=e.applyData(p,v)),c.push(v)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(c,!0)};return e.patch(t,d),e.applyData(t,d)}function Y2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const mp=9,gp=32;function X2(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(xp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(xp(t.slice(i),i>0,!1)),o.join("")}function xp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===mp||o===gp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===mp||o===gp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Z2(e,t){const n={type:"text",value:X2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function ej(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const tj={blockquote:T2,break:P2,code:L2,delete:I2,emphasis:A2,footnoteReference:O2,heading:M2,html:R2,imageReference:D2,image:$2,inlineCode:F2,linkReference:B2,link:U2,listItem:V2,list:H2,paragraph:q2,root:K2,strong:Q2,table:G2,tableCell:Y2,tableRow:J2,text:Z2,thematicBreak:ej,toml:vo,yaml:vo,definition:vo,footnoteDefinition:vo};function vo(){}const Cg=-1,Ml=0,yi=1,dl=2,tc=3,nc=4,rc=5,ic=6,_g=7,Ng=8,yp=typeof self=="object"?self:globalThis,nj=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,s]=t[i];switch(o){case Ml:case Cg:return n(s,i);case yi:{const a=n([],i);for(const u of s)a.push(r(u));return a}case dl:{const a=n({},i);for(const[u,c]of s)a[r(u)]=r(c);return a}case tc:return n(new Date(s),i);case nc:{const{source:a,flags:u}=s;return n(new RegExp(a,u),i)}case rc:{const a=n(new Map,i);for(const[u,c]of s)a.set(r(u),r(c));return a}case ic:{const a=n(new Set,i);for(const u of s)a.add(r(u));return a}case _g:{const{name:a,message:u}=s;return n(new yp[a](u),i)}case Ng:return n(BigInt(s),i);case"BigInt":return n(Object(BigInt(s)),i);case"ArrayBuffer":return n(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:a}=new Uint8Array(s);return n(new DataView(a),s)}}return n(new yp[o](s),i)};return r},vp=e=>nj(new Map,e)(0),nr="",{toString:rj}={},{keys:ij}=Object,Xr=e=>{const t=typeof e;if(t!=="object"||!e)return[Ml,t];const n=rj.call(e).slice(8,-1);switch(n){case"Array":return[yi,nr];case"Object":return[dl,nr];case"Date":return[tc,nr];case"RegExp":return[nc,nr];case"Map":return[rc,nr];case"Set":return[ic,nr];case"DataView":return[yi,n]}return n.includes("Array")?[yi,n]:n.includes("Error")?[_g,n]:[dl,n]},bo=([e,t])=>e===Ml&&(t==="function"||t==="symbol"),oj=(e,t,n,r)=>{const i=(s,a)=>{const u=r.push(s)-1;return n.set(a,u),u},o=s=>{if(n.has(s))return n.get(s);let[a,u]=Xr(s);switch(a){case Ml:{let d=s;switch(u){case"bigint":a=Ng,d=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);d=null;break;case"undefined":return i([Cg],s)}return i([a,d],s)}case yi:{if(u){let f=s;return u==="DataView"?f=new Uint8Array(s.buffer):u==="ArrayBuffer"&&(f=new Uint8Array(s)),i([u,[...f]],s)}const d=[],p=i([a,d],s);for(const f of s)d.push(o(f));return p}case dl:{if(u)switch(u){case"BigInt":return i([u,s.toString()],s);case"Boolean":case"Number":case"String":return i([u,s.valueOf()],s)}if(t&&"toJSON"in s)return o(s.toJSON());const d=[],p=i([a,d],s);for(const f of ij(s))(e||!bo(Xr(s[f])))&&d.push([o(f),o(s[f])]);return p}case tc:return i([a,s.toISOString()],s);case nc:{const{source:d,flags:p}=s;return i([a,{source:d,flags:p}],s)}case rc:{const d=[],p=i([a,d],s);for(const[f,h]of s)(e||!(bo(Xr(f))||bo(Xr(h))))&&d.push([o(f),o(h)]);return p}case ic:{const d=[],p=i([a,d],s);for(const f of s)(e||!bo(Xr(f)))&&d.push(o(f));return p}}const{message:c}=s;return i([a,{name:u,message:c}],s)};return o},bp=(e,{json:t,lossy:n}={})=>{const r=[];return oj(!(t||n),!!t,new Map,r)(e),r},pl=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?vp(bp(e,t)):structuredClone(e):(e,t)=>vp(bp(e,t));function lj(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function sj(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function aj(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||lj,r=e.options.footnoteBackLabel||sj,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let u=-1;for(;++u<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[u]);if(!c)continue;const d=e.all(c),p=String(c.identifier).toUpperCase(),f=$r(p.toLowerCase());let h=0;const v=[],x=e.footnoteCounts.get(p);for(;x!==void 0&&++h<=x;){v.length>0&&v.push({type:"text",value:" "});let g=typeof n=="string"?n:n(u,h);typeof g=="string"&&(g={type:"text",value:g}),v.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(u,h),className:["data-footnote-backref"]},children:Array.isArray(g)?g:[g]})}const N=d[d.length-1];if(N&&N.type==="element"&&N.tagName==="p"){const g=N.children[N.children.length-1];g&&g.type==="text"?g.value+=" ":N.children.push({type:"text",value:" "}),N.children.push(...v)}else d.push(...v);const m={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(c,m),a.push(m)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...pl(s),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const Eg=function(e){if(e==null)return pj;if(typeof e=="function")return Rl(e);if(typeof e=="object")return Array.isArray(e)?uj(e):cj(e);if(typeof e=="string")return dj(e);throw new Error("Expected function, string, or object as test")};function uj(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Eg(e[n]);return Rl(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function cj(e){const t=e;return Rl(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function dj(e){return Rl(t);function t(n){return n&&n.type===e}}function Rl(e){return t;function t(n,r,i){return!!(fj(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function pj(){return!0}function fj(e){return e!==null&&typeof e=="object"&&"type"in e}const zg=[],hj=!0,wp=!1,mj="skip";function gj(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Eg(i),s=r?-1:1;a(e,void 0,[])();function a(u,c,d){const p=u&&typeof u=="object"?u:{};if(typeof p.type=="string"){const h=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(u.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=zg,v,x,N;if((!t||o(u,c,d[d.length-1]||void 0))&&(h=xj(n(u,d)),h[0]===wp))return h;if("children"in u&&u.children){const m=u;if(m.children&&h[0]!==mj)for(x=(r?m.children.length:-1)+s,N=d.concat(m);x>-1&&x<m.children.length;){const g=m.children[x];if(v=a(g,x,N)(),v[0]===wp)return v;x=typeof v[1]=="number"?v[1]:x+s}}return h}}}function xj(e){return Array.isArray(e)?e:typeof e=="number"?[hj,e]:e==null?zg:[e]}function Tg(e,t,n,r){let i,o,s;typeof t=="function"&&typeof n!="function"?(o=void 0,s=t,i=n):(o=t,s=n,i=r),gj(e,o,a,i);function a(u,c){const d=c[c.length-1],p=d?d.children.indexOf(u):void 0;return s(u,p,d)}}const Da={}.hasOwnProperty,yj={};function vj(e,t){const n=t||yj,r=new Map,i=new Map,o=new Map,s={...tj,...n.handlers},a={all:c,applyData:wj,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:s,one:u,options:n,patch:bj,wrap:jj};return Tg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),a;function u(d,p){const f=d.type,h=a.handlers[f];if(Da.call(a.handlers,f)&&h)return h(a,d,p);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in d){const{children:x,...N}=d,m=pl(N);return m.children=a.all(d),m}return pl(d)}return(a.options.unknownHandler||kj)(a,d,p)}function c(d){const p=[];if("children"in d){const f=d.children;let h=-1;for(;++h<f.length;){const v=a.one(f[h],d);if(v){if(h&&f[h-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=kp(v.value)),!Array.isArray(v)&&v.type==="element")){const x=v.children[0];x&&x.type==="text"&&(x.value=kp(x.value))}Array.isArray(v)?p.push(...v):p.push(v)}}}return p}}function bj(e,t){e.position&&(t.position=rw(e))}function wj(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const s="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,pl(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function kj(e,t){const n=t.data||{},r="value"in t&&!(Da.call(n,"hProperties")||Da.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function jj(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function kp(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function jp(e,t){const n=vj(e,t),r=n.one(e,void 0),i=aj(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function Sj(e,t){return e&&"run"in e?async function(n,r){const i=jp(n,{file:r,...t});await e.run(i,r)}:function(n,r){return jp(n,{file:r,...e||t})}}function Sp(e){if(e)throw e}var Ro=Object.prototype.hasOwnProperty,Pg=Object.prototype.toString,Cp=Object.defineProperty,_p=Object.getOwnPropertyDescriptor,Np=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Pg.call(t)==="[object Array]"},Ep=function(t){if(!t||Pg.call(t)!=="[object Object]")return!1;var n=Ro.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Ro.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Ro.call(t,i)},zp=function(t,n){Cp&&n.name==="__proto__"?Cp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Tp=function(t,n){if(n==="__proto__")if(Ro.call(t,n)){if(_p)return _p(t,n).value}else return;return t[n]},Cj=function e(){var t,n,r,i,o,s,a=arguments[0],u=1,c=arguments.length,d=!1;for(typeof a=="boolean"&&(d=a,a=arguments[1]||{},u=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});u<c;++u)if(t=arguments[u],t!=null)for(n in t)r=Tp(a,n),i=Tp(t,n),a!==i&&(d&&i&&(Ep(i)||(o=Np(i)))?(o?(o=!1,s=r&&Np(r)?r:[]):s=r&&Ep(r)?r:{},zp(a,{name:n,newValue:e(d,s,i)})):typeof i<"u"&&zp(a,{name:n,newValue:i}));return a};const ks=hl(Cj);function $a(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function _j(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const s=i.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...i);function a(u,...c){const d=e[++o];let p=-1;if(u){s(u);return}for(;++p<i.length;)(c[p]===null||c[p]===void 0)&&(c[p]=i[p]);i=c,d?Nj(d,a)(...c):s(null,...c)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Nj(e,t){let n;return r;function r(...s){const a=e.length>s.length;let u;a&&s.push(i);try{u=e.apply(this,s)}catch(c){const d=c;if(a&&n)throw d;return i(d)}a||(u&&u.then&&typeof u.then=="function"?u.then(o,i):u instanceof Error?i(u):o(u))}function i(s,...a){n||(n=!0,t(s,...a))}function o(s){i(null,s)}}const $t={basename:Ej,dirname:zj,extname:Tj,join:Pj,sep:"/"};function Ej(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Xi(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let s=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else s<0&&(o=!0,s=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=s));return n===r?r=s:r<0&&(r=e.length),e.slice(n,r)}function zj(e){if(Xi(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Tj(e){Xi(e);let t=e.length,n=-1,r=0,i=-1,o=0,s;for(;t--;){const a=e.codePointAt(t);if(a===47){if(s){r=t+1;break}continue}n<0&&(s=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Pj(...e){let t=-1,n;for(;++t<e.length;)Xi(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Lj(n)}function Lj(e){Xi(e);const t=e.codePointAt(0)===47;let n=Ij(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Ij(e,t){let n="",r=0,i=-1,o=0,s=-1,a,u;for(;++s<=e.length;){if(s<e.length)a=e.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(i===s-1||o===1))if(i!==s-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(u=n.lastIndexOf("/"),u!==n.length-1){u<0?(n="",r=0):(n=n.slice(0,u),r=n.length-1-n.lastIndexOf("/")),i=s,o=0;continue}}else if(n.length>0){n="",r=0,i=s,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,s):n=e.slice(i+1,s),r=s-i-1;i=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function Xi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Aj={cwd:Oj};function Oj(){return"/"}function Fa(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Mj(e){if(typeof e=="string")e=new URL(e);else if(!Fa(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Rj(e)}function Rj(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const js=["history","path","basename","stem","extname","dirname"];class Lg{constructor(t){let n;t?Fa(t)?n={path:t}:typeof t=="string"||Dj(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Aj.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<js.length;){const o=js[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)js.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?$t.basename(this.path):void 0}set basename(t){Cs(t,"basename"),Ss(t,"basename"),this.path=$t.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?$t.dirname(this.path):void 0}set dirname(t){Pp(this.basename,"dirname"),this.path=$t.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?$t.extname(this.path):void 0}set extname(t){if(Ss(t,"extname"),Pp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=$t.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Fa(t)&&(t=Mj(t)),Cs(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?$t.basename(this.path,this.extname):void 0}set stem(t){Cs(t,"stem"),Ss(t,"stem"),this.path=$t.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new qe(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Ss(e,t){if(e&&e.includes($t.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+$t.sep+"`")}function Cs(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Pp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Dj(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const $j=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},Fj={}.hasOwnProperty;class oc extends $j{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=_j()}copy(){const t=new oc;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(ks(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Es("data",this.frozen),this.namespace[t]=n,this):Fj.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Es("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=wo(t),r=this.parser||this.Parser;return _s("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),_s("process",this.parser||this.Parser),Ns("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,s){const a=wo(t),u=r.parse(a);r.run(u,a,function(d,p,f){if(d||!p||!f)return c(d);const h=p,v=r.stringify(h,f);Vj(v)?f.value=v:f.result=v,c(d,f)});function c(d,p){d||!p?s(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),_s("processSync",this.parser||this.Parser),Ns("processSync",this.compiler||this.Compiler),this.process(t,i),Ip("processSync","process",n),r;function i(o,s){n=!0,Sp(o),r=s}}run(t,n,r){Lp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(s,a){const u=wo(n);i.run(t,u,c);function c(d,p,f){const h=p||t;d?a(d):s?s(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Ip("runSync","run",r),i;function o(s,a){Sp(s),i=a,r=!0}}stringify(t,n){this.freeze();const r=wo(n),i=this.compiler||this.Compiler;return Ns("stringify",i),Lp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Es("use",this.frozen),t!=null)if(typeof t=="function")u(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):s(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(c){if(typeof c=="function")u(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[d,...p]=c;u(d,p)}else s(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function s(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(c.plugins),c.settings&&(i.settings=ks(!0,i.settings,c.settings))}function a(c){let d=-1;if(c!=null)if(Array.isArray(c))for(;++d<c.length;){const p=c[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function u(c,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===c){f=p;break}if(f===-1)r.push([c,...d]);else if(d.length>0){let[h,...v]=d;const x=r[f][1];$a(x)&&$a(h)&&(h=ks(!0,x,h)),r[f]=[c,h,...v]}}}}const Bj=new oc().freeze();function _s(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ns(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Es(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Lp(e){if(!$a(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Ip(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function wo(e){return Uj(e)?e:new Lg(e)}function Uj(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Vj(e){return typeof e=="string"||Wj(e)}function Wj(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Hj="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Ap=[],Op={allowDangerousHtml:!0},qj=/^(https?|ircs?|mailto|xmpp)$/i,Kj=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Qj(e){const t=Gj(e),n=Jj(e);return Yj(t.runSync(t.parse(n),n),e)}function Gj(e){const t=e.rehypePlugins||Ap,n=e.remarkPlugins||Ap,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Op}:Op;return Bj().use(z2).use(n).use(Sj,r).use(t)}function Jj(e){const t=e.children||"",n=new Lg;return typeof t=="string"&&(n.value=t),n}function Yj(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,s=t.skipHtml,a=t.unwrapDisallowed,u=t.urlTransform||Xj;for(const d of Kj)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+Hj+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Tg(e,c),aw(e,{Fragment:l.Fragment,components:i,ignoreInvalidStyle:!0,jsx:l.jsx,jsxs:l.jsxs,passKeys:!0,passNode:!0});function c(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return s?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let h;for(h in vs)if(Object.hasOwn(vs,h)&&Object.hasOwn(d.properties,h)){const v=d.properties[h],x=vs[h];(x===null||x.includes(d.tagName))&&(d.properties[h]=u(String(v||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!h&&r&&typeof p=="number"&&(h=!r(d,p,f)),h&&f&&typeof p=="number")return a&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function Xj(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||qj.test(e.slice(0,t))?e:""}function Zj({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=_.useState(!1),[s,a]=_.useState(r),u=_.useRef(null),c=_.useRef(null);_.useEffect(()=>{if(e){const f=e.split(`
`).length,h=Math.max(r,Math.min(f*20+40,500));a(h)}},[e,r]),_.useEffect(()=>{i&&c.current&&c.current.focus()},[i]);function d(f){c.current=f,f.focus()}function p(f){u.current&&!u.current.contains(f.target)&&o(!1)}return _.useEffect(()=>{if(i)return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[i]),l.jsxs("div",{ref:u,className:"markdown-editor",children:[l.jsx("style",{children:`
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
          height: ${s}px;
        }
      `}),i?l.jsx("div",{className:"monaco-wrapper",children:l.jsx(Bi,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):l.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[l.jsxs("span",{className:"edit-hint",children:[l.jsx(V1,{size:12}),"Click to edit"]}),e?l.jsx("div",{className:"markdown-content",children:l.jsx(Qj,{children:e})}):l.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function eS({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:s}=Mt(),[a,u]=_.useState(new Set(["basic","model","tools","subagents"])),[c,d]=_.useState(!1),[p,f]=_.useState(!1),[h,v]=_.useState(!1),[x,N]=_.useState("");if(!t)return null;function m(T){n(e.id,T)}function g(T){const L=new Set(a);L.has(T)?L.delete(T):L.add(T),u(L)}const y=e.type==="LlmAgent",E=e;function k(T){y&&m({tools:[...E.tools,T]})}function b(T){y&&m({tools:E.tools.filter((L,D)=>D!==T)})}function I(T,L){if(!y)return;const D=[...E.tools];D[T]=L,m({tools:D})}function j(T){"sub_agents"in e&&m({sub_agents:[...e.sub_agents,T]})}function P(T){"sub_agents"in e&&m({sub_agents:e.sub_agents.filter(L=>L!==T)})}const z=t.agents.filter(T=>T.id!==e.id);async function O(){if(!(!t||!y)){d(!0);try{const T=E.instruction||"",L=T?`Current instruction to improve:

${T}

Please improve and expand this instruction while preserving its core intent.`:void 0,D=await Oo(t.id,e.id,L);D.success&&D.prompt?m({instruction:D.prompt}):alert("Failed to generate prompt: "+(D.error||"Unknown error"))}catch(T){alert("Error generating prompt: "+T.message)}finally{d(!1)}}}async function C(){if(!(!t||!y||!x.trim())){d(!0);try{const L=`Current instruction:

${E.instruction||""}

---

Requested changes:
${x}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,D=await Oo(t.id,e.id,L);D.success&&D.prompt?(m({instruction:D.prompt}),v(!1),N("")):alert("Failed to apply changes: "+(D.error||"Unknown error"))}catch(T){alert("Error applying changes: "+T.message)}finally{d(!1)}}}async function A(){if(!t||!y)return;const T=E.instruction;if(!T){alert("Please write an instruction first");return}f(!0);try{const L=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,D=await Oo(t.id,e.id,L);if(D.success&&D.prompt){let K=D.prompt.trim();K=K.replace(/^["']|["']$/g,"").trim();const $=K.split(/[.!?\n]/)[0].trim(),q=$.length>80?$.slice(0,77)+"...":$;m({description:q})}else alert("Failed to generate description: "+(D.error||"Unknown error"))}catch(L){alert("Error generating description: "+L.message)}finally{f(!1)}}return l.jsxs("div",{className:"agent-editor",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"editor-header",children:[l.jsx(Vn,{size:24,style:{color:"var(--accent-primary)"}}),l.jsx("input",{type:"text",value:e.name,onChange:T=>m({name:T.target.value}),placeholder:"Agent name"}),l.jsx("span",{className:"badge badge-info",children:e.type}),l.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{s(e.id),o("run")},title:"Test this agent",children:[l.jsx($n,{size:14}),"Run"]})]}),l.jsxs("div",{className:"editor-content",children:[l.jsxs(ko,{id:"basic",title:"Basic Info",icon:l.jsx(Vn,{size:16}),expanded:a.has("basic"),onToggle:()=>g("basic"),children:[l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("div",{className:"label-with-action",children:[l.jsx("label",{children:"Description"}),y&&E.instruction&&l.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:A,disabled:p,title:"Generate description from instruction",children:p?l.jsxs(l.Fragment,{children:[l.jsx($i,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),l.jsx("input",{type:"text",value:e.description,onChange:T=>m({description:T.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),y&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group full-width",children:[l.jsxs("div",{className:"label-with-action",children:[l.jsx("label",{children:"Instruction"}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>v(!h),disabled:c||!E.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:O,disabled:c,title:"Uses AI to improve and expand the current instruction",children:c?l.jsxs(l.Fragment,{children:[l.jsx($i,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),h&&l.jsxs("div",{className:"request-changes-box",children:[l.jsx("input",{type:"text",value:x,onChange:T=>N(T.target.value),placeholder:"Describe what changes you want...",onKeyDown:T=>{T.key==="Enter"&&x.trim()?C():T.key==="Escape"&&(v(!1),N(""))},autoFocus:!0}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:C,disabled:c||!x.trim(),children:"Apply"})]}),l.jsx(Zj,{value:E.instruction,onChange:T=>m({instruction:T}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Output Key"}),l.jsxs("select",{value:E.output_key||"",onChange:T=>m({output_key:T.target.value||void 0}),children:[l.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(T=>l.jsx("option",{value:T.name,children:T.name},T.name))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Include Contents"}),l.jsxs("select",{value:E.include_contents,onChange:T=>m({include_contents:T.target.value}),children:[l.jsx("option",{value:"default",children:"Default"}),l.jsx("option",{value:"none",children:"None"})]})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"disallow-parent",checked:E.disallow_transfer_to_parent,onChange:T=>m({disallow_transfer_to_parent:T.target.checked})}),l.jsx("label",{htmlFor:"disallow-parent",children:"Disallow transfer to parent"})]}),l.jsxs("div",{className:"checkbox-group",children:[l.jsx("input",{type:"checkbox",id:"disallow-peers",checked:E.disallow_transfer_to_peers,onChange:T=>m({disallow_transfer_to_peers:T.target.checked})}),l.jsx("label",{htmlFor:"disallow-peers",children:"Disallow transfer to peers"})]})]})]}),e.type==="LoopAgent"&&l.jsx("div",{className:"form-row",children:l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Iterations"}),l.jsx("input",{type:"number",value:e.max_iterations||"",onChange:T=>m({max_iterations:parseInt(T.target.value)||void 0}),placeholder:"No limit"})]})})]}),y&&l.jsx(ko,{id:"model",title:"Model",icon:l.jsx(Vu,{size:16}),expanded:a.has("model"),onToggle:()=>g("model"),children:l.jsx(nS,{agent:E,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,onUpdate:T=>m({model:T})})}),y&&l.jsx(ko,{id:"tools",title:`Tools (${E.tools.length})`,icon:l.jsx(qt,{size:16}),expanded:a.has("tools"),onToggle:()=>g("tools"),children:l.jsx(tS,{tools:E.tools,onAdd:k,onRemove:b,onUpdate:I,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:z})}),"sub_agents"in e&&l.jsx(ko,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:l.jsx(J1,{size:16}),expanded:a.has("subagents"),onToggle:()=>g("subagents"),children:l.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(T=>{const L=t.agents.find(D=>D.id===T);return L?l.jsxs("div",{className:"sub-agent-chip",children:[L.name,l.jsx("button",{onClick:()=>P(T),children:l.jsx(pt,{size:12})})]},T):null}),l.jsxs("select",{value:"",onChange:T=>{T.target.value&&j(T.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[l.jsx("option",{value:"",children:"Add agent..."}),z.filter(T=>!e.sub_agents.includes(T.id)).map(T=>l.jsx("option",{value:T.id,children:T.name},T.id))]})]})})]})]})}function ko({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return l.jsxs("div",{className:"section",children:[l.jsxs("div",{className:"section-header",onClick:i,children:[r?l.jsx(Ft,{size:16}):l.jsx(Bt,{size:16}),l.jsxs("h4",{children:[n," ",t]})]}),r&&l.jsx("div",{className:"section-content",children:o})]})}function tS({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:s,customTools:a,agents:u}){const[c,d]=_.useState(!1),[p,f]=_.useState({}),h=Lt.useRef(null),[v,x]=_.useState(null),[N,m]=_.useState(new Set);function g(){if(h.current){const C=h.current.getBoundingClientRect(),A=window.innerHeight,T=350,L=A-C.bottom-16,D=C.top-16;if(L>=200||L>=D){const K=Math.min(T,L);f({top:C.bottom+4,left:C.left,maxHeight:K})}else{const K=Math.min(T,D);f({top:C.top-K-4,left:C.left,maxHeight:K})}}d(!0)}function y(C){t({type:"builtin",name:C}),d(!1)}async function E(C){d(!1);const A=C.tool_filter||[];if(x({server:C,enabledTools:new Set(A),availableTools:A.map(T=>({name:T,description:""})),isLoading:A.length===0,error:void 0}),A.length===0)try{const{testMcpServer:T}=await Um(async()=>{const{testMcpServer:D}=await Promise.resolve().then(()=>O1);return{testMcpServer:D}},void 0),L=await T({connection_type:C.connection_type,command:C.command,args:C.args,env:C.env,url:C.url,headers:C.headers,timeout:C.timeout||30});L.success?x(D=>D?{...D,availableTools:L.tools,enabledTools:new Set(L.tools.map(K=>K.name)),isLoading:!1}:null):x(D=>D?{...D,isLoading:!1,error:L.error||"Failed to connect to MCP server"}:null)}catch(T){x(L=>L?{...L,isLoading:!1,error:T.message}:null)}}function k(C){if(!v)return;const A=new Set(v.enabledTools);A.has(C)?A.delete(C):A.add(C),x({...v,enabledTools:A})}function b(){if(!v)return;const C=Array.from(v.enabledTools);t({type:"mcp",server:{...v.server,tool_filter:C}}),x(null)}function I(C){const A=new Set(N);A.has(C)?A.delete(C):A.add(C),m(A)}function j(C,A){const T=e[C];if(T.type!=="mcp"||!T.server)return;const L=T.server.tool_filter||[];let D;L.includes(A)?D=L.filter(K=>K!==A):D=[...L,A],r(C,{...T,server:{...T.server,tool_filter:D}})}function P(C){t({type:"function",name:C.name,module_path:C.module_path}),d(!1)}function z(C){const A=u.find(T=>T.id===C);t({type:"agent",agent_id:C,name:A==null?void 0:A.name}),d(!1)}function O(C){return o.find(A=>A.name===C)}return l.jsxs("div",{children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"tool-list",children:e.map((C,A)=>C.type==="mcp"&&C.server?l.jsxs("div",{className:"mcp-tool-item",children:[l.jsxs("div",{className:"mcp-tool-header",onClick:()=>I(A),children:[N.has(A)?l.jsx(Ft,{size:14}):l.jsx(Bt,{size:14}),l.jsx(qt,{size:14,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{className:"mcp-tool-info",children:[l.jsx("div",{className:"mcp-tool-name",children:C.server.name}),l.jsx("div",{className:"mcp-tool-count",children:C.server.tool_filter===null||C.server.tool_filter===void 0?"all tools":`${C.server.tool_filter.length} tools enabled`})]}),l.jsx("button",{className:"delete-btn",onClick:T=>{T.stopPropagation(),n(A)},children:l.jsx(pt,{size:14})})]}),N.has(A)&&l.jsx("div",{className:"mcp-tool-body",children:l.jsx("div",{className:"mcp-tool-list",children:(()=>{const T=O(C.server.name),L=(T==null?void 0:T.tool_filter)||C.server.tool_filter||[],D=new Set(C.server.tool_filter||[]);return L.map(K=>l.jsxs("label",{className:`mcp-tool-chip ${D.has(K)?"enabled":"disabled"}`,onClick:()=>j(A,K),children:[l.jsx("input",{type:"checkbox",checked:D.has(K),onChange:()=>{},style:{display:"none"}}),K]},K))})()})})]},A):l.jsxs("div",{className:"tool-item",children:[l.jsx(qt,{size:14,style:{color:"var(--accent-primary)"}}),l.jsxs("div",{className:"tool-item-info",children:[l.jsx("div",{className:"tool-item-name",children:C.name||C.agent_id}),l.jsx("div",{className:"tool-item-type",children:C.type})]}),l.jsx("button",{className:"delete-btn",onClick:()=>n(A),children:l.jsx(pt,{size:14})})]},A))}),l.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[l.jsxs("button",{ref:h,className:"btn btn-secondary btn-sm",onClick:()=>c?d(!1):g(),children:[l.jsx(Ge,{size:14}),"Add Tool"]}),c&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"dropdown-backdrop",onClick:()=>d(!1)}),l.jsxs("div",{className:"dropdown-content dropdown-fixed",style:p,children:[l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Built-in Tools"}),i.map(C=>l.jsxs("button",{className:"dropdown-item",onClick:()=>y(C.name),children:[l.jsx("div",{className:"dropdown-item-name",children:C.name}),l.jsx("div",{className:"dropdown-item-desc",children:C.description})]},C.name))]}),o.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["Known MCP Servers (",o.length,")"]}),o.map(C=>l.jsxs("button",{className:"dropdown-item",onClick:()=>E(C),children:[l.jsxs("div",{className:"dropdown-item-name",children:[C.name,l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:C.tool_filter===null||C.tool_filter===void 0?"all tools":`${C.tool_filter.length} tools`})]}),l.jsx("div",{className:"dropdown-item-desc",children:C.description})]},`known-${C.name}`))]}),s.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsxs("h5",{children:["Project MCP Servers (",s.length,")"]}),s.map(C=>l.jsxs("button",{className:"dropdown-item",onClick:()=>E(C),children:[l.jsxs("div",{className:"dropdown-item-name",children:[C.name,l.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:C.tool_filter===null||C.tool_filter===void 0?"all tools":`${C.tool_filter.length} tools`})]}),l.jsx("div",{className:"dropdown-item-desc",children:C.description||"Custom MCP server"})]},`project-${C.id||C.name}`))]}),a.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Custom Tools"}),a.map(C=>l.jsxs("button",{className:"dropdown-item",onClick:()=>P(C),children:[l.jsx("div",{className:"dropdown-item-name",children:C.name}),l.jsx("div",{className:"dropdown-item-desc",children:C.description})]},C.id))]}),u.length>0&&l.jsxs("div",{className:"dropdown-section",children:[l.jsx("h5",{children:"Agents as Tools"}),u.map(C=>l.jsxs("button",{className:"dropdown-item",onClick:()=>z(C.id),children:[l.jsx("div",{className:"dropdown-item-name",children:C.name}),l.jsx("div",{className:"dropdown-item-desc",children:C.type})]},C.id))]})]})]})]}),v&&l.jsx("div",{className:"mcp-config-dialog",children:l.jsxs("div",{className:"mcp-config-content",children:[l.jsxs("h3",{children:["Configure ",v.server.name]}),l.jsx("p",{children:v.server.description}),v.isLoading?l.jsxs("div",{className:"mcp-loading",children:[l.jsx("div",{className:"spinner"}),l.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):v.error?l.jsxs("div",{className:"mcp-error",children:[l.jsxs("p",{children:["⚠️ Failed to discover tools: ",v.error]}),l.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mcp-select-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({...v,enabledTools:new Set(v.availableTools.map(C=>C.name))}),children:["Select All (",v.availableTools.length,")"]}),l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>x({...v,enabledTools:new Set}),children:"Select None"})]}),l.jsx("div",{className:"mcp-tools-grid",children:v.availableTools.map(C=>l.jsxs("label",{className:`mcp-tool-toggle ${v.enabledTools.has(C.name)?"enabled":""}`,onClick:()=>k(C.name),title:C.description||C.name,children:[l.jsx("input",{type:"checkbox",checked:v.enabledTools.has(C.name),onChange:()=>{}}),C.name]},C.name))})]}),l.jsxs("div",{className:"dialog-actions",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>x(null),children:"Cancel"}),l.jsxs("button",{className:"btn btn-primary",onClick:b,disabled:v.enabledTools.size===0,children:["Add ",v.enabledTools.size," Tools"]})]})]})})]})}function nS({agent:e,appModels:t,defaultModelId:n,onUpdate:r}){var p,f,h,v,x,N,m,g,y,E;const i=(p=e.model)==null?void 0:p._appModelId,o=e.model!==null&&e.model!==void 0&&!i,a=i||(()=>{if(!e.model)return n;const k=t.find(b=>{var I,j,P;return b.provider===((I=e.model)==null?void 0:I.provider)&&b.model_name===((j=e.model)==null?void 0:j.model_name)&&b.api_base===((P=e.model)==null?void 0:P.api_base)});return k==null?void 0:k.id})()||n||((f=t[0])==null?void 0:f.id);Lt.useEffect(()=>{var k,b,I,j,P;if(i){const z=t.find(O=>O.id===i);z&&(((k=e.model)==null?void 0:k.provider)!==z.provider||((b=e.model)==null?void 0:b.model_name)!==z.model_name||((I=e.model)==null?void 0:I.api_base)!==z.api_base||((j=e.model)==null?void 0:j.temperature)!==z.temperature||((P=e.model)==null?void 0:P.max_output_tokens)!==z.max_output_tokens)&&r({provider:z.provider,model_name:z.model_name,api_base:z.api_base,temperature:z.temperature,max_output_tokens:z.max_output_tokens,top_p:z.top_p,top_k:z.top_k,fallbacks:[],_appModelId:i})}},[i,t,e.model,r]);function u(k){const b=t.find(I=>I.id===k);b&&r({provider:b.provider,model_name:b.model_name,api_base:b.api_base,temperature:b.temperature,max_output_tokens:b.max_output_tokens,top_p:b.top_p,top_k:b.top_k,fallbacks:[],_appModelId:k})}function c(){var k;if(o){const b=n||((k=t[0])==null?void 0:k.id);b&&u(b)}else{const b=e.model;if(b){const{_appModelId:I,...j}=b;r(j)}else r({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function d(k){const{_appModelId:b,...I}=e.model||{};r({...I,...k})}return t.find(k=>k.id===a),t.find(k=>k.id===n),l.jsxs("div",{className:"model-selector",children:[l.jsx("style",{children:`
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
      `}),t.length>0&&l.jsxs("div",{className:"model-choice",children:[l.jsxs("div",{className:`model-option ${o?"":"selected"}`,onClick:()=>!o||c(),children:[l.jsx("div",{className:"model-option-label",children:"Use App Model"}),l.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),l.jsxs("div",{className:`model-option ${o?"selected":""}`,onClick:()=>o||c(),children:[l.jsx("div",{className:"model-option-label",children:"Custom"}),l.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!o&&t.length>0?l.jsx("div",{className:"app-model-select",children:t.map(k=>l.jsx("div",{className:`app-model-item ${a===k.id?"selected":""}`,onClick:()=>u(k.id),children:l.jsxs("div",{className:"app-model-item-info",children:[l.jsxs("div",{className:"app-model-item-name",children:[k.name,k.id===n&&l.jsxs("span",{className:"default-badge",children:[l.jsx($m,{size:10,fill:"currentColor"}),"Default"]})]}),l.jsxs("div",{className:"app-model-item-details",children:[k.provider," / ",k.model_name,k.api_base&&` • ${k.api_base}`]})]})},k.id))}):t.length===0?l.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(o||t.length===0)&&l.jsxs("div",{className:"custom-model-form",children:[l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Provider"}),l.jsxs("select",{value:((h=e.model)==null?void 0:h.provider)||"gemini",onChange:k=>d({provider:k.target.value}),children:[l.jsx("option",{value:"gemini",children:"Gemini"}),l.jsx("option",{value:"litellm",children:"LiteLLM"}),l.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"Model Name"}),l.jsx("input",{type:"text",value:((v=e.model)==null?void 0:v.model_name)||"",onChange:k=>d({model_name:k.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),((x=e.model)==null?void 0:x.provider)==="litellm"&&l.jsxs("div",{className:"form-group",style:{flex:2},children:[l.jsx("label",{children:"API Base"}),l.jsx("input",{type:"text",value:((N=e.model)==null?void 0:N.api_base)||"",onChange:k=>d({api_base:k.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Temperature"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:((m=e.model)==null?void 0:m.temperature)??"",onChange:k=>d({temperature:k.target.value?parseFloat(k.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Max Tokens"}),l.jsx("input",{type:"number",value:((g=e.model)==null?void 0:g.max_output_tokens)??"",onChange:k=>d({max_output_tokens:k.target.value?parseInt(k.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top P"}),l.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:((y=e.model)==null?void 0:y.top_p)??"",onChange:k=>d({top_p:k.target.value?parseFloat(k.target.value):void 0}),placeholder:"Default"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Top K"}),l.jsx("input",{type:"number",min:"1",value:((E=e.model)==null?void 0:E.top_k)??"",onChange:k=>d({top_k:k.target.value?parseInt(k.target.value):void 0}),placeholder:"Default"})]})]})]})]})}const zs=[{type:"LlmAgent",label:"LLM Agent",icon:Vn,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:Y1,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:W1,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Ea,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function rS(){return`agent_${Date.now().toString(36)}`}function iS(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function oS(e,t){const r={id:rS(),name:`New ${e}`,description:""},i=t?iS(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function lS({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:s,mcpServers:a}=Mt(),[u,c]=_.useState(!1),[d,p]=_.useState(new Set),[f,h]=_.useState(!1),[v,x]=_.useState(""),[N,m]=_.useState(!1);if(_.useEffect(()=>{if(t){const A=t.agents.filter(T=>"sub_agents"in T&&T.sub_agents.length>0).map(T=>T.id);p(new Set(A))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;async function g(){var A,T,L,D;if(!(!v.trim()||!t)){m(!0);try{const K=await zm(t.id,v);if(K.success&&K.config){const $=K.config,q=[];if((A=$.tools)!=null&&A.builtin)for(const S of $.tools.builtin)q.push({type:"builtin",name:S});if((T=$.tools)!=null&&T.mcp)for(const S of $.tools.mcp){const re=a.find(ne=>ne.name===S.server);re&&q.push({type:"mcp",server:{...re,tool_filter:S.tools}})}if((L=$.tools)!=null&&L.custom)for(const S of $.tools.custom){const re=t.custom_tools.find(ne=>ne.name===S);re&&q.push({type:"function",name:S,module_path:re.module_path})}if((D=$.tools)!=null&&D.agents)for(const S of $.tools.agents){const re=t.agents.find(ne=>ne.id===S);re&&q.push({type:"agent",agent_id:S,name:re.name})}const w=t.app.models||[],W=w.find(S=>S.id===t.app.default_model_id)||w[0],Q={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:$.name||"new_agent",description:$.description||"",instruction:$.instruction||"",model:W?{provider:W.provider,model_name:W.model_name,api_base:W.api_base,temperature:W.temperature,max_output_tokens:W.max_output_tokens,top_p:W.top_p,top_k:W.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:q,sub_agents:$.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(Q),s(Q.id),e==null||e(Q.id),h(!1),x("")}else alert("Failed to generate agent: "+(K.error||"Unknown error"))}catch(K){alert("Error generating agent: "+K.message)}finally{m(!1)}}}const y=t.agents.find(A=>A.id===o);function E(A){s(A),e==null||e(A)}function k(A){const T=t.app.models||[],L=T.find(K=>K.id===t.app.default_model_id)||T[0],D=oS(A,L);n(D),E(D.id),c(!1)}function b(A,T){T.stopPropagation(),confirm("Delete this agent?")&&(r(A),o===A&&(e==null||e(null)))}function I(A){const T=new Set(d);T.has(A)?T.delete(A):T.add(A),p(T)}function j(A){const T=zs.find(L=>L.type===A);return T?T.icon:Vn}function P(A){const T=zs.find(L=>L.type===A);return T?T.color:"#888"}function z(A,T=0){return A.map(L=>{const D=j(L.type),K=P(L.type),$="sub_agents"in L&&L.sub_agents.length>0,q=d.has(L.id),w=$?L.sub_agents.map(W=>t.agents.find(Q=>Q.id===W)).filter(W=>W!==void 0):[];return l.jsxs("div",{className:"agent-tree-item",children:[l.jsxs("div",{className:`agent-item ${o===L.id?"selected":""}`,onClick:()=>E(L.id),style:{paddingLeft:12+T*20},children:[$?l.jsx("button",{className:"expand-btn",onClick:W=>{W.stopPropagation(),I(L.id)},children:q?l.jsx(Ft,{size:16}):l.jsx(Bt,{size:16})}):l.jsx("span",{style:{width:20}}),l.jsx("div",{className:"agent-icon",style:{background:K},children:l.jsx(D,{size:14})}),l.jsx("span",{className:"agent-name",children:L.name}),l.jsx("span",{className:"agent-type",children:L.type}),l.jsx("button",{className:"delete-btn",onClick:W=>b(L.id,W),children:l.jsx(pt,{size:14})})]}),$&&q&&l.jsx("div",{className:"sub-agents",children:z(w,T+1)})]},L.id)})}const O=new Set(t.agents.flatMap(A=>"sub_agents"in A?A.sub_agents:[])),C=t.agents.filter(A=>!O.has(A.id));return l.jsxs("div",{className:"agents-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"agents-sidebar",children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["Agents (",t.agents.length,")"]}),l.jsxs("div",{className:"header-buttons",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>h(!0),title:"AI-powered agent setup",children:[l.jsx(hs,{size:14}),"Quick"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>c(!0),children:[l.jsx(Ge,{size:14}),"Add"]})]})]}),l.jsx("div",{className:"agents-list",children:t.agents.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Vn,{size:32}),l.jsx("p",{children:"No agents yet"})]}):z(C)})]}),l.jsx("div",{className:"agent-editor-area",children:y?l.jsx(eS,{agent:y}):l.jsxs("div",{className:"empty-state card",children:[l.jsx(Vn,{size:48}),l.jsxs("p",{children:["Select an agent to edit",l.jsx("br",{}),"or create a new one"]})]})}),u&&l.jsx("div",{className:"type-selector",onClick:()=>c(!1),children:l.jsxs("div",{className:"type-selector-content",onClick:A=>A.stopPropagation(),children:[l.jsx("h2",{children:"Add Agent"}),l.jsx("div",{className:"type-options",children:zs.map(({type:A,label:T,icon:L,color:D,description:K})=>l.jsxs("button",{className:"type-option",onClick:()=>k(A),children:[l.jsx("div",{className:"type-option-icon",style:{background:D},children:l.jsx(L,{size:20})}),l.jsxs("div",{className:"type-option-info",children:[l.jsx("h4",{children:T}),l.jsx("p",{children:K})]})]},A))})]})}),f&&l.jsx("div",{className:"type-selector",onClick:()=>!N&&h(!1),children:l.jsxs("div",{className:"quick-setup-content",onClick:A=>A.stopPropagation(),children:[l.jsxs("h2",{children:[l.jsx(hs,{size:20})," Quick Agent Setup"]}),l.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do, and AI will configure everything: name, description, instruction, tools, and sub-agents."}),l.jsxs("div",{className:"quick-setup-form",children:[l.jsx("textarea",{value:v,onChange:A=>x(A.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,disabled:N,autoFocus:!0}),l.jsxs("div",{className:"quick-setup-info",children:[l.jsx("strong",{children:"Available resources:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),l.jsxs("li",{children:[a.length," MCP servers"]}),l.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),l.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),l.jsxs("div",{className:"quick-setup-actions",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>h(!1),disabled:N,children:"Cancel"}),l.jsx("button",{className:"btn btn-primary",onClick:g,disabled:N||!v.trim(),children:N?l.jsxs(l.Fragment,{children:[l.jsx($i,{size:14,className:"spin"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(hs,{size:14}),"Create Agent"]})})]})]})]})})]})}var lc="\x1B[0m",sc="\x1B[1m",Ig=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",sS=e=>{let t=Ig(e),n=`${sc}[MONACOPILOT ERROR] ${t}${lc}`;return console.error(n),{message:t}},aS=(e,t)=>{console.warn(`${sc}[MONACOPILOT WARN] ${e}${t?`
${Ig(t)}`:""}${lc}`)},uS=(e,t,n)=>console.warn(`${sc}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${lc}`),fl={report:sS,warn:aS,warnDeprecated:uS},Mp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let s=r.slice(-t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)}let o=r.slice(0,t);return o.every(s=>s==="")?`
`.repeat(t):o.join(`
`)},cS=100,dS=!0,Ag="onIdle",pS=!0,fS=120,hS=400,mS=0,ac=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),gS=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),xS=e=>e.getValue(),yS=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},Og=class Mg{constructor(){this.cache=new yS(Mg.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=ac(n,r),s=o,a=r.getLineContent(n.lineNumber);if(n.column===a.length+1&&n.lineNumber<r.getLineCount()){let c=r.getLineContent(n.lineNumber+1);s=`${o}
${c}`}if(!(s.trim().includes(i)||i.includes(s.trim())))return!1;let u=r.getValueInRange(t.range);return this.isPartialMatch(u,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:s,endColumn:a}=r,{lineNumber:u,column:c}=n;return u<i||u>s?!1:i===s?c>=o-1&&c<=a+1:u===i?c>=o-1:u===s?c<=a+1:!0}};Og.MAX_CACHE_SIZE=20;var vS=Og,bS=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],s=o.trim().startsWith("```");if(s&&!r){r=!0;continue}if(s&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},wS=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,s=0,a=0,u=0,c=Math.min(r,i);for(let f=1;f<=c;f++){let h=e.substring(0,f),v=t.slice(-f);h===v&&(u=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)s++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(a=f);let p=Math.max(s,a);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:u,maxOverlapLength:p}}},kS=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new wS}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:s,maxOverlapLength:a}=this.textOverlapCalculator.findOverlaps(t,i,o),u=s>0?n.getPositionAt(r-s):e,c=r+a,d=n.getPositionAt(c);return new this.monaco.Range(u.lineNumber,u.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,s=n+o,a=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,s,a)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},jS=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},SS=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:s,maxContextLines:a=cS}=n,u=s&&s.length>0?3:2,c=a?Math.floor(a/u):void 0,d=(x,N,m)=>{let g=x(e,t);return N?Mp(g,N,m):g},p=(x,N)=>!x||!N?x:x.map(({content:m,...g})=>({...g,content:Mp(m,N)})),f=d(ac,c,{truncateDirection:"keepEnd"}),h=d(gS,c,{truncateDirection:"keepStart"}),v=p(s,c);return{filename:r,language:i,technologies:o,relatedFiles:v,textBeforeCursor:f,textAfterCursor:h,cursorPosition:e}},CS=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let s,a,u=new Promise((c,d)=>{s=c,a=d});return r={args:o,promise:u,resolve:s,reject:a},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let c=r;if(c){r=null,n=null;try{let d=await e(...c.args);c.resolve(d)}catch(d){c.reject(d)}}},t),u};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},_S=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,Zr=e=>({items:e,enableForwardStability:!0}),Ba=new vS,NS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:s=Ag,enableCaching:a=dS,allowFollowUpCompletions:u=pS,onError:c,requestHandler:d}=o;if(a&&!i){let p=Ba.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return Zr(p)}if(r.isCancellationRequested||!u&&i)return Zr([]);try{let p=CS(async v=>{var N,m;(N=o.onCompletionRequested)==null||N.call(o,v);let x;if(d)x=await d(v);else if(o.endpoint)x=await jS({endpoint:o.endpoint,...v});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(x.error)throw new Error(x.error);return(m=o.onCompletionRequestFinished)==null||m.call(o,v,x),x},{onTyping:fS,onIdle:hS,onDemand:mS}[s]);r.onCancellationRequested(()=>{p.cancel()});let f=SS({pos:n,mdl:t,options:o}),{completion:h}=await p({body:{completionMetadata:f}});if(h){let v=new bS(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),x=new kS(e);return a&&Ba.add({completion:v,range:x.computeCacheRange(n,v),textBeforeCursor:ac(n,t)}),Zr([{insertText:v,range:x.computeInsertionRange(n,v,t)}])}}catch(p){if(_S(p))return Zr([]);c?c(p):fl.warn("Cannot provide completion",p)}return Zr([])},uc=new WeakMap,Dl=e=>uc.get(e),ES=(e,t)=>{uc.set(e,t)},Rp=e=>{uc.delete(e)},zS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),TS=(e,t)=>{let n=Dl(e);!n||!n.options||(n.options={...n.options,...t})},PS=(e,t,n)=>{let r=Dl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,s,a)=>{if(i!==t.getModel())return{items:[]};let u=r.options||n;if(!(u.trigger==="onDemand"&&!r.isExplicitlyTriggered||u.triggerIf&&!u.triggerIf({text:xS(t),position:o,triggerType:u.trigger??Ag})))return NS({monaco:e,mdl:i,pos:o,token:a,isCompletionAccepted:r.isCompletionAccepted,options:u})},handleItemDidShow:(i,o,s)=>{var a,u;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(u=(a=r.options||n).onCompletionShown)==null||u.call(a,s,o.range))},freeInlineCompletions:()=>{}}):null},LS={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},IS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(LS).some(t=>t(this.monaco,e))}},AS=(e,t,n,r)=>{let i=new IS(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},OS=(e,t,n)=>{let r=[];ES(t,zS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Dl(t);if(!i)return fl.warn("Completion is not registered properly. State not found."),RS();let o=PS(e,t,n);o&&r.push(o);let s=AS(e,t,i,n);return r.push(s),{deregister:()=>{for(let a of r)a.dispose();Ba.clear(),Rp(t)},trigger:()=>MS(t),updateOptions:a=>{TS(t,a(i.options||n))}}}catch(i){return n.onError?n.onError(i):fl.report(i),{deregister:()=>{for(let o of r)o.dispose();Rp(t)},trigger:()=>{},updateOptions:()=>{}}}},MS=e=>{let t=Dl(e);if(!t){fl.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},RS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function DS(){return`tool_${Date.now().toString(36)}`}const $S=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
    """Description of what this tool does.
    
    Args:
        param1: Description of this parameter
    
    Returns:
        A dictionary with the result
    """
    # Access state: tool_context.state['key']
    # Set state: tool_context.state['key'] = value
    
    return {"result": "success"}
`;function FS({onSelectTool:e}){var yt;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:s,setSelectedToolId:a,builtinTools:u,mcpServers:c}=Mt(),[d,p]=_.useState(""),[f,h]=_.useState(null),[v,x]=_.useState("tools"),[N,m]=_.useState(null),[g,y]=_.useState(""),[E,k]=_.useState(!1),[b,I]=_.useState(null),[j,P]=_.useState(!1),[z,O]=_.useState(!1),[C,A]=_.useState(null);if(!t)return null;const T=t.mcp_servers||[],L=t.custom_tools.find(R=>R.id===s),D=T.find(R=>R.name===N),K=new Set(T.map(R=>R.name)),$=c.filter(R=>!K.has(R.name));function q(R){a(R),e==null||e(R)}_.useEffect(()=>{L&&p(L.code)},[s]),_.useEffect(()=>{D&&(y(JSON.stringify(D,null,2)),k(!1))},[N]);function w(){const R=DS();r({id:R,name:"new_tool",description:"",module_path:"tools.custom",code:$S,state_keys_used:[]}),q(R)}function W(R,ae){ae.stopPropagation(),confirm("Delete this tool?")&&(o(R),s===R&&(e==null||e(null)))}function Q(R){L&&i(L.id,R)}function S(R){R!==void 0&&L&&(p(R),Q({code:R}))}async function re(){if(L){P(!0);try{const R=await Tm(t.id,L.name,L.description,L.state_keys_used);R.success&&R.code?(p(R.code),Q({code:R.code})):(console.error("Failed to generate tool code:",R.error),alert("Failed to generate tool code: "+(R.error||"Unknown error")))}catch(R){console.error("Error generating tool code:",R),alert("Error generating tool code: "+R.message)}finally{P(!1)}}}const ne=_.useRef(null),de=_.useCallback((R,ae)=>{ne.current&&ne.current();const Pe=OS(ae,R,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});ne.current=Pe},[]);_.useEffect(()=>()=>{ne.current&&ne.current()},[]);function F(){const R={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...T,R]}),m(R.name),I(null)}function Y(R){const ae={...R};n({mcp_servers:[...T,ae]}),m(ae.name),I(null)}function oe(R,ae){ae.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:T.filter(Pe=>Pe.name!==R)}),N===R&&m(null))}function he(R){R!==void 0&&(y(R),k(R!==JSON.stringify(D,null,2)))}function ye(){if(D)try{const R=JSON.parse(g),ae=D.name,Pe=T.map(vt=>vt.name===ae?R:vt);n({mcp_servers:Pe}),m(R.name),k(!1)}catch(R){alert("Invalid JSON: "+R.message)}}async function ce(){O(!0),A(null);try{const R=JSON.parse(g),ae=await Pm({connection_type:R.connection_type,command:R.command,args:R.args,env:R.env,url:R.url,headers:R.headers,timeout:R.timeout||30});if(A(ae),ae.success&&ae.tools.length>0){const Pe={...R,tool_filter:ae.tools.map(vt=>vt.name)};y(JSON.stringify(Pe,null,2)),k(!0)}}catch(R){A({success:!1,tools:[],error:R.message})}finally{O(!1)}}const Ke={};return t.custom_tools.forEach(R=>{const ae=R.module_path||"tools";Ke[ae]||(Ke[ae]=[]),Ke[ae].push(R)}),l.jsxs("div",{className:"tools-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"tools-sidebar",children:[l.jsxs("div",{className:"sidebar-tabs",children:[l.jsxs("button",{className:`sidebar-tab ${v==="tools"?"active":""}`,onClick:()=>x("tools"),children:[l.jsx(qt,{size:14}),"Tools"]}),l.jsxs("button",{className:`sidebar-tab ${v==="mcp"?"active":""}`,onClick:()=>x("mcp"),children:[l.jsx(tr,{size:14}),"MCP"]})]}),v==="tools"?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:w,children:[l.jsx(Ge,{size:14}),"New"]})]}),l.jsxs("div",{className:"tools-tree",children:[u.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Md,{size:14}),"Built-in Tools"]}),u.map(R=>l.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===R.name?"selected":""}`,onClick:()=>{h(R),q(null),m(null)},children:[l.jsx(za,{size:14}),l.jsx("span",{className:"tool-name",children:R.name})]},R.name))]}),t.custom_tools.length===0&&u.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(ul,{size:32}),l.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(Ke).map(([R,ae])=>l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(U1,{size:14}),R]}),ae.map(Pe=>l.jsxs("div",{className:`tool-item ${s===Pe.id?"selected":""}`,onClick:()=>{q(Pe.id),h(null),m(null)},children:[l.jsx(qt,{size:14}),l.jsx("span",{className:"tool-name",children:Pe.name}),l.jsx("button",{className:"delete-btn",onClick:vt=>W(Pe.id,vt),children:l.jsx(pt,{size:14})})]},Pe.id))]},R))]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsxs("h3",{children:["MCP Servers (",T.length,")"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:F,children:[l.jsx(Ge,{size:14}),"Custom"]})]}),l.jsxs("div",{className:"tools-tree",children:[T.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Od,{size:14}),"Configured (",T.length,")"]}),T.map(R=>l.jsxs("div",{className:`tool-item ${N===R.name?"selected":""}`,onClick:()=>{m(R.name),I(null),q(null),h(null)},children:[l.jsx(tr,{size:14}),l.jsx("span",{className:"tool-name",children:R.name}),l.jsx("span",{className:"tool-type-badge",children:R.connection_type}),l.jsx("button",{className:"delete-btn",onClick:ae=>oe(R.name,ae),children:l.jsx(pt,{size:14})})]},R.name))]}),$.length>0&&l.jsxs("div",{className:"module-group",children:[l.jsxs("div",{className:"module-header",children:[l.jsx(Md,{size:14}),"Available Templates (",$.length,")"]}),$.map(R=>l.jsxs("div",{className:`tool-item known-server ${(b==null?void 0:b.name)===R.name?"selected":""}`,onClick:()=>{I(R),m(null),q(null),h(null)},children:[l.jsx(tr,{size:14}),l.jsx("span",{className:"tool-name",children:R.name}),l.jsx("span",{className:"tool-type-badge",children:R.connection_type})]},R.name))]}),T.length===0&&$.length===0&&l.jsxs("div",{className:"empty-state",children:[l.jsx(tr,{size:32}),l.jsx("p",{children:"No MCP servers available"})]})]})]})]}),l.jsx("div",{className:"tool-editor",children:f?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(za,{size:20,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),l.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),l.jsxs("div",{className:"builtin-tool-info",children:[l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{children:f.description||"No description available."})]}),l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Usage"}),l.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),l.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),l.jsxs("div",{className:"info-section",children:[l.jsx("h4",{children:"Note"}),l.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):L?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(qt,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("input",{type:"text",value:L.name,onChange:R=>Q({name:R.target.value}),placeholder:"Tool name"})]}),l.jsxs("div",{className:"editor-meta",children:[l.jsxs("div",{className:"meta-field grow",children:[l.jsx("label",{children:"Description"}),l.jsx("input",{type:"text",value:L.description,onChange:R=>Q({description:R.target.value}),placeholder:"What does this tool do?"})]}),l.jsxs("div",{className:"meta-field",children:[l.jsx("label",{children:"Module Path"}),l.jsx("input",{type:"text",value:L.module_path,onChange:R=>Q({module_path:R.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),l.jsxs("div",{className:"code-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:re,disabled:j||!L.name||!L.description,title:!L.name||!L.description?"Add a name and description first":"Generate code using AI",children:j?l.jsxs(l.Fragment,{children:[l.jsx($i,{size:14,className:"spinning"}),"Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Dm,{size:14}),"Write Tool"]})}),l.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),l.jsx("div",{className:"code-editor",children:l.jsx(Bi,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:S,onMount:de,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),l.jsxs("div",{className:"state-keys-panel",children:[l.jsxs("h4",{children:[l.jsx(Am,{size:14})," State Keys Used"]}),l.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?l.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(R=>{const ae=L.state_keys_used.includes(R.name);return l.jsxs("label",{className:`state-key-chip ${ae?"selected":""}`,title:R.description,children:[l.jsx("input",{type:"checkbox",checked:ae,onChange:Pe=>{const vt=Pe.target.checked?[...L.state_keys_used,R.name]:L.state_keys_used.filter(Xn=>Xn!==R.name);Q({state_keys_used:vt})}}),R.name,l.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",R.type,")"]})]},R.name)})})]})]}):b?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(tr,{size:20,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:b.name}),l.jsx("span",{className:"badge badge-info",children:b.connection_type}),l.jsx("span",{className:"badge badge-muted",children:"Template"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>Y(b),children:[l.jsx(Ge,{size:14}),"Add to Project"]})]}),l.jsxs("div",{className:"known-server-preview",children:[l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("p",{children:b.description})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Command"}),l.jsxs("code",{children:[b.command," ",(yt=b.args)==null?void 0:yt.join(" ")]})]}),b.env&&Object.keys(b.env).length>0&&l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Required Environment Variables"}),l.jsx("div",{className:"env-vars",children:Object.entries(b.env).map(([R,ae])=>l.jsxs("div",{className:"env-var",children:[l.jsx("code",{children:R}),ae?l.jsx("span",{className:"env-value",children:ae}):l.jsx("span",{className:"env-required",children:"Required"})]},R))})]}),b.tool_filter&&b.tool_filter.length>0&&l.jsxs("div",{className:"preview-section",children:[l.jsxs("h4",{children:["Available Tools (",b.tool_filter.length,")"]}),l.jsx("div",{className:"tool-badges",children:b.tool_filter.map(R=>l.jsx("span",{className:"tool-badge",children:R},R))})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("h4",{children:"Configuration Preview"}),l.jsx("pre",{className:"config-preview",children:JSON.stringify(b,null,2)})]})]})]}):D?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(tr,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:D.name}),l.jsx("span",{className:"badge badge-info",children:D.connection_type}),E&&l.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:ce,disabled:z,title:"Test connection and discover available tools",children:[z?l.jsx($i,{size:14,className:"spin"}):l.jsx(Od,{size:14}),z?"Testing...":"Test Connection"]}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ye,disabled:!E,children:[l.jsx(Rm,{size:14}),"Save"]})]}),C&&l.jsx("div",{className:`mcp-test-result ${C.success?"success":"error"}`,children:C.success?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",C.tools.length," tools"]}),C.tools.length>0&&l.jsxs("div",{className:"test-result-tools",children:[l.jsx("strong",{children:"Available tools:"}),l.jsx("ul",{children:C.tools.map(R=>l.jsxs("li",{children:[l.jsx("code",{children:R.name}),R.description&&l.jsxs("span",{children:[" — ",R.description]})]},R.name))}),l.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),l.jsx("div",{className:"test-result-error",children:C.error})]})}),l.jsx("div",{className:"mcp-info",children:l.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),l.jsx("div",{className:"code-editor",children:l.jsx(Bi,{height:"100%",language:"json",theme:"vs-dark",value:g,onChange:he,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),l.jsxs("div",{className:"mcp-help",children:[l.jsx("h4",{children:"Schema Reference"}),l.jsxs("div",{className:"schema-fields",children:[l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"name"}),l.jsx("span",{children:"Unique identifier for this server"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"description"}),l.jsx("span",{children:"Human-readable description"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"connection_type"}),l.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"command"}),l.jsx("span",{children:"Command to run (for stdio)"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"args"}),l.jsx("span",{children:"Array of command arguments"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"env"}),l.jsx("span",{children:"Environment variables object"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"url"}),l.jsx("span",{children:"Server URL (for sse/http)"})]}),l.jsxs("div",{className:"schema-field",children:[l.jsx("code",{children:"tool_filter"}),l.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(ul,{size:48}),l.jsxs("p",{children:["Select a tool to view",l.jsx("br",{}),"or create a new custom tool"]})]})})]})}const Dp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},BS={agent_start:Ea,agent_end:Ea,tool_call:qt,tool_result:qt,model_call:Vu,model_response:Mm,state_change:hi,transfer:Bm};function US(e){var t,n,r,i,o,s,a,u,c,d,p,f,h,v,x,N;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const g=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([P,z])=>{const O=z!=null?JSON.stringify(z):"null";return`${P}=${O.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${g.slice(0,60)}${g.length>60?"...":""})`;case"tool_result":const y=(i=e.data)==null?void 0:i.result;let E="";if((s=(o=y==null?void 0:y.content)==null?void 0:o[0])!=null&&s.text)E=String(y.content[0].text).slice(0,60);else if(typeof y=="string")E=y.slice(0,60);else if(y!=null){const P=JSON.stringify(y);E=P?P.slice(0,60):""}else E="";return`RESULT ${((a=e.data)==null?void 0:a.tool_name)||"unknown"} → ${E}${E.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((c=(u=e.data)==null?void 0:u.contents)==null?void 0:c.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const k=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((h=e.data)==null?void 0:h.parts)||[],b=k.find(P=>(P==null?void 0:P.type)==="function_call");if(b)return`LLM_RSP → ${b.name||"unknown"}()`;const I=k.find(P=>(P==null?void 0:P.type)==="text");if(I!=null&&I.text){const P=String(I.text);return`LLM_RSP "${P.slice(0,50)}${P.length>50?"...":""}"`}return`LLM_RSP (${((v=e.data)==null?void 0:v.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((x=e.data)==null?void 0:x.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((N=e.data)==null?void 0:N.target)||"unknown"}`;default:return e.event_type.toUpperCase()}}function VS(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function WS({event:e}){var o,s,a,u,c,d,p,f,h,v;const[t,n]=_.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=x=>{const N=new Set(t);N.has(x)?N.delete(x):N.add(x),n(N)},i=(x,N=0,m=!1)=>{const g="  ".repeat(N),y="  ".repeat(N+1);if(x===null)return l.jsx("span",{className:"json-null",children:"null"});if(x===void 0)return l.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof x=="boolean")return l.jsx("span",{className:"json-boolean",children:x.toString()});if(typeof x=="number")return l.jsx("span",{className:"json-number",children:x});if(typeof x=="string"){const E=x.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return E.length>300&&N>0?l.jsxs("span",{className:"json-string",children:['"',E.slice(0,300),'..." ',l.jsxs("span",{className:"json-truncated",children:["(",x.length," chars)"]})]}):l.jsxs("span",{className:"json-string",children:['"',E,'"']})}if(Array.isArray(x))return x.length===0?l.jsx("span",{className:"json-bracket",children:"[]"}):x.every(k=>k===null||typeof k!="object")&&x.length<=3?l.jsxs("span",{className:"json-inline",children:[l.jsx("span",{className:"json-bracket",children:"["}),x.map((k,b)=>l.jsxs("span",{children:[i(k,N+1,!0),b<x.length-1&&l.jsx("span",{className:"json-comma",children:", "})]},b)),l.jsx("span",{className:"json-bracket",children:"]"})]}):l.jsxs("span",{className:"json-block",children:[l.jsx("span",{className:"json-bracket",children:"["}),x.map((k,b)=>l.jsxs("span",{children:[`
`+y,i(k,N+1),b<x.length-1&&l.jsx("span",{className:"json-comma",children:","})]},b)),`
`+g,l.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof x=="object"){const E=Object.entries(x);return E.length===0?l.jsx("span",{className:"json-bracket",children:"{}"}):E.length<=2&&E.every(([,b])=>b===null||typeof b!="object")&&m?l.jsxs("span",{className:"json-inline",children:[l.jsx("span",{className:"json-bracket",children:"{"}),E.map(([b,I],j)=>l.jsxs("span",{children:[l.jsxs("span",{className:"json-key",children:['"',b,'"']}),l.jsx("span",{className:"json-colon",children:": "}),i(I,N+1,!0),j<E.length-1&&l.jsx("span",{className:"json-comma",children:", "})]},b)),l.jsx("span",{className:"json-bracket",children:"}"})]}):l.jsxs("span",{className:"json-block",children:[l.jsx("span",{className:"json-bracket",children:"{"}),E.map(([b,I],j)=>l.jsxs("span",{children:[`
`+y,l.jsxs("span",{className:"json-key",children:['"',b,'"']}),l.jsx("span",{className:"json-colon",children:": "}),i(I,N+1),j<E.length-1&&l.jsx("span",{className:"json-comma",children:","})]},b)),`
`+g,l.jsx("span",{className:"json-bracket",children:"}"})]})}return String(x)};return l.jsxs("div",{className:"event-detail",children:[l.jsxs("div",{className:"detail-header",children:[l.jsx("span",{className:"detail-type",children:e.event_type}),l.jsx("span",{className:"detail-agent",children:e.agent_name}),l.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?l.jsx(Ft,{size:12}):l.jsx(Bt,{size:12}),l.jsx("span",{children:"Event Data"})]}),t.has("data")&&l.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?l.jsx(Ft,{size:12}):l.jsx(Bt,{size:12}),l.jsx("span",{children:"Instruction"}),l.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&l.jsx("div",{className:"section-content",children:l.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((s=e.data)==null?void 0:s.contents)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?l.jsx(Ft,{size:12}):l.jsx(Bt,{size:12}),l.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&l.jsx("div",{className:"section-content",children:e.data.contents.map((x,N)=>{var m;return l.jsxs("div",{className:"message-item",children:[l.jsx("span",{className:`message-role ${x.role}`,children:x.role}),l.jsx("div",{className:"message-parts",children:(m=x.parts)==null?void 0:m.map((g,y)=>l.jsxs("div",{className:"message-part",children:[g.text&&l.jsx("pre",{children:g.text}),g.function_call&&l.jsxs("div",{className:"function-call",children:[l.jsx("strong",{children:g.function_call.name}),l.jsx("pre",{children:JSON.stringify(g.function_call.args,null,2)})]}),g.function_response&&l.jsxs("div",{className:"function-response",children:[l.jsx("strong",{children:g.function_response.name}),l.jsx("pre",{children:JSON.stringify(g.function_response.response,null,2)})]})]},y))})]},N)})})]}),e.event_type==="tool_result"&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?l.jsx(Ft,{size:12}):l.jsx(Bt,{size:12}),l.jsx("span",{children:"Tool Result"})]}),t.has("result")&&l.jsx("div",{className:"section-content",children:l.jsx("pre",{className:"result-content",children:((d=(c=(u=(a=e.data)==null?void 0:a.result)==null?void 0:u.content)==null?void 0:c[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((h=e.data)==null?void 0:h.parts)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?l.jsx(Ft,{size:12}):l.jsx(Bt,{size:12}),l.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.tokens&&l.jsxs("span",{className:"token-badge",children:[e.data.tokens.input,"↑ ",e.data.tokens.output,"↓"]})]}),t.has("response")&&l.jsx("div",{className:"section-content",children:e.data.parts.map((x,N)=>l.jsxs("div",{className:"response-part",children:[x.type==="text"&&x.text&&l.jsx("pre",{className:"response-text",children:x.text}),x.type==="function_call"&&l.jsxs("div",{className:"function-call",children:[l.jsxs("strong",{children:["→ ",x.name,"()"]}),x.args&&Object.keys(x.args).length>0&&l.jsx("pre",{children:JSON.stringify(x.args,null,2)})]}),x.thought&&l.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},N))})]}),e.event_type==="state_change"&&((v=e.data)==null?void 0:v.state_delta)&&l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?l.jsx(Ft,{size:12}):l.jsx(Bt,{size:12}),l.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&l.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([x,N])=>l.jsxs("div",{className:"state-delta-item",children:[l.jsx("div",{className:"state-delta-key",children:x}),l.jsx("pre",{className:"state-delta-value",children:typeof N=="string"?N:JSON.stringify(N,null,2)})]},x))})]})]})}function HS({events:e,selectedEventIndex:t,project:n}){const r=_.useMemo(()=>{var a;const o={};return(a=n==null?void 0:n.app)!=null&&a.state_keys&&n.app.state_keys.forEach(u=>{o[u.name]={value:void 0,timestamp:null,defined:!0,description:u.description,type:u.type}}),n!=null&&n.agents&&n.agents.forEach(u=>{if(u.type==="LlmAgent"&&u.output_key){const c=u.output_key;o[c]||(o[c]={value:void 0,timestamp:null,defined:!0,description:`Output from ${u.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(u=>u.event_type==="state_change").forEach(u=>{var c;(c=u.data)!=null&&c.state_delta&&Object.entries(u.data.state_delta).forEach(([d,p])=>{var f;o[d]={...o[d],value:p,timestamp:u.timestamp,defined:((f=o[d])==null?void 0:f.defined)??!1}})}),o},[e,t,n]),i=Object.entries(r);return l.jsxs("div",{className:"state-snapshot",children:[l.jsx("style",{children:`
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
      `}),l.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),i.length===0?l.jsx("div",{className:"state-empty",children:"No state keys defined"}):i.map(([o,{value:s,timestamp:a,defined:u,description:c,type:d}])=>l.jsxs("div",{className:`state-entry ${s===void 0?"unset":""}`,children:[l.jsxs("div",{className:"state-key",children:[o,d&&l.jsxs("span",{className:"state-type",children:["(",d,")"]})]}),l.jsx("div",{className:"state-value",children:s===void 0?"(not set)":typeof s=="string"?s:JSON.stringify(s,null,2)}),c&&l.jsx("div",{className:"state-desc",children:c}),a&&l.jsx("div",{className:"state-time",children:new Date(a*1e3).toLocaleTimeString()})]},o))]})}let Ua=null,Va=null;(async()=>{try{Ua=(await Um(()=>import("./jq-CmjIRGCm.js").then(t=>t.j),[])).default}catch(e){console.warn("jq-web failed to load:",e.message),Va=e.message}})();function Ts(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function $p(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const s=new Function("value","data",`return ${i}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(o){return`[JS error: ${o}]`}}if(Ua)try{const i=Ua.json(r,n);return i==null?"[No match]":typeof i=="string"?i:JSON.stringify(i,null,2)}catch(i){if(!n.startsWith("."))try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch{}return`[jq error: ${i.message||i}]`}else{if(Va){if(n.startsWith(".")&&!n.includes("|"))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const s of i){const a=s.match(/^(\w+)?\[(\d+)\]$/);a?(a[1]&&(o=o[a[1]]),o=o[parseInt(a[2])]):o=o[s]}return typeof o=="string"?o:JSON.stringify(o,null,2)}catch{}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[jq not loaded: ${Va}. JS fallback failed: ${i.message}]`}}return"[jq loading...]"}}function qS({project:e,selectedEventIndex:t}){var de;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:s}=Mt(),[a,u]=_.useState(!1),[c,d]=_.useState(null),[p,f]=_.useState({}),[h,v]=_.useState(new Set),[x,N]=_.useState(""),[m,g]=_.useState(""),[y,E]=_.useState({}),[k,b]=_.useState(""),[I,j]=_.useState([]),[P,z]=_.useState(null),[O,C]=_.useState(null),[A,T]=_.useState(!1);_.useEffect(()=>{Uu().then(j).catch(console.error)},[]);const L=_.useMemo(()=>{const F=e.mcp_servers||[],Y=new Set(F.map(he=>he.name)),oe=I.filter(he=>!Y.has(he.name));return[...F,...oe]},[e.mcp_servers,I]),D=_.useCallback(async F=>{if(!(p[F]||h.has(F))){v(Y=>new Set([...Y,F]));try{const Y=await Te(`/projects/${e.id}/mcp-servers/${encodeURIComponent(F)}/test-connection`,{method:"POST"});Y.success&&f(oe=>({...oe,[F]:Y.tools}))}catch(Y){console.error("Failed to load tools:",Y)}finally{v(Y=>{const oe=new Set(Y);return oe.delete(F),oe})}}},[e.id,p,h]);_.useEffect(()=>{var he;if(c)return;if(!x||!m){E({});return}const Y=(p[x]||[]).find(ye=>ye.name===m);if(!((he=Y==null?void 0:Y.parameters)!=null&&he.properties)){E({});return}const oe={};Object.entries(Y.parameters.properties).forEach(([ye,ce])=>{ce.type==="string"?oe[ye]=ce.default||"":ce.type==="number"||ce.type==="integer"?oe[ye]=ce.default||0:ce.type==="boolean"?oe[ye]=ce.default||!1:oe[ye]=ce.default||null}),E(oe)},[x,m,p,c]);const K=()=>{d(null),N(""),g(""),E({}),b(""),z(null),C(null),u(!0)},$=F=>{if(d(F.id),N(F.serverName),g(F.toolName),E({...F.args}),b(F.transform||""),F.result){const{text:Y}=Ts(F.result);z(Y),C(null)}else z(null),C(null);p[F.serverName]||D(F.serverName),u(!0)},q=async()=>{if(!(!x||!m)){T(!0),C(null);try{const F=await Te(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:x,tool_name:m,arguments:y})}),{text:Y,isError:oe}=Ts(F);oe?(C(Y),z(null)):(z(Y),C(null))}catch(F){C(String(F)),z(null)}finally{T(!1)}}},w=_.useMemo(()=>P?!k||!k.trim()?P:$p(P,k):null,[P,k]),W=()=>{if(!(!x||!m)){if(c){r(c,{serverName:x,toolName:m,args:{...y},transform:k||void 0});const F=n.find(Y=>Y.id===c);F&&S({...F,serverName:x,toolName:m,args:y,transform:k||void 0,history:F.history||[]})}else{const F={id:`watch-${Date.now()}`,serverName:x,toolName:m,args:{...y},transform:k||void 0,history:[]};i(F),S(F)}u(!1)}},Q=F=>{o(F)},S=_.useCallback(async(F,Y)=>{r(F.id,{isLoading:!0,error:void 0});const oe=Y??s.length-1,he=Date.now();try{const ye=await Te(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:F.serverName,tool_name:F.toolName,arguments:F.args})}),ce={eventIndex:oe,timestamp:he,result:ye},Ke=[...F.history||[],ce];r(F.id,{result:ye,isLoading:!1,lastRun:he,history:Ke})}catch(ye){const ce={eventIndex:oe,timestamp:he,error:String(ye)},Ke=[...F.history||[],ce];r(F.id,{error:String(ye),isLoading:!1,lastRun:he,history:Ke})}},[e.id,r,s.length]),re=()=>{n.forEach(F=>S(F))},ne=_.useMemo(()=>!x||!m?null:(p[x]||[]).find(Y=>Y.name===m),[x,m,p]);return l.jsxs("div",{className:"tool-watch-panel",children:[l.jsxs("div",{className:"watch-header",children:[l.jsx(Di,{size:14}),l.jsx("span",{children:"Tool Watch"}),l.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),l.jsxs("div",{className:"watch-actions",children:[l.jsx("button",{className:"watch-btn",onClick:re,title:"Refresh all",children:l.jsx(gr,{size:12})}),l.jsx("button",{className:"watch-btn",onClick:K,title:"Add watch",children:l.jsx(Ge,{size:12})})]})]}),n.length===0?l.jsxs("div",{className:"watch-empty",children:[l.jsx(Di,{size:20,style:{opacity:.3}}),l.jsx("span",{children:"No watch expressions"}),l.jsxs("button",{className:"add-watch-btn",onClick:K,children:[l.jsx(Ge,{size:12})," Add Tool Watch"]})]}):l.jsx("div",{className:"watch-list",children:n.map(F=>{let Y=F.result,oe=F.error;if(t!==null&&F.history&&F.history.length>0){const yt=F.history.filter(R=>R.eventIndex<=t);if(yt.length>0){const R=yt[yt.length-1];Y=R.result,oe=R.error}else Y=void 0,oe=void 0}const{text:he,isError:ye}=Y?Ts(Y):{text:"",isError:!1},ce=Y?$p(he,F.transform):"",Ke=oe||ye;return l.jsxs("div",{className:`watch-item ${Ke?"error":""}`,children:[l.jsxs("div",{className:"watch-item-header",children:[l.jsxs("span",{className:"watch-expr",children:[l.jsx("span",{className:"watch-server",children:F.serverName}),l.jsx("span",{className:"watch-tool",children:F.toolName}),Object.keys(F.args).length>0&&l.jsxs("span",{className:"watch-args",children:["(",Object.entries(F.args).map(([yt,R])=>`${yt}=${JSON.stringify(R)}`).join(", "),")"]}),t!==null&&l.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),l.jsxs("div",{className:"watch-item-actions",children:[l.jsx("button",{onClick:()=>$(F),title:"Edit watch",children:l.jsx(qt,{size:10})}),l.jsx("button",{onClick:()=>S(F),title:"Refresh",children:F.isLoading?l.jsx(gr,{size:10,className:"spin"}):l.jsx(gr,{size:10})}),l.jsx("button",{onClick:()=>Q(F.id),title:"Remove",children:l.jsx(pt,{size:10})})]})]}),l.jsx("div",{className:"watch-result",children:F.isLoading?l.jsx("span",{className:"loading",children:"Loading..."}):oe?l.jsx("span",{className:"error",children:oe}):Y?l.jsx("pre",{className:ye?"error-text":"",children:ce}):l.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},F.id)})}),a&&l.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:l.jsxs("div",{className:"watch-dialog",onClick:F=>F.stopPropagation(),children:[l.jsxs("div",{className:"dialog-header",children:[l.jsx("span",{children:c?"Edit Watch":"Add Tool Watch"}),l.jsx("button",{onClick:()=>u(!1),children:l.jsx(X1,{size:14})})]}),l.jsxs("div",{className:"dialog-body",children:[l.jsxs("div",{className:"form-row",children:[l.jsx("label",{children:"MCP Server"}),l.jsxs("select",{value:x,onChange:F=>{N(F.target.value),c||g(""),F.target.value&&D(F.target.value)},children:[l.jsx("option",{value:"",children:"Select server..."}),L.map(F=>l.jsx("option",{value:F.name,children:F.name},F.name))]})]}),l.jsxs("div",{className:"form-row",children:[l.jsx("label",{children:"Tool"}),l.jsxs("select",{value:m,onChange:F=>g(F.target.value),disabled:!x||h.has(x),children:[l.jsx("option",{value:"",children:h.has(x)?"Loading tools...":"Select tool..."}),(p[x]||[]).map(F=>l.jsx("option",{value:F.name,children:F.name},F.name))]})]}),(ne==null?void 0:ne.description)&&l.jsx("div",{className:"tool-desc",children:ne.description}),((de=ne==null?void 0:ne.parameters)==null?void 0:de.properties)&&Object.keys(ne.parameters.properties).length>0&&l.jsxs("div",{className:"tool-args",children:[l.jsx("label",{children:"Arguments"}),Object.entries(ne.parameters.properties).map(([F,Y])=>{var oe,he;return l.jsxs("div",{className:"arg-row",children:[l.jsxs("span",{className:"arg-name",children:[F,((oe=ne.parameters.required)==null?void 0:oe.includes(F))&&l.jsx("span",{className:"required",children:"*"})]}),l.jsx("input",{type:Y.type==="number"||Y.type==="integer"?"number":"text",value:typeof y[F]=="object"?JSON.stringify(y[F]):y[F]??"",onChange:ye=>E(ce=>({...ce,[F]:ye.target.value})),placeholder:((he=Y.description)==null?void 0:he.slice(0,40))||F})]},F)})]}),x&&m&&l.jsxs("div",{className:"test-section",children:[l.jsxs("div",{className:"test-header",children:[l.jsx("label",{children:"Test & Preview"}),l.jsxs("button",{className:"test-btn",onClick:q,disabled:A,children:[A?l.jsx(gr,{size:12,className:"spin"}):l.jsx($n,{size:12}),A?"Running...":"Test Run"]})]}),O&&l.jsxs("div",{className:"test-result error",children:[l.jsx("span",{className:"test-label",children:"Error:"}),l.jsx("pre",{children:O})]}),P&&l.jsxs("div",{className:"test-result",children:[l.jsx("span",{className:"test-label",children:"Raw Result:"}),l.jsx("pre",{children:P})]})]}),l.jsxs("div",{className:"form-row transform-row",children:[l.jsx("label",{children:"Transform (optional)"}),l.jsx("input",{type:"text",value:k,onChange:F=>b(F.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),l.jsxs("div",{className:"transform-hints",children:[l.jsx("span",{className:"hint-title",children:"jq:"}),l.jsx("code",{onClick:()=>b(".items[0].name"),children:".items[0].name"}),l.jsx("code",{onClick:()=>b(".content[].text"),children:".content[].text"}),l.jsx("code",{onClick:()=>b(".result.content[0].text"),children:".result.content[0].text"}),l.jsx("code",{onClick:()=>b('.[] | select(.status == "active")'),children:".[] | select()"}),l.jsx("span",{className:"hint-title",children:"JS:"}),l.jsx("code",{onClick:()=>b("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),l.jsx("code",{onClick:()=>b("js:data.length"),children:"js:data.length"})]})]}),P&&k&&l.jsxs("div",{className:"transform-preview",children:[l.jsx("span",{className:"test-label",children:"Transform Preview:"}),l.jsx("pre",{className:w!=null&&w.startsWith("[Transform error")?"error":"",children:w})]})]}),l.jsxs("div",{className:"dialog-footer",children:[l.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),l.jsx("button",{className:"add-btn",onClick:W,disabled:!x||!m,children:c?"Save Changes":"Add Watch"})]})]})})]})}function KS(){var Fr;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:o,clearWatchHistories:s,runAgentId:a,setRunAgentId:u,watches:c,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=Mt(),[h,v]=_.useState(""),[x,N]=_.useState(null),[m,g]=_.useState(null),[y,E]=_.useState(null),[k,b]=_.useState(""),[I,j]=_.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"])),[P,z]=_.useState(!0),[O,C]=_.useState(!0),[A,T]=_.useState(!1),[L,D]=_.useState(360),[K,$]=_.useState(!1),[q,w]=_.useState([]),[W,Q]=_.useState(null),[S,re]=_.useState(!1),ne=_.useRef(0),de=_.useCallback(async(B,X)=>{if(!e)return;d(B.id,{isLoading:!0,error:void 0});const Z=X??r.length-1,ue=Date.now();try{const ge=await Te(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:B.serverName,tool_name:B.toolName,arguments:B.args})}),M={eventIndex:Z,timestamp:ue,result:ge},H=[...B.history||[],M];d(B.id,{result:ge,isLoading:!1,lastRun:ue,history:H})}catch(ge){const M={eventIndex:Z,timestamp:ue,error:String(ge)},H=[...B.history||[],M];d(B.id,{error:String(ge),isLoading:!1,lastRun:ue,history:H})}},[e==null?void 0:e.id,d,r.length]);_.useEffect(()=>{if(r.length>ne.current&&c.length>0){const B=r.length-1;c.forEach(X=>{X.isLoading||de(X,B)})}ne.current=r.length},[r.length,c,de]),_.useEffect(()=>{a!==null&&(Y(a),u(null))},[a,u]);const[F,Y]=_.useState(null),oe=_.useRef(null),he=_.useRef(null);_.useEffect(()=>{if(!K)return;const B=Z=>{if(!he.current)return;const ge=he.current.getBoundingClientRect().right-Z.clientX;D(Math.min(600,Math.max(200,ge)))},X=()=>{$(!1)};return document.addEventListener("mousemove",B),document.addEventListener("mouseup",X),()=>{document.removeEventListener("mousemove",B),document.removeEventListener("mouseup",X)}},[K]);const ye=_.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),ce=_.useMemo(()=>r.filter((B,X)=>{var Z,ue,ge;if(y&&(B.timestamp<y[0]||B.timestamp>y[1])||I.size>0&&!I.has(B.event_type))return!1;if(P&&B.event_type==="model_response"){const M=((ue=(Z=B.data)==null?void 0:Z.response_content)==null?void 0:ue.parts)||((ge=B.data)==null?void 0:ge.parts)||[],H=M.some(le=>le.type==="function_call"),te=M.some(le=>le.type==="text");if(!H&&!te)return!1}return!(k&&!JSON.stringify(B).toLowerCase().includes(k.toLowerCase()))}),[r,y,I,k,P]),Ke=m!==null?r[m]:null;_.useEffect(()=>{if(!e){w([]);return}(async()=>{re(!0);try{const X=await Na(e.id);w(X)}catch(X){console.error("Failed to load sessions:",X),w([])}finally{re(!1)}})()},[e]);const yt=_.useCallback(async B=>{if(!e||!B){Q(null);return}try{const X=await Sm(e.id,B);o(),s(),f(X.id),Q(B),g(null),E(null);for(const Z of X.events)i(Z)}catch(X){alert(`Failed to load session: ${X.message||"Unknown error"}`)}},[e,o,s,f,i]);_.useEffect(()=>{t&&oe.current&&(oe.current.scrollTop=oe.current.scrollHeight)},[r.length,t]);const R=_.useCallback(()=>{if(!e||!h.trim()||t)return;x&&(x.close(),N(null)),p||(o(),s(),Q(null)),n(!0),g(null),E(null);const B=Em(e.id);N(B),B.onopen=()=>{B.send(JSON.stringify({message:h,agent_id:F||void 0,session_id:p||void 0}))},B.onmessage=X=>{var ue;const Z=JSON.parse(X.data);if(Z.event_type==="agent_start"&&((ue=Z.data)!=null&&ue.session_id)){const ge=Z.data.session_id;Z.data.session_reused,f(ge),ge&&q.some(M=>M.id===ge)&&Q(ge)}else Z.type==="session_started"?(f(Z.session_id),Z.session_id&&q.some(ge=>ge.id===Z.session_id)&&Q(Z.session_id)):Z.type==="completed"?(n(!1),B.close()):Z.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:Z.error}})):i(Z)},B.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},B.onclose=()=>{n(!1)}},[e,h,t,x,o,n,i,F,p]),ae=_.useCallback(()=>{x==null||x.close(),n(!1)},[x,n]);_.useEffect(()=>{const B=X=>{if((X.metaKey||X.ctrlKey)&&X.key==="Enter"){X.preventDefault(),R();return}if(X.key==="ArrowDown"||X.key==="ArrowUp"){if(X.target instanceof HTMLInputElement||X.target instanceof HTMLTextAreaElement||(X.preventDefault(),ce.length===0))return;if(X.key==="ArrowDown")if(m===null){const Z=r.indexOf(ce[0]);g(Z)}else{const Z=ce.findIndex(ue=>r.indexOf(ue)===m);if(Z<ce.length-1){const ue=r.indexOf(ce[Z+1]);g(ue)}}else if(X.key==="ArrowUp")if(m===null){const Z=r.indexOf(ce[ce.length-1]);g(Z)}else{const Z=ce.findIndex(ue=>r.indexOf(ue)===m);if(Z>0){const ue=r.indexOf(ce[Z-1]);g(ue)}}}};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[R,ce,m,r]);const Pe=_.useCallback(()=>{var ge;if(r.length===0)return;const B={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:F||((ge=e==null?void 0:e.app)==null?void 0:ge.root_agent_id),events:r},X=new Blob([JSON.stringify(B,null,2)],{type:"application/json"}),Z=URL.createObjectURL(X),ue=document.createElement("a");ue.href=Z,ue.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ue),ue.click(),document.body.removeChild(ue),URL.revokeObjectURL(Z)},[r,e,F]),vt=_.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const B=await jm(p);if(B.success){alert(B.message||"Session saved to memory successfully");try{const X=await Na(e.id);w(X)}catch{}}else alert(`Failed to save to memory: ${B.error||"Unknown error"}`)}catch(B){alert(`Error saving to memory: ${B.message||"Unknown error"}`)}},[p,e]),Xn=_.useCallback(()=>{const B=document.createElement("input");B.type="file",B.accept=".json",B.onchange=async X=>{var ue;const Z=(ue=X.target.files)==null?void 0:ue[0];if(Z)try{const ge=await Z.text(),M=JSON.parse(ge);if(!M.events||!Array.isArray(M.events)){alert("Invalid run file: missing events array");return}o(),s(),g(null),E(null),M.events.forEach(H=>{i(H)})}catch(ge){alert(`Failed to load run file: ${ge}`)}},B.click()},[o,s,i]);return _.useEffect(()=>{if(m!==null){const B=document.querySelector(".event-row.selected");B==null||B.scrollIntoView({behavior:"smooth",block:"nearest"})}},[m]),e?l.jsxs("div",{className:`run-panel ${K?"resizing":""}`,children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"input-area",children:[l.jsxs("select",{className:"agent-selector",value:F||"",onChange:B=>Y(B.target.value||null),disabled:t,title:"Select which agent to run",children:[l.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((Fr=e.agents.find(B=>B.id===e.app.root_agent_id))==null?void 0:Fr.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(B=>B.id!==e.app.root_agent_id).map(B=>l.jsxs("option",{value:B.id,children:[B.name," (",B.type.replace("Agent",""),")"]},B.id))]}),l.jsxs("select",{className:"agent-selector",value:W||"",onChange:B=>yt(B.target.value||null),disabled:t||S,style:{minWidth:180},title:"Load a saved session",children:[l.jsx("option",{value:"",children:S?"Loading...":"Load Session..."}),q.map(B=>{const X=new Date(B.started_at*1e3),Z=B.duration?`${B.duration.toFixed(1)}s`:"?";return l.jsxs("option",{value:B.id,children:[X.toLocaleString()," (",B.event_count," events, ",Z,")"]},B.id)})]}),l.jsx("input",{type:"text",placeholder:"Enter your query...",value:h,onChange:B=>v(B.target.value),onKeyDown:B=>B.key==="Enter"&&!B.shiftKey&&R(),disabled:t}),t?l.jsxs("button",{className:"stop",onClick:ae,children:[l.jsx(Q1,{size:14}),"Stop"]}):l.jsxs("button",{onClick:R,disabled:!h.trim(),children:[l.jsx($n,{size:14}),"Run"]})]}),l.jsxs("div",{className:"toolbar",children:[l.jsxs("div",{className:"toolbar-section",children:[l.jsx(H1,{size:12,style:{color:"#71717a"}}),l.jsx("input",{type:"text",placeholder:"Filter events...",value:k,onChange:B=>b(B.target.value)})]}),l.jsx("div",{className:"toolbar-divider"}),l.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(B=>l.jsx("button",{className:`filter-chip ${I.has(B)?"active":""}`,onClick:()=>{const X=new Set(I);X.has(B)?X.delete(B):X.add(B),j(X)},children:B.replace("_"," ")},B)),l.jsx("button",{className:`filter-chip ${P?"active":""}`,onClick:()=>z(!P),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),l.jsx("div",{className:"toolbar-divider"}),l.jsxs("div",{className:"toolbar-section",children:[l.jsxs("button",{className:`toolbar-btn ${O?"active":""}`,onClick:()=>C(!O),children:[l.jsx(hi,{size:12}),"State"]}),l.jsxs("button",{className:`toolbar-btn ${A?"active":""}`,onClick:()=>T(!A),children:[l.jsx(Rd,{size:12}),"Tools"]})]}),l.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[l.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[ce.length," / ",r.length," events"]}),y&&l.jsx("button",{className:"toolbar-btn",onClick:()=>E(null),children:"Clear Range"})]})]}),l.jsxs("div",{className:"main-content",ref:he,children:[l.jsxs("div",{className:"event-list-container",children:[l.jsxs("div",{className:"event-list-header",children:[l.jsx("div",{children:"#"}),l.jsx("div",{children:"Time"}),l.jsx("div",{children:"Agent"}),l.jsx("div",{children:"Type"}),l.jsx("div",{children:"Info"})]}),l.jsx("div",{className:"event-list",ref:oe,children:ce.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx(Om,{size:24}),l.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):ce.map((B,X)=>{const Z=r.indexOf(B),ue=Dp[B.event_type]||Dp.error,ge=BS[B.event_type]||Mm;return l.jsxs("div",{className:`event-row ${m===Z?"selected":""}`,style:{background:ue.bg},onClick:()=>g(Z),onDoubleClick:()=>{C(!1),T(!1)},children:[l.jsx("div",{className:"index",children:Z}),l.jsx("div",{className:"time",style:{color:ue.fg},children:VS(B.timestamp,ye.min)}),l.jsx("div",{className:"agent",style:{color:ue.fg},children:B.agent_name}),l.jsxs("div",{className:"type",style:{color:ue.fg},children:[l.jsx(ge,{size:10}),B.event_type.split("_")[0]]}),l.jsx("div",{className:"summary",children:US(B)})]},Z)})})]}),l.jsxs("div",{className:"side-panel-container",style:{width:L},children:[l.jsx("div",{className:`resize-handle ${K?"active":""}`,onMouseDown:()=>$(!0)}),l.jsxs("div",{className:"side-panel",style:{width:L-4},children:[l.jsxs("div",{className:"side-panel-tabs",children:[l.jsxs("button",{className:`side-panel-tab ${!O&&!A?"active":""}`,onClick:()=>{C(!1),T(!1)},children:[l.jsx(Di,{size:12,style:{marginRight:4}}),"Details"]}),l.jsxs("button",{className:`side-panel-tab ${O?"active":""}`,onClick:()=>{C(!0),T(!1)},children:[l.jsx(hi,{size:12,style:{marginRight:4}}),"State"]}),l.jsxs("button",{className:`side-panel-tab ${A?"active":""}`,onClick:()=>{T(!0),C(!1)},children:[l.jsx(Rd,{size:12,style:{marginRight:4}}),"Tools"]})]}),l.jsx("div",{className:"side-panel-content",children:A?l.jsx(qS,{project:e,selectedEventIndex:m}):O?l.jsx(HS,{events:r,selectedEventIndex:m,project:e}):Ke?l.jsx(WS,{event:Ke}):l.jsxs("div",{className:"empty-state",children:[l.jsx(Di,{size:24}),l.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),l.jsxs("div",{className:"stats-bar",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Events:"}),l.jsx("span",{className:"stat-value",children:r.length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Tool Calls:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="tool_call").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Model Calls:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="model_call").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"State Changes:"}),l.jsx("span",{className:"stat-value",children:r.filter(B=>B.event_type==="state_change").length})]}),r.length>0&&l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{children:"Duration:"}),l.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),l.jsx("div",{className:"stats-bar-spacer"}),l.jsxs("button",{className:"stats-bar-btn",onClick:Xn,title:"Load a saved run",children:[l.jsx(Fm,{size:12}),"Load"]}),l.jsxs("button",{className:"stats-bar-btn",onClick:Pe,disabled:r.length===0,title:"Save current run to file",children:[l.jsx(Wu,{size:12}),"Save"]}),l.jsxs("button",{className:"stats-bar-btn",onClick:vt,disabled:!p||r.length===0,title:"Save current session to memory",children:[l.jsx(hi,{size:12}),"Save to Memory"]})]})]}):l.jsx("div",{className:"run-panel empty",children:"No project loaded"})}function Fp(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function QS(){const{project:e}=Mt(),[t,n]=_.useState([{id:"root",name:"All Tests",description:"Root test group",tests:[],children:[]}]),[r,i]=_.useState("root"),[o,s]=_.useState(null),[a,u]=_.useState(new Map),[c,d]=_.useState(new Set),[p,f]=_.useState(new Set(["root"]));if(!e)return null;function h(z,O){for(const C of z){if(C.id===O)return C;const A=h(C.children,O);if(A)return A}return null}function v(z,O,C){return z.map(A=>A.id===O?{...A,...C}:{...A,children:v(A.children,O,C)})}const x=h(t,r),N=x==null?void 0:x.tests.find(z=>z.id===o);function m(z){const O=new Set(p);O.has(z)?O.delete(z):O.add(z),f(O)}function g(z){const O={id:Fp(),name:"New Group",description:"",tests:[],children:[]};n(C=>{var A,T;return z==="root"&&((A=C[0])==null?void 0:A.id)==="root"?[{...C[0],children:[...C[0].children,O]}]:v(C,z,{children:[...((T=h(C,z))==null?void 0:T.children)||[],O]})}),i(O.id),f(C=>new Set([...C,z]))}function y(z){const O={id:Fp(),name:"New Test",description:"",input_message:"",expected_tool_calls:[],expected_state:{}};n(C=>{const A=h(C,z);return A?v(C,z,{tests:[...A.tests,O]}):C}),s(O.id)}function E(z,O,C){n(A=>{const T=h(A,z);return T?v(A,z,{tests:T.tests.map(L=>L.id===O?{...L,...C}:L)}):A})}function k(z,O){n(C=>{const A=h(C,z);return A?v(C,z,{tests:A.tests.filter(T=>T.id!==O)}):C}),o===O&&s(null)}async function b(z){d(T=>new Set([...T,z.id]));const O=Date.now();await new Promise(T=>setTimeout(T,1e3+Math.random()*2e3));const C=Math.random()>.3,A={test_id:z.id,passed:C,duration_ms:Date.now()-O,error:C?void 0:"Expected output did not match"};u(T=>new Map(T).set(z.id,A)),d(T=>{const L=new Set(T);return L.delete(z.id),L})}async function I(z){for(const O of z.tests)await b(O);for(const O of z.children)await I(O)}function j(z){let O=0,C=0,A=0;function T(L){for(const D of L.tests){O++;const K=a.get(D.id);K&&(K.passed?C++:A++)}for(const D of L.children)T(D)}return T(z),{total:O,passed:C,failed:A,pending:O-C-A}}function P(z,O=0){return z.map(C=>{const A=p.has(C.id),T=j(C),L=C.tests.length>0||C.children.length>0;return l.jsxs("div",{className:"test-tree-item",children:[l.jsxs("div",{className:`tree-group ${r===C.id?"selected":""}`,style:{paddingLeft:8+O*16},onClick:()=>i(C.id),children:[l.jsx("button",{className:"expand-btn",onClick:D=>{D.stopPropagation(),m(C.id)},children:L?A?l.jsx(Ft,{size:14}):l.jsx(Bt,{size:14}):l.jsx("span",{style:{width:14}})}),l.jsx(Id,{size:14,style:{color:"var(--accent-secondary)"}}),l.jsx("span",{className:"group-name",children:C.name}),T.total>0&&l.jsxs("span",{className:"group-stats",children:[T.passed>0&&l.jsx("span",{className:"stat-passed",children:T.passed}),T.failed>0&&l.jsx("span",{className:"stat-failed",children:T.failed}),T.pending>0&&l.jsx("span",{className:"stat-pending",children:T.pending})]}),l.jsx("button",{className:"run-btn",onClick:D=>{D.stopPropagation(),I(C)},title:"Run all tests in this group",children:l.jsx($n,{size:12})})]}),A&&l.jsxs("div",{className:"tree-children",children:[C.tests.map(D=>{const K=a.get(D.id),$=c.has(D.id);return l.jsxs("div",{className:`tree-test ${o===D.id?"selected":""}`,style:{paddingLeft:24+O*16},onClick:()=>{i(C.id),s(D.id)},children:[$?l.jsx($1,{size:14,className:"spinning",style:{color:"var(--warning)"}}):K?K.passed?l.jsx(Ld,{size:14,style:{color:"var(--success)"}}):l.jsx(Dd,{size:14,style:{color:"var(--error)"}}):l.jsx(fs,{size:14,style:{color:"var(--text-muted)"}}),l.jsx("span",{className:"test-name",children:D.name}),l.jsx("button",{className:"run-btn",onClick:q=>{q.stopPropagation(),b(D)},disabled:$,children:l.jsx($n,{size:12})})]},D.id)}),P(C.children,O+1)]})]},C.id)})}return l.jsxs("div",{className:"eval-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("aside",{className:"eval-sidebar",children:[l.jsxs("div",{className:"sidebar-header",children:[l.jsx("h3",{children:"Evaluation Tests"}),l.jsxs("div",{className:"header-actions",children:[l.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>g(r),title:"Add test group",children:l.jsx(Id,{size:14})}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>y(r),title:"Add test",children:[l.jsx(Ge,{size:14}),"Test"]})]})]}),l.jsx("div",{className:"test-tree",children:P(t)})]}),l.jsx("div",{className:"test-editor",children:N?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"editor-header",children:[l.jsx(fs,{size:20,style:{color:"var(--accent-primary)"}}),l.jsx("input",{type:"text",value:N.name,onChange:z=>E(r,N.id,{name:z.target.value}),placeholder:"Test name"}),l.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>b(N),disabled:c.has(N.id),children:[l.jsx($n,{size:14}),"Run"]}),l.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>k(r,N.id),children:l.jsx(pt,{size:14})})]}),l.jsxs("div",{className:"editor-content",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("textarea",{value:N.description,onChange:z=>E(r,N.id,{description:z.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Input Message"}),l.jsx("textarea",{value:N.input_message,onChange:z=>E(r,N.id,{input_message:z.target.value}),placeholder:"The message to send to the agent..."})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected Output (optional)"}),l.jsx("textarea",{value:N.expected_output||"",onChange:z=>E(r,N.id,{expected_output:z.target.value||void 0}),placeholder:"Expected text in the response (partial match)..."})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected Tool Calls"}),l.jsx("textarea",{value:N.expected_tool_calls.join(`
`),onChange:z=>E(r,N.id,{expected_tool_calls:z.target.value.split(`
`).filter(Boolean)}),placeholder:"Tool names (one per line)...",style:{minHeight:60}})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Expected State (JSON)"}),l.jsx("textarea",{value:JSON.stringify(N.expected_state,null,2),onChange:z=>{try{const O=JSON.parse(z.target.value);E(r,N.id,{expected_state:O})}catch{}},placeholder:'{"key": "value"}'})]})]}),a.has(N.id)&&l.jsxs("div",{className:"result-panel",children:[l.jsxs("div",{className:`result-header ${a.get(N.id).passed?"passed":"failed"}`,children:[a.get(N.id).passed?l.jsxs(l.Fragment,{children:[l.jsx(Ld,{size:18}),l.jsx("strong",{children:"Passed"})]}):l.jsxs(l.Fragment,{children:[l.jsx(Dd,{size:18}),l.jsx("strong",{children:"Failed"})]}),l.jsxs("span",{style:{marginLeft:"auto",color:"var(--text-muted)",fontSize:12},children:[a.get(N.id).duration_ms,"ms"]})]}),a.get(N.id).error&&l.jsx("div",{className:"result-error",children:a.get(N.id).error})]})]}):x?l.jsxs("div",{className:"editor-content",children:[l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Group Name"}),l.jsx("input",{type:"text",value:x.name,onChange:z=>n(O=>v(O,x.id,{name:z.target.value}))})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h4",{children:"Description"}),l.jsx("textarea",{value:x.description,onChange:z=>n(O=>v(O,x.id,{description:z.target.value})),placeholder:"Description of this test group..."})]}),l.jsx("div",{style:{marginTop:20},children:l.jsxs("button",{className:"btn btn-primary",onClick:()=>I(x),children:[l.jsx($n,{size:16}),"Run All Tests in Group"]})})]}):l.jsxs("div",{className:"empty-state",children:[l.jsx(fs,{size:48}),l.jsxs("p",{children:["Select a test to edit",l.jsx("br",{}),"or create a new one"]})]})})]})}function GS(){const{project:e,setProject:t}=Mt(),[n,r]=_.useState(""),[i,o]=_.useState(!0),[s,a]=_.useState(!1),[u,c]=_.useState(null),[d,p]=_.useState(!1);if(!e)return null;_.useEffect(()=>{f()},[e.id]);async function f(){o(!0),c(null);try{const g=await Cm(e.id);r(g),a(!1)}catch(g){c(g.message)}finally{o(!1)}}function h(g){g!==void 0&&(r(g),a(!0),c(null))}async function v(){o(!0),c(null);try{const g=await _m(e.id,n);t(g),a(!1)}catch(g){c(g.message)}finally{o(!1)}}function x(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function N(){const g=new Blob([n],{type:"text/yaml"}),y=URL.createObjectURL(g),E=document.createElement("a");E.href=y,E.download=`${e.name}.yaml`,E.click(),URL.revokeObjectURL(y)}function m(){const g=document.createElement("input");g.type="file",g.accept=".yaml,.yml",g.onchange=async y=>{var b;const E=(b=y.target.files)==null?void 0:b[0];if(!E)return;const k=await E.text();r(k),a(!0)},g.click()}return l.jsxs("div",{className:"yaml-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"yaml-header",children:[l.jsxs("div",{className:"yaml-title",children:[l.jsx("h3",{children:"Project Configuration"}),s&&l.jsxs("span",{className:"status-badge warning",children:[l.jsx(Pd,{size:12}),"Unsaved changes"]}),u&&l.jsxs("span",{className:"status-badge error",children:[l.jsx(Pd,{size:12}),u]}),d&&l.jsxs("span",{className:"status-badge success",children:[l.jsx(Lm,{size:12}),"Copied!"]})]}),l.jsxs("div",{className:"yaml-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,title:"Copy to clipboard",children:[l.jsx(Im,{size:14}),"Copy"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:N,title:"Download YAML",children:[l.jsx(Wu,{size:14}),"Download"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:m,title:"Upload YAML",children:[l.jsx(Fm,{size:14}),"Upload"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[l.jsx(gr,{size:14}),"Reload"]}),l.jsx("button",{className:"btn btn-primary btn-sm",onClick:v,disabled:!s||i,children:"Apply Changes"})]})]}),l.jsx("div",{className:"yaml-editor",children:l.jsx(Bi,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),l.jsxs("div",{className:"yaml-info",children:[l.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),l.jsxs("p",{children:["You can edit the YAML directly, then click ",l.jsx("code",{children:"Apply Changes"})," to update the project. Use ",l.jsx("code",{children:"Download"})," to save a backup or ",l.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function Bp(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function JS(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function YS(e,t){var n;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const r=t.agents.find(i=>i.id===e.agent_id);return r?`AgentTool(agent=${r.name}_agent)`:"AgentTool(agent=sub_agent)"}else if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";return""}function XS(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${Bp(i.instruction)}"""`),i.description&&o.push(`description="${Bp(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const s=i.tools.map(a=>YS(a,t)).filter(a=>a&&!a.startsWith("#"));if(s.length>0&&o.push(`tools=[${s.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const a=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${a}]`)}return i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True"),`${r} = Agent(
    ${o.join(`,
    `)}
)`}else if(e.type==="SequentialAgent"){const i=e.sub_agents.map(o=>n.get(o)||"sub_agent").join(", ");return`${r} = SequentialAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}else if(e.type==="LoopAgent"){const i=e,o=[`name="${e.name}"`],s=e.sub_agents.map(a=>n.get(a)||"sub_agent").join(", ");return o.push(`sub_agents=[${s}]`),i.max_iterations&&o.push(`max_iterations=${i.max_iterations}`),`${r} = LoopAgent(
    ${o.join(`,
    `)}
)`}else if(e.type==="ParallelAgent"){const i=e.sub_agents.map(o=>n.get(o)||"sub_agent").join(", ");return`${r} = ParallelAgent(
    name="${e.name}",
    sub_agents=[${i}]
)`}return`# Unknown agent type: ${e.type}`}function ZS(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = MCPToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        )"),t.push("    )"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = MCPToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),t.push("    )"),t.push(")")),t.join(`
`)}function eC(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(k=>{const b=n[k];if(b){const j=k.toLowerCase().includes("key")||k.toLowerCase().includes("secret")?"***":b;t.push(`os.environ["${k}"] = "${j}"  # Set your ${k}`)}else t.push(`# os.environ["${k}"] = ""  # TODO: Set your ${k}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(k=>k.type==="SequentialAgent"),s=e.agents.some(k=>k.type==="LoopAgent"),a=e.agents.some(k=>k.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),s&&i.add("from google.adk.agents import LoopAgent"),a&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(k=>{var b;return k.type==="LlmAgent"&&((b=k.model)==null?void 0:b.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(k=>k.type==="LlmAgent"&&k.tools.some(b=>b.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;e.agents.forEach(k=>{k.type==="LlmAgent"&&k.tools.forEach(b=>{b.type==="builtin"&&b.name&&d.add(b.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0&&(i.add("from google.adk.tools.mcp_tool.mcp_toolset import MCPToolset"),i.add("from google.adk.tools.mcp_tool.mcp_toolset import StdioConnectionParams"),i.add("from google.adk.tools.mcp_tool.mcp_toolset import StdioServerParameters")),i.add("from google.adk.apps import App");const f=e.app.plugins.length>0;f&&e.app.plugins.forEach(k=>{k.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const h=Array.from(i).sort();t.push(...h),t.push(""),t.push("");const v=new Map;e.agents.forEach(k=>{const b=k.name.endsWith("_agent")?k.name:`${k.name}_agent`;v.set(k.id,b)});const x=[],N=new Set;function m(k){if(N.has(k))return;const b=e.agents.find(I=>I.id===k);b&&(b.sub_agents.forEach(I=>m(I)),N.add(k),x.push(b))}e.agents.forEach(k=>m(k.id));const g=new Map;x.forEach(k=>{k.type==="LlmAgent"&&k.tools.forEach(b=>{b.type==="mcp"&&b.server&&g.set(b.server.name,b.server)})}),g.size>0&&(t.push("# MCP Server Toolsets"),g.forEach(k=>{t.push(ZS(k)),t.push("")}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(k=>{t.push(k.code),t.push("")}),t.push("")),t.push("# Models"),x.forEach(k=>{k.type==="LlmAgent"&&k.model&&(t.push(JS(k.model,`${k.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),x.forEach(k=>{t.push(XS(k,e,v)),t.push("")});const y=e.agents.find(k=>k.id===e.app.root_agent_id),E=y?v.get(y.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${E},`),f){const k=e.app.plugins.map(b=>b.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${b.max_retries||3})`:`        # ${b.type}()`);t.push("    plugins=["),t.push(k.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function tC(){const{project:e}=Mt(),[t,n]=_.useState(!1);if(!e)return null;const r=_.useMemo(()=>eC(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const s=new Blob([r],{type:"text/x-python"}),a=URL.createObjectURL(s),u=document.createElement("a");u.href=a,u.download=`${e.name}_agent.py`,u.click(),URL.revokeObjectURL(a)}return l.jsxs("div",{className:"code-panel",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"code-header",children:[l.jsxs("div",{className:"code-title",children:[l.jsx(ul,{size:16}),l.jsx("h3",{children:"Python Code"}),l.jsx("span",{className:"badge",children:"Generated"}),t&&l.jsxs("span",{className:"status-badge success",children:[l.jsx(Lm,{size:12}),"Copied!"]})]}),l.jsxs("div",{className:"code-actions",children:[l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[l.jsx(Im,{size:14}),"Copy"]}),l.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[l.jsx(Wu,{size:14}),"Download"]})]})]}),l.jsx("div",{className:"code-editor",children:l.jsx(Bi,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),l.jsxs("div",{className:"code-info",children:[l.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),l.jsxs("p",{children:["Place this in a file named ",l.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",l.jsx("code",{children:"adk web ."})," or ",l.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const nC=[{id:"app",label:"App Config",icon:K1},{id:"agents",label:"Agents",icon:Vn},{id:"tools",label:"Tools",icon:qt},{id:"run",label:"Run",icon:Om},{id:"eval",label:"Evaluate",icon:G1},{id:"yaml",label:"YAML",icon:B1},{id:"code",label:"Code",icon:ul}],rC=["app","agents","tools","run","eval","yaml","code"];function Ps(){const{projectId:e,tab:t,itemId:n}=Fv(),r=Bu(),{project:i,setProject:o,activeTab:s,setActiveTab:a,hasUnsavedChanges:u,setHasUnsavedChanges:c,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:h}=Mt(),[v,x]=_.useState(!0),[N,m]=_.useState(!1),g=_.useRef(!0),y=_.useRef(null);_.useEffect(()=>{t&&rC.includes(t)?a(t):!t&&e&&r(`/project/${e}/${s}`,{replace:!0})},[t,e]),_.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&h(n)},[t,n]);function E(j){a(j),j==="agents"&&d?r(`/project/${e}/${j}/${d}`,{replace:!0}):j==="tools"&&f?r(`/project/${e}/${j}/${f}`,{replace:!0}):r(`/project/${e}/${j}`,{replace:!0})}function k(j){j?r(`/project/${e}/${s}/${j}`,{replace:!0}):r(`/project/${e}/${s}`,{replace:!0})}_.useEffect(()=>(e&&b(e),()=>{o(null),c(!1)}),[e]);async function b(j){g.current=!0;try{const P=await vm(j);o(P),y.current=JSON.stringify(P),c(!1)}catch(P){console.error("Failed to load project:",P),r("/")}finally{x(!1),setTimeout(()=>{g.current=!1},100)}}async function I(){if(i){m(!0);try{await wm(i.id,i),y.current=JSON.stringify(i),c(!1)}catch(j){console.error("Failed to save project:",j)}finally{m(!1)}}}return _.useEffect(()=>{i&&!g.current&&y.current&&JSON.stringify(i)!==y.current&&c(!0)},[i]),v?l.jsxs("div",{className:"loading-screen",children:[l.jsx("style",{children:`
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
      `}),l.jsxs("header",{className:"top-bar",children:[l.jsxs("div",{className:"top-bar-left",children:[l.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[l.jsx(D1,{size:18}),"Project"]}),l.jsx("h1",{className:"project-name",children:i.name})]}),l.jsx("nav",{className:"tabs-bar",children:nC.map(j=>l.jsxs("button",{className:`tab-btn ${s===j.id?"active":""}`,onClick:()=>E(j.id),children:[l.jsx(j.icon,{size:14}),j.label]},j.id))}),l.jsx("div",{className:"top-bar-right",children:l.jsxs("button",{className:"btn btn-primary",onClick:I,disabled:N,children:[l.jsx(Rm,{size:16}),N?"Saving...":"Save"]})})]}),l.jsxs("main",{className:"main-content",children:[s==="app"&&l.jsx(t0,{}),s==="agents"&&l.jsx(lS,{onSelectAgent:k}),s==="tools"&&l.jsx(FS,{onSelectTool:k}),s==="run"&&l.jsx(KS,{}),s==="eval"&&l.jsx(QS,{}),s==="yaml"&&l.jsx(GS,{}),s==="code"&&l.jsx(tC,{})]})]}):null}function iC(){const{setMcpServers:e,setBuiltinTools:t}=Mt();return _.useEffect(()=>{Uu().then(e).catch(console.error),Nm().then(t).catch(console.error)},[e,t]),l.jsxs(r1,{children:[l.jsx(rr,{path:"/",element:l.jsx(Z1,{})}),l.jsx(rr,{path:"/project/:projectId",element:l.jsx(Ps,{})}),l.jsx(rr,{path:"/project/:projectId/:tab",element:l.jsx(Ps,{})}),l.jsx(rr,{path:"/project/:projectId/:tab/:itemId",element:l.jsx(Ps,{})}),l.jsx(rr,{path:"*",element:l.jsx(t1,{to:"/",replace:!0})})]})}Ls.createRoot(document.getElementById("root")).render(l.jsx(Lt.StrictMode,{children:l.jsx(l1,{children:l.jsx(iC,{})})}));export{hl as a,oC as g};
