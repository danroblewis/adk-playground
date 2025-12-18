function x0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wg={exports:{}},il={},kg={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var os=Symbol.for("react.element"),y0=Symbol.for("react.portal"),v0=Symbol.for("react.fragment"),b0=Symbol.for("react.strict_mode"),w0=Symbol.for("react.profiler"),k0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),S0=Symbol.for("react.suspense"),C0=Symbol.for("react.memo"),N0=Symbol.for("react.lazy"),gf=Symbol.iterator;function E0(e){return e===null||typeof e!="object"?null:(e=gf&&e[gf]||e["@@iterator"],typeof e=="function"?e:null)}var jg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_g=Object.assign,Sg={};function Oi(e,t,n){this.props=e,this.context=t,this.refs=Sg,this.updater=n||jg}Oi.prototype.isReactComponent={};Oi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Oi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cg(){}Cg.prototype=Oi.prototype;function rd(e,t,n){this.props=e,this.context=t,this.refs=Sg,this.updater=n||jg}var id=rd.prototype=new Cg;id.constructor=rd;_g(id,Oi.prototype);id.isPureReactComponent=!0;var xf=Array.isArray,Ng=Object.prototype.hasOwnProperty,od={current:null},Eg={key:!0,ref:!0,__self:!0,__source:!0};function zg(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Ng.call(t,r)&&!Eg.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:os,type:e,key:s,ref:a,props:i,_owner:od.current}}function z0(e,t){return{$$typeof:os,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sd(e){return typeof e=="object"&&e!==null&&e.$$typeof===os}function T0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var yf=/\/+/g;function $l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?T0(""+e.key):t.toString(36)}function Qs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case os:case y0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+$l(a,0):r,xf(i)?(n="",e!=null&&(n=e.replace(yf,"$&/")+"/"),Qs(i,t,n,"",function(u){return u})):i!=null&&(sd(i)&&(i=z0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(yf,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",xf(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+$l(s,l);a+=Qs(s,t,n,c,i)}else if(c=E0(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+$l(s,l++),a+=Qs(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ks(e,t,n){if(e==null)return e;var r=[],i=0;return Qs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function A0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var St={current:null},Xs={transition:null},M0={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Xs,ReactCurrentOwner:od};function Tg(){throw Error("act(...) is not supported in production builds of React.")}Me.Children={map:ks,forEach:function(e,t,n){ks(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ks(e,function(){t++}),t},toArray:function(e){return ks(e,function(t){return t})||[]},only:function(e){if(!sd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Me.Component=Oi;Me.Fragment=v0;Me.Profiler=w0;Me.PureComponent=rd;Me.StrictMode=b0;Me.Suspense=S0;Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;Me.act=Tg;Me.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_g({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=od.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Ng.call(t,c)&&!Eg.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:os,type:e.type,key:i,ref:s,props:r,_owner:a}};Me.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:k0,_context:e},e.Consumer=e};Me.createElement=zg;Me.createFactory=function(e){var t=zg.bind(null,e);return t.type=e,t};Me.createRef=function(){return{current:null}};Me.forwardRef=function(e){return{$$typeof:_0,render:e}};Me.isValidElement=sd;Me.lazy=function(e){return{$$typeof:N0,_payload:{_status:-1,_result:e},_init:A0}};Me.memo=function(e,t){return{$$typeof:C0,type:e,compare:t===void 0?null:t}};Me.startTransition=function(e){var t=Xs.transition;Xs.transition={};try{e()}finally{Xs.transition=t}};Me.unstable_act=Tg;Me.useCallback=function(e,t){return St.current.useCallback(e,t)};Me.useContext=function(e){return St.current.useContext(e)};Me.useDebugValue=function(){};Me.useDeferredValue=function(e){return St.current.useDeferredValue(e)};Me.useEffect=function(e,t){return St.current.useEffect(e,t)};Me.useId=function(){return St.current.useId()};Me.useImperativeHandle=function(e,t,n){return St.current.useImperativeHandle(e,t,n)};Me.useInsertionEffect=function(e,t){return St.current.useInsertionEffect(e,t)};Me.useLayoutEffect=function(e,t){return St.current.useLayoutEffect(e,t)};Me.useMemo=function(e,t){return St.current.useMemo(e,t)};Me.useReducer=function(e,t,n){return St.current.useReducer(e,t,n)};Me.useRef=function(e){return St.current.useRef(e)};Me.useState=function(e){return St.current.useState(e)};Me.useSyncExternalStore=function(e,t,n){return St.current.useSyncExternalStore(e,t,n)};Me.useTransition=function(){return St.current.useTransition()};Me.version="18.3.1";kg.exports=Me;var k=kg.exports;const Jt=rl(k),P0=x0({__proto__:null,default:Jt},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=k,R0=Symbol.for("react.element"),I0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,$0=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D0={key:!0,ref:!0,__self:!0,__source:!0};function Ag(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)O0.call(t,r)&&!D0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:R0,type:e,key:s,ref:a,props:i,_owner:$0.current}}il.Fragment=I0;il.jsx=Ag;il.jsxs=Ag;wg.exports=il;var o=wg.exports,Ic={},Mg={exports:{}},Qt={},Pg={exports:{}},Lg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,O){var b=B.length;B.push(O);e:for(;0<b;){var W=b-1>>>1,H=B[W];if(0<i(H,O))B[W]=O,B[b]=H,b=W;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var O=B[0],b=B.pop();if(b!==O){B[0]=b;e:for(var W=0,H=B.length,y=H>>>1;W<y;){var S=2*(W+1)-1,F=B[S],te=S+1,ae=B[te];if(0>i(F,b))te<H&&0>i(ae,F)?(B[W]=ae,B[te]=b,W=te):(B[W]=F,B[S]=b,W=S);else if(te<H&&0>i(ae,b))B[W]=ae,B[te]=b,W=te;else break e}}return O}function i(B,O){var b=B.sortIndex-O.sortIndex;return b!==0?b:B.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(B){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=B)r(u),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(u)}}function _(B){if(v=!1,w(B),!m)if(n(c)!==null)m=!0,P(z);else{var O=n(u);O!==null&&M(_,O.startTime-B)}}function z(B,O){m=!1,v&&(v=!1,g(E),E=-1),h=!0;var b=p;try{for(w(O),f=n(c);f!==null&&(!(f.expirationTime>O)||B&&!$());){var W=f.callback;if(typeof W=="function"){f.callback=null,p=f.priorityLevel;var H=W(f.expirationTime<=O);O=e.unstable_now(),typeof H=="function"?f.callback=H:f===n(c)&&r(c),w(O)}else r(c);f=n(c)}if(f!==null)var y=!0;else{var S=n(u);S!==null&&M(_,S.startTime-O),y=!1}return y}finally{f=null,p=b,h=!1}}var C=!1,R=null,E=-1,U=5,N=-1;function $(){return!(e.unstable_now()-N<U)}function G(){if(R!==null){var B=e.unstable_now();N=B;var O=!0;try{O=R(!0,B)}finally{O?Y():(C=!1,R=null)}}else C=!1}var Y;if(typeof x=="function")Y=function(){x(G)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,D=A.port2;A.port1.onmessage=G,Y=function(){D.postMessage(null)}}else Y=function(){j(G,0)};function P(B){R=B,C||(C=!0,Y())}function M(B,O){E=j(function(){B(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,P(z))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(B){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var b=p;p=O;try{return B()}finally{p=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,O){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var b=p;p=B;try{return O()}finally{p=b}},e.unstable_scheduleCallback=function(B,O,b){var W=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?W+b:W):b=W,B){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=b+H,B={id:d++,callback:O,priorityLevel:B,startTime:b,expirationTime:H,sortIndex:-1},b>W?(B.sortIndex=b,t(u,B),n(c)===null&&B===n(u)&&(v?(g(E),E=-1):v=!0,M(_,b-W))):(B.sortIndex=H,t(c,B),m||h||(m=!0,P(z))),B},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(B){var O=p;return function(){var b=p;p=O;try{return B.apply(this,arguments)}finally{p=b}}}})(Lg);Pg.exports=Lg;var F0=Pg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0=k,Kt=F0;function oe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rg=new Set,Mo={};function Hr(e,t){Si(e,t),Si(e+"Capture",t)}function Si(e,t){for(Mo[e]=t,e=0;e<t.length;e++)Rg.add(t[e])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=Object.prototype.hasOwnProperty,U0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vf={},bf={};function V0(e){return Oc.call(bf,e)?!0:Oc.call(vf,e)?!1:U0.test(e)?bf[e]=!0:(vf[e]=!0,!1)}function W0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H0(e,t,n,r){if(t===null||typeof t>"u"||W0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ct(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pt[e]=new Ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pt[t]=new Ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pt[e]=new Ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pt[e]=new Ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pt[e]=new Ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pt[e]=new Ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pt[e]=new Ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pt[e]=new Ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pt[e]=new Ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var ad=/[\-:]([a-z])/g;function ld(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ad,ld);pt[t]=new Ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ad,ld);pt[t]=new Ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ad,ld);pt[t]=new Ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pt[e]=new Ct(e,1,!1,e.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pt[e]=new Ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function cd(e,t,n,r){var i=pt.hasOwnProperty(t)?pt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H0(t,n,i,r)&&(n=null),r||i===null?V0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jn=B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),ti=Symbol.for("react.portal"),ni=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),Ig=Symbol.for("react.provider"),Og=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),Dc=Symbol.for("react.suspense"),Fc=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),$g=Symbol.for("react.offscreen"),wf=Symbol.iterator;function Ki(e){return e===null||typeof e!="object"?null:(e=wf&&e[wf]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Object.assign,Dl;function co(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||""}return`
`+Dl+e}var Fl=!1;function Bl(e,t){if(!e||Fl)return"";Fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Fl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?co(e):""}function q0(e){switch(e.tag){case 5:return co(e.type);case 16:return co("Lazy");case 13:return co("Suspense");case 19:return co("SuspenseList");case 0:case 2:case 15:return e=Bl(e.type,!1),e;case 11:return e=Bl(e.type.render,!1),e;case 1:return e=Bl(e.type,!0),e;default:return""}}function Bc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ni:return"Fragment";case ti:return"Portal";case $c:return"Profiler";case ud:return"StrictMode";case Dc:return"Suspense";case Fc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Og:return(e.displayName||"Context")+".Consumer";case Ig:return(e._context.displayName||"Context")+".Provider";case dd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pd:return t=e.displayName||null,t!==null?t:Bc(e.type)||"Memo";case Yn:t=e._payload,e=e._init;try{return Bc(e(t))}catch{}}return null}function J0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bc(t);case 8:return t===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G0(e){var t=Dg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function _s(e){e._valueTracker||(e._valueTracker=G0(e))}function Fg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Dg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ya(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uc(e,t){var n=t.checked;return Ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Bg(e,t){t=t.checked,t!=null&&cd(e,"checked",t,!1)}function Vc(e,t){Bg(e,t);var n=mr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Wc(e,t.type,mr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Wc(e,t,n){(t!=="number"||ya(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var uo=Array.isArray;function hi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function _f(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(oe(92));if(uo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mr(n)}}function Ug(e,t){var n=mr(t.value),r=mr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ss,Wg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ss=Ss||document.createElement("div"),Ss.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ss.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Po(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K0=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(e){K0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yo[t]=yo[e]})});function Hg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yo.hasOwnProperty(e)&&yo[e]?(""+t).trim():t+"px"}function qg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Y0=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(e,t){if(t){if(Y0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(oe(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(oe(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(oe(61))}if(t.style!=null&&typeof t.style!="object")throw Error(oe(62))}}function Gc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function fd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yc=null,mi=null,gi=null;function Cf(e){if(e=ls(e)){if(typeof Yc!="function")throw Error(oe(280));var t=e.stateNode;t&&(t=cl(t),Yc(e.stateNode,e.type,t))}}function Jg(e){mi?gi?gi.push(e):gi=[e]:mi=e}function Gg(){if(mi){var e=mi,t=gi;if(gi=mi=null,Cf(e),t)for(e=0;e<t.length;e++)Cf(t[e])}}function Kg(e,t){return e(t)}function Yg(){}var Ul=!1;function Qg(e,t,n){if(Ul)return e(t,n);Ul=!0;try{return Kg(e,t,n)}finally{Ul=!1,(mi!==null||gi!==null)&&(Yg(),Gg())}}function Lo(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(oe(231,t,typeof n));return n}var Qc=!1;if(Un)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{Qc=!1}function Q0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var vo=!1,va=null,ba=!1,Xc=null,X0={onError:function(e){vo=!0,va=e}};function Z0(e,t,n,r,i,s,a,l,c){vo=!1,va=null,Q0.apply(X0,arguments)}function eb(e,t,n,r,i,s,a,l,c){if(Z0.apply(this,arguments),vo){if(vo){var u=va;vo=!1,va=null}else throw Error(oe(198));ba||(ba=!0,Xc=u)}}function qr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nf(e){if(qr(e)!==e)throw Error(oe(188))}function tb(e){var t=e.alternate;if(!t){if(t=qr(e),t===null)throw Error(oe(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Nf(i),e;if(s===r)return Nf(i),t;s=s.sibling}throw Error(oe(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==r)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?e:t}function Zg(e){return e=tb(e),e!==null?ex(e):null}function ex(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ex(e);if(t!==null)return t;e=e.sibling}return null}var tx=Kt.unstable_scheduleCallback,Ef=Kt.unstable_cancelCallback,nb=Kt.unstable_shouldYield,rb=Kt.unstable_requestPaint,Ze=Kt.unstable_now,ib=Kt.unstable_getCurrentPriorityLevel,hd=Kt.unstable_ImmediatePriority,nx=Kt.unstable_UserBlockingPriority,wa=Kt.unstable_NormalPriority,ob=Kt.unstable_LowPriority,rx=Kt.unstable_IdlePriority,ol=null,Cn=null;function sb(e){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:cb,ab=Math.log,lb=Math.LN2;function cb(e){return e>>>=0,e===0?32:31-(ab(e)/lb|0)|0}var Cs=64,Ns=4194304;function po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ka(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=po(l):(s&=a,s!==0&&(r=po(s)))}else a=n&~i,a!==0?r=po(a):s!==0&&(r=po(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-hn(t),i=1<<n,r|=e[n],t&=~i;return r}function ub(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function db(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-hn(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=ub(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function Zc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ix(){var e=Cs;return Cs<<=1,!(Cs&4194240)&&(Cs=64),e}function Vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ss(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hn(t),e[t]=n}function pb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-hn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function md(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-hn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var $e=0;function ox(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sx,gd,ax,lx,cx,eu=!1,Es=[],sr=null,ar=null,lr=null,Ro=new Map,Io=new Map,Zn=[],fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zf(e,t){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Ro.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(t.pointerId)}}function Qi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ls(t),t!==null&&gd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hb(e,t,n,r,i){switch(t){case"focusin":return sr=Qi(sr,e,t,n,r,i),!0;case"dragenter":return ar=Qi(ar,e,t,n,r,i),!0;case"mouseover":return lr=Qi(lr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ro.set(s,Qi(Ro.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Io.set(s,Qi(Io.get(s)||null,e,t,n,r,i)),!0}return!1}function ux(e){var t=Er(e.target);if(t!==null){var n=qr(t);if(n!==null){if(t=n.tag,t===13){if(t=Xg(n),t!==null){e.blockedOn=t,cx(e.priority,function(){ax(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Kc=r,n.target.dispatchEvent(r),Kc=null}else return t=ls(n),t!==null&&gd(t),e.blockedOn=n,!1;t.shift()}return!0}function Tf(e,t,n){Zs(e)&&n.delete(t)}function mb(){eu=!1,sr!==null&&Zs(sr)&&(sr=null),ar!==null&&Zs(ar)&&(ar=null),lr!==null&&Zs(lr)&&(lr=null),Ro.forEach(Tf),Io.forEach(Tf)}function Xi(e,t){e.blockedOn===t&&(e.blockedOn=null,eu||(eu=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,mb)))}function Oo(e){function t(i){return Xi(i,e)}if(0<Es.length){Xi(Es[0],e);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sr!==null&&Xi(sr,e),ar!==null&&Xi(ar,e),lr!==null&&Xi(lr,e),Ro.forEach(t),Io.forEach(t),n=0;n<Zn.length;n++)r=Zn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)ux(n),n.blockedOn===null&&Zn.shift()}var xi=Jn.ReactCurrentBatchConfig,ja=!0;function gb(e,t,n,r){var i=$e,s=xi.transition;xi.transition=null;try{$e=1,xd(e,t,n,r)}finally{$e=i,xi.transition=s}}function xb(e,t,n,r){var i=$e,s=xi.transition;xi.transition=null;try{$e=4,xd(e,t,n,r)}finally{$e=i,xi.transition=s}}function xd(e,t,n,r){if(ja){var i=tu(e,t,n,r);if(i===null)Zl(e,t,r,_a,n),zf(e,r);else if(hb(i,e,t,n,r))r.stopPropagation();else if(zf(e,r),t&4&&-1<fb.indexOf(e)){for(;i!==null;){var s=ls(i);if(s!==null&&sx(s),s=tu(e,t,n,r),s===null&&Zl(e,t,r,_a,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Zl(e,t,r,null,n)}}var _a=null;function tu(e,t,n,r){if(_a=null,e=fd(r),e=Er(e),e!==null)if(t=qr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _a=e,null}function dx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ib()){case hd:return 1;case nx:return 4;case wa:case ob:return 16;case rx:return 536870912;default:return 16}default:return 16}}var tr=null,yd=null,ea=null;function px(){if(ea)return ea;var e,t=yd,n=t.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return ea=i.slice(e,1<r?1-r:void 0)}function ta(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zs(){return!0}function Af(){return!1}function Xt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?zs:Af,this.isPropagationStopped=Af,this}return Ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zs)},persist:function(){},isPersistent:zs}),t}var $i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=Xt($i),as=Ye({},$i,{view:0,detail:0}),yb=Xt(as),Wl,Hl,Zi,sl=Ye({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zi&&(Zi&&e.type==="mousemove"?(Wl=e.screenX-Zi.screenX,Hl=e.screenY-Zi.screenY):Hl=Wl=0,Zi=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),Mf=Xt(sl),vb=Ye({},sl,{dataTransfer:0}),bb=Xt(vb),wb=Ye({},as,{relatedTarget:0}),ql=Xt(wb),kb=Ye({},$i,{animationName:0,elapsedTime:0,pseudoElement:0}),jb=Xt(kb),_b=Ye({},$i,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sb=Xt(_b),Cb=Ye({},$i,{data:0}),Pf=Xt(Cb),Nb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zb[e])?!!t[e]:!1}function bd(){return Tb}var Ab=Ye({},as,{key:function(e){if(e.key){var t=Nb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ta(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Eb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(e){return e.type==="keypress"?ta(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ta(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mb=Xt(Ab),Pb=Ye({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lf=Xt(Pb),Lb=Ye({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),Rb=Xt(Lb),Ib=Ye({},$i,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ob=Xt(Ib),$b=Ye({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Db=Xt($b),Fb=[9,13,27,32],wd=Un&&"CompositionEvent"in window,bo=null;Un&&"documentMode"in document&&(bo=document.documentMode);var Bb=Un&&"TextEvent"in window&&!bo,fx=Un&&(!wd||bo&&8<bo&&11>=bo),Rf=" ",If=!1;function hx(e,t){switch(e){case"keyup":return Fb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ri=!1;function Ub(e,t){switch(e){case"compositionend":return mx(t);case"keypress":return t.which!==32?null:(If=!0,Rf);case"textInput":return e=t.data,e===Rf&&If?null:e;default:return null}}function Vb(e,t){if(ri)return e==="compositionend"||!wd&&hx(e,t)?(e=px(),ea=yd=tr=null,ri=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fx&&t.locale!=="ko"?null:t.data;default:return null}}var Wb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wb[e.type]:t==="textarea"}function gx(e,t,n,r){Jg(r),t=Sa(t,"onChange"),0<t.length&&(n=new vd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wo=null,$o=null;function Hb(e){Nx(e,0)}function al(e){var t=si(e);if(Fg(t))return e}function qb(e,t){if(e==="change")return t}var xx=!1;if(Un){var Jl;if(Un){var Gl="oninput"in document;if(!Gl){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),Gl=typeof $f.oninput=="function"}Jl=Gl}else Jl=!1;xx=Jl&&(!document.documentMode||9<document.documentMode)}function Df(){wo&&(wo.detachEvent("onpropertychange",yx),$o=wo=null)}function yx(e){if(e.propertyName==="value"&&al($o)){var t=[];gx(t,$o,e,fd(e)),Qg(Hb,t)}}function Jb(e,t,n){e==="focusin"?(Df(),wo=t,$o=n,wo.attachEvent("onpropertychange",yx)):e==="focusout"&&Df()}function Gb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al($o)}function Kb(e,t){if(e==="click")return al(t)}function Yb(e,t){if(e==="input"||e==="change")return al(t)}function Qb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xn=typeof Object.is=="function"?Object.is:Qb;function Do(e,t){if(xn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oc.call(t,i)||!xn(e[i],t[i]))return!1}return!0}function Ff(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bf(e,t){var n=Ff(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ff(n)}}function vx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bx(){for(var e=window,t=ya();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ya(e.document)}return t}function kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xb(e){var t=bx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vx(n.ownerDocument.documentElement,n)){if(r!==null&&kd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Bf(n,s);var a=Bf(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zb=Un&&"documentMode"in document&&11>=document.documentMode,ii=null,nu=null,ko=null,ru=!1;function Uf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ru||ii==null||ii!==ya(r)||(r=ii,"selectionStart"in r&&kd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&Do(ko,r)||(ko=r,r=Sa(nu,"onSelect"),0<r.length&&(t=new vd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ii)))}function Ts(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var oi={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionend:Ts("Transition","TransitionEnd")},Kl={},wx={};Un&&(wx=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function ll(e){if(Kl[e])return Kl[e];if(!oi[e])return e;var t=oi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wx)return Kl[e]=t[n];return e}var kx=ll("animationend"),jx=ll("animationiteration"),_x=ll("animationstart"),Sx=ll("transitionend"),Cx=new Map,Vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(e,t){Cx.set(e,t),Hr(t,[e])}for(var Yl=0;Yl<Vf.length;Yl++){var Ql=Vf[Yl],ew=Ql.toLowerCase(),tw=Ql[0].toUpperCase()+Ql.slice(1);vr(ew,"on"+tw)}vr(kx,"onAnimationEnd");vr(jx,"onAnimationIteration");vr(_x,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(Sx,"onTransitionEnd");Si("onMouseEnter",["mouseout","mouseover"]);Si("onMouseLeave",["mouseout","mouseover"]);Si("onPointerEnter",["pointerout","pointerover"]);Si("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nw=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Wf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,eb(r,t,void 0,e),e.currentTarget=null}function Nx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Wf(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Wf(i,l,u),s=c}}}if(ba)throw e=Xc,ba=!1,Xc=null,e}function We(e,t){var n=t[lu];n===void 0&&(n=t[lu]=new Set);var r=e+"__bubble";n.has(r)||(Ex(t,e,2,!1),n.add(r))}function Xl(e,t,n){var r=0;t&&(r|=4),Ex(n,e,r,t)}var As="_reactListening"+Math.random().toString(36).slice(2);function Fo(e){if(!e[As]){e[As]=!0,Rg.forEach(function(n){n!=="selectionchange"&&(nw.has(n)||Xl(n,!1,e),Xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[As]||(t[As]=!0,Xl("selectionchange",!1,t))}}function Ex(e,t,n,r){switch(dx(t)){case 1:var i=gb;break;case 4:i=xb;break;default:i=xd}n=i.bind(null,t,n,e),i=void 0,!Qc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Er(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Qg(function(){var u=s,d=fd(n),f=[];e:{var p=Cx.get(e);if(p!==void 0){var h=vd,m=e;switch(e){case"keypress":if(ta(n)===0)break e;case"keydown":case"keyup":h=Mb;break;case"focusin":m="focus",h=ql;break;case"focusout":m="blur",h=ql;break;case"beforeblur":case"afterblur":h=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=bb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Rb;break;case kx:case jx:case _x:h=jb;break;case Sx:h=Ob;break;case"scroll":h=yb;break;case"wheel":h=Db;break;case"copy":case"cut":case"paste":h=Sb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Lf}var v=(t&4)!==0,j=!v&&e==="scroll",g=v?p!==null?p+"Capture":null:p;v=[];for(var x=u,w;x!==null;){w=x;var _=w.stateNode;if(w.tag===5&&_!==null&&(w=_,g!==null&&(_=Lo(x,g),_!=null&&v.push(Bo(x,_,w)))),j)break;x=x.return}0<v.length&&(p=new h(p,m,null,n,d),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Kc&&(m=n.relatedTarget||n.fromElement)&&(Er(m)||m[Vn]))break e;if((h||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=u,m=m?Er(m):null,m!==null&&(j=qr(m),m!==j||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(v=Mf,_="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(v=Lf,_="onPointerLeave",g="onPointerEnter",x="pointer"),j=h==null?p:si(h),w=m==null?p:si(m),p=new v(_,x+"leave",h,n,d),p.target=j,p.relatedTarget=w,_=null,Er(d)===u&&(v=new v(g,x+"enter",m,n,d),v.target=w,v.relatedTarget=j,_=v),j=_,h&&m)t:{for(v=h,g=m,x=0,w=v;w;w=Yr(w))x++;for(w=0,_=g;_;_=Yr(_))w++;for(;0<x-w;)v=Yr(v),x--;for(;0<w-x;)g=Yr(g),w--;for(;x--;){if(v===g||g!==null&&v===g.alternate)break t;v=Yr(v),g=Yr(g)}v=null}else v=null;h!==null&&Hf(f,p,h,v,!1),m!==null&&j!==null&&Hf(f,j,m,v,!0)}}e:{if(p=u?si(u):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var z=qb;else if(Of(p))if(xx)z=Yb;else{z=Gb;var C=Jb}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(z=Kb);if(z&&(z=z(e,u))){gx(f,z,n,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Wc(p,"number",p.value)}switch(C=u?si(u):window,e){case"focusin":(Of(C)||C.contentEditable==="true")&&(ii=C,nu=u,ko=null);break;case"focusout":ko=nu=ii=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,Uf(f,n,d);break;case"selectionchange":if(Zb)break;case"keydown":case"keyup":Uf(f,n,d)}var R;if(wd)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ri?hx(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(fx&&n.locale!=="ko"&&(ri||E!=="onCompositionStart"?E==="onCompositionEnd"&&ri&&(R=px()):(tr=d,yd="value"in tr?tr.value:tr.textContent,ri=!0)),C=Sa(u,E),0<C.length&&(E=new Pf(E,e,null,n,d),f.push({event:E,listeners:C}),R?E.data=R:(R=mx(n),R!==null&&(E.data=R)))),(R=Bb?Ub(e,n):Vb(e,n))&&(u=Sa(u,"onBeforeInput"),0<u.length&&(d=new Pf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}Nx(f,t)})}function Bo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(e,n),s!=null&&r.unshift(Bo(e,s,i)),s=Lo(e,t),s!=null&&r.push(Bo(e,s,i))),e=e.return}return r}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hf(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Lo(n,s),c!=null&&a.unshift(Bo(n,c,l))):i||(c=Lo(n,s),c!=null&&a.push(Bo(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var rw=/\r\n?/g,iw=/\u0000|\uFFFD/g;function qf(e){return(typeof e=="string"?e:""+e).replace(rw,`
`).replace(iw,"")}function Ms(e,t,n){if(t=qf(t),qf(e)!==t&&n)throw Error(oe(425))}function Ca(){}var iu=null,ou=null;function su(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,ow=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,sw=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(e){return Jf.resolve(null).then(e).catch(aw)}:au;function aw(e){setTimeout(function(){throw e})}function ec(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Oo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oo(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Di=Math.random().toString(36).slice(2),jn="__reactFiber$"+Di,Uo="__reactProps$"+Di,Vn="__reactContainer$"+Di,lu="__reactEvents$"+Di,lw="__reactListeners$"+Di,cw="__reactHandles$"+Di;function Er(e){var t=e[jn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vn]||n[jn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gf(e);e!==null;){if(n=e[jn])return n;e=Gf(e)}return t}e=n,n=e.parentNode}return null}function ls(e){return e=e[jn]||e[Vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function si(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(oe(33))}function cl(e){return e[Uo]||null}var cu=[],ai=-1;function br(e){return{current:e}}function He(e){0>ai||(e.current=cu[ai],cu[ai]=null,ai--)}function Ue(e,t){ai++,cu[ai]=e.current,e.current=t}var gr={},xt=br(gr),Pt=br(!1),$r=gr;function Ci(e,t){var n=e.type.contextTypes;if(!n)return gr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Lt(e){return e=e.childContextTypes,e!=null}function Na(){He(Pt),He(xt)}function Kf(e,t,n){if(xt.current!==gr)throw Error(oe(168));Ue(xt,t),Ue(Pt,n)}function zx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(oe(108,J0(e)||"Unknown",i));return Ye({},n,r)}function Ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gr,$r=xt.current,Ue(xt,e),Ue(Pt,Pt.current),!0}function Yf(e,t,n){var r=e.stateNode;if(!r)throw Error(oe(169));n?(e=zx(e,t,$r),r.__reactInternalMemoizedMergedChildContext=e,He(Pt),He(xt),Ue(xt,e)):He(Pt),Ue(Pt,n)}var In=null,ul=!1,tc=!1;function Tx(e){In===null?In=[e]:In.push(e)}function uw(e){ul=!0,Tx(e)}function wr(){if(!tc&&In!==null){tc=!0;var e=0,t=$e;try{var n=In;for($e=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}In=null,ul=!1}catch(i){throw In!==null&&(In=In.slice(e+1)),tx(hd,wr),i}finally{$e=t,tc=!1}}return null}var li=[],ci=0,za=null,Ta=0,en=[],tn=0,Dr=null,On=1,$n="";function Sr(e,t){li[ci++]=Ta,li[ci++]=za,za=e,Ta=t}function Ax(e,t,n){en[tn++]=On,en[tn++]=$n,en[tn++]=Dr,Dr=e;var r=On;e=$n;var i=32-hn(r)-1;r&=~(1<<i),n+=1;var s=32-hn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,On=1<<32-hn(t)+i|n<<i|r,$n=s+e}else On=1<<s|n<<i|r,$n=e}function jd(e){e.return!==null&&(Sr(e,1),Ax(e,1,0))}function _d(e){for(;e===za;)za=li[--ci],li[ci]=null,Ta=li[--ci],li[ci]=null;for(;e===Dr;)Dr=en[--tn],en[tn]=null,$n=en[--tn],en[tn]=null,On=en[--tn],en[tn]=null}var Gt=null,Wt=null,qe=!1,pn=null;function Mx(e,t){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Gt=e,Wt=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Gt=e,Wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dr!==null?{id:On,overflow:$n}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Gt=e,Wt=null,!0):!1;default:return!1}}function uu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function du(e){if(qe){var t=Wt;if(t){var n=t;if(!Qf(e,t)){if(uu(e))throw Error(oe(418));t=cr(n.nextSibling);var r=Gt;t&&Qf(e,t)?Mx(r,n):(e.flags=e.flags&-4097|2,qe=!1,Gt=e)}}else{if(uu(e))throw Error(oe(418));e.flags=e.flags&-4097|2,qe=!1,Gt=e}}}function Xf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Gt=e}function Ps(e){if(e!==Gt)return!1;if(!qe)return Xf(e),qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!su(e.type,e.memoizedProps)),t&&(t=Wt)){if(uu(e))throw Px(),Error(oe(418));for(;t;)Mx(e,t),t=cr(t.nextSibling)}if(Xf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(oe(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Wt=cr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Wt=null}}else Wt=Gt?cr(e.stateNode.nextSibling):null;return!0}function Px(){for(var e=Wt;e;)e=cr(e.nextSibling)}function Ni(){Wt=Gt=null,qe=!1}function Sd(e){pn===null?pn=[e]:pn.push(e)}var dw=Jn.ReactCurrentBatchConfig;function eo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var r=n.stateNode}if(!r)throw Error(oe(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,e))}return e}function Ls(e,t){throw e=Object.prototype.toString.call(t),Error(oe(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zf(e){var t=e._init;return t(e._payload)}function Lx(e){function t(g,x){if(e){var w=g.deletions;w===null?(g.deletions=[x],g.flags|=16):w.push(x)}}function n(g,x){if(!e)return null;for(;x!==null;)t(g,x),x=x.sibling;return null}function r(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=fr(g,x),g.index=0,g.sibling=null,g}function s(g,x,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<x?(g.flags|=2,x):w):(g.flags|=2,x)):(g.flags|=1048576,x)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,x,w,_){return x===null||x.tag!==6?(x=lc(w,g.mode,_),x.return=g,x):(x=i(x,w),x.return=g,x)}function c(g,x,w,_){var z=w.type;return z===ni?d(g,x,w.props.children,_,w.key):x!==null&&(x.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Yn&&Zf(z)===x.type)?(_=i(x,w.props),_.ref=eo(g,x,w),_.return=g,_):(_=la(w.type,w.key,w.props,null,g.mode,_),_.ref=eo(g,x,w),_.return=g,_)}function u(g,x,w,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=cc(w,g.mode,_),x.return=g,x):(x=i(x,w.children||[]),x.return=g,x)}function d(g,x,w,_,z){return x===null||x.tag!==7?(x=Pr(w,g.mode,_,z),x.return=g,x):(x=i(x,w),x.return=g,x)}function f(g,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return x=lc(""+x,g.mode,w),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case js:return w=la(x.type,x.key,x.props,null,g.mode,w),w.ref=eo(g,null,x),w.return=g,w;case ti:return x=cc(x,g.mode,w),x.return=g,x;case Yn:var _=x._init;return f(g,_(x._payload),w)}if(uo(x)||Ki(x))return x=Pr(x,g.mode,w,null),x.return=g,x;Ls(g,x)}return null}function p(g,x,w,_){var z=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return z!==null?null:l(g,x,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case js:return w.key===z?c(g,x,w,_):null;case ti:return w.key===z?u(g,x,w,_):null;case Yn:return z=w._init,p(g,x,z(w._payload),_)}if(uo(w)||Ki(w))return z!==null?null:d(g,x,w,_,null);Ls(g,w)}return null}function h(g,x,w,_,z){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(w)||null,l(x,g,""+_,z);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case js:return g=g.get(_.key===null?w:_.key)||null,c(x,g,_,z);case ti:return g=g.get(_.key===null?w:_.key)||null,u(x,g,_,z);case Yn:var C=_._init;return h(g,x,w,C(_._payload),z)}if(uo(_)||Ki(_))return g=g.get(w)||null,d(x,g,_,z,null);Ls(x,_)}return null}function m(g,x,w,_){for(var z=null,C=null,R=x,E=x=0,U=null;R!==null&&E<w.length;E++){R.index>E?(U=R,R=null):U=R.sibling;var N=p(g,R,w[E],_);if(N===null){R===null&&(R=U);break}e&&R&&N.alternate===null&&t(g,R),x=s(N,x,E),C===null?z=N:C.sibling=N,C=N,R=U}if(E===w.length)return n(g,R),qe&&Sr(g,E),z;if(R===null){for(;E<w.length;E++)R=f(g,w[E],_),R!==null&&(x=s(R,x,E),C===null?z=R:C.sibling=R,C=R);return qe&&Sr(g,E),z}for(R=r(g,R);E<w.length;E++)U=h(R,g,E,w[E],_),U!==null&&(e&&U.alternate!==null&&R.delete(U.key===null?E:U.key),x=s(U,x,E),C===null?z=U:C.sibling=U,C=U);return e&&R.forEach(function($){return t(g,$)}),qe&&Sr(g,E),z}function v(g,x,w,_){var z=Ki(w);if(typeof z!="function")throw Error(oe(150));if(w=z.call(w),w==null)throw Error(oe(151));for(var C=z=null,R=x,E=x=0,U=null,N=w.next();R!==null&&!N.done;E++,N=w.next()){R.index>E?(U=R,R=null):U=R.sibling;var $=p(g,R,N.value,_);if($===null){R===null&&(R=U);break}e&&R&&$.alternate===null&&t(g,R),x=s($,x,E),C===null?z=$:C.sibling=$,C=$,R=U}if(N.done)return n(g,R),qe&&Sr(g,E),z;if(R===null){for(;!N.done;E++,N=w.next())N=f(g,N.value,_),N!==null&&(x=s(N,x,E),C===null?z=N:C.sibling=N,C=N);return qe&&Sr(g,E),z}for(R=r(g,R);!N.done;E++,N=w.next())N=h(R,g,E,N.value,_),N!==null&&(e&&N.alternate!==null&&R.delete(N.key===null?E:N.key),x=s(N,x,E),C===null?z=N:C.sibling=N,C=N);return e&&R.forEach(function(G){return t(g,G)}),qe&&Sr(g,E),z}function j(g,x,w,_){if(typeof w=="object"&&w!==null&&w.type===ni&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case js:e:{for(var z=w.key,C=x;C!==null;){if(C.key===z){if(z=w.type,z===ni){if(C.tag===7){n(g,C.sibling),x=i(C,w.props.children),x.return=g,g=x;break e}}else if(C.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Yn&&Zf(z)===C.type){n(g,C.sibling),x=i(C,w.props),x.ref=eo(g,C,w),x.return=g,g=x;break e}n(g,C);break}else t(g,C);C=C.sibling}w.type===ni?(x=Pr(w.props.children,g.mode,_,w.key),x.return=g,g=x):(_=la(w.type,w.key,w.props,null,g.mode,_),_.ref=eo(g,x,w),_.return=g,g=_)}return a(g);case ti:e:{for(C=w.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){n(g,x.sibling),x=i(x,w.children||[]),x.return=g,g=x;break e}else{n(g,x);break}else t(g,x);x=x.sibling}x=cc(w,g.mode,_),x.return=g,g=x}return a(g);case Yn:return C=w._init,j(g,x,C(w._payload),_)}if(uo(w))return m(g,x,w,_);if(Ki(w))return v(g,x,w,_);Ls(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,x!==null&&x.tag===6?(n(g,x.sibling),x=i(x,w),x.return=g,g=x):(n(g,x),x=lc(w,g.mode,_),x.return=g,g=x),a(g)):n(g,x)}return j}var Ei=Lx(!0),Rx=Lx(!1),Aa=br(null),Ma=null,ui=null,Cd=null;function Nd(){Cd=ui=Ma=null}function Ed(e){var t=Aa.current;He(Aa),e._currentValue=t}function pu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yi(e,t){Ma=e,Cd=ui=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(At=!0),e.firstContext=null)}function an(e){var t=e._currentValue;if(Cd!==e)if(e={context:e,memoizedValue:t,next:null},ui===null){if(Ma===null)throw Error(oe(308));ui=e,Ma.dependencies={lanes:0,firstContext:e}}else ui=ui.next=e;return t}var zr=null;function zd(e){zr===null?zr=[e]:zr.push(e)}function Ix(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zd(t)):(n.next=i.next,i.next=n),t.interleaved=n,Wn(e,r)}function Wn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Td(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ox(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Wn(e,n)}return i=r.interleaved,i===null?(t.next=t,zd(r)):(t.next=i.next,i.next=t),r.interleaved=t,Wn(e,n)}function na(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,md(e,n)}}function eh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Pa(e,t,n,r){var i=e.updateQueue;Qn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=i.baseState;a=0,d=u=c=null,l=s;do{var p=l.lane,h=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(p=t,h=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){f=m.call(h,f,p);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,p=typeof m=="function"?m.call(h,f,p):m,p==null)break e;f=Ye({},f,p);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else h={eventTime:h,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,c=f):d=d.next=h,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Br|=a,e.lanes=a,e.memoizedState=f}}function th(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(oe(191,i));i.call(r)}}}var cs={},Nn=br(cs),Vo=br(cs),Wo=br(cs);function Tr(e){if(e===cs)throw Error(oe(174));return e}function Ad(e,t){switch(Ue(Wo,t),Ue(Vo,e),Ue(Nn,cs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qc(t,e)}He(Nn),Ue(Nn,t)}function zi(){He(Nn),He(Vo),He(Wo)}function $x(e){Tr(Wo.current);var t=Tr(Nn.current),n=qc(t,e.type);t!==n&&(Ue(Vo,e),Ue(Nn,n))}function Md(e){Vo.current===e&&(He(Nn),He(Vo))}var Ge=br(0);function La(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nc=[];function Pd(){for(var e=0;e<nc.length;e++)nc[e]._workInProgressVersionPrimary=null;nc.length=0}var ra=Jn.ReactCurrentDispatcher,rc=Jn.ReactCurrentBatchConfig,Fr=0,Ke=null,st=null,lt=null,Ra=!1,jo=!1,Ho=0,pw=0;function ht(){throw Error(oe(321))}function Ld(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xn(e[n],t[n]))return!1;return!0}function Rd(e,t,n,r,i,s){if(Fr=s,Ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ra.current=e===null||e.memoizedState===null?gw:xw,e=n(r,i),jo){s=0;do{if(jo=!1,Ho=0,25<=s)throw Error(oe(301));s+=1,lt=st=null,t.updateQueue=null,ra.current=yw,e=n(r,i)}while(jo)}if(ra.current=Ia,t=st!==null&&st.next!==null,Fr=0,lt=st=Ke=null,Ra=!1,t)throw Error(oe(300));return e}function Id(){var e=Ho!==0;return Ho=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Ke.memoizedState=lt=e:lt=lt.next=e,lt}function ln(){if(st===null){var e=Ke.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=lt===null?Ke.memoizedState:lt.next;if(t!==null)lt=t,st=e;else{if(e===null)throw Error(oe(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},lt===null?Ke.memoizedState=lt=e:lt=lt.next=e}return lt}function qo(e,t){return typeof t=="function"?t(e):t}function ic(e){var t=ln(),n=t.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=e;var r=st,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Fr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=r):c=c.next=f,Ke.lanes|=d,Br|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,xn(r,t.memoizedState)||(At=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Ke.lanes|=s,Br|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oc(e){var t=ln(),n=t.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);xn(s,t.memoizedState)||(At=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Dx(){}function Fx(e,t){var n=Ke,r=ln(),i=t(),s=!xn(r.memoizedState,i);if(s&&(r.memoizedState=i,At=!0),r=r.queue,Od(Vx.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,Jo(9,Ux.bind(null,n,r,i,t),void 0,null),ct===null)throw Error(oe(349));Fr&30||Bx(n,t,i)}return i}function Bx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ke.updateQueue,t===null?(t={lastEffect:null,stores:null},Ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ux(e,t,n,r){t.value=n,t.getSnapshot=r,Wx(t)&&Hx(e)}function Vx(e,t,n){return n(function(){Wx(t)&&Hx(e)})}function Wx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xn(e,n)}catch{return!0}}function Hx(e){var t=Wn(e,1);t!==null&&mn(t,e,1,-1)}function nh(e){var t=wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t.queue=e,e=e.dispatch=mw.bind(null,Ke,e),[t.memoizedState,e]}function Jo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ke.updateQueue,t===null?(t={lastEffect:null,stores:null},Ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qx(){return ln().memoizedState}function ia(e,t,n,r){var i=wn();Ke.flags|=e,i.memoizedState=Jo(1|t,n,void 0,r===void 0?null:r)}function dl(e,t,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(st!==null){var a=st.memoizedState;if(s=a.destroy,r!==null&&Ld(r,a.deps)){i.memoizedState=Jo(t,n,s,r);return}}Ke.flags|=e,i.memoizedState=Jo(1|t,n,s,r)}function rh(e,t){return ia(8390656,8,e,t)}function Od(e,t){return dl(2048,8,e,t)}function Jx(e,t){return dl(4,2,e,t)}function Gx(e,t){return dl(4,4,e,t)}function Kx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Yx(e,t,n){return n=n!=null?n.concat([e]):null,dl(4,4,Kx.bind(null,t,e),n)}function $d(){}function Qx(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ld(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xx(e,t){var n=ln();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ld(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Zx(e,t,n){return Fr&21?(xn(n,t)||(n=ix(),Ke.lanes|=n,Br|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=n)}function fw(e,t){var n=$e;$e=n!==0&&4>n?n:4,e(!0);var r=rc.transition;rc.transition={};try{e(!1),t()}finally{$e=n,rc.transition=r}}function ey(){return ln().memoizedState}function hw(e,t,n){var r=pr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ty(e))ny(t,n);else if(n=Ix(e,t,n,r),n!==null){var i=_t();mn(n,e,r,i),ry(n,t,r)}}function mw(e,t,n){var r=pr(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ty(e))ny(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,xn(l,a)){var c=t.interleaved;c===null?(i.next=i,zd(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Ix(e,t,i,r),n!==null&&(i=_t(),mn(n,e,r,i),ry(n,t,r))}}function ty(e){var t=e.alternate;return e===Ke||t!==null&&t===Ke}function ny(e,t){jo=Ra=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ry(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,md(e,n)}}var Ia={readContext:an,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},gw={readContext:an,useCallback:function(e,t){return wn().memoizedState=[e,t===void 0?null:t],e},useContext:an,useEffect:rh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ia(4194308,4,Kx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ia(4194308,4,e,t)},useInsertionEffect:function(e,t){return ia(4,2,e,t)},useMemo:function(e,t){var n=wn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hw.bind(null,Ke,e),[r.memoizedState,e]},useRef:function(e){var t=wn();return e={current:e},t.memoizedState=e},useState:nh,useDebugValue:$d,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=nh(!1),t=e[0];return e=fw.bind(null,e[1]),wn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ke,i=wn();if(qe){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=t(),ct===null)throw Error(oe(349));Fr&30||Bx(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,rh(Vx.bind(null,r,s,e),[e]),r.flags|=2048,Jo(9,Ux.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=wn(),t=ct.identifierPrefix;if(qe){var n=$n,r=On;n=(r&~(1<<32-hn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=pw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},xw={readContext:an,useCallback:Qx,useContext:an,useEffect:Od,useImperativeHandle:Yx,useInsertionEffect:Jx,useLayoutEffect:Gx,useMemo:Xx,useReducer:ic,useRef:qx,useState:function(){return ic(qo)},useDebugValue:$d,useDeferredValue:function(e){var t=ln();return Zx(t,st.memoizedState,e)},useTransition:function(){var e=ic(qo)[0],t=ln().memoizedState;return[e,t]},useMutableSource:Dx,useSyncExternalStore:Fx,useId:ey,unstable_isNewReconciler:!1},yw={readContext:an,useCallback:Qx,useContext:an,useEffect:Od,useImperativeHandle:Yx,useInsertionEffect:Jx,useLayoutEffect:Gx,useMemo:Xx,useReducer:oc,useRef:qx,useState:function(){return oc(qo)},useDebugValue:$d,useDeferredValue:function(e){var t=ln();return st===null?t.memoizedState=e:Zx(t,st.memoizedState,e)},useTransition:function(){var e=oc(qo)[0],t=ln().memoizedState;return[e,t]},useMutableSource:Dx,useSyncExternalStore:Fx,useId:ey,unstable_isNewReconciler:!1};function un(e,t){if(e&&e.defaultProps){t=Ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pl={isMounted:function(e){return(e=e._reactInternals)?qr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_t(),i=pr(e),s=Fn(r,i);s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(mn(t,e,i,r),na(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_t(),i=pr(e),s=Fn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ur(e,s,i),t!==null&&(mn(t,e,i,r),na(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_t(),r=pr(e),i=Fn(n,r);i.tag=2,t!=null&&(i.callback=t),t=ur(e,i,r),t!==null&&(mn(t,e,r,n),na(t,e,r))}};function ih(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Do(n,r)||!Do(i,s):!0}function iy(e,t,n){var r=!1,i=gr,s=t.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=Lt(t)?$r:xt.current,r=t.contextTypes,s=(r=r!=null)?Ci(e,i):gr),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function oh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function hu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Td(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=Lt(t)?$r:xt.current,i.context=Ci(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(fu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pl.enqueueReplaceState(i,i.state,null),Pa(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ti(e,t){try{var n="",r=t;do n+=q0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function sc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vw=typeof WeakMap=="function"?WeakMap:Map;function oy(e,t,n){n=Fn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){$a||($a=!0,Su=r),mu(e,t)},n}function sy(e,t,n){n=Fn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){mu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mu(e,t),typeof r!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function sh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Pw.bind(null,e,t,n),t.then(e,e))}function ah(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Fn(-1,1),t.tag=2,ur(n,t,1))),n.lanes|=1),e)}var bw=Jn.ReactCurrentOwner,At=!1;function bt(e,t,n,r){t.child=e===null?Rx(t,null,n,r):Ei(t,e.child,n,r)}function ch(e,t,n,r,i){n=n.render;var s=t.ref;return yi(t,i),r=Rd(e,t,n,r,s,i),n=Id(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(qe&&n&&jd(t),t.flags|=1,bt(e,t,r,i),t.child)}function uh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ay(e,t,s,r,i)):(e=la(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(a,r)&&e.ref===t.ref)return Hn(e,t,i)}return t.flags|=1,e=fr(s,r),e.ref=t.ref,e.return=t,t.child=e}function ay(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Do(s,r)&&e.ref===t.ref)if(At=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(At=!0);else return t.lanes=e.lanes,Hn(e,t,i)}return gu(e,t,n,r,i)}function ly(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(pi,Ut),Ut|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ue(pi,Ut),Ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ue(pi,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ue(pi,Ut),Ut|=r;return bt(e,t,i,n),t.child}function cy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gu(e,t,n,r,i){var s=Lt(n)?$r:xt.current;return s=Ci(t,s),yi(t,i),n=Rd(e,t,n,r,s,i),r=Id(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hn(e,t,i)):(qe&&r&&jd(t),t.flags|=1,bt(e,t,n,i),t.child)}function dh(e,t,n,r,i){if(Lt(n)){var s=!0;Ea(t)}else s=!1;if(yi(t,i),t.stateNode===null)oa(e,t),iy(t,n,r),hu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=an(u):(u=Lt(n)?$r:xt.current,u=Ci(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&oh(t,a,r,u),Qn=!1;var p=t.memoizedState;a.state=p,Pa(t,r,a,i),c=t.memoizedState,l!==r||p!==c||Pt.current||Qn?(typeof d=="function"&&(fu(t,n,d,r),c=t.memoizedState),(l=Qn||ih(t,n,l,r,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ox(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:un(t.type,l),a.props=u,f=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=an(c):(c=Lt(n)?$r:xt.current,c=Ci(t,c));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&oh(t,a,r,c),Qn=!1,p=t.memoizedState,a.state=p,Pa(t,r,a,i);var m=t.memoizedState;l!==f||p!==m||Pt.current||Qn?(typeof h=="function"&&(fu(t,n,h,r),m=t.memoizedState),(u=Qn||ih(t,n,u,r,p,m,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return xu(e,t,n,r,s,i)}function xu(e,t,n,r,i,s){cy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Yf(t,n,!1),Hn(e,t,s);r=t.stateNode,bw.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Ei(t,e.child,null,s),t.child=Ei(t,null,l,s)):bt(e,t,l,s),t.memoizedState=r.state,i&&Yf(t,n,!0),t.child}function uy(e){var t=e.stateNode;t.pendingContext?Kf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kf(e,t.context,!1),Ad(e,t.containerInfo)}function ph(e,t,n,r,i){return Ni(),Sd(i),t.flags|=256,bt(e,t,n,r),t.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function vu(e){return{baseLanes:e,cachePool:null,transitions:null}}function dy(e,t,n){var r=t.pendingProps,i=Ge.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ue(Ge,i&1),e===null)return du(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ml(a,r,0,null),e=Pr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=vu(n),t.memoizedState=yu,e):Dd(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ww(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=fr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=Pr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?vu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=yu,r}return s=e.child,e=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Dd(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rs(e,t,n,r){return r!==null&&Sd(r),Ei(t,e.child,null,n),e=Dd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ww(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=sc(Error(oe(422))),Rs(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ml({mode:"visible",children:r.children},i,0,null),s=Pr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Ei(t,e.child,null,a),t.child.memoizedState=vu(a),t.memoizedState=yu,s);if(!(t.mode&1))return Rs(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(oe(419)),r=sc(s,r,void 0),Rs(e,t,a,r)}if(l=(a&e.childLanes)!==0,At||l){if(r=ct,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wn(e,i),mn(r,e,i,-1))}return Hd(),r=sc(Error(oe(421))),Rs(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Lw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Wt=cr(i.nextSibling),Gt=t,qe=!0,pn=null,e!==null&&(en[tn++]=On,en[tn++]=$n,en[tn++]=Dr,On=e.id,$n=e.overflow,Dr=t),t=Dd(t,r.children),t.flags|=4096,t)}function fh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pu(e.return,t,n)}function ac(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function py(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(bt(e,t,r.children,n),r=Ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fh(e,n,t);else if(e.tag===19)fh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ue(Ge,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&La(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ac(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&La(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ac(t,!0,n,null,s);break;case"together":ac(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Br|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(oe(153));if(t.child!==null){for(e=t.child,n=fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kw(e,t,n){switch(t.tag){case 3:uy(t),Ni();break;case 5:$x(t);break;case 1:Lt(t.type)&&Ea(t);break;case 4:Ad(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ue(Aa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ue(Ge,Ge.current&1),t.flags|=128,null):n&t.child.childLanes?dy(e,t,n):(Ue(Ge,Ge.current&1),e=Hn(e,t,n),e!==null?e.sibling:null);Ue(Ge,Ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return py(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ue(Ge,Ge.current),r)break;return null;case 22:case 23:return t.lanes=0,ly(e,t,n)}return Hn(e,t,n)}var fy,bu,hy,my;fy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bu=function(){};hy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Tr(Nn.current);var s=null;switch(n){case"input":i=Uc(e,i),r=Uc(e,r),s=[];break;case"select":i=Ye({},i,{value:void 0}),r=Ye({},r,{value:void 0}),s=[];break;case"textarea":i=Hc(e,i),r=Hc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ca)}Jc(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&We("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};my=function(e,t,n,r){n!==r&&(t.flags|=4)};function to(e,t){if(!qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function jw(e,t,n){var r=t.pendingProps;switch(_d(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(t),null;case 1:return Lt(t.type)&&Na(),mt(t),null;case 3:return r=t.stateNode,zi(),He(Pt),He(xt),Pd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pn!==null&&(Eu(pn),pn=null))),bu(e,t),mt(t),null;case 5:Md(t);var i=Tr(Wo.current);if(n=t.type,e!==null&&t.stateNode!=null)hy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(oe(166));return mt(t),null}if(e=Tr(Nn.current),Ps(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[jn]=t,r[Uo]=s,e=(t.mode&1)!==0,n){case"dialog":We("cancel",r),We("close",r);break;case"iframe":case"object":case"embed":We("load",r);break;case"video":case"audio":for(i=0;i<fo.length;i++)We(fo[i],r);break;case"source":We("error",r);break;case"img":case"image":case"link":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"input":kf(r,s),We("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},We("invalid",r);break;case"textarea":_f(r,s),We("invalid",r)}Jc(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ms(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ms(r.textContent,l,e),i=["children",""+l]):Mo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&We("scroll",r)}switch(n){case"input":_s(r),jf(r,s,!0);break;case"textarea":_s(r),Sf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ca)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[jn]=t,e[Uo]=r,fy(e,t,!1,!1),t.stateNode=e;e:{switch(a=Gc(n,r),n){case"dialog":We("cancel",e),We("close",e),i=r;break;case"iframe":case"object":case"embed":We("load",e),i=r;break;case"video":case"audio":for(i=0;i<fo.length;i++)We(fo[i],e);i=r;break;case"source":We("error",e),i=r;break;case"img":case"image":case"link":We("error",e),We("load",e),i=r;break;case"details":We("toggle",e),i=r;break;case"input":kf(e,r),i=Uc(e,r),We("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ye({},r,{value:void 0}),We("invalid",e);break;case"textarea":_f(e,r),i=Hc(e,r),We("invalid",e);break;default:i=r}Jc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?qg(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Wg(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Po(e,c):typeof c=="number"&&Po(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&We("scroll",e):c!=null&&cd(e,s,c,a))}switch(n){case"input":_s(e),jf(e,r,!1);break;case"textarea":_s(e),Sf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?hi(e,!!r.multiple,s,!1):r.defaultValue!=null&&hi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return mt(t),null;case 6:if(e&&t.stateNode!=null)my(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(oe(166));if(n=Tr(Wo.current),Tr(Nn.current),Ps(t)){if(r=t.stateNode,n=t.memoizedProps,r[jn]=t,(s=r.nodeValue!==n)&&(e=Gt,e!==null))switch(e.tag){case 3:Ms(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ms(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jn]=t,t.stateNode=r}return mt(t),null;case 13:if(He(Ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&Wt!==null&&t.mode&1&&!(t.flags&128))Px(),Ni(),t.flags|=98560,s=!1;else if(s=Ps(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(oe(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[jn]=t}else Ni(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;mt(t),s=!1}else pn!==null&&(Eu(pn),pn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ge.current&1?at===0&&(at=3):Hd())),t.updateQueue!==null&&(t.flags|=4),mt(t),null);case 4:return zi(),bu(e,t),e===null&&Fo(t.stateNode.containerInfo),mt(t),null;case 10:return Ed(t.type._context),mt(t),null;case 17:return Lt(t.type)&&Na(),mt(t),null;case 19:if(He(Ge),s=t.memoizedState,s===null)return mt(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)to(s,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=La(e),a!==null){for(t.flags|=128,to(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ue(Ge,Ge.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ze()>Ai&&(t.flags|=128,r=!0,to(s,!1),t.lanes=4194304)}else{if(!r)if(e=La(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!qe)return mt(t),null}else 2*Ze()-s.renderingStartTime>Ai&&n!==1073741824&&(t.flags|=128,r=!0,to(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ze(),t.sibling=null,n=Ge.current,Ue(Ge,r?n&1|2:n&1),t):(mt(t),null);case 22:case 23:return Wd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ut&1073741824&&(mt(t),t.subtreeFlags&6&&(t.flags|=8192)):mt(t),null;case 24:return null;case 25:return null}throw Error(oe(156,t.tag))}function _w(e,t){switch(_d(t),t.tag){case 1:return Lt(t.type)&&Na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zi(),He(Pt),He(xt),Pd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Md(t),null;case 13:if(He(Ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(oe(340));Ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return He(Ge),null;case 4:return zi(),null;case 10:return Ed(t.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var Is=!1,gt=!1,Sw=typeof WeakSet=="function"?WeakSet:Set,ve=null;function di(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(e,t,r)}else n.current=null}function wu(e,t,n){try{n()}catch(r){Qe(e,t,r)}}var hh=!1;function Cw(e,t){if(iu=ja,e=bx(),kd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==s||r!==0&&f.nodeType!==3||(c=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===i&&(l=a),p===s&&++d===r&&(c=a),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},ja=!1,ve=t;ve!==null;)if(t=ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ve=e;else for(;ve!==null;){t=ve;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,j=m.memoizedState,g=t.stateNode,x=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:un(t.type,v),j);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(_){Qe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,ve=e;break}ve=t.return}return m=hh,hh=!1,m}function _o(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&wu(t,n,s)}i=i.next}while(i!==r)}}function fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ku(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gy(e){var t=e.alternate;t!==null&&(e.alternate=null,gy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jn],delete t[Uo],delete t[lu],delete t[lw],delete t[cw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xy(e){return e.tag===5||e.tag===3||e.tag===4}function mh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ju(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ca));else if(r!==4&&(e=e.child,e!==null))for(ju(e,t,n),e=e.sibling;e!==null;)ju(e,t,n),e=e.sibling}function _u(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_u(e,t,n),e=e.sibling;e!==null;)_u(e,t,n),e=e.sibling}var ut=null,dn=!1;function Gn(e,t,n){for(n=n.child;n!==null;)yy(e,t,n),n=n.sibling}function yy(e,t,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:gt||di(n,t);case 6:var r=ut,i=dn;ut=null,Gn(e,t,n),ut=r,dn=i,ut!==null&&(dn?(e=ut,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(dn?(e=ut,n=n.stateNode,e.nodeType===8?ec(e.parentNode,n):e.nodeType===1&&ec(e,n),Oo(e)):ec(ut,n.stateNode));break;case 4:r=ut,i=dn,ut=n.stateNode.containerInfo,dn=!0,Gn(e,t,n),ut=r,dn=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&wu(n,t,a),i=i.next}while(i!==r)}Gn(e,t,n);break;case 1:if(!gt&&(di(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Qe(n,t,l)}Gn(e,t,n);break;case 21:Gn(e,t,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,Gn(e,t,n),gt=r):Gn(e,t,n);break;default:Gn(e,t,n)}}function gh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sw),t.forEach(function(r){var i=Rw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ut=l.stateNode,dn=!1;break e;case 3:ut=l.stateNode.containerInfo,dn=!0;break e;case 4:ut=l.stateNode.containerInfo,dn=!0;break e}l=l.return}if(ut===null)throw Error(oe(160));yy(s,a,i),ut=null,dn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Qe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vy(t,e),t=t.sibling}function vy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(cn(t,e),bn(e),r&4){try{_o(3,e,e.return),fl(3,e)}catch(v){Qe(e,e.return,v)}try{_o(5,e,e.return)}catch(v){Qe(e,e.return,v)}}break;case 1:cn(t,e),bn(e),r&512&&n!==null&&di(n,n.return);break;case 5:if(cn(t,e),bn(e),r&512&&n!==null&&di(n,n.return),e.flags&32){var i=e.stateNode;try{Po(i,"")}catch(v){Qe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Bg(i,s),Gc(l,a);var u=Gc(l,s);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?qg(i,f):d==="dangerouslySetInnerHTML"?Wg(i,f):d==="children"?Po(i,f):cd(i,d,f,u)}switch(l){case"input":Vc(i,s);break;case"textarea":Ug(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?hi(i,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?hi(i,!!s.multiple,s.defaultValue,!0):hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Uo]=s}catch(v){Qe(e,e.return,v)}}break;case 6:if(cn(t,e),bn(e),r&4){if(e.stateNode===null)throw Error(oe(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Qe(e,e.return,v)}}break;case 3:if(cn(t,e),bn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(v){Qe(e,e.return,v)}break;case 4:cn(t,e),bn(e);break;case 13:cn(t,e),bn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ud=Ze())),r&4&&gh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(gt=(u=gt)||d,cn(t,e),gt=u):cn(t,e),bn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ve=e,d=e.child;d!==null;){for(f=ve=d;ve!==null;){switch(p=ve,h=p.child,p.tag){case 0:case 11:case 14:case 15:_o(4,p,p.return);break;case 1:di(p,p.return);var m=p.stateNode;if(typeof m.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(v){Qe(r,n,v)}}break;case 5:di(p,p.return);break;case 22:if(p.memoizedState!==null){yh(f);continue}}h!==null?(h.return=p,ve=h):yh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Hg("display",a))}catch(v){Qe(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Qe(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(t,e),bn(e),r&4&&gh(e);break;case 21:break;default:cn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xy(n)){var r=n;break e}n=n.return}throw Error(oe(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Po(i,""),r.flags&=-33);var s=mh(e);_u(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=mh(e);ju(e,l,a);break;default:throw Error(oe(161))}}catch(c){Qe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nw(e,t,n){ve=e,by(e)}function by(e,t,n){for(var r=(e.mode&1)!==0;ve!==null;){var i=ve,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Is;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||gt;l=Is;var u=gt;if(Is=a,(gt=c)&&!u)for(ve=i;ve!==null;)a=ve,c=a.child,a.tag===22&&a.memoizedState!==null?vh(i):c!==null?(c.return=a,ve=c):vh(i);for(;s!==null;)ve=s,by(s),s=s.sibling;ve=i,Is=l,gt=u}xh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ve=s):xh(e)}}function xh(e){for(;ve!==null;){var t=ve;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:gt||fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:un(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&th(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}th(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Oo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}gt||t.flags&512&&ku(t)}catch(p){Qe(t,t.return,p)}}if(t===e){ve=null;break}if(n=t.sibling,n!==null){n.return=t.return,ve=n;break}ve=t.return}}function yh(e){for(;ve!==null;){var t=ve;if(t===e){ve=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ve=n;break}ve=t.return}}function vh(e){for(;ve!==null;){var t=ve;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fl(4,t)}catch(c){Qe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Qe(t,i,c)}}var s=t.return;try{ku(t)}catch(c){Qe(t,s,c)}break;case 5:var a=t.return;try{ku(t)}catch(c){Qe(t,a,c)}}}catch(c){Qe(t,t.return,c)}if(t===e){ve=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ve=l;break}ve=t.return}}var Ew=Math.ceil,Oa=Jn.ReactCurrentDispatcher,Fd=Jn.ReactCurrentOwner,sn=Jn.ReactCurrentBatchConfig,Re=0,ct=null,rt=null,dt=0,Ut=0,pi=br(0),at=0,Go=null,Br=0,hl=0,Bd=0,So=null,Tt=null,Ud=0,Ai=1/0,Ln=null,$a=!1,Su=null,dr=null,Os=!1,nr=null,Da=0,Co=0,Cu=null,sa=-1,aa=0;function _t(){return Re&6?Ze():sa!==-1?sa:sa=Ze()}function pr(e){return e.mode&1?Re&2&&dt!==0?dt&-dt:dw.transition!==null?(aa===0&&(aa=ix()),aa):(e=$e,e!==0||(e=window.event,e=e===void 0?16:dx(e.type)),e):1}function mn(e,t,n,r){if(50<Co)throw Co=0,Cu=null,Error(oe(185));ss(e,n,r),(!(Re&2)||e!==ct)&&(e===ct&&(!(Re&2)&&(hl|=n),at===4&&er(e,dt)),Rt(e,r),n===1&&Re===0&&!(t.mode&1)&&(Ai=Ze()+500,ul&&wr()))}function Rt(e,t){var n=e.callbackNode;db(e,t);var r=ka(e,e===ct?dt:0);if(r===0)n!==null&&Ef(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ef(n),t===1)e.tag===0?uw(bh.bind(null,e)):Tx(bh.bind(null,e)),sw(function(){!(Re&6)&&wr()}),n=null;else{switch(ox(r)){case 1:n=hd;break;case 4:n=nx;break;case 16:n=wa;break;case 536870912:n=rx;break;default:n=wa}n=Ey(n,wy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wy(e,t){if(sa=-1,aa=0,Re&6)throw Error(oe(327));var n=e.callbackNode;if(vi()&&e.callbackNode!==n)return null;var r=ka(e,e===ct?dt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fa(e,r);else{t=r;var i=Re;Re|=2;var s=jy();(ct!==e||dt!==t)&&(Ln=null,Ai=Ze()+500,Mr(e,t));do try{Aw();break}catch(l){ky(e,l)}while(!0);Nd(),Oa.current=s,Re=i,rt!==null?t=0:(ct=null,dt=0,t=at)}if(t!==0){if(t===2&&(i=Zc(e),i!==0&&(r=i,t=Nu(e,i))),t===1)throw n=Go,Mr(e,0),er(e,r),Rt(e,Ze()),n;if(t===6)er(e,r);else{if(i=e.current.alternate,!(r&30)&&!zw(i)&&(t=Fa(e,r),t===2&&(s=Zc(e),s!==0&&(r=s,t=Nu(e,s))),t===1))throw n=Go,Mr(e,0),er(e,r),Rt(e,Ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(oe(345));case 2:Cr(e,Tt,Ln);break;case 3:if(er(e,r),(r&130023424)===r&&(t=Ud+500-Ze(),10<t)){if(ka(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){_t(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=au(Cr.bind(null,e,Tt,Ln),t);break}Cr(e,Tt,Ln);break;case 4:if(er(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-hn(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ew(r/1960))-r,10<r){e.timeoutHandle=au(Cr.bind(null,e,Tt,Ln),r);break}Cr(e,Tt,Ln);break;case 5:Cr(e,Tt,Ln);break;default:throw Error(oe(329))}}}return Rt(e,Ze()),e.callbackNode===n?wy.bind(null,e):null}function Nu(e,t){var n=So;return e.current.memoizedState.isDehydrated&&(Mr(e,t).flags|=256),e=Fa(e,t),e!==2&&(t=Tt,Tt=n,t!==null&&Eu(t)),e}function Eu(e){Tt===null?Tt=e:Tt.push.apply(Tt,e)}function zw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function er(e,t){for(t&=~Bd,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hn(t),r=1<<n;e[n]=-1,t&=~r}}function bh(e){if(Re&6)throw Error(oe(327));vi();var t=ka(e,0);if(!(t&1))return Rt(e,Ze()),null;var n=Fa(e,t);if(e.tag!==0&&n===2){var r=Zc(e);r!==0&&(t=r,n=Nu(e,r))}if(n===1)throw n=Go,Mr(e,0),er(e,t),Rt(e,Ze()),n;if(n===6)throw Error(oe(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,Tt,Ln),Rt(e,Ze()),null}function Vd(e,t){var n=Re;Re|=1;try{return e(t)}finally{Re=n,Re===0&&(Ai=Ze()+500,ul&&wr())}}function Ur(e){nr!==null&&nr.tag===0&&!(Re&6)&&vi();var t=Re;Re|=1;var n=sn.transition,r=$e;try{if(sn.transition=null,$e=1,e)return e()}finally{$e=r,sn.transition=n,Re=t,!(Re&6)&&wr()}}function Wd(){Ut=pi.current,He(pi)}function Mr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ow(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(_d(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Na();break;case 3:zi(),He(Pt),He(xt),Pd();break;case 5:Md(r);break;case 4:zi();break;case 13:He(Ge);break;case 19:He(Ge);break;case 10:Ed(r.type._context);break;case 22:case 23:Wd()}n=n.return}if(ct=e,rt=e=fr(e.current,null),dt=Ut=t,at=0,Go=null,Bd=hl=Br=0,Tt=So=null,zr!==null){for(t=0;t<zr.length;t++)if(n=zr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}zr=null}return e}function ky(e,t){do{var n=rt;try{if(Nd(),ra.current=Ia,Ra){for(var r=Ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ra=!1}if(Fr=0,lt=st=Ke=null,jo=!1,Ho=0,Fd.current=null,n===null||n.return===null){at=1,Go=t,rt=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=dt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ah(a);if(h!==null){h.flags&=-257,lh(h,a,l,s,t),h.mode&1&&sh(s,u,t),t=h,c=u;var m=t.updateQueue;if(m===null){var v=new Set;v.add(c),t.updateQueue=v}else m.add(c);break e}else{if(!(t&1)){sh(s,u,t),Hd();break e}c=Error(oe(426))}}else if(qe&&l.mode&1){var j=ah(a);if(j!==null){!(j.flags&65536)&&(j.flags|=256),lh(j,a,l,s,t),Sd(Ti(c,l));break e}}s=c=Ti(c,l),at!==4&&(at=2),So===null?So=[s]:So.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=oy(s,c,t);eh(s,g);break e;case 1:l=c;var x=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(dr===null||!dr.has(w)))){s.flags|=65536,t&=-t,s.lanes|=t;var _=sy(s,l,t);eh(s,_);break e}}s=s.return}while(s!==null)}Sy(n)}catch(z){t=z,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(!0)}function jy(){var e=Oa.current;return Oa.current=Ia,e===null?Ia:e}function Hd(){(at===0||at===3||at===2)&&(at=4),ct===null||!(Br&268435455)&&!(hl&268435455)||er(ct,dt)}function Fa(e,t){var n=Re;Re|=2;var r=jy();(ct!==e||dt!==t)&&(Ln=null,Mr(e,t));do try{Tw();break}catch(i){ky(e,i)}while(!0);if(Nd(),Re=n,Oa.current=r,rt!==null)throw Error(oe(261));return ct=null,dt=0,at}function Tw(){for(;rt!==null;)_y(rt)}function Aw(){for(;rt!==null&&!nb();)_y(rt)}function _y(e){var t=Ny(e.alternate,e,Ut);e.memoizedProps=e.pendingProps,t===null?Sy(e):rt=t,Fd.current=null}function Sy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_w(n,t),n!==null){n.flags&=32767,rt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,rt=null;return}}else if(n=jw(n,t,Ut),n!==null){rt=n;return}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);at===0&&(at=5)}function Cr(e,t,n){var r=$e,i=sn.transition;try{sn.transition=null,$e=1,Mw(e,t,n,r)}finally{sn.transition=i,$e=r}return null}function Mw(e,t,n,r){do vi();while(nr!==null);if(Re&6)throw Error(oe(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(oe(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(pb(e,s),e===ct&&(rt=ct=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Os||(Os=!0,Ey(wa,function(){return vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var a=$e;$e=1;var l=Re;Re|=4,Fd.current=null,Cw(e,n),vy(n,e),Xb(ou),ja=!!iu,ou=iu=null,e.current=n,Nw(n),rb(),Re=l,$e=a,sn.transition=s}else e.current=n;if(Os&&(Os=!1,nr=e,Da=i),s=e.pendingLanes,s===0&&(dr=null),sb(n.stateNode),Rt(e,Ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($a)throw $a=!1,e=Su,Su=null,e;return Da&1&&e.tag!==0&&vi(),s=e.pendingLanes,s&1?e===Cu?Co++:(Co=0,Cu=e):Co=0,wr(),null}function vi(){if(nr!==null){var e=ox(Da),t=sn.transition,n=$e;try{if(sn.transition=null,$e=16>e?16:e,nr===null)var r=!1;else{if(e=nr,nr=null,Da=0,Re&6)throw Error(oe(331));var i=Re;for(Re|=4,ve=e.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ve=u;ve!==null;){var d=ve;switch(d.tag){case 0:case 11:case 15:_o(8,d,s)}var f=d.child;if(f!==null)f.return=d,ve=f;else for(;ve!==null;){d=ve;var p=d.sibling,h=d.return;if(gy(d),d===u){ve=null;break}if(p!==null){p.return=h,ve=p;break}ve=h}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ve=g;break e}ve=s.return}}var x=e.current;for(ve=x;ve!==null;){a=ve;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,ve=w;else e:for(a=x;ve!==null;){if(l=ve,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fl(9,l)}}catch(z){Qe(l,l.return,z)}if(l===a){ve=null;break e}var _=l.sibling;if(_!==null){_.return=l.return,ve=_;break e}ve=l.return}}if(Re=i,wr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{$e=n,sn.transition=t}}return!1}function wh(e,t,n){t=Ti(n,t),t=oy(e,t,1),e=ur(e,t,1),t=_t(),e!==null&&(ss(e,1,t),Rt(e,t))}function Qe(e,t,n){if(e.tag===3)wh(e,e,n);else for(;t!==null;){if(t.tag===3){wh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dr===null||!dr.has(r))){e=Ti(n,e),e=sy(t,e,1),t=ur(t,e,1),e=_t(),t!==null&&(ss(t,1,e),Rt(t,e));break}}t=t.return}}function Pw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_t(),e.pingedLanes|=e.suspendedLanes&n,ct===e&&(dt&n)===n&&(at===4||at===3&&(dt&130023424)===dt&&500>Ze()-Ud?Mr(e,0):Bd|=n),Rt(e,t)}function Cy(e,t){t===0&&(e.mode&1?(t=Ns,Ns<<=1,!(Ns&130023424)&&(Ns=4194304)):t=1);var n=_t();e=Wn(e,t),e!==null&&(ss(e,t,n),Rt(e,n))}function Lw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cy(e,n)}function Rw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(oe(314))}r!==null&&r.delete(t),Cy(e,n)}var Ny;Ny=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pt.current)At=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return At=!1,kw(e,t,n);At=!!(e.flags&131072)}else At=!1,qe&&t.flags&1048576&&Ax(t,Ta,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;oa(e,t),e=t.pendingProps;var i=Ci(t,xt.current);yi(t,n),i=Rd(null,t,r,e,i,n);var s=Id();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lt(r)?(s=!0,Ea(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Td(t),i.updater=pl,t.stateNode=i,i._reactInternals=t,hu(t,r,e,n),t=xu(null,t,r,!0,s,n)):(t.tag=0,qe&&s&&jd(t),bt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(oa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ow(r),e=un(r,e),i){case 0:t=gu(null,t,r,e,n);break e;case 1:t=dh(null,t,r,e,n);break e;case 11:t=ch(null,t,r,e,n);break e;case 14:t=uh(null,t,r,un(r.type,e),n);break e}throw Error(oe(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),gu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),dh(e,t,r,i,n);case 3:e:{if(uy(t),e===null)throw Error(oe(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Ox(e,t),Pa(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ti(Error(oe(423)),t),t=ph(e,t,r,n,i);break e}else if(r!==i){i=Ti(Error(oe(424)),t),t=ph(e,t,r,n,i);break e}else for(Wt=cr(t.stateNode.containerInfo.firstChild),Gt=t,qe=!0,pn=null,n=Rx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ni(),r===i){t=Hn(e,t,n);break e}bt(e,t,r,n)}t=t.child}return t;case 5:return $x(t),e===null&&du(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,su(r,i)?a=null:s!==null&&su(r,s)&&(t.flags|=32),cy(e,t),bt(e,t,a,n),t.child;case 6:return e===null&&du(t),null;case 13:return dy(e,t,n);case 4:return Ad(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ei(t,null,r,n):bt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),ch(e,t,r,i,n);case 7:return bt(e,t,t.pendingProps,n),t.child;case 8:return bt(e,t,t.pendingProps.children,n),t.child;case 12:return bt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Ue(Aa,r._currentValue),r._currentValue=a,s!==null)if(xn(s.value,a)){if(s.children===i.children&&!Pt.current){t=Hn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Fn(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),pu(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),pu(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}bt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yi(t,n),i=an(i),r=r(i),t.flags|=1,bt(e,t,r,n),t.child;case 14:return r=t.type,i=un(r,t.pendingProps),i=un(r.type,i),uh(e,t,r,i,n);case 15:return ay(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:un(r,i),oa(e,t),t.tag=1,Lt(r)?(e=!0,Ea(t)):e=!1,yi(t,n),iy(t,r,i),hu(t,r,i,n),xu(null,t,r,!0,e,n);case 19:return py(e,t,n);case 22:return ly(e,t,n)}throw Error(oe(156,t.tag))};function Ey(e,t){return tx(e,t)}function Iw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(e,t,n,r){return new Iw(e,t,n,r)}function qd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ow(e){if(typeof e=="function")return qd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dd)return 11;if(e===pd)return 14}return 2}function fr(e,t){var n=e.alternate;return n===null?(n=rn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function la(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")qd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ni:return Pr(n.children,i,s,t);case ud:a=8,i|=8;break;case $c:return e=rn(12,n,t,i|2),e.elementType=$c,e.lanes=s,e;case Dc:return e=rn(13,n,t,i),e.elementType=Dc,e.lanes=s,e;case Fc:return e=rn(19,n,t,i),e.elementType=Fc,e.lanes=s,e;case $g:return ml(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ig:a=10;break e;case Og:a=9;break e;case dd:a=11;break e;case pd:a=14;break e;case Yn:a=16,r=null;break e}throw Error(oe(130,e==null?e:typeof e,""))}return t=rn(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Pr(e,t,n,r){return e=rn(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=rn(22,e,r,t),e.elementType=$g,e.lanes=n,e.stateNode={isHidden:!1},e}function lc(e,t,n){return e=rn(6,e,null,t),e.lanes=n,e}function cc(e,t,n){return t=rn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $w(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vl(0),this.expirationTimes=Vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jd(e,t,n,r,i,s,a,l,c){return e=new $w(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=rn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),e}function Dw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ti,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zy(e){if(!e)return gr;e=e._reactInternals;e:{if(qr(e)!==e||e.tag!==1)throw Error(oe(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(oe(171))}if(e.tag===1){var n=e.type;if(Lt(n))return zx(e,n,t)}return t}function Ty(e,t,n,r,i,s,a,l,c){return e=Jd(n,r,!0,e,i,s,a,l,c),e.context=zy(null),n=e.current,r=_t(),i=pr(n),s=Fn(r,i),s.callback=t??null,ur(n,s,i),e.current.lanes=i,ss(e,i,r),Rt(e,r),e}function gl(e,t,n,r){var i=t.current,s=_t(),a=pr(i);return n=zy(n),t.context===null?t.context=n:t.pendingContext=n,t=Fn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ur(i,t,a),e!==null&&(mn(e,i,a,s),na(e,i,a)),a}function Ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gd(e,t){kh(e,t),(e=e.alternate)&&kh(e,t)}function Fw(){return null}var Ay=typeof reportError=="function"?reportError:function(e){console.error(e)};function Kd(e){this._internalRoot=e}xl.prototype.render=Kd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(oe(409));gl(e,t,null,null)};xl.prototype.unmount=Kd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ur(function(){gl(null,e,null,null)}),t[Vn]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=lx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zn.length&&t!==0&&t<Zn[n].priority;n++);Zn.splice(n,0,e),n===0&&ux(e)}};function Yd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jh(){}function Bw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ba(a);s.call(u)}}var a=Ty(t,r,e,0,null,!1,!1,"",jh);return e._reactRootContainer=a,e[Vn]=a.current,Fo(e.nodeType===8?e.parentNode:e),Ur(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ba(c);l.call(u)}}var c=Jd(e,0,!1,null,null,!1,!1,"",jh);return e._reactRootContainer=c,e[Vn]=c.current,Fo(e.nodeType===8?e.parentNode:e),Ur(function(){gl(t,c,n,r)}),c}function vl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=Ba(a);l.call(c)}}gl(t,a,e,i)}else a=Bw(n,t,e,i,r);return Ba(a)}sx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=po(t.pendingLanes);n!==0&&(md(t,n|1),Rt(t,Ze()),!(Re&6)&&(Ai=Ze()+500,wr()))}break;case 13:Ur(function(){var r=Wn(e,1);if(r!==null){var i=_t();mn(r,e,1,i)}}),Gd(e,1)}};gd=function(e){if(e.tag===13){var t=Wn(e,134217728);if(t!==null){var n=_t();mn(t,e,134217728,n)}Gd(e,134217728)}};ax=function(e){if(e.tag===13){var t=pr(e),n=Wn(e,t);if(n!==null){var r=_t();mn(n,e,t,r)}Gd(e,t)}};lx=function(){return $e};cx=function(e,t){var n=$e;try{return $e=e,t()}finally{$e=n}};Yc=function(e,t,n){switch(t){case"input":if(Vc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=cl(r);if(!i)throw Error(oe(90));Fg(r),Vc(r,i)}}}break;case"textarea":Ug(e,n);break;case"select":t=n.value,t!=null&&hi(e,!!n.multiple,t,!1)}};Kg=Vd;Yg=Ur;var Uw={usingClientEntryPoint:!1,Events:[ls,si,cl,Jg,Gg,Vd]},no={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vw={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zg(e),e===null?null:e.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||Fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$s.isDisabled&&$s.supportsFiber)try{ol=$s.inject(Vw),Cn=$s}catch{}}Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw;Qt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(t))throw Error(oe(200));return Dw(e,t,null,n)};Qt.createRoot=function(e,t){if(!Yd(e))throw Error(oe(299));var n=!1,r="",i=Ay;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jd(e,1,!1,null,null,n,!1,r,i),e[Vn]=t.current,Fo(e.nodeType===8?e.parentNode:e),new Kd(t)};Qt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(oe(188)):(e=Object.keys(e).join(","),Error(oe(268,e)));return e=Zg(t),e=e===null?null:e.stateNode,e};Qt.flushSync=function(e){return Ur(e)};Qt.hydrate=function(e,t,n){if(!yl(t))throw Error(oe(200));return vl(null,e,t,!0,n)};Qt.hydrateRoot=function(e,t,n){if(!Yd(e))throw Error(oe(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Ay;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ty(t,null,e,1,n??null,i,!1,s,a),e[Vn]=t.current,Fo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new xl(t)};Qt.render=function(e,t,n){if(!yl(t))throw Error(oe(200));return vl(null,e,t,!1,n)};Qt.unmountComponentAtNode=function(e){if(!yl(e))throw Error(oe(40));return e._reactRootContainer?(Ur(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[Vn]=null})}),!0):!1};Qt.unstable_batchedUpdates=Vd;Qt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(oe(200));if(e==null||e._reactInternals===void 0)throw Error(oe(38));return vl(e,t,n,!1,r)};Qt.version="18.3.1-next-f1338f8080-20240426";function My(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(My)}catch(e){console.error(e)}}My(),Mg.exports=Qt;var Qd=Mg.exports,_h=Qd;Ic.createRoot=_h.createRoot,Ic.hydrateRoot=_h.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ko.apply(this,arguments)}var rr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rr||(rr={}));const Sh="popstate";function Ww(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return zu("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Py(i)}return qw(t,n,null,e)}function it(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hw(){return Math.random().toString(36).substr(2,8)}function Ch(e,t){return{usr:e.state,key:e.key,idx:t}}function zu(e,t,n,r){return n===void 0&&(n=null),Ko({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Fi(t):t,{state:n,key:t&&t.key||r||Hw()})}function Py(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Fi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function qw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=rr.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Ko({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=rr.Pop;let j=d(),g=j==null?null:j-u;u=j,c&&c({action:l,location:v.location,delta:g})}function p(j,g){l=rr.Push;let x=zu(v.location,j,g);u=d()+1;let w=Ch(x,u),_=v.createHref(x);try{a.pushState(w,"",_)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(_)}s&&c&&c({action:l,location:v.location,delta:1})}function h(j,g){l=rr.Replace;let x=zu(v.location,j,g);u=d();let w=Ch(x,u),_=v.createHref(x);a.replaceState(w,"",_),s&&c&&c({action:l,location:v.location,delta:0})}function m(j){let g=i.location.origin!=="null"?i.location.origin:i.location.href,x=typeof j=="string"?j:Py(j);return x=x.replace(/ $/,"%20"),it(g,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,g)}let v={get action(){return l},get location(){return e(i,a)},listen(j){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Sh,f),c=j,()=>{i.removeEventListener(Sh,f),c=null}},createHref(j){return t(i,j)},createURL:m,encodeLocation(j){let g=m(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(j){return a.go(j)}};return v}var Nh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Nh||(Nh={}));function Jw(e,t,n){return n===void 0&&(n="/"),Gw(e,t,n)}function Gw(e,t,n,r){let i=typeof t=="string"?Fi(t):t,s=Iy(i.pathname||"/",n);if(s==null)return null;let a=Ly(e);Kw(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=ak(s);l=ik(a[c],u)}return l}function Ly(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(it(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Lr([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(it(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ly(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:nk(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of Ry(s.path))i(s,a,c)}),t}function Ry(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Ry(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Kw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:rk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Yw=/^:[\w-]+$/,Qw=3,Xw=2,Zw=1,ek=10,tk=-2,Eh=e=>e==="*";function nk(e,t){let n=e.split("/"),r=n.length;return n.some(Eh)&&(r+=tk),t&&(r+=Xw),n.filter(i=>!Eh(i)).reduce((i,s)=>i+(Yw.test(s)?Qw:s===""?Zw:ek),r)}function rk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function ik(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=ok({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:Lr([s,f.pathname]),pathnameBase:pk(Lr([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Lr([s,f.pathnameBase]))}return a}function ok(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=sk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:p,isOptional:h}=d;if(p==="*"){let v=l[f]||"";a=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const m=l[f];return h&&!m?u[p]=void 0:u[p]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function sk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ak(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Iy(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const lk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ck=e=>lk.test(e);function uk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Fi(e):e,s;if(n)if(ck(n))s=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Xd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=zh(n.substring(1),"/"):s=zh(n,t)}else s=t;return{pathname:s,search:fk(r),hash:hk(i)}}function zh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function uc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Oy(e,t){let n=dk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $y(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Fi(e):(i=Ko({},e),it(!i.pathname||!i.pathname.includes("?"),uc("?","pathname","search",i)),it(!i.pathname||!i.pathname.includes("#"),uc("#","pathname","hash",i)),it(!i.search||!i.search.includes("#"),uc("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=uk(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Lr=e=>e.join("/").replace(/\/\/+/g,"/"),pk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,hk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Dy=["post","put","patch","delete"];new Set(Dy);const gk=["get",...Dy];new Set(gk);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}const Zd=k.createContext(null),xk=k.createContext(null),us=k.createContext(null),bl=k.createContext(null),kr=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Fy=k.createContext(null);function ds(){return k.useContext(bl)!=null}function ep(){return ds()||it(!1),k.useContext(bl).location}function By(e){k.useContext(us).static||k.useLayoutEffect(e)}function tp(){let{isDataRoute:e}=k.useContext(kr);return e?Ak():yk()}function yk(){ds()||it(!1);let e=k.useContext(Zd),{basename:t,future:n,navigator:r}=k.useContext(us),{matches:i}=k.useContext(kr),{pathname:s}=ep(),a=JSON.stringify(Oy(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return By(()=>{l.current=!0}),k.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=$y(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Lr([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,s,e])}function vk(){let{matches:e}=k.useContext(kr),t=e[e.length-1];return t?t.params:{}}function bk(e,t){return wk(e,t)}function wk(e,t,n,r){ds()||it(!1);let{navigator:i}=k.useContext(us),{matches:s}=k.useContext(kr),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=ep(),d;if(t){var f;let j=typeof t=="string"?Fi(t):t;c==="/"||(f=j.pathname)!=null&&f.startsWith(c)||it(!1),d=j}else d=u;let p=d.pathname||"/",h=p;if(c!=="/"){let j=c.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(j.length).join("/")}let m=Jw(e,{pathname:h}),v=Ck(m&&m.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Lr([c,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?c:Lr([c,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),s,n,r);return t&&v?k.createElement(bl.Provider,{value:{location:Yo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:rr.Pop}},v):v}function kk(){let e=Tk(),t=mk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const jk=k.createElement(kk,null);class _k extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(kr.Provider,{value:this.props.routeContext},k.createElement(Fy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sk(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Zd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(kr.Provider,{value:t},r)}function Ck(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||it(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:h}=n,m=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||m){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let h,m=!1,v=null,j=null;n&&(h=l&&f.route.id?l[f.route.id]:void 0,v=f.route.errorElement||jk,c&&(u<0&&p===0?(Mk("route-fallback"),m=!0,j=null):u===p&&(m=!0,j=f.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,p+1)),x=()=>{let w;return h?w=v:m?w=j:f.route.Component?w=k.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=d,k.createElement(Sk,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:w})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?k.createElement(_k,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:x(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):x()},null)}var Uy=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Uy||{}),Vy=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vy||{});function Nk(e){let t=k.useContext(Zd);return t||it(!1),t}function Ek(e){let t=k.useContext(xk);return t||it(!1),t}function zk(e){let t=k.useContext(kr);return t||it(!1),t}function Wy(e){let t=zk(),n=t.matches[t.matches.length-1];return n.route.id||it(!1),n.route.id}function Tk(){var e;let t=k.useContext(Fy),n=Ek(),r=Wy();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ak(){let{router:e}=Nk(Uy.UseNavigateStable),t=Wy(Vy.UseNavigateStable),n=k.useRef(!1);return By(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Yo({fromRouteId:t},s)))},[e,t])}const Th={};function Mk(e,t,n){Th[e]||(Th[e]=!0)}function Pk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Lk(e){let{to:t,replace:n,state:r,relative:i}=e;ds()||it(!1);let{future:s,static:a}=k.useContext(us),{matches:l}=k.useContext(kr),{pathname:c}=ep(),u=tp(),d=$y(t,Oy(l,s.v7_relativeSplatPath),c,i==="path"),f=JSON.stringify(d);return k.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function ei(e){it(!1)}function Rk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=rr.Pop,navigator:s,static:a=!1,future:l}=e;ds()&&it(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:s,static:a,future:Yo({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=Fi(r));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:m="default"}=r,v=k.useMemo(()=>{let j=Iy(d,c);return j==null?null:{location:{pathname:j,search:f,hash:p,state:h,key:m},navigationType:i}},[c,d,f,p,h,m,i]);return v==null?null:k.createElement(us.Provider,{value:u},k.createElement(bl.Provider,{children:n,value:v}))}function Ik(e){let{children:t,location:n}=e;return bk(Tu(t),n)}new Promise(()=>{});function Tu(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Tu(r.props.children,s));return}r.type!==ei&&it(!1),!r.props.index||!r.props.children||it(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Tu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ok="6";try{window.__reactRouterVersion=Ok}catch{}const $k="startTransition",Ah=P0[$k];function Dk(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=Ww({window:i,v5Compat:!0}));let a=s.current,[l,c]=k.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=k.useCallback(f=>{u&&Ah?Ah(()=>c(f)):c(f)},[c,u]);return k.useLayoutEffect(()=>a.listen(d),[a,d]),k.useEffect(()=>Pk(r),[r]),k.createElement(Rk,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var Mh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mh||(Mh={}));var Ph;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ph||(Ph={}));const Fk={},Lh=e=>{let t;const n=new Set,r=(d,f)=>{const p=typeof d=="function"?d(t):d;if(!Object.is(p,t)){const h=t;t=f??(typeof p!="object"||p===null)?p:Object.assign({},t,p),n.forEach(m=>m(t,h))}},i=()=>t,c={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Fk?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},u=t=e(r,i,c);return c},Bk=e=>e?Lh(e):Lh;var Hy={exports:{}},qy={},Jy={exports:{}},Gy={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=k;function Uk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vk=typeof Object.is=="function"?Object.is:Uk,Wk=Mi.useState,Hk=Mi.useEffect,qk=Mi.useLayoutEffect,Jk=Mi.useDebugValue;function Gk(e,t){var n=t(),r=Wk({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return qk(function(){i.value=n,i.getSnapshot=t,dc(i)&&s({inst:i})},[e,n,t]),Hk(function(){return dc(i)&&s({inst:i}),e(function(){dc(i)&&s({inst:i})})},[e]),Jk(n),n}function dc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vk(e,n)}catch{return!0}}function Kk(e,t){return t()}var Yk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Kk:Gk;Gy.useSyncExternalStore=Mi.useSyncExternalStore!==void 0?Mi.useSyncExternalStore:Yk;Jy.exports=Gy;var Qk=Jy.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=k,Xk=Qk;function Zk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ej=typeof Object.is=="function"?Object.is:Zk,tj=Xk.useSyncExternalStore,nj=wl.useRef,rj=wl.useEffect,ij=wl.useMemo,oj=wl.useDebugValue;qy.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=nj(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=ij(function(){function c(h){if(!u){if(u=!0,d=h,h=r(h),i!==void 0&&a.hasValue){var m=a.value;if(i(m,h))return f=m}return f=h}if(m=f,ej(d,h))return m;var v=r(h);return i!==void 0&&i(m,v)?(d=h,m):(d=h,f=v)}var u=!1,d,f,p=n===void 0?null:n;return[function(){return c(t())},p===null?void 0:function(){return c(p())}]},[t,n,r,i]);var l=tj(e,s[0],s[1]);return rj(function(){a.hasValue=!0,a.value=l},[l]),oj(l),l};Hy.exports=qy;var sj=Hy.exports;const aj=rl(sj),Ky={},{useDebugValue:lj}=Jt,{useSyncExternalStoreWithSelector:cj}=aj;let Rh=!1;const uj=e=>e;function dj(e,t=uj,n){(Ky?"production":void 0)!=="production"&&n&&!Rh&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Rh=!0);const r=cj(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return lj(r),r}const Ih=e=>{(Ky?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?Bk(e):e,n=(r,i)=>dj(t,r,i);return Object.assign(n,t),n},pj=e=>e?Ih(e):Ih,yt=pj((e,t)=>({project:null,selectedAgentId:null,selectedToolId:null,mcpServers:[],builtinTools:[],isRunning:!1,runEvents:[],watches:[],activeTab:"app",sidebarOpen:!0,hasUnsavedChanges:!1,runAgentId:null,currentSessionId:null,setProject:n=>{var i;const r=((i=n==null?void 0:n.watches)==null?void 0:i.map(s=>({...s,result:void 0,error:void 0,isLoading:!1,lastRun:void 0,history:[]})))||[];e({project:n,watches:r})},setSelectedAgentId:n=>e({selectedAgentId:n}),setSelectedToolId:n=>e({selectedToolId:n}),setMcpServers:n=>e({mcpServers:n}),setBuiltinTools:n=>e({builtinTools:n}),setIsRunning:n=>e({isRunning:n}),addRunEvent:n=>e(r=>({runEvents:[...r.runEvents,n]})),clearRunEvents:()=>e({runEvents:[]}),setWatches:n=>e({watches:n}),updateWatch:(n,r)=>e(i=>{const s=i.watches.map(l=>l.id===n?{...l,...r}:l);if(("serverName"in r||"toolName"in r||"args"in r||"transform"in r)&&i.project){const l=s.map(({id:c,serverName:u,toolName:d,args:f,transform:p})=>({id:c,serverName:u,toolName:d,args:f,transform:p}));return{watches:s,project:{...i.project,watches:l},hasUnsavedChanges:!0}}return{watches:s}}),addWatch:n=>e(r=>{const i=[...r.watches,n],{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:f})=>({id:l,serverName:c,toolName:u,args:d,transform:f}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),removeWatch:n=>e(r=>{const i=r.watches.filter(a=>a.id!==n),{project:s}=r;if(s){const a=i.map(({id:l,serverName:c,toolName:u,args:d,transform:f})=>({id:l,serverName:c,toolName:u,args:d,transform:f}));return{watches:i,project:{...s,watches:a},hasUnsavedChanges:!0}}return{watches:i}}),clearWatchHistories:()=>e(n=>({watches:n.watches.map(r=>({...r,history:[],result:void 0,error:void 0}))})),setActiveTab:n=>e({activeTab:n}),setSidebarOpen:n=>e({sidebarOpen:n}),setHasUnsavedChanges:n=>e({hasUnsavedChanges:n}),setRunAgentId:n=>e({runAgentId:n}),setCurrentSessionId:n=>e({currentSessionId:n}),updateProject:n=>{const{project:r}=t();r&&e({project:{...r,...n}})},addAgent:n=>{const{project:r}=t();if(r){let i=r.app;if(n.type==="LlmAgent"&&n.output_key){const s=n.output_key;r.app.state_keys.find(l=>l.name===s)||(i={...r.app,state_keys:[...r.app.state_keys,{name:s,description:`Output from ${n.name} agent`,type:"string",scope:"session"}]})}e({project:{...r,app:i,agents:[...r.agents,n]}})}},updateAgent:(n,r)=>{const{project:i}=t();if(i){const s=i.agents.find(l=>l.id===n);let a=i.app;if(s&&s.type==="LlmAgent"&&r.output_key){const l=r.output_key;i.app.state_keys.find(u=>u.name===l)||(a={...i.app,state_keys:[...i.app.state_keys,{name:l,description:`Output from ${r.name||s.name} agent`,type:"string",scope:"session"}]})}e({project:{...i,app:a,agents:i.agents.map(l=>l.id===n?{...l,...r}:l)}})}},removeAgent:n=>{const{project:r,selectedAgentId:i}=t();r&&e({project:{...r,agents:r.agents.filter(s=>s.id!==n)},selectedAgentId:i===n?null:i})},addCustomTool:n=>{const{project:r}=t();r&&e({project:{...r,custom_tools:[...r.custom_tools,n]}})},updateCustomTool:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_tools:i.custom_tools.map(s=>s.id===n?{...s,...r}:s)}})},removeCustomTool:n=>{const{project:r,selectedToolId:i}=t();r&&e({project:{...r,custom_tools:r.custom_tools.filter(s=>s.id!==n)},selectedToolId:i===n?null:i})},addCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:[...r.custom_callbacks||[],n]}})},updateCustomCallback:(n,r)=>{const{project:i}=t();i&&e({project:{...i,custom_callbacks:(i.custom_callbacks||[]).map(s=>s.id===n?{...s,...r}:s)}})},removeCustomCallback:n=>{const{project:r}=t();r&&e({project:{...r,custom_callbacks:(r.custom_callbacks||[]).filter(i=>i.id!==n)}})}})),np="/api";async function Ae(e,t){const n=await fetch(`${np}${e}`,{...t,headers:{"Content-Type":"application/json",...t==null?void 0:t.headers}});if(!n.ok){const r=await n.json().catch(()=>({detail:"Unknown error"}));throw new Error(r.detail||`HTTP ${n.status}`)}return n.json()}async function Yy(){return(await Ae("/projects")).projects}async function Qy(e){return(await Ae(`/projects/${e}`)).project}async function Xy(e,t=""){return(await Ae("/projects",{method:"POST",body:JSON.stringify({name:e,description:t})})).project}async function Au(e,t){return(await Ae(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})).project}async function Zy(e){await Ae(`/projects/${e}`,{method:"DELETE"})}async function ev(e){return Ae(`/sessions/${e}/save-to-memory`,{method:"POST"})}async function Mu(e){return(await Ae(`/projects/${e}/sessions`)).sessions}async function tv(e,t){return(await Ae(`/projects/${e}/sessions/${t}/load`)).session}async function nv(e,t){return(await Ae(`/projects/${e}/sessions/${t}/artifacts`)).artifacts||[]}function ca(e,t,n){return`${np}/projects/${e}/sessions/${t}/artifacts/${encodeURIComponent(n)}`}async function rv(e){return(await Ae(`/projects/${e}/yaml`)).yaml}async function iv(e,t){return(await Ae(`/projects/${e}/yaml`,{method:"PUT",body:JSON.stringify({yaml:t})})).project}async function rp(){return(await Ae("/mcp-servers")).servers}async function ov(){return(await Ae("/builtin-tools")).tools}function sv(e){const t=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.host;return new WebSocket(`${t}//${n}/ws/run/${e}`)}async function ua(e,t,n,r){return await Ae(`/projects/${e}/generate-prompt`,{method:"POST",body:JSON.stringify({agent_id:t,context:n,agent_config:r||void 0})})}async function av(e,t){return await Ae(`/projects/${e}/generate-agent-config`,{method:"POST",body:JSON.stringify({description:t})})}async function lv(e,t,n,r=[],i){return await Ae(`/projects/${e}/generate-tool-code`,{method:"POST",body:JSON.stringify({tool_name:t,tool_description:n,state_keys_used:r,context:i})})}async function cv(e,t,n,r,i=[],s){return await Ae(`/projects/${e}/generate-callback-code`,{method:"POST",body:JSON.stringify({callback_name:t,callback_description:n,callback_type:r,state_keys_used:i,context:s})})}async function Pu(e){return await Ae("/test-mcp-server",{method:"POST",body:JSON.stringify(e)})}async function uv(e,t){return Ae(`/projects/${e}/test-model`,{method:"POST",body:JSON.stringify(t)})}async function dv(e,t){return Ae(`/projects/${e}/skillsets/${t}/stats`)}async function pv(e,t,n,r,i=500,s=50){return Ae(`/projects/${e}/skillsets/${t}/url`,{method:"POST",body:JSON.stringify({url:n,source_name:r,chunk_size:i,chunk_overlap:s})})}async function fv(e,t,n,r=500,i=50){const s=new FormData;s.append("file",n),s.append("chunk_size",String(r)),s.append("chunk_overlap",String(i));const a=await fetch(`${np}/projects/${e}/skillsets/${t}/file`,{method:"POST",body:s});if(!a.ok)throw new Error(`Upload failed: ${a.statusText}`);return a.json()}async function hv(e,t,n,r=10,i=0){return Ae(`/projects/${e}/skillsets/${t}/search`,{method:"POST",body:JSON.stringify({query:n,top_k:r,min_score:i})})}async function mv(e,t){return Ae(`/projects/${e}/skillsets/${t}/entries`,{method:"DELETE"})}async function gv(){return Ae("/skillsets/embeddings-available")}async function xv(e,t={}){return Ae(`/projects/${e}/generate-eval-set`,{method:"POST",body:JSON.stringify(t)})}const et={async get(e){return Ae(e)},async post(e,t){return Ae(e,{method:"POST",body:t?JSON.stringify(t):void 0})},async put(e,t){return Ae(e,{method:"PUT",body:t?JSON.stringify(t):void 0})},async delete(e){return Ae(e,{method:"DELETE"})}},fj=Object.freeze(Object.defineProperty({__proto__:null,addSkillSetUrl:pv,api:et,checkEmbeddingsAvailable:gv,clearSkillSet:mv,createProject:Xy,createRunWebSocket:sv,deleteProject:Zy,fetchJSON:Ae,generateAgentConfig:av,generateCallbackCode:cv,generateEvalSet:xv,generatePrompt:ua,generateToolCode:lv,getArtifactUrl:ca,getBuiltinTools:ov,getMcpServers:rp,getProject:Qy,getProjectYaml:rv,getSkillSetStats:dv,listArtifacts:nv,listProjectSessions:Mu,listProjects:Yy,loadSession:tv,saveSessionToMemory:ev,searchSkillSet:hv,testMcpServer:Pu,testModelConfig:uv,updateProject:Au,updateProjectFromYaml:iv,uploadSkillSetFile:fv},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mj=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),xe=(e,t)=>{const n=k.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},d)=>k.createElement("svg",{ref:d,...hj,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${mj(e)}`,l].join(" "),...u},[...t.map(([f,p])=>k.createElement(f,p)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=xe("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=xe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gj=xe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xj=xe("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=xe("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=xe("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=xe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=xe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=xe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=xe("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=xe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=xe("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=xe("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=xe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=xe("ExternalLink",[["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}],["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["line",{x1:"10",x2:"21",y1:"14",y2:"3",key:"18c3s4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yj=xe("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=xe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=xe("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"h7jej2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",key:"f4a3oc"}],["path",{d:"m7 17-4.74-2.85",key:"etm6su"}],["path",{d:"m7 17 4.74-2.85",key:"5xuooz"}],["path",{d:"M7 17v5",key:"1yj1jh"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=xe("FileCheck",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vj=xe("FileCode",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=xe("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bj=xe("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=xe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=xe("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=xe("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=xe("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=xe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wj=xe("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kj=xe("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jj=xe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=xe("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=xe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=xe("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _j=xe("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=xe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=xe("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=xe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=xe("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sj=xe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cj=xe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nj=xe("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=xe("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=xe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=xe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ej=xe("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=xe("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=xe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=xe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zj=xe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=xe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=xe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=xe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tj=xe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=xe("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=xe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=xe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=xe("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=xe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=xe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=xe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=xe("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aj=xe("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=xe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=xe("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=xe("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Mj(){const e=tp(),[t,n]=k.useState([]),[r,i]=k.useState(!0),[s,a]=k.useState(!1),[l,c]=k.useState("");k.useEffect(()=>{u()},[]);async function u(){try{const p=await Yy();n(p)}catch(p){console.error("Failed to load projects:",p)}finally{i(!1)}}async function d(){if(l.trim())try{const p=await Xy(l.trim());e(`/project/${p.id}`)}catch(p){console.error("Failed to create project:",p)}}async function f(p,h){if(h.stopPropagation(),!!confirm("Delete this project?"))try{await Zy(p),n(t.filter(m=>m.id!==p))}catch(m){console.error("Failed to delete project:",m)}}return o.jsxs("div",{className:"project-list",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"header",children:[o.jsxs("div",{className:"logo",children:[o.jsx(bi,{size:40,className:"logo-icon"}),o.jsx("h1",{className:"title",children:"ADK Playground"})]}),o.jsx("p",{className:"subtitle",children:"Build, test, and deploy AI agents visually"})]}),o.jsxs("div",{className:"content",children:[s?o.jsxs("div",{className:"create-form",children:[o.jsx("input",{type:"text",placeholder:"Project name...",value:l,onChange:p=>c(p.target.value),onKeyDown:p=>p.key==="Enter"&&d(),autoFocus:!0}),o.jsxs("button",{className:"btn btn-primary",onClick:d,children:[o.jsx(nt,{size:18}),"Create"]}),o.jsx("button",{className:"btn btn-secondary",onClick:()=>a(!1),children:"Cancel"})]}):o.jsx("div",{className:"create-form",children:o.jsxs("button",{className:"btn btn-primary",onClick:()=>a(!0),children:[o.jsx(nt,{size:18}),"New Project"]})}),r?o.jsx("div",{className:"loading",children:"Loading projects..."}):t.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Oh,{size:48,style:{marginBottom:16,opacity:.3}}),o.jsx("p",{children:"No projects yet. Create one to get started!"})]}):o.jsx("div",{className:"projects-grid",children:t.map(p=>o.jsxs("div",{className:"project-card",onClick:()=>e(`/project/${p.id}`),children:[o.jsxs("h3",{children:[o.jsx(Oh,{size:18}),p.name]}),o.jsx("p",{children:p.description||"No description"}),o.jsx("button",{className:"delete-btn",onClick:h=>f(p.id,h),children:o.jsx(Je,{size:16})})]},p.id))})]})]})}const $h={},Pj=5*60*1e3;function Lj({projectId:e,value:t,provider:n,apiBase:r,onChange:i,placeholder:s="Search models..."}){const a=`${e}:${n||""}:${r||""}`,[l,c]=k.useState(t||""),[u,d]=k.useState(!1),[f,p]=k.useState([]),[h,m]=k.useState(!1),[v,j]=k.useState(null),[g,x]=k.useState(-1),[w,_]=k.useState({top:0,left:0,width:0}),z=k.useRef(null),C=k.useRef(null);k.useEffect(()=>{if(u&&z.current){const A=z.current.getBoundingClientRect();_({top:A.bottom+window.scrollY+4,left:A.left+window.scrollX,width:A.width})}},[u]);const R=k.useCallback(async()=>{const A=$h[a];if(A&&Date.now()-A.timestamp<Pj){const D=[];Object.values(A.providers).forEach(P=>{D.push(...P.models)}),p(D);return}m(!0),j(null);try{const D=new URLSearchParams;n&&D.append("provider",n),r&&D.append("api_base",r);const P=`/models/${e}${D.toString()?"?"+D.toString():""}`,M=await et.get(P);$h[a]={providers:M.providers,timestamp:Date.now()};const B=[];Object.values(M.providers).forEach(O=>{O.models&&O.models.length>0&&B.push(...O.models)}),p(B)}catch(D){j(D.message||"Failed to fetch models")}finally{m(!1)}},[e,a,r,n]);k.useEffect(()=>{R()},[R]),k.useEffect(()=>{c(t||"")},[t]);const E=f.filter(A=>{const D=l.toLowerCase();return A.id.toLowerCase().includes(D)||A.name.toLowerCase().includes(D)||A.provider.toLowerCase().includes(D)});k.useEffect(()=>{const A=D=>{C.current&&!C.current.contains(D.target)&&z.current&&!z.current.contains(D.target)&&d(!1)};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[]);const U=A=>{if(!u){(A.key==="ArrowDown"||A.key==="Enter")&&(d(!0),A.preventDefault());return}switch(A.key){case"ArrowDown":x(D=>Math.min(D+1,E.length-1)),A.preventDefault();break;case"ArrowUp":x(D=>Math.max(D-1,0)),A.preventDefault();break;case"Enter":g>=0&&g<E.length&&N(E[g]),A.preventDefault();break;case"Escape":d(!1);break}},N=A=>{c(A.id),i(A.id,A.provider),d(!1)},$=A=>{c(A.target.value),d(!0),x(-1),i(A.target.value,n||"gemini")},G=A=>{switch(A.toLowerCase()){case"gemini":return"provider-gemini";case"anthropic":return"provider-anthropic";case"openai":return"provider-openai";case"groq":return"provider-groq";case"together":return"provider-together";case"ollama":return"provider-ollama";default:return"provider-other"}},Y=u?o.jsxs("div",{ref:C,className:"model-autocomplete-dropdown model-autocomplete-dropdown-portal",style:{position:"fixed",top:w.top,left:w.left,width:w.width},children:[h&&o.jsx("div",{className:"model-autocomplete-loading",children:"Loading models..."}),v&&o.jsx("div",{className:"model-autocomplete-error",children:v}),!h&&!v&&E.length===0&&o.jsx("div",{className:"model-autocomplete-empty",children:l?"No matching models":"No models available"}),!h&&E.length>0&&o.jsxs("div",{className:"model-autocomplete-list",children:[E.slice(0,50).map((A,D)=>o.jsxs("div",{className:`model-autocomplete-item ${D===g?"highlighted":""}`,onClick:()=>N(A),onMouseEnter:()=>x(D),children:[o.jsx("span",{className:`provider-badge ${G(A.provider)}`,children:A.provider}),o.jsx("span",{className:"model-id",children:A.id}),A.context_window&&o.jsxs("span",{className:"model-context",title:`${A.context_window.toLocaleString()} token context`,children:[Math.round(A.context_window/1e3),"K"]}),A.supports_tools&&o.jsx("span",{className:"model-feature",title:"Supports function calling / tools",children:"🔧"}),A.supports_vision&&o.jsx("span",{className:"model-feature",title:"Supports image/vision input",children:"👁️"}),A.supports_json_mode&&o.jsx("span",{className:"model-feature",title:"Supports structured JSON output",children:"📋"})]},`${A.provider}-${A.id}`)),E.length>50&&o.jsxs("div",{className:"model-autocomplete-more",children:["+",E.length-50," more..."]})]})]}):null;return o.jsxs("div",{className:"model-autocomplete",children:[o.jsx("input",{ref:z,type:"text",value:l,onChange:$,onFocus:()=>d(!0),onKeyDown:U,placeholder:s,className:"model-autocomplete-input"}),Y&&Qd.createPortal(Y,document.body)]})}const Rj=[{value:"gemini",label:"Gemini"},{value:"anthropic",label:"Anthropic"},{value:"openai",label:"OpenAI"},{value:"groq",label:"Groq"},{value:"together",label:"Together (via LiteLLM)"},{value:"litellm",label:"LiteLLM / Other"}];function Ij(e,t){return e.startsWith("openai/")?"openai":e.startsWith("groq/")?"groq":e.startsWith("together_ai/")||e.startsWith("together/")?"together":e.startsWith("ollama/")?"litellm":e.startsWith("claude-")?"anthropic":e.startsWith("gemini-")?"gemini":e.includes("/")?"litellm":t||"gemini"}function zv({projectId:e,values:t,onChange:n,className:r=""}){const[i,s]=k.useState(!1),[a,l]=k.useState(null),c=async()=>{var u;if(!t.model_name||!t.provider){l({success:!1,message:"Please select a model first"});return}s(!0),l(null);try{const d=await uv(e,{provider:t.provider,model_name:t.model_name,api_base:t.api_base});d.success?l({success:!0,message:((u=d.response)==null?void 0:u.slice(0,100))||"Model responded successfully!"}):l({success:!1,message:d.error||"Test failed"})}catch(d){l({success:!1,message:d.message||"Connection failed"})}finally{s(!1)}};return o.jsxs("div",{className:`model-config-form ${r}`,children:[o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",style:{flex:1},children:[o.jsx("label",{children:"Provider"}),o.jsx("select",{value:t.provider||"gemini",onChange:u=>{n({provider:u.target.value}),l(null)},children:Rj.map(u=>o.jsx("option",{value:u.value,children:u.label},u.value))})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:"Model"}),o.jsx(Lj,{projectId:e,value:t.model_name||"",provider:t.provider,apiBase:t.api_base,onChange:(u,d)=>{const f=Ij(u,d);n({model_name:u,provider:f}),l(null)},placeholder:"Search models..."})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{children:"API Base (optional)"}),o.jsx("input",{type:"text",value:t.api_base||"",onChange:u=>{n({api_base:u.target.value||void 0}),l(null)},placeholder:t.provider==="gemini"?"https://generativelanguage.googleapis.com":t.provider==="anthropic"?"https://api.anthropic.com":t.provider==="openai"?"https://api.openai.com/v1":t.provider==="groq"?"https://api.groq.com/openai/v1":t.provider==="together"?"https://api.together.xyz/v1":"http://localhost:11434"})]}),o.jsxs("div",{className:"model-config-field model-test-field",children:[o.jsx("label",{children:" "}),o.jsxs("button",{type:"button",className:`model-test-btn ${(a==null?void 0:a.success)===!0?"success":(a==null?void 0:a.success)===!1?"error":""}`,onClick:c,disabled:i||!t.model_name,title:(a==null?void 0:a.message)||"Test model connection",children:[i?o.jsx(jv,{size:14,className:"spinning"}):(a==null?void 0:a.success)===!0?o.jsx(yn,{size:14}):(a==null?void 0:a.success)===!1?o.jsx(yr,{size:14}):o.jsx(up,{size:14}),i?"Testing...":"Test"]})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Temperature"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"2",value:t.temperature??"",onChange:u=>n({temperature:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Max Tokens"}),o.jsx("input",{type:"number",min:"1",value:t.max_output_tokens??"",onChange:u=>n({max_output_tokens:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top P"}),o.jsx("input",{type:"number",step:"0.1",min:"0",max:"1",value:t.top_p??"",onChange:u=>n({top_p:u.target.value?parseFloat(u.target.value):void 0}),placeholder:"Default"})]}),o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{children:"Top K"}),o.jsx("input",{type:"number",min:"1",value:t.top_k??"",onChange:u=>n({top_k:u.target.value?parseInt(u.target.value):void 0}),placeholder:"Default"})]})]}),o.jsxs("div",{className:"model-config-row",children:[o.jsxs("div",{className:"model-config-field",children:[o.jsx("label",{title:"Number of times to retry on connection failure",children:"Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:t.num_retries??"",onChange:u=>n({num_retries:u.target.value?parseInt(u.target.value):void 0}),placeholder:"3"})]}),o.jsxs("div",{className:"model-config-field",style:{flex:2},children:[o.jsx("label",{title:"Maximum time to wait for a response (in seconds)",children:"Timeout (seconds)"}),o.jsx("input",{type:"number",min:"10",max:"7200",step:"10",value:t.request_timeout??"",onChange:u=>n({request_timeout:u.target.value?parseInt(u.target.value):void 0}),placeholder:"1800 (30 min)"})]}),o.jsxs("div",{className:"model-config-field",style:{flex:3},children:[o.jsx("label",{children:" "}),o.jsx("span",{className:"model-config-hint",style:{fontSize:"11px",color:"#666",marginTop:"4px"},children:"Increase timeout for slow models like local Ollama"})]})]})]})}const Oj=[{key:"GOOGLE_API_KEY",description:"API key for Gemini models"},{key:"OPENAI_API_KEY",description:"API key for OpenAI models (via LiteLLM)"},{key:"GROQ_API_KEY",description:"API key for Groq models"},{key:"ANTHROPIC_API_KEY",description:"API key for Anthropic Claude models"},{key:"TOGETHER_API_KEY",description:"API key for Together (via LiteLLM, e.g. together_ai/* models)"},{key:"AZURE_OPENAI_API_KEY",description:"API key for Azure OpenAI Service"},{key:"AZURE_API_BASE",description:"Base URL for Azure OpenAI endpoint (e.g., https://your-resource.openai.azure.com)"},{key:"AZURE_API_VERSION",description:"API version for Azure OpenAI (e.g., 2024-02-15-preview)"},{key:"GOOGLE_GENAI_USE_VERTEXAI",description:'Set to "1" to use Vertex AI instead of API key'},{key:"GOOGLE_CLOUD_PROJECT",description:"Google Cloud project ID for Vertex AI"},{key:"GOOGLE_CLOUD_REGION",description:"Google Cloud region for Vertex AI (e.g., us-central1)"}];function $j(e){return/^[a-zA-Z0-9_]+$/.test(e)}function Dj(){var H;const{project:e,updateProject:t}=yt(),[n,r]=k.useState(null);if(!e)return null;const{app:i}=e;function s(y){t({app:{...i,...y}})}function a(y){if(y===""){r(null),s({name:y});return}$j(y)?r(null):r("Name can only contain letters, numbers, and underscores"),s({name:y})}function l(){const y={name:`state_key_${i.state_keys.length+1}`,description:"",type:"string",scope:"session"};s({state_keys:[...i.state_keys,y]})}function c(y,S){const F=[...i.state_keys];F[y]={...F[y],...S},s({state_keys:F})}function u(y){s({state_keys:i.state_keys.filter((S,F)=>F!==y)})}function d(y="ReflectAndRetryToolPlugin"){let S;switch(y){case"ReflectAndRetryToolPlugin":S={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1};break;case"ContextFilterPlugin":S={type:"ContextFilterPlugin",name:"context_filter",num_invocations_to_keep:5};break;case"LoggingPlugin":S={type:"LoggingPlugin",name:"logging"};break;case"GlobalInstructionPlugin":S={type:"GlobalInstructionPlugin",name:"global_instruction",global_instruction:""};break;case"SaveFilesAsArtifactsPlugin":S={type:"SaveFilesAsArtifactsPlugin",name:"save_files"};break;case"MultimodalToolResultsPlugin":S={type:"MultimodalToolResultsPlugin",name:"multimodal_tools"};break;default:S={type:"ReflectAndRetryToolPlugin",name:"reflect_retry",max_retries:3,throw_exception_if_retry_exceeded:!1}}s({plugins:[...i.plugins,S]})}function f(y,S){const F=[...i.plugins];F[y]={...F[y],...S},s({plugins:F})}function p(y){s({plugins:i.plugins.filter((S,F)=>F!==y)})}const h=i.sandbox||{enabled:!1,allow_all_network:!1,allowlist:{auto:[],user:[]},unknown_action:"ask",approval_timeout:30,agent_memory_limit_mb:512,agent_cpu_limit:1,mcp_memory_limit_mb:256,mcp_cpu_limit:.5,run_timeout:3600,volume_mounts:[]},m=((H=h.allowlist)==null?void 0:H.user)||[],v=h.volume_mounts||[];function j(y){s({sandbox:{...h,...y}})}async function g(y){const S=i.id;try{await fetch(`/api/sandbox/${S}/allowlist/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({patterns:y.map(F=>({pattern:F.pattern,pattern_type:F.pattern_type})).filter(F=>F.pattern)})})}catch(F){console.debug("Could not sync allowlist to gateway:",F)}}function x(){const y={id:`pattern_${Date.now().toString(36)}`,pattern:"",pattern_type:"exact",source:"user",added_at:new Date().toISOString()},S={...h.allowlist,user:[...m,y]};j({allowlist:S})}function w(y,S){const F=[...m];F[y]={...F[y],...S};const te=F;j({allowlist:{...h.allowlist,user:te}}),S.pattern&&g(te)}function _(y){const S=m.filter((F,te)=>te!==y);j({allowlist:{...h.allowlist,user:S}})}function z(){const y={host_path:"",container_path:"",mode:"ro"};j({volume_mounts:[...v,y]})}function C(y,S){const F=[...v];F[y]={...F[y],...S},j({volume_mounts:F})}function R(y){const S=v.filter((F,te)=>te!==y);j({volume_mounts:S})}const E=i.models||[];function U(){const y=`model_${Date.now().toString(36)}`,S={id:y,name:"New Model",provider:"gemini",model_name:"gemini-2.0-flash",is_default:E.length===0};s({models:[...E,S],default_model_id:E.length===0?y:i.default_model_id})}function N(y,S){const F=E.map(te=>te.id===y?{...te,...S}:te);s({models:F})}function $(y){var te;const S=E.filter(ae=>ae.id!==y),F=i.default_model_id===y?((te=S[0])==null?void 0:te.id)||void 0:i.default_model_id;s({models:S,default_model_id:F})}function G(y){s({default_model_id:y})}const Y=i.env_vars||{},[A,D]=k.useState({}),[P,M]=k.useState("");function B(y=""){const S=y||P.trim();!S||Y[S]!==void 0||(s({env_vars:{...Y,[S]:""}}),M(""))}function O(y,S){s({env_vars:{...Y,[y]:S}})}function b(y){const S={...Y};delete S[y],s({env_vars:S})}function W(y){D(S=>({...S,[y]:!S[y]}))}return o.jsxs("div",{className:"app-config",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(zj,{size:20}),"Basic Information"]})}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"App Name"}),o.jsx("input",{type:"text",value:i.name,onChange:y=>a(y.target.value),style:{borderColor:n?"var(--error)":void 0}}),n&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:4},children:n})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Root Agent"}),o.jsxs("select",{value:i.root_agent_id||"",onChange:y=>s({root_agent_id:y.target.value||void 0}),children:[o.jsx("option",{value:"",children:"Select an agent..."}),e.agents.map(y=>o.jsx("option",{value:y.id,children:y.name},y.id))]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Bn,{size:20}),"Services"]}),o.jsx("span",{className:"section-hint",children:"Configure session, memory, and artifact storage backends"})]}),o.jsxs("div",{className:"form-grid",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Session Service"}),o.jsxs("select",{value:i.session_service_uri.split("://")[0],onChange:y=>{const S=y.target.value;s({session_service_uri:{memory:"memory://",file:"file://~/.adk-playground/sessions",sqlite:"sqlite://~/.adk-playground/sessions.db",postgresql:"postgresql://user:pass@localhost:5432/adk_sessions",mysql:"mysql://user:pass@localhost:3306/adk_sessions",agentengine:"agentengine://project/us-central1/engine-id"}[S]||S+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System (JSON)"}),o.jsx("option",{value:"sqlite",children:"SQLite (local)"}),o.jsx("option",{value:"postgresql",children:"PostgreSQL"}),o.jsx("option",{value:"mysql",children:"MySQL"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Agent Engine"})]}),i.session_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("file://",""),onChange:y=>s({session_service_uri:"file://"+y.target.value}),placeholder:"~/.adk-playground/sessions",style:{marginTop:8}}),i.session_service_uri.startsWith("sqlite://")&&o.jsx("input",{type:"text",value:i.session_service_uri.replace("sqlite://",""),onChange:y=>s({session_service_uri:"sqlite://"+y.target.value}),placeholder:"~/.adk-playground/sessions.db",style:{marginTop:8}}),(i.session_service_uri.startsWith("postgresql://")||i.session_service_uri.startsWith("mysql://"))&&o.jsx("input",{type:"text",value:i.session_service_uri,onChange:y=>s({session_service_uri:y.target.value}),placeholder:"postgresql://user:pass@localhost:5432/db",style:{marginTop:8}}),i.session_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[2]||"",onChange:y=>{const S=i.session_service_uri.split("/");S[2]=y.target.value,s({session_service_uri:S.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[3]||"",onChange:y=>{const S=i.session_service_uri.split("/");S[3]=y.target.value,s({session_service_uri:S.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.session_service_uri.split("/")[4]||"",onChange:y=>{const S=i.session_service_uri.split("/");S[4]=y.target.value,s({session_service_uri:S.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.session_service_uri.startsWith("memory://")&&"Sessions stored in memory, lost on restart",i.session_service_uri.startsWith("file://")&&"Sessions stored as JSON files, preserves UI events",i.session_service_uri.startsWith("sqlite://")&&"Persists to local SQLite file",i.session_service_uri.startsWith("postgresql://")&&"Production-ready PostgreSQL backend",i.session_service_uri.startsWith("mysql://")&&"Production-ready MySQL backend",i.session_service_uri.startsWith("agentengine://")&&"Vertex AI Agent Engine managed sessions"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Memory Service"}),o.jsxs("select",{value:i.memory_service_uri.split("://")[0],onChange:y=>{const S=y.target.value;s({memory_service_uri:{memory:"memory://",file:"file://~/.adk-playground/memory",rag:"rag://rag-corpus-id",agentengine:"agentengine://project/us-central1/engine-id"}[S]||S+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (keyword matching)"}),o.jsx("option",{value:"file",children:"File System (keyword matching)"}),o.jsx("option",{value:"rag",children:"Vertex AI RAG"}),o.jsx("option",{value:"agentengine",children:"Vertex AI Memory Bank"})]}),i.memory_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.memory_service_uri.replace("file://",""),onChange:y=>s({memory_service_uri:"file://"+y.target.value}),placeholder:"~/.adk-playground/memory",style:{marginTop:8}}),i.memory_service_uri.startsWith("rag://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.replace("rag://",""),onChange:y=>s({memory_service_uri:"rag://"+y.target.value}),placeholder:"rag-corpus-id or full resource path"}),o.jsx("span",{className:"help-text",style:{fontSize:11,color:"var(--text-dim)"},children:"Format: projects/PROJECT/locations/LOCATION/ragCorpora/CORPUS_ID"})]}),i.memory_service_uri.startsWith("agentengine://")&&o.jsxs("div",{style:{marginTop:8,display:"flex",flexDirection:"column",gap:8},children:[o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[2]||"",onChange:y=>{const S=i.memory_service_uri.split("/");S[2]=y.target.value,s({memory_service_uri:S.join("/")})},placeholder:"project-id"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[3]||"",onChange:y=>{const S=i.memory_service_uri.split("/");S[3]=y.target.value,s({memory_service_uri:S.join("/")})},placeholder:"location (e.g., us-central1)"}),o.jsx("input",{type:"text",value:i.memory_service_uri.split("/")[4]||"",onChange:y=>{const S=i.memory_service_uri.split("/");S[4]=y.target.value,s({memory_service_uri:S.join("/")})},placeholder:"agent-engine-id"})]}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.memory_service_uri.startsWith("memory://")&&"Simple keyword matching, good for prototyping",i.memory_service_uri.startsWith("file://")&&"Persists memories as JSON files",i.memory_service_uri.startsWith("rag://")&&"Semantic search using Vertex AI RAG corpus",i.memory_service_uri.startsWith("agentengine://")&&"Managed memory via Agent Engine Memory Bank"]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Artifact Service"}),o.jsxs("select",{value:i.artifact_service_uri.split("://")[0]==="gs"?"gs":i.artifact_service_uri.split("://")[0],onChange:y=>{const S=y.target.value;s({artifact_service_uri:{memory:"memory://",file:"file://~/.adk-playground/artifacts",gs:"gs://your-bucket-name"}[S]||S+"://"})},children:[o.jsx("option",{value:"memory",children:"In-Memory (dev only)"}),o.jsx("option",{value:"file",children:"File System"}),o.jsx("option",{value:"gs",children:"Google Cloud Storage"})]}),i.artifact_service_uri.startsWith("file://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("file://",""),onChange:y=>s({artifact_service_uri:"file://"+y.target.value}),placeholder:"~/.adk-playground/artifacts",style:{marginTop:8}}),i.artifact_service_uri.startsWith("gs://")&&o.jsx("input",{type:"text",value:i.artifact_service_uri.replace("gs://",""),onChange:y=>s({artifact_service_uri:"gs://"+y.target.value}),placeholder:"bucket-name/optional-prefix",style:{marginTop:8}}),o.jsxs("span",{className:"help-text",style:{marginTop:4,fontSize:11,color:"var(--text-dim)"},children:[i.artifact_service_uri.startsWith("memory://")&&"Artifacts stored in memory, lost on restart",i.artifact_service_uri.startsWith("file://")&&"Persists to local filesystem",i.artifact_service_uri.startsWith("gs://")&&"Production-ready Google Cloud Storage backend"]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Ru,{size:20}),"Environment Variables"]})}),o.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginBottom:16},children:"Set API keys and other environment variables. These are passed to the agent runtime."}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:16},children:Oj.filter(y=>Y[y.key]===void 0).map(y=>o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>B(y.key),title:y.description,children:[o.jsx(nt,{size:12}),y.key]},y.key))}),Object.keys(Y).length===0?o.jsx("p",{className:"empty-message",children:"No environment variables set. Click a button above to add common variables, or add a custom one below."}):Object.entries(Y).map(([y,S])=>o.jsxs("div",{className:"list-item",style:{alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:13,minWidth:200},children:y}),o.jsxs("div",{style:{flex:1,display:"flex",gap:8,alignItems:"center"},children:[o.jsx("input",{type:A[y]?"text":"password",value:S,onChange:F=>O(y,F.target.value),placeholder:"Enter value...",style:{flex:1}}),o.jsx("button",{className:"delete-item",onClick:()=>W(y),title:A[y]?"Hide value":"Show value",children:A[y]?o.jsx(yj,{size:16}):o.jsx(Vr,{size:16})})]})]}),o.jsx("button",{className:"delete-item",onClick:()=>b(y),children:o.jsx(Je,{size:16})})]},y)),o.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[o.jsx("input",{type:"text",value:P,onChange:y=>M(y.target.value.toUpperCase().replace(/[^A-Z0-9_]/g,"")),placeholder:"CUSTOM_VAR_NAME",style:{flex:1,fontFamily:"var(--font-mono)"},onKeyDown:y=>y.key==="Enter"&&B()}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>B(),disabled:!P.trim(),children:[o.jsx(nt,{size:14}),"Add Variable"]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(op,{size:20}),"Models"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:U,children:[o.jsx(nt,{size:14}),"Add Model"]})]}),E.length===0?o.jsx("p",{className:"empty-message",children:"No models configured. Add models that agents can use."}):E.map(y=>o.jsxs("div",{className:"model-card",children:[o.jsxs("div",{className:"model-card-header",children:[o.jsx("input",{type:"text",value:y.name,onChange:S=>N(y.id,{name:S.target.value}),placeholder:"Model name",className:"model-name-input"}),o.jsx("button",{className:`default-model-btn ${i.default_model_id===y.id?"is-default":""}`,onClick:()=>G(y.id),title:i.default_model_id===y.id?"Default model":"Set as default",children:o.jsx(Nv,{size:14,fill:i.default_model_id===y.id?"currentColor":"none"})}),o.jsx("button",{className:"delete-item",onClick:()=>$(y.id),children:o.jsx(Je,{size:16})})]}),o.jsx("div",{className:"model-card-body",children:o.jsx(zv,{projectId:e.id,values:y,onChange:S=>N(y.id,S)})})]},y.id))]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(ap,{size:20}),"State Keys"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:l,children:[o.jsx(nt,{size:14}),"Add"]})]}),i.state_keys.length===0?o.jsx("p",{className:"empty-message",children:"No state keys. Auto-created when you add LlmAgents."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:i.state_keys.map((y,S)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx("input",{type:"text",value:y.name,onChange:F=>c(S,{name:F.target.value}),placeholder:"Key name",style:{flex:1,minWidth:0,padding:"4px 8px",fontSize:12}}),o.jsxs("select",{value:y.type,onChange:F=>c(S,{type:F.target.value}),style:{width:60,flexShrink:0,padding:"4px 6px",fontSize:11},children:[o.jsx("option",{value:"string",children:"str"}),o.jsx("option",{value:"number",children:"num"}),o.jsx("option",{value:"boolean",children:"bool"}),o.jsx("option",{value:"object",children:"obj"}),o.jsx("option",{value:"array",children:"arr"})]}),o.jsx("button",{className:"delete-item",onClick:()=>u(S),style:{padding:4,flexShrink:0},children:o.jsx(Je,{size:12})})]},S))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(up,{size:20}),"Advanced Options"]})}),o.jsxs("div",{className:"toggle-group",children:[o.jsx("div",{className:`toggle ${i.compaction.enabled?"active":""}`,onClick:()=>s({compaction:{...i.compaction,enabled:!i.compaction.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Event Compaction"}),o.jsx("span",{children:"Summarize old events"})]}),i.compaction.enabled&&o.jsx("input",{type:"number",value:i.compaction.max_events,onChange:y=>s({compaction:{...i.compaction,max_events:parseInt(y.target.value)||100}}),style:{width:60,padding:"4px 6px",fontSize:12},placeholder:"Max"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.context_cache.enabled?"active":""}`,onClick:()=>s({context_cache:{...i.context_cache,enabled:!i.context_cache.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Context Caching"}),o.jsx("span",{children:"Cache static instructions"})]}),i.context_cache.enabled&&o.jsx("input",{type:"number",value:i.context_cache.ttl_seconds,onChange:y=>s({context_cache:{...i.context_cache,ttl_seconds:parseInt(y.target.value)||3600}}),style:{width:70,padding:"4px 6px",fontSize:12},placeholder:"TTL"})]}),o.jsxs("div",{className:"toggle-group",style:{marginTop:10},children:[o.jsx("div",{className:`toggle ${i.resumability.enabled?"active":""}`,onClick:()=>s({resumability:{...i.resumability,enabled:!i.resumability.enabled}})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Resumability"}),o.jsx("span",{children:"Pause/resume execution"})]})]})]})]}),o.jsxs("section",{className:"section",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Ht,{size:20}),"Plugins"]}),o.jsx("div",{className:"plugin-add-dropdown",children:o.jsxs("select",{className:"btn btn-secondary btn-sm",value:"",onChange:y=>{y.target.value&&(d(y.target.value),y.target.value="")},style:{paddingRight:8},children:[o.jsx("option",{value:"",children:"+ Add Plugin..."}),o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]})})]}),i.plugins.length===0?o.jsx("p",{className:"empty-message",children:"No plugins configured. Add plugins to extend agent functionality."}):i.plugins.map((y,S)=>o.jsxs("div",{className:"list-item",style:{flexDirection:"column",gap:12},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",width:"100%",gap:12},children:[o.jsxs("select",{value:y.type,onChange:F=>f(S,{type:F.target.value}),style:{flex:1},children:[o.jsx("option",{value:"ReflectAndRetryToolPlugin",children:"Reflect & Retry Tool"}),o.jsx("option",{value:"ContextFilterPlugin",children:"Context Filter"}),o.jsx("option",{value:"LoggingPlugin",children:"Logging"}),o.jsx("option",{value:"GlobalInstructionPlugin",children:"Global Instruction"}),o.jsx("option",{value:"SaveFilesAsArtifactsPlugin",children:"Save Files as Artifacts"}),o.jsx("option",{value:"MultimodalToolResultsPlugin",children:"Multimodal Tool Results"})]}),o.jsx("button",{className:"delete-item",onClick:()=>p(S),children:o.jsx(Je,{size:16})})]}),y.type==="ReflectAndRetryToolPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Max Retries"}),o.jsx("input",{type:"number",min:"0",max:"10",value:y.max_retries??3,onChange:F=>f(S,{max_retries:parseInt(F.target.value)||0}),style:{width:70}})]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:y.throw_exception_if_retry_exceeded??!1,onChange:F=>f(S,{throw_exception_if_retry_exceeded:F.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Throw exception if retry exceeded"]})]}),y.type==="ContextFilterPlugin"&&o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",style:{flex:0},children:[o.jsx("label",{style:{fontSize:12},children:"Invocations to Keep"}),o.jsx("input",{type:"number",min:"1",max:"100",value:y.num_invocations_to_keep??5,onChange:F=>f(S,{num_invocations_to_keep:parseInt(F.target.value)||1}),style:{width:70}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Keeps only the last N conversation turns to reduce context size"})]}),y.type==="LoggingPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Logs all agent events (messages, tool calls, responses) to the console"})}),y.type==="GlobalInstructionPlugin"&&o.jsxs("div",{style:{width:"100%",paddingLeft:8},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{style:{fontSize:12},children:"Global Instruction"}),o.jsx("textarea",{value:y.global_instruction??"",onChange:F=>f(S,{global_instruction:F.target.value}),placeholder:"Instructions that apply to all agents in the app...",rows:3,style:{width:"100%"}})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"This instruction is prepended to every agent's system prompt"})]}),y.type==="SaveFilesAsArtifactsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Automatically saves files uploaded in user messages as artifacts for later retrieval"})}),y.type==="MultimodalToolResultsPlugin"&&o.jsx("div",{style:{paddingLeft:8},children:o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"Allows tools to return multimodal content (images, files) directly to the LLM"})})]},S))]}),o.jsxs("section",{className:"section",children:[o.jsx("div",{className:"section-header",children:o.jsxs("h2",{className:"section-title",children:[o.jsx(Li,{size:20}),"Sandbox Limits"]})}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Run Timeout"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.run_timeout,onChange:y=>j({run_timeout:parseInt(y.target.value)||3600}),min:60,max:86400,step:60,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:h.run_timeout>=3600?`${Math.floor(h.run_timeout/3600)}h ${Math.floor(h.run_timeout%3600/60)}m`:`${Math.floor(h.run_timeout/60)}m`})]}),o.jsx("p",{className:"field-hint",children:"Max time for agent run (seconds)"})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Agent Memory"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.agent_memory_limit_mb,onChange:y=>j({agent_memory_limit_mb:parseInt(y.target.value)||512}),min:128,max:8192,step:128,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:"MB"})]}),o.jsx("p",{className:"field-hint",children:"Memory limit for agent container"})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Agent CPU"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsx("input",{type:"number",value:h.agent_cpu_limit,onChange:y=>j({agent_cpu_limit:parseFloat(y.target.value)||1}),min:.25,max:8,step:.25,style:{width:100}}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)"},children:"cores"})]}),o.jsx("p",{className:"field-hint",children:"CPU limit for agent container"})]})]})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(Cv,{size:20}),"Network Allowlist"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:x,children:[o.jsx(nt,{size:14}),"Add"]})]}),o.jsxs("div",{className:"toggle-group",style:{marginBottom:10},children:[o.jsx("div",{className:`toggle ${h.allow_all_network?"active":""}`,onClick:()=>j({allow_all_network:!h.allow_all_network,unknown_action:h.allow_all_network?h.unknown_action:"allow"})}),o.jsxs("div",{className:"toggle-label",children:[o.jsx("strong",{children:"Allow all network connections"}),o.jsx("span",{children:"Disables approval/deny; still routes through the sandbox proxy"})]})]}),m.length===0?o.jsx("p",{className:"empty-message",style:{fontSize:11},children:"No custom patterns. LLM APIs allowed by default."}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:m.map((y,S)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(sp,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:y.pattern,onChange:F=>w(S,{pattern:F.target.value}),placeholder:"*.example.com",style:{flex:1,padding:"4px 6px",fontSize:11}}),o.jsxs("select",{value:y.pattern_type,onChange:F=>w(S,{pattern_type:F.target.value}),style:{padding:"4px",fontSize:10,width:70},children:[o.jsx("option",{value:"exact",children:"exact"}),o.jsx("option",{value:"wildcard",children:"wild"}),o.jsx("option",{value:"regex",children:"regex"})]}),o.jsx("button",{className:"delete-item",onClick:()=>_(S),style:{padding:4},children:o.jsx(Je,{size:12})})]},y.id||S))})]}),o.jsxs("section",{className:"section",style:{margin:0},children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h2",{className:"section-title",children:[o.jsx(kj,{size:20}),"File & Volume Mounts"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:z,children:[o.jsx(nt,{size:14}),"Add"]})]}),o.jsx("p",{className:"field-hint",style:{fontSize:10,marginBottom:8},children:"Mount files or directories from host into the sandbox container."}),v.length===0?o.jsxs("p",{className:"empty-message",style:{fontSize:11},children:["No mounts. Example: ",o.jsx("code",{children:"~/.mcp.conf.yml"})," → ",o.jsx("code",{children:"/root/.mcp.conf.yml"})]}):o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:v.map((y,S)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",background:"var(--bg-secondary)",borderRadius:4},children:[o.jsx(bv,{size:14,style:{color:"var(--text-muted)",flexShrink:0}}),o.jsx("input",{type:"text",value:y.host_path,onChange:F=>C(S,{host_path:F.target.value}),placeholder:"~/.mcp.conf.yml",style:{flex:1,padding:"4px 6px",fontSize:11},title:"Host path (file or directory)"}),o.jsx("span",{style:{color:"var(--text-muted)",fontSize:10},children:"→"}),o.jsx("input",{type:"text",value:y.container_path,onChange:F=>C(S,{container_path:F.target.value}),placeholder:"/root/.mcp.conf.yml",style:{width:120,padding:"4px 6px",fontSize:11},title:"Container path"}),o.jsxs("select",{value:y.mode,onChange:F=>C(S,{mode:F.target.value}),style:{padding:"4px",fontSize:10,width:50},children:[o.jsx("option",{value:"ro",children:"ro"}),o.jsx("option",{value:"rw",children:"rw"})]}),o.jsx("button",{className:"delete-item",onClick:()=>R(S),style:{padding:4},children:o.jsx(Je,{size:12})})]},S))})]})]})]})}const Fj="modulepreload",Bj=function(e){return"/"+e},Dh={},Uj=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=Bj(c),c in Dh)return;Dh[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Fj,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((p,h)=>{f.addEventListener("load",p),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})};function Fh(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Vj(e){if(Array.isArray(e))return e}function Wj(e,t,n){return(t=Qj(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hj(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,l=[],c=!0,u=!1;try{if(s=(n=n.call(e)).next,t!==0)for(;!(c=(r=s.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}function qj(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Uh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bh(Object(n),!0).forEach(function(r){Wj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jj(e,t){if(e==null)return{};var n,r,i=Gj(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Gj(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Kj(e,t){return Vj(e)||Hj(e,t)||Xj(e,t)||qj()}function Yj(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qj(e){var t=Yj(e,"string");return typeof t=="symbol"?t:t+""}function Xj(e,t){if(e){if(typeof e=="string")return Fh(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fh(e,t):void 0}}function Zj(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vh(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Wh(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vh(Object(n),!0).forEach(function(r){Zj(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vh(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function e_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduceRight(function(i,s){return s(i)},r)}}function ho(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function qa(e){return{}.toString.call(e).includes("Object")}function t_(e){return!Object.keys(e).length}function Qo(e){return typeof e=="function"}function n_(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function r_(e,t){return qa(t)||hr("changeType"),Object.keys(t).some(function(n){return!n_(e,n)})&&hr("changeField"),t}function i_(e){Qo(e)||hr("selectorType")}function o_(e){Qo(e)||qa(e)||hr("handlerType"),qa(e)&&Object.values(e).some(function(t){return!Qo(t)})&&hr("handlersType")}function s_(e){e||hr("initialIsRequired"),qa(e)||hr("initialType"),t_(e)&&hr("initialContent")}function a_(e,t){throw new Error(e[t]||e.default)}var l_={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},hr=ho(a_)(l_),Ds={changes:r_,selector:i_,handler:o_,initial:s_};function c_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ds.initial(e),Ds.handler(t);var n={current:e},r=ho(p_)(n,t),i=ho(d_)(n),s=ho(Ds.changes)(e),a=ho(u_)(n);function l(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(d){return d};return Ds.selector(u),u(n.current)}function c(u){e_(r,i,s,a)(u)}return[l,c]}function u_(e,t){return Qo(t)?t(e.current):t}function d_(e,t){return e.current=Wh(Wh({},e.current),t),t}function p_(e,t,n){return Qo(t)?t(e.current):Object.keys(n).forEach(function(r){var i;return(i=t[r])===null||i===void 0?void 0:i.call(t,e.current[r])}),n}var f_={create:c_},h_={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"}};function m_(e){return function t(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return i.length>=e.length?e.apply(this,i):function(){for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return t.apply(n,[].concat(i,l))}}}function g_(e){return{}.toString.call(e).includes("Object")}function x_(e){return e||Hh("configIsRequired"),g_(e)||Hh("configType"),e.urls?(y_(),{paths:{vs:e.urls.monacoBase}}):e}function y_(){console.warn(Tv.deprecation)}function v_(e,t){throw new Error(e[t]||e.default)}var Tv={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},Hh=m_(v_)(Tv),b_={config:x_},w_=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(i){return n.reduceRight(function(s,a){return a(s)},i)}};function Av(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],Av(e[n],t[n]))}),Uh(Uh({},e),t)}var k_={type:"cancelation",msg:"operation is manually canceled"};function hc(e){var t=!1,n=new Promise(function(r,i){e.then(function(s){return t?i(k_):r(s)}),e.catch(i)});return n.cancel=function(){return t=!0},n}var j_=["monaco"],__=f_.create({config:h_,isInitialized:!1,resolve:null,reject:null,monaco:null}),Mv=Kj(__,2),ps=Mv[0],_l=Mv[1];function S_(e){var t=b_.config(e),n=t.monaco,r=Jj(t,j_);_l(function(i){return{config:Av(i.config,r),monaco:n}})}function C_(){var e=ps(function(t){var n=t.monaco,r=t.isInitialized,i=t.resolve;return{monaco:n,isInitialized:r,resolve:i}});if(!e.isInitialized){if(_l({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),hc(mc);if(window.monaco&&window.monaco.editor)return Pv(window.monaco),e.resolve(window.monaco),hc(mc);w_(N_,z_)(T_)}return hc(mc)}function N_(e){return document.body.appendChild(e)}function E_(e){var t=document.createElement("script");return e&&(t.src=e),t}function z_(e){var t=ps(function(r){var i=r.config,s=r.reject;return{config:i,reject:s}}),n=E_("".concat(t.config.paths.vs,"/loader.js"));return n.onload=function(){return e()},n.onerror=t.reject,n}function T_(){var e=ps(function(n){var r=n.config,i=n.resolve,s=n.reject;return{config:r,resolve:i,reject:s}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(n){var r=n.m||n;Pv(r),e.resolve(r)},function(n){e.reject(n)})}function Pv(e){ps().monaco||_l({monaco:e})}function A_(){return ps(function(e){var t=e.monaco;return t})}var mc=new Promise(function(e,t){return _l({resolve:e,reject:t})}),Lv={config:S_,init:C_,__getMonacoInstance:A_},M_={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},gc=M_,P_={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},L_=P_;function R_({children:e}){return Jt.createElement("div",{style:L_.container},e)}var I_=R_,O_=I_;function $_({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:s,wrapperProps:a}){return Jt.createElement("section",{style:{...gc.wrapper,width:e,height:t},...a},!n&&Jt.createElement(O_,null,r),Jt.createElement("div",{ref:i,style:{...gc.fullWidth,...!n&&gc.hide},className:s}))}var D_=$_,Rv=k.memo(D_);function F_(e){k.useEffect(e,[])}var Iv=F_;function B_(e,t,n=!0){let r=k.useRef(!0);k.useEffect(r.current||!n?()=>{r.current=!1}:e,t)}var Vt=B_;function No(){}function fi(e,t,n,r){return U_(e,r)||V_(e,t,n,r)}function U_(e,t){return e.editor.getModel(Ov(e,t))}function V_(e,t,n,r){return e.editor.createModel(t,n,r?Ov(e,r):void 0)}function Ov(e,t){return e.Uri.parse(t)}function W_({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:s,modifiedModelPath:a,keepCurrentOriginalModel:l=!1,keepCurrentModifiedModel:c=!1,theme:u="light",loading:d="Loading...",options:f={},height:p="100%",width:h="100%",className:m,wrapperProps:v={},beforeMount:j=No,onMount:g=No}){let[x,w]=k.useState(!1),[_,z]=k.useState(!0),C=k.useRef(null),R=k.useRef(null),E=k.useRef(null),U=k.useRef(g),N=k.useRef(j),$=k.useRef(!1);Iv(()=>{let D=Lv.init();return D.then(P=>(R.current=P)&&z(!1)).catch(P=>(P==null?void 0:P.type)!=="cancelation"&&console.error("Monaco initialization: error:",P)),()=>C.current?A():D.cancel()}),Vt(()=>{if(C.current&&R.current){let D=C.current.getOriginalEditor(),P=fi(R.current,e||"",r||n||"text",s||"");P!==D.getModel()&&D.setModel(P)}},[s],x),Vt(()=>{if(C.current&&R.current){let D=C.current.getModifiedEditor(),P=fi(R.current,t||"",i||n||"text",a||"");P!==D.getModel()&&D.setModel(P)}},[a],x),Vt(()=>{let D=C.current.getModifiedEditor();D.getOption(R.current.editor.EditorOption.readOnly)?D.setValue(t||""):t!==D.getValue()&&(D.executeEdits("",[{range:D.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),D.pushUndoStop())},[t],x),Vt(()=>{var D,P;(P=(D=C.current)==null?void 0:D.getModel())==null||P.original.setValue(e||"")},[e],x),Vt(()=>{let{original:D,modified:P}=C.current.getModel();R.current.editor.setModelLanguage(D,r||n||"text"),R.current.editor.setModelLanguage(P,i||n||"text")},[n,r,i],x),Vt(()=>{var D;(D=R.current)==null||D.editor.setTheme(u)},[u],x),Vt(()=>{var D;(D=C.current)==null||D.updateOptions(f)},[f],x);let G=k.useCallback(()=>{var M;if(!R.current)return;N.current(R.current);let D=fi(R.current,e||"",r||n||"text",s||""),P=fi(R.current,t||"",i||n||"text",a||"");(M=C.current)==null||M.setModel({original:D,modified:P})},[n,t,i,e,r,s,a]),Y=k.useCallback(()=>{var D;!$.current&&E.current&&(C.current=R.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...f}),G(),(D=R.current)==null||D.editor.setTheme(u),w(!0),$.current=!0)},[f,u,G]);k.useEffect(()=>{x&&U.current(C.current,R.current)},[x]),k.useEffect(()=>{!_&&!x&&Y()},[_,x,Y]);function A(){var P,M,B,O;let D=(P=C.current)==null?void 0:P.getModel();l||((M=D==null?void 0:D.original)==null||M.dispose()),c||((B=D==null?void 0:D.modified)==null||B.dispose()),(O=C.current)==null||O.dispose()}return Jt.createElement(Rv,{width:h,height:p,isEditorReady:x,loading:d,_ref:E,className:m,wrapperProps:v})}var H_=W_;k.memo(H_);function q_(e){let t=k.useRef();return k.useEffect(()=>{t.current=e},[e]),t.current}var J_=q_,Fs=new Map;function G_({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:s,theme:a="light",line:l,loading:c="Loading...",options:u={},overrideServices:d={},saveViewState:f=!0,keepCurrentModel:p=!1,width:h="100%",height:m="100%",className:v,wrapperProps:j={},beforeMount:g=No,onMount:x=No,onChange:w,onValidate:_=No}){let[z,C]=k.useState(!1),[R,E]=k.useState(!0),U=k.useRef(null),N=k.useRef(null),$=k.useRef(null),G=k.useRef(x),Y=k.useRef(g),A=k.useRef(),D=k.useRef(r),P=J_(s),M=k.useRef(!1),B=k.useRef(!1);Iv(()=>{let W=Lv.init();return W.then(H=>(U.current=H)&&E(!1)).catch(H=>(H==null?void 0:H.type)!=="cancelation"&&console.error("Monaco initialization: error:",H)),()=>N.current?b():W.cancel()}),Vt(()=>{var H,y,S,F;let W=fi(U.current,e||r||"",t||i||"",s||n||"");W!==((H=N.current)==null?void 0:H.getModel())&&(f&&Fs.set(P,(y=N.current)==null?void 0:y.saveViewState()),(S=N.current)==null||S.setModel(W),f&&((F=N.current)==null||F.restoreViewState(Fs.get(s))))},[s],z),Vt(()=>{var W;(W=N.current)==null||W.updateOptions(u)},[u],z),Vt(()=>{!N.current||r===void 0||(N.current.getOption(U.current.editor.EditorOption.readOnly)?N.current.setValue(r):r!==N.current.getValue()&&(B.current=!0,N.current.executeEdits("",[{range:N.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),N.current.pushUndoStop(),B.current=!1))},[r],z),Vt(()=>{var H,y;let W=(H=N.current)==null?void 0:H.getModel();W&&i&&((y=U.current)==null||y.editor.setModelLanguage(W,i))},[i],z),Vt(()=>{var W;l!==void 0&&((W=N.current)==null||W.revealLine(l))},[l],z),Vt(()=>{var W;(W=U.current)==null||W.editor.setTheme(a)},[a],z);let O=k.useCallback(()=>{var W;if(!(!$.current||!U.current)&&!M.current){Y.current(U.current);let H=s||n,y=fi(U.current,r||e||"",t||i||"",H||"");N.current=(W=U.current)==null?void 0:W.editor.create($.current,{model:y,automaticLayout:!0,...u},d),f&&N.current.restoreViewState(Fs.get(H)),U.current.editor.setTheme(a),l!==void 0&&N.current.revealLine(l),C(!0),M.current=!0}},[e,t,n,r,i,s,u,d,f,a,l]);k.useEffect(()=>{z&&G.current(N.current,U.current)},[z]),k.useEffect(()=>{!R&&!z&&O()},[R,z,O]),D.current=r,k.useEffect(()=>{var W,H;z&&w&&((W=A.current)==null||W.dispose(),A.current=(H=N.current)==null?void 0:H.onDidChangeModelContent(y=>{B.current||w(N.current.getValue(),y)}))},[z,w]),k.useEffect(()=>{if(z){let W=U.current.editor.onDidChangeMarkers(H=>{var S;let y=(S=N.current.getModel())==null?void 0:S.uri;if(y&&H.find(F=>F.path===y.path)){let F=U.current.editor.getModelMarkers({resource:y});_==null||_(F)}});return()=>{W==null||W.dispose()}}return()=>{}},[z,_]);function b(){var W,H;(W=A.current)==null||W.dispose(),p?f&&Fs.set(s,N.current.saveViewState()):(H=N.current.getModel())==null||H.dispose(),N.current.dispose()}return Jt.createElement(Rv,{width:h,height:m,isEditorReady:z,loading:c,_ref:$,className:v,wrapperProps:j})}var K_=G_,Y_=k.memo(K_),on=Y_;function Q_(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const X_=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Z_=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,e2={};function qh(e,t){return(e2.jsx?Z_:X_).test(e)}const t2=/[ \t\n\f\r]/g;function n2(e){return typeof e=="object"?e.type==="text"?Jh(e.value):!1:Jh(e)}function Jh(e){return e.replace(t2,"")===""}class fs{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}fs.prototype.normal={};fs.prototype.property={};fs.prototype.space=void 0;function $v(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new fs(n,r,t)}function Ou(e){return e.toLowerCase()}class Ot{constructor(t,n){this.attribute=n,this.property=t}}Ot.prototype.attribute="";Ot.prototype.booleanish=!1;Ot.prototype.boolean=!1;Ot.prototype.commaOrSpaceSeparated=!1;Ot.prototype.commaSeparated=!1;Ot.prototype.defined=!1;Ot.prototype.mustUseProperty=!1;Ot.prototype.number=!1;Ot.prototype.overloadedBoolean=!1;Ot.prototype.property="";Ot.prototype.spaceSeparated=!1;Ot.prototype.space=void 0;let r2=0;const Te=Gr(),tt=Gr(),$u=Gr(),se=Gr(),Be=Gr(),wi=Gr(),Bt=Gr();function Gr(){return 2**++r2}const Du=Object.freeze(Object.defineProperty({__proto__:null,boolean:Te,booleanish:tt,commaOrSpaceSeparated:Bt,commaSeparated:wi,number:se,overloadedBoolean:$u,spaceSeparated:Be},Symbol.toStringTag,{value:"Module"})),xc=Object.keys(Du);class dp extends Ot{constructor(t,n,r,i){let s=-1;if(super(t,n),Gh(this,"space",i),typeof r=="number")for(;++s<xc.length;){const a=xc[s];Gh(this,xc[s],(r&Du[a])===Du[a])}}}dp.prototype.defined=!0;function Gh(e,t,n){n&&(e[t]=n)}function Vi(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const s=new dp(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),t[r]=s,n[Ou(r)]=r,n[Ou(s.attribute)]=r}return new fs(t,n,e.space)}const Dv=Vi({properties:{ariaActiveDescendant:null,ariaAtomic:tt,ariaAutoComplete:null,ariaBusy:tt,ariaChecked:tt,ariaColCount:se,ariaColIndex:se,ariaColSpan:se,ariaControls:Be,ariaCurrent:null,ariaDescribedBy:Be,ariaDetails:null,ariaDisabled:tt,ariaDropEffect:Be,ariaErrorMessage:null,ariaExpanded:tt,ariaFlowTo:Be,ariaGrabbed:tt,ariaHasPopup:null,ariaHidden:tt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Be,ariaLevel:se,ariaLive:null,ariaModal:tt,ariaMultiLine:tt,ariaMultiSelectable:tt,ariaOrientation:null,ariaOwns:Be,ariaPlaceholder:null,ariaPosInSet:se,ariaPressed:tt,ariaReadOnly:tt,ariaRelevant:null,ariaRequired:tt,ariaRoleDescription:Be,ariaRowCount:se,ariaRowIndex:se,ariaRowSpan:se,ariaSelected:tt,ariaSetSize:se,ariaSort:null,ariaValueMax:se,ariaValueMin:se,ariaValueNow:se,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Fv(e,t){return t in e?e[t]:t}function Bv(e,t){return Fv(e,t.toLowerCase())}const i2=Vi({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:wi,acceptCharset:Be,accessKey:Be,action:null,allow:null,allowFullScreen:Te,allowPaymentRequest:Te,allowUserMedia:Te,alt:null,as:null,async:Te,autoCapitalize:null,autoComplete:Be,autoFocus:Te,autoPlay:Te,blocking:Be,capture:null,charSet:null,checked:Te,cite:null,className:Be,cols:se,colSpan:null,content:null,contentEditable:tt,controls:Te,controlsList:Be,coords:se|wi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Te,defer:Te,dir:null,dirName:null,disabled:Te,download:$u,draggable:tt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Te,formTarget:null,headers:Be,height:se,hidden:$u,high:se,href:null,hrefLang:null,htmlFor:Be,httpEquiv:Be,id:null,imageSizes:null,imageSrcSet:null,inert:Te,inputMode:null,integrity:null,is:null,isMap:Te,itemId:null,itemProp:Be,itemRef:Be,itemScope:Te,itemType:Be,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Te,low:se,manifest:null,max:null,maxLength:se,media:null,method:null,min:null,minLength:se,multiple:Te,muted:Te,name:null,nonce:null,noModule:Te,noValidate:Te,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Te,optimum:se,pattern:null,ping:Be,placeholder:null,playsInline:Te,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Te,referrerPolicy:null,rel:Be,required:Te,reversed:Te,rows:se,rowSpan:se,sandbox:Be,scope:null,scoped:Te,seamless:Te,selected:Te,shadowRootClonable:Te,shadowRootDelegatesFocus:Te,shadowRootMode:null,shape:null,size:se,sizes:null,slot:null,span:se,spellCheck:tt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:se,step:null,style:null,tabIndex:se,target:null,title:null,translate:null,type:null,typeMustMatch:Te,useMap:null,value:tt,width:se,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Be,axis:null,background:null,bgColor:null,border:se,borderColor:null,bottomMargin:se,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Te,declare:Te,event:null,face:null,frame:null,frameBorder:null,hSpace:se,leftMargin:se,link:null,longDesc:null,lowSrc:null,marginHeight:se,marginWidth:se,noResize:Te,noHref:Te,noShade:Te,noWrap:Te,object:null,profile:null,prompt:null,rev:null,rightMargin:se,rules:null,scheme:null,scrolling:tt,standby:null,summary:null,text:null,topMargin:se,valueType:null,version:null,vAlign:null,vLink:null,vSpace:se,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Te,disableRemotePlayback:Te,prefix:null,property:null,results:se,security:null,unselectable:null},space:"html",transform:Bv}),o2=Vi({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Bt,accentHeight:se,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:se,amplitude:se,arabicForm:null,ascent:se,attributeName:null,attributeType:null,azimuth:se,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:se,by:null,calcMode:null,capHeight:se,className:Be,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:se,diffuseConstant:se,direction:null,display:null,dur:null,divisor:se,dominantBaseline:null,download:Te,dx:null,dy:null,edgeMode:null,editable:null,elevation:se,enableBackground:null,end:null,event:null,exponent:se,externalResourcesRequired:null,fill:null,fillOpacity:se,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:wi,g2:wi,glyphName:wi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:se,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:se,horizOriginX:se,horizOriginY:se,id:null,ideographic:se,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:se,k:se,k1:se,k2:se,k3:se,k4:se,kernelMatrix:Bt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:se,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:se,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:se,overlineThickness:se,paintOrder:null,panose1:null,path:null,pathLength:se,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Be,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:se,pointsAtY:se,pointsAtZ:se,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Bt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Bt,rev:Bt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Bt,requiredFeatures:Bt,requiredFonts:Bt,requiredFormats:Bt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:se,specularExponent:se,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:se,strikethroughThickness:se,string:null,stroke:null,strokeDashArray:Bt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:se,strokeOpacity:se,strokeWidth:null,style:null,surfaceScale:se,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Bt,tabIndex:se,tableValues:null,target:null,targetX:se,targetY:se,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Bt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:se,underlineThickness:se,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:se,values:null,vAlphabetic:se,vMathematical:se,vectorEffect:null,vHanging:se,vIdeographic:se,version:null,vertAdvY:se,vertOriginX:se,vertOriginY:se,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:se,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Fv}),Uv=Vi({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Vv=Vi({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Bv}),Wv=Vi({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),s2={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},a2=/[A-Z]/g,Kh=/-[a-z]/g,l2=/^data[-\w.:]+$/i;function c2(e,t){const n=Ou(t);let r=t,i=Ot;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&l2.test(t)){if(t.charAt(4)==="-"){const s=t.slice(5).replace(Kh,d2);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=t.slice(4);if(!Kh.test(s)){let a=s.replace(a2,u2);a.charAt(0)!=="-"&&(a="-"+a),t="data"+a}}i=dp}return new i(r,t)}function u2(e){return"-"+e.toLowerCase()}function d2(e){return e.charAt(1).toUpperCase()}const p2=$v([Dv,i2,Uv,Vv,Wv],"html"),pp=$v([Dv,o2,Uv,Vv,Wv],"svg");function f2(e){return e.join(" ").trim()}var fp={},Yh=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,h2=/\n/g,m2=/^\s*/,g2=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,x2=/^:\s*/,y2=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,v2=/^[;\s]*/,b2=/^\s+|\s+$/g,w2=`
`,Qh="/",Xh="*",Nr="",k2="comment",j2="declaration";function _2(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(m){var v=m.match(h2);v&&(n+=v.length);var j=m.lastIndexOf(w2);r=~j?m.length-j:r+m.length}function s(){var m={line:n,column:r};return function(v){return v.position=new a(m),u(),v}}function a(m){this.start=m,this.end={line:n,column:r},this.source=t.source}a.prototype.content=e;function l(m){var v=new Error(t.source+":"+n+":"+r+": "+m);if(v.reason=m,v.filename=t.source,v.line=n,v.column=r,v.source=e,!t.silent)throw v}function c(m){var v=m.exec(e);if(v){var j=v[0];return i(j),e=e.slice(j.length),v}}function u(){c(m2)}function d(m){var v;for(m=m||[];v=f();)v!==!1&&m.push(v);return m}function f(){var m=s();if(!(Qh!=e.charAt(0)||Xh!=e.charAt(1))){for(var v=2;Nr!=e.charAt(v)&&(Xh!=e.charAt(v)||Qh!=e.charAt(v+1));)++v;if(v+=2,Nr===e.charAt(v-1))return l("End of comment missing");var j=e.slice(2,v-2);return r+=2,i(j),e=e.slice(v),r+=2,m({type:k2,comment:j})}}function p(){var m=s(),v=c(g2);if(v){if(f(),!c(x2))return l("property missing ':'");var j=c(y2),g=m({type:j2,property:Zh(v[0].replace(Yh,Nr)),value:j?Zh(j[0].replace(Yh,Nr)):Nr});return c(v2),g}}function h(){var m=[];d(m);for(var v;v=p();)v!==!1&&(m.push(v),d(m));return m}return u(),h()}function Zh(e){return e?e.replace(b2,Nr):Nr}var S2=_2,C2=xa&&xa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fp,"__esModule",{value:!0});fp.default=E2;const N2=C2(S2);function E2(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,N2.default)(e),i=typeof t=="function";return r.forEach(s=>{if(s.type!=="declaration")return;const{property:a,value:l}=s;i?t(a,l,s):l&&(n=n||{},n[a]=l)}),n}var Sl={};Object.defineProperty(Sl,"__esModule",{value:!0});Sl.camelCase=void 0;var z2=/^--[a-zA-Z0-9_-]+$/,T2=/-([a-z])/g,A2=/^[^-]+$/,M2=/^-(webkit|moz|ms|o|khtml)-/,P2=/^-(ms)-/,L2=function(e){return!e||A2.test(e)||z2.test(e)},R2=function(e,t){return t.toUpperCase()},em=function(e,t){return"".concat(t,"-")},I2=function(e,t){return t===void 0&&(t={}),L2(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(P2,em):e=e.replace(M2,em),e.replace(T2,R2))};Sl.camelCase=I2;var O2=xa&&xa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},$2=O2(fp),D2=Sl;function Fu(e,t){var n={};return!e||typeof e!="string"||(0,$2.default)(e,function(r,i){r&&i&&(n[(0,D2.camelCase)(r,t)]=i)}),n}Fu.default=Fu;var F2=Fu;const B2=rl(F2),Hv=qv("end"),hp=qv("start");function qv(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function U2(e){const t=hp(e),n=Hv(e);if(t&&n)return{start:t,end:n}}function Eo(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?tm(e.position):"start"in e||"end"in e?tm(e):"line"in e||"column"in e?Bu(e):""}function Bu(e){return nm(e&&e.line)+":"+nm(e&&e.column)}function tm(e){return Bu(e&&e.start)+"-"+Bu(e&&e.end)}function nm(e){return e&&typeof e=="number"?e:1}class vt extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",s={},a=!1;if(n&&("line"in n&&"column"in n?s={place:n}:"start"in n&&"end"in n?s={place:n}:"type"in n?s={ancestors:[n],place:n.position}:s={...n}),typeof t=="string"?i=t:!s.cause&&t&&(a=!0,i=t.message,s.cause=t),!s.ruleId&&!s.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?s.ruleId=r:(s.source=r.slice(0,c),s.ruleId=r.slice(c+1))}if(!s.place&&s.ancestors&&s.ancestors){const c=s.ancestors[s.ancestors.length-1];c&&(s.place=c.position)}const l=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Eo(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=a&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}vt.prototype.file="";vt.prototype.name="";vt.prototype.reason="";vt.prototype.message="";vt.prototype.stack="";vt.prototype.column=void 0;vt.prototype.line=void 0;vt.prototype.ancestors=void 0;vt.prototype.cause=void 0;vt.prototype.fatal=void 0;vt.prototype.place=void 0;vt.prototype.ruleId=void 0;vt.prototype.source=void 0;const mp={}.hasOwnProperty,V2=new Map,W2=/[A-Z]/g,H2=new Set(["table","tbody","thead","tfoot","tr"]),q2=new Set(["td","th"]),Jv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function J2(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=tS(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=eS(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?pp:p2,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},s=Gv(i,e,void 0);return s&&typeof s!="string"?s:i.create(e,i.Fragment,{children:s||void 0},void 0)}function Gv(e,t,n){if(t.type==="element")return G2(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return K2(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Q2(e,t,n);if(t.type==="mdxjsEsm")return Y2(e,t);if(t.type==="root")return X2(e,t,n);if(t.type==="text")return Z2(e,t)}function G2(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=pp,e.schema=i),e.ancestors.push(t);const s=Yv(e,t.tagName,!1),a=nS(e,t);let l=xp(e,t);return H2.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!n2(c):!0})),Kv(e,a,s,t),gp(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function K2(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}Xo(e,t.position)}function Y2(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Xo(e,t.position)}function Q2(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=pp,e.schema=i),e.ancestors.push(t);const s=t.name===null?e.Fragment:Yv(e,t.name,!0),a=rS(e,t),l=xp(e,t);return Kv(e,a,s,t),gp(a,l),e.ancestors.pop(),e.schema=r,e.create(t,s,a,n)}function X2(e,t,n){const r={};return gp(r,xp(e,t)),e.create(t,e.Fragment,r,n)}function Z2(e,t){return t.value}function Kv(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function gp(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function eS(e,t,n){return r;function r(i,s,a,l){const u=Array.isArray(a.children)?n:t;return l?u(s,a,l):u(s,a)}}function tS(e,t){return n;function n(r,i,s,a){const l=Array.isArray(s.children),c=hp(r);return t(i,s,a,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function nS(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&mp.call(t.properties,i)){const s=iS(e,i,t.properties[i]);if(s){const[a,l]=s;e.tableCellAlignToStyle&&a==="align"&&typeof l=="string"&&q2.has(t.tagName)?r=l:n[a]=l}}if(r){const s=n.style||(n.style={});s[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function rS(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const s=r.data.estree.body[0];s.type;const a=s.expression;a.type;const l=a.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Xo(e,t.position);else{const i=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,s=e.evaluater.evaluateExpression(l.expression)}else Xo(e,t.position);else s=r.value===null?!0:r.value;n[i]=s}return n}function xp(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:V2;for(;++r<t.children.length;){const s=t.children[r];let a;if(e.passKeys){const c=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(c){const u=i.get(c)||0;a=c+"-"+u,i.set(c,u+1)}}const l=Gv(e,s,a);l!==void 0&&n.push(l)}return n}function iS(e,t,n){const r=c2(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Q_(n):f2(n)),r.property==="style"){let i=typeof n=="object"?n:oS(e,String(n));return e.stylePropertyNameCase==="css"&&(i=sS(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?s2[r.property]||r.property:r.attribute,n]}}function oS(e,t){try{return B2(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new vt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Jv+"#cannot-parse-style-attribute",i}}function Yv(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let s=-1,a;for(;++s<i.length;){const l=qh(i[s])?{type:"Identifier",name:i[s]}:{type:"Literal",value:i[s]};a=a?{type:"MemberExpression",object:a,property:l,computed:!!(s&&l.type==="Literal"),optional:!1}:l}r=a}else r=qh(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return mp.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);Xo(e)}function Xo(e,t){const n=new vt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Jv+"#cannot-handle-mdx-estrees-without-createevaluater",n}function sS(e){const t={};let n;for(n in e)mp.call(e,n)&&(t[aS(n)]=e[n]);return t}function aS(e){let t=e.replace(W2,lS);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function lS(e){return"-"+e.toLowerCase()}const yc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},cS={};function uS(e,t){const n=cS,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Qv(e,r,i)}function Qv(e,t,n){if(dS(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return rm(e.children,t,n)}return Array.isArray(e)?rm(e,t,n):""}function rm(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Qv(e[i],t,n);return r.join("")}function dS(e){return!!(e&&typeof e=="object")}const im=document.createElement("i");function yp(e){const t="&"+e+";";im.innerHTML=t;const n=im.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Tn(e,t,n,r){const i=e.length;let s=0,a;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)a=Array.from(r),a.unshift(t,n),e.splice(...a);else for(n&&e.splice(t,n);s<r.length;)a=r.slice(s,s+1e4),a.unshift(t,0),e.splice(...a),s+=1e4,t+=1e4}function nn(e,t){return e.length>0?(Tn(e,e.length,0,t),e):t}const om={}.hasOwnProperty;function pS(e){const t={};let n=-1;for(;++n<e.length;)fS(t,e[n]);return t}function fS(e,t){let n;for(n in t){const i=(om.call(e,n)?e[n]:void 0)||(e[n]={}),s=t[n];let a;if(s)for(a in s){om.call(i,a)||(i[a]=[]);const l=s[a];hS(i[a],Array.isArray(l)?l:l?[l]:[])}}}function hS(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Tn(e,0,0,r)}function Xv(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ki(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const _n=jr(/[A-Za-z]/),qt=jr(/[\dA-Za-z]/),mS=jr(/[#-'*+\--9=?A-Z^-~]/);function Uu(e){return e!==null&&(e<32||e===127)}const Vu=jr(/\d/),gS=jr(/[\dA-Fa-f]/),xS=jr(/[!-/:-@[-`{-~]/);function Ce(e){return e!==null&&e<-2}function It(e){return e!==null&&(e<0||e===32)}function Oe(e){return e===-2||e===-1||e===32}const yS=jr(new RegExp("\\p{P}|\\p{S}","u")),vS=jr(/\s/);function jr(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Wi(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const s=e.charCodeAt(n);let a="";if(s===37&&qt(e.charCodeAt(n+1))&&qt(e.charCodeAt(n+2)))i=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(a=String.fromCharCode(s));else if(s>55295&&s<57344){const l=e.charCodeAt(n+1);s<56320&&l>56319&&l<57344?(a=String.fromCharCode(s,l),i=1):a="�"}else a=String.fromCharCode(s);a&&(t.push(e.slice(r,n),encodeURIComponent(a)),r=n+i+1,a=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Ve(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let s=0;return a;function a(c){return Oe(c)?(e.enter(n),l(c)):t(c)}function l(c){return Oe(c)&&s++<i?(e.consume(c),l):(e.exit(n),t(c))}}const bS={tokenize:wS};function wS(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Ve(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),s(l)}function s(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,a(l)}function a(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return Ce(l)?(e.consume(l),e.exit("chunkText"),s):(e.consume(l),a)}}const kS={tokenize:jS},sm={tokenize:_S};function jS(e){const t=this,n=[];let r=0,i,s,a;return l;function l(w){if(r<n.length){const _=n[r];return t.containerState=_[1],e.attempt(_[0].continuation,c,u)(w)}return u(w)}function c(w){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&x();const _=t.events.length;let z=_,C;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){C=t.events[z][1].end;break}g(r);let R=_;for(;R<t.events.length;)t.events[R][1].end={...C},R++;return Tn(t.events,z+1,0,t.events.slice(_)),t.events.length=R,u(w)}return l(w)}function u(w){if(r===n.length){if(!i)return p(w);if(i.currentConstruct&&i.currentConstruct.concrete)return m(w);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(sm,d,f)(w)}function d(w){return i&&x(),g(r),p(w)}function f(w){return t.parser.lazy[t.now().line]=r!==n.length,a=t.now().offset,m(w)}function p(w){return t.containerState={},e.attempt(sm,h,m)(w)}function h(w){return r++,n.push([t.currentConstruct,t.containerState]),p(w)}function m(w){if(w===null){i&&x(),g(0),e.consume(w);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:s}),v(w)}function v(w){if(w===null){j(e.exit("chunkFlow"),!0),g(0),e.consume(w);return}return Ce(w)?(e.consume(w),j(e.exit("chunkFlow")),r=0,t.interrupt=void 0,l):(e.consume(w),v)}function j(w,_){const z=t.sliceStream(w);if(_&&z.push(null),w.previous=s,s&&(s.next=w),s=w,i.defineSkip(w.start),i.write(z),t.parser.lazy[w.start.line]){let C=i.events.length;for(;C--;)if(i.events[C][1].start.offset<a&&(!i.events[C][1].end||i.events[C][1].end.offset>a))return;const R=t.events.length;let E=R,U,N;for(;E--;)if(t.events[E][0]==="exit"&&t.events[E][1].type==="chunkFlow"){if(U){N=t.events[E][1].end;break}U=!0}for(g(r),C=R;C<t.events.length;)t.events[C][1].end={...N},C++;Tn(t.events,E+1,0,t.events.slice(R)),t.events.length=C}}function g(w){let _=n.length;for(;_-- >w;){const z=n[_];t.containerState=z[1],z[0].exit.call(t,e)}n.length=w}function x(){i.write([null]),s=void 0,i=void 0,t.containerState._closeFlow=void 0}}function _S(e,t,n){return Ve(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function am(e){if(e===null||It(e)||vS(e))return 1;if(yS(e))return 2}function vp(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const s=e[i].resolveAll;s&&!r.includes(s)&&(t=s(t,n),r.push(s))}return t}const Wu={name:"attention",resolveAll:SS,tokenize:CS};function SS(e,t){let n=-1,r,i,s,a,l,c,u,d;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const f={...e[r][1].end},p={...e[n][1].start};lm(f,-c),lm(p,c),a={type:c>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:p},s={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?"strong":"emphasis",start:{...a.start},end:{...l.end}},e[r][1].end={...a.start},e[n][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=nn(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=nn(u,[["enter",i,t],["enter",a,t],["exit",a,t],["enter",s,t]]),u=nn(u,vp(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=nn(u,[["exit",s,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(d=2,u=nn(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):d=0,Tn(e,r-1,n-r+3,u),n=r+u.length-d-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function CS(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=am(r);let s;return a;function a(c){return s=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===s)return e.consume(c),l;const u=e.exit("attentionSequence"),d=am(c),f=!d||d===2&&i||n.includes(c),p=!i||i===2&&d||n.includes(r);return u._open=!!(s===42?f:f&&(i||!p)),u._close=!!(s===42?p:p&&(d||!f)),t(c)}}function lm(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const NS={name:"autolink",tokenize:ES};function ES(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(h){return _n(h)?(e.consume(h),a):h===64?n(h):u(h)}function a(h){return h===43||h===45||h===46||qt(h)?(r=1,l(h)):u(h)}function l(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||qt(h))&&r++<32?(e.consume(h),l):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Uu(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),d):mS(h)?(e.consume(h),u):n(h)}function d(h){return qt(h)?f(h):n(h)}function f(h){return h===46?(e.consume(h),r=0,d):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):p(h)}function p(h){if((h===45||qt(h))&&r++<63){const m=h===45?p:f;return e.consume(h),m}return n(h)}}const Cl={partial:!0,tokenize:zS};function zS(e,t,n){return r;function r(s){return Oe(s)?Ve(e,i,"linePrefix")(s):i(s)}function i(s){return s===null||Ce(s)?t(s):n(s)}}const Zv={continuation:{tokenize:AS},exit:MS,name:"blockQuote",tokenize:TS};function TS(e,t,n){const r=this;return i;function i(a){if(a===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(a),e.exit("blockQuoteMarker"),s}return n(a)}function s(a){return Oe(a)?(e.enter("blockQuotePrefixWhitespace"),e.consume(a),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(a))}}function AS(e,t,n){const r=this;return i;function i(a){return Oe(a)?Ve(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a):s(a)}function s(a){return e.attempt(Zv,t,n)(a)}}function MS(e){e.exit("blockQuote")}const e1={name:"characterEscape",tokenize:PS};function PS(e,t,n){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),i}function i(s){return xS(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(s)}}const t1={name:"characterReference",tokenize:LS};function LS(e,t,n){const r=this;let i=0,s,a;return l;function l(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),c}function c(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),s=31,a=qt,d(f))}function u(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,a=gS,d):(e.enter("characterReferenceValue"),s=7,a=Vu,d(f))}function d(f){if(f===59&&i){const p=e.exit("characterReferenceValue");return a===qt&&!yp(r.sliceSerialize(p))?n(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return a(f)&&i++<s?(e.consume(f),d):n(f)}}const cm={partial:!0,tokenize:IS},um={concrete:!0,name:"codeFenced",tokenize:RS};function RS(e,t,n){const r=this,i={partial:!0,tokenize:z};let s=0,a=0,l;return c;function c(C){return u(C)}function u(C){const R=r.events[r.events.length-1];return s=R&&R[1].type==="linePrefix"?R[2].sliceSerialize(R[1],!0).length:0,l=C,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),d(C)}function d(C){return C===l?(a++,e.consume(C),d):a<3?n(C):(e.exit("codeFencedFenceSequence"),Oe(C)?Ve(e,f,"whitespace")(C):f(C))}function f(C){return C===null||Ce(C)?(e.exit("codeFencedFence"),r.interrupt?t(C):e.check(cm,v,_)(C)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),p(C))}function p(C){return C===null||Ce(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(C)):Oe(C)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Ve(e,h,"whitespace")(C)):C===96&&C===l?n(C):(e.consume(C),p)}function h(C){return C===null||Ce(C)?f(C):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(C))}function m(C){return C===null||Ce(C)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(C)):C===96&&C===l?n(C):(e.consume(C),m)}function v(C){return e.attempt(i,_,j)(C)}function j(C){return e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),g}function g(C){return s>0&&Oe(C)?Ve(e,x,"linePrefix",s+1)(C):x(C)}function x(C){return C===null||Ce(C)?e.check(cm,v,_)(C):(e.enter("codeFlowValue"),w(C))}function w(C){return C===null||Ce(C)?(e.exit("codeFlowValue"),x(C)):(e.consume(C),w)}function _(C){return e.exit("codeFenced"),t(C)}function z(C,R,E){let U=0;return N;function N(D){return C.enter("lineEnding"),C.consume(D),C.exit("lineEnding"),$}function $(D){return C.enter("codeFencedFence"),Oe(D)?Ve(C,G,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(D):G(D)}function G(D){return D===l?(C.enter("codeFencedFenceSequence"),Y(D)):E(D)}function Y(D){return D===l?(U++,C.consume(D),Y):U>=a?(C.exit("codeFencedFenceSequence"),Oe(D)?Ve(C,A,"whitespace")(D):A(D)):E(D)}function A(D){return D===null||Ce(D)?(C.exit("codeFencedFence"),R(D)):E(D)}}}function IS(e,t,n){const r=this;return i;function i(a){return a===null?n(a):(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}const vc={name:"codeIndented",tokenize:$S},OS={partial:!0,tokenize:DS};function $S(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Ve(e,s,"linePrefix",5)(u)}function s(u){const d=r.events[r.events.length-1];return d&&d[1].type==="linePrefix"&&d[2].sliceSerialize(d[1],!0).length>=4?a(u):n(u)}function a(u){return u===null?c(u):Ce(u)?e.attempt(OS,a,c)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||Ce(u)?(e.exit("codeFlowValue"),a(u)):(e.consume(u),l)}function c(u){return e.exit("codeIndented"),t(u)}}function DS(e,t,n){const r=this;return i;function i(a){return r.parser.lazy[r.now().line]?n(a):Ce(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),i):Ve(e,s,"linePrefix",5)(a)}function s(a){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):Ce(a)?i(a):n(a)}}const FS={name:"codeText",previous:US,resolve:BS,tokenize:VS};function BS(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function US(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function VS(e,t,n){let r=0,i,s;return a;function a(f){return e.enter("codeText"),e.enter("codeTextSequence"),l(f)}function l(f){return f===96?(e.consume(f),r++,l):(e.exit("codeTextSequence"),c(f))}function c(f){return f===null?n(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),c):f===96?(s=e.enter("codeTextSequence"),i=0,d(f)):Ce(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||Ce(f)?(e.exit("codeTextData"),c(f)):(e.consume(f),u)}function d(f){return f===96?(e.consume(f),i++,d):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(f)):(s.type="codeTextData",u(f))}}class WS{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const s=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&io(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),io(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),io(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);io(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);io(this.left,n.reverse())}}}function io(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function n1(e){const t={};let n=-1,r,i,s,a,l,c,u;const d=new WS(e);for(;++n<d.length;){for(;n in t;)n=t[n];if(r=d.get(n),n&&r[1].type==="chunkFlow"&&d.get(n-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,s=0,s<c.length&&c[s][1].type==="lineEndingBlank"&&(s+=2),s<c.length&&c[s][1].type==="content"))for(;++s<c.length&&c[s][1].type!=="content";)c[s][1].type==="chunkText"&&(c[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,HS(d,n)),n=t[n],u=!0);else if(r[1]._container){for(s=n,i=void 0;s--;)if(a=d.get(s),a[1].type==="lineEnding"||a[1].type==="lineEndingBlank")a[0]==="enter"&&(i&&(d.get(i)[1].type="lineEndingBlank"),a[1].type="lineEnding",i=s);else if(!(a[1].type==="linePrefix"||a[1].type==="listItemIndent"))break;i&&(r[1].end={...d.get(i)[1].start},l=d.slice(i,n),l.unshift(r),d.splice(i,n-i+1,l))}}return Tn(e,0,Number.POSITIVE_INFINITY,d.slice(0)),!u}function HS(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const s=[];let a=n._tokenizer;a||(a=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(a._contentTypeTextTrailing=!0));const l=a.events,c=[],u={};let d,f,p=-1,h=n,m=0,v=0;const j=[v];for(;h;){for(;e.get(++i)[1]!==h;);s.push(i),h._tokenizer||(d=r.sliceStream(h),h.next||d.push(null),f&&a.defineSkip(h.start),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=!0),a.write(d),h._isInFirstContentOfListItem&&(a._gfmTasklistFirstContentOfListItem=void 0)),f=h,h=h.next}for(h=n;++p<l.length;)l[p][0]==="exit"&&l[p-1][0]==="enter"&&l[p][1].type===l[p-1][1].type&&l[p][1].start.line!==l[p][1].end.line&&(v=p+1,j.push(v),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(a.events=[],h?(h._tokenizer=void 0,h.previous=void 0):j.pop(),p=j.length;p--;){const g=l.slice(j[p],j[p+1]),x=s.pop();c.push([x,x+g.length-1]),e.splice(x,2,g)}for(c.reverse(),p=-1;++p<c.length;)u[m+c[p][0]]=m+c[p][1],m+=c[p][1]-c[p][0]-1;return u}const qS={resolve:GS,tokenize:KS},JS={partial:!0,tokenize:YS};function GS(e){return n1(e),e}function KS(e,t){let n;return r;function r(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?s(l):Ce(l)?e.check(JS,a,s)(l):(e.consume(l),i)}function s(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function a(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function YS(e,t,n){const r=this;return i;function i(a){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Ve(e,s,"linePrefix")}function s(a){if(a===null||Ce(a))return n(a);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(a):e.interrupt(r.parser.constructs.flow,n,t)(a)}}function r1(e,t,n,r,i,s,a,l,c){const u=c||Number.POSITIVE_INFINITY;let d=0;return f;function f(g){return g===60?(e.enter(r),e.enter(i),e.enter(s),e.consume(g),e.exit(s),p):g===null||g===32||g===41||Uu(g)?n(g):(e.enter(r),e.enter(a),e.enter(l),e.enter("chunkString",{contentType:"string"}),v(g))}function p(g){return g===62?(e.enter(s),e.consume(g),e.exit(s),e.exit(i),e.exit(r),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),h(g))}function h(g){return g===62?(e.exit("chunkString"),e.exit(l),p(g)):g===null||g===60||Ce(g)?n(g):(e.consume(g),g===92?m:h)}function m(g){return g===60||g===62||g===92?(e.consume(g),h):h(g)}function v(g){return!d&&(g===null||g===41||It(g))?(e.exit("chunkString"),e.exit(l),e.exit(a),e.exit(r),t(g)):d<u&&g===40?(e.consume(g),d++,v):g===41?(e.consume(g),d--,v):g===null||g===32||g===40||Uu(g)?n(g):(e.consume(g),g===92?j:v)}function j(g){return g===40||g===41||g===92?(e.consume(g),v):v(g)}}function i1(e,t,n,r,i,s){const a=this;let l=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(s),d}function d(h){return l>999||h===null||h===91||h===93&&!c||h===94&&!l&&"_hiddenFootnoteSupport"in a.parser.constructs?n(h):h===93?(e.exit(s),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):Ce(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),d):(e.enter("chunkString",{contentType:"string"}),f(h))}function f(h){return h===null||h===91||h===93||Ce(h)||l++>999?(e.exit("chunkString"),d(h)):(e.consume(h),c||(c=!Oe(h)),h===92?p:f)}function p(h){return h===91||h===92||h===93?(e.consume(h),l++,f):f(h)}}function o1(e,t,n,r,i,s){let a;return l;function l(p){return p===34||p===39||p===40?(e.enter(r),e.enter(i),e.consume(p),e.exit(i),a=p===40?41:p,c):n(p)}function c(p){return p===a?(e.enter(i),e.consume(p),e.exit(i),e.exit(r),t):(e.enter(s),u(p))}function u(p){return p===a?(e.exit(s),c(a)):p===null?n(p):Ce(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),Ve(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===a||p===null||Ce(p)?(e.exit("chunkString"),u(p)):(e.consume(p),p===92?f:d)}function f(p){return p===a||p===92?(e.consume(p),d):d(p)}}function zo(e,t){let n;return r;function r(i){return Ce(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):Oe(i)?Ve(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const QS={name:"definition",tokenize:ZS},XS={partial:!0,tokenize:eC};function ZS(e,t,n){const r=this;let i;return s;function s(h){return e.enter("definition"),a(h)}function a(h){return i1.call(r,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function l(h){return i=ki(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return It(h)?zo(e,u)(h):u(h)}function u(h){return r1(e,d,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function d(h){return e.attempt(XS,f,f)(h)}function f(h){return Oe(h)?Ve(e,p,"whitespace")(h):p(h)}function p(h){return h===null||Ce(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function eC(e,t,n){return r;function r(l){return It(l)?zo(e,i)(l):n(l)}function i(l){return o1(e,s,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function s(l){return Oe(l)?Ve(e,a,"whitespace")(l):a(l)}function a(l){return l===null||Ce(l)?t(l):n(l)}}const tC={name:"hardBreakEscape",tokenize:nC};function nC(e,t,n){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),i}function i(s){return Ce(s)?(e.exit("hardBreakEscape"),t(s)):n(s)}}const rC={name:"headingAtx",resolve:iC,tokenize:oC};function iC(e,t){let n=e.length-2,r=3,i,s;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},s={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Tn(e,r,n-r+1,[["enter",i,t],["enter",s,t],["exit",s,t],["exit",i,t]])),e}function oC(e,t,n){let r=0;return i;function i(d){return e.enter("atxHeading"),s(d)}function s(d){return e.enter("atxHeadingSequence"),a(d)}function a(d){return d===35&&r++<6?(e.consume(d),a):d===null||It(d)?(e.exit("atxHeadingSequence"),l(d)):n(d)}function l(d){return d===35?(e.enter("atxHeadingSequence"),c(d)):d===null||Ce(d)?(e.exit("atxHeading"),t(d)):Oe(d)?Ve(e,l,"whitespace")(d):(e.enter("atxHeadingText"),u(d))}function c(d){return d===35?(e.consume(d),c):(e.exit("atxHeadingSequence"),l(d))}function u(d){return d===null||d===35||It(d)?(e.exit("atxHeadingText"),l(d)):(e.consume(d),u)}}const sC=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],dm=["pre","script","style","textarea"],aC={concrete:!0,name:"htmlFlow",resolveTo:uC,tokenize:dC},lC={partial:!0,tokenize:fC},cC={partial:!0,tokenize:pC};function uC(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function dC(e,t,n){const r=this;let i,s,a,l,c;return u;function u(y){return d(y)}function d(y){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(y),f}function f(y){return y===33?(e.consume(y),p):y===47?(e.consume(y),s=!0,v):y===63?(e.consume(y),i=3,r.interrupt?t:b):_n(y)?(e.consume(y),a=String.fromCharCode(y),j):n(y)}function p(y){return y===45?(e.consume(y),i=2,h):y===91?(e.consume(y),i=5,l=0,m):_n(y)?(e.consume(y),i=4,r.interrupt?t:b):n(y)}function h(y){return y===45?(e.consume(y),r.interrupt?t:b):n(y)}function m(y){const S="CDATA[";return y===S.charCodeAt(l++)?(e.consume(y),l===S.length?r.interrupt?t:G:m):n(y)}function v(y){return _n(y)?(e.consume(y),a=String.fromCharCode(y),j):n(y)}function j(y){if(y===null||y===47||y===62||It(y)){const S=y===47,F=a.toLowerCase();return!S&&!s&&dm.includes(F)?(i=1,r.interrupt?t(y):G(y)):sC.includes(a.toLowerCase())?(i=6,S?(e.consume(y),g):r.interrupt?t(y):G(y)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(y):s?x(y):w(y))}return y===45||qt(y)?(e.consume(y),a+=String.fromCharCode(y),j):n(y)}function g(y){return y===62?(e.consume(y),r.interrupt?t:G):n(y)}function x(y){return Oe(y)?(e.consume(y),x):N(y)}function w(y){return y===47?(e.consume(y),N):y===58||y===95||_n(y)?(e.consume(y),_):Oe(y)?(e.consume(y),w):N(y)}function _(y){return y===45||y===46||y===58||y===95||qt(y)?(e.consume(y),_):z(y)}function z(y){return y===61?(e.consume(y),C):Oe(y)?(e.consume(y),z):w(y)}function C(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),c=y,R):Oe(y)?(e.consume(y),C):E(y)}function R(y){return y===c?(e.consume(y),c=null,U):y===null||Ce(y)?n(y):(e.consume(y),R)}function E(y){return y===null||y===34||y===39||y===47||y===60||y===61||y===62||y===96||It(y)?z(y):(e.consume(y),E)}function U(y){return y===47||y===62||Oe(y)?w(y):n(y)}function N(y){return y===62?(e.consume(y),$):n(y)}function $(y){return y===null||Ce(y)?G(y):Oe(y)?(e.consume(y),$):n(y)}function G(y){return y===45&&i===2?(e.consume(y),P):y===60&&i===1?(e.consume(y),M):y===62&&i===4?(e.consume(y),W):y===63&&i===3?(e.consume(y),b):y===93&&i===5?(e.consume(y),O):Ce(y)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(lC,H,Y)(y)):y===null||Ce(y)?(e.exit("htmlFlowData"),Y(y)):(e.consume(y),G)}function Y(y){return e.check(cC,A,H)(y)}function A(y){return e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),D}function D(y){return y===null||Ce(y)?Y(y):(e.enter("htmlFlowData"),G(y))}function P(y){return y===45?(e.consume(y),b):G(y)}function M(y){return y===47?(e.consume(y),a="",B):G(y)}function B(y){if(y===62){const S=a.toLowerCase();return dm.includes(S)?(e.consume(y),W):G(y)}return _n(y)&&a.length<8?(e.consume(y),a+=String.fromCharCode(y),B):G(y)}function O(y){return y===93?(e.consume(y),b):G(y)}function b(y){return y===62?(e.consume(y),W):y===45&&i===2?(e.consume(y),b):G(y)}function W(y){return y===null||Ce(y)?(e.exit("htmlFlowData"),H(y)):(e.consume(y),W)}function H(y){return e.exit("htmlFlow"),t(y)}}function pC(e,t,n){const r=this;return i;function i(a){return Ce(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),s):n(a)}function s(a){return r.parser.lazy[r.now().line]?n(a):t(a)}}function fC(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Cl,t,n)}}const hC={name:"htmlText",tokenize:mC};function mC(e,t,n){const r=this;let i,s,a;return l;function l(b){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(b),c}function c(b){return b===33?(e.consume(b),u):b===47?(e.consume(b),z):b===63?(e.consume(b),w):_n(b)?(e.consume(b),E):n(b)}function u(b){return b===45?(e.consume(b),d):b===91?(e.consume(b),s=0,m):_n(b)?(e.consume(b),x):n(b)}function d(b){return b===45?(e.consume(b),h):n(b)}function f(b){return b===null?n(b):b===45?(e.consume(b),p):Ce(b)?(a=f,M(b)):(e.consume(b),f)}function p(b){return b===45?(e.consume(b),h):f(b)}function h(b){return b===62?P(b):b===45?p(b):f(b)}function m(b){const W="CDATA[";return b===W.charCodeAt(s++)?(e.consume(b),s===W.length?v:m):n(b)}function v(b){return b===null?n(b):b===93?(e.consume(b),j):Ce(b)?(a=v,M(b)):(e.consume(b),v)}function j(b){return b===93?(e.consume(b),g):v(b)}function g(b){return b===62?P(b):b===93?(e.consume(b),g):v(b)}function x(b){return b===null||b===62?P(b):Ce(b)?(a=x,M(b)):(e.consume(b),x)}function w(b){return b===null?n(b):b===63?(e.consume(b),_):Ce(b)?(a=w,M(b)):(e.consume(b),w)}function _(b){return b===62?P(b):w(b)}function z(b){return _n(b)?(e.consume(b),C):n(b)}function C(b){return b===45||qt(b)?(e.consume(b),C):R(b)}function R(b){return Ce(b)?(a=R,M(b)):Oe(b)?(e.consume(b),R):P(b)}function E(b){return b===45||qt(b)?(e.consume(b),E):b===47||b===62||It(b)?U(b):n(b)}function U(b){return b===47?(e.consume(b),P):b===58||b===95||_n(b)?(e.consume(b),N):Ce(b)?(a=U,M(b)):Oe(b)?(e.consume(b),U):P(b)}function N(b){return b===45||b===46||b===58||b===95||qt(b)?(e.consume(b),N):$(b)}function $(b){return b===61?(e.consume(b),G):Ce(b)?(a=$,M(b)):Oe(b)?(e.consume(b),$):U(b)}function G(b){return b===null||b===60||b===61||b===62||b===96?n(b):b===34||b===39?(e.consume(b),i=b,Y):Ce(b)?(a=G,M(b)):Oe(b)?(e.consume(b),G):(e.consume(b),A)}function Y(b){return b===i?(e.consume(b),i=void 0,D):b===null?n(b):Ce(b)?(a=Y,M(b)):(e.consume(b),Y)}function A(b){return b===null||b===34||b===39||b===60||b===61||b===96?n(b):b===47||b===62||It(b)?U(b):(e.consume(b),A)}function D(b){return b===47||b===62||It(b)?U(b):n(b)}function P(b){return b===62?(e.consume(b),e.exit("htmlTextData"),e.exit("htmlText"),t):n(b)}function M(b){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),B}function B(b){return Oe(b)?Ve(e,O,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(b):O(b)}function O(b){return e.enter("htmlTextData"),a(b)}}const bp={name:"labelEnd",resolveAll:vC,resolveTo:bC,tokenize:wC},gC={tokenize:kC},xC={tokenize:jC},yC={tokenize:_C};function vC(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Tn(e,0,e.length,n),e}function bC(e,t){let n=e.length,r=0,i,s,a,l;for(;n--;)if(i=e[n][1],s){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(a){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(s=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(a=n);const c={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[s][1].start},end:{...e[a][1].end}},d={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[a-2][1].start}};return l=[["enter",c,t],["enter",u,t]],l=nn(l,e.slice(s+1,s+r+3)),l=nn(l,[["enter",d,t]]),l=nn(l,vp(t.parser.constructs.insideSpan.null,e.slice(s+r+4,a-3),t)),l=nn(l,[["exit",d,t],e[a-2],e[a-1],["exit",u,t]]),l=nn(l,e.slice(a+1)),l=nn(l,[["exit",c,t]]),Tn(e,s,e.length,l),e}function wC(e,t,n){const r=this;let i=r.events.length,s,a;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){s=r.events[i][1];break}return l;function l(p){return s?s._inactive?f(p):(a=r.parser.defined.includes(ki(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(p),e.exit("labelMarker"),e.exit("labelEnd"),c):n(p)}function c(p){return p===40?e.attempt(gC,d,a?d:f)(p):p===91?e.attempt(xC,d,a?u:f)(p):a?d(p):f(p)}function u(p){return e.attempt(yC,d,f)(p)}function d(p){return t(p)}function f(p){return s._balanced=!0,n(p)}}function kC(e,t,n){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return It(f)?zo(e,s)(f):s(f)}function s(f){return f===41?d(f):r1(e,a,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function a(f){return It(f)?zo(e,c)(f):d(f)}function l(f){return n(f)}function c(f){return f===34||f===39||f===40?o1(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):d(f)}function u(f){return It(f)?zo(e,d)(f):d(f)}function d(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),t):n(f)}}function jC(e,t,n){const r=this;return i;function i(l){return i1.call(r,e,s,a,"reference","referenceMarker","referenceString")(l)}function s(l){return r.parser.defined.includes(ki(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function a(l){return n(l)}}function _C(e,t,n){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),i}function i(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),t):n(s)}}const SC={name:"labelStartImage",resolveAll:bp.resolveAll,tokenize:CC};function CC(e,t,n){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),s}function s(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),a):n(l)}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const NC={name:"labelStartLink",resolveAll:bp.resolveAll,tokenize:EC};function EC(e,t,n){const r=this;return i;function i(a){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelLink"),s}function s(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const bc={name:"lineEnding",tokenize:zC};function zC(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Ve(e,t,"linePrefix")}}const da={name:"thematicBreak",tokenize:TC};function TC(e,t,n){let r=0,i;return s;function s(u){return e.enter("thematicBreak"),a(u)}function a(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||Ce(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),Oe(u)?Ve(e,l,"whitespace")(u):l(u))}}const Et={continuation:{tokenize:LC},exit:IC,name:"list",tokenize:PC},AC={partial:!0,tokenize:OC},MC={partial:!0,tokenize:RC};function PC(e,t,n){const r=this,i=r.events[r.events.length-1];let s=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,a=0;return l;function l(h){const m=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Vu(h)){if(r.containerState.type||(r.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(da,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return Vu(h)&&++a<10?(e.consume(h),c):(!r.interrupt||a<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Cl,r.interrupt?n:d,e.attempt(AC,p,f))}function d(h){return r.containerState.initialBlankLine=!0,s++,p(h)}function f(h){return Oe(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),p):n(h)}function p(h){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function LC(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Cl,i,s);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Ve(e,t,"listItemIndent",r.containerState.size+1)(l)}function s(l){return r.containerState.furtherBlankLines||!Oe(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,a(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(MC,t,a)(l))}function a(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,Ve(e,e.attempt(Et,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function RC(e,t,n){const r=this;return Ve(e,i,"listItemIndent",r.containerState.size+1);function i(s){const a=r.events[r.events.length-1];return a&&a[1].type==="listItemIndent"&&a[2].sliceSerialize(a[1],!0).length===r.containerState.size?t(s):n(s)}}function IC(e){e.exit(this.containerState.type)}function OC(e,t,n){const r=this;return Ve(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(s){const a=r.events[r.events.length-1];return!Oe(s)&&a&&a[1].type==="listItemPrefixWhitespace"?t(s):n(s)}}const pm={name:"setextUnderline",resolveTo:$C,tokenize:DC};function $C(e,t){let n=e.length,r,i,s;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!s&&e[n][1].type==="definition"&&(s=n);const a={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",s?(e.splice(i,0,["enter",a,t]),e.splice(s+1,0,["exit",e[r][1],t]),e[r][1].end={...e[s][1].end}):e[r][1]=a,e.push(["exit",a,t]),e}function DC(e,t,n){const r=this;let i;return s;function s(u){let d=r.events.length,f;for(;d--;)if(r.events[d][1].type!=="lineEnding"&&r.events[d][1].type!=="linePrefix"&&r.events[d][1].type!=="content"){f=r.events[d][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=u,a(u)):n(u)}function a(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),Oe(u)?Ve(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||Ce(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const FC={tokenize:BC};function BC(e){const t=this,n=e.attempt(Cl,r,e.attempt(this.parser.constructs.flowInitial,i,Ve(e,e.attempt(this.parser.constructs.flow,i,e.attempt(qS,i)),"linePrefix")));return n;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const UC={resolveAll:a1()},VC=s1("string"),WC=s1("text");function s1(e){return{resolveAll:a1(e==="text"?HC:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],s=n.attempt(i,a,l);return a;function a(d){return u(d)?s(d):l(d)}function l(d){if(d===null){n.consume(d);return}return n.enter("data"),n.consume(d),c}function c(d){return u(d)?(n.exit("data"),s(d)):(n.consume(d),c)}function u(d){if(d===null)return!0;const f=i[d];let p=-1;if(f)for(;++p<f.length;){const h=f[p];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function a1(e){return t;function t(n,r){let i=-1,s;for(;++i<=n.length;)s===void 0?n[i]&&n[i][1].type==="data"&&(s=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==s+2&&(n[s][1].end=n[i-1][1].end,n.splice(s+2,i-s-2),i=s+2),s=void 0);return e?e(n,r):n}}function HC(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let s=i.length,a=-1,l=0,c;for(;s--;){const u=i[s];if(typeof u=="string"){for(a=u.length;u.charCodeAt(a-1)===32;)l++,a--;if(a)break;a=-1}else if(u===-2)c=!0,l++;else if(u!==-1){s++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const u={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?a:r.start._bufferIndex+a,_index:r.start._index+s,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const qC={42:Et,43:Et,45:Et,48:Et,49:Et,50:Et,51:Et,52:Et,53:Et,54:Et,55:Et,56:Et,57:Et,62:Zv},JC={91:QS},GC={[-2]:vc,[-1]:vc,32:vc},KC={35:rC,42:da,45:[pm,da],60:aC,61:pm,95:da,96:um,126:um},YC={38:t1,92:e1},QC={[-5]:bc,[-4]:bc,[-3]:bc,33:SC,38:t1,42:Wu,60:[NS,hC],91:NC,92:[tC,e1],93:bp,95:Wu,96:FS},XC={null:[Wu,UC]},ZC={null:[42,95]},eN={null:[]},tN=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:ZC,contentInitial:JC,disable:eN,document:qC,flow:KC,flowInitial:GC,insideSpan:XC,string:YC,text:QC},Symbol.toStringTag,{value:"Module"}));function nN(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},s=[];let a=[],l=[];const c={attempt:R(z),check:R(C),consume:x,enter:w,exit:_,interrupt:R(C,{interrupt:!0})},u={code:null,containerState:{},defineSkip:v,events:[],now:m,parser:e,previous:null,sliceSerialize:p,sliceStream:h,write:f};let d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function f($){return a=nn(a,$),j(),a[a.length-1]!==null?[]:(E(t,0),u.events=vp(s,u.events,u),u.events)}function p($,G){return iN(h($),G)}function h($){return rN(a,$)}function m(){const{_bufferIndex:$,_index:G,line:Y,column:A,offset:D}=r;return{_bufferIndex:$,_index:G,line:Y,column:A,offset:D}}function v($){i[$.line]=$.column,N()}function j(){let $;for(;r._index<a.length;){const G=a[r._index];if(typeof G=="string")for($=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===$&&r._bufferIndex<G.length;)g(G.charCodeAt(r._bufferIndex));else g(G)}}function g($){d=d($)}function x($){Ce($)?(r.line++,r.column=1,r.offset+=$===-3?2:1,N()):$!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===a[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=$}function w($,G){const Y=G||{};return Y.type=$,Y.start=m(),u.events.push(["enter",Y,u]),l.push(Y),Y}function _($){const G=l.pop();return G.end=m(),u.events.push(["exit",G,u]),G}function z($,G){E($,G.from)}function C($,G){G.restore()}function R($,G){return Y;function Y(A,D,P){let M,B,O,b;return Array.isArray(A)?H(A):"tokenize"in A?H([A]):W(A);function W(te){return ae;function ae(ye){const ee=ye!==null&&te[ye],le=ye!==null&&te.null,be=[...Array.isArray(ee)?ee:ee?[ee]:[],...Array.isArray(le)?le:le?[le]:[]];return H(be)(ye)}}function H(te){return M=te,B=0,te.length===0?P:y(te[B])}function y(te){return ae;function ae(ye){return b=U(),O=te,te.partial||(u.currentConstruct=te),te.name&&u.parser.constructs.disable.null.includes(te.name)?F():te.tokenize.call(G?Object.assign(Object.create(u),G):u,c,S,F)(ye)}}function S(te){return $(O,b),D}function F(te){return b.restore(),++B<M.length?y(M[B]):P}}}function E($,G){$.resolveAll&&!s.includes($)&&s.push($),$.resolve&&Tn(u.events,G,u.events.length-G,$.resolve(u.events.slice(G),u)),$.resolveTo&&(u.events=$.resolveTo(u.events,u))}function U(){const $=m(),G=u.previous,Y=u.currentConstruct,A=u.events.length,D=Array.from(l);return{from:A,restore:P};function P(){r=$,u.previous=G,u.currentConstruct=Y,u.events.length=A,l=D,N()}}function N(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function rN(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,s=t.end._bufferIndex;let a;if(n===i)a=[e[n].slice(r,s)];else{if(a=e.slice(n,i),r>-1){const l=a[0];typeof l=="string"?a[0]=l.slice(r):a.shift()}s>0&&a.push(e[i].slice(0,s))}return a}function iN(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const s=e[n];let a;if(typeof s=="string")a=s;else switch(s){case-5:{a="\r";break}case-4:{a=`
`;break}case-3:{a=`\r
`;break}case-2:{a=t?" ":"	";break}case-1:{if(!t&&i)continue;a=" ";break}default:a=String.fromCharCode(s)}i=s===-2,r.push(a)}return r.join("")}function oN(e){const r={constructs:pS([tN,...(e||{}).extensions||[]]),content:i(bS),defined:[],document:i(kS),flow:i(FC),lazy:{},string:i(VC),text:i(WC)};return r;function i(s){return a;function a(l){return nN(r,s,l)}}}function sN(e){for(;!n1(e););return e}const fm=/[\0\t\n\r]/g;function aN(){let e=1,t="",n=!0,r;return i;function i(s,a,l){const c=[];let u,d,f,p,h;for(s=t+(typeof s=="string"?s.toString():new TextDecoder(a||void 0).decode(s)),f=0,t="",n&&(s.charCodeAt(0)===65279&&f++,n=void 0);f<s.length;){if(fm.lastIndex=f,u=fm.exec(s),p=u&&u.index!==void 0?u.index:s.length,h=s.charCodeAt(p),!u){t=s.slice(f);break}if(h===10&&f===p&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),f<p&&(c.push(s.slice(f,p)),e+=p-f),h){case 0:{c.push(65533),e++;break}case 9:{for(d=Math.ceil(e/4)*4,c.push(-2);e++<d;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}f=p+1}return l&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const lN=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function cN(e){return e.replace(lN,uN)}function uN(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),s=i===120||i===88;return Xv(n.slice(s?2:1),s?16:10)}return yp(n)||e}const l1={}.hasOwnProperty;function dN(e,t,n){return typeof t!="string"&&(n=t,t=void 0),pN(n)(sN(oN(n).document().write(aN()(e,t,!0))))}function pN(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Q),autolinkProtocol:U,autolinkEmail:U,atxHeading:s(X),blockQuote:s(le),characterEscape:U,characterReference:U,codeFenced:s(be),codeFencedFenceInfo:a,codeFencedFenceMeta:a,codeIndented:s(be,a),codeText:s(Se,a),codeTextData:U,data:U,codeFlowValue:U,definition:s(me),definitionDestinationString:a,definitionLabelString:a,definitionTitleString:a,emphasis:s(Ne),hardBreakEscape:s(he),hardBreakTrailing:s(he),htmlFlow:s(Z,a),htmlFlowData:U,htmlText:s(Z,a),htmlTextData:U,image:s(I),label:a,link:s(Q),listItem:s(V),listItemValue:p,listOrdered:s(T,f),listUnordered:s(T),paragraph:s(L),reference:y,referenceString:a,resourceDestinationString:a,resourceTitleString:a,setextHeading:s(X),strong:s(J),thematicBreak:s(pe)},exit:{atxHeading:c(),atxHeadingSequence:z,autolink:c(),autolinkEmail:ee,autolinkProtocol:ye,blockQuote:c(),characterEscapeValue:N,characterReferenceMarkerHexadecimal:F,characterReferenceMarkerNumeric:F,characterReferenceValue:te,characterReference:ae,codeFenced:c(j),codeFencedFence:v,codeFencedFenceInfo:h,codeFencedFenceMeta:m,codeFlowValue:N,codeIndented:c(g),codeText:c(D),codeTextData:N,data:N,definition:c(),definitionDestinationString:_,definitionLabelString:x,definitionTitleString:w,emphasis:c(),hardBreakEscape:c(G),hardBreakTrailing:c(G),htmlFlow:c(Y),htmlFlowData:N,htmlText:c(A),htmlTextData:N,image:c(M),label:O,labelText:B,lineEnding:$,link:c(P),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:S,resourceDestinationString:b,resourceTitleString:W,resource:H,setextHeading:c(E),setextHeadingLineSequence:R,setextHeadingText:C,strong:c(),thematicBreak:c()}};c1(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(K){let re={type:"root",children:[]};const we={stack:[re],tokenStack:[],config:t,enter:l,exit:u,buffer:a,resume:d,data:n},_e=[];let ke=-1;for(;++ke<K.length;)if(K[ke][1].type==="listOrdered"||K[ke][1].type==="listUnordered")if(K[ke][0]==="enter")_e.push(ke);else{const Pe=_e.pop();ke=i(K,Pe,ke)}for(ke=-1;++ke<K.length;){const Pe=t[K[ke][0]];l1.call(Pe,K[ke][1].type)&&Pe[K[ke][1].type].call(Object.assign({sliceSerialize:K[ke][2].sliceSerialize},we),K[ke][1])}if(we.tokenStack.length>0){const Pe=we.tokenStack[we.tokenStack.length-1];(Pe[1]||hm).call(we,void 0,Pe[0])}for(re.position={start:Kn(K.length>0?K[0][1].start:{line:1,column:1,offset:0}),end:Kn(K.length>0?K[K.length-2][1].end:{line:1,column:1,offset:0})},ke=-1;++ke<t.transforms.length;)re=t.transforms[ke](re)||re;return re}function i(K,re,we){let _e=re-1,ke=-1,Pe=!1,Xe,ot,ce,Ee;for(;++_e<=we;){const ue=K[_e];switch(ue[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{ue[0]==="enter"?ke++:ke--,Ee=void 0;break}case"lineEndingBlank":{ue[0]==="enter"&&(Xe&&!Ee&&!ke&&!ce&&(ce=_e),Ee=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ee=void 0}if(!ke&&ue[0]==="enter"&&ue[1].type==="listItemPrefix"||ke===-1&&ue[0]==="exit"&&(ue[1].type==="listUnordered"||ue[1].type==="listOrdered")){if(Xe){let ze=_e;for(ot=void 0;ze--;){const je=K[ze];if(je[1].type==="lineEnding"||je[1].type==="lineEndingBlank"){if(je[0]==="exit")continue;ot&&(K[ot][1].type="lineEndingBlank",Pe=!0),je[1].type="lineEnding",ot=ze}else if(!(je[1].type==="linePrefix"||je[1].type==="blockQuotePrefix"||je[1].type==="blockQuotePrefixWhitespace"||je[1].type==="blockQuoteMarker"||je[1].type==="listItemIndent"))break}ce&&(!ot||ce<ot)&&(Xe._spread=!0),Xe.end=Object.assign({},ot?K[ot][1].start:ue[1].end),K.splice(ot||_e,0,["exit",Xe,ue[2]]),_e++,we++}if(ue[1].type==="listItemPrefix"){const ze={type:"listItem",_spread:!1,start:Object.assign({},ue[1].start),end:void 0};Xe=ze,K.splice(_e,0,["enter",ze,ue[2]]),_e++,we++,ce=void 0,Ee=!0}}}return K[re][1]._spread=Pe,we}function s(K,re){return we;function we(_e){l.call(this,K(_e),_e),re&&re.call(this,_e)}}function a(){this.stack.push({type:"fragment",children:[]})}function l(K,re,we){this.stack[this.stack.length-1].children.push(K),this.stack.push(K),this.tokenStack.push([re,we||void 0]),K.position={start:Kn(re.start),end:void 0}}function c(K){return re;function re(we){K&&K.call(this,we),u.call(this,we)}}function u(K,re){const we=this.stack.pop(),_e=this.tokenStack.pop();if(_e)_e[0].type!==K.type&&(re?re.call(this,K,_e[0]):(_e[1]||hm).call(this,K,_e[0]));else throw new Error("Cannot close `"+K.type+"` ("+Eo({start:K.start,end:K.end})+"): it’s not open");we.position.end=Kn(K.end)}function d(){return uS(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function p(K){if(this.data.expectingFirstListItemValue){const re=this.stack[this.stack.length-2];re.start=Number.parseInt(this.sliceSerialize(K),10),this.data.expectingFirstListItemValue=void 0}}function h(){const K=this.resume(),re=this.stack[this.stack.length-1];re.lang=K}function m(){const K=this.resume(),re=this.stack[this.stack.length-1];re.meta=K}function v(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function j(){const K=this.resume(),re=this.stack[this.stack.length-1];re.value=K.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const K=this.resume(),re=this.stack[this.stack.length-1];re.value=K.replace(/(\r?\n|\r)$/g,"")}function x(K){const re=this.resume(),we=this.stack[this.stack.length-1];we.label=re,we.identifier=ki(this.sliceSerialize(K)).toLowerCase()}function w(){const K=this.resume(),re=this.stack[this.stack.length-1];re.title=K}function _(){const K=this.resume(),re=this.stack[this.stack.length-1];re.url=K}function z(K){const re=this.stack[this.stack.length-1];if(!re.depth){const we=this.sliceSerialize(K).length;re.depth=we}}function C(){this.data.setextHeadingSlurpLineEnding=!0}function R(K){const re=this.stack[this.stack.length-1];re.depth=this.sliceSerialize(K).codePointAt(0)===61?1:2}function E(){this.data.setextHeadingSlurpLineEnding=void 0}function U(K){const we=this.stack[this.stack.length-1].children;let _e=we[we.length-1];(!_e||_e.type!=="text")&&(_e=ne(),_e.position={start:Kn(K.start),end:void 0},we.push(_e)),this.stack.push(_e)}function N(K){const re=this.stack.pop();re.value+=this.sliceSerialize(K),re.position.end=Kn(K.end)}function $(K){const re=this.stack[this.stack.length-1];if(this.data.atHardBreak){const we=re.children[re.children.length-1];we.position.end=Kn(K.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(re.type)&&(U.call(this,K),N.call(this,K))}function G(){this.data.atHardBreak=!0}function Y(){const K=this.resume(),re=this.stack[this.stack.length-1];re.value=K}function A(){const K=this.resume(),re=this.stack[this.stack.length-1];re.value=K}function D(){const K=this.resume(),re=this.stack[this.stack.length-1];re.value=K}function P(){const K=this.stack[this.stack.length-1];if(this.data.inReference){const re=this.data.referenceType||"shortcut";K.type+="Reference",K.referenceType=re,delete K.url,delete K.title}else delete K.identifier,delete K.label;this.data.referenceType=void 0}function M(){const K=this.stack[this.stack.length-1];if(this.data.inReference){const re=this.data.referenceType||"shortcut";K.type+="Reference",K.referenceType=re,delete K.url,delete K.title}else delete K.identifier,delete K.label;this.data.referenceType=void 0}function B(K){const re=this.sliceSerialize(K),we=this.stack[this.stack.length-2];we.label=cN(re),we.identifier=ki(re).toLowerCase()}function O(){const K=this.stack[this.stack.length-1],re=this.resume(),we=this.stack[this.stack.length-1];if(this.data.inReference=!0,we.type==="link"){const _e=K.children;we.children=_e}else we.alt=re}function b(){const K=this.resume(),re=this.stack[this.stack.length-1];re.url=K}function W(){const K=this.resume(),re=this.stack[this.stack.length-1];re.title=K}function H(){this.data.inReference=void 0}function y(){this.data.referenceType="collapsed"}function S(K){const re=this.resume(),we=this.stack[this.stack.length-1];we.label=re,we.identifier=ki(this.sliceSerialize(K)).toLowerCase(),this.data.referenceType="full"}function F(K){this.data.characterReferenceType=K.type}function te(K){const re=this.sliceSerialize(K),we=this.data.characterReferenceType;let _e;we?(_e=Xv(re,we==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):_e=yp(re);const ke=this.stack[this.stack.length-1];ke.value+=_e}function ae(K){const re=this.stack.pop();re.position.end=Kn(K.end)}function ye(K){N.call(this,K);const re=this.stack[this.stack.length-1];re.url=this.sliceSerialize(K)}function ee(K){N.call(this,K);const re=this.stack[this.stack.length-1];re.url="mailto:"+this.sliceSerialize(K)}function le(){return{type:"blockquote",children:[]}}function be(){return{type:"code",lang:null,meta:null,value:""}}function Se(){return{type:"inlineCode",value:""}}function me(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ne(){return{type:"emphasis",children:[]}}function X(){return{type:"heading",depth:0,children:[]}}function he(){return{type:"break"}}function Z(){return{type:"html",value:""}}function I(){return{type:"image",title:null,url:"",alt:null}}function Q(){return{type:"link",title:null,url:"",children:[]}}function T(K){return{type:"list",ordered:K.type==="listOrdered",start:null,spread:K._spread,children:[]}}function V(K){return{type:"listItem",spread:K._spread,checked:null,children:[]}}function L(){return{type:"paragraph",children:[]}}function J(){return{type:"strong",children:[]}}function ne(){return{type:"text",value:""}}function pe(){return{type:"thematicBreak"}}}function Kn(e){return{line:e.line,column:e.column,offset:e.offset}}function c1(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?c1(e,r):fN(e,r)}}function fN(e,t){let n;for(n in t)if(l1.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function hm(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Eo({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Eo({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Eo({start:t.start,end:t.end})+") is still open")}function hN(e){const t=this;t.parser=n;function n(r){return dN(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function mN(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function gN(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function xN(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(s.data={meta:t.meta}),e.patch(t,s),s=e.applyData(t,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(t,s),s}function yN(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function vN(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function bN(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Wi(r.toLowerCase()),s=e.footnoteOrder.indexOf(r);let a,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),a=e.footnoteOrder.length):a=s+1,l+=1,e.footnoteCounts.set(r,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(a)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function wN(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function kN(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function u1(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),s=i[0];s&&s.type==="text"?s.value="["+s.value:i.unshift({type:"text",value:"["});const a=i[i.length-1];return a&&a.type==="text"?a.value+=r:i.push({type:"text",value:r}),i}function jN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return u1(e,t);const i={src:Wi(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,s),e.applyData(t,s)}function _N(e,t){const n={src:Wi(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function SN(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function CN(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return u1(e,t);const i={href:Wi(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const s={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function NN(e,t){const n={href:Wi(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function EN(e,t,n){const r=e.all(t),i=n?zN(n):d1(t),s={},a=[];if(typeof t.checked=="boolean"){const d=r[0];let f;d&&d.type==="element"&&d.tagName==="p"?f=d:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const d=r[l];(i||l!==0||d.type!=="element"||d.tagName!=="p")&&a.push({type:"text",value:`
`}),d.type==="element"&&d.tagName==="p"&&!i?a.push(...d.children):a.push(d)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&a.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:s,children:a};return e.patch(t,u),e.applyData(t,u)}function zN(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=d1(n[r])}return t}function d1(e){const t=e.spread;return t??e.children.length>1}function TN(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const a=r[i];if(a.type==="element"&&a.tagName==="li"&&a.properties&&Array.isArray(a.properties.className)&&a.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const s={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,s),e.applyData(t,s)}function AN(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function MN(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function PN(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function LN(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const a={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],a),i.push(a)}if(n.length>0){const a={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=hp(t.children[1]),c=Hv(t.children[t.children.length-1]);l&&c&&(a.position={start:l,end:c}),i.push(a)}const s={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,s),e.applyData(t,s)}function RN(e,t,n){const r=n?n.children:void 0,s=(r?r.indexOf(t):1)===0?"th":"td",a=n&&n.type==="table"?n.align:void 0,l=a?a.length:t.children.length;let c=-1;const u=[];for(;++c<l;){const f=t.children[c],p={},h=a?a[c]:void 0;h&&(p.align=h);let m={type:"element",tagName:s,properties:p,children:[]};f&&(m.children=e.all(f),e.patch(f,m),m=e.applyData(f,m)),u.push(m)}const d={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,d),e.applyData(t,d)}function IN(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const mm=9,gm=32;function ON(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const s=[];for(;r;)s.push(xm(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return s.push(xm(t.slice(i),i>0,!1)),s.join("")}function xm(e,t,n){let r=0,i=e.length;if(t){let s=e.codePointAt(r);for(;s===mm||s===gm;)r++,s=e.codePointAt(r)}if(n){let s=e.codePointAt(i-1);for(;s===mm||s===gm;)i--,s=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function $N(e,t){const n={type:"text",value:ON(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function DN(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const FN={blockquote:mN,break:gN,code:xN,delete:yN,emphasis:vN,footnoteReference:bN,heading:wN,html:kN,imageReference:jN,image:_N,inlineCode:SN,linkReference:CN,link:NN,listItem:EN,list:TN,paragraph:AN,root:MN,strong:PN,table:LN,tableCell:IN,tableRow:RN,text:$N,thematicBreak:DN,toml:Bs,yaml:Bs,definition:Bs,footnoteDefinition:Bs};function Bs(){}const p1=-1,Nl=0,To=1,Ja=2,wp=3,kp=4,jp=5,_p=6,f1=7,h1=8,ym=typeof self=="object"?self:globalThis,BN=(e,t)=>{const n=(i,s)=>(e.set(s,i),i),r=i=>{if(e.has(i))return e.get(i);const[s,a]=t[i];switch(s){case Nl:case p1:return n(a,i);case To:{const l=n([],i);for(const c of a)l.push(r(c));return l}case Ja:{const l=n({},i);for(const[c,u]of a)l[r(c)]=r(u);return l}case wp:return n(new Date(a),i);case kp:{const{source:l,flags:c}=a;return n(new RegExp(l,c),i)}case jp:{const l=n(new Map,i);for(const[c,u]of a)l.set(r(c),r(u));return l}case _p:{const l=n(new Set,i);for(const c of a)l.add(r(c));return l}case f1:{const{name:l,message:c}=a;return n(new ym[l](c),i)}case h1:return n(BigInt(a),i);case"BigInt":return n(Object(BigInt(a)),i);case"ArrayBuffer":return n(new Uint8Array(a).buffer,a);case"DataView":{const{buffer:l}=new Uint8Array(a);return n(new DataView(l),a)}}return n(new ym[s](a),i)};return r},vm=e=>BN(new Map,e)(0),Qr="",{toString:UN}={},{keys:VN}=Object,oo=e=>{const t=typeof e;if(t!=="object"||!e)return[Nl,t];const n=UN.call(e).slice(8,-1);switch(n){case"Array":return[To,Qr];case"Object":return[Ja,Qr];case"Date":return[wp,Qr];case"RegExp":return[kp,Qr];case"Map":return[jp,Qr];case"Set":return[_p,Qr];case"DataView":return[To,n]}return n.includes("Array")?[To,n]:n.includes("Error")?[f1,n]:[Ja,n]},Us=([e,t])=>e===Nl&&(t==="function"||t==="symbol"),WN=(e,t,n,r)=>{const i=(a,l)=>{const c=r.push(a)-1;return n.set(l,c),c},s=a=>{if(n.has(a))return n.get(a);let[l,c]=oo(a);switch(l){case Nl:{let d=a;switch(c){case"bigint":l=h1,d=a.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);d=null;break;case"undefined":return i([p1],a)}return i([l,d],a)}case To:{if(c){let p=a;return c==="DataView"?p=new Uint8Array(a.buffer):c==="ArrayBuffer"&&(p=new Uint8Array(a)),i([c,[...p]],a)}const d=[],f=i([l,d],a);for(const p of a)d.push(s(p));return f}case Ja:{if(c)switch(c){case"BigInt":return i([c,a.toString()],a);case"Boolean":case"Number":case"String":return i([c,a.valueOf()],a)}if(t&&"toJSON"in a)return s(a.toJSON());const d=[],f=i([l,d],a);for(const p of VN(a))(e||!Us(oo(a[p])))&&d.push([s(p),s(a[p])]);return f}case wp:return i([l,a.toISOString()],a);case kp:{const{source:d,flags:f}=a;return i([l,{source:d,flags:f}],a)}case jp:{const d=[],f=i([l,d],a);for(const[p,h]of a)(e||!(Us(oo(p))||Us(oo(h))))&&d.push([s(p),s(h)]);return f}case _p:{const d=[],f=i([l,d],a);for(const p of a)(e||!Us(oo(p)))&&d.push(s(p));return f}}const{message:u}=a;return i([l,{name:c,message:u}],a)};return s},bm=(e,{json:t,lossy:n}={})=>{const r=[];return WN(!(t||n),!!t,new Map,r)(e),r},Ga=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?vm(bm(e,t)):structuredClone(e):(e,t)=>vm(bm(e,t));function HN(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function qN(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function JN(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||HN,r=e.options.footnoteBackLabel||qN,i=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",a=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const d=e.all(u),f=String(u.identifier).toUpperCase(),p=Wi(f.toLowerCase());let h=0;const m=[],v=e.footnoteCounts.get(f);for(;v!==void 0&&++h<=v;){m.length>0&&m.push({type:"text",value:" "});let x=typeof n=="string"?n:n(c,h);typeof x=="string"&&(x={type:"text",value:x}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+p+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(x)?x:[x]})}const j=d[d.length-1];if(j&&j.type==="element"&&j.tagName==="p"){const x=j.children[j.children.length-1];x&&x.type==="text"?x.value+=" ":j.children.push({type:"text",value:" "}),j.children.push(...m)}else d.push(...m);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+p},children:e.wrap(d,!0)};e.patch(u,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ga(a),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const m1=function(e){if(e==null)return QN;if(typeof e=="function")return El(e);if(typeof e=="object")return Array.isArray(e)?GN(e):KN(e);if(typeof e=="string")return YN(e);throw new Error("Expected function, string, or object as test")};function GN(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=m1(e[n]);return El(r);function r(...i){let s=-1;for(;++s<t.length;)if(t[s].apply(this,i))return!0;return!1}}function KN(e){const t=e;return El(n);function n(r){const i=r;let s;for(s in e)if(i[s]!==t[s])return!1;return!0}}function YN(e){return El(t);function t(n){return n&&n.type===e}}function El(e){return t;function t(n,r,i){return!!(XN(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function QN(){return!0}function XN(e){return e!==null&&typeof e=="object"&&"type"in e}const g1=[],ZN=!0,wm=!1,e4="skip";function t4(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const s=m1(i),a=r?-1:1;l(e,void 0,[])();function l(c,u,d){const f=c&&typeof c=="object"?c:{};if(typeof f.type=="string"){const h=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(p,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return p;function p(){let h=g1,m,v,j;if((!t||s(c,u,d[d.length-1]||void 0))&&(h=n4(n(c,d)),h[0]===wm))return h;if("children"in c&&c.children){const g=c;if(g.children&&h[0]!==e4)for(v=(r?g.children.length:-1)+a,j=d.concat(g);v>-1&&v<g.children.length;){const x=g.children[v];if(m=l(x,v,j)(),m[0]===wm)return m;v=typeof m[1]=="number"?m[1]:v+a}}return h}}}function n4(e){return Array.isArray(e)?e:typeof e=="number"?[ZN,e]:e==null?g1:[e]}function x1(e,t,n,r){let i,s,a;typeof t=="function"&&typeof n!="function"?(s=void 0,a=t,i=n):(s=t,a=n,i=r),t4(e,s,l,i);function l(c,u){const d=u[u.length-1],f=d?d.children.indexOf(c):void 0;return a(c,f,d)}}const Hu={}.hasOwnProperty,r4={};function i4(e,t){const n=t||r4,r=new Map,i=new Map,s=new Map,a={...FN,...n.handlers},l={all:u,applyData:s4,definitionById:r,footnoteById:i,footnoteCounts:s,footnoteOrder:[],handlers:a,one:c,options:n,patch:o4,wrap:l4};return x1(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){const f=d.type==="definition"?r:i,p=String(d.identifier).toUpperCase();f.has(p)||f.set(p,d)}}),l;function c(d,f){const p=d.type,h=l.handlers[p];if(Hu.call(l.handlers,p)&&h)return h(l,d,f);if(l.options.passThrough&&l.options.passThrough.includes(p)){if("children"in d){const{children:v,...j}=d,g=Ga(j);return g.children=l.all(d),g}return Ga(d)}return(l.options.unknownHandler||a4)(l,d,f)}function u(d){const f=[];if("children"in d){const p=d.children;let h=-1;for(;++h<p.length;){const m=l.one(p[h],d);if(m){if(h&&p[h-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=km(m.value)),!Array.isArray(m)&&m.type==="element")){const v=m.children[0];v&&v.type==="text"&&(v.value=km(v.value))}Array.isArray(m)?f.push(...m):f.push(m)}}}return f}}function o4(e,t){e.position&&(t.position=U2(e))}function s4(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,s=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const a="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:a}}n.type==="element"&&s&&Object.assign(n.properties,Ga(s)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function a4(e,t){const n=t.data||{},r="value"in t&&!(Hu.call(n,"hProperties")||Hu.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function l4(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function km(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function jm(e,t){const n=i4(e,t),r=n.one(e,void 0),i=JN(n),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&s.children.push({type:"text",value:`
`},i),s}function c4(e,t){return e&&"run"in e?async function(n,r){const i=jm(n,{file:r,...t});await e.run(i,r)}:function(n,r){return jm(n,{file:r,...e||t})}}function _m(e){if(e)throw e}var pa=Object.prototype.hasOwnProperty,y1=Object.prototype.toString,Sm=Object.defineProperty,Cm=Object.getOwnPropertyDescriptor,Nm=function(t){return typeof Array.isArray=="function"?Array.isArray(t):y1.call(t)==="[object Array]"},Em=function(t){if(!t||y1.call(t)!=="[object Object]")return!1;var n=pa.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&pa.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||pa.call(t,i)},zm=function(t,n){Sm&&n.name==="__proto__"?Sm(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Tm=function(t,n){if(n==="__proto__")if(pa.call(t,n)){if(Cm)return Cm(t,n).value}else return;return t[n]},u4=function e(){var t,n,r,i,s,a,l=arguments[0],c=1,u=arguments.length,d=!1;for(typeof l=="boolean"&&(d=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=Tm(l,n),i=Tm(t,n),l!==i&&(d&&i&&(Em(i)||(s=Nm(i)))?(s?(s=!1,a=r&&Nm(r)?r:[]):a=r&&Em(r)?r:{},zm(l,{name:n,newValue:e(d,a,i)})):typeof i<"u"&&zm(l,{name:n,newValue:i}));return l};const wc=rl(u4);function qu(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function d4(){const e=[],t={run:n,use:r};return t;function n(...i){let s=-1;const a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);l(null,...i);function l(c,...u){const d=e[++s];let f=-1;if(c){a(c);return}for(;++f<i.length;)(u[f]===null||u[f]===void 0)&&(u[f]=i[f]);i=u,d?p4(d,l)(...u):a(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function p4(e,t){let n;return r;function r(...a){const l=e.length>a.length;let c;l&&a.push(i);try{c=e.apply(this,a)}catch(u){const d=u;if(l&&n)throw d;return i(d)}l||(c&&c.then&&typeof c.then=="function"?c.then(s,i):c instanceof Error?i(c):s(c))}function i(a,...l){n||(n=!0,t(a,...l))}function s(a){i(null,a)}}const kn={basename:f4,dirname:h4,extname:m4,join:g4,sep:"/"};function f4(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');hs(e);let n=0,r=-1,i=e.length,s;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let a=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(s){n=i+1;break}}else a<0&&(s=!0,a=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(r=i):(l=-1,r=a));return n===r?r=a:r<0&&(r=e.length),e.slice(n,r)}function h4(e){if(hs(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function m4(e){hs(e);let t=e.length,n=-1,r=0,i=-1,s=0,a;for(;t--;){const l=e.codePointAt(t);if(l===47){if(a){r=t+1;break}continue}n<0&&(a=!0,n=t+1),l===46?i<0?i=t:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function g4(...e){let t=-1,n;for(;++t<e.length;)hs(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":x4(n)}function x4(e){hs(e);const t=e.codePointAt(0)===47;let n=y4(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function y4(e,t){let n="",r=0,i=-1,s=0,a=-1,l,c;for(;++a<=e.length;){if(a<e.length)l=e.codePointAt(a);else{if(l===47)break;l=47}if(l===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=a,s=0;continue}}else if(n.length>0){n="",r=0,i=a,s=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,a):n=e.slice(i+1,a),r=a-i-1;i=a,s=0}else l===46&&s>-1?s++:s=-1}return n}function hs(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const v4={cwd:b4};function b4(){return"/"}function Ju(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function w4(e){if(typeof e=="string")e=new URL(e);else if(!Ju(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return k4(e)}function k4(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const kc=["history","path","basename","stem","extname","dirname"];class v1{constructor(t){let n;t?Ju(t)?n={path:t}:typeof t=="string"||j4(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":v4.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<kc.length;){const s=kc[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)kc.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?kn.basename(this.path):void 0}set basename(t){_c(t,"basename"),jc(t,"basename"),this.path=kn.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?kn.dirname(this.path):void 0}set dirname(t){Am(this.basename,"dirname"),this.path=kn.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?kn.extname(this.path):void 0}set extname(t){if(jc(t,"extname"),Am(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=kn.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Ju(t)&&(t=w4(t)),_c(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?kn.basename(this.path,this.extname):void 0}set stem(t){_c(t,"stem"),jc(t,"stem"),this.path=kn.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new vt(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function jc(e,t){if(e&&e.includes(kn.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+kn.sep+"`")}function _c(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Am(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function j4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const _4=function(e){const r=this.constructor.prototype,i=r[e],s=function(){return i.apply(s,arguments)};return Object.setPrototypeOf(s,r),s},S4={}.hasOwnProperty;class Sp extends _4{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=d4()}copy(){const t=new Sp;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(wc(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Nc("data",this.frozen),this.namespace[t]=n,this):S4.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Nc("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Vs(t),r=this.parser||this.Parser;return Sc("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Sc("process",this.parser||this.Parser),Cc("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(s,a){const l=Vs(t),c=r.parse(l);r.run(c,l,function(d,f,p){if(d||!f||!p)return u(d);const h=f,m=r.stringify(h,p);E4(m)?p.value=m:p.result=m,u(d,p)});function u(d,f){d||!f?a(d):s?s(f):n(void 0,f)}}}processSync(t){let n=!1,r;return this.freeze(),Sc("processSync",this.parser||this.Parser),Cc("processSync",this.compiler||this.Compiler),this.process(t,i),Pm("processSync","process",n),r;function i(s,a){n=!0,_m(s),r=a}}run(t,n,r){Mm(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?s(void 0,r):new Promise(s);function s(a,l){const c=Vs(n);i.run(t,c,u);function u(d,f,p){const h=f||t;d?l(d):a?a(h):r(void 0,h,p)}}}runSync(t,n){let r=!1,i;return this.run(t,n,s),Pm("runSync","run",r),i;function s(a,l){_m(a),i=l,r=!0}}stringify(t,n){this.freeze();const r=Vs(n),i=this.compiler||this.Compiler;return Cc("stringify",i),Mm(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Nc("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):a(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function s(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[d,...f]=u;c(d,f)}else a(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function a(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=wc(!0,i.settings,u.settings))}function l(u){let d=-1;if(u!=null)if(Array.isArray(u))for(;++d<u.length;){const f=u[d];s(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,d){let f=-1,p=-1;for(;++f<r.length;)if(r[f][0]===u){p=f;break}if(p===-1)r.push([u,...d]);else if(d.length>0){let[h,...m]=d;const v=r[p][1];qu(v)&&qu(h)&&(h=wc(!0,v,h)),r[p]=[u,h,...m]}}}}const C4=new Sp().freeze();function Sc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Cc(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Nc(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Mm(e){if(!qu(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Pm(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Vs(e){return N4(e)?e:new v1(e)}function N4(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function E4(e){return typeof e=="string"||z4(e)}function z4(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const T4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Lm=[],Rm={allowDangerousHtml:!0},A4=/^(https?|ircs?|mailto|xmpp)$/i,M4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function b1(e){const t=P4(e),n=L4(e);return R4(t.runSync(t.parse(n),n),e)}function P4(e){const t=e.rehypePlugins||Lm,n=e.remarkPlugins||Lm,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Rm}:Rm;return C4().use(hN).use(n).use(c4,r).use(t)}function L4(e){const t=e.children||"",n=new v1;return typeof t=="string"&&(n.value=t),n}function R4(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,s=t.disallowedElements,a=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||I4;for(const d of M4)Object.hasOwn(t,d.from)&&(""+d.from+(d.to?"use `"+d.to+"` instead":"remove it")+T4+d.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),x1(e,u),J2(e,{Fragment:o.Fragment,components:i,ignoreInvalidStyle:!0,jsx:o.jsx,jsxs:o.jsxs,passKeys:!0,passNode:!0});function u(d,f,p){if(d.type==="raw"&&p&&typeof f=="number")return a?p.children.splice(f,1):p.children[f]={type:"text",value:d.value},f;if(d.type==="element"){let h;for(h in yc)if(Object.hasOwn(yc,h)&&Object.hasOwn(d.properties,h)){const m=d.properties[h],v=yc[h];(v===null||v.includes(d.tagName))&&(d.properties[h]=c(String(m||""),h,d))}}if(d.type==="element"){let h=n?!n.includes(d.tagName):s?s.includes(d.tagName):!1;if(!h&&r&&typeof f=="number"&&(h=!r(d,f,p)),h&&p&&typeof f=="number")return l&&d.children?p.children.splice(f,1,...d.children):p.children.splice(f,1),f}}}function I4(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||A4.test(e.slice(0,t))?e:""}function O4({value:e,onChange:t,placeholder:n="Write your content here...",minHeight:r=200}){const[i,s]=k.useState(!1),[a,l]=k.useState(r),c=k.useRef(null),u=k.useRef(null);k.useEffect(()=>{if(e){const p=e.split(`
`).length,h=Math.max(r,Math.min(p*20+40,500));l(h)}},[e,r]),k.useEffect(()=>{i&&u.current&&u.current.focus()},[i]);function d(p){u.current=p,p.focus()}function f(p){c.current&&!c.current.contains(p.target)&&s(!1)}return k.useEffect(()=>{if(i)return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[i]),o.jsxs("div",{ref:c,className:"markdown-editor",children:[o.jsx("style",{children:`
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
      `}),i?o.jsx("div",{className:"monaco-wrapper",children:o.jsx(on,{height:"100%",language:"markdown",theme:"vs-dark",value:e,onChange:p=>t(p||""),onMount:d,options:{minimap:{enabled:!1},fontSize:14,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"off",scrollBeyondLastLine:!1,automaticLayout:!0,wordWrap:"on",padding:{top:12,bottom:12},lineDecorationsWidth:8,folding:!1,glyphMargin:!1,renderLineHighlight:"none",overviewRulerLanes:0,hideCursorInOverviewRuler:!0,scrollbar:{vertical:"auto",horizontal:"hidden"}}})}):o.jsxs("div",{className:"markdown-preview",onClick:()=>s(!0),children:[o.jsxs("span",{className:"edit-hint",children:[o.jsx(Cj,{size:12}),"Click to edit"]}),e?o.jsx("div",{className:"markdown-content",children:o.jsx(b1,{children:e})}):o.jsx("div",{className:"markdown-placeholder",children:n})]})]})}function Im(e){return/^[a-zA-Z0-9_]+$/.test(e)}function $4({agent:e}){const{project:t,updateAgent:n,mcpServers:r,builtinTools:i,setActiveTab:s,setRunAgentId:a}=yt(),[l,c]=k.useState(new Set(["basic","tools","subagents","instruction"])),[u,d]=k.useState(!1),[f,p]=k.useState(!1),[h,m]=k.useState(!1),[v,j]=k.useState(""),[g,x]=k.useState(null),[w,_]=k.useState(e.name);if(k.useEffect(()=>{_(e.name)},[e.id]),!t)return null;function z(b){n(e.id,b)}function C(b){if(_(b),b===""){x(null),z({name:b});return}Im(b)?x(null):x("Name can only contain letters, numbers, and underscores"),z({name:b})}function R(){e.type==="LlmAgent"&&w&&Im(w)&&z({output_key:w})}function E(b){const W=new Set(l);W.has(b)?W.delete(b):W.add(b),c(W)}const U=e.type==="LlmAgent",N=e;function $(b){U&&z({tools:[...N.tools,b]})}function G(b){U&&z({tools:N.tools.filter((W,H)=>H!==b)})}function Y(b,W){if(!U)return;const H=[...N.tools];H[b]=W,z({tools:H})}function A(b){"sub_agents"in e&&z({sub_agents:[...e.sub_agents,b]})}function D(b){"sub_agents"in e&&z({sub_agents:e.sub_agents.filter(W=>W!==b)})}const P=t.agents.filter(b=>b.id!==e.id);async function M(){if(!(!t||!U)){d(!0);try{const b=N.instruction||"",W=b?`Current instruction to improve:

${b}

Please improve and expand this instruction while preserving its core intent.`:void 0,y=t.agents.some(F=>F.id===e.id)?void 0:e,S=await ua(t.id,e.id,W,y);S.success&&S.prompt?z({instruction:S.prompt}):alert("Failed to generate prompt: "+(S.error||"Unknown error"))}catch(b){alert("Error generating prompt: "+b.message)}finally{d(!1)}}}async function B(){if(!(!t||!U||!v.trim())){d(!0);try{const W=`Current instruction:

${N.instruction||""}

---

Requested changes:
${v}

Please apply the requested changes to the instruction above. Output only the updated instruction, nothing else.`,y=t.agents.some(F=>F.id===e.id)?void 0:e,S=await ua(t.id,e.id,W,y);S.success&&S.prompt?(z({instruction:S.prompt}),m(!1),j("")):alert("Failed to apply changes: "+(S.error||"Unknown error"))}catch(b){alert("Error applying changes: "+b.message)}finally{d(!1)}}}async function O(){if(!t||!U)return;const b=N.instruction;if(!b){alert("Please write an instruction first");return}p(!0);try{const W=`Write a 5-10 word description of what this agent does.

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
${b.slice(0,500)}

Your response (5-10 words only):`,H=await ua(t.id,e.id,W);if(H.success&&H.prompt){let y=H.prompt.trim();y=y.replace(/^["']|["']$/g,"").trim();const S=y.split(/[.!?\n]/)[0].trim(),F=S.length>80?S.slice(0,77)+"...":S;z({description:F})}else alert("Failed to generate description: "+(H.error||"Unknown error"))}catch(W){alert("Error generating description: "+W.message)}finally{p(!1)}}return o.jsxs("div",{className:"agent-editor",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"editor-header",children:[o.jsx(Rr,{size:24,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:w,onChange:b=>C(b.target.value),onBlur:R,placeholder:"Agent name",style:{borderColor:g?"var(--error)":void 0}}),g&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:g})]}),o.jsx("span",{className:"badge badge-info",children:e.type}),o.jsxs("button",{className:"btn btn-primary btn-sm run-agent-btn",onClick:()=>{a(e.id),s("run")},title:"Test this agent",children:[o.jsx(xr,{size:14}),"Run"]})]}),o.jsxs("div",{className:"editor-content",children:[o.jsxs(Xr,{id:"basic",title:"Basic Info",icon:o.jsx(Rr,{size:16}),expanded:l.has("basic"),onToggle:()=>E("basic"),children:[o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsxs("div",{className:"label-with-action",children:[o.jsx("label",{children:"Description"}),U&&N.instruction&&o.jsx("button",{className:"btn btn-secondary btn-sm generate-btn",onClick:O,disabled:f,title:"Generate description from instruction",children:f?o.jsxs(o.Fragment,{children:[o.jsx(ir,{size:14,className:"spin"}),"Summarizing..."]}):"Summarize"})]}),o.jsx("input",{type:"text",value:e.description,onChange:b=>z({description:b.target.value}),placeholder:"e.g., Reviews code for bugs and suggests fixes"})]})}),U&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Output Key"}),o.jsxs("select",{value:N.output_key||"",onChange:b=>z({output_key:b.target.value||void 0}),children:[o.jsx("option",{value:"",children:"None"}),t.app.state_keys.map(b=>o.jsx("option",{value:b.name,children:b.name},b.name))]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Include Contents"}),o.jsxs("select",{value:N.include_contents,onChange:b=>z({include_contents:b.target.value}),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"none",children:"None"})]})]})]}),o.jsxs("div",{className:"form-row",style:{gap:24},children:[o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:N.disallow_transfer_to_parent,onChange:b=>z({disallow_transfer_to_parent:b.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to parent"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13},children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:N.disallow_transfer_to_peers,onChange:b=>z({disallow_transfer_to_peers:b.target.checked})}),o.jsx("span",{className:"toggle-slider"})]}),"Disallow transfer to peers"]})]})]}),e.type==="LoopAgent"&&o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Max Iterations"}),o.jsx("input",{type:"number",value:e.max_iterations||"",onChange:b=>z({max_iterations:parseInt(b.target.value)||void 0}),placeholder:"No limit"})]})})]}),U&&o.jsx(Xr,{id:"model",title:"Model",icon:o.jsx(op,{size:16}),expanded:l.has("model"),onToggle:()=>E("model"),children:o.jsx(F4,{agent:N,appModels:t.app.models||[],defaultModelId:t.app.default_model_id,projectId:t.id,onUpdate:b=>z({model:b})})}),o.jsxs("div",{style:{display:"flex",gap:16},children:["sub_agents"in e&&o.jsx("div",{style:{flex:1},children:o.jsx(Xr,{id:"subagents",title:`Sub-Agents (${e.sub_agents.length})`,icon:o.jsx(Ev,{size:16}),expanded:l.has("subagents"),onToggle:()=>E("subagents"),children:o.jsxs("div",{className:"sub-agent-list",children:[e.sub_agents.map(b=>{const W=t.agents.find(H=>H.id===b);return W?o.jsxs("div",{className:"sub-agent-chip",children:[W.name,o.jsx("button",{onClick:()=>D(b),children:o.jsx(Je,{size:12})})]},b):null}),o.jsxs("select",{value:"",onChange:b=>{b.target.value&&A(b.target.value)},style:{width:150,padding:"6px 10px",fontSize:13},children:[o.jsx("option",{value:"",children:"Add agent..."}),P.filter(b=>!e.sub_agents.includes(b.id)).map(b=>o.jsx("option",{value:b.id,children:b.name},b.id))]})]})})}),U&&o.jsx("div",{style:{flex:1},children:o.jsx(Xr,{id:"tools",title:`Tools (${N.tools.length})`,icon:o.jsx(gn,{size:16}),expanded:l.has("tools"),onToggle:()=>E("tools"),children:o.jsx(D4,{tools:N.tools,onAdd:$,onRemove:G,onUpdate:Y,builtinTools:i,mcpServers:r,projectMcpServers:t.mcp_servers,customTools:t.custom_tools,agents:P,skillsets:t.skillsets||[]})})})]}),o.jsx(Xr,{id:"callbacks",title:"Callbacks",icon:o.jsx(zn,{size:16}),expanded:l.has("callbacks"),onToggle:()=>E("callbacks"),children:o.jsx(B4,{agent:e,onUpdate:z,customCallbacks:t.custom_callbacks||[],isLlmAgent:U})}),U&&o.jsx(Xr,{id:"instruction",title:"Instruction",icon:o.jsx(vv,{size:16}),expanded:l.has("instruction"),onToggle:()=>E("instruction"),children:o.jsx("div",{className:"form-row",children:o.jsxs("div",{className:"form-group full-width",children:[o.jsx("div",{className:"label-with-action",children:o.jsxs("div",{className:"action-buttons",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>m(!h),disabled:u||!N.instruction,title:"Request specific changes to the instruction",children:"Request Changes"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:M,disabled:u,title:"Uses AI to improve and expand the current instruction",children:u?o.jsxs(o.Fragment,{children:[o.jsx(ir,{size:14,className:"spin"}),"Working..."]}):"Auto-Improve"})]})}),h&&o.jsxs("div",{className:"request-changes-box",children:[o.jsx("input",{type:"text",value:v,onChange:b=>j(b.target.value),placeholder:"Describe what changes you want...",onKeyDown:b=>{b.key==="Enter"&&v.trim()?B():b.key==="Escape"&&(m(!1),j(""))},autoFocus:!0}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:B,disabled:u||!v.trim(),children:"Apply"})]}),o.jsx(O4,{value:N.instruction,onChange:b=>z({instruction:b}),placeholder:"Write your agent's instruction here... (Markdown supported)",minHeight:200})]})})})]})]})}function Xr({id:e,title:t,icon:n,expanded:r,onToggle:i,children:s}){return o.jsxs("div",{className:"section",children:[o.jsxs("div",{className:"section-header",onClick:i,children:[r?o.jsx(zt,{size:16}):o.jsx(wt,{size:16}),o.jsxs("h4",{children:[n," ",t]})]}),r&&o.jsx("div",{className:"section-content",children:s})]})}function D4({tools:e,onAdd:t,onRemove:n,onUpdate:r,builtinTools:i,mcpServers:s,projectMcpServers:a,customTools:l,agents:c,skillsets:u}){const[d,f]=k.useState(!1),[p,h]=k.useState({}),[m,v]=k.useState(""),j=Jt.useRef(null),g=Jt.useRef(null),[x,w]=k.useState(null),[_,z]=k.useState(new Set),C=(S,F)=>{if(!m.trim())return!0;const te=m.toLowerCase();return S.toLowerCase().includes(te)||((F==null?void 0:F.toLowerCase().includes(te))??!1)},R=i.filter(S=>C(S.name,S.description)),E=a.filter(S=>C(S.name,S.description)),U=l.filter(S=>C(S.name,S.description)),N=c.filter(S=>C(S.name,S.description)),$=u.filter(S=>C(S.name,S.description));function G(){if(j.current){const S=j.current.getBoundingClientRect(),F=window.innerHeight,te=350,ae=F-S.bottom-16,ye=S.top-16;if(ae>=200||ae>=ye){const ee=Math.min(te,ae);h({top:S.bottom+4,left:S.left,maxHeight:ee})}else{const ee=Math.min(te,ye);h({top:S.top-ee-4,left:S.left,maxHeight:ee})}}f(!0),v(""),setTimeout(()=>{var S;return(S=g.current)==null?void 0:S.focus()},50)}function Y(){f(!1),v("")}function A(S){t({type:"builtin",name:S}),Y()}async function D(S){Y();const F=S.tool_filter||[];if(w({server:S,enabledTools:new Set(F),availableTools:F.map(te=>({name:te,description:""})),isLoading:F.length===0,error:void 0}),F.length===0)try{const{testMcpServer:te}=await Uj(async()=>{const{testMcpServer:ye}=await Promise.resolve().then(()=>fj);return{testMcpServer:ye}},void 0),ae=await te({connection_type:S.connection_type,command:S.command,args:S.args,env:S.env,url:S.url,headers:S.headers,timeout:S.timeout||30});ae.success?w(ye=>ye?{...ye,availableTools:ae.tools,enabledTools:new Set(ae.tools.map(ee=>ee.name)),isLoading:!1}:null):w(ye=>ye?{...ye,isLoading:!1,error:ae.error||"Failed to connect to MCP server"}:null)}catch(te){w(ae=>ae?{...ae,isLoading:!1,error:te.message}:null)}}function P(S){if(!x)return;const F=new Set(x.enabledTools);F.has(S)?F.delete(S):F.add(S),w({...x,enabledTools:F})}function M(){if(!x)return;const S=Array.from(x.enabledTools);t({type:"mcp",server:{...x.server,tool_filter:S}}),w(null)}function B(S){const F=new Set(_);F.has(S)?F.delete(S):F.add(S),z(F)}function O(S,F){const te=e[S];if(te.type!=="mcp"||!te.server)return;const ae=te.server.tool_filter||[];let ye;ae.includes(F)?ye=ae.filter(ee=>ee!==F):ye=[...ae,F],r(S,{...te,server:{...te.server,tool_filter:ye}})}function b(S){t({type:"function",name:S.name,module_path:S.module_path}),Y()}function W(S){const F=c.find(te=>te.id===S);t({type:"agent",agent_id:S,name:F==null?void 0:F.name}),Y()}function H(S){const F=u.find(te=>te.id===S);t({type:"skillset",skillset_id:S,name:F==null?void 0:F.name}),Y()}function y(S){return s.find(F=>F.name===S)}return o.jsxs("div",{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"tool-list",children:e.map((S,F)=>{var te;return S.type==="mcp"&&S.server?o.jsxs("div",{className:"mcp-tool-item",children:[o.jsxs("div",{className:"mcp-tool-header",onClick:()=>B(F),children:[_.has(F)?o.jsx(zt,{size:14}):o.jsx(wt,{size:14}),o.jsx(gn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"mcp-tool-info",children:[o.jsx("div",{className:"mcp-tool-name",children:S.server.name}),o.jsx("div",{className:"mcp-tool-count",children:S.server.tool_filter===null||S.server.tool_filter===void 0?"all tools":`${S.server.tool_filter.length} tools enabled`})]}),o.jsx("button",{className:"delete-btn",onClick:ae=>{ae.stopPropagation(),n(F)},children:o.jsx(Je,{size:14})})]}),_.has(F)&&o.jsx("div",{className:"mcp-tool-body",children:o.jsx("div",{className:"mcp-tool-list",children:(()=>{const ae=y(S.server.name),ye=(ae==null?void 0:ae.tool_filter)||S.server.tool_filter||[],ee=new Set(S.server.tool_filter||[]);return ye.map(le=>o.jsxs("label",{className:`mcp-tool-chip ${ee.has(le)?"enabled":"disabled"}`,onClick:()=>O(F,le),children:[o.jsx("input",{type:"checkbox",checked:ee.has(le),onChange:()=>{},style:{display:"none"}}),le]},le))})()})})]},F):S.type==="skillset"?o.jsxs("div",{className:"tool-item",children:[o.jsx(Bn,{size:14,style:{color:"var(--accent)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:S.name||((te=u.find(ae=>ae.id===S.skillset_id))==null?void 0:te.name)||"SkillSet"}),o.jsx("div",{className:"tool-item-type",children:"skillset"})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(F),children:o.jsx(Je,{size:14})})]},F):o.jsxs("div",{className:"tool-item",children:[o.jsx(gn,{size:14,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{className:"tool-item-info",children:[o.jsx("div",{className:"tool-item-name",children:S.name||S.agent_id}),o.jsx("div",{className:"tool-item-type",children:S.type})]}),o.jsx("button",{className:"delete-btn",onClick:()=>n(F),children:o.jsx(Je,{size:14})})]},F)})}),o.jsxs("div",{className:"add-tool-dropdown",style:{marginTop:12},children:[o.jsxs("button",{ref:j,className:"btn btn-secondary btn-sm",onClick:()=>d?Y():G(),children:[o.jsx(nt,{size:14}),"Add Tool"]}),d&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"dropdown-backdrop",onClick:Y}),o.jsxs("div",{className:"dropdown-content dropdown-fixed",style:p,children:[o.jsx("div",{className:"dropdown-search",children:o.jsx("input",{ref:g,type:"text",placeholder:"Search tools...",value:m,onChange:S=>v(S.target.value),onKeyDown:S=>S.key==="Escape"&&Y()})}),R.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Built-in Tools"}),R.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>A(S.name),children:[o.jsx("div",{className:"dropdown-item-name",children:S.name}),o.jsx("div",{className:"dropdown-item-desc",children:S.description})]},S.name))]}),E.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["Project MCP Servers (",E.length,")"]}),E.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>D(S),children:[o.jsxs("div",{className:"dropdown-item-name",children:[S.name,o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:S.tool_filter===null||S.tool_filter===void 0?"all tools":`${S.tool_filter.length} tools`})]}),o.jsx("div",{className:"dropdown-item-desc",children:S.description||"Custom MCP server"})]},`project-${S.id||S.name}`))]}),U.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Custom Tools"}),U.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>b(S),children:[o.jsx("div",{className:"dropdown-item-name",children:S.name}),o.jsx("div",{className:"dropdown-item-desc",children:S.description})]},S.id))]}),N.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsx("h5",{children:"Agents as Tools"}),N.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>W(S.id),children:[o.jsx("div",{className:"dropdown-item-name",children:S.name}),o.jsx("div",{className:"dropdown-item-desc",children:S.type})]},S.id))]}),$.length>0&&o.jsxs("div",{className:"dropdown-section",children:[o.jsxs("h5",{children:["SkillSets (",$.length,")"]}),$.map(S=>o.jsxs("button",{className:"dropdown-item",onClick:()=>H(S.id),children:[o.jsxs("div",{className:"dropdown-item-name",children:[S.name,o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)",marginLeft:8},children:[S.entry_count||0," entries"]})]}),o.jsx("div",{className:"dropdown-item-desc",children:S.description||"Vector knowledge base"})]},S.id))]}),m.trim()&&R.length===0&&E.length===0&&U.length===0&&N.length===0&&$.length===0&&o.jsxs("div",{className:"dropdown-section",style:{textAlign:"center",padding:"20px",color:"var(--text-muted)"},children:['No tools matching "',m,'"']})]})]})]}),x&&o.jsx("div",{className:"mcp-config-dialog",children:o.jsxs("div",{className:"mcp-config-content",children:[o.jsxs("h3",{children:["Configure ",x.server.name]}),o.jsx("p",{children:x.server.description}),x.isLoading?o.jsxs("div",{className:"mcp-loading",children:[o.jsx("div",{className:"spinner"}),o.jsx("p",{children:"Connecting to MCP server and discovering tools..."})]}):x.error?o.jsxs("div",{className:"mcp-error",children:[o.jsxs("p",{children:["⚠️ Failed to discover tools: ",x.error]}),o.jsx("p",{className:"hint",children:"You can still add the server, but you won't be able to select specific tools."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mcp-select-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>w({...x,enabledTools:new Set(x.availableTools.map(S=>S.name))}),children:["Select All (",x.availableTools.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>w({...x,enabledTools:new Set}),children:"Select None"})]}),o.jsx("div",{className:"mcp-tools-grid",children:x.availableTools.map(S=>o.jsxs("div",{className:"mcp-tool-row",title:S.description||S.name,style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:x.enabledTools.has(S.name),onChange:()=>P(S.name)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:13,opacity:x.enabledTools.has(S.name)?1:.5,cursor:"pointer"},onClick:()=>P(S.name),children:S.name})]},S.name))})]}),o.jsxs("div",{className:"dialog-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>w(null),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:M,disabled:x.enabledTools.size===0,children:["Add ",x.enabledTools.size," Tools"]})]})]})})]})}function F4({agent:e,appModels:t,defaultModelId:n,projectId:r,onUpdate:i}){var p,h;const s=(p=e.model)==null?void 0:p._appModelId,a=e.model!==null&&e.model!==void 0&&!s,c=s||(()=>{if(!e.model)return n;const m=t.find(v=>{var j,g,x;return v.provider===((j=e.model)==null?void 0:j.provider)&&v.model_name===((g=e.model)==null?void 0:g.model_name)&&v.api_base===((x=e.model)==null?void 0:x.api_base)});return m==null?void 0:m.id})()||n||((h=t[0])==null?void 0:h.id);Jt.useEffect(()=>{var m,v,j,g,x;if(s){const w=t.find(_=>_.id===s);w&&(((m=e.model)==null?void 0:m.provider)!==w.provider||((v=e.model)==null?void 0:v.model_name)!==w.model_name||((j=e.model)==null?void 0:j.api_base)!==w.api_base||((g=e.model)==null?void 0:g.temperature)!==w.temperature||((x=e.model)==null?void 0:x.max_output_tokens)!==w.max_output_tokens)&&i({provider:w.provider,model_name:w.model_name,api_base:w.api_base,temperature:w.temperature,max_output_tokens:w.max_output_tokens,top_p:w.top_p,top_k:w.top_k,fallbacks:[],_appModelId:s})}},[s,t,e.model,i]);function u(m){const v=t.find(j=>j.id===m);v&&i({provider:v.provider,model_name:v.model_name,api_base:v.api_base,temperature:v.temperature,max_output_tokens:v.max_output_tokens,top_p:v.top_p,top_k:v.top_k,fallbacks:[],_appModelId:m})}function d(){var m;if(a){const v=n||((m=t[0])==null?void 0:m.id);v&&u(v)}else{const v=e.model;if(v){const{_appModelId:j,...g}=v;i(g)}else i({provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]})}}function f(m){const{_appModelId:v,...j}=e.model||{};i({...j,...m})}return t.find(m=>m.id===c),t.find(m=>m.id===n),o.jsxs("div",{className:"model-selector",children:[o.jsx("style",{children:`
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
      `}),t.length>0&&o.jsxs("div",{className:"model-choice",children:[o.jsxs("div",{className:`model-option ${a?"":"selected"}`,onClick:()=>!a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Use App Model"}),o.jsx("div",{className:"model-option-desc",children:"Select from configured models"})]}),o.jsxs("div",{className:`model-option ${a?"selected":""}`,onClick:()=>a||d(),children:[o.jsx("div",{className:"model-option-label",children:"Custom"}),o.jsx("div",{className:"model-option-desc",children:"Configure model manually"})]})]}),!a&&t.length>0?o.jsx("div",{className:"app-model-select",children:t.map(m=>o.jsx("div",{className:`app-model-item ${c===m.id?"selected":""}`,onClick:()=>u(m.id),children:o.jsxs("div",{className:"app-model-item-info",children:[o.jsxs("div",{className:"app-model-item-name",children:[m.name,m.id===n&&o.jsxs("span",{className:"default-badge",children:[o.jsx(Nv,{size:10,fill:"currentColor"}),"Default"]})]}),o.jsxs("div",{className:"app-model-item-details",children:[m.provider," / ",m.model_name,m.api_base&&` • ${m.api_base}`]})]})},m.id))}):t.length===0?o.jsx("div",{className:"no-models-message",children:"No models configured in App Config. Configure models there first, or use custom settings below."}):null,(a||t.length===0)&&o.jsx("div",{className:"custom-model-form",children:o.jsx(zv,{projectId:r,values:e.model||{},onChange:f})})]})}const Ec=[{id:"builtin_exit_loop",name:"exit_on_EXIT_LOOP_NOW",description:'Exits LoopAgent when model says "EXIT LOOP NOW". Use as after_model_callback.',module_path:"exit_on_EXIT_LOOP_NOW",code:"",state_keys_used:[]}];function B4({agent:e,onUpdate:t,customCallbacks:n,isLlmAgent:r}){const i=[...Ec,...n],s=[{key:"before_agent_callbacks",label:"Before Agent"},{key:"after_agent_callbacks",label:"After Agent"}],a=[{key:"before_model_callbacks",label:"Before Model"},{key:"after_model_callbacks",label:"After Model"},{key:"before_tool_callbacks",label:"Before Tool"},{key:"after_tool_callbacks",label:"After Tool"}],l=r?[...s,...a]:s;function c(d,f){const p=e[d]||[],h=i.find(m=>m.id===f);h&&t({[d]:[...p,{module_path:h.module_path}]})}function u(d,f){const p=e[d]||[];t({[d]:p.filter((h,m)=>m!==f)})}return o.jsx("div",{className:"callbacks-editor",children:l.map(({key:d,label:f})=>{const p=e[d]||[],h=i;return o.jsxs("div",{className:"callback-type-group",style:{marginBottom:"20px"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{style:{fontWeight:500,fontSize:"13px"},children:f}),h.length>0&&o.jsxs("select",{value:"",onChange:m=>{m.target.value&&(c(d,m.target.value),m.target.value="")},style:{padding:"4px 8px",fontSize:"12px",width:"200px"},children:[o.jsx("option",{value:"",children:"Add callback..."}),o.jsx("optgroup",{label:"Built-in",children:Ec.filter(m=>!p.some(v=>v.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))}),o.jsx("optgroup",{label:"Custom",children:n.filter(m=>!p.some(v=>v.module_path===m.module_path)).map(m=>o.jsx("option",{value:m.id,children:m.name},m.id))})]})]}),p.length===0?o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",fontStyle:"italic",padding:"8px"},children:"No callbacks"}):o.jsx("div",{className:"callback-list",children:p.map((m,v)=>{const j=i.find(x=>x.module_path===m.module_path),g=Ec.some(x=>x.module_path===m.module_path);return o.jsxs("div",{className:"callback-chip",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 10px",background:g?"var(--accent-bg, #1a365d)":"var(--bg-secondary)",borderRadius:"4px",marginBottom:"4px"},title:(j==null?void 0:j.description)||"",children:[o.jsxs("span",{style:{fontSize:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[g&&o.jsx("span",{style:{fontSize:"9px",padding:"1px 4px",background:"var(--accent-color, #3182ce)",borderRadius:"3px",textTransform:"uppercase",fontWeight:600},children:"built-in"}),(j==null?void 0:j.name)||m.module_path]}),o.jsx("button",{onClick:()=>u(d,v),style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Remove callback",children:o.jsx(Je,{size:12})})]},v)})})]},d)})})}const zc=[{type:"LlmAgent",label:"LLM Agent",icon:Rr,color:"#00f5d4",description:"AI-powered agent with model reasoning"},{type:"SequentialAgent",label:"Sequential",icon:Aj,color:"#7b2cbf",description:"Run sub-agents in order"},{type:"LoopAgent",label:"Loop",icon:Ej,color:"#ffd93d",description:"Repeat sub-agents until exit"},{type:"ParallelAgent",label:"Parallel",icon:Lu,color:"#ff6b6b",description:"Run sub-agents simultaneously"}];function U4(){return`agent_${Date.now().toString(36)}`}function V4(e){return{provider:e.provider,model_name:e.model_name,api_base:e.api_base,temperature:e.temperature,max_output_tokens:e.max_output_tokens,top_p:e.top_p,top_k:e.top_k,fallbacks:[]}}function W4(e,t){const n=U4(),r={LlmAgent:"new_agent",SequentialAgent:"new_sequence",LoopAgent:"new_loop",ParallelAgent:"new_parallel"},i={id:n,name:r[e]||"new_agent",description:""},s=t?V4(t):{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]};switch(e){case"LlmAgent":return{...i,type:"LlmAgent",model:s,instruction:"",include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:[],sub_agents:[],output_key:r[e]||"new_agent",before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};case"SequentialAgent":return{...i,type:"SequentialAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};case"LoopAgent":return{...i,type:"LoopAgent",sub_agents:[],max_iterations:10,before_agent_callbacks:[],after_agent_callbacks:[]};case"ParallelAgent":return{...i,type:"ParallelAgent",sub_agents:[],before_agent_callbacks:[],after_agent_callbacks:[]};default:throw new Error(`Unknown agent type: ${e}`)}}function H4({onSelectAgent:e}){const{project:t,addAgent:n,removeAgent:r,updateAgent:i,selectedAgentId:s,setSelectedAgentId:a,mcpServers:l}=yt(),[c,u]=k.useState(new Set),[d,f]=k.useState(!1),[p,h]=k.useState(""),[m,v]=k.useState(new Map),[j,g]=k.useState(380),[x,w]=k.useState(!1),_=k.useRef(null),[z,C]=k.useState(null),R=k.useRef(null),[E,U]=k.useState(null),[N,$]=k.useState(null),G=k.useRef(null),Y=k.useRef(null),A=k.useCallback(Z=>{Z.preventDefault(),w(!0)},[]);if(k.useEffect(()=>{const Z=Q=>{if(!x)return;const T=Math.min(Math.max(200,Q.clientX),600);g(T)},I=()=>{w(!1)};return x&&(document.addEventListener("mousemove",Z),document.addEventListener("mouseup",I),document.body.style.cursor="col-resize",document.body.style.userSelect="none"),()=>{document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",I),document.body.style.cursor="",document.body.style.userSelect=""}},[x]),k.useEffect(()=>{if(t){const Z=t.agents.filter(I=>"sub_agents"in I&&I.sub_agents.length>0).map(I=>I.id);u(new Set(Z))}},[t==null?void 0:t.id,t==null?void 0:t.agents.length]),!t)return null;const D=k.useMemo(()=>new Map(t.agents.map(Z=>[Z.id,Z])),[t.agents]);function P(){if(!p.trim()||!t)return;const Z=`generating_${Date.now()}`,I=p;v(Q=>new Map(Q).set(Z,I)),f(!1),h(""),av(t.id,I).then(Q=>{var T,V,L,J;if(Q.success&&Q.config){const ne=Q.config,pe=[];if((T=ne.tools)!=null&&T.builtin)for(const ke of ne.tools.builtin)pe.push({type:"builtin",name:ke});if((V=ne.tools)!=null&&V.mcp)for(const ke of ne.tools.mcp){const Pe=l.find(Xe=>Xe.name===ke.server);Pe&&pe.push({type:"mcp",server:{...Pe,tool_filter:ke.tools}})}if((L=ne.tools)!=null&&L.custom)for(const ke of ne.tools.custom){const Pe=t.custom_tools.find(Xe=>Xe.name===ke);Pe&&pe.push({type:"function",name:ke,module_path:Pe.module_path})}if((J=ne.tools)!=null&&J.agents)for(const ke of ne.tools.agents){const Pe=t.agents.find(Xe=>Xe.id===ke);Pe&&pe.push({type:"agent",agent_id:ke,name:Pe.name})}const K=t.app.models||[],re=K.find(ke=>ke.id===t.app.default_model_id)||K[0],we=ne.name||"new_agent",_e={id:`agent_${Date.now().toString(36)}`,type:"LlmAgent",name:we,description:ne.description||"",instruction:ne.instruction||"",output_key:ne.output_key||we,model:re?{provider:re.provider,model_name:re.model_name,api_base:re.api_base,temperature:re.temperature,max_output_tokens:re.max_output_tokens,top_p:re.top_p,top_k:re.top_k,fallbacks:[]}:{provider:"gemini",model_name:"gemini-2.0-flash",fallbacks:[]},include_contents:"default",disallow_transfer_to_parent:!1,disallow_transfer_to_peers:!1,tools:pe,sub_agents:ne.sub_agents||[],before_agent_callbacks:[],after_agent_callbacks:[],before_model_callbacks:[],after_model_callbacks:[],before_tool_callbacks:[],after_tool_callbacks:[]};n(_e),a(_e.id),e==null||e(_e.id)}else console.error("Failed to generate agent:",Q.error)}).catch(Q=>{console.error("Error generating agent:",Q)}).finally(()=>{v(Q=>{const T=new Map(Q);return T.delete(Z),T})})}const M=t.agents.find(Z=>Z.id===s);function B(Z){a(Z),e==null||e(Z)}function O(Z){if(!t)return;const I=t.app.models||[],Q=I.find(V=>V.id===t.app.default_model_id)||I[0],T=W4(Z,Q);n(T),B(T.id)}function b(Z,I){I.stopPropagation(),confirm("Delete this agent?")&&(r(Z),s===Z&&(e==null||e(null)))}function W(Z){const I=new Set(c);I.has(Z)?I.delete(Z):I.add(Z),u(I)}function H(Z){if(!G.current||!R.current)return;const I=G.current.getBoundingClientRect(),Q=Z.clientY-I.top,T=60,V=8;if(Q<T){const L=Math.max(1,V*(1-Q/T));G.current.scrollTop-=L}else if(Q>I.height-T){const L=Math.max(1,V*(1-(I.height-Q)/T));G.current.scrollTop+=L}}function y(Z,I){Z.dataTransfer.setData("text/plain",I),Z.dataTransfer.effectAllowed="move",R.current=I,requestAnimationFrame(()=>C(I))}function S(){R.current=null,C(null),U(null),$(null),Y.current&&(cancelAnimationFrame(Y.current),Y.current=null)}function F(Z,I,Q){if(!t)return;Z.preventDefault(),Z.stopPropagation();const T=R.current;if(!T)return;const V=t.agents.find(L=>L.id===I);!V||!("sub_agents"in V)||le(T,I)||(Z.dataTransfer.dropEffect="move",$({parentId:I,index:Q}),U(null))}function te(Z,I,Q){if(!t)return;Z.preventDefault(),Z.stopPropagation();const T=Z.dataTransfer.getData("text/plain");if(!T)return;if(T===I||le(T,I)){$(null);return}const V=t.agents.find(J=>J.id===I);if(!V||!("sub_agents"in V))return;t.agents.forEach(J=>{"sub_agents"in J&&J.sub_agents.includes(T)&&i(J.id,{sub_agents:J.sub_agents.filter(ne=>ne!==T)})});const L=[...V.sub_agents.filter(J=>J!==T)];L.splice(Q,0,T),i(I,{sub_agents:L}),u(J=>new Set([...J,I])),C(null),$(null)}function ae(Z,I,Q){if(!t)return;const T=R.current;Z.preventDefault(),Z.stopPropagation(),T!==I&&(T&&le(T,I)||(Z.dataTransfer.dropEffect="move",U({agentId:I,type:Q}),$(null)))}function ye(Z){const I=Z.relatedTarget;(!I||!Z.currentTarget.contains(I))&&U(null)}function ee(Z,I,Q){if(!t)return;Z.preventDefault(),Z.stopPropagation();const T=Z.dataTransfer.getData("text/plain");if(!T||T===I)return;if(Q==="sub_agent"&&le(T,I)){C(null),U(null),$(null);return}const V=t.agents.find(J=>J.id===I),L=t.agents.find(J=>J.id===T);if(!(!V||!L)){if(Q==="sub_agent")"sub_agents"in V&&(t.agents.forEach(J=>{"sub_agents"in J&&J.sub_agents.includes(T)&&i(J.id,{sub_agents:J.sub_agents.filter(ne=>ne!==T)})}),V.sub_agents.includes(T)||(i(I,{sub_agents:[...V.sub_agents,T]}),u(J=>new Set([...J,I]))));else if(Q==="tool"&&"tools"in V){const J=V;J.tools.some(pe=>pe.type==="agent"&&pe.agent_id===T)||i(I,{tools:[...J.tools,{type:"agent",agent_id:T,name:L.name}]})}C(null),U(null)}}function le(Z,I){if(Z===I)return!0;const Q=[Z],T=new Set;for(;Q.length;){const V=Q.pop();if(T.has(V))continue;T.add(V);const L=D.get(V);if(!(!L||!("sub_agents"in L)))for(const J of L.sub_agents){if(J===I)return!0;Q.push(J)}}return!1}function be(Z){const I=zc.find(Q=>Q.type===Z);return I?I.icon:Rr}function Se(Z){const I=zc.find(Q=>Q.type===Z);return I?I.color:"#888"}function me(Z,I=0,Q=new Set){return Z.map(T=>{const V=be(T.type),L=Se(T.type),J="sub_agents"in T&&T.sub_agents.length>0,ne="sub_agents"in T,pe=T.type==="LlmAgent",K=c.has(T.id),re=z===T.id,we=(E==null?void 0:E.agentId)===T.id&&(E==null?void 0:E.type)==="sub_agent",_e=(E==null?void 0:E.agentId)===T.id&&(E==null?void 0:E.type)==="tool",ke=Q.has(T.id),Pe=J&&K&&!ke,Xe=Pe&&t?T.sub_agents.map(ce=>t.agents.find(Ee=>Ee.id===ce)).filter(ce=>ce!==void 0):[],ot=z&&z!==T.id&&(ne||pe);return o.jsxs("div",{className:"agent-tree-item",children:[o.jsxs("div",{className:`agent-item ${s===T.id?"selected":""} ${re?"dragging":""} ${ot?"drop-target":""}`,onClick:()=>B(T.id),style:{paddingLeft:12+I*20},draggable:!0,onDragStart:ce=>y(ce,T.id),onDragEnd:S,onDragOver:ce=>{ot&&(ce.preventDefault(),ce.stopPropagation())},children:[o.jsx("div",{className:"drag-handle",children:o.jsx(wj,{size:12})}),J?o.jsx("button",{className:"expand-btn",onClick:ce=>{ce.stopPropagation(),W(T.id)},children:K?o.jsx(zt,{size:16}):o.jsx(wt,{size:16})}):o.jsx("span",{style:{width:20}}),o.jsx("div",{className:"agent-icon",style:{background:L},children:o.jsx(V,{size:14})}),o.jsx("span",{className:"agent-name",children:T.name}),o.jsx("button",{className:"delete-btn",onClick:ce=>b(T.id,ce),children:o.jsx(Je,{size:14})}),ot&&o.jsxs("div",{className:"drop-overlay",children:[ne&&o.jsxs("div",{className:`drop-zone-overlay ${we?"active":""}`,onDragOver:ce=>ae(ce,T.id,"sub_agent"),onDragLeave:ye,onDrop:ce=>ee(ce,T.id,"sub_agent"),children:[o.jsx(Ev,{size:12}),o.jsx("span",{children:"Sub-agent"})]}),pe&&o.jsxs("div",{className:`drop-zone-overlay ${_e?"active":""}`,onDragOver:ce=>ae(ce,T.id,"tool"),onDragLeave:ye,onDrop:ce=>ee(ce,T.id,"tool"),children:[o.jsx(gn,{size:12}),o.jsx("span",{children:"Tool"})]})]})]}),Pe&&o.jsxs("div",{className:"sub-agents",children:[z&&z!==T.id&&o.jsx("div",{className:`insert-indicator ${(N==null?void 0:N.parentId)===T.id&&(N==null?void 0:N.index)===0?"active":""}`,style:{marginLeft:12+(I+1)*20},onDragOver:ce=>F(ce,T.id,0),onDragLeave:()=>$(null),onDrop:ce=>te(ce,T.id,0)}),Xe.map((ce,Ee)=>o.jsxs(Jt.Fragment,{children:[me([ce],I+1,new Set([...Q,T.id])),z&&z!==T.id&&z!==ce.id&&o.jsx("div",{className:`insert-indicator ${(N==null?void 0:N.parentId)===T.id&&(N==null?void 0:N.index)===Ee+1?"active":""}`,style:{marginLeft:12+(I+1)*20},onDragOver:ue=>F(ue,T.id,Ee+1),onDragLeave:()=>$(null),onDrop:ue=>te(ue,T.id,Ee+1)})]},ce.id))]})]},T.id)})}const Ne=new Set(t.agents.flatMap(Z=>"sub_agents"in Z?Z.sub_agents:[])),X=t.agents.filter(Z=>!Ne.has(Z.id)),he=X.length>0?X:t.agents;return o.jsxs("div",{className:"agents-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"agents-sidebar",style:{width:j},children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Agents (",t.agents.length,")",m.size>0&&o.jsxs("span",{className:"generating-badge",children:[o.jsx(ir,{size:12,className:"spin"})," ",m.size]})]}),o.jsxs("div",{className:"header-buttons",children:[zc.map(({type:Z,icon:I,color:Q})=>o.jsx("button",{className:"quick-add-btn",style:{background:Q},onClick:()=>O(Z),title:`Add ${Z}`,children:o.jsx(I,{size:14})},Z)),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>f(!0),title:"AI-powered agent setup",children:o.jsx(fc,{size:14})})]})]}),o.jsx("div",{className:"agents-list",ref:G,onDragOver:H,children:t.agents.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(Rr,{size:32}),o.jsx("p",{children:"No agents yet"})]}):me(he)})]}),o.jsx("div",{ref:_,className:`sidebar-resizer ${x?"resizing":""}`,onMouseDown:A}),o.jsx("div",{className:"agent-editor-area",children:M?o.jsx($4,{agent:M}):o.jsxs("div",{className:"empty-state card",children:[o.jsx(Rr,{size:48}),o.jsxs("p",{children:["Select an agent to edit",o.jsx("br",{}),"or create a new one"]})]})}),d&&o.jsx("div",{className:"type-selector",onClick:()=>f(!1),children:o.jsxs("div",{className:"quick-setup-content",onClick:Z=>Z.stopPropagation(),children:[o.jsxs("h2",{children:[o.jsx(fc,{size:20})," Quick Agent Setup"]}),o.jsx("p",{className:"quick-setup-desc",children:"Describe what you want this agent to do. Runs in the background - you can start multiple!"}),o.jsxs("div",{className:"quick-setup-form",children:[o.jsx("textarea",{value:p,onChange:Z=>h(Z.target.value),placeholder:"Example: An agent that searches the web for information and summarizes the results. It should be able to search Google and handle multiple queries in parallel.",rows:5,autoFocus:!0,onKeyDown:Z=>{Z.key==="Enter"&&(Z.metaKey||Z.ctrlKey)&&p.trim()&&P()}}),o.jsxs("div",{className:"quick-setup-info",children:[o.jsx("strong",{children:"Available resources:"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[t.app.state_keys.length," state keys"]}),o.jsxs("li",{children:[l.length," MCP servers"]}),o.jsxs("li",{children:[t.custom_tools.length," custom tools"]}),o.jsxs("li",{children:[t.agents.length," existing agents"]})]})]}),o.jsxs("div",{className:"quick-setup-actions",children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>f(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:P,disabled:!p.trim(),children:[o.jsx(fc,{size:14}),"Generate (⌘↵)"]})]})]})]})})]})}var Cp="\x1B[0m",Np="\x1B[1m",w1=e=>e instanceof Error?e.message:typeof e=="string"?e:"An unknown error occurred",q4=e=>{let t=w1(e),n=`${Np}[MONACOPILOT ERROR] ${t}${Cp}`;return console.error(n),{message:t}},J4=(e,t)=>{console.warn(`${Np}[MONACOPILOT WARN] ${e}${t?`
${w1(t)}`:""}${Cp}`)},G4=(e,t,n)=>console.warn(`${Np}[MONACOPILOT DEPRECATED] "${e}" is deprecated${n?` in ${n}`:""}. Please use "${t}" instead. It will be removed in a future version.${Cp}`),Ka={report:q4,warn:J4,warnDeprecated:G4},Om=(e,t,n={})=>{if(t<=0)return"";let r=e.split(`
`),i=r.length;if(t>=i)return e;if(n.truncateDirection==="keepEnd"){let a=r.slice(-t);return a.every(l=>l==="")?`
`.repeat(t):a.join(`
`)}let s=r.slice(0,t);return s.every(a=>a==="")?`
`.repeat(t):s.join(`
`)},K4=100,Y4=!0,k1="onIdle",Q4=!0,X4=120,Z4=400,eE=0,Ep=(e,t)=>t.getValueInRange({startLineNumber:1,startColumn:1,endLineNumber:e.lineNumber,endColumn:e.column}),tE=(e,t)=>t.getValueInRange({startLineNumber:e.lineNumber,startColumn:e.column,endLineNumber:t.getLineCount(),endColumn:t.getLineMaxColumn(t.getLineCount())}),nE=e=>e.getValue(),rE=class{constructor(e){this.capacity=e,this.head=0,this.tail=0,this.size=0,this.buffer=new Array(e)}enqueue(e){let t;return this.size===this.capacity&&(t=this.dequeue()),this.buffer[this.tail]=e,this.tail=(this.tail+1)%this.capacity,this.size++,t}dequeue(){if(this.size===0)return;let e=this.buffer[this.head];return this.buffer[this.head]=void 0,this.head=(this.head+1)%this.capacity,this.size--,e}getAll(){return this.buffer.filter(e=>e!==void 0)}clear(){this.buffer=new Array(this.capacity),this.head=0,this.tail=0,this.size=0}getSize(){return this.size}isEmpty(){return this.size===0}isFull(){return this.size===this.capacity}},j1=class _1{constructor(){this.cache=new rE(_1.MAX_CACHE_SIZE)}get(t,n){return this.cache.getAll().filter(r=>this.isValidCacheItem(r,t,n))}add(t){t.completion.trim()&&this.cache.enqueue(t)}clear(){this.cache.clear()}isValidCacheItem(t,n,r){let i=t.textBeforeCursor.trim(),s=Ep(n,r),a=s,l=r.getLineContent(n.lineNumber);if(n.column===l.length+1&&n.lineNumber<r.getLineCount()){let u=r.getLineContent(n.lineNumber+1);a=`${s}
${u}`}if(!(a.trim().includes(i)||i.includes(a.trim())))return!1;let c=r.getValueInRange(t.range);return this.isPartialMatch(c,t.completion)?this.isPositionValid(t,n):!1}isPartialMatch(t,n){let r=t.trim(),i=n.trim();return i.startsWith(r)||r.startsWith(i)}isPositionValid(t,n){let{range:r}=t,{startLineNumber:i,startColumn:s,endLineNumber:a,endColumn:l}=r,{lineNumber:c,column:u}=n;return c<i||c>a?!1:i===a?u>=s-1&&u<=l+1:c===i?u>=s-1:c===a?u<=l+1:!0}};j1.MAX_CACHE_SIZE=20;var iE=j1,oE=class{constructor(e){this.formattedCompletion="",this.formattedCompletion=e}setCompletion(e){return this.formattedCompletion=e,this}removeInvalidLineBreaks(){return this.formattedCompletion=this.formattedCompletion.trimEnd(),this}removeMarkdownCodeSyntax(){return this.formattedCompletion=this.removeMarkdownCodeBlocks(this.formattedCompletion),this}removeMarkdownCodeBlocks(e){let t=e.split(`
`),n=[],r=!1;for(let i=0;i<t.length;i++){let s=t[i],a=s.trim().startsWith("```");if(a&&!r){r=!0;continue}if(a&&r){r=!1;continue}n.push(s)}return n.join(`
`)}removeExcessiveNewlines(){return this.formattedCompletion=this.formattedCompletion.replace(/\n{3,}/g,`

`),this}build(){return this.formattedCompletion}},sE=class{findOverlaps(e,t,n){if(!e)return{startOverlapLength:0,maxOverlapLength:0};let r=e.length,i=t.length,s=n.length,a=0,l=0,c=0,u=Math.min(r,i);for(let p=1;p<=u;p++){let h=e.substring(0,p),m=t.slice(-p);h===m&&(c=p)}let d=Math.min(r,s);for(let p=0;p<d&&e[p]===n[p];p++)a++;for(let p=1;p<=d;p++)e.slice(-p)===n.slice(0,p)&&(l=p);let f=Math.max(a,l);if(f===0){for(let p=1;p<r;p++)if(n.startsWith(e.substring(p))){f=r-p;break}}return{startOverlapLength:c,maxOverlapLength:f}}},aE=class{constructor(e){this.monaco=e,this.textOverlapCalculator=new sE}computeInsertionRange(e,t,n){if(!t)return this.createEmptyRange(e);let r=n.getOffsetAt(e),i=n.getValue().substring(0,r),s=n.getValue().substring(r);if(r>=n.getValue().length)return this.createEmptyRange(e);if(s.length===0)return this.createEmptyRange(e);let{startOverlapLength:a,maxOverlapLength:l}=this.textOverlapCalculator.findOverlaps(t,i,s),c=a>0?n.getPositionAt(r-a):e,u=r+l,d=n.getPositionAt(u);return new this.monaco.Range(c.lineNumber,c.column,d.lineNumber,d.column)}computeCacheRange(e,t){let n=e.lineNumber,r=e.column,i=t.split(`
`),s=i.length-1,a=n+s,l=s===0?r+i[0].length:i[s].length+1;return new this.monaco.Range(n,r,a,l)}createEmptyRange(e){return new this.monaco.Range(e.lineNumber,e.column,e.lineNumber,e.column)}},lE=async e=>{let{endpoint:t,body:n}=e,r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!r.ok)throw new Error(`Error while fetching completion item: ${r.statusText}`);let{completion:i,error:s}=await r.json();return{completion:i,error:s}},cE=({pos:e,mdl:t,options:n})=>{let{filename:r,language:i,technologies:s,relatedFiles:a,maxContextLines:l=K4}=n,c=a&&a.length>0?3:2,u=l?Math.floor(l/c):void 0,d=(v,j,g)=>{let x=v(e,t);return j?Om(x,j,g):x},f=(v,j)=>!v||!j?v:v.map(({content:g,...x})=>({...x,content:Om(g,j)})),p=d(Ep,u,{truncateDirection:"keepEnd"}),h=d(tE,u,{truncateDirection:"keepStart"}),m=f(a,u);return{filename:r,language:i,technologies:s,relatedFiles:m,textBeforeCursor:p,textAfterCursor:h,cursorPosition:e}},uE=(e,t=300)=>{let n=null,r=null,i=(...s)=>{if(r)return r.args=s,r.promise;let a,l,c=new Promise((u,d)=>{a=u,l=d});return r={args:s,promise:c,resolve:a,reject:l},n&&(clearTimeout(n),n=null),n=setTimeout(async()=>{let u=r;if(u){r=null,n=null;try{let d=await e(...u.args);u.resolve(d)}catch(d){u.reject(d)}}},t),c};return i.cancel=()=>{n&&(clearTimeout(n),n=null),r&&(r.reject(new Error("Cancelled")),r=null)},i},dE=e=>typeof e=="string"?e==="Cancelled"||e==="AbortError":e instanceof Error?e.message==="Cancelled"||e.name==="AbortError":!1,so=e=>({items:e,enableForwardStability:!0}),Gu=new iE,pE=async({monaco:e,mdl:t,pos:n,token:r,isCompletionAccepted:i,options:s})=>{let{trigger:a=k1,enableCaching:l=Y4,allowFollowUpCompletions:c=Q4,onError:u,requestHandler:d}=s;if(l&&!i){let f=Gu.get(n,t).map(p=>({insertText:p.completion,range:p.range}));if(f.length>0)return so(f)}if(r.isCancellationRequested||!c&&i)return so([]);try{let f=uE(async m=>{var j,g;(j=s.onCompletionRequested)==null||j.call(s,m);let v;if(d)v=await d(m);else if(s.endpoint)v=await lE({endpoint:s.endpoint,...m});else throw new Error('No endpoint specified for completion request. Please set the "endpoint" option in registerCompletion, or provide a custom requestHandler.');if(v.error)throw new Error(v.error);return(g=s.onCompletionRequestFinished)==null||g.call(s,m,v),v},{onTyping:X4,onIdle:Z4,onDemand:eE}[a]);r.onCancellationRequested(()=>{f.cancel()});let p=cE({pos:n,mdl:t,options:s}),{completion:h}=await f({body:{completionMetadata:p}});if(h){let m=new oE(h).removeMarkdownCodeSyntax().removeExcessiveNewlines().removeInvalidLineBreaks().build(),v=new aE(e);return l&&Gu.add({completion:m,range:v.computeCacheRange(n,m),textBeforeCursor:Ep(n,t)}),so([{insertText:m,range:v.computeInsertionRange(n,m,t)}])}}catch(f){if(dE(f))return so([]);u?u(f):Ka.warn("Cannot provide completion",f)}return so([])},zp=new WeakMap,zl=e=>zp.get(e),fE=(e,t)=>{zp.set(e,t)},$m=e=>{zp.delete(e)},hE=e=>({isCompletionAccepted:!1,isCompletionVisible:!1,isExplicitlyTriggered:!1,hasRejectedCurrentCompletion:!1,options:e}),mE=(e,t)=>{let n=zl(e);!n||!n.options||(n.options={...n.options,...t})},gE=(e,t,n)=>{let r=zl(t);return r?e.languages.registerInlineCompletionsProvider(n.language,{provideInlineCompletions:(i,s,a,l)=>{if(i!==t.getModel())return{items:[]};let c=r.options||n;if(!(c.trigger==="onDemand"&&!r.isExplicitlyTriggered||c.triggerIf&&!c.triggerIf({text:nE(t),position:s,triggerType:c.trigger??k1})))return pE({monaco:e,mdl:i,pos:s,token:l,isCompletionAccepted:r.isCompletionAccepted,options:c})},handleItemDidShow:(i,s,a)=>{var l,c;r.isExplicitlyTriggered=!1,r.hasRejectedCurrentCompletion=!1,!r.isCompletionAccepted&&(r.isCompletionVisible=!0,(c=(l=r.options||n).onCompletionShown)==null||c.call(l,a,s.range))},freeInlineCompletions:()=>{}}):null},xE={TAB:(e,t)=>t.keyCode===e.KeyCode.Tab,CMD_RIGHT_ARROW:(e,t)=>t.keyCode===e.KeyCode.RightArrow&&t.metaKey},yE=class{constructor(e,t,n){this.monaco=e,this.state=t,this.initialOptions=n}handleKeyEvent(e){let t=this.state.options||this.initialOptions,n={monaco:this.monaco,event:e,state:this.state,options:t};this.handleCompletionAcceptance(n),this.handleCompletionRejection(n)}handleCompletionAcceptance(e){var t,n;return e.state.isCompletionVisible&&this.isAcceptanceKey(e.event)?((n=(t=e.options).onCompletionAccepted)==null||n.call(t),e.state.isCompletionAccepted=!0,e.state.isCompletionVisible=!1,!0):(e.state.isCompletionAccepted=!1,!1)}handleCompletionRejection(e){var t,n;return this.shouldRejectCompletion(e)?((n=(t=e.options).onCompletionRejected)==null||n.call(t),e.state.hasRejectedCurrentCompletion=!0,!0):!1}shouldRejectCompletion(e){return e.state.isCompletionVisible&&!e.state.hasRejectedCurrentCompletion&&!e.state.isCompletionAccepted&&!this.isAcceptanceKey(e.event)}isAcceptanceKey(e){return Object.values(xE).some(t=>t(this.monaco,e))}},vE=(e,t,n,r)=>{let i=new yE(e,n,r);return t.onKeyDown(s=>i.handleKeyEvent(s))},S1=(e,t,n)=>{let r=[];fE(t,hE(n)),t.updateOptions({inlineSuggest:{enabled:!0}});try{let i=zl(t);if(!i)return Ka.warn("Completion is not registered properly. State not found."),wE();let s=gE(e,t,n);s&&r.push(s);let a=vE(e,t,i,n);return r.push(a),{deregister:()=>{for(let l of r)l.dispose();Gu.clear(),$m(t)},trigger:()=>bE(t),updateOptions:l=>{mE(t,l(i.options||n))}}}catch(i){return n.onError?n.onError(i):Ka.report(i),{deregister:()=>{for(let s of r)s.dispose();$m(t)},trigger:()=>{},updateOptions:()=>{}}}},bE=e=>{let t=zl(e);if(!t){Ka.warn("Completion is not registered. Use `registerCompletion` to register completion first.");return}t.isExplicitlyTriggered=!0,e.trigger("keyboard","editor.action.inlineSuggest.trigger",{})},wE=()=>({deregister:()=>{},trigger:()=>{},updateOptions:()=>{}});function kE(){return`tool_${Date.now().toString(36)}`}function jE(e){return/^[a-zA-Z0-9_]+$/.test(e)}const _E=`def my_tool(tool_context: ToolContext, param1: str) -> dict:
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
`;function SE({onSelectTool:e}){const{project:t,updateProject:n,addCustomTool:r,updateCustomTool:i,removeCustomTool:s,selectedToolId:a,setSelectedToolId:l,builtinTools:c,mcpServers:u}=yt(),[d,f]=k.useState(""),[p,h]=k.useState(null),[m,v]=k.useState("tools"),[j,g]=k.useState(null),[x,w]=k.useState(""),[_,z]=k.useState(!1),[C,R]=k.useState(!1),[E,U]=k.useState(!1),[N,$]=k.useState(null),[G,Y]=k.useState(null),[A,D]=k.useState({}),[P,M]=k.useState({}),[B,O]=k.useState("");if(!t)return null;const b=t.mcp_servers||[],W=t.custom_tools.find(L=>L.id===a),H=b.find(L=>L.name===j);function y(L){l(L),e==null||e(L)}k.useEffect(()=>{W&&(f(W.code),Y(null))},[a]),k.useEffect(()=>{H&&(w(JSON.stringify(H,null,2)),z(!1))},[j]),k.useEffect(()=>{if(!t)return;const L=S(t.mcp_servers||[]);O(JSON.stringify(L,null,2))},[t==null?void 0:t.mcp_servers]),k.useEffect(()=>{if(m==="mcp"&&b.length>0){const L=b.filter(J=>!A[J.name]||A[J.name]==="unknown");L.length>0&&L.forEach(J=>{ye(J.name)})}},[m,b.length]);function S(L){const J={};for(const ne of L){const pe={};ne.connection_type==="stdio"?(pe.command=ne.command||"",pe.args=ne.args||[],Object.keys(ne.env||{}).length>0&&(pe.env=ne.env)):ne.connection_type==="sse"&&(pe.url=ne.url||"",Object.keys(ne.headers||{}).length>0&&(pe.headers=ne.headers)),pe.timeout=ne.timeout||60,ne.tool_filter&&(pe.tool_filter=ne.tool_filter),ne.tool_name_prefix&&(pe.tool_name_prefix=ne.tool_name_prefix),J[ne.name]=pe}return{mcpServers:J}}function F(L){const J=[];for(const[ne,pe]of Object.entries(L.mcpServers||{})){const K={name:ne,description:pe.description||"",connection_type:pe.url?"sse":"stdio",command:pe.command,args:pe.args||[],env:pe.env||{},url:pe.url,headers:pe.headers||{},timeout:pe.timeout||30,tool_filter:pe.tool_filter||null,tool_name_prefix:pe.tool_name_prefix};J.push(K)}return J}function te(L){L!==void 0&&O(L)}function ae(){try{const L=JSON.parse(B),J=F(L);n({mcp_servers:J})}catch(L){alert("Invalid JSON: "+L.message)}}async function ye(L){const J=b.find(ne=>ne.name===L);if(J){D(ne=>({...ne,[L]:"testing"})),M(ne=>({...ne,[L]:""}));try{const ne=await Pu({connection_type:J.connection_type,command:J.command,args:J.args,env:J.env,url:J.url,headers:J.headers,timeout:J.timeout});D(pe=>({...pe,[L]:ne.success?"connected":"error"})),!ne.success&&ne.error&&M(pe=>({...pe,[L]:ne.error||"Unknown error"}))}catch(ne){D(pe=>({...pe,[L]:"error"})),M(pe=>({...pe,[L]:ne.message}))}}}function ee(L){const J=u.find(pe=>pe.name===L);if(!J)return;if(b.some(pe=>pe.name===L)){alert(`Server "${L}" is already configured`);return}const ne={name:J.name,description:J.description||"",connection_type:J.connection_type,command:J.command,args:J.args||[],env:J.env||{},url:J.url,headers:J.headers||{},timeout:J.timeout||30,tool_filter:J.tool_filter||null,tool_name_prefix:J.tool_name_prefix};n({mcp_servers:[...b,ne]})}async function le(){for(const L of b)await ye(L.name)}function be(){const L=kE();r({id:L,name:"new_tool",description:"",module_path:"tools.custom",code:_E,state_keys_used:[]}),y(L)}function Se(L,J){J.stopPropagation(),confirm("Delete this tool?")&&(s(L),a===L&&(e==null||e(null)))}function me(L){W&&(L.name!==void 0&&(L.name===""||jE(L.name)?Y(null):Y("Name can only contain letters, numbers, and underscores")),i(W.id,L))}function Ne(L){L!==void 0&&W&&(f(L),me({code:L}))}async function X(){if(W){R(!0);try{const L=await lv(t.id,W.name,W.description,W.state_keys_used);L.success&&L.code?(f(L.code),me({code:L.code})):(console.error("Failed to generate tool code:",L.error),alert("Failed to generate tool code: "+(L.error||"Unknown error")))}catch(L){console.error("Error generating tool code:",L),alert("Error generating tool code: "+L.message)}finally{R(!1)}}}const he=k.useRef(null),Z=k.useCallback((L,J)=>{if(he.current&&typeof he.current=="function")try{he.current()}catch{}try{const ne=S1(J,L,{language:"python",endpoint:"/api/code-completion",trigger:"onTyping"});typeof ne=="function"?he.current=ne:he.current=null}catch{he.current=null}},[]);k.useEffect(()=>()=>{if(he.current&&typeof he.current=="function")try{he.current()}catch{}},[]);function I(L){L!==void 0&&(w(L),z(L!==JSON.stringify(H,null,2)))}function Q(){if(H)try{const L=JSON.parse(x),J=H.name,ne=b.map(pe=>pe.name===J?L:pe);n({mcp_servers:ne}),g(L.name),z(!1)}catch(L){alert("Invalid JSON: "+L.message)}}async function T(){U(!0),$(null);try{const L=JSON.parse(x),J=await Pu({connection_type:L.connection_type,command:L.command,args:L.args,env:L.env,url:L.url,headers:L.headers,timeout:L.timeout||30});if($(J),J.success&&J.tools.length>0){const ne={...L,tool_filter:J.tools.map(pe=>pe.name)};w(JSON.stringify(ne,null,2)),z(!0)}}catch(L){$({success:!1,tools:[],error:L.message})}finally{U(!1)}}const V={};return t.custom_tools.forEach(L=>{const J=L.module_path||"tools";V[J]||(V[J]=[]),V[J].push(L)}),o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"tools-sidebar",children:[o.jsxs("div",{className:"sidebar-tabs",children:[o.jsxs("button",{className:`sidebar-tab ${m==="tools"?"active":""}`,onClick:()=>{v("tools"),g(null)},children:[o.jsx(gn,{size:14}),"Tools"]}),o.jsxs("button",{className:`sidebar-tab ${m==="mcp"?"active":""}`,onClick:()=>{v("mcp"),l(null),h(null),g(null)},children:[o.jsx(ro,{size:14}),"MCP"]})]}),m==="tools"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["Custom Tools (",t.custom_tools.length,")"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:be,children:[o.jsx(nt,{size:14}),"New"]})]}),o.jsxs("div",{className:"tools-tree",children:[c.length>0&&o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(Sj,{size:14}),"Built-in Tools"]}),c.map(L=>o.jsxs("div",{className:`tool-item builtin ${(p==null?void 0:p.name)===L.name?"selected":""}`,onClick:()=>{h(L),y(null),g(null)},children:[o.jsx(Ru,{size:14}),o.jsx("span",{className:"tool-name",children:L.name})]},L.name))]}),t.custom_tools.length===0&&c.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(zn,{size:32}),o.jsx("p",{children:"No tools defined yet"})]}):t.custom_tools.length>0&&Object.entries(V).map(([L,J])=>o.jsxs("div",{className:"module-group",children:[o.jsxs("div",{className:"module-header",children:[o.jsx(bv,{size:14}),L]}),J.map(ne=>o.jsxs("div",{className:`tool-item ${a===ne.id?"selected":""}`,onClick:()=>{y(ne.id),h(null),g(null)},children:[o.jsx(gn,{size:14}),o.jsx("span",{className:"tool-name",children:ne.name}),o.jsx("button",{className:"delete-btn",onClick:pe=>Se(ne.id,pe),children:o.jsx(Je,{size:14})})]},ne.id))]},L))]})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsxs("h3",{children:["MCP Servers (",b.length,")"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:le,title:"Test all server connections",children:o.jsx(Ht,{size:14})})]}),o.jsx("div",{className:"mcp-servers-list",children:b.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(ro,{size:32}),o.jsx("p",{children:"No MCP servers configured"}),o.jsx("p",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Edit the JSON to add servers"})]}):b.map(L=>{const J=A[L.name]||"unknown",ne=P[L.name];return o.jsxs("div",{className:"mcp-server-item-wrapper",children:[o.jsxs("div",{className:"mcp-server-item",children:[o.jsxs("div",{className:"mcp-server-info",children:[o.jsx(ro,{size:14}),o.jsx("span",{className:"mcp-server-name",children:L.name}),o.jsxs("span",{className:`mcp-status-badge ${J}`,children:[J==="testing"?o.jsx(ir,{size:10,className:"spin"}):null,J==="unknown"&&"●",J==="connected"&&"●",J==="error"&&"●"]})]}),o.jsxs("div",{className:"mcp-server-actions",children:[o.jsx("span",{className:"mcp-server-type",children:L.connection_type}),o.jsxs("button",{className:"btn btn-sm",onClick:()=>ye(L.name),disabled:J==="testing",title:"Test server connection",style:{display:"flex",alignItems:"center",gap:4},children:[J==="testing"?o.jsx(ir,{size:12,className:"spin"}):o.jsx(Ht,{size:12}),o.jsx("span",{style:{fontSize:11},children:"Test"})]})]})]}),J==="error"&&ne&&o.jsxs("div",{className:"mcp-server-error",children:[o.jsx("span",{style:{fontWeight:500,color:"var(--error)"},children:"Error:"})," ",ne]})]},L.name)})})]})]}),o.jsx("div",{className:"tool-editor",children:p?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Ru,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:p.name}),o.jsx("span",{className:"badge badge-muted",children:"Built-in"})]}),o.jsxs("div",{className:"builtin-tool-info",children:[o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("p",{children:p.description||"No description available."})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Usage"}),o.jsx("p",{children:"This is a built-in tool provided by ADK. Add it to any LLM agent's tools list to enable it."}),o.jsxs("code",{children:['tools: ["',p.name,'"]']})]}),o.jsxs("div",{className:"info-section",children:[o.jsx("h4",{children:"Note"}),o.jsx("p",{children:"Built-in tools are read-only and cannot be modified. Create a custom tool if you need different behavior."})]})]})]}):W?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(gn,{size:20,style:{color:"var(--accent-primary)"}}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx("input",{type:"text",value:W.name,onChange:L=>me({name:L.target.value}),placeholder:"Tool name",style:{borderColor:G?"var(--error)":void 0}}),G&&o.jsx("span",{style:{fontSize:11,color:"var(--error)",marginTop:-4},children:G})]})]}),o.jsxs("div",{className:"editor-meta",children:[o.jsxs("div",{className:"meta-field grow",children:[o.jsx("label",{children:"Description"}),o.jsx("input",{type:"text",value:W.description,onChange:L=>me({description:L.target.value}),placeholder:"What does this tool do?"})]}),o.jsxs("div",{className:"meta-field",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:W.module_path,onChange:L=>me({module_path:L.target.value}),placeholder:"tools.custom",style:{width:180}})]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:X,disabled:C||!W.name||!W.description,title:!W.name||!W.description?"Add a name and description first":"Generate code using AI",children:C?o.jsxs(o.Fragment,{children:[o.jsx(ir,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(bi,{size:14}),"Write Tool"]})}),o.jsx("span",{className:"action-hint",children:"AI will generate code based on the tool name, description, and selected state keys"})]}),o.jsx("div",{className:"code-editor",children:o.jsx(on,{height:"100%",language:"python",theme:"vs-dark",value:d,onChange:Ne,onMount:Z,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12}}})}),o.jsxs("div",{className:"state-keys-panel",children:[o.jsxs("h4",{children:[o.jsx(ap,{size:14})," State Keys Used"]}),o.jsx("div",{className:"state-key-chips",children:t.app.state_keys.length===0?o.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:"No state keys defined. Add them in App Config."}):t.app.state_keys.map(L=>{const J=W.state_keys_used.includes(L.name);return o.jsxs("label",{className:`state-key-chip ${J?"selected":""}`,title:L.description,children:[o.jsx("input",{type:"checkbox",checked:J,onChange:ne=>{const pe=ne.target.checked?[...W.state_keys_used,L.name]:W.state_keys_used.filter(K=>K!==L.name);me({state_keys_used:pe})}}),L.name,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:11},children:["(",L.type,")"]})]},L.name)})})]})]}):H?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(ro,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:H.name}),o.jsx("span",{className:"badge badge-info",children:H.connection_type}),_&&o.jsx("span",{className:"unsaved-badge",children:"Unsaved"}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:T,disabled:E,title:"Test connection and discover available tools",children:[E?o.jsx(ir,{size:14,className:"spin"}):o.jsx(sp,{size:14}),E?"Testing...":"Test Connection"]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:Q,disabled:!_,children:[o.jsx(Ha,{size:14}),"Save"]})]}),N&&o.jsx("div",{className:`mcp-test-result ${N.success?"success":"error"}`,children:N.success?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"test-result-header",children:["✓ Connected! Found ",N.tools.length," tools"]}),N.tools.length>0&&o.jsxs("div",{className:"test-result-tools",children:[o.jsx("strong",{children:"Available tools:"}),o.jsx("ul",{children:N.tools.map(L=>o.jsxs("li",{children:[o.jsx("code",{children:L.name}),L.description&&o.jsxs("span",{children:[" — ",L.description]})]},L.name))}),o.jsx("p",{className:"hint",children:'The tool_filter has been updated with these tools. Click "Save" to apply.'})]})]}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"test-result-header",children:"✗ Connection failed"}),o.jsx("div",{className:"test-result-error",children:N.error})]})}),o.jsx("div",{className:"mcp-info",children:o.jsx("p",{children:'Configure your MCP server using JSON. Click "Test Connection" to verify and discover available tools.'})}),o.jsx("div",{className:"code-editor",children:o.jsx(on,{height:"100%",language:"json",theme:"vs-dark",value:x,onChange:I,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},formatOnPaste:!0}})}),o.jsxs("div",{className:"mcp-help",children:[o.jsx("h4",{children:"Schema Reference"}),o.jsxs("div",{className:"schema-fields",children:[o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"name"}),o.jsx("span",{children:"Unique identifier for this server"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"description"}),o.jsx("span",{children:"Human-readable description"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"connection_type"}),o.jsx("span",{children:'"stdio" | "sse" | "http"'})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"command"}),o.jsx("span",{children:"Command to run (for stdio)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"args"}),o.jsx("span",{children:"Array of command arguments"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"env"}),o.jsx("span",{children:"Environment variables object"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"url"}),o.jsx("span",{children:"Server URL (for sse/http)"})]}),o.jsxs("div",{className:"schema-field",children:[o.jsx("code",{children:"tool_filter"}),o.jsx("span",{children:"Array of tool names to include (null/omit = all tools, [] = no tools)"})]})]})]})]}):m==="mcp"?o.jsxs("div",{className:"mcp-json-editor",children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(ro,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("span",{style:{fontSize:"1.1rem",fontWeight:600},children:"mcp.json"}),o.jsx("span",{className:"badge badge-muted",children:"Model Context Protocol"}),o.jsxs("select",{value:"",onChange:L=>{L.target.value&&ee(L.target.value)},style:{padding:"6px 10px",fontSize:"12px",borderRadius:"6px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",color:"var(--text-primary)"},children:[o.jsx("option",{value:"",children:"+ Add known server..."}),u.filter(L=>!b.some(J=>J.name===L.name)).map(L=>o.jsxs("option",{value:L.name,children:[L.name," - ",L.description||"No description"]},L.name))]}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:ae,children:[o.jsx(Ha,{size:14}),"Apply Changes"]})]}),o.jsx("div",{className:"mcp-json-info",children:o.jsxs("p",{children:["Configure your MCP servers using the standard ",o.jsx("code",{children:"mcp.json"})," format. Select a known server from the dropdown to add its configuration.",o.jsx("br",{}),o.jsxs("small",{style:{color:"var(--text-muted)"},children:["💡 Tip: Increase ",o.jsx("code",{children:"timeout"})," (in seconds) for slow-starting servers like npm-based ones."]})]})}),o.jsx("div",{className:"editor-content",style:{flex:1},children:o.jsx(on,{height:"100%",defaultLanguage:"json",value:B,onChange:te,theme:"vs-dark",options:{minimap:{enabled:!1},fontSize:14,lineNumbers:"on",scrollBeyondLastLine:!1,wordWrap:"on",tabSize:2,formatOnPaste:!0,formatOnType:!0}})})]}):o.jsxs("div",{className:"empty-state",children:[o.jsx(zn,{size:48}),o.jsxs("p",{children:["Select a tool to view",o.jsx("br",{}),"or create a new custom tool"]})]})})]})}function CE(){return`callback_${Date.now().toString(36)}`}function Dm(e){return/^[a-zA-Z0-9_]+$/.test(e)}function C1(e){switch(e){case"before_agent":case"after_agent":return`from google.adk.agents.callback_context import CallbackContext
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
`;default:return C1("before_agent")}}function NE({onSelectCallback:e}){var E,U;const{project:t,updateProject:n,addCustomCallback:r,updateCustomCallback:i,removeCustomCallback:s}=yt(),[a,l]=k.useState(""),[c,u]=k.useState(null),[d,f]=k.useState(null),[p,h]=k.useState(!1),m=k.useRef(null);if(!t)return null;const v=t.custom_callbacks||[],j=v.find(N=>N.id===c);function g(N){u(N),e==null||e(N)}k.useEffect(()=>{j?(l(j.code),f(null)):l("")},[c,j]);function x(){const N=CE(),$="new_callback",G={id:N,name:$,description:"",module_path:`callbacks.${$}`,code:C1("before_agent"),state_keys_used:[]};r(G),g(N)}function w(N,$){$.stopPropagation(),confirm("Delete this callback?")&&(s(N),c===N&&(e==null||e(null),u(null),l("")))}function _(){if(!c)return;const N=v.find(Y=>Y.id===c);if(!N)return;const $=N.name.trim();if(!$){alert("Please enter a name");return}if(!Dm($)){f("Name must contain only alphanumeric characters and underscores");return}if(v.find(Y=>Y.name===$&&Y.id!==N.id)){f("A callback with this name already exists");return}i(N.id,{code:a,name:$,description:N.description,module_path:`callbacks.${$}`,state_keys_used:N.state_keys_used}),f(null)}function z(N,$){m.current=$;try{S1($,{endpoint:"/api/code-completion",language:"python"})}catch(G){console.warn("Failed to register Monacopilot completion:",G)}}async function C(){if(j){h(!0);try{let N="before_agent";const $=j.name.toLowerCase(),G=j.description.toLowerCase();$.includes("after_agent")||G.includes("after agent")?N="after_agent":$.includes("before_model")||G.includes("before model")?N="before_model":$.includes("after_model")||G.includes("after model")?N="after_model":$.includes("before_tool")||G.includes("before tool")?N="before_tool":$.includes("after_tool")||G.includes("after tool")?N="after_tool":($.includes("before_agent")||G.includes("before agent"))&&(N="before_agent");const Y=await cv(t.id,j.name,j.description,N,j.state_keys_used);Y.success&&Y.code?(l(Y.code),i(j.id,{code:Y.code})):(console.error("Failed to generate callback code:",Y.error),alert("Failed to generate callback code: "+(Y.error||"Unknown error")))}catch(N){console.error("Error generating callback code:",N),alert("Error generating callback code: "+N.message)}finally{h(!1)}}}const R=((U=(E=t.app)==null?void 0:E.state_keys)==null?void 0:U.map(N=>N.name))||[];return o.jsxs("div",{className:"tools-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"tools-sidebar",children:[o.jsxs("div",{className:"tools-sidebar-header",children:[o.jsx("h3",{children:"Callbacks"}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:x,title:"Add Callback",children:o.jsx(nt,{size:16})})]}),o.jsx("div",{className:"tools-list",children:v.length===0?o.jsx("div",{style:{padding:"16px",color:"var(--text-secondary)",fontSize:"14px"},children:"No callbacks yet. Click + to add one."}):v.map(N=>o.jsxs("div",{className:`tool-item ${c===N.id?"selected":""}`,onClick:()=>g(N.id),children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{className:"tool-item-name",children:N.name}),N.description&&o.jsx("div",{className:"tool-item-type",style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:N.description})]}),o.jsx("div",{className:"tool-item-actions",children:o.jsx("button",{className:"btn btn-icon btn-sm",onClick:$=>w(N.id,$),title:"Delete",children:o.jsx(Je,{size:14})})})]},N.id))})]}),o.jsx("div",{className:"tools-editor",children:j?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"tools-editor-header",children:[o.jsx("h3",{children:"Edit Callback"}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:_,children:[o.jsx(Ha,{size:16,style:{marginRight:"6px"}}),"Save"]})]}),o.jsxs("div",{className:"tools-editor-content",style:{padding:"16px",overflowY:"auto"},children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Name"}),o.jsx("input",{type:"text",value:j.name,onChange:N=>{const $=N.target.value;i(j.id,{name:$,module_path:`callbacks.${$.trim()||"callback"}`}),d&&Dm($)&&f(null)},className:d?"error":""}),d&&o.jsx("div",{className:"error-message",children:d})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{value:j.description,onChange:N=>i(j.id,{description:N.target.value}),rows:2,placeholder:"Describe what this callback does..."})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"Module Path"}),o.jsx("input",{type:"text",value:j.module_path,onChange:N=>i(j.id,{module_path:N.target.value}),placeholder:"callbacks.custom"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"State Keys Used"}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"8px"},children:R.map(N=>{const $=j.state_keys_used.includes(N);return o.jsxs("button",{type:"button",className:`btn btn-sm ${$?"btn-primary":"btn-secondary"}`,onClick:()=>{const G=$?j.state_keys_used.filter(Y=>Y!==N):[...j.state_keys_used,N];i(j.id,{state_keys_used:G})},children:[o.jsx(ap,{size:12,style:{marginRight:"4px"}}),N]},N)})}),R.length===0&&o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px"},children:"No state keys defined in App Config"})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"8px"},children:[o.jsx("label",{children:"Code"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:C,disabled:p||!j.name,title:j.name?"Generate code using AI":"Add a name first",children:p?o.jsxs(o.Fragment,{children:[o.jsx(ir,{size:14,className:"spinning"}),"Generating..."]}):o.jsxs(o.Fragment,{children:[o.jsx(bi,{size:14}),"Generate"]})})]}),o.jsx("div",{style:{fontSize:"12px",color:"var(--text-secondary)",marginBottom:"8px"},children:"AI will generate code based on the callback name, description, and selected state keys"}),o.jsx("div",{className:"code-editor-container",children:o.jsx(on,{height:"100%",language:"python",theme:"vs-dark",value:a,onChange:N=>l(N||""),onMount:z,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0}})})]})]})]}):o.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-secondary)"},children:"Select a callback to edit, or create a new one"})})]})}function EE(e){try{const t=new URL(e),n=t.host,r=t.pathname,i=[{pattern:n,label:`${n} (exact domain)`},{pattern:`${n}/*`,label:`${n}/* (domain + any path)`}],s=n.split(".");if(s.length>2){const a=s.slice(-2).join(".");i.push({pattern:`*.${a}`,label:`*.${a} (all subdomains)`})}if(r&&r!=="/"){const a=r.split("/").filter(Boolean);a.length>0&&i.push({pattern:`${n}/${a[0]}/*`,label:`${n}/${a[0]}/* (specific path)`})}return i}catch{return[{pattern:e,label:e}]}}const Fe={overlay:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999},dialog:{backgroundColor:"#12121a",border:"1px solid rgba(245, 158, 11, 0.5)",borderRadius:8,boxShadow:"0 25px 50px -12px rgba(0, 0, 0, 0.5)",width:500,maxWidth:"90vw",overflow:"hidden"},header:{display:"flex",alignItems:"center",gap:8,padding:12,borderBottom:"1px solid #374151",backgroundColor:"rgba(120, 53, 15, 0.2)"},headerIcon:{color:"#fbbf24"},headerTitle:{fontWeight:600,color:"#fcd34d",fontSize:14},closeButton:{marginLeft:"auto",background:"none",border:"none",color:"#6b7280",cursor:"pointer",padding:4,display:"flex",alignItems:"center"},content:{padding:16,display:"flex",flexDirection:"column",gap:16},sourceText:{fontSize:13,color:"#9ca3af"},requestBox:{backgroundColor:"#0a0a0f",borderRadius:6,border:"1px solid #374151",padding:12,fontFamily:"'SF Mono', 'Consolas', monospace",fontSize:13},methodBadge:e=>({fontWeight:700,color:e==="POST"?"#4ade80":e==="GET"?"#60a5fa":"#9ca3af",marginRight:8}),urlText:{color:"#d1d5db",wordBreak:"break-all"},headersText:{marginTop:8,fontSize:11,color:"#6b7280"},label:{fontSize:13,color:"#9ca3af",marginBottom:6},select:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",cursor:"pointer",appearance:"none",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 12px center",paddingRight:36},customInput:{width:"100%",padding:"10px 12px",backgroundColor:"#1a1a24",border:"1px solid #4b5563",borderRadius:6,fontSize:13,color:"#e5e7eb",fontFamily:"'SF Mono', 'Consolas', monospace"},radioGroup:{display:"flex",gap:16,marginTop:8},radioLabel:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#9ca3af",cursor:"pointer"},backLink:{marginLeft:"auto",fontSize:12,color:"#6b7280",background:"none",border:"none",cursor:"pointer"},checkboxLabel:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#9ca3af",cursor:"pointer"},footer:{display:"flex",alignItems:"center",gap:8,padding:12,borderTop:"1px solid #374151",backgroundColor:"#0a0a0f"},button:e=>{const t={display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:13,fontWeight:500,cursor:"pointer",border:"1px solid",transition:"all 0.15s ease"};switch(e){case"deny":return{...t,backgroundColor:"rgba(220, 38, 38, 0.2)",borderColor:"rgba(239, 68, 68, 0.5)",color:"#f87171"};case"once":return{...t,backgroundColor:"rgba(75, 85, 99, 0.2)",borderColor:"rgba(107, 114, 128, 0.5)",color:"#d1d5db"};case"pattern":return{...t,backgroundColor:"rgba(22, 163, 74, 0.2)",borderColor:"rgba(34, 197, 94, 0.5)",color:"#4ade80"}}},timerContainer:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,color:"#6b7280",fontSize:13},progressBar:{height:3,backgroundColor:"#1f2937"},progressFill:e=>({height:"100%",backgroundColor:"#f59e0b",transition:"width 1s linear",width:`${e}%`})};function zE({request:e,timeout:t,onApprove:n,onDeny:r,onClose:i}){const[s,a]=k.useState(""),[l,c]=k.useState("exact"),[u,d]=k.useState(!1),[f,p]=k.useState(""),[h,m]=k.useState(!1),[v,j]=k.useState(t),g=EE(e.url);k.useEffect(()=>{g.length>0&&!s&&a(g[0].pattern)},[g,s]),k.useEffect(()=>{const R=setInterval(()=>{j(E=>E<=1?(r(),0):E-1)},1e3);return()=>clearInterval(R)},[r]);const x=k.useCallback(()=>{n()},[n]),w=k.useCallback(()=>{n(h?f:s,l,u)},[n,h,f,s,l,u]),_=v/t*100,z=e.source.startsWith("mcp:"),C=z?e.source.substring(4):"agent";return o.jsx("div",{style:Fe.overlay,children:o.jsxs("div",{style:Fe.dialog,children:[o.jsxs("div",{style:Fe.header,children:[o.jsx(kl,{size:18,style:Fe.headerIcon}),o.jsx("span",{style:Fe.headerTitle,children:"Network Request Approval"}),o.jsx("button",{style:Fe.closeButton,onClick:i,children:o.jsx(Ui,{size:16})})]}),o.jsxs("div",{style:Fe.content,children:[o.jsx("div",{style:Fe.sourceText,children:z?o.jsxs(o.Fragment,{children:['MCP server "',o.jsx("span",{style:{color:"#22d3ee"},children:C}),'" wants to connect to:']}):o.jsx(o.Fragment,{children:"Agent wants to connect to:"})}),o.jsxs("div",{style:Fe.requestBox,children:[o.jsxs("div",{children:[o.jsx("span",{style:Fe.methodBadge(e.method),children:e.method}),o.jsx("span",{style:Fe.urlText,children:e.url})]}),e.headers&&Object.keys(e.headers).length>0&&o.jsxs("div",{style:Fe.headersText,children:["Headers: ",Object.keys(e.headers).join(", ")]})]}),o.jsxs("div",{children:[o.jsx("div",{style:Fe.label,children:"Allow pattern:"}),h?o.jsxs("div",{children:[o.jsx("input",{type:"text",value:f,onChange:R=>p(R.target.value),placeholder:"e.g., *.example.com/*",style:Fe.customInput}),o.jsxs("div",{style:Fe.radioGroup,children:[o.jsxs("label",{style:Fe.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="wildcard",onChange:()=>c("wildcard")}),"Wildcard"]}),o.jsxs("label",{style:Fe.radioLabel,children:[o.jsx("input",{type:"radio",checked:l==="regex",onChange:()=>c("regex")}),"Regex"]}),o.jsx("button",{onClick:()=>m(!1),style:Fe.backLink,children:"← Back to suggestions"})]})]}):o.jsxs("select",{value:s,onChange:R=>{R.target.value==="__custom__"?(m(!0),p(s)):a(R.target.value)},style:Fe.select,children:[g.map(R=>o.jsx("option",{value:R.pattern,children:R.label},R.pattern)),o.jsx("option",{value:"__custom__",children:"Custom pattern..."})]})]}),o.jsxs("label",{style:Fe.checkboxLabel,children:[o.jsxs("span",{className:"toggle-switch",children:[o.jsx("input",{type:"checkbox",checked:u,onChange:R=>d(R.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),"Save to project (persists across sessions)"]})]}),o.jsxs("div",{style:Fe.footer,children:[o.jsxs("button",{onClick:r,style:Fe.button("deny"),children:[o.jsx(xj,{size:14}),"Deny"]}),o.jsxs("button",{onClick:x,style:Fe.button("once"),children:[o.jsx(ip,{size:14}),"Allow Once"]}),o.jsxs("button",{onClick:w,style:Fe.button("pattern"),children:[o.jsx(Cv,{size:14}),"Allow Pattern"]}),o.jsxs("div",{style:Fe.timerContainer,children:[o.jsx(Li,{size:14}),o.jsxs("span",{children:[v,"s"]})]})]}),o.jsx("div",{style:Fe.progressBar,children:o.jsx("div",{style:Fe.progressFill(_)})})]})})}var TE={value:()=>{}};function ms(){for(var e=0,t=arguments.length,n={},r;e<t;++e){if(!(r=arguments[e]+"")||r in n||/[\s.]/.test(r))throw new Error("illegal type: "+r);n[r]=[]}return new fa(n)}function fa(e){this._=e}function AE(e,t){return e.trim().split(/^|\s+/).map(function(n){var r="",i=n.indexOf(".");if(i>=0&&(r=n.slice(i+1),n=n.slice(0,i)),n&&!t.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:r}})}fa.prototype=ms.prototype={constructor:fa,on:function(e,t){var n=this._,r=AE(e+"",n),i,s=-1,a=r.length;if(arguments.length<2){for(;++s<a;)if((i=(e=r[s]).type)&&(i=ME(n[i],e.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(i=(e=r[s]).type)n[i]=Fm(n[i],e.name,t);else if(t==null)for(i in n)n[i]=Fm(n[i],e.name,null);return this},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new fa(e)},call:function(e,t){if((i=arguments.length-2)>0)for(var n=new Array(i),r=0,i,s;r<i;++r)n[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(s=this._[e],r=0,i=s.length;r<i;++r)s[r].value.apply(t,n)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,s=r.length;i<s;++i)r[i].value.apply(t,n)}};function ME(e,t){for(var n=0,r=e.length,i;n<r;++n)if((i=e[n]).name===t)return i.value}function Fm(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=TE,e=e.slice(0,r).concat(e.slice(r+1));break}return n!=null&&e.push({name:t,value:n}),e}var Ku="http://www.w3.org/1999/xhtml";const Bm={svg:"http://www.w3.org/2000/svg",xhtml:Ku,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Tl(e){var t=e+="",n=t.indexOf(":");return n>=0&&(t=e.slice(0,n))!=="xmlns"&&(e=e.slice(n+1)),Bm.hasOwnProperty(t)?{space:Bm[t],local:e}:e}function PE(e){return function(){var t=this.ownerDocument,n=this.namespaceURI;return n===Ku&&t.documentElement.namespaceURI===Ku?t.createElement(e):t.createElementNS(n,e)}}function LE(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function N1(e){var t=Tl(e);return(t.local?LE:PE)(t)}function RE(){}function Tp(e){return e==null?RE:function(){return this.querySelector(e)}}function IE(e){typeof e!="function"&&(e=Tp(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=new Array(a),c,u,d=0;d<a;++d)(c=s[d])&&(u=e.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u);return new Yt(r,this._parents)}function OE(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function $E(){return[]}function E1(e){return e==null?$E:function(){return this.querySelectorAll(e)}}function DE(e){return function(){return OE(e.apply(this,arguments))}}function FE(e){typeof e=="function"?e=DE(e):e=E1(e);for(var t=this._groups,n=t.length,r=[],i=[],s=0;s<n;++s)for(var a=t[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&(r.push(e.call(c,c.__data__,u,a)),i.push(c));return new Yt(r,i)}function z1(e){return function(){return this.matches(e)}}function T1(e){return function(t){return t.matches(e)}}var BE=Array.prototype.find;function UE(e){return function(){return BE.call(this.children,e)}}function VE(){return this.firstElementChild}function WE(e){return this.select(e==null?VE:UE(typeof e=="function"?e:T1(e)))}var HE=Array.prototype.filter;function qE(){return Array.from(this.children)}function JE(e){return function(){return HE.call(this.children,e)}}function GE(e){return this.selectAll(e==null?qE:JE(typeof e=="function"?e:T1(e)))}function KE(e){typeof e!="function"&&(e=z1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new Yt(r,this._parents)}function A1(e){return new Array(e.length)}function YE(){return new Yt(this._enter||this._groups.map(A1),this._parents)}function Ya(e,t){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=t}Ya.prototype={constructor:Ya,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,t){return this._parent.insertBefore(e,t)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function QE(e){return function(){return e}}function XE(e,t,n,r,i,s){for(var a=0,l,c=t.length,u=s.length;a<u;++a)(l=t[a])?(l.__data__=s[a],r[a]=l):n[a]=new Ya(e,s[a]);for(;a<c;++a)(l=t[a])&&(i[a]=l)}function ZE(e,t,n,r,i,s,a){var l,c,u=new Map,d=t.length,f=s.length,p=new Array(d),h;for(l=0;l<d;++l)(c=t[l])&&(p[l]=h=a.call(c,c.__data__,l,t)+"",u.has(h)?i[l]=c:u.set(h,c));for(l=0;l<f;++l)h=a.call(e,s[l],l,s)+"",(c=u.get(h))?(r[l]=c,c.__data__=s[l],u.delete(h)):n[l]=new Ya(e,s[l]);for(l=0;l<d;++l)(c=t[l])&&u.get(p[l])===c&&(i[l]=c)}function ez(e){return e.__data__}function tz(e,t){if(!arguments.length)return Array.from(this,ez);var n=t?ZE:XE,r=this._parents,i=this._groups;typeof e!="function"&&(e=QE(e));for(var s=i.length,a=new Array(s),l=new Array(s),c=new Array(s),u=0;u<s;++u){var d=r[u],f=i[u],p=f.length,h=nz(e.call(d,d&&d.__data__,u,r)),m=h.length,v=l[u]=new Array(m),j=a[u]=new Array(m),g=c[u]=new Array(p);n(d,f,v,j,g,h,t);for(var x=0,w=0,_,z;x<m;++x)if(_=v[x]){for(x>=w&&(w=x+1);!(z=j[w])&&++w<m;);_._next=z||null}}return a=new Yt(a,r),a._enter=l,a._exit=c,a}function nz(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function rz(){return new Yt(this._exit||this._groups.map(A1),this._parents)}function iz(e,t,n){var r=this.enter(),i=this,s=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),t!=null&&(i=t(i),i&&(i=i.selection())),n==null?s.remove():n(s),r&&i?r.merge(i).order():i}function oz(e){for(var t=e.selection?e.selection():e,n=this._groups,r=t._groups,i=n.length,s=r.length,a=Math.min(i,s),l=new Array(i),c=0;c<a;++c)for(var u=n[c],d=r[c],f=u.length,p=l[c]=new Array(f),h,m=0;m<f;++m)(h=u[m]||d[m])&&(p[m]=h);for(;c<i;++c)l[c]=n[c];return new Yt(l,this._parents)}function sz(){for(var e=this._groups,t=-1,n=e.length;++t<n;)for(var r=e[t],i=r.length-1,s=r[i],a;--i>=0;)(a=r[i])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function az(e){e||(e=lz);function t(f,p){return f&&p?e(f.__data__,p.__data__):!f-!p}for(var n=this._groups,r=n.length,i=new Array(r),s=0;s<r;++s){for(var a=n[s],l=a.length,c=i[s]=new Array(l),u,d=0;d<l;++d)(u=a[d])&&(c[d]=u);c.sort(t)}return new Yt(i,this._parents).order()}function lz(e,t){return e<t?-1:e>t?1:e>=t?0:NaN}function cz(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function uz(){return Array.from(this)}function dz(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length;i<s;++i){var a=r[i];if(a)return a}return null}function pz(){let e=0;for(const t of this)++e;return e}function fz(){return!this.node()}function hz(e){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var i=t[n],s=0,a=i.length,l;s<a;++s)(l=i[s])&&e.call(l,l.__data__,s,i);return this}function mz(e){return function(){this.removeAttribute(e)}}function gz(e){return function(){this.removeAttributeNS(e.space,e.local)}}function xz(e,t){return function(){this.setAttribute(e,t)}}function yz(e,t){return function(){this.setAttributeNS(e.space,e.local,t)}}function vz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttribute(e):this.setAttribute(e,n)}}function bz(e,t){return function(){var n=t.apply(this,arguments);n==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,n)}}function wz(e,t){var n=Tl(e);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((t==null?n.local?gz:mz:typeof t=="function"?n.local?bz:vz:n.local?yz:xz)(n,t))}function M1(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function kz(e){return function(){this.style.removeProperty(e)}}function jz(e,t,n){return function(){this.style.setProperty(e,t,n)}}function _z(e,t,n){return function(){var r=t.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,n)}}function Sz(e,t,n){return arguments.length>1?this.each((t==null?kz:typeof t=="function"?_z:jz)(e,t,n??"")):Ri(this.node(),e)}function Ri(e,t){return e.style.getPropertyValue(t)||M1(e).getComputedStyle(e,null).getPropertyValue(t)}function Cz(e){return function(){delete this[e]}}function Nz(e,t){return function(){this[e]=t}}function Ez(e,t){return function(){var n=t.apply(this,arguments);n==null?delete this[e]:this[e]=n}}function zz(e,t){return arguments.length>1?this.each((t==null?Cz:typeof t=="function"?Ez:Nz)(e,t)):this.node()[e]}function P1(e){return e.trim().split(/^|\s+/)}function Ap(e){return e.classList||new L1(e)}function L1(e){this._node=e,this._names=P1(e.getAttribute("class")||"")}L1.prototype={add:function(e){var t=this._names.indexOf(e);t<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var t=this._names.indexOf(e);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function R1(e,t){for(var n=Ap(e),r=-1,i=t.length;++r<i;)n.add(t[r])}function I1(e,t){for(var n=Ap(e),r=-1,i=t.length;++r<i;)n.remove(t[r])}function Tz(e){return function(){R1(this,e)}}function Az(e){return function(){I1(this,e)}}function Mz(e,t){return function(){(t.apply(this,arguments)?R1:I1)(this,e)}}function Pz(e,t){var n=P1(e+"");if(arguments.length<2){for(var r=Ap(this.node()),i=-1,s=n.length;++i<s;)if(!r.contains(n[i]))return!1;return!0}return this.each((typeof t=="function"?Mz:t?Tz:Az)(n,t))}function Lz(){this.textContent=""}function Rz(e){return function(){this.textContent=e}}function Iz(e){return function(){var t=e.apply(this,arguments);this.textContent=t??""}}function Oz(e){return arguments.length?this.each(e==null?Lz:(typeof e=="function"?Iz:Rz)(e)):this.node().textContent}function $z(){this.innerHTML=""}function Dz(e){return function(){this.innerHTML=e}}function Fz(e){return function(){var t=e.apply(this,arguments);this.innerHTML=t??""}}function Bz(e){return arguments.length?this.each(e==null?$z:(typeof e=="function"?Fz:Dz)(e)):this.node().innerHTML}function Uz(){this.nextSibling&&this.parentNode.appendChild(this)}function Vz(){return this.each(Uz)}function Wz(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Hz(){return this.each(Wz)}function qz(e){var t=typeof e=="function"?e:N1(e);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Jz(){return null}function Gz(e,t){var n=typeof e=="function"?e:N1(e),r=t==null?Jz:typeof t=="function"?t:Tp(t);return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})}function Kz(){var e=this.parentNode;e&&e.removeChild(this)}function Yz(){return this.each(Kz)}function Qz(){var e=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Xz(){var e=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(e,this.nextSibling):e}function Zz(e){return this.select(e?Xz:Qz)}function e3(e){return arguments.length?this.property("__data__",e):this.node().__data__}function t3(e){return function(t){e.call(this,t,this.__data__)}}function n3(e){return e.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}})}function r3(e){return function(){var t=this.__on;if(t){for(var n=0,r=-1,i=t.length,s;n<i;++n)s=t[n],(!e.type||s.type===e.type)&&s.name===e.name?this.removeEventListener(s.type,s.listener,s.options):t[++r]=s;++r?t.length=r:delete this.__on}}}function i3(e,t,n){return function(){var r=this.__on,i,s=t3(t);if(r){for(var a=0,l=r.length;a<l;++a)if((i=r[a]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=s,i.options=n),i.value=t;return}}this.addEventListener(e.type,s,n),i={type:e.type,name:e.name,value:t,listener:s,options:n},r?r.push(i):this.__on=[i]}}function o3(e,t,n){var r=n3(e+""),i,s=r.length,a;if(arguments.length<2){var l=this.node().__on;if(l){for(var c=0,u=l.length,d;c<u;++c)for(i=0,d=l[c];i<s;++i)if((a=r[i]).type===d.type&&a.name===d.name)return d.value}return}for(l=t?i3:r3,i=0;i<s;++i)this.each(l(r[i],t,n));return this}function O1(e,t,n){var r=M1(e),i=r.CustomEvent;typeof i=="function"?i=new i(t,n):(i=r.document.createEvent("Event"),n?(i.initEvent(t,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(t,!1,!1)),e.dispatchEvent(i)}function s3(e,t){return function(){return O1(this,e,t)}}function a3(e,t){return function(){return O1(this,e,t.apply(this,arguments))}}function l3(e,t){return this.each((typeof t=="function"?a3:s3)(e,t))}function*c3(){for(var e=this._groups,t=0,n=e.length;t<n;++t)for(var r=e[t],i=0,s=r.length,a;i<s;++i)(a=r[i])&&(yield a)}var $1=[null];function Yt(e,t){this._groups=e,this._parents=t}function gs(){return new Yt([[document.documentElement]],$1)}function u3(){return this}Yt.prototype=gs.prototype={constructor:Yt,select:IE,selectAll:FE,selectChild:WE,selectChildren:GE,filter:KE,data:tz,enter:YE,exit:rz,join:iz,merge:oz,selection:u3,order:sz,sort:az,call:cz,nodes:uz,node:dz,size:pz,empty:fz,each:hz,attr:wz,style:Sz,property:zz,classed:Pz,text:Oz,html:Bz,raise:Vz,lower:Hz,append:qz,insert:Gz,remove:Yz,clone:Zz,datum:e3,on:o3,dispatch:l3,[Symbol.iterator]:c3};function kt(e){return typeof e=="string"?new Yt([[document.querySelector(e)]],[document.documentElement]):new Yt([[e]],$1)}function d3(e){let t;for(;t=e.sourceEvent;)e=t;return e}function Rn(e,t){if(e=d3(e),t===void 0&&(t=e.currentTarget),t){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}if(t.getBoundingClientRect){var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}}return[e.pageX,e.pageY]}const p3={passive:!1},Zo={capture:!0,passive:!1};function Tc(e){e.stopImmediatePropagation()}function ji(e){e.preventDefault(),e.stopImmediatePropagation()}function D1(e){var t=e.document.documentElement,n=kt(e).on("dragstart.drag",ji,Zo);"onselectstart"in t?n.on("selectstart.drag",ji,Zo):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function F1(e,t){var n=e.document.documentElement,r=kt(e).on("dragstart.drag",null);t&&(r.on("click.drag",ji,Zo),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Ws=e=>()=>e;function Yu(e,{sourceEvent:t,subject:n,target:r,identifier:i,active:s,x:a,y:l,dx:c,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}Yu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function f3(e){return!e.ctrlKey&&!e.button}function h3(){return this.parentNode}function m3(e,t){return t??{x:e.x,y:e.y}}function g3(){return navigator.maxTouchPoints||"ontouchstart"in this}function Um(){var e=f3,t=h3,n=m3,r=g3,i={},s=ms("start","drag","end"),a=0,l,c,u,d,f=0;function p(_){_.on("mousedown.drag",h).filter(r).on("touchstart.drag",j).on("touchmove.drag",g,p3).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(_,z){if(!(d||!e.call(this,_,z))){var C=w(this,t.call(this,_,z),_,z,"mouse");C&&(kt(_.view).on("mousemove.drag",m,Zo).on("mouseup.drag",v,Zo),D1(_.view),Tc(_),u=!1,l=_.clientX,c=_.clientY,C("start",_))}}function m(_){if(ji(_),!u){var z=_.clientX-l,C=_.clientY-c;u=z*z+C*C>f}i.mouse("drag",_)}function v(_){kt(_.view).on("mousemove.drag mouseup.drag",null),F1(_.view,u),ji(_),i.mouse("end",_)}function j(_,z){if(e.call(this,_,z)){var C=_.changedTouches,R=t.call(this,_,z),E=C.length,U,N;for(U=0;U<E;++U)(N=w(this,R,_,z,C[U].identifier,C[U]))&&(Tc(_),N("start",_,C[U]))}}function g(_){var z=_.changedTouches,C=z.length,R,E;for(R=0;R<C;++R)(E=i[z[R].identifier])&&(ji(_),E("drag",_,z[R]))}function x(_){var z=_.changedTouches,C=z.length,R,E;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),R=0;R<C;++R)(E=i[z[R].identifier])&&(Tc(_),E("end",_,z[R]))}function w(_,z,C,R,E,U){var N=s.copy(),$=Rn(U||C,z),G,Y,A;if((A=n.call(_,new Yu("beforestart",{sourceEvent:C,target:p,identifier:E,active:a,x:$[0],y:$[1],dx:0,dy:0,dispatch:N}),R))!=null)return G=A.x-$[0]||0,Y=A.y-$[1]||0,function D(P,M,B){var O=$,b;switch(P){case"start":i[E]=D,b=a++;break;case"end":delete i[E],--a;case"drag":$=Rn(B||M,z),b=a;break}N.call(P,_,new Yu(P,{sourceEvent:M,subject:A,target:p,identifier:E,active:b,x:$[0]+G,y:$[1]+Y,dx:$[0]-O[0],dy:$[1]-O[1],dispatch:N}),R)}}return p.filter=function(_){return arguments.length?(e=typeof _=="function"?_:Ws(!!_),p):e},p.container=function(_){return arguments.length?(t=typeof _=="function"?_:Ws(_),p):t},p.subject=function(_){return arguments.length?(n=typeof _=="function"?_:Ws(_),p):n},p.touchable=function(_){return arguments.length?(r=typeof _=="function"?_:Ws(!!_),p):r},p.on=function(){var _=s.on.apply(s,arguments);return _===s?p:_},p.clickDistance=function(_){return arguments.length?(f=(_=+_)*_,p):Math.sqrt(f)},p}function Mp(e,t,n){e.prototype=t.prototype=n,n.constructor=e}function B1(e,t){var n=Object.create(e.prototype);for(var r in t)n[r]=t[r];return n}function xs(){}var es=.7,Qa=1/es,_i="\\s*([+-]?\\d+)\\s*",ts="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",En="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",x3=/^#([0-9a-f]{3,8})$/,y3=new RegExp(`^rgb\\(${_i},${_i},${_i}\\)$`),v3=new RegExp(`^rgb\\(${En},${En},${En}\\)$`),b3=new RegExp(`^rgba\\(${_i},${_i},${_i},${ts}\\)$`),w3=new RegExp(`^rgba\\(${En},${En},${En},${ts}\\)$`),k3=new RegExp(`^hsl\\(${ts},${En},${En}\\)$`),j3=new RegExp(`^hsla\\(${ts},${En},${En},${ts}\\)$`),Vm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Mp(xs,ns,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Wm,formatHex:Wm,formatHex8:_3,formatHsl:S3,formatRgb:Hm,toString:Hm});function Wm(){return this.rgb().formatHex()}function _3(){return this.rgb().formatHex8()}function S3(){return U1(this).formatHsl()}function Hm(){return this.rgb().formatRgb()}function ns(e){var t,n;return e=(e+"").trim().toLowerCase(),(t=x3.exec(e))?(n=t[1].length,t=parseInt(t[1],16),n===6?qm(t):n===3?new Mt(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):n===8?Hs(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):n===4?Hs(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=y3.exec(e))?new Mt(t[1],t[2],t[3],1):(t=v3.exec(e))?new Mt(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=b3.exec(e))?Hs(t[1],t[2],t[3],t[4]):(t=w3.exec(e))?Hs(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=k3.exec(e))?Km(t[1],t[2]/100,t[3]/100,1):(t=j3.exec(e))?Km(t[1],t[2]/100,t[3]/100,t[4]):Vm.hasOwnProperty(e)?qm(Vm[e]):e==="transparent"?new Mt(NaN,NaN,NaN,0):null}function qm(e){return new Mt(e>>16&255,e>>8&255,e&255,1)}function Hs(e,t,n,r){return r<=0&&(e=t=n=NaN),new Mt(e,t,n,r)}function C3(e){return e instanceof xs||(e=ns(e)),e?(e=e.rgb(),new Mt(e.r,e.g,e.b,e.opacity)):new Mt}function Qu(e,t,n,r){return arguments.length===1?C3(e):new Mt(e,t,n,r??1)}function Mt(e,t,n,r){this.r=+e,this.g=+t,this.b=+n,this.opacity=+r}Mp(Mt,Qu,B1(xs,{brighter(e){return e=e==null?Qa:Math.pow(Qa,e),new Mt(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?es:Math.pow(es,e),new Mt(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Mt(Ir(this.r),Ir(this.g),Ir(this.b),Xa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Jm,formatHex:Jm,formatHex8:N3,formatRgb:Gm,toString:Gm}));function Jm(){return`#${Ar(this.r)}${Ar(this.g)}${Ar(this.b)}`}function N3(){return`#${Ar(this.r)}${Ar(this.g)}${Ar(this.b)}${Ar((isNaN(this.opacity)?1:this.opacity)*255)}`}function Gm(){const e=Xa(this.opacity);return`${e===1?"rgb(":"rgba("}${Ir(this.r)}, ${Ir(this.g)}, ${Ir(this.b)}${e===1?")":`, ${e})`}`}function Xa(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ir(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Ar(e){return e=Ir(e),(e<16?"0":"")+e.toString(16)}function Km(e,t,n,r){return r<=0?e=t=n=NaN:n<=0||n>=1?e=t=NaN:t<=0&&(e=NaN),new fn(e,t,n,r)}function U1(e){if(e instanceof fn)return new fn(e.h,e.s,e.l,e.opacity);if(e instanceof xs||(e=ns(e)),!e)return new fn;if(e instanceof fn)return e;e=e.rgb();var t=e.r/255,n=e.g/255,r=e.b/255,i=Math.min(t,n,r),s=Math.max(t,n,r),a=NaN,l=s-i,c=(s+i)/2;return l?(t===s?a=(n-r)/l+(n<r)*6:n===s?a=(r-t)/l+2:a=(t-n)/l+4,l/=c<.5?s+i:2-s-i,a*=60):l=c>0&&c<1?0:a,new fn(a,l,c,e.opacity)}function E3(e,t,n,r){return arguments.length===1?U1(e):new fn(e,t,n,r??1)}function fn(e,t,n,r){this.h=+e,this.s=+t,this.l=+n,this.opacity=+r}Mp(fn,E3,B1(xs,{brighter(e){return e=e==null?Qa:Math.pow(Qa,e),new fn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?es:Math.pow(es,e),new fn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*t,i=2*n-r;return new Mt(Ac(e>=240?e-240:e+120,i,r),Ac(e,i,r),Ac(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new fn(Ym(this.h),qs(this.s),qs(this.l),Xa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Xa(this.opacity);return`${e===1?"hsl(":"hsla("}${Ym(this.h)}, ${qs(this.s)*100}%, ${qs(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Ym(e){return e=(e||0)%360,e<0?e+360:e}function qs(e){return Math.max(0,Math.min(1,e||0))}function Ac(e,t,n){return(e<60?t+(n-t)*e/60:e<180?n:e<240?t+(n-t)*(240-e)/60:t)*255}const V1=e=>()=>e;function z3(e,t){return function(n){return e+n*t}}function T3(e,t,n){return e=Math.pow(e,n),t=Math.pow(t,n)-e,n=1/n,function(r){return Math.pow(e+r*t,n)}}function A3(e){return(e=+e)==1?W1:function(t,n){return n-t?T3(t,n,e):V1(isNaN(t)?n:t)}}function W1(e,t){var n=t-e;return n?z3(e,n):V1(isNaN(e)?t:e)}const Qm=function e(t){var n=A3(t);function r(i,s){var a=n((i=Qu(i)).r,(s=Qu(s)).r),l=n(i.g,s.g),c=n(i.b,s.b),u=W1(i.opacity,s.opacity);return function(d){return i.r=a(d),i.g=l(d),i.b=c(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function Xn(e,t){return e=+e,t=+t,function(n){return e*(1-n)+t*n}}var Xu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Mc=new RegExp(Xu.source,"g");function M3(e){return function(){return e}}function P3(e){return function(t){return e(t)+""}}function L3(e,t){var n=Xu.lastIndex=Mc.lastIndex=0,r,i,s,a=-1,l=[],c=[];for(e=e+"",t=t+"";(r=Xu.exec(e))&&(i=Mc.exec(t));)(s=i.index)>n&&(s=t.slice(n,s),l[a]?l[a]+=s:l[++a]=s),(r=r[0])===(i=i[0])?l[a]?l[a]+=i:l[++a]=i:(l[++a]=null,c.push({i:a,x:Xn(r,i)})),n=Mc.lastIndex;return n<t.length&&(s=t.slice(n),l[a]?l[a]+=s:l[++a]=s),l.length<2?c[0]?P3(c[0].x):M3(t):(t=c.length,function(u){for(var d=0,f;d<t;++d)l[(f=c[d]).i]=f.x(u);return l.join("")})}var Xm=180/Math.PI,Zu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function H1(e,t,n,r,i,s){var a,l,c;return(a=Math.sqrt(e*e+t*t))&&(e/=a,t/=a),(c=e*n+t*r)&&(n-=e*c,r-=t*c),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,c/=l),e*r<t*n&&(e=-e,t=-t,c=-c,a=-a),{translateX:i,translateY:s,rotate:Math.atan2(t,e)*Xm,skewX:Math.atan(c)*Xm,scaleX:a,scaleY:l}}var Js;function R3(e){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return t.isIdentity?Zu:H1(t.a,t.b,t.c,t.d,t.e,t.f)}function I3(e){return e==null||(Js||(Js=document.createElementNS("http://www.w3.org/2000/svg","g")),Js.setAttribute("transform",e),!(e=Js.transform.baseVal.consolidate()))?Zu:(e=e.matrix,H1(e.a,e.b,e.c,e.d,e.e,e.f))}function q1(e,t,n,r){function i(u){return u.length?u.pop()+" ":""}function s(u,d,f,p,h,m){if(u!==f||d!==p){var v=h.push("translate(",null,t,null,n);m.push({i:v-4,x:Xn(u,f)},{i:v-2,x:Xn(d,p)})}else(f||p)&&h.push("translate("+f+t+p+n)}function a(u,d,f,p){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),p.push({i:f.push(i(f)+"rotate(",null,r)-2,x:Xn(u,d)})):d&&f.push(i(f)+"rotate("+d+r)}function l(u,d,f,p){u!==d?p.push({i:f.push(i(f)+"skewX(",null,r)-2,x:Xn(u,d)}):d&&f.push(i(f)+"skewX("+d+r)}function c(u,d,f,p,h,m){if(u!==f||d!==p){var v=h.push(i(h)+"scale(",null,",",null,")");m.push({i:v-4,x:Xn(u,f)},{i:v-2,x:Xn(d,p)})}else(f!==1||p!==1)&&h.push(i(h)+"scale("+f+","+p+")")}return function(u,d){var f=[],p=[];return u=e(u),d=e(d),s(u.translateX,u.translateY,d.translateX,d.translateY,f,p),a(u.rotate,d.rotate,f,p),l(u.skewX,d.skewX,f,p),c(u.scaleX,u.scaleY,d.scaleX,d.scaleY,f,p),u=d=null,function(h){for(var m=-1,v=p.length,j;++m<v;)f[(j=p[m]).i]=j.x(h);return f.join("")}}}var O3=q1(R3,"px, ","px)","deg)"),$3=q1(I3,", ",")",")"),D3=1e-12;function Zm(e){return((e=Math.exp(e))+1/e)/2}function F3(e){return((e=Math.exp(e))-1/e)/2}function B3(e){return((e=Math.exp(2*e))-1)/(e+1)}const U3=function e(t,n,r){function i(s,a){var l=s[0],c=s[1],u=s[2],d=a[0],f=a[1],p=a[2],h=d-l,m=f-c,v=h*h+m*m,j,g;if(v<D3)g=Math.log(p/u)/t,j=function(R){return[l+R*h,c+R*m,u*Math.exp(t*R*g)]};else{var x=Math.sqrt(v),w=(p*p-u*u+r*v)/(2*u*n*x),_=(p*p-u*u-r*v)/(2*p*n*x),z=Math.log(Math.sqrt(w*w+1)-w),C=Math.log(Math.sqrt(_*_+1)-_);g=(C-z)/t,j=function(R){var E=R*g,U=Zm(z),N=u/(n*x)*(U*B3(t*E+z)-F3(z));return[l+N*h,c+N*m,u*U/Zm(t*E+z)]}}return j.duration=g*1e3*t/Math.SQRT2,j}return i.rho=function(s){var a=Math.max(.001,+s),l=a*a,c=l*l;return e(a,l,c)},i}(Math.SQRT2,2,4);var Ii=0,mo=0,ao=0,J1=1e3,Za,go,el=0,Wr=0,Al=0,rs=typeof performance=="object"&&performance.now?performance:Date,G1=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Pp(){return Wr||(G1(V3),Wr=rs.now()+Al)}function V3(){Wr=0}function tl(){this._call=this._time=this._next=null}tl.prototype=Lp.prototype={constructor:tl,restart:function(e,t,n){if(typeof e!="function")throw new TypeError("callback is not a function");n=(n==null?Pp():+n)+(t==null?0:+t),!this._next&&go!==this&&(go?go._next=this:Za=this,go=this),this._call=e,this._time=n,ed()},stop:function(){this._call&&(this._call=null,this._time=1/0,ed())}};function Lp(e,t,n){var r=new tl;return r.restart(e,t,n),r}function W3(){Pp(),++Ii;for(var e=Za,t;e;)(t=Wr-e._time)>=0&&e._call.call(void 0,t),e=e._next;--Ii}function eg(){Wr=(el=rs.now())+Al,Ii=mo=0;try{W3()}finally{Ii=0,q3(),Wr=0}}function H3(){var e=rs.now(),t=e-el;t>J1&&(Al-=t,el=e)}function q3(){for(var e,t=Za,n,r=1/0;t;)t._call?(r>t._time&&(r=t._time),e=t,t=t._next):(n=t._next,t._next=null,t=e?e._next=n:Za=n);go=e,ed(r)}function ed(e){if(!Ii){mo&&(mo=clearTimeout(mo));var t=e-Wr;t>24?(e<1/0&&(mo=setTimeout(eg,e-rs.now()-Al)),ao&&(ao=clearInterval(ao))):(ao||(el=rs.now(),ao=setInterval(H3,J1)),Ii=1,G1(eg))}}function tg(e,t,n){var r=new tl;return t=t==null?0:+t,r.restart(i=>{r.stop(),e(i+t)},t,n),r}var J3=ms("start","end","cancel","interrupt"),G3=[],K1=0,ng=1,td=2,ha=3,rg=4,nd=5,ma=6;function Ml(e,t,n,r,i,s){var a=e.__transition;if(!a)e.__transition={};else if(n in a)return;K3(e,n,{name:t,index:r,group:i,on:J3,tween:G3,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:K1})}function Rp(e,t){var n=vn(e,t);if(n.state>K1)throw new Error("too late; already scheduled");return n}function An(e,t){var n=vn(e,t);if(n.state>ha)throw new Error("too late; already running");return n}function vn(e,t){var n=e.__transition;if(!n||!(n=n[t]))throw new Error("transition not found");return n}function K3(e,t,n){var r=e.__transition,i;r[t]=n,n.timer=Lp(s,0,n.time);function s(u){n.state=ng,n.timer.restart(a,n.delay,n.time),n.delay<=u&&a(u-n.delay)}function a(u){var d,f,p,h;if(n.state!==ng)return c();for(d in r)if(h=r[d],h.name===n.name){if(h.state===ha)return tg(a);h.state===rg?(h.state=ma,h.timer.stop(),h.on.call("interrupt",e,e.__data__,h.index,h.group),delete r[d]):+d<t&&(h.state=ma,h.timer.stop(),h.on.call("cancel",e,e.__data__,h.index,h.group),delete r[d])}if(tg(function(){n.state===ha&&(n.state=rg,n.timer.restart(l,n.delay,n.time),l(u))}),n.state=td,n.on.call("start",e,e.__data__,n.index,n.group),n.state===td){for(n.state=ha,i=new Array(p=n.tween.length),d=0,f=-1;d<p;++d)(h=n.tween[d].value.call(e,e.__data__,n.index,n.group))&&(i[++f]=h);i.length=f+1}}function l(u){for(var d=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(c),n.state=nd,1),f=-1,p=i.length;++f<p;)i[f].call(e,d);n.state===nd&&(n.on.call("end",e,e.__data__,n.index,n.group),c())}function c(){n.state=ma,n.timer.stop(),delete r[t];for(var u in r)return;delete e.__transition}}function ga(e,t){var n=e.__transition,r,i,s=!0,a;if(n){t=t==null?null:t+"";for(a in n){if((r=n[a]).name!==t){s=!1;continue}i=r.state>td&&r.state<nd,r.state=ma,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete n[a]}s&&delete e.__transition}}function Y3(e){return this.each(function(){ga(this,e)})}function Q3(e,t){var n,r;return function(){var i=An(this,e),s=i.tween;if(s!==n){r=n=s;for(var a=0,l=r.length;a<l;++a)if(r[a].name===t){r=r.slice(),r.splice(a,1);break}}i.tween=r}}function X3(e,t,n){var r,i;if(typeof n!="function")throw new Error;return function(){var s=An(this,e),a=s.tween;if(a!==r){i=(r=a).slice();for(var l={name:t,value:n},c=0,u=i.length;c<u;++c)if(i[c].name===t){i[c]=l;break}c===u&&i.push(l)}s.tween=i}}function Z3(e,t){var n=this._id;if(e+="",arguments.length<2){for(var r=vn(this.node(),n).tween,i=0,s=r.length,a;i<s;++i)if((a=r[i]).name===e)return a.value;return null}return this.each((t==null?Q3:X3)(n,e,t))}function Ip(e,t,n){var r=e._id;return e.each(function(){var i=An(this,r);(i.value||(i.value={}))[t]=n.apply(this,arguments)}),function(i){return vn(i,r).value[t]}}function Y1(e,t){var n;return(typeof t=="number"?Xn:t instanceof ns?Qm:(n=ns(t))?(t=n,Qm):L3)(e,t)}function eT(e){return function(){this.removeAttribute(e)}}function tT(e){return function(){this.removeAttributeNS(e.space,e.local)}}function nT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttribute(e);return a===i?null:a===r?s:s=t(r=a,n)}}function rT(e,t,n){var r,i=n+"",s;return function(){var a=this.getAttributeNS(e.space,e.local);return a===i?null:a===r?s:s=t(r=a,n)}}function iT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttribute(e):(a=this.getAttribute(e),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function oT(e,t,n){var r,i,s;return function(){var a,l=n(this),c;return l==null?void this.removeAttributeNS(e.space,e.local):(a=this.getAttributeNS(e.space,e.local),c=l+"",a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l)))}}function sT(e,t){var n=Tl(e),r=n==="transform"?$3:Y1;return this.attrTween(e,typeof t=="function"?(n.local?oT:iT)(n,r,Ip(this,"attr."+e,t)):t==null?(n.local?tT:eT)(n):(n.local?rT:nT)(n,r,t))}function aT(e,t){return function(n){this.setAttribute(e,t.call(this,n))}}function lT(e,t){return function(n){this.setAttributeNS(e.space,e.local,t.call(this,n))}}function cT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&lT(e,s)),n}return i._value=t,i}function uT(e,t){var n,r;function i(){var s=t.apply(this,arguments);return s!==r&&(n=(r=s)&&aT(e,s)),n}return i._value=t,i}function dT(e,t){var n="attr."+e;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;var r=Tl(e);return this.tween(n,(r.local?cT:uT)(r,t))}function pT(e,t){return function(){Rp(this,e).delay=+t.apply(this,arguments)}}function fT(e,t){return t=+t,function(){Rp(this,e).delay=t}}function hT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?pT:fT)(t,e)):vn(this.node(),t).delay}function mT(e,t){return function(){An(this,e).duration=+t.apply(this,arguments)}}function gT(e,t){return t=+t,function(){An(this,e).duration=t}}function xT(e){var t=this._id;return arguments.length?this.each((typeof e=="function"?mT:gT)(t,e)):vn(this.node(),t).duration}function yT(e,t){if(typeof t!="function")throw new Error;return function(){An(this,e).ease=t}}function vT(e){var t=this._id;return arguments.length?this.each(yT(t,e)):vn(this.node(),t).ease}function bT(e,t){return function(){var n=t.apply(this,arguments);if(typeof n!="function")throw new Error;An(this,e).ease=n}}function wT(e){if(typeof e!="function")throw new Error;return this.each(bT(this._id,e))}function kT(e){typeof e!="function"&&(e=z1(e));for(var t=this._groups,n=t.length,r=new Array(n),i=0;i<n;++i)for(var s=t[i],a=s.length,l=r[i]=[],c,u=0;u<a;++u)(c=s[u])&&e.call(c,c.__data__,u,s)&&l.push(c);return new qn(r,this._parents,this._name,this._id)}function jT(e){if(e._id!==this._id)throw new Error;for(var t=this._groups,n=e._groups,r=t.length,i=n.length,s=Math.min(r,i),a=new Array(r),l=0;l<s;++l)for(var c=t[l],u=n[l],d=c.length,f=a[l]=new Array(d),p,h=0;h<d;++h)(p=c[h]||u[h])&&(f[h]=p);for(;l<r;++l)a[l]=t[l];return new qn(a,this._parents,this._name,this._id)}function _T(e){return(e+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||t==="start"})}function ST(e,t,n){var r,i,s=_T(t)?Rp:An;return function(){var a=s(this,e),l=a.on;l!==r&&(i=(r=l).copy()).on(t,n),a.on=i}}function CT(e,t){var n=this._id;return arguments.length<2?vn(this.node(),n).on.on(e):this.each(ST(n,e,t))}function NT(e){return function(){var t=this.parentNode;for(var n in this.__transition)if(+n!==e)return;t&&t.removeChild(this)}}function ET(){return this.on("end.remove",NT(this._id))}function zT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=Tp(e));for(var r=this._groups,i=r.length,s=new Array(i),a=0;a<i;++a)for(var l=r[a],c=l.length,u=s[a]=new Array(c),d,f,p=0;p<c;++p)(d=l[p])&&(f=e.call(d,d.__data__,p,l))&&("__data__"in d&&(f.__data__=d.__data__),u[p]=f,Ml(u[p],t,n,p,u,vn(d,n)));return new qn(s,this._parents,t,n)}function TT(e){var t=this._name,n=this._id;typeof e!="function"&&(e=E1(e));for(var r=this._groups,i=r.length,s=[],a=[],l=0;l<i;++l)for(var c=r[l],u=c.length,d,f=0;f<u;++f)if(d=c[f]){for(var p=e.call(d,d.__data__,f,c),h,m=vn(d,n),v=0,j=p.length;v<j;++v)(h=p[v])&&Ml(h,t,n,v,p,m);s.push(p),a.push(d)}return new qn(s,a,t,n)}var AT=gs.prototype.constructor;function MT(){return new AT(this._groups,this._parents)}function PT(e,t){var n,r,i;return function(){var s=Ri(this,e),a=(this.style.removeProperty(e),Ri(this,e));return s===a?null:s===n&&a===r?i:i=t(n=s,r=a)}}function Q1(e){return function(){this.style.removeProperty(e)}}function LT(e,t,n){var r,i=n+"",s;return function(){var a=Ri(this,e);return a===i?null:a===r?s:s=t(r=a,n)}}function RT(e,t,n){var r,i,s;return function(){var a=Ri(this,e),l=n(this),c=l+"";return l==null&&(c=l=(this.style.removeProperty(e),Ri(this,e))),a===c?null:a===r&&c===i?s:(i=c,s=t(r=a,l))}}function IT(e,t){var n,r,i,s="style."+t,a="end."+s,l;return function(){var c=An(this,e),u=c.on,d=c.value[s]==null?l||(l=Q1(t)):void 0;(u!==n||i!==d)&&(r=(n=u).copy()).on(a,i=d),c.on=r}}function OT(e,t,n){var r=(e+="")=="transform"?O3:Y1;return t==null?this.styleTween(e,PT(e,r)).on("end.style."+e,Q1(e)):typeof t=="function"?this.styleTween(e,RT(e,r,Ip(this,"style."+e,t))).each(IT(this._id,e)):this.styleTween(e,LT(e,r,t),n).on("end.style."+e,null)}function $T(e,t,n){return function(r){this.style.setProperty(e,t.call(this,r),n)}}function DT(e,t,n){var r,i;function s(){var a=t.apply(this,arguments);return a!==i&&(r=(i=a)&&$T(e,a,n)),r}return s._value=t,s}function FT(e,t,n){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,DT(e,t,n??""))}function BT(e){return function(){this.textContent=e}}function UT(e){return function(){var t=e(this);this.textContent=t??""}}function VT(e){return this.tween("text",typeof e=="function"?UT(Ip(this,"text",e)):BT(e==null?"":e+""))}function WT(e){return function(t){this.textContent=e.call(this,t)}}function HT(e){var t,n;function r(){var i=e.apply(this,arguments);return i!==n&&(t=(n=i)&&WT(i)),t}return r._value=e,r}function qT(e){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;return this.tween(t,HT(e))}function JT(){for(var e=this._name,t=this._id,n=X1(),r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)if(c=a[u]){var d=vn(c,t);Ml(c,e,n,u,a,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new qn(r,this._parents,e,n)}function GT(){var e,t,n=this,r=n._id,i=n.size();return new Promise(function(s,a){var l={value:a},c={value:function(){--i===0&&s()}};n.each(function(){var u=An(this,r),d=u.on;d!==e&&(t=(e=d).copy(),t._.cancel.push(l),t._.interrupt.push(l),t._.end.push(c)),u.on=t}),i===0&&s()})}var KT=0;function qn(e,t,n,r){this._groups=e,this._parents=t,this._name=n,this._id=r}function X1(){return++KT}var Pn=gs.prototype;qn.prototype={constructor:qn,select:zT,selectAll:TT,selectChild:Pn.selectChild,selectChildren:Pn.selectChildren,filter:kT,merge:jT,selection:MT,transition:JT,call:Pn.call,nodes:Pn.nodes,node:Pn.node,size:Pn.size,empty:Pn.empty,each:Pn.each,on:CT,attr:sT,attrTween:dT,style:OT,styleTween:FT,text:VT,textTween:qT,remove:ET,tween:Z3,delay:hT,duration:xT,ease:vT,easeVarying:wT,end:GT,[Symbol.iterator]:Pn[Symbol.iterator]};function YT(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var QT={time:null,delay:0,duration:250,ease:YT};function XT(e,t){for(var n;!(n=e.__transition)||!(n=n[t]);)if(!(e=e.parentNode))throw new Error(`transition ${t} not found`);return n}function ZT(e){var t,n;e instanceof qn?(t=e._id,e=e._name):(t=X1(),(n=QT).time=Pp(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,s=0;s<i;++s)for(var a=r[s],l=a.length,c,u=0;u<l;++u)(c=a[u])&&Ml(c,e,t,u,a,n||XT(c,t));return new qn(r,this._parents,e,t)}gs.prototype.interrupt=Y3;gs.prototype.transition=ZT;function ig(e,t){var n,r=1;e==null&&(e=0),t==null&&(t=0);function i(){var s,a=n.length,l,c=0,u=0;for(s=0;s<a;++s)l=n[s],c+=l.x,u+=l.y;for(c=(c/a-e)*r,u=(u/a-t)*r,s=0;s<a;++s)l=n[s],l.x-=c,l.y-=u}return i.initialize=function(s){n=s},i.x=function(s){return arguments.length?(e=+s,i):e},i.y=function(s){return arguments.length?(t=+s,i):t},i.strength=function(s){return arguments.length?(r=+s,i):r},i}function e8(e){const t=+this._x.call(null,e),n=+this._y.call(null,e);return Z1(this.cover(t,n),t,n,e)}function Z1(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,s=e._root,a={data:r},l=e._x0,c=e._y0,u=e._x1,d=e._y1,f,p,h,m,v,j,g,x;if(!s)return e._root=a,e;for(;s.length;)if((v=t>=(f=(l+u)/2))?l=f:u=f,(j=n>=(p=(c+d)/2))?c=p:d=p,i=s,!(s=s[g=j<<1|v]))return i[g]=a,e;if(h=+e._x.call(null,s.data),m=+e._y.call(null,s.data),t===h&&n===m)return a.next=s,i?i[g]=a:e._root=a,e;do i=i?i[g]=new Array(4):e._root=new Array(4),(v=t>=(f=(l+u)/2))?l=f:u=f,(j=n>=(p=(c+d)/2))?c=p:d=p;while((g=j<<1|v)===(x=(m>=p)<<1|h>=f));return i[x]=s,i[g]=a,e}function t8(e){var t,n,r=e.length,i,s,a=new Array(r),l=new Array(r),c=1/0,u=1/0,d=-1/0,f=-1/0;for(n=0;n<r;++n)isNaN(i=+this._x.call(null,t=e[n]))||isNaN(s=+this._y.call(null,t))||(a[n]=i,l[n]=s,i<c&&(c=i),i>d&&(d=i),s<u&&(u=s),s>f&&(f=s));if(c>d||u>f)return this;for(this.cover(c,u).cover(d,f),n=0;n<r;++n)Z1(this,a[n],l[n],e[n]);return this}function n8(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,s=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,s=(r=Math.floor(t))+1;else{for(var a=i-n||1,l=this._root,c,u;n>e||e>=i||r>t||t>=s;)switch(u=(t<r)<<1|e<n,c=new Array(4),c[u]=l,l=c,a*=2,u){case 0:i=n+a,s=r+a;break;case 1:n=i-a,s=r+a;break;case 2:i=n+a,r=s-a;break;case 3:n=i-a,r=s-a;break}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=s,this}function r8(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function i8(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function jt(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i}function o8(e,t,n){var r,i=this._x0,s=this._y0,a,l,c,u,d=this._x1,f=this._y1,p=[],h=this._root,m,v;for(h&&p.push(new jt(h,i,s,d,f)),n==null?n=1/0:(i=e-n,s=t-n,d=e+n,f=t+n,n*=n);m=p.pop();)if(!(!(h=m.node)||(a=m.x0)>d||(l=m.y0)>f||(c=m.x1)<i||(u=m.y1)<s))if(h.length){var j=(a+c)/2,g=(l+u)/2;p.push(new jt(h[3],j,g,c,u),new jt(h[2],a,g,j,u),new jt(h[1],j,l,c,g),new jt(h[0],a,l,j,g)),(v=(t>=g)<<1|e>=j)&&(m=p[p.length-1],p[p.length-1]=p[p.length-1-v],p[p.length-1-v]=m)}else{var x=e-+this._x.call(null,h.data),w=t-+this._y.call(null,h.data),_=x*x+w*w;if(_<n){var z=Math.sqrt(n=_);i=e-z,s=t-z,d=e+z,f=t+z,r=h.data}}return r}function s8(e){if(isNaN(d=+this._x.call(null,e))||isNaN(f=+this._y.call(null,e)))return this;var t,n=this._root,r,i,s,a=this._x0,l=this._y0,c=this._x1,u=this._y1,d,f,p,h,m,v,j,g;if(!n)return this;if(n.length)for(;;){if((m=d>=(p=(a+c)/2))?a=p:c=p,(v=f>=(h=(l+u)/2))?l=h:u=h,t=n,!(n=n[j=v<<1|m]))return this;if(!n.length)break;(t[j+1&3]||t[j+2&3]||t[j+3&3])&&(r=t,g=j)}for(;n.data!==e;)if(i=n,!(n=n.next))return this;return(s=n.next)&&delete n.next,i?(s?i.next=s:delete i.next,this):t?(s?t[j]=s:delete t[j],(n=t[0]||t[1]||t[2]||t[3])&&n===(t[3]||t[2]||t[1]||t[0])&&!n.length&&(r?r[g]=n:this._root=n),this):(this._root=s,this)}function a8(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this}function l8(){return this._root}function c8(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function u8(e){var t=[],n,r=this._root,i,s,a,l,c;for(r&&t.push(new jt(r,this._x0,this._y0,this._x1,this._y1));n=t.pop();)if(!e(r=n.node,s=n.x0,a=n.y0,l=n.x1,c=n.y1)&&r.length){var u=(s+l)/2,d=(a+c)/2;(i=r[3])&&t.push(new jt(i,u,d,l,c)),(i=r[2])&&t.push(new jt(i,s,d,u,c)),(i=r[1])&&t.push(new jt(i,u,a,l,d)),(i=r[0])&&t.push(new jt(i,s,a,u,d))}return this}function d8(e){var t=[],n=[],r;for(this._root&&t.push(new jt(this._root,this._x0,this._y0,this._x1,this._y1));r=t.pop();){var i=r.node;if(i.length){var s,a=r.x0,l=r.y0,c=r.x1,u=r.y1,d=(a+c)/2,f=(l+u)/2;(s=i[0])&&t.push(new jt(s,a,l,d,f)),(s=i[1])&&t.push(new jt(s,d,l,c,f)),(s=i[2])&&t.push(new jt(s,a,f,d,u)),(s=i[3])&&t.push(new jt(s,d,f,c,u))}n.push(r)}for(;r=n.pop();)e(r.node,r.x0,r.y0,r.x1,r.y1);return this}function p8(e){return e[0]}function f8(e){return arguments.length?(this._x=e,this):this._x}function h8(e){return e[1]}function m8(e){return arguments.length?(this._y=e,this):this._y}function Op(e,t,n){var r=new $p(t??p8,n??h8,NaN,NaN,NaN,NaN);return e==null?r:r.addAll(e)}function $p(e,t,n,r,i,s){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=s,this._root=void 0}function og(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var Nt=Op.prototype=$p.prototype;Nt.copy=function(){var e=new $p(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,n,r;if(!t)return e;if(!t.length)return e._root=og(t),e;for(n=[{source:t,target:e._root=new Array(4)}];t=n.pop();)for(var i=0;i<4;++i)(r=t.source[i])&&(r.length?n.push({source:r,target:t.target[i]=new Array(4)}):t.target[i]=og(r));return e};Nt.add=e8;Nt.addAll=t8;Nt.cover=n8;Nt.data=r8;Nt.extent=i8;Nt.find=o8;Nt.remove=s8;Nt.removeAll=a8;Nt.root=l8;Nt.size=c8;Nt.visit=u8;Nt.visitAfter=d8;Nt.x=f8;Nt.y=m8;function Or(e){return function(){return e}}function or(e){return(e()-.5)*1e-6}function g8(e){return e.x+e.vx}function x8(e){return e.y+e.vy}function sg(e){var t,n,r,i=1,s=1;typeof e!="function"&&(e=Or(e==null?1:+e));function a(){for(var u,d=t.length,f,p,h,m,v,j,g=0;g<s;++g)for(f=Op(t,g8,x8).visitAfter(l),u=0;u<d;++u)p=t[u],v=n[p.index],j=v*v,h=p.x+p.vx,m=p.y+p.vy,f.visit(x);function x(w,_,z,C,R){var E=w.data,U=w.r,N=v+U;if(E){if(E.index>p.index){var $=h-E.x-E.vx,G=m-E.y-E.vy,Y=$*$+G*G;Y<N*N&&($===0&&($=or(r),Y+=$*$),G===0&&(G=or(r),Y+=G*G),Y=(N-(Y=Math.sqrt(Y)))/Y*i,p.vx+=($*=Y)*(N=(U*=U)/(j+U)),p.vy+=(G*=Y)*N,E.vx-=$*(N=1-N),E.vy-=G*N)}return}return _>h+N||C<h-N||z>m+N||R<m-N}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<4;++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,f;for(n=new Array(d),u=0;u<d;++u)f=t[u],n[f.index]=+e(f,u,t)}}return a.initialize=function(u,d){t=u,r=d,c()},a.iterations=function(u){return arguments.length?(s=+u,a):s},a.strength=function(u){return arguments.length?(i=+u,a):i},a.radius=function(u){return arguments.length?(e=typeof u=="function"?u:Or(+u),c(),a):e},a}function y8(e){return e.index}function ag(e,t){var n=e.get(t);if(!n)throw new Error("node not found: "+t);return n}function lg(e){var t=y8,n=f,r,i=Or(30),s,a,l,c,u,d=1;e==null&&(e=[]);function f(j){return 1/Math.min(l[j.source.index],l[j.target.index])}function p(j){for(var g=0,x=e.length;g<d;++g)for(var w=0,_,z,C,R,E,U,N;w<x;++w)_=e[w],z=_.source,C=_.target,R=C.x+C.vx-z.x-z.vx||or(u),E=C.y+C.vy-z.y-z.vy||or(u),U=Math.sqrt(R*R+E*E),U=(U-s[w])/U*j*r[w],R*=U,E*=U,C.vx-=R*(N=c[w]),C.vy-=E*N,z.vx+=R*(N=1-N),z.vy+=E*N}function h(){if(a){var j,g=a.length,x=e.length,w=new Map(a.map((z,C)=>[t(z,C,a),z])),_;for(j=0,l=new Array(g);j<x;++j)_=e[j],_.index=j,typeof _.source!="object"&&(_.source=ag(w,_.source)),typeof _.target!="object"&&(_.target=ag(w,_.target)),l[_.source.index]=(l[_.source.index]||0)+1,l[_.target.index]=(l[_.target.index]||0)+1;for(j=0,c=new Array(x);j<x;++j)_=e[j],c[j]=l[_.source.index]/(l[_.source.index]+l[_.target.index]);r=new Array(x),m(),s=new Array(x),v()}}function m(){if(a)for(var j=0,g=e.length;j<g;++j)r[j]=+n(e[j],j,e)}function v(){if(a)for(var j=0,g=e.length;j<g;++j)s[j]=+i(e[j],j,e)}return p.initialize=function(j,g){a=j,u=g,h()},p.links=function(j){return arguments.length?(e=j,h(),p):e},p.id=function(j){return arguments.length?(t=j,p):t},p.iterations=function(j){return arguments.length?(d=+j,p):d},p.strength=function(j){return arguments.length?(n=typeof j=="function"?j:Or(+j),m(),p):n},p.distance=function(j){return arguments.length?(i=typeof j=="function"?j:Or(+j),v(),p):i},p}const v8=1664525,b8=1013904223,cg=4294967296;function w8(){let e=1;return()=>(e=(v8*e+b8)%cg)/cg}function k8(e){return e.x}function j8(e){return e.y}var _8=10,S8=Math.PI*(3-Math.sqrt(5));function ug(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),s=0,a=.6,l=new Map,c=Lp(f),u=ms("tick","end"),d=w8();e==null&&(e=[]);function f(){p(),u.call("tick",t),n<r&&(c.stop(),u.call("end",t))}function p(v){var j,g=e.length,x;v===void 0&&(v=1);for(var w=0;w<v;++w)for(n+=(s-n)*i,l.forEach(function(_){_(n)}),j=0;j<g;++j)x=e[j],x.fx==null?x.x+=x.vx*=a:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=a:(x.y=x.fy,x.vy=0);return t}function h(){for(var v=0,j=e.length,g;v<j;++v){if(g=e[v],g.index=v,g.fx!=null&&(g.x=g.fx),g.fy!=null&&(g.y=g.fy),isNaN(g.x)||isNaN(g.y)){var x=_8*Math.sqrt(.5+v),w=v*S8;g.x=x*Math.cos(w),g.y=x*Math.sin(w)}(isNaN(g.vx)||isNaN(g.vy))&&(g.vx=g.vy=0)}}function m(v){return v.initialize&&v.initialize(e,d),v}return h(),t={tick:p,restart:function(){return c.restart(f),t},stop:function(){return c.stop(),t},nodes:function(v){return arguments.length?(e=v,h(),l.forEach(m),t):e},alpha:function(v){return arguments.length?(n=+v,t):n},alphaMin:function(v){return arguments.length?(r=+v,t):r},alphaDecay:function(v){return arguments.length?(i=+v,t):+i},alphaTarget:function(v){return arguments.length?(s=+v,t):s},velocityDecay:function(v){return arguments.length?(a=1-v,t):1-a},randomSource:function(v){return arguments.length?(d=v,l.forEach(m),t):d},force:function(v,j){return arguments.length>1?(j==null?l.delete(v):l.set(v,m(j)),t):l.get(v)},find:function(v,j,g){var x=0,w=e.length,_,z,C,R,E;for(g==null?g=1/0:g*=g,x=0;x<w;++x)R=e[x],_=v-R.x,z=j-R.y,C=_*_+z*z,C<g&&(E=R,g=C);return E},on:function(v,j){return arguments.length>1?(u.on(v,j),t):u.on(v)}}}function dg(){var e,t,n,r,i=Or(-30),s,a=1,l=1/0,c=.81;function u(h){var m,v=e.length,j=Op(e,k8,j8).visitAfter(f);for(r=h,m=0;m<v;++m)t=e[m],j.visit(p)}function d(){if(e){var h,m=e.length,v;for(s=new Array(m),h=0;h<m;++h)v=e[h],s[v.index]=+i(v,h,e)}}function f(h){var m=0,v,j,g=0,x,w,_;if(h.length){for(x=w=_=0;_<4;++_)(v=h[_])&&(j=Math.abs(v.value))&&(m+=v.value,g+=j,x+=j*v.x,w+=j*v.y);h.x=x/g,h.y=w/g}else{v=h,v.x=v.data.x,v.y=v.data.y;do m+=s[v.data.index];while(v=v.next)}h.value=m}function p(h,m,v,j){if(!h.value)return!0;var g=h.x-t.x,x=h.y-t.y,w=j-m,_=g*g+x*x;if(w*w/c<_)return _<l&&(g===0&&(g=or(n),_+=g*g),x===0&&(x=or(n),_+=x*x),_<a&&(_=Math.sqrt(a*_)),t.vx+=g*h.value*r/_,t.vy+=x*h.value*r/_),!0;if(h.length||_>=l)return;(h.data!==t||h.next)&&(g===0&&(g=or(n),_+=g*g),x===0&&(x=or(n),_+=x*x),_<a&&(_=Math.sqrt(a*_)));do h.data!==t&&(w=s[h.data.index]*r/_,t.vx+=g*w,t.vy+=x*w);while(h=h.next)}return u.initialize=function(h,m){e=h,n=m,d()},u.strength=function(h){return arguments.length?(i=typeof h=="function"?h:Or(+h),d(),u):i},u.distanceMin=function(h){return arguments.length?(a=h*h,u):Math.sqrt(a)},u.distanceMax=function(h){return arguments.length?(l=h*h,u):Math.sqrt(l)},u.theta=function(h){return arguments.length?(c=h*h,u):Math.sqrt(c)},u}const Gs=e=>()=>e;function C8(e,{sourceEvent:t,target:n,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Dn(e,t,n){this.k=e,this.x=t,this.y=n}Dn.prototype={constructor:Dn,scale:function(e){return e===1?this:new Dn(this.k*e,this.x,this.y)},translate:function(e,t){return e===0&t===0?this:new Dn(this.k,this.x+this.k*e,this.y+this.k*t)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Ao=new Dn(1,0,0);Dn.prototype;function Pc(e){e.stopImmediatePropagation()}function lo(e){e.preventDefault(),e.stopImmediatePropagation()}function N8(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function E8(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function pg(){return this.__zoom||Ao}function z8(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function T8(){return navigator.maxTouchPoints||"ontouchstart"in this}function A8(e,t,n){var r=e.invertX(t[0][0])-n[0][0],i=e.invertX(t[1][0])-n[1][0],s=e.invertY(t[0][1])-n[0][1],a=e.invertY(t[1][1])-n[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),a>s?(s+a)/2:Math.min(0,s)||Math.max(0,a))}function fg(){var e=N8,t=E8,n=A8,r=z8,i=T8,s=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],l=250,c=U3,u=ms("start","zoom","end"),d,f,p,h=500,m=150,v=0,j=10;function g(A){A.property("__zoom",pg).on("wheel.zoom",E,{passive:!1}).on("mousedown.zoom",U).on("dblclick.zoom",N).filter(i).on("touchstart.zoom",$).on("touchmove.zoom",G).on("touchend.zoom touchcancel.zoom",Y).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}g.transform=function(A,D,P,M){var B=A.selection?A.selection():A;B.property("__zoom",pg),A!==B?z(A,D,P,M):B.interrupt().each(function(){C(this,arguments).event(M).start().zoom(null,typeof D=="function"?D.apply(this,arguments):D).end()})},g.scaleBy=function(A,D,P,M){g.scaleTo(A,function(){var B=this.__zoom.k,O=typeof D=="function"?D.apply(this,arguments):D;return B*O},P,M)},g.scaleTo=function(A,D,P,M){g.transform(A,function(){var B=t.apply(this,arguments),O=this.__zoom,b=P==null?_(B):typeof P=="function"?P.apply(this,arguments):P,W=O.invert(b),H=typeof D=="function"?D.apply(this,arguments):D;return n(w(x(O,H),b,W),B,a)},P,M)},g.translateBy=function(A,D,P,M){g.transform(A,function(){return n(this.__zoom.translate(typeof D=="function"?D.apply(this,arguments):D,typeof P=="function"?P.apply(this,arguments):P),t.apply(this,arguments),a)},null,M)},g.translateTo=function(A,D,P,M,B){g.transform(A,function(){var O=t.apply(this,arguments),b=this.__zoom,W=M==null?_(O):typeof M=="function"?M.apply(this,arguments):M;return n(Ao.translate(W[0],W[1]).scale(b.k).translate(typeof D=="function"?-D.apply(this,arguments):-D,typeof P=="function"?-P.apply(this,arguments):-P),O,a)},M,B)};function x(A,D){return D=Math.max(s[0],Math.min(s[1],D)),D===A.k?A:new Dn(D,A.x,A.y)}function w(A,D,P){var M=D[0]-P[0]*A.k,B=D[1]-P[1]*A.k;return M===A.x&&B===A.y?A:new Dn(A.k,M,B)}function _(A){return[(+A[0][0]+ +A[1][0])/2,(+A[0][1]+ +A[1][1])/2]}function z(A,D,P,M){A.on("start.zoom",function(){C(this,arguments).event(M).start()}).on("interrupt.zoom end.zoom",function(){C(this,arguments).event(M).end()}).tween("zoom",function(){var B=this,O=arguments,b=C(B,O).event(M),W=t.apply(B,O),H=P==null?_(W):typeof P=="function"?P.apply(B,O):P,y=Math.max(W[1][0]-W[0][0],W[1][1]-W[0][1]),S=B.__zoom,F=typeof D=="function"?D.apply(B,O):D,te=c(S.invert(H).concat(y/S.k),F.invert(H).concat(y/F.k));return function(ae){if(ae===1)ae=F;else{var ye=te(ae),ee=y/ye[2];ae=new Dn(ee,H[0]-ye[0]*ee,H[1]-ye[1]*ee)}b.zoom(null,ae)}})}function C(A,D,P){return!P&&A.__zooming||new R(A,D)}function R(A,D){this.that=A,this.args=D,this.active=0,this.sourceEvent=null,this.extent=t.apply(A,D),this.taps=0}R.prototype={event:function(A){return A&&(this.sourceEvent=A),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(A,D){return this.mouse&&A!=="mouse"&&(this.mouse[1]=D.invert(this.mouse[0])),this.touch0&&A!=="touch"&&(this.touch0[1]=D.invert(this.touch0[0])),this.touch1&&A!=="touch"&&(this.touch1[1]=D.invert(this.touch1[0])),this.that.__zoom=D,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(A){var D=kt(this.that).datum();u.call(A,this.that,new C8(A,{sourceEvent:this.sourceEvent,target:g,transform:this.that.__zoom,dispatch:u}),D)}};function E(A,...D){if(!e.apply(this,arguments))return;var P=C(this,D).event(A),M=this.__zoom,B=Math.max(s[0],Math.min(s[1],M.k*Math.pow(2,r.apply(this,arguments)))),O=Rn(A);if(P.wheel)(P.mouse[0][0]!==O[0]||P.mouse[0][1]!==O[1])&&(P.mouse[1]=M.invert(P.mouse[0]=O)),clearTimeout(P.wheel);else{if(M.k===B)return;P.mouse=[O,M.invert(O)],ga(this),P.start()}lo(A),P.wheel=setTimeout(b,m),P.zoom("mouse",n(w(x(M,B),P.mouse[0],P.mouse[1]),P.extent,a));function b(){P.wheel=null,P.end()}}function U(A,...D){if(p||!e.apply(this,arguments))return;var P=A.currentTarget,M=C(this,D,!0).event(A),B=kt(A.view).on("mousemove.zoom",H,!0).on("mouseup.zoom",y,!0),O=Rn(A,P),b=A.clientX,W=A.clientY;D1(A.view),Pc(A),M.mouse=[O,this.__zoom.invert(O)],ga(this),M.start();function H(S){if(lo(S),!M.moved){var F=S.clientX-b,te=S.clientY-W;M.moved=F*F+te*te>v}M.event(S).zoom("mouse",n(w(M.that.__zoom,M.mouse[0]=Rn(S,P),M.mouse[1]),M.extent,a))}function y(S){B.on("mousemove.zoom mouseup.zoom",null),F1(S.view,M.moved),lo(S),M.event(S).end()}}function N(A,...D){if(e.apply(this,arguments)){var P=this.__zoom,M=Rn(A.changedTouches?A.changedTouches[0]:A,this),B=P.invert(M),O=P.k*(A.shiftKey?.5:2),b=n(w(x(P,O),M,B),t.apply(this,D),a);lo(A),l>0?kt(this).transition().duration(l).call(z,b,M,A):kt(this).call(g.transform,b,M,A)}}function $(A,...D){if(e.apply(this,arguments)){var P=A.touches,M=P.length,B=C(this,D,A.changedTouches.length===M).event(A),O,b,W,H;for(Pc(A),b=0;b<M;++b)W=P[b],H=Rn(W,this),H=[H,this.__zoom.invert(H),W.identifier],B.touch0?!B.touch1&&B.touch0[2]!==H[2]&&(B.touch1=H,B.taps=0):(B.touch0=H,O=!0,B.taps=1+!!d);d&&(d=clearTimeout(d)),O&&(B.taps<2&&(f=H[0],d=setTimeout(function(){d=null},h)),ga(this),B.start())}}function G(A,...D){if(this.__zooming){var P=C(this,D).event(A),M=A.changedTouches,B=M.length,O,b,W,H;for(lo(A),O=0;O<B;++O)b=M[O],W=Rn(b,this),P.touch0&&P.touch0[2]===b.identifier?P.touch0[0]=W:P.touch1&&P.touch1[2]===b.identifier&&(P.touch1[0]=W);if(b=P.that.__zoom,P.touch1){var y=P.touch0[0],S=P.touch0[1],F=P.touch1[0],te=P.touch1[1],ae=(ae=F[0]-y[0])*ae+(ae=F[1]-y[1])*ae,ye=(ye=te[0]-S[0])*ye+(ye=te[1]-S[1])*ye;b=x(b,Math.sqrt(ae/ye)),W=[(y[0]+F[0])/2,(y[1]+F[1])/2],H=[(S[0]+te[0])/2,(S[1]+te[1])/2]}else if(P.touch0)W=P.touch0[0],H=P.touch0[1];else return;P.zoom("touch",n(w(b,W,H),P.extent,a))}}function Y(A,...D){if(this.__zooming){var P=C(this,D).event(A),M=A.changedTouches,B=M.length,O,b;for(Pc(A),p&&clearTimeout(p),p=setTimeout(function(){p=null},h),O=0;O<B;++O)b=M[O],P.touch0&&P.touch0[2]===b.identifier?delete P.touch0:P.touch1&&P.touch1[2]===b.identifier&&delete P.touch1;if(P.touch1&&!P.touch0&&(P.touch0=P.touch1,delete P.touch1),P.touch0)P.touch0[1]=this.__zoom.invert(P.touch0[0]);else if(P.end(),P.taps===2&&(b=Rn(b,this),Math.hypot(f[0]-b[0],f[1]-b[1])<j)){var W=kt(this).on("dblclick.zoom");W&&W.apply(this,arguments)}}}return g.wheelDelta=function(A){return arguments.length?(r=typeof A=="function"?A:Gs(+A),g):r},g.filter=function(A){return arguments.length?(e=typeof A=="function"?A:Gs(!!A),g):e},g.touchable=function(A){return arguments.length?(i=typeof A=="function"?A:Gs(!!A),g):i},g.extent=function(A){return arguments.length?(t=typeof A=="function"?A:Gs([[+A[0][0],+A[0][1]],[+A[1][0],+A[1][1]]]),g):t},g.scaleExtent=function(A){return arguments.length?(s[0]=+A[0],s[1]=+A[1],g):[s[0],s[1]]},g.translateExtent=function(A){return arguments.length?(a[0][0]=+A[0][0],a[1][0]=+A[1][0],a[0][1]=+A[0][1],a[1][1]=+A[1][1],g):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},g.constrain=function(A){return arguments.length?(n=A,g):n},g.duration=function(A){return arguments.length?(l=+A,g):l},g.interpolate=function(A){return arguments.length?(c=A,g):c},g.on=function(){var A=u.on.apply(u,arguments);return A===u?g:A},g.clickDistance=function(A){return arguments.length?(v=(A=+A)*A,g):Math.sqrt(v)},g.tapDistance=function(A){return arguments.length?(j=+A,g):j},g}const hg=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],mg=new Map;function Ks(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};const t=mg.get(e);if(t)return t;let n=0;for(let s=0;s<e.length;s++)n=(n<<5)-n+e.charCodeAt(s),n=n&n;const r=Math.abs(n)%hg.length,i=hg[r];return mg.set(e,i),i}const Ys={bg:"#14b8a6"},xo={LlmAgent:"#00f5d4",SequentialAgent:"#7b2cbf",LoopAgent:"#ffd93d",ParallelAgent:"#ff6b6b",Tool:"#14b8a6",System:"#6b7280"};function Zr(e){return xo[e]||"#6b7280"}function M8({agents:e,events:t,selectedEventIndex:n,isOpen:r,onOpenChange:i,runState:s="idle"}){const[a,l]=k.useState(!1),[c,u]=k.useState(!1),d=r!==void 0?r:a,f=M=>{i?i(M):l(M)},[p,h]=k.useState(null),[m,v]=k.useState(null),j=k.useRef(null),g=k.useRef(null),x=k.useRef(null),w=k.useRef(null),_=k.useRef(null),z=k.useRef(null),C=k.useRef(new Map),R=k.useRef(null),{activeAgents:E,activeTools:U,transitions:N,visitedAgents:$,toolCalls:G,activeBranches:Y,lastMessages:A,toolLastCalls:D}=k.useMemo(()=>{var V,L,J,ne,pe,K,re,we,_e,ke,Pe,Xe,ot;const M=n!==null?n:t.length-1;if(M<0||t.length===0)return{activeAgents:new Set,activeTools:new Set,transitions:new Map,visitedAgents:new Set,toolCalls:new Map,activeBranches:new Set,lastMessages:new Map,toolLastCalls:new Map};const B=new Map(e.map(ce=>[ce.name,ce.type])),O=new Map(e.map(ce=>[ce.id,ce])),b=ce=>{const Ee=B.get(ce);if(!Ee)return!1;const ue=Ee.toLowerCase();return ue==="sequentialagent"||ue==="sequential"},W=new Map,H=new Map;for(const ce of e)if(b(ce.name)&&"sub_agents"in ce){const ue=ce.sub_agents.map(ze=>{var je;return(je=O.get(ze))==null?void 0:je.name}).filter(ze=>ze!==void 0);H.set(ce.name,ue);for(const ze of ue)W.set(ze,ce.name)}const y=(ce,Ee)=>{const ue=H.get(Ee);if(!ue)return null;const ze=ue.indexOf(ce);return ze>0?ue[ze-1]:null},S=t.slice(0,M+1),F=new Map,te=new Map,ae=new Set,ye=new Set,ee=new Map,le=new Map;ae.add("system");const be=new Map;be.set("",["system"]);let Se=null;const me=new Map,Ne=new Map,X=new Map,he=ce=>{const Ee=ce||"";return be.has(Ee)||be.set(Ee,["system"]),be.get(Ee)},Z=(ce,Ee)=>{if(!ce)return null;const ue=ce.split("."),ze=ue.indexOf(Ee);return ze>0?ue[ze-1]:ue.length>=1&&ue[ue.length-1]===Ee&&ue.length>=2?ue[ue.length-2]:null};for(const ce of S){const Ee=ce.branch||"";if(ce.event_type==="agent_start"){const ue=ce.agent_name;ae.add(ue);const ze=he(Ee);let je=null;const De=Z(Ee,ue);De&&De!==ue?(je=De,ze.includes(De)||(ze.push(De),ae.add(De))):ze.length>0&&(je=ze[ze.length-1]);let $t=je;const _r=W.get(ue);if(_r){const Zt=y(ue,_r);Zt?$t=Zt:$t=_r,X.set(ue,_r)}else if(je&&b(je)){X.set(ue,je);const Zt=Ne.get(je);Zt&&Zt!==ue&&($t=Zt)}if($t&&$t!==ue){const Zt=`${$t}->${ue}`;F.set(Zt,(F.get(Zt)||0)+1),$t==="system"&&Ee===""&&!Se&&(Se=ue)}ze[ze.length-1]!==ue&&ze.push(ue)}else if(ce.event_type==="agent_end"){const ue=ce.agent_name,ze=X.get(ue);if(ze&&Ne.set(ze,ue),b(ue)){const je=H.get(ue),De=je&&je.length>0?je[je.length-1]:Ne.get(ue);if(De){const $t=`${De}->${ue}`;F.set($t,(F.get($t)||0)+1)}Ne.delete(ue)}if(ue===Se){const je=`${ue}->system`;F.set(je,(F.get(je)||0)+1)}for(const[,je]of be){const De=je.lastIndexOf(ue);De>0&&je.splice(De,1)}}else if(ce.event_type==="tool_call"){const ue=(V=ce.data)==null?void 0:V.tool_name,ze=he(Ee);if(ue&&ze.length>0){const je=ze[ze.length-1];ye.add(ue);const De=`${je}->tool:${ue}`;te.set(De,(te.get(De)||0)+1),me.set(Ee,ue),le.set(ue,{args:((L=ce.data)==null?void 0:L.args)||((J=ce.data)==null?void 0:J.arguments)})}}else if(ce.event_type==="tool_result"){const ue=(ne=ce.data)==null?void 0:ne.tool_name;if(ue){const ze=le.get(ue),je=((we=(re=(K=(pe=ce.data)==null?void 0:pe.result)==null?void 0:K.content)==null?void 0:re[0])==null?void 0:we.text)||((_e=ce.data)==null?void 0:_e.result)||((ke=ce.data)==null?void 0:ke.output);ze?ze.result=typeof je=="string"?je:JSON.stringify(je):le.set(ue,{args:null,result:typeof je=="string"?je:JSON.stringify(je)})}me.set(Ee,null)}else if(ce.event_type==="model_response"){const ue=ce.agent_name;if(ue&&ue!=="system"){const je=(((Xe=(Pe=ce.data)==null?void 0:Pe.response_content)==null?void 0:Xe.parts)||((ot=ce.data)==null?void 0:ot.parts)||[]).find(De=>(De==null?void 0:De.type)==="text"&&(De==null?void 0:De.text));je!=null&&je.text&&ee.set(ue,je.text)}}}ye.forEach(ce=>ae.add(`tool:${ce}`));const I=new Set,Q=new Set,T=new Set;for(const[ce,Ee]of be){if(Ee.length>1){const ze=Ee[Ee.length-1];I.add(ze),ce&&T.add(ce)}const ue=me.get(ce);ue&&Q.add(ue)}return{activeAgents:I,activeTools:Q,transitions:F,visitedAgents:ae,toolCalls:te,activeBranches:T,lastMessages:ee,toolLastCalls:le}},[t,n,e]),P=k.useMemo(()=>{const M=new Map(e.map(H=>[H.name,H])),B=[],O=new Map;for(const H of $){if(H.startsWith("tool:"))continue;const y=M.get(H),S=(y==null?void 0:y.id)||H,F=C.current.get(S);B.push({id:S,name:H,type:H==="system"?"System":(y==null?void 0:y.type)||"LlmAgent",isActive:E.has(H),wasActive:!0,lastMessage:A.get(H),x:F==null?void 0:F.x,y:F==null?void 0:F.y}),O.set(H,S)}for(const H of $){if(!H.startsWith("tool:"))continue;const y=H.slice(5),S=`tool:${y}`,F=C.current.get(S);B.push({id:S,name:y,type:"Tool",isActive:U.has(y),wasActive:!0,lastToolCall:D.get(y),x:F==null?void 0:F.x,y:F==null?void 0:F.y}),O.set(H,S)}const b=new Set(B.map(H=>H.id)),W=[];for(const[H,y]of N){const[S,F]=H.split("->"),te=O.get(S),ae=O.get(F);te&&ae&&b.has(te)&&b.has(ae)&&W.push({source:te,target:ae,type:"transition",count:y})}for(const[H,y]of G){const[S,F]=H.split("->"),te=O.get(S),ae=O.get(F);te&&ae&&b.has(te)&&b.has(ae)&&W.push({source:te,target:ae,type:"tool",count:y})}return{nodes:B,links:W}},[e,E,U,$,N,G,A,D]);return k.useEffect(()=>{var Q;if(!j.current||!d)return;const M=kt(j.current),B=300,O=400;M.selectAll("*").remove();const b=M.append("g"),W={current:((Q=R.current)==null?void 0:Q.k)||1},H=fg().scaleExtent([.3,3]).on("zoom",T=>{b.attr("transform",T.transform),R.current=T.transform,W.current=T.transform.k});M.call(H),R.current&&(M.call(H.transform,R.current),W.current=R.current.k);const y=()=>{if(P.nodes.length===0)return null;let T=1/0,V=-1/0,L=1/0,J=-1/0;if(P.nodes.forEach(ke=>{ke.x!==void 0&&ke.y!==void 0&&(T=Math.min(T,ke.x),V=Math.max(V,ke.x),L=Math.min(L,ke.y),J=Math.max(J,ke.y))}),T===1/0)return null;const ne=60,pe=V-T+ne*2,K=J-L+ne*2,re=Math.min(B/pe,O/K,1.5)*.85,we=(T+V)/2,_e=(L+J)/2;return Ao.translate(B/2,O/2).scale(re).translate(-we,-_e)},S=(T,V,L)=>T+(V-T)*L,F=T=>{const V=R.current;if(!V){R.current=T,W.current=T.k,M.call(H.transform,T);return}const L=.15,J=S(V.x,T.x,L),ne=S(V.y,T.y,L),pe=S(V.k,T.k,L),K=Ao.translate(J,ne).scale(pe);R.current=K,W.current=K.k,M.call(H.transform,K)},te=P.nodes.every(T=>T.x!==void 0&&T.y!==void 0);if(!te){const T=new Map;for(const V of P.nodes)V.x!==void 0&&V.y!==void 0&&T.set(V.id,{x:V.x,y:V.y});for(const V of P.nodes)if(V.x===void 0||V.y===void 0){const L=P.links.find(J=>(typeof J.target=="string"?J.target:J.target.id)===V.id);if(L){const J=typeof L.source=="string"?L.source:L.source.id,ne=T.get(J);if(ne){const pe=Math.random()*Math.PI*2,K=50+Math.random()*30;V.x=ne.x+Math.cos(pe)*K,V.y=ne.y+Math.sin(pe)*K,T.set(V.id,{x:V.x,y:V.y})}}(V.x===void 0||V.y===void 0)&&(V.x=(Math.random()-.5)*50,V.y=(Math.random()-.5)*50)}}const ae=140,ye=()=>{const T=ae/W.current;for(const V of P.nodes){if(V.x===void 0||V.y===void 0)continue;const L=Math.sqrt(V.x*V.x+V.y*V.y);if(L>T){const J=T/L;V.x*=J,V.y*=J}}},ee=()=>{for(const T of P.nodes)if(T.name==="system"&&T.x!==void 0&&T.y!==void 0){const L=ae/W.current*.75,J=225*Math.PI/180,ne=L*Math.cos(J),pe=-L*Math.sin(J),K=.3;T.vx=(T.vx||0)+(ne-T.x)*K,T.vy=(T.vy||0)+(pe-T.y)*K}},le=new Set;for(const T of P.links){const V=typeof T.source=="string"?T.source:T.source.id;le.add(V)}const be=new Set(P.nodes.filter(T=>!le.has(T.id)&&T.name!=="system").map(T=>T.id)),Se=()=>{const V=ae/W.current*.65,L=.15;for(const J of P.nodes)if(be.has(J.id)&&J.x!==void 0&&J.y!==void 0){const ne=Math.sqrt(J.x*J.x+J.y*J.y)||1;if(ne<V){const pe=J.x/ne,K=J.y/ne,re=(V-ne)*L;J.vx=(J.vx||0)+pe*re,J.vy=(J.vy||0)+K*re}}},me=ug(P.nodes).force("link",lg(P.links).id(T=>T.id).distance(100)).force("charge",dg().strength(-400)).force("center",ig(0,0)).force("collision",sg().radius(40)).force("boundary",ye).force("systemPull",ee).force("leafOutward",Se).alphaDecay(.01);te?me.alpha(.3):me.alpha(1),z.current=me;const Ne=M.append("defs");P.links.forEach((T,V)=>{const L=Ne.append("linearGradient").attr("id",`link-gradient-${V}`).attr("gradientUnits","userSpaceOnUse");if(T.type==="transition")L.append("stop").attr("offset","0%").attr("stop-color","#166534").attr("stop-opacity",.1),L.append("stop").attr("offset","25%").attr("stop-color","#166534").attr("stop-opacity",.4),L.append("stop").attr("offset","50%").attr("stop-color","#22c55e").attr("stop-opacity",.7),L.append("stop").attr("offset","75%").attr("stop-color","#4ade80").attr("stop-opacity",.9),L.append("stop").attr("offset","100%").attr("stop-color","#86efac").attr("stop-opacity",1);else{const J=T.type==="sub_agent"?{start:"#3730a3",end:"#a5b4fc"}:{start:"#92400e",end:"#fcd34d"};L.append("stop").attr("offset","0%").attr("stop-color",J.start),L.append("stop").attr("offset","100%").attr("stop-color",J.end)}});const X=b.append("g").attr("class","links").selectAll("path").data(P.links).join("path").attr("stroke",(T,V)=>`url(#link-gradient-${V})`).attr("stroke-width",T=>{const V=T.type==="transition"?2:1.5;return Math.min(V+(T.count-1)*1.5,18)}).attr("stroke-opacity",T=>T.type==="transition"?.8:.5).attr("stroke-dasharray",T=>T.type==="tool"?"4,2":"none").attr("fill","none"),he=b.append("g").selectAll("g").data(P.nodes).join("g").call(Um().on("start",(T,V)=>{T.active||me.alphaTarget(.3).restart(),V.fx=V.x,V.fy=V.y}).on("drag",(T,V)=>{V.fx=T.x,V.fy=T.y}).on("end",(T,V)=>{T.active||me.alphaTarget(0),V.fx=null,V.fy=null})),Z=T=>T.type==="System"?14:T.type==="Tool"?12:18;he.filter(T=>T.type!=="Tool"&&T.type!=="System").append("circle").attr("r",T=>Z(T)+5).attr("fill","none").attr("stroke",T=>Zr(T.type)).attr("stroke-width",3).attr("stroke-opacity",T=>T.wasActive?.9:.4).attr("stroke-dasharray",T=>T.type==="SequentialAgent"?"8,4":T.type==="LoopAgent"?"6,3":T.type==="ParallelAgent"?"3,3":"none"),he.append("circle").attr("r",T=>Z(T)).attr("fill",T=>T.type==="Tool"?Ys.bg:Ks(T.name).bg).attr("stroke",T=>T.isActive?"#fff":T.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",T=>T.isActive?3:1.5).attr("opacity",T=>T.wasActive?1:.5).attr("class",T=>T.isActive?"active-node":"").style("cursor","pointer").on("mouseenter",function(T,V){var pe;const L=(pe=x.current)==null?void 0:pe.getBoundingClientRect();if(!L)return;const J=T.clientX-L.left,ne=T.clientY-L.top;h({x:J,y:ne,node:V}),kt(this).transition().duration(150).attr("r",Z(V)+6)}).on("mouseleave",function(T,V){h(null),kt(this).transition().duration(150).attr("r",Z(V))}),he.append("text").text(T=>T.name.length>10?T.name.slice(0,8)+"…":T.name).attr("text-anchor","middle").attr("dy",32).attr("font-size",10).attr("fill","#e4e4e7").attr("font-weight",T=>T.isActive?600:400),me.on("tick",()=>{X.attr("d",V=>{const L=V.target.x-V.source.x,J=V.target.y-V.source.y,ne=Math.sqrt(L*L+J*J)*1.5;return`M${V.source.x},${V.source.y}A${ne},${ne} 0 0,1 ${V.target.x},${V.target.y}`}),P.links.forEach((V,L)=>{Ne.select(`#link-gradient-${L}`).attr("x1",V.source.x).attr("y1",V.source.y).attr("x2",V.target.x).attr("y2",V.target.y)}),he.attr("transform",V=>`translate(${V.x},${V.y})`),P.nodes.forEach(V=>{V.x!==void 0&&V.y!==void 0&&C.current.set(V.id,{x:V.x,y:V.y})});const T=y();T&&F(T)});const I=y();return I&&F(I),()=>{me.stop()}},[P,d]),k.useEffect(()=>{if(!g.current||!c)return;const M=kt(g.current),B=w.current;if(!B)return;const O=Math.min(B.clientWidth,B.clientHeight),b=O,W=O;M.selectAll("*").remove();const H=M.append("g"),y=fg().scaleExtent([.3,3]).on("zoom",X=>{H.attr("transform",X.transform),_.current=X.transform});if(M.call(y),_.current)M.call(y.transform,_.current);else{const X=Ao.translate(b/2,W/2).scale(.9);M.call(y.transform,X),_.current=X}const S=O*.35,F=()=>{for(const X of P.nodes){if(X.x===void 0||X.y===void 0)continue;const he=Math.sqrt(X.x*X.x+X.y*X.y);if(he>S){const Z=S/he;X.x*=Z,X.y*=Z}}},te=new Set;for(const X of P.links){const he=typeof X.source=="string"?X.source:X.source.id;te.add(he)}const ae=new Set(P.nodes.filter(X=>!te.has(X.id)&&X.name!=="system").map(X=>X.id)),ye=()=>{const X=S*.75,he=.12;for(const Z of P.nodes)if(ae.has(Z.id)&&Z.x!==void 0&&Z.y!==void 0){const I=Math.sqrt(Z.x*Z.x+Z.y*Z.y)||1;if(I<X){const Q=Z.x/I,T=Z.y/I,V=(X-I)*he;Z.vx=(Z.vx||0)+Q*V,Z.vy=(Z.vy||0)+T*V}}},ee=P.nodes.every(X=>X.x!==void 0&&X.y!==void 0),le=ug(P.nodes).force("link",lg(P.links).id(X=>X.id).distance(120)).force("charge",dg().strength(-500)).force("center",ig(0,0)).force("collision",sg().radius(50)).force("boundary",F).force("leafOutward",ye).alpha(ee?.1:.8).alphaDecay(.02),be=M.append("defs");P.links.forEach((X,he)=>{const Z=be.append("linearGradient").attr("id",`exp-link-gradient-${he}`).attr("gradientUnits","userSpaceOnUse");if(X.type==="transition")Z.append("stop").attr("offset","0%").attr("stop-color","#166534").attr("stop-opacity",.1),Z.append("stop").attr("offset","25%").attr("stop-color","#166534").attr("stop-opacity",.4),Z.append("stop").attr("offset","50%").attr("stop-color","#22c55e").attr("stop-opacity",.7),Z.append("stop").attr("offset","75%").attr("stop-color","#4ade80").attr("stop-opacity",.9),Z.append("stop").attr("offset","100%").attr("stop-color","#86efac").attr("stop-opacity",1);else{const I=X.type==="sub_agent"?{start:"#3730a3",end:"#a5b4fc"}:{start:"#92400e",end:"#fcd34d"};Z.append("stop").attr("offset","0%").attr("stop-color",I.start),Z.append("stop").attr("offset","100%").attr("stop-color",I.end)}});const Se=H.append("g").attr("class","links").selectAll("path").data(P.links).join("path").attr("stroke",(X,he)=>`url(#exp-link-gradient-${he})`).attr("stroke-width",X=>{const he=X.type==="transition"?3:2;return Math.min(he+(X.count-1)*2.5,28)}).attr("stroke-opacity",X=>X.type==="transition"?.8:.5).attr("stroke-dasharray",X=>X.type==="tool"?"6,3":"none").attr("fill","none"),me=X=>X.type==="System"?20:X.type==="Tool"?18:28,Ne=H.append("g").selectAll("g").data(P.nodes).join("g").call(Um().on("start",(X,he)=>{X.active||le.alphaTarget(.3).restart(),he.fx=he.x,he.fy=he.y}).on("drag",(X,he)=>{he.fx=X.x,he.fy=X.y}).on("end",(X,he)=>{X.active||le.alphaTarget(0),he.fx=null,he.fy=null}));return Ne.filter(X=>X.type!=="Tool"&&X.type!=="System").append("circle").attr("r",X=>me(X)+6).attr("fill","none").attr("stroke",X=>Zr(X.type)).attr("stroke-width",4).attr("stroke-opacity",X=>X.wasActive?.9:.4).attr("stroke-dasharray",X=>X.type==="SequentialAgent"?"10,5":X.type==="LoopAgent"?"8,4":X.type==="ParallelAgent"?"4,4":"none"),Ne.append("circle").attr("r",X=>me(X)).attr("fill",X=>X.type==="Tool"?Ys.bg:Ks(X.name).bg).attr("stroke",X=>X.isActive?"#fff":X.wasActive?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)").attr("stroke-width",X=>X.isActive?4:2).attr("opacity",X=>X.wasActive?1:.5).attr("class",X=>X.isActive?"active-node":"").style("cursor","grab").on("mouseenter",function(X,he){var T;const Z=(T=w.current)==null?void 0:T.getBoundingClientRect();if(!Z)return;const I=X.clientX-Z.left,Q=X.clientY-Z.top;v({x:I,y:Q,node:he}),kt(this).transition().duration(150).attr("r",me(he)+8)}).on("mouseleave",function(X,he){v(null),kt(this).transition().duration(150).attr("r",me(he))}),Ne.append("text").text(X=>X.name.length>15?X.name.slice(0,13)+"…":X.name).attr("text-anchor","middle").attr("dy",X=>me(X)+18).attr("font-size",14).attr("fill","#e4e4e7").attr("font-weight",X=>X.isActive?600:400),le.on("tick",()=>{Se.attr("d",X=>{const he=X.target.x-X.source.x,Z=X.target.y-X.source.y,I=Math.sqrt(he*he+Z*Z)*1.5;return`M${X.source.x},${X.source.y}A${I},${I} 0 0,1 ${X.target.x},${X.target.y}`}),P.links.forEach((X,he)=>{be.select(`#exp-link-gradient-${he}`).attr("x1",X.source.x).attr("y1",X.source.y).attr("x2",X.target.x).attr("y2",X.target.y)}),Ne.attr("transform",X=>`translate(${X.x},${X.y})`),P.nodes.forEach(X=>{X.x!==void 0&&X.y!==void 0&&C.current.set(X.id,{x:X.x,y:X.y})})}),()=>{le.stop()}},[P,c]),o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
          border-radius: 0 200px 200px 0;
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-left: none;
          box-shadow: 4px 0 20px rgba(0,0,0,0.4);
          overflow: hidden;
          position: relative;
          transition: background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
        }
        
        /* Run state backgrounds */
        .agent-graph-content.state-idle,
        .agent-graph-content.state-running {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .agent-graph-content.state-completed {
          background: linear-gradient(135deg, #0f2027 0%, #134e4a 100%);
          border-color: rgba(20, 184, 166, 0.4);
          box-shadow: 4px 0 20px rgba(20, 184, 166, 0.15), 4px 0 40px rgba(0,0,0,0.3);
        }
        
        .agent-graph-content.state-failed {
          background: linear-gradient(135deg, #1f1315 0%, #2d1b1e 100%);
          border-color: rgba(239, 68, 68, 0.35);
          box-shadow: 4px 0 20px rgba(239, 68, 68, 0.15), 4px 0 40px rgba(0,0,0,0.3);
        }
        
        .agent-graph-content.state-cancelled {
          background: linear-gradient(135deg, #1f1a0f 0%, #2d2612 100%);
          border-color: rgba(234, 179, 8, 0.35);
          box-shadow: 4px 0 20px rgba(234, 179, 8, 0.15), 4px 0 40px rgba(0,0,0,0.3);
        }
        
        .agent-graph-toggle {
          width: 32px;
          height: 64px;
          border-left: none;
          border-radius: 0 8px 8px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: center;
        }
        
        .agent-graph-toggle.state-idle,
        .agent-graph-toggle.state-running {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: #a5b4fc;
        }
        
        .agent-graph-toggle.state-completed {
          background: linear-gradient(135deg, #0f2027 0%, #134e4a 100%);
          border: 1px solid rgba(20, 184, 166, 0.4);
          color: #5eead4;
        }
        
        .agent-graph-toggle.state-failed {
          background: linear-gradient(135deg, #1f1315 0%, #2d1b1e 100%);
          border: 1px solid rgba(239, 68, 68, 0.35);
          color: #fca5a5;
        }
        
        .agent-graph-toggle.state-cancelled {
          background: linear-gradient(135deg, #1f1a0f 0%, #2d2612 100%);
          border: 1px solid rgba(234, 179, 8, 0.35);
          color: #fde047;
        }
        
        .agent-graph-toggle:hover {
          filter: brightness(1.2);
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
        
        .agent-graph-tooltip-message {
          font-size: 10px;
          color: #a1a1aa;
          margin-top: 6px;
          font-style: italic;
          line-height: 1.4;
          max-width: 200px;
          word-break: break-word;
          border-top: 1px solid rgba(99, 102, 241, 0.2);
          padding-top: 6px;
        }
        
        .agent-graph-tooltip-tool {
          font-size: 9px;
          color: #a1a1aa;
          margin-top: 6px;
          line-height: 1.4;
          max-width: 200px;
          word-break: break-word;
          border-top: 1px solid rgba(20, 184, 166, 0.3);
          padding-top: 6px;
        }
        
        .tooltip-tool-args,
        .tooltip-tool-result {
          margin-bottom: 4px;
          font-family: 'Monaco', 'Menlo', monospace;
        }
        
        .tooltip-tool-label {
          color: #14b8a6;
          font-weight: 600;
        }
        
        .agent-graph-tooltip.expanded-tooltip {
          z-index: 10002;
          font-size: 14px;
          padding: 12px 16px;
        }
        
        .agent-graph-tooltip.expanded-tooltip .agent-graph-tooltip-name {
          font-size: 16px;
          margin-bottom: 6px;
        }
        
        .agent-graph-tooltip.expanded-tooltip .agent-graph-tooltip-type {
          font-size: 13px;
        }
        
        .agent-graph-tooltip.expanded-tooltip .agent-graph-tooltip-message {
          font-size: 12px;
          max-width: 280px;
        }
        
        .agent-graph-tooltip.expanded-tooltip .agent-graph-tooltip-tool {
          font-size: 11px;
          max-width: 320px;
        }
        
        /* Expanded modal styles */
        .agent-graph-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: modalFadeIn 0.2s ease;
        }
        
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .agent-graph-modal {
          position: relative;
          width: min(80vh, 80vw);
          height: min(80vh, 80vw);
          border-radius: 50%;
          /*overflow: hidden;*/
          animation: modalScaleIn 0.3s ease;
          transition: background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
        }
        
        .agent-graph-modal.state-idle,
        .agent-graph-modal.state-running {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border: 2px solid rgba(99, 102, 241, 0.4);
          box-shadow: 0 0 60px rgba(99, 102, 241, 0.3), 0 0 120px rgba(0, 0, 0, 0.5);
        }
        
        .agent-graph-modal.state-completed {
          background: linear-gradient(135deg, #0f2027 0%, #134e4a 100%);
          border: 2px solid rgba(20, 184, 166, 0.5);
          box-shadow: 0 0 60px rgba(20, 184, 166, 0.25), 0 0 120px rgba(0, 0, 0, 0.5);
        }
        
        .agent-graph-modal.state-failed {
          background: linear-gradient(135deg, #1f1315 0%, #2d1b1e 100%);
          border: 2px solid rgba(239, 68, 68, 0.4);
          box-shadow: 0 0 60px rgba(239, 68, 68, 0.2), 0 0 120px rgba(0, 0, 0, 0.5);
        }
        
        .agent-graph-modal.state-cancelled {
          background: linear-gradient(135deg, #1f1a0f 0%, #2d2612 100%);
          border: 2px solid rgba(234, 179, 8, 0.4);
          box-shadow: 0 0 60px rgba(234, 179, 8, 0.2), 0 0 120px rgba(0, 0, 0, 0.5);
        }
        
        @keyframes modalScaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .agent-graph-modal-svg {
          width: 100%;
          height: 100%;
        }
        
        .agent-graph-content.clickable {
          cursor: pointer;
        }
        
        .agent-graph-content.clickable:hover {
          border-color: rgba(99, 102, 241, 0.6);
          box-shadow: 4px 0 30px rgba(99, 102, 241, 0.3);
        }
      `}),o.jsx("div",{className:`agent-graph-container ${d?"":"closed"}`,children:o.jsxs("div",{className:"agent-graph-panel",children:[o.jsxs("div",{className:`agent-graph-content clickable state-${s}`,ref:x,onClick:()=>u(!0),title:"Click to expand",children:[o.jsx("svg",{ref:j,className:"agent-graph-svg"}),o.jsxs("div",{className:"agent-graph-legend",children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#22c55e"}}),o.jsx("span",{children:"agent flow"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{className:"legend-line",style:{background:"#f59e0b",borderStyle:"dashed"}}),o.jsx("span",{children:"tool call"})]}),o.jsxs("div",{style:{marginTop:4,borderTop:"1px solid #333",paddingTop:4},children:[o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px solid ${xo.LlmAgent}`}}),o.jsx("span",{children:"LLM"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dashed ${xo.SequentialAgent}`}}),o.jsx("span",{children:"Sequential"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dashed ${xo.LoopAgent}`}}),o.jsx("span",{children:"Loop"})]}),o.jsxs("div",{className:"legend-item",children:[o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",border:`2px dotted ${xo.ParallelAgent}`}}),o.jsx("span",{children:"Parallel"})]})]})]}),p&&o.jsxs("div",{className:"agent-graph-tooltip",style:{left:Math.min(p.x+15,180),top:Math.max(p.y-20,10)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:p.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:p.node.type==="Tool"?Ys.bg:Ks(p.node.name).bg,border:p.node.type!=="Tool"&&p.node.type!=="System"?`2px solid ${Zr(p.node.type)}`:"none",width:12,height:12}}),o.jsx("span",{style:{color:Zr(p.node.type)},children:p.node.type==="LlmAgent"?"LLM Agent":p.node.type==="SequentialAgent"?"Sequential":p.node.type==="LoopAgent"?"Loop":p.node.type==="ParallelAgent"?"Parallel":p.node.type})]}),p.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"}),p.node.lastMessage&&o.jsxs("div",{className:"agent-graph-tooltip-message",children:['"',p.node.lastMessage.slice(0,80),p.node.lastMessage.length>80?"...":"",'"']}),p.node.type==="Tool"&&p.node.lastToolCall&&o.jsxs("div",{className:"agent-graph-tooltip-tool",children:[p.node.lastToolCall.args&&o.jsxs("div",{className:"tooltip-tool-args",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Args:"})," ",(()=>{const M=JSON.stringify(p.node.lastToolCall.args);return M.slice(0,60)+(M.length>60?"...":"")})()]}),p.node.lastToolCall.result&&o.jsxs("div",{className:"tooltip-tool-result",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Result:"})," ",p.node.lastToolCall.result.slice(0,60),p.node.lastToolCall.result.length>60?"...":""]})]})]})]}),o.jsx("button",{className:`agent-graph-toggle state-${s}`,onClick:()=>f(!d),children:o.jsx(wt,{size:20})})]})}),c&&o.jsx("div",{className:"agent-graph-modal-overlay",onClick:()=>{u(!1),_.current=null},children:o.jsxs("div",{className:`agent-graph-modal state-${s}`,ref:w,onClick:M=>M.stopPropagation(),children:[o.jsx("svg",{ref:g,className:"agent-graph-modal-svg"}),m&&o.jsxs("div",{className:"agent-graph-tooltip expanded-tooltip",style:{left:Math.min(m.x+20,window.innerWidth-200),top:Math.max(m.y-20,20)},children:[o.jsx("div",{className:"agent-graph-tooltip-name",children:m.node.name}),o.jsxs("div",{className:"agent-graph-tooltip-type",children:[o.jsx("div",{className:"agent-graph-tooltip-dot",style:{background:m.node.type==="Tool"?Ys.bg:Ks(m.node.name).bg,border:m.node.type!=="Tool"&&m.node.type!=="System"?`2px solid ${Zr(m.node.type)}`:"none",width:12,height:12}}),o.jsx("span",{style:{color:Zr(m.node.type)},children:m.node.type==="LlmAgent"?"LLM Agent":m.node.type==="SequentialAgent"?"Sequential":m.node.type==="LoopAgent"?"Loop":m.node.type==="ParallelAgent"?"Parallel":m.node.type})]}),m.node.isActive&&o.jsx("div",{className:"agent-graph-tooltip-active",children:"● Currently executing"}),m.node.lastMessage&&o.jsxs("div",{className:"agent-graph-tooltip-message",children:['"',m.node.lastMessage.slice(0,120),m.node.lastMessage.length>120?"...":"",'"']}),m.node.type==="Tool"&&m.node.lastToolCall&&o.jsxs("div",{className:"agent-graph-tooltip-tool",children:[m.node.lastToolCall.args&&o.jsxs("div",{className:"tooltip-tool-args",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Args:"})," ",(()=>{const M=JSON.stringify(m.node.lastToolCall.args);return M.slice(0,100)+(M.length>100?"...":"")})()]}),m.node.lastToolCall.result&&o.jsxs("div",{className:"tooltip-tool-result",children:[o.jsx("span",{className:"tooltip-tool-label",children:"Result:"})," ",m.node.lastToolCall.result.slice(0,100),m.node.lastToolCall.result.length>100?"...":""]})]})]})]})})]})}const gg={agent_start:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},agent_end:{bg:"#2d1f4e",fg:"#c4b5fd",border:"#7c3aed"},tool_call:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},tool_result:{bg:"#0d3331",fg:"#5eead4",border:"#14b8a6"},model_call:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},model_response:{bg:"#3d2f0d",fg:"#fde047",border:"#eab308"},callback_error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"},state_change:{bg:"#3d0d1f",fg:"#fda4af",border:"#f43f5e"},transfer:{bg:"#0d2d3d",fg:"#7dd3fc",border:"#0ea5e9"},callback_start:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},callback_end:{bg:"#1a1a2e",fg:"#a29bfe",border:"#6c5ce7"},error:{bg:"#450a0a",fg:"#fca5a5",border:"#dc2626"}},P8={agent_start:Lu,agent_end:Lu,tool_call:gn,tool_result:gn,model_call:op,model_response:Wa,state_change:Bn,transfer:up,callback_start:zn,callback_end:zn,callback_error:kl},xg=[{bg:"#0e7490",fg:"#e0f2fe"},{bg:"#6d28d9",fg:"#ede9fe"},{bg:"#047857",fg:"#d1fae5"},{bg:"#b91c1c",fg:"#fee2e2"},{bg:"#b45309",fg:"#fef3c7"},{bg:"#1d4ed8",fg:"#dbeafe"},{bg:"#be185d",fg:"#fce7f3"},{bg:"#4d7c0f",fg:"#ecfccb"},{bg:"#7c3aed",fg:"#ede9fe"},{bg:"#0f766e",fg:"#ccfbf1"},{bg:"#c2410c",fg:"#ffedd5"},{bg:"#4338ca",fg:"#e0e7ff"}],yg=new Map;function nl(e){if(e==="sandbox"||e==="system")return{bg:"#374151",fg:"#9ca3af"};let t=yg.get(e);if(t===void 0){let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n=n&n;t=Math.abs(n)%xg.length,yg.set(e,t)}return xg[t]}function vg(e){var t,n,r,i,s,a,l,c,u,d,f,p,h,m,v,j,g,x,w,_,z,C,R,E,U,N,$,G,Y,A,D,P;switch(e.event_type){case"agent_start":return`START ${e.agent_name}`;case"agent_end":if((t=e.data)!=null&&t.error){const me=(n=e.data)!=null&&n.hint?` 💡 ${e.data.hint.slice(0,100)}`:"";return`END ${e.agent_name} [ERROR] ${e.data.error}${me}`}return`END ${e.agent_name}`;case"tool_call":const B=Object.entries(((r=e.data)==null?void 0:r.args)||{}).map(([me,Ne])=>{const X=Ne!=null?JSON.stringify(Ne):"null";return`${me}=${X.slice(0,500)}${X.length>500?"...":""}`}).join(", ")||"";return`CALL ${((i=e.data)==null?void 0:i.tool_name)||"unknown"}(${B.slice(0,1e3)}${B.length>1e3?"...":""})`;case"tool_result":const O=(s=e.data)==null?void 0:s.result;let b="";if((l=(a=O==null?void 0:O.content)==null?void 0:a[0])!=null&&l.text)b=String(O.content[0].text).slice(0,500);else if(typeof O=="string")b=O.slice(0,500);else if(O!=null){const me=JSON.stringify(O);b=me?me.slice(0,500):""}else b="";return`RESULT ${((c=e.data)==null?void 0:c.tool_name)||"unknown"} → ${b}${b.length>=500?"...":""}`;case"model_call":return`LLM_REQ ${((d=(u=e.data)==null?void 0:u.contents)==null?void 0:d.length)||0} msgs, ${((f=e.data)==null?void 0:f.tool_count)||0} tools`;case"model_response":const W=((h=(p=e.data)==null?void 0:p.response_content)==null?void 0:h.parts)||((m=e.data)==null?void 0:m.parts)||[],H=W.find(me=>(me==null?void 0:me.type)==="function_call");if(H)return`LLM_RSP → ${H.name||"unknown"}()`;const y=W.find(me=>(me==null?void 0:me.type)==="text");if(y!=null&&y.text){const me=String(y.text);return`LLM_RSP "${me.slice(0,50)}${me.length>50?"...":""}"`}return`LLM_RSP (${((v=e.data)==null?void 0:v.finish_reason)||"complete"})`;case"state_change":return`STATE ${Object.keys(((j=e.data)==null?void 0:j.state_delta)||{}).join(", ")}`;case"transfer":return`TRANSFER → ${((g=e.data)==null?void 0:g.target)||"unknown"}`;case"callback_start":const F=((x=e.data)==null?void 0:x.callback_name)||"unknown",te=((w=e.data)==null?void 0:w.callback_type)||"";return F==="network_approval"?`⏳ AWAITING APPROVAL ${((_=e.data)==null?void 0:_.host)||((z=e.data)==null?void 0:z.url)||""}`:`CALLBACK START ${te?`[${te}]`:""} ${F}`;case"callback_end":const ae=((C=e.data)==null?void 0:C.callback_name)||"unknown",ye=((R=e.data)==null?void 0:R.callback_type)||"",ee=(E=e.data)!=null&&E.error?" [ERROR]":"";return ae==="network_approval"?((U=e.data)==null?void 0:U.action)==="deny"?`🚫 DENIED ${((N=e.data)==null?void 0:N.host)||""}`:`✅ APPROVED ${(($=e.data)==null?void 0:$.pattern)||((G=e.data)==null?void 0:G.host)||""}`:`CALLBACK END ${ye?`[${ye}]`:""} ${ae}${ee}`;case"callback_error":const le=((Y=e.data)==null?void 0:Y.source)||"unknown",be=((A=e.data)==null?void 0:A.error)||"Unknown error";return`⚠️ ERROR in ${le}: ${be.slice(0,50)}${be.length>50?"...":""}`;case"compaction":const Se=((D=e.data)==null?void 0:D.summary_preview)||"";return`📦 COMPACTION "${Se.slice(0,80)}${Se.length>80?"...":""}"`;default:return((P=e.event_type)==null?void 0:P.toUpperCase())||"UNKNOWN"}}function L8(e,t){const n=e-t;return n<1?`+${(n*1e3).toFixed(0)}ms`:n<60?`+${n.toFixed(2)}s`:`+${Math.floor(n/60)}m${(n%60).toFixed(0)}s`}function R8(e){const t={timestamp:"#71717a",bracket:"#a78bfa",ip:"#22d3ee",domain:"#34d399",url:"#60a5fa",method:"#f472b6",status:"#4ade80",statusError:"#f87171",number:"#fbbf24",keyword:"#c084fc",info:"#22d3ee",warning:"#fbbf24",error:"#f87171",debug:"#71717a"},n=[];let r=e,i=0;const s=(l,c)=>{l&&n.push(c?o.jsx("span",{style:{color:c},children:l},i++):o.jsx("span",{children:l},i++))},a=[{regex:/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z?\s*)/,color:t.timestamp},{regex:/(\[[^\]]+\])/,color:t.bracket},{regex:/\b(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT)\b/,color:t.method},{regex:/\b([23]\d{2})\s+(OK|Created|Accepted|No Content|Moved|Found|Not Modified)\b/,color:t.status},{regex:/\b([45]\d{2})\s+\w+/,color:t.statusError},{regex:/(<< \d{3} \w+)/,color:t.status},{regex:/(https?:\/\/[^\s]+)/,color:t.url},{regex:/(\s)(\/[a-zA-Z0-9_\-./]+)/,color:t.url,group:2},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d+)/,color:t.ip},{regex:/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,color:t.ip},{regex:/(sandbox-agent-[a-zA-Z0-9_-]+:\d+)/,color:t.domain},{regex:/(host\.docker\.internal:\d+)/,color:t.domain},{regex:/([a-zA-Z][a-zA-Z0-9-]*\.(?:com|org|net|io|dev|local|internal)(?::\d+)?)/,color:t.domain},{regex:/\b(\d+(?:\.\d+)?[kmgb])\b/i,color:t.number},{regex:/\b(INFO)\b/,color:t.info},{regex:/\b(WARNING|WARN)\b/,color:t.warning},{regex:/\b(ERROR|CRITICAL|FATAL)\b/,color:t.error},{regex:/\b(DEBUG)\b/,color:t.debug},{regex:/([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*){2,})/,color:t.domain},{regex:/\b(client|server|connect|disconnect|completion|model|provider)\b/i,color:t.keyword}];for(;r.length>0;){let l=null;for(const{regex:c,color:u,group:d}of a){const f=r.match(c);if(f&&f.index!==void 0){const p=d?r.indexOf(f[d],f.index):f.index,h=d?f[d]:f[0];(!l||p<l.index)&&(l={index:p,length:h.length,text:h,color:u})}}if(l)l.index>0&&s(r.slice(0,l.index)),s(l.text,l.color),r=r.slice(l.index+l.length);else{s(r);break}}return o.jsx(o.Fragment,{children:n})}function I8({content:e}){const t=e.split(`
`);return o.jsx(o.Fragment,{children:t.map((n,r)=>o.jsx("div",{children:R8(n)},r))})}function O8({event:e}){var l,c,u,d,f,p,h,m,v,j,g,x,w,_,z,C,R,E,U,N,$,G,Y,A,D;const[t,n]=k.useState(new Set(["instruction","messages","result","response","state_delta","data"])),[r,i]=k.useState(null),s=P=>{const M=new Set(t);M.has(P)?M.delete(P):M.add(P),n(M)},a=(P,M=0,B=!1)=>{const O="  ".repeat(M),b="  ".repeat(M+1);if(P===null)return o.jsx("span",{className:"json-null",children:"null"});if(P===void 0)return o.jsx("span",{className:"json-undefined",children:"undefined"});if(typeof P=="boolean")return o.jsx("span",{className:"json-boolean",children:P.toString()});if(typeof P=="number")return o.jsx("span",{className:"json-number",children:P});if(typeof P=="string"){const W=P.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\t/g,"\\t"),H=()=>i(P);return W.length>300&&M>0?o.jsxs("span",{className:"json-string json-string-clickable",onClick:H,title:"Click to view as Markdown",children:['"',W.slice(0,300),'..." ',o.jsxs("span",{className:"json-truncated",children:["(",P.length," chars)"]})]}):o.jsxs("span",{className:"json-string json-string-clickable",onClick:H,title:"Click to view as Markdown",children:['"',W,'"']})}if(Array.isArray(P))return P.length===0?o.jsx("span",{className:"json-bracket",children:"[]"}):P.every(H=>H===null||typeof H!="object")&&P.length<=3?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"["}),P.map((H,y)=>o.jsxs("span",{children:[a(H,M+1,!0),y<P.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},y)),o.jsx("span",{className:"json-bracket",children:"]"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"["}),P.map((H,y)=>o.jsxs("span",{children:[`
`+b,a(H,M+1),y<P.length-1&&o.jsx("span",{className:"json-comma",children:","})]},y)),`
`+O,o.jsx("span",{className:"json-bracket",children:"]"})]});if(typeof P=="object"){const W=Object.entries(P);return W.length===0?o.jsx("span",{className:"json-bracket",children:"{}"}):W.length<=2&&W.every(([,y])=>y===null||typeof y!="object")&&B?o.jsxs("span",{className:"json-inline",children:[o.jsx("span",{className:"json-bracket",children:"{"}),W.map(([y,S],F)=>o.jsxs("span",{children:[o.jsxs("span",{className:"json-key",children:['"',y,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(S,M+1,!0),F<W.length-1&&o.jsx("span",{className:"json-comma",children:", "})]},y)),o.jsx("span",{className:"json-bracket",children:"}"})]}):o.jsxs("span",{className:"json-block",children:[o.jsx("span",{className:"json-bracket",children:"{"}),W.map(([y,S],F)=>o.jsxs("span",{children:[`
`+b,o.jsxs("span",{className:"json-key",children:['"',y,'"']}),o.jsx("span",{className:"json-colon",children:": "}),a(S,M+1),F<W.length-1&&o.jsx("span",{className:"json-comma",children:","})]},y)),`
`+O,o.jsx("span",{className:"json-bracket",children:"}"})]})}return String(P)};return o.jsxs("div",{className:"event-detail",children:[o.jsxs("div",{className:"detail-header",children:[o.jsx("span",{className:"detail-type",children:e.event_type}),o.jsx("span",{className:"detail-agent",style:{backgroundColor:nl(e.agent_name).bg,color:nl(e.agent_name).fg,padding:"2px 8px",borderRadius:"4px",fontWeight:600},children:e.agent_name}),o.jsx("span",{className:"detail-time",children:new Date(e.timestamp*1e3).toISOString()})]}),((l=e.data)==null?void 0:l.error)&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",style:{color:"#fca5a5"},children:[o.jsx(kl,{size:12,style:{color:"#ef4444"}}),o.jsx("span",{children:"⚠️ Error"})]}),o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{style:{marginBottom:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",e.data.error]}),e.data.hint&&o.jsxs("div",{style:{marginBottom:"8px",padding:"8px 12px",backgroundColor:"rgba(34, 197, 94, 0.1)",borderRadius:"6px",borderLeft:"3px solid #22c55e"},children:[o.jsx("strong",{style:{color:"#22c55e"},children:"💡 Hint:"})," ",o.jsx("span",{style:{color:"#86efac"},children:e.data.hint})]}),e.data.error_type&&e.data.error_type!=="unknown"&&o.jsxs("div",{style:{fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),e.data.sub_errors&&e.data.sub_errors.length>0&&o.jsxs("div",{style:{marginTop:"12px"},children:[o.jsxs("strong",{children:["Sub-errors (",e.data.sub_errors.length,"):"]}),e.data.sub_errors.map((P,M)=>o.jsxs("div",{style:{marginTop:"8px",marginLeft:"12px",padding:"8px",backgroundColor:"rgba(220, 38, 38, 0.1)",borderRadius:"4px"},children:[o.jsxs("div",{children:[o.jsxs("strong",{children:[P.exception_type,":"]})," ",P.message]}),P.hint&&o.jsxs("div",{style:{marginTop:"4px",color:"#86efac",fontSize:"0.9em"},children:["💡 ",P.hint]}),P.stack_trace&&o.jsxs("details",{style:{marginTop:"6px"},children:[o.jsx("summary",{style:{cursor:"pointer",opacity:.7,fontSize:"0.9em"},children:"Stack trace"}),o.jsx("pre",{style:{marginTop:"4px",padding:"6px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.75em",overflow:"auto",maxHeight:"200px",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'},children:P.stack_trace})]})]},M))]}),e.data.stack_trace&&o.jsxs("details",{style:{marginTop:"12px"},children:[o.jsx("summary",{style:{cursor:"pointer",opacity:.8,fontWeight:500},children:"📋 Stack Trace"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.8em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',lineHeight:"1.4"},children:e.data.stack_trace})]}),e.data.raw_error&&e.data.raw_error!==e.data.error&&!e.data.stack_trace&&o.jsxs("details",{style:{marginTop:"8px"},children:[o.jsx("summary",{style:{cursor:"pointer",opacity:.7},children:"Raw error"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"200px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.raw_error})]})]})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("data"),children:[t.has("data")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Event Data"})]}),t.has("data")&&o.jsx("div",{className:"section-content json-viewer",children:a(e.data)})]}),e.event_type==="agent_start"&&((c=e.data)==null?void 0:c.instruction)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("instruction"),children:[t.has("instruction")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Instruction"}),o.jsxs("span",{className:"char-count",children:[e.data.instruction.length," chars"]})]}),t.has("instruction")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"instruction-text",children:e.data.instruction})})]}),e.event_type==="model_call"&&((u=e.data)==null?void 0:u.contents)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("messages"),children:[t.has("messages")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["Messages (",e.data.contents.length,")"]})]}),t.has("messages")&&o.jsx("div",{className:"section-content",children:e.data.contents.map((P,M)=>{var B;return o.jsxs("div",{className:"message-item",children:[o.jsx("span",{className:`message-role ${P.role}`,children:P.role}),o.jsx("div",{className:"message-parts",children:(B=P.parts)==null?void 0:B.map((O,b)=>o.jsxs("div",{className:"message-part",children:[O.text&&o.jsx("pre",{children:O.text}),O.function_call&&o.jsxs("div",{className:"function-call",children:[o.jsx("strong",{children:O.function_call.name}),o.jsx("pre",{children:JSON.stringify(O.function_call.args,null,2)})]}),O.function_response&&o.jsxs("div",{className:"function-response",children:[o.jsx("strong",{children:O.function_response.name}),o.jsx("pre",{children:JSON.stringify(O.function_response.response,null,2)})]})]},b))})]},M)})})]}),e.event_type==="tool_result"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("result"),children:[t.has("result")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Tool Result"})]}),t.has("result")&&o.jsx("div",{className:"section-content",children:o.jsx("pre",{className:"result-content",children:((h=(p=(f=(d=e.data)==null?void 0:d.result)==null?void 0:f.content)==null?void 0:p[0])==null?void 0:h.text)||(typeof((m=e.data)==null?void 0:m.result)=="string"?e.data.result:JSON.stringify((v=e.data)==null?void 0:v.result,null,2))})})]}),e.event_type==="model_response"&&((j=e.data)==null?void 0:j.parts)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("response"),children:[t.has("response")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["Response (",e.data.parts.length," part",e.data.parts.length!==1?"s":"",")"]}),e.data.token_counts&&o.jsxs("span",{className:"token-badge",children:[e.data.token_counts.input,"↑ ",e.data.token_counts.output,"↓"]})]}),t.has("response")&&o.jsx("div",{className:"section-content",children:e.data.parts.map((P,M)=>o.jsxs("div",{className:"response-part",children:[P.type==="text"&&P.text&&o.jsx("pre",{className:"response-text",children:P.text}),P.type==="function_call"&&o.jsxs("div",{className:"function-call",children:[o.jsxs("strong",{children:["→ ",P.name,"()"]}),P.args&&Object.keys(P.args).length>0&&o.jsx("pre",{children:JSON.stringify(P.args,null,2)})]}),P.thought&&o.jsx("div",{className:"thought-indicator",children:"💭 Thinking"})]},M))})]}),(e.event_type==="callback_start"||e.event_type==="callback_end")&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("callback_info"),children:[t.has("callback_info")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"Callback Information"})]}),t.has("callback_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Name:"})," ",((g=e.data)==null?void 0:g.callback_name)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Type:"})," ",((x=e.data)==null?void 0:x.callback_type)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Module Path:"})," ",((w=e.data)==null?void 0:w.module_path)||"unknown"]}),((_=e.data)==null?void 0:_.error)&&o.jsxs("div",{style:{color:"#ef4444",marginTop:"8px"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Error:"})," ",e.data.error]}),((z=e.data)==null?void 0:z.error_type)&&o.jsxs("div",{style:{marginTop:"4px",fontSize:"0.9em",opacity:.8},children:[o.jsx("strong",{children:"Type:"})," ",e.data.error_type]}),((C=e.data)==null?void 0:C.stack_trace)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:e.data.stack_trace})]})]})]})]}),e.event_type==="callback_error"&&o.jsxs("div",{className:"detail-section",style:{borderColor:"#dc2626"},children:[o.jsxs("div",{className:"section-header",onClick:()=>s("error_info"),style:{color:"#fca5a5"},children:[t.has("error_info")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"⚠️ Error Details"})]}),t.has("error_info")&&o.jsxs("div",{className:"section-content",style:{color:"#fca5a5"},children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Source:"})," ",((R=e.data)==null?void 0:R.source)||"unknown"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Error Type:"})," ",((E=e.data)==null?void 0:E.error_type)||"unknown"]}),o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Message:"})," ",((U=e.data)==null?void 0:U.error)||"No error message"]}),((N=e.data)==null?void 0:N.context)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Context:"})," ",e.data.context]}),(($=e.data)==null?void 0:$.traceback)&&o.jsxs("div",{style:{marginTop:"8px"},children:[o.jsx("strong",{children:"Stack Trace:"}),o.jsx("pre",{style:{marginTop:"4px",padding:"8px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"0.85em",overflow:"auto",maxHeight:"400px",whiteSpace:"pre-wrap",wordBreak:"break-word",color:"#fca5a5"},children:e.data.traceback})]})]})]}),e.event_type==="state_change"&&((G=e.data)==null?void 0:G.state_delta)&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("state_delta"),children:[t.has("state_delta")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsxs("span",{children:["State Changes (",Object.keys(e.data.state_delta).length,")"]})]}),t.has("state_delta")&&o.jsx("div",{className:"section-content",children:Object.entries(e.data.state_delta).map(([P,M])=>o.jsxs("div",{className:"state-delta-item",children:[o.jsx("div",{className:"state-delta-key",children:P}),o.jsx("pre",{className:"state-delta-value",children:typeof M=="string"?M:JSON.stringify(M,null,2)})]},P))})]}),e.event_type==="compaction"&&o.jsxs("div",{className:"detail-section",children:[o.jsxs("div",{className:"section-header",onClick:()=>s("compaction_info"),children:[t.has("compaction_info")?o.jsx(zt,{size:12}):o.jsx(wt,{size:12}),o.jsx("span",{children:"📦 Compaction Details"})]}),t.has("compaction_info")&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{style:{marginBottom:"12px",padding:"8px",background:"rgba(147, 51, 234, 0.1)",borderRadius:"4px",border:"1px solid rgba(147, 51, 234, 0.3)"},children:[o.jsx("div",{style:{fontSize:"11px",color:"#a855f7",marginBottom:"4px",fontWeight:600},children:"Event Compaction Occurred"}),o.jsx("div",{style:{fontSize:"12px",color:"#e4e4e7"},children:"ADK has summarized older events to manage context window limits."})]}),((Y=e.data)==null?void 0:Y.start_timestamp)&&((A=e.data)==null?void 0:A.end_timestamp)&&o.jsxs("div",{style:{marginBottom:"8px"},children:[o.jsx("strong",{children:"Time Range Compacted:"})," ",new Date(e.data.start_timestamp*1e3).toLocaleTimeString()," - ",new Date(e.data.end_timestamp*1e3).toLocaleTimeString()]}),((D=e.data)==null?void 0:D.summary_preview)&&o.jsxs("div",{children:[o.jsx("strong",{children:"Summary Preview:"}),o.jsx("pre",{style:{marginTop:"8px",padding:"12px",backgroundColor:"#1a1a1a",borderRadius:"4px",fontSize:"11px",overflow:"auto",maxHeight:"300px",whiteSpace:"pre-wrap",wordBreak:"break-word",border:"1px solid #27272a"},children:e.data.summary_preview})]})]})]}),r&&o.jsx($8,{content:r,onClose:()=>i(null)})]})}function $8({content:e,onClose:t}){return o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e3},onClick:t,children:o.jsxs("div",{style:{backgroundColor:"#1a1a1e",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1200px",height:"85%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(Vr,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"String Content"}),o.jsxs("span",{style:{color:"#71717a",fontSize:"12px"},children:["(",e.length," chars)"]})]}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"#a1a1aa",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:o.jsx(Ui,{size:18})})]}),o.jsx("div",{style:{flex:1,overflow:"auto",padding:"20px"},children:o.jsx("pre",{style:{fontSize:"12px",lineHeight:"1.5",color:"#e4e4e7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',margin:0},children:e})}),o.jsx("div",{style:{padding:"8px 16px",borderTop:"1px solid #3f3f46",backgroundColor:"#27272a",display:"flex",justifyContent:"flex-end",gap:"8px"},children:o.jsxs("button",{onClick:()=>navigator.clipboard.writeText(e),style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"6px 12px",color:"#e4e4e7",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(Jr,{size:12}),"Copy"]})})]})})}function D8({title:e,versions:t,initialVersionIndex:n,onClose:r}){const[i,s]=k.useState(n);k.useEffect(()=>{const f=p=>{p.key==="ArrowUp"||p.key==="ArrowLeft"?(p.preventDefault(),s(h=>Math.max(0,h-1))):p.key==="ArrowDown"||p.key==="ArrowRight"?(p.preventDefault(),s(h=>Math.min(t.length-1,h+1))):p.key==="Escape"&&r()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[t.length,r]);const[a,l]=k.useState(!1),c=t[i],u=typeof c.value=="string"?c.value:JSON.stringify(c.value,null,2),d=async()=>{try{await navigator.clipboard.writeText(u),l(!0),setTimeout(()=>l(!1),2e3)}catch(f){console.error("Failed to copy:",f)}};return Qd.createPortal(o.jsxs("div",{className:"modal-overlay",onClick:r,children:[o.jsxs("div",{className:"modal-content",onClick:f=>f.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h3",{children:e}),t.length>1&&o.jsxs("div",{className:"version-nav",children:[o.jsx("button",{className:"version-btn",onClick:()=>s(f=>Math.max(0,f-1)),disabled:i===0,title:"Previous version (↑)",children:"▲"}),o.jsxs("span",{className:"version-info",children:["v",i+1,"/",t.length,o.jsxs("span",{className:"version-event",children:[" (event #",c.eventIndex,")"]})]}),o.jsx("button",{className:"version-btn",onClick:()=>s(f=>Math.min(t.length-1,f+1)),disabled:i===t.length-1,title:"Next version (↓)",children:"▼"})]}),o.jsxs("button",{className:"modal-copy-btn",onClick:d,title:"Copy to clipboard",children:[a?o.jsx(yn,{size:16}):o.jsx(Jr,{size:16}),a?"Copied!":"Copy"]}),o.jsx("button",{className:"modal-close",onClick:r,children:"×"})]}),o.jsx("div",{className:"modal-body markdown-content",children:o.jsx(b1,{children:u})}),t.length>1&&o.jsx("div",{className:"modal-footer",children:o.jsxs("span",{className:"version-hint",children:["Use ↑↓ arrow keys to navigate versions • Set at ",new Date(c.timestamp*1e3).toLocaleTimeString()]})})]}),o.jsx("style",{children:`
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
          background: var(--bg-primary, #1a1a1f);
          border-radius: var(--radius-lg, 12px);
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
          border-bottom: 1px solid var(--border-color, #333);
        }
        .modal-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary, #fff);
        }
        .modal-close {
          background: none;
          border: none;
          font-size: 24px;
          color: var(--text-secondary, #888);
          cursor: pointer;
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm, 4px);
        }
        .modal-close:hover {
          background: var(--bg-hover, #333);
          color: var(--text-primary, #fff);
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
          color: var(--text-primary, #fff);
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
          background: var(--bg-tertiary, #2a2a2f);
          padding: 2px 6px;
          border-radius: var(--radius-sm, 4px);
          font-family: var(--font-mono, monospace);
          font-size: 0.9em;
        }
        .markdown-content pre {
          background: var(--bg-tertiary, #2a2a2f);
          padding: 12px;
          border-radius: var(--radius-md, 8px);
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
          border-left: 3px solid var(--accent-primary, #3b82f6);
          padding-left: 1em;
          margin: 1em 0;
          color: var(--text-secondary, #888);
        }
        .markdown-content strong {
          font-weight: 700;
          color: var(--text-primary, #fff);
        }
        .markdown-content em {
          font-style: italic;
          color: var(--text-secondary, #888);
        }
        .markdown-content a {
          color: var(--accent-primary, #3b82f6);
          text-decoration: underline;
        }
        .markdown-content li {
          margin: 0.25em 0;
        }
        .version-nav {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-right: auto;
          margin-left: 16px;
        }
        .version-btn {
          background: var(--bg-tertiary, #2a2a2f);
          border: 1px solid var(--border-color, #333);
          color: var(--text-secondary, #888);
          cursor: pointer;
          padding: 4px 8px;
          border-radius: var(--radius-sm, 4px);
          font-size: 12px;
        }
        .version-btn:hover:not(:disabled) {
          background: var(--bg-hover, #333);
          color: var(--text-primary, #fff);
        }
        .version-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .version-info {
          font-size: 12px;
          color: var(--text-secondary, #888);
          font-weight: 500;
        }
        .version-event {
          color: var(--text-muted, #666);
          font-weight: normal;
        }
        .modal-footer {
          padding: 8px 20px;
          border-top: 1px solid var(--border-color, #333);
          background: var(--bg-secondary, #222);
        }
        .version-hint {
          font-size: 11px;
          color: var(--text-muted, #666);
        }
        .modal-copy-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-tertiary, #2a2a2f);
          border: 1px solid var(--border-color, #333);
          color: var(--text-secondary, #888);
          cursor: pointer;
          padding: 6px 12px;
          border-radius: var(--radius-sm, 4px);
          font-size: 12px;
          margin-left: auto;
        }
        .modal-copy-btn:hover {
          background: var(--bg-hover, #333);
          color: var(--text-primary, #fff);
        }
      `})]}),document.body)}function F8({events:e,selectedEventIndex:t,project:n}){const[r,i]=k.useState(null),{state:s,stateVersions:a}=k.useMemo(()=>{var p;const u={},d={};return(p=n==null?void 0:n.app)!=null&&p.state_keys&&n.app.state_keys.forEach(h=>{u[h.name]={value:void 0,timestamp:null,defined:!0,description:h.description,type:h.type},d[h.name]=[]}),n!=null&&n.agents&&n.agents.forEach(h=>{if(h.type==="LlmAgent"&&h.output_key){const m=h.output_key;u[m]||(u[m]={value:void 0,timestamp:null,defined:!0,description:`Output from ${h.name}`,type:"string"},d[m]=[])}}),e.filter(h=>h.event_type==="state_change").forEach((h,m)=>{var v;if((v=h.data)!=null&&v.state_delta){const j=e.indexOf(h);Object.entries(h.data.state_delta).forEach(([g,x])=>{d[g]||(d[g]=[]),d[g].push({value:x,eventIndex:j,timestamp:h.timestamp})})}}),(t!==null?e.slice(0,t+1):e).filter(h=>h.event_type==="state_change").forEach(h=>{var m;(m=h.data)!=null&&m.state_delta&&Object.entries(h.data.state_delta).forEach(([v,j])=>{var g;u[v]={...u[v],value:j,timestamp:h.timestamp,defined:((g=u[v])==null?void 0:g.defined)??!1}})}),{state:u,stateVersions:d}},[e,t,n]),l=u=>{const d=a[u]||[];if(d.length===0)return 0;if(t===null)return d.length-1;let f=0;for(let p=0;p<d.length&&d[p].eventIndex<=t;p++)f=p;return f},c=Object.entries(s);return o.jsxs(o.Fragment,{children:[r&&o.jsx(D8,{title:r.key,versions:r.versions,initialVersionIndex:r.initialVersionIndex,onClose:()=>i(null)}),o.jsxs("div",{className:"state-snapshot",children:[o.jsx("style",{children:`
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
        .state-version-count {
          font-size: 10px;
          color: #666;
          margin-left: 4px;
        }
        .state-desc {
          font-size: 11px;
          color: #666;
          margin-top: 2px;
        }
        .state-value-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .state-value-row .state-value {
          flex: 1;
        }
        .state-copy-btn {
          flex-shrink: 0;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          font-size: 10px;
          display: flex;
          align-items: center;
          gap: 4px;
          opacity: 0.6;
          transition: opacity 0.15s;
        }
        .state-entry:hover .state-copy-btn {
          opacity: 1;
        }
        .state-copy-btn:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
      `}),o.jsx("div",{className:"state-header",children:t!==null?`State after event #${t}`:e.length>0?"State at end of run":"Defined State Keys"}),c.length===0?o.jsx("div",{className:"state-empty",children:"No state keys defined"}):c.map(([u,{value:d,timestamp:f,defined:p,description:h,type:m}])=>{const v=a[u]||[],j=d===void 0?"(not set)":typeof d=="string"?d:JSON.stringify(d,null,2);return o.jsxs("div",{className:`state-entry ${d===void 0?"unset":""}`,children:[o.jsxs("div",{className:"state-key",children:[u,m&&o.jsxs("span",{className:"state-type",children:["(",m,")"]}),v.length>1&&o.jsxs("span",{className:"state-version-count",title:"Number of versions",children:["[",v.length," versions]"]})]}),o.jsxs("div",{className:"state-value-row",children:[o.jsx("div",{className:"state-value",onClick:()=>{d!==void 0&&v.length>0&&i({key:u,versions:v,initialVersionIndex:l(u)})},style:{cursor:d!==void 0?"pointer":"default"},title:d!==void 0?v.length>1?`Click to view (${v.length} versions, use ↑↓ to navigate)`:"Click to view in markdown viewer":void 0,children:j}),d!==void 0&&o.jsx(B8,{value:j})]}),h&&o.jsx("div",{className:"state-desc",children:h}),f&&o.jsx("div",{className:"state-time",children:new Date(f*1e3).toLocaleTimeString()})]},u)})]})]})}function B8({value:e}){const[t,n]=k.useState(!1),r=async i=>{i.stopPropagation();try{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),1500)}catch(s){console.error("Failed to copy:",s)}};return o.jsx("button",{className:"state-copy-btn",onClick:r,title:"Copy to clipboard",children:t?o.jsx(yn,{size:12}):o.jsx(Jr,{size:12})})}function U8({project:e,sessionId:t}){const[n,r]=k.useState([]),[i,s]=k.useState(!1),[a,l]=k.useState(null),[c,u]=k.useState(null),[d,f]=k.useState(null);k.useEffect(()=>{if(!(e!=null&&e.id)||!t){r([]);return}(async()=>{s(!0),l(null);try{const j=await nv(e.id,t);r(j)}catch(j){l(j.message||"Failed to load artifacts"),r([])}finally{s(!1)}})()},[e==null?void 0:e.id,t]);const p=v=>v===null?"":v<1024?`${v} B`:v<1024*1024?`${(v/1024).toFixed(1)} KB`:`${(v/(1024*1024)).toFixed(1)} MB`,h=v=>{if(!(e!=null&&e.id)||!t)return;const j=ca(e.id,t,v),g=document.createElement("a");g.href=j,g.download=v,document.body.appendChild(g),g.click(),document.body.removeChild(g)},m=v=>{if(!(!(e!=null&&e.id)||!t)&&v.is_image){const j=ca(e.id,t,v.filename);f(j)}};return o.jsxs(o.Fragment,{children:[d&&o.jsx("div",{className:"artifact-image-modal",onClick:()=>f(null),style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.85)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4,cursor:"pointer"},children:o.jsxs("div",{onClick:v=>v.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",position:"relative"},children:[o.jsx("button",{onClick:()=>f(null),style:{position:"absolute",top:-40,right:0,background:"transparent",border:"none",color:"#fff",cursor:"pointer",padding:8},children:o.jsx(Ui,{size:24})}),o.jsx("img",{src:d,alt:"Artifact preview",style:{maxWidth:"90vw",maxHeight:"85vh",objectFit:"contain",borderRadius:8}})]})}),o.jsxs("div",{className:"artifacts-panel",children:[o.jsx("style",{children:`
          .artifacts-panel {
            padding: 8px;
          }
          .artifacts-header {
            font-size: 11px;
            font-weight: 600;
            color: #a1a1aa;
            padding: 8px;
            background: #18181b;
            border-radius: 4px;
            margin-bottom: 8px;
          }
          .artifacts-empty {
            padding: 16px;
            text-align: center;
            color: #71717a;
            font-size: 12px;
          }
          .artifacts-loading {
            padding: 16px;
            text-align: center;
            color: #71717a;
            font-size: 12px;
          }
          .artifacts-error {
            padding: 12px;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 4px;
            color: #fca5a5;
            font-size: 11px;
          }
          .artifact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            background: #18181b;
            border-radius: 4px;
            margin-bottom: 4px;
            cursor: pointer;
            transition: background 0.15s;
          }
          .artifact-item:hover {
            background: #27272a;
          }
          .artifact-icon {
            flex-shrink: 0;
            color: #71717a;
          }
          .artifact-icon.image {
            color: #60a5fa;
          }
          .artifact-info {
            flex: 1;
            min-width: 0;
          }
          .artifact-name {
            font-size: 12px;
            color: #e4e4e7;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .artifact-meta {
            font-size: 10px;
            color: #71717a;
            margin-top: 2px;
          }
          .artifact-actions {
            display: flex;
            gap: 4px;
            flex-shrink: 0;
          }
          .artifact-btn {
            background: transparent;
            border: none;
            color: #71717a;
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .artifact-btn:hover {
            background: #3f3f46;
            color: #e4e4e7;
          }
          .artifact-preview {
            width: 100%;
            margin-top: 8px;
            border-radius: 4px;
            overflow: hidden;
            background: #09090b;
          }
          .artifact-preview img {
            width: 100%;
            height: auto;
            display: block;
          }
        `}),o.jsx("div",{className:"artifacts-header",children:t?"Session Artifacts":"No Session Selected"}),i?o.jsxs("div",{className:"artifacts-loading",children:[o.jsx(Ht,{size:16,className:"spin",style:{marginBottom:8}}),o.jsx("div",{children:"Loading artifacts..."})]}):a?o.jsx("div",{className:"artifacts-error",children:a}):t?n.length===0?o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(Ua,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"No artifacts in this session"}),o.jsx("div",{style:{fontSize:10,marginTop:4,color:"#52525b"},children:"Use tool_context.save_artifact() to save artifacts"})]}):n.map(v=>o.jsxs("div",{className:"artifact-item",children:[o.jsx("div",{className:`artifact-icon ${v.is_image?"image":""}`,children:v.is_image?o.jsx(jj,{size:16}):o.jsx(bj,{size:16})}),o.jsxs("div",{className:"artifact-info",children:[o.jsx("div",{className:"artifact-name",title:v.filename,children:v.filename}),o.jsxs("div",{className:"artifact-meta",children:[v.mime_type||"unknown type",v.size!==null&&` • ${p(v.size)}`]})]}),o.jsxs("div",{className:"artifact-actions",children:[v.is_image&&o.jsx("button",{className:"artifact-btn",title:"Preview",onClick:()=>m(v),children:o.jsx(Vr,{size:14})}),o.jsx("button",{className:"artifact-btn",title:"Download",onClick:()=>h(v.filename),children:o.jsx(Bi,{size:14})})]}),v.is_image&&c===v.filename&&(e==null?void 0:e.id)&&t&&o.jsx("div",{className:"artifact-preview",children:o.jsx("img",{src:ca(e.id,t,v.filename),alt:v.filename})})]},v.filename)):o.jsxs("div",{className:"artifacts-empty",children:[o.jsx(Ua,{size:24,style:{marginBottom:8,opacity:.5}}),o.jsx("div",{children:"Start a session to see artifacts"})]})]})]})}function Lc(e){if(!e)return{text:"",isError:!1};if(e.success===!1)return{text:e.error||"Unknown error",isError:!0};let t=e.result||e;if(typeof t=="string")try{const n=t.replace(/'/g,'"').replace(/True/g,"true").replace(/False/g,"false").replace(/None/g,"null");t=JSON.parse(n)}catch{return{text:t,isError:!1}}return t.content&&Array.isArray(t.content)?{text:t.content.filter(r=>r.type==="text").map(r=>r.text).join(`
`),isError:t.isError===!0}:{text:typeof t=="string"?t:JSON.stringify(t,null,2),isError:!1}}function bg(e,t){if(!t||!t.trim())return e;const n=t.trim();let r=e;try{r=JSON.parse(e)}catch{}if(n.startsWith("js:")){const i=n.slice(3).trim();try{const a=new Function("value","data",`return ${i}`)(e,r);return typeof a=="string"?a:JSON.stringify(a,null,2)}catch(s){return`[JS error: ${s}]`}}if(n.startsWith("."))try{const i=n.slice(1).split(".").filter(Boolean);let s=r;for(const a of i){const l=a.match(/^(\w+)?\[(\d+)\]$/);l?(l[1]&&(s=s[l[1]]),s=s[parseInt(l[2])]):s=s[a]}return s==null?"[No match]":typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Path error: ${i.message}]`}try{const s=new Function("value","data",`return ${n}`)(e,r);return typeof s=="string"?s:JSON.stringify(s,null,2)}catch(i){return`[Transform error: ${i.message}]`}}function V8({project:e,selectedEventIndex:t,sandboxMode:n}){var ae,ye;const{watches:r,updateWatch:i,addWatch:s,removeWatch:a,runEvents:l}=yt(),[c,u]=k.useState(!1),[d,f]=k.useState(null),[p,h]=k.useState({}),[m,v]=k.useState(new Set),[j,g]=k.useState(""),[x,w]=k.useState(""),[_,z]=k.useState({}),[C,R]=k.useState(""),[E,U]=k.useState([]),[N,$]=k.useState(null),[G,Y]=k.useState(null),[A,D]=k.useState(!1);k.useEffect(()=>{rp().then(U).catch(console.error)},[]);const P=k.useMemo(()=>{const ee=e.mcp_servers||[],le=new Set(ee.map(Se=>Se.name)),be=E.filter(Se=>!le.has(Se.name));return[...ee,...be]},[e.mcp_servers,E]),M=k.useCallback(async ee=>{if(!(p[ee]||m.has(ee))){v(le=>new Set([...le,ee]));try{const le=await Ae(`/projects/${e.id}/mcp-servers/${encodeURIComponent(ee)}/test-connection`,{method:"POST"});le.success&&h(be=>({...be,[ee]:le.tools}))}catch(le){console.error("Failed to load tools:",le)}finally{v(le=>{const be=new Set(le);return be.delete(ee),be})}}},[e.id,p,m]);k.useEffect(()=>{var Se;if(d)return;if(!j||!x){z({});return}const le=(p[j]||[]).find(me=>me.name===x);if(!((Se=le==null?void 0:le.parameters)!=null&&Se.properties)){z({});return}const be={};Object.entries(le.parameters.properties).forEach(([me,Ne])=>{Ne.type==="string"?be[me]=Ne.default||"":Ne.type==="number"||Ne.type==="integer"?be[me]=Ne.default||0:Ne.type==="boolean"?be[me]=Ne.default||!1:be[me]=Ne.default||null}),z(be)},[j,x,p,d]);const B=()=>{f(null),g(""),w(""),z({}),R(""),$(null),Y(null),u(!0)},O=ee=>{if(f(ee.id),g(ee.serverName),w(ee.toolName),z({...ee.args}),R(ee.transform||""),ee.result){const{text:le}=Lc(ee.result);$(le),Y(null)}else $(null),Y(null);p[ee.serverName]||M(ee.serverName),u(!0)},b=async()=>{var le;if(!j||!x)return;D(!0),Y(null);const ee=((le=e.app)==null?void 0:le.id)||`app_${e.id}`;try{const be=await Ae(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:j,tool_name:x,arguments:_,sandbox_mode:n,app_id:n?ee:void 0})}),{text:Se,isError:me}=Lc(be);me?(Y(Se),$(null)):($(Se),Y(null))}catch(be){Y(String(be)),$(null)}finally{D(!1)}},W=k.useMemo(()=>N?!C||!C.trim()?N:bg(N,C):null,[N,C]),H=()=>{if(!(!j||!x)){if(d){i(d,{serverName:j,toolName:x,args:{..._},transform:C||void 0});const ee=r.find(le=>le.id===d);ee&&S({...ee,serverName:j,toolName:x,args:_,transform:C||void 0,history:ee.history||[]})}else{const ee={id:`watch-${Date.now()}`,serverName:j,toolName:x,args:{..._},transform:C||void 0,history:[]};s(ee),S(ee)}u(!1)}},y=ee=>{a(ee)},S=k.useCallback(async(ee,le)=>{var Ne;i(ee.id,{isLoading:!0,error:void 0});const be=le??l.length-1,Se=Date.now(),me=((Ne=e.app)==null?void 0:Ne.id)||`app_${e.id}`;try{const X=await Ae(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:ee.serverName,tool_name:ee.toolName,arguments:ee.args,sandbox_mode:n,app_id:n?me:void 0})}),he={eventIndex:be,timestamp:Se,result:X},Z=[...ee.history||[],he];i(ee.id,{result:X,isLoading:!1,lastRun:Se,history:Z})}catch(X){const he={eventIndex:be,timestamp:Se,error:String(X)},Z=[...ee.history||[],he];i(ee.id,{error:String(X),isLoading:!1,lastRun:Se,history:Z})}},[e.id,(ae=e.app)==null?void 0:ae.id,i,l.length,n]),F=()=>{r.forEach(ee=>S(ee))},te=k.useMemo(()=>!j||!x?null:(p[j]||[]).find(le=>le.name===x),[j,x,p]);return o.jsxs("div",{className:"tool-watch-panel",children:[o.jsxs("div",{className:"watch-header",children:[o.jsx(Vr,{size:14}),o.jsx("span",{children:"Tool Watch"}),o.jsx("span",{className:"watch-auto-badge",title:"Watches auto-refresh on every event",children:"⚡ Auto"}),o.jsxs("div",{className:"watch-actions",children:[o.jsx("button",{className:"watch-btn",onClick:F,title:"Refresh all",children:o.jsx(Ht,{size:12})}),o.jsx("button",{className:"watch-btn",onClick:B,title:"Add watch",children:o.jsx(nt,{size:12})})]})]}),r.length===0?o.jsxs("div",{className:"watch-empty",children:[o.jsx(Vr,{size:20,style:{opacity:.3}}),o.jsx("span",{children:"No watch expressions"}),o.jsxs("button",{className:"add-watch-btn",onClick:B,children:[o.jsx(nt,{size:12})," Add Tool Watch"]})]}):o.jsx("div",{className:"watch-list",children:r.map(ee=>{let le=ee.result,be=ee.error;if(t!==null&&ee.history&&ee.history.length>0){const he=ee.history.filter(Z=>Z.eventIndex<=t);if(he.length>0){const Z=he[he.length-1];le=Z.result,be=Z.error}else le=void 0,be=void 0}const{text:Se,isError:me}=le?Lc(le):{text:"",isError:!1},Ne=le?bg(Se,ee.transform):"",X=be||me;return o.jsxs("div",{className:`watch-item ${X?"error":""}`,children:[o.jsxs("div",{className:"watch-item-header",children:[o.jsxs("span",{className:"watch-expr",children:[o.jsx("span",{className:"watch-server",children:ee.serverName}),o.jsx("span",{className:"watch-tool",children:ee.toolName}),Object.keys(ee.args).length>0&&o.jsxs("span",{className:"watch-args",children:["(",Object.entries(ee.args).map(([he,Z])=>`${he}=${JSON.stringify(Z)}`).join(", "),")"]}),t!==null&&o.jsxs("span",{className:"watch-time-indicator",children:["@",t]})]}),o.jsxs("div",{className:"watch-item-actions",children:[o.jsx("button",{onClick:()=>O(ee),title:"Edit watch",children:o.jsx(gn,{size:10})}),o.jsx("button",{onClick:()=>S(ee),title:"Refresh",children:ee.isLoading?o.jsx(Ht,{size:10,className:"spin"}):o.jsx(Ht,{size:10})}),o.jsx("button",{onClick:()=>y(ee.id),title:"Remove",children:o.jsx(Je,{size:10})})]})]}),o.jsx("div",{className:"watch-result",children:ee.isLoading?o.jsx("span",{className:"loading",children:"Loading..."}):be?o.jsx("span",{className:"error",children:be}):le?o.jsx("pre",{className:me?"error-text":"",children:Ne}):o.jsx("span",{className:"no-result",children:t!==null?"No data at this event":"Not yet run"})})]},ee.id)})}),c&&o.jsx("div",{className:"watch-dialog-overlay",onClick:()=>u(!1),children:o.jsxs("div",{className:"watch-dialog",onClick:ee=>ee.stopPropagation(),children:[o.jsxs("div",{className:"dialog-header",children:[o.jsx("span",{children:d?"Edit Watch":"Add Tool Watch"}),o.jsx("button",{onClick:()=>u(!1),children:o.jsx(Ui,{size:14})})]}),o.jsxs("div",{className:"dialog-body",children:[o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"MCP Server"}),o.jsxs("select",{value:j,onChange:ee=>{g(ee.target.value),d||w(""),ee.target.value&&M(ee.target.value)},children:[o.jsx("option",{value:"",children:"Select server..."}),P.map(ee=>o.jsx("option",{value:ee.name,children:ee.name},ee.name))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsx("label",{children:"Tool"}),o.jsxs("select",{value:x,onChange:ee=>w(ee.target.value),disabled:!j||m.has(j),children:[o.jsx("option",{value:"",children:m.has(j)?"Loading tools...":"Select tool..."}),(p[j]||[]).map(ee=>o.jsx("option",{value:ee.name,children:ee.name},ee.name))]})]}),(te==null?void 0:te.description)&&o.jsx("div",{className:"tool-desc",children:te.description}),((ye=te==null?void 0:te.parameters)==null?void 0:ye.properties)&&Object.keys(te.parameters.properties).length>0&&o.jsxs("div",{className:"tool-args",children:[o.jsx("label",{children:"Arguments"}),Object.entries(te.parameters.properties).map(([ee,le])=>{var be,Se;return o.jsxs("div",{className:"arg-row",children:[o.jsxs("span",{className:"arg-name",children:[ee,((be=te.parameters.required)==null?void 0:be.includes(ee))&&o.jsx("span",{className:"required",children:"*"})]}),o.jsx("input",{type:le.type==="number"||le.type==="integer"?"number":"text",value:typeof _[ee]=="object"?JSON.stringify(_[ee]):_[ee]??"",onChange:me=>z(Ne=>({...Ne,[ee]:me.target.value})),placeholder:((Se=le.description)==null?void 0:Se.slice(0,40))||ee})]},ee)})]}),j&&x&&o.jsxs("div",{className:"test-section",children:[o.jsxs("div",{className:"test-header",children:[o.jsx("label",{children:"Test & Preview"}),o.jsxs("button",{className:"test-btn",onClick:b,disabled:A,children:[A?o.jsx(Ht,{size:12,className:"spin"}):o.jsx(xr,{size:12}),A?"Running...":"Test Run"]})]}),G&&o.jsxs("div",{className:"test-result error",children:[o.jsx("span",{className:"test-label",children:"Error:"}),o.jsx("pre",{children:G})]}),N&&o.jsxs("div",{className:"test-result",children:[o.jsx("span",{className:"test-label",children:"Raw Result:"}),o.jsx("pre",{children:N})]})]}),o.jsxs("div",{className:"form-row transform-row",children:[o.jsx("label",{children:"Transform (optional)"}),o.jsx("input",{type:"text",value:C,onChange:ee=>R(ee.target.value),placeholder:"e.g., .items[0].name or .content[].text"}),o.jsxs("div",{className:"transform-hints",children:[o.jsx("span",{className:"hint-title",children:"Path:"}),o.jsx("code",{onClick:()=>R(".items[0].name"),children:".items[0].name"}),o.jsx("code",{onClick:()=>R(".content[0].text"),children:".content[0].text"}),o.jsx("code",{onClick:()=>R(".result.data"),children:".result.data"}),o.jsx("span",{className:"hint-title",children:"JS:"}),o.jsx("code",{onClick:()=>R("js:value.split('\\n')[0]"),children:"js:value.split('\\n')[0]"}),o.jsx("code",{onClick:()=>R("js:data.items?.length"),children:"js:data.items?.length"})]})]}),N&&C&&o.jsxs("div",{className:"transform-preview",children:[o.jsx("span",{className:"test-label",children:"Transform Preview:"}),o.jsx("pre",{className:W!=null&&W.startsWith("[Transform error")?"error":"",children:W})]})]}),o.jsxs("div",{className:"dialog-footer",children:[o.jsx("button",{className:"cancel-btn",onClick:()=>u(!1),children:"Cancel"}),o.jsx("button",{className:"add-btn",onClick:H,disabled:!j||!x,children:d?"Save Changes":"Add Watch"})]})]})})]})}function W8(){var Hp,qp;const{project:e,updateProject:t,isRunning:n,setIsRunning:r,runEvents:i,addRunEvent:s,clearRunEvents:a,clearWatchHistories:l,runAgentId:c,setRunAgentId:u,watches:d,updateWatch:f,currentSessionId:p,setCurrentSessionId:h}=yt(),[m,v]=k.useState(""),[j,g]=k.useState(null),[x,w]=k.useState(null),[_,z]=k.useState(null),[C,R]=k.useState(""),[E,U]=k.useState(new Set(["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_start","callback_end","callback_error"])),[N,$]=k.useState(()=>{const q=localStorage.getItem("sandboxMode");return q!==null?q==="true":!0});k.useEffect(()=>{localStorage.setItem("sandboxMode",String(N))},[N]);const[G,Y]=k.useState(null),[A,D]=k.useState(!1),[P,M]=k.useState({}),[B,O]=k.useState(!1),[b,W]=k.useState("agent"),H=k.useRef(null),y=k.useRef(!0),S=k.useRef(0),[F,te]=k.useState(!0),[ae,ye]=k.useState(!0),[ee,le]=k.useState(!1),[be,Se]=k.useState(!1),[me,Ne]=k.useState(360),[X,he]=k.useState(!1),[Z,I]=k.useState(!1),[Q,T]=k.useState(!1),V=k.useMemo(()=>n?"running":i.length===0?"idle":Q?"cancelled":i.slice(-5).some(de=>{var fe,Le,Ie,ft,Ft;if(!de||!de.event_type)return!1;if((fe=de.data)!=null&&fe.error||de.event_type==="callback_error"||de.event_type==="agent_end"&&((Le=de.data)!=null&&Le.error)||vg(de).includes("[ERROR]"))return!0;if(de.event_type==="model_response"){const Mn=(((ft=(Ie=de.data)==null?void 0:Ie.response_content)==null?void 0:ft.parts)||((Ft=de.data)==null?void 0:Ft.parts)||[]).find(Kr=>(Kr==null?void 0:Kr.type)==="text");if(Mn!=null&&Mn.text&&(Mn.text.includes("[ERROR]")||Mn.text.toLowerCase().includes("error:")||Mn.text.toLowerCase().includes("exception:")))return!0}return!1})?"failed":"completed",[n,i,Q]),[L,J]=k.useState(!1),[ne,pe]=k.useState([]),K=k.useRef(null);k.useEffect(()=>{if(!e)return;const q=`promptHistory_${e.id}`,ie=localStorage.getItem(q);if(ie)try{const de=JSON.parse(ie),ge=Object.entries(de).map(([fe,Le])=>({prompt:fe,count:Le})).sort((fe,Le)=>Le.count-fe.count);pe(ge)}catch(de){console.error("Failed to parse prompt history:",de)}else pe([])},[e==null?void 0:e.id]);const re=k.useCallback(q=>{const ie=q.trim();if(!ie||!e)return;const de=`promptHistory_${e.id}`,ge=localStorage.getItem(de),fe=ge?JSON.parse(ge):{};fe[ie]=(fe[ie]||0)+1,localStorage.setItem(de,JSON.stringify(fe));const Le=Object.entries(fe).map(([Ie,ft])=>({prompt:Ie,count:ft})).sort((Ie,ft)=>ft.count-Ie.count);pe(Le)},[e]),we=k.useMemo(()=>{const q=m.toLowerCase().trim();return ne.filter(ie=>!q||ie.prompt.toLowerCase().includes(q)).slice(0,10)},[ne,m]),[_e,ke]=k.useState([60,80,100,80,1]),[Pe,Xe]=k.useState(null),ot=k.useRef(0),ce=k.useRef(0),[Ee,ue]=k.useState([]),[ze,je]=k.useState(null),[De,$t]=k.useState(!1),_r=k.useRef(0),Zt=k.useCallback(async(q,ie)=>{var Le;if(!e)return;f(q.id,{isLoading:!0,error:void 0});const de=ie??i.length-1,ge=Date.now(),fe=((Le=e.app)==null?void 0:Le.id)||`app_${e.id}`;try{const Ie=await Ae(`/projects/${e.id}/run-mcp-tool`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({server_name:q.serverName,tool_name:q.toolName,arguments:q.args,sandbox_mode:N,app_id:N?fe:void 0})}),ft={eventIndex:de,timestamp:ge,result:Ie},Ft=[...q.history||[],ft];f(q.id,{result:Ie,isLoading:!1,lastRun:ge,history:Ft})}catch(Ie){const ft={eventIndex:de,timestamp:ge,error:String(Ie)},Ft=[...q.history||[],ft];f(q.id,{error:String(Ie),isLoading:!1,lastRun:ge,history:Ft})}},[e==null?void 0:e.id,(Hp=e==null?void 0:e.app)==null?void 0:Hp.id,f,i.length,N]);k.useEffect(()=>{if(i.length>_r.current&&d.length>0){const q=i.length-1;d.forEach(ie=>{ie.isLoading||Zt(ie,q)})}_r.current=i.length},[i.length,d,Zt]),k.useEffect(()=>{c!==null&&(Dp(c),u(null))},[c,u]);const[Hi,Dp]=k.useState(null),ys=k.useRef(null),Pl=k.useRef(null);k.useEffect(()=>{if(!X)return;const q=de=>{if(!Pl.current)return;const fe=Pl.current.getBoundingClientRect().right-de.clientX;Ne(Math.min(600,Math.max(200,fe)))},ie=()=>{he(!1)};return document.addEventListener("mousemove",q),document.addEventListener("mouseup",ie),()=>{document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",ie)}},[X]),k.useEffect(()=>{if(Pe===null)return;const q=de=>{const ge=de.clientX-ot.current,fe=Math.max(40,ce.current+ge);ke(Le=>{const Ie=[...Le];return Ie[Pe]=fe,Ie})},ie=()=>{Xe(null)};return document.addEventListener("mousemove",q),document.addEventListener("mouseup",ie),document.body.style.cursor="col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",ie),document.body.style.cursor="",document.body.style.userSelect=""}},[Pe]);const vs=(q,ie)=>{ie.preventDefault(),ot.current=ie.clientX,ce.current=_e[q],Xe(q)},Fp=_e.map((q,ie)=>ie===_e.length-1?`minmax(${q}px, 1fr)`:`${q}px`).join(" "),t0=k.useMemo(()=>i.length===0?{min:0,max:0}:{min:i[0].timestamp,max:i[i.length-1].timestamp},[i]),Dt=k.useMemo(()=>i.filter((q,ie)=>{var de,ge,fe;if(_&&(q.timestamp<_[0]||q.timestamp>_[1])||E.size>0&&!E.has(q.event_type))return!1;if(F&&q.event_type==="model_response"){const Le=((ge=(de=q.data)==null?void 0:de.response_content)==null?void 0:ge.parts)||((fe=q.data)==null?void 0:fe.parts)||[],Ie=Le.some(Ft=>Ft.type==="function_call"),ft=Le.some(Ft=>Ft.type==="text");if(!Ie&&!ft)return!1}return!(C&&!JSON.stringify(q).toLowerCase().includes(C.toLowerCase()))}),[i,_,E,C,F]),bs=k.useMemo(()=>{var ge;let q=0,ie=0;const de=x!==null?x+1:i.length;for(let fe=0;fe<de;fe++){const Le=i[fe];Le.event_type==="model_response"&&((ge=Le.data)!=null&&ge.token_counts)&&(q+=Le.data.token_counts.input||0,ie+=Le.data.token_counts.output||0)}return{input:q,output:ie,total:q+ie}},[i,x]),Bp=x!==null?i[x]:null;k.useEffect(()=>{if(!e){ue([]);return}(async()=>{$t(!0);try{const ie=await Mu(e.id);ue(ie)}catch(ie){console.error("Failed to load sessions:",ie),ue([])}finally{$t(!1)}})()},[e]);const Ll=k.useCallback(async q=>{if(!e){je(null);return}if(!q){a(),l(),h(null),je(null),w(null),z(null);return}try{const ie=await tv(e.id,q);a(),l(),h(ie.id),je(q),w(null),z(null);for(const de of ie.events)s(de)}catch(ie){alert(`Failed to load session: ${ie.message||"Unknown error"}`)}},[e,a,l,h,s]);k.useEffect(()=>{if(!e||Ee.length===0||De)return;const ie=new URLSearchParams(window.location.search).get("session");if(ie)if(Ee.some(ge=>ge.id===ie)){Ll(ie);const ge=window.location.pathname;window.history.replaceState({},"",ge)}else console.warn(`Session ${ie} not found in available sessions`)},[e,Ee,De,Ll]),k.useEffect(()=>{n&&ys.current&&(ys.current.scrollTop=ys.current.scrollHeight)},[i.length,n]);const qi=k.useCallback(q=>{const ie=q??m;if(!e||!ie.trim()||n)return;I(!0),re(ie),J(!1),v(ie),j&&(j.close(),g(null)),a(),l(),je(null),h(null),r(!0),T(!1),w(null),z(null);const de=sv(e.id);g(de),de.onopen=()=>{de.send(JSON.stringify({message:ie,agent_id:Hi||void 0,sandbox_mode:N}))},de.onmessage=ge=>{var Le;const fe=JSON.parse(ge.data);if(fe.event_type==="agent_start"&&((Le=fe.data)!=null&&Le.session_id)){const Ie=fe.data.session_id;fe.data.session_reused,h(Ie),Ie&&Ee.some(ft=>ft.id===Ie)&&je(Ie)}else if(fe.type==="session_started")h(fe.session_id),fe.session_id&&Ee.some(Ie=>Ie.id===fe.session_id)&&je(fe.session_id);else if(fe.type==="sandbox_starting")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:"Starting Docker sandbox..."}});else if(fe.type==="sandbox_started")s({timestamp:Date.now()/1e3,event_type:"agent_start",agent_name:"sandbox",data:{message:`Sandbox started (ID: ${fe.sandbox_id})`}});else if(fe.type==="sandbox_response")s({timestamp:Date.now()/1e3,event_type:"model_response",agent_name:"sandbox",data:fe.data});else if(fe.event_type==="approval_required"||fe.type==="network_request"&&fe.event_type==="approval_required"){const Ie={id:fe.id,method:fe.method||"GET",url:fe.url,host:fe.host,source:fe.source||"agent",headers:fe.headers||{},timeout:fe.timeout||30};Y(Ie),s({timestamp:Date.now()/1e3,event_type:"callback_start",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`⚠️ Network request to ${fe.host} requires approval`,host:fe.host,url:fe.url}})}else fe.type==="completed"?(r(!1),de.close()):fe.type==="error"?(r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:fe.error}})):s(fe)},de.onerror=ge=>{console.error("WebSocket error:",ge),r(!1),s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:"Connection error. The server may have timed out or the LLM request failed. Try again or check if your model server is running.",retryable:!0}})},de.onclose=ge=>{n&&(r(!1),ge.code!==1e3&&ge.code!==1005&&s({timestamp:Date.now()/1e3,event_type:"agent_end",agent_name:"system",data:{error:`Connection closed unexpectedly (code: ${ge.code}). This may be due to a timeout or server error. Try increasing the request timeout in your model configuration.`,retryable:!0}}))}},[e,m,n,j,a,l,r,s,Hi,h,N,re]),n0=k.useCallback(()=>{j==null||j.close(),r(!1),T(!0)},[j,r]),r0=k.useCallback(async(q,ie,de)=>{var Ft,Il,Mn,Kr,Jp,Gp,Kp,Yp,Qp,Xp,Zp,ef,tf,nf,rf,of,sf,af,lf,cf,uf,df,pf,ff,hf,mf;if(!G||!e)return;const ge=((Ft=e.app)==null?void 0:Ft.id)||e.id,fe=q?"allow_pattern":"allow_once",Le=q||G.host,Ie=ie||"exact",ft=de?`/sandbox/${ge}/approval?project_id=${e.id}`:`/sandbox/${ge}/approval`;try{if(await Ae(ft,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:G.id,action:fe,pattern:Le,pattern_type:Ie,persist:de||!1})}),de&&fe==="allow_pattern"){const Ol=((Kr=(Mn=(Il=e.app)==null?void 0:Il.sandbox)==null?void 0:Mn.allowlist)==null?void 0:Kr.user)||[],g0={id:`pattern_${Date.now().toString(36)}`,pattern:Le,pattern_type:Ie,source:"approved",added_at:new Date().toISOString()};t({app:{...e.app,sandbox:{...(Jp=e.app)==null?void 0:Jp.sandbox,enabled:((Kp=(Gp=e.app)==null?void 0:Gp.sandbox)==null?void 0:Kp.enabled)??!1,allow_all_network:((Qp=(Yp=e.app)==null?void 0:Yp.sandbox)==null?void 0:Qp.allow_all_network)??!1,allowlist:{auto:((ef=(Zp=(Xp=e.app)==null?void 0:Xp.sandbox)==null?void 0:Zp.allowlist)==null?void 0:ef.auto)||[],user:[...Ol,g0]},unknown_action:((nf=(tf=e.app)==null?void 0:tf.sandbox)==null?void 0:nf.unknown_action)??"ask",approval_timeout:((of=(rf=e.app)==null?void 0:rf.sandbox)==null?void 0:of.approval_timeout)??30,agent_memory_limit_mb:((af=(sf=e.app)==null?void 0:sf.sandbox)==null?void 0:af.agent_memory_limit_mb)??512,agent_cpu_limit:((cf=(lf=e.app)==null?void 0:lf.sandbox)==null?void 0:cf.agent_cpu_limit)??1,mcp_memory_limit_mb:((df=(uf=e.app)==null?void 0:uf.sandbox)==null?void 0:df.mcp_memory_limit_mb)??256,mcp_cpu_limit:((ff=(pf=e.app)==null?void 0:pf.sandbox)==null?void 0:ff.mcp_cpu_limit)??.5,run_timeout:((mf=(hf=e.app)==null?void 0:hf.sandbox)==null?void 0:mf.run_timeout)??3600}}})}s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`✅ Approved: ${Le}`,pattern:Le,action:fe}})}catch(Ol){console.error("Failed to approve:",Ol)}Y(null)},[G,e,s,t]),i0=k.useCallback(async()=>{var ie;if(!G||!e)return;const q=((ie=e.app)==null?void 0:ie.id)||e.id;try{await Ae(`/sandbox/${q}/approval`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:G.id,action:"deny"})}),s({timestamp:Date.now()/1e3,event_type:"callback_end",agent_name:"sandbox",data:{callback_name:"network_approval",callback_type:"approval",message:`❌ Denied: ${G.host}`,host:G.host,action:"deny"}})}catch(de){console.error("Failed to deny:",de)}Y(null)},[G,e,s]),Ji=k.useCallback(async(q=!0)=>{var de;if(!e)return;const ie=((de=e.app)==null?void 0:de.id)||`app_${e.id}`;q&&O(!0);try{const[ge,fe]=await Promise.all([Ae(`/sandbox/${ie}/logs?container=agent&tail=500`).catch(()=>null),Ae(`/sandbox/${ie}/logs?container=gateway&tail=500`).catch(()=>null)]);M({agent:(ge==null?void 0:ge.logs)||(ge==null?void 0:ge.error)||"No logs available",gateway:(fe==null?void 0:fe.logs)||(fe==null?void 0:fe.error)||"No logs available"})}catch(ge){console.error("Failed to fetch logs:",ge),M({agent:`Error fetching logs: ${ge}`,gateway:`Error fetching logs: ${ge}`})}finally{q&&O(!1)}},[e]),o0=k.useCallback(()=>{D(!0),Ji()},[Ji]);k.useEffect(()=>{if(!A||!H.current||B)return;const q=H.current,ie=S.current,de=q.scrollHeight;setTimeout(()=>{if(H.current){if(y.current)H.current.scrollTop=H.current.scrollHeight;else if(ie>0&&de>ie){const ge=de-ie;H.current.scrollTop+=ge}S.current=H.current.scrollHeight}},50)},[A,b,P,B]),k.useEffect(()=>{A&&(y.current=!0,S.current=0)},[A,b]);const s0=k.useCallback(()=>{if(!H.current)return;const q=H.current,de=q.scrollHeight-q.scrollTop-q.clientHeight<50;y.current=de},[]);k.useEffect(()=>{if(!A)return;const q=setInterval(()=>{Ji(!1)},3e3);return()=>clearInterval(q)},[A,Ji]),k.useEffect(()=>{const q=ie=>{if((ie.metaKey||ie.ctrlKey)&&ie.key==="Enter"){ie.preventDefault(),qi();return}if(ie.key==="ArrowDown"||ie.key==="ArrowUp"){if(ie.target instanceof HTMLInputElement||ie.target instanceof HTMLTextAreaElement||(ie.preventDefault(),Dt.length===0))return;if(ie.key==="ArrowDown")if(x===null){const de=i.indexOf(Dt[0]);w(de)}else{const de=Dt.findIndex(ge=>i.indexOf(ge)===x);if(de<Dt.length-1){const ge=i.indexOf(Dt[de+1]);w(ge)}}else if(ie.key==="ArrowUp")if(x===null){const de=i.indexOf(Dt[Dt.length-1]);w(de)}else{const de=Dt.findIndex(ge=>i.indexOf(ge)===x);if(de>0){const ge=i.indexOf(Dt[de-1]);w(ge)}}}};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)},[qi,Dt,x,i]);const a0=k.useCallback(()=>{var fe;if(i.length===0)return;const q={version:1,exportedAt:new Date().toISOString(),projectId:e==null?void 0:e.id,projectName:e==null?void 0:e.name,agentId:Hi||((fe=e==null?void 0:e.app)==null?void 0:fe.root_agent_id),events:i},ie=new Blob([JSON.stringify(q,null,2)],{type:"application/json"}),de=URL.createObjectURL(ie),ge=document.createElement("a");ge.href=de,ge.download=`run-${(e==null?void 0:e.name)||"export"}-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(ge),ge.click(),document.body.removeChild(ge),URL.revokeObjectURL(de)},[i,e,Hi]),l0=k.useCallback(async()=>{if(!p||!e){alert("No active session to save");return}try{const q=await ev(p);if(q.success){alert(q.message||"Session saved to memory successfully");try{const ie=await Mu(e.id);ue(ie)}catch{}}else alert(`Failed to save to memory: ${q.error||"Unknown error"}`)}catch(q){alert(`Error saving to memory: ${q.message||"Unknown error"}`)}},[p,e]),[c0,ws]=k.useState(!1),[u0,d0]=k.useState([]),[Gi,Up]=k.useState(""),[Rl,p0]=k.useState("Test Case from Session"),[Vp,Wp]=k.useState(!1),f0=k.useCallback(async()=>{if(!p||!e){alert("No active session to create test case from");return}try{const q=await Ae(`/projects/${e.id}/eval-sets`);if(d0(q.eval_sets||[]),!q.eval_sets||q.eval_sets.length===0){confirm(`No evaluation sets found. Would you like to create one first?

Go to the Evals tab to create an evaluation set.`)&&(window.location.href=`/project/${e.id}/evals`);return}Up(q.eval_sets[0].id),ws(!0)}catch(q){alert(`Error loading eval sets: ${q.message||"Unknown error"}`)}},[p,e]),h0=k.useCallback(async()=>{if(!p||!e||!Gi){alert("Please select an evaluation set");return}Wp(!0);try{const q=await Ae(`/projects/${e.id}/session-to-eval-case`,{method:"POST",body:JSON.stringify({session_id:p,eval_set_id:Gi,case_name:Rl})});ws(!1),alert(`Test case "${q.eval_case.name}" created successfully!

Token count: ${q.session_token_count.toLocaleString()} tokens

Go to the Evals tab to view and edit the test case.`)}catch(q){alert(`Error creating test case: ${q.message||"Unknown error"}`)}finally{Wp(!1)}},[p,e,Gi,Rl]),m0=k.useCallback(()=>{const q=document.createElement("input");q.type="file",q.accept=".json",q.onchange=async ie=>{var ge;const de=(ge=ie.target.files)==null?void 0:ge[0];if(de)try{const fe=await de.text(),Le=JSON.parse(fe);if(!Le.events||!Array.isArray(Le.events)){alert("Invalid run file: missing events array");return}a(),l(),w(null),z(null),Le.events.forEach(Ie=>{s(Ie)})}catch(fe){alert(`Failed to load run file: ${fe}`)}},q.click()},[a,l,s]);return k.useEffect(()=>{if(x!==null){const q=document.querySelector(".event-row.selected");q==null||q.scrollIntoView({behavior:"smooth",block:"nearest"})}},[x]),e?o.jsxs("div",{className:`run-panel ${X?"resizing":""}`,children:[o.jsx("style",{children:`
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
      `}),o.jsx(M8,{agents:e.agents,events:i,selectedEventIndex:x,isOpen:Z,onOpenChange:I,runState:V}),o.jsxs("div",{className:"input-area",children:[o.jsxs("select",{className:"agent-selector",value:Hi||"",onChange:q=>Dp(q.target.value||null),disabled:n,title:"Select which agent to run",children:[o.jsx("option",{value:"",children:e.app.root_agent_id?`Root: ${((qp=e.agents.find(q=>q.id===e.app.root_agent_id))==null?void 0:qp.name)||e.app.root_agent_id}`:"No root agent"}),e.agents.filter(q=>q.id!==e.app.root_agent_id).map(q=>o.jsxs("option",{value:q.id,children:[q.name," (",q.type.replace("Agent",""),")"]},q.id))]}),o.jsxs("select",{className:"agent-selector",value:ze||"",onChange:q=>Ll(q.target.value||null),disabled:n||De,style:{minWidth:180},title:"Load a saved session",children:[o.jsx("option",{value:"",children:De?"Loading...":"Load Session..."}),Ee.map(q=>{const ie=new Date(q.started_at*1e3),de=q.duration?`${q.duration.toFixed(1)}s`:"?";return o.jsxs("option",{value:q.id,children:[ie.toLocaleString()," (",q.event_count," events, ",de,")"]},q.id)})]}),o.jsxs("div",{style:{position:"relative",flex:1,display:"flex"},children:[o.jsx("input",{ref:K,type:"text",placeholder:"Enter your query...",value:m,onChange:q=>v(q.target.value),onFocus:()=>J(!0),onBlur:()=>setTimeout(()=>J(!1),150),onKeyDown:q=>{q.key==="Enter"&&!q.shiftKey?qi():q.key==="Escape"&&J(!1)},disabled:n,style:{flex:1}}),L&&we.length>0&&o.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#18181b",border:"1px solid #3f3f46",borderRadius:"6px",marginTop:"4px",maxHeight:"240px",overflowY:"auto",zIndex:100,boxShadow:"0 4px 12px rgba(0,0,0,0.4)"},children:we.map((q,ie)=>o.jsxs("div",{style:{padding:"8px 12px",fontSize:"12px",color:"#e4e4e7",cursor:"pointer",borderBottom:ie<we.length-1?"1px solid #27272a":"none",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseDown:de=>{de.preventDefault(),qi(q.prompt)},onMouseEnter:de=>{de.currentTarget.style.background="#27272a"},onMouseLeave:de=>{de.currentTarget.style.background="transparent"},children:[o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1,marginRight:"8px"},children:q.prompt}),o.jsxs("span",{style:{fontSize:"10px",color:"#71717a",flexShrink:0},children:["×",q.count]})]},ie))})]}),n?o.jsxs("button",{className:"stop",onClick:n0,children:[o.jsx(Tj,{size:14}),"Stop"]}):o.jsxs("button",{onClick:()=>qi(),disabled:!m.trim(),children:[o.jsx(xr,{size:14}),"Run"]}),o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"4px",marginLeft:"12px",fontSize:"11px",color:N?"#22d3ee":"#71717a",cursor:"pointer"},title:"Run in isolated Docker container",children:[o.jsx("input",{type:"checkbox",checked:N,onChange:q=>$(q.target.checked),disabled:n,style:{accentColor:"#22d3ee"}}),"🐳 Sandbox"]}),N&&o.jsx("button",{onClick:o0,style:{background:"transparent",border:"1px solid #3f3f46",borderRadius:"4px",padding:"2px 8px",marginLeft:"8px",fontSize:"11px",color:"#a1a1aa",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px"},title:"View container logs",children:"📋 Logs"})]}),o.jsxs("div",{className:"toolbar",children:[o.jsxs("div",{className:"toolbar-section",children:[o.jsx(_v,{size:12,style:{color:"#71717a"}}),o.jsx("input",{type:"text",placeholder:"Filter events...",value:C,onChange:q=>R(q.target.value)})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[["agent_start","agent_end","tool_call","tool_result","model_call","model_response","state_change","callback_error"].map(q=>o.jsx("button",{className:`filter-chip ${E.has(q)?"active":""}`,onClick:()=>{const ie=new Set(E);ie.has(q)?ie.delete(q):ie.add(q),U(ie)},children:q.replace("_"," ")},q)),o.jsx("button",{className:`filter-chip ${E.has("callback_start")&&E.has("callback_end")?"active":""}`,onClick:()=>{const q=new Set(E);q.has("callback_start")&&q.has("callback_end")?(q.delete("callback_start"),q.delete("callback_end")):(q.add("callback_start"),q.add("callback_end")),U(q)},title:"Show/hide callback events",children:"callback"}),o.jsx("button",{className:`filter-chip ${F?"active":""}`,onClick:()=>te(!F),title:"Hide LLM_RESP (complete) events",children:"hide (complete)"})]}),o.jsx("div",{className:"toolbar-divider"}),o.jsxs("div",{className:"toolbar-section",children:[o.jsxs("button",{className:`toolbar-btn ${ae?"active":""}`,onClick:()=>{ye(!ae),le(!1),Se(!1)},children:[o.jsx(Bn,{size:12}),"State"]}),o.jsxs("button",{className:`toolbar-btn ${be?"active":""}`,onClick:()=>{Se(!be),ye(!1),le(!1)},children:[o.jsx(Ua,{size:12}),"Artifacts"]}),o.jsxs("button",{className:`toolbar-btn ${ee?"active":""}`,onClick:()=>{le(!ee),ye(!1),Se(!1)},children:[o.jsx(pc,{size:12}),"Tools"]})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{fontSize:10,color:"#71717a"},children:[Dt.length," / ",i.length," events"]}),_&&o.jsx("button",{className:"toolbar-btn",onClick:()=>z(null),children:"Clear Range"})]})]}),o.jsxs("div",{className:"main-content",ref:Pl,children:[o.jsxs("div",{className:"event-list-container",children:[o.jsxs("div",{className:"event-list-header",style:{gridTemplateColumns:Fp},children:[o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"#"}),o.jsx("div",{className:`column-resize-handle ${Pe===0?"active":""}`,onMouseDown:q=>vs(0,q)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Time"}),o.jsx("div",{className:`column-resize-handle ${Pe===1?"active":""}`,onMouseDown:q=>vs(1,q)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Agent"}),o.jsx("div",{className:`column-resize-handle ${Pe===2?"active":""}`,onMouseDown:q=>vs(2,q)})]}),o.jsxs("div",{className:"header-cell",children:[o.jsx("span",{children:"Type"}),o.jsx("div",{className:`column-resize-handle ${Pe===3?"active":""}`,onMouseDown:q=>vs(3,q)})]}),o.jsx("div",{className:"header-cell",children:o.jsx("span",{children:"Info"})})]}),o.jsx("div",{className:"event-list",ref:ys,children:Dt.length===0?o.jsxs("div",{className:"empty-state",children:[o.jsx(kv,{size:24}),o.jsx("span",{children:i.length===0?"No events yet":"No matching events"})]}):Dt.map((q,ie)=>{const de=i.indexOf(q),ge=gg[q.event_type]||gg.error,fe=P8[q.event_type]||Wa;return o.jsxs("div",{className:`event-row ${x===de?"selected":""}`,style:{background:ge.bg,gridTemplateColumns:Fp},onClick:()=>w(de),onDoubleClick:()=>{ye(!1),le(!1),Se(!1)},children:[o.jsx("div",{className:"index",children:de}),o.jsx("div",{className:"time",style:{color:ge.fg},children:L8(q.timestamp,t0.min)}),o.jsx("div",{className:"agent",children:o.jsx("span",{className:"agent-badge",style:{backgroundColor:nl(q.agent_name).bg,color:nl(q.agent_name).fg},children:q.agent_name})}),o.jsxs("div",{className:"type",style:{color:ge.fg},children:[o.jsx(fe,{size:10}),q.event_type.split("_")[0]]}),o.jsx("div",{className:"summary",children:vg(q)})]},de)})})]}),o.jsxs("div",{className:"side-panel-container",style:{width:me},children:[o.jsx("div",{className:`resize-handle ${X?"active":""}`,onMouseDown:()=>he(!0)}),o.jsxs("div",{className:"side-panel",style:{width:me-4},children:[o.jsxs("div",{className:"side-panel-tabs",children:[o.jsxs("button",{className:`side-panel-tab ${!ae&&!ee&&!be?"active":""}`,onClick:()=>{ye(!1),le(!1),Se(!1)},children:[o.jsx(Vr,{size:12,style:{marginRight:4}}),"Details"]}),o.jsxs("button",{className:`side-panel-tab ${ae?"active":""}`,onClick:()=>{ye(!0),le(!1),Se(!1)},children:[o.jsx(Bn,{size:12,style:{marginRight:4}}),"State"]}),o.jsxs("button",{className:`side-panel-tab ${be?"active":""}`,onClick:()=>{Se(!0),ye(!1),le(!1)},children:[o.jsx(Ua,{size:12,style:{marginRight:4}}),"Artifacts"]}),o.jsxs("button",{className:`side-panel-tab ${ee?"active":""}`,onClick:()=>{le(!0),ye(!1),Se(!1)},children:[o.jsx(pc,{size:12,style:{marginRight:4}}),"Tools"]})]}),o.jsx("div",{className:"side-panel-content",children:ee?o.jsx(V8,{project:e,selectedEventIndex:x,sandboxMode:N}):be?o.jsx(U8,{project:e,sessionId:p}):ae?o.jsx(F8,{events:i,selectedEventIndex:x,project:e}):Bp?o.jsx(O8,{event:Bp}):o.jsxs("div",{className:"empty-state",children:[o.jsx(Vr,{size:24}),o.jsx("span",{children:"Select an event to view details"})]})})]})]})]}),o.jsxs("div",{className:"stats-bar",children:[o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Events:"}),o.jsx("span",{className:"stat-value",children:i.length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Tool Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(q=>q.event_type==="tool_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Model Calls:"}),o.jsx("span",{className:"stat-value",children:i.filter(q=>q.event_type==="model_call").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Callbacks:"}),o.jsx("span",{className:"stat-value",children:i.filter(q=>q.event_type==="callback_start").length})]}),o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"State Changes:"}),o.jsx("span",{className:"stat-value",children:i.filter(q=>q.event_type==="state_change").length})]}),i.length>0&&o.jsxs("div",{className:"stat-item",children:[o.jsx("span",{children:"Duration:"}),o.jsxs("span",{className:"stat-value",children:[((i[i.length-1].timestamp-i[0].timestamp)*1e3).toFixed(0),"ms"]})]}),bs.total>0&&o.jsx("div",{className:"stat-item token-stats",children:o.jsxs("span",{className:"stat-value token-value",children:[o.jsxs("span",{className:"token-in",title:"Input tokens",children:[bs.input.toLocaleString(),"↑"]}),o.jsxs("span",{className:"token-out",title:"Output tokens",children:[bs.output.toLocaleString(),"↓"]}),o.jsx("span",{className:"token-total",title:"Total tokens",children:bs.total.toLocaleString()})]})}),o.jsx("div",{className:"stats-bar-spacer"}),o.jsxs("button",{className:"stats-bar-btn",onClick:m0,title:"Load a saved run",children:[o.jsx(jl,{size:12}),"Load"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:a0,disabled:i.length===0,title:"Save current run to file",children:[o.jsx(Bi,{size:12}),"Save"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:l0,disabled:!p||i.length===0,title:"Save current session to memory",children:[o.jsx(Bn,{size:12}),"Save to Memory"]}),o.jsxs("button",{className:"stats-bar-btn",onClick:f0,disabled:!p||i.length===0,title:"Create evaluation test case from this session",style:{background:"rgba(var(--accent-primary-rgb), 0.15)"},children:[o.jsx(Iu,{size:12}),"Create Test Case"]})]}),c0&&o.jsx("div",{className:"dialog-overlay",style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>ws(!1),children:o.jsxs("div",{className:"dialog-content",style:{background:"var(--bg-secondary)",borderRadius:"var(--radius-md)",padding:24,width:400,maxWidth:"90vw",border:"1px solid var(--border-color)"},onClick:q=>q.stopPropagation(),children:[o.jsxs("h3",{style:{marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[o.jsx(Iu,{size:18}),"Create Test Case from Session"]}),o.jsxs("div",{style:{marginBottom:16},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Test Case Name"}),o.jsx("input",{type:"text",value:Rl,onChange:q=>p0(q.target.value),placeholder:"Enter test case name",style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"}})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{style:{display:"block",marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Add to Evaluation Set"}),o.jsx("select",{value:Gi,onChange:q=>Up(q.target.value),style:{width:"100%",padding:"8px 12px",background:"var(--bg-tertiary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",color:"var(--text-primary)"},children:u0.map(q=>o.jsx("option",{value:q.id,children:q.name},q.id))})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:16},children:"This will extract user messages and tool calls from the current session to create a replayable test case. You can edit the expected responses and tool calls in the Evals tab after creation."}),o.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>ws(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:h0,disabled:Vp||!Gi,children:Vp?"Creating...":"Create Test Case"})]})]})}),G&&o.jsx(zE,{request:G,timeout:G.timeout||30,onApprove:r0,onDeny:i0,onClose:()=>Y(null)}),A&&o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e3},onClick:()=>D(!1),children:o.jsxs("div",{style:{backgroundColor:"#18181b",borderRadius:"8px",border:"1px solid #3f3f46",width:"90%",maxWidth:"1400px",height:"80%",display:"flex",flexDirection:"column",overflow:"hidden"},onClick:q=>q.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(pc,{size:16}),o.jsx("span",{style:{fontWeight:600},children:"Container Logs"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[o.jsxs("button",{onClick:Ji,disabled:B,style:{background:"#3f3f46",border:"none",borderRadius:"4px",padding:"4px 8px",color:"#e4e4e7",cursor:B?"wait":"pointer",display:"flex",alignItems:"center",gap:"4px",fontSize:"12px"},children:[o.jsx(Ht,{size:12,className:B?"animate-spin":""}),"Refresh"]}),o.jsx("button",{onClick:()=>D(!1),style:{background:"transparent",border:"none",color:"#71717a",cursor:"pointer",padding:"4px"},children:o.jsx(Ui,{size:16})})]})]}),o.jsxs("div",{style:{display:"flex",gap:"0",borderBottom:"1px solid #3f3f46",backgroundColor:"#27272a"},children:[o.jsx("button",{onClick:()=>W("agent"),style:{padding:"8px 16px",background:b==="agent"?"#18181b":"transparent",border:"none",borderBottom:b==="agent"?"2px solid #22d3ee":"2px solid transparent",color:b==="agent"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🤖 Agent"}),o.jsx("button",{onClick:()=>W("gateway"),style:{padding:"8px 16px",background:b==="gateway"?"#18181b":"transparent",border:"none",borderBottom:b==="gateway"?"2px solid #22d3ee":"2px solid transparent",color:b==="gateway"?"#22d3ee":"#a1a1aa",cursor:"pointer",fontSize:"13px"},children:"🌐 Gateway"})]}),o.jsx("div",{ref:H,onScroll:s0,style:{flex:1,overflow:"auto",padding:"12px",fontFamily:"ui-monospace, monospace",fontSize:"11px",lineHeight:"1.5",whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#d4d4d8",backgroundColor:"#09090b"},children:B?o.jsx("div",{style:{color:"#71717a",textAlign:"center",padding:"20px"},children:"Loading logs..."}):P[b]?o.jsx(I8,{content:P[b]}):o.jsx("div",{style:{color:"#71717a"},children:"No logs available"})})]})})]}):o.jsx("div",{className:"run-panel empty",children:"No project loaded"})}const H8=()=>Math.random().toString(36).substring(2,10),q8=()=>({id:H8(),name:"New SkillSet",description:"",embedding_model:void 0,app_model_id:void 0,external_store_type:void 0,external_store_config:{},search_enabled:!0,preload_enabled:!0,preload_top_k:3,preload_min_score:.4,sources:[],entry_count:0});function J8(){const{project:e,setProject:t}=yt(),[n,r]=k.useState(null),[i,s]=k.useState(null),[a,l]=k.useState(""),[c,u]=k.useState([]),[d,f]=k.useState(!1),[p,h]=k.useState(!1),[m,v]=k.useState(""),[j,g]=k.useState(!1),[x,w]=k.useState(null),[_,z]=k.useState(null),C=k.useRef(null),R=(e==null?void 0:e.skillsets)||[],E=R.find(O=>O.id===n);k.useEffect(()=>{gv().then(O=>z(O.available)).catch(()=>z(!1))},[]),k.useEffect(()=>{R.length>0&&!n&&r(R[0].id)},[R,n]),k.useEffect(()=>{!e||!n||U()},[e==null?void 0:e.id,n]);const U=k.useCallback(async()=>{if(!(!e||!n))try{const O=await dv(e.id,n);s(O),$(n,{entry_count:O.entry_count})}catch(O){console.error("Failed to load stats:",O)}},[e==null?void 0:e.id,n]),N=O=>{e&&t({...e,...O})},$=(O,b)=>{e&&t({...e,skillsets:e.skillsets.map(W=>W.id===O?{...W,...b}:W)})},G=()=>{if(!e)return;const O=q8();N({skillsets:[...R,O]}),r(O.id)},Y=O=>{e&&confirm("Delete this SkillSet and all its data?")&&(N({skillsets:R.filter(b=>b.id!==O)}),n===O&&r(R.length>1?R[0].id:null),s(null),u([]))},A=async()=>{if(!(!e||!n||!a.trim())){f(!0),w(null);try{const O=await hv(e.id,n,a.trim(),10,0);u(O.results)}catch(O){w("Search failed"),console.error(O)}finally{f(!1)}}},D=async()=>{if(!(!e||!n||!m.trim())){g(!0),w(null);try{const O=await pv(e.id,n,m.trim());v(""),await U(),alert(`Added ${O.chunks_added} chunks from ${O.source_name}`)}catch(O){w(O.message||"Failed to fetch URL")}finally{g(!1)}}},P=async O=>{var W;const b=(W=O.target.files)==null?void 0:W[0];if(!(!b||!e||!n)){w(null);try{const H=await fv(e.id,n,b);await U(),alert(`Added ${H.chunks_added} chunks from ${H.source_name}`)}catch(H){w(H.message||"Upload failed")}C.current&&(C.current.value="")}},M=async()=>{if(!(!e||!n)&&confirm("Delete all entries in this SkillSet?"))try{await mv(e.id,n),await U(),u([])}catch{w("Clear failed")}},B=O=>{const b=Math.round(O*100),W=160,H=70,y=20+(1-O)*15,S=.15+O*.25;return`linear-gradient(90deg, hsla(${W}, ${H}%, ${y}%, ${S}) 0%, transparent ${b}%)`};return e?o.jsxs("div",{className:"skillsets-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"skillset-list",children:[o.jsxs("div",{className:"skillset-list-header",children:[o.jsx("h3",{children:"SkillSets"}),o.jsx("button",{className:"btn-icon",onClick:G,title:"Add SkillSet",children:o.jsx(nt,{size:16})})]}),R.length===0?o.jsxs("div",{className:"empty-state",style:{padding:"40px 0"},children:[o.jsx(Bn,{size:32}),o.jsx("span",{children:"No SkillSets"}),o.jsxs("button",{className:"btn-primary",onClick:G,children:[o.jsx(nt,{size:14})," Create SkillSet"]})]}):R.map(O=>o.jsxs("div",{className:`skillset-item ${n===O.id?"selected":""}`,onClick:()=>r(O.id),children:[o.jsx(Bn,{size:16,style:{color:"var(--accent)",flexShrink:0}}),o.jsxs("div",{className:"skillset-item-info",children:[o.jsx("div",{className:"skillset-item-name",children:O.name}),o.jsxs("div",{className:"skillset-item-count",children:[O.entry_count||0," entries"]})]}),o.jsx("button",{className:"skillset-item-delete",onClick:b=>{b.stopPropagation(),Y(O.id)},children:o.jsx(Je,{size:14})})]},O.id))]}),E?o.jsxs("div",{className:"skillset-detail",children:[o.jsxs("div",{className:"skillset-header",children:[o.jsxs("div",{className:"skillset-header-info",children:[o.jsx("input",{className:"skillset-name-input",value:E.name,onChange:O=>$(E.id,{name:O.target.value}),placeholder:"SkillSet Name"}),o.jsx("textarea",{className:"skillset-desc-input",value:E.description,onChange:O=>$(E.id,{description:O.target.value}),placeholder:"Description (optional)",rows:1}),o.jsxs("div",{className:"skillset-model",children:[o.jsx("label",{style:{fontSize:"12px",color:"var(--text-secondary)",marginRight:"8px"},children:"Embedding Model:"}),o.jsxs("select",{style:{flex:1,padding:"4px 8px",fontSize:"12px",background:"var(--bg-secondary)",border:"1px solid var(--border)",borderRadius:"4px",color:"var(--text-primary)"},value:E.embedding_model||"text-embedding-004",onChange:O=>$(E.id,{embedding_model:O.target.value}),children:[o.jsxs("optgroup",{label:"Google Gemini",children:[o.jsx("option",{value:"text-embedding-004",children:"text-embedding-004 (768d)"}),o.jsx("option",{value:"text-embedding-005",children:"text-embedding-005"})]}),o.jsxs("optgroup",{label:"OpenAI",children:[o.jsx("option",{value:"text-embedding-3-small",children:"text-embedding-3-small (1536d)"}),o.jsx("option",{value:"text-embedding-3-large",children:"text-embedding-3-large (3072d)"})]}),o.jsxs("optgroup",{label:"Cohere",children:[o.jsx("option",{value:"embed-english-v3.0",children:"embed-english-v3.0 (1024d)"}),o.jsx("option",{value:"embed-multilingual-v3.0",children:"embed-multilingual-v3.0 (1024d)"})]})]})]}),o.jsxs("div",{className:"skillset-stats",children:[o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:(i==null?void 0:i.entry_count)||0})," entries"]}),o.jsxs("span",{className:"skillset-stat",children:[o.jsx("strong",{children:Object.keys((i==null?void 0:i.sources)||{}).length})," sources"]}),_===!1&&o.jsx("span",{className:"skillset-stat",style:{color:"var(--warning)"},children:"⚠ No embeddings"})]})]}),o.jsx("button",{className:"btn-icon",onClick:U,title:"Refresh",children:o.jsx(Ht,{size:16})})]}),x&&o.jsxs("div",{className:"error-banner",children:[x,o.jsx("button",{onClick:()=>w(null),children:o.jsx(Ui,{size:14})})]}),o.jsxs("div",{className:"search-section",children:[o.jsx("div",{className:"search-input-wrapper",children:o.jsx("input",{className:"search-input",value:a,onChange:O=>l(O.target.value),onKeyDown:O=>O.key==="Enter"&&A(),placeholder:"Search this SkillSet..."})}),o.jsxs("button",{className:"btn-primary",onClick:A,disabled:d||!a.trim(),children:[o.jsx(_v,{size:14}),d?"Searching...":"Search"]})]}),o.jsxs("div",{className:"search-results",children:[c.length===0&&!d&&a&&o.jsx("div",{className:"empty-state",children:o.jsx("span",{children:"No results found"})}),c.map(O=>o.jsxs("div",{className:"search-result",style:{background:B(O.score)},children:[o.jsxs("span",{className:"search-result-score",children:[(O.score*100).toFixed(0),"%"]}),o.jsx("div",{className:"search-result-text",children:O.text}),o.jsx("div",{className:"search-result-source",children:O.source_name})]},O.id))]}),o.jsxs("div",{className:"add-sources-section",children:[o.jsxs("div",{className:"add-sources-header",onClick:()=>h(!p),children:[p?o.jsx(zt,{size:16}):o.jsx(wt,{size:16}),o.jsx("h4",{children:"Add Sources"})]}),p&&o.jsxs("div",{className:"add-sources-content",children:[o.jsxs("div",{className:"source-row",children:[o.jsx(sp,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{className:"source-input",value:m,onChange:O=>v(O.target.value),onKeyDown:O=>O.key==="Enter"&&D(),placeholder:"Enter URL (e.g., llms.txt file)"}),o.jsxs("button",{className:"btn-primary",onClick:D,disabled:j||!m.trim(),children:[o.jsx(_j,{size:14}),j?"Loading...":"Add"]})]}),o.jsxs("div",{className:"source-row",children:[o.jsx(vv,{size:16,style:{color:"var(--text-tertiary)"}}),o.jsx("input",{ref:C,type:"file",accept:".txt,.md,.json,.csv,.html",onChange:P}),o.jsxs("button",{className:"btn-primary",onClick:()=>{var O;return(O=C.current)==null?void 0:O.click()},children:[o.jsx(jl,{size:14}),"Upload File"]}),o.jsx("span",{style:{fontSize:"12px",color:"var(--text-tertiary)"},children:".txt, .md, .json, .csv"})]}),((i==null?void 0:i.entry_count)||0)>0&&o.jsx("div",{className:"source-row",style:{marginTop:"8px"},children:o.jsxs("button",{className:"clear-button",onClick:M,children:[o.jsx(Je,{size:12}),"Clear All Entries (",(i==null?void 0:i.entry_count)||0,")"]})})]})]})]}):R.length>0?o.jsx("div",{className:"skillset-detail",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Bn,{size:48}),o.jsx("span",{children:"Select a SkillSet"})]})}):null]}):null}const Sn={tool_trajectory_avg_score:{name:"Tool Trajectory",description:"Did the agent call the right tools in the expected order?",requiresJudge:!1,scale:[0,1]},response_match_score:{name:"Response Match (ROUGE-1)",description:"Does the response contain expected text? (fuzzy word matching)",requiresJudge:!1,scale:[0,1]},response_evaluation_score:{name:"Response Evaluation (LLM)",description:"LLM-judged semantic match of final response",requiresJudge:!0,scale:[1,5]},final_response_match_v2:{name:"Response Quality v2 (LLM)",description:"Enhanced LLM-judged response quality check",requiresJudge:!0,scale:[0,1]},safety_v1:{name:"Safety",description:"Is the response safe and harmless? (Vertex AI)",requiresJudge:!0,scale:[0,1]},hallucinations_v1:{name:"Hallucination Detection",description:"Are all claims supported by context? No false information?",requiresJudge:!0,scale:[0,1]},rubric_based_final_response_quality_v1:{name:"Rubric: Response Quality",description:"Custom rubric-based quality assessment of responses",requiresJudge:!0,scale:[0,1]},rubric_based_tool_use_quality_v1:{name:"Rubric: Tool Use Quality",description:"Custom rubric-based assessment of tool usage",requiresJudge:!0,scale:[0,1]}},is=(e,t,n)=>{if(t==null)return{value:"-",comparison:""};const r=Sn[e],i=(r==null?void 0:r.scale)||[0,1];if(i[0]===1&&i[1]===5){const s=n??3.5;return{value:t.toFixed(1),comparison:`${s.toFixed(1)} / ${i[1].toFixed(1)}`}}else{const s=n??.7;return{value:`${Math.round(t*100)}%`,comparison:`${Math.round(s*100)}% min`}}},G8={metrics:[{metric:"tool_trajectory_avg_score",enabled:!0,criterion:{threshold:1}},{metric:"response_match_score",enabled:!0,criterion:{threshold:.7}}],default_trajectory_match_type:"in_order",num_runs:1};function e0(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,6)}`}function K8(){const{project:e}=yt(),[t,n]=k.useState([]),[r,i]=k.useState(null),[s,a]=k.useState(null),[l,c]=k.useState(new Set),[u,d]=k.useState(new Map),[f,p]=k.useState(new Map),[h,m]=k.useState(new Set),[v,j]=k.useState(!1),[g,x]=k.useState(null),[w,_]=k.useState([]),[z,C]=k.useState(null),R=async()=>{if(e)try{const I=await et.get(`/projects/${e.id}/eval-history`);_(I.runs||[])}catch(I){console.warn("Failed to load eval history:",I)}},E=async(I,Q=!0)=>{if(e)try{const V=(await et.get(`/projects/${e.id}/eval-history/${I}`)).run;if(C(V),V!=null&&V.case_results){const L=new Map;for(const J of V.case_results)L.set(J.eval_case_id,J);d(L)}if((V==null?void 0:V.eval_set_id)==="batch")c(new Set(t.map(L=>L.id))),i(null);else if(V!=null&&V.eval_set_id){const L=new Map;L.set(V.eval_set_id,V),p(L),i(V.eval_set_id),c(J=>new Set([...J,V.eval_set_id]))}a(null),Q&&window.history.pushState({run:I},"",`?run=${I}`)}catch(T){console.warn("Failed to load history run:",T)}},U=(I,Q=!0)=>{i(I),a(null),C(null),Q&&I?window.history.pushState({set:I},"",`?set=${I}`):Q&&window.history.pushState({},"",window.location.pathname)},N=(I,Q,T=!0)=>{i(I),a(Q),C(null),T&&Q?window.history.pushState({set:I,case:Q},"",`?set=${I}&case=${Q}`):T&&I&&window.history.pushState({set:I},"",`?set=${I}`)},$=()=>{C(null),d(new Map),p(new Map),window.history.pushState({},"",window.location.pathname)},G=async I=>{if(e)try{await et.delete(`/projects/${e.id}/eval-history/${I}`),_(Q=>Q.filter(T=>T.id!==I)),(z==null?void 0:z.id)===I&&C(null)}catch(Q){console.warn("Failed to delete history run:",Q)}};k.useEffect(()=>{e!=null&&e.id&&(Y(),R())},[e==null?void 0:e.id]),k.useEffect(()=>{const I=()=>{m(new Set(t.map(T=>T.id)))},Q=()=>{m(new Set),R()};return window.addEventListener("eval-tests-started",I),window.addEventListener("eval-tests-completed",Q),()=>{window.removeEventListener("eval-tests-started",I),window.removeEventListener("eval-tests-completed",Q)}},[t]),k.useEffect(()=>{if(!(e!=null&&e.id)||v)return;const I=()=>{const T=new URLSearchParams(window.location.search),V=T.get("set"),L=T.get("case"),J=T.get("run");if(J){E(J,!1);return}if(V)i(V),a(L),C(null),c(ne=>new Set([...ne,V]));else{if(!r&&!s&&!z)return;i(null),a(null),C(null)}};I();const Q=()=>{I()};return window.addEventListener("popstate",Q),()=>window.removeEventListener("popstate",Q)},[e==null?void 0:e.id,v,t.length]);const Y=async()=>{var I,Q;if(e!=null&&e.id){j(!0),x(null);try{const T=await et.get(`/projects/${e.id}/eval-sets`);if(n(T.eval_sets||[]),((I=T.eval_sets)==null?void 0:I.length)>0){const V=new URLSearchParams(window.location.search),L=V.get("set"),J=V.get("case"),ne=L||(J?(Q=T.eval_sets.find(pe=>pe.eval_cases.some(K=>K.id===J)))==null?void 0:Q.id:null)||T.eval_sets[0].id;c(new Set([ne]))}}catch(T){x(T.message||"Failed to load eval sets")}finally{j(!1)}}},A=t.find(I=>I.id===r),D=A==null?void 0:A.eval_cases.find(I=>I.id===s),P=async()=>{if(e!=null&&e.id)try{const I=await et.post(`/projects/${e.id}/eval-sets`,{name:"New Eval Set",description:"",eval_config:G8});n(Q=>[...Q,I.eval_set]),i(I.eval_set.id),c(Q=>new Set([...Q,I.eval_set.id]))}catch(I){x(I.message||"Failed to create eval set")}},[M,B]=k.useState(!1),[O,b]=k.useState(!1),[W,H]=k.useState(""),y=()=>{H(""),b(!0)},S=async()=>{if(e!=null&&e.id){b(!1),B(!0),x(null);try{const I=await xv(e.id,{context:W||void 0});I.success&&I.eval_set?(n(Q=>[...Q,I.eval_set]),i(I.eval_set.id),c(Q=>new Set([...Q,I.eval_set.id]))):(x(I.error||"Failed to generate eval set"),console.error("AI generation error:",I.traceback||I.raw_output))}catch(I){x(I.message||"Failed to generate eval set with AI")}finally{B(!1),H("")}}},F=async I=>{if(e!=null&&e.id)try{const Q=await et.post(`/projects/${e.id}/eval-sets/${I}/cases`,{name:"New Test Case",description:"",invocations:[{id:e0(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]}],initial_state:{},rubrics:[],enabled_metrics:[],tags:[]});n(T=>T.map(V=>V.id===I?{...V,eval_cases:[...V.eval_cases,Q.eval_case]}:V)),i(I),a(Q.eval_case.id)}catch(Q){x(Q.message||"Failed to create eval case")}},te=async(I,Q,T)=>{if(e!=null&&e.id)try{const V=await et.put(`/projects/${e.id}/eval-sets/${I}/cases/${Q}`,T);n(L=>L.map(J=>J.id===I?{...J,eval_cases:J.eval_cases.map(ne=>ne.id===Q?V.eval_case:ne)}:J))}catch(V){x(V.message||"Failed to update eval case")}},ae=async(I,Q)=>{if(e!=null&&e.id)try{await et.delete(`/projects/${e.id}/eval-sets/${I}/cases/${Q}`),n(T=>T.map(V=>V.id===I?{...V,eval_cases:V.eval_cases.filter(L=>L.id!==Q)}:V)),s===Q&&a(null)}catch(T){x(T.message||"Failed to delete eval case")}},ye=async I=>{if(e!=null&&e.id)try{await et.delete(`/projects/${e.id}/eval-sets/${I}`),n(Q=>Q.filter(T=>T.id!==I)),r===I&&(i(null),a(null))}catch(Q){x(Q.message||"Failed to delete eval set")}},ee=async I=>{if(e!=null&&e.id)try{const Q=await et.get(`/projects/${e.id}/eval-sets/${I}/export`),T=new Blob([JSON.stringify(Q,null,2)],{type:"application/json"}),V=URL.createObjectURL(T),L=document.createElement("a");L.href=V;const J=t.find(ne=>ne.id===I);L.download=`${(J==null?void 0:J.name)||"eval-set"}.json`,document.body.appendChild(L),L.click(),document.body.removeChild(L),URL.revokeObjectURL(V)}catch(Q){x(Q.message||"Failed to export eval set")}},le=async I=>{if(e!=null&&e.id)try{const Q=await I.text(),T=JSON.parse(Q),V=await et.post(`/projects/${e.id}/eval-sets/import`,T);n(L=>[...L,V.eval_set]),i(V.eval_set.id),c(L=>new Set([...L,V.eval_set.id]))}catch(Q){x(Q.message||"Failed to import eval set")}},be=k.useRef(null),Se=async()=>{if(!(!(e!=null&&e.id)||t.length===0))try{const I=await Promise.all(t.map(async L=>{try{return await et.get(`/projects/${e.id}/eval-sets/${L.id}/export`)}catch{return L}})),Q=new Blob([JSON.stringify(I,null,2)],{type:"application/json"}),T=URL.createObjectURL(Q),V=document.createElement("a");V.href=T,V.download=`${e.name||"project"}-eval-sets.json`,document.body.appendChild(V),V.click(),document.body.removeChild(V),URL.revokeObjectURL(T)}catch(I){x(I.message||"Failed to export all eval sets")}},me=async(I,Q)=>{if(e!=null&&e.id){m(T=>new Set([...T,Q]));try{const T=await et.post(`/projects/${e.id}/eval-sets/${I}/cases/${Q}/run`,{});d(V=>new Map(V).set(Q,T.result))}catch(T){x(T.message||"Failed to run eval case")}finally{m(T=>{const V=new Set(T);return V.delete(Q),V})}}},Ne=async I=>{if(!(e!=null&&e.id))return;const Q=t.find(V=>V.id===I);if(!Q)return;const T=Q.eval_cases.map(V=>V.id);m(V=>new Set([...V,I,...T]));try{const V=await et.post(`/projects/${e.id}/eval-sets/${I}/run`,{});p(L=>new Map(L).set(I,V.result));for(const L of V.result.case_results)d(J=>new Map(J).set(L.eval_case_id,L));try{await et.post(`/projects/${e.id}/eval-history`,V.result),R()}catch(L){console.warn("Failed to save eval run to history:",L)}}catch(V){x(V.message||"Failed to run eval set")}finally{m(V=>{const L=new Set(V);return L.delete(I),T.forEach(J=>L.delete(J)),L})}},X=I=>{c(Q=>{const T=new Set(Q);return T.has(I)?T.delete(I):T.add(I),T})},he=I=>{let Q=I.eval_cases.length,T=0,V=0,L=0;for(const J of I.eval_cases){const ne=u.get(J.id);ne?ne.passed?T++:V++:L++}return{total:Q,passed:T,failed:V,pending:L}},Z=I=>I==null?"-":`${Math.round(I*100)}%`;return e?o.jsxs("div",{className:"eval-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("aside",{className:"eval-sidebar",children:[o.jsxs("div",{className:"sidebar-header",children:[o.jsx("h3",{children:"Evaluation Tests"}),o.jsxs("div",{className:"header-actions",children:[o.jsx("input",{type:"file",ref:be,accept:".json",style:{display:"none"},onChange:I=>{var T;const Q=(T=I.target.files)==null?void 0:T[0];Q&&(le(Q),I.target.value="")}}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var I;return(I=be.current)==null?void 0:I.click()},title:"Import eval set from JSON",children:o.jsx(jl,{size:14})}),t.length>0&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Se,title:"Download all eval sets as JSON",children:o.jsx(Bi,{size:14})}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:Y,title:"Refresh",children:o.jsx(Ht,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:P,title:"New eval set",children:[o.jsx(nt,{size:14}),"Set"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:y,disabled:M,title:"Generate eval set with AI",style:{background:"linear-gradient(135deg, #8b5cf6, #6366f1)"},children:M?o.jsx(Ht,{size:14,className:"spin"}):o.jsx(bi,{size:14})})]})]}),o.jsxs("div",{className:"eval-tree",children:[v&&o.jsx("p",{style:{color:"var(--text-muted)",padding:"16px"},children:"Loading..."}),g&&o.jsx("div",{style:{color:"var(--error)",padding:"16px",fontSize:"13px"},children:g}),!v&&t.length===0&&o.jsxs("div",{className:"empty-state",style:{padding:"32px"},children:[o.jsx(cp,{size:32}),o.jsxs("p",{children:["No evaluation sets yet.",o.jsx("br",{}),"Create one or use AI to generate tests."]})]}),t.map(I=>{const Q=l.has(I.id),T=he(I),V=h.has(I.id);return o.jsxs("div",{className:"tree-item",children:[o.jsxs("div",{className:`tree-set ${r===I.id&&!s?"selected":""}`,onClick:()=>U(I.id),children:[o.jsx("button",{className:"expand-btn",onClick:L=>{L.stopPropagation(),X(I.id)},children:I.eval_cases.length>0?Q?o.jsx(zt,{size:14}):o.jsx(wt,{size:14}):o.jsx("span",{style:{width:14}})}),o.jsx(wv,{size:14,style:{color:"var(--accent-secondary)"}}),o.jsx("span",{className:"set-name",children:I.name}),o.jsx("button",{className:"add-case-btn",onClick:L=>{L.stopPropagation(),F(I.id)},title:"Add test case",style:{padding:"2px 4px",marginLeft:4,background:"transparent",border:"none",cursor:"pointer",opacity:.6,display:"flex",alignItems:"center"},children:o.jsx(nt,{size:12})}),T.total>0&&o.jsxs("span",{className:"set-stats",children:[T.passed>0&&o.jsx("span",{className:"stat-passed",children:T.passed}),T.failed>0&&o.jsx("span",{className:"stat-failed",children:T.failed}),T.pending>0&&o.jsx("span",{className:"stat-pending",children:T.pending})]}),o.jsx("button",{className:"run-btn",onClick:L=>{L.stopPropagation(),Ne(I.id)},title:"Run all tests in this set",disabled:V,children:V?o.jsx(Li,{size:12,className:"spinning"}):o.jsx(xr,{size:12})})]}),Q&&o.jsx("div",{className:"tree-children",style:{paddingLeft:16},children:I.eval_cases.map(L=>{var pe;const J=u.get(L.id),ne=h.has(L.id);return o.jsxs("div",{className:`tree-case ${s===L.id?"selected":""}`,onClick:()=>N(I.id,L.id),children:[ne?o.jsx(Li,{size:14,className:"spinning",style:{color:"var(--warning)"}}):J?J.passed?o.jsx(yn,{size:14,style:{color:"var(--success)"}}):o.jsx(yr,{size:14,style:{color:"var(--error)"}}):o.jsx(Va,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{className:"case-name",children:L.name}),J&&J.metric_results.length>0&&o.jsx("span",{style:{fontSize:11,color:J.passed?"var(--success)":"var(--error)"},children:Z((pe=J.metric_results[0])==null?void 0:pe.score)}),o.jsx("button",{className:"run-btn",onClick:K=>{K.stopPropagation(),me(I.id,L.id)},disabled:ne,children:o.jsx(xr,{size:12})})]},L.id)})})]},I.id)})]}),o.jsxs("div",{className:"history-section",children:[o.jsx("div",{className:"history-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",borderTop:"1px solid var(--border-color)",background:"var(--bg-secondary)"},children:o.jsxs("span",{style:{fontWeight:500,fontSize:13},children:["Previous Runs (",w.length,")"]})}),o.jsx("div",{className:"history-list",style:{maxHeight:200,overflowY:"auto"},children:w.length===0?o.jsx("div",{style:{padding:"12px",color:"var(--text-secondary)",fontSize:12,textAlign:"center"},children:"No previous runs"}):[...w].sort((I,Q)=>(Q.started_at||0)-(I.started_at||0)).map(I=>{const Q=I.passed_cases===I.total_cases;return o.jsx("div",{className:`history-item ${(z==null?void 0:z.id)===I.id?"selected":""}`,onClick:()=>E(I.id),style:{padding:"8px 12px",borderBottom:"1px solid var(--border-color)",cursor:"pointer",background:(z==null?void 0:z.id)===I.id?"var(--bg-tertiary)":"transparent",fontSize:12},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[Q?o.jsx(yn,{size:14,style:{color:"var(--success)",flexShrink:0}}):o.jsx(yr,{size:14,style:{color:"var(--error)",flexShrink:0}}),o.jsxs("div",{children:[o.jsx("div",{style:{fontWeight:500},children:I.eval_set_name||"Unnamed"}),o.jsx("div",{style:{color:"var(--text-secondary)",fontSize:11},children:new Date(I.started_at*1e3).toLocaleString()})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[o.jsxs("span",{style:{color:Q?"var(--success)":"var(--error)",fontWeight:500,fontSize:11},children:[I.passed_cases,"/",I.total_cases]}),o.jsx("button",{className:"btn btn-icon",onClick:T=>{T.stopPropagation(),G(I.id)},title:"Delete run",style:{padding:2},children:o.jsx(Je,{size:12})})]})]})},I.id)})})]})]}),o.jsx("div",{className:"eval-editor",children:z?o.jsx(Q8,{run:z,onClose:$}):D?o.jsx(X8,{evalCase:D,evalSetId:r,projectId:e.id,result:u.get(D.id),isRunning:h.has(D.id),onUpdate:I=>te(r,D.id,I),onDelete:()=>ae(r,D.id),onRun:()=>me(r,D.id),onClearResult:()=>d(I=>{const Q=new Map(I);return Q.delete(D.id),Q})}):A?o.jsx(Z8,{evalSet:A,projectId:e.id,result:f.get(A.id),isRunning:h.has(A.id),caseResults:u,onUpdate:async I=>{try{const Q=await et.put(`/projects/${e.id}/eval-sets/${A.id}`,I);n(T=>T.map(V=>V.id===A.id?Q.eval_set:V))}catch(Q){x(Q.message)}},onDelete:()=>ye(A.id),onRun:()=>Ne(A.id),onExport:()=>ee(A.id)}):o.jsx("div",{className:"editor-content",children:o.jsxs("div",{className:"empty-state",children:[o.jsx(Va,{size:48}),o.jsxs("p",{children:["Select a test case to edit",o.jsx("br",{}),"or create a new one"]})]})})}),O&&o.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},onClick:()=>b(!1),children:o.jsxs("div",{style:{background:"var(--bg-primary)",borderRadius:"var(--radius-lg)",padding:"24px",width:"90%",maxWidth:"500px",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.5)"},onClick:I=>I.stopPropagation(),children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[o.jsx(bi,{size:24,style:{color:"#8b5cf6"}}),o.jsx("h3",{style:{margin:0,fontSize:"18px"},children:"Generate Test Set with AI"})]}),o.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"14px",marginBottom:"16px"},children:"Describe what you want to test. The AI will generate test cases with expected outcomes, tool calls, and evaluation rubrics."}),o.jsx("textarea",{value:W,onChange:I=>H(I.target.value),placeholder:"e.g., Test error handling when user provides invalid input, edge cases for date parsing, scenarios where the agent should ask clarifying questions...",style:{width:"100%",minHeight:"120px",padding:"12px",fontSize:"14px",background:"var(--bg-secondary)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",color:"var(--text-primary)",resize:"vertical"},autoFocus:!0}),o.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"20px",justifyContent:"flex-end"},children:[o.jsx("button",{className:"btn btn-secondary",onClick:()=>b(!1),children:"Cancel"}),o.jsxs("button",{className:"btn btn-primary",onClick:S,style:{background:"linear-gradient(135deg, #8b5cf6, #6366f1)",display:"flex",alignItems:"center",gap:"8px"},children:[o.jsx(bi,{size:16}),"Generate"]})]})]})})]}):null}function Y8({value:e,onChange:t}){var a,l;const{project:n}=yt(),r=((a=n==null?void 0:n.app)==null?void 0:a.models)||[],i=(l=n==null?void 0:n.app)==null?void 0:l.default_model_id,s=r.find(c=>c.id===i);return o.jsxs("select",{value:e,onChange:c=>t(c.target.value),style:{width:"100%",maxWidth:400},children:[o.jsx("option",{value:"",children:s?`App Default (${s.model_name})`:"App Default"}),r.map(c=>o.jsx("option",{value:c.model_name,children:c.model_name},c.id)),o.jsx("option",{value:"gemini-2.0-flash",children:"gemini-2.0-flash"}),o.jsx("option",{value:"gemini-2.5-flash",children:"gemini-2.5-flash"}),o.jsx("option",{value:"gemini-2.5-pro",children:"gemini-2.5-pro"})]})}function Q8({run:e,onClose:t}){var h;const{project:n}=yt(),[r,i]=k.useState(!0),[s,a]=k.useState(new Set),l=e.case_results||[],c=l.filter(m=>m.passed).length,u=l.filter(m=>!m.passed).length,d=r?l.filter(m=>!m.passed):l,f=m=>{a(v=>{const j=new Set(v);return j.has(m)?j.delete(m):j.add(m),j})},p=m=>{m&&n&&(window.location.href=`/project/${n.id}/run?session=${m}`)};return o.jsxs("div",{className:"test-result-viewer",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"result-header",children:[o.jsx("h2",{children:e.eval_set_name||"Test Run Results"}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{if(n){const m=`${window.location.origin}/project/${n.id}/evaluate?run=${e.id}`;navigator.clipboard.writeText(m)}},title:"Copy link to this run",children:o.jsx(lp,{size:14})})})]}),o.jsxs("div",{className:"result-summary",children:[o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Status"}),o.jsx("span",{className:`value ${c===l.length?"passed":"failed"}`,children:c===l.length?"PASSED":"FAILED"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Passed"}),o.jsx("span",{className:"value passed",children:c})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Failed"}),o.jsx("span",{className:"value failed",children:u})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Total Cases"}),o.jsx("span",{className:"value",children:l.length})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Duration"}),o.jsx("span",{className:"value",children:e.duration_ms?`${(e.duration_ms/1e3).toFixed(1)}s`:"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Tokens"}),o.jsx("span",{className:"value",children:((h=e.total_tokens)==null?void 0:h.toLocaleString())||"-"})]}),o.jsxs("div",{className:"summary-stat",children:[o.jsx("span",{className:"label",children:"Run Time"}),o.jsx("span",{className:"value",style:{fontSize:13},children:e.started_at?new Date(e.started_at*1e3).toLocaleString():"-"})]})]}),o.jsxs("div",{style:{padding:"8px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",alignItems:"center",gap:10,background:"var(--bg-secondary)"},children:[o.jsxs("label",{className:"toggle-switch",style:{transform:"scale(0.85)"},children:[o.jsx("input",{type:"checkbox",checked:r,onChange:m=>i(m.target.checked)}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:"Hide passing results"})]}),o.jsxs("div",{className:"result-cases",children:[d.map((m,v)=>{var $,G,Y,A,D,P;const j=m.case_id||`case-${v}`,g=s.has(j),x=(($=m.metric_results)==null?void 0:$.filter(M=>!M.passed||M.error))||[],w=((G=m.metric_results)==null?void 0:G.filter(M=>M.passed&&!M.error))||[],_=((Y=m.rubric_results)==null?void 0:Y.filter(M=>!M.passed||M.error))||[],z=((A=m.rubric_results)==null?void 0:A.filter(M=>M.passed&&!M.error))||[],C=g?m.metric_results:x,R=g?m.rubric_results:_,E=g?m.invocation_results:(D=m.invocation_results)==null?void 0:D.filter(M=>{var B;return((B=M.metric_results)==null?void 0:B.some(O=>!O.passed))||M.error}),U=w.length+z.length,N=x.length+_.length;return o.jsxs("div",{className:"result-case",children:[o.jsxs("div",{className:"result-case-header",onClick:()=>f(j),style:{cursor:"pointer"},children:[o.jsxs("div",{className:"result-case-name",children:[o.jsx("span",{style:{marginRight:6,fontSize:12,color:"var(--text-muted)"},children:g?"▼":"▶"}),m.passed?o.jsx(yn,{size:16,style:{color:"var(--success)"}}):o.jsx(yr,{size:16,style:{color:"var(--error)"}}),m.eval_set_name&&(e==null?void 0:e.eval_set_id)==="batch"&&o.jsx("span",{style:{fontSize:10,color:"var(--text-muted)",background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4,marginRight:6},children:m.eval_set_name}),m.case_name||`Case ${v+1}`,o.jsxs("span",{style:{marginLeft:10,fontSize:11,color:"var(--text-muted)",fontWeight:400},children:[(m.num_runs||1)>1&&o.jsxs("span",{style:{marginRight:8,padding:"2px 6px",borderRadius:4,background:(m.pass_rate||0)>=.5?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:(m.pass_rate||0)>=.5?"var(--success)":"var(--error)",fontWeight:500},children:[m.runs_passed,"/",m.runs_completed," runs (",((m.pass_rate||0)*100).toFixed(0),"%)"]}),N>0&&o.jsxs("span",{style:{color:"var(--error)"},children:[N," failed"]}),N>0&&U>0&&" · ",U>0&&o.jsxs("span",{style:{color:"var(--success)"},children:[U," passed"]})]})]}),o.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[m.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:M=>{M.stopPropagation(),p(m.session_id)},title:"View session in Run panel",children:[o.jsx(yv,{size:12})," View Session"]}),o.jsx("span",{style:{fontSize:12,color:"var(--text-secondary)"},children:m.duration_ms?`${(m.duration_ms/1e3).toFixed(2)}s`:""})]})]}),o.jsxs("div",{className:"result-case-details",children:[(C==null?void 0:C.length)>0&&o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:8},children:[C.map((M,B)=>{const O=is(M.metric,M.score,M.threshold);return o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:M.error?"rgba(255, 193, 7, 0.1)":M.passed?"rgba(var(--success-rgb), 0.05)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${M.error?"var(--warning)":M.passed?"var(--border-color)":"var(--error)"}`,display:"flex",flexDirection:"column",alignItems:"center",minWidth:80},children:[o.jsx("span",{style:{fontSize:10,color:"var(--text-secondary)",textAlign:"center",marginBottom:2},children:M.metric.replace(/_/g," ").replace("v1","").replace("v2","").trim()}),M.error?o.jsx("span",{style:{fontSize:10,color:"var(--warning)"},children:"Error"}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{fontSize:14,fontWeight:600,color:M.passed?"var(--success)":"var(--error)"},children:O.value}),o.jsx("span",{style:{fontSize:9,color:"var(--text-muted)"},children:O.comparison})]})]},B)}),!g&&w.length>0&&o.jsxs("div",{style:{padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"var(--bg-tertiary)",border:"1px dashed var(--border-color)",display:"flex",alignItems:"center",fontSize:11,color:"var(--text-muted)"},children:["+",w.length," passed"]})]}),C==null?void 0:C.filter(M=>!M.passed&&M.rationale).map((M,B)=>o.jsxs("div",{style:{marginTop:8,padding:"8px 12px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:12},children:[o.jsxs("div",{style:{fontWeight:500,marginBottom:4,color:"var(--error)",fontSize:11},children:[M.metric.replace(/_/g," ")," - Why it failed:"]}),o.jsx("div",{style:{whiteSpace:"pre-wrap",color:"var(--text-secondary)",lineHeight:1.4},children:M.rationale})]},`rationale-${B}`)),(R==null?void 0:R.length)>0&&o.jsxs("div",{style:{marginTop:8},children:[o.jsx("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:4},children:"Custom Rubrics"}),R.map((M,B)=>o.jsxs("div",{style:{marginBottom:M.rationale&&!M.passed?8:4},children:[o.jsxs("div",{className:"metric-row",children:[o.jsx("span",{className:"metric-name",style:{flex:1},children:M.rubric}),o.jsx("span",{className:`metric-value ${M.passed?"passed":"failed"}`,children:M.passed?"✓ Pass":"✗ Fail"})]}),!M.passed&&M.rationale&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,padding:"6px 10px",borderRadius:"var(--radius-sm)",background:"rgba(var(--error-rgb), 0.05)",border:"1px solid rgba(var(--error-rgb), 0.2)",fontSize:11,color:"var(--text-secondary)"},children:[o.jsx("strong",{style:{color:"var(--error)"},children:"Why:"})," ",M.rationale]}),M.error&&o.jsxs("div",{style:{marginTop:4,marginLeft:8,fontSize:11,color:"var(--warning)"},children:["Error: ",M.error]})]},B)),!g&&z.length>0&&o.jsxs("div",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:["+",z.length," passed rubric",z.length>1?"s":""]})]}),g&&(m.num_runs||1)>1&&m.run_results&&m.run_results.length>0&&o.jsxs("div",{style:{marginTop:12,marginBottom:12},children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Individual Run Results (",m.runs_passed,"/",m.runs_completed," passed)"]}),o.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:m.run_results.map((M,B)=>o.jsxs("div",{style:{padding:"4px 10px",borderRadius:"var(--radius-sm)",background:M.error?"rgba(255, 193, 7, 0.15)":M.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${M.error?"var(--warning)":M.passed?"var(--success)":"var(--error)"}`,fontSize:11,display:"flex",alignItems:"center",gap:6},title:M.error||`Run ${M.run_number}: ${M.passed?"Passed":"Failed"} (${(M.duration_ms/1e3).toFixed(2)}s)`,children:[M.error?o.jsx(kl,{size:12,style:{color:"var(--warning)"}}):M.passed?o.jsx(yn,{size:12,style:{color:"var(--success)"}}):o.jsx(yr,{size:12,style:{color:"var(--error)"}}),o.jsxs("span",{style:{color:M.error?"var(--warning)":M.passed?"var(--success)":"var(--error)"},children:["Run ",M.run_number]}),o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:10},children:[(M.duration_ms/1e3).toFixed(1),"s"]})]},B))})]}),(E==null?void 0:E.length)>0&&o.jsxs("div",{className:"invocation-summary",children:[o.jsxs("div",{style:{fontSize:11,color:"var(--text-secondary)",marginBottom:8},children:["Invocations (",E.length,!g&&((P=m.invocation_results)==null?void 0:P.length)>E.length?` of ${m.invocation_results.length}`:"",")"]}),E.map((M,B)=>o.jsxs("div",{className:"invocation-item",children:[o.jsxs("div",{className:"invocation-query",children:["Turn ",M.invocation_id||B+1,": ",M.user_message||"(no message)"]}),M.actual_response&&o.jsxs("div",{className:"invocation-response",children:["Response: ",M.actual_response.substring(0,200),M.actual_response.length>200?"...":""]})]},B))]}),m.error&&o.jsx("div",{style:{marginTop:12,padding:12,background:"rgba(255, 107, 107, 0.1)",borderRadius:"var(--radius-sm)",color:"var(--error)",fontSize:12,whiteSpace:"pre-wrap"},children:m.error})]})]},j)}),l.length===0&&o.jsx("div",{style:{textAlign:"center",padding:32,color:"var(--text-secondary)"},children:"No test cases in this run"})]})]})}function X8({evalCase:e,evalSetId:t,projectId:n,result:r,isRunning:i,onUpdate:s,onDelete:a,onRun:l,onClearResult:c}){var z,C,R;const{project:u}=yt(),[d,f]=k.useState(e),[p,h]=k.useState("assertions");k.useEffect(()=>{f(e)},[e.id]);const m=k.useCallback(E=>{f(U=>({...U,...E})),s(E)},[s]),v=()=>{const E={id:e0(),user_message:"",expected_response:"",expected_tool_calls:[],tool_trajectory_match_type:"in_order",rubrics:[]};m({invocations:[...d.invocations,E]})},j=(E,U)=>{const N=[...d.invocations];N[E]={...N[E],...U},m({invocations:N})},g=E=>{m({invocations:d.invocations.filter((U,N)=>N!==E)})},x=E=>{const U=[...d.invocations];U[E]={...U[E],expected_tool_calls:[...U[E].expected_tool_calls,{name:"",args:{},args_match_mode:"subset"}]},m({invocations:U})},w=(E,U,N)=>{const $=[...d.invocations],G=[...$[E].expected_tool_calls];G[U]={...G[U],...N},$[E]={...$[E],expected_tool_calls:G},m({invocations:$})},_=(E,U)=>{const N=[...d.invocations];N[E]={...N[E],expected_tool_calls:N[E].expected_tool_calls.filter(($,G)=>G!==U)},m({invocations:N})};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(Va,{size:20,style:{color:"var(--accent-primary)"}}),o.jsx("input",{type:"text",value:d.name,onChange:E=>m({name:E.target.value}),placeholder:"Test case name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const E=`${window.location.origin}/project/${n}/evaluate?set=${t}&case=${e.id}`;navigator.clipboard.writeText(E)},title:"Copy link to this test case",children:o.jsx(lp,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:i,children:[i?o.jsx(Li,{size:14,className:"spinning"}):o.jsx(xr,{size:14}),"Run"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Je,{size:14})})]}),o.jsxs("div",{className:"tabs",children:[o.jsxs("div",{className:`tab ${p==="assertions"?"active":""}`,onClick:()=>h("assertions"),children:[o.jsx(Wa,{size:14,style:{marginRight:6}}),"Assertions (",d.invocations.length,")"]}),o.jsxs("div",{className:`tab ${p==="rubrics"?"active":""}`,onClick:()=>h("rubrics"),children:[o.jsx(cp,{size:14,style:{marginRight:6}}),"LLM Judges"]}),o.jsxs("div",{className:`tab ${p==="docs"?"active":""}`,onClick:()=>h("docs"),children:[o.jsx(Pi,{size:14,style:{marginRight:6}}),"Docs"]}),o.jsxs("div",{className:`tab ${p==="json"?"active":""}`,onClick:()=>h("json"),children:[o.jsx(zn,{size:14,style:{marginRight:6}}),"JSON"]})]}),o.jsxs("div",{className:"editor-content",children:[p==="assertions"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12},children:[o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"target_agent"}),o.jsxs("select",{value:d.target_agent||"",onChange:E=>m({target_agent:E.target.value||void 0}),style:{width:"100%"},children:[o.jsx("option",{value:"",children:"root_agent"}),(z=u==null?void 0:u.agents)==null?void 0:z.map(E=>o.jsx("option",{value:E.name,children:E.name},E.name))]})]}),o.jsxs("div",{style:{flex:1},children:[o.jsx("label",{style:{fontSize:11,color:"var(--text-muted)",marginBottom:4,display:"block"},children:"tags"}),o.jsx("input",{type:"text",value:d.tags.join(", "),onChange:E=>m({tags:E.target.value.split(",").map(U=>U.trim()).filter(Boolean)}),placeholder:"smoke, regression",style:{width:"100%"}})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:d.description,onChange:E=>m({description:E.target.value}),placeholder:"What does this test verify?",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["session_input ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(initial state)"})]}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(on,{height:"100%",defaultLanguage:"json",value:(()=>{var U;if((!d.initial_state||Object.keys(d.initial_state).length===0)&&((U=u==null?void 0:u.app)!=null&&U.state_keys)&&u.app.state_keys.length>0){const N={};return u.app.state_keys.forEach($=>{$.default_value!==void 0?N[$.name]=$.default_value:N[$.name]=$.type==="string"?"":$.type==="number"?0:$.type==="boolean"?!1:$.type==="array"?[]:{}}),JSON.stringify(N,null,2)}return JSON.stringify(d.initial_state,null,2)})(),onChange:E=>{try{E&&m({initial_state:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Wa,{size:14}),"Conversation Turns"]}),d.invocations.map((E,U)=>o.jsxs("div",{className:"invocation-card",children:[o.jsxs("div",{className:"invocation-number",children:[o.jsx("span",{children:U+1}),d.invocations.length>1&&o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>g(U),style:{padding:4},children:o.jsx(Je,{size:10})})]}),o.jsxs("div",{className:"invocation-content",children:[o.jsxs("div",{className:"invocation-row",children:[o.jsxs("div",{className:"form-section",children:[o.jsx("label",{children:"User Query"}),o.jsx("textarea",{value:E.user_message,onChange:N=>j(U,{user_message:N.target.value}),placeholder:"The message to send to the agent..."})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("label",{children:["Expected Response ",o.jsx("span",{style:{color:"var(--text-muted)",fontWeight:400},children:"(ROUGE-1)"})]}),o.jsx("textarea",{value:E.expected_response||"",onChange:N=>j(U,{expected_response:N.target.value||void 0}),placeholder:"Expected text (partial match)..."})]})]}),E.expected_tool_calls.map((N,$)=>o.jsxs("div",{className:"tool-call-compact",children:[o.jsx("input",{type:"text",value:N.name,onChange:G=>w(U,$,{name:G.target.value}),placeholder:"tool_name",className:"tool-name-input"}),o.jsxs("div",{className:"pillbox-toggle",children:[o.jsx("button",{className:`pill ${N.args_match_mode==="subset"?"active":""}`,onClick:()=>w(U,$,{args_match_mode:"subset"}),children:"Partial"}),o.jsx("button",{className:`pill ${N.args_match_mode==="exact"?"active":""}`,onClick:()=>w(U,$,{args_match_mode:"exact"}),children:"Exact"})]}),o.jsx("div",{className:"tool-args-editor",children:o.jsx(on,{height:"22px",defaultLanguage:"json",value:JSON.stringify(N.args||{}),onChange:G=>{try{G&&w(U,$,{args:JSON.parse(G)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,wordWrap:"off",scrollbar:{vertical:"hidden",horizontal:"hidden"},overviewRulerLanes:0,hideCursorInOverviewRuler:!0,overviewRulerBorder:!1,renderLineHighlight:"none",fontSize:11,padding:{top:3,bottom:3},automaticLayout:!0}})}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>_(U,$),style:{padding:"4px 6px"},children:o.jsx(Je,{size:10})})]},$)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>x(U),style:{marginTop:4},children:[o.jsx(nt,{size:12})," Assert Tool Call"]})]})]},E.id)),o.jsxs("button",{className:"btn btn-secondary",onClick:v,children:[o.jsx(nt,{size:14})," Add Turn"]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(yn,{size:14,style:{marginRight:6}}),"final_session_state ",o.jsx("span",{style:{fontWeight:400,color:"var(--text-muted)"},children:"(optional)"})]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Assert that session state contains these key-value pairs after all turns complete."}),o.jsx("div",{style:{height:80,borderRadius:"var(--radius-sm)",overflow:"hidden",border:"1px solid var(--border-color)"},children:o.jsx(on,{height:"100%",defaultLanguage:"json",value:d.expected_final_state?JSON.stringify(d.expected_final_state,null,2):"{}",onChange:E=>{if(!E||E==="{}")m({expected_final_state:void 0});else try{m({expected_final_state:JSON.parse(E)})}catch{}},theme:"vs-dark",options:{minimap:{enabled:!1},scrollBeyondLastLine:!1,lineNumbers:"off",glyphMargin:!1,folding:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,fontSize:12,automaticLayout:!0,scrollbar:{verticalScrollbarSize:6}}})})]})]}),p==="rubrics"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-section",style:{marginBottom:16},children:[{metric:"safety_v1",label:"safety_v1",default:.8,max:1},{metric:"hallucinations_v1",label:"hallucinations_v1",default:.8,max:1},{metric:"response_evaluation_score",label:"response_evaluation_score",default:3.5,max:5},{metric:"final_response_match_v2",label:"final_response_match_v2",default:.7,max:1}].map(({metric:E,label:U,default:N,max:$})=>{const G=(d.enabled_metrics||[]).find(A=>A.metric===E),Y=(G==null?void 0:G.threshold)??N;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:!!G,onChange:A=>{const D=[...d.enabled_metrics||[]];if(A.target.checked)D.push({metric:E,threshold:N});else{const P=D.findIndex(M=>M.metric===E);P!==-1&&D.splice(P,1)}m({enabled_metrics:D})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsx("span",{style:{fontSize:12,opacity:G?1:.5,minWidth:100},children:U}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:G?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:$===5?1:0,max:$,step:.1,value:Y,disabled:!G,onChange:A=>{const D=[...d.enabled_metrics||[]],P=D.findIndex(M=>M.metric===E);P!==-1&&(D[P]={...D[P],threshold:parseFloat(A.target.value)||0},m({enabled_metrics:D}))},style:{width:60,textAlign:"center",opacity:G?1:.3,padding:"2px 4px",fontSize:11}})]},E)})}),o.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--border-color)",margin:"16px 0"}}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Custom Rubrics"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Natural language criteria evaluated by an LLM judge. Returns pass/fail per rubric."}),d.rubrics.map((E,U)=>o.jsxs("div",{className:"tool-call-row",style:{marginBottom:8},children:[o.jsx("input",{type:"text",value:E.rubric,onChange:N=>{const $=[...d.rubrics];$[U]={rubric:N.target.value},m({rubrics:$})},placeholder:"e.g., The response mentions the return policy",style:{flex:1}}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>m({rubrics:d.rubrics.filter((N,$)=>$!==U)}),children:o.jsx(Je,{size:12})})]},U)),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>m({rubrics:[...d.rubrics,{rubric:""}]}),children:[o.jsx(nt,{size:12})," Add Rubric"]})]})]}),p==="docs"&&o.jsxs("div",{style:{fontSize:13,lineHeight:1.6,color:"var(--text-secondary)",overflowY:"auto",maxHeight:"100%"},children:[o.jsx("h3",{style:{marginBottom:16,color:"var(--text-primary)"},children:"Evaluation Test Case Guide"}),o.jsxs("section",{style:{marginBottom:24,padding:12,background:"rgba(var(--accent-primary-rgb), 0.1)",borderRadius:"var(--radius-md)",border:"1px solid var(--accent-primary)"},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Quick Overview"}),o.jsxs("p",{children:["Each test case simulates a ",o.jsx("strong",{children:"multi-turn conversation"})," with an agent. For each turn (invocation), you provide a user message and define what you expect the agent to do."]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Invocations"})," = conversation turns (user messages)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Response"})," = the agent's ",o.jsx("em",{children:"final text reply"})," for that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Expected Tool Calls"})," = tools the agent should invoke during that turn"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Session State"})," = test the ",o.jsx("em",{children:"final state"})," after ALL turns complete"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:'📝 What is "Expected Response"?'}),o.jsxs("p",{children:["The ",o.jsx("strong",{children:"Expected Response"})," is matched against the agent's ",o.jsx("strong",{children:"final response"})," for that specific turn — NOT every message."]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{style:{marginBottom:8},children:o.jsx("strong",{children:"During one turn, an agent may:"})}),o.jsxs("ul",{style:{marginLeft:20,marginBottom:12},children:[o.jsx("li",{children:"Send intermediate thinking/reasoning messages"}),o.jsx("li",{children:"Call multiple tools"}),o.jsx("li",{children:"Transfer to sub-agents (who may respond)"}),o.jsxs("li",{children:["Finally send a ",o.jsx("em",{children:"concluding response"})]})]}),o.jsxs("p",{children:["Only the ",o.jsx("strong",{children:"last text response"})," from the agent for that turn is compared against your Expected Response."]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Tip: If you need to verify intermediate steps, use Tool Trajectory matching or custom Rubrics."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🔄 Response Matching (ROUGE-1)"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"response_match_score"})," uses ",o.jsx("strong",{children:"ROUGE-1 F1 scoring"})," — fuzzy word-level matching:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Tokenizes both expected and actual responses into words"}),o.jsx("li",{children:"Calculates word overlap (not exact string match)"}),o.jsx("li",{children:"Returns a score from 0.0 to 1.0"})]}),o.jsxs("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8},children:[o.jsx("p",{children:o.jsx("strong",{children:"Example:"})}),o.jsxs("p",{children:["Expected: ",o.jsx("code",{children:'"The weather in Paris is sunny today"'})]}),o.jsxs("p",{children:["Actual: ",o.jsx("code",{children:'"Today in Paris, expect sunny weather"'})]}),o.jsx("p",{style:{marginTop:8,color:"var(--success)"},children:"✓ High ROUGE-1 score (same words, different order)"})]}),o.jsxs("p",{style:{marginTop:8},children:["A threshold of ",o.jsx("strong",{children:"0.7"})," means 70% word overlap is required to pass."]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🛠️ Tool Trajectory Matching"}),o.jsxs("p",{children:["The ",o.jsx("code",{children:"tool_trajectory_avg_score"})," verifies the agent called expected tools. Match types:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Exact"})," — Same tools in same order, no extras allowed"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"In Order"})," — Expected tools appear in order, extras allowed between"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Any Order"})," — All expected tools present, any order, extras allowed"]})]}),o.jsx("p",{style:{marginTop:8},children:"For each tool, you can match by:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:4},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"Name Only"})," — Just check the tool was called"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Exact Args"})," — Arguments must match exactly (provide JSON)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Args Subset"})," — Your expected args must be present in actual args"]})]})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💾 Session State Testing"}),o.jsxs("p",{children:[o.jsx("strong",{children:"Initial State"})," (Settings tab) — Pre-populate session state before running the test:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:"Set user preferences or context"}),o.jsx("li",{children:"Simulate a specific scenario"}),o.jsx("li",{children:"Test state-dependent behavior"})]}),o.jsxs("p",{style:{marginTop:12},children:[o.jsx("strong",{children:"Expected Final State"})," — Verified at the ",o.jsx("em",{children:"very end"})," of the test case, ",o.jsx("strong",{children:"after ALL invocations complete"}),"."]}),o.jsx("div",{style:{background:"var(--bg-secondary)",padding:12,borderRadius:"var(--radius-sm)",marginTop:8,borderLeft:"3px solid var(--warning)"},children:o.jsxs("p",{style:{margin:0},children:[o.jsx("strong",{children:"Important:"})," State is tested once after the entire conversation, NOT after each turn. To test state changes per-turn, use separate test cases."]})})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"🎯 Target Agent (Settings tab)"}),o.jsxs("p",{children:["By default, tests run against the ",o.jsx("strong",{children:"root_agent"})," of your App. You can select a specific sub-agent to test in isolation:"]}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsxs("li",{children:[o.jsx("strong",{children:"root_agent"})," — Test the full agent hierarchy (default)"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Specific agent"})," — Unit test individual agents"]})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Useful for testing sub-agents independently before integrating into the full system."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📋 Custom Rubrics"}),o.jsx("p",{children:"Rubrics are custom yes/no criteria evaluated by an LLM judge. Examples:"}),o.jsxs("ul",{style:{marginLeft:20,marginTop:8},children:[o.jsx("li",{children:'"Does the response mention the product price?"'}),o.jsx("li",{children:'"Is the tone professional and helpful?"'}),o.jsx("li",{children:'"Does the response avoid mentioning competitors?"'})]}),o.jsx("p",{style:{marginTop:8,fontStyle:"italic",color:"var(--text-muted)"},children:"Note: Rubric evaluation requires LLM-judged metrics to be enabled in the Eval Set."})]}),o.jsxs("section",{style:{marginBottom:24},children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"📊 Available Metrics"}),o.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:12},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Metric"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Type"}),o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Description"})]})}),o.jsx("tbody",{children:Object.keys(Sn).map(E=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px",fontFamily:"var(--font-mono)",fontSize:11},children:E}),o.jsx("td",{style:{padding:"8px 4px"},children:Sn[E].requiresJudge?o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--accent-primary)",color:"white",borderRadius:4},children:"LLM Judge"}):o.jsx("span",{style:{fontSize:10,padding:"2px 6px",background:"var(--bg-tertiary)",borderRadius:4},children:"Built-in"})}),o.jsx("td",{style:{padding:"8px 4px",color:"var(--text-muted)"},children:Sn[E].description})]},E))})]})]}),o.jsxs("section",{children:[o.jsx("h4",{style:{color:"var(--accent-primary)",marginBottom:8},children:"💡 Tips"}),o.jsxs("ul",{style:{marginLeft:20},children:[o.jsx("li",{children:"Start with simple single-turn tests, then add complexity"}),o.jsx("li",{children:'Use "In Order" matching for most tool trajectory tests'}),o.jsx("li",{children:"Lower ROUGE thresholds (0.5-0.6) for creative/varied responses"}),o.jsx("li",{children:"Higher thresholds (0.8-0.9) for factual/precise responses"}),o.jsx("li",{children:"Use tags to organize tests by feature or priority"}),o.jsx("li",{children:"Test sub-agents individually using Target Agent selector"})]})]})]}),p==="json"&&o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this test case. You can use this with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval"}),"."]})}),o.jsx("div",{style:{flex:1,minHeight:300,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(on,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify({name:d.name,description:d.description||void 0,tags:(C=d.tags)!=null&&C.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map(E=>{var U;return{user_message:E.user_message,expected_response:E.expected_response||void 0,expected_tool_calls:(U=E.expected_tool_calls)!=null&&U.length?E.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(R=d.rubrics)!=null&&R.length?d.rubrics.map(E=>E.rubric):void 0},null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var U,N;const E=JSON.stringify({name:d.name,description:d.description||void 0,tags:(U=d.tags)!=null&&U.length?d.tags:void 0,target_agent:d.target_agent!=="root_agent"?d.target_agent:void 0,invocations:d.invocations.map($=>{var G;return{user_message:$.user_message,expected_response:$.expected_response||void 0,expected_tool_calls:(G=$.expected_tool_calls)!=null&&G.length?$.expected_tool_calls.map(Y=>({tool_name:Y.tool_name,args:Y.match_type!=="name_only"&&Object.keys(Y.args||{}).length?Y.args:void 0})):void 0}}),session_input:Object.keys(d.session_input||{}).length?{state:d.session_input}:void 0,final_session_state:Object.keys(d.final_session_state||{}).length?d.final_session_state:void 0,rubrics:(N=d.rubrics)!=null&&N.length?d.rubrics.map($=>$.rubric):void 0},null,2);navigator.clipboard.writeText(E)},children:[o.jsx(Jr,{size:14})," Copy JSON"]})})]})]}),r&&o.jsxs("div",{className:"result-panel",children:[o.jsxs("div",{className:`result-header ${r.passed?"passed":"failed"}`,children:[r.passed?o.jsxs(o.Fragment,{children:[o.jsx(yn,{size:18})," ",o.jsx("strong",{children:"Passed"})]}):o.jsxs(o.Fragment,{children:[o.jsx(yr,{size:18})," ",o.jsx("strong",{children:"Failed"})]}),o.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:12},children:[r.total_tokens?o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},title:"Total tokens used",children:[r.total_tokens.toLocaleString()," tokens"]}):null,o.jsxs("span",{style:{color:"var(--text-muted)",fontSize:12},children:[r.duration_ms.toFixed(0),"ms"]}),r.session_id&&o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{window.location.href=`/project/${u==null?void 0:u.id}/run?session=${r.session_id}`},title:"View this session in the Run panel",style:{fontSize:11},children:[o.jsx(yv,{size:12}),"View Session"]}),c&&o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Close test results",style:{fontSize:11,padding:"4px 8px"},children:"✕"})]})]}),o.jsx("div",{className:"result-scores",children:r.metric_results.map((E,U)=>{var $;const N=is(E.metric,E.score,E.threshold);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${E.passed?"passed":"failed"}`,children:N.value}),o.jsx("div",{className:"score-label",children:(($=Sn[E.metric])==null?void 0:$.name)||E.metric}),o.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",marginTop:2},children:N.comparison}),E.error&&o.jsx("div",{style:{fontSize:10,color:"var(--error)",marginTop:4},children:E.error})]},U)})}),r.rubric_results&&r.rubric_results.length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Custom Rubrics"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:r.rubric_results.map((E,U)=>o.jsxs("div",{style:{padding:"8px 12px",borderRadius:"var(--radius-sm)",background:E.passed?"rgba(var(--success-rgb), 0.1)":"rgba(var(--error-rgb), 0.1)",border:`1px solid ${E.passed?"var(--success)":"var(--error)"}`,display:"flex",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontSize:16,color:E.passed?"var(--success)":"var(--error)",fontWeight:"bold"},children:E.passed?"✓":"✗"}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-primary)"},children:E.rubric}),E.error&&o.jsxs("div",{style:{fontSize:10,color:"var(--error)",marginTop:2},children:["Error: ",E.error]})]})]},U))})]}),r.invocation_results.map((E,U)=>o.jsxs("div",{className:"result-details",children:[o.jsxs("h5",{children:["Turn ",U+1,": ",E.user_message.length>50?E.user_message.slice(0,50)+"…":E.user_message]}),E.metric_results.length>0&&o.jsx("div",{style:{display:"flex",gap:8,marginBottom:8,flexWrap:"wrap"},children:E.metric_results.map((N,$)=>{var Y;const G=is(N.metric,N.score,N.threshold);return o.jsxs("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:"var(--radius-sm)",background:N.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:N.passed?"var(--success)":"var(--error)"},children:[((Y=Sn[N.metric])==null?void 0:Y.name)||N.metric,": ",G.value]},$)})}),o.jsxs("div",{className:"detail-box",children:[o.jsx("strong",{children:"Actual Response:"}),`
`,E.actual_response||"(no response)",`

`,E.actual_tool_calls.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("strong",{children:"Tool Calls:"}),`
`,E.actual_tool_calls.map((N,$)=>`  ${$+1}. ${N.name}(${JSON.stringify(N.args)})
`).join("")]})]})]},U)),r.error&&o.jsxs("div",{className:"result-details",children:[o.jsx("h5",{style:{color:"var(--error)"},children:"Error"}),o.jsx("div",{className:"detail-box",style:{color:"var(--error)"},children:r.error})]})]})]})}function Z8({evalSet:e,projectId:t,result:n,isRunning:r,caseResults:i,onUpdate:s,onDelete:a,onRun:l,onExport:c}){var v,j,g,x;const[u,d]=k.useState(e.name),[f,p]=k.useState(!1);k.useEffect(()=>{d(e.name)},[e.id]);const h=k.useCallback(()=>{u!==e.name&&s({name:u})},[u,e.name,s]),m=w=>w==null?"-":`${Math.round(w*100)}%`;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"editor-header",children:[o.jsx(wv,{size:20,style:{color:"var(--accent-secondary)"}}),o.jsx("input",{type:"text",value:u,onChange:w=>d(w.target.value),onBlur:h,placeholder:"Eval set name"}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:()=>{const w=`${window.location.origin}/project/${t}/evaluate?set=${e.id}`;navigator.clipboard.writeText(w)},title:"Copy link to this eval set",children:o.jsx(lp,{size:14})}),o.jsxs("button",{className:`btn btn-sm ${f?"btn-primary":"btn-secondary"}`,onClick:()=>p(!f),title:"View/Hide JSON",children:[o.jsx(zn,{size:14}),"JSON"]}),o.jsx("button",{className:"btn btn-secondary btn-sm",onClick:c,title:"Export as JSON (compatible with adk eval)",children:o.jsx(Bi,{size:14})}),o.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:r,children:[r?o.jsx(Li,{size:14,className:"spinning"}):o.jsx(xr,{size:14}),"Run All"]}),o.jsx("button",{className:"btn btn-danger btn-sm",onClick:a,children:o.jsx(Je,{size:14})})]}),o.jsx("div",{className:"editor-content",children:f?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,height:"100%"},children:[o.jsx("div",{style:{fontSize:12,color:"var(--text-secondary)",padding:"8px 0"},children:o.jsxs("p",{style:{margin:0},children:["This is the ADK-compatible JSON format for this evaluation set. Save this file and use with ",o.jsx("code",{style:{background:"var(--bg-tertiary)",padding:"2px 6px",borderRadius:4},children:"adk eval <agent_path> <eval_file.json>"})]})}),o.jsx("div",{style:{flex:1,minHeight:400,border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",overflow:"hidden"},children:o.jsx(on,{height:"100%",language:"json",theme:"vs-dark",value:JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(w=>{var _,z;return{name:w.name,description:w.description||void 0,tags:(_=w.tags)!=null&&_.length?w.tags:void 0,target_agent:w.target_agent!=="root_agent"?w.target_agent:void 0,invocations:w.invocations.map(C=>{var R;return{user_message:C.user_message,expected_response:C.expected_response||void 0,expected_tool_calls:(R=C.expected_tool_calls)!=null&&R.length?C.expected_tool_calls.map(E=>({tool_name:E.tool_name,args:E.match_type!=="name_only"&&Object.keys(E.args||{}).length?E.args:void 0})):void 0}}),session_input:Object.keys(w.session_input||{}).length?{state:w.session_input}:void 0,final_session_state:Object.keys(w.final_session_state||{}).length?w.final_session_state:void 0,rubrics:(z=w.rubrics)!=null&&z.length?w.rubrics.map(C=>C.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((v=e.eval_config.metrics)==null?void 0:v.filter(w=>w.enabled))||void 0}:void 0}],null,2),options:{readOnly:!0,minimap:{enabled:!1},fontSize:12,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,wordWrap:"on",padding:{top:12}}})}),o.jsx("div",{style:{display:"flex",gap:8},children:o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:()=>{var _;const w=JSON.stringify([{id:e.id,name:e.name,description:e.description||void 0,eval_cases:e.eval_cases.map(z=>{var C,R;return{name:z.name,description:z.description||void 0,tags:(C=z.tags)!=null&&C.length?z.tags:void 0,target_agent:z.target_agent!=="root_agent"?z.target_agent:void 0,invocations:z.invocations.map(E=>{var U;return{user_message:E.user_message,expected_response:E.expected_response||void 0,expected_tool_calls:(U=E.expected_tool_calls)!=null&&U.length?E.expected_tool_calls.map(N=>({tool_name:N.tool_name,args:N.match_type!=="name_only"&&Object.keys(N.args||{}).length?N.args:void 0})):void 0}}),session_input:Object.keys(z.session_input||{}).length?{state:z.session_input}:void 0,final_session_state:Object.keys(z.final_session_state||{}).length?z.final_session_state:void 0,rubrics:(R=z.rubrics)!=null&&R.length?z.rubrics.map(E=>E.rubric):void 0}}),eval_config:e.eval_config?{judge_model:e.eval_config.judge_model||void 0,metrics:((_=e.eval_config.metrics)==null?void 0:_.filter(z=>z.enabled))||void 0}:void 0}],null,2);navigator.clipboard.writeText(w)},children:[o.jsx(Jr,{size:14})," Copy JSON"]})})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"Description"}),o.jsx("textarea",{value:e.description,onChange:w=>s({description:w.target.value}),placeholder:"Description of this evaluation set...",style:{minHeight:40}})]}),o.jsxs("div",{className:"form-section",children:[o.jsx("h4",{children:"LLM Judge Model"}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Model used for LLM-judged metrics (safety, hallucinations, etc.)."}),o.jsx(Y8,{value:((j=e.eval_config)==null?void 0:j.judge_model)||"",onChange:w=>s({eval_config:{...e.eval_config,judge_model:w}})})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Sv,{size:14})," Evaluation Metrics"]}),o.jsx("p",{style:{fontSize:12,color:"var(--text-muted)",marginBottom:8},children:"Configure which metrics to use and their pass thresholds."}),Object.keys(Sn).map(w=>{var E,U,N;const _=Sn[w],z=(U=(E=e.eval_config)==null?void 0:E.metrics)==null?void 0:U.find($=>$.metric===w),C=(z==null?void 0:z.enabled)??!1,R=((N=z==null?void 0:z.criterion)==null?void 0:N.threshold)??.7;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[o.jsxs("label",{className:"toggle-switch",style:{margin:0},children:[o.jsx("input",{type:"checkbox",checked:C,onChange:$=>{var A;const G=[...((A=e.eval_config)==null?void 0:A.metrics)||[]],Y=G.findIndex(D=>D.metric===w);$.target.checked?Y===-1?G.push({metric:w,enabled:!0,criterion:{threshold:.7}}):G[Y]={...G[Y],enabled:!0}:Y!==-1&&(G[Y]={...G[Y],enabled:!1}),s({eval_config:{...e.eval_config,metrics:G}})}}),o.jsx("span",{className:"toggle-slider"})]}),o.jsxs("span",{style:{fontSize:12,opacity:C?1:.5,minWidth:140,fontWeight:C?500:400},children:[_.name,_.requiresJudge&&o.jsx("span",{style:{fontSize:9,marginLeft:4,color:"var(--accent-primary)"},children:"LLM"})]}),o.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",opacity:C?1:.4},children:"≥"}),o.jsx("input",{type:"number",min:0,max:1,step:.1,value:R,disabled:!C,onChange:$=>{var A;const G=[...((A=e.eval_config)==null?void 0:A.metrics)||[]],Y=G.findIndex(D=>D.metric===w);Y!==-1&&(G[Y]={...G[Y],criterion:{...G[Y].criterion,threshold:parseFloat($.target.value)||.7}},s({eval_config:{...e.eval_config,metrics:G}}))},style:{width:60,textAlign:"center",opacity:C?1:.3,padding:"2px 4px",fontSize:11}})]},w)}),o.jsxs("div",{className:"form-row",style:{marginTop:16},children:[o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Default Trajectory Match Type"}),o.jsxs("select",{value:((g=e.eval_config)==null?void 0:g.default_trajectory_match_type)||"in_order",onChange:w=>s({eval_config:{...e.eval_config,default_trajectory_match_type:w.target.value}}),children:[o.jsx("option",{value:"exact",children:"Exact (same order, no extras)"}),o.jsx("option",{value:"in_order",children:"In Order (extras allowed between)"}),o.jsx("option",{value:"any_order",children:"Any Order (all present, any order)"})]})]}),o.jsxs("div",{className:"form-field",children:[o.jsx("label",{children:"Number of Runs"}),o.jsx("input",{type:"number",min:1,max:10,value:((x=e.eval_config)==null?void 0:x.num_runs)||1,onChange:w=>s({eval_config:{...e.eval_config,num_runs:parseInt(w.target.value)||1}})}),o.jsx("p",{style:{fontSize:11,color:"var(--text-muted)",marginTop:4},children:"Run each test multiple times for statistical reliability."})]})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:[o.jsx(Nj,{size:14})," Coverage Summary"]}),n?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"result-scores",children:[o.jsxs("div",{className:"score-card",children:[o.jsxs("div",{className:"score-value",style:{color:"var(--accent-primary)"},children:[n.passed_cases,"/",n.total_cases]}),o.jsx("div",{className:"score-label",children:"Cases Passed"})]}),o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:`score-value ${n.overall_pass_rate>=.8?"passed":"failed"}`,children:m(n.overall_pass_rate)}),o.jsx("div",{className:"score-label",children:"Pass Rate"})]}),Object.entries(n.metric_avg_scores||{}).map(([w,_])=>{var C;const z=is(w,_);return o.jsxs("div",{className:"score-card",children:[o.jsx("div",{className:"score-value",children:z.value}),o.jsxs("div",{className:"score-label",children:["Avg ",((C=Sn[w])==null?void 0:C.name)||w]})]},w)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("div",{style:{marginBottom:4,fontSize:12,color:"var(--text-muted)"},children:"Overall Pass Rate"}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${n.overall_pass_rate>=.8?"passed":"failed"}`,style:{width:`${n.overall_pass_rate*100}%`}})})]}),Object.entries(n.metric_pass_rates||{}).length>0&&o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Metric Pass Rates"}),Object.entries(n.metric_pass_rates).map(([w,_])=>{var z;return o.jsxs("div",{style:{marginBottom:8},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4},children:[o.jsx("span",{children:((z=Sn[w])==null?void 0:z.name)||w}),o.jsx("span",{children:m(_)})]}),o.jsx("div",{className:"coverage-bar",children:o.jsx("div",{className:`coverage-fill ${_>=.8?"passed":"failed"}`,style:{width:`${_*100}%`}})})]},w)})]}),o.jsxs("div",{style:{marginTop:16},children:[o.jsx("h5",{style:{fontSize:13,marginBottom:8},children:"Individual Results"}),o.jsxs("table",{style:{width:"100%",fontSize:12,borderCollapse:"collapse"},children:[o.jsx("thead",{children:o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("th",{style:{textAlign:"left",padding:"8px 4px"},children:"Test Case"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Metrics"}),o.jsx("th",{style:{textAlign:"center",padding:"8px 4px"},children:"Status"})]})}),o.jsx("tbody",{children:n.case_results.map(w=>o.jsxs("tr",{style:{borderBottom:"1px solid var(--border-color)"},children:[o.jsx("td",{style:{padding:"8px 4px"},children:w.eval_case_name}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:w.metric_results.map((_,z)=>{const C=is(_.metric,_.score,_.threshold);return o.jsx("span",{style:{fontSize:10,padding:"2px 4px",marginRight:4,borderRadius:"var(--radius-sm)",background:_.passed?"rgba(var(--success-rgb), 0.15)":"rgba(var(--error-rgb), 0.15)",color:_.passed?"var(--success)":"var(--error)"},children:C.value},z)})}),o.jsx("td",{style:{textAlign:"center",padding:"8px 4px"},children:w.passed?o.jsx(yn,{size:14,style:{color:"var(--success)"}}):w.error?o.jsx(Pi,{size:14,style:{color:"var(--warning)"}}):o.jsx(yr,{size:14,style:{color:"var(--error)"}})})]},w.eval_case_id))})]})]})]}):o.jsxs("div",{style:{textAlign:"center",padding:"32px",color:"var(--text-muted)",background:"var(--bg-tertiary)",borderRadius:"var(--radius-md)"},children:[o.jsx(cp,{size:32,style:{marginBottom:8,opacity:.3}}),o.jsx("p",{children:"Run the evaluation set to see coverage metrics"})]})]}),o.jsxs("div",{className:"form-section",children:[o.jsxs("h4",{children:["Test Cases (",e.eval_cases.length,")"]}),e.eval_cases.length===0?o.jsx("p",{style:{color:"var(--text-muted)",fontSize:13},children:"No test cases yet. Add cases to this eval set to start testing."}):o.jsx("ul",{style:{listStyle:"none",padding:0},children:e.eval_cases.map(w=>{const _=i.get(w.id);return o.jsxs("li",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"var(--radius-sm)",marginBottom:8},children:[_?_.passed?o.jsx(yn,{size:14,style:{color:"var(--success)"}}):o.jsx(yr,{size:14,style:{color:"var(--error)"}}):o.jsx(Va,{size:14,style:{color:"var(--text-muted)"}}),o.jsx("span",{style:{flex:1},children:w.name}),o.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[w.invocations.length," turn(s)"]})]},w.id)})})]})]})})]})}function e6(){const{project:e,setProject:t}=yt(),[n,r]=k.useState(""),[i,s]=k.useState(!0),[a,l]=k.useState(!1),[c,u]=k.useState(null),[d,f]=k.useState(!1);if(!e)return null;k.useEffect(()=>{p()},[e.id]);async function p(){s(!0),u(null);try{const x=await rv(e.id);r(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function h(x){x!==void 0&&(r(x),l(!0),u(null))}async function m(){s(!0),u(null);try{const x=await iv(e.id,n);t(x),l(!1)}catch(x){u(x.message)}finally{s(!1)}}function v(){navigator.clipboard.writeText(n),f(!0),setTimeout(()=>f(!1),2e3)}function j(){const x=new Blob([n],{type:"text/yaml"}),w=URL.createObjectURL(x),_=document.createElement("a");_.href=w,_.download=`${e.name}.yaml`,_.click(),URL.revokeObjectURL(w)}function g(){const x=document.createElement("input");x.type="file",x.accept=".yaml,.yml",x.onchange=async w=>{var C;const _=(C=w.target.files)==null?void 0:C[0];if(!_)return;const z=await _.text();r(z),l(!0)},x.click()}return o.jsxs("div",{className:"yaml-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"yaml-header",children:[o.jsxs("div",{className:"yaml-title",children:[o.jsx("h3",{children:"Project Configuration"}),a&&o.jsxs("span",{className:"status-badge warning",children:[o.jsx(Pi,{size:12}),"Unsaved changes"]}),c&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Pi,{size:12}),c]}),d&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(ip,{size:12}),"Copied!"]})]}),o.jsxs("div",{className:"yaml-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:v,title:"Copy to clipboard",children:[o.jsx(Jr,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,title:"Download YAML",children:[o.jsx(Bi,{size:14}),"Download"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:g,title:"Upload YAML",children:[o.jsx(jl,{size:14}),"Upload"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:p,title:"Reload from server",children:[o.jsx(Ht,{size:14}),"Reload"]}),o.jsx("button",{className:"btn btn-primary btn-sm",onClick:m,disabled:!a||i,children:"Apply Changes"})]})]}),o.jsx("div",{className:"yaml-editor",children:o.jsx(on,{height:"100%",language:"yaml",theme:"vs-dark",value:n,onChange:h,options:{minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"yaml-info",children:[o.jsx("p",{children:"This YAML represents your entire project configuration including the app, agents, tools, and state keys."}),o.jsxs("p",{children:["You can edit the YAML directly, then click ",o.jsx("code",{children:"Apply Changes"})," to update the project. Use ",o.jsx("code",{children:"Download"})," to save a backup or ",o.jsx("code",{children:"Upload"})," to import a configuration."]})]})]})}function t6(){const{project:e}=yt(),[t,n]=k.useState(!1),[r,i]=k.useState(""),[s,a]=k.useState(!1),[l,c]=k.useState(null);if(k.useEffect(()=>{e&&(a(!0),c(null),fetch(`/api/projects/${e.id}/code`).then(f=>{if(!f.ok)throw new Error("Failed to fetch code");return f.json()}).then(f=>{let p=f.code||"";p=p.replace(/\n# --- Callback instrumentation \(for event tracking\) ---[\s\S]*?# --- End callback instrumentation ---\n/g,""),p=p.replace(/_wrap_callback\("[^"]+",\s*"[^"]+",\s*(\w+)\)/g,"$1"),i(p),a(!1)}).catch(f=>{c(f.message),a(!1),i("# Failed to generate code. Please check the backend logs.")}))},[e]),!e)return null;function u(){navigator.clipboard.writeText(r),n(!0),setTimeout(()=>n(!1),2e3)}function d(){if(!e)return;const f=new Blob([r],{type:"text/x-python"}),p=URL.createObjectURL(f),h=document.createElement("a");h.href=p,h.download=`${e.name}_agent.py`,h.click(),URL.revokeObjectURL(p)}return o.jsxs("div",{className:"code-panel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"code-header",children:[o.jsxs("div",{className:"code-title",children:[o.jsx(zn,{size:16}),o.jsx("h3",{children:"Python Code"}),o.jsx("span",{className:"badge",children:s?"Loading...":"Generated"}),t&&o.jsxs("span",{className:"status-badge success",children:[o.jsx(ip,{size:12}),"Copied!"]}),l&&o.jsxs("span",{className:"status-badge error",children:[o.jsx(Pi,{size:12}),"Error"]})]}),o.jsxs("div",{className:"code-actions",children:[o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:u,title:"Copy to clipboard",disabled:s||!!l,children:[o.jsx(Jr,{size:14}),"Copy"]}),o.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:d,title:"Download Python file",disabled:s||!!l,children:[o.jsx(Bi,{size:14}),"Download"]})]})]}),o.jsx("div",{className:"code-editor",children:s?o.jsx("div",{className:"code-loading",children:o.jsx("div",{children:"Loading generated code..."})}):l?o.jsxs("div",{className:"code-error",children:[o.jsx(Pi,{size:24}),o.jsx("div",{children:l})]}):o.jsx(on,{height:"100%",language:"python",theme:"vs-dark",value:r,options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:"'JetBrains Mono', monospace",lineNumbers:"on",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:4,insertSpaces:!0,padding:{top:12},wordWrap:"on"}})}),o.jsxs("div",{className:"code-info",children:[o.jsx("p",{children:"This is the Python code equivalent of your project configuration. You can use this code directly with ADK."}),o.jsxs("p",{children:["Place this in a file named ",o.jsx("code",{children:"agent.py"})," inside your agent directory, then run with ",o.jsx("code",{children:"adk web ."})," or ",o.jsx("code",{children:"adk run your_agent"}),"."]})]})]})}const n6=[{id:"app",label:"App",icon:Sv},{id:"agents",label:"Agents",icon:Rr},{id:"tools",label:"Tools",icon:gn},{id:"callbacks",label:"Callbacks",icon:zn},{id:"run",label:"Run",icon:kv},{id:"eval",label:"Evaluate",icon:Iu},{id:"yaml",label:"YAML",icon:vj},{id:"code",label:"Code",icon:zn}],r6=["app","agents","tools","callbacks","run","skillsets","eval","yaml","code"];function Rc(){var D,P;const{projectId:e,tab:t,itemId:n}=vk(),r=tp(),{project:i,setProject:s,activeTab:a,setActiveTab:l,hasUnsavedChanges:c,setHasUnsavedChanges:u,selectedAgentId:d,setSelectedAgentId:f,selectedToolId:p,setSelectedToolId:h}=yt(),[m,v]=k.useState(!0),[j,g]=k.useState(!1),[x,w]=k.useState(!1),[_,z]=k.useState(null),C=k.useRef(!0),R=k.useRef(null);k.useEffect(()=>{t&&r6.includes(t)?l(t):!t&&e&&r(`/project/${e}/${a}`,{replace:!0})},[t,e]),k.useEffect(()=>{t==="agents"&&n?f(n):t==="tools"&&n&&h(n)},[t,n]);function E(M){l(M),M==="agents"&&d?r(`/project/${e}/${M}/${d}`,{replace:!0}):M==="tools"&&p?r(`/project/${e}/${M}/${p}`,{replace:!0}):r(`/project/${e}/${M}`,{replace:!0})}function U(M){M?r(`/project/${e}/${a}/${M}`,{replace:!0}):r(`/project/${e}/${a}`,{replace:!0})}k.useEffect(()=>(e&&N(e),()=>{s(null),u(!1)}),[e]);async function N(M){C.current=!0;try{const B=await Qy(M);s(B),R.current=JSON.stringify(B),u(!1)}catch(B){console.error("Failed to load project:",B),r("/")}finally{v(!1),setTimeout(()=>{C.current=!1},100)}}async function $(){if(i){g(!0);try{const{eval_sets:M,...B}=i;await Au(i.id,B),R.current=JSON.stringify(i),u(!1)}catch(M){console.error("Failed to save project:",M)}finally{g(!1)}}}async function G(){if(i){w(!0),z(null),window.dispatchEvent(new CustomEvent("eval-tests-started"));try{let M=0,B=0;const O=[],b=[];for(const W of i.eval_sets||[]){if(W.eval_cases.length===0)continue;const H=await et.post(`/projects/${i.id}/eval-sets/${W.id}/run`,{});H.result&&(M+=H.result.passed_cases||0,B+=H.result.total_cases||0,H.result.case_results&&O.push(...H.result.case_results),b.push(H.result.eval_set_name||W.name||W.id))}if(O.length>0){const W={id:Date.now().toString(36)+Math.random().toString(36).substr(2,5),eval_set_id:"batch",eval_set_name:b.length>1?`All Tests (${b.length} sets)`:b[0]||"All Tests",started_at:Date.now()/1e3,completed_at:Date.now()/1e3,total_cases:B,passed_cases:M,failed_cases:B-M,case_results:O};try{await et.post(`/projects/${i.id}/eval-history`,W)}catch(H){console.warn("Failed to save batch eval run to history:",H)}}z({passed:M,total:B}),window.dispatchEvent(new CustomEvent("eval-tests-completed")),setTimeout(()=>z(null),5e3)}catch(M){console.error("Failed to run tests:",M),z({passed:0,total:-1}),setTimeout(()=>z(null),5e3)}finally{w(!1)}}}const Y=k.useRef(null);k.useEffect(()=>{if(i&&!C.current&&Y.current){const M=i.app.models||[],B=Y.current||[];if(M.some((b,W)=>{const H=B.find(y=>y.id===b.id);return H?H.provider!==b.provider||H.model_name!==b.model_name||H.api_base!==b.api_base||H.temperature!==b.temperature||H.max_output_tokens!==b.max_output_tokens||H.top_p!==b.top_p||H.top_k!==b.top_k:!1})){const b=i.app.default_model_id,W=i.agents.map(y=>{if(y.type==="LlmAgent"&&y.model){const S=y.model._appModelId;if(S){const F=M.find(te=>te.id===S);if(F)return{...y,model:{provider:F.provider,model_name:F.model_name,api_base:F.api_base,temperature:F.temperature,max_output_tokens:F.max_output_tokens,top_p:F.top_p,top_k:F.top_k,fallbacks:[],_appModelId:S}}}else if(b){const F=M.find(te=>te.id===b);if(F&&y.model.provider===F.provider&&y.model.model_name===F.model_name&&y.model.api_base===F.api_base)return{...y,model:{provider:F.provider,model_name:F.model_name,api_base:F.api_base,temperature:F.temperature,max_output_tokens:F.max_output_tokens,top_p:F.top_p,top_k:F.top_k,fallbacks:[],_appModelId:b}}}}return y});W.some((y,S)=>JSON.stringify(y)!==JSON.stringify(i.agents[S]))&&s({...i,agents:W})}}i&&(Y.current=i.app.models||[])},[i==null?void 0:i.app.models,i,s]);const A=k.useRef(null);return k.useEffect(()=>(i&&!C.current&&R.current&&JSON.stringify(i)!==R.current&&(u(!0),A.current&&clearTimeout(A.current),A.current=setTimeout(async()=>{try{const{eval_sets:B,...O}=i;await Au(i.id,O),R.current=JSON.stringify(i),u(!1)}catch(B){console.error("Auto-save failed:",B)}},500)),()=>{A.current&&clearTimeout(A.current)}),[i]),m?o.jsxs("div",{className:"loading-screen",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("header",{className:"top-bar",children:[o.jsxs("div",{className:"top-bar-left",children:[o.jsxs("button",{className:"back-btn",onClick:()=>r("/"),children:[o.jsx(gj,{size:18}),"Project"]}),o.jsx("h1",{className:"project-name",children:i.name})]}),o.jsx("nav",{className:"tabs-bar",children:n6.map(M=>o.jsxs("button",{className:`tab-btn ${a===M.id?"active":""}`,onClick:()=>E(M.id),children:[o.jsx(M.icon,{size:14}),M.label]},M.id))}),o.jsxs("div",{className:"top-bar-right",children:[o.jsxs("button",{className:`btn ${_?_.total===-1?"btn-error":_.passed===_.total?"btn-success":"btn-warning":"btn-secondary"}`,onClick:G,disabled:x||!((D=i==null?void 0:i.eval_sets)!=null&&D.some(M=>M.eval_cases.length>0)),title:(P=i==null?void 0:i.eval_sets)!=null&&P.some(M=>M.eval_cases.length>0)?"Run all evaluation tests":"No test cases defined",style:{marginRight:8},children:[x?o.jsx(jv,{size:16,className:"spin"}):o.jsx(xr,{size:16}),x?"Testing...":_?_.total===-1?"Error":`${_.passed}/${_.total}`:"Test"]}),o.jsxs("button",{className:"btn btn-primary",onClick:$,disabled:j,children:[o.jsx(Ha,{size:16}),j?"Saving...":"Save"]})]})]}),o.jsxs("main",{className:"main-content",children:[a==="app"&&o.jsx(Dj,{}),a==="agents"&&o.jsx(H4,{onSelectAgent:U}),a==="tools"&&o.jsx(SE,{onSelectTool:U}),a==="callbacks"&&o.jsx(NE,{onSelectCallback:U}),a==="run"&&o.jsx(W8,{}),a==="skillsets"&&o.jsx(J8,{}),a==="eval"&&o.jsx(K8,{}),a==="yaml"&&o.jsx(e6,{}),a==="code"&&o.jsx(t6,{})]})]}):null}function i6(){const{setMcpServers:e,setBuiltinTools:t}=yt();return k.useEffect(()=>{rp().then(e).catch(console.error),ov().then(t).catch(console.error)},[e,t]),o.jsxs(Ik,{children:[o.jsx(ei,{path:"/",element:o.jsx(Mj,{})}),o.jsx(ei,{path:"/project/:projectId",element:o.jsx(Rc,{})}),o.jsx(ei,{path:"/project/:projectId/:tab",element:o.jsx(Rc,{})}),o.jsx(ei,{path:"/project/:projectId/:tab/:itemId",element:o.jsx(Rc,{})}),o.jsx(ei,{path:"*",element:o.jsx(Lk,{to:"/",replace:!0})})]})}Ic.createRoot(document.getElementById("root")).render(o.jsx(Jt.StrictMode,{children:o.jsx(Dk,{children:o.jsx(i6,{})})}));
