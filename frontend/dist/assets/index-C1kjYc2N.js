function cx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function WS(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var nf={exports:{}},wo={},rf={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki=Symbol.for("react.element"),ux=Symbol.for("react.portal"),dx=Symbol.for("react.fragment"),px=Symbol.for("react.strict_mode"),fx=Symbol.for("react.profiler"),mx=Symbol.for("react.provider"),hx=Symbol.for("react.context"),gx=Symbol.for("react.forward_ref"),xx=Symbol.for("react.suspense"),yx=Symbol.for("react.memo"),vx=Symbol.for("react.lazy"),zu=Symbol.iterator;function bx(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},of=Object.assign,af={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=af,this.updater=n||sf}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lf(){}lf.prototype=Wr.prototype;function sc(e,t,n){this.props=e,this.context=t,this.refs=af,this.updater=n||sf}var oc=sc.prototype=new lf;oc.constructor=sc;of(oc,Wr.prototype);oc.isPureReactComponent=!0;var Tu=Array.isArray,cf=Object.prototype.hasOwnProperty,ac={current:null},uf={key:!0,ref:!0,__self:!0,__source:!0};function df(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)cf.call(t,r)&&!uf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ki,type:e,key:o,ref:a,props:i,_owner:ac.current}}function kx(e,t){return{$$typeof:Ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ki}function jx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pu=/\/+/g;function Xo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jx(""+e.key):t.toString(36)}function Ns(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ki:case ux:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Xo(a,0):r,Tu(i)?(n="",e!=null&&(n=e.replace(Pu,"$&/")+"/"),Ns(i,t,n,"",function(u){return u})):i!=null&&(lc(i)&&(i=kx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Pu,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Tu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Xo(o,l);a+=Ns(o,t,n,c,i)}else if(c=bx(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Xo(o,l++),a+=Ns(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ss(e,t,n){if(e==null)return e;var r=[],i=0;return Ns(e,r,"","",function(o){return t.call(n,o,i++)}),r}function wx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var rt={current:null},Es={transition:null},_x={ReactCurrentDispatcher:rt,ReactCurrentBatchConfig:Es,ReactCurrentOwner:ac};function pf(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:ss,forEach:function(e,t,n){ss(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ss(e,function(){t++}),t},toArray:function(e){return ss(e,function(t){return t})||[]},only:function(e){if(!lc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=Wr;he.Fragment=dx;he.Profiler=fx;he.PureComponent=sc;he.StrictMode=px;he.Suspense=xx;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_x;he.act=pf;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=of({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=ac.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)cf.call(t,c)&&!uf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ki,type:e.type,key:i,ref:o,props:r,_owner:a}};he.createContext=function(e){return e={$$typeof:hx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mx,_context:e},e.Consumer=e};he.createElement=df;he.createFactory=function(e){var t=df.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:gx,render:e}};he.isValidElement=lc;he.lazy=function(e){return{$$typeof:vx,_payload:{_status:-1,_result:e},_init:wx}};he.memo=function(e,t){return{$$typeof:yx,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=Es.transition;Es.transition={};try{e()}finally{Es.transition=t}};he.unstable_act=pf;he.useCallback=function(e,t){return rt.current.useCallback(e,t)};he.useContext=function(e){return rt.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return rt.current.useDeferredValue(e)};he.useEffect=function(e,t){return rt.current.useEffect(e,t)};he.useId=function(){return rt.current.useId()};he.useImperativeHandle=function(e,t,n){return rt.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return rt.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return rt.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return rt.current.useMemo(e,t)};he.useReducer=function(e,t,n){return rt.current.useReducer(e,t,n)};he.useRef=function(e){return rt.current.useRef(e)};he.useState=function(e){return rt.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return rt.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return rt.current.useTransition()};he.version="18.3.1";rf.exports=he;var _=rf.exports;const Lt=jo(_),Sx=cx({__proto__:null,default:Lt},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=_,Nx=Symbol.for("react.element"),Ex=Symbol.for("react.fragment"),zx=Object.prototype.hasOwnProperty,Tx=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Px={key:!0,ref:!0,__self:!0,__source:!0};function ff(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)zx.call(t,r)&&!Px.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Nx,type:e,key:o,ref:a,props:i,_owner:Tx.current}}wo.Fragment=Ex;wo.jsx=ff;wo.jsxs=ff;nf.exports=wo;var s=nf.exports,Wa={},mf={exports:{}},wt={},hf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,I){var k=$.length;$.push(I);e:for(;0<k;){var V=k-1>>>1,J=$[V];if(0<i(J,I))$[V]=I,$[k]=J,k=V;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var I=$[0],k=$.pop();if(k!==I){$[0]=k;e:for(var V=0,J=$.length,C=J>>>1;V<C;){var oe=2*(V+1)-1,A=$[oe],Z=oe+1,F=$[Z];if(0>i(A,k))Z<J&&0>i(F,A)?($[V]=F,$[Z]=k,V=Z):($[V]=A,$[oe]=k,V=oe);else if(Z<J&&0>i(F,k))$[V]=F,$[Z]=k,V=Z;else break e}}return I}function i($,I){var k=$.sortIndex-I.sortIndex;return k!==0?k:$.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,m=!1,v=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=$)r(u),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(u)}}function L($){if(w=!1,y($),!v)if(n(c)!==null)v=!0,Y(S);else{var I=n(u);I!==null&&P(L,I.startTime-$)}}function S($,I){v=!1,w&&(w=!1,x(T),T=-1),m=!0;var k=f;try{for(y(I),p=n(c);p!==null&&(!(p.expirationTime>I)||$&&!j());){var V=p.callback;if(typeof V=="function"){p.callback=null,f=p.priorityLevel;var J=V(p.expirationTime<=I);I=e.unstable_now(),typeof J=="function"?p.callback=J:p===n(c)&&r(c),y(I)}else r(c);p=n(c)}if(p!==null)var C=!0;else{var oe=n(u);oe!==null&&P(L,oe.startTime-I),C=!1}return C}finally{p=null,f=k,m=!1}}var g=!1,b=null,T=-1,R=5,E=-1;function j(){return!(e.unstable_now()-E<R)}function z(){if(b!==null){var $=e.unstable_now();E=$;var I=!0;try{I=b(!0,$)}finally{I?O():(g=!1,b=null)}}else g=!1}var O;if(typeof h=="function")O=function(){h(z)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,B=U.port2;U.port1.onmessage=z,O=function(){B.postMessage(null)}}else O=function(){N(z,0)};function Y($){b=$,g||(g=!0,O())}function P($,I){T=N(function(){$(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Y(S))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var k=f;f=I;try{return $()}finally{f=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,I){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var k=f;f=$;try{return I()}finally{f=k}},e.unstable_scheduleCallback=function($,I,k){var V=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?V+k:V):k=V,$){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=k+J,$={id:d++,callback:I,priorityLevel:$,startTime:k,expirationTime:J,sortIndex:-1},k>V?($.sortIndex=k,t(u,$),n(c)===null&&$===n(u)&&(w?(x(T),T=-1):w=!0,P(L,k-V))):($.sortIndex=J,t(c,$),v||m||(v=!0,Y(S))),$},e.unstable_shouldYield=j,e.unstable_wrapCallback=function($){var I=f;return function(){var k=f;f=I;try{return $.apply(this,arguments)}finally{f=k}}}})(gf);hf.exports=gf;var Lx=hf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax=_,jt=Lx;function Q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xf=new Set,Ci={};function or(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(Ci[e]=t,e=0;e<t.length;e++)xf.add(t[e])}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=Object.prototype.hasOwnProperty,Rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lu={},Au={};function Ix(e){return Ha.call(Au,e)?!0:Ha.call(Lu,e)?!1:Rx.test(e)?Au[e]=!0:(Lu[e]=!0,!1)}function Mx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ox(e,t,n,r){if(t===null||typeof t>"u"||Mx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function it(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new it(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new it(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new it(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new it(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new it(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new it(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new it(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new it(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new it(e,5,!1,e.toLowerCase(),null,!1,!1)});var cc=/[\-:]([a-z])/g;function uc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(cc,uc);Ke[t]=new it(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(cc,uc);Ke[t]=new it(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(cc,uc);Ke[t]=new it(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new it(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new it("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new it(e,1,!1,e.toLowerCase(),null,!0,!0)});function dc(e,t,n,r){var i=Ke.hasOwnProperty(t)?Ke[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ox(t,n,i,r)&&(n=null),r||i===null?Ix(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pn=Ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,os=Symbol.for("react.element"),fr=Symbol.for("react.portal"),mr=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),vf=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),Ja=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),mc=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),bf=Symbol.for("react.offscreen"),Ru=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Ru&&e[Ru]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,Zo;function li(e){if(Zo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zo=t&&t[1]||""}return`
`+Zo+e}var ea=!1;function ta(e,t){if(!e||ea)return"";ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ea=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function $x(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=ta(e.type,!1),e;case 11:return e=ta(e.type.render,!1),e;case 1:return e=ta(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mr:return"Fragment";case fr:return"Portal";case qa:return"Profiler";case pc:return"StrictMode";case Ja:return"Suspense";case Ka:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vf:return(e.displayName||"Context")+".Consumer";case yf:return(e._context.displayName||"Context")+".Provider";case fc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mc:return t=e.displayName||null,t!==null?t:Qa(e.type)||"Memo";case gn:t=e._payload,e=e._init;try{return Qa(e(t))}catch{}}return null}function Dx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(t);case 8:return t===pc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fx(e){var t=kf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function as(e){e._valueTracker||(e._valueTracker=Fx(e))}function jf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ga(e,t){var n=t.checked;return Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Iu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wf(e,t){t=t.checked,t!=null&&dc(e,"checked",t,!1)}function Ya(e,t){wf(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Xa(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Xa(e,t,n){(t!=="number"||Vs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ci=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Za(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Q(91));return Ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Q(92));if(ci(n)){if(1<n.length)throw Error(Q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function _f(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ls,Cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ls=ls||document.createElement("div"),ls.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ls.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bx=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){Bx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function Nf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function Ef(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ux=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,t){if(t){if(Ux[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Q(62))}}function nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function hc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var il=null,Nr=null,Er=null;function Du(e){if(e=Yi(e)){if(typeof il!="function")throw Error(Q(280));var t=e.stateNode;t&&(t=Eo(t),il(e.stateNode,e.type,t))}}function zf(e){Nr?Er?Er.push(e):Er=[e]:Nr=e}function Tf(){if(Nr){var e=Nr,t=Er;if(Er=Nr=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function Pf(e,t){return e(t)}function Lf(){}var na=!1;function Af(e,t,n){if(na)return e(t,n);na=!0;try{return Pf(e,t,n)}finally{na=!1,(Nr!==null||Er!==null)&&(Lf(),Tf())}}function Ei(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var sl=!1;if(ln)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){sl=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{sl=!1}function Vx(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var mi=!1,Ws=null,Hs=!1,ol=null,Wx={onError:function(e){mi=!0,Ws=e}};function Hx(e,t,n,r,i,o,a,l,c){mi=!1,Ws=null,Vx.apply(Wx,arguments)}function qx(e,t,n,r,i,o,a,l,c){if(Hx.apply(this,arguments),mi){if(mi){var u=Ws;mi=!1,Ws=null}else throw Error(Q(198));Hs||(Hs=!0,ol=u)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fu(e){if(ar(e)!==e)throw Error(Q(188))}function Jx(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fu(i),e;if(o===r)return Fu(i),t;o=o.sibling}throw Error(Q(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(Q(189))}}if(n.alternate!==r)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function If(e){return e=Jx(e),e!==null?Mf(e):null}function Mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mf(e);if(t!==null)return t;e=e.sibling}return null}var Of=jt.unstable_scheduleCallback,Bu=jt.unstable_cancelCallback,Kx=jt.unstable_shouldYield,Qx=jt.unstable_requestPaint,Ie=jt.unstable_now,Gx=jt.unstable_getCurrentPriorityLevel,gc=jt.unstable_ImmediatePriority,$f=jt.unstable_UserBlockingPriority,qs=jt.unstable_NormalPriority,Yx=jt.unstable_LowPriority,Df=jt.unstable_IdlePriority,_o=null,Kt=null;function Xx(e){if(Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(_o,e,void 0,(e.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:ty,Zx=Math.log,ey=Math.LN2;function ty(e){return e>>>=0,e===0?32:31-(Zx(e)/ey|0)|0}var cs=64,us=4194304;function ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Js(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ui(l):(o&=a,o!==0&&(r=ui(o)))}else a=n&~i,a!==0?r=ui(a):o!==0&&(r=ui(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ft(t),i=1<<n,r|=e[n],t&=~i;return r}function ny(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ry(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ft(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=ny(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function al(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ff(){var e=cs;return cs<<=1,!(cs&4194240)&&(cs=64),e}function ra(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ft(t),e[t]=n}function iy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ft(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var je=0;function Bf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uf,yc,Vf,Wf,Hf,ll=!1,ds=[],_n=null,Sn=null,Cn=null,zi=new Map,Ti=new Map,yn=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function Xr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Yi(t),t!==null&&yc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function oy(e,t,n,r,i){switch(t){case"focusin":return _n=Xr(_n,e,t,n,r,i),!0;case"dragenter":return Sn=Xr(Sn,e,t,n,r,i),!0;case"mouseover":return Cn=Xr(Cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zi.set(o,Xr(zi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ti.set(o,Xr(Ti.get(o)||null,e,t,n,r,i)),!0}return!1}function qf(e){var t=Jn(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=Rf(n),t!==null){e.blockedOn=t,Hf(e.priority,function(){Vf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=cl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rl=r,n.target.dispatchEvent(r),rl=null}else return t=Yi(n),t!==null&&yc(t),e.blockedOn=n,!1;t.shift()}return!0}function Vu(e,t,n){zs(e)&&n.delete(t)}function ay(){ll=!1,_n!==null&&zs(_n)&&(_n=null),Sn!==null&&zs(Sn)&&(Sn=null),Cn!==null&&zs(Cn)&&(Cn=null),zi.forEach(Vu),Ti.forEach(Vu)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,ll||(ll=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,ay)))}function Pi(e){function t(i){return Zr(i,e)}if(0<ds.length){Zr(ds[0],e);for(var n=1;n<ds.length;n++){var r=ds[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Zr(_n,e),Sn!==null&&Zr(Sn,e),Cn!==null&&Zr(Cn,e),zi.forEach(t),Ti.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)qf(n),n.blockedOn===null&&yn.shift()}var zr=pn.ReactCurrentBatchConfig,Ks=!0;function ly(e,t,n,r){var i=je,o=zr.transition;zr.transition=null;try{je=1,vc(e,t,n,r)}finally{je=i,zr.transition=o}}function cy(e,t,n,r){var i=je,o=zr.transition;zr.transition=null;try{je=4,vc(e,t,n,r)}finally{je=i,zr.transition=o}}function vc(e,t,n,r){if(Ks){var i=cl(e,t,n,r);if(i===null)fa(e,t,r,Qs,n),Uu(e,r);else if(oy(i,e,t,n,r))r.stopPropagation();else if(Uu(e,r),t&4&&-1<sy.indexOf(e)){for(;i!==null;){var o=Yi(i);if(o!==null&&Uf(o),o=cl(e,t,n,r),o===null&&fa(e,t,r,Qs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else fa(e,t,r,null,n)}}var Qs=null;function cl(e,t,n,r){if(Qs=null,e=hc(r),e=Jn(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qs=e,null}function Jf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gx()){case gc:return 1;case $f:return 4;case qs:case Yx:return 16;case Df:return 536870912;default:return 16}default:return 16}}var bn=null,bc=null,Ts=null;function Kf(){if(Ts)return Ts;var e,t=bc,n=t.length,r,i="value"in bn?bn.value:bn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return Ts=i.slice(e,1<r?1-r:void 0)}function Ps(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function Wu(){return!1}function _t(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ps:Wu,this.isPropagationStopped=Wu,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=_t(Hr),Gi=Ae({},Hr,{view:0,detail:0}),uy=_t(Gi),ia,sa,ei,So=Ae({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ei&&(ei&&e.type==="mousemove"?(ia=e.screenX-ei.screenX,sa=e.screenY-ei.screenY):sa=ia=0,ei=e),ia)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),Hu=_t(So),dy=Ae({},So,{dataTransfer:0}),py=_t(dy),fy=Ae({},Gi,{relatedTarget:0}),oa=_t(fy),my=Ae({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),hy=_t(my),gy=Ae({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xy=_t(gy),yy=Ae({},Hr,{data:0}),qu=_t(yy),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},by={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ky[e])?!!t[e]:!1}function jc(){return jy}var wy=Ae({},Gi,{key:function(e){if(e.key){var t=vy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?by[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?Ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_y=_t(wy),Sy=Ae({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ju=_t(Sy),Cy=Ae({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Ny=_t(Cy),Ey=Ae({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zy=_t(Ey),Ty=Ae({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Py=_t(Ty),Ly=[9,13,27,32],wc=ln&&"CompositionEvent"in window,hi=null;ln&&"documentMode"in document&&(hi=document.documentMode);var Ay=ln&&"TextEvent"in window&&!hi,Qf=ln&&(!wc||hi&&8<hi&&11>=hi),Ku=" ",Qu=!1;function Gf(e,t){switch(e){case"keyup":return Ly.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function Ry(e,t){switch(e){case"compositionend":return Yf(t);case"keypress":return t.which!==32?null:(Qu=!0,Ku);case"textInput":return e=t.data,e===Ku&&Qu?null:e;default:return null}}function Iy(e,t){if(hr)return e==="compositionend"||!wc&&Gf(e,t)?(e=Kf(),Ts=bc=bn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qf&&t.locale!=="ko"?null:t.data;default:return null}}var My={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!My[e.type]:t==="textarea"}function Xf(e,t,n,r){zf(r),t=Gs(t,"onChange"),0<t.length&&(n=new kc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gi=null,Li=null;function Oy(e){cm(e,0)}function Co(e){var t=yr(e);if(jf(t))return e}function $y(e,t){if(e==="change")return t}var Zf=!1;if(ln){var aa;if(ln){var la="oninput"in document;if(!la){var Yu=document.createElement("div");Yu.setAttribute("oninput","return;"),la=typeof Yu.oninput=="function"}aa=la}else aa=!1;Zf=aa&&(!document.documentMode||9<document.documentMode)}function Xu(){gi&&(gi.detachEvent("onpropertychange",em),Li=gi=null)}function em(e){if(e.propertyName==="value"&&Co(Li)){var t=[];Xf(t,Li,e,hc(e)),Af(Oy,t)}}function Dy(e,t,n){e==="focusin"?(Xu(),gi=t,Li=n,gi.attachEvent("onpropertychange",em)):e==="focusout"&&Xu()}function Fy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Li)}function By(e,t){if(e==="click")return Co(t)}function Uy(e,t){if(e==="input"||e==="change")return Co(t)}function Vy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:Vy;function Ai(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ha.call(t,i)||!Ut(e[i],t[i]))return!1}return!0}function Zu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var n=Zu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zu(n)}}function tm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nm(){for(var e=window,t=Vs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vs(e.document)}return t}function _c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wy(e){var t=nm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tm(n.ownerDocument.documentElement,n)){if(r!==null&&_c(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ed(n,o);var a=ed(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hy=ln&&"documentMode"in document&&11>=document.documentMode,gr=null,ul=null,xi=null,dl=!1;function td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dl||gr==null||gr!==Vs(r)||(r=gr,"selectionStart"in r&&_c(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Ai(xi,r)||(xi=r,r=Gs(ul,"onSelect"),0<r.length&&(t=new kc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function fs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xr={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionend:fs("Transition","TransitionEnd")},ca={},rm={};ln&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function No(e){if(ca[e])return ca[e];if(!xr[e])return e;var t=xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rm)return ca[e]=t[n];return e}var im=No("animationend"),sm=No("animationiteration"),om=No("animationstart"),am=No("transitionend"),lm=new Map,nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){lm.set(e,t),or(t,[e])}for(var ua=0;ua<nd.length;ua++){var da=nd[ua],qy=da.toLowerCase(),Jy=da[0].toUpperCase()+da.slice(1);On(qy,"on"+Jy)}On(im,"onAnimationEnd");On(sm,"onAnimationIteration");On(om,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(am,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function rd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qx(r,t,void 0,e),e.currentTarget=null}function cm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;rd(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;rd(i,l,u),o=c}}}if(Hs)throw e=ol,Hs=!1,ol=null,e}function Ce(e,t){var n=t[gl];n===void 0&&(n=t[gl]=new Set);var r=e+"__bubble";n.has(r)||(um(t,e,2,!1),n.add(r))}function pa(e,t,n){var r=0;t&&(r|=4),um(n,e,r,t)}var ms="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[ms]){e[ms]=!0,xf.forEach(function(n){n!=="selectionchange"&&(Ky.has(n)||pa(n,!1,e),pa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ms]||(t[ms]=!0,pa("selectionchange",!1,t))}}function um(e,t,n,r){switch(Jf(t)){case 1:var i=ly;break;case 4:i=cy;break;default:i=vc}n=i.bind(null,t,n,e),i=void 0,!sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Jn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Af(function(){var u=o,d=hc(n),p=[];e:{var f=lm.get(e);if(f!==void 0){var m=kc,v=e;switch(e){case"keypress":if(Ps(n)===0)break e;case"keydown":case"keyup":m=_y;break;case"focusin":v="focus",m=oa;break;case"focusout":v="blur",m=oa;break;case"beforeblur":case"afterblur":m=oa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ny;break;case im:case sm:case om:m=hy;break;case am:m=zy;break;case"scroll":m=uy;break;case"wheel":m=Py;break;case"copy":case"cut":case"paste":m=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ju}var w=(t&4)!==0,N=!w&&e==="scroll",x=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,y;h!==null;){y=h;var L=y.stateNode;if(y.tag===5&&L!==null&&(y=L,x!==null&&(L=Ei(h,x),L!=null&&w.push(Ii(h,L,y)))),N)break;h=h.return}0<w.length&&(f=new m(f,v,null,n,d),p.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&n!==rl&&(v=n.relatedTarget||n.fromElement)&&(Jn(v)||v[cn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Jn(v):null,v!==null&&(N=ar(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=Hu,L="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ju,L="onPointerLeave",x="onPointerEnter",h="pointer"),N=m==null?f:yr(m),y=v==null?f:yr(v),f=new w(L,h+"leave",m,n,d),f.target=N,f.relatedTarget=y,L=null,Jn(d)===u&&(w=new w(x,h+"enter",v,n,d),w.target=y,w.relatedTarget=N,L=w),N=L,m&&v)t:{for(w=m,x=v,h=0,y=w;y;y=cr(y))h++;for(y=0,L=x;L;L=cr(L))y++;for(;0<h-y;)w=cr(w),h--;for(;0<y-h;)x=cr(x),y--;for(;h--;){if(w===x||x!==null&&w===x.alternate)break t;w=cr(w),x=cr(x)}w=null}else w=null;m!==null&&id(p,f,m,w,!1),v!==null&&N!==null&&id(p,N,v,w,!0)}}e:{if(f=u?yr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var S=$y;else if(Gu(f))if(Zf)S=Uy;else{S=Fy;var g=Dy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=By);if(S&&(S=S(e,u))){Xf(p,S,n,d);break e}g&&g(e,f,u),e==="focusout"&&(g=f._wrapperState)&&g.controlled&&f.type==="number"&&Xa(f,"number",f.value)}switch(g=u?yr(u):window,e){case"focusin":(Gu(g)||g.contentEditable==="true")&&(gr=g,ul=u,xi=null);break;case"focusout":xi=ul=gr=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,td(p,n,d);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":td(p,n,d)}var b;if(wc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else hr?Gf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Qf&&n.locale!=="ko"&&(hr||T!=="onCompositionStart"?T==="onCompositionEnd"&&hr&&(b=Kf()):(bn=d,bc="value"in bn?bn.value:bn.textContent,hr=!0)),g=Gs(u,T),0<g.length&&(T=new qu(T,e,null,n,d),p.push({event:T,listeners:g}),b?T.data=b:(b=Yf(n),b!==null&&(T.data=b)))),(b=Ay?Ry(e,n):Iy(e,n))&&(u=Gs(u,"onBeforeInput"),0<u.length&&(d=new qu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=b))}cm(p,t)})}function Ii(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ei(e,n),o!=null&&r.unshift(Ii(e,o,i)),o=Ei(e,t),o!=null&&r.push(Ii(e,o,i))),e=e.return}return r}function cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ei(n,o),c!=null&&a.unshift(Ii(n,c,l))):i||(c=Ei(n,o),c!=null&&a.push(Ii(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Qy=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(Qy,`
`).replace(Gy,"")}function hs(e,t,n){if(t=sd(t),sd(e)!==t&&n)throw Error(Q(425))}function Ys(){}var pl=null,fl=null;function ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,Yy=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,Xy=typeof queueMicrotask=="function"?queueMicrotask:typeof od<"u"?function(e){return od.resolve(null).then(e).catch(Zy)}:hl;function Zy(e){setTimeout(function(){throw e})}function ma(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pi(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ad(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),qt="__reactFiber$"+qr,Mi="__reactProps$"+qr,cn="__reactContainer$"+qr,gl="__reactEvents$"+qr,ev="__reactListeners$"+qr,tv="__reactHandles$"+qr;function Jn(e){var t=e[qt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[cn]||n[qt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ad(e);e!==null;){if(n=e[qt])return n;e=ad(e)}return t}e=n,n=e.parentNode}return null}function Yi(e){return e=e[qt]||e[cn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Q(33))}function Eo(e){return e[Mi]||null}var xl=[],vr=-1;function $n(e){return{current:e}}function Ne(e){0>vr||(e.current=xl[vr],xl[vr]=null,vr--)}function _e(e,t){vr++,xl[vr]=e.current,e.current=t}var Rn={},Xe=$n(Rn),lt=$n(!1),er=Rn;function Ir(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function Xs(){Ne(lt),Ne(Xe)}function ld(e,t,n){if(Xe.current!==Rn)throw Error(Q(168));_e(Xe,t),_e(lt,n)}function dm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(Q(108,Dx(e)||"Unknown",i));return Ae({},n,r)}function Zs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,er=Xe.current,_e(Xe,e),_e(lt,lt.current),!0}function cd(e,t,n){var r=e.stateNode;if(!r)throw Error(Q(169));n?(e=dm(e,t,er),r.__reactInternalMemoizedMergedChildContext=e,Ne(lt),Ne(Xe),_e(Xe,e)):Ne(lt),_e(lt,n)}var en=null,zo=!1,ha=!1;function pm(e){en===null?en=[e]:en.push(e)}function nv(e){zo=!0,pm(e)}function Dn(){if(!ha&&en!==null){ha=!0;var e=0,t=je;try{var n=en;for(je=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}en=null,zo=!1}catch(i){throw en!==null&&(en=en.slice(e+1)),Of(gc,Dn),i}finally{je=t,ha=!1}}return null}var br=[],kr=0,eo=null,to=0,Et=[],zt=0,tr=null,nn=1,rn="";function Wn(e,t){br[kr++]=to,br[kr++]=eo,eo=e,to=t}function fm(e,t,n){Et[zt++]=nn,Et[zt++]=rn,Et[zt++]=tr,tr=e;var r=nn;e=rn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var o=32-Ft(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,nn=1<<32-Ft(t)+i|n<<i|r,rn=o+e}else nn=1<<o|n<<i|r,rn=e}function Sc(e){e.return!==null&&(Wn(e,1),fm(e,1,0))}function Cc(e){for(;e===eo;)eo=br[--kr],br[kr]=null,to=br[--kr],br[kr]=null;for(;e===tr;)tr=Et[--zt],Et[zt]=null,rn=Et[--zt],Et[zt]=null,nn=Et[--zt],Et[zt]=null}var kt=null,vt=null,Ee=!1,Dt=null;function mm(e,t){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ud(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,vt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=tr!==null?{id:nn,overflow:rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,kt=e,vt=null,!0):!1;default:return!1}}function yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vl(e){if(Ee){var t=vt;if(t){var n=t;if(!ud(e,t)){if(yl(e))throw Error(Q(418));t=Nn(n.nextSibling);var r=kt;t&&ud(e,t)?mm(r,n):(e.flags=e.flags&-4097|2,Ee=!1,kt=e)}}else{if(yl(e))throw Error(Q(418));e.flags=e.flags&-4097|2,Ee=!1,kt=e}}}function dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function gs(e){if(e!==kt)return!1;if(!Ee)return dd(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ml(e.type,e.memoizedProps)),t&&(t=vt)){if(yl(e))throw hm(),Error(Q(418));for(;t;)mm(e,t),t=Nn(t.nextSibling)}if(dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){vt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}vt=null}}else vt=kt?Nn(e.stateNode.nextSibling):null;return!0}function hm(){for(var e=vt;e;)e=Nn(e.nextSibling)}function Mr(){vt=kt=null,Ee=!1}function Nc(e){Dt===null?Dt=[e]:Dt.push(e)}var rv=pn.ReactCurrentBatchConfig;function ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var r=n.stateNode}if(!r)throw Error(Q(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,e))}return e}function xs(e,t){throw e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pd(e){var t=e._init;return t(e._payload)}function gm(e){function t(x,h){if(e){var y=x.deletions;y===null?(x.deletions=[h],x.flags|=16):y.push(h)}}function n(x,h){if(!e)return null;for(;h!==null;)t(x,h),h=h.sibling;return null}function r(x,h){for(x=new Map;h!==null;)h.key!==null?x.set(h.key,h):x.set(h.index,h),h=h.sibling;return x}function i(x,h){return x=Pn(x,h),x.index=0,x.sibling=null,x}function o(x,h,y){return x.index=y,e?(y=x.alternate,y!==null?(y=y.index,y<h?(x.flags|=2,h):y):(x.flags|=2,h)):(x.flags|=1048576,h)}function a(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,h,y,L){return h===null||h.tag!==6?(h=ja(y,x.mode,L),h.return=x,h):(h=i(h,y),h.return=x,h)}function c(x,h,y,L){var S=y.type;return S===mr?d(x,h,y.props.children,L,y.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gn&&pd(S)===h.type)?(L=i(h,y.props),L.ref=ti(x,h,y),L.return=x,L):(L=$s(y.type,y.key,y.props,null,x.mode,L),L.ref=ti(x,h,y),L.return=x,L)}function u(x,h,y,L){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=wa(y,x.mode,L),h.return=x,h):(h=i(h,y.children||[]),h.return=x,h)}function d(x,h,y,L,S){return h===null||h.tag!==7?(h=Yn(y,x.mode,L,S),h.return=x,h):(h=i(h,y),h.return=x,h)}function p(x,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ja(""+h,x.mode,y),h.return=x,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case os:return y=$s(h.type,h.key,h.props,null,x.mode,y),y.ref=ti(x,null,h),y.return=x,y;case fr:return h=wa(h,x.mode,y),h.return=x,h;case gn:var L=h._init;return p(x,L(h._payload),y)}if(ci(h)||Gr(h))return h=Yn(h,x.mode,y,null),h.return=x,h;xs(x,h)}return null}function f(x,h,y,L){var S=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:l(x,h,""+y,L);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case os:return y.key===S?c(x,h,y,L):null;case fr:return y.key===S?u(x,h,y,L):null;case gn:return S=y._init,f(x,h,S(y._payload),L)}if(ci(y)||Gr(y))return S!==null?null:d(x,h,y,L,null);xs(x,y)}return null}function m(x,h,y,L,S){if(typeof L=="string"&&L!==""||typeof L=="number")return x=x.get(y)||null,l(h,x,""+L,S);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case os:return x=x.get(L.key===null?y:L.key)||null,c(h,x,L,S);case fr:return x=x.get(L.key===null?y:L.key)||null,u(h,x,L,S);case gn:var g=L._init;return m(x,h,y,g(L._payload),S)}if(ci(L)||Gr(L))return x=x.get(y)||null,d(h,x,L,S,null);xs(h,L)}return null}function v(x,h,y,L){for(var S=null,g=null,b=h,T=h=0,R=null;b!==null&&T<y.length;T++){b.index>T?(R=b,b=null):R=b.sibling;var E=f(x,b,y[T],L);if(E===null){b===null&&(b=R);break}e&&b&&E.alternate===null&&t(x,b),h=o(E,h,T),g===null?S=E:g.sibling=E,g=E,b=R}if(T===y.length)return n(x,b),Ee&&Wn(x,T),S;if(b===null){for(;T<y.length;T++)b=p(x,y[T],L),b!==null&&(h=o(b,h,T),g===null?S=b:g.sibling=b,g=b);return Ee&&Wn(x,T),S}for(b=r(x,b);T<y.length;T++)R=m(b,x,T,y[T],L),R!==null&&(e&&R.alternate!==null&&b.delete(R.key===null?T:R.key),h=o(R,h,T),g===null?S=R:g.sibling=R,g=R);return e&&b.forEach(function(j){return t(x,j)}),Ee&&Wn(x,T),S}function w(x,h,y,L){var S=Gr(y);if(typeof S!="function")throw Error(Q(150));if(y=S.call(y),y==null)throw Error(Q(151));for(var g=S=null,b=h,T=h=0,R=null,E=y.next();b!==null&&!E.done;T++,E=y.next()){b.index>T?(R=b,b=null):R=b.sibling;var j=f(x,b,E.value,L);if(j===null){b===null&&(b=R);break}e&&b&&j.alternate===null&&t(x,b),h=o(j,h,T),g===null?S=j:g.sibling=j,g=j,b=R}if(E.done)return n(x,b),Ee&&Wn(x,T),S;if(b===null){for(;!E.done;T++,E=y.next())E=p(x,E.value,L),E!==null&&(h=o(E,h,T),g===null?S=E:g.sibling=E,g=E);return Ee&&Wn(x,T),S}for(b=r(x,b);!E.done;T++,E=y.next())E=m(b,x,T,E.value,L),E!==null&&(e&&E.alternate!==null&&b.delete(E.key===null?T:E.key),h=o(E,h,T),g===null?S=E:g.sibling=E,g=E);return e&&b.forEach(function(z){return t(x,z)}),Ee&&Wn(x,T),S}function N(x,h,y,L){if(typeof y=="object"&&y!==null&&y.type===mr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case os:e:{for(var S=y.key,g=h;g!==null;){if(g.key===S){if(S=y.type,S===mr){if(g.tag===7){n(x,g.sibling),h=i(g,y.props.children),h.return=x,x=h;break e}}else if(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===gn&&pd(S)===g.type){n(x,g.sibling),h=i(g,y.props),h.ref=ti(x,g,y),h.return=x,x=h;break e}n(x,g);break}else t(x,g);g=g.sibling}y.type===mr?(h=Yn(y.props.children,x.mode,L,y.key),h.return=x,x=h):(L=$s(y.type,y.key,y.props,null,x.mode,L),L.ref=ti(x,h,y),L.return=x,x=L)}return a(x);case fr:e:{for(g=y.key;h!==null;){if(h.key===g)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(x,h.sibling),h=i(h,y.children||[]),h.return=x,x=h;break e}else{n(x,h);break}else t(x,h);h=h.sibling}h=wa(y,x.mode,L),h.return=x,x=h}return a(x);case gn:return g=y._init,N(x,h,g(y._payload),L)}if(ci(y))return v(x,h,y,L);if(Gr(y))return w(x,h,y,L);xs(x,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(x,h.sibling),h=i(h,y),h.return=x,x=h):(n(x,h),h=ja(y,x.mode,L),h.return=x,x=h),a(x)):n(x,h)}return N}var Or=gm(!0),xm=gm(!1),no=$n(null),ro=null,jr=null,Ec=null;function zc(){Ec=jr=ro=null}function Tc(e){var t=no.current;Ne(no),e._currentValue=t}function bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t){ro=e,Ec=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function Rt(e){var t=e._currentValue;if(Ec!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(ro===null)throw Error(Q(308));jr=e,ro.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Kn=null;function Pc(e){Kn===null?Kn=[e]:Kn.push(e)}function ym(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,un(e,r)}function un(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var xn=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,xe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,un(e,n)}return i=r.interleaved,i===null?(t.next=t,Pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,un(e,n)}function Ls(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}function fd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function io(e,t,n,r){var i=e.updateQueue;xn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,d=u=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,w=l;switch(f=t,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(m,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(m,p,f):v,f==null)break e;p=Ae({},p,f);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=p):d=d.next=m,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rr|=a,e.lanes=a,e.memoizedState=p}}function md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(Q(191,i));i.call(r)}}}var Xi={},Qt=$n(Xi),Oi=$n(Xi),$i=$n(Xi);function Qn(e){if(e===Xi)throw Error(Q(174));return e}function Ac(e,t){switch(_e($i,t),_e(Oi,e),_e(Qt,Xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:el(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=el(t,e)}Ne(Qt),_e(Qt,t)}function $r(){Ne(Qt),Ne(Oi),Ne($i)}function bm(e){Qn($i.current);var t=Qn(Qt.current),n=el(t,e.type);t!==n&&(_e(Oi,e),_e(Qt,n))}function Rc(e){Oi.current===e&&(Ne(Qt),Ne(Oi))}var Te=$n(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ga=[];function Ic(){for(var e=0;e<ga.length;e++)ga[e]._workInProgressVersionPrimary=null;ga.length=0}var As=pn.ReactCurrentDispatcher,xa=pn.ReactCurrentBatchConfig,nr=0,Le=null,Fe=null,We=null,oo=!1,yi=!1,Di=0,iv=0;function Qe(){throw Error(Q(321))}function Mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function Oc(e,t,n,r,i,o){if(nr=o,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,As.current=e===null||e.memoizedState===null?lv:cv,e=n(r,i),yi){o=0;do{if(yi=!1,Di=0,25<=o)throw Error(Q(301));o+=1,We=Fe=null,t.updateQueue=null,As.current=uv,e=n(r,i)}while(yi)}if(As.current=ao,t=Fe!==null&&Fe.next!==null,nr=0,We=Fe=Le=null,oo=!1,t)throw Error(Q(300));return e}function $c(){var e=Di!==0;return Di=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Le.memoizedState=We=e:We=We.next=e,We}function It(){if(Fe===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?Le.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(Q(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?Le.memoizedState=We=e:We=We.next=e}return We}function Fi(e,t){return typeof t=="function"?t(e):t}function ya(e){var t=It(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=Fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((nr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,Le.lanes|=d,rr|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,Ut(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Le.lanes|=o,rr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function va(e){var t=It(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ut(o,t.memoizedState)||(at=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function km(){}function jm(e,t){var n=Le,r=It(),i=t(),o=!Ut(r.memoizedState,i);if(o&&(r.memoizedState=i,at=!0),r=r.queue,Dc(Sm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Bi(9,_m.bind(null,n,r,i,t),void 0,null),He===null)throw Error(Q(349));nr&30||wm(n,t,i)}return i}function wm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _m(e,t,n,r){t.value=n,t.getSnapshot=r,Cm(t)&&Nm(e)}function Sm(e,t,n){return n(function(){Cm(t)&&Nm(e)})}function Cm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Nm(e){var t=un(e,1);t!==null&&Bt(t,e,1,-1)}function hd(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},t.queue=e,e=e.dispatch=av.bind(null,Le,e),[t.memoizedState,e]}function Bi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Em(){return It().memoizedState}function Rs(e,t,n,r){var i=Wt();Le.flags|=e,i.memoizedState=Bi(1|t,n,void 0,r===void 0?null:r)}function To(e,t,n,r){var i=It();r=r===void 0?null:r;var o=void 0;if(Fe!==null){var a=Fe.memoizedState;if(o=a.destroy,r!==null&&Mc(r,a.deps)){i.memoizedState=Bi(t,n,o,r);return}}Le.flags|=e,i.memoizedState=Bi(1|t,n,o,r)}function gd(e,t){return Rs(8390656,8,e,t)}function Dc(e,t){return To(2048,8,e,t)}function zm(e,t){return To(4,2,e,t)}function Tm(e,t){return To(4,4,e,t)}function Pm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lm(e,t,n){return n=n!=null?n.concat([e]):null,To(4,4,Pm.bind(null,t,e),n)}function Fc(){}function Am(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rm(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Im(e,t,n){return nr&21?(Ut(n,t)||(n=Ff(),Le.lanes|=n,rr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function sv(e,t){var n=je;je=n!==0&&4>n?n:4,e(!0);var r=xa.transition;xa.transition={};try{e(!1),t()}finally{je=n,xa.transition=r}}function Mm(){return It().memoizedState}function ov(e,t,n){var r=Tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Om(e))$m(t,n);else if(n=ym(e,t,n,r),n!==null){var i=nt();Bt(n,e,r,i),Dm(n,t,r)}}function av(e,t,n){var r=Tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Om(e))$m(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ut(l,a)){var c=t.interleaved;c===null?(i.next=i,Pc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=ym(e,t,i,r),n!==null&&(i=nt(),Bt(n,e,r,i),Dm(n,t,r))}}function Om(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function $m(e,t){yi=oo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xc(e,n)}}var ao={readContext:Rt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},lv={readContext:Rt,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:Rt,useEffect:gd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rs(4194308,4,Pm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rs(4,2,e,t)},useMemo:function(e,t){var n=Wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ov.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:hd,useDebugValue:Fc,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=hd(!1),t=e[0];return e=sv.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,i=Wt();if(Ee){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),He===null)throw Error(Q(349));nr&30||wm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,gd(Sm.bind(null,r,o,e),[e]),r.flags|=2048,Bi(9,_m.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Wt(),t=He.identifierPrefix;if(Ee){var n=rn,r=nn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Di++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=iv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cv={readContext:Rt,useCallback:Am,useContext:Rt,useEffect:Dc,useImperativeHandle:Lm,useInsertionEffect:zm,useLayoutEffect:Tm,useMemo:Rm,useReducer:ya,useRef:Em,useState:function(){return ya(Fi)},useDebugValue:Fc,useDeferredValue:function(e){var t=It();return Im(t,Fe.memoizedState,e)},useTransition:function(){var e=ya(Fi)[0],t=It().memoizedState;return[e,t]},useMutableSource:km,useSyncExternalStore:jm,useId:Mm,unstable_isNewReconciler:!1},uv={readContext:Rt,useCallback:Am,useContext:Rt,useEffect:Dc,useImperativeHandle:Lm,useInsertionEffect:zm,useLayoutEffect:Tm,useMemo:Rm,useReducer:va,useRef:Em,useState:function(){return va(Fi)},useDebugValue:Fc,useDeferredValue:function(e){var t=It();return Fe===null?t.memoizedState=e:Im(t,Fe.memoizedState,e)},useTransition:function(){var e=va(Fi)[0],t=It().memoizedState;return[e,t]},useMutableSource:km,useSyncExternalStore:jm,useId:Mm,unstable_isNewReconciler:!1};function Ot(e,t){if(e&&e.defaultProps){t=Ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function kl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Po={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Tn(e),o=sn(r,i);o.payload=t,n!=null&&(o.callback=n),t=En(e,o,i),t!==null&&(Bt(t,e,i,r),Ls(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Tn(e),o=sn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=En(e,o,i),t!==null&&(Bt(t,e,i,r),Ls(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Tn(e),i=sn(n,r);i.tag=2,t!=null&&(i.callback=t),t=En(e,i,r),t!==null&&(Bt(t,e,r,n),Ls(t,e,r))}};function xd(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Ai(n,r)||!Ai(i,o):!0}function Fm(e,t,n){var r=!1,i=Rn,o=t.contextType;return typeof o=="object"&&o!==null?o=Rt(o):(i=ct(t)?er:Xe.current,r=t.contextTypes,o=(r=r!=null)?Ir(e,i):Rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Po.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Lc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Rt(o):(o=ct(t)?er:Xe.current,i.context=Ir(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(kl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Po.enqueueReplaceState(i,i.state,null),io(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",r=t;do n+=$x(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ba(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dv=typeof WeakMap=="function"?WeakMap:Map;function Bm(e,t,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){co||(co=!0,Al=r),wl(e,t)},n}function Um(e,t,n){n=sn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){wl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){wl(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function vd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sv.bind(null,e,t,n),t.then(e,e))}function bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=sn(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e)}var pv=pn.ReactCurrentOwner,at=!1;function tt(e,t,n,r){t.child=e===null?xm(t,null,n,r):Or(t,e.child,n,r)}function jd(e,t,n,r,i){n=n.render;var o=t.ref;return Tr(t,i),r=Oc(e,t,n,r,o,i),n=$c(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(Ee&&n&&Sc(t),t.flags|=1,tt(e,t,r,i),t.child)}function wd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Kc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vm(e,t,o,r,i)):(e=$s(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ai,n(a,r)&&e.ref===t.ref)return dn(e,t,i)}return t.flags|=1,e=Pn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vm(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Ai(o,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,dn(e,t,i)}return _l(e,t,n,r,i)}function Wm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(_r,xt),xt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(_r,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,_e(_r,xt),xt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,_e(_r,xt),xt|=r;return tt(e,t,i,n),t.child}function Hm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,i){var o=ct(n)?er:Xe.current;return o=Ir(t,o),Tr(t,i),n=Oc(e,t,n,r,o,i),r=$c(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,dn(e,t,i)):(Ee&&r&&Sc(t),t.flags|=1,tt(e,t,n,i),t.child)}function _d(e,t,n,r,i){if(ct(n)){var o=!0;Zs(t)}else o=!1;if(Tr(t,i),t.stateNode===null)Is(e,t),Fm(t,n,r),jl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Rt(u):(u=ct(n)?er:Xe.current,u=Ir(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&yd(t,a,r,u),xn=!1;var f=t.memoizedState;a.state=f,io(t,r,a,i),c=t.memoizedState,l!==r||f!==c||lt.current||xn?(typeof d=="function"&&(kl(t,n,d,r),c=t.memoizedState),(l=xn||xd(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vm(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ot(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Rt(c):(c=ct(n)?er:Xe.current,c=Ir(t,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&yd(t,a,r,c),xn=!1,f=t.memoizedState,a.state=f,io(t,r,a,i);var v=t.memoizedState;l!==p||f!==v||lt.current||xn?(typeof m=="function"&&(kl(t,n,m,r),v=t.memoizedState),(u=xn||xd(t,n,u,r,f,v,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Sl(e,t,n,r,o,i)}function Sl(e,t,n,r,i,o){Hm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&cd(t,n,!1),dn(e,t,o);r=t.stateNode,pv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Or(t,e.child,null,o),t.child=Or(t,null,l,o)):tt(e,t,l,o),t.memoizedState=r.state,i&&cd(t,n,!0),t.child}function qm(e){var t=e.stateNode;t.pendingContext?ld(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ld(e,t.context,!1),Ac(e,t.containerInfo)}function Sd(e,t,n,r,i){return Mr(),Nc(i),t.flags|=256,tt(e,t,n,r),t.child}var Cl={dehydrated:null,treeContext:null,retryLane:0};function Nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jm(e,t,n){var r=t.pendingProps,i=Te.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),_e(Te,i&1),e===null)return vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ro(a,r,0,null),e=Yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Nl(n),t.memoizedState=Cl,e):Bc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return fv(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Pn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Pn(l,o):(o=Yn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Nl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Cl,r}return o=e.child,e=o.sibling,r=Pn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bc(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ys(e,t,n,r){return r!==null&&Nc(r),Or(t,e.child,null,n),e=Bc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fv(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=ba(Error(Q(422))),ys(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ro({mode:"visible",children:r.children},i,0,null),o=Yn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Or(t,e.child,null,a),t.child.memoizedState=Nl(a),t.memoizedState=Cl,o);if(!(t.mode&1))return ys(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(Q(419)),r=ba(o,r,void 0),ys(e,t,a,r)}if(l=(a&e.childLanes)!==0,at||l){if(r=He,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,un(e,i),Bt(r,e,i,-1))}return Jc(),r=ba(Error(Q(421))),ys(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Cv.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,vt=Nn(i.nextSibling),kt=t,Ee=!0,Dt=null,e!==null&&(Et[zt++]=nn,Et[zt++]=rn,Et[zt++]=tr,nn=e.id,rn=e.overflow,tr=t),t=Bc(t,r.children),t.flags|=4096,t)}function Cd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bl(e.return,t,n)}function ka(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Km(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(tt(e,t,r.children,n),r=Te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,n,t);else if(e.tag===19)Cd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(_e(Te,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ka(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ka(t,!0,n,null,o);break;case"together":ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Is(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mv(e,t,n){switch(t.tag){case 3:qm(t),Mr();break;case 5:bm(t);break;case 1:ct(t.type)&&Zs(t);break;case 4:Ac(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;_e(no,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(_e(Te,Te.current&1),t.flags|=128,null):n&t.child.childLanes?Jm(e,t,n):(_e(Te,Te.current&1),e=dn(e,t,n),e!==null?e.sibling:null);_e(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Km(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,Wm(e,t,n)}return dn(e,t,n)}var Qm,El,Gm,Ym;Qm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};El=function(){};Gm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qn(Qt.current);var o=null;switch(n){case"input":i=Ga(e,i),r=Ga(e,r),o=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),o=[];break;case"textarea":i=Za(e,i),r=Za(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ys)}tl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ci.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ce("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Ym=function(e,t,n,r){n!==r&&(t.flags|=4)};function ni(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hv(e,t,n){var r=t.pendingProps;switch(Cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return ct(t.type)&&Xs(),Ge(t),null;case 3:return r=t.stateNode,$r(),Ne(lt),Ne(Xe),Ic(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(gs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(Ml(Dt),Dt=null))),El(e,t),Ge(t),null;case 5:Rc(t);var i=Qn($i.current);if(n=t.type,e!==null&&t.stateNode!=null)Gm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Q(166));return Ge(t),null}if(e=Qn(Qt.current),gs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[qt]=t,r[Mi]=o,e=(t.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(i=0;i<di.length;i++)Ce(di[i],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Iu(r,o),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ce("invalid",r);break;case"textarea":Ou(r,o),Ce("invalid",r)}tl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&hs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&hs(r.textContent,l,e),i=["children",""+l]):Ci.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ce("scroll",r)}switch(n){case"input":as(r),Mu(r,o,!0);break;case"textarea":as(r),$u(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ys)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qt]=t,e[Mi]=r,Qm(e,t,!1,!1),t.stateNode=e;e:{switch(a=nl(n,r),n){case"dialog":Ce("cancel",e),Ce("close",e),i=r;break;case"iframe":case"object":case"embed":Ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<di.length;i++)Ce(di[i],e);i=r;break;case"source":Ce("error",e),i=r;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),i=r;break;case"details":Ce("toggle",e),i=r;break;case"input":Iu(e,r),i=Ga(e,r),Ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),Ce("invalid",e);break;case"textarea":Ou(e,r),i=Za(e,r),Ce("invalid",e);break;default:i=r}tl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Ef(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Cf(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ni(e,c):typeof c=="number"&&Ni(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ci.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ce("scroll",e):c!=null&&dc(e,o,c,a))}switch(n){case"input":as(e),Mu(e,r,!1);break;case"textarea":as(e),$u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ys)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ge(t),null;case 6:if(e&&t.stateNode!=null)Ym(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Q(166));if(n=Qn($i.current),Qn(Qt.current),gs(t)){if(r=t.stateNode,n=t.memoizedProps,r[qt]=t,(o=r.nodeValue!==n)&&(e=kt,e!==null))switch(e.tag){case 3:hs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hs(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=t,t.stateNode=r}return Ge(t),null;case 13:if(Ne(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&vt!==null&&t.mode&1&&!(t.flags&128))hm(),Mr(),t.flags|=98560,o=!1;else if(o=gs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(Q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(Q(317));o[qt]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ge(t),o=!1}else Dt!==null&&(Ml(Dt),Dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Te.current&1?Be===0&&(Be=3):Jc())),t.updateQueue!==null&&(t.flags|=4),Ge(t),null);case 4:return $r(),El(e,t),e===null&&Ri(t.stateNode.containerInfo),Ge(t),null;case 10:return Tc(t.type._context),Ge(t),null;case 17:return ct(t.type)&&Xs(),Ge(t),null;case 19:if(Ne(Te),o=t.memoizedState,o===null)return Ge(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)ni(o,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=so(e),a!==null){for(t.flags|=128,ni(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return _e(Te,Te.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ie()>Fr&&(t.flags|=128,r=!0,ni(o,!1),t.lanes=4194304)}else{if(!r)if(e=so(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ni(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Ee)return Ge(t),null}else 2*Ie()-o.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,ni(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ie(),t.sibling=null,n=Te.current,_e(Te,r?n&1|2:n&1),t):(Ge(t),null);case 22:case 23:return qc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),null;case 24:return null;case 25:return null}throw Error(Q(156,t.tag))}function gv(e,t){switch(Cc(t),t.tag){case 1:return ct(t.type)&&Xs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),Ne(lt),Ne(Xe),Ic(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Rc(t),null;case 13:if(Ne(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(Te),null;case 4:return $r(),null;case 10:return Tc(t.type._context),null;case 22:case 23:return qc(),null;case 24:return null;default:return null}}var vs=!1,Ye=!1,xv=typeof WeakSet=="function"?WeakSet:Set,ne=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(e,t,r)}else n.current=null}function zl(e,t,n){try{n()}catch(r){Re(e,t,r)}}var Nd=!1;function yv(e,t){if(pl=Ks,e=nm(),_c(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===o&&++d===r&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(fl={focusedElem:e,selectionRange:n},Ks=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,N=v.memoizedState,x=t.stateNode,h=x.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ot(t.type,w),N);x.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(L){Re(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return v=Nd,Nd=!1,v}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&zl(t,n,o)}i=i.next}while(i!==r)}}function Lo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xm(e){var t=e.alternate;t!==null&&(e.alternate=null,Xm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qt],delete t[Mi],delete t[gl],delete t[ev],delete t[tv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zm(e){return e.tag===5||e.tag===3||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ys));else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}function Ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ll(e,t,n),e=e.sibling;e!==null;)Ll(e,t,n),e=e.sibling}var qe=null,$t=!1;function mn(e,t,n){for(n=n.child;n!==null;)eh(e,t,n),n=n.sibling}function eh(e,t,n){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(_o,n)}catch{}switch(n.tag){case 5:Ye||wr(n,t);case 6:var r=qe,i=$t;qe=null,mn(e,t,n),qe=r,$t=i,qe!==null&&($t?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&($t?(e=qe,n=n.stateNode,e.nodeType===8?ma(e.parentNode,n):e.nodeType===1&&ma(e,n),Pi(e)):ma(qe,n.stateNode));break;case 4:r=qe,i=$t,qe=n.stateNode.containerInfo,$t=!0,mn(e,t,n),qe=r,$t=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&zl(n,t,a),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!Ye&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,t,l)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,mn(e,t,n),Ye=r):mn(e,t,n);break;default:mn(e,t,n)}}function zd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xv),t.forEach(function(r){var i=Nv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,$t=!1;break e;case 3:qe=l.stateNode.containerInfo,$t=!0;break e;case 4:qe=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if(qe===null)throw Error(Q(160));eh(o,a,i),qe=null,$t=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Re(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)th(t,e),t=t.sibling}function th(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Vt(e),r&4){try{vi(3,e,e.return),Lo(3,e)}catch(w){Re(e,e.return,w)}try{vi(5,e,e.return)}catch(w){Re(e,e.return,w)}}break;case 1:Mt(t,e),Vt(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(Mt(t,e),Vt(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var i=e.stateNode;try{Ni(i,"")}catch(w){Re(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&wf(i,o),nl(l,a);var u=nl(l,o);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Ef(i,p):d==="dangerouslySetInnerHTML"?Cf(i,p):d==="children"?Ni(i,p):dc(i,d,p,u)}switch(l){case"input":Ya(i,o);break;case"textarea":_f(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Cr(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Cr(i,!!o.multiple,o.defaultValue,!0):Cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mi]=o}catch(w){Re(e,e.return,w)}}break;case 6:if(Mt(t,e),Vt(e),r&4){if(e.stateNode===null)throw Error(Q(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Re(e,e.return,w)}}break;case 3:if(Mt(t,e),Vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(t.containerInfo)}catch(w){Re(e,e.return,w)}break;case 4:Mt(t,e),Vt(e);break;case 13:Mt(t,e),Vt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wc=Ie())),r&4&&zd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||d,Mt(t,e),Ye=u):Mt(t,e),Vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ne=e,d=e.child;d!==null;){for(p=ne=d;ne!==null;){switch(f=ne,m=f.child,f.tag){case 0:case 11:case 14:case 15:vi(4,f,f.return);break;case 1:wr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){Re(r,n,w)}}break;case 5:wr(f,f.return);break;case 22:if(f.memoizedState!==null){Pd(p);continue}}m!==null?(m.return=f,ne=m):Pd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Nf("display",a))}catch(w){Re(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Re(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(t,e),Vt(e),r&4&&zd(e);break;case 21:break;default:Mt(t,e),Vt(e)}}function Vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zm(n)){var r=n;break e}n=n.return}throw Error(Q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var o=Ed(e);Ll(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ed(e);Pl(e,l,a);break;default:throw Error(Q(161))}}catch(c){Re(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vv(e,t,n){ne=e,nh(e)}function nh(e,t,n){for(var r=(e.mode&1)!==0;ne!==null;){var i=ne,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||vs;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ye;l=vs;var u=Ye;if(vs=a,(Ye=c)&&!u)for(ne=i;ne!==null;)a=ne,c=a.child,a.tag===22&&a.memoizedState!==null?Ld(i):c!==null?(c.return=a,ne=c):Ld(i);for(;o!==null;)ne=o,nh(o),o=o.sibling;ne=i,vs=l,Ye=u}Td(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ne=o):Td(e)}}function Td(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Lo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&md(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}md(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Pi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Ye||t.flags&512&&Tl(t)}catch(f){Re(t,t.return,f)}}if(t===e){ne=null;break}if(n=t.sibling,n!==null){n.return=t.return,ne=n;break}ne=t.return}}function Pd(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ne=n;break}ne=t.return}}function Ld(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Lo(4,t)}catch(c){Re(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Re(t,i,c)}}var o=t.return;try{Tl(t)}catch(c){Re(t,o,c)}break;case 5:var a=t.return;try{Tl(t)}catch(c){Re(t,a,c)}}}catch(c){Re(t,t.return,c)}if(t===e){ne=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ne=l;break}ne=t.return}}var bv=Math.ceil,lo=pn.ReactCurrentDispatcher,Uc=pn.ReactCurrentOwner,At=pn.ReactCurrentBatchConfig,xe=0,He=null,$e=null,Je=0,xt=0,_r=$n(0),Be=0,Ui=null,rr=0,Ao=0,Vc=0,bi=null,ot=null,Wc=0,Fr=1/0,Zt=null,co=!1,Al=null,zn=null,bs=!1,kn=null,uo=0,ki=0,Rl=null,Ms=-1,Os=0;function nt(){return xe&6?Ie():Ms!==-1?Ms:Ms=Ie()}function Tn(e){return e.mode&1?xe&2&&Je!==0?Je&-Je:rv.transition!==null?(Os===0&&(Os=Ff()),Os):(e=je,e!==0||(e=window.event,e=e===void 0?16:Jf(e.type)),e):1}function Bt(e,t,n,r){if(50<ki)throw ki=0,Rl=null,Error(Q(185));Qi(e,n,r),(!(xe&2)||e!==He)&&(e===He&&(!(xe&2)&&(Ao|=n),Be===4&&vn(e,Je)),ut(e,r),n===1&&xe===0&&!(t.mode&1)&&(Fr=Ie()+500,zo&&Dn()))}function ut(e,t){var n=e.callbackNode;ry(e,t);var r=Js(e,e===He?Je:0);if(r===0)n!==null&&Bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bu(n),t===1)e.tag===0?nv(Ad.bind(null,e)):pm(Ad.bind(null,e)),Xy(function(){!(xe&6)&&Dn()}),n=null;else{switch(Bf(r)){case 1:n=gc;break;case 4:n=$f;break;case 16:n=qs;break;case 536870912:n=Df;break;default:n=qs}n=uh(n,rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rh(e,t){if(Ms=-1,Os=0,xe&6)throw Error(Q(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=Js(e,e===He?Je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=po(e,r);else{t=r;var i=xe;xe|=2;var o=sh();(He!==e||Je!==t)&&(Zt=null,Fr=Ie()+500,Gn(e,t));do try{wv();break}catch(l){ih(e,l)}while(!0);zc(),lo.current=o,xe=i,$e!==null?t=0:(He=null,Je=0,t=Be)}if(t!==0){if(t===2&&(i=al(e),i!==0&&(r=i,t=Il(e,i))),t===1)throw n=Ui,Gn(e,0),vn(e,r),ut(e,Ie()),n;if(t===6)vn(e,r);else{if(i=e.current.alternate,!(r&30)&&!kv(i)&&(t=po(e,r),t===2&&(o=al(e),o!==0&&(r=o,t=Il(e,o))),t===1))throw n=Ui,Gn(e,0),vn(e,r),ut(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(Q(345));case 2:Hn(e,ot,Zt);break;case 3:if(vn(e,r),(r&130023424)===r&&(t=Wc+500-Ie(),10<t)){if(Js(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=hl(Hn.bind(null,e,ot,Zt),t);break}Hn(e,ot,Zt);break;case 4:if(vn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Ft(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bv(r/1960))-r,10<r){e.timeoutHandle=hl(Hn.bind(null,e,ot,Zt),r);break}Hn(e,ot,Zt);break;case 5:Hn(e,ot,Zt);break;default:throw Error(Q(329))}}}return ut(e,Ie()),e.callbackNode===n?rh.bind(null,e):null}function Il(e,t){var n=bi;return e.current.memoizedState.isDehydrated&&(Gn(e,t).flags|=256),e=po(e,t),e!==2&&(t=ot,ot=n,t!==null&&Ml(t)),e}function Ml(e){ot===null?ot=e:ot.push.apply(ot,e)}function kv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ut(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~Vc,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ft(t),r=1<<n;e[n]=-1,t&=~r}}function Ad(e){if(xe&6)throw Error(Q(327));Pr();var t=Js(e,0);if(!(t&1))return ut(e,Ie()),null;var n=po(e,t);if(e.tag!==0&&n===2){var r=al(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=Ui,Gn(e,0),vn(e,t),ut(e,Ie()),n;if(n===6)throw Error(Q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,ot,Zt),ut(e,Ie()),null}function Hc(e,t){var n=xe;xe|=1;try{return e(t)}finally{xe=n,xe===0&&(Fr=Ie()+500,zo&&Dn())}}function ir(e){kn!==null&&kn.tag===0&&!(xe&6)&&Pr();var t=xe;xe|=1;var n=At.transition,r=je;try{if(At.transition=null,je=1,e)return e()}finally{je=r,At.transition=n,xe=t,!(xe&6)&&Dn()}}function qc(){xt=_r.current,Ne(_r)}function Gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yy(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Cc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xs();break;case 3:$r(),Ne(lt),Ne(Xe),Ic();break;case 5:Rc(r);break;case 4:$r();break;case 13:Ne(Te);break;case 19:Ne(Te);break;case 10:Tc(r.type._context);break;case 22:case 23:qc()}n=n.return}if(He=e,$e=e=Pn(e.current,null),Je=xt=t,Be=0,Ui=null,Vc=Ao=rr=0,ot=bi=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Kn=null}return e}function ih(e,t){do{var n=$e;try{if(zc(),As.current=ao,oo){for(var r=Le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}oo=!1}if(nr=0,We=Fe=Le=null,yi=!1,Di=0,Uc.current=null,n===null||n.return===null){Be=1,Ui=t,$e=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Je,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=bd(a);if(m!==null){m.flags&=-257,kd(m,a,l,o,t),m.mode&1&&vd(o,u,t),t=m,c=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){vd(o,u,t),Jc();break e}c=Error(Q(426))}}else if(Ee&&l.mode&1){var N=bd(a);if(N!==null){!(N.flags&65536)&&(N.flags|=256),kd(N,a,l,o,t),Nc(Dr(c,l));break e}}o=c=Dr(c,l),Be!==4&&(Be=2),bi===null?bi=[o]:bi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var x=Bm(o,c,t);fd(o,x);break e;case 1:l=c;var h=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(zn===null||!zn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var L=Um(o,l,t);fd(o,L);break e}}o=o.return}while(o!==null)}ah(n)}catch(S){t=S,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function sh(){var e=lo.current;return lo.current=ao,e===null?ao:e}function Jc(){(Be===0||Be===3||Be===2)&&(Be=4),He===null||!(rr&268435455)&&!(Ao&268435455)||vn(He,Je)}function po(e,t){var n=xe;xe|=2;var r=sh();(He!==e||Je!==t)&&(Zt=null,Gn(e,t));do try{jv();break}catch(i){ih(e,i)}while(!0);if(zc(),xe=n,lo.current=r,$e!==null)throw Error(Q(261));return He=null,Je=0,Be}function jv(){for(;$e!==null;)oh($e)}function wv(){for(;$e!==null&&!Kx();)oh($e)}function oh(e){var t=ch(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?ah(e):$e=t,Uc.current=null}function ah(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gv(n,t),n!==null){n.flags&=32767,$e=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,$e=null;return}}else if(n=hv(n,t,xt),n!==null){$e=n;return}if(t=t.sibling,t!==null){$e=t;return}$e=t=e}while(t!==null);Be===0&&(Be=5)}function Hn(e,t,n){var r=je,i=At.transition;try{At.transition=null,je=1,_v(e,t,n,r)}finally{At.transition=i,je=r}return null}function _v(e,t,n,r){do Pr();while(kn!==null);if(xe&6)throw Error(Q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Q(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(iy(e,o),e===He&&($e=He=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bs||(bs=!0,uh(qs,function(){return Pr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=At.transition,At.transition=null;var a=je;je=1;var l=xe;xe|=4,Uc.current=null,yv(e,n),th(n,e),Wy(fl),Ks=!!pl,fl=pl=null,e.current=n,vv(n),Qx(),xe=l,je=a,At.transition=o}else e.current=n;if(bs&&(bs=!1,kn=e,uo=i),o=e.pendingLanes,o===0&&(zn=null),Xx(n.stateNode),ut(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(co)throw co=!1,e=Al,Al=null,e;return uo&1&&e.tag!==0&&Pr(),o=e.pendingLanes,o&1?e===Rl?ki++:(ki=0,Rl=e):ki=0,Dn(),null}function Pr(){if(kn!==null){var e=Bf(uo),t=At.transition,n=je;try{if(At.transition=null,je=16>e?16:e,kn===null)var r=!1;else{if(e=kn,kn=null,uo=0,xe&6)throw Error(Q(331));var i=xe;for(xe|=4,ne=e.current;ne!==null;){var o=ne,a=o.child;if(ne.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ne=u;ne!==null;){var d=ne;switch(d.tag){case 0:case 11:case 15:vi(8,d,o)}var p=d.child;if(p!==null)p.return=d,ne=p;else for(;ne!==null;){d=ne;var f=d.sibling,m=d.return;if(Xm(d),d===u){ne=null;break}if(f!==null){f.return=m,ne=f;break}ne=m}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}ne=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,ne=a;else e:for(;ne!==null;){if(o=ne,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vi(9,o,o.return)}var x=o.sibling;if(x!==null){x.return=o.return,ne=x;break e}ne=o.return}}var h=e.current;for(ne=h;ne!==null;){a=ne;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,ne=y;else e:for(a=h;ne!==null;){if(l=ne,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Lo(9,l)}}catch(S){Re(l,l.return,S)}if(l===a){ne=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,ne=L;break e}ne=l.return}}if(xe=i,Dn(),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(_o,e)}catch{}r=!0}return r}finally{je=n,At.transition=t}}return!1}function Rd(e,t,n){t=Dr(n,t),t=Bm(e,t,1),e=En(e,t,1),t=nt(),e!==null&&(Qi(e,1,t),ut(e,t))}function Re(e,t,n){if(e.tag===3)Rd(e,e,n);else for(;t!==null;){if(t.tag===3){Rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=Dr(n,e),e=Um(t,e,1),t=En(t,e,1),e=nt(),t!==null&&(Qi(t,1,e),ut(t,e));break}}t=t.return}}function Sv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Je&n)===n&&(Be===4||Be===3&&(Je&130023424)===Je&&500>Ie()-Wc?Gn(e,0):Vc|=n),ut(e,t)}function lh(e,t){t===0&&(e.mode&1?(t=us,us<<=1,!(us&130023424)&&(us=4194304)):t=1);var n=nt();e=un(e,t),e!==null&&(Qi(e,t,n),ut(e,n))}function Cv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lh(e,n)}function Nv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Q(314))}r!==null&&r.delete(t),lh(e,n)}var ch;ch=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,mv(e,t,n);at=!!(e.flags&131072)}else at=!1,Ee&&t.flags&1048576&&fm(t,to,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Is(e,t),e=t.pendingProps;var i=Ir(t,Xe.current);Tr(t,n),i=Oc(null,t,r,e,i,n);var o=$c();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(o=!0,Zs(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lc(t),i.updater=Po,t.stateNode=i,i._reactInternals=t,jl(t,r,e,n),t=Sl(null,t,r,!0,o,n)):(t.tag=0,Ee&&o&&Sc(t),tt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Is(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zv(r),e=Ot(r,e),i){case 0:t=_l(null,t,r,e,n);break e;case 1:t=_d(null,t,r,e,n);break e;case 11:t=jd(null,t,r,e,n);break e;case 14:t=wd(null,t,r,Ot(r.type,e),n);break e}throw Error(Q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),_l(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),_d(e,t,r,i,n);case 3:e:{if(qm(t),e===null)throw Error(Q(387));r=t.pendingProps,o=t.memoizedState,i=o.element,vm(e,t),io(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Dr(Error(Q(423)),t),t=Sd(e,t,r,n,i);break e}else if(r!==i){i=Dr(Error(Q(424)),t),t=Sd(e,t,r,n,i);break e}else for(vt=Nn(t.stateNode.containerInfo.firstChild),kt=t,Ee=!0,Dt=null,n=xm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===i){t=dn(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return bm(t),e===null&&vl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ml(r,i)?a=null:o!==null&&ml(r,o)&&(t.flags|=32),Hm(e,t),tt(e,t,a,n),t.child;case 6:return e===null&&vl(t),null;case 13:return Jm(e,t,n);case 4:return Ac(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Or(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),jd(e,t,r,i,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,_e(no,r._currentValue),r._currentValue=a,o!==null)if(Ut(o.value,a)){if(o.children===i.children&&!lt.current){t=dn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=sn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),bl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(Q(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),bl(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}tt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tr(t,n),i=Rt(i),r=r(i),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,i=Ot(r,t.pendingProps),i=Ot(r.type,i),wd(e,t,r,i,n);case 15:return Vm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ot(r,i),Is(e,t),t.tag=1,ct(r)?(e=!0,Zs(t)):e=!1,Tr(t,n),Fm(t,r,i),jl(t,r,i,n),Sl(null,t,r,!0,e,n);case 19:return Km(e,t,n);case 22:return Wm(e,t,n)}throw Error(Q(156,t.tag))};function uh(e,t){return Of(e,t)}function Ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(e,t,n,r){return new Ev(e,t,n,r)}function Kc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zv(e){if(typeof e=="function")return Kc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fc)return 11;if(e===mc)return 14}return 2}function Pn(e,t){var n=e.alternate;return n===null?(n=Pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $s(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Kc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case mr:return Yn(n.children,i,o,t);case pc:a=8,i|=8;break;case qa:return e=Pt(12,n,t,i|2),e.elementType=qa,e.lanes=o,e;case Ja:return e=Pt(13,n,t,i),e.elementType=Ja,e.lanes=o,e;case Ka:return e=Pt(19,n,t,i),e.elementType=Ka,e.lanes=o,e;case bf:return Ro(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yf:a=10;break e;case vf:a=9;break e;case fc:a=11;break e;case mc:a=14;break e;case gn:a=16,r=null;break e}throw Error(Q(130,e==null?e:typeof e,""))}return t=Pt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yn(e,t,n,r){return e=Pt(7,e,r,t),e.lanes=n,e}function Ro(e,t,n,r){return e=Pt(22,e,r,t),e.elementType=bf,e.lanes=n,e.stateNode={isHidden:!1},e}function ja(e,t,n){return e=Pt(6,e,null,t),e.lanes=n,e}function wa(e,t,n){return t=Pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qc(e,t,n,r,i,o,a,l,c){return e=new Tv(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(o),e}function Pv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dh(e){if(!e)return Rn;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(Q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Q(171))}if(e.tag===1){var n=e.type;if(ct(n))return dm(e,n,t)}return t}function ph(e,t,n,r,i,o,a,l,c){return e=Qc(n,r,!0,e,i,o,a,l,c),e.context=dh(null),n=e.current,r=nt(),i=Tn(n),o=sn(r,i),o.callback=t??null,En(n,o,i),e.current.lanes=i,Qi(e,i,r),ut(e,r),e}function Io(e,t,n,r){var i=t.current,o=nt(),a=Tn(i);return n=dh(n),t.context===null?t.context=n:t.pendingContext=n,t=sn(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=En(i,t,a),e!==null&&(Bt(e,i,a,o),Ls(e,i,a)),a}function fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Id(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gc(e,t){Id(e,t),(e=e.alternate)&&Id(e,t)}function Lv(){return null}var fh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}Mo.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));Io(e,t,null,null)};Mo.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){Io(null,e,null,null)}),t[cn]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&qf(e)}};function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function Av(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fo(a);o.call(u)}}var a=ph(t,r,e,0,null,!1,!1,"",Md);return e._reactRootContainer=a,e[cn]=a.current,Ri(e.nodeType===8?e.parentNode:e),ir(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=fo(c);l.call(u)}}var c=Qc(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=c,e[cn]=c.current,Ri(e.nodeType===8?e.parentNode:e),ir(function(){Io(t,c,n,r)}),c}function $o(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=fo(a);l.call(c)}}Io(t,a,e,i)}else a=Av(n,t,e,i,r);return fo(a)}Uf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ui(t.pendingLanes);n!==0&&(xc(t,n|1),ut(t,Ie()),!(xe&6)&&(Fr=Ie()+500,Dn()))}break;case 13:ir(function(){var r=un(e,1);if(r!==null){var i=nt();Bt(r,e,1,i)}}),Gc(e,1)}};yc=function(e){if(e.tag===13){var t=un(e,134217728);if(t!==null){var n=nt();Bt(t,e,134217728,n)}Gc(e,134217728)}};Vf=function(e){if(e.tag===13){var t=Tn(e),n=un(e,t);if(n!==null){var r=nt();Bt(n,e,t,r)}Gc(e,t)}};Wf=function(){return je};Hf=function(e,t){var n=je;try{return je=e,t()}finally{je=n}};il=function(e,t,n){switch(t){case"input":if(Ya(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Eo(r);if(!i)throw Error(Q(90));jf(r),Ya(r,i)}}}break;case"textarea":_f(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};Pf=Hc;Lf=ir;var Rv={usingClientEntryPoint:!1,Events:[Yi,yr,Eo,zf,Tf,Hc]},ri={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iv={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=If(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||Lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{_o=ks.inject(Iv),Kt=ks}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(t))throw Error(Q(200));return Pv(e,t,null,n)};wt.createRoot=function(e,t){if(!Xc(e))throw Error(Q(299));var n=!1,r="",i=fh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qc(e,1,!1,null,null,n,!1,r,i),e[cn]=t.current,Ri(e.nodeType===8?e.parentNode:e),new Yc(t)};wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=If(t),e=e===null?null:e.stateNode,e};wt.flushSync=function(e){return ir(e)};wt.hydrate=function(e,t,n){if(!Oo(t))throw Error(Q(200));return $o(null,e,t,!0,n)};wt.hydrateRoot=function(e,t,n){if(!Xc(e))throw Error(Q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=fh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ph(t,null,e,1,n??null,i,!1,o,a),e[cn]=t.current,Ri(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mo(t)};wt.render=function(e,t,n){if(!Oo(t))throw Error(Q(200));return $o(null,e,t,!1,n)};wt.unmountComponentAtNode=function(e){if(!Oo(e))throw Error(Q(40));return e._reactRootContainer?(ir(function(){$o(null,null,e,!1,function(){e._reactRootContainer=null,e[cn]=null})}),!0):!1};wt.unstable_batchedUpdates=Hc;wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Oo(n))throw Error(Q(200));if(e==null||e._reactInternals===void 0)throw Error(Q(38));return $o(e,t,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function mh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mh)}catch(e){console.error(e)}}mh(),mf.exports=wt;var Mv=mf.exports,Od=Mv;Wa.createRoot=Od.createRoot,Wa.hydrateRoot=Od.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(this,arguments)}var jn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jn||(jn={}));const $d="popstate";function Ov(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Ol("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hh(i)}return Dv(t,n,null,e)}function De(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function $v(){return Math.random().toString(36).substr(2,8)}function Dd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ol(e,t,n,r){return n===void 0&&(n=null),Vi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jr(t):t,{state:n,key:t&&t.key||r||$v()})}function hh(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=jn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Vi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=jn.Pop;let N=d(),x=N==null?null:N-u;u=N,c&&c({action:l,location:w.location,delta:x})}function f(N,x){l=jn.Push;let h=Ol(w.location,N,x);u=d()+1;let y=Dd(h,u),L=w.createHref(h);try{a.pushState(y,"",L)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(L)}o&&c&&c({action:l,location:w.location,delta:1})}function m(N,x){l=jn.Replace;let h=Ol(w.location,N,x);u=d();let y=Dd(h,u),L=w.createHref(h);a.replaceState(y,"",L),o&&c&&c({action:l,location:w.location,delta:0})}function v(N){let x=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof N=="string"?N:hh(N);return h=h.replace(/ $/,"%20"),De(x,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,x)}let w={get action(){return l},get location(){return e(i,a)},listen(N){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener($d,p),c=N,()=>{i.removeEventListener($d,p),c=null}},createHref(N){return t(i,N)},createURL:v,encodeLocation(N){let x=v(N);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:m,go(N){return a.go(N)}};return w}var Fd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Fd||(Fd={}));function Fv(e,t,n){return n===void 0&&(n="/"),Bv(e,t,n)}function Bv(e,t,n,r){let i=typeof t=="string"?Jr(t):t,o=yh(i.pathname||"/",n);if(o==null)return null;let a=gh(e);Uv(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=e1(o);l=Yv(a[c],u)}return l}function gh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(De(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Xn([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(De(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),gh(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Qv(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of xh(o.path))i(o,a,c)}),t}function xh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=xh(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Uv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Gv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Vv=/^:[\w-]+$/,Wv=3,Hv=2,qv=1,Jv=10,Kv=-2,Bd=e=>e==="*";function Qv(e,t){let n=e.split("/"),r=n.length;return n.some(Bd)&&(r+=Kv),t&&(r+=Hv),n.filter(i=>!Bd(i)).reduce((i,o)=>i+(Vv.test(o)?Wv:o===""?qv:Jv),r)}function Gv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Yv(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=Xv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Xn([o,p.pathname]),pathnameBase:s1(Xn([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=Xn([o,p.pathnameBase]))}return a}function Xv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let w=l[p]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const v=l[p];return m&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Zv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function e1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Zc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yh(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const t1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,n1=e=>t1.test(e);function r1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jr(e):e,o;if(n)if(n1(n))o=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Zc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?o=Ud(n.substring(1),"/"):o=Ud(n,t)}else o=t;return{pathname:o,search:o1(r),hash:a1(i)}}function Ud(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _a(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vh(e,t){let n=i1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function bh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jr(e):(i=Vi({},e),De(!i.pathname||!i.pathname.includes("?"),_a("?","pathname","search",i)),De(!i.pathname||!i.pathname.includes("#"),_a("#","pathname","hash",i)),De(!i.search||!i.search.includes("#"),_a("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=r1(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Xn=e=>e.join("/").replace(/\/\/+/g,"/"),s1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),o1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,a1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function l1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const kh=["post","put","patch","delete"];new Set(kh);const c1=["get",...kh];new Set(c1);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wi(){return Wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wi.apply(this,arguments)}const eu=_.createContext(null),u1=_.createContext(null),Zi=_.createContext(null),Do=_.createContext(null),Fn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),jh=_.createContext(null);function es(){return _.useContext(Do)!=null}function tu(){return es()||De(!1),_.useContext(Do).location}function wh(e){_.useContext(Zi).static||_.useLayoutEffect(e)}function nu(){let{isDataRoute:e}=_.useContext(Fn);return e?_1():d1()}function d1(){es()||De(!1);let e=_.useContext(eu),{basename:t,future:n,navigator:r}=_.useContext(Zi),{matches:i}=_.useContext(Fn),{pathname:o}=tu(),a=JSON.stringify(vh(i,n.v7_relativeSplatPath)),l=_.useRef(!1);return wh(()=>{l.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=bh(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Xn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,o,e])}function p1(){let{matches:e}=_.useContext(Fn),t=e[e.length-1];return t?t.params:{}}function f1(e,t){return m1(e,t)}function m1(e,t,n,r){es()||De(!1);let{navigator:i}=_.useContext(Zi),{matches:o}=_.useContext(Fn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=tu(),d;if(t){var p;let N=typeof t=="string"?Jr(t):t;c==="/"||(p=N.pathname)!=null&&p.startsWith(c)||De(!1),d=N}else d=u;let f=d.pathname||"/",m=f;if(c!=="/"){let N=c.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(N.length).join("/")}let v=Fv(e,{pathname:m}),w=v1(v&&v.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Xn([c,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?c:Xn([c,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,r);return t&&w?_.createElement(Do.Provider,{value:{location:Wi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:jn.Pop}},w):w}function h1(){let e=w1(),t=l1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,null)}const g1=_.createElement(h1,null);class x1 extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Fn.Provider,{value:this.props.routeContext},_.createElement(jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function y1(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(eu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Fn.Provider,{value:t},r)}function v1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||De(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:m}=n,v=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||v){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let m,v=!1,w=null,N=null;n&&(m=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||g1,c&&(u<0&&f===0?(S1("route-fallback"),v=!0,N=null):u===f&&(v=!0,N=p.route.hydrateFallbackElement||null)));let x=t.concat(a.slice(0,f+1)),h=()=>{let y;return m?y=w:v?y=N:p.route.Component?y=_.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,_.createElement(y1,{match:p,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?_.createElement(x1,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:h(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):h()},null)}var _h=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_h||{}),Sh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sh||{});function b1(e){let t=_.useContext(eu);return t||De(!1),t}function k1(e){let t=_.useContext(u1);return t||De(!1),t}function j1(e){let t=_.useContext(Fn);return t||De(!1),t}function Ch(e){let t=j1(),n=t.matches[t.matches.length-1];return n.route.id||De(!1),n.route.id}function w1(){var e;let t=_.useContext(jh),n=k1(),r=Ch();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _1(){let{router:e}=b1(_h.UseNavigateStable),t=Ch(Sh.UseNavigateStable),n=_.useRef(!1);return wh(()=>{n.current=!0}),_.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Wi({fromRouteId:t},o)))},[e,t])}const Vd={};function S1(e,t,n){Vd[e]||(Vd[e]=!0)}function C1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function N1(e){let{to:t,replace:n,state:r,relative:i}=e;es()||De(!1);let{future:o,static:a}=_.useContext(Zi),{matches:l}=_.useContext(Fn),{pathname:c}=tu(),u=nu(),d=bh(t,vh(l,o.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return _.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function pr(e){De(!1)}function E1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=jn.Pop,navigator:o,static:a=!1,future:l}=e;es()&&De(!1);let c=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:c,navigator:o,static:a,future:Wi({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=Jr(r));let{pathname:d="/",search:p="",hash:f="",state:m=null,key:v="default"}=r,w=_.useMemo(()=>{let N=yh(d,c);return N==null?null:{location:{pathname:N,search:p,hash:f,state:m,key:v},navigationType:i}},[c,d,p,f,m,v,i]);return w==null?null:_.createElement(Zi.Provider,{value:u},_.createElement(Do.Provider,{children:n,value:w}))}function z1(e){let{children:t,location:n}=e;return f1($l(t),n)}new Promise(()=>{});function $l(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let o=[...t,i];if(r.type===_.Fragment){n.push.apply(n,$l(r.props.children,o));return}r.type!==pr&&De(!1),!r.props.index||!r.props.children||De(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=$l(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const T1="6";try{window.__reactRouterVersion=T1}catch{}const P1="startTransition",Wd=Sx[P1];function L1(e){let{basename:t,children:n,future:r,window:i}=e,o=_.useRef();o.current==null&&(o.current=Ov({window:i,v5Compat:!0}));let a=o.current,[l,c]=_.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=_.useCallback(p=>{u&&Wd?Wd(()=>c(p)):c(p)},[c,u]);return _.useLayoutEffect(()=>a.listen(d),[a,d]),_.useEffect(()=>C1(r),[r]),_.createElement(E1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Hd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hd||(Hd={}));var qd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qd||(qd={}));const A1={},Jd=e=>{let t;const n=new Set,r=(d,p)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const m=t;t=p??(typeof f!="object"||f===null)?f:Object.assign({},t,f),n.forEach(v=>v(t,m))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(A1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},R1=e=>e?Jd(e):Jd;var Nh={exports:{}},Eh={},zh={exports:{}},Th={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=_;function I1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var M1=typeof Object.is=="function"?Object.is:I1,O1=Br.useState,$1=Br.useEffect,D1=Br.useLayoutEffect,F1=Br.useDebugValue;function B1(e,t){var n=t(),r=O1({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return D1(function(){i.value=n,i.getSnapshot=t,Sa(i)&&o({inst:i})},[e,n,t]),$1(function(){return Sa(i)&&o({inst:i}),e(function(){Sa(i)&&o({inst:i})})},[e]),F1(n),n}function Sa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!M1(e,n)}catch{return!0}}function U1(e,t){return t()}var V1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?U1:B1;Th.useSyncExternalStore=Br.useSyncExternalStore!==void 0?Br.useSyncExternalStore:V1;zh.exports=Th;var W1=zh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=_,H1=W1;function q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var J1=typeof Object.is=="function"?Object.is:q1,K1=H1.useSyncExternalStore,Q1=Fo.useRef,G1=Fo.useEffect,Y1=Fo.useMemo,X1=Fo.useDebugValue;Eh.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=Q1(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Y1(function(){function c(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&a.hasValue){var v=a.value;if(i(v,m))return p=v}return p=m}if(v=p,J1(d,m))return v;var w=r(m);return i!==void 0&&i(v,w)?(d=m,v):(d=m,p=w)}var u=!1,d,p,f=n===void 0?null:n;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,n,r,i]);var l=K1(e,o[0],o[1]);return G1(function(){a.hasValue=!0,a.value=l},[l]),X1(l),l};Nh.exports=Eh;var Z1=Nh.exports;const e0=jo(Z1),Ph={},{useDebugValue:t0}=Lt,{useSyncExternalStoreWithSelector:n0}=e0;let Kd=!1;const r0=e=>e;function i0(e,t=r0,n){(Ph?"production":void 0)!=="production"&&n&&!Kd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Kd=!0);const r=n0(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return t0(r),r}const Qd=e=>{(Ph?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?R1(e):e,n=(r,i)=>i0(t,r,i);return Object.assign(n,t),n},s0=e=>e?Qd(e):Qd,Ze=s0((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(o=>({...o,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const o=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=o.map(({id:c,serverName:u,toolName:d,args:p,transform:f})=>({id:c,serverName:u,toolName:d,args:p,transform:f}));return{watches:o,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:o}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:o}=r;if(o){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:p})=>({id:l,serverName:c,toolName:u,args:d,transform:p}));return{watches:i,project:{...o,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();r&&e({project:{...r,agents:[...r.agents,n]}})},updateAgent:(n,r)=>{const{project:i}=t();i&&e({project:{...i,agents:i.agents.map(o=>o.id===n?{...o,...r}:o)}})},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(o=>o.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(o=>o.id===n?{...o,...r}:o)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(o=>o.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(o=>o.id===n?{...o,...r}:o)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),Lh="/api";async function ye(e,t){const n=await fetch(`${Lh}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Ah(){return(await ye("/projects")).projects}async function Rh(e){return(await ye(`/projects/${e}`)).project}async function Ih(e,t=""){return(await ye("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Dl(e,t){return(await ye(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Mh(e){await ye(`/projects/${e}`,{method:"DELETE"})}async function Oh(e){return ye(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Fl(e){return(await ye(`/projects/${e}/sessions`)).sessions}async function $h(e,t){return(await ye(`/projects/${e}/sessions/${t}/load`)).session}async function Dh(e){return(await ye(`/projects/${e}/yaml`)).yaml}async function Fh(e,t){return(await ye(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function ru(){return(await ye("/mcp-servers")).servers}async function Bh(){return(await ye("/builtin-tools")).tools}function Uh(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function Ds(e,t,n,r){return await ye(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function Vh(e,t){return await ye(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function Wh(e,t,n,r=[],i){return await ye(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function Hh(e,t,n,r,i=[],o){return await ye(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:o})})}async function qh(e){return await ye("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function Jh(e,t){return ye(`/projects/${e}/skillsets/${t}/stats`)}async function Kh(e,t,n,r,i=500,o=50){return ye(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:o})})}async function Qh(e,t,n,r=500,i=50){const o=new FormData;o.append("file",n),o.append("chunk_size",String(r)),o.append("chunk_overlap",String(i));const a=await fetch(`${Lh}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:o});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function Gh(e,t,n,r=10,i=0){return ye(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function Yh(e,t){return ye(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function Xh(){return ye("/skillsets/embeddings-available")}const Ve={async get(e){return ye(e)},async post(e,t){return ye(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return ye(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return ye(e,{method:"DELETE"})}},o0=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:Kh,api:Ve,checkEmbeddingsAvailable:Xh,clearSkillSet:Yh,createProject:Ih,createRunWebSocket:Uh,deleteProject:Mh,fetchJSON:ye,generateAgentConfig:Vh,generateCallbackCode:Hh,generatePrompt:Ds,generateToolCode:Wh,getBuiltinTools:Bh,getMcpServers:ru,getProject:Rh,getProjectYaml:Dh,getSkillSetStats:Jh,listProjectSessions:Fl,listProjects:Ah,loadSession:$h,saveSessionToMemory:Oh,searchSkillSet:Gh,testMcpServer:qh,updateProject:Dl,updateProjectFromYaml:Fh,uploadSkillSetFile:Qh},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var a0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),se=(e,t)=>{const n=_.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>_.createElement("svg",{ref:d,...a0,width:i,height:i,stroke:r,strokeWidth:a?Number(o)*24/Number(i):o,className:["lucide",`lucide-${l0(e)}`,l].join(" "),...u},[...t.map(([p,f])=>_.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=se("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=se("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=se("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=se("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=se("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=se("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=se("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=se("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=se("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=se("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=se("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=se("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=se("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=se("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=se("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=se("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=se("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=se("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=se("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=se("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=se("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=se("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=se("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=se("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=se("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=se("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=se("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=se("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=se("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=se("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=se("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=se("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=se("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=se("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=se("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=se("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=se("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=se("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=se("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=se("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=se("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=se("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=se("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=se("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=se("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=se("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=se("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=se("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=se("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=se("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=se("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=se("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=se("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=se("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=se("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=se("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=se("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=se("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=se("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=se("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function _0(){const e=nu(),[t,n]=_.useState([]),[r,i]=_.useState(!0),[o,a]=_.useState(!1),[l,c]=_.useState("");_.useEffect(()=>{u()},[]);async function u(){try{const f=await Ah();n(f)}catch(f){console.error("Failed to load projects:",f)}finally{i(!1)}}async function d(){if(l.trim())try{const f=await Ih(l.trim());e(`/project/${f.id}`)}catch(f){console.error("Failed to create project:",f)}}async function p(f,m){if(m.stopPropagation(),!!confirm("Delete this project?"))try{await Mh(f),n(t.filter(v=>v.id!==f))}catch(v){console.error("Failed to delete project:",v)}}return s.jsxs("div",{className:"project-list",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"header",children:[s.jsxs("div",{className:"logo",children:[s.jsx(lu,{size:40,className:"logo-icon"}),s.jsx("h1",{className:"title",children:"ADK Playground"})]}),s.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),s.jsxs("div",{className:"content",children:[o?s.jsxs("div",{className:"create-form",children:[s.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:f=>c(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),s.jsxs("button",{className:"btn btn-primary",onClick:d,children:[s.jsx(Me,{size:18}),"Create"]}),s.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):s.jsx("div",{className:"create-form",children:s.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[s.jsx(Me,{size:18}),"New Project"]})}),r?s.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Gd,{size:48,style:{marginBottom:16,opacity:.3}}),s.jsx("p",{children:"No projects yet. Create one to get started!"})]}):s.jsx("div",{className:"projects-grid",children:t.map(f=>s.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${f.id}`),children:[s.jsxs("h3",{children:[s.jsx(Gd,{size:18}),f.name]}),s.jsx("p",{children:f.description||"No description"}),s.jsx("button",{className:"delete-btn",onClick:m=>p(f.id,m),children:s.jsx(Pe,{size:16})})]},f.id))})]})]})}const S0=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"AZURE_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function C0(e){return/^[a-zA-Z0-9_]+$/.test(e)}function N0(){const{project:e,updateProject:t}=Ze(),[n,r]=_.useState(null);if(!e)return null;const{app:i}=e;function o(j){t({app:{...i,...j}})}function a(j){if(j===""){r(null),o({name:j});return}C0(j)?r(null):r("Name can only contain letters, numbers, and underscores"),o({name:j})}function l(){const j={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};o({state_keys:[...i.state_keys,j]})}function c(j,z){const O=[...i.state_keys];O[j]={...O[j],...z},o({state_keys:O})}function u(j){o({state_keys:i.state_keys.filter((z,O)=>O!==j)})}function d(j="ReflectAndRetryToolPlugin"){let z;switch(j){case"ReflectAndRetryToolPlugin":z={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":z={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":z={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":z={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":z={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":z={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:z={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}o({plugins:[...i.plugins,z]})}function p(j,z){const O=[...i.plugins];O[j]={...O[j],...z},o({plugins:O})}function f(j){o({plugins:i.plugins.filter((z,O)=>O!==j)})}const m=i.models||[];function v(){const j=`model_${Date.now().toString(36)}`,z={id:j,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:m.length===0};o({models:[...m,z],default_model_id:m.length===0?j:i.default_model_id})}function w(j,z){const O=m.map(U=>U.id===j?{...U,...z}:U);o({models:O})}function N(j){var U;const z=m.filter(B=>B.id!==j),O=i.default_model_id===j?((U=z[0])==null?void 0:U.id)||void 0:i.default_model_id;o({models:z,default_model_id:O})}function x(j){o({default_model_id:j})}const h=i.env_vars||{},[y,L]=_.useState({}),[S,g]=_.useState("");function b(j=""){const z=j||S.trim();!z||h[z]!==void 0||(o({env_vars:{...h,[z]:""}}),g(""))}function T(j,z){o({env_vars:{...h,[j]:z}})}function R(j){const z={...h};delete z[j],o({env_vars:z})}function E(j){L(z=>({...z,[j]:!z[j]}))}return s.jsxs("div",{className:"app-config",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(b0,{size:20}),"Basic Information"]})}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"App Name"}),s.jsx("input",{type:"text",value:i.name,onChange:j=>a(j.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Root Agent"}),s.jsxs("select",{value:i.root_agent_id||"",onChange:j=>o({root_agent_id:j.target.value||void 0}),children:[s.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(j=>s.jsx("option",{value:j.id,children:j.name},j.id))]})]}),s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:i.description,onChange:j=>o({description:j.target.value}),rows:2})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(on,{size:20}),"Services"]}),s.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Session Service"}),s.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:j=>{const z=j.target.value;o({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[z]||z+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System (JSON)"}),s.jsx("option",{value:"sqlite",children:"SQLite (local)"}),s.jsx("option",{value:"postgresql",children:"PostgreSQL"}),s.jsx("option",{value:"mysql",children:"MySQL"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:j=>o({session_service_uri:"file://"+j.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&s.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:j=>o({session_service_uri:"sqlite://"+j.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&s.jsx("input",{type:"text",value:i.session_service_uri,onChange:j=>o({session_service_uri:j.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:j=>{const z=i.session_service_uri.split("/");z[2]=j.target.value,o({session_service_uri:z.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:j=>{const z=i.session_service_uri.split("/");z[3]=j.target.value,o({session_service_uri:z.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:j=>{const z=i.session_service_uri.split("/");z[4]=j.target.value,o({session_service_uri:z.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Memory Service"}),s.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:j=>{const z=j.target.value;o({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[z]||z+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),s.jsx("option",{value:"file",children:"File System (keyword matching)"}),s.jsx("option",{value:"rag",children:"Vertex AI RAG"}),s.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:j=>o({memory_service_uri:"file://"+j.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:j=>o({memory_service_uri:"rag://"+j.target.value}),placeholder:"rag-corpus-id or full resource path"}),s.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&s.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:j=>{const z=i.memory_service_uri.split("/");z[2]=j.target.value,o({memory_service_uri:z.join("/")})},placeholder:"project-id"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:j=>{const z=i.memory_service_uri.split("/");z[3]=j.target.value,o({memory_service_uri:z.join("/")})},placeholder:"location (e.g., us-central1)"}),s.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:j=>{const z=i.memory_service_uri.split("/");z[4]=j.target.value,o({memory_service_uri:z.join("/")})},placeholder:"agent-engine-id"})]}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Artifact Service"}),s.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:j=>{const z=j.target.value;o({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[z]||z+"://"})},children:[s.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),s.jsx("option",{value:"file",children:"File System"}),s.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:j=>o({artifact_service_uri:"file://"+j.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&s.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:j=>o({artifact_service_uri:"gs://"+j.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),s.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(Vl,{size:20}),"Environment Variables"]})}),s.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:S0.filter(j=>h[j.key]===void 0).map(j=>s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>b(j.key),title:j.description,children:[s.jsx(Me,{size:12}),j.key]},j.key))}),Object.keys(h).length===0?s.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(h).map(([j,z])=>s.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[s.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[s.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:j}),s.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[s.jsx("input",{type:y[j]?"text":"password",value:z,onChange:O=>T(j,O.target.value),placeholder:"Enter value...",style:{flex:1}}),s.jsx("button",{className:"delete-item",onClick:()=>E(j),title:y[j]?"Hide value":"Show value",children:y[j]?s.jsx(d0,{size:16}):s.jsx(Hi,{size:16})})]})]}),s.jsx("button",{className:"delete-item",onClick:()=>R(j),children:s.jsx(Pe,{size:16})})]},j)),s.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[s.jsx("input",{type:"text",value:S,onChange:j=>g(j.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:j=>j.key==="Enter"&&b()}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>b(),disabled:!S.trim(),children:[s.jsx(Me,{size:14}),"Add Variable"]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(iu,{size:20}),"Models"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:v,children:[s.jsx(Me,{size:14}),"Add Model"]})]}),m.length===0?s.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):m.map(j=>s.jsxs("div",{className:"model-card",children:[s.jsxs("div",{className:"model-card-header",children:[s.jsx("input",{type:"text",value:j.name,onChange:z=>w(j.id,{name:z.target.value}),placeholder:"Model name",className:"model-name-input"}),s.jsx("button",{className:`default-model-btn ${i.default_model_id===j.id?"is-default":""}`,onClick:()=>x(j.id),title:i.default_model_id===j.id?"Default model":"Set as default",children:s.jsx(og,{size:14,fill:i.default_model_id===j.id?"currentColor":"none"})}),s.jsx("button",{className:"delete-item",onClick:()=>N(j.id),children:s.jsx(Pe,{size:16})})]}),s.jsxs("div",{className:"model-card-body",children:[s.jsxs("div",{className:"model-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Provider"}),s.jsxs("select",{value:j.provider,onChange:z=>w(j.id,{provider:z.target.value}),children:[s.jsx("option",{value:"gemini",children:"Gemini"}),s.jsx("option",{value:"litellm",children:"LiteLLM"}),s.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),s.jsxs("div",{className:"form-group",style:{flex:2},children:[s.jsx("label",{children:"Model Name"}),s.jsx("input",{type:"text",value:j.model_name,onChange:z=>w(j.id,{model_name:z.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),j.provider==="litellm"&&s.jsxs("div",{className:"form-group",style:{flex:2},children:[s.jsx("label",{children:"API Base URL"}),s.jsx("input",{type:"text",value:j.api_base||"",onChange:z=>w(j.id,{api_base:z.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),s.jsxs("div",{className:"model-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Temperature"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:j.temperature??"",onChange:z=>w(j.id,{temperature:z.target.value?parseFloat(z.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Tokens"}),s.jsx("input",{type:"number",min:"1",value:j.max_output_tokens??"",onChange:z=>w(j.id,{max_output_tokens:z.target.value?parseInt(z.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Top P"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:j.top_p??"",onChange:z=>w(j.id,{top_p:z.target.value?parseFloat(z.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Top K"}),s.jsx("input",{type:"number",min:"1",value:j.top_k??"",onChange:z=>w(j.id,{top_k:z.target.value?parseInt(z.target.value):void 0}),placeholder:"Default"})]})]})]})]},j.id))]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-header",children:s.jsxs("h2",{className:"section-title",children:[s.jsx(lg,{size:20}),"Advanced Options"]})}),s.jsxs("div",{className:"toggle-group",children:[s.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>o({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Event Compaction"}),s.jsx("span",{children:"Automatically summarize old events to reduce context size"})]}),i.compaction.enabled&&s.jsx("input",{type:"number",value:i.compaction.max_events,onChange:j=>o({compaction:{...i.compaction,max_events:parseInt(j.target.value)||100}}),style:{width:80},placeholder:"Max events"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>o({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Context Caching"}),s.jsx("span",{children:"Cache static instructions for better performance"})]}),i.context_cache.enabled&&s.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:j=>o({context_cache:{...i.context_cache,ttl_seconds:parseInt(j.target.value)||3600}}),style:{width:100},placeholder:"TTL (seconds)"})]}),s.jsxs("div",{className:"toggle-group",style:{marginTop:12},children:[s.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>o({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),s.jsxs("div",{className:"toggle-label",children:[s.jsx("strong",{children:"Resumability"}),s.jsx("span",{children:"Allow pausing and resuming agent execution"})]})]})]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(su,{size:20}),"Session State Keys"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[s.jsx(Me,{size:14}),"Add Key"]})]}),i.state_keys.length===0?s.jsx("p",{className:"empty-message",children:"No state keys defined. Add keys to declare what data agents can share."}):i.state_keys.map((j,z)=>s.jsxs("div",{className:"list-item",children:[s.jsxs("div",{className:"list-item-content",children:[s.jsx("input",{type:"text",value:j.name,onChange:O=>c(z,{name:O.target.value}),placeholder:"Key name"}),s.jsxs("select",{value:j.type,onChange:O=>c(z,{type:O.target.value}),children:[s.jsx("option",{value:"string",children:"String"}),s.jsx("option",{value:"number",children:"Number"}),s.jsx("option",{value:"boolean",children:"Boolean"}),s.jsx("option",{value:"object",children:"Object"}),s.jsx("option",{value:"array",children:"Array"})]}),s.jsxs("select",{value:j.scope,onChange:O=>c(z,{scope:O.target.value}),children:[s.jsx("option",{value:"session",children:"Session"}),s.jsx("option",{value:"user",children:"User"}),s.jsx("option",{value:"app",children:"App"}),s.jsx("option",{value:"temp",children:"Temporary"})]}),s.jsx("input",{type:"text",value:j.description,onChange:O=>c(z,{description:O.target.value}),placeholder:"Description",style:{gridColumn:"span 2"}})]}),s.jsx("button",{className:"delete-item",onClick:()=>u(z),children:s.jsx(Pe,{size:16})})]},z))]}),s.jsxs("section",{className:"section",children:[s.jsxs("div",{className:"section-header",children:[s.jsxs("h2",{className:"section-title",children:[s.jsx(wn,{size:20}),"Plugins"]}),s.jsx("div",{className:"plugin-add-dropdown",children:s.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:j=>{j.target.value&&(d(j.target.value),j.target.value="")},style:{paddingRight:8},children:[s.jsx("option",{value:"",children:"+ Add Plugin..."}),s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?s.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((j,z)=>s.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[s.jsxs("select",{value:j.type,onChange:O=>p(z,{type:O.target.value}),style:{flex:1},children:[s.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),s.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),s.jsx("option",{value:"LoggingPlugin",children:"Logging"}),s.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),s.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),s.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),s.jsx("button",{className:"delete-item",onClick:()=>f(z),children:s.jsx(Pe,{size:16})})]}),j.type==="ReflectAndRetryToolPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Max Retries"}),s.jsx("input",{type:"number",min:"0",max:"10",value:j.max_retries??3,onChange:O=>p(z,{max_retries:parseInt(O.target.value)||0}),style:{width:70}})]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:j.throw_exception_if_retry_exceeded??!1,onChange:O=>p(z,{throw_exception_if_retry_exceeded:O.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),j.type==="ContextFilterPlugin"&&s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",style:{flex:0},children:[s.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),s.jsx("input",{type:"number",min:"1",max:"100",value:j.num_invocations_to_keep??5,onChange:O=>p(z,{num_invocations_to_keep:parseInt(O.target.value)||1}),style:{width:70}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),j.type==="LoggingPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),j.type==="GlobalInstructionPlugin"&&s.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),s.jsx("textarea",{value:j.global_instruction??"",onChange:O=>p(z,{global_instruction:O.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),j.type==="SaveFilesAsArtifactsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),j.type==="MultimodalToolResultsPlugin"&&s.jsx("div",{style:{paddingLeft:8},children:s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},z))]})]})}const E0="modulepreload",z0=function(e){return"/"+e},Zd={},cg=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=z0(c),c in Zd)return;Zd[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":E0,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((f,m)=>{p.addEventListener("load",f),p.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function ep(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function T0(e){if(Array.isArray(e))return e}function P0(e,t,n){return(t=$0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,a,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t!==0)for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function A0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function np(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tp(Object(n),!0).forEach(function(r){P0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function R0(e,t){if(e==null)return{};var n,r,i=I0(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function I0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function M0(e,t){return T0(e)||L0(e,t)||D0(e,t)||A0()}function O0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $0(e){var t=O0(e,"string");return typeof t=="symbol"?t:t+""}function D0(e,t){if(e){if(typeof e=="string")return ep(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ep(e,t):void 0}}function F0(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ip(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rp(Object(n),!0).forEach(function(r){F0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function B0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,o){return o(i)},r)}}function pi(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function yo(e){return{}.toString.call(e).includes("Object")}function U0(e){return!Object.keys(e).length}function qi(e){return typeof e=="function"}function V0(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function W0(e,t){return yo(t)||Ln("changeType"),Object.keys(t).some(function(n){return!V0(e,n)})&&Ln("changeField"),t}function H0(e){qi(e)||Ln("selectorType")}function q0(e){qi(e)||yo(e)||Ln("handlerType"),yo(e)&&Object.values(e).some(function(t){return!qi(t)})&&Ln("handlersType")}function J0(e){e||Ln("initialIsRequired"),yo(e)||Ln("initialType"),U0(e)&&Ln("initialContent")}function K0(e,t){throw new Error(e[t]||e.default)}var Q0={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},Ln=pi(K0)(Q0),js={changes:W0,selector:H0,handler:q0,initial:J0};function G0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};js.initial(e),js.handler(t);var n={current:e},r=pi(Z0)(n,t),i=pi(X0)(n),o=pi(js.changes)(e),a=pi(Y0)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return js.selector(u),u(n.current)}function c(u){B0(r,i,o,a)(u)}return[l,c]}function Y0(e,t){return qi(t)?t(e.current):t}function X0(e,t){return e.current=ip(ip({},e.current),t),t}function Z0(e,t,n){return qi(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var eb={create:G0},tb={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function nb(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function rb(e){return{}.toString.call(e).includes("Object")}function ib(e){return e||sp("configIsRequired"),rb(e)||sp("configType"),e.urls?(sb(),{paths:{vs:e.urls.monacoBase}}):e}function sb(){console.warn(ug.deprecation)}function ob(e,t){throw new Error(e[t]||e.default)}var ug={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},sp=nb(ob)(ug),ab={config:ib},lb=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(o,a){return a(o)},i)}};function dg(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],dg(e[n],t[n]))}),np(np({},e),t)}var cb={type:"cancelation",msg:"operation is manually canceled"};function Na(e){var t=!1,n=new Promise(function(r,i){e.then(function(o){return t?i(cb):r(o)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var ub=["monaco"],db=eb.create({config:tb,isInitialized:!1,resolve:null,reject:null,monaco:null}),pg=M0(db,2),ts=pg[0],Vo=pg[1];function pb(e){var t=ab.config(e),n=t.monaco,r=R0(t,ub);Vo(function(i){return{config:dg(i.config,r),monaco:n}})}function fb(){var e=ts(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(Vo({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),Na(Ea);if(window.monaco&&window.monaco.editor)return fg(window.monaco),e.resolve(window.monaco),Na(Ea);lb(mb,gb)(xb)}return Na(Ea)}function mb(e){return document.body.appendChild(e)}function hb(e){var t=document.createElement("script");return e&&(t.src=e),t}function gb(e){var t=ts(function(r){var i=r.config,o=r.reject;return{config:i,reject:o}}),n=hb("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function xb(){var e=ts(function(n){var r=n.config,i=n.resolve,o=n.reject;return{config:r,resolve:i,reject:o}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;fg(r),e.resolve(r)},function(n){e.reject(n)})}function fg(e){ts().monaco||Vo({monaco:e})}function yb(){return ts(function(e){var t=e.monaco;return t})}var Ea=new Promise(function(e,t){return Vo({resolve:e,reject:t})}),mg={config:pb,init:fb,__getMonacoInstance:yb},vb={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},za=vb,bb={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},kb=bb;function jb({children:e}){return Lt.createElement("div",{style:kb.container},e)}var wb=jb,_b=wb;function Sb({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:o,wrapperProps:a}){return Lt.createElement("section",{style:{...za.wrapper,width:e,height:t},...a},!n&&Lt.createElement(_b,null,r),Lt.createElement("div",{ref:i,style:{...za.fullWidth,...!n&&za.hide},className:o}))}var Cb=Sb,hg=_.memo(Cb);function Nb(e){_.useEffect(e,[])}var gg=Nb;function Eb(e,t,n=!0){let r=_.useRef(!0);_.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var yt=Eb;function ji(){}function Sr(e,t,n,r){return zb(e,r)||Tb(e,t,n,r)}function zb(e,t){return e.editor.getModel(xg(e,t))}function Tb(e,t,n,r){return e.editor.createModel(t,n,r?xg(e,r):void 0)}function xg(e,t){return e.Uri.parse(t)}function Pb({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:o,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:p={},height:f="100%",width:m="100%",className:v,wrapperProps:w={},beforeMount:N=ji,onMount:x=ji}){let[h,y]=_.useState(!1),[L,S]=_.useState(!0),g=_.useRef(null),b=_.useRef(null),T=_.useRef(null),R=_.useRef(x),E=_.useRef(N),j=_.useRef(!1);gg(()=>{let B=mg.init();return B.then(Y=>(b.current=Y)&&S(!1)).catch(Y=>(Y==null?void 0:Y.type)!=="cancelation"&&console.error("Monaco initialization: error:",Y)),()=>g.current?U():B.cancel()}),yt(()=>{if(g.current&&b.current){let B=g.current.getOriginalEditor(),Y=Sr(b.current,e||"",r||n||"text",o||"");Y!==B.getModel()&&B.setModel(Y)}},[o],h),yt(()=>{if(g.current&&b.current){let B=g.current.getModifiedEditor(),Y=Sr(b.current,t||"",i||n||"text",a||"");Y!==B.getModel()&&B.setModel(Y)}},[a],h),yt(()=>{let B=g.current.getModifiedEditor();B.getOption(b.current.editor.EditorOption.readOnly)?B.setValue(t||""):t!==B.getValue()&&(B.executeEdits("",[{range:B.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),B.pushUndoStop())},[t],h),yt(()=>{var B,Y;(Y=(B=g.current)==null?void 0:B.getModel())==null||Y.original.setValue(e||"")},[e],h),yt(()=>{let{original:B,modified:Y}=g.current.getModel();b.current.editor.setModelLanguage(B,r||n||"text"),b.current.editor.setModelLanguage(Y,i||n||"text")},[n,r,i],h),yt(()=>{var B;(B=b.current)==null||B.editor.setTheme(u)},[u],h),yt(()=>{var B;(B=g.current)==null||B.updateOptions(p)},[p],h);let z=_.useCallback(()=>{var P;if(!b.current)return;E.current(b.current);let B=Sr(b.current,e||"",r||n||"text",o||""),Y=Sr(b.current,t||"",i||n||"text",a||"");(P=g.current)==null||P.setModel({original:B,modified:Y})},[n,t,i,e,r,o,a]),O=_.useCallback(()=>{var B;!j.current&&T.current&&(g.current=b.current.editor.createDiffEditor(T.current,{automaticLayout:!0,...p}),z(),(B=b.current)==null||B.editor.setTheme(u),y(!0),j.current=!0)},[p,u,z]);_.useEffect(()=>{h&&R.current(g.current,b.current)},[h]),_.useEffect(()=>{!L&&!h&&O()},[L,h,O]);function U(){var Y,P,$,I;let B=(Y=g.current)==null?void 0:Y.getModel();l||((P=B==null?void 0:B.original)==null||P.dispose()),c||(($=B==null?void 0:B.modified)==null||$.dispose()),(I=g.current)==null||I.dispose()}return Lt.createElement(hg,{width:m,height:f,isEditorReady:h,loading:d,_ref:T,className:v,wrapperProps:w})}var Lb=Pb;_.memo(Lb);function Ab(e){let t=_.useRef();return _.useEffect(()=>{t.current=e},[e]),t.current}var Rb=Ab,ws=new Map;function Ib({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:o,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:p=!0,keepCurrentModel:f=!1,width:m="100%",height:v="100%",className:w,wrapperProps:N={},beforeMount:x=ji,onMount:h=ji,onChange:y,onValidate:L=ji}){let[S,g]=_.useState(!1),[b,T]=_.useState(!0),R=_.useRef(null),E=_.useRef(null),j=_.useRef(null),z=_.useRef(h),O=_.useRef(x),U=_.useRef(),B=_.useRef(r),Y=Rb(o),P=_.useRef(!1),$=_.useRef(!1);gg(()=>{let V=mg.init();return V.then(J=>(R.current=J)&&T(!1)).catch(J=>(J==null?void 0:J.type)!=="cancelation"&&console.error("Monaco initialization: error:",J)),()=>E.current?k():V.cancel()}),yt(()=>{var J,C,oe,A;let V=Sr(R.current,e||r||"",t||i||"",o||n||"");V!==((J=E.current)==null?void 0:J.getModel())&&(p&&ws.set(Y,(C=E.current)==null?void 0:C.saveViewState()),(oe=E.current)==null||oe.setModel(V),p&&((A=E.current)==null||A.restoreViewState(ws.get(o))))},[o],S),yt(()=>{var V;(V=E.current)==null||V.updateOptions(u)},[u],S),yt(()=>{!E.current||r===void 0||(E.current.getOption(R.current.editor.EditorOption.readOnly)?E.current.setValue(r):r!==E.current.getValue()&&($.current=!0,E.current.executeEdits("",[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop(),$.current=!1))},[r],S),yt(()=>{var J,C;let V=(J=E.current)==null?void 0:J.getModel();V&&i&&((C=R.current)==null||C.editor.setModelLanguage(V,i))},[i],S),yt(()=>{var V;l!==void 0&&((V=E.current)==null||V.revealLine(l))},[l],S),yt(()=>{var V;(V=R.current)==null||V.editor.setTheme(a)},[a],S);let I=_.useCallback(()=>{var V;if(!(!j.current||!R.current)&&!P.current){O.current(R.current);let J=o||n,C=Sr(R.current,r||e||"",t||i||"",J||"");E.current=(V=R.current)==null?void 0:V.editor.create(j.current,{model:C,automaticLayout:!0,...u},d),p&&E.current.restoreViewState(ws.get(J)),R.current.editor.setTheme(a),l!==void 0&&E.current.revealLine(l),g(!0),P.current=!0}},[e,t,n,r,i,o,u,d,p,a,l]);_.useEffect(()=>{S&&z.current(E.current,R.current)},[S]),_.useEffect(()=>{!b&&!S&&I()},[b,S,I]),B.current=r,_.useEffect(()=>{var V,J;S&&y&&((V=U.current)==null||V.dispose(),U.current=(J=E.current)==null?void 0:J.onDidChangeModelContent(C=>{$.current||y(E.current.getValue(),C)}))},[S,y]),_.useEffect(()=>{if(S){let V=R.current.editor.onDidChangeMarkers(J=>{var oe;let C=(oe=E.current.getModel())==null?void 0:oe.uri;if(C&&J.find(A=>A.path===C.path)){let A=R.current.editor.getModelMarkers({resource:C});L==null||L(A)}});return()=>{V==null||V.dispose()}}return()=>{}},[S,L]);function k(){var V,J;(V=U.current)==null||V.dispose(),f?p&&ws.set(o,E.current.saveViewState()):(J=E.current.getModel())==null||J.dispose(),E.current.dispose()}return Lt.createElement(hg,{width:m,height:v,isEditorReady:S,loading:c,_ref:j,className:w,wrapperProps:N})}var Mb=Ib,Ob=_.memo(Mb),an=Ob;function $b(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Db=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Fb=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Bb={};function op(e,t){return(Bb.jsx?Fb:Db).test(e)}const Ub=/[ \t\n\f\r]/g;function Vb(e){return typeof e=="object"?e.type==="text"?ap(e.value):!1:ap(e)}function ap(e){return e.replace(Ub,"")===""}class ns{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}ns.prototype.normal={};ns.prototype.property={};ns.prototype.space=void 0;function yg(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new ns(n,r,t)}function Hl(e){return e.toLowerCase()}class pt{constructor(t,n){this.attribute=n,this.property=t}}pt.prototype.attribute="";pt.prototype.booleanish=!1;pt.prototype.boolean=!1;pt.prototype.commaOrSpaceSeparated=!1;pt.prototype.commaSeparated=!1;pt.prototype.defined=!1;pt.prototype.mustUseProperty=!1;pt.prototype.number=!1;pt.prototype.overloadedBoolean=!1;pt.prototype.property="";pt.prototype.spaceSeparated=!1;pt.prototype.space=void 0;let Wb=0;const de=lr(),Oe=lr(),ql=lr(),G=lr(),we=lr(),Lr=lr(),gt=lr();function lr(){return 2**++Wb}const Jl=Object.freeze(Object.defineProperty({__proto__:null,boolean:de,booleanish:Oe,commaOrSpaceSeparated:gt,commaSeparated:Lr,number:G,overloadedBoolean:ql,spaceSeparated:we},Symbol.toStringTag,{value:"Module"})),Ta=Object.keys(Jl);class uu extends pt{constructor(t,n,r,i){let o=-1;if(super(t,n),lp(this,"space",i),typeof r=="number")for(;++o<Ta.length;){const a=Ta[o];lp(this,Ta[o],(r&Jl[a])===Jl[a])}}}uu.prototype.defined=!0;function lp(e,t,n){n&&(e[t]=n)}function Kr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new uu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[Hl(r)]=r,n[Hl(o.attribute)]=r}return new ns(t,n,e.space)}const vg=Kr({properties:{ariaActiveDescendant:null,ariaAtomic:Oe,ariaAutoComplete:null,ariaBusy:Oe,ariaChecked:Oe,ariaColCount:G,ariaColIndex:G,ariaColSpan:G,ariaControls:we,ariaCurrent:null,ariaDescribedBy:we,ariaDetails:null,ariaDisabled:Oe,ariaDropEffect:we,ariaErrorMessage:null,ariaExpanded:Oe,ariaFlowTo:we,ariaGrabbed:Oe,ariaHasPopup:null,ariaHidden:Oe,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:we,ariaLevel:G,ariaLive:null,ariaModal:Oe,ariaMultiLine:Oe,ariaMultiSelectable:Oe,ariaOrientation:null,ariaOwns:we,ariaPlaceholder:null,ariaPosInSet:G,ariaPressed:Oe,ariaReadOnly:Oe,ariaRelevant:null,ariaRequired:Oe,ariaRoleDescription:we,ariaRowCount:G,ariaRowIndex:G,ariaRowSpan:G,ariaSelected:Oe,ariaSetSize:G,ariaSort:null,ariaValueMax:G,ariaValueMin:G,ariaValueNow:G,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function bg(e,t){return t in e?e[t]:t}function kg(e,t){return bg(e,t.toLowerCase())}const Hb=Kr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Lr,acceptCharset:we,accessKey:we,action:null,allow:null,allowFullScreen:de,allowPaymentRequest:de,allowUserMedia:de,alt:null,as:null,async:de,autoCapitalize:null,autoComplete:we,autoFocus:de,autoPlay:de,blocking:we,capture:null,charSet:null,checked:de,cite:null,className:we,cols:G,colSpan:null,content:null,contentEditable:Oe,controls:de,controlsList:we,coords:G|Lr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:de,defer:de,dir:null,dirName:null,disabled:de,download:ql,draggable:Oe,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:de,formTarget:null,headers:we,height:G,hidden:ql,high:G,href:null,hrefLang:null,htmlFor:we,httpEquiv:we,id:null,imageSizes:null,imageSrcSet:null,inert:de,inputMode:null,integrity:null,is:null,isMap:de,itemId:null,itemProp:we,itemRef:we,itemScope:de,itemType:we,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:de,low:G,manifest:null,max:null,maxLength:G,media:null,method:null,min:null,minLength:G,multiple:de,muted:de,name:null,nonce:null,noModule:de,noValidate:de,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:de,optimum:G,pattern:null,ping:we,placeholder:null,playsInline:de,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:de,referrerPolicy:null,rel:we,required:de,reversed:de,rows:G,rowSpan:G,sandbox:we,scope:null,scoped:de,seamless:de,selected:de,shadowRootClonable:de,shadowRootDelegatesFocus:de,shadowRootMode:null,shape:null,size:G,sizes:null,slot:null,span:G,spellCheck:Oe,src:null,srcDoc:null,srcLang:null,srcSet:null,start:G,step:null,style:null,tabIndex:G,target:null,title:null,translate:null,type:null,typeMustMatch:de,useMap:null,value:Oe,width:G,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:we,axis:null,background:null,bgColor:null,border:G,borderColor:null,bottomMargin:G,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:de,declare:de,event:null,face:null,frame:null,frameBorder:null,hSpace:G,leftMargin:G,link:null,longDesc:null,lowSrc:null,marginHeight:G,marginWidth:G,noResize:de,noHref:de,noShade:de,noWrap:de,object:null,profile:null,prompt:null,rev:null,rightMargin:G,rules:null,scheme:null,scrolling:Oe,standby:null,summary:null,text:null,topMargin:G,valueType:null,version:null,vAlign:null,vLink:null,vSpace:G,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:de,disableRemotePlayback:de,prefix:null,property:null,results:G,security:null,unselectable:null},space:"html",transform:kg}),qb=Kr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:gt,accentHeight:G,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:G,amplitude:G,arabicForm:null,ascent:G,attributeName:null,attributeType:null,azimuth:G,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:G,by:null,calcMode:null,capHeight:G,className:we,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:G,diffuseConstant:G,direction:null,display:null,dur:null,divisor:G,dominantBaseline:null,download:de,dx:null,dy:null,edgeMode:null,editable:null,elevation:G,enableBackground:null,end:null,event:null,exponent:G,externalResourcesRequired:null,fill:null,fillOpacity:G,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Lr,g2:Lr,glyphName:Lr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:G,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:G,horizOriginX:G,horizOriginY:G,id:null,ideographic:G,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:G,k:G,k1:G,k2:G,k3:G,k4:G,kernelMatrix:gt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:G,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:G,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:G,overlineThickness:G,paintOrder:null,panose1:null,path:null,pathLength:G,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:we,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:G,pointsAtY:G,pointsAtZ:G,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:gt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:gt,rev:gt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:gt,requiredFeatures:gt,requiredFonts:gt,requiredFormats:gt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:G,specularExponent:G,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:G,strikethroughThickness:G,string:null,stroke:null,strokeDashArray:gt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:G,strokeOpacity:G,strokeWidth:null,style:null,surfaceScale:G,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:gt,tabIndex:G,tableValues:null,target:null,targetX:G,targetY:G,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:gt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:G,underlineThickness:G,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:G,values:null,vAlphabetic:G,vMathematical:G,vectorEffect:null,vHanging:G,vIdeographic:G,version:null,vertAdvY:G,vertOriginX:G,vertOriginY:G,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:G,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:bg}),jg=Kr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),wg=Kr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:kg}),_g=Kr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Jb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Kb=/[A-Z]/g,cp=/-[a-z]/g,Qb=/^data[-\w.:]+$/i;function Gb(e,t){const n=Hl(t);let r=t,i=pt;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Qb.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(cp,Xb);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!cp.test(o)){let a=o.replace(Kb,Yb);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=uu}return new i(r,t)}function Yb(e){return"-"+e.toLowerCase()}function Xb(e){return e.charAt(1).toUpperCase()}const Zb=yg([vg,Hb,jg,wg,_g],"html"),du=yg([vg,qb,jg,wg,_g],"svg");function ek(e){return e.join(" ").trim()}var pu={},up=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,tk=/\n/g,nk=/^\s*/,rk=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,ik=/^:\s*/,sk=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,ok=/^[;\s]*/,ak=/^\s+|\s+$/g,lk=`
`,dp="/",pp="*",qn="",ck="comment",uk="declaration";function dk(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(v){var w=v.match(tk);w&&(n+=w.length);var N=v.lastIndexOf(lk);r=~N?v.length-N:r+v.length}function o(){var v={line:n,column:r};return function(w){return w.position=new a(v),u(),w}}function a(v){this.start=v,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(v){var w=new Error(t.source+":"+n+":"+r+": "+v);if(w.reason=v,w.filename=t.source,w.line=n,w.column=r,w.source=e,!t.silent)throw w}function c(v){var w=v.exec(e);if(w){var N=w[0];return i(N),e=e.slice(N.length),w}}function u(){c(nk)}function d(v){var w;for(v=v||[];w=p();)w!==!1&&v.push(w);return v}function p(){var v=o();if(!(dp!=e.charAt(0)||pp!=e.charAt(1))){for(var w=2;qn!=e.charAt(w)&&(pp!=e.charAt(w)||dp!=e.charAt(w+1));)++w;if(w+=2,qn===e.charAt(w-1))return l("End of comment missing");var N=e.slice(2,w-2);return r+=2,i(N),e=e.slice(w),r+=2,v({type:ck,comment:N})}}function f(){var v=o(),w=c(rk);if(w){if(p(),!c(ik))return l("property missing ':'");var N=c(sk),x=v({type:uk,property:fp(w[0].replace(up,qn)),value:N?fp(N[0].replace(up,qn)):qn});return c(ok),x}}function m(){var v=[];d(v);for(var w;w=f();)w!==!1&&(v.push(w),d(v));return v}return u(),m()}function fp(e){return e?e.replace(ak,qn):qn}var pk=dk,fk=Us&&Us.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pu,"__esModule",{value:!0});pu.default=hk;const mk=fk(pk);function hk(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,mk.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:a,value:l}=o;i?t(a,l,o):l&&(n=n||{},n[a]=l)}),n}var Wo={};Object.defineProperty(Wo,"__esModule",{value:!0});Wo.camelCase=void 0;var gk=/^--[a-zA-Z0-9_-]+$/,xk=/-([a-z])/g,yk=/^[^-]+$/,vk=/^-(webkit|moz|ms|o|khtml)-/,bk=/^-(ms)-/,kk=function(e){return!e||yk.test(e)||gk.test(e)},jk=function(e,t){return t.toUpperCase()},mp=function(e,t){return"".concat(t,"-")},wk=function(e,t){return t===void 0&&(t={}),kk(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(bk,mp):e=e.replace(vk,mp),e.replace(xk,jk))};Wo.camelCase=wk;var _k=Us&&Us.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Sk=_k(pu),Ck=Wo;function Kl(e,t){var n={};return!e||typeof e!="string"||(0,Sk.default)(e,function(r,i){r&&i&&(n[(0,Ck.camelCase)(r,t)]=i)}),n}Kl.default=Kl;var Nk=Kl;const Ek=jo(Nk),Sg=Cg("end"),fu=Cg("start");function Cg(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function zk(e){const t=fu(e),n=Sg(e);if(t&&n)return{start:t,end:n}}function wi(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?hp(e.position):"start"in e||"end"in e?hp(e):"line"in e||"column"in e?Ql(e):""}function Ql(e){return gp(e&&e.line)+":"+gp(e&&e.column)}function hp(e){return Ql(e&&e.start)+"-"+Ql(e&&e.end)}function gp(e){return e&&typeof e=="number"?e:1}class et extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},a=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(a=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const l=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=wi(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=a&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}et.prototype.file="";et.prototype.name="";et.prototype.reason="";et.prototype.message="";et.prototype.stack="";et.prototype.column=void 0;et.prototype.line=void 0;et.prototype.ancestors=void 0;et.prototype.cause=void 0;et.prototype.fatal=void 0;et.prototype.place=void 0;et.prototype.ruleId=void 0;et.prototype.source=void 0;const mu={}.hasOwnProperty,Tk=new Map,Pk=/[A-Z]/g,Lk=new Set(["table","tbody","thead","tfoot","tr"]),Ak=new Set(["td","th"]),Ng="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Rk(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Uk(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Bk(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?du:Zb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Eg(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Eg(e,t,n){if(t.type==="element")return Ik(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Mk(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return $k(e,t,n);if(t.type==="mdxjsEsm")return Ok(e,t);if(t.type==="root")return Dk(e,t,n);if(t.type==="text")return Fk(e,t)}function Ik(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=du,e.schema=i),e.ancestors.push(t);const o=Tg(e,t.tagName,!1),a=Vk(e,t);let l=gu(e,t);return Lk.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Vb(c):!0})),zg(e,a,o,t),hu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Mk(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Ji(e,t.position)}function Ok(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Ji(e,t.position)}function $k(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=du,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Tg(e,t.name,!0),a=Wk(e,t),l=gu(e,t);return zg(e,a,o,t),hu(a,l),e.ancestors.pop(),e.schema=r,e.create(t,o,a,n)}function Dk(e,t,n){const r={};return hu(r,gu(e,t)),e.create(t,e.Fragment,r,n)}function Fk(e,t){return t.value}function zg(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function hu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Bk(e,t,n){return r;function r(i,o,a,l){const u=Array.isArray(a.children)?n:t;return l?u(o,a,l):u(o,a)}}function Uk(e,t){return n;function n(r,i,o,a){const l=Array.isArray(o.children),c=fu(r);return t(i,o,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Vk(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&mu.call(t.properties,i)){const o=Hk(e,i,t.properties[i]);if(o){const[a,l]=o;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&Ak.has(t.tagName)?r=l:n[a]=l}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function Wk(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const a=o.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Ji(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,o=e.evaluater.evaluateExpression(l.expression)}else Ji(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function gu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Tk;for(;++r<t.children.length;){const o=t.children[r];let a;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=Eg(e,o,a);l!==void 0&&n.push(l)}return n}function Hk(e,t,n){const r=Gb(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?$b(n):ek(n)),r.property==="style"){let i=typeof n=="object"?n:qk(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Jk(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Jb[r.property]||r.property:r.attribute,n]}}function qk(e,t){try{return Ek(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new et("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Ng+"#cannot-parse-style-attribute",i}}function Tg(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,a;for(;++o<i.length;){const l=op(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(o&&l.type==="Literal"),optional:!1}:l}r=a}else r=op(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return mu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Ji(e)}function Ji(e,t){const n=new et("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Ng+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Jk(e){const t={};let n;for(n in e)mu.call(e,n)&&(t[Kk(n)]=e[n]);return t}function Kk(e){let t=e.replace(Pk,Qk);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Qk(e){return"-"+e.toLowerCase()}const Pa={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Gk={};function Yk(e,t){const n=Gk,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Pg(e,r,i)}function Pg(e,t,n){if(Xk(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return xp(e.children,t,n)}return Array.isArray(e)?xp(e,t,n):""}function xp(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Pg(e[i],t,n);return r.join("")}function Xk(e){return!!(e&&typeof e=="object")}const yp=document.createElement("i");function xu(e){const t="&"+e+";";yp.innerHTML=t;const n=yp.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Yt(e,t,n,r){const i=e.length;let o=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);o<r.length;)a=r.slice(o,o+1e4),a.unshift(t,0),e.splice(...a),o+=1e4,t+=1e4}function Tt(e,t){return e.length>0?(Yt(e,e.length,0,t),e):t}const vp={}.hasOwnProperty;function Zk(e){const t={};let n=-1;for(;++n<e.length;)ej(t,e[n]);return t}function ej(e,t){let n;for(n in t){const i=(vp.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let a;if(o)for(a in o){vp.call(i,a)||(i[a]=[]);const l=o[a];tj(i[a],Array.isArray(l)?l:l?[l]:[])}}}function tj(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Yt(e,0,0,r)}function Lg(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Ar(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Jt=Bn(/[A-Za-z]/),bt=Bn(/[\dA-Za-z]/),nj=Bn(/[#-'*+\--9=?A-Z^-~]/);function Gl(e){return e!==null&&(e<32||e===127)}const Yl=Bn(/\d/),rj=Bn(/[\dA-Fa-f]/),ij=Bn(/[!-/:-@[-`{-~]/);function ce(e){return e!==null&&e<-2}function dt(e){return e!==null&&(e<0||e===32)}function be(e){return e===-2||e===-1||e===32}const sj=Bn(new RegExp("\\p{P}|\\p{S}","u")),oj=Bn(/\s/);function Bn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Qr(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let a="";if(o===37&&bt(e.charCodeAt(n+1))&&bt(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(a=String.fromCharCode(o));else if(o>55295&&o<57344){const l=e.charCodeAt(n+1);o<56320&&l>56319&&l<57344?(a=String.fromCharCode(o,l),i=1):a="�"}else a=String.fromCharCode(o);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Se(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return a;function a(c){return be(c)?(e.enter(n),l(c)):t(c)}function l(c){return be(c)&&o++<i?(e.consume(c),l):(e.exit(n),t(c))}}const aj={tokenize:lj};function lj(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Se(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),o(l)}function o(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return ce(l)?(e.consume(l),e.exit("chunkText"),o):(e.consume(l),a)}}const cj={tokenize:uj},bp={tokenize:dj};function uj(e){const t=this,n=[];let r=0,i,o,a;return l;function l(y){if(r<n.length){const L=n[r];return t.containerState=L[1],e.attempt(L[0].continuation,c,u)(y)}return u(y)}function c(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&h();const L=t.events.length;let S=L,g;for(;S--;)if(t.events[S][0]==="exit"&&t.events[S][1].type==="chunkFlow"){g=t.events[S][1].end;break}x(r);let b=L;for(;b<t.events.length;)t.events[b][1].end={...g},b++;return Yt(t.events,S+1,0,t.events.slice(L)),t.events.length=b,u(y)}return l(y)}function u(y){if(r===n.length){if(!i)return f(y);if(i.currentConstruct&&i.currentConstruct.concrete)return v(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(bp,d,p)(y)}function d(y){return i&&h(),x(r),f(y)}function p(y){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,v(y)}function f(y){return t.containerState={},e.attempt(bp,m,v)(y)}function m(y){return r++,n.push([t.currentConstruct,t.containerState]),f(y)}function v(y){if(y===null){i&&h(),x(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),w(y)}function w(y){if(y===null){N(e.exit("chunkFlow"),!0),x(0),e.consume(y);return}return ce(y)?(e.consume(y),N(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(y),w)}function N(y,L){const S=t.sliceStream(y);if(L&&S.push(null),y.previous=o,o&&(o.next=y),o=y,i.defineSkip(y.start),i.write(S),t.parser.lazy[y.start.line]){let g=i.events.length;for(;g--;)if(i.events[g][1].start.offset<a&&(!i.events[g][1].end||i.events[g][1].end.offset>a))return;const b=t.events.length;let T=b,R,E;for(;T--;)if(t.events[T][0]==="exit"&&t.events[T][1].type==="chunkFlow"){if(R){E=t.events[T][1].end;break}R=!0}for(x(r),g=b;g<t.events.length;)t.events[g][1].end={...E},g++;Yt(t.events,T+1,0,t.events.slice(b)),t.events.length=g}}function x(y){let L=n.length;for(;L-- >y;){const S=n[L];t.containerState=S[1],S[0].exit.call(t,e)}n.length=y}function h(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function dj(e,t,n){return Se(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function kp(e){if(e===null||dt(e)||oj(e))return 1;if(sj(e))return 2}function yu(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Xl={name:"attention",resolveAll:pj,tokenize:fj};function pj(e,t){let n=-1,r,i,o,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const p={...e[r][1].end},f={...e[n][1].start};jp(p,-c),jp(f,c),a={type:c>1?"strongSequence":"emphasisSequence",start:p,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},o={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=Tt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=Tt(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",o,t]]),u=Tt(u,yu(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=Tt(u,[["exit",o,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=Tt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Yt(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function fj(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=kp(r);let o;return a;function a(c){return o=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===o)return e.consume(c),l;const u=e.exit("attentionSequence"),d=kp(c),p=!d||d===2&&i||n.includes(c),f=!i||i===2&&d||n.includes(r);return u._open=!!(o===42?p:p&&(i||!f)),u._close=!!(o===42?f:f&&(d||!p)),t(c)}}function jp(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const mj={name:"autolink",tokenize:hj};function hj(e,t,n){let r=0;return i;function i(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(m){return Jt(m)?(e.consume(m),a):m===64?n(m):u(m)}function a(m){return m===43||m===45||m===46||bt(m)?(r=1,l(m)):u(m)}function l(m){return m===58?(e.consume(m),r=0,c):(m===43||m===45||m===46||bt(m))&&r++<32?(e.consume(m),l):(r=0,u(m))}function c(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):m===null||m===32||m===60||Gl(m)?n(m):(e.consume(m),c)}function u(m){return m===64?(e.consume(m),d):nj(m)?(e.consume(m),u):n(m)}function d(m){return bt(m)?p(m):n(m)}function p(m){return m===46?(e.consume(m),r=0,d):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),t):f(m)}function f(m){if((m===45||bt(m))&&r++<63){const v=m===45?f:p;return e.consume(m),v}return n(m)}}const Ho={partial:!0,tokenize:gj};function gj(e,t,n){return r;function r(o){return be(o)?Se(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||ce(o)?t(o):n(o)}}const Ag={continuation:{tokenize:yj},exit:vj,name:"blockQuote",tokenize:xj};function xj(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),o}return n(a)}function o(a){return be(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function yj(e,t,n){const r=this;return i;function i(a){return be(a)?Se(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):o(a)}function o(a){return e.attempt(Ag,t,n)(a)}}function vj(e){e.exit("blockQuote")}const Rg={name:"characterEscape",tokenize:bj};function bj(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return ij(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Ig={name:"characterReference",tokenize:kj};function kj(e,t,n){const r=this;let i=0,o,a;return l;function l(p){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),c}function c(p){return p===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(p),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,a=bt,d(p))}function u(p){return p===88||p===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(p),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,a=rj,d):(e.enter("characterReferenceValue"),o=7,a=Yl,d(p))}function d(p){if(p===59&&i){const f=e.exit("characterReferenceValue");return a===bt&&!xu(r.sliceSerialize(f))?n(p):(e.enter("characterReferenceMarker"),e.consume(p),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(p)&&i++<o?(e.consume(p),d):n(p)}}const wp={partial:!0,tokenize:wj},_p={concrete:!0,name:"codeFenced",tokenize:jj};function jj(e,t,n){const r=this,i={partial:!0,tokenize:S};let o=0,a=0,l;return c;function c(g){return u(g)}function u(g){const b=r.events[r.events.length-1];return o=b&&b[1].type==="linePrefix"?b[2].sliceSerialize(b[1],!0).length:0,l=g,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(g)}function d(g){return g===l?(a++,e.consume(g),d):a<3?n(g):(e.exit("codeFencedFenceSequence"),be(g)?Se(e,p,"whitespace")(g):p(g))}function p(g){return g===null||ce(g)?(e.exit("codeFencedFence"),r.interrupt?t(g):e.check(wp,w,L)(g)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(g))}function f(g){return g===null||ce(g)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),p(g)):be(g)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Se(e,m,"whitespace")(g)):g===96&&g===l?n(g):(e.consume(g),f)}function m(g){return g===null||ce(g)?p(g):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(g))}function v(g){return g===null||ce(g)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),p(g)):g===96&&g===l?n(g):(e.consume(g),v)}function w(g){return e.attempt(i,L,N)(g)}function N(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),x}function x(g){return o>0&&be(g)?Se(e,h,"linePrefix",o+1)(g):h(g)}function h(g){return g===null||ce(g)?e.check(wp,w,L)(g):(e.enter("codeFlowValue"),y(g))}function y(g){return g===null||ce(g)?(e.exit("codeFlowValue"),h(g)):(e.consume(g),y)}function L(g){return e.exit("codeFenced"),t(g)}function S(g,b,T){let R=0;return E;function E(B){return g.enter("lineEnding"),g.consume(B),g.exit("lineEnding"),j}function j(B){return g.enter("codeFencedFence"),be(B)?Se(g,z,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):z(B)}function z(B){return B===l?(g.enter("codeFencedFenceSequence"),O(B)):T(B)}function O(B){return B===l?(R++,g.consume(B),O):R>=a?(g.exit("codeFencedFenceSequence"),be(B)?Se(g,U,"whitespace")(B):U(B)):T(B)}function U(B){return B===null||ce(B)?(g.exit("codeFencedFence"),b(B)):T(B)}}}function wj(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const La={name:"codeIndented",tokenize:Sj},_j={partial:!0,tokenize:Cj};function Sj(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Se(e,o,"linePrefix",5)(u)}function o(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):ce(u)?e.attempt(_j,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||ce(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function Cj(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):ce(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Se(e,o,"linePrefix",5)(a)}function o(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):ce(a)?i(a):n(a)}}const Nj={name:"codeText",previous:zj,resolve:Ej,tokenize:Tj};function Ej(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function zj(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Tj(e,t,n){let r=0,i,o;return a;function a(p){return e.enter("codeText"),e.enter("codeTextSequence"),l(p)}function l(p){return p===96?(e.consume(p),r++,l):(e.exit("codeTextSequence"),c(p))}function c(p){return p===null?n(p):p===32?(e.enter("space"),e.consume(p),e.exit("space"),c):p===96?(o=e.enter("codeTextSequence"),i=0,d(p)):ce(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(p))}function u(p){return p===null||p===32||p===96||ce(p)?(e.exit("codeTextData"),c(p)):(e.consume(p),u)}function d(p){return p===96?(e.consume(p),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(p)):(o.type="codeTextData",u(p))}}class Pj{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&ii(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),ii(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),ii(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);ii(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);ii(this.left,n.reverse())}}}function ii(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Mg(e){const t={};let n=-1,r,i,o,a,l,c,u;const d=new Pj(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Lj(d,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(a=d.get(o),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=o);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return Yt(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function Lj(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,p,f=-1,m=n,v=0,w=0;const N=[w];for(;m;){for(;e.get(++i)[1]!==m;);o.push(i),m._tokenizer||(d=r.sliceStream(m),m.next||d.push(null),p&&a.defineSkip(m.start),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),m._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),p=m,m=m.next}for(m=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(w=f+1,N.push(w),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(a.events=[],m?(m._tokenizer=void 0,m.previous=void 0):N.pop(),f=N.length;f--;){const x=l.slice(N[f],N[f+1]),h=o.pop();c.push([h,h+x.length-1]),e.splice(h,2,x)}for(c.reverse(),f=-1;++f<c.length;)u[v+c[f][0]]=v+c[f][1],v+=c[f][1]-c[f][0]-1;return u}const Aj={resolve:Ij,tokenize:Mj},Rj={partial:!0,tokenize:Oj};function Ij(e){return Mg(e),e}function Mj(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?o(l):ce(l)?e.check(Rj,a,o)(l):(e.consume(l),i)}function o(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Oj(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Se(e,o,"linePrefix")}function o(a){if(a===null||ce(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function Og(e,t,n,r,i,o,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return p;function p(x){return x===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(x),e.exit(o),f):x===null||x===32||x===41||Gl(x)?n(x):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),w(x))}function f(x){return x===62?(e.enter(o),e.consume(x),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),m(x))}function m(x){return x===62?(e.exit("chunkString"),e.exit(l),f(x)):x===null||x===60||ce(x)?n(x):(e.consume(x),x===92?v:m)}function v(x){return x===60||x===62||x===92?(e.consume(x),m):m(x)}function w(x){return!d&&(x===null||x===41||dt(x))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(x)):d<u&&x===40?(e.consume(x),d++,w):x===41?(e.consume(x),d--,w):x===null||x===32||x===40||Gl(x)?n(x):(e.consume(x),x===92?N:w)}function N(x){return x===40||x===41||x===92?(e.consume(x),w):w(x)}}function $g(e,t,n,r,i,o){const a=this;let l=0,c;return u;function u(m){return e.enter(r),e.enter(i),e.consume(m),e.exit(i),e.enter(o),d}function d(m){return l>999||m===null||m===91||m===93&&!c||m===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(m):m===93?(e.exit(o),e.enter(i),e.consume(m),e.exit(i),e.exit(r),t):ce(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),p(m))}function p(m){return m===null||m===91||m===93||ce(m)||l++>999?(e.exit("chunkString"),d(m)):(e.consume(m),c||(c=!be(m)),m===92?f:p)}function f(m){return m===91||m===92||m===93?(e.consume(m),l++,p):p(m)}}function Dg(e,t,n,r,i,o){let a;return l;function l(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),a=f===40?41:f,c):n(f)}function c(f){return f===a?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===a?(e.exit(o),c(a)):f===null?n(f):ce(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Se(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(f))}function d(f){return f===a||f===null||ce(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?p:d)}function p(f){return f===a||f===92?(e.consume(f),d):d(f)}}function _i(e,t){let n;return r;function r(i){return ce(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):be(i)?Se(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const $j={name:"definition",tokenize:Fj},Dj={partial:!0,tokenize:Bj};function Fj(e,t,n){const r=this;let i;return o;function o(m){return e.enter("definition"),a(m)}function a(m){return $g.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function l(m){return i=Ar(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),c):n(m)}function c(m){return dt(m)?_i(e,u)(m):u(m)}function u(m){return Og(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function d(m){return e.attempt(Dj,p,p)(m)}function p(m){return be(m)?Se(e,f,"whitespace")(m):f(m)}function f(m){return m===null||ce(m)?(e.exit("definition"),r.parser.defined.push(i),t(m)):n(m)}}function Bj(e,t,n){return r;function r(l){return dt(l)?_i(e,i)(l):n(l)}function i(l){return Dg(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function o(l){return be(l)?Se(e,a,"whitespace")(l):a(l)}function a(l){return l===null||ce(l)?t(l):n(l)}}const Uj={name:"hardBreakEscape",tokenize:Vj};function Vj(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return ce(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const Wj={name:"headingAtx",resolve:Hj,tokenize:qj};function Hj(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Yt(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function qj(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),o(d)}function o(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||dt(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||ce(d)?(e.exit("atxHeading"),t(d)):be(d)?Se(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||dt(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const Jj=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Sp=["pre","script","style","textarea"],Kj={concrete:!0,name:"htmlFlow",resolveTo:Yj,tokenize:Xj},Qj={partial:!0,tokenize:ew},Gj={partial:!0,tokenize:Zj};function Yj(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Xj(e,t,n){const r=this;let i,o,a,l,c;return u;function u(C){return d(C)}function d(C){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(C),p}function p(C){return C===33?(e.consume(C),f):C===47?(e.consume(C),o=!0,w):C===63?(e.consume(C),i=3,r.interrupt?t:k):Jt(C)?(e.consume(C),a=String.fromCharCode(C),N):n(C)}function f(C){return C===45?(e.consume(C),i=2,m):C===91?(e.consume(C),i=5,l=0,v):Jt(C)?(e.consume(C),i=4,r.interrupt?t:k):n(C)}function m(C){return C===45?(e.consume(C),r.interrupt?t:k):n(C)}function v(C){const oe="CDATA[";return C===oe.charCodeAt(l++)?(e.consume(C),l===oe.length?r.interrupt?t:z:v):n(C)}function w(C){return Jt(C)?(e.consume(C),a=String.fromCharCode(C),N):n(C)}function N(C){if(C===null||C===47||C===62||dt(C)){const oe=C===47,A=a.toLowerCase();return!oe&&!o&&Sp.includes(A)?(i=1,r.interrupt?t(C):z(C)):Jj.includes(a.toLowerCase())?(i=6,oe?(e.consume(C),x):r.interrupt?t(C):z(C)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(C):o?h(C):y(C))}return C===45||bt(C)?(e.consume(C),a+=String.fromCharCode(C),N):n(C)}function x(C){return C===62?(e.consume(C),r.interrupt?t:z):n(C)}function h(C){return be(C)?(e.consume(C),h):E(C)}function y(C){return C===47?(e.consume(C),E):C===58||C===95||Jt(C)?(e.consume(C),L):be(C)?(e.consume(C),y):E(C)}function L(C){return C===45||C===46||C===58||C===95||bt(C)?(e.consume(C),L):S(C)}function S(C){return C===61?(e.consume(C),g):be(C)?(e.consume(C),S):y(C)}function g(C){return C===null||C===60||C===61||C===62||C===96?n(C):C===34||C===39?(e.consume(C),c=C,b):be(C)?(e.consume(C),g):T(C)}function b(C){return C===c?(e.consume(C),c=null,R):C===null||ce(C)?n(C):(e.consume(C),b)}function T(C){return C===null||C===34||C===39||C===47||C===60||C===61||C===62||C===96||dt(C)?S(C):(e.consume(C),T)}function R(C){return C===47||C===62||be(C)?y(C):n(C)}function E(C){return C===62?(e.consume(C),j):n(C)}function j(C){return C===null||ce(C)?z(C):be(C)?(e.consume(C),j):n(C)}function z(C){return C===45&&i===2?(e.consume(C),Y):C===60&&i===1?(e.consume(C),P):C===62&&i===4?(e.consume(C),V):C===63&&i===3?(e.consume(C),k):C===93&&i===5?(e.consume(C),I):ce(C)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Qj,J,O)(C)):C===null||ce(C)?(e.exit("htmlFlowData"),O(C)):(e.consume(C),z)}function O(C){return e.check(Gj,U,J)(C)}function U(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),B}function B(C){return C===null||ce(C)?O(C):(e.enter("htmlFlowData"),z(C))}function Y(C){return C===45?(e.consume(C),k):z(C)}function P(C){return C===47?(e.consume(C),a="",$):z(C)}function $(C){if(C===62){const oe=a.toLowerCase();return Sp.includes(oe)?(e.consume(C),V):z(C)}return Jt(C)&&a.length<8?(e.consume(C),a+=String.fromCharCode(C),$):z(C)}function I(C){return C===93?(e.consume(C),k):z(C)}function k(C){return C===62?(e.consume(C),V):C===45&&i===2?(e.consume(C),k):z(C)}function V(C){return C===null||ce(C)?(e.exit("htmlFlowData"),J(C)):(e.consume(C),V)}function J(C){return e.exit("htmlFlow"),t(C)}}function Zj(e,t,n){const r=this;return i;function i(a){return ce(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),o):n(a)}function o(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function ew(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ho,t,n)}}const tw={name:"htmlText",tokenize:nw};function nw(e,t,n){const r=this;let i,o,a;return l;function l(k){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(k),c}function c(k){return k===33?(e.consume(k),u):k===47?(e.consume(k),S):k===63?(e.consume(k),y):Jt(k)?(e.consume(k),T):n(k)}function u(k){return k===45?(e.consume(k),d):k===91?(e.consume(k),o=0,v):Jt(k)?(e.consume(k),h):n(k)}function d(k){return k===45?(e.consume(k),m):n(k)}function p(k){return k===null?n(k):k===45?(e.consume(k),f):ce(k)?(a=p,P(k)):(e.consume(k),p)}function f(k){return k===45?(e.consume(k),m):p(k)}function m(k){return k===62?Y(k):k===45?f(k):p(k)}function v(k){const V="CDATA[";return k===V.charCodeAt(o++)?(e.consume(k),o===V.length?w:v):n(k)}function w(k){return k===null?n(k):k===93?(e.consume(k),N):ce(k)?(a=w,P(k)):(e.consume(k),w)}function N(k){return k===93?(e.consume(k),x):w(k)}function x(k){return k===62?Y(k):k===93?(e.consume(k),x):w(k)}function h(k){return k===null||k===62?Y(k):ce(k)?(a=h,P(k)):(e.consume(k),h)}function y(k){return k===null?n(k):k===63?(e.consume(k),L):ce(k)?(a=y,P(k)):(e.consume(k),y)}function L(k){return k===62?Y(k):y(k)}function S(k){return Jt(k)?(e.consume(k),g):n(k)}function g(k){return k===45||bt(k)?(e.consume(k),g):b(k)}function b(k){return ce(k)?(a=b,P(k)):be(k)?(e.consume(k),b):Y(k)}function T(k){return k===45||bt(k)?(e.consume(k),T):k===47||k===62||dt(k)?R(k):n(k)}function R(k){return k===47?(e.consume(k),Y):k===58||k===95||Jt(k)?(e.consume(k),E):ce(k)?(a=R,P(k)):be(k)?(e.consume(k),R):Y(k)}function E(k){return k===45||k===46||k===58||k===95||bt(k)?(e.consume(k),E):j(k)}function j(k){return k===61?(e.consume(k),z):ce(k)?(a=j,P(k)):be(k)?(e.consume(k),j):R(k)}function z(k){return k===null||k===60||k===61||k===62||k===96?n(k):k===34||k===39?(e.consume(k),i=k,O):ce(k)?(a=z,P(k)):be(k)?(e.consume(k),z):(e.consume(k),U)}function O(k){return k===i?(e.consume(k),i=void 0,B):k===null?n(k):ce(k)?(a=O,P(k)):(e.consume(k),O)}function U(k){return k===null||k===34||k===39||k===60||k===61||k===96?n(k):k===47||k===62||dt(k)?R(k):(e.consume(k),U)}function B(k){return k===47||k===62||dt(k)?R(k):n(k)}function Y(k){return k===62?(e.consume(k),e.exit("htmlTextData"),e.exit("htmlText"),t):n(k)}function P(k){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),$}function $(k){return be(k)?Se(e,I,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(k):I(k)}function I(k){return e.enter("htmlTextData"),a(k)}}const vu={name:"labelEnd",resolveAll:ow,resolveTo:aw,tokenize:lw},rw={tokenize:cw},iw={tokenize:uw},sw={tokenize:dw};function ow(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Yt(e,0,e.length,n),e}function aw(e,t){let n=e.length,r=0,i,o,a,l;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=Tt(l,e.slice(o+1,o+r+3)),l=Tt(l,[["enter",d,t]]),l=Tt(l,yu(t.parser.constructs.insideSpan.null,e.slice(o+r+4,a-3),t)),l=Tt(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=Tt(l,e.slice(a+1)),l=Tt(l,[["exit",c,t]]),Yt(e,o,e.length,l),e}function lw(e,t,n){const r=this;let i=r.events.length,o,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return l;function l(f){return o?o._inactive?p(f):(a=r.parser.defined.includes(Ar(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(rw,d,a?d:p)(f):f===91?e.attempt(iw,d,a?u:p)(f):a?d(f):p(f)}function u(f){return e.attempt(sw,d,p)(f)}function d(f){return t(f)}function p(f){return o._balanced=!0,n(f)}}function cw(e,t,n){return r;function r(p){return e.enter("resource"),e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),i}function i(p){return dt(p)?_i(e,o)(p):o(p)}function o(p){return p===41?d(p):Og(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(p)}function a(p){return dt(p)?_i(e,c)(p):d(p)}function l(p){return n(p)}function c(p){return p===34||p===39||p===40?Dg(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(p):d(p)}function u(p){return dt(p)?_i(e,d)(p):d(p)}function d(p){return p===41?(e.enter("resourceMarker"),e.consume(p),e.exit("resourceMarker"),e.exit("resource"),t):n(p)}}function uw(e,t,n){const r=this;return i;function i(l){return $g.call(r,e,o,a,"reference","referenceMarker","referenceString")(l)}function o(l){return r.parser.defined.includes(Ar(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function dw(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const pw={name:"labelStartImage",resolveAll:vu.resolveAll,tokenize:fw};function fw(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),o}function o(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const mw={name:"labelStartLink",resolveAll:vu.resolveAll,tokenize:hw};function hw(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),o}function o(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const Aa={name:"lineEnding",tokenize:gw};function gw(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Se(e,t,"linePrefix")}}const Fs={name:"thematicBreak",tokenize:xw};function xw(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||ce(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),be(u)?Se(e,l,"whitespace")(u):l(u))}}const st={continuation:{tokenize:kw},exit:ww,name:"list",tokenize:bw},yw={partial:!0,tokenize:_w},vw={partial:!0,tokenize:jw};function bw(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(m){const v=r.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!r.containerState.marker||m===r.containerState.marker:Yl(m)){if(r.containerState.type||(r.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(Fs,n,u)(m):u(m);if(!r.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(m)}return n(m)}function c(m){return Yl(m)&&++a<10?(e.consume(m),c):(!r.interrupt||a<2)&&(r.containerState.marker?m===r.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),u(m)):n(m)}function u(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||m,e.check(Ho,r.interrupt?n:d,e.attempt(yw,f,p))}function d(m){return r.containerState.initialBlankLine=!0,o++,f(m)}function p(m){return be(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),f):n(m)}function f(m){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(m)}}function kw(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Ho,i,o);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Se(e,t,"listItemIndent",r.containerState.size+1)(l)}function o(l){return r.containerState.furtherBlankLines||!be(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(vw,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Se(e,e.attempt(st,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function jw(e,t,n){const r=this;return Se(e,i,"listItemIndent",r.containerState.size+1);function i(o){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(o):n(o)}}function ww(e){e.exit(this.containerState.type)}function _w(e,t,n){const r=this;return Se(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const a=r.events[r.events.length-1];return!be(o)&&a&&a[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Cp={name:"setextUnderline",resolveTo:Sw,tokenize:Cw};function Sw(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",a,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function Cw(e,t,n){const r=this;let i;return o;function o(u){let d=r.events.length,p;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){p=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||p)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),be(u)?Se(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||ce(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Nw={tokenize:Ew};function Ew(e){const t=this,n=e.attempt(Ho,r,e.attempt(this.parser.constructs.flowInitial,i,Se(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Aj,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const zw={resolveAll:Bg()},Tw=Fg("string"),Pw=Fg("text");function Fg(e){return{resolveAll:Bg(e==="text"?Lw:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,a,l);return a;function a(d){return u(d)?o(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),o(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const p=i[d];let f=-1;if(p)for(;++f<p.length;){const m=p[f];if(!m.previous||m.previous.call(r,r.previous))return!0}return!1}}}function Bg(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Lw(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,a=-1,l=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?a:r.start._bufferIndex+a,_index:r.start._index+o,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const Aw={42:st,43:st,45:st,48:st,49:st,50:st,51:st,52:st,53:st,54:st,55:st,56:st,57:st,62:Ag},Rw={91:$j},Iw={[-2]:La,[-1]:La,32:La},Mw={35:Wj,42:Fs,45:[Cp,Fs],60:Kj,61:Cp,95:Fs,96:_p,126:_p},Ow={38:Ig,92:Rg},$w={[-5]:Aa,[-4]:Aa,[-3]:Aa,33:pw,38:Ig,42:Xl,60:[mj,tw],91:mw,92:[Uj,Rg],93:vu,95:Xl,96:Nj},Dw={null:[Xl,zw]},Fw={null:[42,95]},Bw={null:[]},Uw=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Fw,contentInitial:Rw,disable:Bw,document:Aw,flow:Mw,flowInitial:Iw,insideSpan:Dw,string:Ow,text:$w},Symbol.toStringTag,{value:"Module"}));function Vw(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let a=[],l=[];const c={attempt:b(S),check:b(g),consume:h,enter:y,exit:L,interrupt:b(g,{interrupt:!0})},u={code:null,containerState:{},defineSkip:w,events:[],now:v,parser:e,previous:null,sliceSerialize:f,sliceStream:m,write:p};let d=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function p(j){return a=Tt(a,j),N(),a[a.length-1]!==null?[]:(T(t,0),u.events=yu(o,u.events,u),u.events)}function f(j,z){return Hw(m(j),z)}function m(j){return Ww(a,j)}function v(){const{_bufferIndex:j,_index:z,line:O,column:U,offset:B}=r;return{_bufferIndex:j,_index:z,line:O,column:U,offset:B}}function w(j){i[j.line]=j.column,E()}function N(){let j;for(;r._index<a.length;){const z=a[r._index];if(typeof z=="string")for(j=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===j&&r._bufferIndex<z.length;)x(z.charCodeAt(r._bufferIndex));else x(z)}}function x(j){d=d(j)}function h(j){ce(j)?(r.line++,r.column=1,r.offset+=j===-3?2:1,E()):j!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=j}function y(j,z){const O=z||{};return O.type=j,O.start=v(),u.events.push(["enter",O,u]),l.push(O),O}function L(j){const z=l.pop();return z.end=v(),u.events.push(["exit",z,u]),z}function S(j,z){T(j,z.from)}function g(j,z){z.restore()}function b(j,z){return O;function O(U,B,Y){let P,$,I,k;return Array.isArray(U)?J(U):"tokenize"in U?J([U]):V(U);function V(Z){return F;function F(te){const M=te!==null&&Z[te],q=te!==null&&Z.null,K=[...Array.isArray(M)?M:M?[M]:[],...Array.isArray(q)?q:q?[q]:[]];return J(K)(te)}}function J(Z){return P=Z,$=0,Z.length===0?Y:C(Z[$])}function C(Z){return F;function F(te){return k=R(),I=Z,Z.partial||(u.currentConstruct=Z),Z.name&&u.parser.constructs.disable.null.includes(Z.name)?A():Z.tokenize.call(z?Object.assign(Object.create(u),z):u,c,oe,A)(te)}}function oe(Z){return j(I,k),B}function A(Z){return k.restore(),++$<P.length?C(P[$]):Y}}}function T(j,z){j.resolveAll&&!o.includes(j)&&o.push(j),j.resolve&&Yt(u.events,z,u.events.length-z,j.resolve(u.events.slice(z),u)),j.resolveTo&&(u.events=j.resolveTo(u.events,u))}function R(){const j=v(),z=u.previous,O=u.currentConstruct,U=u.events.length,B=Array.from(l);return{from:U,restore:Y};function Y(){r=j,u.previous=z,u.currentConstruct=O,u.events.length=U,l=B,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Ww(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,o)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}o>0&&a.push(e[i].slice(0,o))}return a}function Hw(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let a;if(typeof o=="string")a=o;else switch(o){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(o)}i=o===-2,r.push(a)}return r.join("")}function qw(e){const r={constructs:Zk([Uw,...(e||{}).extensions||[]]),content:i(aj),defined:[],document:i(cj),flow:i(Nw),lazy:{},string:i(Tw),text:i(Pw)};return r;function i(o){return a;function a(l){return Vw(r,o,l)}}}function Jw(e){for(;!Mg(e););return e}const Np=/[\0\t\n\r]/g;function Kw(){let e=1,t="",n=!0,r;return i;function i(o,a,l){const c=[];let u,d,p,f,m;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(a||void 0).decode(o)),p=0,t="",n&&(o.charCodeAt(0)===65279&&p++,n=void 0);p<o.length;){if(Np.lastIndex=p,u=Np.exec(o),f=u&&u.index!==void 0?u.index:o.length,m=o.charCodeAt(f),!u){t=o.slice(p);break}if(m===10&&p===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),p<f&&(c.push(o.slice(p,f)),e+=f-p),m){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}p=f+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const Qw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Gw(e){return e.replace(Qw,Yw)}function Yw(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Lg(n.slice(o?2:1),o?16:10)}return xu(n)||e}const Ug={}.hasOwnProperty;function Xw(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Zw(n)(Jw(qw(n).document().write(Kw()(e,t,!0))))}function Zw(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(ze),autolinkProtocol:R,autolinkEmail:R,atxHeading:o(ve),blockQuote:o(q),characterEscape:R,characterReference:R,codeFenced:o(K),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:o(K,a),codeText:o(X,a),codeTextData:R,data:R,codeFlowValue:R,definition:o(ae),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:o(me),hardBreakEscape:o(ft),hardBreakTrailing:o(ft),htmlFlow:o(W,a),htmlFlowData:R,htmlText:o(W,a),htmlTextData:R,image:o(ge),label:a,link:o(ze),listItem:o(fn),listItemValue:f,listOrdered:o(mt,p),listUnordered:o(mt),paragraph:o(Qo),reference:C,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:o(ve),strong:o(Go),thematicBreak:o(is)},exit:{atxHeading:c(),atxHeadingSequence:S,autolink:c(),autolinkEmail:M,autolinkProtocol:te,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:A,characterReferenceMarkerNumeric:A,characterReferenceValue:Z,characterReference:F,codeFenced:c(N),codeFencedFence:w,codeFencedFenceInfo:m,codeFencedFenceMeta:v,codeFlowValue:E,codeIndented:c(x),codeText:c(B),codeTextData:E,data:E,definition:c(),definitionDestinationString:L,definitionLabelString:h,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(z),hardBreakTrailing:c(z),htmlFlow:c(O),htmlFlowData:E,htmlText:c(U),htmlTextData:E,image:c(P),label:I,labelText:$,lineEnding:j,link:c(Y),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:oe,resourceDestinationString:k,resourceTitleString:V,resource:J,setextHeading:c(T),setextHeadingLineSequence:b,setextHeadingText:g,strong:c(),thematicBreak:c()}};Vg(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(H){let ee={type:"root",children:[]};const ue={stack:[ee],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},fe=[];let ke=-1;for(;++ke<H.length;)if(H[ke][1].type==="listOrdered"||H[ke][1].type==="listUnordered")if(H[ke][0]==="enter")fe.push(ke);else{const ht=fe.pop();ke=i(H,ht,ke)}for(ke=-1;++ke<H.length;){const ht=t[H[ke][0]];Ug.call(ht,H[ke][1].type)&&ht[H[ke][1].type].call(Object.assign({sliceSerialize:H[ke][2].sliceSerialize},ue),H[ke][1])}if(ue.tokenStack.length>0){const ht=ue.tokenStack[ue.tokenStack.length-1];(ht[1]||Ep).call(ue,void 0,ht[0])}for(ee.position={start:hn(H.length>0?H[0][1].start:{line:1,column:1,offset:0}),end:hn(H.length>0?H[H.length-2][1].end:{line:1,column:1,offset:0})},ke=-1;++ke<t.transforms.length;)ee=t.transforms[ke](ee)||ee;return ee}function i(H,ee,ue){let fe=ee-1,ke=-1,ht=!1,Xt,St,D,re;for(;++fe<=ue;){const ie=H[fe];switch(ie[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ie[0]==="enter"?ke++:ke--,re=void 0;break}case"lineEndingBlank":{ie[0]==="enter"&&(Xt&&!re&&!ke&&!D&&(D=fe),re=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:re=void 0}if(!ke&&ie[0]==="enter"&&ie[1].type==="listItemPrefix"||ke===-1&&ie[0]==="exit"&&(ie[1].type==="listUnordered"||ie[1].type==="listOrdered")){if(Xt){let le=fe;for(St=void 0;le--;){const pe=H[le];if(pe[1].type==="lineEnding"||pe[1].type==="lineEndingBlank"){if(pe[0]==="exit")continue;St&&(H[St][1].type="lineEndingBlank",ht=!0),pe[1].type="lineEnding",St=le}else if(!(pe[1].type==="linePrefix"||pe[1].type==="blockQuotePrefix"||pe[1].type==="blockQuotePrefixWhitespace"||pe[1].type==="blockQuoteMarker"||pe[1].type==="listItemIndent"))break}D&&(!St||D<St)&&(Xt._spread=!0),Xt.end=Object.assign({},St?H[St][1].start:ie[1].end),H.splice(St||fe,0,["exit",Xt,ie[2]]),fe++,ue++}if(ie[1].type==="listItemPrefix"){const le={type:"listItem",_spread:!1,start:Object.assign({},ie[1].start),end:void 0};Xt=le,H.splice(fe,0,["enter",le,ie[2]]),fe++,ue++,D=void 0,re=!0}}}return H[ee][1]._spread=ht,ue}function o(H,ee){return ue;function ue(fe){l.call(this,H(fe),fe),ee&&ee.call(this,fe)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(H,ee,ue){this.stack[this.stack.length-1].children.push(H),this.stack.push(H),this.tokenStack.push([ee,ue||void 0]),H.position={start:hn(ee.start),end:void 0}}function c(H){return ee;function ee(ue){H&&H.call(this,ue),u.call(this,ue)}}function u(H,ee){const ue=this.stack.pop(),fe=this.tokenStack.pop();if(fe)fe[0].type!==H.type&&(ee?ee.call(this,H,fe[0]):(fe[1]||Ep).call(this,H,fe[0]));else throw new Error("Cannot close `"+H.type+"` ("+wi({start:H.start,end:H.end})+"): it’s not open");ue.position.end=hn(H.end)}function d(){return Yk(this.stack.pop())}function p(){this.data.expectingFirstListItemValue=!0}function f(H){if(this.data.expectingFirstListItemValue){const ee=this.stack[this.stack.length-2];ee.start=Number.parseInt(this.sliceSerialize(H),10),this.data.expectingFirstListItemValue=void 0}}function m(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.lang=H}function v(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.meta=H}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function N(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H.replace(/(\r?\n|\r)$/g,"")}function h(H){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.label=ee,ue.identifier=Ar(this.sliceSerialize(H)).toLowerCase()}function y(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.title=H}function L(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.url=H}function S(H){const ee=this.stack[this.stack.length-1];if(!ee.depth){const ue=this.sliceSerialize(H).length;ee.depth=ue}}function g(){this.data.setextHeadingSlurpLineEnding=!0}function b(H){const ee=this.stack[this.stack.length-1];ee.depth=this.sliceSerialize(H).codePointAt(0)===61?1:2}function T(){this.data.setextHeadingSlurpLineEnding=void 0}function R(H){const ue=this.stack[this.stack.length-1].children;let fe=ue[ue.length-1];(!fe||fe.type!=="text")&&(fe=Un(),fe.position={start:hn(H.start),end:void 0},ue.push(fe)),this.stack.push(fe)}function E(H){const ee=this.stack.pop();ee.value+=this.sliceSerialize(H),ee.position.end=hn(H.end)}function j(H){const ee=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ue=ee.children[ee.children.length-1];ue.position.end=hn(H.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(ee.type)&&(R.call(this,H),E.call(this,H))}function z(){this.data.atHardBreak=!0}function O(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H}function U(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H}function B(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.value=H}function Y(){const H=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=ee,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function P(){const H=this.stack[this.stack.length-1];if(this.data.inReference){const ee=this.data.referenceType||"shortcut";H.type+="Reference",H.referenceType=ee,delete H.url,delete H.title}else delete H.identifier,delete H.label;this.data.referenceType=void 0}function $(H){const ee=this.sliceSerialize(H),ue=this.stack[this.stack.length-2];ue.label=Gw(ee),ue.identifier=Ar(ee).toLowerCase()}function I(){const H=this.stack[this.stack.length-1],ee=this.resume(),ue=this.stack[this.stack.length-1];if(this.data.inReference=!0,ue.type==="link"){const fe=H.children;ue.children=fe}else ue.alt=ee}function k(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.url=H}function V(){const H=this.resume(),ee=this.stack[this.stack.length-1];ee.title=H}function J(){this.data.inReference=void 0}function C(){this.data.referenceType="collapsed"}function oe(H){const ee=this.resume(),ue=this.stack[this.stack.length-1];ue.label=ee,ue.identifier=Ar(this.sliceSerialize(H)).toLowerCase(),this.data.referenceType="full"}function A(H){this.data.characterReferenceType=H.type}function Z(H){const ee=this.sliceSerialize(H),ue=this.data.characterReferenceType;let fe;ue?(fe=Lg(ee,ue==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):fe=xu(ee);const ke=this.stack[this.stack.length-1];ke.value+=fe}function F(H){const ee=this.stack.pop();ee.position.end=hn(H.end)}function te(H){E.call(this,H);const ee=this.stack[this.stack.length-1];ee.url=this.sliceSerialize(H)}function M(H){E.call(this,H);const ee=this.stack[this.stack.length-1];ee.url="mailto:"+this.sliceSerialize(H)}function q(){return{type:"blockquote",children:[]}}function K(){return{type:"code",lang:null,meta:null,value:""}}function X(){return{type:"inlineCode",value:""}}function ae(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function me(){return{type:"emphasis",children:[]}}function ve(){return{type:"heading",depth:0,children:[]}}function ft(){return{type:"break"}}function W(){return{type:"html",value:""}}function ge(){return{type:"image",title:null,url:"",alt:null}}function ze(){return{type:"link",title:null,url:"",children:[]}}function mt(H){return{type:"list",ordered:H.type==="listOrdered",start:null,spread:H._spread,children:[]}}function fn(H){return{type:"listItem",spread:H._spread,checked:null,children:[]}}function Qo(){return{type:"paragraph",children:[]}}function Go(){return{type:"strong",children:[]}}function Un(){return{type:"text",value:""}}function is(){return{type:"thematicBreak"}}}function hn(e){return{line:e.line,column:e.column,offset:e.offset}}function Vg(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?Vg(e,r):e2(e,r)}}function e2(e,t){let n;for(n in t)if(Ug.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Ep(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+wi({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+wi({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+wi({start:t.start,end:t.end})+") is still open")}function t2(e){const t=this;t.parser=n;function n(r){return Xw(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function n2(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function r2(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function i2(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function s2(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function o2(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function a2(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Qr(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=o+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function l2(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function c2(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Wg(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function u2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Wg(e,t);const i={src:Qr(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function d2(e,t){const n={src:Qr(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function p2(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function f2(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Wg(e,t);const i={href:Qr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function m2(e,t){const n={href:Qr(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function h2(e,t,n){const r=e.all(t),i=n?g2(n):Hg(t),o={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let p;d&&d.type==="element"&&d.tagName==="p"?p=d:(p={type:"element",tagName:"p",properties:{},children:[]},r.unshift(p)),p.children.length>0&&p.children.unshift({type:"text",value:" "}),p.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:a};return e.patch(t,u),e.applyData(t,u)}function g2(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=Hg(n[r])}return t}function Hg(e){const t=e.spread;return t??e.children.length>1}function x2(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function y2(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function v2(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function b2(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function k2(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=fu(t.children[1]),c=Sg(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function j2(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const p=t.children[c],f={},m=a?a[c]:void 0;m&&(f.align=m);let v={type:"element",tagName:o,properties:f,children:[]};p&&(v.children=e.all(p),e.patch(p,v),v=e.applyData(p,v)),u.push(v)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function w2(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const zp=9,Tp=32;function _2(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Pp(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Pp(t.slice(i),i>0,!1)),o.join("")}function Pp(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===zp||o===Tp;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===zp||o===Tp;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function S2(e,t){const n={type:"text",value:_2(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function C2(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const N2={blockquote:n2,break:r2,code:i2,delete:s2,emphasis:o2,footnoteReference:a2,heading:l2,html:c2,imageReference:u2,image:d2,inlineCode:p2,linkReference:f2,link:m2,listItem:h2,list:x2,paragraph:y2,root:v2,strong:b2,table:k2,tableCell:w2,tableRow:j2,text:S2,thematicBreak:C2,toml:_s,yaml:_s,definition:_s,footnoteDefinition:_s};function _s(){}const qg=-1,qo=0,Si=1,vo=2,bu=3,ku=4,ju=5,wu=6,Jg=7,Kg=8,Lp=typeof self=="object"?self:globalThis,E2=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,a]=t[i];switch(o){case qo:case qg:return n(a,i);case Si:{const l=n([],i);for(const c of a)l.push(r(c));return l}case vo:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case bu:return n(new Date(a),i);case ku:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case ju:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case wu:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case Jg:{const{name:l,message:c}=a;return n(new Lp[l](c),i)}case Kg:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new Lp[o](a),i)};return r},Ap=e=>E2(new Map,e)(0),dr="",{toString:z2}={},{keys:T2}=Object,si=e=>{const t=typeof e;if(t!=="object"||!e)return[qo,t];const n=z2.call(e).slice(8,-1);switch(n){case"Array":return[Si,dr];case"Object":return[vo,dr];case"Date":return[bu,dr];case"RegExp":return[ku,dr];case"Map":return[ju,dr];case"Set":return[wu,dr];case"DataView":return[Si,n]}return n.includes("Array")?[Si,n]:n.includes("Error")?[Jg,n]:[vo,n]},Ss=([e,t])=>e===qo&&(t==="function"||t==="symbol"),P2=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},o=a=>{if(n.has(a))return n.get(a);let[l,c]=si(a);switch(l){case qo:{let d=a;switch(c){case"bigint":l=Kg,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([qg],a)}return i([l,d],a)}case Si:{if(c){let f=a;return c==="DataView"?f=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(a)),i([c,[...f]],a)}const d=[],p=i([l,d],a);for(const f of a)d.push(o(f));return p}case vo:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return o(a.toJSON());const d=[],p=i([l,d],a);for(const f of T2(a))(e||!Ss(si(a[f])))&&d.push([o(f),o(a[f])]);return p}case bu:return i([l,a.toISOString()],a);case ku:{const{source:d,flags:p}=a;return i([l,{source:d,flags:p}],a)}case ju:{const d=[],p=i([l,d],a);for(const[f,m]of a)(e||!(Ss(si(f))||Ss(si(m))))&&d.push([o(f),o(m)]);return p}case wu:{const d=[],p=i([l,d],a);for(const f of a)(e||!Ss(si(f)))&&d.push(o(f));return p}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return o},Rp=(e,{json:t,lossy:n}={})=>{const r=[];return P2(!(t||n),!!t,new Map,r)(e),r},bo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Ap(Rp(e,t)):structuredClone(e):(e,t)=>Ap(Rp(e,t));function L2(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function A2(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function R2(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||L2,r=e.options.footnoteBackLabel||A2,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),p=String(u.identifier).toUpperCase(),f=Qr(p.toLowerCase());let m=0;const v=[],w=e.footnoteCounts.get(p);for(;w!==void 0&&++m<=w;){v.length>0&&v.push({type:"text",value:" "});let h=typeof n=="string"?n:n(c,m);typeof h=="string"&&(h={type:"text",value:h}),v.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,m),className:["data-footnote-backref"]},children:Array.isArray(h)?h:[h]})}const N=d[d.length-1];if(N&&N.type==="element"&&N.tagName==="p"){const h=N.children[N.children.length-1];h&&h.type==="text"?h.value+=" ":N.children.push({type:"text",value:" "}),N.children.push(...v)}else d.push(...v);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(d,!0)};e.patch(u,x),l.push(x)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...bo(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Qg=function(e){if(e==null)return $2;if(typeof e=="function")return Jo(e);if(typeof e=="object")return Array.isArray(e)?I2(e):M2(e);if(typeof e=="string")return O2(e);throw new Error("Expected function, string, or object as test")};function I2(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Qg(e[n]);return Jo(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function M2(e){const t=e;return Jo(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function O2(e){return Jo(t);function t(n){return n&&n.type===e}}function Jo(e){return t;function t(n,r,i){return!!(D2(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function $2(){return!0}function D2(e){return e!==null&&typeof e=="object"&&"type"in e}const Gg=[],F2=!0,Ip=!1,B2="skip";function U2(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=Qg(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const p=c&&typeof c=="object"?c:{};if(typeof p.type=="string"){const m=typeof p.tagName=="string"?p.tagName:typeof p.name=="string"?p.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(m?"<"+m+">":""))+")"})}return f;function f(){let m=Gg,v,w,N;if((!t||o(c,u,d[d.length-1]||void 0))&&(m=V2(n(c,d)),m[0]===Ip))return m;if("children"in c&&c.children){const x=c;if(x.children&&m[0]!==B2)for(w=(r?x.children.length:-1)+a,N=d.concat(x);w>-1&&w<x.children.length;){const h=x.children[w];if(v=l(h,w,N)(),v[0]===Ip)return v;w=typeof v[1]=="number"?v[1]:w+a}}return m}}}function V2(e){return Array.isArray(e)?e:typeof e=="number"?[F2,e]:e==null?Gg:[e]}function Yg(e,t,n,r){let i,o,a;typeof t=="function"&&typeof n!="function"?(o=void 0,a=t,i=n):(o=t,a=n,i=r),U2(e,o,l,i);function l(c,u){const d=u[u.length-1],p=d?d.children.indexOf(c):void 0;return a(c,p,d)}}const Zl={}.hasOwnProperty,W2={};function H2(e,t){const n=t||W2,r=new Map,i=new Map,o=new Map,a={...N2,...n.handlers},l={all:u,applyData:J2,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:a,one:c,options:n,patch:q2,wrap:Q2};return Yg(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const p=d.type==="definition"?r:i,f=String(d.identifier).toUpperCase();p.has(f)||p.set(f,d)}}),l;function c(d,p){const f=d.type,m=l.handlers[f];if(Zl.call(l.handlers,f)&&m)return m(l,d,p);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in d){const{children:w,...N}=d,x=bo(N);return x.children=l.all(d),x}return bo(d)}return(l.options.unknownHandler||K2)(l,d,p)}function u(d){const p=[];if("children"in d){const f=d.children;let m=-1;for(;++m<f.length;){const v=l.one(f[m],d);if(v){if(m&&f[m-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=Mp(v.value)),!Array.isArray(v)&&v.type==="element")){const w=v.children[0];w&&w.type==="text"&&(w.value=Mp(w.value))}Array.isArray(v)?p.push(...v):p.push(v)}}}return p}}function q2(e,t){e.position&&(t.position=zk(e))}function J2(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&o&&Object.assign(n.properties,bo(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function K2(e,t){const n=t.data||{},r="value"in t&&!(Zl.call(n,"hProperties")||Zl.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Q2(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function Mp(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Op(e,t){const n=H2(e,t),r=n.one(e,void 0),i=R2(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function G2(e,t){return e&&"run"in e?async function(n,r){const i=Op(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Op(n,{file:r,...e||t})}}function $p(e){if(e)throw e}var Bs=Object.prototype.hasOwnProperty,Xg=Object.prototype.toString,Dp=Object.defineProperty,Fp=Object.getOwnPropertyDescriptor,Bp=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Xg.call(t)==="[object Array]"},Up=function(t){if(!t||Xg.call(t)!=="[object Object]")return!1;var n=Bs.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&Bs.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||Bs.call(t,i)},Vp=function(t,n){Dp&&n.name==="__proto__"?Dp(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Wp=function(t,n){if(n==="__proto__")if(Bs.call(t,n)){if(Fp)return Fp(t,n).value}else return;return t[n]},Y2=function e(){var t,n,r,i,o,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Wp(l,n),i=Wp(t,n),l!==i&&(d&&i&&(Up(i)||(o=Bp(i)))?(o?(o=!1,a=r&&Bp(r)?r:[]):a=r&&Up(r)?r:{},Vp(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&Vp(l,{name:n,newValue:i}));return l};const Ra=jo(Y2);function ec(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function X2(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++o];let p=-1;if(c){a(c);return}for(;++p<i.length;)(u[p]===null||u[p]===void 0)&&(u[p]=i[p]);i=u,d?Z2(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Z2(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(o,i):c instanceof Error?i(c):o(c))}function i(a,...l){n||(n=!0,t(a,...l))}function o(a){i(null,a)}}const Ht={basename:e_,dirname:t_,extname:n_,join:r_,sep:"/"};function e_(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');rs(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else a<0&&(o=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function t_(e){if(rs(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function n_(e){rs(e);let t=e.length,n=-1,r=0,i=-1,o=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function r_(...e){let t=-1,n;for(;++t<e.length;)rs(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":i_(n)}function i_(e){rs(e);const t=e.codePointAt(0)===47;let n=s_(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function s_(e,t){let n="",r=0,i=-1,o=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||o===1))if(i!==a-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,o=0;continue}}else if(n.length>0){n="",r=0,i=a,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,o=0}else l===46&&o>-1?o++:o=-1}return n}function rs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const o_={cwd:a_};function a_(){return"/"}function tc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function l_(e){if(typeof e=="string")e=new URL(e);else if(!tc(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return c_(e)}function c_(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Ia=["history","path","basename","stem","extname","dirname"];class Zg{constructor(t){let n;t?tc(t)?n={path:t}:typeof t=="string"||u_(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":o_.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ia.length;){const o=Ia[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)Ia.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?Ht.basename(this.path):void 0}set basename(t){Oa(t,"basename"),Ma(t,"basename"),this.path=Ht.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?Ht.dirname(this.path):void 0}set dirname(t){Hp(this.basename,"dirname"),this.path=Ht.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?Ht.extname(this.path):void 0}set extname(t){if(Ma(t,"extname"),Hp(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ht.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){tc(t)&&(t=l_(t)),Oa(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?Ht.basename(this.path,this.extname):void 0}set stem(t){Oa(t,"stem"),Ma(t,"stem"),this.path=Ht.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new et(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Ma(e,t){if(e&&e.includes(Ht.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+Ht.sep+"`")}function Oa(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Hp(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function u_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const d_=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},p_={}.hasOwnProperty;class _u extends d_{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=X2()}copy(){const t=new _u;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ra(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Fa("data",this.frozen),this.namespace[t]=n,this):p_.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Fa("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Cs(t),r=this.parser||this.Parser;return $a("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),$a("process",this.parser||this.Parser),Da("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,a){const l=Cs(t),c=r.parse(l);r.run(c,l,function(d,p,f){if(d||!p||!f)return u(d);const m=p,v=r.stringify(m,f);h_(v)?f.value=v:f.result=v,u(d,f)});function u(d,p){d||!p?a(d):o?o(p):n(void 0,p)}}}processSync(t){let n=!1,r;return this.freeze(),$a("processSync",this.parser||this.Parser),Da("processSync",this.compiler||this.Compiler),this.process(t,i),Jp("processSync","process",n),r;function i(o,a){n=!0,$p(o),r=a}}run(t,n,r){qp(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(a,l){const c=Cs(n);i.run(t,c,u);function u(d,p,f){const m=p||t;d?l(d):a?a(m):r(void 0,m,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Jp("runSync","run",r),i;function o(a,l){$p(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Cs(n),i=this.compiler||this.Compiler;return Da("stringify",i),qp(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Fa("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...p]=u;c(d,p)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Ra(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const p=u[d];o(p)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let p=-1,f=-1;for(;++p<r.length;)if(r[p][0]===u){f=p;break}if(f===-1)r.push([u,...d]);else if(d.length>0){let[m,...v]=d;const w=r[f][1];ec(w)&&ec(m)&&(m=Ra(!0,w,m)),r[f]=[u,m,...v]}}}}const f_=new _u().freeze();function $a(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Da(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Fa(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function qp(e){if(!ec(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Jp(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Cs(e){return m_(e)?e:new Zg(e)}function m_(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function h_(e){return typeof e=="string"||g_(e)}function g_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const x_="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Kp=[],Qp={allowDangerousHtml:!0},y_=/^(https?|ircs?|mailto|xmpp)$/i,v_=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function ex(e){const t=b_(e),n=k_(e);return j_(t.runSync(t.parse(n),n),e)}function b_(e){const t=e.rehypePlugins||Kp,n=e.remarkPlugins||Kp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Qp}:Qp;return f_().use(t2).use(n).use(G2,r).use(t)}function k_(e){const t=e.children||"",n=new Zg;return typeof t=="string"&&(n.value=t),n}function j_(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||w_;for(const d of v_)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+x_+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Yg(e,u),Rk(e,{Fragment:s.Fragment,components:i,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function u(d,p,f){if(d.type==="raw"&&f&&typeof p=="number")return a?f.children.splice(p,1):f.children[p]={type:"text",value:d.value},p;if(d.type==="element"){let m;for(m in Pa)if(Object.hasOwn(Pa,m)&&Object.hasOwn(d.properties,m)){const v=d.properties[m],w=Pa[m];(w===null||w.includes(d.tagName))&&(d.properties[m]=c(String(v||""),m,d))}}if(d.type==="element"){let m=n?!n.includes(d.tagName):o?o.includes(d.tagName):!1;if(!m&&r&&typeof p=="number"&&(m=!r(d,p,f)),m&&f&&typeof p=="number")return l&&d.children?f.children.splice(p,1,...d.children):f.children.splice(p,1),p}}}function w_(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||y_.test(e.slice(0,t))?e:""}function __({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,o]=_.useState(!1),[a,l]=_.useState(r),c=_.useRef(null),u=_.useRef(null);_.useEffect(()=>{if(e){const f=e.split(`
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
      `}),i?s.jsx("div",{className:"monaco-wrapper",children:s.jsx(an,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:f=>t(f||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):s.jsxs("div",{className:"markdown-preview",onClick:()=>o(!0),children:[s.jsxs("span",{className:"edit-hint",children:[s.jsx(x0,{size:12}),"Click to edit"]}),e?s.jsx("div",{className:"markdown-content",children:s.jsx(ex,{children:e})}):s.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function S_(e){return/^[a-zA-Z0-9_]+$/.test(e)}function C_({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:o,setRunAgentId:a}=Ze(),[l,c]=_.useState(new Set(["basic","model","tools","subagents"])),[u,d]=_.useState(!1),[p,f]=_.useState(!1),[m,v]=_.useState(!1),[w,N]=_.useState(""),[x,h]=_.useState(null);if(!t)return null;function y(P){n(e.id,P)}function L(P){if(P===""){h(null),y({name:P});return}S_(P)?h(null):h("Name can only contain letters, numbers, and underscores"),y({name:P})}function S(P){const $=new Set(l);$.has(P)?$.delete(P):$.add(P),c($)}const g=e.type==="LlmAgent",b=e;function T(P){g&&y({tools:[...b.tools,P]})}function R(P){g&&y({tools:b.tools.filter(($,I)=>I!==P)})}function E(P,$){if(!g)return;const I=[...b.tools];I[P]=$,y({tools:I})}function j(P){"sub_agents"in e&&y({sub_agents:[...e.sub_agents,P]})}function z(P){"sub_agents"in e&&y({sub_agents:e.sub_agents.filter($=>$!==P)})}const O=t.agents.filter(P=>P.id!==e.id);async function U(){if(!(!t||!g)){d(!0);try{const P=b.instruction||"",$=P?`Current instruction to improve:

${P}

Please improve and expand this instruction while preserving its core intent.`:void 0,k=t.agents.some(J=>J.id===e.id)?void 0:e,V=await Ds(t.id,e.id,$,k);V.success&&V.prompt?y({instruction:V.prompt}):alert("Failed to generate prompt: "+(V.error||"Unknown error"))}catch(P){alert("Error generating prompt: "+P.message)}finally{d(!1)}}}async function B(){if(!(!t||!g||!w.trim())){d(!0);try{const $=`Current instruction:

${b.instruction||""}

---

Requested changes:
${w}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,k=t.agents.some(J=>J.id===e.id)?void 0:e,V=await Ds(t.id,e.id,$,k);V.success&&V.prompt?(y({instruction:V.prompt}),v(!1),N("")):alert("Failed to apply changes: "+(V.error||"Unknown error"))}catch(P){alert("Error applying changes: "+P.message)}finally{d(!1)}}}async function Y(){if(!t||!g)return;const P=b.instruction;if(!P){alert("Please write an instruction first");return}f(!0);try{const $=`Write a 5-10 word description of what this agent does.

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

Your response (5-10 words only):`,I=await Ds(t.id,e.id,$);if(I.success&&I.prompt){let k=I.prompt.trim();k=k.replace(/^["']|["']$/g,"").trim();const V=k.split(/[.!?\n]/)[0].trim(),J=V.length>80?V.slice(0,77)+"...":V;y({description:J})}else alert("Failed to generate description: "+(I.error||"Unknown error"))}catch($){alert("Error generating description: "+$.message)}finally{f(!1)}}return s.jsxs("div",{className:"agent-editor",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"editor-header",children:[s.jsx(Zn,{size:24,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:e.name,onChange:P=>L(P.target.value),placeholder:"Agent name",style:{borderColor:x?"var(--error)":void 0}}),x&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:x})]}),s.jsx("span",{className:"badge badge-info",children:e.type}),s.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),o("run")},title:"Test this agent",children:[s.jsx(Mn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"editor-content",children:[s.jsxs(oi,{id:"basic",title:"Basic Info",icon:s.jsx(Zn,{size:16}),expanded:l.has("basic"),onToggle:()=>S("basic"),children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Description"}),g&&b.instruction&&s.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:Y,disabled:p,title:"Generate description from instruction",children:p?s.jsxs(s.Fragment,{children:[s.jsx(Ur,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),s.jsx("input",{type:"text",value:e.description,onChange:P=>y({description:P.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),g&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group full-width",children:[s.jsxs("div",{className:"label-with-action",children:[s.jsx("label",{children:"Instruction"}),s.jsxs("div",{className:"action-buttons",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>v(!m),disabled:u||!b.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:U,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?s.jsxs(s.Fragment,{children:[s.jsx(Ur,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})]}),m&&s.jsxs("div",{className:"request-changes-box",children:[s.jsx("input",{type:"text",value:w,onChange:P=>N(P.target.value),placeholder:"Describe what changes you want...",onKeyDown:P=>{P.key==="Enter"&&w.trim()?B():P.key==="Escape"&&(v(!1),N(""))},autoFocus:!0}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:B,disabled:u||!w.trim(),children:"Apply"})]}),s.jsx(__,{value:b.instruction,onChange:P=>y({instruction:P}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Output Key"}),s.jsxs("select",{value:b.output_key||"",onChange:P=>y({output_key:P.target.value||void 0}),children:[s.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(P=>s.jsx("option",{value:P.name,children:P.name},P.name))]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Include Contents"}),s.jsxs("select",{value:b.include_contents,onChange:P=>y({include_contents:P.target.value}),children:[s.jsx("option",{value:"default",children:"Default"}),s.jsx("option",{value:"none",children:"None"})]})]})]}),s.jsxs("div",{className:"form-row",style:{gap:24},children:[s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:b.disallow_transfer_to_parent,onChange:P=>y({disallow_transfer_to_parent:P.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),s.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[s.jsxs("span",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:b.disallow_transfer_to_peers,onChange:P=>y({disallow_transfer_to_peers:P.target.checked})}),s.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&s.jsx("div",{className:"form-row",children:s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Iterations"}),s.jsx("input",{type:"number",value:e.max_iterations||"",onChange:P=>y({max_iterations:parseInt(P.target.value)||void 0}),placeholder:"No limit"})]})})]}),g&&s.jsx(oi,{id:"model",title:"Model",icon:s.jsx(iu,{size:16}),expanded:l.has("model"),onToggle:()=>S("model"),children:s.jsx(E_,{agent:b,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,onUpdate:P=>y({model:P})})}),g&&s.jsx(oi,{id:"tools",title:`Tools (${b.tools.length})`,icon:s.jsx(Gt,{size:16}),expanded:l.has("tools"),onToggle:()=>S("tools"),children:s.jsx(N_,{tools:b.tools,onAdd:T,onRemove:R,onUpdate:E,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:O,skillsets:t.skillsets||[]})}),"sub_agents"in e&&s.jsx(oi,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:s.jsx(j0,{size:16}),expanded:l.has("subagents"),onToggle:()=>S("subagents"),children:s.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(P=>{const $=t.agents.find(I=>I.id===P);return $?s.jsxs("div",{className:"sub-agent-chip",children:[$.name,s.jsx("button",{onClick:()=>z(P),children:s.jsx(Pe,{size:12})})]},P):null}),s.jsxs("select",{value:"",onChange:P=>{P.target.value&&j(P.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[s.jsx("option",{value:"",children:"Add agent..."}),O.filter(P=>!e.sub_agents.includes(P.id)).map(P=>s.jsx("option",{value:P.id,children:P.name},P.id))]})]})}),g&&s.jsx(oi,{id:"callbacks",title:"Callbacks",icon:s.jsx(In,{size:16}),expanded:l.has("callbacks"),onToggle:()=>S("callbacks"),children:s.jsx(z_,{agent:b,onUpdate:y,customCallbacks:t.custom_callbacks||[]})})]})]})}function oi({id:e,title:t,icon:n,expanded:r,onToggle:i,children:o}){return s.jsxs("div",{className:"section",children:[s.jsxs("div",{className:"section-header",onClick:i,children:[r?s.jsx(Ct,{size:16}):s.jsx(Nt,{size:16}),s.jsxs("h4",{children:[n," ",t]})]}),r&&s.jsx("div",{className:"section-content",children:o})]})}function N_({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:o,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,p]=_.useState(!1),[f,m]=_.useState({}),[v,w]=_.useState(""),N=Lt.useRef(null),x=Lt.useRef(null),[h,y]=_.useState(null),[L,S]=_.useState(new Set),g=(A,Z)=>{if(!v.trim())return!0;const F=v.toLowerCase();return A.toLowerCase().includes(F)||((Z==null?void 0:Z.toLowerCase().includes(F))??!1)},b=i.filter(A=>g(A.name,A.description)),T=o.filter(A=>g(A.name,A.description)),R=a.filter(A=>g(A.name,A.description)),E=l.filter(A=>g(A.name,A.description)),j=c.filter(A=>g(A.name,A.description)),z=u.filter(A=>g(A.name,A.description));function O(){if(N.current){const A=N.current.getBoundingClientRect(),Z=window.innerHeight,F=350,te=Z-A.bottom-16,M=A.top-16;if(te>=200||te>=M){const q=Math.min(F,te);m({top:A.bottom+4,left:A.left,maxHeight:q})}else{const q=Math.min(F,M);m({top:A.top-q-4,left:A.left,maxHeight:q})}}p(!0),w(""),setTimeout(()=>{var A;return(A=x.current)==null?void 0:A.focus()},50)}function U(){p(!1),w("")}function B(A){t({type:"builtin",name:A}),U()}async function Y(A){U();const Z=A.tool_filter||[];if(y({server:A,enabledTools:new Set(Z),availableTools:Z.map(F=>({name:F,description:""})),isLoading:Z.length===0,error:void 0}),Z.length===0)try{const{testMcpServer:F}=await cg(async()=>{const{testMcpServer:M}=await Promise.resolve().then(()=>o0);return{testMcpServer:M}},void 0),te=await F({connection_type:A.connection_type,command:A.command,args:A.args,env:A.env,url:A.url,headers:A.headers,timeout:A.timeout||30});te.success?y(M=>M?{...M,availableTools:te.tools,enabledTools:new Set(te.tools.map(q=>q.name)),isLoading:!1}:null):y(M=>M?{...M,isLoading:!1,error:te.error||"Failed to connect to MCP server"}:null)}catch(F){y(te=>te?{...te,isLoading:!1,error:F.message}:null)}}function P(A){if(!h)return;const Z=new Set(h.enabledTools);Z.has(A)?Z.delete(A):Z.add(A),y({...h,enabledTools:Z})}function $(){if(!h)return;const A=Array.from(h.enabledTools);t({type:"mcp",server:{...h.server,tool_filter:A}}),y(null)}function I(A){const Z=new Set(L);Z.has(A)?Z.delete(A):Z.add(A),S(Z)}function k(A,Z){const F=e[A];if(F.type!=="mcp"||!F.server)return;const te=F.server.tool_filter||[];let M;te.includes(Z)?M=te.filter(q=>q!==Z):M=[...te,Z],r(A,{...F,server:{...F.server,tool_filter:M}})}function V(A){t({type:"function",name:A.name,module_path:A.module_path}),U()}function J(A){const Z=c.find(F=>F.id===A);t({type:"agent",agent_id:A,name:Z==null?void 0:Z.name}),U()}function C(A){const Z=u.find(F=>F.id===A);t({type:"skillset",skillset_id:A,name:Z==null?void 0:Z.name}),U()}function oe(A){return o.find(Z=>Z.name===A)}return s.jsxs("div",{children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"tool-list",children:e.map((A,Z)=>{var F;return A.type==="mcp"&&A.server?s.jsxs("div",{className:"mcp-tool-item",children:[s.jsxs("div",{className:"mcp-tool-header",onClick:()=>I(Z),children:[L.has(Z)?s.jsx(Ct,{size:14}):s.jsx(Nt,{size:14}),s.jsx(Gt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"mcp-tool-info",children:[s.jsx("div",{className:"mcp-tool-name",children:A.server.name}),s.jsx("div",{className:"mcp-tool-count",children:A.server.tool_filter===null||A.server.tool_filter===void 0?"all tools":`${A.server.tool_filter.length} tools enabled`})]}),s.jsx("button",{className:"delete-btn",onClick:te=>{te.stopPropagation(),n(Z)},children:s.jsx(Pe,{size:14})})]}),L.has(Z)&&s.jsx("div",{className:"mcp-tool-body",children:s.jsx("div",{className:"mcp-tool-list",children:(()=>{const te=oe(A.server.name),M=(te==null?void 0:te.tool_filter)||A.server.tool_filter||[],q=new Set(A.server.tool_filter||[]);return M.map(K=>s.jsxs("label",{className:`mcp-tool-chip ${q.has(K)?"enabled":"disabled"}`,onClick:()=>k(Z,K),children:[s.jsx("input",{type:"checkbox",checked:q.has(K),onChange:()=>{},style:{display:"none"}}),K]},K))})()})})]},Z):A.type==="skillset"?s.jsxs("div",{className:"tool-item",children:[s.jsx(on,{size:14,style:{color:"var(--accent)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:A.name||((F=u.find(te=>te.id===A.skillset_id))==null?void 0:F.name)||"SkillSet"}),s.jsx("div",{className:"tool-item-type",children:"skillset"})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(Z),children:s.jsx(Pe,{size:14})})]},Z):s.jsxs("div",{className:"tool-item",children:[s.jsx(Gt,{size:14,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{className:"tool-item-info",children:[s.jsx("div",{className:"tool-item-name",children:A.name||A.agent_id}),s.jsx("div",{className:"tool-item-type",children:A.type})]}),s.jsx("button",{className:"delete-btn",onClick:()=>n(Z),children:s.jsx(Pe,{size:14})})]},Z)})}),s.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[s.jsxs("button",{ref:N,className:"btn btn-secondary btn-sm",onClick:()=>d?U():O(),children:[s.jsx(Me,{size:14}),"Add Tool"]}),d&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"dropdown-backdrop",onClick:U}),s.jsxs("div",{className:"dropdown-content dropdown-fixed",style:f,children:[s.jsx("div",{className:"dropdown-search",children:s.jsx("input",{ref:x,type:"text",placeholder:"Search tools...",value:v,onChange:A=>w(A.target.value),onKeyDown:A=>A.key==="Escape"&&U()})}),b.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Built-in Tools"}),b.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>B(A.name),children:[s.jsx("div",{className:"dropdown-item-name",children:A.name}),s.jsx("div",{className:"dropdown-item-desc",children:A.description})]},A.name))]}),T.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Known MCP Servers (",T.length,")"]}),T.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>Y(A),children:[s.jsxs("div",{className:"dropdown-item-name",children:[A.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:A.tool_filter===null||A.tool_filter===void 0?"all tools":`${A.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:A.description})]},`known-${A.name}`))]}),R.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["Project MCP Servers (",R.length,")"]}),R.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>Y(A),children:[s.jsxs("div",{className:"dropdown-item-name",children:[A.name,s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:A.tool_filter===null||A.tool_filter===void 0?"all tools":`${A.tool_filter.length} tools`})]}),s.jsx("div",{className:"dropdown-item-desc",children:A.description||"Custom MCP server"})]},`project-${A.id||A.name}`))]}),E.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Custom Tools"}),E.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>V(A),children:[s.jsx("div",{className:"dropdown-item-name",children:A.name}),s.jsx("div",{className:"dropdown-item-desc",children:A.description})]},A.id))]}),j.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsx("h5",{children:"Agents as Tools"}),j.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>J(A.id),children:[s.jsx("div",{className:"dropdown-item-name",children:A.name}),s.jsx("div",{className:"dropdown-item-desc",children:A.type})]},A.id))]}),z.length>0&&s.jsxs("div",{className:"dropdown-section",children:[s.jsxs("h5",{children:["SkillSets (",z.length,")"]}),z.map(A=>s.jsxs("button",{className:"dropdown-item",onClick:()=>C(A.id),children:[s.jsxs("div",{className:"dropdown-item-name",children:[A.name,s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[A.entry_count||0," entries"]})]}),s.jsx("div",{className:"dropdown-item-desc",children:A.description||"Vector knowledge base"})]},A.id))]}),v.trim()&&b.length===0&&T.length===0&&R.length===0&&E.length===0&&j.length===0&&z.length===0&&s.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',v,'"']})]})]})]}),h&&s.jsx("div",{className:"mcp-config-dialog",children:s.jsxs("div",{className:"mcp-config-content",children:[s.jsxs("h3",{children:["Configure ",h.server.name]}),s.jsx("p",{children:h.server.description}),h.isLoading?s.jsxs("div",{className:"mcp-loading",children:[s.jsx("div",{className:"spinner"}),s.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):h.error?s.jsxs("div",{className:"mcp-error",children:[s.jsxs("p",{children:["⚠️ Failed to discover tools: ",h.error]}),s.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mcp-select-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...h,enabledTools:new Set(h.availableTools.map(A=>A.name))}),children:["Select All (",h.availableTools.length,")"]}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>y({...h,enabledTools:new Set}),children:"Select None"})]}),s.jsx("div",{className:"mcp-tools-grid",children:h.availableTools.map(A=>s.jsxs("div",{className:"mcp-tool-row",title:A.description||A.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:h.enabledTools.has(A.name),onChange:()=>P(A.name)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:13,opacity:h.enabledTools.has(A.name)?1:.5,cursor:"pointer"},onClick:()=>P(A.name),children:A.name})]},A.name))})]}),s.jsxs("div",{className:"dialog-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>y(null),children:"Cancel"}),s.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:h.enabledTools.size===0,children:["Add ",h.enabledTools.size," Tools"]})]})]})})]})}function E_({agent:e,appModels:t,defaultModelId:n,onUpdate:r}){var p,f,m,v,w,N,x,h,y,L;const i=(p=e.model)==null?void 0:p._appModelId,o=e.model!==null&&e.model!==void 0&&!i,l=i||(()=>{if(!e.model)return n;const S=t.find(g=>{var b,T,R;return g.provider===((b=e.model)==null?void 0:b.provider)&&g.model_name===((T=e.model)==null?void 0:T.model_name)&&g.api_base===((R=e.model)==null?void 0:R.api_base)});return S==null?void 0:S.id})()||n||((f=t[0])==null?void 0:f.id);Lt.useEffect(()=>{var S,g,b,T,R;if(i){const E=t.find(j=>j.id===i);E&&(((S=e.model)==null?void 0:S.provider)!==E.provider||((g=e.model)==null?void 0:g.model_name)!==E.model_name||((b=e.model)==null?void 0:b.api_base)!==E.api_base||((T=e.model)==null?void 0:T.temperature)!==E.temperature||((R=e.model)==null?void 0:R.max_output_tokens)!==E.max_output_tokens)&&r({provider:E.provider,model_name:E.model_name,api_base:E.api_base,temperature:E.temperature,max_output_tokens:E.max_output_tokens,top_p:E.top_p,top_k:E.top_k,fallbacks:[],_appModelId:i})}},[i,t,e.model,r]);function c(S){const g=t.find(b=>b.id===S);g&&r({provider:g.provider,model_name:g.model_name,api_base:g.api_base,temperature:g.temperature,max_output_tokens:g.max_output_tokens,top_p:g.top_p,top_k:g.top_k,fallbacks:[],_appModelId:S})}function u(){var S;if(o){const g=n||((S=t[0])==null?void 0:S.id);g&&c(g)}else{const g=e.model;if(g){const{_appModelId:b,...T}=g;r(T)}else r({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function d(S){const{_appModelId:g,...b}=e.model||{};r({...b,...S})}return t.find(S=>S.id===l),t.find(S=>S.id===n),s.jsxs("div",{className:"model-selector",children:[s.jsx("style",{children:`
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
      `}),t.length>0&&s.jsxs("div",{className:"model-choice",children:[s.jsxs("div",{className:`model-option ${o?"":"selected"}`,onClick:()=>!o||u(),children:[s.jsx("div",{className:"model-option-label",children:"Use App Model"}),s.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),s.jsxs("div",{className:`model-option ${o?"selected":""}`,onClick:()=>o||u(),children:[s.jsx("div",{className:"model-option-label",children:"Custom"}),s.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!o&&t.length>0?s.jsx("div",{className:"app-model-select",children:t.map(S=>s.jsx("div",{className:`app-model-item ${l===S.id?"selected":""}`,onClick:()=>c(S.id),children:s.jsxs("div",{className:"app-model-item-info",children:[s.jsxs("div",{className:"app-model-item-name",children:[S.name,S.id===n&&s.jsxs("span",{className:"default-badge",children:[s.jsx(og,{size:10,fill:"currentColor"}),"Default"]})]}),s.jsxs("div",{className:"app-model-item-details",children:[S.provider," / ",S.model_name,S.api_base&&` • ${S.api_base}`]})]})},S.id))}):t.length===0?s.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(o||t.length===0)&&s.jsxs("div",{className:"custom-model-form",children:[s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Provider"}),s.jsxs("select",{value:((m=e.model)==null?void 0:m.provider)||"gemini",onChange:S=>d({provider:S.target.value}),children:[s.jsx("option",{value:"gemini",children:"Gemini"}),s.jsx("option",{value:"litellm",children:"LiteLLM"}),s.jsx("option",{value:"anthropic",children:"Anthropic"})]})]}),s.jsxs("div",{className:"form-group",style:{flex:2},children:[s.jsx("label",{children:"Model Name"}),s.jsx("input",{type:"text",value:((v=e.model)==null?void 0:v.model_name)||"",onChange:S=>d({model_name:S.target.value}),placeholder:"e.g., gemini-2.0-flash"})]}),((w=e.model)==null?void 0:w.provider)==="litellm"&&s.jsxs("div",{className:"form-group",style:{flex:2},children:[s.jsx("label",{children:"API Base"}),s.jsx("input",{type:"text",value:((N=e.model)==null?void 0:N.api_base)||"",onChange:S=>d({api_base:S.target.value||void 0}),placeholder:"http://localhost:11434"})]})]}),s.jsxs("div",{className:"form-row",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Temperature"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:((x=e.model)==null?void 0:x.temperature)??"",onChange:S=>d({temperature:S.target.value?parseFloat(S.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Max Tokens"}),s.jsx("input",{type:"number",value:((h=e.model)==null?void 0:h.max_output_tokens)??"",onChange:S=>d({max_output_tokens:S.target.value?parseInt(S.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Top P"}),s.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:((y=e.model)==null?void 0:y.top_p)??"",onChange:S=>d({top_p:S.target.value?parseFloat(S.target.value):void 0}),placeholder:"Default"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Top K"}),s.jsx("input",{type:"number",min:"1",value:((L=e.model)==null?void 0:L.top_k)??"",onChange:S=>d({top_k:S.target.value?parseInt(S.target.value):void 0}),placeholder:"Default"})]})]})]})]})}function z_({agent:e,onUpdate:t,customCallbacks:n}){const r=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"},{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}];function i(a,l){const c=e[a]||[],u=n.find(d=>d.id===l);u&&t({[a]:[...c,{module_path:u.module_path}]})}function o(a,l){const c=e[a]||[];t({[a]:c.filter((u,d)=>d!==l)})}return s.jsx("div",{className:"callbacks-editor",children:r.map(({key:a,label:l})=>{const c=e[a]||[],u=n;return s.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:l}),u.length>0&&s.jsxs("select",{value:"",onChange:d=>{d.target.value&&(i(a,d.target.value),d.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[s.jsx("option",{value:"",children:"Add callback..."}),u.filter(d=>{const p=d.module_path;return!c.some(f=>f.module_path===p)}).map(d=>s.jsx("option",{value:d.id,children:d.name},d.id))]})]}),c.length===0?s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):s.jsx("div",{className:"callback-list",children:c.map((d,p)=>{const f=n.find(m=>m.module_path===d.module_path);return s.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},children:[s.jsx("span",{style:{fontSize:"12px"},children:(f==null?void 0:f.name)||d.module_path}),s.jsx("button",{onClick:()=>o(a,p),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:s.jsx(Pe,{size:12})})]},p)})})]},a)})})}const Ba=[{type:"LlmAgent",label:"LLM Agent",icon:Zn,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:w0,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:v0,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Bl,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function T_(){return`agent_${Date.now().toString(36)}`}function P_(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function L_(e,t){const r={id:T_(),name:`New ${e}`,description:""},i=t?P_(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...r,type:"LlmAgent",model:i,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...r,type:"SequentialAgent",sub_agents:[]};case"LoopAgent":return{...r,type:"LoopAgent",sub_agents:[],max_iterations:10};case"ParallelAgent":return{...r,type:"ParallelAgent",sub_agents:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function A_({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:o,setSelectedAgentId:a,mcpServers:l}=Ze(),[c,u]=_.useState(!1),[d,p]=_.useState(new Set),[f,m]=_.useState(!1),[v,w]=_.useState(""),[N,x]=_.useState(!1);if(_.useEffect(()=>{if(t){const O=t.agents.filter(U=>"sub_agents"in U&&U.sub_agents.length>0).map(U=>U.id);p(new Set(O))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;async function h(){var O,U,B,Y;if(!(!v.trim()||!t)){x(!0);try{const P=await Vh(t.id,v);if(P.success&&P.config){const $=P.config,I=[];if((O=$.tools)!=null&&O.builtin)for(const C of $.tools.builtin)I.push({type:"builtin",name:C});if((U=$.tools)!=null&&U.mcp)for(const C of $.tools.mcp){const oe=l.find(A=>A.name===C.server);oe&&I.push({type:"mcp",server:{...oe,tool_filter:C.tools}})}if((B=$.tools)!=null&&B.custom)for(const C of $.tools.custom){const oe=t.custom_tools.find(A=>A.name===C);oe&&I.push({type:"function",name:C,module_path:oe.module_path})}if((Y=$.tools)!=null&&Y.agents)for(const C of $.tools.agents){const oe=t.agents.find(A=>A.id===C);oe&&I.push({type:"agent",agent_id:C,name:oe.name})}const k=t.app.models||[],V=k.find(C=>C.id===t.app.default_model_id)||k[0],J={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:$.name||"new_agent",description:$.description||"",instruction:$.instruction||"",model:V?{provider:V.provider,model_name:V.model_name,api_base:V.api_base,temperature:V.temperature,max_output_tokens:V.max_output_tokens,top_p:V.top_p,top_k:V.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:I,sub_agents:$.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(J),a(J.id),e==null||e(J.id),m(!1),w("")}else alert("Failed to generate agent: "+(P.error||"Unknown error"))}catch(P){alert("Error generating agent: "+P.message)}finally{x(!1)}}}const y=t.agents.find(O=>O.id===o);function L(O){a(O),e==null||e(O)}function S(O){const U=t.app.models||[],B=U.find(P=>P.id===t.app.default_model_id)||U[0],Y=L_(O,B);n(Y),L(Y.id),u(!1)}function g(O,U){U.stopPropagation(),confirm("Delete this agent?")&&(r(O),o===O&&(e==null||e(null)))}function b(O){const U=new Set(d);U.has(O)?U.delete(O):U.add(O),p(U)}function T(O){const U=Ba.find(B=>B.type===O);return U?U.icon:Zn}function R(O){const U=Ba.find(B=>B.type===O);return U?U.color:"#888"}function E(O,U=0){return O.map(B=>{const Y=T(B.type),P=R(B.type),$="sub_agents"in B&&B.sub_agents.length>0,I=d.has(B.id),k=$?B.sub_agents.map(V=>t.agents.find(J=>J.id===V)).filter(V=>V!==void 0):[];return s.jsxs("div",{className:"agent-tree-item",children:[s.jsxs("div",{className:`agent-item ${o===B.id?"selected":""}`,onClick:()=>L(B.id),style:{paddingLeft:12+U*20},children:[$?s.jsx("button",{className:"expand-btn",onClick:V=>{V.stopPropagation(),b(B.id)},children:I?s.jsx(Ct,{size:16}):s.jsx(Nt,{size:16})}):s.jsx("span",{style:{width:20}}),s.jsx("div",{className:"agent-icon",style:{background:P},children:s.jsx(Y,{size:14})}),s.jsx("span",{className:"agent-name",children:B.name}),s.jsx("span",{className:"agent-type",children:B.type}),s.jsx("button",{className:"delete-btn",onClick:V=>g(B.id,V),children:s.jsx(Pe,{size:14})})]}),$&&I&&s.jsx("div",{className:"sub-agents",children:E(k,U+1)})]},B.id)})}const j=new Set(t.agents.flatMap(O=>"sub_agents"in O?O.sub_agents:[])),z=t.agents.filter(O=>!j.has(O.id));return s.jsxs("div",{className:"agents-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"agents-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Agents (",t.agents.length,")"]}),s.jsxs("div",{className:"header-buttons",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!0),title:"AI-powered agent setup",children:[s.jsx(Ca,{size:14}),"Quick"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>u(!0),children:[s.jsx(Me,{size:14}),"Add"]})]})]}),s.jsx("div",{className:"agents-list",children:t.agents.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(Zn,{size:32}),s.jsx("p",{children:"No agents yet"})]}):E(z)})]}),s.jsx("div",{className:"agent-editor-area",children:y?s.jsx(C_,{agent:y}):s.jsxs("div",{className:"empty-state card",children:[s.jsx(Zn,{size:48}),s.jsxs("p",{children:["Select an agent to edit",s.jsx("br",{}),"or create a new one"]})]})}),c&&s.jsx("div",{className:"type-selector",onClick:()=>u(!1),children:s.jsxs("div",{className:"type-selector-content",onClick:O=>O.stopPropagation(),children:[s.jsx("h2",{children:"Add Agent"}),s.jsx("div",{className:"type-options",children:Ba.map(({type:O,label:U,icon:B,color:Y,description:P})=>s.jsxs("button",{className:"type-option",onClick:()=>S(O),children:[s.jsx("div",{className:"type-option-icon",style:{background:Y},children:s.jsx(B,{size:20})}),s.jsxs("div",{className:"type-option-info",children:[s.jsx("h4",{children:U}),s.jsx("p",{children:P})]})]},O))})]})}),f&&s.jsx("div",{className:"type-selector",onClick:()=>!N&&m(!1),children:s.jsxs("div",{className:"quick-setup-content",onClick:O=>O.stopPropagation(),children:[s.jsxs("h2",{children:[s.jsx(Ca,{size:20})," Quick Agent Setup"]}),s.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do, and AI will configure everything: name, description, instruction, tools, and sub-agents."}),s.jsxs("div",{className:"quick-setup-form",children:[s.jsx("textarea",{value:v,onChange:O=>w(O.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,disabled:N,autoFocus:!0}),s.jsxs("div",{className:"quick-setup-info",children:[s.jsx("strong",{children:"Available resources:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),s.jsxs("li",{children:[l.length," MCP servers"]}),s.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),s.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),s.jsxs("div",{className:"quick-setup-actions",children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>m(!1),disabled:N,children:"Cancel"}),s.jsx("button",{className:"btn btn-primary",onClick:h,disabled:N||!v.trim(),children:N?s.jsxs(s.Fragment,{children:[s.jsx(Ur,{size:14,className:"spin"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(Ca,{size:14}),"Create Agent"]})})]})]})]})})]})}var Su="\x1B[0m",Cu="\x1B[1m",tx=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",R_=e=>{let t=tx(e),n=`${Cu}[MONACOPILOT ERROR] ${t}${Su}`;return console.error(n),{message:t}},I_=(e,t)=>{console.warn(`${Cu}[MONACOPILOT WARN] ${e}${t?`
${tx(t)}`:""}${Su}`)},M_=(e,t,n)=>console.warn(`${Cu}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${Su}`),ko={report:R_,warn:I_,warnDeprecated:M_},Gp=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let o=r.slice(0,t);return o.every(a=>a==="")?`
`.repeat(t):o.join(`
`)},O_=100,$_=!0,nx="onIdle",D_=!0,F_=120,B_=400,U_=0,Nu=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),V_=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),W_=e=>e.getValue(),H_=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},rx=class ix{constructor(){this.cache=new H_(ix.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),o=Nu(n,r),a=o,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${o}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:o,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=o-1&&u<=l+1:c===i?u>=o-1:c===a?u<=l+1:!0}};rx.MAX_CACHE_SIZE=20;var q_=rx,J_=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let o=t[i],a=o.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(o)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},K_=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,o=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let f=1;f<=u;f++){let m=e.substring(0,f),v=t.slice(-f);m===v&&(c=f)}let d=Math.min(r,o);for(let f=0;f<d&&e[f]===n[f];f++)a++;for(let f=1;f<=d;f++)e.slice(-f)===n.slice(0,f)&&(l=f);let p=Math.max(a,l);if(p===0){for(let f=1;f<r;f++)if(n.startsWith(e.substring(f))){p=r-f;break}}return{startOverlapLength:c,maxOverlapLength:p}}},Q_=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new K_}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),o=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(o.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,o),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),o=i.length-1,a=n+o,l=o===0?r+i[0].length:i[o].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},G_=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:o}=await r.json();return{completion:i,error:o}},Y_=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:o,relatedFiles:a,maxContextLines:l=O_}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(w,N,x)=>{let h=w(e,t);return N?Gp(h,N,x):h},p=(w,N)=>!w||!N?w:w.map(({content:x,...h})=>({...h,content:Gp(x,N)})),f=d(Nu,u,{truncateDirection:"keepEnd"}),m=d(V_,u,{truncateDirection:"keepStart"}),v=p(a,u);return{filename:r,language:i,technologies:o,relatedFiles:v,textBeforeCursor:f,textAfterCursor:m,cursorPosition:e}},X_=(e,t=300)=>{let n=null,r=null,i=(...o)=>{if(r)return r.args=o,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:o,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},Z_=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,ai=e=>({items:e,enableForwardStability:!0}),nc=new q_,eS=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:o})=>{let{trigger:a=nx,enableCaching:l=$_,allowFollowUpCompletions:c=D_,onError:u,requestHandler:d}=o;if(l&&!i){let p=nc.get(n,t).map(f=>({insertText:f.completion,range:f.range}));if(p.length>0)return ai(p)}if(r.isCancellationRequested||!c&&i)return ai([]);try{let p=X_(async v=>{var N,x;(N=o.onCompletionRequested)==null||N.call(o,v);let w;if(d)w=await d(v);else if(o.endpoint)w=await G_({endpoint:o.endpoint,...v});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(w.error)throw new Error(w.error);return(x=o.onCompletionRequestFinished)==null||x.call(o,v,w),w},{onTyping:F_,onIdle:B_,onDemand:U_}[a]);r.onCancellationRequested(()=>{p.cancel()});let f=Y_({pos:n,mdl:t,options:o}),{completion:m}=await p({body:{completionMetadata:f}});if(m){let v=new J_(m).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),w=new Q_(e);return l&&nc.add({completion:v,range:w.computeCacheRange(n,v),textBeforeCursor:Nu(n,t)}),ai([{insertText:v,range:w.computeInsertionRange(n,v,t)}])}}catch(p){if(Z_(p))return ai([]);u?u(p):ko.warn("Cannot provide completion",p)}return ai([])},Eu=new WeakMap,Ko=e=>Eu.get(e),tS=(e,t)=>{Eu.set(e,t)},Yp=e=>{Eu.delete(e)},nS=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),rS=(e,t)=>{let n=Ko(e);!n||!n.options||(n.options={...n.options,...t})},iS=(e,t,n)=>{let r=Ko(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,o,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:W_(t),position:o,triggerType:c.trigger??nx})))return eS({monaco:e,mdl:i,pos:o,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,o,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,o.range))},freeInlineCompletions:()=>{}}):null},sS={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},oS=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(sS).some(t=>t(this.monaco,e))}},aS=(e,t,n,r)=>{let i=new oS(e,n,r);return t.onKeyDown(o=>i.handleKeyEvent(o))},sx=(e,t,n)=>{let r=[];tS(t,nS(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=Ko(t);if(!i)return ko.warn("Completion is not registered properly. State not found."),cS();let o=iS(e,t,n);o&&r.push(o);let a=aS(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();nc.clear(),Yp(t)},trigger:()=>lS(t),updateOptions:l=>{rS(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):ko.report(i),{deregister:()=>{for(let o of r)o.dispose();Yp(t)},trigger:()=>{},updateOptions:()=>{}}}},lS=e=>{let t=Ko(e);if(!t){ko.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},cS=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function uS(){return`tool_${Date.now().toString(36)}`}function dS(e){return/^[a-zA-Z0-9_]+$/.test(e)}const pS=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function fS({onSelectTool:e}){var ft;const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:o,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=Ze(),[d,p]=_.useState(""),[f,m]=_.useState(null),[v,w]=_.useState("tools"),[N,x]=_.useState(null),[h,y]=_.useState(""),[L,S]=_.useState(!1),[g,b]=_.useState(null),[T,R]=_.useState(!1),[E,j]=_.useState(!1),[z,O]=_.useState(null),[U,B]=_.useState(null);if(!t)return null;const Y=t.mcp_servers||[],P=t.custom_tools.find(W=>W.id===a),$=Y.find(W=>W.name===N),I=new Set(Y.map(W=>W.name)),k=u.filter(W=>!I.has(W.name));function V(W){l(W),e==null||e(W)}_.useEffect(()=>{P&&(p(P.code),B(null))},[a]),_.useEffect(()=>{$&&(y(JSON.stringify($,null,2)),S(!1))},[N]);function J(){const W=uS();r({id:W,name:"new_tool",description:"",module_path:"tools.custom",code:pS,state_keys_used:[]}),V(W)}function C(W,ge){ge.stopPropagation(),confirm("Delete this tool?")&&(o(W),a===W&&(e==null||e(null)))}function oe(W){P&&(W.name!==void 0&&(W.name===""||dS(W.name)?B(null):B("Name can only contain letters, numbers, and underscores")),i(P.id,W))}function A(W){W!==void 0&&P&&(p(W),oe({code:W}))}async function Z(){if(P){R(!0);try{const W=await Wh(t.id,P.name,P.description,P.state_keys_used);W.success&&W.code?(p(W.code),oe({code:W.code})):(console.error("Failed to generate tool code:",W.error),alert("Failed to generate tool code: "+(W.error||"Unknown error")))}catch(W){console.error("Error generating tool code:",W),alert("Error generating tool code: "+W.message)}finally{R(!1)}}}const F=_.useRef(null),te=_.useCallback((W,ge)=>{if(F.current&&typeof F.current=="function")try{F.current()}catch{}try{const ze=sx(ge,W,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof ze=="function"?F.current=ze:F.current=null}catch{F.current=null}},[]);_.useEffect(()=>()=>{if(F.current&&typeof F.current=="function")try{F.current()}catch{}},[]);function M(){const W={name:`mcp_server_${Date.now().toString(36)}`,description:"New MCP Server",connection_type:"stdio",command:"npx",args:["-y","@modelcontextprotocol/server-example"],env:{},headers:{},timeout:10};n({mcp_servers:[...Y,W]}),x(W.name),b(null)}function q(W){const ge={...W};n({mcp_servers:[...Y,ge]}),x(ge.name),b(null)}function K(W,ge){ge.stopPropagation(),confirm("Delete this MCP server?")&&(n({mcp_servers:Y.filter(ze=>ze.name!==W)}),N===W&&x(null))}function X(W){W!==void 0&&(y(W),S(W!==JSON.stringify($,null,2)))}function ae(){if($)try{const W=JSON.parse(h),ge=$.name,ze=Y.map(mt=>mt.name===ge?W:mt);n({mcp_servers:ze}),x(W.name),S(!1)}catch(W){alert("Invalid JSON: "+W.message)}}async function me(){j(!0),O(null);try{const W=JSON.parse(h),ge=await qh({connection_type:W.connection_type,command:W.command,args:W.args,env:W.env,url:W.url,headers:W.headers,timeout:W.timeout||30});if(O(ge),ge.success&&ge.tools.length>0){const ze={...W,tool_filter:ge.tools.map(mt=>mt.name)};y(JSON.stringify(ze,null,2)),S(!0)}}catch(W){O({success:!1,tools:[],error:W.message})}finally{j(!1)}}const ve={};return t.custom_tools.forEach(W=>{const ge=W.module_path||"tools";ve[ge]||(ve[ge]=[]),ve[ge].push(W)}),s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"tools-sidebar",children:[s.jsxs("div",{className:"sidebar-tabs",children:[s.jsxs("button",{className:`sidebar-tab ${v==="tools"?"active":""}`,onClick:()=>w("tools"),children:[s.jsx(Gt,{size:14}),"Tools"]}),s.jsxs("button",{className:`sidebar-tab ${v==="mcp"?"active":""}`,onClick:()=>w("mcp"),children:[s.jsx(ur,{size:14}),"MCP"]})]}),v==="tools"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:J,children:[s.jsx(Me,{size:14}),"New"]})]}),s.jsxs("div",{className:"tools-tree",children:[c.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Yd,{size:14}),"Built-in Tools"]}),c.map(W=>s.jsxs("div",{className:`tool-item builtin ${(f==null?void 0:f.name)===W.name?"selected":""}`,onClick:()=>{m(W),V(null),x(null)},children:[s.jsx(Vl,{size:14}),s.jsx("span",{className:"tool-name",children:W.name})]},W.name))]}),t.custom_tools.length===0&&c.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(In,{size:32}),s.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(ve).map(([W,ge])=>s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(m0,{size:14}),W]}),ge.map(ze=>s.jsxs("div",{className:`tool-item ${a===ze.id?"selected":""}`,onClick:()=>{V(ze.id),m(null),x(null)},children:[s.jsx(Gt,{size:14}),s.jsx("span",{className:"tool-name",children:ze.name}),s.jsx("button",{className:"delete-btn",onClick:mt=>C(ze.id,mt),children:s.jsx(Pe,{size:14})})]},ze.id))]},W))]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsxs("h3",{children:["MCP Servers (",Y.length,")"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:M,children:[s.jsx(Me,{size:14}),"Custom"]})]}),s.jsxs("div",{className:"tools-tree",children:[Y.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Ul,{size:14}),"Configured (",Y.length,")"]}),Y.map(W=>s.jsxs("div",{className:`tool-item ${N===W.name?"selected":""}`,onClick:()=>{x(W.name),b(null),V(null),m(null)},children:[s.jsx(ur,{size:14}),s.jsx("span",{className:"tool-name",children:W.name}),s.jsx("span",{className:"tool-type-badge",children:W.connection_type}),s.jsx("button",{className:"delete-btn",onClick:ge=>K(W.name,ge),children:s.jsx(Pe,{size:14})})]},W.name))]}),k.length>0&&s.jsxs("div",{className:"module-group",children:[s.jsxs("div",{className:"module-header",children:[s.jsx(Yd,{size:14}),"Available Templates (",k.length,")"]}),k.map(W=>s.jsxs("div",{className:`tool-item known-server ${(g==null?void 0:g.name)===W.name?"selected":""}`,onClick:()=>{b(W),x(null),V(null),m(null)},children:[s.jsx(ur,{size:14}),s.jsx("span",{className:"tool-name",children:W.name}),s.jsx("span",{className:"tool-type-badge",children:W.connection_type})]},W.name))]}),Y.length===0&&k.length===0&&s.jsxs("div",{className:"empty-state",children:[s.jsx(ur,{size:32}),s.jsx("p",{children:"No MCP servers available"})]})]})]})]}),s.jsx("div",{className:"tool-editor",children:f?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Vl,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:f.name}),s.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),s.jsxs("div",{className:"builtin-tool-info",children:[s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:f.description||"No description available."})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Usage"}),s.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),s.jsxs("code",{children:['tools: ["',f.name,'"]']})]}),s.jsxs("div",{className:"info-section",children:[s.jsx("h4",{children:"Note"}),s.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):P?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(Gt,{size:20,style:{color:"var(--accent-primary)"}}),s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[s.jsx("input",{type:"text",value:P.name,onChange:W=>oe({name:W.target.value}),placeholder:"Tool name",style:{borderColor:U?"var(--error)":void 0}}),U&&s.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:U})]})]}),s.jsxs("div",{className:"editor-meta",children:[s.jsxs("div",{className:"meta-field grow",children:[s.jsx("label",{children:"Description"}),s.jsx("input",{type:"text",value:P.description,onChange:W=>oe({description:W.target.value}),placeholder:"What does this tool do?"})]}),s.jsxs("div",{className:"meta-field",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:P.module_path,onChange:W=>oe({module_path:W.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Z,disabled:T||!P.name||!P.description,title:!P.name||!P.description?"Add a name and description first":"Generate code using AI",children:T?s.jsxs(s.Fragment,{children:[s.jsx(Ur,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(lu,{size:14}),"Write Tool"]})}),s.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),s.jsx("div",{className:"code-editor",children:s.jsx(an,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:A,onMount:te,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),s.jsxs("div",{className:"state-keys-panel",children:[s.jsxs("h4",{children:[s.jsx(su,{size:14})," State Keys Used"]}),s.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?s.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(W=>{const ge=P.state_keys_used.includes(W.name);return s.jsxs("label",{className:`state-key-chip ${ge?"selected":""}`,title:W.description,children:[s.jsx("input",{type:"checkbox",checked:ge,onChange:ze=>{const mt=ze.target.checked?[...P.state_keys_used,W.name]:P.state_keys_used.filter(fn=>fn!==W.name);oe({state_keys_used:mt})}}),W.name,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",W.type,")"]})]},W.name)})})]})]}):g?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(ur,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:g.name}),s.jsx("span",{className:"badge badge-info",children:g.connection_type}),s.jsx("span",{className:"badge badge-muted",children:"Template"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:()=>q(g),children:[s.jsx(Me,{size:14}),"Add to Project"]})]}),s.jsxs("div",{className:"known-server-preview",children:[s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("p",{children:g.description})]}),s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Command"}),s.jsxs("code",{children:[g.command," ",(ft=g.args)==null?void 0:ft.join(" ")]})]}),g.env&&Object.keys(g.env).length>0&&s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Required Environment Variables"}),s.jsx("div",{className:"env-vars",children:Object.entries(g.env).map(([W,ge])=>s.jsxs("div",{className:"env-var",children:[s.jsx("code",{children:W}),ge?s.jsx("span",{className:"env-value",children:ge}):s.jsx("span",{className:"env-required",children:"Required"})]},W))})]}),g.tool_filter&&g.tool_filter.length>0&&s.jsxs("div",{className:"preview-section",children:[s.jsxs("h4",{children:["Available Tools (",g.tool_filter.length,")"]}),s.jsx("div",{className:"tool-badges",children:g.tool_filter.map(W=>s.jsx("span",{className:"tool-badge",children:W},W))})]}),s.jsxs("div",{className:"preview-section",children:[s.jsx("h4",{children:"Configuration Preview"}),s.jsx("pre",{className:"config-preview",children:JSON.stringify(g,null,2)})]})]})]}):$?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(ur,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:$.name}),s.jsx("span",{className:"badge badge-info",children:$.connection_type}),L&&s.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:me,disabled:E,title:"Test connection and discover available tools",children:[E?s.jsx(Ur,{size:14,className:"spin"}):s.jsx(Ul,{size:14}),E?"Testing...":"Test Connection"]}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ae,disabled:!L,children:[s.jsx(au,{size:14}),"Save"]})]}),z&&s.jsx("div",{className:`mcp-test-result ${z.success?"success":"error"}`,children:z.success?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",z.tools.length," tools"]}),z.tools.length>0&&s.jsxs("div",{className:"test-result-tools",children:[s.jsx("strong",{children:"Available tools:"}),s.jsx("ul",{children:z.tools.map(W=>s.jsxs("li",{children:[s.jsx("code",{children:W.name}),W.description&&s.jsxs("span",{children:[" — ",W.description]})]},W.name))}),s.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),s.jsx("div",{className:"test-result-error",children:z.error})]})}),s.jsx("div",{className:"mcp-info",children:s.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),s.jsx("div",{className:"code-editor",children:s.jsx(an,{height:"100%",language:"json",theme:"vs-dark",value:h,onChange:X,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),s.jsxs("div",{className:"mcp-help",children:[s.jsx("h4",{children:"Schema Reference"}),s.jsxs("div",{className:"schema-fields",children:[s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"name"}),s.jsx("span",{children:"Unique identifier for this server"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"description"}),s.jsx("span",{children:"Human-readable description"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"connection_type"}),s.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"command"}),s.jsx("span",{children:"Command to run (for stdio)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"args"}),s.jsx("span",{children:"Array of command arguments"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"env"}),s.jsx("span",{children:"Environment variables object"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"url"}),s.jsx("span",{children:"Server URL (for sse/http)"})]}),s.jsxs("div",{className:"schema-field",children:[s.jsx("code",{children:"tool_filter"}),s.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):s.jsxs("div",{className:"empty-state",children:[s.jsx(In,{size:48}),s.jsxs("p",{children:["Select a tool to view",s.jsx("br",{}),"or create a new custom tool"]})]})})]})}function mS(){return`callback_${Date.now().toString(36)}`}function Xp(e){return/^[a-zA-Z0-9_]+$/.test(e)}function ox(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return ox("before_agent")}}function hS({onSelectCallback:e}){var T,R;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:o}=Ze(),[a,l]=_.useState(""),[c,u]=_.useState(null),[d,p]=_.useState(null),[f,m]=_.useState(!1),v=_.useRef(null);if(!t)return null;const w=t.custom_callbacks||[],N=w.find(E=>E.id===c);function x(E){u(E),e==null||e(E)}_.useEffect(()=>{N?(l(N.code),p(null)):l("")},[c,N]);function h(){const E=mS(),j={id:E,name:"new_callback",description:"",module_path:"callbacks.custom",code:ox("before_agent"),state_keys_used:[]};r(j),x(E)}function y(E,j){j.stopPropagation(),confirm("Delete this callback?")&&(o(E),c===E&&(e==null||e(null),u(null),l("")))}function L(){if(!c)return;const E=w.find(O=>O.id===c);if(!E)return;const j=E.name.trim();if(!j){alert("Please enter a name");return}if(!Xp(j)){p("Name must contain only alphanumeric characters and underscores");return}if(w.find(O=>O.name===j&&O.id!==E.id)){p("A callback with this name already exists");return}i(E.id,{code:a,name:j,description:E.description,module_path:E.module_path,state_keys_used:E.state_keys_used}),p(null)}function S(E,j){v.current=j;try{sx(j,{endpoint:"/api/code-completion",language:"python"})}catch(z){console.warn("Failed to register Monacopilot completion:",z)}}async function g(){if(N){m(!0);try{let E="before_agent";const j=N.name.toLowerCase(),z=N.description.toLowerCase();j.includes("after_agent")||z.includes("after agent")?E="after_agent":j.includes("before_model")||z.includes("before model")?E="before_model":j.includes("after_model")||z.includes("after model")?E="after_model":j.includes("before_tool")||z.includes("before tool")?E="before_tool":j.includes("after_tool")||z.includes("after tool")?E="after_tool":(j.includes("before_agent")||z.includes("before agent"))&&(E="before_agent");const O=await Hh(t.id,N.name,N.description,E,N.state_keys_used);O.success&&O.code?(l(O.code),i(N.id,{code:O.code})):(console.error("Failed to generate callback code:",O.error),alert("Failed to generate callback code: "+(O.error||"Unknown error")))}catch(E){console.error("Error generating callback code:",E),alert("Error generating callback code: "+E.message)}finally{m(!1)}}}const b=((R=(T=t.app)==null?void 0:T.state_keys)==null?void 0:R.map(E=>E.name))||[];return s.jsxs("div",{className:"tools-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"tools-sidebar",children:[s.jsxs("div",{className:"tools-sidebar-header",children:[s.jsx("h3",{children:"Callbacks"}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:h,title:"Add Callback",children:s.jsx(Me,{size:16})})]}),s.jsx("div",{className:"tools-list",children:w.length===0?s.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):w.map(E=>s.jsxs("div",{className:`tool-item ${c===E.id?"selected":""}`,onClick:()=>x(E.id),children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{className:"tool-item-name",children:E.name}),E.description&&s.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:E.description})]}),s.jsx("div",{className:"tool-item-actions",children:s.jsx("button",{className:"btn btn-icon btn-sm",onClick:j=>y(E.id,j),title:"Delete",children:s.jsx(Pe,{size:14})})})]},E.id))})]}),s.jsx("div",{className:"tools-editor",children:N?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"tools-editor-header",children:[s.jsx("h3",{children:"Edit Callback"}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:L,children:[s.jsx(au,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),s.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Name"}),s.jsx("input",{type:"text",value:N.name,onChange:E=>{const j=E.target.value;i(N.id,{name:j}),d&&Xp(j)&&p(null)},className:d?"error":""}),d&&s.jsx("div",{className:"error-message",children:d})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Description"}),s.jsx("textarea",{value:N.description,onChange:E=>i(N.id,{description:E.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Module Path"}),s.jsx("input",{type:"text",value:N.module_path,onChange:E=>i(N.id,{module_path:E.target.value}),placeholder:"callbacks.custom"})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"State Keys Used"}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:b.map(E=>{const j=N.state_keys_used.includes(E);return s.jsxs("button",{type:"button",className:`btn btn-sm ${j?"btn-primary":"btn-secondary"}`,onClick:()=>{const z=j?N.state_keys_used.filter(O=>O!==E):[...N.state_keys_used,E];i(N.id,{state_keys_used:z})},children:[s.jsx(su,{size:12,style:{marginRight:"4px"}}),E]},E)})}),b.length===0&&s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),s.jsxs("div",{className:"form-group",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[s.jsx("label",{children:"Code"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:g,disabled:f||!N.name,title:N.name?"Generate code using AI":"Add a name first",children:f?s.jsxs(s.Fragment,{children:[s.jsx(Ur,{size:14,className:"spinning"}),"Generating..."]}):s.jsxs(s.Fragment,{children:[s.jsx(lu,{size:14}),"Generate"]})})]}),s.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),s.jsx("div",{className:"code-editor-container",children:s.jsx(an,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:E=>l(E||""),onMount:S,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):s.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}const Zp={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},gS={agent_start:Bl,agent_end:Bl,tool_call:Gt,tool_result:Gt,model_call:iu,model_response:xo,state_change:on,transfer:lg,callback_start:In,callback_end:In};function xS(e){var t,n,r,i,o,a,l,c,u,d,p,f,m,v,w,N,x,h,y,L,S;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":return(t=e.data)!=null&&t.error?`END ${e.agent_name} [ERROR]`:`END ${e.agent_name}`;case"tool_call":const b=Object.entries(((n=e.data)==null?void 0:n.args)||{}).map(([I,k])=>{const V=k!=null?JSON.stringify(k):"null";return`${I}=${V.slice(0,20)}`}).join(", ")||"";return`CALL ${((r=e.data)==null?void 0:r.tool_name)||"unknown"}(${b.slice(0,60)}${b.length>60?"...":""})`;case"tool_result":const T=(i=e.data)==null?void 0:i.result;let R="";if((a=(o=T==null?void 0:T.content)==null?void 0:o[0])!=null&&a.text)R=String(T.content[0].text).slice(0,60);else if(typeof T=="string")R=T.slice(0,60);else if(T!=null){const I=JSON.stringify(T);R=I?I.slice(0,60):""}else R="";return`RESULT ${((l=e.data)==null?void 0:l.tool_name)||"unknown"} → ${R}${R.length>=60?"...":""}`;case"model_call":return`LLM_REQ ${((u=(c=e.data)==null?void 0:c.contents)==null?void 0:u.length)||0} msgs, ${((d=e.data)==null?void 0:d.tool_count)||0} tools`;case"model_response":const E=((f=(p=e.data)==null?void 0:p.response_content)==null?void 0:f.parts)||((m=e.data)==null?void 0:m.parts)||[],j=E.find(I=>(I==null?void 0:I.type)==="function_call");if(j)return`LLM_RSP → ${j.name||"unknown"}()`;const z=E.find(I=>(I==null?void 0:I.type)==="text");if(z!=null&&z.text){const I=String(z.text);return`LLM_RSP "${I.slice(0,50)}${I.length>50?"...":""}"`}return`LLM_RSP (${((v=e.data)==null?void 0:v.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((w=e.data)==null?void 0:w.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((N=e.data)==null?void 0:N.target)||"unknown"}`;case"callback_start":const U=((x=e.data)==null?void 0:x.callback_name)||"unknown",B=((h=e.data)==null?void 0:h.callback_type)||"";return`CALLBACK START ${B?`[${B}]`:""} ${U}`;case"callback_end":const Y=((y=e.data)==null?void 0:y.callback_name)||"unknown",P=((L=e.data)==null?void 0:L.callback_type)||"",$=(S=e.data)!=null&&S.error?" [ERROR]":"";return`CALLBACK END ${P?`[${P}]`:""} ${Y}${$}`;default:return e.event_type.toUpperCase()}}function yS(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function vS({event:e}){var o,a,l,c,u,d,p,f,m,v,w,N,x,h,y,L;const[t,n]=_.useState(new Set(["instruction","messages","result","response","state_delta","data"])),r=S=>{const g=new Set(t);g.has(S)?g.delete(S):g.add(S),n(g)},i=(S,g=0,b=!1)=>{const T="  ".repeat(g),R="  ".repeat(g+1);if(S===null)return s.jsx("span",{className:"json-null",children:"null"});if(S===void 0)return s.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof S=="boolean")return s.jsx("span",{className:"json-boolean",children:S.toString()});if(typeof S=="number")return s.jsx("span",{className:"json-number",children:S});if(typeof S=="string"){const E=S.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t");return E.length>300&&g>0?s.jsxs("span",{className:"json-string",children:['"',E.slice(0,300),'..." ',s.jsxs("span",{className:"json-truncated",children:["(",S.length," chars)"]})]}):s.jsxs("span",{className:"json-string",children:['"',E,'"']})}if(Array.isArray(S))return S.length===0?s.jsx("span",{className:"json-bracket",children:"[]"}):S.every(j=>j===null||typeof j!="object")&&S.length<=3?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"["}),S.map((j,z)=>s.jsxs("span",{children:[i(j,g+1,!0),z<S.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},z)),s.jsx("span",{className:"json-bracket",children:"]"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"["}),S.map((j,z)=>s.jsxs("span",{children:[`
`+R,i(j,g+1),z<S.length-1&&s.jsx("span",{className:"json-comma",children:","})]},z)),`
`+T,s.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof S=="object"){const E=Object.entries(S);return E.length===0?s.jsx("span",{className:"json-bracket",children:"{}"}):E.length<=2&&E.every(([,z])=>z===null||typeof z!="object")&&b?s.jsxs("span",{className:"json-inline",children:[s.jsx("span",{className:"json-bracket",children:"{"}),E.map(([z,O],U)=>s.jsxs("span",{children:[s.jsxs("span",{className:"json-key",children:['"',z,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(O,g+1,!0),U<E.length-1&&s.jsx("span",{className:"json-comma",children:", "})]},z)),s.jsx("span",{className:"json-bracket",children:"}"})]}):s.jsxs("span",{className:"json-block",children:[s.jsx("span",{className:"json-bracket",children:"{"}),E.map(([z,O],U)=>s.jsxs("span",{children:[`
`+R,s.jsxs("span",{className:"json-key",children:['"',z,'"']}),s.jsx("span",{className:"json-colon",children:": "}),i(O,g+1),U<E.length-1&&s.jsx("span",{className:"json-comma",children:","})]},z)),`
`+T,s.jsx("span",{className:"json-bracket",children:"}"})]})}return String(S)};return s.jsxs("div",{className:"event-detail",children:[s.jsxs("div",{className:"detail-header",children:[s.jsx("span",{className:"detail-type",children:e.event_type}),s.jsx("span",{className:"detail-agent",children:e.agent_name}),s.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("data"),children:[t.has("data")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsx("span",{children:"Event Data"})]}),t.has("data")&&s.jsx("div",{className:"section-content json-viewer",children:i(e.data)})]}),e.event_type==="agent_start"&&((o=e.data)==null?void 0:o.instruction)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("instruction"),children:[t.has("instruction")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsx("span",{children:"Instruction"}),s.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((a=e.data)==null?void 0:a.contents)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("messages"),children:[t.has("messages")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&s.jsx("div",{className:"section-content",children:e.data.contents.map((S,g)=>{var b;return s.jsxs("div",{className:"message-item",children:[s.jsx("span",{className:`message-role ${S.role}`,children:S.role}),s.jsx("div",{className:"message-parts",children:(b=S.parts)==null?void 0:b.map((T,R)=>s.jsxs("div",{className:"message-part",children:[T.text&&s.jsx("pre",{children:T.text}),T.function_call&&s.jsxs("div",{className:"function-call",children:[s.jsx("strong",{children:T.function_call.name}),s.jsx("pre",{children:JSON.stringify(T.function_call.args,null,2)})]}),T.function_response&&s.jsxs("div",{className:"function-response",children:[s.jsx("strong",{children:T.function_response.name}),s.jsx("pre",{children:JSON.stringify(T.function_response.response,null,2)})]})]},R))})]},g)})})]}),e.event_type==="tool_result"&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("result"),children:[t.has("result")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsx("span",{children:"Tool Result"})]}),t.has("result")&&s.jsx("div",{className:"section-content",children:s.jsx("pre",{className:"result-content",children:((d=(u=(c=(l=e.data)==null?void 0:l.result)==null?void 0:c.content)==null?void 0:u[0])==null?void 0:d.text)||(typeof((p=e.data)==null?void 0:p.result)=="string"?e.data.result:JSON.stringify((f=e.data)==null?void 0:f.result,null,2))})})]}),e.event_type==="model_response"&&((m=e.data)==null?void 0:m.parts)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("response"),children:[t.has("response")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&s.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&s.jsx("div",{className:"section-content",children:e.data.parts.map((S,g)=>s.jsxs("div",{className:"response-part",children:[S.type==="text"&&S.text&&s.jsx("pre",{className:"response-text",children:S.text}),S.type==="function_call"&&s.jsxs("div",{className:"function-call",children:[s.jsxs("strong",{children:["→ ",S.name,"()"]}),S.args&&Object.keys(S.args).length>0&&s.jsx("pre",{children:JSON.stringify(S.args,null,2)})]}),S.thought&&s.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},g))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("callback_info"),children:[t.has("callback_info")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&s.jsxs("div",{className:"section-content",children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Name:"})," ",((v=e.data)==null?void 0:v.callback_name)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Type:"})," ",((w=e.data)==null?void 0:w.callback_type)||"unknown"]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Module Path:"})," ",((N=e.data)==null?void 0:N.module_path)||"unknown"]}),((x=e.data)==null?void 0:x.error)&&s.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Error:"})," ",e.data.error]}),((h=e.data)==null?void 0:h.error_type)&&s.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[s.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((y=e.data)==null?void 0:y.stack_trace)&&s.jsxs("div",{style:{marginTop:"8px"},children:[s.jsx("strong",{children:"Stack Trace:"}),s.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="state_change"&&((L=e.data)==null?void 0:L.state_delta)&&s.jsxs("div",{className:"detail-section",children:[s.jsxs("div",{className:"section-header",onClick:()=>r("state_delta"),children:[t.has("state_delta")?s.jsx(Ct,{size:12}):s.jsx(Nt,{size:12}),s.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&s.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([S,g])=>s.jsxs("div",{className:"state-delta-item",children:[s.jsx("div",{className:"state-delta-key",children:S}),s.jsx("pre",{className:"state-delta-value",children:typeof g=="string"?g:JSON.stringify(g,null,2)})]},S))})]})]})}function bS({content:e,title:t,onClose:n}){return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h3",{children:t}),s.jsx("button",{className:"modal-close",onClick:n,children:"×"})]}),s.jsx("div",{className:"modal-body markdown-content",children:s.jsx(ex,{children:e})})]}),s.jsx("style",{children:`
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
      `})]})}function kS({events:e,selectedEventIndex:t,project:n}){const[r,i]=_.useState(null),o=_.useMemo(()=>{var u;const l={};return(u=n==null?void 0:n.app)!=null&&u.state_keys&&n.app.state_keys.forEach(d=>{l[d.name]={value:void 0,timestamp:null,defined:!0,description:d.description,type:d.type}}),n!=null&&n.agents&&n.agents.forEach(d=>{if(d.type==="LlmAgent"&&d.output_key){const p=d.output_key;l[p]||(l[p]={value:void 0,timestamp:null,defined:!0,description:`Output from ${d.name}`,type:"string"})}}),(t!==null?e.slice(0,t+1):e).filter(d=>d.event_type==="state_change").forEach(d=>{var p;(p=d.data)!=null&&p.state_delta&&Object.entries(d.data.state_delta).forEach(([f,m])=>{var v;l[f]={...l[f],value:m,timestamp:d.timestamp,defined:((v=l[f])==null?void 0:v.defined)??!1}})}),l},[e,t,n]),a=Object.entries(o);return s.jsxs(s.Fragment,{children:[r&&s.jsx(bS,{content:r.content,title:r.title,onClose:()=>i(null)}),s.jsxs("div",{className:"state-snapshot",children:[s.jsx("style",{children:`
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
      `}),s.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),a.length===0?s.jsx("div",{className:"state-empty",children:"No state keys defined"}):a.map(([l,{value:c,timestamp:u,defined:d,description:p,type:f}])=>s.jsxs("div",{className:`state-entry ${c===void 0?"unset":""}`,children:[s.jsxs("div",{className:"state-key",children:[l,f&&s.jsxs("span",{className:"state-type",children:["(",f,")"]})]}),s.jsx("div",{className:"state-value",onClick:()=>{if(c!==void 0){const m=typeof c=="string"?c:JSON.stringify(c,null,2);i({content:m,title:l})}},style:{cursor:c!==void 0?"pointer":"default"},title:c!==void 0?"Click to view in markdown viewer":void 0,children:c===void 0?"(not set)":typeof c=="string"?c:JSON.stringify(c,null,2)}),p&&s.jsx("div",{className:"state-desc",children:p}),u&&s.jsx("div",{className:"state-time",children:new Date(u*1e3).toLocaleTimeString()})]},l))]})]})}let rc=null,ic=null;(async()=>{try{rc=(await cg(()=>import("./jq-BjZXCzuW.js").then(t=>t.j),[])).default}catch(e){console.warn("jq-web failed to load:",e.message),ic=e.message}})();function Ua(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function ef(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(o){return`[JS error: ${o}]`}}if(rc)try{const i=rc.json(r,n);return i==null?"[No match]":typeof i=="string"?i:JSON.stringify(i,null,2)}catch(i){if(!n.startsWith("."))try{const a=new Function("value","data",`return ${n}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch{}return`[jq error: ${i.message||i}]`}else{if(ic){if(n.startsWith(".")&&!n.includes("|"))try{const i=n.slice(1).split(".").filter(Boolean);let o=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(o=o[l[1]]),o=o[parseInt(l[2])]):o=o[a]}return typeof o=="string"?o:JSON.stringify(o,null,2)}catch{}try{const o=new Function("value","data",`return ${n}`)(e,r);return typeof o=="string"?o:JSON.stringify(o,null,2)}catch(i){return`[jq not loaded: ${ic}. JS fallback failed: ${i.message}]`}}return"[jq loading...]"}}function jS({project:e,selectedEventIndex:t}){var Z;const{watches:n,updateWatch:r,addWatch:i,removeWatch:o,runEvents:a}=Ze(),[l,c]=_.useState(!1),[u,d]=_.useState(null),[p,f]=_.useState({}),[m,v]=_.useState(new Set),[w,N]=_.useState(""),[x,h]=_.useState(""),[y,L]=_.useState({}),[S,g]=_.useState(""),[b,T]=_.useState([]),[R,E]=_.useState(null),[j,z]=_.useState(null),[O,U]=_.useState(!1);_.useEffect(()=>{ru().then(T).catch(console.error)},[]);const B=_.useMemo(()=>{const F=e.mcp_servers||[],te=new Set(F.map(q=>q.name)),M=b.filter(q=>!te.has(q.name));return[...F,...M]},[e.mcp_servers,b]),Y=_.useCallback(async F=>{if(!(p[F]||m.has(F))){v(te=>new Set([...te,F]));try{const te=await ye(`/projects/${e.id}/mcp-servers/${encodeURIComponent(F)}/test-connection`,{method:"POST"});te.success&&f(M=>({...M,[F]:te.tools}))}catch(te){console.error("Failed to load tools:",te)}finally{v(te=>{const M=new Set(te);return M.delete(F),M})}}},[e.id,p,m]);_.useEffect(()=>{var q;if(u)return;if(!w||!x){L({});return}const te=(p[w]||[]).find(K=>K.name===x);if(!((q=te==null?void 0:te.parameters)!=null&&q.properties)){L({});return}const M={};Object.entries(te.parameters.properties).forEach(([K,X])=>{X.type==="string"?M[K]=X.default||"":X.type==="number"||X.type==="integer"?M[K]=X.default||0:X.type==="boolean"?M[K]=X.default||!1:M[K]=X.default||null}),L(M)},[w,x,p,u]);const P=()=>{d(null),N(""),h(""),L({}),g(""),E(null),z(null),c(!0)},$=F=>{if(d(F.id),N(F.serverName),h(F.toolName),L({...F.args}),g(F.transform||""),F.result){const{text:te}=Ua(F.result);E(te),z(null)}else E(null),z(null);p[F.serverName]||Y(F.serverName),c(!0)},I=async()=>{if(!(!w||!x)){U(!0),z(null);try{const F=await ye(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:w,tool_name:x,arguments:y})}),{text:te,isError:M}=Ua(F);M?(z(te),E(null)):(E(te),z(null))}catch(F){z(String(F)),E(null)}finally{U(!1)}}},k=_.useMemo(()=>R?!S||!S.trim()?R:ef(R,S):null,[R,S]),V=()=>{if(!(!w||!x)){if(u){r(u,{serverName:w,toolName:x,args:{...y},transform:S||void 0});const F=n.find(te=>te.id===u);F&&C({...F,serverName:w,toolName:x,args:y,transform:S||void 0,history:F.history||[]})}else{const F={id:`watch-${Date.now()}`,serverName:w,toolName:x,args:{...y},transform:S||void 0,history:[]};i(F),C(F)}c(!1)}},J=F=>{o(F)},C=_.useCallback(async(F,te)=>{r(F.id,{isLoading:!0,error:void 0});const M=te??a.length-1,q=Date.now();try{const K=await ye(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:F.serverName,tool_name:F.toolName,arguments:F.args})}),X={eventIndex:M,timestamp:q,result:K},ae=[...F.history||[],X];r(F.id,{result:K,isLoading:!1,lastRun:q,history:ae})}catch(K){const X={eventIndex:M,timestamp:q,error:String(K)},ae=[...F.history||[],X];r(F.id,{error:String(K),isLoading:!1,lastRun:q,history:ae})}},[e.id,r,a.length]),oe=()=>{n.forEach(F=>C(F))},A=_.useMemo(()=>!w||!x?null:(p[w]||[]).find(te=>te.name===x),[w,x,p]);return s.jsxs("div",{className:"tool-watch-panel",children:[s.jsxs("div",{className:"watch-header",children:[s.jsx(Hi,{size:14}),s.jsx("span",{children:"Tool Watch"}),s.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),s.jsxs("div",{className:"watch-actions",children:[s.jsx("button",{className:"watch-btn",onClick:oe,title:"Refresh all",children:s.jsx(wn,{size:12})}),s.jsx("button",{className:"watch-btn",onClick:P,title:"Add watch",children:s.jsx(Me,{size:12})})]})]}),n.length===0?s.jsxs("div",{className:"watch-empty",children:[s.jsx(Hi,{size:20,style:{opacity:.3}}),s.jsx("span",{children:"No watch expressions"}),s.jsxs("button",{className:"add-watch-btn",onClick:P,children:[s.jsx(Me,{size:12})," Add Tool Watch"]})]}):s.jsx("div",{className:"watch-list",children:n.map(F=>{let te=F.result,M=F.error;if(t!==null&&F.history&&F.history.length>0){const me=F.history.filter(ve=>ve.eventIndex<=t);if(me.length>0){const ve=me[me.length-1];te=ve.result,M=ve.error}else te=void 0,M=void 0}const{text:q,isError:K}=te?Ua(te):{text:"",isError:!1},X=te?ef(q,F.transform):"",ae=M||K;return s.jsxs("div",{className:`watch-item ${ae?"error":""}`,children:[s.jsxs("div",{className:"watch-item-header",children:[s.jsxs("span",{className:"watch-expr",children:[s.jsx("span",{className:"watch-server",children:F.serverName}),s.jsx("span",{className:"watch-tool",children:F.toolName}),Object.keys(F.args).length>0&&s.jsxs("span",{className:"watch-args",children:["(",Object.entries(F.args).map(([me,ve])=>`${me}=${JSON.stringify(ve)}`).join(", "),")"]}),t!==null&&s.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),s.jsxs("div",{className:"watch-item-actions",children:[s.jsx("button",{onClick:()=>$(F),title:"Edit watch",children:s.jsx(Gt,{size:10})}),s.jsx("button",{onClick:()=>C(F),title:"Refresh",children:F.isLoading?s.jsx(wn,{size:10,className:"spin"}):s.jsx(wn,{size:10})}),s.jsx("button",{onClick:()=>J(F.id),title:"Remove",children:s.jsx(Pe,{size:10})})]})]}),s.jsx("div",{className:"watch-result",children:F.isLoading?s.jsx("span",{className:"loading",children:"Loading..."}):M?s.jsx("span",{className:"error",children:M}):te?s.jsx("pre",{className:K?"error-text":"",children:X}):s.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},F.id)})}),l&&s.jsx("div",{className:"watch-dialog-overlay",onClick:()=>c(!1),children:s.jsxs("div",{className:"watch-dialog",onClick:F=>F.stopPropagation(),children:[s.jsxs("div",{className:"dialog-header",children:[s.jsx("span",{children:u?"Edit Watch":"Add Tool Watch"}),s.jsx("button",{onClick:()=>c(!1),children:s.jsx(ag,{size:14})})]}),s.jsxs("div",{className:"dialog-body",children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"MCP Server"}),s.jsxs("select",{value:w,onChange:F=>{N(F.target.value),u||h(""),F.target.value&&Y(F.target.value)},children:[s.jsx("option",{value:"",children:"Select server..."}),B.map(F=>s.jsx("option",{value:F.name,children:F.name},F.name))]})]}),s.jsxs("div",{className:"form-row",children:[s.jsx("label",{children:"Tool"}),s.jsxs("select",{value:x,onChange:F=>h(F.target.value),disabled:!w||m.has(w),children:[s.jsx("option",{value:"",children:m.has(w)?"Loading tools...":"Select tool..."}),(p[w]||[]).map(F=>s.jsx("option",{value:F.name,children:F.name},F.name))]})]}),(A==null?void 0:A.description)&&s.jsx("div",{className:"tool-desc",children:A.description}),((Z=A==null?void 0:A.parameters)==null?void 0:Z.properties)&&Object.keys(A.parameters.properties).length>0&&s.jsxs("div",{className:"tool-args",children:[s.jsx("label",{children:"Arguments"}),Object.entries(A.parameters.properties).map(([F,te])=>{var M,q;return s.jsxs("div",{className:"arg-row",children:[s.jsxs("span",{className:"arg-name",children:[F,((M=A.parameters.required)==null?void 0:M.includes(F))&&s.jsx("span",{className:"required",children:"*"})]}),s.jsx("input",{type:te.type==="number"||te.type==="integer"?"number":"text",value:typeof y[F]=="object"?JSON.stringify(y[F]):y[F]??"",onChange:K=>L(X=>({...X,[F]:K.target.value})),placeholder:((q=te.description)==null?void 0:q.slice(0,40))||F})]},F)})]}),w&&x&&s.jsxs("div",{className:"test-section",children:[s.jsxs("div",{className:"test-header",children:[s.jsx("label",{children:"Test & Preview"}),s.jsxs("button",{className:"test-btn",onClick:I,disabled:O,children:[O?s.jsx(wn,{size:12,className:"spin"}):s.jsx(Mn,{size:12}),O?"Running...":"Test Run"]})]}),j&&s.jsxs("div",{className:"test-result error",children:[s.jsx("span",{className:"test-label",children:"Error:"}),s.jsx("pre",{children:j})]}),R&&s.jsxs("div",{className:"test-result",children:[s.jsx("span",{className:"test-label",children:"Raw Result:"}),s.jsx("pre",{children:R})]})]}),s.jsxs("div",{className:"form-row transform-row",children:[s.jsx("label",{children:"Transform (optional)"}),s.jsx("input",{type:"text",value:S,onChange:F=>g(F.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),s.jsxs("div",{className:"transform-hints",children:[s.jsx("span",{className:"hint-title",children:"jq:"}),s.jsx("code",{onClick:()=>g(".items[0].name"),children:".items[0].name"}),s.jsx("code",{onClick:()=>g(".content[].text"),children:".content[].text"}),s.jsx("code",{onClick:()=>g(".result.content[0].text"),children:".result.content[0].text"}),s.jsx("code",{onClick:()=>g('.[] | select(.status == "active")'),children:".[] | select()"}),s.jsx("span",{className:"hint-title",children:"JS:"}),s.jsx("code",{onClick:()=>g("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),s.jsx("code",{onClick:()=>g("js:data.length"),children:"js:data.length"})]})]}),R&&S&&s.jsxs("div",{className:"transform-preview",children:[s.jsx("span",{className:"test-label",children:"Transform Preview:"}),s.jsx("pre",{className:k!=null&&k.startsWith("[Transform error")?"error":"",children:k})]})]}),s.jsxs("div",{className:"dialog-footer",children:[s.jsx("button",{className:"cancel-btn",onClick:()=>c(!1),children:"Cancel"}),s.jsx("button",{className:"add-btn",onClick:V,disabled:!w||!x,children:u?"Save Changes":"Add Watch"})]})]})})]})}function wS(){var St;const{project:e,isRunning:t,setIsRunning:n,runEvents:r,addRunEvent:i,clearRunEvents:o,clearWatchHistories:a,runAgentId:l,setRunAgentId:c,watches:u,updateWatch:d,currentSessionId:p,setCurrentSessionId:f}=Ze(),[m,v]=_.useState(""),[w,N]=_.useState(null),[x,h]=_.useState(null),[y,L]=_.useState(null),[S,g]=_.useState(""),[b,T]=_.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end"])),[R,E]=_.useState(!0),[j,z]=_.useState(!0),[O,U]=_.useState(!1),[B,Y]=_.useState(360),[P,$]=_.useState(!1),[I,k]=_.useState([]),[V,J]=_.useState(null),[C,oe]=_.useState(!1),A=_.useRef(0),Z=_.useCallback(async(D,re)=>{if(!e)return;d(D.id,{isLoading:!0,error:void 0});const ie=re??r.length-1,le=Date.now();try{const pe=await ye(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:D.serverName,tool_name:D.toolName,arguments:D.args})}),Ue={eventIndex:ie,timestamp:le,result:pe},Vn=[...D.history||[],Ue];d(D.id,{result:pe,isLoading:!1,lastRun:le,history:Vn})}catch(pe){const Ue={eventIndex:ie,timestamp:le,error:String(pe)},Vn=[...D.history||[],Ue];d(D.id,{error:String(pe),isLoading:!1,lastRun:le,history:Vn})}},[e==null?void 0:e.id,d,r.length]);_.useEffect(()=>{if(r.length>A.current&&u.length>0){const D=r.length-1;u.forEach(re=>{re.isLoading||Z(re,D)})}A.current=r.length},[r.length,u,Z]),_.useEffect(()=>{l!==null&&(te(l),c(null))},[l,c]);const[F,te]=_.useState(null),M=_.useRef(null),q=_.useRef(null);_.useEffect(()=>{if(!P)return;const D=ie=>{if(!q.current)return;const pe=q.current.getBoundingClientRect().right-ie.clientX;Y(Math.min(600,Math.max(200,pe)))},re=()=>{$(!1)};return document.addEventListener("mousemove",D),document.addEventListener("mouseup",re),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",re)}},[P]);const K=_.useMemo(()=>r.length===0?{min:0,max:0}:{min:r[0].timestamp,max:r[r.length-1].timestamp},[r]),X=_.useMemo(()=>r.filter((D,re)=>{var ie,le,pe;if(y&&(D.timestamp<y[0]||D.timestamp>y[1])||b.size>0&&!b.has(D.event_type))return!1;if(R&&D.event_type==="model_response"){const Ue=((le=(ie=D.data)==null?void 0:ie.response_content)==null?void 0:le.parts)||((pe=D.data)==null?void 0:pe.parts)||[],Vn=Ue.some(Yo=>Yo.type==="function_call"),lx=Ue.some(Yo=>Yo.type==="text");if(!Vn&&!lx)return!1}return!(S&&!JSON.stringify(D).toLowerCase().includes(S.toLowerCase()))}),[r,y,b,S,R]),ae=_.useMemo(()=>{var le;let D=0,re=0;const ie=x!==null?x+1:r.length;for(let pe=0;pe<ie;pe++){const Ue=r[pe];Ue.event_type==="model_response"&&((le=Ue.data)!=null&&le.token_counts)&&(D+=Ue.data.token_counts.input||0,re+=Ue.data.token_counts.output||0)}return{input:D,output:re,total:D+re}},[r,x]),me=x!==null?r[x]:null;_.useEffect(()=>{if(!e){k([]);return}(async()=>{oe(!0);try{const re=await Fl(e.id);k(re)}catch(re){console.error("Failed to load sessions:",re),k([])}finally{oe(!1)}})()},[e]);const ve=_.useCallback(async D=>{if(!e){J(null);return}if(!D){o(),a(),f(null),J(null),h(null),L(null);return}try{const re=await $h(e.id,D);o(),a(),f(re.id),J(D),h(null),L(null);for(const ie of re.events)i(ie)}catch(re){alert(`Failed to load session: ${re.message||"Unknown error"}`)}},[e,o,a,f,i]);_.useEffect(()=>{if(!e||I.length===0||C)return;const re=new URLSearchParams(window.location.search).get("session");if(re)if(I.some(le=>le.id===re)){ve(re);const le=window.location.pathname;window.history.replaceState({},"",le)}else console.warn(`Session ${re} not found in available sessions`)},[e,I,C,ve]),_.useEffect(()=>{t&&M.current&&(M.current.scrollTop=M.current.scrollHeight)},[r.length,t]);const ft=_.useCallback(()=>{if(!e||!m.trim()||t)return;w&&(w.close(),N(null)),p||(o(),a(),J(null)),n(!0),h(null),L(null);const D=Uh(e.id);N(D),D.onopen=()=>{D.send(JSON.stringify({message:m,agent_id:F||void 0,session_id:p||void 0}))},D.onmessage=re=>{var le;const ie=JSON.parse(re.data);if(ie.event_type==="agent_start"&&((le=ie.data)!=null&&le.session_id)){const pe=ie.data.session_id;ie.data.session_reused,f(pe),pe&&I.some(Ue=>Ue.id===pe)&&J(pe)}else ie.type==="session_started"?(f(ie.session_id),ie.session_id&&I.some(pe=>pe.id===ie.session_id)&&J(ie.session_id)):ie.type==="completed"?(n(!1),D.close()):ie.type==="error"?(n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:ie.error}})):i(ie)},D.onerror=()=>{n(!1),i({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"WebSocket connection error"}})},D.onclose=()=>{n(!1)}},[e,m,t,w,o,n,i,F,p]),W=_.useCallback(()=>{w==null||w.close(),n(!1)},[w,n]);_.useEffect(()=>{const D=re=>{if((re.metaKey||re.ctrlKey)&&re.key==="Enter"){re.preventDefault(),ft();return}if(re.key==="ArrowDown"||re.key==="ArrowUp"){if(re.target instanceof HTMLInputElement||re.target instanceof HTMLTextAreaElement||(re.preventDefault(),X.length===0))return;if(re.key==="ArrowDown")if(x===null){const ie=r.indexOf(X[0]);h(ie)}else{const ie=X.findIndex(le=>r.indexOf(le)===x);if(ie<X.length-1){const le=r.indexOf(X[ie+1]);h(le)}}else if(re.key==="ArrowUp")if(x===null){const ie=r.indexOf(X[X.length-1]);h(ie)}else{const ie=X.findIndex(le=>r.indexOf(le)===x);if(ie>0){const le=r.indexOf(X[ie-1]);h(le)}}}};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[ft,X,x,r]);const ge=_.useCallback(()=>{var pe;if(r.length===0)return;const D={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:F||((pe=e==null?void 0:e.app)==null?void 0:pe.root_agent_id),events:r},re=new Blob([JSON.stringify(D,null,2)],{type:"application/json"}),ie=URL.createObjectURL(re),le=document.createElement("a");le.href=ie,le.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(le),le.click(),document.body.removeChild(le),URL.revokeObjectURL(ie)},[r,e,F]),ze=_.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const D=await Oh(p);if(D.success){alert(D.message||"Session saved to memory successfully");try{const re=await Fl(e.id);k(re)}catch{}}else alert(`Failed to save to memory: ${D.error||"Unknown error"}`)}catch(D){alert(`Error saving to memory: ${D.message||"Unknown error"}`)}},[p,e]),[mt,fn]=_.useState(!1),[Qo,Go]=_.useState([]),[Un,is]=_.useState(""),[H,ee]=_.useState("Test Case from Session"),[ue,fe]=_.useState(!1),ke=_.useCallback(async()=>{if(!p||!e){alert("No active session to create test case from");return}try{const D=await ye(`/projects/${e.id}/eval-sets`);if(Go(D.eval_sets||[]),!D.eval_sets||D.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}is(D.eval_sets[0].id),fn(!0)}catch(D){alert(`Error loading eval sets: ${D.message||"Unknown error"}`)}},[p,e]),ht=_.useCallback(async()=>{if(!p||!e||!Un){alert("Please select an evaluation set");return}fe(!0);try{const D=await ye(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:p,eval_set_id:Un,case_name:H})});fn(!1),alert(`Test case "${D.eval_case.name}" created successfully!

Token count: ${D.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(D){alert(`Error creating test case: ${D.message||"Unknown error"}`)}finally{fe(!1)}},[p,e,Un,H]),Xt=_.useCallback(()=>{const D=document.createElement("input");D.type="file",D.accept=".json",D.onchange=async re=>{var le;const ie=(le=re.target.files)==null?void 0:le[0];if(ie)try{const pe=await ie.text(),Ue=JSON.parse(pe);if(!Ue.events||!Array.isArray(Ue.events)){alert("Invalid run file: missing events array");return}o(),a(),h(null),L(null),Ue.events.forEach(Vn=>{i(Vn)})}catch(pe){alert(`Failed to load run file: ${pe}`)}},D.click()},[o,a,i]);return _.useEffect(()=>{if(x!==null){const D=document.querySelector(".event-row.selected");D==null||D.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?s.jsxs("div",{className:`run-panel ${P?"resizing":""}`,children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"input-area",children:[s.jsxs("select",{className:"agent-selector",value:F||"",onChange:D=>te(D.target.value||null),disabled:t,title:"Select which agent to run",children:[s.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((St=e.agents.find(D=>D.id===e.app.root_agent_id))==null?void 0:St.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(D=>D.id!==e.app.root_agent_id).map(D=>s.jsxs("option",{value:D.id,children:[D.name," (",D.type.replace("Agent",""),")"]},D.id))]}),s.jsxs("select",{className:"agent-selector",value:V||"",onChange:D=>ve(D.target.value||null),disabled:t||C,style:{minWidth:180},title:"Load a saved session",children:[s.jsx("option",{value:"",children:C?"Loading...":"Load Session..."}),I.map(D=>{const re=new Date(D.started_at*1e3),ie=D.duration?`${D.duration.toFixed(1)}s`:"?";return s.jsxs("option",{value:D.id,children:[re.toLocaleString()," (",D.event_count," events, ",ie,")"]},D.id)})]}),s.jsx("input",{type:"text",placeholder:"Enter your query...",value:m,onChange:D=>v(D.target.value),onKeyDown:D=>D.key==="Enter"&&!D.shiftKey&&ft(),disabled:t}),t?s.jsxs("button",{className:"stop",onClick:W,children:[s.jsx(k0,{size:14}),"Stop"]}):s.jsxs("button",{onClick:ft,disabled:!m.trim(),children:[s.jsx(Mn,{size:14}),"Run"]})]}),s.jsxs("div",{className:"toolbar",children:[s.jsxs("div",{className:"toolbar-section",children:[s.jsx(ig,{size:12,style:{color:"#71717a"}}),s.jsx("input",{type:"text",placeholder:"Filter events...",value:S,onChange:D=>g(D.target.value)})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change"].map(D=>s.jsx("button",{className:`filter-chip ${b.has(D)?"active":""}`,onClick:()=>{const re=new Set(b);re.has(D)?re.delete(D):re.add(D),T(re)},children:D.replace("_"," ")},D)),s.jsx("button",{className:`filter-chip ${b.has("callback_start")&&b.has("callback_end")?"active":""}`,onClick:()=>{const D=new Set(b);D.has("callback_start")&&D.has("callback_end")?(D.delete("callback_start"),D.delete("callback_end")):(D.add("callback_start"),D.add("callback_end")),T(D)},title:"Show/hide callback events",children:"callback"}),s.jsx("button",{className:`filter-chip ${R?"active":""}`,onClick:()=>E(!R),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),s.jsx("div",{className:"toolbar-divider"}),s.jsxs("div",{className:"toolbar-section",children:[s.jsxs("button",{className:`toolbar-btn ${j?"active":""}`,onClick:()=>z(!j),children:[s.jsx(on,{size:12}),"State"]}),s.jsxs("button",{className:`toolbar-btn ${O?"active":""}`,onClick:()=>U(!O),children:[s.jsx(Xd,{size:12}),"Tools"]})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[X.length," / ",r.length," events"]}),y&&s.jsx("button",{className:"toolbar-btn",onClick:()=>L(null),children:"Clear Range"})]})]}),s.jsxs("div",{className:"main-content",ref:q,children:[s.jsxs("div",{className:"event-list-container",children:[s.jsxs("div",{className:"event-list-header",children:[s.jsx("div",{children:"#"}),s.jsx("div",{children:"Time"}),s.jsx("div",{children:"Agent"}),s.jsx("div",{children:"Type"}),s.jsx("div",{children:"Info"})]}),s.jsx("div",{className:"event-list",ref:M,children:X.length===0?s.jsxs("div",{className:"empty-state",children:[s.jsx(rg,{size:24}),s.jsx("span",{children:r.length===0?"No events yet":"No matching events"})]}):X.map((D,re)=>{const ie=r.indexOf(D),le=Zp[D.event_type]||Zp.error,pe=gS[D.event_type]||xo;return s.jsxs("div",{className:`event-row ${x===ie?"selected":""}`,style:{background:le.bg},onClick:()=>h(ie),onDoubleClick:()=>{z(!1),U(!1)},children:[s.jsx("div",{className:"index",children:ie}),s.jsx("div",{className:"time",style:{color:le.fg},children:yS(D.timestamp,K.min)}),s.jsx("div",{className:"agent",style:{color:le.fg},children:D.agent_name}),s.jsxs("div",{className:"type",style:{color:le.fg},children:[s.jsx(pe,{size:10}),D.event_type.split("_")[0]]}),s.jsx("div",{className:"summary",children:xS(D)})]},ie)})})]}),s.jsxs("div",{className:"side-panel-container",style:{width:B},children:[s.jsx("div",{className:`resize-handle ${P?"active":""}`,onMouseDown:()=>$(!0)}),s.jsxs("div",{className:"side-panel",style:{width:B-4},children:[s.jsxs("div",{className:"side-panel-tabs",children:[s.jsxs("button",{className:`side-panel-tab ${!j&&!O?"active":""}`,onClick:()=>{z(!1),U(!1)},children:[s.jsx(Hi,{size:12,style:{marginRight:4}}),"Details"]}),s.jsxs("button",{className:`side-panel-tab ${j?"active":""}`,onClick:()=>{z(!0),U(!1)},children:[s.jsx(on,{size:12,style:{marginRight:4}}),"State"]}),s.jsxs("button",{className:`side-panel-tab ${O?"active":""}`,onClick:()=>{U(!0),z(!1)},children:[s.jsx(Xd,{size:12,style:{marginRight:4}}),"Tools"]})]}),s.jsx("div",{className:"side-panel-content",children:O?s.jsx(jS,{project:e,selectedEventIndex:x}):j?s.jsx(kS,{events:r,selectedEventIndex:x,project:e}):me?s.jsx(vS,{event:me}):s.jsxs("div",{className:"empty-state",children:[s.jsx(Hi,{size:24}),s.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),s.jsxs("div",{className:"stats-bar",children:[s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Events:"}),s.jsx("span",{className:"stat-value",children:r.length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Tool Calls:"}),s.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="tool_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Model Calls:"}),s.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="model_call").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Callbacks:"}),s.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="callback_start").length})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"State Changes:"}),s.jsx("span",{className:"stat-value",children:r.filter(D=>D.event_type==="state_change").length})]}),r.length>0&&s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{children:"Duration:"}),s.jsxs("span",{className:"stat-value",children:[((r[r.length-1].timestamp-r[0].timestamp)*1e3).toFixed(0),"ms"]})]}),ae.total>0&&s.jsx("div",{className:"stat-item token-stats",children:s.jsxs("span",{className:"stat-value token-value",children:[s.jsxs("span",{className:"token-in",title:"Input tokens",children:[ae.input.toLocaleString(),"↑"]}),s.jsxs("span",{className:"token-out",title:"Output tokens",children:[ae.output.toLocaleString(),"↓"]}),s.jsx("span",{className:"token-total",title:"Total tokens",children:ae.total.toLocaleString()})]})}),s.jsx("div",{className:"stats-bar-spacer"}),s.jsxs("button",{className:"stats-bar-btn",onClick:Xt,title:"Load a saved run",children:[s.jsx(Uo,{size:12}),"Load"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:ge,disabled:r.length===0,title:"Save current run to file",children:[s.jsx(Bo,{size:12}),"Save"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:ze,disabled:!p||r.length===0,title:"Save current session to memory",children:[s.jsx(on,{size:12}),"Save to Memory"]}),s.jsxs("button",{className:"stats-bar-btn",onClick:ke,disabled:!p||r.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[s.jsx(Wl,{size:12}),"Create Test Case"]})]}),mt&&s.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>fn(!1),children:s.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:D=>D.stopPropagation(),children:[s.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[s.jsx(Wl,{size:18}),"Create Test Case from Session"]}),s.jsxs("div",{style:{marginBottom:16},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),s.jsx("input",{type:"text",value:H,onChange:D=>ee(D.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),s.jsx("select",{value:Un,onChange:D=>is(D.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:Qo.map(D=>s.jsx("option",{value:D.id,children:D.name},D.id))})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),s.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[s.jsx("button",{className:"btn btn-secondary",onClick:()=>fn(!1),children:"Cancel"}),s.jsx("button",{className:"btn btn-primary",onClick:ht,disabled:ue||!Un,children:ue?"Creating...":"Create Test Case"})]})]})})]}):s.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const _S=()=>Math.random().toString(36).substring(2,10),SS=()=>({id:_S(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function CS(){const{project:e,setProject:t}=Ze(),[n,r]=_.useState(null),[i,o]=_.useState(null),[a,l]=_.useState(""),[c,u]=_.useState([]),[d,p]=_.useState(!1),[f,m]=_.useState(!1),[v,w]=_.useState(""),[N,x]=_.useState(!1),[h,y]=_.useState(null),[L,S]=_.useState(null),g=_.useRef(null),b=(e==null?void 0:e.skillsets)||[],T=b.find(I=>I.id===n);_.useEffect(()=>{Xh().then(I=>S(I.available)).catch(()=>S(!1))},[]),_.useEffect(()=>{b.length>0&&!n&&r(b[0].id)},[b,n]),_.useEffect(()=>{!e||!n||R()},[e==null?void 0:e.id,n]);const R=_.useCallback(async()=>{if(!(!e||!n))try{const I=await Jh(e.id,n);o(I),j(n,{entry_count:I.entry_count})}catch(I){console.error("Failed to load stats:",I)}},[e==null?void 0:e.id,n]),E=I=>{e&&t({...e,...I})},j=(I,k)=>{e&&t({...e,skillsets:e.skillsets.map(V=>V.id===I?{...V,...k}:V)})},z=()=>{if(!e)return;const I=SS();E({skillsets:[...b,I]}),r(I.id)},O=I=>{e&&confirm("Delete this SkillSet and all its data?")&&(E({skillsets:b.filter(k=>k.id!==I)}),n===I&&r(b.length>1?b[0].id:null),o(null),u([]))},U=async()=>{if(!(!e||!n||!a.trim())){p(!0),y(null);try{const I=await Gh(e.id,n,a.trim(),10,0);u(I.results)}catch(I){y("Search failed"),console.error(I)}finally{p(!1)}}},B=async()=>{if(!(!e||!n||!v.trim())){x(!0),y(null);try{const I=await Kh(e.id,n,v.trim());w(""),await R(),alert(`Added ${I.chunks_added} chunks from ${I.source_name}`)}catch(I){y(I.message||"Failed to fetch URL")}finally{x(!1)}}},Y=async I=>{var V;const k=(V=I.target.files)==null?void 0:V[0];if(!(!k||!e||!n)){y(null);try{const J=await Qh(e.id,n,k);await R(),alert(`Added ${J.chunks_added} chunks from ${J.source_name}`)}catch(J){y(J.message||"Upload failed")}g.current&&(g.current.value="")}},P=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await Yh(e.id,n),await R(),u([])}catch{y("Clear failed")}},$=I=>{const k=Math.round(I*100),V=160,J=70,C=20+(1-I)*15,oe=.15+I*.25;return`linear-gradient(90deg, hsla(${V}, ${J}%, ${C}%, ${oe}) 0%, transparent ${k}%)`};return e?s.jsxs("div",{className:"skillsets-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"skillset-list",children:[s.jsxs("div",{className:"skillset-list-header",children:[s.jsx("h3",{children:"SkillSets"}),s.jsx("button",{className:"btn-icon",onClick:z,title:"Add SkillSet",children:s.jsx(Me,{size:16})})]}),b.length===0?s.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[s.jsx(on,{size:32}),s.jsx("span",{children:"No SkillSets"}),s.jsxs("button",{className:"btn-primary",onClick:z,children:[s.jsx(Me,{size:14})," Create SkillSet"]})]}):b.map(I=>s.jsxs("div",{className:`skillset-item ${n===I.id?"selected":""}`,onClick:()=>r(I.id),children:[s.jsx(on,{size:16,style:{color:"var(--accent)",flexShrink:0}}),s.jsxs("div",{className:"skillset-item-info",children:[s.jsx("div",{className:"skillset-item-name",children:I.name}),s.jsxs("div",{className:"skillset-item-count",children:[I.entry_count||0," entries"]})]}),s.jsx("button",{className:"skillset-item-delete",onClick:k=>{k.stopPropagation(),O(I.id)},children:s.jsx(Pe,{size:14})})]},I.id))]}),T?s.jsxs("div",{className:"skillset-detail",children:[s.jsxs("div",{className:"skillset-header",children:[s.jsxs("div",{className:"skillset-header-info",children:[s.jsx("input",{className:"skillset-name-input",value:T.name,onChange:I=>j(T.id,{name:I.target.value}),placeholder:"SkillSet Name"}),s.jsx("textarea",{className:"skillset-desc-input",value:T.description,onChange:I=>j(T.id,{description:I.target.value}),placeholder:"Description (optional)",rows:1}),s.jsxs("div",{className:"skillset-model",children:[s.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),s.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:T.embedding_model||"text-embedding-004",onChange:I=>j(T.id,{embedding_model:I.target.value}),children:[s.jsxs("optgroup",{label:"Google Gemini",children:[s.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),s.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),s.jsxs("optgroup",{label:"OpenAI",children:[s.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),s.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),s.jsxs("optgroup",{label:"Cohere",children:[s.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),s.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),s.jsxs("div",{className:"skillset-stats",children:[s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),s.jsxs("span",{className:"skillset-stat",children:[s.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),L===!1&&s.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),s.jsx("button",{className:"btn-icon",onClick:R,title:"Refresh",children:s.jsx(wn,{size:16})})]}),h&&s.jsxs("div",{className:"error-banner",children:[h,s.jsx("button",{onClick:()=>y(null),children:s.jsx(ag,{size:14})})]}),s.jsxs("div",{className:"search-section",children:[s.jsx("div",{className:"search-input-wrapper",children:s.jsx("input",{className:"search-input",value:a,onChange:I=>l(I.target.value),onKeyDown:I=>I.key==="Enter"&&U(),placeholder:"Search this SkillSet..."})}),s.jsxs("button",{className:"btn-primary",onClick:U,disabled:d||!a.trim(),children:[s.jsx(ig,{size:14}),d?"Searching...":"Search"]})]}),s.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&s.jsx("div",{className:"empty-state",children:s.jsx("span",{children:"No results found"})}),c.map(I=>s.jsxs("div",{className:"search-result",style:{background:$(I.score)},children:[s.jsxs("span",{className:"search-result-score",children:[(I.score*100).toFixed(0),"%"]}),s.jsx("div",{className:"search-result-text",children:I.text}),s.jsx("div",{className:"search-result-source",children:I.source_name})]},I.id))]}),s.jsxs("div",{className:"add-sources-section",children:[s.jsxs("div",{className:"add-sources-header",onClick:()=>m(!f),children:[f?s.jsx(Ct,{size:16}):s.jsx(Nt,{size:16}),s.jsx("h4",{children:"Add Sources"})]}),f&&s.jsxs("div",{className:"add-sources-content",children:[s.jsxs("div",{className:"source-row",children:[s.jsx(Ul,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{className:"source-input",value:v,onChange:I=>w(I.target.value),onKeyDown:I=>I.key==="Enter"&&B(),placeholder:"Enter URL (e.g., llms.txt file)"}),s.jsxs("button",{className:"btn-primary",onClick:B,disabled:N||!v.trim(),children:[s.jsx(h0,{size:14}),N?"Loading...":"Add"]})]}),s.jsxs("div",{className:"source-row",children:[s.jsx(f0,{size:16,style:{color:"var(--text-tertiary)"}}),s.jsx("input",{ref:g,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:Y}),s.jsxs("button",{className:"btn-primary",onClick:()=>{var I;return(I=g.current)==null?void 0:I.click()},children:[s.jsx(Uo,{size:14}),"Upload File"]}),s.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&s.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:s.jsxs("button",{className:"clear-button",onClick:P,children:[s.jsx(Pe,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):b.length>0?s.jsx("div",{className:"skillset-detail",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(on,{size:48}),s.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const tn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0}},NS={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function ax(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function ES(){const{project:e}=Ze(),[t,n]=_.useState([]),[r,i]=_.useState(null),[o,a]=_.useState(null),[l,c]=_.useState(new Set),[u,d]=_.useState(new Map),[p,f]=_.useState(new Map),[m,v]=_.useState(new Set),[w,N]=_.useState(!1),[x,h]=_.useState(null),[y,L]=_.useState([]),[S,g]=_.useState(null),b=async()=>{if(e)try{const M=await Ve.get(`/projects/${e.id}/eval-history`);L(M.runs||[])}catch(M){console.warn("Failed to load eval history:",M)}},T=async(M,q=!0)=>{if(e)try{const K=await Ve.get(`/projects/${e.id}/eval-history/${M}`);g(K.run),i(null),a(null),q&&window.history.pushState({run:M},"",`?run=${M}`)}catch(K){console.warn("Failed to load history run:",K)}},R=(M,q=!0)=>{i(M),a(null),g(null),q&&M?window.history.pushState({set:M},"",`?set=${M}`):q&&window.history.pushState({},"",window.location.pathname)},E=(M,q,K=!0)=>{i(M),a(q),g(null),K&&q?window.history.pushState({set:M,case:q},"",`?set=${M}&case=${q}`):K&&M&&window.history.pushState({set:M},"",`?set=${M}`)},j=()=>{g(null),window.history.pushState({},"",window.location.pathname)},z=async M=>{if(e)try{await Ve.delete(`/projects/${e.id}/eval-history/${M}`),L(q=>q.filter(K=>K.id!==M)),(S==null?void 0:S.id)===M&&g(null)}catch(q){console.warn("Failed to delete history run:",q)}};_.useEffect(()=>{e!=null&&e.id&&(O(),b())},[e==null?void 0:e.id]),_.useEffect(()=>{if(!(e!=null&&e.id)||w)return;const M=()=>{const K=new URLSearchParams(window.location.search),X=K.get("set"),ae=K.get("case"),me=K.get("run");if(me){T(me,!1);return}if(X)i(X),a(ae),g(null),c(ve=>new Set([...ve,X]));else{if(!r&&!o&&!S)return;i(null),a(null),g(null)}};M();const q=()=>{M()};return window.addEventListener("popstate",q),()=>window.removeEventListener("popstate",q)},[e==null?void 0:e.id,w,t.length]);const O=async()=>{var M;if(e!=null&&e.id){N(!0),h(null);try{const q=await Ve.get(`/projects/${e.id}/eval-sets`);n(q.eval_sets||[]),((M=q.eval_sets)==null?void 0:M.length)>0&&c(new Set([q.eval_sets[0].id]))}catch(q){h(q.message||"Failed to load eval sets")}finally{N(!1)}}},U=t.find(M=>M.id===r),B=U==null?void 0:U.eval_cases.find(M=>M.id===o),Y=async()=>{if(e!=null&&e.id)try{const M=await Ve.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:NS});n(q=>[...q,M.eval_set]),i(M.eval_set.id),c(q=>new Set([...q,M.eval_set.id]))}catch(M){h(M.message||"Failed to create eval set")}},P=async M=>{if(e!=null&&e.id)try{const q=await Ve.post(`/projects/${e.id}/eval-sets/${M}/cases`,{name:"New Test Case",description:"",invocations:[{id:ax(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(K=>K.map(X=>X.id===M?{...X,eval_cases:[...X.eval_cases,q.eval_case]}:X)),i(M),a(q.eval_case.id)}catch(q){h(q.message||"Failed to create eval case")}},$=async(M,q,K)=>{if(e!=null&&e.id)try{const X=await Ve.put(`/projects/${e.id}/eval-sets/${M}/cases/${q}`,K);n(ae=>ae.map(me=>me.id===M?{...me,eval_cases:me.eval_cases.map(ve=>ve.id===q?X.eval_case:ve)}:me))}catch(X){h(X.message||"Failed to update eval case")}},I=async(M,q)=>{if(e!=null&&e.id)try{await Ve.delete(`/projects/${e.id}/eval-sets/${M}/cases/${q}`),n(K=>K.map(X=>X.id===M?{...X,eval_cases:X.eval_cases.filter(ae=>ae.id!==q)}:X)),o===q&&a(null)}catch(K){h(K.message||"Failed to delete eval case")}},k=async M=>{if(e!=null&&e.id)try{await Ve.delete(`/projects/${e.id}/eval-sets/${M}`),n(q=>q.filter(K=>K.id!==M)),r===M&&(i(null),a(null))}catch(q){h(q.message||"Failed to delete eval set")}},V=async M=>{if(e!=null&&e.id)try{const q=await Ve.get(`/projects/${e.id}/eval-sets/${M}/export`),K=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),X=URL.createObjectURL(K),ae=document.createElement("a");ae.href=X;const me=t.find(ve=>ve.id===M);ae.download=`${(me==null?void 0:me.name)||"eval-set"}.json`,document.body.appendChild(ae),ae.click(),document.body.removeChild(ae),URL.revokeObjectURL(X)}catch(q){h(q.message||"Failed to export eval set")}},J=async M=>{if(e!=null&&e.id)try{const q=await M.text(),K=JSON.parse(q),X=await Ve.post(`/projects/${e.id}/eval-sets/import`,K);n(ae=>[...ae,X.eval_set]),i(X.eval_set.id),c(ae=>new Set([...ae,X.eval_set.id]))}catch(q){h(q.message||"Failed to import eval set")}},C=_.useRef(null),oe=async(M,q)=>{if(e!=null&&e.id){v(K=>new Set([...K,q]));try{const K=await Ve.post(`/projects/${e.id}/eval-sets/${M}/cases/${q}/run`,{});d(X=>new Map(X).set(q,K.result))}catch(K){h(K.message||"Failed to run eval case")}finally{v(K=>{const X=new Set(K);return X.delete(q),X})}}},A=async M=>{if(!(e!=null&&e.id))return;const q=t.find(X=>X.id===M);if(!q)return;const K=q.eval_cases.map(X=>X.id);v(X=>new Set([...X,M,...K]));try{const X=await Ve.post(`/projects/${e.id}/eval-sets/${M}/run`,{});f(ae=>new Map(ae).set(M,X.result));for(const ae of X.result.case_results)d(me=>new Map(me).set(ae.eval_case_id,ae));try{await Ve.post(`/projects/${e.id}/eval-history`,X.result),b()}catch(ae){console.warn("Failed to save eval run to history:",ae)}}catch(X){h(X.message||"Failed to run eval set")}finally{v(X=>{const ae=new Set(X);return ae.delete(M),K.forEach(me=>ae.delete(me)),ae})}},Z=M=>{c(q=>{const K=new Set(q);return K.has(M)?K.delete(M):K.add(M),K})},F=M=>{let q=M.eval_cases.length,K=0,X=0,ae=0;for(const me of M.eval_cases){const ve=u.get(me.id);ve?ve.passed?K++:X++:ae++}return{total:q,passed:K,failed:X,pending:ae}},te=M=>M==null?"-":`${Math.round(M*100)}%`;return e?s.jsxs("div",{className:"eval-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("aside",{className:"eval-sidebar",children:[s.jsxs("div",{className:"sidebar-header",children:[s.jsx("h3",{children:"Evaluation Tests"}),s.jsxs("div",{className:"header-actions",children:[s.jsx("input",{type:"file",ref:C,accept:".json",style:{display:"none"},onChange:M=>{var K;const q=(K=M.target.files)==null?void 0:K[0];q&&(J(q),M.target.value="")}}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var M;return(M=C.current)==null?void 0:M.click()},title:"Import eval set from JSON",children:s.jsx(Uo,{size:14})}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:O,title:"Refresh",children:s.jsx(wn,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Y,title:"New eval set",children:[s.jsx(Me,{size:14}),"Set"]})]})]}),s.jsxs("div",{className:"eval-tree",children:[w&&s.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),x&&s.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:x}),!w&&t.length===0&&s.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[s.jsx(cu,{size:32}),s.jsxs("p",{children:["No evaluation sets yet.",s.jsx("br",{}),"Create one to get started."]})]}),t.map(M=>{const q=l.has(M.id),K=F(M),X=m.has(M.id);return s.jsxs("div",{className:"tree-item",children:[s.jsxs("div",{className:`tree-set ${r===M.id&&!o?"selected":""}`,onClick:()=>R(M.id),children:[s.jsx("button",{className:"expand-btn",onClick:ae=>{ae.stopPropagation(),Z(M.id)},children:M.eval_cases.length>0?q?s.jsx(Ct,{size:14}):s.jsx(Nt,{size:14}):s.jsx("span",{style:{width:14}})}),s.jsx(ng,{size:14,style:{color:"var(--accent-secondary)"}}),s.jsx("span",{className:"set-name",children:M.name}),K.total>0&&s.jsxs("span",{className:"set-stats",children:[K.passed>0&&s.jsx("span",{className:"stat-passed",children:K.passed}),K.failed>0&&s.jsx("span",{className:"stat-failed",children:K.failed}),K.pending>0&&s.jsx("span",{className:"stat-pending",children:K.pending})]}),s.jsx("button",{className:"run-btn",onClick:ae=>{ae.stopPropagation(),A(M.id)},title:"Run all tests in this set",disabled:X,children:X?s.jsx(ho,{size:12,className:"spinning"}):s.jsx(Mn,{size:12})})]}),q&&s.jsxs("div",{className:"tree-children",style:{paddingLeft:16},children:[M.eval_cases.map(ae=>{var ft;const me=u.get(ae.id),ve=m.has(ae.id);return s.jsxs("div",{className:`tree-case ${o===ae.id?"selected":""}`,onClick:()=>E(M.id,ae.id),children:[ve?s.jsx(ho,{size:14,className:"spinning",style:{color:"var(--warning)"}}):me?me.passed?s.jsx(sr,{size:14,style:{color:"var(--success)"}}):s.jsx(Vr,{size:14,style:{color:"var(--error)"}}):s.jsx(go,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{className:"case-name",children:ae.name}),me&&me.metric_results.length>0&&s.jsx("span",{style:{fontSize:11,color:me.passed?"var(--success)":"var(--error)"},children:te((ft=me.metric_results[0])==null?void 0:ft.score)}),s.jsx("button",{className:"run-btn",onClick:W=>{W.stopPropagation(),oe(M.id,ae.id)},disabled:ve,children:s.jsx(Mn,{size:12})})]},ae.id)}),s.jsxs("button",{className:"btn btn-secondary btn-sm",style:{marginTop:8,marginLeft:20},onClick:()=>P(M.id),children:[s.jsx(Me,{size:12}),"Add Test Case"]})]})]},M.id)})]}),s.jsxs("div",{className:"history-section",children:[s.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:s.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",y.length,")"]})}),s.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:y.length===0?s.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...y].sort((M,q)=>(q.started_at||0)-(M.started_at||0)).map(M=>{const q=M.passed_cases===M.total_cases;return s.jsx("div",{className:`history-item ${(S==null?void 0:S.id)===M.id?"selected":""}`,onClick:()=>T(M.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(S==null?void 0:S.id)===M.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[q?s.jsx(sr,{size:14,style:{color:"var(--success)",flexShrink:0}}):s.jsx(Vr,{size:14,style:{color:"var(--error)",flexShrink:0}}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:500},children:M.eval_set_name||"Unnamed"}),s.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(M.started_at*1e3).toLocaleString()})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[s.jsxs("span",{style:{color:q?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[M.passed_cases,"/",M.total_cases]}),s.jsx("button",{className:"btn btn-icon",onClick:K=>{K.stopPropagation(),z(M.id)},title:"Delete run",style:{padding:2},children:s.jsx(Pe,{size:12})})]})]})},M.id)})})]})]}),s.jsx("div",{className:"eval-editor",children:S?s.jsx(TS,{run:S,onClose:j}):B?s.jsx(PS,{evalCase:B,evalSetId:r,projectId:e.id,result:u.get(B.id),isRunning:m.has(B.id),onUpdate:M=>$(r,B.id,M),onDelete:()=>I(r,B.id),onRun:()=>oe(r,B.id)}):U?s.jsx(LS,{evalSet:U,projectId:e.id,result:p.get(U.id),isRunning:m.has(U.id),caseResults:u,onUpdate:async M=>{try{const q=await Ve.put(`/projects/${e.id}/eval-sets/${U.id}`,M);n(K=>K.map(X=>X.id===U.id?q.eval_set:X))}catch(q){h(q.message)}},onDelete:()=>k(U.id),onRun:()=>A(U.id),onExport:()=>V(U.id)}):s.jsx("div",{className:"editor-content",children:s.jsxs("div",{className:"empty-state",children:[s.jsx(go,{size:48}),s.jsxs("p",{children:["Select a test case to edit",s.jsx("br",{}),"or create a new one"]})]})})})]}):null}function zS({value:e,onChange:t}){var a,l;const{project:n}=Ze(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,o=r.find(c=>c.id===i);return s.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[s.jsx("option",{value:"",children:o?`App Default (${o.model_name})`:"App Default"}),r.map(c=>s.jsx("option",{value:c.model_name,children:c.model_name},c.id)),s.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),s.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),s.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function TS({run:e,onClose:t}){var m;const{project:n}=Ze(),[r,i]=_.useState(!0),[o,a]=_.useState(new Set),l=e.case_results||[],c=l.filter(v=>v.passed).length,u=l.filter(v=>!v.passed).length,d=r?l.filter(v=>!v.passed):l,p=v=>{a(w=>{const N=new Set(w);return N.has(v)?N.delete(v):N.add(v),N})},f=v=>{v&&n&&(window.location.href=`/project/${n.id}/run?session=${v}`)};return s.jsxs("div",{className:"test-result-viewer",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"result-header",children:[s.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),s.jsx("div",{style:{display:"flex",gap:8},children:s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const v=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(v)}},title:"Copy link to this run",children:s.jsx(ou,{size:14})})})]}),s.jsxs("div",{className:"result-summary",children:[s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Status"}),s.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Passed"}),s.jsx("span",{className:"value passed",children:c})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Failed"}),s.jsx("span",{className:"value failed",children:u})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Total Cases"}),s.jsx("span",{className:"value",children:l.length})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Duration"}),s.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Tokens"}),s.jsx("span",{className:"value",children:((m=e.total_tokens)==null?void 0:m.toLocaleString())||"-"})]}),s.jsxs("div",{className:"summary-stat",children:[s.jsx("span",{className:"label",children:"Run Time"}),s.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),s.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[s.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[s.jsx("input",{type:"checkbox",checked:r,onChange:v=>i(v.target.checked)}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),s.jsxs("div",{className:"result-cases",children:[d.map((v,w)=>{var j,z,O,U,B,Y;const N=v.case_id||`case-${w}`,x=o.has(N),h=((j=v.metric_results)==null?void 0:j.filter(P=>!P.passed||P.error))||[],y=((z=v.metric_results)==null?void 0:z.filter(P=>P.passed&&!P.error))||[],L=((O=v.rubric_results)==null?void 0:O.filter(P=>!P.passed||P.error))||[],S=((U=v.rubric_results)==null?void 0:U.filter(P=>P.passed&&!P.error))||[],g=x?v.metric_results:h,b=x?v.rubric_results:L,T=x?v.invocation_results:(B=v.invocation_results)==null?void 0:B.filter(P=>{var $;return(($=P.metric_results)==null?void 0:$.some(I=>!I.passed))||P.error}),R=y.length+S.length,E=h.length+L.length;return s.jsxs("div",{className:"result-case",children:[s.jsxs("div",{className:"result-case-header",onClick:()=>p(N),style:{cursor:"pointer"},children:[s.jsxs("div",{className:"result-case-name",children:[s.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:x?"▼":"▶"}),v.passed?s.jsx(sr,{size:16,style:{color:"var(--success)"}}):s.jsx(Vr,{size:16,style:{color:"var(--error)"}}),v.case_name||`Case ${w+1}`,s.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[E>0&&s.jsxs("span",{style:{color:"var(--error)"},children:[E," failed"]}),E>0&&R>0&&" · ",R>0&&s.jsxs("span",{style:{color:"var(--success)"},children:[R," passed"]})]})]}),s.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[v.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:P=>{P.stopPropagation(),f(v.session_id)},title:"View session in Run panel",children:[s.jsx(tg,{size:12})," View Session"]}),s.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:v.duration_ms?`${(v.duration_ms/1e3).toFixed(2)}s`:""})]})]}),s.jsxs("div",{className:"result-case-details",children:[(g==null?void 0:g.length)>0&&s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[g.map((P,$)=>s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:P.error?"rgba(255, 193, 7, 0.1)":P.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${P.error?"var(--warning)":P.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[s.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:P.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),P.error?s.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):s.jsxs(s.Fragment,{children:[s.jsx("span",{style:{fontSize:14,fontWeight:600,color:P.passed?"var(--success)":"var(--error)"},children:P.score!==null&&P.score!==void 0?P.score.toFixed(2):P.passed?"✓":"✗"}),s.jsxs("span",{style:{fontSize:9,color:"var(--text-muted)"},children:["≥",P.threshold]})]})]},$)),!x&&y.length>0&&s.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",y.length," passed"]})]}),(b==null?void 0:b.length)>0&&s.jsxs("div",{style:{marginTop:8},children:[s.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),b.map((P,$)=>s.jsxs("div",{className:"metric-row",children:[s.jsx("span",{className:"metric-name",style:{flex:1},children:P.rubric}),s.jsx("span",{className:`metric-value ${P.passed?"passed":"failed"}`,children:P.passed?"✓ Pass":"✗ Fail"})]},$)),!x&&S.length>0&&s.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",S.length," passed rubric",S.length>1?"s":""]})]}),(T==null?void 0:T.length)>0&&s.jsxs("div",{className:"invocation-summary",children:[s.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",T.length,!x&&((Y=v.invocation_results)==null?void 0:Y.length)>T.length?` of ${v.invocation_results.length}`:"",")"]}),T.map((P,$)=>s.jsxs("div",{className:"invocation-item",children:[s.jsxs("div",{className:"invocation-query",children:["Turn ",P.invocation_id||$+1,": ",P.user_message||"(no message)"]}),P.actual_response&&s.jsxs("div",{className:"invocation-response",children:["Response: ",P.actual_response.substring(0,200),P.actual_response.length>200?"...":""]})]},$))]}),v.error&&s.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:v.error})]})]},N)}),l.length===0&&s.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function PS({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:o,onDelete:a,onRun:l}){var S;const{project:c}=Ze(),[u,d]=_.useState(e),[p,f]=_.useState("assertions");_.useEffect(()=>{d(e)},[e.id]);const m=_.useCallback(g=>{d(b=>({...b,...g})),o(g)},[o]),v=()=>{const g={id:ax(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};m({invocations:[...u.invocations,g]})},w=(g,b)=>{const T=[...u.invocations];T[g]={...T[g],...b},m({invocations:T})},N=g=>{m({invocations:u.invocations.filter((b,T)=>T!==g)})},x=g=>{const b=[...u.invocations];b[g]={...b[g],expected_tool_calls:[...b[g].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},m({invocations:b})},h=(g,b,T)=>{const R=[...u.invocations],E=[...R[g].expected_tool_calls];E[b]={...E[b],...T},R[g]={...R[g],expected_tool_calls:E},m({invocations:R})},y=(g,b)=>{const T=[...u.invocations];T[g]={...T[g],expected_tool_calls:T[g].expected_tool_calls.filter((R,E)=>E!==b)},m({invocations:T})},L=g=>g==null?"-":`${Math.round(g*100)}%`;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(go,{size:20,style:{color:"var(--accent-primary)"}}),s.jsx("input",{type:"text",value:u.name,onChange:g=>m({name:g.target.value}),placeholder:"Test case name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const g=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(g)},title:"Copy link to this test case",children:s.jsx(ou,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?s.jsx(ho,{size:14,className:"spinning"}):s.jsx(Mn,{size:14}),"Run"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(Pe,{size:14})})]}),s.jsxs("div",{className:"tabs",children:[s.jsxs("div",{className:`tab ${p==="assertions"?"active":""}`,onClick:()=>f("assertions"),children:[s.jsx(xo,{size:14,style:{marginRight:6}}),"Assertions (",u.invocations.length,")"]}),s.jsxs("div",{className:`tab ${p==="rubrics"?"active":""}`,onClick:()=>f("rubrics"),children:[s.jsx(cu,{size:14,style:{marginRight:6}}),"LLM Judges"]}),s.jsxs("div",{className:`tab ${p==="docs"?"active":""}`,onClick:()=>f("docs"),children:[s.jsx(mo,{size:14,style:{marginRight:6}}),"Docs"]})]}),s.jsxs("div",{className:"editor-content",children:[p==="assertions"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),s.jsxs("select",{value:u.target_agent||"",onChange:g=>m({target_agent:g.target.value||void 0}),style:{width:"100%"},children:[s.jsx("option",{value:"",children:"root_agent"}),(S=c==null?void 0:c.agents)==null?void 0:S.map(g=>s.jsx("option",{value:g.name,children:g.name},g.name))]})]}),s.jsxs("div",{style:{flex:1},children:[s.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),s.jsx("input",{type:"text",value:u.tags.join(", "),onChange:g=>m({tags:g.target.value.split(",").map(b=>b.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:u.description,onChange:g=>m({description:g.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["session_input ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(an,{height:"100%",defaultLanguage:"json",value:(()=>{var b;if((!u.initial_state||Object.keys(u.initial_state).length===0)&&((b=c==null?void 0:c.app)!=null&&b.state_keys)&&c.app.state_keys.length>0){const T={};return c.app.state_keys.forEach(R=>{R.default_value!==void 0?T[R.name]=R.default_value:T[R.name]=R.type==="string"?"":R.type==="number"?0:R.type==="boolean"?!1:R.type==="array"?[]:{}}),JSON.stringify(T,null,2)}return JSON.stringify(u.initial_state,null,2)})(),onChange:g=>{try{g&&m({initial_state:JSON.parse(g)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(xo,{size:14}),"Conversation Turns"]}),u.invocations.map((g,b)=>s.jsxs("div",{className:"invocation-card",children:[s.jsxs("div",{className:"invocation-number",children:[s.jsx("span",{children:b+1}),u.invocations.length>1&&s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>N(b),style:{padding:4},children:s.jsx(Pe,{size:10})})]}),s.jsxs("div",{className:"invocation-content",children:[s.jsxs("div",{className:"invocation-row",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("label",{children:"User Query"}),s.jsx("textarea",{value:g.user_message,onChange:T=>w(b,{user_message:T.target.value}),placeholder:"The message to send to the agent..."})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("label",{children:["Expected Response ",s.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),s.jsx("textarea",{value:g.expected_response||"",onChange:T=>w(b,{expected_response:T.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),g.expected_tool_calls.map((T,R)=>s.jsxs("div",{className:"tool-call-compact",children:[s.jsx("input",{type:"text",value:T.name,onChange:E=>h(b,R,{name:E.target.value}),placeholder:"tool_name",className:"tool-name-input"}),s.jsxs("div",{className:"pillbox-toggle",children:[s.jsx("button",{className:`pill ${T.args_match_mode==="subset"?"active":""}`,onClick:()=>h(b,R,{args_match_mode:"subset"}),children:"Partial"}),s.jsx("button",{className:`pill ${T.args_match_mode==="exact"?"active":""}`,onClick:()=>h(b,R,{args_match_mode:"exact"}),children:"Exact"})]}),s.jsx("div",{className:"tool-args-editor",children:s.jsx(an,{height:"22px",defaultLanguage:"json",value:JSON.stringify(T.args||{}),onChange:E=>{try{E&&h(b,R,{args:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>y(b,R),style:{padding:"4px 6px"},children:s.jsx(Pe,{size:10})})]},R)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(b),style:{marginTop:4},children:[s.jsx(Me,{size:12})," Assert Tool Call"]})]})]},g.id)),s.jsxs("button",{className:"btn btn-secondary",onClick:v,children:[s.jsx(Me,{size:14})," Add Turn"]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(sr,{size:14,style:{marginRight:6}}),"final_session_state ",s.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),s.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:s.jsx(an,{height:"100%",defaultLanguage:"json",value:u.expected_final_state?JSON.stringify(u.expected_final_state,null,2):"{}",onChange:g=>{if(!g||g==="{}")m({expected_final_state:void 0});else try{m({expected_final_state:JSON.parse(g)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),p==="rubrics"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:g,label:b,default:T,max:R})=>{const E=(u.enabled_metrics||[]).find(z=>z.metric===g),j=(E==null?void 0:E.threshold)??T;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:!!E,onChange:z=>{const O=[...u.enabled_metrics||[]];if(z.target.checked)O.push({metric:g,threshold:T});else{const U=O.findIndex(B=>B.metric===g);U!==-1&&O.splice(U,1)}m({enabled_metrics:O})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsx("span",{style:{fontSize:12,opacity:E?1:.5,minWidth:100},children:b}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:E?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:R===5?1:0,max:R,step:.1,value:j,disabled:!E,onChange:z=>{const O=[...u.enabled_metrics||[]],U=O.findIndex(B=>B.metric===g);U!==-1&&(O[U]={...O[U],threshold:parseFloat(z.target.value)||0},m({enabled_metrics:O}))},style:{width:60,textAlign:"center",opacity:E?1:.3,padding:"2px 4px",fontSize:11}})]},g)})}),s.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Custom Rubrics"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),u.rubrics.map((g,b)=>s.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[s.jsx("input",{type:"text",value:g.rubric,onChange:T=>{const R=[...u.rubrics];R[b]={rubric:T.target.value},m({rubrics:R})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>m({rubrics:u.rubrics.filter((T,R)=>R!==b)}),children:s.jsx(Pe,{size:12})})]},b)),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m({rubrics:[...u.rubrics,{rubric:""}]}),children:[s.jsx(Me,{size:12})," Add Rubric"]})]})]}),p==="docs"&&s.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[s.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),s.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),s.jsxs("p",{children:["Each test case simulates a ",s.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Response"})," = the agent's ",s.jsx("em",{children:"final text reply"})," for that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Session State"})," = test the ",s.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),s.jsxs("p",{children:["The ",s.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",s.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{style:{marginBottom:8},children:s.jsx("strong",{children:"During one turn, an agent may:"})}),s.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[s.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),s.jsx("li",{children:"Call multiple tools"}),s.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),s.jsxs("li",{children:["Finally send a ",s.jsx("em",{children:"concluding response"})]})]}),s.jsxs("p",{children:["Only the ",s.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"response_match_score"})," uses ",s.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),s.jsx("li",{children:"Calculates word overlap (not exact string match)"}),s.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),s.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[s.jsx("p",{children:s.jsx("strong",{children:"Example:"})}),s.jsxs("p",{children:["Expected: ",s.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),s.jsxs("p",{children:["Actual: ",s.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),s.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),s.jsxs("p",{style:{marginTop:8},children:["A threshold of ",s.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),s.jsxs("p",{children:["The ",s.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),s.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),s.jsxs("p",{children:[s.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:"Set user preferences or context"}),s.jsx("li",{children:"Simulate a specific scenario"}),s.jsx("li",{children:"Test state-dependent behavior"})]}),s.jsxs("p",{style:{marginTop:12},children:[s.jsx("strong",{children:"Expected Final State"})," — Verified at the ",s.jsx("em",{children:"very end"})," of the test case, ",s.jsx("strong",{children:"after ALL invocations complete"}),"."]}),s.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:s.jsxs("p",{style:{margin:0},children:[s.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),s.jsxs("p",{children:["By default, tests run against the ",s.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsxs("li",{children:[s.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),s.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),s.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[s.jsx("li",{children:'"Does the response mention the product price?"'}),s.jsx("li",{children:'"Is the tone professional and helpful?"'}),s.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),s.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),s.jsxs("section",{style:{marginBottom:24},children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),s.jsx("tbody",{children:Object.keys(tn).map(g=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:g}),s.jsx("td",{style:{padding:"8px 4px"},children:tn[g].requiresJudge?s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):s.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),s.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:tn[g].description})]},g))})]})]}),s.jsxs("section",{children:[s.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),s.jsxs("ul",{style:{marginLeft:20},children:[s.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),s.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),s.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),s.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),s.jsx("li",{children:"Use tags to organize tests by feature or priority"}),s.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]})]}),r&&s.jsxs("div",{className:"result-panel",children:[s.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?s.jsxs(s.Fragment,{children:[s.jsx(sr,{size:18})," ",s.jsx("strong",{children:"Passed"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Vr,{size:18})," ",s.jsx("strong",{children:"Failed"})]}),s.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,s.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${c==null?void 0:c.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[s.jsx(tg,{size:12}),"View Session"]})]})]}),s.jsx("div",{className:"result-scores",children:r.metric_results.map((g,b)=>{var T;return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${g.passed?"passed":"failed"}`,children:L(g.score)}),s.jsx("div",{className:"score-label",children:((T=tn[g.metric])==null?void 0:T.name)||g.metric}),g.error&&s.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:g.error})]},b)})}),r.rubric_results&&r.rubric_results.length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((g,b)=>s.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:g.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${g.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[s.jsx("span",{style:{fontSize:16,color:g.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:g.passed?"✓":"✗"}),s.jsxs("div",{style:{flex:1},children:[s.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:g.rubric}),g.error&&s.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",g.error]})]})]},b))})]}),r.invocation_results.map((g,b)=>s.jsxs("div",{className:"result-details",children:[s.jsxs("h5",{children:["Turn ",b+1,": ",g.user_message.length>50?g.user_message.slice(0,50)+"…":g.user_message]}),g.metric_results.length>0&&s.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:g.metric_results.map((T,R)=>{var E;return s.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:T.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:T.passed?"var(--success)":"var(--error)"},children:[((E=tn[T.metric])==null?void 0:E.name)||T.metric,": ",L(T.score)]},R)})}),s.jsxs("div",{className:"detail-box",children:[s.jsx("strong",{children:"Actual Response:"}),`
`,g.actual_response||"(no response)",`

`,g.actual_tool_calls.length>0&&s.jsxs(s.Fragment,{children:[s.jsx("strong",{children:"Tool Calls:"}),`
`,g.actual_tool_calls.map((T,R)=>`  ${R+1}. ${T.name}(${JSON.stringify(T.args)})
`).join("")]})]})]},b)),r.error&&s.jsxs("div",{className:"result-details",children:[s.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),s.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function LS({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:o,onDelete:a,onRun:l,onExport:c}){var m,v,w;const[u,d]=_.useState(e.name);_.useEffect(()=>{d(e.name)},[e.id]);const p=_.useCallback(()=>{u!==e.name&&o({name:u})},[u,e.name,o]),f=N=>N==null?"-":`${Math.round(N*100)}%`;return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"editor-header",children:[s.jsx(ng,{size:20,style:{color:"var(--accent-secondary)"}}),s.jsx("input",{type:"text",value:u,onChange:N=>d(N.target.value),onBlur:p,placeholder:"Eval set name"}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const N=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(N)},title:"Copy link to this eval set",children:s.jsx(ou,{size:14})}),s.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:s.jsx(Bo,{size:14})}),s.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?s.jsx(ho,{size:14,className:"spinning"}):s.jsx(Mn,{size:14}),"Run All"]}),s.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:s.jsx(Pe,{size:14})})]}),s.jsxs("div",{className:"editor-content",children:[s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"Description"}),s.jsx("textarea",{value:e.description,onChange:N=>o({description:N.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),s.jsxs("div",{className:"form-section",children:[s.jsx("h4",{children:"LLM Judge Model"}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),s.jsx(zS,{value:((m=e.eval_config)==null?void 0:m.judge_model)||"",onChange:N=>o({eval_config:{...e.eval_config,judge_model:N}})})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(sg,{size:14})," Evaluation Metrics"]}),s.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(tn).map(N=>{var S,g,b;const x=tn[N],h=(g=(S=e.eval_config)==null?void 0:S.metrics)==null?void 0:g.find(T=>T.metric===N),y=(h==null?void 0:h.enabled)??!1,L=((b=h==null?void 0:h.criterion)==null?void 0:b.threshold)??.7;return s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[s.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[s.jsx("input",{type:"checkbox",checked:y,onChange:T=>{var j;const R=[...((j=e.eval_config)==null?void 0:j.metrics)||[]],E=R.findIndex(z=>z.metric===N);T.target.checked?E===-1?R.push({metric:N,enabled:!0,criterion:{threshold:.7}}):R[E]={...R[E],enabled:!0}:E!==-1&&(R[E]={...R[E],enabled:!1}),o({eval_config:{...e.eval_config,metrics:R}})}}),s.jsx("span",{className:"toggle-slider"})]}),s.jsxs("span",{style:{fontSize:12,opacity:y?1:.5,minWidth:140,fontWeight:y?500:400},children:[x.name,x.requiresJudge&&s.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),s.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:y?1:.4},children:"≥"}),s.jsx("input",{type:"number",min:0,max:1,step:.1,value:L,disabled:!y,onChange:T=>{var j;const R=[...((j=e.eval_config)==null?void 0:j.metrics)||[]],E=R.findIndex(z=>z.metric===N);E!==-1&&(R[E]={...R[E],criterion:{...R[E].criterion,threshold:parseFloat(T.target.value)||.7}},o({eval_config:{...e.eval_config,metrics:R}}))},style:{width:60,textAlign:"center",opacity:y?1:.3,padding:"2px 4px",fontSize:11}})]},N)}),s.jsxs("div",{className:"form-row",style:{marginTop:16},children:[s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Default Trajectory Match Type"}),s.jsxs("select",{value:((v=e.eval_config)==null?void 0:v.default_trajectory_match_type)||"in_order",onChange:N=>o({eval_config:{...e.eval_config,default_trajectory_match_type:N.target.value}}),children:[s.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),s.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),s.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),s.jsxs("div",{className:"form-field",children:[s.jsx("label",{children:"Number of Runs"}),s.jsx("input",{type:"number",min:1,max:10,value:((w=e.eval_config)==null?void 0:w.num_runs)||1,onChange:N=>o({eval_config:{...e.eval_config,num_runs:parseInt(N.target.value)||1}})}),s.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:[s.jsx(y0,{size:14})," Coverage Summary"]}),n?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"result-scores",children:[s.jsxs("div",{className:"score-card",children:[s.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),s.jsx("div",{className:"score-label",children:"Cases Passed"})]}),s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:f(n.overall_pass_rate)}),s.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([N,x])=>{var h;return s.jsxs("div",{className:"score-card",children:[s.jsx("div",{className:"score-value",children:f(x)}),s.jsxs("div",{className:"score-label",children:["Avg ",((h=tn[N])==null?void 0:h.name)||N]})]},N)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([N,x])=>{var h;return s.jsxs("div",{style:{marginBottom:8},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[s.jsx("span",{children:((h=tn[N])==null?void 0:h.name)||N}),s.jsx("span",{children:f(x)})]}),s.jsx("div",{className:"coverage-bar",children:s.jsx("div",{className:`coverage-fill ${x>=.8?"passed":"failed"}`,style:{width:`${x*100}%`}})})]},N)})]}),s.jsxs("div",{style:{marginTop:16},children:[s.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),s.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[s.jsx("thead",{children:s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),s.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),s.jsx("tbody",{children:n.case_results.map(N=>s.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[s.jsx("td",{style:{padding:"8px 4px"},children:N.eval_case_name}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:N.metric_results.map((x,h)=>s.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:x.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:x.passed?"var(--success)":"var(--error)"},children:f(x.score)},h))}),s.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:N.passed?s.jsx(sr,{size:14,style:{color:"var(--success)"}}):N.error?s.jsx(mo,{size:14,style:{color:"var(--warning)"}}):s.jsx(Vr,{size:14,style:{color:"var(--error)"}})})]},N.eval_case_id))})]})]})]}):s.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[s.jsx(cu,{size:32,style:{marginBottom:8,opacity:.3}}),s.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),s.jsxs("div",{className:"form-section",children:[s.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?s.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):s.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(N=>{const x=i.get(N.id);return s.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[x?x.passed?s.jsx(sr,{size:14,style:{color:"var(--success)"}}):s.jsx(Vr,{size:14,style:{color:"var(--error)"}}):s.jsx(go,{size:14,style:{color:"var(--text-muted)"}}),s.jsx("span",{style:{flex:1},children:N.name}),s.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[N.invocations.length," turn(s)"]})]},N.id)})})]})]})]})}function AS(){const{project:e,setProject:t}=Ze(),[n,r]=_.useState(""),[i,o]=_.useState(!0),[a,l]=_.useState(!1),[c,u]=_.useState(null),[d,p]=_.useState(!1);if(!e)return null;_.useEffect(()=>{f()},[e.id]);async function f(){o(!0),u(null);try{const h=await Dh(e.id);r(h),l(!1)}catch(h){u(h.message)}finally{o(!1)}}function m(h){h!==void 0&&(r(h),l(!0),u(null))}async function v(){o(!0),u(null);try{const h=await Fh(e.id,n);t(h),l(!1)}catch(h){u(h.message)}finally{o(!1)}}function w(){navigator.clipboard.writeText(n),p(!0),setTimeout(()=>p(!1),2e3)}function N(){const h=new Blob([n],{type:"text/yaml"}),y=URL.createObjectURL(h),L=document.createElement("a");L.href=y,L.download=`${e.name}.yaml`,L.click(),URL.revokeObjectURL(y)}function x(){const h=document.createElement("input");h.type="file",h.accept=".yaml,.yml",h.onchange=async y=>{var g;const L=(g=y.target.files)==null?void 0:g[0];if(!L)return;const S=await L.text();r(S),l(!0)},h.click()}return s.jsxs("div",{className:"yaml-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"yaml-header",children:[s.jsxs("div",{className:"yaml-title",children:[s.jsx("h3",{children:"Project Configuration"}),a&&s.jsxs("span",{className:"status-badge warning",children:[s.jsx(mo,{size:12}),"Unsaved changes"]}),c&&s.jsxs("span",{className:"status-badge error",children:[s.jsx(mo,{size:12}),c]}),d&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(Zh,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"yaml-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:w,title:"Copy to clipboard",children:[s.jsx(eg,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:N,title:"Download YAML",children:[s.jsx(Bo,{size:14}),"Download"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,title:"Upload YAML",children:[s.jsx(Uo,{size:14}),"Upload"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:f,title:"Reload from server",children:[s.jsx(wn,{size:14}),"Reload"]}),s.jsx("button",{className:"btn btn-primary btn-sm",onClick:v,disabled:!a||i,children:"Apply Changes"})]})]}),s.jsx("div",{className:"yaml-editor",children:s.jsx(an,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:m,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"yaml-info",children:[s.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),s.jsxs("p",{children:["You can edit the YAML directly, then click ",s.jsx("code",{children:"Apply Changes"})," to update the project. Use ",s.jsx("code",{children:"Download"})," to save a backup or ",s.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function tf(e){return e.replace(/\\/g,"\\\\").replace(/"""/g,'\\"\\"\\"')}function RS(e,t="model"){if(!e)return"";const n=[`model="${e.model_name}"`];return e.api_base&&n.push(`api_base="${e.api_base}"`),e.temperature!=null&&n.push(`temperature=${e.temperature}`),e.max_output_tokens!=null&&n.push(`max_output_tokens=${e.max_output_tokens}`),e.top_p!=null&&n.push(`top_p=${e.top_p}`),e.top_k!=null&&n.push(`top_k=${e.top_k}`),e.provider==="litellm"?`${t} = LiteLlm(
    ${n.join(`,
    `)}
)`:e.provider==="anthropic"?`${t} = Claude(
    ${n.join(`,
    `)}
)`:`${t} = "${e.model_name}"  # Gemini model`}function IS(e,t){var n,r;if(e.type==="builtin")return e.name||"";if(e.type==="function")return e.name||"custom_tool";if(e.type==="agent"){const i=t.agents.find(o=>o.id===e.agent_id);return i?`AgentTool(agent=${i.name}_agent)`:"AgentTool(agent=sub_agent)"}else{if(e.type==="mcp")return(n=e.server)!=null&&n.name?`${e.server.name}_tools`:"";if(e.type==="skillset"){const i=e.skillset_id,o=(r=t.skillsets)==null?void 0:r.find(a=>a.id===i);return o?`${o.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset`:""}}return""}function MS(e,t,n){const r=n.get(e.id)||`${e.name}_agent`;if(e.type==="LlmAgent"){const i=e,o=[`name="${e.name}"`];i.model&&o.push(`model=${e.name}_model`),i.instruction&&o.push(`instruction="""${tf(i.instruction)}"""`),i.description&&o.push(`description="${tf(i.description)}"`),i.output_key&&o.push(`output_key="${i.output_key}"`);const a=i.tools.map(c=>IS(c,t)).filter(c=>c&&!c.startsWith("#"));if(a.length>0&&o.push(`tools=[${a.join(", ")}]`),i.sub_agents&&i.sub_agents.length>0){const c=i.sub_agents.map(u=>n.get(u)||"sub_agent").join(", ");o.push(`sub_agents=[${c}]`)}i.include_contents==="none"&&o.push('include_contents="none"'),i.disallow_transfer_to_parent&&o.push("disallow_transfer_to_parent=True"),i.disallow_transfer_to_peers&&o.push("disallow_transfer_to_peers=True");const l={before_agent_callbacks:"before_agent_callback",after_agent_callbacks:"after_agent_callback",before_model_callbacks:"before_model_callback",after_model_callbacks:"after_model_callback",before_tool_callbacks:"before_tool_callback",after_tool_callbacks:"after_tool_callback"};for(const[c,u]of Object.entries(l)){const d=i[c]||[];if(d.length>0){const p=d.map(f=>{const m=t.custom_callbacks.find(v=>v.module_path===f.module_path);return m?`"${f.module_path}.${m.name}"`:`"${f.module_path}"`}).join(", ");if(d.length===1){const f=t.custom_callbacks.find(v=>v.module_path===d[0].module_path),m=f?`${d[0].module_path}.${f.name}`:d[0].module_path;o.push(`${u}="${m}"`)}else o.push(`${u}=[${p}]`)}}return`${r} = Agent(
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
)`}return`# Unknown agent type: ${e.type}`}function OS(e){const t=[];return e.connection_type==="stdio"?(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=StdioConnectionParams("),t.push("        server_params=StdioServerParameters("),e.command&&t.push(`            command="${e.command}",`),e.args.length>0&&t.push(`            args=${JSON.stringify(e.args)},`),Object.keys(e.env).length>0&&t.push(`            env=${JSON.stringify(e.env)},`),t.push("        ),"),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")):e.connection_type==="sse"&&(t.push(`${e.name}_tools = McpToolset(`),t.push("    connection_params=SseConnectionParams("),e.url&&t.push(`        url="${e.url}",`),e.timeout&&t.push(`        timeout=${e.timeout},`),t.push("    ),"),t.push(")")),t.join(`
`)}function $S(e,t){const n=[];return n.push(`# SkillSet: ${e.name}`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager = KnowledgeServiceManager()`),n.push(`${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_skillset = SkillSet(`),n.push(`    skillset_id="${e.id}",`),n.push(`    project_id="${t.id}",`),n.push(`    manager=${e.name.replace(/[^a-zA-Z0-9_]/g,"_")}_manager,`),e.embedding_model?n.push(`    model_name="${e.embedding_model}",`):n.push('    model_name="text-embedding-004",'),n.push(`    search_enabled=${e.search_enabled?"True":"False"},`),n.push(`    preload_enabled=${e.preload_enabled?"True":"False"},`),e.preload_top_k&&n.push(`    preload_top_k=${e.preload_top_k},`),e.preload_min_score&&n.push(`    preload_min_score=${e.preload_min_score},`),n.push(")"),n.join(`
`)}function DS(e){const t=[];t.push('"""'),t.push(`${e.name} - Generated by ADK Playground`),e.description&&(t.push(""),t.push(e.description)),t.push('"""'),t.push("");const n=e.app.env_vars||{},r=Object.keys(n);r.length>0&&(t.push("import os"),t.push(""),t.push("# Environment Variables"),t.push("# Set these before running, or uncomment and add values:"),r.forEach(b=>{const T=n[b];if(T){const E=b.toLowerCase().includes("key")||b.toLowerCase().includes("secret")?"***":T;t.push(`os.environ["${b}"] = "${E}"  # Set your ${b}`)}else t.push(`# os.environ["${b}"] = ""  # TODO: Set your ${b}`)}),t.push(""));const i=new Set;i.add("from google.adk.agents import Agent");const o=e.agents.some(b=>b.type==="SequentialAgent"),a=e.agents.some(b=>b.type==="LoopAgent"),l=e.agents.some(b=>b.type==="ParallelAgent");o&&i.add("from google.adk.agents import SequentialAgent"),a&&i.add("from google.adk.agents import LoopAgent"),l&&i.add("from google.adk.agents import ParallelAgent"),e.agents.some(b=>{var T;return b.type==="LlmAgent"&&((T=b.model)==null?void 0:T.provider)==="litellm"})&&i.add("from google.adk.models.lite_llm import LiteLlm"),e.agents.some(b=>b.type==="LlmAgent"&&b.tools.some(T=>T.type==="agent"))&&i.add("from google.adk.tools import AgentTool");const d=new Set;if(e.agents.forEach(b=>{b.type==="LlmAgent"&&b.tools.forEach(T=>{T.type==="builtin"&&T.name&&d.add(T.name)})}),d.has("exit_loop")&&i.add("from google.adk.tools import exit_loop"),d.has("google_search")&&i.add("from google.adk.tools import google_search"),e.mcp_servers.length>0){i.add("from google.adk.tools.mcp_tool.mcp_toolset import McpToolset");const b=e.mcp_servers.some(R=>R.connection_type==="stdio"),T=e.mcp_servers.some(R=>R.connection_type==="sse");b&&(i.add("from google.adk.tools.mcp_tool.mcp_session_manager import StdioConnectionParams"),i.add("from mcp import StdioServerParameters")),T&&i.add("from google.adk.tools.mcp_tool.mcp_session_manager import SseConnectionParams")}e.skillsets&&e.skillsets.length>0;const f=new Set;e.agents.forEach(b=>{"tools"in b&&b.tools&&b.tools.forEach(T=>{T.type==="skillset"&&f.add(T.skillset_id)})}),f.size>0&&(i.add("from skillset import SkillSet"),i.add("from knowledge_service import KnowledgeServiceManager")),i.add("from google.adk.apps import App");const m=e.app.plugins.length>0;m&&e.app.plugins.forEach(b=>{b.type==="ReflectAndRetryToolPlugin"&&i.add("from google.adk.plugins import ReflectAndRetryToolPlugin")});const v=Array.from(i).sort();t.push(...v),t.push(""),t.push("");const w=new Map;e.agents.forEach(b=>{const T=b.name.endsWith("_agent")?b.name:`${b.name}_agent`;w.set(b.id,T)});const N=[],x=new Set;function h(b){if(x.has(b))return;const T=e.agents.find(R=>R.id===b);T&&(T.sub_agents.forEach(R=>h(R)),x.add(b),N.push(T))}e.agents.forEach(b=>h(b.id));const y=new Map;N.forEach(b=>{b.type==="LlmAgent"&&b.tools.forEach(T=>{T.type==="mcp"&&T.server&&y.set(T.server.name,T.server)})}),y.size>0&&(t.push("# MCP Server Toolsets"),y.forEach(b=>{t.push(OS(b)),t.push("")}),t.push(""));const L=new Set;N.forEach(b=>{b.type==="LlmAgent"&&b.tools.forEach(T=>{T.type==="skillset"&&L.add(T.skillset_id)})}),L.size>0&&e.skillsets&&(t.push("# SkillSet Toolsets"),t.push("# Note: SkillSets store knowledge in ~/.adk-playground/skillsets/{project_id}/"),L.forEach(b=>{var R;const T=(R=e.skillsets)==null?void 0:R.find(E=>E.id===b);T&&(t.push($S(T,e)),t.push(""))}),t.push("")),e.custom_tools.length>0&&(t.push("# Custom Tools"),e.custom_tools.forEach(b=>{t.push(b.code),t.push("")}),t.push("")),e.custom_callbacks&&e.custom_callbacks.length>0&&(t.push("# Custom Callbacks"),e.custom_callbacks.forEach(b=>{t.push(b.code),t.push("")}),t.push("")),t.push("# Models"),N.forEach(b=>{b.type==="LlmAgent"&&b.model&&(t.push(RS(b.model,`${b.name}_model`)),t.push(""))}),t.push(""),t.push("# Agents"),N.forEach(b=>{t.push(MS(b,e,w)),t.push("")});const S=e.agents.find(b=>b.id===e.app.root_agent_id),g=S?w.get(S.id):"root_agent";if(t.push(""),t.push(""),t.push("# App Configuration"),t.push("app = App("),t.push(`    name="${e.app.name}",`),t.push(`    root_agent=${g},`),m){const b=e.app.plugins.map(T=>T.type==="ReflectAndRetryToolPlugin"?`        ReflectAndRetryToolPlugin(max_retries=${T.max_retries||3})`:`        # ${T.type}()`);t.push("    plugins=["),t.push(b.join(`,
`)),t.push("    ],")}return t.push(")"),t.join(`
`)}function FS(){const{project:e}=Ze(),[t,n]=_.useState(!1);if(!e)return null;const r=_.useMemo(()=>DS(e),[e]);function i(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function o(){const a=new Blob([r],{type:"text/x-python"}),l=URL.createObjectURL(a),c=document.createElement("a");c.href=l,c.download=`${e.name}_agent.py`,c.click(),URL.revokeObjectURL(l)}return s.jsxs("div",{className:"code-panel",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("div",{className:"code-header",children:[s.jsxs("div",{className:"code-title",children:[s.jsx(In,{size:16}),s.jsx("h3",{children:"Python Code"}),s.jsx("span",{className:"badge",children:"Generated"}),t&&s.jsxs("span",{className:"status-badge success",children:[s.jsx(Zh,{size:12}),"Copied!"]})]}),s.jsxs("div",{className:"code-actions",children:[s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:i,title:"Copy to clipboard",children:[s.jsx(eg,{size:14}),"Copy"]}),s.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:o,title:"Download Python file",children:[s.jsx(Bo,{size:14}),"Download"]})]})]}),s.jsx("div",{className:"code-editor",children:s.jsx(an,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),s.jsxs("div",{className:"code-info",children:[s.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),s.jsxs("p",{children:["Place this in a file named ",s.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",s.jsx("code",{children:"adk web ."})," or ",s.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const BS=[{id:"app",label:"App",icon:sg},{id:"agents",label:"Agents",icon:Zn},{id:"tools",label:"Tools",icon:Gt},{id:"callbacks",label:"Callbacks",icon:In},{id:"run",label:"Run",icon:rg},{id:"skillsets",label:"SkillSets",icon:u0},{id:"eval",label:"Evaluate",icon:Wl},{id:"yaml",label:"YAML",icon:p0},{id:"code",label:"Code",icon:In}],US=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Va(){var B,Y;const{projectId:e,tab:t,itemId:n}=p1(),r=nu(),{project:i,setProject:o,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:p,selectedToolId:f,setSelectedToolId:m}=Ze(),[v,w]=_.useState(!0),[N,x]=_.useState(!1),[h,y]=_.useState(!1),[L,S]=_.useState(null),g=_.useRef(!0),b=_.useRef(null);_.useEffect(()=>{t&&US.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),_.useEffect(()=>{t==="agents"&&n?p(n):t==="tools"&&n&&m(n)},[t,n]);function T(P){l(P),P==="agents"&&d?r(`/project/${e}/${P}/${d}`,{replace:!0}):P==="tools"&&f?r(`/project/${e}/${P}/${f}`,{replace:!0}):r(`/project/${e}/${P}`,{replace:!0})}function R(P){P?r(`/project/${e}/${a}/${P}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}_.useEffect(()=>(e&&E(e),()=>{o(null),u(!1)}),[e]);async function E(P){g.current=!0;try{const $=await Rh(P);o($),b.current=JSON.stringify($),u(!1)}catch($){console.error("Failed to load project:",$),r("/")}finally{w(!1),setTimeout(()=>{g.current=!1},100)}}async function j(){if(i){x(!0);try{const{eval_sets:P,...$}=i;await Dl(i.id,$),b.current=JSON.stringify(i),u(!1)}catch(P){console.error("Failed to save project:",P)}finally{x(!1)}}}async function z(){if(i){y(!0),S(null);try{let P=0,$=0;for(const I of i.eval_sets||[]){if(I.eval_cases.length===0)continue;const k=await Ve.post(`/projects/${i.id}/eval-sets/${I.id}/run`,{});if(k.result){P+=k.result.passed_cases||0,$+=k.result.total_cases||0;try{await Ve.post(`/projects/${i.id}/eval-history`,k.result)}catch(V){console.warn("Failed to save eval run to history:",V)}}}S({passed:P,total:$}),setTimeout(()=>S(null),5e3)}catch(P){console.error("Failed to run tests:",P),S({passed:0,total:-1}),setTimeout(()=>S(null),5e3)}finally{y(!1)}}}const O=_.useRef(null);_.useEffect(()=>{if(i&&!g.current&&O.current){const P=i.app.models||[],$=O.current||[];if(P.some((k,V)=>{const J=$.find(C=>C.id===k.id);return J?J.provider!==k.provider||J.model_name!==k.model_name||J.api_base!==k.api_base||J.temperature!==k.temperature||J.max_output_tokens!==k.max_output_tokens||J.top_p!==k.top_p||J.top_k!==k.top_k:!1})){const k=i.app.default_model_id,V=i.agents.map(C=>{if(C.type==="LlmAgent"&&C.model){const oe=C.model._appModelId;if(oe){const A=P.find(Z=>Z.id===oe);if(A)return{...C,model:{provider:A.provider,model_name:A.model_name,api_base:A.api_base,temperature:A.temperature,max_output_tokens:A.max_output_tokens,top_p:A.top_p,top_k:A.top_k,fallbacks:[],_appModelId:oe}}}else if(k){const A=P.find(Z=>Z.id===k);if(A&&C.model.provider===A.provider&&C.model.model_name===A.model_name&&C.model.api_base===A.api_base)return{...C,model:{provider:A.provider,model_name:A.model_name,api_base:A.api_base,temperature:A.temperature,max_output_tokens:A.max_output_tokens,top_p:A.top_p,top_k:A.top_k,fallbacks:[],_appModelId:k}}}}return C});V.some((C,oe)=>JSON.stringify(C)!==JSON.stringify(i.agents[oe]))&&o({...i,agents:V})}}i&&(O.current=i.app.models||[])},[i==null?void 0:i.app.models,i,o]);const U=_.useRef(null);return _.useEffect(()=>(i&&!g.current&&b.current&&JSON.stringify(i)!==b.current&&(u(!0),U.current&&clearTimeout(U.current),U.current=setTimeout(async()=>{try{const{eval_sets:$,...I}=i;await Dl(i.id,I),b.current=JSON.stringify(i),u(!1)}catch($){console.error("Auto-save failed:",$)}},500)),()=>{U.current&&clearTimeout(U.current)}),[i]),v?s.jsxs("div",{className:"loading-screen",children:[s.jsx("style",{children:`
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
      `}),s.jsxs("header",{className:"top-bar",children:[s.jsxs("div",{className:"top-bar-left",children:[s.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[s.jsx(c0,{size:18}),"Project"]}),s.jsx("h1",{className:"project-name",children:i.name})]}),s.jsx("nav",{className:"tabs-bar",children:BS.map(P=>s.jsxs("button",{className:`tab-btn ${a===P.id?"active":""}`,onClick:()=>T(P.id),children:[s.jsx(P.icon,{size:14}),P.label]},P.id))}),s.jsxs("div",{className:"top-bar-right",children:[s.jsxs("button",{className:`btn ${L?L.total===-1?"btn-error":L.passed===L.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:z,disabled:h||!((B=i==null?void 0:i.eval_sets)!=null&&B.some(P=>P.eval_cases.length>0)),title:(Y=i==null?void 0:i.eval_sets)!=null&&Y.some(P=>P.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[h?s.jsx(g0,{size:16,className:"spin"}):s.jsx(Mn,{size:16}),h?"Testing...":L?L.total===-1?"Error":`${L.passed}/${L.total}`:"Test"]}),s.jsxs("button",{className:"btn btn-primary",onClick:j,disabled:N,children:[s.jsx(au,{size:16}),N?"Saving...":"Save"]})]})]}),s.jsxs("main",{className:"main-content",children:[a==="app"&&s.jsx(N0,{}),a==="agents"&&s.jsx(A_,{onSelectAgent:R}),a==="tools"&&s.jsx(fS,{onSelectTool:R}),a==="callbacks"&&s.jsx(hS,{onSelectCallback:R}),a==="run"&&s.jsx(wS,{}),a==="skillsets"&&s.jsx(CS,{}),a==="eval"&&s.jsx(ES,{}),a==="yaml"&&s.jsx(AS,{}),a==="code"&&s.jsx(FS,{})]})]}):null}function VS(){const{setMcpServers:e,setBuiltinTools:t}=Ze();return _.useEffect(()=>{ru().then(e).catch(console.error),Bh().then(t).catch(console.error)},[e,t]),s.jsxs(z1,{children:[s.jsx(pr,{path:"/",element:s.jsx(_0,{})}),s.jsx(pr,{path:"/project/:projectId",element:s.jsx(Va,{})}),s.jsx(pr,{path:"/project/:projectId/:tab",element:s.jsx(Va,{})}),s.jsx(pr,{path:"/project/:projectId/:tab/:itemId",element:s.jsx(Va,{})}),s.jsx(pr,{path:"*",element:s.jsx(N1,{to:"/",replace:!0})})]})}Wa.createRoot(document.getElementById("root")).render(s.jsx(Lt.StrictMode,{children:s.jsx(L1,{children:s.jsx(VS,{})})}));export{jo as a,WS as g};
